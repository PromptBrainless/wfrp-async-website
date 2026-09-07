import type { ActionView } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";

const COST: Record<string, string> = { F: "Frei", B: "Bewegung", H: "Handlung", BH: "Beides" };

export function ActionCard({
  view,
  selected,
  onSelect,
}: {
  view: ActionView;
  selected: boolean;
  onSelect: () => void;
}) {
  const { def, available, reason } = view;
  return (
    <button
      type="button"
      disabled={!available}
      onClick={onSelect}
      className={cn(
        "flex min-h-24 flex-col items-start rounded-lg border p-4 text-left transition-opacity duration-150",
        available ? "border-border bg-raised" : "border-border bg-surface opacity-45",
        selected && available && "border-fg",
      )}
    >
      <div className="flex w-full items-center justify-between gap-2">
        <span className="font-display text-sm">{def.label}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{COST[def.cost]}</span>
      </div>
      <p className="mt-2 text-xs leading-snug text-muted">{def.summary}</p>
      {reason ? <p className="mt-2 text-xs text-primary">{reason}</p> : null}
    </button>
  );
}
