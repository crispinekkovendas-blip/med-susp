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

if __name__ == "__main__":
    for f in testes:
        try:
            f(); print("ok   ", f.__name__)
        except Exception as e:
            falhas.append(f.__name__); print("FALHA", f.__name__, "->", e)
    print(f"\n{len(testes) - len(falhas)}/{len(testes)} testes passaram")
    sys.exit(1 if falhas else 0)
