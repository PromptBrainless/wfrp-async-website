#!/usr/bin/env python3
"""Einzel-MDs für jede 🔴-Erklärung der Charaktererschaffung.

Kein Original-Ordner: das sind Projekt-Erklärungen (Gespräch),
kein Buch-Volltext. Buch-Mechanik bleibt in den drei Dateien.
"""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "knowledge" / "02-charaktere" / "erschaffung"

SEE = """
### Siehe auch

- [Hub dieser Erklärungen](README.md)
- [Checkliste](../12-erschaffung-checkliste.md)
- [Gespräch](../10-erschaffung-gespraech.md)
- [Bogen](../../00-BOGEN.md)
"""

FILES: list[tuple[str, str]] = []


def add(name: str, body: str) -> None:
    FILES.append((name, body.strip() + "\n"))


add(
    "README.md",
    """# Erschaffung — Erklärungen einzeln

Jede 🔴-Stelle der Charaktererschaffung hat **eine** Datei.
Gespräch, Checkliste und Antworten **verweisen** hierher — Text nicht dreimal pflegen.
Später: Compendium aus diesem Ordner zusammenziehen.

Das sind **Projekt-Erklärungen** (Gespräch mit Neulingen). Buch-Volltext bleibt in
`original.md` der Mechanik-Ordner. Hier nichts erfinden, das dem Buch widerspricht.

Reihenfolge: **Volk / Welt zuerst**, dann PnP, dann Profession.

## Assistenten-Befehle (kein Aktionskatalog)

Sage `erkläre <thema>` — der Assistent liest die Datei, nicht den Chat-Verlauf.

| Befehl | Datei |
|--------|--------|
| `erkläre welt` / `erkläre volk` | [01-welt-und-voelker](01-welt-und-voelker.md) |
| `erkläre pnp` | [02-pnp](02-pnp.md) |
| `erkläre klasse` | [03-klasse](03-klasse.md) |
| `erkläre karriere` | [04-karriere](04-karriere.md) |
| `erkläre status` | [05-status](05-status.md) |
| `erkläre währung` | [06-waehrung](06-waehrung.md) |
| `erkläre rang` | [07-rang](07-rang.md) |
| `erkläre attribute` | [08-attribute](08-attribute.md) |
| `erkläre w100` | [09-w100](09-w100.md) |
| `erkläre volksmodifikator` | [10-volks-modifikator](10-volks-modifikator.md) |
| `erkläre steigerungen werte` | [11-fuenf-steigerungen](11-fuenf-steigerungen.md) |
| `erkläre schicksal` | [12-schicksal](12-schicksal.md) |
| `erkläre zähigkeit` | [13-zaehigkeit](13-zaehigkeit.md) |
| `erkläre motivation` | [14-motivation](14-motivation.md) |
| `erkläre lp` | [15-lp-max](15-lp-max.md) |
| `erkläre fähigkeit` / `erkläre talent` | [16-faehigkeit-und-talent](16-faehigkeit-und-talent.md) |
| `erkläre zufallstalente` | [17-zufaellige-talente](17-zufaellige-talente.md) |
| `erkläre spezialisierung` | [18-spezialisierung](18-spezialisierung.md) |
| `erkläre stufe 1` | [19-karriere-stufe-1](19-karriere-stufe-1.md) |
| `erkläre ausrüstung` | [20-ausruestung](20-ausruestung.md) |
| `erkläre gugel` | [21-gugel-oder-maske](21-gugel-oder-maske.md) |
| `erkläre startgeld` | [22-startgeld](22-startgeld.md) |
| `erkläre traglast` | [23-traglast](23-traglast.md) |
| `erkläre alter` | [24-alter-aussehen](24-alter-aussehen.md) |
| `erkläre bart` | [25-bart](25-bart.md) |
| `erkläre ziele` | [26-ziele](26-ziele.md) |
| `erkläre gruppe` | [27-gruppe](27-gruppe.md) |
| `erkläre zehn fragen` | [28-zehn-fragen](28-zehn-fragen.md) |
| `erkläre ep` | [29-steigerungen-ep](29-steigerungen-ep.md) |
| `erkläre vorteile` | [30-vorteile](30-vorteile.md) |
| `erkläre zustände` | [31-zustaende](31-zustaende.md) |
| `erkläre korrumpierung` | [32-korrumpierung](32-korrumpierung.md) |
| `erkläre rüstung` | [33-ruestung-zonen](33-ruestung-zonen.md) |
| `erkläre waffe` | [34-gefuehrte-waffe](34-gefuehrte-waffe.md) |
| `erkläre zauber` | [35-zauber-gebete](35-zauber-gebete.md) |
| `erkläre sünde` | [36-suende](36-suende.md) |
| `erkläre flags` | [37-flags-bindungen](37-flags-bindungen.md) |
| `erkläre karriereweg` | [38-karriereweg](38-karriereweg.md) |
| `erkläre psychologie` | [39-psychologie](39-psychologie.md) |

## Schritte

1. Volk + Welt → 01, dann PnP → 02
2. Klasse / Karriere / Status / Geld / Rang → 03–07
3. Attribute / W100 / Modifikator / Schicksal / Motivation / LP → 08–15
4. Fähigkeiten und Talente → 16–19
5. Ausrüstung und Geld → 20–23
6. Details → 24–26
7. Gruppe → 27
8. Zum Leben erwecken → 28
9. Steigerungen → 29
10. Bogen-Felder, die die neun Schritte nicht fragen → 30–39

### Siehe auch

- [Gespräch](../10-erschaffung-gespraech.md)
- [Checkliste](../12-erschaffung-checkliste.md)
- [Antworten-Index](../11-erschaffung-antworten.md)
- [Anfänger-Hilfe](../09-anfaenger-hilfe.md)
""",
)

add(
    "01-welt-und-voelker.md",
    """# Welt und Völker

Quelle: S. 24–29, 36. Primer: [Alte Welt](../../01-einfuehrung/03-die-alte-welt.md).  
Schritt 1. Bogen: `volk`, `bewegung`.

## Erklärung

Die Alte Welt ist ein Kontinent mit Königreichen, Wäldern, Gebirgen und Flüssen.
Die Demo spielt im **Reikland**, einer Provinz des Imperiums der Menschen.
Hauptstadt ist **Altdorf**. Imperator ist **Karl-Franz I.** Der Schutzgott der
Reikländer ist **Sigmar**, der das Imperium gegründet hat. Chaos und Magie
existieren; der Spielleiter bringt sie, wenn die Szene es braucht — nicht
beim Anlegen des Charakters.

Fünf Völker sind spielbar. Sie leben nebeneinander, oft misstrauisch.

**Mensch (Reikländer).** Die Mehrheit. Würfeltabelle 01–90. Überall im
Imperium: Stadt, Dorf, Fluss. Kurzlebig, ehrgeizig, oft Sigmar. Auswärts
gelten Reikländer als arrogant. Sie fallen der Korrumpierung leichter anheim
als Zwerge oder Elfen. Das ist der Default der Welt, nicht „langweilig“.

**Zwerg (Dawi).** Wehrstädte im Gebirge, eigene Viertel in Menschenstädten.
Ahnen, Ehre, Groll, Handwerk. Kein Zauberwirken im menschlichen Sinn —
Runen und Maschinen. Der **Bart ist Status**. Ein rasierter Zwerg wäre
eine Schande.

**Halbling.** Das Mootland und die Haffenstadt in Altdorf, Wirtshäuser, Höfe.
Essen, Verwandtschaft, wenig Privatsphäre. Oger respektieren sie oft. Sie
ehren menschliche Götter plus Hauskulte (Esmeralda). Klein, zäh, geschickt.

**Hochelf (Asur).** Ulthuan. Im Reikland Händler und Gesandte (Altdorf, Nuln).
Reserviert, langlebig, gilt als schön und arrogant. Alter Groll gegen Zwerge
(Bartkrieg). Sichtbar fremd.

**Waldelf (Asrai / Eonir).** Selten. Athel Loren oder Laurelorn. Isolation,
Wald, Krieg gegen Feinde des Waldes. Die meisten Reikländer haben nie einen
gesehen. Dieselben Elfen-Werte wie Hochelfen.

Vorurteile stehen als „Ansichten“ in den Völker-Originalen. Lies sie, bevor
du wählst — sie sind Spielstoff, nicht Deko.

## Wahl

Frei oder 1W100. Akzeptierst du den Zufall: **+20 EP**.

## Abgeleitet

Bewegung folgt: Mensch 4, Zwerg 3, Halbling 3, Elf 5. Nicht wählen.

### Siehe auch

- [Völker-Hub](../02-voelker-kurz.md)
- [Mensch](../voelker/mensch/original.md)
- [Leben im Reikland](../../07-reikland/04-leben-im-reikland.md)
- [Glauben](../../11-religion/04-glauben-bei-der-erschaffung.md)
- [Hub](README.md)
""",
)

