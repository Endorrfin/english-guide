import type { Module } from '../types';

/*
 * CHANGED (C2): M15 · Reported speech — Section III Core Grammar (★ reported-speech-lab). Authored EN
 * first, UA second; grammar terms stay English in both languages; examples are US English with a
 * work/dev lean. Facts verified against Cambridge Grammar (Reported speech: indirect speech · Reported
 * speech (reporting verbs) · Say or tell? · Suggest) and British Council LearnEnglish (Reported speech:
 * statements · questions · reporting verbs).
 * Spine: the reporting viewpoint steps back into the past and every form steps back with it — the
 * same shift m11 taught as future-in-the-past. Backshift is a consequence of the viewpoint, not a
 * reflex: a present reporting verb or a still-true fact keeps the tense.
 */
export const m15: Module = {
  id: 'm15-reported-speech',
  num: 15,
  section: 's2-core-grammar',
  order: 4,
  level: 'b1',
  signature: true,
  title: { en: 'Reported speech', uk: 'Reported speech' },
  tagline: {
    en: 'Retell what someone said: the viewpoint moves into the past and the tenses step back with it — unless it’s still true. Questions lose their question order; requests become to + V1.',
    uk: 'Переказуйте, що хтось сказав: точка огляду переходить у минуле, і часи відступають разом із нею — хіба що це досі правда. Питання втрачають порядок питання; прохання стають to + V1.',
  },
  readMins: 22,
  mentalModel: {
    en: 'Reported speech is a change of viewpoint. The words were said THEN; you report them NOW, from your place, so everything that points at the speaker’s here-and-now gets re-aimed: the tense steps one step back (am → was, will → would, have done → had done), the pronouns follow the people (I → she), and time and place words follow the clock (tomorrow → the next day, here → there). If nothing has really moved — a present reporting verb, a fact that is still true — nothing needs to shift.',
    uk: 'Reported speech — це зміна точки огляду. Слова сказали ТОДІ; ви передаєте їх ЗАРАЗ, зі свого місця, тож усе, що вказує на «тут і зараз» мовця, переналаштовується: час відступає на крок назад (am → was, will → would, have done → had done), займенники йдуть за людьми (I → she), а слова часу й місця — за годинником (tomorrow → the next day, here → there). Якщо насправді нічого не зрушило — дієслово звітування в present, факт, що досі правдивий, — зсувати нічого не треба.',
  },
  topics: [
    // ── 1. BACKSHIFT ───────────────────────────────────────────────────────
    {
      id: 'backshift',
      title: { en: 'Backshift: one step back in time', uk: 'Backshift: крок назад у часі' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'When you report with a **past** reporting verb (*said, told, asked*), the original tenses usually move **one step back** — **backshift**. *“I**’m** tired,” Anna said* → *Anna said she **was** tired.* *“We**’ll** ship on Friday”* → *They said they **would** ship on Friday.* It is the same move you met in [m11 — future in the past](#/m/m11-choosing-narrative/future-in-the-past-sequence): the viewpoint steps into the past, and every form steps back with it. The word **that** after *said / told* is optional and usually dropped in speech.',
            uk: 'Коли ви звітуєте дієсловом у **past** (*said, told, asked*), початкові часи зазвичай відступають **на крок назад** — це **backshift**. *«I**’m** tired», — сказала Анна* → *Anna said she **was** tired.* *«We**’ll** ship on Friday»* → *They said they **would** ship on Friday.* Це той самий рух, що й у [m11 — future in the past](#/m/m11-choosing-narrative/future-in-the-past-sequence): точка огляду переходить у минуле, і кожна форма відступає разом із нею. Слово **that** після *said / told* необовʼязкове, у мовленні його зазвичай пропускають.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Direct speech', uk: 'Пряма мова' },
            { en: 'Reported (after said)', uk: 'Непряма (після said)' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'Present Simple', uk: 'Present Simple' },
              { en: 'Past Simple', uk: 'Past Simple' },
              { en: '“I work remotely.” → She said she worked remotely.', uk: '“I work remotely.” → She said she worked remotely.' },
            ],
            [
              { en: 'Present Continuous', uk: 'Present Continuous' },
              { en: 'Past Continuous', uk: 'Past Continuous' },
              { en: '“I’m fixing it.” → He said he was fixing it.', uk: '“I’m fixing it.” → He said he was fixing it.' },
            ],
            [
              { en: 'Present Perfect', uk: 'Present Perfect' },
              { en: 'Past Perfect', uk: 'Past Perfect' },
              { en: '“I’ve sent it.” → She said she had sent it.', uk: '“I’ve sent it.” → She said she had sent it.' },
            ],
            [
              { en: 'Past Simple', uk: 'Past Simple' },
              { en: 'Past Perfect (or stays)', uk: 'Past Perfect (або лишається)' },
              { en: '“I missed the call.” → He said he had missed the call.', uk: '“I missed the call.” → He said he had missed the call.' },
            ],
            [
              { en: 'will / can / may', uk: 'will / can / may' },
              { en: 'would / could / might', uk: 'would / could / might' },
              { en: '“I can help.” → She said she could help.', uk: '“I can help.” → She said she could help.' },
            ],
            [
              { en: 'must (obligation)', uk: 'must (обовʼязок)' },
              { en: 'had to (or must)', uk: 'had to (або must)' },
              { en: '“You must update it.” → He said I had to update it.', uk: '“You must update it.” → He said I had to update it.' },
            ],
          ],
          caption: {
            en: 'One step back, row by row (Cambridge, British Council). The Past Perfect and would / could / should / might / ought to / used to stay as they are — there is no step further back.',
            uk: 'Крок назад, рядок за рядком (Cambridge, British Council). Past Perfect і would / could / should / might / ought to / used to лишаються як є — далі відступати нікуди.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: Ukrainian has no sequence of tenses', uk: 'Пастка україномовних: в українській немає узгодження часів' },
          md: {
            en: 'Ukrainian keeps the original tense inside the report: *«Вона сказала, що **втомилася** / що **працює** з дому»* — the verb is the same as in her words. So UA speakers write *“She said she **works** from home”* about a conversation last year and *“He said he **will** call”* about a call that has long happened or not. In a story about the past, English **steps back**: *She said she **worked** from home* · *He said he **would** call.* Keeping the present is not a free choice — it says *“and it’s still true now”* (see the callout below).',
            uk: 'Українська зберігає початковий час усередині звіту: *«Вона сказала, що **втомилася** / що **працює** з дому»* — дієслово таке саме, як у її словах. Тож україномовні пишуть *«She said she **works** from home»* про розмову торік і *«He said he **will** call»* про дзвінок, який давно відбувся чи ні. В історії про минуле англійська **відступає**: *She said she **worked** from home* · *He said he **would** call.* Залишити present — не довільний вибір: це означає *«і це досі правда»* (див. наступний блок).',
          },
        },
        {
          kind: 'sim',
          sim: 'reported-speech-lab',
          caption: {
            en: 'Reported Speech Lab: pick what Anna said and how you report it — right now (says), a week later (said), or soon while it’s still true. Every change is highlighted by kind: tense, pronoun, time/place word, statement order, if/whether, to-infinitive.',
            uk: 'Reported Speech Lab: оберіть, що сказала Анна і як ви це передаєте — зараз (says), через тиждень (said) чи невдовзі, поки це досі правда. Кожна зміна підсвічена за типом: час, займенник, слово часу/місця, порядок ствердження, if/whether, to-infinitive.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Said there and then', uk: 'Сказано тоді й там' },
            { en: 'Reported later / elsewhere', uk: 'Передано пізніше / деінде' },
          ],
          rows: [
            [{ en: 'now', uk: 'now' }, { en: 'then / at that time', uk: 'then / at that time' }],
            [{ en: 'today · tonight', uk: 'today · tonight' }, { en: 'that day · that night', uk: 'that day · that night' }],
            [{ en: 'tomorrow', uk: 'tomorrow' }, { en: 'the next day / the following day', uk: 'the next day / the following day' }],
            [{ en: 'yesterday', uk: 'yesterday' }, { en: 'the day before / the previous day', uk: 'the day before / the previous day' }],
            [{ en: 'next week · last week', uk: 'next week · last week' }, { en: 'the following week · the week before', uk: 'the following week · the week before' }],
            [{ en: 'here · this', uk: 'here · this' }, { en: 'there · that', uk: 'there · that' }],
          ],
          caption: {
            en: 'These words point at the speaker’s moment and place, so they change only when yours is different. Reporting the same day in the same room, tomorrow is still tomorrow.',
            uk: 'Ці слова вказують на момент і місце мовця, тож змінюються лише тоді, коли ваші інші. Якщо звітуєте того ж дня в тій самій кімнаті, tomorrow — досі tomorrow.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'When you DON’T backshift', uk: 'Коли backshift НЕ потрібен' },
          md: {
            en: 'Two cases. **1. A present reporting verb** — you pass a message on now: *Anna **says** she**’s** fixing it* · *The client **tells** us they **need** it by Monday.* **2. Still true, or still ahead** — Cambridge: no tense change is needed if what was said *“is still true or relevant or has not happened yet”*: *She said the API **is** rate-limited* (it still is) · *He said he**’ll** be late tomorrow* (said this morning). In both cases backshifting is still correct after *said* — it just sounds more like a story about the past.',
            uk: 'Два випадки. **1. Дієслово звітування в present** — ви передаєте повідомлення зараз: *Anna **says** she**’s** fixing it* · *The client **tells** us they **need** it by Monday.* **2. Досі правда або ще попереду** — Cambridge: час не обовʼязково змінювати, якщо сказане *«досі правдиве чи актуальне або ще не сталося»*: *She said the API **is** rate-limited* (так і є) · *He said he**’ll** be late tomorrow* (сказав зранку). В обох випадках backshift після *said* усе одно правильний — просто звучить більше як розповідь про минуле.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Modals: some step back, some can’t.** *will → would, can → could, may → might, shall → should* (offers) — and *must*: for an **obligation** it usually becomes *had to* (*“You must sign it”* → *He said I **had to** sign it*), though *must* can stay; for **deduction** it stays *must* (*“It must be a cache issue”* → *She said it **must** be a cache issue*). *would, could, should, might, ought to, used to* have no past to step into, so they never change.',
            uk: '**Modals: одні відступають, інші не можуть.** *will → would, can → could, may → might, shall → should* (пропозиції) — і *must*: для **обовʼязку** він зазвичай стає *had to* (*«You must sign it»* → *He said I **had to** sign it*), хоча *must* може лишитися; для **дедукції** лишається *must* (*«It must be a cache issue»* → *She said it **must** be a cache issue*). *would, could, should, might, ought to, used to* не мають минулого, куди відступити, тож не змінюються ніколи.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: forms that are already “back”', uk: 'Дрібний шрифт: форми, які вже «позаду»' },
          md: {
            en: 'The **Past Perfect** has nowhere to go: *“I had already left”* → *She said she **had already left*** (Cambridge: it stays the same). The same goes for an imagined **Type 2** conditional, whose past form already means distance from reality ([m13](#/m/m13-conditionals-0-1-2/second)): *“If I had more time, I’d help”* → *He said that if he **had** more time, he**’d** help.* And the **Past Simple → Past Perfect** step is often skipped in speech when the order of events is obvious: *She said she **joined** in 2021* is fine.',
            uk: '**Past Perfect** нікуди відступати: *«I had already left»* → *She said she **had already left*** (Cambridge: лишається без змін). Те саме з уявним **Type 2** conditional, чия минула форма вже означає відстань від реальності ([m13](#/m/m13-conditionals-0-1-2/second)): *«If I had more time, I’d help»* → *He said that if he **had** more time, he**’d** help.* А крок **Past Simple → Past Perfect** у мовленні часто пропускають, коли порядок подій очевидний: *She said she **joined** in 2021* — цілком нормально.',
          },
        },
      ],
    },

    // ── 2. SAY VS TELL ─────────────────────────────────────────────────────
    {
      id: 'say-vs-tell',
      title: { en: 'say vs tell: who gets the message', uk: 'say vs tell: хто отримує повідомлення' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Ukrainian has one verb — *сказати* — and puts the person right after it: *«сказала **мені**»*. English splits the job. **tell** is about the message reaching **a person**, so the person comes straight after it: *She **told me** the build was green.* **say** is about the **words**; it takes no person directly — add *to* if you need one: *She **said** (to me) the build was green.* Cambridge: *tell* normally takes the person; *say* does not.',
            uk: 'Українська має одне дієслово — *сказати* — і ставить особу одразу після нього: *«сказала **мені**»*. Англійська ділить роботу. **tell** — про повідомлення, що дійшло до **особи**, тож особа стоїть одразу після нього: *She **told me** the build was green.* **say** — про **слова**; особу напряму він не бере — додайте *to*, якщо вона потрібна: *She **said** (to me) the build was green.* Cambridge: *tell* зазвичай бере особу; *say* — ні.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'say — the words', uk: 'say — слова' },
          b: { en: 'tell — the person + the message', uk: 'tell — особа + повідомлення' },
          rows: [
            [
              { en: 'Pattern', uk: 'Конструкція' },
              { en: 'say (that) … · say (to sb) (that) …', uk: 'say (that) … · say (to sb) (that) …' },
              { en: 'tell sb (that) … · tell sb to do …', uk: 'tell sb (that) … · tell sb to do …' },
            ],
            [
              { en: 'Statement', uk: 'Твердження' },
              { en: 'He said the deploy was done.', uk: 'He said the deploy was done.' },
              { en: 'He told us the deploy was done.', uk: 'He told us the deploy was done.' },
            ],
            [
              { en: 'Command', uk: 'Наказ' },
              { en: '— (not normally used)', uk: '— (зазвичай не вживається)' },
              { en: 'She told me to restart the server.', uk: 'She told me to restart the server.' },
            ],
            [
              { en: 'Quoting the exact words', uk: 'Точна цитата' },
              { en: '“Ready?” she said.', uk: '“Ready?” she said.' },
              { en: '— (tell doesn’t frame a quote)', uk: '— (tell не обрамлює цитату)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The mandatory UA calque: “She said me…”', uk: 'Обовʼязкова калька: «She said me…»' },
          md: {
            en: '*«Вона сказала **мені**, що…»* → ✕ *She said me that…* The fix is either verb with its own pattern: ✓ *She **told me** that…* or ✓ *She **said** that…* (✓ *She said **to me** that…* is possible but less common). The same with requests: ✕ *He said me to wait* → ✓ *He **told me to** wait* · ✓ *He **asked me to** wait.*',
            uk: '*«Вона сказала **мені**, що…»* → ✕ *She said me that…* Виправлення — будь-яке з двох дієслів у власній конструкції: ✓ *She **told me** that…* або ✓ *She **said** that…* (✓ *She said **to me** that…* можливо, але рідше). Так само з проханнями: ✕ *He said me to wait* → ✓ *He **told me to** wait* · ✓ *He **asked me to** wait.*',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Always tell', uk: 'Завжди tell' },
            { en: 'Always say', uk: 'Завжди say' },
          ],
          rows: [
            [{ en: 'tell the truth · tell a lie', uk: 'tell the truth · tell a lie' }, { en: 'say hello / goodbye', uk: 'say hello / goodbye' }],
            [{ en: 'tell a story · tell a joke', uk: 'tell a story · tell a joke' }, { en: 'say a word · say something / nothing', uk: 'say a word · say something / nothing' }],
            [{ en: 'tell the difference', uk: 'tell the difference' }, { en: 'say yes / no', uk: 'say yes / no' }],
            [{ en: 'tell the time', uk: 'tell the time' }, { en: 'say sorry · say thank you', uk: 'say sorry · say thank you' }],
          ],
          caption: {
            en: 'Fixed collocations (Cambridge “Collocation: say or tell?”) — these don’t follow the person rule, so learn them as chunks.',
            uk: 'Сталі сполучення (Cambridge «Collocation: say or tell?») — вони не підкоряються правилу особи, тож учіть їх цілими блоками.',
          },
        },
      ],
    },

    // ── 3. REPORTED QUESTIONS ──────────────────────────────────────────────
    {
      id: 'reported-questions',
      title: { en: 'Reported questions: statement order, no do, no “?”', uk: 'Непрямі питання: порядок ствердження, без do, без «?»' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A reported question is **not a question any more** — it is a statement about a question. So it takes **statement word order** (subject before verb), **no do / does / did**, and **no question mark**. **Yes/no questions** need **if** or **whether** (if is more common): *“Is the server up?”* → *She asked **if the server was** up.* **Wh-questions** keep the question word: *“Where **do you** keep the keys?”* → *He asked where **I kept** the keys.* The reporting verb is usually **ask**, or *want to know / wonder*.',
            uk: 'Непряме питання — **вже не питання**, а твердження про питання. Тож воно має **порядок ствердження** (підмет перед дієсловом), **жодного do / does / did** і **жодного знака питання**. **Загальні питання** потребують **if** чи **whether** (if уживаніше): *«Is the server up?»* → *She asked **if the server was** up.* **Wh-питання** зберігають питальне слово: *«Where **do you** keep the keys?»* → *He asked where **I kept** the keys.* Дієслово звітування — зазвичай **ask**, або *want to know / wonder*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Direct question', uk: 'Пряме питання' },
            { en: 'Reported question', uk: 'Непряме питання' },
            { en: 'What changed', uk: 'Що змінилося' },
          ],
          rows: [
            [
              { en: '“Are you free at 3?”', uk: '“Are you free at 3?”' },
              { en: 'She asked if I was free at 3.', uk: 'She asked if I was free at 3.' },
              { en: 'if + statement order + backshift', uk: 'if + порядок ствердження + backshift' },
            ],
            [
              { en: '“Did the deploy finish?”', uk: '“Did the deploy finish?”' },
              { en: 'He asked whether the deploy had finished.', uk: 'He asked whether the deploy had finished.' },
              { en: 'whether · did disappears', uk: 'whether · did зникає' },
            ],
            [
              { en: '“Where is the config file?”', uk: '“Where is the config file?”' },
              { en: 'She asked where the config file was.', uk: 'She asked where the config file was.' },
              { en: 'subject before verb', uk: 'підмет перед дієсловом' },
            ],
            [
              { en: '“Why did you change the API?”', uk: '“Why did you change the API?”' },
              { en: 'They asked why I had changed the API.', uk: 'They asked why I had changed the API.' },
              { en: 'did disappears · past → Past Perfect', uk: 'did зникає · past → Past Perfect' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: “She asked where is the server”', uk: 'Пастка україномовних: «She asked where is the server»' },
          md: {
            en: 'Ukrainian word order barely changes between *«Де сервер?»* and *«Вона спитала, де сервер»*, so the English question order slips into the report: ✕ *She asked where **is the server*** · ✕ *He asked **did I** finish.* The report is a statement: ✓ *She asked where **the server was*** · ✓ *He asked **if I had** finished.* And never a *?* at the end.',
            uk: 'В українській порядок слів майже не змінюється між *«Де сервер?»* і *«Вона спитала, де сервер»*, тож англійський порядок питання проникає у звіт: ✕ *She asked where **is the server*** · ✕ *He asked **did I** finish.* Звіт — це твердження: ✓ *She asked where **the server was*** · ✓ *He asked **if I had** finished.* І жодного *?* у кінці.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'if', uk: 'if' },
          b: { en: 'whether', uk: 'whether' },
          rows: [
            [
              { en: 'Register', uk: 'Регістр' },
              { en: 'everyday, more common', uk: 'побутове, уживаніше' },
              { en: 'a little more formal', uk: 'трохи формальніше' },
            ],
            [
              { en: 'With “or not”', uk: 'З «or not»' },
              { en: 'He asked if it was ready or not.', uk: 'He asked if it was ready or not.' },
              { en: 'He asked whether or not it was ready.', uk: 'He asked whether or not it was ready.' },
            ],
            [
              { en: 'UA', uk: 'UA' },
              { en: 'чи', uk: 'чи' },
              { en: 'чи', uk: 'чи' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          dive: 3,
          title: { en: 'The same order in polite questions', uk: 'Той самий порядок у ввічливих питаннях' },
          md: {
            en: 'Statement order is not only for reports. Every **indirect question** uses it — and indirect questions are the polite way to ask ([m22](#/m/m22-requests-politeness)): *Could you tell me where **the meeting room is**?* · *Do you know if **the client has** replied?* · *I wonder when **the release is** going out.* The question mark belongs to the outer question (*Could you tell me…?*), not to the inner one.',
            uk: 'Порядок ствердження — не лише для звітів. Кожне **непряме питання** його має — а непрямі питання і є ввічливим способом питати ([m22](#/m/m22-requests-politeness)): *Could you tell me where **the meeting room is**?* · *Do you know if **the client has** replied?* · *I wonder when **the release is** going out.* Знак питання належить зовнішньому питанню (*Could you tell me…?*), а не внутрішньому.',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: '**Subject questions look unchanged.** When the wh-word **is** the subject, the direct question already has statement order, so only the tense moves: *“Who **is** on call?”* → *She asked who **was** on call* · *“What **broke** the build?”* → *He asked what **had broken** the build.* Nothing is inverted, so nothing needs to be un-inverted.',
            uk: '**Питання до підмета виглядають незмінними.** Коли wh-слово **і є** підметом, пряме питання вже має порядок ствердження, тож змінюється лише час: *«Who **is** on call?»* → *She asked who **was** on call* · *«What **broke** the build?»* → *He asked what **had broken** the build.* Інверсії немає, тож і скасовувати нічого.',
          },
        },
      ],
    },

    // ── 4. REPORTING VERBS ─────────────────────────────────────────────────
    {
      id: 'reporting-verbs',
      title: { en: 'Reporting verbs: report the act, not every word', uk: 'Дієслова звітування: передавайте дію, а не кожне слово' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*said* and *asked* are safe, but a good report names **what the speaker did** — offered, promised, refused, suggested, apologized, warned. One verb replaces a whole sentence: *“I’ll help you with the migration if you like”* → *She **offered to help** me with the migration.* The catch: each verb has its **own pattern** after it — to + V1, person + to + V1, -ing, or a preposition + -ing — and you can’t swap them.',
            uk: '*said* і *asked* — безпечні, але добрий звіт називає **те, що мовець зробив**: запропонував, пообіцяв, відмовився, порадив, вибачився, попередив. Одне дієслово замінює ціле речення: *«I’ll help you with the migration if you like»* → *She **offered to help** me with the migration.* Підступ: кожне дієслово має **власну конструкцію** після себе — to + V1, особа + to + V1, -ing чи прийменник + -ing — і міняти їх не можна.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Pattern', uk: 'Конструкція' },
            { en: 'Verbs', uk: 'Дієслова' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'verb + to + V1', uk: 'verb + to + V1' },
              { en: 'agree · offer · promise · refuse · threaten', uk: 'agree · offer · promise · refuse · threaten' },
              { en: 'He refused to sign the contract.', uk: 'He refused to sign the contract.' },
            ],
            [
              { en: 'verb + person + to + V1', uk: 'verb + особа + to + V1' },
              { en: 'ask · tell · remind · warn · advise · encourage', uk: 'ask · tell · remind · warn · advise · encourage' },
              { en: 'She reminded me to update the docs.', uk: 'She reminded me to update the docs.' },
            ],
            [
              { en: 'verb + -ing', uk: 'verb + -ing' },
              { en: 'admit · deny · suggest · recommend', uk: 'admit · deny · suggest · recommend' },
              { en: 'He admitted breaking the build.', uk: 'He admitted breaking the build.' },
            ],
            [
              { en: 'verb + preposition + -ing', uk: 'verb + прийменник + -ing' },
              { en: 'apologize for · insist on · complain about · thank sb for', uk: 'apologize for · insist on · complain about · thank sb for' },
              { en: 'She apologized for missing the standup.', uk: 'She apologized for missing the standup.' },
            ],
            [
              { en: 'verb + (that) + clause', uk: 'verb + (that) + речення' },
              { en: 'explain · mention · admit · suggest · promise', uk: 'explain · mention · admit · suggest · promise' },
              { en: 'He explained that the API had changed.', uk: 'He explained that the API had changed.' },
            ],
          ],
          caption: {
            en: 'Patterns per British Council (Reported speech: reporting verbs) and Cambridge. The same verb patterns run through all of English — m16 is the full map.',
            uk: 'Конструкції за British Council (Reported speech: reporting verbs) і Cambridge. Ці самі конструкції проходять через усю англійську — повна мапа в m16.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'What was said', uk: 'Що сказали' },
          b: { en: 'The report with a reporting verb', uk: 'Звіт із дієсловом звітування' },
          rows: [
            [
              { en: 'Offer', uk: 'Пропозиція допомоги' },
              { en: '“I can help, if you want.”', uk: '“I can help, if you want.”' },
              { en: 'He offered to help.', uk: 'He offered to help.' },
            ],
            [
              { en: 'Request', uk: 'Прохання' },
              { en: '“Could you review the code?”', uk: '“Could you review the code?”' },
              { en: 'She asked me to review the code.', uk: 'She asked me to review the code.' },
            ],
            [
              { en: 'Suggestion', uk: 'Порада' },
              { en: '“Let’s split the ticket.”', uk: '“Let’s split the ticket.”' },
              { en: 'She suggested splitting the ticket.', uk: 'She suggested splitting the ticket.' },
            ],
            [
              { en: 'Warning', uk: 'Застереження' },
              { en: '“Don’t touch the prod database.”', uk: '“Don’t touch the prod database.”' },
              { en: 'He warned us not to touch the prod database.', uk: 'He warned us not to touch the prod database.' },
            ],
            [
              { en: 'Promise', uk: 'Обіцянка' },
              { en: '“I’ll send it tonight, I promise.”', uk: '“I’ll send it tonight, I promise.”' },
              { en: 'She promised to send it that night.', uk: 'She promised to send it that night.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“suggest to do” doesn’t exist', uk: '«suggest to do» не існує' },
          md: {
            en: 'UA *«запропонував зробити»* pushes an infinitive after *suggest*: ✕ *He suggested **to split** the ticket* · ✕ *He suggested **us to** split it.* Cambridge and British Council agree: *suggest* takes **-ing** or a **that-clause**, never a to-infinitive and never a person straight after it: ✓ *He suggested **splitting** the ticket* · ✓ *He suggested (**that**) **we split** the ticket.* If you need to name the person, use *suggest to sb that…*, or switch verbs: ✓ *He **advised us to** split it.*',
            uk: 'UA *«запропонував зробити»* підштовхує до інфінітива після *suggest*: ✕ *He suggested **to split** the ticket* · ✕ *He suggested **us to** split it.* Cambridge і British Council одностайні: *suggest* бере **-ing** або **that-речення**, ніколи to-infinitive і ніколи особу одразу після себе: ✓ *He suggested **splitting** the ticket* · ✓ *He suggested (**that**) **we split** the ticket.* Якщо треба назвати особу — *suggest to sb that…* або інше дієслово: ✓ *He **advised us to** split it.*',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Next: the full verb-pattern map (m16)', uk: 'Далі: повна мапа конструкцій (m16)' },
          md: {
            en: 'Every reporting verb above is a member of a bigger family: verbs followed by **-ing** (*admit, deny, suggest, avoid, enjoy…*) or by **to + V1** (*agree, refuse, promise, want, decide…*). [m16 — Gerund vs infinitive](#/m/m16-gerund-infinitive) maps the whole thing, including the verbs that change meaning (*stop doing / stop to do*).',
            uk: 'Кожне дієслово звітування вище належить до більшої родини: дієслова з **-ing** (*admit, deny, suggest, avoid, enjoy…*) чи з **to + V1** (*agree, refuse, promise, want, decide…*). [m16 — Gerund vs infinitive](#/m/m16-gerund-infinitive) показує повну мапу, включно з дієсловами, що змінюють значення (*stop doing / stop to do*).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**suggest that + a third person.** With *we / I / you* the clause looks ordinary: *She suggested (that) we **split** the ticket.* With *he / she / they*, formal US English uses the **base form** — the subjunctive — *She suggested that he **take** a break* (not *takes*); *should + V1* also works: *…that he **should take** a break.* In speech the -ing form avoids the question: *She suggested **taking** a break.* The same base form follows *recommend / insist / demand that…*',
            uk: '**suggest that + третя особа.** Із *we / I / you* речення виглядає звично: *She suggested (that) we **split** the ticket.* Із *he / she / they* формальна американська англійська вживає **базову форму** — subjunctive — *She suggested that he **take** a break* (не *takes*); працює й *should + V1*: *…that he **should take** a break.* У мовленні форма -ing знімає питання: *She suggested **taking** a break.* Та сама базова форма — після *recommend / insist / demand that…*',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'After a past reporting verb (said, asked, told), tenses usually step one step back: am → was, will → would, have done → had done, did → had done.',
      uk: 'Після дієслова звітування в past (said, asked, told) часи зазвичай відступають на крок: am → was, will → would, have done → had done, did → had done.',
    },
    {
      en: 'No backshift after a present reporting verb (she says…) or when what was said is still true or still ahead — though backshifting after said is never wrong.',
      uk: 'Без backshift після дієслова звітування в present (she says…) або коли сказане досі правдиве чи ще попереду — хоча backshift після said ніколи не помилка.',
    },
    {
      en: 'Pronouns follow the people; time and place words follow the clock: tomorrow → the next day, here → there — only if your moment or place is different.',
      uk: 'Займенники йдуть за людьми; слова часу й місця — за годинником: tomorrow → the next day, here → there — лише якщо ваш момент чи місце інші.',
    },
    {
      en: 'tell + person (she told me…); say without a person (she said…), or say to sb. Never “said me”.',
      uk: 'tell + особа (she told me…); say без особи (she said…) або say to sb. Ніколи «said me».',
    },
    {
      en: 'Reported questions: if / whether or the wh-word + statement order, no do / does / did, no question mark.',
      uk: 'Непрямі питання: if / whether або wh-слово + порядок ствердження, без do / does / did, без знака питання.',
    },
    {
      en: 'Requests and commands: ask / tell + person + (not) to + V1. Reporting verbs have fixed patterns — suggest + -ing or that, never suggest to do.',
      uk: 'Прохання й накази: ask / tell + особа + (not) to + V1. Дієслова звітування мають сталі конструкції — suggest + -ing або that, ніколи suggest to do.',
    },
  ],
  pitfalls: [
    {
      title: { en: 'No backshift in a story about the past', uk: 'Без backshift в історії про минуле' },
      body: {
        en: 'Ukrainian keeps the original tense («сказала, що працює»), so UA speakers write She said she works from home about last year. In a past story, step back: She said she worked from home. Keep the present only when it’s still true now.',
        uk: 'Українська зберігає початковий час («сказала, що працює»), тож україномовні пишуть She said she works from home про торік. В історії про минуле відступайте: She said she worked from home. Present лишайте, лише коли це досі правда.',
      },
    },
    {
      title: { en: '“She said me…”', uk: '«She said me…»' },
      body: {
        en: 'UA «сказала мені» → said me ✕. Use She told me (that)… or She said (that)… / She said to me…',
        uk: 'UA «сказала мені» → said me ✕. Беріть She told me (that)… або She said (that)… / She said to me…',
      },
    },
    {
      title: { en: 'Question order inside the report', uk: 'Порядок питання всередині звіту' },
      body: {
        en: 'She asked where is the server ✕ → She asked where the server was. A reported question is a statement: subject before verb, no question mark.',
        uk: 'She asked where is the server ✕ → She asked where the server was. Непряме питання — це твердження: підмет перед дієсловом, без знака питання.',
      },
    },
    {
      title: { en: 'do / did left in a reported question', uk: 'do / did, що лишилися в непрямому питанні' },
      body: {
        en: 'He asked when did I start ✕ → He asked when I (had) started. do-support exists only to make questions; a report is not one.',
        uk: 'He asked when did I start ✕ → He asked when I (had) started. do-support існує лише для утворення питань; звіт — не питання.',
      },
    },
    {
      title: { en: 'Commands reported with the imperative', uk: 'Накази з наказовим способом усередині звіту' },
      body: {
        en: 'She told me don’t merge it ✕ → She told me not to merge it. Reported commands: tell / ask + person + (not) to + V1.',
        uk: 'She told me don’t merge it ✕ → She told me not to merge it. Непрямі накази: tell / ask + особа + (not) to + V1.',
      },
    },
    {
      title: { en: '“suggest to do”', uk: '«suggest to do»' },
      body: {
        en: 'UA «запропонував зробити» → suggested to do ✕. suggest takes -ing or a that-clause: He suggested splitting the ticket / that we split the ticket.',
        uk: 'UA «запропонував зробити» → suggested to do ✕. suggest бере -ing або that-речення: He suggested splitting the ticket / that we split the ticket.',
      },
    },
    {
      title: { en: 'tomorrow / here kept a week later', uk: 'tomorrow / here, залишені через тиждень' },
      body: {
        en: 'If you report later or somewhere else, the speaker’s tomorrow is not yours: He said he would call the next day, not tomorrow. Shift time and place words only when your viewpoint really moved.',
        uk: 'Якщо звітуєте пізніше чи деінде, «завтра» мовця — не ваше: He said he would call the next day, а не tomorrow. Зсувайте слова часу й місця лише тоді, коли ваша точка огляду справді змінилася.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-reported-speech-1',
      kind: 'gap',
      sentence: '“I’m tired,” Anna said last night. → Anna said she ___ tired.',
      answers: ['was'],
      hint: { en: 'be — one step back', uk: 'be — на крок назад' },
      explain: {
        en: 'Backshift after a past reporting verb: am → was.',
        uk: 'Backshift після дієслова звітування в past: am → was.',
      },
      level: 'b1',
      tags: ['reported-speech', 'backshift'],
    },
    {
      id: 'ex-reported-speech-2',
      kind: 'gap',
      sentence: '“We will finish it next week,” they said in May. → They said they ___ finish it the following week.',
      answers: ['would'],
      hint: { en: 'the past of will', uk: 'минуле від will' },
      explain: {
        en: 'will → would, and next week → the following week, because the report comes much later.',
        uk: 'will → would, а next week → the following week, бо звіт значно пізніший.',
      },
      level: 'b1',
      tags: ['reported-speech', 'backshift'],
    },
    {
      id: 'ex-reported-speech-3',
      kind: 'gap',
      sentence: '“I have sent the invoice,” he said. → He said he ___ the invoice.',
      answers: ['had sent'],
      hint: { en: 'send — Present Perfect one step back', uk: 'send — Present Perfect на крок назад' },
      explain: {
        en: 'Present Perfect → Past Perfect: have sent → had sent. Ukrainian keeps «надіслав» — English moves the tense.',
        uk: 'Present Perfect → Past Perfect: have sent → had sent. Українська лишає «надіслав» — англійська зсуває час.',
      },
      level: 'b1',
      tags: ['reported-speech', 'backshift', 'ua-trap'],
    },
    {
      id: 'ex-reported-speech-4',
      kind: 'mcq',
      prompt: {
        en: 'Last month Ben said, “I’ll call you tomorrow.” Today you report it: Ben said he would call me ___.',
        uk: 'Минулого місяця Бен сказав: «I’ll call you tomorrow». Сьогодні ви це переказуєте: Ben said he would call me ___.',
      },
      options: ['tomorrow', 'the next day', 'yesterday'],
      correct: 1,
      explain: {
        en: 'Ben’s “tomorrow” was a month ago, so it becomes the next day. tomorrow would mean the day after today.',
        uk: 'Бенове «завтра» було місяць тому, тож воно стає the next day. tomorrow означало б день після сьогоднішнього.',
      },
      level: 'b1',
      tags: ['reported-speech', 'time-words'],
    },
    {
      id: 'ex-reported-speech-5',
      kind: 'mcq',
      prompt: { en: 'She ___ me that the build was green.', uk: 'Вона ___ мені, що збірка зелена.' },
      options: ['said', 'told', 'spoke'],
      correct: 1,
      explain: {
        en: 'A person straight after the verb → tell. said me is the classic UA calque of «сказала мені».',
        uk: 'Особа одразу після дієслова → tell. said me — класична калька з «сказала мені».',
      },
      level: 'b1',
      tags: ['reported-speech', 'say-tell', 'ua-trap'],
    },
    {
      id: 'ex-reported-speech-6',
      kind: 'gap',
      sentence: 'He ___ that the meeting had moved to 3 p.m.',
      answers: ['said', 'explained', 'mentioned', 'announced'],
      hint: { en: 'say or tell? — no person after the verb', uk: 'say чи tell? — особи після дієслова немає' },
      explain: {
        en: 'No person after the verb, so said (or another that-verb: explained, mentioned). told would need a person: He told us that…',
        uk: 'Особи після дієслова немає, тож said (або інше дієслово з that: explained, mentioned). told потребувало б особи: He told us that…',
      },
      level: 'b1',
      tags: ['reported-speech', 'say-tell'],
    },
    {
      id: 'ex-reported-speech-7',
      kind: 'mcq',
      prompt: { en: '“Where is the meeting room?” → She asked ___.', uk: '«Where is the meeting room?» → She asked ___.' },
      options: ['where was the meeting room', 'where the meeting room was', 'where did the meeting room be'],
      correct: 1,
      explain: {
        en: 'A reported question takes statement order: subject (the meeting room) before the verb (was). No question mark.',
        uk: 'Непряме питання має порядок ствердження: підмет (the meeting room) перед дієсловом (was). Без знака питання.',
      },
      level: 'b1',
      tags: ['reported-speech', 'reported-questions', 'ua-trap'],
    },
    {
      id: 'ex-reported-speech-8',
      kind: 'gap',
      sentence: '“Do you use Docker?” → He asked ___ I used Docker.',
      answers: ['if', 'whether'],
      hint: { en: 'a yes/no question needs a connector', uk: 'загальному питанню потрібен сполучник' },
      explain: {
        en: 'Yes/no questions are reported with if or whether (= UA «чи»), and do disappears.',
        uk: 'Загальні питання передають через if або whether (= UA «чи»), а do зникає.',
      },
      level: 'b1',
      tags: ['reported-speech', 'reported-questions'],
    },
    {
      id: 'ex-reported-speech-9',
      kind: 'mcq',
      prompt: { en: '“When did you join the team?” → She asked when I ___ the team.', uk: '«When did you join the team?» → She asked when I ___ the team.' },
      options: ['did join', 'had joined', 'have joined'],
      correct: 1,
      explain: {
        en: 'did disappears in a reported question, and the past steps back to the Past Perfect (joined is also heard in speech).',
        uk: 'did у непрямому питанні зникає, а минуле відступає до Past Perfect (у мовленні чути й joined).',
      },
      level: 'b1',
      tags: ['reported-speech', 'reported-questions', 'ua-trap'],
    },
    {
      id: 'ex-reported-speech-10',
      kind: 'gap',
      sentence: '“Please review my pull request.” → He asked me ___ his pull request.',
      answers: ['to review'],
      hint: { en: 'review — a request', uk: 'review — прохання' },
      explain: {
        en: 'Requests are reported as ask + person + to + V1. please disappears.',
        uk: 'Прохання передають як ask + особа + to + V1. please зникає.',
      },
      level: 'b1',
      tags: ['reported-speech', 'reporting-verbs'],
    },
    {
      id: 'ex-reported-speech-11',
      kind: 'gap',
      sentence: '“Don’t push to main.” → She told us ___ to main.',
      answers: ['not to push'],
      hint: { en: 'push — a negative command', uk: 'push — заперечний наказ' },
      explain: {
        en: 'Negative commands: tell + person + not to + V1. Not don’t push, not to not push.',
        uk: 'Заперечні накази: tell + особа + not to + V1. Не don’t push і не to not push.',
      },
      level: 'b1',
      tags: ['reported-speech', 'reporting-verbs', 'ua-trap'],
    },
    {
      id: 'ex-reported-speech-12',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['He suggested to split the ticket.', 'He suggested splitting the ticket.', 'He suggested us to split the ticket.'],
      correct: 1,
      explain: {
        en: 'suggest takes -ing (or a that-clause: that we split the ticket) — never a to-infinitive, never a person straight after it.',
        uk: 'suggest бере -ing (або that-речення: that we split the ticket) — ніколи to-infinitive, ніколи особу одразу після себе.',
      },
      level: 'b1',
      tags: ['reported-speech', 'reporting-verbs', 'ua-trap'],
    },
    {
      id: 'ex-reported-speech-13',
      kind: 'gap',
      sentence: '“Sorry I’m late.” → She apologized for ___ late.',
      answers: ['being'],
      hint: { en: 'be — after a preposition', uk: 'be — після прийменника' },
      explain: {
        en: 'apologize for + -ing: a preposition is always followed by the -ing form.',
        uk: 'apologize for + -ing: після прийменника — завжди форма -ing.',
      },
      level: 'b1',
      tags: ['reported-speech', 'reporting-verbs', 'gerund'],
    },
    {
      id: 'ex-reported-speech-14',
      kind: 'mcq',
      prompt: {
        en: 'An hour ago a colleague said, “The API is rate-limited.” It still is. Which report is WRONG?',
        uk: 'Годину тому колега сказав: «The API is rate-limited». Так і досі. Який звіт ПОМИЛКОВИЙ?',
      },
      options: ['He said the API is rate-limited.', 'He said the API was rate-limited.', 'He said me the API was rate-limited.'],
      correct: 2,
      explain: {
        en: 'A still-true fact can keep the present OR step back — both are fine. said me is wrong: say takes no person (told me / said).',
        uk: 'Факт, що досі правдивий, може лишити present АБО відступити — обидва варіанти правильні. said me — помилка: say не бере особу (told me / said).',
      },
      level: 'b1',
      tags: ['reported-speech', 'backshift', 'say-tell'],
    },
    {
      id: 'ex-reported-speech-15',
      kind: 'mcq',
      prompt: {
        en: 'You pass on a message right now. “I’m working from home today.” → She says she ___ from home today.',
        uk: 'Ви передаєте повідомлення просто зараз. «I’m working from home today.» → She says she ___ from home today.',
      },
      options: ['is working', 'was working', 'had worked'],
      correct: 0,
      explain: {
        en: 'A present reporting verb (says) — nothing moves back, and today is still today.',
        uk: 'Дієслово звітування в present (says) — нічого не відступає, і today досі today.',
      },
      level: 'b1',
      tags: ['reported-speech', 'backshift'],
    },
    {
      id: 'ex-reported-speech-16',
      kind: 'gap',
      sentence: '“Can you help me with the migration?” → She asked if I ___ help her with the migration.',
      answers: ['could'],
      hint: { en: 'the past of can', uk: 'минуле від can' },
      explain: {
        en: 'can → could after a past reporting verb; if + statement order (I could help, not could I help).',
        uk: 'can → could після дієслова звітування в past; if + порядок ствердження (I could help, а не could I help).',
      },
      level: 'b1',
      tags: ['reported-speech', 'reported-questions', 'backshift'],
    },
  ],
  seeAlso: [
    'm11-choosing-narrative',
    'm6-tense-system',
    'm13-conditionals-0-1-2',
    'm16-gerund-infinitive',
    'm17-modal-system',
    'm22-requests-politeness',
  ],
  sources: [
    {
      title: 'Cambridge Dictionary — Reported speech: indirect speech',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech',
    },
    {
      title: 'Cambridge Dictionary — Reported speech (reporting verbs)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/reporting-verbs',
    },
    {
      title: 'Cambridge Dictionary — Say or tell?',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/say-or-tell',
    },
    {
      title: 'Cambridge Dictionary — Collocation: say or tell?',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/collocation-say-or-tell',
    },
    {
      title: 'Cambridge Dictionary — Suggest',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/suggest',
    },
    {
      title: 'British Council LearnEnglish — Reported speech: statements',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements',
    },
    {
      title: 'British Council LearnEnglish — Reported speech: questions',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-questions',
    },
    {
      title: 'British Council LearnEnglish — Reported speech: reporting verbs',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-reporting-verbs',
    },
  ],
};
