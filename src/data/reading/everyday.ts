import type { ReadingText } from '../types';

/*
 * Reading · category: everyday life. Texts transcribed from the owner's screenshot backlog,
 * attributed per `source` (Mind Boost English — Facebook community).
 */
const MBE_FB = { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' };

export const everydayTexts: ReadingText[] = [
  {
    id: 'my-daily-routine',
    title: { en: 'My Daily Routine', uk: 'Мій розпорядок дня' },
    category: 'everyday',
    level: 'a1',
    minutes: 1,
    source: MBE_FB,
    topics: ['routine', 'daily-life'],
    body: {
      en: 'Hello everyone. Today, I want to talk about my daily routine. I wake up early in the morning. I brush my teeth and wash my face. I have breakfast at home. I go to school/work. I study and do my tasks. I have lunch in the afternoon. I play games or read books. In the evening, I spend time with my family. I have dinner at home. I relax and watch TV. I go to bed at night. I feel happy at the end of the day. Thank you for listening.',
      uk: 'Привіт усім. Сьогодні я хочу розповісти про свій розпорядок дня. Я прокидаюся рано вранці. Я чищу зуби й вмиваюся. Я снідаю вдома. Я йду до школи / на роботу. Я навчаюся й виконую свої завдання. Я обідаю вдень. Я граю в ігри або читаю книжки. Увечері я проводжу час із родиною. Я вечеряю вдома. Я відпочиваю й дивлюся телевізор. Уночі я лягаю спати. Наприкінці дня я почуваюся щасливим. Дякую, що вислухали.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'When does the speaker wake up?', uk: 'Коли прокидається оповідач?' },
        options: [
          { en: 'Early in the morning', uk: 'Рано вранці' },
          { en: 'In the afternoon', uk: 'Удень' },
          { en: 'Late at night', uk: 'Пізно вночі' },
        ],
        correct: 0,
        explain: { en: '“I wake up early in the morning.”', uk: '«I wake up early in the morning.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the speaker do in the evening?', uk: 'Що оповідач робить увечері?' },
        options: [
          { en: 'Spends time with family', uk: 'Проводить час із родиною' },
          { en: 'Goes to school', uk: 'Іде до школи' },
          { en: 'Has breakfast', uk: 'Снідає' },
        ],
        correct: 0,
        explain: { en: '“In the evening, I spend time with my family.”', uk: '«In the evening, I spend time with my family.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write three sentences about your own morning routine.', uk: 'Напишіть три речення про свій ранковий розпорядок.' },
        sample: { en: 'Answers will vary. A good answer uses simple present-tense sentences, e.g., “I wake up at seven. I make coffee. I check my email.”', uk: 'Відповіді різнитимуться. Гарна відповідь — прості речення в теперішньому часі, напр.: «I wake up at seven. I make coffee. I check my email.»' },
      },
    ],
  },
  {
    id: 'debt',
    title: { en: 'Debt', uk: 'Борг' },
    category: 'everyday',
    level: 'b1',
    minutes: 1,
    source: MBE_FB,
    topics: ['money', 'responsibility', 'finance'],
    body: {
      en: 'Debt is a serious responsibility that must be handled with care and honesty. Sometimes people take loans to solve problems or improve their lives, but debt should never be taken without planning. Uncontrolled debt brings stress, worry, and hardship. A wise person borrows only when necessary and works hard to repay on time. Managing money carefully, saving regularly, and avoiding unnecessary expenses help us live free from debt and build a peaceful, stable future.',
      uk: 'Борг — це серйозна відповідальність, яку треба нести з обережністю й чесністю. Іноді люди беруть позики, щоб вирішити проблеми чи покращити життя, але борг ніколи не варто брати без планування. Неконтрольований борг приносить стрес, тривогу й труднощі. Мудра людина позичає лише за потреби й наполегливо працює, щоб вчасно повернути. Дбайливе управління грошима, регулярні заощадження та уникнення зайвих витрат допомагають жити без боргів і будувати спокійне, стабільне майбутнє.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, when does a wise person borrow?', uk: 'За текстом, коли позичає мудра людина?' },
        options: [
          { en: 'Only when necessary', uk: 'Лише за потреби' },
          { en: 'Whenever they want something', uk: 'Коли захочеться щось купити' },
          { en: 'Never, under any circumstances', uk: 'Ніколи й за жодних обставин' },
        ],
        correct: 0,
        explain: { en: '“A wise person borrows only when necessary and works hard to repay on time.”', uk: '«A wise person borrows only when necessary…»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does uncontrolled debt bring?', uk: 'Що приносить неконтрольований борг?' },
        options: [
          { en: 'Stress, worry, and hardship', uk: 'Стрес, тривогу й труднощі' },
          { en: 'Peace and stability', uk: 'Спокій і стабільність' },
          { en: 'Nothing at all', uk: 'Зовсім нічого' },
        ],
        correct: 0,
        explain: { en: '“Uncontrolled debt brings stress, worry, and hardship.”', uk: '«Uncontrolled debt brings stress, worry, and hardship.»' },
      },
      {
        kind: 'open',
        q: { en: 'What are two habits from the text that help a person stay free from debt?', uk: 'Які дві звички з тексту допомагають людині лишатися без боргів?' },
        sample: { en: 'Saving regularly and avoiding unnecessary expenses (also: careful money management, borrowing only when necessary, repaying on time).', uk: 'Регулярні заощадження та уникнення зайвих витрат (також: дбайливе управління грошима, позичати лише за потреби, вчасно повертати).' },
      },
    ],
  },
  {
    id: 'coffee',
    title: { en: 'Coffee', uk: 'Кава' },
    category: 'everyday',
    level: 'b1',
    minutes: 1,
    topics: ['coffee', 'daily-life', 'habits'],
    body: {
      en: 'Coffee is one of the most popular drinks in the world. Many people start their day with a cup of coffee. It helps them feel fresh, awake, and active. Coffee is made from roasted coffee beans and has a strong, pleasant smell. There are different types of coffee, such as black coffee, cappuccino, and latte. Coffee shops are popular places where people meet friends, study, or work. Drinking coffee in moderation can improve focus and energy. However, too much coffee is not good for health. Coffee is more than just a drink; for many people, it is a daily habit and a source of comfort.',
      uk: 'Кава — один із найпопулярніших напоїв у світі. Багато людей починають свій день із чашки кави. Вона допомагає їм почуватися свіжими, бадьорими й активними. Каву роблять зі смажених кавових зерен, і вона має сильний приємний аромат. Є різні види кави, як-от чорна кава, капучино й лате. Кавʼярні — популярні місця, де люди зустрічаються з друзями, вчаться чи працюють. Помірне вживання кави може покращити зосередженість і енергію. Однак забагато кави шкідливо для здоровʼя. Кава — це більше, ніж просто напій; для багатьох людей це щоденна звичка й джерело затишку.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What can drinking coffee in moderation do, according to the text?', uk: 'Що може дати помірне вживання кави, за текстом?' },
        options: [
          { en: 'Improve focus and energy', uk: 'Покращити зосередженість і енергію' },
          { en: 'Harm you every time', uk: 'Щоразу шкодити' },
          { en: 'Do nothing at all', uk: 'Не давати нічого' },
        ],
        correct: 0,
        explain: { en: '“Drinking coffee in moderation can improve focus and energy.”', uk: '«Drinking coffee in moderation can improve focus and energy.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What warning does the text give about coffee?', uk: 'Яке застереження щодо кави дає текст?' },
        options: [
          { en: 'Too much coffee is not good for health', uk: 'Забагато кави шкідливо для здоровʼя' },
          { en: 'Coffee should be drunk all day', uk: 'Каву треба пити цілий день' },
          { en: 'Coffee has no smell', uk: 'Кава не має запаху' },
        ],
        correct: 0,
        explain: { en: '“However, too much coffee is not good for health.”', uk: '«…too much coffee is not good for health.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is your favorite drink to start the day, and why?', uk: 'Який ваш улюблений напій, щоб почати день, і чому?' },
        sample: { en: 'Answers will vary. A good answer names a drink and a personal reason (taste, energy, routine, comfort).', uk: 'Відповіді різнитимуться. Гарна відповідь називає напій і особисту причину (смак, енергія, звичка, затишок).' },
      },
    ],
  },
  {
    id: 'after-school',
    title: { en: 'After School', uk: 'Після школи' },
    category: 'everyday',
    level: 'b1',
    minutes: 1,
    topics: ['routine', 'time-management', 'students'],
    body: {
      en: 'After school is an important time in my daily life. When school ends, I feel relaxed and free from classroom pressure. After school, I usually go home, complete my homework, and revise my lessons. This time helps me practice what I learned during the day. Sometimes, I play with friends or enjoy sports to refresh my mind. I also like to read books or practice my English after school. After school time teaches me time management and responsibility. It helps me balance study, rest, and fun. Using after school time wisely makes me more productive and confident. After school is not just free time; it is a chance to grow, learn, and improve myself.',
      uk: 'Час після школи — важлива частина мого повсякдення. Коли уроки закінчуються, я почуваюся розслабленим і вільним від класного тиску. Після школи я зазвичай іду додому, виконую домашнє завдання й повторюю уроки. Цей час допомагає мені закріпити те, що я вивчив за день. Іноді я граю з друзями чи займаюся спортом, щоб освіжити розум. Я також люблю читати книжки чи практикувати англійську після школи. Час після школи вчить мене керувати часом і відповідальності. Він допомагає мені збалансувати навчання, відпочинок і розваги. Мудре використання часу після школи робить мене продуктивнішим і впевненішим. Час після школи — це не просто вільний час; це нагода зростати, вчитися й ставати кращим.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does after-school time teach the speaker?', uk: 'Чого навчає оповідача час після школи?' },
        options: [
          { en: 'Time management and responsibility', uk: 'Керувати часом і відповідальності' },
          { en: 'How to avoid all work', uk: 'Як уникати будь-якої роботи' },
          { en: 'Nothing useful', uk: 'Нічого корисного' },
        ],
        correct: 0,
        explain: { en: '“After school time teaches me time management and responsibility.”', uk: '«…time management and responsibility.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the speaker describe after-school time?', uk: 'Як оповідач описує час після школи?' },
        options: [
          { en: 'Not just free time, but a chance to grow and improve', uk: 'Не просто вільний час, а нагода зростати й ставати кращим' },
          { en: 'Only time to do nothing', uk: 'Лише час нічого не робити' },
          { en: 'A waste of the day', uk: 'Марнування дня' },
        ],
        correct: 0,
        explain: { en: '“After school is not just free time; it is a chance to grow, learn, and improve myself.”', uk: '«…a chance to grow, learn, and improve myself.»' },
      },
      {
        kind: 'open',
        q: { en: 'How do you usually spend your time after work or school? How could you balance it better?', uk: 'Як ви зазвичай проводите час після роботи чи навчання? Як його краще збалансувати?' },
        sample: { en: 'Answers will vary. A good answer describes a real routine and one adjustment for better balance of study, rest, and fun.', uk: 'Відповіді різнитимуться. Гарна відповідь описує реальний розпорядок і одну зміну для кращого балансу навчання, відпочинку й розваг.' },
      },
    ],
  },
  {
    id: 'my-house',
    title: { en: 'My House', uk: 'Мій дім' },
    category: 'everyday',
    level: 'a2',
    minutes: 1,
    topics: ['home', 'family', 'everyday'],
    body: {
      en: 'I live in a small but beautiful house with my family. It is not very big, but it is full of love and happiness. My house is in a quiet area, away from the noise of the main road. It has two floors, and every corner is special to me because I have so many memories there. In front of the house there is a small garden. My mother grows flowers and some vegetables in it. The garden makes our home look fresh and colourful, especially in the morning when the sun shines on the flowers.',
      uk: 'Я живу в невеликому, але гарному будинку разом із родиною. Він не дуже великий, зате сповнений любові й щастя. Мій будинок стоїть у тихому районі, подалі від шуму головної дороги. У ньому два поверхи, і кожен куточок особливий для мене, бо там у мене багато спогадів. Перед будинком є маленький сад. Моя мама вирощує в ньому квіти й трохи овочів. Сад робить нашу оселю свіжою й барвистою, особливо вранці, коли сонце освітлює квіти.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Where is the house located?', uk: 'Де розташований будинок?' },
        options: [
          { en: 'In a quiet area, away from the main road', uk: 'У тихому районі, подалі від головної дороги' },
          { en: 'In a busy city centre', uk: 'У жвавому центрі міста' },
          { en: 'Next to a train station', uk: 'Біля залізничної станції' },
        ],
        correct: 0,
        explain: { en: '“My house is in a quiet area, away from the noise of the main road.”', uk: '«Мій будинок стоїть у тихому районі, подалі від шуму головної дороги.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the mother grow in the garden?', uk: 'Що мама вирощує в саду?' },
        options: [
          { en: 'Flowers and some vegetables', uk: 'Квіти й трохи овочів' },
          { en: 'Only tall trees', uk: 'Лише високі дерева' },
          { en: 'Nothing at all', uk: 'Нічого' },
        ],
        correct: 0,
        explain: { en: '“My mother grows flowers and some vegetables in it.”', uk: '«Моя мама вирощує в ньому квіти й трохи овочів.»' },
      },
      {
        kind: 'open',
        q: { en: 'Describe one room or place in your home that is special to you, and why.', uk: 'Опишіть одну кімнату чи місце вдома, що особливе для вас, і чому.' },
        sample: { en: 'Answers will vary — e.g., a kitchen, a balcony, or a reading corner. A good answer explains the memory or feeling.', uk: 'Відповіді різнитимуться — напр., кухня, балкон чи куточок для читання. Гарна відповідь пояснює спогад або почуття.' },
      },
    ],
  },
];
