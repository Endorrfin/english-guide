// CHANGED (TM1+TM2): ★ The Tense Machine — emulator data (spec: TENSE-MACHINE-SPEC.md §4).
// CHANGED (TM3): + the shades (USES, spec §4.3), the satellites (SATELLITES, §4.4) and the
// she+write showcase UA table (SHOWCASE_UA, §11.3). All shade/satellite content is RESTRUCTURED
// from the already-authored (and already-sourced) m6–m11 topics — no new grammar claims: habits/
// facts/states/timetable (m7), story-plot & AmE just/yet & always-complaint & historic present
// (m11), used to / would (m8), will vs going to / shall / won’t-refusal (m9), the Present Perfect
// family (m10), be about to (m11 future-in-the-past NOW column). Integrity gated by check:data
// (unique immutable ids, both languages, valid cell keys, big five ≥4 uses).
// Curated verbs with PRECOMPUTED forms — no runtime morphology guessing, per the correctness
// mandate: every form is authored and verifiable against learner dictionaries. Deliberately
// self-contained (NO import from data/irregular.ts) so the Machine's lazy route chunk stays
// decoupled and check:bundle-trivial. The set covers the spelling machinery a learner must see:
// 3rd-person -es (go/fix) and -ies (study), -ing doubling (stop/run), silent-e drop (write/make),
// unchanged-spelling read, plus regular work/play as the baseline. Consumed by lib/conjugator.ts
// (pure, golden-tested via scripts/test-conjugator.ts) and the #/tenses page.
import type { Localized } from './types';
// CHANGED (TM3): type-only import — the chunk stays decoupled from the eager tense SSOT.
import type { Aspect, TenseTime } from '../lib/tenses';

/** One emulator verb: all five forms authored, plus a fixed natural complement (house style:
 *  everyday + office/dev flavor) and a UA infinitive gloss for the bilingual line. */
export interface MachineVerb {
  /** Stable id (used in the share-URL `?v=` param) — append-only, never rename. */
  id: string;
  base: string; // write
  s3: string; // writes — 3rd-person singular present
  past: string; // wrote — V2
  part: string; // written — V3
  ing: string; // writing
  comp: string; // 'code' → "She has been writing code."
  gloss: Localized; // { en: 'to write', uk: 'писати' }
}

/** ≤12 by spec guardrail; `write` first — it is the page's default verb. */
export const MACHINE_VERBS: readonly MachineVerb[] = [
  { id: 'write', base: 'write', s3: 'writes', past: 'wrote', part: 'written', ing: 'writing', comp: 'code', gloss: { en: 'to write', uk: 'писати' } },
  { id: 'work', base: 'work', s3: 'works', past: 'worked', part: 'worked', ing: 'working', comp: 'at the office', gloss: { en: 'to work', uk: 'працювати' } },
  { id: 'build', base: 'build', s3: 'builds', past: 'built', part: 'built', ing: 'building', comp: 'the app', gloss: { en: 'to build', uk: 'будувати' } },
  { id: 'run', base: 'run', s3: 'runs', past: 'ran', part: 'run', ing: 'running', comp: 'the tests', gloss: { en: 'to run', uk: 'запускати' } },
  { id: 'fix', base: 'fix', s3: 'fixes', past: 'fixed', part: 'fixed', ing: 'fixing', comp: 'the bug', gloss: { en: 'to fix', uk: 'лагодити' } },
  { id: 'read', base: 'read', s3: 'reads', past: 'read', part: 'read', ing: 'reading', comp: 'the docs', gloss: { en: 'to read', uk: 'читати' } },
  { id: 'study', base: 'study', s3: 'studies', past: 'studied', part: 'studied', ing: 'studying', comp: 'English', gloss: { en: 'to study', uk: 'вивчати' } },
  { id: 'make', base: 'make', s3: 'makes', past: 'made', part: 'made', ing: 'making', comp: 'coffee', gloss: { en: 'to make', uk: 'робити' } },
  { id: 'eat', base: 'eat', s3: 'eats', past: 'ate', part: 'eaten', ing: 'eating', comp: 'lunch', gloss: { en: 'to eat', uk: 'їсти' } },
  { id: 'play', base: 'play', s3: 'plays', past: 'played', part: 'played', ing: 'playing', comp: 'chess', gloss: { en: 'to play', uk: 'грати' } },
  { id: 'go', base: 'go', s3: 'goes', past: 'went', part: 'gone', ing: 'going', comp: 'to the gym', gloss: { en: 'to go', uk: 'ходити' } },
  { id: 'stop', base: 'stop', s3: 'stops', past: 'stopped', part: 'stopped', ing: 'stopping', comp: 'the recording', gloss: { en: 'to stop', uk: 'зупиняти' } },
];

