#!/usr/bin/env python3
"""Demo-Namen aus Projekttext. Originale (Buch) bleiben, außer Talente via write_talente.py."""
from __future__ import annotations

import json
import re
from pathlib import Path

K = Path("/workspace/knowledge")


def scrub_text(t: str) -> str:
    # keep book quotes that happen to say Greta Lachsmann in originals — this fn is not for original.md
    reps = [
        (r"Greta Kohl", "der Spielercharakter"),
        (r"Greta \(Gehilfe\)", "Stufe 1 (Gehilfe)"),
        (r"Greta Gehilfe", "Stufe 1 (Gehilfe)"),
        (r"Städterin Greta", "ein Städter"),
        (r"für Städterin Greta am", "bei der Erschaffung am"),
        (r"neben Greta alt", "neben einem Menschen alt"),
        (r"Greta, Otto, Kurt", "Alltagsleute"),
        (r"Greta, Otto", "Alltagsleute"),
        (r"Greta–Otto–Kurt", "die Spielercharaktere"),
        (r"Greta, Gehilfe", "Gehilfe, Silber 1"),
        (r"\bGreta\b", "der Spielercharakter"),
        (r"Otto als Kaufmann Stufe 2", "Kaufmann Stufe 2"),
        (r"Otto als Händler später", "Kaufmann Stufe 2"),
        (r"Otto Silber 2", "Silber 2"),
        (r"Silber 2 \(Otto\)", "Silber 2"),
        (r"besserer Händler als Greta", "besserer Händler als Silber 1"),
        (r"\bOtto\b", "ein Händler"),
        (r"Kurt Stufe 1", "Halunke Stufe 1"),
        (r"Kurt \(Halunke\)", "Halunke"),
        (r"\bKurt\b", "ein Schläger"),
        (r"Die Demo \(Alltagsleute\)", "Alltagsleute"),
        (r"Die Demo spielt", "Das Spiel beginnt oft"),
        (r"Die Demo kann das lassen\.", "Optional."),
        (r"Demo startet ohne\.", "Start ohne, bis der SL es braucht."),
        (r"Demo startet leer\.", "Start leer, bis Magie oder Kult ins Spiel kommt."),
        (r"Muster Demo \(nicht erzwingen\)", "Muster (nicht erzwingen)"),
        (r"Demo-Zahlen stehen in \[characters\.json\]\([^)]+\), nicht die 40 Startsteigerungen der Erschaffung\.",
         "Startwerte kommen aus der Erschaffung (40 Steigerungen), nicht aus einem vorgefertigten Bogen."),
        (r"Demo-Bögen\. ", ""),
        (r"in der Demo", ""),
        (r"der Demo", "des Spiels"),
        (r"Die Demo ", ""),
        (r"\(nicht Demo\)\.", "."),
        (r"nicht Demo\.", "nicht der empfohlene Einstieg."),
    ]
    for a, b in reps:
        t = re.sub(a, b, t)
    t = re.sub(r"  +", " ", t)
    return t


def main() -> None:
    skip_orig = True
    n = 0
    for p in K.rglob("*"):
        if p.suffix not in {".md", ".txt"}:
            continue
        if "13-battle-index" in str(p) or "_roh" in p.parts:
            continue
        if p.name == "original.md":
            continue
        t = p.read_text(encoding="utf-8")
        if not re.search(r"Greta|Otto|Kurt|Demo", t):
            continue
        nt = scrub_text(t)
        if nt != t:
            p.write_text(nt, encoding="utf-8")
            n += 1
            print("scrub", p.relative_to(K))
    print("md", n)

    chars = K / "data" / "characters.json"
    chars.write_text(
        json.dumps(
            {
                "hinweis": "Keine vorgefertigten Bögen. Charaktere entstehen mit der Session und der Erschaffung.",
                "characters": [],
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    scenes = K / "data" / "scenes.json"
    scenes.write_text(
        json.dumps(
            {"hinweis": "Keine Demo-Szene. Szenen kommen mit der Kampagne.", "scenes": []},
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    sim = K / "data" / "simulation-trace.json"
    sim.write_text(
        json.dumps(
            {"hinweis": "Walkthrough der Demo-Szene entfernt. Rechnungen stehen im Buch, nicht in einer Beispielszene."},
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    skills = json.loads((K / "data" / "skills.json").read_text(encoding="utf-8"))
    if isinstance(skills, dict) and "skills" in skills:
        arr = skills["skills"]
    else:
        arr = skills
    for s in arr:
        if isinstance(s, dict) and "notiz" in s and "Greta" in str(s["notiz"]):
            s.pop("notiz", None)
    (K / "data" / "skills.json").write_text(
        json.dumps(skills, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    readme = K / "data" / "README.md"
    if readme.exists():
        rt = readme.read_text(encoding="utf-8")
        rt = rt.replace("Greta, Otto, Kurt, Dieb", "leer — Session setzt die Figuren")
        rt = rt.replace("Demo, an Städter/Gehilfe gebunden", "keine Demo")
        readme.write_text(rt, encoding="utf-8")
    print("json ok")


if __name__ == "__main__":
    main()
