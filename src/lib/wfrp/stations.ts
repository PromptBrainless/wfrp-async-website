export type StationId =
  | "welt"
  | "volk"
  | "pnp"
  | "karriere"
  | "werte"
  | "faehigkeiten"
  | "ausruestung"
  | "details"
  | "gruppe"
  | "leben"
  | "xp";

export const STATIONS: {
  id: StationId;
  label: string;
  why: string;
  explain: string[];
}[] = [
  { id: "welt", label: "Welt", why: "Zuhören, noch nicht wählen.", explain: ["01-welt-und-voelker"] },
  { id: "volk", label: "Volk", why: "Kultur und Ort. Zahlen danach.", explain: ["01-welt-und-voelker"] },
  { id: "pnp", label: "Spiel", why: "Was digital ist, was der SL bleibt.", explain: ["02-pnp"] },
  {
    id: "karriere",
    label: "Karriere",
    why: "Klasse ist Herkunft, Karriere der Beruf.",
    explain: ["03-klasse", "04-karriere", "05-status", "06-waehrung", "07-rang"],
  },
  {
    id: "werte",
    label: "Werte",
    why: "Zehn Attribute, dann Schicksal.",
    explain: [
      "08-attribute",
      "09-w100",
      "10-volks-modifikator",
      "11-fuenf-steigerungen",
      "12-schicksal",
      "13-zaehigkeit",
      "14-motivation",
      "15-lp-max",
    ],
  },
  {
    id: "faehigkeiten",
    label: "Fähigkeiten",
    why: "Was du kannst, und ein Talent.",
    explain: [
      "16-faehigkeit-und-talent",
      "17-zufaellige-talente",
      "18-spezialisierung",
      "19-karriere-stufe-1",
    ],
  },
  {
    id: "ausruestung",
    label: "Ausrüstung",
    why: "Pakete und Startgeld folgen der Karriere.",
    explain: ["20-ausruestung", "21-gugel-oder-maske", "22-startgeld", "23-traglast"],
  },
  {
    id: "details",
    label: "Details",
    why: "Name, Alter, Aussehen, Ziele.",
    explain: ["24-alter-aussehen", "25-bart", "26-ziele"],
  },
  { id: "gruppe", label: "Gruppe", why: "Überspringbar — der SL führt zusammen.", explain: ["27-gruppe"] },
  {
    id: "leben",
    label: "Leben",
    why: "Mindestens drei Fragen. Herkunft aus der Liste.",
    explain: ["28-zehn-fragen", "39-psychologie"],
  },
  { id: "xp", label: "EP", why: "Optional. Der Bogen wartet.", explain: ["29-steigerungen-ep"] },
];

export const STATION_IDS = STATIONS.map((s) => s.id);

export function stationIndex(id: StationId): number {
  return STATION_IDS.indexOf(id);
}

export const HERKUNFT = [
  { id: "altdorf", label: "Altdorf", region: "Stadt", x: 48, y: 38, note: "Hauptstadt, Gassen, Tempel Sigmars" },
  { id: "uebersreik", label: "Übersreik", region: "Stadt", x: 36, y: 72, note: "Süden, Weg nach Bretonia" },
  { id: "boegenhafen", label: "Bögenhafen", region: "Stadt", x: 22, y: 48, note: "Handel am Teufelsbrück" },
  { id: "reik", label: "Barke auf dem Reik", region: "Fluss", x: 58, y: 52, note: "Zoll, Kahn, Schmuggel" },
  { id: "dorf", label: "Dorf am Reik", region: "Land", x: 70, y: 28, note: "Hof, Fähre, Wirtshaus" },
  { id: "waldsaum", label: "Waldsaum", region: "Wald", x: 78, y: 62, note: "Reikwald — Straße verlassen ist Gefahr" },
] as const;

export const GOETTER = [
  "Sigmar",
  "Ulric",
  "Taal",
  "Rhya",
  "Manann",
  "Morr",
  "Shallya",
  "Verena",
  "Myrmidia",
  "Ranald",
] as const;
