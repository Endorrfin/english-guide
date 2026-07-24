import type { ReadingText } from '../types';

/*
 * Reading · category: biographies (Biographies & Speeches). Learner-graded adaptations (condensed to
 * ~2–3 min, CEFR b1–b2) of public biographies and real speeches, with full Ukrainian translation.
 * Source text lives in _examples/reading.txt; `source` links the original speech/video. Wave RB1.
 */
export const biographiesTexts: ReadingText[] = [
  {
    id: 'adam-smith',
    title: { en: 'Adam Smith: The Father of Modern Economics', uk: 'Адам Сміт: батько сучасної економіки' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'The life of Adam Smith (English-learning biography)', url: 'https://www.youtube.com/watch?v=r8b1dWw-cOc' },
    topics: ['economics', 'free-markets', 'scotland', 'scottish-enlightenment'],
    body: {
      en: [
        'Adam Smith was born in 1723 in Kirkcaldy, a small town in Scotland full of fishermen and farmers. Even as a child, he was unusually curious. While other children played outside, Adam preferred books — history, philosophy, and science — and he was always asking big questions: Why do people trade? What makes some countries rich and others poor? His mother, Margaret, was a strong woman who believed in him and made sure he received a good education. Adam also loved watching the merchants and ships at the local harbor, wondering what made trade succeed or fail. These early questions about wealth and trade stayed with him for the rest of his life.',
        'At just fourteen, Adam left home to study at the University of Glasgow, where he studied logic, ethics, and economics. One teacher, Francis Hutcheson, deeply influenced him with the idea that justice and fairness should guide human behavior. Later, Adam continued his studies at Oxford, but he found the teaching rigid and old-fashioned; professors discouraged new ideas and expected students to simply memorize old beliefs. Instead, Adam spent his time reading independently in the library, and he learned an important lesson: real understanding comes from questioning and thinking for oneself, not from simply accepting what others say.',
        'After Oxford, Adam returned to Scotland and became known as a brilliant lecturer. He formed a close friendship with the philosopher David Hume, who encouraged him to think critically and challenge accepted ideas. Together, these experiences helped Adam develop the ideas that became his most famous book, The Wealth of Nations. He argued that dividing work into specialized tasks made production more efficient, and that free markets, with people trading freely and pursuing their own interests, often served society best. These ideas about free markets, competition, and the “invisible hand” of self-interest still shape how people understand economics today.',
      ].join('\n\n'),
      uk: [
        'Адам Сміт народився 1723 року в Кірколді — невеликому шотландському містечку рибалок і фермерів. Навіть у дитинстві він вирізнявся незвичайною допитливістю. Поки інші діти гралися надворі, Адам більше любив книжки — з історії, філософії та науки — і завжди ставив великі запитання: чому люди торгують? чому одні країни багаті, а інші бідні? Його мати, Маргарет, була сильною жінкою, яка вірила в сина і подбала, щоб він здобув гарну освіту. Адам також любив спостерігати за купцями й кораблями в місцевій гавані, розмірковуючи, чому одним торгівля вдається, а іншим ні. Ці ранні запитання про багатство й торгівлю залишилися з ним на все життя.',
        'У чотирнадцять років Адам поїхав з дому вчитися в Університет Глазго, де вивчав логіку, етику та економіку. Один із викладачів, Френсіс Гатчесон, справив на нього глибокий вплив ідеєю про те, що справедливість і чесність повинні керувати людською поведінкою. Пізніше Адам продовжив навчання в Оксфорді, але побачив, що викладання там надто консервативне й застаріле: професори не заохочували нових ідей і очікували, що студенти просто заучуватимуть старі погляди. Натомість Адам багато часу проводив, самостійно читаючи в бібліотеці, і засвоїв важливий урок: справжнє розуміння приходить не від сліпого прийняття чужих думок, а від запитань і самостійного мислення.',
        'Після Оксфорда Адам повернувся до Шотландії і став відомим як блискучий лектор. Він потоваришував із філософом Девідом Юмом, який заохочував його мислити критично й сумніватися в загальноприйнятих ідеях. Разом усі ці досвіди допомогли Адаму розвинути ідеї, що лягли в основу його найвідомішої книги — «Багатство народів». Він доводив, що поділ праці на спеціалізовані завдання робить виробництво ефективнішим, а вільні ринки, де люди торгують вільно і переслідують власні інтереси, часто найкраще служать суспільству. Ці ідеї про вільний ринок, конкуренцію та «невидиму руку» особистого інтересу й досі формують те, як ми розуміємо економіку.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Where was Adam Smith born?', uk: 'Де народився Адам Сміт?' },
        options: [
          { en: 'In a small town in Scotland called Kirkcaldy', uk: 'У невеликому шотландському містечку Кірколді' },
          { en: 'In a big city in England', uk: 'У великому англійському місті' },
          { en: 'In a village near Oxford', uk: 'У селі поблизу Оксфорда' },
        ],
        correct: 0,
        explain: { en: 'The text says Adam Smith was born in Kirkcaldy, a small town in Scotland.', uk: 'У тексті сказано, що Адам Сміт народився в Кірколді, невеликому шотландському містечку.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did Adam Smith learn from his experience at Oxford?', uk: 'Чого Адам Сміт навчився під час навчання в Оксфорді?' },
        options: [
          { en: 'The value of thinking for himself', uk: 'Цінність самостійного мислення' },
          { en: 'How to sail a ship', uk: 'Як керувати кораблем' },
          { en: 'How to build tunnels', uk: 'Як будувати тунелі' },
        ],
        correct: 0,
        explain: { en: 'At Oxford he learned that real understanding comes from questioning and thinking for oneself.', uk: 'В Оксфорді він зрозумів, що справжнє розуміння приходить від запитань і самостійного мислення.' },
      },
      {
        kind: 'open',
        q: { en: 'Why did Adam Smith believe free markets were good for society? Explain in your own words.', uk: 'Чому Адам Сміт вважав вільні ринки корисними для суспільства? Поясніть своїми словами.' },
        sample: { en: 'He believed that when people trade freely and follow their own interests, they naturally find efficient ways to meet each other’s needs, which benefits the whole society.', uk: 'Він вважав, що коли люди торгують вільно і керуються власними інтересами, вони природно знаходять ефективні способи задовольняти потреби одне одного, що йде на користь усьому суспільству.' },
      },
    ],
  },
  {
    id: 'steve-jobs-stanford',
    title: { en: 'Steve Jobs: Stay Hungry, Stay Foolish', uk: 'Стів Джобс: залишайтеся голодними, залишайтеся нерозсудливими' },
    category: 'biographies',
    level: 'b2',
    minutes: 3,
    source: { author: 'Steve Jobs — Stanford Commencement Address (2005)', url: 'https://www.youtube.com/watch?v=1i9kcBHX2Nw&list=PLosaC3gb0kGBBVMRvBn5m2CHxKluMLcYB' },
    topics: ['steve-jobs', 'apple', 'stanford-speech', 'perseverance', 'career-choices'],
    body: {
      en: [
        'Steve Jobs never finished college, but at Stanford’s graduation he shared three stories from his life. As a baby, he was adopted after his birth mother made his parents promise he would one day go to college. Years later he enrolled, but he could not see its value, so he dropped out after six months. Free from required classes, he dropped in on a calligraphy course simply because it fascinated him. It had no use then, but ten years later it shaped the typography of the first Macintosh. He learned that you can only connect life’s dots by looking backward, so you must trust they will connect.',
        'At twenty, Jobs started Apple in his parents’ garage with his friend Woz, and within ten years it had grown into a huge company. Then, at thirty, he was publicly fired from the business he had built. He felt he had failed, but still loved his work, so he started over. He founded two companies, NeXT and Pixar, which later made the world’s first animated film, and he met the woman who became his wife. Eventually Apple bought NeXT and Jobs returned. He said getting fired was the best thing that ever happened to him, and he told the graduates to keep looking until they find work they love.',
        'Jobs’s third story was about death. At seventeen, he read that living each day as if it were his last would eventually prove true, and since then he asked himself every morning whether he was doing what he truly wanted. About a year before the speech, doctors found a tumor and told him he had only months to live; a later test showed the cancer could be treated with surgery, and he recovered. He told the graduates that remembering they will die helps a person stay honest and follow their own heart. He closed with a line from an old magazine he loved: “Stay Hungry. Stay Foolish.”',
      ].join('\n\n'),
      uk: [
        'Стів Джобс так і не здобув вищої освіти, але на випуску в Стенфорді він розповів три історії зі свого життя. Немовлям його всиновили після того, як його біологічна мати наполягла, щоб прийомні батьки пообіцяли: він колись здобуде вищу освіту. Роки потому він таки вступив до коледжу, але не бачив у цьому сенсу, тому кинув навчання через шість місяців. Звільнившись від обов’язкових занять, він почав відвідувати курс каліграфії просто тому, що той його захопив. Тоді це не мало практичного застосування, але через десять років воно лягло в основу шрифтового оформлення першого комп’ютера Macintosh. Він зрозумів, що з’єднати крапки свого життя можна лише озираючись назад, тож треба довіритися, що вони колись з’єднаються.',
        'У двадцять років Джобс разом із другом Возняком заснував Apple в гаражі своїх батьків, і за десять років компанія перетворилася на величезний бізнес. Потім, у тридцять років, його публічно звільнили з бізнесу, який він сам створив. Він відчував, що зазнав невдачі, але все одно любив свою справу, тож почав усе спочатку. Він заснував дві компанії, NeXT і Pixar, яка згодом створила перший у світі анімаційний фільм, а також зустрів жінку, яка стала його дружиною. Згодом Apple купила NeXT, і Джобс повернувся. Він казав, що звільнення стало найкращим, що з ним могло статися, і закликав випускників шукати справу, яку вони люблять, доки не знайдуть її.',
        'Третя історія Джобса була про смерть. У сімнадцять років він прочитав, що якщо жити кожен день, як останній, рано чи пізно це виявиться правдою, і відтоді щоранку запитував себе, чи хоче він робити те, що збирається робити сьогодні. Приблизно за рік до цього виступу лікарі виявили в нього пухлину і сказали, що йому залишилося жити лише кілька місяців; пізніший аналіз показав, що рак піддається лікуванню операцією, і він одужав. Він сказав випускникам, що пам’ять про смерть допомагає залишатися чесним із собою і йти за власним серцем. Він завершив виступ рядком зі старого журналу, який любив у молодості: «Залишайтеся голодними. Залишайтеся нерозсудливими».',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why did Steve Jobs drop out of college?', uk: 'Чому Стів Джобс кинув коледж?' },
        options: [
          { en: 'He could not see the value in it', uk: 'Він не бачив у цьому сенсу' },
          { en: 'He wanted to start Apple immediately', uk: 'Він хотів одразу заснувати Apple' },
          { en: 'He failed his exams', uk: 'Він провалив іспити' },
        ],
        correct: 0,
        explain: { en: 'The text says he could not see its value, so he dropped out after six months.', uk: 'У тексті сказано, що він не бачив у цьому сенсу, тому кинув навчання через шість місяців.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What happened to Steve Jobs at age thirty?', uk: 'Що сталося зі Стівом Джобсом у тридцять років?' },
        options: [
          { en: 'He graduated from Stanford', uk: 'Він закінчив Стенфорд' },
          { en: 'He was fired from Apple, the company he had built', uk: 'Його звільнили з Apple — компанії, яку він сам створив' },
          { en: 'He was diagnosed with cancer', uk: 'У нього діагностували рак' },
        ],
        correct: 1,
        explain: { en: 'The text says that at thirty he “was publicly fired from the business he had built.”', uk: 'У тексті сказано, що в тридцять років його «публічно звільнили з бізнесу, який він створив».' },
      },
      {
        kind: 'open',
        q: { en: 'What lesson did Steve Jobs learn from being fired from Apple? Explain in your own words.', uk: 'Який урок Стів Джобс виніс із звільнення з Apple? Поясніть своїми словами.' },
        sample: { en: 'Answers will vary — e.g., that failure can open new opportunities, or that loving your work helps you keep going after setbacks. A good answer refers to how being fired allowed him to start new companies and eventually return to Apple.', uk: 'Відповіді можуть різнитися — наприклад, що невдача може відкрити нові можливості або що любов до своєї справи допомагає рухатися далі навіть після невдач. Гарна відповідь згадує, як звільнення дозволило йому заснувати нові компанії та згодом повернутися в Apple.' },
      },
    ],
  },
  {
    id: 'elon-musk-think-big',
    title: { en: 'Elon Musk: Think Big and Dream Bigger', uk: 'Ілон Маск: Мисли масштабно і мрій ще масштабніше' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'Elon Musk — talk (English-learning edit)', url: 'https://www.youtube.com/watch?v=BDIRabVP24o&list=PLosaC3gb0kGBBVMRvBn5m2CHxKluMLcYB&index=12' },
    topics: ['elon-musk', 'spacex', 'tesla', 'innovation', 'entrepreneurship'],
    body: {
      en: [
        'Elon Musk gave this speech to graduating students at Caltech in 2012. He explained that as a child he did not know what he wanted to do, but later decided that inventing things would be exciting. He remembered a quote from the writer Arthur C. Clarke: “A sufficiently advanced technology is indistinguishable from magic.” Musk said that many things we now take for granted — flying, instant communication, access to all the world’s information — would have looked like magic in the past. He studied physics and business because he believed people need to understand how the universe works, how the economy works, and how to bring people together to build something big.',
        'In 1995 Musk moved to California to research better energy storage for electric cars, but he soon joined the growing Internet industry instead. One of his early companies was PayPal. His team originally wanted to build a full range of financial services, but people were most excited about a simple email payment feature, so the team listened and focused on that. Musk later asked himself which problems would most affect humanity’s future. He decided they were sustainable energy and making life multi-planetary — the ideas behind Tesla and SpaceX. Starting a rocket company was extremely difficult: Musk traveled to Russia three times trying to buy rockets, and SpaceX’s first three launches failed. The fourth flight, in 2008, finally reached orbit, using the last of the company’s money.',
        'With Tesla, Musk wanted to prove that electric cars could be fast and attractive, not slow and ugly like a golf cart, so the company built the Tesla Roadster before developing the Model S sedan. He advised graduates to build a working prototype, because a real, physical example convinces people much better than a plan on paper. Musk ended his speech by telling the students that they were the magicians of the twenty-first century and should let their imagination be the only limit.',
      ].join('\n\n'),
      uk: [
        'Ілон Маск виголосив цю промову перед випускниками Каліфорнійського технологічного інституту (Caltech) у 2012 році. Він розповів, що в дитинстві не знав, ким хоче стати, але згодом вирішив, що винаходити речі — це захопливо. Він згадав цитату письменника Артура Кларка: «Достатньо розвинена технологія не відрізняється від магії». Маск сказав, що багато речей, які ми сьогодні сприймаємо як належне, — політ, миттєвий зв’язок, доступ до всієї інформації світу — у минулому здавалися б магією. Він вивчав фізику та бізнес, бо вважав, що людям потрібно розуміти, як влаштований всесвіт, як працює економіка і як об’єднувати людей для створення чогось великого.',
        'У 1995 році Маск переїхав до Каліфорнії, щоб досліджувати кращі способи накопичення енергії для електромобілів, але незабаром долучився до індустрії інтернету, що тоді стрімко розвивалася. Однією з його перших компаній була PayPal. Спочатку команда хотіла створити повний набір фінансових послуг, але людям найбільше сподобалася проста функція оплати електронною поштою, тож команда прислухалася до цього й зосередилася саме на ній. Пізніше Маск замислився, які проблеми найбільше вплинуть на майбутнє людства. Він вирішив, що це стійка енергетика та розселення людства на інші планети — ідеї, що лягли в основу Tesla і SpaceX. Створити ракетну компанію було надзвичайно складно: Маск тричі їздив до Росії, намагаючись купити ракети, а перші три запуски SpaceX завершилися невдало. Четвертий політ у 2008 році нарешті вивів ракету на орбіту, використавши останні гроші компанії.',
        'У Tesla Маск хотів довести, що електромобілі можуть бути швидкими й привабливими, а не повільними й негарними, як гольф-кар, тому компанія спершу випустила Tesla Roadster, а потім розробила седан Model S. Він порадив випускникам створювати робочий прототип, адже реальний фізичний зразок переконує людей набагато краще, ніж план на папері. Маск завершив промову словами, що студенти є чарівниками двадцять першого століття і що межею для них має бути лише їхня уява.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What quote did Musk remember from the writer Arthur C. Clarke?', uk: 'Яку цитату письменника Артура Кларка згадав Маск?' },
        options: [
          { en: 'Imagination is more important than knowledge.', uk: 'Уява важливіша за знання.' },
          { en: 'A sufficiently advanced technology is indistinguishable from magic.', uk: 'Достатньо розвинена технологія не відрізняється від магії.' },
          { en: 'The future belongs to those who believe in the beauty of their dreams.', uk: 'Майбутнє належить тим, хто вірить у красу своєї мрії.' },
        ],
        correct: 1,
        explain: { en: 'The text quotes Clarke directly: “A sufficiently advanced technology is indistinguishable from magic.”', uk: 'У тексті наведено пряму цитату Кларка: «Достатньо розвинена технологія не відрізняється від магії».' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, which two problems did Musk decide would most affect humanity’s future?', uk: 'Які дві проблеми, за текстом, Маск визначив як найважливіші для майбутнього людства?' },
        options: [
          { en: 'Education and healthcare', uk: 'Освіта та охорона здоров’я' },
          { en: 'Transportation and housing', uk: 'Транспорт і житло' },
          { en: 'Sustainable energy and making life multi-planetary', uk: 'Стійка енергетика та розселення людства на інші планети' },
        ],
        correct: 2,
        explain: { en: 'The text says Musk decided the two biggest problems were sustainable energy and making life multi-planetary — the basis for Tesla and SpaceX.', uk: 'У тексті сказано, що Маск визначив стійку енергетику та розселення людства на інші планети як дві головні проблеми — основу Tesla і SpaceX.' },
      },
      {
        kind: 'open',
        q: { en: 'Why, according to the text, is it important for a new company to build a working prototype?', uk: 'Чому, за текстом, новій компанії важливо створити робочий прототип?' },
        sample: { en: 'Because a real, physical example convinces people much more effectively than an idea shown only on paper or in a presentation.', uk: 'Бо реальний фізичний зразок переконує людей набагато краще, ніж ідея, показана лише на папері чи в презентації.' },
      },
    ],
  },
  {
    id: 'elon-musk-ai-and-mars',
    title: { en: 'Elon Musk: The Future, AI and Mars', uk: 'Ілон Маск: майбутнє, штучний інтелект і Марс' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'Elon Musk — on the future, AI and Mars', url: 'https://www.youtube.com/watch?v=bz7yYu_w2HY&list=PLosaC3gb0kGBBVMRvBn5m2CHxKluMLcYB&index=4' },
    topics: ['space-exploration', 'mars', 'artificial-intelligence', 'technology'],
    body: {
      en: [
        'Elon Musk became a multi-millionaire before he turned thirty-one, thanks to the company that became PayPal. He later founded SpaceX, a rocket company, aiming to make space travel — and eventually a colony on Mars — possible for humanity. Speaking at the World Government Summit, Musk said his main motivation is making sure the future is good. He believes it is important to develop sustainable transport and energy, and for humanity to become a species that explores space and lives on more than one planet. For Musk, this is not only about survival; it also gives people a sense of adventure and a reason to feel excited about the future.',
        'Musk admitted that predicting the future is difficult, but he shared near-term expectations. He believed that within about ten years, most new cars would be able to drive themselves safely, since the technology was already close to ready. He also spoke about artificial intelligence, separating narrow AI, built for one task like driving, from advanced general AI, which could become smarter than any human — something he called a dangerous situation. Governments, he said, needed to watch AI research closely and keep it safe for the public. Talking about SpaceX, Musk explained that reusable rockets were the key breakthrough for affordable space travel, since a reusable rocket costs far less per flight than one built only once.',
        'Asked for advice for young people, Musk recommended studying the way physicists think — not just their equations, but their whole approach to reasoning about hard problems. People should always assume they might be wrong, he said, and try to become “less wrong” over time, instead of simply believing what they wish were true. He also advised asking friends for honest, critical feedback, since people who care about someone do not always volunteer bad news unless asked directly. Finally, Musk admitted that his position is not always as easy or enjoyable as people might imagine.',
      ].join('\n\n'),
      uk: [
        'Ілон Маск став мультимільйонером ще до тридцяти одного року завдяки компанії, яка згодом стала PayPal. Пізніше він заснував SpaceX, ракетну компанію, маючи на меті зробити космічні подорожі — і згодом колонію на Марсі — доступними для людства. Виступаючи на Всесвітньому урядовому саміті, Маск сказав, що його головна мотивація — подбати про те, щоб майбутнє було добрим. Він вважає важливим розвивати сталий транспорт і енергетику, а також те, щоб людство стало видом, який досліджує космос і живе більш ніж на одній планеті. Для Маска це не лише про виживання: це також дає людям відчуття пригоди та привід із захопленням дивитися в майбутнє.',
        'Маск визнав, що передбачити майбутнє складно, але поділився кількома найближчими прогнозами. Він вважав, що приблизно за десять років більшість нових автомобілів зможуть їздити самостійно й безпечно, адже технології вже майже готові. Він також говорив про штучний інтелект, розрізняючи вузький ШІ, створений для одного завдання на кшталт керування автомобілем, і просунутий загальний штучний інтелект, який міг би стати розумнішим за будь-яку людину і який він назвав небезпечною ситуацією. За його словами, уряди повинні уважно стежити за дослідженнями в галузі ШІ, щоб він залишався безпечним для суспільства. Говорячи про SpaceX, Маск пояснив, що багаторазові ракети стали ключовим проривом для доступних космічних подорожей, адже ракета, яку можна використати багато разів, коштує в перерахунку на один політ значно менше, ніж та, що будується лише для одного запуску.',
        'На запитання про пораду для молоді Маск порадив вивчати спосіб мислення фізиків — не лише формули, а весь підхід до міркування над складними проблемами. Він сказав, що людям варто завжди припускати, що вони можуть помилятися, і намагатися ставати «менш неправими» з часом, а не просто вірити в те, у що їм хочеться вірити. Він також порадив просити друзів давати чесний, критичний відгук, адже ті, хто піклується про людину, не завжди самі розповідають неприємні новини, якщо їх прямо не попросити. Наостанок Маск визнав, що бути на його місці не завжди так легко чи приємно, як можна собі уявити.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to Musk, why is it important for humanity to live on more than one planet?', uk: 'Чому, на думку Маска, для людства важливо жити більш ніж на одній планеті?' },
        options: [
          { en: 'It supports long-term survival and inspires people about the future', uk: 'Це підтримує довгострокове виживання і надихає людей щодо майбутнього' },
          { en: 'It guarantees everyone will become rich', uk: 'Це гарантує, що всі стануть багатими' },
          { en: 'It replaces the need for clean energy', uk: 'Це усуває потребу в чистій енергії' },
        ],
        correct: 0,
        explain: { en: 'Musk said becoming multi-planetary matters for long-term survival and also gives people a sense of adventure about the future.', uk: 'Маск сказав, що стати міжпланетним видом важливо для довгострокового виживання, а також дає людям відчуття пригоди щодо майбутнього.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did Musk say about advanced general AI?', uk: 'Що Маск сказав про просунутий загальний штучний інтелект?' },
        options: [
          { en: 'It could become smarter than humans and needs careful attention', uk: 'Він може стати розумнішим за людину, тому потребує пильної уваги' },
          { en: 'It is the same as the AI used only in self-driving cars', uk: 'Це те саме, що ШІ, який використовують лише в безпілотних автомобілях' },
          { en: 'Governments should ignore it completely', uk: 'Уряди повинні повністю його ігнорувати' },
        ],
        correct: 0,
        explain: { en: 'Musk called advanced general AI a dangerous situation and said governments should watch its development closely.', uk: 'Маск назвав просунутий загальний ШІ небезпечною ситуацією і сказав, що уряди повинні уважно стежити за його розвитком.' },
      },
      {
        kind: 'open',
        q: { en: 'What advice did Musk give young people about being wrong and getting feedback?', uk: 'Яку пораду Маск дав молодим людям щодо помилок і зворотного зв’язку?' },
        sample: { en: 'He advised always assuming you might be wrong and trying to become less wrong over time, and asking friends for honest, critical feedback instead of only wishful thinking.', uk: 'Він порадив завжди припускати, що ти можеш помилятися, і намагатися ставати «менш неправим» з часом, а також просити друзів давати чесний критичний відгук, а не просто вірити в бажане.' },
      },
    ],
  },
  {
    id: 'donald-trump-never-give-up',
    title: { en: 'Donald Trump: Never, Ever Give Up', uk: 'Дональд Трамп: ніколи, ніколи не здавайтеся' },
    category: 'biographies',
    level: 'b1',
    minutes: 2,
    source: { author: 'Donald Trump — motivational speech', url: 'https://www.youtube.com/watch?v=2mqQMA7CSLQ&list=PLosaC3gb0kGCnvkRvp8aOF4OIuGaqDHG8&index=43' },
    topics: ['never-give-up', 'commencement-speech', 'perseverance', 'motivation', 'resilience'],
    body: {
      en: [
        'In 2017, Donald Trump gave a commencement speech to the graduating class at Liberty University. He congratulated the students on their achievement and thanked their parents and grandparents for supporting them. His main message to the graduates was simple: “Never, ever give up.” He said everyone faces moments when they want to quit, but real success comes to those who keep trying. He told the students that some of the most talented people he had known gave up, while others without special talent became successful simply because they refused to quit.',
        'Trump also urged the graduates to do what they love, saying people rarely succeed at work they do not enjoy. He praised his friend Jim Kelly, a Hall of Fame football quarterback who had beaten cancer twice, as an example of someone who never quit. Trump told the students not to be afraid of being called outsiders, because outsiders are often the ones who change the world. He encouraged them to see the word impossible as motivation and to keep pushing forward whenever people doubted them.',
        'He also spoke about George Rogers, who had worked as a finance leader at the university for twenty-five years and had been a prisoner of war during World War II. Rogers survived starvation and torture, weighed only eighty-five pounds when he was freed, and was told he would not live past forty. Instead, he lived to 98 and helped build the university over many years. Trump used his story as proof that people who refuse to give up can overcome even the hardest circumstances. He closed by telling the graduates to have courage, follow their convictions, and always keep pushing forward.',
      ].join('\n\n'),
      uk: [
        'У 2017 році Дональд Трамп виголосив промову перед випускниками Ліберті-університету з нагоди їхнього випуску. Він привітав студентів з досягненням і подякував їхнім батькам і бабусям із дідусями за підтримку. Його головне послання до випускників було простим: «Ніколи, ніколи не здавайтеся». Він сказав, що кожна людина стикається з моментами, коли хочеться все кинути, але справжній успіх приходить до тих, хто продовжує намагатися. Він розповів студентам, що знав багатьох талановитих людей, які здалися, тоді як інші, без особливого таланту, досягли успіху лише тому, що відмовилися здаватися.',
        'Трамп також закликав випускників займатися тим, що вони люблять, сказавши, що люди рідко досягають успіху в роботі, яка їм не подобається. Він згадав свого друга Джима Келлі, легендарного футбольного квотербека, який двічі переміг рак, як приклад людини, що ніколи не здавалася. Трамп сказав студентам не боятися, коли їх називають аутсайдерами, адже саме аутсайдери часто змінюють світ. Він закликав їх сприймати слово «неможливо» як мотивацію і продовжувати рухатися вперед, коли інші сумніваються в них.',
        'Він також розповів про Джорджа Роджерса, який двадцять п’ять років працював фінансовим керівником університету і був військовополоненим під час Другої світової війни. Роджерс пережив голод і тортури, важив лише 85 фунтів, коли його звільнили, і лікарі казали, що він не доживе до сорока років. Натомість він дожив до 98 років і роками допомагав розбудовувати університет. Трамп використав його історію як доказ того, що люди, які відмовляються здаватися, можуть подолати навіть найважчі обставини. Він завершив промову, закликавши випускників мати мужність, дотримуватися своїх переконань і завжди рухатися вперед.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What was Trump’s main message to the Liberty University graduates?', uk: 'Яким було головне послання Трампа до випускників Ліберті-університету?' },
        options: [
          { en: 'Never, ever give up', uk: 'Ніколи не здавайтеся' },
          { en: 'Study science every day', uk: 'Вивчайте науку щодня' },
          { en: 'Move to a big city after graduation', uk: 'Переїжджайте у велике місто після випуску' },
        ],
        correct: 0,
        explain: { en: 'The text states his message was simple: “Never, ever give up.”', uk: 'У тексті сказано, що його послання було простим: «Ніколи, ніколи не здавайтеся».' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why did Trump mention his friend Jim Kelly?', uk: 'Чому Трамп згадав свого друга Джима Келлі?' },
        options: [
          { en: 'Because Kelly was a famous singer', uk: 'Тому що Келлі був відомим співаком' },
          { en: 'Because Kelly was a football star who beat cancer twice and never quit', uk: 'Тому що Келлі був футбольною зіркою, яка двічі перемогла рак і ніколи не здавалася' },
          { en: 'Because Kelly founded Liberty University', uk: 'Тому що Келлі заснував Ліберті-університет' },
        ],
        correct: 1,
        explain: { en: 'The text says Kelly was a Hall of Fame quarterback who beat cancer twice and never quit.', uk: 'У тексті сказано, що Келлі був легендарним квотербеком, який переміг рак двічі, і ніколи не здавався.' },
      },
      {
        kind: 'open',
        q: { en: 'According to the text, what mattered more for success than raw talent?', uk: 'Що, згідно з текстом, важило для успіху більше, ніж природний талант?' },
        sample: { en: 'Answers will vary — e.g., persistence or refusing to give up. The text says some very talented people gave up, while others without special talent succeeded because they never quit.', uk: 'Відповіді можуть різнитися — наприклад, наполегливість або небажання здаватися. У тексті сказано, що деякі дуже талановиті люди здалися, тоді як інші, без особливого таланту, досягли успіху, бо ніколи не здавалися.' },
      },
    ],
  },
  {
    id: 'donald-trump-america-loves-india',
    title: { en: 'Donald Trump: America Loves India', uk: 'Дональд Трамп: Америка любить Індію' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'Donald Trump — speech in India', url: 'https://www.youtube.com/watch?v=q9VUpHsnGYw&list=PLosaC3gb0kGCnvkRvp8aOF4OIuGaqDHG8&index=68' },
    topics: ['india', 'state-visit', 'leadership-story', 'cultural-diversity'],
    body: {
      en: [
        'On February 24, 2020, President Donald Trump visited the city of Ahmedabad in India. He spoke to a crowd of more than 125,000 people at the new Motera Stadium. Prime Minister Narendra Modi welcomed Trump warmly, showing the close relationship between the two nations. In his speech, Trump said, “America loves India, America respects India and America will always be faithful and loyal friends to the Indian people.” He thanked the Indian people for their hospitality and said that India would always hold a special place in his memory.',
        'Trump also spoke about Modi’s life story. Modi grew up helping his father sell tea, and as a young man he worked in a cafeteria in Ahmedabad. He later became the leader of India after winning a large election with more than 600 million voters, one of the biggest democratic elections in the world. Trump described this as proof that hard work and dedication can lead to great achievements. He also spoke about India’s growth in recent decades, including progress in reducing poverty and expanding access to electricity and the internet, and said that India was on its way to having the world’s largest middle class.',
        'Trump praised India’s diversity, noting that people speak more than a hundred languages and follow many different religions, including Hinduism, Islam, Sikhism, and Christianity, yet the country stays united. He mentioned India’s culture, including its film industry, cricket, and festivals like Diwali and Holi. He also spoke about the millions of Indian Americans living in the United States and their contribution to American life. Trump ended the speech by thanking Prime Minister Modi and the people of India for their welcome, wishing both nations a future of friendship and peace.',
      ].join('\n\n'),
      uk: [
        '24 лютого 2020 року президент Дональд Трамп відвідав місто Ахмедабад в Індії. Він виступив перед натовпом понад 125 000 людей на новому стадіоні «Мотера». Прем’єр-міністр Нарендра Моді тепло привітав Трампа, що показало тісні стосунки між двома країнами. У своїй промові Трамп сказав: «Америка любить Індію, Америка поважає Індію, і Америка завжди буде вірним і відданим другом індійського народу». Він подякував індійському народу за гостинність і сказав, що Індія назавжди залишиться особливим місцем у його пам’яті.',
        'Трамп також розповів про життєвий шлях Моді. Моді змалку допомагав батькові продавати чай, а замолоду працював у їдальні в Ахмедабаді. Пізніше він став лідером Індії, перемігши на масштабних виборах, у яких взяли участь понад 600 мільйонів виборців, — одних із найбільших демократичних виборів у світі. Трамп назвав це доказом того, що наполеглива праця та відданість справі можуть привести до великих досягнень. Він також говорив про розвиток Індії в останні десятиліття, зокрема про зменшення бідності та розширення доступу до електроенергії та інтернету, і сказав, що Індія рухається до того, щоб мати найбільший середній клас у світі.',
        'Трамп відзначив розмаїття Індії, зауваживши, що люди розмовляють більш ніж сотнею мов і сповідують багато різних релігій, зокрема індуїзм, іслам, сикхізм і християнство, але країна залишається єдиною. Він згадав індійську культуру, зокрема кіноіндустрію, крикет і свята, як-от Дівалі та Холі. Він також розповів про мільйони американців індійського походження, які живуть у США, та їхній внесок в американське життя. Трамп завершив промову, подякувавши прем’єр-міністру Моді та народу Індії за гостинний прийом і побажавши обом народам майбутнього дружби та миру.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did Modi do as a young man, according to the speech?', uk: 'Чим займався Моді замолоду, за словами промови?' },
        options: [
          { en: 'He worked in a cafeteria', uk: 'Він працював у їдальні' },
          { en: 'He was a soldier', uk: 'Він був солдатом' },
          { en: 'He studied abroad', uk: 'Він навчався за кордоном' },
        ],
        correct: 0,
        explain: { en: 'The text says Modi grew up helping his father sell tea and worked in a cafeteria as a young man.', uk: 'У тексті сказано, що Моді змалку допомагав батькові продавати чай і замолоду працював у їдальні.' },
      },
      {
        kind: 'mcq',
        q: { en: 'How many people were in the crowd at Motera Stadium, according to the text?', uk: 'Скільки людей було в натовпі на стадіоні «Мотера», згідно з текстом?' },
        options: [
          { en: 'More than 125,000', uk: 'Понад 125 000' },
          { en: 'About 10,000', uk: 'Близько 10 000' },
          { en: 'About 1 million', uk: 'Близько 1 мільйона' },
        ],
        correct: 0,
        explain: { en: 'The text says Trump spoke to a crowd of more than 125,000 people.', uk: 'У тексті сказано, що Трамп виступив перед натовпом понад 125 000 людей.' },
      },
      {
        kind: 'open',
        q: { en: 'According to the text, what did Trump say about India’s diversity?', uk: 'Що, згідно з текстом, Трамп сказав про розмаїття Індії?' },
        sample: { en: 'He said people in India speak more than a hundred languages and follow many different religions, but the country stays united.', uk: 'Він сказав, що в Індії люди розмовляють більш ніж сотнею мов і сповідують багато різних релігій, але країна залишається єдиною.' },
      },
    ],
  },
  {
    id: 'bill-gates-harvard',
    title: { en: 'Bill Gates: Harvard Commencement Address', uk: 'Білл Гейтс: Гарвардська випускна промова' },
    category: 'biographies',
    level: 'b2',
    minutes: 3,
    source: { author: 'Bill Gates — Harvard Commencement Address (2007)', url: 'https://www.youtube.com/watch?v=KMEe2ni92rQ&list=PLosaC3gb0kGBBVMRvBn5m2CHxKluMLcYB&index=2' },
    topics: ['philanthropy', 'global-health', 'harvard', 'inequality', 'microsoft'],
    body: {
      en: [
        'Bill Gates is the co-founder of Microsoft and one of the world’s most famous philanthropists. In 1975, as a Harvard student, he left college to start a software company. Decades later, in 2007, Harvard gave him an honorary degree and invited him to give the commencement address. Gates joked that he was proud to be called “Harvard’s most successful dropout.” He told the graduates about his years at Harvard, full of new ideas and energy, and about the night he called a small computer company and offered to sell them software — the beginning of Microsoft.',
        'But Gates said he had one big regret: he left Harvard with no real understanding of the world’s inequities — the huge differences in health, wealth, and opportunity. Years later, he and his wife Melinda learned that millions of children in poor countries were dying from diseases that had almost disappeared in rich countries, like measles and malaria. They were shocked to discover that cheap treatments existed but were not reaching these children, simply because poor families had no power in the market and no voice in politics.',
        'Gates told the graduates that people are not failing to act because they don’t care — they simply don’t know how to help, because the problems seem too complex. To turn caring into action, he said, we must see a problem clearly, find a solution, and then see the real impact of our work. He reminded them of his mother’s words: “From those to whom much is given, much is expected.” Gates asked the new graduates to use their knowledge and privilege to fight inequity, even if only for a few hours a week, and called it one of the great experiences of a lifetime.',
      ].join('\n\n'),
      uk: [
        'Білл Гейтс — співзасновник компанії Microsoft і один із найвідоміших філантропів світу. У 1975 році, ще будучи студентом Гарварду, він покинув навчання, щоб заснувати компанію з розробки програмного забезпечення. Через десятиліття, у 2007 році, Гарвард присудив йому почесний ступінь і запросив виступити з промовою на випускній церемонії. Гейтс жартома сказав, що пишається тим, що його називають «найуспішнішим студентом-недоучкою Гарварду». Він розповів випускникам про свої роки в Гарварді, сповнені нових ідей та енергії, а також про той вечір, коли він зателефонував у невелику комп’ютерну компанію і запропонував продати їй програмне забезпечення — так почалася історія Microsoft.',
        'Але Гейтс сказав, що має один великий жаль: він покинув Гарвард, так і не усвідомивши справжніх масштабів світової нерівності — величезної різниці в здоров’ї, багатстві та можливостях. Роками пізніше він і його дружина Мелінда дізналися, що мільйони дітей у бідних країнах помирають від хвороб, які в багатих країнах уже майже зникли, — таких як кір і малярія. Вони були шоковані, дізнавшись, що дешеві методи лікування існують, але не доходять до цих дітей просто тому, що бідні родини не мають ані впливу на ринку, ані голосу в політиці.',
        'Гейтс сказав випускникам, що люди часто нічого не роблять не тому, що їм байдуже, а тому, що просто не знають, як допомогти, — адже проблеми здаються надто складними. Щоб перетворити небайдужість на дію, за його словами, потрібно чітко побачити проблему, знайти рішення, а потім побачити реальний результат своєї роботи. Він нагадав їм слова своєї матері: «Від тих, кому багато дано, багато й очікується». Гейтс закликав нових випускників використовувати свої знання та привілеї для боротьби з нерівністю — хоча б кілька годин на тиждень — і назвав це одним із найбільших вражень у житті.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What was Bill Gates’s biggest regret about his time at Harvard?', uk: 'Про що Білл Гейтс найбільше жалкував, згадуючи свої роки в Гарварді?' },
        options: [
          { en: 'He never learned to write software', uk: 'Він так і не навчився писати програмне забезпечення' },
          { en: 'He left without understanding the world’s deep inequities', uk: 'Він поїхав, так і не усвідомивши глибокої нерівності у світі' },
          { en: 'He never made any close friends there', uk: 'Він так і не завів там близьких друзів' },
        ],
        correct: 1,
        explain: { en: 'The text says he “left Harvard with no real understanding of the world’s inequities.”', uk: 'У тексті сказано, що він «покинув Гарвард, так і не усвідомивши справжніх масштабів світової нерівності».' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why weren’t cheap treatments reaching sick children in poor countries, according to Gates?', uk: 'Чому, за словами Гейтса, дешеві методи лікування не доходили до хворих дітей у бідних країнах?' },
        options: [
          { en: 'The treatments had not been invented yet', uk: 'Ці методи лікування ще не були винайдені' },
          { en: 'Doctors refused to travel to poor countries', uk: 'Лікарі відмовлялися їхати в бідні країни' },
          { en: 'Poor families had no power in the market and no voice in politics', uk: 'Бідні родини не мали впливу на ринку і голосу в політиці' },
        ],
        correct: 2,
        explain: { en: 'The text says poor families “had no power in the market and no voice in politics.”', uk: 'У тексті сказано, що бідні родини «не мають ані впливу на ринку, ані голосу в політиці».' },
      },
      {
        kind: 'open',
        q: { en: 'According to Gates, what steps help turn caring into real action?', uk: 'Які кроки, на думку Гейтса, допомагають перетворити небайдужість на реальну дію?' },
        sample: { en: 'See the problem clearly, find a solution, and then see the real impact of the work — because complexity, not lack of caring, is the real barrier.', uk: 'Чітко побачити проблему, знайти рішення і побачити реальний результат роботи — адже справжньою перешкодою є складність проблем, а не байдужість людей.' },
      },
    ],
  },
  {
    id: 'mark-zuckerberg-find-your-purpose',
    title: { en: 'Mark Zuckerberg: Find Your Purpose', uk: 'Марк Цукерберг: Знайди свою мету' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'Mark Zuckerberg — Harvard Commencement Address (2017)', url: 'https://www.youtube.com/watch?v=ksZpu1s1LV0' },
    topics: ['mark-zuckerberg', 'facebook', 'purpose', 'harvard', 'community'],
    body: {
      en: [
        'Mark Zuckerberg gave this commencement speech to Harvard’s Class of 2017, even though he had dropped out of Harvard himself. He joked about his college memories, including launching a website that caused trouble with the school but also led him to meet Priscilla, who became the most important person in his life. His main message was about purpose. He told a story about President Kennedy visiting NASA and meeting a janitor who said, “I’m helping put a man on the moon.” Purpose, Zuckerberg said, is the feeling that we are part of something bigger than ourselves, and it is what creates true happiness.',
        'Zuckerberg remembered starting Facebook in his dorm room, hoping to connect people beyond Harvard. In the early years, some people around him wanted to sell the company, while he wanted to keep building it, believing in a bigger purpose. This disagreement broke the original team apart, and it was the hardest period of his career. He said that today many people struggle to find purpose because automation is removing jobs and fewer people belong to strong communities.',
        'Zuckerberg described three ways his generation could give everyone a sense of purpose. First, take on big shared projects, such as fighting climate change or curing diseases, the way earlier generations built dams or put a man on the moon. Second, reduce inequality so that more people have the freedom to try new ideas, even if they fail, instead of only rewarding those who already succeed. Third, build strong communities, both locally and around the world, because people need to feel they belong. He ended by telling graduates that purpose does not simply appear — it is up to them to create it, and he wished them the courage to make their lives meaningful.',
      ].join('\n\n'),
      uk: [
        'Марк Цукерберг виголосив цю промову перед випускниками Гарварду 2017 року, хоча сам колись покинув навчання в цьому університеті. Він жартівливо згадав студентські роки, зокрема запуск сайту, який спричинив проблеми з університетом, але саме завдяки якому він познайомився з Прісциллою, що стала найважливішою людиною в його житті. Головною темою його промови була мета. Він розповів історію про те, як президент Кеннеді відвідав НАСА і зустрів прибиральника, який сказав: «Я допомагаю відправити людину на Місяць». Мета, за словами Цукерберга, — це відчуття, що ти є частиною чогось більшого за себе, і саме вона створює справжнє щастя.',
        'Цукерберг згадав, як починав Facebook у своїй кімнаті в гуртожитку, сподіваючись об’єднати людей не лише в Гарварді. У перші роки дехто з його оточення хотів продати компанію, тоді як він прагнув розвивати її далі, вірячи у більшу мету. Через цю незгоду початкова команда розпалася, і це був найважчий період у його кар’єрі. Він сказав, що сьогодні багатьом людям важко знайти сенс, бо автоматизація скорочує робочі місця, а міцних спільнот стає дедалі менше.',
        'Цукерберг описав три способи, якими його покоління може дати кожному відчуття мети. По-перше, братися за великі спільні проєкти — наприклад, боротьбу зі зміною клімату чи пошук ліків від хвороб, — так само як попередні покоління будували греблі чи відправляли людину на Місяць. По-друге, зменшити нерівність, щоб більше людей мали свободу пробувати нові ідеї, навіть якщо вони можуть зазнати невдачі, а не винагороджувати лише тих, хто вже досяг успіху. По-третє, будувати міцні спільноти — і місцеві, і всесвітні, — бо людям потрібно відчувати, що вони комусь належать. Він завершив словами, що мета не з’являється сама собою — її потрібно створювати, і побажав випускникам мужності зробити своє життя значущим.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what is purpose?', uk: 'Що таке мета (сенс), за словами Цукерберга?' },
        options: [
          { en: 'Having a high-paying job', uk: 'Мати високооплачувану роботу' },
          { en: 'The feeling of being part of something bigger than yourself', uk: 'Відчуття, що ти є частиною чогось більшого за себе' },
          { en: 'Winning against your competitors', uk: 'Перемагати конкурентів' },
        ],
        correct: 1,
        explain: { en: 'The text says purpose “is the feeling that we are part of something bigger than ourselves, and it is what creates true happiness.”', uk: 'У тексті сказано, що мета — «це відчуття, що ти є частиною чогось більшого за себе, і саме вона створює справжнє щастя».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What caused the early Facebook team to fall apart, according to the text?', uk: 'Через що, за текстом, розпалася початкова команда Facebook?' },
        options: [
          { en: 'A disagreement about which country to expand to first', uk: 'Незгода щодо того, у яку країну виходити першою' },
          { en: 'A disagreement about the company’s name', uk: 'Незгода щодо назви компанії' },
          { en: 'A disagreement about whether to sell the company', uk: 'Незгода щодо того, чи продавати компанію' },
        ],
        correct: 2,
        explain: { en: 'The text explains that some people wanted to sell the company while Zuckerberg wanted to keep building it, and this disagreement broke the team apart.', uk: 'У тексті пояснено, що дехто хотів продати компанію, а Цукерберг хотів розвивати її далі, і саме ця незгода призвела до розпаду команди.' },
      },
      {
        kind: 'open',
        q: { en: 'According to the text, what are the three ways to create a sense of purpose for everyone? Name one with an example.', uk: 'Які три способи створити відчуття мети для всіх називає текст? Назвіть один із них із прикладом.' },
        sample: { en: 'Take on big shared projects (like fighting climate change), reduce inequality so people can freely try new ideas, and build strong communities — for example, working together to cure diseases.', uk: 'Братися за великі спільні проєкти (наприклад, боротьбу зі зміною клімату), зменшити нерівність, щоб люди могли вільно пробувати нові ідеї, і будувати міцні спільноти — наприклад, спільно шукати ліки від хвороб.' },
      },
    ],
  },
  {
    id: 'jeff-bezos-what-will-you-be',
    title: { en: 'Jeff Bezos: What Will You Be?', uk: 'Джефф Безос: ким ви станете?' },
    category: 'biographies',
    level: 'b2',
    minutes: 3,
    source: { author: 'Jeff Bezos — Princeton Commencement Address (2010)', url: 'https://www.youtube.com/watch?v=2u2Sd9MeFUc&list=PLosaC3gb0kGBBVMRvBn5m2CHxKluMLcYB&index=7' },
    topics: ['jeff-bezos', 'princeton-speech', 'kindness', 'life-choices', 'amazon'],
    body: {
      en: [
        'As a child, Jeff Bezos often traveled with his grandparents, who belonged to a club of trailer owners that journeyed across the United States together. On one trip, when he was about ten, he heard an advertisement claiming that every puff of a cigarette shortens a smoker’s life by a few minutes. Since his grandmother smoked, Bezos did the math and proudly announced how many years she had taken off her life. Instead of praise, his grandmother burst into tears. His grandfather stopped the car, walked Bezos aside, and quietly told him: “One day you’ll understand that it’s harder to be kind than clever.”',
        'Bezos used this memory to explain an important difference: cleverness is a gift, but kindness is a choice. Gifts are easy because they are simply given to us, while choices can be hard. He told the Princeton graduates that they had many gifts, especially intelligence, but that their lives would ultimately be defined not by their gifts, but by the choices they made — whether to be kind or merely clever, to follow their passions or play it safe, to apologize when wrong or to bluff, and to keep trying or give up.',
        'Bezos also described how, at 30, he left a secure job at a financial firm to start Amazon after learning that Internet use was growing by more than 2,000 percent a year. His boss warned him that quitting was risky, and told him to think it over for two days. Bezos realized he would regret never trying far more than he would regret trying and failing, so he took the less safe path with his wife’s support. He told the graduates that when they are old and look back on their lives, what matters most will be the choices they made. “In the end, we are our choices,” he said.',
      ].join('\n\n'),
      uk: [
        'У дитинстві Джефф Безос часто подорожував з бабусею й дідусем, які належали до клубу власників трейлерів, що разом їздили по Сполучених Штатах. В одній із таких поїздок, коли йому було близько десяти років, він почув рекламу, яка стверджувала, що кожна затяжка цигаркою скорочує життя курця на кілька хвилин. Оскільки його бабуся курила, Безос порахував і гордо оголосив, скільки років життя вона в такий спосіб втратила. Замість похвали бабуся розплакалася. Дідусь зупинив машину, відвів Безоса вбік і спокійно сказав: «Одного дня ти зрозумієш, що бути добрим складніше, ніж бути розумним».',
        'Цим спогадом Безос пояснив важливу відмінність: розум — це дар, а доброта — це вибір. Дари даються нам легко, тоді як вибір буває важким. Він сказав випускникам Прінстона, що вони мають багато дарів, особливо розум, але що зрештою їхнє життя визначатимуть не дари, а вибори, які вони робитимуть — бути добрими чи просто розумними, іти за своєю пристрастю чи обирати безпечний шлях, вибачатися, коли помилилися, чи виправдовуватися, продовжувати спроби чи здаватися.',
        'Безос також розповів, як у тридцять років він залишив надійну роботу у фінансовій компанії, щоб заснувати Amazon, дізнавшись, що використання інтернету зростає більш ніж на 2000 відсотків на рік. Його керівник попередив, що звільнятися ризиковано, і порадив обдумати рішення два дні. Безос зрозумів, що пошкодує за тим, що взагалі не спробував, значно більше, ніж за спробою і невдачею, тож обрав менш безпечний шлях за підтримки дружини. Він сказав випускникам, що коли вони постаріють і озирнуться на своє життя, найважливішим виявиться саме вибір, який вони зробили. «Зрештою, ми і є наш вибір», — сказав він.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did Bezos’s grandfather tell him after he made his grandmother cry?', uk: 'Що сказав дідусь Безоса після того, як той довів бабусю до сліз?' },
        options: [
          { en: 'That it is harder to be kind than to be clever', uk: 'Що бути добрим складніше, ніж бути розумним' },
          { en: 'That he should never do math in the car', uk: 'Що ніколи не можна рахувати в машині' },
          { en: 'That he should apologize to the whole family', uk: 'Що треба вибачитися перед усією родиною' },
        ],
        correct: 0,
        explain: { en: 'His grandfather said: “it’s harder to be kind than clever.”', uk: 'Дідусь сказав: «бути добрим складніше, ніж бути розумним».' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to Bezos, what will define a person’s life story in the end?', uk: 'Що, на думку Безоса, зрештою визначає історію життя людини?' },
        options: [
          { en: 'The money they earn', uk: 'Гроші, які вона заробляє' },
          { en: 'The choices they make', uk: 'Вибір, який вона робить' },
          { en: 'The gifts they are born with', uk: 'Дари, з якими вона народилася' },
        ],
        correct: 1,
        explain: { en: 'Bezos said: “In the end, we are our choices.”', uk: 'Безос сказав: «Зрештою, ми і є наш вибір».' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a choice — not a gift — that you are proud of, and explain why it mattered.', uk: 'Опишіть вибір — а не дар — яким ви пишаєтеся, і поясніть, чому він був важливим.' },
        sample: { en: 'Answers will vary — e.g., choosing to apologize, to help someone, or to try something risky. A good answer explains why the choice was difficult and what it shows about the person’s character.', uk: 'Відповіді можуть різнитися — наприклад, вибір вибачитися, комусь допомогти або спробувати щось ризиковане. Гарна відповідь пояснює, чому цей вибір був складним і що він показує про характер людини.' },
      },
    ],
  },
  {
    id: 'tim-cook-be-a-builder',
    title: { en: 'Tim Cook: Be a Builder', uk: 'Тім Кук: Будь будівничим' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'Tim Cook — commencement address', url: 'https://www.youtube.com/watch?v=wjTGbS4JqXk&list=PLosaC3gb0kGBBVMRvBn5m2CHxKluMLcYB&index=11' },
    topics: ['tim-cook', 'apple', 'stanford', 'technology', 'responsibility'],
    body: {
      en: [
        'Tim Cook, the CEO of Apple, gave this commencement speech at Stanford University. He joked about his own college years at Auburn University in landlocked eastern Alabama, where he was somehow still on the sailing team, with the nearest marina three hours away. Cook praised Silicon Valley and Stanford for producing many revolutionary inventions, from the first product built in the Hewlett-Packard garage to the iPhone. But he said the tech industry has also become known for claiming credit without taking responsibility, pointing to data breaches, privacy violations, and the spread of fake news. He warned that losing privacy means losing “the freedom to be human,” because people start to censor their own thoughts when they feel watched.',
        'Cook told the graduates to match their ambition with humility of purpose, quoting the author Madeleine L’Engle: “Humility is throwing oneself away in complete concentration on something or someone else.” His main advice was simple: be a builder. Builders work piece by piece, knowing their work may outlast them. He recalled the Stonewall riots, which had their fiftieth anniversary that year: the people at the Stonewall Inn had no idea their courage would change history, but they felt they deserved better and decided to build it themselves. Cook said he still feels grateful to people he never met.',
        'Cook also spoke about the death of Steve Jobs, his mentor. Even though he thought he was prepared, he learned there is a real difference between being prepared and being ready. Losing Jobs left him feeling deeply alone. His advice to graduates was not to waste time trying to live someone else’s life or copy the people who came before them. He told them they would never feel fully ready when their moment came, but that was normal. He closed by urging graduates to leave something worthy behind, because in the end they cannot keep what they build — they can only pass it on.',
      ].join('\n\n'),
      uk: [
        'Тім Кук, генеральний директор Apple, виголосив цю промову на випускній церемонії Стенфордського університету. Він жартома згадав свої студентські роки в Оберн-університеті на сході Алабами, далеко від узбережжя, де він, попри все, входив до вітрильної команди, хоча найближча марина була за три години їзди. Кук високо оцінив внесок Кремнієвої долини та Стенфорда у створення багатьох революційних винаходів — від першого продукту, створеного в гаражі Hewlett-Packard, до iPhone. Але він зауважив, що технологічна індустрія також стала відомою тим, що привласнює заслуги, не беручи на себе відповідальності, згадавши витоки даних, порушення приватності та поширення фейкових новин. Він попередив, що втрата приватності означає втрату «свободи бути людиною», адже люди починають цензурувати власні думки, коли відчувають, що за ними спостерігають.',
        'Кук порадив випускникам поєднувати амбітність зі смиренністю мети, процитувавши письменницю Мадлен Л’Енгл: «Смиренність — це віддати себе повністю зосередженню на чомусь або комусь іншому». Його головна порада була простою: будь будівничим. Будівничі працюють крок за кроком, розуміючи, що їхня справа може пережити їх самих. Він згадав заворушення біля бару Stonewall, п’ятдесяту річницю яких відзначали того року: люди, що зібралися того вечора у Stonewall Inn, навіть не здогадувалися, що їхня сміливість змінить історію, але вони відчували, що заслуговують на краще, і вирішили побудувати це самі. Кук сказав, що досі вдячний людям, яких ніколи не знав особисто.',
        'Кук також розповів про смерть Стіва Джобса, свого наставника. Хоча йому здавалося, що він готовий, він зрозумів, що існує справжня різниця між підготовленістю і готовністю. Втрата Джобса залишила його у глибокій самотності. Своїм випускникам він порадив не витрачати час, намагаючись прожити чиєсь чуже життя чи копіювати тих, хто був до них. Він сказав їм, що вони ніколи не відчують себе повністю готовими, коли настане їхня мить, але це нормально. Він завершив промову закликом залишити після себе щось варте уваги, адже зрештою те, що вони створять, не можна забрати із собою — його можна лише передати іншим.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does Cook say the tech industry has recently become known for, besides its inventions?', uk: 'За що, за словами Кука, останнім часом стала відомою технологічна індустрія, окрім своїх винаходів?' },
        options: [
          { en: 'Training new engineers for free', uk: 'Безкоштовне навчання нових інженерів' },
          { en: 'Claiming credit without taking responsibility', uk: 'Привласнення заслуг без відповідальності' },
          { en: 'Reducing energy consumption', uk: 'Зниження споживання енергії' },
        ],
        correct: 1,
        explain: { en: 'The text says the industry “has also become known for claiming credit without taking responsibility,” citing data breaches, privacy violations, and fake news.', uk: 'У тексті сказано, що індустрія «стала відомою тим, що привласнює заслуги, не беручи на себе відповідальності», згадуючи витоки даних, порушення приватності та фейкові новини.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to Cook, what happens when people lose privacy?', uk: 'Що, за словами Кука, відбувається, коли люди втрачають приватність?' },
        options: [
          { en: 'They earn more money', uk: 'Вони заробляють більше грошей' },
          { en: 'They become more creative', uk: 'Вони стають креативнішими' },
          { en: 'They begin to censor their own thoughts', uk: 'Вони починають цензурувати власні думки' },
        ],
        correct: 2,
        explain: { en: 'The text explains that losing privacy means losing “the freedom to be human,” because people start to censor their own thoughts when they feel watched.', uk: 'У тексті пояснено, що втрата приватності означає втрату «свободи бути людиною», бо люди починають цензурувати власні думки, коли відчувають, що за ними спостерігають.' },
      },
      {
        kind: 'open',
        q: { en: 'What does it mean to “be a builder,” according to Cook’s speech?', uk: 'Що означає «бути будівничим» за словами Кука в цій промові?' },
        sample: { en: 'It means working piece by piece on something bigger than yourself, knowing your work may outlast you and that eventually you must pass it on to others.', uk: 'Це означає працювати крок за кроком над чимось більшим за себе, розуміючи, що твоя справа може пережити тебе, і зрештою її потрібно передати іншим.' },
      },
    ],
  },
  {
    id: 'warren-buffett-becoming-successful',
    title: { en: 'Warren Buffett: Becoming Successful', uk: 'Воррен Баффет: Як досягти успіху' },
    category: 'biographies',
    level: 'b1',
    minutes: 2,
    source: { author: 'Warren Buffett — on becoming successful', url: 'https://englishspeecheschannel.com/english-speeches/warren-buffett-speech/' },
    topics: ['success', 'investing', 'self-improvement', 'life-advice'],
    body: {
      en: [
        'In an interview, Warren Buffett, one of the world’s richest investors, shared his ideas about success and life. He said that true success is not about money. If you reach 65 or 70 years old and the people you want to love you actually do love you, then you are successful. He explained that he has never met a person who is unhappy if many people love them, even if that person is not rich.',
        'Buffett gave advice for people who want to succeed in business. He said the best investment anyone can make is in themselves, especially in communication skills like writing and speaking, because this can increase a person’s value by at least 50%. He also said people should take care of their mind and body carefully, because, unlike a car, they cannot be replaced. Buffett added that life advice is just as important as business advice: choose the people you spend time with carefully, especially your spouse, because you tend to grow in the direction of the people around you.',
        'Buffett also spoke about common investing mistakes, saying that many people move their money around too often instead of simply investing patiently, because buying and selling is now so easy. Talking about his personal life, he explained that he still enjoys the same simple food he liked as a child, and that he was never very interested in going to college himself, though he believes it can be valuable for many other people. His favorite book on investing is The Intelligent Investor by Benjamin Graham, and he usually pays with cash rather than credit cards.',
      ].join('\n\n'),
      uk: [
        'В інтерв’ю Воррен Баффет, один із найбагатших інвесторів світу, поділився своїми думками про успіх і життя. Він сказав, що справжній успіх — це не про гроші. Якщо у 65 чи 70 років люди, чиєї любові ви прагнули, справді вас люблять, то ви успішні. Він пояснив, що ніколи не зустрічав нещасної людини, яку люблять багато людей, навіть якщо ця людина не багата.',
        'Баффет дав пораду людям, які хочуть досягти успіху в бізнесі. Він сказав, що найкраща інвестиція, яку може зробити людина, — це інвестиція в саму себе, особливо в навички спілкування, як-от письмо та усне мовлення, бо це може підвищити цінність людини щонайменше на 50%. Він також сказав, що людям варто дбайливо ставитися до свого розуму й тіла, бо, на відміну від автомобіля, замінити їх неможливо. Баффет додав, що життєві поради не менш важливі за бізнесові: варто ретельно обирати людей, з якими проводиш час, особливо чоловіка чи дружину, бо людина, як правило, розвивається в напрямку тих, хто її оточує.',
        'Баффет також розповів про поширені помилки в інвестуванні, сказавши, що багато людей надто часто перекладають свої гроші з місця на місце замість того, щоб просто терпляче інвестувати, бо купувати й продавати зараз дуже легко. Розповідаючи про особисте життя, він пояснив, що досі любить ту саму просту їжу, яку любив у дитинстві, і що сам ніколи особливо не прагнув вступати до коледжу, хоча вважає, що для багатьох інших людей це може бути цінним. Його улюблена книга про інвестування — «Розумний інвестор» Бенджаміна Грема, і зазвичай він розплачується готівкою, а не кредитною карткою.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to Buffett, what is the best investment a person can make?', uk: 'На думку Баффета, яка найкраща інвестиція, яку може зробити людина?' },
        options: [
          { en: 'An investment in themselves, especially communication skills', uk: 'Інвестиція в саму себе, особливо в навички спілкування' },
          { en: 'An investment in real estate', uk: 'Інвестиція в нерухомість' },
          { en: 'An investment in gold', uk: 'Інвестиція в золото' },
        ],
        correct: 0,
        explain: { en: 'Buffett said the best investment anyone can make is in themselves, especially communication skills.', uk: 'Баффет сказав, що найкраща інвестиція — це інвестиція в саму себе, особливо в навички спілкування.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to Buffett, what makes a person successful at age 65 or 70?', uk: 'На думку Баффета, що робить людину успішною у 65 чи 70 років?' },
        options: [
          { en: 'Being loved by the people they want to love them', uk: 'Коли її люблять ті люди, чиєї любові вона прагнула' },
          { en: 'Having a very large amount of money', uk: 'Наявність дуже великої суми грошей' },
          { en: 'Owning a big house', uk: 'Володіння великим будинком' },
        ],
        correct: 0,
        explain: { en: 'Buffett said if the people you want to love you actually do love you at that age, you are a success.', uk: 'Баффет сказав, що якщо люди, чиєї любові ви прагнули, справді вас люблять у цьому віці, ви успішні.' },
      },
      {
        kind: 'open',
        q: { en: 'What life advice does Buffett give about the people you spend time with?', uk: 'Яку життєву пораду дає Баффет щодо людей, з якими ви проводите час?' },
        sample: { en: 'He advises choosing your close people carefully, especially your spouse, because you tend to grow in the direction of those around you.', uk: 'Він радить ретельно обирати близьких людей, особливо чоловіка чи дружину, бо людина розвивається в напрямку тих, хто її оточує.' },
      },
    ],
  },
  {
    id: 'sam-altman-chatgpt',
    title: { en: 'Sam Altman: Behind ChatGPT', uk: 'Сем Альтман: за лаштунками ChatGPT' },
    category: 'biographies',
    level: 'b2',
    minutes: 3,
    source: { author: 'Sam Altman — talk (English-learning edit)', url: 'https://www.youtube.com/watch?v=vzLmRomOP4Q&list=PLosaC3gb0kGBBVMRvBn5m2CHxKluMLcYB&index=32' },
    topics: ['artificial-intelligence', 'openai', 'chatgpt', 'technology', 'us-senate'],
    body: {
      en: [
        'Sam Altman is the chief executive of OpenAI, the company behind ChatGPT. In May 2023, he testified before a subcommittee of the United States Senate about the risks and benefits of artificial intelligence. Altman explained that OpenAI was founded with a mission: to make sure the benefits of AI are shared widely, while also managing the serious risks the technology can create. He said today’s AI systems could not yet solve huge problems like climate change or cancer, but that people were already finding real value in using them to learn, create, and work more productively.',
        'Altman described how, before releasing its powerful model GPT-4, OpenAI spent more than six months testing it. Outside experts tried to find dangerous weaknesses, and the company worked to make the model behave safely. He said GPT-4 was more likely to give truthful, helpful answers and refuse harmful requests than other similar systems. Still, he told the senators that government regulation would be necessary as AI models became more powerful, including possible testing and licensing rules.',
        'The senators also asked about jobs and elections. Altman said that, like earlier technological revolutions, AI would change many jobs — some would disappear, but he expected new and better ones to appear over time. He called GPT-4 “a tool, not a creature,” used by people to do tasks more efficiently. He also said he was worried about AI being used to spread disinformation, especially around elections, and agreed that people should always know when they are talking to an AI rather than a human. Altman added that it was important to keep AI tools open to many people and companies, not concentrated in the hands of just a few.',
      ].join('\n\n'),
      uk: [
        'Сем Альтман — виконавчий директор компанії OpenAI, творця ChatGPT. У травні 2023 року він давав свідчення перед підкомітетом Сенату США щодо ризиків і переваг штучного інтелекту. Альтман пояснив, що місія OpenAI полягає в тому, щоб переваги ШІ були доступні широкому колу людей, і водночас керувати серйозними ризиками, які створює ця технологія. Він сказав, що сьогоднішні системи ШІ ще не можуть розв’язати такі величезні проблеми, як зміна клімату чи рак, але люди вже знаходять у них реальну користь — для навчання, творчості та продуктивнішої роботи.',
        'Альтман розповів, що перед випуском потужної моделі GPT-4 компанія OpenAI витратила понад шість місяців на її тестування. Незалежні експерти намагалися знайти небезпечні слабкі місця, а компанія працювала над тим, щоб модель поводилася безпечно. За його словами, GPT-4 частіше дає правдиві й корисні відповіді та відмовляється виконувати шкідливі запити, ніж інші подібні системи. Утім, він сказав сенаторам, що з посиленням можливостей моделей ШІ державне регулювання стане необхідним, включно з можливими вимогами щодо тестування та ліцензування.',
        'Сенатори також запитували про робочі місця та вибори. Альтман сказав, що, як і попередні технологічні революції, ШІ змінить багато професій — деякі зникнуть, але з часом з’являться нові й кращі. Він назвав GPT-4 «інструментом, а не істотою», який люди використовують, щоб ефективніше виконувати завдання. Він також сказав, що його турбує можливе використання ШІ для поширення дезінформації, особливо під час виборів, і погодився, що люди завжди повинні знати, коли спілкуються зі штучним інтелектом, а не з людиною. Альтман додав, що важливо тримати інструменти ШІ відкритими для багатьох людей і компаній, а не зосереджувати їх у руках лише кількох.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why did Sam Altman testify before the US Senate in May 2023?', uk: 'Чому Сем Альтман давав свідчення перед Сенатом США у травні 2023 року?' },
        options: [
          { en: 'To announce a new version of ChatGPT', uk: 'Щоб оголосити про нову версію ChatGPT' },
          { en: 'To ask the government for funding for OpenAI', uk: 'Щоб попросити в уряду фінансування для OpenAI' },
          { en: 'To discuss the risks and benefits of artificial intelligence', uk: 'Щоб обговорити ризики й переваги штучного інтелекту' },
        ],
        correct: 2,
        explain: { en: 'The text says he “testified before a subcommittee of the United States Senate about the risks and benefits of artificial intelligence.”', uk: 'У тексті сказано, що він «давав свідчення перед підкомітетом Сенату США щодо ризиків і переваг штучного інтелекту».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did Altman say OpenAI did before releasing GPT-4?', uk: 'Що, за словами Альтмана, зробила компанія OpenAI перед випуском GPT-4?' },
        options: [
          { en: 'Released it immediately without any testing', uk: 'Випустила її одразу без жодного тестування' },
          { en: 'Spent more than six months testing it with outside experts', uk: 'Витратила понад шість місяців на тестування за участю незалежних експертів' },
          { en: 'Asked the Senate to test it first', uk: 'Попросила Сенат протестувати її першим' },
        ],
        correct: 1,
        explain: { en: 'The text says “OpenAI spent more than six months testing it,” with outside experts looking for weaknesses.', uk: 'У тексті сказано, що «компанія OpenAI витратила понад шість місяців на її тестування» за участю незалежних експертів.' },
      },
      {
        kind: 'open',
        q: { en: 'What did Altman say could happen to jobs because of AI, and why was he still optimistic?', uk: 'Що, за словами Альтмана, може статися з робочими місцями через ШІ, і чому він усе ж лишався оптимістом?' },
        sample: { en: 'He said AI would change many jobs and some would disappear, but like past technological revolutions, he expected new and better jobs to appear over time.', uk: 'Він сказав, що ШІ змінить багато професій і деякі зникнуть, але, як і під час минулих технологічних революцій, з часом з’являться нові й кращі робочі місця.' },
      },
    ],
  },
  {
    id: 'mark-zuckerberg-free-speech',
    title: { en: 'Mark Zuckerberg: On Free Speech', uk: 'Марк Цукерберг: Про свободу слова' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'Mark Zuckerberg — Georgetown University speech (2019)', url: 'https://www.youtube.com/watch?v=n434ha4QwU0&list=PLosaC3gb0kGBBVMRvBn5m2CHxKluMLcYB&index=33' },
    topics: ['free-speech', 'facebook', 'civil-rights-history', 'democracy'],
    body: {
      en: [
        'On October 17, 2019, Mark Zuckerberg, the founder of Facebook, spoke to students at Georgetown University about free speech and democracy. He explained that his views were shaped by his college years, when the United States went to war in Iraq and many students felt they had no way to share their opinions. This experience made him believe that giving people a voice helps society improve over time. He said that when he first built Facebook for his college community, students used it to start new groups and organize activities, which taught him that real progress often comes from individuals, not only from big institutions.',
        'Zuckerberg talked about the history of free expression in the United States, mentioning the civil rights movement and how activists like Martin Luther King Jr. and Frederick Douglass used their voices to call for change. He noted that legal protections for speech have grown significantly over the last hundred years. He also described how movements such as Black Lives Matter and Me Too spread widely on Facebook, and how billions of people, including small business owners and community groups, use the platform to reach others and share their stories.',
        'Zuckerberg said he sees three main challenges to free expression today: laws in different countries that limit what people can say, decisions made by technology companies themselves, and social pressure during difficult times to silence certain opinions. To address the second challenge, he announced that Facebook was creating an independent oversight board to review content decisions. He ended his speech by saying that he believes in people, and that giving everyone a voice, even when it creates disagreement, is important for progress in a democratic society.',
      ].join('\n\n'),
      uk: [
        '17 жовтня 2019 року Марк Цукерберг, засновник Facebook, виступив перед студентами Джорджтаунського університету з промовою про свободу слова та демократію. Він пояснив, що на його погляди вплинули студентські роки, коли США вступили у війну в Іраку, і багато студентів відчували, що не мають можливості висловити свою думку. Цей досвід переконав його, що надання людям голосу допомагає суспільству ставати кращим із часом. Він розповів, що коли вперше створював Facebook для свого університетського середовища, студенти використовували платформу, щоб створювати нові групи й організовувати заходи, і це навчило його, що справжній прогрес часто йде від окремих людей, а не лише від великих інституцій.',
        'Цукерберг розповів про історію свободи слова в США, згадавши рух за громадянські права та те, як активісти, зокрема Мартін Лютер Кінг-молодший і Фредерік Дуглас, використовували свій голос, щоб закликати до змін. Він зауважив, що правовий захист свободи слова значно розширився за останні сто років. Він також розповів, як такі рухи, як Black Lives Matter і Me Too, широко поширилися на Facebook, і як мільярди людей, зокрема власники малого бізнесу та громадські групи, використовують платформу, щоб достукатися до інших і поділитися своїми історіями.',
        'Цукерберг сказав, що бачить сьогодні три основні виклики для свободи слова: закони різних країн, які обмежують те, що можуть говорити люди, рішення самих технологічних компаній, а також суспільний тиск у складні часи, що змушує замовчувати певні думки. Щоб вирішити другу проблему, він оголосив, що Facebook створює незалежну наглядову раду для перегляду рішень щодо контенту. Він завершив промову словами, що вірить у людей і що надання кожному права голосу, навіть якщо це створює незгоду, важливе для прогресу демократичного суспільства.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What event during Zuckerberg’s college years shaped his belief in giving people a voice?', uk: 'Яка подія в студентські роки Цукерберга вплинула на його переконання щодо надання людям голосу?' },
        options: [
          { en: 'The war in Iraq', uk: 'Війна в Іраку' },
          { en: 'A hurricane in his hometown', uk: 'Ураган у його рідному місті' },
          { en: 'Winning a business award', uk: 'Отримання бізнес-нагороди' },
        ],
        correct: 0,
        explain: { en: 'The text says his views were shaped when the United States went to war in Iraq and students felt they had no way to share their opinions.', uk: 'У тексті сказано, що на його погляди вплинула війна США в Іраку, коли студенти відчували, що не можуть висловити свою думку.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did Zuckerberg announce to review Facebook’s content decisions?', uk: 'Що оголосив Цукерберг для перегляду рішень Facebook щодо контенту?' },
        options: [
          { en: 'An independent oversight board', uk: 'Незалежну наглядову раду' },
          { en: 'A new government agency', uk: 'Нове державне агентство' },
          { en: 'A university research center', uk: 'Університетський дослідницький центр' },
        ],
        correct: 0,
        explain: { en: 'The text says he announced that Facebook was creating an independent oversight board to review content decisions.', uk: 'У тексті сказано, що він оголосив про створення Facebook незалежної наглядової ради для перегляду рішень щодо контенту.' },
      },
      {
        kind: 'open',
        q: { en: 'According to the text, what three challenges to free expression did Zuckerberg describe?', uk: 'Які три виклики для свободи слова описав Цукерберг, згідно з текстом?' },
        sample: { en: 'Laws in different countries, decisions made by technology companies, and social pressure during difficult times to silence certain opinions.', uk: 'Закони різних країн, рішення технологічних компаній і суспільний тиск у складні часи, що змушує замовчувати певні думки.' },
      },
    ],
  },
  {
    id: 'ivanka-trump-think-big-again',
    title: { en: 'Ivanka Trump: Think Big Again', uk: 'Іванка Трамп: Знову мисли масштабно' },
    category: 'biographies',
    level: 'b1',
    minutes: 2,
    source: { author: 'Ivanka Trump — speech', url: 'https://www.youtube.com/watch?v=_nUDuXRh3zM&t=76s' },
    topics: ['work-ethic', 'resilience', 'family-values', 'think-big'],
    body: {
      en: [
        'Ivanka Trump is a real estate executive, entrepreneur, and the founder of her own fashion line. In 2016, she gave a public speech in which she shared memories of growing up and working alongside her father. As a child, she played with building blocks on the floor of his office while he worked on real construction projects made of concrete, steel, and glass.',
        'She said her father taught his children strong values and a good work ethic. He showed them how to stay strong through difficulties and how to aim for excellence in everything they did. He believed that potential means nothing without effort. She also remembered how, over the years, he read newspaper stories about strangers who were facing hardship, then contacted them and used his connections to help them find a job or a new opportunity.',
        'Ivanka also learned a lot from spending time on construction sites with her father. She said these sites were true meritocracies: skill was easy to notice, and a lack of skill was impossible to hide. Many different people worked together there, and her father listened carefully to everyone — painters, electricians, and engineers — and asked for their opinions. As a child, she remembered him telling her, “If you’re going to be thinking anyway, you might as well think big.” For Ivanka, her father was a builder in a very direct sense: his ideas became real, visible buildings, floor by floor.',
      ].join('\n\n'),
      uk: [
        'Іванка Трамп — керівниця у сфері нерухомості, підприємниця та засновниця власної лінії одягу. У 2016 році вона виступила з публічною промовою, в якій поділилася спогадами про дитинство і про роботу поруч із батьком. У дитинстві вона грала будівельними кубиками на підлозі його кабінету, поки він працював над реальними будівельними проєктами з бетону, сталі та скла.',
        'За її словами, батько виховував у дітей міцні цінності та сильну трудову етику. Він показав їм, як залишатися сильними у труднощах і як прагнути до досконалості в усьому, що вони роблять. Він вважав, що потенціал нічого не вартий без зусиль. Вона також згадувала, як роками він читав у газетах історії про незнайомих людей, які потрапили у скрутне становище, а потім зв’язувався з ними і використовував свої контакти, щоб допомогти їм знайти роботу чи нову можливість.',
        'Іванка також багато чого навчилася, проводячи час на будівельних майданчиках разом із батьком. За її словами, ці майданчики були справжньою меритократією: майстерність було легко помітити, а її відсутність — неможливо приховати. Там разом працювали дуже різні люди, і батько уважно вислуховував кожного — маляра, електриків, інженерів — і питав їхню думку. У дитинстві вона запам’ятала, як він казав їй: «Якщо вже щось обдумувати, то варто мислити масштабно». Для Іванки її батько був будівельником у найпрямішому сенсі: його ідеї ставали справжніми, видимими будівлями, поверх за поверхом.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what did Ivanka Trump say about her father’s construction sites?', uk: 'Що, за словами Іванки Трамп, вона казала про будівельні майданчики свого батька?' },
        options: [
          { en: 'They were true meritocracies, where skill was easy to notice', uk: 'Вони були справжньою меритократією, де майстерність легко помітити' },
          { en: 'They only hired members of the family', uk: 'Там наймали лише членів родини' },
          { en: 'They were closed to new workers', uk: 'Вони були закриті для нових працівників' },
        ],
        correct: 0,
        explain: { en: 'The text says construction sites were “true meritocracies” where skill was easy to notice.', uk: 'У тексті сказано, що будівельні майданчики були «справжньою меритократією», де майстерність легко помітити.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did Ivanka Trump’s father tell her when she was a child?', uk: 'Що батько Іванки Трамп казав їй, коли вона була дитиною?' },
        options: [
          { en: 'If you’re going to be thinking anyway, you might as well think big.', uk: 'Якщо вже щось обдумувати, то варто мислити масштабно.' },
          { en: 'Never talk to strangers.', uk: 'Ніколи не розмовляй з незнайомцями.' },
          { en: 'Money is the only thing that matters.', uk: 'Гроші — це єдине, що має значення.' },
        ],
        correct: 0,
        explain: { en: 'She remembered her father telling her, “If you’re going to be thinking anyway, you might as well think big.”', uk: 'Вона запам’ятала, як батько казав їй: «Якщо вже щось обдумувати, то варто мислити масштабно».' },
      },
      {
        kind: 'open',
        q: { en: 'What lessons did Ivanka Trump say she learned from her father about work and effort?', uk: 'Яких уроків про працю і зусилля, за словами Іванки Трамп, вона навчилася від батька?' },
        sample: { en: 'She learned to stay strong through difficulties, aim for excellence, listen to other people’s opinions, and understand that potential means nothing without effort.', uk: 'Вона навчилася залишатися сильною у труднощах, прагнути до досконалості, прислухатися до думки інших людей і розуміти, що потенціал нічого не вартий без зусиль.' },
      },
    ],
  },
  {
    id: 'selena-gomez-trust-yourself',
    title: { en: 'Selena Gomez: Trust Yourself', uk: 'Селена Гомес: довіряй собі' },
    category: 'biographies',
    level: 'b1',
    minutes: 2,
    source: { author: 'Selena Gomez — speech', url: 'https://www.youtube.com/watch?v=jG-4kBIDAzA' },
    topics: ['self-confidence', 'motivation', 'family', 'acting-career'],
    body: {
      en: [
        'Selena Gomez spoke to a crowd of 16,000 young people at the first We Day event in California. She did not call herself an activist — she simply wanted to share her own story. She explained that her mother had her at just sixteen years old and worked four jobs to give Selena a better life. Selena said her mother is a strong woman who taught her important values, and she loves her very much. Selena had been acting since she was a child, starting on the children’s show Barney. By the time she was seven, she already wanted to become an actress.',
        'When Selena was eleven, a casting director told her she was not strong enough to carry her own TV show. This hurt her, but her mother stayed close and told her the most important thing was to always trust herself. Her mother said that if Selena loved something and believed she could do it, she should keep going and not listen to critics. Two years later, Selena got her own show. She still remembered the casting director’s words, but she chose to hold on to her mother’s advice instead.',
        'Selena told the young audience that she has felt a lot of pressure — pressure to look a certain way, to be nice, and to please other people. For a while, she listened too much to other people’s opinions and lost sight of who she really was. She realized that she only knows how to be herself. She reminded the crowd that they, not she, are the ones changing the world, and she asked them to be kind, support each other, and learn from their mistakes. Her main message was simple: trust yourself, stay true to who you are, and choose your friends carefully.',
      ].join('\n\n'),
      uk: [
        'Селена Гомес виступила перед 16 000 молодих людей на першій церемонії We Day в Каліфорнії. Вона не називала себе активісткою — вона просто хотіла поділитися своєю історією. Селена розповіла, що її мама народила її, коли їй було лише шістнадцять років, і працювала на чотирьох роботах, щоб дати Селені краще життя. Селена сказала, що її мама — сильна жінка, яка навчила її важливих цінностей, і що вона дуже її любить. Селена знімалася в кіно й на телебаченні змалку, почавши з дитячого шоу «Барні». До семи років вона вже хотіла стати акторкою.',
        'Коли Селені було одинадцять, кастинг-директор сказав їй, що вона недостатньо сильна, щоб витягнути власне телешоу. Це її дуже засмутило, але мама була поруч і сказала, що найголовніше — завжди довіряти собі. Мама пояснила: якщо Селена любить щось і вірить, що може це зробити, їй варто продовжувати й не слухати критиків. Через два роки в Селени з’явилося власне шоу. Вона все ще пам’ятала слова того кастинг-директора, але обрала натомість тримати в пам’яті мамину пораду.',
        'Селена розповіла молодій аудиторії, що відчуває багато тиску — тиску виглядати певним чином, бути милою й подобатися іншим. Якийсь час вона надто прислухалася до чужих думок і втратила відчуття того, ким вона є насправді. Вона зрозуміла, що вміє бути тільки собою. Селена нагадала глядачам, що саме вони, а не вона, змінюють світ, і попросила їх бути добрими, підтримувати одне одного та вчитися на власних помилках. Її головна думка була простою: довіряй собі, залишайся собою і уважно обирай друзів.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How old was Selena Gomez’s mother when she had Selena?', uk: 'Скільки років було мамі Селени Гомес, коли вона народила Селену?' },
        options: [
          { en: 'Sixteen', uk: 'Шістнадцять' },
          { en: 'Twenty-one', uk: 'Двадцять один' },
          { en: 'Eleven', uk: 'Одинадцять' },
        ],
        correct: 0,
        explain: { en: 'The text says her mom had her when she was sixteen.', uk: 'У тексті сказано, що мама народила її, коли їй було шістнадцять.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did a casting director tell eleven-year-old Selena?', uk: 'Що кастинг-директор сказав одинадцятирічній Селені?' },
        options: [
          { en: 'That she wasn’t strong enough to carry her own show', uk: 'Що вона недостатньо сильна, щоб витягнути власне шоу' },
          { en: 'That she was the best young actress he had ever seen', uk: 'Що вона найкраща юна акторка, яку він бачив' },
          { en: 'That she should stop acting', uk: 'Що їй слід перестати грати' },
        ],
        correct: 0,
        explain: { en: 'A casting director told her she wasn’t strong enough to carry her own show.', uk: 'Кастинг-директор сказав їй, що вона недостатньо сильна, щоб витягнути власне шоу.' },
      },
      {
        kind: 'open',
        q: { en: 'What was Selena’s mother’s main advice, and why did it matter?', uk: 'Якою була головна порада мами Селени і чому вона була важливою?' },
        sample: { en: 'Her mother told her to always trust herself and keep doing what she loved despite criticism — this advice helped Selena keep going and later get her own TV show.', uk: 'Мама порадила їй завжди довіряти собі й продовжувати займатися улюбленою справою, попри критику, — ця порада допомогла Селені не здаватися і згодом отримати власне телешоу.' },
      },
    ],
  },
  {
    id: 'angelina-jolie-what-we-stand-for',
    title: { en: 'Angelina Jolie: What We Stand For', uk: 'Анджеліна Джолі: за що ми виступаємо' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'Angelina Jolie — speech', url: 'https://www.youtube.com/watch?v=r3aCv8b2OfE&list=PLosaC3gb0kGCnvkRvp8aOF4OIuGaqDHG8&index=16' },
    topics: ['humanitarian-work', 'united-nations', 'refugees', 'diplomacy', 'human-rights'],
    body: {
      en: [
        'Angelina Jolie is an American actress and humanitarian. For sixteen years, she has worked with UNHCR, the United Nations refugee agency. In this speech, she paid tribute to Sergio Vieira de Mello, a UN diplomat who spent thirty years serving the United Nations — in places like Bangladesh, Bosnia, South Sudan, and East Timor — before becoming the UN’s Special Representative to Iraq. In August 2003, he and twenty-one other people, most of them UN workers, were killed in the bombing of the UN headquarters in Baghdad.',
        'Jolie described a world facing the worst refugee crisis since the founding of the United Nations, with millions of people in Yemen, Somalia, South Sudan, and Nigeria at risk of starvation. She said that many humanitarian aid programs are badly underfunded, even in countries close to famine. She called herself both a proud American and an “internationalist,” explaining that this means treating the world with fairness and humility, and recognizing shared humanity in the struggles of others — not placing one nation above the rest.',
        'Despite the UN’s imperfections, Jolie said it remains essential, since diplomacy and international cooperation offer the best path to lasting peace and security. She argued that emergency aid alone is not a real solution — investment in infrastructure, schools, and trade would be better — but that such aid must continue as long as diplomacy fails to prevent conflict. She closed by urging her audience to remember people like Sergio Vieira de Mello and to renew their own commitment to the ideals of the United Nations.',
      ].join('\n\n'),
      uk: [
        'Анджеліна Джолі — американська акторка й гуманітарна діячка. Уже шістнадцять років вона співпрацює з УВКБ ООН, агенцією ООН у справах біженців. У цій промові вона віддала шану Сержіу Віейра ді Меллу, дипломату ООН, який тридцять років працював на Організацію Об’єднаних Націй — у Бангладеш, Боснії, Південному Судані та Східному Тиморі, — перш ніж стати Спеціальним представником ООН в Іраку. У серпні 2003 року він та ще двадцять один працівник, більшість із яких були співробітниками ООН, загинули під час вибуху в штаб-квартирі ООН у Багдаді.',
        'Джолі описала світ, який переживає найгіршу кризу біженців від часу заснування ООН: мільйони людей у Ємені, Сомалі, Південному Судані та Нігерії перебувають на межі голоду. Вона сказала, що багато гуманітарних програм фінансуються вкрай недостатньо, навіть у країнах на межі голоду. Вона назвала себе водночас гордою американкою та «інтернаціоналісткою», пояснивши, що це означає ставитися до світу зі справедливістю й скромністю та бачити спільну людяність у боротьбі інших людей — не ставлячи одну націю вище за інші.',
        'Попри недоліки ООН, Джолі сказала, що ця організація залишається необхідною, адже дипломатія та міжнародна співпраця — це найкращий шлях до тривалого миру й безпеки. Вона стверджувала, що екстрена допомога сама собою не є справжнім рішенням — набагато краще було б інвестувати в інфраструктуру, освіту й торгівлю, — але така допомога має тривати, доки дипломатія не здатна запобігти конфліктам. Наприкінці вона закликала присутніх пам’ятати про таких людей, як Сержіу Віейра ді Меллу, і знову підтвердити власну відданість ідеалам Організації Об’єднаних Націй.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Who was Sergio Vieira de Mello, according to the speech?', uk: 'Ким був Сержіу Віейра ді Меллу, згідно з промовою?' },
        options: [
          { en: 'A journalist who reported on the Iraq war', uk: 'Журналіст, який висвітлював війну в Іраку' },
          { en: 'A UN diplomat killed in the 2003 bombing in Baghdad', uk: 'Дипломат ООН, який загинув під час вибуху в Багдаді 2003 року' },
          { en: 'A former president of the United Nations', uk: 'Колишній президент Організації Об’єднаних Націй' },
        ],
        correct: 1,
        explain: { en: 'The text says he “and twenty-one other people, most of them UN workers, were killed in the bombing of the UN headquarters in Baghdad.”', uk: 'У тексті сказано, що «він та ще двадцять один працівник, більшість із яких були співробітниками ООН, загинули під час вибуху в штаб-квартирі ООН у Багдаді».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did Jolie say was needed to reach lasting peace and security?', uk: 'Що, за словами Джолі, потрібно для досягнення тривалого миру та безпеки?' },
        options: [
          { en: 'Ending all emergency humanitarian aid', uk: 'Припинення всієї екстреної гуманітарної допомоги' },
          { en: 'Each nation acting completely alone', uk: 'Повністю самостійні дії кожної нації' },
          { en: 'Diplomacy and international cooperation', uk: 'Дипломатія та міжнародна співпраця' },
        ],
        correct: 2,
        explain: { en: 'Jolie said “diplomacy and international cooperation offer the best path to lasting peace and security.”', uk: 'Джолі сказала: «дипломатія та міжнародна співпраця — це найкращий шлях до тривалого миру й безпеки».' },
      },
      {
        kind: 'open',
        q: { en: 'What does being an “internationalist” mean to Angelina Jolie?', uk: 'Що для Анджеліни Джолі означає бути «інтернаціоналісткою»?' },
        sample: { en: 'It means treating the world with fairness and humility, recognizing shared humanity in others’ struggles, and not placing one’s own nation above the rest.', uk: 'Це означає ставитися до світу зі справедливістю й скромністю, бачити спільну людяність у боротьбі інших і не ставити власну націю вище за інші.' },
      },
    ],
  },
  {
    id: 'ellen-degeneres-be-true-to-yourself',
    title: { en: 'Ellen DeGeneres: Be True to Yourself', uk: 'Еллен Дедженерес: залишайся собою' },
    category: 'biographies',
    level: 'b1',
    minutes: 2,
    source: { author: 'Ellen DeGeneres — Tulane Commencement Address (2009)', url: 'https://www.youtube.com/watch?v=bDth6cv5raI&list=PLosaC3gb0kGCnvkRvp8aOF4OIuGaqDHG8&index=21' },
    topics: ['comedy', 'television', 'coming-out', 'resilience', 'authenticity'],
    body: {
      en: [
        'Ellen DeGeneres is an American comedian, actress, and TV host. In 2009, she returned to her hometown, New Orleans, to give the commencement address at Tulane University. She joked that she never finished college herself, but had tried many jobs when she was young — shucking oysters, waitressing, painting houses, and selling vacuum cleaners — without knowing what she really wanted to do with her life.',
        'Her path changed after a tragic event: when she was about nineteen, her girlfriend was killed in a car accident. Struggling to understand why, DeGeneres began writing an imaginary conversation with God. She later performed it as a comedy routine, and it eventually led to an appearance on The Tonight Show, where she became the first woman in the show’s history to be invited to sit down and talk with the host after her performance. This was the beginning of her stand-up comedy career.',
        'Stand-up comedy led to her own sitcom, but for years she hid the fact that she was gay, afraid audiences would reject her. Eventually she decided to come out publicly, and her TV character came out at the same time. The show was cancelled soon afterward, and for three years she received no job offers. Still, she received letters from young viewers who said her courage had helped them through very difficult times, and she later got the chance to host a new talk show, which became very successful. She told the graduates that losing everything taught her the most important lesson: to be true to yourself, live with integrity, and not give in to pressure to be someone you’re not.',
      ].join('\n\n'),
      uk: [
        'Еллен Дедженерес — американська комедіантка, акторка й телеведуча. У 2009 році вона повернулася до рідного міста, Нового Орлеана, щоб виступити з промовою на випускній церемонії Тулейнського університету. Вона пожартувала, що сама так і не закінчила коледж, зате в молодості перепробувала багато робіт — чистила устриці, обслуговувала столики, фарбувала будинки й продавала пилососи, — не знаючи, чого насправді хоче від життя.',
        'Її шлях змінила трагічна подія: коли їй було близько дев’ятнадцяти років, її дівчина загинула в автомобільній аварії. Намагаючись зрозуміти, чому так сталося, Дедженерес почала писати уявну розмову з Богом. Пізніше вона перетворила цей текст на комедійний номер, який згодом привів її на шоу The Tonight Show, де вона стала першою жінкою в історії програми, яку запросили сісти й поговорити з ведучим після виступу. Так почалася її кар’єра стендап-коміка.',
        'Стендап привів її до власного ситкому, але роками вона приховувала, що вона лесбійка, боячись, що глядачі її відкинуть. Зрештою вона вирішила публічно розповісти про це, і водночас її телегероїня зробила те саме. Незабаром після цього шоу закрили, і три роки їй ніхто не пропонував роботи. Та все ж вона отримувала листи від молодих глядачів, які писали, що її сміливість допомогла їм пережити дуже важкі часи, а згодом їй запропонували вести нове ток-шоу, яке стало дуже успішним. Вона сказала випускникам, що втрата всього навчила її найголовнішого: бути чесною із собою, жити з гідністю та не піддаватися тиску бути кимось іншим.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What inspired Ellen DeGeneres to start writing the routine that began her stand-up career?', uk: 'Що надихнуло Еллен Дедженерес написати номер, який започаткував її кар’єру стендап-коміка?' },
        options: [
          { en: 'An invitation from Johnny Carson’s producers', uk: 'Запрошення від продюсерів Джонні Карсона' },
          { en: 'The death of her girlfriend in a car accident', uk: 'Загибель її дівчини в автомобільній аварії' },
          { en: 'A college writing class assignment', uk: 'Завдання з письма в коледжі' },
        ],
        correct: 1,
        explain: { en: 'The text says that after “her girlfriend was killed in a car accident,” she began writing an imaginary conversation with God, which became her routine.', uk: 'У тексті сказано, що після того, як «її дівчина загинула в автомобільній аварії», вона почала писати уявну розмову з Богом, яка стала основою її номера.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What happened to Ellen DeGeneres’s sitcom after she came out publicly?', uk: 'Що сталося з ситкомом Еллен Дедженерес після того, як вона публічно розповіла про себе?' },
        options: [
          { en: 'It became even more popular than before', uk: 'Він став ще популярнішим, ніж раніше' },
          { en: 'It was replaced immediately by her talk show', uk: 'Його одразу замінили її ток-шоу' },
          { en: 'It was cancelled soon afterward, and she got no job offers for three years', uk: 'Його незабаром закрили, і три роки їй не пропонували роботи' },
        ],
        correct: 2,
        explain: { en: 'The text says “the show was cancelled soon afterward, and for three years she received no job offers.”', uk: 'У тексті сказано: «незабаром після цього шоу закрили, і три роки їй ніхто не пропонував роботи».' },
      },
      {
        kind: 'open',
        q: { en: 'What lesson did Ellen DeGeneres say she learned from losing everything?', uk: 'Якого уроку, за словами Еллен Дедженерес, вона навчилася, втративши все?' },
        sample: { en: 'She learned that the most important thing is to be true to yourself, live with integrity, and never pretend to be someone you’re not.', uk: 'Вона зрозуміла, що найголовніше — бути чесною із собою, жити з гідністю і ніколи не вдавати з себе когось іншого.' },
      },
    ],
  },
  {
    id: 'jfk-inaugural-1961',
    title: { en: 'John F. Kennedy: 1961 Inaugural Address', uk: 'Джон Кеннеді: інавгураційна промова 1961 року' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'John F. Kennedy — Inaugural Address (1961)', url: 'https://www.youtube.com/watch?v=z5jGGYuep2Q&list=PLosaC3gb0kGCnvkRvp8aOF4OIuGaqDHG8&index=54' },
    topics: ['jfk', 'inaugural-address', 'civic-duty', 'leadership', 'history'],
    body: {
      en: [
        'On January 20, 1961, John F. Kennedy was sworn in as the 35th President of the United States. He was the youngest man ever elected to the office. His inaugural address lasted only about fourteen minutes. In the speech, Kennedy told the nation that “the torch has been passed to a new generation of Americans” and called on citizens at home, and other nations abroad, to work together toward peace in a changing world.',
        'The speech is best remembered for one line, in which Kennedy asked Americans to think about service rather than personal gain: “ask not what your country can do for you—ask what you can do for your country.” He also extended this idea to the wider world, telling listeners everywhere to ask what people, working together, could do for human freedom. He said that this new effort would take patience, since it would not be finished quickly, perhaps not even in one lifetime, but he urged everyone to begin.',
        'Kennedy spoke about his own generation, “born in this century, tempered by war,” taking up responsibility for defending freedom. He said that only a few generations in history are given the chance to defend freedom at a moment of great danger, and that he welcomed this responsibility rather than avoiding it. He closed by asking his fellow citizens, and citizens of the world, to join in this shared effort. Less than three years later, on November 22, 1963, Kennedy was assassinated in Dallas, Texas, making him also the youngest president to die in office.',
      ].join('\n\n'),
      uk: [
        '20 січня 1961 року Джон Кеннеді склав присягу як 35-й президент Сполучених Штатів. Він був наймолодшою людиною, яку коли-небудь обирали на цю посаду. Його інавгураційна промова тривала лише близько чотирнадцяти хвилин. У ній Кеннеді сказав нації, що «естафету передано новому поколінню американців», і закликав громадян у себе вдома та інші народи світу працювати разом заради миру в мінливому світі.',
        'Промову найбільше пам’ятають завдяки одному рядку, у якому Кеннеді закликав американців думати про служіння, а не про особисту вигоду: «не питайте, що ваша країна може зробити для вас, — питайте, що ви можете зробити для своєї країни». Він поширив цю думку і на весь світ, закликавши слухачів усюди питати, що люди, працюючи разом, можуть зробити заради людської свободи. Він сказав, що ця нова справа потребуватиме терпіння, адже її не вдасться завершити швидко, можливо, навіть за одне життя, але закликав усіх почати.',
        'Кеннеді говорив про своє покоління, «народжене в цьому столітті, загартоване війною», яке бере на себе відповідальність за захист свободи. Він сказав, що лише небагатьом поколінням в історії випадає шанс захищати свободу в момент найбільшої небезпеки, і що він не уникає цієї відповідальності, а вітає її. Він завершив промову, закликавши співгромадян і громадян усього світу приєднатися до цієї спільної справи. Менш ніж через три роки, 22 листопада 1963 року, Кеннеді був убитий у Далласі, штат Техас, ставши також наймолодшим президентом, який помер, обіймаючи посаду.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How long did Kennedy’s inaugural address last, according to the text?', uk: 'Скільки тривала інавгураційна промова Кеннеді, за текстом?' },
        options: [
          { en: 'About fourteen minutes', uk: 'Близько чотирнадцяти хвилин' },
          { en: 'About one hour', uk: 'Близько однієї години' },
          { en: 'About one hundred days', uk: 'Близько ста днів' },
        ],
        correct: 0,
        explain: { en: 'The text says his inaugural address lasted only about fourteen minutes.', uk: 'У тексті сказано, що його інавгураційна промова тривала лише близько чотирнадцяти хвилин.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is Kennedy’s most remembered line mainly about?', uk: 'Про що передусім найвідоміший рядок промови Кеннеді?' },
        options: [
          { en: 'Asking Congress to build more roads', uk: 'Заклик до Конгресу будувати більше доріг' },
          { en: 'Asking other countries to lower taxes', uk: 'Заклик до інших країн знизити податки' },
          { en: 'Asking citizens to serve their country, not only expect help from it', uk: 'Заклик до громадян служити своїй країні, а не лише очікувати допомоги від неї' },
        ],
        correct: 2,
        explain: { en: 'The famous line is: “ask not what your country can do for you—ask what you can do for your country.”', uk: 'Відомий рядок звучить так: «не питайте, що ваша країна може зробити для вас, — питайте, що ви можете зробити для своєї країни».' },
      },
      {
        kind: 'open',
        q: { en: 'What does the line “ask not what your country can do for you—ask what you can do for your country” mean to you? Give one example of doing something for your community.', uk: 'Що для вас означає рядок «не питайте, що ваша країна може зробити для вас, — питайте, що ви можете зробити для своєї країни»? Наведіть один приклад того, що можна зробити для своєї громади.' },
        sample: { en: 'Answers will vary — e.g., volunteering, helping neighbors, or voting. A good answer connects the idea of service to a real or possible personal action.', uk: 'Відповіді можуть різнитися — наприклад, волонтерство, допомога сусідам або участь у виборах. Гарна відповідь пов’язує ідею служіння з реальною або можливою особистою дією.' },
      },
    ],
  },
  {
    id: 'nelson-mandela-freedom-and-justice',
    title: { en: 'Nelson Mandela: Freedom and Justice', uk: 'Нельсон Мандела: Свобода і справедливість' },
    category: 'biographies',
    level: 'b2',
    minutes: 2,
    source: { author: 'Nelson Mandela — on freedom and justice', url: 'https://www.youtube.com/watch?v=w42rHdvFpVM&list=PLosaC3gb0kGCnvkRvp8aOF4OIuGaqDHG8&index=56' },
    topics: ['nelson-mandela', 'south-africa', 'freedom', 'justice', 'harvard'],
    body: {
      en: [
        'Nelson Mandela was the first democratically elected president of South Africa. After the end of apartheid, the system that had separated people by race, he worked to open dialogue between different groups, encouraged people to talk honestly about past abuses without seeking revenge, and focused on improving economic opportunities for the Black majority. In September 1998, shortly before retiring from office, Mandela traveled to the United States and received an honorary degree from Harvard University at a special ceremony.',
        'In his speech, Mandela said the award was not only for him personally but for the struggles and achievements of the whole South African people. He thanked the millions of people around the world who had supported South Africa’s fight for freedom and justice. He noted that although his country had made progress, the world at the end of the century still had huge gaps between rich and poor, both within countries and between different parts of the world. He said that for humanity as a whole, the walk toward freedom and equality was still a long one.',
        'Mandela argued that democracy means little if it does not also improve people’s daily lives. He said that talk of freedom rings hollow when people still suffer from hunger, preventable disease, illiteracy, or a lack of decent housing. He called for greater partnership between wealthier and poorer nations, including sharing knowledge and education, so that the benefits of learning, science, and technology could reach everyone. He accepted the Harvard degree as a symbol of developed and developing countries joining hands to build a fairer world for all.',
      ].join('\n\n'),
      uk: [
        'Нельсон Мандела був першим демократично обраним президентом Південно-Африканської Республіки. Після завершення апартеїду — системи, що поділяла людей за расовою ознакою, — він працював над налагодженням діалогу між різними групами населення, заохочував людей чесно говорити про минулі порушення, не прагнучи помсти, і зосередився на розширенні економічних можливостей для чорношкірої більшості населення. У вересні 1998 року, незадовго до завершення свого президентського терміну, Мандела відвідав Сполучені Штати й отримав почесний ступінь Гарвардського університету на спеціальній церемонії.',
        'У своєму виступі Мандела сказав, що ця нагорода належить не лише йому особисто, а й боротьбі та досягненням усього південноафриканського народу. Він подякував мільйонам людей у всьому світі, які підтримували боротьбу Південної Африки за свободу і справедливість. Він зауважив, що, попри прогрес у його країні, наприкінці століття світ усе ще мав величезний розрив між багатими і бідними — як усередині країн, так і між різними частинами світу. Він сказав, що для людства загалом шлях до свободи і рівності залишається ще довгим.',
        'Мандела наголосив, що демократія мало важить, якщо вона не покращує повсякденне життя людей. Він сказав, що розмови про свободу звучать порожньо, коли люди досі страждають від голоду, хвороб, яким можна запобігти, неписьменності або відсутності належного житла. Він закликав до більшого партнерства між багатшими й біднішими націями, зокрема у сфері обміну знаннями та освітою, щоб плоди навчання, науки і технологій могли дістатися кожному. Він прийняв ступінь Гарварду як символ того, що розвинені країни та країни, що розвиваються, об’єднують зусилля, щоб побудувати справедливіший світ для всіх.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did Mandela say the Harvard award represented?', uk: 'Що, за словами Мандели, символізувала нагорода Гарварду?' },
        options: [
          { en: 'A prize for scientific research', uk: 'Премію за наукові дослідження' },
          { en: 'The struggles and achievements of the South African people as a whole', uk: 'Боротьбу та досягнення всього південноафриканського народу' },
          { en: 'His personal business success', uk: 'Його особистий успіх у бізнесі' },
        ],
        correct: 1,
        explain: { en: 'Mandela said the award recognized “the struggles and achievements of the South African people as a whole,” not only his individual achievement.', uk: 'Мандела сказав, що нагорода визнає «боротьбу та досягнення всього південноафриканського народу», а не лише його особисте досягнення.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to Mandela’s speech, what problem did the world still face at the end of the century?', uk: 'Яку проблему, за промовою Мандели, світ усе ще мав наприкінці століття?' },
        options: [
          { en: 'A shortage of honorary degrees', uk: 'Нестачу почесних ступенів' },
          { en: 'Too few universities', uk: 'Замало університетів' },
          { en: 'Great gaps between rich and poor', uk: 'Величезний розрив між багатими і бідними' },
        ],
        correct: 2,
        explain: { en: 'Mandela said the world “still had huge gaps between rich and poor, both within countries and between different parts of the world.”', uk: 'Мандела сказав, що світ «усе ще мав величезний розрив між багатими і бідними — як усередині країн, так і між різними частинами світу».' },
      },
      {
        kind: 'open',
        q: { en: 'According to the text, why did Mandela believe that democracy alone is not enough?', uk: 'Чому, за текстом, Мандела вважав, що самої лише демократії недостатньо?' },
        sample: { en: 'Because democratic freedoms mean little if people still suffer from hunger, preventable disease, illiteracy, and poor housing — real life must improve too.', uk: 'Бо демократичні свободи мало важать, якщо люди й далі страждають від голоду, хвороб, яким можна запобігти, неписьменності та поганого житла — реальне життя теж має покращуватися.' },
      },
    ],
  },
  {
    id: 'keanu-reeves-be-thankful',
    title: { en: 'Keanu Reeves: Be Thankful', uk: 'Кіану Рівз: будь вдячним' },
    category: 'biographies',
    level: 'b1',
    minutes: 2,
    source: { author: 'Keanu Reeves — interview', url: 'https://www.youtube.com/watch?v=H5bSGdZk8pQ&list=PLosaC3gb0kGCnvkRvp8aOF4OIuGaqDHG8&index=70' },
    topics: ['gratitude', 'hollywood', 'acting-career', 'humility'],
    body: {
      en: [
        'Keanu Reeves gave this speech in 2019 at his handprint and footprint ceremony at the TCL Chinese Theatre. He is a Canadian actor known for being humble, and he often shares credit for his success with his co-stars and crew. In his speech, he thanked many people, starting with his friend and John Wick co-star Laurence Fishburne, for his friendship, mentorship, and wisdom. He also thanked the Chinese Theatre for including him among the artists honored there over the past ninety-two years, and he thanked the studio Lionsgate, along with John Wick director Chad Stahelski and the rest of the film’s team.',
        'Keanu explained that he started acting at fifteen years old in Toronto, Canada. At twenty, he drove across the country to Los Angeles with a dream of being in movies. Before that dream could begin, he needed a manager, Erwin Stoff, who believed in him, and an agent, Hildy Gottlieb, who gave him his first real chance. He also thanked his stepfather, Paul Aaron, a director who shared his love of theater and film with Keanu and encouraged him to train as an actor. Keanu remembered his teacher Rose Dubin, who ran a theater program in Toronto, where he played the role of Mercutio at sixteen and was first noticed by an agent.',
        'Keanu also thanked his friends and family, especially his mother. He remembered asking her, at age fifteen, if it was okay for him to become an actor. She told him, “Do whatever you want to do, darling,” and that was the beginning of his acting journey. Keanu ended his speech by saying how much he loves movies — both watching them and making them — and how honored he felt to be celebrated at such a historic place, alongside the artists of the past, present, and future.',
      ].join('\n\n'),
      uk: [
        'Кіану Рівз виголосив цю промову 2019 року на церемонії відбитків рук і ніг у театрі TCL Chinese Theatre. Він канадський актор, відомий своєю скромністю, і часто ділиться визнанням за свій успіх із партнерами по зйомках і знімальною групою. У своїй промові він подякував багатьом людям, почавши з друга й партнера по фільму «Джон Вік» Лоуренса Фішберна — за дружбу, наставництво й мудрість. Він також подякував театру Chinese Theatre за те, що його включили до числа митців, яких там вшановують уже дев’яносто два роки, а ще подякував студії Lionsgate, режисеру «Джона Віка» Чаду Сталелскі й усій знімальній команді фільму.',
        'Кіану розповів, що почав акторську кар’єру у п’ятнадцять років у Торонто, Канада. У двадцять років він проїхав через усю країну до Лос-Анджелеса з мрією зніматися в кіно. Перш ніж ця мрія могла здійснитися, йому потрібен був менеджер, Ервін Стофф, який повірив у нього, та агентка Гілді Готтліб, яка дала йому перший справжній шанс. Він також подякував вітчиму, Полу Аарону, режисеру, який поділився з Кіану своєю любов’ю до театру й кіно та надихнув його навчатися акторській майстерності. Кіану згадав свою вчительку Роуз Дубін, яка керувала театральною програмою в Торонто, де він у шістнадцять років зіграв роль Меркуціо і вперше привернув увагу агента.',
        'Кіану також подякував друзям і родині, особливо мамі. Він згадав, як у п’ятнадцять років запитав її, чи можна йому стати актором. Вона відповіла: «Роби все, що хочеш, любий», — і саме так почався його акторський шлях. Кіану завершив промову словами про те, як сильно він любить кіно — і дивитися фільми, і знімати їх, — і як почесно йому було отримати відзнаку в такому історичному місці поряд із митцями минулого, теперішнього і майбутнього.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Where did Keanu Reeves start acting?', uk: 'Де Кіану Рівз почав акторську кар’єру?' },
        options: [
          { en: 'In Toronto, Canada', uk: 'У Торонто, Канада' },
          { en: 'In Los Angeles, California', uk: 'У Лос-Анджелесі, Каліфорнія' },
          { en: 'In New York City', uk: 'У Нью-Йорку' },
        ],
        correct: 0,
        explain: { en: 'The text says he started acting at fifteen years old in Toronto, Canada.', uk: 'У тексті сказано, що він почав акторську кар’єру у п’ятнадцять років у Торонто, Канада.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did Keanu’s mother say when he asked if he could become an actor?', uk: 'Що відповіла мама Кіану, коли він запитав, чи можна йому стати актором?' },
        options: [
          { en: '“Do whatever you want to do, darling.”', uk: '«Роби все, що хочеш, любий»' },
          { en: '“No, you should study something else.”', uk: '«Ні, тобі варто вивчати щось інше»' },
          { en: 'She did not answer him.', uk: 'Вона йому не відповіла' },
        ],
        correct: 0,
        explain: { en: 'She told him, “Do whatever you want to do, darling,” which is a direct quote from the text.', uk: 'Вона сказала йому: «Роби все, що хочеш, любий» — це пряма цитата з тексту.' },
      },
      {
        kind: 'open',
        q: { en: 'Why did Keanu Reeves thank so many different people in his speech?', uk: 'Чому Кіану Рівз подякував стількох різним людям у своїй промові?' },
        sample: { en: 'He said he could not have reached this point in his career without the support, belief, and help of many people, including his manager, agent, teachers, friends, and family.', uk: 'Він сказав, що не досяг би такого етапу в кар’єрі без підтримки, віри й допомоги багатьох людей, зокрема менеджера, агентки, вчителів, друзів і родини.' },
      },
    ],
  },
  {
    id: 'jack-ma-never-give-up',
    title: { en: 'Jack Ma: We Never Give Up', uk: 'Джек Ма: Ми ніколи не здаємося' },
    category: 'biographies',
    level: 'b1',
    minutes: 2,
    source: { author: 'Jack Ma — motivational talk', url: 'https://www.youtube.com/watch?v=CZfp0ZUsBdM&list=PLosaC3gb0kGCnvkRvp8aOF4OIuGaqDHG8&index=79' },
    topics: ['entrepreneurship', 'resilience', 'china', 'self-made', 'never-give-up'],
    body: {
      en: [
        'Jack Ma is a Chinese businessman who built Alibaba, now one of the world’s biggest e-commerce companies. His life was not easy at the start. As a child, he failed important exams several times, and he needed three attempts to pass the university entrance exam. Harvard rejected him ten times. He also applied for many jobs and was rejected almost every time — for example, when KFC came to his city, twenty-three of twenty-four applicants were accepted, and he was the only one who was not.',
        'As a teenager, Jack Ma became interested in English, but there were no English books in his city. For nine years, he offered free tours to foreign tourists at a local hotel, and in return they taught him English. One tourist could not pronounce his Chinese name, Ma Yun, so she suggested the English name Jack. Later, during a difficult time, he watched the film Forrest Gump and was inspired by its simple message: “Never give up.”',
        'In 1995, Jack Ma saw the internet for the first time, during a visit to the United States. He searched online for information about China and found almost nothing, so he decided to build something himself. He started Alibaba with a small team of eighteen people, working from his apartment; the company later grew to tens of thousands of employees and more than one hundred million daily users. Because online trust between strangers was difficult, he also helped create a payment service, even though banks and colleagues doubted the idea. Jack Ma says he has been rejected more than thirty times in his life, but the key lesson is to never give up, keep improving yourself, and avoid complaining.',
      ].join('\n\n'),
      uk: [
        'Джек Ма — китайський бізнесмен, який заснував Alibaba, нині одну з найбільших компаній електронної комерції у світі. На початку його життя було нелегким. У дитинстві він кілька разів провалював важливі іспити, а вступний іспит до університету склав лише з третьої спроби. Гарвард відмовив йому десять разів. Він також подавав заявки на багато робіт і майже щоразу отримував відмову — наприклад, коли в його місті відкрився KFC, з двадцяти чотирьох кандидатів прийняли двадцять трьох, а він виявився єдиним, кого не взяли.',
        'У підлітковому віці Джек Ма зацікавився англійською мовою, але в його місті не було англійських книжок. Протягом дев’яти років він безкоштовно проводив екскурсії для іноземних туристів у місцевому готелі, а натомість вони навчали його англійської. Одна туристка не могла вимовити його китайське ім’я, Ма Юнь, тому запропонувала англійське ім’я Джек. Пізніше, у важкий період свого життя, він подивився фільм «Форрест Гамп» і надихнувся його простим посланням: «Ніколи не здавайся».',
        'У 1995 році Джек Ма вперше побачив інтернет під час поїздки до США. Він шукав у мережі інформацію про Китай, але майже нічого не знайшов, тож вирішив створити щось сам. Він заснував Alibaba разом з невеликою командою з вісімнадцяти осіб, працюючи у власній квартирі; згодом компанія виросла до десятків тисяч співробітників і понад ста мільйонів користувачів щодня. Оскільки довіра між незнайомими людьми в мережі була складною справою, він також допоміг створити платіжний сервіс, хоча банки та колеги сумнівалися в цій ідеї. Джек Ма каже, що протягом життя його відмовляли понад тридцять разів, але головний урок — ніколи не здаватися, постійно вдосконалюватися і не скаржитися.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How many times did Harvard reject Jack Ma?', uk: 'Скільки разів Гарвард відмовляв Джеку Ма?' },
        options: [
          { en: 'Three times', uk: 'Три рази' },
          { en: 'Ten times', uk: 'Десять разів' },
          { en: 'Thirty times', uk: 'Тридцять разів' },
        ],
        correct: 1,
        explain: { en: 'The text says Harvard rejected him ten times.', uk: 'У тексті сказано, що Гарвард відмовляв йому десять разів.' },
      },
      {
        kind: 'mcq',
        q: { en: 'How did Jack Ma learn English as a teenager?', uk: 'Як Джек Ма вивчив англійську мову в підлітковому віці?' },
        options: [
          { en: 'He studied at an English school', uk: 'Він навчався в англійській школі' },
          { en: 'He gave free tours to tourists who taught him', uk: 'Він безкоштовно проводив екскурсії для туристів, які навчали його' },
          { en: 'He worked at a British company', uk: 'Він працював у британській компанії' },
        ],
        correct: 1,
        explain: { en: 'For nine years he gave free tours to foreign tourists at a hotel, and they taught him English in return.', uk: 'Протягом дев’яти років він безкоштовно проводив екскурсії для іноземних туристів, а вони натомість навчали його англійської.' },
      },
      {
        kind: 'open',
        q: { en: 'What is the main lesson Jack Ma shares about facing failure and rejection?', uk: 'Який головний урок Джек Ма виносить із невдач і відмов?' },
        sample: { en: 'He believes people should never give up, keep improving themselves, and avoid complaining when things go wrong.', uk: 'Він вважає, що людям ніколи не варто здаватися, потрібно постійно вдосконалюватися і не скаржитися, коли щось йде не так.' },
      },
    ],
  },
  {
    id: 'rich-dad-poor-dad',
    title: { en: 'Rich Dad, Poor Dad: Two Views of Money', uk: 'Багатий тато, бідний тато: Два погляди на гроші' },
    category: 'biographies',
    level: 'b2',
    minutes: 3,
    source: { author: 'Rich Dad Poor Dad — Robert Kiyosaki (book summary)', url: 'https://www.youtube.com/watch?v=a_sLIkt_x5Y' },
    topics: ['money-mindset', 'personal-finance-book', 'assets-and-liabilities', 'financial-education'],
    body: {
      en: [
        'The book “Rich Dad, Poor Dad” tells the story of its author, Robert Kiyosaki, who grew up with two father figures. His “Poor Dad” was his own father, a highly educated teacher who believed in studying hard, getting good grades, and finding a secure job. Despite his education, he often struggled financially, felt uncomfortable talking about money, and believed that money is the root of all evil. His “Rich Dad” was a friend’s father who was not highly educated but understood how money works. Rich Dad believed that people should not just work for money, but learn to make money work for them.',
        'Through conversations with Rich Dad, Robert learned the difference between an asset and a liability. Rich Dad explained that an asset puts money into your pocket, while a liability takes money out of it. For example, a car that only costs money over time is a liability, while property that earns rent is an asset. Rich Dad described how many people fall into what he called the “rat race”: they study, get a job, earn money, and then spend it on things that create new bills, so they must keep working harder just to pay for them. He said financial freedom means having enough income from assets to cover your expenses, so you no longer need to work only for money.',
        'The book also describes lessons about mindset and habits. Rich Dad taught Robert to ask “How can I afford it?” instead of saying “I can’t afford it,” and to see failure as part of learning rather than something to fear. He recommended simple habits, such as tracking expenses, saving and investing regularly, and learning continuously about money. According to the book, building wealth takes patience and discipline, much like growing a tree from a seed. Its central message is that true wealth comes from financial knowledge and the freedom to choose how you live, not simply from a high salary.',
      ].join('\n\n'),
      uk: [
        'Книга «Багатий тато, бідний тато» розповідає історію свого автора, Роберта Кійосакі, який зростав, маючи двох батьківських наставників. Його «бідний тато» — це його рідний батько, високоосвічений учитель, який вірив, що треба наполегливо вчитися, отримувати хороші оцінки та знайти стабільну роботу. Попри освіту, він часто мав фінансові труднощі, почувався незручно, говорячи про гроші, і вважав, що гроші — корінь усього зла. Його «багатий тато» — це батько друга, який не мав високої освіти, але розумів, як працюють гроші. Багатий тато вважав, що людям не варто просто працювати заради грошей, а треба навчитися змушувати гроші працювати на себе.',
        'Завдяки розмовам із багатим татом Роберт дізнався різницю між активом і пасивом. Багатий тато пояснив, що актив приносить гроші до твоєї кишені, тоді як пасив забирає гроші з неї. Наприклад, автомобіль, що з часом лише коштує грошей, — це пасив, а нерухомість, яка приносить орендну плату, — це актив. Багатий тато описав, як багато людей потрапляють у те, що він називав «перегони на біговому колесі»: вони вчаться, отримують роботу, заробляють гроші, а потім витрачають їх на речі, які створюють нові рахунки, тож їм доводиться працювати ще більше, щоб їх оплачувати. Він казав, що фінансова свобода означає мати достатньо доходу від активів, щоб покривати свої витрати, тож більше не потрібно працювати лише заради грошей.',
        'Книга також описує уроки про мислення та звички. Багатий тато навчив Роберта запитувати «Як я можу собі це дозволити?» замість того, щоб казати «Я не можу собі це дозволити», і сприймати невдачу як частину навчання, а не як щось, чого варто боятися. Він радив прості звички: відстежувати витрати, регулярно заощаджувати й інвестувати та постійно вчитися про гроші. Згідно з книгою, для створення багатства потрібні терпіння й дисципліна, подібно до вирощування дерева з насінини. Її головна ідея полягає в тому, що справжнє багатство походить від фінансових знань і свободи обирати, як жити, а не просто від високої зарплати.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the book, what is the difference between an asset and a liability?', uk: 'Згідно з книгою, у чому різниця між активом і пасивом?' },
        options: [
          { en: 'An asset puts money in your pocket; a liability takes money out', uk: 'Актив приносить гроші до кишені, а пасив забирає гроші з неї' },
          { en: 'An asset is always expensive and a liability is always cheap', uk: 'Актив завжди дорогий, а пасив завжди дешевий' },
          { en: 'There is no real difference between them', uk: 'Між ними немає жодної різниці' },
        ],
        correct: 0,
        explain: { en: 'The text says an asset puts money into your pocket, while a liability takes money out of it.', uk: 'У тексті сказано, що актив приносить гроші до кишені, а пасив забирає гроші з неї.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did Rich Dad teach Robert to ask instead of saying ‘I can’t afford it’?', uk: 'Що багатий тато навчив Роберта запитувати замість фрази «Я не можу собі це дозволити»?' },
        options: [
          { en: '‘How can I afford it?’', uk: '«Як я можу собі це дозволити?»' },
          { en: '‘Why is everything so expensive?’', uk: '«Чому все таке дороге?»' },
          { en: '‘Who can lend me money?’', uk: '«Хто може позичити мені грошей?»' },
        ],
        correct: 0,
        explain: { en: 'The text says Rich Dad taught Robert to ask ‘How can I afford it?’ instead of ‘I can’t afford it.’', uk: 'У тексті сказано, що багатий тато навчив Роберта запитувати «Як я можу собі це дозволити?» замість «Я не можу собі це дозволити».' },
      },
      {
        kind: 'open',
        q: { en: 'According to the book, what does financial freedom mean?', uk: 'Що, згідно з книгою, означає фінансова свобода?' },
        sample: { en: 'It means having enough income from assets to cover your expenses, so you no longer need to work only for money.', uk: 'Це означає мати достатньо доходу від активів, щоб покривати свої витрати, і більше не потрібно працювати лише заради грошей.' },
      },
    ],
  },
];
