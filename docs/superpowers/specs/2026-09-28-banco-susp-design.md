# Banco SUS-SP (VUNESP) — commented question bank — design

Date: 2026-09-28 · Project: `med/susp/` (new; own Vercel project `susp`) · Status: approved in chat, awaiting written review

This spec is in English because it is a working document for review. Everything
it produces (data file, app, caderno, README, code comments, tooling output)
stays in pt-BR, as the study projects require.

## 1. Goal

A commented question bank for the **Seleção Pública para Residência Médica do
SUS-SP** (banca **VUNESP**), for the same client who used the INEPAM bank
(default student name "Genaro Tuco Zarate"). The client is preparing for the
2027 edition; the edital is expected around October 2026 and the exam in
mid-December 2026 (last cycle: edital 30/09/2025, exam 14/12/2025).

**100 real questions, 25 per area**, taken from the published cadernos of the
acesso direto exam, each with an official gabarito, a full commentary, a
plain-language commentary and its references:

| Area id | Area | Questions |
|---|---|---|
| `ped` | Pediatria | 25 |
| `prev` | Medicina Preventiva e Social | 25 |
| `cir` | Cirurgia | 25 |
| `go` | Ginecologia e Obstetrícia | 25 |

Same product shape as `med/gineco/inepam/`: one data file, a screen app with
five-alternative cards and two explanation tabs, a printable caderno with one
ficha per A4 page, a harness with negative controls. Read `inepam/README.md`
for the shape being copied; this spec records only what differs and what the
user decided.

### Decisions the user made (2026-09-28) — do not re-open

- **All real questions**, none inédita. Provenance is banca + edition + número.
- **Own folder and own Vercel project** (`med/susp/`, project `susp`), not a
  sub-folder of gineco. `inepam/` is not touched.
- **Same client**: default student name "Genaro Tuco Zarate", editable.
- **Approach C**: fork the INEPAM code, and while adapting make the area list
  data-driven (read from `BANCO.meta.areas`) so that adding Clínica Médica or
  a 2027 batch later is a data change.
- Clínica Médica is **out of scope** (the user listed four areas).
- The two explanation tabs stay, **including Simplificando**.
- **Sources are VUNESP only** (decided after the planning research showed that
  SUS-SP 2025 and 2022 were Quadrix): SUS-SP 2026 supplies 20 per area (17 in
  Cirurgia, where the banca annulled 21, 23 and 36), and **HRPP 2026**
  (Hospital Regional de Presidente Prudente, VUNESP, 30/11/2025, 100 questions,
  five alternatives) supplies the rest. UNESP Botucatu, FAMEMA and Einstein are
  excluded because they use four alternatives. No inéditas, no Quadrix.

## 2. Folder, repo, deploy

```
med/susp/
  index.html        shell: Google fonts + app.css + banco.js + app.js
  banco.js          window.BANCO = { meta, questoes }
  app.js  app.css   screen app (forked from inepam, areas data-driven)
  caderno/          printable caderno (index.html, caderno.js, caderno.css)
  verificar.js      harness — not deployed
  controles.js      negative controls — not deployed
  ferramentas/      sourcing + editing tools and the source cadernos — not deployed
  docs/superpowers/ spec and plan — not deployed
  README.md         pt-BR documentation, same sections as inepam/README.md
  .vercelignore     verificar.js controles.js ferramentas docs README.md .superpowers
```

- Git repository from day one (`main`), initialised with this spec.
- Deploy: `npx vercel deploy --yes` for preview (behind deployment
  protection, 302 to anonymous curl), `npx vercel deploy --prod --yes` for
  production, run from `med/susp/`. First deploy links a new project named
  `susp`; the production URL is whatever Vercel assigns (expected
  `susp.vercel.app`) and is written into the README once known.
- No link from the gineco hub is required. Adding one is a one-line optional
  follow-up, not part of this work.

## 3. Sources and selection

### 3.1 What VUNESP publishes and where to get it

VUNESP publishes the full caderno and the gabarito of each SUS-SP exam. On
vunesp.com.br they sit behind the candidate area ("Provas e Gabaritos"), and
the site returns 403 to scripted requests, so the working sources are the
public mirrors, which serve the original VUNESP PDFs with a text layer:

