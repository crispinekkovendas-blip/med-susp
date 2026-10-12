# Banco SUS-SP — VUNESP

Banco de questões comentadas de **Pediatria, Medicina Preventiva e Social,
Cirurgia, Ginecologia e Obstetrícia e Clínica Médica** para a Seleção Pública
para Residência Médica do SUS-SP (banca VUNESP), acesso direto.
**250 questões**, todas reais,
de cinco provas da VUNESP — SUS-SP 2026 e 2021 (cinco alternativas), UNESP
Botucatu 2026, Einstein 2026 e Einstein 2025 (quatro alternativas, como a
banca as fez) —, extraídas dos cadernos oficiais, com gabarito oficial,
comentário, referências, Simplificando, **uma figura por questão** (foto ou
imagem de exame do Wikimedia Commons, licença livre, com crédito) e **uma
página de livro-texto por questão** ("Sobre a matéria"). Sem framework, sem build, sem
servidor. Irmão do banco INEPAM (`med/gineco/inepam/`), de onde herdou a forma.

| O quê | Onde |
|---|---|
| Banco na tela | https://susp.vercel.app/ |
| Caderno para imprimir | https://susp.vercel.app/caderno/ |
| Vídeos — página de revisão (para o cliente) | https://susp.vercel.app/videos/ (os links curtos dos QR codes: `/v/<id>/q`, `/m`, `/mais`) |
| Deploy | `python ferramentas/pdf.py` e depois `npx vercel deploy --prod --yes`, a partir de `med/susp/` (projeto `susp`; git em `main`, remoto privado `crispinekkovendas-blip/med-susp`) |
| PDFs prontos | https://susp.vercel.app/pdf/caderno-ped.pdf (`prev`, `cir`, `go`, `cm` também): uma apostila por área, paginada, com o índice dizendo a página de cada ficha — links no painel do caderno |

## Números (2026-10-07)

| Área | SUS-SP 2026 | SUS-SP 2021 | UNESP 2026 | Einstein 2026 | Einstein 2025 | Total |
|---|---|---|---|---|---|---|
| Pediatria | 20 | 5 | 11 | 8 | 6 | 50 |
| Medicina Preventiva e Social | 19 | 6 | 12 | 6 | 7 | 50 |
| Cirurgia | 17 | 8 | 11 | 7 | 7 | 50 |
| Ginecologia e Obstetrícia | 20 | 5 | 11 | 7 | 7 | 50 |
| Clínica Médica | 16 | 9 | 10 | 8 | 7 | 50 |
| **Total** | **92** | **33** | **55** | **36** | **34** | **250** |

Figuras: 250 (uma por questão). Sobre a matéria: 250 (uma por questão,
1.800–3.600 caracteres de texto cada). Páginas do caderno (PDFs de
2026-10-07 com as opções padrão — Sobre a matéria depois do comentário,
figuras, quadriculado — contadas pelo `pdf.py`): Pediatria 171, Preventiva
171, Cirurgia 177, GO 167, Clínica Médica 167; o completo, 834 páginas
(94 MB). Cada ficha ocupa duas páginas, ou três quando comentário e
mini-aula deixam menos de 90 mm para as anotações (classe `tripla`). A folha
de respostas desenha 225 bolhas para as 50 de Pediatria (25 × 5 + 25 × 4).

Ids `ped01–ped50`, `prev01–prev50`, `cir01–cir50`, `go01–go50`, `cm01–cm50`; dentro da área,
as fontes na ordem de `meta.fontes` (SUS-SP 2026, SUS-SP 2021, UNESP 2026,
Einstein 2026, Einstein 2025), cada grupo pelo número da questão na prova —
os 25 primeiros ids de cada área são o banco original do SUS-SP, os 25
seguintes a rodada das outras provas (Clínica Médica, acrescentada em
2026-10-07, segue a mesma ordem: cm01–cm25 do SUS-SP 2026 e 2021, cm26–cm50
das outras três provas). Do SUS-SP 2026 ficaram de fora as
anuladas (4, 21, 23 e 36), a 91 (depende de um gráfico) e, em Clínica
Médica, a 6 e a 20 (eletrocardiogramas) e a 8 (a extração do caderno colou
um aviso de imagem à última alternativa). Do SUS-SP 2021 entraram 33 (24
nas quatro áreas originais e 9 em Clínica Médica), escolhidas para cobrir
temas que o bloco de 2026 não tocou. Das outras três provas entraram 25 por área (cerca
de 6 a 12 por prova), escolhidas para cobrir o que os 100 primeiros não
cobriam, fora as anuladas e as que dependem de figura; a lista e o motivo de
cada escolha estão em `ferramentas/selecao.md`.

