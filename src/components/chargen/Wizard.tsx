import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { BookOpen, ChevronLeft, ChevronRight, Dices, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ATTRS, type Attr } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";
import {
  CAREER_BY_ID,
  CAREERS,
  CLASS_GEAR,
  CLASS_IDS,
  CLASS_LABEL,
  LIFE_QUESTIONS,
  SKILL_BY_ID,
  SKILLS,
  SPECIES,
  SPECIES_IDS,
  type SpeciesId,
} from "@/lib/wfrp/chargen-data";
import {
  bonusEp,
  careerAdvanceSum,
  careerForRoll,
  draftToCharacter,
  extraLeft,
  finalAttributes,
  plusAdvancesUsed,
  pointBuyValid,
  stageOf,
  woundsMax,
} from "@/lib/wfrp/chargen";
import { skillLabel } from "@/lib/wfrp/config";
import { useChargen } from "@/lib/wfrp/chargen-store";
import { useTisch } from "@/lib/wfrp/store";
import { firstEmptySeatId } from "@/lib/wfrp/seats";
import { STATION_IDS, STATIONS, GOETTER, type StationId } from "@/lib/wfrp/stations";
import { ExplainPanel } from "./ExplainPanel";
import { W100Visual } from "./W100Visual";
import { HerkunftMap } from "./HerkunftMap";

export function ChargenWizard() {
  const draft = useChargen((s) => s.draft);
  const setStation = useChargen((s) => s.setStation);
  const reset = useChargen((s) => s.reset);
  const addCharacter = useTisch((s) => s.addCharacter);
  const occupySeat = useTisch((s) => s.occupySeat);
  const campaign = useTisch((s) => s.campaign);
  const navigate = useNavigate();
  const ep = bonusEp(draft);
  const station = draft.station ?? "welt";
  const idx = STATION_IDS.indexOf(station);
  const [sheet, setSheet] = useState(false);
  const meta = STATIONS[idx] ?? STATIONS[0]!;
  const canNext = stationReady(station);
  const last = station === "xp";

  function next() {
    if (last) {
      const c = draftToCharacter(draft);
      if (!c) return;
      const empty = firstEmptySeatId(campaign);
      if (empty) addCharacter(c);
      else occupySeat("platz-1", c);
      navigate({ to: "/tisch" });
      return;
    }
    setStation(STATION_IDS[Math.min(STATION_IDS.length - 1, idx + 1)]!);
  }

  return (
    <div className="desk min-h-dvh">
      <img src="/images/desk.jpg" alt="" className="desk-photo" width={1792} height={1008} />
      <div className="desk-veil desk-veil-read" aria-hidden />

      <div className="relative z-10 mx-auto flex h-dvh max-w-6xl flex-col gap-4 px-4 py-5">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Link to="/" className="font-display text-sm tracking-wide text-fg">
              Die Frist
            </Link>
            <p className="mt-1 text-sm text-muted">{meta.why}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="px-2 font-display text-xs text-muted">
              Bonus-EP <span className="tabular-nums text-fg">{ep}</span>
            </p>
            <Button variant="outline" size="sm" className="lg:hidden" onClick={() => setSheet(true)}>
              <BookOpen className="size-4" />
              Erklären
            </Button>
            <Button variant="ghost" size="sm" onClick={reset}>
              <RotateCcw className="size-4" />
              Neu
            </Button>
          </div>
        </header>

        <nav className="flex gap-1 overflow-x-auto pb-1 lg:hidden" aria-label="Stationen">
          {STATIONS.map((s, i) => {
            const reached = i <= idx;
            const current = s.id === station;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => reached && setStation(s.id)}
                className={cn(
                  "min-h-11 shrink-0 rounded-sm px-3 font-display text-xs tracking-wide",
                  current ? "bg-primary text-primary-fg" : reached ? "text-fg" : "text-faint",
                )}
              >
                {current ? s.label : i + 1}
              </button>
            );
          })}
        </nav>

        <div className="grid min-h-0 flex-1 grid-rows-1 gap-4 lg:grid-cols-[11rem_minmax(0,1fr)_20rem]">
          <nav className="path-rail hidden min-h-0 overflow-y-auto lg:flex" aria-label="Stationen">
            {STATIONS.map((s, i) => {
              const reached = i <= idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  data-current={s.id === station}
                  data-reached={reached}
                  disabled={!reached}
                  onClick={() => reached && setStation(s.id)}
                >
                  <span className="n">{i + 1}</span>
                  <span>{s.label}</span>
                </button>
              );
            })}
          </nav>

          <article className="blatt blatt-wide flex h-full min-h-0 flex-col overflow-hidden">
            <div className="blatt-inner min-h-0 flex-1 overflow-y-auto">
              {station === "welt" && <StationWelt />}
              {station === "volk" && <StepVolk />}
              {station === "pnp" && <StationPnP />}
              {station === "karriere" && <StepKarriere />}
              {station === "werte" && <StepWerte />}
              {station === "faehigkeiten" && <StepFaehigkeiten />}
              {station === "ausruestung" && <StepAusruestung />}
              {station === "details" && <StepDetails />}
              {station === "gruppe" && <StepGruppe />}
              {station === "leben" && <StepLeben />}
              {station === "xp" && <StepXp />}
            </div>
          </article>

          <aside className="blatt blatt-wide hidden h-full min-h-0 flex-col overflow-hidden lg:flex">
            <div className="blatt-inner min-h-0 flex-1 overflow-y-auto">
              <ExplainPanel key={station} station={station} />
            </div>
          </aside>
        </div>

        {sheet ? (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button type="button" className="absolute inset-0 bg-shade/70" onClick={() => setSheet(false)} aria-label="Schließen" />
            <div className="absolute inset-x-0 bottom-0 max-h-[80dvh] overflow-y-auto p-3">
              <div className="blatt blatt-wide">
                <div className="blatt-inner">
                  <ExplainPanel key={station} station={station} onClose={() => setSheet(false)} />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <footer className="chargen-bar">
          <Button variant="outline" disabled={idx === 0} onClick={() => setStation(STATION_IDS[idx - 1]!)}>
            <ChevronLeft className="size-4" />
            Zurück
          </Button>
          <Button variant="wax" disabled={!canNext} onClick={next}>
            {last ? "Auf den Bogen" : "Weiter"}
            <ChevronRight className="size-4" />
          </Button>
        </footer>
      </div>
    </div>
  );
}

