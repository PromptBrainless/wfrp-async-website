/** Leute von Drosselau. Nur Verzeichnis. Keine Vornamen, keine Bögen. */

export type GroupKind = "gilde" | "kult" | "wache" | "rat" | "clique" | "informell" | "graf";

export type HouseholdKind = "familie" | "betrieb" | "amt" | "clique";

export interface PlaceRef {
  streetId: string;
  nr: number;
}

export interface GroupDef {
  id: string;
  name: string;
  kind: GroupKind;
  seat: PlaceRef;
  note: string;
}

export interface HouseholdDef {
  id: string;
  label: string;
  kind: HouseholdKind;
  home?: PlaceRef;
  work?: PlaceRef;
  roles: string[];
  groups: string[];
  note: string;
}

export const GROUPS: GroupDef[] = [
  {
    id: "graf",
    name: "Reichsgraf",
    kind: "graf",
    seat: { streetId: "marktplatz", nr: 5 },
    note: "Lehnsherr. Sitzt nicht in der Stadt. Der Schreiber handelt in seinem Namen.",
  },
  {
    id: "rat",
    name: "Rat von Drosselau",
    kind: "rat",
    seat: { streetId: "marktplatz", nr: 6 },
    note: "Bürgermeisteramt und Stadtrat. Keine Namen.",
  },
  {
    id: "kaufleute",
    name: "Kaufmannsgilde",
    kind: "gilde",
    seat: { streetId: "marktplatz", nr: 1 },
    note: "Gildehaus am Markt. Meister wohnt in der Gildengasse.",
  },
  {
    id: "handwerk",
    name: "Handwerkerzunft",
    kind: "gilde",
    seat: { streetId: "marktplatz", nr: 2 },
    note: "Sammelhaus. Lager und Archiv in der Gildengasse.",
  },
  {
    id: "wache",
    name: "Stadtwache",
    kind: "wache",
    seat: { streetId: "torstrasse", nr: 1 },
    note: "Zollhaus. Ein Wächter wohnt in der Torstraße. Waffenschmiede beliefert sie.",
  },
  {
    id: "sigmar",
    name: "Sigmar-Kult",
    kind: "kult",
    seat: { streetId: "marktplatz", nr: 3 },
    note: "Stadtpatron. Tempel am Markt.",
  },
  {
    id: "morr",
    name: "Morr-Kult",
    kind: "kult",
    seat: { streetId: "morrgasse", nr: 2 },
    note: "Kapelle und Totengräber. Ritus gegen Untote.",
  },
  {
    id: "ulric",
    name: "Ulric unter den Schmieden",
    kind: "kult",
    seat: { streetId: "schmiedezeile", nr: 4 },
    note: "Die beiden Gesellen. Feuer und Schmiedekunst. Nicht der Stadtpatron.",
  },
  {
    id: "ranald",
    name: "Ranald, informell",
    kind: "informell",
    seat: { streetId: "schlemmergasse", nr: 1 },
    note: "Schrein in der Taverne. Zeichen am Vorstadtring. Kein offener Kult.",
  },
  {
    id: "bettlerclique",
    name: "Bettlerclique",
    kind: "clique",
    seat: { streetId: "bettelgasse", nr: 3 },
    note: "Munkeln über Kulte. Keim. Feuert nicht von selbst.",
  },
];

