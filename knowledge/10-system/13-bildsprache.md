# Bildsprache — Stempel, Standbild, Portrait

Stand: 2026-09-08. 
Quellen: [10-leben-chat.md](10-leben-chat.md); [09-spielumgebung-vtt.md](09-spielumgebung-vtt.md); Stilvertrag in [public/icons/PROMPTS.md](../../public/icons/PROMPTS.md).

Dieses Blatt ist die verbindliche Bildsprache des Pults. Es ändert den Loop nicht. Es sagt, was das Auge sehen darf, nicht was legal ist. Autorität bleibt das Buch. Das Medium bleibt der Chat [Leben](10-leben-chat.md). Die Kartenküche bleibt Inkarnate, der Editor draußen, wie [Spielumgebung](09-spielumgebung-vtt.md) es festhält.

---

## 1. Warum eine Bildsprache

Die Frist ist kein gemeinsamer Abend. Der Spieler kommt Stunden später zurück, liest, handelt, geht wieder. Wer so wiederkommt, darf der Szene auf den ersten Blick trauen. Deshalb gibt es **eine** Bildsprache, nicht drei, und deshalb bleibt sie ruhig.

Am physischen Tisch schaut man nacheinander auf die Karte, auf die Gesichter und auf den Bogen. Digital liegen dieselben drei Dinge untereinander. Die Karte oben ist ein liebevolles Standbild: sie atmet, sie wartet, sie bewegt sich nicht. Der Faden darunter trägt die Zeit. Im Faden flattert kein neues Gemälde pro Beat, sondern immer derselbe Satz aus zehn Holzschnitten auf Pergament — und, wenn jemand spricht, ein Gesicht, das man wiedererkennt.

Vertrauen entsteht, weil das Auge nicht jedes Mal neu lernen muss, was es sieht. Der Stempel *Welt* ist immer die Marktbude. Der Stempel *Wurf* ist immer das Würfelpaar. das Gesicht des Spielercharakters ist immer der Spielercharakter, nicht ein neuer Holzschnitt und nicht eine neue Filmszene. Wer das bricht — ein fotorealistisches Einzelbild je Nachricht, ein Video, ein Partikelregen, ein anderes Farbsystem — macht aus dem Pult ein Trailer. Das Anti-Ziel „reiner Chat“ aus [00-das-spiel.md](00-das-spiel.md) gilt auch hier: der Chat ist Möbel des Tisches, nicht Ersatz für den SL, und die Bilder sind Möbel des Chats, nicht Ersatz für den Satz.

Asynchron heißt: Ruhe. Ruhe heißt: die Karte bleibt stehen, die Stempel wiederholen sich, die Portraits halten still. Kein Emoji. Keine Buchstaben auf den Stempeln. Modelle verdrehen Schrift; ein Icon, das man bei 32 Pixeln nicht mehr lesen kann, weil es ein Wort tragen wollte, ist kein Stempel, sondern Lärm.

---

## 2. Drei Lagen, nicht mehr

Die Szene hat drei Bildlagen. Sie liegen übereinander wie Blatt, Stempel und Siegel auf dem Pult. Keine vierte Lage.

**(a) Das Standbild der Szene.** Ein exportiertes Kartenbild, warm gemalt, Inkarnate-Stil. Es liegt oben im Pult (`map-still`). Die Kamera ist keine Wanderung: `object-position` schiebt den Ausschnitt auf den gewählten Ort (`placeId`, Nadel mit `x`/`y` in Prozent). Der Blick führt, die Kampfregel tut es nicht. Raster, 5-Fuß-Taktik und Token-Ziehen als Regel gehören einem anderen Spiel.

**(b) Der Stempel auf jedem Beat.** Ein Quadrat 1:1 aus dem Satz von zehn. Er sitzt links am Eintrag, flattert herein, bleibt. Fehlt `icon`, folgt der Stempel aus `kind`. Es gibt keine anderen Schlüssel.

