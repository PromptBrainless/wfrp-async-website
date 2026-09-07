import { CATALOG_BY_ID, SKILL_LABEL } from "./catalog";
import {
  effectiveTarget,
  formatSl,
  hitLocation,
  isSuccess,
  rollD100,
  skillValue,
  successLevels,
} from "./dice";
import { addPennies, formatMoney } from "./money";
import type {
  Campaign,
  Character,
  DifficultyId,
  ProtocolEntry,
  RollResult,
  Scene,
} from "./types";

function nowEntry(
  kind: ProtocolEntry["kind"],
  title: string,
  body: string,
  numbers?: string,
): ProtocolEntry {
  return { id: crypto.randomUUID(), at: Date.now(), kind, title, body, numbers };
}

export function pushProtocol(scene: Scene, entry: ProtocolEntry): Scene {
  return { ...scene, protocol: [...scene.protocol, entry] };
}

export function rollSimple(
  character: Character,
  actionId: string,
  difficulty: DifficultyId,
  combat = false,
): RollResult {
  const def = CATALOG_BY_ID[actionId];
  const skillId = def?.skill ?? "wahrnehmung";
  const target = effectiveTarget(character, skillId, difficulty, { combat });
  const roll = rollD100();
  const sl = successLevels(target, roll);
  return {
    id: crypto.randomUUID(),
    characterId: character.id,
    actionId,
    skillId,
    skillLabel: SKILL_LABEL[skillId] ?? skillId,
    target,
    roll,
    sl,
    success: isSuccess(target, roll),
    difficulty,
    modifier: 0,
  };
}

export function rollOpposed(
  actor: Character,
  other: Character,
  actionId: string,
  actorSkill: string,
  otherSkill: string,
  difficulty: DifficultyId,
  combat = false,
): RollResult {
  const aTarget = effectiveTarget(actor, actorSkill, difficulty, { combat });
  const bTarget = effectiveTarget(other, otherSkill, "herausfordernd", { combat });
  const aRoll = rollD100();
  const bRoll = rollD100();
  const aSl = successLevels(aTarget, aRoll);
  const bSl = successLevels(bTarget, bRoll);
  const actorWins = aSl > bSl || (aSl === bSl && aRoll < bRoll);
  return {
    id: crypto.randomUUID(),
    characterId: actor.id,
    actionId,
    skillId: actorSkill,
    skillLabel: SKILL_LABEL[actorSkill] ?? actorSkill,
    target: aTarget,
    roll: aRoll,
    sl: aSl,
    opposed: {
      name: other.name,
      skillId: otherSkill,
      target: bTarget,
      roll: bRoll,
      sl: bSl,
    },
    success: actorWins,
    winnerId: actorWins ? actor.id : other.id,
    difficulty,
    modifier: 0,
  };
}

export function formatRollLine(r: RollResult): string {
  const base = `${r.skillLabel} ${r.target} · Wurf ${r.roll} · ${formatSl(r.sl)}`;
  if (!r.opposed) return base;
  return `${base}  vs  ${r.opposed.name} ${r.opposed.target} · ${r.opposed.roll} · ${formatSl(r.opposed.sl)}`;
}

