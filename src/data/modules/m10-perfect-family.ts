import type { Module } from '../types';

/*
 * M10 · The Perfect Family — Section II ★ Tenses (T3, per the S5 plan).
 * The perfect aspect attacked ONCE as a family: ⤺ a link back from a reference point. Pick the
 * point — NOW (Present Perfect), a past moment (Past Perfect), a future moment (Future Perfect) —
 * and say have / had / will have + V3. The flagship contrast is Present Perfect vs Past Simple
 * (the disconnected ● dot). The mandatory UA pitfalls live here: Ukrainian has no perfect, so a
 * finished-time word wrongly gets have+V3, and "since 2022" wrongly gets Past Simple. Signature
 * visual = the parametric TenseTimeline figure (zone = perfect). have + V3 also bridges to the
 * modal deduction of m21 (must have + V3). Level b1.
 * Authored EN first, UA second; grammar terms stay English in both languages; examples are US
 * English. Facts verified against Cambridge Dictionary grammar (present perfect · past simple or
 * present perfect · past perfect · present perfect simple vs continuous · future perfect) — see
 * `sources`. Dive tags: untagged = 2 🚂 core · 3 🚶 connections/contrasts · 4 🔬 fine print.
 */
export const m10: Module = {
  id: 'm10-perfect-family',
  num: 10,
  section: 's6-tenses',
  order: 5,
  level: 'b1',
  title: { en: 'The Perfect Family', uk: 'Родина Perfect' },
  tagline: {
    en: 'Attack the perfect once, as one idea: a link back from a reference point. Present Perfect links a past action to now; Past Perfect links back from a past moment; Future Perfect from a future one. Master the Present-Perfect-vs-Past-Simple line — Ukrainian has no perfect at all — and the rest of the family falls into place.',
    uk: 'Атакуй perfect один раз, як одну ідею: зв’язок назад від точки відліку. Present Perfect в’яже минулу дію з «тепер»; Past Perfect в’яже назад від минулого моменту; Future Perfect — від майбутнього. Опануй лінію Present Perfect проти Past Simple — в українській perfect немає взагалі — і решта родини стане на місце.',
  },
  readMins: 17,
  mentalModel: {
    en: 'Perfect = a link back ⤺ from a reference point. Choose the point — now, a past moment, or a future moment — and say have / had / will have + V3. Unlike Past Simple’s disconnected dot ● (a finished event, cut off), a perfect form always connects its action to that point: the result reaches the reference time.',
    uk: 'Perfect = зв’язок назад ⤺ від точки відліку. Обери точку — тепер, минулий момент чи майбутній — і скажи have / had / will have + V3. На відміну від відірваної крапки ● Past Simple (завершена подія, відрізана), форма perfect завжди сполучає свою дію з тією точкою: результат сягає часу відліку.',
  },
  topics: [
    // ── 1. PRESENT PERFECT vs PAST SIMPLE ────────────────────────────────────
    {
      id: 'present-perfect-vs-past-simple',
      title: { en: 'Present Perfect vs Past Simple — the flagship line', uk: 'Present Perfect проти Past Simple — флагманська лінія' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '**Present Perfect** (**have / has + V3**) ties a past action to **now**: the exact *when* is **not stated**, and what matters is the **result or relevance today**, an **unfinished time period** (today, this week), or a **life experience** (ever, never). *I’ve fixed the bug — you can redeploy* (result now). *She has worked here for three years* (still true). **Past Simple** (**V2**) is a **finished event at a known past time** — a closed dot, cut off from now. The decisive test: a **finished-time word** — *yesterday, last week, in 2020, at 3 p.m., … ago* — **forces Past Simple**.',
            uk: '**Present Perfect** (**have / has + V3**) в’яже минулу дію з **тепер**: точне *коли* **не називається**, а важить **результат чи актуальність сьогодні**, **незавершений період** (today, this week) чи **життєвий досвід** (ever, never). *I’ve fixed the bug — you can redeploy* (результат зараз). *She has worked here for three years* (досі так). **Past Simple** (**V2**) — це **завершена подія у відомий минулий час**, відрізана крапка. Вирішальний тест: **слово завершеного часу** — *yesterday, last week, in 2020, at 3 p.m., … ago* — **вимагає Past Simple**.',
          },
        },
        {
          kind: 'figure',
          fig: 'timeline-perfect',
          caption: {
            en: 'The perfect zone of the TenseTimeline: ● Past Simple is a finished dot cut off in the past; ⤺ Present Perfect is the same past action with an arrow linking it forward to NOW. Step through to see the link appear.',
            uk: 'Perfect-зона TenseTimeline: ● Past Simple — завершена крапка, відрізана в минулому; ⤺ Present Perfect — та сама минула дія зі стрілкою, що в’яже її вперед до NOW. Крокуй, щоб побачити, як з’являється зв’язок.',
          },
        },
        {
          kind: 'compare',
          a: { en: '⤺ Present Perfect — reaches now', uk: '⤺ Present Perfect — сягає тепер' },
          b: { en: '● Past Simple — finished, cut off', uk: '● Past Simple — завершене, відрізане' },
          rows: [
            [
              { en: 'Time word', uk: 'Слово часу' },
              { en: 'none / unfinished (today, ever, yet)', uk: 'немає / незавершене (today, ever, yet)' },
              { en: 'finished (yesterday, in 2020, ago)', uk: 'завершене (yesterday, in 2020, ago)' },
            ],
            [
              { en: 'Keys example', uk: 'Приклад із ключами' },
              { en: 'I’ve lost my keys. (still lost now)', uk: 'I’ve lost my keys. (досі загублені)' },
              { en: 'I lost my keys yesterday.', uk: 'I lost my keys yesterday.' },
            ],
            [
              { en: 'Report example', uk: 'Приклад зі звітом' },
              { en: 'Have you seen the report? (any time up to now)', uk: 'Have you seen the report? (будь-коли досі)' },
              { en: 'Did you see it this morning? (finished period)', uk: 'Did you see it this morning? (завершений період)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The mandatory UA trap: “I have seen him yesterday”', uk: 'Обов’язкова пастка україномовних: «I have seen him yesterday»' },
          md: {
            en: 'Ukrainian has **no perfect tense**, so UA speakers reach for *have + V3* whenever the past feels relevant — but a **finished-time word blocks it**: *“I have seen him yesterday”* ✗ → *I **saw** him yesterday.* *“I have finished it yesterday”* ✗ → *I **finished** it yesterday.* If you can name a finished when (yesterday, last sprint, in March), you must use **Past Simple**. Keep Present Perfect for the *unnamed* or *unfinished* time.',
            uk: 'В українській **немає perfect**, тож україномовні хапаються за *have + V3* щоразу, коли минуле здається доречним, — але **слово завершеного часу це блокує**: *«I have seen him yesterday»* ✗ → *I **saw** him yesterday.* *«I have finished it yesterday»* ✗ → *I **finished** it yesterday.* Якщо можна назвати завершене «коли» (yesterday, last sprint, in March), потрібен **Past Simple**. Лишай Present Perfect для *неназваного* чи *незавершеного* часу.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Two patterns worth recognizing. **News**: the Present Perfect *announces* something fresh, then the Past Simple fills in the fixed details — *The team **has shipped** v2. They **rebuilt** the search index and **cut** latency in half.* **Region**: American English often uses the Past Simple where British English prefers the Present Perfect, especially with *just, already, yet* — *“Did you eat yet?”* (US) vs *“Have you eaten yet?”* (UK/standard). This guide teaches the standard Present-Perfect pattern; recognize the AmE variant when you hear it.',
            uk: 'Два патерни, які варто впізнавати. **Новини**: Present Perfect *оголошує* щось свіже, а тоді Past Simple заповнює фіксовані деталі — *The team **has shipped** v2. They **rebuilt** the search index and **cut** latency in half.* **Регіон**: американська англійська часто вживає Past Simple там, де британська воліє Present Perfect, надто з *just, already, yet* — *«Did you eat yet?»* (US) проти *«Have you eaten yet?»* (UK/стандарт). Цей гайд навчає стандартного патерну Present Perfect; впізнавай варіант AmE, коли чуєш.',
          },
        },
      ],
    },

    // ── 2. FOR / SINCE / ALREADY / YET ───────────────────────────────────────
    {
      id: 'for-since-already-yet',
      title: { en: 'The perfect’s signal words: for, since, already, yet', uk: 'Слова-сигнали perfect: for, since, already, yet' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A few words travel with the Present Perfect and pin down its meaning. **for + a length of time** (*for three years, for ten minutes*) measures the **duration**. **since + a start point** (*since 2020, since Monday, since I joined*) names **when it began** — and the stretch runs up to now. **already** = sooner than expected (in the affirmative: *I’ve already merged it*). **yet** = up to now, in negatives and questions (*Have you finished yet? — Not yet.*). **just** = a moment ago (*I’ve just seen it*). **ever / never** = at any / no time in life (*Have you ever used Rust?*).',
            uk: 'Кілька слів подорожують із Present Perfect і фіксують його зміст. **for + тривалість** (*for three years, for ten minutes*) міряє **тривалість**. **since + точка початку** (*since 2020, since Monday, since I joined*) називає, **коли почалося** — і відрізок тягнеться до тепер. **already** = раніше, ніж очікували (у стверджувальній: *I’ve already merged it*). **yet** = досі, у запереченнях і питаннях (*Have you finished yet? — Not yet.*). **just** = щойно (*I’ve just seen it*). **ever / never** = будь-коли / ніколи в житті (*Have you ever used Rust?*).',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'for vs since, and where already / yet / just sit.',
            uk: 'for проти since, і де стоять already / yet / just.',
          },
          head: [
            { en: 'Word', uk: 'Слово' },
            { en: 'Takes', uk: 'Бере' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'for', uk: 'for' },
              { en: 'a length of time', uk: 'тривалість' },
              { en: 'I’ve been on call for two days.', uk: 'I’ve been on call for two days.' },
            ],
            [
              { en: 'since', uk: 'since' },
              { en: 'a start point', uk: 'точку початку' },
              { en: 'I’ve been on call since Monday.', uk: 'I’ve been on call since Monday.' },
            ],
            [
              { en: 'already', uk: 'already' },
              { en: '+ (sooner than expected)', uk: '+ (раніше, ніж очікували)' },
              { en: 'She’s already approved it.', uk: 'She’s already approved it.' },
            ],
            [
              { en: 'yet', uk: 'yet' },
              { en: '− / ? (up to now)', uk: '− / ? (досі)' },
              { en: 'It hasn’t deployed yet.', uk: 'It hasn’t deployed yet.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The mandatory UA trap: “I work here since 2022”', uk: 'Обов’язкова пастка україномовних: «I work here since 2022»' },
          md: {
            en: 'A period that **starts in the past and reaches now** needs the **Present Perfect**, not the present or the past: *“I work here since 2022”* ✗ and *“I worked here since 2022”* ✗ → *I **have worked** here since 2022.* Ukrainian uses the present («я працюю тут із 2022»), so this slip is automatic. Also don’t swap the pair: **since + a point**, **for + a length** — *“since three years”* ✗ → *for three years*; *“for 2020”* ✗ → *since 2020*.',
            uk: 'Період, що **починається в минулому й сягає тепер**, потребує **Present Perfect**, а не теперішнього чи минулого: *«I work here since 2022»* ✗ і *«I worked here since 2022»* ✗ → *I **have worked** here since 2022.* Українська вживає теперішній («я працюю тут із 2022»), тож промах автоматичний. І не плутай пару: **since + точка**, **for + тривалість** — *«since three years»* ✗ → *for three years*; *«for 2020»* ✗ → *since 2020*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Related patterns you’ll meet. *It’s / It has been [time] since …* flips a since-clause: *It’s been two years since we rewrote it.* After a superlative or *the first time*, English uses the Present Perfect: *This is the best PR I’ve reviewed this quarter. It’s the first time I’ve seen that error.* And **been vs gone**: *He’s **been** to Kyiv* (went and is back) vs *He’s **gone** to Kyiv* (went and is still there) — one form, two life-facts, sorted by whether the trip is over.',
            uk: 'Пов’язані патерни, які трапляться. *It’s / It has been [time] since …* перевертає since-клаузу: *It’s been two years since we rewrote it.* Після найвищого ступеня чи *the first time* англійська вживає Present Perfect: *This is the best PR I’ve reviewed this quarter. It’s the first time I’ve seen that error.* І **been проти gone**: *He’s **been** to Kyiv* (їздив і повернувся) проти *He’s **gone** to Kyiv* (поїхав і досі там) — одна форма, два життєві факти, розрізнені тим, чи поїздка завершена.',
          },
        },
      ],
    },

    // ── 3. PAST PERFECT: BEFORE-BEFORE-NOW ───────────────────────────────────
    {
      id: 'past-perfect-before-before',
      title: { en: 'Past Perfect: the earlier of two past events', uk: 'Past Perfect: раніша з двох минулих подій' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Move the reference point back and the same link-back idea gives **Past Perfect** (**had + V3**, one form for every subject): the **earlier of two past events** — “before-before-now.” *The service **had** already **crashed** when we opened the dashboard* (crash first, then we looked). *She **had** never **used** Go before she joined the team.* It shines with **when, by the time, after, before**, and it is the backshift form in reported speech (*“I fixed it” → She said she **had fixed** it*, m15).',
            uk: 'Відсунь точку відліку назад — і та сама ідея зв’язку назад дає **Past Perfect** (**had + V3**, одна форма для всіх осіб): **раніша з двох минулих подій** — «до того, що до тепер». *The service **had** already **crashed** when we opened the dashboard* (спершу падіння, потім ми глянули). *She **had** never **used** Go before she joined the team.* Воно сяє з **when, by the time, after, before** і є формою зсуву в непрямій мові (*«I fixed it» → She said she **had fixed** it*, m15).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'had + V3 — marks the earlier one', uk: 'had + V3 — позначає ранішу' },
          b: { en: 'two Past Simples — order as told', uk: 'два Past Simple — порядок як розказано' },
          rows: [
            [
              { en: 'Sentence', uk: 'Речення' },
              { en: 'When we arrived, they had left.', uk: 'When we arrived, they had left.' },
              { en: 'They left, and then we arrived.', uk: 'They left, and then we arrived.' },
            ],
            [
              { en: 'Who’s first', uk: 'Хто перший' },
              { en: 'leaving — even though said second', uk: 'відхід — хоч названий другим' },
              { en: 'the order you say them', uk: 'порядок, у якому кажеш' },
            ],
            [
              { en: 'Use it when', uk: 'Вживай, коли' },
              { en: 'the sequence would otherwise blur', uk: 'послідовність інакше розмиється' },
              { en: 'the order is already clear', uk: 'порядок і так ясний' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'You don’t always need it', uk: 'Воно потрібне не завжди' },
          md: {
            en: 'If **after, before, then** already fix the order, plain **Past Simple** is enough: *After the service **crashed**, we **opened** the dashboard.* Past Perfect earns its place only when, without it, the reader might mistake which event came first — most often with *when*, where the two clauses don’t otherwise signal order. Don’t sprinkle *had + V3* over every past-in-the-past; use it to **un-blur** a sequence.',
            uk: 'Якщо **after, before, then** уже фіксують порядок, достатньо простого **Past Simple**: *After the service **crashed**, we **opened** the dashboard.* Past Perfect виправдовує себе лише там, де без нього читач може сплутати, яка подія була перша, — найчастіше з *when*, де дві клаузи інакше не сигналізують порядок. Не сип *had + V3* на кожне «минуле в минулому»; вживай його, щоб **прояснити** послідовність.',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: 'Two places Past Perfect becomes obligatory later in the course. In the **third conditional** (m23) it carries the unreal past: *If we **had caught** it in review, the incident **wouldn’t have happened**.* And after the dramatic openers **hardly / scarcely … when** and **no sooner … than**, often with inversion (m27): *No sooner **had** we **deployed** than the alerts started.* For now, just register that “before-before-now” is the shared thread.',
            uk: 'Два місця, де Past Perfect стає обов’язковим далі в курсі. У **третьому conditional** (m23) воно несе нереальне минуле: *If we **had caught** it in review, the incident **wouldn’t have happened**.* І після драматичних зачинів **hardly / scarcely … when** та **no sooner … than**, часто з інверсією (m27): *No sooner **had** we **deployed** than the alerts started.* Поки що просто зафіксуй, що «до того, що до тепер» — спільна нитка.',
          },
        },
      ],
    },

    // ── 4. PERFECT CONTINUOUS ────────────────────────────────────────────────
    {
      id: 'perfect-continuous',
      title: { en: 'Perfect Continuous: the process up to the point', uk: 'Perfect Continuous: процес аж до точки' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Add the continuous to the perfect and you stress the **process running up to the reference point** — its **duration** or its **visible side-effects**, not a finished result. **Present Perfect Continuous** = **have / has been + V-ing**: *I’ve been debugging this flaky test all morning* (how long), *It’s been raining — the streets are wet* (the trace it left). **Past Perfect Continuous** = **had been + V-ing**: *He was tired because he **had been driving** all night* (the process before a past moment).',
            uk: 'Додай continuous до perfect — і наголос падає на **процес, що триває аж до точки відліку**: його **тривалість** чи **видимі сліди**, а не готовий результат. **Present Perfect Continuous** = **have / has been + V-ing**: *I’ve been debugging this flaky test all morning* (як довго), *It’s been raining — the streets are wet* (слід, що лишився). **Past Perfect Continuous** = **had been + V-ing**: *He was tired because he **had been driving** all night* (процес перед минулим моментом).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'have + V3 — result / count', uk: 'have + V3 — результат / кількість' },
          b: { en: 'have been + V-ing — activity / how long', uk: 'have been + V-ing — діяльність / як довго' },
          rows: [
            [
              { en: 'Focus', uk: 'Фокус' },
              { en: 'the finished outcome', uk: 'завершений підсумок' },
              { en: 'the ongoing process', uk: 'триваючий процес' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'I’ve fixed three bugs. (count)', uk: 'I’ve fixed three bugs. (кількість)' },
              { en: 'I’ve been fixing bugs all day. (activity)', uk: 'I’ve been fixing bugs all day. (діяльність)' },
            ],
            [
              { en: 'Question', uk: 'Питання' },
              { en: 'How many? → have + V3', uk: 'Скільки? → have + V3' },
              { en: 'How long? → have been + V-ing', uk: 'Як довго? → have been + V-ing' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'State verbs stay simple perfect', uk: 'Дієслова стану лишаються в simple perfect' },
          md: {
            en: 'The state verbs from m7 (**know, be, have** = possess, believe, own) refuse the continuous even here: *I’ve **known** her for years*, never *“I’ve been knowing her.”* When you want duration with a state verb, use the **simple** perfect + *for / since*: *We’ve **had** this bug since Tuesday. They’ve **owned** the domain for a decade.* The continuous is for activities, not states.',
            uk: 'Дієслова стану з m7 (**know, be, have** = володіти, believe, own) відмовляються від continuous навіть тут: *I’ve **known** her for years*, ніколи *«I’ve been knowing her.»* Коли треба тривалість зі станом, вживай **simple** perfect + *for / since*: *We’ve **had** this bug since Tuesday. They’ve **owned** the domain for a decade.* Continuous — для діяльностей, не для станів.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'With a few verbs of “ongoing situation” — *live, work, study, teach* — the two perfects **blur**, and both are natural for a stretch reaching now: *I’ve **lived** here for five years* and *I’ve **been living** here for five years* say much the same. The simple leans a touch more permanent, the continuous a touch more temporary, but neither is wrong. Elsewhere the result-vs-process split above still decides — reach for it whenever a count or a finished outcome is the point.',
            uk: 'З кількома дієсловами «триваючої ситуації» — *live, work, study, teach* — два perfect **зливаються**, і обидва природні для відрізка, що сягає тепер: *I’ve **lived** here for five years* і *I’ve **been living** here for five years* кажуть майже те саме. Simple звучить трохи постійніше, continuous — трохи тимчасовіше, але жоден не хибний. Деінде розкол результат-проти-процесу вище досі вирішує — бери його щоразу, коли суть — кількість чи завершений підсумок.',
          },
        },
      ],
    },

    // ── 5. FUTURE PERFECT (RECOGNITION) + THE FAMILY ─────────────────────────
    {
      id: 'future-perfect-recognition',
      title: { en: 'Future Perfect & the whole family', uk: 'Future Perfect і вся родина' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Push the reference point into the future and the link-back idea gives **Future Perfect** (**will have + V3**): an action that **will be complete by a future point**. *By Friday we **will have migrated** all the services. She **’ll have finished** the review by the time you wake up.* The trigger is a **“by …” deadline**. Its continuous cousin, **Future Perfect Continuous** (**will have been + V-ing**), stresses duration up to that point: *In May I **’ll have been working** here for five years.* These two are **recognition-level** — meet them in reading and formal writing; you’ll rarely need to produce them.',
            uk: 'Посунь точку відліку в майбутнє — і ідея зв’язку назад дає **Future Perfect** (**will have + V3**): дію, що **буде завершена до майбутньої точки**. *By Friday we **will have migrated** all the services. She **’ll have finished** the review by the time you wake up.* Тригер — **дедлайн із «by …»**. Його continuous-родич, **Future Perfect Continuous** (**will have been + V-ing**), наголошує тривалість аж до тієї точки: *In May I **’ll have been working** here for five years.* Ці два — **рівня впізнавання**: трапляються в читанні й формальному письмі; продукувати доведеться рідко.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The Perfect family in one grid: one idea (⤺ a link back from a reference point) across three times, plus the continuous that stresses duration up to it.',
            uk: 'Родина Perfect в одній сітці: одна ідея (⤺ зв’язок назад від точки відліку) через три часи, плюс continuous, що наголошує тривалість аж до неї.',
          },
          head: [
            { en: 'Reference point', uk: 'Точка відліку' },
            { en: 'Perfect (⤺)', uk: 'Perfect (⤺)' },
            { en: 'Perfect Continuous (〜⤺)', uk: 'Perfect Continuous (〜⤺)' },
          ],
          rows: [
            [
              { en: 'NOW', uk: 'ТЕПЕР' },
              { en: 'have / has + V3 — I’ve deployed', uk: 'have / has + V3 — I’ve deployed' },
              { en: 'have been + V-ing — I’ve been deploying', uk: 'have been + V-ing — I’ve been deploying' },
            ],
            [
              { en: 'a PAST moment', uk: 'МИНУЛИЙ момент' },
              { en: 'had + V3 — I had deployed', uk: 'had + V3 — I had deployed' },
              { en: 'had been + V-ing — I had been deploying', uk: 'had been + V-ing — I had been deploying' },
            ],
            [
              { en: 'a FUTURE moment', uk: 'МАЙБУТНІЙ момент' },
              { en: 'will have + V3 — I’ll have deployed', uk: 'will have + V3 — I’ll have deployed' },
              { en: 'will have been + V-ing — I’ll have been deploying', uk: 'will have been + V-ing — I’ll have been deploying' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Recognize, don’t drill', uk: 'Впізнавай, не задрочуй' },
          md: {
            en: 'Spend your effort where the frequency is. **Present Perfect** is the everyday heavy-hitter — drill it against Past Simple until it’s automatic. **Past Perfect** earns its keep occasionally, for “before-before-now.” **Future Perfect** and both **perfect continuous** forms are mostly for reading and formal writing: understand the ⤺ idea, spot the “by …” or duration trigger, and move on. One family, one link-back idea, three reference points.',
            uk: 'Витрачай зусилля там, де частота. **Present Perfect** — щоденний важковаговик: відпрацьовуй його проти Past Simple, доки не стане автоматичним. **Past Perfect** зрідка виправдовує себе, для «до того, що до тепер». **Future Perfect** і обидві форми **perfect continuous** — переважно для читання й формального письма: зрозумій ідею ⤺, помічай тригер «by …» чи тривалість — і рушай далі. Одна родина, одна ідея зв’язку назад, три точки відліку.',
          },
        },
      ],
    },
  ],

  keyPoints: [
    {
      en: 'Perfect = a link back ⤺ from a reference point (now / a past moment / a future moment): have / had / will have + V3. Past Simple ● is the disconnected, finished dot.',
      uk: 'Perfect = зв’язок назад ⤺ від точки відліку (тепер / минулий момент / майбутній): have / had / will have + V3. Past Simple ● — відірвана, завершена крапка.',
    },
    {
      en: 'Present Perfect vs Past Simple: a finished-time word (yesterday, in 2020, ago) forces Past Simple; unfinished/unnamed time or a result-now takes Present Perfect. Ukrainian has no perfect — this is the #1 trap.',
      uk: 'Present Perfect проти Past Simple: слово завершеного часу (yesterday, in 2020, ago) вимагає Past Simple; незавершений/неназваний час або результат-зараз бере Present Perfect. В українській perfect немає — це пастка №1.',
    },
    {
      en: 'for + a length of time; since + a start point — both usually with Present Perfect for a stretch reaching now. Never “I work here since 2022” → I have worked here since 2022.',
      uk: 'for + тривалість; since + точка початку — обидва зазвичай із Present Perfect для відрізка, що сягає тепер. Ніколи «I work here since 2022» → I have worked here since 2022.',
    },
    {
      en: 'Past Perfect (had + V3) = the earlier of two past events (“before-before-now”); use it only when the order would otherwise blur.',
      uk: 'Past Perfect (had + V3) = раніша з двох минулих подій («до того, що до тепер»); вживай лише коли порядок інакше розмиється.',
    },
    {
      en: 'Perfect Continuous (have/had been + V-ing) = the process up to the point (duration / side-effects); use it for “how long”, simple perfect for a count or result. State verbs stay simple perfect.',
      uk: 'Perfect Continuous (have/had been + V-ing) = процес аж до точки (тривалість / сліди); вживай для «як довго», simple perfect — для кількості чи результату. Дієслова стану лишаються в simple perfect.',
    },
    {
      en: 'Future Perfect (will have + V3) = completed by a future deadline (“by Friday…”). Recognition-level, like both perfect-continuous forms — the ⤺ idea is the same across all three times.',
      uk: 'Future Perfect (will have + V3) = завершене до майбутнього дедлайну («by Friday…»). Рівня впізнавання, як і обидві форми perfect continuous — ідея ⤺ однакова через усі три часи.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“I have seen him yesterday”', uk: '«I have seen him yesterday»' },
      body: {
        en: 'A finished-time word forces Past Simple: I saw him yesterday. Present Perfect is only for unnamed or unfinished time. Ukrainian has no perfect, so this is the most common perfect-tense error.',
        uk: 'Слово завершеного часу вимагає Past Simple: I saw him yesterday. Present Perfect — лише для неназваного чи незавершеного часу. В українській perfect немає, тож це найчастіша помилка з perfect.',
      },
    },
    {
      title: { en: '“I work / worked here since 2022”', uk: '«I work / worked here since 2022»' },
      body: {
        en: 'A period reaching now needs the Present Perfect: I have worked here since 2022. Not the present (Ukrainian calque) and not the Past Simple (finished) — the stretch is still open.',
        uk: 'Період, що сягає тепер, потребує Present Perfect: I have worked here since 2022. Не теперішній (українська калька) і не Past Simple (завершене) — відрізок ще відкритий.',
      },
    },
    {
      title: { en: '“since three years” / “for 2020”', uk: '«since three years» / «for 2020»' },
      body: {
        en: 'Swap fixed: for + a length of time (for three years), since + a start point (since 2020). since answers “from when?”, for answers “how long?”.',
        uk: 'Пара переплутана: for + тривалість (for three years), since + точка початку (since 2020). since відповідає «відколи?», for — «як довго?».',
      },
    },
    {
      title: { en: '“I have been knowing her for years”', uk: '«I have been knowing her for years»' },
      body: {
        en: 'State verbs (know, be, have=possess, believe) refuse the continuous: I have known her for years. For duration with a state, use the simple perfect + for/since.',
        uk: 'Дієслова стану (know, be, have=володіти, believe) відмовляються від continuous: I have known her for years. Для тривалості зі станом вживай simple perfect + for/since.',
      },
    },
    {
      title: { en: 'Over- or under-using Past Perfect', uk: 'Над- чи недовживання Past Perfect' },
      body: {
        en: 'Not every past-in-the-past needs had + V3. If after/before/then already show the order, Past Simple is enough. Use Past Perfect only to mark the earlier event when the sequence would blur.',
        uk: 'Не кожне «минуле в минулому» потребує had + V3. Якщо after/before/then уже показують порядок, достатньо Past Simple. Вживай Past Perfect лише щоб позначити ранішу подію, коли послідовність розмивається.',
      },
    },
    {
      title: { en: '“Did you finish yet?” as the standard form', uk: '«Did you finish yet?» як стандартна форма' },
      body: {
        en: 'yet and already pair with the Present Perfect in standard/British English: Have you finished yet? American English often allows the Past Simple (Did you finish yet?) — recognize it, but the guide teaches the Present-Perfect standard.',
        uk: 'yet і already поєднуються з Present Perfect у стандартній/британській англійській: Have you finished yet? Американська часто дозволяє Past Simple (Did you finish yet?) — впізнавай, але гайд навчає стандарту з Present Perfect.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-perfect-family-1',
      kind: 'mcq',
      prompt: { en: '“I ___ him yesterday at the standup.”', uk: '«I ___ him yesterday at the standup.»' },
      options: ['have seen', 'saw', 'have saw'],
      correct: 1,
      explain: {
        en: '“Yesterday” is a finished time → Past Simple: I saw him yesterday (never “have seen … yesterday”).',
        uk: '«Yesterday» — завершений час → Past Simple: I saw him yesterday (ніколи «have seen … yesterday»).',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'present-perfect', 'past-simple'],
    },
    {
      id: 'ex-perfect-family-2',
      kind: 'gap',
      sentence: 'I ___ (work) here since 2022.',
      answers: ['have worked', "'ve worked"],
      hint: { en: 'since + a stretch reaching now → Present Perfect', uk: 'since + відрізок, що сягає тепер → Present Perfect' },
      explain: {
        en: 'A period from a past start up to now → Present Perfect: I have worked here since 2022.',
        uk: 'Період від минулого початку до тепер → Present Perfect: I have worked here since 2022.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'present-perfect', 'since'],
    },
    {
      id: 'ex-perfect-family-3',
      kind: 'gap',
      sentence: 'We ___ (know) each other for ten years.',
      answers: ['have known', "'ve known"],
      hint: { en: 'a state verb + for → simple perfect', uk: 'дієслово стану + for → simple perfect' },
      explain: {
        en: 'know is a state verb, so no continuous: have known (+ for a length of time).',
        uk: 'know — дієслово стану, тож без continuous: have known (+ for тривалість).',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'present-perfect', 'state-verbs'],
    },
    {
      id: 'ex-perfect-family-4',
      kind: 'mcq',
      prompt: { en: '“She’s been on call ___ Monday.”', uk: '«She’s been on call ___ Monday.»' },
      options: ['for', 'since', 'from'],
      correct: 1,
      explain: {
        en: 'Monday is a start point → since. (for takes a length: for two days.)',
        uk: 'Monday — точка початку → since. (for бере тривалість: for two days.)',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'for-since'],
    },
    {
      id: 'ex-perfect-family-5',
      kind: 'mcq',
      prompt: { en: '“The pipeline has been red ___ two hours.”', uk: '«The pipeline has been red ___ two hours.»' },
      options: ['since', 'for', 'from'],
      correct: 1,
      explain: {
        en: 'Two hours is a length of time → for. (since needs a point: since noon.)',
        uk: 'Дві години — тривалість → for. (since потребує точки: since noon.)',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'for-since'],
    },
    {
      id: 'ex-perfect-family-6',
      kind: 'gap',
      sentence: 'I ___ (fix) the bug — you can redeploy now.',
      answers: ['have fixed', "'ve fixed"],
      hint: { en: 'a past action with a result now → Present Perfect', uk: 'минула дія з результатом зараз → Present Perfect' },
      explain: {
        en: 'The result matters now and no finished time is named → Present Perfect: I have fixed the bug.',
        uk: 'Результат важить зараз, і завершений час не названо → Present Perfect: I have fixed the bug.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'present-perfect', 'result'],
    },
    {
      id: 'ex-perfect-family-7',
      kind: 'mcq',
      prompt: { en: 'Which is the standard form?', uk: 'Яка форма стандартна?' },
      options: ['Did you see the report yet?', 'Have you seen the report yet?', 'Have you saw the report yet?'],
      correct: 1,
      explain: {
        en: 'yet pairs with the Present Perfect in standard English: Have you seen … yet? (AmE also allows the Past Simple.)',
        uk: 'yet поєднується з Present Perfect у стандартній англійській: Have you seen … yet? (AmE також дозволяє Past Simple.)',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'present-perfect', 'yet'],
    },
    {
      id: 'ex-perfect-family-8',
      kind: 'gap',
      sentence: 'The service ___ (already / crash) by the time we opened the dashboard.',
      answers: ['had already crashed'],
      hint: { en: 'the earlier of two past events → Past Perfect', uk: 'раніша з двох минулих подій → Past Perfect' },
      explain: {
        en: 'The crash happened before we looked → Past Perfect: had already crashed.',
        uk: 'Падіння сталося до того, як ми глянули → Past Perfect: had already crashed.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'past-perfect'],
    },
    {
      id: 'ex-perfect-family-9',
      kind: 'gap',
      sentence: 'She ___ (never / use) Go before she joined the team.',
      answers: ['had never used'],
      hint: { en: 'up to a past point → Past Perfect', uk: 'аж до минулої точки → Past Perfect' },
      explain: {
        en: 'No experience up to a past moment → Past Perfect: had never used (before she joined).',
        uk: 'Жодного досвіду аж до минулого моменту → Past Perfect: had never used (before she joined).',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'past-perfect'],
    },
    {
      id: 'ex-perfect-family-10',
      kind: 'gap',
      sentence: 'I ___ (debug) this flaky test all morning — still no luck.',
      answers: ['have been debugging', "'ve been debugging"],
      hint: { en: 'a process up to now, stress the duration → Present Perfect Continuous', uk: 'процес аж до тепер, наголос на тривалості → Present Perfect Continuous' },
      explain: {
        en: 'Ongoing activity up to now, “all morning” → Present Perfect Continuous: have been debugging.',
        uk: 'Триваюча діяльність аж до тепер, «all morning» → Present Perfect Continuous: have been debugging.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'perfect-continuous'],
    },
    {
      id: 'ex-perfect-family-11',
      kind: 'mcq',
      prompt: { en: '“I ___ three bugs today.” (the count is the point)', uk: '«I ___ three bugs today.» (важить кількість)' },
      options: ['have been fixing', 'have fixed', 'had fixed'],
      correct: 1,
      explain: {
        en: 'A finished count → Present Perfect (simple): I have fixed three bugs. Continuous would stress the activity, not the number.',
        uk: 'Завершена кількість → Present Perfect (simple): I have fixed three bugs. Continuous наголосив би діяльність, а не число.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'present-perfect', 'perfect-continuous'],
    },
    {
      id: 'ex-perfect-family-12',
      kind: 'mcq',
      prompt: { en: '“By Friday we ___ all the services.”', uk: '«By Friday we ___ all the services.»' },
      options: ['will migrate', 'will have migrated', 'have migrated'],
      correct: 1,
      explain: {
        en: 'Complete by a future deadline (“by Friday”) → Future Perfect: will have migrated.',
        uk: 'Завершено до майбутнього дедлайну («by Friday») → Future Perfect: will have migrated.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'future-perfect'],
    },
    {
      id: 'ex-perfect-family-13',
      kind: 'gap',
      sentence: 'I ___ (never / meet) him in person, only on calls.',
      answers: ['have never met', "'ve never met"],
      hint: { en: 'life experience, no time named → Present Perfect', uk: 'життєвий досвід, час не названо → Present Perfect' },
      explain: {
        en: 'Experience up to now with no finished time → Present Perfect: I have never met him.',
        uk: 'Досвід аж до тепер без завершеного часу → Present Perfect: I have never met him.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'present-perfect', 'experience'],
    },
    {
      id: 'ex-perfect-family-14',
      kind: 'mcq',
      prompt: { en: '“We ___ the release last Thursday.”', uk: '«We ___ the release last Thursday.»' },
      options: ['have shipped', 'shipped', 'have ship'],
      correct: 1,
      explain: {
        en: '“Last Thursday” is a finished time → Past Simple: we shipped the release.',
        uk: '«Last Thursday» — завершений час → Past Simple: we shipped the release.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'past-simple', 'present-perfect'],
    },
  ],
  seeAlso: [
    'm6-tense-system',
    'm7-present-simple-continuous',
    'm8-past-simple-continuous',
    'm9-future-forms',
    'm11-choosing-narrative',
    'm21-deduction-probability',
  ],
  sources: [
    { title: 'Cambridge Dictionary — Present perfect simple (I have worked)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-simple-i-have-worked' },
    { title: 'Cambridge Dictionary — Past simple or present perfect?', url: 'https://dictionary.cambridge.org/grammar/british-grammar/past-simple-or-present-perfect' },
    { title: 'Cambridge Dictionary — Past perfect simple (I had worked)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/past-perfect-simple-i-had-worked' },
    { title: 'Cambridge Dictionary — Present perfect simple or present perfect continuous?', url: 'https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-simple-or-present-perfect-continuous' },
    { title: 'Cambridge Dictionary — Future perfect simple (I will have worked eight hours)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/future-perfect-simple-i-will-have-worked-eight-hours' },
  ],
};
