# Leben — der Chat als Tisch

**Weg · Abend 3/6** · [Wege](../00-WEGE.md) · [← Das Spiel](00-das-spiel.md) · [Journal →](12-journal-und-log.md)

Am Gerät: vier Türen unten — **Tisch · Blatt · Journal · Pult**. Der Chat ist der Tisch. Würfel und Absicht liegen im Faden.

Stand: 2026-09-08. 
Quellen: GRW 2. Auflage S. 6–7, 149–155, 156–159, 171, 259–262; [00-das-spiel.md](00-das-spiel.md); [09-spielumgebung-vtt.md](09-spielumgebung-vtt.md); [01-wuerfel-und-grundmechanik.md](../05-regeln/01-wuerfel-und-grundmechanik.md); [04-kritische-treffer.md](../05-regeln/04-kritische-treffer.md); [01-kernrollen-des-SL.md](../06-spielleiter/01-kernrollen-des-SL.md).

Dieses Blatt ist die verbindliche Beschreibung des **Mediums**. Es ändert den Loop nicht. Es sagt, wie die Szene erscheint, nicht was legal ist. Autorität bleibt das Buch. Was legal ist, steht in [00-das-spiel.md](00-das-spiel.md) und im [Datenmodell](02-datenmodell.md). Bibliothek, Journal und Bildsprache haben eigene Blätter: [11-bibliothek.md](11-bibliothek.md), [12-journal-und-log.md](12-journal-und-log.md), [13-bildsprache.md](13-bildsprache.md).

---

## 1. Was „ein richtiger Chat“ hier heißt

Die Frist ist kein gemeinsamer Abend. Der Spieler kommt Stunden später zurück, liest, handelt, geht wieder. Der Chat ist deshalb kein Strom aus freien Zeilen, sondern das **Ereignisprotokoll der Szene**, gelesen wie eine Bildgeschichte: jede Nachricht ein Beat. Oben das Standbild der Karte, darunter der Faden, unten die Arbeit.

Am physischen Tisch schaut man auf drei Dinge nacheinander: die Karte (wo bin ich), die Gesichter und den SL (was geschieht), den eigenen Bogen (was kann ich). Digital liegen dieselben drei Dinge untereinander, nicht nebeneinander als VTT-Kampfbrett. Die Karte bleibt ein liebevolles Standbild. Der Faden trägt die Zeit. Die Arbeit trägt die Wahl.

Eine Nachricht hat immer denselben Bau:

- ein Stempel aus dem Icon-Satz (Welt, Ort, Person, Waffe, Fund, Wurf, Ereignis, Journal, SL, Intention),
- optional ein Portrait des Sprechers,
- Titel und Satz in der Welt,
- wenn gewürfelt wurde: die volle Rechnung, nicht nur das Urteil.

Spieler dürfen eine kurze Zeile zur Aktionskarte schreiben. Freier WhatsApp-Text ohne Karte ist die Bitte „Freitext“ an den SL, keine Handlung. Der SL bindet sie an oder lehnt sie ab, genau wie im Buch (Spieler sagen, was sie tun; der SL entscheidet, ob und wie gewürfelt wird).

Ein Thread gehört zu **einer Szene**. Die Kampagne hat viele Szenen. Das Journal der Kampagne trägt die Fäden zwischen ihnen, damit der Rückkehrer nicht raten muss, was gestern in der Gasse geschah.

Das Anti-Ziel „reiner Chat“ aus [00-das-spiel.md](00-das-spiel.md) bleibt. Ein Messenger, in dem zehn Leute Romane schreiben und niemand auflöst, ist nicht dieses Spiel. Der Chat hier ist Möbel des Tisches, nicht Ersatz für den SL.

---

## 2. Was das Medium nicht ist

Es ist kein Live-Video, kein gemeinsames Token-Schieben, kein dynamisches Licht. Es ist kein Dungeon-Hub, in dem Spieler frei Level wählen und die Engine Begegnungen spawnt. Es ist kein Würfelautomat, der den Ausgang festlegt, während der Spieler zusieht. Es ist keine KI-Erzählung.

Bewegung ist Zonen und Meter, nicht Pixelziehen. Die Karte darf schön sein und darf den Blick führen; sie darf nicht die Kampfregel werden. Raster, 5-Fuß-Taktik und gleichzeitiges Ziehen gehören einem anderen Spiel.

