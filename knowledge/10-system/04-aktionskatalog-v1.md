# Aktionskatalog v1 – als „implementiert“ für Simulationen

**Weg · Gerät 2/4** · [Wege](../00-WEGE.md) · [← Datenmodell](02-datenmodell.md) · [data/ →](../data/README.md)

Nur Aktionen, die aus bereits extrahierten Regeln ableitbar sind. 
Kosten: **F** frei · **B** Bewegung · **H** Handlung

## Immer (wenn bei Bewusstsein und nicht *Niedergestreckt*/*Betäubt*)

| ID | Label | Kosten | Fähigkeit | Szene |
|----|-------|--------|-----------|-------|
| umschauen | Umschauen | H | Wahrnehmung | beide |
| intuition | Einschätzen | H | Intuition | beide |
| reden | Ansprechen / Verhandeln | H | Charme | sozial |
| feilschen | Handeln | H | Feilschen | Handel |
| kaufen | Kaufen (Verfügbarkeit, dann Feilschen) | H | — / Feilschen | Handel |
| bestechen | Bestechen | H | Bestechen | sozial |
| einschuechtern | Einschüchtern | H | Einschüchtern | sozial |
| klatsch | Gerüchte | H | Klatsch / CH | sozial |
| schleichen | Schleichen | B/H | Schleichen | beide |
| gehen | Ort verlassen | B | — | wenn Ausgang existiert |
| warten | Abwarten | H | — | beide |
| glueck | Glückspunkt: Wurf wiederholen | F | Ressource | nach eigenem Wurf |
| mut | Mutpunkt: 1 Zustand weg / Psych-Immun / Krit-Mods ignorieren | F | Ressource | wenn Zustand oder Psych |
| schicksal | Schicksal opfern (nicht sterben / Szene überleben) | F | Ressource | bei Tod/ausweglos |
| zaehigkeit | Zähigkeit: Wurf wählen oder Mutation vermeiden | F | Ressource | selten |

## Nur Kampf (gebunden oder Feind in Sicht)

| ID | Label | Kosten | Fähigkeit |
|----|-------|--------|-----------|
| angreifen | Angreifen (geführte Waffe / waffenlos) | H | Nahkampf |
| sturmangriff | Sturmangriff | B+H | Nahkampf |
| ausweichen | Attacke ausweichen | (Verteidigung) | Ausweichen |
| loesen | Aus Bindung lösen | H | Ausweichen/Nahkampf oder Vorteilsvorsprung |
| fliehen | Fliehen | B | Athletik + Freie Attacke des Gegners |
| sprinten | Sprinten | H | Athletik |
| waffe_ziehen | Waffe ziehen | F (v1-Annahme) | — |
| volle_abwehr | Nur verteidigen | H | Ausweichen/Nahkampf |

## Zustandsabhängig

| Bedingung | Extra-Aktion |
|-----------|----------------|
| *Niedergestreckt* | nur `aufstehen` oder kriechen |
| *Betäubt* | keine Handlung, halbe Bewegung |
| *Bewusstlos* | keine Spieleraktion |
| *Blutend* | `heilen_lassen` wenn Heiler/NSC da |
| LP 0 | `schicksal` oder bewusstlos werden |

Nicht in v1: Magie, Gebete, Ringen, Fernkampf ohne Waffe, Beruf, Heilen selbst (der Spielercharakter hat die Ausbaufähigkeit nicht).