add(
    "02-pnp.md",
    """# Pen-and-Paper, digital

Quelle: S. 6–8. **Nach** der Welt, nicht davor.  
Kein Bogen-Feld.

## Erklärung

Ein Pen-and-Paper-Rollenspiel ist ein **Gesprächsspiel**. Eine Person
beschreibt die Welt (Spielleiter, SL). Die anderen spielen je eine Figur
(Spielercharakter, SC). Zehnseitige Würfel (W10, zusammen W100) entscheiden
unsichere Handlungen. Es gibt kein „Game Over“-Menü und oft keinen
vorgeschriebenen Sieg.

Der Unterschied zum Computerspiel: kein festes Skript, keine vorgegebenen
Dialogbäume. Der SL improvisiert, wenn ihr etwas tut, das in keinem
Abenteuer steht. Das Buch erlaubt das (S. 6–8).

**Aufgabe des SL:** Welt beschreiben, Regeln anwenden oder bewusst
ignorieren (goldene Regel S. 149), NSC spielen, EP vergeben, sagen was
passiert.

**Aufgabe der Spieler:** sagen, was die Figur tut (Intention). Nicht den
Würfel des SL überspielen. Den Bogen pflegen.

Digitale Hilfsmittel helfen beim Anlegen, Würfeln und Rechnen. Sie ersetzen
weder SL noch Buch. Die Figur bleibt deine. „Avatar“ heißt hier
Spielercharakter — nicht Computerspiel-Ich.

Held oder Antiheld: beides legal. WFRP belohnt keine reinen Helden. Die
Demo (Greta, Otto, Kurt) sind Alltagsleute, keine Ritter. Antiheld heißt:
ehrgeizig, ängstlich, gierig — nicht „Chaos anbeten“.

Ohne grobe Idee: würfeln ist erlaubt und gibt EP. Mit Idee: wir prüfen,
ob Volk, Klasse und Karriere sie tragen.

Profession im nächsten Schritt = Klasse + Karriere.

### Siehe auch

- [Grundprinzip](../../01-einfuehrung/01-grundprinzip-des-spiels.md)
- [Hub](README.md)
""",
)

add(
    "03-klasse.md",
    """# Klasse

Quelle: S. 30–32. Hub: [Klasse und Karriere](../03-klasse-karriere-einfuehrung.md).  
Schritt 2. Bogen: `klasse`.

## Erklärung

Die Klasse ist der **soziale Herkunftsraum**, keine Computerspiel-Klasse
(kein Hit-Die, keine vorgegebene Rolle „Tank“). Sie begrenzt, welche acht
Karrieren dir offenstehen, und gibt einen groben Status-Korridor. Sie
begrenzt **nicht** die Würfel — ein Städter darf kämpfen, ein Soldat darf
feilschen.

Die acht:

| Klasse | Wer | Typischer Start |
|--------|-----|-----------------|
| Akademiker | Bildung als Brot | oft niedrig, Aufstieg möglich |
| Bürger | Stadt, meist gesetzestreu | Mittelschicht möglich |
| Flussvolk | Reik und Nebenflüsse | stets gering, Chancen |
| Freisassen | Straße zwischen den Orten | meist gering |
| Gesetzlose | illegal oder anrüchig | niedrig |
| Höflinge | herrschen oder dienen Herren | oft schon höher |
| Krieger | von der Waffe leben | hoch oder gering |
| Landvolk | Dorf, Hof, Wald | gering, lokaler Einfluss |

Kämpfen, handeln, forschen, reisen, führen ist eine **Richtung**, keine
Klasse. Körperlich oder geistig entscheidet die Karriere und die Werte.

Einfach zum Einstieg: Bürger / Städter. Komplex und Gerüst: Zauberer,
Priester — nicht Demo.

## Wahl

Eine der acht. Danach eine Karriere dieser Klasse, die dem Volk offensteht.

### Siehe auch

- [Karriere](04-karriere.md)
- [Status](05-status.md)
- [Hub](README.md)
""",
)

add(
    "04-karriere.md",
    """# Karriere

Quelle: S. 30–32, Karriereseiten.  
Schritt 2. Bogen: `karriere`, `karrierestufe`, `status`.

## Erklärung

Die Karriere ist der **Beruf jetzt**, nicht das ganze Leben. Jede hat vier
Stufen. Der **Stufe-1-Name** ist ein anderer und folgt aus der Seite —
nicht frei: Städter → Gehilfe, Kaufmann → Händler, Halunke → Schläger,
Bettler → Hungerleider.

Unterschied: Klasse = Milieu. Karriere = Job. Stufe = wie weit du in dem
Job bist.

An der Karriere hängen:

- die drei mit **+** markierten Werte (darauf die 5 freien Steigerungen)
- acht Startfähigkeiten (darauf 40 Punkte, max. 10 in diesem Block)
- vier Talente der Stufe (eines wählen)
- Status der Stufe
- Ausrüstung der Stufe

Vorteil: du weißt, wer du am Tag bist, was du darfst tragen, wen du duzt,
und wohin du aufsteigen kannst. Später Karrierewechsel (S. 48) — bei der
Erschaffung selten.

Ehrbar: Bürger, Höflinge, manches Landvolk. Zwielichtig: manches Flussvolk,
Freisassen. Gesetzlos: Klasse Gesetzlose. Magie und Glaube: Zauberer,
Priester, Hexer, Mystiker — Gerüst, außer ein Original liegt.

Verbotene Volk/Karriere-Kombination nur mit SL (S. 32).

## Wahl

Methode: ersten Wurf akzeptieren **+50 EP** · aus drei Würfen **+25 EP** ·
frei **0 EP**.

### Siehe auch

- [Klasse](03-klasse.md)
- [Stufe 1 Fähigkeiten](19-karriere-stufe-1.md)
- [Karrieren-Liste](../../03-klassen-karrieren/03-karrieren-liste.md)
- [Hub](README.md)
""",
)

