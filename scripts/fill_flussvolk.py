#!/usr/bin/env python3
"""Write Flussvolk originals S. 69–76 from book extract. Do not invent rules."""
from pathlib import Path

ROOT = Path("/workspace/knowledge/03-klassen-karrieren/flussvolk")

CAREERS = {
    "flussbewohner": {
        "name": "Flussbewohner",
        "seite": 69,
        "voelker": "Halbling, Mensch, Zwerg",
        "tag": "Der Großteil des Verkehrs in der Alten Welt läuft über die Flüsse und du lebst mitten in diesem Getümmel.",
        "plus": ["ST", "I", "GW"],
        "schema": {
            "KG": "",
            "BF": "",
            "ST": "+",
            "WI": "Totenkopf",
            "I": "+",
            "GW": "+",
            "GS": "⚔",
            "IN": "",
            "WK": "",
            "CH": "Krone",
        },
        "stage1": {
            "name": "Jungspund",
            "tier": "messing",
            "rank": 2,
            "skills": ["ausdauer", "ausweichen", "athletik", "klatsch", "rudern", "schwimmen", "ueberleben", "zechen"],
            "skills_book": "Ausdauer, Ausweichen, Athletik, Klatsch, Rudern, Schwimmen, Überleben, Zechen",
            "talents": ["Fischer", "Gesellig", "Guter Schwimmer", "Trittsicher (Sumpf)"],
            "gear": ["Eimer", "Angelrute und Köder", "Lederbeinlinge"],
            "gear_book": "Eimer, Angelrute und Köder, Lederbeinlinge",
        },
        "body": """Die fruchtbaren Ufer der großen Flüsse des Imperiums sind dicht besiedelt und das Volk, das tagein und tagaus von dort auf dem Wasser und in den Auen ringsum arbeitet, sorgt dafür, dass ein ständiger Strom an frischen Fischen, Aalen und Krustentieren die Städte erreicht. Anders als Dörfler im Landesinneren erhalten die Ansiedlungen entlang der Flüsse regelmäßig Besuch von Fremden, die dort handeln und Vorräte beschaffen, weshalb Flussbewohner meist offener und weniger ablehnend sind. Häufig sind sie die ersten, die von Nachrichten aus fernen Ländern hören. Es gibt viele Berufe, die man entlang der Flüsse ausüben kann. Viele leben vom Fluss selbst, sei es als Fischer (mit Rute, Netz oder Speer), Aalfänger (mit Fallen) oder Krebs- und Muschelsammler. Andere leben indirekt vom Fluss, sei es, indem sie die Fahrrinnen freihalten, Liegeplätze und Kais pflegen oder die vielen Tausend Schiffe auf den Flüssen versorgen und instandhalten.

„Wenn wir diese Zweige jetzt ins Wasser werfen, dann schwimmen sie irgendwann durch Marienburg. Also, falls sie nicht im Schlick hängenbleiben, natürlich.“
– Jemima, Jungspund

„Sie sagen, dass irgendwann das ganze Imperium an dir vorbeigeschwommen ist, wenn du nur lang genug am Reik gesessen hast. Nun, ich sitze hier jetzt schon seit über zwanzig Jahren mit der Rute in der Hand und sehe dem Fluss beim Fließen zu. Ich könnte dir so manches erzählen. Ich habe Krieg gesehen und ich habe Frieden gesehen. Ich habe gute Zeiten gesehen und ich habe schlechte Zeiten erlebt. Ich sah Fröhlichkeit und Trauer. Und in all der Zeit, das kann ich dir sagen, habe ich nicht einen einzigen verdammten Fisch gefangen!“
– Till Lange, schlechtester Fischer des Reiklandes

Flussbewohner werden sich an jedem Gewässer wohlfühlen und durch ihre vielseitigen Fertigkeiten können sie alles stehen- und liegenlassen und sich sicher sein, dass sie problemlos anderenorts Arbeit finden werden. Flussbewohner kennen alle Aspekte des Lebens am Wasser, auch die zwielichtigen, und sind daher bestens geeignet, um Kontakt zu kriminellen Kreisen entlang der Ufer zu bekommen. Mit ihrem Wissen und ihrer Erfahrung können sie für Expeditionen und Ermittlungen entlang der Flüsse eine wertvolle Hilfe sein.""",
        "weg": """### + Jungspund – Messing 2

**Fähigkeiten:** Ausdauer, Ausweichen, Athletik, Klatsch, Rudern, Schwimmen, Überleben, Zechen
**Talente:** Fischer, Gesellig, Guter Schwimmer, Trittsicher (Sumpf)
**Ausrüstung:** Eimer, Angelrute und Köder, Lederbeinlinge

### ⚔ Flussbewohner – Messing 3

**Fähigkeiten:** Glücksspiel, Fallen stellen, Fernkampf (Fesseln), Fernkampf (Werfen), Wissen (Flusswege), Wissen (Ort/Region)
**Talente:** Binnenschiffer, Handwerksgeschick (Bootsbauer), Starker Rücken, Streuner
**Ausrüstung:** Aalfalle, Lederwams, Netz, Speer

### Totenkopf Flussweiser – Messing 5

**Fähigkeiten:** Charme, Intuition, Nahkampf (Stangenwaffe), Wahrnehmung
**Talente:** Beharrlich, Beherzt, Fachwissen (Flusswege), Sehr stark
**Ausrüstung:** Ruderboot, Sturmlaterne und Öl

### Krone Flussältester – Silber 2

**Fähigkeiten:** Unterhalten (Erzählen), Wissen (Volkskunde)
**Talente:** Aufgeweckt, Meisterhandwerker (Bootsbauer), Rhetorik, Willensstärke
**Ausrüstung:** Hütte oder Flussboot""",
    },
    "flussschiffer": {
        "name": "Flussschiffer",
        "seite": 70,
        "voelker": "Halbling, Hochelf, Mensch, Zwerg",
        "tag": "Du befährst die gefährlichen Flüsse und Seen der Alten Welt und transportierst Passagiere, Fracht und die neuesten Nachrichten.",
        "plus": ["ST", "WI", "GW", "GS"],
        "schema": {
            "KG": "",
            "BF": "",
            "ST": "+",
            "WI": "+",
            "I": "⚔",
            "GW": "+",
            "GS": "+",
            "IN": "Krone",
            "WK": "Totenkopf",
            "CH": "",
        },
        "stage1": {
            "name": "Deckratte",
            "tier": "silber",
            "rank": 1,
            "skills": ["ausdauer", "ausweichen", "klatsch", "nahkampf.waffenlos", "rudern", "segeln", "schwimmen", "zechen"],
            "skills_book": "Ausdauer, Ausweichen, Klatsch, Nahkampf (Waffenlos), Rudern, Segeln, Schwimmen, Zechen",
            "talents": ["Fischer", "Guter Schwimmer", "Schmutzig kämpfen", "Starker Rücken"],
            "gear": ["Handwaffe (Entermesser)", "Gambeson", "Stange"],
            "gear_book": "Handwaffe (Entermesser), Gambeson, Stange",
        },
        "body": """Flussboote und Barken befahren die Wasserwege des Imperiums und bringen Güter aus den entlegensten Winkeln der Provinzen in die großen Städte. Die Gefährte sind flach gebaut und können daher viel weiter die Flüsse hinauffahren, als dies Seeschiffen möglich wäre, wobei die Flüsse verbindenden Kanäle ihre Reichweite noch zusätzlich erhöhen. Barkenmeister sind erfahrene Flusssegler und besitzen ein enormes Detailwissen bezüglich der Wasserwege. Neulinge werden Deckratten genannt, lernen ihr Handwerk mit Seilen, Segeln und Ruder aber üblicherweise schnell. Flussschiffer bemannen die großen Barken, die zwischen den Häfen, Marktstädten und Kontoren pendeln, und arbeiten dabei entweder eigenverantwortlich oder für eines der großen Kaufmannshäuser. Flussschiffer können auch als Fährleute arbeiten, um Passagiere über Flüsse zu bringen oder in und aus Städten. In größeren Städten bemannen sie auch die mietbaren Flussgondeln, gesegelte Vergnügungsboote oder arbeiten auf allen anderen Arten von Gefährten.

„Irgendwann wird es wieder so richtig regnen. Vergesst also besser nicht Euren Hut, meine Dame.“
– Teo Binckel, Gondelfahrer

„Hüte dich vor dem Kreuzen. Das sage ich dir als erfahrener Bootsmann. Wenn du dich einem gefährlichen Felsen oder einer Untiefe auf Steuerbord näherst, dann fahre auch Steuerbord daran vorbei, bleibe Steuerbord, oder fahre Backbord und bleibe Backbord, wenn du dich Backbord näherst. Du kannst natürlich auch kreuzen, aber dann könntest du sinken. Und niemand will wegen unnötigen Kreuzens seine Barke versenken.“
– Jakob Waller, Bootsmann, der mal beim Kreuzen eine Barke versenkte

Ein Bootsmann muss nicht nach Abenteuern Ausschau halten, denn es ist recht wahrscheinlich, dass die Abenteuer irgendwann zu ihm kommen. Boote sind für nahezu jeden nützlich und daher in nahezu jedem Abenteuer einsetzbar. Sie geben auch ein hervorragendes mobiles Heim für eine Abenteurergruppe ab. Bootsleute müssen bei ihrer Profession bleiben, solange die Abenteuer nahe an den Flüssen bleiben. Und wenn es doch mal für eine Zeit ins Hinterland geht, dann gibt es immer eine talentierte Deckratte, der man das Flussboot auf Zeit überlassen kann, während man sich eine Auszeit vom Flussleben nimmt.""",
        "weg": """### + Deckratte – Silber 1

**Fähigkeiten:** Ausdauer, Ausweichen, Klatsch, Nahkampf (Waffenlos), Rudern, Segeln, Schwimmen, Zechen
**Talente:** Fischer, Guter Schwimmer, Schmutzig kämpfen, Starker Rücken
**Ausrüstung:** Handwaffe (Entermesser), Gambeson, Stange

### ⚔ Flussschiffer – Silber 2

**Fähigkeiten:** Athletik, Feilschen, Intuition, Unterhalten (Erzählen), Wahrnehmung, Wissen (Flusswege)
**Talente:** Binnenschiffer, Erfahrener Reisender, Etikette (Gildenmitglieder), Sehr stark
**Ausrüstung:** Seil, Ruderboot

### Totenkopf Bootsmann – Silber 3

**Fähigkeiten:** Beruf (Bootsbauer), Heilen, Klettern, Unterhalten (Singen)
**Talente:** Gespür für Ärger, Mächtiger Schlag, Unterschlagen, Verhandlungsgenie
**Ausrüstung:** Rucksack, Handwerkszeug (Zimmermann)

### Krone Barkenmeister – Silber 5

**Fähigkeiten:** Anführen, Navigation
**Talente:** Bedrohlich, Lotse, Rhetorik, Richtungssinn
**Ausrüstung:** Hut, Flussboot mit Besatzung""",
    },
    "flusswaechter": {
        "name": "Flusswächter",
        "seite": 71,
        "voelker": "Halbling, Mensch",
        "tag": "Du patrouillierst mit wachem Blick und harter Hand die Wasserwege und verfolgst Gesetzesbrecher und Unruhestifter.",
        "plus": ["KG", "BF", "ST", "CH"],
        "schema": {
            "KG": "+",
            "BF": "+",
            "ST": "+",
            "WI": "",
            "I": "Totenkopf",
            "GW": "⚔",
            "GS": "",
            "IN": "Krone",
            "WK": "",
            "CH": "+",
        },
        "stage1": {
            "name": "Flussrekrut",
            "tier": "silber",
            "rank": 1,
            "skills": ["ausdauer", "ausweichen", "athletik", "nahkampf.standard", "rudern", "schwimmen", "segeln", "wahrnehmung"],
            "skills_book": "Ausdauer, Ausweichen, Athletik, Nahkampf (Standard), Rudern, Schwimmen, Segeln, Wahrnehmung",
            "talents": ["Binnenschiffer", "Guter Schwimmer", "Sehr stark", "Starker Rücken"],
            "gear": ["Handwaffe (Schwert)", "Gambeson", "Uniform"],
            "gear_book": "Handwaffe (Schwert), Gambeson, Uniform",
        },
        "body": """Ein Fanfarenstoß kündigt die Ankunft der Imperialen Flusspatrouille an, eine die Wasserstraßen befahrende Wachtruppe, die sowohl für harte Schläger in ihren Reihen berüchtigt als auch für ihre gute Arbeit berühmt ist. Die meisten an Flüssen gelegenen Dörfer und Rasthöfe halten ihnen Anlegestellen frei, denn sie wissen, dass die Wasserwege ohne die Flusspatrouille von Kriminellen beherrscht würden. Die chronisch überlasteten Patrouillen konzentrieren sich auf ernste Verbrechen und lassen kleine Ordnungswidrigkeiten gegen eine Verwarngebühr auf sich beruhen. Auf den wichtigeren Routen haben die Patrouillen größere Schiffe, die mit sogenannten „Flussklingen“ bewaffnet sind, elitären Kämpfern, die sich um Bedrohungen durch Grünhäute oder Trolle kümmern.

Einige Flusswächter kommen kaum noch aufs Wasser, sondern bemannen stattdessen abgelegene Außenposten, die strategisch wichtige Gewässer überwachen. Andere bemannen schnelle Flussboote, die bei Nacht Schmuggler abfangen und aufbringen. Die größten Schiffe der Flusswächter sind hochseetauglich, starren vor Kanonen und Mörsern und sind für nahezu jede Eventualität gerüstet.

„Damals, als ich noch Flusswächterin war, kam irgendwann der Große Willi zu mir und sagte, ich solle ein bestimmtes Boot in Ruhe lassen. Er meinte, ich müsse es einfach nur vorbeilassen und damit wäre alles erledigt. Damals war ich noch jung und naiv, weißt du? Also habe ich dem Schiffsmeister davon erzählt. Und was war der Lohn für meine Ehrlichkeit? Nun, der Große Willi kam vorbei und hat mich aufgewischt. Schon am nächsten Morgen hat man mich dann aus der Flusspatrouille geworfen. Die haben da alle mit dringehangen, weißt du?“
– Nikki Schnelling, ehemalige Flusswächterin

Ein eifriger Flusswächter, der Boote durchsucht und Spuren folgt, kann leicht über ruchlose Pläne oder gefährliche Fracht stolpern. Für gewöhnlich arbeiten Flusswächter in monatelangen Schichten, was aber auch bedeutet, dass sie sich dazwischen monatelang frei nehmen können. Diese Struktur ist ideal für ein Abenteurerleben geeignet, denn so muss man als Flusswächter nicht seinen Posten aufgeben, um mal auszusetzen und privaten Angelegenheiten nachzugehen, oder sich mit seinem Weibel darüber zu streiten, ob das Verfolgen ins Landesinnere führender Spuren nun Dienstzeit ist oder nicht. Er können sich dienstfrei stellen lassen, der Sache nachgehen und dann mit dem nächsten Patrouillenzyklus wieder zu ihrer alten Wachtruppe stoßen.""",
        "weg": """### + Flussrekrut – Silber 1

**Fähigkeiten:** Ausdauer, Ausweichen, Athletik, Nahkampf (Standard), Rudern, Schwimmen, Segeln, Wahrnehmung
**Talente:** Binnenschiffer, Guter Schwimmer, Sehr stark, Starker Rücken
**Ausrüstung:** Handwaffe (Schwert), Gambeson, Uniform

### ⚔ Flusswächter – Silber 2

**Fähigkeiten:** Bestechen, Charme, Einschüchtern, Fernkampf (Schießpulver), Klatsch, Wissen (Flusswege)
**Talente:** Fischer, Erfahrener Reisender, Kriminell, Pulverschütze
**Ausrüstung:** Laterne, Lampenöl, Pistole mit 10 Schuss, Schild

### Totenkopf Flussklinge – Silber 4

**Fähigkeiten:** Anführen, Besonnenheit, Intuition, Klettern
**Talente:** Furchtlosigkeit (Strandräuber), Hass (1 nach Wahl), Lotse, Seemannsgang
**Ausrüstung:** Enterhaken, Helm, Kettenhemd

### Krone Flussoffizier – Gold 1

**Fähigkeiten:** Navigation, Wissen (Gesetze)
**Talente:** Bedrohlich, Gebieterisch, Halbweltgröße, Richtungssinn
**Ausrüstung:** Patrouillenboot mit Besatzung, Rangabzeichen""",
    },
    "lotse": {
        "name": "Lotse",
        "seite": 72,
        "voelker": "Halbling, Mensch, Zwerg",
        "tag": "Du führst Schiffe und Boote durch die tückischsten Gewässer der Alten Welt.",
        "plus": ["KG", "I", "GW"],
        "schema": {
            "KG": "+",
            "BF": "",
            "ST": "",
            "WI": "+",
            "I": "+",
            "GW": "⚔",
            "GS": "",
            "IN": "",
            "WK": "Totenkopf",
            "CH": "Krone",
        },
        "stage1": {
            "name": "Flusskundiger",
            "tier": "messing",
            "rank": 4,
            "skills": ["klatsch", "intuition", "rudern", "schwimmen", "wahrnehmung", "wissen.flusswege", "wissen.ort", "zechen"],
            "skills_book": "Klatsch, Intuition, Rudern, Schwimmen, Wahrnehmung, Wissen (Flusswege), Wissen (Ort/Region), Zechen",
            "talents": ["Binnenschiffer", "Fischer", "Nachtsicht", "Richtungssinn"],
            "gear": ["Handwaffe (Entermesser)", "Sturmlaterne und Öl"],
            "gear_book": "Handwaffe (Entermesser), Sturmlaterne und Öl",
        },
        "body": """Lotsen sind spezialisierte Flusskundige mit großer Expertise bezüglich örtlicher Gegebenheiten. Entlang der gefährlichsten Strecken des imperialen Flussnetzwerkes sind sie ein vertrauter Anblick und sie kassieren hohe Gebühren für etwas, das viele als leichte Arbeit abtun. Andere finden sie noch günstig, vergleicht man ihren Preis mit dem einer verlorenen Ladung.

Viele Lotsen spezialisieren sich auf bestimmte, sehr berüchtigte Flussbereiche, während andere nur zur Schneeschmelze oder bei Niedrigwasser arbeiten, wenn die Bedingungen besonders schwer sind. Andere Lotsen haben ein breiteres Wissen und geleiten Boote entlang ihrer ganzen Reise, wobei sie praktisch als deren Navigatoren fungieren. Dies ist vor allem bei großen Handelsbarken mit wertvoller Fracht gefragt, die zu einer ungünstigen Zeit im Jahr unterwegs sind.

„Da kam ein großes Schiff aus Marienburg, tief im Wasser, bis hoch an die Stückpforten. Ich sagte ihnen, dass es eine Krone kosten würde, sie durch die Fürstiefen zu geleiten. Kein schlechter Lohn, aber es war ja auch ein großes Schiff. Die arroganten Ödländer lachten und sagten, dass sie das schon selbst hinbekommen werden. Und dann sind sie natürlich gleich ins Flachwasser gedriftet und haben sich ein Loch in den Rumpf gerissen. Sie haben einen guten Teil ihrer Ladung verloren und es dauerte eine Woche, bis sie den Schaden repariert hatten. Ich nehme mal an, dass sie das etwas mehr gekostet hat als nur eine Krone.“
– Ilsa Dasche, Lotsin

Lotsen sind Spezialisten, die man mieten kann, und werden als solche gern von wohlhabenden Interessenten angeworben, die ihre Expertise bei irgendeiner riskanten Reise brauchen können. Selbst bei Fahrten ins Unbekannte ist ihr Wissen über Flüsse, Navigation und das Steuern von Schiffen extrem nützlich. Weil ihr Geschäft an vielen Orten eher saisonal ist, können es sich viele Lotsen erlauben, auf Reisen zu gehen, wenn dabei der Lohn stimmt. Diese Freiheit passt gut zu einem Leben als Abenteurer und zudem kann man noch immer wieder als Lotse arbeiten, wenn das Abenteurerleben doch nicht so lohnend war.""",
        "weg": """### + Flusskundiger – Messing 4

**Fähigkeiten:** Klatsch, Intuition, Rudern, Schwimmen, Wahrnehmung, Wissen (Flusswege), Wissen (Ort/Region), Zechen
**Talente:** Binnenschiffer, Fischer, Nachtsicht, Richtungssinn
**Ausrüstung:** Handwaffe (Entermesser), Sturmlaterne und Öl

### ⚔ Lotse – Silber 1

**Fähigkeiten:** Besonnenheit, Charme, Nahkampf (Standard), Navigation, Unterhalten (Erzählen), Sprache (1 nach Wahl)
**Talente:** Etikette (Gildenmitglieder), Flusskundig, Gespür für Ärger, Verhandlungsgenie
**Ausrüstung:** Lederwams, Seil, Ruderboot

### Totenkopf Navigator – Silber 3

**Fähigkeiten:** Einschüchtern, Feilschen, Wissen (Ort/Region), Wissen (Wracks)
**Talente:** Lotse, Scharfer Sinn (Sicht), Seemannsgang, Sehr stark
**Ausrüstung:** Stange, Sturmlaterne und Öl

### Krone Meisternavigator – Silber 5

**Fähigkeiten:** Anführen, Segeln
**Talente:** Aufgeweckt, Beharrlich, Guter Schwimmer, Sechster Sinn
**Ausrüstung:** Deckratte, kleines Flussboot""",
    },
    "schmuggler": {
        "name": "Schmuggler",
        "seite": 73,
        "voelker": "Halbling, Hochelf, Mensch, Zwerg",
        "tag": "Du schmuggelst Fracht, vermeidest Steuern und riskierst Durchsuchungen der Flusswächter, um maximalen Profit zu erzielen.",
        "plus": ["I", "GW", "GS", "IN", "WK"],
        "schema": {
            "KG": "",
            "BF": "",
            "ST": "",
            "WI": "",
            "I": "+",
            "GW": "+",
            "GS": "+",
            "IN": "+",
            "WK": "+",
            "CH": "Krone",
        },
        "stage1": {
            "name": "Flussstrolch",
            "tier": "messing",
            "rank": 2,
            "skills": ["athletik", "besonnenheit", "bestechen", "rudern", "schleichen.land", "schwimmen", "segeln", "zechen"],
            "skills_book": "Athletik, Besonnenheit, Bestechen, Rudern, Schleichen (Land oder Stadt), Schwimmen, Segeln, Zechen",
            "talents": ["Fischer", "Kriminell", "Starker Rücken", "Trittsicher (Sumpf)"],
            "gear": ["Großer Sack", "Maske oder Gesichtstuch", "Zunderkästchen", "Sturmlaterne und Öl"],
            "gear_book": "Großer Sack, Maske oder Gesichtstuch, Zunderkästchen, Sturmlaterne und Öl",
        },
        "body": """Der Großteil des Handels wird sowohl legal vom örtlichen Adel besteuert, als auch illegal von Banditen und Schutzgelderpressern. Da bieten sich Schmuggler als großzügige Helfer an. Kaufleute machen mehr Profit, der Kunde zahlt weniger, moralisch flexible Flusswächter erhalten ihren Anteil, Gesetzlosen wird aus dem Weg gegangen und alle profitieren. Naja, fast alle. Es erfordert Erfahrung und Witz, all die Büttel, Zöllner, Beamten und Neugierigen zu übertölpeln, doch Schmuggler gehen das Risiko ein, um sich selbst und ihren Familien das Auskommen zu sichern.

Schmuggler gibt es in vielen Formen. Manche transportieren kleine Fracht von hohem Wert, hochpreisige Waren für Adelige oder große Frachtmengen für halbseidene Kaufleute. Einige Schmuggler befassen sich auch mit illegalen Waren, ein Verbrechen, für das man, wenn man erwischt wird, deutlich mehr einbringt als ein paar verbrannte Finger oder das Schmuggler-Brandzeichen.

„Also, diese Flasche vom besten Bordeaux kommt hier hin. Die Flusswächter werden hier hinten suchen, sie finden und sie konfiszieren. Genau so wollen wir das, denn es verhindert, dass sie die zwölf anderen Flaschen finden, die wir darunter versteckt haben. Und selbst wenn sie die finden, ist noch nicht alles verloren, denn dann werden sie so zufrieden mit sich sein, dass sie sich nicht mehr genug Mühe geben, um die übrigen vierundzwanzig Flaschen im eigentlichen Versteck zu finden.“
– Hansel Solomon, Schmuggler

Schmuggler geraten oft in Abenteuer, auch wenn sie es für gewöhnlich bevorzugen, wenn die Dinge ruhig und ereignislos bleiben. Beim Schmuggeln können alle Arten von Dingen schieflaufen, und selbst wenn alles geklappt hat, gibt es stets die Verlockung der nächsten Tour, die natürlich noch größer und lukrativer ausfallen soll. Schon aus einer einzigen Schmuggeltour lässt sich eine ganze Abenteuerserie machen. Außerdem fällt es Schmugglern auch nie schwer, lohnende Beschäftigung abseits ihres eigentlichen Berufes zu finden. Jemanden, der immer ein Ass im Ärmel hat, ein Auge für Ärger besitzt und ruhig bleibt, wenn es doch mal hektisch wird, der ist bei jeder Expedition und jedem Abenteuer eine nützliche Begleitung.""",
        "weg": """### + Flussstrolch – Messing 2

**Fähigkeiten:** Athletik, Besonnenheit, Bestechen, Rudern, Schleichen (Land oder Stadt), Schwimmen, Segeln, Zechen
**Talente:** Fischer, Kriminell, Starker Rücken, Trittsicher (Sumpf)
**Ausrüstung:** Großer Sack, Maske oder Gesichtstuch, Zunderkästchen, Sturmlaterne und Öl

### ⚔ Schmuggler – Messing 3

**Fähigkeiten:** Feilschen, Geheimzeichen (Schmuggler), Klatsch, Nahkampf (Standard), Wahrnehmung, Wissen (Ort/Region)
**Talente:** Binnenschiffer, Etikette (Kriminelle), Sehr stark, Verhandlungsgenie
**Ausrüstung:** 2 Fässer, Handwaffe, Gambeson, Ruderboot

### Totenkopf Meisterschmuggler – Messing 5

**Fähigkeiten:** Einschüchtern, Intuition, Schätzen, Wissen (Flusswege)
**Talente:** Furchtlosigkeit (Flusswächter), Guter Schwimmer, Lotse, Schmierer
**Ausrüstung:** Flussstrolch, schnelles Flussboot

### Krone König der Schmuggler – Silber 2

**Fähigkeiten:** Sprache (1 nach Wahl), Anführen
**Talente:** Gerissenheit, Halbweltgröße, Seemannsgang, Trittsicher (Küste)
**Ausrüstung:** Verkleidungsset, kleine Flotte von Flussbooten""",
    },
    "seemann": {
        "name": "Seemann",
        "seite": 74,
        "voelker": "Halbling, Hochelf, Mensch, Zwerg",
        "tag": "Das Leben auf den Wellen des Ozeans ruft nach dir, und doch ist es so, dass viele Seeleute aus dem Reikland nie das offene Meer befahren …",
        "plus": ["KG", "GW", "GS", "CH"],
        "schema": {
            "KG": "+",
            "BF": "",
            "ST": "",
            "WI": "",
            "I": "Totenkopf",
            "GW": "+",
            "GS": "+",
            "IN": "Krone",
            "WK": "",
            "CH": "+",
        },
        "stage1": {
            "name": "Landratte",
            "tier": "silber",
            "rank": 1,
            "skills": ["gluecksspiel", "klatsch", "klettern", "nahkampf.waffenlos", "rudern", "schwimmen", "segeln", "zechen"],
            "skills_book": "Glücksspiel, Klatsch, Klettern, Nahkampf (Waffenlos), Rudern, Schwimmen, Segeln, Zechen",
            "talents": ["Fischer", "Guter Schwimmer", "Trittsicher (Küste)", "Starker Rücken"],
            "gear": ["Eimer", "Besen", "Wischlappen"],
            "gear_book": "Eimer, Besen, Wischlappen",
        },
        "body": """Seeleute befahren die Meere für die Imperiale Marine oder eines der Kaufmannshäuser. Das Reikland hat selbst keine Küste, doch zwischen Altdorf und dem Ödland ist der Reik meilenbreit und auch für Hochseeschiffe befahrbar. Die Erste Flotte des Imperiums patrouilliert diese Gewässer, sieht jedoch nur selten das offene Meer, denn die Gebühren, die zu entrichten sind, damit ein Kriegsschiff Marienburg passieren darf, sind exorbitant hoch.

Seeleute finden immer Arbeit, sei es als Matrose auf einer Kriegsgaleone der Imperialen Marine oder als Teil der Besatzung eines kleineren Handelsseglers. Einige Seeleute befahren die ganze Welt, entweder als Teil einer Besatzung, oder indem sie die Überfahrt mit ihrer Arbeit bezahlen. Am Reik befinden sich auch verschiedene Stützpunkte der Imperialen Marine, in denen ebenfalls häufig Seeleute angestellt sind.

„Ich kann das Meer sehen!“
– Marius Zelmann, optimistischer Seemann aus dem Reikland

„Ja, ich bin schon an Marienburg vorbeiggesegelt. Die verdammten Ödländer machen es uns so schwer wie möglich, das Meer zu erreichen. Ich schwöre dir, der verdammte Lotse hat uns dreimal um die gleiche Insel segeln lassen, nur zum Spaß, ehe wir auch nur Salzwasser gerochen haben. Und sie haben uns für alles doppelte Gebühren abgeknöpft. Sogar die Schiffskatze wurde als volles Besatzungsmitglied besteuert. Ehrlich gesagt bin ich froh, wieder hier zu sein.“
– Thomas Wesserbrug, Bootsmann

Hinter Marienburg erwartet den Seemann die ganze Welt. Die gefährliche Krallensee, der unermessliche Große Ozean, die exotischen Tausend Inseln, die Südliche See und der Schwarze Golf. Aber auch daheim kann ein Seemann sein ganzes Leben damit verbringen, auf dem Reik herumzuschippern, ohne zweimal den gleichen Tag zu erleben.""",
        "weg": """### + Landratte – Silber 1

**Fähigkeiten:** Glücksspiel, Klatsch, Klettern, Nahkampf (Waffenlos), Rudern, Schwimmen, Segeln, Zechen
**Talente:** Fischer, Guter Schwimmer, Trittsicher (Küste), Starker Rücken
**Ausrüstung:** Eimer, Besen, Wischlappen

### ⚔ Seemann – Silber 3

**Fähigkeiten:** Ausdauer, Ausweichen, Athletik, Nahkampf (Standard), Unterhalten (Singen), Sprache (1 nach Wahl)
**Talente:** Erfahrener Reisender, Katzenfüßig, Seemannsgang, Starke Beine
**Ausrüstung:** Handwaffe (Entermesser), Lederwams

### Totenkopf Bootsmann – Silber 5

**Fähigkeiten:** Anführen, Beruf (Zimmermann), Besonnenheit, Wahrnehmung
**Talente:** Beharrlich, Mächtiger Schlag, Seebär, Sehr stark
**Ausrüstung:** Handwerkszeug (Zimmermann)

### Krone Schiffsmeister – Gold 2

**Fähigkeiten:** Charme, Navigation
**Talente:** Gerissenheit, Lotse, Rhetorik, Richtungssinn
**Ausrüstung:** Seekarten, Segelschiff und Besatzung, Sextant, Fernrohr""",
    },
    "stauer": {
        "name": "Stauer",
        "seite": 75,
        "voelker": "Halbling, Mensch, Zwerg",
        "tag": "Offiziell belädst und entlädst du Schiffe für klingende Münze, doch jeder weiß, dass die Stauer die wahren Herrscher des Hafens sind.",
        "plus": ["KG", "WI", "I"],
        "schema": {
            "KG": "+",
            "BF": "",
            "ST": "⚔",
            "WI": "+",
            "I": "+",
            "GW": "",
            "GS": "Totenkopf",
            "IN": "",
            "WK": "",
            "CH": "Krone",
        },
        "stage1": {
            "name": "Dockarbeiter",
            "tier": "messing",
            "rank": 3,
            "skills": ["ausdauer", "ausweichen", "athletik", "klatsch", "klettern", "nahkampf.standard", "schwimmen", "zechen"],
            "skills_book": "Ausdauer, Ausweichen, Athletik, Klatsch, Klettern, Nahkampf (Standard), Schwimmen, Zechen",
            "talents": ["Schmutzig kämpfen", "Stämmig", "Starker Rücken", "Sehr stark"],
            "gear": ["Handwaffe (Entermesser)", "Lederhandschuhe"],
            "gear_book": "Handwaffe (Entermesser), Lederhandschuhe",
        },
        "body": """Die Gilden der Stauerleute haben das alleinige Recht, Schiffe zu beladen und entladen, womit es die in ihnen organisierten Stauer sind, die darüber bestimmen, wie schnell ein Handelsschiff abgefertigt wird. Dies führt dazu, dass viele Häfen effektiv von den Stauern und ihrer Gilde beherrscht werden. In größeren Städten gibt es oft mehrere Gilden, die um die Vorherrschaft kämpfen, nicht selten mit Gewalt. Erfahrene Vorleute kümmern sich um die Gildenangelegenheiten und rufen mit ihren schrillen Trillerpfeifen die Stauer-Trupps aus den umliegenden Tavernen zur Arbeit, sei es, weil ein Schiff angelegt hat oder das Revier verteidigt werden muss.

Stauer können allein in einem abgelegenen Dorf oder als Teil eines größeren Trupps auf einem chaotischen und lauten Kai arbeiten. Manchmal sind sie Teil einer kriminellen Bande, die nur etwas Fracht schleppt, um ihre eigentlichen Aktivitäten zu verschleiern. Manche Stauer sind auch einfach nur Antreiber, die dafür sorgen, dass alle anderen tüchtig zupacken.

„Schaut, ich weiß, dass wir auf Kohle spezialisiert sind, aber man muss ja auch mal über den Zaun gucken und so. Also laden wir alles, wenn das Geld stimmt, richtig? So, und jetzt lasst uns loslegen, ehe die Stückgut-Stauer kommen. Alles auf die Mole, Leute.“
– Albert Pförtner, Kohlen-Stauer

„Hör mal zu, Junge. Denk nicht, dass es die Stauer leicht haben. Sie geben einer gefährlichen und oft klaustrophobischen Arbeit nach, mit schweren Säcken, Ballen und Kisten in hohen Stapeln. Wenn man diese Arbeit falsch macht, dann kommt die Fracht aus der Balance und lässt vielleicht sogar die Barke kentern. Was ich sagen will ist, dass du Stauer immer anständig bezahlen solltest. Und wenn du möchtest, dass irgendein Boot sinkt, dann kostet das extra.“
– Aleida Fuchs, Kauffrau

Inmitten der Plackerei und der Eintönigkeit der Arbeit im Hafen finden sich als Stauer immer gute Möglichkeiten, in Abenteuer zu geraten. Die Banden der Stauer sind eine Macht, mit der man rechnen muss, und sie kämpfen auf den von ihnen kontrollierten Kais um jeden Fußbreit. Stauer sind nützliche Begleiter, denn sie können auf sich aufpassen und kommen gut mit einfachen Leuten zurecht.""",
        "weg": """### + Dockarbeiter – Messing 3

**Fähigkeiten:** Ausdauer, Ausweichen, Athletik, Klatsch, Klettern, Nahkampf (Standard), Schwimmen, Zechen
**Talente:** Schmutzig kämpfen, Stämmig, Starker Rücken, Sehr stark
**Ausrüstung:** Handwaffe (Entermesser), Lederhandschuhe

### ⚔ Stauer – Silber 1

**Fähigkeiten:** Bestechen, Einschüchtern, Glücksspiel, Schleichen (Stadt), Unterhalten (Erzählen), Wahrnehmung
**Talente:** Beharrlich, Etikette (Gildenmitglieder), Kriminell, Starke Beine
**Ausrüstung:** Gildenlizenz, Lederwams, Pfeife und Tabak, Trägermütze

### Totenkopf Vormann – Silber 3

**Fähigkeiten:** Besonnenheit, Schätzen, Intuition, Anführen
**Talente:** Etikette (Kriminelle), Rhetorik, Unterschlagen, Verhandlungsgenie
**Ausrüstung:** Trupp Stauer, Trillerpfeife

### Krone Hafenmeister – Silber 5

**Fähigkeiten:** Charme, Wissen (Steuern)
**Talente:** Bedrohlich, Halbweltgröße, Lesen & Schreiben, Numismatiker
**Ausrüstung:** Büro samt Personal, Schreibzeug""",
    },
    "strandraeuber": {
        "name": "Strandräuber",
        "seite": 76,
        "voelker": "Mensch, Zwerg, Waldelf",
        "tag": "Du lockst Schiffe in ihr nasses Verderben und machst dich mit deren Ladung davon.",
        "plus": ["KG", "ST", "I"],
        "schema": {
            "KG": "+",
            "BF": "Totenkopf",
            "ST": "+",
            "WI": "",
            "I": "+",
            "GW": "⚔",
            "GS": "",
            "IN": "",
            "WK": "",
            "CH": "Krone",
        },
        "stage1": {
            "name": "Frachtplünderer",
            "tier": "messing",
            "rank": 2,
            "skills": ["ausdauer", "ausweichen", "klettern", "nahkampf.standard", "rudern", "schwimmen", "ueberleben", "zechen"],
            "skills_book": "Ausdauer, Ausweichen, Klettern, Nahkampf (Standard), Rudern, Schwimmen, Überleben, Zechen",
            "talents": ["Fischer", "Kriminell", "Starker Rücken", "Türentreter"],
            "gear": ["Brecheisen", "großer Sack", "Lederhandschuhe"],
            "gear_book": "Brecheisen, großer Sack, Lederhandschuhe",
        },
        "body": """Manchmal senden die Götter dem Flussvolk einen unverhofften warmen Regen und lassen Waren von einem gescheiterten Schiff anspülen. Manchmal brauchen die Götter dabei etwas Hilfe, und hier kommen die Strandräuber ins Spiel. Sie legen heimtückische Fallen und setzen Signalfuer, um Schiffe auf Felsen oder Sandbänke zu locken, wo sie dann die Wracks plündern, egal was die möglicherweise noch lebende Besatzung dazu zu sagen hat.

Einige Strandräuber geben sich große Mühe mit ihren Fallen und lassen es stets wie einen Unfall aussehen, um dann eine plausible Distanz zu den Plünderern zu halten. Einige entern Schiffe aber auch einfach und werfen die Besatzung über Bord, sobald sie Boote mit zu geringer Bewachung ausmachen. Diese Flusspiraten werden von Straßen- und Flusswachen gleichermaßen gejagt und müssen stetig in Bewegung bleiben, um dem Arm des Gesetzes zu entfliehen.

„Wir haben diesen überreifen, saftigen Segler auf seinem Weg nach Carroburg erspäht, genau bei Anbruch der Nacht. Dann haben wir ein paar Feuer am linken Flussufer entzündet, damit sie denken, schon ein paar hundert Schritte näher am Dorf zu sein. Sie haben nach Steuerbord gedreht, so wie geplant, und sind voll auf die Sandbank gefahren. Woher hätten wir denn wissen sollen, dass das Boot eine Kompanie Pistoliere transportiert.“
– Greta Lachsmann, kurz vor dem Aufhängen

„Schau mal, wenn wir sie leben lassen, dann erzählen die den Wächtern, wo wir lauern. Deshalb ist es das Vernünftigste, se’ alle abzumurksen.“
– Martin Stein, pragmatischer Flusspirat

Ein gut geplanter und ausgeführter Strandraub ist ein Abenteuer in sich selbst. Man muss den Autoritäten entgehen, das Raubgut loswerden, die Leute am Plaudern hindern, und auch mögliche Nachforschungen der Geschädigten können Probleme bereiten. Denn wer weiß schon, was man da für Ware erbeutet hat und wer sich vielleicht auf den Weg macht, diese zurückzuholen. Strandräuber, die den Weg solcher Abenteuer kreuzen, haben gemeinhin kein Problem damit, ihr altes Leben hinter sich zu lassen oder in dieses zurückzukehren, wenn es wieder an der Zeit dafür ist.""",
        "weg": """### + Frachtplünderer – Messing 2

**Fähigkeiten:** Ausdauer, Ausweichen, Klettern, Nahkampf (Standard), Rudern, Schwimmen, Überleben, Zechen
**Talente:** Fischer, Kriminell, Starker Rücken, Türentreter
**Ausrüstung:** Brecheisen, großer Sack, Lederhandschuhe

### ⚔ Strandräuber – Messing 3

**Fähigkeiten:** Bestechen, Besonnenheit, Fallen stellen, Intuition, Navigation, Wahrnehmung
**Talente:** Fallensteller, Fliehen, Guter Schwimmer, Streuner
**Ausrüstung:** Handwaffe (Entermesser), Gambeson, Sturmlaterne und Öl

### Totenkopf Flusspirat – Messing 5

**Fähigkeiten:** Einschüchtern, Fernkampf (Armbrust), Klatsch, Schleichen (Land)
**Talente:** Bedrohlich, Binnenschiffer, Etikette (Kriminelle), Schmutzig kämpfen
**Ausrüstung:** Armbrust mit 10 Bolzen, Wurfanker und Seil, Flussboot

### Krone Strandräuberkapitän – Silber 2

**Fähigkeiten:** Anführen, Wissen (Flusswege)
**Talente:** Geborener Krieger, Lotse, Messerstecher, Rasender Angriff
**Ausrüstung:** Flotte von Flussbooten und Strandräuber-Besatzungen, Fass Bier, Gelenkeisen""",
    },
}