export function applySocialOutcome(campaign: Campaign, roll: RollResult): Campaign {
  const scene = campaign.scenes[campaign.currentSceneId];
  const greta = campaign.characters.greta;
  let next = { ...campaign, characters: { ...campaign.characters }, scenes: { ...campaign.scenes } };
  const SOCIAL_FAIL = new Set(["reden", "feilschen", "bestechen", "einschuechtern", "klatsch", "kaufen"]);

  let body: string;
  if (roll.actionId === "umschauen") {
    body = roll.success
      ? "Greta sieht den Preis in Ottos Gesicht: er will sechs, würde bei vier noch nicken. Die Wache gähnt, hört nicht hin."
      : "Die Menge schiebt, Dampf und Stimmen. Mehr als Ottos erhobenen Daumen bekommt Greta nicht mit.";
  } else if (roll.actionId === "feilschen" || roll.actionId === "kaufen") {
    if (roll.success) {
      next.characters.greta = {
        ...greta,
        money: addPennies(greta.money, -4 * 12),
        flags: [...greta.flags, "ballen_gekauft"],
        inventory: [...greta.inventory, { id: "ballen", name: "Wollballen" }],
      };
      body = `Otto knurrt, lässt aber mit sich reden. Vier Schillinge. Greta hat noch ${formatMoney(next.characters.greta.money)}.`;
    } else {
      body = "Otto schüttelt den Kopf. „Sechs, oder du kannst weitergehen.“";
    }
  } else if (roll.actionId === "reden") {
    body = roll.success
      ? "Otto lacht kurz. Die Schultern sinken. Er ist zu haben, wenn der Preis stimmt."
      : "Otto faltet die Arme. „Waren sind Waren. Gefühle verkaufe ich nicht.“";
  } else {
    body = roll.success
      ? "Die Menge weicht einen halben Schritt. Otto spürt, dass hier jemand nicht nur guckt."
      : "Niemand rückt. Otto bleibt hinter den Ballen.";
  }

  let scn = pushProtocol(scene, nowEntry("world", CATALOG_BY_ID[roll.actionId]?.label ?? roll.actionId, body, formatRollLine(roll)));

  if (!roll.success && SOCIAL_FAIL.has(roll.actionId)) {
    const evt = scn.events.find((e) => e.id === "taschendieb");
    if (evt && !evt.fired) {
      const diebTarget = 45;
      const gretaTarget = skillValue(greta, "wahrnehmung");
      const dRoll = rollD100();
      const gRoll = rollD100();
      const dSl = successLevels(diebTarget, dRoll);
      const gSl = successLevels(gretaTarget, gRoll);
      const stolen = dSl > gSl;
      scn = {
        ...scn,
        events: scn.events.map((e) => (e.id === "taschendieb" ? { ...e, fired: true } : e)),
      };
      if (stolen) {
        const g = next.characters.greta;
        next.characters.greta = {
          ...g,
          money: addPennies(g.money, -4),
          flags: [...g.flags, "bestohlen"],
        };
        scn = pushProtocol(
          scn,
          nowEntry(
            "event",
            "Eine Hand in der Menge",
            "Etwas zupft an Gretas Beutel. Als sie greift, sind vier Groschen weg.",
            `Taschendieb Fingerfertigkeit ${diebTarget} · ${dRoll} ${formatSl(dSl)} vs Wahrnehmung ${gretaTarget} · ${gRoll} ${formatSl(gSl)}`,
          ),
        );
      } else {
        scn = pushProtocol(
          scn,
          nowEntry(
            "event",
            "Eine Hand in der Menge",
            "Greta spürt den Ruck am Beutel und dreht sich. Der Junge ist schon in der Menge.",
            `Taschendieb ${dRoll} ${formatSl(dSl)} vs Wahrnehmung ${gRoll} ${formatSl(gSl)}`,
          ),
        );
      }
    }
  }

  next.scenes[scn.id] = scn;
  next.lastRoll = roll;
  return next;
}

export function applyCombatOutcome(campaign: Campaign, roll: RollResult): Campaign {
  const scene = campaign.scenes[campaign.currentSceneId];
  const greta = campaign.characters.greta;
  const kurt = campaign.characters.kurt;
  let next = { ...campaign, characters: { ...campaign.characters }, scenes: { ...campaign.scenes } };
  const loc = hitLocation(roll.roll);

  if (roll.actionId === "sturmangriff" || roll.actionId === "angreifen") {
    const engaged = true;
    next.characters.greta = { ...greta, engaged, advantage: roll.actionId === "sturmangriff" ? greta.advantage + 1 : greta.advantage };
    next.characters.kurt = { ...kurt, engaged };
    const scn: Scene = {
      ...scene,
      combat: scene.combat ? { ...scene.combat, engaged, distanceM: 0 } : scene.combat,
    };
    if (roll.success) {
      const dmg = Math.max(1, 3 + (roll.sl > 0 ? 0 : 0));
      const k = next.characters.kurt;
      const wounds = Math.max(0, k.wounds.current - dmg);
      next.characters.kurt = { ...k, wounds: { ...k.wounds, current: wounds }, advantage: 0 };
      next.scenes[scn.id] = pushProtocol(
        scn,
        nowEntry(
          "world",
          "Schlag",
          `Greta trifft (${loc}). Kurt taumelt, ${dmg} LP.`,
          formatRollLine(roll),
        ),
      );
    } else {
      next.characters.greta = { ...next.characters.greta, advantage: 0 };
      next.scenes[scn.id] = pushProtocol(
        scn,
        nowEntry("world", "Schlag", `Kurt pariert. Nichts sitzt (${loc}).`, formatRollLine(roll)),
      );
    }
  } else if (roll.actionId === "fliehen") {
    next.scenes[scene.id] = pushProtocol(
      scene,
      nowEntry("world", "Fliehen", "Greta reißt sich los und stolpert zurück zum Basar.", formatRollLine(roll)),
    );
    next.currentSceneId = "basar";
    next.characters.greta = { ...greta, engaged: false };
  } else {
    next.scenes[scene.id] = pushProtocol(
      scene,
      nowEntry("world", CATALOG_BY_ID[roll.actionId]?.label ?? "Handlung", roll.success ? "Es gelingt." : "Es misslingt.", formatRollLine(roll)),
    );
  }
  next.lastRoll = roll;
  return next;
}

export { nowEntry };