add(
    "05-status.md",
    """# Status

Quelle: S. 49–52. [Status-System](../../03-klassen-karrieren/02-status-system.md).  
Schritt 2, folgt aus Stufe 1. Bogen: `status` (Rangwort + Zahl).

## Erklärung

Status sagt, **wer dich duzt** und was du in der Taverne zahlen kannst.
Drei **Ränge**:

- **Messing** — einfaches Volk, Arme, Kriminelle, Tagelöhner
- **Silber** — Stadt, Handwerk, Krämer, Akademiker, Wache
- **Gold** — Herrschende, Adel, sehr Reiche

Dazu eine Zahl **Ansehen** 0–5 (manchmal höher). Gold schlägt Silber
schlägt Messing **immer**. Bei gleichem Rangwort zählt die Zahl.

Beispiele: Bettler Messing 0 — Wache und Krämer behandeln dich als Dreck,
Betteln ist leichter. Greta Silber 1 — Lohn, möbliertes Zimmer, duzt die
Wache nicht, wird aber nicht aus dem Laden geworfen. Otto Silber 2 —
besserer Händler als Greta, immer noch unter jedem Gold. Adel Gold —
Türen, Kredit, Anführen-Boni.

Wer Status nutzen will, muss sich so **kleiden und verhalten**. Inkognito
oder schmutzige Kleidung: oft Messing 3, egal was auf dem Bogen steht.
Lebensstil nicht bezahlt → Ansehen sinkt, bei 0 sinkt der Rang.

Würfe (Buch): höherer Rang oft +10/+20 Anführen, +10 Charme/Einschüchtern;
niedriger −10 Charme; Klatsch −10 bei ungleichem Rang; Betteln oft umgekehrt.

## Wahl

Keine. Folgt aus Karrierestufe 1.

### Siehe auch

- [Rang](07-rang.md)
- [Währung](06-waehrung.md)
- [Startgeld](22-startgeld.md)
- [Hub](README.md)
""",
)

add(
    "06-waehrung.md",
    """# Währung

Quelle: S. 288, Preise S. 302–303.  
Kein eigenes Bogen-Feld außer `geld_g` / `geld_s` / `geld_gk`.

## Erklärung

Es gibt **keine Pfennige**. Drei Münzen:

- **Groschen (G)** — Messing
- **Schilling (S)** — Silber
- **Goldkrone (GK)** — Gold

12 Groschen = 1 Schilling. 20 Schilling = 1 Goldkrone. 1 GK = 240 G.

Alltag (ungefähr):

| Ware | Preis |
|------|-------|
| Bier | 3 G |
| Essen im Gasthaus | 1 S |
| Lebensmittel / Tag | 10 G |
| Rationen / Tag | 2 S |
| Gemeinschaftsunterkunft / Nacht | 10 G |
| Zimmer / Nacht | 10 S |
| Dolch | 16 S |
| Handwaffe | 1 GK |
| Kleidung | 6 S |
| Hut | 4 S |

Lebenshaltung: etwa die **Hälfte des Status pro Tag** in der Statuswährung.
Silber 4 → etwa 2 S/Tag. Messing 1 → 1 G/Tag. Wer das nicht zahlt, lebt
unter seinem Status — das Ansehen sinkt.

Ein gewöhnlicher Bürger (Silber, Städter) hat ein paar Schillinge, keinen
Goldbeutel.

### Siehe auch

- [Startgeld](22-startgeld.md)
- [Status](05-status.md)
- [Einkauf](../../08-einkauf/01-ausruestung-preise.md)
- [Hub](README.md)
""",
)

add(
    "07-rang.md",
    """# Rang (die Zahl)

Quelle: S. 49–52.  
Teil von `status`.

## Erklärung

Die **Zahl** ist Ansehen *innerhalb* von Messing, Silber oder Gold — nicht
der Rangname selbst.

Silber 2 (Otto) ist ein „besserer Bürger“ als Silber 1 (Greta). Beide stehen
unter **jedem** Gold, auch Gold 1. Messing 5 bleibt unter Silber 1.

Höhere Zahl: mehr Kredit beim Krämer, teurerer erwarteter Lebensstil, mehr
Verantwortung, standesgemäß zu leben. Fällst du darunter, sinkt die Zahl.

Die Startgeld-Formel nutzt genau diese Zahl, nicht das Wort Messing/Silber/Gold.

### Siehe auch

- [Status](05-status.md)
- [Startgeld](22-startgeld.md)
- [Hub](README.md)
""",
)

add(
    "08-attribute.md",
    """# Die zehn Attribute

Quelle: S. 33–34. Hub: [Attribute](../04-attribute.md).  
Schritt 3. Bogen: `kg` `bf` `st` `wi` `i` `gw` `gs` `in` `wk` `ch`.

## Erklärung

Frage zuerst, ob eine Erklärung nötig ist. Wer Attribute aus Computerspielen
kennt: ähnliche Idee, andere Skala. Hier ist **30** ein durchschnittlicher
Mensch, **40** kennt man in der Gasse, **60+** die Besten ihres Fachs.
Du würfelst W100 **unter** den Wert (plus Steigerungen, plus/minus Schwierigkeit).

Niedrig in einem Wert heißt nicht unspielbar. 25 KG als Gehilfe ist normal;
sie schlägt nicht die Wache, und muss es nicht.

| Wert | Alltag | Hängt daran |
|------|--------|-------------|
| **KG** Kampfgeschick | Prügelei, Messer, Wache | Nahkampf |
| **BF** Ballistische Fertigkeit | Bogen, Wurf, Jagd | Fernkampf (Ausbau) |
| **ST** Stärke | Schaden, Heben, Klettern | STB, Traglast, Klettern, Schwimmen |
| **WI** Widerstand | Regen, Gift, Saufen, LP | 2×WIB in LP, Ausdauer, Zechen |
| **I** Initiative | Reihenfolge, merken dass der Dolch kommt | Wahrnehmung, Intuition |
| **GW** Gewandtheit | Rennen, Reiten, Ausweichen | Athletik, Schleichen, Ausweichen |
| **GS** Geschicklichkeit | Hände: Handwerk, Beutel, Schloss | Beruf, Fingerfertigkeit, Schlösser |
| **IN** Intelligenz | Preise, Lügen, Karte, Magie verstehen | Wissen, Heilen, Schätzen, Sprache |
| **WK** Willenskraft | Angst, Fokus, Beeinflussung | WKB in LP, Besonnenheit, Magie |
| **CH** Charisma | reden, feilschen, anführen | Charme, Feilschen, Anführen, Beten |

Karriere-wichtig sind die drei mit **+** (ohne Stufen-Hintergrund). Darauf
die [5 freien Steigerungen](11-fuenf-steigerungen.md).

## Wahl

Würfe behalten **+50 EP** · tauschen **+25 EP** · neu würfeln oder 100 Punkte
(je 4–18) **0 EP**. Danach [Volks-Modifikator](10-volks-modifikator.md).

### Siehe auch

- [KG](../attribute/kg/original.md) · [BF](../attribute/bf/original.md) · [ST](../attribute/st/original.md) · [WI](../attribute/wi/original.md) · [I](../attribute/i/original.md)
- [GW](../attribute/gw/original.md) · [GS](../attribute/gs/original.md) · [IN](../attribute/in/original.md) · [WK](../attribute/wk/original.md) · [CH](../attribute/ch/original.md)
- [W100](09-w100.md)
- [Hub](README.md)
""",
)

