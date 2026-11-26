/* Metadados do banco: banca, prova, áreas e fontes. É daqui que montar.js
   escreve o `meta` de banco.js — e é de lá que app, caderno e harness leem
   a lista de áreas e de edições. Uma área nova = uma linha aqui + dois
   tokens de cor no CSS (--<id>, --<id>-bg) em app.css e caderno.css.
   `site` é o domínio de produção (Tarefa 12 preenche). */
module.exports = {
  banca: "VUNESP",
  orgao: "Secretaria de Estado da Saúde de São Paulo — SUS/SP",
  concurso: "Seleção Pública para Residência Médica — acesso direto",
  prova: "13/12/2026, à tarde (edital 2027 de 01/10/2026; gabarito em 15/12/2026)",
  /* o resto do cronograma 2027 fica aqui, fora da capa (que só cabe uma linha a mais) */
  cronograma: "inscrições de 20/10 a 05/11/2026 · prova 13/12/2026 · gabarito 15/12/2026 · recursos 16 e 17/12/2026 · classificação definitiva 12/02/2027",
  estrutura: "100 questões · 5 alternativas · 20 por área · 5 horas",
  /* os mesmos números, estruturados: a página e o caderno leem daqui (nunca
     escrevem "100" ou "5h" à mão); corte = nota mínima para habilitar */
  numeros: { questoes: 100, porArea: 20, alternativas: 5, horas: 5, corte: 50 },
  site: "susp.vercel.app",
  areas: [
    { id: "ped",  nome: "Pediatria",                    curto: "Ped"  },
    { id: "prev", nome: "Medicina Preventiva e Social", curto: "Prev" },
    { id: "cir",  nome: "Cirurgia",                     curto: "Cir"  },
    { id: "go",   nome: "Ginecologia e Obstetrícia",    curto: "GO"   },
    { id: "cm",   nome: "Clínica Médica",               curto: "CM"   },
  ],
  fontes: [
    { id: "susp2026", edicao: 2026, rotulo: "SUS-SP 2026",
      txt: "Seleção Pública para Residência Médica 2026 — SUS/SP, prova objetiva de acesso direto (VUNESP, 14/12/2025); gabarito de 16/12/2025 com as anulações do edital de análise de recursos de 20/01/2026 (questões 4, 21, 23 e 36)",
      caderno: "ferramentas/cadernos/susp2026.txt", gabarito: "ferramentas/cadernos/susp2026-gabarito.txt" },
    { id: "susp2021", edicao: 2021, rotulo: "SUS-SP 2021",
      txt: "Seleção Pública para Residência Médica 2021 — SUS/SP, prova objetiva 001 de acesso direto (VUNESP, 10/01/2021); gabarito após recursos (anuladas 27 e 57), na transcrição publicada pelo Estratégia MED em 02/2021",
      caderno: "ferramentas/cadernos/susp2021.txt", gabarito: "ferramentas/cadernos/susp2021-gabarito.txt" },
    /* outras seleções da VUNESP, todas com QUATRO alternativas (A–D) */
    { id: "unesp2026", edicao: 2026, rotulo: "UNESP 2026",
      txt: "Residência Médica 2026 — Faculdade de Medicina de Botucatu (UNESP), prova escrita objetiva 001 de áreas básicas / acesso direto (VUNESP, 29/11/2025), 100 questões de quatro alternativas; gabarito de 01/12/2025 com a alteração do edital de recursos de 05/12/2025 (questão 42 para B; nenhuma anulada)",
      caderno: "ferramentas/cadernos/unesp2026.txt", gabarito: "ferramentas/cadernos/unesp2026-gabarito.txt" },
    { id: "einstein2026", edicao: 2026, rotulo: "Einstein 2026",
      txt: "Processo Seletivo 2026 — Programas de Residência Médica do Einstein Hospital Israelita, prova escrita objetiva 001 de acesso direto (VUNESP, 02/11/2025), 75 questões de quatro alternativas; gabarito após a análise dos recursos, edital de 28/11/2025 (anulada a 49)",
      caderno: "ferramentas/cadernos/einstein2026.txt", gabarito: "ferramentas/cadernos/einstein2026-gabarito.txt" },
    { id: "einstein2025", edicao: 2025, rotulo: "Einstein 2025",
      txt: "Processo Seletivo 2025 — Programas de Residência Médica do Hospital Israelita Albert Einstein, prova escrita objetiva 001 de acesso direto (VUNESP, 20/10/2024), 75 questões de quatro alternativas; gabarito após a análise dos recursos, edital de 11/2024 (anuladas 11, 31, 44 e 45)",
      caderno: "ferramentas/cadernos/einstein2025.txt", gabarito: "ferramentas/cadernos/einstein2025-gabarito.txt" },
    /* Volume 2 (2026-11-26): as fontes abaixo só alimentam as questões 51–100 de
       cada área. A ordem é fixa — os ids dependem dela — e nenhuma fonte entra
       antes destas, porque os ids 01–50 estão impressos nas apostilas. */
    { id: "sirio2026", edicao: 2026, rotulo: "Sírio-Libanês 2026",
      txt: "Processo Seletivo 2026 — Residência Médica do Hospital Sírio-Libanês (São Paulo e Brasília), prova objetiva 002 de acesso direto (VUNESP, 22/11/2025), 100 questões de cinco alternativas; gabarito de 25/11/2025 com o edital de análise de recursos de 15/12/2025 (anuladas 9, 17, 63 e 78; questão 67 alterada para D)",
      caderno: "ferramentas/cadernos/sirio2026.txt", gabarito: "ferramentas/cadernos/sirio2026-gabarito.txt" },
    { id: "sirio2027", edicao: 2027, rotulo: "Sírio-Libanês 2027",
      txt: "Processo Seletivo 2027 — Residência Médica do Hospital Sírio-Libanês (São Paulo e Brasília), prova objetiva 002 de acesso direto (VUNESP, 27/09/2026), 100 questões de cinco alternativas; gabarito após a análise dos recursos, edital de 21/10/2026 (anuladas 23, 34, 41, 55, 75 e 99)",
      caderno: "ferramentas/cadernos/sirio2027.txt", gabarito: "ferramentas/cadernos/sirio2027-gabarito.txt" },
    { id: "unesp2025", edicao: 2025, rotulo: "UNESP 2025",
      txt: "Residência Médica 2025 — Faculdade de Medicina de Botucatu (UNESP), prova escrita objetiva 001 de áreas básicas / acesso direto (VUNESP, 30/11/2024), 100 questões de quatro alternativas; gabarito de 02/12/2024 com o despacho de recursos de 06/12/2024 (anuladas 8, 10, 54 e 79; alteradas 55 para A, 56 para C, 67 para B, 70 para D, 73 e 75 para C)",
      caderno: "ferramentas/cadernos/unesp2025.txt", gabarito: "ferramentas/cadernos/unesp2025-gabarito.txt" },
    { id: "famema2026", edicao: 2026, rotulo: "FAMEMA 2026",
      txt: "Processo Seletivo 2026 — Programas de Residência Médica da Faculdade de Medicina de Marília (FAMEMA), prova objetiva 001 de áreas básicas e acesso direto (VUNESP, 08/12/2025), 100 questões de quatro alternativas; gabarito de 09/12/2025 com o edital de análise de recursos de 21/12/2025 (anuladas 48, 50, 55 e 64; questão 98 alterada para C)",
      caderno: "ferramentas/cadernos/famema2026.txt", gabarito: "ferramentas/cadernos/famema2026-gabarito.txt" },
  ],
};
