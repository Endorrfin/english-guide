# Tense Machine — Requirements / ТЗ (draft)

> Working name: **The Tense Machine** — a standalone, full-page, live-emulation home for the WHOLE
> tense system. It is a **new sibling** page over the existing Section II SSOT (`lib/tenses.ts` +
> `data/tenseNavigator.ts`), **not a version bump** of the three built sims: `tense-navigator` ★,
> `sentence-morpher` and `tense-chooser` ★ all stay where they teach (m6 / m11) — the Machine
> composes the same SSOT into one immersive destination (the Transport Compass §2b precedent:
> "two lenses, same SSOT", no duplicated purpose).
>
> **Status:** requirements draft — review, edit (esp. §11), hand to an implementation session
> (TM1). No code yet. Decisions in §5 were locked in the planning conversation of 2026-07-26.

---

## 0. Огляд (UA, коротко)

Section II Tenses уже має три сими, але всі вони живуть *усередині* сторінок модулів і кожен
показує один зріз: Navigator — довідник клітинки, Morpher — одне захардкоджене речення,
Chooser — decide-флоу. Немає єдиної точки входу типу `#/decide` з інших guides. **Tense Machine**
робить три речі: (1) **Wall** — усі 12 клітинок матриці 3×4 живі одночасно; (2) **live emulation** —
новий чистий движок `lib/conjugator.ts`: обираєш дієслово / підмет / полярність (+ − ?) — усі
12 клітинок перебудовуються наживо, подію можна тягнути віссю часу, Tour робить автопрохід;
(3) **відтінки** — структуровані `uses[]` на клітинку (habit / fact / schedule…) чипами, з
прикладами і сигнальними словами. Плюс вкладка **Decide** — вбудований наявний Tense Chooser.
Ключова межа — **без overengineering**: ядро = 12 клітинок, ≤12 кураторських дієслів, сателіти
(going to, used to, would…) — чипами у TM3, passive — відкладено. Відкриті дрібні рішення — §11.

---

## 1. Goal & non-goals

**Goal.** One shareable page where a learner can literally *touch* every tense: see the whole
3 × 4 matrix alive at once, rebuild every cell's sentence with their own verb/subject/polarity,
drag the event along the time axis and watch the machinery re-arrange, open any cell for its
meaning, forms, usage shades, signal words and traps — then jump one click deeper (m6–m11 course,
practice drills) or switch to the Decide flow. Deterministic, golden-tested, bilingual, accessible.

**Non-goals (guardrails — see also §10):**
- ❌ Not a rewrite of the three sims. They stay in m6/m11 untouched; the Machine reuses the SSOT
  (`TenseCell`, `TenseGlyphs`, triad hues) and embeds `TenseChooser` as-is.
- ❌ Not a grammar encyclopedia. Core = the 12 matrix cells; satellites are a bounded chip set
  (§4.4, TM3); **passive voice is out** until explicitly commissioned (it doubles the conjugator).
- ❌ No free-text verb input in v1. Curated ≤12 verbs with **precomputed** forms — zero runtime
  morphology guessing, zero native-grade risk. (Free input = a later wave, §11.2.)
- ❌ No new npm dependencies. Pure React + SVG + CSS on the existing stack.
- ❌ No per-generated-sentence UA translations (2,500+ strings). UA is carried by the tense
  meaning + verb gloss + authored examples (§4.2, decision §11.3).

**Definition of success:** a B1 learner lands on `#/tenses`, plays for five minutes, and walks
away able to *say why* "has been writing" differs from "was writing" — and where to drill it.

---

## 2. What exists (keep) vs what the Machine adds

| Area | exists today (keep) | the Machine adds |
|---|---|---|
| Cell lookup | `tense-navigator` ★ in m6 — one cell at a time | all 12 cells **alive simultaneously** (the Wall) |
| Sentence across cells | `sentence-morpher` in m6 — ONE fixed sentence | **user-driven** sentence: verb × subject × polarity |
| Decide flow | `tense-chooser` ★ in m11 | embedded as the **Decide tab** (component reused as-is) |
| Timeline notation | `MiniTimeline` SVG (● 〜 ⤺ 〜⤺, NOW axis) | a **master axis** with a draggable event + Tour |
| Usage nuances | prose inside m6–m11 topics | structured **`uses[]` shades** per cell, chips UI |
| Entry point | map porthole card → m6 | a **standalone page** `#/tenses` in the main nav |
| Data | `TenseCell` SSOT (meaning, forms, examples, signals, nearMisses, freq) | reused verbatim + new `data/tenseMachine.ts` |

