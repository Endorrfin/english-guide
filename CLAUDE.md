# CLAUDE.md — `english-guide`

> **Working guide and source of truth for every session in this repo. Read this file fully before
> starting any session.** At the end of each session append the full entry to `SESSIONS.md` and a
> one-line summary to §14 (CHANGED (DOCS1): the journal lives in SESSIONS.md).
> See `../_standard/GUIDE-AUTHORING-STANDARD.md` for the cross-guide rules this guide conforms to
> (Tier 1), and `PROJECT-BRIEF.md` §5 for the locked decisions — do not re-ask them.

## 1. Mission

A deep, interactive, bilingual (EN/UA) **English-language trainer** for a UA-speaking engineer (owner:
B1+): grammar A1→C1 organized by **CEFR level**, a **flagship Modal Verbs section with heavy drilled
practice**, a **Tenses section (second flagship, S5+) — the whole tense system in one place with a
4-level dive mechanic**, and a **searchable dictionary growing 1,000→3,000+ words** — translations, тлумачення, IPA,
7 tagged examples per word (4 general + business/office/dev), phrasal verbs and 300+ idioms as
first-class cards — plus trainers: **SRS flashcards (SM-2-lite), gap-fill, MCQ, irregular-verbs drill**.
Quality bar: the `../database guide` (its Glossary UX is the explicit reference). Golden = depth +
learning-UX + correctness, in that order.

## 2. Stack & key decisions (with why)

- **Vite + React 19 + TypeScript (strict).** Static content, no runtime fetch — works offline, deploys anywhere.
- **No router library** — small custom **hash router**: `#/map`, `#/tenses[/<time>/<aspect>]`
  (TM1+TM2 — may carry a `?v=&s=&p=` share query; parseHash strips a query segment for ALL routes),
  `#/m/<module>/<topic>`,
  `#/definitions/<id?>` (D1), `#/dictionary/<id?>`, `#/idioms` (V2), `#/practice`, `#/review`,
  `#/irregular`. Hash routing + `vite base:'./'` works under any GitHub Pages sub-path with zero
  config. **Words hub (V1/V2):** `#/dictionary` · `#/definitions` · `#/idioms` · `#/irregular` are one
  top-nav section **Words** with a shared sub-tab bar (`VocabTabs`/`WordsLayout`); routes stay flat, so
  deep-links + search are untouched. `isWordsRoute()` lights the single nav entry on any tab.
- **SSOT:** `src/data/concepts.ts` (thin aggregator) + `src/data/modules/*` for grammar;
  **`src/data/words/{a1,a2,b1,b2,c1,custom}.ts` for the dictionary**. Pages render from data.
