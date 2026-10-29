// CHANGED (A1): content for the ★ Counterfactual Rewind sim (m23). Every frame is AUTHORED, never
// generated. The four cells follow British Council LearnEnglish "Conditionals: third and mixed" and
// Cambridge "Conditionals: if"; the wishes follow Cambridge "Wish" / "If only" and British Council
// "Wishes: wish and if only" (wish + would only about someone else's behavior — never "I wish I
// would"). Frame 1 = the fact, frame 2 = the condition rewound (ends with " …"), frame 3 = the full
// sentence; frame 2 is always a prefix of frame 3 (the golden test checks it). US English, work lean.
import type { CfCell, WishItem } from '../lib/counterfactual';

export const CELLS: CfCell[] = [
  {
    cond: 'past',
    result: 'past',
    label: 'Type 3 — third conditional',
    ifForm: 'if + had + V3',
    mainForm: 'would have + V3',
    meaning: {
      en: 'A past event that did not happen, and the past result it would have had. Both halves are finished history — you can only regret or analyze them.',
      uk: 'Подія в минулому, якої не було, і минулий результат, який вона мала б. Обидві половини — завершена історія: її можна лише шкодувати або аналізувати.',
    },
    scenarios: [
      {
        id: 'migration',
        frames: [
          { src: 'We didn’t run the migration on staging, so it failed in production.', uk: 'Ми не запустили міграцію на staging, тож вона впала в продакшні.' },
          { src: 'If we had run the migration on staging, …', uk: 'Якби ми запустили міграцію на staging, …' },
          { src: 'If we had run the migration on staging, it wouldn’t have failed in production.', uk: 'Якби ми запустили міграцію на staging, вона не впала б у продакшні.' },
        ],
      },
      {
        id: 'train',
        frames: [
          { src: 'I left home late, so I missed the train.', uk: 'Я вийшов з дому пізно, тож запізнився на потяг.' },
          { src: 'If I had left home on time, …', uk: 'Якби я вийшов з дому вчасно, …' },
          { src: 'If I had left home on time, I wouldn’t have missed the train.', uk: 'Якби я вийшов з дому вчасно, я б не запізнився на потяг.' },
        ],
      },
    ],
    trap: {
      wrong: 'If we would have run the migration on staging, it wouldn’t have failed.',
      why: {
        en: 'No would in the if-clause — the if-clause takes had + V3. Ukrainian «якби» already contains «б», which is why would sneaks in.',
        uk: 'У if-частині немає would — там had + V3. Українське «якби» вже містить «б», тому would і пролазить.',
      },
    },
  },
  {
    cond: 'past',
    result: 'now',
    label: 'Mixed — past cause, present result',
    ifForm: 'if + had + V3',
    mainForm: 'would + V1',
    meaning: {
      en: 'A different past would have changed the PRESENT. The if-clause looks like Type 3, the main clause like Type 2 — usually with now in it.',
      uk: 'Інше минуле змінило б ТЕПЕРІШНЄ. If-частина як у Type 3, головна — як у Type 2, зазвичай із now.',
    },
    scenarios: [
      {
        id: 'tests',
        frames: [
          { src: 'We didn’t write tests last year, so we are afraid to refactor now.', uk: 'Торік ми не писали тестів, тож тепер боїмося рефакторити.' },
          { src: 'If we had written tests last year, …', uk: 'Якби ми торік написали тести, …' },
          { src: 'If we had written tests last year, we wouldn’t be afraid to refactor now.', uk: 'Якби ми торік написали тести, ми б тепер не боялися рефакторити.' },
        ],
      },
      {
        id: 'berlin',
        frames: [
          { src: 'I turned down the job in Berlin, so I’m not living there now.', uk: 'Я відмовився від роботи в Берліні, тож зараз там не живу.' },
          { src: 'If I hadn’t turned down the job in Berlin, …', uk: 'Якби я не відмовився від роботи в Берліні, …' },
          { src: 'If I hadn’t turned down the job in Berlin, I would be living there now.', uk: 'Якби я не відмовився від роботи в Берліні, я б зараз жив там.' },
        ],
      },
    ],
    trap: {
      wrong: 'If I hadn’t turned down the job, I would have lived in Berlin now.',
      why: {
        en: 'The result is NOW, so the main clause is would + V1 (would be living), not would have + V3 — would have points back to the past and clashes with now.',
        uk: 'Результат — ЗАРАЗ, тож головна частина would + V1 (would be living), а не would have + V3: would have вказує в минуле і конфліктує з now.',
      },
    },
  },
  {
    cond: 'now',
    result: 'past',
    label: 'Mixed — present state, past result',
    ifForm: 'if + Past Simple / were',
    mainForm: 'would have + V3',
    meaning: {
      en: 'Something that is (still) true would have changed a PAST event. The cause is a lasting state — who someone is, what they know — so it has no past form of its own here.',
      uk: 'Те, що (досі) правда, змінило б подію в МИНУЛОМУ. Причина — тривалий стан: хто людина є, що вона знає, — тому тут вона не має власної минулої форми.',
    },
    scenarios: [
      {
        id: 'anna',
        frames: [
          { src: 'Anna doesn’t speak Ukrainian, so she didn’t understand the joke.', uk: 'Анна не говорить українською, тож не зрозуміла жарту.' },
          { src: 'If Anna spoke Ukrainian, …', uk: 'Якби Анна говорила українською, …' },
          { src: 'If Anna spoke Ukrainian, she would have understood the joke.', uk: 'Якби Анна говорила українською, вона зрозуміла б жарт.' },
        ],
      },
      {
        id: 'monitoring',
        frames: [
          { src: 'Our monitoring is weak, so we didn’t notice the outage.', uk: 'Наш моніторинг слабкий, тож ми не помітили збою.' },
          { src: 'If our monitoring were stronger, …', uk: 'Якби наш моніторинг був сильнішим, …' },
          { src: 'If our monitoring were stronger, we would have noticed the outage.', uk: 'Якби наш моніторинг був сильнішим, ми б помітили збій.' },
        ],
      },
    ],
    trap: {
      wrong: 'If Anna speaks Ukrainian, she would have understood the joke.',
      why: {
        en: 'The condition is imagined, so it moves one step back: speaks → spoke. A present if-clause makes it sound real and clashes with would have.',
        uk: 'Умова уявна, тож вона робить крок назад: speaks → spoke. If-частина в present звучить як реальна і конфліктує з would have.',
      },
    },
  },
  {
    cond: 'now',
    result: 'now',
    label: 'Type 2 — second conditional',
    ifForm: 'if + Past Simple / were',
    mainForm: 'would + V1',
    meaning: {
      en: 'An imagined present (or unlikely future) and its result. The past form here is not about time — it is distance from reality (m13).',
      uk: 'Уявне теперішнє (або малоймовірне майбутнє) і його результат. Минула форма тут не про час — це відстань від реальності (m13).',
    },
    scenarios: [
      {
        id: 'open-source',
        frames: [
          { src: 'I don’t have time, so I don’t contribute to open source.', uk: 'У мене немає часу, тож я не роблю внесків в open source.' },
          { src: 'If I had time, …', uk: 'Якби в мене був час, …' },
          { src: 'If I had time, I would contribute to open source.', uk: 'Якби в мене був час, я б робив внески в open source.' },
        ],
      },
      {
        id: 'build',
        frames: [
          { src: 'The build is slow, so we don’t deploy every hour.', uk: 'Збірка повільна, тож ми не деплоїмо щогодини.' },
          { src: 'If the build were faster, …', uk: 'Якби збірка була швидшою, …' },
          { src: 'If the build were faster, we would deploy every hour.', uk: 'Якби збірка була швидшою, ми б деплоїли щогодини.' },
        ],
      },
    ],
    trap: {
      wrong: 'If I would have time, I would contribute to open source.',
      why: {
        en: 'would belongs to the main clause only. The if-clause takes the past form: If I had time.',
        uk: 'would — лише в головній частині. If-частина бере минулу форму: If I had time.',
      },
    },
  },
];