---

## 3. The experience (UX)

Two tabs on one page (no sub-routes needed): **Machine** (default) and **Decide**.

### 3.1 Machine tab

Layout top-to-bottom:

1. **Hero strip** — "★ The Tense Machine · Touch every tense — live." + a compact CTA row:
   `✈️ Course: The Tense System (m6)` · `✍️ Drill tenses (#/practice)`.
2. **Emulator controls** (one row, wraps on mobile): verb select (≤12, shows base + UA gloss) ·
   subject segmented control (I · you · he · she · we · they) · polarity segmented control
   (+ · − · ?). All are labelled radiogroups (a11y mirror of the sims).
3. **Master time axis** — one wide SVG axis with the NOW line and a draggable event token.
   Dragging (pointer) or arrow keys move the token past ↔ present ↔ future → the active *column*
   follows. The four aspect glyphs (● 〜 ⤺ 〜⤺) sit beside it as the active-*row* control.
   `▶ Tour` plays the aspect-major walk over all 12 cells (2.4 s cadence, the Morpher pattern),
   with ⏸ / ◀ ▶ step / ↺ reset. **Accessibility contract:** the three time buttons + four aspect
   buttons ARE the canonical controls; the draggable token is a progressive enhancement bound to
   the same state (`role="slider"`, `aria-valuetext` = time label). Under
   `prefers-reduced-motion`: no Tour button, no transitions — instant state swaps.
4. **The Wall** — the 3 × 4 grid, every cell rendered live: tense name, the conjugated verb
   phrase for the current verb/subject/polarity (aux tinted by the cell's time hue, head form
   underlined — the "rows share machinery, only the auxiliary changes time" insight made visible),
   its mini-timeline (shared geometry), and the freq badge (`96%` five). The active cell is
   highlighted; clicking any cell selects it (and deep-links).
5. **Cell detail panel** (under the Wall, `aria-live="polite"`) for the selected cell:
   meaning · forms + − ? · **shades chips** (`uses[]`, TM3 — each chip swaps the example pair and
   the timeline annotation) · signal words · near-misses ("tempting — but wrong here") · authored
   EN/UA examples with TTS · links: "study this in <module/topic>" + "drill it".
6. **Satellites row** (TM3) — under the relevant time column: `going to` · `used to` · `would
   (past habit)` · `be about to` chips; each opens a satellite card (meaning, forms, 2 examples,
   near-miss vs its matrix neighbour — e.g. *going to vs will vs arrangement*). Satellites never
   enter the matrix geometry.

### 3.2 Decide tab

Renders the existing `TenseChooser` component unchanged (lazy). One-line intro + a footnote link
to m11 ("this tool also lives in Choosing Tenses & Narrative"). No fork, no copy.

### 3.3 Deep links & share

- `#/tenses` — default state · `#/tenses/<time>/<aspect>` — that cell selected
  (e.g. `#/tenses/present/perfect-continuous`).
- Emulator state as a human-readable query segment (the Compass §8 pattern):
  `#/tenses/present/perfect?v=write&s=she&p=neg`. Restore on load (invalid values silently fall
  back to defaults), update via `history.replaceState` on change (no history spam).

---

## 4. Data model (`src/data/tenseMachine.ts` — new, lazy-chunk only)

### 4.1 Emulator verbs — precomputed, no runtime morphology

```ts
export interface MachineVerb {
  id: string;          // stable, e.g. 'write'
  base: string;        // write
  s3: string;          // writes   (3rd person singular)
  past: string;        // wrote    (V2)
  part: string;        // written  (V3)
  ing: string;         // writing
  comp: string;        // fixed natural complement: 'code' → "She has been writing code."
  gloss: Localized;    // UA infinitive gloss: { en: 'to write', uk: 'писати' }
}
```