add(
    "09-w100.md",
    """# W100

Quelle: S. 149–153. [Würfel](../../05-regeln/01-wuerfel-und-grundmechanik.md).  
Kein Bogen-Feld. UI später.

## Erklärung

W100 sind **zwei zehnseitige Würfel**: einer für die Zehner, einer für die
Einer. Beide 0 = 100. Du würfelst **gegen eine Zielzahl**. Zielzahl =
Spielwert + Fähigkeits-Steigerungen ± Schwierigkeit. Wurf **kleiner oder
gleich** Ziel = Erfolg.

01–05 gelingt immer (mindestens +1 Erfolgsgrad). 96–00 misslingt immer
(höchstens −1 Erfolgsgrad). Pasch = gleiche Ziffern (11, 22, 33, …) — oft
kritisch, je nach Regelstelle.

Der Modifikator ändert den **Zielwert**, nicht den Würfel. Schwierigkeit
reicht von sehr einfach (+60) über durchschnittlich (**+20**, Alltag) und
herausfordernd (±0) bis sehr schwer (−30).

Erfolgsgrade (EG) = Zehnerstelle der Zielzahl minus Zehnerstelle des Wurfs.

Beispiel: Feilschen 45, durchschnittlich +20 → Ziel 65. Wurf 27 → EG +3
(6 − 2). „65 von 100 gehen gut“ reicht im Gespräch.

## UI (nicht jetzt bauen)

Visuelle Anzeige: Balken oder 10×10-Feld, zwei Würfel, Zielzahl markieren,
Erfolg und Patzer farblich. Wizard später. Im Gespräch reicht das Beispiel.

### Siehe auch

- [Attribute](08-attribute.md)
- [Hub](README.md)
""",
)

add(
    "10-volks-modifikator.md",
    """# Volks-Modifikator

Quelle: S. 24–29, 33. Tabelle: [Attribute](../04-attribute.md).  
Nach den Attributwürfen.

## Erklärung

Die zehn Würfe (oder die 100 Punkte) sind noch nicht die Spielwerte.
Jedes Volk addiert einen anderen Sockel.

**Mensch:** überall 2W10+20 — der eine Wurf *ist* schon der Sockel.

**Zwerg:** KG, WI, GS +30; WK +40; GW und CH nur +10. Hart, stur, unbeholfen
in Gesellschaft und auf der Flucht.

**Halbling:** BF, GS, CH +30; KG und ST nur +10. Gut mit der Hand und dem
Mund, schlecht in der Prügelei.

**Elf (Hoch- und Waldelf):** Initiative +40, viele Werte +30, Charisma +20.
Schnell, wach, nicht die stärksten Stemmer.

Ohne diesen Schritt sind die Zahlen falsch. Danach erst die
[5 freien Steigerungen](11-fuenf-steigerungen.md).

### Siehe auch

- [Völker](01-welt-und-voelker.md)
- [Hub](README.md)
""",
)

add(
    "11-fuenf-steigerungen.md",
    """# Fünf freie Wert-Steigerungen

Quelle: S. 34.  
Nach Volks-Modifikator. Bogen: +1 in `kg`…`ch` (nur die drei +).

## Erklärung

Du darfst **fünfmal +1** auf Attribute legen. Eine Steigerung = +1 auf
diesen Spielwert.

Nur auf die **drei mit + markierten Karrierewerte**. Nicht auf die anderen
sieben. Nicht auf die Stufen-Hintergrundwerte — die stehen weiter hinten
auf der Karriereseite und zählen erst, wenn du die Stufe hast.

Beispiel Städter: die drei + der Stufe 1 (typisch GW, IN, CH — siehe
Originalseite). Alle fünf Punkte dürfen auf eines, oder 2/2/1, oder 3/1/1.
Nicht auf KG, nur weil du kämpfen willst — dafür ist die Karriere nicht
gekennzeichnet.

Das ist keine EP-Ausgabe. EP-Steigerungen kommen in Schritt 9.

### Siehe auch

- [Attribute](08-attribute.md)
- [Karriere](04-karriere.md)
- [Hub](README.md)
""",
)

add(
    "12-schicksal.md",
    """# Schicksal und Glück

Quelle: S. 170–171. [Schicksal & Zähigkeit](../../05-regeln/06-schicksal-zaehigkeit.md).  
Schritt 3. Bogen: `schicksal`, `glueck`. Befehl im Spiel: `glueck`, `schicksal`.

## Erklärung

Schicksal ist **Bestimmung** — wie oft das Schlimmste dich nicht holt.
Glück sind die verbrauchbaren Punkte, die daraus folgen.

Start laut Volk: Mensch 2, Zwerg 0, Halbling 0, Elf 0. Zusätzliche Punkte
(Mensch 3, Zwerg 2, Halbling 3, Elf 2) verteilst du auf Schicksal **oder**
Zähigkeit. Glück startet = aktuelles Schicksal.

**Glück ausgeben** (kommt zurück, meist zu Beginn des Spielabends):

- einen misslungenen Wurf wiederholen
- nach dem Würfeln +1 Erfolgsgrad
- am Rundenanfang entscheiden, wann du am Zug bist

**Schicksal ausgeben** (kommt fast nie zurück):

- **Nein, nicht heute** — du fällst bewusstlos aus der Szene, stirbst nicht
- **Wie konnte das verfehlen** — der Schaden trifft dich absurd nicht

Glück zuerst. Schicksal ist die letzte Tür.

### Siehe auch

- [Zähigkeit](13-zaehigkeit.md)
- [Hub](README.md)
""",
)

add(
    "13-zaehigkeit.md",
    """# Zähigkeit und Mut

Quelle: S. 170–171. [Schicksal & Zähigkeit](../../05-regeln/06-schicksal-zaehigkeit.md).  
Schritt 3. Bogen: `zaehigkeit`, `mut`. Befehl: `mut`, `zaehigkeit`.

## Erklärung

Zähigkeit ist **Entschlossenheit** — durchhalten, wenn Körper oder Seele
einknicken. Mut sind die verbrauchbaren Punkte.

Start laut Volk: Mensch 1, Zwerg 2, Halbling 2, Elf 0. Extra-Punkte aus
dem Volkspaket auf Schicksal **oder** Zähigkeit (nicht beide aus demselben
Punkt). Mut startet = aktuelle Zähigkeit.

**Mut ausgeben** (kommt über [Motivation](14-motivation.md) zurück, wenn
du sie ausspielst):

- bis zum Ende der nächsten Runde immun gegen Psychologie
- kritische Verletzungs-Modifikatoren ignorieren
- **einen** Zustand entfernen (bei Niedergestreckt zusätzlich +1 LP)

**Zähigkeit ausgeben** (selten, fast permanent):

- **Ich trotze Euch** — keine Mutation, keine Korrumpierungspunkte
- **Ich werde nicht scheitern** — Wurfergebnis selbst wählen

### Siehe auch

- [Schicksal](12-schicksal.md)
- [Motivation](14-motivation.md)
- [Zustände](31-zustaende.md)
- [Hub](README.md)
""",
)

add(
    "14-motivation.md",
    """# Motivation

Quelle: S. 34, 171.  
Schritt 3. Bogen: `motivation`.

## Erklärung

Ein Wort oder ein kurzer Satz, der die Figur **antreibt**. Wenn du sie
in der Szene ausspielst, kommt **Mut** zurück.

Das ist **nicht** das kurz- oder langfristige Ziel aus Schritt 6. Ziele
geben EP, wenn du sie erreichst. Motivation gibt Mut, wenn du danach
handelst.

Leitfragen (der Spieler antwortet, wir speichern ein Wort): Was gäbe er
nie auf? Wofür Risiko? Was fürchtet oder liebt er? Wer oder welche Idee
gibt Kraft? Warum steht er morgens auf?

Beispiele: nicht wieder auf der Straße · der nächste Handel · Respekt in
der Gasse · die Familie ernähren · nie wieder Hunger · das Buch zu Ende
schreiben · Rache aufschieben · Sigmars Tempel sehen.

Demo: Greta „nicht wieder auf der Straße“. Otto „der nächste Handel“.
Kurt „Respekt in der Gasse“.

## Wahl

Frei. Eigenen Text oder Beispiel. Leer lassen ist schlecht — Mut käme
nicht zurück.

### Siehe auch

- [Ziele](26-ziele.md)
- [Zähigkeit](13-zaehigkeit.md)
- [Hub](README.md)
""",
)

