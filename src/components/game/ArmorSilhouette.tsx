import { cn } from "@/lib/utils";

const ZONES: { id: string; label: string; range: string; className: string }[] = [
  { id: "kopf", label: "Kopf", range: "01–09", className: "col-start-2 row-start-1" },
  { id: "arm_r", label: "Waffenarm", range: "10–24", className: "col-start-1 row-start-2" },
  { id: "arm_l", label: "Schildarm", range: "25–44", className: "col-start-3 row-start-2" },
  { id: "koerper", label: "Körper", range: "45–79", className: "col-start-2 row-start-2" },
  { id: "bein_r", label: "Bein", range: "80–89", className: "col-start-1 row-start-3" },
  { id: "bein_l", label: "Bein", range: "90–00", className: "col-start-3 row-start-3" },
];

export function ArmorSilhouette({
  rp = { kopf: 0, arm_r: 0, arm_l: 0, koerper: 0, bein_r: 0, bein_l: 0, schild: 0 },
}: {
  rp?: Record<string, number>;
}) {
  return (
    <div>
      <h2 className="font-display text-sm uppercase tracking-widest text-muted">Rüstung je Zone</h2>
      <p className="mt-1 text-xs text-muted">Silhouette S. 45. Start 0, außer getragene Rüstung. Wird im Spiel gefüllt.</p>
      <div className="mt-3 grid grid-cols-3 grid-rows-3 gap-1">
        {ZONES.map((z) => (
          <div
            key={z.id}
            className={cn(
              "flex min-h-16 flex-col items-center justify-center rounded-sm border border-border bg-raised px-2 py-2 text-center",
              z.className,
            )}
          >
            <span className="font-display text-xs uppercase tracking-widest text-muted">{z.label}</span>
            <span className="font-display text-xl tabular-nums">{rp[z.id] ?? 0}</span>
            <span className="text-[10px] text-faint">{z.range}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">Schild RP {rp.schild ?? 0}</p>
    </div>
  );
}
