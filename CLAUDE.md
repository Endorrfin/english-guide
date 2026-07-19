# CLAUDE.md — `english-guide`

> **Working guide and source of truth for every session in this repo. Read this file fully before
> starting any session.** Update the *Status / progress log* (§14) at the end of each session.
> See `../_standard/GUIDE-AUTHORING-STANDARD.md` for the cross-guide rules this guide conforms to
> (Tier 1), and `PROJECT-BRIEF.md` §5 for the locked decisions — do not re-ask them.

## 1. Mission

A deep, interactive, bilingual (EN/UA) **English-language trainer** for a UA-speaking engineer (owner:
B1+): grammar A1→C1 organized by **CEFR level**, a **flagship Modal Verbs section with heavy drilled
practice**, and a **searchable dictionary growing 1,000→3,000+ words** — translations, тлумачення, IPA,
7 tagged examples per word (4 general + business/office/dev), phrasal verbs and 100–300 idioms as
first-class cards — plus trainers: **SRS flashcards (SM-2-lite), gap-fill, MCQ, irregular-verbs drill**.
Quality bar: the `../database guide` (its Glossary UX is the explicit reference). Golden = depth +
learning-UX + correctness, in that order.

## 2. Stack & key decisions (with why)

- **Vite + React 19 + TypeScript (strict).** Static content, no runtime fetch — works offline, deploys anywhere.
- **No router library** — small custom **hash router**: `#/map`, `#/m/<module>/<topic>`,
  `#/dictionary/<id?>`, `#/practice`, `#/review`, `#/irregular`. Hash routing + `vite base:'./'` works
  under any GitHub Pages sub-path with zero config.
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
compare`) as in the standard §4.2; contract in `src/data/types.ts`. Every module opens with a
**mental model** + **key points** and closes with **pitfalls** (incl. typical UA-speaker mistakes) +
**exercises** (≥8; modal modules ≥15). English-guide extensions in the same file: `WordEntry`,
`WordExample` (tag `general|business|office|dev`), `Exercise` (`gap`|`mcq`, stable `id` = progress
key), `IrregularVerb`, `Pos`, `EntryKind`.

**Language nuance for a language guide:** example sentences are the study object — `text.en` is the
sentence, `text.uk` its natural translation. Grammar terms stay English in both languages (Present
Perfect, modal, gerund…). UA explanations are written for clarity at the owner's level (B1+), never
calqued.

## 5. Curriculum

5 sections · 34 modules: **I Foundations** (A1–A2, m1–m8) · **II Core Grammar** (B1, m9–m16) ·
**III Modal Verbs ★flagship** (m17–m22, golden `m17-modal-system`) · **IV Advanced Grammar** (B2–C1,
m23–m30) · **V Vocabulary in Action** (m31–m34). Dictionary waves W1–W5 (150 → 1,000 → 2,000 → 3,000 →
+idioms) + continuous weekly owner additions. Full map: `CURRICULUM.md` (authoritative for topics).

## 6. Signature interactives + diagram-first baseline

**6 sims:** `modal-navigator` ★golden (pick function × time → the right modal, examples, near-misses) ·
`conditionals-machine` (m13) · `tense-timeline` (m9) · `deduction-lab` (m21) · `article-tree` (m28) ·
`word-formation-lab` (m31). Each: pure engine in `lib/*` where algorithmic, deterministic,
play/pause/step where animated, **`prefers-reduced-motion` fallback**, ARIA + live region. Crisp SVG
figure + table everywhere else. Trainers (`#/review`, `#/practice`, `#/irregular`) are pages, not sims.

## 7. Theme / brand

Dark editorial; palette in `theme/tokens.css`. Fonts **Fraunces** (display) · **Inter** · **JetBrains
Mono**. Accent = **CEFR ramp**: a1 emerald → a2 teal → b1 sky → b2 indigo → c1 violet (section accents
+ level badges), contrast-checked on the dark ground.

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
1000+ texts) from the owner's screenshot backlog. → **next: finish Modal Verbs** — `m21` (+`deduction-lab`
★sim) + `m22`. → dictionary v2 (lazy chunks + index) + `#/review` SRS port + `#/irregular`; W2 start. →
Section I (m1–m8) · II (m9–m16) · IV (m23–m30) · V (m31–m34) + their sims + dictionary waves W2–W5,
**with Reading OCR waves interleaved**. → polish: map · mental-models gallery · module + reading meta-splits ·
bilingual QA · a11y pass.
(Re-plan per session allowed; modals stay first among grammar. Full detail: CURRICULUM.md §G / §R.)

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
- **S3 · Reading waves R2–R3 (pivot to original content).** R2 first added more bilingual texts across
  categories. In R3 the content approach **pivoted**: the screenshot backlog is third-party
  FB-community material (Mind Boost English et al.), and mass-transcribing it verbatim (+ translating,
  a derivative work) for the **public** deploy is a copyright risk — attribution is not a licence. Owner
  decision: **use ORIGINAL, owner-authored texts**; keep the screenshots only as **private inspiration**
  in `_examples/` (gitignored). All earlier verbatim R1/R2 texts were **replaced** with original ones.
  Reading now ships **16 original bilingual texts** (2 each × study·values·family·everyday·work·discipline·
  life·upbringing), each EN+UA with 2 MCQ + 1 open. Reader tweaked to hide the source line when a text has
  no external source (original content). `ReadingTextPage` smoke id updated to `learning-a-little-every-day`.
  **Verify (data+logic):** `check:data` ✓ (16 reading texts, all bilingual, links resolve) + scoped strict
  `tsc` on reading data ✓. Owner runs full `npm run verify` locally. Owner next: `npm run verify` → commit
  on `s3-reading-original-content` → push. Backlog screenshots (`_examples/text_screenshots/` incl. `🗂️ arhive/`
  and the `_ascii/` scratch dir) stay private/inspiration; delete `_ascii/` anytime. Non-narrative sheets
  (e.g. the idioms table) still belong to a future dictionary idioms wave, not Reading. Roadmap: keep
  authoring original Reading texts; then finish Modal Verbs (`m21` + `deduction-lab`, `m22`).
