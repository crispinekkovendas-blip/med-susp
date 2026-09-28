/* ============================================================================
   Conferência do banco SUS-SP. Roda em Node: `node verificar.js`.

   O que ela prova:
     · a forma: áreas de meta.areas, ESPERADO questões em cada uma, ids em
       sequência, ordem (área → fonte → número), cinco alternativas, gabarito
       0..4, alternativas distintas;
     · a FIDELIDADE: enunciado, cada alternativa e o texto de apoio de toda
       questão estão, palavra por palavra (normalizados), no texto do caderno
       oficial guardado em ferramentas/cadernos/<fonte>.txt; e `correta` é a
       letra do gabarito oficial (<fonte>-gabarito.txt), nunca uma anulada;
     · o conteúdo: comentário (tamanho, abertura, veredito único, as cinco
       letras, fecho), Simplificando (tamanho, letra, frases curtas),
       tema, referências, tags permitidas e equilibradas;
     · a página e o caderno montam num DOM de mentira e mostram o que o banco
       diz (etiquetas, filtros, abas, referências, simulado, fichas, mapa,
       nome do estudante); o CSS do caderno deixa a ficha longa correr.

   O harness prova coerência e fidelidade, não verdade médica: o comentário
   de cada questão é lido por uma pessoa antes de a área ser dada por pronta.
   ========================================================================== */
const fs = require("fs"), path = require("path"), vm = require("vm");
const { normalizar } = require("./ferramentas/normalizar.js");
const AQUI = __dirname;
const falhas = [];
const erro = m => falhas.push(m);
let n = 0;
const exige = (c, m) => { n++; if (!c) erro(m); };

/* quantas questões cada área deve ter: 1 no esboço; a tarefa de conteúdo de
   cada área sobe para o número final dela */
const ESPERADO = { ped: 20, prev: 19, cir: 17, go: 20 };

/* --- carrega o banco ---------------------------------------------------- */
const src = fs.readFileSync(path.join(AQUI, "banco.js"), "utf8");
const ctx = vm.createContext({ window: {} });
vm.runInContext(src, ctx, { filename: "banco.js" });
const B = ctx.window.BANCO;
exige(B && Array.isArray(B.questoes) && B.meta && Array.isArray(B.meta.areas) && Array.isArray(B.meta.fontes), "banco.js não define window.BANCO com meta.areas, meta.fontes e questoes");
const Q = B.questoes;
const LETRAS = "ABCDE";
const AREAS = B.meta.areas;
const IDS_AREA = AREAS.map(a => a.id);
const FONTES = Object.fromEntries(B.meta.fontes.map(f => [f.id, f]));
const dois = x => String(x).padStart(2, "0");

/* --- a forma ------------------------------------------------------------ */
exige(AREAS.length >= 1 && new Set(IDS_AREA).size === AREAS.length, "meta.areas vazio ou com id repetido");
exige(AREAS.every(a => a.id && a.nome && a.curto), "toda área precisa de id, nome e curto");
exige(Object.keys(ESPERADO).length === AREAS.length && IDS_AREA.every(id => id in ESPERADO), "ESPERADO no harness não cobre as mesmas áreas de meta.areas");
for (const a of AREAS) {
  const qs = Q.filter(q => q.area === a.id);
  exige(qs.length === ESPERADO[a.id], `esperava ${ESPERADO[a.id]} questões em ${a.id}, há ${qs.length}`);
  qs.forEach((q, i) => exige(q.id === a.id + dois(i + 1), `${q.id}: id fora da sequência (esperava ${a.id}${dois(i + 1)})`));
}
const ordemArea = Q.map(q => IDS_AREA.indexOf(q.area));
exige(ordemArea.every((v, i) => i === 0 || v >= ordemArea[i - 1]), "as questões não estão agrupadas por área na ordem de meta.areas");
const ordemFonte = Object.fromEntries(B.meta.fontes.map((f, i) => [f.id, i]));
for (let i = 1; i < Q.length; i++) {
  const a = Q[i - 1], b = Q[i];
  if (a.area !== b.area) continue;
  exige(ordemFonte[a.fonte] < ordemFonte[b.fonte] || (ordemFonte[a.fonte] === ordemFonte[b.fonte] && a.numero < b.numero), `${b.id}: fora da ordem (fonte, número) dentro da área`);
}

