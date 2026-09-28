/* Controles negativos do verificar.js. Roda em Node: `node controles.js`.

   Cada controle planta UMA falha num arquivo (banco.js ou app.js), escrita
   por cima e restaurada no fim aconteça o que acontecer, roda o verificar.js
   e exige que ele FALHE e que a mensagem cite o lugar certo. Um harness que
   passa com a falha plantada é um harness cego — e foi assim que se
   descobriu, na primeira versão, um regex morto (`"correta": ` contra
   `correta: `) que fazia dois controles não alterarem nada e "passarem".

   Não vai para o deploy (.vercelignore). */
const fs = require("fs"), path = require("path"), cp = require("child_process");
const DIR = __dirname;
const ARQS = ["banco.js", "app.js", "caderno/caderno.js"];
const originais = Object.fromEntries(ARQS.map(a => [a, fs.readFileSync(path.join(DIR, a), "utf8")]));

function roda() {
  const r = cp.spawnSync("node", ["verificar.js"], { cwd: DIR, encoding: "utf8" });
  return { ok: r.status === 0, saida: (r.stdout || "") + (r.stderr || "") };
}

/* substitui exatamente UMA ocorrência ou aborta — um controle que não altera
   nada é um controle que não controla nada */
function planta(orig, velho, novo) {
  const partes = orig.split(velho);
  if (partes.length !== 2) throw new Error(`controle inválido: ${partes.length - 1} ocorrência(s) de ${JSON.stringify(velho).slice(0, 80)}`);
  return partes.join(novo);
}
/* a mesma coisa, mas só dentro do bloco de UMA questão */
function noBloco(orig, id, velho, novo) {
  const i = orig.indexOf(`{ id: "${id}",`);
  if (i < 0) throw new Error("id inexistente " + id);
  const f = orig.indexOf("\n{ id: ", i + 1);
  const bloco = orig.slice(i, f < 0 ? undefined : f);
  return orig.slice(0, i) + planta(bloco, velho, novo) + (f < 0 ? "" : orig.slice(f));
}
const moveGabarito = (orig, id, para) => noBloco(orig, id, /correta: \d,/.exec(orig.slice(orig.indexOf(`{ id: "${id}",`)))[0], `correta: ${para},`);

