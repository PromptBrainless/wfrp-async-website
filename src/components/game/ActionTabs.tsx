import { useMemo, useState } from "react";
import { ActionCard } from "./ActionCard";
import { filterCatalog } from "@/lib/wfrp/grey";
import { useTisch } from "@/lib/wfrp/store";
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
  const selected = useTisch((s) => s.selectedAction);
  const select = useTisch((s) => s.selectAction);
  const greta = campaign.characters.greta;
  const scene = campaign.scenes[campaign.currentSceneId];
  const [tab, setTab] = useState<ActionTab>("sozial");

  const views = useMemo(
    () =>
      filterCatalog(greta, scene, {
        fortuneOpen: campaign.phase === "fortune",
        ownRollOpen: campaign.lastRoll?.characterId === "greta" && campaign.phase === "fortune",
      }),
    [greta, scene, campaign.phase, campaign.lastRoll],
  );

  const shown = views.filter((v) => v.def.tab === tab);

  return (
    <section>
      <div className="mb-3 flex gap-1 rounded-md bg-raised p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "min-h-10 flex-1 rounded-sm text-xs tracking-wide",
              tab === t.id ? "bg-surface text-fg" : "text-muted",
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
