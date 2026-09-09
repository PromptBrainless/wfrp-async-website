import { useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { draftToCharacter, rollFullDraft } from "@/lib/wfrp/chargen";
import { CAREER_BY_ID, SPECIES } from "@/lib/wfrp/chargen-data";
import { useTisch } from "@/lib/wfrp/store";
import { isSeatEmpty, SEAT_IDS } from "@/lib/wfrp/seats";

export const Route = createFileRoute("/karte")({ component: KartePage });

function KartePage() {
  const [draft, setDraft] = useState(() => rollFullDraft());
  const occupySeat = useTisch((s) => s.occupySeat);
  const campaign = useTisch((s) => s.campaign);
  const navigate = useNavigate();
  const career = draft.careerId ? CAREER_BY_ID[draft.careerId] : null;
  const species = draft.speciesId ? SPECIES[draft.speciesId] : null;
  const preview = useMemo(() => draftToCharacter(draft), [draft]);

  function sit(seatId: string) {
    const c = draftToCharacter(draft);
    if (!c) return;
    occupySeat(seatId, c);
    void navigate({ to: "/tisch" });
  }

  return (
    <main className="desk flex min-h-dvh items-center justify-center px-4 py-10">
      <img src="/images/desk.jpg" alt="" className="desk-photo" width={1792} height={1008} />
      <div className="desk-veil" aria-hidden />
      <article className="blatt">
        <div className="blatt-inner">
          <Link to="/" className="font-display text-sm text-ink-faint">
            Die Frist
          </Link>
          <h1 className="mt-4 font-display text-3xl text-ink">Neue Karte</h1>
          <p className="mt-2 text-sm text-ink-muted">
            Das Buch würfelt Volk, Karriere und Werte für dich. Du gibst dem Ergebnis nur noch einen Namen — das Gesicht hinter den Zahlen.
          </p>

          <dl className="mt-6 grid gap-2 text-sm text-ink">
            <div>
              <dt className="text-ink-faint">Volk</dt>
              <dd>{species?.name ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Karriere</dt>
              <dd>{career?.name ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-ink-faint">LP</dt>
              <dd className="tabular-nums">{preview ? `${preview.wounds.max}` : "—"}</dd>
            </div>
          </dl>

          <Button className="mt-4" variant="quiet" size="sm" onClick={() => setDraft(rollFullDraft())}>
            Noch einmal würfeln
          </Button>

          <label className="mt-6 block text-sm text-ink">
            Name
            <input
              className="mt-1 h-11 w-full rounded-sm border border-ink/20 bg-paper px-3"
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
            />
          </label>
          <label className="mt-3 block text-sm text-ink">
            Herkunft
            <input
              className="mt-1 h-11 w-full rounded-sm border border-ink/20 bg-paper px-3"
              value={draft.herkunft}
              onChange={(e) => setDraft({ ...draft, herkunft: e.target.value })}
            />
          </label>
          <label className="mt-3 block text-sm text-ink">
            Gott
            <input
              className="mt-1 h-11 w-full rounded-sm border border-ink/20 bg-paper px-3"
              value={draft.gott}
              onChange={(e) => setDraft({ ...draft, gott: e.target.value })}
            />
          </label>

          <p className="mt-8 font-display text-[11px] uppercase tracking-mark text-ink-faint">Welchen Platz nimmst du?</p>
          <ul className="mt-3 grid gap-2">
            {SEAT_IDS.map((id) => {
              const ch = campaign.characters[id];
              return (
                <li key={id}>
                  <button
                    type="button"
                    disabled={!draft.name.trim()}
                    className="w-full rounded-sm border border-ink/20 px-3 py-2 text-left text-sm disabled:opacity-40"
                    onClick={() => sit(id)}
                  >
                    {ch && !isSeatEmpty(ch) ? `Statt ${ch.name}` : "Freier Platz"}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </main>
  );
}
