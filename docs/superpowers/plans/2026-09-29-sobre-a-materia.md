# "Sobre a matéria" — third explanation layer — plan (2026-09-29)

Status: design approved in chat by the user on 2026-09-29 (AskUserQuestion answers:
**Full Pearson set**, **page tab + caderno on by default**, **1,500–2,200
characters per question**). The "does this look right?" design message was sent;
work starts on the user's yes. Nothing of this layer is implemented yet.

Repo state when this was written: branch `mais-vunesp` (HEAD 45050a0), unmerged
into `main` (5c7f34a = 100-question bank + figures). Production
https://susp.vercel.app already runs the branch (200 questions, 200 figures).
Harness 21.686 checks, 65 controls, 19 tool tests, README checker green. This
layer is built on `mais-vunesp`; everything merges into `main` together at the
end (finishing-a-development-branch menu; user said "1" last time, twice).

## What the user asked

"Another layer for the commentaries, called *Sobre a matéria*: the matéria
itself of the question, as it would appear in a textbook, the way Pearson
textbooks have it — the objectives and more." Pearson chapter pedagogy we agreed
to mirror: learning objectives, key terms with definitions, the didactic text,
a clinical note box, a bullet summary, checkpoint questions with answers.

## Data

- New hand-written files **`ferramentas/materia/<area>.js`** (ped, prev, cir,
  go), each `module.exports = { "fonte#numero": "<html>", … }` keyed like the
  entradas (e.g. `"susp2026#41"`, `"unesp2026#3"`). Keeping them out of
  `entrada/<area>.js` means batches are appended, entradas stay untouched.
- `montar.js` merges by key into a new question field **`materia`** (after
  `simples`, before `figura` in `serializar.js` CAMPOS); aborts if a question has
  no matéria once `EXIGE_MATERIA` (a constant in montar/verificar, start false,
  flip to true when all 200 are written) — or simply: harness `exige` on every
  question at the end.
- The HTML block has **six parts, in this order, each opened by an `<h4>`**:
  1. `<h4>Objetivos de aprendizagem</h4><ul>` 3–4 `<li>`
  2. `<h4>Termos-chave</h4><dl>` 3–6 pairs `<dt>termo</dt><dd>definição de uma linha</dd>`
  3. `<h4>O essencial</h4>` 3–5 `<p>` — the topic as a textbook presents it, general, not tied to the alternatives; `<strong>` for the key ideas, `<em>` for foreign terms
  4. `<div class="ponto"><h4>Ponto clínico</h4><p>…</p></div>` — one box, 1–2 `<p>`
  5. `<h4>Resumo</h4><ul>` 3–6 `<li>`
  6. `<h4>Verifique o que aprendeu</h4><ol>` 2–3 `<li>pergunta <details><summary>Resposta</summary>resposta curta</details></li>`
- Allowed tags for this field: current TAGS + `h4 dl dt dd div details summary`
  (the `div` only with `class="ponto"`).
- Length: text without tags **1,800–3,300 characters** (measured: the six-part scaffolding adds ≈1,200 to the ≈1,500 of reading text; the first two batches came out at 2,400–3,300).
- Must NOT contain `<strong>A</strong>`-style letter references, "Gabarito",
  "alternativa" or "Questão N" — it is about the subject, not the item.
- pt-BR, same voice as the comentários; no invented statistics; references
  are the entrada's `referencias` (no new field).

## Page (`app.js`, `app.css`)

- Third tab **"Sobre a matéria"** after Simplificando; panel
  `div.comentario.materia` with `html: q.materia`; the tab choice is stored in
  `susp:aba` like today (values `comentario | simples | materia`).
- CSS: `.comentario.materia h4` small caps label style (like `.rot`),
  `dl` grid (`dt` bold, `dd` indented), `.ponto` box (left border, tinted bg),
  `details` with a small "Resposta" toggle, `details[open]` answer text.
- Fake-DOM harness check: three tabs, clicking the third shows the matéria
  panel, stores `susp:aba = "materia"`, next card opens on it.

## Caderno (`caderno/caderno.js`, `caderno.css`)

- In `ficha()`, after the Simplificando block and before `p.fonte`:
  `div.materia` with `p.rot "Sobre a matéria"` and the HTML, where
  `<details><summary>Resposta</summary>X</details>` is rewritten to
  `<span class="resp"><em>Resposta:</em> X</span>` (answers visible on paper).
- New option **`materia`** in PADRAO (default `true`), `opcao("materia",
  "Sobre a matéria", [[true, "Incluir"], [false, "Não"]])`; harness checks the
  block is there by default and gone with `materia: false`.
- `medirFichas`: add class **`tripla`** when content > 2·pagina − 10 mm
  (CSS `.questao.tripla { min-height: calc(3 * var(--pagina)); }`), harness
  static checks for both (like `dupla`), controls for both.
- Print: `.materia h4` keep-with-next; `.ponto` break-inside avoid is fine
  (not on `.questao`/`.comentario`).

## Harness and controls

- Per question: field present (once mandatory), six `<h4>` headings in order
  with exact texts, item counts in range, length in range, forbidden patterns,
  allowed/balanced tags.
- Page and caderno mounts as above; CSS static checks (`.ponto`, `.tripla`).
- New negative controls (≈ 8): missing heading, headings out of order, too few
  objectives, letter reference, `<script>`-like tag, page without third tab,
  caderno option ignored, `tripla` not marked.
- `scratchpad/chk.js`-style checker extended for the new files before montar.

## Writing process (Fable, inline, no agents)

- 8 batches: per area, ids 01–25 then 26–50 (`scratchpad/materia-<area>-<n>.js`
  written with the Write tool, then spliced into `ferramentas/materia/<area>.js`
  with a Python script — never a heredoc, contents have no backslashes but keep
  the rule). Source of truth for each topic: the question's `tema`, the
  comentário and the referencias already in `entrada/<area>.js` (read them per
  batch with offset/limit, not whole files).
- After each batch: checker → montar → harness (matéria still optional).
- After all 200: make it mandatory, update `ESPERADO`-style constant, README
  ("O modelo de uma questão", "A página na tela", "Caderno" options and
  measured page counts, "Verificação" numbers, "Como mexer"), spec addendum,
  `ferramentas/selecao.md` untouched, memory, deploy (`npx vercel deploy --prod
  --yes` from `med/susp/`), measure the caderno in the browser via the
  same-origin-iframe trick (counts normal/apertada/dupla/tripla with and
  without matéria), then the finishing-a-development-branch menu.

## Conventions that bite (from the earlier rounds)

- Scripts with backslashes go through the Write tool; heredocs eat them.
- Never edit `banco.js`, cadernos `.txt` or `-questoes.json` by hand.
- Edits need a Read of the file first in the same context.
- Lazy images do not load in a background Chrome tab; measure in the active tab
  or via an iframe.
- The harness message texts are what the controls match — keep them stable.
