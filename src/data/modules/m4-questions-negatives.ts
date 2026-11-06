import type { Module } from '../types';

/*
 * CHANGED (F2): M4 · Questions & negatives — Section I Foundations, wave F2 (figure question-slots; no sim: the
 * mechanics are one slot table). Authored EN first, UA second; US English base.
 * Facts read in full on British Council — Question forms (A1-A2: "we often put the verb before the subject"; the
 * question word "goes before the verb"; do / does / did; "In some questions, who or what is the subject of the verb.
 * There is no inversion"); Question tags (B1-B2: positive → negative; auxiliary, be, modal; "the negative question tag
 * is usually aren't I?"; falling = sure, rising = less sure). Cambridge returns HTTP 403 to the fetcher, so it was read
 * through search extracts: Questions: wh- questions (wh + auxiliary + subject + verb); Questions: typical errors;
 * Question words, Who, whom; Tags; Negation (headings only).
 * NOT confirmed on a learner site this session (stated without attribution): the one-negative rule and non-standard
 * double negatives (Cambridge's text did not come back); the yes / no logic; prepositions at the end; indirect
 * questions here (m15 owns reported ones); right? as a tag; the Ukrainian contrasts.
 * No overlap: be is m1; forming each tense is m7–m10; reported questions are m15; inversion for emphasis is m27.
 */
