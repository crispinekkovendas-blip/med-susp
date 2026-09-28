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

if __name__ == "__main__":
    for f in testes:
        try:
            f(); print("ok   ", f.__name__)
        except Exception as e:
            falhas.append(f.__name__); print("FALHA", f.__name__, "->", e)
    print(f"\n{len(testes) - len(falhas)}/{len(testes)} testes passaram")
    sys.exit(1 if falhas else 0)