## Arquivos

```
index.html            casca: fontes do Google + app.css + banco.js + app.js
banco.js              window.BANCO = { meta, questoes } — GERADO por ferramentas/montar.js
app.js  app.css       a página na tela (áreas e edições lidas de meta)
caderno/              o banco em papel (index.html, caderno.js, caderno.css; qrcode.js = qrcode-generator 1.4.4, MIT, Kazuhiko Arase)
figuras/              <id>.jpg, uma por questão (≤ 1400 px, ≤ 600 KB) + FONTES.md (proveniência);
                      candidatos.json, escolhas.json e figuras.json ficam fora do ar
videos.json           os vídeos de cada questão (q, m, busca) — GERADO por ferramentas/videos.py gerar
v/                    os links curtos /v/<id>/<q|m|mais>: destino.js (função pura) + index.html (redireciona ou mostra os botões)
videos/               a página de revisão dos vídeos, para o cliente (revisao.js + index.html)
vercel.json           reescreve /v/<id>/<qual> para a página v/ e desliga o deploy automático do GitHub (o deploy é pela CLI, com os PDFs)
verificar.js          o harness — não vai para o ar (.vercelignore)
controles.js          os 85 controles negativos do harness — idem
ferramentas/          fora do ar: metadados, extração, montagem, figuras, testes, seleção, cadernos
docs/superpowers/     spec e plano — fora do ar
```

### ferramentas/

- `meta.js` — banca, prova, **áreas** e **fontes**. É daqui que `banco.js`
  ganha o `meta`, e é de lá que página, caderno e harness leem a lista de
  áreas (`ped`, `prev`, `cir`, `go`) e de edições (`susp2026`, `susp2021`).
  Área nova = uma linha aqui + dois tokens de cor (`--<id>`, `--<id>-bg`) em
  `app.css` e `caderno/caderno.css`.
- `cadernos/` — os documentos-fonte (PDF e texto), com `FONTES.md` dizendo de
  onde veio cada um. `baixar.js` rebaixa o que faltar.
- `extrai_questoes.py` — lê o caderno com PyMuPDF, ordena os blocos por
  faixas (bloco largo abre uma faixa; dentro dela, coluna esquerda e depois
  direita), remove rodapés e títulos de área, trata os hifens de fim de linha
  (com relatório em `<fonte>-hifens.txt`), separa as questões e liga o texto
  compartilhado ("As questões de números N e M referem-se ao caso a seguir")
  às questões da faixa. Saída: `<fonte>.txt` (o texto ordenado, referência de
  fidelidade) e `<fonte>-questoes.json`.
- `parse_gabarito.py` — o gabarito oficial em linhas `NN X` (`*` = anulada),
  a partir do edital de gabarito e do edital de recursos (ou de uma
  transcrição com asteriscos).
- `entrada/<area>.js` — **o que é escrito à mão**: para cada questão,
  `{ fonte, numero, tema, referencias, comentario, simples }`.
- `legendas.js` — **também à mão**: a legenda da figura de cada questão, pelo
  id (`ped01: "…"`). Toda questão tem figura e toda figura tem legenda;
  `montar.js` aborta se faltar um lado.
- `materia/<area>.js` — **também à mão**: a página de livro-texto de cada
  questão ("Sobre a matéria"), pela chave `"fonte#numero"` da entrada, em
  HTML escrito em linhas (uma tag de bloco por linha; `montar.js` tira as
  quebras). Seis partes, nesta ordem, cada uma aberta por `<h4>`: Objetivos
  de aprendizagem (ul, 3–4), Termos-chave (dl, 3–6), O essencial (3–5 p),
  Ponto clínico (`div.ponto` com h4 e 1–2 p), Resumo (ul, 3–6), Verifique o
  que aprendeu (ol, 2–3 li com `<details><summary>Resposta</summary>…`).
  Toda questão tem a sua; `montar.js` aborta se uma chave não for entrada.
- `figuras.py` + `commons.py` — a busca e o download das figuras no Wikimedia
  Commons (só CC0, domínio público, CC BY e CC BY-SA), as folhas de contato
  para revisão visual e o `gerar`, que escreve `figuras/figuras.json` (arquivo,
  tamanho, autor, licença, página) e `figuras/FONTES.md`. Ver "Figuras".
- `montar.js` — junta texto da banca + gabarito + entrada + matéria + figura (figuras.json
  + legendas.js) e reescreve `banco.js`. Aborta em qualquer inconsistência
  (número inexistente, bloco errado, anulada, campo faltando, figura sem
  legenda ou legenda sem figura).