export const HOUSEHOLDS: HouseholdDef[] = [
  { id: "bettler-vorstadt", label: "Bettler", kind: "familie", home: { streetId: "vorstadtring", nr: 1 }, roles: ["Bettler"], groups: [], note: "Hütte außerhalb der Mauer." },
  { id: "tageloehner-sumpf", label: "Tagelöhner aus dem Sumpf", kind: "familie", home: { streetId: "vorstadtring", nr: 2 }, roles: ["Tagelöhner"], groups: [], note: "Vor Jahren aus dem Sumpfland geflohen." },
  { id: "fuhrunternehmer", label: "Fuhrunternehmer", kind: "familie", home: { streetId: "torstrasse", nr: 5 }, work: { streetId: "vorstadtring", nr: 3 }, roles: ["Fuhrunternehmer"], groups: [], note: "Schuppen am Ring, Wohnhaus in der Torstraße." },
  { id: "waescherin", label: "Wäscherin", kind: "familie", home: { streetId: "vorstadtring", nr: 4 }, roles: ["Wäscherin"], groups: [], note: "" },
  { id: "zollwache", label: "Torwache", kind: "amt", work: { streetId: "torstrasse", nr: 1 }, roles: ["Torwächter"], groups: ["wache"], note: "Zoll in Groschen. Prüft Waffen und Mutation." },
  { id: "wirt-wanderer", label: "Wirt „Zum Wanderer“", kind: "betrieb", work: { streetId: "torstrasse", nr: 2 }, roles: ["Wirt"], groups: [], note: "Gasthaus. Nicht dasselbe Haus wie die Taverne." },
  { id: "baecker", label: "Bäcker", kind: "familie", work: { streetId: "torstrasse", nr: 3 }, roles: ["Bäcker"], groups: ["handwerk"], note: "Laden, kein zweites Wohnhaus im Verzeichnis." },
  { id: "fleischer", label: "Fleischer", kind: "familie", work: { streetId: "torstrasse", nr: 4 }, roles: ["Fleischer"], groups: ["handwerk"], note: "" },
  { id: "tageloehner-tor", label: "Tagelöhnerfamilie Torstraße", kind: "familie", home: { streetId: "torstrasse", nr: 6 }, roles: ["Tagelöhner"], groups: [], note: "" },
  { id: "kram-tor", label: "Krämer am Tor", kind: "betrieb", work: { streetId: "torstrasse", nr: 7 }, roles: ["Krämer"], groups: ["sigmar"], note: "Kerzen, Seile, Sigmar-Amulette für Reisende." },
  { id: "waechter-haus", label: "Stadtwächter", kind: "familie", home: { streetId: "torstrasse", nr: 8 }, roles: ["Stadtwächter"], groups: ["wache"], note: "Wohnt in der Torstraße." },
  { id: "gilde-kaufleute-haus", label: "Kaufmannsgilde (Haus)", kind: "amt", work: { streetId: "marktplatz", nr: 1 }, roles: ["Gildeschreiber vor Ort"], groups: ["kaufleute"], note: "Das Haus der Gilde, nicht der Meister." },
  { id: "zunft-haus", label: "Handwerkerzunft (Haus)", kind: "amt", work: { streetId: "marktplatz", nr: 2 }, roles: ["Zunftwart vor Ort"], groups: ["handwerk"], note: "" },
  { id: "sigmar-tempel", label: "Priesterschaft Sigmar", kind: "amt", work: { streetId: "marktplatz", nr: 3 }, roles: ["Priester"], groups: ["sigmar"], note: "Kein Name, kein Rang im Verzeichnis." },
  { id: "wechsler", label: "Geldwechsler", kind: "betrieb", work: { streetId: "marktplatz", nr: 4 }, roles: ["Wechsler"], groups: ["kaufleute"], note: "Kronen, Schillinge, Groschen." },
  { id: "schreiber", label: "Schreiber des Grafen", kind: "amt", work: { streetId: "marktplatz", nr: 5 }, roles: ["Notar"], groups: ["graf", "rat"], note: "Beglaubigt im Namen des Grafen." },
  { id: "buergermeister", label: "Bürgermeister", kind: "amt", work: { streetId: "marktplatz", nr: 6 }, roles: ["Bürgermeister"], groups: ["rat"], note: "Amt, kein Wohnhaus im Verzeichnis." },
  { id: "kaufmann-a", label: "Kaufmann (Markt 7)", kind: "familie", home: { streetId: "marktplatz", nr: 7 }, roles: ["Kaufmann"], groups: ["kaufleute"], note: "Wohlhabend. Zweiter Kaufmann daneben — nicht dieselbe Familie, bis der SL es setzt." },
  { id: "kaufmann-b", label: "Kaufmann (Markt 8)", kind: "familie", home: { streetId: "marktplatz", nr: 8 }, roles: ["Kaufmann"], groups: ["kaufleute"], note: "Wohlhabend." },
  { id: "stadtrat", label: "Stadtrat", kind: "familie", home: { streetId: "marktplatz", nr: 9 }, roles: ["Stadtrat"], groups: ["rat"], note: "" },
  { id: "gildemeister", label: "Gildemeister der Kaufleute", kind: "familie", home: { streetId: "gildengasse", nr: 2 }, work: { streetId: "marktplatz", nr: 1 }, roles: ["Gildemeister"], groups: ["kaufleute"], note: "" },
  { id: "gildeschreiber", label: "Gildeschreiber", kind: "familie", home: { streetId: "gildengasse", nr: 3 }, roles: ["Gildeschreiber"], groups: ["kaufleute"], note: "" },
  { id: "hufschmied", label: "Hufschmied", kind: "familie", home: { streetId: "schmiedezeile", nr: 3 }, work: { streetId: "schmiedezeile", nr: 1 }, roles: ["Hufschmied"], groups: ["handwerk"], note: "" },
  { id: "waffenschmied", label: "Waffenschmied", kind: "betrieb", work: { streetId: "schmiedezeile", nr: 2 }, roles: ["Waffenschmied"], groups: ["handwerk", "wache"], note: "Beliefert die Stadtwache. Kein Wohnhaus im Verzeichnis." },
  { id: "schmiedegesellen", label: "Zwei Schmiedegesellen", kind: "familie", home: { streetId: "schmiedezeile", nr: 4 }, roles: ["Schmiedegeselle", "Schmiedegeselle"], groups: ["handwerk", "ulric"], note: "Beide im Ulric-Kult." },
  { id: "schmied-lehrling", label: "Schmiedelehrling", kind: "familie", home: { streetId: "schmiedezeile", nr: 6 }, roles: ["Lehrling"], groups: ["handwerk"], note: "Eigenes Haus im Verzeichnis, nicht automatisch beim Meister." },
  { id: "webermeister", label: "Webermeister", kind: "familie", home: { streetId: "weberweg", nr: 3 }, work: { streetId: "weberweg", nr: 1 }, roles: ["Webermeister"], groups: ["handwerk"], note: "" },
  { id: "schneiderfamilie", label: "Schneiderfamilie", kind: "familie", home: { streetId: "weberweg", nr: 4 }, work: { streetId: "weberweg", nr: 2 }, roles: ["Schneider"], groups: ["handwerk"], note: "Die einzige ausdrücklich genannte Familie." },
  { id: "faerber", label: "Färber", kind: "betrieb", work: { streetId: "weberweg", nr: 5 }, roles: ["Färber"], groups: ["handwerk"], note: "Werkstatt, kein Wohnhaus im Verzeichnis." },
  { id: "kraemer", label: "Krämer", kind: "familie", home: { streetId: "kraemerstrasse", nr: 3 }, work: { streetId: "kraemerstrasse", nr: 1 }, roles: ["Krämer"], groups: ["kaufleute"], note: "" },
  { id: "kraeuterhaendlerin", label: "Kräuterhändlerin", kind: "familie", home: { streetId: "kraemerstrasse", nr: 4 }, work: { streetId: "kraemerstrasse", nr: 2 }, roles: ["Kräuterhändlerin"], groups: [], note: "Unter dem Ladentisch. Keim." },
  { id: "buchbinder", label: "Buchbinder", kind: "betrieb", work: { streetId: "kraemerstrasse", nr: 5 }, roles: ["Buchbinder"], groups: ["handwerk"], note: "" },
  { id: "gerbermeister", label: "Gerbermeister", kind: "familie", home: { streetId: "gerbergasse", nr: 2 }, work: { streetId: "gerbergasse", nr: 1 }, roles: ["Gerbermeister"], groups: ["handwerk"], note: "" },
  { id: "gerbergesellen", label: "Zwei Gerbergesellen", kind: "familie", home: { streetId: "gerbergasse", nr: 3 }, roles: ["Gerbergeselle", "Gerbergeselle"], groups: ["handwerk"], note: "Krankheiten kursieren. Kein Automat." },
  { id: "toepfer", label: "Töpfer", kind: "familie", home: { streetId: "toepfergasse", nr: 2 }, work: { streetId: "toepfergasse", nr: 1 }, roles: ["Töpfer"], groups: ["handwerk"], note: "" },
  { id: "toepfer-lehrling", label: "Töpferlehrling", kind: "familie", home: { streetId: "toepfergasse", nr: 3 }, roles: ["Lehrling"], groups: ["handwerk"], note: "" },
  { id: "totengraeber", label: "Totengräber", kind: "familie", home: { streetId: "morrgasse", nr: 1 }, roles: ["Totengräber"], groups: ["morr"], note: "Im Dienst des Morr-Kultes." },
  { id: "morr-kapelle", label: "Morr-Kapelle", kind: "amt", work: { streetId: "morrgasse", nr: 2 }, roles: ["Priester Morr"], groups: ["morr"], note: "Trauerfeiern." },
  { id: "wirt-taverne", label: "Wirt der Taverne", kind: "familie", home: { streetId: "schlemmergasse", nr: 3 }, work: { streetId: "schlemmergasse", nr: 1 }, roles: ["Wirt"], groups: ["ranald"], note: "Hinterzimmer: Ranald-Schrein." },
  { id: "vergnuegung", label: "Vergnügungshaus", kind: "betrieb", work: { streetId: "schlemmergasse", nr: 2 }, roles: ["Wirtin oder Wirt"], groups: [], note: "Kein Name im Verzeichnis." },
  { id: "tageloehner-bettel-1", label: "Tagelöhnerfamilie Bettelgasse", kind: "familie", home: { streetId: "bettelgasse", nr: 1 }, roles: ["Tagelöhner"], groups: [], note: "" },
  { id: "witwe", label: "Alte Witwe", kind: "familie", home: { streetId: "bettelgasse", nr: 2 }, roles: ["Witwe"], groups: [], note: "" },
  { id: "clique-haus", label: "Bettlerclique", kind: "clique", home: { streetId: "bettelgasse", nr: 3 }, roles: ["Bettler"], groups: ["bettlerclique"], note: "Munkeln über Kulte." },
  { id: "tageloehner-bettel-7", label: "Tagelöhner Bettelgasse 7", kind: "familie", home: { streetId: "bettelgasse", nr: 7 }, roles: ["Tagelöhner"], groups: [], note: "" },
  { id: "unken", label: "Haus Unken (verschwunden)", kind: "familie", home: { streetId: "rattenwinkel", nr: 1 }, roles: ["verschwunden"], groups: [], note: "2506 spurlos. Keim." },
];

