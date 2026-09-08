#!/usr/bin/env python3
"""Presst 00-KONTEXT-kleist.txt auf Pergament. Sicherung, nicht die Welt."""
from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "knowledge" / "00-KONTEXT-kleist.txt"
BG = ROOT / "public" / "images" / "parchment.jpg"
OUT_DIR = ROOT / "public" / "images" / "context"
OUT = OUT_DIR / "kleist-stand.png"
SERIF = Path("/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf")
SERIF_I = Path("/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf")
SERIF_B = Path("/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf")


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for w in words:
        trial = w if not cur else f"{cur} {w}"
        if draw.textlength(trial, font=font) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines or [""]


def main() -> None:
    text = SRC.read_text(encoding="utf-8").strip()
    W, H = 1400, 2400
    if BG.exists():
        bg = Image.open(BG).convert("RGB")
        bg = ImageEnhance.Color(bg).enhance(0.85)
        bg = ImageEnhance.Contrast(bg).enhance(1.05)
        canvas = bg.resize((W, H), Image.Resampling.LANCZOS)
        canvas = canvas.filter(ImageFilter.SMOOTH)
    else:
        canvas = Image.new("RGB", (W, H), (214, 196, 164))
    draw = ImageDraw.Draw(canvas)

    title_f = ImageFont.truetype(str(SERIF_B), 54)
    body_f = ImageFont.truetype(str(SERIF), 28)
    rom_f = ImageFont.truetype(str(SERIF_I), 30)
    foot_f = ImageFont.truetype(str(SERIF_I), 20)

    ink = (42, 28, 18)
    rule = (90, 62, 40)
    margin = 110
    y = 90
    max_w = W - 2 * margin

    blocks = [b.strip().replace("\r", "") for b in text.split("\n\n") if b.strip()]
    title = blocks[0].split("\n")[0]
    rest = blocks[1:]
    tw = draw.textlength(title, font=title_f)
    draw.text(((W - tw) / 2, y), title, font=title_f, fill=ink)
    y += 70
    if rest:
        sub = rest[0]
        if not sub.startswith("I.") and len(sub) < 80:
            sw = draw.textlength(sub, font=foot_f)
            draw.text(((W - sw) / 2, y), sub, font=foot_f, fill=rule)
            y += 36
            rest = rest[1:]
    draw.line((margin, y, W - margin, y), fill=rule, width=1)
    y += 36

    for block in rest:
        lines_raw = block.split("\n")
        first = lines_raw[0].strip()
        body = " ".join(x.strip() for x in lines_raw[1:] if x.strip()) if len(lines_raw) > 1 else ""
        if first in {"I.", "II.", "III.", "IV.", "V.", "VI."} or (len(first) <= 5 and first.endswith(".")):
            draw.text((margin, y), first, font=rom_f, fill=ink)
            y += 40
            para = body or " ".join(lines_raw[1:])
        elif first.startswith("I.") or first.startswith("II.") or first.startswith("III.") or first.startswith("IV."):
            draw.text((margin, y), first.split()[0], font=rom_f, fill=ink)
            y += 40
            para = block
            for prefix in ("I. ", "II. ", "III. ", "IV. ", "V. ", "VI. "):
                if para.startswith(prefix):
                    para = para[len(prefix) :].strip()
                    break
        else:
            para = " ".join(lines_raw)

        for line in wrap(draw, para, body_f, max_w):
            if y > H - 140:
                break
            draw.text((margin, y), line, font=body_f, fill=ink)
            y += 38
        y += 22

    draw.line((margin, H - 88, W - margin, H - 88), fill=rule, width=1)
    stamp = datetime.now(timezone.utc).strftime("gesichert %Y-%m-%d %H:%M UTC")
    draw.text((margin, H - 68), stamp, font=foot_f, fill=rule)
    mark = "Die Schrift ist die Sicherung, nicht die Welt."
    mw = draw.textlength(mark, font=foot_f)
    draw.text((W - margin - mw, H - 68), mark, font=foot_f, fill=rule)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    jpg = OUT.with_suffix(".jpg")
    canvas.save(jpg, "JPEG", quality=82, optimize=True, subsampling=0)
    archiv = OUT_DIR / "archiv"
    archiv.mkdir(exist_ok=True)
    day = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    canvas.save(archiv / f"kleist-{day}.jpg", "JPEG", quality=82, optimize=True, subsampling=0)
    print(jpg.relative_to(ROOT))
    print((archiv / f"kleist-{day}.jpg").relative_to(ROOT))


if __name__ == "__main__":
    main()
