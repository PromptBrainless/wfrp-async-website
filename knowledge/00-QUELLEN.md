# Quellen – wo das Buch liegt

Das Regelwerk bleibt die Autorität. Kein PDF, kein Scan im Git.

## Lesbare Buchseiten

Drive-Ordner (JPG fast vollständig, WebP zusätzlich ab ca. Datei 119):

https://drive.google.com/drive/folders/1b9y0RA3w6XQTrp1hYO3qumeN1s7npGXM

Ordner-ID: `1b9y0RA3w6XQTrp1hYO3qumeN1s7npGXM`

Dateiname: `…_N.jpg` oder `…_N-compressed.webp`  
**N = PDF-Seite. Buchfußzeile = N − 1.**

Vorrang: WebP, sonst JPG, sonst Voll-PDF.

Visuell lesen. Zitat immer **Buchfußzeile**.

## Inventar (Datei N → Buch → Ziel)

| Datei N | Buch S. | Kapitel | Zielordner |
|---------|---------|---------|------------|
| 25–46 | 24–45 | Charakter, Völker, Attribute, Bogen | `02-charaktere/` |
| 47–53 | 46–52 | Klasse, Status | `03-klassen-karrieren/01–02` |
| 54–61 | 53–60 | Akademiker | `03-klassen-karrieren/akademiker/` |
| 62–69 | 61–68 | Bürger | `03-klassen-karrieren/buerger/` |
| 70–77 | 69–76 | Flussvolk | `03-klassen-karrieren/flussvolk/` |
| 78–85 | 77–84 | Freisassen | `03-klassen-karrieren/freisassen/` |
| 86–93 | 85–92 | Gesetzlose | `03-klassen-karrieren/gesetzlose/` |
| 94–101 | 93–100 | Höflinge | `03-klassen-karrieren/hoeflinge/` |
| 102–109 | 101–108 | Krieger | `03-klassen-karrieren/krieger/` |
| 110–117 | 109–116 | Landvolk | `03-klassen-karrieren/landvolk/` |
| 119–132 | 118–131 | Fähigkeiten | `04-faehigkeiten-talente/faehigkeiten/` |
| 133–148 | 132–147 | Talente | `04-faehigkeiten-talente/talente/` |
| 150–173 | 149–172 | Regeln, EG, Kampf, Zustände | `05-regeln/` |
| 168–171 | 167–170 | Zustände | `05-regeln/zustaende/` |
| 289–300 | 288–299 | Einkauf, Waffen, Qualitäten | `08-einkauf/` |
| 298–300 | 297–299 | Qualitäten / Makel | `08-einkauf/qualitaeten/` |

Stichprobe geprüft: Datei 119 = Buch 118; Datei 152 = Buch 151; Datei 300 = Buch 299 (Stumpf).

WebP-Lücken (oft Kunst): z. B. 121, 124, 125, 132, 157 — dort JPG oder Voll-PDF.

## Fallback

Komprimiertes PDF in der Session. `pypdf` oft um 1 Seite verschoben. Bei Konflikt gewinnt das Bild.

Voll-PDF Drive `1POdvD6YhNyD6L3h0Sm_rtn6LKKtIjjQV` nur wenn Bild fehlt.

### Siehe auch

- [00-BEFEHLE.md](00-BEFEHLE.md)
- [Register](00-REGISTER.md)
- [Würfel](05-regeln/01-wuerfel-und-grundmechanik.md)
