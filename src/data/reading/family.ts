import type { ReadingText } from '../types';

/*
 * Reading · category: family. Text transcribed from the owner's screenshot backlog, attributed
 * per `source` (Mind Boost English — Facebook community).
 */
export const familyTexts: ReadingText[] = [
  {
    id: 'my-family',
    title: { en: 'My Family', uk: 'Моя сімʼя' },
    category: 'family',
    level: 'a2',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['family', 'gratitude', 'everyday'],
    body: {
      en: 'Hello everyone, today I want to talk about my family. My family is very important to me. They love and support me in every situation. We spend time together and help each other. My parents teach me good manners and important lessons. I feel happy and safe with my family. I am thankful for their love and care.',
      uk: 'Привіт усім, сьогодні я хочу розповісти про свою сімʼю. Моя сімʼя дуже важлива для мене. Вони люблять і підтримують мене в будь-якій ситуації. Ми проводимо час разом і допомагаємо одне одному. Мої батьки вчать мене хороших манер і важливих життєвих уроків. Я почуваюся щасливим і в безпеці зі своєю сімʼєю. Я вдячний за їхню любов і турботу.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do the speaker’s parents teach?', uk: 'Чого навчають батьки оповідача?' },
        options: [
          { en: 'Good manners and important lessons', uk: 'Хороших манер і важливих уроків' },
          { en: 'How to cook only', uk: 'Лише як готувати' },
          { en: 'Nothing in particular', uk: 'Нічого конкретного' },
        ],
        correct: 0,
        explain: { en: '“My parents teach me good manners and important lessons.”', uk: '«My parents teach me good manners and important lessons.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the speaker feel with their family?', uk: 'Як почувається оповідач зі своєю сімʼєю?' },
        options: [
          { en: 'Happy and safe', uk: 'Щасливим і в безпеці' },
          { en: 'Bored', uk: 'Знудженим' },
          { en: 'Afraid', uk: 'Наляканим' },
        ],
        correct: 0,
        explain: { en: '“I feel happy and safe with my family.”', uk: '«I feel happy and safe with my family.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write two or three sentences about why your family (or a close person) is important to you.', uk: 'Напишіть два-три речення про те, чому ваша сімʼя (або близька людина) важлива для вас.' },
        sample: { en: 'Answers will vary. A good answer uses simple present-tense sentences with a reason, e.g., “My family is important to me because they support me when things are hard.”', uk: 'Відповіді різнитимуться. Гарна відповідь використовує прості речення в теперішньому часі з причиною, напр.: «My family is important to me because they support me when things are hard.»' },
      },
    ],
  },
  {
    id: 'father',
    title: { en: 'Father', uk: 'Батько' },
    category: 'family',
    level: 'b1',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['family', 'father', 'gratitude'],
    body: {
      en: 'A father is the backbone of the family. He works hard to provide a better life for his children. A father teaches us discipline, courage, and responsibility. He guides us on the right path and supports us in every situation. Even if he does not always show his emotions, his love is deep and true. A father sacrifices his comfort for the happiness of his family. He is a role model and a protector. We should always respect, love, and appreciate our fathers. A father is one of the greatest blessings in life, and we should be thankful for everything he does.',
      uk: 'Батько — опора родини. Він тяжко працює, щоб забезпечити краще життя своїм дітям. Батько вчить нас дисципліни, сміливості й відповідальності. Він скеровує нас на правильний шлях і підтримує в будь-якій ситуації. Навіть якщо він не завжди показує свої емоції, його любов глибока й справжня. Батько жертвує своїм комфортом заради щастя родини. Він — взірець і захисник. Ми маємо завжди поважати, любити й цінувати наших батьків. Батько — одне з найбільших благословень у житті, і ми маємо бути вдячними за все, що він робить.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does a father teach us, according to the text?', uk: 'Чого навчає нас батько, за текстом?' },
        options: [
          { en: 'Discipline, courage, and responsibility', uk: 'Дисципліни, сміливості й відповідальності' },
          { en: 'Only how to earn money', uk: 'Лише як заробляти гроші' },
          { en: 'Nothing important', uk: 'Нічого важливого' },
        ],
        correct: 0,
        explain: { en: '“A father teaches us discipline, courage, and responsibility.”', uk: '«A father teaches us discipline, courage, and responsibility.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say about a father’s love?', uk: 'Що текст каже про любов батька?' },
        options: [
          { en: 'Even if he does not always show it, it is deep and true', uk: 'Навіть якщо він не завжди її показує, вона глибока й справжня' },
          { en: 'It depends on money', uk: 'Вона залежить від грошей' },
          { en: 'It is rarely real', uk: 'Вона рідко буває справжньою' },
        ],
        correct: 0,
        explain: { en: '“Even if he does not always show his emotions, his love is deep and true.”', uk: '«…his love is deep and true.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write two or three sentences about your father or a father figure and what you appreciate about him.', uk: 'Напишіть два-три речення про свого батька чи людину, що замінила батька, і за що ви їй вдячні.' },
        sample: { en: 'Answers will vary. A good answer names a specific person and a concrete quality or action they appreciate.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну людину й конкретну якість чи вчинок, за які вдячні.' },
      },
    ],
  },
  {
    id: 'my-mother',
    title: { en: 'My Mother', uk: 'Моя мама' },
    category: 'family',
    level: 'a2',
    minutes: 1,
    topics: ['family', 'mother', 'gratitude'],
    body: {
      en: 'My mother is the most important person in my life. She loves me, cares for me, and always supports me. A mother sacrifices many things for the happiness of her children. She teaches us good manners, kindness, and respect. My mother always encourages me to work hard and follow the right path. Whenever I feel sad or worried, she gives me comfort and strength. Her love is pure and unconditional. A mother’s role in a child’s life is very special and valuable. I respect and appreciate my mother for everything she does for me. My mother is my first teacher and my greatest blessing.',
      uk: 'Моя мама — найважливіша людина в моєму житті. Вона любить мене, дбає про мене й завжди підтримує. Мати жертвує багатьма речами заради щастя своїх дітей. Вона вчить нас хороших манер, доброти й поваги. Моя мама завжди заохочує мене наполегливо працювати й іти правильним шляхом. Щоразу, коли мені сумно чи тривожно, вона дає мені втіху й силу. Її любов чиста й безумовна. Роль матері в житті дитини дуже особлива й цінна. Я поважаю й ціную свою маму за все, що вона для мене робить. Моя мама — мій перший учитель і моє найбільше благословення.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the speaker’s mother teach, according to the text?', uk: 'Чого навчає мама оповідача, за текстом?' },
        options: [
          { en: 'Good manners, kindness, and respect', uk: 'Хороших манер, доброти й поваги' },
          { en: 'Only how to earn money', uk: 'Лише як заробляти гроші' },
          { en: 'Nothing in particular', uk: 'Нічого конкретного' },
        ],
        correct: 0,
        explain: { en: '“She teaches us good manners, kindness, and respect.”', uk: '«She teaches us good manners, kindness, and respect.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the speaker describe a mother’s love?', uk: 'Як оповідач описує любов матері?' },
        options: [
          { en: 'Pure and unconditional', uk: 'Чистою й безумовною' },
          { en: 'Based on money', uk: 'Заснованою на грошах' },
          { en: 'Rare and cold', uk: 'Рідкісною й холодною' },
        ],
        correct: 0,
        explain: { en: '“Her love is pure and unconditional.”', uk: '«Her love is pure and unconditional.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write two or three sentences about your mother or a mother figure and what you are grateful for.', uk: 'Напишіть два-три речення про свою маму чи людину, що замінила матір, і за що ви вдячні.' },
        sample: { en: 'Answers will vary. A good answer names a specific person and a concrete thing they did or taught.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну людину й конкретну річ, яку вона зробила чи чого навчила.' },
      },
    ],
  },
  {
    id: 'my-daughter',
    title: { en: 'My Daughter', uk: 'Моя донька' },
    category: 'family',
    level: 'b1',
    minutes: 1,
    topics: ['family', 'children', 'love'],
    body: {
      en: 'My daughter is the greatest blessing of my life. She brings love, joy, and meaning to my world. Her smile fills my heart with happiness and hope. She is kind, intelligent, and full of dreams. Watching her grow teaches me patience, responsibility, and unconditional love. I want to guide her with good values, confidence, and courage. I pray for her health, success, and bright future. My daughter inspires me to become a better person every day. She is not only my child but also my strength and pride. Having a daughter is a gift from God that makes life more beautiful and purposeful.',
      uk: 'Моя донька — найбільше благословення мого життя. Вона приносить любов, радість і сенс у мій світ. Її усмішка наповнює моє серце щастям і надією. Вона добра, розумна й сповнена мрій. Спостерігати, як вона росте, вчить мене терпіння, відповідальності й безумовної любові. Я хочу скеровувати її добрими цінностями, упевненістю й сміливістю. Я молюся за її здоровʼя, успіх і світле майбутнє. Моя донька надихає мене ставати кращою людиною щодня. Вона не лише моя дитина, а й моя сила та гордість. Мати доньку — це дар, що робить життя прекраснішим і осмисленішим.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does watching his daughter grow teach the speaker?', uk: 'Чого навчає оповідача те, як росте його донька?' },
        options: [
          { en: 'Patience, responsibility, and unconditional love', uk: 'Терпіння, відповідальності й безумовної любові' },
          { en: 'How to earn money', uk: 'Як заробляти гроші' },
          { en: 'Nothing new', uk: 'Нічого нового' },
        ],
        correct: 0,
        explain: { en: '“Watching her grow teaches me patience, responsibility, and unconditional love.”', uk: '«…patience, responsibility, and unconditional love.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'With what does the speaker want to guide his daughter?', uk: 'Чим оповідач хоче скеровувати доньку?' },
        options: [
          { en: 'Good values, confidence, and courage', uk: 'Добрими цінностями, упевненістю й сміливістю' },
          { en: 'Fear and strict rules only', uk: 'Лише страхом і суворими правилами' },
          { en: 'Money above all', uk: 'Грошима понад усе' },
        ],
        correct: 0,
        explain: { en: '“I want to guide her with good values, confidence, and courage.”', uk: '«…good values, confidence, and courage.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write two or three sentences about a child (or young person) you care about and your hopes for them.', uk: 'Напишіть два-три речення про дитину (чи молоду людину), яка вам дорога, і ваші сподівання щодо неї.' },
        sample: { en: 'Answers will vary. A good answer names a person and a specific, caring hope (health, kindness, a skill, happiness).', uk: 'Відповіді різнитимуться. Гарна відповідь називає людину й конкретне, тепле сподівання (здоровʼя, доброта, навичка, щастя).' },
      },
    ],
  },
  // CHANGED (Wave S2, §15 screenshot OCR): +12 texts from the "stage II text_screenshots" backlog.
  {
    id: 'my-father-my-role-model',
    title: { en: 'My Father, My Role Model', uk: 'Мій Батько — Мій Приклад' },
    category: 'family',
    level: 'a2',
    minutes: 1,
    topics: ['family', 'father', 'role-model'],
    body: {
      en: 'My father is one of the most important people in my life. He is hardworking, responsible, and always supports our family while teaching me honesty, respect, and perseverance. Whenever I face difficulties, he encourages me to stay strong and never give up. I am grateful for his love, care, sacrifices, and constant support, and I see him as my role model and guide.',
      uk: 'Мій батько — одна з найважливіших людей у моєму житті. Він працьовитий, відповідальний і завжди підтримує нашу родину, водночас навчаючи мене чесності, поваги та наполегливості. Коли я стикаюся з труднощами, він надихає мене залишатися сильним і ніколи не здаватися. Я вдячний за його любов, турботу, жертовність і незмінну підтримку, і я бачу в ньому свій приклад для наслідування та провідника по життю.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What values does the father teach, according to the text?', uk: 'Яких цінностей навчає батько, за текстом?' },
        options: [
          { en: 'Honesty, respect, and perseverance', uk: 'Чесності, поваги та наполегливості' },
          { en: 'Wealth and ambition', uk: 'Багатства і амбіцій' },
          { en: 'Cooking and gardening', uk: 'Кулінарії та садівництва' },
        ],
        correct: 0,
        explain: { en: 'The text says the father supports the family \'while teaching me honesty, respect, and perseverance.\'', uk: 'У тексті сказано, що батько підтримує родину, «навчаючи мене чесності, поваги та наполегливості».' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the father help the author when they face difficulties?', uk: 'Як батько допомагає авторові, коли той стикається з труднощами?' },
        options: [
          { en: 'He solves the problem for them', uk: 'Він вирішує проблему за нього' },
          { en: 'He encourages them to stay strong and never give up', uk: 'Він надихає залишатися сильним і ніколи не здаватися' },
          { en: 'He ignores the problem', uk: 'Він ігнорує проблему' },
        ],
        correct: 1,
        explain: { en: 'The text says: \'Whenever I face difficulties, he encourages me to stay strong and never give up.\'', uk: 'У тексті сказано: «Коли я стикаюся з труднощами, він надихає мене залишатися сильним і ніколи не здаватися».' },
      },
      {
        kind: 'open',
        q: { en: 'Who is a role model in your own life, and what have you learned from them?', uk: 'Хто є прикладом для наслідування у твоєму житті, і чого ти від нього навчився?' },
        sample: { en: 'My grandmother is a role model for me. From her, I learned patience and the importance of staying kind to others even during difficult times.', uk: 'Прикладом для наслідування в моєму житті є моя бабуся. Від неї я навчився терпіння і того, як важливо залишатися добрим до інших навіть у важкі часи.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'evening-dinner-with-a-father',
    title: { en: 'Evening Dinner with a Father', uk: 'Вечеря з батьком' },
    category: 'family',
    level: 'b1',
    minutes: 2,
    topics: ['family', 'respect', 'parents'],
    body: {
      en: [
        'A son took his old father to a restaurant for an evening dinner. Father being very old and weak, while eating, dropped food on his shirt and trousers. Other diners watched him in disgust while his son was calm.',
        'After he finished eating, his son who was not at all embarrassed, quietly took him to the wash room, wiped the food particles, removed the stains, combed his hair and fitted his spectacles firmly. When they came out, the entire restaurant was watching them in dead silence, not able to grasp how someone could embarrass themselves publicly like that. The son settled the bill and started walking out with his father.',
        'At that time, an old man amongst the diners called out to the son and asked him, "Don\'t you think you have left something behind?".',
        'The son replied, "No sir, I haven\'t".',
        'The old man retorted, "Yes, you have! You left a lesson for every son and hope for every father".',
        'The restaurant went silent.',
        'Moral: To care for those who once cared for us is one of the highest honors. We all know, how our parents cared for us for every little things. Love them, respect them, and care for them.',
      ].join('\n\n'),
      uk: [
        'Син привів свого старого батька до ресторану на вечерю. Батько був дуже старий і слабкий, і під час їжі впустив трохи їжі собі на сорочку та штани. Інші відвідувачі дивилися на нього з відразою, тоді як син залишався спокійним.',
        'Коли батько доїв, син, анітрохи не соромлячись, спокійно відвів його до вбиральні, витер частинки їжі, прибрав плями, розчесав йому волосся й дбайливо поправив окуляри. Коли вони вийшли, весь ресторан у мертвій тиші спостерігав за ними, не в змозі зрозуміти, як хтось міг так прилюдно осоромитися. Син розрахувався за рахунком і разом із батьком попрямував до виходу.',
        'У цей момент один літній чоловік серед відвідувачів гукнув до сина і запитав: «Ви не думаєте, що дещо забули?».',
        'Син відповів: «Ні, пане, не забув».',
        'Літній чоловік заперечив: «Ні, забули! Ви залишили урок для кожного сина і надію для кожного батька».',
        'У ресторані запала тиша.',
        'Мораль: Піклуватися про тих, хто колись піклувався про нас, — одна з найвищих чеснот. Усі ми знаємо, як наші батьки дбали про нас у найменших дрібницях. Любіть їх, поважайте їх і піклуйтеся про них.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did the son do after his father dropped food on his clothes?', uk: 'Що зробив син, коли батько впустив їжу собі на одяг?' },
        options: [
          { en: 'He calmly took him to the wash room, cleaned him up, and fixed his hair and glasses', uk: 'Спокійно відвів його до вбиральні, привів до ладу й поправив волосся та окуляри' },
          { en: 'He scolded his father for being careless', uk: 'Насварив батька за неуважність' },
          { en: 'He left the restaurant immediately in embarrassment', uk: 'Одразу залишив ресторан від сорому' },
        ],
        correct: 0,
        explain: { en: 'The son "quietly took him to the wash room, wiped the food particles, removed the stains, combed his hair and fitted his spectacles."', uk: 'Син «спокійно відвів його до вбиральні, витер частинки їжі, прибрав плями, розчесав йому волосся й поправив окуляри».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did the old man say the son had left behind?', uk: 'Що, за словами літнього чоловіка, залишив по собі син?' },
        options: [
          { en: 'His wallet', uk: 'Свій гаманець' },
          { en: 'A lesson for every son and hope for every father', uk: 'Урок для кожного сина й надію для кожного батька' },
          { en: 'His jacket', uk: 'Свою куртку' },
        ],
        correct: 1,
        explain: { en: 'The old man says, "You left a lesson for every son and hope for every father."', uk: 'Літній чоловік каже: «Ви залишили урок для кожного сина і надію для кожного батька».' },
      },
      {
        kind: 'open',
        q: { en: 'What does this story teach us about caring for elderly parents? Share your thoughts.', uk: 'Чого ця історія вчить нас про турботу про літніх батьків? Поділіться своїми думками.' },
        sample: { en: 'The story reminds us that our parents cared for us patiently when we were helpless, so we should return that same patience and love when they grow old and need our care, without ever feeling embarrassed by it.', uk: 'Ця історія нагадує нам, що батьки терпляче доглядали за нами, коли ми були безпорадними, тож і ми маємо відповісти їм такою самою турботою й любовʼю, коли вони старіють і потребують нашої допомоги, ніколи не соромлячись цього.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'i-love-you-mom',
    title: { en: 'I Love You Mom', uk: 'Я люблю тебе, мамо' },
    category: 'family',
    level: 'b1',
    minutes: 1,
    topics: ['family', 'mother', 'gratitude'],
    body: {
      en: [
        'Mom, you are the most caring and loving person in my life. Thank you for always supporting me and standing by my side through every moment. Your love, kindness, and sacrifices mean more to me than words can explain. You make my life brighter with your smile and comfort me whenever I feel sad. I am grateful for every lesson you have taught me and every hug you have given me.',
        'No matter how old I grow, I will always need your love and guidance. I love you so much, Mom, and I am proud to be your child.',
      ].join('\n\n'),
      uk: [
        'Мамо, ти — найтурботливіша й найлюбляча людина в моєму житті. Дякую тобі за те, що завжди підтримуєш мене і стоїш поруч у кожну мить. Твоя любов, доброта і жертовність значать для мене більше, ніж можна висловити словами. Ти робиш моє життя світлішим своєю усмішкою і втішаєш мене, коли мені сумно. Я вдячна за кожен урок, який ти мені дала, і за кожні обійми, які ти мені подарувала.',
        'Скільки б років мені не було, мені завжди потрібні твоя любов і турбота. Я дуже тебе люблю, мамо, і пишаюся тим, що я твоя дитина.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the writer thank their mom for, according to the text?', uk: 'За що авторка дякує мамі, згідно з текстом?' },
        options: [
          { en: 'For buying her expensive gifts', uk: 'За дорогі подарунки' },
          { en: 'For always supporting her and standing by her side', uk: 'За те, що завжди підтримує і стоїть поруч' },
          { en: 'For teaching her to cook', uk: 'За те, що навчила її готувати' },
        ],
        correct: 1,
        explain: { en: 'The text thanks Mom for always supporting her and standing by her side through every moment.', uk: 'У тексті авторка дякує мамі за те, що та завжди підтримує її і стоїть поруч у кожну мить.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the writer say she will always need, no matter how old she grows?', uk: 'Що, за словами авторки, їй завжди буде потрібно, скільки б їй не було років?' },
        options: [
          { en: 'Her mom\'s love and guidance', uk: 'Любов і турбота мами' },
          { en: 'More free time', uk: 'Більше вільного часу' },
          { en: 'A bigger house', uk: 'Більший будинок' },
        ],
        correct: 0,
        explain: { en: 'The text says no matter how old I grow, I will always need your love and guidance.', uk: 'У тексті сказано: скільки б років мені не було, мені завжди потрібні твоя любов і турбота.' },
      },
      {
        kind: 'open',
        q: { en: 'What is one thing you are grateful to your mother (or another family member) for?', uk: 'За що одне ти найбільше вдячний своїй мамі (або іншому члену родини)?' },
        sample: { en: 'I am grateful to my mother for always believing in me, even when I doubted myself, because her support gave me the confidence to keep trying.', uk: 'Я вдячний своїй мамі за те, що вона завжди вірила в мене, навіть коли я сумнівався в собі, адже її підтримка давала мені впевненість пробувати знову.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'to-my-father',
    title: { en: 'To My Father', uk: 'Моєму батькові' },
    category: 'family',
    level: 'b1',
    minutes: 1,
    topics: ['family', 'father', 'gratitude'],
    body: {
      en: [
        'Thank you for being the one\nwho always stands beside me,\nA quiet strength\nI can always trust.',
        'Thank you for the lessons\nyou taught without many words,\nThrough your actions,\nyour patience, and your care.',
        'Thank you for watching over me,\nEven when I didn’t notice,\nProtecting my path\nin ways I’m still learning to understand.',
        'Thank you for your steady love,\nSometimes gentle and quiet,\nSometimes strong and guiding,\nAlways there when I need it most.',
        'Because of you,\nI know what support feels like.\nYour love is a place\nwhere I can always return\nFeeling safe, valued,\nand at home.',
      ].join('\n\n'),
      uk: [
        'Дякую тобі за те, що ти — той,\nхто завжди поруч зі мною,\nТиха сила,\nякій я завжди можу довіряти.',
        'Дякую за уроки,\nякі ти дав без зайвих слів, —\nЧерез вчинки,\nтерпіння і турботу.',
        'Дякую, що оберігав мене,\nНавіть коли я цього не помічав,\nЗахищаючи мій шлях\nтак, як я досі вчуся розуміти.',
        'Дякую за твою незмінну любов,\nІноді ніжну і тиху,\nІноді сильну й скеровуючу,\nЗавжди поруч, коли вона потрібна найбільше.',
        'Завдяки тобі\nя знаю, що таке справжня підтримка.\nТвоя любов — це місце,\nкуди я завжди можу повернутися,\nВідчуваючи себе в безпеці, цінним\nі вдома.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the poem, how did the father teach his lessons?', uk: 'Як, згідно з віршем, батько навчав своїх уроків?' },
        options: [
          { en: 'Through long lectures', uk: 'Через довгі нотації' },
          { en: 'Through his actions, patience, and care', uk: 'Через свої вчинки, терпіння і турботу' },
          { en: 'Through strict punishment', uk: 'Через суворі покарання' },
        ],
        correct: 1,
        explain: { en: 'The poem says: thank you for the lessons you taught without many words, through your actions, your patience, and your care.', uk: 'У вірші сказано: дякую за уроки, які ти дав без зайвих слів, через вчинки, терпіння і турботу.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the poem compare the father\'s love to?', uk: 'З чим вірш порівнює любов батька?' },
        options: [
          { en: 'A test to pass', uk: 'Іспит, який треба скласти' },
          { en: 'A debt to repay', uk: 'Борг, який треба сплатити' },
          { en: 'A place to always return to, feeling safe and at home', uk: 'Місце, куди завжди можна повернутися, відчуваючи безпеку і дім' },
        ],
        correct: 2,
        explain: { en: 'The poem ends: your love is a place where I can always return, feeling safe, valued, and at home.', uk: 'Вірш завершується словами: твоя любов — це місце, куди я завжди можу повернутися, відчуваючи себе в безпеці, цінним і вдома.' },
      },
      {
        kind: 'open',
        q: { en: 'What is one quality of a parent or guardian that makes you feel safe and supported?', uk: 'Яка одна риса батьків чи опікунів змушує тебе почуватися в безпеці й підтримці?' },
        sample: { en: 'For me, it\'s my father\'s calm patience — even when I make mistakes, he stays steady and listens instead of getting angry, and that steadiness makes me feel safe.', uk: 'Для мене це спокійне терпіння мого батька — навіть коли я помиляюся, він залишається спокійним і вислуховує мене, а не сердиться, і саме ця стабільність дає мені відчуття безпеки.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'parents',
    title: { en: 'Parents', uk: 'Батьки' },
    category: 'family',
    level: 'a2',
    minutes: 1,
    topics: ['parents', 'family', 'gratitude'],
    body: {
      en: [
        'Parents are the most important people in our lives who love and care for us unconditionally. They work hard to give us a happy and comfortable life. Parents teach us good values like respect, honesty, and kindness. They guide us and support us in every situation. Their love gives us strength and confidence to face challenges.',
        'I feel grateful for my parents because they always stand by me. I will always respect and make them proud in my life.',
      ].join('\n\n'),
      uk: [
        'Батьки — найважливіші люди в нашому житті, які люблять і піклуються про нас безумовно. Вони наполегливо працюють, щоб забезпечити нам щасливе і комфортне життя. Батьки вчать нас добрих цінностей, як-от повага, чесність і доброта. Вони скеровують і підтримують нас у будь-якій ситуації. Їхня любов дає нам сили та впевненість, щоб долати труднощі.',
        'Я вдячний(а) своїм батькам за те, що вони завжди поруч зі мною. Я завжди поважатиму їх і робитиму так, щоб вони пишалися мною все життя.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what do parents teach us?', uk: 'Чого, за текстом, вчать нас батьки?' },
        options: [
          { en: 'Good values like respect, honesty, and kindness', uk: 'Добрих цінностей, як-от повага, чесність і доброта' },
          { en: 'How to cook', uk: 'Готувати їжу' },
          { en: 'Foreign languages', uk: 'Іноземних мов' },
        ],
        correct: 0,
        explain: { en: 'The text says parents teach us good values like respect, honesty, and kindness.', uk: 'У тексті сказано, що батьки вчать нас добрих цінностей, як-от повага, чесність і доброта.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the author feel about their parents, according to the text?', uk: 'Що, за текстом, відчуває автор до своїх батьків?' },
        options: [
          { en: 'Indifferent', uk: 'Байдужість' },
          { en: 'Grateful', uk: 'Вдячність' },
          { en: 'Embarrassed', uk: 'Ніяковість' },
        ],
        correct: 1,
        explain: { en: 'The author says they feel grateful for their parents because they always stand by them.', uk: 'Автор каже, що вдячний своїм батькам за те, що вони завжди поруч.' },
      },
      {
        kind: 'open',
        q: { en: 'How do you show your parents (or the people who raised you) that you appreciate them?', uk: 'Як ти показуєш своїм батькам (або людям, які тебе виховали), що цінуєш їх?' },
        sample: { en: 'I try to show my appreciation by helping them at home, calling them regularly, and telling them directly how thankful I am for everything they have done for me.', uk: 'Я намагаюся показувати свою вдячність, допомагаючи їм удома, регулярно телефонуючи і прямо кажучи їм, наскільки я вдячний(а) за все, що вони для мене зробили.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'heartbreaking-story',
    title: { en: 'Heartbreaking Story', uk: 'Історія, що крає серце' },
    category: 'family',
    level: 'b1',
    minutes: 2,
    topics: ['family', 'mother', 'sacrifice', 'love'],
    body: {
      en: [
        'A 16-year-old boy asked his mom, "Mom, what are you going to get me for my 18th birthday?" The mother answered, "Son, that\'s still a long way off."',
        'The boy turned 17, and one day, he went into a coma. His mom took him to the hospital, and the doctor said, "Madam, your child has a serious heart condition." The boy weakly asked, "Did he tell you I\'m going to die?" His mom started crying. On his 18th birthday, he finally recovered and came home. On his bed was a letter his mom had left him. It said:',
        '"Son, if you are reading this, it means everything went well. Remember the day you asked me what I was going to give you for your 18th birthday, and I didn\'t know what to answer? I gave you my heart. Take care of it, and happy birthday, my son." The mother had passed away because she had given her heart to her son.',
        'Nothing is bigger than a mother\'s heart... That\'s why "MOM" spelled upside down is "WOW."',
      ].join('\n\n'),
      uk: [
        'Шістнадцятирічний хлопець запитав у мами: «Мамо, що ти подаруєш мені на вісімнадцятиріччя?» Мама відповіла: «Синку, до цього ще далеко».',
        'Коли хлопцю виповнилося сімнадцять, одного дня він впав у кому. Мама відвезла його до лікарні, і лікар сказав: «Пані, у вашої дитини серйозна хвороба серця». Хлопець ледь чутно запитав: «Він сказав вам, що я помру?» Мама заплакала. На своє вісімнадцятиріччя він нарешті одужав і повернувся додому. На ліжку лежав лист, який залишила йому мама. У ньому було написано:',
        '«Синку, якщо ти читаєш це, значить, усе минуло добре. Памʼятаєш той день, коли ти запитав мене, що я подарую тобі на вісімнадцятиріччя, і я не знала, що відповісти? Я віддала тобі своє серце. Бережи його, і з днем народження, синку». Мама померла, бо віддала своє серце синові.',
        'Немає нічого більшого за материнське серце... Тому й слово «MOM», перевернуте догори дриґом, перетворюється на «WOW».',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did the boy ask his mother when he turned 16?', uk: 'Про що хлопець запитав маму, коли йому виповнилося 16?' },
        options: [
          { en: 'What she would give him for his 18th birthday', uk: 'Що вона подарує йому на 18-річчя' },
          { en: 'Why he had to go to the hospital', uk: 'Чому йому довелося йти до лікарні' },
          { en: 'How old his mother was', uk: 'Скільки років його мамі' },
        ],
        correct: 0,
        explain: { en: 'The boy asked his mom what she would get him for his 18th birthday, and she said it was still far off.', uk: 'Хлопець запитав маму, що вона подарує йому на 18-річчя, а вона відповіла, що до цього ще далеко.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did the mother\'s letter reveal?', uk: 'Що розкрив лист мами?' },
        options: [
          { en: 'She was moving to another city', uk: 'Вона переїжджає в інше місто' },
          { en: 'She had bought him an expensive gift', uk: 'Вона купила йому дорогий подарунок' },
          { en: 'She had given him her heart and died because of it', uk: 'Вона віддала йому своє серце і через це померла' },
        ],
        correct: 2,
        explain: { en: 'The letter revealed that the mother had given her son her own heart as his transplant and had passed away as a result.', uk: 'У листі йшлося про те, що мама віддала синові власне серце для пересадки і через це померла.' },
      },
      {
        kind: 'open',
        q: { en: 'What does this story suggest about a mother\'s love?', uk: 'Що ця історія говорить про материнську любов?' },
        sample: { en: 'It suggests that a mother\'s love is completely selfless — she gave up her own life so her son could live, without ever telling him in advance.', uk: 'Вона показує, що материнська любов цілком безкорислива — мама пожертвувала власним життям заради сина, навіть не сказавши йому про це наперед.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'my-parents',
    title: { en: 'My Parents', uk: 'Мої батьки' },
    category: 'family',
    level: 'b1',
    minutes: 1,
    topics: ['family', 'parents', 'father', 'gratitude'],
    body: {
      en: [
        'My parents are the most important people in my life. They are the reason for my happiness, success, and everything I have today. I love and respect them deeply because they always care for me, guide me, and support me in every situation.',
        'My father is a hardworking man. He works every day to provide for our family. He is honest, kind, and responsible. Whenever I face a problem, he encourages me to stay strong and teaches me how to solve it. He also teaches me the value of honesty, discipline, and patience.',
      ].join('\n\n'),
      uk: [
        'Мої батьки — найважливіші люди в моєму житті. Вони є причиною мого щастя, успіху і всього, що я маю сьогодні. Я люблю і глибоко поважаю їх, бо вони завжди дбають про мене, спрямовують мене і підтримують у будь-якій ситуації.',
        'Мій батько — працьовита людина. Він щодня працює, щоб забезпечити нашу сімʼю. Він чесний, добрий і відповідальний. Щоразу, коли я стикаюся з проблемою, він підбадьорює мене залишатися сильним і вчить, як її розвʼязати. Він також вчить мене цінувати чесність, дисципліну і терпіння.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, why does the narrator love and respect their parents?', uk: 'Згідно з текстом, чому оповідач любить і поважає своїх батьків?' },
        options: [
          { en: 'Because they are famous people.', uk: 'Бо вони відомі люди.' },
          { en: 'Because they give expensive gifts.', uk: 'Бо вони дарують дорогі подарунки.' },
          { en: 'Because they always care for, guide, and support the narrator.', uk: 'Бо вони завжди дбають про оповідача, спрямовують і підтримують його.' },
        ],
        correct: 2,
        explain: { en: 'The text says the narrator loves and respects them deeply because they always care for, guide, and support them.', uk: 'У тексті сказано, що оповідач глибоко любить і поважає батьків, бо вони завжди дбають, спрямовують і підтримують.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the father teach the narrator, according to the text?', uk: 'Чого, згідно з текстом, навчає батько оповідача?' },
        options: [
          { en: 'The value of honesty, discipline, and patience.', uk: 'Цінувати чесність, дисципліну і терпіння.' },
          { en: 'How to cook traditional meals.', uk: 'Готувати традиційні страви.' },
          { en: 'How to play a musical instrument.', uk: 'Грати на музичному інструменті.' },
        ],
        correct: 0,
        explain: { en: 'The text states the father teaches the value of honesty, discipline, and patience.', uk: 'У тексті сказано, що батько вчить цінувати чесність, дисципліну і терпіння.' },
      },
      {
        kind: 'open',
        q: { en: 'Think of a quality you admire in one of your parents or another family member. How has it influenced you?', uk: 'Пригадайте рису характеру, яку ви цінуєте в одному з батьків чи в іншого члена родини. Як вона вплинула на вас?' },
        sample: { en: 'I admire my mother\'s patience. Whenever I struggle with something, she stays calm and helps me find a solution instead of getting upset, and that has taught me to handle difficulties more calmly myself.', uk: 'Я захоплююся терпінням своєї матері. Коли мені щось не вдається, вона залишається спокійною і допомагає знайти рішення, замість того щоб засмучуватися, і це навчило мене самого спокійніше справлятися з труднощами.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'my-daughter-my-greatest-blessing',
    title: { en: 'My Daughter, My Greatest Blessing', uk: 'Моя донька, моє найбільше благословення' },
    category: 'family',
    level: 'b1',
    minutes: 2,
    topics: ['family', 'parenting', 'love'],
    body: {
      en: [
        'My daughter is the most precious part of my life. She brings joy, love, and happiness into my world every day. Her smile brightens even my darkest moments. Watching her grow and learn new things fills my heart with pride. She is kind, curious, and full of dreams. I always want to protect her and guide her in the right direction. She teaches me patience, love, and the true meaning of care.',
        'Every moment spent with her is special and unforgettable. I hope she grows up to be strong, confident, and kind. I will always support her in chasing her dreams. Her laughter is like music that fills my heart with peace.',
        'I want her to believe in herself and never give up. She is not just my daughter, but also my greatest blessing. I promise to stand by her side through every step of life. In the end, my daughter is my love, my pride, and my forever happiness.',
      ].join('\n\n'),
      uk: [
        'Моя донька — найдорожча частина мого життя. Вона щодня приносить у мій світ радість, любов і щастя. Її усмішка освітлює навіть мої найтемніші миті. Спостерігати, як вона росте і вчиться новому, наповнює моє серце гордістю. Вона добра, допитлива і сповнена мрій. Я завжди хочу захищати її і скеровувати в правильному напрямку. Вона вчить мене терпіння, любові й справжнього значення турботи.',
        'Кожна мить, проведена з нею, особлива і незабутня. Я сподіваюся, що вона виросте сильною, впевненою в собі й доброю. Я завжди підтримуватиму її в прагненні до мрій. Її сміх — мов музика, що наповнює моє серце спокоєм.',
        'Я хочу, щоб вона вірила в себе і ніколи не здавалася. Вона не просто моя донька, а й моє найбільше благословення. Я обіцяю бути поруч із нею на кожному кроці життя. Зрештою, моя донька — це моя любов, моя гордість і моє вічне щастя.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the writer say their daughter teaches them?', uk: 'Чого, за словами автора, вчить його донька?' },
        options: [
          { en: 'How to cook and clean', uk: 'Готувати і прибирати' },
          { en: 'Patience, love, and the true meaning of care', uk: 'Терпіння, любові й справжнього значення турботи' },
          { en: 'How to become famous', uk: 'Як стати відомим' },
        ],
        correct: 1,
        explain: { en: 'The text says the daughter teaches the writer patience, love, and the true meaning of care.', uk: 'У тексті сказано, що донька вчить автора терпіння, любові й справжнього значення турботи.' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the writer describe their daughter\'s laughter?', uk: 'Як автор описує сміх своєї доньки?' },
        options: [
          { en: 'Like music that fills the heart with peace', uk: 'Мов музика, що наповнює серце спокоєм' },
          { en: 'Like thunder that shakes the room', uk: 'Мов грім, що струшує кімнату' },
          { en: 'Like silence that calms the house', uk: 'Мов тиша, що заспокоює дім' },
        ],
        correct: 0,
        explain: { en: 'The writer says her laughter is like music that fills my heart with peace.', uk: 'Автор пише, що її сміх — мов музика, що наповнює серце спокоєм.' },
      },
      {
        kind: 'open',
        q: { en: 'What does the writer promise to always do for their daughter, and why do you think that promise matters?', uk: 'Що автор обіцяє завжди робити для своєї доньки і чому, на вашу думку, ця обіцянка важлива?' },
        sample: { en: 'The writer promises to stand by her side through every step of life. That kind of steady support matters because it gives a child the confidence to take risks and chase her dreams, knowing she is never truly alone.', uk: 'Автор обіцяє бути поруч із нею на кожному кроці життя. Така стабільна підтримка важлива, бо вона дає дитині впевненість ризикувати і йти за своїми мріями, знаючи, що вона ніколи не залишиться сама.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'dear-mom',
    title: { en: 'Dear Mom', uk: 'Дорога мамо' },
    category: 'family',
    level: 'a2',
    minutes: 2,
    topics: ['family', 'gratitude', 'mother'],
    body: {
      en: [
        'I hope you are doing well. I want to thank you for everything you do for me every day. You always care for me, support me, and guide me in the right direction. Your love and kindness make my life happy and peaceful. Whenever I feel sad or worried, you are always there to make me feel better. You teach me good values and help me become a better person. I am very lucky to have a mother like you.',
        'I may not say it often, but I truly appreciate all your sacrifices and efforts. You are my strength and my inspiration.',
        'I promise to work hard and make you proud one day. Thank you for always believing in me.\nWith love,\nYour Son, John',
      ].join('\n\n'),
      uk: [
        'Сподіваюся, у тебе все добре. Хочу подякувати тобі за все, що ти робиш для мене щодня. Ти завжди піклуєшся про мене, підтримуєш і скеровуєш у правильному напрямку. Твоя любов і доброта роблять моє життя щасливим і спокійним. Коли мені сумно чи тривожно, ти завжди поруч, щоб мені стало легше. Ти вчиш мене добрих цінностей і допомагаєш стати кращою людиною. Мені дуже пощастило мати таку матір, як ти.',
        'Я не часто це кажу, але щиро ціную всі твої жертви та зусилля. Ти — моя сила і моє натхнення.',
        'Обіцяю старанно працювати і одного дня зробити тебе гордою за мене. Дякую, що завжди віриш у мене.\nЗ любовʼю,\nТвій син, Джон',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the letter, what does the writer\'s mother do for him?', uk: 'Згідно з листом, що мати робить для героя?' },
        options: [
          { en: 'She always cares for him, supports him, and guides him', uk: 'Вона завжди піклується про нього, підтримує і скеровує його' },
          { en: 'She ignores his problems', uk: 'Вона ігнорує його проблеми' },
          { en: 'She only helps him with money', uk: 'Вона допомагає йому лише грошима' },
        ],
        correct: 0,
        explain: { en: 'The letter says his mother always cares for him, supports him, and guides him in the right direction.', uk: 'У листі сказано, що мати завжди піклується про нього, підтримує і скеровує у правильному напрямку.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the writer promise to do?', uk: 'Що обіцяє герой листа?' },
        options: [
          { en: 'Move far away', uk: 'Переїхати далеко' },
          { en: 'Work hard and make his mother proud', uk: 'Старанно працювати і зробити маму гордою' },
          { en: 'Never write to her again', uk: 'Більше ніколи їй не писати' },
        ],
        correct: 1,
        explain: { en: 'The writer promises to work hard and make his mother proud one day.', uk: 'Герой обіцяє старанно працювати і одного дня зробити маму гордою.' },
      },
      {
        kind: 'open',
        q: { en: 'Write a short message thanking someone important in your life, similar to this letter. Who would you write to and what would you thank them for?', uk: 'Напиши коротке повідомлення з подякою комусь важливому у твоєму житті, подібне до цього листа. Кому б ти написав і за що подякував?' },
        sample: { en: 'I would write to my grandfather, thanking him for always listening to me patiently and teaching me to stay calm in difficult situations.', uk: 'Я б написав своєму дідусю, подякувавши йому за те, що він завжди терпляче мене вислуховує і навчив мене зберігати спокій у складних ситуаціях.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'dear-son',
    title: { en: 'Dear Son', uk: 'Любий сину' },
    category: 'family',
    level: 'b1',
    minutes: 1,
    topics: ['family', 'love', 'advice'],
    body: {
      en: 'Dear son, you are the greatest blessing in my life. Your smile gives me strength, and your dreams give me hope. I wish for you a future full of success, kindness, and courage. Always believe in yourself, work hard, and never be afraid of challenges. Learn from mistakes and respect others. Remember, no matter where life takes you, my love and prayers will always be with you.',
      uk: 'Любий сину, ти — найбільше благословення в моєму житті. Твоя усмішка додає мені сил, а твої мрії дарують мені надію. Я бажаю тобі майбутнього, сповненого успіху, доброти й сміливості. Завжди вір у себе, наполегливо працюй і ніколи не бійся труднощів. Вчися на своїх помилках і поважай інших. Памʼятай: хоч би куди тебе привело життя, моя любов і молитви завжди будуть із тобою.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the letter, what gives the parent strength?', uk: 'Що, за словами в листі, додає батькам сил?' },
        options: [
          { en: 'The son\'s smile', uk: 'Усмішка сина' },
          { en: 'The son\'s grades', uk: 'Оцінки сина' },
          { en: 'The son\'s money', uk: 'Гроші сина' },
        ],
        correct: 0,
        explain: { en: 'The letter says, "Your smile gives me strength."', uk: 'У листі сказано: «Твоя усмішка додає мені сил».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the parent advise about mistakes?', uk: 'Що батьки радять щодо помилок?' },
        options: [
          { en: 'Never make any mistakes', uk: 'Ніколи не припускатися помилок' },
          { en: 'Learn from them and respect others', uk: 'Вчитися на них і поважати інших' },
          { en: 'Hide them from everyone', uk: 'Приховувати їх від усіх' },
        ],
        correct: 1,
        explain: { en: 'The letter says, "Learn from mistakes and respect others."', uk: 'У листі сказано: «Вчися на помилках і поважай інших».' },
      },
      {
        kind: 'open',
        q: { en: 'If you wrote a similar letter to someone you love, what advice would you include?', uk: 'Якби ви написали подібного листа комусь із рідних, яку пораду ви б туди включили?' },
        sample: { en: 'I would tell them to stay kind, keep believing in themselves, and know that my love and support will always be there, whatever path they choose.', uk: 'Я б написав(-ла), що варто залишатися добрим, вірити в себе і знати, що моя любов і підтримка завжди поруч, який би шлях він чи вона не обрали.' },
      },
    ],
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
  },
  {
    id: 'my-mothers-love',
    title: { en: 'My Mother\'s Love', uk: 'Любов моєї матері' },
    category: 'family',
    level: 'a2',
    minutes: 1,
    topics: ['mother', 'family', 'love', 'gratitude'],
    body: {
      en: 'Hello How are you everyone. Today I want to talk about my mother. A mother is the most loving and caring person in our life. She sacrifices her comfort for our happiness and works day and night for us. My mother teaches me good manners, patience, and kindness. When I am sad or tired, she gives me strength and hope. A mother\'s love is pure and unconditional. We can never repay her sacrifices. Therefore, we should always respect our mother, listen to her advice, and be thankful for her love. Thank you.',
      uk: 'Привіт, як у вас справи? Сьогодні я хочу розповісти про свою матір. Матір — найдобріша й найтурботливіша людина в нашому житті. Вона жертвує власним комфортом заради нашого щастя і працює вдень і вночі заради нас. Моя матір вчить мене гарних манер, терпіння та доброти. Коли мені сумно чи важко, вона дає мені сили та надію. Материнська любов чиста й безумовна. Ми ніколи не зможемо віддячити за її жертви. Тому ми завжди повинні поважати свою матір, прислухатися до її порад і бути вдячними за її любов. Дякую.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does a mother sacrifice for her children\'s happiness?', uk: 'Що, за текстом, матір жертвує заради щастя своїх дітей?' },
        options: [
          { en: 'Her career', uk: 'Свою карʼєру' },
          { en: 'Her comfort', uk: 'Свій комфорт' },
          { en: 'Her friendships', uk: 'Свою дружбу' },
        ],
        correct: 1,
        explain: { en: 'The text says a mother sacrifices her comfort for our happiness and works day and night for us.', uk: 'У тексті сказано, що матір жертвує власним комфортом заради нашого щастя і працює вдень і вночі заради нас.' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the text describe a mother\'s love?', uk: 'Як у тексті описано материнську любов?' },
        options: [
          { en: 'Distant and formal', uk: 'Відсторонену й формальну' },
          { en: 'Conditional and occasional', uk: 'Умовну й нечасту' },
          { en: 'Pure and unconditional', uk: 'Чисту й безумовну' },
        ],
        correct: 2,
        explain: { en: 'The text states that a mother\'s love is pure and unconditional.', uk: 'У тексті сказано, що материнська любов чиста й безумовна.' },
      },
      {
        kind: 'open',
        q: { en: 'In what ways can we show gratitude to our mothers for their sacrifices?', uk: 'Як ми можемо показати вдячність своїм матерям за їхні жертви?' },
        sample: { en: 'We can show gratitude by respecting her, listening to her advice, helping with daily tasks, and simply telling her how much we appreciate everything she does for us.', uk: 'Ми можемо показати вдячність, поважаючи матір, прислухаючись до її порад, допомагаючи в повсякденних справах і просто кажучи їй, як цінуємо все, що вона для нас робить.' },
      },
    ],
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
  },
  {
    id: 'home',
    title: { en: 'Home', uk: 'Дім' },
    category: 'family',
    level: 'a2',
    minutes: 1,
    topics: ['home', 'family', 'comfort'],
    body: {
      en: 'Home is the place where we feel safe, loved, and accepted. It is where our day begins and ends with comfort and peace. At home, we share laughter, food, and memories with our family. Home teaches us values, respect, and care for others. Even when life becomes difficult, home gives us strength and calmness. No matter where we go, home always remains in our hearts as our true shelter.',
      uk: 'Дім — це місце, де ми почуваємося в безпеці, коханими і прийнятими. Тут починається і закінчується наш день, сповнений затишку та спокою. Удома ми ділимося сміхом, їжею і спогадами зі своєю родиною. Дім вчить нас цінностей, поваги і турботи про інших. Навіть коли в житті стає важко, дім дає нам сили та спокій. Хоч би куди ми поїхали, дім завжди залишається в наших серцях як справжній прихисток.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what do we share with our family at home?', uk: 'Що, за текстом, ми поділяємо з родиною вдома?' },
        options: [
          { en: 'Money and business plans', uk: 'Гроші та бізнес-плани' },
          { en: 'Homework and exams', uk: 'Домашні завдання та іспити' },
          { en: 'Laughter, food, and memories', uk: 'Сміх, їжу і спогади' },
        ],
        correct: 2,
        explain: { en: 'The text says that at home, we share laughter, food, and memories with our family.', uk: 'У тексті сказано, що вдома ми ділимося сміхом, їжею і спогадами з родиною.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say home gives us, even when life becomes difficult?', uk: 'Що, за текстом, дає нам дім, навіть коли в житті стає важко?' },
        options: [
          { en: 'Strength and calmness', uk: 'Сили та спокій' },
          { en: 'Money and fame', uk: 'Гроші та славу' },
          { en: 'New friends', uk: 'Нових друзів' },
        ],
        correct: 0,
        explain: { en: 'The text says that even when life becomes difficult, home gives us strength and calmness.', uk: 'У тексті сказано, що навіть коли в житті стає важко, дім дає нам сили та спокій.' },
      },
      {
        kind: 'open',
        q: { en: 'What makes a place feel like "home" to you?', uk: 'Що для вас робить місце «домом»?' },
        sample: { en: 'For me, a place feels like home when I feel safe and comfortable with the people around me, regardless of the size or location of the house.', uk: 'Для мене місце стає домом тоді, коли я почуваюся в безпеці та затишку поруч із близькими людьми, незалежно від розміру чи розташування будинку.' },
      },
    ],
  },
];
