import { type Campaign, type Character, type Scene } from "./types";
import { buildDrosselauScenes, DROSSELAU_SCENE_COUNT, streetSceneId } from "./drosselau";
import { makeParty } from "./party";
import { SEAT_IDS } from "./seats";
import { playFirstHour } from "./session";

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
  const party = makeParty();
  const characters = Object.fromEntries(SEAT_IDS.map((id, i) => [id, party[i] as Character]));
  const scenes: Record<string, Scene> = { lobby: lobby(), ...buildDrosselauScenes() };
  const first = streetSceneId("torstrasse");
  const gasse = scenes[first]!;
  scenes[first] = {
    ...gasse,
    opened: true,
    present: [...SEAT_IDS],
    board: {
      ...gasse.board,
      tokens: SEAT_IDS.map((id) => ({ id, placeId: "hier" })),
    },
    protocol: [
      {
        id: "start-tor",
        at: Date.now(),
        kind: "world",
        title: "Torstraße",
        body: gasse.slText,
        icon: "ort",
      },
    ],
  };
  const base: Campaign = {
    id: "kampagne-1",
    title: "Kampagne 1",
    subtitle: "Fünf Spieler · Drosselau",
    characters,
    scenes,
    currentSceneId: first,
    worldFlags: ["kampagne-1", "spieler-5", "drosselau", "stadt-kaefig", "tor-offen"],
    intentions: {},
    pending: null,
    pendingPlayerRoll: null,
    fortune: null,
    phase: "collecting",
    countdownEndsAt: Date.now() + 24 * 60 * 60 * 1000,
    lastRoll: null,
    endedSummary: null,
    slLog: [
      {
        id: "start-open",
        at: Date.now(),
        kind: "open-scene",
        title: gasse.title,
        body: `${gasse.locationName} liegt offen.`,
      },
    ],
    journalNotes: [],
    tableMarks: {},
  };
  return playFirstHour(base);
}
