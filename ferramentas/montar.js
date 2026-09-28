/* Monta banco.js: junta o texto da banca (questoes.json), o gabarito oficial
   e o que foi escrito à mão (entrada/<area>.js). Ids por área, na ordem de
   meta.areas; dentro da área, na ordem de meta.fontes e depois pelo número
   da questão na prova. Aborta em qualquer inconsistência — banco.js só
   existe se tudo bateu. Roda: `node ferramentas/montar.js` */
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..");
const meta = require("./meta.js");
const { serializar } = require("./serializar.js");

const questoesDe = {}, gabaritoDe = {};
for (const f of meta.fontes) {
  const base = path.join(RAIZ, f.caderno.replace(/\.txt$/, ""));
  questoesDe[f.id] = Object.fromEntries(JSON.parse(fs.readFileSync(base + "-questoes.json", "utf8")).map(q => [q.numero, q]));
  gabaritoDe[f.id] = Object.fromEntries(fs.readFileSync(path.join(RAIZ, f.gabarito), "utf8").trim().split(/\r?\n/).map(l => { const [n, x] = l.trim().split(/\s+/); return [Number(n), x]; }));
}
const ordemFonte = Object.fromEntries(meta.fontes.map((f, i) => [f.id, i]));
const questoes = [];
for (const a of meta.areas) {
  const arq = path.join(__dirname, "entrada", a.id + ".js");
  const entradas = fs.existsSync(arq) ? require(arq) : [];
  entradas.sort((x, y) => (ordemFonte[x.fonte] - ordemFonte[y.fonte]) || (x.numero - y.numero));
  const vistos = new Set();
  entradas.forEach((e, i) => {
    const onde = `${a.id} ${e.fonte} #${e.numero}`;
    if (!(e.fonte in questoesDe)) throw new Error(`${onde}: fonte desconhecida`);
    const q = questoesDe[e.fonte][e.numero];
    if (!q) throw new Error(`${onde}: número não existe no caderno`);
    if (q.area !== a.id) throw new Error(`${onde}: no caderno essa questão é do bloco ${q.area}`);
    if (q.erro) throw new Error(`${onde}: a extração marcou problema (${q.erro})`);
    const g = gabaritoDe[e.fonte][e.numero];
    if (!g || g === "*") throw new Error(`${onde}: sem gabarito ou anulada (${g})`);
    if (vistos.has(e.fonte + "#" + e.numero)) throw new Error(`${onde}: repetida`);
    vistos.add(e.fonte + "#" + e.numero);
    for (const k of ["tema", "comentario", "simples"]) if (typeof e[k] !== "string" || !e[k].trim()) throw new Error(`${onde}: falta ${k}`);
    if (!Array.isArray(e.referencias) || !e.referencias.length) throw new Error(`${onde}: falta referencias`);
    const fonte = meta.fontes.find(f => f.id === e.fonte);
    const obj = { id: a.id + String(i + 1).padStart(2, "0"), area: a.id, tema: e.tema, fonte: e.fonte, edicao: fonte.edicao, numero: e.numero };
    if (q.texto) obj.texto = q.texto;       /* texto compartilhado, vindo do caderno */
    if (e.texto) obj.texto = e.texto;       /* ou escrito à mão (tabela em HTML) */
    Object.assign(obj, { enunciado: q.enunciado, alternativas: q.alternativas, correta: "ABCDE".indexOf(g), referencias: e.referencias, comentario: e.comentario, simples: e.simples });
    questoes.push(obj);
  });
}
fs.writeFileSync(path.join(RAIZ, "banco.js"), serializar({ meta, questoes }), "utf8");
console.log(`banco.js: ${questoes.length} questões (${meta.areas.map(a => `${a.id} ${questoes.filter(q => q.area === a.id).length}`).join(" · ")})`);