Proposed set (≤12, confirm §11.1 — regular / irregular / spelling-trap mix):
`work` · `play` · `stop` (doubling) · `study` (y→ies/ied) · `write` · `go` · `build` · `run` ·
`read` · `eat` · `make` · `fix`. Forms are authored here (self-contained — NO import from
`data/irregular.ts`: keeps the chunk decoupled and `check:bundle` trivially safe).

### 4.2 UA line in the emulator (locked simplification, see §11.3)

Generated EN sentences are the study object and are **not** translated pair-by-pair. The UA line
under the live sentence = tense `meaning.uk` (from `TenseCell`) + the verb `gloss.uk`. Authored
bilingual example pairs remain in the detail panel (SSOT examples + shades examples).

### 4.3 Shades (TM3)

```ts
export interface TenseUse {
  id: string;               // immutable, e.g. 'present-simple/habit'
  label: Localized;         // chip text: { en: 'Habit', uk: 'Звичка' }
  meaning: Localized;       // one sentence
  example: { text: Localized }; // EN sentence + natural UA (the §4 nuance from CLAUDE.md)
  signals?: string[];       // 'every day', 'usually'…
}
export const USES: Partial<Record<`${TenseTime}/${Aspect}`, TenseUse[]>>;
```

Wave 1 (TM3): the big five (96% of speech) get 4–6 uses each; wave 2 (later session): the
remaining seven get 2–4 each. Source material: the already-authored m6–m11 topics — restructure,
don't re-research; any NEW claim is verified against Cambridge/Oxford (correctness mandate) and
lands in the page's `sources`.

### 4.4 Satellites (TM3)

`SATELLITES: SatelliteForm[]` — `{ id, name, time: TenseTime, meaning, forms {aff,neg,q},
examples (2, EN/UA), nearMiss {name, why}, freqNote? }` for exactly: `going-to`, `used-to`,
`would-habit`, `be-about-to`. Future-in-the-past stays an m11 link, not a satellite (§11.5).

---

## 5. Locked decisions — DO NOT re-ask (planning session, 2026-07-26)

| Topic | Decision |
|---|---|
| **Name** | **The Tense Machine** (page hero "★ The Tense Machine"; nav label **Tenses** — grammar terms stay English in both languages). |
| **Home** | Standalone top-level page **`#/tenses`** + main-nav entry (TopBar + Sidebar `PAGE_LINKS`, after Map). |
| **Scope v1** | The 12-cell core matrix only. Satellites as chips in **TM3**; **passive deferred** (own commission). |
| **Emulator** | **Curated ≤12 verbs, precomputed forms** (no free input, no runtime morphology). 6 subjects, polarity + − ?. |
| **Decide tab** | Embedded existing `TenseChooser`, unchanged; it also stays in m11 (two lenses, same SSOT). |
| **Visual vocabulary** | REUSE `TenseGlyphs` (● 〜 ⤺ 〜⤺), triad hues (`--time-past/present/future`), MiniTimeline geometry — never restyle per component (S5 rule). |
| **Stack discipline** | Lazy route chunk; eager shell must not grow (`check:bundle`); SSR-safe default state; no new deps. |
| **Sims untouched** | `tense-navigator` / `sentence-morpher` / `tense-chooser` stay in their modules; registry keys unchanged. |

---

## 6. Engine (`src/lib/conjugator.ts` — new, pure, golden-tested)

```ts
export type MachineSubject = 'I' | 'you' | 'he' | 'she' | 'we' | 'they';
export type Polarity = 'aff' | 'neg' | 'q';

export interface ConjParts {
  pre?: string;   // fronted auxiliary for questions: 'Has'
  aux: string[];  // auxiliaries in order: ['has','been'] — tinted by time hue in the UI
  head: string;   // the content-verb form: 'writing' — the aspect machinery
  full: string;   // the assembled sentence: 'She has been writing code.'
}
export function conjugate(
  time: TenseTime, aspect: Aspect,
  subject: MachineSubject, polarity: Polarity, verb: MachineVerb,
): ConjParts;
```

Deterministic pattern table (US English, **full forms in v1** — contractions toggle is §11.4):

