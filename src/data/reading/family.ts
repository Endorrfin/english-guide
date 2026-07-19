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
];