export function getMachineVerb(id: string): MachineVerb | undefined {
  return MACHINE_VERBS.find((v) => v.id === id);
}

// ────────────────────────────────────────────────────────────────────────────────────────────────
// CHANGED (TM3): SHADES — structured uses[] per cell (spec §4.3). Wave 1 = the big five (≈96% of
// speech), 4–6 uses each; the remaining seven cells arrive in wave 2. Every chip swaps the
// example pair and the annotation in TenseCellDetail. Ids are IMMUTABLE (`<time>-<aspect>/<use>`)
// — append, never rename.

export type TenseCellKey = `${TenseTime}/${Aspect}`;

export interface TenseUse {
  /** Immutable id, e.g. 'present-simple/habit' — the prefix mirrors its cell key. */
  id: string;
  /** Chip text — short. */
  label: Localized;
  /** One-sentence annotation of the shade. */
  meaning: Localized;
  /** One EN example + its natural UA translation (the CLAUDE.md §4 nuance). */
  example: { text: Localized };
  /** Typical signal words, where the shade has them. */
  signals?: string[];
}

const L = (en: string, uk: string): Localized => ({ en, uk });

export const USES: Partial<Record<TenseCellKey, TenseUse[]>> = {
  // ── Present Simple — 57.5% of speech (m7 topics 2–4 + m11 topic 4, restructured) ─────────────
  'present/simple': [
    {
      id: 'present-simple/habit',
      label: L('Habit / routine', 'Звичка / рутина'),
      meaning: L(
        'A repeated action — it happens regularly, not necessarily right now.',
        'Повторювана дія — відбувається регулярно, не конче цієї миті.',
      ),
      example: { text: L('I check email every morning.', 'Я перевіряю пошту щоранку.') },
      signals: ['every day', 'usually', 'always', 'on Mondays'],
    },
    {
      id: 'present-simple/fact',
      label: L('Fact / truth', 'Факт / істина'),
      meaning: L(
        'A general truth or permanent fact — true in general, independent of this moment.',
        'Загальна істина чи постійний факт — чинне взагалі, незалежно від цієї миті.',
      ),
      example: { text: L('The service runs on port 8080.', 'Сервіс працює на порту 8080.') },
    },
    {
      id: 'present-simple/state',
      label: L('State verbs', 'Дієслова стану'),
      meaning: L(
        'State verbs (know, want, agree, believe) stay Simple even about right now — never -ing.',
        'Дієслова стану (know, want, agree, believe) лишаються в Simple навіть про «зараз» — ніколи -ing.',
      ),
      example: { text: L('I agree with your review.', 'Я згоден із твоїм рев’ю.') },
    },
    {
      id: 'present-simple/timetable',
      label: L('Timetable → future', 'Розклад → майбутнє'),
      meaning: L(
        'A scheduled future fixed by an authority outside you — timetables, opening hours, cron.',
        'Заплановане майбутнє, зафіксоване інстанцією поза тобою — розклади, години роботи, cron.',
      ),
      example: { text: L('The train leaves at 6:30.', 'Потяг відходить о 6:30.') },
    },
    {
      id: 'present-simple/story-docs',
      label: L('Stories & docs', 'Історії й доки'),
      meaning: L(
        'The historic present of jokes, plot summaries and system docs — timeless behavior told live.',
        'Історичний present жартів, переказів сюжету й системної документації — позачасова поведінка, розказана наживо.',
      ),
      example: {
        text: L(
          'The request hits the gateway, and the service validates the token.',
          'Запит потрапляє на gateway, і сервіс перевіряє токен.',
        ),
      },
    },
  ],

  // ── Present Continuous — 5.1% (m7 topics 2–4 + the m11 complaint pattern) ────────────────────
  'present/continuous': [
    {
      id: 'present-continuous/now',
      label: L('Right now', 'Просто зараз'),
      meaning: L(
        'An action in progress at this moment — started, not finished.',
        'Дія в процесі цієї миті — почалася, не завершилася.',
      ),
      example: { text: L('She’s working on the report right now.', 'Вона просто зараз працює над звітом.') },
      signals: ['now', 'right now', 'at the moment', 'Look!'],
    },
    {
      id: 'present-continuous/temporary',
      label: L('Temporary', 'Тимчасове'),
      meaning: L(
        'A temporary situation around now — not the permanent picture.',
        'Тимчасова ситуація довкола «зараз» — не постійна картина.',
      ),
      example: { text: L('This week I’m covering for a colleague.', 'Цього тижня я підміняю колегу.') },
      signals: ['this week', 'these days', 'this month'],
    },
    {
      id: 'present-continuous/arrangement',
      label: L('Arrangement → future', 'Домовленість → майбутнє'),
      meaning: L(
        'A fixed personal arrangement in the near future — the time and the people are already set.',
        'Фіксована особиста домовленість на найближче майбутнє — час і люди вже узгоджені.',
      ),
      example: { text: L('I’m meeting the client on Tuesday.', 'У вівторок я зустрічаюся з клієнтом.') },
      signals: ['on Tuesday', 'tonight', 'next week'],
    },
    {
      id: 'present-continuous/always-complaint',
      label: L('Complaint (always)', 'Скарга (always)'),
      meaning: L(
        'always + Continuous = the exasperated complaint about a repeated habit.',
        'always + Continuous = роздратована скарга на повторювану звичку.',
      ),
      example: {
        text: L('He is always forgetting to update the ticket!', 'Він вічно забуває оновити тікет!'),
      },
      signals: ['always'],
    },
  ],

  // ── Past Simple — 19.7% (m8 topics 1–4 + m11 narrative/AmE, restructured) ────────────────────
  'past/simple': [
    {
      id: 'past-simple/finished-time',
      label: L('Finished time', 'Завершений час'),
      meaning: L(
        'A whole finished event at a named past time — a finished-time word forces this cell.',
        'Ціла завершена подія в названий минулий час — слово завершеного часу вимагає саме цієї клітинки.',
      ),
      example: { text: L('I lost my keys yesterday.', 'Учора я загубив ключі.') },
      signals: ['yesterday', 'last week', 'in 2020', 'ago'],
    },
    {
      id: 'past-simple/story-plot',
      label: L('Story plot', 'Сюжет історії'),
      meaning: L(
        'The narrative engine — events in order, one after another, driving the story forward.',
        'Двигун оповіді — події по порядку, одна за одною, рухають історію вперед.',
      ),
      example: { text: L('The alert fired. I opened the runbook.', 'Спрацював алерт. Я відкрив ранбук.') },
      signals: ['then', 'after that', 'and then'],
    },
    {
      id: 'past-simple/past-habit',
      label: L('Past habit', 'Минула звичка'),
      meaning: L(
        'A repeated past action or a long period — plain Past Simple already tells it; used to adds the “over now” contrast.',
        'Повторювана минула дія чи довгий період — просте Past Simple це вже передає; used to додає контраст «уже ні».',
      ),
      example: {
        text: L('I commuted two hours a day for years.', 'Роками я їздив на роботу дві години на день.'),
      },
      signals: ['for years', 'every summer'],
    },
    {
      id: 'past-simple/past-state',
      label: L('Past state', 'Минулий стан'),
      meaning: L(
        'A state that held in the past — be keeps was/were; states never take would.',
        'Стан, що тримався в минулому — be зберігає was/were; стани ніколи не беруть would.',
      ),
      example: {
        text: L('Before the rewrite, the app was one big module.', 'До rewrite застосунок був одним великим модулем.'),
      },
    },
    {
      id: 'past-simple/ame-just-yet',
      label: L('AmE just / yet', 'AmE just / yet'),
      meaning: L(
        'American English freely uses Past Simple with just / already / yet where standard British prefers Present Perfect — recognize it.',
        'Американська англійська вільно вживає Past Simple з just / already / yet там, де стандартна британська воліє Present Perfect — впізнавай.',
      ),
      example: { text: L('I just saw your message. (US)', 'Я щойно побачив твоє повідомлення. (US)') },
      signals: ['just', 'already', 'yet'],
    },
  ],

  // ── Future Simple (will) — 8.5% (m9 topic 1 + its dive notes, restructured) ──────────────────
  'future/simple': [
    {
      id: 'future-simple/decision',
      label: L('On-the-spot decision', 'Рішення на місці'),
      meaning: L(
        'A decision formed at the moment of speaking — the ringing-phone test.',
        'Рішення, що формується в мить мовлення — тест дзвінка телефона.',
      ),
      example: { text: L('The build failed — I’ll take a look.', 'Білд упав — гляну.') },
    },
    {
      id: 'future-simple/promise',
      label: L('Promise / offer', 'Обіцянка / пропозиція'),
      meaning: L(
        'A promise, offer or commitment the speaker takes on now.',
        'Обіцянка, пропозиція чи зобов’язання, яке мовець бере на себе зараз.',
      ),
      example: { text: L('I’ll send the report by five.', 'Я надішлю звіт до п’ятої.') },
    },
    {
      id: 'future-simple/prediction',
      label: L('Prediction (opinion)', 'Прогноз (думка)'),
      meaning: L(
        'A prediction that is just an opinion or hunch — no present evidence (evidence takes going to).',
        'Прогноз-думка чи здогад — без наявних доказів (для доказів є going to).',
      ),
      example: { text: L('I think this migration will be quick.', 'Думаю, ця міграція буде швидкою.') },
      signals: ['I think', 'probably'],
    },
    {
      id: 'future-simple/refusal',
      label: L('Willingness / refusal', 'Готовність / відмова'),
      meaning: L(
        'will also marks willingness — and won’t a refusal, even of objects.',
        'will також позначає готовність — а won’t відмову, навіть у предметів.',
      ),
      example: { text: L('The container won’t start.', 'Контейнер «відмовляється» стартувати.') },
      signals: ['won’t'],
    },
    {
      id: 'future-simple/shall-offer',
      label: L('Shall — offers (BrE)', 'Shall — пропозиції (BrE)'),
      meaning: L(
        'British offers and suggestions with I / we; US English says Should I…? / Do you want me to…?',
        'Британські пропозиції з I / we; US English каже Should I…? / Do you want me to…?',
      ),
      example: { text: L('Shall we start?', 'Почнімо?') },
      signals: ['Shall I', 'Shall we'],
    },
  ],

  // ── Present Perfect — 6% (m10 topics 1–2, restructured) ──────────────────────────────────────
  'present/perfect': [
    {
      id: 'present-perfect/result',
      label: L('Result now', 'Результат зараз'),
      meaning: L(
        'A past action whose result you feel in the present — the when is not stated.',
        'Минула дія, результат якої відчутний тепер — «коли» не називається.',
      ),
      example: { text: L('I’ve lost my keys.', 'Я загубив ключі (і досі без них).') },
    },
    {
      id: 'present-perfect/experience',
      label: L('Experience', 'Досвід'),
      meaning: L(
        'A life experience at any unnamed time up to now.',
        'Життєвий досвід у будь-який неназваний час дотепер.',
      ),
      example: { text: L('Have you ever used Rust?', 'Ти колись користувався Rust?') },
      signals: ['ever', 'never'],
    },
    {
      id: 'present-perfect/news-just',
      label: L('News / just', 'Новини / just'),
      meaning: L(
        'Announcing fresh news — then Past Simple fills in the details.',
        'Оголошення свіжої новини — далі деталі заповнює Past Simple.',
      ),
      example: { text: L('The team has shipped v2.', 'Команда випустила v2 (щойно — новина).') },
      signals: ['just'],
    },
    {
      id: 'present-perfect/unfinished-period',
      label: L('Unfinished period', 'Незавершений період'),
      meaning: L(
        'A count or event inside a period that is still open — today, this week, this quarter.',
        'Кількість чи подія всередині ще відкритого періоду — today, this week, this quarter.',
      ),
      example: { text: L('We’ve merged five PRs this week.', 'Цього тижня ми змержили п’ять PR.') },
      signals: ['today', 'this week', 'this month'],
    },
    {
      id: 'present-perfect/for-since',
      label: L('for / since', 'for / since'),
      meaning: L(
        'A period starting in the past and reaching now — for + a length, since + a start point.',
        'Період, що починається в минулому й сягає тепер — for + тривалість, since + точка початку.',
      ),
      example: { text: L('I’ve been on call since Monday.', 'Я на чергуванні з понеділка.') },
      signals: ['for', 'since'],
    },
  ],
};

