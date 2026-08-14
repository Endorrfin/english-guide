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
  {
    id: 'business',
    title: { en: 'Business', uk: 'Бізнес' },
    category: 'work',
    level: 'b1',
    minutes: 1,
    topics: ['business', 'economy', 'honesty'],
    body: {
      en: 'Business is an important part of modern life. It involves buying and selling goods or services to earn money. A good business provides income and creates job opportunities for others. Business requires hard work, planning, and smart decisions. Honesty and good communication are very important for success in business. A successful businessman understands the needs of customers and works to satisfy them. Business also helps in the growth of the economy. However, it takes patience and effort to build a strong business. Therefore, with dedication, honesty, and good planning, anyone can succeed in business.',
      uk: 'Бізнес — важлива частина сучасного життя. Він передбачає купівлю та продаж товарів чи послуг заради заробітку. Хороший бізнес дає дохід і створює робочі місця для інших. Бізнес потребує наполегливої праці, планування й розумних рішень. Чесність і хороше спілкування дуже важливі для успіху в бізнесі. Успішний підприємець розуміє потреби клієнтів і працює, щоб їх задовольнити. Бізнес також сприяє зростанню економіки. Однак побудова сильного бізнесу потребує терпіння й зусиль. Тому з відданістю, чесністю й хорошим плануванням будь-хто може досягти успіху в бізнесі.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does a good business provide, according to the text?', uk: 'Що дає хороший бізнес, за текстом?' },
        options: [
          { en: 'Income and job opportunities for others', uk: 'Дохід і робочі місця для інших' },
          { en: 'Only problems', uk: 'Лише проблеми' },
          { en: 'Money without any effort', uk: 'Гроші без жодних зусиль' },
        ],
        correct: 0,
        explain: { en: '“A good business provides income and creates job opportunities for others.”', uk: '«…provides income and creates job opportunities for others.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is very important for success in business, according to the text?', uk: 'Що дуже важливе для успіху в бізнесі, за текстом?' },
        options: [
          { en: 'Honesty and good communication', uk: 'Чесність і хороше спілкування' },
          { en: 'Luck only', uk: 'Лише удача' },
          { en: 'Ignoring customers', uk: 'Ігнорування клієнтів' },
        ],
        correct: 0,
        explain: { en: '“Honesty and good communication are very important for success in business.”', uk: '«Honesty and good communication are very important for success in business.»' },
      },
      {
        kind: 'open',
        q: { en: 'If you started a small business, what would it be, and how would you keep customers happy?', uk: 'Якби ви відкрили невеликий бізнес, який саме, і як би ви робили клієнтів задоволеними?' },
        sample: { en: 'Answers will vary. A good answer names a business idea and one concrete way to understand and satisfy customer needs.', uk: 'Відповіді різнитимуться. Гарна відповідь називає ідею бізнесу й один конкретний спосіб зрозуміти й задовольнити потреби клієнтів.' },
      },
    ],
  },
  {
    id: 'understanding-salary',
    title: { en: 'Understanding Salary', uk: 'Розуміння зарплати' },
    category: 'work',
    level: 'b1',
    minutes: 1,
    topics: ['salary', 'money', 'finance'],
    body: {
      en: 'Salary is the money a person receives for the work they do. It is an important part of life because it helps us meet our needs such as food, education, and shelter. Understanding salary means knowing how to earn, manage, and use money wisely. When people work hard and improve their skills, they can earn a better salary. It is also important to save some part of the salary for the future. Good financial planning helps people live a stable and comfortable life. A salary is not only about money; it is also a reward for dedication and effort. Therefore, we should work honestly, improve our abilities, and manage our salary wisely.',
      uk: 'Зарплата — це гроші, які людина отримує за свою роботу. Це важлива частина життя, бо вона допомагає задовольняти наші потреби, як-от їжа, освіта й житло. Розуміти зарплату означає знати, як заробляти, розпоряджатися й розумно використовувати гроші. Коли люди наполегливо працюють і покращують свої навички, вони можуть заробляти кращу зарплату. Також важливо відкладати частину зарплати на майбутнє. Хороше фінансове планування допомагає людям жити стабільно й комфортно. Зарплата — це не лише про гроші; це також винагорода за відданість і зусилля. Тому ми маємо працювати чесно, покращувати свої здібності й розумно розпоряджатися зарплатою.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does understanding salary mean, according to the text?', uk: 'Що означає розуміти зарплату, за текстом?' },
        options: [
          { en: 'Knowing how to earn, manage, and use money wisely', uk: 'Знати, як заробляти, розпоряджатися й розумно використовувати гроші' },
          { en: 'Spending everything immediately', uk: 'Одразу витрачати все' },
          { en: 'Never working', uk: 'Ніколи не працювати' },
        ],
        correct: 0,
        explain: { en: '“Understanding salary means knowing how to earn, manage, and use money wisely.”', uk: '«…knowing how to earn, manage, and use money wisely.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why is it important to save part of the salary, according to the text?', uk: 'Чому, за текстом, важливо відкладати частину зарплати?' },
        options: [
          { en: 'Good financial planning helps people live a stable, comfortable life', uk: 'Хороше фінансове планування допомагає жити стабільно й комфортно' },
          { en: 'Saving is never useful', uk: 'Заощадження ніколи не корисні' },
          { en: 'To avoid working hard', uk: 'Щоб не працювати наполегливо' },
        ],
        correct: 0,
        explain: { en: '“Good financial planning helps people live a stable and comfortable life.”', uk: '«Good financial planning helps people live a stable and comfortable life.»' },
      },
      {
        kind: 'open',
        q: { en: 'The text suggests saving part of your salary. What is one saving habit you use or could start?', uk: 'Текст радить відкладати частину зарплати. Яку одну звичку заощадження ви маєте або могли б почати?' },
        sample: { en: 'Answers will vary — e.g., saving a fixed percentage each month, an automatic transfer, a small emergency fund, budgeting.', uk: 'Відповіді різнитимуться — напр., відкладати фіксований відсоток щомісяця, автоматичний переказ, невеликий резервний фонд, бюджетування.' },
      },
    ],
  },
  {
    id: 'dream-job',
    title: { en: 'Dream Job', uk: 'Робота мрії' },
    category: 'work',
    level: 'a2',
    minutes: 2,
    topics: ['career', 'dreams', 'work'],
    body: {
      en: [
        'Hello! Today we are going to talk about dream jobs. A dream job is a job that people really want. Everyone has a different dream job. Some people want to be doctors. Some people want to be teachers. Some people want to be artists or engineers.',
        'A dream job is not only about money. It is about doing something you love. People feel happy when they work in their dream job. They like to help others, create new things, or solve problems. For example, some people want to be doctors. They want to help sick people and save lives. Some people want to be teachers. They want to teach children and help them learn new things. Some people want to be artists. They want to draw, paint, or make music.',
        'A dream job is different for everyone. Some people want to work at home. Some people want to travel. Some people want to work with animals. All dream jobs are special because they make people excited.',
        'Getting a dream job is not always easy. People must study, practice, and work hard. But if you follow your dream, you can be happy every day. A dream job is not only work. It is fun, learning, and helping others. In the end, a dream job is the job that makes your life better. It is the job that makes you proud. Everyone can try to find their dream job and make it real!',
      ].join('\n\n'),
      uk: [
        'Привіт! Сьогодні ми поговоримо про роботу мрії. Робота мрії — це робота, якої люди дуже хочуть. У кожного своя робота мрії. Одні хочуть бути лікарями. Інші хочуть бути вчителями. Дехто хоче бути художниками чи інженерами.',
        'Робота мрії — це не лише про гроші. Це про те, щоб робити те, що любиш. Люди почуваються щасливими, коли працюють на роботі мрії. Вони люблять допомагати іншим, створювати нове чи розвʼязувати проблеми. Наприклад, одні хочуть бути лікарями. Вони хочуть допомагати хворим і рятувати життя. Інші хочуть бути вчителями. Вони хочуть навчати дітей і допомагати їм пізнавати нове. Дехто хоче бути художниками. Вони хочуть малювати, писати картини чи створювати музику.',
        'Робота мрії в кожного різна. Одні хочуть працювати вдома. Інші хочуть подорожувати. Дехто хоче працювати з тваринами. Усі роботи мрії особливі, бо вони надихають людей.',
        'Отримати роботу мрії не завжди легко. Людям треба вчитися, практикуватися й наполегливо працювати. Але якщо ти йдеш за своєю мрією, ти можеш бути щасливим щодня. Робота мрії — це не лише робота. Це радість, навчання й допомога іншим. Зрештою, робота мрії — це робота, що робить твоє життя кращим. Це робота, якою ти пишаєшся. Кожен може спробувати знайти свою роботу мрії й втілити її!',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, a dream job is not only about money, but about…', uk: 'За текстом, робота мрії — це не лише про гроші, а про…' },
        options: [
          { en: 'doing something you love', uk: 'те, щоб робити те, що любиш' },
          { en: 'working as little as possible', uk: 'працювати якомога менше' },
          { en: 'being famous', uk: 'бути відомим' },
        ],
        correct: 0,
        explain: { en: '“A dream job is not only about money. It is about doing something you love.”', uk: '«…It is about doing something you love.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What must people do to get a dream job, according to the text?', uk: 'Що людям треба робити, щоб отримати роботу мрії, за текстом?' },
        options: [
          { en: 'Study, practice, and work hard', uk: 'Вчитися, практикуватися й наполегливо працювати' },
          { en: 'Wait and do nothing', uk: 'Чекати й нічого не робити' },
          { en: 'Only be lucky', uk: 'Лише бути щасливчиком' },
        ],
        correct: 0,
        explain: { en: '“People must study, practice, and work hard.”', uk: '«People must study, practice, and work hard.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is your dream job, and what do you like about it?', uk: 'Яка ваша робота мрії і що вам у ній подобається?' },
        sample: { en: 'Answers will vary. A good answer names a specific job and a concrete reason (helping people, creating, solving problems).', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну роботу й конкретну причину (допомагати людям, творити, розвʼязувати проблеми).' },
      },
    ],
  },
  {
    id: 'judge',
    title: { en: 'Judge', uk: 'Суддя' },
    category: 'work',
    level: 'b1',
    minutes: 1,
    topics: ['professions', 'justice', 'fairness'],
    body: {
      en: 'A judge is an important person in the legal system. A judge listens carefully to both sides of a case and makes fair decisions according to the law. The main duty of a judge is to provide justice and protect people’s rights. A good judge must be honest, wise, and patient. Judges work in courts and handle different types of cases, such as criminal and civil cases. They make sure that laws are followed properly. A judge should not show favoritism and must treat everyone equally. Justice brings peace to society. Therefore, the role of a judge is very important for maintaining fairness and order in the community.',
      uk: 'Суддя — важлива людина в правовій системі. Суддя уважно вислуховує обидві сторони справи й ухвалює справедливі рішення відповідно до закону. Головний обовʼязок судді — забезпечувати правосуддя й захищати права людей. Хороший суддя має бути чесним, мудрим і терплячим. Судді працюють у судах і розглядають різні типи справ, як-от кримінальні й цивільні. Вони стежать, щоб закони дотримувалися належно. Суддя не повинен виявляти упередженості й має ставитися до всіх однаково. Правосуддя приносить мир суспільству. Тому роль судді дуже важлива для підтримання справедливості й порядку в громаді.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What is the main duty of a judge, according to the text?', uk: 'Який головний обовʼязок судді, за текстом?' },
        options: [
          { en: 'To provide justice and protect people’s rights', uk: 'Забезпечувати правосуддя й захищати права людей' },
          { en: 'To favor one side', uk: 'Підтримувати одну сторону' },
          { en: 'To make laws', uk: 'Створювати закони' },
        ],
        correct: 0,
        explain: { en: '“The main duty of a judge is to provide justice and protect people’s rights.”', uk: '«…to provide justice and protect people’s rights.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How must a judge treat everyone, according to the text?', uk: 'Як суддя має ставитися до всіх, за текстом?' },
        options: [
          { en: 'Equally, without favoritism', uk: 'Однаково, без упередженості' },
          { en: 'Based on who they know', uk: 'Залежно від знайомств' },
          { en: 'However they feel that day', uk: 'Як їм заманеться того дня' },
        ],
        correct: 0,
        explain: { en: '“A judge should not show favoritism and must treat everyone equally.”', uk: '«…must treat everyone equally.»' },
      },
      {
        kind: 'open',
        q: { en: 'The text says a good judge is honest, wise, and patient. Why does patience matter for a judge?', uk: 'Текст каже, що хороший суддя чесний, мудрий і терплячий. Чому терпіння важливе для судді?' },
        sample: { en: 'Answers will vary. A thoughtful answer links patience to listening carefully to both sides before deciding fairly.', uk: 'Відповіді різнитимуться. Вдумлива відповідь повʼязує терпіння з уважним вислуховуванням обох сторін перед справедливим рішенням.' },
      },
    ],
  },
  {
    id: 'teamwork',
    title: { en: 'Teamwork', uk: 'Командна робота' },
    category: 'work',
    level: 'b1',
    minutes: 1,
    topics: ['work', 'teamwork', 'cooperation'],
    seeAlso: ['leadership', 'business'],
    body: {
      en: 'Teamwork means working together with others to reach a shared goal. Working in a team has many benefits. You can share ideas and learn from other people. You often solve problems faster, because everyone helps. If you feel stuck or unsure, your teammates can support you. Different people have different skills, so together you find better solutions — and the work can be more fun and less stressful. However, teamwork also has some challenges. Sometimes it is hard to agree on one idea, and meetings can take a lot of time. A few people may not do their part, and a group can become noisy or distracting. Good communication and respect help a team enjoy the benefits and reduce the problems.',
      uk: 'Командна робота означає працювати разом з іншими задля спільної мети. Робота в команді має багато переваг. Ти можеш ділитися ідеями й учитися в інших. Часто ви швидше розвʼязуєте проблеми, бо кожен допомагає. Якщо ти зайшов у глухий кут чи вагаєшся, товариші по команді можуть підтримати. У різних людей різні навички, тож разом ви знаходите кращі рішення — а робота може бути цікавішою й менш стресовою. Проте командна робота має й труднощі. Іноді важко дійти згоди щодо однієї ідеї, а зустрічі можуть забирати багато часу. Дехто може не виконувати свою частину, а гурт може стати галасливим чи відвертати увагу. Гарне спілкування й повага допомагають команді користуватися перевагами й зменшувати проблеми.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What is one benefit of teamwork mentioned in the text?', uk: 'Яку одну перевагу командної роботи згадано в тексті?' },
        options: [
          { en: 'You can share ideas and learn from others', uk: 'Можна ділитися ідеями й учитися в інших' },
          { en: 'You never have to talk to anyone', uk: 'Ніколи не треба ні з ким говорити' },
          { en: 'You always work alone', uk: 'Ти завжди працюєш сам' },
        ],
        correct: 0,
        explain: { en: '“You can share ideas and learn from other people.”', uk: '«Ти можеш ділитися ідеями й учитися в інших.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is one challenge of teamwork mentioned in the text?', uk: 'Яку одну складність командної роботи згадано в тексті?' },
        options: [
          { en: 'It can be hard to agree on one idea', uk: 'Буває важко дійти згоди щодо однієї ідеї' },
          { en: 'Everyone always agrees instantly', uk: 'Усі завжди миттєво погоджуються' },
          { en: 'There are never any meetings', uk: 'Ніколи не буває зустрічей' },
        ],
        correct: 0,
        explain: { en: '“Sometimes it is hard to agree on one idea, and meetings can take a lot of time.”', uk: '«Іноді важко дійти згоди щодо однієї ідеї, а зустрічі можуть забирати багато часу.»' },
      },
      {
        kind: 'open',
        q: { en: 'Do you prefer working alone or in a team? Give one reason.', uk: 'Ви віддаєте перевагу роботі наодинці чи в команді? Назвіть одну причину.' },
        sample: { en: 'Answers will vary. A good answer states a clear preference and one honest reason from experience.', uk: 'Відповіді різнитимуться. Гарна відповідь чітко називає вподобання й одну щиру причину з досвіду.' },
      },
    ],
  },
  // CHANGED (Wave S2, §15 screenshot OCR): +7 texts from the "stage II text_screenshots" backlog.
  {
    id: 'government-job-vs-private-job',
    title: { en: 'Government Job vs Private Job', uk: 'Державна робота проти приватної' },
    category: 'work',
    level: 'b1',
    minutes: 2,
    topics: ['work', 'career', 'jobs'],
    body: {
      en: [
        'Government jobs are known for job security, stability and fixed working hours. They offer regular salary, pensions and other benefits. It is a good choice for those who want a peaceful and stress-free life with long-term security.',
        'Private jobs provide faster salary growth, performance based promotions and more career opportunities. It helps in learning new skills and gaining experience. It is ideal for those who are ambitious, hardworking and ready to take challenges.',
        'Both government and private jobs have their own advantages and challenges. The right choice depends on your goals, priorities and the lifestyle you want. Success comes from your hard work, dedication and continuous learning, no matter which path you choose.',
        'What is your opinion, please write in English only.',
      ].join('\n\n'),
      uk: [
        'Державна робота відома стабільністю, гарантією зайнятості та фіксованим графіком. Вона пропонує регулярну зарплату, пенсію та інші пільги. Це гарний вибір для тих, хто хоче спокійного, безстресового життя з довготривалою стабільністю.',
        'Приватна робота забезпечує швидше зростання зарплати, підвищення на основі результатів роботи й більше карʼєрних можливостей. Вона допомагає опановувати нові навички й здобувати досвід. Це ідеальний варіант для тих, хто амбітний, працьовитий і готовий братися за виклики.',
        'І державна, і приватна робота мають свої переваги та труднощі. Правильний вибір залежить від ваших цілей, пріоритетів і бажаного способу життя. Успіх приходить завдяки тяжкій праці, відданості справі й безперервному навчанню, незалежно від того, який шлях ви обираєте.',
        'Яка ваша думка, будь ласка, пишіть лише англійською.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what do government jobs offer, besides job security and stability?', uk: 'Згідно з текстом, що пропонує державна робота, крім гарантії зайнятості та стабільності?' },
        options: [
          { en: 'Unlimited paid vacation only', uk: 'Лише необмежену оплачувану відпустку' },
          { en: 'Free housing for all employees', uk: 'Безкоштовне житло для всіх працівників' },
          { en: 'Regular salary, pensions and other benefits', uk: 'Регулярну зарплату, пенсію та інші пільги' },
        ],
        correct: 2,
        explain: { en: 'The text says government jobs \'offer regular salary, pensions and other benefits.\'', uk: 'У тексті сказано, що державна робота «пропонує регулярну зарплату, пенсію та інші пільги».' },
      },
      {
        kind: 'mcq',
        q: { en: 'Per the text, who are private jobs ideal for?', uk: 'За текстом, для кого ідеально підходить приватна робота?' },
        options: [
          { en: 'Only people who dislike responsibility', uk: 'Лише для тих, хто уникає відповідальності' },
          { en: 'Those who are ambitious, hardworking and ready to take challenges', uk: 'Для тих, хто амбітний, працьовитий і готовий братися за виклики' },
          { en: 'Only people close to retirement', uk: 'Лише для людей передпенсійного віку' },
        ],
        correct: 1,
        explain: { en: 'The text states private jobs are \'ideal for those who are ambitious, hardworking and ready to take challenges.\'', uk: 'У тексті сказано, що приватна робота — «ідеальний варіант для тих, хто амбітний, працьовитий і готовий братися за виклики».' },
      },
      {
        kind: 'open',
        q: { en: 'The text asks for your opinion on government versus private jobs. Which would you choose and why, based on your own goals and priorities?', uk: 'Текст запитує вашу думку щодо державної та приватної роботи. Який варіант обрали б ви і чому, зважаючи на власні цілі та пріоритети?' },
        sample: { en: 'I would lean toward a private job right now because I value fast growth and new challenges, but I can imagine wanting the stability of a government job later in life, once security matters more to me than speed.', uk: 'Наразі я схилявся б до приватної роботи, бо ціную швидке зростання й нові виклики, але можу уявити, що згодом захочу стабільності державної роботи, коли безпека стане для мене важливішою за швидкість.' },
      },
    ],
    source: { author: 'Learn With Sonali' },
  },
  {
    id: 'leadership-by-example',
    title: { en: 'Leadership by Example', uk: 'Лідерство власним прикладом' },
    category: 'work',
    level: 'b1',
    minutes: 2,
    topics: ['leadership', 'teamwork', 'responsibility'],
    body: {
      en: [
        'Leadership is the ability to inspire, guide and influence people to achieve a common goal. A true leader does not just give orders, but leads by example. The way a leader thinks, speaks and acts has a direct impact on his team. Good leaders take responsibility for their actions, accept their mistakes and always try to improve themselves.',
        'A leader listens to others with patience and respects their ideas. He communicates clearly, motivates his team and helps each member grow. In difficult situations, a leader stays calm, makes the right decisions and finds solutions instead of making excuses. Leadership is not about having power or a high position, it is about earning trust and confidence. It is about serving the team and working together for success.',
        'Anyone can become a good leader by developing self-discipline, confidence, honesty, integrity and a positive attitude. A leader should be hardworking, focused and always ready to learn. Great leaders create more leaders, not just followers. Real leadership is about making a positive difference in the lives of others and leaving a good legacy.',
      ].join('\n\n'),
      uk: [
        'Лідерство — це здатність надихати, спрямовувати і впливати на людей заради досягнення спільної мети. Справжній лідер не просто віддає накази, а веде за собою власним прикладом. Те, як лідер думає, говорить і діє, безпосередньо впливає на його команду. Хороші лідери беруть відповідальність за свої дії, визнають свої помилки і завжди прагнуть вдосконалюватися.',
        'Лідер терпляче вислуховує інших і поважає їхні ідеї. Він чітко висловлюється, мотивує свою команду і допомагає кожному її члену розвиватися. У складних ситуаціях лідер зберігає спокій, ухвалює правильні рішення і шукає шляхи розвʼязання проблем, а не виправдовується. Лідерство — це не про владу чи високу посаду, а про те, щоб заслужити довіру. Це про служіння команді та спільну працю заради успіху.',
        'Кожен може стати хорошим лідером, розвиваючи самодисципліну, впевненість, чесність, доброчесність і позитивний настрій. Лідер має бути працьовитим, зосередженим і завжди готовим вчитися. Великі лідери виховують нових лідерів, а не просто послідовників. Справжнє лідерство — це про те, щоб робити позитивний внесок у життя інших і залишити по собі добру спадщину.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does a true leader do instead of just giving orders?', uk: 'Що, за текстом, робить справжній лідер замість того, щоб просто віддавати накази?' },
        options: [
          { en: 'Leads by example', uk: 'Веде за собою власним прикладом' },
          { en: 'Avoids the team completely', uk: 'Повністю уникає команди' },
          { en: 'Waits for someone else to decide', uk: 'Чекає, поки рішення ухвалить хтось інший' },
        ],
        correct: 0,
        explain: { en: 'The text says a true leader does not just give orders, but leads by example.', uk: 'У тексті сказано, що справжній лідер не просто віддає накази, а веде за собою власним прикладом.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say leadership is really about?', uk: 'Про що, за текстом, насправді йдеться в лідерстві?' },
        options: [
          { en: 'Having power and a high position', uk: 'Про владу і високу посаду' },
          { en: 'Earning trust and confidence', uk: 'Про те, щоб заслужити довіру' },
          { en: 'Giving as many orders as possible', uk: 'Про те, щоб віддавати якомога більше наказів' },
        ],
        correct: 1,
        explain: { en: 'The text says leadership is not about power or position, it is about earning trust and confidence.', uk: 'У тексті сказано, що лідерство не про владу чи посаду, а про те, щоб заслужити довіру.' },
      },
      {
        kind: 'open',
        q: { en: 'Think of a leader you admire, in real life or history. Which quality from the text do they show best?', uk: 'Згадайте лідера, яким ви захоплюєтеся, — реального або з історії. Яку якість із тексту він демонструє найкраще?' },
        sample: { en: 'I admire a former teacher of mine who always stayed calm under pressure and listened patiently to students. She showed the quality of finding solutions instead of making excuses, and it made the whole class trust and respect her.', uk: 'Я захоплююся своєю колишньою вчителькою, яка завжди зберігала спокій під тиском і терпляче вислуховувала учнів. Вона демонструвала якість шукати рішення, а не виправдання, і саме тому весь клас довіряв їй і поважав її.' },
      },
    ],
    source: { author: 'Learn With Sonali' },
  },
  {
    id: 'communication-skills-matter-more-than-marks',
    title: { en: 'Why Communication Skills Matter More Than Marks', uk: 'Чому навички спілкування важливіші за оцінки' },
    category: 'work',
    level: 'b1',
    minutes: 2,
    topics: ['communication', 'career', 'soft-skills'],
    body: {
      en: [
        'Good marks are important because they help you qualify for exams, colleges, and job opportunities. However, communication skills play an even bigger role in achieving long-term success.',
        'A person with excellent communication can confidently express ideas, solve problems, work effectively in a team, and build meaningful relationships. These skills are valuable in interviews, presentations, meetings, and everyday conversations.',
        'Many talented people miss great opportunities because they struggle to communicate their knowledge clearly. On the other hand, someone with average marks but strong communication skills can leave a lasting impression, earn trust, and grow faster in both personal and professional life.',
        'Employers today look for candidates who can think clearly, listen carefully, and communicate with confidence.',
        'Communication is not only about speaking English; it is also about listening, understanding others, and expressing your thoughts respectfully. It improves confidence, leadership, and decision-making.',
        'How to Improve Communication Skills:\nRead books, newspapers, and useful articles daily.\nLearn new words and use them in sentences.\nPractice speaking every day, even if it\'s with yourself.\nListen carefully and learn from others.\nBe confident, positive, and patient.',
        'Remember: Marks may help you get an opportunity, but communication skills help you make the best use of it. Investing in your communication skills today is an investment in your future success.',
      ].join('\n\n'),
      uk: [
        'Хороші оцінки важливі, адже вони допомагають вступити на іспити, потрапити до коледжів і отримати роботу. Проте навички спілкування відіграють ще більшу роль у досягненні довготривалого успіху.',
        'Людина з відмінними комунікативними навичками може впевнено висловлювати ідеї, розвʼязувати проблеми, ефективно працювати в команді та вибудовувати змістовні стосунки. Ці навички цінні на співбесідах, презентаціях, зустрічах і в повсякденному спілкуванні.',
        'Багато талановитих людей втрачають чудові можливості, бо їм важко чітко донести свої знання. Натомість людина із середніми оцінками, але сильними навичками спілкування, може справити незабутнє враження, завоювати довіру і швидше розвиватися як в особистому, так і в професійному житті.',
        'Сучасні роботодавці шукають кандидатів, які вміють чітко мислити, уважно слухати і впевнено спілкуватися.',
        'Спілкування — це не лише вміння говорити англійською; це ще й уміння слухати, розуміти інших і шанобливо висловлювати свої думки. Воно розвиває впевненість, лідерські якості та здатність ухвалювати рішення.',
        'Як покращити навички спілкування:\nЧитайте книжки, газети та корисні статті щодня.\nВивчайте нові слова і вживайте їх у реченнях.\nТренуйте усне мовлення щодня, навіть наодинці із собою.\nУважно слухайте і вчіться в інших.\nБудьте впевненими, позитивними і терплячими.',
        'Памʼятайте: оцінки можуть відкрити вам можливість, але саме навички спілкування допомагають скористатися нею якнайкраще. Інвестиції у свої комунікативні навички сьогодні — це інвестиції у ваш майбутній успіх.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what can someone with average marks but strong communication skills do?', uk: 'Що, за текстом, може людина із середніми оцінками, але сильними навичками спілкування?' },
        options: [
          { en: 'Fail to get any job opportunities', uk: 'Не отримати жодної можливості працевлаштування' },
          { en: 'Leave a lasting impression, earn trust, and grow faster', uk: 'Справити незабутнє враження, завоювати довіру і швидше розвиватися' },
          { en: 'Avoid working in teams', uk: 'Уникати роботи в команді' },
        ],
        correct: 1,
        explain: { en: 'The text says such a person can leave a lasting impression, earn trust, and grow faster in both personal and professional life.', uk: 'У тексті сказано, що така людина може справити незабутнє враження, завоювати довіру і швидше розвиватися.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What do employers look for in candidates, according to the text?', uk: 'Що, за текстом, шукають роботодавці в кандидатах?' },
        options: [
          { en: 'Only high marks and test scores', uk: 'Лише високі оцінки й результати тестів' },
          { en: 'Candidates who never ask questions', uk: 'Кандидатів, які ніколи не ставлять запитань' },
          { en: 'People who can think clearly, listen carefully, and communicate with confidence', uk: 'Людей, які вміють чітко мислити, уважно слухати і впевнено спілкуватися' },
        ],
        correct: 2,
        explain: { en: 'The text says employers today look for candidates who can think clearly, listen carefully, and communicate with confidence.', uk: 'У тексті сказано, що сучасні роботодавці шукають кандидатів, які вміють чітко мислити, уважно слухати і впевнено спілкуватися.' },
      },
      {
        kind: 'open',
        q: { en: 'Which tip for improving communication skills from the text would you start with, and why?', uk: 'З якої поради щодо покращення навичок спілкування ви почали б і чому?' },
        sample: { en: 'I would start with practicing speaking every day, even alone, because I think speaking out loud regularly is the fastest way to become more comfortable and confident when talking to other people.', uk: 'Я почав би з щоденного тренування усного мовлення, навіть наодинці із собою, бо вважаю, що регулярне промовляння вголос — найшвидший спосіб почуватися впевненіше під час розмови з іншими людьми.' },
      },
    ],
    source: { author: 'Learn With Sonali' },
  },
  {
    id: 'teacher-life',
    title: { en: 'Teacher Life', uk: 'Життя вчителя' },
    category: 'work',
    level: 'a2',
    minutes: 1,
    topics: ['teaching', 'career', 'education'],
    body: {
      en: [
        'Teacher life is busy but very meaningful. A teacher starts the day early and prepares lessons for students.',
        'They teach different subjects and help students understand new ideas. Teachers are patient and kind, even when students make mistakes. They work hard to make learning easy and interesting. Teachers also guide students in behavior and good values. Many teachers spend extra time checking homework and planning lessons. Teaching can be tiring, but it brings happiness and pride. Teachers feel proud when students succeed and grow. Teacher life is a journey of helping others learn and become better people.',
      ].join('\n\n'),
      uk: [
        'Життя вчителя насичене, але дуже змістовне. Учитель починає день рано і готує уроки для учнів.',
        'Вчителі викладають різні предмети і допомагають учням зрозуміти нові ідеї. Вони терплячі й добрі, навіть коли учні помиляються. Вчителі старанно працюють, щоб зробити навчання легким і цікавим. Вони також скеровують учнів у поведінці й прищеплюють добрі цінності. Багато вчителів витрачають додатковий час на перевірку домашніх завдань і планування уроків. Викладання буває виснажливим, але воно приносить щастя і гордість. Вчителі пишаються, коли їхні учні досягають успіху і зростають. Життя вчителя — це шлях допомоги іншим у навчанні й становленні кращими людьми.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do teachers do besides teaching subjects, according to the text?', uk: 'Що, за текстом, роблять вчителі окрім викладання предметів?' },
        options: [
          { en: 'Guide students in behavior and good values', uk: 'Скеровують учнів у поведінці й прищеплюють добрі цінності' },
          { en: 'Only grade tests', uk: 'Лише перевіряють тести' },
          { en: 'Manage the school\'s finances', uk: 'Керують фінансами школи' },
        ],
        correct: 0,
        explain: { en: 'The text says teachers also guide students in behavior and good values.', uk: 'У тексті сказано, що вчителі також скеровують учнів у поведінці й прищеплюють добрі цінності.' },
      },
      {
        kind: 'mcq',
        q: { en: 'How do teachers feel when students succeed and grow, according to the text?', uk: 'Що відчувають вчителі, коли їхні учні досягають успіху й зростають, за текстом?' },
        options: [
          { en: 'Indifferent', uk: 'Байдужість' },
          { en: 'Proud', uk: 'Гордість' },
          { en: 'Annoyed', uk: 'Роздратування' },
        ],
        correct: 1,
        explain: { en: 'The text says teachers feel proud when students succeed and grow.', uk: 'У тексті сказано, що вчителі пишаються, коли їхні учні досягають успіху і зростають.' },
      },
      {
        kind: 'open',
        q: { en: 'What do you think is the most rewarding part of being a teacher?', uk: 'Що, на твою думку, найбільше винагороджує в роботі вчителя?' },
        sample: { en: 'I think the most rewarding part is seeing a student finally understand something they struggled with, because that moment shows your effort really made a difference.', uk: 'Гадаю, найбільше винагороджує момент, коли учень нарешті розуміє те, з чим довго боровся, адже це показує, що твої зусилля справді щось змінили.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'the-habit-of-hard-work',
    title: { en: 'The Habit of Hard Work', uk: 'Звичка наполегливої праці' },
    category: 'work',
    level: 'b1',
    minutes: 1,
    topics: ['hard-work', 'dedication', 'success'],
    body: {
      en: [
        'Hard work is a powerful habit that helps me grow and achieve my goals in life. It teaches me to stay focused and never give up, even when things are difficult. I try to give my best effort in everything I do, whether it is studying or learning new skills. Hard work helps me become stronger, more confident, and responsible. It also shows me that success comes from patience and dedication.',
        'I feel proud of myself when I work hard and see my progress. I believe that hard work will help me build a bright and successful future.',
      ].join('\n\n'),
      uk: [
        'Тяжка праця — це потужна звичка, яка допомагає мені рости й досягати життєвих цілей. Вона вчить мене залишатися зосередженим і ніколи не здаватися, навіть коли все складно. Я намагаюся докладати максимум зусиль у всьому, що роблю, — чи то в навчанні, чи в опануванні нових навичок. Тяжка праця робить мене сильнішим, впевненішим і відповідальнішим. Вона також показує мені, що успіх приходить через терпіння та відданість справі.',
        'Я пишаюся собою, коли тяжко працюю і бачу свій прогрес. Я вірю, що тяжка праця допоможе мені побудувати світле й успішне майбутнє.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does hard work teach the author?', uk: 'Згідно з текстом, чого навчає автора тяжка праця?' },
        options: [
          { en: 'To stay focused and never give up', uk: 'Залишатися зосередженим і ніколи не здаватися' },
          { en: 'To avoid difficult tasks', uk: 'Уникати складних завдань' },
          { en: 'To depend on other people', uk: 'Покладатися на інших людей' },
        ],
        correct: 0,
        explain: { en: 'The text says hard work teaches the author to stay focused and never give up, even when things are difficult.', uk: 'У тексті сказано, що тяжка праця вчить автора залишатися зосередженим і ніколи не здаватися, навіть коли все складно.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Where does the text say success comes from?', uk: 'Звідки, за текстом, приходить успіх?' },
        options: [
          { en: 'Luck and talent', uk: 'Удача і талант' },
          { en: 'Patience and dedication', uk: 'Терпіння та відданість справі' },
          { en: 'Money and connections', uk: 'Гроші і звʼязки' },
        ],
        correct: 1,
        explain: { en: 'The text states that hard work shows the author that success comes from patience and dedication.', uk: 'Текст стверджує, що тяжка праця показує авторові, що успіх приходить через терпіння та відданість справі.' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a time when hard work helped you achieve something important. How did it make you feel?', uk: 'Опиши випадок, коли тяжка праця допомогла тобі досягти чогось важливого. Що ти тоді відчував(ла)?' },
        sample: { en: 'Last year I worked hard to pass a difficult exam, studying every evening for weeks. When I finally passed, I felt proud and confident, and I realized that consistent effort really does pay off.', uk: 'Минулого року я старанно готувався до складного іспиту, навчаючись щовечора кілька тижнів поспіль. Коли я нарешті склав його, то відчув гордість і впевненість у собі й зрозумів, що постійні зусилля справді дають результат.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'getting-laid-off',
    title: { en: 'Getting Laid Off', uk: 'Звільнення з роботи' },
    category: 'work',
    level: 'b1',
    minutes: 1,
    topics: ['job-loss', 'career', 'resilience', 'change'],
    body: {
      en: [
        'Losing my job was a sad and difficult experience. I worked hard every day, but the company could not keep me. At first, I felt worried and unsure about the future. I learned to stay calm and think about my next steps.',
        'Losing a job teaches important lessons about life and work. I started looking for new opportunities and improving my skills. Friends and family supported me during this time. I used the experience to become stronger and more confident. Losing a job can be challenging, but it is not the end. With patience and effort, new chances can appear.',
      ].join('\n\n'),
      uk: [
        'Втрата роботи стала для мене сумним і важким досвідом. Я щодня наполегливо працювала, але компанія не змогла мене залишити. Спочатку я почувалася стривоженою і невпевненою в майбутньому. Я навчилася зберігати спокій і думати про свої наступні кроки.',
        'Втрата роботи вчить важливих життєвих і професійних уроків. Я почала шукати нові можливості та вдосконалювати свої навички. Друзі та родина підтримували мене в цей час. Я скористалася цим досвідом, щоб стати сильнішою і впевненішою в собі. Втрата роботи може бути випробуванням, але це не кінець. Завдяки терпінню й старанням зʼявляються нові шанси.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did the author feel right after losing the job, according to the text?', uk: 'Що відчувала авторка одразу після втрати роботи, за текстом?' },
        options: [
          { en: 'Relieved and happy', uk: 'Полегшення і радість' },
          { en: 'Worried and unsure about the future', uk: 'Тривогу і невпевненість у майбутньому' },
          { en: 'Angry at her former colleagues', uk: 'Злість на колишніх колег' },
        ],
        correct: 1,
        explain: { en: 'The text says that at first, she felt worried and unsure about the future.', uk: 'У тексті сказано, що спочатку вона почувалася стривоженою і невпевненою в майбутньому.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, who supported the author during this difficult time?', uk: 'Хто, за текстом, підтримував авторку в цей важкий час?' },
        options: [
          { en: 'Friends and family', uk: 'Друзі та родина' },
          { en: 'A career coach', uk: 'Карʼєрний коуч' },
          { en: 'Her former boss', uk: 'Її колишній начальник' },
        ],
        correct: 0,
        explain: { en: 'The text states that friends and family supported her during this time.', uk: 'У тексті сказано, що друзі та родина підтримували її в цей час.' },
      },
      {
        kind: 'open',
        q: { en: 'The author says losing a job “is not the end” and that “new chances can appear.” What next step would you take if you lost your job?', uk: 'Авторка каже, що втрата роботи «це не кінець» і що «зʼявляються нові шанси». Який наступний крок зробили б ви, якби втратили роботу?' },
        sample: { en: 'If I lost my job, I would first give myself a short time to process the disappointment, then focus on updating my resume and skills, reaching out to my network, and staying open to different kinds of opportunities. Like the author, I would lean on friends and family for support instead of facing the stress alone.', uk: 'Якби я втратила роботу, я спершу дала б собі трохи часу, щоб пережити розчарування, а потім зосередилася б на оновленні резюме й навичок, спілкуванні зі своїми контактами та відкритості до нових можливостей. Як і авторка тексту, я спиралася б на підтримку друзів і родини, а не переживала б стрес наодинці.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'taxi-driver',
    title: { en: 'Taxi Driver', uk: 'Таксист' },
    category: 'work',
    level: 'a2',
    minutes: 1,
    topics: ['work', 'transport', 'respect'],
    body: {
      en: 'Hello How are you everyone. Today I want to talk about a taxi driver. A taxi driver plays an important role in our daily life. He helps people travel safely from one place to another. Taxi drivers work long hours to earn an honest living. They face traffic, weather, and many challenges, but they remain patient and responsible. A good taxi driver is polite, helpful, and knows the roads well. We should respect taxi drivers for their hard work and service to society. Their job helps keep the city moving. Thank you.',
      uk: 'Привіт! Як у всіх справи? Сьогодні я хочу поговорити про таксиста. Таксист відіграє важливу роль у нашому повсякденному житті. Він допомагає людям безпечно дістатися з одного місця в інше. Таксисти працюють довгі години, щоб чесно заробити на життя. Вони стикаються із заторами, негодою та багатьма труднощами, але залишаються терплячими й відповідальними. Хороший таксист ввічливий, готовий допомогти і добре знає дороги. Ми маємо поважати таксистів за їхню важку працю і служіння суспільству. Їхня робота допомагає місту рухатися. Дякую за увагу.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text say a taxi driver helps people do?', uk: 'Що, за текстом, допомагає робити таксист людям?' },
        options: [
          { en: 'Travel safely from one place to another', uk: 'Безпечно діставатися з одного місця в інше' },
          { en: 'Learn how to drive', uk: 'Навчитися керувати автомобілем' },
          { en: 'Repair their cars', uk: 'Ремонтувати їхні автомобілі' },
        ],
        correct: 0,
        explain: { en: 'The text says a taxi driver helps people travel safely from one place to another.', uk: 'У тексті сказано, що таксист допомагає людям безпечно діставатися з одного місця в інше.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, what qualities does a good taxi driver have?', uk: 'За текстом, якими якостями володіє хороший таксист?' },
        options: [
          { en: 'Rich and famous', uk: 'Багатий і відомий' },
          { en: 'Polite, helpful, and knows the roads well', uk: 'Ввічливий, готовий допомогти і добре знає дороги' },
          { en: 'Fast but careless', uk: 'Швидкий, але необережний' },
        ],
        correct: 1,
        explain: { en: 'The text says a good taxi driver is polite, helpful, and knows the roads well.', uk: 'У тексті сказано, що хороший таксист ввічливий, готовий допомогти і добре знає дороги.' },
      },
      {
        kind: 'open',
        q: { en: 'Why do you think it is important to respect people who do everyday jobs, like taxi drivers?', uk: 'Як ви думаєте, чому важливо поважати людей, які виконують повсякденну роботу, як-от таксисти?' },
        sample: { en: 'Everyday workers like taxi drivers keep society running smoothly, often facing difficult conditions, so respecting their effort acknowledges the real value of their hard work.', uk: 'Такі працівники, як таксисти, забезпечують нормальне функціонування суспільства, часто працюючи в непростих умовах, тож поважати їхню працю означає визнавати її справжню цінність.' },
      },
    ],
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
  },
];
