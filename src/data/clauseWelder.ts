// CHANGED (A2): content for the ★ Clause Welder sim (m25). Every frame AUTHORED (never generated — a
// generator would happily weld “the PR that Anna opened it”). `|link` marks the shared noun and the
// word sentence 2 used for it; `|rel` marks the relative word. Frames follow JOINT_KINDS / COMMA_KINDS
// order in src/lib/relativeClauses.ts. Rules: Cambridge (Relative clauses: defining and non-defining ·
// Relative pronouns · Whose · Relative clauses referring to a whole sentence) and British Council
// (Relative pronouns and relative clauses). US English, work/dev lean.
import type { RcScenario } from '../lib/relativeClauses';

export const WELD_SCENARIOS: RcScenario[] = [
  // ── subject ───────────────────────────────────────────────────────────
  {
    id: 'engineer',
    track: 'weld',
    joint: 'subject',
    title: { en: 'The new engineer', uk: 'Нова інженерка' },
    shared: 'she',
    frames: [
      { src: 'The engineer|link is sitting next to me. She|link fixed the bug.', uk: 'Інженерка сидить поруч зі мною. Вона виправила баг.' },
      { src: 'The engineer|link who|rel is sitting next to me fixed the bug.', uk: 'Інженерка, яка сидить поруч зі мною, виправила баг.' },
      { src: 'The engineer|link sitting next to me fixed the bug.', uk: 'Інженерка, що сидить поруч зі мною, виправила баг.' },
    ],
    trap: {
      wrong: 'The engineer which is sitting next to me fixed the bug.',
      why: {
        en: 'Ukrainian «який / яка» covers people and things; English splits them: who (or that) for people, which only for things.',
        uk: 'Українське «який / яка» покриває і людей, і речі; англійська розділяє: who (або that) — для людей, which — лише для речей.',
      },
    },
  },
  {
    id: 'bug',
    track: 'weld',
    joint: 'subject',
    title: { en: 'The reported bug', uk: 'Баг із репорту' },
    shared: 'it',
    frames: [
      { src: 'The bug|link was reported yesterday. It|link crashes the app on login.', uk: 'Про баг повідомили вчора. Він кладе застосунок під час входу.' },
      { src: 'The bug|link which|rel was reported yesterday crashes the app on login.', uk: 'Баг, про який повідомили вчора, кладе застосунок під час входу.' },
      { src: 'The bug|link reported yesterday crashes the app on login.', uk: 'Баг, про який повідомили вчора, кладе застосунок під час входу.' },
    ],
    trap: {
      wrong: 'The bug what was reported yesterday crashes the app on login.',
      why: {
        en: '«що» in Ukrainian can introduce this clause, but English what is never a relative pronoun after a noun: which or that.',
        uk: 'Українське «що» може вводити таке речення, але англійське what ніколи не буває relative pronoun після іменника: which або that.',
      },
    },
  },
  // ── object ────────────────────────────────────────────────────────────
  {
    id: 'pr',
    track: 'weld',
    joint: 'object',
    title: { en: 'Anna’s pull request', uk: 'Pull request Анни' },
    shared: 'it',
    frames: [
      { src: 'I reviewed the PR|link. Anna opened it|link yesterday.', uk: 'Я переглянув PR. Анна відкрила його вчора.' },
      { src: 'I reviewed the PR|link that|rel Anna opened yesterday.', uk: 'Я переглянув PR, який Анна відкрила вчора.' },
      { src: 'I reviewed the PR|link Anna opened yesterday.', uk: 'Я переглянув PR, який Анна відкрила вчора.' },
    ],
    trap: {
      wrong: 'I reviewed the PR that Anna opened it yesterday.',
      why: {
        en: 'that already stands for the PR — keeping it repeats the object. Ukrainian never needs «його» here either; the habit comes from welding two sentences without deleting anything.',
        uk: 'that уже означає PR — it повторює додаток. Українською «його» тут теж не потрібне; звичка зʼявляється, коли зварюють два речення, нічого не прибравши.',
      },
    },
  },
  {
    id: 'contractor',
    track: 'weld',
    joint: 'object',
    title: { en: 'The contractor', uk: 'Підрядник' },
    shared: 'him',
    frames: [
      { src: 'The contractor|link is great. We hired him|link last month.', uk: 'Підрядник чудовий. Ми найняли його минулого місяця.' },
      { src: 'The contractor|link who|rel we hired last month is great.', uk: 'Підрядник, якого ми найняли минулого місяця, чудовий.' },
      { src: 'The contractor|link we hired last month is great.', uk: 'Підрядник, якого ми найняли минулого місяця, чудовий.' },
    ],
    trap: {
      wrong: 'The contractor we hired him last month is great.',
      why: {
        en: 'Dropping who is fine; keeping him is not — the gap after hired IS the contractor.',
        uk: 'Прибрати who можна; лишити him — ні: пропуск після hired і Є підрядником.',
      },
    },
  },
  // ── whose ─────────────────────────────────────────────────────────────
  {
    id: 'client',
    track: 'weld',
    joint: 'whose',
    title: { en: 'A locked account', uk: 'Заблокований акаунт' },
    shared: 'her',
    frames: [
      { src: 'We called the client|link. Her|link account was locked.', uk: 'Ми зателефонували клієнтці. Її акаунт заблокували.' },
      { src: 'We called the client|link whose|rel account was locked.', uk: 'Ми зателефонували клієнтці, чий акаунт заблокували.' },
    ],
    trap: {
      wrong: 'We called the client who’s account was locked.',
      why: {
        en: 'who’s = who is / who has. The possessive is whose — they sound the same, so this is a spelling trap, not a grammar one.',
        uk: 'who’s = who is / who has. Присвійне — whose; звучать однаково, тож це пастка правопису, а не граматики.',
      },
    },
  },
  {
    id: 'service',
    track: 'weld',
    joint: 'whose',
    title: { en: 'A noisy service', uk: 'Сервіс із помилками' },
    shared: 'its',
    frames: [
      { src: 'We restarted the service|link. Its|link logs were full of errors.', uk: 'Ми перезапустили сервіс. Його логи були повні помилок.' },
      { src: 'We restarted the service|link whose|rel logs were full of errors.', uk: 'Ми перезапустили сервіс, логи якого були повні помилок.' },
    ],
    trap: {
      wrong: 'We restarted the service which logs were full of errors.',
      why: {
        en: 'Ukrainian «логи якого» suggests which, but possession needs whose — for things too (the formal alternative is “the logs of which”).',
        uk: 'Українське «логи якого» підказує which, але для приналежності потрібне whose — і для речей теж (формальна альтернатива — «the logs of which»).',
      },
    },
  },
  // ── where ─────────────────────────────────────────────────────────────
  {
    id: 'office',
    track: 'weld',
    joint: 'where',
    title: { en: 'The Friday office', uk: 'Пʼятничний офіс' },
    shared: 'it',
    prep: 'in',
    frames: [
      { src: 'This is the office|link. We work in it|link on Fridays.', uk: 'Це офіс. Ми працюємо в ньому по пʼятницях.' },
      { src: 'This is the office|link where|rel we work on Fridays.', uk: 'Це офіс, де ми працюємо по пʼятницях.' },
      { src: 'This is the office|link we work in on Fridays.', uk: 'Це офіс, у якому ми працюємо по пʼятницях.' },
    ],
    trap: {
      wrong: 'This is the office where we work in on Fridays.',
      why: {
        en: 'where already means “in which” — adding in says it twice. Pick one: where we work, or (that) we work in.',
        uk: 'where уже означає «in which» — додане in каже це двічі. Оберіть одне: where we work або (that) we work in.',
      },
    },
  },
  {
    id: 'city',
    track: 'weld',
    joint: 'where',
    title: { en: 'Your home city', uk: 'Рідне місто' },
    shared: 'it',
    prep: 'in',
    frames: [
      { src: 'Lviv is the city|link. I grew up in it|link.', uk: 'Львів — це місто. Я в ньому виріс.' },
      { src: 'Lviv is the city|link where|rel I grew up.', uk: 'Львів — місто, де я виріс.' },
      { src: 'Lviv is the city|link I grew up in.', uk: 'Львів — місто, у якому я виріс.' },
    ],
    trap: {
      wrong: 'Lviv is the city which I grew up.',
      why: {
        en: 'which replaces only it — the in is still needed: the city which I grew up in, the city in which I grew up, or where.',
        uk: 'which замінює лише it — in усе ще потрібне: the city which I grew up in, the city in which I grew up або where.',
      },
    },
  },
  // ── preposition ───────────────────────────────────────────────────────
  {
    id: 'client-call',
    track: 'weld',
    joint: 'prep',
    title: { en: 'Yesterday’s call', uk: 'Вчорашня розмова' },
    shared: 'him',
    prep: 'to',
    frames: [
      { src: 'This is the client|link. I talked to him|link yesterday.', uk: 'Це клієнт. Я говорив із ним учора.' },
      { src: 'This is the client|link I talked to yesterday.', uk: 'Це клієнт, з яким я говорив учора.' },
      { src: 'This is the client|link to whom|rel I talked yesterday.', uk: 'Це клієнт, з яким я говорив учора (формально).' },
    ],
    trap: {
      wrong: 'This is the client to that I talked yesterday.',
      why: {
        en: 'that never follows a preposition. With that, the preposition goes to the end (the client that I talked to); in front, only whom or which.',
        uk: 'that ніколи не стоїть після прийменника. З that прийменник іде в кінець (the client that I talked to); спереду — лише whom або which.',
      },
    },
  },
  {
    id: 'budget',
    track: 'weld',
    joint: 'prep',
    title: { en: 'The March budget', uk: 'Березневий бюджет' },
    shared: 'it',
    prep: 'on',
    frames: [
      { src: 'That is the budget|link. We agreed on it|link in March.', uk: 'Це бюджет. Ми погодили його в березні.' },
      { src: 'That is the budget|link we agreed on in March.', uk: 'Це бюджет, який ми погодили в березні.' },
      { src: 'That is the budget|link on which|rel we agreed in March.', uk: 'Це бюджет, який ми погодили в березні (формально).' },
    ],
    trap: {
      wrong: 'That is the budget we agreed on it in March.',
      why: {
        en: 'The stranded on is right; the it is not — the budget is already the object of on.',
        uk: 'on у кінці — правильно; it — ні: бюджет уже є додатком до on.',
      },
    },
  },
  // ── commas ────────────────────────────────────────────────────────────
  {
    id: 'servers',
    track: 'commas',
    title: { en: 'Patching servers', uk: 'Патч для серверів' },
    set: { noun: { en: 'servers', uk: 'сервери' }, total: 5, picked: 2 },
    frames: [
      { src: 'The servers|link that|rel run Postgres need a patch.', uk: 'Патч потрібен тим серверам, на яких працює Postgres (не всім).' },
      { src: 'The servers|link, which|rel run Postgres, need a patch.', uk: 'Серверам потрібен патч (а Postgres працює на всіх).' },
      { src: 'The servers need a patch, which|rel means downtime tonight.', uk: 'Серверам потрібен патч, а це означає простій сьогодні вночі.' },
    ],
    trap: {
      wrong: 'The servers, that run Postgres, need a patch.',
      why: {
        en: 'In Ukrainian a comma before «які» is always required, so it is easy to add commas by habit. In English the commas change the meaning — and after a comma, that is impossible.',
        uk: 'В українській кома перед «які» обовʼязкова завжди, тож коми легко ставити за звичкою. В англійській коми змінюють зміст — а після коми that неможливе.',
      },
    },
  },
  {
    id: 'developers',
    track: 'commas',
    title: { en: 'A late night', uk: 'Пізній вечір' },
    set: { noun: { en: 'developers', uk: 'розробники' }, total: 5, picked: 3 },
    frames: [
      { src: 'The developers|link who|rel knew about the bug stayed late.', uk: 'Ті розробники, які знали про баг, лишилися допізна (інші — ні).' },
      { src: 'The developers|link, who|rel knew about the bug, stayed late.', uk: 'Розробники (а про баг знали всі) лишилися допізна.' },
      { src: 'The developers stayed late, which|rel nobody expected.', uk: 'Розробники лишилися допізна, чого ніхто не очікував.' },
    ],
    trap: {
      wrong: 'The developers stayed late, what nobody expected.',
      why: {
        en: 'Ukrainian «що / чого» pointing back at a whole clause is which in English — never what.',
        uk: 'Українське «що / чого», яке вказує на все речення, англійською — which, ніколи не what.',
      },
    },
  },
];
