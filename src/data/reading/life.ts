import type { ReadingText } from '../types';

/*
 * Reading · category: life. Texts transcribed from the owner's screenshot backlog, attributed
 * per `source` (Mind Boost English — Facebook community).
 */
const MBE_FB = { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' };

export const lifeTexts: ReadingText[] = [
  {
    id: 'village',
    title: { en: 'Village', uk: 'Село' },
    category: 'life',
    level: 'a2',
    minutes: 1,
    source: MBE_FB,
    topics: ['village', 'nature', 'simple-life'],
    body: {
      en: 'A village is a calm and beautiful place where life is simple and close to nature. People in villages live like a family and help each other in daily life. Fresh air, green fields, and peaceful surroundings make village life healthy and stress-free. Villages teach us honesty, hard work, and strong values. Life in a village may be simple, but it is full of peace and happiness.',
      uk: 'Село — це спокійне й гарне місце, де життя просте й близьке до природи. Люди в селах живуть, наче одна родина, і допомагають одне одному в щоденних справах. Свіже повітря, зелені поля й мирне довкілля роблять сільське життя здоровим і без стресу. Села вчать нас чесності, працьовитості й міцних цінностей. Життя в селі може бути простим, але воно сповнене спокою й щастя.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How do people in villages live, according to the text?', uk: 'Як, за текстом, живуть люди в селах?' },
        options: [
          { en: 'Like a family, helping each other', uk: 'Наче родина, допомагаючи одне одному' },
          { en: 'Alone and apart', uk: 'Самотньо й окремо' },
          { en: 'In constant competition', uk: 'У постійному суперництві' },
        ],
        correct: 0,
        explain: { en: '“People in villages live like a family and help each other in daily life.”', uk: '«People in villages live like a family…»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What makes village life healthy and stress-free?', uk: 'Що робить сільське життя здоровим і без стресу?' },
        options: [
          { en: 'Fresh air, green fields, and peaceful surroundings', uk: 'Свіже повітря, зелені поля й мирне довкілля' },
          { en: 'Big crowds and traffic', uk: 'Великі натовпи й затори' },
          { en: 'Bright city lights', uk: 'Яскраві вогні міста' },
        ],
        correct: 0,
        explain: { en: '“Fresh air, green fields, and peaceful surroundings make village life healthy and stress-free.”', uk: '«Fresh air, green fields, and peaceful surroundings…»' },
      },
      {
        kind: 'open',
        q: { en: 'Would you prefer to live in a village or a city? Give two reasons.', uk: 'Ви б хотіли жити в селі чи в місті? Наведіть дві причини.' },
        sample: { en: 'Answers will vary. A strong answer takes a side and gives two concrete reasons (e.g., calm and clean air vs. jobs and convenience).', uk: 'Відповіді різнитимуться. Сильна відповідь обирає варіант і дає дві конкретні причини (напр., спокій і чисте повітря проти роботи й зручності).' },
      },
    ],
  },
  {
    id: 'poverty',
    title: { en: 'Poverty', uk: 'Бідність' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    source: MBE_FB,
    topics: ['society', 'poverty', 'kindness'],
    body: {
      en: 'Poverty is one of the biggest challenges in the world. It affects people’s health, education, and opportunities in life. Poor people often struggle for basic needs like food, shelter, and medical care. Poverty is not a choice; it is a condition that needs understanding and support. By providing education, jobs, and kindness, we can reduce poverty. Helping the poor creates a fairer society and brings hope, dignity, and a better future for everyone.',
      uk: 'Бідність — один із найбільших викликів у світі. Вона впливає на здоровʼя людей, освіту й можливості в житті. Бідні люди часто борються за базові потреби — їжу, житло й медичну допомогу. Бідність — це не вибір; це стан, що потребує розуміння й підтримки. Даючи освіту, роботу й доброту, ми можемо зменшити бідність. Допомога бідним створює справедливіше суспільство й приносить надію, гідність і краще майбутнє для всіх.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How does the text describe poverty?', uk: 'Як текст описує бідність?' },
        options: [
          { en: 'Not a choice, but a condition that needs support', uk: 'Не вибір, а стан, що потребує підтримки' },
          { en: 'A personal choice people make', uk: 'Особистий вибір людей' },
          { en: 'A small, rare problem', uk: 'Дрібну, рідкісну проблему' },
        ],
        correct: 0,
        explain: { en: '“Poverty is not a choice; it is a condition that needs understanding and support.”', uk: '«Poverty is not a choice; it is a condition that needs understanding and support.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, how can we reduce poverty?', uk: 'За текстом, як ми можемо зменшити бідність?' },
        options: [
          { en: 'By providing education, jobs, and kindness', uk: 'Даючи освіту, роботу й доброту' },
          { en: 'By ignoring it', uk: 'Ігноруючи її' },
          { en: 'By blaming the poor', uk: 'Звинувачуючи бідних' },
        ],
        correct: 0,
        explain: { en: '“By providing education, jobs, and kindness, we can reduce poverty.”', uk: '«By providing education, jobs, and kindness, we can reduce poverty.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name one thing an ordinary person could do to help reduce poverty in their community.', uk: 'Назвіть одну річ, яку звичайна людина могла б зробити, щоб зменшити бідність у своїй громаді.' },
        sample: { en: 'Answers will vary — e.g., volunteering, donating to a food bank, mentoring or teaching a skill, supporting local jobs, treating people with dignity.', uk: 'Відповіді різнитимуться — напр., волонтерство, пожертва до продуктового банку, менторство чи навчання навички, підтримка місцевих робочих місць, ставлення до людей із гідністю.' },
      },
    ],
  },
  {
    id: 'hope',
    title: { en: 'Hope', uk: 'Надія' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['hope', 'resilience', 'motivation'],
    body: {
      en: 'Hope is the light that guides us through difficult times. It reminds us that no challenge is permanent and no night lasts forever. When we hold on to hope, we find strength to keep moving forward, even when the path seems hard. Hope inspires courage, encourages patience, and pushes us to believe in better days. A hopeful heart never gives up and always searches for new possibilities. Hope creates miracles.',
      uk: 'Надія — це світло, що веде нас крізь важкі часи. Вона нагадує, що жоден виклик не вічний і жодна ніч не триває завжди. Коли ми тримаємося за надію, ми знаходимо сили рухатися далі, навіть коли шлях здається важким. Надія надихає на сміливість, заохочує до терпіння й спонукає вірити в кращі дні. Сповнене надії серце ніколи не здається й завжди шукає нові можливості. Надія творить дива.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does hope remind us of, according to the text?', uk: 'Про що, за текстом, нагадує надія?' },
        options: [
          { en: 'That no challenge is permanent and no night lasts forever', uk: 'Що жоден виклик не вічний і жодна ніч не триває завжди' },
          { en: 'That life is always easy', uk: 'Що життя завжди легке' },
          { en: 'That we should give up', uk: 'Що варто здатися' },
        ],
        correct: 0,
        explain: { en: '“It reminds us that no challenge is permanent and no night lasts forever.”', uk: '«…no challenge is permanent and no night lasts forever.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does a hopeful heart do, according to the text?', uk: 'Що робить сповнене надії серце, за текстом?' },
        options: [
          { en: 'Never gives up and searches for new possibilities', uk: 'Ніколи не здається й шукає нові можливості' },
          { en: 'Waits and does nothing', uk: 'Чекає й нічого не робить' },
          { en: 'Avoids all challenges', uk: 'Уникає будь-яких викликів' },
        ],
        correct: 0,
        explain: { en: '“A hopeful heart never gives up and always searches for new possibilities.”', uk: '«A hopeful heart never gives up and always searches for new possibilities.»' },
      },
      {
        kind: 'open',
        q: { en: 'Think of a difficult time when hope helped you. What kept you going?', uk: 'Згадайте важкий час, коли надія вам допомогла. Що вас підтримувало?' },
        sample: { en: 'Answers will vary. A strong answer describes a real situation and names what gave hope (a person, a goal, a belief that things would improve).', uk: 'Відповіді різнитимуться. Сильна відповідь описує реальну ситуацію й називає джерело надії (людина, ціль, віра, що стане краще).' },
      },
    ],
  },
  {
    id: 'embrace-change',
    title: { en: 'Embrace Change', uk: 'Прийми зміни' },
    category: 'life',
    level: 'b1',
    minutes: 2,
    source: MBE_FB,
    topics: ['change', 'growth', 'mindset'],
    body: {
      en: [
        'Change can be scary, and it often feels uncomfortable. We like routines and the familiar because they feel safe. But growth never comes from staying in the same place. To become your best self, you must be willing to embrace change.',
        'Every change, even small, opens the door to new experiences, lessons, and opportunities. Sometimes it might feel like you are losing control, but often, life is guiding you toward something better. Trust the process and stay open-minded.',
        'Resisting change can lead to frustration, stress, and missed opportunities. Instead, approach it with curiosity and courage. Look for the lessons in every challenge, and use them to grow stronger and wiser. Remember, discomfort is often a sign that you are moving forward, not backward.',
        'Surround yourself with people who inspire and support you during transitions. Focus on what you can control, and let go of what you cannot. Be patient with yourself and take one step at a time.',
      ].join('\n\n'),
      uk: [
        'Зміни можуть лякати, і часто вони відчуваються некомфортно. Ми любимо звичне й знайоме, бо воно здається безпечним. Але зростання ніколи не приходить від того, щоб лишатися на місці. Щоб стати найкращою версією себе, треба бути готовим прийняти зміни.',
        'Кожна зміна, навіть маленька, відчиняє двері до нового досвіду, уроків і можливостей. Іноді може здаватися, що ти втрачаєш контроль, але часто життя веде тебе до чогось кращого. Довіряй процесу й лишайся відкритим.',
        'Опір змінам може призводити до розчарування, стресу й втрачених можливостей. Натомість підходь до них із цікавістю й сміливістю. Шукай уроки в кожному виклику й використовуй їх, щоб ставати сильнішим і мудрішим. Памʼятай: дискомфорт часто є ознакою того, що ти рухаєшся вперед, а не назад.',
        'Оточуй себе людьми, які надихають і підтримують тебе під час перемін. Зосередься на тому, що можеш контролювати, і відпусти те, що не можеш. Будь терплячим до себе й роби крок за кроком.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why do we like routines and the familiar, according to the text?', uk: 'Чому, за текстом, ми любимо звичне й знайоме?' },
        options: [
          { en: 'Because they feel safe', uk: 'Бо воно здається безпечним' },
          { en: 'Because they help us grow', uk: 'Бо воно допомагає зростати' },
          { en: 'Because they are exciting', uk: 'Бо воно захопливе' },
        ],
        correct: 0,
        explain: { en: '“We like routines and the familiar because they feel safe.”', uk: '«…because they feel safe.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, discomfort is often a sign that you are…', uk: 'За текстом, дискомфорт часто є ознакою того, що ти…' },
        options: [
          { en: 'moving forward, not backward', uk: 'рухаєшся вперед, а не назад' },
          { en: 'doing something wrong', uk: 'робиш щось не так' },
          { en: 'about to fail', uk: 'ось-ось зазнаєш невдачі' },
        ],
        correct: 0,
        explain: { en: '“Remember, discomfort is often a sign that you are moving forward, not backward.”', uk: '«…discomfort is often a sign that you are moving forward, not backward.»' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a change you resisted at first but later found helpful. What did you learn?', uk: 'Опишіть зміну, якій ви спершу опиралися, але згодом визнали корисною. Чого ви навчилися?' },
        sample: { en: 'Answers will vary. A strong answer names a real change (a new job, city, or habit) and one concrete lesson or benefit it brought.', uk: 'Відповіді різнитимуться. Сильна відповідь називає реальну зміну (нова робота, місто чи звичка) і один конкретний урок чи користь, які вона принесла.' },
      },
    ],
  },
  {
    id: 'the-importance-of-positive-attitude',
    title: { en: 'The Importance of Positive Attitude', uk: 'Важливість позитивного ставлення' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['positivity', 'mindset', 'wellbeing'],
    body: {
      en: 'A positive attitude is very important for a happy and successful life. It helps us see the good side of every situation. People with a positive attitude stay strong during difficult times and do not lose hope. A positive attitude improves our confidence and relationships with others. It also helps us handle stress and challenges more easily. When we think positively, we take better actions and achieve better results. Even small positive thoughts can create big changes in life. Therefore, we should always try to keep a positive attitude and move forward with hope and confidence.',
      uk: 'Позитивне ставлення дуже важливе для щасливого й успішного життя. Воно допомагає нам бачити хороший бік будь-якої ситуації. Люди з позитивним ставленням лишаються сильними у важкі часи й не втрачають надії. Позитивне ставлення покращує нашу впевненість і стосунки з іншими. Воно також допомагає легше долати стрес і виклики. Коли ми мислимо позитивно, ми діємо краще й досягаємо кращих результатів. Навіть маленькі позитивні думки можуть створювати великі зміни в житті. Тому варто завжди намагатися зберігати позитивне ставлення й рухатися вперед із надією та впевненістю.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do people with a positive attitude do during difficult times?', uk: 'Що роблять люди з позитивним ставленням у важкі часи?' },
        options: [
          { en: 'Stay strong and do not lose hope', uk: 'Лишаються сильними й не втрачають надії' },
          { en: 'Give up quickly', uk: 'Швидко здаються' },
          { en: 'Blame others', uk: 'Звинувачують інших' },
        ],
        correct: 0,
        explain: { en: '“People with a positive attitude stay strong during difficult times and do not lose hope.”', uk: '«…stay strong during difficult times and do not lose hope.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, what can even small positive thoughts create?', uk: 'За текстом, що можуть створити навіть маленькі позитивні думки?' },
        options: [
          { en: 'Big changes in life', uk: 'Великі зміни в житті' },
          { en: 'Nothing at all', uk: 'Зовсім нічого' },
          { en: 'More stress', uk: 'Більше стресу' },
        ],
        correct: 0,
        explain: { en: '“Even small positive thoughts can create big changes in life.”', uk: '«Even small positive thoughts can create big changes in life.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one habit that helps you keep a positive attitude on a hard day?', uk: 'Яка одна звичка допомагає вам зберігати позитивне ставлення у важкий день?' },
        sample: { en: 'Answers will vary. A good answer names a concrete habit (e.g., a short walk, writing down three good things, talking to a friend) and why it helps.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну звичку (напр., коротка прогулянка, записати три хороші речі, поговорити з другом) і чому вона допомагає.' },
      },
    ],
  },
  {
    id: 'a-new-season',
    title: { en: 'A New Season', uk: 'Нова пора року' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['change', 'hope', 'new-beginnings'],
    body: {
      en: 'A new season is a symbol of change, hope, and new beginnings. When the season changes, nature becomes fresh and beautiful again. Trees grow green leaves, flowers bloom, and the air feels fresh. It reminds us that life also gives us many chances to start again. If yesterday was difficult, today can be better. A new season brings new energy and motivation. Just like nature grows and improves, we can also improve ourselves. We can set new goals, build better habits, and move forward with confidence. Every new season teaches us that change is possible and the future can always be brighter.',
      uk: 'Нова пора року — символ змін, надії й нових починань. Коли пора року змінюється, природа знову стає свіжою й гарною. Дерева вкриваються зеленим листям, квіти розквітають, а повітря відчувається свіжим. Це нагадує нам, що життя теж дає багато шансів почати знову. Якщо вчора було важко, сьогодні може бути краще. Нова пора року приносить нову енергію й мотивацію. Так само як природа росте й оновлюється, ми теж можемо ставати кращими. Ми можемо ставити нові цілі, виробляти кращі звички й рухатися вперед із упевненістю. Кожна нова пора року вчить нас, що зміни можливі, а майбутнє завжди може бути світлішим.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What is a new season a symbol of, according to the text?', uk: 'Символом чого, за текстом, є нова пора року?' },
        options: [
          { en: 'Change, hope, and new beginnings', uk: 'Змін, надії й нових починань' },
          { en: 'Endings and loss', uk: 'Завершень і втрат' },
          { en: 'Boredom', uk: 'Нудьги' },
        ],
        correct: 0,
        explain: { en: '“A new season is a symbol of change, hope, and new beginnings.”', uk: '«A new season is a symbol of change, hope, and new beginnings.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does every new season teach us, according to the text?', uk: 'Чого, за текстом, вчить нас кожна нова пора року?' },
        options: [
          { en: 'That change is possible and the future can be brighter', uk: 'Що зміни можливі, а майбутнє може бути світлішим' },
          { en: 'That nothing ever changes', uk: 'Що ніщо ніколи не змінюється' },
          { en: 'That the past cannot be improved on', uk: 'Що минуле не можна покращити' },
        ],
        correct: 0,
        explain: { en: '“Every new season teaches us that change is possible and the future can always be brighter.”', uk: '«…change is possible and the future can always be brighter.»' },
      },
      {
        kind: 'open',
        q: { en: 'If you started “a new season” in your own life today, what is one goal you would set?', uk: 'Якби ви сьогодні почали «нову пору» у власному житті, яку одну ціль ви б поставили?' },
        sample: { en: 'Answers will vary. A good answer names a specific, positive goal and one small first step toward it.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну позитивну ціль і один маленький перший крок до неї.' },
      },
    ],
  },
  {
    id: 'my-life-struggle',
    title: { en: 'My Life Struggle', uk: 'Моя життєва боротьба' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['struggle', 'resilience', 'growth'],
    body: {
      en: 'My life struggle has shaped who I am today. Life has not always been easy, and I have faced many challenges along the way. There were times when I felt tired, confused, and close to giving up. However, each struggle taught me an important lesson about patience, strength, and hope. I learned to stand up after every fall and keep moving forward. My struggles made me stronger and more determined. They taught me the value of hard work and self-belief. Even when the road was difficult, I never stopped trying. Today, I see my struggles not as failures, but as steps that helped me grow and become a better person.',
      uk: 'Моя життєва боротьба сформувала того, ким я є сьогодні. Життя не завжди було легким, і я стикався з багатьма викликами на своєму шляху. Були часи, коли я почувався втомленим, розгубленим і близьким до того, щоб здатися. Однак кожна боротьба навчила мене важливого уроку про терпіння, силу й надію. Я навчився підводитися після кожного падіння й продовжувати рухатися вперед. Моя боротьба зробила мене сильнішим і рішучішим. Вона навчила мене цінності наполегливої праці й самовіри. Навіть коли шлях був важким, я ніколи не переставав намагатися. Сьогодні я бачу свою боротьбу не як невдачі, а як сходинки, що допомогли мені зрости й стати кращою людиною.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did each struggle teach the speaker?', uk: 'Чого навчила оповідача кожна боротьба?' },
        options: [
          { en: 'A lesson about patience, strength, and hope', uk: 'Уроку про терпіння, силу й надію' },
          { en: 'That trying is pointless', uk: 'Що намагатися марно' },
          { en: 'To give up sooner', uk: 'Здаватися раніше' },
        ],
        correct: 0,
        explain: { en: '“…each struggle taught me an important lesson about patience, strength, and hope.”', uk: '«…patience, strength, and hope.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the speaker see their struggles today?', uk: 'Як оповідач бачить свою боротьбу сьогодні?' },
        options: [
          { en: 'As steps that helped them grow', uk: 'Як сходинки, що допомогли зрости' },
          { en: 'As pure failures', uk: 'Як суцільні невдачі' },
          { en: 'As bad luck', uk: 'Як невдачу' },
        ],
        correct: 0,
        explain: { en: '“…I see my struggles not as failures, but as steps that helped me grow.”', uk: '«…as steps that helped me grow.»' },
      },
      {
        kind: 'open',
        q: { en: 'Think of a past struggle. What did it teach you about yourself?', uk: 'Згадайте минулу боротьбу. Чого вона навчила вас про себе?' },
        sample: { en: 'Answers will vary. A strong answer names a real difficulty and a concrete lesson or strength gained from it.', uk: 'Відповіді різнитимуться. Сильна відповідь називає реальну складність і конкретний урок чи здобуту силу.' },
      },
    ],
  },
  {
    id: 'there-are-days-when',
    title: { en: 'There Are Days When', uk: 'Бувають дні, коли' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['wellbeing', 'hope', 'patience'],
    body: {
      en: [
        'There are days when your heart feels tired and your mind feels full. You try to stay strong, but inside you feel weak. If this is you today, please know that it is okay. Feeling tired does not mean you are failing.',
        'Life moves slowly sometimes. Dreams take time. Healing takes time. But every small step you take is moving you forward, even when it doesn’t feel like it.',
        'Do not be too hard on yourself. You are learning. You are growing. You are becoming stronger through the pain. One day, you will understand why you had to go through this.',
        'Until then, hold on. Believe in yourself. Better days are on the way. Thank you.',
      ].join('\n\n'),
      uk: [
        'Бувають дні, коли твоє серце почувається втомленим, а розум — переповненим. Ти намагаєшся лишатися сильним, але всередині почуваєшся слабким. Якщо це про тебе сьогодні, знай — це нормально. Почуватися втомленим не означає, що ти зазнаєш невдачі.',
        'Іноді життя рухається повільно. Мрії потребують часу. Зцілення потребує часу. Але кожен маленький крок, який ти робиш, веде тебе вперед, навіть коли так не здається.',
        'Не будь надто суворим до себе. Ти вчишся. Ти зростаєш. Ти стаєш сильнішим через біль. Одного дня ти зрозумієш, чому тобі довелося це пройти.',
        'А доти — тримайся. Вір у себе. Кращі дні вже в дорозі. Дякую.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, feeling tired does not mean…', uk: 'За текстом, почуватися втомленим не означає…' },
        options: [
          { en: 'you are failing', uk: 'що ти зазнаєш невдачі' },
          { en: 'you are strong', uk: 'що ти сильний' },
          { en: 'you are learning', uk: 'що ти вчишся' },
        ],
        correct: 0,
        explain: { en: '“Feeling tired does not mean you are failing.”', uk: '«Feeling tired does not mean you are failing.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say about every small step?', uk: 'Що текст каже про кожен маленький крок?' },
        options: [
          { en: 'It is moving you forward, even when it doesn’t feel like it', uk: 'Він веде тебе вперед, навіть коли так не здається' },
          { en: 'It is a waste of time', uk: 'Це марнування часу' },
          { en: 'It moves you backward', uk: 'Він веде тебе назад' },
        ],
        correct: 0,
        explain: { en: '“…every small step you take is moving you forward, even when it doesn’t feel like it.”', uk: '«…moving you forward, even when it doesn’t feel like it.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one gentle thing you could do for yourself on a tiring day?', uk: 'Що одне лагідне ви могли б зробити для себе у втомливий день?' },
        sample: { en: 'Answers will vary — e.g., rest, a short walk, talking to someone, lowering expectations for the day.', uk: 'Відповіді різнитимуться — напр., відпочинок, коротка прогулянка, розмова з кимось, знижені очікування на день.' },
      },
    ],
  },
  {
    id: 'life-is-not-always-kind',
    title: { en: 'Life Is Not Always Kind', uk: 'Життя не завжди лагідне' },
    category: 'life',
    level: 'b2',
    minutes: 2,
    topics: ['wellbeing', 'resilience', 'hope'],
    body: {
      en: [
        'Life is not always kind. There are days when you wake up tired, even after sleeping. Days when your heart feels heavy, and you wonder how long you can keep going. If you feel like this today, please know—you are not weak. You are human.',
        'You have been through things that no one sees. Quiet battles, silent tears, and long nights of worry. Yet, every morning you still try again. That alone shows your strength.',
        'You do not need to have all the answers. You do not need to move fast. Even small steps matter. Even slow progress is still progress. What matters is that you do not give up on yourself.',
        'Remember, your life has value. Your pain has a purpose, even if you don’t understand it yet. One day, this hard time will become a story of how you survived.',
        'Be gentle with your heart. Believe that better days are coming. And until they arrive, hold on to hope. Thank you.',
      ].join('\n\n'),
      uk: [
        'Життя не завжди лагідне. Бувають дні, коли ти прокидаєшся втомленим навіть після сну. Дні, коли твоє серце важке, і ти думаєш, як довго ще зможеш триматися. Якщо ти почуваєшся так сьогодні, знай — ти не слабкий. Ти людина.',
        'Ти пройшов через те, чого ніхто не бачить. Тихі битви, безмовні сльози й довгі ночі тривоги. Та все ж щоранку ти знову намагаєшся. Уже саме це показує твою силу.',
        'Тобі не треба мати всі відповіді. Тобі не треба рухатися швидко. Навіть маленькі кроки мають значення. Навіть повільний поступ — це все одно поступ. Головне — не здаватися на себе.',
        'Памʼятай: твоє життя має цінність. Твій біль має мету, навіть якщо ти ще цього не розумієш. Одного дня цей важкий час стане історією про те, як ти вистояв.',
        'Будь лагідним до свого серця. Вір, що кращі дні наближаються. А доки вони не настануть — тримайся за надію. Дякую.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'If you feel heavy today, what does the text want you to know?', uk: 'Якщо тобі сьогодні важко, що текст хоче, щоб ти знав?' },
        options: [
          { en: 'You are not weak — you are human', uk: 'Ти не слабкий — ти людина' },
          { en: 'You have failed', uk: 'Ти зазнав невдачі' },
          { en: 'You should give up', uk: 'Тобі варто здатися' },
        ],
        correct: 0,
        explain: { en: '“…you are not weak. You are human.”', uk: '«…you are not weak. You are human.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What, according to the text, shows your strength?', uk: 'Що, за текстом, показує твою силу?' },
        options: [
          { en: 'That every morning you still try again', uk: 'Що щоранку ти знову намагаєшся' },
          { en: 'That you never feel tired', uk: 'Що ти ніколи не втомлюєшся' },
          { en: 'That you always have the answers', uk: 'Що ти завжди маєш відповіді' },
        ],
        correct: 0,
        explain: { en: '“Yet, every morning you still try again. That alone shows your strength.”', uk: '«…every morning you still try again. That alone shows your strength.»' },
      },
      {
        kind: 'open',
        q: { en: 'The text says “your pain has a purpose.” Do you agree? Share your view.', uk: 'Текст каже «твій біль має мету». Чи згодні ви? Поділіться думкою.' },
        sample: { en: 'Answers will vary. A thoughtful answer takes a position and gives a reason, without dismissing real difficulty. This is a sensitive topic; if you are struggling, reaching out to someone you trust can help.', uk: 'Відповіді різнитимуться. Вдумлива відповідь обирає позицію й дає причину, не знецінюючи реальні труднощі. Це чутлива тема; якщо вам важко, звернення до людини, якій ви довіряєте, може допомогти.' },
      },
    ],
  },
  {
    id: 'life',
    title: { en: 'Life', uk: 'Життя' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['life', 'meaning', 'gratitude'],
    body: {
      en: 'Life is a precious journey filled with lessons and experiences. It is not always easy, but every challenge helps us grow stronger. Life teaches us patience, kindness, and responsibility. Sometimes we succeed, and sometimes we fail, but both are important parts of learning. Life becomes meaningful when we use our time wisely and help others. Respect, honesty, and hard work make life better. We should believe in ourselves and never stop trying. Every day is a new chance to improve. Life is short, so we should live it with purpose, gratitude, and hope.',
      uk: 'Життя — дорогоцінна подорож, сповнена уроків і досвіду. Воно не завжди легке, але кожен виклик допомагає нам стати сильнішими. Життя вчить нас терпіння, доброти й відповідальності. Іноді ми досягаємо успіху, а іноді зазнаємо невдач, але і те, і те — важливі частини навчання. Життя стає осмисленим, коли ми мудро використовуємо свій час і допомагаємо іншим. Повага, чесність і наполеглива праця роблять життя кращим. Ми маємо вірити в себе й ніколи не переставати намагатися. Кожен день — це нова нагода стати кращими. Життя коротке, тож варто жити його з метою, вдячністю й надією.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, when does life become meaningful?', uk: 'За текстом, коли життя стає осмисленим?' },
        options: [
          { en: 'When we use our time wisely and help others', uk: 'Коли ми мудро використовуємо час і допомагаємо іншим' },
          { en: 'When we avoid all challenges', uk: 'Коли ми уникаємо всіх викликів' },
          { en: 'When we think only of ourselves', uk: 'Коли ми думаємо лише про себе' },
        ],
        correct: 0,
        explain: { en: '“Life becomes meaningful when we use our time wisely and help others.”', uk: '«…when we use our time wisely and help others.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the text say we should live life?', uk: 'Як, за текстом, ми маємо жити життя?' },
        options: [
          { en: 'With purpose, gratitude, and hope', uk: 'З метою, вдячністю й надією' },
          { en: 'With fear and regret', uk: 'Зі страхом і жалем' },
          { en: 'Without any goals', uk: 'Без жодних цілей' },
        ],
        correct: 0,
        explain: { en: '“…we should live it with purpose, gratitude, and hope.”', uk: '«…with purpose, gratitude, and hope.»' },
      },
      {
        kind: 'open',
        q: { en: 'The text says every day is a new chance to improve. What is one thing you would like to improve?', uk: 'Текст каже, що кожен день — нова нагода стати кращими. Що одне ви хотіли б покращити?' },
        sample: { en: 'Answers will vary. A good answer names one concrete thing and a small first step toward it.', uk: 'Відповіді різнитимуться. Гарна відповідь називає одну конкретну річ і маленький перший крок до неї.' },
      },
    ],
  },
];