export const m4: Module = {
  id: 'm4-questions-negatives',
  num: 4,
  section: 's1-foundations',
  order: 4,
  level: 'a2',
  title: { en: 'Questions & negatives', uk: 'Питання і заперечення' },
  tagline: {
    en: 'What does this word mean, not «What means this word»; I don’t know anything, not «I don’t know nothing»; and why What happened? needs no did. Plus «так?» at the end of a sentence.',
    uk: 'What does this word mean, а не «What means this word»; I don’t know anything, а не «I don’t know nothing»; і чому What happened? обходиться без did. Плюс «так?» у кінці речення.',
  },
  readMins: 16,
  mentalModel: {
    en: 'Ukrainian turns a statement into a question with intonation. English **changes the structure**: it needs an **operator**, a small helper verb, in front of the subject. If the sentence already has one (*is, can, have, will*), that one moves. If it hasn’t, *do* comes in to do the job and **takes the tense with it**, so the main verb goes back to its base form: *She works → Does she work?* A negative works the same way: *not* needs an operator to hang on. One exception proves the rule: when *who* or *what* **is** the subject, nothing moves.',
    uk: 'Українська робить із твердження питання інтонацією. Англійська **змінює структуру**: їй потрібен **operator**, маленьке допоміжне дієслово, перед підметом. Якщо в реченні воно вже є (*is, can, have, will*), воно й переходить уперед. Якщо немає, цю роботу виконує *do* і **забирає час із собою**, тож основне дієслово повертається до базової форми: *She works → Does she work?* Заперечення працює так само: *not* потребує operator, щоб на ньому триматися. Один виняток підтверджує правило: коли *who* чи *what* **є** підметом, нічого не рухається.',
  },
  topics: [
    // ── 1. WORD ORDER ──────────────────────────────────────────────────────
    {
      id: 'word-order',
      title: { en: 'Word order: the operator goes first', uk: 'Порядок слів: operator іде першим' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council: to make questions, we often put the verb before the subject, and this is called inversion. It works for *be*, auxiliaries and modals. For other verbs we use *do / does* in the present simple and *did* in the past simple. *You work here?* with rising intonation can pass in casual speech, to check something you already expect, but it’s not the normal question form.',
            uk: 'British Council: щоб утворити питання, ми часто ставимо дієслово перед підметом, і це називається inversion. Це працює для *be*, допоміжних і модальних дієслів. Для інших дієслів вживаємо *do / does* у present simple і *did* у past simple. *You work here?* з висхідною інтонацією може пройти у невимушеному мовленні, щоб перевірити те, чого ви вже очікуєте, але це не звичайна форма питання.',
          },
        },
        {
          kind: 'figure',
          fig: 'question-slots',
          caption: {
            en: 'Every question on one set of slots. The aux stands before the subject, except in the last row, where who is the subject.',
            uk: 'Кожне питання на одному наборі слотів. Aux стоїть перед підметом, крім останнього рядка, де who і є підметом.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'One rule for questions and negatives: find the operator. With no operator, bring in do.', uk: 'Одне правило для питань і заперечень: знайдіть operator. Якщо його немає, додайте do.' },
          head: [
            { en: 'Statement', uk: 'Твердження' },
            { en: 'Operator', uk: 'Operator' },
            { en: 'Question', uk: 'Питання' },
            { en: 'Negative', uk: 'Заперечення' },
          ],
          rows: [
            [
              { en: 'She is ready.', uk: 'She is ready.' },
              { en: 'is', uk: 'is' },
              { en: 'Is she ready?', uk: 'Is she ready?' },
              { en: 'She isn’t ready.', uk: 'She isn’t ready.' },
            ],
            [
              { en: 'We can ship it.', uk: 'We can ship it.' },
              { en: 'can', uk: 'can' },
              { en: 'Can we ship it?', uk: 'Can we ship it?' },
              { en: 'We can’t ship it.', uk: 'We can’t ship it.' },
            ],
            [
              { en: 'They have finished.', uk: 'They have finished.' },
              { en: 'have', uk: 'have' },
              { en: 'Have they finished?', uk: 'Have they finished?' },
              { en: 'They haven’t finished.', uk: 'They haven’t finished.' },
            ],
            [
              { en: 'You work here.', uk: 'You work here.' },
              { en: 'do', uk: 'do' },
              { en: 'Do you work here?', uk: 'Do you work here?' },
              { en: 'You don’t work here.', uk: 'You don’t work here.' },
            ],
            [
              { en: 'She works here.', uk: 'She works here.' },
              { en: 'does', uk: 'does' },
              { en: 'Does she work here?', uk: 'Does she work here?' },
              { en: 'She doesn’t work here.', uk: 'She doesn’t work here.' },
            ],
            [
              { en: 'She went home.', uk: 'She went home.' },
              { en: 'did', uk: 'did' },
              { en: 'Did she go home?', uk: 'Did she go home?' },
              { en: 'She didn’t go home.', uk: 'She didn’t go home.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The tense marks one word, once', uk: 'Час позначає одне слово й один раз' },
          md: {
            en: 'Once *do* takes the tense, the main verb goes back to the base form: ✓ *Does she **work**?* · ✕ *Does she works?* · ✓ *Did you **go**?* · ✕ *Did you went?* · ✓ *She didn’t **call*** · ✕ *She didn’t called*.',
            uk: 'Щойно *do* забирає час, основне дієслово повертається до базової форми: ✓ *Does she **work**?* · ✕ *Does she works?* · ✓ *Did you **go**?* · ✕ *Did you went?* · ✓ *She didn’t **call*** · ✕ *She didn’t called*.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Я нічого не знаю»: one negative is enough', uk: '«Я нічого не знаю»: досить одного заперечення' },
          md: {
            en: 'Ukrainian stacks negatives: «ніхто нічого не сказав». Standard English allows **one** in a clause. Keep *not* and use *any-*, or drop *not* and use *no-*: ✓ *I **don’t** know **anything*** · ✓ *I know **nothing*** · ✕ *I don’t know nothing*. The first is the everyday choice. The same goes for *Nobody said anything*, not *Nobody said nothing*.',
            uk: 'Українська нагромаджує заперечення: «ніхто нічого не сказав». Стандартна англійська дозволяє **одне** в реченні. Лишіть *not* і вживайте *any-* або приберіть *not* і вживайте *no-*: ✓ *I **don’t** know **anything*** · ✓ *I know **nothing*** · ✕ *I don’t know nothing*. Перше — повсякденний вибір. Так само *Nobody said anything*, а не *Nobody said nothing*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Yes and no follow the facts.** Ukrainian answers the question, English answers the fact. «Ти не йдеш? — Так, не йду» confirms the negative, but in English the answer depends only on whether you are going: *Aren’t you coming?* → ✓ ***No**, I’m not.* (I’m not going) · ✓ ***Yes**, I am.* (I’m going). ✕ *Yes, I’m not* is the calque. A negative question also tends to show surprise or an expectation: *Don’t you use Git?*',
            uk: '**Yes і no йдуть за фактами.** Українська відповідає на питання, англійська — на факт. «Ти не йдеш? — Так, не йду» підтверджує заперечення, а в англійській відповідь залежить лише від того, чи ви йдете: *Aren’t you coming?* → ✓ ***No**, I’m not.* (не йду) · ✓ ***Yes**, I am.* (йду). ✕ *Yes, I’m not* — це калька. Заперечне питання ще й часто показує подив або очікування: *Don’t you use Git?*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: double negatives in the wild', uk: 'Дрібний шрифт: подвійні заперечення в реальному житті' },
          md: {
            en: 'You will hear *I don’t know nothing* and *I ain’t got no money* in songs and some dialects. It is real English, but it’s non-standard, and it will read as a mistake in your email. And the rule is about two negatives that make one meaning: *It’s not impossible* is fine, because it means “it’s possible, though hard”.',
            uk: 'У піснях і деяких діалектах ви почуєте *I don’t know nothing* та *I ain’t got no money*. Це реальна англійська, але нестандартна, і у вашому листі це виглядатиме як помилка. А правило стосується двох заперечень з одним значенням: *It’s not impossible* — нормально, бо це означає «можливо, хоч і важко».',
          },
        },
      ],
    },

    // ── 2. WH-QUESTIONS ────────────────────────────────────────────────────
    {
      id: 'wh-questions',
      title: { en: 'Wh-questions: the same order, one word in front', uk: 'Wh-питання: той самий порядок, одне слово попереду' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council: a question word goes before the verb. So a wh-question is an ordinary question with one word in front: *Do you work here? → **Where** do you work?* Cambridge lists the order as wh-word + auxiliary or modal + subject + main verb, and names ✕ *What she was eating?* as a typical error. That is what Ukrainian pushes you toward, because «Що вона їла?» needs no helper.',
            uk: 'British Council: питальне слово стоїть перед дієсловом. Отже, wh-питання — це звичайне питання з одним словом попереду: *Do you work here? → **Where** do you work?* Cambridge подає порядок як wh-слово + допоміжне чи модальне дієслово + підмет + основне дієслово й називає ✕ *What she was eating?* типовою помилкою. Саме до цього штовхає українська, бо «Що вона їла?» помічника не потребує.',
          },
        },
        {
          kind: 'compare',
          a: { en: '✕ Ukrainian order', uk: '✕ Український порядок' },
          b: { en: '✓ English', uk: '✓ Англійська' },
          rows: [
            [
              { en: '«Що означає це слово?»', uk: '«Що означає це слово?»' },
              { en: 'What means this word?', uk: 'What means this word?' },
              { en: 'What does this word mean?', uk: 'What does this word mean?' },
            ],
            [
              { en: '«Як це працює?»', uk: '«Як це працює?»' },
              { en: 'How it works?', uk: 'How it works?' },
              { en: 'How does it work?', uk: 'How does it work?' },
            ],
            [
              { en: '«Чому ти запізнився?»', uk: '«Чому ти запізнився?»' },
              { en: 'Why you are late?', uk: 'Why you are late?' },
              { en: 'Why are you late?', uk: 'Why are you late?' },
            ],
            [
              { en: '«Де вона працює?»', uk: '«Де вона працює?»' },
              { en: 'Where she works?', uk: 'Where she works?' },
              { en: 'Where does she work?', uk: 'Where does she work?' },
            ],
          ],
        },
        {
          kind: 'table',
          caption: { en: 'Two-word question starters. How many and how much follow the noun’s box (m3).', uk: 'Питальні звороти з двох слів. How many і how much залежать від коробки іменника (m3).' },
          head: [
            { en: 'Ask about', uk: 'Про що питаємо' },
            { en: 'Start', uk: 'Початок' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'Number', uk: 'Кількість' },
              { en: 'How many', uk: 'How many' },
              { en: 'How many tickets are open?', uk: 'How many tickets are open?' },
            ],
            [
              { en: 'Amount, price', uk: 'Обсяг, ціна' },
              { en: 'How much', uk: 'How much' },
              { en: 'How much does it cost?', uk: 'How much does it cost?' },
            ],
            [
              { en: 'Duration', uk: 'Тривалість' },
              { en: 'How long', uk: 'How long' },
              { en: 'How long does the build take?', uk: 'How long does the build take?' },
            ],
            [
              { en: 'Frequency', uk: 'Частота' },
              { en: 'How often', uk: 'How often' },
              { en: 'How often do you deploy?', uk: 'How often do you deploy?' },
            ],
            [
              { en: 'Age', uk: 'Вік' },
              { en: 'How old', uk: 'How old' },
              { en: 'How old is this code?', uk: 'How old is this code?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'The preposition stays at the end', uk: 'Прийменник лишається в кінці' },
          md: {
            en: '«З ким ти говориш?» starts with the preposition, but everyday English leaves it where it was, at the end: ✓ *Who are you talking **to**?* · ✓ *What is this tool **for**?* · ✓ *Where are you **from**?* · ✕ *With who are you talking?*',
            uk: '«З ким ти говориш?» починається з прийменника, а повсякденна англійська лишає його на місці, у кінці: ✓ *Who are you talking **to**?* · ✓ *What is this tool **for**?* · ✓ *Where are you **from**?* · ✕ *With who are you talking?*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Questions inside statements.** After *Do you know…*, *Can you tell me…* or *I wonder…*, the question is no longer a question, so the order returns to normal and *do* disappears: ✓ *Do you know **where she works**?* · ✕ *Do you know where does she work?* It’s also a polite way to ask: *Can you tell me **how it works**?* The full system is in [m15](#/m/m15-reported-speech), and inversion for emphasis is in [m27](#/m/m27-inversion-emphasis).',
            uk: '**Питання всередині тверджень.** Після *Do you know…*, *Can you tell me…* чи *I wonder…* питання вже не питання, тож порядок повертається до звичайного, а *do* зникає: ✓ *Do you know **where she works**?* · ✕ *Do you know where does she work?* Це ще й ввічливий спосіб запитати: *Can you tell me **how it works**?* Уся система — у [m15](#/m/m15-reported-speech), а інверсія для емфази — у [m27](#/m/m27-inversion-emphasis).',
          },
        },
      ],
    },

    // ── 3. SUBJECT QUESTIONS ───────────────────────────────────────────────
    {
      id: 'subject-questions',
      title: { en: 'Subject questions: when nothing moves', uk: 'Питання до підмета: коли нічого не рухається' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council: in some questions *who* or *what* is the subject of the verb, and there’s no inversion. Think about what you’re asking for. If the answer is the **subject**, the question word simply takes the subject’s place, and the rest of the sentence stays as it was: ***Anna** broke the build → **Who** broke the build?* There is no *do*, and the verb keeps its tense.',
            uk: 'British Council: у деяких питаннях *who* чи *what* є підметом дієслова, і інверсії немає. Подумайте, про що ви питаєте. Якщо відповідь — це **підмет**, питальне слово просто стає на його місце, а решта речення лишається як є: ***Anna** broke the build → **Who** broke the build?* Немає *do*, а дієслово зберігає свій час.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Asking for the subject: no do', uk: 'Питаємо про підмет: без do' },
          b: { en: 'Asking for the object: do', uk: 'Питаємо про додаток: з do' },
          rows: [
            [
              { en: 'Who and a person', uk: 'Who і людина' },
              { en: 'Who called you? — Anna called me.', uk: 'Who called you? — Anna called me.' },
              { en: 'Who did you call? — I called Anna.', uk: 'Who did you call? — I called Anna.' },
            ],
            [
              { en: 'What and an event', uk: 'What і подія' },
              { en: 'What happened? — A server crashed.', uk: 'What happened? — A server crashed.' },
              { en: 'What did you do? — I restarted it.', uk: 'What did you do? — I restarted it.' },
            ],
            [
              { en: 'Present', uk: 'Теперішній час' },
              { en: 'Who knows the password?', uk: 'Who knows the password?' },
              { en: 'What do you know?', uk: 'What do you know?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Що сталося?» → What happened?', uk: '«Що сталося?» → What happened?' },
          md: {
            en: 'After learning *do*, people overuse it: ✕ *What did happen?* · ✕ *Who did call you?* In both, the question word is the subject, so there’s no *do*: ✓ *What **happened**?* · ✓ *Who **called** you?* And *who* takes a singular verb even if you expect several people: ✓ *Who **knows** the password?* · ✕ *Who know…?*',
            uk: 'Вивчивши *do*, його часто вживають надмірно: ✕ *What did happen?* · ✕ *Who did call you?* В обох випадках питальне слово є підметом, тож *do* немає: ✓ *What **happened**?* · ✓ *Who **called** you?* А *who* бере дієслово в однині, навіть якщо ви очікуєте кількох людей: ✓ *Who **knows** the password?* · ✕ *Who know…?*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: when do does appear, and whom', uk: 'Дрібний шрифт: коли do все ж зʼявляється, і whom' },
          md: {
            en: 'Cambridge notes two exceptions to “no do”. A negative subject question needs it: *Who **doesn’t** want coffee?* And *do* can add emphasis: *So who **did** break the build?* The form *whom* is the object form of *who*, for formal styles and writing: *Whom did you contact?* It’s used less often, and *Who did you contact?* is fine in everyday English.',
            uk: 'Cambridge називає два винятки з «без do». Заперечне питання до підмета його потребує: *Who **doesn’t** want coffee?* А ще *do* може додавати наголос: *So who **did** break the build?* Форма *whom* — форма додатка від *who*, для формальних стилів і письма: *Whom did you contact?* Вона вживається рідше, а *Who did you contact?* у повсякденній англійській цілком нормально.',
          },
        },
      ],
    },

    // ── 4. QUESTION TAGS ───────────────────────────────────────────────────
    {
      id: 'question-tags-intro',
      title: { en: 'Question tags: «так?» at the end', uk: 'Question tags: «так?» у кінці' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Ukrainian has one tag for everything: «…, так?», «…, правда?». English builds a new one each time, from the sentence itself. British Council: we use tags when we expect the listener to agree. A positive statement gets a negative tag, and a negative statement gets a positive one. The tag reuses the operator and the pronoun for the subject.',
            uk: 'Українська має один хвостик на все: «…, так?», «…, правда?». Англійська щоразу будує новий, із самого речення. British Council: ми вживаємо tags, коли очікуємо, що слухач погодиться. Стверджувальне речення отримує заперечний tag, а заперечне — стверджувальний. Tag повторює operator і займенник замість підмета.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Find the operator, flip the polarity, add the pronoun.', uk: 'Знайдіть operator, поміняйте полярність, додайте займенник.' },
          head: [
            { en: 'Type', uk: 'Тип' },
            { en: 'Operator', uk: 'Operator' },
            { en: 'With its tag', uk: 'Із tag' },
          ],
          rows: [
            [
              { en: 'Positive with be', uk: 'Ствердження з be' },
              { en: 'is', uk: 'is' },
              { en: 'She’s a developer, isn’t she?', uk: 'She’s a developer, isn’t she?' },
            ],
            [
              { en: 'Negative with be', uk: 'Заперечення з be' },
              { en: 'is', uk: 'is' },
              { en: 'He isn’t here, is he?', uk: 'He isn’t here, is he?' },
            ],
            [
              { en: 'Present simple', uk: 'Present simple' },
              { en: 'do / does', uk: 'do / does' },
              { en: 'She works here, doesn’t she?', uk: 'She works here, doesn’t she?' },
            ],
            [
              { en: 'Past simple', uk: 'Past simple' },
              { en: 'did', uk: 'did' },
              { en: 'You sent it, didn’t you?', uk: 'You sent it, didn’t you?' },
            ],
            [
              { en: 'Modal', uk: 'Модальне' },
              { en: 'will, can…', uk: 'will, can…' },
              { en: 'You won’t tell anyone, will you?', uk: 'You won’t tell anyone, will you?' },
            ],
            [
              { en: 'I am', uk: 'I am' },
              { en: 'aren’t', uk: 'aren’t' },
              { en: 'I’m late, aren’t I?', uk: 'I’m late, aren’t I?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'isn’t it? is not a universal «так?»', uk: 'isn’t it? — не універсальне «так?»' },
          md: {
            en: 'The tag must match the sentence: ✓ *You’re coming, **aren’t you**?* · ✕ *You’re coming, isn’t it?* · ✓ *They work remotely, **don’t they**?* · ✕ *They work remotely, yes?* If building the tag slows you down, *right?* is a safe everyday choice, and very common in American English: *You’re coming, **right**?*',
            uk: 'Tag має відповідати реченню: ✓ *You’re coming, **aren’t you**?* · ✕ *You’re coming, isn’t it?* · ✓ *They work remotely, **don’t they**?* · ✕ *They work remotely, yes?* Якщо побудова tag вас гальмує, *right?* — безпечний повсякденний вибір, дуже поширений в американській англійській: *You’re coming, **right**?*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**The melody carries the meaning.** British Council: if you’re sure, or almost sure, that the listener will confirm it, the tag falls. If you’re a bit less sure, it rises. Falling on *The deploy is on Friday, ↘ isn’t it?* simply checks that you both agree. Rising on *The deploy is on Friday, ↗ isn’t it?* really asks.',
            uk: '**Мелодія несе значення.** British Council: якщо ви впевнені чи майже впевнені, що слухач підтвердить, інтонація в tag спадає. Якщо трохи менше впевнені — зростає. Спадна в *The deploy is on Friday, ↘ isn’t it?* просто перевіряє, що ви згодні. Висхідна в *The deploy is on Friday, ↗ isn’t it?* справді запитує.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A question puts an operator before the subject. If the sentence has none, do comes in: Does she work here?',
      uk: 'Питання ставить operator перед підметом. Якщо в реченні його немає, приходить do: Does she work here?',
    },
    {
      en: 'do takes the tense, so the main verb goes back to its base: Did you go? She didn’t call.',
      uk: 'do забирає час, тож основне дієслово повертається до базової форми: Did you go? She didn’t call.',
    },
    {
      en: 'A wh-question is the same with one word in front: What does this word mean?',
      uk: 'Wh-питання — те саме з одним словом попереду: What does this word mean?',
    },
    {
      en: 'If who or what is the subject, nothing moves and there is no do: What happened? Who called you?',
      uk: 'Якщо who чи what є підметом, нічого не рухається і do немає: What happened? Who called you?',
    },
    {
      en: 'Standard English has one negative per clause: I don’t know anything.',
      uk: 'Стандартна англійська має одне заперечення на речення: I don’t know anything.',
    },
    {
      en: 'Yes and no follow the facts, not the question: Aren’t you coming? No, I’m not.',
      uk: 'Yes і no йдуть за фактами, а не за питанням: Aren’t you coming? No, I’m not.',
    },
    {
      en: 'A tag reuses the operator and flips the polarity: You’re coming, aren’t you? Everyday shortcut: right?',
      uk: 'Tag повторює operator і змінює полярність: You’re coming, aren’t you? Повсякденний шлях: right?',
    },
  ],
  pitfalls: [
    {
      title: { en: '“What means this word?”', uk: '«What means this word?»' },
      body: { en: 'The word is the subject of mean, and the question asks for its object: What does this word mean?', uk: 'Слово — підмет mean, а питаємо про додаток: What does this word mean?' },
    },
    {
      title: { en: '“How it works?”', uk: '«How it works?»' },
      body: { en: 'The order needs an operator: How does it work?', uk: 'Порядку потрібен operator: How does it work?' },
    },
    {
      title: { en: '“Does she works?”, “Did you went?”', uk: '«Does she works?», «Did you went?»' },
      body: { en: 'do already has the tense: Does she work? Did you go?', uk: 'do вже має час: Does she work? Did you go?' },
    },
    {
      title: { en: '“I don’t know nothing.”', uk: '«I don’t know nothing.»' },
      body: { en: 'One negative per clause: I don’t know anything.', uk: 'Одне заперечення на речення: I don’t know anything.' },
    },
    {
      title: { en: '“What did happen?”', uk: '«What did happen?»' },
      body: { en: 'What is the subject, so there’s no do: What happened?', uk: 'What є підметом, тож do немає: What happened?' },
    },
    {
      title: { en: '“You’re coming, isn’t it?”', uk: '«You’re coming, isn’t it?»' },
      body: { en: 'The tag copies the sentence: You’re coming, aren’t you? Or simply: right?', uk: 'Tag копіює речення: You’re coming, aren’t you? Або просто: right?' },
    },
    {
      title: { en: '“Yes, I’m not.”', uk: '«Yes, I’m not.»' },
      body: { en: 'The answer follows the facts: No, I’m not.', uk: 'Відповідь іде за фактами: No, I’m not.' },
    },
    {
      title: { en: '“Do you know where does she work?”', uk: '«Do you know where does she work?»' },
      body: { en: 'Inside a statement the order goes back to normal: Do you know where she works?', uk: 'Усередині твердження порядок повертається до звичайного: Do you know where she works?' },
    },
  ],
  exercises: [
    {
      id: 'ex-questions-negatives-1',
      kind: 'gap',
      sentence: 'Where ___ you work?',
      answers: ['do'],
      explain: { en: 'The verb work has no operator of its own, so do comes in.', uk: 'Дієслово work не має власного operator, тож приходить do.' },
      level: 'a2',
      tags: ['questions', 'word-order'],
    },
    {
      id: 'ex-questions-negatives-2',
      kind: 'mcq',
      prompt: { en: '«Що означає це слово?»', uk: '«Що означає це слово?»' },
      options: ['What does this word mean?', 'What means this word?', 'What does this word means?'],
      correct: 0,
      explain: { en: 'wh-word + do + subject + base verb.', uk: 'wh-слово + do + підмет + базова форма дієслова.' },
      level: 'a2',
      tags: ['questions', 'ua-traps'],
    },
    {
      id: 'ex-questions-negatives-3',
      kind: 'gap',
      sentence: '___ she work here?',
      answers: ['does'],
      explain: { en: 'she takes does in the present simple.', uk: 'she бере does у present simple.' },
      level: 'a2',
      tags: ['questions', 'word-order'],
    },
    {
      id: 'ex-questions-negatives-4',
      kind: 'mcq',
      prompt: { en: 'Which question is correct?', uk: 'Яке питання правильне?' },
      options: ['Did you go there?', 'Did you went there?', 'Do you went there?'],
      correct: 0,
      explain: { en: 'did has the tense, so go stays in its base form.', uk: 'did має час, тож go лишається в базовій формі.' },
      level: 'a2',
      tags: ['questions', 'word-order'],
    },
    {
      id: 'ex-questions-negatives-5',
      kind: 'gap',
      sentence: 'I ___ know the answer. (negative)',
      answers: ["don't", 'do not'],
      explain: { en: 'know has no operator of its own, so not needs do.', uk: 'know не має власного operator, тому not потребує do.' },
      level: 'a2',
      tags: ['negatives'],
    },
    {
      id: 'ex-questions-negatives-6',
      kind: 'gap',
      sentence: 'He ___ like long meetings. (negative)',
      answers: ["doesn't", 'does not'],
      explain: { en: 'he takes does, and like stays in its base form.', uk: 'he бере does, а like лишається в базовій формі.' },
      level: 'a2',
      tags: ['negatives'],
    },
    {
      id: 'ex-questions-negatives-7',
      kind: 'mcq',
      prompt: { en: '«Я нічого не знаю.»', uk: '«Я нічого не знаю.»' },
      options: ['I don’t know anything.', 'I don’t know nothing.', 'I not know nothing.'],
      correct: 0,
      explain: { en: 'Standard English has one negative per clause.', uk: 'Стандартна англійська має одне заперечення на речення.' },
      level: 'a2',
      tags: ['negatives', 'ua-traps'],
    },
    {
      id: 'ex-questions-negatives-8',
      kind: 'mcq',
      prompt: { en: 'Someone called you, and you want to know who it was.', uk: 'Вам хтось дзвонив, і ви хочете знати хто.' },
      options: ['Who called you?', 'Who did you call?', 'Who you called?'],
      correct: 0,
      explain: { en: 'who is the subject, so there’s no do. Who did you call? asks about someone else.', uk: 'who є підметом, тож do немає. Who did you call? питає про іншу людину.' },
      level: 'a2',
      tags: ['questions', 'subject-questions'],
    },
    {
      id: 'ex-questions-negatives-9',
      kind: 'mcq',
      prompt: { en: 'You called someone. Your colleague wants to know who it was.', uk: 'Ви комусь дзвонили. Колега хоче знати кому.' },
      options: ['Who did you call?', 'Who called you?', 'Who you called?'],
      correct: 0,
      explain: { en: 'who is the object here, so the question uses did.', uk: 'who тут додаток, тож питання вживає did.' },
      level: 'a2',
      tags: ['questions', 'subject-questions'],
    },
    {
      id: 'ex-questions-negatives-10',
      kind: 'gap',
      sentence: 'What ___ at the meeting? (happen, past)',
      answers: ['happened'],
      explain: { en: 'what is the subject: no did, and the verb keeps the past tense.', uk: 'what є підметом: без did, а дієслово зберігає минулий час.' },
      level: 'a2',
      tags: ['questions', 'subject-questions'],
    },
    {
      id: 'ex-questions-negatives-11',
      kind: 'mcq',
      prompt: { en: '«Як це працює?»', uk: '«Як це працює?»' },
      options: ['How does it work?', 'How it works?', 'How does it works?'],
      correct: 0,
      explain: { en: 'wh-word + does + subject + base verb.', uk: 'wh-слово + does + підмет + базова форма дієслова.' },
      level: 'a2',
      tags: ['questions', 'ua-traps'],
    },
    {
      id: 'ex-questions-negatives-12',
      kind: 'gap',
      sentence: 'You’re coming, ___?',
      answers: ["aren't you"],
      explain: { en: 'A positive statement with are takes the negative tag: aren’t you.', uk: 'Стверджувальне речення з are бере заперечний tag: aren’t you.' },
      level: 'a2',
      tags: ['question-tags'],
    },
    {
      id: 'ex-questions-negatives-13',
      kind: 'gap',
      sentence: 'She works here, ___?',
      answers: ["doesn't she"],
      explain: { en: 'A present simple statement takes do or does in the tag.', uk: 'Речення в present simple бере в tag do чи does.' },
      level: 'a2',
      tags: ['question-tags'],
    },
    {
      id: 'ex-questions-negatives-14',
      kind: 'gap',
      sentence: 'He isn’t here, ___?',
      answers: ['is he'],
      explain: { en: 'A negative statement takes a positive tag.', uk: 'Заперечне речення бере стверджувальний tag.' },
      level: 'a2',
      tags: ['question-tags'],
    },
    {
      id: 'ex-questions-negatives-15',
      kind: 'mcq',
      prompt: { en: 'I’m late, ___?', uk: 'I’m late, ___?' },
      options: ['aren’t I', 'amn’t I', 'am not I'],
      correct: 0,
      explain: { en: 'The negative tag of I am is aren’t I.', uk: 'Заперечний tag від I am — aren’t I.' },
      level: 'a2',
      tags: ['question-tags'],
    },
    {
      id: 'ex-questions-negatives-16',
      kind: 'gap',
      sentence: 'Why ___ you late?',
      answers: ['are'],
      explain: { en: 'late isn’t a verb, so be is the operator, before the subject.', uk: 'late — не дієслово, тож operator — be, перед підметом.' },
      level: 'a2',
      tags: ['questions', 'word-order'],
    },
  ],
  seeAlso: ['m1-be-pronouns', 'm7-present-simple-continuous', 'm15-reported-speech', 'm27-inversion-emphasis', 'm3-nouns-quantifiers'],
  sources: [
    { title: 'British Council — Question forms (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/question-forms' },
    { title: 'British Council — Question tags (B1–B2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/question-tags' },
    { title: 'Cambridge Dictionary — Questions: wh- questions', url: 'https://dictionary.cambridge.org/us/grammar/british-grammar/questions-wh-questions' },
    { title: 'Cambridge Dictionary — Questions: typical errors', url: 'https://dictionary.cambridge.org/us/grammar/british-grammar/questions-typical-errors' },
    { title: 'Cambridge Dictionary — Tags', url: 'https://dictionary.cambridge.org/grammar/british-grammar/tags' },
    { title: 'Cambridge Dictionary — Negation', url: 'https://dictionary.cambridge.org/grammar/british-grammar/negation_1' },
  ],
};
