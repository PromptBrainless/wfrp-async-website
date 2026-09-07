import { useState } from "react";
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

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 border-b border-border pb-1">
      <div className="font-display text-xs uppercase tracking-widest text-muted">{label}</div>
      <div className="truncate pt-1 text-sm">{value || "—"}</div>
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
      ? ["greta"]
      : Object.keys(campaign.characters).filter((id) => campaign.characters[id]);
  const activeId = ids.includes(viewId) ? viewId : ids[0];
  const c = campaign.characters[activeId];
  if (!c) return <p className="text-muted">Kein Bogen offen.</p>;

  const stb = bonus(c.attributes.ST);
  const wib = bonus(c.attributes.WI);
  const wkb = bonus(c.attributes.WK);
  const lpFormula = `${stb} + 2×${wib} + ${wkb}`;
  const encMax = stb + wib;
  const grund = GRUND.map((s) => skillRow(c, s.id, s.attr, s.label));
  const known = new Set([...GRUND, ...AUSBAU].map((s) => s.id));
  const ausbau = [
    ...AUSBAU.map((s) => skillRow(c, s.id, s.attr, s.label)).filter((s) => s.trained),
    ...Object.keys(c.skills)
      .filter((id) => !known.has(id) && !GRUND.some((g) => g.id === id))
      .map((id) => {
        const hit = AUSBAU.find((s) => s.id === id);
        return skillRow(c, id, hit?.attr ?? "IN", hit?.label ?? id);
      }),
  ];
  const lost = Math.max(0, c.wounds.max - c.wounds.current);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap rounded-md bg-raised p-1">
          {ids.map((id) => {
            const ch = campaign.characters[id];
            return (
              <button
                key={id}
                type="button"
                onClick={() => setView(id)}
                className={cn(
                  "min-h-11 rounded-sm px-3 text-sm",
                  activeId === id ? "bg-primary text-primary-fg" : "text-muted",
                )}
              >
                {ch.name}
              </button>
            );
          })}
        </div>
        <div className="flex rounded-md bg-raised p-1">
          <button
            type="button"
            onClick={() => setFace("front")}
            className={cn("min-h-11 rounded-sm px-3 text-sm", face === "front" ? "bg-surface text-fg" : "text-muted")}
          >
            Vorderseite
          </button>
          <button
            type="button"
            onClick={() => setFace("back")}
            className={cn("min-h-11 rounded-sm px-3 text-sm", face === "back" ? "bg-surface text-fg" : "text-muted")}
          >
            Rückseite
          </button>
        </div>
      </div>

      <article className="sheet">
        <div className="sheet-inner space-y-6">
          <header className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-xs uppercase tracking-widest text-muted">Warhammer Fantasy Roleplay</p>
              <h1 className="mt-1 font-display text-3xl">{c.name}</h1>
              <p className="mt-1 text-sm text-muted">{c.kind === "pc" ? "Spielercharakter" : "Nichtspielercharakter"}</p>
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
                <Field label="Motivation" value={c.motivation} />
                <Field label="Herkunft" value={c.details?.herkunft ?? "—"} />
                <Field label="Gott" value={c.details?.gott ?? "Laien, nicht automatisch Sigmar"} />
                {c.details?.age ? <Field label="Alter" value={String(c.details.age)} /> : null}
                {c.details?.eyes ? <Field label="Augen" value={c.details.eyes} /> : null}
                {c.details?.hair ? <Field label="Haar" value={c.details.hair} /> : null}
                {c.details?.heightCm ? <Field label="Größe" value={`${c.details.heightCm} cm`} /> : null}
                {c.details?.bart ? <Field label="Bart" value={c.details.bart} /> : null}
                {c.attitude ? <Field label="Haltung" value={c.attitude} /> : <Field label="Gruppe" value="Der Ballen" />}
              </section>

              <section>
                <h2 className="font-display text-sm uppercase tracking-widest text-muted">Spielwerte</h2>
                <div className="mt-3 grid grid-cols-5 gap-1 sm:grid-cols-10">
                  {ATTRS.map((a) => (
                    <div key={a} className="rounded-sm border border-border bg-raised px-1 py-2 text-center">
                      <div className="font-display text-xs text-muted">{a}</div>
                      <div className="font-display text-xl tabular-nums leading-tight">{c.attributes[a]}</div>
                      <div className="text-xs text-muted">B {bonus(c.attributes[a])}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-2 hidden text-xs text-faint sm:block">
                  {ATTRS.map((a) => `${a} ${ATTR_LABEL[a]}`).join(" · ")}
                </p>
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
                  <div className="text-xs text-muted">Gehen {c.movement * 2} m · Rennen {c.movement * 4} m</div>
                </div>
                <div className="rounded-md border border-border bg-raised p-3">
                  <div className="font-display text-xs uppercase tracking-widest text-muted">Vorteile</div>
                  <div className="mt-2 font-display text-2xl tabular-nums">{c.advantage}</div>
                  <div className="text-xs text-muted">Start 0. Wird im Kampf gefüllt. Zustand löscht alle.</div>
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
                  <p className="mt-2 text-sm text-muted">Keine ausgebildet. Ohne Steigerung grau.</p>
                ) : (
                  <div className="mt-3">
                    <SkillTable rows={ausbau} />
                  </div>
                )}
              </section>

              <section>
                <h2 className="font-display text-sm uppercase tracking-widest text-muted">Talente</h2>
                {c.talents.length === 0 ? (
                  <p className="mt-2 text-sm text-muted">Keine eingetragen.</p>
                ) : (
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {c.talents.map((t) => (
                      <li key={t} className="flex items-center justify-between rounded-sm border border-border bg-raised px-3 py-2 text-sm">
                        <span>{t}</span>
                        <span className="font-mono text-xs text-muted">Stufe 1</span>
                      </li>
                    ))}
                  </ul>
                )}
                {c.kind === "pc" ? (
                  <p className="mt-2 text-xs text-faint">Karrierestufe 1. Welche Talente auf dem Bogen stehen, entscheidet der SL.</p>
                ) : null}
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="font-display text-sm uppercase tracking-widest text-muted">Lebenspunkte</h2>
                <p className="mt-1 text-xs text-muted">
                  {c.wounds.current}/{c.wounds.max} · Formel STB + 2×WIB + WKB = {lpFormula}
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

              {(c.details?.shortGoal || c.details?.longGoal) && (
                <section>
                  <h2 className="font-display text-sm uppercase tracking-widest text-muted">Ziele</h2>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <Field label="Kurzfristig" value={c.details.shortGoal ?? "—"} />
                    <Field label="Langfristig" value={c.details.longGoal ?? "—"} />
                  </div>
                </section>
              )}

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
                          Keine Waffe.
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
                <ul className="mt-3 divide-y divide-border text-sm">
                  {c.inventory.map((i) => (
                    <li key={i.id} className="flex justify-between py-2">
                      <span>{i.name}</span>
                      {i.weapon ? <span className="text-muted">{i.weapon.drawn ? "geführt" : "am Gürtel"}</span> : null}
                    </li>
                  ))}
                </ul>
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
          <tr key={r.id} className={cn("border-t border-border", r.trained ? "text-fg" : "text-muted")}>
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
