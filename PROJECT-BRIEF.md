# PROJECT BRIEF — the ideal commission for this guide

> **English guide (Tier 1).** The single *upstream* instruction that, handed to a capable agent at the
> start, lets it build the whole guide with **near-zero clarification**. It complements `CLAUDE.md`:
> this BRIEF is the **input** (what the commissioner wants and how they want you to work); `CLAUDE.md`
> is the **living contract** the agent maintains from it.
>
> **How to read it (agent):** treat §5 (locked decisions) and §10 (decision rights) as authoritative — do
> **not** re-ask anything answered here. If something genuinely isn't covered, see §10 for decide-vs-ask.

---

## 0. TL;DR — the one-paragraph commission

Build a **deep, interactive, bilingual (EN/UA) English-language trainer** — grammar by CEFR level
(A1→C1), a **flagship Modal Verbs section with heavy practice**, a **Tenses section (second
flagship, S5) with a 4-level dive mechanic**, and a **searchable 1,000→3,000-word
dictionary** with translations, definitions, IPA and 7 tagged examples per word — modelled on the
`../database guide` quality bar (its Glossary UX is the explicit reference the owner loves). **Tier 1:**
Vite + React 19 + TS (strict), static, GitHub Pages. Teach with prose **plus** tables, figures,
mental models, **~8 sims** (Modal Navigator first) and **trainers**: SRS flashcards (SM-2-lite,
ported from the database guide), gap-fill, MCQ, irregular-verbs drill. Work **plan-first, 1–2 modules
per session, quality over speed**, verify every session, close each session with the fixed summary.
Decisions in §5 are locked — don't re-ask them.

## 1. Goal & why

A guide that makes the owner (and any UA-speaking engineer) **understand, internalize and remember**
English — not a phrasebook, but **system + mental models + hands-on practice**. The owner's declared
love: studying words — meaning, тлумачення, usage examples, search, navigation, expandable cards.
The dictionary and its trainer loop are therefore first-class, not an appendix. Doubles as a public
portfolio piece (GitHub Pages).

## 2. Audience & outcomes

- **Primary:** the owner — **B1+ engineer** (Ukrainian native) working in English-speaking IT contexts.
  **Secondary:** any UA speaker A1→C1; public visitors.
- **After using it, the user can:** pick the right **modal verb** for a function × time without
  hesitation; keep a **personal growing vocabulary** (weekly +10–30 words) with SRS retention;
  navigate any A1–C1 grammar topic to a clear mental model + drilled practice.
- **Success = depth + learning-UX + correctness**, in that order. Completeness and polish next. Speed last.
- **Owner-level weighting:** B1–B2 material gets polished first; A1–A2 exists for completeness and
  fast review, C1 arrives in later waves.

## 3. References & quality bar (what "golden" means)

- **Gold standard:** `../database guide` — data-driven modules, hero simulators, its **Glossary page UX**
  (search, expand-for-detail, seeAlso navigation) is the model the dictionary must exceed.
- **"Golden" for one grammar module =** clear mental model + prose that teaches + ≥1 figure + ≥1 table +
  key points + pitfalls (typical UA-speaker mistakes!) + **≥8 exercises** (modals: ≥15) + cross-links +
  verified sources, in **both languages**, typechecking and building clean.
- **"Golden" for one word =** headword, IPA, POS, level, UA translations, bilingual definition,
  **7 tagged examples (4 general + 1 business + 1 office + 1 dev)**, forms where irregular,
  collocations, seeAlso; passes `check:data`.

## 4. Scope

- **In:** grammar A1→C1 mapped to CEFR; **modal verbs flagship** (6 modules, deepest treatment);
  dictionary 1,000→3,000 words in waves; **phrasal verbs as searchable cards**; **100–300 most-used
  idioms**; ~150 irregular verbs + drill; trainers (SRS flashcards / gap-fill / MCQ); pronunciation:
  IPA on every card + TTS via Web Speech API; typical UA-speaker confusables (quite/quiet,
  desert/dessert, make/do, influence/impact…).
- **Curriculum source:** Oxford 3000 (CEFR-tagged) is the dictionary **seed**; the owner's
  `words.txt` (~580 raw personal entries, business + daily) is the **custom backlog** — clean, dedupe,
  enrich into full cards across waves. Grammar map seeds from standard CEFR syllabi (English Grammar
  in Use coverage), but **don't limit to it**. Detailed map lives in `CURRICULUM.md`.
- **Weighting:** modals deepest; then B1–B2 grammar; dictionary quality over count (a wave ships only
  when every card is golden).
- **Out (for now):** C2; listening/reading comprehension sections; recorded audio files (TTS only);
  writing feedback; mobile app.