**(c) Das Portrait, wenn ein Mensch spricht oder handelt.** Ein malerisches Gesicht, kein Holzschnitt. Es sitzt in der Karte des Beats (`leben-face`), nicht anstelle des Stempels. Der Stempel sagt die Art des Beats. Das Portrait sagt, wer da ist.

Selten darf ein Beat das Feld `image` tragen: dann ist es ein **Kartenausschnitt** des vorhandenen Standbilds, kein neues Gemälde. Die drei Lagen bleiben drei Lagen. Wer zu einem Beat ein cineastisches Einzelbild erzeugt, hat die Sprache verlassen.

---

## 3. Der Stilvertrag der zehn Stempel

Die zehn Dateien in `public/icons/` sind ein Satz, kein Katalog, den man erweitern darf. Sie müssen nebeneinander liegen und wie von einem Stock geschnitten wirken. Deshalb gilt **ein** Vertrag für alle, und deshalb entsteht Icon 1 zuerst.

Der Vertrag, in einem Atem:

Dasselbe **quadratische Pergament**, 1:1. Das **creme-ockerfarbene Papier füllt die Fläche bis zum Rand** — kein Passepartout, kein Außenrahmen, keine zweite Linie um das Blatt, kein Wachsrand, der das Quadrat noch einmal fasst. Darauf **nur dunkle Umbra**, Holzschnitt, dicke Linie, hoher Kontrast. **Großer leerer Rand** um das Motiv, damit die Silhouette bei **32 Pixeln** noch ein Ding bleibt und nicht zu einem Fleck zerfällt. **Keine Buchstaben, keine Zahlen, kein Wasserzeichen.** Modelle verdrehen Schrift; Würfel tragen keine Ziffern, Bücher keine Zeilen, Siegel keine Inschrift, Zettel keine Klage. **Kein Fotorealismus, keine Extrafarben** neben Pergament und Umbra. Keine Leute im Motiv, außer der eine Stempel *Person*, und der ist ein Druckerzeichen, kein Porträt.

Zuerst entsteht **welt** (die Marktbude) als Anker. Die übrigen neun kommen per **image-to-image** aus genau diesem Anker. Der Prompt ändert **nur das zentrale Motiv**. Papier, Umbra, Strichstärke, Rand, Quadrat, das Fehlen von Rahmen und Schrift — alles bleibt. Wer jedes Icon neu aus dem leeren Blatt holt, bekommt zehn Verwandte statt eines Stocks. Wer in der Kette Farbe, Rahmen oder Schrift einschleppt, zerbricht den Satz.

---

## 4. Die zehn Stempel

Zehn, nicht elf. Deutscher Sinn im Faden, englisches Motiv im Modell. Dateiname = Schlüssel = `IconKind` in `src/lib/wfrp/types.ts`.

| Datei | Deutscher Sinn | Englisches Motiv |
|-------|----------------|------------------|
| `welt.jpg` | **Welt.** Der Ort atmet. Geruch, Licht, Auslöser. Der erste Beat einer Szene trägt ihn immer. | covered market stall, striped awning, two cloth bales |
| `ort.jpg` | **Ort.** Eine Stelle auf der Karte, ein Torbogen, ein Wechsel im Raum, die Karte im Hub. | stone gateway arch |
| `person.jpg` | **Person.** Jemand wird genannt oder handelt als Mensch. Nicht das Gesicht der Sprecherin — das ist das Portrait. | bust of a muffled city woman (not a child) |
| `waffe.jpg` | **Waffe.** Schlag, gezogener Dolch, Nahkampf, der Körper tut weh. | short dagger, diagonal |
| `fund.jpg` | **Fund.** Beutel, Münze, was unter dem Tuch liegt. | pouch and a single coin |
| `wurf.jpg` | **Wurf.** Die Rechnung steht an oder ist da. Daneben die Würfelplatte, nicht statt ihrer. | two ten-sided dice |
| `ereignis.jpg` | **Ereignis.** Vorbereitetes Abenteuer-Ereignis, das der SL ins Leben gegeben hat. | pointing hand and a torn scrap of paper |
| `journal.jpg` | **Journal / System.** Frist, Vorhang, Initiative, was das Pult sagt, ohne zu erzählen. | open book, blank pages |
| `sl.jpg` | **SL.** Der Anführer spricht zum Tisch, nicht als Welt. | wax seal and a quill, no writing |
| `intention.jpg` | **Intention.** Der Spieler sagt, was der Charakter unternehmen will. | open raised palm |