/* --- cadernos e gabaritos das fontes ------------------------------------ */
const cadernoDe = {}, gabaritoDe = {};
for (const f of B.meta.fontes) {
  n++;
  const pc = path.join(AQUI, f.caderno || ""), pg = path.join(AQUI, f.gabarito || "");
  if (!f.caderno || !fs.existsSync(pc)) { erro(`fonte ${f.id}: falta o texto do caderno ${f.caderno}`); continue; }
  if (!f.gabarito || !fs.existsSync(pg)) { erro(`fonte ${f.id}: falta o gabarito ${f.gabarito}`); continue; }
  cadernoDe[f.id] = normalizar(fs.readFileSync(pc, "utf8"));
  gabaritoDe[f.id] = {};
  for (const l of fs.readFileSync(pg, "utf8").trim().split(/\r?\n/)) { const [num, x] = l.trim().split(/\s+/); gabaritoDe[f.id][Number(num)] = x; }
  exige(Object.keys(gabaritoDe[f.id]).length >= 50, `fonte ${f.id}: gabarito com menos de 50 linhas`);
  exige(typeof f.rotulo === "string" && /^[A-Za-z\-]+ 20\d\d$/.test(f.rotulo), `fonte ${f.id}: rotulo deve ser "NOME ANO" ("${f.rotulo}")`);
  exige(Number.isInteger(f.edicao) && String(f.edicao) === String(f.rotulo).slice(-4), `fonte ${f.id}: edicao não bate com o ano do rotulo`);
  exige(typeof f.txt === "string" && f.txt.length >= 40, `fonte ${f.id}: txt (descrição do documento) curto ou ausente`);
}

