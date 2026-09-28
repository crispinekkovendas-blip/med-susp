/* ============================================================================
   Conferência do banco INEPAM. Roda em Node: `node verificar.js`.

   O que ela prova:
     · a forma: 100 questões, 50 + 50, ids únicos, cinco alternativas cada,
       gabarito dentro do intervalo, alternativas distintas, comentário com
       tamanho de comentário e não de frase;
     · a MATEMÁTICA: toda questão traz `conta` e `valor`; a conta é
       recalculada aqui e tem de dar o `valor`, e o `valor` tem de ser o
       número escrito na alternativa marcada como certa. Um gabarito errado
       de matemática não passa. Nas questões de IDENTIDADE ALGÉBRICA (fatorar,
       desenvolver, frações algébricas) não há número: `conta` é a expressão
       original como função de x, cada alternativa é traduzida para JS e
       avaliada em três valores de x, e só a do gabarito pode coincidir;
     · a coerência do comentário: ele tem de nomear a letra do gabarito
       (`<strong>B`), senão o texto explica uma coisa e o gabarito diz outra;
     · a marcação: tags de abertura e fechamento equilibradas, nada de
       `undefined`, nenhum byte de controle;
     · a página monta: index.html, app.css e app.js existem, e app.js roda
       num DOM de mentira sem estourar, produzindo 100 cartões.
   ========================================================================== */
const fs = require("fs"), path = require("path"), vm = require("vm");
const AQUI = __dirname;
const falhas = [];
const erro = m => falhas.push(m);
let n = 0;
const exige = (c, m) => { n++; if (!c) erro(m); };

/* --- carrega o banco ---------------------------------------------------- */
const src = fs.readFileSync(path.join(AQUI, "banco.js"), "utf8");
const ctx = vm.createContext({ window: {} });
vm.runInContext(src, ctx, { filename: "banco.js" });
const B = ctx.window.BANCO;
exige(B && Array.isArray(B.questoes), "banco.js não define window.BANCO.questoes");
const Q = B.questoes;
const LETRAS = "ABCDE";
const FONTES = new Set(B.meta.fontes.map(f => f.id));