- **Bilingual at the data layer:** every human-readable string is `Localized { en; uk }`.
- **Figures and sims by key** via `lib/registry.tsx` (React.lazy). Content edited **only** in `src/data/*`.
- **Guide-specific decisions (the sanctioned deviations + extensions):**
  - `Level` = **CEFR `'a1'…'c1'`** in `types.ts` (not beginner/…/staff) — the natural axis of a
    language guide; drives map, filters, decks, exercise levels.
  - `Module.exercises?: Exercise[]` — per-module practice (like `interview?`), aggregated by
    `#/practice` via `tags`.
  - Dictionary types: `WordEntry` (kind `word|phrasal|idiom`, **7 tagged examples: 4 general +
    business/office/dev**, `source: 'oxford'|'custom'`), `IrregularVerb`.
  - **Words meta-split — DONE (M1)** (standard §4.4). `scripts/gen-data-index.ts` emits two SLIM
    generated modules that the eager shell imports *instead of* the corpora:
    `src/data/words/index.generated.ts` (`WORD_INDEX` = id · word · level · joined translations,
    ~52 kB + `WORD_COUNTS`) and `src/data/reading/index.generated.ts` (`READING_COUNTS` only).
    The real datasets live in named lazy chunks (`vite.config` manualChunks: `words` · `reading` ·
    `idioms`). **Search keeps definition matching** by deferring it, not dropping it:
    `lib/search.ts` `primeWordCorpus()` dynamically imports the full corpus on first search intent
    and the next query re-ranks with a `def` field (TopBar primes on focus). Enforced by
    `check:index` (staleness) + `check:bundle` (the eager static-import graph and its budget) —
    both chained into `verify`. **`WORD_INDEX` is a budget, not a bag**: every field costs eager
    bytes on every page load, so measure before adding one.
  - **Module meta-split — DONE (M2)** (standard §4.4, the database guide's S19 pattern). The eager
    shell reads generated **`data/meta.generated.ts`** (`MODULE_META`: id · num · section · order ·
    level · signature · title · tagline · readMins · mentalModel · `authored` · topic id+title — ~44 kB
    for all 34) and never a module body. `concepts.loadModule(id)` fetches one body from its own lazy
    chunk via generated **`data/moduleLoaders.generated.ts`** (memoized; a stub or a failed fetch
    resolves to undefined → the page shows ComingSoon). `#/practice` — the one surface needing drills
    from EVERY module — reads generated **`data/drills.generated.ts`** (181 drills, lazy with that
    route) instead of loading 34 bodies. The full eager list lives in **`data/modules/all.ts`**,
    **Node-side only** (generator + `check:data` + `smoke`); importing it from `src/` fails
    `check:bundle`. `ModulePage` renders header/TOC from meta instantly and mounts `<ModuleBody/>`
    when the chunk lands; `ModuleBody` is pure so the smoke can SSR real content.
  - **SRS (built R1)**: `../database guide/src/lib/srs.ts` (SM-2-lite) ported **verbatim** + its
    `srsStore` localStorage pattern (key `englishguide.srs`). **Decks = four by CORPUS** — Dictionary
    (Oxford seed) · My words (`custom.ts`) · Idioms · Irregular verbs — mutually disjoint, with CEFR
    level as a **filter** on top (owner decision R1; "per level" from CURRICULUM §B is the filter, not
    five decks, so a word is never counted twice). Card ids are `<deck-prefix><data id>`
    (`wd:` · `mw:` · `im:` · `ir:`) and **stable forever** (progress keys) — never rename, only append;
    the prefix lets the nav due-badge attribute a stored state to its deck with **no corpus import**.
  - **Pronunciation:** IPA strings on cards + **Web Speech API** (`speechSynthesis`, `en-US`/`en-GB`
    voice pick, graceful no-voice fallback). No audio files.
  - **Dive levels (S5):** `Block.dive?: 2|3|4` — per-block depth tags (2 🚂 core rules + main
    examples · 3 🚶 connections, contrasts, argumentation · 4 🔬 fine print, exceptions) + a
    persisted **DiveSwitcher** on module pages ([🚂 Core | 🚶 Full | 🔬 Deep] + a ✈️ Map button →
    the section overview module); blocks deeper than the current setting render as thin expandable
    stubs, default 🚂. Level 1 ✈️ = the overview module + landing-map card. Piloted in Section II
    Tenses; the mechanic is generic — any module that tags blocks gets the switcher.
  - **Time triad + aspect glyphs (S5):** tense visuals encode TIME as hue (`--time-past` rose
    #f472b6 · `--time-present` cyan #22d3ee · `--time-future` violet #a78bfa) and ASPECT as timeline
    notation (● simple fact · 〜 continuous process · ⤺ perfect link-back · 〜⤺ perfect continuous;
    X = reference point, vertical NOW axis) — one shared `TenseGlyphs` vocabulary across every tense
    figure, table and sim.
- **Exercise engine:** `src/lib/exercise.ts` — pure, deterministic (answer normalization:
  case, trim, contraction equivalence `mustn't` = `must not`), golden-tested via `scripts/test-exercise.ts`.

## 3. Repo layout (target)

```
src/
  main.tsx · App.tsx · vite-env.d.ts
  data/      concepts.ts (SSOT aggregator) · modules/mN-*.ts · types.ts
             words/{a1,a2,b1,b2,c1,custom}.ts · words/index.generated.ts (slim search index, M1)
             idioms.ts (idioms + phrasal verbs) · collocations.ts (V12) · phrases.generated.ts
             (V12: tab-badge counts — VocabTabs must never import a corpus, see §14 V12)
             reading/*.ts + reading/index.generated.ts (counts for the landing map, M1)
             irregular.ts · meta.generated.ts + drills.generated.ts + moduleLoaders.generated.ts (M2)
             modules/all.ts — the eager full list, NODE-ONLY (never import from src/)
  i18n/      lang.ts (useLang) · LangProvider.tsx · ui.ts
  lib/       hashRouter.ts · registry.tsx · search.ts (modules + words) · exercise.ts · srs.ts ·
             phrases.ts (shared expression engine, V12) · idioms.ts · collocations.ts (+ the drill) ·
             srsStore.ts · tts.ts (speechSynthesis wrapper) · appState.ts · utils.ts
  theme/     tokens.css · global.css · components.css
  components/ layout/ · module/ (ModulePage = meta header + lazy ModuleBody, M2) · map/ ·
             pages/ (Dictionary, Practice, Review, Irregular) ·
             sims/ · figures/ (PascalCase.tsx)
scripts/     check-data.ts · run-tests.ts · smoke.ts · gen-data-index.ts (M1 meta-split generator) ·
             check-data-index.ts (staleness) · check-bundle.ts (eager-graph + budget guard) ·
             test-exercise.ts · test-srs.ts (ported)
public/      favicon.svg · .nojekyll
.github/workflows/deploy.yml
CLAUDE.md · SESSIONS.md (full session journal, DOCS1) · PROJECT-BRIEF.md · CURRICULUM.md · README.md
_examples/words-backlog.txt (gitignored raw backlog, see §12)
```

**Deviations from the standard, sanctioned by the owner:** repo/package/Pages path is
**`english-guide`** (not `english-comprehensive-guide` — repo already existed); monorepo folder is
`english-guide` (kebab, not `"English guide"`); `Level` is CEFR (§2).

## 4. Content / data model (the contract)

**Section → Module → Topic → Block** (7 kinds: `prose · figure · sim · table · code · callout ·
compare`) as in the standard §4.2; contract in `src/data/types.ts`. Blocks may additionally carry
`dive?: 2|3|4` (S5 depth tags, §2) — no tag = 2, the backbone. Every module opens with a
**mental model** + **key points** and closes with **pitfalls** (incl. typical UA-speaker mistakes) +
**exercises** (≥8; modal modules ≥15). English-guide extensions in the same file: `WordEntry`,
`WordExample` (tag `general|business|office|dev`), `Exercise` (`gap`|`mcq`, stable `id` = progress
key), `IrregularVerb`, `Pos`, `EntryKind`.

**Language nuance for a language guide:** example sentences are the study object — `text.en` is the
sentence, `text.uk` its natural translation. Grammar terms stay English in both languages (Present
Perfect, modal, gerund…). UA explanations are written for clarity at the owner's level (B1+), never
calqued.

## 5. Curriculum

6 sections · 34 modules (S5 restructure — ALL tenses consolidated into one section): **I Foundations**
(A1–A2, m1–m5) · **II Tenses ★second flagship** (A1–B2, m6–m11, golden `m6-tense-system`, 4-level
dive) · **III Core Grammar** (B1, m12–m16) · **IV Modal Verbs ★flagship** (m17–m22, golden
`m17-modal-system`) · **V Advanced Grammar** (B2–C1, m23–m30) · **VI Vocabulary in Action** (m31–m34);
Reading = Section VII (a page system, not modules). Romans are display-only — section ids and
everything from m12 up are untouched by the restructure; the swapped Foundations/Tenses stubs were
unauthored (zero progress-key impact). Dictionary waves W1–W5 (150 → 1,000 → 2,000 → 3,000 →
+idioms) + continuous weekly owner additions. Full map: `CURRICULUM.md` (authoritative for topics).

## 6. Signature interactives + diagram-first baseline

**9 sims (S5 + C2):** `modal-navigator` ★golden (built) · `deduction-lab` (m21, built) ·
`tense-navigator` ★ (m6, built T1, golden of Tenses: 3×4 time × aspect matrix → meaning, forms +/−/?,
mini-timeline, EN/UA examples + TTS, near-misses, corpus-frequency badge — 5 forms = 96% of speech) ·
`sentence-morpher` (m6, built T4: one sentence morphed through all 12 cells — animated timeline + form
highlight + synced UA translation, aspect-major walk) · `tense-chooser` (m11, built T4: 3 meaning
questions → the right tense + near-miss explanations; encodes the cross-time overrides) ·
`conditionals-machine` ★ (m13, built C1: reality × time 3×3 → 7 content cells + 1 N/A + 1 Type-3
preview → m23; a connector LENS (unless · in case · as long as · when) with an authored take per cell,
never generated; engine `lib/conditionals.ts`, golden `scripts/test-conditionals.ts` — no will/would in
any if-clause) ·
`reported-speech-lab` ★ (m15, built C2: speech kind (statement · yes/no · wh · request) × reporting
frame (says · said a week later · said, still true) → 8 curated sentences, every render AUTHORED with
its shifts as exact in-order substrings, highlighted by kind; engine `lib/reportedSpeech.ts`, golden
`scripts/test-reported-speech.ts` — no question order, do-support or `?` in any report) ·
`article-tree` (m28) ·
`word-formation-lab` (m31). The old standalone `tense-timeline` sim is superseded by the parametric
**`TenseTimeline` figure** (one component, per-tense data, play/step) used across m7–m10.
**★ The Tense Machine** (`#/tenses`, TM1–TM3 — spec `TENSE-MACHINE-SPEC.md`) is a **page, not a
sim**: the standalone live home of the tense system — the 12-cell WALL conjugated live by the pure
`lib/conjugator.ts` over `data/tenseMachine.ts` (12 curated verbs, precomputed forms; golden test
`scripts/test-conjugator.ts`), a **full ↔ short contractions toggle** (an engine style — don’t ·
won’t · she’s; questions never contract), a draggable master time axis + 12-step Tour, the
`TenseCell`-SSOT detail panel (+ TM3 **`uses[]` shade chips** on the big five and the she+write
showcase UA trio), a **satellites row** (going to · used to · would · be about to — chips under
their wall column, cards with near-misses), and the m11 `tense-chooser` embedded as its Decide tab
(two lenses, same SSOT; the m6/m11 sims untouched). Its components live in `components/tense/` +
`components/pages/` — NEVER in `sims|figures/` (smoke asserts those dirs 1:1 against registry keys).
Each sim: pure engine in `lib/*` where algorithmic, deterministic,
play/pause/step where animated, **`prefers-reduced-motion` fallback**, ARIA + live region. Crisp SVG
figure + table everywhere else. Trainers (**`#/review` SRS — built R1**, `#/practice`, `#/irregular`) and the
**Definitions study page** (`#/definitions`, D1 — the word front door: A–Z browse + Study/Recall/
Describe/Cloze over the shared word corpus) are pages, not sims. **The Words hub (V1/V2)** groups
Dictionary · Definitions · **Idioms** · Irregular under one nav section; the **Idioms trainer**
(`#/idioms`, V2) is its own SSOT (`src/data/idioms.ts`, multi-word expressions with a Ukrainian
equivalent + origin) with three modes — Learn · Guess · Match (pure logic in `lib/idioms.ts`).

## 7. Theme / brand

Dark editorial; palette in `theme/tokens.css`. Fonts **Fraunces** (display) · **Inter** · **JetBrains
Mono**. Accent = **CEFR ramp**: a1 emerald → a2 teal → b1 sky → b2 indigo → c1 violet (section accents
+ level badges), contrast-checked on the dark ground. **Time triad (S5):** `--time-past` rose
#f472b6 · `--time-present` cyan #22d3ee · `--time-future` violet #a78bfa (+ `-soft` washes);
`--sec-tenses` = the present cyan. Final hexes get a side-by-side contrast pass in T1 (cyan vs b1
sky, violet vs c1 violet — contexts are separated, but verify).

## 8. Internationalization

**Author EN first, UA second.** Every human-readable string `Localized {en;uk}`; runtime toggle in the
top bar; `i18n/` holds provider + `useLang` + ui strings. Keep ALL grammar/technical terms English in
UA text. Example sentences follow §4's nuance. No string ships with a missing language (`check:data`).

## 9. Deliverables

The web guide (primary) · bilingual `README.md` · this `CLAUDE.md` (current) · `CURRICULUM.md`
(current). Deferred: printable modals/irregular cheat-sheets (print CSS) · LinkedIn pack.

## 10. Conventions

- TypeScript **strict** + `noUnusedLocals/Parameters`; **ESLint clean** (build fails otherwise).
- Content edited **only** in `src/data/*`; never hand-edit rendered output.
- Grammar/usage claims verified against authoritative references (Cambridge/Oxford grammars, learner
  dictionaries); fill `sources` per module.
- **Dictionary ids and exercise ids are immutable** (localStorage progress keys) — append, never rename.
- Each content session ends with the verification gate (`npm run verify`) + a fact spot-check.
- **User working rules (every session):** (1) specific not generic; (2) brief "why"; (3) describe
  change + why **before** doing it; (4) mark edits `// CHANGED (S<N>):`; (5) lint-aware;
  (6) reliability/security/best-practice first; (7) ask when unclear; (8) don't just agree — challenge
  wrong/partial reasoning.
- **Session summary (end of EVERY session):** (1) what was done; (2) suggested **branch name**
  (`sN-short-topic`) + **commit message** + short description; (3) challenges/questions.

### The add-words protocol (owner's weekly +10–30)

Owner says (any session): *"add words: thrive, endeavor, grasp …"* (optionally with hints). The agent:
1) dedupes against ALL word files (existing card → extend/see-also instead of duplicating);
2) writes golden cards to `src/data/words/custom.ts` (`source:'custom'`) — or the level file if the
word is an unshipped Oxford item; 3) regenerates the words index; 4) runs `check:data`; 5) reports
the added ids. New cards enter SRS as *new* (NEW_PER_DAY caps the queue). `_examples/words-backlog.txt`
is the raw backlog for these sessions (moved from root `words.txt` in S1).

