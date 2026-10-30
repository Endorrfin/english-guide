// CHANGED (A4): content for the ★ Emphasis Spotlight sim (m27). Every frame AUTHORED. Marks: `|trig` on
// every word of a fronted negative / restrictive adverbial · `|aux` the operator · `|subj` the subject ·
// `|verb` the main verb · `|focus` what a cleft or fronting spotlights · `|conn` the when / than partner.
// Each scenario declares FACTS about its neutral sentence (auxiliary, or simple tense + person; the main
// verb's base and used form; the people in it). The engine (src/lib/emphasis.ts) computes the operator
// (do-support included), the construction and the diagnosis; the golden test proves the last frame of
// every walk is clean and every trap's error raises exactly its issue.
// Rules: British Council C1 (Inversion after negative adverbials · Emphasis: cleft sentences, inversion
// and auxiliaries) and Cambridge (Fronting · Cleft sentences · Word order and focus). US English,
// work/dev lean.
import type { EsScenario } from '../lib/emphasis';

export const ES_SCENARIOS: EsScenario[] = [
  // ── negative inversion ─────────────────────────────────────────────────
  {
    id: 'migration',
    track: 'spotlight',
    kind: 'negative',
    title: { en: 'A clean migration (have)', uk: 'Чиста міграція (have)' },
    facts: { aux: 'have', verb: { base: 'see', form: 'seen' } },
    frames: [
      { src: 'We|subj have|aux never|trig seen|verb such a clean migration.', uk: 'Ми ніколи не бачили такої чистої міграції.' },
      { src: 'Never|trig we|subj have|aux seen|verb such a clean migration.', uk: 'Ніколи ми не бачили такої чистої міграції.' },
      { src: 'Never|trig have|aux we|subj seen|verb such a clean migration.', uk: 'Ніколи ще ми не бачили такої чистої міграції.' },
    ],
  },
  {
    id: 'restore',
    track: 'spotlight',
    kind: 'negative',
    title: { en: 'The restore path (do-support)', uk: 'Шлях відновлення (do-support)' },
    facts: { tense: 'past', verb: { base: 'test', form: 'tested' } },
    frames: [
      { src: 'We|subj seldom|trig tested|verb the restore path.', uk: 'Ми рідко тестували шлях відновлення.' },
      { src: 'Seldom|trig we|subj tested|verb the restore path.', uk: 'Рідко ми тестували шлях відновлення.' },
      { src: 'Seldom|trig did|aux we|subj test|verb the restore path.', uk: 'Рідко коли ми тестували шлях відновлення.' },
    ],
  },
  // ── not only … but ─────────────────────────────────────────────────────
  {
    id: 'bugfix',
    track: 'spotlight',
    kind: 'not-only',
    title: { en: 'A fix and a test (did)', uk: 'Виправлення і тест (did)' },
    facts: { tense: 'past', verb: { base: 'fix', form: 'fixed' } },
    frames: [
      { src: 'We|subj not|trig only|trig fixed|verb the bug but also wrote a regression test.', uk: 'Ми не лише виправили баг, а й написали регресійний тест.' },
      { src: 'Not|trig only|trig we|subj fixed|verb the bug, but we also wrote a regression test.', uk: 'Не лише ми виправили баг, а й написали регресійний тест.' },
      { src: 'Not|trig only|trig did|aux we|subj fix|verb the bug, but we also wrote a regression test.', uk: 'Ми не лише виправили баг, а й написали регресійний тест.' },
    ],
  },
  {
    id: 'vendor',
    track: 'spotlight',
    kind: 'not-only',
    title: { en: 'A vendor that let us down (has)', uk: 'Постачальник, що підвів (has)' },
    facts: { aux: 'has', verb: { base: 'miss', form: 'missed' } },
    frames: [
      { src: 'The vendor|subj has|aux not|trig only|trig missed|verb the deadline but also broken the SLA.', uk: 'Постачальник не лише зірвав дедлайн, а й порушив SLA.' },
      { src: 'Not|trig only|trig the vendor|subj has|aux missed|verb the deadline, but it has also broken the SLA.', uk: 'Не лише постачальник зірвав дедлайн, а й порушив SLA.' },
      { src: 'Not|trig only|trig has|aux the vendor|subj missed|verb the deadline, but it has also broken the SLA.', uk: 'Постачальник не лише зірвав дедлайн, а й порушив SLA.' },
    ],
  },
  // ── it-cleft ───────────────────────────────────────────────────────────
  {
    id: 'anna',
    track: 'spotlight',
    kind: 'it-cleft',
    title: { en: 'Who found the race condition?', uk: 'Хто знайшов race condition?' },
    facts: { tense: 'past', verb: { base: 'find', form: 'found' }, people: ['anna'] },
    frames: [
      { src: 'Anna|subj found|verb the race condition yesterday.', uk: 'Анна знайшла race condition учора.' },
      { src: 'It was Anna|focus who found the race condition yesterday.', uk: 'Саме Анна знайшла race condition учора.' },
      { src: 'It was yesterday|focus that Anna found the race condition.', uk: 'Саме вчора Анна знайшла race condition.' },
    ],
  },
  {
    id: 'index',
    track: 'spotlight',
    kind: 'it-cleft',
    title: { en: 'What slowed down the dashboard?', uk: 'Що сповільнило дашборд?' },
    facts: { tense: 'past', verb: { base: 'slow', form: 'slowed' } },
    frames: [
      { src: 'A missing index|subj slowed|verb down the dashboard.', uk: 'Відсутній індекс сповільнив дашборд.' },
      { src: 'It was a|focus missing|focus index|focus that slowed down the dashboard.', uk: 'Саме відсутній індекс сповільнив дашборд.' },
      { src: 'It was the|focus dashboard|focus that a missing index slowed down.', uk: 'Саме дашборд сповільнив відсутній індекс.' },
    ],
  },
  // ── wh-cleft ───────────────────────────────────────────────────────────
  {
    id: 'rollback',
    track: 'spotlight',
    kind: 'wh-cleft',
    title: { en: 'What we need', uk: 'Що нам потрібно' },
    facts: { tense: 'present', verb: { base: 'need', form: 'need' } },
    frames: [
      { src: 'We|subj need|verb a proper rollback plan.', uk: 'Нам потрібен нормальний план відкату.' },
      { src: 'What we need is a|focus proper|focus rollback|focus plan|focus.', uk: 'Що нам справді потрібно, то це нормальний план відкату.' },
      { src: 'A|focus proper|focus rollback|focus plan|focus is what we need.', uk: 'Нормальний план відкату — ось що нам потрібно.' },
    ],
  },
  {
    id: 'ci',
    track: 'spotlight',
    kind: 'wh-cleft',
    title: { en: 'What I love about the new CI', uk: 'Що мені подобається в новому CI' },
    facts: { tense: 'present', verb: { base: 'love', form: 'love' } },
    frames: [
      { src: 'I|subj love|verb the new CI for its speed.', uk: 'Я люблю новий CI за його швидкість.' },
      { src: 'What I love about the new CI is its|focus speed|focus.', uk: 'Що мені подобається в новому CI, то це його швидкість.' },
      { src: 'Its|focus speed|focus is what I love about the new CI.', uk: 'Його швидкість — ось що мені подобається в новому CI.' },
    ],
  },
  // ── fronting ───────────────────────────────────────────────────────────
  {
    id: 'edge-cases',
    track: 'spotlight',
    kind: 'fronting',
    title: { en: 'The edge cases later', uk: 'Крайні випадки — потім' },
    facts: { aux: 'will', verb: { base: 'handle', form: 'handle' } },
    frames: [
      { src: 'We|subj will|aux handle|verb the edge cases later.', uk: 'Крайні випадки ми опрацюємо пізніше.' },
      { src: 'The|focus edge|focus cases|focus we|subj will|aux handle|verb later.', uk: 'А от крайні випадки ми опрацюємо пізніше.' },
    ],
  },
  {
    id: 'hotfix',
    track: 'spotlight',
    kind: 'fronting',
    title: { en: 'At noon vs not until noon', uk: 'Опівдні vs лише опівдні' },
    facts: { tense: 'past', verb: { base: 'ship', form: 'shipped' } },
    frames: [
      { src: 'We|subj shipped|verb the hotfix at noon.', uk: 'Ми випустили хотфікс опівдні.' },
      { src: 'At|focus noon|focus, we|subj shipped|verb the hotfix.', uk: 'Опівдні ми випустили хотфікс.' },
      { src: 'Not|trig until|trig noon did|aux we|subj ship|verb the hotfix.', uk: 'Лише опівдні ми випустили хотфікс.' },
    ],
  },

  // ── traps ──────────────────────────────────────────────────────────────
  {
    id: 'never-order',
    track: 'traps',
    title: { en: '“Never I have seen…”', uk: '«Never I have seen…»' },
    facts: { aux: 'have', verb: { base: 'see', form: 'seen' } },
    frames: [
      { src: 'Never|trig I|subj have|aux seen|verb such a clean migration.', uk: 'Ніколи я не бачив такої чистої міграції.' },
      { src: 'Never|trig have|aux I|subj seen|verb such a clean migration.', uk: 'Ніколи ще я не бачив такої чистої міграції.' },
      { src: 'I|subj have|aux never|trig seen|verb such a clean migration.', uk: 'Я ніколи не бачив такої чистої міграції.' },
    ],
    why: {
      en: 'Ukrainian word order is free: «Ніколи я не бачив» only moves the stress. In English, moving a negative word to the front switches on question order.',
      uk: 'Порядок слів в українській вільний: «Ніколи я не бачив» лише зміщує наголос. В англійській перенесення заперечного слова на початок вмикає порядок питання.',
    },
  },
  {
    id: 'rarely-do',
    track: 'traps',
    title: { en: '“Rarely we check…”', uk: '«Rarely we check…»' },
    facts: { tense: 'present', verb: { base: 'check', form: 'check' } },
    frames: [
      { src: 'Rarely|trig we|subj check|verb the backups.', uk: 'Рідко ми перевіряємо бекапи.' },
      { src: 'Rarely|trig do|aux we|subj check|verb the backups.', uk: 'Рідко коли ми перевіряємо бекапи.' },
      { src: 'We|subj rarely|trig check|verb the backups.', uk: 'Ми рідко перевіряємо бекапи.' },
    ],
    why: {
      en: 'Ukrainian has no auxiliary to move, so do-support feels invented. It is the same do as in a question: Do we check…? → Rarely do we check….',
      uk: 'В українській немає допоміжного дієслова, яке можна переставити, тож do-support здається вигадкою. Це те саме do, що в питанні: Do we check…? → Rarely do we check….',
    },
  },
  {
    id: 'did-fixed',
    track: 'traps',
    title: { en: '“Not only did we fixed…”', uk: '«Not only did we fixed…»' },
    facts: { tense: 'past', verb: { base: 'fix', form: 'fixed' } },
    frames: [
      { src: 'Not|trig only|trig did|aux we|subj fixed|verb the bug, but we also added a test.', uk: 'Ми не лише виправили баг, а й додали тест.' },
      { src: 'Not|trig only|trig did|aux we|subj fix|verb the bug, but we also added a test.', uk: 'Ми не лише виправили баг, а й додали тест.' },
      { src: 'We|subj not|trig only|trig fixed|verb the bug but also added a test.', uk: 'Ми не лише виправили баг, а й додали тест.' },
    ],
    why: {
      en: 'The past tense is already in did; the verb after it goes back to the base form, as in Did we fix it? Writing fixed marks the past twice.',
      uk: 'Минулий час уже є в did; дієслово після нього повертається до базової форми, як у Did we fix it? Якщо написати fixed, минулий час позначено двічі.',
    },
  },
  {
    id: 'hardly-than',
    track: 'traps',
    title: { en: '“Hardly had we… than…”', uk: '«Hardly had we… than…»' },
    facts: { aux: 'had', verb: { base: 'deploy', form: 'deployed' } },
    frames: [
      { src: 'Hardly|trig had|aux we|subj deployed|verb than|conn the alerts fired.', uk: 'Щойно ми задеплоїли, як спрацювали алерти.' },
      { src: 'Hardly|trig had|aux we|subj deployed|verb when|conn the alerts fired.', uk: 'Щойно ми задеплоїли, як спрацювали алерти.' },
      { src: 'No|trig sooner|trig had|aux we|subj deployed|verb than|conn the alerts fired.', uk: 'Не встигли ми задеплоїти, як спрацювали алерти.' },
    ],
    why: {
      en: 'Ukrainian uses one «як» for both: «щойно …, як» and «не встигли …, як». English splits them: hardly … when, no sooner … than (no sooner is a comparative, hence than).',
      uk: 'Українська має одне «як» для обох: «щойно …, як» і «не встигли …, як». Англійська їх розділяє: hardly … when, no sooner … than (no sooner — порівняльна форма, звідси than).',
    },
  },
  {
    id: 'that-what',
    track: 'traps',
    title: { en: '“That what we need is…”', uk: '«That what we need is…»' },
    facts: { tense: 'present', verb: { base: 'need', form: 'need' } },
    frames: [
      { src: 'That what we need is a proper rollback plan.', uk: 'Те, що нам потрібно, — це нормальний план відкату.' },
      { src: 'What we need is a|focus proper|focus rollback|focus plan|focus.', uk: 'Що нам потрібно, то це нормальний план відкату.' },
      { src: 'We|subj need|verb a proper rollback plan.', uk: 'Нам потрібен нормальний план відкату.' },
    ],
    why: {
      en: '«Те, що…» has two words; English what already contains both (= the thing that). That what translates the Ukrainian word for word.',
      uk: '«Те, що…» має два слова; англійське what уже містить обидва (= the thing that). That what — дослівний переклад з української.',
    },
  },
  {
    id: 'which-anna',
    track: 'traps',
    title: { en: '“It was Anna which…”', uk: '«It was Anna which…»' },
    facts: { tense: 'past', verb: { base: 'find', form: 'found' }, people: ['anna'] },
    frames: [
      { src: 'It was Anna|focus which found the race condition.', uk: 'Саме Анна знайшла race condition.' },
      { src: 'It was Anna|focus who found the race condition.', uk: 'Саме Анна знайшла race condition.' },
      { src: 'It was Anna|focus that found the race condition.', uk: 'Саме Анна знайшла race condition.' },
    ],
    why: {
      en: 'Ukrainian «яка» covers people and things alike, so which slips in. In English, which is for things; a person takes who (or that in a cleft).',
      uk: 'Українське «яка» однаково вживається для людей і речей, тож which пролазить. В англійській which — для речей; людина бере who (або that у cleft).',
    },
  },
];