/* --- a forma ------------------------------------------------------------ */
/* 55 reais (10 + 32 de português, 8 + 5 de matemática) e 82 inéditas */
const ESPERADO = { total: 137, pt: 82, mt: 55, reais: 55, reaisPt: 42, reaisMt: 13 };
exige(Q.length === ESPERADO.total, `esperava ${ESPERADO.total} questões, há ${Q.length}`);
exige(Q.filter(q => q.disc === "pt").length === ESPERADO.pt, `esperava ${ESPERADO.pt} de português`);
exige(Q.filter(q => q.disc === "mt").length === ESPERADO.mt, `esperava ${ESPERADO.mt} de matemática`);
const REAIS = Q.filter(q => q.origem === "recuperada");
exige(REAIS.length === ESPERADO.reais, `esperava ${ESPERADO.reais} questões reais (da banca), há ${REAIS.length}`);
exige(REAIS.filter(q => q.disc === "pt").length === ESPERADO.reaisPt && REAIS.filter(q => q.disc === "mt").length === ESPERADO.reaisMt, "reais por disciplina fora do esperado");
/* a seleção 50 + 50: as reais + as inéditas marcadas com `selecao` */
const SELECAO = Q.filter(q => q.origem === "recuperada" || q.selecao === true);
exige(Q.every(q => q.selecao === undefined || (q.selecao === true && q.origem === "inedita")), "`selecao` só pode ser true, e só em inédita");
exige(SELECAO.filter(q => q.disc === "pt").length === 50 && SELECAO.filter(q => q.disc === "mt").length === 50, `a seleção tem ${SELECAO.filter(q => q.disc === "pt").length} de português e ${SELECAO.filter(q => q.disc === "mt").length} de matemática, esperava 50 + 50`);
/* no banco, as reais de cada disciplina vêm antes das inéditas */
for (const d of ["pt", "mt"]) {
  const seq = Q.filter(q => q.disc === d).map(q => q.origem === "recuperada" ? "r" : "i").join("");
  exige(/^r+i+$/.test(seq), `em ${d}, as questões da banca não vêm todas antes das inéditas`);
}
const ids = new Set();
for (const q of Q) {
  exige(!ids.has(q.id), `id repetido: ${q.id}`); ids.add(q.id);
  exige(typeof q.enunciado === "string" && q.enunciado.length >= 20, `${q.id}: enunciado curto ou ausente`);
  exige(Array.isArray(q.alternativas) && q.alternativas.length === 5, `${q.id}: precisa de 5 alternativas`);
  exige(Number.isInteger(q.correta) && q.correta >= 0 && q.correta <= 4, `${q.id}: gabarito fora de 0..4`);
  exige(typeof q.tema === "string" && q.tema.length >= 3, `${q.id}: sem tema`);
  exige(q.origem === "recuperada" || q.origem === "inedita", `${q.id}: origem inválida "${q.origem}"`);
  exige(FONTES.has(q.fonte), `${q.id}: fonte "${q.fonte}" não está em meta.fontes`);
  /* de quando é a questão: ano em todas, igual ao da fonte; nas recuperadas,
     o número que ela tinha na prova, e o comentário — que cita a prova —
     tem de citar o MESMO número. Inédita não tem número de prova. */
  exige(Number.isInteger(q.ano) && q.ano >= 2020 && q.ano <= 2026, `${q.id}: sem ano válido`);
  const fonteObj = B.meta.fontes.find(f => f.id === q.fonte);
  exige(fonteObj && fonteObj.ano === q.ano, `${q.id}: ano ${q.ano} não bate com o da fonte ${q.fonte} (${fonteObj && fonteObj.ano})`);
  if (q.origem === "recuperada") {
    exige(Number.isInteger(q.numero) && q.numero >= 1 && q.numero <= 60, `${q.id}: recuperada sem número da questão na prova`);
    const cit = (q.comentario || "").match(/[Qq]uest[ãa]o (\d{1,2})\b/);
    exige(cit && Number(cit[1]) === q.numero, `${q.id}: o comentário cita a questão ${cit ? cit[1] : "?"}, e \`numero\` diz ${q.numero}`);
    /* a origem, no texto, é só "INEPAM + ano": sem cidade, cargo, edital, secretaria ou documento */
    const vazou = (String(q.comentario) + " " + String(q.simples || "")).replace(/<[^>]+>/g, " ")
      .match(/Adamantina|Embu das Artes|Guariba|Pradópolis|Emilianópolis|Luminárias|Santa Isabel|Nova Ubiratã|Marinópolis|Córrego do Bom Jesus|Estiva Gerbi|Nova Monte Verde|Campo Limpo Paulista|Bom Jardim da Serra|Mongaguá|Águas de São Pedro|Psicólogo|PEB II|cargos? de|Monitor de Transporte|Residência Jurídica|\bSME\b|\bSMAJ\b|\bSMS\b|\bPS 0|\bCP 0|Concurso 0|Processo Seletivo|idAnexo|spsconcursos/);
    exige(!vazou, `${q.id}: o comentário cita a origem além de banca e ano ("${vazou && vazou[0]}")`);
  } else exige(q.numero === undefined, `${q.id}: inédita não tem número de prova`);
  exige(typeof q.comentario === "string" && q.comentario.length >= 600, `${q.id}: comentário curto (${(q.comentario || "").length})`);
  const norm = s => String(s).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  const vistas = new Set();
  for (const a of q.alternativas) {
    exige(norm(a).length > 0, `${q.id}: alternativa vazia`);
    exige(!vistas.has(norm(a)), `${q.id}: alternativa repetida "${norm(a)}"`); vistas.add(norm(a));
  }
  /* O comentário dá o VEREDITO com a letra certa. "Menciona a letra em algum
     lugar" não serve: todo comentário menciona as cinco letras ao explicar os
     distratores — um controle negativo passou por essa fresta. O que se exige
     é a frase de veredito ("Gabarito <strong>X</strong>", "<strong>X é a
     correta", "<strong>X é a errada"), uma só, e com a letra do gabarito. */
  const letra = LETRAS[q.correta];
  const vereditos = [...q.comentario.matchAll(/(?:[Gg]abarito <strong>([A-E])<\/strong>|<strong>([A-E]) é a (?:correta|errada))/g)]
    .map(m => m[1] || m[2]);
  exige(vereditos.length >= 1, `${q.id}: o comentário não traz a frase de veredito com a letra`);
  exige(vereditos.every(v => v === letra), `${q.id}: o comentário dá o veredito para ${[...new Set(vereditos)].join("/")}, e o gabarito é ${letra}`);
  /* "Simplificando": a mesma explicação contada para uma criança. Tem de
     existir, dizer a letra certa por extenso ("a letra <strong>X</strong>",
     e nunca outra) e SER simples de verdade — o que se mede: média de no
     máximo 14 palavras por frase, nenhuma frase com mais de 26. Um trecho do
     comentário da banca copiado para cá não passa por essa régua. */
  exige(typeof q.simples === "string" && q.simples.length >= 200, `${q.id}: sem "simples" (ou curto demais)`);
  if (typeof q.simples === "string") {
    const letrasS = [...q.simples.matchAll(/letra <strong>([A-E])<\/strong>/g)].map(m => m[1]);
    exige(letrasS.length >= 1, `${q.id}: o "simples" não diz "a letra <strong>X</strong>"`);
    exige(letrasS.every(v => v === letra), `${q.id}: o "simples" diz letra ${[...new Set(letrasS)].join("/")}, e o gabarito é ${letra}`);
    /* tags viram espaço (senão "</p><p>" cola duas frases numa) e só conta
       como palavra o que tem letra ou dígito — "+", "=" e "−" não são
       palavras para uma criança ler */
    const frases = q.simples.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
      .split(/[.!?…]+\s+|[.!?…]+$/).map(f => f.trim()).filter(Boolean);
    const tam = frases.map(f => f.split(/\s+/).filter(w => /[\p{L}\d]/u.test(w)).length);
    const media = tam.reduce((a, b) => a + b, 0) / tam.length;
    exige(media <= 14, `${q.id}: "simples" com frases longas (média ${media.toFixed(1)} palavras por frase)`);
    exige(Math.max(...tam) <= 26, `${q.id}: "simples" tem uma frase de ${Math.max(...tam)} palavras`);
  }
  /* marcação equilibrada, nada vazado */
  for (const campo of ["enunciado", "comentario", "texto", "simples"]) {
    const t = q[campo]; if (!t) continue;
    for (const tag of ["strong", "em", "p", "code", "table", "tr", "td", "th", "thead", "tbody"]) {
      const abre = (t.match(new RegExp("<" + tag + "(\\s|>)", "g")) || []).length;
      const fecha = (t.match(new RegExp("</" + tag + ">", "g")) || []).length;
      exige(abre === fecha, `${q.id}: <${tag}> desequilibrado em ${campo} (${abre} abre, ${fecha} fecha)`);
    }
    exige(!/undefined|\[object Object\]|NaN/.test(t), `${q.id}: vazamento em ${campo}`);
  }
}

