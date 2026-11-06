import type { Module } from '../types';

/*
 * CHANGED (VA1): M31 · Word formation — Section VI Vocabulary in Action, wave VA1 (★ word-formation-lab,
 * TokenMorph on LETTERS). Authored EN first, UA second; grammar terms stay English in both languages; US
 * English base with a work/dev lean; BrE only where SPELLING differs. Facts verified against Cambridge
 * (Word formation — prefixes, suffixes, conversion, compounds · Prefixes · Suffixes — a suffix usually
 * changes the word class; spelling changes such as y → i · Negative prefixes and suffixes — de-, dis-,
 * il-/im-/in-/ir-, mis-, non- and un- are the prefixes most used for negation, -less the commonest
 * negative suffix) and British Council (Adjectives ending in -ed and -ing, the A1–A2 page). Cambridge
 * returns HTTP 403 to the fetcher, so it was read through search extracts. NOT confirmed on a learner site
 * this session (stated as the standard learner rules, without attribution): the stress condition for
 * doubling (begin → beginning vs visit → visiting) and BrE unstressed -l doubling; the -able vs -ible
 * tendency; inflammable = flammable; the noun/verb stress shift (REcord / reCORD).
 * Not a dictionary: word cards stay in the Words hub. Where a word already has a card, the module links to
 * it (#/definitions/<id>) instead of re-explaining it.
 * Spine: two decisions build every derived word. WHICH affix is a fact of the lexicon — learn it with the
 * word. HOW the affix is spelled at the seam is a rule — the sim computes it.
 */
