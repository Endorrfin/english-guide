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
  // CHANGED (Wave S2, §15 screenshot OCR): +14 texts from the "stage II text_screenshots" backlog.
  {
    id: 'how-to-improve-body-language',
    title: { en: 'How to Improve Body Language', uk: 'Як покращити мову тіла' },
    category: 'life',
    level: 'b1',
    minutes: 2,
    topics: ['body-language', 'communication', 'confidence'],
    body: {
      en: [
        'Body language is the way we express our feelings and thoughts without speaking. It is important because people first notice your body language, then your words. Good body language helps you look confident, trustworthy and professional. It also improves communication and leaves a positive impression on others.',
        'Stand straight – Always stand and sit straight.\nMaintain eye contact – Look into people\'s eyes while speaking.\nSmile naturally – Smile makes you friendly and confident.\nKeep good posture – Good posture shows discipline and confidence.\nUse open gestures – Use simple hand gestures and keep your body open.\nAvoid crossing arms – It can make you look closed or uninterested.\nWalk with confidence – Walk with a clear mind and positive attitude.\nControl your expressions – Keep your facial expressions calm and positive.\nListen actively – Listen carefully and respond with interest.\nPractice every day – Practice daily and you will see the positive change.',
        'Good body language improves your communication, increases your confidence, builds strong relationships and helps you succeed in your personal and professional life.',
      ].join('\n\n'),
      uk: [
        'Мова тіла — це спосіб, яким ми виражаємо свої почуття й думки без слів. Вона важлива, бо люди спершу помічають мову вашого тіла, а вже потім — ваші слова. Гарна мова тіла допомагає виглядати впевнено, надійно й професійно. Вона також покращує спілкування і залишає позитивне враження на оточення.',
        'Тримайте спину прямо – Завжди стійте й сидіть рівно.\nПідтримуйте зоровий контакт – Дивіться людям в очі під час розмови.\nПосміхайтеся природно – Усмішка робить вас привітними й упевненими.\nЗберігайте правильну поставу – Гарна постава свідчить про дисципліну і впевненість.\nВикористовуйте відкриті жести – Використовуйте прості жести руками і тримайте тіло відкритим.\nНе схрещуйте руки – Це може зробити вас закритими або незацікавленими на вигляд.\nХодіть впевнено – Ходіть із ясною головою і позитивним настроєм.\nКонтролюйте вираз обличчя – Тримайте міміку спокійною і доброзичливою.\nСлухайте активно – Слухайте уважно і реагуйте з цікавістю.\nПрактикуйтеся щодня – Практикуйтеся щодня, і ви побачите позитивні зміни.',
        'Гарна мова тіла покращує спілкування, підвищує вашу впевненість, зміцнює стосунки і допомагає досягти успіху в особистому та професійному житті.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why is body language important, according to the text?', uk: 'Чому мова тіла важлива, згідно з текстом?' },
        options: [
          { en: 'Because people notice your body language before they notice your words', uk: 'Бо люди помічають мову тіла раніше, ніж ваші слова' },
          { en: 'Because it replaces the need to speak', uk: 'Бо вона замінює потребу говорити' },
          { en: 'Because it is taught only in professional training', uk: 'Бо її вчать лише на професійних тренінгах' },
        ],
        correct: 0,
        explain: { en: 'The text says people first notice your body language, then your words.', uk: 'У тексті сказано, що люди спершу помічають мову тіла, а вже потім — слова.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say about crossing your arms?', uk: 'Що в тексті сказано про схрещені руки?' },
        options: [
          { en: 'It makes you look confident and open', uk: 'Це робить вас впевненими і відкритими' },
          { en: 'It can make you look closed or uninterested', uk: 'Це може зробити вас закритими або незацікавленими на вигляд' },
          { en: 'It is the best way to show discipline', uk: 'Це найкращий спосіб показати дисципліну' },
        ],
        correct: 1,
        explain: { en: 'The list advises avoiding crossed arms because it can make you look closed or uninterested.', uk: 'У списку радять уникати схрещених рук, бо це може зробити вас закритими або незацікавленими.' },
      },
      {
        kind: 'open',
        q: { en: 'Which one tip for improving body language from the list do you find hardest to practice, and why?', uk: 'Яку пораду зі списку щодо покращення мови тіла вам найважче застосовувати і чому?' },
        sample: { en: 'For me, maintaining eye contact is the hardest tip, because I feel nervous when speaking to new people. I plan to practice it in small conversations first, like with classmates, before trying it in bigger presentations.', uk: 'Для мене найважче — підтримувати зоровий контакт, бо я нервуюся, спілкуючись із новими людьми. Я планую тренувати це спочатку в невеликих розмовах, наприклад із однокласниками, перш ніж пробувати під час великих виступів.' },
      },
    ],
    source: { author: 'Learn With Sonali' },
  },
  {
    id: 'a-good-life',
    title: { en: 'A Good Life', uk: 'Добре життя' },
    category: 'life',
    level: 'b2',
    minutes: 2,
    topics: ['life', 'reflection', 'gratitude'],
    body: {
      en: [
        'Maybe a good life was never about getting everything right. Maybe it\'s smaller than that — quieter than that. A good life is waking up and choosing, again, to try. It\'s the ordinary mornings nobody writes songs about, the ones that just get lived.',
        'It\'s not the highlight reel people show online. It\'s the dishes washed at midnight, the phone call you almost didn\'t make, the apology you finally said out loud. A good life is built in unremarkable moments, stitched together so slowly you barely notice the shape they\'re making. You don\'t need applause for any of it. You just need to keep showing up.',
        'So maybe stop measuring your life against some finish line that doesn\'t exist. There is no perfect version of this waiting on the other side of enough effort. There\'s just this — today, the people you love, the small kindnesses you choose again and again. That, quietly, is what a good life actually looks like.',
      ].join('\n\n'),
      uk: [
        'Можливо, добре життя ніколи не було про те, щоб робити все правильно. Можливо, воно менше, ніж здається, — тихіше, ніж здається. Добре життя — це прокидатися й знову обирати спробувати. Це звичайні ранки, про які ніхто не пише пісень, ті, що просто проживаються.',
        'Це не яскраві моменти, які люди показують онлайн. Це посуд, вимитий опівночі, дзвінок, який ти ледь не забув зробити, вибачення, яке ти нарешті наважився вимовити вголос. Добре життя будується з непомітних миттєвостей, які так повільно складаються докупи, що ти майже не помічаєш, якої форми вони набувають. Тобі не потрібні оплески за це. Тобі просто потрібно й далі зʼявлятися.',
        'Тож, можливо, варто перестати вимірювати своє життя якоюсь фінішною лінією, якої насправді не існує. Немає ідеальної версії цього життя, що чекає по той бік достатніх зусиль. Є лише це — сьогодні, люди, яких ти любиш, маленькі прояви доброти, які ти обираєш знову і знову. Саме це, тихо й непомітно, і є тим, як насправді виглядає добре життя.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what is a good life built from?', uk: 'Згідно з текстом, з чого будується добре життя?' },
        options: [
          { en: 'Perfect achievements and applause', uk: 'З ідеальних досягнень і оплесків' },
          { en: 'A dramatic highlight reel', uk: 'Із яскравого «хайлайту» для соцмереж' },
          { en: 'Unremarkable, everyday moments', uk: 'З непомітних, буденних моментів' },
        ],
        correct: 2,
        explain: { en: 'The text says a good life is built in unremarkable moments, stitched together slowly.', uk: 'У тексті сказано, що добре життя будується з непомітних моментів, які повільно складаються докупи.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text suggest about measuring your life against a \'finish line\'?', uk: 'Що текст натякає про вимірювання свого життя «фінішною лінією»?' },
        options: [
          { en: 'It\'s the best way to know you\'ve succeeded', uk: 'Це найкращий спосіб зрозуміти, що ти досяг успіху' },
          { en: 'That finish line doesn\'t actually exist', uk: 'Насправді такої фінішної лінії не існує' },
          { en: 'Everyone reaches it eventually', uk: 'Рано чи пізно її досягають усі' },
        ],
        correct: 1,
        explain: { en: 'The text says there is no perfect version waiting on the other side, and encourages readers to stop measuring life against a finish line that doesn\'t exist.', uk: 'Текст закликає перестати вимірювати життя фінішною лінією, якої насправді не існує.' },
      },
      {
        kind: 'open',
        q: { en: 'What are some \'unremarkable moments\' in your own daily life that you think quietly add up to a good life?', uk: 'Які «непомітні моменти» у вашому повсякденному житті, на вашу думку, тихо складаються в добре життя?' },
        sample: { en: 'For me, it\'s small things like making my mom a cup of tea, texting a friend to check on them, or finishing a task I\'ve been avoiding. None of them are impressive on their own, but together they make my days feel meaningful.', uk: 'Для мене це дрібниці, як-от заварити мамі чай, написати другу, щоб дізнатися, як він, або нарешті зробити справу, яку я довго відкладав. Жодна з них не вражає сама по собі, але разом вони роблять мої дні по-справжньому значущими.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'time-is-the-real-treasure',
    title: { en: 'Time Is the Real Treasure', uk: 'Час — це справжній скарб' },
    category: 'life',
    level: 'b1',
    minutes: 2,
    topics: ['time', 'gratitude', 'relationships'],
    body: {
      en: [
        'Be grateful for every moment spent with the people you love because time is the one thing you can never get back. The conversations, the laughter, the shared meals, and even the ordinary days often become the memories you cherish the most.',
        'We often assume there will always be more time, another visit, another phone call, another chance to say what\'s in our hearts. But life doesn\'t come with guarantees, and tomorrow is promised to no one.',
        'That\'s why it\'s so important to appreciate the people who matter while they\'re still here. Put down the distractions, be present, and make memories that will outlast the moment.',
        'One day, you\'ll realize that the greatest wealth was never money or possessions—it was the time you shared with the people you loved. And those moments are truly priceless.',
      ].join('\n\n'),
      uk: [
        'Будь вдячним за кожну мить, проведену з людьми, яких любиш, адже час — це єдине, що вже не повернути. Розмови, сміх, спільні обіди і навіть звичайні буденні дні часто стають спогадами, які ми бережемо найдужче.',
        'Ми часто думаємо, що часу завжди буде достатньо: ще одна зустріч, ще один дзвінок, ще один шанс сказати те, що на серці. Але життя не дає гарантій, і завтрашній день не обіцяний нікому.',
        'Саме тому так важливо цінувати людей, які мають значення, поки вони поруч. Відклади все, що відволікає, будь тут і зараз, і створюй спогади, які переживуть цю мить.',
        'Одного дня ти зрозумієш, що найбільшим багатством ніколи не були гроші чи речі — ним був час, проведений із тими, кого ти любив. І ці миті насправді безцінні.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what should you do for the people who matter while they are still here?', uk: 'Що, згідно з текстом, варто робити для людей, які мають значення, поки вони поруч?' },
        options: [
          { en: 'Wait for a more convenient time to spend with them', uk: 'Чекати зручнішого часу, щоб побути з ними' },
          { en: 'Put down distractions, be present, and make memories with them', uk: 'Відкласти все, що відволікає, бути поруч і створювати спогади з ними' },
          { en: 'Focus on earning money for their future first', uk: 'Спершу зосередитися на заробітку грошей для їхнього майбутнього' },
        ],
        correct: 1,
        explain: { en: 'The text advises to \'put down the distractions, be present, and make memories that will outlast the moment.\'', uk: 'У тексті радять «відкласти все, що відволікає, бути тут і зараз, і створювати спогади, які переживуть цю мить».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say was the greatest wealth, in the end?', uk: 'Що, за текстом, зрештою виявилося найбільшим багатством?' },
        options: [
          { en: 'Money and possessions', uk: 'Гроші та майно' },
          { en: 'Career achievements', uk: 'Карʼєрні досягнення' },
          { en: 'The time shared with the people you loved', uk: 'Час, проведений із тими, кого ти любив' },
        ],
        correct: 2,
        explain: { en: 'The text concludes that \'the greatest wealth was never money or possessions—it was the time you shared with the people you loved.\'', uk: 'У тексті зроблено висновок, що «найбільшим багатством ніколи не були гроші чи речі — ним був час, проведений із тими, кого ти любив».' },
      },
      {
        kind: 'open',
        q: { en: 'What is one \'ordinary day\' memory with someone you love that you now cherish?', uk: 'Яка одна «звичайна» мить із кимось, кого ти любиш, стала для тебе дорогим спогадом?' },
        sample: { en: 'I remember cooking dinner with my grandmother on an unremarkable Tuesday evening, just talking about her childhood. At the time it felt completely ordinary, but now it\'s one of my favorite memories of her.', uk: 'Пригадую, як звичайного вівторка ввечері готував вечерю з бабусею, і ми просто розмовляли про її дитинство. Тоді це здавалося зовсім буденним, а тепер це один з моїх найдорожчих спогадів про неї.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'dont-spend-all-your-time-crying-over-the-past',
    title: { en: 'Don\'t Spend All Your Time Crying Over the Past', uk: 'Не витрачай весь час, оплакуючи минуле' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['mindfulness', 'present-moment', 'life'],
    body: {
      en: [
        'Don\'t spend all your time crying over the past. What happened has already happened, and no amount of regret can change it. Learn from it, carry the lesson, and allow yourself to keep moving forward. Don\'t stress too much about the future either.',
        'So much of what we worry about never happens the way we imagine it will. The future hasn\'t arrived yet, and borrowing tomorrow\'s problems only steals today\'s peace. Life is happening right now, in this moment.',
        'Appreciate the people around you, enjoy the small blessings, and make the most of the day you\'ve been given. The past is a memory, the future is uncertain, but the present is where life is actually lived. Make it beautiful.',
      ].join('\n\n'),
      uk: [
        'Не витрачай весь свій час, оплакуючи минуле. Те, що сталося, вже сталося, і жодні жалі цього не змінять. Візьми з цього урок, збережи цей досвід і дозволь собі рухатися далі. Не хвилюйся занадто і про майбутнє.',
        'Багато з того, чого ми боїмося, ніколи не трапляється так, як ми собі уявляли. Майбутнє ще не настало, а позичання завтрашніх проблем сьогодні лише краде спокій сьогодення. Життя відбувається просто зараз, у цю мить.',
        'Цінуй людей поруч, тішся дрібними радощами і використовуй по максимуму день, який тобі подарований. Минуле — це лише спогад, майбутнє — невідоме, а теперішнє — це те, де життя насправді проживається. Зроби його прекрасним.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text say about worrying over tomorrow\'s problems today?', uk: 'Що, за текстом, відбувається, коли ми хвилюємося сьогодні про завтрашні проблеми?' },
        options: [
          { en: 'It helps you prepare better for the future', uk: 'Це допомагає краще підготуватися до майбутнього' },
          { en: 'It only steals today\'s peace', uk: 'Це лише краде спокій сьогодення' },
          { en: 'It has no effect on the present', uk: 'Це ніяк не впливає на теперішнє' },
        ],
        correct: 1,
        explain: { en: 'The text says, \'borrowing tomorrow\'s problems only steals today\'s peace.\'', uk: 'У тексті сказано: «позичання завтрашніх проблем сьогодні лише краде спокій сьогодення».' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, where does life actually happen?', uk: 'Де, згідно з текстом, насправді відбувається життя?' },
        options: [
          { en: 'In the present moment', uk: 'У теперішній миті' },
          { en: 'In memories of the past', uk: 'У спогадах про минуле' },
          { en: 'In plans for the future', uk: 'У планах на майбутнє' },
        ],
        correct: 0,
        explain: { en: 'The text states, \'the present is where life is actually lived.\'', uk: 'У тексті сказано: «теперішнє — це те, де життя насправді проживається».' },
      },
      {
        kind: 'open',
        q: { en: 'What is one step you can take to worry less about the past or the future and focus more on today?', uk: 'Який один крок ти можеш зробити, щоб менше тривожитися про минуле чи майбутнє і більше зосереджуватися на сьогоденні?' },
        sample: { en: 'I try to write down one thing I\'m grateful for each morning, which helps me focus on the present instead of replaying old mistakes or worrying about what\'s next.', uk: 'Я намагаюся щоранку записувати одну річ, за яку вдячний, — це допомагає зосередитися на теперішньому, а не прокручувати в голові старі помилки чи хвилюватися про майбутнє.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'life-is-happening-now',
    title: { en: 'Life Is Happening Now', uk: 'Життя Відбувається Просто Зараз' },
    category: 'life',
    level: 'b1',
    minutes: 2,
    topics: ['life', 'mindfulness', 'gratitude'],
    body: {
      en: 'Life doesn\'t have to be as complicated as we often make it. We spend so much time worrying about things we can\'t control that we forget to appreciate the moments that are happening right in front of us. The truth is, we won\'t be here forever. Each day comes only once, and when it\'s gone, it becomes a memory. That\'s why it\'s important to slow down sometimes, take in the simple things, and notice the beauty that exists in ordinary moments. Watch the sunset. Enjoy a good conversation. Laugh when you have the chance. Tell people you care about them. Don\'t wait for everything to be perfect before you allow yourself to live. Life is happening now, and that alone is a gift worth appreciating.',
      uk: 'Життя не мусить бути таким складним, яким ми часто його робимо. Ми витрачаємо стільки часу, хвилюючись через речі, які не можемо контролювати, що забуваємо цінувати миті, які відбуваються просто перед нами. Правда в тому, що ми не будемо тут вічно. Кожен день настає лише раз, і коли він минає, стає спогадом. Саме тому важливо іноді сповільнюватися, вбирати прості речі й помічати красу, яка є в буденних миттєвостях. Дивись на захід сонця. Тішся гарною розмовою. Смійся, коли є нагода. Кажи людям, що вони тобі дорогі. Не чекай, поки все стане ідеальним, перш ніж дозволити собі жити. Життя відбувається просто зараз, і вже саме це — дар, який варто цінувати.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what do we often forget to do while worrying about things we can\'t control?', uk: 'Що, за словами тексту, ми часто забуваємо робити, хвилюючись через речі, які не можемо контролювати?' },
        options: [
          { en: 'Appreciate the moments happening right in front of us', uk: 'Цінувати миті, які відбуваються просто перед нами' },
          { en: 'Plan for the future', uk: 'Планувати майбутнє' },
          { en: 'Make new friends', uk: 'Заводити нових друзів' },
        ],
        correct: 0,
        explain: { en: 'The text says we forget to appreciate the moments that are happening right in front of us.', uk: 'У тексті сказано, що ми забуваємо цінувати миті, які відбуваються просто перед нами.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Which of these does the text encourage you to do?', uk: 'Що з переліченого текст радить робити?' },
        options: [
          { en: 'Wait for everything to be perfect before living', uk: 'Чекати, поки все стане ідеальним, перш ніж жити' },
          { en: 'Enjoy a good conversation', uk: 'Тішитися гарною розмовою' },
          { en: 'Avoid talking about your feelings', uk: 'Уникати розмов про свої почуття' },
        ],
        correct: 1,
        explain: { en: 'The text lists \'Enjoy a good conversation\' among the simple things worth noticing, while explicitly saying not to wait for everything to be perfect.', uk: 'Текст перелічує «тішся гарною розмовою» серед простих речей, які варто цінувати, і водночас прямо каже не чекати ідеальності.' },
      },
      {
        kind: 'open',
        q: { en: 'What is one "ordinary moment" in your daily life that you could try to appreciate more, and how would you do that?', uk: 'Яка одна «буденна мить» у твоєму повсякденному житті, яку ти міг би цінувати більше, і як би ти це робив?' },
        sample: { en: 'For me, it would be the short walk to work in the morning. Instead of rushing while checking my phone, I could slow down, notice the fresh air, and simply enjoy the quiet minutes before the day gets busy.', uk: 'Для мене це була б коротка ранкова прогулянка на роботу. Замість того щоб поспішати, дивлячись у телефон, я міг би сповільнитися, відчути свіже повітря і просто насолодитися тихими хвилинами перед тим, як день стане напруженим.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'one-day-at-a-time',
    title: { en: 'One Day at a Time', uk: 'Один день за раз' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['patience', 'healing', 'self-care'],
    body: {
      en: [
        'You don’t have to figure everything out all at once. Just focus on today, on this moment, on the next small step in front of you. Some days will feel easier than others, and that’s okay.',
        'Healing, growing, and becoming stronger doesn’t happen overnight. It happens slowly, quietly, in the little choices you make each day to keep going.',
        'So take a breath, be patient with yourself, and remember—you’re doing the best you can, and that’s enough for today.',
      ].join('\n\n'),
      uk: [
        'Тобі не потрібно зʼясовувати все і одразу. Просто зосередься на сьогоднішньому дні, на цій миті, на наступному маленькому кроці перед тобою. Одні дні будуть легшими за інші, і це нормально.',
        'Зцілення, зростання й те, як ти стаєш сильнішим, не відбувається за одну ніч. Це відбувається повільно, тихо, у маленьких рішеннях, які ти приймаєш щодня, щоб рухатися далі.',
        'Тож зроби вдих, стався до себе з терпінням і памʼятай — ти робиш усе, що можеш, і цього достатньо на сьогодні.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, how do healing and growing happen?', uk: 'Як, за словами тексту, відбуваються зцілення та зростання?' },
        options: [
          { en: 'All at once, overnight', uk: 'Одразу, за одну ніч' },
          { en: 'Slowly and quietly, through small daily choices', uk: 'Повільно й тихо, через маленькі щоденні рішення' },
          { en: 'Only by comparing yourself to others', uk: 'Лише тоді, коли порівнюєш себе з іншими' },
        ],
        correct: 1,
        explain: { en: 'The text says healing and growing \'doesn\'t happen overnight\' but happens slowly, in the little choices you make each day.', uk: 'У тексті сказано, що зцілення й зростання «не відбувається за одну ніч», а відбувається повільно, у маленьких рішеннях, які ти приймаєш щодня.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text encourage you to focus on?', uk: 'На чому текст радить зосередитися?' },
        options: [
          { en: 'Figuring everything out all at once', uk: 'На тому, щоб одразу зʼясувати все' },
          { en: 'Comparing your progress to other people\'s', uk: 'На порівнянні свого прогресу з іншими' },
          { en: 'Today, this moment, and the next small step', uk: 'На сьогоднішньому дні, цій миті й наступному маленькому кроці' },
        ],
        correct: 2,
        explain: { en: 'The author writes, \'Just focus on today, on this moment, on the next small step in front of you.\'', uk: 'Автор пише: «Просто зосередься на сьогоднішньому дні, на цій миті, на наступному маленькому кроці перед тобою».' },
      },
      {
        kind: 'open',
        q: { en: 'What is one small step you could take today to be more patient with yourself?', uk: 'Який маленький крок ти міг би зробити сьогодні, щоб бути терплячішим до себе?' },
        sample: { en: 'I could stop criticizing myself for not finishing everything on my to-do list and instead recognize the small progress I made today, like starting a task I\'d been avoiding.', uk: 'Я міг би перестати критикувати себе за те, що не встиг зробити все заплановане, і натомість визнати навіть невеликий прогрес, наприклад те, що почав справу, яку відкладав.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'youll-be-okay',
    title: { en: 'You\'ll Be Okay', uk: 'Усе буде добре' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['resilience', 'self-reassurance', 'growth'],
    body: {
      en: [
        'Not because everything will suddenly become easy, but because you have a way of finding your footing even after things shake you. Some days will feel heavy, and some answers won’t come right away, but you’ll keep moving through them one step at a time. There’s strength in you that doesn’t always shout—it shows up quietly, when you decide to try again, when you keep going even when you’re tired. That matters more than you probably give yourself credit for.',
        'So even when things feel uncertain, don’t forget this: you’re still here, still growing, still becoming. And that means you’re going to be okay.',
      ].join('\n\n'),
      uk: [
        'Не тому, що все раптом стане легко, а тому, що ти вмієш знаходити опору навіть тоді, коли щось похитнуло тебе. Деякі дні будуть важкими, і деякі відповіді не прийдуть одразу, але ти продовжуватимеш рухатися крок за кроком. У тобі є сила, яка не завжди голосно заявляє про себе — вона проявляється тихо, коли ти вирішуєш спробувати ще раз, коли продовжуєш іти вперед, навіть стомившись. Це важить більше, ніж ти, напевно, собі приписуєш.',
        'Тож навіть коли все здається невизначеним, не забувай: ти й досі тут, і досі ростеш, і досі стаєш кращим. А це означає, що з тобою все буде добре.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why does the text say \'you\'ll be okay\'?', uk: 'Чому текст стверджує, що «з тобою все буде добре»?' },
        options: [
          { en: 'Because everything will suddenly become easy', uk: 'Бо все раптом стане легко' },
          { en: 'Because you have a way of finding your footing even after things shake you', uk: 'Бо ти вмієш знаходити опору навіть тоді, коли щось похитнуло тебе' },
          { en: 'Because bad days will never happen again', uk: 'Бо погані дні більше ніколи не трапляться' },
        ],
        correct: 1,
        explain: { en: 'The text explicitly says, \'Not because everything will suddenly become easy, but because you have a way of finding your footing even after things shake you.\'', uk: 'У тексті прямо сказано: «Не тому, що все раптом стане легко, а тому, що ти вмієш знаходити опору навіть тоді, коли щось похитнуло тебе».' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the text describe the strength inside you?', uk: 'Як текст описує силу, що є всередині тебе?' },
        options: [
          { en: 'It always shouts for attention', uk: 'Вона завжди голосно заявляє про себе' },
          { en: 'It only appears when things are easy', uk: 'Вона зʼявляється лише тоді, коли все легко' },
          { en: 'It shows up quietly, when you keep trying even while tired', uk: 'Вона проявляється тихо, коли ти продовжуєш намагатися навіть стомившись' },
        ],
        correct: 2,
        explain: { en: 'The text says, \'There\'s strength in you that doesn\'t always shout—it shows up quietly, when you decide to try again, when you keep going even when you\'re tired.\'', uk: 'У тексті сказано: «У тобі є сила, яка не завжди голосно заявляє про себе — вона проявляється тихо, коли ти вирішуєш спробувати ще раз, коли продовжуєш іти вперед, навіть стомившись».' },
      },
      {
        kind: 'open',
        q: { en: 'What is a quiet way you\'ve shown strength recently, even if no one noticed?', uk: 'Яким тихим способом ти нещодавно проявив силу, навіть якщо цього ніхто не помітив?' },
        sample: { en: 'Last month I kept studying for my exams even though I felt exhausted and discouraged; no one saw it, but getting up each morning and trying again was its own kind of strength.', uk: 'Минулого місяця я продовжував готуватися до іспитів, хоч почувався виснаженим і зневіреним; ніхто цього не бачив, але вставати щоранку й пробувати знову — це теж своєрідна сила.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'about-myself',
    title: { en: 'About Myself', uk: 'Про себе' },
    category: 'life',
    level: 'a1',
    minutes: 1,
    topics: ['dreams', 'childhood', 'future'],
    body: {
      en: [
        'My name is Bella, and I just turned 9. I have big dreams and bright hopes for my future.',
        'I like to imagine what I will become one day. Sometimes my dreams feel very big and exciting.',
        'I believe I can achieve them with hard work. My family supports and encourages me. I will keep dreaming and growing every day.',
      ].join('\n\n'),
      uk: [
        'Мене звати Белла, і мені щойно виповнилося 9 років. У мене великі мрії та світлі надії на майбутнє.',
        'Мені подобається уявляти, ким я стану одного дня. Іноді мої мрії здаються дуже великими й захопливими.',
        'Я вірю, що зможу досягти їх завдяки наполегливій праці. Моя родина підтримує мене й надихає. Я продовжуватиму мріяти й розвиватися щодня.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How old is Bella?', uk: 'Скільки років Беллі?' },
        options: [
          { en: '8', uk: '8' },
          { en: '9', uk: '9' },
          { en: '10', uk: '10' },
        ],
        correct: 1,
        explain: { en: 'Bella says, "I just turned 9."', uk: 'Белла каже: «Мені щойно виповнилося 9 років».' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to Bella, what helps her believe she can achieve her dreams?', uk: 'Що, за словами Белли, допомагає їй вірити, що вона зможе досягти своїх мрій?' },
        options: [
          { en: 'Hard work and her family\'s support', uk: 'Наполеглива праця та підтримка родини' },
          { en: 'Luck and chance', uk: 'Удача і випадок' },
          { en: 'Forgetting about her dreams', uk: 'Забуття про свої мрії' },
        ],
        correct: 0,
        explain: { en: 'Bella says she believes she can achieve her dreams with hard work, and that her family supports and encourages her.', uk: 'Белла каже, що вірить у досягнення мрій завдяки наполегливій праці, а її родина підтримує й надихає її.' },
      },
      {
        kind: 'open',
        q: { en: 'What is one big dream you have for your future, and how do you plan to achieve it?', uk: 'Яка ваша велика мрія на майбутнє і як ви плануєте її досягти?' },
        sample: { en: 'My dream is to become a doctor, and I plan to achieve it by studying hard, especially science, and practicing patience and kindness with people.', uk: 'Моя мрія — стати лікарем, і я планую досягти цього, наполегливо навчаючись, особливо природничих наук, а також розвиваючи терпіння й доброту до людей.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'happiness',
    title: { en: 'Happiness', uk: 'Щастя' },
    category: 'life',
    level: 'a2',
    minutes: 1,
    topics: ['happiness', 'gratitude', 'kindness'],
    body: {
      en: 'Happiness is a feeling of joy and peace inside our hearts. It comes when we do things we enjoy or spend time with people we love. Sometimes, even small things like a smile, a kind word, or a sunny day can make us happy. Happiness does not always come from money or big things. It often comes from being thankful for what we have. When we help others or share with friends, we also feel happy. True happiness comes from inside and grows when we choose to stay positive and kind.',
      uk: 'Щастя — це відчуття радості й спокою в наших серцях. Воно приходить, коли ми робимо те, що нам подобається, або проводимо час з людьми, яких любимо. Іноді навіть дрібниці, як усмішка, добре слово чи сонячний день, можуть зробити нас щасливими. Щастя не завжди приходить від грошей чи великих речей. Найчастіше воно приходить від вдячності за те, що ми маємо. Коли ми допомагаємо іншим або ділимося з друзями, ми теж відчуваємо щастя. Справжнє щастя йде зсередини і зростає, коли ми обираємо залишатися позитивними й добрими.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what can make us happy besides big or expensive things?', uk: 'Що, за текстом, може зробити нас щасливими, окрім великих чи дорогих речей?' },
        options: [
          { en: 'A smile, a kind word, or a sunny day', uk: 'Усмішка, добре слово чи сонячний день' },
          { en: 'Buying a new car', uk: 'Купівля нового автомобіля' },
          { en: 'Winning a competition', uk: 'Перемога в змаганні' },
        ],
        correct: 0,
        explain: { en: 'The text says even small things like a smile, a kind word, or a sunny day can make us happy.', uk: 'У тексті сказано, що навіть дрібниці, як усмішка, добре слово чи сонячний день, можуть зробити нас щасливими.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say true happiness comes from?', uk: 'Звідки, за текстом, походить справжнє щастя?' },
        options: [
          { en: 'Money and big achievements', uk: 'Грошей і великих досягнень' },
          { en: 'Inside us, growing through staying positive and kind', uk: 'Зсередини нас, зростаючи через позитив і доброту' },
          { en: 'Luck and good fortune', uk: 'Удачі і везіння' },
        ],
        correct: 1,
        explain: { en: 'The text states that true happiness comes from inside and grows when we choose to stay positive and kind.', uk: 'У тексті сказано, що справжнє щастя йде зсередини і зростає, коли ми обираємо залишатися позитивними й добрими.' },
      },
      {
        kind: 'open',
        q: { en: 'Think of one small thing that made you feel happy recently. Why did it make you happy?', uk: 'Згадайте одну дрібницю, яка нещодавно зробила вас щасливими. Чому вона викликала у вас це відчуття?' },
        sample: { en: 'A friend texted me out of nowhere just to say hello, and it made me happy because it showed I was being thought of, even in a small, ordinary moment.', uk: 'Друг несподівано написав мені просто щоб привітатися, і це зробило мене щасливим, бо показало, що про мене думають навіть у звичайну, буденну мить.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'what-happiness-means-to-me',
    title: { en: 'What Happiness Means to Me', uk: 'Що для мене означає щастя' },
    category: 'life',
    level: 'a2',
    minutes: 1,
    topics: ['happiness', 'gratitude', 'wellbeing'],
    body: {
      en: [
        'Happiness means different things to me. It is not always about big moments. Sometimes happiness is feeling calm and safe. Simple things can make me happy, like a smile or kind words.',
        'I do not feel happy all the time, and that is normal. I have learned to appreciate small joys.',
        'Happiness grows when I am grateful. It feels better when I share it with others. For me, happiness is about peace inside.',
      ].join('\n\n'),
      uk: [
        'Щастя означає для мене різні речі. Воно не завжди повʼязане з великими моментами. Іноді щастя — це відчуття спокою та безпеки. Прості речі можуть зробити мене щасливим, наприклад усмішка чи добре слово.',
        'Я не відчуваю щастя постійно, і це нормально. Я навчився цінувати маленькі радощі.',
        'Щастя зростає, коли я вдячний. Воно відчувається краще, коли я ділюся ним з іншими. Для мене щастя — це спокій усередині.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What can make the narrator happy, according to the text?', uk: 'Що, за словами тексту, може зробити героя щасливим?' },
        options: [
          { en: 'Expensive gifts', uk: 'Дорогі подарунки' },
          { en: 'Only big achievements', uk: 'Лише великі досягнення' },
          { en: 'A smile or kind words', uk: 'Усмішка чи добре слово' },
        ],
        correct: 2,
        explain: { en: 'The text says simple things like a smile or kind words can make the narrator happy.', uk: 'У тексті сказано, що прості речі, як-от усмішка чи добре слово, можуть зробити героя щасливим.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the narrator say happens when they share happiness with others?', uk: 'Що, за словами героя, відбувається, коли він ділиться щастям з іншими?' },
        options: [
          { en: 'It feels better', uk: 'Воно відчувається краще' },
          { en: 'It disappears', uk: 'Воно зникає' },
          { en: 'It becomes a big moment', uk: 'Воно перетворюється на великий момент' },
        ],
        correct: 0,
        explain: { en: 'The text says happiness feels better when shared with others.', uk: 'У тексті сказано, що щастя відчувається краще, коли ділишся ним з іншими.' },
      },
      {
        kind: 'open',
        q: { en: 'What is one \'small joy\' in your own life that makes you feel happy? Explain why it matters to you.', uk: 'Яка «маленька радість» у твоєму житті робить тебе щасливим? Поясни, чому вона важлива для тебе.' },
        sample: { en: 'A small joy in my life is drinking coffee slowly in the morning before everyone wakes up. It matters to me because it gives me a quiet moment of peace before a busy day.', uk: 'Маленька радість у моєму житті — це неквапливо пити каву вранці, поки всі ще сплять. Для мене це важливо, бо дарує тиху мить спокою перед насиченим днем.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'life-is-a-journey',
    title: { en: 'Life Is a Journey', uk: 'Життя — це подорож' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['life', 'growth', 'motivation'],
    body: {
      en: 'Life is a journey full of lessons, challenges, and opportunities. Every day teaches us something new and helps us grow stronger. Sometimes life is easy, and sometimes it is difficult, but every moment has value. Mistakes help us learn, and hard times build our character. When we stay positive, work hard, and keep hope alive, life becomes meaningful. Enjoy the journey, learn from experiences, and never stop moving forward.',
      uk: 'Життя — це подорож, повна уроків, випробувань і можливостей. Кожен день навчає нас чогось нового і допомагає ставати сильнішими. Іноді життя легке, а іноді складне, але кожна мить має цінність. Помилки допомагають нам вчитися, а важкі часи гартують наш характер. Коли ми залишаємося позитивними, наполегливо працюємо і не втрачаємо надії, життя стає осмисленим. Насолоджуйтеся подорожжю, вчіться на досвіді й ніколи не зупиняйтеся на шляху вперед.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what helps us grow stronger?', uk: 'Що, за текстом, допомагає нам ставати сильнішими?' },
        options: [
          { en: 'Avoiding every challenge', uk: 'Уникнення будь-яких випробувань' },
          { en: 'Every day teaching us something new', uk: 'Те, що кожен день навчає нас чогось нового' },
          { en: 'Ignoring our mistakes', uk: 'Ігнорування власних помилок' },
        ],
        correct: 1,
        explain: { en: 'The text says, "Every day teaches us something new and helps us grow stronger."', uk: 'У тексті сказано: «Кожен день навчає нас чогось нового і допомагає ставати сильнішими».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say hard times do?', uk: 'Що, за текстом, роблять важкі часи?' },
        options: [
          { en: 'Build our character', uk: 'Гартують наш характер' },
          { en: 'Make life meaningless', uk: 'Роблять життя беззмістовним' },
          { en: 'Have no value at all', uk: 'Не мають жодної цінності' },
        ],
        correct: 0,
        explain: { en: 'The text says, "hard times build our character."', uk: 'У тексті сказано: «важкі часи гартують наш характер».' },
      },
      {
        kind: 'open',
        q: { en: 'What does the idea that "life is a journey" mean to you personally?', uk: 'Що для вас особисто означає думка, що «життя — це подорож»?' },
        sample: { en: 'To me it means focusing on growth along the way instead of only the destination, and treating both easy and hard moments as part of learning.', uk: 'Для мене це означає зосереджуватися на власному зростанні протягом шляху, а не лише на кінцевій меті, і сприймати як легкі, так і важкі моменти як частину навчання.' },
      },
    ],
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
  },
  {
    id: 'life-is-only-once-enjoy-it',
    title: { en: 'Life Is Only Once, Enjoy It', uk: 'Життя одне, тож насолоджуйся ним' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['life', 'gratitude', 'happiness'],
    body: {
      en: 'Hello How are you everyone. Today I want to talk about life and its value. Life is only once, so we should enjoy it wisely. Enjoying life does not mean wasting time or doing wrong things. It means living with happiness, purpose, and gratitude. We should enjoy small moments, spend time with family, and help others. Life is short, and every day is precious. We should follow our dreams, learn new things, and stay positive. When we live with kindness, honesty, and balance, life becomes beautiful. Therefore, remember that life is only once, so enjoy it and make it meaningful. Thank you.',
      uk: 'Привіт усім! Сьогодні я хочу поговорити про життя та його цінність. Життя дається лише раз, тож ми повинні насолоджуватися ним мудро. Насолоджуватися життям — це не марнувати час чи чинити погано. Це означає жити зі щастям, метою і вдячністю. Ми маємо насолоджуватися маленькими миттєвостями, проводити час із родиною і допомагати іншим. Життя коротке, і кожен день безцінний. Ми маємо йти за своїми мріями, вчитися новому і залишатися позитивними. Коли ми живемо з добротою, чесністю та рівновагою, життя стає прекрасним. Тому памʼятайте: життя дається лише раз, тож насолоджуйтеся ним і робіть його наповненим сенсом. Дякую.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does enjoying life NOT mean?', uk: 'Що, за текстом, НЕ означає насолоджуватися життям?' },
        options: [
          { en: 'Wasting time or doing wrong things', uk: 'Марнувати час чи чинити погано' },
          { en: 'Spending time with family', uk: 'Проводити час із родиною' },
          { en: 'Following your dreams', uk: 'Йти за своїми мріями' },
        ],
        correct: 0,
        explain: { en: 'The text says enjoying life does not mean wasting time or doing wrong things.', uk: 'У тексті сказано, що насолоджуватися життям — це не марнувати час чи чинити погано.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say happens when we live with kindness, honesty, and balance?', uk: 'Що, за текстом, відбувається, коли ми живемо з добротою, чесністю та рівновагою?' },
        options: [
          { en: 'Life becomes more difficult', uk: 'Життя стає складнішим' },
          { en: 'Life becomes beautiful', uk: 'Життя стає прекрасним' },
          { en: 'Life stays exactly the same', uk: 'Життя залишається таким самим' },
        ],
        correct: 1,
        explain: { en: 'The text states that when we live with kindness, honesty, and balance, life becomes beautiful.', uk: 'У тексті стверджується, що коли ми живемо з добротою, чесністю та рівновагою, життя стає прекрасним.' },
      },
      {
        kind: 'open',
        q: { en: 'The text lists small moments, family, and helping others as things to enjoy. What is one thing in your own life you want to appreciate more, starting today?', uk: 'У тексті серед речей, якими варто насолоджуватися, названо маленькі миттєвості, родину і допомогу іншим. Що у своєму житті ви хотіли б цінувати більше, починаючи з сьогодні?' },
        sample: { en: 'I want to appreciate ordinary evenings with my family more, instead of always thinking about work. I realized I often rush through dinner while checking my phone, so starting today I will put my phone away and really be present with the people I love.', uk: 'Я хочу більше цінувати звичайні вечори з родиною, замість того щоб постійно думати про роботу. Я усвідомив, що часто поспіхом вечеряю, перевіряючи телефон, тож із сьогодні я відкладатиму телефон убік і буду по-справжньому поруч із тими, кого люблю.' },
      },
    ],
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
  },
  {
    id: 'about-myself-sophai',
    title: { en: 'About Myself: Sophai', uk: 'Про себе: Софай' },
    category: 'life',
    level: 'b1',
    minutes: 2,
    topics: ['identity', 'culture', 'goals'],
    body: {
      en: 'My name is Sophai. I am from Cambodia, and I am proud of my culture and background. I am a hardworking and responsible person who enjoys learning new things and improving myself. Education is very important to me because it helps me build a better future. I am especially interested in learning English because it allows me to communicate with people from different countries and opens more opportunities for my career. I try my best to practice English every day by reading, writing, and speaking as much as possible. In my free time, I enjoy listening to music, spending time with my family, and helping others. These activities help me relax and stay positive. I believe that being kind, patient, and determined can lead to success. In the future, I hope to continue my studies, develop my skills, and contribute positively to my community. I always try to be the best version of myself.',
      uk: 'Мене звати Софай. Я з Камбоджі і пишаюся своєю культурою та походженням. Я працьовита й відповідальна людина, яка любить вивчати нове й вдосконалювати себе. Освіта дуже важлива для мене, бо вона допомагає будувати краще майбутнє. Мене особливо цікавить вивчення англійської мови, адже вона дає змогу спілкуватися з людьми з різних країн і відкриває більше можливостей для карʼєри. Я щодня намагаюся практикувати англійську, читаючи, пишучи й розмовляючи якомога більше. У вільний час я люблю слухати музику, проводити час із родиною та допомагати іншим. Ці заняття допомагають мені розслабитися і зберігати позитивний настрій. Я вірю, що доброта, терпіння і рішучість ведуть до успіху. У майбутньому я сподіваюся продовжити навчання, розвинути свої навички і зробити позитивний внесок у життя своєї громади. Я завжди намагаюся бути найкращою версією себе.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, where is Sophai from?', uk: 'Звідки, за текстом, родом Софай?' },
        options: [
          { en: 'Cambodia', uk: 'Камбоджа' },
          { en: 'Vietnam', uk: 'Вʼєтнам' },
          { en: 'Thailand', uk: 'Таїланд' },
        ],
        correct: 0,
        explain: { en: 'The text says: \'I am from Cambodia, and I am proud of my culture and background.\'', uk: 'У тексті сказано: «Я з Камбоджі і пишаюся своєю культурою та походженням».' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why does Sophai say she is especially interested in learning English?', uk: 'Чому, за словами Софай, її особливо цікавить вивчення англійської?' },
        options: [
          { en: 'Because her school requires it', uk: 'Бо цього вимагає її школа' },
          { en: 'Because it lets her communicate with people from different countries and opens career opportunities', uk: 'Бо вона дає змогу спілкуватися з людьми з різних країн і відкриває карʼєрні можливості' },
          { en: 'Because her family only speaks English at home', uk: 'Бо вдома її родина розмовляє лише англійською' },
        ],
        correct: 1,
        explain: { en: 'The text says English \'allows me to communicate with people from different countries and opens more opportunities for my career.\'', uk: 'У тексті сказано, що англійська «дає змогу спілкуватися з людьми з різних країн і відкриває більше можливостей для карʼєри».' },
      },
      {
        kind: 'open',
        q: { en: 'Sophai says she wants to \'be the best version of myself.\' What does being \'the best version of yourself\' mean to you personally?', uk: 'Софай каже, що прагне «бути найкращою версією себе». Що особисто для вас означає «бути найкращою версією себе»?' },
        sample: { en: 'To me, being the best version of myself means being honest with people, keeping the promises I make, and slowly getting better at the things I care about instead of comparing myself to others.', uk: 'Для мене бути найкращою версією себе означає бути чесним із людьми, виконувати обіцянки, які я даю, і поступово ставати кращим у тому, що мені справді важливо, а не порівнювати себе з іншими.' },
      },
    ],
    source: { author: 'Sophai' },
  },
  {
    id: 'a-good-life-with-purpose',
    title: { en: 'A Good Life with Purpose', uk: 'Добре життя з метою' },
    category: 'life',
    level: 'b2',
    minutes: 2,
    topics: ['life', 'purpose', 'values'],
    body: {
      en: 'A good life is not only about wealth or success, but about balance, purpose, and inner peace. For me, a good life means living with clear values, helping others, and continuously improving myself. When a person knows what truly matters, life becomes more meaningful and fulfilling. One important part of a good life is personal growth. Learning new skills, gaining knowledge, and overcoming challenges help us become stronger and more confident. Even failures play an important role because they teach valuable lessons and guide us toward better decisions. Another key element of a good life is relationships. Spending time with family, friends, and supportive people creates happiness and emotional stability. Respect, kindness, and honest communication help build strong connections that last. A good life also involves contributing to society. Helping others, doing meaningful work, and acting responsibly give life a deeper purpose. When we make a positive impact, even in small ways, we feel proud and satisfied. In conclusion, a good life is not perfect, but it is purposeful. By growing, caring for others, and living with integrity, we can create a life that truly matters.',
      uk: 'Добре життя — це не лише про багатство чи успіх, а про рівновагу, сенс і внутрішній спокій. Для мене добре життя означає жити за чіткими цінностями, допомагати іншим і постійно вдосконалювати себе. Коли людина розуміє, що насправді важливо, життя стає більш змістовним і повним. Одна з важливих складових доброго життя — особистісне зростання. Опанування нових навичок, здобуття знань і подолання труднощів роблять нас сильнішими та впевненішими. Навіть невдачі відіграють важливу роль, адже вони вчать цінних уроків і скеровують нас до кращих рішень. Ще один ключовий елемент доброго життя — стосунки. Час, проведений із родиною, друзями та людьми, які нас підтримують, дарує щастя і емоційну стабільність. Повага, доброта і чесне спілкування допомагають будувати міцні звʼязки, що тривають довго. Добре життя також передбачає внесок у суспільство. Допомога іншим, значуща робота і відповідальні вчинки надають життю глибшого сенсу. Коли ми робимо позитивний вплив, навіть у малому, ми відчуваємо гордість і задоволення. Підсумовуючи, добре життя не є ідеальним, але воно осмислене. Зростаючи, піклуючись про інших і живучи чесно, ми можемо створити життя, яке справді має значення.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does a good life depend on besides wealth or success?', uk: 'Від чого, за текстом, залежить добре життя, окрім багатства чи успіху?' },
        options: [
          { en: 'Fame and popularity', uk: 'Слави і популярності' },
          { en: 'Avoiding every failure', uk: 'Уникнення будь-яких невдач' },
          { en: 'Balance, purpose, and inner peace', uk: 'Рівноваги, сенсу і внутрішнього спокою' },
        ],
        correct: 2,
        explain: { en: 'The text opens: \'A good life is not only about wealth or success, but about balance, purpose, and inner peace.\'', uk: 'Текст починається словами: «Добре життя — це не лише про багатство чи успіх, а про рівновагу, сенс і внутрішній спокій».' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, why do failures matter?', uk: 'Чому, за текстом, важливі невдачі?' },
        options: [
          { en: 'They teach valuable lessons and guide us toward better decisions', uk: 'Вони вчать цінних уроків і скеровують нас до кращих рішень' },
          { en: 'They prove a person will never succeed', uk: 'Вони доводять, що людина ніколи не досягне успіху' },
          { en: 'They should always be hidden from others', uk: 'Їх завжди слід приховувати від інших' },
        ],
        correct: 0,
        explain: { en: 'The text says failures \'play an important role because they teach valuable lessons and guide us toward better decisions.\'', uk: 'У тексті сказано, що невдачі «відіграють важливу роль, адже вони вчать цінних уроків і скеровують нас до кращих рішень».' },
      },
      {
        kind: 'open',
        q: { en: 'The text lists personal growth, relationships, and contributing to society as key parts of a good life. Which of these three matters most to you right now, and why?', uk: 'У тексті названо особистісне зростання, стосунки й внесок у суспільство як ключові складові доброго життя. Яка з цих трьох речей найважливіша для вас саме зараз і чому?' },
        sample: { en: 'Right now relationships matter most to me, because the support of my family and close friends is what gets me through hard days, and I want to invest more time in the people who actually show up for me.', uk: 'Зараз для мене найважливіші стосунки, бо саме підтримка родини й близьких друзів допомагає пережити важкі дні, і я хочу приділяти більше часу тим людям, які справді поруч зі мною.' },
      },
    ],
  },
];