- QConcursos archive (`arquivos.qconcursos.com/prova/arquivo_prova/...`):
  the 2026 acesso direto caderno was downloaded and verified in this session
  (100 questions, 5 h, text layer intact; PDF 1.5, 1.29 MB).
- Estratégia MED and MedCof blog posts: gabarito preliminar and definitivo
  per edition, and their own PDF mirrors.
- The candidate area needs a candidate login (verified), so a caderno with no
  public mirror is only reachable through a candidate the user knows; the
  plan's Task 13 lists the attempts for the HRPP 2026 caderno, which had no
  public mirror at planning time, and the fallback if none works.

Every downloaded PDF and its `pdftotext` output are kept in
`ferramentas/cadernos/` with a `FONTES.md` that records URL, date and size, so
the bank never depends on a session scratchpad (lesson from INEPAM).

### 3.2 Exam structure observed

The acesso direto caderno has **100 questions, 20 per area, in fixed blocks**:
Clínica Médica 01–20, Cirurgia 21–40, Pediatria 41–60, Ginecologia e
Obstetrícia 61–80, Medicina Preventiva e Social 81–100. This was inferred from
the 2026 caderno by sampling questions; the block boundaries of every edition
used must be **confirmed during extraction by reading the first and last
question of each block** (a pediatric block can open with "Primigesta, 23
anos…" about the newborn — content, not the first noun, decides). Five
alternatives, A–E, one correct.

### 3.3 Selection rule

- The **SUS-SP 2026 edition** (exam applied 14/12/2025) supplies its full
  block of 20 per area, minus annulled questions (4, 21, 23, 36 — three of
  them in Cirurgia) and questions that need an image.
- **HRPP 2026** (VUNESP, same format) supplies the remaining questions of each
  area (5; 8 in Cirurgia), chosen to cover temas the SUS-SP block did not
  touch. SUS-SP 2025 and 2022 are Quadrix exams and are not used.
- Excluded: questions annulled by the banca (gabarito "*"), questions whose
  image is essential (ECG, radiograph, photo, graph). Tables are reproduced
  as HTML in `texto`. A question that only references a well-known figure
  in words is fine.
- The chosen set and the reason for each 2025 pick are recorded in
  `ferramentas/selecao.md`.
- Gabarito is the **definitivo** (after recursos). When a mirror only has the
  preliminar, the definitivo is fetched before the area is marked done.

## 4. Data contract — `window.BANCO`

### 4.1 `meta`

```js
meta: {
  banca: "VUNESP",
  orgao: "Secretaria de Estado da Saúde de São Paulo — SUS/SP",
  concurso: "Seleção Pública para Residência Médica — acesso direto",
  prova: "previsão: dezembro de 2026 (edital 2027 ainda não publicado)",
  estrutura: "100 questões · 5 alternativas · 20 por área · 5 horas",
  areas: [
    { id: "ped",  nome: "Pediatria",                    curto: "Ped"  },
    { id: "prev", nome: "Medicina Preventiva e Social", curto: "Prev" },
    { id: "cir",  nome: "Cirurgia",                     curto: "Cir"  },
    { id: "go",   nome: "Ginecologia e Obstetrícia",    curto: "GO"   }
  ],
  fontes: [
    { id: "susp2026", edicao: 2026, rotulo: "SUS-SP 2026",
      txt: "Seleção Pública para Residência Médica 2026 — SUS/SP, prova objetiva de acesso direto (VUNESP, 14/12/2025), gabarito definitivo",
      caderno: "ferramentas/cadernos/susp2026.txt",
      gabarito: "ferramentas/cadernos/susp2026-gabarito.txt" },
    { id: "hrpp2026", edicao: 2026, rotulo: "HRPP 2026",
      txt: "Processo Seletivo para Residência Médica 2026 — Hospital Regional de Presidente Prudente, prova objetiva 001 de acesso direto (VUNESP, 30/11/2025); gabarito de 02/12/2025",
      caderno: "ferramentas/cadernos/hrpp2026.txt",
      gabarito: "ferramentas/cadernos/hrpp2026-gabarito.txt" }
  ],
  site: "susp.vercel.app"
}
```

`areas` is the single source of truth for the app, the caderno and the
harness: filters, tags, counters, the simulado split and the caderno's map of
temas are all generated from it. The only per-area thing outside the data is
the colour token in CSS (`--ped`, `--prev`, `--cir`, `--go`), keyed by area
id; adding an area means one CSS token plus data.

`edicao` is the **residency-year label the banca uses** (the 2026 exams were
applied in November/December 2025). The student always sees
`${rotulo} · Questão NN`: "SUS-SP 2026 · Questão 55", "HRPP 2026 · Questão 12".

### 4.2 A question

```js
{ id: "ped01", area: "ped", tema: "Cetoacidose diabética — hidratação e insulina",
  fonte: "susp2026", edicao: 2026, numero: 55,
  texto: "<p>…</p>",                 // optional: support text or an HTML table
  enunciado: "…",
  alternativas: ["…", "…", "…", "…", "…"],
  correta: 2,                        // index 0–4
  referencias: ["SBP — Tratado de Pediatria, 5ª ed.", "ISPAD Clinical Practice Consensus Guidelines 2022"],
  comentario: "<p>Questão 55 (SUS-SP 2026). Gabarito <strong>C</strong>. …</p>",
  simples: "<p>A resposta é a letra <strong>C</strong>. …</p>" }
```

Serializer field order: `id area tema fonte edicao numero texto enunciado
alternativas correta referencias comentario simples`. Keys unquoted, strings
as JSON, one question per block, exactly as the INEPAM serializer does. The
math fields (`conta`, `valor`, `identidade`) and `origem`/`selecao` do not
exist here: every question is real, so there is no origem to declare and no
selection subset.

Ids: `ped01–ped25`, `prev01–prev25`, `cir01–cir25`, `go01–go25`, in the order
of `meta.areas`. Inside an area: newest edition first, then by `numero`.

### 4.3 Content rules (the harness enforces all of them)

- `enunciado` and every `alternativa` are the **banca's text**, verbatim
  (see §7 fidelity check). Typographic fixes only: hyphenation at line breaks
  removed, quotes normalised, units kept as printed.
- `alternativas`: exactly 5, non-empty, pairwise distinct after
  normalisation.
- `correta` matches the parsed gabarito for (`fonte`, `numero`).
- `numero` unique per `fonte`; `edicao` equals the fonte's edicao.
- `tema`: 8–70 chars, "Topic — what is tested" style, unique per area.
- `referencias`: 1–3 short entries, 10–120 chars each, naming the source the
  banca follows for that answer (Ministério da Saúde manuals and cadernos,
  SBP, FEBRASGO, ATLS, Sabiston, Zugaib, Rouquayrol, PNI calendar, Lei
  8.080/8.142 and so on).
- `comentario`: ≥ 600 chars; opens with `Questão NN (SUS-SP YYYY)` using the
  question's own numero and edicao; contains exactly one verdict phrase
  `Gabarito <strong>X</strong>` with the right letter and no other letter in a
  verdict position; explains **why the gabarito is right and why each of the
  four distractors is wrong** (the harness checks that each of the five
  letters A–E is mentioned as `<strong>A</strong>`… at least once); ends by
  naming what the question is really testing.
- `simples`: ≥ 200 chars; says `a letra <strong>X</strong>` with the right
  letter; **average ≤ 14 words per sentence, none over 26** (INEPAM rule and
  counter). Plain words and no unexplained abbreviations are the author's
  rule, checked by reading, not by the harness.
- HTML in strings: only `p strong em ul ol li table thead tbody tr th td
  sub sup br`.
- No letter-balance rule: real questions keep the letter the banca gave.

## 5. Screen app (`app.js`, `app.css`, `index.html`)

Forked from INEPAM; behaviour identical except where listed:

- **Areas from data.** `DISC`, the filter list, the tag classes, the
  counters on cover and footer, and the simulado draw are all derived from
  `BANCO.meta.areas`. Nothing in `app.js` names an area.
- **Filters:** Todas · one per area (label = `nome`, count) · one per edition
  ("SUS-SP 2026", "SUS-SP 2025"). Stored in `susp:filtro`.
- **Cards:** five alternatives, instant correction, the two tabs Comentário
  and Simplificando (`susp:aba`), a **Referências** line under the
  comentário, the origin label "SUS-SP 2026 · Questão 55".
- **Simulado:** 20 questions = 5 per area, drawn at random, 60 minutes on the
  clock (the real exam is 100 questions in 5 hours, 3 min each), delivery,
  score projection with the edital cut of 50 %. Keyboard A–E on the focused
  card. Answers in `susp:respostas`; nothing leaves the browser.
- **Theme:** the INEPAM corporate theme with four area colours instead of two;
  `--accent` may change to tell the two banks apart at a glance.
- Cover and footer count everything from the data (100 questions, 4 areas,
  N editions, banca and exam line from `meta`).

## 6. Caderno (`caderno/`)

Forked from INEPAM; differences:

- **One ficha = one A4 page, minimum.** `min-height: 256mm` stays; a ficha
  whose enunciado + comentário genuinely exceed a page is allowed to run onto
  a second page (no `max-height`, `break-inside: auto` on the comentário
  block) instead of being squeezed. The student notes area still fills what
  is left of the last page of the ficha.
- Notes area is **lined ("pauta") for every area**; the squared math grid is
  gone. Options: pauta / em branco.
- Options panel (`susp:caderno`): area (Todas · each area), edition, show
  Simplificando, pauta, letter size, folha de respostas, gabarito resumido,
  student name (default "Genaro Tuco Zarate").
- Cover, instructions, **map of temas by area** (generated from `areas` and
  `tema`), the fichas grouped by area in `meta.areas` order, gabarito
  resumido and "Meu resultado" as options, optional answer sheet.
- Each ficha: origin label, tema, enunciado, five alternatives with bubbles,
  gabarito in a highlighted box, comentário, references line, Simplificando,
  self-assessment (acertei / errei / chutei / revisar), notes area.
- `print-color-adjust: exact` everywhere; WYSIWYG: measure `.questao` in the
  browser, every ficha ≥ 256 mm (JS measurement, screenshots do not work here).

## 7. Harness (`verificar.js`) and controls (`controles.js`)

Same structure as INEPAM: load `banco.js` in a `vm`, check form and content,
then mount `app.js` and `caderno.js` in a fake DOM and check what renders.
Every check gets a negative control that alters one file, runs the harness,
demands the right failure message and restores.

Checks specific to this bank:

1. **Shape:** `meta.areas` non-empty with unique ids; every question's `area`
   is in it; per-area counts equal to the constant
   `ESPERADO = { ped, prev, cir, go }` at the top of the harness (`1` each
   during Deliverable 1's stub bank, `25` as each area is written — a
   shortfall in one area is explicit, never hidden); ids `<area>01…` sequential in
   `meta.areas` order; newest edition first inside an area, then by numero.
2. **Fidelity to the caderno** — the guarantee INEPAM could not give. For
   every question the harness reads the fonte's `caderno` text file and
   checks that the normalised `enunciado` and each normalised `alternativa`
   occur in the normalised caderno text. Normalisation on both sides: strip
   HTML tags, NFD and drop combining marks, lowercase, join hyphenated line
   breaks (`apre-\nsenta` → `apresenta`), collapse whitespace, drop the
   `(A)…(E)` markers. For `texto`, every run of ≥ 20 characters of its plain
   text must occur. A question that fails is a transcription error or an
   invention; both are refused.
3. **Gabarito:** the fonte's `gabarito` file is parsed (`NN X` per line, `*`
   for annulled); `correta` must equal it; an annulled numero cannot be in
   the bank; `numero` unique per fonte; `edicao` equals the fonte's.
