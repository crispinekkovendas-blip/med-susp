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
  ["susp2021-caderno.pdf", "https://cdn.medblog.estrategiaeducacional.com.br/wp-content/uploads/2021/01/Prova-AC_-SUS-SP-1.pdf"],
  ["susp2021-gabarito-estrategia.pdf", "https://cdn.medblog.estrategiaeducacional.com.br/wp-content/uploads/2021/02/Gabarito-SUS-SP-2021.pdf"],
  /* UNESP 2026, Einstein 2026 e Einstein 2025 (quatro alternativas) */
  ["unesp2026-caderno.pdf", "https://cdn.medblog.estrategiaeducacional.com.br/wp-content/uploads/2025/12/prova-unesp-2026.pdf"],
  ["unesp2026-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/12/gabaritos-unesp-2026.pdf"],
  ["unesp2026-recursos.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/12/gab-definitivo.pdf"],
  ["einstein2026-caderno.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/11/FEAE2503_305_20251103083127.pdf.pdf"],
  ["einstein2026-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/11/FEAE2503_308_20251103083107.pdf.pdf"],
  ["einstein2026-resultado.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/11/FEAE2503_306_20251128100641.pdf.pdf"],
  ["einstein2025-caderno.pdf", "https://arquivos.qconcursos.com/prova/arquivo_prova/132851/vunesp-2024-einstein-residencia-medica-acesso-direto-prova.pdf"],
  ["einstein2025-gabarito-preliminar.pdf", "https://arquivos.qconcursos.com/prova/arquivo_gabarito/132851/vunesp-2024-einstein-residencia-medica-acesso-direto-gabarito.pdf"],
  ["einstein2025-resultado.pdf", "https://www.grupomedcof.com.br/blog/wp-content/uploads/2024/10/Resultado-HIAE-2025.pdf"],
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
