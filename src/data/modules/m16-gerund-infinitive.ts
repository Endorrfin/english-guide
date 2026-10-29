import type { Module } from '../types';

/*
 * CHANGED (C2): M16 · Gerund vs infinitive — Section III Core Grammar. Authored EN first, UA second;
 * grammar terms stay English in both languages; examples are US English with a work/dev lean. Facts
 * verified against Cambridge Grammar (Verb patterns: verb + infinitive or verb + -ing? · Stop + -ing
 * form or to-infinitive · Look forward to · For + -ing · Infinitives with and without to · So that or
 * in order that?) and British Council LearnEnglish (Verbs followed by -ing or infinitive · Verbs
 * followed by -ing or infinitive to change meaning).
 * Spine: the form after a verb belongs to that verb — learn verbs in chunks (enjoy doing · decide to
 * do). Two rules beat everything else: after a preposition, always -ing; and for the verbs that take
 * both forms with a change of meaning, -ing looks BACK and to looks FORWARD.
 */
export const m16: Module = {
  id: 'm16-gerund-infinitive',
  num: 16,
  section: 's2-core-grammar',
  order: 5,
  level: 'b1',
  title: { en: 'Gerund vs infinitive', uk: 'Gerund проти infinitive' },
  tagline: {
    en: 'enjoy working, decide to work, look forward to working, stop working vs stop to work — the form after a verb belongs to the verb. Learn verbs in pairs, and let two rules do the rest.',
    uk: 'enjoy working, decide to work, look forward to working, stop working vs stop to work — форма після дієслова належить самому дієслову. Учіть дієслова парами, а решту зроблять два правила.',
  },
  readMins: 20,
  mentalModel: {
    en: 'When one verb follows another, the FIRST verb chooses the form of the second: -ing (enjoy coding), to + V1 (decide to code), or the bare V1 (make me code). There is a tendency — to + V1 often points at something still ahead (want, plan, decide), -ing at an activity that is already real (enjoy, finish, avoid) — but treat each verb as a chunk. Two rules always win: after a PREPOSITION the verb is -ing (look forward to coding), and for stop / remember / forget / regret the -ing form looks BACK while to looks FORWARD.',
    uk: 'Коли одне дієслово йде за іншим, ПЕРШЕ дієслово обирає форму другого: -ing (enjoy coding), to + V1 (decide to code) або голий V1 (make me code). Є тенденція — to + V1 часто вказує на те, що ще попереду (want, plan, decide), -ing — на діяльність, яка вже реальна (enjoy, finish, avoid), — але сприймайте кожне дієслово як блок. Два правила перемагають завжди: після ПРИЙМЕННИКА дієслово має форму -ing (look forward to coding), а для stop / remember / forget / regret форма -ing дивиться НАЗАД, а to — ВПЕРЕД.',
  },
  topics: [
    // ── 1. VERB PATTERNS ───────────────────────────────────────────────────
    {
      id: 'verb-patterns',
      title: { en: 'Verb patterns: the first verb decides', uk: 'Конструкції: вирішує перше дієслово' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Ukrainian puts an infinitive after almost any verb: *люблю **працювати**, вирішив **працювати**, уникаю **працювати***. English splits these verbs into groups, and the group is a property of the **first** verb. *I **enjoy working** remotely* (-ing) · *I **decided to work** remotely* (to + V1) · *They **let me work** remotely* (bare V1). There is no way to deduce every case — so learn the verb **with its pattern**, as one chunk: *avoid doing, manage to do, let sb do*.',
            uk: 'Українська ставить інфінітив майже після будь-якого дієслова: *люблю **працювати**, вирішив **працювати**, уникаю **працювати***. Англійська ділить ці дієслова на групи, і група — це властивість **першого** дієслова. *I **enjoy working** remotely* (-ing) · *I **decided to work** remotely* (to + V1) · *They **let me work** remotely* (голий V1). Вивести кожен випадок логікою неможливо — тож учіть дієслово **разом із конструкцією**, одним блоком: *avoid doing, manage to do, let sb do*.',
          },
        },
        {
          kind: 'figure',
          fig: 'verb-pattern-map',
          caption: {
            en: 'Four buckets: -ing only · to + V1 only · both with (almost) the same meaning · both with a change of meaning. And one rule above them all: after a preposition, -ing.',
            uk: 'Чотири групи: лише -ing · лише to + V1 · обидві з (майже) тим самим значенням · обидві зі зміною значення. І одне правило над усіма: після прийменника — -ing.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Pattern', uk: 'Конструкція' },
            { en: 'Typical verbs', uk: 'Типові дієслова' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'verb + -ing', uk: 'verb + -ing' },
              { en: 'enjoy · avoid · finish · mind · consider · suggest · keep · admit · deny · can’t stand', uk: 'enjoy · avoid · finish · mind · consider · suggest · keep · admit · deny · can’t stand' },
              { en: 'We finished testing at six.', uk: 'We finished testing at six.' },
            ],
            [
              { en: 'verb + to + V1', uk: 'verb + to + V1' },
              { en: 'want · decide · plan · hope · agree · refuse · manage · offer · promise · need · afford', uk: 'want · decide · plan · hope · agree · refuse · manage · offer · promise · need · afford' },
              { en: 'We can’t afford to miss this deadline.', uk: 'We can’t afford to miss this deadline.' },
            ],
            [
              { en: 'verb + person + to + V1', uk: 'verb + особа + to + V1' },
              { en: 'want · ask · tell · expect · remind · allow · encourage · advise', uk: 'want · ask · tell · expect · remind · allow · encourage · advise' },
              { en: 'I want you to lead the demo.', uk: 'I want you to lead the demo.' },
            ],
            [
              { en: 'verb + person + V1 (no to)', uk: 'verb + особа + V1 (без to)' },
              { en: 'make · let · (help, with or without to)', uk: 'make · let · (help — з to або без)' },
              { en: 'She let me take Friday off.', uk: 'She let me take Friday off.' },
            ],
            [
              { en: 'modal + V1 (no to)', uk: 'modal + V1 (без to)' },
              { en: 'can · must · should · will · might …', uk: 'can · must · should · will · might …' },
              { en: 'You should update the docs.', uk: 'You should update the docs.' },
            ],
          ],
          caption: {
            en: 'Lists per Cambridge and British Council. want takes to + V1 — never ✕ want that you lead (UA «хочу, щоб ти…»): want you to lead.',
            uk: 'Списки за Cambridge і British Council. want бере to + V1 — ніколи ✕ want that you lead (UA «хочу, щоб ти…»): want you to lead.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The rule that beats every list: after a preposition, -ing', uk: 'Правило, що сильніше за всі списки: після прийменника — -ing' },
          md: {
            en: 'A preposition can only be followed by a noun — and the -ing form is the verb’s noun form. So: *interested **in learning**, good **at explaining**, **instead of waiting**, **before leaving**, thanks **for helping***. The famous trap is **to** — sometimes it is a **preposition**, not part of an infinitive: *I look forward **to hearing** from you* (✕ *to hear*) · *I’m used **to working** late* · *What do you say **to meeting** on Monday?* The test: can a noun go there? *look forward to **the weekend*** ✓ — so *to* is a preposition, and the verb takes -ing.',
            uk: 'Після прийменника може стояти лише іменник — а форма -ing і є «іменниковою» формою дієслова. Тож: *interested **in learning**, good **at explaining**, **instead of waiting**, **before leaving**, thanks **for helping***. Знаменита пастка — **to**: іноді це **прийменник**, а не частина інфінітива: *I look forward **to hearing** from you* (✕ *to hear*) · *I’m used **to working** late* · *What do you say **to meeting** on Monday?* Тест: чи може там стояти іменник? *look forward to **the weekend*** ✓ — отже, *to* — прийменник, і дієслово бере -ing.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'make and let: no to', uk: 'make і let: без to' },
          md: {
            en: 'UA *«змусив мене **переписати**»* tempts a *to*: ✕ *He made me **to rewrite** it* → ✓ *He **made me rewrite** it* · ✕ *Let me **to check*** → ✓ ***Let me check**.* *help* works both ways: *She helped me (to) set up the VPN.* (In the [passive](#/m/m14-passive-intro) *make* does take *to*: *I was made **to rewrite** it* — recognize it, rarely use it.)',
            uk: 'UA *«змусив мене **переписати**»* підштовхує до *to*: ✕ *He made me **to rewrite** it* → ✓ *He **made me rewrite** it* · ✕ *Let me **to check*** → ✓ ***Let me check**.* *help* працює обома способами: *She helped me (to) set up the VPN.* (У [passive](#/m/m14-passive-intro) *make* таки бере *to*: *I was made **to rewrite** it* — упізнавайте, але вживайте рідко.)',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**-ing as the subject.** When an action is the subject of a sentence, English normally uses -ing, where Ukrainian uses an infinitive: *«**Писати** тести спершу — економить час»* → ***Writing** tests first saves time.* *To write tests first saves time* is grammatical but sounds formal and old-fashioned. The same -ing appears after *it’s no use / it’s worth / there’s no point (in)*: *It’s worth **checking** the logs first.*',
            uk: '**-ing як підмет.** Коли дія — підмет речення, англійська зазвичай уживає -ing там, де українська — інфінітив: *«**Писати** тести спершу — економить час»* → ***Writing** tests first saves time.* *To write tests first saves time* граматично правильне, але звучить формально й старомодно. Те саме -ing — після *it’s no use / it’s worth / there’s no point (in)*: *It’s worth **checking** the logs first.*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: need + -ing = a passive meaning', uk: 'Дрібний шрифт: need + -ing = пасивне значення' },
          md: {
            en: 'With a **thing** as the subject, *need + -ing* means the thing needs to **have something done to it**: *This function **needs refactoring*** = *needs **to be refactored***. With a **person** as the subject it’s the normal *need to*: *I **need to refactor** this function.* Both versions of the passive meaning are correct; *needs to be refactored* is the safer choice in writing.',
            uk: 'Коли підмет — **річ**, *need + -ing* означає, що з річчю **треба щось зробити**: *This function **needs refactoring*** = *needs **to be refactored***. Коли підмет — **людина**, це звичайне *need to*: *I **need to refactor** this function.* Обидва варіанти пасивного значення правильні; на письмі безпечніше *needs to be refactored*.',
          },
        },
      ],
    },

    // ── 2. STOP / REMEMBER / TRY ───────────────────────────────────────────
    {
      id: 'stop-remember-try',
      title: { en: 'stop, remember, try: when the form changes the meaning', uk: 'stop, remember, try: коли форма змінює значення' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A small group of verbs takes **both** forms — and the form changes **what you mean**. For most of them one picture is enough: **-ing looks back** at an action that already exists (a memory, a habit, something done), **to looks forward** to an action that comes after the verb (a task, a reason, news). *I remember **locking** the door* (I locked it; I have the memory) vs *Remember **to lock** the door* (it’s a task still ahead).',
            uk: 'Невелика група дієслів бере **обидві** форми — і форма змінює **те, що ви маєте на увазі**. Для більшості з них вистачить однієї картинки: **-ing дивиться назад** — на дію, яка вже існує (спогад, звичка, зроблене), **to дивиться вперед** — на дію, що йде після дієслова (завдання, причина, новина). *I remember **locking** the door* (я замкнув; маю спогад) vs *Remember **to lock** the door* (це завдання, ще попереду).',
          },
        },
        {
          kind: 'figure',
          fig: 'meaning-switch',
          caption: {
            en: 'The verb is a moment. The -ing action sits before it (rose), the to-action after it (violet) — the same time hues as the Tense Machine.',
            uk: 'Дієслово — це момент. Дія з -ing стоїть до нього (рожевий), дія з to — після (фіолетовий), — ті самі кольори часу, що й у Tense Machine.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'verb + -ing', uk: 'verb + -ing' },
          b: { en: 'verb + to + V1', uk: 'verb + to + V1' },
          rows: [
            [
              { en: 'stop', uk: 'stop' },
              { en: 'I stopped checking email at night. — the activity ended', uk: 'I stopped checking email at night. — діяльність припинилася' },
              { en: 'I stopped to check my email. — I paused in order to check it', uk: 'I stopped to check my email. — зупинився, щоб перевірити' },
            ],
            [
              { en: 'remember', uk: 'remember' },
              { en: 'I remember sending it. — a memory of the past', uk: 'I remember sending it. — спогад про минуле' },
              { en: 'Remember to send it. — don’t miss the task', uk: 'Remember to send it. — не пропустіть завдання' },
            ],
            [
              { en: 'forget', uk: 'forget' },
              { en: 'I’ll never forget presenting to the board. — a memory', uk: 'I’ll never forget presenting to the board. — спогад' },
              { en: 'I forgot to invite the client. — it didn’t happen', uk: 'I forgot to invite the client. — цього не сталося' },
            ],
            [
              { en: 'regret', uk: 'regret' },
              { en: 'I regret saying that. — sorry it happened', uk: 'I regret saying that. — шкода, що сталося' },
              { en: 'We regret to inform you… — sorry for news now (formal)', uk: 'We regret to inform you… — шкода повідомляти зараз (формально)' },
            ],
            [
              { en: 'try', uk: 'try' },
              { en: 'Try restarting it. — an experiment: does it help?', uk: 'Try restarting it. — експеримент: чи допоможе?' },
              { en: 'I tried to restart it. — an effort; it was hard', uk: 'I tried to restart it. — зусилля; це було складно' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'try: an experiment or an effort', uk: 'try: експеримент чи зусилля' },
          md: {
            en: '*try* is the one verb here that isn’t about time. **try + -ing** = do it as an **experiment** and see if it solves the problem: *The page won’t load? **Try clearing** the cache.* **try + to + V1** = make an **effort** to do something difficult — often it didn’t work: *I **tried to clear** the cache, but I didn’t have admin rights.* British Council: *try + to* means something is difficult but you are making an effort.',
            uk: '*try* — єдине дієслово тут, що не про час. **try + -ing** = зробіть це як **експеримент** і подивіться, чи вирішить проблему: *The page won’t load? **Try clearing** the cache.* **try + to + V1** = докласти **зусиль**, щоб зробити щось складне, — часто не вийшло: *I **tried to clear** the cache, but I didn’t have admin rights.* British Council: *try + to* означає, що щось складно, але ви докладаєте зусиль.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: «перестав» vs «зупинився, щоб»', uk: 'Пастка україномовних: «перестав» vs «зупинився, щоб»' },
          md: {
            en: 'Ukrainian uses two different verbs — *«**перестав** курити»* and *«**зупинився, щоб** покурити»* — English uses *stop* for both, and only the form tells them apart. *He **stopped smoking*** = he quit · *He **stopped to smoke*** = he paused for a cigarette. Say *“I stopped to drink coffee”* when you mean you quit, and your team hears that you took a coffee break.',
            uk: 'Українська має два різні дієслова — *«**перестав** курити»* і *«**зупинився, щоб** покурити»*, — англійська вживає *stop* для обох, і розрізняє їх лише форма. *He **stopped smoking*** = кинув · *He **stopped to smoke*** = зупинився покурити. Скажіть *«I stopped to drink coffee»*, маючи на увазі, що кинули, — і команда почує, що ви зробили кавову перерву.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Two more pairs.** ***go on** + -ing* = continue **the same** activity: *She **went on talking** after the alarm* · ***go on to** + V1* = move on to **the next** thing: *After the intro, she **went on to explain** the roadmap.* ***mean** + -ing* = involve, result in: *The new deadline **means working** this weekend* · ***mean to** + V1* = intend: *Sorry, I didn’t **mean to delete** your branch.* The forward/back picture still helps: *to* points at what comes next.',
            uk: '**Ще дві пари.** ***go on** + -ing* = продовжувати **ту саму** діяльність: *She **went on talking** after the alarm* · ***go on to** + V1* = перейти до **наступного**: *After the intro, she **went on to explain** the roadmap.* ***mean** + -ing* = означати, тягти за собою: *The new deadline **means working** this weekend* · ***mean to** + V1* = мати намір: *Sorry, I didn’t **mean to delete** your branch.* Картинка «назад / вперед» досі допомагає: *to* вказує на те, що далі.',
          },
        },
      ],
    },

    // ── 3. LIKE / LOVE / HATE ──────────────────────────────────────────────
    {
      id: 'like-love-hate',
      title: { en: 'like, love, hate — and would like', uk: 'like, love, hate — і would like' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*like, love, hate, prefer* take **both** forms, and Cambridge notes the difference is **often small**: *I like **working** / **to work** in the morning.* When there is a nuance, **like + -ing** is about **enjoyment** (I find it pleasant), **like + to + V1** about a **habit or a choice** you think is good — even if it isn’t fun: *I like **to check** my code twice before I push* (a good habit, not a pleasure). Same with *start, begin, continue* — both forms, the same meaning.',
            uk: '*like, love, hate, prefer* беруть **обидві** форми, і Cambridge зазначає, що різниця **часто невелика**: *I like **working** / **to work** in the morning.* Коли нюанс є, **like + -ing** — про **задоволення** (мені це приємно), **like + to + V1** — про **звичку чи вибір**, який ви вважаєте правильним, навіть якщо це не весело: *I like **to check** my code twice before I push* (корисна звичка, не задоволення). Так само *start, begin, continue* — обидві форми, те саме значення.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'like + -ing — I enjoy it', uk: 'like + -ing — мені це подобається' },
          b: { en: 'like + to + V1 — I choose to, it’s a good idea', uk: 'like + to + V1 — я так обираю, це слушно' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'I like pairing with juniors.', uk: 'I like pairing with juniors.' },
              { en: 'I like to write the tests first.', uk: 'I like to write the tests first.' },
            ],
            [
              { en: 'Implies', uk: 'Підтекст' },
              { en: 'it’s pleasant', uk: 'це приємно' },
              { en: 'it’s my habit / my rule', uk: 'це моя звичка / моє правило' },
            ],
            [
              { en: 'UA', uk: 'UA' },
              { en: 'мені подобається…', uk: 'мені подобається…' },
              { en: 'я волію / маю звичку…', uk: 'я волію / маю звичку…' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'would like / would love / would prefer: only to + V1', uk: 'would like / would love / would prefer: лише to + V1' },
          md: {
            en: 'Plain *like* is flexible; **would like** is not. It’s a polite *want* (UA *«хотів би»*), and *want* takes *to*: ✓ *I**’d like to join** the call* · ✕ *I’d like joining.* The same goes for ***would love to*** and ***would prefer to***: *I**’d love to help** · I**’d prefer to start** after lunch.* For politeness patterns around them, see [m22](#/m/m22-requests-politeness).',
            uk: 'Просте *like* гнучке; **would like** — ні. Це ввічливе *want* (UA *«хотів би»*), а *want* бере *to*: ✓ *I**’d like to join** the call* · ✕ *I’d like joining.* Те саме з ***would love to*** і ***would prefer to***: *I**’d love to help** · I**’d prefer to start** after lunch.* Про ввічливі конструкції навколо них — [m22](#/m/m22-requests-politeness).',
          },
        },
        {
          kind: 'table',
          dive: 3,
          head: [
            { en: 'Preference pattern', uk: 'Конструкція переваги' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'prefer + -ing + to + -ing', uk: 'prefer + -ing + to + -ing' },
              { en: 'I prefer working in the morning to working at night.', uk: 'I prefer working in the morning to working at night.' },
            ],
            [
              { en: 'would prefer + to + V1 (+ rather than + V1)', uk: 'would prefer + to + V1 (+ rather than + V1)' },
              { en: 'I’d prefer to call rather than email.', uk: 'I’d prefer to call rather than email.' },
            ],
            [
              { en: 'would rather + V1 (+ than + V1)', uk: 'would rather + V1 (+ than + V1)' },
              { en: 'I’d rather call than email.', uk: 'I’d rather call than email.' },
            ],
          ],
          caption: {
            en: 'prefer X to Y uses the preposition to — so -ing on both sides. would rather takes no to at all (m22).',
            uk: 'prefer X to Y вживає прийменник to — тож -ing з обох боків. would rather не бере to взагалі (m22).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Avoid -ing + -ing.** After a continuous form of *start / begin / continue*, use *to*, so two -ing forms don’t meet: *It’s **starting to rain*** (✕ *starting raining*) · *We’re **beginning to see** results.*',
            uk: '**Уникайте -ing + -ing.** Після continuous-форми *start / begin / continue* беріть *to*, щоб дві форми -ing не зустрічалися: *It’s **starting to rain*** (✕ *starting raining*) · *We’re **beginning to see** results.*',
          },
        },
      ],
    },

    // ── 4. PURPOSE ─────────────────────────────────────────────────────────
    {
      id: 'purpose',
      title: { en: 'Purpose: to + V1, not “for + V”', uk: 'Мета: to + V1, а не «for + V»' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'To say **why** someone does something — UA *«щоб», «для того, щоб»* — English uses the plain **to + V1**: *I came **to ask** about the release* · *We use feature flags **to test** in production.* No *for*, no *-ing*. Cambridge is explicit: we don’t use *for + -ing* to express purpose or intention — we use *to + infinitive*.',
            uk: 'Щоб сказати, **навіщо** хтось щось робить — UA *«щоб», «для того, щоб»*, — англійська вживає просте **to + V1**: *I came **to ask** about the release* · *We use feature flags **to test** in production.* Без *for*, без *-ing*. Cambridge прямо пише: *for + -ing* не вживають, щоб виразити мету чи намір, — уживають *to + infinitive*.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: “for to ask” / “for asking”', uk: 'Пастка україномовних: «for to ask» / «for asking»' },
          md: {
            en: '*«для того, щоб»* sounds like *for*, so UA speakers write ✕ *I came here **for to ask*** or ✕ *I came here **for asking***. Just ✓ *I came here **to ask**.* *for* is fine before a **noun**: *I came here **for the interview*** · *Let’s go out **for lunch**.*',
            uk: '*«для того, щоб»* звучить як *for*, тож україномовні пишуть ✕ *I came here **for to ask*** або ✕ *I came here **for asking***. Просто ✓ *I came here **to ask**.* *for* доречне перед **іменником**: *I came here **for the interview*** · *Let’s go out **for lunch**.*',
          },
        },
        {
          kind: 'compare',
          a: { en: 'to + V1 — why a PERSON does it', uk: 'to + V1 — навіщо це робить ЛЮДИНА' },
          b: { en: 'for + -ing — what a THING is for', uk: 'for + -ing — для чого ця РІЧ' },
          rows: [
            [
              { en: 'Docker', uk: 'Docker' },
              { en: 'We use Docker to isolate services.', uk: 'We use Docker to isolate services.' },
              { en: 'Docker is a tool for isolating services.', uk: 'Docker is a tool for isolating services.' },
            ],
            [
              { en: 'Script', uk: 'Скрипт' },
              { en: 'I wrote a script to clean old logs.', uk: 'I wrote a script to clean old logs.' },
              { en: 'This script is for cleaning old logs.', uk: 'This script is for cleaning old logs.' },
            ],
            [
              { en: 'The question it answers', uk: 'На яке питання відповідає' },
              { en: 'Why did you do it?', uk: 'Навіщо ви це зробили?' },
              { en: 'What is it used for?', uk: 'Для чого це використовують?' },
            ],
          ],
        },
        {
          kind: 'table',
          head: [
            { en: 'Purpose form', uk: 'Форма мети' },
            { en: 'Register', uk: 'Регістр' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'to + V1', uk: 'to + V1' },
              { en: 'everyday, the default', uk: 'побутове, за замовчуванням' },
              { en: 'I stayed late to finish the report.', uk: 'I stayed late to finish the report.' },
            ],
            [
              { en: 'in order to + V1', uk: 'in order to + V1' },
              { en: 'more formal, more common in writing', uk: 'формальніше, частіше на письмі' },
              { en: 'In order to reduce costs, we moved to a smaller plan.', uk: 'In order to reduce costs, we moved to a smaller plan.' },
            ],
            [
              { en: 'so that + clause (can / could / will / would)', uk: 'so that + речення (can / could / will / would)' },
              { en: 'when the subject changes', uk: 'коли змінюється підмет' },
              { en: 'I shared the doc so that everyone could comment.', uk: 'I shared the doc so that everyone could comment.' },
            ],
          ],
          caption: {
            en: 'Per Cambridge (In order to · So that or in order that?). so that is the natural choice when the purpose is about someone else: so that everyone could comment.',
            uk: 'За Cambridge (In order to · So that or in order that?). so that — природний вибір, коли мета стосується когось іншого: so that everyone could comment.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Negative purpose.** Plain *not to* sounds odd for purpose: ✕ *I wrote it down **not to forget***. Use ***so as not to*** / ***in order not to*** or ***so that … don’t / won’t***: *I wrote it down **so as not to forget** · …**so that I wouldn’t forget**.*',
            uk: '**Заперечна мета.** Просте *not to* для мети звучить дивно: ✕ *I wrote it down **not to forget***. Беріть ***so as not to*** / ***in order not to*** або ***so that … don’t / won’t***: *I wrote it down **so as not to forget** · …**so that I wouldn’t forget**.*',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'The first verb chooses the form of the second: -ing (enjoy, avoid, finish, suggest), to + V1 (want, decide, agree, manage), or bare V1 (make, let, modals). Learn verbs in chunks.',
      uk: 'Перше дієслово обирає форму другого: -ing (enjoy, avoid, finish, suggest), to + V1 (want, decide, agree, manage) або голий V1 (make, let, modals). Учіть дієслова блоками.',
    },
    {
      en: 'After a preposition, always -ing — including when the preposition is to: look forward to hearing, be used to working.',
      uk: 'Після прийменника — завжди -ing, навіть коли прийменник — to: look forward to hearing, be used to working.',
    },
    {
      en: 'stop / remember / forget / regret: -ing looks back (something already done), to looks forward (something still to do or a reason).',
      uk: 'stop / remember / forget / regret: -ing дивиться назад (уже зроблене), to — вперед (те, що ще треба зробити, чи причина).',
    },
    {
      en: 'try + -ing = an experiment (does it help?); try + to = an effort (it’s hard).',
      uk: 'try + -ing = експеримент (чи допоможе?); try + to = зусилля (це складно).',
    },
    {
      en: 'like / love / hate / prefer take both forms with little difference — but would like / would love / would prefer take only to + V1.',
      uk: 'like / love / hate / prefer беруть обидві форми з невеликою різницею — але would like / would love / would prefer беруть лише to + V1.',
    },
    {
      en: 'Purpose is to + V1 (UA «щоб»), never for to / for + -ing; for + -ing describes what a thing is used for.',
      uk: 'Мета — це to + V1 (UA «щоб»), ніколи for to / for + -ing; for + -ing описує, для чого використовують річ.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“I look forward to see you”', uk: '«I look forward to see you»' },
      body: {
        en: 'to here is a preposition (look forward to the weekend), so the verb is -ing: I look forward to seeing you. Same with be used to working, object to paying.',
        uk: 'to тут — прийменник (look forward to the weekend), тож дієслово з -ing: I look forward to seeing you. Так само be used to working, object to paying.',
      },
    },
    {
      title: { en: 'An infinitive after an -ing verb', uk: 'Інфінітив після дієслова з -ing' },
      body: {
        en: 'UA puts an infinitive after every verb, so enjoy to work / avoid to push / finish to test appear. These verbs take -ing: enjoy working, avoid pushing, finish testing.',
        uk: 'Українська ставить інфінітив після кожного дієслова, тож зʼявляються enjoy to work / avoid to push / finish to test. Ці дієслова беруть -ing: enjoy working, avoid pushing, finish testing.',
      },
    },
    {
      title: { en: '“He made me to rewrite it”', uk: '«He made me to rewrite it»' },
      body: {
        en: 'make and let take the bare V1: He made me rewrite it · Let me check. (help: with or without to.)',
        uk: 'make і let беруть голий V1: He made me rewrite it · Let me check. (help — з to або без.)',
      },
    },
    {
      title: { en: '“I want that you…”', uk: '«I want that you…»' },
      body: {
        en: 'UA «хочу, щоб ти…» → want that you ✕. want takes person + to + V1: I want you to lead the demo.',
        uk: 'UA «хочу, щоб ти…» → want that you ✕. want бере особа + to + V1: I want you to lead the demo.',
      },
    },
    {
      title: { en: 'stop + -ing and stop + to mixed up', uk: 'Сплутані stop + -ing і stop + to' },
      body: {
        en: 'stop doing = quit / end the activity (UA «перестати»); stop to do = pause in order to do something (UA «зупинитися, щоб»). The same split for remember, forget, regret.',
        uk: 'stop doing = кинути / припинити діяльність (UA «перестати»); stop to do = зупинитися, щоб щось зробити (UA «зупинитися, щоб»). Те саме розмежування для remember, forget, regret.',
      },
    },
    {
      title: { en: '“I’d like going”', uk: '«I’d like going»' },
      body: {
        en: 'would like / would love / would prefer = a polite want, and they take only to + V1: I’d like to go.',
        uk: 'would like / would love / would prefer = ввічливе want, і вони беруть лише to + V1: I’d like to go.',
      },
    },
    {
      title: { en: 'Purpose with for: “I came for asking”', uk: 'Мета з for: «I came for asking»' },
      body: {
        en: 'UA «для того, щоб» → for ✕. Purpose is to + V1: I came to ask. for goes before a noun (for the interview) or describes a thing’s function (a tool for testing).',
        uk: 'UA «для того, щоб» → for ✕. Мета — це to + V1: I came to ask. for стоїть перед іменником (for the interview) або описує функцію речі (a tool for testing).',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-gerund-infinitive-1',
      kind: 'gap',
      sentence: 'I really enjoy ___ with this team.',
      answers: ['working'],
      hint: { en: 'work', uk: 'work' },
      explain: {
        en: 'enjoy + -ing — never enjoy to work (UA «люблю працювати» is the trap).',
        uk: 'enjoy + -ing — ніколи не enjoy to work (пастка — UA «люблю працювати»).',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'verb-patterns', 'ua-trap'],
    },
    {
      id: 'ex-gerund-infinitive-2',
      kind: 'gap',
      sentence: 'We decided ___ the release by a week.',
      answers: ['to postpone'],
      hint: { en: 'postpone', uk: 'postpone' },
      explain: {
        en: 'decide + to + V1 — a decision points at something still ahead.',
        uk: 'decide + to + V1 — рішення вказує на те, що ще попереду.',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'verb-patterns'],
    },
    {
      id: 'ex-gerund-infinitive-3',
      kind: 'mcq',
      prompt: { en: 'I look forward to ___ from you.', uk: 'Чекаю на вашу відповідь: I look forward to ___ from you.' },
      options: ['hear', 'hearing', 'to hear'],
      correct: 1,
      explain: {
        en: 'to is a preposition here (look forward to the weekend), so the verb takes -ing.',
        uk: 'to тут — прийменник (look forward to the weekend), тож дієслово бере -ing.',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'preposition-ing', 'ua-trap'],
    },
    {
      id: 'ex-gerund-infinitive-4',
      kind: 'gap',
      sentence: 'Please avoid ___ directly to the main branch.',
      answers: ['pushing'],
      hint: { en: 'push', uk: 'push' },
      explain: {
        en: 'avoid + -ing.',
        uk: 'avoid + -ing.',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'verb-patterns'],
    },
    {
      id: 'ex-gerund-infinitive-5',
      kind: 'mcq',
      prompt: { en: 'My manager made me ___ the whole report.', uk: 'Менеджер змусив мене ___ увесь звіт.' },
      options: ['to rewrite', 'rewrite', 'rewriting'],
      correct: 1,
      explain: {
        en: 'make + person + bare V1 — no to (UA «змусив переписати» is the trap).',
        uk: 'make + особа + голий V1 — без to (пастка — UA «змусив переписати»).',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'verb-patterns', 'ua-trap'],
    },
    {
      id: 'ex-gerund-infinitive-6',
      kind: 'gap',
      sentence: 'She managed ___ the bug before the demo.',
      answers: ['to fix'],
      hint: { en: 'fix', uk: 'fix' },
      explain: {
        en: 'manage + to + V1 = succeed in doing something difficult.',
        uk: 'manage + to + V1 = зуміти зробити щось складне.',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'verb-patterns'],
    },
    {
      id: 'ex-gerund-infinitive-7',
      kind: 'mcq',
      prompt: {
        en: 'At the door he stopped ___ his phone, then walked into the meeting.',
        uk: 'Біля дверей він зупинився, ___ телефон, а потім зайшов на зустріч.',
      },
      options: ['checking', 'to check', 'check'],
      correct: 1,
      explain: {
        en: 'He paused in order to check it → stop + to + V1 (the to-action comes after stopping).',
        uk: 'Він зупинився, щоб перевірити → stop + to + V1 (дія з to йде після зупинки).',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'meaning-change'],
    },
    {
      id: 'ex-gerund-infinitive-8',
      kind: 'mcq',
      prompt: {
        en: 'I’ve stopped ___ email after 7 p.m. — it was ruining my evenings.',
        uk: 'Я перестав ___ пошту після 19:00 — це руйнувало мої вечори.',
      },
      options: ['to check', 'checking', 'check'],
      correct: 1,
      explain: {
        en: 'The activity ended → stop + -ing (UA «перестав»).',
        uk: 'Діяльність припинилася → stop + -ing (UA «перестав»).',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'meaning-change', 'ua-trap'],
    },
    {
      id: 'ex-gerund-infinitive-9',
      kind: 'gap',
      sentence: 'Remember ___ the door when you leave the office.',
      answers: ['to lock'],
      hint: { en: 'lock — a task still ahead', uk: 'lock — завдання ще попереду' },
      explain: {
        en: 'remember + to + V1 = don’t forget a task. remember + -ing would be a memory of locking it.',
        uk: 'remember + to + V1 = не забути завдання. remember + -ing — це спогад про те, що замкнули.',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'meaning-change'],
    },
    {
      id: 'ex-gerund-infinitive-10',
      kind: 'mcq',
      prompt: {
        en: 'I don’t remember ___ that file — but my name is on the commit.',
        uk: 'Я не памʼятаю, щоб ___ той файл, — але мій підпис стоїть на коміті.',
      },
      options: ['to delete', 'deleting', 'delete'],
      correct: 1,
      explain: {
        en: 'A memory of a past action → remember + -ing.',
        uk: 'Спогад про минулу дію → remember + -ing.',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'meaning-change'],
    },
    {
      id: 'ex-gerund-infinitive-11',
      kind: 'mcq',
      prompt: { en: 'The page won’t load? Try ___ the cache.', uk: 'Сторінка не завантажується? Спробуйте ___ кеш.' },
      options: ['to clear', 'clearing', 'clear'],
      correct: 1,
      explain: {
        en: 'A suggestion to experiment — does it fix the problem? → try + -ing. try to clear = make an effort (it’s hard).',
        uk: 'Порада поекспериментувати — чи це вирішить проблему? → try + -ing. try to clear = докласти зусиль (це складно).',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'meaning-change'],
    },
    {
      id: 'ex-gerund-infinitive-12',
      kind: 'gap',
      sentence: 'I’d like ___ the next sprint planning.',
      answers: ['to join'],
      hint: { en: 'join', uk: 'join' },
      explain: {
        en: 'would like + to + V1 only — it is a polite want.',
        uk: 'would like + лише to + V1 — це ввічливе want.',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'like-love-hate'],
    },
    {
      id: 'ex-gerund-infinitive-13',
      kind: 'mcq',
      prompt: { en: 'I came here ___ about the open position.', uk: 'Я прийшов сюди, щоб ___ про вакансію.' },
      options: ['for asking', 'to ask', 'for ask'],
      correct: 1,
      explain: {
        en: 'Purpose = to + V1 (UA «щоб»). for + -ing doesn’t express a person’s purpose (Cambridge).',
        uk: 'Мета = to + V1 (UA «щоб»). for + -ing не виражає мету людини (Cambridge).',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'purpose', 'ua-trap'],
    },
    {
      id: 'ex-gerund-infinitive-14',
      kind: 'gap',
      sentence: 'This script is for ___ old logs.',
      answers: ['deleting'],
      hint: { en: 'delete — what the thing is used for', uk: 'delete — для чого річ' },
      explain: {
        en: 'for + -ing describes the function of a thing. For a person’s purpose you’d say I wrote it to delete old logs.',
        uk: 'for + -ing описує функцію речі. Для мети людини — I wrote it to delete old logs.',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'purpose'],
    },
    {
      id: 'ex-gerund-infinitive-15',
      kind: 'mcq',
      prompt: {
        en: 'He’s used to ___ late — he’s been on night shifts for years.',
        uk: 'Він звик ___ допізна — роками працює в нічні зміни.',
      },
      options: ['work', 'working', 'worked'],
      correct: 1,
      explain: {
        en: 'be used to = be accustomed to; to is a preposition, so -ing. Don’t mix it up with used to + V1 = a past habit (m8).',
        uk: 'be used to = звикнути; to — прийменник, тож -ing. Не плутайте з used to + V1 = минула звичка (m8).',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'preposition-ing', 'ua-trap'],
    },
    {
      id: 'ex-gerund-infinitive-16',
      kind: 'mcq',
      prompt: { en: '___ tests first saves time later.', uk: '___ тести спершу — економія часу згодом.' },
      options: ['Write', 'Writing', 'Wrote'],
      correct: 1,
      explain: {
        en: 'An action as the subject → -ing (UA uses an infinitive: «Писати тести…»).',
        uk: 'Дія як підмет → -ing (українська вживає інфінітив: «Писати тести…»).',
      },
      level: 'b1',
      tags: ['gerund-infinitive', 'verb-patterns', 'ua-trap'],
    },
  ],
  // CHANGED (C3): + m14 (make … to in the passive; need + -ing = a passive meaning).
  seeAlso: ['m15-reported-speech', 'm8-past-simple-continuous', 'm13-conditionals-0-1-2', 'm14-passive-intro', 'm17-modal-system', 'm22-requests-politeness'],
  sources: [
    {
      title: 'Cambridge Dictionary — Verb patterns: verb + infinitive or verb + -ing?',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns-verb-infinitive-or-verb-ing',
    },
    {
      title: 'Cambridge Dictionary — Stop + -ing form or to-infinitive',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/stop-ing-form-or-to-infinitive',
    },
    {
      title: 'Cambridge Dictionary — Look forward to',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/look-forward-to',
    },
    {
      title: 'Cambridge Dictionary — For + -ing',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/for-ing',
    },
    {
      title: 'Cambridge Dictionary — Infinitives with and without to',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/infinitives-with-and-without-to',
    },
    {
      title: 'Cambridge Dictionary — So that or in order that?',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/so-that-or-in-order-that',
    },
    {
      title: 'British Council LearnEnglish — Verbs followed by -ing or infinitive to change meaning',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/verbs-followed-ing-or-infinitive-change-meaning',
    },
    {
      title: 'British Council LearnEnglish — Verbs followed by -ing or infinitive',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/verbs-followed-ing-or-infinitive',
    },
  ],
};
