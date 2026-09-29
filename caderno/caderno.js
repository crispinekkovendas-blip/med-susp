/* ============================================================================
   CADERNO PARA IMPRIMIR — o banco SUS-SP em papel, como um livro de estudo.

   Cada questão é uma ficha completa: enunciado, alternativas com bolha, o
   gabarito, o comentário inteiro, as referências, o "Simplificando", a
   fonte, uma linha de autoavaliação (acertei / errei / chutei / revisar) e
   pauta para as anotações do estudante. Nada fica separado no fim: o que vai
   no fim é só um resumo (gabarito em tabela e o quadro de resultado).

   Uma ficha ocupa pelo menos uma página A4; uma ficha longa continua na
   página seguinte em vez de ser espremida. As cores são impressas de
   verdade (print-color-adjust: exact). O painel de opções só aparece na
   tela e é guardado em localStorage (susp:caderno).
   ========================================================================== */
(() => {
  const B = window.BANCO;
  const Q = B.questoes;
  const LETRAS = "ABCDE";
  const AREAS = B.meta.areas;
  const NOME_AREA = Object.fromEntries(AREAS.map(a => [a.id, a.nome]));
  const FONTES = Object.fromEntries(B.meta.fontes.map(f => [f.id, f]));
  const EDICOES = B.meta.fontes.filter(f => Q.some(q => q.fonte === f.id));
  const CH = "susp:caderno";

  /* --- opções --------------------------------------------------------------- */
  const PADRAO = { area: "todas", edicao: "todas", simples: true, materia: "pagina", figuras: true, pauta: "linhas", letra: "normal", folha: false, resumo: true, nome: "Genaro Tuco Zarate" };
  /* no papel não há clique: as respostas do "Verifique o que aprendeu" saem à vista */
  const materiaImpressa = m => m.replace(/<details><summary>Resposta<\/summary>([\s\S]*?)<\/details>/g, '<span class="resp"><em>Resposta:</em> $1</span>');
  const ler = () => { try { const s = JSON.parse(localStorage.getItem(CH) || "{}"); const o = Object.assign({}, PADRAO); for (const k in PADRAO) if (k in s) o[k] = s[k]; return o; } catch (e) { return Object.assign({}, PADRAO); } };
  /* valores antigos guardados (true) viram o padrão novo; as opções também
     valem pela URL (?area=ped&materia=junto), sem gravar — é assim que os
     PDFs são gerados (ferramentas/pdf.py) */
  const daUrl = o => { try { const p = new URLSearchParams(window.location.search); for (const k in PADRAO) if (p.has(k)) { const v = p.get(k); o[k] = v === "true" ? true : v === "false" ? false : v; } } catch (e) { /* sem URL */ } return o; };
  const normalizar = o => { if (o.materia === true) o.materia = "pagina"; return o; };
  const gravar = () => { try { localStorage.setItem(CH, JSON.stringify(op)); } catch (e) { /* sem armazenamento */ } };
  let op = normalizar(daUrl(ler()));
  if (op.area !== "todas" && !NOME_AREA[op.area]) op.area = "todas";
  if (op.edicao !== "todas" && !EDICOES.some(f => f.id === op.edicao)) op.edicao = "todas";

  /* --- utilidades ------------------------------------------------------------ */
  const h = (tag, attrs, ...filhos) => {
    const el = document.createElement(tag);
    for (const k in (attrs || {})) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "html") el.innerHTML = v;
      else if (k === "class") el.className = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const f of filhos.flat()) if (f != null && f !== false) el.append(f.nodeType ? f : document.createTextNode(String(f)));
    return el;
  };
  const dois = n => String(n).padStart(2, "0");
  const rotulo = q => `${FONTES[q.fonte].rotulo} · Questão ${dois(q.numero)}`;
  const escolhidas = () => Q.filter(q => (op.area === "todas" || q.area === op.area) && (op.edicao === "todas" || q.fonte === op.edicao));
  const linhas = k => h("div", { class: "linhas" }, Array.from({ length: k }, () => h("div", { class: "linha" })));

  /* --- painel (só na tela) --------------------------------------------------- */
  function opcao(nome, rot, valores) {
    return h("div", { class: "opcao" }, h("span", { class: "rot" }, rot),
      h("div", { class: "seg", role: "group", "aria-label": rot }, valores.map(([v, txt]) =>
        h("button", { type: "button", "aria-pressed": String(op[nome]) === String(v) ? "true" : "false",
          onclick: () => { op[nome] = v; gravar(); render(); } }, txt))));
  }
  function painel() {
    const n = escolhidas().length;
    return h("section", { id: "painel", "aria-label": "Opções do caderno" }, h("div", { class: "miolo" },
      h("div", { class: "cab" },
        h("div", null, h("h1", null, "Caderno para imprimir"), h("p", { class: "sub" }, `${n} fichas · cada questão sai com gabarito, comentário, figura, referências, Simplificando, Sobre a matéria e pauta para anotar`)),
        h("div", { class: "acoes" },
          h("a", { class: "acao", href: "../" }, "← Banco na tela"),
          h("button", { class: "acao primaria", type: "button", onclick: () => window.print() }, "Imprimir / salvar em PDF"))),
      h("div", { class: "opcoes" },
        h("div", { class: "opcao" }, h("label", { class: "rot", for: "nome" }, "Nome do estudante"),
          h("input", { id: "nome", class: "campo", type: "text", value: op.nome, placeholder: "Nome na capa e no rodapé",
            onchange: e => { op.nome = e.target.value.trim(); gravar(); render(); } })),
        opcao("area", "Área", [["todas", "Todas"]].concat(AREAS.map(a => [a.id, a.nome]))),
        opcao("edicao", "Edição", [["todas", "Todas"]].concat(EDICOES.map(f => [f.id, f.rotulo]))),
        opcao("simples", "Simplificando", [[true, "Incluir"], [false, "Não"]]),
        opcao("materia", "Sobre a matéria", [["pagina", "Em página própria"], ["junto", "Na ficha"], [false, "Não"]]),
        /* com figura toda ficha vira duas páginas; sem, 4 em 10 cabem numa */
        opcao("figuras", "Figuras", [[true, "Incluir"], [false, "Não"]]),
        opcao("pauta", "Anotações", [["linhas", "Pauta"], ["nenhuma", "Em branco"]]),
        opcao("letra", "Letra", [["normal", "Normal"], ["grande", "Grande"]]),
        opcao("folha", "Folha de respostas", [[false, "Não"], [true, "Sim"]]),
        opcao("resumo", "Gabarito resumido no fim", [[true, "Sim"], [false, "Não"]])),
      h("p", { class: "dica" }, "Cada ficha ocupa pelo menos uma página A4: o que o comentário não usa vira pauta para anotar, e uma ficha muito longa continua na página seguinte. Na caixa de impressão: A4, retrato, margens padrão, destino “Salvar como PDF”. As cores saem mesmo com “Gráficos de fundo” desligado.")));
  }

  /* --- folhas ----------------------------------------------------------------- */
  function capa(lista) {
    return h("section", { class: "pagina capa" },
      h("div", { class: "faixa" }, h("span", null, B.meta.banca), h("span", null, B.meta.orgao)),
      h("h1", null, "Caderno de questões ", h("em", null, "comentadas")),
      h("p", { class: "lema" }, `${AREAS.map(a => a.nome).join(", ")} — questões reais das provas de acesso direto da banca ${B.meta.banca} (${EDICOES.map(f => f.rotulo).join(", ")}), para a ${B.meta.concurso}. Prova: ${B.meta.prova}.`),
      h("dl", { class: "fatos" },
        h("div", null, h("dt", null, "Questões"), h("dd", null, String(lista.length))),
        AREAS.map(a => h("div", null, h("dt", null, a.nome), h("dd", null, String(lista.filter(q => q.area === a.id).length))))),
      h("div", { class: "campos" },
        h("p", null, h("span", { class: "rot" }, "Nome"), h("span", { class: "linha nome" }, op.nome || "")),
        h("p", null, h("span", { class: "rot" }, "Início"), h("span", { class: "linha curta" }), h("span", { class: "rot" }, "Fim"), h("span", { class: "linha curta" }))),
      h("div", { class: "instrucoes" },
        h("h2", null, "Como estudar com este caderno"),
        h("ol", null,
          h("li", null, h("b", null, "Cubra o gabarito e o comentário"), " com uma folha antes de ler cada questão. Marque a bolha da sua resposta. A prova real dá 3 minutos por questão."),
          h("li", null, h("b", null, "Só então destape."), " Confira a letra e leia o comentário inteiro: ele explica também por que cada distrator está errado — e é aí que a banca pega."),
          h("li", null, h("b", null, "Marque a linha de autoavaliação"), " (acertei, errei, chutei) e assinale “revisar” quando o assunto for novo. O quadro do fim reúne isso."),
          h("li", null, h("b", null, "Escreva na pauta"), " a regra com as suas palavras. O “Simplificando” é a mesma explicação em frases curtas: se ele bastar, você entendeu."),
          h("li", null, "Toda ficha é uma questão real: a etiqueta ", h("b", null, "PROVA ANO · Questão NN"), " diz a prova e o número que a questão tinha nela, e o gabarito é o oficial. As referências dizem de onde vem a resposta."))),
      h("p", { class: "nota" }, `Estrutura da prova, conforme o edital: ${B.meta.estrutura}. Habilitação: 50% da nota.`));
  }

  function folhaDeRespostas(lista) {
    const colunas = [];
    for (let i = 0; i < lista.length; i += 25) colunas.push(lista.slice(i, i + 25).map((q, k) => i + k + 1));
    return h("section", { class: "pagina folha" },
      h("h2", null, h("span", { class: "sec" }, "Folha"), "Folha de respostas"),
      h("p", { class: "sub" }, "Para quem prefere responder tudo antes de destapar: uma bolha por questão e uma coluna para ✓ ou ✗."),
      h("div", { class: "colunas" }, colunas.map(col => h("table", { class: "grade" },
        h("thead", null, h("tr", null, h("th", null, "Nº"), [..."ABCDE"].map(l => h("th", null, l)), h("th", null, "✓"))),
        /* uma bolha por alternativa: as questões de quatro (UNESP, Einstein) deixam a coluna E vazia */
        h("tbody", null, col.map(n => h("tr", null, h("td", { class: "n" }, dois(n)), [..."ABCDE"].map((L, i) => h("td", null, i < lista[n - 1].alternativas.length ? h("span", { class: "bolha" }) : null)), h("td", { class: "conf" }))))))));
  }

  /* uma linha por questão, agrupadas por área na ordem de meta.areas */
  function mapaDeTemas(lista) {
    return h("section", { class: "pagina mapa" },
      h("h2", null, h("span", { class: "sec" }, "Mapa"), "Mapa de temas"),
      h("p", { class: "sub" }, "Cada tema e a ficha que o cobra, por área. Depois de corrigir, circule os temas em que errou — é a sua lista de revisão."),
      h("table", { class: "temas" }, h("tbody", null, lista.map((q, i) => h("tr", null,
        h("td", { class: "d" }, h("span", { class: "tag " + q.area }, NOME_AREA[q.area])),
        h("td", null, q.tema),
        h("td", { class: "nums" }, dois(i + 1)))))));
  }

  /* --- a ficha de uma questão ------------------------------------------------- */
  const materiaBloco = q => h("div", { class: "materia" }, h("p", { class: "rot" }, "Sobre a matéria"), h("div", { html: materiaImpressa(q.materia) }));
  /* o resto da página é do estudante: pauta (ou em branco), até o fim */
  const notas = () => h("div", { class: "notas " + op.pauta, "aria-label": "Espaço para anotações" }, h("span", { class: "rot" }, "Minhas anotações"), h("div", { class: "linhas" }));
  const cabecalho = (q, numero, origem) => h("header", null,
    h("span", { class: "num" }, dois(numero)),
    h("span", { class: "tag " + q.area }, NOME_AREA[q.area]),
    h("span", { class: "tema" }, q.tema),
    h("span", { class: "origem" }, origem));
  /* Devolve uma ou duas fichas. No modo padrão ("Sobre a matéria em página
     própria") a questão ocupa a ficha — enunciado, alternativas, comentário,
     figura, referências, Simplificando, autoavaliação, pauta no que sobra —
     e, logo depois, a página da mini-aula com a sua pauta: ao menos duas
     páginas por questão, mais se o conteúdo pedir. A pauta em toda ficha
     evita página com o fim em branco. */
  function ficha(q, numero) {
    const letra = LETRAS[q.correta];
    const propria = op.materia === "pagina" && !!q.materia;
    const a = h("article", { class: "questao " + q.area, "data-id": q.id },
      cabecalho(q, numero, rotulo(q)),
      h("p", { class: "enunciado", html: q.enunciado }),
      h("ol", { class: "alts" }, q.alternativas.map((a, i) => h("li", { class: i === q.correta ? "certa" : "" },
        h("span", { class: "bolha", "aria-hidden": "true" }), h("span", { class: "letra" }, LETRAS[i]), h("span", { class: "txt", html: a })))),
      h("div", { class: "comentario", "data-id": q.id, "data-letra": letra },
        h("div", { class: "gab" }, h("span", { class: "rot" }, "Gabarito"), h("span", { class: "letrao" }, letra), h("span", { class: "alt-certa", html: q.alternativas[q.correta] })),
        h("div", { class: "texto-comentario", html: q.comentario }),
        /* a figura: caminho relativo a caderno/, com largura e altura (a
           medida da ficha precisa do tamanho antes de a imagem carregar) */
        op.figuras && q.figura ? h("figure", { class: "figura" }, h("span", { class: "moldura", style: `--w:${q.figura.w};--h:${q.figura.h}` }, h("img", { src: "../" + q.figura.src, width: q.figura.w, height: q.figura.h, alt: q.figura.legenda })), h("figcaption", null, q.figura.legenda + " ", h("span", { class: "credito" }, q.figura.fonte))) : null,
        h("p", { class: "referencias", html: `<span class="rot">Referências</span> ${q.referencias.join(" · ")}` }),
        op.simples && q.simples ? h("div", { class: "simples" }, h("p", { class: "rot" }, "Simplificando"), h("div", { html: q.simples })) : null,
        op.materia === "junto" && q.materia ? materiaBloco(q) : null,
        h("p", { class: "fonte" }, `Questão ${dois(q.numero)} · ${FONTES[q.fonte].rotulo}.`)),
      h("div", { class: "auto" },
        h("span", { class: "rot" }, "Eu"),
        ["acertei", "errei", "chutei", "revisar"].map(t => h("span", { class: "caixa" }, h("span", { class: "quadrado" }), t))),
      notas());
    if (!propria) return [a];
    return [a, h("article", { class: "questao materia-pagina " + q.area, "data-id": q.id }, cabecalho(q, numero, "Sobre a matéria"), materiaBloco(q), notas())];
  }
  function questoes(lista) {
    const itens = [];
    let area = null;
    lista.forEach((q, i) => {
      const numero = i + 1;
      if (q.area !== area) { area = q.area; itens.push(h("h3", { class: "divisor " + area }, NOME_AREA[area])); }
      /* texto de apoio: uma vez só para a sequência de questões que o compartilham */
      if (q.texto && (i === 0 || lista[i - 1].texto !== q.texto)) {
        let fim = i; while (fim + 1 < lista.length && lista[fim + 1].texto === q.texto) fim++;
        itens.push(h("div", { class: "texto" }, h("p", { class: "rot" }, fim > i ? `Texto para as fichas ${dois(numero)} a ${dois(fim + 1)}` : `Texto para a ficha ${dois(numero)}`), h("div", { html: q.texto })));
      }
      itens.push(...ficha(q, numero));
    });
    return h("section", { class: "pagina questoes" }, h("h2", null, h("span", { class: "sec" }, "Fichas"), "Questões comentadas"), itens);
  }

  function gabarito(lista) {
    const colunas = [];
    for (let i = 0; i < lista.length; i += 25) colunas.push(lista.slice(i, i + 25).map((q, k) => [i + k + 1, LETRAS[q.correta], q.id]));
    return h("section", { class: "pagina gabarito" },
      h("h2", null, h("span", { class: "sec" }, "Resumo"), "Gabarito"),
      h("p", { class: "sub" }, "As letras de todas as fichas, para conferir de uma vez."),
      h("div", { class: "colunas" }, colunas.map(col => h("table", { class: "grade chave" }, h("tbody", null, col.map(([n, l, id]) => h("tr", null, h("td", { class: "n" }, dois(n)), h("td", { class: "l", "data-id": id, "data-letra": l }, l))))))));
  }
  function resultado(lista) {
    return h("section", { class: "pagina resultado" },
      h("h2", null, h("span", { class: "sec" }, "Fim"), "Meu resultado"),
      h("dl", { class: "fatos" },
        h("div", null, h("dt", null, "Acertos"), h("dd", null, h("span", { class: "linha curta" }), ` / ${lista.length}`)),
        AREAS.map(a => h("div", null, h("dt", null, a.nome), h("dd", null, h("span", { class: "linha curta" }), ` / ${lista.filter(q => q.area === a.id).length}`)))),
      h("p", { class: "sub" }, "Na prova real, 50% da nota habilita. Mantendo a sua taxa nas 100 questões, você ficaria com ", h("span", { class: "linha curta" }), " pontos."),
      h("h3", null, "Temas para revisar (os que marquei “revisar”)"),
      linhas(8),
      h("h3", null, "O que eu não sabia, com as minhas palavras"),
      linhas(10));
  }

  function documento() {
    const lista = escolhidas();
    const partes = [capa(lista)];
    if (op.folha) partes.push(folhaDeRespostas(lista));
    partes.push(mapaDeTemas(lista), questoes(lista));
    if (op.resumo) partes.push(gabarito(lista));
    partes.push(resultado(lista));
    return h("main", { id: "documento", class: "letra-" + op.letra }, partes,
      h("div", { class: "rodape-impresso", "aria-hidden": "true" }, `${op.nome ? op.nome + " · " : ""}Caderno SUS-SP · ${B.meta.banca} · ${B.meta.site}`));
  }

  const raiz = document.getElementById("app");
  /* Ficha que não cabe numa página: passa a ocupar DUAS páginas inteiras
     (classe "dupla") — ou TRÊS ("tripla"), com Sobre a matéria e figura —,
     e a pauta de anotações cresce até o fim da última —
     sem isso, o resto da segunda folha sairia em branco. Só no navegador:
     precisa de medida real (o DOM de mentira do harness não mede). */
  function medirFichas() {
    const fichas = document.querySelectorAll(".questao");
    if (!fichas.length || typeof fichas[0].getBoundingClientRect !== "function") return;
    const regua = document.createElement("div");
    regua.style.cssText = "position:absolute;visibility:hidden;height:var(--pagina)";
    document.body.appendChild(regua);
    const pagina = regua.getBoundingClientRect().height;
    regua.remove();
    if (!pagina) return;
    /* A pauta não é conteúdo: ela cresce ou encolhe para encher a página.
       Mede-se o que sobra (enunciado, alternativas, comentário…) na
       geometria da folha impressa (classe "medindo" no body). Se cabe numa
       página deixando pauta de 34 mm ou mais, é uma página normal; se cabe
       deixando ao menos 10 mm, é uma página "apertada" (a pauta abre mão do
       mínimo); senão, são duas páginas inteiras ("dupla") — ou três
       ("tripla"), se nem em duas cabe deixando 10 mm. */
    const mm = pagina / 256;
    document.body.classList.add("medindo");
    fichas.forEach(f => {
      f.classList.remove("tripla", "dupla", "apertada");
      const notas = f.querySelector(".notas");
      const conteudo = f.getBoundingClientRect().height - (notas ? notas.getBoundingClientRect().height : 0);
      /* na página da mini-aula a pauta é o espaço de anotações prometido:
         se sobrarem menos de 40 mm, ela ganha a página seguinte inteira */
      const folga = f.classList.contains("materia-pagina") ? 40 * mm : 10 * mm;
      if (conteudo > 2 * pagina - folga) f.classList.add("tripla");
      else if (conteudo > pagina - folga) f.classList.add("dupla");
      else if (conteudo > pagina - 34 * mm) f.classList.add("apertada");
    });
    document.body.classList.remove("medindo");
  }
  function render() {
    raiz.innerHTML = ""; raiz.setAttribute("aria-busy", "false"); raiz.append(painel(), documento());
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(medirFichas);
  }
  render();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(medirFichas);
  /* imprimir de uma tela estreita (celular) não pode dar outro caderno */
  if (typeof window.addEventListener === "function") window.addEventListener("beforeprint", medirFichas);
  /* as figuras chegam depois do primeiro render: a medida é refeita no load */
  if (typeof window.addEventListener === "function") window.addEventListener("load", medirFichas);
})();