add(
    "15-lp-max.md",
    """# Lebenspunkte und andere Abgeleitete

Quelle: S. 34. Bogen: `lp_max`, `lp`, `stb`…`chb`, `glueck`, `mut`.

## Erklärung

Du wählst diese Zahlen nicht. Sie folgen aus den Werten.

**Bonus** = Zehnerstelle des Werts. ST 32 → STB 3. Die Boni speicherst du
nicht extra, außer als Cache auf dem Bogen.

**Lebenspunkte (LP)** messen, wie viel Verletzung du aushältst, bevor du
umfällst. Formel:

LP-Max = STB + (2 × WIB) + WKB

Halblinge und das Talent Zierlich: **ohne STB**. Kleiner Körper, weniger
Masse.

Aktuelle LP starten = Maximum. Im Spiel sinken sie durch Schaden, Gift,
Zustände. Bei 0 bist du kampfunfähig / bewusstlos — Details im Kampfkapitel.

Glück startet = Schicksal. Mut startet = Zähigkeit. Bewegung folgt aus
dem Volk.

### Siehe auch

- [Attribute](08-attribute.md)
- [Traglast](23-traglast.md)
- [Hub](README.md)
""",
)

add(
    "16-faehigkeit-und-talent.md",
    """# Fähigkeit und Talent

Quelle: S. 35–36, 118–148.  
Schritt 4.

## Erklärung

Eine **Fähigkeit** ist ein geübtes Feld an einem Spielwert. Beispiel:
Klettern hängt an Stärke. ST 38 plus 8 Steigerungen = Wurf 46.

Ein **Talent** ist eine Sonderregel, kein zweiter Wurf. Etikette gilt nur
in *einer* sozialen Gruppe. Verhandlungsgenie ändert den Preis, nicht den
Charme-Wurf allein.

**Grundfähigkeit:** jeder darf würfeln, auch mit 0 Steigerungen — auf den
nackten Wert. Charme ohne Punkt: ja, du darfst reden. Wahrnehmung ohne
Punkt: ja, du darfst hinsehen.

**Ausbaufähigkeit:** ohne mindestens 1 Steigerung illegal. Dazu gehören
Lesen und Schreiben, Fernkampf, Sprachen außer Reikspiel, Magie,
Beruf. Lesen ist kein Volksrecht — wer es nicht hat, kann das Schild
nicht entziffern.

**Steigerung** = +1 auf den Wurf dieser Fähigkeit.

**Reikspiel** kann jeder im Imperium. Nicht wählen, nicht steigern müssen,
um sich zu verständigen.

Talent bei „oder“: eines, nicht beide umsonst.

### Siehe auch

- [Zufällige Talente](17-zufaellige-talente.md)
- [Spezialisierung](18-spezialisierung.md)
- [Stufe 1](19-karriere-stufe-1.md)
- [Startauswahl](../05-faehigkeiten-talente-start.md)
- [Hub](README.md)
""",
)

add(
    "17-zufaellige-talente.md",
    """# Zufällige Talente

Quelle: S. 36.  
Nur wenn die Volksliste es sagt. Mensch: dreimal.

## Erklärung

Manche Völker (vor allem Menschen) würfeln zusätzliche Talente. Mensch:
**dreimal** die Tabelle auf S. 36.

Das kann nützlich sein (Glückspilz) oder schräg (Blaublütig als Gehilfe).
Beides ist spielbar. Nicht frei durch Wunsch ersetzen — der Zufall ist
der Punkt.

**Doppel:** fällt dasselbe Talent noch einmal, **neu würfeln**. Nicht
behalten (kein zweites Mal desselben Talents aus dieser Tabelle) und
nicht „dann nehme ich lieber X“.

Andere Völker: nur wenn ihre Liste „zufälliges Talent“ nennt.

### Siehe auch

- [Fähigkeit und Talent](16-faehigkeit-und-talent.md)
- [Mensch](../voelker/mensch/original.md)
- [Hub](README.md)
""",
)

add(
    "18-spezialisierung.md",
    """# Spezialisierung

Quelle: S. 118, jeweilige Fähigkeit.  
Schritt 4.

## Erklärung

Gruppierte Fähigkeiten sind **mehrere Felder**, nicht eines. Du steigst
eine Spezialisierung.

Nahkampf *Standard* (Dolch, Handwaffe, die üblichen Waffen) ist nicht
Nahkampf *Waffenlos* und nicht Nahkampf *Zweihand*. Sprache *Bretonisch*
ist nicht *Ödländisch*. Etikette braucht eine Gruppe: *Dienstboten*,
*Adel*, *Kriminelle*, *Gilde* — ohne die Gruppe gilt das Talent nicht
wo du es brauchst.

Ohne die verlangte Spezialisierung, wo das Buch eine verlangt, gilt die
Fähigkeit **nicht**. „Ich habe Nahkampf 10“ ohne Standard hilft nicht am
Dolch.

Handwerksgeschick / Beruf: das Handwerk nennen (Krämer, Schreiber, …).

### Siehe auch

- [Nahkampf](../../04-faehigkeiten-talente/faehigkeiten/nahkampf/angepasst.md)
- [Etikette](../../04-faehigkeiten-talente/talente/etikette/details.md)
- [Hub](README.md)
""",
)

add(
    "19-karriere-stufe-1.md",
    """# Karriere Stufe 1 — 40 Punkte und ein Talent

Quelle: S. 35, 48.  
Schritt 4. Bogen: Fähigkeits-Steigerungen, ein Talent.

## Erklärung

Die Karriereseite nennt acht Startfähigkeiten. Darauf verteilst du
**40 Steigerungen**. In **diesem Block** höchstens 10 auf eine Fähigkeit.

Die 10 gelten nicht gegen schon geholte Volks-Punkte. Volk +5 und Karriere
+10 auf dieselbe Fähigkeit = 15, das ist erlaubt, weil die 10 nur den
Karriere-Block deckeln.

40 Punkte reichen für 8×5. Das ist später Voraussetzung, die Stufe
abzuschließen und aufzusteigen (S. 48). Wer alles in zwei Fähigkeiten
steckt, steigt schlechter auf.

Dazu **ein** Talent aus den vier der Stufe 1. Spezialisierung wo nötig
(Etikette Dienstboten, Handwerksgeschick …). Erst wählen, wenn klar ist,
wann es in der Szene greift — nicht den Namen, der „stark klingt“.

### Siehe auch

- [Fähigkeit und Talent](16-faehigkeit-und-talent.md)
- [Karriere](04-karriere.md)
- [Hub](README.md)
""",
)

add(
    "20-ausruestung.md",
    """# Ausrüstung — zwei Pakete

Quelle: S. 37–38. [Ausrüstung](../06-ausruestung-details.md).  
Schritt 5. Bogen: Inventar, `waffe_gefuehrt`.

## Erklärung

Du bekommst **zwei Pakete**, nicht ein Wunsch-Inventar.

**Klassen-Paket** = Alltag, was jeder aus diesem Milieu am Leib hat.

- Akademiker: Kleidung, Dolch, Beutel, Tasche + Schreibzeug + 1W10 Pergament
- Bürger: Kleidung, Umhang, Hut, Dolch, Beutel, Tasche + Mahlzeit
- Flussvolk: u. a. Schnapsflasche
- Freisassen: Rucksack, Zünder, Decke, Ration
- Gesetzlose: [Gugel oder Maske](21-gugel-oder-maske.md), Dolch, Kerzen, Zündhölzer
- Höflinge: Edle Gewandung, Pinzette, Ohrlöffel, Kamm
- Krieger: Handwaffe, Dolch
- Landvolk: Ration

**Karriere-Paket Stufe 1** steht auf der Karriereseite. Städter: möbliertes
Zimmer, feste Stiefel, und was die Seite nennt. Das **Zimmer bleibt in der
Stadt**, es liegt nicht im Rucksack.

Inventar = was du **trägst**. Dolch in der Stadt ist normal. Eine
**Handwaffe** (1 GK, Krieger-Paket) sieht die Wache — das ist legal für
Krieger, auffällig für Gehilfen. Gambeson ist keine Ritterplatte.

Optional Kapitel 11 vor Spielbeginn einkaufen. Die Demo kann das lassen.

### Siehe auch

- [Startgeld](22-startgeld.md)
- [Traglast](23-traglast.md)
- [Geführte Waffe](34-gefuehrte-waffe.md)
- [Hub](README.md)
""",
)

