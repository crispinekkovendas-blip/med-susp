/* ============================================================================
   BANCO INEPAM — o comportamento.

   Sem framework: são cinquenta cartões e três estados por cartão. O que a
   página faz cabe em quatro coisas:

     · filtrar por disciplina (todas / português / matemática);
     · responder: um clique numa alternativa marca, corrige na hora e abre o
       comentário — e a resposta fica guardada no navegador;
     · o SIMULADO: 10 de português + 10 de matemática sorteadas, na ordem da
       prova real, sem correção até entregar, com relógio — é o formato do
       edital (a prova tem 40, sendo 20 de específicas, que este banco não
       cobre);
     · teclado: com um cartão em foco, A–E responde.

   Tudo o que se guarda fica em localStorage e nunca sai do navegador.
   ========================================================================== */
(function () {
  "use strict";
  const B = window.BANCO;
  const Q = B.questoes;
  /* as questões REAIS — aplicadas pela banca, reconstruídas de documento oficial */
  const REAIS = Q.filter(q => q.origem === "recuperada");
  /* provas distintas: a prova transcrita e o julgamento de recursos de
     Adamantina 2023 são o mesmo concurso */
  const PROVAS_REAIS = new Set(REAIS.map(q => q.fonte.replace(/rec$/, ""))).size;
  /* a seleção 50 + 50: as 55 reais + as 45 melhores inéditas (marcadas com selecao) */
  const SELECAO = Q.filter(q => q.origem === "recuperada" || q.selecao === true);
  /* filtro: todas | selecao (50 + 50) | banca (só reais) | pt | mt */
  const filtrar = (lista, f) => f === "todas" ? lista : f === "selecao" ? lista.filter(q => q.origem === "recuperada" || q.selecao === true) : f === "banca" ? lista.filter(q => q.origem === "recuperada") : lista.filter(q => q.disc === f);
  const LETRAS = ["A", "B", "C", "D", "E"];
  const CH_RESP = "inepam:respostas";
  const CH_SIM = "inepam:simulado";
  const CH_FILTRO = "inepam:filtro";
  const FONTES = Object.fromEntries(B.meta.fontes.map(f => [f.id, f.txt]));
  const DISC = { pt: "Português", mt: "Matemática" };

  /* --- estado ------------------------------------------------------------ */
  const ler = (k, padrao) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : padrao; } catch (e) { return padrao; } };
  const gravar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const estado = {
    filtro: ler(CH_FILTRO, "todas"),        /* todas | pt | mt */
    respostas: ler(CH_RESP, {}),            /* id -> índice escolhido */
    simulado: ler(CH_SIM, null),            /* { ids, respostas, inicio, entregue } */
  };
  const porId = Object.fromEntries(Q.map(q => [q.id, q]));

  /* --- utilidades -------------------------------------------------------- */
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
  const embaralhar = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const dois = n => String(n).padStart(2, "0");
  const relogio = ms => { const s = Math.floor(ms / 1000); return `${dois(Math.floor(s / 3600))}:${dois(Math.floor(s % 3600 / 60))}:${dois(s % 60)}`; };

  /* --- de quando é a questão ----------------------------------------------
     Recuperada: a banca, o ano e o número que a questão tinha na prova
     ("INEPAM 2025 · Questão 06"). Inédita: nunca foi aplicada, então não
     ganha ano de prova — leva o ano do edital para o qual foi escrita. */
  const rotuloOrigem = q => q.origem === "recuperada"
    ? `${B.meta.banca} ${q.ano} · Questão ${dois(q.numero)}`
    : `Inédita ${q.ano}`;

  /* --- o cartão de uma questão ------------------------------------------- */
  /* `ctx` diz em que modo o cartão vive: no banco corrige na hora; no
     simulado só depois de entregue. `numero` é o que se imprime no canto. */
  function cartao(q, numero, ctx) {
    const resp = ctx.respostas[q.id];
    const respondida = resp != null;
    const revela = respondida && ctx.revela;
    const alts = h("ul", { class: "alts", role: "radiogroup", "aria-label": `Alternativas da questão ${numero}` });
    q.alternativas.forEach((txt, i) => {
      let cls = "alt";
      if (revela) {
        if (i === q.correta) cls += " certa";
        else if (i === resp) cls += " errada";
        else cls += " apagada";
      } else if (respondida && i === resp) cls += " escolhida";
      const b = h("button", {
        class: cls, type: "button", role: "radio",
        "aria-checked": respondida && i === resp ? "true" : "false",
        disabled: revela || (respondida && !ctx.mudavel),
        onclick: () => ctx.responder(q, i),
      }, h("span", { class: "letra", "aria-hidden": "true" }, LETRAS[i]), h("span", { html: txt }));
      alts.append(h("li", null, b));
    });

    const cab = h("div", { class: "cab" },
      h("span", { class: "idx num" }, dois(numero)),
      h("span", { class: "tag " + q.disc }, DISC[q.disc]),
      h("span", { class: "tag tema" }, q.tema),
      h("span", { class: "tag origem " + q.origem, title: q.origem === "recuperada"
          ? `Questão ${dois(q.numero)} de uma prova da banca ${B.meta.banca} em ${q.ano}, reconstruída de documento oficial.`
          : `Escrita em ${q.ano} no estilo da banca, sobre o conteúdo programático do edital 001/2026. Não foi aplicada em prova.` },
        rotuloOrigem(q)));

    const partes = [cab];
    if (q.texto) partes.push(h("div", { class: "texto", html: q.texto }));
    partes.push(h("p", { class: "enunciado", html: q.enunciado }));
    partes.push(alts);

    if (revela) {
      const acertou = resp === q.correta;
      partes.push(h("p", { class: "veredito", role: "status" },
        h("span", { class: "selo " + (acertou ? "ok" : "erro") }, acertou ? "Certa" : "Errada"),
        acertou ? `Gabarito ${LETRAS[q.correta]}.` : `Você marcou ${LETRAS[resp]}; o gabarito é ${LETRAS[q.correta]}.`));
      partes.push(explicacao(q));
    } else if (respondida && !ctx.revela) {
      partes.push(h("p", { class: "veredito" }, h("span", { class: "selo pendente" }, `Marcada: ${LETRAS[resp]}`), "A correção aparece ao entregar o simulado."));
    }

    const el = h("article", { class: "q", id: "q-" + q.id, tabindex: "-1", "data-id": q.id }, partes);
    return el;
  }

  /* --- a explicação tem duas abas ------------------------------------------
     "Comentário" é o texto completo, no registro da banca: gabarito, cada
     distrator, a regra e os casos vizinhos. "Simplificando" é a mesma
     explicação contada como para uma criança: frases curtas, uma ideia por
     vez, comparação com coisa do dia a dia, e a letra certa dita com todas
     as letras. A aba escolhida fica guardada e vale para os próximos
     cartões — quem prefere a versão simples não precisa clicar cem vezes. */
  const CH_ABA = "inepam:aba";
  let abaAtiva = "comentario";
  try { if (localStorage.getItem(CH_ABA) === "simples") abaAtiva = "simples"; } catch (e) { /* sem armazenamento */ }
  function explicacao(q) {
    const fonte = `<p class="fonte">${q.origem === "recuperada"
      ? `Questão ${dois(q.numero)} · ${B.meta.banca} ${q.ano}.`
      : `Inédita ${q.ano}, no estilo da banca.`}</p>`;
    const paineis = {
      comentario: h("div", { class: "comentario", role: "tabpanel", id: `pc-${q.id}`, "aria-labelledby": `ac-${q.id}`, html: q.comentario + fonte }),
      simples: h("div", { class: "comentario simples", role: "tabpanel", id: `ps-${q.id}`, "aria-labelledby": `as-${q.id}`, html: q.simples || "" }),
    };
    const abas = {};
    const mostra = qual => {
      for (const k of Object.keys(paineis)) {
        paineis[k].hidden = k !== qual;
        abas[k].setAttribute("aria-selected", k === qual ? "true" : "false");
        abas[k].className = "aba" + (k === qual ? " ativa" : "");
      }
    };
    const escolhe = qual => {
      abaAtiva = qual;
      try { localStorage.setItem(CH_ABA, qual); } catch (e) { /* sem armazenamento */ }
      mostra(qual);
    };
    abas.comentario = h("button", { class: "aba", type: "button", role: "tab", id: `ac-${q.id}`, "aria-controls": `pc-${q.id}`, onclick: () => escolhe("comentario") }, "Comentário");
    abas.simples = h("button", { class: "aba", type: "button", role: "tab", id: `as-${q.id}`, "aria-controls": `ps-${q.id}`, onclick: () => escolhe("simples") }, "Simplificando");
    mostra(abaAtiva);
    return h("div", { class: "explicacao" },
      h("div", { class: "abas", role: "tablist", "aria-label": "Como explicar" }, abas.comentario, abas.simples),
      paineis.comentario, paineis.simples);
  }

  /* --- teclado: A–E responde o cartão em foco ---------------------------- */
  document.addEventListener("keydown", e => {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    const i = LETRAS.indexOf(e.key.toUpperCase());
    if (i < 0 || e.ctrlKey || e.metaKey || e.altKey) return;
    const art = e.target.closest && e.target.closest(".q");
    if (!art) return;
    const b = art.querySelectorAll(".alt")[i];
    if (b && !b.disabled) { e.preventDefault(); b.click(); }
  });

  /* --- a página ---------------------------------------------------------- */
  const raiz = document.getElementById("app");
  let tique = null;

  function render() {
    if (tique) { clearInterval(tique); tique = null; }
    raiz.innerHTML = "";
    raiz.setAttribute("aria-busy", "false");
    const sim = estado.simulado;
    raiz.append(barra(), sim ? paginaSimulado(sim) : paginaBanco(), rodape());
  }

  function barra() {
    return h("header", { id: "barra" }, h("div", { class: "miolo" },
      h("span", { class: "sigla", "aria-hidden": "true" }, "IN"),
      h("div", { class: "titulo" },
        h("h1", null, "Banco comentado — INEPAM · Embu das Artes"),
        h("p", { class: "sub" }, `${B.meta.concurso} · prova em ${B.meta.prova}`)),
      h("a", { class: "voltar", href: "caderno/", title: "O banco em folhas A4: folha de respostas, linhas para anotar, gabarito comentado em separado" }, "Caderno para imprimir"),
      h("a", { class: "voltar", href: "../", title: "Quadros de ginecologia, no mesmo domínio" }, "← Quadros")));
  }

  /* --- modo banco ---------------------------------------------------------- */
  function paginaBanco() {
    const lista = filtrar(Q, estado.filtro);
    const ctx = {
      respostas: estado.respostas, revela: true, mudavel: false,
      responder(q, i) {
        if (estado.respostas[q.id] != null) return;
        estado.respostas[q.id] = i; gravar(CH_RESP, estado.respostas);
        const velho = document.getElementById("q-" + q.id);
        const numero = Number(velho.querySelector(".idx").textContent);
        const novo = cartao(q, numero, ctx);
        velho.replaceWith(novo);
        atualizarPlacar();
        novo.querySelector(".comentario") && novo.querySelector(".veredito").scrollIntoView({ block: "nearest", behavior: "smooth" });
      },
    };

    const conta = d => Q.filter(q => q.disc === d).length;
    const seg = h("div", { class: "seg", role: "group", "aria-label": "Filtrar" },
      [["todas", "Todas", Q.length], ["selecao", "50 + 50", SELECAO.length], ["banca", "Da banca", REAIS.length], ["pt", "Português", conta("pt")], ["mt", "Matemática", conta("mt")]].map(([v, rot, n]) =>
        h("button", { type: "button", "aria-pressed": estado.filtro === v ? "true" : "false",
          onclick: () => { estado.filtro = v; gravar(CH_FILTRO, v); render(); } },
          rot, h("span", { class: "n" }, n))));

    const placar = h("div", { class: "placar", id: "placar", "aria-live": "polite" });
    const regua = h("div", { id: "regua" }, h("div", { class: "miolo" },
      seg,
      h("button", { class: "acao primaria", type: "button", onclick: iniciarSimulado }, "Simulado 10 + 10"),
      h("button", { class: "acao", type: "button", onclick: () => {
        if (!Object.keys(estado.respostas).length) return;
        if (confirm("Apagar todas as respostas guardadas neste navegador?")) { estado.respostas = {}; gravar(CH_RESP, {}); render(); }
      } }, "Zerar"),
      placar));

    const main = h("main", null,
      capa(),
      regua,
      lista.length ? h("div", { class: "lista" }, lista.map((q, i) => cartao(q, i + 1, ctx))) : h("p", { class: "vazio" }, "Nada aqui."));
    setTimeout(atualizarPlacar, 0);
    return main;
  }

  function atualizarPlacar() {
    const el = document.getElementById("placar"); if (!el) return;
    const lista = filtrar(Q, estado.filtro);
    const resp = lista.filter(q => estado.respostas[q.id] != null);
    const certas = resp.filter(q => estado.respostas[q.id] === q.correta).length;
    const pct = lista.length ? Math.round(100 * resp.length / lista.length) : 0;
    el.innerHTML = "";
    el.append(
      h("span", null, "Respondidas ", h("b", null, `${resp.length}/${lista.length}`)),
      h("span", { class: "trilho", role: "progressbar", "aria-valuenow": pct, "aria-valuemin": "0", "aria-valuemax": "100" },
        h("i", { class: resp.length && certas === resp.length ? "ok" : "", style: `width:${pct}%` })),
      h("span", null, "Acertos ", h("b", null, resp.length ? `${certas}/${resp.length}` : "—"),
        resp.length ? ` (${Math.round(100 * certas / resp.length)}%)` : ""));
  }

  function capa() {
    return h("section", { class: "capa" },
      h("p", { class: "lead", html:
        `<b>${Q.length} questões comentadas</b> de Língua Portuguesa e Matemática — <b>${REAIS.length} delas reais</b>, aplicadas pela banca <b>${B.meta.banca}</b> em ${PROVAS_REAIS} provas entre 2023 e 2026 — no formato do ${B.meta.concurso} da ${B.meta.orgao}. ` +
        `Cada questão tem cinco alternativas, como na prova, e o comentário explica o gabarito <b>e cada distrator</b> — porque a banca monta os errados a partir dos erros que ela espera.` }),
      h("div", { class: "fatos" },
        h("div", null, h("b", null, "40"), h("span", null, "questões na prova")),
        h("div", null, h("b", null, "10 + 10"), h("span", null, "português + matemática")),
        h("div", null, h("b", null, "5"), h("span", null, "alternativas (A–E)")),
        h("div", null, h("b", null, "3h"), h("span", null, "de duração"))),
      h("p", { class: "aviso", html:
        `<b>De onde vêm as questões.</b> O INEPAM não publica os cadernos de prova — só gabaritos e os <em>julgamentos de recursos</em>, em que transcreve enunciado, alternativas e a justificativa. As marcadas <b>INEPAM 20xx · Questão NN</b> são questões reais: ${REAIS.length} questões de ${PROVAS_REAIS} provas da banca entre 2023 e 2026, reconstruídas de documentos oficiais da banca (julgamentos de recursos e uma prova transcrita com gabarito oficial), com o número que tinham na prova original; quando o julgamento não transcreve o enunciado, ele foi reconstituído e o comentário avisa. Isso é tudo o que existe em público — a banca não divulga cadernos. O filtro <b>Da banca</b> mostra só essas. As marcadas <b>Inédita 2026</b> nunca foram aplicadas: seguem o estilo da banca sobre o conteúdo programático do Anexo II do edital 001/2026. As 20 questões de Conhecimentos Específicos da prova não estão aqui.` }));
  }

  /* --- modo simulado -------------------------------------------------------- */
  function iniciarSimulado() {
    const pt = embaralhar(Q.filter(q => q.disc === "pt")).slice(0, 10);
    const mt = embaralhar(Q.filter(q => q.disc === "mt")).slice(0, 10);
    estado.simulado = { ids: pt.concat(mt).map(q => q.id), respostas: {}, inicio: Date.now(), entregue: null };
    gravar(CH_SIM, estado.simulado); render(); window.scrollTo(0, 0);
  }

  function paginaSimulado(sim) {
    const lista = sim.ids.map(id => porId[id]);
    const entregue = !!sim.entregue;
    const ctx = {
      respostas: sim.respostas, revela: entregue, mudavel: true,
      responder(q, i) {
        if (entregue) return;
        sim.respostas[q.id] = i; gravar(CH_SIM, sim);
        const velho = document.getElementById("q-" + q.id);
        const numero = Number(velho.querySelector(".idx").textContent);
        velho.replaceWith(cartao(q, numero, ctx));
        atualizarContagem();
      },
    };

    const contagem = h("p", { id: "contagem" });
    const rel = h("span", { class: "relogio num", "aria-label": "Tempo decorrido" }, "00:00:00");
    const cab = h("div", { class: "simulado-cab" },
      h("div", null,
        h("p", { class: "rot" }, "Simulado"),
        contagem,
        h("p", null, "Dez de Português, dez de Matemática, na ordem da prova. A correção só aparece ao entregar.")),
      h("div", { style: "display:flex;align-items:center;gap:12px;flex-wrap:wrap" },
        rel,
        entregue
          ? h("button", { class: "acao primaria", type: "button", onclick: () => { estado.simulado = null; gravar(CH_SIM, null); render(); } }, "Voltar ao banco")
          : h("button", { class: "acao primaria", type: "button", onclick: () => {
              const faltam = lista.filter(q => sim.respostas[q.id] == null).length;
              if (faltam && !confirm(`Ainda faltam ${faltam} questão(ões) sem resposta. Entregar assim mesmo?`)) return;
              sim.entregue = Date.now(); gravar(CH_SIM, sim); render(); window.scrollTo(0, 0);
            } }, "Entregar"),
        !entregue && h("button", { class: "acao", type: "button", onclick: () => {
          if (confirm("Abandonar este simulado? As marcações dele serão perdidas.")) { estado.simulado = null; gravar(CH_SIM, null); render(); }
        } }, "Abandonar")));

    const partes = [cab];
    if (entregue) partes.push(resultado(sim, lista));
    partes.push(h("div", { class: "lista" }, lista.map((q, i) => cartao(q, i + 1, ctx))));

    const fim = () => rel.textContent = relogio((sim.entregue || Date.now()) - sim.inicio);
    fim();
    if (!entregue) tique = setInterval(fim, 1000);
    function atualizarContagem() {
      const n = lista.filter(q => sim.respostas[q.id] != null).length;
      contagem.textContent = entregue ? `Entregue em ${relogio(sim.entregue - sim.inicio)}.` : `${n} de ${lista.length} marcadas.`;
    }
    atualizarContagem();
    return h("main", null, partes);
  }

  function resultado(sim, lista) {
    const disc = d => {
      const qs = lista.filter(q => q.disc === d);
      return { n: qs.length, certas: qs.filter(q => sim.respostas[q.id] === q.correta).length };
    };
    const pt = disc("pt"), mt = disc("mt");
    const total = pt.certas + mt.certas;
    /* a nota é de 0 a 100 e o corte do edital é 50 — projeta-se o que estas 20
       valeriam se as 20 de específicas seguissem a mesma taxa de acerto */
    const proj = Math.round(100 * total / lista.length);
    const erradas = lista.filter(q => sim.respostas[q.id] != null && sim.respostas[q.id] !== q.correta);
    const brancas = lista.filter(q => sim.respostas[q.id] == null);
    return h("section", { class: "resultado", "aria-live": "polite" },
      h("h2", null, `${total} de ${lista.length}`),
      h("div", { class: "nums" },
        h("div", null, h("b", null, `${pt.certas}/${pt.n}`), h("span", null, "Português")),
        h("div", null, h("b", null, `${mt.certas}/${mt.n}`), h("span", null, "Matemática")),
        h("div", null, h("b", null, `${proj}%`), h("span", null, "de acerto"))),
      h("p", { html: `O edital exige <b>50 pontos em 100</b> para ser aprovado. Mantendo esta taxa nas 40 questões da prova, você estaria ` +
        (proj >= 50 ? `<span class="ok">acima do corte</span>.` : `<span class="erro">abaixo do corte</span>.`) +
        (brancas.length ? ` ${brancas.length} ficaram em branco.` : "") }),
      erradas.length ? h("p", { html: `Erradas: ${erradas.map((q, i) => `<a href="#q-${q.id}">${dois(lista.indexOf(q) + 1)}</a>`).join(", ")} — os comentários já estão abertos abaixo.` }) : h("p", { class: "ok" }, "Nenhuma errada."));
  }

  /* --- rodapé ---------------------------------------------------------------- */
  function rodape() {
    return h("footer", null,
      h("p", null, `Estrutura da prova, conforme o edital: ${B.meta.estrutura}. Nota mínima para aprovação: 50 em 100. É proibido o uso de calculadora.`),
      h("p", null, "Documentos oficiais usados para reconstruir as questões da banca:"),
      h("ul", { class: "fontes" }, B.meta.fontes.map(f => h("li", null, f.txt))),
      h("p", null, "Tudo o que você marca fica só neste navegador. Nada é enviado a lugar nenhum."));
  }

  render();
})();
