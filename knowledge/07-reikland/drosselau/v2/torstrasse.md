# Torstraße — V2 vollständig

**Weg · Abend** · [Regeln](../BESCHREIBUNGSREGELN.md) · [Entitäten](../entitaeten.md) · [Erste Stunde](../../../10-system/18-erste-stunde.md)

`ORT_TORSTRASSE`. Offen. Eine Gasse, neun Häuser. Graf nicht hier. Engine zieht niemanden.

Am Tisch gilt weiter: `offen` aus [looks-drosselau.ts](../../../../src/lib/wfrp/looks-drosselau.ts), Lage nach Wurf, Absicht, eigener W100. Diese Datei ist die Bibliothek.

---

## 1. Epische Spielerbeschreibung

Nasser Stein unter den Sohlen. Der Geruch von Pferdeharn, der sich nicht verzieht. Das Stadttor im Rücken, der Bogen tropft. Eine Laterne brennt noch am Schild des Wanderers, das Schild hängt schief.

Links das Zollhaus, die Luke halb im Schatten. Daneben der Gasthof, dann Dampf aus der Bäckerei, ein Spalt bei der Fleischerei, in einer Scheibe Seile und kleine Sigmar-Amulette. Nr. 8 dunkel. Nr. 9 der Brunnen, der Rand nass.

Vorstadt hinter euch, Marktplatz voraus, Bettelgasse zur Seite. Fünf stehen unter dem Torbogen. Niemand hat sie hereingewunken.

Ein Mann in der wollenen Jacke der Stadt kann hier stehen, wenn der Spielleiter ihn setzt. Helm unter dem Arm. Der Riemen der Handwaffe ist zu. Er zählt Lippen, nicht Augen.

Das Letzte, worauf man handeln kann: er will Namen, Herkunft, Waffen offen.

---

## 2. Spielerwahrnehmungen

Öffentlich, sobald die Gasse offen ist — ohne Wurf: Stein, Harn, Tor, Zollhaus, Wanderer, Bäckerei, Fleischerei, Kram, Wege.

Nach Umschauen, privat:

| Lage | Was |
|------|-----|
| grob | Jacke, Riemen, nasser Stein, Luke fällt |
| teil | Häuser links in Reihe, Wege, der Mann zählt Lippen, Ecke zur Bettelgasse nass ohne Gestalt |
| voll | Luke einen Spalt, Kreide heutiger Tross, keine zweite Wache, Laib nicht Kuchen, nasser Lappen, Nr. 8 dunkel, Brunnen, die fünf schon im Buch |
| scharf | Kreide feucht, Stift in der Luke, Lappen = Kinderhemd, Frau hinter Nr. 8 kurz, er braucht Namen weil die Schrift ihn deckt |

Gerüche: Harn, Brot, nasse Wolle, Tinte am Zoll.  
Geräusche: Tropfen am Bogen, Ofen, später Stille wenn die Tür des Wanderers fällt.  
Ereignis jetzt: Torwache prüft — nur wenn der SL gezogen hat.

---

## 3. Handlungsmöglichkeiten

Karten, nicht eine zweite Leiste. Hier sinnvoll:

| Karte | Warum hier |
|-------|------------|
| Reden | Die Frage hängt. Namen. |
| Umschauen | Die Gasse, die Luke, die Ecke. |
| Einschätzen | Haltung der Wache. |
| Gehen | Vorstadtring, Markt, Bettelgasse, ein Haus betreten. |
| Abwarten | Die Frist hält. |
| Gerüchte | Am Wanderer, nicht am Zoll zuerst. |
| Handeln / Kaufen | Bäckerei, Fleischerei, Kram, Wanderer — SL sagt ob offen. |
| Schleichen | Ecke Bettelgasse, hinter dem Bogen. |
| Waffe ziehen | Eskaliert. Helm hat den Riemen zu. |
| Bitte an den SL | Alles andere. |

Grau bleibt Grau. Taschendiebstahl, Klettern, Arbeiten: Bitte, der SL knüpft an eine Fertigkeit.

---

## 4. Ortsverzeichnis

