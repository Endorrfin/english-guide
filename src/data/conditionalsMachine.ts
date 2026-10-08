// src/data/conditionalsMachine.ts — content for the ★ Conditionals Machine sim (m13, C1).
// CHANGED (C1): the REALITY × TIME grid — 3 × 3 = 9 cells: 7 content cells (Type 0, Type 1 present/
// future, Type 2 present/future, + the real-past fine print: past habits and the open past), one N/A
// (a general truth has no special future), and one PREVIEW (the imagined past = Type 3, taught in
// m23). Each content cell carries an AUTHORED take for every connector (unless · in case · as long as ·
// when) — see the lens rationale in src/lib/conditionals.ts. Facts verified against Cambridge Grammar
// (conditionals-if · unless · in-case-of · if-or-when · conditionals-typical-errors) and British
// Council LearnEnglish (conditionals: zero, first and second). EN authored first; grammar terms stay
// English in UA text; examples are US English. `cond` must be an exact substring of `en`.
import type { CellKey, CondExample, ContentCell, NaCell, PreviewCell } from '../lib/conditionals';
import type { Localized } from './types';

const L = (en: string, uk: string): Localized => ({ en, uk });
const X = (en: string, cond: string, uk: string): CondExample => ({ en, cond, uk });

const M23 = 'm23-conditionals-3-mixed';

const zero: ContentCell = {
  kind: 'content',
  type: 'zero',
  label: L('Type 0 — zero conditional', 'Type 0 — zero conditional'),
  ifForm: 'if / when + Present Simple',
  mainForm: 'Present Simple',
  meaning: L(
    'Always true: rules, laws of nature, how a system behaves every time. Here if ≈ when.',
    'Завжди правда: правила, закони природи, як система поводиться щоразу. Тут if ≈ when.',
  ),
  examples: [
    X('If you heat ice, it melts.', 'If you heat ice', 'Якщо нагріти лід, він тане.'),
    X('If a test fails, the pipeline stops.', 'If a test fails', 'Якщо тест падає, pipeline зупиняється.'),
  ],
  trap: {
    wrong: 'If a test will fail, the pipeline stops.',
    why: L(
      'UA «якщо тест впаде» pulls a future into the if-clause. A general truth takes Present Simple on both sides.',
      'UA «якщо тест впаде» тягне майбутній час в if-частину. Загальна істина бере Present Simple в обох частинах.',
    ),
  },
  nearMisses: [
    {
      cell: 'real/future',
      why: L(
        'If a test fails, the pipeline will stop — a prediction about THIS run, not a rule about every run.',
        'If a test fails, the pipeline will stop — прогноз про ЦЕЙ запуск, а не правило для кожного.',
      ),
    },
    {
      cell: 'always/past',
      why: L(
        'If a test failed, the pipeline stopped — the same rule, but about how things used to work.',
        'If a test failed, the pipeline stopped — те саме правило, але про те, як було колись.',
      ),
    },
  ],
  connectors: {
    unless: {
      ok: true,
      example: X('The pipeline doesn’t deploy unless all tests pass.', 'unless all tests pass', 'Pipeline не деплоїть, якщо не пройдуть усі тести.'),
      shift: 'same',
      note: L('unless = except if: the one thing that unlocks the deploy.', 'unless = хіба що / якщо не: єдине, що відмикає деплой.'),
    },
    'in-case': {
      ok: true,
      example: X('We keep a nightly backup in case the disk fails.', 'in case the disk fails', 'Ми робимо нічний бекап на випадок, якщо диск відмовить.'),
      shift: 'shifted',
      note: L(
        'Not a condition — a precaution: the backup exists whether or not the disk fails.',
        'Не умова, а запобіжний захід: бекап існує незалежно від того, чи відмовить диск.',
      ),
    },
    'as-long-as': {
      ok: true,
      example: X('The app runs fine as long as the cache is warm.', 'as long as the cache is warm', 'Застосунок працює добре, доки (за умови, що) кеш прогрітий.'),
      shift: 'shifted',
      note: L('as long as = only if: a necessary condition, and you stress it.', 'as long as = тільки за умови: необхідна умова, і ви її наголошуєте.'),
    },
    when: {
      ok: true,
      example: X('When you heat ice, it melts.', 'When you heat ice', 'Коли нагріваєш лід, він тане.'),
      shift: 'same',
      note: L('For general truths if ≈ when — both mean “every time”.', 'Для загальних істин if ≈ when — обидва означають «щоразу».'),
    },
  },
};