v1 enthält keine Magie, keine Gebete, keine Krankheiten-Tabellen, keine KI am Tisch.

---

## 3. Der Schirm

Ein Schirm, drei Lagen, eine Sprache (Pergament auf dem Pult).

```
Kopf Gesicht des aktuellen Sprechers · Name · LP · Glück · Geld · Frist
Mitte der Faden (Stempel, Satz, Würfelplatte)
Fuß Was tust du? — als der gewählte Mensch
```

Die Karte ist ein Standbild hinter einer Klappe, nicht das Brett. Blatt, Journal, Tracker, Log: Klappen. Kein Hub vor der Szene, keine Reiter Aktion/Zustand, keine drei Spalten.

**Spieler** sieht der Spielercharakter im Kopf. Unten vier Sätze plus Weitere. Eine Absicht, dann Wurf wenn der SL ihn fordert.

**SL** bleibt SL im Kopf: Ort, Frist, Werkzeuge. Unten nicht „du bist ein Händler“, sondern **wer spricht**: Welt, ein Händler, Wache. Dieselbe Zeile und Ottos Wurf sind Werkzeuge. der Spielercharakter sitzt der Spieler. Log und Tracker hinter der Schriftrolle.

Spieler sehen keine Geheimnisse, kein SL-Log, keine geschlossenen Orte.

Zeit: [15-async-sitzung.md](15-async-sitzung.md). Der Faden einer Szene muss sich morgen als Gespräch zweier Leute lesen.

---

## 4. Anatomie eines Beats

Jedes Stück im Faden ist ein `ProtokollEintrag`. Die Felder sind absichtlich eng, damit der Rückkehrer den Beat in einem Blick versteht.

| Feld | Bedeutung |
|------|-----------|
| `kind` | `world` Welt, `intent` Intention, `rules` Wurf, `event` Ereignis, `system` System, `sl` SL-Satz an den Tisch |
| `title` | Kurze Überschrift, oft der Name der Handlung oder des Orts |
| `body` | Der Satz in der Welt oder die Bitte an den SL |
| `icon` | Stempel aus dem Satz von zehn. Fehlt er, folgt er aus `kind`. |
| `portrait` | Gesicht, wenn jemand spricht oder handelt |
| `speaker` | Name, der zum Portrait gehört |
| `placeId` | Zone auf der Karte, falls der Beat den Blick führt |
| `dice` | Die Würfelplatte, nur bei `rules` |
| `secret` | Nur SL und Rolle Tisch. Spieler sehen den Beat nicht. Das Journal kopiert ihn nicht. |
| `image` | Selten: ein Kartenausschnitt, kein neues Gemälde |
| `numbers` | Lesbare Kurzform der Rechnung, parallel zur Platte |

Ein Beat flattert herein: kurze Bewegung, 180–220 ms, `prefers-reduced-motion` achtet darauf, dass nur die Anwesenheit zählt, nicht der Schwung. Abspielen am Kopf des Fadens lässt die vorhandene Geschichte noch einmal nacheinander erscheinen. Das ist Erinnerung, keine Animation der Welt.

---

## 5. Die sechs Arten, ausführlich

### Welt (`world`)

Der SL ist die Welt (S. 259). Der erste Beat einer Szene ist immer Welt: Standbild, Geruch, Auslöser. Weitere Welt-Beats stehen nach einer Deutung, nach einem Enthüllen, nach einem Szenenwechsel im Ort. Der Spieler liest sie zuerst. Das Journal hängt eine Kurznotiz an.

Beispiel Basar: *„Dampf steigt vom Essigfass. ein Händler hält den Preis und lächelt nicht. Der Ballen unter dem Tuch ist schwerer, als Wolle sein dürfte.“*

### Intention (`intent`)

Der Spieler steuert Absicht, nicht Ausgang. Die Karte plus optionale Zeile erscheint mit Stempel Intention und Portrait. Ohne Karte ist der Text eine Freitext-Bitte. Der SL sieht sie und bindet oder lehnt ab. Eine Intention ohne Auflösung bleibt eine offene Frage im Journal.

Beispiel: *der Spielercharakter — Feilschen. „Vier Schillinge, und ich sehe nicht, was unter dem Tuch liegt.“*

### Wurf (`rules`)

