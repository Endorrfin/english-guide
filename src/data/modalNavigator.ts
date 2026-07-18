// src/data/modalNavigator.ts — content for the ★ Modal Navigator sim (m17, S1).
// CHANGED (S1): the function × time grid: 10 communicative functions × 3 times, each cell with
// ranked answers (pattern + US-English example + UA translation) and near-misses (tempting wrong
// modals + why they fail). Facts verified against Cambridge/Oxford learner grammars (m17 sources).
// Content rules: EN authored first; grammar terms stay English in UA text; examples are US English.
import type { ModalAnswer, ModalCell, ModalFunctionDef, ModalFunctionId, ModalTime, NearMiss } from '../lib/modals';
import type { Localized } from './types';

const L = (en: string, uk: string): Localized => ({ en, uk });
const A = (modal: string, pattern: string, en: string, uk: string, note?: Localized): ModalAnswer =>
  note ? { modal, pattern, example: L(en, uk), note } : { modal, pattern, example: L(en, uk) };
const N = (modal: string, en: string, uk: string): NearMiss => ({ modal, why: L(en, uk) });

export const FUNCTIONS: readonly ModalFunctionDef[] = [
  {
    id: 'ability',
    icon: '💪',
    label: L('Ability', 'Уміння / спроможність'),
    hint: L('Someone is (not) able to do it', 'Хтось (не) здатен це зробити'),
  },
  {
    id: 'permission',
    icon: '🎫',
    label: L('Permission', 'Дозвіл'),
    hint: L('It is (not) allowed', 'Це (не) дозволено'),
  },
  {
    id: 'request',
    icon: '🙏',
    label: L('Request', 'Прохання'),
    hint: L('Asking someone to do something', 'Просите когось щось зробити'),
  },
  {
    id: 'offer',
    icon: '🤝',
    label: L('Offer / suggestion', 'Пропозиція'),
    hint: L('Offering help or suggesting a plan', 'Пропонуєте допомогу або план'),
  },
  {
    id: 'advice',
    icon: '💡',
    label: L('Advice', 'Порада'),
    hint: L('Saying what is the right thing to do', 'Кажете, як правильно вчинити'),
  },
  {
    id: 'obligation',
    icon: '📋',
    label: L('Obligation', 'Обовʼязок'),
    hint: L('It is necessary to do it', 'Це необхідно зробити'),
  },
  {
    id: 'prohibition',
    icon: '🚫',
    label: L('Prohibition', 'Заборона'),
    hint: L('It is forbidden', 'Це заборонено'),
  },
  {
    id: 'no-necessity',
    icon: '🪶',
    label: L('No necessity', 'Немає потреби'),
    hint: L('It is not necessary (but allowed)', 'Це не обовʼязково (але можна)'),
  },
  {
    id: 'possibility',
    icon: '🎲',
    label: L('Possibility', 'Можливість (може бути)'),
    hint: L('Maybe true, maybe not — the speaker is unsure', 'Може так, а може ні — мовець не певен'),
  },
  {
    id: 'deduction',
    icon: '🕵️',
    label: L('Deduction', 'Логічний висновок'),
    hint: L('A confident conclusion from evidence', 'Впевнений висновок із фактів'),
  },
];

