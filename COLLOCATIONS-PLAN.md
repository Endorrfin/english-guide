# Collocations tab — implementation plan (wave **V12**)

> Status: **SHIPPED (V12, 2026-08-21)** — implemented in one wave, `npm run verify` green.
> What actually shipped, and the two places reality differed from this plan, are recorded in
> `CLAUDE.md §14 → V12`. Kept here as the design record.
> Precedent waves: V10 (collocation categories), V11 (idiom categories), M1/M2 (chunk splits).

---

## 0. Baseline — what already exists (read this first)

This is **not** a build-from-zero. `src/data/idioms.ts` already carries **117 collocations**
(`kind: 'collocation'`) from wave V10, with:

- 6 category ids in `lib/idioms.ts` → `COLLOCATION_GROUP_IDS`
  (`make-do · verb-noun · adjective-noun · adverb-adjective · business · workplace`)
- `groupCollocations()` (golden-tested in `scripts/test-idioms.ts`)
- a chip category bar + per-category `Learn` sections in `IdiomsPage.tsx`, shown only when the
  `collocation` kind chip is active
- `check-data.ts` contract: every collocation needs a known `group`; no other kind may have one
- bilingual `note` ("Common mistake", e.g. *do a decision → make a decision*)
- mastery keys `idiom:<id>`, already feeding the `#/review` SRS via the `idioms` deck

Current corpus: **357 = 182 idiom · 58 phrasal · 117 collocation.**

So V12 = **promote an existing kind into its own tab + its own lazy chunk**, then grow it.

---

## 1. Decisions (locked)

| # | Decision | Choice |
|---|---|---|
| D1 | Data split | **Own file, same type.** New `src/data/collocations.ts` exporting `COLLOCATIONS: readonly IdiomEntry[]`. Ids unchanged → mastery + SRS progress survives. Own vite chunk. |
| D2 | Verb + particle group (`log in`, `wake up`, `turn on`…) | **Idioms tab, `kind:'phrasal'`.** They are phrasal verbs; 4 of your 15 are already there. |
| D3 | Trainer modes | **Learn · Guess · Match + a new "Which word?" drill** (blank the first word of the phrase, pick from same-group distractors). |
| D4 | New categories | **+ `soft-skills` (Soft skills & interview)** and **+ `everyday` (Everyday & routine)** → 8 groups total. |

Two calls I made myself (challenge them if you disagree):

| # | Decision | Why |
|---|---|---|
| D5 | `adverb-adjective` **label** widens to *"Adverb + Adjective / Verb"* (`uk`: *Прислівник + прикметник / дієслово*). The **id stays `adverb-adjective`**. | You declined a separate *Adverb + Verb* group, but `totally agree` / `highly recommend` are adverb + **verb**. Filing them under a label that says "Adjective" is teaching something false. Widening the label is honest and costs one string; the id is a stored filter value, so it must not change. |
| D6 | Mastery key prefix **stays `idiom:<id>`** (not `coll:`). SRS deck stays `idioms`, only its **label** becomes *"Idioms & collocations"* (`ui.deckIdioms`). | Changing either would silently reset your existing progress on 117 cards. `DECK_PREFIX` values are permanent per `PROJECT-BRIEF §10`. |

---

## 2. Your list, deduped against the corpus

**85 items → 27 already exist → 58 new.**

Split of the 58 new: **47 collocations + 11 phrasal verbs** (per D2).

Already in the corpus (27) — no action:
`make a mistake · make a decision · make a phone call · make money · make an effort · do homework ·
do business · do a favor · take notes · pay attention · save time · catch a cold · tell the truth ·
give advice · heavy rain · strong wind · fast food · hard work · completely different ·
deeply concerned · seriously injured · fully aware · widely available · carry on · come back ·
find out · set up`

### 2.1 Near-duplicates — need a call (default = my recommendation)

| Your item | Corpus already has | Recommendation |
|---|---|---|
| `meet deadlines` | `meet a deadline` (business) | **Skip as a card.** Add `synonyms: ['meet deadlines']` to the existing card. |
| `highly recommend` | `highly recommended` (adverb-adjective) | **Add** — different part of speech (verb vs adjective), that's the teaching point. Cross-link via `synonyms`. |
| `have a break` | `take a break` | **Add** — the have/take contrast is exactly what a collocation trainer is for. Add a `note`. |
| `do the washing up` | `do the dishes` | **Add** — BrE vs AmE. `note` carries the register difference. |
| `take a rest` | `take a break` | **Add**, `synonyms` cross-link. |
| `save money` | `waste money` | **Add** — antonym pair, not a duplicate. |
| `utterly stupid` | — | **Add but soften the examples.** House style is work/dev-flavoured; `utterly stupid` aimed at a person reads badly. Use it about a *situation* (`an utterly stupid mistake in the config`). |
| `deep water` | — | **Add as `in deep water`, `kind:'idiom'`** (Idioms tab, category `problems-risk`) — not a collocation. As a bare adjective+noun it is literal and teaches nothing. |

