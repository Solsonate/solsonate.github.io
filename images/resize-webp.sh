#!/usr/bin/env bash
shopt -s nullglob
for img in *.webp; do
  base="${img%.*}"
  case "$base" in
    *-400|*-800|*-1200) continue ;;
  esac
  echo "Generando tamaños para: $img"
  magick "$img" -resize 400x "${base}-400.webp"
  magick "$img" -resize 800x "${base}-800.webp"
  magick "$img" -resize 1200x "${base}-1200.webp"
done
