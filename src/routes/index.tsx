import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="desk flex min-h-dvh items-center justify-center px-4 py-10">
      <img src="/images/desk.jpg" alt="" className="desk-photo" width={1792} height={1008} />
      <div className="desk-veil" aria-hidden />

      <article className="blatt">
        <div className="blatt-inner stagger">
          <p className="font-display text-xs uppercase tracking-mark text-ink-faint">Warhammer Fantasy Roleplay</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-ink sm:text-6xl">Die Frist</h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">
            Kampagne 1 spielt in Drosselau. Fünf Spieler. Der Spielleiter ist Leitung. Die erste Szene öffnest du.
          </p>
          <dl className="mt-8 grid gap-3 text-sm text-ink">
            <div>
              <dt className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Kampagne</dt>
              <dd>1 · fünf Plätze, noch leer</dd>
            </div>
            <div>
              <dt className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Ort</dt>
              <dd>Drosselau — 13 Gassen, Szene zu</dd>
            </div>
            <div>
              <dt className="font-display text-[11px] uppercase tracking-mark text-ink-faint">Buch</dt>
              <dd>329 Gerüste · Religion · Magie</dd>
            </div>
          </dl>
          <p className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/tisch" className="text-ink underline-offset-4 hover:underline">
              Zum Tisch
            </Link>
            <Link to="/erschaffung" className="text-ink-muted underline-offset-4 hover:underline">
              Charakter anlegen
            </Link>
            <Link to="/sl" className="text-ink-faint underline-offset-4 hover:underline">
              Pult
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
