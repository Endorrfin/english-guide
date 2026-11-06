import type { Module } from '../types';

/*
 * CHANGED (F2): M3 · Nouns, plurals & quantifiers — Section I Foundations, wave F2 (figure countable-sorter; no sim:
 * countability is a fact of each noun, nothing to compute). Authored EN first, UA second; US English base.
 * Facts read in full on British Council — Nouns: countable and uncountable (a / some / any / how many / how much;
 * "when we are offering something or asking for something, we normally use some"; "we don't usually use many or much
 * in positive sentences. We use a lot of instead"; advice, information, luggage, furniture); Using there is / there are
 * (no short form for there are; Is there / Are there; "Yes, there is (not Yes, there's)"; informal there's before a
 * list). Cambridge returns HTTP 403 to the fetcher, so it was read through search extracts: Nouns: countable and
 * uncountable (uncountable in English but countable in other languages: advice, information, furniture; a piece of);
 * Much, many, a lot of; There is, there's and there are (first reference to existence).
 * NOT confirmed on a learner site this session (stated without attribution): every plural-spelling rule and irregular
 * form (BC has no plural page and the Cambridge page did not come back); -s pronunciation; two thousand users; the
 * Ukrainian contrasts; feedback, software, equipment, progress as uncountable, and data with singular or plural.
 * No overlap: articles are m2 and m28; few / a few are not on the topic list and stay out.
 */
