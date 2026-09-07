import type { Attr, StatusTier } from "./types";
import { ATTRS } from "./types";

export const SPECIES_IDS = ["mensch", "zwerg", "halbling", "hochelf", "waldelf"] as const;
export type SpeciesId = (typeof SPECIES_IDS)[number];

export const CLASS_IDS = [
  "akademiker",
  "buerger",
  "flussvolk",
  "freisassen",
  "gesetzlose",
  "hoeflinge",
  "krieger",
  "landvolk",
] as const;
export type ClassId = (typeof CLASS_IDS)[number];

export const CLASS_LABEL: Record<ClassId, string> = {
  akademiker: "Akademiker",
  buerger: "Bürger",
  flussvolk: "Flussvolk",
  freisassen: "Freisassen",
  gesetzlose: "Gesetzlose",
  hoeflinge: "Höflinge",
  krieger: "Krieger",
  landvolk: "Landvolk",
};

export const SPECIES_ROLL: { lo: number; hi: number; id: SpeciesId }[] = [
  { lo: 1, hi: 90, id: "mensch" },
  { lo: 91, hi: 94, id: "halbling" },
  { lo: 95, hi: 98, id: "zwerg" },
  { lo: 99, hi: 99, id: "hochelf" },
  { lo: 100, hi: 100, id: "waldelf" },
];

export type SkillDef = { id: string; label: string; attr: Attr; grund: boolean };

export const SKILLS: SkillDef[] = [
  { id: "anfuehren", label: "Anführen", attr: "CH", grund: true },
  { id: "athletik", label: "Athletik", attr: "GW", grund: true },
  { id: "ausdauer", label: "Ausdauer", attr: "WI", grund: true },
  { id: "ausweichen", label: "Ausweichen", attr: "GW", grund: true },
  { id: "besonnenheit", label: "Besonnenheit", attr: "WK", grund: true },
  { id: "bestechen", label: "Bestechen", attr: "CH", grund: true },
  { id: "charme", label: "Charme", attr: "CH", grund: true },
  { id: "einschuechtern", label: "Einschüchtern", attr: "ST", grund: true },
  { id: "fahren", label: "Fahren", attr: "GW", grund: true },
  { id: "feilschen", label: "Feilschen", attr: "CH", grund: true },
  { id: "gluecksspiel", label: "Glücksspiel", attr: "IN", grund: true },
  { id: "intuition", label: "Intuition", attr: "I", grund: true },
  { id: "klatsch", label: "Klatsch", attr: "CH", grund: true },
  { id: "klettern", label: "Klettern", attr: "ST", grund: true },
  { id: "nahkampf.standard", label: "Nahkampf (Standard)", attr: "KG", grund: true },
  { id: "nahkampf.waffenlos", label: "Nahkampf (Waffenlos)", attr: "KG", grund: true },
  { id: "nahkampf", label: "Nahkampf", attr: "KG", grund: true },
  { id: "navigation", label: "Navigation", attr: "I", grund: true },
  { id: "reiten", label: "Reiten", attr: "GW", grund: true },
  { id: "rudern", label: "Rudern", attr: "ST", grund: true },
  { id: "schleichen", label: "Schleichen", attr: "GW", grund: true },
  { id: "schleichen.stadt", label: "Schleichen (Stadt)", attr: "GW", grund: true },
  { id: "schleichen.laendlich", label: "Schleichen (Ländlich)", attr: "GW", grund: true },
  { id: "tiere_bezirzen", label: "Tiere bezirzen", attr: "WK", grund: true },
  { id: "tierpflege", label: "Tierpflege", attr: "IN", grund: true },
  { id: "ueberleben", label: "Überleben", attr: "IN", grund: true },
  { id: "unterhalten", label: "Unterhalten", attr: "CH", grund: true },
  { id: "unterhalten.erzaehlen", label: "Unterhalten (Erzählen)", attr: "CH", grund: true },
  { id: "unterhalten.singen", label: "Unterhalten (Singen)", attr: "CH", grund: true },
  { id: "unterhalten.schauspiel", label: "Unterhalten (Schauspielerei)", attr: "CH", grund: true },
  { id: "wahrnehmung", label: "Wahrnehmung", attr: "I", grund: true },
  { id: "zechen", label: "Zechen", attr: "WI", grund: true },
  { id: "fingerfertigkeit", label: "Fingerfertigkeit", attr: "GS", grund: false },
  { id: "fernkampf", label: "Fernkampf", attr: "BF", grund: false },
  { id: "fernkampf.bogen", label: "Fernkampf (Bogen)", attr: "BF", grund: false },
  { id: "fernkampf.schleuder", label: "Fernkampf (Schleuder)", attr: "BF", grund: false },
  { id: "heilen", label: "Heilen", attr: "IN", grund: false },
  { id: "schaetzen", label: "Schätzen", attr: "IN", grund: false },
  { id: "beruf", label: "Beruf (1 nach Wahl)", attr: "GS", grund: false },
  { id: "beruf.koch", label: "Beruf (Koch)", attr: "GS", grund: false },
  { id: "beruf.drucker", label: "Beruf (Drucker)", attr: "GS", grund: false },
  { id: "kunst.schreiben", label: "Kunst (Schreiben)", attr: "GS", grund: false },
  { id: "musizieren", label: "Musizieren (1 nach Wahl)", attr: "GS", grund: false },
  { id: "sprache.bretonisch", label: "Sprache (Bretonisch)", attr: "IN", grund: false },
  { id: "sprache.oedlaendisch", label: "Sprache (Ödländisch)", attr: "IN", grund: false },
  { id: "sprache.khazalid", label: "Sprache (Khazalid)", attr: "IN", grund: false },
  { id: "sprache.eltharin", label: "Sprache (Elthárin)", attr: "IN", grund: false },
  { id: "sprache.mootlaendisch", label: "Sprache (Mootländisch)", attr: "IN", grund: false },
  { id: "sprache.gildenzunge", label: "Sprache (Gildenzunge)", attr: "IN", grund: false },
  { id: "wissen.reikland", label: "Wissen (Reikland)", attr: "IN", grund: false },
  { id: "wissen.geologie", label: "Wissen (Geologie)", attr: "IN", grund: false },
  { id: "wissen.metallurgie", label: "Wissen (Metallurgie)", attr: "IN", grund: false },
  { id: "wissen.zwerge", label: "Wissen (Zwerge)", attr: "IN", grund: false },
  { id: "wissen.politik", label: "Wissen (Politik)", attr: "IN", grund: false },
  { id: "wissen.gesetze", label: "Wissen (Gesetze)", attr: "IN", grund: false },
  { id: "wissen.gift", label: "Wissen (Gift)", attr: "IN", grund: false },
  { id: "wissen.ort", label: "Wissen (Ort/Region)", attr: "IN", grund: false },
  { id: "spurenlesen", label: "Spurenlesen", attr: "I", grund: false },
  { id: "schloesser", label: "Schlösser öffnen", attr: "GS", grund: false },
  { id: "schwimmen", label: "Schwimmen", attr: "ST", grund: true },
  { id: "segeln", label: "Segeln", attr: "GW", grund: false },
  { id: "abrichten.hund", label: "Abrichten (Hund)", attr: "IN", grund: false },
  { id: "fallen_stellen", label: "Fallen stellen", attr: "GS", grund: false },
];

