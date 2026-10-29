import type { Module } from '../types';

/*
 * CHANGED (C3): M14 · Passive: the essentials — Section III Core Grammar. Authored EN first, UA second;
 * grammar terms stay English in both languages; examples are US English with a work/dev lean (the
 * owner's daily passive lives in postmortems, tickets, docs and release notes). Facts verified
 * against Cambridge Grammar (Passive: forms · Passive: uses · Passives with and without an agent ·
 * Get passive · Passive: typical errors) and British Council LearnEnglish (Passives · Active and
 * passive voice).
 * Spine: the passive is a FOCUS tool — the thing the action happened to becomes the subject. Form =
 * be + V3, and be carries the whole tense. Most passives drop the doer; only transitive verbs have a
 * passive (happen / occur / consist never do).
 */
export const m14: Module = {
  id: 'm14-passive-intro',
  num: 14,
  section: 's2-core-grammar',
  order: 3,
  level: 'b1',
  title: { en: 'Passive: the essentials', uk: 'Passive: основи' },
  tagline: {
    en: 'The bug was introduced in v2.3 · The service has been restored · Requests are cached for five minutes — the voice of postmortems, tickets and docs. be + V3, and the tense lives in be.',
    uk: 'The bug was introduced in v2.3 · The service has been restored · Requests are cached for five minutes — голос постмортемів, тікетів і документації. be + V3, а час живе в be.',
  },
  readMins: 18,
  mentalModel: {
    en: 'An active sentence starts with WHO did it: *The intern deleted the table.* A passive sentence starts with WHAT it happened to: *The table was deleted.* Nothing about the event changes — only the focus. The form is always **be + V3**: be carries the tense (is · was · has been · will be · can be), the V3 never changes. The doer is optional and usually left out; add *by …* only when the doer is news. And only verbs that take an object have a passive — *happen, occur, arrive, consist* never do.',
    uk: 'Активне речення починається з того, ХТО це зробив: *The intern deleted the table.* Пасивне — з того, З ЧИМ це сталося: *The table was deleted.* У самій події нічого не змінюється — лише фокус. Форма завжди **be + V3**: be несе час (is · was · has been · will be · can be), V3 не змінюється ніколи. Виконавець необовʼязковий і зазвичай опускається; *by …* додають лише тоді, коли виконавець — новина. І passive мають лише дієслова з додатком — *happen, occur, arrive, consist* його не мають ніколи.',
  },
  topics: [
    // ── 1. FORM ────────────────────────────────────────────────────────────
    {
      id: 'form-present-past',
      title: { en: 'The form: be + V3, the tense lives in be', uk: 'Форма: be + V3, час живе в be' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Ukrainian has several ways to say it — *«баг **виправили**»*, *«баг **виправлено**»*, *«баг **був виправлений**»*, *«баг **виправляється**»*. English has one machine: **be + V3** (the past participle). *The bug **is fixed** · The bug **was fixed** · The bug **has been fixed** · The bug **will be fixed**.* Look at what moves: only **be**. The V3 *fixed* stays the same in every tense — so if you can conjugate *be*, you can build any passive.',
            uk: 'Українська має кілька способів сказати це — *«баг **виправили**»*, *«баг **виправлено**»*, *«баг **був виправлений**»*, *«баг **виправляється**»*. Англійська має одну машину: **be + V3** (past participle). *The bug **is fixed** · The bug **was fixed** · The bug **has been fixed** · The bug **will be fixed**.* Погляньте, що рухається: лише **be**. V3 *fixed* однакове в кожному часі — тож якщо ви вмієте відмінювати *be*, ви збудуєте будь-який passive.',
          },
        },
        {
          kind: 'figure',
          fig: 'passive-flip',
          caption: {
            en: 'The flip: the object moves to the front, the verb becomes be + V3, the doer moves to an optional by-phrase — usually dropped.',
            uk: 'Перетворення: додаток переходить на початок, дієслово стає be + V3, виконавець переходить у необовʼязкову фразу з by — зазвичай її опускають.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Tense', uk: 'Час' },
            { en: 'be + V3', uk: 'be + V3' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'Present Simple', uk: 'Present Simple' },
              { en: 'am / is / are + V3', uk: 'am / is / are + V3' },
              { en: 'The tests are run every night.', uk: 'The tests are run every night.' },
            ],
            [
              { en: 'Present Continuous', uk: 'Present Continuous' },
              { en: 'am / is / are being + V3', uk: 'am / is / are being + V3' },
              { en: 'Your PR is being reviewed.', uk: 'Your PR is being reviewed.' },
            ],
            [
              { en: 'Past Simple', uk: 'Past Simple' },
              { en: 'was / were + V3', uk: 'was / were + V3' },
              { en: 'The bug was introduced in v2.3.', uk: 'The bug was introduced in v2.3.' },
            ],
            [
              { en: 'Past Continuous', uk: 'Past Continuous' },
              { en: 'was / were being + V3', uk: 'was / were being + V3' },
              { en: 'The database was being migrated when the alert fired.', uk: 'The database was being migrated when the alert fired.' },
            ],
            [
              { en: 'Present Perfect', uk: 'Present Perfect' },
              { en: 'has / have been + V3', uk: 'has / have been + V3' },
              { en: 'The service has been restored.', uk: 'The service has been restored.' },
            ],
            [
              { en: 'will / going to', uk: 'will / going to' },
              { en: 'will be + V3 · am / is / are going to be + V3', uk: 'will be + V3 · am / is / are going to be + V3' },
              { en: 'The release will be deployed on Monday.', uk: 'The release will be deployed on Monday.' },
            ],
            [
              { en: 'modal', uk: 'modal' },
              { en: 'can / must / should … + be + V3', uk: 'can / must / should … + be + V3' },
              { en: 'All input must be validated.', uk: 'All input must be validated.' },
            ],
          ],
          caption: {
            en: 'Per Cambridge (Passive: forms) and British Council: only be changes to show the tense; the past participle stays the same.',
            uk: 'За Cambridge (Passive: forms) і British Council: щоб показати час, змінюється лише be; past participle лишається тим самим.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: dropping be — “The bug fixed yesterday”', uk: 'Пастка україномовних: be випадає — «The bug fixed yesterday»' },
          md: {
            en: 'Ukrainian *«баг **виправлено** вчора»* has no auxiliary, so the English comes out as ✕ *The bug **fixed** yesterday.* But without *be* that is an **active** Past Simple — it says the bug fixed something. The passive needs both parts: ✓ *The bug **was fixed** yesterday.* Same in tickets: *Already deployed to staging* is fine as a note-style fragment, but in a full sentence write *It **has been deployed** to staging.*',
            uk: 'Українське *«баг **виправлено** вчора»* не має допоміжного дієслова, тож англійською виходить ✕ *The bug **fixed** yesterday.* Але без *be* це **активний** Past Simple — він каже, що баг щось виправив. Passive потребує обох частин: ✓ *The bug **was fixed** yesterday.* Так само в тікетах: *Already deployed to staging* — нормальний фрагмент у стилі нотатки, але в повному реченні пишіть *It **has been deployed** to staging.*',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'V3, not V2: “was wrote” → “was written”', uk: 'V3, а не V2: «was wrote» → «was written»' },
          md: {
            en: 'For regular verbs V2 and V3 look the same (*fixed*), which hides the rule. Irregular verbs expose it: ✕ *The spec **was wrote** by Anna* → ✓ *was **written*** · ✕ *was **took** down* → ✓ *was **taken** down* · ✕ *has been **broke*** → ✓ *has been **broken***. If unsure, drill the third column in the [Irregular verbs trainer](#/irregular).',
            uk: 'У правильних дієслів V2 і V3 однакові (*fixed*), і це ховає правило. Неправильні дієслова його виказують: ✕ *The spec **was wrote** by Anna* → ✓ *was **written*** · ✕ *was **took** down* → ✓ *was **taken** down* · ✕ *has been **broke*** → ✓ *has been **broken***. Якщо не певні — потренуйте третю колонку в [тренажері неправильних дієслів](#/irregular).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Negatives and questions** follow *be* (or the first auxiliary), exactly as in active sentences: *The fix **wasn’t** deployed · The docs **haven’t been** updated yet · **Was** it tested? · **Has** the migration **been** reviewed? · **Will** the data **be** backed up?* No *do* anywhere — ✕ *Did it tested?* → ✓ ***Was** it tested?*',
            uk: '**Заперечення і питання** будуються від *be* (або першого допоміжного), так само як в активних реченнях: *The fix **wasn’t** deployed · The docs **haven’t been** updated yet · **Was** it tested? · **Has** the migration **been** reviewed? · **Will** the data **be** backed up?* Жодного *do* — ✕ *Did it tested?* → ✓ ***Was** it tested?*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: “I was born”', uk: 'Дрібний шрифт: «I was born»' },
          md: {
            en: 'UA *«я народився»* is an active, reflexive verb — English uses a **passive**: ✓ *I **was born** in Lviv.* Not ✕ *I born* and not ✕ *I am born* (Cambridge lists *She is born* as a typical error). Only the past makes sense for a person: *My daughter **was born** in 2019.*',
            uk: 'UA *«я народився»* — активне зворотне дієслово, а англійська вживає **passive**: ✓ *I **was born** in Lviv.* Не ✕ *I born* і не ✕ *I am born* (Cambridge наводить *She is born* як типову помилку). Для людини має сенс лише минулий час: *My daughter **was born** in 2019.*',
          },
        },
      ],
    },

    // ── 2. WHEN TO USE ─────────────────────────────────────────────────────
    {
      id: 'when-to-use',
      title: { en: 'When to use it: the thing is the topic', uk: 'Коли вживати: тема — це річ' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Choose the passive when the **thing** matters more than the **doer** — because the doer is **unknown** (*My laptop was stolen*), **obvious** (*The suspect was arrested* — by the police, who else), or **unimportant** for the reader (*Requests are cached for five minutes*). Cambridge also notes the passive is common in technical writing, where the process matters more than the person. That describes most engineering text: it is about **systems**, so systems become the subjects.',
            uk: 'Обирайте passive, коли **річ** важливіша за **виконавця** — бо виконавець **невідомий** (*My laptop was stolen*), **очевидний** (*The suspect was arrested* — поліцією, ким же ще) або **неважливий** для читача (*Requests are cached for five minutes*). Cambridge також зазначає, що passive поширений у технічних текстах, де процес важливіший за людину. Це описує більшість інженерних текстів: вони про **системи**, тож системи й стають підметами.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Where you write it', uk: 'Де ви це пишете' },
            { en: 'Typical passive', uk: 'Типовий passive' },
            { en: 'Why passive', uk: 'Чому passive' },
          ],
          rows: [
            [
              { en: 'Postmortem', uk: 'Постмортем' },
              { en: 'The bug was introduced in v2.3 and was detected by monitoring at 03:12.', uk: 'The bug was introduced in v2.3 and was detected by monitoring at 03:12.' },
              { en: 'the timeline of the system, not of people', uk: 'хронологія системи, а не людей' },
            ],
            [
              { en: 'Ticket / bug report', uk: 'Тікет / баг-репорт' },
              { en: 'The error is caused by a race condition in the queue consumer.', uk: 'The error is caused by a race condition in the queue consumer.' },
              { en: 'the cause is the news', uk: 'новина — це причина' },
            ],
            [
              { en: 'Docs / README', uk: 'Документація / README' },
              { en: 'Tokens are refreshed automatically. Logs are kept for 30 days.', uk: 'Tokens are refreshed automatically. Logs are kept for 30 days.' },
              { en: 'the doer is the system itself', uk: 'виконавець — сама система' },
            ],
            [
              { en: 'Release notes', uk: 'Release notes' },
              { en: 'Dark mode has been added. Two memory leaks have been fixed.', uk: 'Dark mode has been added. Two memory leaks have been fixed.' },
              { en: 'users care what changed, not who', uk: 'користувачам важливо, що змінилося, а не хто' },
            ],
            [
              { en: 'Status page', uk: 'Status page' },
              { en: 'The issue has been identified. A fix is being deployed.', uk: 'The issue has been identified. A fix is being deployed.' },
              { en: 'focus on the state of the service', uk: 'фокус на стані сервісу' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Blameless postmortems love the passive — for the right reason', uk: 'Blameless-постмортеми люблять passive — із правильної причини' },
          md: {
            en: 'A postmortem asks **what in the system** let the failure happen, not **who** to blame. *The cache **was not invalidated** after the deploy* points at a missing step you can automate; *Oleh **forgot** to invalidate the cache* points at a person and invites defensiveness. Same facts, different focus — and the focus is the whole reason the passive exists.',
            uk: 'Постмортем питає, **що в системі** дозволило збою статися, а не **кого** звинуватити. *The cache **was not invalidated** after the deploy* вказує на пропущений крок, який можна автоматизувати; *Oleh **forgot** to invalidate the cache* вказує на людину й провокує оборону. Ті самі факти, інший фокус — а фокус і є причиною, з якої passive існує.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '…and the wrong reason: “Mistakes were made”', uk: '…і з неправильної: «Mistakes were made»' },
          md: {
            en: 'The same tool can **hide** responsibility. *Mistakes were made · The deadline was missed · Your email was overlooked* — the reader asks *by whom?* and hears evasion. When the doer is **you** and owning it matters — an apology, a status update to your manager — use the active: *I **missed** your email — sorry, here is the answer.* Rule of thumb: passive for systems, active for commitments.',
            uk: 'Той самий інструмент може **ховати** відповідальність. *Mistakes were made · The deadline was missed · Your email was overlooked* — читач питає *ким?* і чує ухиляння. Коли виконавець — **ви** і важливо взяти це на себе — вибачення, апдейт менеджеру, — вживайте active: *I **missed** your email — sorry, here is the answer.* Просте правило: passive для систем, active для зобовʼязань.',
          },
        },
        {
          kind: 'compare',
          dive: 3,
          a: { en: 'Active — the topic jumps', uk: 'Active — тема стрибає' },
          b: { en: 'Passive — the topic stays', uk: 'Passive — тема тримається' },
          rows: [
            [
              { en: 'Sentence 1', uk: 'Речення 1' },
              { en: 'We released v3 last week.', uk: 'We released v3 last week.' },
              { en: 'We released v3 last week.', uk: 'We released v3 last week.' },
            ],
            [
              { en: 'Sentence 2', uk: 'Речення 2' },
              { en: 'QA had tested it on three devices.', uk: 'QA had tested it on three devices.' },
              { en: 'It had been tested on three devices.', uk: 'It had been tested on three devices.' },
            ],
            [
              { en: 'Effect', uk: 'Ефект' },
              { en: 'a new subject (QA) the reader didn’t ask about', uk: 'новий підмет (QA), про який читач не питав' },
              { en: 'v3 stays the subject — the text flows', uk: 'v3 лишається підметом — текст тече' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Old information first, new information last.** English likes to start a sentence with what the reader already knows and end with the news. The passive lets you do that: *— Who created Git? — Git **was created by Linus Torvalds**.* The topic (Git) opens the sentence, the answer (the person) lands at the end — the place of focus.',
            uk: '**Відоме — на початку, нове — в кінці.** Англійська любить починати речення з того, що читач уже знає, і закінчувати новиною. Passive дає це зробити: *— Who created Git? — Git **was created by Linus Torvalds**.* Тема (Git) відкриває речення, відповідь (людина) стоїть у кінці — на місці фокусу.',
          },
        },
      ],
    },

    // ── 3. BY + AGENT ──────────────────────────────────────────────────────
    {
      id: 'by-agent',
      title: { en: 'by + agent: usually left out', uk: 'by + виконавець: зазвичай опускають' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Most passives have **no** *by*-phrase at all — leaving the doer out is usually the point. Add ***by + agent*** only when the doer is **new, important information**: *The outage was caused **by a misconfigured load balancer*** (that is the finding) · *This library is maintained **by the platform team*** (that is who to ask). Cambridge: we use *by* when the agent matters; agentless passives are very common when it is unknown, unimportant or obvious.',
            uk: 'Більшість пасивних речень **не має** фрази з *by* взагалі — опустити виконавця зазвичай і є метою. Додавайте ***by + виконавець*** лише тоді, коли виконавець — **нова, важлива інформація**: *The outage was caused **by a misconfigured load balancer*** (це і є висновок) · *This library is maintained **by the platform team*** (до них і звертатися). Cambridge: *by* уживають, коли виконавець важливий; пасив без виконавця дуже поширений, коли той невідомий, неважливий чи очевидний.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Don’t write “by someone” or “by people”', uk: 'Не пишіть «by someone» чи «by people»' },
          md: {
            en: '✕ *The server was restarted **by someone*** · ✕ *English is spoken **by people** all over the world.* An empty agent adds nothing — that is exactly the information the passive lets you drop: ✓ *The server **was restarted** · English **is spoken** all over the world.* If you really don’t know who did it and that matters (a security incident), say so explicitly: *It is not yet known who restarted the server.*',
            uk: '✕ *The server was restarted **by someone*** · ✕ *English is spoken **by people** all over the world.* Порожній виконавець нічого не додає — це саме та інформація, яку passive дає опустити: ✓ *The server **was restarted** · English **is spoken** all over the world.* Якщо ви справді не знаєте, хто це зробив, і це важливо (інцидент безпеки), скажіть це прямо: *It is not yet known who restarted the server.*',
          },
        },
        {
          kind: 'compare',
          a: { en: 'by — WHO / WHAT did it', uk: 'by — ХТО / ЩО це зробив' },
          b: { en: 'with — the TOOL used', uk: 'with — ІНСТРУМЕНТ' },
          rows: [
            [
              { en: 'Door', uk: 'Двері' },
              { en: 'The door was opened by the security guard.', uk: 'The door was opened by the security guard.' },
              { en: 'The door was opened with a master key.', uk: 'The door was opened with a master key.' },
            ],
            [
              { en: 'Config', uk: 'Конфіг' },
              { en: 'The config is encrypted by the build pipeline.', uk: 'The config is encrypted by the build pipeline.' },
              { en: 'The config is encrypted with AES-256.', uk: 'The config is encrypted with AES-256.' },
            ],
            [
              { en: 'UA', uk: 'UA' },
              { en: 'ким? (орудний відмінок — виконавець)', uk: 'ким? (орудний відмінок — виконавець)' },
              { en: 'чим? (орудний відмінок — знаряддя)', uk: 'чим? (орудний відмінок — знаряддя)' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Verbs with two objects** (*give, send, show, offer, tell*) have two possible passives, and the **person** first is usually more natural: *They gave me admin access* → ✓ *I **was given** admin access* (also possible: *Admin access was given to me*). UA *«мені дали доступ»* tempts ✕ *To me was given access* — English doesn’t start a passive with *to me*.',
            uk: '**Дієслова з двома додатками** (*give, send, show, offer, tell*) мають два можливі passive, і варіант з **особою** на початку зазвичай природніший: *They gave me admin access* → ✓ *I **was given** admin access* (можливо й *Admin access was given to me*). UA *«мені дали доступ»* підштовхує до ✕ *To me was given access* — англійська не починає passive з *to me*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 3,
          title: { en: 'The get-passive: informal, often bad news', uk: 'Get-passive: розмовний, часто про неприємне' },
          md: {
            en: 'In speech, *get* often replaces *be*: *My PR **got rejected** · The meeting **got canceled** · He **got promoted**.* Cambridge: the get-passive is mostly informal and common for events that are negative or not desired (*promoted* shows it isn’t only bad news). Recognize it and use it in chat; in docs and postmortems stay with *be*.',
            uk: 'У розмові *get* часто заміняє *be*: *My PR **got rejected** · The meeting **got canceled** · He **got promoted**.* Cambridge: get-passive здебільшого розмовний і поширений для небажаних чи негативних подій (*promoted* показує, що не лише для поганих новин). Упізнавайте його й уживайте в чаті; у документації та постмортемах лишайтеся з *be*.',
          },
        },
      ],
    },

    // ── 4. PASSIVE vs ACTIVE ───────────────────────────────────────────────
    {
      id: 'passive-vs-active',
      title: { en: 'Passive vs active: which verbs can flip', uk: 'Passive vs active: які дієслова можна перевернути' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A passive needs an **object** to promote — so only **transitive** verbs have one. Verbs without an object have nothing to move to the front: *happen, occur, arrive, appear, exist, die, consist (of), belong (to)*. Cambridge is explicit that intransitive verbs cannot form passives. ✕ *The incident **was happened** at 3 a.m.* → ✓ *The incident **happened** at 3 a.m.* · ✕ *The system **is consisted** of three services* → ✓ *The system **consists** of three services.*',
            uk: 'Passive потребує **додатка**, який можна підняти, — тож його мають лише **перехідні** дієслова. Дієсловам без додатка нічого переносити на початок: *happen, occur, arrive, appear, exist, die, consist (of), belong (to)*. Cambridge прямо пише, що неперехідні дієслова не утворюють passive. ✕ *The incident **was happened** at 3 a.m.* → ✓ *The incident **happened** at 3 a.m.* · ✕ *The system **is consisted** of three services* → ✓ *The system **consists** of three services.*',
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
              { en: 'The incident was happened at 3 a.m.', uk: 'The incident was happened at 3 a.m.' },
              { en: 'The incident happened at 3 a.m.', uk: 'The incident happened at 3 a.m.' },
              { en: 'happen has no object → no passive', uk: 'happen не має додатка → немає passive' },
            ],
            [
              { en: 'The bug fixed yesterday.', uk: 'The bug fixed yesterday.' },
              { en: 'The bug was fixed yesterday.', uk: 'The bug was fixed yesterday.' },
              { en: 'no be = an active sentence', uk: 'без be = активне речення' },
            ],
            [
              { en: 'The spec was wrote by Anna.', uk: 'The spec was wrote by Anna.' },
              { en: 'The spec was written by Anna.', uk: 'The spec was written by Anna.' },
              { en: 'V3, not V2', uk: 'V3, а не V2' },
            ],
            [
              { en: 'The system is consisted of three services.', uk: 'The system is consisted of three services.' },
              { en: 'The system consists of three services.', uk: 'The system consists of three services.' },
              { en: 'consist is intransitive', uk: 'consist — неперехідне' },
            ],
            [
              { en: 'To me was given admin access.', uk: 'To me was given admin access.' },
              { en: 'I was given admin access.', uk: 'I was given admin access.' },
              { en: 'the person becomes the subject', uk: 'особа стає підметом' },
            ],
            [
              { en: 'I born in 1995. / I am born in 1995.', uk: 'I born in 1995. / I am born in 1995.' },
              { en: 'I was born in 1995.', uk: 'I was born in 1995.' },
              { en: 'be born is a past passive', uk: 'be born — пасив у минулому' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: «-ся» is not a passive detector', uk: 'Пастка україномовних: «-ся» — не індикатор passive' },
          md: {
            en: 'UA *«-ся»* verbs go both ways in English. *«Зустріч **проводиться** щопонеділка»* → passive: ✓ *The meeting **is held** every Monday* (✕ *The meeting holds*). But *«Сторінка **завантажується**»* → active: ✓ *The page **is loading*** — some English verbs describe what happens to the thing in the active form. Don’t translate the ending; ask whether English has someone **doing** it to the thing.',
            uk: 'UA-дієслова на *«-ся»* перекладаються англійською по-різному. *«Зустріч **проводиться** щопонеділка»* → passive: ✓ *The meeting **is held** every Monday* (✕ *The meeting holds*). Але *«Сторінка **завантажується**»* → active: ✓ *The page **is loading*** — деякі англійські дієслова описують те, що відбувається з річчю, в активній формі. Не перекладайте закінчення; питайте, чи хтось у англійському реченні **робить** це з річчю.',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: '**Verbs that work both ways** — *open, close, start, stop, break, change, load, fail, crash, update*. In the active they describe what happened to the thing: *The build **failed** · The app **crashed** · The page **loads** in 2 seconds.* In the passive they imply someone did it: *The door **opened*** (it just happened) vs *The door **was opened*** (by someone). So *The server **crashed*** and *The server **was shut down*** tell two different stories in a postmortem.',
            uk: '**Дієслова, що працюють в обидва боки**, — *open, close, start, stop, break, change, load, fail, crash, update*. В active вони описують, що сталося з річчю: *The build **failed** · The app **crashed** · The page **loads** in 2 seconds.* У passive вони натякають, що хтось це зробив: *The door **opened*** (просто сталося) vs *The door **was opened*** (кимось). Тож *The server **crashed*** і *The server **was shut down*** розповідають у постмортемі дві різні історії.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Where the passive goes next.** Perfect-continuous passives, *have something done* (*We had the laptops replaced*), and the reporting passive *It is said that… / He is said to…* belong to B2 — see [m24](#/m/m24-passive-advanced). Two bridges you already know: *make* takes *to* in the passive (*I was made to rewrite it* — [m16](#/m/m16-gerund-infinitive)), and *This needs fixing* = *needs to be fixed*.',
            uk: '**Куди passive веде далі.** Perfect continuous у passive, *have something done* (*We had the laptops replaced*) і passive для переказу *It is said that… / He is said to…* — це рівень B2, див. [m24](#/m/m24-passive-advanced). Два місточки, які ви вже знаєте: *make* у passive бере *to* (*I was made to rewrite it* — [m16](#/m/m16-gerund-infinitive)), і *This needs fixing* = *needs to be fixed*.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Passive = be + V3. be carries the tense (is · was · has been · will be · can be); the V3 never changes.',
      uk: 'Passive = be + V3. be несе час (is · was · has been · will be · can be); V3 ніколи не змінюється.',
    },
    {
      en: 'Use it when the thing matters more than the doer — the doer is unknown, obvious or unimportant. Engineering text is about systems, so it uses the passive a lot.',
      uk: 'Уживайте його, коли річ важливіша за виконавця — той невідомий, очевидний чи неважливий. Інженерні тексти — про системи, тож passive там скрізь.',
    },
    {
      en: 'Most passives drop the doer. Add by + agent only when the doer is the news; never “by someone / by people”.',
      uk: 'Більшість пасивних речень опускає виконавця. Додавайте by + виконавець лише тоді, коли виконавець — новина; ніколи «by someone / by people».',
    },
    {
      en: 'by = who or what did it; with = the tool: opened by the guard · opened with a key.',
      uk: 'by = хто чи що це зробив; with = інструмент: opened by the guard · opened with a key.',
    },
    {
      en: 'Only transitive verbs have a passive: happen, occur, arrive, consist, exist never do.',
      uk: 'Passive мають лише перехідні дієслова: happen, occur, arrive, consist, exist — ніколи.',
    },
    {
      en: 'Passive for systems, active for commitments: own your actions in the active (I missed your email).',
      uk: 'Passive — для систем, active — для зобовʼязань: свої дії беріть на себе в active (I missed your email).',
    },
  ],
  pitfalls: [
    {
      title: { en: '“The bug fixed yesterday”', uk: '«The bug fixed yesterday»' },
      body: {
        en: 'UA «баг виправлено» has no auxiliary, but English does: without be it is an active sentence (the bug fixed something). The bug was fixed yesterday.',
        uk: 'UA «баг виправлено» не має допоміжного дієслова, а англійська має: без be речення активне (баг щось виправив). The bug was fixed yesterday.',
      },
    },
    {
      title: { en: '“The incident was happened”', uk: '«The incident was happened»' },
      body: {
        en: 'happen, occur, arrive, consist and exist have no object, so they have no passive: The incident happened · The system consists of three services.',
        uk: 'happen, occur, arrive, consist і exist не мають додатка, тож не мають і passive: The incident happened · The system consists of three services.',
      },
    },
    {
      title: { en: '“It was wrote”', uk: '«It was wrote»' },
      body: {
        en: 'The passive takes V3 (past participle), not V2: was written, was taken, has been broken. Regular verbs hide the rule because V2 = V3.',
        uk: 'Passive бере V3 (past participle), а не V2: was written, was taken, has been broken. Правильні дієслова ховають правило, бо V2 = V3.',
      },
    },
    {
      title: { en: '“To me was given access”', uk: '«To me was given access»' },
      body: {
        en: 'UA «мені дали» → start with the person as the subject: I was given access.',
        uk: 'UA «мені дали» → почніть з особи як підмета: I was given access.',
      },
    },
    {
      title: { en: '“I born in 1995” / “I am born”', uk: '«I born in 1995» / «I am born»' },
      body: {
        en: 'UA «народився» is active, English uses a past passive: I was born in 1995.',
        uk: 'UA «народився» — активне, англійська вживає пасив у минулому: I was born in 1995.',
      },
    },
    {
      title: { en: '“…by someone” / “…by people”', uk: '«…by someone» / «…by people»' },
      body: {
        en: 'An empty agent adds nothing — dropping the doer is the point of the passive: The server was restarted.',
        uk: 'Порожній виконавець нічого не додає — опустити виконавця і є суттю passive: The server was restarted.',
      },
    },
    {
      title: { en: 'The passive that hides responsibility', uk: 'Passive, що ховає відповідальність' },
      body: {
        en: '“Mistakes were made” sounds evasive. In an apology or an update about your own work, use the active: I missed the deadline — here is the new plan.',
        uk: '«Mistakes were made» звучить як ухиляння. У вибаченні чи апдейті про власну роботу вживайте active: I missed the deadline — here is the new plan.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-passive-intro-1',
      kind: 'gap',
      sentence: 'The bug ___ in version 2.3.',
      answers: ['was introduced'],
      hint: { en: 'introduce — Past Simple passive', uk: 'introduce — Past Simple passive' },
      explain: {
        en: 'A finished past event → was + V3. The postmortem cares about the bug, not who wrote the line.',
        uk: 'Завершена подія в минулому → was + V3. Постмортем цікавить баг, а не те, хто написав рядок.',
      },
      level: 'b1',
      tags: ['passive', 'form'],
    },
    {
      id: 'ex-passive-intro-2',
      kind: 'gap',
      sentence: 'The integration tests ___ every night.',
      answers: ['are run'],
      hint: { en: 'run — Present Simple passive', uk: 'run — Present Simple passive' },
      explain: {
        en: 'A routine → are + V3. run → ran → run: the V3 of run is run.',
        uk: 'Рутина → are + V3. run → ran → run: V3 від run — це run.',
      },
      level: 'b1',
      tags: ['passive', 'form'],
    },
    {
      id: 'ex-passive-intro-3',
      kind: 'mcq',
      prompt: { en: 'The ticket ___ yesterday.', uk: 'Тікет ___ вчора (баг виправлено).' },
      options: ['fixed', 'was fixed', 'has fixed'],
      correct: 1,
      explain: {
        en: 'Without be, “The ticket fixed” is active — the ticket did the fixing. The passive needs was + V3.',
        uk: 'Без be «The ticket fixed» — активне речення: тікет щось виправив. Passive потребує was + V3.',
      },
      level: 'b1',
      tags: ['passive', 'form', 'ua-trap'],
    },
    {
      id: 'ex-passive-intro-4',
      kind: 'mcq',
      prompt: { en: 'The incident ___ at 3 a.m.', uk: 'Інцидент ___ о третій ночі.' },
      options: ['was happened', 'happened', 'has been happened'],
      correct: 1,
      explain: {
        en: 'happen has no object, so it has no passive.',
        uk: 'happen не має додатка, тож не має і passive.',
      },
      level: 'b1',
      tags: ['passive', 'intransitive', 'ua-trap'],
    },
    {
      id: 'ex-passive-intro-5',
      kind: 'gap',
      sentence: 'The docs ___ yet.',
      answers: ['haven’t been updated'],
      hint: { en: 'not update — Present Perfect passive', uk: 'not update — Present Perfect passive' },
      explain: {
        en: 'yet + Present Perfect → have not been + V3 (haven’t been updated).',
        uk: 'yet + Present Perfect → have not been + V3 (haven’t been updated).',
      },
      level: 'b1',
      tags: ['passive', 'form', 'negation'],
    },
    {
      id: 'ex-passive-intro-6',
      kind: 'mcq',
      prompt: { en: 'The spec ___ by Anna last week.', uk: 'Специфікацію ___ Анна минулого тижня.' },
      options: ['was wrote', 'was written', 'written'],
      correct: 1,
      explain: {
        en: 'be + V3: write → wrote → written. wrote is V2; written alone has no be.',
        uk: 'be + V3: write → wrote → written. wrote — це V2; саме written не має be.',
      },
      level: 'b1',
      tags: ['passive', 'form', 'irregular'],
    },
    {
      id: 'ex-passive-intro-7',
      kind: 'gap',
      sentence: 'Your pull request ___ right now.',
      answers: ['is being reviewed'],
      hint: { en: 'review — Present Continuous passive', uk: 'review — Present Continuous passive' },
      explain: {
        en: 'In progress now → is being + V3.',
        uk: 'Відбувається зараз → is being + V3.',
      },
      level: 'b1',
      tags: ['passive', 'form'],
    },
    {
      id: 'ex-passive-intro-8',
      kind: 'mcq',
      prompt: {
        en: 'Which sentence fits a status page best?',
        uk: 'Яке речення найкраще пасує для status page?',
      },
      options: ['Someone has restored the service.', 'The service has been restored.', 'The service has restored.'],
      correct: 1,
      explain: {
        en: 'Users care about the service, not the doer → Present Perfect passive. “Someone” is an empty doer; “has restored” without been is active.',
        uk: 'Користувачів цікавить сервіс, а не виконавець → Present Perfect passive. «Someone» — порожній виконавець; «has restored» без been — активне.',
      },
      level: 'b1',
      tags: ['passive', 'when-to-use'],
    },
    {
      id: 'ex-passive-intro-9',
      kind: 'mcq',
      prompt: { en: 'I ___ in Kharkiv.', uk: 'Я ___ у Харкові.' },
      options: ['born', 'am born', 'was born'],
      correct: 2,
      explain: {
        en: 'UA «народився» is active, but English uses the past passive: was born.',
        uk: 'UA «народився» — активне, але англійська вживає пасив у минулому: was born.',
      },
      level: 'b1',
      tags: ['passive', 'ua-trap'],
    },
    {
      id: 'ex-passive-intro-10',
      kind: 'gap',
      sentence: 'The new release ___ next Monday.',
      answers: ['will be deployed'],
      hint: { en: 'deploy — will', uk: 'deploy — will' },
      explain: {
        en: 'Future passive → will be + V3.',
        uk: 'Майбутній passive → will be + V3.',
      },
      level: 'b1',
      tags: ['passive', 'form'],
    },
    {
      id: 'ex-passive-intro-11',
      kind: 'mcq',
      prompt: { en: 'The config file is encrypted ___ AES-256.', uk: 'Файл конфігурації зашифровано ___ AES-256.' },
      options: ['by', 'with', 'from'],
      correct: 1,
      explain: {
        en: 'AES-256 is the tool, not the doer → with. by would introduce who or what performed the action (by the build pipeline).',
        uk: 'AES-256 — інструмент, а не виконавець → with. by вводить того, хто виконав дію (by the build pipeline).',
      },
      level: 'b1',
      tags: ['passive', 'by-agent'],
    },
    {
      id: 'ex-passive-intro-12',
      kind: 'mcq',
      prompt: { en: '___ admin access yesterday.', uk: 'Мені дали адмінський доступ учора: ___ admin access yesterday.' },
      options: ['To me was given', 'I was given', 'I gave'],
      correct: 1,
      explain: {
        en: 'With two-object verbs the person becomes the subject: I was given access. English doesn’t open a passive with “to me”.',
        uk: 'У дієслів із двома додатками підметом стає особа: I was given access. Англійська не починає passive з «to me».',
      },
      level: 'b1',
      tags: ['passive', 'by-agent', 'ua-trap'],
    },
    {
      id: 'ex-passive-intro-13',
      kind: 'gap',
      sentence: 'All user input ___ before it is stored.',
      answers: ['must be validated'],
      hint: { en: 'must + validate', uk: 'must + validate' },
      explain: {
        en: 'Modal passive → modal + be + V3.',
        uk: 'Modal у passive → modal + be + V3.',
      },
      level: 'b1',
      tags: ['passive', 'form', 'modals'],
    },
    {
      id: 'ex-passive-intro-14',
      kind: 'mcq',
      prompt: { en: 'Has the migration ___ on staging?', uk: 'Міграцію ___ на staging?' },
      options: ['tested', 'been tested', 'being tested'],
      correct: 1,
      explain: {
        en: 'Present Perfect passive question: Has + subject + been + V3?',
        uk: 'Питання в Present Perfect passive: Has + підмет + been + V3?',
      },
      level: 'b1',
      tags: ['passive', 'form', 'questions'],
    },
    {
      id: 'ex-passive-intro-15',
      kind: 'mcq',
      prompt: {
        en: 'In a blameless postmortem, which sentence keeps the focus on the system?',
        uk: 'Яке речення в blameless-постмортемі тримає фокус на системі?',
      },
      options: [
        'The cache was not invalidated after the deploy.',
        'Oleh forgot to invalidate the cache.',
        'The cache didn’t invalidated after the deploy.',
      ],
      correct: 0,
      explain: {
        en: 'The passive makes the missing step the subject — something you can automate. The second blames a person; the third is ungrammatical.',
        uk: 'Passive робить підметом пропущений крок — те, що можна автоматизувати. Друге речення звинувачує людину; третє — граматично неправильне.',
      },
      level: 'b1',
      tags: ['passive', 'when-to-use'],
    },
    {
      id: 'ex-passive-intro-16',
      kind: 'mcq',
      prompt: { en: 'The platform ___ of three services.', uk: 'Платформа ___ з трьох сервісів.' },
      options: ['is consisted', 'consists', 'is consist'],
      correct: 1,
      explain: {
        en: 'consist (of) is intransitive — no passive. UA «складається» ends in -ся, but English uses the active.',
        uk: 'consist (of) — неперехідне, passive немає. UA «складається» закінчується на -ся, але англійська вживає active.',
      },
      level: 'b1',
      tags: ['passive', 'intransitive', 'ua-trap'],
    },
  ],
  seeAlso: ['m24-passive-advanced', 'm10-perfect-family', 'm16-gerund-infinitive', 'm11-choosing-narrative', 'm17-modal-system'],
  sources: [
    {
      title: 'Cambridge Dictionary — Passive: forms',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/passive-forms',
    },
    {
      title: 'Cambridge Dictionary — Passive: uses',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/passive-uses',
    },
    {
      title: 'Cambridge Dictionary — Passives with and without an agent',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/passives',
    },
    {
      title: 'Cambridge Dictionary — Get passive',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/passive',
    },
    {
      title: 'Cambridge Dictionary — Passive: typical errors',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/passive-typical-errors',
    },
    {
      title: 'British Council LearnEnglish — Passives (B1–B2)',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/passives',
    },
    {
      title: 'British Council LearnEnglish — Active and passive voice',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/active-passive-voice',
    },
  ],
};
