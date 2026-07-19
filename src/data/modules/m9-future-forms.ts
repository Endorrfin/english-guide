import type { Module } from '../types';

/*
 * M9 · Future: will, going to & Continuous — Section II ★ Tenses (T3, per the S5 plan).
 * The future column of the matrix (m6). English has no single "future tense": you pick the form by
 * where the future comes from — a prediction / promise / on-the-spot decision → will; a plan already
 * made or a prediction from present evidence → be going to; a fixed arrangement → Present Continuous;
 * a timetable → Present Simple; a process in progress at a future moment → Future Continuous
 * (will be + V-ing). Signature visual = the parametric TenseTimeline figure (zone = future). Level a2.
 * Builds directly on m7's "present forms that point to the future" topic. Authored EN first, UA
 * second; grammar terms stay English in both languages; examples are US English. Facts verified
 * against Cambridge Dictionary grammar (future: will/shall · be going to · future continuous) and
 * British Council LearnEnglish (future forms · talking about the future) — see `sources`.
 * Dive tags: untagged = 2 🚂 core · 3 🚶 connections/contrasts · 4 🔬 fine print.
 */
export const m9: Module = {
  id: 'm9-future-forms',
  num: 9,
  section: 's6-tenses',
  order: 4,
  level: 'a2',
  title: { en: 'Future: will, going to & Continuous', uk: 'Future: will, going to і Continuous' },
  tagline: {
    en: 'There is no single "future tense" in English — there is a small toolbox. will predicts, promises and decides on the spot; be going to carries a plan you already made or a prediction from what you can see; the present tenses handle arrangements and timetables; Future Continuous puts you inside a future moment. Pick by where the future comes from.',
    uk: 'В англійській немає єдиного «майбутнього часу» — є невелика скринька інструментів. will прогнозує, обіцяє й вирішує на місці; be going to несе вже готовий план або прогноз із того, що ти бачиш; теперішні tenses беруть домовленості й розклади; Future Continuous ставить тебе всередину майбутнього моменту. Обирай за тим, звідки береться майбутнє.',
  },
  readMins: 15,
  mentalModel: {
    en: 'Don’t hunt for one future tense — ask where the future comes from. A prediction, promise or decision made as you speak → will + V1. A plan already decided, or a prediction from present evidence → be going to + V1. A fixed arrangement with other people → Present Continuous. A public timetable → Present Simple. A process in progress at a future moment → Future Continuous (will be + V-ing).',
    uk: 'Не шукай один майбутній tense — спитай, звідки береться майбутнє. Прогноз, обіцянка чи рішення в мить мовлення → will + V1. Уже вирішений план або прогноз із наявних доказів → be going to + V1. Фіксована домовленість з людьми → Present Continuous. Публічний розклад → Present Simple. Процес у розгортанні в майбутній момент → Future Continuous (will be + V-ing).',
  },
  topics: [
    // ── 1. WILL vs GOING TO ──────────────────────────────────────────────────
    {
      id: 'will-vs-going-to',
      title: { en: 'will vs going to — the two workhorses', uk: 'will проти going to — два робочі конячки' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Two forms do most of the future work, and one question splits them: **when was the decision or prediction formed?** **will + V1** is the speaker looking forward *now* — an **on-the-spot decision** (*The build failed — I’ll take a look.*), a **promise or offer** (*I’ll send the report by five.*), or a **prediction that is just an opinion** (*I think this migration will be quick.*). **be going to + V1** reaches back to something **already in place** — an **intention or plan decided before now** (*We’re going to redeploy after lunch — it’s agreed.*) or a **prediction backed by present evidence** you can point at (*Look at the error rate — this is going to page us.*).',
            uk: 'Дві форми виконують більшість майбутньої роботи, і їх розділяє одне питання: **коли сформувалося рішення чи прогноз?** **will + V1** — це мовець, що дивиться вперед *зараз*: **рішення на місці** (*The build failed — I’ll take a look.*), **обіцянка чи пропозиція** (*I’ll send the report by five.*) або **прогноз-думка** (*I think this migration will be quick.*). **be going to + V1** тягнеться до чогось **уже наявного**: **наміру чи плану, вирішеного до цього** (*We’re going to redeploy after lunch — it’s agreed.*) або **прогнозу з наявних доказів**, на які можна вказати (*Look at the error rate — this is going to page us.*).',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'will and be going to side by side: affirmative +, negative −, question ?. Example verb: deploy.',
            uk: 'will і be going to поруч: стверджувальна +, заперечна −, питальна ?. Приклад: deploy.',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'will', uk: 'will' },
            { en: 'be going to', uk: 'be going to' },
          ],
          rows: [
            [
              { en: '+ affirmative', uk: '+ стверджувальна' },
              { en: 'I’ll / will deploy', uk: 'I’ll / will deploy' },
              { en: 'am / is / are going to deploy', uk: 'am / is / are going to deploy' },
            ],
            [
              { en: '− negative', uk: '− заперечна' },
              { en: 'won’t (will not) deploy', uk: 'won’t (will not) deploy' },
              { en: 'am not / isn’t / aren’t going to deploy', uk: 'am not / isn’t / aren’t going to deploy' },
            ],
            [
              { en: '? question', uk: '? питальна' },
              { en: 'Will + subject + deploy?', uk: 'Will + subject + deploy?' },
              { en: 'Am / Is / Are + subject + going to deploy?', uk: 'Am / Is / Are + subject + going to deploy?' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: 'will — formed as you speak', uk: 'will — формується в мить мовлення' },
          b: { en: 'be going to — already in place', uk: 'be going to — уже наявне' },
          rows: [
            [
              { en: 'A decision', uk: 'Рішення' },
              { en: 'on the spot: “I’ll get it.”', uk: 'на місці: «I’ll get it.»' },
              { en: 'decided earlier: “I’m going to call them.”', uk: 'вирішене раніше: «I’m going to call them.»' },
            ],
            [
              { en: 'A prediction', uk: 'Прогноз' },
              { en: 'an opinion / hunch: “It’ll be fine.”', uk: 'думка / здогад: «It’ll be fine.»' },
              { en: 'from evidence: “Those clouds — it’s going to rain.”', uk: 'з доказів: «Those clouds — it’s going to rain.»' },
            ],
            [
              { en: 'Feel', uk: 'Відчуття' },
              { en: 'spontaneous, willing', uk: 'спонтанне, з готовністю' },
              { en: 'planned, evidenced', uk: 'сплановане, доказове' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The ringing-phone test', uk: 'Тест дзвінка телефона' },
          md: {
            en: 'When you decide **at the moment of speaking**, use **will** — never *going to*. The phone rings: *“I’ll get it.”* (not *“I’m going to get it”*). Someone drops a box: *“I’ll help you.”* If the plan already existed, flip to *going to*: *“I’m going to call the client this afternoon”* (you decided earlier). Spontaneous → will; premeditated → going to.',
            uk: 'Коли ти вирішуєш **у мить мовлення**, вживай **will** — ніколи *going to*. Дзвонить телефон: *«I’ll get it.»* (не *«I’m going to get it»*). Хтось упускає коробку: *«I’ll help you.»* Якщо план уже існував, перемикайся на *going to*: *«I’m going to call the client this afternoon»* (вирішив раніше). Спонтанне → will; заздалегідь → going to.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 3,
          title: { en: 'shall, willingness, and “gonna”', uk: 'shall, готовність і «gonna»' },
          md: {
            en: 'Three side-notes. **shall** survives mainly in British offers and suggestions with *I / we*: *Shall I open a ticket? Shall we start?* (in US English, *Should I…? / Do you want me to…?* do the same job — see m22). **will** also marks **willingness or refusal**, even of objects: *The container won’t start* = it refuses to. And in fast speech *going to* reduces to **“gonna”** (*I’m gonna check the logs*) — recognize it, but don’t write it in professional English.',
            uk: 'Три примітки. **shall** живе переважно в британських пропозиціях і порадах з *I / we*: *Shall I open a ticket? Shall we start?* (в US English те саме роблять *Should I…? / Do you want me to…?* — див. m22). **will** також позначає **готовність чи відмову**, навіть предметів: *The container won’t start* = він «відмовляється» стартувати. А в швидкому мовленні *going to* зводиться до **«gonna»** (*I’m gonna check the logs*) — впізнавай, але не пиши так у професійній англійській.',
          },
        },
      ],
    },

    // ── 2. ARRANGEMENTS: PRESENT CONTINUOUS ──────────────────────────────────
    {
      id: 'arrangements-present-continuous',
      title: { en: 'Plans without will: arrangements & timetables', uk: 'Плани без will: домовленості й розклади' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The present tenses already carry the future (m7 introduced this) — and for **plans**, they often beat *will*. **Present Continuous** = a **fixed arrangement**: a time and usually other people are already set (*I’m meeting the client on Tuesday. We’re releasing on Friday.*). **Present Simple** = a **timetable** fixed by an authority outside you (*The train leaves at 6:30. The deploy window opens at 22:00.*). **be going to** sits next to Present Continuous for plans, but stresses **intention** rather than a booked slot: *We’re going to rewrite this service* (intention) vs *We’re rewriting it in Q3* (scheduled).',
            uk: 'Теперішні tenses уже несуть майбутнє (m7 це ввів) — і для **планів** вони часто б’ють *will*. **Present Continuous** = **фіксована домовленість**: час і зазвичай інші люди вже узгоджені (*I’m meeting the client on Tuesday. We’re releasing on Friday.*). **Present Simple** = **розклад**, зафіксований інстанцією поза тобою (*The train leaves at 6:30. The deploy window opens at 22:00.*). **be going to** стоїть поруч із Present Continuous для планів, але наголошує **намір**, а не заброньований слот: *We’re going to rewrite this service* (намір) проти *We’re rewriting it in Q3* (заплановано).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'be going to — intention', uk: 'be going to — намір' },
          b: { en: 'Present Continuous — arrangement', uk: 'Present Continuous — домовленість' },
          rows: [
            [
              { en: 'What it says', uk: 'Що каже' },
              { en: 'I plan to / I mean to', uk: 'я планую / маю намір' },
              { en: 'it’s booked: time + people set', uk: 'заброньовано: час + люди узгоджені' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'I’m going to talk to the team.', uk: 'I’m going to talk to the team.' },
              { en: 'I’m talking to the team at 3.', uk: 'I’m talking to the team at 3.' },
            ],
            [
              { en: 'Timetable version', uk: 'Версія-розклад' },
              { en: '— (intention, not a schedule)', uk: '— (намір, не розклад)' },
              { en: 'Present Simple: The retro starts at 4.', uk: 'Present Simple: The retro starts at 4.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Who fixed it?', uk: 'Хто це зафіксував?' },
          md: {
            en: 'To choose between the two present futures, ask **who set it**. If *you* arranged it with someone — a meeting, a call, a trip — it feels personal → **Present Continuous** (*We’re deploying Friday*). If it sits on an official schedule nobody moves for you — trains, opening hours, a cron job → **Present Simple** (*The window opens at 22:00*). Both already point to the future even though the verb form is present.',
            uk: 'Щоб обрати між двома теперішніми майбутніми, спитай, **хто це встановив**. Якщо *ти* домовився з кимось — зустріч, дзвінок, поїздка — це особисте → **Present Continuous** (*We’re deploying Friday*). Якщо воно на офіційному розкладі, який ніхто не зсуне заради тебе — потяги, години роботи, cron-джоба → **Present Simple** (*The window opens at 22:00*). Обидва вже вказують у майбутнє, хоча форма дієслова теперішня.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'In everyday speech, **Present Continuous is the default for personal plans** — far more common than *will* for “what are you doing later?”. *What are you doing tonight? — I’m meeting friends.* Answering *“I’ll meet friends”* sounds like you just decided on the spot. Save *will* for the genuinely new decision, the promise, and the opinion-prediction; reach for the present forms whenever the plan already exists.',
            uk: 'У повсякденному мовленні **Present Continuous — дефолт для особистих планів**, куди частіший за *will* для «що робиш пізніше?». *What are you doing tonight? — I’m meeting friends.* Відповідь *«I’ll meet friends»* звучить так, ніби ти щойно вирішив на місці. Лишай *will* для справді нового рішення, обіцянки й прогнозу-думки; бери теперішні форми щоразу, коли план уже існує.',
          },
        },
      ],
    },

    // ── 3. TIME CLAUSES: PRESENT FOR FUTURE ──────────────────────────────────
    {
      id: 'time-clauses',
      title: { en: 'No will after when / if: time & condition clauses', uk: 'Жодного will після when / if: клаузи часу й умови' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'English enforces one hard rule that Ukrainian does not: after **when, as soon as, until, before, after, once, by the time** — and after **if** — you use the **present** for future time, and *will* stays only in the **main clause**. *When the build **finishes**, I **’ll** deploy.* *As soon as CI **is** green, we **’ll** merge.* *If the tests **pass**, we **’ll** release tonight.* The time or condition clause looks present but means future; the main clause carries the *will*.',
            uk: 'Англійська нав’язує одне жорстке правило, якого немає в українській: після **when, as soon as, until, before, after, once, by the time** — і після **if** — вживай **present** для майбутнього часу, а *will* лишається тільки в **головному реченні**. *When the build **finishes**, I **’ll** deploy.* *As soon as CI **is** green, we **’ll** merge.* *If the tests **pass**, we **’ll** release tonight.* Клауза часу чи умови виглядає теперішньою, але означає майбутнє; *will* несе головне речення.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The mandatory UA trap: “when it will finish”', uk: 'Обов’язкова пастка україномовних: «when it will finish»' },
          md: {
            en: 'Ukrainian puts the future in **both** halves — *«коли білд завершиться, я задеплою»* — so UA speakers double the future in English: *“When the build **will finish**, I’ll deploy.”* ✗. English forbids *will* (and *going to*) in the *when / if* clause: keep it **present** — *When the build **finishes**…*. One future marker, and it lives in the main clause. This is the single most common future-tense mistake for Ukrainian speakers.',
            uk: 'Українська ставить майбутнє в **обидві** половини — *«коли білд завершиться, я задеплою»* — тож україномовні подвоюють майбутнє в англійській: *«When the build **will finish**, I’ll deploy.»* ✗. Англійська забороняє *will* (і *going to*) у клаузі *when / if*: тримай її **теперішньою** — *When the build **finishes**…*. Один показник майбутнього, і він живе в головному реченні. Це найчастіша помилка україномовних у майбутньому часі.',
          },
        },
        {
          kind: 'compare',
          a: { en: '✓ present in the clause, will in the main', uk: '✓ present у клаузі, will у головному' },
          b: { en: '✗ will in both (the UA calque)', uk: '✗ will в обох (українська калька)' },
          rows: [
            [
              { en: 'Time', uk: 'Час' },
              { en: 'When it is ready, I’ll ping you.', uk: 'When it is ready, I’ll ping you.' },
              { en: 'When it will be ready, I’ll ping you.', uk: 'When it will be ready, I’ll ping you.' },
            ],
            [
              { en: 'Condition', uk: 'Умова' },
              { en: 'If the job fails, it’ll retry.', uk: 'If the job fails, it’ll retry.' },
              { en: 'If the job will fail, it’ll retry.', uk: 'If the job will fail, it’ll retry.' },
            ],
            [
              { en: 'The rule', uk: 'Правило' },
              { en: 'clause = present, main = will', uk: 'клауза = present, головне = will' },
              { en: 'never two futures', uk: 'ніколи два майбутні' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Two refinements. First, *when* and *if* only ban *will* when they open a **time / condition clause**. When *when / if* introduces an **indirect question** (a noun clause), *will* is fine: *I don’t know when the release **will** ship. I wonder if it **’ll** work.* Test: can you replace it with “the time that…” / “whether…”? If it’s really a question inside the sentence, keep *will*. Second, for an action **completed before** the main one, the clause can take the **present perfect**: *After I **’ve deployed**, I’ll run the smoke tests.*',
            uk: 'Два уточнення. Перше: *when* і *if* забороняють *will* лише коли відкривають **клаузу часу / умови**. Коли *when / if* вводить **непряме питання** (іменникову клаузу), *will* доречний: *I don’t know when the release **will** ship. I wonder if it **’ll** work.* Тест: чи можна замінити на «the time that…» / «whether…»? Якщо це справді питання всередині речення, лишай *will*. Друге: для дії, **завершеної до** головної, клауза може взяти **present perfect**: *After I **’ve deployed**, I’ll run the smoke tests.*',
          },
        },
      ],
    },

    // ── 4. FUTURE CONTINUOUS ─────────────────────────────────────────────────
    {
      id: 'future-continuous',
      title: { en: 'Future Continuous: inside a future moment', uk: 'Future Continuous: усередині майбутнього моменту' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '**Future Continuous** is **will be + V-ing**: a process that **will already be in progress at a future moment**. *This time tomorrow I **’ll be presenting** the demo. Don’t call at nine — we **’ll be interviewing** a candidate.* Where *will* names the whole future event, *will be + V-ing* drops you **inside** it at a chosen point. It also softens enquiries about someone’s plans — *Will you be using the meeting room?* asks without pressure, as if the plan is just running its course.',
            uk: '**Future Continuous** — це **will be + V-ing**: процес, що **вже триватиме в майбутній момент**. *This time tomorrow I **’ll be presenting** the demo. Don’t call at nine — we **’ll be interviewing** a candidate.* Там, де *will* називає цілу майбутню подію, *will be + V-ing* ставить тебе **всередину** неї в обрану точку. Воно також пом’якшує запити про чиїсь плани — *Will you be using the meeting room?* питає без тиску, ніби план просто йде своїм ходом.',
          },
        },
        {
          kind: 'figure',
          fig: 'timeline-future',
          caption: {
            en: 'The future zone of the TenseTimeline: ● will / going to names a whole future event; 〜 Future Continuous is a process already running at a chosen future moment (X). NOW is on the left. Step to the last beat for the contrast.',
            uk: 'Future-зона TenseTimeline: ● will / going to називає цілу майбутню подію; 〜 Future Continuous — процес, що вже триває в обраний майбутній момент (X). NOW ліворуч. Дійди до останнього кроку для контрасту.',
          },
        },
        {
          kind: 'compare',
          a: { en: '● will + V1 — the whole event', uk: '● will + V1 — ціла подія' },
          b: { en: '〜 will be + V-ing — inside it', uk: '〜 will be + V-ing — усередині неї' },
          rows: [
            [
              { en: 'What it frames', uk: 'Що кадрує' },
              { en: 'the event as a whole point', uk: 'подію як цілу точку' },
              { en: 'the middle of it at a moment', uk: 'середину її в певний момент' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'I’ll present the demo tomorrow.', uk: 'I’ll present the demo tomorrow.' },
              { en: 'At 10 I’ll be presenting the demo.', uk: 'At 10 I’ll be presenting the demo.' },
            ],
            [
              { en: 'Feel', uk: 'Відчуття' },
              { en: 'a fact about later', uk: 'факт про пізніше' },
              { en: 'a scene you’re in at that time', uk: 'сцена, у якій ти в той час' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          dive: 4,
          title: { en: 'The polite “will you be …?”', uk: 'Ввічливе «will you be …?»' },
          md: {
            en: 'Because Future Continuous frames the plan as **just happening anyway**, it is a soft way to ask about intentions without sounding like a request or a demand: *Will you be joining the call?* is gentler than *Are you going to join the call?* — it presumes nothing and lets the person confirm the plan already in motion. Handy in professional English when you want to check plans without pushing.',
            uk: 'Оскільки Future Continuous кадрує план як такий, що **і так відбувається**, це м’який спосіб спитати про наміри, не звучачи як прохання чи вимога: *Will you be joining the call?* делікатніше за *Are you going to join the call?* — воно нічого не припускає й дає людині підтвердити план, що вже в русі. Зручно в професійній англійській, коли хочеш звірити плани без тиску.',
          },
        },
      ],
    },
  ],

  keyPoints: [
    {
      en: 'No single “future tense”: pick by source — will (prediction/promise/on-the-spot), be going to (plan or evidence), Present Continuous (arrangement), Present Simple (timetable), Future Continuous (in progress at a future moment).',
      uk: 'Жодного єдиного «майбутнього часу»: обирай за джерелом — will (прогноз/обіцянка/на місці), be going to (план чи докази), Present Continuous (домовленість), Present Simple (розклад), Future Continuous (у процесі в майбутній момент).',
    },
    {
      en: 'will vs going to: decision or hunch formed as you speak → will; plan already made or prediction from present evidence → be going to.',
      uk: 'will проти going to: рішення чи здогад у мить мовлення → will; уже готовий план або прогноз із наявних доказів → be going to.',
    },
    {
      en: 'Forms: will + V1 / won’t + V1; be going to + V1 (keep be — never “I going to” or “will going to”); Future Continuous = will be + V-ing.',
      uk: 'Форми: will + V1 / won’t + V1; be going to + V1 (тримай be — ніколи «I going to» чи «will going to»); Future Continuous = will be + V-ing.',
    },
    {
      en: 'Present Continuous = a fixed arrangement (I’m meeting…); Present Simple = a timetable (The train leaves…). For everyday plans, the present forms usually beat will.',
      uk: 'Present Continuous = фіксована домовленість (I’m meeting…); Present Simple = розклад (The train leaves…). Для щоденних планів теперішні форми зазвичай б’ють will.',
    },
    {
      en: 'After when / if / as soon as / until / before / after, use the PRESENT for future time; will stays in the main clause. Never “when it will finish”.',
      uk: 'Після when / if / as soon as / until / before / after вживай PRESENT для майбутнього; will лишається в головному реченні. Ніколи «when it will finish».',
    },
    {
      en: 'Future Continuous (will be + V-ing) = a process in progress at a future moment, and a soft way to ask about plans (Will you be joining?).',
      uk: 'Future Continuous (will be + V-ing) = процес у розгортанні в майбутній момент і м’який спосіб спитати про плани (Will you be joining?).',
    },
  ],
  pitfalls: [
    {
      title: { en: '“When the build will finish, I’ll deploy”', uk: '«When the build will finish, I’ll deploy»' },
      body: {
        en: 'No will in a time or if clause. Keep it present: When the build finishes, I’ll deploy. If the tests pass, we’ll release. The one future marker lives in the main clause. This is the top UA-speaker future error.',
        uk: 'Жодного will у клаузі часу чи if. Тримай present: When the build finishes, I’ll deploy. If the tests pass, we’ll release. Єдиний показник майбутнього живе в головному реченні. Найчастіша помилка україномовних у майбутньому.',
      },
    },
    {
      title: { en: '“The phone’s ringing — I’m going to get it”', uk: '«The phone’s ringing — I’m going to get it»' },
      body: {
        en: 'A decision made at the moment of speaking uses will, not going to: I’ll get it. Reserve going to for a plan you already had.',
        uk: 'Рішення, ухвалене в мить мовлення, бере will, а не going to: I’ll get it. Лишай going to для плану, який уже був.',
      },
    },
    {
      title: { en: '“Look at those clouds — it will rain”', uk: '«Look at those clouds — it will rain»' },
      body: {
        en: 'A prediction from present evidence prefers be going to: it’s going to rain. will fits an opinion with no evidence (I think it’ll rain). Not a hard error, but going to is the natural choice here.',
        uk: 'Прогноз із наявних доказів воліє be going to: it’s going to rain. will пасує думці без доказів (I think it’ll rain). Не груба помилка, але тут природний вибір — going to.',
      },
    },
    {
      title: { en: '“I going to fix it” / “I will going to fix it”', uk: '«I going to fix it» / «I will going to fix it»' },
      body: {
        en: 'be going to needs the verb be and never stacks with will: I’m going to fix it. Drop be and it collapses; add will and it doubles the future.',
        uk: 'be going to потребує дієслова be й ніколи не поєднується з will: I’m going to fix it. Без be воно розвалюється; з will — подвоює майбутнє.',
      },
    },
    {
      title: { en: '“I will meet the client on Tuesday” (already arranged)', uk: '«I will meet the client on Tuesday» (вже домовлено)' },
      body: {
        en: 'For a plan that is already booked, the Present Continuous is more natural: I’m meeting the client on Tuesday. will sounds like you decided it just now.',
        uk: 'Для вже запланованого краще звучить Present Continuous: I’m meeting the client on Tuesday. will звучить так, ніби ти вирішив щойно.',
      },
    },
    {
      title: { en: '“This time tomorrow I will present”', uk: '«This time tomorrow I will present»' },
      body: {
        en: 'For an action in progress at a future moment, use Future Continuous: This time tomorrow I’ll be presenting. Plain will names the whole event, not the middle of it.',
        uk: 'Для дії в процесі в майбутній момент вживай Future Continuous: This time tomorrow I’ll be presenting. Голе will називає цілу подію, а не її середину.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-future-forms-1',
      kind: 'gap',
      sentence: 'Look at the error rate — this ___ (go / page) us. (evidence right now)',
      answers: ['is going to page', "'s going to page"],
      hint: { en: 'prediction from present evidence → be going to', uk: 'прогноз із наявних доказів → be going to' },
      explain: {
        en: 'Evidence you can point at → be going to: this is going to page us.',
        uk: 'Докази, на які можна вказати → be going to: this is going to page us.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'going-to', 'prediction'],
    },
    {
      id: 'ex-future-forms-2',
      kind: 'mcq',
      prompt: { en: '“That’s my phone — I ___ it.” (deciding right now)', uk: '«That’s my phone — I ___ it.» (вирішую просто зараз)' },
      options: ['’ll get', '’m going to get', 'get'],
      correct: 0,
      explain: {
        en: 'An on-the-spot decision uses will: I’ll get it. going to would imply you had already planned to.',
        uk: 'Рішення на місці бере will: I’ll get it. going to натякало б, що ти вже планував.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'will', 'decision'],
    },
    {
      id: 'ex-future-forms-3',
      kind: 'gap',
      sentence: 'When the build ___ (finish), I’ll deploy.',
      answers: ['finishes'],
      hint: { en: 'time clause → present, not will', uk: 'клауза часу → present, не will' },
      explain: {
        en: 'After when, use the present for future time: When the build finishes… will stays in the main clause.',
        uk: 'Після when вживай present для майбутнього: When the build finishes… will лишається в головному реченні.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'time-clauses', 'when-if'],
    },
    {
      id: 'ex-future-forms-4',
      kind: 'mcq',
      prompt: { en: '“If the tests ___, we’ll release tonight.”', uk: '«If the tests ___, we’ll release tonight.»' },
      options: ['will pass', 'pass', 'are passing'],
      correct: 1,
      explain: {
        en: 'No will in an if clause: If the tests pass… The main clause keeps will (we’ll release).',
        uk: 'Жодного will у клаузі if: If the tests pass… Головне речення тримає will (we’ll release).',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'time-clauses', 'when-if'],
    },
    {
      id: 'ex-future-forms-5',
      kind: 'gap',
      sentence: 'We ___ (go / redeploy) after lunch — it’s already agreed.',
      answers: ['are going to redeploy', "'re going to redeploy"],
      hint: { en: 'a plan decided before now → be going to', uk: 'план, вирішений до цього → be going to' },
      explain: {
        en: 'A prior, agreed plan → be going to: we’re going to redeploy after lunch.',
        uk: 'Попередній, узгоджений план → be going to: we’re going to redeploy after lunch.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'going-to', 'plans'],
    },
    {
      id: 'ex-future-forms-6',
      kind: 'mcq',
      prompt: { en: '“I ___ the client on Tuesday.” (a fixed, booked arrangement)', uk: '«I ___ the client on Tuesday.» (фіксована, заброньована домовленість)' },
      options: ['will meet', 'am meeting', 'meet'],
      correct: 1,
      explain: {
        en: 'A booked arrangement uses the Present Continuous for the future: I’m meeting the client on Tuesday.',
        uk: 'Заброньована домовленість вживає Present Continuous для майбутнього: I’m meeting the client on Tuesday.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'arrangements', 'present-continuous'],
    },
    {
      id: 'ex-future-forms-7',
      kind: 'gap',
      sentence: 'This time tomorrow I ___ (present) the demo to the board.',
      answers: ['will be presenting', "'ll be presenting"],
      hint: { en: 'in progress at a future moment → will be + V-ing', uk: 'у процесі в майбутній момент → will be + V-ing' },
      explain: {
        en: 'A process in progress at a future moment → Future Continuous: I’ll be presenting.',
        uk: 'Процес у розгортанні в майбутній момент → Future Continuous: I’ll be presenting.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'future-continuous'],
    },
    {
      id: 'ex-future-forms-8',
      kind: 'mcq',
      prompt: { en: '“I think this migration ___ fine.” (just my opinion)', uk: '«I think this migration ___ fine.» (просто моя думка)' },
      options: ['will be', 'is going to be', 'is'],
      correct: 0,
      explain: {
        en: 'An opinion-prediction with no evidence uses will: I think it will be fine (“I think” signals the hunch).',
        uk: 'Прогноз-думка без доказів бере will: I think it will be fine («I think» сигналізує здогад).',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'will', 'prediction'],
    },
    {
      id: 'ex-future-forms-9',
      kind: 'gap',
      sentence: 'Don’t worry — the migration ___ (not / take) long.',
      answers: ["won't take", 'will not take'],
      hint: { en: 'negative prediction → won’t + V1', uk: 'заперечний прогноз → won’t + V1' },
      explain: {
        en: 'Negative will: won’t + bare V1 → won’t take. (A reassurance/prediction, so will not going to.)',
        uk: 'Заперечне will: won’t + голе V1 → won’t take. (Заспокоєння/прогноз, тож will, не going to.)',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'will', 'forms'],
    },
    {
      id: 'ex-future-forms-10',
      kind: 'mcq',
      prompt: { en: '“Call me as soon as you ___ the logs.”', uk: '«Call me as soon as you ___ the logs.»' },
      options: ['will check', 'check', 'are going to check'],
      correct: 1,
      explain: {
        en: 'as soon as opens a time clause → present: as soon as you check the logs. No will/going to there.',
        uk: 'as soon as відкриває клаузу часу → present: as soon as you check the logs. Ніякого will/going to там.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'time-clauses', 'when-if'],
    },
    {
      id: 'ex-future-forms-11',
      kind: 'gap',
      sentence: 'The deploy window ___ (open) at 22:00 tonight.',
      answers: ['opens'],
      hint: { en: 'a fixed schedule → Present Simple', uk: 'фіксований графік → Present Simple' },
      explain: {
        en: 'A timetable/schedule uses the Present Simple for the future: the window opens at 22:00.',
        uk: 'Розклад/графік вживає Present Simple для майбутнього: the window opens at 22:00.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'timetable', 'present-simple'],
    },
    {
      id: 'ex-future-forms-12',
      kind: 'mcq',
      prompt: { en: '“Don’t call at nine — we ___ a candidate then.”', uk: '«Don’t call at nine — we ___ a candidate then.»' },
      options: ['interview', 'will be interviewing', 'are going to interview'],
      correct: 1,
      explain: {
        en: 'A process in progress at that future moment → Future Continuous: we’ll be interviewing.',
        uk: 'Процес у розгортанні в той майбутній момент → Future Continuous: we’ll be interviewing.',
      },
      level: 'b1',
      tags: ['tenses', 'future', 'future-continuous'],
    },
    {
      id: 'ex-future-forms-13',
      kind: 'gap',
      sentence: 'They ___ (go / launch) the beta next month.',
      answers: ['are going to launch', "'re going to launch"],
      hint: { en: 'an intention already decided → be going to', uk: 'уже вирішений намір → be going to' },
      explain: {
        en: 'A decided intention → be going to: they’re going to launch the beta next month.',
        uk: 'Вирішений намір → be going to: they’re going to launch the beta next month.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'going-to', 'plans'],
    },
    {
      id: 'ex-future-forms-14',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['When it will be ready, ping me.', 'When it is ready, ping me.', 'When it ready, ping me.'],
      correct: 1,
      explain: {
        en: 'A time clause takes the present, not will: When it is ready, ping me.',
        uk: 'Клауза часу бере present, не will: When it is ready, ping me.',
      },
      level: 'a2',
      tags: ['tenses', 'future', 'time-clauses', 'when-if'],
    },
  ],
  seeAlso: [
    'm6-tense-system',
    'm7-present-simple-continuous',
    'm8-past-simple-continuous',
    'm10-perfect-family',
    'm11-choosing-narrative',
  ],
  sources: [
    { title: 'Cambridge Dictionary — Future: will and shall', url: 'https://dictionary.cambridge.org/grammar/british-grammar/future-will-and-shall' },
    { title: 'Cambridge Dictionary — Future: be going to (I am going to work)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/future-be-going-to-i-am-going-to-work' },
    { title: 'Cambridge Dictionary — Future continuous (I will be working)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/future-continuous-i-will-be-working' },
    { title: 'British Council LearnEnglish — Future forms: will, be going to and present continuous', url: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/future-forms-will-be-going-present-continuous' },
    { title: 'British Council LearnEnglish — Talking about the future', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/talking-about-future' },
  ],
};
