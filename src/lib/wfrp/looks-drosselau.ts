import type { PlaceLook } from "./looks";

export const STREET_LOOKS: Record<string, PlaceLook> = {
  torstrasse: {
    offen:
      "Nasser Stein unter den Sohlen, der Geruch von Pferdeharn, der sich nicht verzieht. Das Stadttor liegt im Rücken, der Bogen tropft. Links das Zollhaus, die Luke halb im Schatten; daneben der Gasthof Zum Wanderer, das Schild hängt schief, eine Laterne brennt noch. Eine Bäckerei dampft, eine Fleischerei hat den Ladenladen einen Spalt, ein Kramladen zeigt in der Scheibe Seile und kleine Sigmar-Amulette. Vorstadt hinter euch, Marktplatz voraus, Bettelgasse zur Seite. Fünf stehen unter dem Torbogen. Niemand hat sie hereingewunken.",
    grob:
      "Der Mann in der wollenen Jacke der Stadt steht zu nah. Helm unter dem Arm, der Riemen der Handwaffe ist zu. Der Dampf der Bäckerei verschluckt die Ecke zur Bettelgasse. Du siehst Jacke, Riemen, den nassen Stein — und dass die Luke am Zollhaus zufällt. Mehr gibt der Blick nicht her, solange er zählt.",
    teil:
      "Links Zollhaus, daneben der Wanderer, dann Bäckerei, Fleischerei, Kram. Vorne der Weg zum Markt, seitlich die Bettelgasse, hinter dem Tor der Vorstadtring. Der Mann in der Jacke der Stadt hat fünf vor sich und zählt Lippen, nicht Augen. Hinter ihm steht niemand Zweites im Licht. An der Ecke zur Bettelgasse hängt etwas Nasses, ohne Gestalt darunter.",
    voll:
      "Die Luke am Zollhaus steht einen Spalt. Kreide an der Tür: Striche, heutiger Tross, nicht gestern. Hinter Helm kein zweiter Mann — die Wache am Tor ist er allein, in dieser Stunde. Die Bäckerei dampft, Laib, nicht Kuchen. An der Bettelgasse-Ecke hängt ein nasser Lappen, niemand darunter. Nr. 8, das Wohnhaus der Wache, liegt dunkel; Nr. 9 das Brunnenhaus, der Stein nass vom Rand. Helm zählt Lippen, nicht Augen. Er hat die fünf schon im Torbuch, bevor jemand spricht.",
    scharf:
      "Die Kreide ist frisch, der Strich für diesen Tross noch feucht. Im Spalt der Luke liegt ein Stift, kein zweites Auge. Der nasse Lappen an der Bettelgasse ist ein Kinderhemd, nicht Fetzen. Hinter der Scheibe von Nr. 8 bewegt sich kurz eine Frau, dann nichts. Helm kennt die fünf aus dem Buch, nicht aus dem Gesicht — er braucht die Namen, weil die Schrift ihn deckt, nicht weil er sie schon gehört hat.",
    sl:
      "Arne Helm, 38, wohnt Torstraße 8 mit Dora (35) und Finn (7). Dienst: Zollhaus Nr. 1. Keim still: Torwache prüft auf Waffen und Mutation — nur der SL zieht. Krug führt den Wanderer (Nr. 2). Laib die Bäckerei, Metz die Fleischerei, Docht den Kram. Karr wohnt Nr. 5, arbeitet am Ring. Staub Nr. 6. Brunnen Nr. 9 leer. Engine zieht niemanden.",
  },
  vorstadtring: {
    offen:
      "Außerhalb der Mauer. Der Weg ist weich, der Dreck hält. Sechs Hütten stehen unregelmäßig, zwei davon ohne Dach das trägt. Ein Schuppen für Karren, der Geruch von nassem Holz und Ochse. Die Stadtmauer im Rücken, das Tor nicht weit, und trotzdem fühlt sich der Ring an, als gehöre er der Stadt nicht ganz. Niemand kommt entgegen.",
    grob:
      "Hütten, Dreck, der Schuppen. Ein Dach hängt durch. Der Wind kommt vom Sumpf, nicht vom Fluss. Gesichter siehst du nicht, nur Rauch aus einem Rohr.",
    teil:
      "Nr. 1 eine Bettlerhütte, Nr. 2 Tagelöhner aus dem Sumpf, Nr. 3 der Fuhrmannsschuppen der Karr, Nr. 4 eine Wäscherin. Zwei leer: Dach eingefallen, und eine Tür mit einem verwitterten Zeichen. Der Weg führt nur zurück zur Torstraße.",
    voll:
      "Laus in der ersten Hütte, allein. Bei Moos Kindergeschrei hinter der Luke, Sumpf noch in der Sprache. Der Schuppen gehört Hannes Karr, der in der Torstraße wohnt — hier stehen Wagen und Ochse. Hilde Blau wäscht, Anni reicht. Das eingefallene Dach von Nr. 5 tropft in den Lehm. An Nr. 6 ein Katzenzeichen, alt, Ranald oder Warnung, die Farbe ist runter.",
    scharf:
      "Das Zeichen an Nr. 6 ist von innen nachgezogen worden, nicht nur verwittert. Unter dem Schuppen ein zweiter Satz Radspuren, schmaler als Karrs Wagen, frisch im Dreck. Bei Moos liegt hinter der Hütte ein Bündel, das nicht nach Wäsche riecht.",
    sl:
      "Wohnen: Laus, Moos, Blau. Karr arbeitet hier, wohnt Tor 5. Nr. 5 leer, Nr. 6 leer mit Ranald-Keim — nur SL zieht. Kein Automat.",
  },
  marktplatz: {
    offen:
      "Der Platz hält die Stadt zusammen. Pflaster, das die Reifen kennen. Gildehaus, Zunft, Sigmarstempel mit offener Tür, Wechsler, Schreiber, Rat. Zwei Kaufmannshäuser, ein Ratshaus, ein Kontor ohne Schild. Leute gehen, aber niemand bleibt. Der Tempel riecht nach kaltem Stein und Wachs.",
    grob:
      "Ein Platz, zu groß für die Zahl der Leute. Der Tempel zieht den Blick, das Kontor stößt ihn ab. Stimmen unter der Gilde, nicht hier draußen.",
    teil:
      "Kaufmannsgilde Nr. 1, Handwerkerzunft Nr. 2, Sigmarstempel Nr. 3. Wechsler, Schreiberstube, Rat. Zwei Wohnhäuser der Kaufleute, ein Stadtrat, das leere Kontor am Rand. Wege in fast jede Gasse der Stadt.",
    voll:
      "Wilhelm Holtz sitzt in der Gilde, nicht hier. Vater Brant Keil liest im Tempel nicht laut. Heller wechselt, Feder beglaubigt im Namen eines Grafen, der nicht in der Stadt ist. Talbeck im Rat. Berthold Holtz Nr. 7, Voss Nr. 8, Stein Nr. 9. Das Kontor Nr. 10 hat Staub auf der Schwelle, ein Jahr alt, die Klinke unberührt. Der Platz führt zur Torstraße, zur Gildengasse, zur Schmiedezeile, zum Weberweg, zur Krämerstraße, zur Schlemmergasse.",
    scharf:
      "Am Kontor fehlt das Schloss nicht — es ist zu, aber der Staub vor der Klinke ist an einer Stelle gewischt, vorgestern oder gestern. Im Tempel hängt neben Sigmar ein kleines, neues Brett: Namen von Kranken, nicht von Toten. Der Wechsler hat die innere Luke zu, obwohl der Platz Tag hat.",
    sl:
      "Graf nicht in der Stadt. Siegel bei Feder, Markt 5. Kontor-Keim still. Holtz Meister Gildengasse 2, Sohn Markt 7. Engine zieht niemanden.",
  },
  gildengasse: {
    offen:
      "Enger als der Platz, höher gebaut. Lager, das Haus des Gildemeisters, ein Schreiber, eine Herberge für Zunftbrüder, das Archiv. Holz und Wachs, weniger Mist. Die Gasse will Ordnung zeigen.",
    grob:
      "Türen mit Schildern, die du lesen könntest, wenn du stehen bliebest. Eine Herberge atmet Bier. Das Archiv atmet Staub.",
    teil:
      "Lager der Zunft, Wohnhaus Holtz, Wohnhaus Eckert, Herberge, Archiv. Nach Marktplatz und Weberweg.",
    voll:
      "Wilhelm und Elsa Holtz in Nr. 2, das beste Haus der Gasse, Silber ohne Scham. Franz Eckert schreibt für die Gilde, Kind hinter der Luke. Die Herberge nimmt Durchreisende, keine Wohnfamilie. Das Archiv hat vergitterte Fenster. Im Lager Kisten mit Zunftmarke, nicht mit Namen.",
    scharf:
      "Im Archiv brennt noch Licht, obwohl die Gasse zur Ruhe will. Eine Kiste im Lager trägt eine Marke, die nicht Drosselau ist.",
    sl:
      "Holtz Meister. Eckert Schreiber. Keim keines, außer was der SL an Verträge hängt. Engine zieht niemanden.",
  },
  schmiedezeile: {
    offen:
      "Hitze, auch wenn das Feuer hinter der Tür liegt. Kohle, Eisen, ein Ton, den die Mauer kennt. Hufschmiede, Waffenschmiede, Wohnhäuser, Kohlenlager, Lehrling. Der Rauch zieht zum Markt, nicht aus der Stadt.",
    grob:
      "Esse und Gestank von gelöschtem Eisen. Ein Hammer, nicht zwei. Die Gasse ist kürzer als ihr Lärm.",
    teil:
      "Hufschmiede Nr. 1, Waffe Nr. 2, Hammer wohnt Nr. 3, zwei Gesellen Nr. 4 (Ulric, Wolf, kein Tempel), Kohle Nr. 5, Lehrling Nagel Nr. 6. Wege: Marktplatz, Gerbergasse.",
    voll:
      "Bodo Hammer und Gerda in Nr. 3, Ilse fort nach Bögenhafen. Ulrich Stahl liefert der Wache. Wulf und Mark in Nr. 4 tragen den Wolf, nicht Sigmar. Timo Nagel, achtzehn, Neffe, eigenes Haus. Das Kohlenlager hat keine Wache, nur ein Schloss, das älter ist als der Lehrling.",
    scharf:
      "In der Waffenschmiede liegt ein Stück, das nicht in die Stadtwache gehört — zu lang, zu neu. Bei den Gesellen ein Amulett am Nagel, Ulric, blank gegriffen. Das Schloss am Kohlenlager ist kürzlich geölt.",
    sl:
      "Ulric unter den Gesellen, kein Tempel. Stahl beliefert Wache. Keim still, bis SL zieht. Engine zieht niemanden.",
  },
  weberweg: {
    offen:
      "Klopfen der Rahmen, nasser Wollegeruch, Farbe die in der Nase bleibt. Weberei, Schneiderei, Meisterhaus, Schneiderhaus, Färber. Der Weg ist sauberer als die Gerbergasse, enger als der Markt.",
    grob:
      "Wolle und Seife. Eine Frau schneidet hinter Glas. Der Rest ist Türen.",
    teil:
      "Weberei Arbeit, Schneiderei Arbeit, Tuch wohnt Nr. 3, Schneider Nr. 4, Beize färbt Nr. 5. Markt, Gildengasse, Krämerstraße.",
    voll:
      "Eberhard Tuch, Lotte, Rike Gesellin. Else Schneider Meisterin, Pieter Geselle, zwei Kinder. Niko Beize und Wera in der Farbe, die Hände dauernd blau. Die Weberei ist Arbeit, nicht Wohnung — sie schlafen in Nr. 3.",
    scharf:
      "In der Färbe ein Bottich, der nicht nach Wolle riecht. Bei Schneider ein Ballen Tuch ohne Zunftmarke, hinten, zugedeckt.",
    sl:
      "Schneider ist die im Originalverzeichnis namentlich so genannte Familie. Beize Messing. Engine zieht niemanden.",
  },
  kraemerstrasse: {
    offen:
      "Gemischtwaren, Kräuter, Wohnungen, eine Buchbinderei, ein leerer Hutladen. Die Straße hält, was die Stadt braucht, wenn sie nicht zum Markt will. Unter manchem Ladentisch liegt mehr als die Zunft erlaubt.",
    grob:
      "Krämergeruch, trocken, und ein schärferer dahinter, den du nicht benennen solltest. Ein leeres Schaufenster ohne Hut.",
    teil:
      "Bode Krämer, Wurzel Kräuter, Wohnungen dahinter, Blatt bindet Bücher, Nr. 6 leer (ehemals Hüte). Markt, Weberweg, Schlemmergasse, Bettelgasse.",
    voll:
      "Hartmut Bode, Ida, Paul. Maren Wurzel und Jette — der Laden führt unter dem Tisch, was ein Hexenjäger nicht freundlich lesen würde. Simon Blatt bindet, Eva hilft. Der Hutladen ist ausgeräumt, die Stange noch da, kein Staub ganz gleichmäßig.",
    scharf:
      "Bei Wurzel ein Päckchen ohne Etikett, frisch gebunden. Im leeren Hutladen Fußspuren, kleiner als ein Mann, nicht älter als ein Tag. Bode hat hinter der Theke eine Liste, die nicht Preise sind.",
    sl:
      "Kräuter-Keim still (Hexenjäger-Subtext). Hutladen leer. Engine zieht niemanden. SL entscheidet, was unter dem Tisch liegt, wenn jemand kauft.",
  },
  gerbergasse: {
    offen:
      "Der Gestank erklärt, warum die Gasse am Rand liegt. Lohe, nasse Haut, Krankheiten, die hier häufiger kursieren. Gerberei, Meisterhaus, Gesellen, Schuppen für Häute. Die Mauer ist nah.",
    grob:
      "Die Nase gibt den Rest auf. Türen, ein Schuppen, niemand der winkt.",
    teil:
      "Gerberei, Meister, zwei Gesellen, Lagerschuppen. Schmiedezeile, Töpfergasse, Rattenwinkel.",
    voll:
      "Der Meister wohnt neben der Grube. Die Gesellen husten, einer schlecht. Der Schuppen tropft, Häute in Reihen. Der Weg in den Rattenwinkel ist kürzer als einem lieb ist.",
    scharf:
      "Eine Haut im Schuppen trägt ein Zeichen, das nicht Zunft ist. Der hustende Geselle hat unter der Manschette etwas, das nach Salbe von Wurzel riecht, nicht nach Lohe.",
    sl:
      "Krankheit als Keim, nicht als Automat. Rattenwinkel grenzt. Engine zieht niemanden.",
  },
  toepfergasse: {
    offen:
      "Drei Häuser, der Ofen wärmt die Gasse. Töpferei, Meister, Lehrling. Lehm an den Stufen, Rauch der nicht nach Eisen riecht.",
    grob:
      "Ofen, Lehm, eine enge Gasse. Der Lärm der Schmiedezeile ist weg.",
    teil:
      "Töpferei mit Brennofen, Wohnhaus des Töpfers, Lehrling. Gerbergasse, Morrgasse.",
    voll:
      "Der Meister brennt, der Lehrling trägt. Scherben vor der Tür, absichtlich, gegen Nässe. Die Morrgasse liegt nah genug, dass man Glocken nicht braucht, um den Friedhof zu wissen.",
    scharf:
      "Unter den Scherben eine, die nicht hier gebrannt wurde — Glasur fremd. Der Lehrling hat nasse Knie, als wäre er am Friedhof gewesen, nicht am Ofen.",
    sl:
      "Drei Häuser nur. Keim still. Engine zieht niemanden.",
  },
  morrgasse: {
    offen:
      "Zwei Gebäude am Friedhof. Totengräberhaus, Morr-Kapelle. Die Gasse will keine dritte Stimme. Erde, Wachs, der Ritus, der Untote fernhalten soll — so sagt man in der Stadt, und niemand lacht dabei.",
    grob:
      "Stille, die nicht leer ist. Eine Kapelle, ein Haus, der Friedhof dahinter.",
    teil:
      "Totengräber im Dienst des Morr-Kultes. Kapelle für Trauerfeiern. Töpfergasse, Schlemmergasse.",
    voll:
      "Der Totengräber wohnt im Dienst, nicht aus Wahl. Die Kapelle ist klein, Morr schwarz, die Tür nicht zu. Frische Erde auf einem Hügel, der nicht alt genug für den Stein ist.",
    scharf:
      "Der frische Hügel hat keine Gaben. An der Kapellentür ein zweites Schloss, innen, das nicht zum Kult passt. Der Totengräber war heute schon zweimal draußen, die Stiefel zeigen es.",
    sl:
      "Morr-Ritus als Notwendigkeit in der Fiktion. Keim: frischer Hügel ohne Stein — nur SL. Engine zieht niemanden.",
  },
  schlemmergasse: {
    offen:
      "Drei Häuser, und die Gasse will fröhlich sein. Taverne, Vergnügungshaus, Wohnung des Wirts. Bier, billiges Öl, Stimmen die nicht zum Tempel gehören. Im Hinterzimmer der Taverne hängt, was die Stadt nicht an die Tür schreibt.",
    grob:
      "Lachen hinter Holz. Ein Geruch nach Bier und etwas Süßem. Die Wohnung darüber ist still.",
    teil:
      "Taverne, Vergnügung, Wirt. Marktplatz, Krämerstraße, Morrgasse, Bettelgasse. Nicht der Wanderer — das ist Torstraße.",
    voll:
      "Der Wirt wohnt in Nr. 3. Die Taverne hat ein Hinterzimmer, dessen Tür nicht für jeden gilt. Ranald hängt dort, klein, ohne Schild. Das Vergnügungshaus hat gelbe Vorhänge, die bei Tag nicht helfen.",
    scharf:
      "Im Hinterzimmer zwei Tassen, noch warm, und ein dritter Platz ohne Tasse. Hinter dem Vergnügungshaus eine Luke in den Keller, nicht verriegelt. Der Wirt kennt Arne, und Arne kennt die Gasse, und keiner von beiden sagt das am Tor.",
    sl:
      "Ranald-Schrein Keim still. Nicht verwechseln mit Zum Wanderer. Engine zieht niemanden. SL spielt, wer im Hinterzimmer sitzt.",
  },
  bettelgasse: {
    offen:
      "Innerhalb der Mauer, und trotzdem Armut. Acht Nummern, davon drei leer, eine vernagelt, eine mit dem Ruf, sie spuke. Hütten, ein Brunnen, nasse Wäsche die nicht trocknet. Die Torstraße ist nah und hilft nicht.",
    grob:
      "Eng, nass, zu viele Türen für zu wenig Rauch. Der Brunnen hat einen Rand, den Kinder glatt getreten haben.",
    teil:
      "Bewohnt: Tagelöhner, Witwe, Bettlerclique, noch ein Tagelöhner. Leer: Dach, vernagelt, „spukt“. Brunnen Nr. 8. Torstraße, Krämerstraße, Schlemmergasse, Rattenwinkel.",
    voll:
      "Nr. 3 die Clique — munkele Kult, niemand beweist. Nr. 6 der Spuk, die Nachbarn gehen außen rum. Der Brunnen ist Gemeinschaft, das Wasser nicht immer klar. Hanni würde hier eine Ecke suchen, ohne Schuld; die Gasse gibt keine, die nichts kostet.",
    scharf:
      "An Nr. 6 Kratzer innen an der vernagelten Nachbartür, nicht außen. Bei der Clique ein Zeichen unter der Schwelle, frisch, nicht Ranald. Der Brunnen hat am Grund etwas Hellen, das kein Stein ist.",
    sl:
      "Kult-Keim in Nr. 3 still. Spuk Nr. 6 still. Hanni shortGoal: warme Ecke ohne Schuld. Engine zieht niemanden.",
  },
  rattenwinkel: {
    offen:
      "Die letzte Gasse. Zwei Häuser, beide falsch. Eine verfallene Wohnhütte, der letzte Bewohner vor Jahren spurlos. Daneben das letzte leerstehende Gebäude der Stadt: Ratten, Kratzgeräusche unter dem Boden, ein Geruch wie Verwesung. Nachbarn meiden den Winkel. Ob Aberglaube oder nicht — das entscheidet nicht die Gasse.",
    grob:
      "Zu still für Ratten, und trotzdem Ratten. Der Winkel nimmt das Licht nicht an.",
    teil:
      "Zwei Leerstände. Gerbergasse, Bettelgasse. Kein drittes Haus. Kein Schild.",
    voll:
      "Nr. 1 eingefallen, die Tür hängt. Nr. 2 steht, und das ist schlimmer. Die Ratten sind fett. Der Geruch kommt nicht nur aus dem Keller. Niemand hat hier in diesem Jahr Holz nachgelegt.",
    scharf:
      "Unter Nr. 2 ein Gang, kein Kellerloch — die Kratzer sind zu regelmäßig für Ungeziefer. In Nr. 1 unter einem Brett ein Löffel, nicht alt genug für „vor Jahren“. Jemand war hier, seit der letzte Bewohner „spurlos“ ist.",
    sl:
      "SL-Entscheidung: Aberglaube oder Skaven/Nurgle/Kult. Keim feuerte nie von selbst. Engine erfindet nichts. Nicht öffnen, solange die Torstraße die Frage ist.",
  },
};

