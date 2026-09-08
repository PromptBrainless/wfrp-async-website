#!/usr/bin/env python3
"""Create Epic → Task issues on PromptBrainless/wfrp-async-website. Idempotent by title prefix."""
from __future__ import annotations

import json
import subprocess
import sys

REPO = "PromptBrainless/wfrp-async-website"
OWNER, NAME = REPO.split("/")

FRIST = """
**Frist (nicht verhandelbar):** Spieler setzt Intention und wirft den W100. SL ist Leitung, keine Figur. Engine spricht nicht, würfelt nicht, erfindet keine Stimmen. Glück nur nach eigenem Wurf. Tabellen feuern nie von selbst. Original.md bleibt tot. Kampagne 1 = Drosselau, fünf Plätze, Szene zu bis der SL öffnet.
""".strip()


def gh(*args: str, input_text: str | None = None) -> str:
    r = subprocess.run(
        ["gh", *args],
        input=input_text,
        text=True,
        capture_output=True,
        check=False,
    )
    if r.returncode != 0:
        raise RuntimeError(f"gh {' '.join(args)}\n{r.stderr}")
    return r.stdout.strip()


def existing_titles() -> dict[str, int]:
    out = gh(
        "issue",
        "list",
        "--repo",
        REPO,
        "--state",
        "all",
        "--limit",
        "200",
        "--json",
        "number,title",
    )
    data = json.loads(out or "[]")
    return {i["title"]: i["number"] for i in data}