/** The shades of one cell (wave 1: the big five; the other seven cells return [] until wave 2). */
export function getUses(time: TenseTime, aspect: Aspect): TenseUse[] {
  return USES[`${time}/${aspect}`] ?? [];
}

// ────────────────────────────────────────────────────────────────────────────────────────────────
// CHANGED (TM3): SATELLITES — the four near-tense forms as chips under their Wall time column
// (spec §4.4). They never enter the matrix geometry; each opens a card with meaning, forms + − ?,
// two EN/UA examples and a near-miss against its matrix neighbour. Future-in-the-past stays an
// m11 link, not a satellite (spec §11.5). Ids are IMMUTABLE.

export interface SatelliteForm {
  /** Immutable id: 'going-to' · 'used-to' · 'would-habit' · 'be-about-to'. */
  id: string;
  /** Display name — grammar terms stay English in both languages. */
  name: string;
  /** The Wall time column the chip sits under. */
  time: TenseTime;
  meaning: Localized;
  /** Pattern strings (stay English in both languages, like TenseCell.forms). */
  forms: { aff: string; neg: string; q: string };
  /** Exactly 2: one everyday, one office/dev-flavored (house style). */
  examples: { text: Localized }[];
  /** The tempting matrix neighbour and why it is a different tool. */
  nearMiss: { name: string; why: Localized };
  freqNote?: Localized;
}