export const SKILL_BY_ID = Object.fromEntries(SKILLS.map((s) => [s.id, s]));

export type SpeciesDef = {
  id: SpeciesId;
  name: string;
  blurb: string;
  basis: Record<Attr, number>;
  schicksal: number;
  zaehigkeit: number;
  extra: number;
  bewegung: number;
  lpHalbling: boolean;
  skills: string[];
  talentFixed: string[];
  talentOr: [string, string][];
  randomTalents: number;
};

export const SPECIES: Record<SpeciesId, SpeciesDef> = {
  mensch: {
    id: "mensch",
    name: "Mensch (Reikländer)",
    blurb: "Reikland, überall. Mehrheit, oft Sigmar. Default der Welt — nicht langweilig.",
    basis: { KG: 20, BF: 20, ST: 20, WI: 20, I: 20, GW: 20, GS: 20, IN: 20, WK: 20, CH: 20 },
    schicksal: 2,
    zaehigkeit: 1,
    extra: 3,
    bewegung: 4,
    lpHalbling: false,
    skills: [
      "anfuehren",
      "besonnenheit",
      "charme",
      "feilschen",
      "fernkampf.bogen",
      "klatsch",
      "nahkampf.standard",
      "schaetzen",
      "sprache.bretonisch",
      "sprache.oedlaendisch",
      "tierpflege",
      "wissen.reikland",
    ],
    talentFixed: ["Unkenruf"],
    talentOr: [["Einnehmendes Wesen", "Gerissenheit"]],
    randomTalents: 3,
  },
  zwerg: {
    id: "zwerg",
    name: "Zwerg",
    blurb: "Gebirge und Stadtviertel. Ahnen, Ehre, Groll. Der Bart ist Status.",
    basis: { KG: 30, BF: 20, ST: 20, WI: 30, I: 20, GW: 10, GS: 30, IN: 20, WK: 40, CH: 10 },
    schicksal: 0,
    zaehigkeit: 2,
    extra: 2,
    bewegung: 3,
    lpHalbling: false,
    skills: [
      "ausdauer",
      "besonnenheit",
      "einschuechtern",
      "beruf",
      "nahkampf.standard",
      "schaetzen",
      "sprache.khazalid",
      "unterhalten.erzaehlen",
      "wissen.geologie",
      "wissen.metallurgie",
      "wissen.zwerge",
      "zechen",
    ],
    talentFixed: ["Magieresistenz", "Nachtsicht", "Stämmig"],
    talentOr: [
      ["Entschlossen", "Willensstärke"],
      ["Lesen & Schreiben", "Unerbittlich"],
    ],
    randomTalents: 0,
  },
  halbling: {
    id: "halbling",
    name: "Halbling",
    blurb: "Mootland und Haffenstadt. Essen, Verwandtschaft, wenig Privatsphäre.",
    basis: { KG: 10, BF: 30, ST: 10, WI: 20, I: 20, GW: 20, GS: 30, IN: 20, WK: 30, CH: 30 },
    schicksal: 0,
    zaehigkeit: 2,
    extra: 3,
    bewegung: 3,
    lpHalbling: true,
    skills: [
      "ausweichen",
      "charme",
      "gluecksspiel",
      "feilschen",
      "fingerfertigkeit",
      "beruf.koch",
      "intuition",
      "schleichen",
      "sprache.mootlaendisch",
      "wahrnehmung",
      "wissen.reikland",
      "zechen",
    ],
    talentFixed: ["Nachtsicht", "Resistenz (Chaos)", "Scharfer Sinn (Geschmack)", "Zierlich"],
    talentOr: [],
    randomTalents: 2,
  },
  hochelf: {
    id: "hochelf",
    name: "Hochelf (Asur)",
    blurb: "Ulthuan; im Reikland Händler und Gesandte. Reserviert, langlebig, sichtbar fremd.",
    basis: { KG: 30, BF: 30, ST: 20, WI: 20, I: 40, GW: 30, GS: 30, IN: 30, WK: 30, CH: 20 },
    schicksal: 0,
    zaehigkeit: 0,
    extra: 2,
    bewegung: 5,
    lpHalbling: false,
    skills: [
      "anfuehren",
      "besonnenheit",
      "fernkampf.bogen",
      "musizieren",
      "nahkampf.standard",
      "navigation",
      "schaetzen",
      "schwimmen",
      "segeln",
      "sprache.eltharin",
      "unterhalten.singen",
      "wahrnehmung",
    ],
    talentFixed: ["Lesen & Schreiben", "Nachtsicht", "Scharfer Sinn (Sicht)"],
    talentOr: [
      ["Gerissenheit", "Kühler Kopf"],
      ["Sechster Sinn", "Zweites Gesicht"],
    ],
    randomTalents: 0,
  },
  waldelf: {
    id: "waldelf",
    name: "Waldelf (Asrai)",
    blurb: "Athel Loren oder Laurelorn. Isolation, Wald. Die meisten Reikländer haben nie einen gesehen.",
    basis: { KG: 30, BF: 30, ST: 20, WI: 20, I: 40, GW: 30, GS: 30, IN: 30, WK: 30, CH: 20 },
    schicksal: 0,
    zaehigkeit: 0,
    extra: 2,
    bewegung: 5,
    lpHalbling: false,
    skills: [
      "athletik",
      "ausdauer",
      "einschuechtern",
      "fernkampf.bogen",
      "klettern",
      "nahkampf.standard",
      "sprache.eltharin",
      "schleichen.laendlich",
      "spurenlesen",
      "ueberleben",
      "unterhalten.singen",
      "wahrnehmung",
    ],
    talentFixed: ["Nachtsicht", "Scharfer Sinn (Sicht)", "Streuner"],
    talentOr: [
      ["Lesen & Schreiben", "Unverwüstlich"],
      ["Robustheit", "Zweites Gesicht"],
    ],
    randomTalents: 0,
  },
};

