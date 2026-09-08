import { createFileRoute, Link } from "@tanstack/react-router";
import { DROSSELAU, DROSSELAU_HOUSE_COUNT, QUARTIERS } from "@/lib/wfrp/drosselau";
import { createCampaign } from "@/lib/wfrp/seed";

export const Route = createFileRoute("/tisch")({ component: TischPage });

function TischPage() {
  const campaign = createCampaign();
  const seats = Object.values(campaign.characters).filter((c) => c.kind === "pc");

  return (
    <main className="desk flex min-h-dvh items-center justify-center px-4 py-10">
      <img src="/images/desk.jpg" alt="" className="desk-photo" width={1792} height={1008} />
      <div className="desk-veil" aria-hidden />
      <article className="blatt">
        <div className="blatt-inner">
          <p className="font-display text-xs uppercase tracking-mark text-ink-faint">Tisch · Kampagne 1</p>
          <h1 className="mt-4 font-display text-4xl text-ink">{DROSSELAU.name}</h1>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-muted">
            Eingesperrt in der Stadt. Fünf Viertel, {DROSSELAU.streets.length} Gassen, {DROSSELAU_HOUSE_COUNT} Häuser.
            Szene zu.
          </p>
          <ol className="mt-8 grid gap-2">
            {QUARTIERS.map((q) => (
              <li key={q.id} className="flex items-center justify-between border border-ink/15 bg-paper/70 px-3 py-2">
                <span className="font-display text-ink">{q.name}</span>
                <span className="text-sm text-ink-faint">{q.note}</span>
              </li>
            ))}
          </ol>
          <ol className="mt-8 grid gap-2">
            {seats.map((seat) => (
              <li key={seat.id} className="flex items-center justify-between border border-ink/15 bg-paper/70 px-3 py-2">
                <span className="font-display text-ink">{seat.name}</span>
                <span className="text-sm text-ink-faint">leer</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink-muted">SL: Leitung, kein Sitz.</p>
          <p className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/erschaffung" className="text-ink underline-offset-4 hover:underline">
              Charakter anlegen
            </Link>
            <Link to="/sl" className="text-ink-muted underline-offset-4 hover:underline">
              Pult des SL
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