export const SATELLITES: readonly SatelliteForm[] = [
  {
    id: 'going-to',
    name: 'going to',
    time: 'future',
    meaning: L(
      'An intention decided BEFORE now, or a prediction backed by present evidence you can point at.',
      'Намір, вирішений ДО цього моменту, або прогноз із наявних доказів, на які можна вказати.',
    ),
    forms: {
      aff: 'am / is / are going to + V1',
      neg: 'am not / isn’t / aren’t going to + V1',
      q: 'Am / Is / Are + subject + going to + V1?',
    },
    examples: [
      { text: L('We’re going to redeploy after lunch — it’s agreed.', 'Після обіду ми редеплоїмося — домовлено.') },
      { text: L('Look at the error rate — this is going to page us.', 'Глянь на error rate — це от-от підніме нас по алерту.') },
    ],
    nearMiss: {
      name: 'Future Simple (will)',
      why: L(
        'will is formed AS you speak — the ringing phone gets “I’ll get it”, never “I’m going to get it”. And if the time and the people are already booked, that is a Present Continuous arrangement.',
        'will формується В МИТЬ мовлення — на дзвінок телефона кажуть «I’ll get it», ніколи «I’m going to get it». А якщо час і люди вже заброньовані — це домовленість у Present Continuous.',
      ),
    },
    freqNote: L(
      'In fast speech it reduces to “gonna” — recognize it, don’t write it.',
      'У швидкому мовленні зводиться до «gonna» — впізнавай, але не пиши.',
    ),
  },
  {
    id: 'used-to',
    name: 'used to',
    time: 'past',
    meaning: L(
      'A past habit OR state that is over now — the contrast with today is the point.',
      'Минула звичка АБО стан, яких уже немає — суть у контрасті з сьогодні.',
    ),
    forms: {
      aff: 'used to + V1',
      neg: 'didn’t use to + V1',
      q: 'Did + subject + use to + V1?',
    },
    examples: [
      { text: L('There used to be a cinema here.', 'Колись тут був кінотеатр.') },
      { text: L('We used to deploy on Fridays.', 'Колись ми деплоїлися по п’ятницях.') },
    ],
    nearMiss: {
      name: 'Past Simple',
      why: L(
        'Plain Past Simple already tells the story (I commuted for years); used to earns its place when “it has clearly stopped” is the message. Spelling trap: after did the -d drops — didn’t use to.',
        'Просте Past Simple вже розповідає історію (I commuted for years); used to доречне, коли головне — «це явно припинилося». Пастка написання: після did зникає -d — didn’t use to.',
      ),
    },
  },
  {
    id: 'would-habit',
    name: 'would (past habit)',
    time: 'past',
    meaning: L(
      'Repeated past actions — the remembered ritual. NEVER past states: states need used to.',
      'Повторювані минулі дії — ритуал зі спогадів. НІКОЛИ не минулі стани: станам потрібне used to.',
    ),
    forms: {
      aff: 'would + V1',
      neg: 'wouldn’t + V1 (rare for habit)',
      q: 'Would + subject + V1? (rare — prefer Did … use to …?)',
    },
    examples: [
      { text: L('Every summer we would visit our grandparents.', 'Щоліта ми навідували дідуся й бабусю.') },
      { text: L('On Fridays we would deploy at noon.', 'По п’ятницях ми деплоїлися опівдні.') },
    ],
    nearMiss: {
      name: 'Past Simple',
      why: L(
        'One finished event at a dated time stays Past Simple (last Friday we deployed — not “would deploy”); would is only the repeated ritual. And “I would have a slow laptop” is wrong — states take used to.',
        'Одна завершена подія в датований час лишається в Past Simple (минулої п’ятниці ми задеплоїли — не «would deploy»); would — лише повторюваний ритуал. А «I would have a slow laptop» хибне — стани беруть used to.',
      ),
    },
    freqNote: L(
      'Style: writers open with used to to set the “this is over” frame, then switch to would for the individual repeated actions.',
      'Стиль: автори відкривають через used to, задаючи рамку «цього вже немає», а тоді переходять на would для окремих повторюваних дій.',
    ),
  },
  {
    id: 'be-about-to',
    name: 'be about to',
    time: 'future',
    meaning: L(
      'On the very verge of happening — the next moment, often just before something cuts in.',
      'На самій межі здійснення — найближча мить, часто просто перед тим, як щось втрутиться.',
    ),
    forms: {
      aff: 'am / is / are about to + V1',
      neg: 'am not / isn’t / aren’t about to + V1',
      q: 'Am / Is / Are + subject + about to + V1?',
    },
    examples: [
      { text: L('I’m about to push.', 'Я от-от запушу.') },
      { text: L('We were about to merge when QA found the regression.', 'Ми вже були готові мержити, коли QA знайшло регресію.') },
    ],
    nearMiss: {
      name: 'Future Simple (will)',
      why: L(
        'will looks at “sometime later”; be about to is the very next moment — and its past twin was about to tells of plans cut short (m11).',
        'will дивиться на «колись пізніше»; be about to — найближча мить, а його минулий близнюк was about to розповідає про перервані плани (m11).',
      ),
    },
  },
];