/* --- cada questão -------------------------------------------------------- */
const ids = new Set(), vistosFonteNumero = new Set();
const TAGS = ["p", "strong", "em", "ul", "ol", "li", "table", "thead", "tbody", "tr", "th", "td", "sub", "sup", "br"];
for (const q of Q) {
  exige(!ids.has(q.id), `id repetido: ${q.id}`); ids.add(q.id);
  exige(IDS_AREA.includes(q.area), `${q.id}: área "${q.area}" não está em meta.areas`);
  exige(q.fonte in FONTES, `${q.id}: fonte "${q.fonte}" não está em meta.fontes`);
  const f = FONTES[q.fonte] || {};
  exige(q.edicao === f.edicao, `${q.id}: edicao ${q.edicao} não bate com a da fonte ${q.fonte} (${f.edicao})`);
  exige(Number.isInteger(q.numero) && q.numero >= 1 && q.numero <= 120, `${q.id}: sem número da questão na prova`);
  const chave = q.fonte + "#" + q.numero;
  exige(!vistosFonteNumero.has(chave), `${q.id}: a questão ${q.numero} de ${q.fonte} entrou duas vezes`); vistosFonteNumero.add(chave);
  /* gabarito oficial */
  const g = (gabaritoDe[q.fonte] || {})[q.numero];
  exige(g !== undefined, `${q.id}: a questão ${q.numero} não está no gabarito de ${q.fonte}`);
  exige(g !== "*", `${q.id}: a questão ${q.numero} de ${q.fonte} foi ANULADA pela banca`);
  exige(Number.isInteger(q.correta) && q.correta >= 0 && q.correta <= 4, `${q.id}: gabarito fora de 0..4`);
  if (g && g !== "*") exige(LETRAS[q.correta] === g, `${q.id}: correta diz ${LETRAS[q.correta]}, o gabarito oficial de ${q.fonte} diz ${g}`);
  /* fidelidade ao caderno */
  const cad = cadernoDe[q.fonte];
  if (cad) {
    exige(cad.includes(normalizar(q.enunciado)), `${q.id}: o enunciado não está, palavra por palavra, no caderno ${q.fonte}`);
    (q.alternativas || []).forEach((a, i) => exige(cad.includes(normalizar(a)), `${q.id}: a alternativa ${LETRAS[i]} não está, palavra por palavra, no caderno ${q.fonte}`));
    if (q.texto) for (const trecho of normalizar(q.texto).split(/[.;:|]/).map(s => s.trim()).filter(s => s.length >= 20)) exige(cad.includes(trecho), `${q.id}: trecho do texto de apoio não está no caderno ("${trecho.slice(0, 40)}…")`);
  }
  exige(typeof q.enunciado === "string" && q.enunciado.length >= 20, `${q.id}: enunciado curto ou ausente`);
  exige(Array.isArray(q.alternativas) && q.alternativas.length === 5, `${q.id}: precisa de 5 alternativas`);
  const vistas = new Set();
  for (const a of q.alternativas || []) {
    const na = normalizar(a);
    exige(na.length > 0, `${q.id}: alternativa vazia`);
    exige(!vistas.has(na), `${q.id}: alternativa repetida "${na.slice(0, 40)}"`); vistas.add(na);
  }
  exige(typeof q.tema === "string" && q.tema.length >= 8 && q.tema.length <= 70, `${q.id}: tema fora de 8–70 caracteres`);
  exige(Array.isArray(q.referencias) && q.referencias.length >= 1 && q.referencias.length <= 3 && q.referencias.every(r => typeof r === "string" && r.length >= 10 && r.length <= 120), `${q.id}: referencias precisa de 1 a 3 entradas de 10–120 caracteres`);
  /* comentário */
  const letra = LETRAS[q.correta];
  exige(typeof q.comentario === "string" && q.comentario.length >= 600, `${q.id}: comentário curto (${(q.comentario || "").length})`);
  const abre = String(q.comentario || "").replace(/<[^>]+>/g, "").trim();
  exige(abre.startsWith(`Questão ${q.numero} (${f.rotulo})`), `${q.id}: o comentário não abre com "Questão ${q.numero} (${f.rotulo})"`);
  const vereditos = [...String(q.comentario || "").matchAll(/[Gg]abarito <strong>([A-E])<\/strong>/g)].map(m => m[1]);
  exige(vereditos.length === 1, `${q.id}: o comentário precisa de exatamente uma frase "Gabarito <strong>X</strong>" (há ${vereditos.length})`);
  exige(vereditos.every(v => v === letra), `${q.id}: o comentário dá o veredito para ${[...new Set(vereditos)].join("/")}, e o gabarito é ${letra}`);
  for (const L of LETRAS) exige(String(q.comentario || "").includes(`<strong>${L}</strong>`), `${q.id}: o comentário não explica a alternativa ${L} (falta <strong>${L}</strong>)`);
  exige(/O que a banca testa/.test(q.comentario || ""), `${q.id}: o comentário não fecha dizendo "O que a banca testa"`);
  /* Simplificando */
  exige(typeof q.simples === "string" && q.simples.length >= 200, `${q.id}: sem "simples" (ou curto demais)`);
  if (typeof q.simples === "string") {
    const letrasS = [...q.simples.matchAll(/letra <strong>([A-E])<\/strong>/g)].map(m => m[1]);
    exige(letrasS.length >= 1, `${q.id}: o "simples" não diz "a letra <strong>X</strong>"`);
    exige(letrasS.every(v => v === letra), `${q.id}: o "simples" diz letra ${[...new Set(letrasS)].join("/")}, e o gabarito é ${letra}`);
    const frases = q.simples.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(/[.!?…]+\s+|[.!?…]+$/).map(s => s.trim()).filter(Boolean);
    const tam = frases.map(s => s.split(/\s+/).filter(w => /[\p{L}\d]/u.test(w)).length);
    const media = tam.reduce((a, b) => a + b, 0) / tam.length;
    exige(media <= 14, `${q.id}: "simples" com frases longas (média ${media.toFixed(1)} palavras por frase)`);
    exige(Math.max(...tam) <= 26, `${q.id}: "simples" tem uma frase de ${Math.max(...tam)} palavras`);
  }
  /* marcação: só as tags permitidas, equilibradas, nada vazado */
  for (const campo of ["enunciado", "comentario", "texto", "simples"]) {
    const t = q[campo]; if (!t) continue;
    for (const tag of TAGS) {
      if (tag === "br") continue;
      const abreT = (t.match(new RegExp("<" + tag + "(\\s|>)", "g")) || []).length;
      const fechaT = (t.match(new RegExp("</" + tag + ">", "g")) || []).length;
      exige(abreT === fechaT, `${q.id}: <${tag}> desequilibrado em ${campo} (${abreT} abre, ${fechaT} fecha)`);
    }
    const estranhas = [...t.matchAll(/<\/?([a-z][a-z0-9]*)/g)].map(m => m[1]).filter(tg => !TAGS.includes(tg));
    exige(!estranhas.length, `${q.id}: tag não permitida em ${campo}: <${estranhas[0]}>`);
    exige(!/undefined|\[object Object\]|NaN/.test(t), `${q.id}: vazamento em ${campo}`);
  }
}