**Applied-word marker (D1 convention).** `_examples/definition.txt` is the owner's active backlog. When
a word from it becomes a golden card, mark its source line(s) with a trailing **`✅ [D1]`** (use the
session tag of the wave — `✅ [D1]`, `✅ [D2]`, …) and list it in the **APPLIED** header block at the top
of the file, keeping the count in sync. This keeps *done* words distinct from open backlog:
`grep '✅ \[' _examples/definition.txt` lists everything applied; unmarked lines are still open. Full
feature doc: `DEFINITIONS.md`.

## 11. Deploy

GitHub Pages via Actions (`.github/workflows/deploy.yml`): typecheck → lint → **check:index** →
check:data → test → smoke → build → **check:bundle** → upload `dist` → deploy. (M1 added the two
new gates; `prebuild` also regenerates the slim indexes, so a stale index cannot reach the artifact.) `concurrency: cancel-in-progress: false`. `vite base:'./'` +
`public/.nojekyll` = sub-path-safe. Repo **`endorrfin/english-guide`** (exists). **Agent sessions never
push** — the owner deploys. NOTE (updated S1): S1 shipped the shell + golden module and the full
gate is green in a scratch verify — the first push containing S1 turns CI green.

## 12. Gotchas / constraints

- The Linux sandbox **blocks `unlink`** → Vite `emptyOutDir` fails on rebuild (EPERM). Build into a
  fresh `--outDir dist-sN` (gitignored) or `build.emptyOutDir:false`; verify in a scratch copy.
