# English — The Guide & Trainer

A deep, interactive, **bilingual (EN / UA)** guide to *the English language for Ukrainian-speaking
engineers* — grammar by CEFR level (A1→C1), a flagship **Modal Verbs** section with heavy practice,
and a searchable **1,000→3,000-word dictionary** with IPA, translations and tagged real-life examples —
taught with prose **plus** tables, figures, mental models, hero simulators and trainers.

**Live:** https://endorrfin.github.io/english-guide/
**Author:** Vasyl Krupka · Senior Fullstack Engineer · 🇺🇦

---

## What's here

- **6 sections · 34 modules** — Foundations (A1–A2) → **Tenses ★ (the whole tense system, 4-level
  dive)** → Core Grammar (B1) → **Modal Verbs ★** → Advanced Grammar (B2–C1) → Vocabulary in Action;
  every module: mental model, key points, pitfalls (typical UA-speaker mistakes) and drilled exercises.
- **★ Signature interactives** — built: `modal-navigator` (function × time → the right modal),
  `deduction-lab` (certainty × time), `tense-navigator` (time × aspect → tense), `sentence-morpher`
  (one sentence morphed through all 12 cells), `tense-chooser` (three meaning questions → the tense)
  + the parametric `TenseTimeline` figure. Planned: `conditionals-machine`, `article-tree`,
  `word-formation-lab`.
- **Definitions ★ (word study)** — `#/definitions`, the **front door for words**: browse A–Z or
  search, then open a word and engrave it four ways — **Study** (definition + synonyms + the 4 general
  / 3 professional examples), **Recall** (definition-first flashcard, the word hidden until you
  reveal), **Describe** (define it *without naming it* — a scaffolded, self-scored challenge), and
  **Cloze** (fill the word into its own sentence, auto-checked). Mastery (new / learning / known) per
  word, over the same corpus as the Dictionary. See `DEFINITIONS.md`.
- **The Dictionary** — the fast flat lookup: words, phrasal verbs and idioms as expandable cards:
  IPA + TTS pronunciation, UA translations, bilingual definitions, **7 examples per word (4 general +
  business / office / dev)**, forms, collocations, cross-links; search by English word **or** Ukrainian
  translation; filters by CEFR level, part of speech, topic.
- **Reading (Section VII)** — a growing library of short, real-life texts in an accordion by category:
  read in English with a **full Ukrainian translation** on demand, TTS, and **comprehension questions**
  (auto-checked multiple-choice + open questions with a model answer). Search across all texts, filter by
  CEFR level, mark texts as read. ~100 texts now, growing to 1000+ in waves.
- **Trainers** — `#/review` SRS flashcards (SM-2-lite; decks per level · My words · irregular verbs),
  `#/practice` gap-fill + MCQ hub with explanations, `#/irregular` 3-forms drill. Progress lives in
  your browser (localStorage).
- **Bilingual** at the data layer — every string is `{ en, uk }`; grammar terms stay English in both.

## Tech

Vite + React 19 + TypeScript (strict). No router library — a tiny hash router
(`#/m/<module>/<topic>`, `#/definitions/<word>`, `#/dictionary/<word>`) + `vite base:'./'` makes the build work under any
GitHub Pages sub-path. All content is static data in `src/data`; pages are **rendered from data**,
never hand-written. Pronunciation via the browser's Web Speech API — no audio files.

## Local development

```bash
npm install        # darwin-arm64 / your platform (owner runs this)
npm run dev        # start Vite dev server
npm run build      # tsc -b && vite build  → dist/
npm run preview    # preview the production build
```

Quality gates (also enforced in CI before every deploy):

```bash
npm run typecheck  # tsc -b --noEmit
npm run lint       # eslint
npm run check:data # bilingual completeness, unique ids, 7-example word cards, registry integrity
npm run verify     # all of the above + tests + smoke + build
```

## Project layout

