import type { ReadingText } from '../types';

/*
 * Reading · category: travel. Wave S2 (screenshot OCR, CLAUDE.md §15) — first texts in this
 * previously-empty rubric: short A1/A2 travel scenes (airport, hotel, train, mountains).
 */
export const travelTexts: ReadingText[] = [
  {
    id: 'airport',
    title: { en: 'Airport', uk: 'Аеропорт' },
    category: 'travel',
    level: 'a1',
    minutes: 1,
    topics: ['travel', 'airport', 'emotions'],
    body: {
      en: [
        'My name is Lucy, and I am at the airport. I feel excited and a little nervous.',
        'I check my ticket and wait for my flight. There are many people and announcements around me. I watch planes take off and land. I think about my journey ahead. Traveling makes me happy and curious.',
      ].join('\n\n'),
      uk: [
        'Мене звати Люсі, і я в аеропорту. Я відчуваю хвилювання і легку тривогу.',
        'Я перевіряю квиток і чекаю на свій рейс. Навколо мене багато людей і оголошень. Я спостерігаю, як літаки злітають і приземляються. Я думаю про подорож, що чекає попереду. Подорожі роблять мене щасливою і допитливою.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How does Lucy feel at the airport?', uk: 'Як почувається Люсі в аеропорту?' },
        options: [
          { en: 'Bored and tired', uk: 'Знудьгована і втомлена' },
          { en: 'Excited and a little nervous', uk: 'Схвильована і трохи тривожна' },
          { en: 'Angry and confused', uk: 'Розлючена і розгублена' },
        ],
        correct: 1,
        explain: { en: 'Lucy says she feels excited and a little nervous while at the airport.', uk: 'Люсі каже, що відчуває хвилювання і легку тривогу, перебуваючи в аеропорту.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does Lucy do while she waits for her flight?', uk: 'Що робить Люсі, чекаючи на свій рейс?' },
        options: [
          { en: 'She reads a book', uk: 'Вона читає книгу' },
          { en: 'She calls her family', uk: 'Вона дзвонить родині' },
          { en: 'She checks her ticket and watches planes', uk: 'Вона перевіряє квиток і спостерігає за літаками' },
        ],
        correct: 2,
        explain: { en: 'The text says Lucy checks her ticket, waits for her flight, and watches planes take off and land.', uk: 'У тексті сказано, що Люсі перевіряє квиток, чекає на рейс і спостерігає, як літаки злітають і приземляються.' },
      },
      {
        kind: 'open',
        q: { en: 'Have you ever felt both excited and nervous before a trip? Describe the experience.', uk: 'Чи відчували ви колись хвилювання і тривогу одночасно перед подорожжю? Опишіть цей досвід.' },
        sample: { en: 'Yes, before my first flight I felt very similar — excited to see a new place but nervous about the unfamiliar airport procedures. Watching other travelers stay calm helped me relax.', uk: 'Так, перед моїм першим польотом я відчував щось подібне — хвилювання від того, що побачу нове місце, і тривогу через незнайомі процедури в аеропорту. Спостереження за спокійними пасажирами допомогло мені заспокоїтися.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'hotel',
    title: { en: 'Hotel', uk: 'Готель' },
    category: 'travel',
    level: 'a2',
    minutes: 1,
    topics: ['travel', 'hotels', 'hospitality'],
    body: {
      en: 'A hotel is a place where travelers can rest, relax, and feel comfortable away from home. A good hotel provides clean rooms, friendly service, and a peaceful environment for guests. People stay in hotels during vacations, business trips, or long journeys. Hotel staff work hard to make sure every guest feels welcome and safe. A hotel can be simple or luxurious, but its main purpose is to give comfort and care to everyone who stays there.',
      uk: 'Готель — це місце, де мандрівники можуть відпочити, розслабитися й почуватися затишно поза домом. Хороший готель пропонує чисті номери, привітне обслуговування та спокійну атмосферу для гостей. Люди зупиняються в готелях під час відпустки, ділових поїздок чи тривалих подорожей. Персонал готелю старанно працює, щоб кожен гість почувався бажаним і в безпеці. Готель може бути простим або розкішним, але його головна мета — дарувати комфорт і турботу кожному, хто там зупиняється.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does a good hotel provide?', uk: 'Що, за текстом, пропонує хороший готель?' },
        options: [
          { en: 'Loud music all night', uk: 'Гучну музику всю ніч' },
          { en: 'Clean rooms, friendly service, and a peaceful environment', uk: 'Чисті номери, привітне обслуговування та спокійну атмосферу' },
          { en: 'Free flights and tickets', uk: 'Безкоштовні авіаквитки' },
        ],
        correct: 1,
        explain: { en: 'The text says, \'A good hotel provides clean rooms, friendly service, and a peaceful environment for guests.\'', uk: 'У тексті сказано: «Хороший готель пропонує чисті номери, привітне обслуговування та спокійну атмосферу для гостей».' },
      },
      {
        kind: 'mcq',
        q: { en: 'When do people stay in hotels, according to the text?', uk: 'Коли, за текстом, люди зупиняються в готелях?' },
        options: [
          { en: 'Only on weekends', uk: 'Лише у вихідні' },
          { en: 'Never, they always stay with family', uk: 'Ніколи, вони завжди живуть у родичів' },
          { en: 'During vacations, business trips, or long journeys', uk: 'Під час відпустки, ділових поїздок чи тривалих подорожей' },
        ],
        correct: 2,
        explain: { en: 'The text states, \'People stay in hotels during vacations, business trips, or long journeys.\'', uk: 'У тексті сказано: «Люди зупиняються в готелях під час відпустки, ділових поїздок чи тривалих подорожей».' },
      },
      {
        kind: 'open',
        q: { en: 'What do you think makes a hotel stay comfortable and memorable?', uk: 'Що, на твою думку, робить перебування в готелі комфортним і незабутнім?' },
        sample: { en: 'A comfortable, memorable hotel stay comes from clean rooms, friendly staff who make guests feel welcome, and small thoughtful touches that make you feel safe and at home.', uk: 'Комфортне й незабутнє перебування в готелі складається з чистих номерів, привітного персоналу, який змушує гостей почуватися бажаними, і невеликих турботливих деталей, які дарують відчуття безпеки та затишку вдома.' },
      },
    ],
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
  },
  {
    id: 'on-the-train',
    title: { en: 'On the Train', uk: 'У потязі' },
    category: 'travel',
    level: 'a2',
    minutes: 1,
    topics: ['travel', 'train', 'relaxation'],
    body: {
      en: 'Hello! Today, I am on a train. The train is moving fast, and the view outside is beautiful. I can see green fields, small houses, and mountains in the distance. The sun is shining, and the sky is blue. I feel relaxed and enjoy the peaceful ride. I look out the window and take in the scenery. The gentle motion of the train makes me feel calm. I am thinking about the day ahead and feeling excited for what\'s to come. It\'s a great moment to just sit back and enjoy the journey.',
      uk: 'Привіт! Сьогодні я їду на потязі. Потяг мчить швидко, а краєвид за вікном чудовий. Я бачу зелені поля, невеликі будинки та гори вдалині. Сонце світить, а небо блакитне. Я почуваюся розслабленим і насолоджуюся спокійною поїздкою. Я дивлюся у вікно і милуюся краєвидами. Легке погойдування потяга заспокоює мене. Я думаю про день, що попереду, і відчуваю приємне хвилювання від того, що чекає далі. Це чудова мить — просто відкинутися на спинку сидіння і насолоджуватися подорожжю.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What can the narrator see from the train window?', uk: 'Що бачить оповідач з вікна потяга?' },
        options: [
          { en: 'Green fields, small houses, and mountains', uk: 'Зелені поля, невеликі будинки та гори' },
          { en: 'Tall buildings and busy streets', uk: 'Високі будівлі та жваві вулиці' },
          { en: 'The ocean and beaches', uk: 'Океан і пляжі' },
        ],
        correct: 0,
        explain: { en: 'The text says: \'I can see green fields, small houses, and mountains in the distance.\'', uk: 'У тексті сказано: «Я бачу зелені поля, невеликі будинки та гори вдалині».' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the narrator feel during the train ride?', uk: 'Як почувається оповідач під час поїздки на потязі?' },
        options: [
          { en: 'Anxious and impatient', uk: 'Тривожно та нетерпляче' },
          { en: 'Relaxed and calm', uk: 'Розслаблено та спокійно' },
          { en: 'Bored and tired', uk: 'Знуджено та втомлено' },
        ],
        correct: 1,
        explain: { en: 'The narrator says: \'I feel relaxed and enjoy the peaceful ride\' and \'The gentle motion of the train makes me feel calm.\'', uk: 'Оповідач каже: «Я почуваюся розслабленим і насолоджуюся спокійною поїздкою» та «Легке погойдування потяга заспокоює мене».' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a journey (by train, bus, or car) that made you feel relaxed. What did you see, and how did you feel?', uk: 'Опишіть подорож (потягом, автобусом чи автомобілем), яка допомогла вам розслабитися. Що ви бачили і що відчували?' },
        sample: { en: 'Last summer I took a bus through the mountains. I watched the forests and rivers pass by, and by the end of the trip I felt completely calm and refreshed.', uk: 'Минулого літа я їхав автобусом через гори. Я спостерігав, як повз мене пропливають ліси та річки, і наприкінці поїздки почувався абсолютно спокійним і відпочилим.' },
      },
    ],
    source: { author: 'Power of Positivity' },
  },
  {
    id: 'mountains',
    title: { en: 'Mountains', uk: 'Гори' },
    category: 'travel',
    level: 'a2',
    minutes: 1,
    topics: ['travel', 'family', 'winter'],
    body: {
      en: 'Last winter, I went to the mountains with my family. The hills were covered with white snow. I made a big snowman with my brother. We had a snowball fight and laughed a lot. The air was cold and fresh. I saw tall pine trees covered in snow. We drank hot chocolate to stay warm. The view from the top was amazing. We took many pictures of the beautiful scenery. It was an unforgettable trip.',
      uk: 'Минулої зими я їздив у гори з родиною. Пагорби були вкриті білим снігом. Ми з братом зліпили великого сніговика. Ми влаштували бій сніжками і багато сміялися. Повітря було холодним і свіжим. Я бачив високі сосни, вкриті снігом. Ми пили гарячий шоколад, щоб зігрітися. Краєвид з вершини був приголомшливим. Ми зробили багато фотографій прекрасних краєвидів. Це була незабутня подорож.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did the narrator do with their brother in the snow?', uk: 'Що оповідач робив у снігу разом з братом?' },
        options: [
          { en: 'Built a big snowman and had a snowball fight', uk: 'Зліпив великого сніговика і влаштував бій сніжками' },
          { en: 'Went skiing down the mountain', uk: 'Катався на лижах з гори' },
          { en: 'Read books by the fire', uk: 'Читав книжки біля вогню' },
        ],
        correct: 0,
        explain: { en: 'The text says: \'I made a big snowman with my brother. We had a snowball fight and laughed a lot.\'', uk: 'У тексті сказано: «Ми з братом зліпили великого сніговика. Ми влаштували бій сніжками і багато сміялися».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did the family drink to stay warm?', uk: 'Що пила родина, щоб зігрітися?' },
        options: [
          { en: 'Coffee', uk: 'Каву' },
          { en: 'Hot chocolate', uk: 'Гарячий шоколад' },
          { en: 'Tea', uk: 'Чай' },
        ],
        correct: 1,
        explain: { en: 'The text says: \'We drank hot chocolate to stay warm.\'', uk: 'У тексті сказано: «Ми пили гарячий шоколад, щоб зігрітися».' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a memorable trip you took with your family. What made it special?', uk: 'Опишіть незабутню подорож, яку ви здійснили з родиною. Що зробило її особливою?' },
        sample: { en: 'We once camped by a lake for a week. Swimming every morning and cooking together over a fire made it one of my favorite family memories.', uk: 'Одного разу ми тиждень жили в наметі біля озера. Ранкове плавання і спільне приготування їжі на вогнищі зробили це однією з моїх улюблених сімейних згадок.' },
      },
    ],
  },
];
