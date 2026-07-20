// src/data/tenseChooser.ts — content for the ★ Tense Chooser sim (m11, T4).
// CHANGED (T4): the full 3-question decision tree: 3 times × 4 meaning branches × 2–3 context
// leaves = 30 paths, each resolving to a verdict (tense/form + pattern + why + example EN/UA +
// near-misses). The tree deliberately encodes the section's cross-time overrides: under PRESENT,
// a finished-time word still forces Past Simple (the m10 flagship contrast); under PAST, a
// result-that-matters-now re-anchors to Present Perfect; under FUTURE, arrangements take Present
// Continuous and timetables Present Simple (m9). Verdict `time` = the matrix column of the FORM
// (the hue), which is exactly where those overrides become visible. Facts verified against
// Cambridge Dictionary grammar + British Council pages (m11 sources).
// Content rules: EN authored first; grammar terms stay English in UA text; examples are US English.
import type { ChooserBranch } from '../lib/chooser';
import type { Localized } from './types';
import type { TenseTime } from '../lib/tenses';

const L = (en: string, uk: string): Localized => ({ en, uk });

/** Q1 options — the times, phrased as meaning (not grammar labels). */
export const CHOOSER_Q1: Record<TenseTime, Localized> = {
  past: L('Before now — it happened or was true in the past', 'До тепер — сталося або було правдою в минулому'),
  present: L('Now or in general — the present', 'Зараз або загалом — теперішнє'),
  future: L('Still ahead — the future', 'Ще попереду — майбутнє'),
};

