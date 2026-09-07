import { create } from "zustand";
import { ATTRS, type Attr } from "./types";
import {
  CAREER_BY_ID,
  SPECIES,
  type SpeciesId,
} from "./chargen-data";
import {
  careerForRoll,
  d100,
  emptyAttrs,
  moneyFromStatus,
  newDraft,
  plusAdvancesUsed,
  rollAge,
  rollEyes,
  rollHair,
  rollHeight,
  rollName,
  rollSpecies,
  rollUniqueTalents,
  twoD10,
  type ChargenDraft,
} from "./chargen";
import { STATION_IDS, type StationId } from "./stations";

type Store = {
  draft: ChargenDraft;
  reset: () => void;
  setStep: (n: number) => void;
  setStation: (id: StationId) => void;
  pickSpecies: (id: SpeciesId, ep: 0 | 20, roll?: number) => void;
  rollSpecies: () => { roll: number; id: SpeciesId };
  pickCareer: (id: string, ep: 0 | 25 | 50) => void;
  rollCareer: () => { roll: number; id: string | null };
  setAttrRaw: (raw: Record<Attr, number>, method: ChargenDraft["attrMethod"], ep: 0 | 25 | 50) => void;
  rollAttrSet: () => Record<Attr, number>;
  bumpAdvance: (attr: Attr, delta: number) => void;
  setFateRes: (fateExtra: number, resExtra: number) => void;
  setMotivation: (v: string) => void;
  togglePlus: (which: "plus5" | "plus3", id: string) => void;
  pickOrTalent: (index: number, name: string) => void;
  rollRandomTalents: () => void;
  setCareerAdv: (id: string, n: number) => void;
  setCareerTalent: (name: string) => void;
  setManualSkills: (ids: string[]) => void;
  rollMoney: () => void;
  setName: (v: string) => void;
  rollDetails: () => void;
  setDetail: (
    patch: Partial<
      Pick<
        ChargenDraft,
        | "age"
        | "heightCm"
        | "eyes"
        | "hair"
        | "shortGoal"
        | "longGoal"
        | "groupName"
        | "groupShort"
        | "groupLong"
        | "howMet"
        | "herkunft"
        | "bart"
        | "gott"
        | "secretGoal"
      >
    >,
  ) => void;
  setAnswer: (id: string, v: string) => void;
  spendXp: (n: number) => void;
  setHood: (v: "gugel" | "maske") => void;
};

