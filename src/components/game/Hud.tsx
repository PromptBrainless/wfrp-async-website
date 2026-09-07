import { useEffect, useState } from "react";
import { useTisch } from "@/lib/wfrp/store";
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
  const greta = useTisch((s) => s.campaign.characters.greta);
  const scene = useTisch((s) => s.campaign.scenes[s.campaign.currentSceneId]);
  const ends = useTisch((s) => s.campaign.countdownEndsAt);
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setTick((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  const remain = Math.max(0, ends - Date.now());
  const mm = String(Math.floor(remain / 60000)).padStart(2, "0");
  const ss = String(Math.floor((remain % 60000) / 1000)).padStart(2, "0");
  const drawn = greta.inventory.find((i) => i.weapon)?.weapon?.drawn;
  const cond = greta.conditions.map((c) => `${c.id}${c.stacks > 1 ? `×${c.stacks}` : ""}`).join(", ") || "—";

  return (
    <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
      <Chip label="LP" value={`${greta.wounds.current}/${greta.wounds.max}`} warn={greta.wounds.current < greta.wounds.max} />
      <Chip label="Vorteile" value={greta.advantage} />
      <Chip label="Geld" value={formatMoney(greta.money)} />
      <Chip label="Glück" value={`${greta.fortune}/${greta.fate}`} />
      <Chip label="Mut" value={`${greta.resolve}/${greta.resilience}`} />
      <Chip label="Waffe" value={drawn ? "Dolch" : "verborgen"} />
      <Chip label="Zustände" value={cond} warn={greta.conditions.length > 0} />
      <Chip label="Frist" value={`${mm}:${ss}`} />
      <p className="col-span-2 text-xs text-muted sm:col-span-4 lg:col-span-8">
        {scene.locationName} · {scene.mode} · {greta.status.tier} {greta.status.rank}
      </p>
    </section>
  );
}
