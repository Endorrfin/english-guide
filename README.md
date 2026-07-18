# English — The Guide & Trainer

A deep, interactive, **bilingual (EN / UA)** guide to *the English language for Ukrainian-speaking
engineers* — grammar by CEFR level (A1→C1), a flagship **Modal Verbs** section with heavy practice,
and a searchable **1,000→3,000-word dictionary** with IPA, translations and tagged real-life examples —
taught with prose **plus** tables, figures, mental models, hero simulators and trainers.

**Live:** https://endorrfin.github.io/english-guide/
**Author:** Vasyl Krupka · Senior Fullstack Engineer · 🇺🇦

---

## What's here

- **5 sections · 34 modules** — Foundations (A1–A2) → Core Grammar (B1) → **Modal Verbs ★** →
  Advanced Grammar (B2–C1) → Vocabulary in Action; every module: mental model, key points, pitfalls
  (typical UA-speaker mistakes) and drilled exercises.
- **★ Signature interactives** — `modal-navigator` (pick a function × time, get the right modal),
  `conditionals-machine`, `tense-timeline`, `deduction-lab`, `article-tree`, `word-formation-lab`.
- **The Dictionary** — words, phrasal verbs and idioms as expandable cards: IPA + TTS pronunciation,
  UA translations, bilingual definitions, **7 examples per word (4 general + business / office /
  dev)**, forms, collocations, cross-links; search by English word **or** Ukrainian translation;
  filters by CEFR level, part of speech, topic.
- **Trainers** — `#/review` SRS flashcards (SM-2-lite; decks per level · My words · irregular verbs),
  `#/practice` gap-fill + MCQ hub with explanations, `#/irregular` 3-forms drill. Progress lives in
  your browser (localStorage).
- **Bilingual** at the data layer — every string is `{ en, uk }`; grammar terms stay English in both.

## Tech

Vite + React 19 + TypeScript (strict). No router library — a tiny hash router
(`#/m/<module>/<topic>`, `#/dictionary/<word>`) + `vite base:'./'` makes the build work under any
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
  components/  layout/ · module/ · map/ · pages/ (Dictionary·Practice·Review·Irregular) · sims/ · figures/
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
examples each). Next: S2–S3 complete the Modal Verbs section (`m18`–`m22`).

---

# English — Гайд і тренажер (UA)

Глибокий, інтерактивний, **двомовний (EN / UA)** гайд з *англійської мови для україномовних
інженерів* — граматика за рівнями CEFR (A1→C1), флагманська секція **модальних дієслів** з великою
кількістю практики та **словник на 1,000→3,000 слів** із пошуком — навчання прозою **плюс** таблиці,
діаграми, mental models, hero-симулятори і тренажери.

**Live:** https://endorrfin.github.io/english-guide/ · **Автор:** Vasyl Krupka · 🇺🇦

## Що тут

**5 секцій · 34 модулі** — від Foundations (A1–A2) до Advanced Grammar (B2–C1) і Vocabulary in
Action; кожен модуль: mental model, key points, pitfalls (типові помилки україномовних) і вправи.
**★ Signature-інтерактиви:** `modal-navigator` (обери функцію × час — отримай правильний modal),
`conditionals-machine`, `tense-timeline`, `deduction-lab`, `article-tree`, `word-formation-lab`.
**Словник** — слова, phrasal verbs та ідіоми як розгортні картки: IPA + вимова (TTS), переклади,
тлумачення, **7 прикладів на слово (4 загальні + business / office / dev)**, форми, collocations,
перехресні посилання; пошук за англійським словом **або** українським перекладом; фільтри за рівнем,
частиною мови, темою. **Тренажери** — `#/review` SRS-флешкартки (SM-2-lite), `#/practice` gap-fill +
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
