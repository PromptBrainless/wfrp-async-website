# Initiative und Überraschung

Quelle: S. 156–158; Zustand *Überrascht* S. 169

Kampf braucht Reihenfolge. Außerhalb des Kampfes sind Runden optional (erweiterte Würfe, S. 154).

## Zeit

- **Runde:** wenige Sekunden. Jeder Kombattant hat einen Zug.
- **Zug:** eine **Bewegungsaktion** und eine **Handlung**, beliebige Reihenfolge, auch als ein Manöver beschrieben. Verzichten erlaubt; vor der nächsten Runde keine neue Gelegenheit.
- **Freie Handlung (S. 158):** SL entscheidet. Faustregel: alles, was einen Wurf braucht, ist **keine** freie Handlung. Beispiele Buch: Warnung rufen, Waffe ziehen, Trank trinken. v1: `waffe_ziehen` = frei.

## Kampfablauf (S. 156)

1. Überraschung bestimmen (üblich nur Runde 1).
2. Anfang der Runde (alles, was „am Anfang der Runde“ steht).
3. Züge in Initiative-Reihenfolge, höchste zuerst.
4. Ende der Runde.
5. Schritte 2–4 wiederholen, bis Flucht oder Niederlage.

## Initiative-Reihenfolge (S. 156–157)

Default: fester **Initiative-Wert**, absteigend. Gleichstand → Gewandtheit absteigend. Dann Vergleichender GW-Wurf, Gewinner entscheidet, wer in **diesem Kampf** zuerst zieht.

Beispiel Buch: Tollich I 38, Kultisten 35, Perdita 33.

### Option: auswürfeln (S. 157, nicht v1-Default)

Eine wählen:

- Initiative-Wurf, EG bestimmen
- 1W10 + Initiative
- 1W10 + GWB + IB

Reihenfolge für den ganzen Kampf (schnell) oder jede Runde neu.

v1-Default: fester I-Wert, Obergrenze Vorteile = IB (Buch-Option S. 164).

## Überraschung (S. 157–158)

Wer den Angriff plant, kann Überraschung versuchen:

- **Verstecken:** Schleichen in Deckung. Vergleich Wahrnehmung, wenn vorsichtig oder SL gnädig.
- **Hinterhältige Taktiken:** von hinten, Dunkel, Nebel, von oben. SL darf Wahrnehmung zum Entdecken erlauben.
- **Ablenkung:** Lärm, Menge, Predigt.
- **Unvorbereitete Verteidiger:** automatisch überrascht.
- **Sonstiges:** SL hat das letzte Wort.

Typischer Resolver: Vergleich **schlechtestes Schleichen der Hinterhältigen** gegen Wahrnehmung aller, die etwas merken könnten. Wer verliert: Zustand *Überrascht*.

Talent *Kampfsinn* (Beispiel S. 158): herausfordernd (+0) Wahrnehmung, um Überraschung zu vermeiden — selbst wenn der SL sonst keine Entdeckungschance setzt.

*Überrascht* mit einem **Mutpunkt** sofort weg (S. 157, 169).

### Zustand *Überrascht* (S. 169)

- Keine Bewegung, keine Handlung, keine Verteidigung in Vergleichen.
- Gegner im Nahkampf: +20 auf den Trefferwurf.
- Nicht kumulativ.
- Ende: Ende der Runde **oder** nach dem ersten Angriffsversuch gegen dich.
- Überraschte Gegner attackieren: +1 Vorteil (S. 164).

## Asynchron

Initiative bleibt die Zugreihenfolge **innerhalb** der Auflösung. Spieler setzen Intentionen in ihrem Tick; die Engine arbeitet die Züge I-absteigend ab, sobald alle relevanten Intentionen da sind oder die Frist sitzt.

### Befehl

- kein eigener Katalogeintrag — setzt die Reihenfolge für alle Kampf-IDs
- `schleichen` / `umschauen` können Überraschung vorbereiten oder verhindern
- `mut` entfernt *Überrascht*

### Siehe auch

- [Kampf – Übersicht](02-kampf-uebersicht.md)
- [Vorteile](03-vorteile.md)
- [Zustände](05-zustaende.md)
- [Bewegung im Kampf](08-bewegung-im-kampf.md)
- [Angreifen](07-angreifen-schaden.md)
- [Hilflos und Überzahl](15-hilflos-ueberzahl.md)
- [Schleichen](../04-faehigkeiten-talente/faehigkeiten/schleichen/angepasst.md)
- [Wahrnehmung](../04-faehigkeiten-talente/faehigkeiten/wahrnehmung/angepasst.md)
- [Befehlsregister](../10-system/06-befehle.md)
