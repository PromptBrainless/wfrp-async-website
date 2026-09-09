import { create } from "zustand";
import { CATALOG_BY_ID, SKILL_LABEL } from "./catalog";
import { effectiveTarget, formatSl } from "./dice";
import { ENCOUNTER_TABLES, LOOT_TABLES, rollWeighted } from "./library";
import { formatMoney } from "./money";
import { canWalkTo, distanceBetween, foeId, pinById, tokenPlace } from "./movement";
import { addBeat } from "./journal";
import { applyCombatOutcome, applySocialOutcome, nowEntry, pushProtocol, rollSimple } from "./resolve";
import { PRIVATE_ACTIONS } from "./eyes";
import { createCampaign } from "./seed";
import { activePc, claimSeat, filledPcs, isSeatEmpty, SEAT_IDS } from "./seats";
import type {
  Campaign,
  Character,
  DeskView,
  DifficultyId,
  ProtocolEntry,
  Role,
  SlLogEntry,
  SlLogKind,
  WorkPane,
} from "./types";

const PC_ID = "platz-1";

type Store = {
  campaign: Campaign;
  role: Role;
  viewId: string;
  selectedAction: string | null;
  note: string;
  difficulty: DifficultyId;
  desk: DeskView;
  pane: WorkPane;
  lastDraw: { title: string; body: string; eventId?: string } | null;
  setRole: (role: Role) => void;
  setView: (id: string) => void;
  selectAction: (id: string | null) => void;
  send: (id: string) => void;
  speak: () => void;
  setNote: (note: string) => void;
  setDifficulty: (d: DifficultyId) => void;
  setDesk: (desk: DeskView) => void;
  setPane: (pane: WorkPane) => void;
  submit: () => void;
  slAuto: (kind: "success" | "fail") => void;
  slAskRoll: (who?: string) => void;
  slRoll: () => void;
  playerRoll: () => void;
  fortune: (mode: "skip" | "reroll" | "plus") => void;
  goScene: (id: string) => void;
  openScene: (id: string) => void;
  closeScene: (id: string) => void;
  drawWeapon: () => void;
  spendResolve: () => void;
  fireEvent: (id: string) => void;
  discardDraw: () => void;
  forceCountdown: () => void;
  reset: () => void;
  addCharacter: (c: Character) => void;
  occupySeat: (seatId: string, c: Character) => void;
  sitAs: (id: string) => void;
  seatId: string | null;
  selectedTokenId: string | null;
  selectedJournalId: string | null;
  selectedPlaceId: string | null;
  selectToken: (id: string | null) => void;
  selectJournal: (id: string | null) => void;
  selectPlace: (id: string | null) => void;
  moveToPlace: (characterId: string, placeId: string) => void;
  addLog: (entry: { kind: ProtocolEntry["kind"]; title: string; body: string; secret?: boolean; privateTo?: string }) => void;
  removeLog: (id: string) => void;
  revealFog: (id: string) => void;
  revealPin: (id: string) => void;
  shareJournal: (id: string) => void;
  markActed: (id: string) => void;
  nextPhase: () => void;
  nextRound: () => void;
  rollInitiative: () => void;
  rollEncounter: (tableId: string) => void;
  rollLoot: (tableId: string) => void;
  publishLastTable: () => void;
  setTableAuto: (tableId: string, autoChat: boolean) => void;
  addSlNote: (title: string, body: string) => void;
  removeSlLog: (id: string) => void;
};

function currentScene(c: Campaign) {
  return c.scenes[c.currentSceneId];
}

function slEntry(kind: SlLogKind, title: string, body: string, extra?: Partial<SlLogEntry>): SlLogEntry {
  return { id: crypto.randomUUID(), at: Date.now(), kind, title, body, ...extra };
}

function withLog(c: Campaign, entry: SlLogEntry): Campaign {
  return { ...c, slLog: [...c.slLog, entry] };
}