| ID | Typ | Besitzer | Zweck | Besonderes | Geheimnis |
|----|-----|----------|-------|------------|-----------|
| `ORT_TORSTRASSE-1` | Amt | Stadtwache | Zoll, Prüfung | Torbuch, Luke | zweites Blatt Merkmale |
| `ORT_TORSTRASSE-2` | Gasthaus | Krug | Durchreisende, Bier | nicht die Taverne | Name auf dem Brett durchgestrichen |
| `ORT_TORSTRASSE-3` | Laden+Wohnung | Laib | Brot | Ofen vor der Frist an | Sack ohne Zunftsiegel |
| `ORT_TORSTRASSE-4` | Laden | Metz | Fleisch | Jan Geselle | blanker Haken, fett frisch |
| `ORT_TORSTRASSE-5` | Wohnung | Karr | Fuhr | Schuppen am Ring | Frachtzettel Altdorf, durchgerissen |
| `ORT_TORSTRASSE-6` | Wohnung | Staub | — | ärmer als Karr | Rudi war am Zoll vor den fünf |
| `ORT_TORSTRASSE-7` | Laden | Docht | Kram, Amulette | Amulette ungeweiht | Liste anderer Hand |
| `ORT_TORSTRASSE-8` | Wohnung | Helm | — | Fenster aufs Zollhaus | zweiter Schlüssel, kleiner |
| `ORT_TORSTRASSE-9` | Brunnen | Stadt | Wasser | öffentlich | Ritz fünf Striche |

Öffnungszeiten setzt der SL. Nacht: Laterne am Wanderer, Luke, Ofen.

---

## 5. NPC-Verzeichnis

Nur ziehen, nicht spawnen.

| ID | Alter | Beruf | Aussehen / Halt | Ziel am Tor | Geheimnis | Quest |
|----|-------|-------|-----------------|-------------|-----------|-------|
| `NPC_ARNE-HELM` | 38 | Torwache | Wolle, Helm unterm Arm, Riemen zu | Namen, Waffen, keine Mutation sichtbar | kennt die Gasse und Janna Stube, sagt es nicht | `KEIM_ZOLL-MUTATION` |
| `NPC_DORA-HELM` | 35 | — | Nr. 8, kann im Spalt stehen | Mann kommt zum Essen nicht | Finn hat die fünf gezählt | — |
| `NPC_FINN-HELM` | 7 | Kind | Kleid am Nagel | — | zählt vom Fenster | — |
| `NPC_DETLEF-KRUG` | 43 | Wirt | Silber 1 | Zimmer, Zapfen | Flasche ohne Etikett | — |
| `NPC_MARA-KRUG` | 39 | Küche | hörbar, nicht vorn | — | — | — |
| `NPC_BEN-KRUG` | 13 | Zapfer | — | — | — | — |
| `NPC_GERD-LAIB` | 41 | Bäcker | Mehl, Hitze | Laibe | Mehl knapp | — |
| `NPC_HANNE-LAIB` | 38 | Bäckerin | — | — | — | — |
| `NPC_LINA-LAIB` | 10 | Kind | Luke, nicht Teig | hat den Torbogen gesehen | — | — |
| `NPC_KONRAD-METZ` | 45 | Metzger | oft nicht vorn | — | — | — |
| `NPC_RITA-METZ` | 42 | — | zählt nicht laut | — | — | — |
| `NPC_JAN-METZ` | 17 | Geselle | Schürze | Theke | — | — |
| `NPC_HANNES-KARR` | 40 | Fuhr | Peitsche in der Stube | Tross | Zettel Altdorf | — |
| `NPC_BERTA-KARR` | 37 | — | — | Kinder | — | — |
| `NPC_ULF-KARR` | 14 | — | — | — | — | — |
| `NPC_MINA-KARR` | 8 | — | — | — | — | — |
| `NPC_RUDI-STAUB` | 35 | Tagelöhner | Lehm am Saum | — | Lehm wie an Arnes hinterer Tür | — |
| `NPC_NADJA-STAUB` | 32 | — | — | — | — | — |
| `NPC_KILIAN-STAUB` | 9 | — | — | — | — | — |
| `NPC_FINE-STAUB` | 5 | — | — | — | — | — |
| `NPC_EWALD-DOCHT` | 37 | Krämer | Wachs, Hanf | Amulette | Liste hinter Fach | — |
| `NPC_SIGRID-DOCHT` | 34 | — | — | — | — | — |