4. **Content rules of §4.3**, each as its own check with its own message:
   alternatives, tema, referencias, comentario (length, opening, verdict,
   five letters explained, closing), simples (length, letter, sentence
   statistics), allowed HTML tags.
5. **Screen app mount:** cards = 100; filter buttons = 1 + areas + editions
   with the right counts; answering a card marks it and opens the tabs;
   references line present; origin label format; simulado draws 5 per area;
   cover/footer numbers equal the data.
6. **Caderno mount:** three configurations (Todas + pauta, one area, one
   edition without Simplificando); every ficha carries its own gabarito,
   comentário, Simplificando (when on), references, self-assessment, notes
   area; name on cover and every footer; map of temas lists every question
   once under its area; fichas grouped by area in data order.
7. **README consistency:** the numbers table in README.md matches the data
   (a small `ferramentas/conferir_readme.js`, as gineco does).

Dropped from INEPAM: the math recalculation, the identity evaluation, the
letter-balance rule, the forbidden-provenance-words audit (nothing is hidden
here), the 50 + 50 selection.

The harness proves coherence and fidelity, **not medical truth**: the
comentário of every question is also read once, end to end, by the author
before an area is declared done (the INEPAM audit found what the harness
cannot).

## 8. Tooling (`ferramentas/`)

