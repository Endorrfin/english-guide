# CURRICULUM — `english-guide`

> The authoritative module-by-module / topic-by-topic map. `CLAUDE.md` §4 holds the TypeScript
> contract; this file holds the *content plan*. Keep them in sync.

## A. Modularity model (Section → Module → Topic)

- A **Module** is self-contained: a user can land on it directly, finish it, and leave. Every module
  opens with its **mental model** (one line/picture) and **key points**, and closes with **pitfalls**
  (incl. typical UA-speaker mistakes) + **exercises** (≥8; modal modules ≥15; tense modules ≥12).
- A **Topic** is independently **deep-linkable** (`#/m/<module>/<topic>`).
- **Skip / jump freely:** modules are not a forced sequence; the CEFR level filter is the main lens.

## B. Navigation & UX

Landing **CEFR map** (A1→C1 ramp) · collapsible sidebar · **global search over modules AND dictionary
words** · level filter (a1→c1) · **`#/dictionary/<id?>`** (search / filters level·POS·topic·kind /
expandable cards / TTS) · **`#/practice`** (gap-fill + MCQ hub, filter by tag & level) ·
**`#/review`** (SRS decks: per level · My words · irregular verbs) · **`#/irregular`** (table + drill) ·
mental-models gallery (later polish).

**Dive levels (S5, piloted in Section II Tenses):** module pages whose blocks carry `dive` tags show
a persisted **DiveSwitcher** — [🚂 Core | 🚶 Full | 🔬 Deep] + a ✈️ Map button (→ `m6-tense-system`).
At depth D, blocks with `dive > D` collapse into thin expandable stubs (you SEE that more depth
exists; click opens it in place). Default 🚂; the choice is remembered (localStorage). Spiral
learning = walk all six modules at 🚂 (~15 min for the whole system), then again at 🚶, then 🔬 —
content is never duplicated across modules.

## C. Data model (refined)

See `CLAUDE.md` §4 and `src/data/types.ts` for the authoritative contract. **Levels: CEFR
`a1 | a2 | b1 | b2 | c1`** (sanctioned deviation). English-guide extensions: `WordEntry` (7 tagged
examples: 4 general + business/office/dev), `Exercise` (`gap` | `mcq`) on modules, `IrregularVerb`,
and `Block.dive?: 2|3|4` (S5 depth tags — no tag = 2, the backbone).
Dictionary SSOT: `src/data/words/{a1,a2,b1,b2,c1,custom}.ts`, lazy per-level chunks + eager slim
search index (standard §4.4 applied to words).

## D. The modules

> `★` = signature (hero sim). Level ∈ a1/a2/b1/b2/c1. 34 modules, contiguous `num` 1–34.

### Section I — Foundations (`s1-foundations`, A1–A2, accent: emerald)

| # | id | Module | Level | Topics (deep-links) | Signature sim |
|---|---|---|---|---|---|
| 1 | `m1-be-pronouns` | Be, pronouns & possessives | a1 | am-is-are, subject-object-pronouns, possessives, this-that | — |
| 2 | `m2-articles-basics` | Articles: a/an/the basics | a1 | a-an, the, zero-article, first-mention | — |
| 3 | `m3-nouns-quantifiers` | Nouns, plurals & quantifiers | a1 | plurals, countable-uncountable, some-any, much-many, there-is-are | — |
| 4 | `m4-questions-negatives` | Questions & negatives | a2 | word-order, wh-questions, subject-questions, question-tags-intro | — |
| 5 | `m5-prepositions-time-place` | Prepositions of time & place | a2 | in-on-at-time, in-on-at-place, movement, common-collocations | — |

> S5 note: the three old tense stubs (`m2-present-simple-continuous`, `m5-past-simple`,
> `m6-future-basics`) moved into Section II below; the remaining Foundations stubs were renamed so
> `num` stays contiguous and equal to the id prefix. All swapped stubs were unauthored — no seeAlso
> links or progress keys existed (verified S5).

### Section II — Tenses ★ second flagship (`s6-tenses`, A1–B2, accent: cyan `--sec-tenses`; added S5)