/* --- bytes de controle nos arquivos ------------------------------------- */
for (const arq of ["banco.js", "app.js", "app.css", "index.html", "caderno/caderno.js", "caderno/caderno.css", "caderno/index.html"]) {
  n++;
  const p = path.join(AQUI, arq);
  if (!fs.existsSync(p)) { erro(`falta ${arq}`); continue; }
  const t = fs.readFileSync(p, "utf8");
  let maus = 0;
  for (let i = 0; i < t.length; i++) { const c = t.charCodeAt(i); if (c < 32 && c !== 9 && c !== 10 && c !== 13) maus++; }
  if (maus) erro(`${arq}: ${maus} byte(s) de controle`);
}

/* --- o CSS do caderno deixa a ficha longa correr para a página seguinte --- */
{
  n++;
  const css = fs.readFileSync(path.join(AQUI, "caderno", "caderno.css"), "utf8");
  const regras = [...css.matchAll(/([^{}]+)\{([^}]*)\}/g)].map(m => ({ sel: m[1].split(",").map(s => s.trim()), corpo: m[2] }));
  const proibido = regras.filter(r => (r.sel.includes(".questao") || r.sel.includes(".comentario")) && /overflow:\s*hidden|break-inside:\s*avoid|page-break-inside:\s*avoid/.test(r.corpo));
  exige(!proibido.length, "caderno.css: .questao e .comentario não podem ter overflow: hidden nem break-inside: avoid (a ficha longa precisa correr para a página seguinte)");
  exige(/--pagina:\s*256mm/.test(css), "caderno.css: --pagina deve ser 256mm");
}