export const CHOOSER_TREE: Record<TenseTime, ChooserBranch[]> = {
  // ── PAST ───────────────────────────────────────────────────────────────────
  past: [
    {
      id: 'whole-event',
      label: L('One whole, finished action — or a chain of them', 'Одна ціла завершена дія — або їх ланцюжок'),
      leaves: [
        {
          id: 'plain-event',
          label: L('The time is known, or simply part of the story', 'Час відомий — або це просто частина оповіді'),
          verdict: {
            name: 'Past Simple',
            time: 'past',
            aspect: 'simple',
            pattern: 'V2 (-ed / irregular)',
            why: L(
              'The default storytelling tense: a whole event, closed in the past. The when can be stated or just understood.',
              'Базовий tense оповіді: ціла подія, закрита в минулому. «Коли» може бути назване або просто зрозуміле.',
            ),
            example: { text: L('We shipped the release on Thursday.', 'Ми відвантажили реліз у четвер.') },
            nearMisses: [
              {
                name: 'Present Perfect',
                why: L(
                  'If the result matters right now and you name no time, English looks back from NOW instead — see the next Q3 option.',
                  'Якщо результат важливий просто зараз і час не названо, англійська дивиться назад від NOW — див. наступну опцію Q3.',
                ),
              },
            ],
          },
        },
        {
          id: 'result-now',
          label: L('Its result matters right now — and I am NOT naming the time', 'Його результат важливий просто зараз — і час я НЕ називаю'),
          verdict: {
            name: 'Present Perfect',
            time: 'present',
            aspect: 'perfect',
            pattern: 'have / has + V3',
            why: L(
              'The event is past, but English re-anchors it to NOW when the point is the present result or news. That is why the hue jumps to present — the reference point is now.',
              'Подія минула, але англійська перезакріплює її на NOW, коли суть — теперішній результат чи новина. Тому відтінок стрибає в present: точка відліку — зараз.',
            ),
            example: { text: L("I've fixed the bug — you can redeploy.", 'Я полагодив баг — можна редеплоїти.') },
            nearMisses: [
              {
                name: 'Past Simple',
                why: L(
                  'The moment you add yesterday / in 2020 / last week, the frame closes and Past Simple takes over.',
                  'Щойно додаєте yesterday / in 2020 / last week — рамка закривається, і вступає Past Simple.',
                ),
              },
            ],
          },
        },
        {
          id: 'old-habit',
          label: L('A repeated old habit or state — true then, not anymore', 'Стара звичка чи стан — було тоді, вже ні'),
          verdict: {
            name: 'used to',
            time: 'past',
            aspect: 'simple',
            pattern: 'used to + V1',
            why: L(
              'used to marks a past habit or state with the built-in "not anymore" flavor — the contrast with today is the point.',
              'used to позначає минулу звичку чи стан із вбудованим відтінком «вже ні» — суть саме в контрасті з сьогоденням.',
            ),
            example: { text: L('I used to deploy on Fridays.', 'Колись я деплоїв по пʼятницях (тепер — ні).') },
            nearMisses: [
              {
                name: 'would',
                why: L(
                  'would covers repeated past ACTIONS only — never states: *I would live in Lviv* is wrong for a state (m8).',
                  'would покриває лише повторювані минулі ДІЇ — не стани: *I would live in Lviv* для стану неправильно (m8).',
                ),
              },
              {
                name: 'Past Simple',
                why: L(
                  'Grammatical too, but it loses the "not anymore" contrast used to carries.',
                  'Теж граматично, але губить контраст «вже ні», який несе used to.',
                ),
              },
            ],
          },
        },
      ],
    },
    {
      id: 'background',
      label: L('A process in progress — the scene, the background', 'Процес у розгортанні — сцена, тло'),
      leaves: [
        {
          id: 'interrupted',
          label: L('A shorter event cut into it (when…)', 'Коротша подія врізалася в нього (when…)'),
          verdict: {
            name: 'Past Continuous',
            time: 'past',
            aspect: 'continuous',
            pattern: 'was / were + V-ing',
            why: L(
              'The long background takes 〜; the short interrupting event takes Past Simple: the classic when-sentence.',
              'Довге тло бере 〜; коротка подія-переривання бере Past Simple: класичне речення з when.',
            ),
            example: { text: L('I was deploying when the alert fired.', 'Я саме деплоїв, коли спрацював алерт.') },
            nearMisses: [
              {
                name: 'Past Simple',
                why: L(
                  'Two Past Simples in a row read as a SEQUENCE (first one thing, then the other) — the background feel disappears.',
                  'Два Past Simple поспіль читаються як ПОСЛІДОВНІСТЬ (спершу одне, потім інше) — відчуття тла зникає.',
                ),
              },
            ],
          },
        },
        {
          id: 'parallel',
          label: L('Two long processes ran side by side (while…)', 'Два довгі процеси йшли паралельно (while…)'),
          verdict: {
            name: 'Past Continuous',
            time: 'past',
            aspect: 'continuous',
            pattern: 'was / were + V-ing … while … was / were + V-ing',
            why: L(
              'Both parallel processes stay in 〜 — while holds them side by side on the timeline.',
              'Обидва паралельні процеси лишаються в 〜 — while тримає їх поруч на осі часу.',
            ),
            example: { text: L('While I was debugging, she was writing tests.', 'Поки я дебажив, вона писала тести.') },
          },
        },
        {
          id: 'state-verb',
          label: L('It is a state verb (know, want, be, believe…)', 'Це дієслово стану (know, want, be, believe…)'),
          verdict: {
            name: 'Past Simple',
            time: 'past',
            aspect: 'simple',
            pattern: 'V2 (state verbs resist 〜)',
            why: L(
              'States refuse Continuous even as background: I knew the answer — never "I was knowing". The m7 rule holds in every time.',
              'Стани опираються Continuous навіть як тло: I knew the answer — ніколи "I was knowing". Правило з m7 діє в усіх часах.',
            ),
            example: { text: L('I knew the answer all along.', 'Я весь час знав відповідь.') },
            nearMisses: [
              {
                name: 'Past Continuous',
                why: L(
                  'Tempting for the "scene" feel, but state verbs stay Simple (m7 state-verbs list).',
                  'Спокусливо заради «сцени», але дієслова стану лишаються в Simple (список у m7).',
                ),
              },
            ],
          },
        },
      ],
    },
    {
      id: 'earlier-of-two',
      label: L('It happened EARLIER than another past event', 'Це сталося РАНІШЕ за іншу минулу подію'),
      leaves: [
        {
          id: 'order-blurs',
          label: L('Without marking it, the order would blur', 'Без позначки порядок подій розмиється'),
          verdict: {
            name: 'Past Perfect',
            time: 'past',
            aspect: 'perfect',
            pattern: 'had + V3',
            why: L(
              'The earlier of two past events links back from the past reference point — "before-before-now" (m10).',
              'Раніша з двох минулих подій звʼязується назад від минулої точки відліку — «до того, що до тепер» (m10).',
            ),
            example: { text: L('The service had crashed when we opened the dashboard.', 'Сервіс уже впав, коли ми відкрили дашборд.') },
            nearMisses: [
              {
                name: 'Past Simple',
                why: L(
                  'With plain when + Past Simple the crash reads as happening AT/AFTER the opening — the order flips.',
                  'З простим when + Past Simple падіння читається як таке, що сталося В МОМЕНТ/ПІСЛЯ відкриття — порядок перевертається.',
                ),
              },
            ],
          },
        },
        {
          id: 'order-clear',
          label: L('The order is already clear (after / and then / first)', 'Порядок і так ясний (after / and then / first)'),
          verdict: {
            name: 'Past Simple',
            time: 'past',
            aspect: 'simple',
            pattern: 'V2 + a sequence word (after, then)',
            why: L(
              'When sequence words already order the events, plain Past Simple is enough — Past Perfect earns its place only where the order would otherwise blur (m10, dive 3).',
              'Коли слова послідовності вже впорядкували події, достатньо Past Simple — Past Perfect потрібен лише там, де порядок інакше розмиється (m10, dive 3).',
            ),
            example: { text: L('After the demo ended, we went for coffee.', 'Після завершення демо ми пішли на каву.') },
          },
        },
      ],
    },
    {
      id: 'duration-before',
      label: L('How long it had been running before a past moment', 'Як довго це тривало до минулого моменту'),
      leaves: [
        {
          id: 'process',
          label: L('The ongoing effort / visible traces at that moment', 'Тривале зусилля / видимі сліди в той момент'),
          verdict: {
            name: 'Past Perfect Continuous',
            time: 'past',
            aspect: 'perfect-continuous',
            pattern: 'had been + V-ing',
            why: L(
              'A process running up to a past reference point — duration or side effects felt at that moment.',
              'Процес аж до минулої точки відліку — тривалість чи побічні сліди, відчутні в той момент.',
            ),
            example: { text: L('We had been waiting for an hour when CI recovered.', 'Ми чекали вже годину, коли CI ожив.') },
          },
        },
        {
          id: 'state-count',
          label: L('A state verb — or a completed count/result by then', 'Дієслово стану — або завершений підсумок на той момент'),
          verdict: {
            name: 'Past Perfect',
            time: 'past',
            aspect: 'perfect',
            pattern: 'had + V3',
            why: L(
              'States and tallies take the plain Perfect: had known / had fixed three — 〜⤺ is for the running process itself.',
              'Стани й підсумки беруть простий Perfect: had known / had fixed three — 〜⤺ лишається для самого процесу.',
            ),
            example: { text: L('She had known about the leak for weeks.', 'Вона тижнями знала про витік.') },
            nearMisses: [
              {
                name: 'Past Perfect Continuous',
                why: L(
                  'Wrong with state verbs: "had been knowing" does not exist in careful English.',
                  'З дієсловами стану неправильно: "had been knowing" у ретельній англійській не існує.',
                ),
              },
            ],
          },
        },
      ],
    },
  ],

  // ── PRESENT ────────────────────────────────────────────────────────────────
  present: [
    {
      id: 'habit-fact',
      label: L('A general fact, habit or routine', 'Загальний факт, звичка чи рутина'),
      leaves: [
        {
          id: 'plain',
          label: L('A plain fact or routine — no emotion attached', 'Простий факт чи рутина — без емоцій'),
          verdict: {
            name: 'Present Simple',
            time: 'present',
            aspect: 'simple',
            pattern: 'V1 (he/she/it + -s)',
            why: L(
              'The default for what is generally true — 57.5% of speech runs on this cell (m6).',
              'Дефолт для загально чинного — 57.5% мовлення їде на цій клітинці (m6).',
            ),
            example: { text: L('She works from home on Fridays.', 'По пʼятницях вона працює з дому.') },
          },
        },
        {
          id: 'annoying',
          label: L('A repeated habit I am complaining about', 'Повторювана звичка, на яку я скаржуся'),
          verdict: {
            name: 'Present Continuous',
            time: 'present',
            aspect: 'continuous',
            pattern: 'am / is / are + always + V-ing',
            why: L(
              'always + 〜 adds the emotional "every single time" note — the standard complaint pattern.',
              'always + 〜 додає емоційну ноту «щоразу одне й те саме» — стандартний патерн скарги.',
            ),
            example: { text: L("He's always breaking the build on Fridays.", 'Він вічно ламає білд по пʼятницях.') },
            nearMisses: [
              {
                name: 'Present Simple',
                why: L(
                  'Also correct — but neutral: "He always breaks the build" reports; the 〜 version complains.',
                  'Теж правильно — але нейтрально: "He always breaks the build" констатує; версія з 〜 скаржиться.',
                ),
              },
            ],
          },
        },
        {
          id: 'timetable',
          label: L('An official timetable event — even a future one', 'Подія за офіційним розкладом — навіть майбутня'),
          verdict: {
            name: 'Present Simple',
            time: 'present',
            aspect: 'simple',
            pattern: 'V1 (timetable use)',
            why: L(
              'Timetables and schedules live in Present Simple even about the future — the calendar states a fact (m9).',
              'Розклади живуть у Present Simple навіть про майбутнє — календар констатує факт (m9).',
            ),
            example: { text: L('The train leaves at 6:40 tomorrow.', 'Потяг відходить завтра о 6:40.') },
          },
        },
      ],
    },
    {
      id: 'around-now',
      label: L('Happening right now / around now — temporary', 'Відбувається просто зараз / довкола тепер — тимчасово'),
      leaves: [
        {
          id: 'in-progress',
          label: L('An action in progress, or a temporary phase', 'Дія в розгортанні або тимчасова фаза'),
          verdict: {
            name: 'Present Continuous',
            time: 'present',
            aspect: 'continuous',
            pattern: 'am / is / are + V-ing',
            why: L(
              'A process unfolding around now — started, not finished, temporary (m7).',
              'Процес, що розгортається довкола «зараз» — почався, не завершився, тимчасовий (m7).',
            ),
            example: { text: L("I'm reviewing your pull request right now.", 'Я саме зараз переглядаю твій pull request.') },
            nearMisses: [
              {
                name: 'Present Simple',
                why: L(
                  'The classic UA-speaker slip: "I work on it now" states a general fact — the live process needs 〜.',
                  'Класичний промах україномовних: "I work on it now" констатує загальний факт — живий процес вимагає 〜.',
                ),
              },
            ],
          },
        },
        {
          id: 'state-verb',
          label: L('It is a state verb (know, want, agree…)', 'Це дієслово стану (know, want, agree…)'),
          verdict: {
            name: 'Present Simple',
            time: 'present',
            aspect: 'simple',
            pattern: 'V1 (state verbs resist 〜)',
            why: L(
              'States stay Simple even about this very moment: I know / I want / I agree — never "I am knowing" or "I am agree" (m7).',
              'Стани лишаються в Simple навіть про цю саму мить: I know / I want / I agree — ніколи "I am knowing" чи "I am agree" (m7).',
            ),
            example: { text: L('I agree with your review.', 'Я згоден із твоїм ревʼю.') },
            nearMisses: [
              {
                name: 'Present Continuous',
                why: L(
                  'Tempting because it is "happening now" — but state verbs refuse the process form.',
                  'Спокусливо, бо «відбувається зараз» — але дієслова стану відмовляються від форми процесу.',
                ),
              },
            ],
          },
        },
      ],
    },
    {
      id: 'touches-now',
      label: L('A past action that touches NOW — news, result, experience', 'Минула дія, що торкається ЗАРАЗ — новина, результат, досвід'),
      leaves: [
        {
          id: 'no-time',
          label: L('No time word — the result, news or life experience', 'Без слова часу — результат, новина чи життєвий досвід'),
          verdict: {
            name: 'Present Perfect',
            time: 'present',
            aspect: 'perfect',
            pattern: 'have / has + V3',
            why: L(
              'The ⤺ link back from NOW: done at some unstated time, felt in the present (m10).',
              'Звʼязок ⤺ назад від NOW: зроблено колись (час не названо), відчутно в теперішньому (m10).',
            ),
            example: { text: L("I've read your RFC — let's discuss it today.", 'Я прочитав твій RFC — обговорімо сьогодні.') },
            nearMisses: [
              {
                name: 'Past Simple',
                why: L(
                  'Would cut the link to now — fine for a closed story, wrong for live news/results.',
                  'Розірвав би звʼязок із «зараз» — гаразд для закритої оповіді, неправильно для живих новин/результатів.',
                ),
              },
            ],
          },
        },
        {
          id: 'dated',
          label: L('A finished-time word IS in the sentence (yesterday, in 2020…)', 'У реченні Є слово завершеного часу (yesterday, in 2020…)'),
          verdict: {
            name: 'Past Simple',
            time: 'past',
            aspect: 'simple',
            pattern: 'V2 — the dated-time override',
            why: L(
              'The override rule: a finished-time word closes the frame and forces Past Simple, no matter how much the result matters. This is the single most-drilled trap of the section (m10 ★).',
              'Правило-перекриття: слово завершеного часу закриває рамку і вимагає Past Simple, хай як важить результат. Найтренованіша пастка розділу (m10 ★).',
            ),
            example: { text: L('I finished the report yesterday.', 'Я закінчив звіт учора.') },
            nearMisses: [
              {
                name: 'Present Perfect',
                why: L(
                  '"I have finished it yesterday" is the classic UA-speaker error — Perfect refuses dated time.',
                  '"I have finished it yesterday" — класична помилка україномовних: Perfect не терпить датованого часу.',
                ),
              },
            ],
          },
        },
        {
          id: 'casual-ame',
          label: L('Casual American English with just / already', 'Розмовна американська з just / already'),
          verdict: {
            name: 'Past Simple',
            time: 'past',
            aspect: 'simple',
            pattern: 'V2 (AmE with just / already / yet)',
            why: L(
              'AmE routinely says I just saw it / I already ate / Did you eat yet? — an accepted alternative, not an error. BrE (and most exams) prefer the Present Perfect here.',
              'Американська звично каже I just saw it / I already ate / Did you eat yet? — прийнятий варіант, не помилка. BrE (і більшість іспитів) тут воліють Present Perfect.',
            ),
            example: { text: L('I just saw your message.', 'Я щойно побачив твоє повідомлення.') },
            nearMisses: [
              {
                name: 'Present Perfect',
                why: L(
                  'The BrE default — always safe: "I\'ve just seen your message."',
                  'Дефолт BrE — завжди безпечний: "I\'ve just seen your message."',
                ),
              },
            ],
          },
        },
      ],
    },
    {
      id: 'since-now',
      label: L('Started in the past and still going — how long', 'Почалося в минулому і досі триває — як довго'),
      leaves: [
        {
          id: 'ongoing',
          label: L('Stress the ongoing process (for / since / all day)', 'Наголос на тривалому процесі (for / since / all day)'),
          verdict: {
            name: 'Present Perfect Continuous',
            time: 'present',
            aspect: 'perfect-continuous',
            pattern: 'have / has been + V-ing',
            why: L(
              'A process running up to NOW — the duration or the visible side effects are the point (m10).',
              'Процес аж до NOW — суть у тривалості чи видимих слідах (m10).',
            ),
            example: { text: L("I've been debugging this test all morning.", 'Я весь ранок воджуся з цим тестом.') },
          },
        },
        {
          id: 'state-result',
          label: L('A state verb — or the tally / result so far', 'Дієслово стану — або підсумок на цей момент'),
          verdict: {
            name: 'Present Perfect',
            time: 'present',
            aspect: 'perfect',
            pattern: 'have / has + V3',
            why: L(
              'States and counts take the plain Perfect: I have known her for years / I have fixed three bugs — not "have been knowing".',
              'Стани й підсумки беруть простий Perfect: I have known her for years / I have fixed three bugs — не "have been knowing".',
            ),
            example: { text: L("I've known her since college.", 'Я знаю її ще з коледжу.') },
            nearMisses: [
              {
                name: 'Present Perfect Continuous',
                why: L(
                  'Wrong with state verbs; with counts it shifts the focus from the tally to the grind.',
                  'Неправильно з дієсловами стану; з підсумками зміщує фокус із результату на сам процес.',
                ),
              },
            ],
          },
        },
      ],
    },
  ],

  // ── FUTURE ─────────────────────────────────────────────────────────────────
  future: [
    {
      id: 'on-the-spot',
      label: L('Deciding, offering or predicting as I speak', 'Рішення, пропозиція чи прогноз у момент мовлення'),
      leaves: [
        {
          id: 'decision',
          label: L('A decision made right now / an offer / a promise', 'Рішення просто зараз / пропозиція / обіцянка'),
          verdict: {
            name: 'will',
            time: 'future',
            aspect: 'simple',
            pattern: 'will + V1',
            why: L(
              'will marks the on-the-spot decision, offer or promise — the choice is born as you speak (m9).',
              'will позначає рішення в момент мовлення, пропозицію чи обіцянку — вибір народжується, поки ви говорите (m9).',
            ),
            example: { text: L("I'll take a look after lunch.", 'Гляну після обіду.') },
            nearMisses: [
              {
                name: 'be going to',
                why: L(
                  'That is for intentions decided BEFORE speaking — the timing of the decision is the split (m9).',
                  'Це для намірів, вирішених ДО мовлення — розріз проходить по моменту рішення (m9).',
                ),
              },
              {
                name: 'Present Simple',
                why: L(
                  'Inside when/if/until/as soon as clauses the future takes PRESENT: when the build finishes — never "will finish" (m9).',
                  'Усередині підрядних із when/if/until/as soon as майбутнє бере PRESENT: when the build finishes — ніколи "will finish" (m9).',
                ),
              },
            ],
          },
        },
        {
          id: 'opinion',
          label: L('A prediction from opinion or a hunch (I think…)', 'Прогноз з думки чи передчуття (I think…)'),
          verdict: {
            name: 'will',
            time: 'future',
            aspect: 'simple',
            pattern: 'will + V1 (I think / probably)',
            why: L(
              'Opinion-based predictions default to will — often with I think, probably, I bet (m9).',
              'Прогнози з думки за замовчуванням беруть will — часто з I think, probably, I bet (m9).',
            ),
            example: { text: L('I think this migration will take about an hour.', 'Думаю, ця міграція займе близько години.') },
            nearMisses: [
              {
                name: 'be going to',
                why: L(
                  'Fine too — but it suggests you see EVIDENCE, not just hold an opinion.',
                  'Теж можливо — але натякає, що ви бачите ДОКАЗ, а не просто маєте думку.',
                ),
              },
            ],
          },
        },
        {
          id: 'evidence',
          label: L('A prediction from visible present evidence', 'Прогноз із видимого теперішнього доказу'),
          verdict: {
            name: 'be going to',
            time: 'future',
            aspect: 'simple',
            pattern: 'am / is / are going to + V1',
            why: L(
              'Present evidence → going to: the cause is already visible on the graph, in the sky, in the backlog (m9).',
              'Теперішній доказ → going to: причину вже видно на графіку, в небі, в беклозі (m9).',
            ),
            example: { text: L("Look at that graph — the disk is going to fill up.", 'Глянь на графік — диск зараз заповниться.') },
            nearMisses: [
              {
                name: 'will',
                why: L(
                  'Not wrong — but it drops the "I can see it coming" note the evidence deserves.',
                  'Не помилка — але губить ноту «я бачу, до чого йде», на яку заслуговує доказ.',
                ),
              },
            ],
          },
        },
      ],
    },
    {
      id: 'already-planned',
      label: L('A plan or arrangement that already exists', 'План чи домовленість, що вже існує'),
      leaves: [
        {
          id: 'intention',
          label: L('My intention, decided earlier — not arranged with anyone', 'Мій намір, вирішений раніше — ні з ким не домовлено'),
          verdict: {
            name: 'be going to',
            time: 'future',
            aspect: 'simple',
            pattern: 'am / is / are going to + V1',
            why: L(
              'A premeditated intention: the decision predates the conversation, but nothing is booked with other people (m9).',
              'Заздалегідь ухвалений намір: рішення старше за розмову, але з людьми нічого не заброньовано (m9).',
            ),
            example: { text: L("I'm going to refactor this module next sprint.", 'Наступного спринту я збираюся відрефакторити цей модуль.') },
          },
        },
        {
          id: 'arranged',
          label: L('Fixed with other people — time and place agreed', 'Зафіксовано з іншими людьми — час і місце погоджено'),
          verdict: {
            name: 'Present Continuous',
            time: 'present',
            aspect: 'continuous',
            pattern: 'am / is / are + V-ing (arrangement)',
            why: L(
              'Arrangements take a PRESENT form — the hue jumps to present because the plan already exists now, in calendars and other people\'s heads (m9: the who-fixed-it test).',
              'Домовленості беруть PRESENT-форму — відтінок стрибає в present, бо план уже існує зараз: у календарях і в головах інших людей (m9: тест «хто зафіксував»).',
            ),
            example: { text: L("We're meeting the client on Tuesday.", 'У вівторок ми зустрічаємося з клієнтом.') },
            nearMisses: [
              {
                name: 'will',
                why: L(
                  'Would re-cast it as a spur-of-the-moment decision — the arrangement flavor disappears.',
                  'Перетворив би це на миттєве рішення — присмак домовленості зникає.',
                ),
              },
            ],
          },
        },
        {
          id: 'timetable',
          label: L('An official schedule or timetable', 'Офіційний розклад'),
          verdict: {
            name: 'Present Simple',
            time: 'present',
            aspect: 'simple',
            pattern: 'V1 (timetable use)',
            why: L(
              'Timetables state facts, so they keep Present Simple even about the future (m9).',
              'Розклади констатують факти, тому тримають Present Simple навіть про майбутнє (m9).',
            ),
            example: { text: L('The train leaves at 6:40 tomorrow.', 'Потяг відходить завтра о 6:40.') },
          },
        },
      ],
    },
    {
      id: 'future-moment',
      label: L('A process at a chosen future moment', 'Процес в обраний майбутній момент'),
      leaves: [
        {
          id: 'inside',
          label: L('I will be INSIDE the process at that moment', 'У той момент я буду ВСЕРЕДИНІ процесу'),
          verdict: {
            name: 'Future Continuous',
            time: 'future',
            aspect: 'continuous',
            pattern: 'will be + V-ing',
            why: L(
              'will be + V-ing drops you inside the running process at the chosen future moment X (m9).',
              'will be + V-ing ставить вас усередину процесу в обраний майбутній момент X (m9).',
            ),
            example: { text: L("This time tomorrow I'll be presenting the demo.", 'Завтра о цій порі я презентуватиму демо.') },
            nearMisses: [
              {
                name: 'will',
                why: L(
                  'Names the whole event instead of placing you inside it at the moment.',
                  'Називає цілу подію, замість помістити вас усередину неї в той момент.',
                ),
              },
            ],
          },
        },
        {
          id: 'polite',
          label: L("Politely asking about someone's existing plans", 'Ввічливо питаю про чиїсь наявні плани'),
          verdict: {
            name: 'Future Continuous',
            time: 'future',
            aspect: 'continuous',
            pattern: 'Will you be + V-ing?',
            why: L(
              'Will you be using…? asks about the natural course of events without pushing — the polite-future use (m9, dive 3).',
              'Will you be using…? питає про природний хід подій без тиску — ввічливе майбутнє (m9, dive 3).',
            ),
            example: { text: L('Will you be using the meeting room at three?', 'Ти будеш користуватися переговоркою о третій?') },
          },
        },
      ],
    },
    {
      id: 'deadline',
      label: L('Done — or measured — by a future deadline', 'Зроблено — чи виміряно — до майбутнього дедлайну'),
      leaves: [
        {
          id: 'done-by',
          label: L('Complete by then (by Friday / by the time…)', 'Завершено до того моменту (by Friday / by the time…)'),
          verdict: {
            name: 'Future Perfect',
            time: 'future',
            aspect: 'perfect',
            pattern: 'will have + V3',
            why: L(
              'The ⤺ link back from a future reference point: done by the named deadline — the by-phrase is the trigger (m10).',
              'Звʼязок ⤺ назад від майбутньої точки відліку: зроблено до названого дедлайну — тригер це фраза з by (m10).',
            ),
            example: { text: L('By Friday we will have migrated all the services.', 'До пʼятниці ми вже мігруємо всі сервіси.') },
            nearMisses: [
              {
                name: 'will',
                why: L(
                  'Says it happens sometime later — will have + V3 says it is DONE by the deadline.',
                  'Каже, що станеться колись пізніше — will have + V3 каже, що буде ЗРОБЛЕНО до дедлайну.',
                ),
              },
            ],
          },
        },
        {
          id: 'duration-by',
          label: L('Duration up to then (for N years by…)', 'Тривалість аж до того моменту (for N years by…)'),
          verdict: {
            name: 'Future Perfect Continuous',
            time: 'future',
            aspect: 'perfect-continuous',
            pattern: 'will have been + V-ing',
            why: L(
              'A process measured up to the future point: "by May — five years". Recognize it; you will rarely produce it (m6: effort follows frequency).',
              'Процес, виміряний аж до майбутньої точки: «до травня — пʼять років». Достатньо впізнавати; продукувати доведеться рідко (m6).',
            ),
            example: { text: L('In May I will have been working here for five years.', 'У травні буде пʼять років, як я тут працюю.') },
          },
        },
      ],
    },
  ],
};
