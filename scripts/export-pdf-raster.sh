#!/usr/bin/env bash
# Rasterize each PDF page to PNG at 680px width (matches CSS --page-w) for the
# PDF-vs-web debug overlay. Requires Poppler: brew install poppler
#
# If alignment looks wrong vs trim, try adding -cropbox or -mediabox to pdftoppm
# (see pdftoppm(1) on your system).

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PDF="${1:-$ROOT/StM_Winelist_4-23-2025.pdf}"
OUT="${2:-$ROOT/assets/pdf-raster}"

if ! command -v pdftoppm >/dev/null 2>&1; then
  echo "pdftoppm not found. Install Poppler: brew install poppler" >&2
  exit 1
fi

if [[ ! -f "$PDF" ]]; then
  echo "PDF not found: $PDF" >&2
  exit 1
fi

mkdir -p "$OUT"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

pdftoppm -png -scale-to-x 680 "$PDF" "$TMP/st"

shopt -s nullglob
files=( "$TMP"/st-*.png )
shopt -u nullglob

if [[ ${#files[@]} -eq 0 ]]; then
  echo "pdftoppm produced no PNG files under $TMP" >&2
  exit 1
fi

# Sequential rename in numeric page order → page-01.png …
i=0
while IFS= read -r f; do
  [[ -n "$f" ]] || continue
  i=$((i + 1))
  pad="$(printf '%02d' "$i")"
  mv "$f" "$OUT/page-$pad.png"
done < <(
  for g in "${files[@]}"; do
    b="$(basename "$g" .png)"
    n="${b##*-}"
    printf '%s\t%s\n' "$n" "$g"
  done | sort -n | cut -f2-
)

echo "Wrote $i file(s) to $OUT/ (680px wide)"