export const m31: Module = {
  id: 'm31-word-formation',
  num: 31,
  section: 's5-vocabulary-in-action',
  order: 1,
  level: 'b1',
  signature: true,
  title: { en: 'Word formation', uk: 'Словотвір' },
  tagline: {
    en: 'un- or in-? -ful or -full? begining or beginning? — one root, many words: which affix the lexicon picks, and what the spelling does at the seam.',
    uk: 'un- чи in-? -ful чи -full? begining чи beginning? — один корінь, багато слів: який афікс обирає лексика і що робить правопис на шві.',
  },
  readMins: 20,
  mentalModel: {
    en: 'A long English word is usually **root + affixes**: *un + reli(y) + able*. Each affix does one job — a **prefix** changes the meaning (*un-, dis-, mis-*), a **suffix** usually changes the part of speech (*decide → decision → decisive → decisively*). Building a word takes **two decisions**, and they are different in kind. **Which affix?** is a fact of the lexicon: *unable* but *inability*, *unhappy* but *impossible* — no rule predicts it, so you learn the affix together with the word. **How is it spelled at the seam?** is a rule: *in-* becomes *il-* before *l* (*illegal*), a silent *e* drops before a vowel (*creative*), *y* turns into *i* (*reliable*), a stressed final consonant doubles (*beginning*). Ukrainian builds words the same way (*не-, -ість, -ний*), so the idea is familiar — what is new is that one «не-» splits into five English prefixes.',
    uk: 'Довге англійське слово зазвичай складається з **кореня + афіксів**: *un + reli(y) + able*. Кожен афікс робить одну справу — **prefix** змінює зміст (*un-, dis-, mis-*), **suffix** зазвичай змінює частину мови (*decide → decision → decisive → decisively*). Щоб зібрати слово, треба ухвалити **два рішення**, і вони різні за природою. **Який афікс?** — це факт лексики: *unable*, але *inability*; *unhappy*, але *impossible* — жодне правило цього не передбачає, тож афікс вчать разом зі словом. **Як він пишеться на шві?** — це правило: *in-* стає *il-* перед *l* (*illegal*), німе *e* зникає перед голосною (*creative*), *y* стає *i* (*reliable*), наголошена кінцева приголосна подвоюється (*beginning*). Українська будує слова так само (*не-, -ість, -ний*), тож сама ідея знайома — нове тут те, що одне «не-» розпадається на пʼять англійських префіксів.',
  },
  topics: [
    // ── 1. NEGATIVE PREFIXES ───────────────────────────────────────────────
    {
      id: 'negative-prefixes',
      title: { en: 'Negative prefixes: un- · in- (il- im- ir-) · dis- · mis- · non-', uk: 'Заперечні префікси: un- · in- (il- im- ir-) · dis- · mis- · non-' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Cambridge lists *de-, dis-, il-/im-/in-/ir-, mis-, non-* and *un-* as the prefixes most used for negation. For everyday work English five carry almost all the load. *un-* is the commonest and attaches to adjectives (*unclear, unlikely, unreliable*) and to verbs, where it **reverses** an action (*undo, unlock, uninstall*). *in-* attaches mostly to adjectives of Latin origin (*inactive, incorrect, inaccurate*) and changes its shape by the first letter of the root. *dis-* negates verbs and some adjectives (*disagree, dislike, dishonest*, [dissatisfied](#/definitions/dissatisfied)). *mis-* means **wrongly** (*misunderstand, misread, misconfigure*). *non-* means **not belonging to a category** (*nonprofit, non-native*).',
            uk: 'Cambridge називає *de-, dis-, il-/im-/in-/ir-, mis-, non-* і *un-* префіксами, які найчастіше вживають для заперечення. У щоденній робочій англійській майже все навантаження несуть пʼять. *un-* найпоширеніший і приєднується до прикметників (*unclear, unlikely, unreliable*) та до дієслів, де він **скасовує** дію (*undo, unlock, uninstall*). *in-* приєднується здебільшого до прикметників латинського походження (*inactive, incorrect, inaccurate*) і змінює форму залежно від першої літери кореня. *dis-* заперечує дієслова й деякі прикметники (*disagree, dislike, dishonest*, [dissatisfied](#/definitions/dissatisfied)). *mis-* означає **неправильно** (*misunderstand, misread, misconfigure*). *non-* означає **не належить до категорії** (*nonprofit, non-native*).',
          },
        },
        {
          kind: 'sim',
          sim: 'word-formation-lab',
          caption: {
            en: 'Word Formation Lab: the root and the affix stand side by side, then weld letter by letter — a dropped letter leaves as a ghost, an added or changed one arrives in amber. The scene separates what is DECLARED (the affix, the stress, an irregular stem — facts of the lexicon) from what is COMPUTED (the spelling at the seam). Three tracks: build a word, walk a word family, and fix a typical misspelling — the engine names the rule that was broken. AmE base; the BrE chip appears where the spelling differs.',
            uk: 'Word Formation Lab: корінь і афікс стоять поруч, а потім зварюються літера за літерою — літера, що зникає, відлітає привидом, а додана чи змінена зʼявляється бурштиновою. Сцена відокремлює ОГОЛОШЕНЕ (афікс, наголос, нерегулярна основа — факти лексики) від ОБЧИСЛЕНОГО (правопис на шві). Три режими: зібрати слово, пройти родину слів і виправити типову помилку — рушій називає порушене правило. База — AmE; чип BrE зʼявляється там, де правопис розходиться.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Prefix', uk: 'Префікс' },
            { en: 'Meaning', uk: 'Зміст' },
            { en: 'Attaches to', uk: 'До чого приєднується' },
            { en: 'Examples', uk: 'Приклади' },
          ],
          rows: [
            [
              { en: 'un-', uk: 'un-' },
              { en: 'not · reverse the action', uk: 'не · скасувати дію' },
              { en: 'adjectives, verbs, participles', uk: 'прикметники, дієслова, дієприкметники' },
              { en: 'unclear · unreliable · undo · uninstall', uk: 'unclear · unreliable · undo · uninstall' },
            ],
            [
              { en: 'in- / il- / im- / ir-', uk: 'in- / il- / im- / ir-' },
              { en: 'not', uk: 'не' },
              { en: 'mostly Latin-origin adjectives', uk: 'здебільшого прикметники латинського походження' },
              { en: 'inaccurate · illegal · impossible · irrelevant', uk: 'inaccurate · illegal · impossible · irrelevant' },
            ],
            [
              { en: 'dis-', uk: 'dis-' },
              { en: 'not · the opposite action', uk: 'не · протилежна дія' },
              { en: 'verbs, some adjectives and nouns', uk: 'дієслова, деякі прикметники й іменники' },
              { en: 'disagree · disable · dishonest · disagreement', uk: 'disagree · disable · dishonest · disagreement' },
            ],
            [
              { en: 'mis-', uk: 'mis-' },
              { en: 'wrongly, badly', uk: 'неправильно, погано' },
              { en: 'verbs and their nouns', uk: 'дієслова та їхні іменники' },
              { en: 'misunderstand · misconfigure · misuse', uk: 'misunderstand · misconfigure · misuse' },
            ],
            [
              { en: 'non-', uk: 'non-' },
              { en: 'not a member of the category', uk: 'не належить до категорії' },
              { en: 'nouns, adjectives', uk: 'іменники, прикметники' },
              { en: 'nonprofit · non-native · nonblocking', uk: 'nonprofit · non-native · nonblocking' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: 'un-', uk: 'un-' },
          b: { en: 'in- (il- · im- · ir-)', uk: 'in- (il- · im- · ir-)' },
          rows: [
            [
              { en: 'Typical words', uk: 'Типові слова' },
              { en: 'everyday adjectives, verbs: unhappy, unable, unlock', uk: 'повсякденні прикметники, дієслова: unhappy, unable, unlock' },
              { en: 'Latin-origin adjectives: possible, legal, regular, accurate', uk: 'прикметники латинського походження: possible, legal, regular, accurate' },
            ],
            [
              { en: 'Spelling', uk: 'Правопис' },
              { en: 'never changes: unreal, unlikely, unnecessary', uk: 'не змінюється ніколи: unreal, unlikely, unnecessary' },
              { en: 'il- before l, im- before b / m / p, ir- before r, in- elsewhere', uk: 'il- перед l, im- перед b / m / p, ir- перед r, in- в решті випадків' },
            ],
            [
              { en: 'The seam', uk: 'Шов' },
              { en: 'un + necessary = unnecessary (two n’s)', uk: 'un + necessary = unnecessary (дві n)' },
              { en: 'il + legal = illegal · ir + regular = irregular (double letters)', uk: 'il + legal = illegal · ir + regular = irregular (подвійні літери)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«не-» is one prefix; English has five — and the choice is lexical', uk: '«не-» — один префікс; в англійській їх пʼять, і вибір лексичний' },
          md: {
            en: 'Ukrainian puts «не-» on almost anything, so ✕ *unpossible, unlegal, unresponsible* feel natural. There is a tendency — Latin-looking adjectives (*-ible, -ant / -ent, -al, -ate*) lean towards *in-* — but no rule: even one family can split, as in *unable* but ***in**ability*, *unstable* but ***in**stability*. So treat the prefix as part of the word, and check it the first time you meet the word. The spelling AFTER the choice is a rule: once it is *in-*, the sim computes *il- / im- / ir-* for you.',
            uk: 'Українська ставить «не-» майже до всього, тож ✕ *unpossible, unlegal, unresponsible* здаються природними. Тенденція є — прикметники латинського вигляду (*-ible, -ant / -ent, -al, -ate*) тяжіють до *in-*, — але правила немає: навіть одна родина може розділитися, як *unable*, але ***in**ability*, *unstable*, але ***in**stability*. Тож вважайте префікс частиною слова й перевіряйте його, коли вперше зустрічаєте слово. Правопис ПІСЛЯ вибору — це вже правило: щойно обрано *in-*, сим сам обчислить *il- / im- / ir-*.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Not every un-, in- or dis- is negative', uk: 'Не кожне un-, in- чи dis- заперечне' },
          md: {
            en: 'In *understand, interesting, important, discuss, display* the letters only look like a prefix: take them away and nothing meaningful is left (*stand* alone is not the opposite). The test: does the rest of the word exist and mean the opposite? *un + clear* ✓ · *dis + cuss* ✕.',
            uk: 'У *understand, interesting, important, discuss, display* літери лише схожі на префікс: приберіть їх — і нічого змістовного не лишиться (*stand* — не протилежність). Тест: чи існує решта слова і чи означає вона протилежне? *un + clear* ✓ · *dis + cuss* ✕.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**dis- vs mis- vs un- with verbs.** *dis-* gives the opposite action or feeling: *agree → disagree, like → dislike, enable → disable*. *mis-* keeps the action but says it went wrong: *I **misunderstood** the ticket* (I understood it, wrongly) — a [misunderstanding](#/definitions/misunderstanding) is not a [disagreement](#/definitions/disagreement). *un-* on a verb undoes a previous action: *install → uninstall, lock → unlock, do → undo*. Hence *Ctrl+Z* is ***undo***, never *disdo*.',
            uk: '**dis- vs mis- vs un- з дієсловами.** *dis-* дає протилежну дію чи почуття: *agree → disagree, like → dislike, enable → disable*. *mis-* лишає дію, але каже, що вона пішла не так: *I **misunderstood** the ticket* (я зрозумів його, але неправильно) — [misunderstanding](#/definitions/misunderstanding) не є [disagreement](#/definitions/disagreement). *un-* на дієслові скасовує попередню дію: *install → uninstall, lock → unlock, do → undo*. Тому *Ctrl+Z* — це ***undo***, а ніколи не *disdo*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: in- that is not negative, and non- with or without a hyphen', uk: 'Дрібний шрифт: in-, що не заперечує, і non- з дефісом чи без' },
          md: {
            en: 'A second, unrelated *in-* means **in / into**: *inflammable* means the same as *flammable* (it catches fire **in**side), which is why safety labels now prefer *flammable*. *invaluable* is not “not valuable” but **extremely valuable** ([valuable](#/definitions/valuable)): *Her review was invaluable.* As for *non-*: American English usually closes it up (*nonprofit, nonblocking*); British English often hyphenates (*non-profit*). Before a capital letter both hyphenate: *non-English*.',
            uk: 'Друге, неспоріднене *in-* означає **в / всередину**: *inflammable* означає те саме, що й *flammable* (займається **зсередини**), тому на попереджувальних етикетках тепер пишуть *flammable*. *invaluable* — не «нецінний», а **надзвичайно цінний** ([valuable](#/definitions/valuable)): *Her review was invaluable.* Щодо *non-*: американська англійська зазвичай пише разом (*nonprofit, nonblocking*), британська часто через дефіс (*non-profit*). Перед великою літерою обидві ставлять дефіс: *non-English*.',
          },
        },
      ],
    },

    // ── 2. NOUN SUFFIXES ───────────────────────────────────────────────────
    {
      id: 'noun-suffixes',
      title: { en: 'Noun suffixes: -ment · -tion · -ness · -ity · -ance · -er / -ee', uk: 'Суфікси іменників: -ment · -tion · -ness · -ity · -ance · -er / -ee' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A suffix usually changes the **part of speech** (Cambridge). Noun suffixes turn a verb or an adjective into a thing, a state or a person. From **verbs**: *-ment* (*deploy → deployment, agree → [agreement](#/definitions/agreement)*), *-tion / -sion / -ation* (*integrate → integration, decide → decision*), *-ance / -ence* (*perform → performance, depend → dependence*). From **adjectives**: *-ness* (*ready → [readiness](#/definitions/readiness), aware → [awareness](#/definitions/awareness)*) and *-ity* (*secure → security, reliable → reliability*). For **people**: *-er / -or* (the one who does it: *developer, employer, creator*) and *-ee* (the one it is done to: *employee, trainee*).',
            uk: 'Суфікс зазвичай змінює **частину мови** (Cambridge). Суфікси іменників перетворюють дієслово чи прикметник на предмет, стан або особу. Від **дієслів**: *-ment* (*deploy → deployment, agree → [agreement](#/definitions/agreement)*), *-tion / -sion / -ation* (*integrate → integration, decide → decision*), *-ance / -ence* (*perform → performance, depend → dependence*). Від **прикметників**: *-ness* (*ready → [readiness](#/definitions/readiness), aware → [awareness](#/definitions/awareness)*) і *-ity* (*secure → security, reliable → reliability*). Для **людей**: *-er / -or* (той, хто робить: *developer, employer, creator*) і *-ee* (той, з ким це роблять: *employee, trainee*).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Suffix', uk: 'Суфікс' },
            { en: 'From', uk: 'Від' },
            { en: 'Means', uk: 'Означає' },
            { en: 'Work examples', uk: 'Робочі приклади' },
          ],
          rows: [
            [{ en: '-ment', uk: '-ment' }, { en: 'verb', uk: 'дієслово' }, { en: 'the act or its result', uk: 'дія або її результат' }, { en: 'deployment · requirement · improvement', uk: 'deployment · requirement · improvement' }],
            [{ en: '-tion / -sion / -ation', uk: '-tion / -sion / -ation' }, { en: 'verb', uk: 'дієслово' }, { en: 'the act or its result', uk: 'дія або її результат' }, { en: 'integration · decision · configuration', uk: 'integration · decision · configuration' }],
            [{ en: '-ance / -ence', uk: '-ance / -ence' }, { en: 'verb / adjective', uk: 'дієслово / прикметник' }, { en: 'the state or quality', uk: 'стан чи якість' }, { en: 'performance · maintenance · dependence', uk: 'performance · maintenance · dependence' }],
            [{ en: '-ness', uk: '-ness' }, { en: 'adjective', uk: 'прикметник' }, { en: 'the quality', uk: 'якість' }, { en: 'readiness · awareness · correctness', uk: 'readiness · awareness · correctness' }],
            [{ en: '-ity', uk: '-ity' }, { en: 'adjective (often Latin)', uk: 'прикметник (часто латинський)' }, { en: 'the quality', uk: 'якість' }, { en: 'security · availability · reliability', uk: 'security · availability · reliability' }],
            [{ en: '-er / -or', uk: '-er / -or' }, { en: 'verb', uk: 'дієслово' }, { en: 'the one who / the tool that does it', uk: 'той, хто / інструмент, що це робить' }, { en: 'developer · reviewer · compiler · creator', uk: 'developer · reviewer · compiler · creator' }],
            [{ en: '-ee', uk: '-ee' }, { en: 'verb', uk: 'дієслово' }, { en: 'the one it is done to', uk: 'той, з ким це роблять' }, { en: 'employee · trainee · interviewee', uk: 'employee · trainee · interviewee' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«-ність» is not always -ness', uk: '«-ність» — не завжди -ness' },
          md: {
            en: '«відповідальність» is ***responsibility***, «надійність» is ***reliability***, «доступність» is ***availability*** — not *responsibleness*. Adjectives in *-ble, -al, -ic* and other Latin-looking ones usually take *-ity*; short everyday adjectives take *-ness* (*readiness, weakness, [fairness](#/definitions/fairness)*). When in doubt, look it up — the noun is a separate word with its own card.',
            uk: '«відповідальність» — це ***responsibility***, «надійність» — ***reliability***, «доступність» — ***availability***, а не *responsibleness*. Прикметники на *-ble, -al, -ic* та інші латинського вигляду зазвичай беруть *-ity*; короткі повсякденні — *-ness* (*readiness, weakness, [fairness](#/definitions/fairness)*). Якщо сумніваєтеся, перевірте — іменник є окремим словом зі своєю карткою.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: '-er pays, -ee is paid', uk: '-er платить, -ee отримує' },
          md: {
            en: 'The *employer* hires; the *employee* is hired. The *interviewer* asks; the *interviewee* answers. The *trainer* teaches; the *trainee* learns. A useful check in a contract or an HR email: who does it (*-er*) and who it is done to (*-ee*).',
            uk: '*employer* наймає; *employee* наймають. *interviewer* питає; *interviewee* відповідає. *trainer* навчає; *trainee* навчається. Корисна перевірка в контракті чи HR-листі: хто це робить (*-er*) і з ким це роблять (*-ee*).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**What happens at the seam.** The same rules as everywhere: the silent *e* drops before a vowel (*create → creation, organize → organization*), *y* turns into *i* (*happy → happiness*), *-ble* becomes *-bil-* before *-ity* (*possible → possibility*). Some families use a **different stem** — that is lexical, not a rule: *decide → decision, explain → explanation, pronounce → **pronunciation*** (no *o* — ✕ *pronounciation* is one of the most common spelling mistakes).',
            uk: '**Що відбувається на шві.** Ті самі правила, що й скрізь: німе *e* зникає перед голосною (*create → creation, organize → organization*), *y* стає *i* (*happy → happiness*), *-ble* стає *-bil-* перед *-ity* (*possible → possibility*). Деякі родини мають **іншу основу** — це лексика, а не правило: *decide → decision, explain → explanation, pronounce → **pronunciation*** (без *o* — ✕ *pronounciation* належить до найпоширеніших помилок правопису).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: -ment keeps the e — mostly', uk: 'Дрібний шрифт: -ment тримає e — здебільшого' },
          md: {
            en: 'Before a consonant suffix the silent *e* stays: *management, statement, requirement*. The famous exception is *argument* (not *arguement*). *judgment* is the American spelling; British English usually writes *judgement* — a spelling difference, not an error.',
            uk: 'Перед приголосним суфіксом німе *e* лишається: *management, statement, requirement*. Відомий виняток — *argument* (а не *arguement*). *judgment* — американський правопис; британська англійська зазвичай пише *judgement* — це різниця правопису, а не помилка.',
          },
        },
      ],
    },

    // ── 3. ADJECTIVE SUFFIXES ──────────────────────────────────────────────
    {
      id: 'adjective-suffixes',
      title: { en: 'Adjective suffixes: -able · -ful / -less · -ive · -ous · -al · -ed / -ing', uk: 'Суфікси прикметників: -able · -ful / -less · -ive · -ous · -al · -ed / -ing' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Adjective suffixes describe what something **can be**, **has** or **is like**. *-able / -ible* — can be done: [reliable](#/definitions/reliable), *scalable*, [accessible](#/definitions/accessible). *-ful* — full of: *useful, careful*, [meaningful](#/definitions/meaningful). *-less* — without (Cambridge: the commonest negative suffix): *useless, careless, serverless*. *-ive* — doing or tending to: *creative, effective*, [proactive](#/definitions/proactive). *-ous* — having the quality: *dangerous, various*, [cautious](#/definitions/cautious). *-al / -ic* — related to: *functional, optional, automatic*.',
            uk: 'Суфікси прикметників описують, чим щось **може бути**, що воно **має** або **яке воно**. *-able / -ible* — можна зробити: [reliable](#/definitions/reliable), *scalable*, [accessible](#/definitions/accessible). *-ful* — сповнений: *useful, careful*, [meaningful](#/definitions/meaningful). *-less* — без (Cambridge: найпоширеніший заперечний суфікс): *useless, careless, serverless*. *-ive* — що робить чи схильний: *creative, effective*, [proactive](#/definitions/proactive). *-ous* — що має якість: *dangerous, various*, [cautious](#/definitions/cautious). *-al / -ic* — повʼязаний з: *functional, optional, automatic*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Suffix', uk: 'Суфікс' },
            { en: 'Means', uk: 'Означає' },
            { en: 'Pair / examples', uk: 'Пара / приклади' },
          ],
          rows: [
            [{ en: '-able / -ible', uk: '-able / -ible' }, { en: 'can be done', uk: 'можна зробити' }, { en: 'readable · scalable · visible · accessible', uk: 'readable · scalable · visible · accessible' }],
            [{ en: '-ful ↔ -less', uk: '-ful ↔ -less' }, { en: 'full of ↔ without', uk: 'сповнений ↔ без' }, { en: 'useful ↔ useless · careful ↔ careless · helpful ↔ helpless', uk: 'useful ↔ useless · careful ↔ careless · helpful ↔ helpless' }],
            [{ en: '-ive', uk: '-ive' }, { en: 'does / tends to', uk: 'робить / схильний' }, { en: 'creative · effective · responsive', uk: 'creative · effective · responsive' }],
            [{ en: '-ous', uk: '-ous' }, { en: 'has the quality', uk: 'має якість' }, { en: 'dangerous · various · ambiguous', uk: 'dangerous · various · ambiguous' }],
            [{ en: '-al / -ic', uk: '-al / -ic' }, { en: 'related to', uk: 'повʼязаний з' }, { en: 'functional · optional · automatic · specific', uk: 'functional · optional · automatic · specific' }],
            [{ en: '-ed ↔ -ing', uk: '-ed ↔ -ing' }, { en: 'how you feel ↔ what causes it', uk: 'як ви почуваєтеся ↔ що це викликає' }, { en: 'bored ↔ boring · confused ↔ confusing', uk: 'bored ↔ boring · confused ↔ confusing' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '-ful has ONE l: useful, not usefull', uk: '-ful має ОДНУ l: useful, а не usefull' },
          md: {
            en: 'The word *full* has two l’s, the suffix *-ful* has one: *useful, careful, hopeful*, ✕ *usefull*. The second *l* appears only when *-ly* is added, because nothing is lost at the seam: *careful + ly = carefully*, *hopeful + ly = hopefully*.',
            uk: 'Слово *full* має дві l, суфікс *-ful* — одну: *useful, careful, hopeful*, ✕ *usefull*. Друга *l* зʼявляється лише з *-ly*, бо на шві нічого не губиться: *careful + ly = carefully*, *hopeful + ly = hopefully*.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“I’m boring” — do you mean bored?', uk: '«I’m boring» — ви маєте на увазі bored?' },
          md: {
            en: 'An *-ed* adjective is how you **feel**; an *-ing* adjective is what **causes** the feeling (British Council, *Adjectives ending in -ed and -ing*). *I’m **bored** — this meeting is **boring**.* ✕ *I’m boring* says you make other people bored. The same pair: *confused / confusing, interested / interesting, tired / tiring*.',
            uk: 'Прикметник на *-ed* — це те, як ви **почуваєтеся**; на *-ing* — те, що **викликає** почуття (British Council, *Adjectives ending in -ed and -ing*). *I’m **bored** — this meeting is **boring**.* ✕ *I’m boring* каже, що це ви нудите інших. Та сама пара: *confused / confusing, interested / interesting, tired / tiring*.',
          },
        },
        {
          kind: 'compare',
          dive: 3,
          a: { en: '-able', uk: '-able' },
          b: { en: '-ible', uk: '-ible' },
          rows: [
            [
              { en: 'Usually attaches to', uk: 'Зазвичай приєднується до' },
              { en: 'a whole English word: read → readable, accept → acceptable', uk: 'цілого англійського слова: read → readable, accept → acceptable' },
              { en: 'a Latin root that is not a word on its own: vis-ible, poss-ible', uk: 'латинського кореня, що не є окремим словом: vis-ible, poss-ible' },
            ],
            [
              { en: 'New words', uk: 'Нові слова' },
              { en: 'yes — the living suffix: scalable, deployable, testable', uk: 'так — живий суфікс: scalable, deployable, testable' },
              { en: 'no — a closed list: visible, possible, flexible, accessible', uk: 'ні — закритий список: visible, possible, flexible, accessible' },
            ],
            [
              { en: 'Reliability of the tip', uk: 'Надійність підказки' },
              { en: 'a tendency, with exceptions (accessible from access)', uk: 'тенденція з винятками (accessible від access)' },
              { en: 'so check new -ible words in the dictionary', uk: 'тож нові слова на -ible перевіряйте в словнику' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: -ic and -ical can mean different things', uk: 'Дрібний шрифт: -ic і -ical можуть означати різне' },
          md: {
            en: 'Some roots have both and split the meaning: *economic* (about the economy) vs *economical* (saves money); *historic* (important in history) vs *historical* (about the past); *electric* (powered by electricity) vs *electrical* (to do with electricity in general). They are classic confusables — see [m34](#/m/m34-confusables).',
            uk: 'Деякі корені мають обидві форми й розводять значення: *economic* (про економіку) vs *economical* (заощаджує гроші); *historic* (важливий в історії) vs *historical* (про минуле); *electric* (працює від електрики) vs *electrical* (повʼязаний з електрикою загалом). Це класичні confusables — див. [m34](#/m/m34-confusables).',
          },
        },
      ],
    },

    // ── 4. WORD FAMILIES ───────────────────────────────────────────────────
    {
      id: 'word-families',
      title: { en: 'Word families: one root, four slots', uk: 'Родини слів: один корінь, чотири місця' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Learn the **family**, not the single word. One root gives a verb, a noun, an adjective, an adverb and often an opposite, and the **slot** in the sentence decides which one you need. Ukrainian signals the part of speech mostly with endings; English does it with the suffix **and** with word order: *We need to **decide** · The **decision** was quick · a **decisive** lead · She acted **decisively***. The sim’s *Word family* track builds each member from the root, with the spelling computed.',
            uk: 'Вчіть **родину**, а не окреме слово. Один корінь дає дієслово, іменник, прикметник, прислівник і часто антонім, а **місце** в реченні вирішує, яке з них потрібне. Українська позначає частину мови здебільшого закінченнями; англійська — суфіксом **і** порядком слів: *We need to **decide** · The **decision** was quick · a **decisive** lead · She acted **decisively***. Режим *Word family* у симі будує кожного члена родини з кореня, з обчисленим правописом.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Verb', uk: 'Дієслово' },
            { en: 'Noun', uk: 'Іменник' },
            { en: 'Adjective', uk: 'Прикметник' },
            { en: 'Adverb', uk: 'Прислівник' },
            { en: 'Opposite', uk: 'Антонім' },
          ],
          rows: [
            [{ en: 'decide', uk: 'decide' }, { en: 'decision', uk: 'decision' }, { en: 'decisive', uk: 'decisive' }, { en: 'decisively', uk: 'decisively' }, { en: 'indecisive', uk: 'indecisive' }],
            [{ en: 'rely', uk: 'rely' }, { en: 'reliability', uk: 'reliability' }, { en: 'reliable', uk: 'reliable' }, { en: 'reliably', uk: 'reliably' }, { en: 'unreliable', uk: 'unreliable' }],
            [{ en: 'succeed', uk: 'succeed' }, { en: 'success', uk: 'success' }, { en: 'successful', uk: 'successful' }, { en: 'successfully', uk: 'successfully' }, { en: 'unsuccessful', uk: 'unsuccessful' }],
            [{ en: 'create', uk: 'create' }, { en: 'creation · creator', uk: 'creation · creator' }, { en: 'creative', uk: 'creative' }, { en: 'creatively', uk: 'creatively' }, { en: '—', uk: '—' }],
            [{ en: 'employ', uk: 'employ' }, { en: 'employment · employer · employee', uk: 'employment · employer · employee' }, { en: 'employed', uk: 'employed' }, { en: '—', uk: '—' }, { en: 'unemployed', uk: 'unemployed' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'The slot test', uk: 'Тест місця' },
          md: {
            en: 'Look at the gap, not at the word. *the ___ / a ___ / my ___* → a **noun** (*the decision*). *to ___ / will ___* → a **verb** (*to decide*). *a ___ plan / is ___* → an **adjective** (*a decisive plan*). *acted ___ / ___ fixed* → an **adverb** (*acted decisively*). Word-formation tasks in exams (B2 First, IELTS) are built exactly on this test.',
            uk: 'Дивіться на пропуск, а не на слово. *the ___ / a ___ / my ___* → **іменник** (*the decision*). *to ___ / will ___* → **дієслово** (*to decide*). *a ___ plan / is ___* → **прикметник** (*a decisive plan*). *acted ___ / ___ fixed* → **прислівник** (*acted decisively*). Завдання на словотвір в іспитах (B2 First, IELTS) побудовані саме на цьому тесті.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“a success project” · “He is very success”', uk: '«a success project» · «He is very success»' },
          md: {
            en: 'The noun sits in an adjective slot: ✓ *a **successful** project · He is very **successful***. The reverse slip is just as common: ✕ *We need to make a decide* → ✓ *make a **decision***. And «скласти іспит» is *pass* an exam, not *succeed* it — *succeed in* + noun / -ing: *She **succeeded in** passing the exam*.',
            uk: 'Іменник стоїть на місці прикметника: ✓ *a **successful** project · He is very **successful***. Протилежна помилка не менш поширена: ✕ *We need to make a decide* → ✓ *make a **decision***. А «скласти іспит» — це *pass* an exam, а не *succeed* it; *succeed in* + іменник / -ing: *She **succeeded in** passing the exam*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Conversion: the same form, a new part of speech.** English often turns a word into another part of speech with **no suffix at all** (Cambridge: *email, microwave* used as verbs). Dev English is full of it: *a fix → to fix · an email → to email · a deploy → to deploy · to log → a log*. With some two-syllable words the **stress** moves instead: noun *REcord*, verb *reCORD*; noun *PROgress*, verb *proGRESS*; noun *OBject*, verb *obJECT*.',
            uk: '**Конверсія: та сама форма, нова частина мови.** Англійська часто перетворює слово на іншу частину мови **взагалі без суфікса** (Cambridge: *email, microwave* як дієслова). Англійська розробників ними переповнена: *a fix → to fix · an email → to email · a deploy → to deploy · to log → a log*. У деяких двоскладових словах натомість переміщується **наголос**: іменник *REcord*, дієслово *reCORD*; іменник *PROgress*, дієслово *proGRESS*; іменник *OBject*, дієслово *obJECT*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: setup (noun) vs set up (verb)', uk: 'Дрібний шрифт: setup (іменник) vs set up (дієслово)' },
          md: {
            en: 'A phrasal verb is two words; the noun made from it is one (sometimes hyphenated): *Please **set up** the server* — *The **setup** took an hour*. The same pattern: *log in → a login · back up → a backup · roll back → a rollback · check out → the checkout · sign up → a signup*. ✕ *Please setup the server* is a very common slip in tickets and READMEs. The phrasal verbs themselves are the topic of [m32](#/m/m32-phrasal-verbs-system).',
            uk: 'Phrasal verb — це два слова; іменник, утворений від нього, — одне (іноді через дефіс): *Please **set up** the server* — *The **setup** took an hour*. Та сама схема: *log in → a login · back up → a backup · roll back → a rollback · check out → the checkout · sign up → a signup*. ✕ *Please setup the server* — дуже поширена помилка в тікетах і README. Самі phrasal verbs — тема [m32](#/m/m32-phrasal-verbs-system).',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A long word is root + affixes: a prefix changes the meaning, a suffix usually changes the part of speech.',
      uk: 'Довге слово — це корінь + афікси: prefix змінює зміст, suffix зазвичай змінює частину мови.',
    },
    {
      en: 'WHICH affix is lexical (unable but inability) — learn it with the word. HOW it is spelled at the seam is a rule.',
      uk: 'ЯКИЙ афікс — лексика (unable, але inability), його вчать разом зі словом. ЯК він пишеться на шві — правило.',
    },
    {
      en: 'in- assimilates: il- before l, im- before b / m / p, ir- before r. un- never changes. Nothing is lost at the seam: unnecessary, illegal.',
      uk: 'in- уподібнюється: il- перед l, im- перед b / m / p, ir- перед r. un- не змінюється ніколи. На шві нічого не губиться: unnecessary, illegal.',
    },
    {
      en: 'At the seam: silent e drops before a vowel (but keeps soft c / g: noticeable); y → i after a consonant; a STRESSED final CVC doubles (beginning, but visiting).',
      uk: 'На шві: німе e зникає перед голосною (але тримає мʼякі c / g: noticeable); y → i після приголосної; НАГОЛОШЕНИЙ кінцевий CVC подвоюється (beginning, але visiting).',
    },
    {
      en: '-ful has one l (useful); -ed is how you feel, -ing is what causes it (bored by a boring call).',
      uk: '-ful має одну l (useful); -ed — як ви почуваєтеся, -ing — що це викликає (bored від boring дзвінка).',
    },
    {
      en: 'Learn families and use the slot test: the ___ → noun, to ___ → verb, a ___ plan → adjective, acted ___ → adverb.',
      uk: 'Вчіть родини й користуйтеся тестом місця: the ___ → іменник, to ___ → дієслово, a ___ plan → прикметник, acted ___ → прислівник.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“unpossible”, “unlegal”', uk: '«unpossible», «unlegal»' },
      body: { en: 'These take in-, which assimilates: impossible, illegal.', uk: 'Ці слова беруть in-, яке уподібнюється: impossible, illegal.' },
    },
    {
      title: { en: '“inresponsible”, “inregular”', uk: '«inresponsible», «inregular»' },
      body: { en: 'Before r, in- becomes ir-, and both r’s stay: irresponsible, irregular.', uk: 'Перед r in- стає ir-, і обидві r лишаються: irresponsible, irregular.' },
    },
    {
      title: { en: '“usefull”, “carefuly”', uk: '«usefull», «carefuly»' },
      body: { en: 'The suffix is -ful (one l); the adverb adds -ly: useful, carefully.', uk: 'Суфікс — -ful (одна l); прислівник додає -ly: useful, carefully.' },
    },
    {
      title: { en: '“begining”, “visitting”', uk: '«begining», «visitting»' },
      body: { en: 'Stress decides: be-GIN → beginning, VIS-it → visiting.', uk: 'Вирішує наголос: be-GIN → beginning, VIS-it → visiting.' },
    },
    {
      title: { en: '“pronounciation”, “arguement”', uk: '«pronounciation», «arguement»' },
      body: { en: 'Lexical stems: pronunciation, argument. Learn them as words.', uk: 'Лексичні основи: pronunciation, argument. Вчіть як слова.' },
    },
    {
      title: { en: '“I’m boring in this meeting”', uk: '«I’m boring in this meeting»' },
      body: { en: '-ed = how you feel: I’m bored. The meeting is boring.', uk: '-ed = як ви почуваєтеся: I’m bored. The meeting is boring.' },
    },
    {
      title: { en: '“Please setup the server”', uk: '«Please setup the server»' },
      body: { en: 'Verb = two words: set up. Noun = one word: the setup.', uk: 'Дієслово — два слова: set up. Іменник — одне: the setup.' },
    },
  ],
  exercises: [
    {
      id: 'ex-word-formation-1',
      kind: 'gap',
      sentence: 'Deploying the whole stack in ten minutes is ___ (possible).',
      answers: ['impossible'],
      hint: { en: 'the opposite, with in-', uk: 'антонім з in-' },
      explain: { en: 'possible takes in-, and in- becomes im- before p: impossible.', uk: 'possible бере in-, а in- перед p стає im-: impossible.' },
      level: 'b1',
      tags: ['word-formation', 'negative-prefixes'],
    },
    {
      id: 'ex-word-formation-2',
      kind: 'gap',
      sentence: 'Sharing customer data without consent is ___ (legal).',
      answers: ['illegal'],
      hint: { en: 'the opposite, with in-', uk: 'антонім з in-' },
      explain: { en: 'in- + legal → il- before l, and both l’s stay: illegal.', uk: 'in- + legal → il- перед l, і обидві l лишаються: illegal.' },
      level: 'b1',
      tags: ['word-formation', 'negative-prefixes'],
    },
    {
      id: 'ex-word-formation-3',
      kind: 'gap',
      sentence: 'That log line is ___ (relevant) to the bug — ignore it.',
      answers: ['irrelevant'],
      hint: { en: 'the opposite, with in-', uk: 'антонім з in-' },
      explain: { en: 'Before r, in- becomes ir-: irrelevant (two r’s).', uk: 'Перед r in- стає ir-: irrelevant (дві r).' },
      level: 'b1',
      tags: ['word-formation', 'negative-prefixes'],
    },
    {
      id: 'ex-word-formation-4',
      kind: 'mcq',
      prompt: { en: 'Which spelling is correct?', uk: 'Який правопис правильний?' },
      options: ['unnecessary', 'unecessary', 'innecessary', 'unnecesary'],
      correct: 0,
      explain: { en: 'un + necessary: nothing is lost at the seam, so two n’s; the root keeps its one c and double s.', uk: 'un + necessary: на шві нічого не губиться, тож дві n; корінь зберігає одну c і подвійну s.' },
      level: 'b1',
      tags: ['word-formation', 'negative-prefixes'],
    },
    {
      id: 'ex-word-formation-5',
      kind: 'mcq',
      prompt: { en: 'I read the ticket ___ and fixed the wrong service. (= understood it wrongly)', uk: 'Я неправильно зрозумів тікет і виправив не той сервіс.' },
      options: ['misunderstood', 'disunderstood', 'ununderstood', 'nonunderstood'],
      correct: 0,
      explain: { en: 'mis- = wrongly: I understood it, but wrongly → misunderstood.', uk: 'mis- = неправильно: я зрозумів, але хибно → misunderstood.' },
      level: 'b1',
      tags: ['word-formation', 'negative-prefixes'],
    },
    {
      id: 'ex-word-formation-6',
      kind: 'mcq',
      prompt: { en: 'The opposite of “agree” is:', uk: 'Антонім до «agree»:' },
      options: ['disagree', 'unagree', 'inagree', 'misagree'],
      correct: 0,
      explain: { en: 'dis- gives the opposite action or feeling with verbs: disagree, dislike, disable.', uk: 'dis- з дієсловами дає протилежну дію чи почуття: disagree, dislike, disable.' },
      level: 'b1',
      tags: ['word-formation', 'negative-prefixes'],
    },
    {
      id: 'ex-word-formation-7',
      kind: 'gap',
      sentence: 'Our new ___ (employ) starts on Monday — please give her access.',
      answers: ['employee'],
      hint: { en: 'the person who is hired', uk: 'людина, яку наймають' },
      explain: { en: '-ee = the one it is done to (hired): employee. The employer hires.', uk: '-ee = той, з ким це роблять (кого наймають): employee. Наймає employer.' },
      level: 'b1',
      tags: ['word-formation', 'noun-suffixes'],
    },
    {
      id: 'ex-word-formation-8',
      kind: 'gap',
      sentence: 'The ___ (decide) to migrate was made last week.',
      answers: ['decision'],
      hint: { en: 'a noun', uk: 'іменник' },
      explain: { en: 'The ___ → a noun. decide uses the stem decis-: decision.', uk: 'The ___ → іменник. decide має основу decis-: decision.' },
      level: 'b1',
      tags: ['word-formation', 'noun-suffixes'],
    },
    {
      id: 'ex-word-formation-9',
      kind: 'gap',
      sentence: 'We improved the ___ (reliable) of the payment service.',
      answers: ['reliability'],
      hint: { en: 'a noun, -ity', uk: 'іменник, -ity' },
      explain: { en: 'the ___ of → a noun. -ble becomes -bil- before -ity: reliability.', uk: 'the ___ of → іменник. -ble перед -ity стає -bil-: reliability.' },
      level: 'b1',
      tags: ['word-formation', 'noun-suffixes'],
    },
    {
      id: 'ex-word-formation-10',
      kind: 'mcq',
      prompt: { en: 'How do you spell «вимова»?', uk: 'Як пишеться «вимова»?' },
      options: ['pronunciation', 'pronounciation', 'pronunsiation', 'pronouncation'],
      correct: 0,
      explain: { en: 'pronounce → pronunciation: a different stem, no o. A lexical fact, not a rule.', uk: 'pronounce → pronunciation: інша основа, без o. Факт лексики, а не правило.' },
      level: 'b1',
      tags: ['word-formation', 'noun-suffixes'],
    },
    {
      id: 'ex-word-formation-11',
      kind: 'gap',
      sentence: 'Be ___ (care) with the production database.',
      answers: ['careful'],
      hint: { en: 'an adjective, -ful', uk: 'прикметник, -ful' },
      explain: { en: '-ful has one l: careful.', uk: '-ful має одну l: careful.' },
      level: 'b1',
      tags: ['word-formation', 'adjective-suffixes'],
    },
    {
      id: 'ex-word-formation-12',
      kind: 'gap',
      sentence: 'She reviewed the migration very ___ (careful).',
      answers: ['carefully'],
      hint: { en: 'an adverb', uk: 'прислівник' },
      explain: { en: 'careful + ly: nothing is lost at the seam, so two l’s: carefully.', uk: 'careful + ly: на шві нічого не губиться, тож дві l: carefully.' },
      level: 'b1',
      tags: ['word-formation', 'adjective-suffixes'],
    },
    {
      id: 'ex-word-formation-13',
      kind: 'mcq',
      prompt: { en: 'The call had no agenda and went on for two hours. I was so ___.', uk: 'Дзвінок не мав порядку денного й тривав дві години. Мені було так нудно.' },
      options: ['bored', 'boring', 'bore', 'boredom'],
      correct: 0,
      explain: { en: '-ed = how you feel: I was bored. The call was boring.', uk: '-ed = як ви почуваєтеся: I was bored. Дзвінок був boring.' },
      level: 'b1',
      tags: ['word-formation', 'adjective-suffixes'],
    },
    {
      id: 'ex-word-formation-14',
      kind: 'gap',
      sentence: 'We are ___ (begin) the migration right now.',
      answers: ['beginning'],
      hint: { en: '-ing form', uk: 'форма -ing' },
      explain: { en: 'be-GIN: stressed last syllable, one vowel + one consonant → n doubles: beginning.', uk: 'be-GIN: наголошений останній склад, одна голосна + одна приголосна → n подвоюється: beginning.' },
      level: 'b1',
      tags: ['word-formation', 'spelling'],
    },
    {
      id: 'ex-word-formation-15',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['Please set up the server before the demo.', 'Please setup the server before the demo.', 'The set up took an hour.'],
      correct: 0,
      explain: { en: 'Verb = two words (set up); noun = one word (the setup).', uk: 'Дієслово — два слова (set up); іменник — одне (the setup).' },
      level: 'b1',
      tags: ['word-formation', 'word-families'],
    },
    {
      id: 'ex-word-formation-16',
      kind: 'mcq',
      prompt: { en: '“Her code review was invaluable” means it was …', uk: '«Her code review was invaluable» означає, що він був …' },
      options: ['extremely useful', 'useless', 'not worth much'],
      correct: 0,
      explain: { en: 'invaluable = extremely valuable: here in- does not negate.', uk: 'invaluable = надзвичайно цінний: тут in- не заперечує.' },
      level: 'b1',
      tags: ['word-formation', 'negative-prefixes'],
    },
    {
      id: 'ex-word-formation-17',
      kind: 'gap',
      sentence: 'The project was a big success — the whole team was ___ (success).',
      answers: ['successful'],
      hint: { en: 'an adjective', uk: 'прикметник' },
      explain: { en: 'was ___ → an adjective: successful. success is the noun.', uk: 'was ___ → прикметник: successful. success — іменник.' },
      level: 'b1',
      tags: ['word-formation', 'word-families'],
    },
  ],
  seeAlso: ['m34-confusables', 'm32-phrasal-verbs-system', 'm33-collocations', 'm12-comparatives', 'm29-subjunctive-formal'],
  sources: [
    { title: 'Cambridge Dictionary — Word formation', url: 'https://dictionary.cambridge.org/grammar/british-grammar/word-formation' },
    { title: 'Cambridge Dictionary — Prefixes', url: 'https://dictionary.cambridge.org/grammar/british-grammar/prefixes' },
    { title: 'Cambridge Dictionary — Suffixes', url: 'https://dictionary.cambridge.org/grammar/british-grammar/suffixes' },
    { title: 'Cambridge Dictionary — Negative prefixes and suffixes', url: 'https://dictionary.cambridge.org/grammar/british-grammar/prefixes-and-suffixes' },
    { title: 'British Council LearnEnglish — Adjectives ending in -ed and -ing', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/adjectives-ending-ed-ing' },
  ],
};
