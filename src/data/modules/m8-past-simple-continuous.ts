import type { Module } from '../types';

/*
 * M8 · Past: Simple & Continuous — Section II ★ Tenses (T2, per the S5 plan).
 * The past column of the matrix (m6): a whole finished event → Past Simple ● (19.7% of speech,
 * the #2 form), a process already running → Past Continuous 〜 (the background a shorter event
 * interrupts), plus the two past-habit tools used to / would. Signature visual = the parametric
 * TenseTimeline figure (zone = past). Level a2.
 * Authored EN first, UA second; grammar terms stay English in both languages; examples are US
 * English. Facts verified against Cambridge Dictionary grammar and British Council LearnEnglish
 * (past simple / past continuous / past continuous + past simple / past habits used-to-would) —
 * see `sources`. Dive tags: untagged = 2 🚂 core · 3 🚶 connections/contrasts · 4 🔬 fine print.
 */
export const m8: Module = {
  id: 'm8-past-simple-continuous',
  num: 8,
  section: 's6-tenses',
  order: 3,
  level: 'a2',
  title: { en: 'Past: Simple & Continuous', uk: 'Past: Simple і Continuous' },
  tagline: {
    en: 'The same two moves as the present, shifted left of NOW: a whole finished event (Past Simple) vs a process that was already running (Past Continuous) — plus used to and would for old habits. Put a background and an interruption together and you can tell any story.',
    uk: 'Ті самі два ходи, що й у теперішньому, зсунуті ліворуч від NOW: ціла завершена подія (Past Simple) проти процесу, що вже тривав (Past Continuous) — плюс used to й would для колишніх звичок. Склади тло й переривання разом — і зможеш розповісти будь-яку історію.',
  },
  readMins: 15,
  mentalModel: {
    en: 'For the past, ask the same question, one step left of NOW: a whole finished event at a known time → Past Simple ● (V2 / irregular). A process already in progress back then → Past Continuous 〜 (was/were + V-ing). For old habits that are over, reach for used to (+ would for repeated actions).',
    uk: 'Для минулого постав те саме питання, на крок ліворуч від NOW: ціла завершена подія у відомий час → Past Simple ● (V2 / неправильне). Процес, що вже тривав тоді → Past Continuous 〜 (was/were + V-ing). Для колишніх звичок, яких уже немає, бери used to (+ would для повторюваних дій).',
  },
  topics: [
    // ── 1. FORMS & IRREGULARS ────────────────────────────────────────────────
    {
      id: 'forms-irregulars',
      title: { en: 'The forms: V2 (-ed / irregular) vs was/were + V-ing', uk: 'Форми: V2 (-ed / неправильне) проти was/were + V-ing' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '**Past Simple** has one form for every subject — no *he/she/it* twist this time. Regular verbs add **-ed** (*work → worked, deploy → deployed*); irregular verbs use a memorized **V2** (*go → went, send → sent, write → wrote, leave → left*). The verb *be* is the exception that keeps two forms: **was** (I/he/she/it) and **were** (you/we/they). **Past Continuous** is **was / were + V-ing**: *I was deploying, they were waiting.*',
            uk: '**Past Simple** має одну форму для всіх осіб — цього разу без особливості *he/she/it*. Правильні дієслова додають **-ed** (*work → worked, deploy → deployed*); неправильні беруть завчену **V2** (*go → went, send → sent, write → wrote, leave → left*). Дієслово *be* — виняток, що тримає дві форми: **was** (I/he/she/it) і **were** (you/we/they). **Past Continuous** — це **was / were + V-ing**: *I was deploying, they were waiting.*',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The two past tenses side by side: affirmative +, negative −, question ?. Example verb: work (irregulars differ only in the V2 column).',
            uk: 'Два минулі tenses поруч: стверджувальна +, заперечна −, питальна ?. Приклад: work (неправильні різняться лише у стовпці V2).',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: '● Past Simple', uk: '● Past Simple' },
            { en: '〜 Past Continuous', uk: '〜 Past Continuous' },
          ],
          rows: [
            [
              { en: '+ affirmative', uk: '+ стверджувальна' },
              { en: 'worked · went · sent (V2)', uk: 'worked · went · sent (V2)' },
              { en: 'was / were + working', uk: 'was / were + working' },
            ],
            [
              { en: '− negative', uk: '− заперечна' },
              { en: 'didn’t + work (bare V1)', uk: 'didn’t + work (голе V1)' },
              { en: 'wasn’t / weren’t + working', uk: 'wasn’t / weren’t + working' },
            ],
            [
              { en: '? question', uk: '? питальна' },
              { en: 'Did + subject + work?', uk: 'Did + subject + work?' },
              { en: 'Was / Were + subject + working?', uk: 'Was / Were + subject + working?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Irregular verbs are a list, not a rule', uk: 'Неправильні дієслова — це список, а не правило' },
          md: {
            en: 'About 150 common verbs form the past irregularly (*go → went → gone*, *see → saw → seen*), and there is no shortcut — they are memorized in their three forms (base · V2 · V3). The good news: they are among the most frequent verbs, so you meet them constantly. The **Irregular verbs** trainer (`#/irregular`) drills exactly this set.',
            uk: 'Близько 150 поширених дієслів утворюють минуле неправильно (*go → went → gone*, *see → saw → seen*), і скорочень немає — їх завчають у трьох формах (base · V2 · V3). Гарна новина: це одні з найчастотніших дієслів, тож ти зустрічаєш їх постійно. Тренажер **Irregular verbs** (`#/irregular`) відпрацьовує саме цей набір.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Regular **-ed** has spelling and sound rules worth a glance. Spelling: a silent *-e* just adds *-d* (*like → liked*); consonant + *-y* becomes *-ied* (*try → tried*); a stressed single vowel + consonant doubles it (*stop → stopped, plan → planned*). Pronunciation splits three ways: /t/ after voiceless sounds (*worked, fixed*), /d/ after voiced (*played, deployed*), and /ɪd/ only after *t/d* (*started, needed*) — that third one adds a whole syllable.',
            uk: 'Правильне **-ed** має правила написання й звучання, варті погляду. Написання: німе *-e* просто додає *-d* (*like → liked*); приголосний + *-y* дає *-ied* (*try → tried*); наголошений один голосний + приголосний подвоює його (*stop → stopped, plan → planned*). Вимова ділиться натроє: /t/ після глухих (*worked, fixed*), /d/ після дзвінких (*played, deployed*) і /ɪd/ лише після *t/d* (*started, needed*) — оце третє додає цілий склад.',
          },
        },
      ],
    },

    // ── 2. DID: QUESTIONS & NEGATIVES ────────────────────────────────────────
    {
      id: 'did-questions-negatives',
      title: { en: 'did carries the past — the main verb goes bare', uk: 'did несе минуле — головне дієслово стає голим' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Past Simple questions and negatives work like the present’s *do/does*, one tense back: **did** takes the past, and the **main verb returns to bare V1**. Affirmative *You **went** to the demo* becomes *Did you **go** to the demo?* and *You **didn’t go** to the demo.* The past marker lives on *did* now, so the main verb must not carry it too. This is true for both regular and irregular verbs — *did* does not care.',
            uk: 'Питання й заперечення Past Simple працюють як *do/does* у теперішньому, на крок назад: **did** бере минуле, а **головне дієслово повертається до голого V1**. Стверджувальне *You **went** to the demo* стає *Did you **go** to the demo?* і *You **didn’t go** to the demo.* Показник минулого тепер живе на *did*, тож головне дієслово не має нести його теж. Це чинне і для правильних, і для неправильних — *did* байдуже.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The double-past trap: “Did you went?”', uk: 'Пастка подвійного минулого: «Did you went?»' },
          md: {
            en: 'Marking the past twice is the signature UA-speaker error here: *“Did you **went**?”*, *“She didn’t **came**.”* Once *did/didn’t* is there, drop back to V1: ***Did** you **go**?*, *She **didn’t come**.* One past marker per clause — and in questions and negatives, *did* owns it. (Note: *be* skips *did* entirely — *Were you there?*, *I wasn’t ready*.)',
            uk: 'Позначити минуле двічі — фірмова помилка україномовних тут: *«Did you **went**?»*, *«She didn’t **came**.»* Щойно є *did/didn’t*, повертайся до V1: ***Did** you **go**?*, *She **didn’t come**.* Один показник минулого на клаузу — а в питаннях і запереченнях ним володіє *did*. (Увага: *be* обходить *did* геть — *Were you there?*, *I wasn’t ready*.)',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Present (do / does)', uk: 'Present (do / does)' },
          b: { en: 'Past (did — same move, one step back)', uk: 'Past (did — той самий хід, на крок назад)' },
          rows: [
            [
              { en: 'Question', uk: 'Питання' },
              { en: 'Does she deploy?', uk: 'Does she deploy?' },
              { en: 'Did she deploy?', uk: 'Did she deploy?' },
            ],
            [
              { en: 'Negative', uk: 'Заперечення' },
              { en: 'She doesn’t deploy.', uk: 'She doesn’t deploy.' },
              { en: 'She didn’t deploy.', uk: 'She didn’t deploy.' },
            ],
            [
              { en: 'Main verb', uk: 'Головне дієслово' },
              { en: 'bare V1 (deploy)', uk: 'голе V1 (deploy)' },
              { en: 'bare V1 (deploy) — never V2', uk: 'голе V1 (deploy) — ніколи V2' },
            ],
          ],
        },
      ],
    },

    // ── 3. INTERRUPTED PAST: WHEN / WHILE ────────────────────────────────────
    {
      id: 'interrupted-past-when-while',
      title: { en: 'Background + interruption: when and while', uk: 'Тло + переривання: when і while' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The two past tenses shine together. **Past Continuous** paints the **background** — a longer process already in progress; **Past Simple** drops in the **shorter event** that interrupts it. *I **was deploying** (background) **when** the alert **fired** (interruption).* Typically **when + Past Simple** introduces the short event and **while + Past Continuous** introduces the long one: *While I **was reviewing** the PR, CI **went** red.* Two Past Simple verbs instead would mean plain sequence — first one, then the other.',
            uk: 'Два минулі tenses сяють разом. **Past Continuous** малює **тло** — довший процес, що вже тривав; **Past Simple** вкидає **коротшу подію**, яка його перериває. *I **was deploying** (тло) **when** the alert **fired** (переривання).* Зазвичай **when + Past Simple** вводить коротку подію, а **while + Past Continuous** — довгу: *While I **was reviewing** the PR, CI **went** red.* Два Past Simple натомість означали б просту послідовність — спершу одне, потім інше.',
          },
        },
        {
          kind: 'figure',
          fig: 'timeline-past',
          caption: {
            en: 'The past zone of the TenseTimeline: ● Past Simple is one finished event; 〜 Past Continuous is the background already running. Step to the last beat to see the short event cut into the long one.',
            uk: 'Past-зона TenseTimeline: ● Past Simple — одна завершена подія; 〜 Past Continuous — тло, що вже тривало. Дійди до останнього кроку, щоб побачити, як коротка подія врізається в довгу.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'When the guests arrived, Jane WAS COOKING.', uk: 'When the guests arrived, Jane WAS COOKING.' },
          b: { en: 'When the guests arrived, Jane COOKED.', uk: 'When the guests arrived, Jane COOKED.' },
          rows: [
            [
              { en: 'Cooking vs arriving', uk: 'Готування vs прибуття' },
              { en: 'cooking was already in progress', uk: 'готування вже тривало' },
              { en: 'cooking started after they arrived', uk: 'готування почалося після їхнього приходу' },
            ],
            [
              { en: 'Order', uk: 'Порядок' },
              { en: 'background 〜 wraps the moment', uk: 'тло 〜 огортає момент' },
              { en: 'two events in sequence ● then ●', uk: 'дві події поспіль ● потім ●' },
            ],
            [
              { en: 'The lesson', uk: 'Урок' },
              { en: 'Continuous = the frame around the event', uk: 'Continuous = рамка навколо події' },
              { en: 'Simple + Simple = one after another', uk: 'Simple + Simple = одне за одним' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Don’t flatten the background into Past Simple', uk: 'Не сплющуй тло в Past Simple' },
          md: {
            en: 'UA speakers often use Past Simple for both halves because Ukrainian leans on aspect (доконаний/недоконаний) rather than a separate continuous form. But *“I deployed when the alert fired”* loses the “already in progress” meaning — it sounds like two quick events in a row. Keep the background in **was/were + V-ing**: *I **was deploying** when the alert fired.*',
            uk: 'Україномовні часто ставлять Past Simple в обидві половини, бо українська спирається на вид (доконаний/недоконаний), а не на окрему тривалу форму. Але *«I deployed when the alert fired»* губить зміст «уже тривало» — звучить як дві швидкі події поспіль. Тримай тло в **was/were + V-ing**: *I **was deploying** when the alert fired.*',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: 'Two more jobs for Past Continuous, for recognition. **Parallel processes**: two backgrounds running at once — *While the tests **were running**, I **was writing** the changelog.* And **setting a scene** at the start of a story or incident report: *It **was raining**, the dashboards **were flashing** red, and nobody **was answering** the page.* Both lean on the same “open, unfinished” feel — the frame, not the finished event.',
            uk: 'Ще дві задачі для Past Continuous, для розпізнавання. **Паралельні процеси**: два тла водночас — *While the tests **were running**, I **was writing** the changelog.* І **задавання сцени** на початку історії чи звіту про інцидент: *It **was raining**, the dashboards **were flashing** red, and nobody **was answering** the page.* Обидва спираються на те саме відчуття «відкритого, незавершеного» — рамка, а не готова подія.',
          },
        },
      ],
    },

    // ── 4. USED TO / WOULD ───────────────────────────────────────────────────
    {
      id: 'used-to-would',
      title: { en: 'Old habits: used to and would', uk: 'Колишні звички: used to і would' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'For habits and situations that were true in the past but are **over now**, English adds two tools on top of Past Simple. **used to + V1** covers both **repeated actions** and **past states**: *I **used to** commute two hours a day. There **used to be** a cinema here.* **would + V1** also marks **repeated past actions** — *Every summer we **would** visit our grandparents* — but with one hard limit: it **cannot** describe **past states**. You can’t say *“there would be a cinema”* or *“I would have a car”*; states need **used to**.',
            uk: 'Для звичок і ситуацій, що були в минулому, але вже **скінчилися**, англійська додає два інструменти поверх Past Simple. **used to + V1** покриває і **повторювані дії**, і **минулі стани**: *I **used to** commute two hours a day. There **used to be** a cinema here.* **would + V1** теж позначає **повторювані минулі дії** — *Every summer we **would** visit our grandparents* — але з одним жорстким обмеженням: воно **не може** описувати **минулі стани**. Не можна сказати *«there would be a cinema»* чи *«I would have a car»*; стани потребують **used to**.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'used to — actions AND states', uk: 'used to — дії І стани' },
          b: { en: 'would — repeated actions only', uk: 'would — лише повторювані дії' },
          rows: [
            [
              { en: 'Repeated action', uk: 'Повторювана дія' },
              { en: 'We used to deploy on Fridays. ✓', uk: 'We used to deploy on Fridays. ✓' },
              { en: 'We would deploy on Fridays. ✓', uk: 'We would deploy on Fridays. ✓' },
            ],
            [
              { en: 'Past state', uk: 'Минулий стан' },
              { en: 'I used to have a slow laptop. ✓', uk: 'I used to have a slow laptop. ✓' },
              { en: 'I would have a slow laptop. ✗', uk: 'I would have a slow laptop. ✗' },
            ],
            [
              { en: 'Negative / question', uk: 'Заперечення / питання' },
              { en: 'didn’t use to · Did you use to…?', uk: 'didn’t use to · Did you use to…?' },
              { en: 'wouldn’t (rare for habit)', uk: 'wouldn’t (рідко для звички)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Two small traps: “would” for states, and “use to” spelling', uk: 'Дві дрібні пастки: «would» для станів і написання «use to»' },
          md: {
            en: 'First: don’t use **would** for a past state — *“I would live in Kyiv”* is wrong for a state; say *I **used to** live in Kyiv.* Second: after **did**, the *-d* disappears — the affirmative is *used to*, but the negative/question is *didn’t **use** to* / *Did you **use** to…?* (the past already sits on *did*). In speech they sound identical, so it is a writing trap.',
            uk: 'Перше: не вживай **would** для минулого стану — *«I would live in Kyiv»* хибне для стану; кажи *I **used to** live in Kyiv.* Друге: після **did** *-d* зникає — стверджувальне *used to*, але заперечення/питання *didn’t **use** to* / *Did you **use** to…?* (минуле вже сидить на *did*). У мовленні вони звучать однаково, тож це пастка на письмі.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'When do you actually need these? Often you don’t — plain **Past Simple** already tells the story (*I commuted for years*). Reach for **used to / would** when the **contrast with now** is the point: the habit or state has clearly stopped. And a style note: a paragraph of nothing but *would … would … would* gets monotonous, so writers usually open with *used to* to establish the “this is over” frame, then switch to *would* for the individual repeated actions.',
            uk: 'Коли вони справді потрібні? Часто ні — просте **Past Simple** уже розповідає історію (*I commuted for years*). Бери **used to / would**, коли суть — саме **контраст із «тепер»**: звичка чи стан явно припинилися. І стилістична нотатка: абзац із самих *would … would … would* стає монотонним, тож автори зазвичай відкривають через *used to*, щоб задати рамку «цього вже немає», а тоді переходять на *would* для окремих повторюваних дій.',
          },
        },
      ],
    },
  ],

  keyPoints: [
    {
      en: 'Same two moves as the present, one step back: whole finished event → ● Past Simple (V2 / irregular); process already running → 〜 Past Continuous (was/were + V-ing).',
      uk: 'Ті самі два ходи, що й у теперішньому, на крок назад: ціла завершена подія → ● Past Simple (V2 / неправильне); процес, що вже тривав → 〜 Past Continuous (was/were + V-ing).',
    },
    {
      en: 'Past Simple has one form for all subjects (only be keeps was/were). Regular = -ed; irregular verbs are a memorized list of ~150 (the #/irregular trainer drills them).',
      uk: 'Past Simple має одну форму для всіх осіб (лише be тримає was/were). Правильне = -ed; неправильні — завчений список ~150 (тренажер #/irregular їх відпрацьовує).',
    },
    {
      en: 'In − and ?, did carries the past and the main verb goes bare V1: Did you go? / She didn’t go — never “Did you went”. (be skips did: Were you there?)',
      uk: 'У − та ? did несе минуле, а головне дієслово стає голим V1: Did you go? / She didn’t go — ніколи «Did you went». (be обходить did: Were you there?)',
    },
    {
      en: 'Interrupted past: Past Continuous = the background already in progress, Past Simple = the shorter event that cuts in. when + Past Simple, while + Past Continuous.',
      uk: 'Перерване минуле: Past Continuous = тло, що вже тривало, Past Simple = коротша подія, яка врізається. when + Past Simple, while + Past Continuous.',
    },
    {
      en: 'used to + V1 = past habits AND past states now over; would + V1 = repeated past actions only — never past states.',
      uk: 'used to + V1 = минулі звички І минулі стани, яких уже немає; would + V1 = лише повторювані минулі дії — ніколи минулі стани.',
    },
    {
      en: 'After did, used to loses its -d: didn’t use to / Did you use to…? (the past already sits on did).',
      uk: 'Після did used to втрачає -d: didn’t use to / Did you use to…? (минуле вже сидить на did).',
    },
  ],
  pitfalls: [
    {
      title: { en: '“Did you went?” / “She didn’t came”', uk: '«Did you went?» / «She didn’t came»' },
      body: {
        en: 'Marking the past twice. Once did/didn’t appears, the main verb is bare V1: Did you go? / She didn’t come. The past marker belongs to did in questions and negatives.',
        uk: 'Позначення минулого двічі. Щойно з’являється did/didn’t, головне дієслово — голе V1: Did you go? / She didn’t come. Показник минулого в питаннях і запереченнях належить did.',
      },
    },
    {
      title: { en: '“I deployed when the alert fired” (for a background)', uk: '«I deployed when the alert fired» (для тла)' },
      body: {
        en: 'Two Past Simple verbs read as a sequence. If one action was already in progress, keep it in Past Continuous: I was deploying when the alert fired. Ukrainian aspect makes this easy to flatten.',
        uk: 'Два Past Simple читаються як послідовність. Якщо одна дія вже тривала, тримай її в Past Continuous: I was deploying when the alert fired. Український вид спонукає це сплющувати.',
      },
    },
    {
      title: { en: '“I would live in Kyiv” (a past state)', uk: '«I would live in Kyiv» (минулий стан)' },
      body: {
        en: 'Would cannot describe past states — only repeated actions. For a state use used to: I used to live in Kyiv. (Have, be, live, know, like as states all need used to.)',
        uk: 'Would не описує минулих станів — лише повторювані дії. Для стану вживай used to: I used to live in Kyiv. (Have, be, live, know, like як стани потребують used to.)',
      },
    },
    {
      title: { en: '“I was ready” vs “I were ready”', uk: '«I was ready» проти «I were ready»' },
      body: {
        en: 'be keeps two past forms: was for I/he/she/it, were for you/we/they. I was ready; they were ready. (Were with I appears only in the unreal “If I were…”, m13/m23.)',
        uk: 'be тримає дві минулі форми: was для I/he/she/it, were для you/we/they. I was ready; they were ready. (Were з I з’являється лише в нереальному «If I were…», m13/m23.)',
      },
    },
    {
      title: { en: '“Did you use**d** to…?”', uk: '«Did you use**d** to…?»' },
      body: {
        en: 'After did, drop the -d: Did you use to commute? / I didn’t use to like tests. The affirmative keeps it: I used to… They sound the same, so it is a spelling trap.',
        uk: 'Після did викинь -d: Did you use to commute? / I didn’t use to like tests. Стверджувальне тримає його: I used to… Звучать однаково, тож це пастка написання.',
      },
    },
    {
      title: { en: 'Using Past Continuous for a whole finished event', uk: 'Past Continuous для цілої завершеної події' },
      body: {
        en: 'A complete action at a point in time is Past Simple, not Continuous: We shipped the release on Thursday (not “were shipping”, unless it was the interrupted background). Continuous is the open frame, Simple is the finished dot.',
        uk: 'Завершена дія в точці часу — це Past Simple, не Continuous: We shipped the release on Thursday (не «were shipping», хіба що це було перерване тло). Continuous — відкрита рамка, Simple — завершена крапка.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-past-simple-continuous-1',
      kind: 'gap',
      sentence: 'We ___ (send) the incident report yesterday.',
      answers: ['sent'],
      hint: { en: 'irregular V2 of send', uk: 'неправильна V2 від send' },
      explain: {
        en: '“Yesterday” = a finished past time → Past Simple; send is irregular: sent.',
        uk: '«Yesterday» = завершений минулий час → Past Simple; send неправильне: sent.',
      },
      level: 'a1',
      tags: ['tenses', 'past', 'simple', 'irregular'],
    },
    {
      id: 'ex-past-simple-continuous-2',
      kind: 'mcq',
      prompt: { en: '“Did you ___ the logs this morning?”', uk: '«Did you ___ the logs this morning?»' },
      options: ['checked', 'check', 'checking'],
      correct: 1,
      explain: {
        en: 'Did already carries the past, so the main verb is bare V1: Did you check…?',
        uk: 'Did уже несе минуле, тож головне дієслово — голе V1: Did you check…?',
      },
      level: 'a1',
      tags: ['tenses', 'past', 'forms'],
    },
    {
      id: 'ex-past-simple-continuous-3',
      kind: 'gap',
      sentence: 'I ___ (deploy) when the alert fired.',
      answers: ['was deploying'],
      hint: { en: 'the background already in progress', uk: 'тло, що вже тривало' },
      explain: {
        en: 'The longer background action interrupted by a short event → Past Continuous: was deploying.',
        uk: 'Довша фонова дія, перервана короткою подією → Past Continuous: was deploying.',
      },
      level: 'a2',
      tags: ['tenses', 'past', 'continuous', 'when-while'],
    },
    {
      id: 'ex-past-simple-continuous-4',
      kind: 'gap',
      sentence: 'While I ___ (review) the PR, CI went red.',
      answers: ['was reviewing'],
      hint: { en: 'while + the long action', uk: 'while + довга дія' },
      explain: {
        en: 'while introduces the ongoing background → Past Continuous: was reviewing.',
        uk: 'while вводить тривале тло → Past Continuous: was reviewing.',
      },
      level: 'a2',
      tags: ['tenses', 'past', 'continuous', 'when-while'],
    },
    {
      id: 'ex-past-simple-continuous-5',
      kind: 'gap',
      sentence: 'We ___ (not / find) the root cause last week.',
      answers: ['did not find', "didn't find"],
      hint: { en: 'negative past → didn’t + V1', uk: 'заперечне минуле → didn’t + V1' },
      explain: {
        en: 'Negative Past Simple: didn’t + bare V1 → didn’t find (never “didn’t found”).',
        uk: 'Заперечне Past Simple: didn’t + голе V1 → didn’t find (ніколи «didn’t found»).',
      },
      level: 'a2',
      tags: ['tenses', 'past', 'simple', 'forms'],
    },
    {
      id: 'ex-past-simple-continuous-6',
      kind: 'mcq',
      prompt: { en: '“When the guests arrived, Jane ___ dinner.” (she started before they came)', uk: '«When the guests arrived, Jane ___ dinner.» (почала до їхнього приходу)' },
      options: ['cooked', 'was cooking', 'cooks'],
      correct: 1,
      explain: {
        en: 'Cooking was already in progress when they arrived → Past Continuous: was cooking. “cooked” would mean she started after.',
        uk: 'Готування вже тривало, коли вони прийшли → Past Continuous: was cooking. «cooked» означало б, що почала після.',
      },
      level: 'a2',
      tags: ['tenses', 'past', 'continuous', 'when-while'],
    },
    {
      id: 'ex-past-simple-continuous-7',
      kind: 'gap',
      sentence: 'At 9 a.m. we ___ (be) still in the retro.',
      answers: ['were'],
      hint: { en: 'we → the past of be', uk: 'we → минуле від be' },
      explain: {
        en: 'be with we takes were: we were still in the retro.',
        uk: 'be з we бере were: we were still in the retro.',
      },
      level: 'a1',
      tags: ['tenses', 'past', 'be'],
    },
    {
      id: 'ex-past-simple-continuous-8',
      kind: 'mcq',
      prompt: { en: '“There ___ a cinema on this street.” (a past situation, now gone)', uk: '«There ___ a cinema on this street.» (минула ситуація, якої вже немає)' },
      options: ['would be', 'used to be', 'use to be'],
      correct: 1,
      explain: {
        en: 'A past state needs used to (not would): There used to be a cinema here.',
        uk: 'Минулий стан потребує used to (не would): There used to be a cinema here.',
      },
      level: 'a2',
      tags: ['tenses', 'past', 'used-to'],
    },
    {
      id: 'ex-past-simple-continuous-9',
      kind: 'mcq',
      prompt: { en: '“I ___ two hours a day” — which best shows the habit has stopped?', uk: '«I ___ two hours a day» — що найкраще показує, що звичка припинилася?' },
      options: ['commuted', 'used to commute', 'commute'],
      correct: 1,
      explain: {
        en: 'used to marks a past habit that is now over: I used to commute two hours a day.',
        uk: 'used to позначає минулу звичку, якої вже немає: I used to commute two hours a day.',
      },
      level: 'a2',
      tags: ['tenses', 'past', 'used-to'],
    },
    {
      id: 'ex-past-simple-continuous-10',
      kind: 'mcq',
      prompt: { en: 'Which question is correct?', uk: 'Яке питання правильне?' },
      options: ['Did you went to the demo?', 'Did you go to the demo?', 'Did you goed to the demo?'],
      correct: 1,
      explain: {
        en: 'did carries the past; the main verb is bare V1: Did you go to the demo?',
        uk: 'did несе минуле; головне дієслово — голе V1: Did you go to the demo?',
      },
      level: 'a1',
      tags: ['tenses', 'past', 'forms'],
    },
    {
      id: 'ex-past-simple-continuous-11',
      kind: 'gap',
      sentence: 'The service crashed while it ___ (handle) a traffic spike.',
      answers: ['was handling'],
      hint: { en: 'the background process during the crash', uk: 'фоновий процес під час падіння' },
      explain: {
        en: 'The ongoing background at the moment of the crash → Past Continuous: was handling.',
        uk: 'Тривале тло в момент падіння → Past Continuous: was handling.',
      },
      level: 'a2',
      tags: ['tenses', 'past', 'continuous', 'when-while'],
    },
    {
      id: 'ex-past-simple-continuous-12',
      kind: 'mcq',
      prompt: { en: '“Every summer we ___ visit our grandparents.” Which option(s) work?', uk: '«Every summer we ___ visit our grandparents.» Який варіант(и) підходить?' },
      options: ['only would visit', 'only used to visit', 'both would visit and used to visit'],
      correct: 2,
      explain: {
        en: 'A repeated past action allows both: would visit and used to visit are correct here (it’s an action, not a state).',
        uk: 'Повторювана минула дія дозволяє обидва: would visit і used to visit тут правильні (це дія, не стан).',
      },
      level: 'b1',
      tags: ['tenses', 'past', 'used-to'],
    },
    {
      id: 'ex-past-simple-continuous-13',
      kind: 'gap',
      sentence: 'She ___ (leave) the meeting early to catch a train.',
      answers: ['left'],
      hint: { en: 'irregular V2 of leave', uk: 'неправильна V2 від leave' },
      explain: {
        en: 'A whole finished event → Past Simple; leave is irregular: left.',
        uk: 'Ціла завершена подія → Past Simple; leave неправильне: left.',
      },
      level: 'a1',
      tags: ['tenses', 'past', 'simple', 'irregular'],
    },
    {
      id: 'ex-past-simple-continuous-14',
      kind: 'mcq',
      prompt: { en: '“I ___ exhausted after the on-call week.”', uk: '«I ___ exhausted after the on-call week.»' },
      options: ['were', 'was', 'was being'],
      correct: 1,
      explain: {
        en: 'be with I takes was: I was exhausted. (“was being” would suggest deliberate temporary behavior.)',
        uk: 'be з I бере was: I was exhausted. («was being» натякало б на навмисну тимчасову поведінку.)',
      },
      level: 'a1',
      tags: ['tenses', 'past', 'be'],
    },
  ],
  seeAlso: [
    'm6-tense-system',
    'm7-present-simple-continuous',
    'm9-future-forms',
    'm10-perfect-family',
  ],
  sources: [
    { title: 'Cambridge Dictionary — Past simple (I worked)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/past-simple-i-worked' },
    { title: 'Cambridge Dictionary — Past continuous (I was working)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/past-continuous-i-was-working' },
    { title: 'British Council LearnEnglish — Past continuous and past simple', url: 'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar/past-continuous-past-simple' },
    { title: 'British Council LearnEnglish — Past continuous', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-continuous' },
    { title: 'British Council LearnEnglish — Past habits: used to, would and past simple', url: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-habits-used-to-would-past-simple' },
  ],
};