## 5. Locked decisions — DO NOT re-ask

| Topic | Decision |
|---|---|
| **Stack** | Vite + React 19 + TypeScript (strict). No router lib (hash router). All content static. |
| **Content model** | SSOT `src/data/concepts.ts` (+ per-module `src/data/modules/*`); **dictionary in `src/data/words/*.ts` — one file per CEFR level + `custom.ts`**; pages render from data. `Section → Module → Topic → Block`. |
| **Levels** | **CEFR `a1…c1`** replaces the tech ladder in `types.ts` — the one sanctioned contract deviation. |
| **Language** | Bilingual **EN/UA**, runtime toggle. Grammar terms stay English in both (Present Perfect, modal…). Example sentences: `en` = the sentence studied, `uk` = translation. Author EN first, UA second. |
| **Examples per word** | **7 = 4 general + 3 professional (business / office / dev, one each)**. Phrasals/idioms: ≥3. |
| **Dictionary pace** | Waves: ~1,000 (A1+A2) → +B1 → +B2 ≈ 3,000. **Weekly owner additions of 10–30 words** into `custom.ts` via the add-words protocol (CLAUDE.md). `words.txt` = raw backlog. |
| **Pronunciation** | IPA string on cards + **Web Speech API** (`speechSynthesis`) buttons. No audio files. |
| **Trainers** | SRS = **SM-2-lite ported 1:1 from `../database guide` `src/lib/srs.ts`** (+ its store pattern); gap-fill + MCQ engine in `src/lib/exercise.ts` (pure, golden-tested); irregular-verbs 3-forms drill. Progress in localStorage. |
| **Theme** | Dark editorial; fonts **Fraunces** · Inter · JetBrains Mono. Accent = **CEFR ramp** (a1 emerald → a2 teal → b1 sky → b2 indigo → c1 violet) within the locked palette. |
| **Interactivity** | Curated: **~8 sims (updated S5)** — Modal Navigator ★golden + Deduction Lab (both built); Tense Navigator ★, Sentence Morpher, Tense Chooser (Section II Tenses); Conditionals Machine, Article Decision Tree, Word-Formation Lab. Plus the parametric TenseTimeline **figure** (supersedes the old standalone Tense Timeline sim). Diagram-first elsewhere. Reduced-motion fallback each. |
| **Deploy** | GitHub Pages via Actions. **Repo `english-guide` @ `endorrfin`** → `https://endorrfin.github.io/english-guide/` (owner decision; sanctioned deviation from `*-comprehensive-guide` naming — repo already exists). `vite base:'./'` + `.nojekyll`. |
| **Golden module** | **m17 The Modal System** + Modal Navigator sim, built first with the app shell. |
| **Tenses section (S5)** | **Section II — Tenses** (`s6-tenses`, roman II; later romans shift, section ids never): 6 modules, hybrid-Murphy cut — `m6-tense-system` ★golden of II · m7 Present S+C · m8 Past S+C · m9 Future forms · m10 Perfect Family · m11 Choosing & Narrative. **Dive levels:** `Block.dive?: 2\|3\|4` + persisted DiveSwitcher (✈️ map · 🚂 core · 🚶 full · 🔬 deep), L1 = m6; deeper blocks collapse to expandable stubs. **Time triad A:** past rose #f472b6 · present cyan #22d3ee · future violet #a78bfa; aspect = glyphs ● 〜 ⤺ 〜⤺ (shared TenseGlyphs). ≥12 drills/module; UA pitfalls mandatory. Build order T1–T4 (CURRICULUM §G). |
| **Tooling** | Node 22 LTS; TS strict + `noUnusedLocals/Parameters`; build must pass; ESLint clean. |

## 6. Constraints & non-negotiables

- **Correctness mandate.** English content must be **native-grade**: verify grammar claims against
  authoritative references (Cambridge/Oxford grammars, learner dictionaries); fill `sources` per module.
  Translations must be natural UA, not calques. Challenge the curriculum when verification contradicts it.
- **Content only in `src/data/*`** — never hand-edit rendered output.
- **Bilingual integrity:** every human-readable string is `Localized {en;uk}`; no missing language.
- **Dictionary integrity:** `check:data` extends to words — unique ids across all level files +
  custom, 7 tagged examples on full cards (4/1/1/1), IPA present on single words, valid level/POS,
  seeAlso targets resolve, no duplicate headwords.
- **Accessibility:** keyboard nav, focus rings, ARIA on sims and trainers, `prefers-reduced-motion`
  fallback, contrast-checked palette. TTS buttons must be keyboard-operable.
