# CURRICULUM — `english-guide`

> The authoritative module-by-module / topic-by-topic map. `CLAUDE.md` §4 holds the TypeScript
> contract; this file holds the *content plan*. Keep them in sync.

## A. Modularity model (Section → Module → Topic)

- A **Module** is self-contained: a user can land on it directly, finish it, and leave. Every module
  opens with its **mental model** (one line/picture) and **key points**, and closes with **pitfalls**
  (incl. typical UA-speaker mistakes) + **exercises** (≥8; modal modules ≥15).
- A **Topic** is independently **deep-linkable** (`#/m/<module>/<topic>`).
- **Skip / jump freely:** modules are not a forced sequence; the CEFR level filter is the main lens.

## B. Navigation & UX

Landing **CEFR map** (A1→C1 ramp) · collapsible sidebar · **global search over modules AND dictionary
words** · level filter (a1→c1) · **`#/dictionary/<id?>`** (search / filters level·POS·topic·kind /
expandable cards / TTS) · **`#/practice`** (gap-fill + MCQ hub, filter by tag & level) ·
**`#/review`** (SRS decks: per level · My words · irregular verbs) · **`#/irregular`** (table + drill) ·
mental-models gallery (later polish).

## C. Data model (refined)

See `CLAUDE.md` §4 and `src/data/types.ts` for the authoritative contract. **Levels: CEFR
`a1 | a2 | b1 | b2 | c1`** (sanctioned deviation). English-guide extensions: `WordEntry` (7 tagged
examples: 4 general + business/office/dev), `Exercise` (`gap` | `mcq`) on modules, `IrregularVerb`.
Dictionary SSOT: `src/data/words/{a1,a2,b1,b2,c1,custom}.ts`, lazy per-level chunks + eager slim
search index (standard §4.4 applied to words).

## D. The modules

> `★` = signature (hero sim). Level ∈ a1/a2/b1/b2/c1. 34 modules, contiguous `num` 1–34.

### Section I — Foundations (`s1-foundations`, A1–A2, accent: emerald)

| # | id | Module | Level | Topics (deep-links) | Signature sim |
|---|---|---|---|---|---|
| 1 | `m1-be-pronouns` | Be, pronouns & possessives | a1 | am-is-are, subject-object-pronouns, possessives, this-that | — |
| 2 | `m2-present-simple-continuous` | Present Simple vs Continuous | a1 | forms, routines-vs-now, state-verbs, frequency-adverbs | — |
| 3 | `m3-articles-basics` | Articles: a/an/the basics | a1 | a-an, the, zero-article, first-mention | — |
| 4 | `m4-nouns-quantifiers` | Nouns, plurals & quantifiers | a1 | plurals, countable-uncountable, some-any, much-many, there-is-are | — |
| 5 | `m5-past-simple` | Past Simple | a1 | regular-ed, irregular-intro, did-questions-negatives, time-markers | — |
| 6 | `m6-future-basics` | Future basics: will / going to | a2 | will, going-to, present-continuous-arrangements, choosing | — |
| 7 | `m7-questions-negatives` | Questions & negatives | a2 | word-order, wh-questions, subject-questions, question-tags-intro | — |
| 8 | `m8-prepositions-time-place` | Prepositions of time & place | a2 | in-on-at-time, in-on-at-place, movement, common-collocations | — |

### Section II — Core Grammar (`s2-core-grammar`, B1, accent: sky)

| # | id | Module | Level | Topics | Signature sim |
|---|---|---|---|---|---|
| 9 | `m9-present-perfect` | Present Perfect vs Past Simple | b1 | form-use, ever-never-just-already-yet, for-since, perfect-vs-past | `tense-timeline` ★ |
| 10 | `m10-past-continuous-perfect` | Past Continuous & Past Perfect | b1 | interrupted-past, background-scenes, sequencing, when-while | — |
| 11 | `m11-future-forms` | Future forms in depth | b1 | will-vs-going-to, present-forms-for-future, time-clauses, shall | — |
| 12 | `m12-comparatives` | Comparatives & superlatives | b1 | er-more, as-as, superlatives, too-enough | — |
| 13 | `m13-conditionals-0-1-2` | Conditionals 0 / 1 / 2 | b1 | zero-first, second, unless-in-case, common-mistakes | `conditionals-machine` ★ |
| 14 | `m14-passive-intro` | Passive: the essentials | b1 | form-present-past, when-to-use, by-agent, passive-vs-active | — |
| 15 | `m15-reported-speech` | Reported speech | b1 | backshift, say-vs-tell, reported-questions, reporting-verbs | — |
| 16 | `m16-gerund-infinitive` | Gerund vs infinitive | b1 | verb-patterns, stop-remember-try, like-love-hate, purpose | — |

