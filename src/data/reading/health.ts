import type { ReadingText } from '../types';

/*
 * Reading · category: health. Texts transcribed from the owner's screenshot backlog, attributed
 * per `source` (Mind Boost English — Facebook community) where a caption was captured.
 */
const MBE_FB = { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' };

export const healthTexts: ReadingText[] = [
  {
    id: 'clean-water',
    title: { en: 'Clean Water', uk: 'Чиста вода' },
    category: 'health',
    level: 'a2',
    minutes: 1,
    source: MBE_FB,
    topics: ['water', 'health', 'environment'],
    body: {
      en: 'Clean water is essential for life. All living things need water to survive. We use water for drinking, cooking, cleaning, and farming. Clean water keeps us healthy and protects us from diseases. Unfortunately, many people in the world do not have access to safe drinking water. This can cause serious health problems. Therefore, we must protect our water sources and avoid wasting water. Simple actions like keeping water clean and using it wisely can make a big difference. Clean water is a precious gift, and we should value and protect it for ourselves and future generations.',
      uk: 'Чиста вода необхідна для життя. Усе живе потребує води, щоб вижити. Ми використовуємо воду для пиття, готування, прибирання й землеробства. Чиста вода зберігає наше здоровʼя й захищає від хвороб. На жаль, багато людей у світі не мають доступу до безпечної питної води. Це може спричиняти серйозні проблеми зі здоровʼям. Тому ми маємо берегти джерела води й уникати її марнування. Прості дії, як-от підтримання чистоти води й розумне її використання, можуть дати велику різницю. Чиста вода — безцінний дар, і ми маємо цінувати й берегти її для себе й майбутніх поколінь.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do we use water for, according to the text?', uk: 'Для чого, за текстом, ми використовуємо воду?' },
        options: [
          { en: 'Drinking, cooking, cleaning, and farming', uk: 'Пиття, готування, прибирання й землеробства' },
          { en: 'Only drinking', uk: 'Лише для пиття' },
          { en: 'Nothing important', uk: 'Ні для чого важливого' },
        ],
        correct: 0,
        explain: { en: '“We use water for drinking, cooking, cleaning, and farming.”', uk: '«We use water for drinking, cooking, cleaning, and farming.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say we must do?', uk: 'Що, за текстом, ми маємо робити?' },
        options: [
          { en: 'Protect our water sources and avoid wasting water', uk: 'Берегти джерела води й уникати її марнування' },
          { en: 'Use as much water as we like', uk: 'Використовувати стільки води, скільки хочемо' },
          { en: 'Ignore the problem', uk: 'Ігнорувати проблему' },
        ],
        correct: 0,
        explain: { en: '“Therefore, we must protect our water sources and avoid wasting water.”', uk: '«…we must protect our water sources and avoid wasting water.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name two simple things a person could do at home to save clean water.', uk: 'Назвіть дві прості речі, які людина могла б робити вдома, щоб заощаджувати чисту воду.' },
        sample: { en: 'Answers will vary — e.g., turning off the tap while brushing teeth, fixing leaks, taking shorter showers, reusing water for plants.', uk: 'Відповіді різнитимуться — напр., закривати кран під час чищення зубів, лагодити протікання, приймати коротший душ, використовувати воду повторно для рослин.' },
      },
    ],
  },
  {
    id: 'health',
    title: { en: 'Health', uk: 'Здоровʼя' },
    category: 'health',
    level: 'a2',
    minutes: 1,
    topics: ['health', 'lifestyle', 'wellbeing'],
    body: {
      en: 'Health is one of the greatest blessings in life. A healthy person can work, learn, and enjoy life better. Good health depends on proper food, exercise, and rest. We should eat healthy food, drink clean water, and avoid harmful habits. Exercise keeps our body strong and active. A healthy mind is also important for a happy life. Without health, it is difficult to achieve success. Therefore, we should always take care of our health and make it our priority.',
      uk: 'Здоровʼя — одне з найбільших благословень у житті. Здорова людина може краще працювати, вчитися й насолоджуватися життям. Хороше здоровʼя залежить від правильного харчування, фізичних вправ і відпочинку. Ми маємо їсти здорову їжу, пити чисту воду й уникати шкідливих звичок. Фізичні вправи тримають наше тіло сильним і активним. Здоровий розум теж важливий для щасливого життя. Без здоровʼя важко досягати успіху. Тому ми маємо завжди дбати про своє здоровʼя й робити його своїм пріоритетом.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does good health depend on, according to the text?', uk: 'Від чого, за текстом, залежить хороше здоровʼя?' },
        options: [
          { en: 'Proper food, exercise, and rest', uk: 'Правильного харчування, фізичних вправ і відпочинку' },
          { en: 'Money only', uk: 'Лише грошей' },
          { en: 'Luck', uk: 'Удачі' },
        ],
        correct: 0,
        explain: { en: '“Good health depends on proper food, exercise, and rest.”', uk: '«Good health depends on proper food, exercise, and rest.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does exercise do, according to the text?', uk: 'Що дають фізичні вправи, за текстом?' },
        options: [
          { en: 'Keeps our body strong and active', uk: 'Тримають наше тіло сильним і активним' },
          { en: 'Makes us tired and weak', uk: 'Роблять нас утомленими й слабкими' },
          { en: 'Has no effect', uk: 'Не мають жодного впливу' },
        ],
        correct: 0,
        explain: { en: '“Exercise keeps our body strong and active.”', uk: '«Exercise keeps our body strong and active.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name one healthy habit you keep and one you would like to add.', uk: 'Назвіть одну здорову звичку, яку ви маєте, і одну, яку хотіли б додати.' },
        sample: { en: 'Answers will vary. A good answer names a current habit (e.g., walking daily) and a realistic new one (e.g., drinking more water).', uk: 'Відповіді різнитимуться. Гарна відповідь називає теперішню звичку (напр., щоденні прогулянки) і реалістичну нову (напр., пити більше води).' },
      },
    ],
  },
  {
    id: 'the-importance-of-water',
    title: { en: 'The Importance of Water', uk: 'Важливість води' },
    category: 'health',
    level: 'b1',
    minutes: 1,
    topics: ['water', 'environment', 'resources'],
    body: {
      en: 'Water is one of the most important resources on Earth. All living things, including humans, animals, and plants, need water to survive. Our bodies are made of a large percentage of water, and we need to drink it every day to stay healthy. Water is also used for farming, cooking, cleaning, and producing electricity. Without water, life would not be possible. However, clean drinking water is limited in many parts of the world. That is why it is important to use water wisely and avoid wasting it. Simple actions like turning off taps and protecting rivers can help save water. Therefore, we must value water and protect this precious resource for future generations.',
      uk: 'Вода — один із найважливіших ресурсів на Землі. Усе живе, зокрема люди, тварини й рослини, потребує води, щоб вижити. Наші тіла складаються з великого відсотка води, і нам треба пити її щодня, щоб бути здоровими. Воду також використовують для землеробства, готування, прибирання й виробництва електроенергії. Без води життя було б неможливим. Однак чиста питна вода обмежена в багатьох частинах світу. Ось чому важливо використовувати воду розумно й не марнувати її. Прості дії, як-от закривати крани й берегти річки, можуть допомогти зберегти воду. Тому ми маємо цінувати воду й берегти цей дорогоцінний ресурс для майбутніх поколінь.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Besides drinking, what is water used for, according to the text?', uk: 'Окрім пиття, для чого, за текстом, використовують воду?' },
        options: [
          { en: 'Farming, cooking, cleaning, and producing electricity', uk: 'Землеробства, готування, прибирання й виробництва електроенергії' },
          { en: 'Nothing else', uk: 'Ні для чого іншого' },
          { en: 'Only swimming', uk: 'Лише для плавання' },
        ],
        correct: 0,
        explain: { en: '“Water is also used for farming, cooking, cleaning, and producing electricity.”', uk: '«…farming, cooking, cleaning, and producing electricity.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What simple actions can help save water, according to the text?', uk: 'Які прості дії можуть допомогти зберегти воду, за текстом?' },
        options: [
          { en: 'Turning off taps and protecting rivers', uk: 'Закривати крани й берегти річки' },
          { en: 'Leaving taps open', uk: 'Лишати крани відкритими' },
          { en: 'Ignoring the problem', uk: 'Ігнорувати проблему' },
        ],
        correct: 0,
        explain: { en: '“Simple actions like turning off taps and protecting rivers can help save water.”', uk: '«…turning off taps and protecting rivers can help save water.»' },
      },
      {
        kind: 'open',
        q: { en: 'Why is it important to protect clean water “for future generations”? Give your view.', uk: 'Чому важливо берегти чисту воду «для майбутніх поколінь»? Наведіть свою думку.' },
        sample: { en: 'Answers will vary. A thoughtful answer connects limited clean water today with the needs of people not yet born, and names one way to protect it.', uk: 'Відповіді різнитимуться. Вдумлива відповідь повʼязує обмеженість чистої води сьогодні з потребами ще не народжених людей і називає один спосіб її берегти.' },
      },
    ],
  },
  {
    id: 'junk-food',
    title: { en: 'Junk Food', uk: 'Шкідлива їжа' },
    category: 'health',
    level: 'b1',
    minutes: 1,
    topics: ['health', 'food', 'diet'],
    body: {
      en: 'Junk food is very popular, especially among young people. It includes foods like burgers, fries, pizza, chips, and sugary drinks. These foods are tasty but usually unhealthy. Junk food often contains too much fat, sugar, and salt. Eating too much junk food can cause health problems such as obesity and low energy. It may also affect our concentration and overall health. Instead of eating junk food regularly, we should try to eat healthy foods like fruits, vegetables, and home-cooked meals. A balanced diet helps our body stay strong and active. Therefore, we should limit junk food and choose healthier options for a better life.',
      uk: 'Шкідлива їжа дуже популярна, особливо серед молоді. До неї належать такі продукти, як бургери, картопля фрі, піца, чипси й солодкі напої. Ця їжа смачна, але зазвичай нездорова. Шкідлива їжа часто містить забагато жиру, цукру й солі. Надмірне споживання шкідливої їжі може спричиняти проблеми зі здоровʼям, як-от ожиріння й низьку енергію. Вона також може впливати на нашу концентрацію й загальне здоровʼя. Замість того щоб регулярно їсти шкідливу їжу, варто намагатися їсти здорову — фрукти, овочі й домашні страви. Збалансоване харчування допомагає тілу лишатися сильним і активним. Тому ми маємо обмежувати шкідливу їжу й обирати здоровіші варіанти заради кращого життя.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does junk food often contain too much of, according to the text?', uk: 'Чого, за текстом, у шкідливій їжі часто забагато?' },
        options: [
          { en: 'Fat, sugar, and salt', uk: 'Жиру, цукру й солі' },
          { en: 'Vitamins and fiber', uk: 'Вітамінів і клітковини' },
          { en: 'Water', uk: 'Води' },
        ],
        correct: 0,
        explain: { en: '“Junk food often contains too much fat, sugar, and salt.”', uk: '«Junk food often contains too much fat, sugar, and salt.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text suggest eating instead?', uk: 'Що текст радить їсти натомість?' },
        options: [
          { en: 'Fruits, vegetables, and home-cooked meals', uk: 'Фрукти, овочі й домашні страви' },
          { en: 'More chips and soda', uk: 'Більше чипсів і газованки' },
          { en: 'Nothing at all', uk: 'Нічого взагалі' },
        ],
        correct: 0,
        explain: { en: '“…we should try to eat healthy foods like fruits, vegetables, and home-cooked meals.”', uk: '«…fruits, vegetables, and home-cooked meals.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one junk food you enjoy, and one healthier swap you could try?', uk: 'Яку одну шкідливу їжу ви любите і яку здоровішу заміну могли б спробувати?' },
        sample: { en: 'Answers will vary — e.g., swapping chips for nuts, soda for water, or fast food for a home-cooked meal a few times a week.', uk: 'Відповіді різнитимуться — напр., замінити чипси горіхами, газованку водою чи фастфуд домашньою стравою кілька разів на тиждень.' },
      },
    ],
  },
  {
    id: 'healthy-life',
    title: { en: 'Healthy Life', uk: 'Здоровий спосіб життя' },
    category: 'health',
    level: 'a2',
    minutes: 2,
    topics: ['health', 'exercise', 'sleep'],
    body: {
      en: [
        'Hello! Today we are going to talk about a healthy life. A healthy life means taking care of your body and mind. When people live a healthy life, they feel stronger, happier, and more active every day.',
        'Living a healthy life is not only about eating good food. It is also about exercise, sleep, and positive thinking. People should eat fruits, vegetables, and healthy meals to give their bodies energy. They should also drink enough water and avoid too much junk food.',
        'Exercise is another important part of a healthy life. Some people like running, swimming, or playing sports. Exercise helps the body stay strong and keeps the heart healthy. Even a short walk every day can make a big difference. Sleep is also very important. When people sleep well, they feel fresh and ready for the day. Without enough sleep, people may feel tired and lose focus.',
        'A healthy life is different for everyone. Some people enjoy outdoor activities like hiking or cycling. Others prefer yoga or simple home exercises. The important thing is to stay active and take care of yourself. In the end, living a healthy life helps people feel better and enjoy their days more. Small healthy habits can make a big change in the future. Everyone can start today and build a happier and healthier life.',
      ].join('\n\n'),
      uk: [
        'Привіт! Сьогодні ми поговоримо про здоровий спосіб життя. Здоровий спосіб життя означає дбати про своє тіло й розум. Коли люди живуть здорово, вони почуваються сильнішими, щасливішими й активнішими щодня.',
        'Здоровий спосіб життя — це не лише про хорошу їжу. Це також про фізичні вправи, сон і позитивне мислення. Люди мають їсти фрукти, овочі й здорові страви, щоб давати тілу енергію. Вони також мають пити достатньо води й уникати надміру шкідливої їжі.',
        'Фізичні вправи — ще одна важлива частина здорового життя. Одні люблять біг, плавання чи спортивні ігри. Вправи допомагають тілу лишатися сильним і зберігають серце здоровим. Навіть коротка щоденна прогулянка може дати велику різницю. Сон теж дуже важливий. Коли люди добре сплять, вони почуваються свіжими й готовими до дня. Без достатнього сну люди можуть почуватися втомленими й втрачати зосередженість.',
        'Здоровий спосіб життя в кожного різний. Одні люблять активний відпочинок на природі, як-от гори чи велосипед. Інші віддають перевагу йозі чи простим домашнім вправам. Головне — лишатися активним і дбати про себе. Зрештою, здоровий спосіб життя допомагає людям почуватися краще й більше насолоджуватися своїми днями. Маленькі здорові звички можуть дати велику зміну в майбутньому. Кожен може почати сьогодні й побудувати щасливіше й здоровіше життя.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the speaker, a healthy life is not only about food, but also about…', uk: 'За оповідачем, здоровий спосіб життя — це не лише про їжу, а й про…' },
        options: [
          { en: 'exercise, sleep, and positive thinking', uk: 'фізичні вправи, сон і позитивне мислення' },
          { en: 'earning money', uk: 'заробляння грошей' },
          { en: 'watching television', uk: 'перегляд телевізора' },
        ],
        correct: 0,
        explain: { en: '“It is also about exercise, sleep, and positive thinking.”', uk: '«…exercise, sleep, and positive thinking.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What can happen without enough sleep, according to the speaker?', uk: 'Що може статися без достатнього сну, за оповідачем?' },
        options: [
          { en: 'People may feel tired and lose focus', uk: 'Люди можуть почуватися втомленими й втрачати зосередженість' },
          { en: 'People feel more energetic', uk: 'Люди почуваються енергійнішими' },
          { en: 'Nothing changes', uk: 'Нічого не змінюється' },
        ],
        correct: 0,
        explain: { en: '“Without enough sleep, people may feel tired and lose focus.”', uk: '«Without enough sleep, people may feel tired and lose focus.»' },
      },
      {
        kind: 'open',
        q: { en: 'The speaker says a healthy life is different for everyone. What does a healthy day look like for you?', uk: 'Оповідач каже, що здоровий спосіб життя в кожного різний. Який здоровий день для вас?' },
        sample: { en: 'Answers will vary. A good answer describes concrete habits (food, movement, sleep) that fit the reader’s own routine.', uk: 'Відповіді різнитимуться. Гарна відповідь описує конкретні звички (їжа, рух, сон), що пасують до власного розпорядку читача.' },
      },
    ],
  },
  {
    id: 'sleeping-early-at-night',
    title: { en: 'Sleeping Early at Night', uk: 'Ранній сон уночі' },
    category: 'health',
    level: 'b1',
    minutes: 1,
    topics: ['sleep', 'health', 'routine'],
    body: {
      en: 'Sleeping early at night is very important for our health and daily life. When we go to bed on time, our body and mind get proper rest. Early sleep helps us wake up fresh and active in the morning. It improves concentration, memory, and learning. People who sleep late often feel tired, weak, and stressed. Sleeping early also protects our eyes, heart, and overall health. Children and students grow better and perform well in studies if they sleep on time. A good routine of early sleep and waking up early makes life disciplined and productive. Healthy sleep is the key to a healthy and happy life.',
      uk: 'Лягати спати рано вночі дуже важливо для нашого здоровʼя й повсякдення. Коли ми лягаємо вчасно, наше тіло й розум отримують належний відпочинок. Ранній сон допомагає прокидатися свіжими й активними зранку. Він покращує концентрацію, памʼять і навчання. Люди, які лягають пізно, часто почуваються втомленими, слабкими й напруженими. Ранній сон також захищає наші очі, серце й загальне здоровʼя. Діти й учні краще ростуть і добре встигають у навчанні, якщо сплять вчасно. Хороший розпорядок — рано лягати й рано вставати — робить життя дисциплінованим і продуктивним. Здоровий сон — ключ до здорового й щасливого життя.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does early sleep help us do in the morning, according to the text?', uk: 'Що ранній сон допомагає робити зранку, за текстом?' },
        options: [
          { en: 'Wake up fresh and active', uk: 'Прокидатися свіжими й активними' },
          { en: 'Feel tired and weak', uk: 'Почуватися втомленими й слабкими' },
          { en: 'Sleep even more', uk: 'Спати ще більше' },
        ],
        correct: 0,
        explain: { en: '“Early sleep helps us wake up fresh and active in the morning.”', uk: '«…wake up fresh and active in the morning.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How do people who sleep late often feel, according to the text?', uk: 'Як почуваються люди, які лягають пізно, за текстом?' },
        options: [
          { en: 'Tired, weak, and stressed', uk: 'Втомленими, слабкими й напруженими' },
          { en: 'Fresh and focused', uk: 'Свіжими й зосередженими' },
          { en: 'Exactly the same', uk: 'Точно так само' },
        ],
        correct: 0,
        explain: { en: '“People who sleep late often feel tired, weak, and stressed.”', uk: '«…tired, weak, and stressed.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is your usual bedtime? Name one small change that could improve your sleep.', uk: 'О котрій ви зазвичай лягаєте? Назвіть одну маленьку зміну, що покращила б ваш сон.' },
        sample: { en: 'Answers will vary — e.g., a fixed bedtime, less screen time before bed, a calmer evening routine.', uk: 'Відповіді різнитимуться — напр., сталий час сну, менше екрана перед сном, спокійніший вечірній розпорядок.' },
      },
    ],
  },
  {
    id: 'ambulance',
    title: { en: 'Ambulance', uk: 'Швидка допомога' },
    category: 'health',
    level: 'b1',
    minutes: 1,
    topics: ['emergency', 'health', 'service'],
    body: {
      en: 'An ambulance is a special vehicle used to carry sick or injured people to the hospital. It plays a very important role in emergencies. Ambulances are equipped with medical tools and equipment to give first aid during the journey. Trained paramedics and drivers work together to save lives. The siren and flashing lights help the ambulance move quickly through traffic. In accidents, heart attacks, or serious illnesses, ambulances provide immediate help. They offer hope and quick medical support when time is very important. Ambulance services are available day and night. We should respect and give way to ambulances because they are saving precious lives.',
      uk: 'Швидка допомога — це спеціальний автомобіль, який перевозить хворих чи травмованих людей до лікарні. Вона відіграє дуже важливу роль у надзвичайних ситуаціях. Машини швидкої оснащені медичними інструментами й обладнанням, щоб надавати першу допомогу в дорозі. Навчені парамедики й водії працюють разом, щоб рятувати життя. Сирена й миготливі вогні допомагають швидкій швидко рухатися крізь затори. У разі аварій, серцевих нападів чи серйозних хвороб швидка надає негайну допомогу. Вона дає надію й швидку медичну підтримку, коли час дуже важливий. Служби швидкої доступні вдень і вночі. Ми маємо поважати швидку й поступатися їй дорогою, бо вона рятує безцінні життя.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why do ambulances have sirens and flashing lights, according to the text?', uk: 'Навіщо швидкій сирена й миготливі вогні, за текстом?' },
        options: [
          { en: 'To move quickly through traffic', uk: 'Щоб швидко рухатися крізь затори' },
          { en: 'To look nice', uk: 'Щоб гарно виглядати' },
          { en: 'For no real reason', uk: 'Без справжньої причини' },
        ],
        correct: 0,
        explain: { en: '“The siren and flashing lights help the ambulance move quickly through traffic.”', uk: '«…move quickly through traffic.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say we should do?', uk: 'Що, за текстом, ми маємо робити?' },
        options: [
          { en: 'Respect and give way to ambulances', uk: 'Поважати швидку й поступатися їй дорогою' },
          { en: 'Block their path', uk: 'Перегороджувати їй дорогу' },
          { en: 'Ignore them', uk: 'Ігнорувати її' },
        ],
        correct: 0,
        explain: { en: '“We should respect and give way to ambulances because they are saving precious lives.”', uk: '«…respect and give way to ambulances…»' },
      },
      {
        kind: 'open',
        q: { en: 'Why is giving way to an ambulance important? Explain in one or two sentences.', uk: 'Чому важливо поступатися дорогою швидкій? Поясніть одним-двома реченнями.' },
        sample: { en: 'Answers will vary. A good answer connects giving way to saving time, and saving time to saving a life in an emergency.', uk: 'Відповіді різнитимуться. Гарна відповідь повʼязує поступання дорогою з економією часу, а час — із порятунком життя в надзвичайній ситуації.' },
      },
    ],
  },
];