export const RANDOM_TALENTS: { lo: number; hi: number; name: string }[] = [
  { lo: 1, hi: 3, name: "Scharfer Sinn (1 nach Wahl)" },
  { lo: 4, hi: 6, name: "Beidhändigkeit" },
  { lo: 7, hi: 9, name: "Tierverbundenheit" },
  { lo: 10, hi: 12, name: "Künstlerisch" },
  { lo: 13, hi: 15, name: "Attraktiv" },
  { lo: 16, hi: 18, name: "Kühler Kopf" },
  { lo: 19, hi: 21, name: "Handwerksgeschick (1 nach Wahl)" },
  { lo: 22, hi: 24, name: "Fliehen" },
  { lo: 25, hi: 28, name: "Robustheit" },
  { lo: 29, hi: 31, name: "Blitzschnelle Reflexe" },
  { lo: 32, hi: 34, name: "Sprachbegabung" },
  { lo: 35, hi: 38, name: "Glückspilz" },
  { lo: 39, hi: 41, name: "Meisterschütze" },
  { lo: 42, hi: 44, name: "Imitator" },
  { lo: 45, hi: 47, name: "Nachtsicht" },
  { lo: 48, hi: 50, name: "Geschickte Finger" },
  { lo: 51, hi: 52, name: "Blaublütig" },
  { lo: 53, hi: 55, name: "Richtungssinn" },
  { lo: 56, hi: 58, name: "Absolutes Gehör" },
  { lo: 59, hi: 62, name: "Reine Seele" },
  { lo: 63, hi: 65, name: "Lesen & Schreiben" },
  { lo: 66, hi: 68, name: "Resistenz (1 nach Wahl)" },
  { lo: 69, hi: 71, name: "Gerissenheit" },
  { lo: 72, hi: 74, name: "Aufgeweckt" },
  { lo: 75, hi: 78, name: "Sechster Sinn" },
  { lo: 79, hi: 81, name: "Starke Beine" },
  { lo: 82, hi: 84, name: "Stämmig" },
  { lo: 85, hi: 87, name: "Einnehmendes Wesen" },
  { lo: 88, hi: 91, name: "Zahlengenie" },
  { lo: 92, hi: 94, name: "Unverwüstlich" },
  { lo: 95, hi: 97, name: "Sehr stark" },
  { lo: 98, hi: 100, name: "Geborener Krieger" },
];

export type Range = [number, number] | null;

export type Stage1 = {
  name: string;
  status: { tier: StatusTier; rank: number };
  skills: string[];
  talents: string[];
  gear: string[];
  plus: Attr[];
};

export type CareerDef = {
  id: string;
  name: string;
  klasse: ClassId;
  ranges: Record<SpeciesId, Range>;
  complete: boolean;
  stage1?: Stage1;
};

function r(lo: number, hi = lo): Range {
  return [lo, hi];
}