| aspect | past | present | future |
|---|---|---|---|
| simple | V2 · did not + V1 · Did …? | V1/s3 · do/does not + V1 · Do/Does …? | will + V1 · will not · Will …? |
| continuous | was/were + ing | am/is/are + ing | will be + ing |
| perfect | had + V3 | have/has + V3 | will have + V3 |
| perfect-continuous | had been + ing | have/has been + ing | will have been + ing |

Rules encoded, not guessed: `be`/`do`/`have` agreement by subject; do-support only in simple
past/present; s3 only in present simple affirmative; question = front the first auxiliary
(do-support where none); negation attaches to the first auxiliary. Sentence assembly:
`Subject + [parts] + verb.comp + '.'` (or `'?'`), subject-capitalized.

---

## 7. Routing / integration (exact touch points)

- `lib/hashRouter.ts`: `Route` union + parse + helper —
  ```ts
  | { name: 'tenses'; time?: TenseTime; aspect?: Aspect }
  // case 'tenses': validate parts[1] ∈ TENSE_TIMES, parts[2] ∈ ASPECTS (invalid → undefined)
  export const hrefTenses = (time?: TenseTime, aspect?: Aspect) => …
  ```
- `App.tsx`: lazy `TensesPage` + route branch (the established `React.lazy` + single Suspense).
- `i18n/ui.ts`: `ui.tenses = { en: 'Tenses', uk: 'Tenses' }` (+ page strings).
- `Sidebar.tsx` `PAGE_LINKS` + `TopBar.tsx` top-links: entry after Map →
  Map · **Tenses** · Words · Reading · Practice · Review.
- `LandscapeMap.tsx`: the `tmx-card` porthole **retargets → `hrefTenses()`** (§11.6); the course
  path to m6 is preserved by the Machine's hero CTA + `START_PATH` (unchanged, still lists m6).
- `m6-tense-system`: one small banner block "⚙ Feel it live → the Tense Machine"; m11's chooser
  topic gets a one-line "also available inside the Tense Machine". `DiveSwitcher` ✈️ stays → m6.
- **File placement constraint (smoke):** page components live in `components/pages/TensesPage.tsx`
  + `components/tense/*` (Wall, CellDetail, EmulatorControls, MachineAxis…). **Never** in
  `components/sims|figures/` — the smoke asserts those dirs 1:1 against registry keys.
