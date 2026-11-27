# Testes das ferramentas. Roda: `python ferramentas/testes.py` (sai 1 se algo falhar).
# Cada tarefa do plano acrescenta os seus testes aqui, antes de escrever a ferramenta.
import sys, os, json, hashlib, subprocess, re
AQUI = os.path.dirname(os.path.abspath(__file__))
CADERNOS = os.path.join(AQUI, "cadernos")
sys.path.insert(0, AQUI)
falhas = []
testes = []

def teste(f):
    testes.append(f)
    return f

def md5(caminho):
    h = hashlib.md5()
    with open(caminho, "rb") as arq:
        for bloco in iter(lambda: arq.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()

def ler(nome):
    with open(os.path.join(CADERNOS, nome), encoding="utf-8", errors="replace") as arq:
        return arq.read()

@teste
def test_fontes_2026_baixadas():
    # Os PDFs ficam fora do git desde que o repositório é público (2026-11-26): no
    # GitHub Actions eles não existem, e o teste confere o caderno só se estiver na pasta.
    caderno = os.path.join(CADERNOS, "susp2026-caderno.pdf")
    if os.path.exists(caderno):
        assert md5(caderno) == "f6d7843b513f7f29edd9dfb435c1347d", "caderno SUS-SP 2026 não é o documento esperado"
    else:
        print("    (sem susp2026-caderno.pdf na pasta: fora do git; a URL está em FONTES.md)")
    gab = ler("susp2026-gabarito-preliminar.txt")
    assert "41 - B" in gab and "100 - B" in gab, "gabarito preliminar SUS-SP 2026 sem as linhas esperadas"
    rec = ler("susp2026-recursos.txt")
    assert rec.count("ANULADA") == 1525, "edital de recursos SUS-SP 2026: contagem de ANULADA diferente de 1525"
    hr = ler("hrpp2026-gabarito-preliminar.txt")
    assert "1-D" in hr.replace(" ", "") and "100 - B" in hr, "gabarito preliminar HRPP 2026 sem as linhas esperadas"

def gabarito_lido(nome):
    linhas = ler(nome).strip().splitlines()
    return {int(l.split()[0]): l.split()[1] for l in linhas}

@teste
def test_gabarito_susp2026():
    g = gabarito_lido("susp2026-gabarito.txt")
    assert len(g) == 100 and sorted(g) == list(range(1, 101)), "não são 100 linhas de 1 a 100"
    assert {n for n, x in g.items() if x == "*"} == {4, 21, 23, 36}, f"anuladas erradas: {sorted(n for n, x in g.items() if x == '*')}"
    assert g[41] == "B" and g[55] == "B" and g[61] == "E" and g[81] == "D" and g[100] == "B", "letras de conferência erradas"
    assert all(x in "ABCDE*" for x in g.values())

@teste
def test_gabarito_hrpp2026():
    g = gabarito_lido("hrpp2026-gabarito.txt")
    assert len(g) == 100 and sorted(g) == list(range(1, 101))
    assert g[1] == "D" and g[50] == "E" and g[100] == "B", "letras de conferência erradas"

@teste
def test_parse_gabarito_bloco_da_prova_certa():
    # o bloco "002. PROVA OBJETIVA" começa de novo em 1: o parser tem de parar no fim da prova 001
    from parse_gabarito import letras_da_prova
    txt = "001. PROVA OBJETIVA\n 1-E 2-B 3-E\n4 - C 5 - C\n002. PROVA OBJETIVA\n1-C 2-B 3-A 4-D 5-C\n"
    assert letras_da_prova(txt, "001") == {1: "E", 2: "B", 3: "E", 4: "C", 5: "C"}
    assert letras_da_prova(txt, "002") == {1: "C", 2: "B", 3: "A", 4: "D", 5: "C"}

@teste
def test_parse_recursos_anuladas():
    from parse_gabarito import anuladas_do_edital
    raw = "x\n001 - Prova\nObjetiva\n1 4 ANULADA\n003 - Prova\nObjetiva\n1 4 ANULADA\n001 - Prova\nObjetiva\n1 23 Indeferido\n001 - Prova Objetiva 36 ANULADA\n"
    assert anuladas_do_edital(raw, "001") == {4, 36}

@teste
def test_juntar_hifens():
    from extrai_questoes import juntar_hifens
    casos = {
        "hiper-\ntensão": "hipertensão", "dialí\xad\ntica": "dialítica",
        "pré-\nnatal": "pré-natal", "recém-\nnascido": "recém-nascido", "pós-\noperatório": "pós-operatório",
        "anti-\nhistamínico": "anti-histamínico", "intra-\nabdominal": "intra-abdominal", "auto-\nimune": "autoimune",
        "anos-\nmaço": "anos-maço", "sub-\nrogar": "sub-rogar", "contra-\nindicação": "contraindicação",
        "queixa-\n-se": "queixa-se", "Ringer-\n-lactato": "Ringer-lactato", "DNA- \n-HPV": "DNA-HPV", "proges- \nterona": "progesterona",
        "inter-\nrogar": "interrogar", "pré-\nvias": "prévias", "hiper-\nreatividade": "hiperreatividade",
    }
    for entrada, esperado in casos.items():
        saida, _ = juntar_hifens(entrada)
        assert saida == esperado, f"{entrada!r} -> {saida!r}, esperava {esperado!r}"

@teste
def test_separar_questoes_basico():
    from extrai_questoes import separar_questoes
    txt = "41.\tNa Caderneta, há índices.\nQual índice?\n(A)\tPeso.\n(B)\tEstatura.\n(C)\tPeso-para-estatura.\n(D)\tIMC.\n(E)\tEscore-z.\n42.\tMenina, 2 anos.\n(A)\ta\n(B)\tb\n(C)\tc\n(D)\td\n(E)\te\n"
    qs = separar_questoes(txt)
    assert [q["numero"] for q in qs] == [41, 42]
    assert qs[0]["enunciado"] == "Na Caderneta, há índices. Qual índice?"
    assert qs[0]["alternativas"] == ["Peso.", "Estatura.", "Peso-para-estatura.", "IMC.", "Escore-z."]
    assert qs[0]["imagem"] is False

@teste
def test_separar_nao_quebra_em_parentese_com_espaco():
    # "(A) " com espaço no meio do enunciado (uma citação) não é alternativa: a banca separa com TAB
    from extrai_questoes import separar_questoes
    txt = "07.\tO item diz:\n(A) o primeiro;\n(B) o segundo.\nAssinale.\n(A)\tum\n(B)\tdois\n(C)\ttrês\n(D)\tquatro\n(E)\tcinco\n"
    qs = separar_questoes(txt)
    assert len(qs) == 1 and qs[0]["alternativas"] == ["um", "dois", "três", "quatro", "cinco"]
    assert "(A) o primeiro" in qs[0]["enunciado"]

@teste
def test_separar_texto_de_apoio_compartilhado():
    # o caso das questões 81 a 83 vem depois da (E) da 80 e não é da 80: vira `texto` de 81, 82 e 83
    from extrai_questoes import separar_questoes
    txt = ("80.\tPergunta oitenta?\n(A)\ta\n(B)\tb\n(C)\tc\n(D)\td\n(E)\tcolectomia total.\n"
           "Considere o seguinte caso clínico para responder às questões de números 81 a 83.\nMenina de 18 meses, adotada.\nExames normais.\n"
           "81.\tVacinas?\n(A)\ta\n(B)\tb\n(C)\tc\n(D)\td\n(E)\te\n82.\tPulmão?\n(A)\ta\n(B)\tb\n(C)\tc\n(D)\td\n(E)\te\n"
           "83.\tSangue?\n(A)\ta\n(B)\tb\n(C)\tc\n(D)\td\n(E)\te\n84.\tOutra?\n(A)\ta\n(B)\tb\n(C)\tc\n(D)\td\n(E)\te\n")
    qs = {q["numero"]: q for q in separar_questoes(txt)}
    assert qs[80]["alternativas"][4] == "colectomia total."
    assert qs[81]["texto"] == qs[82]["texto"] == qs[83]["texto"]
    assert "Menina de 18 meses, adotada. Exames normais." in qs[81]["texto"] and "<em>Considere" in qs[81]["texto"]
    assert "texto" not in qs[84]

@teste
def test_separar_marca_imagem():
    from extrai_questoes import separar_questoes
    txt = "20.\tRealiza o eletrocardiograma a seguir:\n[IMAGEM]\n(A)\ta\n(B)\tb\n(C)\tc\n(D)\td\n(E)\te\n"
    qs = separar_questoes(txt)
    assert qs[0]["imagem"] is True and "[IMAGEM]" not in qs[0]["enunciado"]

@teste
def test_extracao_susp2026():
    qs = json.loads(ler("susp2026-questoes.json"))
    assert len(qs) == 100 and [q["numero"] for q in qs] == list(range(1, 101))
    assert all(len(q["alternativas"]) == 5 and all(a for a in q["alternativas"]) for q in qs), "alguma questão sem 5 alternativas"
    por = {q["numero"]: q for q in qs}
    assert por[41]["enunciado"].startswith("Na Caderneta de Saúde da Criança")
    assert por[42]["alternativas"][4].startswith("molusco contagioso")
    assert por[61]["alternativas"][4].startswith("Mola hidatiforme completa")
    assert "hidrocortisona intravenosa" in por[22]["alternativas"][1]
    assert por[81]["alternativas"][3].startswith("o apoio matricial")
    assert por[20]["area"] == "cm" and por[21]["area"] == "cir" and por[41]["area"] == "ped" and por[61]["area"] == "go" and por[81]["area"] == "prev" and por[100]["area"] == "prev"
    assert not any(re.search(r"\([A-E]\)\t", q["enunciado"]) for q in qs), "marcador de alternativa sobrou num enunciado"
    # os títulos das áreas ("Pediatria", "Ginecologia e Obstetrícia"…) são linhas do caderno
    # entre os blocos: não podem ficar colados na última alternativa do bloco anterior
    assert not any(re.search(r"(Clínica Médica|Cirurgia|Pediatria|Ginecologia e Obstetrícia|Saúde Coletiva)$", a) for q in qs for a in q["alternativas"]), "título de área colado numa alternativa"
    assert "queixa-se" in por[47]["enunciado"] and "Ringer-lactato" in por[55]["alternativas"][1], "hífen repetido na quebra de linha não foi tratado"
    assert not any("texto" in q for q in qs), "o caderno de 2026 não tem texto de apoio compartilhado"

    # fidelidade: tudo o que está no JSON está, palavra por palavra, no texto ordenado do caderno
    from normalizar import normalizar
    cad = normalizar(ler("susp2026.txt"))
    for q in qs:
        assert normalizar(q["enunciado"]) in cad, f"enunciado {q['numero']} não está no texto do caderno"
        for L, a in zip("ABCDE", q["alternativas"]):
            assert normalizar(a) in cad, f"alternativa {L} da questão {q['numero']} não está no texto do caderno"


@teste
def test_extracao_susp2021():
    qs = json.loads(ler("susp2021-questoes.json"))
    assert len(qs) == 100 and all(len(q["alternativas"]) == 5 for q in qs)
    por = {q["numero"]: q for q in qs}
    assert por[1]["area"] == "prev" and por[21]["area"] == "cm" and por[41]["area"] == "go" and por[61]["area"] == "cir" and por[81]["area"] == "ped"
    assert por[80]["alternativas"][4].endswith("(J- pouch).") and "Considere" not in por[80]["alternativas"][4], "o caso das questões 81-83 ficou colado na (E) da 80"
    assert por[81]["texto"] == por[82]["texto"] == por[83]["texto"] and "Menina de 18 meses" in por[81]["texto"]
    assert "texto" in por[74] and "texto" in por[75] and "texto" in por[77] and "texto" in por[78] and "texto" in por[21] and "texto" in por[22]
    assert "texto" not in por[73] and "texto" not in por[76] and "texto" not in por[84]
    from normalizar import normalizar
    cad = normalizar(ler("susp2021.txt"))
    for q in qs:
        assert normalizar(q["enunciado"]) in cad and all(normalizar(a) in cad for a in q["alternativas"]), f"questão {q['numero']} infiel ao texto"
        if "texto" in q:
            for trecho in [s.strip() for s in re.split(r"[.;:|]", normalizar(q["texto"])) if len(s.strip()) >= 20]:
                assert trecho in cad, f"texto de apoio da {q['numero']} infiel: {trecho[:40]}"
    assert not any(re.search(r"\([B-E]\)\t", a) for q in qs for a in q["alternativas"]), "alternativas coladas"
@teste
def test_normalizar_js_e_py_batem():
    from normalizar import normalizar
    amostras = ["Recém-<strong>nascido</strong> “a termo” — SatO2 ≥ 95 %", "dialí\xad\ntica;\n  Ácido  fólico", "<p>“Mola” – hCG ‘alto’</p>", "x − y", "(< 7 dias) e PA > 90", "<p>sat &lt; 90</p>"]
    saida_js = subprocess.run(["node", "-e", "const {normalizar}=require('./ferramentas/normalizar.js');const a=JSON.parse(process.argv[1]);process.stdout.write(JSON.stringify(a.map(normalizar)))", json.dumps(amostras)], capture_output=True, text=True, encoding="utf-8", cwd=os.path.join(AQUI, ".."))
    assert saida_js.returncode == 0, saida_js.stderr
    assert json.loads(saida_js.stdout) == [normalizar(s) for s in amostras], f"JS {saida_js.stdout} != PY {[normalizar(s) for s in amostras]}"
    assert normalizar("Recém-<strong>nascido</strong> “a termo”") == 'recem- nascido "a termo"'

@teste
def test_parse_gabarito_sem_cabecalho_e_asterisco():
    # gabarito transcrito (SUS-SP 2021): sem "001. PROVA OBJETIVA", colunas "N- X", anulada = "A*"
    from parse_gabarito import letras_da_prova
    txt = "GABARITO SUS SP\n 2021\n\n1- B   21- B   41- C\n2- A   22- D   42- A\n27- A*  57- A* 100- B\n"
    g = letras_da_prova(txt, "001")
    assert g[1] == "B" and g[21] == "B" and g[42] == "A" and g[100] == "B"
    assert g[27] == "*" and g[57] == "*"

@teste
def test_gabarito_susp2021():
    g = gabarito_lido("susp2021-gabarito.txt")
    assert len(g) == 100 and sorted(g) == list(range(1, 101))
    assert {n for n, x in g.items() if x == "*"} == {27, 57}
    assert g[1] == "B" and g[41] == "C" and g[61] == "B" and g[81] == "C" and g[100] == "B"

@teste
def test_parse_gabarito_cabecalho_escrita_e_anulada_N():
    # Einstein: "001. PROVA ESCRITA OBJETIVA (TEÓRICA)"; no edital de resultado de 2025 o cabeçalho é "01." e a anulada vem como "N"
    from parse_gabarito import letras_da_prova
    txt = "01. PROVA ESCRITA OBJETIVA (TEÓRICA)\nACESSO DIRETO\n1  -  A\n2  -  C\n11  -  N\n75  -  C\n002. PROVA ESCRITA OBJETIVA (TEÓRICA)\n1  -  B\n"
    g = letras_da_prova(txt, "001")
    assert g[1] == "A" and g[2] == "C" and g[11] == "*" and g[75] == "C" and 3 not in g
    assert letras_da_prova(txt, "002") == {1: "B"}

@teste
def test_gabaritos_unesp2026_e_einstein():
    g = gabarito_lido("unesp2026-gabarito.txt")
    assert len(g) == 100 and g[42] == "B" and "*" not in g.values(), "UNESP 2026: 42 trocada para B pelo edital de recursos, nenhuma anulada"
    g = gabarito_lido("einstein2026-gabarito.txt")
    assert len(g) == 75 and g[49] == "*" and g[1] == "C" and g[75] == "C"
    g = gabarito_lido("einstein2025-gabarito.txt")
    assert len(g) == 75 and {n for n, x in g.items() if x == "*"} == {11, 31, 44, 45} and g[1] == "A"

@teste
def test_separar_estilo_questao_e_quatro_alternativas():
    from extrai_questoes import separar_questoes
    txt = "QUESTÃO  03\t\nRN de 37 semanas.\n(A)\tum.\n(B)\tdois.\n(C)\ttrês.\n(D)\tquatro.\nQUESTÃO  04\t\nOutra.\n(A)\tx.\n(B)\ty.\n(C)\tz.\n(D)\t\n"
    qs = separar_questoes(txt, "questao")
    assert [q["numero"] for q in qs] == [3, 4]
    assert qs[0]["alternativas"] == ["um.", "dois.", "três.", "quatro."] and "erro" not in qs[0]
    assert qs[1]["erro"] == "alternativa vazia (imagem)" and qs[1]["imagem"] is True
    assert "erro" in separar_questoes("01.\tX.\n(A)\ta.\n(B)\tb.\n(C)\tc.\n", "ponto")[0], "três alternativas têm de ser marcadas como problema"

@teste
def test_extracao_unesp2026_e_einstein():
    for fonte, n in (("unesp2026", 100), ("einstein2026", 75), ("einstein2025", 75)):
        qs = json.loads(ler(fonte + "-questoes.json"))
        assert len(qs) == n and [q["numero"] for q in qs] == list(range(1, n + 1)), fonte
        assert all(len(q["alternativas"]) == 4 for q in qs if "erro" not in q), fonte + ": alguma questão sem 4 alternativas"
        from normalizar import normalizar
        cad = normalizar(ler(fonte + ".txt"))
        for q in qs:
            if "erro" in q: continue
            assert normalizar(q["enunciado"]) in cad and all(normalizar(a) in cad for a in q["alternativas"]), f"{fonte} {q['numero']} infiel ao texto"
    por = {q["numero"]: q for q in json.loads(ler("unesp2026-questoes.json"))}
    assert por[87]["erro"] == "alternativa vazia (imagem)", "UNESP 87: as alternativas são imagens do formulário de DO"
    assert por[98]["texto"] == por[99]["texto"] == por[100]["texto"] and por[100]["texto"].startswith("<p><em>Leia o texto a seguir")
    assert "texto" not in por[97]
    assert por[1]["area"] == "ped" and por[21]["area"] == "go" and por[41]["area"] == "cm" and por[61]["area"] == "cir" and por[81]["area"] == "prev"
    por = {q["numero"]: q for q in json.loads(ler("einstein2026-questoes.json"))}
    assert por[15]["area"] == "cm" and por[16]["area"] == "cir" and por[31]["area"] == "ped" and por[46]["area"] == "go" and por[61]["area"] == "prev"
    assert not any(re.search(r"(Cirurgia Geral|pediatria|gINECOLOGIA E oBSTETRÍCIA|MEDICINA DA FAMÍLIA E SAÚDE COLETIVA)$", a, re.I) for q in por.values() for a in q["alternativas"]), "título de bloco colado numa alternativa"

@teste
def test_vercel_json_desliga_o_deploy_automatico_do_git():
    # a Vercel pode ligar o repositório ao projeto; um build a partir do git não teria pdf/
    cfg = json.load(open(os.path.join(AQUI, "..", "vercel.json"), encoding="utf-8"))
    assert cfg.get("git", {}).get("deploymentEnabled", {}).get("main") is False, "vercel.json não desliga o deploy automático de main"

@teste
def test_vercel_json_reescreve_os_links_curtos():
    # /v/<id>/<qual> e /v/<id> caem na página v/ (que lê o caminho e redireciona)
    cfg = json.load(open(os.path.join(AQUI, "..", "vercel.json"), encoding="utf-8"))
    rotas = {(r.get("source"), r.get("destination")) for r in cfg.get("rewrites", [])}
    assert ("/v/:id/:qual", "/v/") in rotas and ("/v/:id", "/v/") in rotas, rotas

# --- vídeos: questoes_json.js e videos.py gerar ----------------------------------
def roda_node(*args):
    r = subprocess.run(["node"] + list(args), capture_output=True, text=True, encoding="utf-8", cwd=os.path.join(AQUI, ".."))
    return r.returncode, (r.stdout or "") + (r.stderr or "")

@teste
def test_questoes_json_lista_uma_linha_por_questao():
    cod, saida = roda_node("ferramentas/questoes_json.js")
    assert cod == 0, saida[-300:]
    qs = json.loads(saida)
    assert len(qs) == 500 and qs[0]["id"] == "ped01" and qs[-1]["id"] == "cm100"   # volume 1 (01–50) e volume 2 (51–100) das cinco áreas
    assert all(set(q) == {"id", "area", "fonte", "numero", "tema", "termo", "rotulo"} for q in qs)
    assert qs[0]["rotulo"] == "SUS-SP 2026" and all(q["rotulo"] for q in qs)
    # termo = primeiro <dt> da mini-aula, sem tags
    assert all(q["termo"] and "<" not in q["termo"] for q in qs), [q["id"] for q in qs if not q["termo"]][:5]

@teste
def test_videos_comentadas_aplica_o_mapa_e_marca():
    import videos
    # a correção da prova (questão comentada) vira o vídeo da questão de cada id do mapa,
    # marcada como comentada; o mesmo vídeo é extraído uma vez só; o antigo fica nas candidatas
    antigo = {"url": "https://www.youtube.com/watch?v=aaaaaaaaaaa", "videoId": "aaaaaaaaaaa", "titulo": "a", "canal": "c", "canalId": "UC1", "duracao": 600, "views": 1, "data": None}
    cands = {"cm01": {"q": [antigo], "m": []}, "cm02": {"q": [], "m": []}}
    esc = {"cm01": {"q": antigo["url"], "m": None, "busca": "x" * 10}, "cm02": {"q": None, "m": None, "busca": "y" * 10}}
    chamadas = []
    def extrair(url):
        chamadas.append(url); return {"id": url[32:43], "title": "Correção", "channel": "Ceisc", "channel_id": "UCceisc", "duration": 5000, "view_count": 9, "upload_date": "20251128"}
    mapa = {"cm01": "https://www.youtube.com/watch?v=bbbbbbbbbbb", "cm02": "https://www.youtube.com/watch?v=bbbbbbbbbbb&t=120s"}
    n = videos.comentadas(mapa, forcar=True, escolhas=esc, candidatos=cands, canais=[], extrair=extrair, gravar=False)
    assert n == 2 and chamadas == ["https://www.youtube.com/watch?v=bbbbbbbbbbb"], chamadas
    assert esc["cm01"]["q"] == mapa["cm01"] and esc["cm02"]["q"] == mapa["cm02"]
    assert esc["cm01"]["comentada"] == {"q": True} and esc["cm01"]["forcado"] == {"q": True}
    assert cands["cm01"]["q"][0]["url"] == mapa["cm01"] and cands["cm01"]["q"][1] is antigo
    assert cands["cm02"]["q"][0]["url"] == mapa["cm02"] and cands["cm02"]["q"][0]["videoId"] == "bbbbbbbbbbb"
    # gerar copia a marca para videos.json
    qs = [{"id": "cm01", "area": "cm", "fonte": "f", "numero": 1, "tema": "T"}, {"id": "cm02", "area": "cm", "fonte": "f", "numero": 2, "tema": "T"}]
    saida = videos.gerar(escolhas=esc, candidatos=cands, canais=[], qs=qs, gravar=False)
    assert saida["cm01"]["q"]["comentada"] is True and saida["cm02"]["q"]["url"] == mapa["cm02"] and "comentada" not in (saida["cm01"]["m"] or {})
    # sem --forcar, canal fora da lista é recusado
    try: videos.comentadas({"cm01": mapa["cm01"]}, escolhas=esc, candidatos=cands, canais=[], extrair=extrair, gravar=False); assert False
    except ValueError as e: assert "canal" in str(e)

@teste
def test_videos_consultas():
    import videos
    q = {"id": "cm01", "tema": "Cefaleia — critérios de migrânea", "termo": "Migrânea sem aura"}
    # a cabeça do tema (antes do travessão ou do parêntese) é o que o YouTube entende
    assert videos.cabeca("Cefaleia — critérios de migrânea") == "Cefaleia"
    assert videos.cabeca("Hérnia inguinal (anatomia) — canal") == "Hérnia inguinal"
    assert videos.consulta_q(q) == "Cefaleia residência médica"
    assert videos.consulta_m(q) == "Cefaleia aula"
    assert videos.video_id("https://www.youtube.com/watch?v=7LUXFoe0vNk") == "7LUXFoe0vNk"
    assert videos.video_id("https://youtu.be/7LUXFoe0vNk") is None
    # a correção da prova pode apontar para o minuto da questão (&t=…s); só essa forma a mais
    assert videos.video_id("https://www.youtube.com/watch?v=7LUXFoe0vNk&t=18679s") == "7LUXFoe0vNk"
    assert videos.video_id("https://www.youtube.com/watch?v=7LUXFoe0vNk&t=18679") is None

@teste
def test_videos_gerar_vazio_cobre_todas_as_questoes():
    import videos
    qs = videos.questoes()
    esc = {q["id"]: {"q": None, "m": None, "busca": q["tema"]} for q in qs}
    saida = videos.gerar(escolhas=esc, candidatos={}, canais=[], qs=qs, gravar=False)
    assert set(saida) == {q["id"] for q in qs}
    v = saida["ped01"]
    assert v["q"] is None and v["m"] is None and v["busca"] == qs[0]["tema"] and v["fonte"] == qs[0]["fonte"] and v["numero"] == qs[0]["numero"] and v["tema"] == qs[0]["tema"] and v["rotulo"] == qs[0]["rotulo"]

@teste
def test_videos_gerar_recusa_id_e_url_errados():
    import videos
    qs = videos.questoes()
    esc = {q["id"]: {"q": None, "m": None, "busca": q["tema"]} for q in qs}
    esc["zz99"] = {"q": None, "m": None, "busca": "x" * 10}
    try: videos.gerar(escolhas=esc, candidatos={}, canais=[], qs=qs, gravar=False); assert False, "aceitou id que não é questão"
    except ValueError as e: assert "zz99" in str(e)
    del esc["zz99"]
    cand = {"cm01": {"q": [{"url": "https://youtu.be/7LUXFoe0vNk", "videoId": "7LUXFoe0vNk", "titulo": "t", "canal": "c", "canalId": "UC1", "duracao": 600, "views": 1, "data": None}], "m": []}}
    esc["cm01"]["q"] = "https://youtu.be/7LUXFoe0vNk"
    try: videos.gerar(escolhas=esc, candidatos=cand, canais=[{"id": "UC1", "nome": "c"}], qs=qs, gravar=False); assert False, "aceitou url fora da forma canônica"
    except ValueError as e: assert "cm01" in str(e)

@teste
def test_videos_gerar_copia_metadados_e_exige_canal():
    import videos
    qs = videos.questoes()
    esc = {q["id"]: {"q": None, "m": None, "busca": q["tema"]} for q in qs}
    url = "https://www.youtube.com/watch?v=7LUXFoe0vNk"
    cand = {"cm01": {"q": [{"url": url, "videoId": "7LUXFoe0vNk", "titulo": "Anatomia", "canal": "Canal X", "canalId": "UC1", "duracao": 662, "views": 32404, "data": None}], "m": []}}
    esc["cm01"]["q"] = url
    try: videos.gerar(escolhas=esc, candidatos=cand, canais=[], qs=qs, gravar=False); assert False, "aceitou canal fora da lista"
    except ValueError as e: assert "canal" in str(e)
    saida = videos.gerar(escolhas=esc, candidatos=cand, canais=[{"id": "UC1", "nome": "Canal X"}], qs=qs, gravar=False)
    assert saida["cm01"]["q"] == {"url": url, "titulo": "Anatomia", "canal": "Canal X", "canalId": "UC1", "duracao": 662}
    # forçado passa sem canal na lista
    esc["cm01"]["forcado"] = {"q": True}
    assert videos.gerar(escolhas=esc, candidatos=cand, canais=[], qs=qs, gravar=False)["cm01"]["q"]["url"] == url

@teste
def test_videos_filtrar_lista_branca_duracao_e_ordem():
    import videos
    am = json.load(open(os.path.join(AQUI, "videos", "amostra-busca.json"), encoding="utf-8"))["entries"]
    lista = videos.filtrar(am, {"UCPwesuPLFsTGosBpPqb8-Hw", "UCymJdnj_lQjDDrTqv3BYhxw", "UCdHMuOHKICxcHwecxN8P-AA"})
    # UFES fica de fora (205 s < 4 min); Facilitando e Medcof entram, na ordem da busca
    assert [c["videoId"] for c in lista] == ["7LUXFoe0vNk", "fi7c6ggd5Ks"], lista
    # a ordem da busca (relevância) vale mais que as visualizações
    pouco = {"id": "aaaaaaaaaaa", "title": "a", "channel": "c", "channel_id": "UC1", "duration": 600, "view_count": 1}
    muito = {"id": "bbbbbbbbbbb", "title": "b", "channel": "c", "channel_id": "UC1", "duration": 600, "view_count": 100000}
    assert [c["videoId"] for c in videos.filtrar([pouco, muito], {"UC1"})] == ["aaaaaaaaaaa", "bbbbbbbbbbb"]
    c = lista[0]
    assert c["url"] == "https://www.youtube.com/watch?v=7LUXFoe0vNk" and c["canalId"] == "UCPwesuPLFsTGosBpPqb8-Hw" and c["duracao"] == 662 and c["views"] == 32404 and c["data"] is None
    assert videos.filtrar(am, set()) == []

@teste
def test_videos_canais_tabela():
    import videos
    am = json.load(open(os.path.join(AQUI, "videos", "amostra-busca.json"), encoding="utf-8"))["entries"]
    tabela = videos.tabela_canais([am, am[:2]])     # dois temas: os dois primeiros canais aparecem nos dois
    assert all(set(l) >= {"id", "nome", "hits", "mediana_s"} for l in tabela)
    assert tabela[0]["hits"] == 2 and tabela[1]["hits"] == 2 and tabela[2]["hits"] == 1
    assert {l["id"] for l in tabela[:2]} == {"UCPwesuPLFsTGosBpPqb8-Hw", "UCymJdnj_lQjDDrTqv3BYhxw"}
    assert next(l for l in tabela if l["id"] == "UCPwesuPLFsTGosBpPqb8-Hw")["mediana_s"] == 662

@teste
def test_videos_trocar_exige_canal_da_lista_salvo_forcado():
    import videos
    esc = {"cm01": {"q": None, "m": None, "busca": "x" * 10}}
    cands = {}
    info = {"id": "7LUXFoe0vNk", "title": "T", "channel": "C", "channel_id": "UCfora", "duration": 600, "view_count": 5, "upload_date": "20240102"}
    url = "https://www.youtube.com/watch?v=7LUXFoe0vNk"
    try: videos.trocar("cm01", "q", url, escolhas=esc, candidatos=cands, canais=[], extrair=lambda u: info, gravar=False); assert False, "aceitou canal fora da lista"
    except ValueError as e: assert "canal" in str(e)
    videos.trocar("cm01", "q", url, forcar=True, escolhas=esc, candidatos=cands, canais=[], extrair=lambda u: info, gravar=False)
    assert esc["cm01"]["q"] == url and esc["cm01"]["forcado"] == {"q": True}
    assert cands["cm01"]["q"][0]["data"] == "2024-01-02" and cands["cm01"]["q"][0]["canalId"] == "UCfora"
    videos.trocar("cm01", "q", "-", escolhas=esc, candidatos=cands, canais=[], extrair=None, gravar=False)
    assert esc["cm01"]["q"] is None and "forcado" not in esc["cm01"]

@teste
def test_videos_conferir_marca_os_que_sumiram():
    import videos
    V = {"cm01": {"q": {"url": "https://www.youtube.com/watch?v=aaaaaaaaaaa"}, "m": {"url": "https://www.youtube.com/watch?v=bbbbbbbbbbb"}},
         "cm02": {"q": {"url": "https://www.youtube.com/watch?v=ccccccccccc"}, "m": None}}
    V["cm03"] = {"q": {"url": "https://www.youtube.com/watch?v=ddddddddddd"}, "m": None}
    def abrir(url):
        if "aaaaaaaaaaa" in url: return 200
        if "ccccccccccc" in url or "ddddddddddd" in url: raise videos.HTTPErro(401)   # o oEmbed não distingue privado de incorporação desligada
        raise videos.HTTPErro(404)
    def extrair(url):
        if "ddddddddddd" in url: raise RuntimeError("Private video")
        return {"id": url[-11:]}
    r = videos.conferir(videos_json=V, abrir=abrir, extrair=extrair)
    assert r == [("cm01", "m", "https://www.youtube.com/watch?v=bbbbbbbbbbb", 404), ("cm03", "q", "https://www.youtube.com/watch?v=ddddddddddd", "privado")], r

@teste
def test_videos_ytdlp_pede_titulos_em_portugues():
    import videos
    o = videos.OPCOES_YTDLP
    assert o["http_headers"]["Accept-Language"].startswith("pt-BR") and o["extractor_args"]["youtube"]["lang"] == ["pt"]

@teste
def test_videos_escolher_nao_repete_o_mesmo_video():
    import videos
    mesmo = {"url": "https://www.youtube.com/watch?v=aaaaaaaaaaa", "videoId": "aaaaaaaaaaa", "titulo": "a", "canal": "c", "canalId": "UC1", "duracao": 600, "views": 1, "data": None}
    outro = {"url": "https://www.youtube.com/watch?v=bbbbbbbbbbb", "videoId": "bbbbbbbbbbb", "titulo": "b", "canal": "c", "canalId": "UC1", "duracao": 600, "views": 1, "data": None}
    cands = {"cm01": {"q": [mesmo], "m": [mesmo, outro]}, "cm02": {"q": [mesmo], "m": [mesmo]}}
    esc = {}
    qs = [{"id": "cm01", "area": "cm", "tema": "T1"}, {"id": "cm02", "area": "cm", "tema": "T2"}]
    sem = videos.escolher("cm", candidatos=cands, escolhas=esc, qs=qs, gravar=False)
    assert esc["cm01"]["q"] == mesmo["url"] and esc["cm01"]["m"] == outro["url"]
    assert esc["cm02"]["q"] == mesmo["url"] and esc["cm02"]["m"] == mesmo["url"] and sem == []

@teste
def test_videos_escolher_nao_restaura_o_que_foi_apagado():
    import videos
    a = {"url": "https://www.youtube.com/watch?v=aaaaaaaaaaa", "videoId": "aaaaaaaaaaa", "titulo": "a", "canal": "c", "canalId": "UC1", "duracao": 600, "views": 1, "data": None}
    b = {"url": "https://www.youtube.com/watch?v=bbbbbbbbbbb", "videoId": "bbbbbbbbbbb", "titulo": "b", "canal": "c", "canalId": "UC1", "duracao": 600, "views": 1, "data": None}
    cands = {"cm01": {"q": [a, b], "m": [a]}}
    qs = [{"id": "cm01", "area": "cm", "tema": "T1"}]
    esc = {"cm01": {"q": a["url"], "m": a["url"], "busca": "T1"}}
    # apagar com trocar registra o veto…
    videos.trocar("cm01", "q", "-", escolhas=esc, candidatos=cands, canais=[], extrair=None, gravar=False)
    assert esc["cm01"]["q"] is None and esc["cm01"]["vetado"] == {"q": [a["url"]]}
    # …e escolher não mexe numa questão que já tem entrada
    videos.escolher("cm", candidatos=cands, escolhas=esc, qs=qs, gravar=False)
    assert esc["cm01"]["q"] is None
    # com --preencher enche o que está vazio, pulando o vetado (e o vídeo da matéria)
    videos.escolher("cm", candidatos=cands, escolhas=esc, qs=qs, gravar=False, preencher=True)
    assert esc["cm01"]["q"] == b["url"]
    # apagar de novo veta o b também; sem candidata restante, fica vazio mesmo com --preencher
    videos.trocar("cm01", "q", "-", escolhas=esc, candidatos=cands, canais=[], extrair=None, gravar=False)
    assert esc["cm01"]["vetado"]["q"] == [a["url"], b["url"]]
    sem = videos.escolher("cm", candidatos=cands, escolhas=esc, qs=qs, gravar=False, preencher=True)
    assert esc["cm01"]["q"] is None and sem == ["cm01/q"]

@teste
def test_videos_buscar_extra_poe_as_candidatas_na_frente():
    import videos
    velha = {"url": "https://www.youtube.com/watch?v=aaaaaaaaaaa", "videoId": "aaaaaaaaaaa", "titulo": "a", "canal": "c", "canalId": "UC1", "duracao": 600, "views": 1, "data": None}
    cands = {"cm08": {"q": [velha], "m": []}}
    nova = {"id": "bbbbbbbbbbb", "title": "b", "channel": "c", "channel_id": "UC1", "duration": 900, "view_count": 2}
    fora = {"id": "ccccccccccc", "title": "x", "channel": "y", "channel_id": "UCfora", "duration": 900, "view_count": 2}
    n = videos.buscar_extra("cm08", "q", "esclerose sistêmica residência médica", candidatos=cands, canais=[{"id": "UC1", "nome": "c"}], buscar=lambda c: [nova, fora, dict(nova)], gravar=False)
    assert n == 1 and [c["videoId"] for c in cands["cm08"]["q"]] == ["bbbbbbbbbbb", "aaaaaaaaaaa"]

@teste
def test_videos_buscar_retoma_de_onde_parou():
    import videos
    # uma busca interrompida (memória, rede) recomeça só pelo que falta; --tudo refaz
    feito = {"url": "https://www.youtube.com/watch?v=aaaaaaaaaaa", "videoId": "aaaaaaaaaaa", "titulo": "a", "canal": "c", "canalId": "UC1", "duracao": 600, "views": 1, "data": None}
    cands = {"cm01": {"q": [feito], "m": []}}
    qs = [{"id": "cm01", "area": "cm", "tema": "T1", "termo": None}, {"id": "cm02", "area": "cm", "tema": "T2", "termo": None}]
    chamadas = []
    def busca(c): chamadas.append(c); return []
    videos.buscar("cm", buscar=busca, candidatos=cands, canais=[{"id": "UC1", "nome": "c"}], qs=qs, gravar=False, pausa=0)
    assert chamadas == ["T2 residência médica", "T2 aula"], chamadas   # cm01 já estava feito (q com lista, m vazio mas feito)
    chamadas.clear()
    videos.buscar("cm", buscar=busca, candidatos=cands, canais=[{"id": "UC1", "nome": "c"}], qs=qs, gravar=False, pausa=0, tudo=True)
    assert len(chamadas) == 4

if __name__ == "__main__":
    for f in testes:
        try:
            f(); print("ok   ", f.__name__)
        except Exception as e:
            falhas.append(f.__name__); print("FALHA", f.__name__, "->", e)
    print(f"\n{len(testes) - len(falhas)}/{len(testes)} testes passaram")
    sys.exit(1 if falhas else 0)