Default aus `kind`, wenn `icon` fehlt:

| `kind` | Stempel |
|--------|---------|
| `world` | `welt` |
| `intent` | `intention` |
| `rules` | `wurf` |
| `event` | `ereignis` |
| `system` | `journal` |
| `sl` | `sl` |

`ort`, `person`, `waffe` und `fund` sind keine eigenen `kind`. Sie sind Stempel, die ein Beat bewusst setzt, wenn der Satz den Ort, den Menschen, die Waffe oder den Fund meint. Der SL (oder die Engine, wo sie schon korrekt stempelt) wählt sie. Ein elfter Schlüssel kommt nicht hinzu.

---

## 5. Wie ein Beat sie trägt

Jedes Stück im Faden ist ein `ProtokollEintrag`. Das Auge liest ihn in einem Blick, in dieser Ordnung:

1. **Stempel** links, immer, 1:1, Klasse `stamp`. Ohne ihn ist der Beat eine Zeile, kein Tisch.
2. **Portrait** in der Karte, optional, nur wenn jemand spricht oder handelt (`portrait`, `speaker`).
3. **Titel** und **Satz** in der Welt (`title`, `body`).
4. **Würfelplatte**, optional, nur wenn gewürfelt wurde (`dice` oder lesbares `numbers`). Die Platte ist die Rechnung, kein Bild. Der Stempel *Wurf* kündigt sie an; er ersetzt sie nicht.

Dazu darf, selten, der Kartenausschnitt treten (`image` + `placeId`): ein Klick führt den Blick auf der Karte. Kein neues Gemälde.

Der Beat **flattert** herein: kurze Bewegung, Deckkraft und eine kleine Verschiebung (`opacity` / `translate`), **180–220 ms**. Das ist Ankunft, nicht Spektakel. `prefers-reduced-motion` achtet darauf, dass nur die Anwesenheit zählt, nicht der Schwung — der Eintrag steht, er tanzt nicht. Abspielen am Kopf des Fadens lässt die vorhandene Geschichte noch einmal nacheinander erscheinen. Das ist Erinnerung, keine Animation der Welt, kein Video, kein Licht, das über die Karte kriecht.

Spieler dürfen eine kurze Zeile zur Aktionskarte schreiben. Freier Text ohne Karte ist die Bitte „Freitext“ an den SL. Der Stempel dazu bleibt *Intention*, bis der SL bindet oder ablehnt. Was danach in die Welt geht, trägt *Welt* oder *Ereignis* oder *Wurf*, nicht ein neues Bild.

---

## 6. Karten — liebevolle Standbilder, kein Icon-Stil

Die Karte ist Lage **(a)**. Sie ist **nicht** Holzschnitt auf Pergament. Sie ist ein warmes, leicht schmutziges Standbild im Stil eines Inkarnate-Exports: von schräg oben, lesbar, ohne UI, ohne Schrift, ohne Logo, ohne Kompassrose, ohne Raster, ohne Leute. Nasses Pflaster, Ruß, Ocker, Kerzenlicht. Die Karte darf schön sein und darf den Blick führen. Sie darf nicht die Kampfregel werden.

**Bestehende Dateien bleiben.** Nicht neu erzeugen, nicht durch die Icon-Kette jagen, nicht „im gleichen Holzstich“ nachziehen.

- [`public/maps/basar.jpg`](../../public/maps/basar.jpg) — der Altquartier-Basar. Prompt daneben: [`basar.prompt.txt`](../../public/maps/basar.prompt.txt).
- [`public/maps/gasse.jpg`](../../public/maps/gasse.jpg) — die Gasse hinter dem Basar. Prompt daneben: [`gasse.prompt.txt`](../../public/maps/gasse.prompt.txt).

