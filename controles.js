/* Controles negativos do verificar.js. Roda em Node: `node controles.js`.

   Cada controle planta UMA falha num arquivo (banco.js, app.js,
   caderno/caderno.js ou caderno/caderno.css), roda o verificar.js e exige
   que ele FALHE citando o lugar certo; o arquivo é restaurado aconteça o
   que acontecer. Um harness que passa com a falha plantada é um harness
   cego. Um controle que não altera nada é erro.

   banco.js é gerado, mas plantar nele é legítimo: o que se testa é o
   harness, e o arquivo volta ao original no fim.

   Não vai para o deploy (.vercelignore). */
const fs = require("fs"), path = require("path"), cp = require("child_process");
const DIR = __dirname;
const ARQS = ["banco.js", "app.js", "caderno/caderno.js", "caderno/caderno.css"];
const originais = Object.fromEntries(ARQS.map(a => [a, fs.readFileSync(path.join(DIR, a), "utf8")]));

function roda() {
  const r = cp.spawnSync("node", ["verificar.js"], { cwd: DIR, encoding: "utf8" });
  return { ok: r.status === 0, saida: (r.stdout || "") + (r.stderr || "") };
}
/* substitui exatamente UMA ocorrência ou aborta */
function planta(orig, velho, novo) {
  const partes = orig.split(velho);
  if (partes.length !== 2) throw new Error(`controle inválido: ${partes.length - 1} ocorrência(s) de ${JSON.stringify(velho).slice(0, 80)}`);
  return partes.join(novo);
}
/* a mesma coisa, mas só dentro do bloco de UMA questão de banco.js */
function noBloco(orig, id, velho, novo) {
  const i = orig.indexOf(`{ id: "${id}",`);
  if (i < 0) throw new Error("id inexistente " + id);
  const f = orig.indexOf("\n{ id: ", i + 1);
  const bloco = orig.slice(i, f < 0 ? undefined : f);
  return orig.slice(0, i) + planta(bloco, velho, novo) + (f < 0 ? "" : orig.slice(f));
}
const moveGabarito = (orig, id, para) => noBloco(orig, id, /correta: \d,/.exec(orig.slice(orig.indexOf(`{ id: "${id}",`)))[0], `correta: ${para},`);
const primeiroId = area => { const m = originais["banco.js"].match(new RegExp(`\\{ id: "(${area}\\d\\d)",`)); return m[1]; };
const PED = primeiroId("ped"), PREV = primeiroId("prev"), CIR = primeiroId("cir"), GO = primeiroId("go");

