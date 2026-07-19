import type { Module } from '../types';

/*
 * M7 · Present: Simple & Continuous — Section II ★ Tenses (T2, per the S5 plan).
 * The present column of the matrix (m6), attacked as the two forms that carry ≈62% of all speech
 * (Present Simple 57.5% + Present Continuous 5.1%). ONE meaning question splits them: is it
 * generally true (a fact / habit) or in progress around now? The signature visual is the
 * parametric TenseTimeline figure (zone = present). Level a1.
 * Authored EN first, UA second; grammar terms stay English in both languages; examples are US
 * English. Facts verified against Cambridge Dictionary grammar and British Council LearnEnglish
 * (present simple / present continuous / stative verbs / talking about the future) — see `sources`.
 * Dive tags: untagged = 2 🚂 core · 3 🚶 connections/contrasts · 4 🔬 fine print.
 */
export const m7: Module = {
  id: 'm7-present-simple-continuous',
  num: 7,
  section: 's6-tenses',
  order: 2,
  level: 'a1',
  title: { en: 'Present: Simple & Continuous', uk: 'Present: Simple і Continuous' },
  tagline: {
    en: 'The two present tenses do different jobs: one states what is generally true (a fact or habit), the other shows what is in progress right now. Ukrainian uses one present for both — so this split is the first thing to master.',
    uk: 'Два теперішні tenses виконують різні завдання: один констатує те, що чинне взагалі (факт чи звичка), інший показує те, що триває просто зараз. Українська має один теперішній на обидва — тож саме цей розкол варто опанувати першим.',
  },
  readMins: 14,
  mentalModel: {
    en: 'Before you speak in the present, ask one question: is this generally true, or is it happening around now? Generally true → Present Simple ● (V1, add -s for he/she/it). In progress now → Present Continuous 〜 (am/is/are + V-ing).',
    uk: 'Перш ніж говорити в теперішньому, постав одне питання: це чинне взагалі чи відбувається довкола «зараз»? Чинне взагалі → Present Simple ● (V1, додай -s для he/she/it). У процесі зараз → Present Continuous 〜 (am/is/are + V-ing).',
  },
  topics: [
    // ── 1. FORMS ─────────────────────────────────────────────────────────────
    {
      id: 'forms',
      title: { en: 'The forms: V1 (+ -s) vs am/is/are + V-ing', uk: 'Форми: V1 (+ -s) проти am/is/are + V-ing' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Both tenses are built from the bare verb, but along different lines. **Present Simple** is just **V1** — the dictionary form — with one twist: add **-s** for *he / she / it*. Its negatives and questions borrow the auxiliary **do / does**: *I work → I don’t work → Do I work?*; *she works → she doesn’t work → Does she work?* **Present Continuous** is **am / is / are + V-ing**: *I’m working, she’s working, they’re working*; negatives and questions just move *be*: *she isn’t working → Is she working?*',
            uk: 'Обидва tenses будуються з голого дієслова, але за різними лініями. **Present Simple** — це просто **V1** (словникова форма) з однією особливістю: додай **-s** для *he / she / it*. Заперечення й питання позичають допоміжне **do / does**: *I work → I don’t work → Do I work?*; *she works → she doesn’t work → Does she work?* **Present Continuous** — це **am / is / are + V-ing**: *I’m working, she’s working, they’re working*; заперечення й питання просто пересувають *be*: *she isn’t working → Is she working?*',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The two present tenses side by side: affirmative +, negative −, question ?. Example verb: work.',
            uk: 'Два теперішні tenses поруч: стверджувальна +, заперечна −, питальна ?. Приклад дієслова: work.',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: '● Present Simple', uk: '● Present Simple' },
            { en: '〜 Present Continuous', uk: '〜 Present Continuous' },
          ],
          rows: [
            [
              { en: '+ affirmative', uk: '+ стверджувальна' },
              { en: 'I/you/we/they work · he/she/it works', uk: 'I/you/we/they work · he/she/it works' },
              { en: 'am/is/are + working', uk: 'am/is/are + working' },
            ],
            [
              { en: '− negative', uk: '− заперечна' },
              { en: 'don’t / doesn’t + work', uk: 'don’t / doesn’t + work' },
              { en: 'am not / isn’t / aren’t + working', uk: 'am not / isn’t / aren’t + working' },
            ],
            [
              { en: '? question', uk: '? питальна' },
              { en: 'Do / Does + subject + work?', uk: 'Do / Does + subject + work?' },
              { en: 'Am / Is / Are + subject + working?', uk: 'Am / Is / Are + subject + working?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The -s moves — it never doubles', uk: '-s пересувається — і ніколи не подвоюється' },
          md: {
            en: 'In the affirmative the third-person **-s** sits on the main verb: *She **works** here.* The moment you add *do*, the tense marker jumps to the auxiliary and the main verb goes back to bare **V1**: *She **doesn’t work** here* (never “doesn’t works”), ***Does** she **work** here?* (never “Does she works”). One -s per clause, and *do/does* claims it in − and ?.',
            uk: 'У стверджувальній третьоособове **-s** сидить на головному дієслові: *She **works** here.* Щойно з’являється *do*, маркер часу перестрибує на допоміжне, а головне дієслово повертається до голого **V1**: *She **doesn’t work** here* (ніколи «doesn’t works»), ***Does** she **work** here?* (ніколи «Does she works»). Одне -s на клаузу, і в − та ? його забирає *do/does*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Spelling of the two endings, quickly. **-s** (he/she/it): most verbs just add *-s* (*runs, deploys*); verbs ending in *-s, -sh, -ch, -x, -o* take *-es* (*watches, goes, fixes*); a consonant + *-y* becomes *-ies* (*study → studies*, but *play → plays*). **-ing**: drop a silent *-e* (*make → making, write → writing*); double a final consonant after a single stressed vowel (*run → running, sit → sitting, commit → committing*); *-ie → -ying* (*lie → lying, die → dying*).',
            uk: 'Правопис двох закінчень, коротко. **-s** (he/she/it): більшість дієслів просто додають *-s* (*runs, deploys*); дієслова на *-s, -sh, -ch, -x, -o* беруть *-es* (*watches, goes, fixes*); приголосний + *-y* дає *-ies* (*study → studies*, але *play → plays*). **-ing**: викинь німе *-e* (*make → making, write → writing*); подвій кінцевий приголосний після одного наголошеного голосного (*run → running, sit → sitting, commit → committing*); *-ie → -ying* (*lie → lying, die → dying*).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Why do/does appears from nowhere', uk: 'Звідки береться do/does' },
          md: {
            en: 'Present Simple has no visible auxiliary in the affirmative, so English inserts a “dummy” **do/does** to carry the negative or the question — the main verb can’t do it alone. The same *do* also surfaces for **emphasis**: *I **do** like it* (contradicting a doubt). This is why *do* feels like it appears from nowhere: it is the auxiliary the affirmative kept hidden.',
            uk: 'У Present Simple немає видимого допоміжного у стверджувальній, тож англійська вставляє «порожнє» **do/does**, щоб нести заперечення чи питання — головне дієслово саме не впорається. Те саме *do* виринає й для **емфази**: *I **do** like it* (спростовуючи сумнів). Ось чому *do* ніби береться з нізвідки: це допоміжне, яке стверджувальна тримала прихованим.',
          },
        },
      ],
    },

    // ── 2. ROUTINES VS NOW ───────────────────────────────────────────────────
    {
      id: 'routines-vs-now',
      title: { en: 'Routines vs now — the meaning that chooses the tense', uk: 'Рутини проти «зараз» — зміст, що обирає tense' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Forms are the easy half. The choice is meaning: **Present Simple** states something **generally true** — a fact, a habit, a routine — that does not depend on this exact moment (*She works from home. Water boils at 100°C. I check email every morning.*). **Present Continuous** shows something **in progress around now** — started, not finished, and usually temporary (*She’s working on the report right now. It’s raining. This week I’m covering for a colleague.*). Same verb, two different claims about time.',
            uk: 'Форми — легша половина. Вибір — це зміст: **Present Simple** констатує щось **чинне взагалі** — факт, звичку, рутину — що не залежить від цієї конкретної миті (*She works from home. Water boils at 100°C. I check email every morning.*). **Present Continuous** показує щось **у процесі довкола «зараз»** — почалося, не завершилося, зазвичай тимчасове (*She’s working on the report right now. It’s raining. This week I’m covering for a colleague.*). Те саме дієслово — два різні твердження про час.',
          },
        },
        {
          kind: 'figure',
          fig: 'timeline-present',
          caption: {
            en: 'The present zone of the TenseTimeline: ● Present Simple spreads across the whole line (true in general), while 〜 Present Continuous wraps around NOW (in progress this moment). Press play, or step through.',
            uk: 'Present-зона TenseTimeline: ● Present Simple розходиться по всій лінії (чинне взагалі), а 〜 Present Continuous огортає NOW (у процесі цієї миті). Натисни play або крокуй.',
          },
        },
        {
          kind: 'compare',
          a: { en: '● Present Simple — generally true', uk: '● Present Simple — чинне взагалі' },
          b: { en: '〜 Present Continuous — in progress now', uk: '〜 Present Continuous — у процесі зараз' },
          rows: [
            [
              { en: 'The claim', uk: 'Твердження' },
              { en: 'a fact, habit or routine', uk: 'факт, звичка або рутина' },
              { en: 'an action unfolding around now', uk: 'дія, що розгортається довкола «зараз»' },
            ],
            [
              { en: 'Time feel', uk: 'Відчуття часу' },
              { en: 'permanent / repeated', uk: 'постійне / повторюване' },
              { en: 'temporary / just at the moment', uk: 'тимчасове / саме цієї миті' },
            ],
            [
              { en: 'Signal words', uk: 'Слова-сигнали' },
              { en: 'always, usually, often, every day', uk: 'always, usually, often, every day' },
              { en: 'now, right now, at the moment, currently, this week', uk: 'now, right now, at the moment, currently, this week' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'I deploy on Fridays.', uk: 'I deploy on Fridays. (щоп’ятниці)' },
              { en: 'I’m deploying right now.', uk: 'I’m deploying right now. (просто зараз)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The #1 UA-speaker slip: Simple where you need Continuous', uk: 'Промах №1 україномовних: Simple там, де треба Continuous' },
          md: {
            en: 'Ukrainian «я працюю» covers both *I work* (in general) and *I’m working* (right now). English does not — and defaulting to Simple for a live action is the classic mistake: *“I work on it now”* → **I’m working on it now**. Rule of thumb: if you could add **right now / at the moment** and it still fits, you need **am/is/are + V-ing**.',
            uk: 'Українське «я працюю» покриває і *I work* (взагалі), і *I’m working* (просто зараз). Англійська — ні, і дефолт у Simple для живої дії — класична помилка: *«I work on it now»* → **I’m working on it now**. Орієнтир: якщо можна додати **right now / at the moment** і воно пасує — потрібне **am/is/are + V-ing**.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Signal words are hints, not proof — but reliable ones. Frequency adverbs (*always, usually, often, rarely, never*) and phrases like *every day / on Mondays / twice a week* pull toward **Simple**. Markers of the moment (*now, right now, at the moment, currently, look!, listen!*) and a **temporary** frame (*this week, these days, this month*) pull toward **Continuous**. Position matters for frequency adverbs: they go **before the main verb** but **after *be*** — *I **usually** deploy on Friday*, but *I **am usually** careful*.',
            uk: 'Слова-сигнали — це підказки, не доказ, але надійні. Прислівники частоти (*always, usually, often, rarely, never*) і фрази на кшталт *every day / on Mondays / twice a week* тягнуть до **Simple**. Маркери моменту (*now, right now, at the moment, currently, look!, listen!*) і **тимчасова** рамка (*this week, these days, this month*) тягнуть до **Continuous**. Позиція прислівників частоти важлива: вони йдуть **перед головним дієсловом**, але **після *be*** — *I **usually** deploy on Friday*, але *I **am usually** careful*.',
          },
        },
      ],
    },

    // ── 3. STATE VERBS ───────────────────────────────────────────────────────
    {
      id: 'state-verbs',
      title: { en: 'State verbs — the big exception to “-ing means now”', uk: 'Дієслова стану — головний виняток до «-ing означає зараз»' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'One rule breaks the neat picture: **state (stative) verbs** describe a state, not an action, so they stay in **Present Simple even when the meaning is “right now.”** You *know* something, you don’t “are knowing” it. The usual families: **thoughts/opinions** (know, think, believe, understand, agree, mean, remember), **feelings** (like, love, hate, want, need, prefer), **senses** (see, hear, smell, taste, seem, appear), **possession** (have, own, belong, contain, cost).',
            uk: 'Одне правило ламає охайну картину: **дієслова стану (stative)** описують стан, а не дію, тож лишаються в **Present Simple навіть коли зміст «просто зараз».** Ти щось *know*, а не «are knowing». Звичні родини: **думки/погляди** (know, think, believe, understand, agree, mean, remember), **почуття** (like, love, hate, want, need, prefer), **чуття** (see, hear, smell, taste, seem, appear), **володіння** (have, own, belong, contain, cost).',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“I am agree” and “I am knowing” — two calques to kill', uk: '«I am agree» і «I am knowing» — дві кальки, які треба вбити' },
          md: {
            en: 'In Ukrainian «згоден» is a short adjective, so *I am agree* feels right — but **agree is a verb**: *I **agree** with your review.* And because state verbs refuse *-ing*, *I am knowing / wanting / needing* are all wrong: *I **know** the answer. I **want** a break. We **need** more RAM.* Say the bare present.',
            uk: 'В українській «згоден» — короткий прикметник, тож *I am agree* здається правильним, але **agree — дієслово**: *I **agree** with your review.* А оскільки дієслова стану не беруть *-ing*, *I am knowing / wanting / needing* — усе хибне: *I **know** the answer. I **want** a break. We **need** more RAM.* Кажи голий present.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'State meaning → Simple', uk: 'Значення стану → Simple' },
          b: { en: 'Action meaning → Continuous', uk: 'Значення дії → Continuous' },
          rows: [
            [
              { en: 'think', uk: 'think' },
              { en: 'I think it’s a good design. (opinion)', uk: 'I think it’s a good design. (думка)' },
              { en: 'I’m thinking about the trade-offs. (processing)', uk: 'I’m thinking about the trade-offs. (обмірковую)' },
            ],
            [
              { en: 'have', uk: 'have' },
              { en: 'I have two monitors. (possession)', uk: 'I have two monitors. (володіння)' },
              { en: 'I’m having lunch. (activity)', uk: 'I’m having lunch. (діяльність)' },
            ],
            [
              { en: 'see', uk: 'see' },
              { en: 'I see the bug now. (understand)', uk: 'I see the bug now. (розумію)' },
              { en: 'We’re seeing the client tomorrow. (meeting)', uk: 'We’re seeing the client tomorrow. (зустріч)' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: 'Some state verbs go Continuous when their meaning shifts from a state to an activity — that is the whole trick above. A few live in both worlds naturally (*feel, look, ache*): *I feel / I’m feeling fine* are both fine. And fixed idioms bend the rule on purpose for effect — the ad slogan *I’m lovin’ it* uses Continuous on a state verb precisely because it sounds fresh and momentary. Treat these as marked exceptions, not a licence to *-ing* every state verb.',
            uk: 'Деякі дієслова стану переходять у Continuous, коли їхнє значення зсувається зі стану до діяльності — це і є весь фокус вище. Кілька природно живуть в обох світах (*feel, look, ache*): *I feel / I’m feeling fine* — обидва нормальні. А сталі ідіоми гнуть правило навмисно заради ефекту — слоган *I’m lovin’ it* ставить Continuous на дієслово стану саме тому, що це звучить свіжо й миттєво. Сприймай це як позначені винятки, а не дозвіл ставити *-ing* на кожне дієслово стану.',
          },
        },
      ],
    },

    // ── 4. PRESENT FOR THE FUTURE (INTRO) ────────────────────────────────────
    {
      id: 'present-for-future-intro',
      title: { en: 'Present forms that point to the future', uk: 'Теперішні форми, що вказують у майбутнє' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Both present tenses can talk about the future — no *will* required. **Present Continuous** = a **fixed personal arrangement**, something already set up: *I’m meeting the client on Tuesday. We’re releasing on Friday.* **Present Simple** = a **timetable or schedule**, fixed by an authority beyond you: *The train leaves at 6:30. The deploy window opens at 22:00.* This is just an intro — m9 handles *will*, *going to* and the full future.',
            uk: 'Обидва теперішні tenses можуть говорити про майбутнє — без *will*. **Present Continuous** = **фіксована особиста домовленість**, щось уже налаштоване: *I’m meeting the client on Tuesday. We’re releasing on Friday.* **Present Simple** = **розклад чи графік**, зафіксований інстанцією поза тобою: *The train leaves at 6:30. The deploy window opens at 22:00.* Це лише вступ — m9 бере *will*, *going to* і все майбутнє.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Arrangement vs timetable — who fixed it?', uk: 'Домовленість чи розклад — хто це зафіксував?' },
          md: {
            en: 'Ask **who set it**. If *you* arranged it with someone (a meeting, a call, a trip), it feels personal → **Present Continuous**. If it sits on an official schedule nobody moves for you (trains, timetables, opening hours, a cron job), → **Present Simple**. Both are already about the future even though the verb form is present.',
            uk: 'Спитай, **хто це встановив**. Якщо *ти* домовився з кимось (зустріч, дзвінок, поїздка), це особисте → **Present Continuous**. Якщо воно на офіційному розкладі, який ніхто не зсуне заради тебе (потяги, розклади, години роботи, cron-джоба), → **Present Simple**. Обидва вже про майбутнє, хоч форма дієслова теперішня.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'A related habit English enforces: after **when, if, as soon as, until, before, after**, use the **present** for future time, never *will* — *When the build **finishes**, I’ll deploy* (not “when the build will finish”). The main clause keeps *will*; the time/condition clause switches to the present. You will meet this rule again in m9 and m11 — for now, just notice that “present form, future meaning” is everywhere.',
            uk: 'Пов’язана звичка, яку англійська нав’язує: після **when, if, as soon as, until, before, after** вживай **present** для майбутнього часу, ніколи *will* — *When the build **finishes**, I’ll deploy* (не «when the build will finish»). Головне речення тримає *will*; підрядне часу/умови переходить у present. Це правило знову зустрінеться в m9 та m11 — а поки просто помічай, що «теперішня форма, майбутній зміст» — всюди.',
          },
        },
      ],
    },
  ],

  keyPoints: [
    {
      en: 'Two present tenses, one question: generally true → ● Present Simple; in progress around now → 〜 Present Continuous. Ukrainian’s single present splits into these two.',
      uk: 'Два теперішні tenses, одне питання: чинне взагалі → ● Present Simple; у процесі зараз → 〜 Present Continuous. Єдиний теперішній української розколюється на ці два.',
    },
    {
      en: 'Forms: Simple = V1 (+ -s for he/she/it), do/does for − and ?; Continuous = am/is/are + V-ing, move be for − and ?.',
      uk: 'Форми: Simple = V1 (+ -s для he/she/it), do/does для − та ?; Continuous = am/is/are + V-ing, пересунь be для − та ?.',
    },
    {
      en: 'The third-person -s lives on the main verb in +, but jumps to the auxiliary in − / ?: He works → He doesn’t work → Does he work?',
      uk: 'Третьоособове -s сидить на головному дієслові в +, але перестрибує на допоміжне в − / ?: He works → He doesn’t work → Does he work?',
    },
    {
      en: 'State verbs (know, want, agree, like, believe, have, see…) stay Simple even about now: I agree, I know — never “I am agree / I am knowing”.',
      uk: 'Дієслова стану (know, want, agree, like, believe, have, see…) лишаються в Simple навіть про «зараз»: I agree, I know — ніколи «I am agree / I am knowing».',
    },
    {
      en: 'Signal words steer you: always / usually / every day → Simple; now / at the moment / currently / this week → Continuous.',
      uk: 'Слова-сигнали скеровують: always / usually / every day → Simple; now / at the moment / currently / this week → Continuous.',
    },
    {
      en: 'Present forms also point to the future: Continuous for a fixed arrangement (I’m meeting…), Simple for a timetable (The train leaves…).',
      uk: 'Теперішні форми теж вказують у майбутнє: Continuous для фіксованої домовленості (I’m meeting…), Simple для розкладу (The train leaves…).',
    },
  ],
  pitfalls: [
    {
      title: { en: '“I work on it right now”', uk: '«I work on it right now»' },
      body: {
        en: 'A live action at this moment needs Continuous: I’m working on it right now. Present Simple states the general fact (I work on this project = it’s my job). This is the most common UA-speaker present-tense error.',
        uk: 'Жива дія цієї миті вимагає Continuous: I’m working on it right now. Present Simple констатує загальний факт (I work on this project = це моя робота). Найчастіша помилка україномовних у теперішньому.',
      },
    },
    {
      title: { en: '“I am agree”', uk: '«I am agree»' },
      body: {
        en: 'Agree is a verb, not an adjective (Ukrainian «згоден» misleads): I agree with your review. No am/is/are before it.',
        uk: 'Agree — дієслово, а не прикметник (українське «згоден» збиває): I agree with your review. Жодних am/is/are перед ним.',
      },
    },
    {
      title: { en: '“I am knowing / wanting / needing”', uk: '«I am knowing / wanting / needing»' },
      body: {
        en: 'State verbs refuse -ing even about now: I know the answer, I want a break, we need more RAM. If the verb is a state (thought, feeling, sense, possession), use the bare present.',
        uk: 'Дієслова стану не беруть -ing навіть про «зараз»: I know the answer, I want a break, we need more RAM. Якщо дієслово — стан (думка, почуття, чуття, володіння), вживай голий present.',
      },
    },
    {
      title: { en: '“He doesn’t works” / “Does she works?”', uk: '«He doesn’t works» / «Does she works?»' },
      body: {
        en: 'The -s marks the tense only once. When do/does appears, the main verb returns to V1: He doesn’t work; Does she work? Never keep the -s on both.',
        uk: 'Показник -s маркує час лише раз. Коли з’являється do/does, головне дієслово повертається до V1: He doesn’t work; Does she work? Ніколи не лишай -s на обох.',
      },
    },
    {
      title: { en: '“She work here”', uk: '«She work here»' },
      body: {
        en: 'The third-person -s is not optional in the affirmative: She works here. He / she / it always takes -s in the present simple.',
        uk: 'Третьоособове -s не опційне у стверджувальній: She works here. He / she / it у present simple завжди беруть -s.',
      },
    },
    {
      title: { en: 'Over-using Continuous for permanent facts', uk: 'Надуживання Continuous для постійних фактів' },
      body: {
        en: 'Not everything at the moment is Continuous. General truths and permanent states stay Simple: Water boils at 100°C (not “is boiling” as a rule); The service runs on port 8080. Continuous is for the temporary and in-progress.',
        uk: 'Не все «в цей момент» — Continuous. Загальні істини й постійні стани лишаються Simple: Water boils at 100°C (не «is boiling» як правило); The service runs on port 8080. Continuous — для тимчасового й того, що в процесі.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-present-simple-continuous-1',
      kind: 'mcq',
      prompt: { en: '“Be quiet — the pipeline ___ the database right now.”', uk: '«Be quiet — the pipeline ___ the database right now.»' },
      options: ['migrates', 'is migrating', 'migrate'],
      correct: 1,
      explain: {
        en: '“Right now” = a live action → Present Continuous: is migrating.',
        uk: '«Right now» = жива дія → Present Continuous: is migrating.',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'continuous'],
    },
    {
      id: 'ex-present-simple-continuous-2',
      kind: 'gap',
      sentence: 'She ___ (work) from home on Fridays.',
      answers: ['works'],
      hint: { en: 'a routine, he/she/it → add -s', uk: 'рутина, he/she/it → додай -s' },
      explain: {
        en: 'A weekly routine (a general fact) → Present Simple, third person: works.',
        uk: 'Щотижнева рутина (загальний факт) → Present Simple, третя особа: works.',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'simple', 'habits'],
    },
    {
      id: 'ex-present-simple-continuous-3',
      kind: 'mcq',
      prompt: { en: 'Which is correct?', uk: 'Яке речення правильне?' },
      options: ['I am agree with your review.', 'I am agreeing with your review.', 'I agree with your review.'],
      correct: 2,
      explain: {
        en: 'Agree is a state verb AND a verb (not an adjective): plain Present Simple — I agree.',
        uk: 'Agree — дієслово стану І дієслово (не прикметник): просте Present Simple — I agree.',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'state-verbs'],
    },
    {
      id: 'ex-present-simple-continuous-4',
      kind: 'gap',
      sentence: 'Right now the tests ___ (run) on CI — let’s wait.',
      answers: ['are running'],
      hint: { en: 'in progress at this moment', uk: 'у процесі цієї миті' },
      explain: {
        en: 'A process happening now → Present Continuous: are running.',
        uk: 'Процес, що відбувається зараз → Present Continuous: are running.',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'continuous'],
    },
    {
      id: 'ex-present-simple-continuous-5',
      kind: 'gap',
      sentence: 'He ___ (not / like) long stand-up meetings.',
      answers: ['does not like', "doesn't like"],
      hint: { en: 'general fact, negative, he → do/does', uk: 'загальний факт, заперечення, he → do/does' },
      explain: {
        en: 'A general fact in the negative uses doesn’t + V1: He doesn’t like… (never “doesn’t likes”).',
        uk: 'Загальний факт у запереченні бере doesn’t + V1: He doesn’t like… (ніколи «doesn’t likes»).',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'simple', 'forms'],
    },
    {
      id: 'ex-present-simple-continuous-6',
      kind: 'mcq',
      prompt: { en: '“Wait — I ___ about your offer.” (turning it over in my head)', uk: '«Wait — I ___ about your offer.» (обмірковую)' },
      options: ['think', 'am thinking', 'thinks'],
      correct: 1,
      explain: {
        en: 'Here think means active processing, not an opinion → Present Continuous: am thinking.',
        uk: 'Тут think означає активне обмірковування, а не думку → Present Continuous: am thinking.',
      },
      level: 'a2',
      tags: ['tenses', 'present', 'state-verbs'],
    },
    {
      id: 'ex-present-simple-continuous-7',
      kind: 'gap',
      sentence: '___ she deploy on weekends? (question, third person)',
      answers: ['does'],
      hint: { en: 'the auxiliary carries the -s', uk: 'допоміжне несе -s' },
      explain: {
        en: 'A Present Simple question with he/she/it starts with Does; the main verb stays bare: Does she deploy…?',
        uk: 'Питання Present Simple з he/she/it починається з Does; головне дієслово лишається голим: Does she deploy…?',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'simple', 'forms'],
    },
    {
      id: 'ex-present-simple-continuous-8',
      kind: 'mcq',
      prompt: { en: 'Which signal word fits Present Continuous?', uk: 'Яке слово-сигнал пасує Present Continuous?' },
      options: ['every day', 'usually', 'at the moment'],
      correct: 2,
      explain: {
        en: '“At the moment” marks something in progress now → Present Continuous. “Every day / usually” signal a routine → Simple.',
        uk: '«At the moment» позначає щось у процесі зараз → Present Continuous. «Every day / usually» сигналізують рутину → Simple.',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'signal-words'],
    },
    {
      id: 'ex-present-simple-continuous-9',
      kind: 'gap',
      sentence: 'This week I ___ (cover) for a colleague on call.',
      answers: ['am covering'],
      hint: { en: 'temporary, this week → Continuous', uk: 'тимчасово, this week → Continuous' },
      explain: {
        en: '“This week” frames a temporary situation → Present Continuous: am covering.',
        uk: '«This week» задає тимчасову ситуацію → Present Continuous: am covering.',
      },
      level: 'a2',
      tags: ['tenses', 'present', 'continuous'],
    },
    {
      id: 'ex-present-simple-continuous-10',
      kind: 'mcq',
      prompt: { en: '“We ___ the client on Tuesday.” (it’s already arranged)', uk: '«We ___ the client on Tuesday.» (уже домовлено)' },
      options: ['meet', 'are meeting', 'will meet'],
      correct: 1,
      explain: {
        en: 'A fixed personal arrangement uses the Present Continuous for the future: are meeting.',
        uk: 'Фіксована особиста домовленість вживає Present Continuous для майбутнього: are meeting.',
      },
      level: 'a2',
      tags: ['tenses', 'present', 'future'],
    },
    {
      id: 'ex-present-simple-continuous-11',
      kind: 'gap',
      sentence: 'The deploy window ___ (open) at 22:00 tonight.',
      answers: ['opens'],
      hint: { en: 'a fixed schedule → Present Simple', uk: 'фіксований графік → Present Simple' },
      explain: {
        en: 'A timetable/schedule uses the Present Simple for the future: opens at 22:00.',
        uk: 'Розклад/графік вживає Present Simple для майбутнього: opens at 22:00.',
      },
      level: 'a2',
      tags: ['tenses', 'present', 'future'],
    },
    {
      id: 'ex-present-simple-continuous-12',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['She doesn’t works here.', 'She don’t work here.', 'She doesn’t work here.'],
      correct: 2,
      explain: {
        en: 'doesn’t + bare V1, and doesn’t (not don’t) for she: She doesn’t work here.',
        uk: 'doesn’t + голе V1, і doesn’t (не don’t) для she: She doesn’t work here.',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'simple', 'forms'],
    },
    {
      id: 'ex-present-simple-continuous-13',
      kind: 'gap',
      sentence: 'Water ___ (boil) at 100°C at sea level.',
      answers: ['boils'],
      hint: { en: 'a general truth, not “right now”', uk: 'загальна істина, не «просто зараз»' },
      explain: {
        en: 'A permanent general truth → Present Simple: boils. (“is boiling” would mean it is bubbling right now.)',
        uk: 'Постійна загальна істина → Present Simple: boils. («is boiling» означало б, що вона кипить просто зараз.)',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'simple'],
    },
    {
      id: 'ex-present-simple-continuous-14',
      kind: 'gap',
      sentence: 'Look — it ___ (rain), so the outdoor demo is off.',
      answers: ['is raining', "'s raining"],
      hint: { en: '“Look —” points at this moment', uk: '«Look —» вказує на цю мить' },
      explain: {
        en: '“Look —” signals something happening now → Present Continuous: is raining.',
        uk: '«Look —» сигналізує те, що відбувається зараз → Present Continuous: is raining.',
      },
      level: 'a1',
      tags: ['tenses', 'present', 'continuous'],
    },
  ],
  seeAlso: [
    'm6-tense-system',
    'm8-past-simple-continuous',
    'm9-future-forms',
    'm10-perfect-family',
  ],
  sources: [
    { title: 'Cambridge Dictionary — Present simple (I work)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/present-simple-i-work' },
    { title: 'Cambridge Dictionary — Present continuous (I am working)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/present-continuous-i-am-working' },
    { title: 'British Council LearnEnglish — Present continuous', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-continuous' },
    { title: 'British Council LearnEnglish — Stative verbs', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/stative-verbs' },
    { title: 'British Council LearnEnglish — Talking about the future', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/talking-about-future' },
  ],
};
