import { createFileRoute } from "@tanstack/react-router";
import { ActionTabs } from "@/components/game/ActionTabs";
import { FortuneModal } from "@/components/game/FortuneModal";
import { Hud } from "@/components/game/Hud";
import { IntentBar } from "@/components/game/IntentBar";
import { Protocol } from "@/components/game/Protocol";
import { ScenePanel } from "@/components/game/ScenePanel";
import { Shell } from "@/components/game/Shell";

export const Route = createFileRoute("/tisch")({ component: TischPage });

function TischPage() {
  return (
    <Shell>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Hud />
          <ScenePanel />
          <ActionTabs />
        </div>
        <aside className="space-y-4">
          <h2 className="font-display text-lg">Protokoll</h2>
          <Protocol />
        </aside>
      </div>
      <IntentBar />
      <FortuneModal />
    </Shell>
  );
}