export const CELLS: Record<ModalFunctionId, Record<ModalTime, ModalCell>> = {
  // ── ABILITY ──────────────────────────────────────────────────────────────
  ability: {
    present: {
      answers: [
        A('can', 'can + V1', 'She can read a stack trace faster than anyone on the team.', 'Вона вміє читати stack trace швидше за будь-кого в команді.'),
        A(
          'be able to',
          'am/is/are able to + V1',
          'We are able to restore the database from any hourly snapshot.',
          'Ми можемо відновити базу даних із будь-якого щогодинного snapshot.',
          L('More formal than *can*; useful where a modal cannot fit (after another modal or in perfect forms).', 'Формальніше за *can*; незамінне там, де modal граматично не стає (після іншого modal або в perfect-формах).'),
        ),
      ],
      nearMisses: [
        N('could', 'For a present skill, *could* sounds like the past or a polite hypothetical — "She could read…" means she used to, or she would if…', 'Для теперішнього вміння *could* звучить як минуле або ввічливе припущення: "She could read…" — колись уміла або змогла б, якби…'),
        N('may', '*May* is about permission or possibility, not skill: "She may debug" = it is allowed / perhaps she will.', '*May* — про дозвіл чи ймовірність, не про навичку: "She may debug" = їй дозволено / можливо, вона буде.'),
      ],
    },
    past: {
      answers: [
        A(
          'could',
          'could + V1',
          'By age ten, he could already write small programs.',
          'У десять років він уже вмів писати невеликі програми.',
          L('*Could* = a GENERAL past ability (a skill you had), not one specific success.', '*Could* = ЗАГАЛЬНЕ вміння в минулому (навичка), а не один конкретний успіх.'),
        ),
        A(
          'was able to',
          'was/were able to + V1',
          'The on-call engineer was able to roll back the release before users noticed.',
          'Черговий інженер зумів відкотити реліз, перш ніж користувачі помітили.',
          L('For ONE specific achievement, affirmative *could* is wrong — use *was/were able to* or *managed to*.', 'Для ОДНОГО конкретного досягнення стверджувальне *could* — помилка; кажіть *was/were able to* або *managed to*.'),
        ),
      ],
      nearMisses: [
        N('could (one occasion)', '"I could fix the bug yesterday" is wrong for a single success. *Couldn\'t* is fine for failure, but success on one occasion needs *was able to / managed to*.', '"I could fix the bug yesterday" — помилка для одного успіху. *Couldn\'t* про невдачу — можна, але успіх один раз = *was able to / managed to*.'),
        N('can', '*Can* has no past reference — "Yesterday I can…" is impossible.', '*Can* не вказує на минуле — "Yesterday I can…" неможливе.'),
      ],
    },
    future: {
      answers: [
        A(
          'will be able to',
          'will be able to + V1',
          'After this course, you will be able to hold a technical interview in English.',
          'Після цього курсу ви зможете проходити технічну співбесіду англійською.',
          L('Modals never stack: *will can* is impossible, so the future of *can* is *will be able to*.', 'Modals не ставляться поруч: *will can* неможливе, тому майбутнє від *can* — *will be able to*.'),
        ),
        A(
          'can',
          'can + V1 (arranged/decided)',
          'I can review your pull request tomorrow morning.',
          'Я можу переглянути твій pull request завтра вранці.',
          L('*Can* covers a future action that is already decided or scheduled.', '*Can* покриває майбутню дію, яка вже вирішена або запланована.'),
        ),
      ],
      nearMisses: [
        N('will can', 'Two modals cannot stand together — a modal has no infinitive to follow another modal.', 'Два modals поруч не стоять — modal не має інфінітива, щоб іти після іншого modal.'),
      ],
    },
  },

  // ── PERMISSION ───────────────────────────────────────────────────────────
  permission: {
    present: {
      answers: [
        A('can', 'can + V1', 'You can work from home on Fridays.', 'По пʼятницях можна працювати з дому.', L('The neutral everyday way to give or state permission.', 'Нейтральний повсякденний спосіб дати чи констатувати дозвіл.')),
        A(
          'may',
          'may + V1',
          'Visitors may park in lot B after 6 p.m.',
          'Відвідувачі можуть паркуватися на майданчику B після 18:00.',
          L('Formal, common in rules and signs.', 'Формально; типово для правил і табличок.'),
        ),
        A('be allowed to', 'am/is/are allowed to + V1', 'Interns are allowed to join the daily standup.', 'Стажерам дозволено долучатися до щоденного standup.'),
      ],
      nearMisses: [
        N('must', '*Must* imposes an obligation; it does not grant permission.', '*Must* накладає обовʼязок, а не дає дозвіл.'),
        N('might', 'In statements *might* means "perhaps", not "is allowed": "You might leave early" = maybe you will.', 'У твердженнях *might* означає «можливо», а не «дозволено»: "You might leave early" = можливо, підеш.'),
      ],
    },
    past: {
      answers: [
        A(
          'was allowed to',
          'was/were allowed to + V1',
          'Back then, everyone was allowed to deploy straight to production.',
          'Тоді всім дозволяли деплоїти одразу в production.',
          L('For permission USED on one specific occasion, *could* is wrong — say *was/were allowed to*.', 'Про дозвіл, ВИКОРИСТАНИЙ у конкретному випадку, *could* — помилка; кажіть *was/were allowed to*.'),
        ),
        A(
          'could',
          'could + V1',
          'At my first job, we could choose our own laptops.',
          'На моїй першій роботі ми могли обирати собі ноутбуки.',
          L('*Could* covers GENERAL past permission (the rule), not one exercised instance.', '*Could* — про ЗАГАЛЬНИЙ дозвіл у минулому (правило), не про один випадок.'),
        ),
      ],
      nearMisses: [
        N('could (one occasion)', '"Yesterday I could leave early" (one granted case) → *was allowed to leave*.', '"Yesterday I could leave early" (разовий дозвіл) → *was allowed to leave*.'),
      ],
    },
    future: {
      answers: [
        A('will be allowed to', 'will be allowed to + V1', 'From next quarter, contractors will be allowed to access the staging environment.', 'З наступного кварталу підрядникам буде дозволено доступ до staging-середовища.'),
        A('can', 'can + V1 (arranged)', 'You can take your vacation in August — it is approved.', 'Можеш брати відпустку в серпні — її погоджено.'),
      ],
      nearMisses: [
        N('will can', 'Modals never stack; use *will be allowed to*.', 'Modals не стоять поруч; кажіть *will be allowed to*.'),
      ],
    },
  },

  // ── REQUEST ──────────────────────────────────────────────────────────────
  request: {
    present: {
      answers: [
        A(
          'could you',
          'Could you + V1?',
          'Could you take a look at this failing test?',
          'Не могли б ви глянути на цей тест, що падає?',
          L('The safe polite default at work.', 'Безпечний ввічливий дефолт на роботі.'),
        ),
        A(
          'would you',
          'Would you + V1?',
          'Would you send me the meeting notes?',
          'Чи не надіслали б ви мені нотатки зустрічі?',
          L('Equally polite; *Would you mind + V-ing?* is one step softer.', 'Так само ввічливо; *Would you mind + V-ing?* — ще на крок мʼякше.'),
        ),
        A('can you', 'Can you + V1?', 'Can you restart the staging server?', 'Можеш перезапустити staging-сервер?', L('Informal — fine with teammates and friends.', 'Неформально — ок із колегами та друзями.')),
        A(
          'may I',
          'May I + V1?',
          'May I ask a quick question?',
          'Дозвольте поставити коротке запитання?',
          L('*May I…?* asks for permission for YOURSELF, formally.', '*May I…?* — формальний запит дозволу для СЕБЕ.'),
        ),
      ],
      nearMisses: [
        N('must you', '*Must you…?* is not a request — it is an irritated complaint: "Must you type so loudly?"', '*Must you…?* — не прохання, а роздратований докір: "Must you type so loudly?"'),
        N('shall you', '*Shall* in requests is only first person (Shall I/we…? = offer). *Shall you* is not modern English.', '*Shall* у проханнях — лише перша особа (Shall I/we…? = пропозиція). *Shall you* — не сучасна англійська.'),
      ],
    },
    past: {
      unavailable: L(
        'A request is made in the moment, so modal requests have no past form. To talk about a past request, report it: "She asked me to review the code." (reported speech — see m15).',
        'Прохання висловлюється в момент мовлення, тому modal-прохання не має минулої форми. Про минуле прохання розповідають через reported speech: "She asked me to review the code." (див. m15).',
      ),
    },
    future: {
      answers: [
        A(
          'could you',
          'Could you + V1 (+ future time)?',
          'Could you cover my on-call shift next weekend?',
          'Не міг би ти підмінити мене на чергуванні наступних вихідних?',
          L('Requests already point at the future — the forms do not change; add a time expression.', 'Прохання і так спрямоване в майбутнє — форми не змінюються; додайте вказівку часу.'),
        ),
        A('would you mind', 'Would you mind + V-ing (+ future time)?', 'Would you mind presenting the demo on Monday?', 'Чи не проти ти провести демо в понеділок?'),
      ],
      nearMisses: [
        N('will you', '*Will you…?* can sound like an order or an impatient demand; prefer *could/would you* at work.', '*Will you…?* може звучати як наказ чи нетерпляча вимога; на роботі краще *could/would you*.'),
      ],
    },
  },

  // ── OFFER / SUGGESTION ───────────────────────────────────────────────────
  offer: {
    present: {
      answers: [
        A('shall I / shall we', 'Shall I/we + V1?', 'Shall I create the ticket for this bug?', 'Створити мені ticket на цей bug?', L('First-person offers and suggestions; common and natural in questions (US English prefers *Should I…?* in casual speech).', 'Пропозиції від першої особи; у питаннях звучить природно (в розмовній US English частіше *Should I…?*).')),
        A("I'll", "I'll + V1", "I'll walk you through the setup.", 'Я проведу тебе по налаштуванню.', L('An instant offer/decision made at the moment of speaking.', 'Миттєва пропозиція/рішення, ухвалене в момент мовлення.')),
        A('can I', 'Can I + V1?', 'Can I help you with that migration?', 'Допомогти тобі з цією міграцією?'),
        A('we could', 'we could + V1', 'We could split the epic into three stories.', 'Ми могли б розбити epic на три stories.', L('*Could* makes a soft suggestion.', '*Could* — мʼяка пропозиція.')),
      ],
      nearMisses: [
        N('must', 'An offer with *must* stops being an offer — it becomes pressure.', 'Пропозиція з *must* перестає бути пропозицією — це вже тиск.'),
      ],
    },
    past: {
      unavailable: L(
        'Offers live in the moment of speaking. For a past offer, report it: "He offered to help." / "She suggested splitting the ticket." (reported speech — see m15).',
        'Пропозиція живе в моменті мовлення. Про минулу пропозицію розповідають: "He offered to help." / "She suggested splitting the ticket." (reported speech — див. m15).',
      ),
    },
    future: {
      answers: [
        A("I'll", "I'll + V1 (+ future time)", "I'll prepare the slides for Thursday's review.", 'Я підготую слайди до четвергового рев’ю.'),
        A('shall we', 'Shall we + V1 (+ future time)?', 'Shall we schedule the retro for Friday?', 'Заплануймо ретро на пʼятницю?'),
        A('we could', 'we could + V1 (+ future time)', 'We could migrate the last service next sprint.', 'Останній сервіс ми могли б мігрувати наступного спринту.'),
      ],
      nearMisses: [
        N('will we', 'For suggestions, plain *Will we…?* just asks for a prediction; use *Shall we…? / We could…*.', 'Для пропозицій просте *Will we…?* лише питає прогноз; кажіть *Shall we…? / We could…*.'),
      ],
    },
  },

  // ── ADVICE ───────────────────────────────────────────────────────────────
  advice: {
    present: {
      answers: [
        A('should', 'should + V1', 'You should write a test before you fix the bug.', 'Варто написати тест, перш ніж виправляти баг.'),
        A('ought to', 'ought to + V1', 'We ought to document this decision.', 'Нам слід задокументувати це рішення.', L('Same meaning as *should*, a bit more formal and much rarer in US English.', 'Те саме, що *should*, трохи формальніше і значно рідше в US English.')),
        A(
          'had better',
          'had better + V1',
          "You'd better back up the database before the migration.",
          'Краще зроби backup бази перед міграцією.',
          L('Strong advice with a warning: if you don\'t, something bad happens. No *to* after it.', 'Сильна порада з попередженням: не зробиш — буде погано. Без *to* після неї.'),
        ),
      ],
      nearMisses: [
        N('must', '*Must* turns advice into obligation — "You must refactor this" is an order, not a tip.', '*Must* перетворює пораду на обовʼязок: "You must refactor this" — наказ, а не порада.'),
        N('would better', 'The fixed phrase is *had better* (\'d better) — *would better* does not exist.', 'Стала фраза — *had better* (\'d better); *would better* не існує.'),
      ],
    },
    past: {
      answers: [
        A(
          'should have',
          'should have + V3',
          'We should have added monitoring before the launch.',
          'Нам слід було додати моніторинг ще до запуску.',
          L('Advice about the past = criticism or regret: the right action did NOT happen.', 'Порада про минуле = критика або жаль: правильна дія НЕ відбулася.'),
        ),
        A("shouldn't have", "shouldn't have + V3", "You shouldn't have force-pushed to main.", 'Не варто було робити force-push у main.'),
      ],
      nearMisses: [
        N('should + V1', '"You should add monitoring yesterday" is impossible — past advice needs *should have + V3*.', '"You should add monitoring yesterday" неможливе — порада про минуле вимагає *should have + V3*.'),
        N('must have', '*Must have + V3* is a DEDUCTION about the past ("apparently did"), not advice.', '*Must have + V3* — ВИСНОВОК про минуле («мабуть, зробив»), а не порада.'),
      ],
    },
    future: {
      answers: [
        A('should', 'should + V1 (+ future time)', 'You should take a day off after the release.', 'Варто взяти вихідний після релізу.', L('Advice about future actions keeps the same form; add a time expression.', 'Порада про майбутнє зберігає ту саму форму; додайте вказівку часу.')),
        A('had better', 'had better + V1 (urgent)', "We'd better freeze the scope before Friday.", 'Краще нам заморозити scope до пʼятниці.'),
      ],
      nearMisses: [
        N('will should', 'Modals never stack — *should* alone already covers future advice.', 'Modals не стоять поруч — *should* сам покриває пораду про майбутнє.'),
      ],
    },
  },

  // ── OBLIGATION ───────────────────────────────────────────────────────────
  obligation: {
    present: {
      answers: [
        A(
          'must',
          'must + V1',
          'I must finish this review today — I promised.',
          'Я мушу закінчити це ревʼю сьогодні — я пообіцяв.',
          L('The obligation comes from the SPEAKER (internal: promises, self-set rules, strong necessity).', 'Обовʼязок іде від МОВЦЯ (внутрішній: обіцянки, власні правила, сильна необхідність).'),
        ),
        A(
          'have to',
          'have/has to + V1',
          'We all have to complete the security training.',
          'Ми всі маємо пройти security-тренінг.',
          L('The obligation comes from OUTSIDE (rules, laws, the company). In everyday US English *have to* is the default.', 'Обовʼязок іде ЗЗОВНІ (правила, закони, компанія). У повсякденній US English *have to* — дефолт.'),
        ),
        A('need to', 'need to + V1', 'You need to rotate these credentials.', 'Тобі потрібно замінити ці credentials.'),
      ],
      nearMisses: [
        N("mustn't", "*Mustn't* is PROHIBITION, not \"no obligation\": \"You mustn't deploy\" forbids it.", '*Mustn\'t* — це ЗАБОРОНА, а не «не обовʼязково»: "You mustn\'t deploy" забороняє deploy.'),
      ],
    },
    past: {
      answers: [
        A(
          'had to',
          'had to + V1',
          'We had to rewrite the auth module after the audit.',
          'Після аудиту нам довелося переписати модуль auth.',
          L('*Must* has NO past form for obligation — the past of both *must* and *have to* is *had to*.', 'У *must* НЕМАЄ минулої форми для обовʼязку — минуле і від *must*, і від *have to* — *had to*.'),
        ),
      ],
      nearMisses: [
        N('must have + V3', '*Must have + V3* is past DEDUCTION ("apparently did"), never past obligation.', '*Must have + V3* — минулий ВИСНОВОК («мабуть, зробив»), ніколи не минулий обовʼязок.'),
        N('musted', '*Must* does not inflect — *musted* does not exist.', '*Must* не відмінюється — форми *musted* не існує.'),
      ],
    },
    future: {
      answers: [
        A('will have to', 'will have to + V1', 'You will have to re-run the pipeline after the config change.', 'Після зміни конфігурації доведеться перезапустити pipeline.'),
        A(
          'must',
          'must + V1 (already decided rule)',
          'All services must pass the new linter starting Monday.',
          'З понеділка всі сервіси мусять проходити новий linter.',
          L('*Must* can announce a future rule that is already fixed now.', '*Must* може оголошувати майбутнє правило, яке вже зафіксоване зараз.'),
        ),
      ],
      nearMisses: [
        N('will must', 'Modals never stack — the future of *must* is *will have to*.', 'Modals не стоять поруч — майбутнє від *must* це *will have to*.'),
      ],
    },
  },

  // ── PROHIBITION ──────────────────────────────────────────────────────────
  prohibition: {
    present: {
      answers: [
        A(
          "mustn't",
          'must not + V1',
          'You must not store passwords in plain text.',
          'Не можна зберігати паролі у відкритому вигляді.',
          L('A strong ban — doing it is wrong/dangerous.', 'Сильна заборона — робити це неправильно/небезпечно.'),
        ),
        A("can't", 'cannot + V1', "You can't merge without at least one approval.", 'Не можна мержити без щонайменше одного approval.', L('States what the rules do not allow; the everyday US default.', 'Констатує, чого не дозволяють правила; повсякденний дефолт у US English.')),
        A('be not allowed to', 'am/is/are not allowed to + V1', 'Contractors are not allowed to access production data.', 'Підрядникам не дозволено доступ до production-даних.'),
      ],
      nearMisses: [
        N("don't have to", "*Don't have to* = NO NECESSITY (optional), not prohibition — the classic trap.", '*Don\'t have to* = НЕМАЄ ПОТРЕБИ (за бажанням), а не заборона — класична пастка.'),
      ],
    },
    past: {
      answers: [
        A("couldn't", 'could not + V1', "We couldn't push directly to main even back then.", 'Навіть тоді ми не могли пушити напряму в main.'),
        A("wasn't allowed to", 'was/were not allowed to + V1', 'She was not allowed to share the incident report.', 'Їй не дозволили поширювати звіт про інцидент.'),
      ],
      nearMisses: [
        N("mustn't (past)", "*Mustn't* has no past form — past prohibition is *couldn't / wasn't allowed to*.", 'У *mustn\'t* немає минулої форми — минула заборона це *couldn\'t / wasn\'t allowed to*.'),
      ],
    },
    future: {
      answers: [
        A("won't be allowed to", 'will not be allowed to + V1', 'From v2, clients will not be allowed to call this endpoint directly.', 'Із v2 клієнтам не буде дозволено викликати цей endpoint напряму.'),
        A("mustn't", 'must not + V1 (future rule)', 'You must not enable this flag during the freeze next week.', 'Не можна вмикати цей flag під час freeze наступного тижня.'),
      ],
      nearMisses: [
        N("won't have to", "*Won't have to* = it will not be necessary (relief), not a ban.", '*Won\'t have to* = не буде потреби (полегшення), а не заборона.'),
      ],
    },
  },

  // ── NO NECESSITY ─────────────────────────────────────────────────────────
  'no-necessity': {
    present: {
      answers: [
        A(
          "don't have to",
          "don't/doesn't have to + V1",
          "You don't have to attend the demo — the recording will be shared.",
          'Тобі не обовʼязково бути на демо — запис поширять.',
          L('The everyday US default for "not necessary".', 'Повсякденний дефолт US English для «не обовʼязково».'),
        ),
        A("don't need to", "don't/doesn't need to + V1", "You don't need to mock this service in unit tests.", 'Цей сервіс не потрібно мокати в unit-тестах.'),
        A("needn't", 'need not + V1', 'You needn\'t reply to this email.', 'На цей лист можна не відповідати.', L('Mostly British and formal; rare in US English.', 'Переважно британське й формальне; у US English рідкісне.')),
      ],
      nearMisses: [
        N("mustn't", "*Mustn't* forbids; *don't have to* merely removes the necessity. Mixing them reverses the meaning.", '*Mustn\'t* забороняє; *don\'t have to* лише знімає необхідність. Сплутати — отримати протилежний зміст.'),
      ],
    },
    past: {
      answers: [
        A("didn't have to", "didn't have to + V1", "We didn't have to migrate the data — the schema was compatible.", 'Нам не довелося мігрувати дані — схема була сумісна.', L('It was not necessary (and typically was not done).', 'Не було потреби (і, як правило, не робилося).')),
        A(
          "needn't have",
          "needn't have + V3",
          "You needn't have rewritten the whole module — a one-line fix was enough.",
          'Не варто було переписувати весь модуль — вистачило б одного рядка.',
          L('You DID it, but it turned out unnecessary — a fine contrast with *didn\'t have to*.', 'Ви це ЗРОБИЛИ, але виявилося, що дарма — тонкий контраст із *didn\'t have to*.'),
        ),
      ],
      nearMisses: [
        N("couldn't", "*Couldn't* = was impossible/forbidden, not \"was unnecessary\".", '*Couldn\'t* = було неможливо/заборонено, а не «не було потреби».'),
      ],
    },
    future: {
      answers: [
        A("won't have to", "won't have to + V1", "With the new CI, you won't have to run the suite locally.", 'З новим CI не доведеться ганяти тести локально.'),
        A("won't need to", "won't need to + V1", "You won't need to update the SDK for this release.", 'Для цього релізу SDK оновлювати не знадобиться.'),
      ],
      nearMisses: [
        N("mustn't", 'Again: a ban, not absence of necessity.', 'Знову ж: заборона, а не відсутність потреби.'),
      ],
    },
  },

  // ── POSSIBILITY ──────────────────────────────────────────────────────────
  possibility: {
    present: {
      answers: [
        A('might', 'might + V1/be', 'The flaky test might be a timing issue.', 'Нестабільний тест — можливо, проблема таймінгу.', L('~30–50% confidence; the everyday "maybe" modal.', '~30–50% впевненості; повсякденний modal для «можливо».')),
        A('may', 'may + V1/be', 'The vendor API may be down again.', 'API вендора, можливо, знову лежить.', L('Slightly more formal than *might*.', 'Трохи формальніше за *might*.')),
        A('could', 'could + V1/be', 'This could be a caching problem.', 'Це може бути проблема кешування.'),
      ],
      nearMisses: [
        N('can', 'For a SPECIFIC "maybe now" use might/may/could. *Can* states general/theoretical possibility: "Deploys can fail" (in general).', 'Для КОНКРЕТНОГО «можливо зараз» — might/may/could. *Can* — загальна/теоретична можливість: "Deploys can fail" (взагалі).'),
      ],
    },
    past: {
      answers: [
        A('might have', 'might have + V3', 'The request might have timed out before reaching the server.', 'Запит, можливо, відвалився по таймауту, не дійшовши до сервера.'),
        A('may have', 'may have + V3', 'She may have missed the notification.', 'Вона, можливо, пропустила сповіщення.'),
        A('could have', 'could have + V3', 'The job could have failed silently.', 'Джоба могла впасти тихо, без помилки.', L('*Could have + V3* also expresses an unused past opportunity: "We could have caught this in review."', '*Could have + V3* також означає невикористану можливість: "We could have caught this in review."')),
      ],
      nearMisses: [
        N('might + V1', '"It might fail yesterday" is impossible — past possibility needs the perfect infinitive: *might have failed*.', '"It might fail yesterday" неможливе — минула ймовірність вимагає perfect infinitive: *might have failed*.'),
      ],
    },
    future: {
      answers: [
        A('might', 'might + V1 (+ future time)', 'We might switch to feature flags next quarter.', 'Можливо, наступного кварталу ми перейдемо на feature flags.'),
        A('may', 'may + V1 (+ future time)', 'The release may slip a few days.', 'Реліз, можливо, зсунеться на кілька днів.'),
        A('could', 'could + V1 (+ future time)', 'This refactor could take a week.', 'Цей рефакторинг може забрати тиждень.'),
      ],
      nearMisses: [
        N('will', '*Will* claims certainty — a prediction, not a "maybe".', '*Will* — заявка на впевненість, прогноз, а не «можливо».'),
      ],
    },
  },

  // ── DEDUCTION ────────────────────────────────────────────────────────────
  deduction: {
    present: {
      answers: [
        A(
          'must',
          'must + V1/be',
          'The build is green and the logs are clean — the fix must work.',
          'Білд зелений, логи чисті — фікс, мабуть, працює (майже напевно).',
          L('~90%+ confidence that it IS true, based on evidence.', '~90%+ впевненості, що це ТАК, на основі фактів.'),
        ),
        A(
          "can't",
          'cannot + V1/be',
          "It can't be a DNS issue — other domains resolve fine.",
          'Це не може бути проблема DNS — інші домени резолвляться нормально.',
          L('The NEGATIVE of deduction-must is *can\'t*, not *mustn\'t*.', 'ЗАПЕРЕЧЕННЯ до deduction-*must* — *can\'t*, а не *mustn\'t*.'),
        ),
      ],
      nearMisses: [
        N("mustn't", 'For "certainly not true", English uses *can\'t be*, not *mustn\'t be*.', 'Для «точно не так» англійська вживає *can\'t be*, а не *mustn\'t be*.'),
        N('should', '*Should* here = expectation ("it should work"), weaker than evidence-based *must*.', '*Should* тут = очікування ("it should work"), слабше за доказове *must*.'),
      ],
    },
    past: {
      answers: [
        A('must have', 'must have + V3', 'The disk filled up overnight — a cron job must have gone rogue.', 'Диск забився за ніч — якийсь cron job, мабуть, здурів.'),
        A("can't have", "can't/couldn't have + V3", "He can't have pushed that commit — he was on a plane.", 'Він не міг запушити той commit — він був у літаку.'),
      ],
      nearMisses: [
        N("mustn't have", 'Standard negative past deduction is *can\'t/couldn\'t have + V3*.', 'Стандартний заперечний висновок про минуле — *can\'t/couldn\'t have + V3*.'),
        N('had to', '*Had to* = past obligation, not a conclusion about what happened.', '*Had to* = минулий обовʼязок, а не висновок про те, що сталося.'),
      ],
    },
    future: {
      answers: [
        A('will', 'will + V1 (confident prediction)', 'With this cache, the endpoint will handle the Black Friday load.', 'З цим кешем endpoint витримає навантаження Чорної пʼятниці.'),
        A(
          'should',
          'should + V1 (expectation)',
          'The import should finish by 6 p.m. — it processed half the rows in two hours.',
          'Імпорт має завершитися до 18:00 — половину рядків він обробив за дві години.',
          L('*Should* = "if everything goes as expected"; weaker than *will*.', '*Should* = «якщо все піде як очікується»; слабше за *will*.'),
        ),
      ],
      nearMisses: [
        N('must', 'Evidence-*must* points at the PRESENT state; for future conclusions use *will/should*.', 'Доказове *must* — про ТЕПЕРІШНІЙ стан; для висновків про майбутнє — *will/should*.'),
      ],
    },
  },
};
