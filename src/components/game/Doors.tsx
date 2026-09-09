import { BookMarked, MessageSquare, ScrollText, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export type DoorId = "tisch" | "blatt" | "journal" | "pult";

const DOORS: { id: DoorId; label: string; Icon: typeof MessageSquare }[] = [
  { id: "tisch", label: "Tisch", Icon: MessageSquare },
  { id: "blatt", label: "Blatt", Icon: UserRound },
  { id: "journal", label: "Journal", Icon: BookMarked },
  { id: "pult", label: "Pult", Icon: ScrollText },
];

export function Doors({ door, onDoor }: { door: DoorId; onDoor: (id: DoorId) => void }) {
  return (
    <nav className="play-doors" aria-label="Türen">
      {DOORS.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          className={cn("play-door", door === id && "is-on")}
          aria-current={door === id ? "page" : undefined}
          onClick={() => onDoor(id)}
        >
          <Icon className="size-4" strokeWidth={1.75} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
