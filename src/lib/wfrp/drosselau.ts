import type { PreparedEvent, Scene, SceneHint } from "./types";

export interface HouseDef {
  nr: number;
  name: string;
  empty?: boolean;
  events?: PreparedEvent[];
  hint?: SceneHint;
}

export interface StreetDef {
  id: string;
  name: string;
  note: string;
  quartier: string;
  neighbors: string[];
  houses: HouseDef[];
}

export interface QuartierDef {
  id: string;
  name: string;
  note: string;
  streetIds: string[];
}

export const QUARTIERS: QuartierDef[] = [
  { id: "vorstadt", name: "Vorstadt", note: "außerhalb der Mauer", streetIds: ["vorstadtring"] },
  { id: "tor", name: "Tor", note: "vom Stadttor zum Markt", streetIds: ["torstrasse"] },
  { id: "markt", name: "Markt", note: "Gilden, Tempel, Rat", streetIds: ["marktplatz", "gildengasse", "schlemmergasse"] },
  {
    id: "handwerk",
    name: "Handwerk",
    note: "Zünfte, Gestank, Feuer",
    streetIds: ["schmiedezeile", "weberweg", "kraemerstrasse", "toepfergasse", "gerbergasse"],
  },
  { id: "schatten", name: "Schatten", note: "Armut, Morr, Rand", streetIds: ["bettelgasse", "morrgasse", "rattenwinkel"] },
];


const e = (id: string, label: string, hint: string): PreparedEvent => ({
  id,
  label,
  hint,
  fired: false,
});

