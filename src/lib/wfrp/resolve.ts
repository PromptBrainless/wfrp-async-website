import { CATALOG_BY_ID, skillLabel } from "./catalog";
import {
  capAdvantage,
  conditionPenalty,
  egBand,
  effectiveTarget,
  formatDiceNumbers,
  hitLocation,
  isDoubles,
  isSuccess,
  rollD100,
  skillValue,
  successLevels,
} from "./dice";
import { PRIVATE_ACTIONS } from "./eyes";
import { ICON_FROM_KIND } from "./icons";
import { pickLook } from "./looks";
import { applyTalentToRoll, bargainExtra } from "./talents";
import { DIFFICULTY_MOD } from "./types";
import type {
  Campaign,
  Character,
  DicePlate,
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
  extra?: Partial<
    Pick<ProtocolEntry, "secret" | "image" | "portrait" | "placeId" | "speaker" | "icon" | "dice" | "privateTo">
  >,
): ProtocolEntry {
  return {
    id: crypto.randomUUID(),
    at: Date.now(),
    kind,
    title,
    body,
    numbers,
    icon: extra?.icon ?? ICON_FROM_KIND[kind],
    ...extra,
  };
}

export function pushProtocol(scene: Scene, entry: ProtocolEntry): Scene {
  return { ...scene, protocol: [...scene.protocol, entry] };
}

function plateFrom(r: RollResult, actorName: string): DicePlate {
  return {
    actorName,
    skillLabel: r.skillLabel,
    skillValue: r.skillValue,
    difficulty: r.difficulty,
    difficultyMod: r.modifier,
    conditionMod: r.conditionMod,
    advantageMod: r.advantageMod,
    target: r.target,
    roll: r.roll,
    sl: r.sl,
    band: r.band,
    success: r.success,
    doubles: r.doubles,
    critical: r.critical,
    fumble: r.fumble,
    location: r.location,
    opposed: r.opposed
      ? {
          name: r.opposed.name,
          skillLabel: r.opposed.skillLabel,
          target: r.opposed.target,
          roll: r.opposed.roll,
          sl: r.opposed.sl,
          band: r.opposed.band,
        }
      : undefined,
    proxy: r.proxy,
  };
}

