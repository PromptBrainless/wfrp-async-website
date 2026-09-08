import type { DicePlate as DicePlateData } from "@/lib/wfrp/types";
import { formatSl } from "@/lib/wfrp/dice";
import { DIFFICULTY_LABEL } from "@/lib/wfrp/types";
import { cn } from "@/lib/utils";

export function DicePlate({ dice }: { dice: DicePlateData }) {
  return (
    <dl className={cn("dice-plate", dice.success ? "is-ok" : "is-fail")}>
      <div>
        <dt>Fähigkeit</dt>
        <dd>
          {dice.skillLabel} {dice.skillValue}
        </dd>
      </div>
      <div>
        <dt>Schwierigkeit</dt>
        <dd>
          {DIFFICULTY_LABEL[dice.difficulty]} · {dice.difficultyMod >= 0 ? `+${dice.difficultyMod}` : dice.difficultyMod}
        </dd>
      </div>
      <div>
        <dt>Zustände</dt>
        <dd>{dice.conditionMod ? dice.conditionMod : "—"}</dd>
      </div>
      <div>
        <dt>Vorteile</dt>
        <dd>{dice.advantageMod ? `+${dice.advantageMod}` : "—"}</dd>
      </div>
      <div>
        <dt>Ziel</dt>
        <dd className="tabular-nums">{dice.target}</dd>
      </div>
      <div>
        <dt>Wurf</dt>
        <dd className="tabular-nums">{dice.roll}</dd>
      </div>
      <div className="dice-band">
        <dt>Erfolgsgrade</dt>
        <dd>
          {formatSl(dice.sl)} · {dice.band}
          {dice.critical ? " · kritischer Treffer" : ""}
          {dice.fumble ? " · Patzer" : ""}
          {dice.doubles && !dice.critical && !dice.fumble ? " · Pasch" : ""}
        </dd>
      </div>
      {dice.location ? (
        <div>
          <dt>Zone</dt>
          <dd>{dice.location}</dd>
        </div>
      ) : null}
      {dice.opposed ? (
        <div className="dice-band">
          <dt>Vergleich</dt>
          <dd>
            {dice.opposed.name} {dice.opposed.skillLabel} Ziel {dice.opposed.target} · Wurf {dice.opposed.roll} ·{" "}
            {formatSl(dice.opposed.sl)} · {dice.opposed.band}
          </dd>
        </div>
      ) : null}
      {dice.proxy ? (
        <div>
          <dt>Hinweis</dt>
          <dd>in Vertretung</dd>
        </div>
      ) : null}
    </dl>
  );
}