export const CAREERS: CareerDef[] = [
  { id: "advokat", name: "Advokat", klasse: "akademiker", complete: false, ranges: { mensch: r(1), zwerg: r(1, 2), halbling: r(1, 2), hochelf: r(1, 4), waldelf: null } },
  { id: "apotheker", name: "Apotheker", klasse: "akademiker", complete: false, ranges: { mensch: r(2), zwerg: r(3), halbling: r(3), hochelf: r(5, 6), waldelf: null } },
  { id: "gelehrter", name: "Gelehrter", klasse: "akademiker", complete: false, ranges: { mensch: r(3, 4), zwerg: r(4, 5), halbling: r(4, 5), hochelf: r(7, 10), waldelf: r(1) } },
  { id: "medicus", name: "Medicus", klasse: "akademiker", complete: false, ranges: { mensch: r(5), zwerg: r(6), halbling: r(6, 7), hochelf: r(11, 12), waldelf: null } },
  { id: "moench", name: "Mönch", klasse: "akademiker", complete: false, ranges: { mensch: r(6, 7), zwerg: null, halbling: null, hochelf: null, waldelf: null } },
  { id: "priester", name: "Priester", klasse: "akademiker", complete: false, ranges: { mensch: r(8, 12), zwerg: null, halbling: null, hochelf: null, waldelf: null } },
  { id: "technicus", name: "Technicus", klasse: "akademiker", complete: false, ranges: { mensch: r(13), zwerg: r(7, 9), halbling: r(8), hochelf: null, waldelf: null } },
  { id: "zauberer", name: "Zauberer", klasse: "akademiker", complete: false, ranges: { mensch: r(14), zwerg: null, halbling: null, hochelf: r(13, 16), waldelf: r(2, 5) } },
  {
    id: "agitator",
    name: "Agitator",
    klasse: "buerger",
    complete: true,
    ranges: { mensch: r(15), zwerg: r(10, 11), halbling: r(9, 10), hochelf: null, waldelf: null },
    stage1: {
      name: "Pamphleteverteiler",
      status: { tier: "messing", rank: 1 },
      skills: ["beruf.drucker", "bestechen", "charme", "kunst.schreiben", "feilschen", "klatsch", "wissen.politik", "zechen"],
      talents: ["Gesellig", "Lesen & Schreiben", "Redeschwall", "Schnorrer"],
      gear: ["Schreibzeug", "Hammer und Nägel", "Stapel Pamphlete"],
      plus: ["IN", "CH"],
    },
  },
  {
    id: "bettler",
    name: "Bettler",
    klasse: "buerger",
    complete: true,
    ranges: { mensch: r(16, 17), zwerg: r(12), halbling: r(11, 14), hochelf: null, waldelf: null },
    stage1: {
      name: "Hungerleider",
      status: { tier: "messing", rank: 0 },
      skills: ["athletik", "ausdauer", "ausweichen", "besonnenheit", "charme", "intuition", "schleichen.stadt", "zechen"],
      talents: ["Genügsam", "Resistenz (Krankheit)", "Schnorrer", "Unverwüstlich"],
      gear: ["Decke (ärmliche Qualität)", "Becher"],
      plus: ["ST", "CH"],
    },
  },
  {
    id: "ermittler",
    name: "Ermittler",
    klasse: "buerger",
    complete: true,
    ranges: { mensch: r(18), zwerg: r(13, 14), halbling: r(15, 16), hochelf: r(17, 18), waldelf: null },
    stage1: {
      name: "Schnüffler",
      status: { tier: "silber", rank: 1 },
      skills: ["besonnenheit", "charme", "intuition", "klatsch", "klettern", "schleichen.stadt", "spurenlesen", "wahrnehmung"],
      talents: ["Aufgeweckt", "Lesen & Schreiben", "Straßenkatze", "Unauffällig"],
      gear: ["Laterne", "Lampenöl", "Notizbuch", "Feder und Tinte"],
      plus: ["I", "GW", "GS"],
    },
  },
  {
    id: "handwerker",
    name: "Handwerker",
    klasse: "buerger",
    complete: true,
    ranges: { mensch: r(19, 20), zwerg: r(15, 20), halbling: r(17, 21), hochelf: r(19, 21), waldelf: r(6, 10) },
    stage1: {
      name: "Handwerkerlehrling",
      status: { tier: "messing", rank: 2 },
      skills: ["ausdauer", "ausweichen", "athletik", "beruf", "besonnenheit", "schaetzen", "schleichen.stadt", "zechen"],
      talents: ["Handwerksgeschick (1 nach Wahl)", "Künstlerisch", "Sehr stark", "Starker Rücken"],
      gear: ["Kreide", "Lederwams", "W10 Lappen"],
      plus: ["ST", "WI", "GS"],
    },
  },
  {
    id: "kaufmann",
    name: "Kaufmann",
    klasse: "buerger",
    complete: true,
    ranges: { mensch: r(21), zwerg: r(21, 24), halbling: r(22, 25), hochelf: r(22, 26), waldelf: null },
    stage1: {
      name: "Händler",
      status: { tier: "silber", rank: 2 },
      skills: ["bestechen", "charme", "fahren", "gluecksspiel", "feilschen", "klatsch", "tierpflege", "zechen"],
      talents: ["Einnehmendes Wesen", "Lesen & Schreiben", "Redeschwall", "Verhandlungsgenie"],
      gear: ["Abakus", "Maultier und Karren", "Wagenplane aus Leinwand", "3W10 Silberschillinge (Karriere)"],
      plus: ["WK", "CH"],
    },
  },
  {
    id: "rattenfaenger",
    name: "Rattenfänger",
    klasse: "buerger",
    complete: true,
    ranges: { mensch: r(22, 23), zwerg: r(25), halbling: r(26, 28), hochelf: null, waldelf: null },
    stage1: {
      name: "Rattenjäger",
      status: { tier: "messing", rank: 3 },
      skills: ["abrichten.hund", "athletik", "ausdauer", "fernkampf.schleuder", "nahkampf.standard", "schleichen", "tiere_bezirzen", "zechen"],
      talents: ["Betäubender Schlag", "Mächtiger Schlag", "Nachtsicht", "Resistenz (Krankheit)"],
      gear: ["Schleuder mit Munition", "Sack", "kleiner, aber bissiger Hund"],
      plus: ["KG", "BF", "WK"],
    },
  },
  {
    id: "staedter",
    name: "Städter",
    klasse: "buerger",
    complete: true,
    ranges: { mensch: r(24, 26), zwerg: r(26, 31), halbling: r(29, 31), hochelf: r(27, 28), waldelf: null },
    stage1: {
      name: "Gehilfe",
      status: { tier: "silber", rank: 1 },
      skills: ["ausweichen", "charme", "fahren", "feilschen", "gluecksspiel", "klatsch", "klettern", "zechen"],
      talents: ["Etikette (Dienstboten)", "Stämmig", "Straßenkatze", "Unauffällig"],
      gear: ["Möbliertes Zimmer", "feste Stiefel"],
      plus: ["GW", "IN", "CH"],
    },
  },
  {
    id: "wachmann",
    name: "Wachmann",
    klasse: "buerger",
    complete: true,
    ranges: { mensch: r(27), zwerg: r(32, 34), halbling: r(32, 33), hochelf: r(29), waldelf: null },
    stage1: {
      name: "Rekrut der Wache",
      status: { tier: "messing", rank: 3 },
      skills: ["ausdauer", "ausweichen", "athletik", "gluecksspiel", "klettern", "nahkampf", "wahrnehmung", "zechen"],
      talents: ["Beharrlich", "Betäubender Schlag", "Gedrillt", "Robustheit"],
      gear: ["Handwaffe", "Gambeson", "Uniform"],
      plus: ["KG", "ST", "CH"],
    },
  },
  { id: "flussbewohner", name: "Flussbewohner", klasse: "flussvolk", complete: false, ranges: { mensch: r(28, 30), zwerg: r(35, 36), halbling: r(34, 36), hochelf: null, waldelf: null } },
  { id: "flussschiffer", name: "Flussschiffer", klasse: "flussvolk", complete: false, ranges: { mensch: r(31, 32), zwerg: r(37, 38), halbling: r(37), hochelf: r(30), waldelf: null } },
  { id: "flusswaechter", name: "Flusswächter", klasse: "flussvolk", complete: false, ranges: { mensch: r(33, 34), zwerg: null, halbling: r(38), hochelf: null, waldelf: null } },
  { id: "lotse", name: "Lotse", klasse: "flussvolk", complete: false, ranges: { mensch: r(35), zwerg: r(39), halbling: r(39), hochelf: null, waldelf: null } },
  { id: "seemann", name: "Seemann", klasse: "flussvolk", complete: false, ranges: { mensch: r(36, 37), zwerg: r(40), halbling: r(40), hochelf: r(31, 45), waldelf: null } },
  { id: "schmuggler", name: "Schmuggler", klasse: "flussvolk", complete: false, ranges: { mensch: r(38), zwerg: r(41, 42), halbling: r(41, 44), hochelf: r(46), waldelf: null } },
  { id: "stauer", name: "Stauer", klasse: "flussvolk", complete: false, ranges: { mensch: r(39, 40), zwerg: r(43, 44), halbling: r(45, 47), hochelf: null, waldelf: null } },
  { id: "strandraeuber", name: "Strandräuber", klasse: "flussvolk", complete: false, ranges: { mensch: r(41), zwerg: r(45), halbling: null, hochelf: null, waldelf: r(11) } },
  { id: "bote", name: "Bote", klasse: "freisassen", complete: false, ranges: { mensch: r(42), zwerg: r(46, 47), halbling: r(48, 49), hochelf: r(47), waldelf: r(12, 14) } },
  { id: "flagellant", name: "Flagellant", klasse: "freisassen", complete: false, ranges: { mensch: r(43, 44), zwerg: null, halbling: null, hochelf: null, waldelf: null } },
  { id: "hausierer", name: "Hausierer", klasse: "freisassen", complete: false, ranges: { mensch: r(45), zwerg: r(48, 49), halbling: r(50, 51), hochelf: null, waldelf: null } },
  { id: "hexenjaeger", name: "Hexenjäger", klasse: "freisassen", complete: false, ranges: { mensch: r(46), zwerg: null, halbling: null, hochelf: null, waldelf: null } },
  { id: "kopfgeldjaeger", name: "Kopfgeldjäger", klasse: "freisassen", complete: false, ranges: { mensch: r(47), zwerg: r(50, 53), halbling: r(52), hochelf: r(48, 50), waldelf: r(15, 16) } },
  { id: "kutscher", name: "Kutscher", klasse: "freisassen", complete: false, ranges: { mensch: r(48), zwerg: r(54), halbling: r(53, 54), hochelf: null, waldelf: null } },
  { id: "schausteller", name: "Schausteller", klasse: "freisassen", complete: false, ranges: { mensch: r(49, 50), zwerg: r(55, 56), halbling: r(55, 57), hochelf: r(51, 53), waldelf: r(17, 21) } },
  { id: "strassenwaechter", name: "Straßenwächter", klasse: "freisassen", complete: false, ranges: { mensch: r(51), zwerg: null, halbling: r(58), hochelf: null, waldelf: null } },
  { id: "bandit", name: "Bandit", klasse: "gesetzlose", complete: false, ranges: { mensch: r(52, 55), zwerg: r(57, 59), halbling: r(59), hochelf: r(54, 56), waldelf: r(22, 27) } },
  { id: "dieb", name: "Dieb", klasse: "gesetzlose", complete: false, ranges: { mensch: r(56, 58), zwerg: r(60), halbling: r(60, 63), hochelf: null, waldelf: null } },
  { id: "grabraeuber", name: "Grabräuber", klasse: "gesetzlose", complete: false, ranges: { mensch: r(59), zwerg: null, halbling: r(64), hochelf: null, waldelf: null } },
  { id: "halunke", name: "Halunke", klasse: "gesetzlose", complete: false, ranges: { mensch: r(60), zwerg: r(61), halbling: r(65), hochelf: null, waldelf: null } },
  { id: "hehler", name: "Hehler", klasse: "gesetzlose", complete: false, ranges: { mensch: r(61), zwerg: r(62), halbling: r(66), hochelf: null, waldelf: null } },
  { id: "hexer", name: "Hexer", klasse: "gesetzlose", complete: false, ranges: { mensch: r(62), zwerg: null, halbling: null, hochelf: null, waldelf: null } },
  { id: "kuppler", name: "Kuppler", klasse: "gesetzlose", complete: false, ranges: { mensch: r(63, 64), zwerg: null, halbling: r(67, 69), hochelf: r(57, 58), waldelf: null } },
  { id: "scharlatan", name: "Scharlatan", klasse: "gesetzlose", complete: false, ranges: { mensch: r(65), zwerg: null, halbling: r(70), hochelf: r(59, 61), waldelf: null } },
  { id: "adeliger", name: "Adeliger", klasse: "hoeflinge", complete: false, ranges: { mensch: r(66), zwerg: r(63), halbling: null, hochelf: r(62, 64), waldelf: r(28, 33) } },
  { id: "berater", name: "Berater", klasse: "hoeflinge", complete: false, ranges: { mensch: r(67), zwerg: r(64, 65), halbling: r(71), hochelf: r(65, 66), waldelf: r(34, 37) } },
  { id: "diener", name: "Diener", klasse: "hoeflinge", complete: false, ranges: { mensch: r(68, 70), zwerg: r(66), halbling: r(72, 77), hochelf: null, waldelf: null } },
  { id: "duellist", name: "Duellist", klasse: "hoeflinge", complete: false, ranges: { mensch: r(71), zwerg: r(67), halbling: null, hochelf: r(67, 68), waldelf: null } },
  { id: "gesandter", name: "Gesandter", klasse: "hoeflinge", complete: false, ranges: { mensch: r(72), zwerg: r(68, 69), halbling: r(78), hochelf: r(69, 71), waldelf: r(38, 44) } },
  { id: "kuenstler", name: "Künstler", klasse: "hoeflinge", complete: false, ranges: { mensch: r(73), zwerg: r(70), halbling: r(79, 80), hochelf: r(72), waldelf: r(45, 48) } },
  { id: "meier", name: "Meier", klasse: "hoeflinge", complete: false, ranges: { mensch: r(74), zwerg: r(71, 72), halbling: r(81, 82), hochelf: r(73, 74), waldelf: null } },
  { id: "spion", name: "Spion", klasse: "hoeflinge", complete: false, ranges: { mensch: r(75), zwerg: r(73), halbling: r(83), hochelf: r(75, 77), waldelf: r(49, 52) } },
  { id: "gedungener", name: "Gedungener", klasse: "krieger", complete: false, ranges: { mensch: r(76), zwerg: r(74, 76), halbling: null, hochelf: r(78), waldelf: null } },
  { id: "grubenkaempfer", name: "Grubenkämpfer", klasse: "krieger", complete: false, ranges: { mensch: r(77), zwerg: r(77, 79), halbling: r(84), hochelf: r(79, 80), waldelf: r(53, 54) } },
  { id: "kavallerist", name: "Kavallerist", klasse: "krieger", complete: false, ranges: { mensch: r(78, 79), zwerg: null, halbling: null, hochelf: r(81, 84), waldelf: r(55, 59) } },
  { id: "kriegerpriester", name: "Kriegerpriester", klasse: "krieger", complete: false, ranges: { mensch: r(80), zwerg: null, halbling: null, hochelf: null, waldelf: null } },
  { id: "ritter", name: "Ritter", klasse: "krieger", complete: false, ranges: { mensch: r(81), zwerg: null, halbling: null, hochelf: r(85), waldelf: r(60, 61) } },
  { id: "slayer", name: "Slayer", klasse: "krieger", complete: false, ranges: { mensch: null, zwerg: r(80, 83), halbling: null, hochelf: null, waldelf: null } },
  { id: "soldat", name: "Soldat", klasse: "krieger", complete: false, ranges: { mensch: r(82, 85), zwerg: r(84, 86), halbling: r(85, 87), hochelf: r(86, 87), waldelf: r(62, 65) } },
  { id: "waechter", name: "Wächter", klasse: "krieger", complete: false, ranges: { mensch: r(86, 87), zwerg: r(87, 89), halbling: r(88, 89), hochelf: r(88, 89), waldelf: r(66, 67) } },
  { id: "bergmann", name: "Bergmann", klasse: "landvolk", complete: false, ranges: { mensch: r(88), zwerg: r(90, 94), halbling: r(90), hochelf: null, waldelf: null } },
  { id: "buettel", name: "Büttel", klasse: "landvolk", complete: false, ranges: { mensch: r(89), zwerg: r(95, 96), halbling: r(91), hochelf: null, waldelf: null } },
  { id: "doerfler", name: "Dörfler", klasse: "landvolk", complete: false, ranges: { mensch: r(90, 94), zwerg: r(97), halbling: r(92, 94), hochelf: null, waldelf: null } },
  { id: "heckenhexer", name: "Heckenhexer", klasse: "landvolk", complete: false, ranges: { mensch: r(95), zwerg: null, halbling: null, hochelf: null, waldelf: null } },
  { id: "jaeger", name: "Jäger", klasse: "landvolk", complete: false, ranges: { mensch: r(96, 97), zwerg: r(98, 99), halbling: r(95, 96), hochelf: r(90, 92), waldelf: r(68, 77) } },
  { id: "kraeuterkundiger", name: "Kräuterkundiger", klasse: "landvolk", complete: false, ranges: { mensch: r(98), zwerg: null, halbling: r(97, 99), hochelf: r(93, 94), waldelf: r(78, 84) } },
  { id: "kundschafter", name: "Kundschafter", klasse: "landvolk", complete: false, ranges: { mensch: r(99), zwerg: r(100), halbling: r(100), hochelf: r(95, 100), waldelf: r(85, 95) } },
  { id: "mystiker", name: "Mystiker", klasse: "landvolk", complete: false, ranges: { mensch: r(100), zwerg: null, halbling: null, hochelf: null, waldelf: r(96, 100) } },
];