- Don't run git against the live repo from the sandbox. Owner runs `npm install` (native darwin-arm64).
- Exclude `_examples/` from git/deploy.
- **words.txt → `_examples/words-backlog.txt` (gitignored) — owner decision, S1.** The raw personal
  backlog (~580 entries) stays out of the public repo; `git rm --cached words.txt` on the S1 commit
  removes it from tracking (it remains in old history unless rewritten — owner accepted). Never
  publish derived personal data beyond cleaned dictionary cards.
- `speechSynthesis` voices differ per browser/OS; `lib/tts.ts` must feature-detect and degrade to a
  disabled button with a tooltip — never throw.
- **`tsc -b` typechecks `scripts/` too** (tsconfig.node.json project ref): `check-data.ts` + `smoke.ts`
  import `src/data/concepts`, `src/i18n/LangProvider`, `src/lib/registry` — these three contract files
  exist from S0.1 (bootstrap ports) and must never be deleted, only filled. Empty
  `src/components/{sims,figures}/` dirs (with `.gitkeep`) keep the smoke's auto-discovery green pre-S1.
- Answer normalization in `lib/exercise.ts` must accept contraction variants (`mustn't`/`must not`,
  `won't`/`will not`) and be case/whitespace-insensitive — golden-test these.
- **Never import `src/data/modules/all.ts` (or a `modules/mN-*.ts` file) from application code** —
  it drags every module body into that chunk. Use `concepts` (nav meta) + `loadModule()`. Same rule
  for `data/words`, `data/reading`, `data/idioms` in anything the eager shell reaches: import the
  generated slim index instead. `npm run check:bundle` fails the build on either mistake (M1/M2).