add(
    "21-gugel-oder-maske.md",
    """# Gugel oder Maske

Quelle: Klassenpaket Gesetzlose, S. 37.  
Nur Klasse Gesetzlose.

## Erklärung

Gesetzlose wählen **eines** von beiden, nicht beides umsonst.

**Gugel.** Kapuze, unauffällig auf der Straße. Verdeckt Haar und teilweise
das Gesicht, ohne dass die Wache sofort „Maske, festnehmen“ denkt. Gut
für Halunken, die durch die Stadt müssen.

**Maske.** Klar gesetzlos. Nützt, die Identität zu verbergen (Überfall,
Einschüchtern, Ranald). Die Wache sieht Absicht. In der Taverne aufsetzen
ist eine Ansage.

Kurt (Halunke) in der Demo: eher Gugel, wenn er tagsüber bei Greta in der
Gasse steht; Maske, wenn die Frist nachts zuschlägt.

### Siehe auch

- [Ausrüstung](20-ausruestung.md)
- [Hub](README.md)
""",
)

add(
    "22-startgeld.md",
    """# Startgeld

Quelle: S. 37. Bogen: `geld_g`, `geld_s`, `geld_gk`.

## Erklärung

Die Formel nutzt den **Rang** (die Zahl), nicht das Wort Messing/Silber/Gold.

| Statusrang | Formel |
|------------|--------|
| Messing | 2W10 × Rang **Groschen** |
| Silber | 1W10 × Rang **Schilling** |
| Gold | 1 × Rang **Goldkrone** |

Beispiele: Greta Silber **1** → 1W10 Schilling. Otto Silber **2** → 2W10
Schilling. Messing 3 → 6W10 Groschen. Gold 1 → 1 Krone.

**Hungerleider** (Bettler Stufe 1) ist Messing **0** → **0 Geld**. Das ist
kein Fehler.

Optional davon noch einkaufen (Kapitel 11). Die Demo kann das lassen.

Es gibt keine Pfennige. Keys: Groschen `geld_g`, nicht `geld_d`.

### Siehe auch

- [Währung](06-waehrung.md)
- [Rang](07-rang.md)
- [Hub](README.md)
""",
)

add(
    "23-traglast.md",
    """# Traglast

Quelle: S. 293, 301. Abgeleitet. Bogen: `traglast`, `traglast_max`.

## Erklärung

Traglast ist die Summe der Tragpunkte deines Inventars. Die Obergrenze
ist STB + WIB. Talente wie Stämmig oder Starker Rücken können heben.

Ein Rucksack zählt **am Körper** (S. 301) — er macht das Tragen leichter
als lose Bündel, aber er ist nicht unsichtbar für die Grenze.

Über Max: Abzüge, langsamer, SL entscheidet. Du wählst die Zahl nicht.

Das möblierte Zimmer hat 0 Traglast, weil es nicht im Rucksack liegt.

### Siehe auch

- [Ausrüstung](20-ausruestung.md)
- [LP und Boni](15-lp-max.md)
- [Hub](README.md)
""",
)

add(
    "24-alter-aussehen.md",
    """# Alter, Größe, Augen, Haar, Name

Quelle: S. 38–40. [Ausrüstung und Details](../06-ausruestung-details.md).  
Schritt 6. Bogen: `name`, `alter`, `groesse`, `augen`, `haar`, `gemuet`, `herkunft`.

## Erklärung

Kosmetik. Würfeln oder wählen, beides legal.

**Name.** Mensch: Vor- und Nachname (Adhemar, Beatrix; Bauer, Schmidt,
von …). Zwerg: Vorname plus Familie/Klan (-sson, -sdottir). Elf: Generator
S. 39. Halbling: Geburtsname plus Klan, oft Kurzform (Anni, Max); Klane
Graufeld, Brandyschluck.

**Alter**

| Mensch | Zwerg | Elf | Halbling |
|--------|-------|-----|----------|
| 15+W10 | 15+10W10 | 30+10W10 | 15+5W10 |

Ein Mensch startet also oft mit 16–25. Ein Elf mit 40–130 wirkt neben
Greta alt, ist für Elfen jung.

**Körpergröße** (metrisch). Fällt eine 10, extra W10 addieren.

| Mensch | Zwerg | Elf | Halbling |
|--------|-------|-----|----------|
| 150 + (2W10 × 2,5) cm | 130 + (W10 × 2,5) cm | 180 + (W10 × 2,5) cm | 100 + (W10 × 2,5) cm |

**Augen** 2W10, Tabelle im Buch. Elfen würfeln **zweimal** (gemischte
Farben). **Haar** 2W10. Außer Elfen ergrauen die Völker.

**Gemüt.** Ein freier Satz, keine Tabelle. Offen lassen ist erlaubt.
Ambitionen = die zwei Ziele, nicht Gemüt.

**Herkunft** füllst du in den [zehn Fragen](28-zehn-fragen.md) — wer die
Welt nicht kennt, bekommt eine Karte / Ortsliste, nicht eine leere Zeile.

### Siehe auch

- [Bart](25-bart.md)
- [Ziele](26-ziele.md)
- [Hub](README.md)
""",
)

add(
    "25-bart.md",
    """# Bart

Quelle: Völker (Zwerg), S. 38–40. Optional.

## Erklärung

Optional bei **Mensch** und **Zwerg**, mit Farbe. Keine Pflichttabelle.

Bei **Zwergen** ist der Bart Status und Ehre. Rasieren wäre Schande —
steht in den Ansichten und im Zwerg-Original. Ein zwergischer Slayer
rasiert sich aus anderen Gründen die Haare, nicht den Ehrenbart zum Spaß.

Halblinge bartlos. Elfen selten; ein bärtiger Elf wäre auffällig und
kein Default.

Farbe frei oder an die Haarfarbe koppeln.

### Siehe auch

- [Alter und Aussehen](24-alter-aussehen.md)
- [Zwerg](../voelker/zwerg/original.md)
- [Hub](README.md)
""",
)

add(
    "26-ziele.md",
    """# Ziele — kurz, lang, geheim

Quelle: S. 41. Schritt 6. Bogen: `ziel_kurz`, `ziel_lang`, `ziel_geheim`.

## Erklärung

Drei verschiedene Dinge, plus die [Motivation](14-motivation.md) aus
Schritt 3.

**Kurzfristiges Ziel.** Tage bis Wochen, mindestens zwei bis drei Abende
Spiel. Wenn erreicht: **+50 EP**. Beispiele: die Miete · den Stand halten ·
die Wache beruhigen · die Schuld bei Otto · ein Wort an die Herrin · den
nächsten Handel · nicht auffliegen.

**Langfristiges Ziel.** Monate, Jahre oder nie. Wenn erreicht: **+500 EP**
oder der Charakter geht zur Ruhe. Beispiele: eigenes Haus · Gildemeister ·
die Familie aus dem Messing holen · nie wieder dienen.

**Geheim (Ruchlose Pläne, S. 41).** Du darfst ein Ziel vor der Gruppe
verbergen. Der Spielleiter kennt es. Erlaubt, nicht Pflicht. Nicht
verwechseln mit Chaos — ruchlos heißt hier eigennützig, peinlich oder
kriminell, nicht „ich bete die Vier an“.

Motivation holt Mut. Ziele holen EP. Nicht dasselbe Feld.

### Siehe auch

- [Motivation](14-motivation.md)
- [Gruppe](27-gruppe.md)
- [Hub](README.md)
""",
)