```
src/
  data/        concepts.ts (SSOT) · modules/ · words/{a1..c1,custom}.ts · irregular.ts · types.ts
  i18n/        ui strings + EN/UA language provider
  theme/       tokens.css · global.css · components.css
  lib/         hashRouter · search (modules+words) · exercise · srs · tts · registry · appState
  components/  layout/ · module/ · map/ · pages/ (Definitions·Dictionary·Practice·Review·Irregular) · sims/ · figures/
scripts/       check-data.ts · run-tests.ts · smoke.ts (+ engine tests)
```

## Adding content

Edit **only** `src/data/*`. Grammar: add a module file under `src/data/modules/`, register any
sim/figure key in `src/lib/registry.tsx`. **Words:** add golden cards to `src/data/words/custom.ts`
(or the level file), keep ids unique and stable — they are SRS progress keys; run
`npm run check:data`. Author EN first, UA second.

## Status

**S0** — scaffolded (guide-factory Tier-1 template): structure, CEFR content contract, meta-docs.
**S1 (golden) — shipped:** the full app shell (dark editorial theme, CEFR map, EN/UA toggle, global
search over modules **and** words), the golden module `m17-modal-system` (4 topics, 17 drills,
UA-speaker pitfalls) with the ★ `modal-navigator` sim (10 functions × 3 times, near-misses included)
and the `modal-map` figure, the golden-tested exercise engine (contraction-equivalent answers:
*mustn't* = *must not*), and **Dictionary v1 with 150 golden A1 cards** (US IPA · TTS · 7 tagged
examples each).
**S2 — shipped:** three more Modal Verbs modules — `m18` Ability & permission, `m19` Obligation &
necessity, `m20` Advice & criticism — each 4 topics, ≥15 drills, UA-speaker pitfalls, verified sources,
and a dedicated SVG figure (`ability-timeline`, `obligation-source`, `advice-ladder`). 65 modal drills
now feed the `#/practice` hub by tag.
**S3 — shipped:** the **Reading section (VI)** — `#/reading` accordion + `#/reading/<id>` reader with an
EN/UA body toggle, TTS, comprehension questions (auto-checked MCQ + open with model answer), and
mark-as-read; a new `ReadingText`/`ReadingCategory`/`ReadingQuestion` data model and an 18-category
taxonomy, and a live grand-total counter (all texts + per-category counts) on `#/reading`. `check:data` +
`smoke` extended for reading. **18 / 100 bilingual texts** (target 100) transcribed from the owner's
backlog with per-text source attribution, across study · values · family · everyday · work ·
discipline · life · upbringing.
**S4 — shipped:** Modal Verbs **complete (6/6)** — `m21` Deduction & probability (+ the ★ `deduction-lab`
sim) and `m22` Requests & politeness.
**S5 + T1–T3 — shipped:** a new **Section II — Tenses ★** (the whole tense system in one place, with a
4-level "dive" mechanic) — the golden `m6-tense-system` + the ★ `tense-navigator` sim, plus `m7`–`m10`
(present · past · future · the perfect family) and the parametric `TenseTimeline` figure. Now
**6 sections · 34 modules · 11 authored**.
**D1 — shipped:** the **Definitions** study page (`#/definitions`) over the shared word corpus — A–Z +
Study / Recall / Describe / Cloze + mastery — and the **first custom word wave (20 cards)**, taking the
dictionary to **170 words (150 A1 + 20 custom)**. See `DEFINITIONS.md`.
**D2–D6 — shipped:** five more Definitions waves (**+277 cards**) — the dictionary is now **447 words
(150 A1 + 297 custom)**; the teachable single-word backlog is cleared (the ~178 short phrases go to a
future idioms tab).
**T4 — shipped:** Section II **Tenses complete (6/6)** — `m11` Choosing Tenses & Narrative (+ the ★
`tense-chooser`: three meaning questions → the tense) and the ★ `sentence-morpher` on `m6` (one
sentence morphed through all 12 cells). Now **6 sections · 34 modules · 12 authored**.
**Next:** dictionary v2 (lazy per-level chunks + search index) + the `#/review` SRS port +
`#/irregular`; Reading OCR waves (100 → 1000+); the idioms section for the short-phrase backlog.