export const DROSSELAU: { name: string; teaser: string; streets: StreetDef[] } = {
  name: "Drosselau",
  teaser: "Marktflecken im Reikland an einem Nebenfluss des Reik. Die Kampagne verlässt die Stadt nicht.",
  streets: [
    {
      id: "vorstadtring",
      name: "Vorstadtring",
      note: "außerhalb der Mauer",
      quartier: "vorstadt",
      neighbors: ["torstrasse"],
      houses: [
        { nr: 1, name: "Bettlerhütte" },
        { nr: 2, name: "Hütte eines Tagelöhners" },
        { nr: 3, name: "Fuhrmannsschuppen" },
        { nr: 4, name: "Hütte einer Wäscherin" },
        { nr: 5, name: "Leerstehende Hütte (Dach)", empty: true },
        {
          nr: 6,
          name: "Leerstehende Hütte (Ranald-Zeichen)",
          empty: true,
          events: [e("ranald-zeichen", "Ranald-Zeichen", "Verwittertes Zeichen an der Tür. Diebesglück oder Warnung. SL entscheidet, ob es zählt.")],
        },
      ],
    },
    {
      id: "torstrasse",
      name: "Torstraße",
      note: "vom Stadttor zum Markt",
      quartier: "tor",
      neighbors: ["vorstadtring", "marktplatz", "bettelgasse"],
      houses: [
        {
          nr: 1,
          name: "Zollhaus",
          events: [e("zoll-mutation", "Torwache prüft", "Wegezoll in Groschen. Wache prüft Waffen und Mutationsmerkmale. Kein Automat.")],
        },
        { nr: 2, name: "Gasthaus „Zum Wanderer“" },
        { nr: 3, name: "Bäckerei" },
        { nr: 4, name: "Fleischerei" },
        { nr: 5, name: "Wohnhaus Fuhrunternehmer" },
        { nr: 6, name: "Wohnhaus Tagelöhnerfamilie" },
        { nr: 7, name: "Kramladen" },
        { nr: 8, name: "Wohnhaus Stadtwächter" },
        { nr: 9, name: "Brunnenhaus" },
      ],
    },
    {
      id: "marktplatz",
      name: "Marktplatz",
      note: "",
      quartier: "markt",
      neighbors: ["torstrasse", "gildengasse", "schmiedezeile", "weberweg", "kraemerstrasse", "schlemmergasse"],
      houses: [
        { nr: 1, name: "Kaufmannsgilde" },
        { nr: 2, name: "Handwerkerzunft" },
        { nr: 3, name: "Sigmarstempel" },
        { nr: 4, name: "Geldwechsler" },
        { nr: 5, name: "Schreiberstube" },
        { nr: 6, name: "Ratshaus" },
        { nr: 7, name: "Wohnhaus Kaufmann" },
        { nr: 8, name: "Wohnhaus Kaufmann" },
        { nr: 9, name: "Wohnhaus Stadtrat" },
        {
          nr: 10,
          name: "Leerstehendes Kontor",
          empty: true,
          hint: "angespannt",
          events: [e("kontor-leer", "Verlassener Handelsposten", "Auswärtige Kompanie, seit einem Jahr weg. Keim. Feuert nicht von selbst.")],
        },
      ],
    },
    {
      id: "gildengasse",
      name: "Gildengasse",
      note: "",
      quartier: "markt",
      neighbors: ["marktplatz", "weberweg"],
      houses: [
        { nr: 1, name: "Lagerhaus der Zunft" },
        { nr: 2, name: "Wohnhaus Gildemeister" },
        { nr: 3, name: "Wohnhaus Gildeschreiber" },
        { nr: 4, name: "Herberge für Zunftbrüder" },
        { nr: 5, name: "Zunftarchiv" },
      ],
    },
    {
      id: "schmiedezeile",
      name: "Schmiedezeile",
      note: "",
      quartier: "handwerk",
      neighbors: ["marktplatz", "gerbergasse"],
      houses: [
        { nr: 1, name: "Hufschmiede" },
        { nr: 2, name: "Waffenschmiede" },
        { nr: 3, name: "Wohnhaus Hufschmied" },
        { nr: 4, name: "Wohnhaus Schmiedegesellen" },
        { nr: 5, name: "Kohlenlager" },
        { nr: 6, name: "Wohnhaus Lehrling" },
      ],
    },
    {
      id: "weberweg",
      name: "Weberweg",
      note: "",
      quartier: "handwerk",
      neighbors: ["marktplatz", "gildengasse", "kraemerstrasse"],
      houses: [
        { nr: 1, name: "Weberei" },
        { nr: 2, name: "Schneiderei" },
        { nr: 3, name: "Wohnhaus Webermeister" },
        { nr: 4, name: "Wohnhaus Schneiderfamilie" },
        { nr: 5, name: "Färberwerkstatt" },
      ],
    },
    {
      id: "kraemerstrasse",
      name: "Krämerstraße",
      note: "",
      quartier: "handwerk",
      neighbors: ["marktplatz", "weberweg", "schlemmergasse", "bettelgasse"],
      houses: [
        { nr: 1, name: "Krämerladen" },
        {
          nr: 2,
          name: "Kräuterhandlung",
          events: [e("kraeuter-ladentisch", "Unter dem Ladentisch", "Mittel, die ein Hexenjäger argwöhnisch sähe. Feuert nicht von selbst.")],
        },
        { nr: 3, name: "Wohnhaus Krämer" },
        { nr: 4, name: "Wohnhaus Kräuterhändlerin" },
        { nr: 5, name: "Buchbinderei" },
        { nr: 6, name: "Leerstehender Laden", empty: true },
      ],
    },
    {
      id: "gerbergasse",
      name: "Gerbergasse",
      note: "Stadtrand, Gestank",
      quartier: "handwerk",
      neighbors: ["schmiedezeile", "toepfergasse", "rattenwinkel"],
      houses: [
        { nr: 1, name: "Gerberei" },
        { nr: 2, name: "Wohnhaus Gerbermeister" },
        {
          nr: 3,
          name: "Wohnhaus Gerbergesellen",
          events: [e("gerber-krankheit", "Krankheiten kursieren", "Häufiger als anderswo. Kein Automat, SL setzt ob jemand hustet.")],
        },
        { nr: 4, name: "Lagerschuppen für Häute" },
      ],
    },
    {
      id: "toepfergasse",
      name: "Töpfergasse",
      note: "",
      quartier: "handwerk",
      neighbors: ["gerbergasse", "morrgasse"],
      houses: [
        { nr: 1, name: "Töpferei" },
        { nr: 2, name: "Wohnhaus Töpfer" },
        { nr: 3, name: "Wohnhaus Lehrling" },
      ],
    },
    {
      id: "morrgasse",
      name: "Morrgasse",
      note: "am Friedhof",
      quartier: "schatten",
      neighbors: ["toepfergasse", "schlemmergasse"],
      houses: [
        { nr: 1, name: "Totengräberhaus" },
        {
          nr: 2,
          name: "Morr-Kapelle",
          events: [e("morr-ritus", "Bestattung nach Ritus", "Gilt als nötig, Untote fernzuhalten. Setzung, kein Spawn.")],
        },
      ],
    },
    {
      id: "schlemmergasse",
      name: "Schlemmergasse",
      note: "",
      quartier: "markt",
      neighbors: ["marktplatz", "kraemerstrasse", "morrgasse", "bettelgasse"],
      houses: [
        {
          nr: 1,
          name: "Taverne",
          events: [e("ranald-schrein", "Ranald-Schrein im Hinterzimmer", "Treffpunkt zwielichtiger Gestalten. Feuert nicht von selbst.")],
        },
        { nr: 2, name: "Vergnügungshaus" },
        { nr: 3, name: "Wohnhaus Wirt" },
      ],
    },
    {
      id: "bettelgasse",
      name: "Bettelgasse",
      note: "Armenviertel",
      quartier: "schatten",
      neighbors: ["torstrasse", "kraemerstrasse", "schlemmergasse", "rattenwinkel"],
      houses: [
        { nr: 1, name: "Hütte Tagelöhnerfamilie" },
        { nr: 2, name: "Hütte Witwe" },
        {
          nr: 3,
          name: "Hütte Bettlerclique",
          hint: "angespannt",
          events: [e("bettel-kult", "Fragwürdige Kulte", "Munkeln. Keim. Feuert nicht von selbst.")],
        },
        { nr: 4, name: "Leer (Dach)", empty: true },
        { nr: 5, name: "Leer (vernagelt)", empty: true },
        {
          nr: 6,
          name: "Leer (spukt)",
          empty: true,
          hint: "angespannt",
          events: [e("bettel-spukt", "Ruf: spukt", "Ruf. SL entscheidet, ob etwas da ist.")],
        },
        { nr: 7, name: "Hütte Tagelöhner" },
        { nr: 8, name: "Gemeinschaftsbrunnen" },
      ],
    },
    {
      id: "rattenwinkel",
      name: "Rattenwinkel",
      note: "letzte Gasse",
      quartier: "schatten",
      neighbors: ["bettelgasse", "gerbergasse"],
      houses: [
        {
          nr: 1,
          name: "Verfallene Wohnhütte",
          empty: true,
          hint: "angespannt",
          events: [e("ratten-verschwunden", "Bewohner verschwunden", "Vor Jahren spurlos. Keim. Feuert nicht von selbst.")],
        },
        {
          nr: 2,
          name: "Leerstehendes Gebäude",
          empty: true,
          hint: "gefaehrlich",
          events: [e("ratten-keller", "Ratten und Verwesung", "Nachbarn meiden es. Aberglaube oder nicht — SL-Entscheidung. Feuert nicht von selbst.")],
        },
      ],
    },
  ],
};