/* --- um DOM de mentira ---------------------------------------------------- */
function domDeMentira() {
  const mk = tag => {
    const el = {
      tagName: String(tag).toUpperCase(), children: [], attrs: {}, listeners: {}, _html: "", _text: "",
      style: {}, dataset: {}, disabled: false, hidden: false, parentNode: null,
      get className() { return el.attrs["class"] || ""; }, set className(v) { el.attrs["class"] = v; },
      get id() { return el.attrs["id"] || ""; },
      set innerHTML(v) { el._html = v; el.children = []; }, get innerHTML() { return el._html; },
      set textContent(v) { el._text = String(v); el.children = []; }, get textContent() { return el._text || el.children.map(c => c.textContent).join(""); },
      setAttribute(k, v) { el.attrs[k] = v; }, getAttribute(k) { return el.attrs[k] == null ? null : el.attrs[k]; },
      addEventListener(k, f) { (el.listeners[k] = el.listeners[k] || []).push(f); },
      append(...xs) { for (const x of xs) { const c = typeof x === "object" ? x : { nodeType: 3, textContent: String(x), tagName: "#text", children: [] }; c.parentNode = el; el.children.push(c); } },
      replaceWith(novo) { const p = el.parentNode; if (!p) return; const i = p.children.indexOf(el); if (i >= 0) { p.children[i] = novo; novo.parentNode = p; el.parentNode = null; } },
      closest() { return null; }, scrollIntoView() {},
      querySelector(sel) { return busca(el, sel)[0] || null; }, querySelectorAll(sel) { return busca(el, sel); },
      nodeType: 1,
    };
    return el;
  };
  function busca(raiz, sel) {
    const out = [];
    const cls = sel.startsWith(".") ? sel.slice(1) : null;
    const id = sel.startsWith("#") ? sel.slice(1) : null;
    (function anda(e) {
      for (const c of e.children || []) {
        if (c.nodeType !== 1) continue;
        if ((cls && (c.className || "").split(/\s+/).includes(cls)) || (id && c.id === id) || (!cls && !id && c.tagName === sel.toUpperCase())) out.push(c);
        anda(c);
      }
    })(raiz);
    return out;
  }
  const app = mk("div"); app.attrs.id = "app";
  const document = {
    createElement: mk, createTextNode: t => ({ nodeType: 3, textContent: String(t), tagName: "#text", children: [] }),
    getElementById: id => id === "app" ? app : busca(app, "#" + id)[0] || null,
    addEventListener() {}, querySelector: s => busca(app, s)[0] || null, querySelectorAll: s => busca(app, s),
  };
  const armazem = {};
  const window = {
    document, localStorage: { getItem: k => armazem[k] == null ? null : armazem[k], setItem: (k, v) => { armazem[k] = String(v); }, removeItem: k => { delete armazem[k]; } },
    scrollTo() {}, confirm: () => true, setTimeout: f => { f(); return 1; }, setInterval: () => 1, clearInterval() {},
    Date, Math, JSON, Object, Array, Number, String, Boolean, RegExp, console,
  };
  window.window = window;
  return { window, document, app };
}
const contexto = window => vm.createContext(Object.assign({}, window, { window, document: window.document, setTimeout: window.setTimeout, setInterval: window.setInterval, clearInterval: window.clearInterval, localStorage: window.localStorage, confirm: window.confirm }));
const todos = (el, sel) => el.querySelectorAll(sel);