const controles = [
  /* --- o gabarito é recalculado ------------------------------------------ */
  { nome: "identidade: gabarito de m37 movido para A (sinal trocado)",
    txt: o => moveGabarito(o, "m37", 0), cita: /m37: a alternativa A .* não é igual/ },
  { nome: "identidade: gabarito de m15 movido para B ((x − 3)²)",
    txt: o => moveGabarito(o, "m15", 1), cita: /m15: a alternativa B .* não é igual/ },
  { nome: "identidade: distrator de m38 trocado por um equivalente ((x − 3)(x − 2)) — dois gabaritos",
    txt: o => planta(o, '"(x − 1)(x − 6)",', '"(x − 3)(x − 2)",'), cita: /m38: a alternativa B .* também é igual/ },
  { nome: "identidade: expressão original de m39 adulterada em `conta`",
    txt: o => planta(o, 'conta: "x => (2 * x + 3) ** 2"', 'conta: "x => (2 * x + 3) ** 2 + 1"'), cita: /m39: a alternativa C .* não é igual/ },
  { nome: "numérica: `valor` de m45 mudado para 130 (a conta continua dando 150)",
    txt: o => planta(o, "valor: 150,", "valor: 130,"), cita: /m45: a conta dá 150/ },
  { nome: "numérica com raiz cúbica: gabarito de m26 movido para A (2∛3)",
    txt: o => moveGabarito(o, "m26", 0), cita: /m26/ },
  { nome: "numérica recuperada: gabarito de m01 movido para C",
    txt: o => moveGabarito(o, "m01", 2), cita: /m01/ },
  { nome: "numérica: m35 volta a ter 3/10 ao lado de 0,3 — o mesmo número em duas alternativas",
    txt: o => noBloco(o, "m35", '"0,33",', '"3/10",'), cita: /m35: as alternativas A e E valem o mesmo/ },
  /* --- o comentário e o "simples" dizem a letra certa ---------------------- */
  { nome: "veredito: comentário de p33 diz Gabarito D, gabarito é C",
    txt: o => planta(o, "Gabarito <strong>C</strong>: <em>trigésimo</em>", "Gabarito <strong>D</strong>: <em>trigésimo</em>"), cita: /p33: o comentário dá o veredito para D/ },
  { nome: "simples: p26 sem o campo",
    txt: o => noBloco(o, "p26", "simples: ", "simplesX: "), cita: /p26: sem "simples"/ },
  { nome: "simples: m45 diz letra A, gabarito é C",
    txt: o => noBloco(o, "m45", "letra <strong>C</strong>", "letra <strong>A</strong>"), cita: /m45: o "simples" diz letra A/ },
  { nome: "simples: m47 com uma frase de 40 palavras (texto de adulto)",
    txt: o => noBloco(o, "m47", "<p>Jogue duas moedas.", "<p>Quando jogamos duas moedas honestas ao mesmo tempo e observamos com atenção o resultado de cada uma delas separadamente, percebemos que existem exatamente quatro possibilidades igualmente prováveis para o par de faces obtido, e apenas uma delas mostra cara nas duas moedas simultaneamente."), cita: /m47: "simples" tem uma frase de \d+ palavras/ },
  /* --- de quando é a questão --------------------------------------------- */
  { nome: "ano/número: p01 diz que era a questão 7 da prova, mas o comentário cita a 06",
    txt: o => noBloco(o, "p01", "numero: 6,", "numero: 7,"), cita: /p01: o comentário cita a questão 06, e `numero` diz 7/ },
  { nome: "ano/número: p11 (inédita, edital 2026) com ano 2025",
    txt: o => noBloco(o, "p11", "ano: 2026,", "ano: 2025,"), cita: /p11: ano 2025 não bate com o da fonte edital2026/ },
  { arquivo: "app.js", nome: "app: etiqueta volta a dizer só \"Questão da banca\", sem ano nem número",
    txt: o => planta(o, "? `${B.meta.banca} ${q.ano} · Questão ${dois(q.numero)}`", '? "Questão da banca"'), cita: /a etiqueta da questão recuperada não traz ano e número/ },
  { nome: "origem: comentário de p51 volta a dizer a cidade e o cargo",
    txt: o => noBloco(o, "p51", "Questão 01 de Português (INEPAM 2023).", "Questão 01 de Português da prova de Psicólogo de Adamantina (INEPAM 2023)."), cita: /p51: o comentário cita a origem além de banca e ano/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a linha de fonte da ficha volta a trazer o documento",
    txt: o => planta(o, "`Questão ${dois(q.numero)} · ${B.meta.banca} ${q.ano}.`", "`Questão ${dois(q.numero)} · ${B.meta.banca} ${q.ano} — ${FONTES[q.fonte]}.`"), cita: /a linha de fonte da ficha diz mais do que banca e ano/ },
  /* --- a forma ------------------------------------------------------------ */
  { nome: "forma: p50 removido (uma questão a menos)",
    txt: o => { const i = o.indexOf('{ id: "p50",'); const f = o.indexOf('{ id: "m01",'); return o.slice(0, i) + o.slice(f); }, cita: /esperava \d+ questões, há \d+/ },
  { nome: "forma: p51 (real) marcada como inédita — contagem de reais e ordem",
    txt: o => noBloco(o, "p51", 'origem: "recuperada",', 'origem: "inedita",'), cita: /esperava 55 questões reais/ },
  { nome: "distribuição: quatro gabaritos E de inéditas viram A",
    txt: o => ["p15", "p21", "p28", "p32"].reduce((t, id) => moveGabarito(t, id, 0), o), cita: /letras desequilibradas nas inéditas/ },
  { arquivo: "app.js", nome: "app: o filtro \"Da banca\" mostra as inéditas em vez das reais",
    txt: o => planta(o, 'f === "banca" ? lista.filter(q => q.origem === "recuperada")', 'f === "banca" ? lista.filter(q => q.origem === "inedita")'), cita: /o filtro "Da banca" mostrou \d+ cartões/ },
  { nome: "marcação: <strong> sem fechamento em p26",
    txt: o => planta(o, "<em>Pa-ra-<strong>guai</strong></em>", "<em>Pa-ra-<strong>guai</em>"), cita: /p26: <strong> desequilibrado/ },
  /* --- a página: as abas ------------------------------------------------- */
  { arquivo: "app.js", nome: "app: o cartão ignora a aba guardada e abre sempre em Comentário",
    txt: o => planta(o, "    mostra(abaAtiva);\n", '    mostra("comentario");\n'), cita: /o segundo cartão não abriu na aba guardada/ },
  { arquivo: "app.js", nome: "app: os dois painéis ficam visíveis ao mesmo tempo",
    txt: o => planta(o, "paineis[k].hidden = k !== qual;", "paineis[k].hidden = false;"), cita: /a aba Comentário não é a visível de início/ },
  /* --- o caderno para imprimir ------------------------------------------- */
  { arquivo: "caderno/caderno.js", nome: "caderno: texto de apoio repetido em cada questão",
    txt: o => planta(o, "lista[i - 1].texto !== q.texto)", "true)"), cita: /texto de apoio impresso \d+ vez/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: gabarito resumido com a letra seguinte",
    txt: o => planta(o, "[i + k + 1, LETRAS[q.correta], q.id]", "[i + k + 1, LETRAS[(q.correta + 1) % 5], q.id]"), cita: /o gabarito impresso não bate/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: conjunto de questões ignorado (imprime tudo)",
    txt: o => planta(o, 'op.origem === "todas" || q.origem === "recuperada" || (op.origem === "selecao" && q.selecao === true)', "true"), cita: /o caderno padrão montou \d+ questões/ },
  { nome: "seleção: uma inédita a mais marcada (p11) — 51 de português",
    txt: o => noBloco(o, "p11", 'origem: "inedita",', 'origem: "inedita",\n  selecao: true,'), cita: /a seleção tem 51 de português/ },
  { nome: "seleção: uma real (p01) com selecao: true",
    txt: o => noBloco(o, "p01", 'origem: "recuperada",', 'origem: "recuperada",\n  selecao: true,'), cita: /`selecao` só pode ser true, e só em inédita/ },
  { arquivo: "app.js", nome: "app: o filtro \"50 + 50\" mostra as reais só",
    txt: o => planta(o, 'f === "selecao" ? lista.filter(q => q.origem === "recuperada" || q.selecao === true)', 'f === "selecao" ? lista.filter(q => q.origem === "recuperada")'), cita: /o filtro "50 \+ 50" mostrou \d+ cartões/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: comentário de outra questão dentro da ficha",
    txt: o => planta(o, 'h("div", { class: "texto-comentario", html: q.comentario })', 'h("div", { class: "texto-comentario", html: Q[0].comentario })'), cita: /alguma ficha não traz/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a letra grande do gabarito na ficha é a seguinte",
    txt: o => planta(o, 'h("span", { class: "letrao" }, letra)', 'h("span", { class: "letrao" }, LETRAS[(q.correta + 1) % 5])'), cita: /alguma ficha não traz/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: o nome do estudante some da capa",
    txt: o => planta(o, 'h("span", { class: "linha nome" }, op.nome || "")', 'h("span", { class: "linha nome" }, "")'), cita: /a capa não traz o nome do estudante/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: Simplificando some da ficha",
    txt: o => planta(o, "op.simples && q.simples ?", "false ?"), cita: /alguma ficha não traz/ },
  { arquivo: "app.js", nome: "app: clicar em Simplificando não guarda a escolha",
    txt: o => planta(o, "try { localStorage.setItem(CH_ABA, qual); } catch (e) { /* sem armazenamento */ }", "/* nada */"), cita: /a aba escolhida não foi guardada/ },
];

