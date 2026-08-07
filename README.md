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
- **★ The Tense Machine** — `#/tenses`, the standalone live home of the tense system: all **12
  time × aspect cells alive at once**, conjugating your choice of verb, subject and + − ? polarity
  as you watch (a pure, golden-tested engine — no canned sentences); flip the **full ↔ short
  forms** toggle (don’t · won’t · she’s — questions never contract); drag the event along the time
  axis or take the 12-step tour; open any cell for meaning, forms, **shades of use** (chips on the
  big five: habit vs fact vs timetable…), examples, signal words and traps; **satellite chips**
  under the wall (going to · used to · would · be about to) open near-tense cards with their own
  near-misses; the **Decide** tab embeds the `tense-chooser`. Share any state by URL.
- **Words hub** — one nav section with four tabs: **Dictionary · Definitions · Idioms · Irregular
  verbs**. All word surfaces in one place; each keeps its own deep links and search.
- **Definitions ★ (word study)** — `#/definitions`, the **front door for words**: browse A–Z or
  search, then open a word and engrave it four ways — **Study** (definition + synonyms + the 4 general
  / 3 professional examples), **Recall** (definition-first flashcard, the word hidden until you
  reveal), **Describe** (define it *without naming it* — a scaffolded, self-scored challenge), and
  **Cloze** (fill the word into its own sentence, auto-checked). Mastery (new / learning / known) per
  word, over the same corpus as the Dictionary. See `DEFINITIONS.md`.
- **The Dictionary** — the fast lookup: words, phrasal verbs and idioms as expandable cards:
  IPA + TTS pronunciation, UA translations, bilingual definitions, **7 examples per word (4 general +
  business / office / dev)**, forms, collocations, cross-links; **A–Z rail** + search by English word
  **or** Ukrainian translation; filters by CEFR level, part of speech, topic.
- **Idioms ★ (word study)** — `#/idioms`, an engaging trainer for **multi-word English** (idioms ·
  phrasal verbs · collocations — a dataset kept separate from single words): each card carries its
  **Ukrainian equivalent**, real examples with TTS and — for idioms — the **story behind it**. Three
  modes: **Learn** (browse by type/theme), **Guess** (meaning → recall the expression), **Match** (pair
  expressions to meanings). Mastery per expression.
- **Reading (Section VII)** — a growing library of short, real-life texts in an accordion by category:
  read in English with a **full Ukrainian translation** on demand, TTS, and **comprehension questions**
  (auto-checked multiple-choice + open questions with a model answer). Search across all texts, filter by
  CEFR level, mark texts as read. ~100 texts now, growing to 1000+ in waves.
