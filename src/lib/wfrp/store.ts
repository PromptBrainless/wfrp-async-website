import { create } from "zustand";
import { CATALOG_BY_ID } from "./catalog";
import { formatSl } from "./dice";
import { formatMoney } from "./money";
import { applyCombatOutcome, applySocialOutcome, nowEntry, pushProtocol, rollOpposed, rollSimple } from "./resolve";
import { createCampaign } from "./seed";
import type { Campaign, Character, DifficultyId, Role } from "./types";

const PC_ID = "greta";

type Store = {
  campaign: Campaign;
  role: Role;
  viewId: string;
  selectedAction: string | null;
  note: string;
  difficulty: DifficultyId;
  setRole: (role: Role) => void;
  setView: (id: string) => void;
  selectAction: (id: string | null) => void;
  setNote: (note: string) => void;
  setDifficulty: (d: DifficultyId) => void;
  submit: () => void;
  slAuto: (kind: "success" | "fail") => void;
  slRoll: () => void;
  fortune: (mode: "skip" | "reroll" | "plus") => void;
  goScene: (id: string) => void;
  drawWeapon: () => void;
  spendResolve: () => void;
  fireEvent: (id: string) => void;
  forceCountdown: () => void;
  reset: () => void;
  addCharacter: (c: Character) => void;
};

function currentScene(c: Campaign) {
  return c.scenes[c.currentSceneId];
}

