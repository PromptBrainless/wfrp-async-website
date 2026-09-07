import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ATTRS, type Attr, type Character, type StatusTier } from "@/lib/wfrp/types";
import { bonus } from "@/lib/wfrp/dice";
import { useTisch } from "@/lib/wfrp/store";
import { cn } from "@/lib/utils";
import { ArmorSilhouette } from "./ArmorSilhouette";

const ATTR_LABEL: Record<Attr, string> = {
  KG: "Kampfgeschick",
  BF: "Ballistische Fertigkeit",
  ST: "Stärke",
  WI: "Widerstand",
  I: "Initiative",
  GW: "Gewandtheit",
  GS: "Geschicklichkeit",
  IN: "Intelligenz",
  WK: "Willenskraft",
  CH: "Charisma",
};

const SPECIES: Record<string, string> = {
  mensch: "Mensch",
  zwerg: "Zwerg",
  hochelf: "Hochelf",
  waldelf: "Waldelf",
  halbling: "Halbling",
};

const STATUS: Record<StatusTier, string> = {
  messing: "Messing",
  silber: "Silber",
  gold: "Gold",
};

const CONDITION: Record<string, string> = {
  betaubt: "Betäubt",
  bewusstlos: "Bewusstlos",
  blutend: "Blutend",
  brennend: "Brennend",
  demoralisiert: "Demoralisiert",
  erschoepft: "Erschöpft",
  ertaubt: "Ertaubt",
  geblendet: "Geblendet",
  gefesselt: "Gefesselt",
  niedergestreckt: "Niedergestreckt",
  ueberrascht: "Überrascht",
  vergiftet: "Vergiftet",
};

const GRUND: { id: string; attr: Attr; label: string }[] = [
  { id: "anfuehren", attr: "CH", label: "Anführen" },
  { id: "athletik", attr: "GW", label: "Athletik" },
  { id: "ausdauer", attr: "WI", label: "Ausdauer" },
  { id: "ausweichen", attr: "GW", label: "Ausweichen" },
  { id: "besonnenheit", attr: "WK", label: "Besonnenheit" },
  { id: "bestechen", attr: "CH", label: "Bestechen" },
  { id: "charme", attr: "CH", label: "Charme" },
  { id: "einschuechtern", attr: "ST", label: "Einschüchtern" },
  { id: "fahren", attr: "GW", label: "Fahren" },
  { id: "feilschen", attr: "CH", label: "Feilschen" },
  { id: "gluecksspiel", attr: "IN", label: "Glücksspiel" },
  { id: "intuition", attr: "I", label: "Intuition" },
  { id: "klatsch", attr: "CH", label: "Klatsch" },
  { id: "klettern", attr: "ST", label: "Klettern" },
  { id: "nahkampf", attr: "KG", label: "Nahkampf" },
  { id: "navigation", attr: "I", label: "Navigation" },
  { id: "reiten", attr: "GW", label: "Reiten" },
  { id: "rudern", attr: "ST", label: "Rudern" },
  { id: "schleichen", attr: "GW", label: "Schleichen" },
  { id: "tiere_bezirzen", attr: "WK", label: "Tiere bezirzen" },
  { id: "ueberleben", attr: "IN", label: "Überleben" },
  { id: "unterhalten", attr: "CH", label: "Unterhalten" },
  { id: "wahrnehmung", attr: "I", label: "Wahrnehmung" },
  { id: "zechen", attr: "WI", label: "Zechen" },
];

const AUSBAU: { id: string; attr: Attr; label: string }[] = [
  { id: "fingerfertigkeit", attr: "GS", label: "Fingerfertigkeit" },
  { id: "fernkampf", attr: "BF", label: "Fernkampf" },
  { id: "heilen", attr: "IN", label: "Heilen" },
  { id: "schaetzen", attr: "IN", label: "Schätzen" },
];

function Field({ label, value, empty }: { label: string; value: string; empty?: boolean }) {
  return (
    <div className="min-w-0 border-b border-border pb-1">
      <div className="font-display text-xs uppercase tracking-widest text-muted">{label}</div>
      <div className={cn("truncate pt-1 text-sm", empty && "text-muted")}>{value || "—"}</div>
    </div>
  );
}

