// CHANGED (A3): content for the ★ Article Tree sim (m28). Each sentence is AUTHORED with its correct
// article marked `|art` (`∅|art` = no article) and declares only FACTS about the noun; the engine
// (src/lib/articles.ts) derives the article from the facts, and scripts/test-article-tree.ts proves the
// derived article equals the authored one. American English (owner decision, A3); the hospital
// sentence is the one place where British English differs, and that BrE answer is computed too.
// Rules: British Council (Articles: 'the' or no article · The definite article · The indefinite
// article) and Cambridge (A/an and the · Place names · hospital: in hospital UK / in the hospital US).
import type { AtPair, AtScenario } from '../lib/articles';

export const AT_SCENARIOS: AtScenario[] = [
  // ── routine phrases → ∅ ───────────────────────────────────────────────
  {
    id: 'prison',
    group: 'routine',
    title: { en: 'Two years in prison', uk: 'Два роки у вʼязниці' },
    src: 'The founder spent two years in ∅|art prison for fraud.',
    uk: 'Засновник відсидів два роки у вʼязниці за шахрайство.',
    facts: { routine: 'prison', count: 'one' },
    trap: {
      wrong: 'The founder spent two years in the prison for fraud.',
      why: {
        en: 'With the, prison is just a building he happened to be in. Serving a sentence is the institution: in prison. Ukrainian has no articles, so the instinct is to add the “to be safe” — here that changes the meaning.',
        uk: 'З the prison — просто будівля, де він опинився. Відбувати покарання — це установа: in prison. В українській артиклів немає, тож хочеться додати the «про всяк випадок» — а тут це змінює зміст.',
      },
    },
  },
  {
    id: 'train',
    group: 'routine',
    title: { en: 'Commuting by train', uk: 'Дорога потягом' },
    src: 'Most of the team commutes by ∅|art train.',
    uk: 'Більшість команди їздить на роботу потягом.',
    facts: { routine: 'transport', count: 'one' },
    trap: {
      wrong: 'Most of the team commutes by the train.',
      why: {
        en: 'by + a means of transport never takes an article: by train, by car, by bus. With a specific vehicle, the preposition changes too: on the 8:15 train, in my car.',
        uk: 'by + вид транспорту ніколи не має артикля: by train, by car, by bus. З конкретним транспортом змінюється й прийменник: on the 8:15 train, in my car.',
      },
    },
  },
  {
    id: 'lunch',
    group: 'routine',
    title: { en: 'Over lunch', uk: 'За обідом' },
    src: 'Let’s go over the roadmap at ∅|art lunch.',
    uk: 'Обговорімо роадмап за обідом.',
    facts: { routine: 'meal', count: 'one' },
    trap: {
      wrong: 'Let’s go over the roadmap at the lunch.',
      why: {
        en: 'Meals in general take no article: at lunch, after dinner, skip breakfast. the lunch is one particular meal: The lunch with the client went well.',
        uk: 'Прийоми їжі загалом без артикля: at lunch, after dinner, skip breakfast. the lunch — конкретний обід: The lunch with the client went well.',
      },
    },
  },
  // ── places & names ────────────────────────────────────────────────────
  {
    id: 'hospital',
    group: 'places',
    title: { en: 'A week in the hospital', uk: 'Тиждень у лікарні' },
    src: 'After the crash, she spent a week in the|art hospital.',
    uk: 'Після аварії вона тиждень пролежала в лікарні.',
    facts: { routine: 'hospital', known: 'shared', count: 'one' },
  },
  {
    id: 'hudson',
    group: 'places',
    title: { en: 'A view of the Hudson', uk: 'Вид на Гудзон' },
    src: 'Our new office overlooks the|art Hudson.',
    uk: 'Наш новий офіс виходить вікнами на Гудзон.',
    facts: { name: 'river', count: 'one' },
    trap: {
      wrong: 'Our new office overlooks Hudson.',
      why: {
        en: 'Rivers keep the even when the word River is dropped: the Hudson, the Mississippi, the Dnipro.',
        uk: 'Річки зберігають the, навіть коли слово River пропущено: the Hudson, the Mississippi, the Dnipro.',
      },
    },
  },
  {
    id: 'tahoe',
    group: 'places',
    title: { en: 'An offsite at Lake Tahoe', uk: 'Виїзна зустріч на озері Тахо' },
    src: 'This year the offsite is at ∅|art Lake Tahoe.',
    uk: 'Цього року виїзна зустріч — на озері Тахо.',
    facts: { name: 'lake', count: 'one' },
    trap: {
      wrong: 'This year the offsite is at the Lake Tahoe.',
      why: {
        en: 'A single lake or mountain takes no article: Lake Tahoe, Mount Rainier. The groups do: the Great Lakes, the Rockies.',
        uk: 'Окреме озеро чи гора — без артикля: Lake Tahoe, Mount Rainier. Групи — з артиклем: the Great Lakes, the Rockies.',
      },
    },
  },
  {
    id: 'netherlands',
    group: 'places',
    title: { en: 'Customers in the Netherlands', uk: 'Клієнти в Нідерландах' },
    src: 'Half of our customers are in the|art Netherlands.',
    uk: 'Половина наших клієнтів — у Нідерландах.',
    facts: { name: 'plural-country', count: 'many' },
    trap: {
      wrong: 'Half of our customers are in Netherlands.',
      why: {
        en: 'Plural country names take the (the Netherlands, the Philippines), and so do United / Republic / Kingdom names. Most countries take nothing: Poland, Canada — and Ukraine, never “the Ukraine”.',
        uk: 'Назви країн у множині беруть the (the Netherlands, the Philippines), так само як назви з United / Republic / Kingdom. Більшість країн — без артикля: Poland, Canada — і Ukraine, ніколи «the Ukraine».',
      },
    },
  },
  // ── general & generic ─────────────────────────────────────────────────
  {
    id: 'trust',
    group: 'generic',
    title: { en: 'Trust after an outage', uk: 'Довіра після збою' },
    src: '∅|art Trust is hard to rebuild after an outage.',
    uk: 'Довіру важко відновити після збою.',
    facts: { count: 'mass' },
    trap: {
      wrong: 'The trust is hard to rebuild after an outage.',
      why: {
        en: 'An abstract noun in a general sense takes no article: Trust · Security · Time. The trust would be one particular trust — the trust our users had in us.',
        uk: 'Абстрактний іменник у загальному значенні — без артикля: Trust · Security · Time. The trust — це конкретна довіра: the trust our users had in us.',
      },
    },
  },
  {
    id: 'engineers',
    group: 'generic',
    title: { en: 'Engineers in general', uk: 'Інженери загалом' },
    src: '∅|art Engineers hate vague tickets.',
    uk: 'Інженери ненавидять розмиті тікети.',
    facts: { count: 'many' },
    trap: {
      wrong: 'The engineers hate vague tickets.',
      why: {
        en: 'The engineers is one particular group — the ones on this team. People or things in general: a plural with no article.',
        uk: 'The engineers — конкретна група, ті, що в цій команді. Люди чи речі загалом: множина без артикля.',
      },
    },
  },
  {
    id: 'smartphone',
    group: 'generic',
    title: { en: 'The smartphone, the invention', uk: 'Смартфон як винахід' },
    src: 'The|art smartphone changed how people read the news.',
    uk: 'Смартфон змінив те, як люди читають новини.',
    facts: { count: 'one', kind: true },
    trap: {
      wrong: 'A smartphone changed how people read the news.',
      why: {
        en: 'A smartphone is one device. For the invention as one idea, use the + singular (the smartphone) — or the plain plural: Smartphones changed how people read the news.',
        uk: 'A smartphone — один пристрій. Для винаходу як одного поняття — the + однина (the smartphone) або просто множина: Smartphones changed how people read the news.',
      },
    },
  },
  // ── a/an vs the ──────────────────────────────────────────────────────
  {
    id: 'docs',
    group: 'nuance',
    title: { en: 'The docs for this API', uk: 'Документація до цього API' },
    src: 'The|art documentation for this API is out of date.',
    uk: 'Документація до цього API застаріла.',
    facts: { count: 'mass', known: 'defined' },
    trap: {
      wrong: 'A documentation for this API is out of date.',
      why: {
        en: 'documentation is uncountable — never a / an (like advice, feedback, information). for this API says which documentation → the.',
        uk: 'documentation незлічуваний — ніколи a / an (як advice, feedback, information). for this API каже, яка саме документація → the.',
      },
    },
  },
  {
    id: 'mvp',
    group: 'nuance',
    title: { en: 'An MVP in six weeks', uk: 'MVP за шість тижнів' },
    src: 'We shipped an|art MVP in six weeks.',
    uk: 'Ми випустили MVP за шість тижнів.',
    facts: { count: 'one' },
    trap: {
      wrong: 'We shipped a MVP in six weeks.',
      why: {
        en: 'a / an follows the SOUND: MVP is read “em-vee-pee”, a vowel sound → an. The same logic: an hour, an SLA — but a user, a URL, a European team.',
        uk: 'a / an іде за ЗВУКОМ: MVP читається «ем-ві-пі», голосний звук → an. Та сама логіка: an hour, an SLA — але a user, a URL, a European team.',
      },
    },
  },
  {
    id: 'fastest',
    group: 'nuance',
    title: { en: 'The fastest build', uk: 'Найшвидша збірка' },
    src: 'This is the|art fastest build we’ve had all year.',
    uk: 'Це найшвидша збірка за весь рік.',
    facts: { count: 'one', known: 'superlative' },
    trap: {
      wrong: 'This is a fastest build we’ve had all year.',
      why: {
        en: 'A superlative picks out exactly one — the fastest, the first, the only. a fastest is never possible.',
        uk: 'Superlative виділяє рівно один — the fastest, the first, the only. a fastest неможливе.',
      },
    },
  },
];