export const HOUSE_LOOKS: Record<string, PlaceLook> = {
  "torstrasse-1": {
    offen:
      "Das Zollhaus der Torstraße. Innen eine Diele, eine Luke zur Gasse, ein Tisch mit Torbuch, eine Bank, an der niemand sitzt. Der Geruch nach nasser Wolle und Tinte. Ausgang wieder auf die Torstraße. Arne Helm ist der Dienst, nicht das Haus.",
    grob:
      "Diele, Tisch, das Buch zugeklappt, sobald du siehst. Die Luke fällt. Mehr gibt der Raum nicht, während er zählt.",
    teil:
      "Torbuch, Kreide an der Innenseite der Luke, ein Haken für den Helm, die Handwaffe in Reichweite, nicht gezogen. Keine zweite Wache im Raum. Eine Tür nach hinten, geschlossen.",
    voll:
      "Das Buch hat die fünf schon in einer Zeile, die Namen noch leer, die Zahl nicht. Hinter der hinteren Tür ein kleiner Raum: Stempel, eine Kasse in Groschen, ein Haken mit einem zweiten Riemen ohne Waffe. Das Fenster zur Nr. 8 ist blind, Vorhang.",
    scharf:
      "Unter dem Torbuch ein zweites Blatt: Merkmale, nicht Namen — Narben, Gang, der Zwerg extra. Die Kasse ist ärmer als ein Zolltag sein sollte. An der hinteren Tür Lehm, der nicht von der Torstraße stammt.",
    sl:
      "Arne Dienst. Mutation/Waffen-Keim nur SL. Kasse und zweites Blatt nur scharf oder wenn SL es legt. Engine zieht Arne nicht noch einmal.",
  },
  "torstrasse-2": {
    offen:
      "Zum Wanderer. Diele, Feuer das nicht groß ist, der Geruch nach Bier und gekochtem Kraut. Detlef Krug hinter der Theke, wenn der SL ihn zieht. Nicht die Taverne der Schlemmergasse. Ausgang die Torstraße.",
    grob: "Wärme, Dunst, eine Theke. Stimmen, die verstummen, wenn die Tür fällt.",
    teil: "Theke, zwei Tische, eine Treppe nach oben. Mara in der Küche hörbar. Ben, dreizehn, Zapfen.",
    voll: "Krug Silber 1. Zimmer oben für Durchreisende, heute keines frei das sich so nennt — die Türen sind zu. An der Wand ein Brett mit Namen, die nicht mehr kommen.",
    scharf: "Ein Name auf dem Brett ist durchgestrichen, frisch. Hinter der Theke eine Flasche ohne Etikett, für Gäste die nicht zahlen wie andere.",
    sl: "Krug: Detlef 43, Mara 39, Ben 13. Engine zieht niemanden.",
  },
  "torstrasse-3": {
    offen: "Die Bäckerei Laib. Hitze, Mehl in der Luft, der Laden ist die Wohnung. Gerd, Hanne, Lina wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Dampf und Brot. Die Theke, sonst nichts, die Augen tränen vom Ofen.",
    teil: "Ofen hinten, ein Brett mit Laiben, nicht mit Kuchen. Kinderspuren im Mehl.",
    voll: "Gerd 41, Hanne 38, Lina 10. Der Ofen war vor der Frist schon an. Ein zweites Brett ist leer — Mehl knapp, oder der Tross kauft nicht.",
    scharf: "Hinterm Ofen ein Sack ohne Zunftsiegel. Lina hat von der Luke aus auf den Torbogen gesehen, nicht auf den Teig.",
    sl: "Laib. Engine zieht niemanden.",
  },
  "torstrasse-4": {
    offen: "Fleischerei Metz. Kalt trotz der Straße. Konrad, Rita, Jan Geselle. Haken, ein Block, der Geruch der bleibt. Ausgang die Gasse.",
    grob: "Kälte, Eisen, der Block. Die Straße ist weg, sobald die Tür fällt.",
    teil: "Haken halb leer. Jan in der Schürze, Konrad nicht vorn.",
    voll: "Konrad 45, Rita 42, Jan 17. Das Fleisch ist von dieser Woche, nicht von gestern. Ein Haken ohne Ware, blank geputzt.",
    scharf: "Der blanke Haken war heute benutzt, das Fett am Boden ist frisch gewischt, nicht alt. Rita zählt nicht laut.",
    sl: "Metz. Engine zieht niemanden.",
  },
  "torstrasse-5": {
    offen: "Wohnhaus Karr. Fuhrunternehmer, Silber 1. Hannes, Berta, Ulf, Mina. Der Schuppen steht am Vorstadtring, nicht hier. Die Stube riecht nach Leder und nassem Tuch. Ausgang die Torstraße.",
    grob: "Stube, zu viele Stiefel an der Wand. Eine Frau, oder niemand, je nach dem, was der SL legt.",
    teil: "Wohnung, nicht Laden. Kinderzeug. Ein Fenster zur Gasse, das auf das Zollhaus sieht.",
    voll: "Hannes 40, Berta 37, Ulf 14, Mina 8. Der Wagen ist nicht hier. An der Wand eine Peitsche, die nicht für Kinder ist.",
    scharf: "Unter der Bank ein Frachtzettel nach Altdorf, durchgerissen, Datum vor der Sperre.",
    sl: "Karr Arbeit am Ring. Engine zieht niemanden.",
  },
  "torstrasse-6": {
    offen: "Wohnhaus Staub. Tagelöhner, Messing 2. Rudi, Nadja, Kilian, Fine. Eng, sauberer als die Bettelgasse, ärmer als Karr. Ausgang die Gasse.",
    grob: "Enge, Kohl, ein Kind das verstummt.",
    teil: "Ein Raum vorn, einer hinten. Vier Leute, zu wenig Stühle.",
    voll: "Rudi 35, Nadja 32, Kilian 9, Fine 5. Die Schuhe an der Tür sind nass vom Tor, nicht vom Feld.",
    scharf: "Rudi war am Zoll, bevor die fünf kamen — Lehm an den Säumen, derselbe wie an Arnes hinterer Tür.",
    sl: "Staub. Engine zieht niemanden.",
  },
  "torstrasse-7": {
    offen: "Kramladen Docht. Kerzen, Seile, Sigmar-Amulette für Reisende. Ewald und Sigrid. Der Laden ist klein und will nützlich sein. Ausgang die Torstraße.",
    grob: "Wachs, Hanf, Metall klein. Die Scheibe beschlägt.",
    teil: "Theke, drei Fächer, Amulette in einer Schale. Seil nach Gewicht.",
    voll: "Ewald 37, Sigrid 34. Die Amulette sind Guss, nicht geweiht. Ein Fach bleibt zu, obwohl der Laden offen ist.",
    scharf: "Im verschlossenen Fach keine Ware — eine Liste von Namen, die am Tor waren, in einer anderen Hand als Arnes.",
    sl: "Docht. Liste nur wenn SL sie legt. Engine zieht niemanden.",
  },
  "torstrasse-8": {
    offen: "Wohnhaus Helm. Arne wohnt hier, dient im Zollhaus. Dora, Finn. Silber 1, die Stube ordentlich, der Helm hängt nicht hier — er ist unter dem Arm am Tor. Ausgang die Torstraße.",
    grob: "Ordnung, wenig Schmuck. Eine Frau in der Tür oder die Tür nur einen Spalt, je nachdem, wen der SL setzt.",
    teil: "Stube, eine Kammer, Finns Kleid am Nagel, sieben Jahre. Das Fenster sieht aufs Zollhaus.",
    voll: "Dora 35, Finn 7. Arne ist nicht im Haus. Auf dem Tisch ein Teller, kalt, für einen Mann der nicht zum Essen kam. Sigmar an der Wand, klein.",
    scharf: "Finn hat vom Fenster die fünf gezählt und der Mutter gesagt. Unter Arnes Nagel ein zweiter Schlüssel, nicht zum Zollhaus — kleiner, älter.",
    sl: "Helm Wohnung. Arne ist in Szene am Zoll, nicht doppelt hier, bis SL ihn schickt. Engine zieht niemanden.",
  },
  "torstrasse-9": {
    offen: "Das Brunnenhaus. Öffentlich, niemand wohnt. Stein, nasser Rand, der Eimer schwer. Das Wasser ist trinkbar, wenn die Stadt das sagt. Ausgang die Torstraße.",
    grob: "Stein, Wasser, dein Gesicht unklar darin.",
    teil: "Kein Dach das schützt. Rinnen zum Pflaster. Keine Schale, kein Schild.",
    voll: "Der Rand ist glatt von Händen. Unten kein Unrat, der Brunnen wird gehalten. Vom Rand siehst du den Torbogen und die Luke.",
    scharf: "Am Innenstein ein Ritz, frisch: fünf Striche, nicht Kreide. Jemand hat hier gezählt, bevor Arne rauskam.",
    sl: "Niemand wohnt. Ritz nur scharf oder SL. Engine zieht niemanden.",
  },
  "vorstadtring-1": {
    offen: "Bettlerhütte am Ring. Lehm, nasses Stroh, ein Tuch statt Tür. Laus, wenn der SL ihn setzt. Ausgang der Vorstadtring.",
    grob: "Dunkel, nass, ein Geruch nach Mensch der lange nicht gewaschen hat.",
    teil: "Ein Raum. Eine Schale, ein Nagel, kein zweites Lager.",
    voll: "Laus, dreißig, allein, Messing 0. Die Schuhe an der Schwelle sind die einzigen. Kein Feuer heute.",
    scharf: "Unter dem Stroh ein Groschen, durchgelocht, an einem Faden. Nicht zum Zahlen.",
    sl: "Laus. Allein. Engine zieht niemanden.",
  },
  "vorstadtring-2": {
    offen: "Hütte der Moos. Rauch aus einem Rohr, Kindergeschrei hinter der Luke, Sumpf noch in der Luft. Jaan, Sanna, Birk, wenn der SL sie setzt. Ausgang der Ring.",
    grob: "Rauch, eine Luke, sonst nichts das sich hält.",
    teil: "Ein Raum vorn, einer hinten. Drei Stimmen, oder keine, je nach dem was der SL legt.",
    voll: "Jaan 34, Sanna 31, Birk 8. Aus dem Sumpf. Die Sprache hängt. An der Wand ein Netz, nass, nicht zum Fisch.",
    scharf: "Im Netz hängt Kraut, das hier nicht wächst. Birk hat den Torbogen von weitem gesehen, nicht die Hütte.",
    sl: "Moos. Sumpf. Engine zieht niemanden.",
  },
  "vorstadtring-3": {
    offen: "Fuhrmannsschuppen der Karr. Wagen, Ochse, nasses Holz. Hier wohnt niemand — Hannes schläft Torstraße 5. Ausgang der Ring.",
    grob: "Holz, Dung, ein Schatten der ein Rad sein könnte.",
    teil: "Zwei Wagen, einer ohne Plane. Geschirr an Nägeln. Ein Ochse, oder die Wärme die er lässt.",
    voll: "Der Schuppen gehört Hannes Karr. Der Wagen für den Tross steht nicht. Peitsche an der Wand, dieselbe Form wie in der Stube in der Torstraße.",
    scharf: "Zweiter Satz Radspuren, schmaler als Karrs Wagen, frisch im Dreck. Unter der Plane ein Strick, der nicht zum Geschirr passt.",
    sl: "Karr Arbeit. Wohnen Tor 5. Engine zieht niemanden.",
  },
  "vorstadtring-4": {
    offen: "Hütte der Blau. Wäsche hängt, trocknet nicht. Lauge, nasse Wolle. Hilde, Anni, wenn der SL sie setzt. Ausgang der Ring.",
    grob: "Nass, Seife, ein Tuch im Gesicht.",
    teil: "Ein Kessel, eine Leine, zwei Schlafstellen. Das Wasser kommt vom Ring, nicht vom Brunnen in der Stadt.",
    voll: "Hilde 36, Anni 12. Messing 2. Die Wäsche trägt Zeichen der Torstraße, nicht des Rings — sie waschen für innen.",
    scharf: "In einem Hemd, das nicht der Ring zahlt, steckt ein Zettel: ein Name, der nicht Blau ist.",
    sl: "Blau. Engine zieht niemanden.",
  },
  "vorstadtring-5": {
    offen: "Leerstehende Hütte. Das Dach trägt nicht. Tropfen in den Lehm. Niemand wohnt. Ausgang der Ring.",
    grob: "Nass, Dunkel, nichts das antwortet.",
    teil: "Leerstand. Das Gebälk hängt. Die Nachbarn gehen außen rum.",
    voll: "Die Leere ist vollständig. Wer hier wohnte, hat nichts gelassen das einen Namen trägt.",
    scharf: "Im Lehm ein Absatz, frisch, kleiner als ein Mann. Jemand war hier nach dem letzten Regen.",
    sl: "Leer. Kein Keim. Engine zieht niemanden.",
  },
  "vorstadtring-6": {
    offen: "Leerstehende Hütte. An der Tür ein verwittertes Zeichen, Katze oder Ranald. Niemand wohnt. Ausgang der Ring.",
    grob: "Tür, Farbe die runter ist, sonst nichts.",
    teil: "Leer. Das Zeichen sitzt innen und außen. Die Nachbarn nennen es nicht.",
    voll: "Das Zeichen ist alt. Ranald oder Warnung, die Farbe ist runter. Drinnen Staub, keine Schlafstelle.",
    scharf: "Das Zeichen ist von innen nachgezogen worden, nicht nur verwittert. Unter der Schwelle ein zweites, frisch, kleiner.",
    sl: "Leer. Ranald-Keim still — nur SL zieht. Engine zieht niemanden.",
  },
  "marktplatz-1": {
    offen: "Kaufmannsgilde. Schwere Tür, Wachs, Holz das nach Geld riecht. Wilhelm Holtz Sitz, nicht Wohnung. Ausgang der Platz.",
    grob: "Schild, Schwelle, Stimmen hinter Holz.",
    teil: "Diele, eine Tafel mit Namen, eine Tür zu den Meistern. Kein Markt draußen in der Diele.",
    voll: "Holtz Meister sitzt hier, wohnt Gildengasse 2. Die Tafel trägt Holtz, Voss, Heller, Bode. Silber ohne Scham an den Beschlägen.",
    scharf: "Ein Name auf der Tafel ist blasser: die auswärtige Kompanie, durchgestrichen, nicht abgeschabt.",
    sl: "Gilde, kein Wohnen. Engine zieht niemanden.",
  },
  "marktplatz-2": {
    offen: "Handwerkerzunft. Sammelhaus, Hammer und Tuch an einem Schild. Niemand wohnt. Ausgang der Platz.",
    grob: "Lärm gedämpft, ein Schild mit zu vielen Zeichen.",
    teil: "Halle, Bänke, Wappen der Gewerke. Eine Luke zum Archiv der Gildengasse, zu.",
    voll: "Sitz aller Handwerke. Hammer, Stahl, Tuch, Schneider, Beize, Metz, Laib, Leder, Ton. Keine Wohnfamilie.",
    scharf: "An einem Wappen fehlt ein Nagel, frisch. Das Schild der Gerber hängt tiefer als die anderen.",
    sl: "Sammelzunft. Engine zieht niemanden.",
  },
  "marktplatz-3": {
    offen: "Sigmarstempel. Kalte Steine, Wachs, die Tür offen. Vater Brant Keil, Novize Jost, wenn der SL sie setzt. Ausgang der Platz.",
    grob: "Stein, Echo, ein Hammer in der Nische den du nicht siehst, nur ahnst.",
    teil: "Schiff, Altar, eine Seitentür. Namen von Kranken an einem Brett, nicht von Toten.",
    voll: "Brant Keil 53, Jost 19. Stadtpatron. Das Brett ist neu. Keil liest nicht laut, solange der Platz Tag hat.",
    scharf: "Neben Sigmar ein kleines, neues Brett. Ein Name darauf ist durchgestrichen, gestern oder heute. Jost hat Kreide an den Fingern.",
    sl: "Keil, Jost. Engine zieht niemanden.",
  },
  "marktplatz-4": {
    offen: "Geldwechsler Heller. Innere Luke, Metall, der Geruch nach Kupfer. Magnus, Ute, wenn der SL sie setzt. Ausgang der Platz.",
    grob: "Luke, Gitter, ein Ton von Münzen der aufhört, sobald die Tür fällt.",
    teil: "Theke, Waage, drei Fächer. Die innere Luke ist zu, obwohl der Platz Tag hat.",
    voll: "Magnus 44, Ute 40. Silber 3. Kronen, Schillinge, Groschen. Die Waage ist geeicht, das Siegel des Grafen hängt, der Graf nicht.",
    scharf: "Hinter der Waage ein Streifen Papier ohne Summe — nur ein Zeichen, das nicht Heller ist.",
    sl: "Heller. Siegel hängt, Graf nicht da. Engine zieht niemanden.",
  },
  "marktplatz-5": {
    offen: "Schreiberstube Feder. Tinte, Staub, Siegelwachs. Leopold Notar des Grafen, Agnes, wenn der SL sie setzt. Ausgang der Platz.",
    grob: "Federkiele, eine Glocke an der Tür, sonst nichts.",
    teil: "Pult, ein zweiter Tisch hinten, ein Schrank mit drei Schlössern. Das Siegel von Grünberg in einer Schale, sichtbar.",
    voll: "Leopold 39, Agnes 34. Silber 2. Das Siegel des Grafen liegt hier, nicht der Graf. Agnes kopiert, Leopold beglaubigt.",
    scharf: "Im Schrank ein Brief mit gebrochenem Siegel, nicht Grünberg — und trotzdem hier.",
    sl: "Feder. Siegel hier. Graf nicht in der Stadt. Engine zieht niemanden.",
  },
  "marktplatz-6": {
    offen: "Ratshaus. Schwere Tür, das Wappen der Stadt, nicht des Grafen. Helmuth Talbeck Amt, wenn der SL ihn setzt. Ausgang der Platz.",
    grob: "Holz, Wappen, eine Stille die nicht zum Markt passt.",
    teil: "Diele, eine Treppe, die Ratsstube oben. Unten eine Bank für Bittsteller, leer.",
    voll: "Helmuth 46 Bürgermeister, Mathilde 42, Johann 18 Schreibergehilfe. Silber 5. Die Wohnung im Verzeichnis ungenannt — sie schlafen irgendwo im Haus.",
    scharf: "Auf der Bank ein Abdruck, noch warm. Johann hat die Tinte woanders als Feder.",
    sl: "Talbeck Amt. Wohnung ungenannt = hier. Engine zieht niemanden.",
  },
  "marktplatz-7": {
    offen: "Wohnhaus Holtz, der Sohn. Gut gebaut, Silber ohne Scham. Berthold, Saskia, die Kinder, wenn der SL sie setzt. Ausgang der Platz.",
    grob: "Glas, Vorhang, ein Geruch nach Wachs der teurer ist als Docht.",
    teil: "Diele, Stube, eine Treppe. Das Fenster sieht auf den Tempel, nicht auf das Kontor.",
    voll: "Berthold 30, Saskia 27, Emmerich 6, Liese 3. Silber 5. Vater Wilhelm in der Gildengasse 2. Der Sohn wohnt näher am Markt als der Meister.",
    scharf: "Im Flur ein Kästchen mit der Marke der auswärtigen Kompanie, leer, nicht abgegeben.",
    sl: "Holtz Sohn. Vater Gildengasse 2. Engine zieht niemanden.",
  },
  "marktplatz-8": {
    offen: "Wohnhaus Voss. Kaufmann, andere Familie als Holtz. Kaspar, Hilda, wenn der SL sie setzt. Ausgang der Platz.",
    grob: "Ordnung, weniger Silber als nebenan, immer noch mehr als die Torstraße.",
    teil: "Stube, Kontor hinten, eine Karte an der Wand die den Reik zeigt.",
    voll: "Kaspar 41, Hilda 38, Pieter 15 auf der Reik. Silber 4. Die Karte hat Drosselau als Punkt, Altdorf als Ziel.",
    scharf: "Ein Brief von Pieter, das Siegel nass — er schrieb, das Tor sei zu, bevor die Stadt es sagte.",
    sl: "Voss. Nicht Holtz. Engine zieht niemanden.",
  },
  "marktplatz-9": {
    offen: "Wohnhaus Stein. Stadtrat, ordentlich, kein Schild. Reiner, Klara, Anike, wenn der SL sie setzt. Ausgang der Platz.",
    grob: "Tür, Klingel, ein Geruch nach Bohnerwachs.",
    teil: "Diele, Stube, ein Fenster auf den Rat. Anike hat ein Buch auf der Bank, zugeklappt.",
    voll: "Reiner 48, Klara 43, Anike 16. Silber 3. Stein sitzt im Rat neben Talbeck. Das Buch ist Gesetz, nicht Gebet.",
    scharf: "Zwischen den Seiten ein Zettel: Kontor Nr. 10, eine Frage, keine Antwort.",
    sl: "Stein. Engine zieht niemanden.",
  },
  "marktplatz-10": {
    offen: "Leerstehendes Kontor. Staub auf der Schwelle, die Klinke unberührt, ein Jahr. Niemand wohnt. Ausgang der Platz.",
    grob: "Zu, Staub, der Platz ist weg sobald du siehst.",
    teil: "Die Tür ist zu. Schild abgehängt, der Nagel bleibt. Fenster blind.",
    voll: "Auswärtige Kompanie, seit einem Jahr weg. Keim. Feuert nicht von selbst. Der Staub vor der Klinke ist an einer Stelle gewischt.",
    scharf: "Der Wisch ist vorgestern oder gestern. Innen, durch den Spalt: ein Tisch ohne Stuhl, ein Fach offen.",
    sl: "Kontor-Keim still. Engine zieht niemanden.",
  },
  "gildengasse-1": {
    offen: "Lagerhaus der Zunft. Kisten, Zunftmarke, niemand wohnt. Ausgang die Gildengasse.",
    grob: "Holz, Staub, ein Schloss.",
    teil: "Gänge aus Kisten. Eine Marke pro Stapel. Fenster vergittert.",
    voll: "Kisten mit Zunftmarke, nicht mit Namen. Eine trägt eine Marke, die nicht Drosselau ist, wenn der Blick scharf genug ist — sonst nicht.",
    scharf: "Die fremde Marke ist dieselbe wie am Kontor Nr. 10, nur kleiner.",
    sl: "Niemand wohnt. Engine zieht niemanden.",
  },
  "gildengasse-2": {
    offen: "Wohnhaus Holtz, der Meister. Das beste Haus der Gasse, Silber ohne Scham. Wilhelm, Elsa, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Beschläge, Glas, ein Diener oder niemand.",
    teil: "Diele mit Stein, nicht Holz. Eine Treppe die nicht knarrt. Sohn wohnt am Markt, nicht hier.",
    voll: "Wilhelm 54, Elsa 50. Silber 5. Bestes Haus. Berthold Markt 7. Holtz sitzt in der Gilde, schläft hier.",
    scharf: "Im Flur ein zweiter Schlüsselbund, einer zum Archiv, einer der nicht zur Gasse passt.",
    sl: "Holtz Meister. Engine zieht niemanden.",
  },
  "gildengasse-3": {
    offen: "Wohnhaus Eckert. Schreiber der Gilde. Franz, Nela, Timo, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Tinte schon an der Schwelle, ein Kind hinter der Luke oder keins.",
    teil: "Stube, Pult, Kinderspiel unter dem Tisch. Kleiner als Holtz, sauber.",
    voll: "Franz 36, Nela 33, Timo 9. Silber 1. Franz schreibt für die Gilde, nicht für den Grafen — das ist Feder.",
    scharf: "Auf dem Pult eine Abschrift ohne Kopf. Der Inhalt betrifft das Kontor, nicht die Zunft.",
    sl: "Eckert. Engine zieht niemanden.",
  },
  "gildengasse-4": {
    offen: "Herberge für Zunftbrüder. Bier, Durchreisende, keine Wohnfamilie. Ausgang die Gasse.",
    grob: "Wärme, Dunst, Stimmen die verstummen.",
    teil: "Diele, Theke, Treppe zu Kammern. Heute keine Tür die sich so nennt — frei.",
    voll: "Nimmt Durchreisende, keine Wohnfamilie. Nicht Zum Wanderer, nicht die Taverne. Zunftzeichen über der Theke.",
    scharf: "Eine Kammer ist zu, von innen. Der Riegel ist nicht Zunft.",
    sl: "Keine Wohnfamilie. Engine zieht niemanden.",
  },
  "gildengasse-5": {
    offen: "Zunftarchiv. Vergitterte Fenster, Staub, Verträge. Niemand wohnt. Ausgang die Gasse.",
    grob: "Gitter, Staub, Licht das noch brennt oder nicht.",
    teil: "Regale, ein Pult, drei Schlüssel an einem Brett — einer fehlt.",
    voll: "Verträge, Meisterbriefe, Steuerlisten. Licht brennt noch, obwohl die Gasse zur Ruhe will.",
    scharf: "Der fehlende Schlüssel hängt nicht. An seiner Stelle ein Abdruck, warm.",
    sl: "Niemand wohnt. Engine zieht niemanden.",
  },
  "schmiedezeile-1": {
    offen: "Hufschmiede. Hitze, Esse, der Ton den die Mauer kennt. Arbeit der Hammer, wohnen Nr. 3. Ausgang die Zeile.",
    grob: "Glut, Gestank von gelöschtem Eisen, ein Hammer nicht zwei.",
    teil: "Esse, Amboss, ein Ring für Pferde. Die Wohnung ist die nächste Tür.",
    voll: "Bodo Hammer arbeitet hier, schläft Nr. 3. Hufeisen an der Stange, heutige, nicht gestrige.",
    scharf: "Ein Eisen trägt eine Marke, die nicht Drosselau ist — derselbe fremde Schlag wie im Lager.",
    sl: "Hammer Arbeit. Wohnen Nr. 3. Engine zieht niemanden.",
  },
  "schmiedezeile-2": {
    offen: "Waffenschmiede Stahl. Kälter als die Hufe, der Stahl will es. Ulrich, Kathe, wenn der SL sie setzt. Ausgang die Zeile.",
    grob: "Öl, Kante, ein Geräusch das aufhört.",
    teil: "Esse, Ständer, Klingen ohne Griff. Ein Stück unter Tuch.",
    voll: "Ulrich 49, Kathe 46. Silber 2. Beliefert die Wache. Wohnung ungenannt = Werkstatt.",
    scharf: "Unter dem Tuch ein Stück, das nicht in die Stadtwache gehört — zu lang, zu neu.",
    sl: "Stahl. Wache. Engine zieht niemanden.",
  },
  "schmiedezeile-3": {
    offen: "Wohnhaus Hammer. Meisterhaus, rußig am Sims. Bodo, Gerda, wenn der SL sie setzt. Ausgang die Zeile.",
    grob: "Ruß, Wärme die nicht die Esse ist, eine Frau oder niemand.",
    teil: "Stube, Kammer, ein leerer Nagel wo ein Mädchenkleid hing.",
    voll: "Bodo 47, Gerda 44. Silber 2. Ilse 18 nach Bögenhafen verheiratet. Der Nagel bleibt.",
    scharf: "Ein Brief aus Bögenhafen, das Siegel ungebrochen. Gerda hat ihn nicht geöffnet.",
    sl: "Hammer Wohnung. Engine zieht niemanden.",
  },
  "schmiedezeile-4": {
    offen: "Wohnhaus der Gesellen Eisen. Zwei Männer, der Wolf an der Wand, nicht Sigmar. Wulf, Mark, wenn der SL sie setzt. Ausgang die Zeile.",
    grob: "Bier, Eisen, ein Amulett das du nicht liest.",
    teil: "Ein Raum, zwei Lager, ein Nagel mit Wolf. Kein Tempel in der Stadt für sie.",
    voll: "Wulf 32, Mark 29. Messing 4. Ulric, kein Tempel. Das Amulett ist blank gegriffen.",
    scharf: "Hinter dem Wolf ein zweites Zeichen, älter, nicht Ulric — zugedeckt.",
    sl: "Eisen. Ulric unter den Gesellen, kein Tempel. Engine zieht niemanden.",
  },
  "schmiedezeile-5": {
    offen: "Kohlenlager. Schloss, Staub, niemand wohnt. Ausgang die Zeile.",
    grob: "Schwarz, trocken, ein Schloss das älter ist als der Lehrling.",
    teil: "Stapel, eine Gasse dazwischen, das Schloss kürzlich geölt.",
    voll: "Kohle der Meister, keine Köhlerfamilie. Das Schloss ist älter als Nagel, das Öl nicht.",
    scharf: "Hinter dem hintersten Stapel ein Sack ohne Zunftsiegel, leichter als Kohle.",
    sl: "Niemand. Engine zieht niemanden.",
  },
  "schmiedezeile-6": {
    offen: "Wohnhaus Nagel. Lehrling, achtzehn, eigenes Haus, Neffe. Timo, wenn der SL ihn setzt. Ausgang die Zeile.",
    grob: "Eng, Ruß, ein Bett das noch Lehrling ist.",
    teil: "Ein Raum. Amboss klein, zum Üben. Kein zweites Lager.",
    voll: "Timo Nagel 18, Neffe von Hammer. Messing 3. Eigenes Haus. Die Esse in Nr. 1 ist nicht seine.",
    scharf: "Unter dem Brett ein Eisen, das er nicht dem Meister gezeigt hat — zu fein für Hufe.",
    sl: "Nagel. Engine zieht niemanden.",
  },
  "weberweg-1": {
    offen: "Weberei. Klopfen der Rahmen, nasse Wolle. Arbeit der Tuch, wohnen Nr. 3. Ausgang der Weg.",
    grob: "Wolle, Takt, Staub der in der Nase bleibt.",
    teil: "Stühle, Ketten, ein Gang zur Wohnung. Niemand schläft zwischen den Rahmen.",
    voll: "Eberhard Tuch arbeitet hier, schläft Nr. 3. Rike Gesellin, wenn der SL sie an den Stuhl setzt.",
    scharf: "Ein Ballen ohne Zunftmarke, hinten, zugedeckt — nicht Tuch, eher Schneider.",
    sl: "Tuch Arbeit. Wohnen Nr. 3. Engine zieht niemanden.",
  },
  "weberweg-2": {
    offen: "Schneiderei. Eine Frau schneidet hinter Glas, oder das Glas ist leer. Arbeit der Schneider, wohnen Nr. 4. Ausgang der Weg.",
    grob: "Tuch, Kreide, eine Schere die aufhört.",
    teil: "Laden, Tische, eine Tür zur Wohnung. Maße an der Wand.",
    voll: "Else Schneider Meisterin arbeitet hier, schläft Nr. 4. Pieter Geselle. Einzige Familie, die im Original so heißt.",
    scharf: "Ein Maß an der Wand ist Kind, nicht Frau — und keiner in Nr. 4 ist so klein mehr.",
    sl: "Schneider Arbeit. Wohnen Nr. 4. Engine zieht niemanden.",
  },
  "weberweg-3": {
    offen: "Wohnhaus Tuch. Meisterhaus, Wolle noch in den Balken. Eberhard, Lotte, Rike, wenn der SL sie setzt. Ausgang der Weg.",
    grob: "Wolle, Seife, eine Treppe.",
    teil: "Stube, Kammer der Gesellin, Webstuhl klein zum Abend.",
    voll: "Eberhard 48, Lotte 45, Rike 20 Gesellin. Silber 2. Sie schlafen hier, arbeiten Nr. 1.",
    scharf: "Rikes Kammer hat ein Fenster zum Färber. Die Luke war heute offen, von innen.",
    sl: "Tuch Wohnung. Engine zieht niemanden.",
  },
  "weberweg-4": {
    offen: "Wohnhaus Schneider. Else Meisterin, Pieter, zwei Kinder, wenn der SL sie setzt. Ausgang der Weg.",
    grob: "Ordnung, Nadelkissen, Kinderspuren im Kreidestaub.",
    teil: "Stube, Werkstattabend, zwei Kammern. Lena, Karl.",
    voll: "Else 36 Meisterin, Pieter 38 Geselle, Lena 14, Karl 11. Silber 1. Einzige ausdrücklich so genannte Familie im Originalverzeichnis.",
    scharf: "Unter Lenas Kissen ein Ballenrest ohne Marke — derselbe Stoff wie hinten in der Schneiderei.",
    sl: "Schneider Wohnung. Engine zieht niemanden.",
  },
  "weberweg-5": {
    offen: "Färberwerkstatt Beize. Farbe die in der Nase bleibt, Hände die dauernd blau sind. Niko, Wera, wenn der SL sie setzt. Ausgang der Weg.",
    grob: "Nass, scharf, ein Bottich den du nicht benennen solltest.",
    teil: "Bottiche, Leinen, Wohnung hinten in derselben Diele. Kein zweites Haus.",
    voll: "Niko 35, Wera 32. Messing 5. Werkstatt = Wohnung. Die Hände bleiben blau.",
    scharf: "Ein Bottich riecht nicht nach Wolle. Der Dampf ist süßer, und Wera steht nicht dort.",
    sl: "Beize. Engine zieht niemanden.",
  },
  "kraemerstrasse-1": {
    offen: "Krämerladen Bode. Gemischtwaren, trocken, was die Stadt braucht wenn sie nicht zum Markt will. Arbeit, wohnen Nr. 3. Ausgang die Straße.",
    grob: "Krämergeruch, Theke, Fächer.",
    teil: "Theke, Gänge, eine Tür zur Wohnung. Liste an der Wand, Preise.",
    voll: "Hartmut Bode arbeitet hier, schläft Nr. 3. Hinter der Theke eine zweite Liste, wenn der Blick reicht — sonst nur Preise.",
    scharf: "Die zweite Liste sind keine Preise. Namen, die am Tor waren, in einer Hand die nicht Arnes ist — oder Bode zählt anders.",
    sl: "Bode Arbeit. Wohnen Nr. 3. Engine zieht niemanden.",
  },
  "kraemerstrasse-2": {
    offen: "Kräuterhandlung Wurzel. Trocken vorn, schärfer dahinter, den du nicht benennen solltest. Maren, wenn der SL sie setzt. Wohnen Nr. 4. Ausgang die Straße.",
    grob: "Kraut, Staub, eine Schale.",
    teil: "Regale, Theke, ein Tuch über dem unteren Fach. Jette nicht vorn.",
    voll: "Maren arbeitet hier, schläft Nr. 4. Unter dem Ladentisch liegt, was ein Hexenjäger nicht freundlich läse. Keim still.",
    scharf: "Ein Päckchen ohne Etikett, frisch gebunden. Der Geruch ist nicht Heilkraut.",
    sl: "Wurzel Arbeit. Keim still. SL entscheidet, was unter dem Tisch liegt, wenn jemand kauft. Engine zieht niemanden.",
  },
  "kraemerstrasse-3": {
    offen: "Wohnhaus Bode. Hinter dem Laden, Silber 1. Hartmut, Ida, Paul, wenn der SL sie setzt. Ausgang die Straße.",
    grob: "Wohnung, Brot, ein Kind das verstummt.",
    teil: "Stube, Kammer, eine Tür die in den Laden geht ohne die Gasse.",
    voll: "Hartmut 42, Ida 39, Paul 12. Silber 1. Die Tür zum Laden spart die Straße.",
    scharf: "Paul hat unter dem Bett eine Schale Kraut, nicht aus Nr. 1 — aus Nr. 2.",
    sl: "Bode Wohnung. Engine zieht niemanden.",
  },
  "kraemerstrasse-4": {
    offen: "Wohnhaus Wurzel. Hinter der Kräuterhandlung. Maren, Jette, wenn der SL sie setzt. Ausgang die Straße.",
    grob: "Kraut auch hier, schwächer, ein Mädchen oder niemand.",
    teil: "Stube, Kammer, Bündel an der Decke. Messing 5, nicht Silber.",
    voll: "Maren 40, Jette 16. Messing 5. Jette hilft, steht nicht vorn.",
    scharf: "An Jettes Nagel ein Amulett, nicht Sigmar, nicht Morr. Blank gegriffen.",
    sl: "Wurzel Wohnung. Engine zieht niemanden.",
  },
  "kraemerstrasse-5": {
    offen: "Buchbinderei Blatt. Leim, Leder, Papier. Simon, Eva, wenn der SL sie setzt. Ausgang die Straße.",
    grob: "Leim, Presse, ein Geruch der in der Nase klebt.",
    teil: "Werkstatt = Stube. Presse, Fäden, ein Fach für Aufträge.",
    voll: "Simon 38, Eva 34. Silber 1. Eva hilft. Die Aufträge tragen Zunft und Rat, nicht den Grafen — der ist Feder.",
    scharf: "Ein Band ohne Titel, nass noch, der Inhalt ist Liste nicht Gebet.",
    sl: "Blatt. Engine zieht niemanden.",
  },
  "kraemerstrasse-6": {
    offen: "Leerstehender Laden. Ehemals Hüte. Die Stange noch da, kein Staub ganz gleichmäßig. Niemand wohnt. Ausgang die Straße.",
    grob: "Leeres Schaufenster, eine Stange, sonst nichts.",
    teil: "Ausgeräumt. Hutstock im Fenster. Fußboden nicht gleichmäßig grau.",
    voll: "Ehemals Hutmacher. Niemand. Die Stange bleibt. Der Staub ist an einer Spur unterbrochen.",
    scharf: "Fußspuren, kleiner als ein Mann, nicht älter als ein Tag. Hinter der Stange ein Hutblock, der nicht leer war.",
    sl: "Leer. Engine zieht niemanden.",
  },
  "gerbergasse-1": {
    offen: "Gerberei. Der Gestank erklärt die Gasse. Lohe, nasse Haut. Arbeit der Leder, wohnen Nr. 2. Ausgang die Gasse.",
    grob: "Die Nase gibt den Rest auf. Gruben, sonst nichts.",
    teil: "Gruben, Gestelle, ein Gang zum Haus. Die Mauer ist nah.",
    voll: "Dietrich Leder arbeitet hier, schläft Nr. 2. Häute in Reihen. Der Weg in den Rattenwinkel ist kürzer als einem lieb ist.",
    scharf: "Eine Haut trägt ein Zeichen, das nicht Zunft ist.",
    sl: "Leder Arbeit. Wohnen Nr. 2. Engine zieht niemanden.",
  },
  "gerbergasse-2": {
    offen: "Wohnhaus Leder. Meister neben der Grube. Dietrich, Hedwig, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Lohe auch hier, schwächer, eine Tür die dicht sein will und es nicht ist.",
    teil: "Stube, Kammer, Fenster zu den Gruben nicht zur Stadt.",
    voll: "Dietrich 50, Hedwig 47. Silber 1. Sie halten die Nase, die Gasse nicht.",
    scharf: "Hedwig hat Salbe von Wurzel, nicht von Lohe — dasselbe wie am hustenden Gesellen, wenn der SL ihn legt.",
    sl: "Leder Wohnung. Engine zieht niemanden.",
  },
  "gerbergasse-3": {
    offen: "Wohnhaus Gerbergesellen. Zwei Männer, einer hustet schlecht, wenn der SL ihn setzt. Lutz, Enno. Ausgang die Gasse.",
    grob: "Enge, Husten, Lohe.",
    teil: "Ein Raum, zwei Lager. Krankheiten kursieren hier häufiger. Kein Automat.",
    voll: "Lutz 31, Enno 28. Messing 3. Einer hustet. Keim still, bis SL zieht ob jemand krank ist.",
    scharf: "Unter der Manschette Salbe von Wurzel, nicht Lohe. Das Päckchen ohne Etikett hat denselben Geruch.",
    sl: "Gerb. Krankheit als Keim, nicht als Automat. Engine zieht niemanden.",
  },
  "gerbergasse-4": {
    offen: "Lagerschuppen für Häute. Tropft, Reihen, niemand wohnt. Ausgang die Gasse.",
    grob: "Nass, Haut, Dunkel.",
    teil: "Gestelle, ein Gang, der Boden steht. Kein Schloss das hält.",
    voll: "Niemand. Häute in Reihen. Der Schuppen tropft. Der Winkel ist die nächste Biegung.",
    scharf: "Die Haut mit dem Nicht-Zunft-Zeichen liegt hier, nicht in der Gerberei — verschoben, heute.",
    sl: "Niemand. Engine zieht niemanden.",
  },
  "toepfergasse-1": {
    offen: "Töpferei. Der Ofen wärmt die Gasse. Lehm an den Stufen. Arbeit der Ton, wohnen Nr. 2. Ausgang die Gasse.",
    grob: "Ofen, Lehm, der Lärm der Schmiedezeile ist weg.",
    teil: "Ofen, Scheibe, Scherben vor der Tür absichtlich gegen Nässe.",
    voll: "Meinhard Ton arbeitet hier, schläft Nr. 2. Der Lehrling trägt, wohnt Nr. 3.",
    scharf: "Unter den Scherben eine, die nicht hier gebrannt wurde — Glasur fremd.",
    sl: "Ton Arbeit. Wohnen Nr. 2. Engine zieht niemanden.",
  },
  "toepfergasse-2": {
    offen: "Wohnhaus Ton. Meisterhaus, Lehm an den Stufen auch hier. Meinhard, Birgit, Ada, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Wärme vom Ofen nebenan, eine Stube.",
    teil: "Stube, Kammer, Ada hat Ton unter den Nägeln.",
    voll: "Meinhard 44, Birgit 41, Ada 13. Silber 1. Drei Häuser nur in der Gasse. Morrgasse nah genug, dass man Glocken nicht braucht.",
    scharf: "Ada hat nasse Knie, als wäre sie am Friedhof gewesen, nicht am Ofen — oder der Lehrling war es, und sie folgt.",
    sl: "Ton Wohnung. Engine zieht niemanden.",
  },
  "toepfergasse-3": {
    offen: "Wohnhaus Asche. Lehrling, siebzehn, nicht der Sohn. Jori, wenn der SL ihn setzt. Ausgang die Gasse.",
    grob: "Eng, Lehm, ein Bett.",
    teil: "Ein Raum. Scherben als Teller. Die Morrgasse liegt im Fenster.",
    voll: "Jori Asche 17. Messing 2. Nicht der Sohn des Meisters. Nasse Knie, wenn der Blick scharf ist.",
    scharf: "An den Knien Friedhofserde, nicht Töpferlehm. Ein Löffel unter dem Brett, nicht alt genug für den Winkel — oder doch.",
    sl: "Asche. Engine zieht niemanden.",
  },
  "morrgasse-1": {
    offen: "Totengräberhaus. Erde, Wachs, der Dienst nicht die Wahl. Silas, Odila, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Stille, die nicht leer ist. Erde an den Stiefeln.",
    teil: "Stube, eine Kammer, Stiefel an der Tür. Odila wäscht die Toten, nicht hier sichtbar.",
    voll: "Silas 46, Odila 42. Messing 3. Dienst Morr. Die Stiefel zeigen: heute schon zweimal draußen.",
    scharf: "Frische Erde auf den Säumen, und ein zweites Paar Spuren nebenan, kleiner, nicht Odila.",
    sl: "Gruft. Engine zieht niemanden.",
  },
  "morrgasse-2": {
    offen: "Morr-Kapelle. Klein, schwarz, die Tür nicht zu. Schwester Miren Ewig, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Wachs, Stein, ein Ritus den die Stadt nicht belacht.",
    teil: "Schiff, Totenbrett, ein zweites Schloss innen das nicht zum Kult passt — nur wenn du nah bist.",
    voll: "Miren Ewig 52. Silber 1. Trauerfeiern. Ritus gegen Untote ist Setzung, kein Spawn. Frische Erde auf einem Hügel ohne Stein.",
    scharf: "Der frische Hügel hat keine Gaben. Das innere Schloss ist nicht Kult. Der Hügel ist zu neu für den Stein, zu alt für heute.",
    sl: "Ewig. Keim: frischer Hügel — nur SL. Engine zieht niemanden.",
  },
  "schlemmergasse-1": {
    offen: "Taverne. Bier, billiges Öl, Stimmen die nicht zum Tempel gehören. Rolf zapft, wenn der SL ihn setzt. Nicht Zum Wanderer. Wohnen Nr. 3. Ausgang die Gasse.",
    grob: "Lachen hinter Holz. Der Geruch nach Bier und etwas Süßem.",
    teil: "Theke, Tische, eine Tür zum Hinterzimmer die nicht für jeden gilt. Ranald hängt dort, klein, ohne Schild — nicht vorn.",
    voll: "Rolf Stube arbeitet hier, schläft Nr. 3. Hinterzimmer: Keim still. Treffpunkt, feuerte nie von selbst.",
    scharf: "Im Hinterzimmer zwei Tassen, noch warm, und ein dritter Platz ohne Tasse.",
    sl: "Stube Arbeit. Ranald-Keim still. Nicht Krug. Engine zieht niemanden. SL spielt, wer im Hinterzimmer sitzt.",
  },
  "schlemmergasse-2": {
    offen: "Vergnügungshaus Linde. Gelbe Vorhänge, die bei Tag nicht helfen. Thea, Kira, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Süß, Öl, eine Stimme die zu hell ist.",
    teil: "Diele, Vorhang, eine Treppe. Luke in den Keller hinter dem Haus, nicht verriegelt — nur wenn du umgehst.",
    voll: "Thea 39, Kira 18. Messing 5. Die Vorhänge sind Tag und Nacht dieselben.",
    scharf: "Die Kellerluke war heute bewegt. Kira hat Erde unter den Nägeln, nicht Farbe.",
    sl: "Linde. Engine zieht niemanden.",
  },
  "schlemmergasse-3": {
    offen: "Wohnhaus Stube. Über der Taverne. Rolf, Janna, Nils, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Die Wohnung darüber ist still. Bier steigt.",
    teil: "Stube, Kammer, eine Luke in die Taverne ohne die Treppe.",
    voll: "Rolf 42, Janna 38 hält das Hinterzimmer, Nils 12. Messing 5. Nicht Krug, nicht Zum Wanderer. Janna kennt Arne, und Arne kennt die Gasse, und keiner sagt das am Tor.",
    scharf: "Nils hat vom Fenster den Torbogen gezählt, nicht die Gasse. Janna hat zwei Tassen extra, warm.",
    sl: "Stube Wohnung. Engine zieht niemanden.",
  },
  "bettelgasse-1": {
    offen: "Hütte Karg. Eng, nass, innerhalb der Mauer und trotzdem Armut. Wenzel, Ulla, Pia, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Kohl, Nässe, ein Kind das verstummt.",
    teil: "Ein Raum, zu wenig Stühle. Die Torstraße ist nah und hilft nicht.",
    voll: "Wenzel 37, Ulla 34, Pia 10. Messing 1. Die Schuhe nass vom Brunnen Nr. 8, nicht vom Tor.",
    scharf: "Pia hat am Brunnen etwas Hellen gesehen, das kein Stein ist — und es der Mutter nicht gesagt.",
    sl: "Karg. Engine zieht niemanden.",
  },
  "bettelgasse-2": {
    offen: "Hütte Hesse. Witwe. Magda, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Still, ein Geruch nach altem Tuch.",
    teil: "Ein Raum. Ein Nagel ohne Männerkleid. Sigmar klein, verblasst.",
    voll: "Magda 64. Messing 1. Mann Ewald †2501. Sie geht außen um Nr. 6.",
    scharf: "Unter dem Brett ein Löffel mit Zeichen, nicht Magdas — zu jung für sie.",
    sl: "Hesse. Engine zieht niemanden.",
  },
  "bettelgasse-3": {
    offen: "Hütte der Clique. Drei, munkele Kult, niemand beweist. Krumm, Fips, Auge, wenn der SL sie setzt. Ausgang die Gasse.",
    grob: "Enge, zu viele Atemzüge, ein Zeichen unter der Schwelle das du nicht liest.",
    teil: "Ein Raum, drei Lager. Die Nachbarn nennen sie Clique, nicht Familie.",
    voll: "Krumm 42, Fips 24, Auge 47. Messing 0. Munkeln über Kulte. Keim still.",
    scharf: "Unter der Schwelle ein Zeichen, frisch, nicht Ranald. Dasselbe klein wie am Ring Nr. 6, oder nicht — der SL sagt es.",
    sl: "Clique. Kult-Keim still. Engine zieht niemanden.",
  },
  "bettelgasse-4": {
    offen: "Leer. Das Dach trägt nicht. Niemand. Ausgang die Gasse.",
    grob: "Nass, Dunkel, nichts das antwortet.",
    teil: "Leerstand. Die Nachbarn gehen außen rum, weniger als um Nr. 6.",
    voll: "Niemand. Das Gebälk tropft in den Lehm.",
    scharf: "Im Lehm ein Absatz zur Nr. 3, nicht zur Straße.",
    sl: "Leer. Engine zieht niemanden.",
  },
  "bettelgasse-5": {
    offen: "Leer, vernagelt. Bretter über der Tür, rostige Nägel. Niemand. Ausgang die Gasse.",
    grob: "Holz, Rost, zu.",
    teil: "Vernagelt von außen. Die Nachbartür zu Nr. 6 ist die nächste.",
    voll: "Niemand. Die Nägel sind alt. Kratzer innen an der vernagelten Nachbartür — nur wenn du Nr. 6 zuerst hattest.",
    scharf: "Die Kratzer kommen von Nr. 6, nicht von hier. Innen, nicht außen.",
    sl: "Leer, vernagelt. Engine zieht niemanden.",
  },
  "bettelgasse-6": {
    offen: "Leer, der Ruf sie spuke. Die Nachbarn gehen außen rum. Niemand wohnt. Ausgang die Gasse.",
    grob: "Zu still für die Gasse. Eine Tür die niemand nimmt.",
    teil: "Leer. Ruf. SL entscheidet, ob etwas da ist. Die vernagelte Nr. 5 grenzt.",
    voll: "Niemand. Der Spuk ist Ruf. Keim still. Kratzer innen an der Nachbartür, nicht außen.",
    scharf: "Innen an der Tür zu Nr. 5 Kratzer, frisch. Ein Atem, der nicht deiner ist — oder der Wind durch die Bretter. Der SL sagt es, nicht die Gasse.",
    sl: "Spuk-Keim still. SL entscheidet, ob etwas da ist. Engine zieht niemanden.",
  },
  "bettelgasse-7": {
    offen: "Hütte Dünn. Ivo allein, wenn der SL ihn setzt. Ausgang die Gasse.",
    grob: "Eng, ein Mann oder niemand.",
    teil: "Ein Raum. Ein Lager. Kein zweiter Teller.",
    voll: "Ivo 32. Messing 1. Allein. Die Clique ist zwei Türen, er nennt sie nicht.",
    scharf: "Ivo hat denselben Löffel wie unter Magdas Brett — oder einen, der dazu passt.",
    sl: "Dünn. Engine zieht niemanden.",
  },
  "bettelgasse-8": {
    offen: "Gemeinschaftsbrunnen. Dritter Brunnen der Stadt. Rand den Kinder glatt getreten haben. Niemand wohnt. Ausgang die Gasse.",
    grob: "Stein, Wasser, dein Gesicht unklar darin.",
    teil: "Kein Dach. Gemeinschaft. Das Wasser nicht immer klar.",
    voll: "Niemand wohnt. Dritter Brunnen: Tor 9, Marktmitte, hier. Hanni würde eine Ecke suchen, ohne Schuld; die Gasse gibt keine, die nichts kostet.",
    scharf: "Am Grund etwas Hellen, das kein Stein ist.",
    sl: "Niemand. Hellen nur scharf oder SL. Engine zieht niemanden.",
  },
  "rattenwinkel-1": {
    offen: "Verfallene Wohnhütte. Die Tür hängt. Abel und Mira Unken, verschwunden 2506. Niemand wohnt. Ausgang der Winkel.",
    grob: "Hängt, still, zu still für Ratten.",
    teil: "Eingefallen. Zwei Lager, vermodert. Kein Schild.",
    voll: "Unken. Abel *2460, Mira *2464, spurlos 2506. Keim still. Unter einem Brett ein Löffel, nicht alt genug für „vor Jahren“.",
    scharf: "Der Löffel ist nicht 2506. Jemand war hier, seit sie „spurlos“ sind.",
    sl: "Unken-Keim still. Engine erfindet nichts. Nicht öffnen, solange die Torstraße die Frage ist — außer der SL öffnet.",
  },
  "rattenwinkel-2": {
    offen: "Leerstehendes Gebäude. Steht, und das ist schlimmer. Ratten, Kratzgeräusche unter dem Boden, Geruch wie Verwesung. Nachbarn meiden den Winkel. Ausgang der Winkel.",
    grob: "Der Winkel nimmt das Licht nicht an. Zu still für Ratten, und trotzdem Ratten.",
    teil: "Steht. Kellerloch oder Gang — der Blick reicht nicht. Kein drittes Haus, kein Schild.",
    voll: "Niemand. Die Ratten sind fett. Der Geruch kommt nicht nur aus dem Keller. Niemand hat in diesem Jahr Holz nachgelegt. Keim: Aberglaube oder nicht — SL.",
    scharf: "Unter dem Haus ein Gang, kein Kellerloch — die Kratzer zu regelmäßig für Ungeziefer.",
    sl: "SL-Entscheidung: Aberglaube oder Skaven/Nurgle/Kult. Keim feuerte nie von selbst. Engine erfindet nichts.",
  },
};

export function placeLook(streetId: string, houseNr?: number): PlaceLook | undefined {
  if (houseNr != null) return HOUSE_LOOKS[`${streetId}-${houseNr}`];
  return STREET_LOOKS[streetId];
}