export function rollSimple(
  character: Character,
  actionId: string,
  difficulty: DifficultyId,
  combat = false,
  proxy = false,
): RollResult {
  const def = CATALOG_BY_ID[actionId];
  const skillId = def?.skill ?? "wahrnehmung";
  const skillVal = skillValue(character, skillId);
  const cond = conditionPenalty(character);
  const adv = combat ? capAdvantage(character) * 10 : 0;
  const diff = DIFFICULTY_MOD[difficulty];
  const target = effectiveTarget(character, skillId, difficulty, { combat });
  const raw = rollD100();
  const applied = applyTalentToRoll(character, skillId, target, raw);
  const roll = applied.roll;
  const sl = successLevels(target, roll);
  const success = isSuccess(target, roll);
  const doubles = isDoubles(roll);
  const extra = bargainExtra(character, actionId, success);
  return {
    id: crypto.randomUUID(),
    characterId: character.id,
    actionId,
    skillId,
    skillLabel: skillLabel(skillId),
    skillValue: skillVal,
    target,
    roll,
    sl,
    success,
    difficulty,
    modifier: diff,
    conditionMod: cond,
    advantageMod: adv,
    doubles,
    band: extra ? `${egBand(sl, success)} · Verhandlungsgenie ±${extra} %` : egBand(sl, success),
    critical: combat && doubles && success,
    fumble: combat && doubles && !success,
    location: combat ? hitLocation(roll) : undefined,
    proxy,
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
  proxy = false,
): RollResult {
  const aTarget = effectiveTarget(actor, actorSkill, difficulty, { combat });
  const bTarget = effectiveTarget(other, otherSkill, "herausfordernd", { combat });
  const aApplied = applyTalentToRoll(actor, actorSkill, aTarget, rollD100());
  const bApplied = applyTalentToRoll(other, otherSkill, bTarget, rollD100());
  const aRoll = aApplied.roll;
  const bRoll = bApplied.roll;
  const aSl = successLevels(aTarget, aRoll);
  const bSl = successLevels(bTarget, bRoll);
  const success = isSuccess(aTarget, aRoll);
  const actorWins = aSl > bSl || (aSl === bSl && aRoll < bRoll);
  const doubles = isDoubles(aRoll);
  return {
    id: crypto.randomUUID(),
    characterId: actor.id,
    actionId,
    skillId: actorSkill,
    skillLabel: skillLabel(actorSkill),
    skillValue: skillValue(actor, actorSkill),
    target: aTarget,
    roll: aRoll,
    sl: aSl,
    opposed: {
      name: other.name,
      skillId: otherSkill,
      skillLabel: skillLabel(otherSkill),
      target: bTarget,
      roll: bRoll,
      sl: bSl,
      band: egBand(bSl, isSuccess(bTarget, bRoll)),
    },
    success: actorWins,
    winnerId: actorWins ? actor.id : other.id,
    difficulty,
    modifier: DIFFICULTY_MOD[difficulty],
    conditionMod: conditionPenalty(actor),
    advantageMod: combat ? capAdvantage(actor) * 10 : 0,
    doubles,
    band: egBand(aSl, success),
    critical: combat && doubles && success,
    fumble: combat && doubles && !success,
    location: combat ? hitLocation(aRoll) : undefined,
    proxy,
  };
}

export function formatRollLine(r: RollResult): string {
  return formatDiceNumbers({ ...r, difficultyMod: r.modifier });
}

export function applySocialOutcome(campaign: Campaign, roll: RollResult): Campaign {
  const scene = campaign.scenes[campaign.currentSceneId];
  const actor = campaign.characters[roll.characterId];
  const plate = plateFrom(roll, actor?.name ?? "Wurf");
  const privateTo = PRIVATE_ACTIONS.has(roll.actionId) ? actor?.id : undefined;
  let scn = pushProtocol(
    scene,
    nowEntry("rules", CATALOG_BY_ID[roll.actionId]?.label ?? roll.actionId, `${actor?.name ?? "Jemand"} wirft.`, formatRollLine(roll), {
      portrait: actor?.portrait,
      speaker: actor?.id,
      icon: "wurf",
      dice: plate,
      privateTo,
    }),
  );
  if ((roll.actionId === "umschauen" || roll.actionId === "intuition") && scene.look && actor) {
    scn = pushProtocol(
      scn,
      nowEntry("world", `Was ${actor.name} sieht`, pickLook(scene.look, roll), undefined, {
        icon: "ort",
        privateTo: actor.id,
        speaker: actor.id,
        portrait: actor.portrait,
      }),
    );
  }
  const next: Campaign = {
    ...campaign,
    scenes: { ...campaign.scenes, [scn.id]: scn },
    lastRoll: roll,
  };
  return next;
}

export function applyCombatOutcome(campaign: Campaign, roll: RollResult): Campaign {
  const scene = campaign.scenes[campaign.currentSceneId];
  const actor = campaign.characters[roll.characterId];
  const plate = plateFrom(roll, actor?.name ?? "Wurf");
  const diceBeat = nowEntry("rules", CATALOG_BY_ID[roll.actionId]?.label ?? "Wurf", `${actor?.name ?? "Jemand"} wirft.`, formatRollLine(roll), {
    portrait: actor?.portrait,
    speaker: actor?.id,
    icon: "wurf",
    dice: plate,
  });
  const next: Campaign = { ...campaign, characters: { ...campaign.characters }, scenes: { ...campaign.scenes } };
  let scn = pushProtocol(scene, diceBeat);

  if ((roll.actionId === "sturmangriff" || roll.actionId === "angreifen") && roll.success) {
    if (actor) next.characters[actor.id] = { ...next.characters[actor.id], engaged: true };
    scn = {
      ...scn,
      combat: scn.combat ? { ...scn.combat, engaged: true, distanceM: 0 } : scn.combat,
    };
  }

  next.scenes[scn.id] = scn;
  next.lastRoll = roll;
  return next;
}

export { nowEntry, plateFrom };