- `serializar.js` — a escrita de `banco.js` (chaves sem aspas, ordem fixa).
- `normalizar.js` / `normalizar.py` — a mesma normalização de texto nas duas
  linguagens (`testes.py` confere a paridade).
- `testes.py` — 19 testes das ferramentas: `python ferramentas/testes.py`.
- `conferir_readme.js` — a tabela acima contra `banco.js`.
- `pdf.py` — os PDFs do caderno pelo Chrome sem janela (ver "PDF").
- `videos.py` + `questoes_json.js` + `videos/` — a escolha dos vídeos do
  YouTube (lista branca `canais.json`, `candidatos.json`, `escolhas.json`,
  `amostra-busca.json` para os testes) e o `gerar`, que escreve `videos.json`.
  Ver "Vídeos (QR codes)".
- `selecao.md` — as 250 escolhas e o motivo de cada uma.

## De onde vêm as questões — e por que só estas

A VUNESP fez o SUS-SP **2026** (prova em 14/12/2025) e faz o 2027; **2022 a
2025 foram Quadrix** (o caderno de 2024 traz "INSTITUTO QUADRIX" no
cabeçalho) e o **2021** (prova em 10/01/2021) foi VUNESP. Só essas duas
edições da banca têm caderno público: o site da VUNESP responde 403 a scripts
e "Provas e Gabaritos" exige login de candidato, então os documentos vêm de
espelhos (QConcursos, Estratégia MED, Medway), com URL e md5 em
`ferramentas/cadernos/FONTES.md`.

A segunda rodada (2026-09-28) trouxe as outras seleções da VUNESP com caderno
oficial público, todas de **quatro alternativas**: **UNESP Botucatu 2026**
(prova 001 de áreas básicas / acesso direto, 29/11/2025, 100 questões;
caderno no CDN do Estratégia MED; gabarito de 01/12/2025 com a única troca do
edital de recursos, a questão 42 para B — o edital é uma imagem, e a troca
entra à mão em `parse_gabarito.py --alteracoes`), **Einstein 2026** (prova
001 de acesso direto, 02/11/2025, 75 questões; caderno e gabarito após
recursos no edital de resultado de 28/11/2025, anulada a 49) e **Einstein
2025** (20/10/2024, 75 questões; gabarito após recursos no edital de
resultado, anuladas 11, 31, 44 e 45, marcadas com `N`). Ficaram de fora:
**FAMEMA 2026** (VUNESP, mas o caderno só existe na área do candidato — os
PDFs públicos são re-digitados por cursinhos e o PCI Concursos fica atrás de
uma verificação de segurança), **UNIFESP 2026** (a 1ª fase foi elaborada pela
própria EPM-UNIFESP; a VUNESP só assume no PSRM 2026-2027, prova em
29/11/2026), o HRPP 2026 (sem caderno público), a FAMERP (Fundatec) e as
provas de pré-requisito (nível de especialista).

O caderno do SUS-SP 2026 tem 100 questões em blocos fixos de 20 (Clínica
Médica 1–20, Cirurgia 21–40, Pediatria 41–60, GO 61–80, Preventiva 81–100);
o de 2021 tem os mesmos blocos em outra ordem (Preventiva 1–20, CM 21–40, GO
41–60, Cirurgia 61–80, Pediatria 81–100). O gabarito de 2026 é o preliminar
com as anulações do edital de recursos de 20/01/2026 (nenhuma letra mudou);
o de 2021 é a transcrição do Estratégia MED com as anuladas 27 e 57. O da
UNESP 2026 não titula os blocos: pelo conteúdo, Pediatria 1–20, GO 21–40, CM
41–60, Cirurgia 61–80, Preventiva 81–100 (numeração `QUESTÃO NN`, lista de
siglas nas páginas 3–4, texto compartilhado nas 98–100, alternativas da 87
são imagens). Os do Einstein têm 75 questões em blocos de 15 (CM 1–15,
Cirurgia 16–30, Pediatria 31–45, GO 46–60, Preventiva 61–75), com os títulos
de bloco em caixa trocada no de 2026.

## O modelo de uma questão

