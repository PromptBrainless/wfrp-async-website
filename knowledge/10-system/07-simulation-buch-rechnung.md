# Simulation Basar + Rauferei – Buchrechnung

Die Erzählung bleibt [03-simulation-basar-rauferei.md](03-simulation-basar-rauferei.md). 
Die Zahlen für die Engine stehen in [../data/simulation-trace.json](../data/simulation-trace.json).

Maschine: EG nach S. 152, Feilschen nach S. 291, Sturmangriff nach S. 165, Vorteile-Verlust nach S. 164.

## Was sich gegenüber dem Walkthrough ändert

| Tick | Walkthrough | Buch |
|------|-------------|------|
| Umschauen 41 vs 27 | +1 EG | **+2 EG** |
| Reden 45 vs 62 | −1 EG, Standardwurf | **−2 EG**; Default wäre Vergleich vs. Ottos Besonnenheit 36 |
| Feilschen 47/33 vs 50/71 | +1 vs −2, Preis 5 S | finale **+3 EG**, Preis **5 S 5 G** (−10 %) |
| Sturmangriff | 31 vs 38, dann Vorteil | Vorteil **vorher**, Ziel **41** vs KG 38 |
| ein Schläger trifft der Spielercharakter | der Spielercharakter behält 2 Vorteile | **Vorteile 0**, weil LP verloren |

Erfolg/Misserfolg der sozialen Würfe bleiben gleich. Der Kampf-Walkthrough ist ab Kurts Gegenschlag **keine legale Zustandskette** mehr.

## Karriere

der Spielercharakter „Krämerin Stufe 1, Silber 1“ = **Städter / Gehilfe** (S. 67). 
Kaufmann Stufe 1 ist Händler Silber 2 – das ist ein Händler näher als der Spielercharakter.

## Pflicht für die Engine

Nach jedem eigenen Wurf: Glück-Fenster als eigener Tick. 
Nach jedem LP-Verlust oder Zustand: Vorteile = 0, dann neu zählen.

### Siehe auch
- [Simulation vs. Buch](05-simulation-vs-buch.md)
- [Datenmodell](02-datenmodell.md)
- [Städter](../03-klassen-karrieren/05-buerger.md)