export const DROSSELAU_HOUSE_COUNT = DROSSELAU.streets.reduce((n, s) => n + s.houses.length, 0);

export const DROSSELAU_SCENE_COUNT =
  DROSSELAU.streets.length + DROSSELAU_HOUSE_COUNT;

function emptyBoard(): Scene["board"] {
  return { image: "", widthM: 20, tokens: [], pins: [], distances: {}, fog: [] };
}

function shell(partial: Partial<Scene> & Pick<Scene, "id" | "title" | "locationName" | "slText" | "exits">): Scene {
  return {
    trigger: "",
    teaser: "",
    difficultyHint: "ruhig",
    prerequisites: [],
    maxPlayers: 5,
    opened: false,
    mode: "sozial",
    present: [],
    locationFlags: [],
    catalogIds: [],
    protocol: [],
    events: [],
    combat: null,
    countdownMs: 24 * 60 * 60 * 1000,
    board: emptyBoard(),
    journal: [],
    ...partial,
  };
}

export function streetSceneId(streetId: string) {
  return `gasse-${streetId}`;
}

export function houseSceneId(streetId: string, nr: number) {
  return `haus-${streetId}-${nr}`;
}

export function buildDrosselauScenes(): Record<string, Scene> {
  const byId = Object.fromEntries(DROSSELAU.streets.map((s) => [s.id, s]));
  const scenes: Record<string, Scene> = {};

  for (const street of DROSSELAU.streets) {
    const sid = streetSceneId(street.id);
    const exits = [
      ...street.neighbors.map((nid) => ({
        id: `nach-${nid}`,
        label: `Nach ${byId[nid]?.name ?? nid}`,
        toScene: streetSceneId(nid),
      })),
      ...street.houses.map((h) => ({
        id: `in-${h.nr}`,
        label: `In ${h.name}`,
        toScene: houseSceneId(street.id, h.nr),
      })),
    ];
    scenes[sid] = shell({
      id: sid,
      title: street.name,
      locationName: `Drosselau · ${street.name}`,
      slText: street.note
        ? `${street.name} (${street.note}). Szene zu. Kampagne bleibt in Drosselau.`
        : `${street.name}. Szene zu. Kampagne bleibt in Drosselau.`,
      teaser: `${street.houses.length} Gebäude. Wege: ${street.neighbors.map((n) => byId[n].name).join(", ")}.`,
      exits,
      locationFlags: ["drosselau", "viertel-" + street.quartier, "gasse", street.id],
      events: street.houses.flatMap((h) =>
        (h.events ?? []).map((ev) => ({
          ...ev,
          id: `${h.nr}-${ev.id}`,
          label: `${h.name}: ${ev.label}`,
          hint: `${ev.hint} · Nr. ${h.nr}. Nur der SL zieht.`,
        })),
      ),
    });

    for (const house of street.houses) {
      const hid = houseSceneId(street.id, house.nr);
      const flags = ["drosselau", "viertel-" + street.quartier, "haus", street.id];
      if (house.empty) flags.push("leer");
      scenes[hid] = shell({
        id: hid,
        title: house.name,
        locationName: `Drosselau · ${street.name} ${house.nr}`,
        slText: `${house.name}. Szene zu. Ausgang auf die ${street.name}.`,
        teaser: house.empty ? "Leerstand. Der SL öffnet, nicht die Engine." : "Haus in Drosselau. Szene zu.",
        difficultyHint: house.hint ?? "ruhig",
        exits: [{ id: "auf-gasse", label: `Auf die ${street.name}`, toScene: sid }],
        locationFlags: flags,
        events: house.events ?? [],
      });
    }
  }

  return scenes;
}

export function streetsOf(quartierId: string) {
  return DROSSELAU.streets.filter((s) => s.quartier === quartierId);
}

export function drosselauTriggers(): { sceneId: string; quartier: string; street: string; house: string; event: PreparedEvent }[] {
  const qName = Object.fromEntries(QUARTIERS.map((q) => [q.id, q.name]));
  const out: { sceneId: string; quartier: string; street: string; house: string; event: PreparedEvent }[] = [];
  for (const street of DROSSELAU.streets) {
    for (const house of street.houses) {
      for (const event of house.events ?? []) {
        out.push({
          sceneId: houseSceneId(street.id, house.nr),
          quartier: qName[street.quartier] ?? street.quartier,
          street: street.name,
          house: house.name,
          event,
        });
      }
    }
  }
  return out;
}