function Pips({ filled, max }: { filled: number; max: number }) {
  if (max <= 0 && filled <= 0) return <span className="text-muted">—</span>;
  const n = Math.max(max, filled);
  return (
    <span className="inline-flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: n }, (_, i) => (
        <span key={i} className={cn("pip", i < filled && "pip-on")} />
      ))}
    </span>
  );
}

function skillRow(c: Character, id: string, attr: Attr, label: string) {
  const base = c.attributes[attr];
  const trained = c.skills[id];
  const value = trained ?? base;
  const adv = trained != null ? Math.max(0, trained - base) : 0;
  return { id, attr, label, value, adv, trained: trained != null };
}

export function CharacterSheet() {
  const campaign = useTisch((s) => s.campaign);
  const role = useTisch((s) => s.role);
  const viewId = useTisch((s) => s.viewId);
  const setView = useTisch((s) => s.setView);
  const [face, setFace] = useState<"front" | "back">("front");

  const ids =
    role === "spieler"
      ? Object.keys(campaign.characters).filter((id) => campaign.characters[id]?.kind === "pc")
      : Object.keys(campaign.characters).filter((id) => campaign.characters[id]);
  const shown = ids.length ? ids : Object.keys(campaign.characters);
  const activeId = shown.includes(viewId) ? viewId : shown[0];
  const c = activeId ? campaign.characters[activeId] : undefined;

  const stb = c ? bonus(c.attributes.ST) : 0;
  const wib = c ? bonus(c.attributes.WI) : 0;
  const wkb = c ? bonus(c.attributes.WK) : 0;
  const lpFormula = `${stb} + 2×${wib} + ${wkb}`;
  const encMax = stb + wib;
  const grund = c ? GRUND.map((s) => skillRow(c, s.id, s.attr, s.label)) : [];
  const known = new Set([...GRUND, ...AUSBAU].map((s) => s.id));
  const ausbau = c
    ? [
        ...AUSBAU.map((s) => skillRow(c, s.id, s.attr, s.label)).filter((s) => s.trained),
        ...Object.keys(c.skills)
          .filter((id) => !known.has(id) && !GRUND.some((g) => g.id === id))
          .map((id) => {
            const hit = AUSBAU.find((s) => s.id === id);
            return skillRow(c, id, hit?.attr ?? "IN", hit?.label ?? id);
          }),
      ]
    : [];
  const lost = c ? Math.max(0, c.wounds.max - c.wounds.current) : 0;

  return (
    <div className="desk min-h-dvh">
      <img src="/images/desk.jpg" alt="" className="desk-photo" width={1792} height={1008} />
      <div className="desk-veil desk-veil-read" aria-hidden />

      <div className="relative z-10 mx-auto flex h-dvh max-w-5xl flex-col gap-3 px-4 py-4">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-baseline gap-3">
            <Link to="/" className="font-display text-sm tracking-wide text-fg">
              Die Frist
            </Link>
            <Link to="/erschaffung" className="text-sm text-muted">
              Erschaffung
            </Link>
            <span className="font-display text-sm text-fg">Bogen</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {shown.length > 1 ? (
              <div className="flex flex-wrap gap-1">
                {shown.map((id) => {
                  const ch = campaign.characters[id];
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setView(id)}
                      className={cn(
                        "min-h-11 rounded-sm px-3 font-display text-xs tracking-wide",
                        activeId === id ? "bg-primary text-primary-fg" : "text-muted",
                      )}
                    >
                      {ch.name}
                    </button>
                  );
                })}
              </div>
            ) : null}
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setFace("front")}
                className={cn(
                  "min-h-11 rounded-sm px-3 font-display text-xs tracking-wide",
                  face === "front" ? "bg-primary text-primary-fg" : "text-muted",
                )}
              >
                Vorderseite
              </button>
              <button
                type="button"
                onClick={() => setFace("back")}
                className={cn(
                  "min-h-11 rounded-sm px-3 font-display text-xs tracking-wide",
                  face === "back" ? "bg-primary text-primary-fg" : "text-muted",
                )}
              >
                Rückseite
              </button>
            </div>
          </div>
        </header>

        {!c ? (
          <p className="text-muted">Kein Bogen offen. Erst eine Figur anlegen.</p>
        ) : (
          <article className="blatt blatt-wide flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="blatt-inner min-h-0 flex-1 space-y-6 overflow-y-auto">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-xs uppercase tracking-mark text-muted">Warhammer Fantasy Roleplay</p>
                  <h1 className="mt-1 font-display text-3xl">{c.name}</h1>
                  <p className="mt-1 text-sm text-muted">
                    {SPECIES[c.species] ?? c.species}
                    {c.className ? ` · ${c.className}` : ""}
                    {c.career ? ` · ${c.career}` : ""}
                    {c.careerLevel ? ` ${c.careerLevel}` : ""}
                  </p>
                </div>
                <div className="rounded-sm border border-primary px-3 py-2 text-center">
                  <div className="font-display text-xs uppercase tracking-widest text-muted">Status</div>
                  <div className="font-display text-sm">
                    {STATUS[c.status.tier]} {c.status.rank}
                  </div>
                </div>
              </header>

              {face === "front" ? (
                <>
                  <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <Field label="Volk" value={SPECIES[c.species] ?? c.species} />
                    <Field label="Klasse" value={c.className} />
                    <Field label="Karriere" value={c.career} />
                    <Field label="Stufe" value={String(c.careerLevel)} />
                    <Field label="Motivation" value={c.motivation} empty={!c.motivation} />
                    <Field
                      label="Herkunft"
                      value={c.details?.herkunft ?? "wird im Spiel gefüllt"}
                      empty={!c.details?.herkunft}
                    />
                    <Field
                      label="Gott"
                      value={c.details?.gott ?? "Laien, nicht automatisch Sigmar"}
                      empty={!c.details?.gott}
                    />
                    <Field
                      label="Alter"
                      value={c.details?.age ? String(c.details.age) : "wird im Spiel gefüllt"}
                      empty={!c.details?.age}
                    />
                    <Field
                      label="Augen"
                      value={c.details?.eyes ?? "wird im Spiel gefüllt"}
                      empty={!c.details?.eyes}
                    />
                    <Field
                      label="Haar"
                      value={c.details?.hair ?? "wird im Spiel gefüllt"}
                      empty={!c.details?.hair}
                    />
                    <Field
                      label="Größe"
                      value={c.details?.heightCm ? `${c.details.heightCm} cm` : "wird im Spiel gefüllt"}
                      empty={!c.details?.heightCm}
                    />
                    <Field
                      label="Bart"
                      value={c.details?.bart ?? (c.species === "zwerg" ? "Status — eintragen" : "—")}
                      empty={!c.details?.bart}
                    />
                  </section>

                  <section>
                    <h2 className="font-display text-sm uppercase tracking-widest text-muted">Spielwerte</h2>
                    <p className="mt-1 text-xs text-muted">
                      Aktuell, was gilt. Anfang und Steigerung trägt das Blatt, sobald die Erschaffung sie speichert — kein Fehler.
                    </p>
                    <div className="mt-3 grid grid-cols-5 gap-1 sm:grid-cols-10">
                      {ATTRS.map((a) => (
                        <div key={a} className="rounded-sm border border-border bg-raised px-1 py-2 text-center">
                          <div className="font-display text-xs text-muted" title={ATTR_LABEL[a]}>
                            {a}
                          </div>
                          <div className="font-display text-xl tabular-nums leading-tight">{c.attributes[a]}</div>
                          <div className="text-xs text-muted">B {bonus(c.attributes[a])}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div className="rounded-md border border-border bg-raised p-3">
                      <div className="font-display text-xs uppercase tracking-widest text-muted">Schicksal</div>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="font-mono tabular-nums">{c.fate}</span>
                        <Pips filled={c.fate} max={c.fate} />
                      </div>
                      <div className="mt-2 text-xs text-muted">Glück {c.fortune}</div>
                      <Pips filled={c.fortune} max={Math.max(c.fate, c.fortune)} />
                    </div>
                    <div className="rounded-md border border-border bg-raised p-3">
                      <div className="font-display text-xs uppercase tracking-widest text-muted">Zähigkeit</div>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="font-mono tabular-nums">{c.resilience}</span>
                        <Pips filled={c.resilience} max={c.resilience} />
                      </div>
                      <div className="mt-2 text-xs text-muted">Mut {c.resolve}</div>
                      <Pips filled={c.resolve} max={Math.max(c.resilience, c.resolve)} />
                    </div>
                    <div className="rounded-md border border-border bg-raised p-3">
                      <div className="font-display text-xs uppercase tracking-widest text-muted">Bewegung</div>
                      <div className="mt-2 font-display text-2xl tabular-nums">{c.movement}</div>
                      <div className="text-xs text-muted">
                        Gehen {c.movement * 2} m · Rennen {c.movement * 4} m
                      </div>
                    </div>
                    <div className="rounded-md border border-border bg-raised p-3">
                      <div className="font-display text-xs uppercase tracking-widest text-muted">Vorteile</div>
                      <div className="mt-2 font-display text-2xl tabular-nums">{c.advantage}</div>
                      <div className="text-xs text-muted">Start 0. Wird im Kampf gefüllt.</div>
                    </div>
                  </section>

                  <section>
                    <h2 className="font-display text-sm uppercase tracking-widest text-muted">Grundfähigkeiten</h2>
                    <p className="mt-1 text-xs text-muted">Wert = Spielwert + Steigerungen. Ohne Steigerung legal.</p>
                    <div className="mt-3 grid gap-x-6 sm:grid-cols-2">
                      <SkillTable rows={grund.slice(0, 12)} />
                      <SkillTable rows={grund.slice(12)} />
                    </div>
                  </section>

                  <section>
                    <h2 className="font-display text-sm uppercase tracking-widest text-muted">Ausbaufähigkeiten</h2>
                    {ausbau.length === 0 ? (
                      <p className="mt-2 text-sm text-muted">Keine ausgebildet. Ohne Steigerung grau — kein Fehler.</p>
                    ) : (
                      <div className="mt-3">
                        <SkillTable rows={ausbau} />
                      </div>
                    )}
                  </section>

                  <section>
                    <h2 className="font-display text-sm uppercase tracking-widest text-muted">Talente</h2>
                    {c.talents.length === 0 ? (
                      <p className="mt-2 text-sm text-muted">Keine eingetragen. Wird bei der Erschaffung gefüllt.</p>
                    ) : (
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {c.talents.map((t) => (
                          <li
                            key={t}
                            className="flex items-center justify-between rounded-sm border border-border bg-raised px-3 py-2 text-sm"
                          >
                            <span>{t}</span>
                            <span className="font-mono text-xs text-muted">Stufe 1</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </>
              ) : (
                <>
                  <section>
                    <h2 className="font-display text-sm uppercase tracking-widest text-muted">Lebenspunkte</h2>
                    <p className="mt-1 text-xs text-muted">
                      {c.wounds.current}/{c.wounds.max} · STB + 2×WIB + WKB = {lpFormula}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {Array.from({ length: c.wounds.max }, (_, i) => (
                        <span key={i} className={cn("wound-box", i < lost && "wound-box-lost")} />
                      ))}
                    </div>
                  </section>

                  <section className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-md border border-border bg-raised p-3">
                      <div className="font-display text-xs uppercase tracking-widest text-muted">Goldkronen</div>
                      <div className="mt-1 font-display text-2xl tabular-nums">{c.money.crowns}</div>
                    </div>
                    <div className="rounded-md border border-border bg-raised p-3">
                      <div className="font-display text-xs uppercase tracking-widest text-muted">Silberlinge</div>
                      <div className="mt-1 font-display text-2xl tabular-nums">{c.money.shillings}</div>
                    </div>
                    <div className="rounded-md border border-border bg-raised p-3">
                      <div className="font-display text-xs uppercase tracking-widest text-muted">Groschen</div>
                      <div className="mt-1 font-display text-2xl tabular-nums">{c.money.pennies}</div>
                    </div>
                  </section>
                  <p className="text-xs text-muted">12 Groschen = 1 Silberling · 20 Silberlinge = 1 Goldkrone</p>

                  <section>
                    <h2 className="font-display text-sm uppercase tracking-widest text-muted">Ziele</h2>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <Field
                        label="Kurzfristig"
                        value={c.details?.shortGoal ?? "wird im Spiel gefüllt"}
                        empty={!c.details?.shortGoal}
                      />
                      <Field
                        label="Langfristig"
                        value={c.details?.longGoal ?? "wird im Spiel gefüllt"}
                        empty={!c.details?.longGoal}
                      />
                    </div>
                  </section>

                  <section>
                    <h2 className="font-display text-sm uppercase tracking-widest text-muted">Waffen</h2>
                    <table className="mt-3 w-full text-left text-sm">
                      <thead className="text-xs uppercase tracking-widest text-muted">
                        <tr>
                          <th className="pb-2 font-display font-medium">Name</th>
                          <th className="pb-2 font-display font-medium">Fähigkeit</th>
                          <th className="pb-2 font-display font-medium">Lage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {c.inventory.filter((i) => i.weapon).length === 0 ? (
                          <tr>
                            <td colSpan={3} className="text-muted">
                              Keine Waffe. Wird im Spiel gefüllt — kein Fehler.
                            </td>
                          </tr>
                        ) : (
                          c.inventory
                            .filter((i) => i.weapon)
                            .map((i) => (
                              <tr key={i.id} className="border-t border-border">
                                <td className="py-2">{i.name}</td>
                                <td className="py-2 capitalize">{i.weapon?.skill}</td>
                                <td className="py-2">{i.weapon?.drawn ? "gezogen" : "verborgen"}</td>
                              </tr>
                            ))
                        )}
                      </tbody>
                    </table>
                  </section>

                  <section>
                    <h2 className="font-display text-sm uppercase tracking-widest text-muted">Ausrüstung</h2>
                    <p className="mt-1 text-xs text-muted">Traglast höchstens STB + WIB = {encMax}</p>
                    {c.inventory.length === 0 ? (
                      <p className="mt-2 text-sm text-muted">Leer. Pakete kommen aus der Karriere.</p>
                    ) : (
                      <ul className="mt-3 divide-y divide-border text-sm">
                        {c.inventory.map((i) => (
                          <li key={i.id} className="flex justify-between py-2">
                            <span>{i.name}</span>
                            {i.weapon ? (
                              <span className="text-muted">{i.weapon.drawn ? "geführt" : "am Gürtel"}</span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>

                  <section className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h2 className="font-display text-sm uppercase tracking-widest text-muted">Zustände</h2>
                      {c.conditions.length === 0 ? (
                        <p className="mt-2 text-sm text-muted">Leer. Wird im Spiel gefüllt — kein Fehler.</p>
                      ) : (
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {c.conditions.map((x) => (
                            <li key={x.id} className="rounded-sm border border-primary px-3 py-1 text-sm">
                              {CONDITION[x.id] ?? x.id}
                              {x.stacks > 1 ? ` ×${x.stacks}` : ""}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                      <h2 className="font-display text-sm uppercase tracking-widest text-muted">Flags / Bindungen</h2>
                      {c.flags.length === 0 ? (
                        <p className="mt-2 text-sm text-muted">Leer, außer der SL setzt sie.</p>
                      ) : (
                        <ul className="mt-2 space-y-1 text-sm">
                          {c.flags.map((f) => (
                            <li key={f}>{f.replaceAll("_", " ")}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>

                  <ArmorSilhouette />

                  <section className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-md border border-dashed border-border p-3">
                      <h2 className="font-display text-sm uppercase tracking-widest text-muted">Zauber / Gebete / Sünde</h2>
                      <p className="mt-2 text-sm text-muted">Nur Magie und Kult. Demo startet leer. Sünde 0.</p>
                    </div>
                    <div className="rounded-md border border-dashed border-border p-3">
                      <h2 className="font-display text-sm uppercase tracking-widest text-muted">Korrumpierung / Psychologie</h2>
                      <p className="mt-2 text-sm text-muted">Start 0 / ohne. Keine offene Wahl bei der Erschaffung.</p>
                    </div>
                  </section>
                </>
              )}
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

function SkillTable({
  rows,
}: {
  rows: { id: string; attr: Attr; label: string; value: number; adv: number; trained: boolean }[];
}) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-xs uppercase tracking-widest text-muted">
          <th className="pb-2 font-display font-medium">Name</th>
          <th className="pb-2 font-display font-medium">Attr</th>
          <th className="pb-2 text-right font-display font-medium">Stg</th>
          <th className="pb-2 text-right font-display font-medium">Wert</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} className={cn("border-t border-border", r.trained ? "" : "text-muted")}>
            <td className="py-1">{r.label}</td>
            <td className="py-1 font-mono text-xs">{r.attr}</td>
            <td className="py-1 text-right font-mono tabular-nums">{r.adv || "·"}</td>
            <td className="py-1 text-right font-mono tabular-nums">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