export const FAMILY_OF: Record<string, { slug: string; surname: string }> = {
  "bettler-vorstadt": { slug: "laus", surname: "Laus" },
  "tageloehner-sumpf": { slug: "moos", surname: "Moos" },
  "fuhrunternehmer": { slug: "karr", surname: "Karr" },
  "waescherin": { slug: "blau", surname: "Blau" },
  "zollwache": { slug: "helm", surname: "Helm" },
  "wirt-wanderer": { slug: "krug", surname: "Krug" },
  "baecker": { slug: "laib", surname: "Laib" },
  "fleischer": { slug: "metz", surname: "Metz" },
  "tageloehner-tor": { slug: "staub", surname: "Staub" },
  "kram-tor": { slug: "docht", surname: "Docht" },
  "waechter-haus": { slug: "helm", surname: "Helm" },
  "gilde-kaufleute-haus": { slug: "holtz", surname: "Holtz" },
  "sigmar-tempel": { slug: "keil", surname: "Keil" },
  "wechsler": { slug: "heller", surname: "Heller" },
  "schreiber": { slug: "feder", surname: "Feder" },
  "buergermeister": { slug: "talbeck", surname: "Talbeck" },
  "kaufmann-a": { slug: "holtz", surname: "Holtz" },
  "kaufmann-b": { slug: "voss", surname: "Voss" },
  "stadtrat": { slug: "stein", surname: "Stein" },
  "gildemeister": { slug: "holtz", surname: "Holtz" },
  "gildeschreiber": { slug: "eckert", surname: "Eckert" },
  "hufschmied": { slug: "hammer", surname: "Hammer" },
  "waffenschmied": { slug: "stahl", surname: "Stahl" },
  "schmiedegesellen": { slug: "eisen", surname: "Eisen" },
  "schmied-lehrling": { slug: "nagel", surname: "Nagel" },
  "webermeister": { slug: "tuch", surname: "Tuch" },
  "schneiderfamilie": { slug: "schneider", surname: "Schneider" },
  "faerber": { slug: "beize", surname: "Beize" },
  "kraemer": { slug: "bode", surname: "Bode" },
  "kraeuterhaendlerin": { slug: "wurzel", surname: "Wurzel" },
  "buchbinder": { slug: "blatt", surname: "Blatt" },
  "gerbermeister": { slug: "leder", surname: "Leder" },
  "gerbergesellen": { slug: "gerb", surname: "Gerb" },
  "toepfer": { slug: "ton", surname: "Ton" },
  "toepfer-lehrling": { slug: "asche", surname: "Asche" },
  "totengraeber": { slug: "gruft", surname: "Gruft" },
  "morr-kapelle": { slug: "ewig", surname: "Ewig" },
  "wirt-taverne": { slug: "stube", surname: "Stube" },
  "vergnuegung": { slug: "linde", surname: "Linde" },
  "tageloehner-bettel-1": { slug: "karg", surname: "Karg" },
  "witwe": { slug: "hesse", surname: "Hesse" },
  "clique-haus": { slug: "clique", surname: "Clique" },
  "tageloehner-bettel-7": { slug: "duenn", surname: "Dünn" },
  "unken": { slug: "unken", surname: "Unken" },
};


function placeKey(p: PlaceRef) {
  return `${p.streetId}-${p.nr}`;
}

const byPlace = (() => {
  const map = new Map<string, HouseholdDef[]>();
  for (const h of HOUSEHOLDS) {
    for (const p of [h.home, h.work]) {
      if (!p) continue;
      const k = placeKey(p);
      const list = map.get(k) ?? [];
      list.push(h);
      map.set(k, list);
    }
  }
  return map;
})();

export function householdsAt(streetId: string, nr: number): HouseholdDef[] {
  return byPlace.get(`${streetId}-${nr}`) ?? [];
}

export function familyName(h: HouseholdDef): string {
  return FAMILY_OF[h.id]?.surname ?? h.label;
}

export function groupsAt(streetId: string, nr: number): GroupDef[] {
  return GROUPS.filter((g) => g.seat.streetId === streetId && g.seat.nr === nr);
}
