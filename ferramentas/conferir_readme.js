/* Confere que a tabela de números do README bate com banco.js.
   A tabela tem uma linha por área ("| Pediatria | 20 | 5 | 25 |") e uma
   de total; as colunas são as fontes na ordem de meta.fontes, depois o
   total. Roda: `node ferramentas/conferir_readme.js` */
const fs = require("fs"), path = require("path"), vm = require("vm");
const RAIZ = path.join(__dirname, "..");
const ctx = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(RAIZ, "banco.js"), "utf8"), ctx);
const B = ctx.window.BANCO, Q = B.questoes;
const readme = fs.readFileSync(path.join(RAIZ, "README.md"), "utf8");
const erros = [];
const linha = nome => {
  const m = readme.match(new RegExp("^\\| \\*?\\*?" + nome.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\*?\\*? \\|([^\\n]*)$", "m"));
  return m ? m[1].split("|").map(s => s.trim().replace(/\*/g, "")).filter(Boolean).map(Number) : null;
};
for (const a of B.meta.areas) {
  const esperado = B.meta.fontes.map(f => Q.filter(q => q.area === a.id && q.fonte === f.id).length);
  esperado.push(Q.filter(q => q.area === a.id).length);
  const lido = linha(a.nome);
  if (!lido || lido.join() !== esperado.join()) erros.push(`${a.nome}: README diz ${lido ? lido.join(" / ") : "nada"}, banco tem ${esperado.join(" / ")}`);
}
const total = B.meta.fontes.map(f => Q.filter(q => q.fonte === f.id).length).concat(Q.length);
const lidoTotal = linha("Total");
if (!lidoTotal || lidoTotal.join() !== total.join()) erros.push(`Total: README diz ${lidoTotal ? lidoTotal.join(" / ") : "nada"}, banco tem ${total.join(" / ")}`);
if (!readme.includes(`${Q.length} questões`)) erros.push(`o README não diz "${Q.length} questões" em lugar nenhum`);
for (const e of erros) console.log("   ! " + e);
console.log(erros.length ? `${erros.length} diferença(s) entre README e banco.` : "README bate com o banco.");
process.exit(erros.length ? 1 : 0);
