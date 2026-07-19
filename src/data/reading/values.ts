import type { ReadingText } from '../types';

/*
 * Reading · category: values (S3 golden batch). Verbatim transcriptions + full UA translations,
 * attributed per `source` (owner decision S3). Long single-paragraph originals are split at their
 * natural transitions for on-screen readability — wording is unchanged.
 */
export const valuesTexts: ReadingText[] = [
  {
    id: 'mistakes-that-are-holding-you-back',
    title: { en: 'Mistakes That Are Holding You Back', uk: 'Помилки, які вас стримують' },
    category: 'values',
    level: 'b1',
    minutes: 3,
    source: { author: 'Learn With Sonali', handle: 'learnwithsonali' },
    topics: ['success', 'mistakes', 'self-improvement', 'discipline'],
    body: {
      en: [
        'Many people believe that success comes only to those who are extremely talented or very lucky, but the truth is that success is mostly decided by the small choices we make every single day. There are some common mistakes that almost everyone makes at some point in life, and these mistakes become the reason for our slow progress and unfulfilled dreams.',
        'The first and biggest mistake is waiting for the perfect time to start something new. The perfect time will never come, because life is never completely perfect. The second mistake is being afraid of failure. When we fear failing, we stop ourselves from trying, and without trying, we can never succeed. Another mistake is comparing ourselves with others. Everyone’s journey is different, and comparing only creates jealousy and lowers our confidence.',
        'Many people also waste a lot of time on unimportant things like endless scrolling, unnecessary overthinking, or activities that do not add any value to their future. Giving up too early is another mistake that kills many good opportunities. Success usually comes to those who are patient and keep going, even when progress is slow. Ignoring discipline and consistency is also a big mistake. Without discipline, even the best plans and goals remain on paper and never become reality.',
        'Not learning new skills is a mistake that keeps us stuck in the same place, while the world is moving fast. And finally, making excuses instead of taking responsibility is the biggest mistake of all, because excuses keep us in the problem, but responsibility gives us the power to change the situation.',
        'Remember, mistakes are not the end of our journey, but if we don’t learn from them, they can stop us from reaching our full potential. The good news is that we can change. When we become aware of our mistakes and decide to improve a little every day, we start moving towards a better and brighter future. Small steps, when taken consistently, lead to big and meaningful success.',
      ].join('\n\n'),
      uk: [
        'Багато хто вважає, що успіх приходить лише до надзвичайно талановитих чи дуже щасливих людей, та насправді успіх здебільшого вирішують маленькі вибори, які ми робимо щодня. Є кілька поширених помилок, яких майже кожен припускається в певний момент життя, і саме вони стають причиною нашого повільного поступу й нездійснених мрій.',
        'Перша й найбільша помилка — чекати на ідеальний час, щоб почати щось нове. Ідеальний час ніколи не настане, бо життя ніколи не буває повністю досконалим. Друга помилка — боятися невдачі. Коли ми боїмося зазнати поразки, ми зупиняємо себе від спроб, а без спроб успіху не буде. Ще одна помилка — порівнювати себе з іншими. У кожного свій шлях, а порівняння лише породжує заздрість і знижує впевненість.',
        'Багато людей також марнують чимало часу на неважливе — безкінечний скролінг, зайві роздуми чи заняття, що не додають цінності їхньому майбутньому. Здатися надто рано — ще одна помилка, яка вбиває багато хороших можливостей. Успіх зазвичай приходить до тих, хто терплячий і не спиняється, навіть коли поступ повільний. Нехтувати дисципліною та послідовністю — теж велика помилка. Без дисципліни навіть найкращі плани й цілі лишаються на папері й ніколи не стають реальністю.',
        'Не вчитися нових навичок — помилка, що тримає нас на місці, поки світ рухається швидко. І нарешті, шукати виправдання замість того, щоб брати відповідальність, — найбільша помилка з усіх, бо виправдання тримають нас у проблемі, а відповідальність дає силу змінити ситуацію.',
        'Памʼятайте: помилки — це не кінець шляху, але якщо ми не вчимося на них, вони можуть завадити нам розкрити весь потенціал. Хороша новина в тому, що ми можемо змінюватися. Коли ми усвідомлюємо свої помилки й вирішуємо ставати трохи кращими щодня, ми починаємо рухатися до кращого й світлішого майбутнього. Маленькі кроки, зроблені послідовно, ведуть до великого й значущого успіху.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the author, what mostly decides success?', uk: 'За автором, що здебільшого вирішує успіх?' },
        options: [
          { en: 'Extreme talent or luck', uk: 'Надзвичайний талант або удача' },
          { en: 'The small choices we make every day', uk: 'Маленькі вибори, які ми робимо щодня' },
          { en: 'Waiting for the perfect time', uk: 'Очікування ідеального часу' },
        ],
        correct: 1,
        explain: { en: 'The opening claim: success is mostly decided by the small choices we make every single day.', uk: 'Головна теза початку: успіх здебільшого вирішують маленькі щоденні вибори.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the author call “the biggest mistake of all”?', uk: 'Що автор називає «найбільшою помилкою з усіх»?' },
        options: [
          { en: 'Comparing yourself with others', uk: 'Порівнювати себе з іншими' },
          { en: 'Making excuses instead of taking responsibility', uk: 'Шукати виправдання замість відповідальності' },
          { en: 'Waiting for the perfect time', uk: 'Чекати ідеального часу' },
        ],
        correct: 1,
        explain: { en: 'Excuses keep us in the problem; responsibility gives us the power to change the situation.', uk: 'Виправдання тримають нас у проблемі; відповідальність дає силу змінити ситуацію.' },
      },
      {
        kind: 'open',
        q: { en: 'Which mistake in the text do you recognize in yourself, and what small step could you take this week?', uk: 'Яку помилку з тексту ви впізнаєте в собі і який маленький крок могли б зробити цього тижня?' },
        sample: { en: 'Answers will vary. A strong answer names one specific mistake (e.g., endless scrolling) and one concrete, small step (e.g., a 30-minute daily phone limit).', uk: 'Відповіді різнитимуться. Сильна відповідь називає одну конкретну помилку (напр., безкінечний скролінг) і один конкретний маленький крок (напр., ліміт телефону 30 хв на день).' },
      },
      {
        kind: 'open',
        q: { en: 'Why does the author say “the perfect time will never come”? Do you agree?', uk: 'Чому автор каже «ідеальний час ніколи не настане»? Чи згодні ви?' },
        sample: { en: 'Because conditions are never fully ideal, so waiting becomes an excuse to never start. Reasonable answers may agree or partly disagree, noting that some planning is still useful.', uk: 'Бо умови ніколи не бувають повністю ідеальними, тож очікування стає приводом ніколи не починати. Розумні відповіді можуть погоджуватись або частково ні, зауваживши, що певне планування все ж корисне.' },
      },
    ],
  },
  {
    id: 'the-mistake-most-people-make',
    title: { en: 'The Mistake Most People Make', uk: 'Помилка, якої припускається більшість' },
    category: 'values',
    level: 'b1',
    minutes: 1,
    source: { author: 'English Growth Academy' },
    topics: ['habits', 'process', 'growth', 'discipline'],
    body: {
      en: 'Many people focus on changing their results but ignore the habits creating those results. They want success but do not improve their daily actions. They want confidence but avoid practicing. They want growth but stay with the same routine. Real change begins when you improve the process, not just the outcome. Small daily actions create long-term results. Instead of only wishing for a better future, build better habits today. Your future is connected to the choices you make every day.',
      uk: 'Багато людей зосереджуються на зміні своїх результатів, але ігнорують звички, що ці результати створюють. Вони хочуть успіху, та не покращують щоденних дій. Хочуть упевненості, та уникають практики. Хочуть зростання, та лишаються з тією ж рутиною. Справжня зміна починається, коли ти покращуєш процес, а не лише результат. Маленькі щоденні дії створюють довготривалі результати. Замість того щоб просто мріяти про краще майбутнє, будуй кращі звички вже сьогодні. Твоє майбутнє повʼязане з виборами, які ти робиш щодня.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do most people focus on, according to the text?', uk: 'На чому, за текстом, зосереджується більшість?' },
        options: [
          { en: 'The habits behind their results', uk: 'На звичках за їхніми результатами' },
          { en: 'Their results, while ignoring their habits', uk: 'На результатах, ігноруючи звички' },
          { en: 'Other people’s success', uk: 'На чужому успіху' },
        ],
        correct: 1,
        explain: { en: 'They focus on changing results but ignore the habits creating those results.', uk: 'Вони зосереджені на зміні результатів, але ігнорують звички, що їх створюють.' },
      },
      {
        kind: 'mcq',
        q: { en: 'When does real change begin?', uk: 'Коли починається справжня зміна?' },
        options: [
          { en: 'When you improve the process, not just the outcome', uk: 'Коли ти покращуєш процес, а не лише результат' },
          { en: 'When you wish for a better future', uk: 'Коли ти мрієш про краще майбутнє' },
          { en: 'When you get lucky', uk: 'Коли тобі щастить' },
        ],
        correct: 0,
        explain: { en: '“Real change begins when you improve the process, not just the outcome.”', uk: '«Real change begins when you improve the process, not just the outcome.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name one habit you could improve today to move toward a goal you care about.', uk: 'Назвіть одну звичку, яку ви могли б покращити сьогодні, щоб наблизитися до важливої для вас цілі.' },
        sample: { en: 'Answers will vary. A good answer links one small, repeatable habit (e.g., 20 minutes of coding practice) to a specific goal.', uk: 'Відповіді різнитимуться. Гарна відповідь повʼязує одну маленьку повторювану звичку (напр., 20 хв практики коду) з конкретною ціллю.' },
      },
    ],
  },
  {
    id: 'mindset',
    title: { en: 'Mindset', uk: 'Спосіб мислення' },
    category: 'values',
    level: 'b1',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://mindboostenglish.com' },
    topics: ['mindset', 'growth', 'psychology'],
    body: {
      en: 'Mindset is the way we think and see the world. It plays a very important role in our success and happiness. A positive mindset helps us stay strong during difficult times and believe in ourselves. People with a growth mindset see challenges as opportunities to learn and improve. On the other hand, a negative mindset creates fear and doubt. Our thoughts shape our actions, and our actions shape our future. Therefore, it is important to develop a positive and strong mindset. By thinking positively, working hard, and staying focused, we can achieve our goals and live a better life.',
      uk: 'Спосіб мислення — це те, як ми думаємо й бачимо світ. Він відіграє дуже важливу роль у нашому успіху та щасті. Позитивне мислення допомагає лишатися сильними у складні часи й вірити в себе. Люди з мисленням зростання (growth mindset) бачать виклики як можливості вчитися й ставати кращими. Натомість негативне мислення породжує страх і сумнів. Наші думки формують наші дії, а дії формують наше майбутнє. Тому важливо розвивати позитивне й сильне мислення. Думаючи позитивно, наполегливо працюючи й лишаючись зосередженими, ми можемо досягати цілей і жити краще.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How do people with a growth mindset see challenges?', uk: 'Як люди з growth mindset бачать виклики?' },
        options: [
          { en: 'As opportunities to learn and improve', uk: 'Як можливості вчитися й ставати кращими' },
          { en: 'As reasons to give up', uk: 'Як причини здатися' },
          { en: 'As bad luck', uk: 'Як невдачу' },
        ],
        correct: 0,
        explain: { en: 'A growth mindset reframes challenges as chances to learn and improve.', uk: 'Growth mindset переосмислює виклики як шанси вчитися й покращуватися.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, what shapes our future?', uk: 'За текстом, що формує наше майбутнє?' },
        options: [
          { en: 'Only luck', uk: 'Лише удача' },
          { en: 'Our thoughts and actions', uk: 'Наші думки й дії' },
          { en: 'Other people', uk: 'Інші люди' },
        ],
        correct: 1,
        explain: { en: '“Our thoughts shape our actions, and our actions shape our future.”', uk: '«Our thoughts shape our actions, and our actions shape our future.»' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a recent challenge. How would a growth mindset change the way you see it?', uk: 'Опишіть недавній виклик. Як growth mindset змінив би ваше ставлення до нього?' },
        sample: { en: 'Answers will vary. A strong answer names a real challenge and reframes it as a chance to learn a specific skill rather than a fixed failure.', uk: 'Відповіді різнитимуться. Сильна відповідь називає реальний виклик і переосмислює його як шанс опанувати конкретну навичку, а не як остаточну поразку.' },
      },
    ],
  },
];