// ────────────────────────────────────────────────────────────────────────────────────────────────
// CHANGED (TM3): the SHOWCASE UA table (spec §11.3) — full natural UA translations for the ONE
// showcase combo she + write (12 cells × + − ? = 36 strings, the Morpher precedent). Shown in the
// detail panel under the live trio only when verb=write & subject=she; every other combo keeps
// the locked gloss-only UA line (spec §4.2). «До того моменту / на той момент» carries the
// reference point; the ⤺ rows deliberately show UA rendering Perfect with present/past forms —
// the no-Perfect-in-UA mismatch made visible (the m6/m10 pitfall).

export const SHOWCASE_UA: Record<TenseCellKey, { aff: string; neg: string; q: string }> = {
  'past/simple': {
    aff: 'Вона писала код.',
    neg: 'Вона не писала коду.',
    q: 'Вона писала код?',
  },
  'present/simple': {
    aff: 'Вона пише код.',
    neg: 'Вона не пише коду.',
    q: 'Вона пише код?',
  },
  'future/simple': {
    aff: 'Вона писатиме код.',
    neg: 'Вона не писатиме коду.',
    q: 'Вона писатиме код?',
  },
  'past/continuous': {
    aff: 'Вона саме писала код.',
    neg: 'У той момент вона не писала коду.',
    q: 'Вона саме писала код?',
  },
  'present/continuous': {
    aff: 'Вона просто зараз пише код.',
    neg: 'Вона зараз не пише коду.',
    q: 'Вона зараз пише код?',
  },
  'future/continuous': {
    aff: 'У той момент вона саме писатиме код.',
    neg: 'У той момент вона не писатиме коду.',
    q: 'У той момент вона писатиме код?',
  },
  'past/perfect': {
    aff: 'До того моменту вона вже написала код.',
    neg: 'До того моменту вона ще не написала коду.',
    q: 'До того моменту вона вже написала код?',
  },
  'present/perfect': {
    aff: 'Вона вже написала код (результат відчутний зараз).',
    neg: 'Вона ще не написала коду.',
    q: 'Вона вже написала код?',
  },
  'future/perfect': {
    aff: 'До того моменту вона вже напише код.',
    neg: 'До того моменту вона так і не напише коду.',
    q: 'До того моменту вона вже напише код?',
  },
  'past/perfect-continuous': {
    aff: 'До того моменту вона вже якийсь час писала код.',
    neg: 'На той момент вона вже якийсь час не писала коду.',
    q: 'До того моменту вона вже якийсь час писала код?',
  },
  'present/perfect-continuous': {
    aff: 'Вона вже якийсь час пише код (аж дотепер).',
    neg: 'Останнім часом вона не пише коду.',
    q: 'Вона вже якийсь час пише код?',
  },
  'future/perfect-continuous': {
    aff: 'На той момент вона писатиме код уже якийсь час.',
    neg: 'На той момент вона вже якийсь час не писатиме коду.',
    q: 'На той момент вона вже якийсь час писатиме код?',
  },
};