const presentReal: ContentCell = {
  kind: 'content',
  type: 'first',
  label: L('Type 1 — present real', 'Type 1 — present real'),
  ifForm: 'if + Present (Simple / Continuous)',
  mainForm: 'imperative · Present · can / should',
  meaning: L(
    'A situation that may be true right now — and the main clause reacts now: advice, an instruction, an offer.',
    'Ситуація, яка може бути правдою просто зараз, — і головна частина реагує зараз: порада, інструкція, пропозиція.',
  ),
  examples: [
    X('If you’re ready, let’s start the demo.', 'If you’re ready', 'Якщо ти готовий, почнімо демо.'),
    X('If you don’t understand the ticket, ask Maria.', 'If you don’t understand the ticket', 'Якщо тобі незрозумілий тікет, запитай Марію.'),
  ],
  trap: {
    wrong: 'If you will be ready, let’s start.',
    why: L(
      'UA «якщо будеш готовий» suggests a future, but the condition is about now: Present, never will.',
      'UA «якщо будеш готовий» підказує майбутнє, але умова — про зараз: Present, ніколи не will.',
    ),
  },
  nearMisses: [
    {
      cell: 'unreal/present',
      why: L(
        'If you were ready, we could start — but you aren’t: an imagined now, the opposite of reality.',
        'If you were ready, we could start — але ти не готовий: уявне «зараз», протилежне реальності.',
      ),
    },
    {
      cell: 'real/future',
      why: L(
        'If you finish the review, we’ll start — the condition lies ahead, not now.',
        'If you finish the review, we’ll start — умова попереду, а не зараз.',
      ),
    },
  ],
  connectors: {
    unless: {
      ok: true,
      example: X('Unless you’re busy, let’s review it now.', 'Unless you’re busy', 'Якщо ти не зайнятий, давай переглянемо це зараз.'),
      shift: 'same',
      note: L('unless = except if you’re busy — a natural, polite exception.', 'unless = хіба що ти зайнятий — природний, ввічливий виняток.'),
    },
    'in-case': {
      ok: true,
      example: X('Here’s my number in case you need anything.', 'in case you need anything', 'Ось мій номер — на випадок, якщо тобі щось знадобиться.'),
      shift: 'shifted',
      note: L(
        'A precaution: I give you the number now, whatever happens — not only after you need something.',
        'Запобіжний захід: я даю номер зараз, хоч би що сталося, — а не лише тоді, коли щось знадобиться.',
      ),
    },
    'as-long-as': {
      ok: true,
      example: X('You can skip the meeting as long as you read the notes.', 'as long as you read the notes', 'Можеш пропустити зустріч за умови, що прочитаєш нотатки.'),
      shift: 'shifted',
      note: L('only if — the condition becomes a requirement.', 'тільки якщо — умова стає вимогою.'),
    },
    when: {
      ok: true,
      example: X('When you’re ready, let’s start.', 'When you’re ready', 'Коли будеш готовий, почнімо.'),
      shift: 'shifted',
      note: L(
        'when assumes you WILL be ready — it’s only a question of time; if leaves it open.',
        'when припускає, що ти БУДЕШ готовий, — питання лише часу; if лишає це відкритим.',
      ),
    },
  },
};

