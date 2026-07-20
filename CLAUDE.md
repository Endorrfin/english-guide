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
7 tagged examples per word (4 general + business/office/dev), phrasal verbs and 100–300 idioms as
first-class cards — plus trainers: **SRS flashcards (SM-2-lite), gap-fill, MCQ, irregular-verbs drill**.
Quality bar: the `../database guide` (its Glossary UX is the explicit reference). Golden = depth +
learning-UX + correctness, in that order.

## 2. Stack & key decisions (with why)

- **Vite + React 19 + TypeScript (strict).** Static content, no runtime fetch — works offline, deploys anywhere.
- **No router library** — small custom **hash router**: `#/map`, `#/m/<module>/<topic>`,
  `#/definitions/<id?>` (D1), `#/dictionary/<id?>`, `#/practice`, `#/review`, `#/irregular`. Hash
  routing + `vite base:'./'` works under any GitHub Pages sub-path with zero config.
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
  - **Words meta-split from the first big wave:** per-level word files are lazy chunks; the eager
    shell imports only a slim generated index (word + translations + level) for instant search
    (standard §4.4 applied to words; module meta-split arrives later like the database guide's S19).
  - **SRS**: port `../database guide/src/lib/srs.ts` (SM-2-lite) **verbatim** + its `srsStore`
    localStorage pattern; decks = per CEFR level · My words (`custom.ts`) · irregular verbs.
    Card ids are **stable forever** (they are progress keys) — never rename, only append.
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
             words/{a1,a2,b1,b2,c1,custom}.ts · words/index.generated.ts (slim search index)
             irregular.ts · meta.ts/meta.json (later, module meta-split)
  i18n/      lang.ts (useLang) · LangProvider.tsx · ui.ts
  lib/       hashRouter.ts · registry.tsx · search.ts (modules + words) · exercise.ts · srs.ts ·
             srsStore.ts · tts.ts (speechSynthesis wrapper) · appState.ts · utils.ts
  theme/     tokens.css · global.css · components.css
  components/ layout/ · module/ · map/ · pages/ (Dictionary, Practice, Review, Irregular) ·
             sims/ · figures/ (PascalCase.tsx)
scripts/     check-data.ts · run-tests.ts · smoke.ts · gen-words-index.ts (with the first big wave) ·
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
`tense-navigator` ★ (m6, golden of Tenses: 3×4 time × aspect matrix → meaning, forms +/−/?,
mini-timeline, EN/UA examples + TTS, near-misses, corpus-frequency badge — 5 forms = 96% of speech) ·
`sentence-morpher` (m6: one sentence morphed through all 12 cells — animated timeline + form
highlight + synced UA translation) · `tense-chooser` (m11: 3 meaning questions → the right tense +
near-miss explanations) · `conditionals-machine` (m13) · `article-tree` (m28) ·
`word-formation-lab` (m31). The old standalone `tense-timeline` sim is superseded by the parametric
**`TenseTimeline` figure** (one component, per-tense data, play/step) used across m7–m10.
Each sim: pure engine in `lib/*` where algorithmic, deterministic,
play/pause/step where animated, **`prefers-reduced-motion` fallback**, ARIA + live region. Crisp SVG
figure + table everywhere else. Trainers (`#/review`, `#/practice`, `#/irregular`) and the
**Definitions study page** (`#/definitions`, D1 — the word front door: A–Z browse + Study/Recall/
Describe/Cloze over the shared word corpus) are pages, not sims.

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

GitHub Pages via Actions (`.github/workflows/deploy.yml`): typecheck → lint → check:data → test →
smoke → build → upload `dist` → deploy. `concurrency: cancel-in-progress: false`. `vite base:'./'` +
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
**next: T4** `m11` + `sentence-morpher` + `tense-chooser` + section polish. →
**D1 (done): Definitions study page** (`#/definitions`) over the SHARED word corpus (SSOT) — A–Z +
Study/Recall/Describe/Cloze + mastery; word search now deep-links there; **20 golden custom cards**
(first custom wave). → **D2 (next): +100 definition cards** from the backlog (wave; runbook §16 —
170 → ~270 words). →
then **dictionary v2** (lazy chunks + index) + `#/review` SRS port + `#/irregular`; W2 start. →
Sections I (m1–m5) · III (m12–m16) · V (m23–m30) · VI (m31–m34) + their sims + dictionary waves
W2–W5, **with Reading OCR waves interleaved**. → polish: map · mental-models gallery · module +
reading meta-splits · bilingual QA · a11y pass.
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

> ✅ **DONE — 120 cards this session (2026-07-20), across D2 + D3.** Shipped **60 + 60 single-word cards** (custom 20 → 140; dictionary → **290 words**) — owner confusables, FEELINGS, work/thinking, character, health, food, weather/nature, connectors; `test-definitions` count 20 → 140; `definition.txt` marked `✅ [D2]` and `✅ [D3]` + two APPLIED blocks; full `npm run verify` ✓ in a cloud scratch copy after each wave; D2 merged via `feat/d2-definitions-wave` → PR #11 → `main`; D3 staged on `main`, ready for `feat/d3-definitions-wave`. Idioms/short phrases were deliberately deferred to a **separate section/tab** (owner's call), not mixed into this word corpus. Remaining backlog → **D4+**: ~160 single words + the ~178 short-phrase list. The steps below are the standing procedure for the next wave.

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