```js
{ id: "ped01", area: "ped", tema: "Avaliação nutricional — índice estatura-para-idade",
  fonte: "susp2026", edicao: 2026, numero: 41,
  texto: "<p>…</p>",                 // opcional: texto compartilhado do caderno (ou tabela em HTML)
  enunciado: "…", alternativas: ["…", "…", "…", "…", "…"], correta: 1,   // índice 0–4; UNESP e Einstein têm 4 alternativas
  referencias: ["Ministério da Saúde — Norma Técnica do SISVAN, 2011", "…"],
  comentario: "<p>Questão 41 (SUS-SP 2026). Gabarito <strong>B</strong>. …</p>",
  simples: "<p>A resposta é a letra <strong>B</strong>. …</p>",
  figura: { src: "figuras/ped01.jpg", w: 932, h: 1400,       // tamanho real do arquivo
            legenda: "Medida da estatura na consulta de puericultura: …",
            fonte: "MC3 Samantha J. Webb · Public domain · Wikimedia Commons",
            pagina: "https://commons.wikimedia.org/wiki/File:…" } }
```

Regras que o harness cobra:

- **Fidelidade**: `enunciado`, cada `alternativa` e o `texto` estão, palavra
  por palavra (normalizados: sem tags, sem acento, minúsculas, espaços
  colapsados), no `ferramentas/cadernos/<fonte>.txt`; `correta` é a letra do
  gabarito oficial; anulada não entra; `numero` único por fonte; `edicao`
  igual à da fonte. Nada no banco pode ser inventado ou digitado com erro.
- **Alternativas**: quatro ou cinco, as que a banca deu — nunca se inventa
  uma quinta; `correta` tem de existir; a página aceita as teclas A–E mas só
  responde às letras que a questão tem, e a folha de respostas do caderno
  desenha uma bolha por alternativa.
- **Comentário**: ≥ 600 caracteres; abre com `Questão N (ROTULO)`; uma única
  frase de veredito `Gabarito <strong>X</strong>`; explica cada letra que a
  questão tem (`<strong>A</strong>` … `<strong>D</strong>` ou `<strong>E</strong>`)
  e nenhuma a mais; fecha com "O que a banca testa".
- **Simplificando**: ≥ 200 caracteres; diz `a letra <strong>X</strong>`;
  média ≤ 14 palavras por frase, nenhuma com mais de 26.
- **Sobre a matéria** (`materia`): as seis partes na ordem, com os títulos
  exatos; 3–4 objetivos, 3–6 termos com `<dt>`+`<dd>`, 3–5 parágrafos no
  essencial, a caixa `div.ponto` (o único `<div>`), 3–6 itens no resumo, 2–3
  perguntas com `<details><summary>Resposta</summary>`; 1.800 a 3.600
  caracteres de texto; fala da matéria, não do item — sem
  `<strong>A</strong>`, "Gabarito", "alternativa" ou "Questão N"; tags
  permitidas: as de cima mais `h4 dl dt dd div details summary`.
- `tema` de 8 a 70 caracteres; `referencias` de 1 a 3, cada uma de 10 a 120;
  só as tags `p strong em ul ol li table thead tbody tr th td sub sup br`,
  equilibradas.
- **Figura**: toda questão tem uma; `src` é `figuras/<id>.jpg`, o arquivo
  existe, `w`/`h` são o tamanho real (o harness lê o cabeçalho do JPEG/PNG),
  entre 400 e 1400 px e proporção de 1:2 a 3:1, até 600 KB; `legenda` de 20 a
  320 caracteres sem tag; `fonte` traz autor, licença (CC0, CC BY, CC BY-SA
  ou domínio público — NC e ND são recusadas) e "Wikimedia Commons";
  `pagina` é a página do arquivo no Commons. Nenhum arquivo solto em
  `figuras/`; `FONTES.md` registra todos.