/* --- a página monta ------------------------------------------------------- */
{
  n++;
  const { window, app } = domDeMentira();
  const c = contexto(window);
  try {
    vm.runInContext(src, c, { filename: "banco.js" });
    vm.runInContext(fs.readFileSync(path.join(AQUI, "app.js"), "utf8"), c, { filename: "app.js" });
    const cartoes = todos(app, ".q");
    exige(cartoes.length === Q.length, `a página montou ${cartoes.length} cartões, esperava ${Q.length}`);
    const alts = todos(app, ".alt");
    exige(alts.length === Q.length * 5, `a página montou ${alts.length} alternativas, esperava ${Q.length * 5}`);
    exige(todos(app, ".comentario").length === 0, "comentário visível antes de responder");
    /* etiqueta "ROTULO · Questão NN" e tag da área vinda de meta.areas */
    cartoes.forEach((cel, i) => {
      const q = Q[i], e = (cel.querySelector(".origem") || {}).textContent || "";
      const esperado = `${FONTES[q.fonte].rotulo} · Questão ${dois(q.numero)}`;
      n++; if (e !== esperado) erro(`${q.id}: etiqueta "${e}", esperava "${esperado}"`);
      const t = cel.querySelector(".tag");
      n++; if (!(t && t.className.split(/\s+/).includes(q.area) && t.textContent === AREAS.find(a => a.id === q.area).nome)) erro(`${q.id}: a tag de área do cartão não traz a classe e o nome da área de meta.areas`);
    });
    /* filtros: Todas + uma por área + uma por edição com questões */
    const botoes = todos(app, ".seg").flatMap(s => todos(s, "button"));
    const rotulos = botoes.map(b => b.textContent);
    const fontesComQ = B.meta.fontes.filter(f => Q.some(q => q.fonte === f.id));
    exige(botoes.length === 1 + AREAS.length + fontesComQ.length, `há ${botoes.length} botões de filtro, esperava ${1 + AREAS.length + fontesComQ.length} (Todas + áreas + edições com questões)`);
    for (const a of AREAS) exige(rotulos.some(r => r.startsWith(a.nome) && r.endsWith(String(Q.filter(q => q.area === a.id).length))), `falta o filtro "${a.nome}" com a contagem certa`);
    for (const f of fontesComQ) exige(rotulos.some(r => r.startsWith(f.rotulo)), `falta o filtro da edição "${f.rotulo}"`);
    exige(!B.meta.fontes.some(f => !fontesComQ.includes(f) && rotulos.some(r => r.startsWith(f.rotulo))), "há filtro de edição sem questão nenhuma");
    /* responder grava, corrige e abre as abas */
    (alts[0].listeners.click || []).forEach(fn => fn());
    exige(JSON.parse(window.localStorage.getItem("susp:respostas") || "{}")[Q[0].id] === 0, "responder não gravou em susp:respostas");
    exige(window.localStorage.getItem("inepam:respostas") === null && window.localStorage.getItem("inepam:aba") === null, "a página gravou numa chave do banco INEPAM");
    const c1 = todos(app, ".q")[0];
    exige(c1 && c1.querySelector(".veredito"), "o cartão respondido não foi trocado pelo cartão corrigido");
    const abas = c1 ? todos(c1, ".aba") : [];
    exige(abas.length === 2, `o cartão respondido tem ${abas.length} abas, esperava 2`);
    const pc = c1 && todos(c1, ".comentario").find(e => !e.className.includes("simples"));
    const ps = c1 && c1.querySelector(".simples");
    exige(pc && ps && pc.hidden === false && ps.hidden === true, "a aba Comentário não é a visível de início");
    exige(pc && pc.innerHTML.startsWith(Q[0].comentario), "o painel Comentário não mostra o comentário");
    exige(pc && pc.innerHTML.includes('class="referencias"') && Q[0].referencias.every(r => pc.innerHTML.includes(r)), "o painel Comentário não traz a linha de referências");
    if (abas.length === 2) (abas[1].listeners.click || []).forEach(fn => fn());
    exige(ps && ps.hidden === false && pc.hidden === true, "clicar em Simplificando não trocou o painel");
    exige(window.localStorage.getItem("susp:aba") === "simples", "a aba escolhida não foi guardada em susp:aba");
    exige(ps && ps.innerHTML === Q[0].simples, "o painel Simplificando não mostra o texto da questão");
    if (Q.length > 1) {
      const alts2 = todos(todos(app, ".q")[1], ".alt");
      (alts2[1].listeners.click || []).forEach(fn => fn());
      const ps2 = todos(app, ".q")[1].querySelector(".simples");
      exige(ps2 && ps2.hidden === false, "o segundo cartão não abriu na aba guardada (Simplificando)");
    }
    /* filtro por área */
    const a0 = AREAS[0];
    const bArea = botoes.find(b => b.textContent.startsWith(a0.nome));
    if (bArea) (bArea.listeners.click || []).forEach(fn => fn());
    const soArea = todos(app, ".q");
    exige(bArea && soArea.length === Q.filter(q => q.area === a0.id).length && soArea.every(cel => Q.find(q => q.id === cel.attrs["data-id"]).area === a0.id), `o filtro "${a0.nome}" mostrou ${soArea.length} cartões`);
    exige(window.localStorage.getItem("susp:filtro") === JSON.stringify(a0.id), "o filtro escolhido não foi guardado em susp:filtro");
    /* filtro por edição */
    const f0 = fontesComQ[0];
    const bFonte = todos(app, ".seg").flatMap(s => todos(s, "button")).find(b => b.textContent.startsWith(f0.rotulo));
    if (bFonte) (bFonte.listeners.click || []).forEach(fn => fn());
    exige(bFonte && todos(app, ".q").length === Q.filter(q => q.fonte === f0.id).length, `o filtro "${f0.rotulo}" mostrou ${todos(app, ".q").length} cartões`);
    /* capa e rodapé contam a partir dos dados */
    const lead = app.querySelector(".lead");
    exige(lead && lead.innerHTML.includes(`${Q.length} questões`), "a capa não conta as questões a partir dos dados");
    exige(todos(app, ".fontes").flatMap(u => todos(u, "li")).length === B.meta.fontes.length, "o rodapé não lista as fontes");
    /* simulado: min(5, n) de cada área */
    const bSim = todos(app, "button").find(b => b.textContent.startsWith("Simulado"));
    exige(!!bSim, "não há o botão do simulado");
    if (bSim) {
      (bSim.listeners.click || []).forEach(fn => fn());
      const sim = JSON.parse(window.localStorage.getItem("susp:simulado") || "null");
      const esperadoSim = AREAS.reduce((s, a) => s + Math.min(5, Q.filter(q => q.area === a.id).length), 0);
      exige(sim && sim.ids.length === esperadoSim, `o simulado sorteou ${sim && sim.ids.length} questões, esperava ${esperadoSim}`);
      for (const a of AREAS) { const nA = Math.min(5, Q.filter(q => q.area === a.id).length); exige(sim && sim.ids.filter(id => Q.find(q => q.id === id).area === a.id).length === nA, `o simulado não sorteou ${nA} de ${a.nome}`); }
      exige(todos(app, ".q").length === esperadoSim, "a página do simulado não montou os cartões sorteados");
      exige(!!app.querySelector(".relogio"), "o simulado não tem relógio");
    }
  } catch (e) { erro(`app.js estourou no DOM de mentira: ${e.message}`); }
}

