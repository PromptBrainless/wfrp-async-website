import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/wfrp/money";
import { useTisch } from "@/lib/wfrp/store";
import { Journal } from "./Journal";

export function ZustandPane() {
  const campaign = useTisch((s) => s.campaign);
  const viewId = useTisch((s) => s.viewId);
  const who = viewId === "welt" ? null : campaign.characters[viewId];
  const notes = campaign.journalNotes;
  const drawn = who?.inventory.find((i) => i.weapon)?.weapon?.drawn;
  const recent = [...notes].reverse().slice(0, 6);

  if (!who) {
    return (
      <div className="zustand">
        <p className="font-display text-lg text-ink">Kein Bogen</p>
        <p className="mt-2 text-sm text-ink-muted">Unten wählen, wessen Zeile als nächstes ins Leben geht. Dann liegt hier der Bogen.</p>
        <Journal />
      </div>
    );
  }

  return (
    <div className="zustand">
      <section className="zustand-bogen">
        <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Zustand</p>
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
        <p className="mt-3 text-sm text-ink-muted">
          Inventar: {who.inventory.map((i) => i.name).join(", ") || "leer"}
        </p>
        <Button asChild variant="ink" size="sm" className="mt-3">
          <Link to="/bogen">Voller Bogen</Link>
        </Button>
      </section>

      <section className="mt-4">
        <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Journal schreibt mit</p>
        <ul className="mt-2 space-y-2">
          {recent.map((n) => (
            <li key={n.id} className="border-t border-ink/10 pt-2">
              <p className="font-display text-sm text-ink">{n.title}</p>
              <p className="text-sm leading-relaxed text-ink-muted">{n.body}</p>
              {n.npcNames.length ? <p className="mt-1 text-xs text-ink-faint">{n.npcNames.join(" · ")}</p> : null}
              {n.openQuestion ? <p className="mt-1 text-xs text-primary">{n.openQuestion}</p> : null}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-4 border-t border-ink/15 pt-2">
        <Journal />
      </div>
    </div>
  );
}
