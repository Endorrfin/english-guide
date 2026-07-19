import type { ReadingText } from '../types';

/*
 * Reading · category: everyday life. ORIGINAL bilingual texts written for this guide
 * (owner-authored, safe to publish). No external source. 2 MCQ + 1 open question each.
 */
export const everydayTexts: ReadingText[] = [
  {
    id: 'a-calm-morning',
    title: { en: 'A Calm Morning', uk: 'Спокійний ранок' },
    category: 'everyday',
    level: 'a2',
    minutes: 1,
    topics: ['routine', 'mornings', 'calm'],
    body: {
      en: 'The first hour of the day often decides the rest of it. When we wake and reach straight for the phone, we hand our attention to other people before we have even chosen our own thoughts. A calm morning is simple to build. Wake a little earlier than you must. Drink some water. Open a window. Do one small useful thing before you check any screen — make the bed, stretch, or write down the single task that matters most today. None of this is dramatic, but it changes the feeling of the whole day. You start as the author of your morning, not a reader of everyone else’s.',
      uk: 'Перша година дня часто вирішує решту. Коли ми прокидаємось і одразу тягнемось до телефона, ми віддаємо свою увагу іншим людям ще до того, як обрали власні думки. Спокійний ранок легко збудувати. Прокиньтеся трохи раніше, ніж мусите. Випийте води. Відчиніть вікно. Зробіть одну маленьку корисну річ до того, як зазирнете в екран, — заправте ліжко, потягніться або запишіть єдине завдання, що найважливіше сьогодні. Нічого драматичного, але це змінює відчуття всього дня. Ви починаєте як автор свого ранку, а не читач чужих.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What happens when we reach straight for the phone on waking?', uk: 'Що стається, коли ми, прокинувшись, одразу тягнемось до телефона?' },
        options: [
          { en: 'We give our attention to others before choosing our own thoughts', uk: 'Ми віддаємо увагу іншим ще до власних думок' },
          { en: 'We instantly feel calm', uk: 'Ми миттєво заспокоюємось' },
          { en: 'We save a lot of time', uk: 'Ми заощаджуємо багато часу' },
        ],
        correct: 0,
        explain: { en: 'The phone hands our attention to other people before we have chosen our own thoughts.', uk: 'Телефон віддає нашу увагу іншим ще до того, як ми обрали власні думки.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Which is suggested as a calm-morning action?', uk: 'Яку дію радять для спокійного ранку?' },
        options: [
          { en: 'Do one small useful thing before any screen', uk: 'Зробити одну корисну річ до будь-якого екрана' },
          { en: 'Check every notification first', uk: 'Спершу перевірити всі сповіщення' },
          { en: 'Skip drinking water', uk: 'Не пити води' },
        ],
        correct: 0,
        explain: { en: 'Make the bed, stretch, or write the day’s main task before checking a screen.', uk: 'Заправити ліжко, потягнутися чи записати головне завдання — до екрана.' },
      },
      {
        kind: 'open',
        q: { en: 'What one small thing could you do before checking a screen tomorrow morning?', uk: 'Яку одну маленьку річ ви могли б зробити до екрана завтра вранці?' },
        sample: { en: 'Answers will vary — e.g., drink water and write the single most important task for the day before opening any app.', uk: 'Відповіді різнитимуться — напр., випити води й записати єдине найважливіше завдання дня до відкриття будь-якого застосунку.' },
      },
    ],
  },
  {
    id: 'tidy-as-you-go',
    title: { en: 'Tidy As You Go', uk: 'Прибирай по ходу' },
    category: 'everyday',
    level: 'a2',
    minutes: 1,
    topics: ['home', 'habits', 'order'],
    body: {
      en: 'A messy home is rarely made in a day; it grows one postponed small task at a time. The cup left on the desk, the coat dropped on the chair, the dish “I’ll wash later” — each takes seconds to handle now and minutes to fix later. “Tidy as you go” means dealing with things the moment they appear: wash the cup while the kettle boils, hang the coat as you enter, put the tool back before starting the next one. This habit keeps disorder from ever building up, so you almost never need a big cleaning day. Small, immediate effort quietly protects your time and your calm.',
      uk: 'Безлад удома рідко зʼявляється за день; він росте по одному відкладеному дрібному ділу. Чашка, лишена на столі, куртка, кинута на стілець, тарілка «помию пізніше» — кожне забирає секунди зараз і хвилини потім. «Прибирай по ходу» означає розбиратися з речами тієї ж миті, щойно вони зʼявляються: вимий чашку, поки закипає чайник, повісь куртку, щойно зайшов, поклади інструмент на місце перед наступним. Ця звичка не дає безладу накопичуватися, тож великий день прибирання майже ніколи не потрібен. Маленьке негайне зусилля тихо береже ваш час і ваш спокій.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How does a messy home usually grow, according to the text?', uk: 'Як зазвичай росте безлад удома, за текстом?' },
        options: [
          { en: 'One postponed small task at a time', uk: 'По одному відкладеному дрібному ділу' },
          { en: 'All at once in a single day', uk: 'Увесь одразу за один день' },
          { en: 'Only when guests come', uk: 'Лише коли приходять гості' },
        ],
        correct: 0,
        explain: { en: 'It grows one postponed small task at a time.', uk: 'Він росте по одному відкладеному дрібному ділу.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does “tidy as you go” mean?', uk: 'Що означає «прибирай по ходу»?' },
        options: [
          { en: 'Deal with things the moment they appear', uk: 'Розбиратися з речами тієї ж миті' },
          { en: 'Wait for one big cleaning day', uk: 'Чекати одного великого дня прибирання' },
          { en: 'Hire someone else', uk: 'Найняти когось іншого' },
        ],
        correct: 0,
        explain: { en: 'Handle each small thing immediately so disorder never builds up.', uk: 'Розбирайся з кожною дрібницею одразу, щоб безлад не накопичувався.' },
      },
      {
        kind: 'open',
        q: { en: 'Which small “I’ll do it later” task do you most often postpone at home?', uk: 'Яку дрібну справу «зроблю пізніше» ви найчастіше відкладаєте вдома?' },
        sample: { en: 'Answers will vary. A good answer names a specific recurring task and a “tidy as you go” moment to handle it.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну повторювану справу й момент, коли робити її «по ходу».' },
      },
    ],
  },
];