export const CAREER_BY_ID = Object.fromEntries(CAREERS.map((c) => [c.id, c]));

export const CLASS_GEAR: Record<ClassId, string[]> = {
  akademiker: ["Kleidung", "Dolch", "Beutel", "Umhängetasche mit Schreibzeug und 1W10 Blatt Pergament"],
  buerger: ["Kleidung", "Umhang", "Hut", "Dolch", "Beutel", "Umhängetasche mit einer Mahlzeit"],
  flussvolk: ["Kleidung", "Umhang", "Dolch", "Beutel", "Umhängetasche mit Schnapsflasche"],
  freisassen: ["Kleidung", "Umhang", "Dolch", "Beutel", "Rucksack mit Zünderkästchen, Decke und Ration (1 Tag)"],
  gesetzlose: ["Kleidung", "Gugel oder Maske", "Dolch", "Beutel", "Umhängetasche mit 2 Kerzen und 1W10 Zündhölzern"],
  hoeflinge: ["Edle Gewandung", "Dolch", "Beutel mit Pinzette, Ohrlöffel und Kamm"],
  krieger: ["Kleidung", "Handwaffe", "Dolch", "Beutel"],
  landvolk: ["Kleidung", "Umhang", "Dolch", "Beutel", "Umhängetasche mit Ration (1 Tag)"],
};