let falhos = 0;
try {
  for (const c of controles) {
    const arq = c.arquivo || "banco.js";
    let txt;
    try { txt = c.txt(originais[arq]); } catch (e) { console.log(`✗ CONTROLE INVÁLIDO (${e.message.slice(0, 90)}): ${c.nome}`); falhos++; continue; }
    if (txt === originais[arq]) { console.log(`✗ CONTROLE NÃO ALTEROU NADA: ${c.nome}`); falhos++; continue; }
    fs.writeFileSync(path.join(DIR, arq), txt, "utf8");
    const r = roda();
    fs.writeFileSync(path.join(DIR, arq), originais[arq], "utf8");
    const mordeu = !r.ok && c.cita.test(r.saida);
    if (!mordeu) falhos++;
    console.log(`${mordeu ? "✓ mordeu" : "✗ CEGO  "}  ${c.nome}`);
    if (!mordeu) console.log("      saída: " + r.saida.split("\n").filter(l => l.includes("!")).slice(0, 4).join("\n      "));
  }
} finally {
  for (const a of ARQS) fs.writeFileSync(path.join(DIR, a), originais[a], "utf8");
}
const r = roda();
console.log(`\nrestaurado: ${r.ok ? "verde" : "VERMELHO (!!)"} · ${controles.length - falhos}/${controles.length} controles morderam`);
process.exit(falhos || !r.ok ? 1 : 0);
