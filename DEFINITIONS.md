# DEFINITIONS.md — the word STUDY page (`#/definitions`)

> Built in session **D1**. This documents the Definitions subsystem: what it is, how it works, the
> files it touches, and **how to grow it** (including the `definition.txt` applied-word marker
> convention). For the running status log see `CLAUDE.md` §14 (D1); for curriculum placement see
> `CURRICULUM.md` §E.

## 1. What it is (and why)

The **Dictionary** (`#/dictionary`) is a fast flat **lookup**: search, scan, leave. **Definitions**
(`#/definitions`) is the **study** surface over the **same word corpus** — built for *active recall*,
not reference. Owner's framing (D1): "the Dictionary is primitive; make word study deep and memorable."

Key architectural decision (owner-approved, D1): **Definitions is NOT a second dictionary.** It reads
the same `WORDS` (`src/data/words/*`) — one source of truth, no drift, ids immutable. It is now the
**front door for words**: global word search deep-links to `#/definitions/<id>` (`src/lib/search.ts`),
and Sidebar + TopBar list **Definitions above Dictionary**. The Dictionary page stays working for now;
demoting/redirecting it is a deferred follow-up (it is a shipped, cross-linked surface — per the
project's decision rights, deleting/renaming needs owner sign-off).

## 2. The four study modes (the "studio")

Every word opens a studio with four ways to engrave it — deliberately different so each session picks
what clicks:

| Mode | What it does |
|---|---|
| **📖 Study** | Definition-first (EN + UA тлумачення) + synonyms/antonyms + the **4 general / 3 professional** examples split (business · office · dev), collocations, see-also. Richer than the Dictionary card. |
| **🎴 Recall** | Definition-first **flashcard**: the headword is **masked** (`· · ·`) until *Reveal* → then self-rate (I knew it → known · Practise again → learning). |
| **🧩 Describe** | The **"define it without naming it"** challenge. A **derived scaffold** (part of speech · function · a synonym · an opposite · a typical context) + a **taboo** list (the headword + its forms). Produce a definition, reveal the model, self-rate. |
| **✍️ Cloze** | The headword is blanked in one of **its own example sentences**; type it, auto-checked through `src/lib/exercise.ts` (case- and contraction-insensitive). |

Around the studio: an **A–Z rail** (empty letters dimmed), search, level/POS filters, and a **🎲 Random**
button (opens a random word straight into Recall for cold practice). **Mastery** (new / learning /
known) shows as a dot on every row and persists per word id.

## 3. Data & the contract

- **Corpus:** the shared `WORDS` (Oxford A1 seed + `custom.ts`). Definitions renders it; it authors no
  data of its own.
- **No data-contract change.** The describe scaffold and cloze are **derived** from existing
  `WordEntry` fields (`pos`, `synonyms`, `antonyms`, `collocations`, `forms`, `examples`), so
  `scripts/check-data.ts` is untouched — custom cards pass the **existing** word contract (unique id,
  US IPA, bilingual `def`, exactly 7 tagged examples = 4 general + 1 business + 1 office + 1 dev,
  resolvable see-also).
- **First custom wave (D1): 20 golden b1–c1 cards** in `src/data/words/custom.ts` (`source:'custom'`),
  curated from `_examples/definition.txt` (see §6).

## 4. Mastery & SRS

`src/lib/masteryStore.ts` — `new | learning | known` per **word id**, in `localStorage`
(`englishguide.mastery.v1`), via `useSyncExternalStore` (SSR-safe). It is deliberately **SRS-compatible**:
keyed by the immutable card id, so the planned `#/review` **SM-2-lite** port adopts these states without
a migration. (Full SM-2-lite stays `#/review`'s job.)

## 5. Files

**New**

- `src/components/pages/DefinitionsPage.tsx` — the page (index + studio, four modes).
- `src/lib/definitions.ts` — pure helpers: A–Z grouping, the 4+3 split, surface-form **cloze**, the
  **describe scaffold**. No React; golden-tested.
- `src/lib/masteryStore.ts` — the mastery store (§4).
- `scripts/test-definitions.ts` — golden test (auto-discovered by `run-tests.ts`).

**Edited**

- `src/lib/hashRouter.ts` — `definitions` route + `hrefDefinitions`.
- `src/App.tsx` — lazy route render.
- `src/components/layout/{Sidebar,TopBar}.tsx` — Definitions nav (front door).
- `src/lib/search.ts` — word results deep-link to `#/definitions/<id>`.
- `src/i18n/ui.ts` — `definitions*` + `mastery*` strings (bilingual).
- `src/theme/components.css` — `.def-*` styles (reuse `.dict-*` / `.levelseg` / `.chip` / `.quiz-opt`).
- `scripts/smoke.ts` — DefinitionsPage SSR (EN+UK) + `#/definitions[/<id>]` hashes.
- `src/data/words/custom.ts` — the 20 cards.

## 6. Growing it — the add-words flow + the marker convention

To add words, follow the **add-words protocol** (`CLAUDE.md` §10): golden cards go to `custom.ts`
(`source:'custom'`), ids stable forever, then `npm run check:data`. Definitions and the Dictionary both
pick them up automatically (shared corpus). New cards enter mastery as *new*.

**Applied-word marker (D1 convention).** The raw backlog `_examples/definition.txt` is where words are
sourced from. When a word becomes a golden card, mark its source line(s) with a trailing **`✅ [D1]`**
(or `✅ [<wave>]` for later waves) and list it in the **APPLIED** header block at the top of the file.
This makes it trivial to tell **done** words from **unapplied** backlog: `grep '✅ \[' definition.txt`
lists everything applied; unmarked lines are still open. Keep the header block's count in sync.

**Applied so far (D1 — 20 words):** circumstances · nuance · cohesion · accommodate · indispensable ·
setback · collaborative · glitch · deadline · prioritize · resolve · gist · precise · simultaneously ·
acknowledge · willingness · assertive · cautious · transparent · allocate.

**Applied so far (D4 — +60 words → 200 total):** arrange · gather · resist · neglect · overlook · gain · enrich · reserve · return · skip · invite · split · conduct · succeed · unwind · arrangement · concern · involvement · acquaintance · addiction · carefree · hysterical · neutral · weird · stable · suitable · pure · vigorous · complex · complexity · tight · invisible · irreplaceable · confusing · boring · ill · satisfaction · downside · distress · leisure · stranger · compassion · compassionate · pasta · porridge · oatmeal · pancake · grape · pumpkin · cereal · bat · hippo · bush · rope · glove · hardly · whenever · unfortunately · obviously · enough.

## 7. Verification (D1)

Full `npm run verify` green in the cloud scratch — typecheck · eslint · check:data (**170 words = 150
a1 + 20 custom**) · test ×5 (incl. `test-definitions`) · smoke (**199 checks**) · build. Screenshot-
checked in headless Chromium: index EN + UA, all four studio modes (incl. the masked Describe/Recall)
and cloze; 0 page errors.

## 8. Deferred / next

- Grow the custom corpus in further waves (rest of `definition.txt`), marking applied words per §6.
- Demote/redirect the Dictionary page once Definitions has proven itself.
- Wire mastery into the `#/review` SM-2-lite port.
- Optional: synonym/antonym match mini-game, word-of-the-day.