- **A generated file is never hand-edited.** `npm run gen:index` rewrites `*.generated.ts`;
  `check:index` fails if the committed copies drift from the corpora.
- **The uploads mount caches file CONTENT (TM3).** After `device_commit_files`, re-staging a
  previously-staged path can serve the OLD bytes to the container (`/mnt/user-data/uploads/...`
  keeps the first version; only never-staged paths read fresh). Verify byte-exact write-back with
  `md5sum` **on the device via `device_bash`**, never through a re-stage of the same path.
- **Test a new build gate against a deliberate regression before trusting it.** Two versions of
  `check:bundle` were silently no-ops (M1 §14) — a gate that has never failed has not been tested.

## 13. Session roadmap

S1 **golden**: `m17-modal-system` + `modal-navigator` + shell/theme/nav/i18n + `lib/exercise.ts`
(+golden test) + Dictionary v1 + words W1 (~150 A1). → **S2 (done): `m18`–`m20`** (ability/permission,
obligation/necessity, advice/criticism) + 3 SVG figures. → **S3 (done): Reading — new Section VI**
(owner-prioritized out of plan order): a page-based system like the Dictionary — `ReadingText`/`ReadingCategory`/
`ReadingQuestion` data model, `#/reading` accordion + `#/reading/<id>` reader (EN/UA body toggle, TTS,
MCQ + open questions, mark-as-read, prev/next), check:data + smoke extended, and a **golden batch of 6
bilingual texts** across 3 categories (study · values · family). Reading grows by **OCR waves** (≈250 →
1000+ texts) from the owner's screenshot backlog. → **S4 (done): `m21` (+`deduction-lab` ★sim) + `m22`** —
**Modal Verbs (Section III at the time, now roman IV) COMPLETE** (6/6). → **S5 (done, docs-only):
the TIMES re-plan** — Section II Tenses locked (see §14). → **T1 (done): the Tenses build begins** —
skeleton (concepts/types/tokens/DiveSwitcher/landing map + check:data/smoke updates) + golden
`m6-tense-system` + `tense-navigator` ★ → **T2 (done):** `m7`+`m8` + the parametric `TenseTimeline`
figure → **T3 (done):** `m9`+`m10` + the `timeline-future` / `timeline-perfect` figure zones →
**T4 (done):** `m11` + `sentence-morpher` + `tense-chooser` + section polish — **Section II Tenses
COMPLETE (6/6)**. →
**D1 (done): Definitions study page** (`#/definitions`) over the SHARED word corpus (SSOT) — A–Z +
Study/Recall/Describe/Cloze + mastery; word search now deep-links there; **20 golden custom cards**
(first custom wave). → **D2–D11 (done): +435 definition cards** (dictionary → 605 words; runbook = SESSIONS.md appendix). →
**V1–V11 (done):** the Words hub · Idioms trainer (357 — idioms/phrasals/collocations, each browsable by a category bar, V11) · Irregular trainer (75). →
**V12 (done):** Collocations get their OWN tab, dataset and lazy chunk (`#/collocations`, 162) + the ★ “Which word?” drill; `VocabTabs` counts move to a generated index and a route-isolation gate locks it in. →
**V13 (done):** collocations polish — BrE sweep of idioms/collocations · cross-card synonyms filtered from the drill · new `meetings` category (9). →
**RB1 (done):** Reading 100 → 131. →
**R1 (done): the `#/review` SRS trainer** — `srs.ts` ported 1:1 + `srsStore` + 4 corpus decks over
769 existing cards + mastery import + progress backup/restore + the nav due-badge. →
**M1 (done): the dictionary meta-split** — generated slim indexes for the eager shell, corpora in
lazy chunks, definition search deferred via `primeWordCorpus()`; eager payload **1.39 MB → 745 kB**;
`check:index` + `check:bundle` gates added. **W2 is unblocked.** →
**M2 (done): the module meta-split** — generated nav meta + per-module lazy body chunks + a lazy
drills chunk for `#/practice`; `ModulePage` renders header/TOC instantly. Eager payload **745 → 326 kB**
(cumulative M1+M2: **1.39 MB → 326 kB, −77%**). Also fixed the `npm ci` break M1 caused (a stray
`playwright` devDependency). **Nothing is blocking content now.** →
**TM1+TM2 (done): ★ The Tense Machine** (`#/tenses`) — the standalone live home of the tense
system (spec `TENSE-MACHINE-SPEC.md`): the 12-cell wall + `lib/conjugator.ts` + master axis +
Tour + Decide tab; nav entry + porthole retarget. →
**TM3 (done): the Machine's final wave** — `uses[]` shades wave 1 (big five, 24 uses, chips in
the detail panel) + the 4 satellites (going to · used to · would · be about to) + the full↔short
contractions toggle in the engine (golden-tested both renders) + the she+write showcase UA trio.
Shades wave 2 (the remaining seven cells, 2–4 uses each) stays open. →
**C1 (done):** Section III begins — `m13` + ★ `conditionals-machine` + `conditional-distance` figure. →
**C2 (done):** `m15` + ★ `reported-speech-lab` + `m16` + the `verb-pattern-map` / `meaning-switch` figures. →
**C3 (done):** `m14` + `passive-flip` · `m12` + `comparison-scale` + section polish — **Section III Core Grammar COMPLETE (5/5)**. →
VI (m31–m34) + `word-formation-lab` · I (m1–m5) ·
V (m23–m30) + `article-tree`, + dictionary waves W2–W5, **with Reading waves interleaved**. →
polish: map · mental-models gallery · module + reading meta-splits · bilingual QA · a11y pass.
(Re-plan per session allowed; Tenses go first — the owner's S5 priority. Full detail:
CURRICULUM.md §G / §R.)

