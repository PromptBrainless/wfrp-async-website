import { Button } from "@/components/ui/button";
import { formatRollLine } from "@/lib/wfrp/resolve";
import { useTisch } from "@/lib/wfrp/store";

export function FortuneModal() {
  const fortune = useTisch((s) => s.campaign.fortune);
  const act = useTisch((s) => s.fortune);
  if (!fortune) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-bg/70 p-4 sm:items-center">
      <div className="w-full max-w-md rounded-xl border border-border bg-surface p-5">
        <h2 className="font-display text-xl">Glück</h2>
        <p className="mt-2 text-sm text-muted">Nach dem eigenen Wurf. Ohne Antwort gilt: nicht ausgegeben.</p>
        <p className="mt-3 font-mono text-xs">{formatRollLine(fortune.roll)}</p>
        <div className="mt-5 grid gap-2">
          <Button onClick={() => act("reroll")}>Wurf wiederholen</Button>
          <Button variant="outline" onClick={() => act("plus")}>
            +1 EG
          </Button>
          <Button variant="ghost" onClick={() => act("skip")}>
            Behalten
          </Button>
        </div>
      </div>
    </div>
  );
}
