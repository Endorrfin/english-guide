# CLAUDE.md — `english-guide`

> **Working guide and source of truth for every session in this repo. Read this file fully before
> starting any session.** Update the *Status / progress log* (§14) at the end of each session.
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
             reading/*.ts + reading/index.generated.ts (counts for the landing map, M1)
             irregular.ts · meta.generated.ts + drills.generated.ts + moduleLoaders.generated.ts (M2)
             modules/all.ts — the eager full list, NODE-ONLY (never import from src/)
  i18n/      lang.ts (useLang) · LangProvider.tsx · ui.ts
  lib/       hashRouter.ts · registry.tsx · search.ts (modules + words) · exercise.ts · srs.ts ·
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
CLAUDE.md · PROJECT-BRIEF.md · CURRICULUM.md · README.md
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

**8 sims (S5):** `modal-navigator` ★golden (built) · `deduction-lab` (m21, built) ·
`tense-navigator` ★ (m6, built T1, golden of Tenses: 3×4 time × aspect matrix → meaning, forms +/−/?,
mini-timeline, EN/UA examples + TTS, near-misses, corpus-frequency badge — 5 forms = 96% of speech) ·
`sentence-morpher` (m6, built T4: one sentence morphed through all 12 cells — animated timeline + form
highlight + synced UA translation, aspect-major walk) · `tense-chooser` (m11, built T4: 3 meaning
questions → the right tense + near-miss explanations; encodes the cross-time overrides) ·
`conditionals-machine` (m13) · `article-tree` (m28) ·
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
(first custom wave). → **D2–D8 (done): +365 definition cards** (dictionary → 535 words; runbook §16). →
**V1–V11 (done):** the Words hub · Idioms trainer (357 — idioms/phrasals/collocations, each browsable by a category bar, V11) · Irregular trainer (75). →
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
Sections III (m12–m16) + `conditionals-machine` · VI (m31–m34) + `word-formation-lab` · I (m1–m5) ·
V (m23–m30) + `article-tree`, + dictionary waves W2–W5, **with Reading waves interleaved**. →
polish: map · mental-models gallery · module + reading meta-splits · bilingual QA · a11y pass.
(Re-plan per session allowed; Tenses go first — the owner's S5 priority. Full detail:
CURRICULUM.md §G / §R.)

## 14. Status / progress log

- **S0** — Scaffolded `english-guide` from `_standard/templates/tier1-spa` via guide-factory
  `scaffold.sh` (self-check ✓); package/homepage set to the owner's existing repo name
  `english-guide` (sanctioned naming deviation). `types.ts` adapted: CEFR `Level`,
  `Module.exercises`, dictionary/exercise/irregular contracts. All four meta-docs authored
  (BRIEF/CURRICULUM/CLAUDE/README). Owner next: git init/remote/first commit (push to `main`
  recommended after S1 so CI is green). Open: words.txt public-vs-gitignored (§12).
- **S0.1** — Typecheck was red (scripts/ import S1 modules — see §12 gotcha). Bootstrapped the three
  permanent contract files: `data/concepts.ts` (empty aggregator + `MODULES` alias),
  `i18n/lang.ts` + `i18n/LangProvider.tsx` (ported from `../database guide`, key
  `englishguide.lang`), `lib/registry.tsx` (empty `sims`/`figures` + `lazyNamed`), plus empty
  `components/{sims,figures}/` with `.gitkeep`. Verified on the owner's tree: **typecheck ✓ lint ✓**
  (check:data/test/smoke expected ✓ locally; `build` stays red until S1 ships `index.html` + shell).
- **S1 (golden)** — The guide is live-ready. **Shell:** dark-editorial theme (CEFR-ramp tokens),
  hash router (`#/map · #/m · #/dictionary · #/practice · #/review · #/irregular`), TopBar with
  global search (modules + topics + words, tiered ranking), Sidebar, CEFR landing map, EN/UA toggle,
  a11y (skip-link, focus management, ARIA, reduced-motion). `concepts.ts` filled: 5 sections + 34
  modules (m17 authored; 33 bilingual-titled stubs render header + ComingSoon → whole map navigable).
  **Golden m17-modal-system:** 4 topics (5-rules table · nine-modals distancing map · function×time
  grid · negation scope), 7 UA-speaker pitfalls, 17 drills, verified sources. **★modal-navigator:**
  10 functions × 3 times = 30 cells (68 ranked answers + near-misses, 2 explicit N/A), pure engine
  `lib/modals.ts` + content `data/modalNavigator.ts`, golden test; `modal-map` SVG figure.
  **Exercise engine** `lib/exercise.ts`: canonical() with contraction equivalence (mustn't=must not,
  can't=cannot=can not, 'll/'ve/'re/'m/'d-better; ambiguous 's/'d never guessed) — golden-tested;
  ExerciseSet UI (gap+MCQ, localStorage progress on stable ids) + `#/practice` hub. **Dictionary v1**
  (search EN+UA, level/kind/POS filters, expandable cards, en-US TTS via `lib/tts.ts`, deep-link
  highlight) + **W1: 150 golden A1 cards** (Oxford seed; US IPA; 7 tagged examples 4/1/1/1;
  agent-generated in 6 batches, merged + spot-checked). **QA:** check:data extended (words contract,
  exercises, authored-module golden bar, counts 5/34/150; registry parser re-anchored on record
  declarations — the template's word-split broke once comments mentioned "sims"); smoke wired
  (109 checks: components EN+UK, 4 route pages, all 34 module pages, `<App/>` across 9 hashes).
  **`npm run verify` ✓ green end-to-end** in the cloud scratch copy + the built app was
  screenshot-checked in headless Chromium (map/m17/navigator/dictionary/practice, EN + UA, 0 page
  errors). words.txt moved to `_examples/words-backlog.txt` (owner decision). Sources web-verified
  (Cambridge modal pages, British Council modal refs, Merriam-Webster shall). Owner next:
  `npm install` → `npm run verify` → commit on `s1-golden-modal-system` → push → merge to `main`
  (first green deploy); `git rm --cached words.txt` + drop the two stale `.gitkeep` files in
  `src/components/{sims,figures}/`.
- **S2 — `m18`–`m20` (Modal Verbs continues).** Authored three golden B1 modules, each 4 topics with
  the full block mix (prose · table · compare · callout · figure) and ≥15 drills:
  **m18 Ability & permission** (can/could · be able to · may/might permission · managed to; spine =
  the single-success trap: affirmative *could* ✗ → *was able to / managed to*, `couldn't` covers all
  past; 16 drills), **m19 Obligation & necessity** (must vs have to = internal/external source · need
  to/needn't · the mustn't≠don't-have-to negation cliff · past `had to` + the *must have*=deduction
  trap; 16 drills), **m20 Advice & criticism** (should/ought to · had better warning + its 3 traps ·
  should have + V3 for past criticism/regret · the advice strength ladder & softeners; 16 drills).
  **3 new SVG figures** (bilingual, theme tokens, reduced-motion-safe), registered in `registry.tsx`:
  `ability-timeline` (AbilityTimeline), `obligation-source` (ObligationSource), `advice-ladder`
  (AdviceLadder). `concepts.ts`: the three stubs replaced with real imports (still 5/34; now 4 authored).
  All 65 modal drills flow into `#/practice` via tags (`modals`, `ability`, `permission`, `obligation`,
  `no-necessity`, `advice`, `past`, `negation`, …) — the cross-section modal drill set emerges from the
  tags. **Facts web-verified** (British Council Past ability + Modals permission/obligation; Cambridge
  grammar must / have-got-to / had-better / should / ought-to / can / be-able-to; Test-English
  needn't-vs-didn't-need-to) — `sources` filled per module (≥4 each). **Verification (data + logic, per
  owner's call this session):** `check:data` ✓ (5 sections · 34 modules · 4 authored · 65 exercises ·
  150 words · all bilingual · registry + seeAlso resolve), `test-exercise` ✓, `test-modals` ✓, and a
  scoped strict `tsc` on the three data modules ✓ — all in the cloud scratch copy. **NOT run here**
  (owner runs locally): full `tsc -b` across the app, `eslint`, `smoke` (SSR-renders the 3 new figures
  EN+UK — files==keys now 4 figures / 4 keys), `vite build`. Owner next: `npm run verify` locally →
  commit on `s2-modals-ability-obligation-advice` → push. Deferred: `m21` + the `deduction-lab`
  ★sim, then `m22`.
- **S3 — Reading (new Section VI).** Owner paused planned modules to build a **Reading library**
  (owner decisions this session: full EN+UA translation per text · mixed MCQ + open questions ·
  verbatim texts + per-text attribution · golden slice + start a wave). **Data contract** (`types.ts`):
  `ReadingCategory`, `ReadingQuestion` (`mcq` bilingual options + `open` with model answer), `ReadingText`
  (bilingual `title`/`body`, CEFR `level`, `minutes`, 3–5 questions, `source` attribution). **SSOT**
  `src/data/reading/`: `categories.ts` (18-category taxonomy) + per-category files (`study`/`values`/
  `family`) + `index.ts` aggregator (lookups, `adjacentInCategory`, counts) — architected for the S-scale
  meta-split (slim generated index + lazy chunks) like the dictionary's W2. **Pages:** `#/reading`
  accordion (search across all texts, level filter, count badges, expand → clickable titles — modeled on
  the reference PNG + DictionaryPage) and `#/reading/<id>` reader (EN/UA body toggle, TTS listen, source
  credit, MCQ auto-checked via `lib/exercise` + open questions with revealable sample, mark-as-read via
  `known` store, prev/next within category). Wired into `hashRouter` (+`hrefReading`/`hrefReadingText`),
  `App`, TopBar + Sidebar nav, and a **Section VI card + tile** on the landing map (after Vocabulary in
  Action). Reading CSS appended to `theme/components.css` (`.rd-*`, reuses `.dict-*`/`.levelseg`/`.quiz-opt`).
  **Golden batch: 6 texts** (verbatim, transcribed by vision-OCR of the screenshot backlog, full UA
  translations, mixed questions): study — *The Habit of Reading Daily* (Learn With Sonali), *Simple Steps
  to Learn English Fast* (Mind Boost English); values — *Mistakes That Are Holding You Back* (Learn With
  Sonali), *The Mistake Most People Make* (English Growth Academy), *Mindset* (Mind Boost English);
  family — *My Family* (source not captured — flagged). **check:data extended** (reading: unique kebab
  ids, category resolves, level, ≥1-min integer, bilingual title/body, 3–5 questions, mcq range + no dup
  options, source.author, seeAlso resolve) and **smoke extended** (SSR ReadingIndex + a reader EN+UK, +
  `#/reading` hashes). **Verify (data+logic):** `check:data` ✓ (… 6 reading texts in 18 categories …),
  scoped strict `tsc` on reading data ✓ (cloud scratch). NOT run here (owner runs `npm run verify`):
  full `tsc -b`, `eslint`, `smoke`, `vite build`. **Backlog pipeline:** macOS screenshot names carry a
  U+202F before “AM”, so exact-path staging fails — copy to ASCII names first (a `_ascii/` helper dir was
  created under `_examples/text_screenshots/`, safe to delete); ~280 screenshots ≈ 250 texts (dedupe —
  e.g. two captures of the same text — and skip non-narrative reference tables like the idioms sheet →
  those belong to the dictionary idioms wave). **Owner attention:** verbatim third-party texts on a public
  deploy assume you hold the rights/permission (per your S3 choice); *My Family* needs a source or a
  rewrite. Owner next: `npm run verify` → commit on `s3-reading-section` → push. Then either continue
  Reading OCR waves (optionally a multi-agent workflow, with explicit opt-in) or resume `m21`+`m22`.
- **S4 — `m21` + `m22` (Modal Verbs COMPLETE).** Authored the last two flagship modules, closing
  Section III (6/6). **m21 Deduction & probability** (b2, signature): the certainty dial — must (sure) →
  should/will (probable) → may/might/could (possible) → can’t/couldn’t (impossible), present + past
  (have + V3); spine trap **the negative of deductive must is can’t, never mustn’t** (verified: British
  Council past-deduction). 4 topics (present-deduction · must-cant-might · past-deduction-must-have-v3 ·
  certainty-scale), full block mix (prose · table · compare · callout · figure · sim), 16 drills.
  **m22 Requests, offers & politeness** (b1): politeness = distance (can → could → would → I was
  wondering if…); Would you mind + -ing with the answer inversion; Shall I/we (BrE) vs US Should I/Want
  me to/Let me; would rather + bare inf (+ than) vs would prefer + to-inf vs prefer X to Y; would rather
  + subj + past. 4 topics, full block mix, 16 drills. **★ Deduction Lab sim** — new pure engine
  `lib/deduction.ts` (certainty × time → verdict, 5 rungs × 2 times = 10 cells / 20 answers) + content
  `data/deductionLab.ts` + `sims/DeductionLab.tsx` (radiogroups, aria-live, TTS, reduced-motion-safe;
  reuses `.mn-*` + a `.dl-*` certainty meter) + golden test `scripts/test-deduction.ts` (auto-discovered;
  asserts no `mustn’t` in negatives). **2 SVG figures** `certainty-scale` (CertaintyScale) + `politeness-ladder`
  (PolitenessLadder), registered. `concepts.ts`: the two stubs → real imports (now **6 authored**, still 5/34).
  `smoke.ts`: added the DeductionLab canary **and fixed a pre-existing stale reading fixture** — the golden
  reading ids were renamed in the owner’s Reading rework (16 texts now), so `ReadingTextPage`/`#/reading/<id>`
  pointed at the deleted `the-habit-of-reading-daily`; repointed to `learning-a-little-every-day` (baseline
  smoke was already red on this before S4, unrelated to modals). **Verification: FULL `npm run verify` ✓
  green end-to-end in the cloud scratch** — typecheck (`tsc -b`) · eslint · check:data (5/34 · **6 authored** ·
  **97 exercises** · 150 words · 16 reading · all bilingual · registry+links resolve) · test (test-exercise +
  test-modals + **test-deduction**) · smoke (**2 sims + 6 figures** EN+UK, 131 checks) · vite build. Facts
  web-verified (British Council past+present deduction; Cambridge requests / would-rather / prefer / must) —
  `sources` filled (m21 ≥4, m22 ≥4). New sim + both figures also screenshot-checked in headless Chromium.
  Owner next: `npm run verify` locally → commit on `s4-modals-deduction-requests` → push. Deferred/next:
  dictionary v2 (lazy chunks + index) + `#/review` SRS + `#/irregular`; W2.
- **S5 — TIMES section: research + plan (docs-only).** Owner's commission: consolidate ALL tenses
  into ONE section, 4 dive levels (✈️ porthole · 🚂 train window · 🚶 park walk · 🔬 microscope),
  top-10 best-practice research, visualizations, per-time colors. **Research consolidated** (sources
  in the session chat): time × aspect 3×4 matrix as the system view; aspect-as-meaning (Dr. Mosaik,
  Springer RPTEL 2021 — principle-based beats rule-lists, ~50 rules → 8 principles); unified timeline
  notation; consistent color coding; corpus frequency (5 forms = 96% of spoken English — Krámský
  1969 / Alzuhairy 2016 via Ginseng English; Present Simple 57.5% · Past Simple 19.7% · Future 8.5% ·
  Present Perfect 6% · Present Cont 5.1%); contrast pairs; signal words + their traps; Reichenbach
  reference points ("before-before-now"); narrative/discourse-driven choice; interactive
  manipulation. **Locked (owner-approved this session):** (1) new **Section II — Tenses**
  (`s6-tenses`, roman II) of 6 modules, hybrid-Murphy cut: `m6-tense-system` ★golden of II (matrix ·
  aspect meanings · notation · frequency + routes) · `m7-present-simple-continuous` (a1) ·
  `m8-past-simple-continuous` (a2, + used to/would) · `m9-future-forms` (a2) · `m10-perfect-family`
  (b1 — perfect attacked ONCE as a family; PPerf-vs-Past-Simple is the flagship contrast; have+V3
  bridges to m21) · `m11-choosing-narrative` ★ (b2). Foundations keeps 5 stubs (m1 stays;
  m3/m4/m7/m8 renamed → `m2-articles-basics`/`m3-nouns-quantifiers`/`m4-questions-negatives`/
  `m5-prepositions-time-place`); the six old tense stubs (m2/m5/m6/m9/m10/m11) are deleted;
  **m12–m34 completely untouched** (verified by grep: no seeAlso links into any swapped stub; all
  swapped stubs unauthored → zero progress-key impact). Romans shift (display-only): Core III ·
  Modals IV · Advanced V · Vocab VI · Reading VII. (2) **Dive mechanic** — hybrid: L1 ✈️ = m6 + map
  card; L2–L4 = `Block.dive?: 2|3|4` + persisted DiveSwitcher, deeper blocks collapse to expandable
  stubs, default 🚂; spiral passes = re-walk the section at the next depth — content is NEVER
  duplicated across modules (the dive-levels-as-separate-modules variant was considered and
  rejected: it would re-scatter each tense across 4 places). (3) **Time triad A** rose/cyan/violet +
  aspect glyphs ● 〜 ⤺ 〜⤺ via shared `TenseGlyphs` (§2, §7). (4) **All 4 interactives** approved
  (navigator ★ + morpher in m6 · chooser in m11 · parametric `TenseTimeline` figure in m7–m10) —
  deliberately different tools so each user picks what clicks; m6 gets a "routes / pick your tool"
  block. Tenses = second flagship: **≥12 drills/module**, UA-speaker pitfalls mandatory
  (no-perfect-in-UA · "I am agree" · Simple-for-Continuous · will after when/if · since + Past
  Simple). **Docs updated:** CLAUDE.md §§1/2/4/5/6/7/13/14 · CURRICULUM.md (§B dive UX, §C contract,
  §D restructured section tables I/II/III + roman bumps, §F totals, §G build order, §R roman VII) ·
  PROJECT-BRIEF.md (§0, §5 Interactivity + new Tenses row, §9). **No code touched** — T1 starts the
  build (§13). Owner next: review the three docs → commit on `s5-times-section-plan`.

- **T1 — Tenses skeleton + golden `m6-tense-system` + ★ `tense-navigator`.** The S5 plan built.
  **Skeleton:** `types.ts` `DiveLevel` + `Block.dive?: 2|3|4` (intersection type — discriminated
  union preserved); `tokens.css` time triad (`--time-past/present/future` + `-soft` washes) +
  `--sec-tenses` (side-by-side contrast vs the CEFR ramp checked on screenshots — separated
  contexts, distinguishable); `concepts.ts` restructured — 6 sections (s6-tenses roman II inserted;
  romans shift display-only: Core III · Modals IV · Advanced V · Vocab VI · Reading VII on the map),
  Foundations stubs renamed (`m2-articles-basics` / `m3-nouns-quantifiers` / `m4-questions-negatives`
  / `m5-prepositions-time-place`), six old tense stubs deleted, Tenses stubs m7–m11 added (m11 ★);
  m12–m34 untouched. **Dive mechanic (piloted in m6, generic):** `lib/dive.ts` (`useDive`,
  localStorage `englishguide.dive`, app-wide — spiral learning is per-section, not per-module;
  `moduleHasDive`) + `components/module/DiveSwitcher.tsx` ([🚂 Core | 🚶 Full | 🔬 Deep] radiogroup
  + ✈️ Overview → m6, hidden on m6 itself; `DiveBlock` collapses deeper blocks into thin `<details>`
  stubs — depth stays visible, expandable in place) wired into `ModulePage`; ui.ts strings added.
  **★ Tense Navigator:** pure engine + THE shared TenseGlyphs vocabulary `lib/tenses.ts`
  (`ASPECT_GLYPH ● 〜 ⤺ 〜⤺`, `ASPECT_MEANING`, `TIME_LABEL/COLOR_VAR`, `getTense/listTenses`) +
  content `data/tenseNavigator.ts` (12 cells: meaning · forms +/−/? · 2 examples EN/UA · signal
  words · near-misses · freq badges — big five with %, the rest a shared rarity note) + sim
  `sims/TenseNavigator.tsx` (two radiogroups, aria-live, TTS, mini-timeline SVG in the shared
  notation with NOW axis + X reference point, aria-hidden — reduced-motion safe) + golden test
  `scripts/test-tenses.ts` (12 cells, names match coordinates, aspect signatures in patterns,
  big-five ≈ 96.8%, % XOR rarity-note, determinism). **Golden m6** (a2, signature): 4 topics
  (time-x-aspect-matrix + sim · four-aspect-meanings with the UA-has-no-Perfect callout + state-verbs
  dive-3 · timeline-notation + Reichenbach dive-3 + future-in-the-past dive-4 ·
  frequency-and-routes: corpus table, effort-follows-frequency, 4 tools + 4 depths / spiral
  learning), 6 keyPoints, 6 pitfalls (incl. the 5 mandatory UA-speaker ones), **14 drills**
  (`ex-tense-system-1..14`, tags `tenses`+), seeAlso m7–m11+m17, 5 web-verified sources (Cambridge
  tenses-and-time + present-perfect; British Council present + past; Ginseng English frequency —
  the Ginseng slug is `english-verb-tense-frequency`, verified by fetch; Cambridge 403s bots, slugs
  confirmed via search). **Landing map:** ✈️ `tmx-*` mini 3×4 matrix card → m6 (triad-tinted cells,
  big-five % badges), Reading roman VI→VII, six-section copy, START_PATH `m9-present-perfect` →
  `m6-tense-system`, hero mentions the Tense System. **Gates:** check:data — 6 sections expected,
  dive ∈ {2,3,4}, tense-module bar ≥12 drills; smoke — TenseNavigator canary, `ModulePage:m6(full)`
  canaries (Present Perfect · will have been working), `#/m/m6-tense-system` hash (now 145 checks,
  3 sims + 6 figures). **Verification: FULL `npm run verify` ✓ green end-to-end in the cloud
  scratch** (typecheck · eslint · check:data 6/34 · 7 authored · 111 exercises · test ×4 incl.
  test-tenses · smoke 145 · vite build) + screenshot pass in headless Chromium (map with the new
  sidebar/mini-matrix, m6 EN+UA, dive stubs collapsed/expanded, navigator past×perfect-continuous
  cell; 0 page errors — only external font fetches blocked by the sandbox). One eslint
  react-refresh warning fixed by moving `moduleHasDive` from the component file into `lib/dive.ts`.
  Owner next: `npm run verify` locally → commit on `t1-tenses-skeleton-golden-m6` → push.
  Deferred/next (T2): `m7`+`m8` + the parametric `TenseTimeline` figure; `sentence-morpher` lands
  T4 on m6 (the routes block already announces it).

- **T2 — `m7`+`m8` + the parametric `TenseTimeline` figure.** Section II grows to 3/6 authored.
  **★ TenseTimeline figure** — ONE parametric core (`src/components/tense/TenseTimeline.tsx`, zone =
  present|past) that contrasts the two aspects of a time on the shared notation (● Simple dots vs 〜
  Continuous wave, dashed NOW axis, time hue) with a 4-beat **play/step** stepper (▶ auto-play +
  ◀/▶|/↺, bilingual `aria-live` narration, reduced-motion-safe, SSR-safe at beat 0). It supersedes
  the old standalone `tense-timeline` sim (CLAUDE.md §6). **Architecture note:** the core lives OUTSIDE
  `src/components/figures/` because `smoke.ts` asserts *(figure .tsx files) === (figure registry keys)*;
  the per-zone registry entries `timeline-present` / `timeline-past` are thin **one-export wrapper**
  files (`TenseTimelinePresent.tsx` / `TenseTimelinePast.tsx`) that render the core — so files==keys
  stays true and T3 adds `timeline-future` / `timeline-perfect` the same way. `.ttl-*` CSS appended to
  `components.css`. **m7 Present: Simple & Continuous** (a1): 4 topics (forms + the -s-moves rule ·
  routines-vs-now with the `timeline-present` figure · state-verbs incl. the `I am agree`/`I am knowing`
  traps + dual-function think/have/see · present-for-future intro: arrangement vs timetable), 6
  keyPoints, 6 pitfalls, **14 drills**, 5 sources. **m8 Past: Simple & Continuous** (a2): 4 topics
  (forms + irregular V2 + `#/irregular` pointer · did-questions-negatives incl. the `Did you went` double-
  past trap · interrupted-past when/while with the `timeline-past` figure + the Jane/guests contrast ·
  used-to/would incl. *would ≠ past states* and the `didn't use to` spelling trap), 6 keyPoints, 6
  pitfalls, **14 drills**, 5 sources. Mandatory UA-pitfalls placed: Simple-for-Continuous + "I am agree"
  (m7), double-past + flattened background (m8). `concepts.ts`: the m7/m8 stubs → real imports (now
  **9 authored**, still 6/34 sections). **smoke**: 2 FIG canaries (TenseTimelinePresent/Past) +
  `ModulePage:m7/m8(full)` content canaries. **Verification: FULL `npm run verify` ✓ green end-to-end
  in the cloud scratch** — typecheck (`tsc -b`) · eslint · check:data (6/34 · **9 authored** · **139
  exercises** · 150 words · 100 reading · all bilingual · registry+links resolve) · test ×4 · smoke
  (**3 sims + 8 figures** EN+UK, **169 checks**) · vite build. The interactive figure was also
  rendered + stepped in headless Chromium (m7 present + m8 past zones, beat 0 → beat 4 reveal, no
  page errors — only the sandbox-blocked Google-Fonts fetch). Facts web-verified (British Council
  stative verbs · past continuous + past simple when/while · past habits used-to/would · talking about
  the future; Cambridge present/past simple + continuous slugs) — `sources` filled (m7 5, m8 5). Owner
  next: `npm run verify` locally → commit on `t2-tenses-present-past-timeline` → push. Deferred/next
  (T3): `m9`+`m10` (+ `timeline-future` / `timeline-perfect` wrappers, same pattern).

- **T3 — `m9`+`m10` + the `timeline-future` / `timeline-perfect` figure zones.** Section II grows to
  **5/6 authored** (11/34 overall). **m9 Future: will, going to & Continuous** (a2): 4 topics
  (will-vs-going-to — decision/prediction *timing* (on-the-spot vs premeditated; hunch vs evidence),
  the ringing-phone test · arrangements-present-continuous — the four future forms + the who-fixed-it
  test, deepening m7’s future intro · time-clauses — **no `will` after when/if/as-soon-as/until**, the
  mandatory UA calque, + the indirect-question exception (dive 3) · future-continuous — will be + V-ing
  + the `timeline-future` figure + the polite *Will you be …?*), full block mix (prose · table ·
  compare · callout · figure), 6 keyPoints, 6 pitfalls, **14 drills**, 5 sources. **m10 The Perfect
  Family** (b1, the flagship B1 module): the perfect aspect attacked **ONCE as a family** — ⤺ a
  link-back from a reference point — across 5 topics (present-perfect-vs-past-simple ★the flagship
  contrast, with the `timeline-perfect` figure + the finished-time-word test · for-since-already-yet ·
  past-perfect-before-before · perfect-continuous incl. result-vs-process + state-verbs · 
  future-perfect-recognition + a whole-family capstone grid across the three reference points), full
  block mix, 6 keyPoints, 6 pitfalls, **14 drills**, 5 sources. Both mandatory UA-pitfalls placed:
  `will` after when/if (m9); no-perfect-in-UA (“I have seen him yesterday”) + since+Past-Simple (m10).
  **TenseTimeline core extended (T3):** two new zones on the SAME parametric core — `future` (NOW on the
  **left**; ● will/going to vs 〜 Future Continuous, the tick marking the chosen future moment X) and
  `perfect` (the flagship line: ● Past Simple = a closed, disconnected dot, vs ⤺ Present Perfect = the
  same dot with a NEW **`link` mark** — an arc reaching forward to the NOW axis, in the present hue,
  since Present Perfect’s reference point *is* now). Two thin one-export wrappers
  `TenseTimelineFuture` / `TenseTimelinePerfect` in `figures/` (files===keys invariant held); registry
  keys `timeline-future` / `timeline-perfect` added. `concepts.ts`: the m9/m10 stubs → real imports
  (now **11 authored**, still 6/34 sections). **smoke**: 2 FIG canaries (TenseTimelineFuture/Perfect) +
  `ModulePage:m9/m10(full)` content canaries. **Verification: FULL `npm run verify` ✓ green end-to-end
  in the cloud scratch** — typecheck (`tsc -b`) · eslint · check:data (6/34 · **11 authored** · **167
  exercises** · 150 words · 100 reading · all bilingual · registry+links resolve) · test ×4 · smoke
  (**3 sims + 10 figures** EN+UK, **193 checks**) · vite build. The two new figure zones were also
  render-checked (SSR): the perfect link-back arc lands on-canvas (`M 236 176 Q 368 122 500 176`,
  within the 620×232 viewBox); future has no link mark, as expected. Facts web-verified (Cambridge:
  future will/shall · be going to · future continuous · present perfect simple · *past simple or
  present perfect* · past perfect simple · *present-perfect-simple-or-continuous* · future perfect
  simple; British Council: future forms will/going-to/present-continuous · talking about the future) —
  `sources` filled (m9 5, m10 5). Owner next: `npm run verify` locally → commit on
  `t3-tenses-future-perfect` → push. Deferred/next (T4): `m11-choosing-narrative` + `sentence-morpher`
  (lands on m6, already announced in its routes block) + `tense-chooser` (m11) + Section II polish
  (dive tuning, cross-links, a UA-pitfalls sweep).

- **D1 — Definitions: the word STUDY page (`#/definitions`) + the first custom word wave (20 cards).**
  Owner's commission: the Dictionary is a flat lookup ("primitive"); make word study deep and
  memorable. **Architecture (owner-approved this session):** Definitions reads the **SAME `WORDS`
  corpus** as the Dictionary — **no second dataset** (SSOT: `src/data/words/*`, ids immutable). It is
  the new **front door for words**: global word search now deep-links to `#/definitions/<id>`
  (`search.ts`); Sidebar + TopBar list **Definitions above Dictionary**; the Dictionary page stays
  working for now (deep-links repointed; demote/redirect is a deferred follow-up, not done here — it
  is a shipped, cross-linked surface, so per §10 "ask before deleting"). **Mastery** (new / learning /
  known) persists per word id (`lib/masteryStore.ts`, useSyncExternalStore + localStorage
  `englishguide.mastery.v1`) — **SRS-compatible by design** so the planned `#/review` SM-2-lite port
  adopts it without a migration. **Page** `components/pages/DefinitionsPage.tsx`: an **A–Z rail**
  (empty letters dimmed) + search + level/POS filters + **🎲 Random** give the lookup job; each word
  opens a **studio** with four ways to engrave it — **Study** (definition-first + synonyms/antonyms +
  the **4 general / 3 professional** example split, labelled) · **Recall** (definition-first
  flashcard, headword masked to `· · ·` until Reveal → self-rate) · **Describe** (the self-scored
  *"define it without naming it"* challenge on a **derived** scaffold: POS · function · synonym ·
  opposite · context + a **taboo** list of the headword+forms) · **Cloze** (blank the headword in one
  of its own sentences, auto-checked through `lib/exercise`). **Pure helpers** `lib/definitions.ts`
  (A–Z grouping, 4+3 split, surface-form cloze, describe scaffold) + golden test
  `scripts/test-definitions.ts` (auto-discovered). **Words — first custom wave: 20 golden b1–c1 cards**
  in `custom.ts` (`source:'custom'`), curated from `_examples/definition.txt` stage 1/2: circumstances ·
  nuance · cohesion · accommodate · indispensable · setback · collaborative · glitch · deadline ·
  prioritize · resolve · gist · precise · simultaneously · acknowledge · willingness · assertive ·
  cautious · transparent · allocate — US IPA, bilingual `def` + 7 tagged examples (4/1/1/1),
  synonyms/antonyms, collocations, seeAlso (in-set), topics. **No data-contract change** — the describe
  scaffold is *derived* from existing fields, so `check-data.ts` is untouched (custom cards pass the
  existing word contract). i18n `definitions*` + `mastery*` block added; `.def-*` CSS appended (reuses
  `.dict-*`/`.levelseg`/`.chip`/`.quiz-opt`). Wired into `hashRouter` (+`hrefDefinitions`, route
  `definitions`), `App` (lazy), Sidebar + TopBar nav, `search.ts` deep-links. **smoke**: DefinitionsPage
  SSR EN+UK (index + deep-link) + `#/definitions` / `#/definitions/<id>` hashes. **Verification: FULL
  `npm run verify` ✓ green end-to-end in the cloud scratch** — typecheck (`tsc -b`) · eslint ·
  check:data (6/34 · 11 authored · 167 exercises · **170 words = 150 a1 + 20 custom** · 100 reading ·
  all bilingual · registry+links resolve) · test ×5 (incl. **test-definitions**) · smoke (3 sims + 10
  figures EN+UK, **199 checks**) · vite build (DefinitionsPage lazy chunk ≈ 14 kB). Screenshot-checked
  in headless Chromium (index EN + UA, all four studio modes incl. masked Describe/Recall + cloze; 0
  page errors — only the sandbox-blocked Google-Fonts fetch). Facts spot-checked (nuance /ˈnuːɑːns/
  exact; cohesion/allocate standard GA, consistent with the a1 IPA style). Owner next: `npm run verify`
  locally → commit on `d1-definitions-studio` → push. Deferred/next: grow the custom corpus in further
  waves (rest of `definition.txt`); demote/redirect the Dictionary page once Definitions proves out;
  wire mastery into the `#/review` SM-2-lite port; optional synonym-match + word-of-the-day.
- **D2 (2026-07-20) — Definitions wave 2: +60 golden cards (custom 20 → 80).** Curated ~60 teachable **single-word** entries from `_examples/definition.txt` via the pre-curated `definition-d2-candidates.txt` (per §16), matching the D1 golden bar. **Kept the owner's confusables** — among/between · beside/besides · desert/dessert · quite/quiet/quit · quick/quickly · affect/effect · attitude/altitude · recognize/realize — plus the **FEELINGS** set (furious · guilty · disappointed · relieved · proud · calm · terrified · bored · relaxed · excited · hopeful) and core work vocab (access · accurate · appreciate · approach · charity · commute · compromise · demand · despite · determination · doubt · earn · emphasize · encourage · essential · ethical · explore · forecast · impact · income · influence · leadership · maintain · notice · outcome · persuade · polite · purchase · reliable · solution · survive · valuable). Each card = **US IPA (no slashes), 7 tagged examples (4 general + 1 each business/office/dev), bilingual `def` + тлумачення, translations, collocations, synonyms/antonyms, in-corpus `seeAlso`, topics, `source:'custom'`** — appended to `custom.ts`, **no id renumbered**. Only code change beyond data: `scripts/test-definitions.ts` corpus-count assertion **20 → 80**. Applied backlog lines tagged `✅ [D2]` (84 lines; all 60 words matched inline) + a **D2 APPLIED block** prepended to `definition.txt`; `DEFINITIONS.md` §6 ledger extended. **Verification: FULL `npm run verify` ✓ green in a cloud scratch copy** (fresh `npm install` — the device `node_modules` are macOS-native, unusable in the Linux sandbox) — typecheck (`tsc -b`) · eslint · check:data (**230 words = 150 a1 + 80 custom**, 6/34, 100 reading, all bilingual, registry+links resolve) · test ×5 (incl. **test-definitions** on 80 cards) · smoke (**199 checks**) · vite build (DefinitionsPage lazy chunk ≈ 14 kB). Word contract + cloze invariants also self-checked in the cloud before write-back; IPA/senses cross-checked against Cambridge/Oxford. Branch `d2-definitions-wave` — changes left in the working tree; **agent did not commit or push** (the device mount blocks `unlink`, so git write is unreliable there → owner commits locally, per the D1 pattern). `_examples/` is git-ignored, so the marked `definition.txt` is a local-disk backlog artifact, not part of the commit. Deferred/next: continue waves `✅ [D3]`… through the remaining backlog (incl. the short-phrase list → phrasal/idiom cards); §16's ~100 target = ~60 now + the rest next session.
- **D3 (2026-07-20, same session) — Definitions wave 3: +60 more single-word cards (custom 80 → 140; dictionary → 290).** Owner chose to keep going in-session; idioms/short phrases deliberately deferred to a **separate section/tab**, not mixed into the word corpus. Clusters: work/thinking (decision, priority, issue, reason, statement, research, recognition, engagement, performance, summary, summarize, support, observation, indicator, obstacle, distraction, inspiration, preference), character (persistent, mature, casual, easy-going, intrusive, reserved, shy, pretend), emotions (worried, exhausted, pleased, satisfied, dissatisfied, puzzled, bewildered, ecstatic, devastated, passion, loneliness), health (injury, headache, cough, cure, treatment, posture), food (recipe, cuisine, garlic, cutlery, dish, defrost), weather/nature (cloudy, overcast, plant, eagle), qualities + connectors (fairness, simplicity, trait, outlook, therefore, otherwise, meanwhile). Same golden bar; `test-definitions` count 80 → 140; `✅ [D3]` marks + a D3 APPLIED block in `definition.txt`; DEFINITIONS.md §6 extended. **Verification: FULL `npm run verify` ✓ green in the reused cloud scratch** — check:data (**290 words = 150 a1 + 140 custom**) · test ×5 (test-definitions on 140) · smoke (199 checks) · vite build. D2 is already merged to `main` (branch `feat/d2-definitions-wave` → PR #11); this D3 wave sits on `main` in the working tree, ready for a `feat/d3-definitions-wave` branch + PR, matching the owner's flow. Backlog after D3: ~160 single words + the ~178 short-phrase list → future waves / the planned idioms section.
- **D4 (2026-07-20, same session) — Definitions wave 4: +60 more single-word cards (custom 140 → 200; dictionary → 350).** Continued on `main` per owner's request (owner does the branch/commit/PR). Clusters: verbs (arrange, gather, resist, neglect, overlook, gain, enrich, reserve, return, skip, invite, split, conduct, succeed, unwind), character/quality adjectives (carefree, hysterical, neutral, weird, stable, suitable, pure, vigorous, complex, tight, invisible, irreplaceable, confusing, boring, ill), abstract nouns (arrangement, concern, involvement, acquaintance, addiction, satisfaction, complexity, downside, distress, leisure, stranger, compassion, compassionate), food (pasta, porridge, oatmeal, pancake, grape, pumpkin, cereal), nature/animals (bat, hippo, bush, rope, glove), connectors (hardly, whenever, unfortunately, obviously, enough). Same golden bar; `test-definitions` count 140 → 200; `✅ [D4]` marks + a D4 APPLIED block in `definition.txt`. DEFINITIONS.md §6 extended. **Verification: FULL `npm run verify` ✓ green in the reused cloud scratch** — check:data (**350 words = 150 a1 + 200 custom**) · test ×5 (test-definitions on 200) · smoke (199 checks) · vite build. Changes left in the working tree on `main` for the owner to branch (`feat/d4-definitions-wave`) + commit + PR. Backlog after D4: ~100 single words + the ~178 short-phrase list → future waves / the planned idioms section.
- **D5 (2026-07-20, same session) — Definitions wave 5: +60 more single-word cards (custom 200 → 260; dictionary → 410).** Continued on `main` (owner does the branch/commit/PR). Clusters: function words / connectors (against, alone, along, both, ever, once, only, overall, toward, unless, undoubtedly, unexpectedly, interestingly, personally, hopefully, hard, last, lower, none), verbs (enjoy, applaud, excuse, owe, plummet, procrastinate, reflect, sell, postpone, predict, convince, declutter), adjectives (fake, fat, sick, puny, prickly, polluted), nouns (necessity, dialect, resolution, aisle, backyard, blanket, clue, fence, gear, guitar, outfit, pantry, path, pattern, terrace, trip, wedding, anniversary, draft, shadow, treasure, cocoa, exercise). Same golden bar; `test-definitions` count 200 → 260; `✅ [D5]` marks + a D5 APPLIED block in `definition.txt` (rebuilt D1→D5, as the gitignored file reverts between waves); DEFINITIONS.md §6 ledger reconstructed to D1→D5. **Verification: FULL `npm run verify` ✓ green in the reused cloud scratch** — check:data (**410 words = 150 a1 + 260 custom**) · test ×5 (test-definitions on 260) · smoke (199 checks) · vite build. Changes left in the working tree on `main` for the owner to branch (`feat/d5-definitions-wave`) + commit + PR. Backlog after D5: ~40 single words + the ~178 short-phrase list → future waves / the planned idioms section.
- **D6 (2026-07-20, same session) — Definitions wave 6: +37 single-word cards (custom 260 → 297; dictionary → 447) — clears the teachable single-word backlog.** The rest of the candidate list was plurals/inflections of already-carded words; the 37 genuinely new single words: arouse, bet, data-driven, depressed, dumbbell, firewood, fluctuation, gathering, green-eyed, half, inference, involve, kennel, lung, non-smoker, pawnshop, pediatrician, pie, pomegranate, prediction, rate, **realise/recognise** (BrE spellings of realize/recognize), reference, slack, smoker, stripe, tawdry, technophile, temper, toothache, underground, unreasonable, unwillingness, wheat, wood, x-ray. Same golden bar; `test-definitions` count 260 → 297; `✅ [D6]` marks + a D6 APPLIED block in `definition.txt` (rebuilt D2→D6); DEFINITIONS.md §6 ledger to D1→D6. **Verification: FULL `npm run verify` ✓ green in the reused cloud scratch** — check:data (**447 words = 150 a1 + 297 custom**) · test ×5 (on 297) · smoke (199) · build. Working tree on `main` for the owner to branch (`feat/d6-definitions-wave`) + commit + PR. **Single-word backlog is now essentially cleared**; what remains is the ~178 short-phrase list → the planned idioms section (a separate tab, not this word corpus).
- **D7 (2026-07-24) — Definitions wave 7: +68 golden single-word cards (custom 297 → 365; dictionary → 515).** First **monthly** wave from the NEW backlog file `_examples/definition_v2.txt` (72 raw lines). Curation: fixed 6 typos (Akeaway→takeaway · overlapp→overlap · sophisticat→sophisticated · notingworth→noteworthy · Rufund→refund · Chargback→chargeback); normalized 8 inflected/plural forms to base lemmas per the D6 convention (outperformed→outperform · performed→perform · representing→represent · projections→projection · trends→trend · deals→deal · coworkers→coworker · strengths/weaknesses→strength/weakness) and merged contributions→contribution; skipped 3 (unexpectedly [D5] · valuable [D2] already carded; waste duplicated in-list). The 68 new cards are business/office/career vocabulary in clusters — performance/feedback (ranking, emphasis, takeaway, dedication, contribution, perform, outperform, outstanding, enthusiastic), workplace/career (workplace, workflow, career, networking, collaboration, coworker, upcoming, proactive, occasion), process (allocation, assignment, permanent, pressure, confusion, ensure, throughout, entire), communication/register (perspective, context, clarification, formal, informal, slang, certainly, especially, overhear), analysis/change (adjust, projection, trend, tweak, reveal, revise, investigate, sophisticated, represent), judgment/review (relevant, review, cover, ultimate, effort, waste, admit, noteworthy), deals/agreement (negotiation, proposal, offer, deal, agree, agreement, agreeable, persuasive), finance/assessment (withdraw, refund, chargeback, strength, weakness, compatibility, sustainable, overlap). Same golden bar: **US IPA (no slashes), 7 tagged examples (4 general + 1 each business/office/dev), bilingual `def` + тлумачення, translations, collocations, synonyms/antonyms, in-corpus `seeAlso` (74 resolving links across 45 cards), topics, `source:'custom'`** — appended to `custom.ts`, **no id renumbered**. Authored via **8 parallel `general-purpose` subagents** (per thematic batch, shared SPEC), then a **local validator mirroring `check-data` + `test-definitions`** (7-example 4/1/1/1 tags · IPA-no-slash · unique id/headword vs the 447-word corpus · the cloze invariant · JS-parse for apostrophe safety) gated every card before integration. Only code change beyond data: `scripts/test-definitions.ts` corpus-count assertion **297 → 365**. Applied lines tagged `✅ [D7]` + a **D7 APPLIED block** prepended to `definition_v2.txt`; `DEFINITIONS.md` §6 ledger + README refreshed. **Verification: FULL `npm run verify` ✓ green in a cloud scratch copy** (fresh `npm install` — device `node_modules` are macOS-native) — typecheck (`tsc -b`) · eslint (clean) · check:data (**515 words = 150 a1 + 365 custom**, 6/34, 179 idioms, 75 irregular, all bilingual, registry+links resolve) · test ×9 (incl. **test-definitions** on 365) · smoke (**229 checks**) · vite build. **Write-back byte-exact** to the owner's working tree (`custom.ts`, `test-definitions.ts`, `DEFINITIONS.md`, `README.md`, marked `definition_v2.txt`); `_examples/` is gitignored so `definition_v2.txt` stays a local backlog artifact. Owner next: `npm run verify` locally → branch `feat/d7-definitions-wave` → commit → PR. **`definition_v2.txt` is the new monthly source** (owner adds ~50–100/month → future waves D8…).
- **D8 (2026-07-31) — Definitions wave 8: +20 golden single-word cards (custom 365 → 385; dictionary → 535).** Owner's **inline** add-words request (§10 protocol) rather than a file-sourced wave: 22 items given in chat. Dedupe against all word files first — **2 skipped** as already carded under their base lemma (`concerns` → `concern` [D4]; `tweaks` → `tweak` [D7]; owner chose skip over extending the shipped cards, so no id is duplicated and no verified card is re-diffed), **2 normalized** to base lemmas per the D6/D7 convention (`threads` → `thread`, `capabilities` → `capability`), `Narrate` → `narrate`. Two cards deliberately complete existing pairs: **`fluctuate`** is the verb next to the D6 noun `fluctuation`, **`reasonable`** the positive next to the D6 `unreasonable` (cross-linked both ways). The 20 cards span everyday/discourse (`thread`, `awkward`, `stuck`, `stale`, `particular`, `equally`, `cause`), work/planning (`establish`, `committee`, `contingency`, `accelerate`, `efficient`, `capability`, `acceptance`), business/environment (`venture`, `renewable`, `reasonable`) and thinking/communication (`awareness`, `narrate`, `fluctuate`). Same golden bar: **US IPA (no slashes, Oxford NAmE style), 7 tagged examples (4 general + 1 each business/office/dev), bilingual `def` + тлумачення, translations, collocations, synonyms/antonyms, in-corpus `seeAlso` (39 resolving links), topics, `source:'custom'`** — appended to `custom.ts`, **no id renumbered**. Authored **sequentially** (owner's choice this wave — one voice across all 20 cards), then audited by a `general-purpose` **fact-check subagent** against Oxford Learner's / Cambridge / Merriam-Webster: **all 20 IPA confirmed correct** (incl. the two genuinely disputed ones — `narrate` ˈnæreɪt is Oxford NAmE where Cambridge/MW lead with ˈnereɪt; `awkward` ˈɔːkwərd is backed by Oxford + MW against Cambridge's merged ˈɑːkwɚd), and **13 corrections applied**: levels `thread`/`awkward` b1 → b2 and `fluctuate` b2 → c1 (matching the existing `fluctuation` card), `thread` def extended to the execution-thread sense its dev example uses, `cause` def extended to the *a good cause* sense its 4th example uses, 2 BrE/unnatural sentences fixed (`queue` → `line`; *causes me trouble sleeping*), 4 examples reworded, 1 UA translation fixed (`озвучує` = dubs ≠ narrates). Only code change beyond data: `scripts/test-definitions.ts` corpus assertion **365 → 385** (+ `gen:index` rewrote `words/index.generated.ts`, which `check:index` had correctly flagged as stale). Ledger: `✅ [D8]` tags + a **D8 APPLIED block** in `definition_v2.txt` (the inline list is recorded there so the ledger stays in one place), `DEFINITIONS.md` §6, `CLAUDE.md` §13, `README.md`. **Verification: FULL `npm run verify` ✓ green in a cloud scratch copy** (fresh `npm install`) — typecheck · eslint · check:index · check:data (**535 words = 150 a1 + 385 custom**) · test ×14 (incl. **test-definitions** on 385) · smoke (**305 checks**) · vite build · check:bundle (330.4 kB / 420 kB eager budget). Owner next: `npm run verify` locally → branch `feat/d8-definitions-wave` → commit → PR. **Follow-up spotted:** the pre-existing `altitude` card says *two thousand metres* — a BrE spelling in a US-IPA corpus; left untouched (shipped card, owner's call).
- **T4 (2026-07-20) — `m11` + ★`sentence-morpher` + ★`tense-chooser` — Section II Tenses COMPLETE (6/6; 12/34 authored).**
  The S5 plan's final Tenses session. **★ Sentence Morpher (m6):** ONE sentence — *Maya works on the
  payment service (every day)* — morphed through all 12 cells in an **aspect-major walk** (● slides
  past→present→future, then 〜, ⤺, 〜⤺ — the "rows share machinery" insight animated); mini-timeline
  in the shared notation + highlighted verb phrase + synced natural UA line (the ⤺ row deliberately
  shows UA rendering Perfect with present/past forms — the no-Perfect-in-UA mismatch made visible);
  ◀/▶/▶-autoplay/↺ controls (reduced-motion withholds autoplay, mirrors TenseTimeline) + a 4×3
  jump-grid radiogroup in triad hues. Engine `lib/morpher.ts` (pure; names/patterns REUSED from
  `lib/tenses` — never restated) + content `data/sentenceMorpher.ts` + golden test
  `scripts/test-morpher.ts` (12 steps == the matrix, aspect-major order, vp signatures per aspect,
  golden sentence, determinism). Placed on m6 topic 1 right after the "rows share machinery" dive-3
  block; m6's routes block updated (no longer "arrives later"). **★ Tense Chooser (m11):** 3 meaning
  questions → the tense: Q1 WHEN (time) · Q2 WHAT KIND (4 meaning branches per time) · Q3 the context
  check (2–3 leaves) = **30 paths**, each with verdict (name/pattern/why/example EN+UA) + near-misses.
  The tree encodes the section's **cross-time overrides** — dated-time → Past Simple (under a
  "present" start!), result-now → Present Perfect (under "past"), arrangement → Present Continuous +
  timetable → Present Simple (under "future") — and verdict `time` = the FORM's matrix column, so the
  hue visibly jumps on override paths (the jump is the lesson). Engine `lib/chooser.ts` + content
  `data/tenseChooser.ts` + golden test `scripts/test-chooser.ts` (30 paths, 4 branches × time, 2–3
  leaves, allowed-name set = 12 matrix names + will/be-going-to/used-to, extras must be ● simple,
  matrix-cell honesty, the 4 overrides pinned, the no-will-after-when near-miss pinned, determinism).
  **m11 Choosing Tenses & Narrative** (b2 ★, the section capstone): 5 topics — `contrast-map` (the
  3-question algorithm + the five damage-dealing contrast pairs + ★sim) · `signal-words-and-traps`
  (signals are hints not laws; the 7-signal trap table; THE override rule callout; AmE just/already
  dive-3; the since-clause two-frame nuance dive-3) · `narrative-tenses` (the 4 narrative roles ●
  plot / 〜 scene / ⤺ flashback / 〜⤺ lead-up on one incident story; flat-vs-textured compare;
  anchor-then-return dive-3) · `historic-present-headlines` (jokes/anecdotes/plot-summaries/
  commentary; the 4-pattern headline decoder table; don't-export warn; the docs/README-prose
  connection dive-3) · `future-in-the-past-sequence` (was going to / would / was about to table +
  NOW-vs-BACK-THEN compare; the m15 backshift bridge; `was to` destiny dive-4; would's three jobs
  dive-3). 6 keyPoints, 6 pitfalls (UA-aspect-1:1-mapping · signal autopilot · flat all-● story ·
  Past-Perfect-everywhere · headline grammar in prose · was-going-to≠went), **14 drills**
  (`ex-choosing-narrative-1..14`), seeAlso m6–m10+m15+m17, **6 web-verified sources** (Cambridge
  future-in-the-past / present-verb-forms-referring-to-the-past / newspaper-headlines /
  past-simple-or-present-perfect — slugs confirmed via search, Cambridge 403s bots; British Council
  TeachingEnglish narrative-tenses + LearnEnglish just/yet/still/already incl. the AmE note — both
  fetched; AmE Past-Simple facts cross-checked at the Cambridge ELT blog + Test-English + English
  Lessons Brighton). **Section polish:** m7/m8 seeAlso += m11 (cross-link sweep — m9/m10/m6 already
  linked); the 5 mandatory UA pitfalls re-verified across m6–m11 (grep sweep); m11 dive tuning = 8×
  dive-3 + 1× dive-4 (lean 🚂 core for the b2 capstone). **SimBlock now renders captions**
  (blocks.tsx — the contract always allowed `caption` but it was silently dropped; m6's navigator
  caption shows for the first time). `.sm-*`/`.tc-*` CSS appended (reuses .mn/.tn/.ttl base).
  **Gates:** registry +2 sim keys; smoke SIM_CANARIES (SentenceMorpher 'worked' = step 0 past×simple ·
  TenseChooser) + `ModulePage:m11(full)` canaries (Past Perfect · was going to) + the m11 hash — now
  **216 checks, 5 sims + 10 figures**; run-tests auto-discovers the 2 new tests (×7 total).
  **Verification: FULL `npm run verify` ✓ green end-to-end in the cloud scratch** (fresh npm install;
  typecheck `tsc -b` · eslint · check:data 6/34 · **12 authored** · **181 exercises** · 447 words ·
  100 reading · registry+links resolve · test ×7 · smoke 216 · vite build) + screenshot pass in
  headless Chromium (morpher step 0 EN + present-perfect cell UA with the ⤺ arc; chooser full
  override path present→touches-now→dated → a ROSE Past Simple verdict, EN + UA; m11 page; 0 page
  errors — only the sandbox-blocked font fetch). NOTE: staging missed `PolitenessLadder.tsx` at
  first (my staging-list slip — the file exists on the device; baseline verify caught it, re-staged,
  baseline green before any T4 change). README EN+UA built-lists + status updated; CURRICULUM §F/§G
  updated. Owner next: `npm run verify` locally → branch `t4-tenses-choosing-narrative` → commit →
  push. Deferred/next: dictionary v2 (lazy chunks + index) + `#/review` SRS port + `#/irregular`;
  Reading OCR waves; the idioms tab (~178 short phrases).

- **V1 + V2 (2026-07-24) — the Words hub + the Idioms trainer + Irregular moved in.** Owner UX pass on
  the word surfaces (this session, 3 waves in-conversation). **V1 (Words hub):** Dictionary + Definitions
  unified under ONE top-nav entry **Words** (`ui.words`) with a shared sub-tab bar
  (`components/layout/VocabTabs.tsx` + `WordsLayout.tsx`) — **flat routes kept** (`#/dictionary`,
  `#/definitions`, +`#/idioms`), so deep-links + `search.ts` are untouched; TopBar + Sidebar collapsed the
  two links into one, `isWordsRoute()` lights it on any tab. **A–Z everywhere:** the Dictionary gained the
  Definitions A–Z rail (reuses `lib/definitions` helpers — `availableLetters`/`firstLetter`/`groupByLetter`
  — with grouped A/B/C headers); the rail is now **one line on desktop** (`.def-alpha` nowrap + equal
  `flex:1`, new `.def-alpha-all` keeps the "All" pill at label width; wraps < 560px — the ABC.png fix).
  The section `<h1>Words</h1>` is `sr-only` (owner: reclaim the vertical space; a screen-reader/SEO heading
  stays). **V2 (Idioms trainer, `#/idioms`):** a NEW SSOT `src/data/idioms.ts` — **27 golden entries**
  (idioms + phrasal verbs + collocations), deliberately SEPARATE from the single-word corpus (per D3/D6) —
  with a new `IdiomEntry` type in `types.ts` (bilingual `meaning`, **`uaEquivalent`** = the "aha" hook,
  `literal?`, `register`, `themes`, 2–3 bilingual examples, `origin?`). Page
  `components/pages/IdiomsPage.tsx` has **three modes** (best-practice idiom pedagogy): **Learn**
  (kind-grouped cards — UA equivalent up front, examples + TTS, origin story, mastery), **Guess** (meaning
  + a blanked context sentence → reveal → self-rate), **Match** (a click-to-pair mini-game). Pure helpers
  `lib/idioms.ts` (kind grouping, theme collection, guess-blank, an injected-`rand` shuffle + match round)
  + golden test `scripts/test-idioms.ts` (auto-discovered). Mastery reuses `masteryStore`, namespaced
  `idiom:<id>` so it never collides with word ids. `.idiom-*` + `.vocab-*` CSS appended (reuses `.dict-*`/
  `.def-*`/`.chip`/`.levelseg`; `--ok`/`--danger` for the match feedback, reduced-motion-safe shake).
  **Irregular verbs moved INTO the Words hub** as the 4th tab (still a SOON placeholder — `IrregularPage`
  in `WordsLayout`); removed from TopBar + Sidebar (route `#/irregular` unchanged). **Gates:**
  `check-data.ts` now validates the idioms dataset (unique ids/phrases, kind/register/level, bilingual
  meaning + ≥2 bilingual examples, non-empty themes, bilingual literal/origin); `smoke.ts` renders
  IdiomsPage (canaries `spot on` / `break the ice`, min 1200) + IrregularPage, + the `#/idioms` hash.
  **Verification: FULL `npm run verify` ✓ green in the cloud scratch** — typecheck (`tsc -b`) · eslint
  (clean, 0 warnings) · check:data (6/34 · 12 authored · 181 exercises · 447 words · 100 reading · **27
  idioms** · all bilingual · registry+links resolve) · test ×8 (incl. **test-idioms** on 27) · smoke
  (**225 checks**) · vite build (IdiomsPage lazy chunk). All four hub tabs + the three idiom modes were
  render-checked in headless Chromium (EN+UA; Learn card with the UA-equivalent block + origin, Guess
  reveal, Match 5×5 board). Idiom senses/UA-equivalents + origins spot-checked against Cambridge/learner
  references. **Write-back:** via `device_bash` `cp`-over-mount (the §16 method), no git touched — changes
  land in the owner's working tree. Owner next: `npm run verify` locally → branch `v1-words-hub` (or split
  `v1`/`v2`) → commit → PR. Deferred/next: grow the idioms corpus toward the ~178-phrase backlog; build the
  Irregular trainer (searchable table + 3-forms drill); optional idiom-of-the-day + per-tab counts.

- **V3–V9 (2026-07-24, same session) — Irregular trainer · idiom corpus 27→179 · Reading body-language fix.**
  Continued the Words-hub work in reliable, byte-exact waves. **V3 — Irregular verbs trainer** (`#/irregular`,
  the real page, no longer SOON): new SSOT `src/data/irregular.ts` (**~75 highest-frequency verbs**, UA
  translations, trap notes for read/read · lie/lay · rise/raise · get/gotten…) + pure `lib/irregular.ts`
  (pattern classify **A-A-A / A-B-A / A-B-B / A-B-C**, grouping, accepted-form expansion) + `test-irregular`.
  Two modes: **Table** (searchable, grouped by pattern, TTS + level + ⓘ notes) · **Drill** (type past +
  past participle, auto-checked through `lib/exercise` so slash/casing variants pass, running score).
  **VocabTabs** gained per-tab **count badges** (Dictionary 447 · Definitions 447 · Idioms · Irregular);
  **Idiom of the day** banner on the Idioms Learn view (`idiomOfDay` helper — deterministic per calendar
  day). **Idiom corpus grown 27 → 179** in five ~30-card waves — **111 idioms · 51 phrasal verbs · 17
  collocations**, all bilingual, work/dev-flavoured examples, a Ukrainian equivalent on most cards, and an
  origin note on true idioms. **V9 — Reading reader body-language fix:** the `#/reading/<id>` body was
  decoupled from the global EN/UA toggle (only the in-page Original/Translation control switched it), so
  switching the app to UA translated the title/category/questions but **left the text English** (owner
  report + `_examples/Reading_ua.png`). Fixed in `ReadingTextPage` — `showUk` now defaults to
  `lang === 'uk'` and re-syncs on language/text change (`useEffect [lang, id]`), while the in-page
  Original/Translation control remains a per-text manual override; TTS still reads the English study text.
  **Gates:** `check-data.ts` validates the idioms + irregular datasets; `smoke.ts` renders IdiomsPage
  (canaries `spot on` / `break the ice`) + IrregularPage (`went` / `brought`); `test` ×9 (incl.
  **test-idioms** on 179 + **test-irregular** on 75). **FULL `npm run verify` ✓ green** after every wave
  (typecheck · eslint clean · check:data — **179 idioms · 75 irregular** · all bilingual · registry+links
  resolve · test ×9 · smoke 229 · build). **Write-back lesson:** a `patch --fuzz` apply **duplicated a
  `ui.ts` key block** (43 TS errors) and offset `components.css` — diagnosed and corrected by a **byte-exact
  md5-verified** overwrite; **all disk writes now go byte-exact** (verified clone → md5-matched file/`cp`),
  never fuzzy patches. Docs (this §14, README, CURRICULUM, PROJECT-BRIEF) refreshed to the 179 count.
  Owner next: `npm run verify` locally → branch (e.g. `v3-irregular-trainer` / `v-idioms-waves`) → commit
  → PR. Deferred/next: grow irregular ~75 → ~150; optional idiom register-filter + theme grouping in Learn;
  wire idiom/irregular mastery into the `#/review` SRS.
- **V10 (2026-07-25) — Idioms → Collocations wave: +100 collocations (idioms corpus 179 → 279), organised into a navigable category bar.** Added the 100 structured collocations from `_examples/collocations.txt` as `IdiomEntry` cards (`kind:'collocation'`) in **five grammatical-pattern categories × 20** — Make vs Do · Verb+Noun · Adjective+Noun · Adverb+Adjective · Business English — and retro-tagged the existing **17** workplace/tech collocations as a sixth category (Workplace & Tech). Every card is bilingual (`meaning` + 2 examples EN/UK) and carries a natural **`uaEquivalent`** plus — new this wave — a **`note`** (the common wrong version, e.g. “*do a decision*”, + the fix) rendered as an amber **“Common mistake”** callout. **Data-contract change:** two optional fields on `IdiomEntry` — **`group?`** (collocation category id) + **`note?: Localized`** (`types.ts`); `check-data.ts` + `test-idioms.ts` now require a known `group` on every collocation, forbid it on other kinds, and assert notes are bilingual + every category is populated. **New nav (best-practice pedagogy):** `lib/idioms.ts` gains `COLLOCATION_GROUP_IDS` + `groupCollocations()` (golden-tested); `IdiomsPage.tsx` shows a **category chip-bar** for the Collocations kind (All + 6 categories) that filters `group`, and the Learn view **sections by category** with anchored headers; labels in `i18n/ui.ts` (`collGroup*`), CSS (`.coll-catbar` · `.idiom-note` · collocation kind-chip) appended to `components.css`. Authored via **5 parallel `general-purpose` subagents** (one per pattern, shared SPEC — curly-apostrophe typography, controlled theme vocab, ≥2 examples), then a **local validator mirroring `check-data`** (kebab/register/level, unique id+phrase vs the 179-entry corpus, bilingual non-empty, straight-quote scan) gated all 100 before a Python serializer emitted house-styled TS. **Verification: FULL `npm run verify` ✓ green in a cloud scratch copy** (fresh `npm install` — device `node_modules` are macOS-native) — typecheck · eslint clean · check:index · check:data (**279 idioms = 111 idiom · 51 phrasal · 117 collocation**, all bilingual) · test ×11 (incl. **test-idioms** on 279 + the new `groupCollocations` golden) · smoke (**267 checks**) · vite build (idioms lazy chunk ≈ 211 kB; eager payload 326 kB / 420 kB budget) · check:bundle. Real-browser UX confirmed via a headless-Chromium screenshot (category bar, per-category sections, filter, bilingual “Common mistake” callout). **Write-back byte-exact** to the owner’s working tree (`types.ts` · `lib/idioms.ts` · `data/idioms.ts` · `IdiomsPage.tsx` · `ui.ts` · `components.css` · `check-data.ts` · `test-idioms.ts` + this ledger + README count); source `_examples/collocations.txt` is gitignored (local backlog). Owner next: `npm run verify` locally → branch `feat/v10-collocations` → commit → PR. Delivers the V3–V9 deferred **“theme grouping in Learn”**. Deferred/next: optional per-category counts on the chip-bar; collocation mastery already flows into the `#/review` SRS via the idioms deck.

- **V11 (2026-07-25) — Idioms wave: +71 idioms & +7 phrasal verbs (corpus 279 → 357), with a new thematic category bar for the Idioms kind.** Added the deduped idioms from `_examples/Idioms.txt` (27 of the 100 were already in the corpus) as `IdiomEntry` cards (`kind:'idiom'`), plus 7 phrasal verbs from the file's candidate/completed lists (`speed up` · `go on` · `come back` · `clean up` · `wash up` · `pick up` · `pick out`). Every card is bilingual (`meaning` + 2 examples EN/UK), carries a natural **`uaEquivalent`** and controlled `themes`, with a `literal` hook on the vivid ones; examples lean work/dev per house style. **New nav (mirrors V10's collocation bar):** all **182 idioms** (111 existing retro-tagged + 71 new) now carry a single **`category`** from an **11-category taxonomy** — Communication · Work & business · Success & failure · Effort & difficulty · Problems & risk · Decisions & uncertainty · Emotions & feelings · People & relationships · Time & chance · Money & value · Everyday & casual. **Data-contract change:** one optional field **`category?`** on `IdiomEntry` (`types.ts`); `lib/idioms.ts` gains `IDIOM_CATEGORY_IDS` + `isIdiomCategory()` + `groupIdiomsByCategory()` (golden-tested); `check-data.ts` + `test-idioms.ts` now require a known `category` on every idiom, forbid it on other kinds, and assert every category is populated. **Page:** `IdiomsPage.tsx` shows a **category chip-bar** for the Idioms kind (All + 11) that filters `category`, and the Learn view **sections by category** with anchored headers; labels in `i18n/ui.ts` (`idiomCat*`); the bar reuses the existing `.coll-catbar` chip row, so **no CSS change**. Authored **in-session** (standard idioms; UA equivalents picked for the memory hook), deduped against the 279-entry corpus by normalized phrase, then a **Python serializer** emitted house-styled TS with typographic-quote safety (straight `'`→`’`, so single-quoted JS literals never collide); existing entries were category-tagged via an assertion-guarded id→category map, and every code edit applied through assertion-guarded patches (each replacement must hit exactly once). **Verification: FULL `npm run verify` ✓ green in a cloud scratch copy** (fresh `npm install` — device `node_modules` are macOS-native) — typecheck · eslint clean · check:index · check:data (**357 idioms = 182 idiom · 58 phrasal · 117 collocation**, all bilingual) · test ×11 (incl. **test-idioms** on 357 + a new `groupIdiomsByCategory` golden) · smoke (**267 checks**) · vite build (idioms lazy chunk ≈ 268 kB; eager payload 327 kB / 420 kB budget) · check:bundle. **Write-back byte-exact** to the owner's working tree (`types.ts` · `lib/idioms.ts` · `data/idioms.ts` · `IdiomsPage.tsx` · `ui.ts` · `check-data.ts` · `test-idioms.ts` + this ledger + README count); source `_examples/Idioms.txt` is gitignored (local backlog). Owner next: `npm run verify` locally → branch `feat/v11-idioms` → commit → PR. Advances the V3–V9 deferred **~178-phrase idioms backlog** (idiom portion). Deferred/next: optional per-category counts on the idiom chip-bar; a phrasal-verb wave for the remaining candidates.
- **RB1 — Reading wave: +31 texts (Biographies & Speeches + short essays), 100 → 131.** First wave fed by
  the owner's **text list** `_examples/reading.txt` (not the screenshot-OCR path of §15). Added a **new
  `biographies` category** ("Biographies & Speeches", order 18; `other`→19) with **22 condensed graded
  adaptations** (b1–b2, ~2–3 min, full UA translation) of real biographies + speeches: Adam Smith,
  Steve Jobs (Stanford '05), Elon Musk ×2, Trump ×2, Gates (Harvard '07), Zuckerberg ×2 (Harvard '17 ·
  Georgetown '19), Bezos (Princeton '10), Tim Cook, Buffett, Sam Altman, Ivanka Trump, Selena Gomez,
  Angelina Jolie, Ellen (Tulane '09), JFK ('61 inaugural), Mandela, Keanu Reeves, Jack Ma, Rich Dad Poor
  Dad — **faithful summaries only: no invented quotes/facts, politically neutral**, each `source`-linked to
  the origin video/speech. Plus **9 short essays** into existing categories: `writing` + `public-speaking`
  (study), `friendship` (© Sheikh Juma), `my-house` (everyday), `the-internet` + `facebook` (technology),
  `commitment` (discipline), `self-improvement` (values), `teamwork` (work). **Skipped** ~14 reading.txt
  items already in the library (my-mother, communication, success-habits, life, success, believe-in-yourself,
  stay-growing/-focused, self-confidence≈confidence, reading/listening/speaking…). **Held back** (different
  genre — need an owner call): the WHO-NEED-PROVIDE dialogue, the 10 LIFE-REFLECTIONS + 9 MODERN-LOVE-TALES
  relationship-debate transcripts, and the 13 ELK jokes — none match the graded-essay style. **Method:**
  6 `general-purpose` subagents drafted the bios in parallel → JSON → validated → codegen
  `reading/biographies.ts`; Part A hand-authored + inserted into category files. **Verify:** scoped strict
  `tsc` ✓ + full check:data reading rules replicated over 131 texts ✓ (cloud scratch — 131 reading in 19
  categories, all bilingual, questions + seeAlso resolve). NOT run here (owner runs `npm run verify`): full
  `tsc -b`, `eslint`, `smoke`, `vite build`. Applied source lines tagged **`✅ [RB1]`** in
  `_examples/reading.txt` (+ an APPLIED header block; held/dup lines tagged too) so next month's 10–40 new
  texts diff cleanly. Owner next: `npm run verify` → branch `rb1-reading-biographies` → commit. Deferred:
  owner decision on the held-back dialogues/jokes (own genre/category?); the `#/reading` counter auto-updates.

- **R1 (2026-07-25) — `#/review`: the SRS trainer (SM-2-lite). The retention engine, live at last.**
  The nav entry had been a ComingSoon stub since S1 while the corpus grew to **769 recallable items**
  (515 words + 179 idioms + 75 irregular verbs) with **no scheduling** — so the guide could teach but not
  make anything stick, against BRIEF §2's declared success metric ("owner's retained vocabulary"). This
  session ports the schedule instead of adding content: **zero new datasets**, all four decks are
  projections of the existing SSOT. **Engine** `lib/srs.ts` — `../database guide/src/lib/srs.ts` ported
  **1:1** (BRIEF §5): grade transitions (again → 10 min + ease −0.20 · hard ×1.2 + ease −0.15 · good
  1 d → 3 d → ×ease · easy 2 d → 5 d → ×ease×1.3), ease clamped 1.3–3.0, interval capped 365 d, queue =
  due-oldest-first then new capped by `NEW_PER_DAY = 10`, plus `previewIntervals`/`dueSummary`/`dayKey`.
  The **one addition** is `seedState()` (marked `CHANGED (R1)`) so the mastery import creates honest SM-2
  states instead of hand-rolled literals. **Decks (owner decision this session):** four **by corpus** —
  `dict` Dictionary/Oxford 150 · `mine` My words 365 · `idioms` 179 · `irregular` 75 — mutually
  **disjoint** (Oxford vs custom split by `source`, so no word is counted twice), with **CEFR level as a
  filter** on top like `#/practice`; the CURRICULUM §B wording "per level" is satisfied by the filter
  rather than 8 toggles. `lib/reviewDecks.ts` builds the cards (`REVIEW_CARDS`, front = the ENGLISH study
  object so it survives the EN/UA toggle; word cards reveal def + translations + a `general` example,
  idioms add the `uaEquivalent` hook, irregular cards reveal `past · pastParticiple`). **Store**
  `lib/srsStore.ts` (key `englishguide.srs`, its own key — Review owns the SCHEDULE, `#/definitions` keeps
  mastery and `#/practice` keeps solved drills). **Architecture note:** the deck-id + prefix contract
  (`wd:` · `mw:` · `im:` · `ir:`) lives in `srsStore` (which imports NO data) rather than in `reviewDecks`,
  so `srsDueCount()` attributes a stored state to its deck **from the id prefix alone** — the eager shell's
  due-badge never loads a corpus, and that stays true after the coming dictionary meta-split. **Page**
  `components/pages/ReviewPage.tsx`: deck toggles with per-deck due/total, level filter, an `aria-live`
  counts strip (due · new + budget left · scheduled), reveal-then-grade with **no flip animation** (so
  inherently reduced-motion safe), Space/Enter reveals + 1–4 grade, each grade button shows the interval
  it would schedule, TTS on the English side, and a deep link to the card's study surface
  (`#/definitions/<id>` · `#/idioms/<id>` · `#/irregular`). **Mastery bridge:** an explicit *Import
  progress from Definitions* button (owner chose explicit over a silent seed) — `known` → two clean
  `good` grades (3-day interval), `learning` → due now, **idempotent**, and it can never rewind a card
  already in review; it also picks up idiom mastery via the `idiom:<id>` namespace. **Progress backup**
  `lib/backup.ts` — one JSON file over the four progress keys (srs · mastery · practice · known), UI
  prefs deliberately excluded; strict validation rejects a foreign/mis-versioned file rather than
  half-applying it, and restore reloads the page because `masteryStore`/`practiceStore` cache their maps
  at first read. **Nav due-badge** in TopBar + Sidebar (`useSrsDueCount`, 60 s tick + focus + cross-tab
  `storage` event). `ui.ts` gained the bilingual review/deck/grade block and **lost `reviewSoonNote`**;
  `.rev-*` + `.due-badge` CSS appended (reuses `.card`/`.btn`/`.chip`/`.levelseg`/`.kbd`/`.tts-btn`).
  **Gates:** new `scripts/test-srs.ts` (auto-discovered, **test ×10**) — the transitions with exact
  numbers, ease floor/cap, interval cap, lapse-only-if-learned, queue policy incl. allowance 0/negative,
  `nextDueAt`, preview labels, `dayKey` invariants (TZ-agnostic), `seedState`, then the deck projection
  over the REAL corpora (769 cards, unique ids, prefix round-trip, no prefix is a prefix of another, per
  deck shape), then store behaviour a bug would make destructive (a new grade spends exactly one daily
  slot, regrading spends none, budget resets next day, a disabled deck drops out of the badge count,
  import idempotency + the anti-rewind guarantee, corrupt/future-version storage degrades to fresh) and
  backup validation. **Test note:** ease is accumulated float arithmetic (`2.8 + 0.15 ===
  2.9499999999999997`), so ease assertions compare within an epsilon — the test bends, not the ported
  engine. `smoke.ts` renders ReviewPage EN+UK with a **dynamic** queue fixture (`REVIEW_CARDS[0].front`,
  the S5 hardcoded-fixture lesson) + the deck label `Irregular verbs`, which stays English in both
  languages — now **236 checks**. **Verification: FULL `npm run verify` ✓ green end-to-end in the cloud
  scratch** (fresh npm install; typecheck `tsc -b` · eslint clean · check:data 6/34 · 12 authored · 181
  exercises · 515 words · 131 reading · 179 idioms · 75 irregular · test ×10 · smoke 236 · vite build) +
  a headless-Chromium pass driving the REAL page: EN front → reveal → the four grade buttons with
  `10 min`/`1 d`/`1 d`/`2 d`, UA chrome with the study object still English, grading advances the queue
  (`be` → `have`, 10 new → 9, 1 scheduled), the import button's empty path, and a planted-state check
  proving the badge shows **3** with the `irregular` deck toggled off (4 due cards, one excluded) — 0
  page errors. **Bundle:** the ReviewPage chunk is **9.5 kB**; the eager chunk grew only ~8 kB (srsStore
  + badge), since the corpora were already eager via `search.ts`. **Also fixed:** a pre-existing
  working-tree diff had stripped **8 section comments** from `ui.ts` (comment-only, no code) — restored,
  so this session's `ui.ts` diff is purely the R1 additions. Owner next: `npm run verify` locally →
  branch `r1-review-srs` → commit → PR. **Deferred/next — the scale gate:** dictionary v2 (slim eager
  search index + lazy per-level chunks) **before** the next words wave — the eager entry chunk is already
  1.39 MB because `TopBar → search.ts → WORDS` pulls the whole corpus, and at 3,000 words that is ~6–8 MB
  before first paint (BRIEF §6 scale guard). Then optionally a "Today" home page over the due counts, and
  a UA→EN production drill (every example already has `en` + `uk`, so the content cost is ~zero) to
  balance the recognition-heavy practice.

- **M1 (2026-07-25) — the dictionary meta-split: the scale gate the roadmap kept deferring.** Owner's
  call after R1: do this BEFORE the next words wave. **The measurement first**, because the cause was
  not where the roadmap assumed: the eager entry chunk was **1.39 MB** not because of *one* edge
  (`search.ts → WORDS`) but **two** — `data/concepts.ts` imported `WORDS` for a single
  `COUNTS.words` in the footer, and `concepts.ts` is imported by the whole eager shell
  (TopBar/Sidebar/Footer/search). Separately, `LandscapeMap` — the **default route** — imported
  `data/reading` for `READING_COUNTS`, making all **629 kB** of reading bodies a first-screen cost for
  three numbers. Sizes that drove every decision: words full **899 kB** vs slim index **52 kB** (id ·
  word · level · joined translations) vs **152 kB** if `def` is included; reading full **639 kB** vs
  counts **0.6 kB**. **Shipped:** `scripts/gen-data-index.ts` emits `src/data/words/index.generated.ts`
  (`WORD_INDEX` + `WORD_COUNTS`) and `src/data/reading/index.generated.ts` (`READING_COUNTS`), both
  committed (`tsc -b` typechecks them) and regenerated by `predev`/`prebuild`. `concepts.ts` and
  `LandscapeMap` now import those. `vite.config` manualChunks gives each corpus ONE named chunk its
  lazy consumers share (`words` · `reading` · `idioms`) — the word corpus is needed by both the Words
  pages and `#/review`, so without this it splits unpredictably as routes are added; the generated
  indexes are explicitly EXCLUDED from those chunks (pinning them there would drag the corpus back
  into the shell). **Definition search is deferred, not dropped** — the one behaviour decision worth
  recording: keeping `def` in the eager index costs 152 kB now and ~890 kB at the 3,000-word target,
  i.e. it re-breaks the guard within two waves. So `lib/search.ts` indexes the slim list eagerly and
  `primeWordCorpus()` dynamically imports the real corpus (the same chunk the Words pages use, so it
  is usually already cached), after which the next query re-ranks with a `def` field; `TopBar` primes
  on focus/first keystroke and re-runs the query via a `deepReady` counter. A failed import leaves
  search working in slim mode instead of throwing. **Result: eager payload 1.39 MB → 745 kB**
  (entry chunk 560 kB + react-vendor 190 kB + runtime), corpora fully lazy, and a words wave now
  costs ~120 bytes of eager index per card instead of ~1.8 kB. **Two new gates, and the story of
  getting them right:** `check:index` regenerates in memory and fails on staleness (verified against a
  hand-edited count). `check:bundle` was written twice — the first version grepped the entry chunk for
  corpus *sentences* and **passed while a deliberate regression was fully present**, because
  manualChunks keeps the corpus in `words-*.js` and the entry chunk merely gains a *static import* of
  it. The rewrite walks the **transitive static import graph** (`import"./x.js"` is an edge,
  `import("./x.js")` is not) — and its first regex silently matched NOTHING against minified
  `}from"./x.js"` output, making the gate a no-op a second time. Both bugs were found only by
  **testing the gate against deliberate regressions**, which is now the documented procedure in the
  file header. The gate finally asserts three things: no corpus chunk is statically reachable from the
  entry chunk; **the default route `#/map` reaches no corpus either** (its own rule — LandscapeMap is
  lazy, so the entry-graph rule cannot see that bug, which was the actual M1 bug); no corpus text is
  inlined anywhere in the eager set (samples drawn from live data, so they cannot go stale); and a
  **745 kB → 800 kB budget that must only ever go DOWN**. Both regressions now fail it, clean state
  passes. **New golden test** `scripts/test-search.ts` (test ×11): the slim index covers every word,
  entries carry ONLY the four budgeted fields (a structural assertion against "just one more field"),
  the index stays ≥4× smaller than the corpus, and — using a **definition-only probe phrase derived
  from the live corpus** — slim mode does NOT match definition text while primed mode does, additively.
  **Verification: FULL `npm run verify` ✓ green** (typecheck · eslint · **check:index** · check:data
  6/34 · 12 authored · 515 words · 141 reading in 20 categories · 179 idioms · 75 irregular · test ×11
  · smoke 236 · build · **check:bundle**) + a headless-Chromium network trace proving the real
  behaviour: **no corpus chunk fetched on load**, `words-*.js` fetched only on search intent, and all
  three match paths alive — headword (`circumstances`), UA translation (`обставини` → context ·
  circumstances) and definition text (`have information about` → `know`, reachable only after the lazy
  upgrade). `package.json`'s `//meta-split` note rewritten from a TODO to what shipped. Owner next:
  `npm run verify` locally → branch `m1-dictionary-meta-split` → commit → PR. **Deferred/next — the
  MODULE meta-split, now the top scale gate:** of the 573 kB entry chunk, module content the shell
  never needs is topic bodies **266 kB** + exercises **103 kB** + keyPoints/pitfalls/sources **82 kB**,
  against just **19 kB** of nav meta (title · tagline · mentalModel · level) that the sidebar, map and
  search actually use — and that is at **12 of 34** authored, so the current path returns to ~1.3 MB
  when the guide is finished. Generate `data/meta.ts` + lazy module bodies (the database guide's S19
  pattern); the awkward piece is `#/practice`, which aggregates exercises from EVERY module and needs
  its own lazy drills chunk. Reading's per-text slim index (for the `#/reading` accordion, which today
  searches full bodies) is the follow-up after that.

- **M2 (2026-07-25) — the module meta-split + a CI fix I caused.** Same session as M1, owner's call:
  fix the broken build and do the next scale gate in one round.
  **First, the CI fix.** M1's write-back shipped a `package.json` containing `playwright` — I had
  installed it in the cloud scratch for the headless render checks, and it rode along into the
  committed file while `package-lock.json` (correctly) did not change. `npm ci` compares the two and
  failed: *Missing: playwright@1.62.0 from lock file*. Removed the dependency (screenshot tooling is
  throwaway sandbox tooling, it does not belong in the project's manifest) and re-verified with
  `npm ci --dry-run`; the lock is byte-identical to the committed one. **Lesson, now a convention:**
  install session-only tooling with `npm i -D <pkg> --no-save`, and never write back `package.json`
  without checking `git diff` on the dependency blocks.
  **Then the split.** Measured target: of the 560 kB entry chunk, authored module content the shell
  never reads was topic bodies **266 kB** + exercises **103 kB** + keyPoints/pitfalls/sources **82 kB**,
  against **19 kB** of nav meta the sidebar/map/search actually use — at only **12 of 34** authored, so
  the trajectory was back to ~1.3 MB. **Shipped:** the full eager module list moved out of
  `concepts.ts` into **`src/data/modules/all.ts`**, which is **Node-side only** (generator +
  `check:data` + `smoke`) — keeping the gates synchronous and simple instead of teaching them to
  lazy-load. `gen-data-index.ts` now also emits **`meta.generated.ts`** (`MODULE_META` — nav meta
  incl. topic id+title so the TOC and search need no body; ~44 kB for all 34 + `MODULE_COUNTS`),
  **`moduleLoaders.generated.ts`** (id → `() => import('./modules/<id>')`, literal specifiers because
  Rollup can only code-split a statically visible dynamic import), and **`drills.generated.ts`** (all
  181 exercises with a `moduleId` back-link). `concepts.ts` is now genuinely thin: hand-written
  `sections` + generated meta + lookups + **`loadModule(id)`** (memoized; a stub, unknown id or failed
  chunk fetch all resolve to undefined, which the page already renders as ComingSoon — so a missing
  chunk degrades to the stub view instead of crashing the route). **`ModulePage` split:** it renders
  the header, TOC and prev/next **instantly from meta** and mounts the new **`ModuleBody`** when the
  chunk lands (measured header→body gap on localhost: 27 ms). `ModuleBody` is deliberately **pure** —
  given a `Module` it renders, with no fetching — which is what lets the smoke SSR real content;
  a body that loaded itself in a `useEffect` could never be server-asserted and the content canaries
  would have silently rotted. `#/practice` reads `DRILLS` instead of `modules.flatMap(...)`: it is the
  one surface that needs drills from EVERY module, and reading them off the bodies would have made it
  load all 34 content chunks (~450 kB) to reach ~103 kB of drills. **The drills file duplicates data
  that also lives in the module files** — a deliberate trade, generated-only, never hand-edited, with
  the module files remaining the SSOT that `check:data` validates and `check:index` guarding drift.
  **Results:** entry chunk **560 → 144 kB**, eager payload **745 → 326 kB** (of which ~190 kB is the
  React vendor chunk, so app-eager is ~136 kB); per-module chunks appear (m11 56 kB · m17 49 kB ·
  m6 48 kB · m10 41 kB …) and the drills land in the 109 kB `PracticePage` chunk. **Cumulative
  M1+M2: 1.39 MB → 326 kB, −77%**, and authoring one of the 22 remaining modules now costs ~1.3 kB of
  eager meta instead of ~37 kB. **Gates:** `check-data.ts` reads `all.ts` for real bodies and gained a
  **meta-agreement block** (count · id order · `authored` flag · num/level/section · title · topic ids
  — the semantic version of `check:index`, so a broken generator reports something readable).
  `smoke.ts` renders the full-content canaries through `ModuleBody` with awaited bodies **at dive 4**,
  so they now also cover dive-3/4 blocks the old default-depth render skipped, and it asserts **every
  authored module has a loadable body chunk reporting its own id** — a rename in `all.ts` that missed
  the generator would otherwise surface only as a blank page in the browser. Smoke **236 → 267
  checks**. `check:bundle` gained a module-body content probe plus a rule that no `m<N>-*.js` chunk is
  statically reachable, and its budget dropped **800 → 420 kB** (history in the file: 1.39 MB → 745 kB
  → 326 kB; the headroom is for meta growing as the last 22 modules get authored). Per the M1 lesson
  the new rule was **tested against a deliberate regression** — importing `all.ts` from `lib/search.ts`
  correctly fails with both "module bodies content is INLINED" and a 786.7 kB budget breach.
  **Verification: FULL `npm run verify` ✓ green** (typecheck · eslint · check:index · check:data 6/34 ·
  12 authored · 181 exercises · 515 words · 141 reading · 179 idioms · 75 irregular · **meta agrees
  with all.ts** · test ×11 · smoke **267** · build · check:bundle 325.7/420 kB) + a headless-Chromium
  pass on the real app: m17's header renders before its body, the body arrives from
  `m17-modal-system-*.js`, a **topic deep-link still scrolls correctly** (settles at y=70 px — the
  target only exists after the chunk lands, so the scroll effect now depends on `body`), stub modules
  render header + ComingSoon unchanged, `#/practice` reports all **181 exercises**, and **no module
  chunk is fetched on first load**. Two of those assertions initially "failed" against races in my own
  harness — hash-only `page.goto` does not navigate, so `waitUntil: 'networkidle'` resolves instantly;
  fixed by waiting on DOM signals and polling the smooth scroll until it settles. Docs: CLAUDE.md
  §2/§3/§12 (three new conventions incl. "test a gate against a deliberate regression"), CURRICULUM
  §G, README. Owner next: `npm run verify` locally → branch `m2-module-meta-split` → commit → PR
  (the `package.json` fix is in the same branch, so CI goes green with it). **Deferred/next:** nothing
  is blocking content any more — **W2 (dictionary wave to ~1,000)** and **Section III + the
  `conditionals-machine`** are both unblocked. The remaining split candidate is reading's per-text
  slim index for the `#/reading` accordion (it searches full bodies today); worth doing past ~300
  texts, using M1's defer-the-deep-search pattern.

- **TM1+TM2 (2026-07-26) — ★ The Tense Machine (`#/tenses`): the standalone live home of the tense
  system.** Built from the owner-approved **`TENSE-MACHINE-SPEC.md`** (planning session, same day:
  §5 locked name/place/scope/emulator; §11 resolved by its recommendations; §11.8 = TM1+TM2 merged
  into one session — the owner's call). **Engine `lib/conjugator.ts`** — pure, deterministic:
  (time × aspect × subject × polarity × verb) → a token list (`subject/aux/not/head/comp`; the UI
  tints auxiliaries by TIME hue and underlines the head form — the "rows share machinery, only the
  auxiliary changes its time" insight made per-token visible) + the assembled sentence. Rules are
  encoded, never guessed: be/do/have agreement, do-support only in simple past/present, `-s3` only
  in present-simple affirmative he/she, questions front the first auxiliary, `not` attaches to it.
  Full forms only in v1 (contractions toggle = TM3, spec §11.4). **Data `data/tenseMachine.ts`** —
  12 curated verbs with **precomputed** forms (no runtime morphology — the correctness mandate;
  spelling machinery covered: -es go/fix · -ies study · doubling stop/run · e-drop write/make ·
  unchanged read) + fixed natural complements (write code · run the tests · make coffee…) + UA
  glosses; deliberately self-contained (no `data/irregular.ts` import — the chunk stays decoupled).
  **Golden test `scripts/test-conjugator.ts`** (auto-discovered → test ×12): **72 hand-checked
  goldens** (write × {I, she} × 12 cells × + − ?) + 21 morphology spots + a **2,592-combo property
  sweep** (terminal punctuation, token/full agreement, do-support placement, -s3 scope,
  head-form-by-aspect, `not` iff negative, fronted-aux capitalization, determinism) + verb-set
  integrity. **Page** `components/pages/TensesPage.tsx` + `components/tense/{TenseWall,
  TenseCellDetail,TenseMachineBits}.tsx` (in `tense/`, NOT `sims|figures/` — the smoke files==keys
  constraint): hero + Machine/Decide tabs · emulator controls (verb select, subject + polarity
  radiogroups) · **master time axis** with a pointer-draggable event token bound to the SAME state
  as the canonical time radiogroup (the drag is an aria-hidden enhancement) · aspect glyph
  radiogroup · the **12-step aspect-major Tour** (2.4 s, Morpher parity; hidden under
  `prefers-reduced-motion`) · the **WALL** — all 12 cells alive at once (tense name + LIVE engine
  sentence + mini-timeline in the shared notation + freq badge; one radiogroup, arrows walk
  time/aspect; zero hand-written sentences) · the **detail panel** (aria-live) — meaning, the live
  + − ? trio with TTS, the SSOT form patterns, authored EN/UA examples, signal words, near-misses,
  and Go-deeper chips (the cell's home module m7–m10 · m6 · `#/practice`) · **Decide tab** = the
  m11 `TenseChooser` embedded as-is via React.lazy (two lenses, same SSOT; all three m6/m11 sims
  untouched). **Deep links** `#/tenses/<time>/<aspect>?v=&s=&p=` — written via
  `history.replaceState` (no history spam), restored on load, invalid values fall back; `parseHash`
  now strips a query segment for ALL routes. **Router discipline:** hashRouter validates
  time/aspect against LOCAL literal arrays + type-only imports — importing `lib/tenses` runtime
  values would drag the tense SSOT into the eager shell. **Nav:** TopBar + Sidebar **Tenses** entry
  after Map (`ui.tenses`, English in both languages); the landing-map porthole `tmx-card`
  retargeted → `#/tenses` (⚙; the m6 course stays via the Machine's hero CTA + unchanged
  START_PATH); m6 gained a "⚙ Feel it live" callout and m11 a dive-3 note — both use the **new
  `[text](#/hash)` link support in `Md.tsx`** (the first in-content app links; content stays
  authored data). `.tm-*` CSS appended (reuses `.mn/.tn/.ttl/.chip`; subgrid wall reflows to 1
  column < 760 px; the axis-token transition is disabled under reduced motion). **Gates:** smoke +
  TensesPage default & `past/perfect` deep-link variants — canaries are ENGINE OUTPUT greppable via
  the sentence `title` attribute ("She writes code.", "She had been writing code.") — + 2 App
  hashes → **285 checks**. **Verification: FULL `npm run verify` ✓ green in the cloud scratch**
  (typecheck `tsc -b` · eslint clean · check:index · check:data — counts unchanged, registry+links
  resolve · test ×12 incl. test-conjugator · smoke 285 · vite build · check:bundle **327.9 kB /
  420 kB** — page, engine and data all in the lazy route chunk; the eager shell grew ~0.6 kB =
  router/nav only) **+ a headless-Chromium behaviour pass on the real build:** default load writes
  the share hash (`#/tenses/present/simple?v=write&s=she&p=aff`), go + they + − rebuilds the wall
  ("They had not been going to the gym."), the Tour advances past→present at 2.4 s, the deep link
  `#/tenses/future/continuous?v=run&s=we&p=q` restores cell + state ("Will we be running the
  tests?"), the porthole opens `#/tenses`, **0 page errors**; screenshots EN + UA. Owner next:
  `npm run verify` locally → branch `feat/tm1-2-tense-machine` → commit → PR. **Deferred → TM3
  (spec §11):** the shades `uses[]` wave (big five ≥4 each) + satellites (going to · used to ·
  would · be about to) + the contractions toggle + optional showcase UA translations.

- **TM3 (2026-07-26) — ★ The Tense Machine: shades · satellites · contractions · showcase (the
  spec's final wave).** Built per `TENSE-MACHINE-SPEC.md` §4.3–§4.4 / §10–§11 (decisions
  pre-locked; the §11.3 showcase shipped — time remained). **Shades (§4.3):** `USES` in
  `data/tenseMachine.ts` — wave 1 = the big five, **24 uses**: Present Simple 5 (habit · fact ·
  state verbs · timetable→future · stories&docs) · Present Continuous 4 (now · temporary ·
  arrangement→future · always-complaint) · Past Simple 5 (finished-time · story plot · past habit ·
  past state · AmE just/yet) · Future Simple 5 (decision · promise/offer · prediction-opinion ·
  won’t-refusal · shall-offers) · Present Perfect 5 (result · experience · news/just · unfinished
  period · for/since). Each: immutable id (`<time>-<aspect>/<use>`), bilingual label/meaning/
  example, optional signals. **Content RESTRUCTURED from the authored (already-sourced) m6–m11
  topics — zero new grammar claims, zero re-research** (even always-complaint and AmE just/yet
  live in m11's exercises; be-about-to's present form sits in m11's NOW-vs-BACK-THEN compare). UI:
  a chips radiogroup in `TenseCellDetail` — the active chip swaps the annotation, the example pair
  and its signal words; a "More examples" label keeps the shade's example and the SSOT pair
  visually distinct; chip state resets on cell change. **Satellites (§4.4):** `SATELLITES` —
  exactly going-to · used-to · would-habit · be-about-to; new
  `components/tense/TenseSatellites.tsx` renders chips in a `.tm-sats` grid that MIRRORS the
  wall's `30px repeat(3, 1fr)` template, so each chip sits under its time column without entering
  the matrix geometry (past: used to · would; future: going to · be about to). A chip opens the
  card: meaning · forms + − ? · 2 EN/UA examples with TTS · the near-miss vs its matrix neighbour
  (will's ringing-phone test; used-to/would vs Past Simple with the states limit) · usage notes
  (gonna; the used-to-then-would style note); time-hue left border; aria-expanded chips + a polite
  live region; ✕ closes. **Contractions toggle (§11.4):** an ENGINE extension, not a UI patch —
  `conjugate()` gained `style: 'full' | 'short' = 'full'` (TM1+TM2 calls byte-identical). 'short'
  is a pure token post-transform driven by two tables: affirmative first-aux clitics (’ll ’m ’s
  ’re ’ve ’d; was/were have none) emitted as `glue` tokens that keep the aux TIME tint, and
  negative aux+not fusions (won’t · isn’t · hasn’t · don’t …; am+not renders “I’m not” — no n’t
  form exists); **questions never contract** (the fronted auxiliary has no host). The n’t/clitic
  sets are exactly what `lib/exercise.ts` canonical() expands, so both renders normalize to ONE
  answer everywhere except the by-design-ambiguous ’s/’d. UI: a Forms radiogroup (full · do not /
  short · don’t) + the new `f=` share param (`#/tenses/<t>/<a>?v=&s=&p=&f=`), restored on load,
  invalid → full. **Showcase (§11.3):** `SHOWCASE_UA` — 36 authored UA lines (she + write × 12
  cells × + − ?, the Morpher register; «до того моменту / на той момент» carries the reference
  point, the ⤺ rows deliberately show UA rendering Perfect without a perfect form); rendered under
  the detail trio ONLY for she+write — every other combo keeps the locked gloss-only rule (§4.2).
  **Gates:** `test-conjugator` → **72 + 72 goldens** + 12 short edge spots + a second **2,592-combo
  sweep** (default===full byte-for-byte · questions-never-contract · glue-aware reassembly ·
  negativity marker · clitic placement/kind · determinism · the canonical() equivalence contract
  with its exact divergence set). `check-data` gained the TM3 block (valid cell keys · unique
  immutable ids with the `<time>-<aspect>/` prefix rule · bilingual everywhere · 1–6 uses per
  cell, big five ≥4 · satellites exactly the four with 2 examples + near-miss each · showcase
  12 × 3 non-empty) — **tested against two deliberate regressions** (a duplicated use id; a
  renamed cell key → invalid-key + big-five-hole) per the §12 convention: both caught, clean state
  restored byte-exact. `smoke` **285 → 305**: the default TensesPage now asserts the first shade
  example, the three satellite names and a showcase UA line; a new `TensesPage:short` fixture
  presets `f=short` in the location shim and asserts the contracted trio (She’s been writing ·
  She hasn’t been writing · Has she been writing?) + the ’ll wall cell — engine output stays
  greppable via the sentence `title` attr. **Verification: FULL `npm run verify` ✓ green in the
  cloud scratch** (typecheck `tsc -b` · eslint clean · check:index · check:data — **24 tense uses
  + 4 satellites + the showcase**, counts otherwise unchanged · test ×12 · smoke **305** · vite
  build · check:bundle **327.9 kB / 420 kB — the eager shell did not grow a byte**; the TensesPage
  lazy chunk 20.7 → 46.0 kB carries all TM3 data/UI) **+ a 20-assert headless-Chromium behaviour
  pass on the real build, 0 page errors**: the share hash gains `f=full`; the Fact chip swaps
  example + annotation; the going-to card shows forms/near-miss/gonna and ✕-closes; the short
  toggle contracts the wall (She’ll write · She’s written) while aux-less Past Simple stays
  unchanged and the hash carries `f=short`; a deep link with `f=short` round-trips ("They aren’t
  going to the gym."); the showcase UA line is she+write-only; the UA pass localizes chip labels
  («Звичка / рутина») while study sentences stay English — screenshots EN + UA. Docs: CLAUDE.md
  §6/§13/§14 · CURRICULUM §F/§G · README EN+UA. Owner next: `npm run verify` locally → branch
  `feat/tm3-tense-machine-shades` → commit → PR. **Deferred (shades wave 2):** the remaining seven
  cells get 2–4 uses each — the check:data key/id machinery already accepts them; free-input verbs
  stay in the backlog (spec §11.2).

## 15. Reading OCR wave — runbook (for the next session → grow to 100)

Owner decision: run the bulk **in a fresh session via a multi-agent workflow**. Steps:

1. **Backlog:** `_examples/text_screenshots/` (~265 left); processed screenshots move to `🗂️ arhive/`.
   Skip non-narrative sheets (e.g. the idioms table `IMG_1578`) — those belong to a dictionary idioms wave.
2. **Filename gotcha:** macOS screenshot names contain a **U+202F** (narrow no-break space) before “AM”, so
   exact-path `device_stage_files` fails. First `device_bash`-`cp` the next batch to ASCII names
   (`_ascii/wN_NN.png`) AND append each original basename to a manifest; then `device_stage_files` the ASCII
   copies (≤50 per call) into the container so subagents can `Read` them.
3. **Workflow:** one `general-purpose` subagent per screenshot (model `sonnet` is fine) → `Read` the image →
   author the record → `Write` JSON to `/tmp/rout/NN.json` → return a tiny status. **Pass `args` as a DIRECT
   JSON array** (the earlier pilot failed because `args` arrived as a string and `args.items` was undefined —
   either pass an array or parse-tolerate in the script).
4. **Aggregate (inline after the run):** read `/tmp/rout/*.json` → validate (bilingual, 3 questions = 2 mcq +
   1 open, mcq `correct` in range, category ∈ taxonomy, level a1–c1, minutes ≥1, `source.author`) → dedupe by
   id + `title.en` and against existing ids → emit `src/data/reading/rN.ts` (`export const rNTexts`) → import
   in `reading/index.ts` (spread into `READING_TEXTS`).
5. **Per-text contract:** stable kebab `id`, `title{en,uk}`, `category` (one of the 18), CEFR `level`,
   `minutes`≥1, `body{en,uk}` (verbatim EN + full natural UA), `questions` (2 mcq + 1 open, bilingual),
   `source`. **Attribution:** green-title series → Mind Boost English (FB,
   `facebook.com/profile.php?id=61584114885870`); footer-visible → Learn With Sonali / English Growth Academy /
   Mind Boost English `.com`; unknown → omit `source` (reader hides the line).
6. **Verify:** `check:data` + scoped `tsc` on reading data in a cloud scratch copy; owner runs full
   `npm run verify` locally. **Write back** via SendUserFile + device_commit_files; **archive** the processed
   screenshots via the manifest. The `#/reading` counter updates automatically from `READING_TEXTS.length`.
7. **Target:** 100 texts (now 18). Keep waves ~40–80/run until reached.

## 16. Definitions wave D2 — runbook (next session → +100 cards)

> ✅ **DONE — 277 cards this session (2026-07-20), across D2–D6.** Shipped **60×4 + 37 single-word cards** (custom 20 → 297; dictionary → **447 words**) — owner confusables, FEELINGS, work/thinking, character, health, food, nature/animals, connectors, and the single-word tail; `test-definitions` 20 → 297; `definition.txt` marked `✅ [D2]`..`[D6]` (rebuilt each wave, gitignored file reverts); full `npm run verify` ✓ after each wave. D2–D5 merged to `main` (PRs #11–#14); D6 staged on `main` for `feat/d6-definitions-wave`. **The teachable single-word backlog is now cleared** — the remaining ~178 short phrases go to a **separate idioms section/tab** (owner's call). The steps below are the standing procedure for that phrase/idiom work.

Owner's commission: add **~100 more definition cards** from `_examples/definition.txt` (wave **D2**),
taking the dictionary from **170 → ~270** words. All new cards render on **both** `#/definitions` and the
Dictionary (shared corpus, SSOT). **Realism:** 100 golden cards is a *big* wave — either run it as a
multi-agent workflow (step 3, EXPLICIT opt-in) or split ~2×50 across sessions. Quality over speed.

1. **Source & candidates.** The unmarked lines of `_examples/definition.txt` are the open backlog
   (`grep -v '✅ \[' _examples/definition.txt`). A **draft candidate list** is pre-curated in
   `_examples/definition-d2-candidates.txt` (~282 single words + ~178 short phrases, already deduped
   against the shipped 170). Pick ~100 teachable entries; fix typos (`hastle`→`hassle`), normalize
   case, drop too-narrow/duplicate items, and KEEP the owner's confusables (beside/besides,
   among/between, affect/effect, desert/dessert, quite/quiet/quit, recognise/realise…) — they make
   great cards.
2. **Golden bar per card** (unchanged; `scripts/check-data.ts` enforces it): kebab `id` (unique across
   ALL word files), `word`, `kind`, **US IPA** on single words (no slashes), `pos`, CEFR `level`, UA
   `translations`, bilingual `def`, **exactly 7 examples = 4 general + 1 business + 1 office + 1 dev**,
   `forms` where irregular, `collocations`, `synonyms`/`antonyms`, resolvable `seeAlso`, `topics`,
   `source:'custom'`. Append to `src/data/words/custom.ts` — **never renumber existing ids**. Verify
   senses + IPA against Cambridge/Oxford learner dictionaries.
3. **(Optional) multi-agent workflow — EXPLICIT OPT-IN only** (like the Reading OCR wave, §15): one
   `general-purpose` subagent per batch of ~10 words → author WordEntry cards to `/tmp/dout/NN.json`
   (schema = the contract in step 2) → aggregate inline → dedupe by id + headword against ALL word
   files → emit into `custom.ts` → `check:data`. Pass `args` as a DIRECT JSON array.
4. **Mark applied words.** For every word authored, tag its source line(s) in `definition.txt` with
   **`✅ [D2]`** and extend the APPLIED header block (bump the count). `grep '✅ \[' definition.txt` then
   lists D1 + D2; unmarked lines stay open. (Convention: §10 / `DEFINITIONS.md` §6.)
5. **Verify:** full `npm run verify` in a cloud scratch copy (typecheck · eslint · check:data — expect
   **~270 words** · test · smoke · build) + a fact spot-check; screenshot `#/definitions` on a couple of
   new letters. Owner runs `npm run verify` locally.
6. **Write back:** the device mount blocks `unlink`, so `tar` can't overwrite — extract to a temp dir
   and **`cp`** over (D1 method). Files: `custom.ts`, the marked `definition.txt`, and update the
   CLAUDE.md §14 status log. **Branch `d2-definitions-wave`**; agent never pushes.
7. **Target:** ~100 this wave (170 → ~270). Continue waves through the backlog, marking `✅ [D3]`…
