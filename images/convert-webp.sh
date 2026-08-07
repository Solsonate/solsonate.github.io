#!/usr/bin/env bash
shopt -s nullglob
for img in *.jpg *.jpeg *.JPG *.JPEG *.png *.PNG; do
  base="${img%.*}"
  echo "Convirtiendo: $img"
  ./cwebp.exe -q 80 "$img" -o "${base}.webp"
done