export const m3: Module = {
  id: 'm3-nouns-quantifiers',
  num: 3,
  section: 's1-foundations',
  order: 3,
  level: 'a1',
  title: { en: 'Nouns, plurals & quantifiers', uk: 'Іменники, множина і квантифікатори' },
  tagline: {
    en: 'Some advice, not «an advice»; the money is, not «are»; a lot of bugs, how much time. Each noun decides its partners, and many of those decisions differ from Ukrainian.',
    uk: 'Some advice, а не «an advice»; the money is, а не «are»; a lot of bugs, how much time. Кожен іменник сам вибирає партнерів, і багато цих рішень відрізняються від української.',
  },
  readMins: 16,
  mentalModel: {
    en: 'English sorts every noun into two boxes by one test: **can you put a number in front of it?** *Two bugs* works, so *bug* is countable. *Two advices* doesn’t, so *advice* is uncountable. The box then decides everything around the noun: the plural, *a / an*, *many* or *much*, and whether the verb is *is* or *are*. The box is a fact about the **English word, not the thing**: Ukrainian counts «дві поради», English doesn’t. So check the noun, not the idea.',
    uk: 'Англійська розкладає кожен іменник у дві коробки за одним тестом: **чи можна поставити перед ним число?** *Two bugs* працює, тож *bug* — countable. *Two advices* не працює, тож *advice* — uncountable. Коробка далі вирішує все навколо іменника: множину, *a / an*, *many* чи *much* і те, чи дієслово *is* чи *are*. Коробка — це факт про **англійське слово, а не про річ**: українська рахує «дві поради», англійська — ні. Тож перевіряйте іменник, а не ідею.',
  },
  topics: [
    // ── 1. PLURALS ─────────────────────────────────────────────────────────
    {
      id: 'plurals',
      title: { en: 'Plurals: -s, and what happens at the end of the word', uk: 'Множина: -s і що відбувається в кінці слова' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Most nouns just add *-s*: *a bug → two bugs*. The other spellings exist to keep the word pronounceable, and the last letters of the singular tell you which one applies. A small group of old, frequent words is irregular, and those simply have to be learned.',
            uk: 'Більшість іменників просто додає *-s*: *a bug → two bugs*. Інші написання існують, щоб слово можна було вимовити, і яке з них застосувати, підказують останні літери однини. Невелика група старих і частих слів неправильна, їх просто треба вивчити.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Plural spelling by the end of the singular.', uk: 'Написання множини за кінцем однини.' },
          head: [
            { en: 'The word ends in', uk: 'Слово закінчується на' },
            { en: 'Do this', uk: 'Що робити' },
            { en: 'Examples', uk: 'Приклади' },
          ],
          rows: [
            [
              { en: 'most letters', uk: 'більшість літер' },
              { en: '+ s', uk: '+ s' },
              { en: 'bugs · servers · files', uk: 'bugs · servers · files' },
            ],
            [
              { en: '-s, -x, -ch, -sh', uk: '-s, -x, -ch, -sh' },
              { en: '+ es', uk: '+ es' },
              { en: 'classes · boxes · patches · dishes', uk: 'classes · boxes · patches · dishes' },
            ],
            [
              { en: 'consonant + y', uk: 'приголосна + y' },
              { en: 'y → ies', uk: 'y → ies' },
              { en: 'entries · queries · companies', uk: 'entries · queries · companies' },
            ],
            [
              { en: 'vowel + y', uk: 'голосна + y' },
              { en: '+ s', uk: '+ s' },
              { en: 'keys · days · arrays', uk: 'keys · days · arrays' },
            ],
            [
              { en: 'some words in -f / -fe', uk: 'деякі слова на -f / -fe' },
              { en: 'f → ves', uk: 'f → ves' },
              { en: 'shelves · lives · knives (but roofs, files)', uk: 'shelves · lives · knives (але roofs, files)' },
            ],
            [
              { en: 'irregular', uk: 'неправильні' },
              { en: 'a new word', uk: 'нове слово' },
              { en: 'man → men · woman → women · child → children · person → people · foot → feet · tooth → teeth', uk: 'man → men · woman → women · child → children · person → people · foot → feet · tooth → teeth' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«люди» are, «гроші» is: number doesn’t always match Ukrainian', uk: '«люди» — are, «гроші» — is: число не завжди збігається з українським' },
          md: {
            en: '*People* is plural, like «люди»: ✓ *People **are** waiting*. But some Ukrainian plurals are singular in English: «гроші» → ✓ *The money **is** in the account* · «новини» → ✓ *The news **is** good* · ✕ *The news are good*. And some go the other way: «штани», «навушники» are plural in both, and to count them you say *a pair of*: *a pair of headphones*.',
            uk: '*People* — множина, як «люди»: ✓ *People **are** waiting*. Але деяка українська множина в англійській — однина: «гроші» → ✓ *The money **is** in the account* · «новини» → ✓ *The news **is** good* · ✕ *The news are good*. Є й навпаки: «штани», «навушники» — множина в обох мовах, а щоб їх порахувати, кажуть *a pair of*: *a pair of headphones*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Three sounds of one -s.** After a voiceless sound the ending is /s/: *laptops, tickets*. After a voiced sound it is /z/: *servers, files, days*. After a hissing sound it adds a syllable, /ɪz/: *classes, boxes, patches*. **Numbers don’t take -s** when a noun follows: ✓ *two thousand users* · ✕ *two thousands users*. The same goes for a number used as an adjective: *a five-year plan*, not *a five-years plan*.',
            uk: '**Три звуки одного -s.** Після глухого звука закінчення — /s/: *laptops, tickets*. Після дзвінкого — /z/: *servers, files, days*. Після свистячого додається склад, /ɪz/: *classes, boxes, patches*. **Числа не беруть -s**, якщо далі йде іменник: ✓ *two thousand users* · ✕ *two thousands users*. Те саме, коли число працює як прикметник: *a five-year plan*, а не *a five-years plan*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: Latin and Greek plurals at work', uk: 'Дрібний шрифт: латинська і грецька множина на роботі' },
          md: {
            en: 'Technical English keeps a few foreign plurals: *analysis → analyses*, *criterion → criteria*. *Data* began as a Latin plural: in everyday and technical writing it usually goes with a singular verb, *The data **is** ready*, while some scientific styles keep *The data **are** ready*. Follow your team’s style. *Index* has two plurals: *indexes* is common in databases, and *indices* in mathematics.',
            uk: 'Технічна англійська зберігає кілька іншомовних форм множини: *analysis → analyses*, *criterion → criteria*. *Data* — спочатку латинська множина: у повсякденних і технічних текстах вона зазвичай іде з дієсловом в однині, *The data **is** ready*, а деякі наукові стилі зберігають *The data **are** ready*. Дотримуйтеся стилю команди. *Index* має дві форми множини: *indexes* поширене в базах даних, а *indices* — у математиці.',
          },
        },
      ],
    },

    // ── 2. COUNTABLE / UNCOUNTABLE ─────────────────────────────────────────
    {
      id: 'countable-uncountable',
      title: { en: 'Countable or uncountable: the number test', uk: 'Countable чи uncountable: тест числом' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council: countable nouns can be counted (*an apple, two apples*), and uncountable nouns cannot (*air, rice, water*). They have no plural and don’t take *a / an*. Cambridge warns about the real trap: some nouns are uncountable in English but countable in other languages, so ✕ *some advices* and ✕ *some informations* are wrong.',
            uk: 'British Council: countable nouns можна порахувати (*an apple, two apples*), а uncountable — ні (*air, rice, water*). Вони не мають множини і не беруть *a / an*. Cambridge попереджає про справжню пастку: деякі іменники uncountable в англійській, але рахуються в інших мовах, тому ✕ *some advices* і ✕ *some informations* неправильні.',
          },
        },
        {
          kind: 'figure',
          fig: 'countable-sorter',
          caption: {
            en: 'The noun’s box picks its partners. The bottom list is what to watch out for at work.',
            uk: 'Коробка іменника вибирає його партнерів. Нижній список — те, на що варто зважати на роботі.',
          },
        },
        {
          kind: 'compare',
          a: { en: '✕ Calqued from Ukrainian', uk: '✕ Калька з української' },
          b: { en: '✓ English', uk: '✓ Англійська' },
          rows: [
            [
              { en: '«порада»', uk: '«порада»' },
              { en: 'an advice · two advices', uk: 'an advice · two advices' },
              { en: 'some advice · a piece of advice', uk: 'some advice · a piece of advice' },
            ],
            [
              { en: '«інформація»', uk: '«інформація»' },
              { en: 'informations', uk: 'informations' },
              { en: 'some information', uk: 'some information' },
            ],
            [
              { en: '«відгуки»', uk: '«відгуки»' },
              { en: 'feedbacks · a feedback', uk: 'feedbacks · a feedback' },
              { en: 'some feedback · a piece of feedback', uk: 'some feedback · a piece of feedback' },
            ],
            [
              { en: '«меблі»', uk: '«меблі»' },
              { en: 'furnitures', uk: 'furnitures' },
              { en: 'some furniture · a piece of furniture', uk: 'some furniture · a piece of furniture' },
            ],
            [
              { en: '«програми», «обладнання»', uk: '«програми», «обладнання»' },
              { en: 'softwares · equipments', uk: 'softwares · equipments' },
              { en: 'software · equipment · a piece of software', uk: 'software · equipment · a piece of software' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'When you do need to count: a piece of', uk: 'Коли все ж треба порахувати: a piece of' },
          md: {
            en: 'Cambridge: to count an uncountable noun, use a phrase such as *a piece of* or a container or measure: *two pieces of advice* · *a bottle of water* · *a cup of coffee*. At work there’s usually a countable neighbor: *a tip* (not an advice), *a comment* (not a feedback), *an app* or *a tool* (not a software).',
            uk: 'Cambridge: щоб порахувати uncountable, вживайте фразу на кшталт *a piece of* або слово на позначення ємності чи міри: *two pieces of advice* · *a bottle of water* · *a cup of coffee*. На роботі зазвичай є countable-сусід: *a tip* (а не an advice), *a comment* (а не a feedback), *an app* чи *a tool* (а не a software).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**One noun, two boxes.** Some nouns live in both boxes with a change of meaning: *coffee* (the drink in general) vs *two coffees* (two cups) · *time* (uncountable, «час») vs *three times* («тричі») · *work* (uncountable, «робота») vs *the works of Shevchenko* (creations). For a job you need another word: ✓ *I have a job*, ✕ *I have a work*. A good learner’s dictionary marks each sense as [C] or [U].',
            uk: '**Один іменник, дві коробки.** Деякі іменники живуть в обох коробках, змінюючи значення: *coffee* (напій загалом) vs *two coffees* (дві чашки) · *time* (uncountable, «час») vs *three times* («тричі») · *work* (uncountable, «робота») vs *the works of Shevchenko* (твори). Про посаду потрібне інше слово: ✓ *I have a job*, ✕ *I have a work*. Хороший словник для тих, хто вчить мову, позначає кожне значення як [C] або [U].',
          },
        },
      ],
    },

    // ── 3. SOME / ANY ──────────────────────────────────────────────────────
    {
      id: 'some-any',
      title: { en: 'some or any', uk: 'some чи any' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Ukrainian often says nothing here: «Є питання?», «У нас є молоко». English usually needs a word before a plural or uncountable noun when it means an unstated amount. British Council gives the basic split: *some* in positive sentences, *any* in negatives and most questions.',
            uk: 'Українська часто нічого тут не каже: «Є питання?», «У нас є молоко». Англійська перед множиною чи uncountable, коли кількість не названа, зазвичай потребує слова. British Council дає базовий поділ: *some* у стверджувальних реченнях, *any* у заперечних і більшості питань.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'some and any. The last row is the exception that matters at work.', uk: 'some і any. Останній рядок — виняток, важливий на роботі.' },
          head: [
            { en: 'Sentence', uk: 'Речення' },
            { en: 'Word', uk: 'Слово' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'Positive', uk: 'Стверджувальне' },
              { en: 'some', uk: 'some' },
              { en: 'We found some bugs. · We have some time.', uk: 'We found some bugs. · We have some time.' },
            ],
            [
              { en: 'Negative', uk: 'Заперечне' },
              { en: 'any', uk: 'any' },
              { en: 'We didn’t find any bugs. · We don’t have any time.', uk: 'We didn’t find any bugs. · We don’t have any time.' },
            ],
            [
              { en: 'Open question', uk: 'Відкрите питання' },
              { en: 'any', uk: 'any' },
              { en: 'Do you have any questions?', uk: 'Do you have any questions?' },
            ],
            [
              { en: 'Offer, request, expecting “yes”', uk: 'Пропозиція, прохання, очікуєте «так»' },
              { en: 'some', uk: 'some' },
              { en: 'Would you like some coffee? · Can I have some water?', uk: 'Would you like some coffee? · Can I have some water?' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Why the exception exists.** *Some* expects something to be there, while *any* leaves it open. So *Do you have any questions?* is neutral, but *Do you have some questions for me?* suggests you think they do. The same logic gives the compounds: *someone, something, somewhere* vs *anyone, anything, anywhere*. A negative sentence takes the *any-* form: ✓ *I don’t know anything*. The double negative is in [m4](#/m/m4-questions-negatives).',
            uk: '**Чому існує виняток.** *Some* очікує, що щось є, а *any* лишає це відкритим. Тому *Do you have any questions?* нейтральне, а *Do you have some questions for me?* натякає, що ви думаєте, що питання є. Та сама логіка дає складені слова: *someone, something, somewhere* vs *anyone, anything, anywhere*. Заперечне речення бере форму з *any-*: ✓ *I don’t know anything*. Подвійне заперечення — у [m4](#/m/m4-questions-negatives).',
          },
        },
      ],
    },

    // ── 4. MUCH / MANY ─────────────────────────────────────────────────────
    {
      id: 'much-many',
      title: { en: 'much, many, a lot of', uk: 'much, many, a lot of' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The noun’s box picks the word: *many* with countable, *much* with uncountable, and *a lot of* with both. The everyday surprise is the second rule, from British Council: we don’t usually use *many* or *much* in positive sentences. We use *a lot of* instead. So «багато» is usually *a lot of* in a statement and *much* or *many* in negatives and questions.',
            uk: 'Слово вибирає коробка іменника: *many* з countable, *much* з uncountable, а *a lot of* з обома. Повсякденна несподіванка — друге правило від British Council: у стверджувальних реченнях *many* і *much* зазвичай не вживають. Натомість вживають *a lot of*. Отже, «багато» у ствердженні — це зазвичай *a lot of*, а в запереченнях і питаннях — *much* чи *many*.',
          },
        },
        {
          kind: 'table',
          caption: { en: '«Багато» by noun and by sentence type.', uk: '«Багато» за іменником і типом речення.' },
          head: [
            { en: 'Sentence', uk: 'Речення' },
            { en: 'Countable', uk: 'Countable' },
            { en: 'Uncountable', uk: 'Uncountable' },
          ],
          rows: [
            [
              { en: 'Positive', uk: 'Стверджувальне' },
              { en: 'We have a lot of bugs.', uk: 'We have a lot of bugs.' },
              { en: 'We have a lot of work.', uk: 'We have a lot of work.' },
            ],
            [
              { en: 'Negative', uk: 'Заперечне' },
              { en: 'We don’t have many bugs.', uk: 'We don’t have many bugs.' },
              { en: 'We don’t have much time.', uk: 'We don’t have much time.' },
            ],
            [
              { en: 'Question', uk: 'Питання' },
              { en: 'How many users are online?', uk: 'How many users are online?' },
              { en: 'How much time do we have?', uk: 'How much time do we have?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: when many and much are fine in a statement', uk: 'Дрібний шрифт: коли many і much доречні у ствердженні' },
          md: {
            en: '“Not usually” isn’t “never”. Formal writing uses *many* in positive sentences without a problem: *Many users reported the issue*. After *too*, *so* and *as* they’re normal in speech as well: *We have too many meetings* · *There’s so much to do*. Cambridge ties the preference for *a lot of* to informal positive clauses. In a report, *many* and *much* are fine.',
            uk: '«Зазвичай не» — це не «ніколи». Формальне письмо вживає *many* у стверджувальних реченнях без проблем: *Many users reported the issue*. Після *too*, *so* і *as* вони нормальні й у мовленні: *We have too many meetings* · *There’s so much to do*. Cambridge повʼязує перевагу *a lot of* з неформальними стверджувальними реченнями. У звіті *many* і *much* цілком доречні.',
          },
        },
      ],
    },

    // ── 5. THERE IS / THERE ARE ────────────────────────────────────────────
    {
      id: 'there-is-are',
      title: { en: 'there is, there are: «є» at the start', uk: 'there is, there are: «є» на початку' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'To say that something exists or to mention it for the first time, English opens with *there*. Ukrainian starts with the place: «У кімнаті є стіл». English moves the new thing up and the place to the end: ***There is** a table in the room*. ✕ *In the room is table* · ✕ *Is a table in the room*. Cambridge calls this the first reference to the existence or presence of something, which is why the noun after it usually takes *a / an*, not *the*.',
            uk: 'Щоб сказати, що щось існує, або вперше про це згадати, англійська починає з *there*. Українська починає з місця: «У кімнаті є стіл». Англійська ставить нову річ уперед, а місце в кінець: ***There is** a table in the room*. ✕ *In the room is table* · ✕ *Is a table in the room*. Cambridge називає це першою згадкою про наявність чогось, тому іменник після нього зазвичай бере *a / an*, а не *the*.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'British Council: there’s is the short form of there is, and there are has no written short form.', uk: 'British Council: there’s — скорочення від there is, а there are письмового скорочення не має.' },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'Singular or uncountable', uk: 'Однина чи uncountable' },
            { en: 'Plural', uk: 'Множина' },
          ],
          rows: [
            [
              { en: 'Positive', uk: 'Ствердження' },
              { en: 'There’s a bug. · There’s some milk.', uk: 'There’s a bug. · There’s some milk.' },
              { en: 'There are two servers.', uk: 'There are two servers.' },
            ],
            [
              { en: 'Negative', uk: 'Заперечення' },
              { en: 'There isn’t a printer. · There’s no milk.', uk: 'There isn’t a printer. · There’s no milk.' },
              { en: 'There aren’t any tickets. · There are no tickets.', uk: 'There aren’t any tickets. · There are no tickets.' },
            ],
            [
              { en: 'Question', uk: 'Питання' },
              { en: 'Is there a printer here?', uk: 'Is there a printer here?' },
              { en: 'Are there any questions?', uk: 'Are there any questions?' },
            ],
            [
              { en: 'Short answer', uk: 'Коротка відповідь' },
              { en: 'Yes, there is. · No, there isn’t.', uk: 'Yes, there is. · No, there isn’t.' },
              { en: 'Yes, there are. · No, there aren’t.', uk: 'Yes, there are. · No, there aren’t.' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: 'there is: it exists', uk: 'there is: воно існує' },
          b: { en: 'it is: you already know it', uk: 'it is: ви вже про це знаєте' },
          rows: [
            [
              { en: 'First mention', uk: 'Перша згадка' },
              { en: 'There’s a bug in the login form.', uk: 'There’s a bug in the login form.' },
              { en: 'It’s a serious one.', uk: 'It’s a serious one.' },
            ],
            [
              { en: '«Є» vs «це»', uk: '«Є» vs «це»' },
              { en: 'There’s a meeting at noon.', uk: 'There’s a meeting at noon.' },
              { en: 'It’s in room 5.', uk: 'It’s in room 5.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: there’s before a plural', uk: 'Дрібний шрифт: there’s перед множиною' },
          md: {
            en: 'British Council notes that in informal speech, when we make a list of things, we often say *there is* or *there’s* instead of *there are*: *There’s a desk, two chairs and a lamp*. You will hear it often, also before a plain plural, but in writing stick with *there are*.',
            uk: 'British Council зауважує, що в неформальному мовленні, перелічуючи речі, часто кажуть *there is* або *there’s* замість *there are*: *There’s a desk, two chairs and a lamp*. Ви часто це чутимете, зокрема й перед звичайною множиною, але на письмі лишайтеся при *there are*.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'The number test sorts a noun: two bugs works, two advices doesn’t. The box belongs to the English word, not the thing.',
      uk: 'Тест числом сортує іменник: two bugs працює, two advices — ні. Коробка належить англійському слову, а не речі.',
    },
    {
      en: 'Most plurals add -s; -s, -x, -ch, -sh add -es; consonant + y becomes -ies.',
      uk: 'Більшість форм множини додає -s; -s, -x, -ch, -sh додають -es; приголосна + y стає -ies.',
    },
    {
      en: 'advice, information, feedback, software, equipment, news and furniture have no plural and no a / an.',
      uk: 'advice, information, feedback, software, equipment, news і furniture не мають множини і a / an.',
    },
    {
      en: 'money and news take a singular verb, and people takes a plural one.',
      uk: 'money і news беруть дієслово в однині, а people — у множині.',
    },
    {
      en: 'some in statements, offers and requests; any in negatives and open questions.',
      uk: 'some у ствердженнях, пропозиціях і проханнях; any в запереченнях і відкритих питаннях.',
    },
    {
      en: 'many with countable, much with uncountable; in an everyday statement, use a lot of for both.',
      uk: 'many з countable, much з uncountable; у повсякденному ствердженні для обох — a lot of.',
    },
    {
      en: 'New thing, then place: There’s a table in the room. Short answers stay full: Yes, there is.',
      uk: 'Нова річ, потім місце: There’s a table in the room. Короткі відповіді лишаються повними: Yes, there is.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“an advice”, “two informations”', uk: '«an advice», «two informations»' },
      body: { en: 'Both are uncountable: some advice, a piece of advice, some information.', uk: 'Обидва uncountable: some advice, a piece of advice, some information.' },
    },
    {
      title: { en: '“The news are good.”', uk: '«The news are good.»' },
      body: { en: 'news looks plural but takes a singular verb: The news is good.', uk: 'news схоже на множину, але бере дієслово в однині: The news is good.' },
    },
    {
      title: { en: '“The money are in the account.”', uk: '«The money are in the account.»' },
      body: { en: '«гроші» is plural, but money is uncountable: The money is in the account.', uk: '«гроші» — множина, але money — uncountable: The money is in the account.' },
    },
    {
      title: { en: '“two thousands users”', uk: '«two thousands users»' },
      body: { en: 'A number before a noun has no -s: two thousand users.', uk: 'Число перед іменником не має -s: two thousand users.' },
    },
    {
      title: { en: '“I have a work.”', uk: '«I have a work.»' },
      body: { en: 'work is uncountable here. For a position, use job: I have a job.', uk: 'work тут uncountable. Про посаду кажуть job: I have a job.' },
    },
    {
      title: { en: '“We have much work” in a chat', uk: '«We have much work» у чаті' },
      body: { en: 'Not usual in a positive sentence: We have a lot of work.', uk: 'У стверджувальному реченні нетипово: We have a lot of work.' },
    },
    {
      title: { en: '“In the room is table.”', uk: '«In the room is table.»' },
      body: { en: 'Open with there and move the place to the end: There’s a table in the room.', uk: 'Починайте з there, а місце ставте в кінець: There’s a table in the room.' },
    },
    {
      title: { en: '“Yes, there’s.”', uk: '«Yes, there’s.»' },
      body: { en: 'A positive short answer stays full: Yes, there is.', uk: 'Стверджувальна коротка відповідь лишається повною: Yes, there is.' },
    },
  ],
  exercises: [
    {
      id: 'ex-nouns-quantifiers-1',
      kind: 'gap',
      sentence: 'We ordered two ___. (box)',
      answers: ['boxes'],
      explain: { en: 'A word ending in -x adds -es.', uk: 'Слово на -x додає -es.' },
      level: 'a1',
      tags: ['nouns', 'plurals'],
    },
    {
      id: 'ex-nouns-quantifiers-2',
      kind: 'gap',
      sentence: 'The table has three new ___. (entry)',
      answers: ['entries'],
      explain: { en: 'Consonant + y becomes -ies.', uk: 'Приголосна + y стає -ies.' },
      level: 'a1',
      tags: ['nouns', 'plurals'],
    },
    {
      id: 'ex-nouns-quantifiers-3',
      kind: 'gap',
      sentence: 'Two ___ joined the team today. (woman)',
      answers: ['women'],
      explain: { en: 'An irregular plural: woman → women.', uk: 'Неправильна множина: woman → women.' },
      level: 'a1',
      tags: ['nouns', 'plurals'],
    },
    {
      id: 'ex-nouns-quantifiers-4',
      kind: 'mcq',
      prompt: { en: '«Дай мені пораду.»', uk: '«Дай мені пораду.»' },
      options: ['Give me some advice.', 'Give me an advice.', 'Give me advices.'],
      correct: 0,
      explain: { en: 'advice is uncountable: no a / an, no plural.', uk: 'advice — uncountable: без a / an і без множини.' },
      level: 'a1',
      tags: ['nouns', 'countable', 'ua-traps'],
    },
    {
      id: 'ex-nouns-quantifiers-5',
      kind: 'mcq',
      prompt: { en: '«Новини хороші.»', uk: '«Новини хороші.»' },
      options: ['The news is good.', 'The news are good.', 'The new is good.'],
      correct: 0,
      explain: { en: 'news ends in -s but takes a singular verb.', uk: 'news закінчується на -s, але бере дієслово в однині.' },
      level: 'a2',
      tags: ['nouns', 'countable', 'ua-traps'],
    },
    {
      id: 'ex-nouns-quantifiers-6',
      kind: 'gap',
      sentence: 'The money ___ in the account.',
      answers: ['is'],
      explain: { en: 'money is uncountable, so it takes a singular verb.', uk: 'money — uncountable, тому бере дієслово в однині.' },
      level: 'a1',
      tags: ['nouns', 'countable', 'ua-traps'],
    },
    {
      id: 'ex-nouns-quantifiers-7',
      kind: 'gap',
      sentence: 'We didn’t find ___ bugs in this release. (some / any)',
      answers: ['any'],
      explain: { en: 'A negative sentence takes any.', uk: 'Заперечне речення бере any.' },
      level: 'a1',
      tags: ['quantifiers', 'some-any'],
    },
    {
      id: 'ex-nouns-quantifiers-8',
      kind: 'mcq',
      prompt: { en: 'You offer a guest a drink. Would you like ___ coffee?', uk: 'Ви пропонуєте гостю напій. Would you like ___ coffee?' },
      options: ['some', 'any', 'many'],
      correct: 0,
      explain: { en: 'An offer takes some, even though it’s a question.', uk: 'Пропозиція бере some, хоча це питання.' },
      level: 'a1',
      tags: ['quantifiers', 'some-any'],
    },
    {
      id: 'ex-nouns-quantifiers-9',
      kind: 'gap',
      sentence: 'How ___ users are online right now?',
      answers: ['many'],
      explain: { en: 'users is countable: how many.', uk: 'users — countable: how many.' },
      level: 'a1',
      tags: ['quantifiers', 'much-many'],
    },
    {
      id: 'ex-nouns-quantifiers-10',
      kind: 'gap',
      sentence: 'How ___ time do we have?',
      answers: ['much'],
      explain: { en: 'time is uncountable here: how much.', uk: 'time тут uncountable: how much.' },
      level: 'a1',
      tags: ['quantifiers', 'much-many'],
    },
    {
      id: 'ex-nouns-quantifiers-11',
      kind: 'mcq',
      prompt: { en: 'The most natural in a chat: We have ___ work today.', uk: 'Найприродніше в чаті: We have ___ work today.' },
      options: ['a lot of', 'much', 'many'],
      correct: 0,
      explain: { en: 'A positive everyday sentence usually takes a lot of; many doesn’t go with work at all.', uk: 'Стверджувальне повсякденне речення зазвичай бере a lot of; many із work не поєднується взагалі.' },
      level: 'a2',
      tags: ['quantifiers', 'much-many'],
    },
    {
      id: 'ex-nouns-quantifiers-12',
      kind: 'gap',
      sentence: 'There ___ two servers in the rack.',
      answers: ['are'],
      explain: { en: 'A plural noun follows: there are.', uk: 'Далі йде множина: there are.' },
      level: 'a1',
      tags: ['there-is-are'],
    },
    {
      id: 'ex-nouns-quantifiers-13',
      kind: 'gap',
      sentence: '___ there any questions?',
      answers: ['are'],
      explain: { en: 'A plural question: Are there…?', uk: 'Питання про множину: Are there…?' },
      level: 'a1',
      tags: ['there-is-are', 'questions'],
    },
    {
      id: 'ex-nouns-quantifiers-14',
      kind: 'mcq',
      prompt: { en: '«У кімнаті є стіл.»', uk: '«У кімнаті є стіл.»' },
      options: ['There is a table in the room.', 'In the room is table.', 'Is a table in the room.'],
      correct: 0,
      explain: { en: 'English opens with there, then the new thing, then the place.', uk: 'Англійська починає з there, потім нова річ, потім місце.' },
      level: 'a1',
      tags: ['there-is-are', 'ua-traps'],
    },
    {
      id: 'ex-nouns-quantifiers-15',
      kind: 'mcq',
      prompt: { en: 'Is there a printer here?', uk: 'Is there a printer here?' },
      options: ['Yes, there is.', 'Yes, there’s.', 'Yes, it is.'],
      correct: 0,
      explain: { en: 'A positive short answer stays full.', uk: 'Стверджувальна коротка відповідь лишається повною.' },
      level: 'a1',
      tags: ['there-is-are', 'short-answers'],
    },
    {
      id: 'ex-nouns-quantifiers-16',
      kind: 'mcq',
      prompt: { en: 'Which one is correct?', uk: 'Що з цього правильно?' },
      options: ['We have two thousand users.', 'We have two thousands users.', 'We have two thousands of user.'],
      correct: 0,
      explain: { en: 'A number before a noun has no -s.', uk: 'Число перед іменником не має -s.' },
      level: 'a2',
      tags: ['nouns', 'plurals'],
    },
  ],
  seeAlso: ['m2-articles-basics', 'm28-articles-advanced', 'm4-questions-negatives', 'm1-be-pronouns'],
  sources: [
    { title: 'British Council — Nouns: countable and uncountable (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/nouns-countable-uncountable' },
    { title: 'British Council — Using there is and there are (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/using-there-there-are' },
    { title: 'Cambridge Dictionary — Nouns: countable and uncountable', url: 'https://dictionary.cambridge.org/grammar/british-grammar/nouns-countable-and-uncountable' },
    { title: 'Cambridge Dictionary — Much, many, a lot of, lots of', url: 'https://dictionary.cambridge.org/grammar/british-grammar/much-many-a-lot-of-lots-of-quantifiers' },
    { title: 'Cambridge Dictionary — There is, there’s and there are', url: 'https://dictionary.cambridge.org/grammar/british-grammar/there-is-there-s-and-there-are' },
  ],
};