- `cadernos/`: PDFs, `pdftotext` outputs (`-layout` and raw), gabarito text
  files, `FONTES.md`.
- `extrai_questoes.js`: splits a caderno text into questions (numbered
  `NN.` starts, alternatives `(A)`–`(E)`, two-column layout handled by
  working from the raw, non-layout text and re-joining hyphenation), writes
  `cadernos/<fonte>-questoes.json` with `numero, enunciado, alternativas,
  bloco` and a report of anything that did not parse (images, tables).
- `parse_gabarito.js`: turns a gabarito PDF/HTML into `NN X` lines.
- `selecao.md`: the 25 per area with the reason for each non-2026 pick.
- `serializar.js`: the serializer (field order of §4.2) and the
  load-in-`vm` / replace-with-exactly-one-occurrence editing model from
  INEPAM (`modelo_*.js`), so `banco.js` is never edited as text.
- `conferir_readme.js`: README numbers vs data.

Scripts that contain backslashes are written with the Write tool and run
from a file, never through a Bash heredoc (known harness issue).

## 9. Deliverables, in order, each deployed when done

1. **Scaffold:** fork INEPAM into `med/susp/`, make areas data-driven, strip
   the math and selection code, theme with four colours, harness and
   controls adapted, and a **stub bank of 4 real 2026 questions** (one per
   area, fully commented) so that app, caderno and harness run end to end.
   Preview deploy, then production (project `susp` created).
