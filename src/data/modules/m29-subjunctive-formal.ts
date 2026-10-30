import type { Module } from '../types';

/*
 * CHANGED (A4): M29 · Subjunctive & formal English — Section V Advanced Grammar, wave A4 (★ register-dial,
 * TokenMorph family). Authored EN first, UA second; grammar terms stay English in both languages; US
 * English base with BrE noted where it really differs (the mandative subjunctive). Facts verified
 * against Cambridge (Formal and informal language — formality follows the situation and the
 * relationship; formal vocabulary leans on longer Latin/Greek words, informal on shorter Anglo-Saxon
 * ones: commence vs start; contractions, dropped relative pronouns and ellipsis mark informal language ·
 * Contractions — usually not appropriate in formal writing · Phrasal verbs and multi-word verbs — often,
 * not always, less formal than a one-word equivalent: sort out vs solve · Register · Suggest — should
 * in the that-clause) and British Council C1 (Inversion and conditionals — Should you have any
 * questions… · Were they to sell… · inversion makes the sentence more formal). The AmE / BrE split of
 * the mandative subjunctive (base form standard in AmE, should + base more common in BrE, indicative in
 * informal BrE) is documented in corpus studies (e.g. Crawford 2009, “The mandative subjunctive”, in
 * One Language, Two Grammars?, CUP); Cambridge's learner pages were NOT readable (HTTP 403) and the
 * British Council has no subjunctive page, so that claim and the fixed formulas (if need be · be that
 * as it may · come what may · suffice it to say) are stated without a learner-site attribution.
 * Spine: register is a set of MARKERS you can count, in words (find out → ascertain) and in structures
 * (subjunctive · conditional inversion · passive · nominalisation).
 * No overlap: linker CLASSES and spoken discourse markers live in m30 (here: only the register of a
 * word); wishes and if I were live in m23 (here: were only as a formal-register signal); the passive's
 * register effect lives in m24 (here: counted, not taught again).
 */