Net: **~45 new collocation cards + 11 new phrasal cards**, exact number settled at authoring.

### 2.2 Group assignment rule (deterministic — goes in `lib/collocations.ts`)

The chip bar now mixes two axes: **grammatical pattern** (`verb-noun`, `adjective-noun`,
`adverb-adjective`, `make-do`) and **semantic domain** (`business`, `workplace`, `soft-skills`,
`everyday`). That mix is pre-existing (V10 shipped `business`/`workplace`), but it means one phrase
can plausibly land in two groups, so assignment must be a rule, not a vibe:

1. `make` / `do` head → **`make-do`**
2. else CV / interview / soft-skill register → **`soft-skills`**
3. else meetings, contracts, deals, funding, targets → **`business`**
4. else tech, office process, engineering → **`workplace`**
5. else home, leisure, daily routine, health → **`everyday`**
6. else fall through to the grammatical pattern → **`verb-noun` / `adjective-noun` / `adverb-adjective`**

Target distribution after the wave (**117 → ~162**):

| group | now | after |
|---|---:|---:|
| `make-do` | 20 | 20 |
| `verb-noun` | 20 | ~28 |
| `adjective-noun` | 20 | ~32 |
| `adverb-adjective` | 20 | ~29 |
| `business` | 20 | 20 |
| `workplace` | 17 | 17 |
| `soft-skills` *(new)* | — | ~4 |
| `everyday` *(new)* | — | ~12 |

> **Future refactor, not this wave:** if the mixed axis starts to hurt, split into two fields —
> `group` (grammar, required) + `domain` (semantic, optional) — and render two chip rows.
> Noted here so the decision is deliberate rather than inherited.

---

## 3. ⚠️ Prerequisite A0 — the split saves nothing without this

`components/layout/VocabTabs.tsx` statically imports **`WORDS`, `IDIOMS`, `IRREGULAR`** just to
render the count badges. Every Words page renders `WordsLayout → VocabTabs`, so **opening
`#/dictionary` already downloads the whole idioms corpus**, and adding
`import { COLLOCATIONS }` would make the new chunk load on every Words tab — cancelling the entire
benefit of D1.

`check:bundle` will **not** catch this: it guards the *eager* graph only, and all of this is behind
`React.lazy`. It is invisible to the gate and invisible in review.

**Fix (do this first):** extend `scripts/gen-data-index.ts` to emit counts into a slim generated
module, e.g. `src/data/phrases/index.generated.ts`:

```ts
export const PHRASE_COUNTS = { idioms: 182, phrasals: 58, collocations: 162 } as const;
```

`VocabTabs` imports **only** that (plus the existing `WORD_INDEX`/`WORD_COUNTS` for the word tabs).
`check:index` then fails on staleness, exactly as it does for words today. Cost: ~30 lines in the
generator. Benefit: three corpora leave the Words-hub chunk graph.

---

## 4. Phase A — the tab (structure, zero new content)

Ships green on its own; the tab shows the existing 117.