- **Trainers** — **`#/review` spaced repetition (SM-2-lite)** over **769 cards in four decks**: Dictionary
  (Oxford seed) · My words · Idioms · Irregular verbs, filterable by CEFR level. Recall the card, then rate
  it *Again / Hard / Good / Easy* (keys 1–4) — each button shows the interval it would schedule; a badge in
  the nav counts what is due. It can **import the progress you already made on Definitions**, and it can
  **back up all your progress to a JSON file** (and restore it). Plus `#/practice` gap-fill + MCQ with
  explanations, and the irregular-verbs 3-forms drill (a tab under **Words → Irregular verbs**).
  Progress lives in your browser (localStorage) — hence the backup button.
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
npm run gen:index  # regenerate the slim search/count indexes (predev + prebuild do this for you)
npm run check:index# fails if a generated slim index is stale vs the corpora
npm run check:data # bilingual completeness, unique ids, 7-example word cards, registry integrity
npm run check:bundle # fails if a corpus leaks back onto the eager critical path, or the budget breaks
npm run verify     # all of the above + tests + smoke + build
```

## Project layout

```
src/
  data/        concepts.ts (SSOT) · modules/ · words/{a1..c1,custom}.ts · irregular.ts · types.ts
  i18n/        ui strings + EN/UA language provider
  theme/       tokens.css · global.css · components.css
  lib/         hashRouter · search (modules+words) · exercise · srs · tts · registry · appState
  components/  layout/ (incl. VocabTabs·WordsLayout) · module/ · map/ · pages/ (Definitions·Dictionary·Idioms·Irregular·Practice·Review) · sims/ · figures/
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
**6 sections · 34 modules · 12 authored**.
**D1 — shipped:** the **Definitions** study page (`#/definitions`) over the shared word corpus — A–Z +
Study / Recall / Describe / Cloze + mastery — and the **first custom word wave (20 cards)**, taking the
dictionary to **170 words (150 A1 + 20 custom)**. See `DEFINITIONS.md`.
**D2–D9 — shipped:** eight more Definitions waves (**+402 cards**) — the dictionary is now **572 words
(150 A1 + 422 custom)**. D7 (+68) is the first monthly wave from `_examples/definition_v2.txt` (business/
office & career vocabulary). The teachable single-word backlog is cleared (the ~178 short phrases go to a
future idioms tab).
**T4 — shipped:** Section II **Tenses complete (6/6)** — `m11` Choosing Tenses & Narrative (+ the ★
`tense-chooser`: three meaning questions → the tense) and the ★ `sentence-morpher` on `m6` (one
sentence morphed through all 12 cells). Now **6 sections · 34 modules · 12 authored**.
**V1–V11 — shipped:** the **Words hub** (four tabs), the **Idioms trainer** (357 entries — **182 idioms** · 58 phrasal verbs · 117 collocations; idioms and collocations each in a navigable category bar) and the
**Irregular-verbs trainer** (75 verbs, table + 3-forms drill).
**RB1 — shipped:** Reading grew 100 → **131 texts**, incl. a new *Biographies & Speeches* category.
**R1 — shipped:** **`#/review`, the SRS trainer** — SM-2-lite ported 1:1, four corpus decks over the 769
cards that already existed, a nav due-badge, an explicit mastery import from Definitions, and JSON
backup/restore of all progress. All four trainers are now live.
**M1 — shipped:** the **dictionary meta-split**. The word corpus and the reading library moved into lazy
chunks; the eager app imports generated slim indexes instead. First load dropped **1.39 MB → 745 kB**, and
opening the map no longer downloads all 141 reading texts to print three numbers. Global search still
matches definition text — it just fetches the full corpus the moment you click the search box. Two new
build gates keep it from regressing.
**M2 — shipped:** the **module meta-split**. Module content moved into one lazy chunk per module; the app
ships only nav metadata, so a module page shows its title, mental model and table of contents immediately
and streams the lesson in. First load is now **326 kB** — down from 1.39 MB across M1+M2 (**−77%**), and
over half of what's left is React itself. Build gates enforce it: a corpus or a module body that sneaks
back onto the first load fails the build.
**Next:** content again — dictionary wave W2 (572 → ~1,000 words) and Section III (Core Grammar) with the
`conditionals-machine` sim; more Reading and idiom waves.

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
**★ The Tense Machine** — `#/tenses`, окремий живий дім усієї системи часів: усі **12 клітинок
time × aspect одночасно**, з живою кон'югацією обраного дієслова, підмета й полярності + − ? на
ваших очах (чистий, golden-тестований движок — жодних заготовлених речень); перемикач **повних ↔
скорочених форм** (don’t · won’t · she’s — питання ніколи не скорочуються); тягніть подію віссю
часу або пройдіть тур на 12 кроків; відкрийте будь-яку клітинку — значення, форми, **відтінки
вживання** (чипи на великій п’ятірці: звичка vs факт vs розклад…), приклади, слова-сигнали й
пастки; **чипи-сателіти** під стіною (going to · used to · would · be about to) відкривають картки
навколо-tense форм із власними near-miss; вкладка **Decide** вбудовує `tense-chooser`. Будь-який
стан шериться URL-ом.
**Words hub** — один розділ навігації з чотирма вкладками: **Dictionary · Definitions · Idioms ·
Irregular verbs**. Усі «словникові» поверхні в одному місці; кожна зберігає свої deep-links і пошук.
**Definitions ★ (вивчення слів)** — `#/definitions`, **головний вхід для слів**: перегляд A–Z або
пошук, тоді відкрий слово й закарбуй його чотирма способами — **Study** (означення + синоніми +
приклади 4 general / 3 professional), **Recall** (flashcard зі схованим словом), **Describe** (опиши,
*не називаючи* — self-scored челендж зі скаффолдом), **Cloze** (встав слово в його ж речення). Mastery
(new / learning / known) на кожне слово, над тим самим корпусом, що й Словник. Див. `DEFINITIONS.md`.
**Словник** — швидкий lookup: слова, phrasal verbs та ідіоми як розгортні картки: IPA + вимова
(TTS), переклади, тлумачення, **7 прикладів на слово (4 загальні + business / office / dev)**, форми,
collocations, перехресні посилання; **рейка A–Z** + пошук за англійським словом **або** українським
перекладом; фільтри за рівнем, частиною мови, темою.
**Idioms ★ (вивчення слів)** — `#/idioms`, захопливий тренажер **багатослівної англійської** (ідіоми ·
phrasal verbs · колокації — датасет, окремий від окремих слів): кожна картка має **український
відповідник**, живі приклади з озвученням і — для ідіом — **історію походження**. Три режими: **Learn**
(перегляд за типом/темою), **Guess** (значення → пригадай вираз), **Match** (спаруй вирази зі значеннями).
Mastery на кожен вираз.
**Тренажери** — **`#/review` — spaced repetition (SM-2-lite)** по **769 картках у чотирьох колодах**:
Словник (Oxford) · Мої слова · Ідіоми · Irregular verbs, з фільтром за рівнем CEFR. Згадай картку й оціни
її — *Знову / Важко / Добре / Легко* (клавіші 1–4); на кожній кнопці видно інтервал, який вона запланує, а
бейдж у навігації показує, скільки карток на повторення. Можна **імпортувати прогрес, уже зроблений в
Означеннях**, і **зберегти весь прогрес у JSON-файл** (та відновити з нього). Плюс `#/practice` gap-fill +
MCQ з поясненнями, а drill трьох форм неправильних дієслів — вкладка **Words → Irregular verbs**. Прогрес
зберігається у браузері (localStorage) — тому й кнопка резервної копії.

## Стек

Vite + React 19 + TypeScript (strict). Без router-бібліотеки — крихітний hash router + `vite
base:'./'`. Увесь контент — статичні дані в `src/data`; сторінки **рендеряться з даних**, не пишуться
руками. Вимова — через Web Speech API браузера, без аудіофайлів.

## Розробка локально / команди

Ті самі команди, що в EN-блоці (`npm run dev | build | preview | typecheck | lint | gen:index |
check:index | check:data | check:bundle | verify`). `npm install` і деплой виконує **власник**.

## Додавання контенту

Редагуй **лише** `src/data/*`. Граматика — файл модуля в `src/data/modules/` + реєстрація sim/figure
у `src/lib/registry.tsx`. **Слова** — golden-картки в `src/data/words/custom.ts` (або файл рівня);
id унікальні й незмінні — це ключі прогресу SRS. Спочатку EN, потім UA. Запусти `npm run check:data`.
Щотижневе поповнення: скажи в сесії *«add words: …»* — протокол у `CLAUDE.md` §10.
