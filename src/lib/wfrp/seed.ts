import type { Campaign, Character, Scene } from "./types";

function greta(): Character {
  return {
    id: "greta",
    name: "Greta Kohl",
    species: "mensch",
    className: "Bürger",
    career: "Städter · Gehilfe",
    careerLevel: 1,
    status: { tier: "silber", rank: 1 },
    motivation: "Schulden des Vaters",
    attributes: {
      KG: 31,
      BF: 33,
      ST: 32,
      WI: 34,
      I: 36,
      GW: 31,
      GS: 38,
      IN: 41,
      WK: 35,
      CH: 42,
    },
    skills: {
      feilschen: 47,
      charme: 45,
      wahrnehmung: 41,
      intuition: 39,
      ausweichen: 31,
      nahkampf: 31,
      ausdauer: 34,
      besonnenheit: 35,
    },
    talents: ["Etikette (Dienstboten)", "Stämmig", "Straßenkatze", "Unauffällig"],
    wounds: { current: 12, max: 12 },
    movement: 4,
    fate: 3,
    fortune: 3,
    resilience: 3,
    resolve: 3,
    advantage: 0,
    conditions: [],
    money: { crowns: 0, shillings: 8, pennies: 14 },
    inventory: [
      { id: "dolch", name: "Dolch", weapon: { skill: "nahkampf", damage: 0, drawn: false } },
      { id: "tasche", name: "Tasche" },
    ],
    engaged: false,
    flags: ["schuldet_haken_2S"],
    kind: "pc",
  };
}

function otto(): Character {
  return {
    id: "otto",
    name: "Otto Tuchhändler",
    species: "mensch",
    className: "Bürger",
    career: "Kaufmann · Händler",
    careerLevel: 1,
    status: { tier: "silber", rank: 1 },
    motivation: "Den Preis halten",
    attributes: {
      KG: 28,
      BF: 30,
      ST: 30,
      WI: 32,
      I: 33,
      GW: 30,
      GS: 34,
      IN: 36,
      WK: 36,
      CH: 38,
    },
    skills: { feilschen: 50, charme: 38, besonnenheit: 36, wahrnehmung: 33 },
    talents: ["Einnehmendes Wesen", "Lesen & Schreiben", "Redeschwall", "Verhandlungsgenie"],
    wounds: { current: 11, max: 11 },
    movement: 4,
    fate: 2,
    fortune: 2,
    resilience: 1,
    resolve: 1,
    advantage: 0,
    conditions: [],
    money: { crowns: 4, shillings: 12, pennies: 0 },
    inventory: [{ id: "ballen", name: "Wollballen" }],
    engaged: false,
    flags: [],
    kind: "npc",
    attitude: "neutral",
  };
}

function kurt(): Character {
  return {
    id: "kurt",
    name: "Kurt Raufbold",
    species: "mensch",
    className: "Gesetzlose",
    career: "Halunke",
    careerLevel: 1,
    status: { tier: "messing", rank: 2 },
    motivation: "Den Ballen",
    attributes: {
      KG: 38,
      BF: 30,
      ST: 35,
      WI: 32,
      I: 30,
      GW: 33,
      GS: 30,
      IN: 28,
      WK: 28,
      CH: 28,
    },
    skills: { nahkampf: 38, ausweichen: 33 },
    talents: [],
    wounds: { current: 11, max: 11 },
    movement: 4,
    fate: 0,
    fortune: 0,
    resilience: 1,
    resolve: 1,
    advantage: 0,
    conditions: [],
    money: { crowns: 0, shillings: 1, pennies: 4 },
    inventory: [
      { id: "faeuste", name: "Waffenlos", weapon: { skill: "nahkampf", damage: 0, drawn: true } },
    ],
    engaged: false,
    flags: [],
    kind: "npc",
    attitude: "will den Ballen",
  };
}

const BASAR_CATALOG = [
  "umschauen",
  "intuition",
  "reden",
  "feilschen",
  "kaufen",
  "bestechen",
  "einschuechtern",
  "klatsch",
  "schleichen",
  "gehen",
  "warten",
  "waffe_ziehen",
  "glueck",
  "mut",
  "schicksal",
  "zaehigkeit",
  "freitext",
];

const GASSE_CATALOG = [
  ...BASAR_CATALOG,
  "sturmangriff",
  "angreifen",
  "sprinten",
  "fliehen",
  "loesen",
  "volle_abwehr",
  "ausweichen",
  "aufstehen",
  "kriechen",
];

function basar(): Scene {
  return {
    id: "basar",
    title: "Der Ballen",
    locationName: "Basar-Altquartier",
    slText:
      "Vormittag. Der Altquartier-Basar dampft nach Kohl, nassem Tuch und Fisch. Otto steht hinter aufgestapelten Ballen, der Daumen schon am Preis. Eine Stadtwache lehnt am Pfeiler, gähnt.",
    trigger: "Otto sieht Gretas Tasche und sagt: „Sechs Schillinge, und ich bin schon gnädig.“",
    mode: "sozial",
    present: ["greta", "otto"],
    exits: [
      { id: "gasse", label: "Gasse hinter dem Basar", toScene: "gasse" },
      { id: "hauptstrasse", label: "Hauptstraße", toScene: "" },
    ],
    locationFlags: [],
    catalogIds: BASAR_CATALOG,
    protocol: [],
    events: [
      {
        id: "taschendieb",
        label: "Taschendieb",
        hint: "Nach dem ersten sozialen Misserfolg.",
        fired: false,
      },
    ],
    combat: null,
    countdownMs: 15 * 60 * 1000,
  };
}

function gasse(): Scene {
  return {
    id: "gasse",
    title: "Die Gasse",
    locationName: "Gasse hinter dem Basar",
    slText:
      "Gasse, acht Schritt, nass, Kellerabgang, Ausgang nur zurück zum Basar. Kurt an der Wand, offene Hände, sieht den Ballen.",
    trigger: "„Den Ballen. Her damit. Dann musst du nicht liegenbleiben.“",
    mode: "kampf",
    present: ["greta", "kurt"],
    exits: [{ id: "basar", label: "Zurück zum Basar", toScene: "basar" }],
    locationFlags: [],
    catalogIds: GASSE_CATALOG,
    protocol: [],
    events: [
      {
        id: "wache",
        label: "Wache naht",
        hint: "Nach dem zweiten Kampftick.",
        fired: false,
      },
    ],
    combat: {
      round: 1,
      initiative: ["greta", "kurt"],
      distanceM: 4,
      engaged: false,
      watchEta: null,
    },
    countdownMs: 8 * 60 * 1000,
  };
}

export function createCampaign(): Campaign {
  return {
    id: "der-ballen",
    title: "Die Frist",
    subtitle: "Der Ballen",
    characters: {
      greta: greta(),
      otto: otto(),
      kurt: kurt(),
    },
    scenes: { basar: basar(), gasse: gasse() },
    currentSceneId: "basar",
    worldFlags: [],
    intentions: {},
    pending: null,
    fortune: null,
    phase: "collecting",
    countdownEndsAt: Date.now() + 15 * 60 * 1000,
    lastRoll: null,
    endedSummary: null,
  };
}
