import { Check, Hourglass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTisch } from "@/lib/wfrp/store";
import type { TurnPhase } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";

const PHASES: { id: TurnPhase; label: string }[] = [
  { id: "bewegung", label: "Bewegung" },
  { id: "schuss", label: "Schuss" },
  { id: "nahkampf", label: "Nahkampf" },
  { id: "magie", label: "Magie" },
];

export function Tracker() {
  const campaign = useTisch((s) => s.campaign);
  const role = useTisch((s) => s.role);
  const selected = useTisch((s) => s.selectedTokenId);
  const selectToken = useTisch((s) => s.selectToken);
  const markActed = useTisch((s) => s.markActed);
  const nextPhase = useTisch((s) => s.nextPhase);
  const nextRound = useTisch((s) => s.nextRound);
  const rollInitiative = useTisch((s) => s.rollInitiative);
  const scene = campaign.scenes[campaign.currentSceneId];
  const sl = role === "sl";
  const combat = scene.combat;
  const intentions = campaign.intentions;

  const rows = (combat?.initiative?.length ? combat.initiative : scene.present).map((id) => campaign.characters[id]).filter(Boolean);

  return (
    <section className="blatt-pad">
      <header className="flex items-start justify-between gap-2">
        <div>
          <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">
            {combat ? "Initiative" : "Szene"}
          </p>
          <h2 className="font-display text-lg text-ink">
            {combat ? `Runde ${combat.round}` : "Checkliste"}
          </h2>
        </div>
        {combat ? <Hourglass className="size-4 text-ink-faint" /> : null}
      </header>

      {combat ? (
        <ol className="phase-row" aria-label="Zugfolge">
          {PHASES.map((p) => (
            <li key={p.id} className={cn(combat.turnPhase === p.id && "is-now")}>
              {p.label}
            </li>
          ))}
        </ol>
      ) : null}

      <ol className="track-list">
        {rows.map((ch) => {
          const acted = combat?.acted.includes(ch.id);
          const hasIntent = Boolean(intentions[ch.id]);
          const init = combat?.initRoll?.[ch.id];
          return (
            <li key={ch.id}>
              <button
                type="button"
                className={cn("track-row", selected === ch.id && "is-on")}
                onClick={() => selectToken(ch.id)}
              >
                <img src={ch.portrait} alt="" />
                <span className="min-w-0 flex-1 text-left">
                  <span className="block truncate font-display text-sm text-ink">{ch.name}</span>
                  <span className="block text-[11px] text-ink-muted">
                    I {ch.attributes.I}
                    {init != null ? ` · ${init}` : ""}
                    {ch.advantage ? ` · V ${ch.advantage}` : ""}
                    {ch.conditions.length ? ` · ${ch.conditions.map((c) => c.id).join(", ")}` : ""}
                  </span>
                </span>
                <span className="track-flags">
                  {hasIntent ? <em>Intention</em> : null}
                  {acted ? <Check className="size-4 text-ok" /> : null}
                </span>
              </button>
              {sl && combat ? (
                <Button size="sm" variant="quiet" onClick={() => markActed(ch.id)} disabled={acted}>
                  Gehandelt
                </Button>
              ) : null}
            </li>
          );
        })}
      </ol>

      {combat && sl ? (
        <div className="mt-3 grid grid-cols-3 gap-1">
          <Button size="sm" variant="ink" onClick={nextPhase}>
            Phase
          </Button>
          <Button size="sm" variant="ink" onClick={nextRound}>
            Runde
          </Button>
          <Button size="sm" variant="ink" onClick={rollInitiative}>
            I+W10
          </Button>
        </div>
      ) : null}

      {!combat ? (
        <ul className="mt-3 space-y-1 text-xs text-ink-muted">
          {scene.board.pins
            .filter((p) => p.revealed || sl)
            .map((p) => (
              <li key={p.id}>
                Nadel: {p.label}
                {!p.revealed ? " (SL)" : ""}
              </li>
            ))}
          {scene.events.map((e) => (
            <li key={e.id}>
              {e.fired ? "Ereignis ausgelöst" : "Vorbereitet"}: {e.label}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-xs text-ink-muted">
          Distanz {combat.distanceM} m
          {combat.engaged ? " · im Griff" : ""}
        </p>
      )}
    </section>
  );
}