> ONE section for the WHOLE tense system (the owner's S5 commission — tenses were previously
> scattered across Sections I–II). Cut = **hybrid-Murphy**: Simple + Continuous grouped by time zone
> (clean CEFR ramp a1→b2), the **perfect aspect attacked once as a family**, then a
> choosing/narrative capstone. Every module's blocks carry **`dive` tags** (2 🚂 core · 3 🚶 full ·
> 4 🔬 deep); level 1 ✈️ = `m6-tense-system` + the landing-map card (mini 3×4 matrix). Visual
> language everywhere: TIME = hue (`--time-past` rose · `--time-present` cyan · `--time-future`
> violet), ASPECT = glyph (● simple · 〜 continuous · ⤺ perfect · 〜⤺ perfect continuous; X =
> reference point) via the shared `TenseGlyphs`. **≥12 drills per module**; UA-speaker pitfalls
> mandatory (no perfect in UA · "I am agree" · Simple-for-Continuous · will after when/if ·
> since + Past Simple).

| # | id | Module | Level | Topics (deep-links) | Signature sim |
|---|---|---|---|---|---|
| 6 | `m6-tense-system` | **The Tense System** (GOLDEN of II) | a2 | time-x-aspect-matrix, four-aspect-meanings, timeline-notation, frequency-and-routes | `tense-navigator` ★ + `sentence-morpher` |
| 7 | `m7-present-simple-continuous` | Present: Simple & Continuous | a1 | forms, routines-vs-now, state-verbs, present-for-future-intro | `TenseTimeline` fig |
| 8 | `m8-past-simple-continuous` | Past: Simple & Continuous | a2 | forms-irregulars, did-questions-negatives, interrupted-past-when-while, used-to-would | `TenseTimeline` fig |
| 9 | `m9-future-forms` | Future: will, going to & Continuous | a2 | will-vs-going-to, arrangements-present-continuous, time-clauses, future-continuous | `TenseTimeline` fig |
| 10 | `m10-perfect-family` | The Perfect Family | b1 | present-perfect-vs-past-simple, for-since-already-yet, past-perfect-before-before, perfect-continuous, future-perfect-recognition | `TenseTimeline` fig |
| 11 | `m11-choosing-narrative` | Choosing Tenses & Narrative | b2 | contrast-map, signal-words-and-traps, narrative-tenses, historic-present-headlines, future-in-the-past-sequence | `tense-chooser` ★ |

### Section III — Core Grammar (`s2-core-grammar`, B1, accent: sky; roman II → III in S5)

| # | id | Module | Level | Topics | Signature sim |
|---|---|---|---|---|---|
| 12 | `m12-comparatives` | Comparatives & superlatives | b1 | er-more, as-as, superlatives, too-enough | — |
| 13 | `m13-conditionals-0-1-2` | Conditionals 0 / 1 / 2 | b1 | zero-first, second, unless-in-case, common-mistakes | `conditionals-machine` ★ |
| 14 | `m14-passive-intro` | Passive: the essentials | b1 | form-present-past, when-to-use, by-agent, passive-vs-active | — |
| 15 | `m15-reported-speech` | Reported speech | b1 | backshift, say-vs-tell, reported-questions, reporting-verbs | — |
| 16 | `m16-gerund-infinitive` | Gerund vs infinitive | b1 | verb-patterns, stop-remember-try, like-love-hate, purpose | — |

> S5 note: the three old tense stubs (`m9-present-perfect` + its planned `tense-timeline` ★,
> `m10-past-continuous-perfect`, `m11-future-forms`) are superseded by Section II — their material
> lives in `m10-perfect-family`, `m8-past-simple-continuous` and `m9-future-forms` respectively;
> the `tense-timeline` sim is superseded by the parametric `TenseTimeline` figure + 3 tense sims.

### Section IV — Modal Verbs ★ flagship (`s3-modal-verbs`, B1–B2, accent: amber; roman III → IV in S5)

| # | id | Module | Level | Topics | Signature sim |
|---|---|---|---|---|---|
| 17 | `m17-modal-system` | **The Modal System** (GOLDEN) | b1 | what-modals-are, the-nine-modals-map, function-x-time-grid, negatives-questions | `modal-navigator` ★ |
| 18 | `m18-ability-permission` | Ability & permission | b1 | can-could, be-able-to, may-might-permission, managed-to | — |
| 19 | `m19-obligation-necessity` | Obligation & necessity | b1 | must-vs-have-to, need-to-neednt, mustnt-vs-dont-have-to, past-obligation | — |
| 20 | `m20-advice-criticism` | Advice & criticism | b1 | should-ought-to, had-better, should-have-done, giving-advice | — |
| 21 | `m21-deduction-probability` | Deduction & probability | b2 | present-deduction, must-cant-might, past-deduction-must-have-v3, certainty-scale | `deduction-lab` ★ |
| 22 | `m22-requests-politeness` | Requests, offers & politeness | b1 | could-would-requests, shall-offers, would-rather-prefer, politeness-ladder | — |

