#!/bin/bash
# validate-extraction.sh
# Prüft den aktuellen Stand einer PDF→Markdown-Extraktion

set -e

TARGET_DIR="${1:-/home/workdir/artifacts/wfrp-md}"

echo "=== Validierung der Extraktion ==="
echo "Zielordner: $TARGET_DIR"
echo

if [ ! -d "$TARGET_DIR" ]; then
  echo "FEHLER: Ordner $TARGET_DIR existiert nicht."
  exit 1
fi

echo "--- Vorhandene Dateien ---"
find "$TARGET_DIR" -name "*.md" | sort
echo

echo "--- Anzahl Markdown-Dateien ---"
find "$TARGET_DIR" -name "*.md" | wc -l
echo

echo "--- Leere oder sehr kleine Dateien (< 100 Bytes) ---"
find "$TARGET_DIR" -name "*.md" -size -100c -print || echo "(keine)"
echo

echo "--- INDEX vorhanden? ---"
if [ -f "$TARGET_DIR/00-INDEX.md" ]; then
  echo "JA – 00-INDEX.md existiert"
  echo "Inhalt (erste 30 Zeilen):"
  head -n 30 "$TARGET_DIR/00-INDEX.md"
else
  echo "NEIN – 00-INDEX.md fehlt!"
fi
echo

echo "--- Ordnerstruktur ---"
find "$TARGET_DIR" -type d | sort
echo

echo "=== Validierung abgeschlossen ==="