export const m29: Module = {
  id: 'm29-subjunctive-formal',
  num: 29,
  section: 's4-advanced-grammar',
  order: 7,
  level: 'c1',
  title: { en: 'Subjunctive & formal English', uk: 'Subjunctive і формальна англійська' },
  tagline: {
    en: 'It is essential that the vendor be notified · Should you require… · prior to · hereby — the grammar and the words that make English formal, and how to dial the register up or down without mixing it.',
    uk: 'It is essential that the vendor be notified · Should you require… · prior to · hereby — граматика й слова, що роблять англійську формальною, і як підкрутити регістр угору чи вниз, не змішуючи його.',
  },
  readMins: 22,
  mentalModel: {
    en: '**Register** is how formal a text is, and it is not a vibe: it is a set of **markers** you can point at. Casual markers: contractions (*we’re*), phrasal verbs (*find out*), chatty words (*hey, stuff, gonna*), *So / And* at the start. Formal markers come in two layers. **Words:** longer, usually Latin-based (*require, regarding, prior to, commence*), and in legal text, official ones (*hereby, pursuant to*). **Structures:** the **mandative subjunctive** (*It is essential that the vendor **be** notified*: a bare base form for every person), **conditional inversion** (***Should you** require…*), the passive and nominalisations. Good writing picks **one** level for its reader (chat · email · report · official) and stays there. The classic failure is not “too informal” but **mixed**: *Pursuant to the review, we’re gonna roll it back.*',
    uk: '**Регістр** — це міра формальності тексту, і це не відчуття, а набір **маркерів**, на які можна вказати. Розмовні маркери: скорочення (*we’re*), phrasal verbs (*find out*), балакучі слова (*hey, stuff, gonna*), *So / And* на початку. Формальні маркери мають два шари. **Слова:** довші, здебільшого латинського походження (*require, regarding, prior to, commence*), а в юридичних текстах — офіційні (*hereby, pursuant to*). **Конструкції:** **mandative subjunctive** (*It is essential that the vendor **be** notified*: гола базова форма для будь-якої особи), **умовна інверсія** (***Should you** require…*), passive і номіналізації. Добрий текст обирає **один** рівень для свого читача (чат · лист · звіт · офіційний документ) і тримається його. Класична невдача — не «надто неформально», а **змішано**: *Pursuant to the review, we’re gonna roll it back.*',
  },
  topics: [
    // ── 1. MANDATIVE SUBJUNCTIVE ───────────────────────────────────────────
    {
      id: 'mandative-subjunctive',
      title: { en: 'The mandative subjunctive: that the vendor be notified', uk: 'Mandative subjunctive: that the vendor be notified' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'After verbs and adjectives of **necessity, demand or proposal** (*recommend, insist, request, require, demand, suggest, propose · essential, vital, important, crucial, imperative*) followed by **that**, formal English uses the **bare base form** of the verb for every person: no *-s*, no tense, no *do*. *We recommend that she **review** the logs.* · *It is essential that the vendor **be** notified.* It sounds official and precise; you will meet it in policies, contracts, RFCs and formal recommendations.',
            uk: 'Після дієслів і прикметників **необхідності, вимоги чи пропозиції** (*recommend, insist, request, require, demand, suggest, propose · essential, vital, important, crucial, imperative*), за якими йде **that**, формальна англійська вживає **голу базову форму** дієслова для будь-якої особи: без *-s*, без часу, без *do*. *We recommend that she **review** the logs.* · *It is essential that the vendor **be** notified.* Це звучить офіційно й точно; таке трапляється в політиках, контрактах, RFC і формальних рекомендаціях.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'Example', uk: 'Приклад' },
            { en: 'Where', uk: 'Де' },
          ],
          rows: [
            [
              { en: 'subjunctive: base form', uk: 'subjunctive: базова форма' },
              { en: 'We recommend that she review the logs before Friday.', uk: 'We recommend that she review the logs before Friday.' },
              { en: 'AmE: the formal standard', uk: 'AmE: формальний стандарт' },
            ],
            [
              { en: 'passive subjunctive: be + V3', uk: 'passive subjunctive: be + V3' },
              { en: 'It is essential that the vendor be notified.', uk: 'It is essential that the vendor be notified.' },
              { en: 'AmE and formal BrE', uk: 'AmE і формальна BrE' },
            ],
            [
              { en: 'negative: not + base', uk: 'заперечення: not + базова' },
              { en: 'It is important that the key not be shared.', uk: 'It is important that the key not be shared.' },
              { en: 'formal; no do', uk: 'формально; без do' },
            ],
            [
              { en: 'should + base', uk: 'should + базова' },
              { en: 'We recommend that she should review the logs.', uk: 'We recommend that she should review the logs.' },
              { en: 'BrE: more common than the subjunctive', uk: 'BrE: поширеніше за subjunctive' },
            ],
            [
              { en: 'ordinary present', uk: 'звичайний теперішній' },
              { en: 'We recommend that she reviews the logs.', uk: 'We recommend that she reviews the logs.' },
              { en: 'informal BrE; avoid in formal AmE', uk: 'неформальна BrE; у формальній AmE уникайте' },
            ],
          ],
          caption: {
            en: 'The AmE / BrE split: the base form is the formal standard in American English; British English more often uses should (Cambridge, Suggest: should in the that-clause).',
            uk: 'Розходження AmE / BrE: базова форма — формальний стандарт в американській англійській; британська частіше вживає should (Cambridge, Suggest: should у that-клаузі).',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«щоб постачальника повідомили» → that the vendor is notified ✕ (AmE formal)', uk: '«щоб постачальника повідомили» → that the vendor is notified ✕ (формальна AmE)' },
          md: {
            en: 'Ukrainian marks this kind of clause with «щоб» + a past form, so English learners grab an ordinary tense: ✕ *It is essential that the vendor **is** notified* · ✕ *We insisted that he **reviewed** it.* In formal American English, use the bare base: ✓ *…that the vendor **be** notified* · ✓ *…that he **review** it.* British readers also accept ✓ *…that he **should** review it.* The tense of the main verb never changes the base form: *We **insisted** that he **review** it.*',
            uk: 'Українська позначає таку клаузу через «щоб» + форму минулого часу, тож учні хапаються за звичайний час: ✕ *It is essential that the vendor **is** notified* · ✕ *We insisted that he **reviewed** it.* У формальній американській англійській уживайте голу базову форму: ✓ *…that the vendor **be** notified* · ✓ *…that he **review** it.* Британські читачі приймають і ✓ *…that he **should** review it.* Час головного дієслова ніколи не змінює базову форму: *We **insisted** that he **review** it.*',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“suggest him to review” — no infinitive after suggest', uk: '«suggest him to review» — після suggest без інфінітива' },
          md: {
            en: 'Ukrainian «запропонувати йому переглянути» pushes learners toward ✕ *We suggest **him to** review it.* *suggest, recommend, insist* do not take object + to-infinitive. Use a that-clause (✓ *We suggest **that he review** it*) or -ing (✓ *We suggest **reviewing** it*).',
            uk: 'Українське «запропонувати йому переглянути» штовхає до ✕ *We suggest **him to** review it.* *suggest, recommend, insist* не беруть додаток + to-інфінітив. Уживайте that-клаузу (✓ *We suggest **that he review** it*) або -ing (✓ *We suggest **reviewing** it*).',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Why it is useful at work', uk: 'Чим це корисне на роботі' },
          md: {
            en: 'The subjunctive states a **requirement**, not a fact: *We require that every PR **be** reviewed by two engineers* is a rule; *…every PR **is** reviewed…* could be read as a description of what already happens. That precision is why policies and RFCs keep it.',
            uk: 'Subjunctive формулює **вимогу**, а не факт: *We require that every PR **be** reviewed by two engineers* — це правило; *…every PR **is** reviewed…* можна прочитати як опис того, що вже відбувається. Через цю точність його й тримають політики та RFC.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Only the third person and be show it.** With *I, you, we, they*, the base form looks like the present (*We recommend that they **review** it*), so the subjunctive is visible only with *he / she / it* or a singular noun (*review*, not *reviews*), with *be*, and in the negative (*not review*, not *don’t review*). That is also why the Register Dial counts a subjunctive only where the form is unambiguous.',
            uk: '**Видно лише в третій особі та з be.** З *I, you, we, they* базова форма збігається з теперішнім часом (*We recommend that they **review** it*), тож subjunctive видно лише з *he / she / it* чи іменником в однині (*review*, а не *reviews*), з *be* і в запереченні (*not review*, а не *don’t review*). Тому й Register Dial рахує subjunctive лише там, де форма однозначна.',
          },
        },
      ],
    },

    // ── 2. WERE-SUBJUNCTIVE (FORMAL REGISTER) ──────────────────────────────
    {
      id: 'were-subjunctive',
      title: { en: 'Formal were and fixed subjunctive phrases', uk: 'Формальне were і сталі фрази з subjunctive' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The other subjunctive, ***were** for every person*, is covered with wishes and *if I were you* in m23. Here it matters as a **register signal**: the same unreal meaning sounds formal with *were* and everyday with *was*. *He talks about the project as if he **were** the CEO* (formal, careful writing) · *…as if he **was** the CEO* (normal in speech). Both are correct; the choice tells the reader which register you are in.',
            uk: 'Інше subjunctive, ***were** для будь-якої особи*, розібрано разом із бажаннями та *if I were you* у m23. Тут воно важливе як **сигнал регістру**: той самий нереальний зміст звучить формально з *were* і повсякденно з *was*. *He talks about the project as if he **were** the CEO* (формально, ретельне письмо) · *…as if he **was** the CEO* (нормально в мовленні). Обидва варіанти правильні; вибір підказує читачеві, в якому ви регістрі.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Formal', uk: 'Формально' },
            { en: 'Everyday equivalent', uk: 'Повсякденний відповідник' },
          ],
          rows: [
            [
              { en: 'He acts as if he were in charge.', uk: 'He acts as if he were in charge.' },
              { en: 'He acts like he’s in charge.', uk: 'He acts like he’s in charge.' },
            ],
            [
              { en: 'Were it not for the backup, we would have lost the data.', uk: 'Were it not for the backup, we would have lost the data.' },
              { en: 'If we hadn’t had the backup, we’d have lost the data.', uk: 'If we hadn’t had the backup, we’d have lost the data.' },
            ],
            [
              { en: 'Were the vendor to withdraw, the project would stall.', uk: 'Were the vendor to withdraw, the project would stall.' },
              { en: 'If the vendor pulled out, the project would stall.', uk: 'If the vendor pulled out, the project would stall.' },
            ],
            [
              { en: 'Should you require further information, please contact us.', uk: 'Should you require further information, please contact us.' },
              { en: 'If you need more info, let us know.', uk: 'If you need more info, let us know.' },
            ],
          ],
          caption: {
            en: 'British Council C1 (Inversion and conditionals): dropping if and inverting makes the sentence more formal — Should you have any questions… · Were they to sell their house… (full conditional rules: m23).',
            uk: 'British Council C1 (Inversion and conditionals): якщо прибрати if та інвертувати, речення стає формальнішим — Should you have any questions… · Were they to sell their house… (повні правила умовних речень: m23).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Fixed phrase', uk: 'Стала фраза' },
            { en: 'Means', uk: 'Означає' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'if need be', uk: 'if need be' },
              { en: 'if necessary', uk: 'якщо буде потрібно' },
              { en: 'We can roll back, if need be.', uk: 'We can roll back, if need be.' },
            ],
            [
              { en: 'be that as it may', uk: 'be that as it may' },
              { en: 'even if that is true', uk: 'хай там як' },
              { en: 'Be that as it may, the deadline stands.', uk: 'Be that as it may, the deadline stands.' },
            ],
            [
              { en: 'come what may', uk: 'come what may' },
              { en: 'whatever happens', uk: 'що б не сталося' },
              { en: 'Come what may, we ship on the 1st.', uk: 'Come what may, we ship on the 1st.' },
            ],
            [
              { en: 'suffice it to say', uk: 'suffice it to say' },
              { en: 'I will only say that', uk: 'достатньо сказати' },
              { en: 'Suffice it to say, the migration did not go as planned.', uk: 'Suffice it to say, the migration did not go as planned.' },
            ],
            [
              { en: 'so be it', uk: 'so be it' },
              { en: 'I accept it, even if I don’t like it', uk: 'хай так і буде' },
              { en: 'If the client wants a later date, so be it.', uk: 'If the client wants a later date, so be it.' },
            ],
          ],
          caption: {
            en: 'Frozen subjunctive forms: learn them as whole phrases; the pattern is not productive.',
            uk: 'Застиглі форми subjunctive: учіть їх цілими фразами; продуктивним цей патерн не є.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“Was it not for…” · “If need to be” ✕', uk: '«Was it not for…» · «If need to be» ✕' },
          md: {
            en: 'The inverted and frozen forms do not take ordinary grammar. ✕ *Was it not for the backup…* → ✓ ***Were** it not for the backup…* (*were* for every person). ✕ *if need to be / if needed be* → ✓ ***if need be*** (BrE also *if needs be*).',
            uk: 'Інвертовані й застиглі форми не підкоряються звичайній граматиці. ✕ *Was it not for the backup…* → ✓ ***Were** it not for the backup…* (*were* для будь-якої особи). ✕ *if need to be / if needed be* → ✓ ***if need be*** (BrE також *if needs be*).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: was vs were in speech', uk: 'Дрібний шрифт: was vs were у мовленні' },
          md: {
            en: 'In speech and informal writing, *was* is common for unreal meanings (*If I was you…*, *as if it was easy*). Do not “correct” it in a teammate’s Slack message. In a proposal, a contract or anything read by a careful reader, *were* is the safe choice. Fixed phrases (*Were it not for…*, *as it were*) never take *was*.',
            uk: 'У мовленні й неформальному письмі *was* поширене для нереального змісту (*If I was you…*, *as if it was easy*). Не «виправляйте» це в повідомленні колеги в Slack. У пропозиції, контракті чи всьому, що читатиме прискіпливий читач, *were* — безпечний вибір. Сталі фрази (*Were it not for…*, *as it were*) ніколи не беруть *was*.',
          },
        },
      ],
    },

    // ── 3. FORMAL LINKERS & WORDS ──────────────────────────────────────────
    {
      id: 'formal-linkers',
      title: { en: 'Formal words and linkers: prior to · regarding · hereby', uk: 'Формальні слова й звʼязки: prior to · regarding · hereby' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'How a linker builds a sentence (coordinator, subordinator, linking adverb, preposition) is the grammar of m30. This topic is about **register**: for most everyday words and linkers there is a formal partner that means the same and fits a report or a contract. Cambridge: formal vocabulary tends to be longer words of Latin or Greek origin (*commence*), informal vocabulary shorter Anglo-Saxon words (*start*); phrasal verbs are often, but not always, less formal than a one-word equivalent (*sort out* vs *solve*).',
            uk: 'Як звʼязка будує речення (coordinator, subordinator, linking adverb, preposition) — це граматика m30. Ця тема — про **регістр**: більшість повсякденних слів і звʼязок має формального партнера, що означає те саме й пасує до звіту чи контракту. Cambridge: формальна лексика — це здебільшого довші слова латинського чи грецького походження (*commence*), неформальна — коротші англосаксонські (*start*); phrasal verbs часто, хоч і не завжди, менш формальні за однослівний відповідник (*sort out* vs *solve*).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Everyday', uk: 'Повсякденне' },
            { en: 'Formal', uk: 'Формальне' },
            { en: 'Formal example', uk: 'Формальний приклад' },
          ],
          rows: [
            [
              { en: 'before', uk: 'before' },
              { en: 'prior to', uk: 'prior to' },
              { en: 'Prior to the migration, all data must be backed up.', uk: 'Prior to the migration, all data must be backed up.' },
            ],
            [
              { en: 'about', uk: 'about' },
              { en: 'regarding · concerning · with regard to', uk: 'regarding · concerning · with regard to' },
              { en: 'Regarding your request, access has been granted.', uk: 'Regarding your request, access has been granted.' },
            ],
            [
              { en: 'if', uk: 'if' },
              { en: 'provided that · in the event that', uk: 'provided that · in the event that' },
              { en: 'In the event that the service is unavailable, a credit applies.', uk: 'In the event that the service is unavailable, a credit applies.' },
            ],
            [
              { en: 'find out · get · ask for · need · help', uk: 'find out · get · ask for · need · help' },
              { en: 'ascertain · obtain · request · require · assist', uk: 'ascertain · obtain · request · require · assist' },
              { en: 'Please obtain approval before you request production access.', uk: 'Please obtain approval before you request production access.' },
            ],
            [
              { en: 'start · end · enough', uk: 'start · end · enough' },
              { en: 'commence · terminate · sufficient', uk: 'commence · terminate · sufficient' },
              { en: 'The contract commences on 1 March.', uk: 'The contract commences on 1 March.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Formal and informal language; Phrasal verbs and multi-word verbs).',
            uk: 'Cambridge (Formal and informal language; Phrasal verbs and multi-word verbs).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Official word', uk: 'Офіційне слово' },
            { en: 'Plain meaning', uk: 'Простий зміст' },
            { en: 'Belongs in', uk: 'Доречне в' },
          ],
          rows: [
            [
              { en: 'hereby', uk: 'hereby' },
              { en: 'by this document / statement', uk: 'цим документом / заявою' },
              { en: 'contracts, formal notices', uk: 'контракти, офіційні повідомлення' },
            ],
            [
              { en: 'pursuant to · in accordance with', uk: 'pursuant to · in accordance with' },
              { en: 'following, as required by', uk: 'відповідно до' },
              { en: 'policies, contracts', uk: 'політики, контракти' },
            ],
            [
              { en: 'notwithstanding', uk: 'notwithstanding' },
              { en: 'despite', uk: 'попри' },
              { en: 'legal text', uk: 'юридичні тексти' },
            ],
            [
              { en: 'whereby · herein · thereof', uk: 'whereby · herein · thereof' },
              { en: 'by which · in this document · of it', uk: 'за яким · у цьому документі · цього' },
              { en: 'legal text', uk: 'юридичні тексти' },
            ],
            [
              { en: 'shall', uk: 'shall' },
              { en: 'must (an obligation)', uk: 'зобовʼязаний (обовʼязок)' },
              { en: 'contracts, specifications', uk: 'контракти, специфікації' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Цим повідомляю…» → I hereby inform you… in Slack ✕', uk: '«Цим повідомляю…» → I hereby inform you… у Slack ✕' },
          md: {
            en: 'Ukrainian office style («Цим повідомляю», «Доводимо до вашого відома») is often carried into English chats and emails. *hereby* belongs to contracts and formal notices; in a team chat it sounds cold or ironic. ✕ *I hereby inform you that the stand-up has been canceled* → ✓ *Heads-up: no stand-up today.* In an email: ✓ *Just to let you know, today’s stand-up is canceled.*',
            uk: 'Український канцелярит («Цим повідомляю», «Доводимо до вашого відома») часто переносять в англомовні чати й листи. *hereby* належить контрактам і офіційним повідомленням; у командному чаті воно звучить холодно або іронічно. ✕ *I hereby inform you that the stand-up has been canceled* → ✓ *Heads-up: no stand-up today.* У листі: ✓ *Just to let you know, today’s stand-up is canceled.*',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Formal is not the same as long', uk: 'Формально — не те саме, що довго' },
          md: {
            en: 'Plain-language guides for technical and legal writing push the same rule: use the formal word when the **reader** needs it, not to sound important. *Prior to* in an RFC is fine; *utilize* instead of *use* rarely adds anything. A good formal sentence is still short and has a real actor where possible (m24: when the passive hides the doer).',
            uk: 'Посібники plain language для технічного й юридичного письма проповідують те саме правило: беріть формальне слово, коли його потребує **читач**, а не щоб звучати поважно. *Prior to* в RFC — нормально; *utilize* замість *use* рідко щось додає. Добре формальне речення однаково коротке й, де можна, має справжнього виконавця (m24: коли passive ховає виконавця).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: shall in American contracts', uk: 'Дрібний шрифт: shall в американських контрактах' },
          md: {
            en: 'In everyday American English *shall* is nearly gone (except *Shall we…?* offers), but contracts and specifications still use it for obligations: *The vendor **shall** provide monthly reports.* Many modern drafting guides prefer *must* for obligations, because *shall* is used inconsistently. If your company has a template, follow it.',
            uk: 'У повсякденній американській англійській *shall* майже зникло (крім пропозицій *Shall we…?*), але контракти й специфікації досі вживають його для обовʼязків: *The vendor **shall** provide monthly reports.* Багато сучасних посібників зі складання документів радять для обовʼязків *must*, бо *shall* вживають непослідовно. Якщо у вашої компанії є шаблон — дотримуйтеся його.',
          },
        },
      ],
    },

    // ── 4. REGISTER SHIFTS ─────────────────────────────────────────────────
    {
      id: 'register-shifts',
      title: { en: 'Register shifts: one message, four levels', uk: 'Зміна регістру: одне повідомлення, чотири рівні' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Register follows the **situation and the relationship** (Cambridge): who reads it, and how well you know them. In tech, four levels cover almost everything: **chat** (Slack, DMs) · **email** to people you know · **report** (postmortems, proposals, docs) · **official** (policies, contracts, formal notices). Moving up the scale changes words *and* grammar: contractions open up, phrasal verbs become single words, *you* gives way to impersonal structures, and the subjunctive or inversion appears at the top.',
            uk: 'Регістр залежить від **ситуації та стосунків** (Cambridge): хто читатиме і наскільки добре ви знайомі. У tech чотири рівні покривають майже все: **чат** (Slack, DM) · **лист** знайомим людям · **звіт** (постмортеми, пропозиції, документація) · **офіційний** (політики, контракти, офіційні повідомлення). Рух угору шкалою змінює і слова, *і* граматику: скорочення розгортаються, phrasal verbs стають однослівними, *you* поступається безособовим конструкціям, а вгорі зʼявляються subjunctive чи інверсія.',
          },
        },
        {
          kind: 'sim',
          sim: 'register-dial',
          caption: {
            en: 'Register Dial: step one message from chat to official and watch the words swap and the structure rebuild. The engine lists every marker it finds (− contraction, slang, phrasal verb · + formal or official word, nominalisation, passive, subjunctive, inversion), and the needle sits where the computed score puts it. Wherever a mandative subjunctive appears, the BrE chip shows the should form, built by the engine. Fix the mismatches judges four messages against where they are going.',
            uk: 'Register Dial: проведіть одне повідомлення від чату до офіційного й подивіться, як замінюються слова й перебудовується структура. Рушій показує кожен знайдений маркер (− скорочення, сленг, phrasal verb · + формальне чи офіційне слово, номіналізація, passive, subjunctive, інверсія), а стрілка стоїть там, куди її ставить обчислений бал. Де зʼявляється mandative subjunctive, чип BrE показує форму з should, побудовану рушієм. Режим «Виправити невідповідності» оцінює чотири повідомлення відносно того, куди вони йдуть.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Level', uk: 'Рівень' },
            { en: 'The same message', uk: 'Те саме повідомлення' },
            { en: 'What changed', uk: 'Що змінилося' },
          ],
          rows: [
            [
              { en: 'chat', uk: 'чат' },
              { en: 'Hey, heads-up: we’re pushing the deploy to Monday!', uk: 'Hey, heads-up: we’re pushing the deploy to Monday!' },
              { en: 'slang, contraction, phrasal-style verb, “!”', uk: 'сленг, скорочення, розмовне дієслово, «!»' },
            ],
            [
              { en: 'email', uk: 'лист' },
              { en: 'Hi all, we have moved the deploy to Monday to allow more time for testing.', uk: 'Hi all, we have moved the deploy to Monday to allow more time for testing.' },
              { en: 'full forms, a reason, still we', uk: 'повні форми, причина, досі we' },
            ],
            [
              { en: 'report', uk: 'звіт' },
              { en: 'The deployment has been postponed until Monday to allow additional testing.', uk: 'The deployment has been postponed until Monday to allow additional testing.' },
              { en: 'nominalisation, passive, formal word', uk: 'номіналізація, passive, формальне слово' },
            ],
            [
              { en: 'official', uk: 'офіційний' },
              { en: 'It is essential that the deployment be postponed until Monday, pursuant to the testing requirements.', uk: 'It is essential that the deployment be postponed until Monday, pursuant to the testing requirements.' },
              { en: 'subjunctive, official linker', uk: 'subjunctive, офіційна звʼязка' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“Pursuant to the review, we’re gonna…” — the mixed register', uk: '«Pursuant to the review, we’re gonna…» — змішаний регістр' },
          md: {
            en: 'The most noticeable register error is not one level too high or too low; it is **two levels in one sentence**. Learners often collect formal phrases and chat words separately and then combine them. ✕ *Pursuant to the incident review, we’re gonna roll back the release* → report: ✓ *Pursuant to the incident review, the release will be rolled back* · email: ✓ *After the incident review, we’re going to roll back the release.*',
            uk: 'Найпомітніша помилка регістру — не на рівень вище чи нижче, а **два рівні в одному реченні**. Учні часто збирають формальні фрази й чатові слова окремо, а потім їх поєднують. ✕ *Pursuant to the incident review, we’re gonna roll back the release* → звіт: ✓ *Pursuant to the incident review, the release will be rolled back* · лист: ✓ *After the incident review, we’re going to roll back the release.*',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Прошу надати доступ» → I ask to give me access ✕', uk: '«Прошу надати доступ» → I ask to give me access ✕' },
          md: {
            en: 'The Ukrainian formal request formula does not translate word for word. ✕ *I ask to give me access to the logs* → email: ✓ *Could you please give me access to the logs?* · report or ticket: ✓ *I would like to request access to the production logs.* · official: ✓ *It is requested that the applicant be granted access…*',
            uk: 'Українська формальна формула прохання не перекладається дослівно. ✕ *I ask to give me access to the logs* → лист: ✓ *Could you please give me access to the logs?* · звіт чи тікет: ✓ *I would like to request access to the production logs.* · офіційно: ✓ *It is requested that the applicant be granted access…*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Contractions and the reader.** Cambridge notes contractions are usually not appropriate in formal writing. In practice, product docs and friendly company blogs **do** use them on purpose to sound approachable, while contracts, policies and academic text do not. Decide per document and stay consistent: *don’t* in one paragraph and *do not* in the next reads as careless.',
            uk: '**Скорочення і читач.** Cambridge зазначає, що у формальному письмі скорочення зазвичай недоречні. На практиці документація продуктів і дружні корпоративні блоги **таки** вживають їх навмисно, щоб звучати приступніше, а контракти, політики й академічні тексти — ні. Вирішуйте для кожного документа й будьте послідовні: *don’t* в одному абзаці й *do not* у наступному читаються як недбалість.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: the score is a model', uk: 'Дрібний шрифт: бал — це модель' },
          md: {
            en: 'The Register Dial counts markers because register really is made of them, but a count is a simplification. *just* can be neutral (*just in time*), and a noun ending in *-ment* is not always formal. The lexicons are deliberately small and the scenarios avoid the ambiguous cases. Treat the needle as a way to **see** what makes a sentence formal, not as a grade for real text.',
            uk: 'Register Dial рахує маркери, бо регістр справді з них складається, але підрахунок — це спрощення. *just* може бути нейтральним (*just in time*), а іменник на *-ment* не завжди формальний. Словники навмисно малі, а сценарії уникають неоднозначних випадків. Сприймайте стрілку як спосіб **побачити**, що робить речення формальним, а не як оцінку реального тексту.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Register = countable markers: contractions, phrasal verbs and slang pull down; formal words, nominalisations, the passive, the subjunctive and inversion push up.',
      uk: 'Регістр = маркери, які можна порахувати: скорочення, phrasal verbs і сленг тягнуть униз; формальні слова, номіналізації, passive, subjunctive та інверсія — угору.',
    },
    {
      en: 'Mandative subjunctive: recommend / insist / essential … + that + bare base for every person — that she review · that the vendor be notified · that the key not be shared.',
      uk: 'Mandative subjunctive: recommend / insist / essential … + that + гола базова форма для будь-якої особи — that she review · that the vendor be notified · that the key not be shared.',
    },
    {
      en: 'AmE formal: the base form; BrE: should + base is more common; the ordinary present is informal BrE.',
      uk: 'Формальна AmE: базова форма; BrE: поширеніше should + базова; звичайний теперішній — неформальна BrE.',
    },
    {
      en: 'Formal were (as if he were · Were it not for) signals register; fixed phrases (if need be · be that as it may · come what may) are learned whole.',
      uk: 'Формальне were (as if he were · Were it not for) сигналізує регістр; сталі фрази (if need be · be that as it may · come what may) вчать цілими.',
    },
    {
      en: 'Formal partners: before → prior to · about → regarding · if → in the event that · find out → ascertain; hereby / pursuant to only in legal text.',
      uk: 'Формальні партнери: before → prior to · about → regarding · if → in the event that · find out → ascertain; hereby / pursuant to — лише в юридичних текстах.',
    },
    {
      en: 'Pick one level for the reader (chat · email · report · official) and stay in it; a mixed sentence is the worst outcome.',
      uk: 'Оберіть один рівень для читача (чат · лист · звіт · офіційний) і тримайтеся його; змішане речення — найгірший результат.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“It is essential that the vendor is notified.” (AmE formal)', uk: '«It is essential that the vendor is notified.» (формальна AmE)' },
      body: { en: 'Base form: that the vendor be notified (BrE: should be notified).', uk: 'Базова форма: that the vendor be notified (BrE: should be notified).' },
    },
    {
      title: { en: '“We insisted that he reviewed it.”', uk: '«We insisted that he reviewed it.»' },
      body: { en: 'The base form does not follow the main verb’s tense: that he review it.', uk: 'Базова форма не залежить від часу головного дієслова: that he review it.' },
    },
    {
      title: { en: '“We suggest him to review it.”', uk: '«We suggest him to review it.»' },
      body: { en: 'suggest + that-clause or -ing: We suggest that he review it / We suggest reviewing it.', uk: 'suggest + that-клауза або -ing: We suggest that he review it / We suggest reviewing it.' },
    },
    {
      title: { en: '“Was it not for the backup …”', uk: '«Was it not for the backup …»' },
      body: { en: 'Fixed form: Were it not for ….', uk: 'Стала форма: Were it not for ….' },
    },
    {
      title: { en: '“I hereby inform you …” in a team chat', uk: '«I hereby inform you …» у командному чаті' },
      body: { en: 'hereby belongs to contracts; in chat: Heads-up: …', uk: 'hereby належить контрактам; у чаті: Heads-up: …' },
    },
    {
      title: { en: '“Pursuant to the review, we’re gonna …”', uk: '«Pursuant to the review, we’re gonna …»' },
      body: { en: 'One register per sentence: … the release will be rolled back.', uk: 'Один регістр на речення: … the release will be rolled back.' },
    },
    {
      title: { en: '“I ask to give me access …”', uk: '«I ask to give me access …»' },
      body: { en: 'Could you please give me access …? / I would like to request access ….', uk: 'Could you please give me access …? / I would like to request access ….' },
    },
  ],
  exercises: [
    {
      id: 'ex-subjunctive-formal-1',
      kind: 'mcq',
      prompt: { en: 'Formal American English: “It is essential that the vendor ___ notified.”', uk: 'Формальна американська англійська: «Постачальника необхідно повідомити».' },
      options: ['be', 'is', 'will be'],
      correct: 0,
      explain: { en: 'essential that + bare base form → be notified.', uk: 'essential that + гола базова форма → be notified.' },
      level: 'c1',
      tags: ['subjunctive', 'mandative'],
    },
    {
      id: 'ex-subjunctive-formal-2',
      kind: 'mcq',
      prompt: { en: 'We recommend that she ___ the logs before Friday.', uk: 'Ми рекомендуємо, щоб вона переглянула логи до пʼятниці.' },
      options: ['review', 'reviews', 'reviewed'],
      correct: 0,
      explain: { en: 'Mandative subjunctive: the base form for every person, no -s.', uk: 'Mandative subjunctive: базова форма для будь-якої особи, без -s.' },
      level: 'c1',
      tags: ['subjunctive', 'mandative'],
    },
    {
      id: 'ex-subjunctive-formal-3',
      kind: 'gap',
      sentence: 'The client insisted that the fix ___ (ship) before the audit.',
      answers: ['ship', 'should ship'],
      hint: { en: 'base form (BrE: should + base)', uk: 'базова форма (BrE: should + базова)' },
      explain: { en: 'insisted that + base form: ship. The past tense of insisted does not change it. BrE: should ship.', uk: 'insisted that + базова форма: ship. Минулий час insisted її не змінює. BrE: should ship.' },
      level: 'c1',
      tags: ['subjunctive', 'mandative'],
    },
    {
      id: 'ex-subjunctive-formal-4',
      kind: 'mcq',
      prompt: { en: 'It is important that the API key ___ shared outside the team.', uk: 'Важливо, щоб API-ключ не поширювали за межами команди.' },
      options: ['not be', 'is not be', 'don’t be'],
      correct: 0,
      explain: { en: 'The negative subjunctive is not + base, with no do: not be shared.', uk: 'Заперечний subjunctive — not + базова форма, без do: not be shared.' },
      level: 'c1',
      tags: ['subjunctive', 'mandative'],
    },
    {
      id: 'ex-subjunctive-formal-5',
      kind: 'mcq',
      prompt: { en: 'The typical British alternative to “We suggest that he be told” is:', uk: 'Типова британська альтернатива до «We suggest that he be told»:' },
      options: ['We suggest that he should be told.', 'We suggest that he would be told.', 'We suggest him to be told.'],
      correct: 0,
      explain: { en: 'BrE often uses should + base in the that-clause (Cambridge, Suggest).', uk: 'BrE часто вживає should + базова форма в that-клаузі (Cambridge, Suggest).' },
      level: 'c1',
      tags: ['subjunctive', 'ame-bre'],
    },
    {
      id: 'ex-subjunctive-formal-6',
      kind: 'mcq',
      prompt: { en: 'In a formal report: “He presented the results as if he ___ the project lead.”', uk: 'У формальному звіті: «Він презентував результати так, наче був керівником проєкту».' },
      options: ['were', 'is', 'be'],
      correct: 0,
      explain: { en: 'as if + were (every person) is the formal choice; was is common in speech.', uk: 'as if + were (будь-яка особа) — формальний вибір; was поширене в мовленні.' },
      level: 'c1',
      tags: ['subjunctive', 'were'],
    },
    {
      id: 'ex-subjunctive-formal-7',
      kind: 'mcq',
      prompt: { en: '___ it not for the backup, we would have lost the data.', uk: 'Якби не бекап, ми втратили б дані.' },
      options: ['Were', 'Was', 'If'],
      correct: 0,
      explain: { en: 'Fixed formal form: Were it not for… (never was).', uk: 'Стала формальна форма: Were it not for… (ніколи was).' },
      level: 'c1',
      tags: ['subjunctive', 'were', 'inversion'],
    },
    {
      id: 'ex-subjunctive-formal-8',
      kind: 'mcq',
      prompt: { en: 'Which phrase means “if necessary”?', uk: 'Яка фраза означає «якщо буде потрібно»?' },
      options: ['if need be', 'if needed be', 'if need to be'],
      correct: 0,
      explain: { en: 'Frozen subjunctive: if need be (BrE also if needs be).', uk: 'Застиглий subjunctive: if need be (BrE також if needs be).' },
      level: 'c1',
      tags: ['subjunctive', 'fixed-phrases'],
    },
    {
      id: 'ex-subjunctive-formal-9',
      kind: 'mcq',
      prompt: { en: '“Be that as it may, the deadline stands.” “Be that as it may” means:', uk: '«Be that as it may, the deadline stands.» «Be that as it may» означає:' },
      options: ['even if that is true', 'because that is true', 'if that happens'],
      correct: 0,
      explain: { en: 'be that as it may = even so / even if that is true.', uk: 'be that as it may = хай там як / навіть якщо це правда.' },
      level: 'c1',
      tags: ['subjunctive', 'fixed-phrases'],
    },
    {
      id: 'ex-subjunctive-formal-10',
      kind: 'mcq',
      prompt: { en: 'The formal equivalent of “before” in “before the migration”:', uk: 'Формальний відповідник «before» у «before the migration»:' },
      options: ['prior to', 'previous', 'ahead'],
      correct: 0,
      explain: { en: 'prior to + noun: Prior to the migration, ….', uk: 'prior to + іменник: Prior to the migration, ….' },
      level: 'c1',
      tags: ['formal-linkers', 'register'],
    },
    {
      id: 'ex-subjunctive-formal-11',
      kind: 'mcq',
      prompt: { en: 'The formal one-word equivalent of “find out” (the cause):', uk: 'Формальний однослівний відповідник «find out» (причину):' },
      options: ['ascertain', 'figure', 'look'],
      correct: 0,
      explain: { en: 'Phrasal verbs are often less formal than a one-word equivalent: find out → ascertain.', uk: 'Phrasal verbs часто менш формальні за однослівний відповідник: find out → ascertain.' },
      level: 'c1',
      tags: ['formal-linkers', 'register'],
    },
    {
      id: 'ex-subjunctive-formal-12',
      kind: 'mcq',
      prompt: { en: 'Which belongs in a formal policy?', uk: 'Що доречне в офіційній політиці?' },
      options: [
        'Should you require further information, please contact the platform team.',
        'Got questions? Just ping us!',
        'If you’ve got questions, reach out.',
      ],
      correct: 0,
      explain: { en: 'Conditional inversion (Should you…) + require + information = official register.', uk: 'Умовна інверсія (Should you…) + require + information = офіційний регістр.' },
      level: 'c1',
      tags: ['register-shifts', 'inversion'],
    },
    {
      id: 'ex-subjunctive-formal-13',
      kind: 'gap',
      sentence: '___ you require further assistance, please contact the support team.',
      answers: ['Should'],
      hint: { en: 'a formal if, inverted', uk: 'формальне if, з інверсією' },
      explain: { en: 'Should + subject replaces if in formal English (British Council, Inversion and conditionals).', uk: 'Should + підмет заміняє if у формальній англійській (British Council, Inversion and conditionals).' },
      level: 'c1',
      tags: ['register-shifts', 'inversion'],
    },
    {
      id: 'ex-subjunctive-formal-14',
      kind: 'mcq',
      prompt: { en: 'Which sentence keeps ONE register?', uk: 'Яке речення тримає ОДИН регістр?' },
      options: [
        'Pursuant to the review, the release will be rolled back.',
        'Pursuant to the review, we’re gonna roll it back.',
        'Hey, pursuant to the review, rollback time!',
      ],
      correct: 0,
      explain: { en: 'pursuant to + gonna / hey mixes an official and a chat register.', uk: 'pursuant to + gonna / hey змішує офіційний і чатовий регістри.' },
      level: 'c1',
      tags: ['register-shifts', 'mixed-register'],
    },
    {
      id: 'ex-subjunctive-formal-15',
      kind: 'mcq',
      prompt: { en: 'Which fits a team Slack message?', uk: 'Що пасує до повідомлення в командному Slack?' },
      options: [
        'Heads-up: no stand-up today!',
        'I hereby inform you that the stand-up has been canceled.',
        'It is requested that the stand-up be canceled.',
      ],
      correct: 0,
      explain: { en: 'Chat is short and friendly; hereby and the subjunctive belong to official text.', uk: 'Чат — коротко й дружньо; hereby і subjunctive належать офіційним текстам.' },
      level: 'c1',
      tags: ['register-shifts'],
    },
    {
      id: 'ex-subjunctive-formal-16',
      kind: 'mcq',
      prompt: { en: '«Прошу надати мені доступ до логів» in an email to a colleague:', uk: '«Прошу надати мені доступ до логів» у листі колезі:' },
      options: ['Could you please give me access to the logs?', 'I ask to give me access to the logs.', 'I am asking you for giving me access to the logs.'],
      correct: 0,
      explain: { en: 'The Ukrainian formula is not translated word for word; English asks with Could you please…?', uk: 'Українську формулу не перекладають дослівно; англійська просить через Could you please…?' },
      level: 'c1',
      tags: ['register-shifts', 'calques'],
    },
  ],
  seeAlso: ['m23-conditionals-3-mixed', 'm24-passive-advanced', 'm27-inversion-emphasis', 'm30-linking-discourse', 'm22-requests-politeness', 'm16-gerund-infinitive'],
  sources: [
    {
      title: 'Cambridge Dictionary — Formal and informal language',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/formal-and-informal-language',
    },
    {
      title: 'Cambridge Dictionary — Register',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/register',
    },
    {
      title: 'Cambridge Dictionary — Contractions',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/contractions',
    },
    {
      title: 'Cambridge Dictionary — Phrasal verbs and multi-word verbs',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/phrasal-verbs-and-multi-word-verbs',
    },
    {
      title: 'Cambridge Dictionary — Suggest',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/suggest',
    },
    {
      title: 'British Council LearnEnglish — Inversion and conditionals (C1)',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1/inversion-conditionals',
    },
    {
      title: 'Crawford, W. J. (2009) — The mandative subjunctive, in One Language, Two Grammars? (Cambridge University Press)',
      url: 'https://www.cambridge.org/core/books/one-language-two-grammars/mandative-subjunctive/39A859FDAD907967392482CDBF53EB6A',
    },
  ],
};
