import type { Module } from '../types';

/*
 * CHANGED (A2): M25 · Relative clauses — Section V Advanced Grammar, wave A2 (★ clause-welder, TokenMorph
 * family). Authored EN first, UA second; grammar terms stay English in both languages; US English with
 * a work/dev lean. Facts verified against Cambridge Grammar (Relative clauses: defining and non-defining
 * — that only in defining clauses, the object pronoun can be dropped, non-defining always has a pronoun
 * and commas · Relative pronouns · Whose — people, animals AND things · Who, whom — whom is formal and
 * mostly written · Relative clauses referring to a whole sentence — always which, usually after a comma
 * · Relative clauses — non-finite: The man sitting on the sofa …) and British Council LearnEnglish
 * (Relative pronouns and relative clauses — with that the preposition always goes to the end · Defining
 * relative clauses · Non-defining relative clauses — never that).
 * Spine: a relative clause is a second sentence WELDED into the first. What the shared word did in that
 * second sentence (subject · object · owner · place · after a preposition) picks the relative word.
 */
export const m25: Module = {
  id: 'm25-relative-clauses',
  num: 25,
  section: 's4-advanced-grammar',
  order: 3,
  level: 'b2',
  title: { en: 'Relative clauses', uk: 'Relative clauses' },
  tagline: {
    en: 'The PR (that) Anna opened · the client whose account was locked · the servers, which run Postgres, … — two sentences welded into one, and why a comma changes who you mean.',
    uk: 'The PR (that) Anna opened · the client whose account was locked · the servers, which run Postgres, … — два речення, зварені в одне, і чому кома змінює, про кого мова.',
  },
  readMins: 20,
  mentalModel: {
    en: 'A relative clause is **a second sentence welded into the first**. *I reviewed the PR. Anna opened **it** yesterday.* → *I reviewed the PR **that** Anna opened yesterday.* Three steps, always the same: (1) find the word the two sentences share; (2) look at what it **did** in sentence 2 — subject, object, owner (*her*), place (*in it*), after a preposition (*to him*) — and swap it for the matching relative word: **who / which / that · that / ∅ · whose · where · whom**; (3) **delete** the old word, so nothing is said twice. Then decide on **commas**: no commas = the clause tells you *which ones*; commas = it adds a fact about *all of them*.',
    uk: 'Relative clause — це **друге речення, вварене в перше**. *I reviewed the PR. Anna opened **it** yesterday.* → *I reviewed the PR **that** Anna opened yesterday.* Три кроки, завжди однакові: (1) знайдіть спільне слово двох речень; (2) подивіться, що воно **робило** в реченні 2 — підмет, додаток, власник (*her*), місце (*in it*), після прийменника (*to him*), — і замініть його відповідним relative word: **who / which / that · that / ∅ · whose · where · whom**; (3) **приберіть** старе слово, щоб нічого не казати двічі. Потім вирішіть щодо **ком**: без ком — речення каже, *які саме*; з комами — додає факт про *всіх*.',
  },
  topics: [
    // ── 1. DEFINING ────────────────────────────────────────────────────────
    {
      id: 'defining',
      title: { en: 'Defining clauses: which one do you mean?', uk: 'Defining clauses: про який саме йдеться?' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A **defining** relative clause tells the listener *which* person or thing you mean — without it, the sentence points at someone else or at nothing in particular: *The engineer **who joined last week** fixed the bug* (not the other engineers). Ukrainian uses one word, **«який»**, for everything; English picks the relative word by two questions: **is it a person or a thing?** and **what job did it do in its own sentence?**',
            uk: '**Defining** relative clause каже слухачеві, *яку саме* людину чи річ ви маєте на увазі, — без нього речення вказує на когось іншого або ні на кого конкретно: *The engineer **who joined last week** fixed the bug* (не інші інженери). Українська має одне слово — **«який»** — для всього; англійська обирає relative word за двома питаннями: **людина чи річ?** і **яку роль слово виконувало у своєму реченні?**',
          },
        },
        {
          kind: 'sim',
          sim: 'clause-welder',
          caption: {
            en: 'Clause Welder: pick what the shared word does in sentence 2 and watch the weld — the old word (she · it · her · in it · him) fades, the relative word flies in, and the clause slides next to its noun. The third step shows the lighter everyday form; the Commas track shows how a comma changes who you mean.',
            uk: 'Clause Welder: оберіть, що спільне слово робить у реченні 2, і подивіться на зварювання — старе слово (she · it · her · in it · him) зникає, relative word влітає, а речення пересувається до свого іменника. Третій крок показує легшу повсякденну форму; режим Commas — як кома змінює, про кого мова.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'The shared word was…', uk: 'Спільне слово було…' },
            { en: 'People', uk: 'Люди' },
            { en: 'Things', uk: 'Речі' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'the subject (she / it does …)', uk: 'підметом (she / it робить …)' },
              { en: 'who · that', uk: 'who · that' },
              { en: 'which · that', uk: 'which · that' },
              { en: 'The service that handles payments is down.', uk: 'The service that handles payments is down.' },
            ],
            [
              { en: 'the object (… hired him)', uk: 'додатком (… hired him)' },
              { en: 'who · that · ∅ (whom — formal)', uk: 'who · that · ∅ (whom — формально)' },
              { en: 'which · that · ∅', uk: 'which · that · ∅' },
              { en: 'The contractor (that) we hired is great.', uk: 'The contractor (that) we hired is great.' },
            ],
            [
              { en: 'an owner (her / its …)', uk: 'власником (her / its …)' },
              { en: 'whose', uk: 'whose' },
              { en: 'whose', uk: 'whose' },
              { en: 'We restarted the service whose logs were full of errors.', uk: 'We restarted the service whose logs were full of errors.' },
            ],
            [
              { en: 'a place (… in it)', uk: 'місцем (… in it)' },
              { en: '—', uk: '—' },
              { en: 'where · (that) … in', uk: 'where · (that) … in' },
              { en: 'This is the office where we work on Fridays.', uk: 'This is the office where we work on Fridays.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Relative pronouns · Relative clauses: defining and non-defining): that replaces who or which in defining clauses; an OBJECT relative pronoun can be left out (∅).',
            uk: 'Cambridge (Relative pronouns · Relative clauses: defining and non-defining): that замінює who чи which у defining clauses; relative pronoun у ролі ДОДАТКА можна опустити (∅).',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: «який» → which for a person', uk: 'Пастка україномовних: «який» → which для людини' },
          md: {
            en: '*«Інженерка, **яка** сидить поруч»* — Ukrainian has no person/thing split, so ✕ *The engineer **which** is sitting next to me* comes out naturally. In English, **which is only for things**. People take ✓ ***who*** or ✓ ***that***.',
            uk: '*«Інженерка, **яка** сидить поруч»* — українська не розрізняє людей і речі, тож ✕ *The engineer **which** is sitting next to me* виходить природно. В англійській **which — лише для речей**. Для людей — ✓ ***who*** або ✓ ***that***.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Delete the old word: ✕ “the PR that Anna opened it”', uk: 'Приберіть старе слово: ✕ «the PR that Anna opened it»' },
          md: {
            en: 'The relative word **replaces** the shared word — it does not join it. ✕ *I reviewed the PR that Anna opened **it** yesterday* says the PR twice. ✓ *I reviewed the PR that Anna opened yesterday.* The same goes for *him, her, them, there* — and for **what**, which is never a relative pronoun after a noun: ✕ *the bug **what** was reported* → ✓ *the bug **that / which** was reported*.',
            uk: 'Relative word **замінює** спільне слово, а не додається до нього. ✕ *I reviewed the PR that Anna opened **it** yesterday* називає PR двічі. ✓ *I reviewed the PR that Anna opened yesterday.* Те саме з *him, her, them, there* — і з **what**, яке ніколи не буває relative pronoun після іменника: ✕ *the bug **what** was reported* → ✓ *the bug **that / which** was reported*.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Subject relative — keep the pronoun', uk: 'Relative-підмет — займенник лишається' },
          b: { en: 'Object relative — you may drop it', uk: 'Relative-додаток — можна опустити' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'The contractor who fixed the roof is great.', uk: 'The contractor who fixed the roof is great.' },
              { en: 'The contractor (who) we hired is great.', uk: 'The contractor (who) we hired is great.' },
            ],
            [
              { en: 'Test', uk: 'Перевірка' },
              { en: 'a verb follows: who FIXED', uk: 'далі дієслово: who FIXED' },
              { en: 'a new subject follows: (who) WE hired', uk: 'далі новий підмет: (who) WE hired' },
            ],
            [
              { en: 'Without it', uk: 'Без нього' },
              { en: '✕ The contractor fixed the roof is great.', uk: '✕ The contractor fixed the roof is great.' },
              { en: '✓ The contractor we hired is great.', uk: '✓ The contractor we hired is great.' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**that or which for things?** In defining clauses both are correct (Cambridge). Many American style guides prefer *that* for defining clauses and keep *which* for non-defining ones, so in US docs *the service **that** handles payments* is the safe default; British English uses *which* freely in both. In speech, the shortest form wins: *the PR Anna opened*.',
            uk: '**that чи which для речей?** У defining clauses правильні обидва (Cambridge). Багато американських style guides радять *that* для defining і лишають *which* для non-defining, тож в американській документації *the service **that** handles payments* — безпечний вибір; британська англійська вільно вживає *which* в обох. У мовленні перемагає найкоротша форма: *the PR Anna opened*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: what = “the thing that”', uk: 'Дрібний шрифт: what = «the thing that»' },
          md: {
            en: '*what* does introduce clauses — but only when there is **no noun before it**, because it already contains one: ***What** I need is a staging server* = *The thing that I need…* · *That’s exactly **what** broke.* After a noun, never: ✕ *the server what I need*.',
            uk: '*what* таки вводить речення — але лише коли **перед ним немає іменника**, бо він уже містить його в собі: ***What** I need is a staging server* = *The thing that I need…* · *That’s exactly **what** broke.* Після іменника — ніколи: ✕ *the server what I need*.',
          },
        },
      ],
    },

    // ── 2. NON-DEFINING ────────────────────────────────────────────────────
    {
      id: 'non-defining',
      title: { en: 'Non-defining clauses: commas change the meaning', uk: 'Non-defining clauses: коми змінюють зміст' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A **non-defining** clause adds an extra fact about something already identified. It sits between **commas**, it **always** has a relative pronoun (who · which · whose · where — never *that*, never ∅), and you could delete it without losing track of who is meant. Ukrainian puts a comma before «який» every time, so UA speakers add English commas by reflex — but in English the comma is a **meaning switch**.',
            uk: '**Non-defining** clause додає додатковий факт про те, що вже визначено. Воно стоїть між **комами**, **завжди** має relative pronoun (who · which · whose · where — ніколи *that*, ніколи ∅), і його можна прибрати, не втративши, про кого мова. Українська ставить кому перед «який» щоразу, тож україномовні ставлять англійські коми рефлекторно, — але в англійській кома — це **перемикач змісту**.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Defining — no commas', uk: 'Defining — без ком' },
          b: { en: 'Non-defining — commas', uk: 'Non-defining — з комами' },
          rows: [
            [
              { en: 'Sentence', uk: 'Речення' },
              { en: 'The servers that run Postgres need a patch.', uk: 'The servers that run Postgres need a patch.' },
              { en: 'The servers, which run Postgres, need a patch.', uk: 'The servers, which run Postgres, need a patch.' },
            ],
            [
              { en: 'Which servers?', uk: 'Які сервери?' },
              { en: 'only the Postgres ones — the others are fine', uk: 'лише ті, що з Postgres, — інші в порядку' },
              { en: 'all of them — and, by the way, they all run Postgres', uk: 'усі — і, до речі, на всіх Postgres' },
            ],
            [
              { en: 'Pronoun', uk: 'Займенник' },
              { en: 'that / which / who; ∅ if object', uk: 'that / which / who; ∅, якщо додаток' },
              { en: 'which / who only; never that, never ∅', uk: 'лише which / who; ніколи that, ніколи ∅' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Never that after a comma', uk: 'Після коми — ніколи that' },
          md: {
            en: '✕ *The servers**, that** run Postgres, need a patch.* A non-defining clause cannot start with *that* (Cambridge; British Council). Either drop the commas (defining: *some* servers) or switch to *which* (non-defining: *all* servers) — and decide which one you mean first.',
            uk: '✕ *The servers**, that** run Postgres, need a patch.* Non-defining clause не може починатися з *that* (Cambridge; British Council). Або приберіть коми (defining: *деякі* сервери), або перейдіть на *which* (non-defining: *усі* сервери) — і спершу вирішіть, що саме ви маєте на увазі.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Use', uk: 'Вживання' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'a fact about a named person', uk: 'факт про названу людину' },
              { en: 'Olena, who leads the platform team, approved the plan.', uk: 'Olena, who leads the platform team, approved the plan.' },
            ],
            [
              { en: 'a fact about a unique thing', uk: 'факт про унікальну річ' },
              { en: 'Our CI pipeline, which runs on every push, takes eight minutes.', uk: 'Our CI pipeline, which runs on every push, takes eight minutes.' },
            ],
            [
              { en: 'whose / where also work', uk: 'whose / where теж працюють' },
              { en: 'We moved to Kyiv, where the team is based.', uk: 'We moved to Kyiv, where the team is based.' },
            ],
            [
              { en: 'which = the whole clause', uk: 'which = усе речення' },
              { en: 'The deploy failed, which delayed the release.', uk: 'The deploy failed, which delayed the release.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Relative clauses referring to a whole sentence): a clause about the whole previous clause always uses which, usually after a comma.',
            uk: 'Cambridge (Relative clauses referring to a whole sentence): речення про все попереднє речення завжди вживає which, зазвичай після коми.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«що» about a whole clause → which, not what', uk: '«що» про ціле речення → which, а не what' },
          md: {
            en: '*«Розробники лишилися допізна, **чого** ніхто не очікував»* → ✓ *The developers stayed late, **which** nobody expected.* Not ✕ *what nobody expected*, not ✕ *that nobody expected*.',
            uk: '*«Розробники лишилися допізна, **чого** ніхто не очікував»* → ✓ *The developers stayed late, **which** nobody expected.* Не ✕ *what nobody expected* і не ✕ *that nobody expected*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Hearing the commas.** In speech, a non-defining clause is marked by a small pause and a lower, flatter voice — like brackets. In technical writing, if a fact is truly a side note, brackets or a dash often read better than a long comma clause: *Our CI pipeline (eight minutes per run) blocks merges.*',
            uk: '**Як почути коми.** У мовленні non-defining clause позначають коротка пауза й нижчий, рівніший голос — як дужки. У технічному письмі, якщо факт справді побічний, дужки чи тире часто читаються краще за довге речення з комами: *Our CI pipeline (eight minutes per run) blocks merges.*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: “two of whom”, “most of which”', uk: 'Дрібний шрифт: «two of whom», «most of which»' },
          md: {
            en: 'After a quantifier, non-defining clauses use **of whom** (people) and **of which** (things): *We have five engineers, **two of whom** work remotely* · *We found 40 alerts, **most of which** were noise.* Not ✕ *two of them work remotely* inside the same sentence — that makes two sentences glued with a comma.',
            uk: 'Після квантифікатора non-defining clauses вживають **of whom** (люди) і **of which** (речі): *We have five engineers, **two of whom** work remotely* · *We found 40 alerts, **most of which** were noise.* Не ✕ *two of them work remotely* усередині того самого речення — так виходять два речення, склеєні комою.',
          },
        },
      ],
    },

    // ── 3. WHOSE · WHERE · WHOM ────────────────────────────────────────────
    {
      id: 'whose-where-whom',
      title: { en: 'whose, where, whom and prepositions', uk: 'whose, where, whom і прийменники' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Three relative words carry more than “who / which”. **whose** replaces a possessive (*her account → whose account*) and works for **people and things** (Cambridge). **where** replaces a place with its preposition (*in it → where*). **whom** is the formal object form, used mostly in writing and especially after a preposition (Cambridge).',
            uk: 'Три relative words несуть більше, ніж «who / which». **whose** замінює присвійне слово (*her account → whose account*) і працює для **людей і речей** (Cambridge). **where** замінює місце разом із прийменником (*in it → where*). **whom** — формальна форма додатка, переважно на письмі й особливо після прийменника (Cambridge).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Weld', uk: 'Зварювання' },
            { en: 'Everyday', uk: 'Повсякденно' },
            { en: 'Formal', uk: 'Формально' },
          ],
          rows: [
            [
              { en: 'the client · I talked to him', uk: 'the client · I talked to him' },
              { en: 'the client (that) I talked to', uk: 'the client (that) I talked to' },
              { en: 'the client to whom I talked', uk: 'the client to whom I talked' },
            ],
            [
              { en: 'the budget · we agreed on it', uk: 'the budget · we agreed on it' },
              { en: 'the budget (that) we agreed on', uk: 'the budget (that) we agreed on' },
              { en: 'the budget on which we agreed', uk: 'the budget on which we agreed' },
            ],
            [
              { en: 'the city · I grew up in it', uk: 'the city · I grew up in it' },
              { en: 'the city where I grew up · the city I grew up in', uk: 'the city where I grew up · the city I grew up in' },
              { en: 'the city in which I grew up', uk: 'the city in which I grew up' },
            ],
            [
              { en: 'the service · its logs were full', uk: 'the service · its logs were full' },
              { en: 'the service whose logs were full', uk: 'the service whose logs were full' },
              { en: 'the service the logs of which were full', uk: 'the service the logs of which were full' },
            ],
          ],
          caption: {
            en: 'British Council (Relative pronouns and relative clauses): with that — or with no pronoun — the preposition goes to the end; only whom and which can follow a preposition.',
            uk: 'British Council (Relative pronouns and relative clauses): із that — або без займенника — прийменник іде в кінець; після прийменника можуть стояти лише whom і which.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'whose ≠ who’s · where already has its “in”', uk: 'whose ≠ who’s · where уже містить своє «in»' },
          md: {
            en: '✕ *the client **who’s** account was locked* — *who’s* = who is / who has; possession is ✓ ***whose***. And ✕ *the office **where** we work **in*** says *in* twice: ✓ *the office where we work* or ✓ *the office (that) we work in*. The opposite slip drops a needed preposition: ✕ *the city **which** I grew up* → ✓ *the city which I grew up **in***.',
            uk: '✕ *the client **who’s** account was locked* — *who’s* = who is / who has; приналежність — ✓ ***whose***. А ✕ *the office **where** we work **in*** каже *in* двічі: ✓ *the office where we work* або ✓ *the office (that) we work in*. Протилежна помилка губить потрібний прийменник: ✕ *the city **which** I grew up* → ✓ *the city which I grew up **in***.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'whose for things is normal', uk: 'whose для речей — це нормально' },
          md: {
            en: 'Ukrainian «логи **якого**» pushes toward ✕ *the service **which** logs*. English uses ✓ ***whose*** for things without any problem: *a library **whose** API changed*, *a ticket **whose** owner left*. *the logs of which* exists but sounds stiff outside formal writing.',
            uk: 'Українське «логи **якого**» штовхає до ✕ *the service **which** logs*. Англійська без проблем вживає ✓ ***whose*** для речей: *a library **whose** API changed*, *a ticket **whose** owner left*. *the logs of which* існує, але звучить скуто поза формальним письмом.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**when and why.** Time and reason nouns have their own relative words, and both are often dropped: *the day **(when)** we shipped v2* · *the reason **(why)** the build failed* — or replaced by that: *the reason that the build failed*. Avoid stacking: ✕ *the reason why is because…* → ✓ *the reason is that…*.',
            uk: '**when і why.** Іменники часу й причини мають власні relative words, і обидва часто опускають: *the day **(when)** we shipped v2* · *the reason **(why)** the build failed* — або замінюють на that: *the reason that the build failed*. Не нагромаджуйте: ✕ *the reason why is because…* → ✓ *the reason is that…*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: who as an object', uk: 'Дрібний шрифт: who як додаток' },
          md: {
            en: 'In everyday English *who* is normal as an object — *the contractor **who** we hired* — and *whom* there sounds formal (Cambridge: whom is much more common in writing than in speech). What stays fixed is the preposition rule: right after a preposition only ***whom*** works — ✓ *to whom*, ✕ *to who*.',
            uk: 'У повсякденній англійській *who* — нормальний додаток: *the contractor **who** we hired*, — а *whom* там звучить формально (Cambridge: whom набагато частіше трапляється на письмі, ніж у мовленні). Незмінне лише правило прийменника: одразу після прийменника працює тільки ***whom*** — ✓ *to whom*, ✕ *to who*.',
          },
        },
      ],
    },

    // ── 4. REDUCED CLAUSES ────────────────────────────────────────────────
    {
      id: 'reduced-clauses',
      title: { en: 'Reduced clauses: the bug reported yesterday', uk: 'Скорочені речення: the bug reported yesterday' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'When a subject relative is followed by **be**, both can drop out and the clause shrinks to a participle: *the engineer **who is sitting** next to me* → *the engineer **sitting** next to me* · *the bug **which was reported** yesterday* → *the bug **reported** yesterday* (Cambridge calls these non-finite relative clauses). -ing keeps an active meaning, V3 a passive one. This is everywhere in documentation and tickets — and it is exactly where participle clauses (m26) begin.',
            uk: 'Коли за relative-підметом іде **be**, обидва можуть випасти, і речення стискається до participle: *the engineer **who is sitting** next to me* → *the engineer **sitting** next to me* · *the bug **which was reported** yesterday* → *the bug **reported** yesterday* (Cambridge називає їх non-finite relative clauses). -ing зберігає активне значення, V3 — пасивне. Це скрізь у документації й тікетах — і саме звідси починаються participle clauses (m26).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Full clause', uk: 'Повне речення' },
            { en: 'Reduced', uk: 'Скорочене' },
            { en: 'Meaning', uk: 'Значення' },
          ],
          rows: [
            [
              { en: 'the tests that are running now', uk: 'the tests that are running now' },
              { en: 'the tests running now', uk: 'the tests running now' },
              { en: 'active, in progress → -ing', uk: 'активне, триває → -ing' },
            ],
            [
              { en: 'requests which exceed the limit', uk: 'requests which exceed the limit' },
              { en: 'requests exceeding the limit', uk: 'requests exceeding the limit' },
              { en: 'active, a general rule → -ing', uk: 'активне, загальне правило → -ing' },
            ],
            [
              { en: 'the bug which was reported yesterday', uk: 'the bug which was reported yesterday' },
              { en: 'the bug reported yesterday', uk: 'the bug reported yesterday' },
              { en: 'passive → V3', uk: 'пасивне → V3' },
            ],
            [
              { en: 'the first person who noticed it', uk: 'the first person who noticed it' },
              { en: 'the first person to notice it', uk: 'the first person to notice it' },
              { en: 'after first / last / only → to + V1', uk: 'після first / last / only → to + V1' },
            ],
          ],
          caption: {
            en: 'Cambridge (Relative clauses — non-finite): The man sitting on the sofa over there is Simon’s brother (= The man who is sitting …).',
            uk: 'Cambridge (Relative clauses — non-finite): The man sitting on the sofa over there is Simon’s brother (= The man who is sitting …).',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Only SUBJECT relatives reduce this way', uk: 'Так скорочуються лише relative-ПІДМЕТИ' },
          md: {
            en: 'Reduction removes *who/which/that + be*. An object relative has no such pair to remove — it simply drops its pronoun (*the PR (that) Anna opened*). ✕ *the PR Anna opening* is not a shorter form of anything.',
            uk: 'Скорочення прибирає *who/which/that + be*. У relative-додатка такої пари немає — він просто опускає займенник (*the PR (that) Anna opened*). ✕ *the PR Anna opening* не є скороченою формою нічого.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'The docs voice: “Requests exceeding the limit are rejected.”', uk: 'Голос документації: «Requests exceeding the limit are rejected.»' },
          md: {
            en: 'API docs and specs love reduced clauses because they pack a condition into a noun phrase: *Tokens **issued before March 1** must be rotated* · *Fields **marked as optional** can be omitted* · *Jobs **running longer than 1 h** are killed.* Read them as “the ones that…”.',
            uk: 'API-документація і специфікації люблять скорочені речення, бо вони пакують умову в іменникову групу: *Tokens **issued before March 1** must be rotated* · *Fields **marked as optional** can be omitted* · *Jobs **running longer than 1 h** are killed.* Читайте їх як «ті, що…».',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Not for one finished action.** An -ing reduction describes something ongoing or general: *people **living** near the office* (= who live). It does not work for a single completed past action: ✕ *the engineer **fixing** the bug yesterday* → ✓ *the engineer **who fixed** the bug yesterday*.',
            uk: '**Не для однієї завершеної дії.** Скорочення з -ing описує щось тривале або загальне: *people **living** near the office* (= who live). Для однієї завершеної дії в минулому воно не працює: ✕ *the engineer **fixing** the bug yesterday* → ✓ *the engineer **who fixed** the bug yesterday*.',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: '**Fine print: reduced non-defining clauses.** With commas, a reduced clause becomes a participle clause about the subject: *The release, **delayed by two weeks**, finally shipped on Friday.* From here on the rules of m26 apply — including the dangling-participle check.',
            uk: '**Дрібний шрифт: скорочені non-defining clauses.** З комами скорочене речення стає participle clause про підмет: *The release, **delayed by two weeks**, finally shipped on Friday.* Далі діють правила m26 — зокрема перевірка на dangling participle.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A relative clause = a second sentence welded in: the shared word is REPLACED by a relative word and never repeated (✕ the PR that Anna opened it).',
      uk: 'Relative clause = друге речення, вварене в перше: спільне слово ЗАМІНЮЄТЬСЯ relative word і ніколи не повторюється (✕ the PR that Anna opened it).',
    },
    {
      en: 'who / that for people · which / that for things · whose for owners (people AND things) · where for places · whom after a preposition.',
      uk: 'who / that — люди · which / that — речі · whose — власник (люди І речі) · where — місця · whom — після прийменника.',
    },
    {
      en: 'An object relative pronoun can be dropped in a defining clause: the contractor (who) we hired.',
      uk: 'Relative pronoun-додаток можна опустити в defining clause: the contractor (who) we hired.',
    },
    {
      en: 'Commas are a meaning switch: no commas = which ones (some); commas = an extra fact (all). After a comma: never that, never ∅.',
      uk: 'Коми — перемикач змісту: без ком — які саме (деякі); з комами — додатковий факт (усі). Після коми: ніколи that, ніколи ∅.',
    },
    {
      en: 'which can refer to a whole clause: The deploy failed, which delayed the release — never what.',
      uk: 'which може стосуватися всього речення: The deploy failed, which delayed the release — ніколи what.',
    },
    {
      en: 'Subject relative + be reduces to a participle: the tests (that are) running · the bug (which was) reported.',
      uk: 'Relative-підмет + be скорочується до participle: the tests (that are) running · the bug (which was) reported.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“The engineer which…”', uk: '«The engineer which…»' },
      body: { en: 'which is for things only; people take who or that.', uk: 'which — лише для речей; для людей — who або that.' },
    },
    {
      title: { en: '“the PR that Anna opened it”', uk: '«the PR that Anna opened it»' },
      body: { en: 'The relative word replaces the shared word — delete it, him, her, there.', uk: 'Relative word замінює спільне слово — приберіть it, him, her, there.' },
    },
    {
      title: { en: '“the bug what was reported”', uk: '«the bug what was reported»' },
      body: { en: 'what is never a relative pronoun after a noun: which or that.', uk: 'what ніколи не буває relative pronoun після іменника: which або that.' },
    },
    {
      title: { en: 'Commas by Ukrainian habit', uk: 'Коми за українською звичкою' },
      body: {
        en: 'In English, commas mean “all of them, plus a fact”. The servers, which run Postgres ≠ The servers that run Postgres.',
        uk: 'В англійській коми означають «усі, плюс факт». The servers, which run Postgres ≠ The servers that run Postgres.',
      },
    },
    {
      title: { en: '“…, that run Postgres, …”', uk: '«…, that run Postgres, …»' },
      body: { en: 'Non-defining clauses never start with that.', uk: 'Non-defining clauses ніколи не починаються з that.' },
    },
    {
      title: { en: '“who’s account” · “the service which logs”', uk: '«who’s account» · «the service which logs»' },
      body: { en: 'Possession is whose — for people and for things.', uk: 'Приналежність — це whose, і для людей, і для речей.' },
    },
    {
      title: { en: '“where we work in” · “to that I talked”', uk: '«where we work in» · «to that I talked»' },
      body: {
        en: 'where already contains the preposition; that never follows one — use the client (that) I talked to or to whom I talked.',
        uk: 'where уже містить прийменник; that ніколи не стоїть після нього — the client (that) I talked to або to whom I talked.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-relative-clauses-1',
      kind: 'gap',
      sentence: 'The engineer ___ fixed the outage joined the team last week.',
      answers: ['who', 'that'],
      hint: { en: 'a person, the subject', uk: 'людина, підмет' },
      explain: { en: 'A person as the subject of the clause → who (or that).', uk: 'Людина — підмет речення → who (або that).' },
      level: 'b2',
      tags: ['relative-clauses', 'defining'],
    },
    {
      id: 'ex-relative-clauses-2',
      kind: 'mcq',
      prompt: { en: 'The service ___ handles payments is down.', uk: 'Сервіс, який обробляє платежі, не працює.' },
      options: ['who', 'which', 'what'],
      correct: 1,
      explain: {
        en: 'A thing → which (or that). who is for people; what is never a relative after a noun.',
        uk: 'Річ → which (або that). who — для людей; what ніколи не буває relative після іменника.',
      },
      level: 'b2',
      tags: ['relative-clauses', 'ua-trap'],
    },
    {
      id: 'ex-relative-clauses-3',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: [
        'I reviewed the PR that Anna opened it yesterday.',
        'I reviewed the PR that Anna opened yesterday.',
        'I reviewed the PR what Anna opened yesterday.',
      ],
      correct: 1,
      explain: {
        en: 'that replaces it — keeping it says the PR twice; what cannot follow a noun.',
        uk: 'that замінює it — якщо лишити it, PR названо двічі; what не може стояти після іменника.',
      },
      level: 'b2',
      tags: ['relative-clauses', 'ua-trap'],
    },
    {
      id: 'ex-relative-clauses-4',
      kind: 'gap',
      sentence: 'We called the client ___ account was locked.',
      answers: ['whose'],
      hint: { en: 'her account → ?', uk: 'her account → ?' },
      explain: { en: 'A possessive (her) becomes whose. Not who’s (= who is).', uk: 'Присвійне (her) стає whose. Не who’s (= who is).' },
      level: 'b2',
      tags: ['relative-clauses', 'whose'],
    },
    {
      id: 'ex-relative-clauses-5',
      kind: 'mcq',
      prompt: { en: 'In which sentence can you leave out who?', uk: 'У якому реченні можна опустити who?' },
      options: [
        'The contractor who we hired last month is great.',
        'The contractor who fixed the roof is great.',
        'Olena, who leads the platform team, approved it.',
      ],
      correct: 0,
      explain: {
        en: 'Only an OBJECT relative in a defining clause can go (a new subject, we, follows). The second is a subject; the third is non-defining.',
        uk: 'Опустити можна лише relative-ДОДАТОК у defining clause (далі новий підмет we). У другому — підмет; третє — non-defining.',
      },
      level: 'b2',
      tags: ['relative-clauses', 'defining'],
    },
    {
      id: 'ex-relative-clauses-6',
      kind: 'mcq',
      prompt: { en: 'Our CI pipeline, ___ runs on every push, takes eight minutes.', uk: 'Наш CI-пайплайн, який запускається на кожен push, триває вісім хвилин.' },
      options: ['that', 'which', 'what'],
      correct: 1,
      explain: { en: 'Between commas (non-defining) → which. Never that after a comma.', uk: 'Між комами (non-defining) → which. Після коми ніколи не that.' },
      level: 'b2',
      tags: ['relative-clauses', 'non-defining'],
    },
    {
      id: 'ex-relative-clauses-7',
      kind: 'mcq',
      prompt: {
        en: '“The servers that run Postgres need a patch.” — Which servers need a patch?',
        uk: '«The servers that run Postgres need a patch.» — Яким серверам потрібен патч?',
      },
      options: ['All of our servers.', 'Only the servers that run Postgres.', 'None of them.'],
      correct: 1,
      explain: { en: 'No commas = defining: the clause picks out SOME servers.', uk: 'Без ком = defining: речення вибирає ДЕЯКІ сервери.' },
      level: 'b2',
      tags: ['relative-clauses', 'defining', 'meaning'],
    },
    {
      id: 'ex-relative-clauses-8',
      kind: 'mcq',
      prompt: {
        en: '“The developers, who knew about the bug, stayed late.” — What does it say?',
        uk: '«The developers, who knew about the bug, stayed late.» — Що це означає?',
      },
      options: [
        'Only some developers knew about the bug.',
        'All the developers stayed late — and all of them knew about the bug.',
        'Nobody knew about the bug.',
      ],
      correct: 1,
      explain: { en: 'Commas = non-defining: an extra fact about ALL of them.', uk: 'Коми = non-defining: додатковий факт про ВСІХ.' },
      level: 'b2',
      tags: ['relative-clauses', 'non-defining', 'meaning'],
    },
    {
      id: 'ex-relative-clauses-9',
      kind: 'gap',
      sentence: 'The deploy failed, ___ delayed the release by a day.',
      answers: ['which'],
      hint: { en: 'refers to the whole clause', uk: 'стосується всього речення' },
      explain: { en: 'A comment on the whole previous clause → always which (Cambridge).', uk: 'Коментар до всього попереднього речення → завжди which (Cambridge).' },
      level: 'b2',
      tags: ['relative-clauses', 'non-defining'],
    },
    {
      id: 'ex-relative-clauses-10',
      kind: 'gap',
      sentence: 'This is the office ___ we work on Fridays.',
      answers: ['where', 'in which'],
      hint: { en: 'a place: … in it', uk: 'місце: … in it' },
      explain: { en: 'where replaces “in it”; so does the formal in which.', uk: 'where замінює «in it»; так само формальне in which.' },
      level: 'b2',
      tags: ['relative-clauses', 'where'],
    },
    {
      id: 'ex-relative-clauses-11',
      kind: 'mcq',
      prompt: { en: 'Lviv is the city ___.', uk: 'Львів — місто, у якому я виріс.' },
      options: ['where I grew up in', 'I grew up in', 'which I grew up'],
      correct: 1,
      explain: {
        en: 'Zero pronoun + the preposition at the end. where already includes in; which needs its in.',
        uk: 'Без займенника + прийменник у кінці. where уже містить in; which потребує свого in.',
      },
      level: 'b2',
      tags: ['relative-clauses', 'prepositions'],
    },
    {
      id: 'ex-relative-clauses-12',
      kind: 'mcq',
      prompt: { en: 'This is the client to ___ I spoke yesterday.', uk: 'Це клієнт, з яким я вчора говорив.' },
      options: ['who', 'whom', 'that'],
      correct: 1,
      explain: { en: 'Right after a preposition only whom (people) or which (things).', uk: 'Одразу після прийменника — лише whom (люди) або which (речі).' },
      level: 'b2',
      tags: ['relative-clauses', 'prepositions', 'formal'],
    },
    {
      id: 'ex-relative-clauses-13',
      kind: 'mcq',
      prompt: { en: 'The tests ___ now will finish in five minutes.', uk: 'Тести, що зараз виконуються, завершаться за пʼять хвилин.' },
      options: ['running', 'are running', 'that running'],
      correct: 0,
      explain: { en: 'that are running → running: the relative and be drop together.', uk: 'that are running → running: relative і be випадають разом.' },
      level: 'b2',
      tags: ['relative-clauses', 'reduced'],
    },
    {
      id: 'ex-relative-clauses-14',
      kind: 'gap',
      sentence: 'The bug ___ (report) yesterday crashes the app on login.',
      answers: ['reported', 'that was reported', 'which was reported'],
      hint: { en: 'reduced, passive', uk: 'скорочене, passive' },
      explain: { en: 'which was reported → reported (V3, passive meaning).', uk: 'which was reported → reported (V3, пасивне значення).' },
      level: 'b2',
      tags: ['relative-clauses', 'reduced', 'passive'],
    },
    {
      id: 'ex-relative-clauses-15',
      kind: 'mcq',
      prompt: { en: 'We have five engineers, two of ___ work remotely.', uk: 'У нас пʼятеро інженерів, двоє з яких працюють віддалено.' },
      options: ['them', 'whom', 'who'],
      correct: 1,
      explain: {
        en: 'Quantifier + of whom (people) / of which (things). of them would glue two sentences with a comma.',
        uk: 'Квантифікатор + of whom (люди) / of which (речі). of them склеїло б два речення комою.',
      },
      level: 'c1',
      tags: ['relative-clauses', 'non-defining', 'formal'],
    },
    {
      id: 'ex-relative-clauses-16',
      kind: 'mcq',
      prompt: { en: 'Which line fits API documentation best?', uk: 'Який рядок найкраще пасує для API-документації?' },
      options: [
        'Requests exceeding the rate limit are rejected.',
        'Requests what exceed the rate limit are rejected.',
        'Requests, that exceed the rate limit, are rejected.',
      ],
      correct: 0,
      explain: {
        en: 'A reduced defining clause (= requests that exceed). what is not a relative; that never follows a comma.',
        uk: 'Скорочене defining clause (= requests that exceed). what не relative; that ніколи не стоїть після коми.',
      },
      level: 'b2',
      tags: ['relative-clauses', 'reduced', 'register'],
    },
  ],
  seeAlso: ['m26-participle-clauses', 'm24-passive-advanced', 'm14-passive-intro', 'm16-gerund-infinitive', 'm30-linking-discourse'],
  sources: [
    {
      title: 'Cambridge Dictionary — Relative clauses: defining and non-defining',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses-defining-and-non-defining',
    },
    {
      title: 'Cambridge Dictionary — Relative pronouns',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/relative-pronouns',
    },
    {
      title: 'Cambridge Dictionary — Relative clauses (incl. non-finite relative clauses)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses_2',
    },
    {
      title: 'Cambridge Dictionary — Whose',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/whose',
    },
    {
      title: 'Cambridge Dictionary — Who, whom',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/who-whom',
    },
    {
      title: 'Cambridge Dictionary — Relative clauses referring to a whole sentence',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses-referring-to-a-whole-sentence',
    },
    {
      title: 'British Council LearnEnglish — Relative pronouns and relative clauses',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses',
    },
    {
      title: 'British Council LearnEnglish — Defining relative clauses (B1–B2)',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/relative-clauses-defining-relative-clauses',
    },
    {
      title: 'British Council LearnEnglish — Non-defining relative clauses (B1–B2)',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/relative-clauses-non-defining-relative-clauses',
    },
  ],
};
