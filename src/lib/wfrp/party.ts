import { ATTRS, type Attr, type Character } from "./types";
import {
  draftToCharacter,
  emptyAttrs,
  moneyFromStatus,
  newDraft,
  rollUniqueTalents,
  stageOf,
  twoD10,
  type ChargenDraft,
} from "./chargen";
import { CAREER_BY_ID, SPECIES, type SpeciesId } from "./chargen-data";

function rng(seed: number) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

function rolledRaw(r: () => number) {
  const raw = emptyAttrs();
  for (const a of ATTRS) raw[a] = twoD10(r);
  return raw;
}

function advancesOn(plus: Attr[]): Record<Attr, number> {
  const out = emptyAttrs();
  for (const a of plus) out[a] += 1;
  return out;
}

function careerAdv(id: string): Record<string, number> {
  const skills = stageOf(CAREER_BY_ID[id]!).skills;
  return Object.fromEntries(skills.map((s) => [s, 5]));
}

type Spec = {
  name: string;
  species: SpeciesId;
  career: string;
  seed: number;
  plus5: string[];
  plus3: string[];
  talentOr: string[];
  careerTalent: string;
  fateExtra: number;
  resExtra: number;
  attrPlus: Attr[];
  age: number;
  heightCm: number;
  eyes: string;
  hair: string;
  bart: string;
  gott: string;
  herkunft: string;
  motivation: string;
  shortGoal: string;
  longGoal: string;
  answers: Record<string, string>;
};

function fromSpec(s: Spec): Character {
  const r = rng(s.seed);
  const d: ChargenDraft = {
    ...newDraft(),
    station: "xp",
    speciesId: s.species,
    speciesEp: 20,
    careerId: s.career,
    careerEp: 0,
    attrMethod: "keep",
    attrEp: 50,
    attrRaw: rolledRaw(r),
    attrAdvances: advancesOn(s.attrPlus),
    fateExtra: s.fateExtra,
    resExtra: s.resExtra,
    motivation: s.motivation,
    plus5: s.plus5,
    plus3: s.plus3,
    talentOr: s.talentOr,
    randomTalents: rollUniqueTalents(SPECIES[s.species].randomTalents, [...SPECIES[s.species].talentFixed, ...s.talentOr], r),
    careerAdv: careerAdv(s.career),
    careerTalent: s.careerTalent,
    money: moneyFromStatus(stageOf(CAREER_BY_ID[s.career]!).status.tier, stageOf(CAREER_BY_ID[s.career]!).status.rank, r),
    name: s.name,
    age: s.age,
    heightCm: s.heightCm,
    eyes: s.eyes,
    hair: s.hair,
    shortGoal: s.shortGoal,
    longGoal: s.longGoal,
    groupName: "Die Fünf",
    howMet: "Zusammen vor dem Tor. Die Stadt lässt niemanden raus.",
    answers: s.answers,
    hood: "gugel",
    herkunft: s.herkunft,
    bart: s.bart,
    gott: s.gott,
  };
  const c = draftToCharacter(d);
  if (!c) throw new Error(`Bogen ${s.name} unvollständig`);
  return c;
}

