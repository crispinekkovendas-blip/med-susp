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
  /* Volume 2 (2026-11-26): Sírio-Libanês 2026 e 2027 (cinco alternativas), UNESP 2025 e FAMEMA 2026 (quatro) */
  ["sirio2026-caderno.pdf", "https://arquivos.qconcursos.com/prova/arquivo_prova/153309/vunesp-2025-hospital-sirio-libanes-residencia-medica-acesso-direto-prova.pdf"],
  ["sirio2026-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/11/HSLI2502_306_20251125081735.pdf.pdf"],
  ["sirio2026-recursos.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2025/12/respostas-recursos-sirio-2026.pdf"],
  ["sirio2027-caderno.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2026/09/prova_ad_sirio2027.pdf"],
  ["sirio2027-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2026/09/gabarito_ad_sirio2027.pdf"],
  ["sirio2027-resultado.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2026/10/HSLI2601_306_20261021192544.pdf.pdf"],
  ["unesp2025-caderno.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2024/12/prova_AD_unesp.pdf"],
  ["unesp2025-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2024/12/gabaritopre_AD_unesp.pdf"],
  ["unesp2025-recursos.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2024/12/gabarito-definitvo-unesp.pdf"],
  ["famema2026-caderno.pdf", "https://arquivos.qconcursos.com/prova/arquivo_prova/143769/vunesp-2025-famema-residencia-medica-areas-basicas-e-acesso-direto-prova.pdf"],
  ["famema2026-gabarito-preliminar.pdf", "https://arquivos.qconcursos.com/prova/arquivo_gabarito/143769/vunesp-2025-famema-residencia-medica-areas-basicas-e-acesso-direto-gabarito.pdf"],
  ["famema2026-recursos.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2026/01/FMMA2503_306_20251221182350.pdf.pdf"],
  /* reserva (ainda fora de meta.fontes): Einstein 2027 espera o edital de resultado dos recursos; UNESP 2024 não tem despacho de recursos público */
  ["einstein2027-caderno.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2026/11/provaad_hiae2027.pdf"],
  ["einstein2027-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2026/11/gabaritospreliminar_hiae2027.pdf"],
  ["unesp2024-caderno.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2023/11/Unesp-2024.pdf"],
  ["unesp2024-gabarito-preliminar.pdf", "https://med.estrategia.com/portal/wp-content/uploads/2023/11/gabarito_preliminar_UNESP-1.pdf"],
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
