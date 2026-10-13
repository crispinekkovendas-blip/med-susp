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
const ARQS = ["banco.js", "app.js", "app.css", "caderno/caderno.js", "caderno/caderno.css", "videos.json", "v/destino.js"];
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
/* a primeira questão de quatro alternativas (UNESP 2026): o bloco em que o array alternativas tem 4 linhas */
const QUATRO = (() => { const b = originais["banco.js"]; const m = /\{ id: "(\w+)",\n  area: "\w+",\n  tema: "[^"\n]*",\n  fonte: "unesp2026"/.exec(b); if (!m) throw new Error("não há questão da UNESP 2026 em banco.js"); return m[1]; })();

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
    txt: o => planta(o, "html: q.comentario + figura + referencias + fonte", "html: q.comentario + figura + fonte"), cita: /não traz a linha de referências/ },
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
    txt: o => planta(o, 'h("span", { class: "linha nome" }, op.nome || "")', 'h("span", { class: "linha nome" }, "")'), cita: /trocar o nome não chega à capa e ao rodapé/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a linha dos PDFs volta a vazar a URL crua",
    txt: o => planta(o, "filhos.flat(Infinity)", "filhos.flat()"), cita: /PDF pronto/ },
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
  { arquivo: "app.css", nome: "app.css: os filtros voltam a não quebrar linha no celular",
    txt: o => planta(o, "  .seg { flex-wrap: wrap; }\n", ""), cita: /flex-wrap: wrap/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a medida não é refeita antes de imprimir",
    txt: o => planta(o, 'window.addEventListener("beforeprint", medirFichas)', "void 0"), cita: /beforeprint/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: Letra grande sem efeito no comentário",
    txt: o => planta(o, ".letra-grande .texto-comentario { font-size: 11pt; }\n", ""), cita: /Letra grande não chega/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: página de 250mm",
    txt: o => planta(o, "--pagina: 256mm", "--pagina: 250mm"), cita: /--pagina deve ser 256mm/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: a ficha longa volta a ocupar uma página só",
    txt: o => planta(o, ".questao.dupla { min-height: calc(2 * var(--pagina)); }", ".questao.dupla { }"), cita: /a ficha longa \(\.questao\.dupla\) precisa ocupar duas páginas/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a ficha longa não é marcada",
    txt: o => planta(o, 'f.classList.add("dupla")', 'void 0'), cita: /não marca a ficha longa com a classe dupla/ },
  /* --- figuras ------------------------------------------------------------ */
  { nome: `figura: ${PED} declara outra largura`,
    txt: o => { const i = o.indexOf(`{ id: "${PED}",`); const m = /"w":(\d+)/.exec(o.slice(i)); return o.slice(0, i) + o.slice(i).replace(m[0], `"w":${Number(m[1]) + 10}`); }, cita: /figura declara \d+×\d+, o arquivo tem/ },
  { nome: `figura: ${CIR} aponta para um arquivo que não existe`,
    txt: o => noBloco(o, CIR, `"src":"figuras/${CIR}.jpg"`, `"src":"figuras/${CIR}x.jpg"`), cita: /figura\.src deve ser|o arquivo da figura não existe/ },
  { nome: `figura: ${GO} com legenda de 12 caracteres`,
    txt: o => { const i = o.indexOf(`{ id: "${GO}",`); const m = /"legenda":"[^"]*"/.exec(o.slice(i)); return o.slice(0, i) + o.slice(i).replace(m[0], '"legenda":"Curta demais"'); }, cita: /legenda da figura fora de 20–320/ },
  { nome: `figura: ${PREV} com fonte sem licença`,
    txt: o => { const i = o.indexOf(`{ id: "${PREV}",`); const m = /"fonte":"[^"]*"/.exec(o.slice(i)); return o.slice(0, i) + o.slice(i).replace(m[0], '"fonte":"Fulano · Wikimedia Commons"'); }, cita: /fonte da figura precisa de autor, licença/ },
  { nome: `figura: ${GO} com licença NC`,
    txt: o => noBloco(o, GO, ' · Wikimedia Commons"', ' NC · Wikimedia Commons"'), cita: /licença NC ou ND/ },
  { nome: `figura: ${PED} fica sem figura`,
    txt: o => { const i = o.indexOf(`{ id: "${PED}",`); const a = o.indexOf(",\n  figura: {", i); const b = o.indexOf("}", a); return o.slice(0, a) + o.slice(b + 1); }, cita: /sem figura/ },
  { arquivo: "app.js", nome: "app: o painel Comentário sai sem a figura",
    txt: o => planta(o, "html: q.comentario + figura + referencias + fonte", "html: q.comentario + referencias + fonte"), cita: /não traz a figura/ },
  { arquivo: "app.js", nome: "app: a imagem sai sem width/height",
    txt: o => planta(o, 'width="${f.w}" height="${f.h}" ', ""), cita: /sem width\/height/ },
  { arquivo: "app.js", nome: "app: clicar na imagem não amplia",
    txt: o => planta(o, 'if (q.figura && e && e.target && e.target.tagName === "IMG") ampliar(q.figura);', "void 0;"), cita: /não abre a figura ampliada/ },
  { arquivo: "app.js", nome: "app: Esc não fecha a figura ampliada",
    txt: o => planta(o, 'const tecla = e => { if (e && e.key === "Escape") fecha(); };', "const tecla = () => {};"), cita: /Esc não fecha/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a ficha sai sem a figura",
    txt: o => planta(o, 'op.figuras && q.figura ? h("figure"', 'false ? h("figure"'), cita: /alguma ficha não traz a figura/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a opção Figuras desligada é ignorada",
    txt: o => planta(o, 'op.figuras && q.figura ? h("figure"', 'q.figura ? h("figure"'), cita: /Figuras desligada/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a figura aponta para figuras/ sem o ../",
    txt: o => planta(o, 'src: "../" + q.figura.src', "src: q.figura.src"), cita: /alguma ficha não traz a figura/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a medida não é refeita quando as imagens carregam",
    txt: o => planta(o, 'window.addEventListener("load", medirFichas)', "void 0"), cita: /evento load/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: a figura da ficha sem limite de altura",
    txt: o => planta(o, "max-height: 52mm;", "max-height: none;"), cita: /max-height em mm/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a ficha deixa de garantir 90 mm de pauta",
    txt: o => planta(o, "const folga = notas ? 90 * mm : 0;", "const folga = notas ? 10 * mm : 0;"), cita: /garantir 90 mm de pauta/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a pauta sai sem o quadro dos termos-chave",
    txt: o => planta(o, 'h("span", { class: "rot" }, "Termos-chave"), h("div", { class: "termos" }),', ""), cita: /alguma ficha não traz, dentro dela/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: o quadro dos termos-chave perde a altura fixa",
    txt: o => planta(o, ".notas .termos { flex: none; height: 40mm;", ".notas .termos { flex: none; height: auto;"), cita: /40 mm fixos/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a mini-aula sai antes do Simplificando",
    txt: o => planta(o, 'op.simples && q.simples ? h("div", { class: "simples" }, h("p", { class: "rot" }, "Simplificando"), h("div", { html: q.simples })) : null,\n        op.materia === "junto" && q.materia ? materiaBloco(q) : null,', 'op.materia === "junto" && q.materia ? materiaBloco(q) : null,\n        op.simples && q.simples ? h("div", { class: "simples" }, h("p", { class: "rot" }, "Simplificando"), h("div", { html: q.simples })) : null,'), cita: /precisa vir depois do Simplificando/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a ficha da questão volta a ter uma segunda pauta",
    txt: o => planta(o, "propria ? null : notas());", "notas());"), cita: /não pode trazer a mini-aula nem a pauta/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a pauta padrão volta a ser de linhas",
    txt: o => planta(o, 'pauta: "quadriculado", letra', 'pauta: "linhas", letra'), cita: /pauta padrão precisa ser a quadriculada/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: o quadriculado some",
    txt: o => planta(o, ".notas.quadriculado .linhas, .notas.quadriculado .termos {", ".notas.quadriculadox .linhas, .notas.quadriculadox .termos {"), cita: /quadriculado de 5 mm/ },
  { arquivo: "app.css", nome: "app.css: a figura ampliada deixa de cobrir a tela",
    txt: o => planta(o, ".ampliar { position: fixed;", ".ampliar { position: static;"), cita: /\.ampliar \{ position: fixed/ },
  /* --- quatro alternativas (UNESP, Einstein) ------------------------------ */
  { nome: `quatro alternativas: gabarito E numa questão A–D (${QUATRO})`,
    txt: o => moveGabarito(o, QUATRO, 4), cita: /aponta para uma alternativa que a questão não tem/ },
  { nome: `quatro alternativas: ${QUATRO} fica com três alternativas`,
    txt: o => { const i = o.indexOf(`{ id: "${QUATRO}",`); const a = o.indexOf("alternativas: [", i); const b = o.indexOf("\n  ]", a); const linhas = o.slice(a, b).split("\n"); return o.slice(0, a) + linhas.slice(0, -1).join("\n") + o.slice(b); }, cita: /precisa de 4 ou 5 alternativas \(há 3\)/ },
  { nome: `quatro alternativas: o comentário de ${QUATRO} fala de uma letra E`,
    txt: o => noBloco(o, QUATRO, "<strong>D</strong> está errada", "<strong>E</strong> está errada"), cita: /fala de uma alternativa E que a questão não tem/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a folha de respostas volta a dar 5 bolhas a todas",
    txt: o => planta(o, "i < lista[n - 1].alternativas.length ? h(\"span\", { class: \"bolha\" }) : null", 'h("span", { class: "bolha" })'), cita: /folha de respostas não tem uma bolha por alternativa/ },
  /* --- Sobre a matéria (a primeira questão de ped tem a mini-aula) ---------- */
  { nome: `materia: ${PED} sem a parte Resumo`,
    txt: o => noBloco(o, PED, "<h4>Resumo</h4>", "<h4>Sumário</h4>"), cita: /precisa das seis partes na ordem/ },
  { nome: `materia: ${PED} com Resumo e Verifique trocados de lugar`,
    txt: o => noBloco(noBloco(noBloco(o, PED, "<h4>Resumo</h4>", "<h4>TMP</h4>"), PED, "<h4>Verifique o que aprendeu</h4>", "<h4>Resumo</h4>"), PED, "<h4>TMP</h4>", "<h4>Verifique o que aprendeu</h4>"), cita: /precisa das seis partes na ordem/ },
  { nome: `materia: ${PED} com só dois objetivos`,
    txt: o => { const i = o.indexOf(`{ id: "${PED}",`); const cab = "<h4>Objetivos de aprendizagem</h4><ul>"; const a = o.indexOf(cab, i) + cab.length; const b = o.indexOf("</li>", a) + 5; return o.slice(0, a) + o.slice(b); }, cita: /com 2 objetivos/ },
  { nome: `materia: ${PED} fala do gabarito`,
    txt: o => noBloco(o, PED, "<h4>O essencial</h4><p>", "<h4>O essencial</h4><p>Gabarito: "), cita: /fala do item/ },
  { nome: `materia: ${PED} com uma tag <script>`,
    txt: o => noBloco(o, PED, "<h4>Resumo</h4>", "<h4>Resumo</h4><script>x</script>"), cita: /tag não permitida em materia/ },
  { nome: `materia: ${PED} sem a caixa do Ponto clínico`,
    txt: o => noBloco(o, PED, '<div class=\\"ponto\\">', '<div class=\\"caixa\\">'), cita: /sem a caixa/ },
  { arquivo: "app.js", nome: "app: o cartão sai sem a terceira aba",
    txt: o => planta(o, "if (q.materia) paineis.materia = h(", "if (false) paineis.materia = h("), cita: /tem 2 abas, esperava 3/ },
  { arquivo: "app.js", nome: "app: a aba Sobre a matéria não fica guardada",
    txt: o => planta(o, 'onclick: () => escolhe("materia") }, "Sobre a matéria"', 'onclick: () => mostra("materia") }, "Sobre a matéria"'), cita: /Sobre a matéria não foi guardada/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a ficha sai sem Sobre a matéria",
    txt: o => planta(o, 'const propria = op.materia === "pagina" && !!q.materia;', "const propria = false;"), cita: /em página própria, o caderno montou/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a opção Sobre a matéria desligada é ignorada",
    txt: o => planta(o, 'op.materia === "junto" && q.materia ? materiaBloco(q)', "q.materia ? materiaBloco(q)"), cita: /Sobre a matéria desligado ainda aparece/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: as respostas do Verifique saem escondidas no papel",
    txt: o => planta(o, "html: materiaImpressa(q.materia)", "html: q.materia"), cita: /alguma ficha não traz, dentro dela/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a página Sobre a matéria sai sem a pauta",
    txt: o => planta(o, "materiaBloco(q), notas())];", "materiaBloco(q))];"), cita: /alguma página Sobre a matéria não traz/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a página Sobre a matéria vem antes da ficha da questão",
    txt: o => planta(planta(o, 'return [a, h("article"', 'return [h("article"'), "notas())];", "notas()), a];"), cita: /precisa vir logo depois da ficha da sua questão/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a ficha muito longa não é marcada como tripla",
    txt: o => planta(o, 'f.classList.add("tripla")', 'f.classList.add("dupla")'), cita: /classe tripla/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: a ficha tripla deixa de ocupar três páginas",
    txt: o => planta(o, "calc(3 * var(--pagina))", "calc(2 * var(--pagina))"), cita: /\.questao\.tripla/ },
  /* --- vídeos: videos.json, um por questão, canal da lista, url canônica --- */
  { arquivo: "videos.json", nome: `vídeos: ${PED} sumiu de videos.json`,
    txt: o => { const V = JSON.parse(o); delete V[PED]; return JSON.stringify(V, null, 1); }, cita: /videos\.json tem \d+ ids, esperava um por questão/ },
  { arquivo: "videos.json", nome: `vídeos: ${PED} com url fora da forma canônica`,
    txt: o => { const V = JSON.parse(o); V[PED].q = { url: "https://youtu.be/aaaaaaaaaaa", titulo: "x", canal: "y", canalId: "UCx", duracao: 600 }; return JSON.stringify(V, null, 1); }, cita: /url do vídeo q não é https:\/\/www\.youtube\.com\/watch/ },
  { arquivo: "videos.json", nome: `vídeos: ${PED} com canal fora da lista`,
    txt: o => { const V = JSON.parse(o); V[PED].m = { url: "https://www.youtube.com/watch?v=aaaaaaaaaaa", titulo: "x", canal: "Canal Y", canalId: "UCnaolistado", duracao: 600 }; return JSON.stringify(V, null, 1); }, cita: /não está em canais\.json/ },
  { arquivo: "videos.json", nome: `vídeos: ${PED} com busca de 3 letras`,
    txt: o => { const V = JSON.parse(o); V[PED].busca = "abc"; return JSON.stringify(V, null, 1); }, cita: /busca fora de 8–80/ },
  /* --- links curtos: destino() ---------------------------------------------- */
  { arquivo: "v/destino.js", nome: "destino: id desconhecido mandado para o YouTube",
    txt: o => planta(o, 'if (!v) return { fallback: "sem-id" };', 'if (!v) return { url: "https://www.youtube.com/" };'), cita: /destino\(\): um id desconhecido/ },
  { arquivo: "v/destino.js", nome: "destino: busca sem codificar",
    txt: o => planta(o, "encodeURIComponent(termo)", "termo"), cita: /destino\(\): a busca não está codificada/ },
  /* --- caderno: a faixa dos três QR codes e o índice ------------------------ */
  { arquivo: "caderno/caderno.js", nome: "caderno: faixa dos QR codes removida",
    txt: o => planta(o, "op.qr ? videos(q) : null", "null"), cita: /ficha sem os cinco QR codes/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: QR code com a url sem o id",
    txt: o => planta(o, 'BASE_V + q.id + "/" + k', 'BASE_V + k'), cita: /QR code .* href/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: QR code volta ao nível M",
    txt: o => planta(o, 'qrcode(0, "H")', 'qrcode(0, "M")'), cita: /nível H/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: QR code encolhe para 18 mm",
    txt: o => planta(o, ".videos .codigo svg { width: 28mm; height: 28mm; display: block; }", ".videos .codigo svg { width: 18mm; height: 18mm; display: block; }"), cita: /28 mm/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: volta a cor na tinta",
    txt: o => planta(o, "--accent: #000; --accent-2: #333;", "--accent: #0F4C5C; --accent-2: #333;"), cita: /preto e branco/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: a página própria da mini-aula repete os QR codes",
    txt: o => planta(o, 'cabecalho(q, numero, "Sobre a matéria"), materiaBloco(q), notas())', 'cabecalho(q, numero, "Sobre a matéria"), materiaBloco(q), videos(q), notas())'), cita: /página própria da mini-aula não pode repetir os QR codes/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: o mapa de temas perde a coluna da página",
    txt: o => planta(o, 'h("td", { class: "tema" }, q.tema), h("td", { class: "pag" }, ""))', 'h("td", { class: "tema" }, q.tema))'), cita: /mapa de temas é o índice/ },
  { arquivo: "caderno/caderno.js", nome: "caderno: as páginas da URL (?paginas=) não chegam ao índice",
    txt: o => planta(o, "preencherIndice(PAGINAS_URL)", "preencherIndice([])"), cita: /com \?paginas= na URL o mapa de temas/ },
  { arquivo: "caderno/caderno.css", nome: "caderno.css: @page sem o contador de páginas",
    txt: o => planta(o, 'counter(page) " de " counter(pages)', 'counter(page)'), cita: /counter\(pages\)/ },
  /* --- página: os três links de vídeo no painel Comentário ----------------- */
  { arquivo: "app.js", nome: "app: cartão sem os três links de vídeo",
    txt: o => planta(o, "+ fonte + videosHtml(q)", "+ fonte"), cita: /três links de vídeo/ },
];

/* `node controles.js <trecho>` roda só os controles cujo nome contém o trecho;
   `node controles.js 1-50` roda a faixa (1-based, inclusiva). Cada controle
   roda o harness inteiro (~8 s com os QR codes do caderno): a lista completa
   leva ~14 min, e em duas faixas cabe em sessões de 10 min. */
const SO = process.argv[2] || "";
const faixa = /^(\d+)-(\d+)$/.exec(SO);
const escolhidos = faixa ? controles.slice(Number(faixa[1]) - 1, Number(faixa[2])) : controles.filter(c => c.nome.includes(SO));
if (!escolhidos.length) { console.log("nenhum controle com " + JSON.stringify(SO)); process.exit(1); }
let falhos = 0;
try {
  for (const c of escolhidos) {
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
console.log(`\nrestaurado: ${r.ok ? "verde" : "VERMELHO (!!)"} · ${escolhidos.length - falhos}/${escolhidos.length} controles morderam${SO ? ` (filtro ${JSON.stringify(SO)}, de ${controles.length})` : ""}`);
process.exit(falhos || !r.ok ? 1 : 0);