EPICS: list[dict] = [
    {
        "key": "EPIC-01",
        "title": "EPIC 01 – Core Foundation",
        "prio": "priority:P0",
        "area": "area:core",
        "body": "Loop, Config, Fehler, Logging. Kein Foundry-Loader. Engine hält Zustand.",
        "tasks": [
            ("WFRP-001", "Repository Cleanup", "P0", "2h", "—", "frist:liegt", "Hooks, NOTICE, .gitignore, Demo raus. Prüfen und schließen."),
            ("WFRP-002", "Projektstruktur vereinheitlichen", "P0", "4h", "WFRP-001", "frist:liegt", "knowledge/ + src/lib/wfrp/ ist die Struktur. Nicht neu erfinden, nur Lücken schließen."),
            ("WFRP-003", "Config-System erstellen", "P0", "4h", "WFRP-002", "", "Eine Quelle: knowledge/data/*.json treibt die Engine. Heute: catalog.ts hardcodiert."),
            ("WFRP-004", "Modul-Loader Grundgerüst", "P0", "8h", "WFRP-003", "frist:spaeter", "Kein Foundry-Modulmarkt in v1. Höchstens JSON-Katalog laden."),
            ("WFRP-005", "Event-Bus Grundgerüst", "P0", "8h", "WFRP-003", "frist:spaeter", "Leben-Beats ersetzen einen generischen Bus. Nicht parallel bauen."),
            ("WFRP-006", "Global Error Handling", "P0", "3h", "WFRP-003", "", "UI + Resolver: Fehler sichtbar, kein stilles Schlucken."),
            ("WFRP-007", "Logging Framework", "P1", "4h", "WFRP-003", "", "SL-Log / Journal, kein Debug-Spam in Leben."),
            ("WFRP-008", "Settings Registry", "P1", "6h", "WFRP-004", "frist:spaeter", "Frist, Tick-Mix, Vorteile-Deckel = SL-Defaults, keine Spieler-Modulflags."),
        ],
    },
    {
        "key": "EPIC-02",
        "title": "EPIC 02 – Regelwerksdatenbank",
        "prio": "priority:P0",
        "area": "area:rules",
        "body": "JSON + Register liegen. Engine muss sie lesen. Magie/Gebete nicht v1.",
        "tasks": [
            ("WFRP-020", "Datenmodell definieren", "P0", "6h", "—", "frist:liegt", "knowledge/10-system/02-datenmodell.md + data/register.json."),
            ("WFRP-021", "Career Schema", "P0", "4h", "WFRP-020", "frist:liegt", "careers.json: Stufen-Fähigkeiten fehlen noch (nur Talente Stufe 1)."),
            ("WFRP-022", "Skill Schema", "P0", "3h", "WFRP-020", "frist:liegt", "skills.json 45. Spezialisierung noch nicht auf dem Bogen."),
            ("WFRP-023", "Talent Schema", "P0", "3h", "WFRP-020", "frist:liegt", "talents.json 167. Texte nicht alle in JSON."),
            ("WFRP-024", "Equipment Schema", "P0", "4h", "WFRP-020", "", "Einkauf/Traglast anbinden, nicht neu erfinden."),
            ("WFRP-025", "Weapon Schema", "P0", "4h", "WFRP-020", "frist:liegt", "weapons.json v1-Teil. Rest verdrahten wenn Kampf-Szene."),
            ("WFRP-026", "Armour Schema", "P0", "4h", "WFRP-020", "", "Aus 08-einkauf, nicht Foundry-Pack."),
            ("WFRP-027", "Creature Schema", "P0", "6h", "WFRP-020", "frist:spaeter", "Kein Bestiarium-Spawn. SL zieht NSC aus Drosselau."),
            ("WFRP-028", "Spell Schema", "P1", "4h", "WFRP-020", "frist:spaeter", "Magie bewusst nicht v1."),
            ("WFRP-029", "Prayer Schema", "P1", "4h", "WFRP-020", "frist:spaeter", "Gebete bewusst nicht v1."),
            ("WFRP-030", "Validation Engine", "P0", "8h", "WFRP-021–029", "frist:liegt", "skill/scripts/validate_wissen.py erweitern, nicht ersetzen."),
        ],
    },
    {
        "key": "EPIC-03",
        "title": "EPIC 03 – Modul-System",
        "prio": "priority:P1",
        "area": "area:core",
        "body": "Später. Kampagne 1 ist Drosselau, kein Homebrew-Markt.",
        "tasks": [
            ("WFRP-040", "Modul Manifest", "P1", "4h", "—", "frist:spaeter", "Nicht v1."),
            ("WFRP-041", "Modul Registrierung", "P1", "6h", "WFRP-040", "frist:spaeter", "Nicht v1."),
            ("WFRP-042", "Dependency Resolver", "P1", "8h", "WFRP-041", "frist:spaeter", "Nicht v1."),
            ("WFRP-043", "Modul Aktivierung", "P1", "6h", "WFRP-041", "frist:spaeter", "Nicht v1."),
            ("WFRP-044", "Modul Deaktivierung", "P1", "4h", "WFRP-043", "frist:spaeter", "Nicht v1."),
            ("WFRP-045", "Modul Versionsprüfung", "P1", "6h", "WFRP-042", "frist:spaeter", "Nicht v1."),
            ("WFRP-046", "Homebrew Modul Support", "P1", "8h", "WFRP-043", "frist:spaeter", "Nicht v1. SL-Freiheit ≠ Modul-API."),
            ("WFRP-047", "Konflikterkennung", "P1", "10h", "WFRP-045", "frist:spaeter", "Nicht v1."),
        ],
    },
    {
        "key": "EPIC-04",
        "title": "EPIC 04 – Charaktersystem",
        "prio": "priority:P0",
        "area": "area:character",
        "body": "Erschaffung und Bogen existieren. JSON verdrahten. Kein 3e-Resilienz.",
        "tasks": [
            ("WFRP-060", "Charaktermodell", "P0", "8h", "—", "frist:liegt", "types.ts Character. An skills.json koppeln."),
            ("WFRP-061", "Attributsystem", "P0", "8h", "WFRP-060", "frist:liegt", "10 Spielwerte + Boni. attributes.json."),
            ("WFRP-062", "Fertigkeitssystem", "P0", "8h", "WFRP-060", "", "Gruppierte Spezialisierungen als Feld. Grund/Ausbau grau."),
            ("WFRP-063", "Talentintegration", "P0", "6h", "WFRP-060", "", "Talente auf Fähigkeiten setzen (z. B. Verhandlungsgenie → Feilschen)."),
            ("WFRP-064", "Karriereintegration", "P0", "6h", "WFRP-060", "", "Stufen-Fähigkeiten aus Original in careers.json."),
            ("WFRP-065", "Wundberechnung", "P0", "4h", "WFRP-061", "frist:liegt", "LP-Formel Buch S. 34."),
            ("WFRP-066", "Schicksalspunkte", "P1", "3h", "WFRP-061", "frist:liegt", "Glück / Schicksal / Mut / Zähigkeit. Fenster nur nach eigenem Wurf."),
            ("WFRP-067", "Mut- und Zähigkeitspunkte", "P1", "3h", "WFRP-061", "", "Buch: Mut + Zähigkeit. Nicht „Resilienz“ (kein 4e-Begriff)."),
            ("WFRP-068", "Traglast", "P1", "4h", "WFRP-064", "", "rules-core.json Traglast."),
            ("WFRP-069", "PDF Charakterexport", "P1", "10h", "WFRP-060–068", "frist:spaeter", "Nicht v1. Erst Bogen auf dem Pult."),
        ],
    },
    {
        "key": "EPIC-05",
        "title": "EPIC 05 – Kampagnenverwaltung",
        "prio": "priority:P0",
        "area": "area:campaign",
        "body": "Kampagne 1 Drosselau. Fünf Plätze. Keine zweite Stadt.",
        "tasks": [
            ("WFRP-080", "Kampagnenmodell", "P0", "8h", "—", "frist:liegt", "16-kampagne-1.md. Shell, nicht Demo."),
            ("WFRP-081", "Gruppenverwaltung", "P0", "6h", "—", "", "Fünf Spielerplätze, persistent."),
            ("WFRP-082", "Fraktionsverwaltung", "P1", "6h", "—", "frist:liegt", "drosselau-leute GROUPS (Gilden, Kult, Wache, Rat)."),
            ("WFRP-083", "Ortsverwaltung", "P1", "6h", "—", "frist:liegt", "13 Gassen, 69 Häuser. Szenen bleiben zu."),
            ("WFRP-084", "Questsystem", "P0", "8h", "—", "frist:spaeter", "Keine Quest-Engine vor der ersten Gasse. SL setzt Vorbedingungen."),
            ("WFRP-085", "Journalsystem", "P0", "10h", "—", "frist:liegt", "12-journal-und-log.md umsetzen, nicht neu spezifizieren."),
            ("WFRP-086", "Zeitleiste", "P1", "8h", "—", "", "Frist/Tick als Zeit, keine Kalender-App."),
            ("WFRP-087", "Archivsystem", "P2", "6h", "—", "", "Kleist-Snapshot ist die Sicherung. Optional Git-Tag."),
        ],
    },
    {
        "key": "EPIC-06",
        "title": "EPIC 06 – Ereignissystem",
        "prio": "priority:P0",
        "area": "area:event",
        "body": "Leben-Beats + SL-Zug. Kein Auto-Zufall.",
        "tasks": [
            ("WFRP-100", "Event Modell", "P0", "6h", "—", "frist:liegt", "Beat in Leben: Stempel, Satz, Wurf-Rechnung."),
            ("WFRP-101", "Trigger Engine", "P0", "8h", "—", "", "Triggerpunkte an Gassen, feuern nur wenn SL zieht."),
            ("WFRP-102", "Zufallsereignisse", "P1", "6h", "—", "frist:spaeter", "Pool darf existieren. Nie autoChat. SL würfelt oder zieht."),
            ("WFRP-103", "Zeitgesteuerte Ereignisse", "P1", "8h", "—", "", "Frist/Countdown, kein cron in der Welt."),
            ("WFRP-104", "Ereignisketten", "P1", "10h", "—", "frist:spaeter", "SL-Kette, keine Automaten-Plot."),
            ("WFRP-105", "Bedingungen-System", "P0", "10h", "—", "frist:liegt", "12 Zustände. conditions.json."),
            ("WFRP-106", "Konsequenz-System", "P0", "10h", "—", "", "SL deutet EG in die Welt. Engine setzt nur legale Felder."),
        ],
    },
    {
        "key": "EPIC-07",
        "title": "EPIC 07 – Bibliothek ohne KI",
        "prio": "priority:P0",
        "area": "area:campaign",
        "body": "Keine Generator-KI. Drosselau-Pools, SL zieht. Umbenannt von Abenteuergenerator.",
        "tasks": [
            ("WFRP-120", "Abenteuer Templates", "P0", "8h", "—", "frist:spaeter", "Keine Template-Kampagne vor Szene 1."),
            ("WFRP-121", "Begegnungsbibliothek", "P0", "10h", "—", "", "Leerer ENCOUNTER_TABLES füllen — nur SL-Zug, Drosselau."),
            ("WFRP-122", "Ortsbibliothek", "P0", "10h", "—", "frist:liegt", "stadt-verzeichnis.md + drosselau.ts."),
            ("WFRP-123", "NSC Bibliothek", "P0", "10h", "—", "frist:liegt", "bewohnerregister + stammbaeume. Bögen erst wenn SL zieht."),
            ("WFRP-124", "Loot Bibliothek", "P1", "6h", "—", "", "Leer, SL-Zug, keine Drop-Tabelle auto."),
            ("WFRP-125", "Dropdown Abenteuer Builder", "P0", "12h", "—", "frist:spaeter", "SL-Pult: Gasse öffnen, NSC sprechen. Kein Dungeon-Hub."),
            ("WFRP-126", "Export Abenteuerpaket", "P1", "8h", "—", "frist:spaeter", "Nicht v1."),
        ],
    },
    {
        "key": "EPIC-08",
        "title": "EPIC 08 – Benutzeroberfläche",
        "prio": "priority:P0",
        "area": "area:ui",
        "body": "Pult = Leben + Standbild + Arbeit. Kein VTT-Kampfbrett.",
        "tasks": [
            ("WFRP-140", "Dashboard", "P0", "8h", "—", "frist:liegt", "Start-Route. Vereinfachen, nicht Feature-add."),
            ("WFRP-141", "Charakterübersicht", "P0", "6h", "—", "frist:liegt", "Bogen auf dem Pult."),
            ("WFRP-142", "Kampagnenübersicht", "P0", "6h", "—", "", "Fünf Plätze, Drosselau-Teaser, Schwierigkeit."),
            ("WFRP-143", "Regelwerksbrowser", "P0", "10h", "—", "frist:liegt", "knowledge/ Hubs. Suchbar machen."),
            ("WFRP-144", "Suchfunktion", "P0", "10h", "—", "", "MVP-Grenze laut Backlog: nach diesem Ticket."),
            ("WFRP-145", "Filter-System", "P1", "6h", "—", "", "Katalog grau nach Szene/Fähigkeit."),
            ("WFRP-146", "Dunkelmodus", "P2", "4h", "—", "frist:spaeter", "Pergament bleibt die Sprache. Optional."),
            ("WFRP-147", "Responsive Mobile UI", "P1", "12h", "—", "", "Chat+Pult auf dem Telefon lesbar."),
        ],
    },
    {
        "key": "EPIC-09",
        "title": "EPIC 09 – PWA / Offline",
        "prio": "priority:P1",
        "area": "area:pwa",
        "body": "Async heißt Frist, nicht zuerst Service Worker.",
        "tasks": [
            ("WFRP-160", "Service Worker", "P1", "6h", "—", "frist:spaeter", "Nach MVP."),
            ("WFRP-161", "IndexedDB Layer", "P1", "10h", "—", "frist:spaeter", "Heute Store im Client. Nicht doppelte Wahrheit."),
            ("WFRP-162", "Offline Regelwerke", "P1", "10h", "—", "frist:spaeter", "knowledge/ ist schon lokal im Repo."),
            ("WFRP-163", "Offline Charaktere", "P1", "8h", "—", "frist:spaeter", "Nach Persistenz."),
            ("WFRP-164", "Offline Kampagnen", "P1", "8h", "—", "frist:spaeter", "Nach Persistenz."),
            ("WFRP-165", "Synchronisation", "P1", "12h", "—", "frist:spaeter", "Kein Server-Zwang in v1."),
        ],
    },
    {
        "key": "EPIC-10",
        "title": "EPIC 10 – Export & Import",
        "prio": "priority:P1",
        "area": "area:export",
        "body": "JSON zuerst. Keine PDFs ins Git.",
        "tasks": [
            ("WFRP-180", "JSON Export", "P0", "4h", "—", "", "Bogen + Kampagnenstand."),
            ("WFRP-181", "JSON Import", "P0", "6h", "—", "", "Validieren gegen Register."),
            ("WFRP-182", "TXT Export", "P1", "4h", "—", "", "Journal-Faden."),
            ("WFRP-183", "HTML Export", "P1", "6h", "—", "frist:spaeter", "Nach Leben-Faden."),
            ("WFRP-184", "PDF Export", "P1", "12h", "—", "frist:spaeter", "Nicht v1."),
            ("WFRP-185", "Modul Export", "P1", "8h", "—", "frist:spaeter", "Kein Modulmarkt."),
            ("WFRP-186", "Modul Import", "P1", "8h", "—", "frist:spaeter", "Kein Modulmarkt."),
        ],
    },
    {
        "key": "EPIC-11",
        "title": "EPIC 11 – Qualitätssicherung",
        "prio": "priority:P0",
        "area": "area:devops",
        "body": "Gate liegt. Tests an dice/resolve/skills.json.",
        "tasks": [
            ("WFRP-200", "Unit Test Setup", "P0", "6h", "—", "", "Vitest an dice.ts + grey.ts."),
            ("WFRP-201", "Regelwerks Tests", "P0", "8h", "—", "frist:liegt", "validate_wissen.py in CI (wissen.yml)."),
            ("WFRP-202", "Charakter Tests", "P0", "8h", "—", "", "LP, Status, Ausbau-grau."),
            ("WFRP-203", "Event Tests", "P0", "8h", "—", "", "Resolver + Glück-Fenster eigener Tick."),
            ("WFRP-204", "Integration Tests", "P1", "12h", "—", "", "Erschaffung → Pult ohne Demo."),
            ("WFRP-205", "E2E Tests", "P1", "16h", "—", "frist:spaeter", "Nach UI-Ruhe."),
        ],
    },
    {
        "key": "EPIC-12",
        "title": "EPIC 12 – Dokumentation",
        "prio": "priority:P1",
        "area": "area:rules",
        "body": "00-KONTEXT + NOTICE zuerst. Kein zweites Wiki.",
        "tasks": [
            ("WFRP-220", "Entwicklerdokumentation", "P0", "8h", "—", "frist:liegt", "README, NEUES-FENSTER, SKILL.md. Kürzen, nicht stapeln."),
            ("WFRP-221", "Modul SDK Dokumentation", "P0", "10h", "—", "frist:spaeter", "Kein SDK in v1."),
            ("WFRP-222", "Datenmodell Dokumentation", "P0", "6h", "—", "frist:liegt", "02-datenmodell.md + data/README.md."),
            ("WFRP-223", "Homebrew Leitfaden", "P1", "6h", "—", "frist:spaeter", "SL-Freiheit protokollieren, kein Homebrew-SDK."),
            ("WFRP-224", "Spielleiter Handbuch", "P1", "12h", "—", "", "06-spielleiter + Leben + Drosselau, eine Stimme."),
            ("WFRP-225", "Benutzerhandbuch", "P1", "12h", "—", "", "Spieler: Intention, Wurf, Frist. Kurz."),
        ],
    },
]


