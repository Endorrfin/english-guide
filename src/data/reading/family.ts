import type { ReadingText } from '../types';

/*
 * Reading · category: family. ORIGINAL bilingual texts written for this guide (owner-authored,
 * safe to publish). No external source. 2 MCQ + 1 open question each.
 */
export const familyTexts: ReadingText[] = [
  {
    id: 'time-together',
    title: { en: 'Time Together', uk: 'Час разом' },
    category: 'family',
    level: 'a2',
    minutes: 1,
    topics: ['family', 'attention', 'everyday'],
    body: {
      en: 'Families do not grow close through big holidays alone. They grow close through small, ordinary moments: cooking dinner together, a short walk after work, a few honest minutes before sleep. What matters most is not how much time we spend, but how present we are in it. A phone on the table quietly steals attention from the people right in front of us. When we put it away and truly listen, even ten minutes can feel like a gift. Choose one ordinary moment each day and give it your full attention. Over the years, these small moments are what a family remembers.',
      uk: 'Родини стають близькими не лише завдяки великим святам. Вони стають близькими через маленькі буденні миті: спільну вечерю, коротку прогулянку після роботи, кілька щирих хвилин перед сном. Найбільше важить не скільки часу ми проводимо, а наскільки ми присутні в ньому. Телефон на столі тихо краде увагу від людей просто перед нами. Коли ми відкладаємо його й справді слухаємо, навіть десять хвилин можуть відчуватися як подарунок. Оберіть одну буденну мить щодня й віддайте їй усю свою увагу. За роки саме ці маленькі миті родина й памʼятає.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what matters most about family time?', uk: 'За текстом, що найважливіше в родинному часі?' },
        options: [
          { en: 'How present we are in it', uk: 'Наскільки ми присутні в ньому' },
          { en: 'How expensive it is', uk: 'Наскільки він дорогий' },
          { en: 'How many people are there', uk: 'Скільки там людей' },
        ],
        correct: 0,
        explain: { en: '“What matters most is not how much time we spend, but how present we are in it.”', uk: '«Найбільше важить не скільки часу ми проводимо, а наскільки ми присутні в ньому.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What “quietly steals attention” from the people in front of us?', uk: 'Що «тихо краде увагу» від людей перед нами?' },
        options: [
          { en: 'A phone on the table', uk: 'Телефон на столі' },
          { en: 'A short walk', uk: 'Коротка прогулянка' },
          { en: 'Cooking dinner', uk: 'Приготування вечері' },
        ],
        correct: 0,
        explain: { en: '“A phone on the table quietly steals attention…”', uk: '«Телефон на столі тихо краде увагу…»' },
      },
      {
        kind: 'open',
        q: { en: 'Which ordinary daily moment could you give your full attention to this week?', uk: 'Якій буденній щоденній миті ви могли б віддати всю увагу цього тижня?' },
        sample: { en: 'Answers will vary. A good answer names a specific moment (e.g., dinner without phones) and how the reader will protect it.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну мить (напр., вечеря без телефонів) і як читач її оберігатиме.' },
      },
    ],
  },
  {
    id: 'learning-from-grandparents',
    title: { en: 'Learning from Grandparents', uk: 'Вчитися у дідусів і бабусь' },
    category: 'family',
    level: 'b1',
    minutes: 1,
    topics: ['family', 'wisdom', 'generations'],
    body: {
      en: 'Grandparents carry a kind of knowledge that no school teaches: how people lived before, which worries turned out to matter, and which ones faded away. When they tell the same story for the tenth time, it is easy to stop listening — yet inside those stories are lessons paid for with a whole life. Ask them questions while you can. How did they meet? What was the hardest year, and how did they get through it? What would they do differently? Their answers connect you to a history you are part of. One day you will want to remember exactly how they said it.',
      uk: 'Дідусі й бабусі несуть знання, яких не вчить жодна школа: як люди жили раніше, які тривоги виявилися важливими, а які згасли. Коли вони вдесяте розповідають ту саму історію, легко перестати слухати — та всередині цих історій уроки, оплачені цілим життям. Розпитуйте їх, поки можете. Як вони познайомилися? Який рік був найважчий і як вони його пережили? Що зробили б інакше? Їхні відповіді повʼязують вас з історією, частиною якої ви є. Одного дня ви захочете згадати саме те, як вони це казали.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What kind of knowledge does the text say grandparents carry?', uk: 'Яке знання, за текстом, несуть дідусі й бабусі?' },
        options: [
          { en: 'Knowledge that no school teaches', uk: 'Знання, яких не вчить жодна школа' },
          { en: 'Only facts from books', uk: 'Лише факти з книжок' },
          { en: 'Nothing useful today', uk: 'Нічого корисного сьогодні' },
        ],
        correct: 0,
        explain: { en: 'The text calls it a kind of knowledge no school teaches — lived experience.', uk: 'Текст називає це знанням, якого не вчить школа, — прожитим досвідом.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text encourage you to do “while you can”?', uk: 'Що текст закликає робити «поки можете»?' },
        options: [
          { en: 'Ask them questions', uk: 'Розпитувати їх' },
          { en: 'Correct their stories', uk: 'Виправляти їхні історії' },
          { en: 'Avoid the same stories', uk: 'Уникати повторюваних історій' },
        ],
        correct: 0,
        explain: { en: '“Ask them questions while you can.”', uk: '«Розпитуйте їх, поки можете.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write one question you would like to ask an older relative.', uk: 'Напишіть одне питання, яке ви хотіли б поставити старшому родичу.' },
        sample: { en: 'Answers will vary — e.g., “What was the hardest year of your life, and how did you get through it?” A good answer is specific and open-ended.', uk: 'Відповіді різнитимуться — напр., «Який рік був найважчий у твоєму житті і як ти його пережив?» Гарне питання конкретне й відкрите.' },
      },
    ],
  },
];