export const useChargen = create<Store>()((set, get) => ({
  draft: newDraft(),
  reset: () => set({ draft: newDraft() }),
  setStep: (n) => set((s) => ({ draft: { ...s.draft, step: n } })),
  setStation: (id) =>
    set((s) => ({
      draft: { ...s.draft, station: id, step: Math.max(1, STATION_IDS.indexOf(id) - 1) },
    })),
  pickSpecies: (id, ep, roll) =>
    set((s) => ({
      draft: {
        ...newDraft(),
        station: s.draft.station,
        step: s.draft.step,
        speciesId: id,
        speciesEp: ep,
        lastSpeciesRoll: roll ?? null,
      },
    })),
  rollSpecies: () => {
    const hit = rollSpecies();
    set((s) => ({ draft: { ...s.draft, lastSpeciesRoll: hit.roll } }));
    return hit;
  },
  pickCareer: (id, ep) =>
    set((s) => {
      const career = CAREER_BY_ID[id];
      const adv: Record<string, number> = {};
      const skills = career?.stage1?.skills ?? s.draft.manualSkills;
      for (const sk of skills) adv[sk] = s.draft.careerAdv[sk] ?? 0;
      return {
        draft: {
          ...s.draft,
          careerId: id,
          careerEp: ep,
          careerAdv: adv,
          careerTalent: null,
          attrAdvances: emptyAttrs(),
        },
      };
    }),
  rollCareer: () => {
    const species = get().draft.speciesId;
    const roll = d100();
    if (!species) return { roll, id: null };
    const hit = careerForRoll(species, roll);
    set((s) => ({ draft: { ...s.draft, careerRolls: [...s.draft.careerRolls, roll] } }));
    return { roll, id: hit?.id ?? null };
  },
  setAttrRaw: (raw, method, ep) => set((s) => ({ draft: { ...s.draft, attrRaw: raw, attrMethod: method, attrEp: ep } })),
  rollAttrSet: () => {
    const raw = emptyAttrs();
    for (const a of ATTRS) raw[a] = twoD10();
    set((s) => ({ draft: { ...s.draft, attrRaw: raw, attrMethod: null, attrEp: 0 } }));
    return raw;
  },
  bumpAdvance: (attr, delta) =>
    set((s) => {
      const cur = s.draft.attrAdvances[attr] ?? 0;
      const next = Math.max(0, cur + delta);
      const used = plusAdvancesUsed(s.draft) - cur + next;
      if (used > 5) return s;
      return { draft: { ...s.draft, attrAdvances: { ...s.draft.attrAdvances, [attr]: next } } };
    }),
  setFateRes: (fateExtra, resExtra) => {
    const d = get().draft;
    if (!d.speciesId) return;
    const cap = SPECIES[d.speciesId].extra;
    if (fateExtra < 0 || resExtra < 0 || fateExtra + resExtra > cap) return;
    set({ draft: { ...d, fateExtra, resExtra } });
  },
  setMotivation: (v) => set((s) => ({ draft: { ...s.draft, motivation: v } })),
  togglePlus: (which, id) =>
    set((s) => {
      const list = s.draft[which];
      const other = which === "plus5" ? s.draft.plus3 : s.draft.plus5;
      if (other.includes(id)) return s;
      const has = list.includes(id);
      if (!has && list.length >= 3) return s;
      const next = has ? list.filter((x) => x !== id) : [...list, id];
      return { draft: { ...s.draft, [which]: next } };
    }),
  pickOrTalent: (index, name) =>
    set((s) => {
      const next = [...s.draft.talentOr];
      next[index] = name;
      return { draft: { ...s.draft, talentOr: next } };
    }),
  rollRandomTalents: () =>
    set((s) => {
      if (!s.draft.speciesId) return s;
      const sp = SPECIES[s.draft.speciesId];
      const owned = [...sp.talentFixed, ...s.draft.talentOr];
      return { draft: { ...s.draft, randomTalents: rollUniqueTalents(sp.randomTalents, owned) } };
    }),
  setCareerAdv: (id, n) =>
    set((s) => {
      const clamped = Math.max(0, Math.min(10, n));
      const current = s.draft.careerAdv[id] ?? 0;
      const sum = Object.values(s.draft.careerAdv).reduce((a, b) => a + b, 0) - current + clamped;
      if (sum > 40) return s;
      return { draft: { ...s.draft, careerAdv: { ...s.draft.careerAdv, [id]: clamped } } };
    }),
  setCareerTalent: (name) => set((s) => ({ draft: { ...s.draft, careerTalent: name } })),
  setManualSkills: (ids) => {
    const adv: Record<string, number> = {};
    for (const id of ids.slice(0, 8)) adv[id] = 0;
    set((s) => ({ draft: { ...s.draft, manualSkills: ids.slice(0, 8), careerAdv: adv, careerTalent: null } }));
  },
  rollMoney: () =>
    set((s) => {
      const career = s.draft.careerId ? CAREER_BY_ID[s.draft.careerId] : null;
      const status = career?.stage1?.status ?? { tier: "messing" as const, rank: 1 };
      return { draft: { ...s.draft, money: moneyFromStatus(status.tier, status.rank) } };
    }),
  setName: (v) => set((s) => ({ draft: { ...s.draft, name: v } })),
  rollDetails: () =>
    set((s) => {
      if (!s.draft.speciesId) return s;
      const id = s.draft.speciesId;
      return {
        draft: {
          ...s.draft,
          name: s.draft.name || rollName(id),
          age: rollAge(id),
          heightCm: Math.round(rollHeight(id)),
          eyes: rollEyes(id),
          hair: rollHair(id),
        },
      };
    }),
  setDetail: (patch) => set((s) => ({ draft: { ...s.draft, ...patch } })),
  setAnswer: (id, v) => set((s) => ({ draft: { ...s.draft, answers: { ...s.draft.answers, [id]: v } } })),
  spendXp: (n) => set((s) => ({ draft: { ...s.draft, spentXp: Math.max(0, n) } })),
  setHood: (v) => set((s) => ({ draft: { ...s.draft, hood: v } })),
}));