## 14. Status / progress log

<!-- CHANGED (DOCS1): the full journal moved to SESSIONS.md; this section is now a one-line index. -->
**Full entries live in [`SESSIONS.md`](SESSIONS.md)** (verbatim, append-only). A reference like
`§14 M1` in code or docs means "the M1 entry in SESSIONS.md". **End of every session:** append the
full entry to `SESSIONS.md`, then add ONE line here (tag · date · what shipped · counts that changed).
Read `SESSIONS.md` only when a task needs the history behind a decision.

- **S0** — scaffold from the tier1-spa template; CEFR `Level`; four meta-docs.
- **S0.1** — bootstrap contract files (`concepts.ts`, `LangProvider`, `registry.tsx`); typecheck green.
- **S1** — golden: shell/theme/router/search/i18n · `m17` + ★`modal-navigator` · `lib/exercise.ts` · Dictionary v1 + W1 (150 A1).
- **S2 (modals)** — `m18`–`m20` + 3 figures (ability-timeline · obligation-source · advice-ladder).
- **S3** — Reading section: data model, `#/reading` + reader, first 6 texts.
- **S4** — `m21` + ★`deduction-lab` + `m22` — Modal Verbs COMPLETE (6/6).
- **S5** — docs-only TIMES re-plan: Section II Tenses, dive levels 2–4, time triad + aspect glyphs.
- **T1** — Tenses skeleton + DiveSwitcher + golden `m6` + ★`tense-navigator`.
- **T2** — `m7` + `m8` + parametric `TenseTimeline` (present/past zones).
- **T3** — `m9` + `m10` + `timeline-future` / `timeline-perfect` zones.
- **T4** — `m11` + ★`sentence-morpher` + ★`tense-chooser` — Tenses COMPLETE (6/6); SimBlock captions.
- **D1** — `#/definitions` study page (Study/Recall/Describe/Cloze, mastery) + 20 custom cards.
- **D2–D6** (2026-07-20) — +277 single-word cards (custom 20 → 297); single-word backlog cleared.
- **D7** (2026-07-24) — +68 cards from `definition_v2.txt` (custom → 365).
- **D8** (2026-07-31) — +20 inline cards (→ 385), fact-check subagent.
- **D9** (2026-08-07) — +37 inline cards (→ 422); -ly adverbs get own cards.
- **V1+V2** (2026-07-24) — Words hub (VocabTabs) + Idioms trainer (Learn/Guess/Match).
- **V3–V9** (2026-07-24) — Irregular trainer (75) · idioms 27 → 179 · Reading body-language fix.
- **V10** (2026-07-25) — +100 collocations + category bar (`group`, `note`).
- **V11** (2026-07-25) — +71 idioms, +7 phrasals; idiom `category` taxonomy (11).
- **RB1** — Reading +31 (new `biographies` category), 100 → 131.
- **R1** (2026-07-25) — `#/review` SRS (SM-2-lite port), 4 corpus decks, backup/restore, due-badge.
- **M1** (2026-07-25) — dictionary meta-split; eager 1.39 MB → 745 kB; `check:index` + `check:bundle`.
- **M2** (2026-07-25) — module meta-split (meta/loaders/drills generated); eager → 326 kB; `npm ci` fix.
- **TM1+TM2** (2026-07-26) — ★ Tense Machine `#/tenses` + `lib/conjugator.ts`.
- **TM3** (2026-07-26) — Machine shades · satellites · contractions toggle · showcase UA.
- **S2 (reading OCR)** (2026-08-14) — Reading +157, 141 → 298; `mindset` + `short-stories` rubrics.
- **D10** (2026-08-20) — +22 cards (→ 444) + BrE sweep of `custom.ts`.
- **V12** (2026-08-21) — Collocations tab `#/collocations` + ★ Which word? drill; route-isolation gate.
- **LE1** (2026-08-21) — Reading +25 from a text drop, 298 → 323.
- **D11** (2026-09-24) — mixed drop routed by type: +11 words (→ 605) · +41 collocations · +10 phrasal/idioms.
- **V13** (2026-10-08) — BrE sweep of phrase corpora · `buildAvoidSet` · `meetings` category.
- **C1** (2026-10-08) — `m13` + ★`conditionals-machine` + `conditional-distance` (13/34).
- **C2** (2026-10-29) — `m15` + ★`reported-speech-lab` + `m16` + 2 figures (15/34, 229 drills).
- **C3** (2026-10-29) — `m14` + `passive-flip` · `m12` + `comparison-scale` — Section III COMPLETE (17/34, 261 drills, eager 351.0 kB).
- **DOCS1** (2026-10-29) — journal moved to `SESSIONS.md`; §14 → one-line index; §16 → SESSIONS appendix.