### Section V — Advanced Grammar (`s4-advanced-grammar`, B2–C1, accent: indigo; roman IV → V in S5)

| # | id | Module | Level | Topics | Signature sim |
|---|---|---|---|---|---|
| 23 | `m23-conditionals-3-mixed` | Conditionals 3, mixed & wishes | b2 | third-conditional, mixed, wish-if-only, regrets | — |
| 24 | `m24-passive-advanced` | Advanced passive & causative | b2 | perfect-continuous-passive, causative-have-get, it-is-said, register | — |
| 25 | `m25-relative-clauses` | Relative clauses | b2 | defining, non-defining, whose-where-whom, reduced-clauses | — |
| 26 | `m26-participle-clauses` | Participle clauses | c1 | ing-clauses, ed-clauses, having-done, dangling-participles | — |
| 27 | `m27-inversion-emphasis` | Inversion, cleft & emphasis | c1 | negative-inversion, not-only, cleft-sentences, fronting | — |
| 28 | `m28-articles-advanced` | Articles: the hard cases | b2 | abstract-generic, geography-institutions, idiomatic-zero, a-vs-the-nuance | `article-tree` ★ |
| 29 | `m29-subjunctive-formal` | Subjunctive & formal English | c1 | mandative-subjunctive, were-subjunctive, formal-linkers, register-shifts | — |
| 30 | `m30-linking-discourse` | Linking & discourse markers | b2 | contrast, cause-result, addition-sequence, spoken-discourse | — |

### Section VI — Vocabulary in Action (`s5-vocabulary-in-action`, B1–B2, accent: violet; roman V → VI in S5)

| # | id | Module | Level | Topics | Signature sim |
|---|---|---|---|---|---|
| 31 | `m31-word-formation` | Word formation | b1 | negative-prefixes, noun-suffixes, adjective-suffixes, word-families | `word-formation-lab` ★ |
| 32 | `m32-phrasal-verbs-system` | The phrasal-verbs system | b1 | separable-inseparable, particle-meanings, register, learning-strategy | — |
| 33 | `m33-collocations` | Collocations | b2 | make-do-take-have, strong-collocations, business-collocations, collocation-strategy | — |
| 34 | `m34-confusables` | Confusables UA speakers mix | b1 | say-tell-speak, make-do, affect-effect-influence-impact, quite-quiet-quit-and-friends | — |

## E. The dictionary plan (system, not a module)

| Wave | Content | Target size |
|---|---|---|
| W1 (with S1) | First ~150 A1 words, golden cards, dictionary page v1 | 150 |
| W2 | Rest of A1 + A2 (Oxford 3000 slice) | ~1,000 |
| W3 | B1 slice | ~2,000 |
| W4 | B2 slice → full Oxford-3000 coverage | ~3,000 |
| W5 | Idioms 100–300 (most-used) + phrasal-verb cards beyond Oxford | +100–300 |
| Continuous | **Owner's weekly +10–30 words** → `custom.ts` (add-words protocol, CLAUDE.md); `words.txt` backlog (~580 raw) cleaned & merged across waves | growing |

Every wave: unique ids, 7 tagged examples per word card (4 general + business/office/dev), IPA,
regenerated search index, SRS decks updated, `check:data` green.

## F. Totals & asset budget

**6 sections · 34 modules · 8 sims** (`modal-navigator` ★ + `deduction-lab` built;
`tense-navigator` ★ · `sentence-morpher` · `tense-chooser` — Section II; `conditionals-machine` ★ ·
`article-tree` ★ · `word-formation-lab` ★ planned) + the parametric **`TenseTimeline` figure** ·
~138 topics · **≥330 exercises** (34 modules × ≥8; modals ≥15; tenses ≥12) · dictionary **≥3,000
words + 100–300 idioms** · **~150 irregular verbs** · 4 trainers (`#/review` SRS · `#/practice` ·
`#/irregular` · per-module drills).

## G. Build order

1. **S1 — golden (done):** `m17-modal-system` + `modal-navigator` + app shell/theme/nav/i18n +
   exercise engine (`lib/exercise.ts` + golden test) + dictionary page v1 + words wave W1 (~150 A1).
2. **S2–S4 — flagship (done):** `m18`–`m22` — modals complete (6/6) + `deduction-lab` ★; S3 detoured
   into Reading (now Section VII) at the owner's call.