| # | File | Change |
|---|---|---|
| A1 | `src/data/collocations.ts` | **NEW.** Move the 117 `kind:'collocation'` entries **verbatim** (ids untouched). Export `COLLOCATIONS` + `getCollocation(id)`. |
| A2 | `src/data/idioms.ts` | Remove those 117 → 240 entries (182 idiom · 58 phrasal). Header comment updated. |
| A3 | `src/lib/collocations.ts` | **NEW.** Move `COLLOCATION_GROUP_IDS`, `isCollocationGroup`, `groupCollocations` out of `lib/idioms.ts`; append `soft-skills`, `everyday`; add the group-assignment rule as a doc comment. |
| A4 | `src/lib/idioms.ts` | Drop the moved helpers. `IdiomKind` union keeps `'collocation'` (the shared type is unchanged); the Idioms page's kind chips drop to `idiom · phrasal`. |
| A5 | `src/components/words/PhraseCard.tsx` + `PhraseTrainer.tsx` | **NEW.** Extract `SpeakButton`, `MasteryBar`, `ExampleRow`, `IdiomCard`→`PhraseCard`, `GuessView`, `MatchView` from `IdiomsPage.tsx`. **Biggest regression risk in the wave** — pure move, no behaviour change, verified by `smoke` string assertions on both pages. |
| A6 | `src/components/pages/CollocationsPage.tsx` | **NEW.** `WordsLayout active="collocations"` + search + group chip bar + level filter + the 4 modes. |
| A7 | `src/components/pages/IdiomsPage.tsx` | Consume the shared components; delete the collocation chip, the `coll-catbar` block and the `byGroup` prop. |
| A8 | `src/lib/hashRouter.ts` | `+ { name:'collocations'; id?: string }`, `case 'collocations'`, `hrefCollocations()`, add to `isWordsRoute()`. |
| A9 | `src/App.tsx` | Lazy import + `{route.name === 'collocations' && <CollocationsPage />}`. |
| A10 | `src/components/layout/VocabTabs.tsx` | 5th tab: `{ id:'collocations', label: ui.collocationsLabel, icon:'🧩', href: hrefCollocations(), count: PHRASE_COUNTS.collocations }` (count from A0's generated module, **not** from the corpus). |
| A11 | `src/i18n/ui.ts` | `collocationsLede`, `collGroupSoftSkills`, `collGroupEveryday`, widen `collGroupAdvAdj` (D5), relabel `deckIdioms` (D6), + the drill strings from Phase C. `collocationsLabel` + `idiomTypeCollocation` already exist. |
| A12 | `src/theme/components.css` | 5 tabs now wrap on narrow screens — check the `@media` block at `.vocab-tab`. Reuse `.coll-catbar` as-is. |
| A13 | `vite.config.ts` | `if (id.includes('/src/data/collocations')) return 'collocations';` **before** the `words`/`idioms` branches. |
| A14 | `scripts/check-bundle.ts` | `CORPUS_CHUNKS` `+ 'collocations'`; add a `COLLOCATIONS` sentence probe. |
| A15 | `scripts/check-data.ts` | Validate the **union** `[...IDIOMS, ...COLLOCATIONS]` for shared rules — id **and** normalized-phrase uniqueness must hold **across both files**, or the split lets a duplicate in. Keep the group/category contracts per source. |
| A16 | `scripts/test-collocations.ts` | **NEW.** Move the collocation goldens out of `test-idioms.ts`; auto-discovered by `run-tests.ts`. Assert: every group populated, ids kebab, no phrase collides with `IDIOMS`. |
| A17 | `scripts/smoke.ts` | `+ CollocationsPage` (EN+UA, assert `make a decision` / `heavy rain` render) and `+ "#/collocations"` in the Layer-D hash list. |
| A18 | `src/lib/reviewDecks.ts` | `...COLLOCATIONS.map(idiomCard)` alongside `IDIOMS` — deck id and `DECK_PREFIX` unchanged (D6). `cardIdForMasteryKey` needs `IDIOM_IDS` to cover both sets. |

---

## 5. Phase B — the data (+45 collocations, +11 phrasal verbs)

- **B1** Author the 45 as `IdiomEntry`: bilingual `meaning`, `uaEquivalent`, 2 examples EN/UA,
  controlled `themes`, CEFR `level`, `register`, `group` per §2.2, `note` wherever a common wrong
  version exists (`make a homework` ✗, `say a lie` ✗, `high price` vs `expensive price` ✗).
- **B2** Author the 11 phrasal verbs into `data/idioms.ts` (`kind:'phrasal'`, no `group`/`category`):
  `log in · log out · wake up · get up · turn on · turn off · look after · look for · give up ·
  go away · take off`. `take off` gets both senses (plane / clothes) in `meaning` + one example each.
- **B3** Apply the §2.1 near-duplicate calls (`synonyms` cross-links on `meet a deadline`,
  `take a break`, `do the dishes`, `highly recommended`).
- **B4** Move `deep water` → `in deep water` as `kind:'idiom'`, category `problems-risk`.
- **B5** Regenerate `PHRASE_COUNTS` (A0), update `README.md` + the `CLAUDE.md §14` ledger entry.

**Authoring method** (proven in V10/V11): draft in batches → run a local validator mirroring
`check-data` (kebab, unique id+phrase vs the **union** corpus, bilingual non-empty, straight-quote
scan) → serialize to house-styled TS. Typographic apostrophes (`’`) are mandatory — straight `'`
collides with the single-quoted TS literals.

---

## 6. Phase C — the "Which word?" drill

Pure engine in `src/lib/collocations.ts`, golden-tested, no React:

```ts
export type PickRound = { masked: string; answer: string; options: string[]; entryId: string };

export function buildPickRound(
  entry: IdiomEntry,
  pool: readonly IdiomEntry[],   // same `group` — that's what makes the distractors plausible
  rand: () => number,
  optionCount = 4,
): PickRound | null;
```

- Blanks the **first word** of the phrase: `make a decision` → `___ a decision`, answer `make`.
- Distractors = first words of other entries **in the same group**, deduped, excluding any word that
  would form a real phrase in the corpus (`take a decision` is valid BrE — never offer a distractor
  that is itself correct).
- Returns `null` for single-word or ungroupable entries so the caller can skip cleanly.
- Uniform across all 8 groups: on `make-do` it *is* the make/do drill; on `adjective-noun` it becomes
  `___ rain` → heavy / strong / high / deep. One engine, eight useful drills.
- UI: prompt + the UA translation as the clue, 4 buttons, instant feedback, wrong answer reveals the
  `note`. Correct on the first try → `setMastery(mkey(id), 'known')`, same store as the other modes.
- Fewer than 2 candidates after filtering → the existing "pick filters that leave at least two"
  empty state.

Tests (`test-collocations.ts`): injected `rand` pins the order; assert the answer is always in
`options`, options are unique, no distractor forms a corpus phrase, `null` on edge cases.

---

## 7. Verification gate

`npm run verify` = typecheck → lint → check:index → check:data → test → smoke → build → check:bundle.

Wave-specific expectations:

- `check:data`: **240 idioms** (182 idiom · 58 phrasal) + **~162 collocations**, union-unique.
- `smoke`: 267 → ~271 checks (CollocationsPage EN+UA, `#/collocations`).
- `build`: idioms chunk ~268 kB → **~185 kB**; new `collocations` chunk **~90 kB**;
  eager payload unchanged at ~327 kB / 420 kB budget.
- **Verify A0 actually worked:** after build, confirm the `#/dictionary` route chunk no longer
  statically imports the idioms/collocations chunks. Per `CLAUDE.md §12` — *a gate that has never
  failed has not been tested* — assert it against a deliberate regression (re-add
  `import { IDIOMS }` to `VocabTabs` and confirm the check goes red).
- Run in a **cloud scratch copy** with a fresh `npm install` (your `node_modules` are darwin-arm64),
  then write back byte-exact and confirm with `md5sum` **on the device**.

---

## 8. Risks

| Risk | Mitigation |
|---|---|
| A5 component extraction silently changes Idioms behaviour | Pure move, no logic edits; `smoke` asserts `spot on` / `break the ice` still render on `IdiomsPage`. |
| A0 skipped → chunk split is cosmetic | Do A0 **before** A13. Explicit build-output check in §7. |
| A15 forgotten → duplicate phrase across the two files | Union check is the single most important gate change in the wave. |
| Mastery/SRS progress reset | D6: `idiom:` prefix and `DECK_PREFIX.idioms` are frozen. Label-only change. |
| Category bar mixes grammar and semantics | §2.2 assignment rule, documented in `lib/collocations.ts`; two-field refactor noted as future work. |
| `_examples/` source list | Keep the raw list gitignored, like `_examples/collocations.txt` (V10) and `Idioms.txt` (V11). |

---

## 9. Open questions for you

1. **Ship as one wave or two?** Phase A alone is green and shippable (tab + split, 117 entries).
   Suggest `feat/v12-collocations-tab` → then `feat/v13-collocations-data`. Or one PR?
2. **Tab order** in the Words bar: `Dictionary · Definitions · Idioms · Collocations · Irregular`
   (grouped with Idioms — my preference) or Collocations last?
3. **Retro-tag `soft-skills`?** With only ~4 new cards it's a thin chip. I could move ~4 existing
   business entries (`give a presentation`, `give feedback`, `raise concerns`, `address an issue`)
   into it. Cheap (`group` is not an id) but it moves cards under you.
4. **Icon** for the tab: `🧩` (my pick), `🔗`, or `🧱`?

---

## 10. Branch + commit

```
branch:  feat/v12-collocations-tab
commit:  feat(collocations): promote collocations to their own Words tab (#/collocations)

Split the 117 collocation entries out of data/idioms.ts into data/collocations.ts
(ids unchanged — mastery and SRS progress preserved), give them a dedicated route,
page and lazy chunk, and add the "Which word?" drill. VocabTabs counts now come from
a generated slim index so no Words tab pulls a corpus chunk.
```

Agent sessions never push — you deploy (`CLAUDE.md §11`).