/* --- a matemática: recalcula e confere com a alternativa ---------------- */
const numeroDe = txt => {
  /* extrai o número escrito numa alternativa: "R$ 1.740,00", "2,5% ao mês",
     "2/3", "60°", "15 dias", "6 dias e 40 minutos" (este último não é
     número simples e devolve null) */
  let s = String(txt).replace(/<[^>]+>/g, "").trim();
  const frac = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (frac) return Number(frac[1]) / Number(frac[2]);
  if (/[√∛]/.test(s)) return null;
  s = s.replace(/R\$\s*/g, "").replace(/\./g, "").replace(",", ".");
  const m = s.match(/^-?\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
};
const iguais = (a, b) => Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(b));
/* Identidade algébrica: a alternativa não traz um número, traz uma expressão
   em x. `conta` é a expressão ORIGINAL como função de x; cada alternativa é
   traduzida de álgebra para JS ("3x(x − 2)" → "3*x*(x-2)") e avaliada em
   três valores de x. A do gabarito tem de coincidir nos três, e NENHUMA outra
   pode — senão há dois gabaritos, ou o gabarito está errado. É o mesmo
   princípio das numéricas: o gabarito é recalculado a partir das
   alternativas, e não lido delas. (Antes, `conta` testava a identidade num
   único x e dava sempre 0 — não provava nada sobre a letra.) */