const SPECS: Spec[] = [
  {
    name: "Tick",
    species: "mensch",
    career: "wachmann",
    seed: 1101,
    plus5: ["nahkampf.standard", "anfuehren", "besonnenheit"],
    plus3: ["charme", "klatsch", "wissen.reikland"],
    talentOr: ["Gerissenheit"],
    careerTalent: "Robustheit",
    fateExtra: 2,
    resExtra: 1,
    attrPlus: ["KG", "ST", "WI", "WK", "CH"],
    age: 24,
    heightCm: 176,
    eyes: "Grau",
    hair: "Dunkelbraun",
    bart: "Stoppel",
    gott: "Sigmar",
    herkunft: "Reikland, ein Weiler westlich der Stadt",
    motivation: "Die Ordnung halten, bis jemand sagt, was gilt.",
    shortGoal: "Herausfinden, wer am Tor das Sagen hat.",
    longGoal: "Wieder raus. Mit den anderen.",
    answers: {
      woher: "Ein Weiler westlich, Getreide und Wache.",
      glaube: "Sigmar, weil die Mutter es so wollte.",
      angst: "Dass die Stadt zuhält und niemand mehr öffnet.",
    },
  },
  {
    name: "Track",
    species: "mensch",
    career: "kaufmann",
    seed: 2202,
    plus5: ["feilschen", "charme", "schaetzen"],
    plus3: ["klatsch", "tierpflege", "wissen.reikland"],
    talentOr: ["Einnehmendes Wesen"],
    careerTalent: "Verhandlungsgenie",
    fateExtra: 1,
    resExtra: 2,
    attrPlus: ["CH", "IN", "WK", "I", "GS"],
    age: 27,
    heightCm: 172,
    eyes: "Braun",
    hair: "Kastanienbraun",
    bart: "",
    gott: "Handrich",
    herkunft: "Altdorf, ein Kontor an der Reik",
    motivation: "Zahlen, die stimmen. Leute, die zahlen.",
    shortGoal: "Einen Preis in Drosselau erfahren, der kein Wucher ist.",
    longGoal: "Ein Siegel, das die Tore wieder aufmacht.",
    answers: {
      woher: "Kontor in Altdorf. Der Wagen blieb hier stehen.",
      glaube: "Handrich. Der Rest ist Buchhaltung.",
      angst: "Leere Taschen und volle Speicher der anderen.",
    },
  },
  {
    name: "Truck",
    species: "zwerg",
    career: "handwerker",
    seed: 3303,
    plus5: ["beruf", "ausdauer", "nahkampf.standard"],
    plus3: ["schaetzen", "wissen.metallurgie", "zechen"],
    talentOr: ["Entschlossen", "Lesen & Schreiben"],
    careerTalent: "Sehr stark",
    fateExtra: 1,
    resExtra: 1,
    attrPlus: ["ST", "WI", "GS", "WK", "KG"],
    age: 62,
    heightCm: 142,
    eyes: "Bernstein",
    hair: "Kupfer, geflochten",
    bart: "Zwei Zöpfe, Eisenspange",
    gott: "Grungni",
    herkunft: "Karaz-a-Karak, Lehrling auf der Walz",
    motivation: "Ein Werk, das hält. Ein Groll, der wartet.",
    shortGoal: "Eine Esse in der Schmiedezeile, die nicht fremd ist.",
    longGoal: "Die Walz beenden. Nicht in dieser Stadt sterben.",
    answers: {
      woher: "Die Walz. Der Hammer ist älter als die Stadtmauer.",
      glaube: "Grungni. Ahnen zuerst.",
      angst: "Schande vor den Ahnen, wenn das Werk bricht.",
    },
  },
  {
    name: "Hanni",
    species: "halbling",
    career: "bettler",
    seed: 4404,
    plus5: ["schleichen", "intuition", "wahrnehmung"],
    plus3: ["charme", "ausweichen", "feilschen"],
    talentOr: [],
    careerTalent: "Unverwüstlich",
    fateExtra: 2,
    resExtra: 1,
    attrPlus: ["GW", "I", "CH", "GS", "WK"],
    age: 34,
    heightCm: 118,
    eyes: "Grün",
    hair: "Lockig, nussbraun",
    bart: "",
    gott: "Esmeralda",
    herkunft: "Haffenstadt, Cousinen in jeder Gasse",
    motivation: "Nicht auffallen. Trotzdem satt werden.",
    shortGoal: "Eine warme Ecke in der Bettelgasse, ohne Schuld.",
    longGoal: "Nanni wieder nach Hause bringen. Dann essen.",
    answers: {
      woher: "Haffenstadt. Die Tante hat uns auf den Wagen gesetzt.",
      glaube: "Esmeralda. Der Topf zuerst.",
      angst: "Hunger, und dass Nanni ohne mich bleibt.",
    },
  },
  {
    name: "Nanni",
    species: "mensch",
    career: "medicus",
    seed: 5505,
    plus5: ["besonnenheit", "charme", "klatsch"],
    plus3: ["anfuehren", "wissen.reikland", "feilschen"],
    talentOr: ["Einnehmendes Wesen"],
    careerTalent: "Lesen & Schreiben",
    fateExtra: 2,
    resExtra: 1,
    attrPlus: ["IN", "GS", "WK", "I", "CH"],
    age: 23,
    heightCm: 164,
    eyes: "Hellblau",
    hair: "Strohblond, hochgesteckt",
    bart: "",
    gott: "Shallya",
    herkunft: "Ubersreik, eine kleine Praxis",
    motivation: "Wunden schließen. Fragen offen lassen.",
    shortGoal: "Wer in Drosselau heilen darf, ohne die Gilde zu fragen.",
    longGoal: "Hanni nicht verlieren. Dann weiter.",
    answers: {
      woher: "Ubersreik. Die Lehre war kürzer als der Weg hierher.",
      glaube: "Shallya. Die Hand, nicht das Schwert.",
      angst: "Ein Fieber, dem ich keinen Namen geben kann.",
    },
  },
];

export function makeParty(): Character[] {
  return SPECS.map((s, i) => {
    const c = fromSpec(s);
    c.id = `platz-${i + 1}`;
    return c;
  });
}