**Neue Karten** bekommen dasselbe Paar: `public/maps/<ort>.jpg` und daneben `public/maps/<ort>.prompt.txt`. Zuerst der Prompt, dann das Bild, dann die Szene mit `mapImage` / `board.image`, Maßstab in Metern, Nadeln. Inkarnate bleibt Küche. Der Editor kommt nicht in die App.

`object-position` auf dem Standbild folgt der Nadel des gewählten Orts. Wer den Blick führen will, setzt `placeId`, er malt kein zweites Bild.

---

## 7. Portraits — Menschen, keine Stempel

Sprecher sind Leute. Deshalb sind die Gesichter **malerisch**, nicht holzschnittig. Ein Stempel sagt „hier handelt eine Person“. Ein Portrait sagt „das ist der Spielercharakter“, „das ist ein Händler“, „das ist ein Schläger“. Wer das Portrait durch den Stempel *Person* ersetzt, macht aus der Sprecherin ein Druckerzeichen. Wer das Portrait als Holzschnitt auf Pergament anlegt, macht aus der Sprecherin einen Stempel. Beides ist falsch.

Bestehend, nicht neu malen:

- [`public/tokens/greta.jpg`](../../public/tokens/greta.jpg) — der Spielercharakter, erwachsene Städterin.
- [`public/tokens/otto.jpg`](../../public/tokens/otto.jpg) — ein Händler Tuchhändler, erwachsener Kaufmann.
- [`public/tokens/kurt.jpg`](../../public/tokens/kurt.jpg) — ein Schläger Raufbold, erwachsener Halunke.

Künftige NSCs folgen **demselben Portraitvertrag**: erwachsen (kein Kind, kein Teenager), Kopf und Schultern, kerzenlicht, getragene Kleidung der Alten Welt, malerischer Strich, 1:1, ohne Schrift, ohne UI, ohne Logo, ohne Pergamentrahmen. Datei: `public/tokens/<slug>.jpg`. Die Stadtwache Brunn hat noch keins; wenn sie eins bekommt, bekommt sie dieses, nicht den Stempel *Person*.

Das Portrait sitzt im Beat, auf dem Token der Karte, in der Tracker-Leiste. Es flattert nicht als eigenes Genre. Es ist dasselbe Gesicht an drei Möbeln.

---

## 8. Was wir nicht erzeugen

Fest verschlossen, auch in Hypothese, auch „nur für diesen einen Beat“:

- **kein neues realistisches oder cineastisches Einzelbild je Chat-Beat.** Der Faden ist Stempel plus Satz plus optional Portrait plus optional Platte. Punkt.
- **kein Video**, kein Loop, kein Szenenfilm, kein Lippensync.
- **keine Partikel-FX**, kein Blutnebel, kein Funkenregen, kein Feuer, das auf dem Pult brennt.
- **kein dynamisches Licht**, kein LOS, keine Fackel, die in Echtzeit über die Karte wandert. Der Vorhang reißt asynchron: der Spieler sieht den Stand, nicht die Animation.
- **kein Emoji**, keine Lucide-Ikone als Ersatz für den Satz von zehn, keine Buchstaben und Zahlen auf den Stempeln.
- **kein elfter Stempel.** Wer „Magie“, „Gott“, „Krankheit“ oder „Kampf“ als neues Quadrat will, irrt: v1 braucht sie nicht, und der Stock bleibt bei zehn.
- **keine Kinder** auf Stempeln oder in Portraits. *Person* ist eine vermummte **erwachsene** Städterin. Ein neues Portrait ist ein **erwachsener** NSC.

Die Karte darf Vorhang und Nadeln tragen. Das ist Möbel, nicht Effekt.

---

## 9. Pipeline, wenn erzeugt wird

Bilder entstehen selten. Wenn, dann so, und nicht anders. Spec und Arbeitskopie müssen denselben englischen Prompt tragen.

**Stempel**