const algebraParaJs = txt => String(txt).replace(/<[^>]+>/g, "")
  .replace(/−/g, "-").replace(/[×·]/g, "*").replace(/²/g, "**2").replace(/³/g, "**3").replace(/\s+/g, "")
  .replace(/(\d|\))(?=[x(])/g, "$1*").replace(/x(?=[x(\d])/g, "x*");
const PONTOS = [7, 11, 2.5];
const avaliaAlt = a => { const f = new Function("x", "return (" + algebraParaJs(a) + ");"); return PONTOS.map(x => f(x)); };
for (const q of Q.filter(q => q.disc === "mt")) {
  n++;
  if (q.identidade) {
    let f;
    try { f = vm.runInNewContext(q.conta, { Math }); } catch (e) { erro(`${q.id}: a conta não roda: ${e.message}`); continue; }
    if (typeof f !== "function") { erro(`${q.id}: identidade sem função de x em \`conta\``); continue; }
    exige(q.valor === undefined, `${q.id}: identidade não leva \`valor\``);
    const ref = PONTOS.map(x => f(x));
    q.alternativas.forEach((a, i) => {
      let v;
      try { v = avaliaAlt(a); } catch (e) { erro(`${q.id}: a alternativa ${LETRAS[i]} não traduz para JS ("${algebraParaJs(a)}")`); return; }
      const bate = v.every((y, k) => Number.isFinite(y) && iguais(y, ref[k]));
      if (i === q.correta) exige(bate, `${q.id}: a alternativa ${LETRAS[i]} "${a}" não é igual à expressão original em x = ${PONTOS.join(", ")}`);
      else exige(!bate, `${q.id}: a alternativa ${LETRAS[i]} "${a}" também é igual à expressão original — dois gabaritos`);
    });
    continue;
  }
  if (q.conta == null) {
    /* questões conceituais de matemática não têm conta — mas precisam dizer isso */
    if (!/conceit|conjunto/i.test(q.tema)) erro(`${q.id}: questão de matemática sem \`conta\``);
    continue;
  }
  let calc;
  try { calc = vm.runInNewContext(q.conta, { Math }); } catch (e) { erro(`${q.id}: a conta não roda: ${e.message}`); continue; }
  exige(typeof q.valor === "number", `${q.id}: sem \`valor\``);
  exige(iguais(calc, q.valor), `${q.id}: a conta dá ${calc}, e \`valor\` diz ${q.valor}`);
  const naAlt = numeroDe(q.alternativas[q.correta]);
  if (naAlt != null) exige(iguais(naAlt, q.valor), `${q.id}: a alternativa ${LETRAS[q.correta]} diz ${naAlt}, e a conta dá ${q.valor}`);
  /* duas alternativas não podem valer o mesmo número, mesmo escritas de
     formas diferentes ("0,3" e "3/10"; "2/10" e "1/5") — uma prova real não
     faz isso, e a auditoria achou dois casos que o harness deixava passar */
  /* "0,0013" e "0,0013%" são números diferentes (a taxa decimal e a taxa em
     porcentagem) — uma prova real da banca os pôs lado a lado de propósito */
  const nums = q.alternativas.map(a => ({ v: numeroDe(a), pct: /%/.test(String(a)) }));
  nums.forEach((x, i) => nums.forEach((y, k) => {
    if (k > i && x.v != null && y.v != null && x.pct === y.pct && iguais(x.v, y.v)) erro(`${q.id}: as alternativas ${LETRAS[i]} e ${LETRAS[k]} valem o mesmo (${x.v})`);
  }));
  /* e nenhuma OUTRA alternativa pode valer o mesmo — senão há dois gabaritos */
  const pctCerta = /%/.test(String(q.alternativas[q.correta]));
  q.alternativas.forEach((a, i) => {
    if (i === q.correta) return;
    const v = numeroDe(a);
    if (v != null && /%/.test(String(a)) === pctCerta && iguais(v, q.valor)) erro(`${q.id}: a alternativa ${LETRAS[i]} também vale ${v}`);
  });
}

/* --- distribuição das letras (informativo, e um piso) ------------------- */
/* o equilíbrio é cobrado só nas inéditas: as reais têm a letra que a banca
   deu, e não se mexe nela */
const dist = [0, 0, 0, 0, 0], distIne = [0, 0, 0, 0, 0];
for (const q of Q) { dist[q.correta]++; if (q.origem === "inedita") distIne[q.correta]++; }
const distTxt = dist.map((c, i) => `${LETRAS[i]}:${c}`).join(" ");
const distIneTxt = distIne.map((c, i) => `${LETRAS[i]}:${c}`).join(" ");
exige(Math.min(...distIne) >= 13, `letras desequilibradas nas inéditas (${distIneTxt}) — alguma letra com menos de 13 gabaritos`);

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

/* --- a página monta num DOM de mentira ---------------------------------- */
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
      /* replaceWith de verdade: é assim que o app troca o cartão respondido
         pelo cartão com comentário. Sem isso o DOM de mentira nunca veria o
         comentário nem as abas — e foi assim (um no-op) até as abas. */
      replaceWith(novo) { const p = el.parentNode; if (!p) return; const i = p.children.indexOf(el); if (i >= 0) { p.children[i] = novo; novo.parentNode = p; el.parentNode = null; } },
      closest() { return null }, scrollIntoView() {},
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
    document, localStorage: { getItem: k => armazem[k] == null ? null : armazem[k], setItem: (k, v) => { armazem[k] = String(v); } },
    scrollTo() {}, confirm: () => true, setTimeout: (f) => { f(); return 1; }, setInterval: () => 1, clearInterval() {},
    Date, Math, JSON, Object, Array, Number, String, Boolean, RegExp, console,
  };
  window.window = window;
  return { window, document, app };
}
{
  n++;
  const { window, document, app } = domDeMentira();
  const c = vm.createContext(Object.assign({}, window, { window, document, setTimeout: window.setTimeout, setInterval: window.setInterval, clearInterval: window.clearInterval, localStorage: window.localStorage, confirm: window.confirm }));
  try {
    vm.runInContext(src, c, { filename: "banco.js" });
    vm.runInContext(fs.readFileSync(path.join(AQUI, "app.js"), "utf8"), c, { filename: "app.js" });
    const cartoes = app.querySelectorAll(".q");
    exige(cartoes.length === Q.length, `a página montou ${cartoes.length} cartões, esperava ${Q.length}`);
    const alts = app.querySelectorAll(".alt");
    exige(alts.length === Q.length * 5, `a página montou ${alts.length} alternativas, esperava ${Q.length * 5}`);
    exige(app.querySelectorAll(".comentario").length === 0, "comentário visível antes de responder");
    /* a etiqueta de origem diz banca, ano e número de prova (recuperada) ou
       "Inédita" e o ano do edital */
    const etq = i => (cartoes[i].querySelector(".origem") || {}).textContent || "";
    const iRec = Q.findIndex(q => q.origem === "recuperada"), iIne = Q.findIndex(q => q.origem === "inedita");
    const qRec = Q[iRec], qIne = Q[iIne];
    exige(etq(iRec).includes(`${B.meta.banca} ${qRec.ano}`) && etq(iRec).includes(`Questão ${String(qRec.numero).padStart(2, "0")}`),
      `a etiqueta da questão recuperada não traz ano e número ("${etq(iRec)}")`);
    exige(etq(iIne).includes("Inédita") && etq(iIne).includes(String(qIne.ano)) && !/Questão \d/.test(etq(iIne)),
      `a etiqueta da inédita deveria dizer "Inédita ${qIne.ano}" ("${etq(iIne)}")`);
    /* responde a primeira questão pelo clique e confere que o comentário abre */
    const b = alts[0]; (b.listeners.click || []).forEach(f => f());
    exige(JSON.parse(window.localStorage.getItem("inepam:respostas") || "{}")[Q[0].id] === 0, "responder não gravou no armazenamento");
    /* o cartão respondido foi trocado por um com comentário e duas abas; a
       segunda mostra o "Simplificando" e a escolha fica guardada */
    const c1 = app.querySelectorAll(".q")[0];
    exige(c1 && c1.querySelector(".veredito"), "o cartão respondido não foi trocado pelo cartão corrigido");
    const abas = c1 ? c1.querySelectorAll(".aba") : [];
    exige(abas.length === 2, `o cartão respondido tem ${abas.length} abas, esperava 2`);
    const pc = c1 && c1.querySelectorAll(".comentario").find(e => !e.className.includes("simples"));
    const ps = c1 && c1.querySelector(".simples");
    exige(pc && ps && pc.hidden === false && ps.hidden === true, "a aba Comentário não é a visível de início");
    if (abas.length === 2) (abas[1].listeners.click || []).forEach(f => f());
    exige(ps && ps.hidden === false && pc.hidden === true, "clicar em Simplificando não trocou o painel");
    exige(window.localStorage.getItem("inepam:aba") === "simples", "a aba escolhida não foi guardada");
    exige(ps && ps.innerHTML.length >= 200 && ps.innerHTML === Q[0].simples, "o painel Simplificando não mostra o texto da questão");
    exige(pc && pc.innerHTML.startsWith(Q[0].comentario), "o painel Comentário não mostra o comentário");
    /* o cartão seguinte respondido já nasce na aba guardada */
    const alts2 = app.querySelectorAll(".q")[1].querySelectorAll(".alt");
    (alts2[1].listeners.click || []).forEach(f => f());
    const c2 = app.querySelectorAll(".q")[1];
    const ps2 = c2 && c2.querySelector(".simples");
    exige(ps2 && ps2.hidden === false, "o segundo cartão não abriu na aba guardada (Simplificando)");
    /* o filtro "Da banca" mostra só as questões reais */
    const botoes = app.querySelectorAll(".seg").flatMap(s => s.querySelectorAll("button"));
    const bBanca = botoes.find(b => b.textContent.includes("Da banca"));
    exige(!!bBanca, "não há o botão de filtro \"Da banca\"");
    if (bBanca) {
      (bBanca.listeners.click || []).forEach(f => f());
      const soReais = app.querySelectorAll(".q");
      exige(soReais.length === REAIS.length, `o filtro "Da banca" mostrou ${soReais.length} cartões, esperava ${REAIS.length}`);
      exige(soReais.every(c => Q.find(q => q.id === c.attrs["data-id"]).origem === "recuperada"), "o filtro \"Da banca\" deixou passar inédita");
      exige(window.localStorage.getItem("inepam:filtro") === JSON.stringify("banca"), "o filtro escolhido não foi guardado");
    }
    /* e o filtro "50 + 50" mostra a seleção */
    const bSel = app.querySelectorAll(".seg").flatMap(s => s.querySelectorAll("button")).find(b => b.textContent.includes("50 + 50"));
    exige(!!bSel, "não há o botão de filtro \"50 + 50\"");
    if (bSel) {
      (bSel.listeners.click || []).forEach(f => f());
      const sel = app.querySelectorAll(".q");
      exige(sel.length === SELECAO.length && sel.every(c => { const d = Q.find(x => x.id === c.attrs["data-id"]); return d.origem === "recuperada" || d.selecao === true; }), `o filtro "50 + 50" mostrou ${sel.length} cartões, esperava ${SELECAO.length}, só da seleção`);
    }
  } catch (e) { erro(`app.js estourou no DOM de mentira: ${e.message}`); }
}

