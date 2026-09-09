import { Button } from "@/components/ui/button";
import { formatRollLine } from "@/lib/wfrp/resolve";
import { useTisch } from "@/lib/wfrp/store";

export function FortuneModal() {
  const fortune = useTisch((s) => s.campaign.fortune);
  const act = useTisch((s) => s.fortune);
  if (!fortune) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-shade/70 p-4 sm:items-center">
      <div className="w-full max-w-md rounded-xl border border-ink/20 bg-paper p-5 text-ink shadow-blatt">
        <h2 className="font-display text-xl">Glück</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Nur direkt nach dem eigenen Wurf einsetzbar. Ohne Antwort gilt er als nicht ausgegeben.
        </p>
        <p className="mt-3 font-mono text-xs text-ink">{formatRollLine(fortune.roll)}</p>
        <div className="mt-5 grid gap-2">
          <Button variant="wax" onClick={() => act("reroll")}>
            Wurf wiederholen
          </Button>
          <Button variant="ink" onClick={() => act("plus")}>
            +1 EG
          </Button>
          <Button variant="quiet" onClick={() => act("skip")}>
            Behalten
          </Button>
        </div>
      </div>
    </div>
  );
}
