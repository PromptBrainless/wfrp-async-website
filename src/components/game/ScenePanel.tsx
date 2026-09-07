import { useTisch } from "@/lib/wfrp/store";

export function ScenePanel() {
  const campaign = useTisch((s) => s.campaign);
  const scene = campaign.scenes[campaign.currentSceneId];
  const names = scene.present.map((id) => campaign.characters[id]?.name ?? id);

  return (
    <article className="rounded-xl border border-border bg-surface p-5">
      <p className="font-display text-[11px] uppercase tracking-[0.18em] text-muted">{scene.locationName}</p>
      <h2 className="mt-1 font-display text-2xl">{scene.title}</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-fg">{scene.slText}</p>
      <p className="mt-4 border-l-2 border-primary pl-3 text-sm italic text-fg">{scene.trigger}</p>
      <p className="mt-4 text-xs text-muted">Anwesend: {names.join(" · ")}</p>
    </article>
  );
}
