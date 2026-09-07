#!/usr/bin/env python3
"""Packt Erklärung-Abschnitte aus knowledge/.../erschaffung/*.md nach src/lib/wfrp/erklaerungen.ts."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "knowledge" / "02-charaktere" / "erschaffung"
OUT = ROOT / "src" / "lib" / "wfrp" / "erklaerungen.ts"

SKIP = {"README.md"}


def paras(text: str) -> list[str]:
    chunk = text
    m = re.search(r"^## Erklärung\s*$", chunk, re.M)
    if m:
        chunk = chunk[m.end() :]
    stop = re.search(r"^## (Wahl|Abgeleitet)\s*$|^### Siehe auch\s*$", chunk, re.M)
    if stop:
        chunk = chunk[: stop.start()]
    out: list[str] = []
    buf: list[str] = []
    for line in chunk.splitlines():
        s = line.strip()
        if s.startswith("|") or s.startswith("#"):
            if buf:
                out.append(" ".join(buf))
                buf = []
            continue
        if not s:
            if buf:
                out.append(" ".join(buf))
                buf = []
            continue
        s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
        s = s.replace("**", "").replace("*", "")
        buf.append(s)
    if buf:
        out.append(" ".join(buf))
    return [p for p in out if p]


def title_of(text: str, fallback: str) -> str:
    m = re.search(r"^# (.+)$", text, re.M)
    return m.group(1).strip() if m else fallback


def main() -> None:
    items = []
    for p in sorted(SRC.glob("*.md")):
        if p.name in SKIP:
            continue
        slug = p.stem
        text = p.read_text(encoding="utf-8")
        items.append({"id": slug, "title": title_of(text, slug), "paras": paras(text)})
    body = json.dumps(items, ensure_ascii=False, indent=2)
    out = (
        "/* generiert: python3 skill/scripts/gen_erklaerungen.py — nicht von Hand pflegen */\n"
        "export type Erklaerung = { id: string; title: string; paras: string[] };\n\n"
        f"export const ERKLAERUNGEN: Erklaerung[] = {body};\n\n"
        "export const ERKLAERUNG_BY_ID = Object.fromEntries(ERKLAERUNGEN.map((e) => [e.id, e]));\n"
    )
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(out, encoding="utf-8")
    print(OUT, "entries", len(items))


if __name__ == "__main__":
    main()
