import { AUSBAU_IDS, CATALOG, skillRoot } from "./config";
import { canCharge, tokenPlace, runM } from "./movement";
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

export function hasCondition(c: Character, id: string): boolean {
  return c.conditions.some((x) => x.id === id && x.stacks > 0);
}

const TALK_IDS = new Set(["reden", "bestechen", "einschuechtern", "intuition"]);
const TRADE_IDS = new Set(["feilschen", "kaufen"]);

function hasFace(scene: Scene): boolean {
  if (scene.board.pins.some((p) => p.kind === "nsc" && p.revealed)) return true;
  return scene.present.some((id) => !id.startsWith("platz-") && id !== "welt");
}

function canTrade(scene: Scene): boolean {
  return scene.locationFlags.includes("handel") || hasFace(scene);
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
  const here = tokenPlace(scene.board, character.id);
  const hasPlace =
    scene.board.pins.some((p) => (p.revealed || p.id === here) && p.id !== here) || scene.exits.some((e) => e.toScene);
  const dist = scene.combat?.distanceM ?? 0;
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
      } else if (
        def.skill &&
        AUSBAU_IDS.has(skillRoot(def.skill)) &&
        character.skills[def.skill] == null &&
        character.skills[skillRoot(def.skill)] == null
      ) {
        reason = "Nicht ausgebildet.";
      } else if (def.id === "aufstehen" && !prone) {
        reason = "Stehst.";
      } else if (def.id === "kriechen" && !prone) {
        reason = "Stehst.";
      } else if (def.id === "gehen" && !hasPlace) {
        reason = "Kein Ort.";
      } else if (TRADE_IDS.has(def.id) && !canTrade(scene)) {
        reason = "Kein Stand, kein Preis.";
      } else if (TALK_IDS.has(def.id) && !hasFace(scene)) {
        reason = "Niemand wartet auf ein Wort.";
      } else if (def.id === "klatsch" && scene.locationFlags.includes("leer")) {
        reason = "Hier ist niemand, der redet.";
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
      } else if (combat && !engaged && def.id === "loesen") {
        reason = "Nicht gebunden.";
      } else if (combat && !engaged && def.id === "angreifen" && dist > 0) {
        reason = "Zu weit. Gehen oder Sturmangriff.";
      } else if (combat && engaged && ["gehen", "sturmangriff", "schleichen", "sprinten"].includes(def.id)) {
        reason = "Gebunden.";
      } else if (def.id === "sturmangriff" && combat && !canCharge(character.movement, dist)) {
        reason =
          dist < character.movement
            ? "Zu nah für Sturmangriff."
            : `Zu weit (Rennen ${runM(character.movement)} m).`;
      }

      return { def, available: !reason, reason };
    },
  );
}