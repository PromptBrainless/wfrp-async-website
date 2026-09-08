import { ATTRS, type Campaign, type Character, type Scene } from "./types";
import { buildDrosselauScenes, DROSSELAU_SCENE_COUNT } from "./drosselau";

function emptySeat(n: number): Character {
  const attrs = Object.fromEntries(ATTRS.map((a) => [a, 0])) as Character["attributes"];
  return {
    id: `platz-${n}`,
    name: `Platz ${n}`,
    species: "",
    className: "",
    career: "",
    careerLevel: 0,
    status: { tier: "messing", rank: 0 },
    motivation: "",
    attributes: attrs,
    skills: {},
    talents: [],
    wounds: { current: 0, max: 0 },
    movement: 0,
    fate: 0,
    fortune: 0,
    resilience: 0,
    resolve: 0,
    advantage: 0,
    conditions: [],
    money: { crowns: 0, shillings: 0, pennies: 0 },
    inventory: [],
    engaged: false,
    flags: [],
    kind: "pc",
  };
}

function lobby(): Scene {
  return {
    id: "lobby",
    title: "Vor der ersten Szene",
    locationName: "Drosselau",
    slText: `Kampagne 1 spielt nur in Drosselau. ${DROSSELAU_SCENE_COUNT} Szenen liegen bereit, alle zu. Der SL öffnet eine Gasse.`,
    trigger: "",
    teaser: "Eingesperrt in der Stadt. Kein Weg nach Altdorf. Noch keine offene Szene.",
    difficultyHint: "ruhig",
    prerequisites: [],
    maxPlayers: 5,
    opened: false,
    mode: "sozial",
    present: [],
    exits: [],
    locationFlags: ["drosselau", "stadt-kaefig"],
    catalogIds: [],
    protocol: [],
    events: [],
    combat: null,
    countdownMs: 24 * 60 * 60 * 1000,
    board: { image: "", widthM: 20, tokens: [], pins: [], distances: {}, fog: [] },
    journal: [],
  };
}

export function createCampaign(): Campaign {
  return {
    id: "kampagne-1",
    title: "Kampagne 1",
    subtitle: "Fünf Spieler · Drosselau",
    characters: {
      "platz-1": emptySeat(1),
      "platz-2": emptySeat(2),
      "platz-3": emptySeat(3),
      "platz-4": emptySeat(4),
      "platz-5": emptySeat(5),
    },
    scenes: { lobby: lobby(), ...buildDrosselauScenes() },
    currentSceneId: "lobby",
    worldFlags: ["kampagne-1", "spieler-5", "drosselau", "stadt-kaefig"],
    intentions: {},
    pending: null,
    pendingPlayerRoll: null,
    fortune: null,
    phase: "collecting",
    countdownEndsAt: Date.now() + 24 * 60 * 60 * 1000,
    lastRoll: null,
    endedSummary: null,
    slLog: [],
    journalNotes: [],
    tableMarks: {},
  };
}