1. Skill **game-ui-icons** lesen (Quadrat, Silhouette, Rand, Squint-Test).
2. **Einen** Stilvertrag festnageln — Abschnitt 3 und die Anker-Prompts unten. Nicht pro Datei neu erfinden.
3. **welt** zuerst erzeugen, Text-zu-Bild, 1:1, Ankerprompt (A).
4. Die übrigen neun **per Edit-Kette / image-to-image** aus genau diesem Anker. Prompt = Kettensatz plus Motiv (B). Nur das zentrale Motiv wechselt.
5. **Squint-Test bei 32 px.** Jede Datei auf Briefmarkengröße. Wer das Motiv nicht in einem deutschen Wort benennen kann (Bude, Tor, Frau, Dolch, Beutel, Würfel, Hand, Buch, Siegel, Handfläche), erzeugt neu: weniger Innen-Schraffur, mehr Außenkante, mehr leerer Rand.
6. Nach `public/icons/<name>.jpg` kopieren. Dateiname = Schlüssel.
7. [`public/icons/PROMPTS.md`](../../public/icons/PROMPTS.md) mitziehen. Der nächste Agent soll erzeugen können, ohne dieses Blatt zu öffnen.

**Karten**

Promptdatei neben das JPG legen, warmes Standbild, nicht Icon-Stil. Bestehende `basar` und `gasse` nicht anfassen.

**Portraits**

Vertrag (C), erwachsen, malerisch, nach `public/tokens/<slug>.jpg`. Nicht durch die Stempelkette jagen.

Kein Bild ohne Prompt. Kein Prompt, der Schrift auf das Motiv setzt.

---

## 10. Prompts — englisch, zum Kopieren

Das Bildmodell liest Englisch. Die folgenden Blöcke sind vollständig. Nicht kürzen, nicht „Change ONLY…“ allein schicken, nicht den Anker für die Kette weglassen.

### (A) Anker — `welt.jpg`

Zuerst, leer, Text-zu-Bild, 1:1.

```
Square game UI icon on a warm aged parchment square, 1:1. Even cream-ochre paper filling the whole canvas edge to edge, no outer frame, no border, no letters, no numbers, no watermark. Centered a single medieval woodcut printer's-mark: a small covered market stall with a striped awning and two stacked cloth bales, drawn in dark umber ink only, thick woodcut lines, generous empty parchment margin around the motif so the silhouette stays legible when displayed at 32 pixels. High-contrast silhouette, no photorealism, no extra colors besides parchment and umber ink, no people, no faces, no text of any kind.
```

### (B) Kette — dieselben neun, jeweils vollständig

Arbeitsweise: Bild-zu-Bild / Edit auf dem fertigen `welt.jpg`. Jeder Block unten ist der ganze Prompt. Der Kettensatz bleibt wörtlich; nur das Motiv hinter dem Doppelpunkt wechselt.