---

# English — Гайд і тренажер (UA)

Глибокий, інтерактивний, **двомовний (EN / UA)** гайд з *англійської мови для україномовних
інженерів* — граматика за рівнями CEFR (A1→C1), флагманська секція **модальних дієслів** з великою
кількістю практики та **словник на 1,000→3,000 слів** із пошуком — навчання прозою **плюс** таблиці,
діаграми, mental models, hero-симулятори і тренажери.

**Live:** https://endorrfin.github.io/english-guide/ · **Автор:** Vasyl Krupka · 🇺🇦

## Що тут

**6 секцій · 34 модулі** — Foundations (A1–A2) → **Tenses ★ (уся система часів, 4 рівні занурення)** →
Core Grammar (B1) → **Modal Verbs ★** → Advanced Grammar (B2–C1) → Vocabulary in Action; кожен модуль:
mental model, key points, pitfalls (типові помилки україномовних) і вправи.
**★ Signature-інтерактиви:** готові — `modal-navigator` (функція × час → потрібний modal),
`deduction-lab` (певність × час), `tense-navigator` (час × аспект → tense), `sentence-morpher` (одне
речення крізь усі 12 клітинок), `tense-chooser` (три питання про зміст → tense) + параметрична фігура
`TenseTimeline`. Заплановані — `conditionals-machine`, `article-tree`, `word-formation-lab`.
**Definitions ★ (вивчення слів)** — `#/definitions`, **головний вхід для слів**: перегляд A–Z або
пошук, тоді відкрий слово й закарбуй його чотирма способами — **Study** (означення + синоніми +
приклади 4 general / 3 professional), **Recall** (flashcard зі схованим словом), **Describe** (опиши,
*не називаючи* — self-scored челендж зі скаффолдом), **Cloze** (встав слово в його ж речення). Mastery
(new / learning / known) на кожне слово, над тим самим корпусом, що й Словник. Див. `DEFINITIONS.md`.
**Словник** — швидкий плаский lookup: слова, phrasal verbs та ідіоми як розгортні картки: IPA + вимова
(TTS), переклади, тлумачення, **7 прикладів на слово (4 загальні + business / office / dev)**, форми,
collocations, перехресні посилання; пошук за англійським словом **або** українським перекладом;
фільтри за рівнем, частиною мови, темою. **Тренажери** — `#/review` SRS-флешкартки (SM-2-lite), `#/practice` gap-fill +
MCQ з поясненнями, `#/irregular` drill трьох форм. Прогрес зберігається у браузері (localStorage).

## Стек

Vite + React 19 + TypeScript (strict). Без router-бібліотеки — крихітний hash router + `vite
base:'./'`. Увесь контент — статичні дані в `src/data`; сторінки **рендеряться з даних**, не пишуться
руками. Вимова — через Web Speech API браузера, без аудіофайлів.

## Розробка локально / команди

Ті самі команди, що в EN-блоці (`npm run dev | build | preview | typecheck | lint | check:data |
verify`). `npm install` і деплой виконує **власник**.

## Додавання контенту

Редагуй **лише** `src/data/*`. Граматика — файл модуля в `src/data/modules/` + реєстрація sim/figure
у `src/lib/registry.tsx`. **Слова** — golden-картки в `src/data/words/custom.ts` (або файл рівня);
id унікальні й незмінні — це ключі прогресу SRS. Спочатку EN, потім UA. Запусти `npm run check:data`.
Щотижневе поповнення: скажи в сесії *«add words: …»* — протокол у `CLAUDE.md` §10.
