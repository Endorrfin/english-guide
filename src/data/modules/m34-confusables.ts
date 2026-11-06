import type { Module } from '../types';

/*
 * CHANGED (VA1): M34 · Confusables UA speakers mix — Section VI Vocabulary in Action, wave VA1 (figure
 * say-tell-frames; no sim — owner decision VA1: a confusable is a LEXICAL choice, nothing to compute, so a
 * figure + tables + drills do the job). Authored EN first, UA second; US English base.
 * Facts verified against Cambridge (Say or tell? — tell takes an indirect object, say does not in indirect
 * speech · Speak or talk? — speak is more formal; speak a language; talk implies a listener, a
 * conversation · Collocation: make/give a speech, not do/say · Affect or effect? — affect is the verb,
 * effect mainly the noun (have an effect on); formal verb effect = bring about · the dictionary entry
 * impact, verb, "mainly US", impact (on) · Advice or advise? — advice is an uncountable noun, advise the
 * verb · Easily confused words — economic / economical, do / make; lose is a verb, loose an adjective).
 * Cambridge returns HTTP 403 to the fetcher, so it was read through search extracts. NOT confirmed on a
 * learner site this session (stated without attribution): quite = fairly vs completely by the adjective,
 * and the AmE "quite = very" tendency; sensible / sensitive; effective / efficient; BrE "quitted".
 * No overlap with m33: make-do here is the MEANING split (create vs perform); the full make / do / take /
 * have collocation lists are m33's job — this module only links there.
 * Every word discussed already has a card in the Words hub — the module links to #/definitions/<id>.
 */