## 15. Reading OCR wave — runbook (standing procedure)

> ✅ **Wave S2 DONE (2026-08-14) — 181 screenshots → +157 texts, 141 → 298, taxonomy 20 → 22.**
> The `stage II text_screenshots/` backlog is **cleared**. The steps below are the standing
> procedure for the next screenshot drop; the S2 (reading OCR) entry in SESSIONS.md is the worked example.
>
> ✅ **Wave LE1 DONE (2026-08-21) — a TEXT drop: `reading new.txt` → +25 texts, 298 → 323.**
> When the drop is a text file, **skip steps 2–3 entirely** (no ASCII renaming, no image staging,
> no subagent fan-out) and run parse → dedupe → author → integrate → verify **inline**; SESSIONS.md's LE1
> entry is the worked example. Two corrections to the steps below came out of it, both in step 4:
>   1. **Dedupe on content, not on frame.** A single-author series that reuses one boilerplate
>      opening/closing scores **.35–.53 raw Jaccard between texts that share nothing but the
>      template**, so the ≥ .45 rule below silently kills real texts. Strip the frame's stopwords
>      first, then apply the threshold — content-only scoring collapsed all 325 new×new pairs
>      below .30 and isolated the one genuine duplicate at .477.
>   2. **Check the title against its own answer key.** Renaming a text to a distinct title (step 4)
>      can make the title restate the correct MCQ option, which no data gate catches. Score the
>      correct option against the title and rewrite one of them above ~.34.