export const HUMAN_FIRST = [
  "Adhemar", "Anders", "Artur", "Beatrix", "Clementia", "Detlev", "Erika", "Frauke", "Friederich", "Gerner",
  "Gertraud", "Haletha", "Heinrich", "Helga", "Henrik", "Irmina", "Jehanne", "Karl", "Kruger", "Lorelai",
  "Marieke", "Sebastien", "Sigfreda", "Talunda", "Ulrich", "Ulrika", "Walther", "Werther", "Wilhelma", "Wilryn",
];
export const HUMAN_LAST = [
  "Bauer", "Gerber", "Fleischhauer", "Meier", "Schultheiß", "Schmidt", "Schuster", "Müller", "Besenbinder",
  "Schneider", "Riese", "Klein", "Rot", "Stark", "Kohl", "Tuchhändler", "Krause", "Jung",
];
export const DWARF_FIRST = ["Alrik", "Bronda", "Dimzad", "Fenna", "Gottri", "Gudrun", "Snorri"];
export const DWARF_CLAN = ["Ardrungan", "Bryntok", "Gazani", "Gromheld", "Harrazlings", "Unboki"];
export const HALFLING_FIRST = ["Antoniella", "Esmerelda", "Ferdinand", "Hieronymus", "Maximilian", "Rosamunda", "Theodosius", "Thomasina"];
export const HALFLING_CLAN = ["Graufeld", "Brandyschluck", "Heufuß", "Rumstern", "Kurzbauch", "Dornflicker"];

