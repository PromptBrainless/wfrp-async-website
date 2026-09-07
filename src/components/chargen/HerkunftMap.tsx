import { HERKUNFT } from "@/lib/wfrp/stations";
import { cn } from "@/lib/utils";

export function HerkunftMap({
  value,
  onChange,
}: {
  value: string;
  onChange: (id: string, label: string) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted">
        Wer die Welt nicht kennt, wählt einen Ort. Keine leere Zeile.
      </p>
      <div className="relative min-h-56 overflow-hidden rounded-md border border-border bg-raised">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-border" aria-hidden="true">
          <path d="M42 8 C46 28 50 40 52 58 C54 72 58 88 62 98" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="54" y="18" className="fill-muted" fontSize="4">
            Reik
          </text>
        </svg>
        {HERKUNFT.map((h) => {
          const on = value === h.label || value === h.id;
          return (
            <button
              key={h.id}
              type="button"
              onClick={() => onChange(h.id, h.label)}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              className={cn(
                "absolute min-h-11 -translate-x-1/2 -translate-y-1/2 rounded-sm border px-2 py-1 text-left text-xs shadow-sm",
                on ? "border-primary bg-primary text-primary-fg" : "border-border bg-bg text-fg",
              )}
            >
              <span className="block font-display">{h.label}</span>
              <span className={cn("block", on ? "text-primary-fg/80" : "text-muted")}>{h.region}</span>
            </button>
          );
        })}
      </div>
      <ul className="grid gap-1 sm:grid-cols-2">
        {HERKUNFT.map((h) => {
          const on = value === h.label || value === h.id;
          return (
            <li key={h.id}>
              <button
                type="button"
                onClick={() => onChange(h.id, h.label)}
                className={cn(
                  "min-h-11 w-full rounded-sm border px-3 py-2 text-left text-sm",
                  on ? "border-primary bg-raised" : "border-border",
                )}
              >
                <span className="font-display">{h.label}</span>
                <span className="mt-0.5 block text-xs text-muted">{h.note}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
