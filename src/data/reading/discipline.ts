import type { ReadingText } from '../types';

/*
 * Reading · category: discipline. Texts transcribed from the owner's screenshot backlog,
 * attributed per `source` (Never Give Up — Mind Boost English; "Work in Silence" — source not captured).
 */
export const disciplineTexts: ReadingText[] = [
  {
    id: 'work-in-silence',
    title: { en: 'Work in Silence', uk: 'Працюй мовчки' },
    category: 'discipline',
    level: 'b2',
    minutes: 2,
    topics: ['focus', 'discipline', 'success'],
    body: {
      en: [
        'You don’t need to announce your every move. Privacy is power, and silence is a strategy. Let the world think you’re doing nothing, while you’re actually building everything. The biggest mistake you can make is seeking validation before you have results. True strength is staying focused when no one is watching and no one is clapping for you.',
        'Stop talking about your dreams and start acting on them. Let your success be the noise. While others are complaining, you are climbing. While others are sleeping, you are studying. Success isn\'t about being seen; it’s about being prepared. Stay humble, stay hungry, and keep grinding. One day, your work will speak for itself.',
      ].join('\n\n'),
      uk: [
        'Не обовʼязково оголошувати кожен свій крок. Приватність — це сила, а мовчання — стратегія. Нехай світ думає, що ти нічого не робиш, поки насправді ти будуєш усе. Найбільша помилка — шукати схвалення ще до того, як маєш результати. Справжня сила — лишатися зосередженим, коли ніхто не дивиться і ніхто тобі не аплодує.',
        'Перестань говорити про свої мрії й почни діяти. Нехай твій успіх буде шумом. Поки інші скаржаться, ти піднімаєшся вгору. Поки інші сплять, ти вчишся. Успіх — не про те, щоб тебе бачили; він про те, щоб бути готовим. Залишайся скромним, залишайся голодним до цілі й продовжуй працювати. Одного дня твоя праця скаже сама за себе.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text call “the biggest mistake”?', uk: 'Що текст називає «найбільшою помилкою»?' },
        options: [
          { en: 'Seeking validation before you have results', uk: 'Шукати схвалення ще до результатів' },
          { en: 'Working too hard', uk: 'Працювати надто багато' },
          { en: 'Staying silent', uk: 'Мовчати' },
        ],
        correct: 0,
        explain: { en: '“The biggest mistake you can make is seeking validation before you have results.”', uk: '«…seeking validation before you have results.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, success is mostly about…', uk: 'За текстом, успіх здебільшого про…' },
        options: [
          { en: 'being prepared', uk: 'бути готовим' },
          { en: 'being seen', uk: 'бути поміченим' },
          { en: 'being lucky', uk: 'мати удачу' },
        ],
        correct: 0,
        explain: { en: '“Success isn’t about being seen; it’s about being prepared.”', uk: '«Success isn’t about being seen; it’s about being prepared.»' },
      },
      {
        kind: 'open',
        q: { en: 'Do you agree that “silence is a strategy”? Give one reason for your view.', uk: 'Чи згодні ви, що «мовчання — це стратегія»? Наведіть одну причину.' },
        sample: { en: 'Answers will vary. A thoughtful answer takes a side and gives a reason — e.g., quiet focus avoids pressure and lets results speak; or sharing goals can create healthy accountability.', uk: 'Відповіді різнитимуться. Вдумлива відповідь обирає позицію й дає причину — напр., тиха зосередженість знімає тиск і дає результатам говорити; або ж озвучення цілей створює корисну відповідальність.' },
      },
    ],
  },
  {
    id: 'never-give-up',
    title: { en: 'Never Give Up', uk: 'Ніколи не здавайся' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://mindboostenglish.com' },
    topics: ['persistence', 'resilience', 'success'],
    body: {
      en: 'Never giving up is the secret to success and strength in life. Life is full of challenges, failures, and hard times, but giving up only stops progress. Every successful person has faced difficulties and kept moving forward. When we never give up, we learn from mistakes and grow stronger. Persistence builds confidence and courage. Even small steps taken with determination matter. There will be moments of doubt, but patience and belief keep us going. Hard work and consistency turn failure into success. Remember, quitting is easy, but staying strong brings rewards. Never give up on your dreams, because perseverance turns obstacles into opportunities and effort into achievement.',
      uk: 'Не здаватися — це секрет успіху й сили в житті. Життя сповнене викликів, невдач і важких часів, але здатися — означає лише спинити поступ. Кожна успішна людина стикалася з труднощами й продовжувала рухатися вперед. Коли ми не здаємося, ми вчимося на помилках і стаємо сильнішими. Наполегливість будує впевненість і сміливість. Навіть маленькі кроки, зроблені з рішучістю, мають значення. Будуть моменти сумніву, але терпіння й віра ведуть нас далі. Наполеглива праця й послідовність перетворюють невдачу на успіх. Памʼятай: здатися легко, але лишатися сильним приносить нагороди. Ніколи не здавайся на своїх мріях, бо наполегливість перетворює перешкоди на можливості, а зусилля — на досягнення.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does giving up do?', uk: 'За текстом, до чого призводить здатися?' },
        options: [
          { en: 'It only stops progress', uk: 'Воно лише спиняє поступ' },
          { en: 'It guarantees success', uk: 'Воно гарантує успіх' },
          { en: 'It builds confidence', uk: 'Воно будує впевненість' },
        ],
        correct: 0,
        explain: { en: '“…but giving up only stops progress.”', uk: '«…but giving up only stops progress.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What turns failure into success, according to the text?', uk: 'Що, за текстом, перетворює невдачу на успіх?' },
        options: [
          { en: 'Hard work and consistency', uk: 'Наполеглива праця й послідовність' },
          { en: 'Luck and talent only', uk: 'Лише удача й талант' },
          { en: 'Quitting early', uk: 'Ранній відступ' },
        ],
        correct: 0,
        explain: { en: '“Hard work and consistency turn failure into success.”', uk: '«Hard work and consistency turn failure into success.»' },
      },
      {
        kind: 'open',
        q: { en: 'Think of a time you kept going despite difficulty. What helped you not give up?', uk: 'Згадайте випадок, коли ви не спинилися попри труднощі. Що допомогло не здатися?' },
        sample: { en: 'Answers will vary. A strong answer describes a real situation and names a factor from the text (patience, belief, small steps, consistency).', uk: 'Відповіді різнитимуться. Сильна відповідь описує реальну ситуацію й називає чинник із тексту (терпіння, віра, маленькі кроки, послідовність).' },
      },
    ],
  },
  {
    id: 'build-your-future',
    title: { en: 'Build Your Future', uk: 'Будуй своє майбутнє' },
    category: 'discipline',
    level: 'b1',
    minutes: 2,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['future', 'habits', 'discipline'],
    body: {
      en: [
        'Your future does not happen by chance—it is built by the choices you make every single day. The habits you develop, the time you invest, and the effort you put in all shape the life you will live tomorrow.',
        'Many people focus too much on quick results and forget the importance of long-term growth. Real success takes time, patience, and dedication. Every positive action you take today is a step toward a better future.',
        'It is important to use your time wisely. Avoid wasting energy on things that do not help you grow. Instead, focus on learning new skills, improving yourself, and working toward your goals. Discipline plays a big role in building a strong future.',
        'There will be challenges and moments of doubt, but do not let them stop you. Stay committed to your vision and keep pushing forward, even when progress feels slow.',
        'One day, you will see the results of your efforts. The life you dream of will become your reality. So start today, stay consistent, and build a future that you will be proud of.',
      ].join('\n\n'),
      uk: [
        'Твоє майбутнє не стається випадково — воно будується з виборів, які ти робиш щодня. Звички, які ти виробляєш, час, який ти вкладаєш, і зусилля, які докладаєш, — усе це формує життя, яким ти житимеш завтра.',
        'Багато людей надто зосереджуються на швидких результатах і забувають про важливість довготривалого зростання. Справжній успіх потребує часу, терпіння й відданості. Кожна позитивна дія, яку ти робиш сьогодні, — це крок до кращого майбутнього.',
        'Важливо мудро використовувати свій час. Уникай марнування енергії на те, що не допомагає тобі зростати. Натомість зосередься на опануванні нових навичок, самовдосконаленні й роботі над своїми цілями. Дисципліна відіграє велику роль у побудові міцного майбутнього.',
        'Будуть виклики й моменти сумніву, але не дай їм спинити тебе. Лишайся вірним своєму баченню й продовжуй рухатися вперед, навіть коли поступ здається повільним.',
        'Одного дня ти побачиш результати своїх зусиль. Життя, про яке ти мрієш, стане твоєю реальністю. Тож почни сьогодні, будь послідовним і будуй майбутнє, яким пишатимешся.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, how is your future built?', uk: 'За текстом, як будується твоє майбутнє?' },
        options: [
          { en: 'By the choices you make every single day', uk: 'З виборів, які ти робиш щодня' },
          { en: 'Purely by chance', uk: 'Суто випадково' },
          { en: 'By other people', uk: 'Іншими людьми' },
        ],
        correct: 0,
        explain: { en: '“Your future does not happen by chance—it is built by the choices you make every single day.”', uk: '«…it is built by the choices you make every single day.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does real success take, according to the text?', uk: 'Чого, за текстом, потребує справжній успіх?' },
        options: [
          { en: 'Time, patience, and dedication', uk: 'Часу, терпіння й відданості' },
          { en: 'Only quick results', uk: 'Лише швидких результатів' },
          { en: 'Luck alone', uk: 'Лише удачі' },
        ],
        correct: 0,
        explain: { en: '“Real success takes time, patience, and dedication.”', uk: '«Real success takes time, patience, and dedication.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name one habit you could start today that would shape a better future for you.', uk: 'Назвіть одну звичку, яку ви могли б почати сьогодні й яка сформувала б вам краще майбутнє.' },
        sample: { en: 'Answers will vary. A good answer names one small, repeatable habit (e.g., 30 minutes of study, daily exercise) and the future goal it supports.', uk: 'Відповіді різнитимуться. Гарна відповідь називає одну маленьку повторювану звичку (напр., 30 хв навчання, щоденні вправи) і ціль у майбутньому, якій вона слугує.' },
      },
    ],
  },
  {
    id: 'never-quit',
    title: { en: 'Never Quit', uk: 'Ніколи не кидай' },
    category: 'discipline',
    level: 'b1',
    minutes: 2,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['perseverance', 'resilience', 'goals'],
    body: {
      en: [
        'There are moments in life when everything feels difficult. You try, you work hard, but the results don’t come as expected. In those moments, quitting may seem like the easiest option. But that is exactly when you must stay strong.',
        'Success is not about never facing struggles; it is about refusing to give up when challenges appear. Every obstacle you face is building your strength and preparing you for something greater. The journey may be slow, but every step is taking you closer to your goal.',
        'Remember why you started. Your dreams are worth the effort, and your future depends on your determination today. Even if progress feels small, it is still progress.',
        'Surround yourself with positive energy and people who believe in you. Stay focused, keep learning, and continue moving forward with patience and discipline.',
        'One day, all your hard work will pay off. You will look back and be thankful that you didn’t quit when things were tough. So keep going, stay strong, and never give up on what truly matters to you.',
      ].join('\n\n'),
      uk: [
        'У житті бувають моменти, коли все здається важким. Ти намагаєшся, тяжко працюєш, але результати не приходять, як очікувалося. У такі моменти здатися може здаватися найлегшим варіантом. Але саме тоді треба лишатися сильним.',
        'Успіх — це не про те, щоб ніколи не стикатися з труднощами; це про те, щоб відмовлятися здаватися, коли зʼявляються виклики. Кожна перешкода, з якою ти стикаєшся, будує твою силу й готує тебе до чогось більшого. Шлях може бути повільним, але кожен крок наближає тебе до мети.',
        'Памʼятай, чому ти почав. Твої мрії варті зусиль, а твоє майбутнє залежить від твоєї рішучості сьогодні. Навіть якщо поступ здається малим, це все одно поступ.',
        'Оточуй себе позитивною енергією та людьми, які в тебе вірять. Лишайся зосередженим, продовжуй учитися й рухайся вперед із терпінням і дисципліною.',
        'Одного дня вся твоя наполеглива праця окупиться. Ти озирнешся й будеш вдячним, що не кинув, коли було важко. Тож продовжуй, лишайся сильним і ніколи не здавайся на тому, що справді важливе для тебе.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, success is about…', uk: 'За текстом, успіх — це про…' },
        options: [
          { en: 'refusing to give up when challenges appear', uk: 'відмову здаватися, коли зʼявляються виклики' },
          { en: 'never facing any struggles', uk: 'те, щоб ніколи не стикатися з труднощами' },
          { en: 'quitting early to save energy', uk: 'ранній відступ, щоб зберегти сили' },
        ],
        correct: 0,
        explain: { en: '“Success is not about never facing struggles; it is about refusing to give up when challenges appear.”', uk: '«…refusing to give up when challenges appear.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say every obstacle does?', uk: 'Що, за текстом, робить кожна перешкода?' },
        options: [
          { en: 'Builds your strength and prepares you for something greater', uk: 'Будує твою силу й готує тебе до чогось більшого' },
          { en: 'Proves you should stop', uk: 'Доводить, що треба спинитися' },
          { en: 'Means you chose the wrong goal', uk: 'Означає, що ти обрав не ту ціль' },
        ],
        correct: 0,
        explain: { en: '“Every obstacle you face is building your strength and preparing you for something greater.”', uk: '«…building your strength and preparing you for something greater.»' },
      },
      {
        kind: 'open',
        q: { en: 'The text says “remember why you started.” What is a goal worth not quitting on for you?', uk: 'Текст каже «памʼятай, чому ти почав». Яка ціль варта того, щоб не кидати її, для вас?' },
        sample: { en: 'Answers will vary. A strong answer names a personal goal and a concrete reason it is worth the continued effort.', uk: 'Відповіді різнитимуться. Сильна відповідь називає особисту ціль і конкретну причину, чому вона варта подальших зусиль.' },
      },
    ],
  },
  {
    id: 'small-steps-big-change',
    title: { en: 'Small Steps, Big Change', uk: 'Маленькі кроки — велика зміна' },
    category: 'discipline',
    level: 'b1',
    minutes: 2,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['consistency', 'habits', 'progress'],
    body: {
      en: [
        'Many people believe that success requires big actions and sudden changes, but the truth is, real success is built through small, consistent steps. You don’t need to have everything figured out to begin. What matters most is that you start.',
        'Each small effort you make adds up over time. Reading a few pages, learning a new skill, or improving yourself little by little can create powerful results in the future. The key is consistency, not perfection.',
        'Sometimes you may feel like your efforts are too small to make a difference, but never underestimate the power of progress. Even the biggest achievements are made up of tiny steps repeated daily.',
        'Do not be afraid to start small. Focus on what you can do today instead of worrying about tomorrow. Stay committed, stay patient, and trust the process.',
        'One day, you will look back and realize that those small steps led you to something great. Keep going, keep growing, and never stop believing in your journey.',
      ].join('\n\n'),
      uk: [
        'Багато людей вважають, що успіх потребує великих дій і раптових змін, але правда в тому, що справжній успіх будується через маленькі послідовні кроки. Тобі не потрібно мати все розплановане, щоб почати. Найважливіше — це те, що ти починаєш.',
        'Кожне маленьке зусилля, яке ти докладаєш, накопичується з часом. Прочитати кілька сторінок, опанувати нову навичку чи покращувати себе потрохи — усе це може створити потужні результати в майбутньому. Ключ — це послідовність, а не досконалість.',
        'Іноді тобі може здаватися, що твої зусилля надто малі, щоб щось змінити, але ніколи не недооцінюй силу поступу. Навіть найбільші досягнення складаються з крихітних кроків, повторюваних щодня.',
        'Не бійся починати з малого. Зосередься на тому, що можеш зробити сьогодні, замість того щоб хвилюватися про завтра. Лишайся відданим, лишайся терплячим і довіряй процесу.',
        'Одного дня ти озирнешся й зрозумієш, що ці маленькі кроки привели тебе до чогось великого. Продовжуй, зростай і ніколи не переставай вірити у свій шлях.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How is real success built, according to the text?', uk: 'Як, за текстом, будується справжній успіх?' },
        options: [
          { en: 'Through small, consistent steps', uk: 'Через маленькі послідовні кроки' },
          { en: 'Only through big, sudden changes', uk: 'Лише через великі раптові зміни' },
          { en: 'By waiting for the perfect plan', uk: 'Очікуванням ідеального плану' },
        ],
        correct: 0,
        explain: { en: '“Real success is built through small, consistent steps.”', uk: '«…real success is built through small, consistent steps.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text call “the key”?', uk: 'Що текст називає «ключем»?' },
        options: [
          { en: 'Consistency, not perfection', uk: 'Послідовність, а не досконалість' },
          { en: 'Perfection, not consistency', uk: 'Досконалість, а не послідовність' },
          { en: 'Speed', uk: 'Швидкість' },
        ],
        correct: 0,
        explain: { en: '“The key is consistency, not perfection.”', uk: '«The key is consistency, not perfection.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one “tiny step” you could repeat daily toward a bigger goal?', uk: 'Який один «крихітний крок» ви могли б повторювати щодня заради більшої цілі?' },
        sample: { en: 'Answers will vary. A good answer names a specific daily action (e.g., ten new words a day) and the bigger goal it builds toward.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну щоденну дію (напр., десять нових слів на день) і більшу ціль, до якої вона веде.' },
      },
    ],
  },
  {
    id: 'stay-focused',
    title: { en: 'Stay Focused', uk: 'Залишайся зосередженим' },
    category: 'discipline',
    level: 'b2',
    minutes: 2,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['focus', 'discipline', 'goals'],
    body: {
      en: [
        'In today’s world, it is easy to get distracted. Social media, negativity, and daily problems can pull your attention away from your goals. But if you want to achieve something meaningful, you must learn to stay focused.',
        'Focus is what turns ordinary effort into extraordinary results. When you give your full attention to your goals, you make faster progress and avoid wasting time on things that do not matter. It is not about working harder all the time—it is about working smarter and staying consistent.',
        'Set clear goals for yourself and remind yourself of them every day. When you feel distracted, take a moment to refocus and get back on track. Discipline is more important than motivation, because motivation comes and goes, but discipline keeps you moving forward.',
        'There will always be noise around you, but you must learn to ignore it. Protect your energy and surround yourself with positivity. Stay committed to your journey, even when it gets difficult. In the end, your focus will determine your success. Keep your vision clear, stay dedicated, and never lose sight of what you truly want in life.',
      ].join('\n\n'),
      uk: [
        'У сучасному світі легко відволіктися. Соціальні мережі, негатив і щоденні проблеми можуть відвертати твою увагу від цілей. Але якщо ти хочеш досягти чогось значущого, треба навчитися лишатися зосередженим.',
        'Зосередженість — це те, що перетворює звичайне зусилля на надзвичайні результати. Коли ти віддаєш усю увагу своїм цілям, ти рухаєшся швидше й уникаєш марнування часу на те, що не має значення. Річ не в тім, щоб постійно працювати важче, — а в тім, щоб працювати розумніше й лишатися послідовним.',
        'Постав собі чіткі цілі й нагадуй собі про них щодня. Коли відчуваєш, що відволікаєшся, зроби паузу, щоб зосередитися знову й повернутися на шлях. Дисципліна важливіша за мотивацію, бо мотивація приходить і йде, а дисципліна веде тебе вперед.',
        'Навколо тебе завжди буде шум, але треба навчитися його ігнорувати. Бережи свою енергію й оточуй себе позитивом. Лишайся вірним своєму шляху, навіть коли стає важко. Зрештою, саме твоя зосередженість визначить твій успіх. Тримай своє бачення чітким, будь відданим і ніколи не втрачай із поля зору того, чого справді прагнеш у житті.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what turns ordinary effort into extraordinary results?', uk: 'Що, за текстом, перетворює звичайне зусилля на надзвичайні результати?' },
        options: [
          { en: 'Focus', uk: 'Зосередженість' },
          { en: 'Luck', uk: 'Удача' },
          { en: 'Working harder all the time', uk: 'Постійно важча праця' },
        ],
        correct: 0,
        explain: { en: '“Focus is what turns ordinary effort into extraordinary results.”', uk: '«Focus is what turns ordinary effort into extraordinary results.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why is discipline more important than motivation, according to the text?', uk: 'Чому, за текстом, дисципліна важливіша за мотивацію?' },
        options: [
          { en: 'Motivation comes and goes, but discipline keeps you moving forward', uk: 'Мотивація приходить і йде, а дисципліна веде тебе вперед' },
          { en: 'Motivation is never useful', uk: 'Мотивація ніколи не корисна' },
          { en: 'Discipline is easier', uk: 'Дисципліна легша' },
        ],
        correct: 0,
        explain: { en: '“Motivation comes and goes, but discipline keeps you moving forward.”', uk: '«…motivation comes and goes, but discipline keeps you moving forward.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is your biggest distraction, and one thing you could do to reduce it?', uk: 'Що найбільше вас відволікає і що одне ви могли б зробити, щоб цього поменшало?' },
        sample: { en: 'Answers will vary. A good answer names a real distraction (e.g., phone notifications) and one concrete step (e.g., turning them off during focused work).', uk: 'Відповіді різнитимуться. Гарна відповідь називає реальне відволікання (напр., сповіщення телефону) і один конкретний крок (напр., вимикати їх під час зосередженої роботи).' },
      },
    ],
  },
  {
    id: 'chase-your-dreams',
    title: { en: 'Chase Your Dreams', uk: 'Гонися за мріями' },
    category: 'discipline',
    level: 'b2',
    minutes: 2,
    topics: ['dreams', 'action', 'consistency'],
    body: {
      en: [
        'Every person has a dream, but not everyone has the courage to chase it. The difference between those who succeed and those who don’t is action. Dreams remain dreams unless you take the first step toward making them real. It may feel difficult in the beginning, and you might face fear or doubt, but those feelings are part of the journey.',
        'Success requires hard work, discipline, and a strong mindset. You will face obstacles, but each challenge is an opportunity to grow stronger and wiser. Instead of being afraid of failure, learn from it. Failure is not the end—it is a lesson that guides you toward improvement. Stay focused on your goals and don’t let distractions or negativity pull you down. Believe in yourself, even when others don’t. Keep moving forward, no matter how slow the progress seems. Consistency is the key to achieving greatness.',
        'In the end, your efforts will pay off. Your story will inspire others, and your success will prove that anything is possible when you refuse to give up.',
      ].join('\n\n'),
      uk: [
        'У кожної людини є мрія, але не кожен має сміливість гнатися за нею. Різниця між тими, хто досягає успіху, і тими, хто ні, — це дія. Мрії лишаються мріями, доки ти не зробиш перший крок до їх втілення. Спершу може бути важко, і ти можеш стикнутися зі страхом чи сумнівом, але ці почуття — частина шляху.',
        'Успіх потребує наполегливої праці, дисципліни й сильного мислення. Ти стикатимешся з перешкодами, але кожен виклик — це можливість стати сильнішим і мудрішим. Замість того щоб боятися невдачі, вчися на ній. Невдача — це не кінець; це урок, що веде тебе до вдосконалення. Зосереджуйся на своїх цілях і не дай відволіканням чи негативу тягнути тебе вниз. Вір у себе, навіть коли інші не вірять. Продовжуй рухатися вперед, хоч би яким повільним здавався поступ. Послідовність — ключ до величі.',
        'Зрештою, твої зусилля окупляться. Твоя історія надихне інших, а твій успіх доведе, що можливо все, коли ти відмовляєшся здаватися.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What is the difference between those who succeed and those who don’t, according to the text?', uk: 'У чому, за текстом, різниця між тими, хто досягає успіху, і тими, хто ні?' },
        options: [
          { en: 'Action', uk: 'Дія' },
          { en: 'Luck', uk: 'Удача' },
          { en: 'Talent', uk: 'Талант' },
        ],
        correct: 0,
        explain: { en: '“The difference between those who succeed and those who don’t is action.”', uk: '«…the difference between those who succeed and those who don’t is action.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the text describe failure?', uk: 'Як текст описує невдачу?' },
        options: [
          { en: 'Not the end, but a lesson that guides you toward improvement', uk: 'Не кінець, а урок, що веде до вдосконалення' },
          { en: 'The end of the journey', uk: 'Кінець шляху' },
          { en: 'Proof that you should stop', uk: 'Доказ, що треба спинитися' },
        ],
        correct: 0,
        explain: { en: '“Failure is not the end—it is a lesson that guides you toward improvement.”', uk: '«Failure is not the end—it is a lesson that guides you toward improvement.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one dream you have, and what first step could you take toward it?', uk: 'Яка у вас є мрія і який перший крок ви могли б зробити до неї?' },
        sample: { en: 'Answers will vary. A strong answer names a real dream and one concrete, doable first step toward it.', uk: 'Відповіді різнитимуться. Сильна відповідь називає реальну мрію і один конкретний здійсненний перший крок до неї.' },
      },
    ],
  },
  {
    id: 'good-habits',
    title: { en: 'Good Habits', uk: 'Хороші звички' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    topics: ['habits', 'character', 'self-improvement'],
    body: {
      en: 'Good habits play an important role in our lives. They help us stay organized, healthy, and successful. Habits like waking up early, studying regularly, eating healthy food, and being respectful are very important. Good habits build strong character and improve our daily life. They make our work easier and help us achieve our goals. On the other hand, bad habits can harm our future. Developing good habits takes time and effort, but the results are very beneficial. Therefore, we should always try to build good habits and avoid bad ones to live a better and successful life.',
      uk: 'Хороші звички відіграють важливу роль у нашому житті. Вони допомагають нам бути організованими, здоровими й успішними. Звички, як-от рано прокидатися, регулярно вчитися, їсти здорову їжу й бути шанобливим, дуже важливі. Хороші звички будують сильний характер і покращують наше повсякдення. Вони роблять нашу роботу легшою й допомагають досягати цілей. Натомість погані звички можуть шкодити нашому майбутньому. Виробляти хороші звички потребує часу й зусиль, але результати дуже корисні. Тому варто завжди намагатися будувати хороші звички й уникати поганих, щоб жити краще й успішніше.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Which of these is given as an example of a good habit?', uk: 'Що з переліченого наведено як приклад хорошої звички?' },
        options: [
          { en: 'Waking up early and studying regularly', uk: 'Рано прокидатися й регулярно вчитися' },
          { en: 'Sleeping all day', uk: 'Спати цілий день' },
          { en: 'Skipping meals', uk: 'Пропускати прийоми їжі' },
        ],
        correct: 0,
        explain: { en: '“Habits like waking up early, studying regularly, eating healthy food, and being respectful are very important.”', uk: '«…waking up early, studying regularly, eating healthy food, and being respectful…»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say about developing good habits?', uk: 'Що текст каже про вироблення хороших звичок?' },
        options: [
          { en: 'It takes time and effort, but the results are very beneficial', uk: 'Це потребує часу й зусиль, але результати дуже корисні' },
          { en: 'It is instant and easy', uk: 'Це миттєво й легко' },
          { en: 'It is not worth it', uk: 'Воно того не варте' },
        ],
        correct: 0,
        explain: { en: '“Developing good habits takes time and effort, but the results are very beneficial.”', uk: '«Developing good habits takes time and effort, but the results are very beneficial.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name one good habit you want to build and one bad habit you want to reduce.', uk: 'Назвіть одну хорошу звичку, яку хочете виробити, і одну погану, яку хочете зменшити.' },
        sample: { en: 'Answers will vary. A good answer names one concrete habit to build (e.g., a fixed bedtime) and one to reduce (e.g., late-night screen time).', uk: 'Відповіді різнитимуться. Гарна відповідь називає одну конкретну звичку для вироблення (напр., сталий час сну) і одну для зменшення (напр., екран пізно ввечері).' },
      },
    ],
  },
  {
    id: 'discipline-in-life',
    title: { en: 'Discipline in Life', uk: 'Дисципліна в житті' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    topics: ['discipline', 'self-control', 'success'],
    body: {
      en: 'Discipline is the foundation of a successful life. It helps us stay focused, organized, and committed to our goals. A disciplined person follows rules, respects time, and avoids distractions. Discipline is especially important for students because it helps them study regularly and perform well. It teaches self-control, responsibility, and patience. Without discipline, it becomes difficult to achieve success. Even small disciplined habits every day can lead to great achievements. Therefore, we should develop discipline in our daily routine to build a strong and successful future.',
      uk: 'Дисципліна — це основа успішного життя. Вона допомагає нам лишатися зосередженими, організованими й відданими своїм цілям. Дисциплінована людина дотримується правил, поважає час і уникає відволікань. Дисципліна особливо важлива для учнів, бо допомагає їм регулярно вчитися й добре встигати. Вона вчить самоконтролю, відповідальності й терпіння. Без дисципліни досягати успіху стає важко. Навіть маленькі дисципліновані звички щодня можуть вести до великих досягнень. Тому варто розвивати дисципліну в щоденному розпорядку, щоб будувати міцне й успішне майбутнє.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does a disciplined person do, according to the text?', uk: 'Що робить дисциплінована людина, за текстом?' },
        options: [
          { en: 'Follows rules, respects time, and avoids distractions', uk: 'Дотримується правил, поважає час і уникає відволікань' },
          { en: 'Ignores all rules', uk: 'Ігнорує всі правила' },
          { en: 'Wastes time freely', uk: 'Вільно марнує час' },
        ],
        correct: 0,
        explain: { en: '“A disciplined person follows rules, respects time, and avoids distractions.”', uk: '«A disciplined person follows rules, respects time, and avoids distractions.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does discipline teach, according to the text?', uk: 'Чого вчить дисципліна, за текстом?' },
        options: [
          { en: 'Self-control, responsibility, and patience', uk: 'Самоконтролю, відповідальності й терпіння' },
          { en: 'Fear and doubt', uk: 'Страху й сумніву' },
          { en: 'Nothing useful', uk: 'Нічого корисного' },
        ],
        correct: 0,
        explain: { en: '“It teaches self-control, responsibility, and patience.”', uk: '«It teaches self-control, responsibility, and patience.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one small disciplined habit you keep (or want to keep) every day?', uk: 'Яка одна маленька дисциплінована звичка є у вас щодня (або яку хочете мати)?' },
        sample: { en: 'Answers will vary. A good answer names one concrete daily habit (e.g., a fixed study time) and why it matters to the reader.', uk: 'Відповіді різнитимуться. Гарна відповідь називає одну конкретну щоденну звичку (напр., сталий час навчання) і чому вона важлива для читача.' },
      },
    ],
  },
  {
    id: 'the-currency-of-time',
    title: { en: 'The Currency of Time', uk: 'Валюта часу' },
    category: 'discipline',
    level: 'b2',
    minutes: 1,
    topics: ['time', 'priorities', 'focus'],
    body: {
      en: [
        'Time is the only currency you can never earn back. You can lose money and make it again, but a lost hour is gone forever. Stop spending your days living someone else’s life or waiting for a ‘someday’ that may never come. Your life is happening right now, in the choices you make and the risks you take today.',
        'Success belongs to those who value their minutes, not just their years. Don’t waste your energy on things you cannot control. Focus on your craft, invest in your mind, and protect your peace. You have the power to write a legendary story, but the clock is ticking. Make every second count, because you are capable of more than you can imagine.',
      ].join('\n\n'),
      uk: [
        'Час — єдина валюта, яку ти ніколи не зможеш повернути. Ти можеш втратити гроші й заробити їх знову, але втрачена година зникає назавжди. Перестань витрачати свої дні на те, щоб жити чужим життям чи чекати на «колись», що може ніколи не настати. Твоє життя відбувається просто зараз — у виборах, які ти робиш, і ризиках, на які ти йдеш сьогодні.',
        'Успіх належить тим, хто цінує свої хвилини, а не лише роки. Не марнуй енергію на те, що не можеш контролювати. Зосередься на своїй справі, вкладай у свій розум і бережи свій спокій. Ти маєш силу написати легендарну історію, але годинник цокає. Нехай кожна секунда рахується, бо ти здатний на більше, ніж можеш уявити.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why does the text call time “the only currency you can never earn back”?', uk: 'Чому текст називає час «єдиною валютою, яку не можна повернути»?' },
        options: [
          { en: 'Because a lost hour is gone forever', uk: 'Бо втрачена година зникає назавжди' },
          { en: 'Because time is worth money', uk: 'Бо час — це гроші' },
          { en: 'Because everyone has the same amount', uk: 'Бо в усіх його однаково' },
        ],
        correct: 0,
        explain: { en: '“You can lose money and make it again, but a lost hour is gone forever.”', uk: '«…a lost hour is gone forever.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, success belongs to those who…', uk: 'За текстом, успіх належить тим, хто…' },
        options: [
          { en: 'value their minutes, not just their years', uk: 'цінує свої хвилини, а не лише роки' },
          { en: 'have the most money', uk: 'має найбільше грошей' },
          { en: 'wait for the perfect day', uk: 'чекає на ідеальний день' },
        ],
        correct: 0,
        explain: { en: '“Success belongs to those who value their minutes, not just their years.”', uk: '«…value their minutes, not just their years.»' },
      },
      {
        kind: 'open',
        q: { en: 'Where does most of your time go each day? Name one place you could spend it more wisely.', uk: 'Куди йде більшість вашого часу щодня? Назвіть одне місце, де його можна витрачати мудріше.' },
        sample: { en: 'Answers will vary. A good answer honestly names a time sink and one concrete change (e.g., swapping 30 minutes of scrolling for reading).', uk: 'Відповіді різнитимуться. Гарна відповідь чесно називає «пожирача часу» й одну конкретну зміну (напр., замінити 30 хв скролінгу читанням).' },
      },
    ],
  },
  {
    id: 'respecting-time',
    title: { en: 'Respecting Time', uk: 'Повага до часу' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    topics: ['time-management', 'productivity', 'discipline'],
    body: {
      en: 'Respecting time is very important for a successful life. Time is a valuable resource that never comes back once it is lost. People who respect time complete their work on time and achieve their goals. Managing time properly helps reduce stress and increases productivity. Students should use their time wisely for study, rest, and useful activities. Wasting time can lead to failure and regret. Successful people always plan their day and follow a schedule. Therefore, we should respect time, use it wisely, and make every moment meaningful.',
      uk: 'Поважати час дуже важливо для успішного життя. Час — цінний ресурс, який не повертається, щойно його втрачено. Люди, які поважають час, виконують роботу вчасно й досягають своїх цілей. Правильне управління часом допомагає зменшити стрес і підвищує продуктивність. Учні мають мудро використовувати час для навчання, відпочинку й корисних занять. Марнування часу може вести до невдачі й жалю. Успішні люди завжди планують свій день і дотримуються розкладу. Тому ми маємо поважати час, мудро його використовувати й робити кожну мить значущою.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does managing time properly help with, according to the text?', uk: 'У чому, за текстом, допомагає правильне управління часом?' },
        options: [
          { en: 'Reducing stress and increasing productivity', uk: 'Зменшити стрес і підвищити продуктивність' },
          { en: 'Avoiding all work', uk: 'Уникати будь-якої роботи' },
          { en: 'Sleeping more', uk: 'Більше спати' },
        ],
        correct: 0,
        explain: { en: '“Managing time properly helps reduce stress and increases productivity.”', uk: '«…helps reduce stress and increases productivity.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What do successful people always do, according to the text?', uk: 'Що завжди роблять успішні люди, за текстом?' },
        options: [
          { en: 'Plan their day and follow a schedule', uk: 'Планують свій день і дотримуються розкладу' },
          { en: 'Wait for motivation', uk: 'Чекають на мотивацію' },
          { en: 'Avoid planning', uk: 'Уникають планування' },
        ],
        correct: 0,
        explain: { en: '“Successful people always plan their day and follow a schedule.”', uk: '«Successful people always plan their day and follow a schedule.»' },
      },
      {
        kind: 'open',
        q: { en: 'Do you plan your day? Describe how you do it, or one way you could start.', uk: 'Чи плануєте ви свій день? Опишіть, як саме, або один спосіб почати.' },
        sample: { en: 'Answers will vary. A good answer names a concrete planning method and how it helps use time well.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретний метод планування й те, як він допомагає добре використовувати час.' },
      },
    ],
  },
  {
    id: 'the-importance-of-goals',
    title: { en: 'The Importance of Goals', uk: 'Важливість цілей' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    topics: ['goals', 'motivation', 'discipline'],
    body: {
      en: 'Goals are very important in our lives. They give us direction and purpose. Without goals, life becomes unclear and confusing. When we set goals, we know what we want to achieve and how to move forward. Goals help us stay focused and motivated. They also teach us discipline and time management. Achieving small goals gives us confidence to reach bigger ones. Successful people always set clear goals and work hard to achieve them. Therefore, we should always set goals and work with determination to make our dreams come true.',
      uk: 'Цілі дуже важливі в нашому житті. Вони дають нам напрямок і мету. Без цілей життя стає нечітким і заплутаним. Коли ми ставимо цілі, ми знаємо, чого хочемо досягти й як рухатися вперед. Цілі допомагають лишатися зосередженими й вмотивованими. Вони також вчать нас дисципліни й управління часом. Досягнення маленьких цілей дає нам упевненість братися за більші. Успішні люди завжди ставлять чіткі цілі й наполегливо працюють, щоб їх досягти. Тому ми маємо завжди ставити цілі й працювати з рішучістю, щоб здійснити свої мрії.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What happens without goals, according to the text?', uk: 'Що стається без цілей, за текстом?' },
        options: [
          { en: 'Life becomes unclear and confusing', uk: 'Життя стає нечітким і заплутаним' },
          { en: 'Life becomes easier', uk: 'Життя стає легшим' },
          { en: 'Nothing changes', uk: 'Нічого не змінюється' },
        ],
        correct: 0,
        explain: { en: '“Without goals, life becomes unclear and confusing.”', uk: '«Without goals, life becomes unclear and confusing.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does achieving small goals give us?', uk: 'За текстом, що дає нам досягнення маленьких цілей?' },
        options: [
          { en: 'Confidence to reach bigger ones', uk: 'Упевненість братися за більші' },
          { en: 'A reason to stop', uk: 'Привід спинитися' },
          { en: 'Nothing useful', uk: 'Нічого корисного' },
        ],
        correct: 0,
        explain: { en: '“Achieving small goals gives us confidence to reach bigger ones.”', uk: '«…confidence to reach bigger ones.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write one small goal for this week and one bigger goal for this year.', uk: 'Напишіть одну маленьку ціль на цей тиждень і одну більшу ціль на цей рік.' },
        sample: { en: 'Answers will vary. A good answer states a specific, measurable weekly goal and a larger yearly goal it supports.', uk: 'Відповіді різнитимуться. Гарна відповідь наводить конкретну, вимірювану тижневу ціль і більшу річну ціль, якій вона слугує.' },
      },
    ],
  },
  {
    id: 'the-importance-of-discipline',
    title: { en: 'The Importance of Discipline', uk: 'Важливість дисципліни' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    topics: ['discipline', 'habits', 'success'],
    body: {
      en: [
        'Today I would like to talk about the importance of discipline. Discipline is the key to success in life. It helps us stay focused and organized in everything we do.',
        'A disciplined person follows rules, respects time, and completes tasks on time. As students, discipline helps us study regularly and achieve good results.',
        'Without discipline, it becomes difficult to reach our goals. Therefore, we should develop good habits and stay committed to our work.',
        'Let us practice discipline in our daily lives to become successful and responsible individuals. Thank you.',
      ].join('\n\n'),
      uk: [
        'Сьогодні я хочу поговорити про важливість дисципліни. Дисципліна — ключ до успіху в житті. Вона допомагає нам лишатися зосередженими й організованими в усьому, що ми робимо.',
        'Дисциплінована людина дотримується правил, поважає час і виконує завдання вчасно. Нам, учням, дисципліна допомагає регулярно вчитися й досягати хороших результатів.',
        'Без дисципліни стає важко досягати наших цілей. Тому ми маємо виробляти хороші звички й лишатися відданими своїй справі.',
        'Практикуймо дисципліну в щоденному житті, щоб ставати успішними й відповідальними людьми. Дякую.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the speaker call “the key to success in life”?', uk: 'Що оповідач називає «ключем до успіху в житті»?' },
        options: [
          { en: 'Discipline', uk: 'Дисципліну' },
          { en: 'Luck', uk: 'Удачу' },
          { en: 'Money', uk: 'Гроші' },
        ],
        correct: 0,
        explain: { en: '“Discipline is the key to success in life.”', uk: '«Discipline is the key to success in life.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does a disciplined person do, according to the speaker?', uk: 'Що робить дисциплінована людина, за оповідачем?' },
        options: [
          { en: 'Follows rules, respects time, and completes tasks on time', uk: 'Дотримується правил, поважає час і виконує завдання вчасно' },
          { en: 'Avoids all rules', uk: 'Уникає всіх правил' },
          { en: 'Works only when they feel like it', uk: 'Працює лише коли хочеться' },
        ],
        correct: 0,
        explain: { en: '“A disciplined person follows rules, respects time, and completes tasks on time.”', uk: '«A disciplined person follows rules, respects time, and completes tasks on time.»' },
      },
      {
        kind: 'open',
        q: { en: 'This is written as a short speech. What one point would you add if you gave it?', uk: 'Це написано як коротка промова. Який один пункт ви б додали, якби виголошували її?' },
        sample: { en: 'Answers will vary. A good answer adds a concrete, relevant point (an example, a personal habit, a benefit) that fits the topic of discipline.', uk: 'Відповіді різнитимуться. Гарна відповідь додає конкретний доречний пункт (приклад, особисту звичку, перевагу), що пасує темі дисципліни.' },
      },
    ],
  },
  {
    id: 'the-value-of-hard-work',
    title: { en: 'The Value of Hard Work', uk: 'Цінність наполегливої праці' },
    category: 'discipline',
    level: 'b2',
    minutes: 2,
    topics: ['hard-work', 'determination', 'discipline'],
    body: {
      en: [
        'Today I would like to talk about the value of hard work. Hard work is one of the most important keys to success in life. Nothing great can be achieved without effort and dedication. People who work hard are more likely to reach their goals and turn their dreams into reality.',
        'In our daily lives, we can see many successful people. They did not become successful overnight. They worked patiently, faced many difficulties, and never gave up. Their success is the result of strong determination and continuous effort.',
        'Sometimes we may feel tired or discouraged, especially when things do not go the way we want. However, these challenges are a part of life. They teach us important lessons and make us stronger. If we keep trying and stay focused on our goals, we will eventually succeed.',
        'Hard work also helps us develop discipline and responsibility. When we study regularly and complete our tasks on time, we become more confident in our abilities. Step by step, our small efforts lead to great achievements.',
        'So let us remember that success does not come easily. We must work hard, stay patient, and believe in our abilities. With determination and effort, we can achieve our goals and build a bright future. Thank you.',
      ].join('\n\n'),
      uk: [
        'Сьогодні я хочу поговорити про цінність наполегливої праці. Наполеглива праця — один із найважливіших ключів до успіху в житті. Нічого великого не можна досягти без зусиль і відданості. Люди, які тяжко працюють, більш імовірно досягають своїх цілей і втілюють мрії в реальність.',
        'У повсякденні ми бачимо багато успішних людей. Вони не стали успішними за одну ніч. Вони працювали терпляче, стикалися з багатьма труднощами й ніколи не здавалися. Їхній успіх — результат сильної рішучості й безперервних зусиль.',
        'Іноді ми можемо почуватися втомленими чи зневіреними, особливо коли все йде не так, як хочеться. Однак ці виклики — частина життя. Вони вчать нас важливих уроків і роблять сильнішими. Якщо ми продовжуємо намагатися й лишаємося зосередженими на цілях, ми зрештою досягнемо успіху.',
        'Наполеглива праця також допомагає розвивати дисципліну й відповідальність. Коли ми регулярно вчимося й виконуємо завдання вчасно, ми стаємо впевненішими у своїх здібностях. Крок за кроком наші маленькі зусилля ведуть до великих досягнень.',
        'Тож памʼятаймо, що успіх не приходить легко. Ми маємо тяжко працювати, бути терплячими й вірити у свої здібності. З рішучістю й зусиллями ми можемо досягати цілей і будувати світле майбутнє. Дякую.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the speaker, how did successful people become successful?', uk: 'За оповідачем, як успішні люди стали успішними?' },
        options: [
          { en: 'Through patience, effort, and never giving up', uk: 'Завдяки терпінню, зусиллям і тому, що не здавалися' },
          { en: 'Overnight, by luck', uk: 'За ніч, завдяки удачі' },
          { en: 'Without any difficulties', uk: 'Без жодних труднощів' },
        ],
        correct: 0,
        explain: { en: '“They did not become successful overnight. They worked patiently, faced many difficulties, and never gave up.”', uk: '«…They worked patiently, faced many difficulties, and never gave up.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does hard work help us develop, according to the speaker?', uk: 'Що, за оповідачем, допомагає розвивати наполеглива праця?' },
        options: [
          { en: 'Discipline and responsibility', uk: 'Дисципліну й відповідальність' },
          { en: 'Laziness', uk: 'Лінощі' },
          { en: 'Fear of work', uk: 'Страх перед роботою' },
        ],
        correct: 0,
        explain: { en: '“Hard work also helps us develop discipline and responsibility.”', uk: '«Hard work also helps us develop discipline and responsibility.»' },
      },
      {
        kind: 'open',
        q: { en: 'Think of something you achieved through hard work. What kept you going?', uk: 'Згадайте щось, чого ви досягли завдяки наполегливій праці. Що вас підтримувало?' },
        sample: { en: 'Answers will vary. A strong answer names a real achievement and the effort, patience, or support that made it possible.', uk: 'Відповіді різнитимуться. Сильна відповідь називає реальне досягнення й зусилля, терпіння чи підтримку, що зробили його можливим.' },
      },
    ],
  },
  {
    id: 'success-habits',
    title: { en: 'Success Habits', uk: 'Звички успіху' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    topics: ['habits', 'discipline', 'success'],
    body: {
      en: 'Success habits are daily actions that lead to achievement. They include discipline, hard work, and consistency. Successful people wake up early, plan their day, and manage time wisely. Reading, learning, and self-improvement are important habits. Success habits also include positive thinking and self-belief. Avoiding laziness and staying focused help reach goals. Small good habits practiced every day create big success over time. Failure does not stop successful people; they learn and move forward. Building success habits requires patience and effort. When good habits become part of life, success follows naturally and becomes lasting.',
      uk: 'Звички успіху — це щоденні дії, що ведуть до досягнень. Вони включають дисципліну, наполегливу працю й послідовність. Успішні люди рано прокидаються, планують свій день і мудро керують часом. Читання, навчання й самовдосконалення — важливі звички. Звички успіху також включають позитивне мислення й самовіру. Уникання лінощів і зосередженість допомагають досягати цілей. Маленькі добрі звички, які практикують щодня, з часом створюють великий успіх. Невдача не спиняє успішних людей; вони вчаться й рухаються вперед. Побудова звичок успіху потребує терпіння й зусиль. Коли хороші звички стають частиною життя, успіх приходить природно й стає тривалим.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do successful people do, according to the text?', uk: 'Що роблять успішні люди, за текстом?' },
        options: [
          { en: 'Wake up early, plan their day, and manage time wisely', uk: 'Рано прокидаються, планують день і мудро керують часом' },
          { en: 'Wait for luck', uk: 'Чекають на удачу' },
          { en: 'Avoid all effort', uk: 'Уникають будь-яких зусиль' },
        ],
        correct: 0,
        explain: { en: '“Successful people wake up early, plan their day, and manage time wisely.”', uk: '«…wake up early, plan their day, and manage time wisely.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What happens when good habits become part of life, according to the text?', uk: 'Що стається, коли хороші звички стають частиною життя, за текстом?' },
        options: [
          { en: 'Success follows naturally and becomes lasting', uk: 'Успіх приходить природно й стає тривалим' },
          { en: 'Nothing changes', uk: 'Нічого не змінюється' },
          { en: 'Life becomes harder', uk: 'Життя стає важчим' },
        ],
        correct: 0,
        explain: { en: '“When good habits become part of life, success follows naturally and becomes lasting.”', uk: '«…success follows naturally and becomes lasting.»' },
      },
      {
        kind: 'open',
        q: { en: 'Which single success habit from the text would help you most right now? Why?', uk: 'Яка одна звичка успіху з тексту допомогла б вам найбільше зараз? Чому?' },
        sample: { en: 'Answers will vary. A good answer picks one habit (early rising, planning, reading, focus) and ties it to a current goal.', uk: 'Відповіді різнитимуться. Гарна відповідь обирає одну звичку (рано вставати, планувати, читати, зосереджуватися) і повʼязує її з теперішньою ціллю.' },
      },
    ],
  },
];