export const ELF_A = ["Aes", "Ath", "Dor", "Far", "Gal", "Im", "Lin", "Mal", "Mor", "Ullia"];
export const ELF_B = ["a", "ath", "dia", "en", "for", "lor", "mar", "ol", "sor", "than"];
export const ELF_HIGH = ["andril", "anel", "ellion", "fin", "il", "irian", "mor", "nil", "ric", "wing"];
export const ELF_WOOD = ["arha", "anhu", "dda", "han", "loc", "noc", "oth", "ryn", "stra", "wyth"];

export const EYE: Record<SpeciesId, Record<number, string>> = {
  mensch: { 2: "freie Wahl", 3: "Grün", 4: "Hellblau", 5: "Blau", 6: "Blau", 7: "Blau", 8: "Hellgrau", 9: "Hellgrau", 10: "Hellgrau", 11: "Hellgrau", 12: "Grau", 13: "Grau", 14: "Grau", 15: "Braun", 16: "Braun", 17: "Braun", 18: "Haselnuss", 19: "Dunkelbraun", 20: "Schwarz" },
  zwerg: { 2: "Kohle", 3: "Blei", 4: "Stahl", 5: "Blau", 6: "Blau", 7: "Blau", 8: "Erdbraun", 9: "Erdbraun", 10: "Erdbraun", 11: "Erdbraun", 12: "Dunkelbraun", 13: "Dunkelbraun", 14: "Dunkelbraun", 15: "Haselnuss", 16: "Haselnuss", 17: "Haselnuss", 18: "Grün", 19: "Kupfer", 20: "Gold" },
  halbling: { 2: "Hellgrau", 3: "Grau", 4: "Hellblau", 5: "Blau", 6: "Blau", 7: "Blau", 8: "Grün", 9: "Grün", 10: "Grün", 11: "Grün", 12: "Haselnuss", 13: "Haselnuss", 14: "Haselnuss", 15: "Braun", 16: "Braun", 17: "Braun", 18: "Kupfer", 19: "Dunkelbraun", 20: "Dunkelbraun" },
  hochelf: { 2: "Obsidian", 3: "Amethyst", 4: "Aquamarin", 5: "Saphir", 6: "Saphir", 7: "Saphir", 8: "Türkis", 9: "Türkis", 10: "Türkis", 11: "Türkis", 12: "Smaragd", 13: "Smaragd", 14: "Smaragd", 15: "Bernstein", 16: "Bernstein", 17: "Bernstein", 18: "Kupfer", 19: "Citrin", 20: "Gold" },
  waldelf: { 2: "Elfenbein", 3: "Holzkohle", 4: "Efeugrün", 5: "Moosgrün", 6: "Moosgrün", 7: "Moosgrün", 8: "Walnuss", 9: "Walnuss", 10: "Walnuss", 11: "Walnuss", 12: "Walnuss", 13: "Walnuss", 14: "Walnuss", 15: "Dunkelbraun", 16: "Dunkelbraun", 17: "Dunkelbraun", 18: "Hellbraun", 19: "Sandbraun", 20: "Violett" },
};