Run the bulk **in a fresh session via a subagent wave**. Steps:

1. **Backlog:** the current screenshot folder under `_examples/`. Processed screenshots move to
   `🗂️ archive/` **with their original names** — archive everything reviewed, duplicates included,
   so the source folder ends empty. Skip non-narrative sheets (vocabulary / idiom tables — those
   belong to a dictionary idioms wave), sub-50-word quote cards, and **source-side garbled**
   AI-text cards (the text is broken in the original image, not by OCR; five turned up in S2).
   `device_bash` cannot `rm`, so working copies go to a `_to_delete/` subfolder for the owner.
2. **Filename gotcha:** macOS screenshot names contain a **U+202F** (narrow no-break space) before
   “AM”/“PM”, so exact-path `device_stage_files` fails. First `device_bash`-`cp` them to ASCII names
   (`_ascii/sNNN.png`) AND write `_ascii/MANIFEST.tsv` (ascii-name ⇥ original-name); then
   `device_stage_files` the copies into the container so subagents can `Read` them. Stage in batches
   of ≤ 20 with a pause — 50 at once returns **HTTP 429** part-way through and you must retry the
   failures.
3. **Wave:** write ONE shared brief to `/tmp/BRIEF.md` (contract + taxonomy + the full list of
   already-shipped ids + attribution rules + a UA style sample), then spawn `general-purpose`
   subagents (`sonnet`) with **~7 consecutive images each** — consecutive matters, so a worker can
   spot that two shots are halves of the same post and merge them. Tell each worker to `Write`
   `/tmp/rout/<STEM>.json` **immediately after each image** (partial progress then survives a
   session-limit or content-filter kill) and to emit a record for *every* image — `status: "ok"`,
   `"skip"` (with a reason) or `"merged-into"` — so nothing is silently lost. Re-run the missing
   stems afterwards: `ls /tmp/rout` vs the expected list. Batches occasionally die on
   `Output blocked by content filtering policy`; re-run those images in groups of 3–4.
4. **Aggregate (inline after the run):** read `/tmp/rout/*.json` → validate (bilingual, 3 questions
   = 2 mcq + 1 open, mcq `correct` in range, category ∈ taxonomy, level a1–c1, minutes ≥ 1,
   `source.author`, EN/UA paragraph parity) → **dedupe by token-Jaccard over EN bodies**, new×new
   and new×shipped: ≥ .45 is a duplicate, and an identical title with ≥ .40 is too; rename ids +
   titles on the survivors so no two entries read the same in the accordion → append into the
   **per-category files** (`study.ts`, `values.ts`, …), creating a new file + `categories.ts` entry
   + `index.ts` import/spread when a rubric is new. (§15 used to say "emit `rN.ts`" — waves RB1/RB2/S2
   all went per-category instead; per-category is the convention.)
5. **Per-text contract:** stable kebab `id`, `title{en,uk}`, `category` (one of the 22), CEFR
   `level`, `minutes` ≥ 1, `body{en,uk}` (verbatim EN + full natural UA), `questions` (2 mcq + 1
   open, bilingual), `source`. **Ukrainian house style:** « » quotes, **ʼ U+02BC** for the
   apostrophe (never `'` or `’` — S2 had to normalize 33 of them), — for dashes.
   **Attribution:** green-title series → Mind Boost English (FB,
   `facebook.com/profile.php?id=61584114885870`); footer-visible → Learn With Sonali / English
   Growth Academy / English StoryStream / Power of Positivity / Mind Boost English `.com`; unknown →
   omit `source` (the reader hides the line).
6. **Verify:** clone the repo into a cloud scratch dir, `npm install`, and run the **full**
   `npm run verify` there (the device `node_modules` are macOS-native and unusable in the sandbox);
   owner re-runs it locally. Also worth running: an **adversarial QA subagent** over ~10 random
   image↔record pairs (EN verbatim · UA fidelity · mcq correctness · metadata) and a mechanical
   EN↔UA length-ratio sweep to catch silently dropped clauses. **Write back** via SendUserFile +
   device_commit_files; **archive** the processed screenshots via the manifest. The `#/reading`
   counter updates automatically from `READING_TEXTS.length`.
7. **Scale note:** the `reading` lazy chunk is 1,419 kB at 298 texts. It is lazy, so `check:bundle`
   stays green, but past ~400 texts do the **per-category lazy split** (M1's deferred item) before
   the next big wave.
