import type { Money } from "./types";

export function toPennies(m: Money): number {
  return m.crowns * 240 + m.shillings * 12 + m.pennies;
}

export function fromPennies(total: number): Money {
  const safe = Math.max(0, Math.floor(total));
  const crowns = Math.floor(safe / 240);
  const rest = safe % 240;
  const shillings = Math.floor(rest / 12);
  const pennies = rest % 12;
  return { crowns, shillings, pennies };
}

export function formatMoney(m: Money): string {
  const parts: string[] = [];
  if (m.crowns) parts.push(`${m.crowns} GM`);
  if (m.shillings) parts.push(`${m.shillings} S`);
  if (m.pennies || parts.length === 0) parts.push(`${m.pennies} d`);
  return parts.join(" · ");
}

export function addPennies(m: Money, delta: number): Money {
  return fromPennies(toPennies(m) + delta);
}