def issue_body_epic(e: dict) -> str:
    lines = [
        FRIST,
        "",
        f"**Epic:** `{e['key']}`",
        f"**Bereich:** `{e['area']}`",
        "",
        e["body"],
        "",
        "## Tasks",
    ]
    for tid, title, prio, hours, deps, extra, note in e["tasks"]:
        lines.append(f"- `{tid}` {title} · {prio} · {hours} · depends {deps}")
    lines += ["", "## Reihenfolge Frist", "JSON verdrahten → Charakter/Karriere-Skills → SL öffnet Gasse. Kein Modulsystem vor der ersten Szene."]
    return "\n".join(lines)


def issue_body_task(tid, title, prio, hours, deps, extra, note, epic_num, epic_title) -> str:
    return "\n".join(
        [
            FRIST,
            "",
            f"**ID:** `{tid}`",
            f"**Epic:** #{epic_num} {epic_title}",
            f"**Priority:** {prio}",
            f"**Estimate:** {hours}",
            f"**Depends on:** {deps}",
            "",
            "## Aufgabe",
            note,
            "",
            "Nicht umsetzen als zweites Produkt. Buch bleibt Autorität.",
        ]
    )


def create_issue(title: str, body: str, labels: list[str]) -> dict:
    cmd = [
        "issue",
        "create",
        "--repo",
        REPO,
        "--title",
        title,
        "--body",
        body,
    ]
    for lb in labels:
        cmd += ["--label", lb]
    url = gh(*cmd)
    # fetch number
    view = json.loads(
        gh("issue", "view", url, "--json", "number,title,url,id")
    )
    return view