/* --- o caderno para imprimir monta ---------------------------------------- */
{
  n++;
  const montar = opcoes => {
    const { window, document, app } = domDeMentira();
    if (opcoes) window.localStorage.setItem("inepam:caderno2", JSON.stringify(opcoes));
    const c = vm.createContext(Object.assign({}, window, { window, document, setTimeout: window.setTimeout, setInterval: window.setInterval, clearInterval: window.clearInterval, localStorage: window.localStorage, confirm: window.confirm }));
    vm.runInContext(src, c, { filename: "banco.js" });
    vm.runInContext(fs.readFileSync(path.join(AQUI, "caderno", "caderno.js"), "utf8"), c, { filename: "caderno.js" });
    return app;
  };
  const todos = (app, sel) => app.querySelectorAll(sel);
  try {
    for (const arq of ["caderno/index.html", "caderno/caderno.css"]) exige(fs.existsSync(path.join(AQUI, arq)), `falta ${arq}`);
    /* padrão: a seleção 50 + 50, cada ficha completa (gabarito + comentário +
       Simplificando + autoavaliação + espaço de anotações), sem folha de
       respostas, com o gabarito resumido no fim */
    let app = montar(null);
    const qs = todos(app, ".questao");
    exige(qs.length === SELECAO.length, `o caderno padrão montou ${qs.length} questões, esperava ${SELECAO.length} (seleção 50 + 50)`);
    exige(qs.every(q => { const d = Q.find(x => x.id === q.attrs["data-id"]); return d && (d.origem === "recuperada" || d.selecao === true); }), "o caderno padrão trouxe inédita fora da seleção");
    exige(todos(app, ".alts").flatMap(a => todos(a, ".bolha")).length === SELECAO.length * 5, "as questões não têm uma bolha por alternativa");
    const fichaOk = q => {
      const dados = Q.find(x => x.id === q.attrs["data-id"]);
      const c = q.querySelector(".comentario");
      return dados && c && c.attrs["data-letra"] === LETRAS[dados.correta]
        && c.querySelector(".letrao").textContent === LETRAS[dados.correta]
        && c.querySelector(".texto-comentario").innerHTML === dados.comentario
        && !!c.querySelector(".simples") && c.querySelector(".simples").querySelectorAll("div")[0].innerHTML === dados.simples
        && todos(q, ".alts").flatMap(a => todos(a, ".certa")).length === 1
        && todos(q, ".auto").flatMap(a => todos(a, ".quadrado")).length === 4
        && todos(q, ".rascunho").length === (dados.disc === "mt" ? 1 : 0)
        && todos(q, ".notas").length === (dados.disc === "pt" ? 1 : 0)
        && (dados.disc === "mt" || q.querySelector(".notas").className.includes("linhas"));
    };
    exige(qs.every(fichaOk), "alguma ficha não traz, dentro dela, gabarito certo + comentário do banco + Simplificando + autoavaliação + espaço de anotações (pauta em português, quadriculado em matemática)");
    /* na ficha, a origem é só banca e ano — nada de cidade, cargo ou documento */
    const fontes = qs.map(q => q.querySelector(".fonte").textContent);
    const fonteOk = f => /^Questão \d\d · INEPAM 20\d\d\.$/.test(f) || /^Inédita 20\d\d, no estilo da banca\.$/.test(f);
    exige(fontes.every(fonteOk), `a linha de fonte da ficha diz mais do que banca e ano ("${fontes.find(f => !fonteOk(f))}")`);
    exige(todos(app, ".comentarios").length === 0, "os comentários não podem ficar numa seção separada");
    exige(todos(app, ".folha").length === 0, "a folha de respostas só entra quando pedida");
    const chave = todos(app, ".chave").flatMap(t => todos(t, ".l"));
    exige(chave.length === SELECAO.length && chave.every(td => { const q = Q.find(x => x.id === td.attrs["data-id"]); return q && td.attrs["data-letra"] === LETRAS[q.correta]; }), "o gabarito impresso não bate com as letras do banco");
    /* o texto de apoio sai UMA vez para a sequência de questões que o compartilham */
    let esperados = 0; SELECAO.forEach((q, i) => { if (q.texto && (i === 0 || SELECAO[i - 1].texto !== q.texto)) esperados++; });
    const textos = todos(app, ".questoes").flatMap(s => todos(s, ".texto"));
    exige(textos.length === esperados, `texto de apoio impresso ${textos.length} vez(es), esperava ${esperados} (uma por sequência)`);
    exige(todos(app, ".capa").length === 1 && todos(app, ".mapa").length === 1 && todos(app, ".resultado").length === 1, "faltam capa, mapa de temas ou quadro de resultado");
    /* o nome do estudante na capa e no rodapé de toda página */
    const nomeCapa = (app.querySelector(".capa").querySelector(".nome") || {}).textContent || "";
    exige(nomeCapa === "Genaro Tuco Zarate", `a capa não traz o nome do estudante ("${nomeCapa}")`);
    exige((app.querySelector(".rodape-impresso") || {}).textContent.startsWith("Genaro Tuco Zarate · "), "o rodapé impresso não começa com o nome do estudante");
    /* todas, sem Simplificando, sem linhas, com folha de respostas, sem resumo */
    app = montar({ origem: "todas", disc: "todas", simples: false, pauta: "nenhuma", folha: true, resumo: false });
    const qs2 = todos(app, ".questao");
    exige(qs2.length === Q.length, `com "todas", o caderno montou ${qs2.length} questões, esperava ${Q.length}`);
    exige(qs2.every(q => todos(q, ".comentario").length === 1), "falta o comentário dentro de alguma ficha");
    exige(todos(app, ".simples").length === 0, "Simplificando desligado ainda aparece");
    exige(todos(app, ".notas").length === Q.filter(q => q.disc === "pt").length && todos(app, ".notas").every(n => n.className.includes("nenhuma")), "a opção de anotações em branco não chegou às fichas de português");
    exige(todos(app, ".folha").flatMap(f => todos(f, ".bolha")).length === Q.length * 5, "a folha de respostas não tem 5 bolhas por questão");
    exige(todos(app, ".gabarito").length === 0, "com resumo desligado, o gabarito resumido ainda foi impresso");
    /* só matemática da banca */
    app = montar({ origem: "banca", disc: "mt" });
    exige(todos(app, ".questao").length === REAIS.filter(q => q.disc === "mt").length, "o filtro de disciplina do caderno não funciona");
    /* só português da seleção: 50; e outro nome vai para a capa e o rodapé */
    app = montar({ origem: "selecao", disc: "pt", nome: "Maria Silva" });
    exige(todos(app, ".questao").length === 50, "a seleção de português no caderno não tem 50");
    exige(app.querySelector(".capa").querySelector(".nome").textContent === "Maria Silva" && app.querySelector(".rodape-impresso").textContent.startsWith("Maria Silva · "), "trocar o nome não chega à capa e ao rodapé");
  } catch (e) { erro(`caderno.js estourou no DOM de mentira: ${e.message}`); }
}

/* --- relatório ----------------------------------------------------------- */
const rec = Q.filter(q => q.origem === "recuperada").length;
console.log(`\n${falhas.length ? "✗" : "✓"} banco INEPAM — ${Q.length} questões (${rec} recuperadas da banca, ${Q.length - rec} inéditas) · ${n} conferências · gabaritos ${distTxt}`);
for (const f of falhas) console.log("   ! " + f);
console.log(falhas.length ? `\n${falhas.length} problema(s).` : "\ntudo certo.");
process.exit(falhas.length ? 1 : 0);