- Origem mostrada ao estudante: `ROTULO · Questão NN` ("SUS-SP 2026 ·
  Questão 55"). Sem regra de equilíbrio de letras: a letra é a da banca.

## Figuras

Uma por questão, para ilustrar o comentário: **só fotos e imagens de exame**
(radiografia, TC, ultrassom, endoscopia, lâmina), nunca esquema ou diagrama.
Todas do Wikimedia Commons, sob **CC0, domínio público, CC BY ou CC BY-SA**
— NC e ND são recusadas pela ferramenta e pelo harness, porque o site é
público. O crédito (autor · licença · Wikimedia Commons, com link para a
página do arquivo) aparece na legenda, na tela e no papel; `figuras/FONTES.md`
tem a tabela completa.

O caminho (`ferramentas/figuras.py`): `candidatos` busca no Commons as
consultas em inglês de `CONSULTAS` (uma lista por id) e guarda só o que tem
licença aceita, JPEG/PNG e lado ≥ 400 px; as rodadas `candidatos2..7`
(`CONSULTAS2..7`) refizeram a busca dos ids que vieram com tema errado ou com
desenho; `figuras/escolhas.json` é a escolha final, feita à mão olhando as
folhas de contato (`folha`); `baixar` grava `figuras/<id>.jpg` reduzido a
1400 px; `gerar` escreve `figuras.json` e `FONTES.md`. A legenda é escrita à
mão em `ferramentas/legendas.js` e diz o que está na imagem e por que ela
está ali.

Quando o tema não tinha foto livre no Commons, entrou a imagem mais próxima
com a legenda dizendo o que ela é — os casos: ped16 (dacriocistite num
adulto, não no lactente), prev05 (mãos de artrite reumatoide para um estudo
sobre síndrome antifosfolípide catastrófica, só pelo "centro de
reumatologia"), prev21 e prev25 (visita domiciliar e unidade de Ebola, cena
e não o tema), go10 (a lesão placentária da pré-eclâmpsia, em histologia,
porque não há foto livre de aferição de PA em gestante), go11 (Doppler da
placenta, não placenta prévia) e go12 (idade óssea, porque não há foto livre
do análogo de GnRH). Na segunda rodada: cir26 (ultrassom da safena, aqui
trombosada, para a ponte venosa), cir40 (farmácia hospitalar, para a hora da
profilaxia), prev31 (os médicos de Framingham, para o estudo de coorte),
prev49 (comprimidos, para o ensaio clínico), prev50 (biblioteca médica, para
a meta-análise), prev36 (mamografia, para a letalidade), go29 (balão de
tamponamento, o passo seguinte à ocitocina), go30 (parto, para a variedade
de posição), go35 (radioterapia em geral) e go42 (um DIU de cobre, porque o
de levonorgestrel só existe em desenho no Commons — a legenda diz isso). O
restante mostra o próprio achado da questão.

## Vídeos (QR codes)

Cada ficha impressa traz, depois da linha de fonte, **três QR codes**, e cada
cartão na tela os mesmos três links no fim do Comentário: **Vídeo da
questão**, **Vídeo da matéria** e **Mais vídeos do tema**. Nenhum deles
aponta para o YouTube: o código leva a um **link curto do site** —
`https://susp.vercel.app/v/<id>/q`, `/m` ou `/mais` — e é a página `v/`
que redireciona lendo `videos.json` (`v/destino.js` é a função pura, testada
no harness). Trocar um vídeo é uma edição em `videos.json` (pela ferramenta)
e um deploy: o papel não envelhece. Sem escolha ainda, ou com id
desconhecido, a página mostra os botões: a busca no YouTube pelo tema, a
questão no site (`/#<id>` abre o cartão) e o início.

Os vídeos não são nossos: são vídeos públicos de canais de ensino médico, **um
por questão e um por matéria** (até 500 escolhas), escolhidos só entre os
canais da **lista branca** (`ferramentas/videos/canais.json`, aprovada pelo
usuário) e revisados pelo cliente na **página de revisão** (`/videos/`, com
miniatura, título, canal e duração de cada escolha; é a única página que
carrega algo do YouTube). Claude escolhe por título, canal, duração e
visualizações; **não assiste ao vídeo** — a revisão do cliente é o controle
de qualidade.

Hoje: **50 vídeos da questão** e **50 da matéria** escolhidos, de 26 canais
(`conferir_readme.js` confere esta frase) — a lista branca é a mesma aprovada
para o banco AMRIGS, do mesmo cliente. As áreas entram uma a uma; enquanto a
camada é preenchida, `EXIGE_VIDEOS = false` no harness; ao completar, `true` —
uma escolha ausente vira erro.

**A ferramenta**, `ferramentas/videos.py` (yt-dlp, sem chave de API, com
pausa entre buscas, cabeçalho `Accept-Language: pt-BR` e `youtube:lang=pt`
para os títulos não chegarem traduzidos), na ordem: `canais` (25 buscas de
amostra → tabela de canais; `canais --aprovar UC…,UC…` grava a lista) →
`buscar <area>` (duas buscas de 30 resultados por questão: a cabeça do tema
— o que vem antes do travessão — + "residência médica", e a mesma cabeça +
"aula"; só canais da lista, 4 a 90 min, na ordem de relevância do YouTube
→ `candidatos.json`) →
`escolher <area>` (a primeira candidata, só para as questões ainda sem
entrada → `escolhas.json`; `--preencher` enche os lugares vazios, pulando as
urls vetadas) → `gerar` (→ `videos.json`) → revisão → `buscar-extra <id>
<q|m> "<consulta>"` (uma busca a mais, escrita à mão, para quem ficou sem
candidata) e `trocar <id> <q|m> <url>` (`-` apaga e veta a url; `--forcar`
aceita canal fora da lista, só com a palavra do cliente, e fica marcado em
`escolhas.json`) → `conferir` (oEmbed do YouTube e, nos 401, o yt-dlp, para
separar vídeo privado de incorporação desligada; rode antes de reimprimir).
`buscar` grava depois de cada busca e recomeça de onde parou (`--tudo`
refaz). Os JSON de `ferramentas/videos/` não se editam à mão.

Os QR codes são desenhados na hora por `caderno/qrcode.js` —
`qrcode-generator` 1.4.4 de Kazuhiko Arase, MIT, vendorizado sem alteração —
em SVG de 18 mm, nível M. A opção "QR codes dos vídeos: Não" tira a faixa.

## A página na tela (app.js)

Cartões com as alternativas da prova (cinco ou quatro); responder corrige na hora e abre a explicação
em três abas — *Comentário* (texto, depois a figura com legenda e crédito
linkado ao Commons, depois a linha de referências), *Simplificando* e
*Sobre a matéria* (a página de livro-texto; as respostas do "Verifique o que
aprendeu" abrem ao clique) —, e a aba escolhida vale para os próximos
cartões (`susp:aba`). A imagem sai
com `width`/`height` e `loading="lazy"` (a página não pula nem baixa as 100
de uma vez); clicar nela abre a versão ampliada (`.ampliar`, cobre a tela;
clique, × ou Esc fecham). Filtros: Todas ·
uma por área · uma por edição com questões (`susp:filtro`). Simulado de 20
(5 de cada área, sorteadas), relógio com meta de 3 minutos por questão (o
ritmo da prova: 100 em 5 horas), entrega e projeção contra o corte de 50%.
Teclado A–E responde o cartão em foco ou, sem foco, o primeiro cartão sem
resposta que está na tela (um atrás do outro). Respostas em `susp:respostas`;
nada sai do navegador. Capa e rodapé contam tudo a partir dos dados.

## Caderno (caderno/)

Uma ficha por questão: etiqueta de origem, tema, enunciado, alternativas com
bolha, gabarito em destaque, comentário, figura (no máximo 52 mm de altura,
com legenda e crédito), referências, Simplificando, autoavaliação (acertei /
errei / chutei / revisar); o espaço para anotar fica na página da mini-aula.
**A mini-aula vem logo depois do comentário** (opção "Sobre a matéria:
Depois do comentário", o padrão): enunciado, alternativas, gabarito,
comentário, figura, referências, Simplificando, Sobre a matéria, linha de
fonte, autoavaliação e, no fim, o **espaço de anotações — um só por
questão, quadriculado de 5 mm por padrão**: primeiro um quadro de 40 mm para
o estudante escrever os **termos-chave** (copiar da mini-aula já vale como
anotação), depois "Minhas anotações" preenchendo o resto. A ficha corre por
quantas páginas precisar, sem espaço em branco no meio; se no fim sobrarem
menos de 90 mm para a pauta (40 de termos e 50 de anotações), ela ganha a
página seguinte. "Em página própria" separa a mini-aula numa página com a
pauta; "Não" a tira.
**Cada ficha ocupa uma, duas ou três páginas A4 inteiras**: a ficha tem
`min-height: 256mm`, e `caderno.js` mede o <em>conteúdo</em> de cada uma
(tudo menos a pauta) na geometria da folha impressa (classe `medindo` no
body: 210 mm com texto de 182 mm, seja qual for a tela), e refaz a medida
antes de imprimir. Se o conteúdo cabe numa página deixando 90 mm ou mais para a pauta, é uma
página normal; senão é `dupla` e ocupa exatamente duas páginas, com a pauta
preenchendo a segunda; se nem em duas cabe deixando 90 mm, é `tripla`. A
ficha sem pauta (a da questão, no modo página própria) só cresce quando o
conteúdo passa da página inteira. A medida é refeita no `load` (as
figuras chegam depois do primeiro render) e antes de imprimir. Com as
questões atuais e as figuras (medição de 2026-09-28): ver os números em
"Números". O comentário completo com os distratores mais a figura
raramente cabe numa página em corpo 9,5 pt; a opção "Letra grande" aumenta
enunciado, alternativas, comentário e Simplificando, e aumenta o número de
duplas.

Antes das fichas: capa (com uma linha para o **nome do estudante** — vazia por
padrão, para o aluno escrever o seu; digitado no painel, sai na capa e no rodapé
de toda página), instruções, **mapa de temas por área, que é o
índice**: cada linha traz o número da ficha e a **página** em que ela está
(no navegador, uma estimativa a partir da medida das fichas; nos PDFs
publicados, o número exato, ver "PDF"). Toda página sai numerada no rodapé
("Página X de Y", caixa `@bottom-right` do `@page`). Cada ficha traz, depois da
linha de fonte, os três QR codes dos vídeos (ver "Vídeos (QR codes)"). Instruções, mapa de temas por área; texto compartilhado sai uma vez
por sequência. Depois: gabarito resumido e "Meu resultado" (opcionais);
folha de respostas opcional. Opções em `susp:caderno`: área, edição,
Simplificando, Sobre a matéria (página própria / na ficha / não), figuras,
anotações (quadriculado / pauta / em branco), letra, folha, resumo, nome; as mesmas opções valem pela URL
(`caderno/?area=ped&materia=junto`), sem gravar. Cores impressas de verdade
(`print-color-adjust: exact`). Para conferir, meça `.questao` no navegador:
as normais dão 256 mm, as duplas 512 mm e as triplas 768 mm (a medida é feita
na geometria do papel).

### PDF

`python ferramentas/pdf.py` imprime o caderno com o Chrome sem janela
(`--headless=new --print-to-pdf`, perfil próprio para não brigar com o Chrome
aberto, servido por `http.server` local) em `pdf/caderno-<area>.pdf` — **uma
apostila por área, não há PDF completo** —, com as opções padrão (Sobre a
matéria depois do comentário, figuras, QR codes, quadriculado, sem nome).
Cada área é impressa **duas vezes**: a primeira para ler, com o PyMuPDF, em
que página cada ficha começou (a etiqueta "PROVA ANO · Questão NN" só sai no
cabeçalho da ficha); a segunda com essas páginas na URL
(`caderno/?area=ped&paginas=6,10,…`), que o caderno escreve no índice no lugar
da estimativa. Depois confere o PDF: a capa cabe numa página, o rodapé
"Página 1 de N" bate com o total e o índice bate com as fichas — sai 1 se
algo não bater. Em 2026-10-12, com os QR codes e o índice paginado: `caderno-ped.pdf` 170 páginas (20 MB),
`caderno-prev.pdf` 172 páginas (21 MB),
`caderno-cir.pdf` 176 páginas (20 MB),
`caderno-go.pdf` 166 páginas (19 MB),
`caderno-cm.pdf` 166 páginas (19 MB). A pasta `pdf/` não vai para o git,
mas **vai para o ar**: os PDFs ficam em
`susp.vercel.app/pdf/caderno-<area>.pdf`, com links no painel do caderno.
Por isso, depois de qualquer mudança no banco, rode `python
ferramentas/pdf.py` **antes** do deploy — senão o site publica PDFs velhos
(ou nenhum). Pelo mesmo motivo, `vercel.json` desliga o deploy automático do
GitHub (`git.deploymentEnabled` com `main` em `false`): se um dia a Vercel for
ligada ao repositório, um build disparado por um push não teria a pasta `pdf/`. Nunca
rode `controles.js` nem `testes.py` enquanto o `pdf.py` imprime: os controles
plantam falhas nos arquivos que o servidor está servindo, e um teste
reescreve `banco.js`. Uma impressão leva ~5 min por área; com pouca memória
na máquina, rode uma área por vez (`pdf.py ped`).

## Verificação — como rodar e o que prova

```
node ferramentas/montar.js       # reescreve banco.js a partir das entradas
node verificar.js                # ~28.500 conferências; sai 1 se algo falhar
node controles.js                # planta uma falha por vez e exige que cada uma seja mordida (~13 min; `node controles.js <trecho>` ou `1-50` roda só uma parte)
python ferramentas/testes.py     # os testes das ferramentas (extração, gabarito, normalização, vídeos, vercel.json)
node ferramentas/conferir_readme.js
```

`verificar.js` carrega `banco.js` num `vm`, confere forma, fidelidade,
gabarito e regras de conteúdo, e depois **monta `app.js` e `caderno.js` num
DOM de mentira**: conta cartões, responde, confere abas, referências,
etiquetas, filtros por área e por edição, o sorteio do simulado; no caderno,
três configurações — fichas completas, mapa de temas, gabarito resumido,
nome na capa e no rodapé, os três QR codes com os links curtos certos em toda
ficha, `videos.json`, `v/destino.js`, a página `v/`, a página de revisão e o
link direto `/#<id>`. Também confere que o CSS do caderno não impede a
ficha de correr para a segunda página. Das figuras, prova o que está em "O
modelo de uma questão" (arquivo real, tamanho lido do cabeçalho, licença
livre, FONTES.md) e, no DOM de mentira, que o painel Comentário traz a figura
antes das referências, que o clique abre `.ampliar` e Esc fecha, e que a
ficha do caderno traz a imagem (`../figuras/…`, com largura e altura), a
legenda e a fonte. De Sobre a matéria, prova a forma de cada mini-aula
(partes na ordem, contagens, tamanho, nada do item) e, no DOM de mentira, a
terceira aba (mostra, guarda em `susp:aba`, o próximo cartão abre nela e um
cartão sem ela abre no Comentário), o bloco na ficha com as respostas à
vista e a opção que o desliga, e o CSS da ficha `tripla`.

`controles.js` é a prova de que o harness não é cego: cada controle altera
**um** arquivo (`banco.js`, `app.js`, `caderno/caderno.js`, `videos.json`, `v/destino.js` ou
`caderno/caderno.css`), roda o harness, exige a mensagem certa e restaura.

O harness prova coerência e fidelidade, **não verdade médica**. Ele pegou,
durante a escrita, um gabarito que o autor tinha suposto errado (questão 61 de
2021); não pegaria um comentário medicamente equivocado. Os comentários foram
lidos pelo autor; quando a pergunta é "está certo?", leia a referência citada.

## Como mexer sem quebrar

- **Nunca edite `banco.js`, `<fonte>.txt` ou `<fonte>-questoes.json` à mão.**
  Comentário errado: corrija em `ferramentas/entrada/<area>.js` e rode
  `montar.js`; mini-aula (Sobre a matéria): `ferramentas/materia/<area>.js`,
  mesma chave `fonte#numero`. Hífen mal juntado: ajuste as listas em `extrai_questoes.py`
  e reextraia. Gabarito: `parse_gabarito.py`.
- Para acrescentar uma edição: baixar caderno e gabarito para `cadernos/`
  (registrar em `FONTES.md` e em `baixar.js`), `parse_gabarito.py` (cabeçalho
  `NNN. PROVA [ESCRITA] OBJETIVA`, `N` ou `*` = anulada, `--alteracoes` para
  trocas que só existem em imagem), `extrai_questoes.py` com o `--rodape`
  (que também apaga os títulos de bloco), os `--blocos` daquele caderno
  (confira os limites lendo a primeira e a última questão de cada um) e o
  `--estilo` da numeração (`ponto` = `01.`, `questao` = `QUESTÃO 03`),
  acrescentar a fonte em `meta.js`, escrever as entradas (quatro ou cinco
  letras, as da banca), as figuras (`figuras.py`) e as legendas, subir
  `ESPERADO` em `verificar.js`, a tabela do README, rodar tudo, deploy.
- Para trocar a figura de uma questão: `python ferramentas/figuras.py trocar
  ped02 "File:Outra imagem.jpg"` (o título tem de estar em
  `figuras/candidatos.json` — se não estiver, acrescente uma busca em
  `CONSULTAS7` e rode `candidatos7`), olhe em `folha ped02`, ajuste a legenda
  em `legendas.js`, `gerar`, `montar.js`, harness. Nunca copie uma imagem à
  mão para `figuras/`: sem linha em `figuras.json` e `FONTES.md`, o harness
  a recusa — e sem licença livre ela não pode estar no ar.
- Scripts com barra invertida vão pelo Write tool, nunca por heredoc do Bash.
- Depois de qualquer mudança: os cinco comandos acima, depois
  `python ferramentas/pdf.py` (os PDFs vão para o ar junto), depois deploy,
  depois medir no navegador (screenshots estouram o tempo aqui; meça com JS).

## O edital 2027 e a prova de dezembro de 2026

O edital da Seleção 2027 saiu em 01/10/2026 (VUNESP, 1.389 vagas; inscrições
de 20/10 a 05/11/2026; prova objetiva em 13/12/2026, à tarde; gabarito em
15/12/2026; recursos em 16 e 17/12/2026; classificação definitiva em
12/02/2027). A estrutura do acesso direto se manteve — 100 questões de cinco
alternativas, 20 de cada uma das cinco áreas, 5 horas, habilitado quem faz
nota 50 (NP = acertos × 100 / total; itens 9.1.1 e 11.1 do edital) — e está
em `meta.prova`, `meta.estrutura` e `meta.numeros` (`ferramentas/meta.js`), de
onde a página e o caderno leem os números. Depois da prova, o caderno do
SUS-SP 2027 entra como uma fonte nova, pelo mesmo caminho acima.