/* --- o caderno para imprimir monta ---------------------------------------- */
{
  n++;
  const montar = opcoes => {
    const { window, app } = domDeMentira();
    if (opcoes) window.localStorage.setItem("susp:caderno", JSON.stringify(opcoes));
    const c = contexto(window);
    vm.runInContext(src, c, { filename: "banco.js" });
    vm.runInContext(fs.readFileSync(path.join(AQUI, "caderno", "caderno.js"), "utf8"), c, { filename: "caderno.js" });
    return app;
  };
  try {
    for (const arq of ["caderno/index.html", "caderno/caderno.css"]) exige(fs.existsSync(path.join(AQUI, arq)), `falta ${arq}`);
    let app = montar(null);
    const qs = todos(app, ".questao");
    exige(qs.length === Q.length, `o caderno padrão montou ${qs.length} fichas, esperava ${Q.length}`);
    const seqAreas = qs.map(f => IDS_AREA.indexOf((Q.find(x => x.id === f.attrs["data-id"]) || {}).area));
    exige(seqAreas.every((v, i) => v >= 0 && (i === 0 || v >= seqAreas[i - 1])), "as fichas não estão agrupadas por área na ordem de meta.areas");
    exige(todos(app, ".alts").flatMap(a => todos(a, ".bolha")).length === Q.length * 5, "as fichas não têm uma bolha por alternativa");
    const fichaOk = f => {
      const d = Q.find(x => x.id === f.attrs["data-id"]);
      const c = f.querySelector(".comentario");
      const refs = c && c.querySelector(".referencias");
      return d && c && c.attrs["data-letra"] === LETRAS[d.correta]
        && c.querySelector(".letrao").textContent === LETRAS[d.correta]
        && c.querySelector(".texto-comentario").innerHTML === d.comentario
        && !!refs && d.referencias.every(r => refs.innerHTML.includes(r))
        && !!c.querySelector(".simples") && todos(c.querySelector(".simples"), "div")[0].innerHTML === d.simples
        && todos(f, ".alts").flatMap(a => todos(a, ".certa")).length === 1
        && todos(f, ".auto").flatMap(a => todos(a, ".quadrado")).length === 4
        && todos(f, ".notas").length === 1 && f.querySelector(".notas").className.includes("linhas")
        && todos(f, ".rascunho").length === 0
        && f.querySelector(".tag").textContent === AREAS.find(a => a.id === d.area).nome;
    };
    exige(qs.every(fichaOk), "alguma ficha não traz, dentro dela, gabarito certo + comentário + referências + Simplificando + autoavaliação + pauta + tag da área");
    const fontes = qs.map(f => (f.querySelector(".fonte") || {}).textContent || "");
    const fonteOk = (t, i) => { const d = Q.find(x => x.id === qs[i].attrs["data-id"]); return t === `Questão ${dois(d.numero)} · ${FONTES[d.fonte].rotulo}.`; };
    exige(fontes.every(fonteOk), `a linha de fonte da ficha não é "Questão NN · ROTULO." ("${fontes.find((t, i) => !fonteOk(t, i))}")`);
    exige(todos(app, ".folha").length === 0, "a folha de respostas só entra quando pedida");
    const chave = todos(app, ".chave").flatMap(t => todos(t, ".l"));
    exige(chave.length === Q.length && chave.every(td => { const q = Q.find(x => x.id === td.attrs["data-id"]); return q && td.attrs["data-letra"] === LETRAS[q.correta]; }), "o gabarito impresso não bate com as letras do banco");
    const mapa = app.querySelector(".mapa");
    const linhasMapa = mapa ? todos(mapa, "tr") : [];
    exige(linhasMapa.length === Q.length, `o mapa de temas tem ${linhasMapa.length} linhas, esperava ${Q.length} (uma por questão)`);
    exige(linhasMapa.every((tr, i) => (tr.querySelector(".tag") || {}).textContent === AREAS.find(a => a.id === Q[i].area).nome), "o mapa de temas não lista cada questão sob a sua área, na ordem do banco");
    exige(todos(app, ".capa").length === 1 && todos(app, ".mapa").length === 1 && todos(app, ".resultado").length === 1, "faltam capa, mapa de temas ou quadro de resultado");
    const nomeCapa = (app.querySelector(".capa").querySelector(".nome") || {}).textContent || "";
    exige(nomeCapa === "Genaro Tuco Zarate", `a capa não traz o nome do estudante ("${nomeCapa}")`);
    exige(((app.querySelector(".rodape-impresso") || {}).textContent || "").startsWith("Genaro Tuco Zarate · "), "o rodapé impresso não começa com o nome do estudante");
    /* uma área, sem Simplificando, em branco, com folha, sem resumo */
    const a0 = AREAS[0];
    app = montar({ area: a0.id, simples: false, pauta: "nenhuma", folha: true, resumo: false });
    const qs2 = todos(app, ".questao");
    exige(qs2.length === Q.filter(q => q.area === a0.id).length, `com a área ${a0.id}, o caderno montou ${qs2.length} fichas`);
    exige(todos(app, ".simples").length === 0, "Simplificando desligado ainda aparece");
    exige(todos(app, ".notas").length === qs2.length && todos(app, ".notas").every(x => x.className.includes("nenhuma")), "a opção de anotações em branco não chegou às fichas");
    exige(todos(app, ".folha").flatMap(f => todos(f, ".bolha")).length === qs2.length * 5, "a folha de respostas não tem 5 bolhas por questão");
    exige(todos(app, ".gabarito").length === 0, "com resumo desligado, o gabarito resumido ainda foi impresso");
    /* uma edição, outro nome */
    const f0 = B.meta.fontes.find(f => Q.some(q => q.fonte === f.id));
    app = montar({ edicao: f0.id, nome: "Maria Silva" });
    exige(todos(app, ".questao").length === Q.filter(q => q.fonte === f0.id).length, "o filtro de edição do caderno não funciona");
    exige(app.querySelector(".capa").querySelector(".nome").textContent === "Maria Silva" && app.querySelector(".rodape-impresso").textContent.startsWith("Maria Silva · "), "trocar o nome não chega à capa e ao rodapé");
  } catch (e) { erro(`caderno.js estourou no DOM de mentira: ${e.message}`); }
}

/* --- relatório ------------------------------------------------------------- */
const porArea = AREAS.map(a => `${a.curto} ${Q.filter(q => q.area === a.id).length}`).join(" · ");
const porFonte = B.meta.fontes.map(f => `${f.rotulo} ${Q.filter(q => q.fonte === f.id).length}`).join(" · ");
console.log(`\n${falhas.length ? "✗" : "✓"} banco SUS-SP — ${Q.length} questões (${porArea}; ${porFonte}) · ${n} conferências`);
for (const f of falhas) console.log("   ! " + f);
console.log(falhas.length ? `\n${falhas.length} problema(s).` : "\ntudo certo.");
process.exit(falhas.length ? 1 : 0);