export const useTisch = create<Store>()((set, get) => ({
      campaign: createCampaign(),
      role: "tisch",
      viewId: PC_ID,
      selectedAction: null,
      note: "",
      difficulty: "durchschnittlich",
      setRole: (role) => set({ role }),
      setView: (id) => set({ viewId: id }),
      selectAction: (id) => set({ selectedAction: id }),
      setNote: (note) => set({ note }),
      setDifficulty: (d) => set({ difficulty: d }),
      submit: () => {
        const { campaign, selectedAction, note, viewId } = get();
        if (!selectedAction) return;
        const def = CATALOG_BY_ID[selectedAction];
        if (!def) return;
        const scene = currentScene(campaign);
        const actor = campaign.characters[viewId];
        if (!actor || actor.kind !== "pc") return;

        if (selectedAction === "gehen") {
          const exit = scene.exits.find((e) => e.toScene);
          if (!exit?.toScene) return;
          const nextScene = campaign.scenes[exit.toScene];
          set({
            campaign: {
              ...campaign,
              currentSceneId: exit.toScene,
              intentions: {},
              pending: null,
              fortune: null,
              phase: "collecting",
              countdownEndsAt: Date.now() + nextScene.countdownMs,
              scenes: {
                ...campaign.scenes,
                [scene.id]: pushProtocol(
                  scene,
                  nowEntry("world", "Ort verlassen", `Greta geht in die ${exit.label}.`),
                ),
              },
            },
            selectedAction: null,
          });
          return;
        }

        if (selectedAction === "warten") {
          set({
            campaign: {
              ...campaign,
              scenes: {
                ...campaign.scenes,
                [scene.id]: pushProtocol(scene, nowEntry("world", "Abwarten", "Greta bleibt stehen und lässt den Markt an sich vorbeiziehen.")),
              },
              intentions: {},
              phase: "collecting",
            },
            selectedAction: null,
          });
          return;
        }

        if (selectedAction === "waffe_ziehen") {
          get().drawWeapon();
          return;
        }

        if (selectedAction === "mut") {
          get().spendResolve();
          return;
        }

        const intention = {
          characterId: actor.id,
          actionId: selectedAction,
          note,
          submittedAt: Date.now(),
        };
        set({
          campaign: {
            ...campaign,
            intentions: { ...campaign.intentions, [actor.id]: intention },
            pending: { intention, difficulty: get().difficulty, editedNarrative: "" },
            phase: "ready",
          },
          selectedAction: null,
          note: "",
        });
      },
      slAuto: (kind) => {
        const { campaign } = get();
        const pending = campaign.pending;
        if (!pending) return;
        const scene = currentScene(campaign);
        const label = CATALOG_BY_ID[pending.intention.actionId]?.label ?? pending.intention.actionId;
        const body =
          kind === "success"
            ? "Ohne Wurf: der SL lässt es gelten."
            : "Ohne Wurf: der SL lässt es scheitern.";
        set({
          campaign: {
            ...campaign,
            pending: null,
            intentions: {},
            phase: "collecting",
            scenes: {
              ...campaign.scenes,
              [scene.id]: pushProtocol(scene, nowEntry("world", label, body)),
            },
          },
        });
      },
      slRoll: () => {
        const { campaign, difficulty } = get();
        const pending = campaign.pending;
        if (!pending) return;
        const actor = campaign.characters[pending.intention.characterId];
        const def = CATALOG_BY_ID[pending.intention.actionId];
        if (!actor || !def) return;
        const combat = currentScene(campaign).mode === "kampf";
        let roll;
        if (def.resolver === "opposed" && pending.intention.actionId !== "einschuechtern") {
          const other = campaign.characters.otto ?? campaign.characters.kurt;
          const otherSkill = pending.intention.actionId === "feilschen" || pending.intention.actionId === "kaufen" ? "feilschen" : "besonnenheit";
          roll = rollOpposed(actor, other, def.id, def.skill ?? "charme", otherSkill, difficulty, combat);
        } else if (def.resolver === "combat") {
          const other = campaign.characters.kurt;
          roll = rollOpposed(actor, other, def.id, def.skill ?? "nahkampf", "ausweichen", "herausfordernd", true);
        } else {
          roll = rollSimple(actor, def.id, difficulty, combat);
        }
        const applied =
          combat && def.resolver === "combat"
            ? applyCombatOutcome(campaign, roll)
            : applySocialOutcome(campaign, roll);
        const hasFortune = applied.characters[actor.id].fortune > 0;
        set({
          campaign: {
            ...applied,
            pending: null,
            intentions: {},
            lastRoll: roll,
            fortune: hasFortune
              ? { characterId: actor.id, actionId: def.id, roll, snapshot: formatSl(roll.sl) }
              : null,
            phase: hasFortune ? "fortune" : "collecting",
          },
        });
      },
      fortune: (mode) => {
        const { campaign } = get();
        const win = campaign.fortune;
        if (!win) return;
        const actor = campaign.characters[win.characterId];
        if (mode === "skip" || actor.fortune <= 0) {
          set({ campaign: { ...campaign, fortune: null, phase: "collecting" } });
          return;
        }
        const spent = {
          ...campaign,
          characters: {
            ...campaign.characters,
            [actor.id]: { ...actor, fortune: actor.fortune - 1 },
          },
        };
        if (mode === "plus") {
          const roll = { ...win.roll, sl: win.roll.sl + 1, success: win.roll.sl + 1 >= 0 || win.roll.success };
          const applied =
            currentScene(spent).mode === "kampf"
              ? applyCombatOutcome({ ...spent, scenes: { ...spent.scenes, [currentScene(spent).id]: { ...currentScene(spent), protocol: currentScene(spent).protocol.slice(0, -1) } } }, roll)
              : spent;
          set({ campaign: { ...applied, fortune: null, lastRoll: roll, phase: "collecting" } });
          return;
        }
        const def = CATALOG_BY_ID[win.actionId];
        const combat = currentScene(spent).mode === "kampf";
        const roll = def?.resolver === "combat" || def?.resolver === "opposed"
          ? rollOpposed(
              spent.characters[actor.id],
              spent.characters.kurt ?? spent.characters.otto,
              win.actionId,
              def.skill ?? "charme",
              def?.resolver === "combat" ? "ausweichen" : "feilschen",
              win.roll.difficulty,
              combat,
            )
          : rollSimple(spent.characters[actor.id], win.actionId, win.roll.difficulty, combat);
        const applied = combat && def?.resolver === "combat" ? applyCombatOutcome(spent, roll) : applySocialOutcome(spent, roll);
        set({ campaign: { ...applied, fortune: null, phase: "collecting" } });
      },
      goScene: (id) => {
        const { campaign } = get();
        const scene = campaign.scenes[id];
        if (!scene) return;
        set({
          campaign: {
            ...campaign,
            currentSceneId: id,
            intentions: {},
            pending: null,
            fortune: null,
            phase: "collecting",
            countdownEndsAt: Date.now() + scene.countdownMs,
          },
        });
      },
      drawWeapon: () => {
        const { campaign } = get();
        const greta = campaign.characters.greta;
        const scene = currentScene(campaign);
        set({
          campaign: {
            ...campaign,
            characters: {
              ...campaign.characters,
              greta: {
                ...greta,
                inventory: greta.inventory.map((i) =>
                  i.weapon ? { ...i, weapon: { ...i.weapon, drawn: true } } : i,
                ),
              },
            },
            scenes: {
              ...campaign.scenes,
              [scene.id]: pushProtocol(
                scene,
                nowEntry("world", "Waffe ziehen", "Greta hat den Dolch in der Hand. Otto tritt einen Schritt zurück."),
              ),
            },
          },
          selectedAction: null,
        });
      },
      spendResolve: () => {
        const { campaign } = get();
        const greta = campaign.characters.greta;
        if (greta.resolve <= 0 || greta.conditions.length === 0) return;
        const [first, ...rest] = greta.conditions;
        const scene = currentScene(campaign);
        set({
          campaign: {
            ...campaign,
            characters: {
              ...campaign.characters,
              greta: {
                ...greta,
                resolve: greta.resolve - 1,
                conditions: rest,
                wounds:
                  first.id === "niedergestreckt"
                    ? { ...greta.wounds, current: Math.min(greta.wounds.max, greta.wounds.current + 1) }
                    : greta.wounds,
              },
            },
            scenes: {
              ...campaign.scenes,
              [scene.id]: pushProtocol(scene, nowEntry("world", "Mut", `Greta stößt den Zustand ${first.id} ab.`)),
            },
          },
          selectedAction: null,
        });
      },
      fireEvent: (id) => {
        const { campaign } = get();
        const scene = currentScene(campaign);
        set({
          campaign: {
            ...campaign,
            scenes: {
              ...campaign.scenes,
              [scene.id]: {
                ...pushProtocol(scene, nowEntry("event", "SL-Ereignis", scene.events.find((e) => e.id === id)?.hint ?? id)),
                events: scene.events.map((e) => (e.id === id ? { ...e, fired: true } : e)),
              },
            },
          },
        });
      },
      forceCountdown: () => set((s) => ({ campaign: { ...s.campaign, countdownEndsAt: Date.now() } })),
      reset: () =>
        set({
          campaign: createCampaign(),
          selectedAction: null,
          note: "",
          difficulty: "durchschnittlich",
        }),
      addCharacter: (c) =>
        set((s) => ({
          campaign: {
            ...s.campaign,
            characters: { ...s.campaign.characters, [c.id]: c },
          },
          viewId: c.id,
        })),
}));

export function moneyLabel(c: Campaign) {
  return formatMoney(c.characters.greta.money);
}

