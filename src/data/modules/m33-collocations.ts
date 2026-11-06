import type { Module } from '../types';

/*
 * CHANGED (VA2): M33 · Collocations — Section VI Vocabulary in Action, wave VA2 (figure collocation-spectrum; no sim:
 * a collocation is a lexical habit, nothing to compute). This module teaches the SYSTEM; the cards stay in the Words
 * hub (#/collocations, 203 + the "Which word?" drill) and are linked. Authored EN first, UA second; US English base.
 * Facts: Cambridge returns HTTP 403 to the fetcher, so it was read through search extracts: Collocation (English
 * Grammar Today) — strong collocations are quite fixed and restricted, weak ones pair with many words; typical
 * *heavy rain* vs untypical *thick rain*; the learner entry of *collocation*; the *coffee* collocation page (strong
 * coffee); Collocations in Use excerpt (heavy rain, not strong rain); *shower* — have a shower and take a shower both
 * appear, with NO regional label on the pages read. British Council (grammar b1-b2 + c1 and vocabulary indexes) has
 * NO page on collocations or make / do / take / have.
 * NOT confirmed on a learner site this session (stated without attribution, as tendencies): take = AmE / have = BrE
 * for shower and break (the hub cards say the same; Cambridge's pages read do not label it), *take a decision* as
 * mainly BrE with make the commoner form everywhere (usage blogs + the OED count via Grammarphobia), the placement
 * of examples on the strength scale, the "light verb" analysis, strong vs powerful, the ✕ forms in the tables.
 * No overlap: m34 owns the MEANING axis of make vs do (create vs perform); here only the pairs that axis can't
 * predict.
 */
