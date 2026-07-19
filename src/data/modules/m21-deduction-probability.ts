import type { Module } from '../types';

/*
 * M21 · Deduction & probability — Section III ★ Modal Verbs (S4). Fifth module of the flagship, and
 * the one that carries the ★ Deduction Lab sim. Authored EN first, UA second; grammar terms stay
 * English in both languages; examples are US English. Facts verified against British Council
 * (Modals – deductions about the past: negative is can't/couldn't have, NEVER mustn't have) and
 * Cambridge grammar (modality / must / can / may). Spine: a certainty dial — must (100%) → may/might/
 * could (50%) → can't (0%) — plus the past pivot have + V3, and the trap that mustn't ≠ can't.
 */
export const m21: Module = {
  id: 'm21-deduction-probability',
  num: 21,
  section: 's3-modal-verbs',
  order: 5,
  level: 'b2',
  signature: true,
  title: { en: 'Deduction & probability', uk: 'Висновки і ймовірність' },
  tagline: {
    en: 'A modal can also say how SURE you are: it must be true, it might be true, it can’t be true. Turn the same dial to the past with have + V3 — it must have been true.',
    uk: 'Modal може ще й казати, наскільки ви ВПЕВНЕНІ: it must be true, it might be true, it can’t be true. Поверніть той самий регулятор у минуле через have + V3 — it must have been true.',
  },
  readMins: 20,
  mentalModel: {
    en: 'Deduction is using a modal not to give an order but to show HOW SURE you are, reasoning from evidence. It’s a confidence dial: must (I’m certain it’s true) → should/will (probable) → may/might/could (possible) → can’t/couldn’t (I’m certain it’s false). Point it at the past with have + V3 and you reason about what happened: it must have rained. The one trap: the negative of deductive must is can’t, never mustn’t.',
    uk: 'Deduction — це вживання modal не для наказу, а щоб показати, НАСКІЛЬКИ ви впевнені, міркуючи з доказів. Це регулятор впевненості: must (певен, що так) → should/will (ймовірно) → may/might/could (можливо) → can’t/couldn’t (певен, що ні). Спрямуйте в минуле через have + V3 — і ви міркуєте про те, що сталося: it must have rained. Єдина пастка: заперечення дедуктивного must — це can’t, а не mustn’t.',
  },
  topics: [
    {
      id: 'present-deduction',
      title: { en: 'Deduction in the present: the confidence dial', uk: 'Висновок у теперішньому: регулятор впевненості' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'When you look at evidence and draw a conclusion, English uses a **modal** to mark how sure you are — this is **deduction** (or **speculation**), not an order. At the top of the dial, **must** = *I’m sure it’s true*: *The lights are on — someone **must** be in the office.* In the middle, **may / might / could** = *it’s possible*: *He isn’t answering — he **might** be in a meeting.* At the bottom, **can’t / couldn’t** = *I’m sure it’s false*: *That **can’t** be right — the totals don’t add up.* Same evidence, three different levels of confidence.',
            uk: 'Коли ви дивитесь на докази й робите висновок, англійська бере **modal**, щоб позначити рівень упевненості — це **deduction** (висновок), а не наказ. Угорі регулятора **must** = *я певен, що так*: *The lights are on — someone **must** be in the office.* Посередині **may / might / could** = *це можливо*: *He isn’t answering — he **might** be in a meeting.* Унизу **can’t / couldn’t** = *я певен, що ні*: *That **can’t** be right — the totals don’t add up.* Ті самі докази — три різні рівні впевненості.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The one trap: the negative of must is can’t, not mustn’t', uk: 'Головна пастка: заперечення must — це can’t, а не mustn’t' },
          md: {
            en: 'To say you’re **sure something is NOT true**, use **can’t** (or *couldn’t*): *She **can’t** be forty — she was in my class!* Do **not** use *mustn’t*: *mustn’t* means **prohibition** (*You mustn’t park here*), never “certainly not”. So the deduction pair is **must ↔ can’t**, not must ↔ mustn’t. This is the single most common mistake in this whole module.',
            uk: 'Щоб сказати, що ви **впевнені, що це НЕ так**, беріть **can’t** (або *couldn’t*): *She **can’t** be forty — she was in my class!* **Не** вживайте *mustn’t*: *mustn’t* означає **заборону** (*You mustn’t park here*), а не «точно ні». Тож пара для висновку — **must ↔ can’t**, а не must ↔ mustn’t. Це найпоширеніша помилка всього модуля.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Between *sure* and *possible* sits **probable**: **should / ought to** and deductive **will**. *She left at eight, so she **should** be home by now* (a confident expectation — the soft edge of deduction we met in m20). *The doorbell rang — that**’ll** be the courier* (*will* = *I’m confident that’s who it is*). And note **can** vs **could** for guesses: for a **specific** deduction we say *it **could** be a bug*, not *it can be a bug* — bare **can** states a **general** possibility (*Bugs can slip through review*), not a guess about this case.',
            uk: 'Між *певен* і *можливо* стоїть **ймовірно**: **should / ought to** і дедуктивне **will**. *She left at eight, so she **should** be home by now* (упевнене очікування — мʼякий край deduction із m20). *The doorbell rang — that**’ll** be the courier* (*will* = *я впевнений, що це саме він*). І зверніть увагу на **can** vs **could** для здогадів: для **конкретного** висновку кажемо *it **could** be a bug*, а не *it can be a bug* — голе **can** виражає **загальну** можливість (*Bugs can slip through review*), а не здогад про цей випадок.',
          },
        },
        {
          kind: 'figure',
          fig: 'certainty-scale',
          caption: {
            en: 'The certainty scale: must (100%) → should / will → may / might / could (~50%) → might not / may not → can’t / couldn’t (0%). Present forms and their past (+ have + V3). The negative end is can’t, never mustn’t.',
            uk: 'Шкала впевненості: must (100%) → should / will → may / might / could (~50%) → might not / may not → can’t / couldn’t (0%). Теперішні форми та їхнє минуле (+ have + V3). Заперечний край — can’t, ніколи mustn’t.',
          },
        },
      ],
    },
    {
      id: 'must-cant-might',
      title: { en: 'must, can’t & might: the three-way core', uk: 'must, can’t і might: тристороннє ядро' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The core of deduction is three modals for three confidence levels, all with the **bare infinitive**: **must** (sure it’s true) · **might / may / could** (possible) · **can’t / couldn’t** (sure it’s false). *He **must** know the answer* · *He **might** know the answer* · *He **can’t** know the answer.* Among the middle three, **might** and **could** are the everyday choices; **may** is a touch more formal. All three are roughly “50/50 — I’m guessing.”',
            uk: 'Ядро deduction — три modal для трьох рівнів упевненості, усі з **bare infinitive**: **must** (певен, що так) · **might / may / could** (можливо) · **can’t / couldn’t** (певен, що ні). *He **must** know the answer* · *He **might** know the answer* · *He **can’t** know the answer.* Серед середніх трьох **might** і **could** — щоденний вибір; **may** трохи формальніше. Усі три — приблизно «50/50 — я здогадуюсь».',
          },
        },
        {
          kind: 'compare',
          a: { en: 'must = deduction (I’m sure)', uk: 'must = висновок (я певен)' },
          b: { en: 'must = obligation (m19)', uk: 'must = обовʼязок (m19)' },
          rows: [
            [
              { en: 'Meaning', uk: 'Значення' },
              { en: 'I conclude it’s true', uk: 'роблю висновок, що це так' },
              { en: 'it’s necessary / required', uk: 'це необхідно / вимагається' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'You must be tired after that flight.', uk: 'You must be tired after that flight.' },
              { en: 'You must sign in before 9.', uk: 'You must sign in before 9.' },
            ],
            [
              { en: 'Negative', uk: 'Заперечення' },
              { en: 'can’t (You can’t be serious)', uk: 'can’t (You can’t be serious)' },
              { en: 'mustn’t = prohibition (You mustn’t tell)', uk: 'mustn’t = заборона (You mustn’t tell)' },
            ],
            [
              { en: 'How to tell', uk: 'Як розрізнити' },
              { en: 'about a state / fact (be, know, have)', uk: 'про стан / факт (be, know, have)' },
              { en: 'about an action someone should do', uk: 'про дію, яку хтось має зробити' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: 'must be doing / can’t be doing — deduction about right now', uk: 'must be doing / can’t be doing — висновок про просто зараз' },
          md: {
            en: 'To deduce about an action **in progress**, put the modal before **be + -ing**: *The CI is still spinning — it **must be running** the E2E suite.* *She **can’t be sleeping** — her light is on.* This is the continuous form of deduction: *modal + be + V-ing* for “happening right now”, exactly parallel to *modal + V1* for a state.',
            uk: 'Щоб зробити висновок про дію **в процесі**, поставте modal перед **be + -ing**: *The CI is still spinning — it **must be running** the E2E suite.* *She **can’t be sleeping** — her light is on.* Це тривала форма висновку: *modal + be + V-ing* для «відбувається просто зараз», точно паралельно до *modal + V1* для стану.',
          },
        },
      ],
    },
    {
      id: 'past-deduction-must-have-v3',
      title: { en: 'Deduction about the past: must have + V3', uk: 'Висновок про минуле: must have + V3' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'To reason about the **past**, keep the same dial but add the **perfect infinitive — have + V3**. *The floor is wet — it **must have rained** overnight* (I’m sure it happened). *Someone **might have merged** a bad commit* (possible). *He **can’t have written** this — he was on leave all week* (impossible). The modal still sets the **confidence**; *have + V3* sets the **time**. Negatives stay **can’t / couldn’t have** — verified against the Cambridge and British Council grammars — there is **no** “mustn’t have” for deduction.',
            uk: 'Щоб міркувати про **минуле**, лишіть той самий регулятор, але додайте **perfect infinitive — have + V3**. *The floor is wet — it **must have rained** overnight* (певен, що сталося). *Someone **might have merged** a bad commit* (можливо). *He **can’t have written** this — he was on leave all week* (неможливо). Modal усе ще задає **впевненість**; *have + V3* задає **час**. Заперечення лишаються **can’t / couldn’t have** — звірено з граматиками Cambridge і British Council — жодного «mustn’t have» для висновку немає.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'Past deduction: the modal sets the confidence, have + V3 sets the past time.',
            uk: 'Минулий висновок: modal задає впевненість, have + V3 задає минулий час.',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'How sure?', uk: 'Наскільки певен?' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'must have + V3', uk: 'must have + V3' },
              { en: 'sure it happened', uk: 'певен, що сталося' },
              { en: 'The tests passed — you must have fixed it.', uk: 'The tests passed — you must have fixed it.' },
            ],
            [
              { en: 'may / might / could have + V3', uk: 'may / might / could have + V3' },
              { en: 'possible', uk: 'можливо' },
              { en: 'It might have been a timeout.', uk: 'It might have been a timeout.' },
            ],
            [
              { en: 'might not / may not have + V3', uk: 'might not / may not have + V3' },
              { en: 'probably didn’t', uk: 'мабуть, не' },
              { en: 'He may not have seen the message.', uk: 'He may not have seen the message.' },
            ],
            [
              { en: 'can’t / couldn’t have + V3', uk: 'can’t / couldn’t have + V3' },
              { en: 'impossible', uk: 'неможливо' },
              { en: 'She can’t have known — we told no one.', uk: 'She can’t have known — we told no one.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Three look-alikes: must have vs should have vs had to', uk: 'Три схожі: must have vs should have vs had to' },
          md: {
            en: 'The word *have* hides three different jobs. **must have + V3** = a **deduction** (*They must have left* = I conclude they left). **should have + V3** = **criticism / regret** (m20: *You should have tested it* = you didn’t). **had to + V1** = a **past obligation** (m19: *I had to restart it* = I was required to). Same *have*-shaped shell, three meanings — read the modal, not the *have*.',
            uk: 'Слово *have* ховає три різні роботи. **must have + V3** = **висновок** (*They must have left* = роблю висновок, що пішли). **should have + V3** = **критика / жаль** (m20: *You should have tested it* = ви не протестували). **had to + V1** = **минулий обовʼязок** (m19: *I had to restart it* = я був змушений). Та сама *have*-подібна оболонка — три значення; читайте modal, а не *have*.',
          },
        },
      ],
    },
    {
      id: 'certainty-scale',
      title: { en: 'The whole scale: reading the evidence', uk: 'Уся шкала: читаємо докази' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Put it together and deduction is one continuous **certainty scale** you slide up and down as the evidence changes — present with the bare infinitive, past with *have + V3*. The skill is matching the **rung to your real confidence**: don’t say *must* when you only mean *might*, and don’t collapse *might not* (probably not) into *can’t* (impossible). Try the dial below.',
            uk: 'Зберіть усе — і deduction стає однією неперервною **шкалою впевненості**, якою ви рухаєтесь угору-вниз залежно від доказів: теперішнє з bare infinitive, минуле з *have + V3*. Майстерність — підібрати **щабель під реальну впевненість**: не кажіть *must*, коли маєте на увазі лише *might*, і не зводьте *might not* (мабуть, ні) до *can’t* (неможливо). Спробуйте регулятор нижче.',
          },
        },
        {
          kind: 'sim',
          sim: 'deduction-lab',
          caption: {
            en: 'Deduction Lab: turn the certainty dial (100% → 0%) and pick a time — see the modal that carries exactly that confidence, with examples and the tempting wrong turn.',
            uk: 'Deduction Lab: крутіть регулятор упевненості (100% → 0%) і оберіть час — побачте modal, що несе саме таку впевненість, з прикладами і спокусливою хибою.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'might not = improbable', uk: 'might not = навряд чи' },
          b: { en: 'can’t = impossible', uk: 'can’t = неможливо' },
          rows: [
            [
              { en: 'Confidence', uk: 'Упевненість' },
              { en: '“probably not” (~20%)', uk: '«мабуть, ні» (~20%)' },
              { en: '“no way” (0%)', uk: '«точно ні» (0%)' },
            ],
            [
              { en: 'Present', uk: 'Теперішнє' },
              { en: 'She might not be in yet.', uk: 'She might not be in yet.' },
              { en: 'She can’t be in — the office is locked.', uk: 'She can’t be in — the office is locked.' },
            ],
            [
              { en: 'Past', uk: 'Минуле' },
              { en: 'He may not have seen it.', uk: 'He may not have seen it.' },
              { en: 'He couldn’t have seen it — it wasn’t sent.', uk: 'He couldn’t have seen it — it wasn’t sent.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'For UA speakers: turn «мабуть / напевно / точно» into a modal', uk: 'Для україномовних: перетворіть «мабуть / напевно / точно» на modal' },
          md: {
            en: 'Ukrainian often carries the certainty in an adverb — *напевно, мабуть, точно, навряд* — and learners then bolt on a weak *maybe*: ✗ *Maybe he forgot.* Native English puts the certainty **in the modal** instead: *напевно забув* → *He **must have** forgotten*; *мабуть, забув* → *He **might have** forgotten*; *точно не бачив* → *He **can’t have** seen it*. Reach for the modal, not *maybe*.',
            uk: 'Українська часто несе впевненість у прислівнику — *напевно, мабуть, точно, навряд* — і тоді додають слабке *maybe*: ✗ *Maybe he forgot.* Природна англійська кладе впевненість **у modal**: *напевно забув* → *He **must have** forgotten*; *мабуть, забув* → *He **might have** forgotten*; *точно не бачив* → *He **can’t have** seen it*. Беріть modal, а не *maybe*.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Deduction = a modal showing how SURE you are (from evidence), not an order: must (sure) · may/might/could (possible) · can’t/couldn’t (sure not). All take the bare infinitive.',
      uk: 'Deduction = modal, що показує, наскільки ви ВПЕВНЕНІ (з доказів), а не наказ: must (певен) · may/might/could (можливо) · can’t/couldn’t (певен, що ні). Усі беруть bare infinitive.',
    },
    {
      en: 'The negative of deductive must is can’t / couldn’t — NEVER mustn’t (mustn’t = prohibition). must ↔ can’t is the pair.',
      uk: 'Заперечення дедуктивного must — це can’t / couldn’t, НІКОЛИ mustn’t (mustn’t = заборона). Пара — must ↔ can’t.',
    },
    {
      en: 'should / ought to / will = probable (a confident expectation) — the high-middle of the scale, linking to m20’s “expectation” sense of should.',
      uk: 'should / ought to / will = ймовірно (упевнене очікування) — верхня середина шкали, звʼязок із «очікуванням» should із m20.',
    },
    {
      en: 'Past deduction = modal + have + V3: must have (sure) · may/might/could have (possible) · can’t/couldn’t have (impossible). No “mustn’t have”.',
      uk: 'Минулий висновок = modal + have + V3: must have (певен) · may/might/could have (можливо) · can’t/couldn’t have (неможливо). Жодного «mustn’t have».',
    },
    {
      en: '“Probably not” (improbable) = might not / may not, not can’t (impossible). In the past, couldn’t have = impossible, so improbable-past uses might not / may not have + V3.',
      uk: '«Мабуть, ні» (навряд) = might not / may not, а не can’t (неможливо). У минулому couldn’t have = неможливо, тож навряд-минуле бере might not / may not have + V3.',
    },
    {
      en: 'One have, three jobs: must have + V3 = deduction; should have + V3 = criticism/regret (m20); had to + V1 = past obligation (m19).',
      uk: 'Одне have, три роботи: must have + V3 = висновок; should have + V3 = критика/жаль (m20); had to + V1 = минулий обовʼязок (m19).',
    },
  ],
  pitfalls: [
    {
      title: { en: '“It mustn’t be true” for “it can’t be true”', uk: '«It mustn’t be true» замість «it can’t be true»' },
      body: {
        en: 'mustn’t is prohibition, not negative deduction. To say you’re sure something is false, use can’t / couldn’t: That can’t be right.',
        uk: 'mustn’t — це заборона, а не заперечний висновок. Щоб сказати, що ви певні в хибності, беріть can’t / couldn’t: That can’t be right.',
      },
    },
    {
      title: { en: '“He must to be tired” / “must is” / “must came”', uk: '«He must to be tired» / «must is» / «must came»' },
      body: {
        en: 'must takes the bare infinitive and never conjugates: must be, must know, must have gone — not must to be, must is, or must came.',
        uk: 'must бере bare infinitive і ніколи не відмінюється: must be, must know, must have gone — не must to be, must is чи must came.',
      },
    },
    {
      title: { en: 'Dropping have in the past: “He must left”', uk: 'Викидання have в минулому: «He must left»' },
      body: {
        en: 'Past deduction needs have + V3: He must have left. Without have you lose the past, and “must + past tense” is ungrammatical.',
        uk: 'Минулий висновок потребує have + V3: He must have left. Без have губиться минуле, а «must + минулий час» — неграматично.',
      },
    },
    {
      title: { en: '“mustn’t have” for an impossible past', uk: '«mustn’t have» для неможливого минулого' },
      body: {
        en: 'There is no deductive mustn’t have. Impossible in the past = can’t have / couldn’t have + V3: She can’t have known.',
        uk: 'Дедуктивного mustn’t have не існує. Неможливе в минулому = can’t have / couldn’t have + V3: She can’t have known.',
      },
    },
    {
      title: { en: 'couldn’t for “probably not”', uk: 'couldn’t для «мабуть, ні»' },
      body: {
        en: 'couldn’t (have) means impossible, not “probably not”. For an unlikely-but-possible case use might not / may not (have): He might not have seen it.',
        uk: 'couldn’t (have) означає неможливо, а не «мабуть, ні». Для малоймовірного-але-можливого беріть might not / may not (have): He might not have seen it.',
      },
    },
    {
      title: { en: '“It can be a bug” for a specific guess', uk: '«It can be a bug» для конкретного здогаду' },
      body: {
        en: 'Bare can states a general possibility (Bugs can happen), not a guess about this case. For a specific deduction use could / may / might: It could be a bug.',
        uk: 'Голе can виражає загальну можливість (Bugs can happen), а не здогад про цей випадок. Для конкретного висновку беріть could / may / might: It could be a bug.',
      },
    },
    {
      title: { en: '«напевно» → a weak “maybe” instead of a modal', uk: '«напевно» → слабке «maybe» замість modal' },
      body: {
        en: 'UA carries certainty in adverbs (напевно, мабуть). Don’t translate to a bare Maybe he forgot; put the certainty in the modal: He must have / might have forgotten.',
        uk: 'Українська несе впевненість у прислівниках (напевно, мабуть). Не перекладайте голим Maybe he forgot; кладіть упевненість у modal: He must have / might have forgotten.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-deduction-probability-1',
      kind: 'gap',
      sentence: 'The lights are on and I can hear typing — someone ___ be working late.',
      answers: ['must'],
      hint: { en: 'you’re sure (present)', uk: 'ви впевнені (теперішнє)' },
      explain: {
        en: 'Sure it’s true, from evidence = must + bare infinitive.',
        uk: 'Певні, що так, із доказів = must + bare infinitive.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'present'],
    },
    {
      id: 'ex-deduction-probability-2',
      kind: 'mcq',
      prompt: {
        en: 'You say it’s a bug in my file, but that ___ be right — I never touched that file.',
        uk: 'Кажеш, це баг у моєму файлі, але це ___ — я той файл не чіпав.',
      },
      options: ['mustn’t', 'can’t', 'shouldn’t'],
      correct: 1,
      explain: {
        en: 'Sure it’s false = can’t. mustn’t is prohibition, not negative deduction.',
        uk: 'Певні, що хибно = can’t. mustn’t — це заборона, а не заперечний висновок.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'negation'],
    },
    {
      id: 'ex-deduction-probability-3',
      kind: 'gap',
      sentence: 'She isn’t at her desk and it’s one o’clock — she ___ be at lunch.',
      answers: ['might', 'may', 'could'],
      hint: { en: 'it’s possible (a guess)', uk: 'це можливо (здогад)' },
      explain: {
        en: 'A 50/50 guess = might / may / could + bare infinitive.',
        uk: 'Здогад 50/50 = might / may / could + bare infinitive.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'present'],
    },
    {
      id: 'ex-deduction-probability-4',
      kind: 'mcq',
      prompt: {
        en: 'The ground is wet this morning. Draw a confident conclusion about the night:',
        uk: 'Земля мокра зранку. Зробіть упевнений висновок про ніч:',
      },
      options: ['It must rain.', 'It must have rained.', 'It must rained.'],
      correct: 1,
      explain: {
        en: 'Sure about the past = must have + V3. “must rain” is present; “must rained” is ungrammatical.',
        uk: 'Певні про минуле = must have + V3. «must rain» — теперішнє; «must rained» — неграматично.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'past'],
    },
    {
      id: 'ex-deduction-probability-5',
      kind: 'gap',
      sentence: 'He ___ have written that commit — he was on vacation the whole week.',
      answers: ['can’t', 'couldn’t', "can't", "couldn't"],
      hint: { en: 'impossible (past)', uk: 'неможливо (минуле)' },
      explain: {
        en: 'Impossible in the past = can’t / couldn’t have + V3. Never mustn’t have.',
        uk: 'Неможливе в минулому = can’t / couldn’t have + V3. Ніколи mustn’t have.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'past', 'negation'],
    },
    {
      id: 'ex-deduction-probability-6',
      kind: 'mcq',
      prompt: {
        en: 'He hasn’t replied. Say it’s PROBABLY (not certainly) because he hasn’t seen the message:',
        uk: 'Він не відповів. Скажіть, що це ІМОВІРНО (не точно), бо не бачив повідомлення:',
      },
      options: ['He can’t have seen the message.', 'He might not have seen the message.', 'He mustn’t have seen the message.'],
      correct: 1,
      explain: {
        en: '“Probably not” = might not / may not have + V3. can’t have = impossible; mustn’t have doesn’t exist.',
        uk: '«Мабуть, ні» = might not / may not have + V3. can’t have = неможливо; mustn’t have не існує.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'past', 'negation'],
    },
    {
      id: 'ex-deduction-probability-7',
      kind: 'gap',
      sentence: 'The deploy finished ten minutes ago, so the site ___ be live by now.',
      answers: ['should', 'ought to'],
      hint: { en: 'a confident expectation', uk: 'упевнене очікування' },
      explain: {
        en: 'Probable / expected = should / ought to (the high-middle of the scale; the m20 “expectation” sense).',
        uk: 'Ймовірно / очікувано = should / ought to (верхня середина шкали; сенс «очікування» з m20).',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'present', 'probability'],
    },
    {
      id: 'ex-deduction-probability-8',
      kind: 'mcq',
      prompt: {
        en: 'In “The office is empty — everyone must be at lunch”, must expresses:',
        uk: 'У «The office is empty — everyone must be at lunch» must виражає:',
      },
      options: ['an obligation', 'a deduction (I’m sure)', 'a prohibition'],
      correct: 1,
      explain: {
        en: 'Here must = a conclusion from evidence (deduction), not a rule. Context (a state + evidence) tells it apart from obligation.',
        uk: 'Тут must = висновок із доказів (deduction), а не правило. Контекст (стан + докази) відрізняє це від обовʼязку.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'present'],
    },
    {
      id: 'ex-deduction-probability-9',
      kind: 'gap',
      sentence: 'The CI is still spinning — it ___ be running the end-to-end suite.',
      answers: ['must'],
      hint: { en: 'sure, about an action in progress', uk: 'певні, про дію в процесі' },
      explain: {
        en: 'Deduction about right now = modal + be + V-ing: it must be running.',
        uk: 'Висновок про просто зараз = modal + be + V-ing: it must be running.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'present', 'continuous'],
    },
    {
      id: 'ex-deduction-probability-10',
      kind: 'mcq',
      prompt: {
        en: 'Which sentence is the MOST confident (you’re 100% sure)?',
        uk: 'Яке речення НАЙвпевненіше (ви на 100% певні)?',
      },
      options: ['It might be a caching issue.', 'It must be a caching issue.', 'It could be a caching issue.'],
      correct: 1,
      explain: {
        en: 'must = sure; might / could are ~50/50 guesses.',
        uk: 'must = певність; might / could — здогади ~50/50.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'certainty'],
    },
    {
      id: 'ex-deduction-probability-11',
      kind: 'gap',
      sentence: 'The tests were green yesterday. Someone ___ have changed the config since then.',
      answers: ['might', 'may', 'could'],
      hint: { en: 'possible (past)', uk: 'можливо (минуле)' },
      explain: {
        en: 'A past possibility = might / may / could have + V3.',
        uk: 'Минула можливість = might / may / could have + V3.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'past'],
    },
    {
      id: 'ex-deduction-probability-12',
      kind: 'mcq',
      prompt: {
        en: 'She joined last month, so she ___ have worked on the 2023 release.',
        uk: 'Вона приєдналася минулого місяця, тож вона ___ працювати над релізом 2023.',
      },
      options: ['mustn’t', 'can’t', 'shouldn’t'],
      correct: 1,
      explain: {
        en: 'Impossible (the timing rules it out) = can’t have + V3. mustn’t have isn’t a deduction form.',
        uk: 'Неможливо (час це виключає) = can’t have + V3. mustn’t have — не форма висновку.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'past', 'negation'],
    },
    {
      id: 'ex-deduction-probability-13',
      kind: 'gap',
      sentence: '«Він, напевно, забув про зустріч» → He ___ have forgotten about the meeting.',
      answers: ['must'],
      hint: { en: '«напевно» = you’re sure', uk: '«напевно» = ви впевнені' },
      explain: {
        en: '«напевно» signals certainty → must have + V3. Don’t translate to a weak “Maybe he forgot”.',
        uk: '«напевно» сигналить упевненість → must have + V3. Не перекладайте слабким «Maybe he forgot».',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'past'],
    },
    {
      id: 'ex-deduction-probability-14',
      kind: 'mcq',
      prompt: {
        en: 'Make a specific guess about this outage: “The site is down — it ___ be a bad deploy.”',
        uk: 'Зробіть конкретний здогад про цей збій: «The site is down — it ___ be a bad deploy.»',
      },
      options: ['can', 'could', 'must not'],
      correct: 1,
      explain: {
        en: 'A specific guess = could / may / might. Bare can states only a general possibility, not this case.',
        uk: 'Конкретний здогад = could / may / might. Голе can виражає лише загальну можливість, не цей випадок.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'present'],
    },
    {
      id: 'ex-deduction-probability-15',
      kind: 'gap',
      sentence: 'Judging by the logs, the crash ___ have been an out-of-memory error, but I’m not certain.',
      answers: ['might', 'may', 'could'],
      hint: { en: 'possible, not sure (past)', uk: 'можливо, не певно (минуле)' },
      explain: {
        en: '“I’m not certain” → a past possibility: might / may / could have + V3.',
        uk: '«Я не певний» → минула можливість: might / may / could have + V3.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'past'],
    },
    {
      id: 'ex-deduction-probability-16',
      kind: 'mcq',
      prompt: {
        en: 'Which form is correct for present deduction?',
        uk: 'Яка форма правильна для теперішнього висновку?',
      },
      options: ['He must be tired.', 'He must to be tired.', 'He must is tired.'],
      correct: 0,
      explain: {
        en: 'must + bare infinitive: must be. No to, no conjugation.',
        uk: 'must + bare infinitive: must be. Без to, без відмінювання.',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'present', 'form'],
    },
  ],
  seeAlso: ['m17-modal-system', 'm19-obligation-necessity', 'm20-advice-criticism', 'm22-requests-politeness'],
  sources: [
    {
      title: 'British Council LearnEnglish — Modals: deductions about the past',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-past',
    },
    {
      title: 'British Council LearnEnglish — Modals: deductions about the present',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-present',
    },
    {
      title: 'Cambridge Dictionary — Modality: forms and meanings (must, can’t, may, might, could)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/modality-what-are-modal-verbs',
    },
    {
      title: 'Cambridge Dictionary — Must',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/must',
    },
  ],
};
