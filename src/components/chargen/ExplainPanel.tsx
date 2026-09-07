import { useState } from "react";
import { BookOpen, X } from "lucide-react";
import { ERKLAERUNG_BY_ID } from "@/lib/wfrp/erklaerungen";
import { STATIONS, type StationId } from "@/lib/wfrp/stations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ExplainPanel({
  station,
  open,
  onClose,
  className,
}: {
  station: StationId;
  open?: boolean;
  onClose?: () => void;
  className?: string;
}) {
  const ids = STATIONS.find((s) => s.id === station)?.explain ?? [];
  const [tab, setTab] = useState(0);
  const current = ERKLAERUNG_BY_ID[ids[Math.min(tab, ids.length - 1)] ?? ""];
  if (!current) return null;

  return (
    <aside className={cn("flex flex-col gap-3", className)} hidden={open === false}>
      <div className="flex items-center justify-between gap-2">
        <p className="font-display text-xs uppercase tracking-[0.18em] text-muted">Erklärung</p>
        {onClose ? (
          <button type="button" className="min-h-11 px-2 text-muted" onClick={onClose} aria-label="Schließen">
            <X className="size-4" />
          </button>
        ) : null}
      </div>
      {ids.length > 1 ? (
        <div className="flex flex-wrap gap-1">
          {ids.map((id, i) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(i)}
              className={cn(
                "min-h-9 rounded-sm px-2 text-xs",
                i === tab ? "bg-primary text-primary-fg" : "bg-raised text-muted",
              )}
            >
              {ERKLAERUNG_BY_ID[id]?.title.split("—")[0] ?? id}
            </button>
          ))}
        </div>
      ) : null}
      <h3 className="font-display text-lg leading-snug">{current.title}</h3>
      <div className="space-y-3 text-sm leading-relaxed text-fg">
        {current.paras.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
    </aside>
  );
}

export function ExplainTrigger({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="outline" size="sm" className="lg:hidden" onClick={onClick}>
      <BookOpen className="size-4" />
      Erklären
    </Button>
  );
}