Persönlichkeit Arne: kurz, zählt, deckt sich mit Schrift. Nicht freundlich, nicht grausam. Bürger.

Tagesablauf Arne (Notiz): Zollhaus bei Tag, Nr. 8 bei Nacht, isst oft nicht. SL setzt, wo er ist. Nicht doppelt.

---

## 6. Objektverzeichnis

| ID | Zustand | Nutzung | Wer | Interaktion |
|----|---------|---------|-----|-------------|
| `OBJ_TORBOGEN` | tropft | Eingang | Stadt | durchgehen, schon geschehen |
| `OBJ_LATERNE-WANDERER` | brennt noch | Licht | Krug | sehen |
| `OBJ_SCHILD-WANDERER` | schief | Name | Krug | lesen |
| `OBJ_LUKE-ZOLL` | Spalt, fällt | Sicht, Kreide | Helm | Umschauen |
| `OBJ_TORBUCH` | Zeile der fünf, Namen leer | Amt | Helm | nur mit Erlaubnis oder scharf |
| `OBJ_KREIDE` | feucht, heutiger Tross | Striche | Helm | scharf |
| `OBJ_STIFT-LUKE` | im Spalt | schreiben | Helm | scharf |
| `OBJ_ZWEITES-BLATT` | Merkmale nicht Namen | still | Helm | nur scharf oder SL |
| `OBJ_KASSE-ZOLL` | ärmer als der Tag | Groschen | Helm | stehlen = Bitte, Eskalation |
| `OBJ_HANDWAFFE-HELM` | Riemen zu | Drohung | Helm | nicht gezogen |
| `OBJ_NASSER-LAPPEN` | Kinderhemd | Ecke Bettelgasse | ? | scharf |
| `OBJ_BRUNNEN-TOR` | Rand glatt, trinkbar | Wasser | Stadt | trinken, Ritz scharf |
| `OBJ_RITZ-FUENF` | frisch, kein Kreide | Zählen | ? | scharf |
| `OBJ_AMULETTE-DOCHT` | Guss, nicht geweiht | Verkauf | Docht | kaufen |
| `OBJ_FRACHTZETTEL-ALTDORF` | durchgerissen | vor der Sperre | Karr | Nr. 5 scharf |
| `OBJ_LISTE-DOCHT` | andere Hand als Arne | Namen am Tor | Docht | Fach zu |
| `OBJ_SCHLUESSEL-HELM-KLEIN` | unter dem Nagel | nicht Zoll | Helm | Nr. 8 scharf |
| `OBJ_KARR-WAGEN` | am Ring, nicht hier | Fracht | Karr | Vorstadtring 3 |

---

## 7. Wege und Übergänge

| ID | Ziel | Verkehr | Risiko | Begegnung |
|----|------|---------|--------|-----------|
| `WEG_RING-TOR` | Vorstadtring | weich, Dreck | außerhalb der Mauer | Hütten, Schuppen |
| `WEG_TOR-MARKT` | Marktplatz | Pflaster, Reifen | offener Platz | Gilde, Tempel, Rat |
| `WEG_TOR-BETTEL` | Bettelgasse | nass, eng | Armut, Clique | nasser Lappen an der Ecke |
| Haus→Gasse | jeweilige Nr. | eine Tür | SL öffnet innen | Bewohner nur gezogen |

Entfernung: zu Fuß, eine Frist reicht für die Gasse, nicht für die Stadt.

---

## 8. Versteckte SL-Informationen

