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
  // CHANGED (Wave S2, §15 screenshot OCR): +5 texts from the "stage II text_screenshots" backlog.
  {
    id: 'phone-talk',
    title: { en: 'Phone Talk', uk: 'Розмова по телефону' },
    category: 'everyday',
    level: 'a2',
    minutes: 1,
    topics: ['communication', 'phone-etiquette', 'everyday-english'],
    body: {
      en: 'Talking on the phone is an important communication skill. First, we should greet the other person politely. Speaking clearly helps the listener understand better. It is important to listen carefully and not interrupt. Using simple words makes the conversation easy. We should speak in a calm and respectful tone. If we do not understand, we can ask the person to repeat. Ending the call politely is also important. Good phone manners show respect and confidence. Knowing how to talk on the phone helps in daily life and work.',
      uk: 'Розмова по телефону — важлива навичка спілкування. Перш за все, варто ввічливо привітати співрозмовника. Чітка вимова допомагає слухачеві краще зрозуміти сказане. Важливо уважно слухати і не перебивати. Прості слова роблять розмову легшою для сприйняття. Говорити слід спокійним і шанобливим тоном. Якщо щось незрозуміло, можна попросити співрозмовника повторити. Ввічливо завершити розмову — також важливо. Гарні телефонні манери демонструють повагу і впевненість. Уміння правильно розмовляти по телефону допомагає і в повсякденному житті, і на роботі.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what should you do if you don\'t understand what the other person said?', uk: 'Що, згідно з текстом, варто зробити, якщо ви не зрозуміли співрозмовника?' },
        options: [
          { en: 'Hang up immediately', uk: 'Одразу покласти слухавку' },
          { en: 'Pretend you understood', uk: 'Вдати, що зрозуміли' },
          { en: 'Ask the person to repeat', uk: 'Попросити повторити' },
        ],
        correct: 2,
        explain: { en: 'The text says: "If we do not understand, we can ask the person to repeat."', uk: 'У тексті сказано: якщо ми не розуміємо, можна попросити співрозмовника повторити.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say using simple words does for a conversation?', uk: 'Що, за текстом, роблять прості слова для розмови?' },
        options: [
          { en: 'Makes you sound rude', uk: 'Роблять вас грубим' },
          { en: 'Makes the conversation easy', uk: 'Роблять розмову легкою' },
          { en: 'Confuses the listener', uk: 'Плутають слухача' },
        ],
        correct: 1,
        explain: { en: 'The text states: "Using simple words makes the conversation easy."', uk: 'У тексті зазначено: прості слова роблять розмову легшою.' },
      },
      {
        kind: 'open',
        q: { en: 'Which phone manners from the text do you already practice, and which one could you improve?', uk: 'Які телефонні манери з тексту ви вже практикуєте, а над якою варто попрацювати?' },
        sample: { en: 'I usually greet people politely and speak clearly, but I sometimes interrupt when I\'m excited. I could work on listening more carefully before responding.', uk: 'Зазвичай я ввічливо вітаюся і говорю чітко, але іноді перебиваю, коли хвилююся. Мені варто попрацювати над тим, щоб уважніше слухати, перш ніж відповідати.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'our-house',
    title: { en: 'Our House', uk: 'Наш дім' },
    category: 'everyday',
    level: 'a2',
    minutes: 1,
    topics: ['home', 'family', 'dreams'],
    body: {
      en: [
        'My dream house is a beautiful and peaceful place where I can feel happy and relaxed. It has big windows, a cozy living room, and a lovely garden full of flowers. I imagine a quiet space where I can read, learn, and spend time with my family. My dream house is filled with love, comfort, and positive energy. It is not just about luxury, but about feeling safe and at home.',
        'I hope to build my dream house one day with hard work and dedication. It will be a place where my dreams come true and memories are made.',
      ].join('\n\n'),
      uk: [
        'Дім моєї мрії — це прекрасне й затишне місце, де я можу почуватися щасливим і розслабленим. У ньому великі вікна, затишна вітальня та чудовий сад, повний квітів. Я уявляю тиху місцину, де можна читати, вчитися і проводити час із родиною. Дім моєї мрії наповнений любовʼю, теплом і позитивною енергією. Річ не лише в розкоші, а в тому, щоб почуватися в безпеці і як удома.',
        'Я сподіваюся колись збудувати дім своєї мрії наполегливою працею і відданістю справі. Це буде місце, де здійснюються мої мрії і народжуються спогади.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text say the dream house has, besides big windows and a cozy living room?', uk: 'Що, за текстом, є в домі мрії, окрім великих вікон і затишної вітальні?' },
        options: [
          { en: 'A swimming pool', uk: 'Басейн' },
          { en: 'A home cinema', uk: 'Домашній кінотеатр' },
          { en: 'A lovely garden full of flowers', uk: 'Чудовий сад, повний квітів' },
        ],
        correct: 2,
        explain: { en: 'The text lists big windows, a cozy living room, and a lovely garden full of flowers.', uk: 'У тексті перераховано великі вікна, затишну вітальню та чудовий сад, повний квітів.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, what is the dream house really about, not just luxury?', uk: 'Про що насправді дім мрії, а не лише про розкіш, за текстом?' },
        options: [
          { en: 'Feeling safe and at home', uk: 'Почуватися в безпеці і як удома' },
          { en: 'Having expensive furniture', uk: 'Мати дорогі меблі' },
          { en: 'Impressing neighbors', uk: 'Вразити сусідів' },
        ],
        correct: 0,
        explain: { en: 'The text says it is not just about luxury, but about feeling safe and at home.', uk: 'У тексті сказано, що річ не лише в розкоші, а в тому, щоб почуватися в безпеці і як удома.' },
      },
      {
        kind: 'open',
        q: { en: 'What would your own dream house look like, and why is it important to you?', uk: 'Яким був би твій власний дім мрії і чому він для тебе важливий?' },
        sample: { en: 'My dream house would be a small cottage near the sea with a big library and a garden. It matters to me because I want a quiet place where I can relax, read, and spend time with the people I love.', uk: 'Мій дім мрії — це невеликий котедж біля моря з великою бібліотекою і садом. Для мене це важливо, бо я хочу мати тихе місце, де можна відпочивати, читати й проводити час із тими, кого я люблю.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'my-dream-house',
    title: { en: 'My Dream House', uk: 'Дім моєї мрії' },
    category: 'everyday',
    level: 'a2',
    minutes: 1,
    topics: ['home', 'dreams', 'hard-work'],
    body: {
      en: 'My dream house is not just a building, it is a place full of hope and happiness. It has big windows where sunlight comes in and fills every room with warmth. In my dream house, there is a small study room where I work hard to achieve my goals every day. There is also a garden that reminds me to stay calm, patient, and grow like the plants. My dream house teaches me that success comes from effort and belief in myself. I know that one day, with hard work and dedication, I will build this beautiful home. This dream gives me strength to keep going and never give up.',
      uk: 'Дім моєї мрії — це не просто будівля, це місце, сповнене надії та щастя. У ньому великі вікна, крізь які проникає сонячне світло і наповнює теплом кожну кімнату. У домі моєї мрії є невеликий кабінет, де я щодня наполегливо працюю, щоб досягти своїх цілей. Там також є сад, який нагадує мені залишатися спокійним, терплячим і рости, як ті рослини. Дім моєї мрії вчить мене, що успіх приходить через зусилля і віру в себе. Я знаю, що одного дня, завдяки тяжкій праці та відданості справі, я збудую цей прекрасний дім. Ця мрія дає мені сили рухатися далі і ніколи не здаватися.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the small study room in the dream house represent, according to the text?', uk: 'Що, за текстом, символізує невеликий кабінет у домі мрії?' },
        options: [
          { en: 'A place to relax and sleep', uk: 'Місце для відпочинку і сну' },
          { en: 'A place to work hard and achieve goals', uk: 'Місце, де наполегливо працюють і досягають цілей' },
          { en: 'A place to entertain guests', uk: 'Місце для прийому гостей' },
        ],
        correct: 1,
        explain: { en: 'The text says the study room is where the author works hard every day to achieve their goals.', uk: 'У тексті сказано, що в кабінеті автор щодня наполегливо працює, щоб досягти своїх цілей.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does the garden remind the author to do?', uk: 'Про що, за текстом, нагадує авторові сад?' },
        options: [
          { en: 'Sell the house', uk: 'Продати будинок' },
          { en: 'Invite more friends', uk: 'Запросити більше друзів' },
          { en: 'Stay calm, patient, and grow like the plants', uk: 'Залишатися спокійним, терплячим і рости, як рослини' },
        ],
        correct: 2,
        explain: { en: 'The text says the garden reminds the author to stay calm, patient, and grow like the plants.', uk: 'У тексті сказано, що сад нагадує авторові залишатися спокійним, терплячим і рости, як рослини.' },
      },
      {
        kind: 'open',
        q: { en: 'The text says \'success comes from effort and belief in myself.\' Do you agree? Why or why not?', uk: 'Текст стверджує: «успіх приходить через зусилля і віру в себе». Чи погоджуєшся ти з цим? Чому так або ні?' },
        sample: { en: 'I agree, because I have noticed that when I believe I can succeed and keep working steadily, I make progress even on difficult tasks, while doubting myself usually makes me give up too soon.', uk: 'Я погоджуюся, бо помітив(ла), що коли я вірю у власний успіх і продовжую наполегливо працювати, то досягаю прогресу навіть у складних справах, тоді як сумніви в собі зазвичай змушують мене здаватися надто рано.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'my-village',
    title: { en: 'My Village', uk: 'Моє село' },
    category: 'everyday',
    level: 'a2',
    minutes: 1,
    topics: ['village', 'community', 'tradition', 'home'],
    body: {
      en: 'Hello How are you everyone. Today I want to talk about my village. My village is a place of peace, simplicity, and natural beauty. People in my village are kind, honest, and always ready to help each other. The air is fresh, and life is simple and calm. We respect our traditions and live like a family. Children play freely, and elders share wisdom and stories. My village teaches me the values of hard work, unity, and respect. No matter where I go, I always feel proud of my village. Thank you.',
      uk: 'Привіт, як у вас справи? Сьогодні я хочу розповісти про своє село. Моє село — місце спокою, простоти й природної краси. Люди в моєму селі добрі, чесні і завжди готові допомогти одне одному. Повітря тут свіже, а життя просте та спокійне. Ми шануємо свої традиції і живемо як одна родина. Діти вільно бавляться, а старші діляться мудрістю та історіями. Моє село вчить мене цінувати працю, єдність і повагу. Хоч би куди я поїхав, я завжди пишаюся своїм селом. Дякую.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How does the author describe the people in the village?', uk: 'Як автор описує людей у селі?' },
        options: [
          { en: 'Kind, honest, and always ready to help each other', uk: 'Добрі, чесні й завжди готові допомогти одне одному' },
          { en: 'Competitive and distant from one another', uk: 'Конкурентні й відсторонені одне від одного' },
          { en: 'Busy and too tired to talk', uk: 'Заклопотані й надто втомлені, щоб спілкуватися' },
        ],
        correct: 0,
        explain: { en: 'The text says people in the village are kind, honest, and always ready to help each other.', uk: 'У тексті сказано, що люди в селі добрі, чесні й завжди готові допомогти одне одному.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What values does the author say the village teaches them?', uk: 'Яких цінностей, за словами автора, навчає село?' },
        options: [
          { en: 'Speed and competition', uk: 'Швидкості й суперництва' },
          { en: 'Hard work, unity, and respect', uk: 'Праці, єдності й поваги' },
          { en: 'Wealth and fame', uk: 'Багатства й слави' },
        ],
        correct: 1,
        explain: { en: 'The author states the village teaches the values of hard work, unity, and respect.', uk: 'Автор каже, що село вчить цінувати працю, єдність і повагу.' },
      },
      {
        kind: 'open',
        q: { en: 'What makes you feel proud of the place where you grew up?', uk: 'Що змушує вас пишатися місцем, де ви виросли?' },
        sample: { en: 'I feel proud of my hometown because of its close community, the traditions we share, and the way people support one another in difficult times.', uk: 'Я пишаюся своїм рідним містом через його згуртовану громаду, традиції, які ми поділяємо, та готовність людей підтримувати одне одного у важкі часи.' },
      },
    ],
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
  },
  {
    id: 'new-food',
    title: { en: 'New Food', uk: 'Нова їжа' },
    category: 'everyday',
    level: 'a2',
    minutes: 1,
    topics: ['food', 'family', 'new experiences'],
    body: {
      en: 'One day, my mom made sushi for dinner. I had never eaten it before and felt unsure. She encouraged me to take a small bite. To my surprise, I loved it! The flavors were different but delicious. I asked for another piece. Now, sushi is one of my favorite foods. I realized that trying new things can be exciting. That day, I learned to be more open to new experiences.',
      uk: 'Одного дня моя мама приготувала суші на вечерю. Я ніколи раніше їх не їв і почувався невпевнено. Вона підбадьорила мене спробувати маленький шматочок. На мій подив, мені сподобалось! Смак був незвичний, але дуже смачний. Я попросив ще один шматочок. Тепер суші — одна з моїх улюблених страв. Я зрозумів, що пробувати нове може бути захопливо. Того дня я навчився бути більш відкритим до нового досвіду.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How did the narrator feel before trying sushi for the first time?', uk: 'Як почувався оповідач перед тим, як уперше спробувати суші?' },
        options: [
          { en: 'Excited and confident', uk: 'Схвильовано та впевнено' },
          { en: 'Unsure', uk: 'Невпевнено' },
          { en: 'Angry', uk: 'Розлючено' },
        ],
        correct: 1,
        explain: { en: 'The text says: \'I had never eaten it before and felt unsure.\'', uk: 'У тексті сказано: «Я ніколи раніше їх не їв і почувався невпевнено».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What lesson did the narrator learn that day?', uk: 'Якого уроку навчився оповідач того дня?' },
        options: [
          { en: 'Sushi is the best food in the world', uk: 'Суші — найкраща їжа у світі' },
          { en: 'Cooking Japanese food is difficult', uk: 'Готувати японську їжу складно' },
          { en: 'Trying new things can be exciting', uk: 'Пробувати нове може бути захопливо' },
        ],
        correct: 2,
        explain: { en: 'The text says: \'I realized that trying new things can be exciting. That day, I learned to be more open to new experiences.\'', uk: 'У тексті сказано: «Я зрозумів, що пробувати нове може бути захопливо. Того дня я навчився бути більш відкритим до нового досвіду».' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a time you tried a new food or activity that you were unsure about at first. What happened?', uk: 'Опишіть випадок, коли ви спробували нову їжу чи заняття, у якому спочатку сумнівалися. Що сталося?' },
        sample: { en: 'I was nervous to try snorkeling for the first time, but once I saw the colorful fish underwater, I forgot my fear and loved every minute of it.', uk: 'Я хвилювався, коли вперше пробував пірнати з маскою, але щойно побачив під водою кольорових рибок, забув про страх і насолоджувався кожною миттю.' },
      },
    ],
  },
];
