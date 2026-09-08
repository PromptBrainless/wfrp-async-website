export const ICONS = {
  welt: "/icons/welt.jpg",
  ort: "/icons/ort.jpg",
  person: "/icons/person.jpg",
  waffe: "/icons/waffe.jpg",
  fund: "/icons/fund.jpg",
  wurf: "/icons/wurf.jpg",
  ereignis: "/icons/ereignis.jpg",
  journal: "/icons/journal.jpg",
  sl: "/icons/sl.jpg",
  intention: "/icons/intention.jpg",
} as const;

export type IconKind = keyof typeof ICONS;

export const ICON_FROM_KIND: Record<string, IconKind> = {
  world: "welt",
  rules: "wurf",
  event: "ereignis",
  system: "journal",
  intent: "intention",
  sl: "sl",
};

export function iconSrc(kind?: IconKind | string): string {
  if (kind && kind in ICONS) return ICONS[kind as IconKind];
  return ICONS.welt;
}