def add_subissue(parent_number: int, child_number: int) -> None:
    return  # Parent stands in the body. REST sub_issue_id typing is flaky.


def main() -> None:
    have = existing_titles()
    epic_nums: dict[str, int] = {}
    created = 0
    skipped = 0

    for e in EPICS:
        title = e["title"]
        if title in have:
            epic_nums[e["key"]] = have[title]
            print(f"skip epic {title} #{have[title]}")
            skipped += 1
        else:
            labels = [e["prio"], "type:epic", e["area"]]
            v = create_issue(title, issue_body_epic(e), labels)
            epic_nums[e["key"]] = v["number"]
            have[title] = v["number"]
            created += 1
            print(f"epic {title} #{v['number']}")

        parent = epic_nums[e["key"]]
        for tid, ttitle, prio, hours, deps, extra, note in e["tasks"]:
            full = f"{tid} {ttitle}"
            if full in have:
                print(f"  skip {full} #{have[full]}")
                skipped += 1
                continue
            labels = [f"priority:{prio}", "type:task", e["area"]]
            if extra:
                labels.append(extra)
            body = issue_body_task(tid, ttitle, prio, hours, deps, extra, note, parent, e["title"])
            v = create_issue(full, body, labels)
            have[full] = v["number"]
            created += 1
            print(f"  task {full} #{v['number']}")
            add_subissue(parent, v["number"])

    print(json.dumps({"created": created, "skipped": skipped, "epics": epic_nums}, indent=2))


if __name__ == "__main__":
    main()