const first: ContentCell = {
  kind: 'content',
  type: 'first',
  label: L('Type 1 — first conditional', 'Type 1 — first conditional'),
  ifForm: 'if + Present Simple',
  mainForm: 'will / won’t + V1 (or can · may · might · should)',
  meaning: L(
    'A real, possible future situation and its likely result. You think it can really happen.',
    'Реальна, можлива майбутня ситуація і її ймовірний результат. Ви вважаєте, що це справді може статися.',
  ),
  examples: [
    X('If the client approves the design, we’ll start on Monday.', 'If the client approves the design', 'Якщо клієнт затвердить дизайн, ми почнемо в понеділок.'),
    X('If we don’t fix this bug today, the release will slip.', 'If we don’t fix this bug today', 'Якщо ми не виправимо цей баг сьогодні, реліз зсунеться.'),
  ],
  trap: {
    wrong: 'If the client will approve the design, we’ll start.',
    why: L(
      'UA «якщо затвердить» is future, so will slips into the if-clause. English keeps it in Present Simple — the same rule as m9’s time clauses (when · as soon as · until).',
      'UA «якщо затвердить» — майбутній час, тож will прослизає в if-частину. Англійська тримає там Present Simple — те саме правило, що й у time clauses із m9 (when · as soon as · until).',
    ),
  },
  nearMisses: [
    {
      cell: 'unreal/future',
      why: L(
        'If the client approved it, we’d start — the same future, but you think it’s unlikely.',
        'If the client approved it, we’d start — те саме майбутнє, але ви вважаєте його малоймовірним.',
      ),
    },
    {
      cell: 'always/present',
      why: L(
        'If the client approves, we start — a standing rule for every project, not this one case.',
        'If the client approves, we start — постійне правило для кожного проєкту, а не цей випадок.',
      ),
    },
  ],
  connectors: {
    unless: {
      ok: true,
      example: X('The release will slip unless we fix this bug today.', 'unless we fix this bug today', 'Реліз зсунеться, якщо ми не виправимо цей баг сьогодні.'),
      shift: 'same',
      note: L('unless = if … not: the same meaning, with a sharper focus on the one way out.', 'unless = if … not: те саме значення, але з чіткішим фокусом на єдиному виході.'),
    },
    'in-case': {
      ok: true,
      example: X('I’ll bring my laptop in case they want a demo.', 'in case they want a demo', 'Я візьму ноутбук на випадок, якщо вони захочуть демо.'),
      shift: 'shifted',
      note: L(
        'A precaution: I bring it anyway. With if (I’ll bring it if they want a demo) I bring it only after they ask.',
        'Запобіжний захід: я беру його в будь-якому разі. З if (I’ll bring it if they want a demo) я беру його лише після того, як попросять.',
      ),
    },
    'as-long-as': {
      ok: true,
      example: X('We’ll ship on Friday as long as QA signs off.', 'as long as QA signs off', 'Ми випустимо реліз у пʼятницю за умови, що QA дасть згоду.'),
      shift: 'shifted',
      note: L('only if — a necessary condition, stressed.', 'тільки якщо — необхідна умова, з наголосом.'),
    },
    when: {
      ok: true,
      example: X('When the client approves the design, we’ll start.', 'When the client approves the design', 'Коли клієнт затвердить дизайн, ми почнемо.'),
      shift: 'shifted',
      note: L(
        'when = you’re sure it will happen, only not when; if = it might not happen at all.',
        'when = ви певні, що це станеться, невідомо лише коли; if = це може й не статися.',
      ),
    },
  },
};

const pastHabit: ContentCell = {
  kind: 'content',
  type: 'past-habit',
  finePrint: true,
  label: L('Real past — habits & rules', 'Real past — звички і правила'),
  ifForm: 'if / when + Past Simple',
  mainForm: 'Past Simple (or would / used to for habits)',
  meaning: L(
    'What generally happened back then — the zero conditional moved into the past. Real, not imagined.',
    'Що зазвичай відбувалося тоді, — zero conditional, перенесений у минуле. Реальне, а не уявне.',
  ),
  examples: [
    X('If the build failed, Tom always fixed it himself.', 'If the build failed', 'Якщо збірка падала, Том завжди лагодив її сам.'),
    X('If we worked late, the company paid for dinner.', 'If we worked late', 'Якщо ми працювали допізна, компанія оплачувала вечерю.'),
  ],
  trap: {
    wrong: 'If we would work late, the company paid for dinner.',
    why: L(
      'UA «якщо ми працювали б» puts би into the if-clause. No would after if — Past Simple carries the real past.',
      'UA «якщо ми працювали б» ставить «би» в if-частину. Після if немає would — реальне минуле несе Past Simple.',
    ),
  },
  nearMisses: [
    {
      cell: 'always/present',
      why: L(
        'If the build fails, Tom fixes it — the same rule, still true today.',
        'If the build fails, Tom fixes it — те саме правило, досі чинне.',
      ),
    },
    {
      cell: 'unreal/present',
      why: L(
        'If the build failed, Tom would fix it — the SAME if-clause, but with would it imagines the present. Context and the main clause decide.',
        'If the build failed, Tom would fix it — ТА САМА if-частина, але з would вона уявляє теперішнє. Вирішують контекст і головна частина.',
      ),
    },
  ],
  connectors: {
    unless: {
      ok: true,
      example: X('We didn’t deploy unless the build was green.', 'unless the build was green', 'Ми не деплоїли, якщо збірка не була зеленою.'),
      shift: 'same',
      note: L('except if — the same meaning as if … not, in the past.', 'хіба що — те саме, що if … not, у минулому.'),
    },
    'in-case': {
      ok: true,
      example: X('We always kept a spare laptop in case one broke.', 'in case one broke', 'Ми завжди тримали запасний ноутбук на випадок, якщо якийсь зламається.'),
      shift: 'shifted',
      note: L('A precaution in the past: the spare was there anyway.', 'Запобіжний захід у минулому: запасний був у будь-якому разі.'),
    },
    'as-long-as': {
      ok: true,
      example: X('Nobody minded remote work as long as we hit our numbers.', 'as long as we hit our numbers', 'Ніхто не заперечував проти віддаленої роботи, доки ми виконували план.'),
      shift: 'shifted',
      note: L('only if, in the past — the one requirement.', 'тільки якщо, у минулому, — єдина вимога.'),
    },
    when: {
      ok: true,
      example: X('When it rained, half the team worked from home.', 'When it rained', 'Коли йшов дощ, половина команди працювала з дому.'),
      shift: 'same',
      note: L('For past habits if ≈ when (≈ whenever).', 'Для минулих звичок if ≈ when (≈ whenever).'),
    },
  },
};

