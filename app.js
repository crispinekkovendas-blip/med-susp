/* ============================================================================
   BANCO SUS-SP — o comportamento.

   Sem framework: são cem cartões e três estados por cartão. O que a
   página faz cabe em quatro coisas:

     · filtrar por área (cada área de meta.areas) ou por edição (cada prova
       de meta.fontes que já tem questão no banco);
     · responder: um clique numa alternativa marca, corrige na hora e abre o
       comentário — e a resposta fica guardada no navegador;
     · o SIMULADO: cinco questões de cada área sorteadas, na ordem da prova,
       sem correção até entregar, com relógio e meta de 3 minutos por
       questão (o ritmo da prova real: 100 questões em 5 horas);
     · teclado: com um cartão em foco, A–E responde.

   Nada aqui nomeia uma área: tudo vem de window.BANCO.meta. Tudo o que se
   guarda fica em localStorage (chaves susp:*) e nunca sai do navegador.
   ========================================================================== */
(function () {
  "use strict";
  const B = window.BANCO;
  const Q = B.questoes;
  const AREAS = B.meta.areas;
  const NOME_AREA = Object.fromEntries(AREAS.map(a => [a.id, a.nome]));
  const FONTES = Object.fromEntries(B.meta.fontes.map(f => [f.id, f]));
  /* só entram nos filtros as edições que já têm questão no banco */
  const EDICOES = B.meta.fontes.filter(f => Q.some(q => q.fonte === f.id));
  const POR_AREA_SIM = 5;            /* questões de cada área no simulado */
  const MINUTOS_POR_QUESTAO = 3;     /* 100 questões em 5 horas */
  const filtrar = (lista, f) => f === "todas" ? lista : NOME_AREA[f] ? lista.filter(q => q.area === f) : lista.filter(q => q.fonte === f);
  const LETRAS = ["A", "B", "C", "D", "E"];
  const CH_RESP = "susp:respostas";
  const CH_SIM = "susp:simulado";
  const CH_FILTRO = "susp:filtro";
  const CH_ABA = "susp:aba";

  /* --- estado ------------------------------------------------------------ */
  const ler = (k, padrao) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : padrao; } catch (e) { return padrao; } };
  const gravar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const estado = {
    filtro: ler(CH_FILTRO, "todas"),        /* todas | <área> | <fonte> */
    respostas: ler(CH_RESP, {}),            /* id -> índice escolhido */
    simulado: ler(CH_SIM, null),            /* { ids, respostas, inicio, entregue } */
  };
  /* um filtro guardado que não existe mais volta a "todas" */
  if (estado.filtro !== "todas" && !NOME_AREA[estado.filtro] && !EDICOES.some(f => f.id === estado.filtro)) estado.filtro = "todas";
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

  /* --- de onde é a questão: a prova e o número que ela tinha nela --------- */
  const rotuloOrigem = q => `${FONTES[q.fonte].rotulo} · Questão ${dois(q.numero)}`;

  /* --- o cartão de uma questão ------------------------------------------- */
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
      h("span", { class: "tag " + q.area }, NOME_AREA[q.area]),
      h("span", { class: "tag tema" }, q.tema),
      h("span", { class: "tag origem", title: `Questão ${dois(q.numero)} da prova ${FONTES[q.fonte].rotulo} (banca ${B.meta.banca}), com o gabarito oficial.` }, rotuloOrigem(q)));

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

    return h("article", { class: "q", id: "q-" + q.id, tabindex: "-1", "data-id": q.id }, partes);
  }

  /* --- a explicação tem duas abas ------------------------------------------
     "Comentário" é o texto completo: veredito, cada distrator, o que a banca
     testa, e as referências de onde vem a resposta. "Simplificando" é a
     mesma explicação em frases curtas. A aba escolhida fica guardada. */
  let abaAtiva = "comentario";
  try { if (localStorage.getItem(CH_ABA) === "simples") abaAtiva = "simples"; } catch (e) { /* sem armazenamento */ }
  function explicacao(q) {
    const referencias = `<p class="referencias"><span class="rot">Referências</span> ${q.referencias.join(" · ")}</p>`;
    const fonte = `<p class="fonte">Questão ${dois(q.numero)} · ${FONTES[q.fonte].rotulo} · banca ${B.meta.banca}.</p>`;
    const figura = q.figura ? figuraHtml(q.figura) : "";
    const paineis = {
      comentario: h("div", { class: "comentario", role: "tabpanel", id: `pc-${q.id}`, "aria-labelledby": `ac-${q.id}`, html: q.comentario + figura + referencias + fonte,
        onclick: e => { if (q.figura && e && e.target && e.target.tagName === "IMG") ampliar(q.figura); } }),
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

  /* --- a figura do comentário -----------------------------------------------
     Uma foto ou imagem de exame por questão (Wikimedia Commons, licença
     livre), entre o comentário e as referências: imagem com width/height
     (a página não pula quando ela carrega), legenda e crédito com link para
     a página de origem. Clicar na imagem abre a versão ampliada. */
  const escapa = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const credito = f => `<span class="credito">${escapa(f.fonte).replace("Wikimedia Commons", `<a href="${escapa(f.pagina)}" target="_blank" rel="noopener">Wikimedia Commons</a>`)}</span>`;
  function figuraHtml(f) {
    /* a moldura já tem o tamanho final (--w/--h → aspect-ratio no CSS), então
       nada se mexe quando a imagem, preguiçosa, chega */
    return `<figure class="figura"><span class="moldura" style="--w:${f.w};--h:${f.h}"><img src="${escapa(f.src)}" width="${f.w}" height="${f.h}" alt="${escapa(f.legenda)}" loading="lazy" decoding="async"></span><figcaption>${escapa(f.legenda)} ${credito(f)}</figcaption></figure>`;
  }
  /* a figura ampliada cobre a tela; clique em qualquer lugar, o × ou Esc fecham */
  function ampliar(f) {
    const antiga = document.querySelector(".ampliar"); if (antiga) antiga.remove();
    const caixa = h("div", { class: "ampliar", role: "dialog", "aria-modal": "true", "aria-label": "Figura ampliada" },
      h("figure", null, h("img", { src: f.src, alt: f.legenda }), h("figcaption", { html: `${escapa(f.legenda)} ${credito(f)}` })),
      h("button", { class: "fechar", type: "button", "aria-label": "Fechar" }, "×"));
    const fecha = () => { caixa.remove(); document.removeEventListener("keydown", tecla); };
    const tecla = e => { if (e && e.key === "Escape") fecha(); };
    caixa.addEventListener("click", fecha);
    document.addEventListener("keydown", tecla);
    document.body.append(caixa);
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
      h("span", { class: "sigla", "aria-hidden": "true" }, "SUS"),
      h("div", { class: "titulo" },
        h("h1", null, `Banco comentado — SUS-SP · ${B.meta.banca}`),
        h("p", { class: "sub" }, `${B.meta.concurso} · ${B.meta.prova}`)),
      h("a", { class: "voltar", href: "caderno/", title: "O banco em folhas A4: uma ficha por página, com gabarito, comentário, referências e espaço para anotar" }, "Caderno para imprimir")));
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

    const filtros = [["todas", "Todas"]].concat(AREAS.map(a => [a.id, a.nome]), EDICOES.map(f => [f.id, f.rotulo]));
    const seg = h("div", { class: "seg", role: "group", "aria-label": "Filtrar" },
      filtros.map(([v, rot]) =>
        h("button", { type: "button", "aria-pressed": estado.filtro === v ? "true" : "false",
          onclick: () => { estado.filtro = v; gravar(CH_FILTRO, v); render(); } },
          rot, h("span", { class: "n" }, filtrar(Q, v).length))));

    const totalSim = AREAS.reduce((s, a) => s + Math.min(POR_AREA_SIM, Q.filter(q => q.area === a.id).length), 0);
    const placar = h("div", { class: "placar", id: "placar", "aria-live": "polite" });
    const regua = h("div", { id: "regua" }, h("div", { class: "miolo" },
      seg,
      h("button", { class: "acao primaria", type: "button", onclick: iniciarSimulado }, `Simulado ${totalSim}`),
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
    const nomes = AREAS.map(a => a.nome);
    const listaAreas = nomes.length > 1 ? nomes.slice(0, -1).join(", ") + " e " + nomes[nomes.length - 1] : nomes[0];
    const provas = EDICOES.map(f => f.rotulo).join(", ");
    return h("section", { class: "capa" },
      h("p", { class: "lead", html:
        `<b>${Q.length} questões comentadas</b> de ${listaAreas} — <b>todas reais</b>, aplicadas pela banca <b>${B.meta.banca}</b> em provas de acesso direto (${provas}), com o gabarito oficial. ` +
        `Cada questão tem cinco alternativas, como na prova, e o comentário explica o gabarito <b>e cada distrator</b>, diz o que a banca está testando e de onde vem a resposta.` }),
      h("div", { class: "fatos" },
        h("div", null, h("b", null, "100"), h("span", null, "questões na prova")),
        h("div", null, h("b", null, "20"), h("span", null, "por área")),
        h("div", null, h("b", null, "5"), h("span", null, "alternativas (A–E)")),
        h("div", null, h("b", null, "5h"), h("span", null, "de duração"))),
      h("p", { class: "aviso", html:
        `<b>De onde vêm as questões.</b> Dos cadernos oficiais publicados depois de cada prova, sem retoque no texto. A etiqueta <b>${EDICOES.length ? EDICOES[0].rotulo : "SUS-SP 2026"} · Questão NN</b> diz a prova e o número que a questão tinha nela; o gabarito é o oficial depois dos recursos, e as questões anuladas pela banca ficaram de fora. O comentário abre com o veredito e fecha dizendo o que a banca testa; <b>Simplificando</b> conta a mesma coisa em frases curtas. A prova de acesso direto tem também Clínica Médica, que este banco não cobre.` }));
  }

  /* --- modo simulado -------------------------------------------------------- */
  function iniciarSimulado() {
    const ids = AREAS.flatMap(a => embaralhar(Q.filter(q => q.area === a.id)).slice(0, POR_AREA_SIM).map(q => q.id));
    estado.simulado = { ids, respostas: {}, inicio: Date.now(), entregue: null };
    gravar(CH_SIM, estado.simulado); render(); window.scrollTo(0, 0);
  }

  function paginaSimulado(sim) {
    const lista = sim.ids.map(id => porId[id]).filter(Boolean);
    const entregue = !!sim.entregue;
    const meta = lista.length * MINUTOS_POR_QUESTAO * 60 * 1000;
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
        h("p", null, `${POR_AREA_SIM} de cada área, na ordem da prova. Meta: ${lista.length * MINUTOS_POR_QUESTAO} minutos (${MINUTOS_POR_QUESTAO} por questão, como na prova). A correção só aparece ao entregar.`)),
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

    const fim = () => {
      const passou = (sim.entregue || Date.now()) - sim.inicio;
      rel.textContent = relogio(passou);
      rel.className = "relogio num" + (passou > meta ? " estourou" : "");
    };
    fim();
    if (!entregue) tique = setInterval(fim, 1000);
    function atualizarContagem() {
      const k = lista.filter(q => sim.respostas[q.id] != null).length;
      contagem.textContent = entregue ? `Entregue em ${relogio(sim.entregue - sim.inicio)}.` : `${k} de ${lista.length} marcadas.`;
    }
    atualizarContagem();
    return h("main", null, partes);
  }

  function resultado(sim, lista) {
    const porArea = AREAS.map(a => {
      const qs = lista.filter(q => q.area === a.id);
      return { a, n: qs.length, certas: qs.filter(q => sim.respostas[q.id] === q.correta).length };
    });
    const total = porArea.reduce((s, x) => s + x.certas, 0);
    const proj = lista.length ? Math.round(100 * total / lista.length) : 0;
    const erradas = lista.filter(q => sim.respostas[q.id] != null && sim.respostas[q.id] !== q.correta);
    const brancas = lista.filter(q => sim.respostas[q.id] == null);
    return h("section", { class: "resultado", "aria-live": "polite" },
      h("h2", null, `${total} de ${lista.length}`),
      h("div", { class: "nums" },
        porArea.map(x => h("div", null, h("b", null, `${x.certas}/${x.n}`), h("span", null, x.a.nome))),
        h("div", null, h("b", null, `${proj}%`), h("span", null, "de acerto"))),
      h("p", { html: `O edital habilita quem faz <b>50% da nota</b> da prova objetiva. Mantendo esta taxa nas 100 questões da prova, você estaria ` +
        (proj >= 50 ? `<span class="ok">acima do corte</span>.` : `<span class="erro">abaixo do corte</span>.`) +
        (brancas.length ? ` ${brancas.length} ficaram em branco.` : "") }),
      erradas.length ? h("p", { html: `Erradas: ${erradas.map(q => `<a href="#q-${q.id}">${dois(lista.indexOf(q) + 1)}</a>`).join(", ")} — os comentários já estão abertos abaixo.` }) : h("p", { class: "ok" }, "Nenhuma errada."));
  }

  /* --- rodapé ---------------------------------------------------------------- */
  function rodape() {
    return h("footer", null,
      h("p", null, `Estrutura da prova, conforme o edital: ${B.meta.estrutura}. Habilitação: 50% da nota da prova objetiva.`),
      h("p", null, "Cadernos e gabaritos oficiais de onde vêm as questões:"),
      h("ul", { class: "fontes" }, B.meta.fontes.map(f => h("li", null, f.txt))),
      h("p", null, "Tudo o que você marca fica só neste navegador. Nada é enviado a lugar nenhum."));
  }

  render();
})();
