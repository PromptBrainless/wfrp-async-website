#!/usr/bin/env python3
"""Krieger S. 101–108 + Landvolk S. 109–116."""
from pathlib import Path
import importlib.util

spec = importlib.util.spec_from_file_location("w77", "/workspace/scripts/write_karrieren_77_100.py")
w = importlib.util.module_from_spec(spec)
spec.loader.exec_module(w)

w.OCR = Path("/tmp/karrieren-101-116.txt")
w.PAGE_SLUG = {
    101: ("gedungener", "Gedungener", "krieger"),
    102: ("grubenkaempfer", "Grubenkämpfer", "krieger"),
    103: ("kavallerist", "Kavallerist", "krieger"),
    104: ("kriegerpriester", "Kriegerpriester", "krieger"),
    105: ("ritter", "Ritter", "krieger"),
    106: ("slayer", "Slayer", "krieger"),
    107: ("soldat", "Soldat", "krieger"),
    108: ("waechter", "Wächter", "krieger"),
    109: ("bergmann", "Bergmann", "landvolk"),
    110: ("buettel", "Büttel", "landvolk"),
    111: ("doerfler", "Dörfler", "landvolk"),
    112: ("heckenhexer", "Heckenhexer", "landvolk"),
    113: ("jaeger", "Jäger", "landvolk"),
    114: ("kraeuterkundiger", "Kräuterkundiger", "landvolk"),
    115: ("kundschafter", "Kundschafter", "landvolk"),
    116: ("mystiker", "Mystiker", "landvolk"),
}
w.SCHEMA = {
    101: ["+", "", "+", "⚔", "+", "", "+", "", "Totenkopf", ""],
    102: ["+", "", "+", "+", "⚔", "", "+", "", "Totenkopf", ""],
    103: ["⚔", "+", "+", "", "+", "+", "Totenkopf", "", "", ""],
    104: ["+", "", "+", "⚔", "+", "", "", "", "+", "Totenkopf"],
    105: ["+", "", "⚔", "+", "+", "", "+", "", "", "Totenkopf"],
    106: ["+", "", "+", "+", "⚔", "", "+", "", "Totenkopf", ""],
    107: ["+", "⚔", "+", "+", "+", "", "Totenkopf", "", "", ""],
    108: ["+", "", "+", "Totenkopf", "+", "", "+", "", "", "+"],
    109: ["⚔", "", "+", "+", "+", "", "+", "", "Totenkopf", ""],
    110: ["+", "", "⚔", "+", "+", "", "+", "", "", "Totenkopf"],
    111: ["", "", "", "+", "+", "", "+", "⚔", "+", "+"],
    112: ["", "", "", "", "+", "+", "+", "+", "⚔", "Totenkopf"],
    113: ["", "+", "+", "", "+", "+", "⚔", "+", "", ""],
    114: ["", "", "", "+", "+", "", "+", "+", "⚔", "+"],
    115: ["", "+", "", "", "+", "+", "+", "⚔", "+", ""],
    116: ["", "", "", "Totenkopf", "+", "", "+", "+", "+", "⚔"],
}
w.GENITIV.update(
    {
        "Gedungener": "Gedungenen",
        "Grubenkämpfer": "Grubenkämpfers",
        "Kavallerist": "Kavalleristen",
        "Kriegerpriester": "Kriegerpriesters",
        "Ritter": "Ritters",
        "Slayer": "Slayers",
        "Soldat": "Soldaten",
        "Wächter": "Wächters",
        "Bergmann": "Bergmanns",
        "Büttel": "Büttels",
        "Dörfler": "Dörflers",
        "Heckenhexer": "Heckenhexers",
        "Jäger": "Jägers",
        "Kräuterkundiger": "Kräuterkundigers",
        "Kundschafter": "Kundschafters",
        "Mystiker": "Mystikers",
    }
)

# prevent 77_100 main
if __name__ == "__main__":
    w.main()