function stationReady(station: StationId): boolean {
  const d = useChargen.getState().draft;
  if (station === "welt" || station === "pnp" || station === "gruppe" || station === "xp") return true;
  if (station === "volk") return !!d.speciesId;
  if (station === "karriere") return !!d.careerId && !!d.speciesId && CAREER_BY_ID[d.careerId]?.ranges[d.speciesId] != null;
  if (station === "werte") {
    if (!d.speciesId || !d.attrMethod) return false;
    if (d.attrMethod === "buy" && !pointBuyValid(d.attrRaw).ok) return false;
    return extraLeft(d) === 0;
  }
  if (station === "faehigkeiten") {
    if (d.plus5.length !== 3 || d.plus3.length !== 3) return false;
    const sp = d.speciesId ? SPECIES[d.speciesId] : null;
    if (sp && d.talentOr.length < sp.talentOr.length) return false;
    if (sp && d.randomTalents.length < sp.randomTalents) return false;
    if (careerAdvanceSum(d) !== 40) return false;
    if (!d.careerTalent) return false;
    return true;
  }
  if (station === "details") return d.name.trim().length > 0;
  if (station === "leben") return Object.values(d.answers).filter((v) => v.trim()).length >= 3;
  return true;
}

function StationWelt() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Die Alte Welt</h2>
      <p className="text-sm leading-relaxed">
        Das Spiel beginnt oft im <strong>Reikland</strong>, einer Provinz des Imperiums der Menschen. Hauptstadt{" "}
        <strong>Altdorf</strong>. Imperator Karl-Franz I. Schutzgott der Reikländer: Sigmar.
      </p>
      <p className="text-sm leading-relaxed text-muted">
        Fünf Völker leben nebeneinander — oft misstrauisch. Lies die Karten, dann wählst du auf der nächsten Station, wer du bist.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {SPECIES_IDS.map((id) => (
          <li key={id} className="rounded-md border border-border bg-raised p-3">
            <div className="font-display">{SPECIES[id].name}</div>
            <p className="mt-1 text-sm text-muted">{SPECIES[id].blurb}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StationPnP() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Was wir hier spielen</h2>
      <p className="text-sm leading-relaxed">
        Ein Gesprächsspiel. Der Spielleiter beschreibt die Welt. Du sagst, was deine Figur tut. Würfel entscheiden Unsicherheit.
        Digital rechnen wir — die Figur bleibt deine.
      </p>
      <p className="text-sm leading-relaxed text-muted">
        Kein festes Skript, kein Game-Over-Menü. Als Nächstes braucht die Figur eine Profession: Klasse und Karriere. Ohne Idee: würfeln gibt EP.
      </p>
    </div>
  );
}

function StepVolk() {
  const draft = useChargen((s) => s.draft);
  const pick = useChargen((s) => s.pickSpecies);
  const roll = useChargen((s) => s.rollSpecies);
  const [pending, setPending] = useState<{ roll: number; id: SpeciesId } | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Volk</h2>
      <p className="text-sm text-muted">Kultur und Ort zuerst. Zahlen folgen. Zufall behalten: +20 EP.</p>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => {
            const hit = roll();
            setPending(hit);
          }}
        >
          <Dices className="size-4" />
          Würfeln
        </Button>
        {pending ? (
          <>
            <span className="self-center text-sm">
              {pending.roll}: {SPECIES[pending.id].name}
            </span>
            <Button
              variant="wax"
              onClick={() => {
                pick(pending.id, 20, pending.roll);
                setPending(null);
              }}
            >
              Behalten (+20 EP)
            </Button>
          </>
        ) : null}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {SPECIES_IDS.map((id) => {
          const sp = SPECIES[id];
          const on = draft.speciesId === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => pick(id, 0)}
              className={cn(
                "rounded-md border p-4 text-left",
                on ? "border-primary bg-raised" : "border-border bg-bg",
              )}
            >
              <div className="font-display text-lg">{sp.name}</div>
              <p className="mt-1 text-sm">{sp.blurb}</p>
              <p className="mt-2 text-xs text-faint">
                Bewegung {sp.bewegung} · Schicksal {sp.schicksal} · Zähigkeit {sp.zaehigkeit}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepKarriere() {
  const draft = useChargen((s) => s.draft);
  const pick = useChargen((s) => s.pickCareer);
  const roll = useChargen((s) => s.rollCareer);
  const [last, setLast] = useState<{ roll: number; id: string | null } | null>(null);
  const species = draft.speciesId;
  if (!species) return <p className="text-muted">Zuerst ein Volk.</p>;

  const three = draft.careerRolls.slice(0, 3);
  const career = draft.careerId ? CAREER_BY_ID[draft.careerId] : null;
  const status = career ? stageOf(career).status : undefined;

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Klasse und Karriere</h2>
      <p className="text-sm text-muted">
        Klasse = Herkunft. Karriere = Beruf jetzt. Stufe-1-Name und Status folgen — nicht wählen.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline" onClick={() => setLast(roll())}>
          <Dices className="size-4" />
          Würfeln
        </Button>
        {last ? (
          <span className="text-sm">
            {last.roll}
            {last.id ? `: ${CAREER_BY_ID[last.id]?.name}` : " — für dieses Volk leer, nochmal."}
          </span>
        ) : null}
        {last?.id ? (
          <>
            <Button variant="wax" onClick={() => pick(last.id!, 50)}>
              Diesen behalten (+50)
            </Button>
            {three.length >= 1 ? (
              <Button variant="outline" onClick={() => pick(last.id!, 25)}>
                Aus den Würfen (+25)
              </Button>
            ) : null}
          </>
        ) : null}
      </div>
      {three.length > 0 ? (
        <p className="text-xs text-muted">
          Würfe: {three.map((n) => `${n} ${careerForRoll(species, n)?.name ?? "—"}`).join(" · ")}
        </p>
      ) : null}

      {status ? (
        <p className="rounded-md border border-border bg-raised px-3 py-2 text-sm">
          Folgt: {career ? stageOf(career).name : ""} · {status.tier} {status.rank} · Startgeld{" "}
          {status.tier === "messing" ? `2W10×${status.rank} G` : status.tier === "silber" ? `1W10×${status.rank} S` : `${status.rank} GK`}
        </p>
      ) : null}

      {CLASS_IDS.map((cls) => {
        const list = CAREERS.filter((c) => c.klasse === cls && c.ranges[species] != null);
        if (list.length === 0) return null;
        return (
          <section key={cls}>
            <h3 className="font-display text-sm uppercase tracking-widest text-muted">{CLASS_LABEL[cls]}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {list.map((c) => {
                const on = draft.careerId === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => pick(c.id, 0)}
                    className={cn(
                      "min-h-11 rounded-sm border px-3 text-sm",
                      on ? "border-primary bg-raised" : "border-border",
                      !c.complete && "text-muted",
                    )}
                  >
                    {c.name}
                    {!c.complete ? " · Hand" : ""}
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function StepWerte() {
  const draft = useChargen((s) => s.draft);
  const rollSet = useChargen((s) => s.rollAttrSet);
  const setRaw = useChargen((s) => s.setAttrRaw);
  const bump = useChargen((s) => s.bumpAdvance);
  const setFateRes = useChargen((s) => s.setFateRes);
  const setMotivation = useChargen((s) => s.setMotivation);
  const [buy, setBuy] = useState(false);
  if (!draft.speciesId) return null;
  const sp = SPECIES[draft.speciesId];
  const career = draft.careerId ? CAREER_BY_ID[draft.careerId] : null;
  const plus = career ? stageOf(career).plus : [];
  const finals = finalAttributes(draft.speciesId, draft.attrRaw, draft.attrAdvances);
  const buyState = pointBuyValid(draft.attrRaw);
  const left = extraLeft(draft);

  function applyBuy(attr: Attr, v: number) {
    const next = { ...draft.attrRaw, [attr]: v };
    setRaw(next, "buy", 0);
  }

  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl">Attribute</h2>
      <p className="text-sm text-muted">
        30 ist ein durchschnittlicher Mensch. 40 kennt man. Wurf unter den Wert.
      </p>
      <W100Visual target={65} />
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => {
            setBuy(false);
            rollSet();
          }}
        >
          <Dices className="size-4" />
          2W10 × 10
        </Button>
        <Button variant="outline" disabled={ATTRS.every((a) => draft.attrRaw[a] === 0)} onClick={() => setRaw(draft.attrRaw, "keep", 50)}>
          Reihenfolge (+50)
        </Button>
        <Button variant="outline" disabled={ATTRS.every((a) => draft.attrRaw[a] === 0)} onClick={() => setRaw(draft.attrRaw, "swap", 25)}>
          Verteilen (+25)
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setBuy(true);
            const raw = { KG: 10, BF: 10, ST: 10, WI: 10, I: 10, GW: 10, GS: 10, IN: 10, WK: 10, CH: 10 };
            setRaw(raw, "buy", 0);
          }}
        >
          100 Punkte
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-1 sm:grid-cols-10">
        {ATTRS.map((a) => (
          <div key={a} className="rounded-sm border border-border bg-raised px-1 py-2 text-center">
            <div className="font-display text-xs text-muted">{a}</div>
            {buy || draft.attrMethod === "swap" ? (
              <input
                className="mt-1 w-full bg-transparent text-center font-display text-lg tabular-nums outline-none"
                type="number"
                min={4}
                max={18}
                value={draft.attrRaw[a] || ""}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (buy) applyBuy(a, v);
                  else setRaw({ ...draft.attrRaw, [a]: v }, "swap", 25);
                }}
              />
            ) : (
              <div className="font-display text-lg tabular-nums">{draft.attrRaw[a] || "—"}</div>
            )}
            <div className="text-xs text-faint">+{sp.basis[a]}</div>
            <div className="font-display text-xl tabular-nums">{draft.attrRaw[a] ? finals[a] : "·"}</div>
          </div>
        ))}
      </div>
      {buy ? <p className="text-xs text-muted">Summe {buyState.sum} / 100 · je 4–18</p> : null}

      <section>
        <h3 className="font-display text-sm uppercase tracking-widest text-muted">5 Steigerungen nur auf +</h3>
        <p className="mt-1 text-xs text-muted">
          {plus.length ? plus.join(", ") : "Karriere ohne Schema: max. 5 gesamt."} · {plusAdvancesUsed(draft)}/5
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {(plus.length ? plus : ATTRS).map((a) => (
            <div key={a} className="flex items-center gap-2 rounded-sm border border-border px-2 py-1">
              <span className="text-xs">{a}</span>
              <button type="button" className="min-h-9 px-2" onClick={() => bump(a, -1)}>
                -
              </button>
              <span className="tabular-nums">{draft.attrAdvances[a] ?? 0}</span>
              <button type="button" className="min-h-9 px-2" onClick={() => bump(a, 1)}>
                +
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-display text-sm uppercase tracking-widest text-muted">Schicksal und Zähigkeit</h3>
        <p className="mt-1 text-xs text-muted">
          Sockel {sp.schicksal} / {sp.zaehigkeit}. Extra {sp.extra}, noch {left}.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <label className="text-sm">
            Extra Schicksal
            <input
              type="number"
              min={0}
              className="ml-2 w-16 rounded-sm border border-border bg-bg px-2 py-1"
              value={draft.fateExtra}
              onChange={(e) => setFateRes(Number(e.target.value), draft.resExtra)}
            />
          </label>
          <label className="text-sm">
            Extra Zähigkeit
            <input
              type="number"
              min={0}
              className="ml-2 w-16 rounded-sm border border-border bg-bg px-2 py-1"
              value={draft.resExtra}
              onChange={(e) => setFateRes(draft.fateExtra, Number(e.target.value))}
            />
          </label>
        </div>
        <p className="mt-2 text-xs text-muted">Folgt: LP {woundsMax(finals, sp.lpHalbling)} · Glück = Schicksal · Mut = Zähigkeit</p>
      </section>

      <label className="block text-sm">
        Motivation (holt Mut, nicht EP)
        <input
          className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2"
          value={draft.motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="nicht wieder auf der Straße"
        />
      </label>
    </div>
  );
}

function StepFaehigkeiten() {
  const draft = useChargen((s) => s.draft);
  const toggle = useChargen((s) => s.togglePlus);
  const pickOr = useChargen((s) => s.pickOrTalent);
  const rollRand = useChargen((s) => s.rollRandomTalents);
  const setAdv = useChargen((s) => s.setCareerAdv);
  const setTal = useChargen((s) => s.setCareerTalent);
  const setManual = useChargen((s) => s.setManualSkills);
  if (!draft.speciesId) return null;
  const sp = SPECIES[draft.speciesId];
  const career = draft.careerId ? CAREER_BY_ID[draft.careerId] : null;
  const stage = career ? stageOf(career) : null;
  const careerSkills = stage?.skills.length ? stage.skills : draft.manualSkills;
  const careerTalents = stage?.talents ?? [];
  const left = 40 - careerAdvanceSum(draft);

  return (
    <div className="space-y-5">
      <h2 className="font-display text-xl">Fähigkeiten und Talente</h2>
      <p className="text-sm text-muted">Grund: jeder darf. Ausbau: nur mit Steigerung. Reikspiel nicht wählen.</p>

      <section>
        <h3 className="font-display text-sm uppercase tracking-widest text-muted">Volk — 3× +5 und 3× +3</h3>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {sp.skills.map((id) => {
            const def = SKILL_BY_ID[id];
            const p5 = draft.plus5.includes(id);
            const p3 = draft.plus3.includes(id);
            return (
              <div key={id} className="flex items-center justify-between gap-2 rounded-sm border border-border px-3 py-2 text-sm">
                <span>{def?.label ?? id}</span>
                <span className="flex gap-1">
                  <button type="button" className={cn("min-h-9 rounded-sm px-2 text-xs", p5 && "bg-primary text-primary-fg")} onClick={() => toggle("plus5", id)}>
                    +5
                  </button>
                  <button type="button" className={cn("min-h-9 rounded-sm px-2 text-xs", p3 && "bg-primary text-primary-fg")} onClick={() => toggle("plus3", id)}>
                    +3
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h3 className="font-display text-sm uppercase tracking-widest text-muted">Volk — Talente</h3>
        <ul className="mt-2 space-y-2 text-sm">
          {sp.talentFixed.map((t) => (
            <li key={t} className="text-muted">
              {t}
            </li>
          ))}
          {sp.talentOr.map((pair, i) => (
            <li key={pair.join()} className="flex flex-wrap gap-2">
              {pair.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={cn("min-h-11 rounded-sm border px-3", draft.talentOr[i] === name ? "border-primary bg-raised" : "border-border")}
                  onClick={() => pickOr(i, name)}
                >
                  {name}
                </button>
              ))}
            </li>
          ))}
        </ul>
        {sp.randomTalents > 0 ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button variant="outline" onClick={rollRand}>
              <Dices className="size-4" />
              {sp.randomTalents} zufällige Talente
            </Button>
            {draft.randomTalents.map((t) => (
              <span key={t} className="rounded-sm border border-border px-2 py-1 text-sm">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </section>

      <section>
        <h3 className="font-display text-sm uppercase tracking-widest text-muted">Karriere — 40 Punkte, max. 10 · rest {left}</h3>
        {!career?.complete ? (
          <div className="mt-2 space-y-2">
            <p className="text-sm text-muted">Karriere-Block folgt aus dem Buch. Wähle 8 Fähigkeiten selbst.</p>
            <div className="flex max-h-48 flex-wrap gap-1 overflow-y-auto">
              {SKILLS.filter((s) => s.id !== "nahkampf").map((s) => {
                const on = draft.manualSkills.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    className={cn("rounded-sm border px-2 py-1 text-xs", on ? "border-primary bg-raised" : "border-border")}
                    onClick={() => {
                      const next = on ? draft.manualSkills.filter((x) => x !== s.id) : [...draft.manualSkills, s.id].slice(0, 8);
                      setManual(next);
                    }}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
            <label className="block text-sm">
              Karriere-Talent (frei)
              <input
                className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2"
                value={draft.careerTalent ?? ""}
                onChange={(e) => setTal(e.target.value)}
              />
            </label>
          </div>
        ) : null}
        <div className="mt-3 space-y-2">
          {careerSkills.map((id) => {
            const n = draft.careerAdv[id] ?? 0;
            return (
              <div key={id} className="flex items-center justify-between gap-3">
                <span className="text-sm">{skillLabel(id)}</span>
                <span className="flex items-center gap-2">
                  <button type="button" className="min-h-9 px-3" onClick={() => setAdv(id, n - 1)}>
                    -
                  </button>
                  <span className="w-8 text-center tabular-nums">{n}</span>
                  <button type="button" className="min-h-9 px-3" onClick={() => setAdv(id, n + 1)}>
                    +
                  </button>
                </span>
              </div>
            );
          })}
        </div>
        {careerTalents.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {careerTalents.map((t) => (
              <button
                key={t}
                type="button"
                className={cn("min-h-11 rounded-sm border px-3 text-sm", draft.careerTalent === t ? "border-primary bg-raised" : "border-border")}
                onClick={() => setTal(t)}
              >
                {t}
              </button>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}

function StepAusruestung() {
  const draft = useChargen((s) => s.draft);
  const rollMoney = useChargen((s) => s.rollMoney);
  const setHood = useChargen((s) => s.setHood);
  const career = draft.careerId ? CAREER_BY_ID[draft.careerId] : null;
  if (!career) return null;
  const stage = stageOf(career);
  const status = stage.status;
  const gesetzlos = career.klasse === "gesetzlose";
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Ausrüstung</h2>
      <p className="text-sm text-muted">Zwei Pakete. Zimmer bleibt in der Stadt.</p>
      {gesetzlos ? (
        <div className="flex flex-wrap gap-2">
          <span className="self-center text-sm">Gugel oder Maske</span>
          <Button variant={draft.hood === "gugel" ? "wax" : "outline"} size="sm" onClick={() => setHood("gugel")}>
            Gugel
          </Button>
          <Button variant={draft.hood === "maske" ? "wax" : "outline"} size="sm" onClick={() => setHood("maske")}>
            Maske
          </Button>
        </div>
      ) : null}
      <ul className="grid gap-1 text-sm sm:grid-cols-2">
        {CLASS_GEAR[career.klasse].map((g) => (
          <li key={g} className="rounded-sm border border-border px-3 py-2">
            {g === "Gugel oder Maske" ? (draft.hood === "maske" ? "Maske" : "Gugel") : g}
          </li>
        ))}
        {stage.gear.map((g) => (
          <li key={g} className="rounded-sm border border-border bg-raised px-3 py-2">
            {g}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" onClick={rollMoney}>
          <Dices className="size-4" />
          Vermögen würfeln
        </Button>
        <span className="text-sm tabular-nums">
          {draft.money.crowns} GK · {draft.money.shillings} S · {draft.money.pennies} G
        </span>
        {status ? (
          <span className="text-xs text-muted">
            Formel {status.tier} {status.rank}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function StepDetails() {
  const draft = useChargen((s) => s.draft);
  const setName = useChargen((s) => s.setName);
  const roll = useChargen((s) => s.rollDetails);
  const setDetail = useChargen((s) => s.setDetail);
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Details</h2>
      <Button variant="outline" onClick={roll}>
        <Dices className="size-4" />
        Name, Alter, Haar, Augen, Größe würfeln
      </Button>
      <label className="block text-sm">
        Name
        <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm">
          Alter
          <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.age ?? ""} onChange={(e) => setDetail({ age: Number(e.target.value) || null })} />
        </label>
        <label className="text-sm">
          Größe cm
          <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.heightCm ?? ""} onChange={(e) => setDetail({ heightCm: Number(e.target.value) || null })} />
        </label>
        <label className="text-sm">
          Augen
          <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.eyes} onChange={(e) => setDetail({ eyes: e.target.value })} />
        </label>
        <label className="text-sm">
          Haar
          <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.hair} onChange={(e) => setDetail({ hair: e.target.value })} />
        </label>
        <label className="text-sm sm:col-span-2">
          Bart (Mensch/Zwerg, optional)
          <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.bart} onChange={(e) => setDetail({ bart: e.target.value })} />
        </label>
      </div>
      <label className="block text-sm">
        Kurzfristiges Ziel (+50 EP)
        <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.shortGoal} onChange={(e) => setDetail({ shortGoal: e.target.value })} placeholder="die Miete" />
      </label>
      <label className="block text-sm">
        Langfristiges Ziel (+500 EP)
        <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.longGoal} onChange={(e) => setDetail({ longGoal: e.target.value })} placeholder="eigenes Haus" />
      </label>
      <label className="block text-sm">
        Geheim (Ruchlose Pläne, optional)
        <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.secretGoal} onChange={(e) => setDetail({ secretGoal: e.target.value })} />
      </label>
    </div>
  );
}

function StepGruppe() {
  const draft = useChargen((s) => s.draft);
  const setDetail = useChargen((s) => s.setDetail);
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Gruppe</h2>
      <p className="text-sm text-muted">Darf leer bleiben — der SL führt euch zusammen. Persönlich ≠ Gruppe.</p>
      <label className="block text-sm">
        Name der Gruppe
        <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.groupName} onChange={(e) => setDetail({ groupName: e.target.value })} />
      </label>
      <label className="block text-sm">
        Wie kennt ihr euch?
        <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.howMet} onChange={(e) => setDetail({ howMet: e.target.value })} placeholder="gleiche Gasse · Flussbarke · Tempel" />
      </label>
      <label className="block text-sm">
        Kurzfristiges Gruppenziel
        <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.groupShort} onChange={(e) => setDetail({ groupShort: e.target.value })} />
      </label>
      <label className="block text-sm">
        Langfristiges Gruppenziel
        <input className="mt-1 w-full rounded-sm border border-border bg-bg px-3 py-2" value={draft.groupLong} onChange={(e) => setDetail({ groupLong: e.target.value })} />
      </label>
    </div>
  );
}

function StepLeben() {
  const draft = useChargen((s) => s.draft);
  const setAnswer = useChargen((s) => s.setAnswer);
  const setDetail = useChargen((s) => s.setDetail);
  const filled = Object.values(draft.answers).filter((v) => v.trim()).length;
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Zum Leben erwecken</h2>
      <p className="text-sm text-muted">Drei von zehn reichen. Herkunft: Ort wählen, nicht raten.</p>
      <HerkunftMap
        value={draft.herkunft || draft.answers.woher || ""}
        onChange={(_id, label) => {
          setDetail({ herkunft: label });
          setAnswer("woher", label);
        }}
      />
      <div className="flex flex-wrap gap-1">
        {GOETTER.map((g) => (
          <button
            key={g}
            type="button"
            className={cn("min-h-9 rounded-sm border px-2 text-xs", draft.gott === g ? "border-primary bg-raised" : "border-border")}
            onClick={() => {
              setDetail({ gott: g });
              setAnswer("glaube", g);
            }}
          >
            {g}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted">{filled} / 10 beantwortet · weiter ab 3</p>
      {LIFE_QUESTIONS.filter((q) => q.id !== "woher").map((q) => (
        <label key={q.id} className="block text-sm">
          {q.q}
          <textarea
            className="mt-1 min-h-16 w-full rounded-sm border border-border bg-bg px-3 py-2"
            value={draft.answers[q.id] ?? ""}
            onChange={(e) => setAnswer(q.id, e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

function StepXp() {
  const draft = useChargen((s) => s.draft);
  const spend = useChargen((s) => s.spendXp);
  const setAdv = useChargen((s) => s.setCareerAdv);
  const bump = useChargen((s) => s.bumpAdvance);
  const ep = bonusEp(draft);
  const career = draft.careerId ? CAREER_BY_ID[draft.careerId] : null;
  const stage = career ? stageOf(career) : null;
  const plus = stage?.plus ?? [];
  const skills = stage?.skills.length ? stage.skills : draft.manualSkills;

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl">Steigerungen</h2>
      <p className="text-sm text-muted">Optional. Nur diese Stufe. Sparen heißt: nach der ersten Szene weißt du, was die Gruppe würfelt.</p>
      <p className="font-display text-2xl tabular-nums">{ep} EP übrig</p>
      <p className="text-xs text-muted">
        Volk {draft.speciesEp} · Karriere {draft.careerEp} · Werte {draft.attrEp} · ausgegeben {draft.spentXp}
      </p>
      <div className="flex flex-wrap gap-2">
        {plus.map((a) => (
          <Button
            key={a}
            variant="outline"
            size="sm"
            disabled={ep < 25}
            onClick={() => {
              bump(a, 1);
              spend(draft.spentXp + 25);
            }}
          >
            {a} +1 (25)
          </Button>
        ))}
        {skills.map((id) => (
          <Button
            key={id}
            variant="outline"
            size="sm"
            disabled={ep < 10 || (draft.careerAdv[id] ?? 0) >= 10}
            onClick={() => {
              setAdv(id, (draft.careerAdv[id] ?? 0) + 1);
              spend(draft.spentXp + 10);
            }}
          >
            {SKILL_BY_ID[id]?.label ?? id} +1 (10)
          </Button>
        ))}
      </div>
    </div>
  );
}