2. **Sourcing:** SUS-SP 2026 and HRPP 2026 cadernos and definitive gabaritos
   in `ferramentas/cadernos/`, extractor and gabarito parser working on both,
   block boundaries confirmed, `selecao.md` written with the 100 picks.
3. **Content, one area at a time** in the order Pediatria, Preventiva,
   Cirurgia, GO: build the 25 objects, write comentário, simples and
   referencias, harness and controls green, author's read-through, deploy.
   The user sees each area live before the next starts.
4. **Finish:** caderno checked in the browser (every ficha ≥ 256 mm), README
   in pt-BR with the numbers table and the "how to edit" section, final
   production deploy, memory note updated.

## 10. Verification (what "done" means)

- `node verificar.js` exits 0; `node controles.js` exits 0 with every control
  biting (a control that changes nothing is an error).
- Production URL serves the app and the caderno; `verificar.js`,
  `controles.js`, `ferramentas/` and `docs/` return 404.
- In the browser: 100 cards, filters and counts right, a simulado can be
  started and delivered, every caderno ficha measures ≥ 256 mm.
- README numbers match the data.

## 11. Out of scope

Clínica Médica; inéditas; the pré-requisito (R+) exams; questions that need
an image; a link from the gineco hub; any change to `inepam/`.

## 12. Open items to settle when they arrive

- The SUS-SP 2027 edital (expected October 2026): update `meta.prova` and the
  cover; check whether the 100 / 20-per-area structure held.
- After the 2027 exam (December 2026): add its caderno as a new fonte the same
  way, if the client wants a refresh.