export const m34: Module = {
  id: 'm34-confusables',
  num: 34,
  section: 's5-vocabulary-in-action',
  order: 4,
  level: 'b1',
  title: { en: 'Confusables UA speakers mix', uk: 'Confusables, які плутають україномовні' },
  tagline: {
    en: 'say me or tell me? make a photo? affect on? quite or quiet? — one Ukrainian word, two or three English ones, and the one question that separates them.',
    uk: 'say me чи tell me? make a photo? affect on? quite чи quiet? — одне українське слово, два-три англійські, і одне питання, що їх розводить.',
  },
  readMins: 18,
  mentalModel: {
    en: 'A confusable is **one Ukrainian word that English splits** — «казати» → *say · tell · speak · talk*, «робити» → *make · do*, «впливати / вплив» → *affect · effect · influence · impact*. The split always runs along **one axis**, and once you know the axis the choice is mechanical. The axis is the **grammar frame** (*tell* needs the listener right after it, *say* does not), the **meaning** (*make* produces something, *do* performs an activity), the **part of speech** (*affect* is a verb, *effect* a noun; *advise* / *advice*; *lose* / *loose*) or just **spelling and sound** (*quite / quiet / quit*). So for each pair, don’t memorize sentences — learn the axis and the one test question.',
    uk: 'Confusable — це **одне українське слово, яке англійська розщеплює**: «казати» → *say · tell · speak · talk*, «робити» → *make · do*, «впливати / вплив» → *affect · effect · influence · impact*. Розщеплення завжди йде по **одній осі**, і коли ви знаєте вісь, вибір стає механічним. Віссю буває **граматична рамка** (*tell* потребує слухача одразу після себе, *say* — ні), **зміст** (*make* створює щось, *do* виконує дію), **частина мови** (*affect* — дієслово, *effect* — іменник; *advise* / *advice*; *lose* / *loose*) або просто **правопис і звучання** (*quite / quiet / quit*). Тож для кожної пари не зубріть речення — вивчіть вісь і одне тестове питання.',
  },
  topics: [
    // ── 1. SAY · TELL · SPEAK · TALK ───────────────────────────────────────
    {
      id: 'say-tell-speak',
      title: { en: 'say · tell · speak · talk', uk: 'say · tell · speak · talk' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'All four translate as «казати / говорити»; the **frame** tells them apart. [tell](#/definitions/tell) takes the **listener** directly: *tell me, tell the team*. [say](#/definitions/say) takes the **words** or a *that*-clause, and the listener only with *to*: *say hello, say that …, say something to her*. Cambridge: in indirect speech we never use an indirect object with *say*, and we always use one with *tell*. [speak](#/definitions/speak) is the more formal verb and the one for **languages**; [talk](#/definitions/talk) is a **conversation** with at least one listener.',
            uk: 'Усі чотири перекладаються як «казати / говорити»; розрізняє їх **рамка**. [tell](#/definitions/tell) бере **слухача** напряму: *tell me, tell the team*. [say](#/definitions/say) бере **слова** чи *that*-клаузу, а слухача — лише з *to*: *say hello, say that …, say something to her*. Cambridge: у непрямій мові з *say* ніколи не вживають непрямого додатка, а з *tell* — завжди. [speak](#/definitions/speak) — офіційніше дієслово і те, що вживають для **мов**; [talk](#/definitions/talk) — це **розмова** щонайменше з одним слухачем.',
          },
        },
        {
          kind: 'figure',
          fig: 'say-tell-frames',
          caption: {
            en: 'Say · Tell · Speak · Talk: the verb, the frame that must follow it, a correct sentence and the typical slip. The quick test at the bottom settles most cases.',
            uk: 'Say · Tell · Speak · Talk: дієслово, рамка, що має йти після нього, правильне речення і типова помилка. Швидкий тест унизу вирішує більшість випадків.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Verb', uk: 'Дієслово' },
            { en: 'Frame', uk: 'Рамка' },
            { en: 'Fixed phrases', uk: 'Сталі вирази' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'say', uk: 'say' },
              { en: 'say + words / that … · say sth to sb', uk: 'say + слова / that … · say sth to sb' },
              { en: 'say hello · say yes / no · say sorry · say a few words', uk: 'say hello · say yes / no · say sorry · say a few words' },
              { en: 'The PM said the release is on track.', uk: 'The PM said the release is on track.' },
            ],
            [
              { en: 'tell', uk: 'tell' },
              { en: 'tell + sb + (that) … · tell sb to do sth', uk: 'tell + sb + (that) … · tell sb to do sth' },
              { en: 'tell the truth · tell a lie · tell a story · tell the difference', uk: 'tell the truth · tell a lie · tell a story · tell the difference' },
              { en: 'The PM told us the release is on track.', uk: 'The PM told us the release is on track.' },
            ],
            [
              { en: 'speak', uk: 'speak' },
              { en: 'speak + language · speak to / with sb · speak at an event', uk: 'speak + мова · speak to / with sb · speak at an event' },
              { en: 'speak up · speaking of … · generally speaking', uk: 'speak up · speaking of … · generally speaking' },
              { en: 'She speaks three languages.', uk: 'She speaks three languages.' },
            ],
            [
              { en: 'talk', uk: 'talk' },
              { en: 'talk to / with sb · talk about sth', uk: 'talk to / with sb · talk about sth' },
              { en: 'talk shop · small talk · give a talk', uk: 'talk shop · small talk · give a talk' },
              { en: 'Let’s talk about the budget after lunch.', uk: 'Let’s talk about the budget after lunch.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Скажи мені» → tell me, not say me', uk: '«Скажи мені» → tell me, а не say me' },
          md: {
            en: 'Ukrainian «скажи мені» puts the listener right after the verb — and so does English, but with ***tell***: ✓ *Tell me when it’s ready* · ✕ *Say me when it’s ready*. If you want *say*, the listener moves behind *to*: ✓ *Say it to me again* — grammatical, but in reports *told me* is far more natural: *She **told me** (that) the tests passed* rather than *She said to me that …*.',
            uk: 'Українське «скажи мені» ставить слухача одразу після дієслова — англійська теж, але з ***tell***: ✓ *Tell me when it’s ready* · ✕ *Say me when it’s ready*. Якщо хочете *say*, слухач переходить за *to*: ✓ *Say it to me again* — граматично, але в переказі *told me* звучить значно природніше: *She **told me** (that) the tests passed*, а не *She said to me that …*.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'speak', uk: 'speak' },
          b: { en: 'talk', uk: 'talk' },
          rows: [
            [
              { en: 'Register', uk: 'Регістр' },
              { en: 'more formal: May I speak to the manager?', uk: 'офіційніше: May I speak to the manager?' },
              { en: 'everyday: Can I talk to you for a minute?', uk: 'повсякденне: Can I talk to you for a minute?' },
            ],
            [
              { en: 'Languages', uk: 'Мови' },
              { en: '✓ She speaks Polish.', uk: '✓ She speaks Polish.' },
              { en: '✕ She talks Polish.', uk: '✕ She talks Polish.' },
            ],
            [
              { en: 'One-way vs two-way', uk: 'В один бік vs у два' },
              { en: 'one person to an audience: speak at a conference', uk: 'одна людина до аудиторії: speak at a conference' },
              { en: 'a conversation: We talked for an hour.', uk: 'розмова: We talked for an hour.' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Reported speech uses the same frames.** *She said (that) the API was down* · *She told the team (that) the API was down* · *She told us **to** restart the pods* (an instruction: *tell + sb + to*, never ✕ *said us to*). For the tense shifts after *said / told* see [m15](#/m/m15-reported-speech). And a talk you give is a noun: *I’m **giving a talk** at the meetup* — Cambridge also lists *make / give a speech*, never ✕ *do / say a speech*.',
            uk: '**Непряма мова вживає ті самі рамки.** *She said (that) the API was down* · *She told the team (that) the API was down* · *She told us **to** restart the pods* (інструкція: *tell + sb + to*, ніколи ✕ *said us to*). Про зсув часів після *said / told* — [m15](#/m/m15-reported-speech). А доповідь — це іменник: *I’m **giving a talk** at the meetup*; Cambridge також наводить *make / give a speech*, ніколи ✕ *do / say a speech*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: tell without a listener', uk: 'Дрібний шрифт: tell без слухача' },
          md: {
            en: 'A few fixed phrases let *tell* go without the listener: *tell the truth, tell a lie, tell a story, tell a joke*. And *tell* also means **distinguish**: *I can’t **tell** the difference* · *Can you **tell** which build is newer?* — «розрізнити», not «сказати».',
            uk: 'Кілька сталих виразів дозволяють *tell* обійтися без слухача: *tell the truth, tell a lie, tell a story, tell a joke*. А ще *tell* означає **розрізнити**: *I can’t **tell** the difference* · *Can you **tell** which build is newer?* — «розрізнити», а не «сказати».',
          },
        },
      ],
    },

    // ── 2. MAKE · DO ───────────────────────────────────────────────────────
    {
      id: 'make-do',
      title: { en: 'make · do: create vs perform', uk: 'make · do: створити vs виконати' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Both are «робити». The axis is the **result**: [make](#/definitions/make) **produces** something that was not there before — a plan, a decision, a change, a mistake, money, a call. [do](#/definitions/do) **performs** an activity, a task or work — *do a review, do research, do your job, do the dishes* — and it is the general verb for an unnamed activity: *What are you **doing**? · Let’s **do** something about it.* This topic is only the meaning split; the long collocation lists (*make* / *do* / *take* / *have*) live in [m33](#/m/m33-collocations).',
            uk: 'Обидва — «робити». Вісь — **результат**: [make](#/definitions/make) **створює** те, чого раніше не було: план, рішення, зміну, помилку, гроші, дзвінок. [do](#/definitions/do) **виконує** дію, завдання чи роботу — *do a review, do research, do your job, do the dishes* — і це загальне дієслово для неназваної дії: *What are you **doing**? · Let’s **do** something about it.* Ця тема — лише розщеплення змісту; довгі списки колокацій (*make* / *do* / *take* / *have*) живуть у [m33](#/m/m33-collocations).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'make', uk: 'make' },
          b: { en: 'do', uk: 'do' },
          rows: [
            [
              { en: 'Test question', uk: 'Тестове питання' },
              { en: 'Is there a product at the end?', uk: 'Чи є в кінці продукт?' },
              { en: 'Is it an activity / a task you carry out?', uk: 'Це дія / завдання, яке ви виконуєте?' },
            ],
            [
              { en: 'Work examples', uk: 'Робочі приклади' },
              { en: 'make a plan · make a decision · make changes · make a mistake', uk: 'make a plan · make a decision · make changes · make a mistake' },
              { en: 'do a code review · do research · do a task · do the work', uk: 'do a code review · do research · do a task · do the work' },
            ],
            [
              { en: 'UA trap', uk: 'Пастка з української' },
              { en: '✕ do a mistake → ✓ make a mistake', uk: '✕ do a mistake → ✓ make a mistake' },
              { en: '✕ make my homework → ✓ do my homework', uk: '✕ make my homework → ✓ do my homework' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Зробити фото» → take a photo', uk: '«Зробити фото» → take a photo' },
          md: {
            en: '«зробити фото» is neither *make* nor *do*: ✓ ***take** a photo / a screenshot*. The same Ukrainian verb hides a third English one here, which is why fixed pairs are a collocation question — see [m33](#/m/m33-collocations). Two more from the same family: «прийняти рішення» → ***make** a decision* (BrE also *take a decision*), «зробити перерву» → ***take** a break*.',
            uk: '«зробити фото» — ні *make*, ні *do*: ✓ ***take** a photo / a screenshot*. Те саме українське дієслово ховає тут третє англійське, тому сталі пари — питання колокацій, див. [m33](#/m/m33-collocations). Ще два з тієї ж родини: «прийняти рішення» → ***make** a decision* (BrE також *take a decision*), «зробити перерву» → ***take** a break*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Ukrainian', uk: 'Українською' },
            { en: 'English', uk: 'Англійською' },
            { en: 'Why', uk: 'Чому' },
          ],
          rows: [
            [{ en: 'зробити помилку', uk: 'зробити помилку' }, { en: 'make a mistake', uk: 'make a mistake' }, { en: 'the mistake is a result', uk: 'помилка — результат' }],
            [{ en: 'зробити зміни', uk: 'зробити зміни' }, { en: 'make changes', uk: 'make changes' }, { en: 'the change did not exist before', uk: 'зміни раніше не було' }],
            [{ en: 'зробити рев’ю', uk: 'зробити рев’ю' }, { en: 'do a review', uk: 'do a review' }, { en: 'an activity you carry out', uk: 'дія, яку ви виконуєте' }],
            [{ en: 'робити свою роботу', uk: 'робити свою роботу' }, { en: 'do your job', uk: 'do your job' }, { en: 'work = activity', uk: 'робота = дія' }],
            [{ en: 'зробити фото / скріншот', uk: 'зробити фото / скріншот' }, { en: 'take a photo / a screenshot', uk: 'take a photo / a screenshot' }, { en: 'a fixed collocation (m33)', uk: 'стала колокація (m33)' }],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**make + person + verb = «змусити».** *The incident **made us rethink** our alerts* — the bare verb, no *to* (✕ *made us to rethink*; see [m16](#/m/m16-gerund-infinitive)). This *make* is not about producing anything; it is causation, and *do* never has this meaning.',
            uk: '**make + особа + дієслово = «змусити».** *The incident **made us rethink** our alerts* — дієслово без *to* (✕ *made us to rethink*; див. [m16](#/m/m16-gerund-infinitive)). Це *make* нічого не створює; це спонукання, і *do* такого значення не має ніколи.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: “That will do”', uk: 'Дрібний шрифт: «That will do»' },
          md: {
            en: '*do* with *will / won’t* can mean **be enough / acceptable**: *A quick fix **will do** for now* · *A screenshot **won’t do** — we need the logs*. A useful phrase in reviews, and a meaning *make* never has.',
            uk: '*do* з *will / won’t* може означати **вистачати / годитися**: *A quick fix **will do** for now* · *A screenshot **won’t do** — we need the logs*. Корисний вираз на рев’ю, і такого значення *make* не має ніколи.',
          },
        },
      ],
    },

    // ── 3. AFFECT · EFFECT · INFLUENCE · IMPACT ─────────────────────────────
    {
      id: 'affect-effect-influence-impact',
      title: { en: 'affect · effect · influence · impact', uk: 'affect · effect · influence · impact' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'All four are «вплив / впливати»; the axis is the **part of speech** and the **preposition**. [affect](#/definitions/affect) is a **verb** and takes its object directly: *The outage affected 3,000 users*. [effect](#/definitions/effect) is mainly a **noun** — *have an effect **on***. [influence](#/definitions/influence) is both: the verb takes a direct object (*influence the decision*), the noun takes *on* (*have an influence on*). [impact](#/definitions/impact) is mainly a noun (*have an impact on*); Cambridge marks the verb *impact (on)* as **mainly US** — common in American business English, where *affect* is the safe neutral choice.',
            uk: 'Усі чотири — «вплив / впливати»; вісь — **частина мови** і **прийменник**. [affect](#/definitions/affect) — **дієслово** і бере додаток напряму: *The outage affected 3,000 users*. [effect](#/definitions/effect) — здебільшого **іменник**: *have an effect **on***. [influence](#/definitions/influence) — і те, і те: дієслово бере прямий додаток (*influence the decision*), іменник — *on* (*have an influence on*). [impact](#/definitions/impact) — здебільшого іменник (*have an impact on*); дієслово *impact (on)* Cambridge позначає як **mainly US** — воно поширене в американській бізнес-англійській, а *affect* лишається безпечним нейтральним вибором.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Word', uk: 'Слово' },
            { en: 'Verb', uk: 'Дієслово' },
            { en: 'Noun', uk: 'Іменник' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'affect', uk: 'affect' },
              { en: '✓ affect sth (no on)', uk: '✓ affect sth (без on)' },
              { en: '— (only in psychology)', uk: '— (лише в психології)' },
              { en: 'The bug affects only Safari users.', uk: 'The bug affects only Safari users.' },
            ],
            [
              { en: 'effect', uk: 'effect' },
              { en: 'formal: effect change = bring it about', uk: 'офіційно: effect change = здійснити зміну' },
              { en: '✓ an effect on sth', uk: '✓ an effect on sth' },
              { en: 'The cache had a huge effect on latency.', uk: 'The cache had a huge effect on latency.' },
            ],
            [
              { en: 'influence', uk: 'influence' },
              { en: '✓ influence sth (no on)', uk: '✓ influence sth (без on)' },
              { en: '✓ an influence on sth', uk: '✓ an influence on sth' },
              { en: 'Customer feedback influenced the roadmap.', uk: 'Customer feedback influenced the roadmap.' },
            ],
            [
              { en: 'impact', uk: 'impact' },
              { en: 'impact (on) sth — mainly US', uk: 'impact (on) sth — mainly US' },
              { en: '✓ an impact on sth', uk: '✓ an impact on sth' },
              { en: 'The migration had no impact on users.', uk: 'The migration had no impact on users.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«впливає на» → affects, not “affects on”', uk: '«впливає на» → affects, а не «affects on»' },
          md: {
            en: 'Ukrainian «впливати **на**» pulls a preposition in: ✕ *This affects **on** performance* → ✓ *This **affects** performance*. The *on* belongs to the **nouns**: *an effect **on** · an influence **on** · an impact **on***. So: verb → no *on*; noun → *on*. The same goes for *influence*: ✕ *It influenced on the decision* → ✓ *It influenced the decision*.',
            uk: 'Українське «впливати **на**» тягне за собою прийменник: ✕ *This affects **on** performance* → ✓ *This **affects** performance*. *on* належить **іменникам**: *an effect **on** · an influence **on** · an impact **on***. Тож: дієслово → без *on*; іменник → *on*. Те саме з *influence*: ✕ *It influenced on the decision* → ✓ *It influenced the decision*.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'affect (verb)', uk: 'affect (дієслово)' },
          b: { en: 'effect (noun)', uk: 'effect (іменник)' },
          rows: [
            [
              { en: 'Slot', uk: 'Місце' },
              { en: 'after a subject: The change affects …', uk: 'після підмета: The change affects …' },
              { en: 'after a / an / the: a side effect, the effect', uk: 'після a / an / the: a side effect, the effect' },
            ],
            [
              { en: 'Preposition', uk: 'Прийменник' },
              { en: 'none: affects users', uk: 'немає: affects users' },
              { en: 'on: an effect on users', uk: 'on: an effect on users' },
            ],
            [
              { en: 'Memory hook', uk: 'Підказка' },
              { en: 'A for Action (the verb)', uk: 'A — Action (дієслово)' },
              { en: 'E for End result (the noun)', uk: 'E — End result (іменник)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          dive: 3,
          title: { en: '«ефективний»: effective or efficient?', uk: '«ефективний»: effective чи efficient?' },
          md: {
            en: 'Another split from the same root. ***effective*** = it **works**, it gets the result: *an effective fix*. ***efficient*** = it gets the result **without waste** of time, money or resources: *an efficient query*. A fix can be effective but inefficient (it works, but it scans the whole table).',
            uk: 'Ще одне розщеплення того самого кореня. ***effective*** = **працює**, дає результат: *an effective fix*. ***efficient*** = дає результат **без втрат** часу, грошей чи ресурсів: *an efficient query*. Фікс може бути effective, але inefficient (працює, але сканує всю таблицю).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: effect as a verb', uk: 'Дрібний шрифт: effect як дієслово' },
          md: {
            en: 'In formal writing *effect* is also a verb meaning **to bring about**: *The new CTO **effected** major changes* (= made them happen). *affect changes* would mean something else — to influence changes that already exist. In everyday English you can avoid the verb *effect* entirely: *made / brought about major changes*.',
            uk: 'В офіційному письмі *effect* — ще й дієслово зі значенням **здійснити, спричинити**: *The new CTO **effected** major changes* (= здійснив їх). *affect changes* означало б інше — вплинути на зміни, що вже є. У повсякденній англійській дієслова *effect* можна взагалі уникати: *made / brought about major changes*.',
          },
        },
      ],
    },

    // ── 4. QUITE · QUIET · QUIT AND FRIENDS ────────────────────────────────
    {
      id: 'quite-quiet-quit-and-friends',
      title: { en: 'quite · quiet · quit — and friends', uk: 'quite · quiet · quit — і друзі' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Here the axis is **spelling and sound**: the words are not related, they only look alike. [quite](#/definitions/quite) /kwaɪt/ (one syllable, rhymes with *white*) is an **adverb of degree**. [quiet](#/definitions/quiet) /ˈkwaɪ.ət/ (two syllables, *qui-et*) is an **adjective**: not loud. [quit](#/definitions/quit) /kwɪt/ (a short *i*, like *sit*) is a **verb**: stop, leave a job. Read the word aloud — the number of syllables gives it away.',
            uk: 'Тут вісь — **правопис і звучання**: ці слова не споріднені, лише схожі. [quite](#/definitions/quite) /kwaɪt/ (один склад, римується з *white*) — **прислівник ступеня**. [quiet](#/definitions/quiet) /ˈkwaɪ.ət/ (два склади, *qui-et*) — **прикметник**: тихий. [quit](#/definitions/quit) /kwɪt/ (коротке *i*, як у *sit*) — **дієслово**: кинути, звільнитися. Прочитайте слово вголос — кількість складів усе видає.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Word', uk: 'Слово' },
            { en: 'Sound', uk: 'Звучання' },
            { en: 'Part of speech', uk: 'Частина мови' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [{ en: 'quite', uk: 'quite' }, { en: '/kwaɪt/ — 1 syllable', uk: '/kwaɪt/ — 1 склад' }, { en: 'adverb: fairly / completely', uk: 'прислівник: досить / цілком' }, { en: 'The fix was quite simple.', uk: 'The fix was quite simple.' }],
            [{ en: 'quiet', uk: 'quiet' }, { en: '/ˈkwaɪ.ət/ — 2 syllables', uk: '/ˈkwaɪ.ət/ — 2 склади' }, { en: 'adjective: not loud, calm', uk: 'прикметник: тихий, спокійний' }, { en: 'Can we find a quiet room for the call?', uk: 'Can we find a quiet room for the call?' }],
            [{ en: 'quit', uk: 'quit' }, { en: '/kwɪt/ — short i', uk: '/kwɪt/ — коротке i' }, { en: 'verb: stop, leave', uk: 'дієслово: кинути, піти' }, { en: 'He quit his job to start a company.', uk: 'He quit his job to start a company.' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'quite = fairly or completely — the adjective decides', uk: 'quite = досить чи цілком — вирішує прикметник' },
          md: {
            en: 'With an ordinary (gradable) adjective *quite* softens: *quite good* ≈ fairly good. With an absolute (non-gradable) one it means **completely**: *quite right, quite sure, quite impossible*. In American English *quite good* often leans towards *very good*; in British English it often sounds like faint praise — so in feedback to a British colleague, *really good* is the safer compliment.',
            uk: 'Зі звичайним (gradable) прикметником *quite* пом’якшує: *quite good* ≈ досить добре. З абсолютним (non-gradable) означає **цілком**: *quite right, quite sure, quite impossible*. В американській англійській *quite good* часто тяжіє до *very good*; у британській нерідко звучить як стримана похвала — тож у відгуку британському колезі безпечніший комплімент — *really good*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Pair', uk: 'Пара' },
            { en: 'The axis', uk: 'Вісь' },
            { en: '✓ Correct', uk: '✓ Правильно' },
            { en: '✕ Typical slip', uk: '✕ Типова помилка' },
          ],
          rows: [
            [
              { en: 'lose /luːz/ · loose /luːs/', uk: 'lose /luːz/ · loose /luːs/' },
              { en: 'verb (втратити) · adjective (вільний, нещільний)', uk: 'дієслово (втратити) · прикметник (вільний, нещільний)' },
              { en: 'Don’t lose your changes. · a loose cable', uk: 'Don’t lose your changes. · a loose cable' },
              { en: 'Don’t loose your changes.', uk: 'Don’t loose your changes.' },
            ],
            [
              { en: 'advice /ədˈvaɪs/ · advise /ədˈvaɪz/', uk: 'advice /ədˈvaɪs/ · advise /ədˈvaɪz/' },
              { en: 'uncountable noun · verb', uk: 'незлічуваний іменник · дієслово' },
              { en: 'some advice · a piece of advice · I advise you to wait', uk: 'some advice · a piece of advice · I advise you to wait' },
              { en: 'Can you give me an advice? · some advices', uk: 'Can you give me an advice? · some advices' },
            ],
            [
              { en: 'sensible · sensitive', uk: 'sensible · sensitive' },
              { en: 'розсудливий · чутливий', uk: 'розсудливий · чутливий' },
              { en: 'a sensible plan · sensitive data · case-sensitive', uk: 'a sensible plan · sensitive data · case-sensitive' },
              { en: 'Passwords are sensible data.', uk: 'Passwords are sensible data.' },
            ],
            [
              { en: 'economic · economical', uk: 'economic · economical' },
              { en: 'about the economy · saves money', uk: 'про економіку · заощаджує гроші' },
              { en: 'economic growth · an economical instance type', uk: 'economic growth · an economical instance type' },
              { en: 'an economic solution (meaning cheap)', uk: 'an economic solution (у значенні «дешеве»)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'sensible ≠ «сенситивний»', uk: 'sensible ≠ «сенситивний»' },
          md: {
            en: '*sensible* is a false friend: it means **reasonable, practical** (*a sensible default*). «чутливий / конфіденційний» is ***sensitive***: *sensitive data, a sensitive topic, case-sensitive search*. ✕ *Don’t log sensible data* tells the reader not to log reasonable data. Another false friend from the same family — *actually* ≠ «актуально» — is in [m30](#/m/m30-linking-discourse).',
            uk: '*sensible* — хибний друг: означає **розсудливий, практичний** (*a sensible default*). «чутливий / конфіденційний» — це ***sensitive***: *sensitive data, a sensitive topic, case-sensitive search*. ✕ *Don’t log sensible data* каже читачеві не логувати розсудливі дані. Ще один хибний друг з тієї ж родини — *actually* ≠ «актуально» — у [m30](#/m/m30-linking-discourse).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Why the c / s pair is not random.** *advice* (noun) ends in /s/, *advise* (verb) in /z/ — the same pattern as *device / devise*, and *practice / practise* in British English. American English keeps *practice* for both noun and verb; British English writes the verb *practise*. *lose* is also the verb behind the noun ***loss*** (*data loss*), not *lost*, which is its past form.',
            uk: '**Чому пара c / s не випадкова.** *advice* (іменник) закінчується на /s/, *advise* (дієслово) — на /z/; та сама схема, що й *device / devise*, і *practice / practise* у британській англійській. Американська англійська пише *practice* і для іменника, і для дієслова; британська пише дієслово як *practise*. А *lose* — дієслово, від якого іменник ***loss*** (*data loss*), а не *lost* — його минула форма.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: quit – quit – quit', uk: 'Дрібний шрифт: quit – quit – quit' },
          md: {
            en: 'In American English *quit* does not change: *I **quit** last year · I have **quit***. British English uses *quit* too, and dictionaries also list *quitted*, which is rarer. In software, *quit* is the menu word (*Quit app*), *exit* the command-line one — both are fine in a UI string.',
            uk: 'В американській англійській *quit* не змінюється: *I **quit** last year · I have **quit***. Британська теж вживає *quit*, а словники наводять ще й *quitted*, яке трапляється рідше. У софті *quit* — слово з меню (*Quit app*), *exit* — з командного рядка; обидва годяться для UI-рядка.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A confusable is one Ukrainian word that English splits — find the axis (frame · meaning · part of speech · sound) and the choice becomes mechanical.',
      uk: 'Confusable — це одне українське слово, яке англійська розщеплює; знайдіть вісь (рамка · зміст · частина мови · звучання) — і вибір стане механічним.',
    },
    {
      en: 'tell + listener (tell me); say + words / that (say that …, say it to me). speak = languages / formal; talk = conversation.',
      uk: 'tell + слухач (tell me); say + слова / that (say that …, say it to me). speak = мови / офіційно; talk = розмова.',
    },
    {
      en: 'make produces something (a plan, a mistake, a decision); do performs an activity (a review, research, your job). Photos are taken.',
      uk: 'make створює щось (план, помилку, рішення); do виконує дію (рев’ю, дослідження, свою роботу). Фото — take.',
    },
    {
      en: 'affect = verb, no on; effect / influence / impact as nouns take on. The verb impact (on) is mainly US.',
      uk: 'affect = дієслово, без on; effect / influence / impact як іменники беруть on. Дієслово impact (on) — mainly US.',
    },
    {
      en: 'quite /kwaɪt/ adverb · quiet /ˈkwaɪ.ət/ adjective · quit /kwɪt/ verb — count the syllables.',
      uk: 'quite /kwaɪt/ прислівник · quiet /ˈkwaɪ.ət/ прикметник · quit /kwɪt/ дієслово — рахуйте склади.',
    },
    {
      en: 'lose (verb) / loose (adjective) · advice (uncountable noun) / advise (verb) · sensitive data, not sensible · economical = saves money.',
      uk: 'lose (дієслово) / loose (прикметник) · advice (незлічуваний іменник) / advise (дієслово) · sensitive data, а не sensible · economical = заощаджує гроші.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“Say me when it’s ready.”', uk: '«Say me when it’s ready.»' },
      body: { en: 'The listener follows tell: Tell me when it’s ready.', uk: 'Слухач іде після tell: Tell me when it’s ready.' },
    },
    {
      title: { en: '“She talks Polish.”', uk: '«She talks Polish.»' },
      body: { en: 'Languages take speak: She speaks Polish.', uk: 'Мови беруть speak: She speaks Polish.' },
    },
    {
      title: { en: '“Let me make a photo of the board.”', uk: '«Let me make a photo of the board.»' },
      body: { en: 'Photos and screenshots are taken: take a photo (collocations: m33).', uk: 'Фото і скріншоти — take: take a photo (колокації: m33).' },
    },
    {
      title: { en: '“I did a mistake in the config.”', uk: '«I did a mistake in the config.»' },
      body: { en: 'A mistake is a result → make a mistake.', uk: 'Помилка — результат → make a mistake.' },
    },
    {
      title: { en: '“This affects on performance.” · “the effect to users”', uk: '«This affects on performance.» · «the effect to users»' },
      body: { en: 'Verb without on: affects performance. Noun with on: an effect on users.', uk: 'Дієслово без on: affects performance. Іменник з on: an effect on users.' },
    },
    {
      title: { en: '“Please be quite during the demo.”', uk: '«Please be quite during the demo.»' },
      body: { en: 'The adjective is quiet (two syllables): be quiet.', uk: 'Прикметник — quiet (два склади): be quiet.' },
    },
    {
      title: { en: '“Can you give me an advice?” · “Don’t loose your work.”', uk: '«Can you give me an advice?» · «Don’t loose your work.»' },
      body: { en: 'advice is uncountable: some advice / a piece of advice. The verb is lose.', uk: 'advice — незлічуваний: some advice / a piece of advice. Дієслово — lose.' },
    },
  ],
  exercises: [
    {
      id: 'ex-confusables-1',
      kind: 'gap',
      sentence: 'Can you ___ me what happened during the outage?',
      answers: ['tell'],
      hint: { en: 'the listener follows the verb', uk: 'слухач іде після дієслова' },
      explain: { en: 'A listener right after the verb (me) → tell.', uk: 'Слухач одразу після дієслова (me) → tell.' },
      level: 'b1',
      tags: ['confusables', 'say-tell-speak'],
    },
    {
      id: 'ex-confusables-2',
      kind: 'gap',
      sentence: 'The PM ___ that the release was delayed by a week.',
      answers: ['said'],
      hint: { en: 'past, + that-clause', uk: 'минулий час, + that-клауза' },
      explain: { en: 'No listener, a that-clause → say: said that …', uk: 'Слухача немає, є that-клауза → say: said that …' },
      level: 'b1',
      tags: ['confusables', 'say-tell-speak'],
    },
    {
      id: 'ex-confusables-3',
      kind: 'mcq',
      prompt: { en: '«Скажи мені правду.»', uk: '«Скажи мені правду.»' },
      options: ['Tell me the truth.', 'Say me the truth.', 'Speak me the truth.', 'Talk me the truth.'],
      correct: 0,
      explain: { en: 'tell + listener, and tell the truth is a fixed phrase.', uk: 'tell + слухач, а tell the truth — сталий вираз.' },
      level: 'b1',
      tags: ['confusables', 'say-tell-speak'],
    },
    {
      id: 'ex-confusables-4',
      kind: 'gap',
      sentence: 'Do you ___ German? The client is from Munich.',
      answers: ['speak'],
      hint: { en: 'a language', uk: 'мова' },
      explain: { en: 'Languages take speak.', uk: 'Мови беруть speak.' },
      level: 'b1',
      tags: ['confusables', 'say-tell-speak'],
    },
    {
      id: 'ex-confusables-5',
      kind: 'mcq',
      prompt: { en: 'We need to ___ about the roadmap before Friday.', uk: 'Нам треба поговорити про роадмап до пʼятниці.' },
      options: ['talk', 'say', 'tell', 'speak to'],
      correct: 0,
      explain: { en: 'A conversation about something → talk about.', uk: 'Розмова про щось → talk about.' },
      level: 'b1',
      tags: ['confusables', 'say-tell-speak'],
    },
    {
      id: 'ex-confusables-6',
      kind: 'gap',
      sentence: 'Sorry, I ___ a mistake in the config — the fix is on its way.',
      answers: ['made'],
      hint: { en: 'past of make or do?', uk: 'минулий час make чи do?' },
      explain: { en: 'A mistake is a result → make → made.', uk: 'Помилка — результат → make → made.' },
      level: 'b1',
      tags: ['confusables', 'make-do'],
    },
    {
      id: 'ex-confusables-7',
      kind: 'gap',
      sentence: 'Could you ___ a code review of my PR today?',
      answers: ['do'],
      hint: { en: 'an activity', uk: 'дія' },
      explain: { en: 'A review is an activity you carry out → do.', uk: 'Рев’ю — дія, яку ви виконуєте → do.' },
      level: 'b1',
      tags: ['confusables', 'make-do'],
    },
    {
      id: 'ex-confusables-8',
      kind: 'mcq',
      prompt: { en: '«Зроби фото дошки, будь ласка.»', uk: '«Зроби фото дошки, будь ласка.»' },
      options: ['Please take a photo of the whiteboard.', 'Please make a photo of the whiteboard.', 'Please do a photo of the whiteboard.'],
      correct: 0,
      explain: { en: 'Photos are taken — a fixed collocation (see m33).', uk: 'Фото — take; стала колокація (див. m33).' },
      level: 'b1',
      tags: ['confusables', 'make-do'],
    },
    {
      id: 'ex-confusables-9',
      kind: 'mcq',
      prompt: { en: 'We have to ___ a decision about the vendor today.', uk: 'Сьогодні ми маємо ухвалити рішення щодо постачальника.' },
      options: ['make', 'do', 'have'],
      correct: 0,
      explain: { en: 'A decision is a result → make a decision (BrE also take a decision).', uk: 'Рішення — результат → make a decision (BrE також take a decision).' },
      level: 'b1',
      tags: ['confusables', 'make-do'],
    },
    {
      id: 'ex-confusables-10',
      kind: 'gap',
      sentence: 'The outage ___ about 3,000 users. (впливав → past)',
      answers: ['affected'],
      hint: { en: 'the verb', uk: 'дієслово' },
      explain: { en: 'The verb is affect, with a direct object: affected users.', uk: 'Дієслово — affect, з прямим додатком: affected users.' },
      level: 'b1',
      tags: ['confusables', 'affect-effect'],
    },
    {
      id: 'ex-confusables-11',
      kind: 'mcq',
      prompt: { en: 'The new cache had a huge ___ on latency.', uk: 'Новий кеш дуже вплинув на затримку.' },
      options: ['effect', 'affect', 'affection'],
      correct: 0,
      explain: { en: 'a … on → a noun: effect.', uk: 'a … on → іменник: effect.' },
      level: 'b1',
      tags: ['confusables', 'affect-effect'],
    },
    {
      id: 'ex-confusables-12',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['This change affects performance.', 'This change affects on performance.', 'This change effects on performance.'],
      correct: 0,
      explain: { en: 'The verb affect takes its object directly — no on.', uk: 'Дієслово affect бере додаток напряму — без on.' },
      level: 'b1',
      tags: ['confusables', 'affect-effect'],
    },
    {
      id: 'ex-confusables-13',
      kind: 'gap',
      sentence: 'Please keep ___ — we are recording the demo.',
      answers: ['quiet'],
      hint: { en: 'an adjective: not loud', uk: 'прикметник: не гучно' },
      explain: { en: 'quiet (two syllables) is the adjective.', uk: 'quiet (два склади) — прикметник.' },
      level: 'b1',
      tags: ['confusables', 'quite-quiet-quit'],
    },
    {
      id: 'ex-confusables-14',
      kind: 'gap',
      sentence: 'Don’t worry, the test is ___ easy.',
      answers: ['quite'],
      hint: { en: 'an adverb of degree', uk: 'прислівник ступеня' },
      explain: { en: 'quite (one syllable) modifies the adjective: quite easy.', uk: 'quite (один склад) модифікує прикметник: quite easy.' },
      level: 'b1',
      tags: ['confusables', 'quite-quiet-quit'],
    },
    {
      id: 'ex-confusables-15',
      kind: 'gap',
      sentence: 'Commit often, or you may ___ your changes.',
      answers: ['lose'],
      hint: { en: 'the verb', uk: 'дієслово' },
      explain: { en: 'lose (one o) is the verb; loose is an adjective.', uk: 'lose (одна o) — дієслово; loose — прикметник.' },
      level: 'b1',
      tags: ['confusables', 'and-friends'],
    },
    {
      id: 'ex-confusables-16',
      kind: 'mcq',
      prompt: { en: 'Can you give me some ___ on my CV?', uk: 'Можете дати мені пораду щодо мого резюме?' },
      options: ['advice', 'advise', 'advices'],
      correct: 0,
      explain: { en: 'advice is an uncountable noun: some advice, never advices.', uk: 'advice — незлічуваний іменник: some advice, ніколи advices.' },
      level: 'b1',
      tags: ['confusables', 'and-friends'],
    },
    {
      id: 'ex-confusables-17',
      kind: 'mcq',
      prompt: { en: 'Never write passwords to the logs — they are ___ data.', uk: 'Ніколи не пишіть паролі в логи — це конфіденційні дані.' },
      options: ['sensitive', 'sensible', 'sensual'],
      correct: 0,
      explain: { en: '«чутливий / конфіденційний» = sensitive; sensible = reasonable.', uk: '«чутливий / конфіденційний» = sensitive; sensible = розсудливий.' },
      level: 'b1',
      tags: ['confusables', 'and-friends'],
    },
    {
      id: 'ex-confusables-18',
      kind: 'mcq',
      prompt: { en: 'Spot instances are the most ___ option — they cost 70% less.', uk: 'Spot instances — найощадливіший варіант: вони коштують на 70% менше.' },
      options: ['economical', 'economic', 'economy'],
      correct: 0,
      explain: { en: 'Saves money → economical. economic = about the economy.', uk: 'Заощаджує гроші → economical. economic = про економіку.' },
      level: 'b1',
      tags: ['confusables', 'and-friends'],
    },
  ],
  seeAlso: ['m33-collocations', 'm31-word-formation', 'm15-reported-speech', 'm16-gerund-infinitive', 'm30-linking-discourse'],
  sources: [
    { title: 'Cambridge Dictionary — Say or tell?', url: 'https://dictionary.cambridge.org/grammar/british-grammar/say-or-tell' },
    { title: 'Cambridge Dictionary — Speak or talk?', url: 'https://dictionary.cambridge.org/grammar/british-grammar/speak-or-talk' },
    { title: 'Cambridge Dictionary — Collocation: make/give a speech', url: 'https://dictionary.cambridge.org/grammar/british-grammar/collocation-make-give-a-speech' },
    { title: 'Cambridge Dictionary — Affect or effect?', url: 'https://dictionary.cambridge.org/grammar/british-grammar/affect-or-effect' },
    { title: 'Cambridge Dictionary — impact (verb, mainly US)', url: 'https://dictionary.cambridge.org/dictionary/english/impact' },
    { title: 'Cambridge Dictionary — Advice or advise?', url: 'https://dictionary.cambridge.org/grammar/british-grammar/advice-or-advise' },
    { title: 'Cambridge Dictionary — Easily confused words', url: 'https://dictionary.cambridge.org/grammar/british-grammar/easily-confused-words' },
  ],
};