- `scripts/smoke.ts`: add the route with canaries ("The Tense Machine", "Present Perfect
  Continuous", a conjugated default sentence).
- `scripts/check-data.ts` (TM3): `USES`/`SATELLITES` integrity — unique immutable ids, both
  languages present, valid cell keys, signals non-empty strings.
- Docs (each session, per convention): CLAUDE.md §6 + §13 + §14 log · CURRICULUM.md §G note ·
  README feature list. Code marks: `// CHANGED (TM<N>):`.

---

## 8. A11y & motion (the bar is the existing sims — mirror it)

Labelled radiogroups with arrow-key cycling for verb/subject/polarity/time/aspect · the Wall grid
as a `radiogroup` of cells (the Morpher's `sm-grid` pattern) · detail panel + live sentence in
polite live regions · SVGs decorative (`aria-hidden`) — text carries all information · TTS buttons
keyboard-operable, feature-detected (`lib/tts.ts`) · full-form sentences readable by screen
readers · `prefers-reduced-motion`: no Tour, no drag animation, instant swaps · focus rings and
contrast per the locked palette; mobile: controls wrap, the Wall reflows 3-col → 1-col < 640 px.

## 9. Performance / bundle

The page, `lib/conjugator.ts` and `data/tenseMachine.ts` live ONLY in the lazy route chunk.
`lib/tenses.ts` + `data/tenseNavigator.ts` are already eager (map porthole) — the Machine must
not add a byte to the eager shell (`npm run check:bundle` is the gate; M1/M2 discipline).
SSR renders the default state (present/simple · write · she · aff) with no `window` access at
module scope (the Morpher precedent).

---

## 10. Determinism & test plan (`scripts/test-conjugator.ts` — new golden test)

- **Golden table:** hand-checked expected `full` strings for `write` × {I, she} × all 12 cells ×
  {aff, neg, q} (72 assertions — the heart), + `work`/`stop`/`study` morphology spot-set
  (stopped/stopping · studies/studied · does not study).
- **Properties:** s3 appears ONLY in present-simple-aff with he/she; `did` never co-occurs with
  V2; aux chain length per aspect (0–1 / 1 / 1 / 2, +1 fronted in questions); every output ends
  `.` or `?`; determinism — same inputs → byte-identical output.
- **Contraction-variant note:** when a contractions toggle lands (§11.4), reuse the
  `lib/exercise.ts` normalization contract (`won't`/`will not` etc.) — golden-test both renders.
- **Data integrity (TM3):** every satellite has 2 bilingual examples + a nearMiss; every big-five
  cell has ≥4 uses; ids unique and immutable.
- Gate: `npm run verify` (typecheck · lint · check:data · test · smoke · build) green each session.

---

## 11. Open decisions for you (resolve at TM1 start) / Рішення до старту

1. **Verb set (§4.1).** Confirm the 12 (or trim to 8): work · play · stop · study · write · go ·
   build · run · read · eat · make · fix. — *рек.: 12 як запропоновано (2 spelling-traps, 6 irregular).*
2. **Free-input verbs** — backlog wave after the conjugator settles, or drop the idea entirely?
   — *рек.: у беклог (не в TM1–TM3).*
3. **UA line under the live sentence (§4.2)** — gloss-only (locked above), or ADDITIONALLY author
   full UA translations for ONE showcase combo (she + write, 36 strings, the Morpher precedent)?
   — *рек.: gloss-only у v1; showcase-переклади — якщо лишиться час у TM3.*
4. **Contractions** — full forms only (v1), or ship the "don't / hasn't" toggle in TM3?
   — *рек.: toggle у TM3, це дешево і корисно для listening.*
5. **Satellite set (§4.4)** — the four proposed, or add `future-in-the-past`?
   — *рек.: чотири; future-in-the-past лишається лінком в m11 (наративна тема).*
6. **Map porthole retarget (§7)** — porthole → Machine (with the m6 CTA mitigation), or keep
   porthole → m6 and add a second small map tile for the Machine? — *рек.: retarget → Machine.*
7. **Tour cadence / order** — aspect-major 2.4 s (Morpher parity)? — *рек.: так, parity.*
8. **Session split** — TM1 shell+Wall+detail · TM2 conjugator+controls+tests · TM3
   shades+satellites+share+polish — or merge TM1+TM2 into one bigger session?
   — *рек.: три сесії, quality over speed (working agreement).*

---

## 12. Acceptance criteria (DoD)

- `#/tenses` ships: Wall (12 live cells) + emulator (verb/subject/polarity) + master axis +
  Tour + detail panel + Decide tab; deep-link `#/tenses/<time>/<aspect>?v=&s=&p=` round-trips.
- Every cell's sentence is produced by `conjugate()` — zero hand-written sentence strings on the
  Wall; golden test green (72 goldens + properties).
- Shades wave 1 (big five, ≥4 uses each) + 4 satellites authored EN/UA, `check:data` extended
  and green (TM3).
- Reuses `TenseGlyphs`/triad/MiniTimeline; the three existing sims untouched; registry unchanged.
- Eager shell byte-count unchanged (`check:bundle`); SSR smoke passes with the new canaries.
- a11y verified: full keyboard operation, live regions, reduced-motion path, mobile reflow.
- Nav (TopBar + Sidebar), map porthole, m6/m11 cross-links wired; docs + status log updated;
  `npm run verify` green.

---

## 13. Rough effort / shape of the sessions

**TM1** — route + page shell + Wall rendering from the SSOT + detail panel (existing `TenseCell`
data) + nav/map integration + smoke. **TM2** — `data/tenseMachine.ts` (verbs) +
`lib/conjugator.ts` + golden test + emulator controls + master axis + Tour + share-URL state.
**TM3** — shades wave 1 + satellites + (opt.) contractions toggle + polish/a11y pass + docs.
Each session ends with the verification gate + the 3-part summary (working agreement §8).