const openPast: ContentCell = {
  kind: 'content',
  type: 'open-past',
  finePrint: true,
  label: L('Real past — open (we don’t know yet)', 'Real past — відкрите (ще не знаємо)'),
  ifForm: 'if + Past Simple',
  mainForm: 'whatever fits now: will · Present · imperative',
  meaning: L(
    'Something may or may not have happened — you don’t know, and you reason from it. Real, not imagined.',
    'Щось могло статися, а могло й ні, — ви не знаєте і міркуєте від цього. Реальне, а не уявне.',
  ),
  examples: [
    X('If she sent the invoice yesterday, it’ll arrive today.', 'If she sent the invoice yesterday', 'Якщо вона надіслала рахунок учора, він прийде сьогодні.'),
    X('If you missed the standup, the notes are in Slack.', 'If you missed the standup', 'Якщо ти пропустив стендап, нотатки є в Slack.'),
  ],
  trap: {
    wrong: 'If she sent the invoice yesterday, it would arrive today.',
    why: L(
      'would turns it into an imagined situation — but you don’t know whether she sent it. An open real past keeps a real main clause.',
      'would робить ситуацію уявною — але ви не знаєте, чи вона його надіслала. Відкрите реальне минуле лишає реальну головну частину.',
    ),
  },
  nearMisses: [
    {
      cell: 'unreal/past',
      why: L(
        'If she had sent it yesterday, it would have arrived — you KNOW she didn’t: that’s Type 3 (m23).',
        'If she had sent it yesterday, it would have arrived — ви ЗНАЄТЕ, що не надіслала: це Type 3 (m23).',
      ),
    },
    {
      cell: 'real/present',
      why: L(
        'If you’re in the standup, mute your mic — the condition is about now, not the past.',
        'If you’re in the standup, mute your mic — умова про зараз, а не про минуле.',
      ),
    },
  ],
  connectors: {
    unless: {
      ok: true,
      example: X('Unless she changed the password, this login should still work.', 'Unless she changed the password', 'Якщо вона не змінила пароль, цей логін має досі працювати.'),
      shift: 'same',
      note: L('except if — the one thing that would break it.', 'хіба що — єдине, що могло б це зламати.'),
    },
    'in-case': {
      ok: true,
      example: X('I’m resending the link in case you missed it.', 'in case you missed it', 'Надсилаю посилання ще раз — на випадок, якщо ти його пропустив.'),
      shift: 'shifted',
      note: L(
        'A precaution about a past you don’t know: I resend it either way.',
        'Запобіжний захід щодо минулого, якого ви не знаєте: я надсилаю в будь-якому разі.',
      ),
    },
    'as-long-as': {
      ok: true,
      example: X('As long as you saved before closing, nothing is lost.', 'As long as you saved before closing', 'За умови, що ти зберіг перед закриттям, нічого не втрачено.'),
      shift: 'shifted',
      note: L('only if — the result depends on this one past action.', 'тільки якщо — результат залежить від цієї однієї минулої дії.'),
    },
    when: {
      ok: false,
      why: L(
        'when presents the past event as a fact — it happened — so no open condition is left. “When she sent the invoice” = she did send it.',
        'when подає минулу подію як факт — вона сталася, — тож відкритої умови не лишається. «When she sent the invoice» = вона таки надіслала.',
      ),
    },
  },
};

