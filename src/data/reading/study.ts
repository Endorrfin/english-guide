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
  {
    id: 'teachers',
    title: { en: 'Teachers', uk: 'Вчителі' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['study', 'school', 'respect'],
    body: {
      en: 'Teachers play an important role in shaping our minds and guiding our future. They give us knowledge, discipline, and confidence. A good teacher inspires us to learn, ask questions, and think deeply. Teachers work with patience and kindness, helping every student grow. Their encouragement builds our character and prepares us for success. Respecting teachers is essential, because their efforts create strong communities and better generations.',
      uk: 'Вчителі відіграють важливу роль у формуванні нашого мислення та скеровують наше майбутнє. Вони дають нам знання, дисципліну й упевненість. Хороший учитель надихає нас навчатися, ставити запитання й мислити глибоко. Вчителі працюють із терпінням і добротою, допомагаючи кожному учневі зростати. Їхнє заохочення формує наш характер і готує нас до успіху. Поважати вчителів дуже важливо, адже їхні зусилля створюють сильні спільноти та кращі покоління.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do teachers give us, according to the text?', uk: 'Що, згідно з текстом, дають нам вчителі?' },
        options: [
          { en: 'Knowledge, discipline, and confidence', uk: 'Знання, дисципліну й упевненість' },
          { en: 'Money, food, and shelter', uk: 'Гроші, їжу та житло' },
          { en: 'Only homework and tests', uk: 'Лише домашні завдання й тести' },
        ],
        correct: 0,
        explain: { en: '“They give us knowledge, discipline, and confidence.”', uk: '«They give us knowledge, discipline, and confidence.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why is respecting teachers essential, according to the text?', uk: 'Чому, за текстом, поважати вчителів необхідно?' },
        options: [
          { en: 'Because their efforts create strong communities and better generations', uk: 'Бо їхні зусилля створюють сильні спільноти та кращі покоління' },
          { en: 'Because they are never wrong', uk: 'Бо вони ніколи не помиляються' },
          { en: 'Because they give easy grades', uk: 'Бо вони легко ставлять оцінки' },
        ],
        correct: 0,
        explain: { en: '“Respecting teachers is essential, because their efforts create strong communities and better generations.”', uk: '«Respecting teachers is essential, because their efforts create strong communities and better generations.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write two or three sentences about a teacher who influenced you, and explain how.', uk: 'Напишіть два-три речення про вчителя, який на вас вплинув, і поясніть, як саме.' },
        sample: { en: 'Answers will vary. A good answer names a teacher and gives a concrete reason, e.g., "My English teacher inspired me to read every day, which slowly built my confidence."', uk: 'Відповіді різнитимуться. Гарна відповідь називає вчителя й наводить конкретну причину, напр.: «My English teacher inspired me to read every day, which slowly built my confidence.»' },
      },
    ],
  },
  {
    id: 'planning',
    title: { en: 'Planning', uk: 'Планування' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['planning', 'time-management', 'goals'],
    body: {
      en: 'Planning is very important for success in life. It means organizing our tasks and setting clear goals. When we plan our day, we use our time more effectively and avoid confusion. Planning helps us stay focused and complete our work on time. It also reduces stress and makes life easier. Students can improve their studies by making a proper plan. A good plan guides us step by step toward our goals. Without planning, it is easy to waste time and lose direction. Therefore, we should always plan ahead and follow our plans to achieve success in life.',
      uk: 'Планування дуже важливе для успіху в житті. Воно означає організацію наших завдань і постановку чітких цілей. Коли ми плануємо свій день, ми використовуємо час ефективніше й уникаємо плутанини. Планування допомагає лишатися зосередженими й виконувати роботу вчасно. Воно також зменшує стрес і робить життя легшим. Учні можуть покращити навчання, склавши належний план. Хороший план веде нас крок за кроком до наших цілей. Без планування легко змарнувати час і втратити напрямок. Тому варто завжди планувати наперед і дотримуватися планів, щоб досягати успіху в житті.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does planning help us do?', uk: 'За текстом, у чому допомагає планування?' },
        options: [
          { en: 'Stay focused and finish work on time', uk: 'Лишатися зосередженими й завершувати роботу вчасно' },
          { en: 'Avoid all work', uk: 'Уникати будь-якої роботи' },
          { en: 'Waste more time', uk: 'Марнувати більше часу' },
        ],
        correct: 0,
        explain: { en: '“Planning helps us stay focused and complete our work on time.”', uk: '«Planning helps us stay focused and complete our work on time.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What happens without planning, according to the text?', uk: 'Що, за текстом, стається без планування?' },
        options: [
          { en: 'It is easy to waste time and lose direction', uk: 'Легко змарнувати час і втратити напрямок' },
          { en: 'Everything becomes perfect', uk: 'Усе стає ідеальним' },
          { en: 'Goals achieve themselves', uk: 'Цілі досягаються самі' },
        ],
        correct: 0,
        explain: { en: '“Without planning, it is easy to waste time and lose direction.”', uk: '«Without planning, it is easy to waste time and lose direction.»' },
      },
      {
        kind: 'open',
        q: { en: 'How do you plan your day or week? Describe one method you use or could try.', uk: 'Як ви плануєте свій день чи тиждень? Опишіть один метод, який використовуєте або могли б спробувати.' },
        sample: { en: 'Answers will vary. A good answer names a concrete method (e.g., a to-do list, time-blocking, three priorities each morning) and why it helps.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретний метод (напр., список справ, тайм-блокінг, три пріоритети щоранку) і чому він допомагає.' },
      },
    ],
  },
  {
    id: 'practice',
    title: { en: 'Practice', uk: 'Практика' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['practice', 'skills', 'improvement'],
    body: {
      en: 'Practice is the key to improvement and success. No one becomes perfect without practice. Whether it is studying, sports, or learning a new skill, regular practice makes us better. Practice helps us understand things clearly and reduces mistakes. It also builds confidence and strengthens our abilities. At first, learning something new may be difficult, but with practice, it becomes easier. Many successful people achieved their goals through continuous practice. Therefore, we should practice every day and never stop trying to improve ourselves. Practice makes us stronger, smarter, and more successful.',
      uk: 'Практика — ключ до вдосконалення й успіху. Ніхто не стає досконалим без практики. Чи то навчання, спорт, чи опанування нової навички — регулярна практика робить нас кращими. Практика допомагає чітко розуміти речі й зменшує помилки. Вона також будує впевненість і зміцнює наші здібності. Спершу вчитися нового може бути важко, але з практикою стає легше. Багато успішних людей досягли своїх цілей завдяки безперервній практиці. Тому варто практикуватися щодня й ніколи не переставати вдосконалюватися. Практика робить нас сильнішими, розумнішими й успішнішими.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what is “the key to improvement and success”?', uk: 'Що, за текстом, є «ключем до вдосконалення й успіху»?' },
        options: [
          { en: 'Practice', uk: 'Практика' },
          { en: 'Luck', uk: 'Удача' },
          { en: 'Talent alone', uk: 'Лише талант' },
        ],
        correct: 0,
        explain: { en: '“Practice is the key to improvement and success.”', uk: '«Practice is the key to improvement and success.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say about learning something new at first?', uk: 'Що текст каже про те, як спершу вчитися нового?' },
        options: [
          { en: 'It may be difficult, but with practice it becomes easier', uk: 'Може бути важко, але з практикою стає легше' },
          { en: 'It is always easy', uk: 'Це завжди легко' },
          { en: 'It never gets easier', uk: 'Легше не стає ніколи' },
        ],
        correct: 0,
        explain: { en: '“At first, learning something new may be difficult, but with practice, it becomes easier.”', uk: '«At first, learning something new may be difficult, but with practice, it becomes easier.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one skill you are practicing now? How do you keep the practice regular?', uk: 'Яку одну навичку ви практикуєте зараз? Як ви робите практику регулярною?' },
        sample: { en: 'Answers will vary. A good answer names a skill (e.g., English speaking) and a concrete routine that keeps practice regular (a fixed time, a daily minimum, a tracker).', uk: 'Відповіді різнитимуться. Гарна відповідь називає навичку (напр., усне мовлення) і конкретну рутину, що робить практику регулярною (фіксований час, щоденний мінімум, трекер).' },
      },
    ],
  },
  {
    id: 'education-in-life',
    title: { en: 'Education in Life', uk: 'Освіта в житті' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['education', 'knowledge', 'values'],
    body: {
      en: 'Education is one of the most powerful tools in life. It helps us gain knowledge, develop skills, and understand the world around us. Education teaches us how to think, solve problems, and make good decisions. It builds confidence and improves our future opportunities. A well-educated person can contribute positively to society. Education is not only about books but also about learning values like respect, honesty, and discipline. It is the key to success and a better life. Therefore, every person should value education and continue learning throughout life.',
      uk: 'Освіта — один із найпотужніших інструментів у житті. Вона допомагає нам здобувати знання, розвивати навички й розуміти світ навколо. Освіта вчить нас думати, розвʼязувати проблеми й ухвалювати хороші рішення. Вона будує впевненість і покращує наші майбутні можливості. Добре освічена людина може позитивно впливати на суспільство. Освіта — це не лише про книжки, а й про засвоєння цінностей, як-от повага, чесність і дисципліна. Це ключ до успіху й кращого життя. Тому кожна людина має цінувати освіту й навчатися впродовж усього життя.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, education is not only about books but also about…', uk: 'За текстом, освіта — це не лише про книжки, а й про…' },
        options: [
          { en: 'learning values like respect, honesty, and discipline', uk: 'засвоєння цінностей, як-от повага, чесність і дисципліна' },
          { en: 'memorizing facts only', uk: 'лише заучування фактів' },
          { en: 'passing exams for money', uk: 'складання іспитів заради грошей' },
        ],
        correct: 0,
        explain: { en: '“Education is not only about books but also about learning values like respect, honesty, and discipline.”', uk: '«…learning values like respect, honesty, and discipline.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does education help us do, according to the text?', uk: 'У чому, за текстом, допомагає освіта?' },
        options: [
          { en: 'Think, solve problems, and make good decisions', uk: 'Думати, розвʼязувати проблеми й ухвалювати хороші рішення' },
          { en: 'Avoid all responsibility', uk: 'Уникати будь-якої відповідальності' },
          { en: 'Stop learning early', uk: 'Рано припиняти навчання' },
        ],
        correct: 0,
        explain: { en: '“Education teaches us how to think, solve problems, and make good decisions.”', uk: '«Education teaches us how to think, solve problems, and make good decisions.»' },
      },
      {
        kind: 'open',
        q: { en: 'Besides knowledge from books, what is one value you have learned through education?', uk: 'Окрім знань із книжок, яку одну цінність ви засвоїли завдяки освіті?' },
        sample: { en: 'Answers will vary. A good answer names a value (e.g., discipline, honesty, curiosity) and a short example of how learning it shaped the reader.', uk: 'Відповіді різнитимуться. Гарна відповідь називає цінність (напр., дисципліна, чесність, допитливість) і короткий приклад, як її засвоєння вплинуло на читача.' },
      },
    ],
  },
  {
    id: 'confidence-in-students',
    title: { en: 'Confidence in Students', uk: 'Упевненість в учнів' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['confidence', 'students', 'learning'],
    body: {
      en: 'Confidence is very important for students. It helps them believe in their abilities and perform better in their studies. A confident student is not afraid to ask questions or share ideas. Confidence improves communication and helps students speak clearly. It also helps them face exams and challenges without fear. When students believe in themselves, they can achieve their goals more easily. Confidence grows with practice, hard work, and positive thinking. Teachers and parents also play a role in building confidence. Therefore, students should always trust themselves and stay confident to succeed in life.',
      uk: 'Упевненість дуже важлива для учнів. Вона допомагає їм вірити у власні здібності й краще вчитися. Упевнений учень не боїться ставити запитання чи ділитися ідеями. Упевненість покращує спілкування й допомагає учням говорити чітко. Вона також допомагає долати іспити й виклики без страху. Коли учні вірять у себе, вони легше досягають своїх цілей. Упевненість зростає з практикою, наполегливою працею й позитивним мисленням. Учителі й батьки теж відіграють роль у формуванні впевненості. Тому учням варто завжди довіряти собі й лишатися впевненими, щоб досягати успіху в житті.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What is a confident student not afraid to do?', uk: 'Чого не боїться впевнений учень?' },
        options: [
          { en: 'Ask questions or share ideas', uk: 'Ставити запитання чи ділитися ідеями' },
          { en: 'Come to class', uk: 'Приходити на заняття' },
          { en: 'Open a book', uk: 'Відкрити книжку' },
        ],
        correct: 0,
        explain: { en: '“A confident student is not afraid to ask questions or share ideas.”', uk: '«A confident student is not afraid to ask questions or share ideas.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, how does confidence grow?', uk: 'За текстом, як зростає впевненість?' },
        options: [
          { en: 'With practice, hard work, and positive thinking', uk: 'З практикою, наполегливою працею й позитивним мисленням' },
          { en: 'By avoiding all challenges', uk: 'Уникаючи будь-яких викликів' },
          { en: 'Overnight, by luck', uk: 'За ніч, завдяки удачі' },
        ],
        correct: 0,
        explain: { en: '“Confidence grows with practice, hard work, and positive thinking.”', uk: '«Confidence grows with practice, hard work, and positive thinking.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one thing that helps you feel more confident when you learn something hard?', uk: 'Що одне допомагає вам почуватися впевненіше, коли ви вчите щось складне?' },
        sample: { en: 'Answers will vary. A good answer names a concrete strategy (e.g., preparing well, practicing out loud, breaking a task into small steps) and why it helps.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну стратегію (напр., гарна підготовка, практика вголос, розбиття завдання на маленькі кроки) і чому вона допомагає.' },
      },
    ],
  },
  {
    id: 'learning',
    title: { en: 'Learning', uk: 'Навчання' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['learning', 'growth', 'lifelong-learning'],
    body: {
      en: 'Learning is a lifelong process that helps us grow and improve. It is not limited to school; we learn from books, teachers, and our daily experiences. Learning increases our knowledge and helps us understand the world better. It also improves our skills and prepares us for the future. A person who continues learning can achieve success and solve problems easily. Learning keeps our mind active and creative. In today’s fast-changing world, learning new things is very important. Therefore, we should never stop learning and always try to gain knowledge for a better life.',
      uk: 'Навчання — це процес довжиною в життя, що допомагає нам зростати й ставати кращими. Воно не обмежене школою; ми вчимося з книжок, від учителів і з нашого щоденного досвіду. Навчання збільшує наші знання й допомагає краще розуміти світ. Воно також покращує наші навички й готує нас до майбутнього. Людина, яка продовжує вчитися, може досягати успіху й легко розвʼязувати проблеми. Навчання тримає наш розум активним і творчим. У сучасному швидкозмінному світі вчитися новому дуже важливо. Тому ми маємо ніколи не переставати вчитися й завжди намагатися здобувати знання для кращого життя.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, learning is…', uk: 'За текстом, навчання — це…' },
        options: [
          { en: 'a lifelong process, not limited to school', uk: 'процес довжиною в життя, не обмежений школою' },
          { en: 'only for children', uk: 'лише для дітей' },
          { en: 'something that ends after school', uk: 'те, що завершується після школи' },
        ],
        correct: 0,
        explain: { en: '“Learning is a lifelong process… It is not limited to school.”', uk: '«Learning is a lifelong process… It is not limited to school.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does learning keep, according to the text?', uk: 'Що, за текстом, тримає навчання?' },
        options: [
          { en: 'Our mind active and creative', uk: 'Наш розум активним і творчим' },
          { en: 'Our schedule empty', uk: 'Наш розклад порожнім' },
          { en: 'Our goals hidden', uk: 'Наші цілі прихованими' },
        ],
        correct: 0,
        explain: { en: '“Learning keeps our mind active and creative.”', uk: '«Learning keeps our mind active and creative.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is something you have learned recently outside of school or work?', uk: 'Чого ви навчилися нещодавно поза школою чи роботою?' },
        sample: { en: 'Answers will vary. A good answer names a specific thing learned (a recipe, a tool, a fact) and how the reader learned it.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну річ (рецепт, інструмент, факт) і те, як читач цього навчився.' },
      },
    ],
  },
  {
    id: 'knowledge',
    title: { en: 'Knowledge', uk: 'Знання' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['knowledge', 'education', 'thinking'],
    body: {
      en: 'Knowledge is power and one of the greatest assets in life. It helps us understand the world and make better decisions. We gain knowledge through education, reading, and experience. Knowledge improves our thinking and helps us solve problems. A knowledgeable person is respected in society. Learning should never stop because knowledge keeps growing. Therefore, we should always try to gain knowledge and use it for good purposes.',
      uk: 'Знання — це сила й один із найбільших активів у житті. Вони допомагають нам розуміти світ і ухвалювати кращі рішення. Ми здобуваємо знання через освіту, читання й досвід. Знання покращують наше мислення й допомагають розвʼязувати проблеми. Обізнану людину поважають у суспільстві. Навчання ніколи не повинно спинятися, бо знання постійно зростають. Тому ми маємо завжди намагатися здобувати знання й використовувати їх для добрих цілей.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How do we gain knowledge, according to the text?', uk: 'Як, за текстом, ми здобуваємо знання?' },
        options: [
          { en: 'Through education, reading, and experience', uk: 'Через освіту, читання й досвід' },
          { en: 'Only by being born with it', uk: 'Лише від народження' },
          { en: 'By avoiding books', uk: 'Уникаючи книжок' },
        ],
        correct: 0,
        explain: { en: '“We gain knowledge through education, reading, and experience.”', uk: '«We gain knowledge through education, reading, and experience.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why should learning never stop, according to the text?', uk: 'Чому, за текстом, навчання ніколи не повинно спинятися?' },
        options: [
          { en: 'Because knowledge keeps growing', uk: 'Бо знання постійно зростають' },
          { en: 'Because school requires it', uk: 'Бо цього вимагає школа' },
          { en: 'Because it is easy', uk: 'Бо це легко' },
        ],
        correct: 0,
        explain: { en: '“Learning should never stop because knowledge keeps growing.”', uk: '«…because knowledge keeps growing.»' },
      },
      {
        kind: 'open',
        q: { en: 'The text says knowledge should be used “for good purposes.” Give one example of using knowledge well.', uk: 'Текст каже використовувати знання «для добрих цілей». Наведіть один приклад доброго використання знань.' },
        sample: { en: 'Answers will vary — e.g., teaching a skill to others, solving a real problem, making a safer or fairer decision.', uk: 'Відповіді різнитимуться — напр., навчити навички інших, розвʼязати реальну проблему, ухвалити безпечніше чи справедливіше рішення.' },
      },
    ],
  },
  {
    id: 'speaking',
    title: { en: 'Speaking', uk: 'Мовлення' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['speaking', 'communication', 'confidence'],
    body: {
      en: 'Speaking is an important way of communication. It helps us share our thoughts and ideas with others. Good speaking skills make a person confident and successful. When we speak clearly, people understand us better. Speaking also helps in building relationships and expressing feelings. Practice is very important to improve speaking. We should not be afraid of making mistakes. The more we speak, the more confident we become. Therefore, speaking is a powerful skill that helps us in school, work, and daily life.',
      uk: 'Мовлення — важливий спосіб спілкування. Воно допомагає нам ділитися думками й ідеями з іншими. Хороші навички мовлення роблять людину впевненою й успішною. Коли ми говоримо чітко, люди краще нас розуміють. Мовлення також допомагає будувати стосунки й виражати почуття. Практика дуже важлива для покращення мовлення. Ми не маємо боятися помилок. Що більше ми говоримо, то впевненішими стаємо. Тому мовлення — потужна навичка, що допомагає нам у школі, на роботі та в повсякденні.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what should we not be afraid of when speaking?', uk: 'Чого, за текстом, ми не маємо боятися, коли говоримо?' },
        options: [
          { en: 'Making mistakes', uk: 'Робити помилки' },
          { en: 'Speaking clearly', uk: 'Говорити чітко' },
          { en: 'Sharing ideas', uk: 'Ділитися ідеями' },
        ],
        correct: 0,
        explain: { en: '“We should not be afraid of making mistakes.”', uk: '«We should not be afraid of making mistakes.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, what happens the more we speak?', uk: 'Що, за текстом, стається, що більше ми говоримо?' },
        options: [
          { en: 'The more confident we become', uk: 'То впевненішими ми стаємо' },
          { en: 'The more tired we get', uk: 'То втомленішими ми стаємо' },
          { en: 'Nothing changes', uk: 'Нічого не змінюється' },
        ],
        correct: 0,
        explain: { en: '“The more we speak, the more confident we become.”', uk: '«The more we speak, the more confident we become.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one situation where you would like to speak more confidently? How could practice help?', uk: 'У якій одній ситуації ви хотіли б говорити впевненіше? Як могла б допомогти практика?' },
        sample: { en: 'Answers will vary. A good answer names a real situation (a meeting, an interview) and a concrete way to practice for it.', uk: 'Відповіді різнитимуться. Гарна відповідь називає реальну ситуацію (нарада, співбесіда) і конкретний спосіб потренуватися до неї.' },
      },
    ],
  },
  {
    id: 'reading',
    title: { en: 'Reading', uk: 'Читання' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['reading', 'habits', 'knowledge'],
    body: {
      en: 'Reading is one of the best habits a person can develop. It increases knowledge and improves understanding. When we read, we learn new words and ideas. Reading helps us think better and improve our imagination. It also makes us more confident in speaking and writing. Books are a great source of wisdom and guidance. Even a few minutes of reading every day can make a big difference. Therefore, everyone should make reading a daily habit for a better future.',
      uk: 'Читання — одна з найкращих звичок, які може виробити людина. Воно збільшує знання й покращує розуміння. Коли ми читаємо, ми вивчаємо нові слова й ідеї. Читання допомагає нам краще мислити й розвиває нашу уяву. Воно також робить нас упевненішими в мовленні й письмі. Книжки — чудове джерело мудрості й настанов. Навіть кілька хвилин читання щодня можуть дати велику різницю. Тому кожен має зробити читання щоденною звичкою заради кращого майбутнього.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does reading help us do?', uk: 'У чому, за текстом, допомагає читання?' },
        options: [
          { en: 'Think better and improve our imagination', uk: 'Краще мислити й розвивати уяву' },
          { en: 'Forget new words', uk: 'Забувати нові слова' },
          { en: 'Avoid learning', uk: 'Уникати навчання' },
        ],
        correct: 0,
        explain: { en: '“Reading helps us think better and improve our imagination.”', uk: '«Reading helps us think better and improve our imagination.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How much daily reading can make a big difference, according to the text?', uk: 'Скільки щоденного читання може дати велику різницю, за текстом?' },
        options: [
          { en: 'Even a few minutes every day', uk: 'Навіть кілька хвилин щодня' },
          { en: 'Only several hours a day', uk: 'Лише кілька годин на день' },
          { en: 'Only on weekends', uk: 'Лише на вихідних' },
        ],
        correct: 0,
        explain: { en: '“Even a few minutes of reading every day can make a big difference.”', uk: '«Even a few minutes of reading every day can make a big difference.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one book or kind of reading you enjoy, and what do you gain from it?', uk: 'Яку одну книжку чи вид читання ви любите і що вам це дає?' },
        sample: { en: 'Answers will vary. A good answer names a specific book or genre and a concrete benefit (vocabulary, ideas, relaxation).', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну книжку чи жанр і конкретну користь (словник, ідеї, відпочинок).' },
      },
    ],
  },
  {
    id: 'student',
    title: { en: 'Student', uk: 'Учень' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['student', 'education', 'discipline'],
    body: {
      en: 'A student is a learner who works hard to build a better future. Students gain knowledge, skills, and good values through education. They learn discipline, responsibility, and respect for others. A good student listens carefully, studies regularly, and never stops asking questions. Students face challenges like exams and pressure, but these challenges help them grow stronger. Education helps students achieve their dreams and serve society. Time is very important for a student, so it should be used wisely. Teachers guide students, but success depends on effort and dedication. A student who works hard today becomes a successful and responsible person tomorrow. Education is the key to success, and students are the future of the nation.',
      uk: 'Учень — це той, хто вчиться й наполегливо працює, щоб побудувати краще майбутнє. Учні здобувають знання, навички й добрі цінності через освіту. Вони вчаться дисципліни, відповідальності й поваги до інших. Хороший учень уважно слухає, регулярно вчиться й ніколи не перестає ставити запитання. Учні стикаються з викликами, як-от іспити й тиск, але ці виклики допомагають їм ставати сильнішими. Освіта допомагає учням досягати мрій і служити суспільству. Час дуже важливий для учня, тож його треба використовувати мудро. Учителі скеровують учнів, але успіх залежить від зусиль і відданості. Учень, який наполегливо працює сьогодні, стає успішною й відповідальною людиною завтра. Освіта — ключ до успіху, а учні — майбутнє нації.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does a good student do, according to the text?', uk: 'Що робить хороший учень, за текстом?' },
        options: [
          { en: 'Listens carefully, studies regularly, and keeps asking questions', uk: 'Уважно слухає, регулярно вчиться й ставить запитання' },
          { en: 'Avoids studying', uk: 'Уникає навчання' },
          { en: 'Never asks questions', uk: 'Ніколи не ставить запитань' },
        ],
        correct: 0,
        explain: { en: '“A good student listens carefully, studies regularly, and never stops asking questions.”', uk: '«…listens carefully, studies regularly, and never stops asking questions.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, success for a student depends on…', uk: 'За текстом, успіх учня залежить від…' },
        options: [
          { en: 'effort and dedication', uk: 'зусиль і відданості' },
          { en: 'teachers alone', uk: 'лише вчителів' },
          { en: 'luck', uk: 'удачі' },
        ],
        correct: 0,
        explain: { en: '“Teachers guide students, but success depends on effort and dedication.”', uk: '«…success depends on effort and dedication.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one habit of a good student that you want to strengthen? How will you do it?', uk: 'Яку одну звичку хорошого учня ви хочете зміцнити? Як ви це зробите?' },
        sample: { en: 'Answers will vary. A good answer names a concrete habit (regular study, asking questions) and a simple plan to build it.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну звичку (регулярне навчання, запитання) і простий план її виробити.' },
      },
    ],
  },
  {
    id: 'communication',
    title: { en: 'Communication', uk: 'Спілкування' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['communication', 'listening', 'relationships'],
    body: {
      en: 'Communication is the key to understanding and connection. It helps us share our thoughts, feelings, and ideas with others. Good communication builds strong relationships and avoids misunderstandings. It is not only about speaking, but also about listening carefully. When we communicate clearly and respectfully, people trust us and feel valued. Communication is important in school, work, family, and daily life. It helps solve problems and brings people closer together. A person with good communication skills can express ideas confidently and work well with others. By practicing speaking and listening every day, we can improve our communication and become more successful in life.',
      uk: 'Спілкування — ключ до розуміння й звʼязку. Воно допомагає нам ділитися думками, почуттями й ідеями з іншими. Хороше спілкування будує міцні стосунки й уникає непорозумінь. Це не лише про те, щоб говорити, а й про те, щоб уважно слухати. Коли ми спілкуємося чітко й шанобливо, люди нам довіряють і почуваються цінними. Спілкування важливе в школі, на роботі, у родині та в повсякденні. Воно допомагає розвʼязувати проблеми й зближує людей. Людина з хорошими навичками спілкування може впевнено висловлювати ідеї й добре працювати з іншими. Практикуючи мовлення й слухання щодня, ми можемо покращити своє спілкування й стати успішнішими в житті.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, communication is not only about speaking, but also about…', uk: 'За текстом, спілкування — це не лише про мовлення, а й про…' },
        options: [
          { en: 'listening carefully', uk: 'уважне слухання' },
          { en: 'talking louder', uk: 'те, щоб говорити гучніше' },
          { en: 'winning arguments', uk: 'перемогу в суперечках' },
        ],
        correct: 0,
        explain: { en: '“It is not only about speaking, but also about listening carefully.”', uk: '«…but also about listening carefully.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How can we improve our communication, according to the text?', uk: 'Як, за текстом, можна покращити спілкування?' },
        options: [
          { en: 'By practicing speaking and listening every day', uk: 'Практикуючи мовлення й слухання щодня' },
          { en: 'By avoiding people', uk: 'Уникаючи людей' },
          { en: 'By speaking only, never listening', uk: 'Лише говорячи, ніколи не слухаючи' },
        ],
        correct: 0,
        explain: { en: '“By practicing speaking and listening every day, we can improve our communication.”', uk: '«By practicing speaking and listening every day…»' },
      },
      {
        kind: 'open',
        q: { en: 'The text values listening as much as speaking. How could you be a better listener?', uk: 'Текст цінує слухання так само, як мовлення. Як ви могли б краще слухати?' },
        sample: { en: 'Answers will vary — e.g., not interrupting, asking follow-up questions, putting the phone away, summarizing what you heard.', uk: 'Відповіді різнитимуться — напр., не перебивати, ставити уточнювальні запитання, відкласти телефон, переказувати почуте.' },
      },
    ],
  },
  {
    id: 'school',
    title: { en: 'School', uk: 'Школа' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['school', 'education', 'growth'],
    body: {
      en: 'School is an important place where we learn and grow. It is not only a building, but a center of knowledge and development. In school, we learn different subjects such as math, science, and English. Teachers guide us and help us understand the world better. School also teaches discipline, respect, and responsibility. We make friends, share ideas, and build social skills. Through homework, exams, and activities, we improve our abilities. School prepares us for the future and helps us achieve our goals. A good education gives us confidence and opportunities. School is the foundation of success and a place where dreams begin to grow.',
      uk: 'Школа — важливе місце, де ми вчимося й зростаємо. Це не лише будівля, а й осередок знань і розвитку. У школі ми вивчаємо різні предмети, як-от математику, природничі науки й англійську. Учителі скеровують нас і допомагають краще розуміти світ. Школа також вчить дисципліни, поваги й відповідальності. Ми заводимо друзів, ділимося ідеями й розвиваємо соціальні навички. Через домашні завдання, іспити й заходи ми покращуємо свої здібності. Школа готує нас до майбутнього й допомагає досягати цілей. Хороша освіта дає нам упевненість і можливості. Школа — це основа успіху й місце, де мрії починають зростати.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How does the text describe school?', uk: 'Як текст описує школу?' },
        options: [
          { en: 'Not only a building, but a center of knowledge and development', uk: 'Не лише будівлю, а й осередок знань і розвитку' },
          { en: 'Only a place to pass time', uk: 'Лише місце, щоб згаяти час' },
          { en: 'A place with no real value', uk: 'Місце без справжньої цінності' },
        ],
        correct: 0,
        explain: { en: '“It is not only a building, but a center of knowledge and development.”', uk: '«…a center of knowledge and development.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Besides subjects, what else does school teach, according to the text?', uk: 'Окрім предметів, чого ще вчить школа, за текстом?' },
        options: [
          { en: 'Discipline, respect, and responsibility', uk: 'Дисципліни, поваги й відповідальності' },
          { en: 'Only how to pass exams', uk: 'Лише як складати іспити' },
          { en: 'Nothing beyond books', uk: 'Нічого, крім книжок' },
        ],
        correct: 0,
        explain: { en: '“School also teaches discipline, respect, and responsibility.”', uk: '«School also teaches discipline, respect, and responsibility.»' },
      },
      {
        kind: 'open',
        q: { en: 'Besides subjects, what is the most valuable thing school gave (or gives) you?', uk: 'Окрім предметів, що найцінніше дала (чи дає) вам школа?' },
        sample: { en: 'Answers will vary — e.g., friendships, discipline, curiosity, confidence, or a specific skill.', uk: 'Відповіді різнитимуться — напр., дружба, дисципліна, допитливість, упевненість чи конкретна навичка.' },
      },
    ],
  },
  {
    id: 'english-listening',
    title: { en: 'English Listening', uk: 'Слухання англійської' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['english', 'listening', 'practice'],
    body: {
      en: 'English listening is an important skill for learning the language. Listening helps us understand pronunciation, vocabulary, and sentence structure. When we listen carefully, we learn how native speakers talk and express ideas. Good listening improves speaking skills and builds confidence. To improve English listening, we should listen to English conversations, songs, podcasts, and videos every day. At first, it may be difficult, but with practice, it becomes easier. We should listen actively and try to understand the main idea. Repeating what we hear also helps improve pronunciation. Listening regularly makes our English stronger and more natural. With patience and daily practice, English listening skills can improve greatly.',
      uk: 'Слухання англійської — важлива навичка для вивчення мови. Слухання допомагає нам розуміти вимову, лексику й структуру речень. Коли ми слухаємо уважно, ми вчимося, як говорять і висловлюють думки носії мови. Хороше слухання покращує навички мовлення й будує впевненість. Щоб покращити слухання англійської, варто щодня слухати англійські розмови, пісні, подкасти й відео. Спершу може бути важко, але з практикою стає легше. Ми маємо слухати активно й намагатися зрозуміти головну думку. Повторення почутого також допомагає покращити вимову. Регулярне слухання робить нашу англійську сильнішою й природнішою. З терпінням і щоденною практикою навички слухання англійської можуть значно покращитися.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text suggest listening to every day?', uk: 'Що текст радить слухати щодня?' },
        options: [
          { en: 'English conversations, songs, podcasts, and videos', uk: 'Англійські розмови, пісні, подкасти й відео' },
          { en: 'Only the teacher', uk: 'Лише вчителя' },
          { en: 'Nothing — just read', uk: 'Нічого — лише читати' },
        ],
        correct: 0,
        explain: { en: '“…we should listen to English conversations, songs, podcasts, and videos every day.”', uk: '«…conversations, songs, podcasts, and videos every day.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What also helps improve pronunciation, according to the text?', uk: 'Що також допомагає покращити вимову, за текстом?' },
        options: [
          { en: 'Repeating what we hear', uk: 'Повторення почутого' },
          { en: 'Never speaking', uk: 'Ніколи не говорити' },
          { en: 'Listening only once', uk: 'Слухати лише раз' },
        ],
        correct: 0,
        explain: { en: '“Repeating what we hear also helps improve pronunciation.”', uk: '«Repeating what we hear also helps improve pronunciation.»' },
      },
      {
        kind: 'open',
        q: { en: 'What English audio (a podcast, show, or song) could you listen to this week to practice?', uk: 'Яке англомовне аудіо (подкаст, шоу чи пісню) ви могли б слухати цього тижня для практики?' },
        sample: { en: 'Answers will vary. A good answer names a specific source at the right level and a small daily plan.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретне джерело потрібного рівня й невеликий щоденний план.' },
      },
    ],
  },
  {
    id: 'english-for-children',
    title: { en: 'English for Children', uk: 'Англійська для дітей' },
    category: 'study',
    level: 'a2',
    minutes: 1,
    topics: ['english', 'children', 'learning'],
    body: {
      en: 'English is a fun and useful language for children. It helps us talk to people around the world. Learning English makes reading stories and watching cartoons more enjoyable. Children can learn English by singing songs, playing games, and listening to stories. Speaking English builds confidence and helps children express their ideas. Making mistakes is okay because it helps us learn. English helps children do better in school and in the future. When children practice English every day, it becomes easy and fun. Learning English opens the door to knowledge, friendship, and success.',
      uk: 'Англійська — весела й корисна мова для дітей. Вона допомагає нам спілкуватися з людьми по всьому світу. Вивчення англійської робить читання історій і перегляд мультфільмів приємнішими. Діти можуть вивчати англійську, співаючи пісні, граючи в ігри й слухаючи історії. Мовлення англійською будує впевненість і допомагає дітям висловлювати свої ідеї. Робити помилки — це нормально, бо це допомагає нам вчитися. Англійська допомагає дітям краще встигати в школі та в майбутньому. Коли діти практикують англійську щодня, вона стає легкою й веселою. Вивчення англійської відчиняє двері до знань, дружби й успіху.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How can children learn English, according to the text?', uk: 'Як діти можуть вивчати англійську, за текстом?' },
        options: [
          { en: 'By singing songs, playing games, and listening to stories', uk: 'Співаючи пісні, граючи в ігри й слухаючи історії' },
          { en: 'Only by memorizing grammar rules', uk: 'Лише заучуючи граматичні правила' },
          { en: 'By never speaking', uk: 'Ніколи не говорячи' },
        ],
        correct: 0,
        explain: { en: '“Children can learn English by singing songs, playing games, and listening to stories.”', uk: '«…singing songs, playing games, and listening to stories.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say about making mistakes?', uk: 'Що текст каже про помилки?' },
        options: [
          { en: 'It is okay because it helps us learn', uk: 'Це нормально, бо допомагає нам вчитися' },
          { en: 'It should never happen', uk: 'Такого не має бути ніколи' },
          { en: 'It means you should stop', uk: 'Це означає, що треба спинитися' },
        ],
        correct: 0,
        explain: { en: '“Making mistakes is okay because it helps us learn.”', uk: '«Making mistakes is okay because it helps us learn.»' },
      },
      {
        kind: 'open',
        q: { en: 'The text says learning can be fun. What is one playful way you like to learn English?', uk: 'Текст каже, що навчання може бути веселим. Який один ігровий спосіб вивчати англійську вам подобається?' },
        sample: { en: 'Answers will vary — e.g., songs, games, shows, or talking with friends. A good answer explains why it helps.', uk: 'Відповіді різнитимуться — напр., пісні, ігри, шоу чи розмови з друзями. Гарна відповідь пояснює, чому це допомагає.' },
      },
    ],
  },
  {
    id: 'the-value-of-reading',
    title: { en: 'The Value of Reading', uk: 'Цінність читання' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['reading', 'knowledge', 'discipline'],
    body: {
      en: 'Reading is a valuable habit that improves knowledge and thinking. Books help us learn new ideas, cultures, and skills. Reading improves vocabulary, language, and imagination. It helps us relax and reduce stress. Through reading, we gain wisdom from others’ experiences. Reading daily builds focus and discipline. It helps students succeed in studies and adults grow personally. Reading also improves communication and confidence. Even a few pages a day can make a big difference. The value of reading is not only in learning facts, but in shaping a smarter, calmer, and more thoughtful mind.',
      uk: 'Читання — цінна звичка, що покращує знання й мислення. Книжки допомагають нам пізнавати нові ідеї, культури й навички. Читання покращує лексику, мову й уяву. Воно допомагає нам розслабитися й зменшити стрес. Через читання ми здобуваємо мудрість із досвіду інших. Щоденне читання будує зосередженість і дисципліну. Воно допомагає учням встигати в навчанні, а дорослим — зростати особисто. Читання також покращує спілкування й упевненість. Навіть кілька сторінок на день можуть дати велику різницю. Цінність читання не лише в засвоєнні фактів, а й у формуванні розумнішого, спокійнішого й вдумливішого розуму.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does reading daily build?', uk: 'Що, за текстом, будує щоденне читання?' },
        options: [
          { en: 'Focus and discipline', uk: 'Зосередженість і дисципліну' },
          { en: 'Stress and worry', uk: 'Стрес і тривогу' },
          { en: 'Boredom', uk: 'Нудьгу' },
        ],
        correct: 0,
        explain: { en: '“Reading daily builds focus and discipline.”', uk: '«Reading daily builds focus and discipline.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'The value of reading, the text says, is not only facts, but…', uk: 'Цінність читання, каже текст, не лише у фактах, а й у…' },
        options: [
          { en: 'shaping a smarter, calmer, more thoughtful mind', uk: 'формуванні розумнішого, спокійнішого й вдумливішого розуму' },
          { en: 'passing the time', uk: 'згаянні часу' },
          { en: 'impressing others', uk: 'враженні на інших' },
        ],
        correct: 0,
        explain: { en: '“…in shaping a smarter, calmer, and more thoughtful mind.”', uk: '«…shaping a smarter, calmer, and more thoughtful mind.»' },
      },
      {
        kind: 'open',
        q: { en: 'How could you fit “a few pages a day” into your routine? Describe a simple plan.', uk: 'Як ви могли б вписати «кілька сторінок на день» у свій розпорядок? Опишіть простий план.' },
        sample: { en: 'Answers will vary. A good answer ties reading to an existing habit (e.g., 10 pages before bed) and names what to read.', uk: 'Відповіді різнитимуться. Гарна відповідь привʼязує читання до наявної звички (напр., 10 сторінок перед сном) і називає, що читати.' },
      },
    ],
  },
  {
    id: 'for-a-teacher',
    title: { en: 'For a Teacher', uk: 'Учителю' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['teacher', 'respect', 'education'],
    body: {
      en: 'A teacher is a guide, a mentor, and a source of inspiration. Teachers help shape our future by sharing knowledge and values. They teach us not only lessons from books, but lessons for life. A good teacher encourages students to believe in themselves and work hard. Teachers are patient, caring, and dedicated. They support students during success and failure. Without teachers, learning would have no direction. We respect teachers for their hard work and sacrifices. A teacher’s impact lasts forever in the hearts and minds of students.',
      uk: 'Учитель — це наставник, ментор і джерело натхнення. Учителі допомагають формувати наше майбутнє, ділячись знаннями й цінностями. Вони вчать нас не лише урокам із книжок, а й урокам для життя. Хороший учитель заохочує учнів вірити в себе й наполегливо працювати. Учителі терплячі, дбайливі й віддані. Вони підтримують учнів і в успіху, і в невдачі. Без учителів навчання не мало б напрямку. Ми поважаємо вчителів за їхню наполегливу працю й жертви. Вплив учителя лишається назавжди в серцях і думках учнів.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do teachers teach us, besides book lessons?', uk: 'Чого вчать нас учителі, окрім уроків із книжок?' },
        options: [
          { en: 'Lessons for life', uk: 'Уроків для життя' },
          { en: 'Nothing else', uk: 'Нічого іншого' },
          { en: 'Only how to pass tests', uk: 'Лише як складати тести' },
        ],
        correct: 0,
        explain: { en: '“They teach us not only lessons from books, but lessons for life.”', uk: '«…not only lessons from books, but lessons for life.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the text describe a teacher’s impact?', uk: 'Як текст описує вплив учителя?' },
        options: [
          { en: 'It lasts forever in students’ hearts and minds', uk: 'Він лишається назавжди в серцях і думках учнів' },
          { en: 'It is quickly forgotten', uk: 'Він швидко забувається' },
          { en: 'It matters only during exams', uk: 'Він важливий лише під час іспитів' },
        ],
        correct: 0,
        explain: { en: '“A teacher’s impact lasts forever in the hearts and minds of students.”', uk: '«…lasts forever in the hearts and minds of students.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write two or three sentences of thanks to a teacher who influenced you.', uk: 'Напишіть два-три речення подяки вчителю, який на вас вплинув.' },
        sample: { en: 'Answers will vary. A good answer names a real teacher and a specific lesson or support they gave.', uk: 'Відповіді різнитимуться. Гарна відповідь називає реального вчителя й конкретний урок чи підтримку, які він дав.' },
      },
    ],
  },
  {
    id: 'english-is-easy',
    title: { en: 'English Is Easy', uk: 'Англійська — це легко' },
    category: 'study',
    level: 'a2',
    minutes: 1,
    topics: ['english', 'learning', 'confidence'],
    body: {
      en: 'English is easy when we learn it step by step. Many people think English is difficult, but it becomes simple with regular practice. Listening, speaking, reading, and writing every day help us improve quickly. Making mistakes is normal and part of learning. We should not feel shy or afraid. Learning a few new words daily makes English easier. Watching English videos and speaking with friends also help. With patience and confidence, anyone can learn English. English is easy when we believe in ourselves and keep practicing every day.',
      uk: 'Англійська легка, коли ми вчимо її крок за кроком. Багато хто думає, що англійська складна, але вона стає простою з регулярною практикою. Слухання, мовлення, читання й письмо щодня допомагають нам швидко покращуватися. Робити помилки — це нормально й частина навчання. Ми не маємо соромитися чи боятися. Вивчення кількох нових слів щодня робить англійську легшою. Перегляд англійських відео й розмови з друзями теж допомагають. З терпінням і впевненістю будь-хто може вивчити англійську. Англійська легка, коли ми віримо в себе й продовжуємо практикуватися щодня.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, English becomes simple with…', uk: 'За текстом, англійська стає простою з…' },
        options: [
          { en: 'regular practice', uk: 'регулярною практикою' },
          { en: 'no effort at all', uk: 'відсутністю зусиль' },
          { en: 'avoiding it', uk: 'уникненням її' },
        ],
        correct: 0,
        explain: { en: '“…it becomes simple with regular practice.”', uk: '«…it becomes simple with regular practice.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say about making mistakes?', uk: 'Що текст каже про помилки?' },
        options: [
          { en: 'It is normal and part of learning', uk: 'Це нормально й частина навчання' },
          { en: 'It should be avoided at all costs', uk: 'Їх треба уникати за будь-яку ціну' },
          { en: 'It means English is not for you', uk: 'Це означає, що англійська не для тебе' },
        ],
        correct: 0,
        explain: { en: '“Making mistakes is normal and part of learning.”', uk: '«Making mistakes is normal and part of learning.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one small daily English habit you could keep to make it feel easy?', uk: 'Яку одну маленьку щоденну звичку з англійської ви могли б мати, щоб вона здавалася легкою?' },
        sample: { en: 'Answers will vary — e.g., five new words a day, one short video, or a few minutes of speaking aloud.', uk: 'Відповіді різнитимуться — напр., пʼять нових слів на день, одне коротке відео чи кілька хвилин мовлення вголос.' },
      },
    ],
  },
  {
    id: 'power-of-english',
    title: { en: 'Power of English', uk: 'Сила англійської' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['english', 'opportunity', 'communication'],
    body: {
      en: 'The power of English is seen in its ability to connect people around the world. English is a global language used in education, business, and technology. It helps us share ideas, learn new knowledge, and communicate confidently. Knowing English opens doors to better jobs and international opportunities. English also allows us to access books, videos, and information from all over the world. Learning English builds confidence and improves communication skills. With regular practice and patience, anyone can master English. The power of English lies in its ability to create understanding, growth, and success.',
      uk: 'Сила англійської — у її здатності зʼєднувати людей по всьому світу. Англійська — це глобальна мова, яку використовують в освіті, бізнесі й технологіях. Вона допомагає нам ділитися ідеями, здобувати нові знання й упевнено спілкуватися. Знання англійської відчиняє двері до кращої роботи й міжнародних можливостей. Англійська також дає нам доступ до книжок, відео й інформації з усього світу. Вивчення англійської будує впевненість і покращує навички спілкування. З регулярною практикою й терпінням будь-хто може опанувати англійську. Сила англійської — у її здатності створювати розуміння, зростання й успіх.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Where is English used, according to the text?', uk: 'Де використовують англійську, за текстом?' },
        options: [
          { en: 'Education, business, and technology', uk: 'В освіті, бізнесі й технологіях' },
          { en: 'Nowhere important', uk: 'Ніде важливо' },
          { en: 'Only in schools', uk: 'Лише в школах' },
        ],
        correct: 0,
        explain: { en: '“English is a global language used in education, business, and technology.”', uk: '«…used in education, business, and technology.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does knowing English open, according to the text?', uk: 'Що відчиняє знання англійської, за текстом?' },
        options: [
          { en: 'Doors to better jobs and international opportunities', uk: 'Двері до кращої роботи й міжнародних можливостей' },
          { en: 'Nothing new', uk: 'Нічого нового' },
          { en: 'Only local opportunities', uk: 'Лише місцеві можливості' },
        ],
        correct: 0,
        explain: { en: '“Knowing English opens doors to better jobs and international opportunities.”', uk: '«…better jobs and international opportunities.»' },
      },
      {
        kind: 'open',
        q: { en: 'What door would you most like English to open for you? Why?', uk: 'Які двері ви найбільше хотіли б, щоб англійська вам відчинила? Чому?' },
        sample: { en: 'Answers will vary — e.g., a job, travel, study, or access to content. A good answer gives a personal reason.', uk: 'Відповіді різнитимуться — напр., робота, подорожі, навчання чи доступ до контенту. Гарна відповідь дає особисту причину.' },
      },
    ],
  },
  {
    id: 'writing',
    title: { en: 'Writing', uk: 'Письмо' },
    category: 'study',
    level: 'a2',
    minutes: 1,
    topics: ['study', 'writing', 'skills'],
    seeAlso: ['reading', 'speaking'],
    body: {
      en: 'Writing in English helps me express my thoughts clearly. I write short stories, essays, and sometimes I keep a diary. Writing lets me practise new words and grammar rules. I often make mistakes, but I learn from them. My teacher corrects my work and gives me advice. When I write regularly, I feel more confident and my communication skills improve. Good writing also helps me at school and at work, because clear writing shows clear thinking.',
      uk: 'Письмо англійською допомагає мені чітко висловлювати думки. Я пишу короткі оповідання, есе, а іноді веду щоденник. Письмо дає змогу практикувати нові слова й граматичні правила. Я часто роблю помилки, але вчуся на них. Учитель виправляє мою роботу й дає поради. Коли я пишу регулярно, я почуваюся впевненіше, а мої навички спілкування покращуються. Гарне письмо також допомагає мені в школі та на роботі, адже чітке письмо відображає чітке мислення.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How does writing regularly help the writer?', uk: 'Як регулярне письмо допомагає авторові?' },
        options: [
          { en: 'It builds confidence and improves communication', uk: 'Зміцнює впевненість і покращує спілкування' },
          { en: 'It makes handwriting neater only', uk: 'Лише робить почерк охайнішим' },
          { en: 'It replaces the need to read', uk: 'Замінює потребу читати' },
        ],
        correct: 0,
        explain: { en: '“When I write regularly, I feel more confident and my communication skills improve.”', uk: '«Коли я пишу регулярно, я почуваюся впевненіше…»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the writer do with mistakes?', uk: 'Що автор робить із помилками?' },
        options: [
          { en: 'Learns from them', uk: 'Вчиться на них' },
          { en: 'Ignores them', uk: 'Ігнорує їх' },
          { en: 'Stops writing', uk: 'Припиняє писати' },
        ],
        correct: 0,
        explain: { en: '“I often make mistakes, but I learn from them.”', uk: '«Я часто роблю помилки, але вчуся на них.»' },
      },
      {
        kind: 'open',
        q: { en: 'What kind of writing would you like to practise in English, and why?', uk: 'Який вид письма ви хотіли б практикувати англійською і чому?' },
        sample: { en: 'Answers will vary — e.g., a diary, emails, or short stories. A good answer says why it is useful for you.', uk: 'Відповіді різнитимуться — напр., щоденник, листи чи оповідання. Гарна відповідь пояснює, чому це корисно саме вам.' },
      },
    ],
  },
  {
    id: 'public-speaking',
    title: { en: 'Public Speaking', uk: 'Публічні виступи' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['study', 'communication', 'confidence'],
    seeAlso: ['speaking', 'communication'],
    body: {
      en: 'Public speaking is an important skill that helps us share our ideas with confidence. It teaches us to express our thoughts clearly in front of others — in class, at work, or in everyday life. At first, speaking in front of people can be scary, but with practice it becomes easier and even enjoyable. Public speaking builds confidence, because it pushes us to overcome fear and believe in ourselves. It also improves our communication skills, which are useful in almost every part of life. When we learn to speak well, we can inspire, motivate, and connect with people. Public speaking is not just about talking — it is about making an impact with our words.',
      uk: 'Публічний виступ — важлива навичка, яка допомагає нам упевнено ділитися своїми ідеями. Вона вчить чітко висловлювати думки перед іншими — у класі, на роботі чи в повсякденному житті. Спершу говорити перед людьми буває страшно, але з практикою це стає легше й навіть приємно. Публічні виступи зміцнюють упевненість, бо змушують долати страх і вірити в себе. Вони також покращують навички спілкування, корисні майже в кожній сфері життя. Коли ми вчимося добре говорити, ми можемо надихати, мотивувати й налагоджувати звʼязок із людьми. Публічний виступ — це не просто говоріння: це вміння впливати своїми словами.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How does public speaking become easier, according to the text?', uk: 'Як публічні виступи стають легшими, за текстом?' },
        options: [
          { en: 'With practice', uk: 'З практикою' },
          { en: 'By avoiding it', uk: 'Уникаючи їх' },
          { en: 'By speaking faster', uk: 'Говорячи швидше' },
        ],
        correct: 0,
        explain: { en: '“…with practice it becomes easier and even enjoyable.”', uk: '«…з практикою це стає легше й навіть приємно.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is public speaking really about, according to the text?', uk: 'Про що насправді публічний виступ, за текстом?' },
        options: [
          { en: 'Making an impact with our words', uk: 'Про вплив своїми словами' },
          { en: 'Talking as long as possible', uk: 'Говорити якнайдовше' },
          { en: 'Using difficult words', uk: 'Вживати складні слова' },
        ],
        correct: 0,
        explain: { en: '“…it is about making an impact with our words.”', uk: '«…це вміння впливати своїми словами.»' },
      },
      {
        kind: 'open',
        q: { en: 'When did you last speak in front of a group? What would help you feel more confident?', uk: 'Коли ви востаннє виступали перед групою? Що допомогло б вам почуватися впевненіше?' },
        sample: { en: 'Answers will vary. A good answer names a real situation and one concrete step (preparation, practice, breathing).', uk: 'Відповіді різнитимуться. Гарна відповідь називає реальну ситуацію й один конкретний крок (підготовка, практика, дихання).' },
      },
    ],
  },
];
