import { addBeat } from "./journal";
import { egBand, effectiveTarget, formatSl, isDoubles, isSuccess, skillValue, successLevels } from "./dice";
import { DIFFICULTY_MOD, ATTRS, type Campaign, type Character, type DicePlate, type ProtocolEntry } from "./types";
import { SKILL_LABEL } from "./config";
import { pickLook } from "./looks";
import { STREET_LOOKS } from "./looks-drosselau";

const ARNE_ID = "nsc-arne-helm";

function emptyAttrs(n: number): Character["attributes"] {
  return Object.fromEntries(ATTRS.map((a) => [a, n])) as Character["attributes"];
}

function arneHelm(): Character {
  return {
    id: ARNE_ID,
    name: "Arne Helm",
    species: "mensch",
    className: "Bürger",
    career: "Wachmann · Torwache",
    careerLevel: 2,
    status: { tier: "silber", rank: 1 },
    motivation: "Das Tor hält. Die Liste stimmt.",
    attributes: { ...emptyAttrs(32), KG: 41, ST: 38, WI: 44, I: 36, WK: 39, CH: 28 },
    skills: { wahrnehmung: 46, einschuechtern: 41, nahkampf: 46, intuition: 36 },
    talents: ["Gedrillt", "Robustheit"],
    wounds: { current: 14, max: 14 },
    movement: 4,
    fate: 0,
    fortune: 0,
    resilience: 2,
    resolve: 2,
    advantage: 0,
    conditions: [],
    money: { crowns: 0, shillings: 8, pennies: 4 },
    inventory: [
      { id: "h1", name: "Handwaffe", weapon: { skill: "nahkampf", damage: 0, drawn: false } },
      { id: "h2", name: "Uniform" },
    ],
    engaged: false,
    flags: ["drosselau", "stadtwache"],
    kind: "npc",
    details: { age: 38, herkunft: "Torstraße 8", gott: "Sigmar" },
  };
}

function at(base: number, min: number) {
  return base + min * 60_000;
}

function plate(actor: Character, skill: string, difficulty: DicePlate["difficulty"], roll: number): DicePlate {
  const skillVal = skillValue(actor, skill);
  const target = effectiveTarget(actor, skill, difficulty);
  const sl = successLevels(target, roll);
  const success = isSuccess(target, roll);
  return {
    actorName: actor.name,
    skillLabel: SKILL_LABEL[skill] ?? skill,
    skillValue: skillVal,
    difficulty,
    difficultyMod: DIFFICULTY_MOD[difficulty],
    conditionMod: 0,
    advantageMod: 0,
    target,
    roll,
    sl,
    band: egBand(sl, success),
    success,
    doubles: isDoubles(roll),
  };
}

function beat(partial: Omit<ProtocolEntry, "at"> & { at: number }): ProtocolEntry {
  return partial;
}

/** Erste Stunde. SL zieht Arne Helm. Tick schaut. Die Frage bleibt offen. */
export function playFirstHour(campaign: Campaign): Campaign {
  const sceneId = campaign.currentSceneId;
  const scene = campaign.scenes[sceneId];
  if (!scene) return campaign;
  const tick = campaign.characters["platz-1"];
  if (!tick) return campaign;
  const arne = arneHelm();
  const t0 = Date.now();
  const look = plate(tick, "wahrnehmung", "durchschnittlich", 42);

  let next: Campaign = {
    ...campaign,
    characters: { ...campaign.characters, [ARNE_ID]: arne },
    scenes: {
      ...campaign.scenes,
      [sceneId]: {
        ...scene,
        difficultyHint: "angespannt",
        present: [...scene.present, ARNE_ID],
        board: {
          ...scene.board,
          tokens: [...scene.board.tokens, { id: ARNE_ID, placeId: "arne" }],
          pins: [
            ...scene.board.pins,
            { id: "arne", x: 46, y: 58, label: "Arne Helm", kind: "nsc", revealed: true },
          ],
        },
        events: scene.events.map((e) => (e.id.endsWith("zoll-mutation") ? { ...e, fired: true } : e)),
      },
    },
    worldFlags: [...campaign.worldFlags, "arne-am-tor"],
    slLog: [
      ...campaign.slLog,
      { id: "fire-zoll", at: at(t0, 2), kind: "table", title: "Torwache prüft", body: "SL zieht Arne Helm. Kein Automat." },
      { id: "ask-look", at: at(t0, 4), kind: "ask-roll", title: "Tick · Umschauen", body: "Spieler würfelt." },
    ],
  };

  const beats: ProtocolEntry[] = [
    beat({
      id: "h1-arne",
      at: at(t0, 2),
      kind: "event",
      title: "Torwache prüft",
      body: "Aus dem Zollhaus tritt ein Mann in der wollenen Jacke der Stadt. Helm unter dem Arm. Der Riemen der Handwaffe ist zu. Arne Helm, Torstraße 8. Er stellt sich nicht vor.",
      icon: "ereignis",
      speaker: ARNE_ID,
    }),
    beat({
      id: "h1-worte",
      at: at(t0, 3),
      kind: "world",
      title: "Arne Helm",
      body: "„Namen. Woher. Waffen offen, oder ich zähl sie selbst. Der Zwerg bleibt im Licht.“",
      icon: "person",
      speaker: ARNE_ID,
    }),
    beat({
      id: "h1-absicht",
      at: at(t0, 4),
      kind: "intent",
      title: "Tick",
      body: "Tick will sich umschauen, bevor er den Mund aufmacht.",
      icon: "intention",
      speaker: "platz-1",
    }),
    beat({
      id: "h1-wurf",
      at: at(t0, 5),
      kind: "rules",
      title: "Umschauen",
      body: `${look.skillLabel} ${look.skillValue}. Durchschnittlich. Ziel ${look.target}. Wurf ${look.roll}. ${formatSl(look.sl)} · ${look.band}.`,
      icon: "wurf",
      speaker: "platz-1",
      dice: look,
      privateTo: "platz-1",
    }),
    beat({
      id: "h1-sieht",
      at: at(t0, 6),
      kind: "world",
      title: "Was Tick sieht",
      body: pickLook(STREET_LOOKS.torstrasse, look),
      icon: "ort",
      privateTo: "platz-1",
    }),
    beat({
      id: "h1-frage",
      at: at(t0, 7),
      kind: "world",
      title: "Arne Helm",
      body: "„Fünf auf einmal. Der Halbling zählt extra. Ein Name. Dann der nächste.“ Er wartet. Die Frist läuft.",
      icon: "person",
      speaker: ARNE_ID,
    }),
  ];

  for (const e of beats) next = addBeat(next, sceneId, e);
  const scn = next.scenes[sceneId];
  if (scn) {
    next = {
      ...next,
      scenes: {
        ...next.scenes,
        [sceneId]: {
          ...scn,
          ask: { speaker: "Arne Helm", text: "Namen. Woher. Waffen offen." },
        },
      },
    };
  }
  return next;
}
