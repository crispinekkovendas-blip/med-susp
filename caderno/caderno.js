/* ============================================================================
   CADERNO PARA IMPRIMIR — o banco INEPAM em papel, como um livro de estudo.

   Cada questão é uma ficha completa na mesma página: enunciado, alternativas
   com bolha, o gabarito, o comentário inteiro, o "Simplificando", a fonte,
   uma linha de autoavaliação (acertei / errei / chutei / revisar) e linhas
   para as anotações do estudante. Nada fica separado no fim: o que vai no
   fim é só um resumo (gabarito em tabela e o quadro de resultado).

   As cores são impressas de verdade: print-color-adjust: exact no CSS. O
   painel de opções só aparece na tela e é guardado em localStorage.
   ========================================================================== */
(() => {
  const B = window.BANCO;
  const Q = B.questoes;
  const LETRAS = "ABCDE";
  const DISC = { pt: "Português", mt: "Matemática" };
  const FONTES = Object.fromEntries(B.meta.fontes.map(f => [f.id, f.txt]));
  /* chave nova: opções guardadas de versões anteriores (ex.: "só da banca")
     não podem esconder a seleção 50 + 50 de quem já imprimiu antes */
  const CH = "inepam:caderno2";

  /* --- opções --------------------------------------------------------------- */
  /* a caixa de anotações não tem tamanho fixo: ocupa o que sobrar da página.
     `pauta` só diz como ela vem desenhada (Português); Matemática é sempre
     quadriculada, porque a conta e a anotação vão no mesmo lugar */
  const PADRAO = { origem: "selecao", disc: "todas", simples: true, pauta: "linhas", letra: "normal", folha: false, resumo: true, nome: "Genaro Tuco Zarate" };
  const ler = () => { try { const s = JSON.parse(localStorage.getItem(CH) || "{}"); const o = Object.assign({}, PADRAO); for (const k in PADRAO) if (k in s) o[k] = s[k]; return o; } catch (e) { return Object.assign({}, PADRAO); } };
  const gravar = () => { try { localStorage.setItem(CH, JSON.stringify(op)); } catch (e) { /* sem armazenamento */ } };
  let op = ler();

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
  const rotulo = q => q.origem === "recuperada" ? `${B.meta.banca} ${q.ano} · Questão ${dois(q.numero)}` : `Inédita ${q.ano}`;
  /* selecao = as 55 reais + as 45 melhores inéditas (50 + 50); banca = só as reais */
  const noConjunto = q => op.origem === "todas" || q.origem === "recuperada" || (op.origem === "selecao" && q.selecao === true);
  const escolhidas = () => Q.filter(q => noConjunto(q) && (op.disc === "todas" || q.disc === op.disc));
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
        h("div", null, h("h1", null, "Caderno para imprimir"), h("p", { class: "sub" }, `${n} fichas · cada questão sai com gabarito, comentário, Simplificando e espaço para anotar`)),
        h("div", { class: "acoes" },
          h("a", { class: "acao", href: "../" }, "← Banco na tela"),
          h("button", { class: "acao primaria", type: "button", onclick: () => window.print() }, "Imprimir / salvar em PDF"))),
      h("div", { class: "opcoes" },
        h("div", { class: "opcao" }, h("label", { class: "rot", for: "nome" }, "Nome do estudante"),
          h("input", { id: "nome", class: "campo", type: "text", value: op.nome, placeholder: "Nome na capa e no rodapé",
            onchange: e => { op.nome = e.target.value.trim(); gravar(); render(); } })),
        opcao("origem", "Questões", [["selecao", "Seleção 50 + 50"], ["banca", `Só da banca (${Q.filter(q => q.origem === "recuperada").length})`], ["todas", `Todas (${Q.length})`]]),
        opcao("disc", "Disciplina", [["todas", "As duas"], ["pt", "Português"], ["mt", "Matemática"]]),
        opcao("simples", "Simplificando", [[true, "Incluir"], [false, "Não"]]),
        opcao("pauta", "Anotações (Português)", [["linhas", "Pauta"], ["quadriculado", "Quadriculado"], ["nenhuma", "Em branco"]]),
        opcao("letra", "Letra", [["normal", "Normal"], ["grande", "Grande"]]),
        opcao("folha", "Folha de respostas", [[false, "Não"], [true, "Sim"]]),
        opcao("resumo", "Gabarito resumido no fim", [[true, "Sim"], [false, "Não"]])),
      h("p", { class: "dica" }, "Cada ficha ocupa exatamente uma página A4: o que o comentário não usa vira pauta para anotar. Na caixa de impressão: A4, retrato, margens padrão, destino “Salvar como PDF”. As cores saem mesmo com “Gráficos de fundo” desligado.")));
  }

  /* --- folhas ----------------------------------------------------------------- */
  function capa(lista) {
    const reais = lista.filter(q => q.origem === "recuperada").length;
    return h("section", { class: "pagina capa" },
      h("div", { class: "faixa" }, h("span", null, B.meta.banca), h("span", null, B.meta.orgao)),
      h("h1", null, "Caderno de questões ", h("em", null, "comentadas")),
      h("p", { class: "lema" }, `Língua Portuguesa e Matemática no formato da banca ${B.meta.banca}, para o ${B.meta.concurso}. Prova em ${B.meta.prova}.`),
      h("dl", { class: "fatos" },
        h("div", null, h("dt", null, "Questões"), h("dd", null, String(lista.length))),
        h("div", null, h("dt", null, "Da banca"), h("dd", null, String(reais))),
        h("div", null, h("dt", null, "Português"), h("dd", null, String(lista.filter(q => q.disc === "pt").length))),
        h("div", null, h("dt", null, "Matemática"), h("dd", null, String(lista.filter(q => q.disc === "mt").length)))),
      h("div", { class: "campos" },
        h("p", null, h("span", { class: "rot" }, "Nome"), h("span", { class: "linha nome" }, op.nome || "")),
        h("p", null, h("span", { class: "rot" }, "Início"), h("span", { class: "linha curta" }), h("span", { class: "rot" }, "Fim"), h("span", { class: "linha curta" }))),
      h("div", { class: "instrucoes" },
        h("h2", null, "Como estudar com este caderno"),
        h("ol", null,
          h("li", null, h("b", null, "Cubra o gabarito e o comentário"), " com uma folha antes de ler cada questão. Marque a bolha da sua resposta. A prova real dá 4,5 minutos por questão."),
          h("li", null, h("b", null, "Só então destape."), " Confira a letra e leia o comentário inteiro: ele explica também por que cada distrator está errado — e é aí que a banca pega."),
          h("li", null, h("b", null, "Marque a linha de autoavaliação"), " (acertei, errei, chutei) e assinale “revisar” quando a regra for nova. O quadro do fim reúne isso."),
          h("li", null, h("b", null, "Escreva nas linhas"), " a regra com as suas palavras. O “Simplificando” é a mesma explicação como para uma criança: se ele bastar, você entendeu."),
          h("li", null, "As fichas marcadas ", h("b", null, "INEPAM 20xx · Questão NN"), " são questões reais, com o número que tinham na prova. As ", h("b", null, "Inéditas"), " seguem o estilo da banca sobre o conteúdo do edital."))),
      h("p", { class: "nota" }, `Estrutura da prova, conforme o edital: ${B.meta.estrutura}. Nota mínima: 50 em 100. Calculadora proibida.`));
  }

  function folhaDeRespostas(lista) {
    const colunas = [];
    for (let i = 0; i < lista.length; i += 25) colunas.push(lista.slice(i, i + 25).map((q, k) => i + k + 1));
    return h("section", { class: "pagina folha" },
      h("h2", null, h("span", { class: "sec" }, "Folha"), "Folha de respostas"),
      h("p", { class: "sub" }, "Para quem prefere responder tudo antes de destapar: uma bolha por questão e uma coluna para ✓ ou ✗."),
      h("div", { class: "colunas" }, colunas.map(col => h("table", { class: "grade" },
        h("thead", null, h("tr", null, h("th", null, "Nº"), [..."ABCDE"].map(l => h("th", null, l)), h("th", null, "✓"))),
        h("tbody", null, col.map(n => h("tr", null, h("td", { class: "n" }, dois(n)), [..."ABCDE"].map(() => h("td", null, h("span", { class: "bolha" }))), h("td", { class: "conf" }))))))));
  }

  function mapaDeTemas(lista) {
    const porTema = {};
    lista.forEach((q, i) => { const k = `${q.disc}|${q.tema}`; (porTema[k] = porTema[k] || []).push(i + 1); });
    const chaves = Object.keys(porTema).sort((a, b) => a.localeCompare(b, "pt"));
    return h("section", { class: "pagina mapa" },
      h("h2", null, h("span", { class: "sec" }, "Mapa"), "Mapa de temas"),
      h("p", { class: "sub" }, "Cada tema do edital e as fichas que o cobram. Depois de corrigir, circule os temas em que errou — é a sua lista de revisão."),
      h("table", { class: "temas" }, h("tbody", null, chaves.map(k => { const [d, tema] = k.split("|"); return h("tr", null, h("td", { class: "d" }, h("span", { class: "tag " + d }, DISC[d])), h("td", null, tema), h("td", { class: "nums" }, porTema[k].map(dois).join("  "))); }))));
  }

  /* --- a ficha de uma questão ------------------------------------------------- */
  function ficha(q, numero) {
    const letra = LETRAS[q.correta];
    return h("article", { class: "questao " + q.disc, "data-id": q.id },
      h("header", null,
        h("span", { class: "num" }, dois(numero)),
        h("span", { class: "tag " + q.disc }, DISC[q.disc]),
        h("span", { class: "tema" }, q.tema),
        h("span", { class: "origem " + q.origem }, rotulo(q))),
      h("p", { class: "enunciado", html: q.enunciado }),
      h("ol", { class: "alts" }, q.alternativas.map((a, i) => h("li", { class: i === q.correta ? "certa" : "" },
        h("span", { class: "bolha", "aria-hidden": "true" }), h("span", { class: "letra" }, LETRAS[i]), h("span", { class: "txt", html: a })))),
      h("div", { class: "comentario", "data-id": q.id, "data-letra": letra },
        h("div", { class: "gab" }, h("span", { class: "rot" }, "Gabarito"), h("span", { class: "letrao" }, letra), h("span", { class: "alt-certa", html: q.alternativas[q.correta] })),
        h("div", { class: "texto-comentario", html: q.comentario }),
        op.simples && q.simples ? h("div", { class: "simples" }, h("p", { class: "rot" }, "Simplificando"), h("div", { html: q.simples })) : null,
        h("p", { class: "fonte" }, q.origem === "recuperada" ? `Questão ${dois(q.numero)} · ${B.meta.banca} ${q.ano}.` : `Inédita ${q.ano}, no estilo da banca.`)),
      h("div", { class: "auto" },
        h("span", { class: "rot" }, "Eu"),
        ["acertei", "errei", "chutei", "revisar"].map(t => h("span", { class: "caixa" }, h("span", { class: "quadrado" }), t))),
      /* o resto da página é do estudante: quadriculado na matemática (conta e
         anotação juntas), pauta em português — sem tamanho fixo, até o fim */
      q.disc === "mt"
        ? h("div", { class: "rascunho", "aria-label": "Espaço para a conta e anotações" }, h("span", { class: "rot" }, "Rascunho e anotações"))
        : h("div", { class: "notas " + op.pauta, "aria-label": "Espaço para anotações" }, h("span", { class: "rot" }, "Minhas anotações"), h("div", { class: "linhas" })));
  }
  function questoes(lista) {
    const itens = [];
    lista.forEach((q, i) => {
      const numero = i + 1;
      /* texto de apoio: uma vez só para a sequência de questões que o compartilham */
      if (q.texto && (i === 0 || lista[i - 1].texto !== q.texto)) {
        let fim = i; while (fim + 1 < lista.length && lista[fim + 1].texto === q.texto) fim++;
        itens.push(h("div", { class: "texto" }, h("p", { class: "rot" }, fim > i ? `Texto para as fichas ${dois(numero)} a ${dois(fim + 1)}` : `Texto para a ficha ${dois(numero)}`), h("div", { html: q.texto })));
      }
      itens.push(ficha(q, numero));
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
        h("div", null, h("dt", null, "Português"), h("dd", null, h("span", { class: "linha curta" }), ` / ${lista.filter(q => q.disc === "pt").length}`)),
        h("div", null, h("dt", null, "Matemática"), h("dd", null, h("span", { class: "linha curta" }), ` / ${lista.filter(q => q.disc === "mt").length}`))),
      h("p", { class: "sub" }, "Na prova real, 50 em 100 aprova. Mantendo a sua taxa nas 40 questões, você ficaria com ", h("span", { class: "linha curta" }), " pontos."),
      h("h3", null, "Temas para revisar (os que marquei “revisar”)"),
      linhas(8),
      h("h3", null, "Regras que eu não sabia, com as minhas palavras"),
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
      h("div", { class: "rodape-impresso", "aria-hidden": "true" }, `${op.nome ? op.nome + " · " : ""}Caderno INEPAM · ${B.meta.concurso} · gineco.vercel.app/inepam`));
  }

  const raiz = document.getElementById("app");
  function render() { raiz.innerHTML = ""; raiz.setAttribute("aria-busy", "false"); raiz.append(painel(), documento()); }
  render();
})();
