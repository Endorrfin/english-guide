import type { Module } from '../types';

/*
 * M18 · Ability & permission — Section III ★ Modal Verbs (S2). Second module of the flagship.
 * Authored EN first, UA second; grammar terms stay English in both languages; examples are
 * US English. Facts verified against Cambridge Dictionary grammar (can / be able to), British
 * Council LearnEnglish (Past ability; Modals: permission and obligation) — see `sources`.
 * The single-success trap (affirmative could ✗ → was able to / managed to) is the spine of the module.
 */
export const m18: Module = {
  id: 'm18-ability-permission',
  num: 18,
  section: 's3-modal-verbs',
  order: 2,
  level: 'b1',
  title: { en: 'Ability & permission', uk: 'Уміння і дозвіл' },
  tagline: {
    en: 'One Ukrainian «можу» splits into three English ideas: I can (skill), May I? (permission), I was able to (a success). Same little verbs — the craft is telling the functions apart.',
    uk: 'Одне українське «можу» розпадається на три англійські ідеї: I can (навичка), May I? (дозвіл), I was able to (успіх). Ті самі короткі дієслова — майстерність у тому, щоб розрізняти функції.',
  },
  readMins: 18,
  mentalModel: {
    en: 'Ability asks “is the skill there?”; permission asks “is it allowed?”. English answers both with can/could — so first decide WHICH question you are asking, then let the past-success trap (could ✗ → was able to) and the politeness ladder (can → could → may) pick the exact form.',
    uk: 'Уміння питає «чи є навичка?»; дозвіл питає «чи це дозволено?». Англійська відповідає на обидва через can/could — тож спершу вирішіть, ЯКЕ питання ставите, а тоді пастка разового успіху (could ✗ → was able to) і драбина ввічливості (can → could → may) виберуть точну форму.',
  },
  topics: [
    {
      id: 'can-could',
      title: { en: 'Ability now & then: can, could & the success trap', uk: 'Уміння тепер і тоді: can, could і пастка успіху' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '**Ability** is the first job of *can*: it says the skill or the possibility is there. *She **can** read Go code* — the knowledge exists. Move it into the past and, for a **general** ability that lasted over time, *can* becomes *could*: *At fifteen I **could** solve a Rubik’s cube in under a minute.* So far it mirrors Ukrainian «вмію / вмів» perfectly — which is exactly what sets the trap in the next paragraph.',
            uk: '**Уміння** — перша робота *can*: воно каже, що навичка чи можливість є. *She **can** read Go code* — знання існує. Перенесіть у минуле, і для **загального** вміння, що тривало в часі, *can* стає *could*: *At fifteen I **could** solve a Rubik’s cube in under a minute.* Поки що це точно дзеркалить українське «вмію / вмів» — і саме тому наступний абзац ставить пастку.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Here is the rule that surprises every learner: for **one specific success** in the past — a single occasion when you actually pulled it off — affirmative *could* is **wrong**. You need *was/were able to* or *managed to*. *After an hour we **were able to** reproduce the bug* (✗ *we could reproduce it* — that sounds like a standing skill, not “we did it that day”). The logic: *could* describes a **capacity**, not a **completed event**. The negative escapes the rule — *couldn’t* is fine for both the general skill and the single occasion: *We **couldn’t** reproduce it* works either way.',
            uk: 'Ось правило, що дивує кожного, хто вчить: для **одного конкретного успіху** в минулому — окремого разу, коли ви справді це зробили — стверджувальне *could* **неправильне**. Потрібно *was/were able to* або *managed to*. *After an hour we **were able to** reproduce the bug* (✗ *we could reproduce it* — звучить як наявна навичка, а не «ми зробили це того дня»). Логіка: *could* описує **здатність**, а не **завершену подію**. Заперечення виняток — *couldn’t* годиться і для загальної навички, і для окремого разу: *We **couldn’t** reproduce it* працює обома способами.',
          },
        },
        {
          kind: 'figure',
          fig: 'ability-timeline',
          caption: {
            en: 'Ability across time: can now, could for a general past skill, will be able to for the future — and the fork in the past where a single success drops could for was able to / managed to.',
            uk: 'Уміння в часі: can тепер, could для загальної навички в минулому, will be able to для майбутнього — і розвилка в минулому, де разовий успіх відкидає could на користь was able to / managed to.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'Ability across time — pick the form. The single-success row is the one that trips UA speakers.',
            uk: 'Уміння в часі — оберіть форму. Рядок разового успіху — саме той, що збиває україномовних.',
          },
          head: [
            { en: 'Time', uk: 'Час' },
            { en: 'Affirmative', uk: 'Стверджувально' },
            { en: 'Negative', uk: 'Заперечно' },
            { en: 'Note', uk: 'Примітка' },
          ],
          rows: [
            [
              { en: 'Present', uk: 'Теперішнє' },
              { en: 'can · am/is/are able to', uk: 'can · am/is/are able to' },
              { en: 'can’t · not able to', uk: 'can’t · not able to' },
              { en: 'can = default; be able to = formal / the holes', uk: 'can = дефолт; be able to = формально / для дірок' },
            ],
            [
              { en: 'General past', uk: 'Загальне минуле' },
              { en: 'could · was/were able to', uk: 'could · was/were able to' },
              { en: 'couldn’t', uk: 'couldn’t' },
              { en: 'a skill that lasted over time', uk: 'навичка, що тривала в часі' },
            ],
            [
              { en: 'Single past success', uk: 'Разовий успіх у минулому' },
              { en: 'was/were able to · managed to', uk: 'was/were able to · managed to' },
              { en: 'couldn’t · didn’t manage to', uk: 'couldn’t · didn’t manage to' },
              { en: '✗ affirmative could', uk: '✗ стверджувальне could' },
            ],
            [
              { en: 'Future', uk: 'Майбутнє' },
              { en: 'will be able to', uk: 'will be able to' },
              { en: 'won’t be able to', uk: 'won’t be able to' },
              { en: 'modals never stack (✗ will can)', uk: 'modals не стоять поруч (✗ will can)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: {
            en: '«Я зміг це зробити» — two very different English sentences',
            uk: '«Я зміг це зробити» — два зовсім різні англійські речення',
          },
          md: {
            en: '«Учора я **зміг** полагодити білд» is a single success → *Yesterday I **managed to** / **was able to** fix the build.* But *Yesterday I **could** fix the build* reads as «взагалі-то я вмів його лагодити» (a standing skill), **not** “I actually did it.” When «зміг / вдалося» points at one finished result, reach for *managed to* or *was able to* — never affirmative *could*.',
            uk: '«Учора я **зміг** полагодити білд» — це разовий успіх → *Yesterday I **managed to** / **was able to** fix the build.* А *Yesterday I **could** fix the build* прочитається як «взагалі-то я вмів його лагодити» (наявна навичка), а **не** «я справді це зробив». Коли «зміг / вдалося» вказує на один завершений результат, беріть *managed to* або *was able to* — ніколи стверджувальне *could*.',
          },
        },
      ],
    },
    {
      id: 'be-able-to',
      title: { en: 'be able to: the semi-modal that fills the holes', uk: 'be able to: semi-modal, що закриває дірки' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*Can* has only two forms — *can* and *could* — so it cannot go where grammar needs an infinitive, an *-ing*, a perfect, or a slot after another modal. **be able to** is its shape-shifting partner: it conjugates like any normal verb and fits everywhere *can* cannot. Future: *You **will be able to** deploy after the review.* After a modal: *We **might be able to** ship on Friday.* Perfect: *Since the migration we **have been able to** cut latency in half.* Infinitive: *It’s great **to be able to** work remotely.*',
            uk: '*Can* має лише дві форми — *can* і *could* — тож не може стати там, де граматика вимагає інфінітива, *-ing*, перфекта чи місця після іншого modal. **be able to** — його партнер-перевертень: відмінюється як звичайне дієслово і вставляється всюди, де *can* не може. Майбутнє: *You **will be able to** deploy after the review.* Після modal: *We **might be able to** ship on Friday.* Перфект: *Since the migration we **have been able to** cut latency in half.* Інфінітив: *It’s great **to be able to** work remotely.*',
          },
        },
        {
          kind: 'compare',
          a: { en: 'can (short, natural)', uk: 'can (коротко, природно)' },
          b: { en: 'be able to (fills the holes)', uk: 'be able to (закриває дірки)' },
          rows: [
            [
              { en: 'Present, everyday', uk: 'Теперішнє, побутове' },
              { en: 'She **can** debug this.', uk: 'She **can** debug this.' },
              { en: 'She **is able to** debug this. (stiffer)', uk: 'She **is able to** debug this. (сухіше)' },
            ],
            [
              { en: 'Future', uk: 'Майбутнє' },
              { en: '— (✗ will can)', uk: '— (✗ will can)' },
              { en: 'You **will be able to** debug this.', uk: 'You **will be able to** debug this.' },
            ],
            [
              { en: 'After another modal', uk: 'Після іншого modal' },
              { en: '— (✗ might can)', uk: '— (✗ might can)' },
              { en: 'You **might be able to** debug this.', uk: 'You **might be able to** debug this.' },
            ],
            [
              { en: 'Present perfect', uk: 'Present perfect' },
              { en: '— (✗ have could)', uk: '— (✗ have could)' },
              { en: 'I **haven’t been able to** reach the client.', uk: 'I **haven’t been able to** reach the client.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'In the simple present & past, prefer can / could', uk: 'У простому теперішньому й минулому обирайте can / could' },
          md: {
            en: 'Because *be able to* rescues so many sentences, learners start using it everywhere — but in the plain present and past *can/could* are shorter and more natural. Say *I **can** join the call*, not *I **am able to** join the call* (which sounds formal or slightly strained). Keep *be able to* for the jobs *can* literally cannot do: after *will*, after another modal, in the perfect, and as an infinitive or *-ing* form.',
            uk: 'Оскільки *be able to* рятує стільки речень, ті, хто вчить, починають ставити його всюди — але в простому теперішньому й минулому *can/could* коротші й природніші. Кажіть *I **can** join the call*, а не *I **am able to** join the call* (звучить формально чи трохи силувано). Лишайте *be able to* для завдань, яких *can* фізично не вміє: після *will*, після іншого modal, у перфекті, як інфінітив чи *-ing*.',
          },
        },
      ],
    },
    {
      id: 'may-might-permission',
      title: { en: 'Permission: can, could, may', uk: 'Дозвіл: can, could, may' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Switch the question: not “is the skill there?” but “is it allowed?”. English reuses the same verbs for permission, ranked by formality. **Asking**: *Can I…?* (casual, among teammates) → *Could I…?* (polite, the safe default) → *May I…?* (formal, with clients or strangers). **Giving**: *You **can** park here* / the more formal *You **may** begin.* The catch: *could* only **asks** — you cannot **grant** permission with it. *Could I leave early? — Yes, you **can**.* (✗ *Yes, you could* would read as hypothetical, not “permission granted”.)',
            uk: 'Змініть питання: не «чи є навичка?», а «чи це дозволено?». Англійська використовує ті самі дієслова для дозволу, ранжуючи за формальністю. **Просити**: *Can I…?* (невимушено, серед колег) → *Could I…?* (ввічливо, безпечний дефолт) → *May I…?* (формально, з клієнтами чи незнайомими). **Давати**: *You **can** park here* / формальніше *You **may** begin.* Пастка: *could* лише **просить** — надати дозвіл ним не можна. *Could I leave early? — Yes, you **can**.* (✗ *Yes, you could* прочитається як гіпотеза, а не «дозвіл надано».)',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The permission ladder — the same act, three levels of formality. Note the gap: could cannot grant.',
            uk: 'Драбина дозволу — та сама дія, три рівні формальності. Зверніть увагу на прогалину: could не надає дозволу.',
          },
          head: [
            { en: 'Act', uk: 'Дія' },
            { en: 'can (casual)', uk: 'can (невимушено)' },
            { en: 'could (polite)', uk: 'could (ввічливо)' },
            { en: 'may (formal)', uk: 'may (формально)' },
          ],
          rows: [
            [
              { en: 'Ask', uk: 'Попросити' },
              { en: 'Can I open the window?', uk: 'Can I open the window?' },
              { en: 'Could I open the window?', uk: 'Could I open the window?' },
              { en: 'May I open the window?', uk: 'May I open the window?' },
            ],
            [
              { en: 'Give', uk: 'Дати' },
              { en: 'Yes, you can.', uk: 'Yes, you can.' },
              { en: '— (could can’t grant)', uk: '— (could не надає)' },
              { en: 'Yes, you may.', uk: 'Yes, you may.' },
            ],
            [
              { en: 'Refuse', uk: 'Відмовити' },
              { en: 'No, you can’t.', uk: 'No, you can’t.' },
              { en: '—', uk: '—' },
              { en: 'No, you may not.', uk: 'No, you may not.' },
            ],
          ],
        },
        {
          kind: 'prose',
          md: {
            en: 'Two footnotes. First, *might* for permission — *Might I make a suggestion?* — is real but **very** formal and now rare; in US work English it sounds almost theatrical, so stick to *may / could*. Second, remember that *can* wears two hats: *She **can** drive* is ability, *You **can** drive my car* is permission. Same word — only context separates them, which is exactly why you start from the **function**, not the verb.',
            uk: 'Дві примітки. Перше, *might* для дозволу — *Might I make a suggestion?* — реальне, але **дуже** формальне й тепер рідкісне; в американській робочій англійській звучить майже театрально, тож тримайтеся *may / could*. Друге, памʼятайте, що *can* носить два капелюхи: *She **can** drive* — це вміння, *You **can** drive my car* — дозвіл. Те саме слово — лише контекст їх розділяє, і саме тому починати треба з **функції**, а не з дієслова.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: 'Reading the room: which permission modal at work', uk: 'Відчути контекст: який modal дозволу на роботі' },
          md: {
            en: 'Among your own team, *Can I grab ten minutes?* is warm and normal. Writing to a client or a senior stakeholder, *Could I…?* is the default and *May I…?* signals extra respect (or a formal setting — an audit, a legal call). Over-formal with close teammates sounds cold; over-casual with a brand-new client sounds sloppy. The modal is a **social dial** — matching it to the relationship is half of sounding fluent.',
            uk: 'Серед своєї команди *Can I grab ten minutes?* — тепло і нормально. Пишучи клієнту чи старшому стейкхолдеру, *Could I…?* — дефолт, а *May I…?* сигналізує додаткову повагу (або формальний контекст — аудит, юридичний дзвінок). Надто формально з близькими колегами звучить холодно; надто невимушено з новеньким клієнтом — недбало. Modal — це **соціальний регулятор**, і підлаштувати його під стосунки — половина природного звучання.',
          },
        },
      ],
    },
    {
      id: 'managed-to',
      title: { en: 'managed to & past permission', uk: 'managed to і минулий дозвіл' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*was able to* and *managed to* both report a past success, but *managed to* adds a flavor: **effort against difficulty**. *We **managed to** restore the database from a three-week-old backup* says it was hard and we barely pulled it off; *We **were able to** restore it* is neutral. For an easy, routine success *managed to* sounds odd (*I managed to open the door* implies the door fought back). Reserve it for real obstacles — outages, deadlines, stubborn bugs.',
            uk: '*was able to* і *managed to* обидва повідомляють про минулий успіх, але *managed to* додає відтінок: **зусилля проти труднощів**. *We **managed to** restore the database from a three-week-old backup* каже, що було важко і ми ледве впорались; *We **were able to** restore it* — нейтрально. Для легкого, рутинного успіху *managed to* звучить дивно (*I managed to open the door* натякає, що двері опирались). Лишайте його для справжніх перешкод — аварій, дедлайнів, впертих багів.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Past **permission** repeats the ability pattern. For a **general** past permission — a standing rule that you were allowed something — *could* is fine: *As interns we **could** use the gym any time.* But for permission on **one specific occasion** that was actually used, prefer *was allowed to*: *After I explained, they **let me** / I **was allowed to** push the hotfix.* (✗ *they could let me* — the same single-event trap as ability.) To report a past ban: *We **weren’t allowed to** access production.*',
            uk: 'Минулий **дозвіл** повторює патерн уміння. Для **загального** минулого дозволу — сталого правила, що вам щось дозволялось — *could* годиться: *As interns we **could** use the gym any time.* Але для дозволу в **один конкретний раз**, яким справді скористались, обирайте *was allowed to*: *After I explained, they **let me** / I **was allowed to** push the hotfix.* (✗ *they could let me* — та сама пастка разової події, що й з умінням.) Щоб описати минулу заборону: *We **weren’t allowed to** access production.*',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The past four, side by side — one line each so the choice is mechanical.',
            uk: 'Минула четвірка поруч — по рядку на кожну, щоб вибір став механічним.',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'Use it for', uk: 'Коли вживати' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'could + V1', uk: 'could + V1' },
              { en: 'general past ability OR general past permission', uk: 'загальне минуле вміння АБО загальний минулий дозвіл' },
              { en: 'She **could** read at four.', uk: 'She **could** read at four.' },
            ],
            [
              { en: 'was/were able to', uk: 'was/were able to' },
              { en: 'a single past success (neutral)', uk: 'разовий успіх у минулому (нейтрально)' },
              { en: 'We **were able to** ship on time.', uk: 'We **were able to** ship on time.' },
            ],
            [
              { en: 'managed to', uk: 'managed to' },
              { en: 'a single past success against difficulty', uk: 'разовий успіх усупереч труднощам' },
              { en: 'We **managed to** save the demo.', uk: 'We **managed to** save the demo.' },
            ],
            [
              { en: 'was/were allowed to', uk: 'was/were allowed to' },
              { en: 'a specific past permission (used)', uk: 'конкретний минулий дозвіл (яким скористались)' },
              { en: 'I **was allowed to** WFH that week.', uk: 'I **was allowed to** WFH that week.' },
            ],
            [
              { en: 'couldn’t', uk: 'couldn’t' },
              { en: 'any past inability (general or single)', uk: 'будь-яка минула нездатність (загальна чи разова)' },
              { en: 'I **couldn’t** log in this morning.', uk: 'I **couldn’t** log in this morning.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'A three-second decision for the past', uk: 'Рішення на три секунди для минулого' },
          md: {
            en: 'Ask two questions. **General skill/rule, or one occasion?** General → *could* is safe. One occasion → not *could*. Then **did it succeed?** Yes, and it was hard → *managed to*; yes, neutral → *was able to*; no → *couldn’t* (always allowed). That path keeps you out of the single most common past-modal mistake.',
            uk: 'Поставте два питання. **Загальна навичка/правило чи один раз?** Загальне → *could* безпечне. Один раз → не *could*. Далі **чи вдалося?** Так, і було важко → *managed to*; так, нейтрально → *was able to*; ні → *couldn’t* (завжди можна). Цей шлях убереже від найчастішої помилки з минулими modals.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'can = present ability & possibility; could = general past ability; will be able to = future ability (modals never stack, so ✗ will can).',
      uk: 'can = теперішнє вміння й можливість; could = загальне минуле вміння; will be able to = майбутнє вміння (modals не стоять поруч, тож ✗ will can).',
    },
    {
      en: 'The single-success trap: for ONE specific past success use was able to / managed to, never affirmative could. couldn’t covers both general and single-occasion inability.',
      uk: 'Пастка разового успіху: для ОДНОГО конкретного успіху в минулому — was able to / managed to, ніколи стверджувальне could. couldn’t покриває і загальну, і разову нездатність.',
    },
    {
      en: 'be able to is the semi-modal that fills can’s holes: future, perfect, infinitive, and the slot after another modal — but in the plain present/past, prefer the shorter can/could.',
      uk: 'be able to — semi-modal, що закриває дірки can: майбутнє, перфект, інфінітив і місце після іншого modal — але в простому теперішньому/минулому обирайте коротше can/could.',
    },
    {
      en: 'Permission ladder: Can I…? (casual) → Could I…? (polite) → May I…? (formal). could only ASKS — grant with can/may, never “Yes, you could”.',
      uk: 'Драбина дозволу: Can I…? (невимушено) → Could I…? (ввічливо) → May I…? (формально). could лише ПРОСИТЬ — надавайте через can/may, ніколи «Yes, you could».',
    },
    {
      en: 'managed to = a success against real difficulty; was able to = a neutral success. Past permission mirrors ability: could (general) vs was allowed to (a specific occasion).',
      uk: 'managed to = успіх усупереч справжнім труднощам; was able to = нейтральний успіх. Минулий дозвіл дзеркалить уміння: could (загальне) проти was allowed to (конкретний раз).',
    },
    {
      en: 'One Ukrainian «можу/може» splits by function: ability (can), permission (can/may), and mere possibility (might/may — not can). Pick the function first.',
      uk: 'Одне українське «можу/може» ділиться за функцією: уміння (can), дозвіл (can/may) і проста ймовірність (might/may — не can). Спершу оберіть функцію.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“Yesterday I could fix it” for a one-time success', uk: '«Yesterday I could fix it» про разовий успіх' },
      body: {
        en: 'Affirmative could = a standing skill, not a finished event. For one occasion you succeeded, say I managed to / was able to fix it. couldn’t is the only past form that works for both.',
        uk: 'Стверджувальне could = наявна навичка, а не завершена подія. Для одного разу, коли вдалося, кажіть I managed to / was able to fix it. couldn’t — єдина минула форма, що годиться для обох.',
      },
    },
    {
      title: { en: '“I will can help you tomorrow”', uk: '«I will can help you tomorrow»' },
      body: {
        en: 'Two modals never stand together. Future ability = will be able to: I’ll be able to help you tomorrow. Same reason ✗ might can → might be able to.',
        uk: 'Два modals не стоять поруч. Майбутнє вміння = will be able to: I’ll be able to help you tomorrow. З тієї ж причини ✗ might can → might be able to.',
      },
    },
    {
      title: { en: '“Could I take Friday off?” → “Yes, you could.”', uk: '«Could I take Friday off?» → «Yes, you could.»' },
      body: {
        en: 'could only ASKS for permission; it cannot GRANT it. Grant with can or may: “Yes, you can.” “Yes, you could” sounds hypothetical — as if there’s an unstated condition.',
        uk: 'could лише ПРОСИТЬ дозволу; надати його ним не можна. Надавайте через can або may: «Yes, you can.» «Yes, you could» звучить гіпотетично — ніби є невисловлена умова.',
      },
    },
    {
      title: { en: 'Over-using “be able to” in the present', uk: 'Надмірне «be able to» в теперішньому' },
      body: {
        en: 'I am able to send it now is grammatical but stiff. In everyday present/past, can/could are shorter and warmer: I can send it now. Save be able to for the holes can can’t fill.',
        uk: 'I am able to send it now граматично, але сухо. У побутовому теперішньому/минулому can/could коротші й тепліші: I can send it now. Лишайте be able to для дірок, які can не закриває.',
      },
    },
    {
      title: { en: '«Можливо, я прийду» → “I can come”', uk: '«Можливо, я прийду» → «I can come»' },
      body: {
        en: 'That claims ability, not probability. «Можливо» = might/may: I might come. can states that the skill/option exists, which is a different message.',
        uk: 'Це заявляє про вміння, а не ймовірність. «Можливо» = might/may: I might come. can стверджує, що навичка/опція існує, — а це інше повідомлення.',
      },
    },
    {
      title: { en: '«Вдалося» → affirmative “could”', uk: '«Вдалося» → стверджувальне «could»' },
      body: {
        en: '«Нам вдалося» always points at a completed single result → we managed to / were able to. It never maps to affirmative could, which describes capacity, not achievement.',
        uk: '«Нам вдалося» завжди вказує на завершений разовий результат → we managed to / were able to. Воно ніколи не лягає на стверджувальне could, що описує здатність, а не досягнення.',
      },
    },
    {
      title: { en: 'Confusing ability-can with permission-can', uk: 'Плутання can-уміння з can-дозволом' },
      body: {
        en: 'Can she drive? can ask about the skill OR about permission (is she allowed?). Decide which you mean; if it matters, disambiguate: Does she know how to drive? vs Is she allowed to drive it?',
        uk: 'Can she drive? може питати про навичку АБО про дозвіл (чи їй можна?). Вирішіть, що маєте на увазі; якщо важливо — уточніть: Does she know how to drive? проти Is she allowed to drive it?',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-ability-permission-1',
      kind: 'gap',
      sentence: 'After two days of digging, we finally ___ to reproduce the race condition.',
      answers: ['were able', 'managed'],
      hint: { en: 'one specific success in the past', uk: 'один конкретний успіх у минулому' },
      explain: {
        en: 'A single achieved success takes was/were able to or managed to — affirmative could would sound like a standing skill.',
        uk: 'Разовий досягнутий успіх — was/were able to або managed to; стверджувальне could звучало б як наявна навичка.',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'past'],
    },
    {
      id: 'ex-ability-permission-2',
      kind: 'mcq',
      prompt: {
        en: 'Pick the natural sentence for a general childhood ability.',
        uk: 'Оберіть природне речення про загальне вміння в дитинстві.',
      },
      options: [
        'When I was a child, I could swim really well.',
        'When I was a child, I can swim really well.',
        'When I was a child, I could to swim really well.',
      ],
      correct: 0,
      explain: {
        en: 'A general ability that lasted over time = could + bare infinitive. can is present; could to breaks the bare-infinitive rule.',
        uk: 'Загальне вміння, що тривало в часі, = could + bare infinitive. can — теперішнє; could to порушує правило bare infinitive.',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'past'],
    },
    {
      id: 'ex-ability-permission-3',
      kind: 'gap',
      sentence: 'Once the SSO rollout is done, everyone ___ log in with a single password.',
      answers: ['will be able to'],
      hint: { en: 'future ability', uk: 'уміння в майбутньому' },
      explain: {
        en: 'The future of can is will be able to — modals never stack, so ✗ will can.',
        uk: 'Майбутнє від can — will be able to; modals не стоять поруч, тож ✗ will can.',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'future', 'form'],
    },
    {
      id: 'ex-ability-permission-4',
      kind: 'mcq',
      prompt: {
        en: '“If the review is quick, we ___ ship on Friday.” Express a real possibility with the ability semi-modal.',
        uk: '«If the review is quick, we ___ ship on Friday.» Виразіть реальну можливість через semi-modal уміння.',
      },
      options: ['might can', 'might be able to', 'can might'],
      correct: 1,
      explain: {
        en: 'After another modal, can is impossible — use be able to: might be able to.',
        uk: 'Після іншого modal can неможливе — вживайте be able to: might be able to.',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'possibility', 'form'],
    },
    {
      id: 'ex-ability-permission-5',
      kind: 'mcq',
      prompt: {
        en: 'Most natural in everyday speech:',
        uk: 'Найприродніше в повсякденному мовленні:',
      },
      options: ['I am able to help you now.', 'I can help you now.', 'I could to help you now.'],
      correct: 1,
      explain: {
        en: 'In the simple present, can is shorter and warmer than be able to; could to is ungrammatical.',
        uk: 'У простому теперішньому can коротше й тепліше за be able to; could to — неграматично.',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'form', 'register'],
    },
    {
      id: 'ex-ability-permission-6',
      kind: 'gap',
      sentence: 'Since we added tracing, we ___ been able to find leaks in minutes.',
      answers: ['have'],
      hint: { en: 'present perfect of the ability semi-modal', uk: 'present perfect від semi-modal уміння' },
      explain: {
        en: 'can has no perfect form; be able to supplies it: have been able to.',
        uk: 'can не має перфектної форми; її дає be able to: have been able to.',
      },
      level: 'b2',
      tags: ['modals', 'ability', 'form'],
    },
    {
      id: 'ex-ability-permission-7',
      kind: 'gap',
      sentence: '___ I borrow ten minutes of your time this afternoon?',
      answers: ['could', 'may', 'can'],
      hint: { en: 'ask for permission politely', uk: 'ввічливо попросити дозволу' },
      explain: {
        en: 'All three ask for permission; could/may are more polite/formal than can — pick by relationship.',
        uk: 'Усі три просять дозволу; could/may ввічливіші/формальніші за can — обирайте за стосунками.',
      },
      level: 'b1',
      tags: ['modals', 'permission', 'request'],
    },
    {
      id: 'ex-ability-permission-8',
      kind: 'mcq',
      prompt: {
        en: '“Could I take Friday off?” Your manager agrees. The best reply is:',
        uk: '«Could I take Friday off?» Керівник погоджується. Найкраща відповідь:',
      },
      options: ['Yes, you could.', 'Yes, you can.', 'Yes, you may could.'],
      correct: 1,
      explain: {
        en: 'could only asks; grant permission with can (or the formal may). “Yes, you could” sounds hypothetical.',
        uk: 'could лише просить; надавайте дозвіл через can (або формальне may). «Yes, you could» звучить гіпотетично.',
      },
      level: 'b1',
      tags: ['modals', 'permission'],
    },
    {
      id: 'ex-ability-permission-9',
      kind: 'mcq',
      prompt: {
        en: 'Most formal way to ask a stranger for permission to sit down:',
        uk: 'Найформальніший спосіб попросити незнайомця про дозвіл сісти:',
      },
      options: ['Can I sit here?', 'May I sit here?', 'I sit here?'],
      correct: 1,
      explain: {
        en: 'May I…? is the most formal permission request; Can I…? is casual; “I sit here?” isn’t a question form.',
        uk: 'May I…? — найформальніше прохання дозволу; Can I…? — невимушене; «I sit here?» — не питальна форма.',
      },
      level: 'b1',
      tags: ['modals', 'permission', 'register'],
    },
    {
      id: 'ex-ability-permission-10',
      kind: 'gap',
      sentence: 'Visitors ___ not enter the server room without an escort.',
      answers: ['may', 'must'],
      hint: { en: 'a formal refusal / prohibition', uk: 'формальна відмова / заборона' },
      explain: {
        en: 'may not = permission refused (formal); must not = a stronger ban. Both fit a posted rule.',
        uk: 'may not = у дозволі відмовлено (формально); must not = сильніша заборона. Обидва пасують до писаного правила.',
      },
      level: 'b1',
      tags: ['modals', 'permission', 'prohibition', 'negation'],
    },
    {
      id: 'ex-ability-permission-11',
      kind: 'gap',
      sentence: 'As contractors, we ___ use the parking lot whenever we liked.',
      answers: ['could', 'were allowed to'],
      hint: { en: 'general permission in the past', uk: 'загальний дозвіл у минулому' },
      explain: {
        en: 'A standing past permission takes could or was/were allowed to.',
        uk: 'Сталий минулий дозвіл — could або was/were allowed to.',
      },
      level: 'b1',
      tags: ['modals', 'permission', 'past'],
    },
    {
      id: 'ex-ability-permission-12',
      kind: 'gap',
      sentence: 'After I signed the NDA, I ___ to see the full roadmap.',
      answers: ['was allowed'],
      hint: { en: 'permission on one specific occasion', uk: 'дозвіл в один конкретний раз' },
      explain: {
        en: 'A specific past permission that was actually used = was allowed to; ✗ could (the single-occasion trap).',
        uk: 'Конкретний минулий дозвіл, яким скористались, = was allowed to; ✗ could (пастка разового випадку).',
      },
      level: 'b2',
      tags: ['modals', 'permission', 'past'],
    },
    {
      id: 'ex-ability-permission-13',
      kind: 'gap',
      sentence: 'The site was collapsing under load, but we ___ to keep it up through the whole sale.',
      answers: ['managed', 'were able'],
      hint: { en: 'a hard-won success', uk: 'важко здобутий успіх' },
      explain: {
        en: 'A single success against real difficulty = managed to (or the neutral was able to).',
        uk: 'Разовий успіх усупереч справжнім труднощам = managed to (або нейтральне was able to).',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'past'],
    },
    {
      id: 'ex-ability-permission-14',
      kind: 'mcq',
      prompt: {
        en: '“It was really tough, but we ___ finish before the freeze.”',
        uk: '«It was really tough, but we ___ finish before the freeze.»',
      },
      options: ['could', 'managed to', 'could to'],
      correct: 1,
      explain: {
        en: 'A hard single success takes managed to; affirmative could is wrong for one completed event.',
        uk: 'Важкий разовий успіх — managed to; стверджувальне could неправильне для однієї завершеної події.',
      },
      level: 'b2',
      tags: ['modals', 'ability', 'past'],
    },
    {
      id: 'ex-ability-permission-15',
      kind: 'mcq',
      prompt: {
        en: '«Можливо, я приєднаюся пізніше» in natural English is:',
        uk: '«Можливо, я приєднаюся пізніше» природною англійською — це:',
      },
      options: ['I can join later.', 'I might join later.', 'I could to join later.'],
      correct: 1,
      explain: {
        en: '«Можливо» is possibility → might/may. I can join claims ability, not probability.',
        uk: '«Можливо» — це ймовірність → might/may. I can join заявляє про вміння, а не ймовірність.',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'possibility'],
    },
    {
      id: 'ex-ability-permission-16',
      kind: 'gap',
      sentence: 'I ___ log in this morning — SSO was throwing 500s for an hour.',
      answers: ["couldn't", 'could not', "wasn't able to", 'was not able to'],
      hint: { en: 'past inability on one occasion', uk: 'минула нездатність в один раз' },
      explain: {
        en: 'The negative works for single events too: couldn’t / wasn’t able to. (Only affirmative could is barred here.)',
        uk: 'Заперечення годиться і для разових подій: couldn’t / wasn’t able to. (Заборонене тут лише стверджувальне could.)',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'past', 'negation'],
    },
  ],
  seeAlso: ['m17-modal-system', 'm19-obligation-necessity', 'm22-requests-politeness'],
  sources: [
    {
      title: 'British Council LearnEnglish — Past ability (could, was able to, managed to)',
      url: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-ability',
    },
    {
      title: 'British Council LearnEnglish — Modals: permission and obligation',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation',
    },
    {
      title: 'Cambridge Dictionary — Can',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/can',
    },
    {
      title: 'Cambridge Dictionary — Be able to',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/be-able-to',
    },
  ],
};