const controles = [
  /* --- gabarito oficial e fidelidade ao caderno --------------------------- */
  { nome: `gabarito: correta de ${PED} movida para outra letra`,
    txt: o => moveGabarito(o, PED, (Number(/correta: (\d),/.exec(o.slice(o.indexOf(`{ id: "${PED}",`)))[1]) + 1) % 5), cita: /correta diz [A-E], o gabarito oficial de susp2026 diz/ },
  { nome: `fidelidade: uma palavra trocada no enunciado de ${PED}`,
    txt: o => noBloco(o, PED, "Caderneta de Saúde da Criança", "Caderneta de Saúde da Família"), cita: /o enunciado não está, palavra por palavra/ },
  { nome: `fidelidade: alternativa B de ${CIR} com uma palavra a mais`,
    txt: o => noBloco(o, CIR, "corticoterapia prolongada", "corticoterapia muito prolongada"), cita: /a alternativa B não está, palavra por palavra/ },
  { nome: `anulada: ${CIR} passa a dizer que era a questão 21 (anulada)`,
    txt: o => noBloco(o, CIR, "numero: 22,", "numero: 21,"), cita: /foi ANULADA pela banca/ },
  { nome: `edição: ${GO} com edicao 2025`,
    txt: o => noBloco(o, GO, "edicao: 2026,", "edicao: 2025,"), cita: /edicao 2025 não bate com a da fonte/ },
  /* --- a forma ------------------------------------------------------------ */
  { nome: `ids: ${PREV} renomeada para prev09`,
    txt: o => noBloco(o, PREV, `id: "${PREV}",`, 'id: "prev09",'), cita: /prev09: id fora da sequência/ },
  { nome: `contagem: ${GO} removida`,
    txt: o => { const i = o.indexOf(`{ id: "${GO}",`); const f = o.indexOf("\n{ id: ", i + 1); return o.slice(0, i) + (f < 0 ? "  ],\n};\n" : o.slice(f + 1)); }, cita: /esperava \d+ questões em go, há \d+/ },
  { nome: `área: ${PED} com área "pedx"`,
    txt: o => noBloco(o, PED, 'area: "ped",', 'area: "pedx",'), cita: /área "pedx" não está em meta.areas/ },
  { nome: `tema: ${PED} com tema de 80 caracteres`,
    txt: o => noBloco(o, PED, 'tema: "Avaliação nutricional — índice estatura-para-idade",', 'tema: "Avaliação nutricional — índice estatura-para-idade e seus usos na puericultura",'), cita: /tema fora de 8–70/ },
  { nome: `referências: ${CIR} sem referências`,
    txt: o => { const i = o.indexOf(`{ id: "${CIR}",`); const a = o.indexOf("referencias: [", i); const b = o.indexOf("]", a); return o.slice(0, a) + "referencias: [" + o.slice(b); }, cita: /referencias precisa de 1 a 3 entradas/ },
  /* --- comentário e Simplificando ---------------------------------------- */
  { nome: `abertura: comentário de ${PED} abre com outro número`,
    txt: o => noBloco(o, PED, "Questão 41 (SUS-SP 2026). Gabarito", "Questão 14 (SUS-SP 2026). Gabarito"), cita: /não abre com "Questão 41 \(SUS-SP 2026\)"/ },
  { nome: `veredito: comentário de ${PED} diz Gabarito C`,
    txt: o => noBloco(o, PED, "Gabarito <strong>B</strong>", "Gabarito <strong>C</strong>"), cita: /dá o veredito para C, e o gabarito é B/ },
  { nome: `veredito duplo: comentário de ${GO} com duas frases de veredito`,
    txt: o => noBloco(o, GO, "Gabarito <strong>E</strong>. Tudo", "Gabarito <strong>E</strong>. Gabarito <strong>E</strong>. Tudo"), cita: /exatamente uma frase "Gabarito <strong>X<\/strong>" \(há 2\)/ },
  { nome: `distrator: comentário de ${PED} deixa de explicar a letra C`,
    txt: o => noBloco(o, PED, "<strong>C</strong> está errada", "C está errada"), cita: /não explica a alternativa C/ },
  { nome: `fecho: comentário de ${PREV} sem "O que a banca testa"`,
    txt: o => noBloco(o, PREV, "O que a banca testa", "O que a prova testa"), cita: /não fecha dizendo "O que a banca testa"/ },
  { nome: `simples: ${GO} diz letra A`,
    txt: o => noBloco(o, GO, "letra <strong>E</strong>", "letra <strong>A</strong>"), cita: /o "simples" diz letra A, e o gabarito é E/ },
  { nome: `simples: ${PREV} com uma frase de 40 palavras`,
    txt: o => noBloco(o, PREV, "A equipe do posto cuida de todo mundo do bairro.", "A equipe do posto de saúde da família cuida de todas as pessoas que moram no bairro e conhece cada casa e cada história de perto ao longo de muitos anos de trabalho contínuo e paciente com a comunidade inteira."), cita: /"simples" tem uma frase de \d+ palavras/ },
  { nome: `marcação: <span> no comentário de ${PED}`,
    txt: o => noBloco(o, PED, "<em>stunting</em>", "<span>stunting</span>"), cita: /tag não permitida em comentario: <span>/ },
  { nome: `marcação: <strong> sem fechamento em ${CIR}`,
    txt: o => noBloco(o, CIR, "<strong>crise adrenal</strong>", "<strong>crise adrenal"), cita: /<strong> desequilibrado em comentario/ },
  /* --- a página ---------------------------------------------------------- */
  { arquivo: "app.js", nome: "app: etiqueta sem o rótulo da prova",
    txt: o => planta(o, "const rotuloOrigem = q => `${FONTES[q.fonte].rotulo} · Questão ${dois(q.numero)}`;", "const rotuloOrigem = q => `Questão ${dois(q.numero)}`;"), cita: /etiqueta "Questão \d\d", esperava/ },
  { arquivo: "app.js", nome: "app: o filtro por área mostra tudo",
    txt: o => planta(o, "NOME_AREA[f] ? lista.filter(q => q.area === f)", "NOME_AREA[f] ? lista"), cita: /o filtro "Pediatria" mostrou \d+ cartões/ },
  { arquivo: "app.js", nome: "app: respostas gravadas na chave do INEPAM",
    txt: o => planta(o, 'const CH_RESP = "susp:respostas";', 'const CH_RESP = "inepam:respostas";'), cita: /gravou numa chave do banco INEPAM|não gravou em susp:respostas/ },
  { arquivo: "app.js", nome: "app: clicar em Simplificando não guarda a escolha",
    txt: o => planta(o, "try { localStorage.setItem(CH_ABA, qual); } catch (e) { /* sem armazenamento */ }", "/* nada */"), cita: /a aba escolhida não foi guardada/ },
  { arquivo: "app.js", nome: "app: o simulado deixa a primeira área de fora",
    txt: o => planta(o, "const ids = AREAS.flatMap(a => embaralhar(", "const ids = AREAS.slice(1).flatMap(a => embaralhar("), cita: /o simulado sorteou \d+ questões, esperava \d+/ },
  { arquivo: "app.js", nome: "app: o comentário sai sem a linha de referências",
    txt: o => planta(o, "html: q.comentario + referencias + fonte", "html: q.comentario + fonte"), cita: /não traz a linha de referências/ },
  { arquivo: "app.js", nome: "app: a tag de área do cartão traz o id, não o nome",
    txt: o => planta(o, 'h("span", { class: "tag " + q.area }, NOME_AREA[q.area]),\n      h("span", { class: "tag tema" }', 'h("span", { class: "tag " + q.area }, q.area),\n      h("span", { class: "tag tema" }'), cita: /a tag de área do cartão não traz a classe e o nome/ },
  { arquivo: "app.js", nome: "app: os dois painéis ficam visíveis ao mesmo tempo",
    txt: o => planta(o, "paineis[k].hidden = k !== qual;", "paineis[k].hidden = false;"), cita: /a aba Comentário não é a visível de início/ },
  /* --- o caderno --------------------------------------------------------- */
  { arquivo: "caderno/caderno.js", nome: "caderno: gabarito resumido com a letra seguinte",
    txt: o => planta(o, "[i + k + 1, LETRAS[q.correta], q.id]", "[i + k + 1, LETRAS[(q.correta + 1) % 5], q.id]"), cita: /o gabarito impresso não bate/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: comentário de outra questão dentro da ficha",
    txt: o => planta(o, 'h("div", { class: "texto-comentario", html: q.comentario })', 'h("div", { class: "texto-comentario", html: Q[0].comentario })'), cita: /alguma ficha não traz/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: o nome do estudante some da capa",
    txt: o => planta(o, 'h("span", { class: "linha nome" }, op.nome || "")', 'h("span", { class: "linha nome" }, "")'), cita: /a capa não traz o nome do estudante/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: Simplificando some da ficha",
    txt: o => planta(o, "op.simples && q.simples ?", "false ?"), cita: /alguma ficha não traz/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a linha de fonte da ficha traz o documento inteiro",
    txt: o => planta(o, "`Questão ${dois(q.numero)} · ${FONTES[q.fonte].rotulo}.`", "`Questão ${dois(q.numero)} · ${FONTES[q.fonte].rotulo} — ${FONTES[q.fonte].txt}.`"), cita: /a linha de fonte da ficha não é/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: o filtro de área é ignorado",
    txt: o => planta(o, '(op.area === "todas" || q.area === op.area)', "true"), cita: /com a área ped, o caderno montou \d+ fichas/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a ficha sai sem referências",
    txt: o => planta(o, 'h("p", { class: "referencias", html: `<span class="rot">Referências</span> ${q.referencias.join(" · ")}` }),', ""), cita: /alguma ficha não traz/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: o mapa de temas perde a tag da área",
    txt: o => planta(o, 'h("td", { class: "d" }, h("span", { class: "tag " + q.area }, NOME_AREA[q.area])),', 'h("td", { class: "d" }, h("span", { class: "tag " + q.area }, q.area)),'), cita: /o mapa de temas não lista cada questão sob a sua área/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: overflow: hidden volta à ficha",
    txt: o => planta(o, ".questao { margin: 0 0 7mm; border: 1px solid var(--line-2); border-radius: 3px;", ".questao { margin: 0 0 7mm; border: 1px solid var(--line-2); border-radius: 3px; overflow: hidden;"), cita: /não podem ter overflow: hidden nem break-inside: avoid/ },
  { arquivo: "app.js", nome: "app: aparece filtro de uma edição que não tem questões (edição inventada)",
    txt: o => planta(o, "const EDICOES = B.meta.fontes.filter(f => Q.some(q => q.fonte === f.id));", 'const EDICOES = B.meta.fontes.concat([{ id: "falsa", rotulo: "FALSA 2020" }]);'), cita: /há filtro de edição sem questão nenhuma|há \d+ botões de filtro/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: página de 250mm",
    txt: o => planta(o, "--pagina: 256mm", "--pagina: 250mm"), cita: /--pagina deve ser 256mm/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: a ficha longa volta a ocupar uma página só",
    txt: o => planta(o, ".questao.dupla { min-height: calc(2 * var(--pagina)); }", ".questao.dupla { }"), cita: /a ficha longa \(\.questao\.dupla\) precisa ocupar duas páginas/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a ficha longa não é marcada",
    txt: o => planta(o, 'f.classList.add("dupla")', 'void 0'), cita: /não marca a ficha longa com a classe dupla/ },
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
