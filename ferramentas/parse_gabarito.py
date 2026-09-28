"""Gabarito oficial em linhas "NN X" (X = A–E, ou * para anulada).

Entrada: o texto (pdftotext -layout) do edital de divulgação do gabarito, que
lista todas as provas ("001. PROVA OBJETIVA", "002. …") com pares "NN - X";
opcionalmente o texto (pdftotext -raw) do edital de análise de recursos, de
onde saem as anulações da prova pedida, e/ou uma lista manual --anuladas.

    python ferramentas/parse_gabarito.py --preliminar cadernos/susp2026-gabarito-preliminar.txt \
        --recursos cadernos/susp2026-recursos.txt --prova 001 --saida cadernos/susp2026-gabarito.txt
"""
import argparse, re, sys

def letras_da_prova(texto, prova):
    """Os pares "NN - X" do bloco da prova pedida, até o bloco seguinte."""
    blocos = re.split(r"(?m)^\s*(\d{3})\.\s*PROVA\s+OBJETIVA", texto)
    # blocos = [antes, "001", corpo, "002", corpo, ...]
    for i in range(1, len(blocos), 2):
        if blocos[i] == prova:
            corpo = blocos[i + 1]
            pares = re.findall(r"(\d{1,3})\s*-\s*([A-E])\b", corpo)
            letras = {}
            for n, x in pares:
                n = int(n)
                if n in letras:
                    break          # a numeração recomeçou: acabou a prova
                letras[n] = x
            return letras
    raise SystemExit(f"prova {prova} não encontrada no gabarito")

def anuladas_do_edital(raw, prova):
    """Questões da prova pedida marcadas ANULADA no edital de recursos.
    O -raw do SUS-SP quebra em três linhas: "001 - Prova" / "Objetiva" /
    "1 23 ANULADA" (versão 1, questão 23). Outros editais (FAMEMA) trazem
    tudo numa linha, sem versão: "001 - Prova Objetiva 36 ANULADA"."""
    anuladas = set()
    atual = None
    for linha in raw.splitlines():
        linha = linha.strip()
        m = re.match(r"^(\d{3}) - Prova Objetiva (\d+) ANULADA$", linha)
        if m:
            if m.group(1) == prova:
                anuladas.add(int(m.group(2)))
            atual = None
            continue
        m = re.match(r"^(\d{3}) - Prova(?: Objetiva)?$", linha)
        if m:
            atual = m.group(1)
            continue
        m = re.match(r"^\d+ (\d+) ANULADA$", linha)
        if m and atual == prova:
            anuladas.add(int(m.group(1)))
    return anuladas

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--preliminar", required=True)
    ap.add_argument("--recursos")
    ap.add_argument("--anuladas", default="")
    ap.add_argument("--prova", default="001")
    ap.add_argument("--saida", required=True)
    a = ap.parse_args()
    with open(a.preliminar, encoding="utf-8", errors="replace") as f:
        letras = letras_da_prova(f.read(), a.prova)
    anuladas = set(int(x) for x in a.anuladas.split(",") if x.strip())
    if a.recursos:
        with open(a.recursos, encoding="utf-8", errors="replace") as f:
            anuladas |= anuladas_do_edital(f.read(), a.prova)
    if sorted(letras) != list(range(1, len(letras) + 1)):
        raise SystemExit(f"numeração com buracos: {sorted(letras)[:10]}…")
    with open(a.saida, "w", encoding="utf-8", newline="\n") as f:
        for n in sorted(letras):
            f.write(f"{n} {'*' if n in anuladas else letras[n]}\n")
    print(f"{a.saida}: {len(letras)} questões, anuladas {sorted(anuladas) or 'nenhuma'}")

if __name__ == "__main__":
    main()
