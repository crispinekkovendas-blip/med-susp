# Banco SUS-SP — VUNESP

Banco de questões comentadas de **Pediatria, Medicina Preventiva e Social,
Cirurgia e Ginecologia e Obstetrícia** para a Seleção Pública para Residência
Médica do SUS-SP (banca VUNESP), acesso direto. **100 questões**, todas reais,
extraídas dos cadernos oficiais, com gabarito oficial, comentário, referências
e Simplificando. Sem framework, sem build, sem servidor. Irmão do banco INEPAM
(`med/gineco/inepam/`), de onde herdou a forma.

| O quê | Onde |
|---|---|
| Banco na tela | https://susp.vercel.app/ |
| Caderno para imprimir | https://susp.vercel.app/caderno/ |
| Deploy | `npx vercel deploy --prod --yes` a partir de `med/susp/` (projeto `susp`; repositório git, branch `implementacao` → `main`) |

## Números (2026-09-28)

| Área | SUS-SP 2026 | SUS-SP 2021 | Total |
|---|---|---|---|
| Pediatria | 20 | 5 | 25 |
| Medicina Preventiva e Social | 19 | 6 | 25 |
| Cirurgia | 17 | 8 | 25 |
| Ginecologia e Obstetrícia | 20 | 5 | 25 |
| **Total** | **76** | **24** | **100** |

Ids `ped01–ped25`, `prev01–prev25`, `cir01–cir25`, `go01–go25`; dentro da área,
primeiro as de 2026, depois as de 2021, cada grupo pelo número da questão na
prova. Do SUS-SP 2026 ficaram de fora as anuladas (4, 21, 23 e 36 — a 4 é de
Clínica Médica) e a 91 (depende de um gráfico). Do SUS-SP 2021 entraram 24,
escolhidas para cobrir temas que o bloco de 2026 não tocou; a lista e o
motivo de cada escolha estão em `ferramentas/selecao.md`.

## Arquivos

```
index.html            casca: fontes do Google + app.css + banco.js + app.js
banco.js              window.BANCO = { meta, questoes } — GERADO por ferramentas/montar.js
app.js  app.css       a página na tela (áreas e edições lidas de meta)
caderno/              o banco em papel (index.html, caderno.js, caderno.css)
verificar.js          o harness — não vai para o ar (.vercelignore)
controles.js          os 40 controles negativos do harness — idem
ferramentas/          fora do ar: metadados, extração, montagem, testes, seleção, cadernos
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
- `montar.js` — junta texto da banca + gabarito + entrada e reescreve
  `banco.js`. Aborta em qualquer inconsistência (número inexistente, bloco
  errado, anulada, campo faltando).
- `serializar.js` — a escrita de `banco.js` (chaves sem aspas, ordem fixa).
- `normalizar.js` / `normalizar.py` — a mesma normalização de texto nas duas
  linguagens (`testes.py` confere a paridade).
- `testes.py` — 15 testes das ferramentas: `python ferramentas/testes.py`.
- `conferir_readme.js` — a tabela acima contra `banco.js`.
- `selecao.md` — as 100 escolhas e o motivo de cada uma.

## De onde vêm as questões — e por que só estas

A VUNESP fez o SUS-SP **2026** (prova em 14/12/2025) e faz o 2027; **2022 a
2025 foram Quadrix** (o caderno de 2024 traz "INSTITUTO QUADRIX" no
cabeçalho) e o **2021** (prova em 10/01/2021) foi VUNESP. Só essas duas
edições da banca têm caderno público: o site da VUNESP responde 403 a scripts
e "Provas e Gabaritos" exige login de candidato, então os documentos vêm de
espelhos (QConcursos, Estratégia MED, Medway), com URL e md5 em
`ferramentas/cadernos/FONTES.md`.

Outras provas de residência da VUNESP foram avaliadas e descartadas: UNESP
Botucatu 2026, FAMEMA 2026 e Einstein 2025 usam **quatro** alternativas; o
HRPP 2026 (cinco alternativas) não tem caderno em fonte pública; as provas de
pré-requisito são de nível de especialista.

O caderno do SUS-SP 2026 tem 100 questões em blocos fixos de 20 (Clínica
Médica 1–20, Cirurgia 21–40, Pediatria 41–60, GO 61–80, Preventiva 81–100);
o de 2021 tem os mesmos blocos em outra ordem (Preventiva 1–20, CM 21–40, GO
41–60, Cirurgia 61–80, Pediatria 81–100). O gabarito de 2026 é o preliminar
com as anulações do edital de recursos de 20/01/2026 (nenhuma letra mudou);
o de 2021 é a transcrição do Estratégia MED com as anuladas 27 e 57.

## O modelo de uma questão

```js
{ id: "ped01", area: "ped", tema: "Avaliação nutricional — índice estatura-para-idade",
  fonte: "susp2026", edicao: 2026, numero: 41,
  texto: "<p>…</p>",                 // opcional: texto compartilhado do caderno (ou tabela em HTML)
  enunciado: "…", alternativas: ["…", "…", "…", "…", "…"], correta: 1,   // índice 0–4
  referencias: ["Ministério da Saúde — Norma Técnica do SISVAN, 2011", "…"],
  comentario: "<p>Questão 41 (SUS-SP 2026). Gabarito <strong>B</strong>. …</p>",
  simples: "<p>A resposta é a letra <strong>B</strong>. …</p>" }