3. **S5 (done, docs-only):** the TIMES re-plan — Section II Tenses locked (§D), dive levels (§B),
   time triad + glyphs, 4 interactives.
4. **T1–T4 — Tenses ★ second flagship:** **T1 (done)** skeleton (concepts/types/tokens/DiveSwitcher/
   landing map + check:data/smoke updates) + golden `m6-tense-system` + `tense-navigator` ★ →
   **T2 (done)** `m7`+`m8` + the parametric `TenseTimeline` figure (one core, per-zone wrapper keys
   `timeline-present`/`timeline-past`) → **T3 (done)** `m9`+`m10` (+ the per-zone wrapper keys
   `timeline-future`/`timeline-perfect`; the core gained a ⤺ link-back mark for the perfect zone) →
   **T4** `m11` + `sentence-morpher` + `tense-chooser` + section polish (dive tuning, cross-links,
   UA-pitfalls sweep).
5. **Dictionary v2:** per-level lazy chunks + eager search index + `#/review` SRS (port `srs.ts`) +
   `#/irregular`; words → W2 start.
6. Section I (`m1`–`m5`) + W2 complete (~1,000).
7. Section III (`m12`–`m16`) + `conditionals-machine` + W3 (~2,000).
8. Section V (`m23`–`m30`) + `article-tree` + W4 (~3,000).
9. Section VI (`m31`–`m34`) + `word-formation-lab` + W5 idioms.
10. Landing map polish · mental-models gallery · meta split for modules · bilingual QA · a11y pass.

Order inside 4–10 may be re-planned per session; Tenses (T1–T4) go first — the owner's S5 priority.
Reading OCR waves interleave throughout (§R).

## R. Section VII — Reading (added S3, owner-prioritized; roman VI → VII after the S5 Tenses insert)

A **page-based reading library** (like the Dictionary — a system, not modules), placed after Section
VI (Vocabulary in Action). Short, real-life texts to read and understand, each with a full UA
translation and comprehension questions.

- **Routes:** `#/reading` (accordion index: search across all texts · CEFR level filter · categories
  with count badges · click a title to open) and `#/reading/<id>` (reader: EN/UA body toggle · TTS ·
  source credit · 3–5 questions [MCQ auto-checked + open with model answer] · mark-as-read · prev/next).
- **Data model** (`CLAUDE.md` §4 / `src/data/types.ts`): `ReadingText` (bilingual `title`/`body`, CEFR
  `level`, `minutes`, `questions`, `source`), `ReadingQuestion` (`mcq` | `open`, bilingual), `ReadingCategory`.
  SSOT `src/data/reading/*` — one file per category + a thin aggregator; slim generated index + lazy
  chunks arrive at scale (standard §4.4), like the dictionary's W2.
- **Category taxonomy (18):** life · values · discipline · study · work · health · family · relationships ·
  friendship · upbringing · everyday · sport · leisure · rest · technology · travel · countries · other.
  The index renders only categories that have texts.
- **Locked decisions (S3):** full **EN + UA** per text · **mixed** questions (2–3 MCQ + 1–2 open) ·
  texts **transcribed from the owner's screenshot backlog**, with **per-text `source` attribution**
  (the owner manages content-rights decisions). Green-title series → **Mind Boost English** (FB community,
  `facebook.com/profile.php?id=61584114885870`); others per the visible footer (Learn With Sonali,
  English Growth Academy, Mind Boost English `.com`).

### Reading waves (content pipeline)

| Wave | Content | Result |
|---|---|---|
| R1 (S3) | Golden slice: data model + pages + first transcribed bilingual texts | shipped |
| R2 (S3) | more transcribed bilingual texts across categories | shipped |
| R3 | Backfilled `source` attribution across the set; added the grand-total counter on `#/reading` (all texts + categories) | 18 texts |
| R4 | **Grow to 100 texts** — transcribe the backlog in waves, broadening categories | **reached** — 100 live |
| R5… | Continue transcribing; meta-split (slim index + lazy chunks) once large | → 1000+ |

**Progress: 100 / 100 — target reached** (check:data confirms 100 texts in 18 categories; noted S5).
The `#/reading` page shows the live grand total + per-category counts. Next: R5 waves + the
meta-split at scale.

Every wave: unique stable ids, bilingual title/body, resolvable category + seeAlso, 3–5 questions,
`check:data` green. Dedupe multi-screenshot captures; route non-narrative reference sheets (e.g. idiom
tables) to the dictionary idioms wave, not Reading.
