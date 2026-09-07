import { useState } from "react";
import { Dices } from "lucide-react";
import { Button } from "@/components/ui/button";
import { d100 } from "@/lib/wfrp/chargen";
import { cn } from "@/lib/utils";

export function W100Visual({ target = 65 }: { target?: number }) {
  const [roll, setRoll] = useState<number | null>(null);
  const success = roll != null && (roll <= 5 || (roll <= target && roll < 96));
  const fumble = roll != null && roll >= 96;
  const crit = roll != null && roll <= 5;

  return (
    <section className="space-y-3 rounded-md border border-border bg-raised p-3">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-muted">W100</h3>
          <p className="mt-1 text-sm text-muted">
            Zwei W10. Ziel {target} — {target} von 100. 01–05 immer, 96–00 Patzer.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setRoll(d100())}>
          <Dices className="size-4" />
          Probe
        </Button>
      </div>
      <div className="grid grid-cols-10 gap-px" aria-hidden="true">
        {Array.from({ length: 100 }, (_, i) => {
          const n = i + 1;
          const inTarget = n <= target;
          const isRoll = roll === n;
          return (
            <span
              key={n}
              className={cn(
                "aspect-square rounded-[2px]",
                isRoll && success && "bg-ok",
                isRoll && fumble && "bg-primary",
                isRoll && !success && !fumble && "bg-warn",
                !isRoll && inTarget && "bg-fg/20",
                !isRoll && !inTarget && "bg-bg",
              )}
            />
          );
        })}
      </div>
      {roll != null ? (
        <p className="font-display text-sm tabular-nums">
          Wurf {roll}
          {crit ? " · immer Erfolg" : fumble ? " · Patzer" : success ? " · Erfolg" : " · misslungen"}
        </p>
      ) : (
        <p className="text-xs text-faint">Beispiel: Feilschen 45, durchschnittlich +20 → Ziel 65.</p>
      )}
    </section>
  );
}