const second: ContentCell = {
  kind: 'content',
  type: 'second',
  label: L('Type 2 — second conditional (imagined now)', 'Type 2 — second conditional (уявне «зараз»)'),
  ifForm: 'if + Past Simple (be → were / was)',
  mainForm: 'would / wouldn’t + V1 (or could · might)',
  meaning: L(
    'An imagined present — the opposite of reality. The past form means distance from reality, not past time.',
    'Уявне теперішнє — протилежне реальності. Минула форма тут означає відстань від реальності, а не минулий час.',
  ),
  examples: [
    X('If I had more time, I would learn Rust.', 'If I had more time', 'Якби я мав більше часу, я б вивчив Rust.'),
    X('If I were the team lead, I’d change the review process.', 'If I were the team lead', 'Якби я був тімлідом, я б змінив процес code review.'),
  ],
  trap: {
    wrong: 'If I would have more time, I would learn Rust.',
    why: L(
      'UA «якби … мав би … вивчив би» puts би in both halves. English puts would ONLY in the main clause.',
      'UA «якби … мав би … вивчив би» ставить «би» в обидві частини. Англійська ставить would ЛИШЕ в головну.',
    ),
  },
  nearMisses: [
    {
      cell: 'real/present',
      why: L(
        'If I have time, I’ll learn it — it’s possible; you haven’t ruled it out.',
        'If I have time, I’ll learn it — це можливо; ви цього не виключаєте.',
      ),
    },
    {
      cell: 'unreal/past',
      why: L(
        'If I had had time, I would have learned it — an imagined PAST: Type 3, m23. UA «якби я мав час» covers both.',
        'If I had had time, I would have learned it — уявне МИНУЛЕ: Type 3, m23. UA «якби я мав час» покриває обидва.',
      ),
    },
    {
      cell: 'always/past',
      why: L(
        'If I had time, I read a book — the same if-clause, but a real past habit.',
        'If I had time, I read a book — та сама if-частина, але реальна минула звичка.',
      ),
    },
  ],
  connectors: {
    unless: {
      ok: true,
      example: X('I wouldn’t use this library unless I had to.', 'unless I had to', 'Я б не використовував цю бібліотеку, якби не був змушений.'),
      shift: 'same',
      note: L(
        'Fine — it names the only exception. But a plain counterfactual “if … not” stays if: ✕ Unless I were tired, I’d come → If I weren’t so tired, I’d come.',
        'Можна — це єдиний виняток. Але звичайне контрфактичне «if … not» лишається з if: ✕ Unless I were tired, I’d come → If I weren’t so tired, I’d come.',
      ),
    },
    'in-case': {
      ok: true,
      example: X(
        'If I ran a server room, I’d keep spare drives in case one failed.',
        'in case one failed',
        'Якби я керував серверною, я б тримав запасні диски на випадок, якщо якийсь відмовить.',
      ),
      shift: 'shifted',
      note: L(
        'Even inside an imagined situation, in case stays a precaution — it never means if.',
        'Навіть усередині уявної ситуації in case лишається запобіжним заходом — він ніколи не означає if.',
      ),
    },
    'as-long-as': {
      ok: true,
      example: X('I’d stay at this company as long as I could work remotely.', 'as long as I could work remotely', 'Я б лишився в цій компанії за умови, що можу працювати віддалено.'),
      shift: 'shifted',
      note: L('only if — the one requirement of an imagined deal.', 'тільки якщо — єдина вимога уявної угоди.'),
    },
    when: {
      ok: false,
      why: L(
        'when presupposes the event happens; an imagined now can’t be “when”. ✕ When I had more time, I’d learn Rust → If I had more time… (When I had more time, … = a real past habit.)',
        'when передбачає, що подія відбувається; уявне «зараз» не може бути «when». ✕ When I had more time, I’d learn Rust → If I had more time… (When I had more time, … = реальна минула звичка.)',
      ),
    },
  },
};

