// src/data/tenseNavigator.ts — content for the ★ Tense Navigator sim (m6, T1).
// CHANGED (T1): the full 3 × 4 time × aspect matrix: every cell carries the tense name, its
// MEANING (aspect logic, not a rule list), forms +/−/?, two US-English examples (+ UA), signal
// words, near-misses (the tempting rival tense + why it fails) and a corpus-frequency badge
// (Krámský 1969 / Alzuhairy 2016 via Ginseng English: 5 forms ≈ 96% of spoken English —
// Present Simple 57.5 · Past Simple 19.7 · Future 8.5 · Present Perfect 6 · Present Cont 5.1).
// Facts verified against Cambridge Dictionary grammar + British Council pages (m6 sources).
// Content rules: EN authored first; grammar terms stay English in UA text; examples are US English.
import type { TenseCell } from '../lib/tenses';
import type { Localized } from './types';

const L = (en: string, uk: string): Localized => ({ en, uk });

const RARE: Localized = L(
  'rare — the seven non-core forms together are ≈4% of speech',
  'рідкісна — сім не-ядрових форм разом ≈4% мовлення',
);

export const TENSES: Record<'past' | 'present' | 'future', Record<'simple' | 'continuous' | 'perfect' | 'perfect-continuous', TenseCell>> = {
  // ── PRESENT ────────────────────────────────────────────────────────────────
  present: {
    simple: {
      time: 'present',
      aspect: 'simple',
      name: 'Present Simple',
      meaning: L(
        'A fact, habit or general truth — the statement holds in general, not just at this moment.',
        'Факт, звичка або загальна істина — твердження чинне взагалі, а не лише цієї миті.',
      ),
      forms: {
        aff: 'V1 (he/she/it + -s)',
        neg: "don't / doesn't + V1",
        q: 'Do / Does + subject + V1?',
      },
      examples: [
        { text: L('She works from home on Fridays.', 'По пʼятницях вона працює з дому.') },
        { text: L('The nightly job runs at 2 a.m. and sends a report.', 'Нічна джоба запускається о 2:00 і надсилає звіт.') },
      ],
      signals: ['always', 'usually', 'often', 'never', 'every day'],
      nearMisses: [
        {
          name: 'Present Continuous',
          why: L(
            'For something happening RIGHT NOW, Simple is the classic UA-speaker slip: "I work on it now" → *I am working on it now*.',
            'Про те, що відбувається ПРОСТО ЗАРАЗ, Simple — класичний промах україномовних: "I work on it now" → *I am working on it now*.',
          ),
        },
      ],
      freqPct: 57.5,
    },
    continuous: {
      time: 'present',
      aspect: 'continuous',
      name: 'Present Continuous',
      meaning: L(
        'A process unfolding around now — started, not finished, temporary. Also a fixed near-future arrangement.',
        'Процес, що розгортається довкола «зараз» — почався, не завершився, тимчасовий. Також домовленість на найближче майбутнє.',
      ),
      forms: {
        aff: 'am / is / are + V-ing',
        neg: "am not / isn't / aren't + V-ing",
        q: 'Am / Is / Are + subject + V-ing?',
      },
      examples: [
        { text: L("I'm reviewing your pull request right now.", 'Я саме зараз переглядаю твій pull request.') },
        { text: L("We're meeting the client on Tuesday.", 'У вівторок ми зустрічаємося з клієнтом (домовлено).') },
      ],
      signals: ['now', 'right now', 'at the moment', 'currently', 'this week'],
      nearMisses: [
        {
          name: 'Present Simple',
          why: L(
            'State verbs (know, want, agree, believe) stay Simple even about now: *I know* — never "I am knowing". And «я згоден» = *I agree*, not "I am agree".',
            'Дієслова стану (know, want, agree, believe) лишаються в Simple навіть про «зараз»: *I know* — ніколи "I am knowing". І «я згоден» = *I agree*, а не "I am agree".',
          ),
        },
      ],
      freqPct: 5.1,
    },
    perfect: {
      time: 'present',
      aspect: 'perfect',
      name: 'Present Perfect',
      meaning: L(
        'A link back from NOW: a past action whose result or relevance you feel in the present. The WHEN is not stated.',
        'Звʼязок назад від «ЗАРАЗ»: минула дія, результат чи актуальність якої відчутні тепер. КОЛИ саме — не називається.',
      ),
      forms: {
        aff: 'have / has + V3',
        neg: "haven't / hasn't + V3",
        q: 'Have / Has + subject + V3?',
      },
      examples: [
        { text: L("I've fixed the bug — you can redeploy.", 'Я полагодив баг — можна редеплоїти (результат зараз).') },
        { text: L('She has worked here for three years.', 'Вона працює тут три роки (почала в минулому — досі тут).') },
      ],
      signals: ['already', 'just', 'yet', 'ever', 'never', 'for', 'since'],
      nearMisses: [
        {
          name: 'Past Simple',
          why: L(
            'A finished time word (yesterday, in 2020, last week) forces Past Simple: *I finished it yesterday* — never "I have finished it yesterday". The flagship contrast — m10 drills it.',
            'Слово завершеного часу (yesterday, in 2020, last week) вимагає Past Simple: *I finished it yesterday* — ніколи "I have finished it yesterday". Флагманський контраст — m10 його тренує.',
          ),
        },
      ],
      freqPct: 6.0,
    },
    'perfect-continuous': {
      time: 'present',
      aspect: 'perfect-continuous',
      name: 'Present Perfect Continuous',
      meaning: L(
        'A process running up to NOW — you stress the duration or the visible side effects, not the finished result.',
        'Процес, що тривав аж до «ЗАРАЗ» — наголос на тривалості чи видимих слідах, а не на готовому результаті.',
      ),
      forms: {
        aff: 'have / has been + V-ing',
        neg: "haven't / hasn't been + V-ing",
        q: 'Have / Has + subject + been + V-ing?',
      },
      examples: [
        { text: L("I've been debugging this flaky test all morning.", 'Я весь ранок воджуся з цим нестабільним тестом.') },
        { text: L("It's been raining — the streets are wet.", 'Дощило — вулиці мокрі (видимий слід процесу).') },
      ],
      signals: ['for', 'since', 'all day', 'lately', 'recently'],
      nearMisses: [
        {
          name: 'Present Perfect',
          why: L(
            'If the point is the RESULT or a count ("three bugs"), use Present Perfect: *I have fixed three bugs*, not "I have been fixing three bugs".',
            'Якщо суть — РЕЗУЛЬТАТ або кількість («три баги»), потрібен Present Perfect: *I have fixed three bugs*, а не "I have been fixing three bugs".',
          ),
        },
      ],
      freqNote: RARE,
    },
  },

  // ── PAST ───────────────────────────────────────────────────────────────────
  past: {
    simple: {
      time: 'past',
      aspect: 'simple',
      name: 'Past Simple',
      meaning: L(
        'A whole finished event at a known past time — the default storytelling tense.',
        'Ціла завершена подія у відомому минулому часі — базовий tense оповіді.',
      ),
      forms: {
        aff: 'V2 (-ed / irregular)',
        neg: "didn't + V1",
        q: 'Did + subject + V1?',
      },
      examples: [
        { text: L('We shipped the release on Thursday.', 'Ми відвантажили реліз у четвер.') },
        { text: L('I saw that error twice last week.', 'Минулого тижня я бачив цю помилку двічі.') },
      ],
      signals: ['yesterday', 'last week', 'in 2020', 'ago', 'when'],
      nearMisses: [
        {
          name: 'Present Perfect',
          why: L(
            'With *since* UA speakers often slide into Past Simple: "I work here since 2022" / "I worked…" → *I have worked here since 2022* — the period touches now.',
            'Зі *since* україномовні часто зʼїжджають у Past Simple: "I work here since 2022" / "I worked…" → *I have worked here since 2022* — період торкається «зараз».',
          ),
        },
      ],
      freqPct: 19.7,
    },
    continuous: {
      time: 'past',
      aspect: 'continuous',
      name: 'Past Continuous',
      meaning: L(
        'A process in progress at a past moment — the moving background a shorter event interrupts (when/while).',
        'Процес, що тривав у момент минулого — рухоме тло, яке перериває коротша подія (when/while).',
      ),
      forms: {
        aff: 'was / were + V-ing',
        neg: "wasn't / weren't + V-ing",
        q: 'Was / Were + subject + V-ing?',
      },
      examples: [
        { text: L('I was deploying when the alert fired.', 'Я саме деплоїв, коли спрацював алерт.') },
        { text: L('At 9 a.m. we were still discussing the design.', 'О 9-й ранку ми все ще обговорювали дизайн.') },
      ],
      signals: ['while', 'when', 'at 9 a.m.', 'all evening'],
      nearMisses: [
        {
          name: 'Past Simple',
          why: L(
            'Two Simple verbs = sequence ("the alert fired, then I deployed"); background + interruption needs Continuous for the background.',
            'Два Simple поспіль = послідовність («спрацював алерт, потім я задеплоїв»); тло + переривання вимагає Continuous для тла.',
          ),
        },
      ],
      freqNote: RARE,
    },
    perfect: {
      time: 'past',
      aspect: 'perfect',
      name: 'Past Perfect',
      meaning: L(
        'A link back from a PAST reference point: the earlier of two past events — "before-before-now".',
        'Звʼязок назад від МИНУЛОЇ точки відліку: раніша з двох минулих подій — «до того, що до тепер».',
      ),
      forms: {
        aff: 'had + V3',
        neg: "hadn't + V3",
        q: 'Had + subject + V3?',
      },
      examples: [
        { text: L('The service had already crashed when we opened the dashboard.', 'Сервіс уже впав, коли ми відкрили дашборд.') },
        { text: L('She had never used Go before she joined the team.', 'До приходу в команду вона ніколи не користувалася Go.') },
      ],
      signals: ['already', 'before', 'by the time', 'never … before'],
      nearMisses: [
        {
          name: 'Past Simple',
          why: L(
            'If the order is clear (after, and then) plain Past Simple is fine — Past Perfect earns its place only when the sequence would otherwise blur.',
            'Якщо порядок і так ясний (after, and then), достатньо Past Simple — Past Perfect потрібен лише там, де послідовність інакше розмиється.',
          ),
        },
      ],
      freqNote: RARE,
    },
    'perfect-continuous': {
      time: 'past',
      aspect: 'perfect-continuous',
      name: 'Past Perfect Continuous',
      meaning: L(
        'A process running up to a past reference point — duration before a past moment.',
        'Процес, що тривав аж до минулої точки відліку — тривалість перед минулим моментом.',
      ),
      forms: {
        aff: 'had been + V-ing',
        neg: "hadn't been + V-ing",
        q: 'Had + subject + been + V-ing?',
      },
      examples: [
        { text: L('We had been waiting for the build for an hour when CI finally recovered.', 'Ми чекали на білд уже годину, коли CI нарешті ожив.') },
        { text: L('He was tired because he had been driving all night.', 'Він був утомлений, бо їхав за кермом цілу ніч.') },
      ],
      signals: ['for an hour', 'all night', 'by the time'],
      nearMisses: [
        {
          name: 'Past Continuous',
          why: L(
            'Past Continuous is the process AT the moment; Perfect Continuous is the process UP TO the moment — "how long before it".',
            'Past Continuous — процес У момент; Perfect Continuous — процес ДО моменту, «як довго перед ним».',
          ),
        },
      ],
      freqNote: RARE,
    },
  },

  // ── FUTURE ─────────────────────────────────────────────────────────────────
  future: {
    simple: {
      time: 'future',
      aspect: 'simple',
      name: 'Future Simple (will)',
      meaning: L(
        'A prediction, promise or on-the-spot decision about later — will marks the speaker looking forward.',
        'Прогноз, обіцянка або миттєве рішення про пізніше — will позначає погляд мовця вперед.',
      ),
      forms: {
        aff: 'will + V1',
        neg: "won't + V1",
        q: 'Will + subject + V1?',
      },
      examples: [
        { text: L("I'll take a look after lunch.", 'Гляну після обіду (рішення в момент мовлення).') },
        { text: L('This migration will take about an hour.', 'Ця міграція займе близько години (прогноз).') },
      ],
      signals: ['tomorrow', 'next week', 'soon', 'I think', 'probably'],
      nearMisses: [
        {
          name: 'Present Simple',
          why: L(
            'After when / if / until / as soon as, English uses PRESENT for future time: *when the build finishes, I\'ll deploy* — never "when the build will finish".',
            'Після when / if / until / as soon as англійська вживає PRESENT для майбутнього: *when the build finishes, I\'ll deploy* — ніколи "when the build will finish".',
          ),
        },
      ],
      freqPct: 8.5,
    },
    continuous: {
      time: 'future',
      aspect: 'continuous',
      name: 'Future Continuous',
      meaning: L(
        'A process that will be in progress at a future moment — "this time tomorrow I will be doing X".',
        'Процес, що триватиме в майбутній момент — «завтра о цій порі я робитиму X».',
      ),
      forms: {
        aff: 'will be + V-ing',
        neg: "won't be + V-ing",
        q: 'Will + subject + be + V-ing?',
      },
      examples: [
        { text: L("This time tomorrow I'll be presenting the demo.", 'Завтра о цій порі я презентуватиму демо.') },
        { text: L("Don't call at nine — we'll be interviewing a candidate.", 'Не телефонуй о девʼятій — ми співбесідуватимемо кандидата.') },
      ],
      signals: ['this time tomorrow', 'at 9 a.m. tomorrow', 'still'],
      nearMisses: [
        {
          name: 'Future Simple',
          why: L(
            'Will = the whole future event; will be + V-ing = being INSIDE it at a chosen moment.',
            'Will = ціла майбутня подія; will be + V-ing = перебування ВСЕРЕДИНІ неї в обраний момент.',
          ),
        },
      ],
      freqNote: RARE,
    },
    perfect: {
      time: 'future',
      aspect: 'perfect',
      name: 'Future Perfect',
      meaning: L(
        'A link back from a FUTURE reference point: the action will be complete by then.',
        'Звʼязок назад від МАЙБУТНЬОЇ точки відліку: до того моменту дія вже буде завершена.',
      ),
      forms: {
        aff: 'will have + V3',
        neg: "won't have + V3",
        q: 'Will + subject + have + V3?',
      },
      examples: [
        { text: L('By Friday we will have migrated all the services.', 'До пʼятниці ми вже мігруємо всі сервіси.') },
        { text: L("She'll have finished the review by the time you wake up.", 'Поки ти прокинешся, вона вже завершить ревʼю.') },
      ],
      signals: ['by Friday', 'by the time', 'by then'],
      nearMisses: [
        {
          name: 'Future Simple',
          why: L(
            'Will = it happens sometime later; will have + V3 = it is DONE by a named deadline. The "by …" phrase is the trigger.',
            'Will = станеться колись пізніше; will have + V3 = буде ЗРОБЛЕНО до названого дедлайну. Тригер — фраза з "by …".',
          ),
        },
      ],
      freqNote: RARE,
    },
    'perfect-continuous': {
      time: 'future',
      aspect: 'perfect-continuous',
      name: 'Future Perfect Continuous',
      meaning: L(
        'A process running up to a future reference point — "by then, I will have been doing it for N years". Recognize it; you will rarely need to produce it.',
        'Процес аж до майбутньої точки відліку — «на той момент я робитиму це вже N років». Достатньо впізнавати; продукувати доведеться рідко.',
      ),
      forms: {
        aff: 'will have been + V-ing',
        neg: "won't have been + V-ing",
        q: 'Will + subject + have been + V-ing?',
      },
      examples: [
        { text: L('In May I will have been working here for five years.', 'У травні буде пʼять років, як я тут працюю.') },
        { text: L('By midnight the pipeline will have been running for six hours.', 'До опівночі pipeline працюватиме вже шість годин.') },
      ],
      signals: ['by … for N years', 'by then'],
      nearMisses: [
        {
          name: 'Future Perfect',
          why: L(
            'Result by the deadline → will have + V3; duration up to the deadline → will have been + V-ing.',
            'Результат до дедлайну → will have + V3; тривалість аж до дедлайну → will have been + V-ing.',
          ),
        },
      ],
      freqNote: RARE,
    },
  },
};
