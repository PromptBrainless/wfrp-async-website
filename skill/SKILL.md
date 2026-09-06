---
name: pdf-to-interlinked-md
description: Extract complete uncut content from large structured PDFs (especially rulebooks) into hierarchical interlinked Markdown files. Use when the user wants full PDF-to-Markdown conversion with cross-links, chapter splitting, or building a navigable knowledge base from a rulebook or long document.
---

# PDF to Interlinked Markdown

Convert large, structured PDFs into a clean, fully interlinked Markdown knowledge base. Preserve all textual content (ungekürzt). Split by logical chapters/sections. Create strong navigation and cross-references.

## When to Use

- User provides a PDF (or document_id) and wants complete Markdown extraction
- Building a rulebook knowledge base (e.g. WFRP, D&D, other RPGs)
- User asks for "ungekürzt", "vollständig", "aufsplitten", "verlinken", "vernetzen"
- Continuing or expanding an existing extraction folder (e.g. `wfrp-md/`)

## Core Workflow

1. **Analyze structure**
   - Use `pdf_search` / `pdf_browse` to identify the table of contents and major headings.
   - Map the document into a hierarchical folder + file plan.

2. **Define output layout**
   - Create (or reuse) a numbered folder structure that mirrors the book:
     ```
     output/
     ├── 00-INDEX.md
     ├── 01-chapter-name/
     │   ├── 01-section.md
     │   └── 02-section.md
     ├── 02-...
     └── ...
     ```
   - Keep existing folders when continuing previous work.

3. **Extract uncut content**
   - Browse relevant page ranges.
   - Extract **full text**, tables, lists and important side content.
   - Do **not** summarize or shorten body text.
   - Preserve original headings, page references and terminology.

4. **Write Markdown files**
   - One logical section (or sub-chapter) per file.
   - Start every file with a clear H1 and source page reference.
   - Use consistent heading levels (H1 = file title, H2/H3 = internal structure).
   - Convert tables to proper Markdown tables.

5. **Create interlinking**
   - Maintain a central `00-INDEX.md` with links to every major file.
   - Add relative links between related files (e.g. `[Karrieren](../03-klassen-karrieren/03-karrieren-liste.md)`).
   - Use "Siehe auch" / "Verwandte Abschnitte" blocks where concepts cross-reference.
   - Keep link paths relative and stable.

6. **Incremental saving**
   - After every meaningful chunk, write the Markdown file immediately.
   - Update the INDEX after each major addition.
   - Re-zip the output folder when the user requests a download.

## Output Conventions (WFRP-style / general rulebooks)

- Folders numbered and named after major parts (01-einfuehrung, 02-charaktere, …).
- Filenames descriptive and numbered inside the folder.
- German language preserved when the source is German.
- Page numbers noted as `Quelle: S. XX` or `S. XX–YY`.
- No invented content – only what is in the PDF.

## Tools to Prefer

- `pdf_search` for locating sections and keywords
- `pdf_browse` for reading concrete page ranges
- `write_file` / `edit_file` for creating and updating Markdown
- `bash` + `zip` when packaging for download

## Quality Rules

- **Ungekürzt**: Full paragraphs and tables, not summaries.
- **Structured**: Clear hierarchy and predictable file names.
- **Linked**: INDEX + cross-links between related topics.
- **Traceable**: Source page references kept.
- **Incremental**: Save after each logical unit so progress is never lost.

## Example Trigger Phrases

- "Extrahiere das Kapitel X vollständig"
- "Setze die Markdown-Erschließung fort"
- "PDF ungekürzt in verlinkte Markdown-Dateien aufteilen"
- "Vervollständige die fehlenden Kapitel"
- "Baue die Wissensbasis aus dem Regelwerk weiter"

When the PDF is the WFRP Grundregelwerk, continue the existing structure under `knowledge/` unless the user specifies otherwise.
