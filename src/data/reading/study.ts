import type { ReadingText } from '../types';

/*
 * Reading · category: study & learning. Texts transcribed from the owner's screenshot backlog,
 * attributed per `source`. EN is the study object; `body.uk` is a full natural translation;
 * comprehension questions (mcq + open) per the S3 contract.
 */
export const studyTexts: ReadingText[] = [
  {
    id: 'the-habit-of-reading-daily',
    title: { en: 'The Habit of Reading Daily', uk: 'Звичка читати щодня' },
    category: 'study',
    level: 'b1',
    minutes: 2,
    source: { author: 'Learn With Sonali', handle: 'learnwithsonali' },
    topics: ['reading', 'habits', 'self-improvement'],
    body: {
      en: [
        'Reading is one of the best habits anyone can have in life. When we read every day, we feed our mind with new ideas and good thoughts. The habit of reading daily may seem small, but it brings big changes to our knowledge, thinking, and personality.',
        'First of all, reading increases our knowledge. Books, newspapers, and articles teach us many new things about the world, people, nature, science, history, and much more. The more we read, the more we understand life and the world around us.',
        'Daily reading also improves our vocabulary. When we come across new words and their meanings, we learn to use them in our own speaking and writing. This makes our language strong and helps us express our thoughts better.',
        'Another great benefit of reading is that it improves our imagination. Good books take us to new places, introduce us to new characters, and help us dream bigger. They inspire us to think creatively and look at life from different perspectives.',
        'Reading every day also increases our concentration. When we read with focus, our mind learns to stay calm and attentive. This helps us in our studies and in every important work we do.',
        'The best part is that we don’t need to read for hours. Even 15 to 20 minutes of reading every day can make a huge difference. A little reading daily builds a strong habit, and a strong habit changes our life.',
        'In conclusion, reading daily is a simple habit with powerful results. It increases knowledge, improves vocabulary, sparks imagination, and sharpens concentration. Let us all make reading a part of our daily routine and keep growing every day.',
      ].join('\n\n'),
      uk: [
        'Читання — одна з найкращих звичок, які може мати людина. Коли ми читаємо щодня, ми живимо свій розум новими ідеями й добрими думками. Звичка читати щодня може здаватися дрібницею, але вона приносить великі зміни в наші знання, мислення й особистість.',
        'По-перше, читання збільшує наші знання. Книжки, газети та статті вчать нас багатьох нових речей про світ, людей, природу, науку, історію та багато іншого. Що більше ми читаємо, то краще розуміємо життя і світ навколо нас.',
        'Щоденне читання також покращує наш словниковий запас. Натрапляючи на нові слова та їхні значення, ми вчимося вживати їх у власному мовленні й письмі. Це робить нашу мову сильною й допомагає краще висловлювати думки.',
        'Ще одна велика перевага читання — воно розвиває нашу уяву. Хороші книжки переносять нас у нові місця, знайомлять із новими героями й допомагають мріяти сміливіше. Вони надихають мислити творчо й дивитися на життя з різних боків.',
        'Читання щодня також підвищує нашу концентрацію. Коли ми читаємо зосереджено, розум учиться залишатися спокійним і уважним. Це допомагає в навчанні та в кожній важливій справі.',
        'Найкраще те, що не треба читати годинами. Навіть 15–20 хвилин читання щодня можуть дати величезну різницю. Трохи читання щодня будує міцну звичку, а міцна звичка змінює наше життя.',
        'Підсумовуючи: читати щодня — проста звичка з потужними результатами. Вона збільшує знання, покращує словниковий запас, пробуджує уяву й загострює концентрацію. Зробімо читання частиною щоденної рутини й зростаймо щодня.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How much daily reading, according to the text, can already make a big difference?', uk: 'Скільки щоденного читання, за текстом, уже може дати велику різницю?' },
        options: [
          { en: 'Several hours a day', uk: 'Кілька годин на день' },
          { en: '15 to 20 minutes a day', uk: '15–20 хвилин на день' },
          { en: 'Only on weekends', uk: 'Тільки на вихідних' },
        ],
        correct: 1,
        explain: { en: 'The text says even 15 to 20 minutes of reading every day can make a huge difference.', uk: 'У тексті сказано, що навіть 15–20 хвилин читання щодня можуть дати величезну різницю.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Which benefit is NOT mentioned in the text?', uk: 'Яку перевагу в тексті НЕ згадано?' },
        options: [
          { en: 'It improves vocabulary', uk: 'Покращує словниковий запас' },
          { en: 'It increases concentration', uk: 'Підвищує концентрацію' },
          { en: 'It guarantees a high salary', uk: 'Гарантує високу зарплату' },
        ],
        correct: 2,
        explain: { en: 'The text lists knowledge, vocabulary, imagination, and concentration — not money.', uk: 'Текст перелічує знання, словниковий запас, уяву й концентрацію — не гроші.' },
      },
      {
        kind: 'open',
        q: { en: 'In your own words, why does the author say a small daily habit can change your life?', uk: 'Своїми словами: чому автор каже, що маленька щоденна звичка може змінити життя?' },
        sample: { en: 'Because small actions repeated every day add up: a little reading daily slowly builds knowledge, vocabulary, and focus, and over time those gains compound into a real change.', uk: 'Бо маленькі дії, повторювані щодня, накопичуються: трохи читання щодня поступово будує знання, словник і зосередженість, і згодом ці набутки складаються у справжню зміну.' },
      },
      {
        kind: 'open',
        q: { en: 'Which benefit of reading matters most to you, and why?', uk: 'Яка перевага читання найважливіша особисто для вас і чому?' },
        sample: { en: 'Answers will vary. A strong answer names one benefit (e.g., vocabulary for work emails) and gives a personal reason tied to the reader’s own goals.', uk: 'Відповіді різнитимуться. Сильна відповідь називає одну перевагу (напр., словник для робочих листів) і дає особисту причину, повʼязану з власними цілями читача.' },
      },
    ],
  },
  {
    id: 'simple-steps-to-learn-english-fast',
    title: { en: 'Simple Steps to Learn English Fast', uk: 'Прості кроки, щоб швидко вивчити англійську' },
    category: 'study',
    level: 'a2',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://mindboostenglish.com' },
    topics: ['english', 'learning', 'habits'],
    body: {
      en: 'Learning English can be easy if you follow simple steps every day. First, build a strong habit by studying a little daily, even if it is only 20 minutes. Next, focus on learning common words and useful phrases that you can use in real life. Listening is also very important, so try to hear English through songs, videos, or podcasts. Practice speaking without fear, because mistakes are part of learning. Reading short stories and writing small sentences will also improve your skills. Stay motivated and patient, and over time, you will see great progress in your English.',
      uk: 'Вивчати англійську може бути легко, якщо щодня виконувати прості кроки. По-перше, побудуйте міцну звичку, навчаючись потроху щодня, навіть якщо це лише 20 хвилин. Далі зосередьтеся на вивченні поширених слів і корисних фраз, які можна вживати в реальному житті. Слухання теж дуже важливе, тож намагайтеся чути англійську через пісні, відео чи подкасти. Практикуйте мовлення без страху, адже помилки — частина навчання. Читання коротких оповідань і писання невеликих речень також покращать ваші навички. Залишайтеся вмотивованими й терплячими — і з часом ви побачите чудовий прогрес в англійській.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text say about mistakes?', uk: 'Що текст каже про помилки?' },
        options: [
          { en: 'They should be avoided completely', uk: 'Їх треба повністю уникати' },
          { en: 'They are part of learning', uk: 'Вони — частина навчання' },
          { en: 'They mean you should stop', uk: 'Вони означають, що треба зупинитися' },
        ],
        correct: 1,
        explain: { en: '“Practice speaking without fear, because mistakes are part of learning.”', uk: '«Practice speaking without fear, because mistakes are part of learning.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Which is suggested for listening practice?', uk: 'Що радять для практики слухання?' },
        options: [
          { en: 'Songs, videos, or podcasts', uk: 'Пісні, відео чи подкасти' },
          { en: 'Only textbooks', uk: 'Лише підручники' },
          { en: 'Silent reading', uk: 'Читання про себе' },
        ],
        correct: 0,
        explain: { en: 'The text suggests hearing English through songs, videos, or podcasts.', uk: 'Текст радить чути англійську через пісні, відео чи подкасти.' },
      },
      {
        kind: 'open',
        q: { en: 'The text lists several steps. Which two would you start with, and why?', uk: 'Текст перелічує кілька кроків. З яких двох ви б почали і чому?' },
        sample: { en: 'Answers will vary. A good answer picks two concrete steps (e.g., 20 minutes daily + listening to podcasts) and gives a practical reason each fits the reader’s routine.', uk: 'Відповіді різнитимуться. Гарна відповідь обирає два конкретні кроки (напр., 20 хвилин щодня + слухання подкастів) і дає практичну причину, чому кожен пасує до рутини читача.' },
      },
    ],
  },
  {
    id: 'how-to-learn-english',
    title: { en: 'How to Learn English', uk: 'Як вивчати англійську' },
    category: 'study',
    level: 'a2',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['english', 'learning', 'practice'],
    body: {
      en: 'Learning English becomes easy when we practice it every day. Start by listening to English through songs, videos, and conversations. Read simple books and speak without fear of making mistakes. Practice speaking in front of a mirror or with friends. Learn new words daily and use them in sentences. Consistency is the key to success. If you keep practicing, your English will improve step by step and you will gain confidence.',
      uk: 'Вивчати англійську стає легко, коли ми практикуємо її щодня. Почніть зі слухання англійської через пісні, відео й розмови. Читайте прості книжки й говоріть без страху помилитися. Практикуйте мовлення перед дзеркалом або з друзями. Щодня вивчайте нові слова й вживайте їх у реченнях. Послідовність — ключ до успіху. Якщо ви продовжите практикувати, ваша англійська покращуватиметься крок за кроком, і ви наберетеся впевненості.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text call “the key to success”?', uk: 'Що текст називає «ключем до успіху»?' },
        options: [
          { en: 'Consistency', uk: 'Послідовність' },
          { en: 'Talent', uk: 'Талант' },
          { en: 'Luck', uk: 'Удача' },
        ],
        correct: 0,
        explain: { en: '“Consistency is the key to success.”', uk: '«Consistency is the key to success.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Where does the text suggest practicing speaking?', uk: 'Де текст радить практикувати мовлення?' },
        options: [
          { en: 'In front of a mirror or with friends', uk: 'Перед дзеркалом або з друзями' },
          { en: 'Only in a classroom', uk: 'Лише в класі' },
          { en: 'Only in writing', uk: 'Лише на письмі' },
        ],
        correct: 0,
        explain: { en: '“Practice speaking in front of a mirror or with friends.”', uk: '«Practice speaking in front of a mirror or with friends.»' },
      },
      {
        kind: 'open',
        q: { en: 'This text and “Simple Steps to Learn English Fast” give similar advice. Which single tip will you try this week?', uk: 'Цей текст і «Simple Steps to Learn English Fast» дають схожі поради. Яку одну пораду ви спробуєте цього тижня?' },
        sample: { en: 'Answers will vary. A good answer names one concrete, doable tip (e.g., learn five new words a day and use them in sentences) and when they will do it.', uk: 'Відповіді різнитимуться. Гарна відповідь називає одну конкретну здійсненну пораду (напр., вивчати пʼять нових слів на день і вживати їх у реченнях) і коли саме це робити.' },
      },
    ],
  },
];