function dropIntention(c: Campaign, characterId: string): Campaign {
  const rest = { ...c.intentions };
  delete rest[characterId];
  const next = Object.values(rest)[0];
  const pending =
    c.pending?.intention.characterId === characterId
      ? next
        ? { intention: next, difficulty: c.pending.difficulty, editedNarrative: "" }
        : null
      : c.pending;
  return { ...c, intentions: rest, pending };
}

function executeRoll(campaign: Campaign, difficulty: DifficultyId, proxy: boolean) {
  const asked = campaign.pendingPlayerRoll;
  const pending = campaign.pending;
  const characterId = asked?.characterId ?? pending?.intention.characterId;
  const actionId = asked?.actionId ?? pending?.intention.actionId;
  if (!characterId || !actionId) return null;
  const actor = campaign.characters[characterId];
  const def = CATALOG_BY_ID[actionId];
  if (!actor || !def) return null;
  const combat = currentScene(campaign).mode === "kampf";
  const roll = rollSimple(actor, def.id, difficulty, combat && def.resolver === "combat", proxy);
  const applied =
    combat && def.resolver === "combat" ? applyCombatOutcome(campaign, roll) : applySocialOutcome(campaign, roll);
  const hasFortune = !proxy && actor.kind === "pc" && applied.characters[actor.id].fortune > 0;
  const next = dropIntention(
    {
      ...applied,
      pendingPlayerRoll: null,
      lastRoll: roll,
      fortune: hasFortune ? { characterId: actor.id, actionId: def.id, roll, snapshot: formatSl(roll.sl) } : null,
      phase: hasFortune ? ("fortune" as const) : ("collecting" as const),
    },
    actor.id,
  );
  return {
    applied: next,
    actor,
    def,
    roll,
  };
}

