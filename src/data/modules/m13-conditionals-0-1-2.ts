import type { Module } from '../types';

/*
 * CHANGED (C1): M13 · Conditionals 0 / 1 / 2 — Section III Core Grammar, the section's signature
 * module (★ conditionals-machine). Authored EN first, UA second; grammar terms stay English in both
 * languages; examples are US English with a work/dev lean. Facts verified against Cambridge Grammar
 * (Conditionals: if · Unless · In case (of) · If or when? · Conditionals: typical errors · Other
 * expressions: unless, should, as long as) and British Council LearnEnglish (Conditionals: zero, first
 * and second). The unless ≠ "if … not" boundary follows Swan's "except if" analysis (Practical English
 * Usage), as discussed in the onestopenglish "unless and if" note.
 * Spine: a reality dial — always true (Type 0) → really possible (Type 1) → imagined (Type 2) — where
 * every step away from reality moves the if-clause verb one tense BACK, and will/would never enter
 * the if-clause.
 */
export const m13: Module = {
  id: 'm13-conditionals-0-1-2',
  num: 13,
  section: 's2-core-grammar',
  order: 2,
  level: 'b1',
  signature: true,
  title: { en: 'Conditionals 0 / 1 / 2', uk: 'Conditionals 0 / 1 / 2' },
  tagline: {
    en: 'If it’s always true, if it may really happen, if you only imagine it — English picks the form by how REAL the condition is, not by the clock. And will never goes after if.',
    uk: 'Якщо це завжди правда, якщо це справді може статися, якщо ви це лише уявляєте, — англійська обирає форму за тим, наскільки РЕАЛЬНА умова, а не за годинником. І will ніколи не стоїть після if.',
  },
  readMins: 22,
  mentalModel: {
    en: 'A conditional is a reality dial. Type 0 = always true (if + Present → Present). Type 1 = really possible (if + Present → will). Type 2 = imagined (if + Past → would). Each step away from reality moves the if-clause verb one tense BACK — so the past form in Type 2 means “not real”, not “in the past”. The if-clause never takes will or would; the main clause carries them.',
    uk: 'Conditional — це регулятор реальності. Type 0 = завжди правда (if + Present → Present). Type 1 = реально можливо (if + Present → will). Type 2 = уявне (if + Past → would). Кожен крок від реальності зсуває дієслово if-частини на один час НАЗАД — тож минула форма в Type 2 означає «нереально», а не «в минулому». If-частина ніколи не бере will чи would; їх несе головна частина.',
  },
  topics: [
    // ── 1. ZERO & FIRST ────────────────────────────────────────────────────
    {
      id: 'zero-first',
      title: { en: 'Type 0 and Type 1: always true vs really possible', uk: 'Type 0 і Type 1: завжди правда vs реально можливо' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A conditional has two halves: the **if-clause** (the condition) and the **main clause** (the result). The first question is not “what time is it?” but **“how real is this?”** If it is **always true** — a rule, a law of nature, how a system behaves — use **Type 0**: Present Simple in both halves. *If a test **fails**, the pipeline **stops**.* If it is a **real, possible** future event — it may or may not happen — use **Type 1**: Present Simple after *if*, **will** in the result. *If the client **approves** the design, we**’ll start** on Monday.*',
            uk: 'Conditional має дві половини: **if-частину** (умову) і **головну частину** (результат). Перше питання — не «котра година?», а **«наскільки це реально?»** Якщо це **завжди правда** — правило, закон природи, поведінка системи, — беріть **Type 0**: Present Simple в обох половинах. *If a test **fails**, the pipeline **stops**.* Якщо це **реальна, можлива** майбутня подія — може статися, а може й ні, — беріть **Type 1**: Present Simple після *if*, **will** у результаті. *If the client **approves** the design, we**’ll start** on Monday.*',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Type', uk: 'Тип' },
            { en: 'if-clause', uk: 'if-частина' },
            { en: 'main clause', uk: 'головна частина' },
            { en: 'Use', uk: 'Вжиток' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'Type 0', uk: 'Type 0' },
              { en: 'if / when + Present Simple', uk: 'if / when + Present Simple' },
              { en: 'Present Simple', uk: 'Present Simple' },
              { en: 'always true: rules, facts, system behavior', uk: 'завжди правда: правила, факти, поведінка системи' },
              { en: 'If you heat ice, it melts.', uk: 'If you heat ice, it melts. — Якщо нагріти лід, він тане.' },
            ],
            [
              { en: 'Type 1', uk: 'Type 1' },
              { en: 'if + Present Simple', uk: 'if + Present Simple' },
              { en: 'will / won’t + V1', uk: 'will / won’t + V1' },
              { en: 'a real, possible future', uk: 'реальне, можливе майбутнє' },
              {
                en: 'If we don’t fix this bug today, the release will slip.',
                uk: 'If we don’t fix this bug today, the release will slip. — Якщо ми не виправимо цей баг сьогодні, реліз зсунеться.',
              },
            ],
          ],
          caption: {
            en: 'Same if-clause form, different main clause: Type 0 states a rule, Type 1 predicts one case.',
            uk: 'Та сама форма if-частини, різна головна: Type 0 формулює правило, Type 1 прогнозує один випадок.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The mandatory UA trap: “If I will see him…”', uk: 'Обовʼязкова пастка україномовних: «If I will see him…»' },
          md: {
            en: 'Ukrainian puts the future in **both** halves — *«Якщо я **побачу** його, я **скажу**»* — so the calque is *“If I **will see** him, I’ll tell him.”* ✗. English keeps the if-clause in the **present**: *If I **see** him, I’ll tell him.* ✓ It is exactly the rule you met for time clauses in [m9 — no will after when / if](#/m/m9-future-forms/time-clauses): one future per sentence, and it lives in the main clause. The same goes for *unless, as long as, in case*.',
            uk: 'Українська ставить майбутнє в **обидві** половини — *«Якщо я **побачу** його, я **скажу**»*, — тож калька виходить *«If I **will see** him, I’ll tell him.»* ✗. Англійська тримає if-частину в **present**: *If I **see** him, I’ll tell him.* ✓ Це те саме правило, що й для time clauses у [m9 — жодного will після when / if](#/m/m9-future-forms/time-clauses): одне майбутнє на речення, і живе воно в головній частині. Так само після *unless, as long as, in case*.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'if = maybe it happens', uk: 'if = можливо, станеться' },
          b: { en: 'when = it will happen, only not yet', uk: 'when = станеться, просто ще не зараз' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'If the client calls, tell her I’m in a meeting.', uk: 'If the client calls, tell her I’m in a meeting.' },
              { en: 'When the client calls, tell her I’m in a meeting.', uk: 'When the client calls, tell her I’m in a meeting.' },
            ],
            [
              { en: 'What the speaker assumes', uk: 'Що припускає мовець' },
              { en: 'she may not call at all', uk: 'вона може й не подзвонити' },
              { en: 'she will call — it’s a question of time', uk: 'вона подзвонить — питання часу' },
            ],
            [
              { en: 'UA', uk: 'UA' },
              { en: 'якщо', uk: 'якщо' },
              { en: 'коли', uk: 'коли' },
            ],
            [
              { en: 'In Type 0', uk: 'У Type 0' },
              { en: 'If you heat ice, it melts.', uk: 'If you heat ice, it melts.' },
              { en: 'When you heat ice, it melts. — the same: every time', uk: 'When you heat ice, it melts. — те саме: щоразу' },
            ],
          ],
        },
        {
          kind: 'table',
          dive: 3,
          head: [
            { en: 'Main clause in Type 1 / present real', uk: 'Головна частина в Type 1 / present real' },
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'will / won’t + V1', uk: 'will / won’t + V1' },
              { en: 'a confident prediction', uk: 'упевнений прогноз' },
              { en: 'If it rains, the event will move indoors.', uk: 'If it rains, the event will move indoors.' },
            ],
            [
              { en: 'may / might / could + V1', uk: 'may / might / could + V1' },
              { en: 'a possible result', uk: 'можливий результат' },
              { en: 'If we hire two people, we might finish in May.', uk: 'If we hire two people, we might finish in May.' },
            ],
            [
              { en: 'imperative', uk: 'imperative' },
              { en: 'an instruction', uk: 'інструкція' },
              { en: 'If the build fails, check the logs first.', uk: 'If the build fails, check the logs first.' },
            ],
            [
              { en: 'should / can + V1', uk: 'should / can + V1' },
              { en: 'advice / permission', uk: 'порада / дозвіл' },
              { en: 'If you’re tired, you should take a break.', uk: 'If you’re tired, you should take a break.' },
            ],
          ],
          caption: {
            en: 'The if-clause stays in the present; only the main clause changes its job (Cambridge: “a modal verb with future meaning” in the main clause).',
            uk: 'If-частина лишається в present; змінює роботу лише головна (Cambridge: «modal verb із майбутнім значенням» у головній частині).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Real conditions are not only about the future.** A condition can be about **now** — *If you’**re** ready, let’s start* (present real: the main clause reacts now) — or about the **past**, when it is still real: a past habit (*If the build **failed**, Tom always **fixed** it* — Type 0 moved back in time) or an **open past** you don’t know yet (*If she **sent** the invoice yesterday, it’**ll arrive** today*). Here the Past Simple means real past — no *would*. The Conditionals Machine shows both as “fine print” cells.',
            uk: '**Реальні умови бувають не лише про майбутнє.** Умова може бути про **зараз** — *If you’**re** ready, let’s start* (present real: головна частина реагує зараз), — або про **минуле**, коли воно досі реальне: минула звичка (*If the build **failed**, Tom always **fixed** it* — Type 0, перенесений у минуле) чи **відкрите минуле**, якого ви ще не знаєте (*If she **sent** the invoice yesterday, it’**ll arrive** today*). Тут Past Simple означає реальне минуле — без *would*. Conditionals Machine показує обидва як клітинки «дрібного шрифту».',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: when will after if IS correct', uk: 'Дрібний шрифт: коли will після if — ПРАВИЛЬНО' },
          md: {
            en: 'The ban is on will as **pure future**. *will* after *if* is fine when it means **willingness / insistence** — *If you**’ll wait** here, I’ll get the manager* (= if you are willing to wait) — and when *if* opens an **indirect question**, not a condition: *I don’t know **if** she**’ll come*** (see m9). Cambridge lists the willingness use explicitly. At B1, treat “no will after if” as the rule and these two as deliberate exceptions.',
            uk: 'Заборона стосується will як **чистого майбутнього**. *will* після *if* можливе, коли означає **готовність / наполягання** — *If you**’ll wait** here, I’ll get the manager* (= якщо ви готові зачекати), — і коли *if* вводить **непряме питання**, а не умову: *I don’t know **if** she**’ll come*** (див. m9). Cambridge прямо наводить значення готовності. На B1 тримайте «жодного will після if» як правило, а ці два — як свідомі винятки.',
          },
        },
      ],
    },

    // ── 2. SECOND ──────────────────────────────────────────────────────────
    {
      id: 'second',
      title: { en: 'Type 2: the imagined present (and the unlikely future)', uk: 'Type 2: уявне теперішнє (і малоймовірне майбутнє)' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '**Type 2** imagines a situation that is **not true now** or that you think is **unlikely** in the future: **if + Past Simple → would + V1**. *If I **had** more time, I**’d learn** Rust* (I don’t have time). *If we **lost** this client next year, we **would have** to cut costs* (I don’t expect to lose them). The Past Simple here is **not past time** — Cambridge calls it a past form “to indicate a distance from reality”. One step back in tense = one step away from reality.',
            uk: '**Type 2** уявляє ситуацію, яка **не є правдою зараз** або яку ви вважаєте **малоймовірною** в майбутньому: **if + Past Simple → would + V1**. *If I **had** more time, I**’d learn** Rust* (часу немає). *If we **lost** this client next year, we **would have** to cut costs* (я не очікую їх втратити). Past Simple тут — **не минулий час**: Cambridge називає це минулою формою, що «позначає відстань від реальності». Крок назад у часі = крок від реальності.',
          },
        },
        {
          kind: 'figure',
          fig: 'conditional-distance',
          caption: {
            en: 'Distance from reality: Type 0 and Type 1 keep the present after if; Type 2 steps back to the past; Type 3 (m23) steps back again to the Past Perfect. The main clause gains will → would → would have.',
            uk: 'Відстань від реальності: Type 0 і Type 1 лишають present після if; Type 2 відступає в past; Type 3 (m23) — ще раз, у Past Perfect. Головна частина набирає will → would → would have.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Type 1 — I think it can happen', uk: 'Type 1 — я вважаю, що це може статися' },
          b: { en: 'Type 2 — I think it’s unlikely / not real', uk: 'Type 2 — я вважаю це малоймовірним / нереальним' },
          rows: [
            [
              { en: 'Job offer', uk: 'Пропозиція роботи' },
              { en: 'If I get the job, I’ll move to Lviv.', uk: 'If I get the job, I’ll move to Lviv.' },
              { en: 'If I got the job, I’d move to Lviv.', uk: 'If I got the job, I’d move to Lviv.' },
            ],
            [
              { en: 'Outage', uk: 'Збій' },
              { en: 'If the server goes down, we’ll switch to the backup.', uk: 'If the server goes down, we’ll switch to the backup.' },
              { en: 'If the server went down during the demo, we’d look terrible.', uk: 'If the server went down during the demo, we’d look terrible.' },
            ],
            [
              { en: 'Present fact', uk: 'Теперішній факт' },
              { en: 'If you’re free, let’s talk. (maybe you are)', uk: 'If you’re free, let’s talk. (можливо, ви вільні)' },
              { en: 'If you were free, we could talk. (you aren’t)', uk: 'If you were free, we could talk. (ви не вільні)' },
            ],
            [
              { en: 'The choice', uk: 'Вибір' },
              { en: 'a real plan or risk', uk: 'реальний план чи ризик' },
              { en: 'a daydream, a remote chance, the opposite of now', uk: 'мрія, віддалений шанс, протилежність теперішньому' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'If I was / If I were — both are correct', uk: 'If I was / If I were — обидва правильні' },
          md: {
            en: 'In Type 2 you can say *if I / he / she / it **were*** for every person, or the ordinary past *was*. British Council: *were* is grammatically correct, and *was* is common, especially in speech. *were* sounds more formal and careful — and in the **advice formula** it is fixed: ***If I were you**, I’d ask for a raise.* (✕ *If I was you* is heard, but avoid it in writing.)',
            uk: 'У Type 2 можна казати *if I / he / she / it **were*** для будь-якої особи або звичайне минуле *was*. British Council: *were* граматично правильне, а *was* поширене, особливо в мовленні. *were* звучить формальніше й ретельніше — а в **формулі поради** воно фіксоване: ***If I were you**, I’d ask for a raise.* (✕ *If I was you* можна почути, але на письмі уникайте.)',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'UA «якби» is time-blind — English is not', uk: 'UA «якби» не бачить часу — англійська бачить' },
          md: {
            en: 'Ukrainian uses one form for an imagined present **and** an imagined past: *«Якби я знав…»* can mean *If I **knew*** (now) or *If I **had known*** (then). English splits them: **Type 2** for now / the future, **Type 3** (*if + Past Perfect → would have + V3*, [m23](#/m/m23-conditionals-3-mixed)) for the past. So before translating «якби», ask: *is this about now, or about something that already happened?*',
            uk: 'Українська має одну форму для уявного теперішнього **і** уявного минулого: *«Якби я знав…»* може означати *If I **knew*** (зараз) або *If I **had known*** (тоді). Англійська їх розділяє: **Type 2** — для зараз / майбутнього, **Type 3** (*if + Past Perfect → would have + V3*, [m23](#/m/m23-conditionals-3-mixed)) — для минулого. Тож перед перекладом «якби» спитайте себе: *це про зараз чи про те, що вже сталося?*',
          },
        },
        {
          kind: 'sim',
          sim: 'conditionals-machine',
          caption: {
            en: 'Conditionals Machine: set how real the condition is and what time it’s about — get the type, the if-clause and main-clause forms, two examples, the UA trap and the near-misses. Switch the connector lens (unless · in case · as long as · when) to see where each one fits — and where it doesn’t.',
            uk: 'Conditionals Machine: задайте, наскільки реальна умова і про який час вона, — отримайте тип, форми if-частини та головної частини, два приклади, UA-пастку і сусідів. Перемикайте лінзу конектора (unless · in case · as long as · when), щоб побачити, де кожен підходить, а де — ні.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**would is not the only Type 2 result.** Use **could** for an imagined ability or possibility and **might** for an imagined maybe: *If we had a bigger budget, we **could** hire two more developers* · *If you asked her nicely, she **might** say yes.* The if-clause can be continuous too: *If I **were working** remotely, I’d skip the commute.*',
            uk: '**would — не єдиний результат Type 2.** Беріть **could** для уявної здатності чи можливості і **might** для уявного «можливо»: *If we had a bigger budget, we **could** hire two more developers* · *If you asked her nicely, she **might** say yes.* If-частина може бути й continuous: *If I **were working** remotely, I’d skip the commute.*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: were to, and should for a chance event', uk: 'Дрібний шрифт: were to і should для випадкової події' },
          md: {
            en: '**if … were to + V1** makes a future condition sound even more remote or hypothetical: *If the CEO **were to** resign, the deal would collapse.* At the other end, formal **if … should + V1** (often inverted: ***Should** you need help, call me*) presents a real but chance event — it is Type 1 in meaning. Both are formal; recognize them before you use them.',
            uk: '**if … were to + V1** робить майбутню умову ще віддаленішою чи гіпотетичнішою: *If the CEO **were to** resign, the deal would collapse.* З іншого боку, формальне **if … should + V1** (часто з інверсією: ***Should** you need help, call me*) подає реальну, але випадкову подію — за значенням це Type 1. Обидві форми формальні; спершу навчіться їх упізнавати, потім уживати.',
          },
        },
      ],
    },

    // ── 3. UNLESS, IN CASE, AS LONG AS ─────────────────────────────────────
    {
      id: 'unless-in-case',
      title: { en: 'unless, in case, as long as: not just other words for if', uk: 'unless, in case, as long as: не просто інші слова для if' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Several connectors open a condition clause, and they follow the same tense rules as *if* — **no will / would after them**. But they do not mean the same as *if*. **unless** = *except if* (often = *if … not*): *We won’t ship **unless** QA signs off.* **as long as** = *only if* — a necessary condition you stress: *You can work remotely **as long as** you join the standup.* **in case** is not a condition at all: it gives the **reason for a precaution** — *I’ll bring my laptop **in case** they want a demo* (I bring it anyway).',
            uk: 'Кілька конекторів відкривають умовну частину, і вони підкоряються тим самим правилам часів, що й *if*, — **жодного will / would після них**. Але значать вони не те саме, що *if*. **unless** = *хіба що / якщо не* (часто = *if … not*): *We won’t ship **unless** QA signs off.* **as long as** = *тільки якщо* — необхідна умова з наголосом: *You can work remotely **as long as** you join the standup.* **in case** — взагалі не умова: він пояснює **причину запобіжного заходу** — *I’ll bring my laptop **in case** they want a demo* (я беру його в будь-якому разі).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Connector', uk: 'Конектор' },
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Example', uk: 'Приклад' },
            { en: 'Where it doesn’t work', uk: 'Де не працює' },
          ],
          rows: [
            [
              { en: 'if', uk: 'if' },
              { en: 'a possible or imagined condition', uk: 'можлива чи уявна умова' },
              { en: 'If the tests pass, we’ll merge.', uk: 'If the tests pass, we’ll merge.' },
              { en: '—', uk: '—' },
            ],
            [
              { en: 'unless', uk: 'unless' },
              { en: 'except if (≈ if … not)', uk: 'хіба що (≈ if … not)' },
              { en: 'We won’t merge unless the tests pass.', uk: 'We won’t merge unless the tests pass.' },
              {
                en: 'when the result is caused by the thing NOT happening (I’ll be upset if he doesn’t call); plain counterfactuals',
                uk: 'коли результат спричинений тим, що щось НЕ сталося (I’ll be upset if he doesn’t call); звичайні контрфактичні',
              },
            ],
            [
              { en: 'as long as / so long as', uk: 'as long as / so long as' },
              { en: 'only if — a necessary condition', uk: 'тільки якщо — необхідна умова' },
              { en: 'You can deploy as long as you tag the release.', uk: 'You can deploy as long as you tag the release.' },
              { en: 'a neutral “maybe” condition with no stress', uk: 'нейтральна умова «можливо» без наголосу' },
            ],
            [
              { en: 'in case', uk: 'in case' },
              { en: 'as a precaution, because X might happen', uk: 'на випадок, якщо X станеться' },
              { en: 'Save a copy in case the upload fails.', uk: 'Save a copy in case the upload fails.' },
              { en: 'never a synonym of if (Cambridge)', uk: 'ніколи не синонім if (Cambridge)' },
            ],
            [
              { en: 'when', uk: 'when' },
              { en: 'it will happen; only the time is open', uk: 'це станеться; відкритий лише час' },
              { en: 'When the release is out, we’ll celebrate.', uk: 'When the release is out, we’ll celebrate.' },
              { en: 'imagined (Type 2) and uncertain conditions', uk: 'уявні (Type 2) і невизначені умови' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: 'in case = a precaution', uk: 'in case = запобіжний захід' },
          b: { en: 'if = a condition', uk: 'if = умова' },
          rows: [
            [
              { en: 'Sentence', uk: 'Речення' },
              { en: 'I’ll take an umbrella in case it rains.', uk: 'I’ll take an umbrella in case it rains.' },
              { en: 'I’ll take an umbrella if it rains.', uk: 'I’ll take an umbrella if it rains.' },
            ],
            [
              { en: 'When do I take it?', uk: 'Коли я його беру?' },
              { en: 'now, before I know — just in case', uk: 'зараз, наперед — про всяк випадок' },
              { en: 'only after it starts raining', uk: 'лише коли почнеться дощ' },
            ],
            [
              { en: 'Dev example', uk: 'Dev-приклад' },
              { en: 'We take a snapshot in case the migration breaks something.', uk: 'We take a snapshot in case the migration breaks something.' },
              { en: 'If the migration breaks something, we restore the snapshot.', uk: 'If the migration breaks something, we restore the snapshot.' },
            ],
            [
              { en: 'UA', uk: 'UA' },
              { en: 'на випадок, якщо / про всяк випадок', uk: 'на випадок, якщо / про всяк випадок' },
              { en: 'якщо', uk: 'якщо' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'unless ≠ “if not” in every sentence', uk: 'unless ≠ «if not» у кожному реченні' },
          md: {
            en: 'Think of **unless** as ***except if*** — it names the **one thing that would stop** the result. That works when something else would block the result: *I’ll come **unless** it rains* (only rain stops me). It sounds wrong when the result **comes from** the thing not happening: *I’ll be upset **if he doesn’t call*** ✓ — ✕ *I’ll be upset unless he calls* (as if his call were the only cure). For an imagined opposite of now, also keep *if … not*: ***If I weren’t** so tired, I’d come* ✓ — ✕ *Unless I were tired, I’d come.* And never ✕ *unless if*, never ✕ *unless … won’t*.',
            uk: 'Сприймайте **unless** як ***хіба що*** — він називає **єдину річ, яка зупинила б** результат. Це працює, коли результат щось блокує: *I’ll come **unless** it rains* (зупинить лише дощ). Звучить хибно, коли результат **випливає з того**, що щось не сталося: *I’ll be upset **if he doesn’t call*** ✓ — ✕ *I’ll be upset unless he calls* (ніби його дзвінок — єдині ліки). Для уявної протилежності теперішньому теж лишайте *if … not*: ***If I weren’t** so tired, I’d come* ✓ — ✕ *Unless I were tired, I’d come.* І ніколи ✕ *unless if*, ніколи ✕ *unless … won’t*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**The formal family of “only if”.** Besides *as long as / so long as*, contracts and specs use **provided (that)** / **providing (that)** and **on condition that**: *The license is free **provided that** the project is open source.* They all mean *only if*, all take the present for the future (no *will*), and they climb in formality: *as long as* (everyday) → *provided that* (business) → *on condition that* (legal).',
            uk: '**Формальна родина «тільки якщо».** Крім *as long as / so long as*, у контрактах і специфікаціях уживають **provided (that)** / **providing (that)** і **on condition that**: *The license is free **provided that** the project is open source.* Усі означають *тільки якщо*, усі беруть present для майбутнього (без *will*), і їхня формальність зростає: *as long as* (побутове) → *provided that* (ділове) → *on condition that* (юридичне).',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          dive: 4,
          title: { en: 'in case of + noun — the one place it means “if”', uk: 'in case of + іменник — єдине місце, де це «якщо»' },
          md: {
            en: 'The **preposition** *in case of* + a noun is the notice style for *if / when X happens*: ***In case of** fire, use the stairs* · ***In case of** an outage, page the on-call engineer.* Cambridge treats it separately from the conjunction *in case*, which stays a precaution. Keep the two apart: *in case of fire* (= if there is a fire) vs *I keep a fire extinguisher **in case** there’s a fire* (= as a precaution).',
            uk: '**Прийменник** *in case of* + іменник — це стиль оголошень для *якщо / коли станеться X*: ***In case of** fire, use the stairs* · ***In case of** an outage, page the on-call engineer.* Cambridge розглядає його окремо від сполучника *in case*, який лишається запобіжним заходом. Не змішуйте: *in case of fire* (= у разі пожежі) vs *I keep a fire extinguisher **in case** there’s a fire* (= про всяк випадок).',
          },
        },
      ],
    },

    // ── 4. COMMON MISTAKES ─────────────────────────────────────────────────
    {
      id: 'common-mistakes',
      title: { en: 'Common mistakes: the UA-speaker map', uk: 'Типові помилки: мапа україномовного' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Almost every conditional mistake a Ukrainian speaker makes has the same root: Ukrainian marks the **future** and the **imagined** with words that sit in **both** halves of the sentence — *побачу … скажу*, *якби … б*. English marks them in **one** place only — the main clause. Learn the pattern once and the whole table below collapses into one rule: **the if-clause is “clean” — no will, no would.**',
            uk: 'Майже кожна помилка україномовного в conditionals має один корінь: українська позначає **майбутнє** й **уявне** словами, які стоять в **обох** половинах речення — *побачу … скажу*, *якби … б*. Англійська позначає їх лише в **одному** місці — у головній частині. Засвойте цей патерн один раз, і вся таблиця нижче згорнеться в одне правило: **if-частина «чиста» — без will, без would.**',
          },
        },
        {
          kind: 'table',
          head: [
            { en: '✕ Typical mistake', uk: '✕ Типова помилка' },
            { en: '✓ Correct', uk: '✓ Правильно' },
            { en: 'Why', uk: 'Чому' },
          ],
          rows: [
            [
              { en: 'If I will see him, I’ll tell him.', uk: 'If I will see him, I’ll tell him.' },
              { en: 'If I see him, I’ll tell him.', uk: 'If I see him, I’ll tell him.' },
              { en: 'no will after if (UA «побачу» = future)', uk: 'після if немає will (UA «побачу» = майбутнє)' },
            ],
            [
              { en: 'If I would know, I would tell you.', uk: 'If I would know, I would tell you.' },
              { en: 'If I knew, I would tell you.', uk: 'If I knew, I would tell you.' },
              { en: 'would only in the main clause (UA «би» in both)', uk: 'would лише в головній (UA «би» в обох)' },
            ],
            [
              { en: 'If I had time yesterday, I would come.', uk: 'If I had time yesterday, I would come.' },
              { en: 'If I had had time yesterday, I would have come.', uk: 'If I had had time yesterday, I would have come.' },
              { en: '«якби» about the past = Type 3 (m23)', uk: '«якби» про минуле = Type 3 (m23)' },
            ],
            [
              { en: 'Unless he won’t call, I’ll wait.', uk: 'Unless he won’t call, I’ll wait.' },
              { en: 'Unless he calls, I’ll wait. / I’ll wait unless he calls.', uk: 'Unless he calls, I’ll wait. / I’ll wait unless he calls.' },
              { en: 'unless already contains “not”, and no will after it', uk: 'unless уже містить «не», і після нього немає will' },
            ],
            [
              { en: 'I’ll take an umbrella if it rains. (meaning: just in case)', uk: 'I’ll take an umbrella if it rains. (у значенні: про всяк випадок)' },
              { en: 'I’ll take an umbrella in case it rains.', uk: 'I’ll take an umbrella in case it rains.' },
              { en: 'a precaution is in case, not if', uk: 'запобіжний захід — це in case, а не if' },
            ],
            [
              { en: 'When I had more money, I would buy a car. (imagined)', uk: 'When I had more money, I would buy a car. (уявне)' },
              { en: 'If I had more money, I would buy a car.', uk: 'If I had more money, I would buy a car.' },
              { en: 'when cannot carry an imagined condition', uk: 'when не може нести уявну умову' },
            ],
            [
              { en: 'If I have more time, I would learn Rust.', uk: 'If I have more time, I would learn Rust.' },
              { en: 'If I have more time, I’ll learn Rust. / If I had more time, I’d learn Rust.', uk: 'If I have more time, I’ll learn Rust. / If I had more time, I’d learn Rust.' },
              { en: 'don’t glue Type 1 and Type 2 — pick your odds', uk: 'не склеюйте Type 1 і Type 2 — оберіть свої шанси' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: '✕ the UA calque: would in both halves', uk: '✕ українська калька: would в обох половинах' },
          b: { en: '✓ English: would in the main clause only', uk: '✓ англійська: would лише в головній частині' },
          rows: [
            [
              { en: 'Wish', uk: 'Мрія' },
              { en: 'If I would live closer, I would walk to work.', uk: 'If I would live closer, I would walk to work.' },
              { en: 'If I lived closer, I would walk to work.', uk: 'If I lived closer, I would walk to work.' },
            ],
            [
              { en: 'Advice', uk: 'Порада' },
              { en: 'If I would be you, I would refactor it.', uk: 'If I would be you, I would refactor it.' },
              { en: 'If I were you, I would refactor it.', uk: 'If I were you, I would refactor it.' },
            ],
            [
              { en: 'UA', uk: 'UA' },
              { en: 'Якби я жив ближче, я б ходив пішки.', uk: 'Якби я жив ближче, я б ходив пішки.' },
              { en: '«якби» → Past Simple; «б» → would', uk: '«якби» → Past Simple; «б» → would' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Type 2 is not the “polite form”', uk: 'Type 2 — не «ввічлива форма»' },
          md: {
            en: 'In Ukrainian, «би» often just softens: *«Я б хотів…»*, *«Ви б не могли…»*. So UA speakers wrap **real** plans and requests in Type 2: *“If I had time, I would come”* — when they actually plan to come. In English that sentence says **you won’t come** (you don’t have time). For a real plan use Type 1: *If I **have** time, I**’ll** come.* English politeness comes from **could / would in the request itself** (*Could you send me the file?* — see m22), and from fixed formulas like *I’d appreciate it **if you could**…* or *It would be great **if you could**…* — British Council notes these have Type 2 form but work as polite requests, not as imagined situations. Use them as set phrases; don’t build Type 2 sentences to sound polite.',
            uk: 'В українській «би» часто просто помʼякшує: *«Я б хотів…»*, *«Ви б не могли…»*. Тож україномовні загортають **реальні** плани й прохання в Type 2: *«If I had time, I would come»* — хоча насправді збираються прийти. Англійською це речення каже, що **ви не прийдете** (часу немає). Для реального плану — Type 1: *If I **have** time, I**’ll** come.* Ввічливість в англійській дають **could / would у самому проханні** (*Could you send me the file?* — див. m22) і фіксовані формули на кшталт *I’d appreciate it **if you could**…* чи *It would be great **if you could**…* — British Council зазначає, що вони мають форму Type 2, але працюють як ввічливі прохання, а не уявні ситуації. Уживайте їх як готові фрази; не будуйте речення Type 2, щоб звучати ввічливо.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Order and the comma.** Either half can come first, and the meaning doesn’t change. The usual style: a **comma after an if-clause that comes first** (*If the tests pass, we’ll merge.*) and **no comma when it comes second** (*We’ll merge if the tests pass.*). Starting with the main clause puts the focus on the result; starting with *if* sets the scene first.',
            uk: '**Порядок і кома.** Будь-яка половина може стояти першою, значення не змінюється. Звичний стиль: **кома після if-частини, якщо вона перша** (*If the tests pass, we’ll merge.*), і **без коми, якщо вона друга** (*We’ll merge if the tests pass.*). Початок із головної частини фокусує результат; початок з *if* спершу задає сцену.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          dive: 3,
          title: { en: 'Next on the dial: Type 3 and mixed conditionals (m23)', uk: 'Далі на регуляторі: Type 3 і mixed conditionals (m23)' },
          md: {
            en: 'One more step back gives the **imagined past**: *If I **had known** about the outage, I **would have told** you* (Type 3). And a past condition can have a present result: *If I **had taken** that job, I **would live** in Kyiv now* (mixed). Both live in [m23 — Conditionals 3, mixed & wishes](#/m/m23-conditionals-3-mixed).',
            uk: 'Ще один крок назад дає **уявне минуле**: *If I **had known** about the outage, I **would have told** you* (Type 3). А минула умова може мати теперішній результат: *If I **had taken** that job, I **would live** in Kyiv now* (mixed). Обидва — у [m23 — Conditionals 3, mixed & wishes](#/m/m23-conditionals-3-mixed).',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Choose the conditional by how REAL the condition is: always true → Type 0 · really possible → Type 1 · imagined / unlikely → Type 2.',
      uk: 'Обирайте conditional за тим, наскільки РЕАЛЬНА умова: завжди правда → Type 0 · реально можливо → Type 1 · уявне / малоймовірне → Type 2.',
    },
    {
      en: 'Type 0: if + Present → Present. Type 1: if + Present → will + V1. Type 2: if + Past → would + V1.',
      uk: 'Type 0: if + Present → Present. Type 1: if + Present → will + V1. Type 2: if + Past → would + V1.',
    },
    {
      en: 'The if-clause never takes will or would (as pure future / hypothesis) — the same rule as after when, as soon as, until (m9).',
      uk: 'If-частина ніколи не бере will чи would (як чисте майбутнє / гіпотезу) — те саме правило, що після when, as soon as, until (m9).',
    },
    {
      en: 'The Past in Type 2 means distance from reality, not past time. If I was / If I were are both correct; If I were you is fixed.',
      uk: 'Past у Type 2 означає відстань від реальності, а не минулий час. If I was / If I were — обидва правильні; If I were you — фіксоване.',
    },
    {
      en: 'unless = except if; as long as = only if; in case = as a precaution (never = if); when = it will happen.',
      uk: 'unless = хіба що; as long as = тільки якщо; in case = про всяк випадок (ніколи не = if); when = це станеться.',
    },
    {
      en: 'UA «якби» covers both an imagined present and an imagined past — English splits them into Type 2 and Type 3 (m23).',
      uk: 'UA «якби» покриває і уявне теперішнє, і уявне минуле — англійська розділяє їх на Type 2 і Type 3 (m23).',
    },
  ],
  pitfalls: [
    {
      title: { en: '“If I will see him…” — will after if', uk: '«If I will see him…» — will після if' },
      body: {
        en: 'UA «якщо побачу» is future, so will slips into the if-clause. English keeps the present: If I see him, I’ll tell him. Same with unless, as long as, in case, when (m9).',
        uk: 'UA «якщо побачу» — майбутній час, тож will прослизає в if-частину. Англійська лишає present: If I see him, I’ll tell him. Так само після unless, as long as, in case, when (m9).',
      },
    },
    {
      title: { en: '“If I would know…” — would in the if-clause', uk: '«If I would know…» — would в if-частині' },
      body: {
        en: 'UA «якби я знав би» puts «би» in both halves. English: If I knew, I would tell you — would only in the main clause.',
        uk: 'UA «якби я знав би» ставить «би» в обидві половини. Англійська: If I knew, I would tell you — would лише в головній частині.',
      },
    },
    {
      title: { en: 'Type 2 used as the “polite form”', uk: 'Type 2 як «ввічлива форма»' },
      body: {
        en: '«би» softens in Ukrainian, but Type 2 in English means “not real”: If I had time, I would come = I won’t come. For a real plan say If I have time, I’ll come; for politeness use Could you…? or set phrases like I’d appreciate it if you could…',
        uk: '«би» в українській помʼякшує, але Type 2 в англійській означає «нереально»: If I had time, I would come = я не прийду. Для реального плану — If I have time, I’ll come; для ввічливості — Could you…? або готові фрази на кшталт I’d appreciate it if you could…',
      },
    },
    {
      title: { en: '«Якби» about the past translated as Type 2', uk: '«Якби» про минуле перекладено як Type 2' },
      body: {
        en: '«Якби я знав учора…» is about the past, so it’s Type 3: If I had known yesterday, I would have told you (m23). Type 2 (If I knew) is about now.',
        uk: '«Якби я знав учора…» — про минуле, тож це Type 3: If I had known yesterday, I would have told you (m23). Type 2 (If I knew) — про зараз.',
      },
    },
    {
      title: { en: '“If I was you” in writing', uk: '«If I was you» на письмі' },
      body: {
        en: 'If I was / If I were are both fine in Type 2, but the advice formula is fixed: If I were you, I’d… Use were in writing and formal speech.',
        uk: 'If I was / If I were обидва допустимі в Type 2, але формула поради фіксована: If I were you, I’d… На письмі й у формальному мовленні беріть were.',
      },
    },
    {
      title: { en: 'unless as an automatic “if not”', uk: 'unless як автоматичне «if not»' },
      body: {
        en: 'unless = except if. It fails when the result comes from the thing not happening (I’ll be upset if he doesn’t call, not unless he calls) and in plain counterfactuals (If I weren’t tired…). Never unless if / unless … won’t.',
        uk: 'unless = хіба що. Не працює, коли результат випливає з того, що щось не сталося (I’ll be upset if he doesn’t call, а не unless he calls), і у звичайних контрфактичних (If I weren’t tired…). Ніколи unless if / unless … won’t.',
      },
    },
    {
      title: { en: 'in case used as if', uk: 'in case замість if' },
      body: {
        en: 'in case gives the reason for a precaution — you act now, whatever happens: Take an umbrella in case it rains. With if you act only after it happens. UA «на випадок, якщо» ≠ «якщо».',
        uk: 'in case пояснює причину запобіжного заходу — ви дієте зараз, хоч би що сталося: Take an umbrella in case it rains. З if ви дієте лише після того, як це станеться. UA «на випадок, якщо» ≠ «якщо».',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-conditionals-0-1-2-1',
      kind: 'gap',
      sentence: 'If the cache ___ empty, the app loads the data from the database.',
      answers: ['is'],
      hint: { en: 'be — a rule of how the system works', uk: 'be — правило роботи системи' },
      explain: {
        en: 'Type 0 — always true: if + Present Simple, Present Simple in the result.',
        uk: 'Type 0 — завжди правда: if + Present Simple, Present Simple у результаті.',
      },
      level: 'b1',
      tags: ['conditionals', 'zero-conditional'],
    },
    {
      id: 'ex-conditionals-0-1-2-2',
      kind: 'mcq',
      prompt: { en: 'Which sentence states a general rule?', uk: 'Яке речення формулює загальне правило?' },
      options: ['If you heat ice, it melts.', 'If you heated ice, it would melt.', 'If you will heat ice, it melts.'],
      correct: 0,
      explain: {
        en: 'A general truth = Type 0: Present in both halves. The second is an imagined situation; the third has will after if.',
        uk: 'Загальна істина = Type 0: Present в обох половинах. Друге — уявна ситуація; у третьому will після if.',
      },
      level: 'b1',
      tags: ['conditionals', 'zero-conditional'],
    },
    {
      id: 'ex-conditionals-0-1-2-3',
      kind: 'gap',
      sentence: 'If the client ___ the budget tomorrow, we’ll start hiring next week.',
      answers: ['approves'],
      hint: { en: 'approve — after if', uk: 'approve — після if' },
      explain: {
        en: 'Type 1: if + Present Simple, even for tomorrow. No will after if (UA «якщо затвердить» is the trap).',
        uk: 'Type 1: if + Present Simple, навіть для завтра. Після if немає will (пастка — UA «якщо затвердить»).',
      },
      level: 'b1',
      tags: ['conditionals', 'first-conditional', 'ua-trap'],
    },
    {
      id: 'ex-conditionals-0-1-2-4',
      kind: 'gap',
      sentence: 'If we don’t fix this bug today, the release ___ slip.',
      answers: ['will', 'might', 'may', 'could'],
      hint: { en: 'the result — a likely future', uk: 'результат — ймовірне майбутнє' },
      explain: {
        en: 'Type 1 result: will + V1 (or might / may / could for a less certain result).',
        uk: 'Результат Type 1: will + V1 (або might / may / could для менш певного результату).',
      },
      level: 'b1',
      tags: ['conditionals', 'first-conditional'],
    },
    {
      id: 'ex-conditionals-0-1-2-5',
      kind: 'mcq',
      prompt: { en: 'If she ___ the pull request, I’ll merge it right away.', uk: 'Якщо вона ___ pull request, я одразу його змерджу.' },
      options: ['will approve', 'approves', 'would approve'],
      correct: 1,
      explain: {
        en: 'The if-clause stays in the Present Simple; will goes only in the main clause.',
        uk: 'If-частина лишається в Present Simple; will іде лише в головну частину.',
      },
      level: 'b1',
      tags: ['conditionals', 'first-conditional', 'ua-trap'],
    },
    {
      id: 'ex-conditionals-0-1-2-6',
      kind: 'gap',
      sentence: 'If I ___ you, I’d ask for a raise before the review cycle.',
      answers: ['were'],
      hint: { en: 'be — the advice formula', uk: 'be — формула поради' },
      explain: {
        en: 'If I were you is the fixed advice formula (was is heard in speech, but were is the safe choice).',
        uk: 'If I were you — фіксована формула поради (was трапляється в мовленні, але were — безпечний вибір).',
      },
      level: 'b1',
      tags: ['conditionals', 'second-conditional', 'were'],
    },
    {
      id: 'ex-conditionals-0-1-2-7',
      kind: 'mcq',
      prompt: { en: 'If I ___ more time, I would learn Rust.', uk: 'Якби я ___ більше часу, я б вивчив Rust.' },
      options: ['would have', 'had', 'have'],
      correct: 1,
      explain: {
        en: 'Type 2: if + Past Simple. would goes only in the main clause — not would have after if (UA «мав би» is the trap).',
        uk: 'Type 2: if + Past Simple. would іде лише в головну частину — ніякого would have після if (пастка — UA «мав би»).',
      },
      level: 'b1',
      tags: ['conditionals', 'second-conditional', 'ua-trap'],
    },
    {
      id: 'ex-conditionals-0-1-2-8',
      kind: 'gap',
      sentence: 'If we had a bigger budget, we ___ hire two more developers.',
      answers: ['would', 'could', 'might'],
      hint: { en: 'the result of an imagined situation', uk: 'результат уявної ситуації' },
      explain: {
        en: 'Type 2 result: would + V1 (could = imagined ability, might = imagined maybe).',
        uk: 'Результат Type 2: would + V1 (could = уявна здатність, might = уявне «можливо»).',
      },
      level: 'b1',
      tags: ['conditionals', 'second-conditional'],
    },
    {
      id: 'ex-conditionals-0-1-2-9',
      kind: 'mcq',
      prompt: {
        en: 'You applied for a job, but you think getting it is quite unlikely. Which sentence fits best?',
        uk: 'Ви подалися на вакансію, але вважаєте, що отримати її малоймовірно. Яке речення підходить найкраще?',
      },
      options: ['If I get the job, I’ll move to Lviv.', 'If I got the job, I’d move to Lviv.', 'If I will get the job, I move to Lviv.'],
      correct: 1,
      explain: {
        en: 'Type 1 vs Type 2 is your bet on the odds: unlikely future = if + Past Simple … would.',
        uk: 'Type 1 чи Type 2 — це ваша ставка на шанси: малоймовірне майбутнє = if + Past Simple … would.',
      },
      level: 'b1',
      tags: ['conditionals', 'first-conditional', 'second-conditional'],
    },
    {
      id: 'ex-conditionals-0-1-2-10',
      kind: 'mcq',
      prompt: {
        en: 'Your manager’s leave is confirmed — it starts on Monday. “___ she’s away, I’ll cover her meetings.”',
        uk: 'Відпустку вашої менеджерки підтверджено — вона починається в понеділок. «___ вона буде відсутня, я проведу її зустрічі.»',
      },
      options: ['If', 'When', 'Unless'],
      correct: 1,
      explain: {
        en: 'It will certainly happen, so when, not if. if would suggest she might not go at all.',
        uk: 'Це точно станеться, тож when, а не if. if підказувало б, що вона може й не піти.',
      },
      level: 'b1',
      tags: ['conditionals', 'if-when'],
    },
    {
      id: 'ex-conditionals-0-1-2-11',
      kind: 'gap',
      sentence: 'We won’t ship the release ___ QA signs off.',
      answers: ['unless'],
      hint: { en: 'one word = if … not / except if', uk: 'одне слово = if … not / хіба що' },
      explain: {
        en: 'unless = except if: QA’s sign-off is the one thing that unlocks the release. The present after it, not will.',
        uk: 'unless = хіба що: схвалення QA — єдине, що відмикає реліз. Після нього present, а не will.',
      },
      level: 'b1',
      tags: ['conditionals', 'unless'],
    },
    {
      id: 'ex-conditionals-0-1-2-12',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct and natural?', uk: 'Яке речення правильне й природне?' },
      options: ['I’ll be upset unless he calls.', 'I’ll be upset if he doesn’t call.', 'Unless he won’t call, I’ll be upset.'],
      correct: 1,
      explain: {
        en: 'Being upset comes FROM him not calling, so if … not. unless (= except if) would make his call “the one cure”; unless … won’t is a double negative with will.',
        uk: 'Засмучення випливає З того, що він не дзвонить, тож if … not. unless (= хіба що) зробив би дзвінок «єдиними ліками»; unless … won’t — подвійне заперечення з will.',
      },
      level: 'b1',
      tags: ['conditionals', 'unless', 'ua-trap'],
    },
    {
      id: 'ex-conditionals-0-1-2-13',
      kind: 'mcq',
      prompt: {
        en: 'Pack a charger ___ your battery dies on the flight.',
        uk: 'Візьміть зарядку ___ батарея сяде під час польоту.',
      },
      options: ['if', 'in case', 'unless'],
      correct: 1,
      explain: {
        en: 'A precaution: you pack it now, before you know. in case, not if (with if you would pack it only after the battery died).',
        uk: 'Запобіжний захід: ви пакуєте зарядку зараз, наперед. in case, а не if (з if ви пакували б її лише після того, як батарея сіла).',
      },
      level: 'b1',
      tags: ['conditionals', 'in-case', 'ua-trap'],
    },
    {
      id: 'ex-conditionals-0-1-2-14',
      kind: 'gap',
      sentence: 'I’ll save a backup copy ___ the upload fails.',
      answers: ['in case', 'just in case'],
      hint: { en: 'two words — a precaution', uk: 'два слова — запобіжний захід' },
      explain: {
        en: 'in case + Present Simple gives the reason for a precaution (no will after it).',
        uk: 'in case + Present Simple пояснює причину запобіжного заходу (без will після нього).',
      },
      level: 'b1',
      tags: ['conditionals', 'in-case'],
    },
    {
      id: 'ex-conditionals-0-1-2-15',
      kind: 'gap',
      sentence: 'You can work from home on Fridays ___ you join the 10 a.m. standup.',
      answers: ['as long as', 'so long as', 'provided that', 'provided', 'providing'],
      hint: { en: 'three words = only if', uk: 'три слова = тільки якщо' },
      explain: {
        en: 'as long as = only if — a necessary condition, stressed. Formal: provided (that).',
        uk: 'as long as = тільки якщо — необхідна умова з наголосом. Формально: provided (that).',
      },
      level: 'b1',
      tags: ['conditionals', 'as-long-as'],
    },
    {
      id: 'ex-conditionals-0-1-2-16',
      kind: 'mcq',
      prompt: {
        en: '«Якби я знав пароль, я б увійшов» — you are talking about NOW (you don’t know it). Which English sentence?',
        uk: '«Якби я знав пароль, я б увійшов» — ви говорите про ЗАРАЗ (ви його не знаєте). Яке англійське речення?',
      },
      options: ['If I knew the password, I’d log in.', 'If I would know the password, I’d log in.', 'If I had known the password, I’d log in.'],
      correct: 0,
      explain: {
        en: 'An imagined present = Type 2: if + Past Simple … would. No would after if; had known is for the imagined past (Type 3, m23).',
        uk: 'Уявне теперішнє = Type 2: if + Past Simple … would. Після if немає would; had known — для уявного минулого (Type 3, m23).',
      },
      level: 'b1',
      tags: ['conditionals', 'second-conditional', 'ua-trap'],
    },
  ],
  seeAlso: ['m9-future-forms', 'm20-advice-criticism', 'm21-deduction-probability', 'm22-requests-politeness', 'm23-conditionals-3-mixed'],
  sources: [
    {
      title: 'Cambridge Dictionary — Conditionals: if',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if',
    },
    {
      title: 'Cambridge Dictionary — Conditionals: typical errors',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/conditionals-typical-errors',
    },
    {
      title: 'Cambridge Dictionary — Unless',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/unless',
    },
    {
      title: 'Cambridge Dictionary — In case (of)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/in-case-of',
    },
    {
      title: 'Cambridge Dictionary — If or when?',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/if-or-when',
    },
    {
      title: 'British Council LearnEnglish — Conditionals: zero, first and second',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second',
    },
  ],
};
