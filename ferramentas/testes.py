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
    assert md5(os.path.join(CADERNOS, "susp2026-caderno.pdf")) == "f6d7843b513f7f29edd9dfb435c1347d", "caderno SUS-SP 2026 não é o documento esperado"
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
    assert not any(re.search(r"\([B-E]\)\t", a) for q in qs for a in q["alternativas"]), "alternativas coladas"
    # fidelidade: tudo o que está no JSON está, palavra por palavra, no texto ordenado do caderno
    from normalizar import normalizar
    cad = normalizar(ler("susp2026.txt"))
    for q in qs:
        assert normalizar(q["enunciado"]) in cad, f"enunciado {q['numero']} não está no texto do caderno"
        for L, a in zip("ABCDE", q["alternativas"]):
            assert normalizar(a) in cad, f"alternativa {L} da questão {q['numero']} não está no texto do caderno"

@teste
def test_normalizar_js_e_py_batem():
    from normalizar import normalizar
    amostras = ["Recém-<strong>nascido</strong> “a termo” — SatO2 ≥ 95 %", "dialí\xad\ntica;\n  Ácido  fólico", "<p>“Mola” – hCG ‘alto’</p>", "x − y", "(< 7 dias) e PA > 90", "<p>sat &lt; 90</p>"]
    saida_js = subprocess.run(["node", "-e", "const {normalizar}=require('./ferramentas/normalizar.js');const a=JSON.parse(process.argv[1]);process.stdout.write(JSON.stringify(a.map(normalizar)))", json.dumps(amostras)], capture_output=True, text=True, encoding="utf-8", cwd=os.path.join(AQUI, ".."))
    assert saida_js.returncode == 0, saida_js.stderr
    assert json.loads(saida_js.stdout) == [normalizar(s) for s in amostras], f"JS {saida_js.stdout} != PY {[normalizar(s) for s in amostras]}"
    assert normalizar("Recém-<strong>nascido</strong> “a termo”") == 'recem- nascido "a termo"'

if __name__ == "__main__":
    for f in testes:
        try:
            f(); print("ok   ", f.__name__)
        except Exception as e:
            falhas.append(f.__name__); print("FALHA", f.__name__, "->", e)
    print(f"\n{len(testes) - len(falhas)}/{len(testes)} testes passaram")
    sys.exit(1 if falhas else 0)