- Arne allein in dieser Stunde. Kein zweiter Mann.
- Mutation/Waffen: Keim, kein Automat. Der SL sagt, was zählt.
- Kasse ärmer als ein Zolltag. Jemand hat genommen, oder der Tross zahlt schlecht.
- Zweites Blatt: Narben, Gang, der Zwerg extra. Truck steht schon als Merkmal, nicht als Name.
- Dora/Finn wissen von den fünf, bevor jemand anklopft.
- Rudi Staub trug Lehm wie Arnes hintere Tür — Verbindung Ring oder nicht, SL.
- Janna Stube und Arne kennen einander. Nicht am Tor sagen.
- Ritz am Brunnen: fünf Striche, bevor Arne rauskam. Wer zählte?
- Kinderhemd an der Ecke: nicht Fetzen. Wessen Kind.
- Keine Skaven hier als Fakt. Kein zweiter Wächter erfinden.

---

## 9. Weltzusammenhänge

```
Laib (Brot) → Wanderer, Helm, Staub
Metz (Fleisch) → Wanderer, wer Silber hat
Docht (Amulette) → Reisende am Tor
Karr (Wagen) → Ring-Schuppen → Altdorf-Zettel, Sperre
Stahl (nicht an dieser Gasse) → Wache, Waffen
Helm Dienst → Zollhaus; Helm Wohnen → Nr. 8
Feder (Markt 5) → Siegel, nicht hier
Talbeck (Markt 6) → nimmt Meldung, wenn Arne sie macht
Stube (Schlemmer) → Arne kennt Janna
Bettelgasse → Lappen, Clique, Hanni will Ecke
```

---

## 10. Abenteueransätze

Klein, aus der Gasse, still bis der SL zieht:

1. Die Namen ins Torbuch — die Frage, die hängt.
2. Das Kinderhemd — wem gehört es, warum nass, warum die Ecke.
3. Der Ritz am Brunnen — wer zählte fünf, bevor Helm trat.

Neben:

1. Frachtzettel Altdorf in Nr. 5 — wer riss, was nicht durch das Tor sollte.
2. Liste hinter Dochts Fach — andere Hand als Arne, dieselben fünf?
3. Sack ohne Siegel hinterm Ofen — Mehl, oder nicht.

Groß, nur wenn der SL die Stadt so legt:

Die Prüfung am Tor ist die erste Schicht einer Sperre, die der Graf nicht erklärt. Siegel bei Feder, Kontor leer, Trossbuch, zweites Blatt. Nicht „die Kampagne“, bis du es ziehst.

---

## 11. Gerüchte

Nur SL. Karte Gerüchte holt sie nicht allein.

| Art | Satz |
|-----|------|
| wahr | Die Wache am Tor ist in dieser Stunde einer. |
| wahr | Zum Wanderer ist nicht die Taverne in der Schlemmergasse. |
| halb | Der Zwerg wird extra gezählt, weil das Buch Merkmale will, nicht weil Helm ihn hasst. |
| halb | Am Brunnen hat jemand die Ankunft schon eingekerbt. |
| falsch | Hinter dem Tor steht ein zweiter Mann mit Armbrust. |
| falsch | Die Amulette bei Docht sind geweiht. |

---

## 12. Dynamische Ereignisse (Notiz, kein Tick)

Wenn niemand handelt und der SL Zeit vergehen lässt:

**1 Stunde.** Arne wartet weiter. Die Laterne am Wanderer brennt. Der Ofen bleibt an. Die Frage rostet, sie verschwindet nicht. Luke kann fallen.

**1 Tag.** Das Torbuch hat eine Zeile ohne Namen oder mit. Laib verkauft, was er hat. Talbeck kann eine Meldung verlangen, wenn Arne eine schreibt. Finn erzählt in der Gasse, fünf seien dagewesen.

**1 Woche.** Gerücht: Spione, Mutanten, oder bloß arme Teufel. Helm enger. Krug erinnert Gesichter. Die Stadt bleibt zu. Niemand ist nach Altdorf.

Die Engine zählt das nicht. Der SL sagt, welcher Satz gilt.

---

## 13. IDs dieser Gasse

Alle oben. Einstieg für den Tisch: `ORT_TORSTRASSE`, `NPC_ARNE-HELM`, `KEIM_ZOLL-MUTATION`, `OBJ_TORBUCH`.

Nächste Gasse in V2 erst, wenn du sie öffnest. Die Looks der übrigen Häuser liegen schon fest — die dreizehn Kästen noch nicht.