### Section III — Modal Verbs ★ flagship (`s3-modal-verbs`, B1–B2, accent: amber)

| # | id | Module | Level | Topics | Signature sim |
|---|---|---|---|---|---|
| 17 | `m17-modal-system` | **The Modal System** (GOLDEN) | b1 | what-modals-are, the-nine-modals-map, function-x-time-grid, negatives-questions | `modal-navigator` ★ |
| 18 | `m18-ability-permission` | Ability & permission | b1 | can-could, be-able-to, may-might-permission, managed-to | — |
| 19 | `m19-obligation-necessity` | Obligation & necessity | b1 | must-vs-have-to, need-to-neednt, mustnt-vs-dont-have-to, past-obligation | — |
| 20 | `m20-advice-criticism` | Advice & criticism | b1 | should-ought-to, had-better, should-have-done, giving-advice | — |
| 21 | `m21-deduction-probability` | Deduction & probability | b2 | present-deduction, must-cant-might, past-deduction-must-have-v3, certainty-scale | `deduction-lab` ★ |
| 22 | `m22-requests-politeness` | Requests, offers & politeness | b1 | could-would-requests, shall-offers, would-rather-prefer, politeness-ladder | — |

### Section IV — Advanced Grammar (`s4-advanced-grammar`, B2–C1, accent: indigo)

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

### Section V — Vocabulary in Action (`s5-vocabulary-in-action`, B1–B2, accent: violet)

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

**5 sections · 34 modules · 6 signature sims** (`modal-navigator`, `conditionals-machine`,
`tense-timeline`, `deduction-lab`, `article-tree`, `word-formation-lab`) · ~136 topics ·
**≥300 exercises** (34 modules × ≥8; modals ≥15 each) · dictionary **≥3,000 words + 100–300 idioms** ·
**~150 irregular verbs** · 4 trainers (`#/review` SRS · `#/practice` · `#/irregular` · per-module drills).

## G. Build order

1. **S1 — golden:** `m17-modal-system` + `modal-navigator` + app shell/theme/nav/i18n + exercise
   engine (`lib/exercise.ts` + golden test) + dictionary page v1 + words wave W1 (~150 A1 cards).
2. **S2–S3 — flagship:** `m18`–`m22` (modals complete) + cross-section modal drill set.
3. **S4:** dictionary system v2 — per-level lazy chunks + eager search index + `#/review` SRS
   (port `srs.ts`) + `#/irregular`; words → W2 start.
4. **S5–S6:** Section I (`m1`–`m8`) + W2 complete (~1,000).
5. **S7–S8:** Section II (`m9`–`m16`) + `conditionals-machine`, `tense-timeline` + W3 (~2,000).
6. **S9–S10:** Section IV (`m23`–`m30`) + `article-tree` + W4 (~3,000).
7. **S11:** Section V (`m31`–`m34`) + `word-formation-lab` + W5 idioms.
8. **S12:** landing map polish · mental-models gallery · meta split for modules · bilingual QA · a11y pass.

Order inside 2–8 may be re-planned per session; modals stay first — the owner's priority and the
exercise-engine proving ground.

## R. Section VI — Reading (added S3, owner-prioritized)

A **page-based reading library** (like the Dictionary — a system, not modules), placed after Section V
(Vocabulary in Action). Short, real-life texts to read and understand, each with a full UA translation
and comprehension questions.

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
- **Locked decisions (S3):** full **EN + UA** translation per text · **mixed** questions (2–3 MCQ + 1–2 open) ·
  texts stored **verbatim with per-text attribution** (owner confirms rights before public deploy).

### Reading waves (content pipeline)

| Wave | Content | Target |
|---|---|---|
| R1 (with S3) | Golden slice: data model + pages + 6 golden bilingual texts (study/values/family) | 6 |
| R2… | OCR the screenshot backlog in batches (~30–40/session): transcribe → dedupe → categorize → level → translate → 3–5 questions → attribute | → ~250 |
| R-cont | Continuous growth toward the owner's 1000+ goal; meta-split (slim index + lazy chunks) once large | 1000+ |

Every wave: unique stable ids, bilingual title/body, resolvable category + seeAlso, 3–5 questions,
`check:data` green. Dedupe multi-screenshot captures; route non-narrative reference sheets (e.g. idiom
tables) to the dictionary idioms wave, not Reading.
