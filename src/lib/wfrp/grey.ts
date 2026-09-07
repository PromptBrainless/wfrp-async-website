import { CATALOG } from "./catalog";
import type { ActionView, Character, Scene } from "./types";

const COMBAT_IDS = new Set([
  "angreifen",
  "sturmangriff",
  "loesen",
  "fliehen",
  "sprinten",
  "volle_abwehr",
  "ausweichen",
]);

const AUSBAU = new Set(["heilen", "fernkampf", "fingerfertigkeit", "schaetzen"]);

export function hasCondition(c: Character, id: string): boolean {
  return c.conditions.some((x) => x.id === id && x.stacks > 0);
}

export function filterCatalog(
  character: Character,
  scene: Scene,
  opts: { fortuneOpen: boolean; ownRollOpen: boolean },
): ActionView[] {
  const drawn = character.inventory.some((i) => i.weapon?.drawn);
  const dying = character.wounds.current <= 0 || hasCondition(character, "bewusstlos");
  const prone = hasCondition(character, "niedergestreckt");
  const stunned = hasCondition(character, "betaubt");
  const unconscious = hasCondition(character, "bewusstlos");
  const combat = scene.mode === "kampf";
  const engaged = character.engaged || scene.combat?.engaged === true;
  const hasExit = scene.exits.length > 0;
  const allowed = new Set(scene.catalogIds);

  return CATALOG.filter((def) => allowed.has(def.id) || def.tab === "ressourcen" || def.id === "freitext").map(
    (def) => {
      let reason: string | undefined;

      if (unconscious) {
        reason = "Bewusstlos.";
      } else if (prone && def.id !== "aufstehen" && def.id !== "kriechen" && def.id !== "mut") {
        reason = "Nur Aufstehen oder kriechen.";
      } else if (stunned && (def.cost === "H" || def.cost === "BH") && def.id !== "mut") {
        reason = "Betäubt — keine Handlung.";
      } else if (AUSBAU.has(def.id) && character.skills[def.id] == null) {
        reason = "Nicht ausgebildet.";
      } else if (def.id === "aufstehen" && !prone) {
        reason = "Stehst.";
      } else if (def.id === "kriechen" && !prone) {
        reason = "Stehst.";
      } else if (def.id === "gehen" && !hasExit) {
        reason = "Kein Ausgang.";
      } else if (def.id === "waffe_ziehen" && drawn) {
        reason = "Schon in der Hand.";
      } else if (def.id === "glueck" && !opts.fortuneOpen) {
        reason = "Kein eigener Wurf offen.";
      } else if (def.id === "mut" && character.conditions.length === 0) {
        reason = "Kein Zustand, keine Psychologie.";
      } else if (def.id === "schicksal" && !dying) {
        reason = "Nicht nötig.";
      } else if (def.id === "zaehigkeit" && !opts.ownRollOpen) {
        reason = "Kein Wurf zum Ersetzen.";
      } else if (!combat && COMBAT_IDS.has(def.id)) {
        reason = "Kein Kampf.";
      } else if (combat && !engaged && (def.id === "loesen" || def.id === "angreifen")) {
        reason = "Nicht gebunden. Angreifen erst nach Annähern oder Sturmangriff.";
      } else if (combat && engaged && ["gehen", "sturmangriff", "schleichen", "sprinten"].includes(def.id)) {
        reason = "Gebunden.";
      }

      return { def, available: !reason, reason };
    },
  );
}