/** Same noun, two contexts: one or two facts change, and the article flips. */
export const AT_PAIRS: AtPair[] = [
  {
    id: 'prison',
    title: { en: 'prison: inmate or visitor', uk: 'prison: увʼязнений чи відвідувач' },
    a: { src: 'Her brother is in ∅|art prison.', uk: 'Її брат у вʼязниці.', facts: { routine: 'prison', count: 'one' } },
    b: {
      src: 'She goes to the|art prison every week to teach coding.',
      uk: 'Вона щотижня ходить до вʼязниці викладати програмування.',
      facts: { routine: 'prison', visitor: true, known: 'shared', count: 'one' },
    },
  },
  {
    id: 'coffee',
    title: { en: 'coffee: in general or this one', uk: 'coffee: загалом чи ця' },
    a: { src: '∅|art Coffee keeps the team alive.', uk: 'Кава тримає команду на ногах.', facts: { count: 'mass' } },
    b: { src: 'The|art coffee in our office is awful.', uk: 'Кава в нашому офісі жахлива.', facts: { count: 'mass', known: 'defined' } },
  },
  {
    id: 'life',
    title: { en: 'life: abstract or defined', uk: 'life: абстрактне чи визначене' },
    a: { src: '∅|art Life is too short for flaky tests.', uk: 'Життя надто коротке для нестабільних тестів.', facts: { count: 'mass' } },
    b: { src: 'The|art life of a freelancer is unpredictable.', uk: 'Життя фрилансера непередбачуване.', facts: { count: 'mass', known: 'defined' } },
  },
  {
    id: 'computer',
    title: { en: 'computer: the invention or one machine', uk: 'computer: винахід чи одна машина' },
    a: { src: 'The|art computer changed how we work.', uk: 'Компʼютер змінив те, як ми працюємо.', facts: { count: 'one', kind: true } },
    b: { src: 'A|art computer in the lab crashed overnight.', uk: 'Один компʼютер у лабораторії вночі впав.', facts: { count: 'one' } },
  },
  {
    id: 'contractor',
    title: { en: 'contractor: first and second mention', uk: 'contractor: перша й друга згадка' },
    a: { src: 'We hired a|art contractor last month.', uk: 'Минулого місяця ми найняли підрядника.', facts: { count: 'one' } },
    b: { src: 'The|art contractor finished the migration early.', uk: 'Підрядник завершив міграцію раніше строку.', facts: { count: 'one', known: 'mentioned' } },
  },
];
