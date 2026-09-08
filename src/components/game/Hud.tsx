import { useEffect, useState } from "react";
import { useTisch } from "@/lib/wfrp/store";
import { activePc, isSeatEmpty } from "@/lib/wfrp/seats";
import { formatMoney } from "@/lib/wfrp/money";
import { cn } from "@/lib/utils";

function Chip({ label, value, warn }: { label: string; value: string | number; warn?: boolean }) {
  return (
    <div className="rounded-sm border border-border bg-raised px-3 py-2">
      <div className="font-display text-[10px] uppercase tracking-[0.14em] text-muted">{label}</div>
      <div className={cn("font-mono text-base tabular-nums", warn ? "text-primary" : "text-fg")}>{value}</div>
    </div>
  );
}

export function Hud() {
  const campaign = useTisch((s) => s.campaign);
  const viewId = useTisch((s) => s.viewId);
  const pc = activePc(campaign, viewId);
  const scene = campaign.scenes[campaign.currentSceneId];
  const ends = campaign.countdownEndsAt;
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setTick((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  const remain = Math.max(0, ends - Date.now());
  const mm = String(Math.floor(remain / 60000)).padStart(2, "0");
  const ss = String(Math.floor((remain % 60000) / 1000)).padStart(2, "0");
  if (!pc || isSeatEmpty(pc)) {
    return (
      <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        <p className="col-span-2 text-sm text-muted sm:col-span-4 lg:col-span-8">
          Fünf Plätze. Noch leer. Erst einen Bogen anlegen.
        </p>
        <Chip label="Frist" value={`${mm}:${ss}`} />
      </section>
    );
  }
  const drawn = pc.inventory.find((i) => i.weapon)?.weapon?.drawn;
  const cond = pc.conditions.map((c) => `${c.id}${c.stacks > 1 ? `×${c.stacks}` : ""}`).join(", ") || "—";

  return (
    <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
      <Chip label="LP" value={`${pc.wounds.current}/${pc.wounds.max}`} warn={pc.wounds.current < pc.wounds.max} />
      <Chip label="Vorteile" value={pc.advantage} />
      <Chip label="Geld" value={formatMoney(pc.money)} />
      <Chip label="Glück" value={`${pc.fortune}/${pc.fate}`} />
      <Chip label="Mut" value={`${pc.resolve}/${pc.resilience}`} />
      <Chip label="Waffe" value={drawn ? "geführt" : "verborgen"} />
      <Chip label="Zustände" value={cond} warn={pc.conditions.length > 0} />
      <Chip label="Frist" value={`${mm}:${ss}`} />
      <p className="col-span-2 text-xs text-muted sm:col-span-4 lg:col-span-8">
        {pc.name} · {scene.locationName} · {scene.mode} · {pc.status.tier} {pc.status.rank}
      </p>
    </section>
  );
}
