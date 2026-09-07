import { useTisch } from "@/lib/wfrp/store";

export function Protocol() {
  const scene = useTisch((s) => s.campaign.scenes[s.campaign.currentSceneId]);
  if (scene.protocol.length === 0) {
    return <p className="text-sm text-muted">Noch nichts im Protokoll. Die Szene wartet auf eine Intention.</p>;
  }
  return (
    <ol className="space-y-4">
      {scene.protocol.map((e) => (
        <li key={e.id} className="rounded-lg border border-border bg-raised p-4">
          <div className="font-display text-sm">{e.title}</div>
          <p className="mt-2 text-sm leading-relaxed">{e.body}</p>
          {e.numbers ? <p className="mt-2 font-mono text-xs text-muted">{e.numbers}</p> : null}
        </li>
      ))}
    </ol>
  );
}