export const HAIR: Record<SpeciesId, Record<number, string>> = {
  mensch: { 2: "Hellblond", 3: "Goldblond", 4: "Rotblond", 5: "Goldbraun", 6: "Goldbraun", 7: "Goldbraun", 8: "Hellbraun", 9: "Hellbraun", 10: "Hellbraun", 11: "Hellbraun", 12: "Dunkelbraun", 13: "Dunkelbraun", 14: "Dunkelbraun", 15: "Schwarz", 16: "Schwarz", 17: "Schwarz", 18: "Rotbraun", 19: "Rot", 20: "Grau" },
  zwerg: { 2: "Weiß", 3: "Grau", 4: "Silberblond", 5: "Golden", 6: "Golden", 7: "Golden", 8: "Kupfer", 9: "Kupfer", 10: "Kupfer", 11: "Kupfer", 12: "Bronze", 13: "Bronze", 14: "Bronze", 15: "Braun", 16: "Braun", 17: "Braun", 18: "Dunkelbraun", 19: "Rotbraun", 20: "Schwarz" },
  halbling: { 2: "Grau", 3: "Flachsfarben", 4: "Rostrot", 5: "Honig", 6: "Honig", 7: "Honig", 8: "Walnuss", 9: "Walnuss", 10: "Walnuss", 11: "Walnuss", 12: "Fuchsrot", 13: "Fuchsrot", 14: "Fuchsrot", 15: "Senfgelb", 16: "Senfgelb", 17: "Senfgelb", 18: "Mandelbraun", 19: "Schokolade", 20: "Lakritz" },
  hochelf: { 2: "Silber", 3: "Weiß", 4: "Hellblond", 5: "Blond", 6: "Blond", 7: "Blond", 8: "Gelbblond", 9: "Gelbblond", 10: "Gelbblond", 11: "Gelbblond", 12: "Kupferblond", 13: "Kupferblond", 14: "Kupferblond", 15: "Rotblond", 16: "Rotblond", 17: "Rotblond", 18: "Rotbraun", 19: "Rot", 20: "Schwarz" },
  waldelf: { 2: "Birkensilber", 3: "Aschblond", 4: "Rotgold", 5: "Honigblond", 6: "Honigblond", 7: "Honigblond", 8: "Braun", 9: "Braun", 10: "Braun", 11: "Braun", 12: "Mahagoni", 13: "Mahagoni", 14: "Mahagoni", 15: "Dunkelbraun", 16: "Dunkelbraun", 17: "Dunkelbraun", 18: "Ocker", 19: "Ebenholz", 20: "Blauschwarz" },
};

export const LIFE_QUESTIONS = [
  { id: "woher", q: "Woher kommst du?" },
  { id: "familie", q: "Wie ist deine Familie?" },
  { id: "kindheit", q: "Wie war deine Kindheit?" },
  { id: "weggang", q: "Warum hast du dein Zuhause verlassen?" },
  { id: "freunde", q: "Wer sind deine besten Freunde?" },
  { id: "wunsch", q: "Was ist dein größter Wunsch?" },
  { id: "erinnerung", q: "Was sind deine schönsten und schlimmsten Erinnerungen?" },
  { id: "glaube", q: "Was sind deine religiösen Überzeugungen?" },
  { id: "loyal", q: "Wem oder welcher Sache gegenüber bist du loyal?" },
  { id: "abenteuer", q: "Warum ziehst du los, um Abenteuer zu erleben?" },
];

export const ATTR_LABEL: Record<Attr, string> = {
  KG: "Kampfgeschick",
  BF: "Ballistische Fertigkeit",
  ST: "Stärke",
  WI: "Widerstand",
  I: "Initiative",
  GW: "Gewandtheit",
  GS: "Geschicklichkeit",
  IN: "Intelligenz",
  WK: "Willenskraft",
  CH: "Charisma",
};

export { ATTRS };

export const XP_ATTR = [
  { lo: 0, hi: 5, cost: 25 },
  { lo: 6, hi: 10, cost: 30 },
];
export const XP_SKILL = [
  { lo: 0, hi: 5, cost: 10 },
  { lo: 6, hi: 10, cost: 15 },
  { lo: 11, hi: 15, cost: 20 },
];