Sobald der SL entschieden hat, dass gewürfelt wird, stehen zwei Beats im Faden, nicht einer. Zuerst die Aufforderung: wer, welche Fähigkeit, welcher Zielwert, welche Schwierigkeit. Dann, wenn der Spieler (oder der SL als dieser Mensch) geworfen hat, die Platte mit der vollen Rechnung. Die Platte ist das Vertrauen. Ohne sie gibt es kein „das System hat entschieden“. Die Welt danach ist der nächste Satz des NSC, kein erfundener Systemtext.

Glück gilt danach, am eigenen Wurf.

### Ereignis (`event`)

Vorbereitete Abenteuer-Ereignisse (S. 262) und Ergebnisse von SL-Tabellen, die der SL ins Leben gegeben hat. Die Engine wirft keine Ereignisse von allein in den Faden, es sei denn, der SL hat genau diese Tabelle mit „direkt ins Leben“ markiert. Siehe [11-bibliothek.md](11-bibliothek.md).

### System (`system`)

Frist, Szenenwechsel, Vorhang, Initiative-Liste, „Glück-Fenster ist offen“. Kein Erzähler.

### SL (`sl`)

Der SL spricht als Anführer zum Tisch, nicht als Welt. Regel straff ziehen, eine Bitte ablehnen, eine Schwierigkeit nennen, ohne schon die Welt zu beschreiben. Spieler sehen diese Sätze, wenn sie nicht `secret` sind. Das SL-Log speichert zusätzlich, was nur der SL braucht.

---

## 6. Der Spielerwurf

Das Buch lässt den Spieler würfeln. Die asynchrone Frist hatte zuerst die Engine würfeln lassen, weil niemand am Tisch saß. Das gilt nicht mehr. Der Spieler wirft den W100. Er entscheidet nicht, was die Welt daraus macht.

Ablauf, sichtbar im Faden:

1. Der Spieler sendet eine Intention (Karte, selten Freitext).
2. Der SL entscheidet zuerst, ob die Frage nach Erfolg wichtig, spannend oder dramatisch ist (S. 150): automatisch gelten lassen, Standardwurf, dramatischer Wurf, Vergleich. Das ist Stilfrage, nicht Automatik.
3. Braucht es einen Wurf, fordert der SL ihn an. Im Chat steht die Aufforderung mit Fähigkeit, Schwierigkeit, Zielwert, bei Vergleich der Gegner.
4. Der Spieler drückt Würfeln. Das ist *sein* Beat. Die Engine rechnet. Sie würfelt nicht heimlich.
5. Die Würfelplatte zeigt die Rechnung in dieser Reihenfolge: Fähigkeit und Spielwert, Schwierigkeit und Modifikator, Zustände, Vorteile falls legal, Ziel, W100, Erfolgsgrade, Band der Tabelle S. 151, bei Pasch im Kampf kritisch oder Patzer, bei Treffer die Zone, bei Vergleich die Gegnerplatte.
6. Glück gilt danach, am eigenen Wurf, nicht am Wurf eines anderen (v1).
7. Der SL deutet. Ein Welt-Beat schreibt, was in der Gasse oder am Stand wirklich geschieht.

NSCs würfelt der SL. Die Platte sieht genauso aus, damit der Spieler den Vergleich lesen kann.

Läuft die Frist ab und niemand hat geworfen, darf der SL in Vertretung würfeln. Der Eintrag trägt den Vermerk „in Vertretung“, nicht „Spielerwurf“. Das SL-Log speichert `proxy-roll`.

Beispiel, Feilschen am Basar, Buchrechnung nicht Simulationsfantasie:

der Spielercharakter hat Feilschen 47. Der SL setzt schwierig (−10). Zustände keine, Vorteile sozial nicht. Ziel 37. der Spielercharakter wirft 27. Zehner 3 minus Zehner 2 ergibt +1 EG, gelungen, Band „Knapper Erfolg“. ein Händler, falls Vergleich, wirft gegen Feilschen 50: eigener Beat, eigene Platte. Der SL schreibt danach den Satz in die Welt: der Preis rutscht, oder er rutscht nicht.

01–05 gelingt immer (EG mindestens +1). 96–00 misslingt immer (EG höchstens −1). Modifikatoren ändern den Zielwert, nicht den Würfel.

---

## 7. Erfolgsgrade — acht Bänder, keine Ampel