add(
    "27-gruppe.md",
    """# Gruppe

Quelle: S. 41, 44. Schritt 7. Bogen: `gruppe_name`, `gruppe_ziel_kurz`, `gruppe_ziel_lang`, Begleiter.

## Erklärung

Ihr kennt euch schon, **oder** der Spielleiter führt euch im ersten
Abenteuer zusammen. Beides ist Buch.

Beispiele, wie ihr euch kennt: gleiche Gasse · dieselbe Flussbarke ·
derselbe Tempel · Basar · eine gemeinsame Schuld · die Wache hat euch
in denselben Keller gesperrt.

**Gruppenname** steht auf dem Bogen (S. 44). Nützlich, nicht Pflicht.

**Gruppenziele** sind nicht die persönlichen Ziele. Sie dürfen sich
ergänzen, sollen nicht identisch sein. Kurzfristig +50 EP für alle,
langfristig +500 oder Ruhestand.

Spannungen sind erlaubt (Otto will Handel, Kurt will Respekt, Greta will
die Miete). Permanente Kehlerei sprengt den Tisch.

Demo: Greta Städterin/Gehilfe Silber 1, Otto Kaufmann/Händler Silber 2,
Kurt Halunke/Schläger. [Flags und Bindungen](37-flags-bindungen.md) können
die drei schon verknüpfen.

### Siehe auch

- [Ziele](26-ziele.md)
- [Zehn Fragen](28-zehn-fragen.md)
- [Hub](README.md)
""",
)

add(
    "28-zehn-fragen.md",
    """# Zehn Fragen — zum Leben erwecken

Quelle: S. 42. Schritt 8. Bogen: `herkunft`, `gott`, optional `psychologie`.

## Erklärung

Zehn Fragen, frei oder mit dem Spielleiter. **Keine Mauer** — drei reichen
zum Start. Währenddessen Fähigkeiten nochmal ändern: das Buch erlaubt das.

Wer die Welt nicht kennt, kann Frage 1 nicht frei beantworten. **Karte
oder Ortsliste zeigen** (Reikland: Altdorf, Übersreik, Bögenhafen, Reik,
Dorf, Waldsaum). Interaktive Karte ist UI später. Bis dahin:
[Leben im Reikland](../../07-reikland/04-leben-im-reikland.md).

1. **Woher kommst du?** Füllt `herkunft`.
2. **Wie ist deine Familie?** Gilde, Dienst, niemand mit Silberstatus,
   Klan (Zwerg/Halbling), Sippe tot oder weit weg.
3. **Wie war deine Kindheit?** Stadtlärm, Tempel, Fluss, Waldsaum —
   an Herkunft koppeln.
4. **Warum hast du dein Zuhause verlassen?** Lohn, Schuld, Wache,
   Handel, Auftrag, Langeweile.
5. **Wer sind deine besten Freunde?** Die Gruppe, die Gasse, niemand
   Zuverlässiges.
6. **Was ist dein größter Wunsch?** Darf das langfristige Ziel wiederholen.
7. **Schönste und schlimmste Erinnerung?** Ein Bild, kein Aufsatz.
8. **Religiöse Überzeugungen?** Liste der zehn Konklave-Götter.
   Default-Angebot Sigmar, **nicht automatisch**. Füllt `gott`.
   [Glauben](../../11-religion/04-glauben-bei-der-erschaffung.md)
9. **Wem oder welcher Sache gegenüber loyal?** Gilde, Blut, wer zahlt,
   niemand.
10. **Warum ziehst du los, um Abenteuer zu erleben?** Geld, Flucht,
    Auftrag, die anderen ziehen schon, die Frist.

Muster Demo (nicht erzwingen): Greta Altdorfer Gasse / Dienst; Otto Markt;
Kurt die Gasse. Glaube: Sigmar am Feiertag, Ranald wenn niemand hinschaut.

Option: eine psychologische Eigenschaft (S. 190). Die meisten starten ohne.
Danach: Bonus-EP ausgeben? → [Schritt 9](29-steigerungen-ep.md).

### Siehe auch

- [Gruppe](27-gruppe.md)
- [Psychologie](39-psychologie.md)
- [Hub](README.md)
""",
)

add(
    "29-steigerungen-ep.md",
    """# Steigerungen (Bonus-EP)

Quelle: S. 43, 48. Schritt 9, optional.

## Erklärung

Ausgeben ist erlaubt, nicht Pflicht. Sparen heißt: nach der ersten Szene
weißt du, was die Gruppe wirklich würfelt.

Nur die **aktuelle Karrierestufe**: die drei Werte, die acht Fähigkeiten,
die vier Talente. Nichts außerhalb.

Kosten (S. 43):

- Werte, Steigerungen 0–5: **25 EP** je
- Fähigkeiten: **10 EP** je Steigerung
- Talent: **100 + 100 × schon gelernt** (erstes 100, zweites 200, …)

Karrierewechsel bei der Erschaffung selten: 100 EP wenn die Stufe
abgeschlossen ist, 200 wenn nicht, +100 wenn andere Klasse.

EP-Quellen bis hier: Volk 0 oder 20 · Karriere 0 / 25 / 50 · Attribute
0 / 25 / 50. Maximum ohne Sonderoptionen: **120 EP** vor Spielbeginn.

### Siehe auch

- [Fünf Wert-Steigerungen](11-fuenf-steigerungen.md) (das sind keine EP)
- [Karriere](04-karriere.md)
- [Hub](README.md)
""",
)

add(
    "30-vorteile.md",
    """# Vorteile (Kampf)

Quelle: S. 164–166. [Vorteile](../../05-regeln/03-vorteile.md).  
Nicht in den neun Schritten wählen. Bogen: `vorteile`.

## Erklärung

Vorteile sind die **Oberhand im Kampf**. Marker (Münzen, Chips). Du
bekommst sie, wenn du den Gegner triffst, ausmanövrierst, überraschst,
einen Sturmangriff landest. Du verlierst sie, wenn du einen Zustand
erlidest — **sofort alle**.

v1-Obergrenze = Initiative-Bonus. Start **0**. Du wählst sie nicht bei
der Erschaffung.

Das Feld auf dem Bogen ist leer, bis die erste Kampfrunde sie füllt.
Kein Fehler.

### Siehe auch

- [Zustände](31-zustaende.md)
- [Hub](README.md)
""",
)

add(
    "31-zustaende.md",
    """# Zustände

Quelle: S. 167–169. [Zustände](../../05-regeln/05-zustaende.md).  
Nicht wählen. Bogen: `zustaende`.

## Erklärung

Zustände sind Effekte, die dir im Abenteuer zustoßen: Blutend, Erschöpft,
Niedergestreckt, Bewusstlos, Brennend, … Gleicher Zustand **stapelt**
(3× Blutend = 3 LP/Runde). Unterschiedliche Zustände: der schwerere
Modifikator zählt, nicht die Summe aller Abzüge.

Jeden Zustand, den du erleidest, löscht **sofort alle Vorteile**.

Mut kann einen Zustand entfernen. Deshalb sind Zustände hart, aber nicht
das Ende.

Start **leer**. Die Erschaffung vergibt keine.

### Siehe auch

- [Vorteile](30-vorteile.md)
- [Zähigkeit](13-zaehigkeit.md)
- [Liste](../../05-regeln/zustaende/README.md)
- [Hub](README.md)
""",
)