**Kettensatz (gemeinsamer Anfang):**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif:
```

**`ort.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: a stone gateway arch, empty, medieval, drawn as a single woodcut printer's-mark in dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no people, no letters, no numbers, no photorealism, no extra colors.
```

**`person.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: the bust of a muffled adult city woman in a heavy hooded cloak, face in shadow, not a child, not a teenager, not a painted portrait, a generic medieval woodcut printer's-mark of a person, dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no letters, no numbers, no photorealism, no extra colors.
```

**`waffe.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: a short dagger set on the diagonal, simple crossguard, no scabbard, no runes, drawn as a single woodcut printer's-mark in dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no letters, no numbers, no photorealism, no extra colors.
```

**`fund.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: a small tied pouch and a single coin beside it, no mint marks, drawn as a single woodcut printer's-mark in dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no letters, no numbers, no photorealism, no extra colors.
```

**`wurf.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: two ten-sided dice sitting together, polyhedral kite faces, no numerals on the faces, drawn as a single woodcut printer's-mark in dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no letters, no numbers, no photorealism, no extra colors.
```

**`ereignis.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: a pointing hand and a torn scrap of paper, the paper blank, drawn as a single woodcut printer's-mark in dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no letters, no numbers, no photorealism, no extra colors.
```

**`journal.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: an open book with blank pages, no writing, no illuminated letters, drawn as a single woodcut printer's-mark in dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no letters, no numbers, no photorealism, no extra colors.
```

**`sl.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: a wax seal and a quill, the seal unmarked, no writing, drawn as a single woodcut printer's-mark in dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no letters, no numbers, no photorealism, no extra colors.
```

**`intention.jpg`**

```
Keep the exact same square parchment, same cream-ochre paper filling the whole canvas, same dark umber woodcut ink, same thick line weight, same generous empty margin, no text. Change ONLY the central motif: an open raised palm, empty, facing the viewer, drawn as a single woodcut printer's-mark in dark umber ink only, thick woodcut lines, high-contrast silhouette, generous empty parchment around it so it stays legible at 32 pixels, no letters, no numbers, no photorealism, no extra colors.
```

### (C) Portraitvertrag — neuer erwachsener NSC

Nicht die Stempelkette. Nicht ein Kind. Datei nach `public/tokens/<slug>.jpg`. Die Klammer ersetzen, sonst den Block lassen.

```
Painterly oil-and-tempera portrait of an adult [ROLE: short visual description] from Altdorf in the Warhammer Old World. Not a child, not a teenager, not a woodcut, not a stamp. Head and shoulders, three-quarter view toward the viewer, candlelight on a tired lived-in face, worn period clothing, slightly dirty. Muted ochre, soot, dried-blood cloth, warm shadow. Human and specific, so the face still reads as this person when cropped to a small circular token. Square 1:1. Painterly brushwork. No parchment border, no letters, no numbers, no UI, no logo, no modern clothing, no photoreal cinematic still, no anime, no plastic CGI.
```

Beispiel, nur zur Lehre, nicht erzeugen, solange Brunn kein Gesicht braucht: `[ROLE: silver-status city watch recruit, tired man in a dull helmet and a stained ochre tabard, stubble, bored eyes]`.

### (D) Standbild — neuer Ort in Altdorf

Nicht Icon-Stil. Prompt als `public/maps/<ort>.prompt.txt` speichern, Bild daneben. Klammern ersetzen.

```
Top-down slightly angled hand-painted fantasy cartography map of [LOCATION IN ALTDORF] in the Warhammer Old World, Inkarnate battlemap export style. [TWO OR THREE CONCRETE DETAILS: surfaces, weather, one landmark]. Warm, slightly dirty, muted ochre and soot, candlelight or overcast day, grimy painterly texture, high detail readable from above, 16:9 landscape establishing still. NO people, NO faces, NO text, NO labels, NO UI, NO logo, NO compass rose, NO grid, NO watermark. Not a woodcut icon, not a UI mockup, not photoreal cinematic concept art.
```

Die bestehenden Prompts für Basar und Gasse bleiben das Maß. Wer einen neuen Ort anlegt, liest sie zuerst und hält dieselbe Wärme, denselben Schmutz, dasselbe Verbot von Schrift und Leuten.

---

## 11. Siehe auch

- [Leben — der Chat als Tisch](10-leben-chat.md) — Medium, Anatomie eines Beats, Flattern, Würfelplatte.
- [Spielumgebung](09-spielumgebung-vtt.md) — Karte als Möbel, Inkarnate als Küche, kein dynamisches Licht.
- [Das Spiel](00-das-spiel.md) — Loop, Rollen, Anti-Ziele.
- [Datenmodell](02-datenmodell.md) — `ProtocolEntry`, `IconKind`.
- [UI Orientierung](08-ui-orientierung.md) — Pergament, Wachsrot, keine Emoji.
- [Arbeitskopie der Prompts](../../public/icons/PROMPTS.md) — dieselben zehn englischen Prompts, zum Erzeugen ohne dieses Blatt.
- Standbilder: [basar.prompt.txt](../../public/maps/basar.prompt.txt), [gasse.prompt.txt](../../public/maps/gasse.prompt.txt).
