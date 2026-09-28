/* Baixa os documentos-fonte para cadernos/ (pula o que já existe) e imprime
   tamanho e md5 de cada um. Espelhos públicos, porque vunesp.com.br devolve
   403 a scripts e exige login de candidato para "Provas e Gabaritos".
   Roda: `node ferramentas/baixar.js` */
const fs = require("fs"), path = require("path"), https = require("https"), crypto = require("crypto");
const DIR = path.join(__dirname, "cadernos");
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128.0";
const ARQUIVOS = [
  ["susp2026-caderno.pdf", "https://arquivos.qconcursos.com/prova/arquivo_prova/143800/vunesp-2025-ses-sp-residencia-medica-acesso-direto-prova.pdf"],
  ["susp2026-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/12/SESA2504_306_20251216094031.pdf.pdf"],
  ["susp2026-recursos.pdf", "https://cdn.medblog.estrategiaeducacional.com.br/wp-content/uploads/2026/01/SESA2504_306_20260120131302.pdf.pdf"],
  ["hrpp2026-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/12/HRPP2501_306_20251202163016.pdf.pdf"],
  ["hrpp2026-resultado.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2026/01/HRPP2501_306_20260126122312.pdf.pdf"],
];
function baixar(url, destino, saltos = 0) {
  return new Promise((ok, falha) => {
    https.get(url, { headers: { "User-Agent": UA } }, r => {
      if ([301, 302, 303, 307, 308].includes(r.statusCode) && r.headers.location && saltos < 5) { r.resume(); return ok(baixar(new URL(r.headers.location, url).href, destino, saltos + 1)); }
      if (r.statusCode !== 200) { r.resume(); return falha(new Error(`HTTP ${r.statusCode} em ${url}`)); }
      const w = fs.createWriteStream(destino);
      r.pipe(w); w.on("finish", () => w.close(ok)); w.on("error", falha);
    }).on("error", falha);
  });
}
(async () => {
  fs.mkdirSync(DIR, { recursive: true });
  for (const [nome, url] of ARQUIVOS) {
    const p = path.join(DIR, nome);
    if (!fs.existsSync(p)) await baixar(url, p);
    const b = fs.readFileSync(p);
    if (b.slice(0, 5).toString() !== "%PDF-") { fs.unlinkSync(p); throw new Error(`${nome}: não é PDF (o espelho mudou?)`); }
    console.log(`${nome}\t${b.length} bytes\tmd5 ${crypto.createHash("md5").update(b).digest("hex")}`);
  }
})().catch(e => { console.error(e.message); process.exit(1); });