export const WISHES: WishItem[] = [
  {
    kind: 'now',
    form: 'wish + Past Simple',
    meaning: {
      en: 'A wish about NOW: the verb moves one step back (speak → spoke), exactly like a Type 2 if-clause.',
      uk: 'Бажання про ЗАРАЗ: дієслово робить крок назад (speak → spoke), точно як if-частина Type 2.',
    },
    frames: [
      { src: 'I don’t speak German.', uk: 'Я не говорю німецькою.' },
      { src: 'I wish I spoke German.', uk: 'Шкода, що я не говорю німецькою.' },
      { src: 'If only I spoke German!', uk: 'Ох, якби ж я говорив німецькою!' },
    ],
    trap: {
      wrong: 'I wish I speak German.',
      why: {
        en: 'After wish the present moves back to the past: I wish I spoke German.',
        uk: 'Після wish present відступає в past: I wish I spoke German.',
      },
    },
  },
  {
    kind: 'past',
    form: 'wish + Past Perfect',
    meaning: {
      en: 'A regret about the PAST: had + V3, like a Type 3 if-clause.',
      uk: 'Жаль про МИНУЛЕ: had + V3, як if-частина Type 3.',
    },
    frames: [
      { src: 'I didn’t back up the database.', uk: 'Я не зробив бекап бази даних.' },
      { src: 'I wish I had backed up the database.', uk: 'Шкода, що я не зробив бекап бази даних.' },
      { src: 'If only I had backed up the database!', uk: 'Ох, якби ж я зробив бекап бази даних!' },
    ],
    trap: {
      wrong: 'I wish I would have backed up the database.',
      why: {
        en: 'A past regret takes had + V3 — no would after wish here.',
        uk: 'Жаль про минуле — це had + V3, без would після wish.',
      },
    },
  },
  {
    kind: 'would',
    form: 'wish + someone + would + V1',
    meaning: {
      en: 'Annoyance about someone ELSE’s behavior and a wish that it would change. Not about yourself: your own habits are your choice.',
      uk: 'Роздратування чужою поведінкою і бажання, щоб вона змінилася. Не про себе: власні звички — ваш вибір.',
    },
    frames: [
      { src: 'My teammate keeps pushing straight to main.', uk: 'Мій колега постійно пушить просто в main.' },
      { src: 'I wish my teammate would stop pushing straight to main.', uk: 'Хотів би я, щоб мій колега перестав пушити просто в main.' },
      { src: 'If only my teammate would stop pushing straight to main!', uk: 'Ох, якби ж мій колега перестав пушити просто в main!' },
    ],
    trap: {
      wrong: 'I wish I would stop checking Slack at night.',
      why: {
        en: 'wish + would is for someone else. About yourself use a past form: I wish I didn’t check Slack at night.',
        uk: 'wish + would — про когось іншого. Про себе — минула форма: I wish I didn’t check Slack at night.',
      },
    },
  },
  {
    kind: 'could',
    form: 'wish + could + V1',
    meaning: {
      en: 'A wish about an ability you don’t have (now or in the near future): can → could.',
      uk: 'Бажання про можливість, якої немає (зараз або найближчим часом): can → could.',
    },
    frames: [
      { src: 'I can’t come to the offsite.', uk: 'Я не можу приїхати на offsite.' },
      { src: 'I wish I could come to the offsite.', uk: 'Шкода, що я не можу приїхати на offsite.' },
      { src: 'If only I could come to the offsite!', uk: 'Ох, якби ж я міг приїхати на offsite!' },
    ],
    trap: {
      wrong: 'I wish I can come to the offsite.',
      why: {
        en: 'can moves back to could after wish.',
        uk: 'Після wish can відступає до could.',
      },
    },
  },
];