```

Regras que o harness cobra:

- **Fidelidade**: `enunciado`, cada `alternativa` e o `texto` estão, palavra
  por palavra (normalizados: sem tags, sem acento, minúsculas, espaços
  colapsados), no `ferramentas/cadernos/<fonte>.txt`; `correta` é a letra do
  gabarito oficial; anulada não entra; `numero` único por fonte; `edicao`
  igual à da fonte. Nada no banco pode ser inventado ou digitado com erro.
- **Comentário**: ≥ 600 caracteres; abre com `Questão N (ROTULO)`; uma única
  frase de veredito `Gabarito <strong>X</strong>`; explica as cinco letras
  (`<strong>A</strong>` … `<strong>E</strong>`); fecha com "O que a banca
  testa".
- **Simplificando**: ≥ 200 caracteres; diz `a letra <strong>X</strong>`;
  média ≤ 14 palavras por frase, nenhuma com mais de 26.
- `tema` de 8 a 70 caracteres; `referencias` de 1 a 3, cada uma de 10 a 120;
  só as tags `p strong em ul ol li table thead tbody tr th td sub sup br`,
  equilibradas.
- Origem mostrada ao estudante: `ROTULO · Questão NN` ("SUS-SP 2026 ·
  Questão 55"). Sem regra de equilíbrio de letras: a letra é a da banca.

## A página na tela (app.js)

Cartões com cinco alternativas; responder corrige na hora e abre a explicação
em duas abas — *Comentário* (com a linha de referências) e *Simplificando* —,
e a aba escolhida vale para os próximos cartões (`susp:aba`). Filtros: Todas ·
uma por área · uma por edição com questões (`susp:filtro`). Simulado de 20
(5 de cada área, sorteadas), relógio com meta de 3 minutos por questão (o
ritmo da prova: 100 em 5 horas), entrega e projeção contra o corte de 50%.
Teclado A–E no cartão em foco. Respostas em `susp:respostas`; nada sai do
navegador. Capa e rodapé contam tudo a partir dos dados.

## Caderno (caderno/)

Uma ficha por questão: etiqueta de origem, tema, enunciado, alternativas com
bolha, gabarito em destaque, comentário, referências, Simplificando,
autoavaliação (acertei / errei / chutei / revisar) e pauta para anotar.
**Cada ficha ocupa uma página A4 inteira ou duas**: a ficha tem
`min-height: 256mm`; `caderno.js` mede cada uma no navegador e marca com a
classe `dupla` as que não cabem numa página, que passam a ocupar exatamente
duas, com a pauta preenchendo o que sobra da segunda (sem isso, a segunda
folha saía quase em branco). Com as questões atuais, 87 das 100 fichas são
duplas — o comentário completo com cinco distratores não cabe numa página em
corpo 9,5 pt.

Antes das fichas: capa (com o **nome do estudante**, também no rodapé de toda
página), instruções, mapa de temas por área; texto compartilhado sai uma vez
por sequência. Depois: gabarito resumido e "Meu resultado" (opcionais);
folha de respostas opcional. Opções em `susp:caderno`: área, edição,
Simplificando, pauta, letra, folha, resumo, nome. Cores impressas de verdade
(`print-color-adjust: exact`). Para conferir, meça `.questao` no navegador:
todas devem dar 256 ou 512 mm.

## Verificação — como rodar e o que prova

```
node ferramentas/montar.js       # reescreve banco.js a partir das entradas
node verificar.js                # ~9.800 conferências; sai 1 se algo falhar
node controles.js                # planta 40 falhas, uma por vez, e exige que cada uma seja mordida
python ferramentas/testes.py     # 15 testes das ferramentas (extração, gabarito, normalização)
node ferramentas/conferir_readme.js
```

`verificar.js` carrega `banco.js` num `vm`, confere forma, fidelidade,
gabarito e regras de conteúdo, e depois **monta `app.js` e `caderno.js` num
DOM de mentira**: conta cartões, responde, confere abas, referências,
etiquetas, filtros por área e por edição, o sorteio do simulado; no caderno,
três configurações — fichas completas, mapa de temas, gabarito resumido,
nome na capa e no rodapé. Também confere que o CSS do caderno não impede a
ficha de correr para a segunda página.

`controles.js` é a prova de que o harness não é cego: cada controle altera
**um** arquivo (`banco.js`, `app.js`, `caderno/caderno.js` ou
`caderno/caderno.css`), roda o harness, exige a mensagem certa e restaura.

O harness prova coerência e fidelidade, **não verdade médica**. Ele pegou,
durante a escrita, um gabarito que o autor tinha suposto errado (questão 61 de
2021); não pegaria um comentário medicamente equivocado. Os comentários foram
lidos pelo autor; quando a pergunta é "está certo?", leia a referência citada.

## Como mexer sem quebrar

- **Nunca edite `banco.js`, `<fonte>.txt` ou `<fonte>-questoes.json` à mão.**
  Comentário errado: corrija em `ferramentas/entrada/<area>.js` e rode
  `montar.js`. Hífen mal juntado: ajuste as listas em `extrai_questoes.py`
  e reextraia. Gabarito: `parse_gabarito.py`.
- Para acrescentar uma edição: baixar caderno e gabarito para `cadernos/`
  (registrar em `FONTES.md`), `parse_gabarito.py`, `extrai_questoes.py` com
  o `--rodape` e os `--blocos` daquele caderno (confira os limites dos blocos
  lendo a primeira e a última questão de cada um), acrescentar a fonte em
  `meta.js`, escrever as entradas, subir `ESPERADO` em `verificar.js`,
  rodar tudo, deploy.
- Scripts com barra invertida vão pelo Write tool, nunca por heredoc do Bash.
- Depois de qualquer mudança: os cinco comandos acima, depois deploy, depois
  medir no navegador (screenshots estouram o tempo aqui; meça com JS).

## Depois do edital 2027 e da prova de dezembro de 2026

Atualizar `prova` em `ferramentas/meta.js` quando o edital sair (outubro de
2026) e conferir se a estrutura de 100 questões, 20 por área, se manteve.
Depois da prova (dezembro de 2026), o caderno do SUS-SP 2027 entra como uma
fonte nova, pelo mesmo caminho acima.
