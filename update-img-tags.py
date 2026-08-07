#!/usr/bin/env python3
"""
update-img-tags.py - solsonate.store (v2)
Reescribe <img> en *.html para usar WebP + srcset responsivo + lazy loading.
Idempotente: se puede correr varias veces sin duplicar atributos.
Lee las dimensiones reales de cada imagen con ImageMagick para que el
srcset sea preciso y el navegador nunca elija un archivo mas chico de lo
necesario (eso es lo que causaba el efecto borroso).

Uso:
    python3 update-img-tags.py           # aplica los cambios
    python3 update-img-tags.py --dry-run # solo muestra que cambiaria

Requiere: ImageMagick (comando 'magick') instalado y en el PATH.
"""

import re
import sys
import glob
import subprocess

DRY_RUN = "--dry-run" in sys.argv

NOMINAL_WIDTH = 384
SIZES_HINT = "(max-width: 600px) 100vw, 480px"

IMG_TAG_RE = re.compile(
    r'<img\s+src="images/([\w\-\.]+?)\.(jpg|jpeg|JPG|JPEG|png|PNG|webp|WEBP)"([^>]*?)\s*/?>'
)

ATTR_STRIP_RE = re.compile(
    r'\s*(srcset|sizes|width|height|loading|fetchpriority)="[^"]*"'
)


def get_dimensions(path):
    try:
        out = subprocess.check_output(
            ["magick", "identify", "-format", "%w %h", path],
            text=True, stderr=subprocess.DEVNULL
        )
        w, h = map(int, out.strip().split())
        return w, h
    except Exception:
        return None


def clean_rest(rest):
    rest = ATTR_STRIP_RE.sub("", rest or "")
    return rest.strip().rstrip("/").strip()


def build_new_tag(match):
    base = match.group(1)
    rest = clean_rest(match.group(3))

    dims = get_dimensions(f"images/{base}.webp")

    attrs = [f'src="images/{base}.webp"']

    srcset_parts = []
    for suffix in ("400", "800", "1200"):
        vdims = get_dimensions(f"images/{base}-{suffix}.webp")
        real_w = vdims[0] if vdims else int(suffix)
        srcset_parts.append(f"images/{base}-{suffix}.webp {real_w}w")
    attrs.append('srcset="' + ", ".join(srcset_parts) + '"')
    attrs.append(f'sizes="{SIZES_HINT}"')

    if rest:
        attrs.append(rest)

    if dims:
        w, h = dims
        disp_w = NOMINAL_WIDTH
        disp_h = round(NOMINAL_WIDTH * h / w)
    else:
        disp_w, disp_h = NOMINAL_WIDTH, round(NOMINAL_WIDTH * 3 / 4)

    attrs.append(f'width="{disp_w}"')
    attrs.append(f'height="{disp_h}"')
    attrs.append('loading="lazy"')

    return "<img " + " ".join(a for a in attrs if a) + ">"


def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    matches = list(IMG_TAG_RE.finditer(content))
    if not matches:
        print(f"  {path}: no se encontraron <img> con el patron esperado.")
        return

    new_content, count = IMG_TAG_RE.subn(build_new_tag, content)

    print(f"  {path}: {count} etiquetas <img> encontradas")
    for m in matches:
        print(f"      -> {build_new_tag(m)}")
        print()

    if not DRY_RUN:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)


def main():
    try:
        subprocess.check_output(["magick", "-version"], stderr=subprocess.DEVNULL)
    except Exception:
        print("AVISO: no se encontro 'magick'. Se usaran anchos por defecto.\n")

    html_files = glob.glob("*.html")
    if not html_files:
        print("No se encontraron archivos .html en esta carpeta.")
        return

    if DRY_RUN:
        print(">>> MODO DRY-RUN: no se escribira nada, solo vista previa.\n")

    for path in html_files:
        process_file(path)

    print("\nListo." if not DRY_RUN else "\nFin de la vista previa.")


if __name__ == "__main__":
    main()