const secondFuture: ContentCell = {
  kind: 'content',
  type: 'second',
  label: L('Type 2 — unlikely future', 'Type 2 — малоймовірне майбутнє'),
  ifForm: 'if + Past Simple (or were to + V1)',
  mainForm: 'would / wouldn’t + V1 (or could · might)',
  meaning: L(
    'A possible future you think is unlikely — the same Type 2, aimed at tomorrow. Type 1 or Type 2 here is YOUR bet on the odds.',
    'Можливе майбутнє, яке ви вважаєте малоймовірним, — той самий Type 2, спрямований у завтра. Type 1 чи Type 2 тут — ВАША ставка на шанси.',
  ),
  examples: [
    X(
      'If we lost this client next year, we would have to cut costs.',
      'If we lost this client next year',
      'Якби ми наступного року втратили цього клієнта, нам довелося б скорочувати витрати.',
    ),
    X('If the server went down during the demo, we’d look terrible.', 'If the server went down during the demo', 'Якби сервер ліг під час демо, ми мали б жахливий вигляд.'),
  ],
  trap: {
    wrong: 'If the server will go down during the demo, we would look terrible.',
    why: L(
      'Two traps at once: will in the if-clause, and two types glued together. Unlikely future = if + Past Simple … would.',
      'Дві пастки разом: will в if-частині і два типи, склеєні докупи. Малоймовірне майбутнє = if + Past Simple … would.',
    ),
  },
  nearMisses: [
    {
      cell: 'real/future',
      why: L(
        'If the server goes down, we’ll switch to the backup — you treat it as a real risk.',
        'If the server goes down, we’ll switch to the backup — ви вважаєте це реальним ризиком.',
      ),
    },
    {
      cell: 'unreal/present',
      why: L(
        'If the server were down right now… — the same form, an imagined present.',
        'If the server were down right now… — та сама форма, уявне теперішнє.',
      ),
    },
  ],
  connectors: {
    unless: {
      ok: true,
      example: X('We wouldn’t cancel the launch unless something went badly wrong.', 'unless something went badly wrong', 'Ми б не скасували запуск, хіба що щось пішло б зовсім не так.'),
      shift: 'same',
      note: L('except if — the only exception, imagined.', 'хіба що — єдиний виняток, уявний.'),
    },
    'in-case': {
      ok: true,
      example: X('We’d book a second room in case the demo ran long.', 'in case the demo ran long', 'Ми б забронювали другу кімнату на випадок, якщо демо затягнеться.'),
      shift: 'shifted',
      note: L('Still a precaution, now inside an imagined plan — never = if.', 'Досі запобіжний захід, тепер усередині уявного плану, — ніколи не = if.'),
    },
    'as-long-as': {
      ok: true,
      example: X('Investors would back us as long as growth stayed above 20%.', 'as long as growth stayed above 20%', 'Інвестори підтримали б нас за умови, що зростання трималося б вище 20%.'),
      shift: 'shifted',
      note: L('only if — the requirement of an unlikely deal.', 'тільки якщо — вимога малоймовірної угоди.'),
    },
    when: {
      ok: false,
      why: L(
        'when = you’re sure it will happen, so it can’t carry “unlikely”. Use if (or, for a very remote chance, if … were to).',
        'when = ви певні, що це станеться, тож воно не може нести «малоймовірно». Беріть if (а для дуже віддаленого шансу — if … were to).',
      ),
    },
  },
};

const generalFuture: NaCell = {
  kind: 'na',
  why: L(
    'A general truth has no special future: it is true at any time, so it stays Type 0. One specific future occasion of that rule is Type 1.',
    'Загальна істина не має окремого майбутнього: вона правдива будь-коли, тож лишається Type 0. Один конкретний майбутній випадок цього правила — Type 1.',
  ),
  redirect: ['always/present', 'real/future'],
};

const thirdPreview: PreviewCell = {
  kind: 'preview',
  label: L('Type 3 — imagined past', 'Type 3 — уявне минуле'),
  teaser: L(
    'The opposite of what happened: if + Past Perfect → would have + V3. Taught in m23.',
    'Протилежне тому, що сталося: if + Past Perfect → would have + V3. Вивчаємо в m23.',
  ),
  sample: 'If I had known about the outage, I would have told you.',
  moduleId: M23,
};

export const MIXED_PREVIEW: PreviewCell = {
  kind: 'preview',
  label: L('Mixed conditionals', 'Mixed conditionals'),
  teaser: L(
    'A past condition with a present result (or the reverse) — Type 3 and Type 2 in one sentence. Taught in m23.',
    'Минула умова з теперішнім результатом (або навпаки) — Type 3 і Type 2 в одному реченні. Вивчаємо в m23.',
  ),
  sample: 'If I had taken that job, I would live in Kyiv now.',
  moduleId: M23,
};

/** reality × time → the cell. Every key of the 3 × 3 grid is present (golden-tested). */
export const CELLS: Record<CellKey, ContentCell | NaCell | PreviewCell> = {
  'always/past': pastHabit,
  'always/present': zero,
  'always/future': generalFuture,
  'real/past': openPast,
  'real/present': presentReal,
  'real/future': first,
  'unreal/past': thirdPreview,
  'unreal/present': second,
  'unreal/future': secondFuture,
};
