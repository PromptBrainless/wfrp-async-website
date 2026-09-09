import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/wfrp/money";
import { useTisch } from "@/lib/wfrp/store";

export function ZustandPane() {
  const campaign = useTisch((s) => s.campaign);
  const viewId = useTisch((s) => s.viewId);
  const who = viewId === "welt" ? null : campaign.characters[viewId];
  const drawn = who?.inventory.find((i) => i.weapon)?.weapon?.drawn;

  if (!who) {
    return (
      <div className="play-pane-pad">
        <p className="font-display text-lg text-ink">Kein Bogen</p>
        <p className="mt-2 text-sm text-ink-muted">Oben einen Namen wählen. Dann liegt hier der Bogen.</p>
      </div>
    );
  }

  return (
    <div className="play-pane-pad">
      <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Blatt</p>
      <h2 className="font-display text-lg text-ink">{who.name}</h2>
      <p className="text-sm text-ink-muted">
        {who.career} · {who.status.tier} {who.status.rank}
      </p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div>
          <dt className="text-ink-faint">LP</dt>
          <dd className="tabular-nums">
            {who.wounds.current}/{who.wounds.max}
          </dd>
        </div>
        <div>
          <dt className="text-ink-faint">Geld</dt>
          <dd>{formatMoney(who.money)}</dd>
        </div>
        <div>
          <dt className="text-ink-faint">Glück</dt>
          <dd className="tabular-nums">
            {who.fortune}/{who.fate}
          </dd>
        </div>
        <div>
          <dt className="text-ink-faint">Mut</dt>
          <dd className="tabular-nums">
            {who.resolve}/{who.resilience}
          </dd>
        </div>
        <div>
          <dt className="text-ink-faint">Waffe</dt>
          <dd>{drawn ? "Dolch gezogen" : "verborgen"}</dd>
        </div>
        <div>
          <dt className="text-ink-faint">Zustände</dt>
          <dd>{who.conditions.length ? who.conditions.map((c) => c.id).join(", ") : "—"}</dd>
        </div>
      </dl>
      <p className="mt-3 text-sm text-ink-muted">Talente: {who.talents.join(", ") || "—"}</p>
      <p className="mt-2 text-sm text-ink-muted">Inventar: {who.inventory.map((i) => i.name).join(", ") || "leer"}</p>
      <Button asChild variant="ink" size="sm" className="mt-3">
        <Link to="/bogen">Voller Bogen</Link>
      </Button>
    </div>
  );
}