- **Scale guard:** per-level word files load as **lazy chunks**; the eager shell imports only a slim
  generated search index (word + translations + level) — the meta-split rule (standard §4.4) applied
  to the dictionary from its first big wave.
- **Sandbox gotchas:** Linux sandbox blocks `unlink` (build/verify in a scratch copy; don't git against
  the live repo); owner runs `npm install` + deploy. Exclude `_examples/` from git/deploy.

## 7. Deliverables

- **The web guide** (primary). **`README.md`** (overview + live link + commands, bilingual).
- **`CLAUDE.md`** kept current (source of truth + status log). **`CURRICULUM.md`** kept current.
- Deferred/optional: printable irregular-verbs / modals cheat-sheet (print CSS), LinkedIn pack.

## 8. Working agreement

- **Plan → approve → build.** Big steps get a plan signed off before implementation.
- **Cadence:** 1–2 modules per session (or one dictionary wave slice), **golden quality**; speed is
  not a priority.
- **Verify every session:** `npm run verify` (typecheck + lint + check:data + test + smoke + build) +
  fact spot-check.
- **The 8 working rules:** (1) specific not generic; (2) brief "why"; (3) describe change + why before
  doing it; (4) mark edits `// CHANGED (S<N>):`; (5) lint-aware; (6) reliability/security/best-practice
  first; (7) ask when unclear; (8) don't just agree — challenge wrong/partial reasoning.
- **Branch/commit:** branch `sN-short-topic`; concise imperative commit messages.
- **Session summary (every session):** (1) what was done; (2) branch + commit + short description;
  (3) challenges/questions.

## 9. Definition of Done

- **Per grammar module:** all topics authored EN+UA; mental model, key points, pitfalls
  (incl. UA-speaker mistakes), ≥8 exercises (modals ≥15), see-also, sources; planned figure/table/sim
  present; typecheck + lint + check:data + build clean.
- **Per dictionary wave:** every card golden (§3); index regenerated; SRS decks pick the wave up;
  `check:data` clean.
- **Per session:** the above for the session's scope + verification run + summary delivered +
  `CLAUDE.md` status log updated.
- **Project:** 34 modules authored; 8 sims + landing map; dictionary ≥3,000 golden cards +
  100–300 idioms; all four trainers live; global search over modules **and** words; bilingual QA;
  deployed and live.

## 10. Decision rights

- **Decide yourself:** component structure & naming; micro-UX & copy wording; which diagram type; colors
  *within* the locked palette; block/exercise ordering within a module; verification details; which
  Oxford words land in which wave slice.
- **Ask me first:** changing scope (adding/dropping modules or trainer types); changing stack, theme, or
  language policy; anything that changes the published URL or breaks the data contract; deleting/renaming
  dictionary ids (SRS progress keys!); spending money or destructive/irreversible actions; grammar facts
  references can't resolve.

## 11. Clarifying questions — answered for this guide

Who's the reader → owner (B1+ UA engineer) first, public second. · Personal/public → both; portfolio
piece. · Success metric → owner's retained vocabulary + confident modal usage; depth > breadth. ·
Boundaries → §4. · Curriculum source → Oxford 3000 + words.txt backlog + CEFR syllabi as seed, go
beyond. · Weighting → modals ≫ B1–B2 grammar > dictionary waves > A1–A2 > C1. · Depth per concept →
golden bar §3. · Fact freshness → grammar is stable; verify usage/register claims against learner
dictionaries. · Format → Tier-1 SPA. · Interactivity → 6 sims + 4 trainers. · Languages → EN/UA toggle;
examples EN with UA translations. · Theme → dark editorial, CEFR accent ramp. · A11y/perf → §6. ·
Stack/hosting/repo → §5 (repo `english-guide`, exists). · Reuse → database-guide srs.ts, glossary UX,
i18n, hashRouter patterns. · Cadence → 1–2 modules/session, quality first. · Plan-first → yes. ·
Verification → `npm run verify` every session. · Content edited → `src/data/*` only. · Decision
rights → §10. · Session report → 3-part fixed. · Hard constraints → sandbox §6; owner runs
npm install/deploy. · Quality exemplar → database guide.

## 12. How to start a session (bootstrap ritual)

1. Read `CLAUDE.md` fully, then the relevant `CURRICULUM.md` section(s), then existing
   `src/components/*` + `src/data/*` patterns.
2. Confirm the session's target modules / wave slice (from the roadmap) and restate the plan briefly.
3. Build to the golden bar; verify grammar/usage claims and fill `sources`.
4. Verify: `npm run verify` (in a scratch copy; don't touch the live `.git`).
5. Update the `CLAUDE.md` status log and deliver the 3-part session summary.
