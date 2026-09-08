import { useMemo, useState } from "react";
import { ActionCard } from "./ActionCard";
import { filterCatalog } from "@/lib/wfrp/grey";
import { useTisch } from "@/lib/wfrp/store";
import { activePc } from "@/lib/wfrp/seats";
import type { ActionTab } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";

const TABS: { id: ActionTab; label: string }[] = [
  { id: "sozial", label: "Sozial" },
  { id: "bewegung", label: "Bewegung" },
  { id: "kampf", label: "Kampf" },
  { id: "ressourcen", label: "Ressourcen" },
];

export function ActionTabs() {
  const campaign = useTisch((s) => s.campaign);
  const viewId = useTisch((s) => s.viewId);
  const selected = useTisch((s) => s.selectedAction);
  const select = useTisch((s) => s.selectAction);
  const actor = activePc(campaign, viewId);
  const scene = campaign.scenes[campaign.currentSceneId];
  const [tab, setTab] = useState<ActionTab>("sozial");

  const views = useMemo(
    () =>
      actor
        ? filterCatalog(actor, scene, {
            fortuneOpen: campaign.phase === "fortune",
            ownRollOpen: campaign.lastRoll?.characterId === actor.id && campaign.phase === "fortune",
          })
        : [],
    [actor, scene, campaign.phase, campaign.lastRoll],
  );

  const shown = views.filter((v) => v.def.tab === tab);

  return (
    <section>
      <div className="mb-3 flex gap-1 rounded-md bg-ink/5 p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "min-h-10 flex-1 rounded-sm text-xs tracking-wide",
              tab === t.id ? "bg-paper text-ink" : "text-ink-muted",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {shown.map((v) => (
          <ActionCard
            key={v.def.id}
            view={v}
            selected={selected === v.def.id}
            onSelect={() => select(v.def.id)}
          />
        ))}
      </div>
    </section>
  );
}
