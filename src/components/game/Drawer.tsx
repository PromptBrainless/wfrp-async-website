import type { ReactNode } from "react";
import { X } from "lucide-react";

export function Drawer({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="play-drawer">
      <button type="button" className="play-scrim" aria-label="Schließen" onClick={onClose} />
      <aside className="play-sheet" role="dialog" aria-label={title}>
        <header className="flex items-center justify-between gap-3 border-b border-ink/15 px-4 py-3">
          <h2 className="font-display text-lg text-ink">{title}</h2>
          <button type="button" className="play-icon" onClick={onClose} aria-label="Schließen">
            <X className="size-4" strokeWidth={1.75} />
          </button>
        </header>
        <div className="play-sheet-body">{children}</div>
      </aside>
    </div>
  );
}