export const useTisch = create<Store>()((set, get) => ({
  campaign: createCampaign(),
  role: "spieler",
  viewId: PC_ID,
  seatId: null,
  selectedAction: null,
  note: "",
  difficulty: "durchschnittlich",
  desk: "szene",
  pane: "aktion",
  lastDraw: null,
  selectedTokenId: null,
  selectedJournalId: null,
  selectedPlaceId: null,
  setRole: (role) =>
    set((s) => ({
      role,
      viewId: role === "sl" && s.campaign.characters[s.viewId]?.kind === "pc" ? "welt" : s.viewId,
    })),
  setView: (id) => set({ viewId: id }),
  selectAction: (id) => set({ selectedAction: id }),
  send: (id) => {
    set({ selectedAction: id });
  },
  speak: () => {
    const { campaign, viewId, note, role } = get();
    const text = note.trim();
    if (!text) return;
    const scene = currentScene(campaign);
    const actor = campaign.characters[viewId];
    const asWorld = role === "sl" && (!actor || viewId === "welt");
    if (!asWorld && !actor) return;
    const whoName = asWorld || !actor ? "Welt" : actor.name;
    const spoken = role === "sl" ? text : `„${text}“`;
    const entry = asWorld
      ? nowEntry("world", "Welt", text, undefined, { icon: "welt" })
      : role === "sl"
        ? nowEntry("world", whoName, text, undefined, {
            portrait: actor.portrait,
            speaker: actor.id,
            icon: "person",
          })
        : nowEntry("intent", whoName, spoken, undefined, {
            portrait: actor.portrait,
            speaker: actor.id,
            icon: "person",
          });
    let next = addBeat(campaign, scene.id, entry);
    if (role === "sl" && !asWorld && actor) {
      const scn = next.scenes[scene.id];
      next = {
        ...next,
        scenes: {
          ...next.scenes,
          [scn.id]: { ...scn, ask: { speaker: actor.name, text } },
        },
      };
    }
    set({
      campaign: withLog(next, slEntry("write", whoName, text, { protocolId: entry.id })),
      note: "",
    });
  },
  setNote: (note) => set({ note }),
  setDifficulty: (d) => set({ difficulty: d }),
  setDesk: (desk) => set({ desk }),
  setPane: (pane) => set({ pane }),
  submit: () => {
    const { campaign, selectedAction, note, viewId } = get();
    if (!selectedAction) return;
    const def = CATALOG_BY_ID[selectedAction];
    if (!def) return;
    const scene = currentScene(campaign);
    const actor = campaign.characters[viewId];
    const role = get().role;
    if (!actor) return;
    if (actor.kind !== "pc" && role !== "sl") return;
    if (role !== "sl" && isSeatEmpty(actor)) return;
    if (!scene.opened && role === "spieler") return;

    if (selectedAction === "gehen") {
      const { selectedPlaceId, role } = get();
      const here = tokenPlace(scene.board, actor.id);
      const destId =
        selectedPlaceId ??
        scene.board.pins.find((p) => p.revealed && p.toScene && p.id !== here)?.id ??
        scene.exits.find((e) => e.toScene)?.id;
      const pin = destId ? pinById(scene.board, destId) : undefined;
      if (!pin || (!pin.revealed && role !== "sl")) return;
      if (pin.id === here) return;
      const meters = distanceBetween(scene.board, here, pin.id) ?? 0;
      if (scene.combat && !canWalkTo(actor.movement, meters, true)) return;

      if (pin.toScene && campaign.scenes[pin.toScene]) {
        const nextScene = campaign.scenes[pin.toScene];
        if (!nextScene.opened && role !== "sl") return;
        set({
          campaign: {
            ...campaign,
            currentSceneId: pin.toScene,
            intentions: {},
            pending: null,
            fortune: null,
            phase: "collecting",
            countdownEndsAt: Date.now() + nextScene.countdownMs,
            scenes: {
              ...campaign.scenes,
              [scene.id]: pushProtocol(
                scene,
                nowEntry("world", "Ort verlassen", `${actor.name} geht zu ${pin.label}.`, undefined, {
                  image: nextScene.board.image,
                  placeId: pin.id,
                  portrait: actor.portrait,
                  speaker: actor.id,
                  icon: "ort",
                }),
              ),
            },
          },
          selectedAction: null,
          selectedPlaceId: null,
          desk: "szene",
        });
        return;
      }

      const foe = foeId(scene, actor.id);
      const foePlace = foe ? tokenPlace(scene.board, foe) : undefined;
      const nextDist = foePlace ? (distanceBetween(scene.board, pin.id, foePlace) ?? 0) : meters;
      const nextBoard = {
        ...scene.board,
        tokens: scene.board.tokens.map((t) => (t.id === actor.id ? { ...t, placeId: pin.id } : t)),
      };
      const nextScene = {
        ...scene,
        board: nextBoard,
        combat: scene.combat ? { ...scene.combat, distanceM: nextDist } : scene.combat,
      };
      set({
        campaign: {
          ...campaign,
          intentions: {},
          phase: "collecting",
          scenes: {
            ...campaign.scenes,
            [scene.id]: pushProtocol(
              nextScene,
              nowEntry("world", "Gehen", `${actor.name} geht zu ${pin.label} (${meters} m).`, undefined, {
                image: scene.board.image,
                placeId: pin.id,
                portrait: actor.portrait,
                speaker: actor.id,
                icon: "ort",
              }),
            ),
          },
        },
        selectedAction: null,
        selectedPlaceId: pin.id,
      });
      return;
    }

    if (selectedAction === "warten") {
      set({
        campaign: {
          ...campaign,
          scenes: {
            ...campaign.scenes,
            [scene.id]: pushProtocol(
              scene,
              nowEntry("world", "Abwarten", `${actor.name} bleibt stehen und lässt den Ort an sich vorbeiziehen.`, undefined, {
                portrait: actor.portrait,
                speaker: actor.id,
                icon: "welt",
              }),
            ),
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
    const intentBeat = nowEntry("intent", def.label, note || `${actor.name} will ${def.label}.`, undefined, {
      portrait: actor.portrait,
      speaker: actor.id,
      placeId: get().selectedPlaceId ?? undefined,
      icon: "intention",
    });
    const withIntent = addBeat(
      {
        ...campaign,
        intentions: { ...campaign.intentions, [actor.id]: intention },
        pending: campaign.pending ?? { intention, difficulty: get().difficulty, editedNarrative: "" },
        phase: "ready",
      },
      scene.id,
      intentBeat,
    );
    set({
      campaign: withIntent,
      selectedAction: null,
      note: "",
    });
    const needsAsk =
      selectedAction !== "freitext" &&
      (def.resolver === "simple" || def.resolver === "opposed" || def.resolver === "combat") &&
      (role !== "sl" || actor.kind === "npc");
    if (needsAsk) get().slAskRoll(actor.id);
  },
  slAuto: (kind) => {
    const { campaign } = get();
    const pending = campaign.pending;
    if (!pending) return;
    const scene = currentScene(campaign);
    const label = CATALOG_BY_ID[pending.intention.actionId]?.label ?? pending.intention.actionId;
    const body =
      kind === "success" ? "Ohne Wurf: der SL lässt es gelten." : "Ohne Wurf: der SL lässt es scheitern.";
    const cleared = dropIntention(
      {
        ...campaign,
        pendingPlayerRoll: null,
        phase: "collecting",
        scenes: {
          ...campaign.scenes,
          [scene.id]: pushProtocol(scene, nowEntry("world", label, body, undefined, { icon: "sl" })),
        },
      },
      pending.intention.characterId,
    );
    set({
      campaign: withLog(cleared, slEntry("auto", label, body)),
    });
  },
  slAskRoll: (who?: string) => {
    const { campaign, difficulty } = get();
    const intention =
      (who ? campaign.intentions[who] : null) ?? campaign.pending?.intention;
    if (!intention) return;
    const actor = campaign.characters[intention.characterId];
    const def = CATALOG_BY_ID[intention.actionId];
    if (!actor || !def) return;
    if (campaign.pendingPlayerRoll && campaign.pendingPlayerRoll.characterId !== actor.id) return;
    const skillId = def.skill ?? "wahrnehmung";
    const combat = currentScene(campaign).mode === "kampf";
    const target = effectiveTarget(actor, skillId, difficulty, { combat: combat && def.resolver === "combat" });
    const scene = currentScene(campaign);
    const title = "Wirf";
    const body = `${actor.name}: ${SKILL_LABEL[skillId] ?? skillId}, Ziel ${target}. Der Wurf gehört dir.`;
    const privateTo = PRIVATE_ACTIONS.has(def.id) ? actor.id : undefined;
    set({
      campaign: withLog(
        {
          ...campaign,
          pending: campaign.pending ?? { intention, difficulty, editedNarrative: "" },
          pendingPlayerRoll: {
            characterId: actor.id,
            actionId: def.id,
            skillId,
            difficulty,
            opposedSkill:
              def.resolver === "opposed" || def.resolver === "combat"
                ? def.resolver === "combat"
                  ? "ausweichen"
                  : intention.actionId === "feilschen" || intention.actionId === "kaufen"
                    ? "feilschen"
                    : "besonnenheit"
                : undefined,
            opposedId: undefined,
            askedAt: Date.now(),
          },
          phase: "ready",
          scenes: {
            ...campaign.scenes,
            [scene.id]: pushProtocol(
              scene,
              nowEntry("rules", title, body, undefined, {
                icon: "wurf",
                speaker: actor.id,
                portrait: actor.portrait,
                privateTo,
              }),
            ),
          },
        },
        slEntry("ask-roll", title, body),
      ),
    });
  },
  slRoll: () => {
    const { campaign, difficulty } = get();
    const done = executeRoll(campaign, difficulty, true);
    if (!done) return;
    set({
      campaign: withLog(done.applied, slEntry("proxy-roll", done.def.label, `${done.actor.name} — in Vertretung · ${formatSl(done.roll.sl)}`)),
    });
  },
  playerRoll: () => {
    const { campaign, difficulty } = get();
    if (!campaign.pendingPlayerRoll && !campaign.pending) return;
    const done = executeRoll(campaign, campaign.pendingPlayerRoll?.difficulty ?? difficulty, false);
    if (!done) return;
    set({ campaign: done.applied });
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
          ? applyCombatOutcome(
              {
                ...spent,
                scenes: {
                  ...spent.scenes,
                  [currentScene(spent).id]: { ...currentScene(spent), protocol: currentScene(spent).protocol.slice(0, -1) },
                },
              },
              roll,
            )
          : spent;
      set({ campaign: { ...applied, fortune: null, lastRoll: roll, phase: "collecting" } });
      return;
    }
    const def = CATALOG_BY_ID[win.actionId];
    const combat = currentScene(spent).mode === "kampf";
    const roll = rollSimple(spent.characters[actor.id], win.actionId, win.roll.difficulty, combat);
    const applied = combat && def?.resolver === "combat" ? applyCombatOutcome(spent, roll) : applySocialOutcome(spent, roll);
    set({ campaign: { ...applied, fortune: null, phase: "collecting" } });
  },
  goScene: (id) => {
    const { campaign, role } = get();
    const scene = campaign.scenes[id];
    if (!scene) return;
    if (!scene.opened && role === "spieler") return;
    set({
      campaign: {
        ...campaign,
        currentSceneId: id,
        intentions: {},
        pending: null,
        pendingPlayerRoll: null,
        fortune: null,
        phase: "collecting",
        countdownEndsAt: Date.now() + scene.countdownMs,
      },
      desk: "szene",
    });
  },
  openScene: (id) => {
    const { campaign } = get();
    const scene = campaign.scenes[id];
    if (!scene) return;
    set({
      campaign: withLog(
        {
          ...campaign,
          currentSceneId: id,
          scenes: {
            ...campaign.scenes,
            [id]: {
              ...scene,
              opened: true,
              protocol:
                scene.protocol.length === 0
                  ? [
                      {
                        id: `open-${id}`,
                        at: Date.now(),
                        kind: "world" as const,
                        title: scene.title,
                        body: scene.slText,
                        icon: "ort" as const,
                      },
                    ]
                  : scene.protocol,
            },
          },
          countdownEndsAt: Date.now() + scene.countdownMs,
        },
        slEntry("open-scene", scene.title, `${scene.locationName} liegt offen.`),
      ),
    });
  },
  closeScene: (id) => {
    const { campaign } = get();
    const scene = campaign.scenes[id];
    if (!scene) return;
    set({
      campaign: withLog(
        {
          ...campaign,
          scenes: { ...campaign.scenes, [id]: { ...scene, opened: false } },
        },
        slEntry("close-scene", scene.title, `${scene.locationName} liegt hinter dem Vorhang.`),
      ),
    });
  },
  drawWeapon: () => {
    const { campaign, viewId } = get();
    const actor = activePc(campaign, viewId);
    if (!actor) return;
    const scene = currentScene(campaign);
    set({
      campaign: {
        ...campaign,
        characters: {
          ...campaign.characters,
          [actor.id]: {
            ...actor,
            inventory: actor.inventory.map((i) => (i.weapon ? { ...i, weapon: { ...i.weapon, drawn: true } } : i)),
          },
        },
        scenes: {
          ...campaign.scenes,
          [scene.id]: pushProtocol(
            scene,
            nowEntry("world", "Waffe ziehen", "Die Waffe ist gezogen.", undefined, {
              portrait: actor.portrait,
              speaker: actor.id,
              icon: "waffe",
            }),
          ),
        },
      },
      selectedAction: null,
    });
  },
  spendResolve: () => {
    const { campaign, viewId } = get();
    const actor = activePc(campaign, viewId);
    if (!actor || actor.resolve <= 0 || actor.conditions.length === 0) return;
    const [first, ...rest] = actor.conditions;
    const scene = currentScene(campaign);
    set({
      campaign: {
        ...campaign,
        characters: {
          ...campaign.characters,
          [actor.id]: {
            ...actor,
            resolve: actor.resolve - 1,
            conditions: rest,
            wounds:
              first.id === "niedergestreckt"
                ? { ...actor.wounds, current: Math.min(actor.wounds.max, actor.wounds.current + 1) }
                : actor.wounds,
          },
        },
        scenes: {
          ...campaign.scenes,
          [scene.id]: pushProtocol(
            scene,
            nowEntry("world", "Mut", `Zustand ${first.id} abgestoßen.`, undefined, { portrait: actor.portrait, icon: "person" }),
          ),
        },
      },
      selectedAction: null,
    });
  },
  fireEvent: (id) => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    const ev = scene.events.find((e) => e.id === id);
    if (!ev || ev.fired) return;
    set({
      campaign: withLog(campaign, slEntry("table", ev.label, ev.hint, { tableId: ev.id })),
      lastDraw: { title: ev.label, body: ev.hint, eventId: ev.id },
    });
  },
  discardDraw: () => set({ lastDraw: null }),
  forceCountdown: () => set((s) => ({ campaign: { ...s.campaign, countdownEndsAt: Date.now() } })),
  reset: () =>
    set({
      campaign: createCampaign(),
      selectedAction: null,
      note: "",
      difficulty: "durchschnittlich",
      selectedTokenId: null,
      selectedJournalId: null,
      selectedPlaceId: null,
      desk: "szene",
      pane: "aktion",
      lastDraw: null,
    }),
  addCharacter: (c) =>
    set((s) => {
      const claimed = claimSeat(s.campaign, c);
      if (!claimed) return s;
      return { campaign: claimed.campaign, viewId: claimed.id, seatId: claimed.id, role: "spieler" as const };
    }),
  occupySeat: (seatId, c) =>
    set((s) => {
      if (!SEAT_IDS.includes(seatId as (typeof SEAT_IDS)[number])) return s;
      const next = { ...c, id: seatId, kind: "pc" as const };
      return {
        campaign: { ...s.campaign, characters: { ...s.campaign.characters, [seatId]: next } },
        viewId: seatId,
        seatId,
        role: "spieler" as const,
      };
    }),
  sitAs: (id) =>
    set((s) => {
      const ch = s.campaign.characters[id];
      if (!ch || ch.kind !== "pc") return s;
      return { seatId: id, viewId: id, role: "spieler" as const };
    }),
  selectToken: (id) => set({ selectedTokenId: id, selectedJournalId: id }),
  selectJournal: (id) => set({ selectedJournalId: id }),
  selectPlace: (id) => {
    const scene = currentScene(get().campaign);
    const pin = id ? scene.board.pins.find((p) => p.id === id) : undefined;
    const tok = id ? scene.board.tokens.find((t) => t.placeId === id) : undefined;
    set({
      selectedPlaceId: id,
      selectedJournalId: pin?.journalId ?? get().selectedJournalId,
      selectedTokenId: tok?.id ?? get().selectedTokenId,
    });
  },
  moveToPlace: (characterId, placeId) => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    const pin = pinById(scene.board, placeId);
    const ch = campaign.characters[characterId];
    if (!pin || !ch) return;
    const foe = foeId(scene, characterId);
    const foePlace = foe ? tokenPlace(scene.board, foe) : undefined;
    const nextDist = foePlace ? (distanceBetween(scene.board, placeId, foePlace) ?? 0) : 0;
    const nextBoard = {
      ...scene.board,
      tokens: scene.board.tokens.map((t) => (t.id === characterId ? { ...t, placeId } : t)),
    };
    const nextScene = {
      ...scene,
      board: nextBoard,
      combat: scene.combat ? { ...scene.combat, distanceM: nextDist } : scene.combat,
    };
    set({
      campaign: {
        ...campaign,
        scenes: {
          ...campaign.scenes,
          [scene.id]: pushProtocol(
            nextScene,
            nowEntry("sl", "Lage", `${ch.name} steht jetzt: ${pin.label}.`, undefined, {
              secret: true,
              placeId,
              portrait: ch.portrait,
              icon: "sl",
            }),
          ),
        },
      },
      selectedPlaceId: placeId,
    });
  },
  addLog: ({ kind, title, body, secret, privateTo }) => {
    const { campaign, selectedPlaceId } = get();
    const scene = currentScene(campaign);
    const pin = selectedPlaceId ? pinById(scene.board, selectedPlaceId) : undefined;
    const last = campaign.lastRoll;
    const eyes =
      privateTo ??
      (last && PRIVATE_ACTIONS.has(last.actionId) && kind === "world" && !secret ? last.characterId : undefined);
    const extra: Partial<ProtocolEntry> = {
      secret,
      privateTo: eyes,
      placeId: selectedPlaceId ?? undefined,
      image: pin ? scene.board.image : undefined,
      icon: kind === "world" ? "welt" : kind === "event" ? "ereignis" : "sl",
    };
    const entry = nowEntry(kind, title, body, undefined, extra);
    set({
      campaign: withLog(
        {
          ...campaign,
          scenes: {
            ...campaign.scenes,
            [scene.id]: pushProtocol(scene, entry),
          },
        },
        slEntry("write", title, body, { protocolId: entry.id }),
      ),
    });
  },
  removeLog: (id) => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    const gone = scene.protocol.find((e) => e.id === id);
    set({
      campaign: withLog(
        {
          ...campaign,
          scenes: {
            ...campaign.scenes,
            [scene.id]: { ...scene, protocol: scene.protocol.filter((e) => e.id !== id) },
          },
        },
        slEntry("delete", gone?.title ?? id, gone?.body ?? "Eintrag entfernt."),
      ),
    });
  },
  revealFog: (id) => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    const next = {
      ...scene,
      board: {
        ...scene.board,
        fog: scene.board.fog.map((f) => (f.id === id ? { ...f, revealed: true } : f)),
        pins: scene.board.pins.map((p) => (p.id === "gasse" ? { ...p, revealed: true } : p)),
      },
      journal: scene.journal.map((j) => (j.id === "gasse-ausgang" ? { ...j, shared: true } : j)),
    };
    set({
      campaign: withLog(
        {
          ...campaign,
          scenes: {
            ...campaign.scenes,
            [scene.id]: pushProtocol(
              next,
              nowEntry("event", "Vorhang", "Der hintere Hof liegt offen. Eine Gasse.", undefined, {
                image: scene.board.image,
                placeId: "gasse",
                icon: "ort",
              }),
            ),
          },
        },
        slEntry("reveal", "Vorhang", "Hinterhof / Gasse enthüllt."),
      ),
      selectedPlaceId: "gasse",
    });
  },
  revealPin: (id) => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    const pin = scene.board.pins.find((p) => p.id === id);
    set({
      campaign: {
        ...campaign,
        scenes: {
          ...campaign.scenes,
          [scene.id]: {
            ...scene,
            board: {
              ...scene.board,
              pins: scene.board.pins.map((p) => (p.id === id ? { ...p, revealed: true } : p)),
            },
            journal: pin?.journalId
              ? scene.journal.map((j) => (j.id === pin.journalId ? { ...j, shared: true } : j))
              : scene.journal,
          },
        },
      },
      selectedJournalId: pin?.journalId ?? id,
    });
  },
  shareJournal: (id) => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    const card = scene.journal.find((j) => j.id === id);
    set({
      campaign: withLog(
        {
          ...campaign,
          scenes: {
            ...campaign.scenes,
            [scene.id]: {
              ...scene,
              journal: scene.journal.map((j) => (j.id === id ? { ...j, shared: true } : j)),
            },
          },
        },
        slEntry("share", card?.title ?? id, "Handout freigegeben."),
      ),
    });
  },
  markActed: (id) => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    if (!scene.combat) return;
    const acted = scene.combat.acted.includes(id) ? scene.combat.acted : [...scene.combat.acted, id];
    set({
      campaign: {
        ...campaign,
        scenes: {
          ...campaign.scenes,
          [scene.id]: { ...scene, combat: { ...scene.combat, acted } },
        },
      },
    });
  },
  nextPhase: () => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    if (!scene.combat) return;
    const order = ["bewegung", "schuss", "nahkampf", "magie"] as const;
    const i = order.indexOf(scene.combat.turnPhase);
    const turnPhase = order[(i + 1) % order.length];
    set({
      campaign: {
        ...campaign,
        scenes: {
          ...campaign.scenes,
          [scene.id]: { ...scene, combat: { ...scene.combat, turnPhase } },
        },
      },
    });
  },
  nextRound: () => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    if (!scene.combat) return;
    set({
      campaign: {
        ...campaign,
        scenes: {
          ...campaign.scenes,
          [scene.id]: {
            ...scene,
            combat: {
              ...scene.combat,
              round: scene.combat.round + 1,
              acted: [],
              turnPhase: "bewegung",
            },
          },
        },
      },
    });
  },
  rollInitiative: () => {
    const { campaign } = get();
    const scene = currentScene(campaign);
    if (!scene.combat) return;
    const initRoll: Record<string, number> = {};
    for (const id of scene.present) {
      const ch = campaign.characters[id];
      if (!ch) continue;
      initRoll[id] = ch.attributes.I + Math.floor(Math.random() * 10) + 1;
    }
    const initiative = [...scene.present].sort((a, b) => (initRoll[b] ?? 0) - (initRoll[a] ?? 0));
    set({
      campaign: {
        ...campaign,
        scenes: {
          ...campaign.scenes,
          [scene.id]: {
            ...scene,
            combat: { ...scene.combat, initiative, initRoll, acted: [], round: 1, turnPhase: "bewegung" },
          },
        },
      },
    });
  },
  rollEncounter: (tableId) => {
    const table = ENCOUNTER_TABLES.find((t) => t.id === tableId);
    if (!table || table.rows.length === 0) return;
    const { campaign } = get();
    const row = rollWeighted(table.rows);
    const logged = withLog(campaign, slEntry("table", `${table.label}: ${row.label}`, row.body, { tableId }));
    set({ campaign: logged, lastDraw: { title: row.label, body: row.body } });
  },
  rollLoot: (tableId) => {
    const table = LOOT_TABLES.find((t) => t.id === tableId);
    if (!table || table.rows.length === 0) return;
    const { campaign } = get();
    const row = rollWeighted(table.rows);
    const body = `${row.itemName}${row.pennies ? ` · ${row.pennies} Groschen` : ""}`;
    const logged = withLog(campaign, slEntry("table", `${table.label}: ${row.label}`, body, { tableId }));
    set({ campaign: logged, lastDraw: { title: row.label, body } });
  },
  publishLastTable: () => {
    const { campaign, lastDraw } = get();
    if (!lastDraw) return;
    const scene = currentScene(campaign);
    const beat = nowEntry("event", lastDraw.title, lastDraw.body, undefined, { icon: "ereignis" });
    let next = addBeat(campaign, scene.id, beat);
    if (lastDraw.eventId) {
      const scn = next.scenes[scene.id];
      next = {
        ...next,
        scenes: {
          ...next.scenes,
          [scn.id]: { ...scn, events: scn.events.map((e) => (e.id === lastDraw.eventId ? { ...e, fired: true } : e)) },
        },
      };
    }
    set({
      campaign: withLog(next, slEntry("into-leben", lastDraw.title, lastDraw.body)),
      lastDraw: null,
    });
  },
  setTableAuto: () => {
    /* autoChat ist tot. Tabellen feuern nie von selbst. */
  },
  addSlNote: (title, body) =>
    set((s) => ({
      campaign: withLog(s.campaign, slEntry("intervene", title, body)),
    })),
  removeSlLog: (id) =>
    set((s) => ({
      campaign: { ...s.campaign, slLog: s.campaign.slLog.filter((e) => e.id !== id) },
    })),
}));

export function moneyLabel(c: Campaign) {
  const pc = filledPcs(c)[0] ?? activePc(c, SEAT_IDS[0]);
  return pc ? formatMoney(pc.money) : "—";
}
