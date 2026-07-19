import type { ReadingText } from '../types';

/*
 * Reading · category: work & career. Texts transcribed from the owner's screenshot backlog,
 * attributed per `source`.
 */
const MBE_FB = { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' };

export const workTexts: ReadingText[] = [
  {
    id: 'leadership',
    title: { en: 'Leadership', uk: 'Лідерство' },
    category: 'work',
    level: 'b1',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://mindboostenglish.com' },
    topics: ['leadership', 'teamwork', 'character'],
    body: {
      en: 'Leadership is the ability to guide and inspire others. A good leader helps people work together to achieve common goals. Leadership is not only about giving orders, but also about listening, understanding, and supporting others. A strong leader is honest, responsible, and confident. Leadership is important in school, work, and daily life. It helps teams succeed and solve problems effectively. Good leaders motivate others and bring out the best in them. Therefore, developing leadership skills is very important for personal growth and success in life.',
      uk: 'Лідерство — це здатність вести за собою й надихати інших. Хороший лідер допомагає людям працювати разом заради спільних цілей. Лідерство — це не лише про накази, а й про вміння слухати, розуміти й підтримувати інших. Сильний лідер чесний, відповідальний і впевнений. Лідерство важливе в школі, на роботі та в повсякденному житті. Воно допомагає командам досягати успіху й ефективно розвʼязувати проблеми. Хороші лідери мотивують інших і розкривають у них найкраще. Тому розвивати лідерські навички дуже важливо для особистого зростання й успіху в житті.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, leadership is not only about giving orders, but also about…', uk: 'За текстом, лідерство — це не лише про накази, а й про…' },
        options: [
          { en: 'listening, understanding, and supporting others', uk: 'слухати, розуміти й підтримувати інших' },
          { en: 'working alone', uk: 'роботу наодинці' },
          { en: 'avoiding responsibility', uk: 'уникання відповідальності' },
        ],
        correct: 0,
        explain: { en: 'Leadership is about listening, understanding, and supporting others — not only orders.', uk: 'Лідерство — це слухати, розуміти й підтримувати інших, а не лише накази.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Which three qualities describe a strong leader?', uk: 'Які три якості описують сильного лідера?' },
        options: [
          { en: 'Honest, responsible, and confident', uk: 'Чесний, відповідальний і впевнений' },
          { en: 'Loud, strict, and proud', uk: 'Гучний, суворий і гордий' },
          { en: 'Quiet, shy, and unsure', uk: 'Тихий, сором’язливий і невпевнений' },
        ],
        correct: 0,
        explain: { en: '“A strong leader is honest, responsible, and confident.”', uk: '«A strong leader is honest, responsible, and confident.»' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a good leader you know or admire. What makes them effective?', uk: 'Опишіть хорошого лідера, якого ви знаєте чи яким захоплюєтесь. Що робить його ефективним?' },
        sample: { en: 'Answers will vary. A strong answer names concrete behaviours from the text (listens, supports, is honest/responsible) and a real example.', uk: 'Відповіді різнитимуться. Сильна відповідь називає конкретну поведінку з тексту (слухає, підтримує, чесний/відповідальний) і реальний приклад.' },
      },
    ],
  },
  {
    id: 'farmer',
    title: { en: 'Farmer', uk: 'Фермер' },
    category: 'work',
    level: 'a2',
    minutes: 1,
    source: MBE_FB,
    topics: ['professions', 'agriculture', 'respect'],
    body: {
      en: 'A farmer is the backbone of our society. Farmers work hard every day to grow crops that feed the whole nation. From early morning to late evening, they take care of fields, plants, and animals. Their job requires patience, strength, and dedication. Farmers face many challenges like weather and hard labor, yet they never give up. We should respect farmers because their hard work keeps us alive and healthy.',
      uk: 'Фермер — це опора нашого суспільства. Фермери щодня тяжко працюють, щоб виростити врожай, який годує цілу націю. Від раннього ранку до пізнього вечора вони доглядають поля, рослини й тварин. Їхня праця вимагає терпіння, сили й відданості. Фермери стикаються з багатьма труднощами — погодою й важкою працею, — та все ж не здаються. Ми маємо поважати фермерів, бо їхня наполеглива праця тримає нас живими й здоровими.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why does the text say we should respect farmers?', uk: 'Чому, за текстом, ми маємо поважати фермерів?' },
        options: [
          { en: 'Their hard work keeps us alive and healthy', uk: 'Їхня праця тримає нас живими й здоровими' },
          { en: 'They earn a lot of money', uk: 'Вони заробляють багато грошей' },
          { en: 'They work only in good weather', uk: 'Вони працюють лише в гарну погоду' },
        ],
        correct: 0,
        explain: { en: '“We should respect farmers because their hard work keeps us alive and healthy.”', uk: '«…their hard work keeps us alive and healthy.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What qualities does a farmer’s job require?', uk: 'Яких якостей вимагає праця фермера?' },
        options: [
          { en: 'Patience, strength, and dedication', uk: 'Терпіння, сили й відданості' },
          { en: 'Speed and luck', uk: 'Швидкості й удачі' },
          { en: 'Silence and comfort', uk: 'Тиші й комфорту' },
        ],
        correct: 0,
        explain: { en: '“Their job requires patience, strength, and dedication.”', uk: '«Their job requires patience, strength, and dedication.»' },
      },
      {
        kind: 'open',
        q: { en: 'The text calls farmers “the backbone of our society.” What does that phrase mean?', uk: 'Текст називає фермерів «опорою суспільства». Що означає цей вислів?' },
        sample: { en: 'It means farmers support everything else: without their work growing food, the rest of society could not function or survive.', uk: 'Це означає, що фермери підтримують усе інше: без їхньої праці з вирощування їжі решта суспільства не могла б функціонувати чи вижити.' },
      },
    ],
  },
  {
    id: 'postman',
    title: { en: 'Postman', uk: 'Листоноша' },
    category: 'work',
    level: 'a2',
    minutes: 1,
    source: MBE_FB,
    topics: ['professions', 'service', 'respect'],
    body: {
      en: 'A postman is a hardworking and responsible person who connects people through letters and parcels. He works in all kinds of weather to deliver messages on time. A postman brings news, happiness, and important information to homes and offices. His job requires honesty, patience, and dedication. Although his work is simple, it is very important for society. We should respect the postman for his service and appreciate his daily efforts.',
      uk: 'Листоноша — це працьовита й відповідальна людина, яка звʼязує людей через листи й посилки. Він працює за будь-якої погоди, щоб доставити повідомлення вчасно. Листоноша приносить новини, радість і важливу інформацію до домівок та офісів. Його праця вимагає чесності, терпіння й відданості. Хоч його робота проста, вона дуже важлива для суспільства. Ми маємо поважати листоношу за його службу й цінувати його щоденні зусилля.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does a postman bring to homes and offices?', uk: 'Що листоноша приносить до домівок та офісів?' },
        options: [
          { en: 'News, happiness, and important information', uk: 'Новини, радість і важливу інформацію' },
          { en: 'Only bad news', uk: 'Лише погані новини' },
          { en: 'Food and drinks', uk: 'Їжу й напої' },
        ],
        correct: 0,
        explain: { en: '“A postman brings news, happiness, and important information to homes and offices.”', uk: '«…brings news, happiness, and important information…»' },
      },
      {
        kind: 'mcq',
        q: { en: 'In what conditions does the postman work?', uk: 'За яких умов працює листоноша?' },
        options: [
          { en: 'In all kinds of weather', uk: 'За будь-якої погоди' },
          { en: 'Only on sunny days', uk: 'Лише в сонячні дні' },
          { en: 'Only indoors', uk: 'Лише в приміщенні' },
        ],
        correct: 0,
        explain: { en: '“He works in all kinds of weather to deliver messages on time.”', uk: '«He works in all kinds of weather…»' },
      },
      {
        kind: 'open',
        q: { en: 'Name another “simple but important” job in your community and say why it matters.', uk: 'Назвіть іншу «просту, але важливу» роботу у вашій громаді й поясніть, чому вона важлива.' },
        sample: { en: 'Answers will vary. A strong answer names a role (e.g., a nurse, a bus driver, a cleaner) and explains the service it provides to others.', uk: 'Відповіді різнитимуться. Сильна відповідь називає роль (напр., медсестра, водій автобуса, прибиральник) і пояснює, яку послугу вона надає іншим.' },
      },
    ],
  },
];