export const m33: Module = {
  id: 'm33-collocations',
  num: 33,
  section: 's5-vocabulary-in-action',
  order: 3,
  level: 'b2',
  title: { en: 'Collocations', uk: 'Колокації' },
  tagline: {
    en: 'heavy rain, not strong rain; take a photo, not make a photo; attend a meeting, not visit it. Why translating word by word picks the wrong partner, and how to learn words in pairs.',
    uk: 'heavy rain, а не strong rain; take a photo, а не make a photo; attend a meeting, а не visit. Чому дослівний переклад обирає неправильного партнера і як вчити слова парами.',
  },
  readMins: 18,
  mentalModel: {
    en: 'A collocation is a pair of words that go together **by habit, not by logic**. *Strong rain* is perfectly understandable, yet speakers say *heavy rain*; nothing in the meaning of *heavy* predicts it. So grammar can’t help here, and neither can a word-by-word translation: «сильний дощ» gives you the wrong adjective with full confidence. The fix is to change the **unit you store**. Don’t learn *rain* and look for an adjective later; learn **heavy rain** as one piece. Then the right partner arrives by itself when you speak.',
    uk: 'Колокація — це пара слів, що йдуть разом **за звичкою, а не за логікою**. *Strong rain* цілком зрозуміло, але мовці кажуть *heavy rain*; ніщо в значенні *heavy* цього не передбачає. Тож граматика тут не допоможе, і дослівний переклад теж: «сильний дощ» упевнено дає неправильний прикметник. Вихід — змінити **одиницю, яку ви запамʼятовуєте**. Не вчіть *rain*, щоб потім шукати прикметник; вчіть **heavy rain** як одне ціле. Тоді правильний партнер сам приходить, коли ви говорите.',
  },
  topics: [
    // ── 1. MAKE · DO · TAKE · HAVE ─────────────────────────────────────────
    {
      id: 'make-do-take-have',
      title: { en: 'make · do · take · have', uk: 'make · do · take · have' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Cambridge’s learner dictionary defines a collocation as a word or phrase that sounds natural and correct with another word or phrase. Some pairs are looser than others, and Cambridge separates **strong** collocations, where the link is quite fixed and restricted, from **weak** ones, where a word pairs with many others. Beyond them, an idiom no longer means what its words say.',
            uk: 'Learner-словник Cambridge визначає колокацію як слово чи фразу, що звучить природно й правильно з іншим словом чи фразою. Одні пари вільніші за інші, і Cambridge розрізняє **strong** колокації, де звʼязок доволі сталий і обмежений, та **weak**, де слово поєднується з багатьма іншими. А далі — ідіома, яка вже не означає того, що кажуть її слова.',
          },
        },
        {
          kind: 'figure',
          fig: 'collocation-spectrum',
          caption: {
            en: 'From a free combination to an idiom: the further down, the fewer the choices. The Collocations tab covers the two middle steps, the Idioms tab the last one.',
            uk: 'Від вільного сполучення до ідіоми: що нижче, то менше вибору. Вкладка Collocations охоплює два середні кроки, вкладка Idioms — останній.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Many everyday collocations are built on four very common verbs. For *make* vs *do*, [m34](#/m/m34-confusables) gives you the axis: *make* creates a result, *do* performs an activity. **That axis stops working as soon as Ukrainian says «зробити» and English says neither.** The table below holds exactly those cases; for the others, follow the axis and browse [the make / do cards](#/collocations).',
            uk: 'Багато повсякденних колокацій побудовані на чотирьох дуже поширених дієсловах. Для *make* vs *do* вісь дає [m34](#/m/m34-confusables): *make* створює результат, *do* виконує дію. **Ця вісь перестає працювати, щойно українська каже «зробити», а англійська — жодне з них.** У таблиці нижче саме такі випадки; для решти користуйтеся віссю і переглядайте [картки make / do](#/collocations).',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'Where a Ukrainian verb points to the wrong English one. AmE first; variants in the last column.',
            uk: 'Де українське дієслово веде до неправильного англійського. Спершу AmE; варіанти в останньому стовпці.',
          },
          head: [
            { en: 'Ukrainian', uk: 'Українською' },
            { en: '✓ English', uk: '✓ Англійською' },
            { en: '✕ The calque', uk: '✕ Калька' },
            { en: 'Note', uk: 'Примітка' },
          ],
          rows: [
            [
              { en: 'зробити фото / скріншот', uk: 'зробити фото / скріншот' },
              { en: '[take a photo](#/collocations/take-a-photo) / a screenshot', uk: '[take a photo](#/collocations/take-a-photo) / a screenshot' },
              { en: 'make a photo', uk: 'make a photo' },
              { en: 'The trap m34 points to.', uk: 'Пастка, на яку вказує m34.' },
            ],
            [
              { en: 'зробити перерву', uk: 'зробити перерву' },
              { en: '[take a break](#/collocations/take-a-break)', uk: '[take a break](#/collocations/take-a-break)' },
              { en: 'make a break', uk: 'make a break' },
              { en: '[have a break](#/collocations/have-a-break) is common in BrE.', uk: '[have a break](#/collocations/have-a-break) поширене в BrE.' },
            ],
            [
              { en: 'глянути', uk: 'глянути' },
              { en: 'take a look', uk: 'take a look' },
              { en: 'make a look · do a look', uk: 'make a look · do a look' },
              { en: '[have a look](#/collocations/have-a-look) is common in BrE.', uk: '[have a look](#/collocations/have-a-look) поширене в BrE.' },
            ],
            [
              { en: 'записувати, вести нотатки', uk: 'записувати, вести нотатки' },
              { en: '[take notes](#/collocations/take-notes)', uk: '[take notes](#/collocations/take-notes)' },
              { en: 'do notes', uk: 'do notes' },
              { en: 'And [take minutes](#/collocations/take-minutes) in a meeting.', uk: 'І [take minutes](#/collocations/take-minutes) на зустрічі.' },
            ],
            [
              { en: 'прийняти душ', uk: 'прийняти душ' },
              { en: '[take a shower](#/collocations/take-a-shower)', uk: '[take a shower](#/collocations/take-a-shower)' },
              { en: 'accept a shower · do a shower', uk: 'accept a shower · do a shower' },
              { en: 'have a shower is also correct.', uk: 'have a shower теж правильно.' },
            ],
            [
              { en: 'прийняти рішення', uk: 'прийняти рішення' },
              { en: '[make a decision](#/collocations/make-a-decision)', uk: '[make a decision](#/collocations/make-a-decision)' },
              { en: 'accept a decision', uk: 'accept a decision' },
              { en: 'take a decision is a mainly BrE variant.', uk: 'take a decision — переважно британський варіант.' },
            ],
            [
              { en: 'пообідати', uk: 'пообідати' },
              { en: '[have lunch](#/collocations/have-lunch)', uk: '[have lunch](#/collocations/have-lunch)' },
              { en: 'eat a lunch', uk: 'eat a lunch' },
              { en: 'No article: have lunch.', uk: 'Без артикля: have lunch.' },
            ],
            [
              { en: 'провести зустріч', uk: 'провести зустріч' },
              { en: '[hold a meeting](#/collocations/hold-a-meeting) · have a meeting', uk: '[hold a meeting](#/collocations/hold-a-meeting) · have a meeting' },
              { en: 'make a meeting · do a meeting', uk: 'make a meeting · do a meeting' },
              { en: 'hold is more formal; have is everyday.', uk: 'hold — офіційніше; have — повсякденне.' },
            ],
          ],
        },
        {
          kind: 'table',
          caption: {
            en: 'Tendencies, not rules. They help you remember a pair; they won’t generate one.',
            uk: 'Тенденції, а не правила. Вони допомагають запамʼятати пару, але не створять її.',
          },
          head: [
            { en: 'Verb', uk: 'Дієслово' },
            { en: 'Leans toward', uk: 'Тяжіє до' },
            { en: 'Cards', uk: 'Картки' },
          ],
          rows: [
            [
              { en: 'make', uk: 'make' },
              { en: 'a result (axis: m34)', uk: 'результату (вісь: m34)' },
              { en: '[a mistake](#/collocations/make-a-mistake) · [progress](#/collocations/make-progress) · [an effort](#/collocations/make-an-effort) · [sense](#/collocations/make-sense)', uk: '[a mistake](#/collocations/make-a-mistake) · [progress](#/collocations/make-progress) · [an effort](#/collocations/make-an-effort) · [sense](#/collocations/make-sense)' },
            ],
            [
              { en: 'do', uk: 'do' },
              { en: 'an activity (axis: m34)', uk: 'дії (вісь: m34)' },
              { en: '[research](#/collocations/do-research) · [business](#/collocations/do-business) · [a favor](#/collocations/do-a-favor) · [your best](#/collocations/do-your-best)', uk: '[research](#/collocations/do-research) · [business](#/collocations/do-business) · [a favor](#/collocations/do-a-favor) · [your best](#/collocations/do-your-best)' },
            ],
            [
              { en: 'take', uk: 'take' },
              { en: 'an action you choose to step into', uk: 'дії, у яку ви свідомо вступаєте' },
              { en: '[responsibility](#/collocations/take-responsibility) · [the initiative](#/collocations/take-initiative) · [a chance](#/collocations/take-a-chance) · [a nap](#/collocations/take-a-nap)', uk: '[responsibility](#/collocations/take-responsibility) · [the initiative](#/collocations/take-initiative) · [a chance](#/collocations/take-a-chance) · [a nap](#/collocations/take-a-nap)' },
            ],
            [
              { en: 'have', uk: 'have' },
              { en: 'something you experience', uk: 'того, що ви переживаєте' },
              { en: '[a problem](#/collocations/have-a-problem) · [a good time](#/collocations/have-a-good-time) · [lunch](#/collocations/have-lunch)', uk: '[a problem](#/collocations/have-a-problem) · [a good time](#/collocations/have-a-good-time) · [lunch](#/collocations/have-lunch)' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Why these verbs feel empty.** In *have a look, take a shower, make a decision* the verb carries little meaning; the noun does the work, and a plain verb often exists next to it: *look, shower, decide*. Linguists call this a **light verb**. So the question is not what *take* means here. It is which verb this noun wants, and that is a fact about the noun.',
            uk: '**Чому ці дієслова здаються порожніми.** У *have a look, take a shower, make a decision* дієслово майже не несе змісту; працює іменник, а поруч часто є просте дієслово: *look, shower, decide*. Лінгвісти називають це **light verb**. Тож питання не в тому, що тут означає *take*. Питання в тому, якого дієслова хоче цей іменник, і це факт про іменник.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: AmE and BrE', uk: 'Дрібний шрифт: AmE і BrE' },
          md: {
            en: 'This guide’s base is American English: *take a shower, take a break, take a look, do the dishes*. British speakers often say *have a shower, have a break, have a look*, and [do the washing-up](#/collocations/do-the-washing-up). Treat that as a tendency: Cambridge lists *take / have a shower* together with no regional label. *Take a decision* is mainly British, and even there [make a decision](#/collocations/make-a-decision) is the commoner form, so it is safe everywhere.',
            uk: 'База цього посібника — американська англійська: *take a shower, take a break, take a look, do the dishes*. Британці часто кажуть *have a shower, have a break, have a look* і [do the washing-up](#/collocations/do-the-washing-up). Сприймайте це як тенденцію: Cambridge подає *take / have a shower* разом, без регіональної позначки. *Take a decision* — переважно британське, але й там [make a decision](#/collocations/make-a-decision) трапляється частіше, тож воно безпечне всюди.',
          },
        },
      ],
    },

    // ── 2. STRONG COLLOCATIONS ─────────────────────────────────────────────
    {
      id: 'strong-collocations',
      title: { en: 'Strong collocations: one «сильний», many English words', uk: 'Сильні колокації: один «сильний», багато англійських слів' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Cambridge’s example of an untypical pair is *thick rain*: the typical one is *heavy rain*. Ukrainian «сильний» is especially treacherous, because it covers what English divides between *heavy, strong, severe* and more. And *big* is not a safe default either: it is about size and importance, and *big rain* isn’t English.',
            uk: 'Приклад нетипової пари в Cambridge — *thick rain*: типова — *heavy rain*. Український «сильний» особливо підступний, бо охоплює те, що англійська ділить між *heavy, strong, severe* та іншими. І *big* теж не безпечний варіант за замовчуванням: він про розмір і важливість, а *big rain* — це не англійська.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Ukrainian', uk: 'Українською' },
            { en: '✓ English', uk: '✓ Англійською' },
            { en: '✕ Not', uk: '✕ Не так' },
          ],
          rows: [
            [{ en: 'сильний дощ', uk: 'сильний дощ' }, { en: '[heavy rain](#/collocations/heavy-rain)', uk: '[heavy rain](#/collocations/heavy-rain)' }, { en: 'strong rain · big rain · thick rain', uk: 'strong rain · big rain · thick rain' }],
            [{ en: 'сильний вітер', uk: 'сильний вітер' }, { en: '[strong wind](#/collocations/strong-wind)', uk: '[strong wind](#/collocations/strong-wind)' }, { en: 'thick wind · hard wind', uk: 'thick wind · hard wind' }],
            [{ en: 'міцна кава', uk: 'міцна кава' }, { en: '[strong coffee](#/collocations/strong-coffee)', uk: '[strong coffee](#/collocations/strong-coffee)' }, { en: 'powerful coffee · hard coffee', uk: 'powerful coffee · hard coffee' }],
            [{ en: 'сильний трафік, затори', uk: 'сильний трафік, затори' }, { en: 'heavy traffic', uk: 'heavy traffic' }, { en: 'strong traffic · big traffic', uk: 'strong traffic · big traffic' }],
            [{ en: 'сильний акцент', uk: 'сильний акцент' }, { en: '[strong accent](#/collocations/strong-accent)', uk: '[strong accent](#/collocations/strong-accent)' }, { en: 'big accent', uk: 'big accent' }],
            [{ en: 'сильний біль', uk: 'сильний біль' }, { en: 'severe pain · bad pain', uk: 'severe pain · bad pain' }, { en: 'heavy pain · hard pain', uk: 'heavy pain · hard pain' }],
            [{ en: 'важка праця', uk: 'важка праця' }, { en: '[hard work](#/collocations/hard-work)', uk: '[hard work](#/collocations/hard-work)' }, { en: 'heavy work · strong work', uk: 'heavy work · strong work' }],
            [{ en: 'висока температура', uk: 'висока температура' }, { en: '[high temperature](#/collocations/high-temperature)', uk: '[high temperature](#/collocations/high-temperature)' }, { en: 'big temperature', uk: 'big temperature' }],
            [{ en: 'міцний сон', uk: 'міцний сон' }, { en: '[deep sleep](#/collocations/deep-sleep)', uk: '[deep sleep](#/collocations/deep-sleep)' }, { en: 'strong sleep', uk: 'strong sleep' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Don’t assume the partner carries over', uk: 'Не вважайте, що партнер переноситься' },
          md: {
            en: 'A pair that works with one noun tells you nothing about its near synonym: *heavy rain* but *strong wind*, though both are weather. The same goes for *strong* and *powerful*: *strong coffee, strong accent*, but *a powerful server, a powerful engine*. Check each noun on its own.',
            uk: 'Пара, що працює з одним іменником, нічого не каже про його близького сусіда: *heavy rain*, але *strong wind*, хоча обидва про погоду. Те саме зі *strong* і *powerful*: *strong coffee, strong accent*, але *a powerful server, a powerful engine*. Перевіряйте кожен іменник окремо.',
          },
        },
        {
          kind: 'table',
          dive: 3,
          caption: {
            en: 'Adverb + adjective pairs work the same way. An extreme adjective such as exhausted prefers utterly or completely to plain very.',
            uk: 'Пари прислівник + прикметник працюють так само. Крайній прикметник на кшталт exhausted краще поєднується з utterly чи completely, ніж із простим very.',
          },
          head: [
            { en: 'Pair', uk: 'Пара' },
            { en: 'Ukrainian', uk: 'Українською' },
            { en: 'Instead of', uk: 'Замість' },
          ],
          rows: [
            [{ en: '[highly likely](#/collocations/highly-likely)', uk: '[highly likely](#/collocations/highly-likely)' }, { en: 'дуже ймовірно', uk: 'дуже ймовірно' }, { en: 'strongly likely', uk: 'strongly likely' }],
            [{ en: '[deeply concerned](#/collocations/deeply-concerned)', uk: '[deeply concerned](#/collocations/deeply-concerned)' }, { en: 'глибоко стурбований', uk: 'глибоко стурбований' }, { en: 'strongly concerned', uk: 'strongly concerned' }],
            [{ en: '[bitterly disappointed](#/collocations/bitterly-disappointed)', uk: '[bitterly disappointed](#/collocations/bitterly-disappointed)' }, { en: 'гірко розчарований', uk: 'гірко розчарований' }, { en: 'heavily disappointed', uk: 'heavily disappointed' }],
            [{ en: '[utterly exhausted](#/collocations/utterly-exhausted)', uk: '[utterly exhausted](#/collocations/utterly-exhausted)' }, { en: 'геть виснажений', uk: 'геть виснажений' }, { en: 'very exhausted', uk: 'very exhausted' }],
            [{ en: '[fully aware](#/collocations/fully-aware)', uk: '[fully aware](#/collocations/fully-aware)' }, { en: 'цілком обізнаний', uk: 'цілком обізнаний' }, { en: 'strongly aware', uk: 'strongly aware' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: the same adjective, a different opposite', uk: 'Дрібний шрифт: той самий прикметник, інша протилежність' },
          md: {
            en: 'A collocation also fixes the opposite. *Heavy rain* is the opposite of *light rain*, *strong coffee* of *weak coffee*, *a strong accent* of *a slight accent*, and *deep sleep* of *light sleep*. So *light* and *weak* are not interchangeable either. Learn the pair of opposites along with the first pair.',
            uk: 'Колокація задає ще й протилежність. *Heavy rain* — протилежність *light rain*, *strong coffee* — *weak coffee*, *a strong accent* — *a slight accent*, а *deep sleep* — *light sleep*. Тож *light* і *weak* теж не взаємозамінні. Вчіть пару протилежностей разом із першою парою.',
          },
        },
      ],
    },

    // ── 3. BUSINESS COLLOCATIONS ───────────────────────────────────────────
    {
      id: 'business-collocations',
      title: { en: 'Business collocations', uk: 'Бізнес-колокації' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'At work, the verb is usually the problem: you know the noun (*deadline, meeting, feedback*) and reach for the wrong verb. So learn the verbs by **situation**. This is the system; the [Collocations tab](#/collocations) has the meetings, business, workplace and soft-skills cards with their example sentences.',
            uk: 'На роботі проблема зазвичай у дієслові: іменник ви знаєте (*deadline, meeting, feedback*), а дієслово берете не те. Тож учіть дієслова за **ситуацією**. Тут система; у [вкладці Collocations](#/collocations) є картки зустрічей, бізнесу, роботи й soft skills із прикладами речень.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Situation', uk: 'Ситуація' },
            { en: '✓ Pairs', uk: '✓ Пари' },
            { en: '✕ Slip or less natural', uk: '✕ Помилка чи менш природно' },
          ],
          rows: [
            [
              { en: 'Meetings', uk: 'Зустрічі' },
              { en: '[hold a meeting](#/collocations/hold-a-meeting) · [take minutes](#/collocations/take-minutes) · [raise concerns](#/collocations/raise-concerns) · [flag an issue](#/collocations/flag-an-issue)', uk: '[hold a meeting](#/collocations/hold-a-meeting) · [take minutes](#/collocations/take-minutes) · [raise concerns](#/collocations/raise-concerns) · [flag an issue](#/collocations/flag-an-issue)' },
              { en: 'visit a meeting → attend a meeting', uk: 'visit a meeting → attend a meeting' },
            ],
            [
              { en: 'Conferences', uk: 'Конференції' },
              { en: '[attend a conference](#/collocations/attend-a-conference) · [give a presentation](#/collocations/give-a-presentation)', uk: '[attend a conference](#/collocations/attend-a-conference) · [give a presentation](#/collocations/give-a-presentation)' },
              { en: 'visit a conference → attend a conference', uk: 'visit a conference → attend a conference' },
            ],
            [
              { en: 'Deadlines, goals', uk: 'Дедлайни, цілі' },
              { en: '[meet a deadline](#/collocations/meet-a-deadline) · [set targets](#/collocations/set-targets) · [hit a target](#/collocations/hit-a-target) · [deliver results](#/collocations/deliver-results)', uk: '[meet a deadline](#/collocations/meet-a-deadline) · [set targets](#/collocations/set-targets) · [hit a target](#/collocations/hit-a-target) · [deliver results](#/collocations/deliver-results)' },
              { en: 'finish a deadline → meet a deadline', uk: 'finish a deadline → meet a deadline' },
            ],
            [
              { en: 'Deals', uk: 'Угоди' },
              { en: '[negotiate terms](#/collocations/negotiate-terms) · [reach an agreement](#/collocations/reach-an-agreement) · [sign a contract](#/collocations/sign-a-contract) · [close a deal](#/collocations/close-a-deal)', uk: '[negotiate terms](#/collocations/negotiate-terms) · [reach an agreement](#/collocations/reach-an-agreement) · [sign a contract](#/collocations/sign-a-contract) · [close a deal](#/collocations/close-a-deal)' },
              { en: 'achieve an agreement → reach an agreement', uk: 'achieve an agreement → reach an agreement' },
            ],
            [
              { en: 'People', uk: 'Люди' },
              { en: '[give feedback](#/collocations/give-feedback) · [delegate tasks](#/collocations/delegate-tasks) · [take responsibility](#/collocations/take-responsibility) · [build rapport](#/collocations/build-rapport)', uk: '[give feedback](#/collocations/give-feedback) · [delegate tasks](#/collocations/delegate-tasks) · [take responsibility](#/collocations/take-responsibility) · [build rapport](#/collocations/build-rapport)' },
              { en: 'give a feedback → give feedback (uncountable)', uk: 'give a feedback → give feedback (незлічуваний)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Відвідати зустріч» → attend, not visit', uk: '«Відвідати зустріч» → attend, а не visit' },
          md: {
            en: 'You *visit* a place or a person. You *attend* an event: a meeting, a conference, a class. In the same way you *reach a conclusion* ([card](#/collocations/reach-a-conclusion)) and *pay attention* ([card](#/collocations/pay-attention)): the Ukrainian verb doesn’t carry over.',
            uk: '*Visit* — це про місце чи людину. *Attend* — про подію: зустріч, конференцію, заняття. Так само *reach a conclusion* ([картка](#/collocations/reach-a-conclusion)) і *pay attention* ([картка](#/collocations/pay-attention)): українське дієслово не переноситься.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Collocations set the register too.** *We hit the target* is at home in a team chat; *We exceeded expectations* ([card](#/collocations/exceed-expectations)) belongs in a review or a report. If a pair sounds too formal or too casual, the problem is often the verb, not the noun. [m29](#/m/m29-subjunctive-formal) has the whole dial.',
            uk: '**Колокації задають і регістр.** *We hit the target* природно в чаті команди; *We exceeded expectations* ([картка](#/collocations/exceed-expectations)) — це для огляду чи звіту. Якщо пара звучить надто офіційно чи надто невимушено, проблема часто в дієслові, а не в іменнику. Весь регулятор — у [m29](#/m/m29-subjunctive-formal).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: “Let’s table this”', uk: 'Дрібний шрифт: «Let’s table this»' },
          md: {
            en: 'One pair means opposite things across the Atlantic. [table a proposal](#/collocations/table-a-proposal) means “put it forward for discussion” in BrE and “postpone it” in AmE. In a mixed team, avoid it: say *put forward a proposal* or *postpone the proposal*.',
            uk: 'Одна пара означає протилежне по різні боки Атлантики. [table a proposal](#/collocations/table-a-proposal) означає «внести на обговорення» в BrE і «відкласти» в AmE. У змішаній команді уникайте її: кажіть *put forward a proposal* або *postpone the proposal*.',
          },
        },
      ],
    },

    // ── 4. STRATEGY ────────────────────────────────────────────────────────
    {
      id: 'collocation-strategy',
      title: { en: 'How to learn collocations', uk: 'Як учити колокації' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'You rarely fail to understand a collocation; you fail to **produce** it. So all the work goes into storing and retrieving pairs, not into reading more of them.',
            uk: 'Колокацію ви рідко не розумієте; ви не можете її **відтворити**. Тож уся робота — зберігати й діставати пари, а не читати їх більше.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Step', uk: 'Крок' },
            { en: 'Do this', uk: 'Що робити' },
            { en: 'Why', uk: 'Чому' },
          ],
          rows: [
            [
              { en: '1 · Notice', uk: '1 · Помічайте' },
              { en: 'When you read, underline the partner, not only the new word: *a **tight** deadline*.', uk: 'Коли читаєте, підкреслюйте партнера, а не лише нове слово: *a **tight** deadline*.' },
              { en: 'You already know the noun.', uk: 'Іменник ви вже знаєте.' },
            ],
            [
              { en: '2 · Store the pair', uk: '2 · Записуйте пару' },
              { en: 'Write *heavy rain*, never *rain*.', uk: 'Записуйте *heavy rain*, а не *rain*.' },
              { en: 'The unit you store is the unit you recall.', uk: 'Що записали, те й пригадаєте.' },
            ],
            [
              { en: '3 · Check before you say it', uk: '3 · Перевіряйте, перш ніж сказати' },
              { en: 'For a doubtful pair, open a dictionary’s collocation page, such as [Cambridge’s page for coffee](https://dictionary.cambridge.org/collocation/english/coffee).', uk: 'Для сумнівної пари відкрийте словникову сторінку колокацій, як-от [сторінку Cambridge для coffee](https://dictionary.cambridge.org/collocation/english/coffee).' },
              { en: 'Translation can’t answer this.', uk: 'Переклад на це не відповість.' },
            ],
            [
              { en: '4 · Drill the choice', uk: '4 · Тренуйте вибір' },
              { en: 'Run the ★ “Which word?” drill in [#/collocations](#/collocations).', uk: 'Запускайте ★ «Which word?» у [#/collocations](#/collocations).' },
              { en: 'It trains exactly the choice that fails.', uk: 'Він тренує саме той вибір, що підводить.' },
            ],
            [
              { en: '5 · Use it this week', uk: '5 · Вживайте цього тижня' },
              { en: 'Pick three pairs for your next meeting or email.', uk: 'Оберіть три пари для наступної зустрічі чи листа.' },
              { en: 'Production is the goal.', uk: 'Мета — відтворення.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Don’t try to learn every card', uk: 'Не намагайтеся вивчити всі картки' },
          md: {
            en: 'Start with the pairs you would actually say this month. If your week is meetings, start with the *meetings* category. A short list you use beats a long list you recognize.',
            uk: 'Почніть із пар, які справді скажете цього місяця. Якщо ваш тиждень — це зустрічі, почніть із категорії *meetings*. Короткий список, яким ви користуєтеся, кращий за довгий, який ви лише впізнаєте.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A collocation is a pair that goes together by habit, not by logic: heavy rain, not strong rain. Grammar can’t predict it, and word-by-word translation picks the wrong partner.',
      uk: 'Колокація — пара, що йде разом за звичкою, а не за логікою: heavy rain, а не strong rain. Граматика її не передбачить, а дослівний переклад обере неправильного партнера.',
    },
    {
      en: 'Word pairs form a scale: free combination → weak → strong collocation → idiom. The further along, the fewer the choices.',
      uk: 'Пари слів утворюють шкалу: вільне сполучення → слабка → сильна колокація → ідіома. Що далі, то менше вибору.',
    },
    {
      en: 'make vs do has an axis (m34). Where Ukrainian says «зробити» and English says take or have, learn the pair: take a photo, take a break, have lunch.',
      uk: 'make vs do має вісь (m34). Де українська каже «зробити», а англійська — take чи have, вчіть пару: take a photo, take a break, have lunch.',
    },
    {
      en: 'Ukrainian «сильний» splits into heavy, strong, severe and more: heavy rain, strong wind, severe pain. big is not a safe default.',
      uk: 'Український «сильний» розщеплюється на heavy, strong, severe та інші: heavy rain, strong wind, severe pain. big — не безпечний варіант за замовчуванням.',
    },
    {
      en: 'At work the verb is usually the problem: attend a meeting, meet a deadline, reach an agreement, give feedback.',
      uk: 'На роботі проблема зазвичай у дієслові: attend a meeting, meet a deadline, reach an agreement, give feedback.',
    },
    {
      en: 'US base: take a shower, take a break. have a shower and have a break are common in BrE; take a decision is a mainly BrE variant of make a decision.',
      uk: 'База — США: take a shower, take a break. have a shower і have a break поширені в BrE; take a decision — переважно британський варіант make a decision.',
    },
    {
      en: 'Change the unit you store: write heavy rain, not rain. Then check doubtful pairs in a dictionary and drill the choice.',
      uk: 'Змініть одиницю, яку записуєте: heavy rain, а не rain. Сумнівні пари перевіряйте у словнику і тренуйте вибір.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“Let me make a photo.”', uk: '«Let me make a photo.»' },
      body: { en: 'Photos are taken: Let me take a photo.', uk: 'Фото — це take: Let me take a photo.' },
    },
    {
      title: { en: '“I did a mistake.”', uk: '«I did a mistake.»' },
      body: { en: 'A mistake is a result: I made a mistake (the axis is in m34).', uk: 'Помилка — це результат: I made a mistake (вісь — у m34).' },
    },
    {
      title: { en: '“There was strong rain.”', uk: '«There was strong rain.»' },
      body: { en: 'Rain is heavy: There was heavy rain. Wind is strong.', uk: 'Дощ — heavy: There was heavy rain. А вітер — strong.' },
    },
    {
      title: { en: '“It was a big rain.”', uk: '«It was a big rain.»' },
      body: { en: 'big isn’t a universal intensifier: heavy rain.', uk: 'big — не універсальний підсилювач: heavy rain.' },
    },
    {
      title: { en: '“I’ll visit the meeting.”', uk: '«I’ll visit the meeting.»' },
      body: { en: 'You attend an event: I’ll attend the meeting.', uk: 'Подію — attend: I’ll attend the meeting.' },
    },
    {
      title: { en: '“Can you give me a feedback?”', uk: '«Can you give me a feedback?»' },
      body: { en: 'feedback is uncountable: Can you give me some feedback?', uk: 'feedback незлічуваний: Can you give me some feedback?' },
    },
    {
      title: { en: '“Let’s make a break.”', uk: '«Let’s make a break.»' },
      body: { en: 'Let’s take a break (BrE also have a break).', uk: 'Let’s take a break (BrE також have a break).' },
    },
    {
      title: { en: '“We accepted the decision” for «прийняли рішення»', uk: '«We accepted the decision» замість «прийняли рішення»' },
      body: { en: 'accept = agree to someone else’s decision. If you decided: We made a decision.', uk: 'accept = погодитися з чужим рішенням. Якщо вирішили ви: We made a decision.' },
    },
  ],
  exercises: [
    {
      id: 'ex-collocations-1',
      kind: 'mcq',
      prompt: { en: 'The flight was delayed because of ___ rain.', uk: 'Рейс затримали через сильний дощ.' },
      options: ['heavy', 'strong', 'big'],
      correct: 0,
      explain: { en: 'Rain is heavy; wind is strong.', uk: 'Дощ — heavy; вітер — strong.' },
      level: 'b2',
      tags: ['collocations', 'strong'],
    },
    {
      id: 'ex-collocations-2',
      kind: 'gap',
      sentence: 'Can you ___ a screenshot of the error?',
      answers: ['take'],
      hint: { en: 'not make', uk: 'не make' },
      explain: { en: 'take a photo / a screenshot.', uk: 'take a photo / a screenshot.' },
      level: 'b2',
      tags: ['collocations', 'make-do-take-have'],
    },
    {
      id: 'ex-collocations-3',
      kind: 'gap',
      sentence: 'We’ve been coding for hours. Let’s ___ a break.',
      answers: ['take', 'have'],
      hint: { en: 'not make', uk: 'не make' },
      explain: { en: 'take a break (AmE and BrE); have a break is common in BrE. Never make a break in this sense.', uk: 'take a break (AmE і BrE); have a break поширене в BrE. У цьому значенні ніколи не make a break.' },
      level: 'b2',
      tags: ['collocations', 'make-do-take-have'],
    },
    {
      id: 'ex-collocations-4',
      kind: 'mcq',
      prompt: { en: 'Which pair is natural?', uk: 'Яка пара природна?' },
      options: ['a strong wind', 'a thick wind', 'a hard wind'],
      correct: 0,
      explain: { en: 'Wind is strong, though rain is heavy. Near neighbors don’t share partners.', uk: 'Вітер — strong, хоча дощ — heavy. Близькі сусіди не мають спільних партнерів.' },
      level: 'b2',
      tags: ['collocations', 'strong'],
    },
    {
      id: 'ex-collocations-5',
      kind: 'gap',
      sentence: 'I need to ___ the meeting at three, so I can’t join your call.',
      answers: ['attend'],
      hint: { en: 'not visit', uk: 'не visit' },
      explain: { en: 'You attend an event; you visit a place or a person.', uk: 'Подію — attend; місце чи людину — visit.' },
      level: 'b2',
      tags: ['collocations', 'business'],
    },
    {
      id: 'ex-collocations-6',
      kind: 'mcq',
      prompt: { en: 'If we start today, we can still ___ the deadline.', uk: 'Якщо почнемо сьогодні, ще встигнемо до дедлайну.' },
      options: ['meet', 'achieve', 'reach out'],
      correct: 0,
      explain: { en: 'meet a deadline: the fixed pair. (reach out = contact someone.)', uk: 'meet a deadline: стала пара. (reach out = звʼязатися з кимось.)' },
      level: 'b2',
      tags: ['collocations', 'business'],
    },
    {
      id: 'ex-collocations-7',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['Can you give me some feedback?', 'Can you give me a feedback?', 'Can you make me a feedback?'],
      correct: 0,
      explain: { en: 'give feedback; feedback is uncountable, so no a.', uk: 'give feedback; feedback незлічуваний, тож без a.' },
      level: 'b2',
      tags: ['collocations', 'business'],
    },
    {
      id: 'ex-collocations-8',
      kind: 'gap',
      sentence: 'After two weeks of talks, we finally ___ an agreement.',
      answers: ['reached'],
      hint: { en: 'the verb that also goes with a conclusion', uk: 'дієслово, що йде й із conclusion' },
      explain: { en: 'reach an agreement, like reach a conclusion.', uk: 'reach an agreement, як і reach a conclusion.' },
      level: 'b2',
      tags: ['collocations', 'business'],
    },
    {
      id: 'ex-collocations-9',
      kind: 'mcq',
      prompt: { en: 'Which is the most natural way to say «ми прийняли рішення»?', uk: 'Як найприродніше сказати «ми прийняли рішення»?' },
      options: ['We made a decision.', 'We accepted a decision.', 'We did a decision.'],
      correct: 0,
      explain: { en: 'make a decision. (BrE also has take a decision.) accept means agreeing to someone else’s.', uk: 'make a decision. (У BrE також take a decision.) accept означає погодитися з чужим.' },
      level: 'b2',
      tags: ['collocations', 'make-do-take-have'],
    },
    {
      id: 'ex-collocations-10',
      kind: 'mcq',
      prompt: { en: 'This laptop has a very ___ processor.', uk: 'Цей ноутбук має дуже потужний процесор.' },
      options: ['powerful', 'strong', 'heavy'],
      correct: 0,
      explain: { en: 'Machines are powerful; coffee and accents are strong.', uk: 'Техніка — powerful; кава й акцент — strong.' },
      level: 'b2',
      tags: ['collocations', 'strong'],
    },
    {
      id: 'ex-collocations-11',
      kind: 'gap',
      sentence: 'After the 3 a.m. incident, the whole team was ___ exhausted.',
      answers: ['utterly', 'completely', 'absolutely', 'totally'],
      hint: { en: 'not very: exhausted is already extreme', uk: 'не very: exhausted уже крайнє' },
      explain: { en: 'An extreme adjective prefers utterly, completely or absolutely to very.', uk: 'Крайній прикметник краще поєднується з utterly, completely чи absolutely, ніж із very.' },
      level: 'b2',
      tags: ['collocations', 'strong'],
    },
    {
      id: 'ex-collocations-12',
      kind: 'mcq',
      prompt: { en: 'Where on the scale is kick the bucket?', uk: 'Де на шкалі стоїть kick the bucket?' },
      options: ['An idiom: the words don’t add up to the meaning.', 'A strong collocation: restricted, but its meaning is clear.', 'A free combination: any word fits.'],
      correct: 0,
      explain: { en: 'It means “to die”, not a kick and not a bucket. That is why it lives in the Idioms tab.', uk: 'Це означає «померти»: тут немає ні удару, ні відра. Тому це у вкладці Idioms.' },
      level: 'b2',
      tags: ['collocations', 'scale'],
    },
    {
      id: 'ex-collocations-13',
      kind: 'gap',
      sentence: 'Can you ___ notes during the demo? I’ll be presenting.',
      answers: ['take'],
      hint: { en: 'the verb that goes with notes in a meeting', uk: 'дієслово, що йде з notes на зустрічі' },
      explain: { en: 'take notes, take minutes.', uk: 'take notes, take minutes.' },
      level: 'b2',
      tags: ['collocations', 'make-do-take-have'],
    },
    {
      id: 'ex-collocations-14',
      kind: 'mcq',
      prompt: { en: 'In a US meeting someone says “Let’s table this.” What do they mean?', uk: 'На зустрічі в США хтось каже «Let’s table this.» Що мається на увазі?' },
      options: ['Let’s postpone it.', 'Let’s discuss it right now.', 'Let’s write it down in a table.'],
      correct: 0,
      explain: { en: 'In AmE, table = postpone. In BrE it means the opposite: put it forward for discussion.', uk: 'В AmE table = відкласти. У BrE навпаки: внести на обговорення.' },
      level: 'b2',
      tags: ['collocations', 'business'],
    },
    {
      id: 'ex-collocations-15',
      kind: 'mcq',
      prompt: { en: 'What is the best thing to write in your notes?', uk: 'Що найкраще записати в нотатки?' },
      options: ['a tight deadline', 'deadline = дедлайн', 'tight = тісний'],
      correct: 0,
      explain: { en: 'Store the pair, and the partner comes back with it.', uk: 'Записуйте пару, і партнер повернеться разом із нею.' },
      level: 'b2',
      tags: ['collocations', 'strategy'],
    },
  ],
  seeAlso: ['m34-confusables', 'm32-phrasal-verbs-system', 'm31-word-formation', 'm29-subjunctive-formal'],
  sources: [
    { title: 'Cambridge Dictionary — Collocation (English Grammar Today)', url: 'https://dictionary.cambridge.org/us/grammar/british-grammar/collocation_2' },
    { title: 'Cambridge Learner’s Dictionary — collocation', url: 'https://dictionary.cambridge.org/dictionary/learner-english/collocation' },
    { title: 'Cambridge Dictionary — coffee collocations', url: 'https://dictionary.cambridge.org/collocation/english/coffee' },
    { title: 'Cambridge Dictionary — shower', url: 'https://dictionary.cambridge.org/dictionary/english/shower' },
    { title: 'Cambridge — Collocations in Use (excerpt)', url: 'https://assets.cambridge.org/97813166/29956/excerpt/9781316629956_excerpt.pdf' },
  ],
};
