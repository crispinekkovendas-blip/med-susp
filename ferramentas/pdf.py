# -*- coding: utf-8 -*-
"""Gera os PDFs do caderno com o Chrome sem janela: um por área e o completo.

    python ferramentas/pdf.py            -> pdf/caderno-<area>.pdf + pdf/caderno-completo.pdf
    python ferramentas/pdf.py ped        -> só o de Pediatria

As opções do caderno vão pela URL (?area=ped&materia=pagina…), que caderno.js
lê sem gravar; o padrão é Sobre a matéria depois do comentário, com figuras
e quadriculado. O caderno é servido por um http.server local (o file:// não serve para
o banco.js nem para as figuras) e impresso por um perfil próprio do Chrome,
para não brigar com o Chrome aberto. As páginas são contadas com PyMuPDF.
"""
import os, subprocess, sys, time, socket, urllib.request

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = os.environ.get("CHROME", r"C:\Program Files\Google\Chrome\Application\chrome.exe")
AREAS = ["ped", "prev", "cir", "go", "cm"]
PORTA = 8765
PERFIL = os.path.join(os.environ.get("TEMP", RAIZ), "susp-pdf-chrome")

def servidor():
    p = subprocess.Popen([sys.executable, "-m", "http.server", str(PORTA), "--bind", "127.0.0.1"], cwd=RAIZ,
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(50):
        try:
            with socket.create_connection(("127.0.0.1", PORTA), timeout=0.2): return p
        except OSError: time.sleep(0.1)
    p.kill(); raise SystemExit("o http.server não subiu")

def imprimir(nome, query):
    saida = os.path.join(RAIZ, "pdf", nome)
    os.makedirs(os.path.dirname(saida), exist_ok=True)
    if os.path.exists(saida): os.remove(saida)
    url = "http://127.0.0.1:%d/caderno/?%s" % (PORTA, query)
    cmd = [CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--user-data-dir=" + PERFIL,
           "--no-pdf-header-footer", "--virtual-time-budget=120000", "--run-all-compositor-stages-before-draw",
           "--print-to-pdf=" + saida, url]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=900)
    if not os.path.exists(saida):
        print("FALHOU", nome); print(r.stderr[-2000:]); return None
    import fitz
    doc = fitz.open(saida)
    print("%-24s %4d páginas  %5.1f MB" % (nome, doc.page_count, os.path.getsize(saida) / 1e6))
    return doc.page_count

if __name__ == "__main__":
    pedidas = sys.argv[1:] or AREAS + ["completo"]
    p = servidor()
    try:
        for a in pedidas:
            if a == "completo": imprimir("caderno-completo.pdf", "area=todas")
            else: imprimir("caderno-%s.pdf" % a, "area=" + a)
    finally:
        p.kill()