EG = Zehnerstelle des modifizierten Zielwerts minus Zehnerstelle des Wurfs (S. 151). Option „Schnelle EG“ (S. 152) ist nicht v1-Default.

| EG | Band |
|----|------|
| +6 oder mehr | Verblüffender Erfolg |
| +4 bis +5 | Beeindruckender Erfolg |
| +2 bis +3 | Erfolg |
| +0 bis +1 | Knapper Erfolg |
| −0 bis −1 | Knappes Scheitern |
| −2 bis −3 | Scheitern |
| −4 bis −5 | Beeindruckendes Scheitern |
| −6 oder weniger | Verblüffendes Scheitern |

„Teilweise“ ist kein eigenes Urteil. Knapper Erfolg und knappes Scheitern sind die uneindeutigen Bänder; +0 / −0 dürfen als „um Haaresbreite“ gelesen werden. Der SL deutet. Im Chat stehen Zahl, Band und Satz, nicht ein Ampel-Enum.

Im Kampf macht ein Pasch bei Gelingen einen kritischen Treffer, bei Misslingen einen Patzer (S. 159). Die Erfolgsgrade werden trotzdem gerechnet, auch um zu bestimmen, wer den Vergleich gewonnen hat. Es ist möglich, einen Patzer zu würfeln und trotzdem mehr EG als der Gegner zu haben: man setzt zu und schadet sich gleichzeitig.

Trefferzone: Würfel vertauschen (S. 159). 00 als W100 ist 100; die Zone folgt der vertauschten Zahl.

---

## 8. Glück nach dem eigenen Wurf

Direkt nach einem eigenen Wurf öffnet sich das Fenster (S. 171): Wurf wiederholen oder +1 EG, sofern Glück übrig ist. Ohne Antwort gilt: nicht ausgegeben, Fenster zu. Ein bereits wiederholter Wurf wird nicht erneut wiederholt (S. 150). Fremde Würfe: Glück darauf in v1 nicht implementiert.

Das Fenster ist kein Beat, der die Welt erzählt. Es ist Arbeit unter dem Faden, mit einem System-Hinweis, dass es offen ist. Nach der Ausgabe oder dem Verwerfen steht die neue Rechnung als Wurf-Beat, oder der alte bleibt.

---

## 9. Zwei Reiter, eine Karte

Die Karte oben ist Illustration und Ortsgedächtnis. Token liegen in Zonen (`placeId`), nicht auf einem 5-Fuß-Raster. Distanzen stehen in Metern in einer Tabelle der Szene. Bewegung folgt dem Buch: Gehen B×2 Meter, Rennen B×4, Sturmangriff braucht das Ziel in Rennen-Reichweite und mindestens Bewegung Meter entfernt. GS ist Geschicklichkeit, nicht Bewegung.

Der Reiter Aktion zeigt den Katalog, gefiltert nach Ort und Zustand, ausgegraut mit Grund, nie gelöscht. Der Reiter Zustand zeigt den knappen Bogen und das Journal. Wer den vollen Bogen braucht, geht auf das Blatt. Niemand muss auf einem Bildschirm Welt, Würfel, Inventar und Regeltext gleichzeitig tragen.

---

## 10. KI, später

KI darf Dialogvorschläge, Gerüchte, Zusammenfassungen liefern. Sie darf keinen Wurf entscheiden, keinen Zustand setzen, keine Karriere ändern, kein Tabellenergebnis setzen, keinen Beat ohne den SL in den Faden schreiben. Der SL gibt frei oder verwirft. v1 enthält keine KI. Das Icon-Set und der Chat machen eine spätere Anbindung einfach, weil der Beat schon Satz plus Stempel ist — nicht weil die KI erzählen darf.

---

## 11. Was sich am Loop nicht ändert

Charakter einmal erschaffen, dann persistent über Szenen und Sitzungen. Ohne Bogen keine legale Aktion. Spieler würfelt nicht über das Ergebnis hinweg — er würfelt den W100, der SL deutet. Die Engine erfindet nichts. Der SL bleibt Welt, Regeln, Geschichte und Anführer. Die Frist bleibt die digitale Anwesenheit.

Siehe auch: [Wege · Abend](../00-WEGE.md), [Das Spiel](00-das-spiel.md), [Journal und SL-Log](12-journal-und-log.md), [Datenmodell](02-datenmodell.md), [Bibliothek](11-bibliothek.md), [Bildsprache](13-bildsprache.md).
