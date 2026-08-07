#!/usr/bin/env bash
shopt -s nullglob
echo "Estos archivos originales se borrarian:"
echo
TOTAL=0
for f in *.jpg *.jpeg *.JPG *.JPEG *.png *.PNG; do
  [ -e "$f" ] || continue
  case "$f" in
    *-400.*|*-800.*|*-1200.*) continue ;;
  esac
  echo "  $f"
  TOTAL=$((TOTAL+1))
done
echo
echo "Total: $TOTAL archivos"
echo
read -p "Confirmas borrar estos $TOTAL archivos? (escribe 'si' para continuar): " CONFIRM
if [ "$CONFIRM" = "si" ]; then
  for f in *.jpg *.jpeg *.JPG *.JPEG *.png *.PNG; do
    [ -e "$f" ] || continue
    case "$f" in
      *-400.*|*-800.*|*-1200.*) continue ;;
    esac
    git rm "$f"
  done
  echo "Listo. Revisa 'git status' y haz commit."
else
  echo "Cancelado, no se borro nada."
fi
