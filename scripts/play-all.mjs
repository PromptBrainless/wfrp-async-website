import { chromium } from "playwright";

const BASE = "http://127.0.0.1:8080";
const out = [];
const fail = [];

function ok(name, detail = "") {
  out.push(`OK  ${name}${detail ? " — " + detail : ""}`);
}
function bad(name, detail) {
  fail.push(`FAIL ${name} — ${detail}`);
  out.push(`FAIL ${name} — ${detail}`);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.setDefaultTimeout(15000);
const errors = [];
const reqFails = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("requestfailed", (r) => reqFails.push(`${r.method()} ${r.url()} ${r.failure()?.errorText ?? ""}`));

async function text(sel) {
  const loc = page.locator(sel);
  if ((await loc.count()) === 0) return "";
  return (await loc.first().innerText()).replace(/\s+/g, " ").trim();
}
async function body() {
  return (await page.locator("body").innerText()).replace(/\s+/g, " ").trim();
}
async function go(path) {
  errors.length = 0;
  await page.goto(BASE + path, { waitUntil: "networkidle" });
}

// --- Start ---
await go("/");
{
  const t = await body();
  if (t.includes("Die Frist") && t.includes("Zum Tisch")) ok("Start", "Titel + Link");
  else bad("Start", t.slice(0, 180));
}

// --- SL-Blatt (Stadtverzeichnis, nicht Pult-Tür) ---
await go("/sl");
{
  const t = await body();
  if (t.includes("Drosselau") && t.includes("Tick") && t.includes("Torstraße")) ok("/sl", "Stadt + Partei");
  else bad("/sl", t.slice(0, 180));
}

// --- Bogen ---
await go("/bogen");
{
  const t = await body();
  if (t.includes("Tick") || t.includes("Bogen") || t.includes("LP")) ok("/bogen", t.slice(0, 80));
  else bad("/bogen", t.slice(0, 180));
}

// --- Erschaffung ---
await go("/erschaffung");
{
  const t = await body();
  if (t.toLowerCase().includes("volk") || t.toLowerCase().includes("reik") || t.includes("Weiter"))
    ok("/erschaffung", t.slice(0, 90));
  else bad("/erschaffung", t.slice(0, 180));
}

// --- Tisch ---
await go("/tisch");
{
  const doors = await page.locator(".play-door").allTextContents();
  const names = doors.map((d) => d.replace(/\s+/g, " ").trim());
  if (names.join(" ") === "Tisch Blatt Journal Pult") ok("Türen", names.join(" · "));
  else bad("Türen", names.join(" | ") || "keine");

  const chips = await page.locator(".ask-chip").allTextContents();
  const c = chips.map((x) => x.trim());
  if (c.some((x) => /ansprechen|umschauen/i.test(x))) ok("Erste Karte", c[0]);
  else bad("Erste Karte", c.join(" | "));
  if (c.some((x) => /preis|feilschen/i.test(x))) bad("Feilschen am Tor", c.join(" | "));
  else ok("Kein Feilschen am Tor");

  const beat = await text(".leben-beat");
  if (beat.includes("Stein") || beat.includes("Tor")) ok("Auftakt", beat.slice(0, 70));
  else bad("Auftakt", beat.slice(0, 120) || "leer");

  const party = await page.locator(".play-party-chip").allTextContents();
  if (party.join(" ") === "Tick Track Truck Hanni Nanni") ok("Partei", party.join(" · "));
  else bad("Partei", party.join(" | "));
}

// Sitzwechsel
{
  await page.locator(".play-party-chip", { hasText: "Hanni" }).click();
  await page.waitForTimeout(150);
  const who = await text(".play-who");
  if (who.includes("Hanni")) ok("Sitzwechsel", who.slice(0, 40));
  else bad("Sitzwechsel", who);
  await page.locator(".play-party-chip", { hasText: "Tick" }).click();
  await page.waitForTimeout(100);
}

// Blatt / Journal / Pult
{
  await page.locator(".play-door", { hasText: "Blatt" }).click();
  await page.waitForTimeout(150);
  const t = await text(".play-pane");
  if (t.includes("Tick") && t.includes("Wachmann")) ok("Blatt", "Tick Wachmann");
  else bad("Blatt", t.slice(0, 120));
  if ((await page.locator(".ask-chip").count()) === 0) ok("Blatt ohne Karten");
  else bad("Blatt ohne Karten", "Karten noch da");

  await page.locator(".play-door", { hasText: "Journal" }).click();
  await page.waitForTimeout(150);
  const j = await text(".play-pane");
  if (j.includes("geschehen") || j.includes("Journal")) ok("Journal", j.slice(0, 60));
  else bad("Journal", j.slice(0, 120));

  await page.locator(".play-door", { hasText: "Pult" }).click();
  await page.waitForTimeout(200);
  const p = await text(".play-pane");
  if (p.includes("Tick") && p.includes("Hanni") && p.includes("Leitung")) ok("Pult Übersicht");
  else bad("Pult Übersicht", p.slice(0, 140));
}

// Leitung + Welt schreiben
{
  await page.locator("button", { hasText: "Leitung übernehmen" }).click();
  await page.waitForTimeout(200);
  const speak = page.locator("#speak-line");
  // Composer only on Tisch
  await page.locator(".play-door", { hasText: "Tisch" }).click();
  await page.waitForTimeout(200);
  const who = await text(".play-who");
  if (who.includes("Spielleiter")) ok("SL am Tisch");
  else bad("SL am Tisch", who);
  await page.locator("#speak-line").fill("Die Torwache sieht zu, sagt aber nichts.");
  await page.locator("button", { hasText: "Ins Leben" }).click();
  await page.waitForTimeout(200);
  const thread = await text(".leben-thread");
  if (thread.includes("Torwache")) ok("SL schreibt ins Leben");
  else bad("SL schreibt ins Leben", thread.slice(0, 160));
}

// Zurück als Spieler, Umschauen
{
  await page.locator(".play-door", { hasText: "Pult" }).click();
  await page.waitForTimeout(200);
  const als = page.locator("button", { hasText: "Als Spieler" });
  if ((await als.count()) > 0) {
    await als.click();
    await page.waitForTimeout(150);
  }
  await page.locator(".play-door", { hasText: "Tisch" }).click();
  await page.waitForTimeout(150);
  await page.locator(".ask-chip", { hasText: "umschauen" }).click();
  await page.waitForTimeout(250);
  const foot = await text(".play-foot");
  const thread = await text(".leben-thread");
  if (foot.includes("Spielleiter") || thread.toLowerCase().includes("umschau") || foot.includes("würfelt"))
    ok("Umschauen", foot.slice(0, 80) || thread.slice(-80));
  else bad("Umschauen", `foot=${foot.slice(0, 100)} thread=${thread.slice(-80)}`);
}

// Weitere: graue Karten
{
  await page.locator(".play-door", { hasText: "Tisch" }).click();
  await page.waitForTimeout(100);
  const mehr = page.locator(".ask-chip", { hasText: "Weitere" });
  if ((await mehr.count()) > 0) {
    await mehr.click();
    await page.waitForTimeout(200);
    const sheet = await text(".play-sheet");
    if (/kein stand|niemand wartet|kein kampf/i.test(sheet)) ok("Weitere grau", "Gründe sichtbar");
    else ok("Weitere offen", sheet.slice(0, 80));
    await page.locator(".play-icon", { hasText: "" }).first().click().catch(() => {});
    const close = page.locator("button[aria-label='Schließen']");
    if ((await close.count()) > 0) await close.first().click();
  } else ok("Weitere", "nicht klickbar (Absicht offen?)");
}

// Gehen versuchen
await go("/tisch");
{
  const gehen = page.locator(".ask-chip", { hasText: "hingehen" });
  if ((await gehen.count()) > 0) {
    const before = await text(".leben-beat");
    await gehen.click();
    await page.waitForTimeout(300);
    const after = await text(".play-inner");
    const foot = await text(".play-foot");
    if (after.includes("Vorstadt") || after.includes("Markt") || after.includes("verlassen"))
      ok("Gehen", "Ort gewechselt oder Absicht");
    else if (foot.includes("Spielleiter")) ok("Gehen", "liegt beim SL");
    else bad("Gehen", `keine Reaktion. foot=${foot.slice(0, 80)}`);
  } else bad("Gehen", "Karte fehlt");
}

const uniqueErr = [...new Set(errors)];
if (uniqueErr.length) bad("pageerror", uniqueErr.join(" | "));
else ok("keine pageerror");

const badReq = reqFails.filter((u) => !u.includes("favicon"));
if (badReq.length) bad("requests", badReq.slice(0, 5).join(" | "));
else ok("keine toten Requests");

await browser.close();

console.log(out.join("\n"));
console.log("---");
console.log(fail.length ? `${fail.length} fehlgeschlagen` : "alle Checks grün");
if (fail.length) process.exitCode = 1;
