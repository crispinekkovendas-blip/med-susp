/* Metadados do banco: banca, prova, áreas e fontes. É daqui que montar.js
   escreve o `meta` de banco.js — e é de lá que app, caderno e harness leem
   a lista de áreas e de edições. Uma área nova = uma linha aqui + dois
   tokens de cor no CSS (--<id>, --<id>-bg) em app.css e caderno.css.
   `site` é o domínio de produção (Tarefa 12 preenche). */
module.exports = {
  banca: "VUNESP",
  orgao: "Secretaria de Estado da Saúde de São Paulo — SUS/SP",
  concurso: "Seleção Pública para Residência Médica — acesso direto",
  prova: "previsão: dezembro de 2026 (edital 2027 ainda não publicado)",
  estrutura: "100 questões · 5 alternativas · 20 por área · 5 horas",
  site: "susp.vercel.app",
  areas: [
    { id: "ped",  nome: "Pediatria",                    curto: "Ped"  },
    { id: "prev", nome: "Medicina Preventiva e Social", curto: "Prev" },
    { id: "cir",  nome: "Cirurgia",                     curto: "Cir"  },
    { id: "go",   nome: "Ginecologia e Obstetrícia",    curto: "GO"   },
  ],
  fontes: [
    { id: "susp2026", edicao: 2026, rotulo: "SUS-SP 2026",
      txt: "Seleção Pública para Residência Médica 2026 — SUS/SP, prova objetiva de acesso direto (VUNESP, 14/12/2025); gabarito de 16/12/2025 com as anulações do edital de análise de recursos de 20/01/2026 (questões 4, 21, 23 e 36)",
      caderno: "ferramentas/cadernos/susp2026.txt", gabarito: "ferramentas/cadernos/susp2026-gabarito.txt" },
  ],
};