add(
    "32-korrumpierung.md",
    """# Korrumpierung und Mutation

Quelle: S. 182–183. [Korrumpierung](../../05-regeln/11-korrumpierung.md).  
Nicht wählen. Bogen: `korrumpierung`, `mutationen`.

## Erklärung

Korrumpierungspunkte messen, wie nah die Seele dem **Chaos** kommt. Zu
viele führen zu Mutation und Verderbnis.

Du kannst Punkte bekommen durch dunkle Pakte (Wurf noch einmal wiederholen),
Anblick von Dämonen, Warpstein, Mutanten, Verzweiflung, Zorn, Exzess.
Zähigkeit kann das verhindern (**Ich trotze Euch**).

**Keine offene Spielerwahl** bei der Erschaffung. Chaosgötter sind kein
Häkchen auf dem Bogen. Start 0 / leer.

Menschen fallen leichter als Zwerge oder Elfen — steht im Volk, ist kein
Startwert.

### Siehe auch

- [Zähigkeit](13-zaehigkeit.md)
- [Sünde](36-suende.md)
- [Hub](README.md)
""",
)

add(
    "33-ruestung-zonen.md",
    """# Rüstung je Zone

Quelle: S. 45, 299–301.  
Nicht in den neun Schritten wählen, außer getragene Rüstung aus dem Paket.
Bogen: `rp_kopf` `rp_arm_r` `rp_arm_l` `rp_koerper` `rp_bein_r` `rp_bein_l` `rp_schild`.

## Erklärung

Der Charakterbogen zeigt eine **Silhouette** (S. 45). Trefferzonen am
W100: Kopf 01–09, Waffenarm, Schildarm, Körper 45–79, Beine. RP
(Rüstungspunkte) gelten nur, wo Rüstung sitzt.

Start **0**. Eine Krieger-Handwaffe ist keine Rüstung. Lederrüstung oder
Gambeson aus einem Paket tragen, wo sie sitzen — dann die RP dort, nicht
überall.

Schild hat ein eigenes Feld. Details Gerüst, bis Waffen/Rüstung
Volltext haben.

### Siehe auch

- [Geführte Waffe](34-gefuehrte-waffe.md)
- [Bogen](../../00-BOGEN.md)
- [Hub](README.md)
""",
)

add(
    "34-gefuehrte-waffe.md",
    """# Geführte Waffe

Quelle: S. 44–45, 158. Bogen: `waffe_gefuehrt`.

## Erklärung

Was **in der Hand** ist, nicht alles im Gürtel. Darf der Dolch aus dem
Klassenpaket sein, oder die Handwaffe der Krieger.

Ziehen ist in v1 eine freie Handlung (`waffe_ziehen`). In der Stadt den
Dolch führen ist normal. Die Handwaffe führen sieht die Wache.

Start: oft der Dolch. Leer, wenn beide Hände frei sind.

### Siehe auch

- [Ausrüstung](20-ausruestung.md)
- [Befehlsregister Kampf](../../10-system/06-befehle.md)
- [Hub](README.md)
""",
)

add(
    "35-zauber-gebete.md",
    """# Zauber und Gebete

Quelle: Kapitel 7–8. Gerüst. Bogen: `zauber_gebete`.

## Erklärung

Nur Karrieren, die Magie oder Kult **wirklich** können: Priester,
Kriegerpriester, Zauberer, Hexer, Mystiker. Die Demo (Greta, Otto, Kurt)
startet **leer**.

Ein Gott auf dem Bogen (`gott`) ist noch kein Gebet. Glauben ohne Amt:
[Glauben bei der Erschaffung](../../11-religion/04-glauben-bei-der-erschaffung.md).

Volltext der Zauber kommt, wenn die Karrieren Originale haben. Bis dahin
nicht erfinden.

### Siehe auch

- [Sünde](36-suende.md)
- [Zehn Fragen, Glaube](28-zehn-fragen.md)
- [Hub](README.md)
""",
)

add(
    "36-suende.md",
    """# Sünde

Quelle: Bogen-Rückseite, Magie/Glaube. Bogen: `suende`.

## Erklärung

Feld auf der **Rückseite** des Charakterbogens. Es zählt, wenn Magie oder
göttliche Missgunst ins Spiel kommen — nicht für Städterin Greta am
ersten Abend.

Start **0**. Keine Wahl bei der Erschaffung, außer der SL eine Magie-Karriere
anlegt (Gerüst).

Nicht dasselbe wie [Korrumpierung](32-korrumpierung.md) (Chaos) und nicht
dasselbe wie ein schlechtes [geheimes Ziel](26-ziele.md).

### Siehe auch

- [Zauber und Gebete](35-zauber-gebete.md)
- [Hub](README.md)
""",
)

add(
    "37-flags-bindungen.md",
    """# Flags und Bindungen

Quelle: Projekt (Die Frist), nicht Buch-Pflicht. Bogen: `flags`, `gebunden_mit`.

## Erklärung

Projektfelder. **Flags** sind Haken der Geschichte (Frist, Schuld, die
Wache kennt dein Gesicht). **Bindungen** verknüpfen Spielercharaktere
(`gebunden_mit`: Greta–Otto–Kurt in der Demo).

Start **leer**, außer der Spielleiter setzt sie bewusst. Die Erschaffung
fragt sie nicht in den neun Schritten — nach der Gruppe dürfen sie fallen.

Kein Buchzwang. Nicht mit Etikette oder Psychologie verwechseln.

### Siehe auch

- [Gruppe](27-gruppe.md)
- [Hub](README.md)
""",
)

add(
    "38-karriereweg.md",
    """# Karriereweg

Quelle: Charakterbogen S. 344. Bogen: `karriereweg`.

## Erklärung

Auf dem gedruckten Blatt gibt es Zeilen für den **Weg** durch die
Karrieren: welche Stufe du hattest, wohin du gewechselt bist. Bei der
Erschaffung ist das die aktuelle Karriere, oft leer für die Zukunft.

Start: aktuelle Karriere / leer. Wird im Spiel gefüllt, wenn jemand
aufsteigt oder wechselt (S. 48).

War in unserem Schema eine Lücke, jetzt ein Feld.

### Siehe auch

- [Karriere](04-karriere.md)
- [Steigerungen](29-steigerungen-ep.md)
- [Bogen](../../00-BOGEN.md)
- [Hub](README.md)
""",
)

add(
    "39-psychologie.md",
    """# Psychologie

Quelle: S. 190. [Psychologie](../../05-regeln/13-psychologie.md).  
Bogen: `psychologie`. Option in Schritt 8.

## Erklärung

Phobie, Freundschaft, Loyalität, Hass — Regeln, die Würfe zwingen oder
verbieten. Das Buch bietet an, bei der Erschaffung **eine** zu wählen.
Die meisten starten ohne.

Nicht dasselbe wie Gemüt (freier Satz) und nicht dasselbe wie Motivation
(Mut). Eine Phobie vor Ratten ist eine Regel; „ängstlich“ im Gemüt ist
Flavour.

Mit dem Spielleiter absprechen. Demo startet ohne.

### Siehe auch

- [Zehn Fragen](28-zehn-fragen.md)
- [Motivation](14-motivation.md)
- [Hub](README.md)
""",
)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, body in FILES:
        path = OUT / name
        path.write_text(body, encoding="utf-8")
        print(path.relative_to(ROOT), "bytes", path.stat().st_size)
    print("files", len(FILES))


if __name__ == "__main__":
    main()