SCHEMA_NOTE = "Symbole wie im Buch: **+** Stufe 1 · **⚔** Stufe 2 · Totenkopf Stufe 3 · Krone Stufe 4."


def schema_row(schema: dict) -> str:
    cells = [schema[k] for k in ["KG", "BF", "ST", "WI", "I", "GW", "GS", "IN", "WK", "CH"]]
    return "| " + " | ".join(cells) + " |"


def write_one(slug: str, d: dict) -> None:
    folder = ROOT / slug
    folder.mkdir(parents=True, exist_ok=True)
    original = f"""# {d['name']} — Original

Quelle: S. {d['seite']}
Status: Original, nicht anfassen

**{d['name']}**
{d['voelker']}

{d['tag']}

{d['body']}

## Karriereschema des {d['name']}s

{SCHEMA_NOTE}

| KG | BF | ST | WI | I | GW | GS | IN | WK | CH |
|----|----|----|----|---|----|----|----|----|-----|
{schema_row(d['schema'])}

## Karriereweg

{d['weg']}

### Siehe auch

- [Angepasst](angepasst.md)
- [Details](details.md)
- [Hub](README.md)
- [Flussvolk](../README.md)
"""
    # Grammar: "des Lotsen" not "des Lotses" — fix a few
    original = original.replace("des Lotses", "des Lotsen")
    original = original.replace("des Seemanns", "des Seemanns")
    original = original.replace("Karriereschema des Strandräubers", "Karriereschema des Strandräubers")
    original = original.replace("Signalfuer", "Signalfuer")  # fix below
    original = original.replace("Signalfuer", "Signalfeuer")
    (folder / "original.md").write_text(original.replace("Er können sich", "Sie können sich"), encoding="utf-8")

    s1 = d["stage1"]
    angepasst = f"""# {d['name']} — Projekt

Quelle der Regeln: [original.md](original.md) (S. {d['seite']})

Stufe 1: **{s1['name']}**, {s1['tier'].title()} {s1['rank']}.

## Bogen

Keys: `klasse` = `flussvolk`, `karriere` = `{slug}`, `karrierestufe` = 1, `karrierestufe_name` = {s1['name']}, `status.tier` = {s1['tier']}, `status.rang` = {s1['rank']}.

## Talente Stufe 1

Verfügbar, nicht automatisch alle auf dem Bogen: {", ".join(s1['talents'])}.

## Karte

Keine eigene Katalogkarte. Karriere filtert, welche Fähigkeiten/Talente der Charakter **kennen** darf.

### Befehl

- keine Katalog-ID

### Siehe auch

- [Original](original.md)
- [Details](details.md)
- [Flussvolk](../README.md)
- [Karrieren-Liste](../../03-karrieren-liste.md)
- [Status](../../02-status-system.md)
"""
    (folder / "angepasst.md").write_text(angepasst, encoding="utf-8")

    details = f"""# {d['name']} — Details / Hilfe

JSON-`id`: `{slug}`
Quelle: S. {d['seite']} · [careers.json](../../../data/careers.json)

## Hilfe

- Stufe-1-Name **{s1['name']}**, Status {s1['tier']} {s1['rank']}.
- Schema-Plus (Stufe 1): {", ".join(d['plus'])}. Symbole gegen die Buchkarte halten.
- Höhere Stufen nicht Demo.

## Prüfen

- [prüfen am Buch S. {d['seite']}] Karriereschema-Symbole gegen die Karte halten.

### Siehe auch

- [Original](original.md)
- [Angepasst](angepasst.md)
- [Flussvolk](../README.md)
- [Karrieren-Liste](../../03-karrieren-liste.md)
"""
    (folder / "details.md").write_text(details, encoding="utf-8")


def main() -> None:
    for slug, d in CAREERS.items():
        write_one(slug, d)
    print("wrote", len(CAREERS), "careers")


if __name__ == "__main__":
    main()
