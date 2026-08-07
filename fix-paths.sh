#!/usr/bin/env bash
for html in *.html; do
  sed -i -E 's#(src|href|content)="([A-Za-z0-9_.-]+\.(jpg|jpeg|JPG|JPEG|png|PNG|gif|GIF|webp))"#\1="images/\2"#g' "$html"
done

