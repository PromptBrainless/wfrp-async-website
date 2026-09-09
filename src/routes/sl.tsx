import { createFileRoute, Link } from "@tanstack/react-router";
import { GROUPS, familyName, householdsAt } from "@/lib/wfrp/drosselau-leute";
import {
  DROSSELAU,
  DROSSELAU_HOUSE_COUNT,
  DROSSELAU_SCENE_COUNT,
  QUARTIERS,
  drosselauTriggers,
  streetsOf,
} from "@/lib/wfrp/drosselau";

export const Route = createFileRoute("/sl")({ component: SlPage });

function neighborNames(ids: string[]) {
  return ids
    .map((id) => DROSSELAU.streets.find((s) => s.id === id)?.name ?? id)
    .join(" · ");
}

function SlPage() {
  const triggers = drosselauTriggers();

  return (
    <main className="desk flex min-h-dvh items-center justify-center px-4 py-10">
      <img src="/images/desk.jpg" alt="" className="desk-photo" width={1792} height={1008} />
      <div className="desk-veil" aria-hidden />
      <article className="blatt max-w-2xl">
        <div className="blatt-inner">
          <p className="font-display text-xs uppercase tracking-mark text-ink-faint">Spielleiter · Kampagne 1</p>
          <h1 className="mt-4 font-display text-4xl text-ink">{DROSSELAU.name}</h1>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-muted">
            Stadt, Viertel, Gasse, Haus, Haushalt — {DROSSELAU_HOUSE_COUNT} Adressen in {QUARTIERS.length} Vierteln.{" "}
            {DROSSELAU_SCENE_COUNT} Szenen liegen bereit. Die Torstraße ist offen. {GROUPS.length} Gruppen und 42
            Stammbäume geben dir, was du brauchst, um jede Tür mit einem Namen zu füllen.
          </p>
          <ul className="mt-6 space-y-1 text-sm text-ink">
            <li>Karten: Tick, Track, Truck, Hanni, Nanni</li>
            <li>Viertel: {QUARTIERS.length}</li>
            <li>Geöffnet: Torstraße — der erste Zug liegt bei den fünf</li>
          </ul>

          <h2 className="mt-10 font-display text-xl text-ink">Gruppen</h2>
          <ol className="mt-3 grid gap-2">
            {GROUPS.map((g) => (
              <li key={g.id} className="border border-ink/15 bg-paper/70 px-3 py-2">
                <p className="font-display text-ink">{g.name}</p>
                <p className="text-sm text-ink-muted">{g.note}</p>
              </li>
            ))}
          </ol>

          {QUARTIERS.map((q) => {
            const streets = streetsOf(q.id);
            const houses = streets.reduce((n, s) => n + s.houses.length, 0);
            const qTriggers = triggers.filter((t) => t.quartier === q.name);
            return (
              <section key={q.id} className="mt-10">
                <h2 className="font-display text-xl text-ink">{q.name}</h2>
                <p className="text-sm text-ink-faint">
                  {q.note} · {streets.length} Gassen · {houses} Häuser
                  {qTriggers.length ? ` · ${qTriggers.length} Trigger` : ""}
                </p>
                <ol className="mt-3 grid gap-3">
                  {streets.map((street) => (
                    <li key={street.id} className="border border-ink/15 bg-paper/70 px-3 py-2">
                      <p className="font-display text-ink">
                        {street.name}
                        {street.note ? (
                          <span className="ml-2 text-sm font-sans font-normal text-ink-faint">{street.note}</span>
                        ) : null}
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">Wege: {neighborNames(street.neighbors)}</p>
                      <ul className="mt-2 space-y-0.5 text-sm text-ink">
                        {street.houses.map((h) => {
                          const leute = householdsAt(street.id, h.nr);
                          return (
                            <li key={`${street.id}-${h.nr}`}>
                              {h.nr}. {h.name}
                              {leute.length ? (
                                <span className="text-ink-muted"> — Haus {leute.map(familyName).join(", ")}</span>
                              ) : null}
                              {h.empty ? <span className="text-ink-faint"> · leer</span> : null}
                              {h.events?.length ? <span className="text-ink-faint"> · Trigger</span> : null}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ol>
                {qTriggers.length ? (
                  <ul className="mt-3 space-y-1 text-sm text-ink-muted">
                    {qTriggers.map((t) => (
                      <li key={t.event.id}>
                        {t.house}: {t.event.label} — nicht gefeuert
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            );
          })}

          <p className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/tisch" className="text-ink underline-offset-4 hover:underline">
              Zum Leben
            </Link>
            <Link to="/" className="text-ink-faint underline-offset-4 hover:underline">
              Zurück
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
