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
];
