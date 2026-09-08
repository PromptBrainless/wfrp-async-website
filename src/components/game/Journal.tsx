import { Lock, Unlock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useTisch } from "@/lib/wfrp/store";
import { cn } from "@/lib/utils";

export function Journal() {
  const campaign = useTisch((s) => s.campaign);
  const role = useTisch((s) => s.role);
  const openId = useTisch((s) => s.selectedJournalId);
  const selectJournal = useTisch((s) => s.selectJournal);
  const shareJournal = useTisch((s) => s.shareJournal);
  const scene = campaign.scenes[campaign.currentSceneId];
  const sl = role === "sl";
  const cards = scene.journal.filter((c) => c.shared || sl);
  const open = cards.find((c) => c.id === openId) ?? cards[0];

  return (
    <section className="blatt-pad">
      <p className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Journal</p>
      <h2 className="font-display text-lg text-ink">Blätter</h2>
      <ul className="mt-3 space-y-1">
        {cards.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={cn("journal-item", open?.id === c.id && "is-on")}
              onClick={() => selectJournal(c.id)}
            >
              <span>{c.title}</span>
              {c.shared ? <Unlock className="size-3.5 text-ink-faint" /> : <Lock className="size-3.5 text-ink-faint" />}
            </button>
          </li>
        ))}
      </ul>
      {open ? (
        <article className="mt-3 border-t border-ink/15 pt-3">
          <p className="font-display text-sm text-ink">{open.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{open.body}</p>
          {open.kind === "bogen" && open.characterId && campaign.characters[open.characterId]?.kind === "pc" ? (
            <Button asChild variant="ink" size="sm" className="mt-3">
              <Link to="/bogen">Zum Bogen</Link>
            </Button>
          ) : null}
          {sl && !open.shared ? (
            <Button size="sm" variant="wax" className="mt-3" onClick={() => shareJournal(open.id)}>
              Freigeben
            </Button>
          ) : null}
        </article>
      ) : (
        <p className="mt-3 text-sm text-ink-muted">Nichts freigegeben.</p>
      )}
    </section>
  );
}
