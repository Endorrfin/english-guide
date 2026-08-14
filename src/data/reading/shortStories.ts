import type { ReadingText } from '../types';

/*
 * Reading · category: short stories. Wave S2 (screenshot OCR, CLAUDE.md §15) — first-person
 * narrative micro-stories (a lost wallet, an old library, a rainy day). New rubric: these are
 * stories rather than essays, so they read badly filed under `life`/`other`.
 */
export const shortStoriesTexts: ReadingText[] = [
  {
    id: 'learn-to-appreciate',
    title: { en: 'Learn to Appreciate', uk: 'Навчися цінувати' },
    category: 'short-stories',
    level: 'b1',
    minutes: 4,
    topics: ['kindness', 'generosity', 'karma'],
    body: {
      en: [
        'Once upon a time, there was a man who was very helpful, kindhearted, and generous. He was a man who will help someone without asking anything to pay him back. He will help someone because he wants to and he loves to. One day while walking into a dusty road, this man saw a purse, so he picked it up and noticed that the purse was empty. Suddenly a woman with a policeman shows up and gets him arrested.',
        'The woman kept on asking where did he hide her money but the man replied, "It was empty when I found it, Mam." The woman yelled at him, "Please give it back, It\'s for my son\'s school fees." The man noticed that the woman really felt sad, so he handed all his money. He could say that the woman was a single mother. The man said, "Take these, sorry for the inconvenience." The woman left and policeman held he man for further questioning.',
        'The woman was very happy but when she counted her money later on, it was doubled, she was shocked. One day while woman was going to pay her son\'s school fees towards the school, she noticed that some skinny man was walking behind her. She thought that he may rob her, so she approached a policeman standing nearby. He was the same policeman, who she took along to inquire about her purse. The woman told him about the man following her, but suddenly they saw that man collapsing. They ran at him, and saw that he was the same man whom they arrested few days back for stealing a purse.',
        'He looked very weak and woman was confused. The policeman said to the woman, "He didn\'t return your money, he gave you his money that day. He wasn\'t the thief but hearing about you son\'s school fees, he felt sad and gave you his money." Later, they helped man stand up, and man told the woman, "Please go ahead and pay your son\'s school fees, I saw you and followed you to be sure that no one steals your son\'s school fees." The woman was speechless.',
        'Moral: Life gives you strange experiences, sometime it shocks you and sometimes it may surprise you. We end up making wrong judgments or mistakes in our anger, desperation and frustration. However, when you get a second chance, correct your mistakes and return the favor. Be Kind and Generous. Learn to Appreciate what you are given.',
      ].join('\n\n'),
      uk: [
        'Колись давно жив чоловік — дуже чуйний, добросердий і щедрий. Він завжди допомагав людям, нічого не просячи натомість. Він допомагав просто тому, що сам цього хотів і любив це робити. Одного разу, йдучи курною дорогою, цей чоловік побачив гаманець, підняв його і виявив, що той порожній. Раптом зʼявилася жінка з поліцейським, і чоловіка заарештували.',
        'Жінка невпинно допитувалася, куди він подів її гроші, але чоловік відповідав: «Він був порожній, коли я його знайшов, пані». Жінка закричала на нього: «Поверніть гроші, будь ласка, вони потрібні на навчання мого сина!» Чоловік побачив, що жінка справді засмучена, тож віддав їй усі свої гроші. Він здогадався, що жінка — мати-одиначка. «Візьміть це, — сказав чоловік, — вибачте за клопіт». Жінка пішла, а поліцейський затримав чоловіка для подальшого допиту.',
        'Жінка була дуже рада, але коли пізніше перерахувала гроші, виявилося, що їх удвічі більше, ніж мало бути, — вона була вражена. Одного дня, коли жінка йшла до школи, щоб заплатити за навчання сина, вона помітила, що позаду неї йде якийсь худий чоловік. Вона подумала, що він може її пограбувати, тож підійшла до поліцейського, який стояв неподалік. Це виявився той самий поліцейський, якого вона колись брала з собою через історію з гаманцем. Жінка розповіла йому про чоловіка, що йшов слідом, аж раптом вони побачили, що той чоловік упав. Вони підбігли до нього і зрозуміли, що це той самий чоловік, якого кілька днів тому заарештували за крадіжку гаманця.',
        'Він виглядав дуже слабким, і жінка розгубилася. Поліцейський сказав їй: «Він не повернув ваші гроші — того дня він віддав вам свої власні. Він не був злодієм: почувши про плату за навчання вашого сина, він засмутився і віддав вам свої гроші». Потім вони допомогли чоловікові підвестися, і він сказав жінці: «Будь ласка, ідіть і заплатіть за навчання сина. Я побачив вас і пішов слідом, щоб переконатися, що ніхто не вкраде ці гроші». Жінка не могла вимовити ні слова.',
        'Мораль: життя дарує дивовижний досвід — часом воно шокує, а часом дивує. У гніві, відчаї чи розпачі ми часто робимо неправильні висновки або помиляємося. Але коли випадає другий шанс, варто виправити свою помилку і віддячити добром. Будьте добрими і щедрими. Навчіться цінувати те, що вам дано.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What happened to the man right after he picked up the empty purse?', uk: 'Що сталося з чоловіком одразу після того, як він підняв порожній гаманець?' },
        options: [
          { en: 'He ran away immediately', uk: 'Він одразу втік' },
          { en: 'He got arrested when a woman and a policeman showed up', uk: 'Його заарештували, коли зʼявилися жінка з поліцейським' },
          { en: 'He gave it to the policeman himself', uk: 'Він сам віддав гаманець поліцейському' },
        ],
        correct: 1,
        explain: { en: 'A woman showed up with a policeman and had him arrested for the empty purse.', uk: 'Жінка зʼявилася разом із поліцейським, і чоловіка заарештували через порожній гаманець.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why did the man give the woman his own money, even though the purse he found was empty?', uk: 'Чому чоловік віддав жінці власні гроші, хоча знайдений ним гаманець був порожній?' },
        options: [
          { en: 'He felt sorry for her because she needed money for her son\'s school fees', uk: 'Йому стало шкода її, адже гроші були потрібні на навчання сина' },
          { en: 'The policeman ordered him to pay a fine', uk: 'Поліцейський наказав йому сплатити штраф' },
          { en: 'He wanted a reward for finding the purse', uk: 'Він хотів отримати винагороду за знахідку' },
        ],
        correct: 0,
        explain: { en: 'He saw that the woman was sad and realized she was a single mother who needed money for her son\'s school fees, so he gave her his own money.', uk: 'Він побачив, що жінка засмучена, і зрозумів, що вона мати-одиначка, якій потрібні гроші на навчання сина, тож віддав їй свої власні.' },
      },
      {
        kind: 'open',
        q: { en: 'The moral says life can \'shock you\' and \'surprise you,\' and that we should \'return the favor\' when we get a second chance. Has someone\'s kindness ever surprised you, or have you had a chance to make up for a misunderstanding?', uk: 'Мораль каже, що життя може «шокувати» і «дивувати» нас, і що варто «віддячити добром», коли випадає другий шанс. Чи траплялося з вами таке, що чиясь доброта вас здивувала, або що випадала нагода виправити непорозуміння?' },
        sample: { en: 'Yes — once a stranger paid for my bus ticket when I\'d lost my wallet, and a few months later I was able to help someone else the same way. It taught me that kindness often comes back around unexpectedly.', uk: 'Так — одного разу незнайомець оплатив мій квиток на автобус, коли я загубив гаманець, а через кілька місяців я зміг так само допомогти іншій людині. Це навчило мене, що доброта часто повертається, коли її не чекаєш.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'old-witch-and-noble-knight',
    title: { en: 'Old Witch and Noble Knight', uk: 'Стара відьма і шляхетний лицар' },
    category: 'short-stories',
    level: 'b1',
    minutes: 4,
    topics: ['legend', 'respect', 'folk-tale'],
    body: {
      en: [
        'Once there was a very noble name Arthur who was captured by his neighboring king. Enemy could have killed him but Enemy king knew that he was very wise and noble king. So he offered him freedom but on one condition. He would have to figure out an answer and even if after an year Arthur wouldn\'t be able to answer then he would be put to death. Question was: What does a woman really wants?? Even most knowledgeable wouldn\'t be able to answer that but still Arthur accepted Enemy king preposition as it was better than death. Arthur returned to his kingdom and begin to ask everyone about it but no one was able to give any satisfactory answer. Many people advised him to consult an old witch but she was famous for charging exorbitant prices. For whole year Arthur avoided going to witch but last day came and he had no other option but to go to witch. He went to her and told him about his problem. Witch agreed to help him but for a price in return. Price was: Witch wanted to marry Gwen.. most noble night and Arthur\'s closet friend. Arthur was horrified to know price as witch was very ugly looking hideous and smelled very bad. Arthur didn\'t wanted to force his friend to marry such repugnant creature so he refused. Later Gwen got to know about witch proposal and talked to Arthur. Same night Gwen and witch wedding was proclaimed and Witch answered Arthur question.. Answer was: What woman really want is to be in charge of her own life. Arthur went back to neighboring kingdom and Enemy king was satisfied by answer and hence granted Arthur his freedom. Even after getting his freedom back Arthur was not happy because for this his best friend Gwen had to marry an old Witch. Next day, honeymoon hour approached. Gwen prepared his mind for worst but to his surprise inside room was awaiting the most beautiful woman he had ever seen. Witch said to Gwen, “I would be horrible and ugly witch half the time and beautiful maiden self for half.. Which would you want me to be during the day and which during the night?? Would you prefer a beautiful maiden during to show off to your friends but at night an old witch.. or would you prefer an old hideous witch during day but by night a beautiful women to be with??”. Gwen replied, “I would like you to choose that for yourself..” Hearing this witch announced that she would be beautiful all the time because he had respected her enough to be in-charge of her life..',
        'Moral: Treat Woman with Respect and let her be the One to decide for Herself.',
      ].join('\n\n'),
      uk: [
        'Колись жив шляхетний Артур, якого захопив сусідній король-ворог. Ворог міг би вбити його, та знав, що Артур — дуже мудрий і шляхетний правитель. Тому він запропонував йому свободу, але за однієї умови: Артур мав знайти відповідь на запитання, і якщо навіть за цілий рік не зміг би відповісти, його стратили б. Запитання було таким: чого насправді хоче жінка?? Навіть найрозумніші люди не змогли б на нього відповісти, але Артур усе одно прийняв умову ворожого короля, адже це було краще за смерть. Артур повернувся до свого королівства і почав розпитувати всіх підряд, але ніхто не міг дати задовільної відповіді. Багато хто радив звернутися до старої відьми, та вона славилася тим, що бере за свою допомогу шалені гроші. Цілий рік Артур уникав відьми, але настав останній день, і іншого виходу не лишилося — довелося піти до неї. Він прийшов і розповів їй про свою біду. Відьма погодилася допомогти, але за певну плату. Плата була такою: відьма хотіла вийти заміж за Гвена — найшляхетнішого лицаря і найближчого друга Артура. Почувши цю ціну, Артур жахнувся, адже відьма була бридкою, потворною на вигляд і мала жахливий запах. Він не хотів змушувати друга одружуватися з такою огидною істотою і тому відмовився. Та згодом Гвен дізнався про умову відьми і сам поговорив з Артуром. Того ж вечора оголосили про весілля Гвена і відьми, і відьма дала Артурові відповідь: жінка насправді хоче сама розпоряджатися своїм життям. Артур повернувся до сусіднього королівства, і ворожий король, задоволений відповіддю, подарував Артурові свободу. Але навіть повернувши собі свободу, Артур не був щасливий, адже через це його найкращому другові Гвену довелося одружитися зі старою відьмою. Наступного дня настала перша шлюбна ніч. Гвен готувався до найгіршого, та на превеликий подив у кімнаті на нього чекала найвродливіша жінка, яку він будь-коли бачив. Відьма сказала Гвену: «Половину часу я буватиму потворною і бридкою відьмою, а другу половину — вродливою дівчиною. Ким ти хочеш, щоб я була вдень, а ким уночі?? Волів би ти вродливу дівчину вдень, щоб похвалитися нею перед друзями, а вночі стару відьму, чи, навпаки, бридку відьму вдень, а вродливу жінку поруч із собою вночі?». Гвен відповів: «Я хочу, щоб ти сама обрала це для себе». Почувши це, відьма оголосила, що відтепер буде вродливою завжди, бо він поважав її настільки, щоб дозволити самій розпоряджатися власним життям.',
        'Мораль: ставтеся до жінки з повагою і дозволяйте їй самій вирішувати за себе.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What was the question Arthur had to answer to save his life?', uk: 'На яке запитання мав відповісти Артур, щоб урятувати своє життя?' },
        options: [
          { en: 'What does a king really want?', uk: 'Чого насправді хоче король?' },
          { en: 'What does a woman really want?', uk: 'Чого насправді хоче жінка?' },
          { en: 'What does a witch really want?', uk: 'Чого насправді хоче відьма?' },
        ],
        correct: 1,
        explain: { en: 'The enemy king\'s condition was that Arthur must answer the question \'What does a woman really want?\' within a year or be put to death.', uk: 'Умовою ворожого короля було те, що Артур мав за рік знайти відповідь на запитання «Чого насправді хоче жінка?», інакше його стратили б.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why did the witch agree to help Arthur?', uk: 'Чому відьма погодилася допомогти Артуру?' },
        options: [
          { en: 'She wanted a pile of gold coins.', uk: 'Вона хотіла купу золотих монет.' },
          { en: 'She wanted Arthur\'s kingdom.', uk: 'Вона хотіла заволодіти королівством Артура.' },
          { en: 'She wanted to marry Gwen, Arthur\'s closest friend.', uk: 'Вона хотіла одружитися з Гвеном, найближчим другом Артура.' },
        ],
        correct: 2,
        explain: { en: 'The witch\'s price for the answer was that she would marry Gwen, Arthur\'s noble and closest friend.', uk: 'Платою відьми за відповідь була вимога одружитися з Гвеном — шляхетним і найближчим другом Артура.' },
      },
      {
        kind: 'open',
        q: { en: 'Why do you think the witch chose to stay beautiful all the time after Gwen let her decide for herself? What does this reveal about respect in relationships?', uk: 'Чому, на вашу думку, відьма вирішила залишитися вродливою назавжди після того, як Гвен дозволив їй самій вирішувати? Що це говорить про повагу в стосунках?' },
        sample: { en: 'Because Gwen respected her enough to let her choose her own fate instead of controlling her appearance, the witch felt trusted and valued as a person, not just judged by her looks — so she rewarded that respect by choosing to be beautiful always. It shows that respecting someone\'s right to decide for themselves builds trust and brings out the best in a relationship.', uk: 'Гвен настільки поважав відьму, що дозволив їй самій вирішити свою долю, замість того щоб контролювати її вигляд, тож вона відчула, що її цінують як особистість, а не оцінюють лише за зовнішністю, і у відповідь обрала бути вродливою завжди. Це показує, що повага до права людини самій вирішувати за себе будує довіру і розкриває найкраще в стосунках.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'new-school',
    title: { en: 'New School', uk: 'Нова школа' },
    category: 'short-stories',
    level: 'a2',
    minutes: 1,
    topics: ['school', 'friendship', 'first-day'],
    body: {
      en: 'I remember my first day at the new school very clearly. I was nervous and kept holding my mother’s hand. The classroom looked bigger than my old one, and everyone seemed to know each other. I sat quietly at my desk and didn’t talk much. Then a girl next to me smiled and asked my name. We started talking about our favorite cartoons and books. By lunchtime, I didn’t feel so lonely anymore. That day, I learned that sometimes one smile can change everything.',
      uk: 'Я дуже добре памʼятаю свій перший день у новій школі. Я нервувала й весь час трималася за мамину руку. Клас виглядав більшим, ніж мій попередній, і всі, здавалося, вже знали одне одного. Я тихо сиділа за партою й майже не розмовляла. Тоді дівчинка, що сиділа поруч, усміхнулася й запитала, як мене звати. Ми почали розмовляти про наші улюблені мультфільми та книжки. До обіду я вже не почувалася такою самотньою. Того дня я зрозуміла, що іноді одна усмішка може змінити все.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How did the narrator feel on the first day at the new school?', uk: 'Як почувалася розповідачка першого дня в новій школі?' },
        options: [
          { en: 'Excited and confident', uk: 'Схвильованою та впевненою' },
          { en: 'Nervous, and kept holding her mother\'s hand', uk: 'Знервованою, і трималася за мамину руку' },
          { en: 'Angry about changing schools', uk: 'Роздратованою через зміну школи' },
        ],
        correct: 1,
        explain: { en: 'The narrator says, \'I was nervous and kept holding my mother\'s hand.\'', uk: 'Розповідачка каже: «Я нервувала й весь час трималася за мамину руку».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What helped the narrator stop feeling lonely?', uk: 'Що допомогло розповідачці перестати почуватися самотньою?' },
        options: [
          { en: 'Getting a good grade on a test', uk: 'Гарна оцінка за контрольну' },
          { en: 'A girl next to her smiled and started talking', uk: 'Дівчинка поруч усміхнулася й заговорила з нею' },
          { en: 'The teacher gave a speech', uk: 'Промова вчительки' },
        ],
        correct: 1,
        explain: { en: 'The text says a girl next to the narrator \'smiled and asked my name,\' and they started talking, so \'by lunchtime, I didn\'t feel so lonely anymore.\'', uk: 'У тексті сказано, що дівчинка поруч «усміхнулася й запитала, як мене звати», і вони почали розмовляти, тож «до обіду я вже не почувалася такою самотньою».' },
      },
      {
        kind: 'open',
        q: { en: 'What did the narrator learn from this experience, and do you agree that \'one smile can change everything\'?', uk: 'Чого навчилася розповідачка з цього досвіду, і чи погоджуєшся ти, що «одна усмішка може змінити все»?' },
        sample: { en: 'The narrator learned that a small kind gesture, like a smile, can make someone feel welcome. I agree — I remember feeling much less anxious on my first day at a new job after a coworker smiled and introduced herself to me.', uk: 'Розповідачка зрозуміла, що маленький добрий жест, як-от усмішка, може змусити когось відчути себе бажаним гостем. Я погоджуюся — памʼятаю, як почувався набагато спокійніше в перший день на новій роботі після того, як колега усміхнулася і представилася мені.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'the-richest-child',
    title: { en: 'The Richest Child', uk: 'Найбагатша дитина' },
    category: 'short-stories',
    level: 'b1',
    minutes: 3,
    topics: ['wealth', 'gratitude', 'family'],
    body: {
      en: [
        'There was a boy, whose family was very wealthy. One day his father took him on a trip to the country, where he aimed to show his son, how poor people live. So they arrived to a farm of a very poor family, as he considered. They spent there several days. On their return, the father asked his son, did he like the trip.',
        '"Oh, it was great, dad" – the boy replied. "Did you notice how poor people live?" "Yeah, I did"- said the boy. The father asked his son to tell in more details about his impressions from their trip".',
        '"Well, we have only one dog, and they have four of them. In our garden there is a pool, while they have a river that has no end. We\'ve got expensive lanterns, but they have stars above their heads at night. We have the patio, and they have the whole horizon. We have only a small piece of land, while they have the endless fields. We buy food, but they grow it. We have high fence for protection of our property, and they don\'t need it, as their friends protect them."',
        'The father was stunned. He could not say a word.',
        'Then the boy added: "Thank you, dad, for letting me see how poor we are."',
        'This story shows that the true wealth as well as happiness is not measured by materials things. Love, friendship and freedom are far more valuable.',
      ].join('\n\n'),
      uk: [
        'Жив собі хлопчик з дуже заможної родини. Одного разу батько взяв його в подорож за місто, бажаючи показати синові, як живуть бідні люди. Вони приїхали на ферму до дуже бідної, на його думку, родини і провели там кілька днів. Коли вони поверталися додому, батько запитав сина, чи сподобалася йому подорож.',
        '«Це було чудово, тату», — відповів хлопчик. «Ти помітив, як живуть бідні люди?» «Так, помітив», — сказав хлопчик. Тоді батько попросив сина розповісти детальніше про свої враження від подорожі.',
        '«Що ж, у нас лише один пес, а в них їх четверо. У нашому саду є басейн, а в них — річка, якій немає кінця. У нас дорогі ліхтарі, а в них над головою вночі — зорі. У нас є внутрішній дворик, а в них — увесь обрій. У нас лише невеликий клаптик землі, а в них — безкраї поля. Ми купуємо їжу, а вони її вирощують. У нас високий паркан для захисту нашого майна, а їм він не потрібен, бо їх захищають друзі».',
        'Батько був приголомшений. Він не міг вимовити ні слова.',
        'Тоді хлопчик додав: «Дякую, тату, що дав мені побачити, які ми насправді бідні».',
        'Ця історія показує, що справжнє багатство і щастя не вимірюються матеріальними речами. Любов, дружба і свобода набагато цінніші.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'In the boy\'s comparison, what does the poor family have instead of a pool?', uk: 'Що, за порівнянням хлопчика, має бідна родина замість басейну?' },
        options: [
          { en: 'A swimming pool of their own', uk: 'Власний басейн' },
          { en: 'Expensive lanterns', uk: 'Дорогі ліхтарі' },
          { en: 'A river that has no end', uk: 'Річку, якій немає кінця' },
        ],
        correct: 2,
        explain: { en: 'The boy says, "In our garden there is a pool, while they have a river that has no end."', uk: 'Хлопчик каже: «У нашому саду є басейн, а в них — річка, якій немає кінця».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is the main lesson of the story?', uk: 'Яка головна думка цієї історії?' },
        options: [
          { en: 'True wealth and happiness are not measured by material things', uk: 'Справжнє багатство і щастя не вимірюються матеріальними речами' },
          { en: 'Poor families should build higher fences', uk: 'Бідним родинам варто будувати вищі паркани' },
          { en: 'Rich people should travel more often', uk: 'Багатим людям слід частіше подорожувати' },
        ],
        correct: 0,
        explain: { en: 'The closing lines state that true wealth and happiness are not measured by material things, and that love, friendship, and freedom are far more valuable.', uk: 'У завершальних рядках сказано, що справжнє багатство і щастя не вимірюються матеріальними речами, а любов, дружба і свобода набагато цінніші.' },
      },
      {
        kind: 'open',
        q: { en: 'The boy says the poor family doesn\'t need a fence \'as their friends protect them.\' What do you think he means by this?', uk: 'Хлопчик каже, що бідній родині не потрібен паркан, «бо їх захищають друзі». Як ти розумієш цю фразу?' },
        sample: { en: 'I think he means that having close relationships and a supportive community can make you feel safer than owning expensive things, because people who care about you will look out for you.', uk: 'Гадаю, він має на увазі, що міцні стосунки й підтримка спільноти можуть дати більше відчуття безпеки, ніж дорогі речі, адже люди, яким ти небайдужий, завжди подбають про тебе.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'rainy-day',
    title: { en: 'Rainy Day', uk: 'Дощовий день' },
    category: 'short-stories',
    level: 'a2',
    minutes: 1,
    topics: ['family', 'rain', 'memories'],
    body: {
      en: 'It was raining heavily, and I felt bored at home. I watched the raindrops slide down the window. Suddenly, the electricity went out. At first, I felt scared because the house became very quiet. Then my father lit some candles and told us to sit together. We started telling funny stories and laughing. The rain outside made everything feel cozy. That rainy day turned into one of my favorite memories.',
      uk: 'Йшов сильний дощ, і я нудьгував удома. Я дивився, як краплі дощу стікають по вікну. Раптом зникло світло. Спочатку мені стало страшно, бо в будинку стало дуже тихо. Тоді тато запалив кілька свічок і покликав нас сісти разом. Ми почали розповідати кумедні історії й сміятися. Дощ за вікном робив усе таким затишним. Той дощовий день став одним із моїх улюблених спогадів.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why did the narrator feel scared at first?', uk: 'Чому оповідач спочатку злякався?' },
        options: [
          { en: 'Because it was raining heavily', uk: 'Бо йшов сильний дощ' },
          { en: 'Because someone knocked on the door', uk: 'Бо хтось постукав у двері' },
          { en: 'Because the house became very quiet after the power went out', uk: 'Бо в будинку стало дуже тихо після того, як вимкнули світло' },
        ],
        correct: 2,
        explain: { en: 'The narrator says they felt scared because the electricity went out and the house became very quiet.', uk: 'Оповідач каже, що злякався, бо вимкнули світло і в будинку стало дуже тихо.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did the family do after the electricity went out?', uk: 'Що робила родина після того, як вимкнули світло?' },
        options: [
          { en: 'They went outside for a walk', uk: 'Вони пішли на прогулянку' },
          { en: 'They sat together by candlelight, told stories, and laughed', uk: 'Вони сіли разом при свічках, розповідали історії й сміялися' },
          { en: 'They went to bed early', uk: 'Вони рано лягли спати' },
        ],
        correct: 1,
        explain: { en: 'The father lit candles, and the family sat together telling funny stories and laughing.', uk: 'Тато запалив свічки, і родина сіла разом, розповідаючи смішні історії й сміючись.' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a time when a difficult or boring moment turned into a happy memory for you.', uk: 'Опишіть випадок, коли складна чи нудна мить перетворилася для вас на щасливий спогад.' },
        sample: { en: 'Once our flight was delayed for hours, but my family and I played games and talked, and the wait became a fun memory instead of a stressful one.', uk: 'Одного разу наш рейс затримали на кілька годин, але ми з родиною грали в ігри та розмовляли, і те очікування стало приємним спогадом замість стресового.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'my-brother',
    title: { en: 'My Brother', uk: 'Мій брат' },
    category: 'short-stories',
    level: 'b1',
    minutes: 1,
    topics: ['family', 'siblings', 'bravery', 'fear'],
    body: {
      en: 'My little brother is usually afraid of the dark. One night, the lights suddenly went off in our house. I felt scared too, but I didn’t say anything. My brother held my hand and said, “It’s okay, I’m here.” I was surprised because he sounded so brave. We walked together to find a flashlight. When the lights came back, we both started laughing. That night, I realized he was braver than I thought.',
      uk: 'Мій молодший брат зазвичай боїться темряви. Одного вечора світло в нашому будинку раптово вимкнулося. Мені теж стало страшно, але я нічого не сказав. Брат узяв мене за руку і сказав: «Усе гаразд, я тут». Я здивувався, бо він говорив так впевнено. Ми разом пішли шукати ліхтарик. Коли світло знову увімкнулося, ми обоє засміялися. Тієї ночі я зрозумів, що він виявився хоробрішим, ніж я думав.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What happened one night in the narrator\'s house?', uk: 'Що сталося одного вечора в будинку оповідача?' },
        options: [
          { en: 'The lights suddenly went off.', uk: 'Раптово вимкнулося світло.' },
          { en: 'A window broke during a storm.', uk: 'Під час бурі розбилося вікно.' },
          { en: 'Someone knocked on the door.', uk: 'Хтось постукав у двері.' },
        ],
        correct: 0,
        explain: { en: 'The text says the lights suddenly went off in their house.', uk: 'У тексті сказано, що в будинку раптово вимкнулося світло.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why was the narrator surprised by the brother\'s words?', uk: 'Чому оповідача здивували слова брата?' },
        options: [
          { en: 'Because the brother stayed completely silent.', uk: 'Бо брат зовсім промовчав.' },
          { en: 'Because the brother sounded so brave.', uk: 'Бо брат говорив так впевнено і хоробро.' },
          { en: 'Because the brother started crying.', uk: 'Бо брат почав плакати.' },
        ],
        correct: 1,
        explain: { en: 'The narrator was surprised because the brother sounded so brave when he said “It\'s okay, I\'m here.”', uk: 'Оповідач здивувався, бо брат говорив так впевнено, коли сказав: «Усе гаразд, я тут».' },
      },
      {
        kind: 'open',
        q: { en: 'Have you ever been surprised by someone\'s courage in a difficult moment? Describe what happened.', uk: 'Чи траплялося вам дивуватися чиїйсь хоробрості у складний момент? Опишіть, що сталося.' },
        sample: { en: 'Yes, during a blackout at my grandmother\'s house, my younger cousin calmly lit candles and reassured everyone, which surprised me because I always thought of him as the most fearful one.', uk: 'Так, під час відключення світла в бабусиному будинку мій молодший двоюрідний брат спокійно запалив свічки і заспокоїв усіх, що мене здивувало, бо я завжди вважав його найбільш полохливим.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'a-busy-morning',
    title: { en: 'A Busy Morning', uk: 'Напружений ранок' },
    category: 'short-stories',
    level: 'b1',
    minutes: 1,
    topics: ['morning-routine', 'time-management', 'resilience', 'school'],
    body: {
      en: 'One morning, I woke up late and everything felt rushed and confusing. I quickly got ready, packed my bag, and helped my family at the same time. Even though I was nervous, I did not give up and kept moving forward. I realized that staying calm and focused can make a busy morning easier. I reached school just in time, feeling proud of myself. That morning taught me to manage time better and stay strong under pressure. Every busy moment can become a lesson if we choose to learn from it.',
      uk: 'Одного ранку я прокинулася пізно, і все здавалося поспішним і заплутаним. Я швидко зібралася, спакувала сумку і водночас допомогла родині. Хоча я нервувала, я не здалася і продовжувала рухатися вперед. Я зрозуміла, що спокій і зосередженість можуть полегшити напружений ранок. Я встигла дійти до школи вчасно і пишалася собою. Той ранок навчив мене краще керувати часом і залишатися сильною під тиском. Кожна напружена мить може стати уроком, якщо ми обираємо вчитися з неї.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What happened at the beginning of the story?', uk: 'Що сталося на початку історії?' },
        options: [
          { en: 'The narrator missed the school bus.', uk: 'Оповідачка запізнилася на шкільний автобус.' },
          { en: 'The narrator woke up late and everything felt rushed.', uk: 'Оповідачка прокинулася пізно, і все здавалося поспішним.' },
          { en: 'The narrator forgot their homework.', uk: 'Оповідачка забула домашнє завдання.' },
        ],
        correct: 1,
        explain: { en: 'The story begins with the narrator waking up late, which made everything feel rushed and confusing.', uk: 'Історія починається з того, що оповідачка прокинулася пізно, і все здавалося поспішним і заплутаним.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What lesson did the narrator learn from that morning?', uk: 'Якого уроку навчилася оповідачка того ранку?' },
        options: [
          { en: 'That it\'s better to skip school when running late.', uk: 'Що краще пропустити школу, коли запізнюєшся.' },
          { en: 'That mornings are always relaxing.', uk: 'Що ранки завжди розслаблені.' },
          { en: 'That staying calm and focused can make a busy morning easier.', uk: 'Що спокій і зосередженість можуть полегшити напружений ранок.' },
        ],
        correct: 2,
        explain: { en: 'The narrator realized that staying calm and focused can make a busy morning easier.', uk: 'Оповідачка зрозуміла, що спокій і зосередженість можуть полегшити напружений ранок.' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a time when you had a busy or stressful morning. How did you handle it?', uk: 'Опишіть випадок, коли у вас був напружений або стресовий ранок. Як ви з ним впоралися?' },
        sample: { en: 'Once I overslept before an important exam and had only fifteen minutes to get ready. I stayed calm, skipped breakfast, and ran to catch the bus, arriving just before the doors closed, which taught me to prepare my things the night before.', uk: 'Одного разу я проспала перед важливим іспитом, і в мене залишилося лише пʼятнадцять хвилин на збори. Я зберегла спокій, пропустила сніданок і побігла на автобус, встигнувши якраз перед закриттям дверей, — це навчило мене готувати речі ще звечора.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'the-lost-puppy',
    title: { en: 'The Lost Puppy', uk: 'Загублене цуценя' },
    category: 'short-stories',
    level: 'a2',
    minutes: 1,
    topics: ['animals', 'kindness', 'family'],
    body: {
      en: 'On my way home from school, I heard a soft sound near the street. It was a small puppy looking confused and scared. I gently walked toward him so I wouldn\'t frighten him. He had no collar, and he looked hungry. I decided to take him home for a while. My parents helped me post a message online to find his owner. Two days later, a family came looking for him. I was sad to say goodbye, but I was happy he found his home.',
      uk: 'Дорогою додому зі школи я почув тихий звук біля вулиці. Це було маленьке цуценя, яке виглядало розгубленим і наляканим. Я обережно підійшов до нього, щоб не налякати його. На ньому не було нашийника, і виглядало воно голодним. Я вирішив забрати його додому на деякий час. Батьки допомогли мені розмістити повідомлення в інтернеті, щоб знайти його господаря. Через два дні прийшла родина, яка його шукала. Мені було сумно прощатися, але я був радий, що воно знайшло свій дім.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why did the narrator decide to take the puppy home?', uk: 'Чому оповідач вирішив забрати цуценя додому?' },
        options: [
          { en: 'Because it had no collar and looked hungry', uk: 'Бо на ньому не було нашийника і воно виглядало голодним' },
          { en: 'Because it followed him all the way from school', uk: 'Бо воно йшло за ним аж від школи' },
          { en: 'Because his parents told him to bring it home', uk: 'Бо батьки наказали йому принести його додому' },
        ],
        correct: 0,
        explain: { en: 'The text says the puppy had no collar and looked hungry, so the narrator decided to take him home for a while.', uk: 'У тексті сказано, що на цуценяті не було нашийника і воно виглядало голодним, тому оповідач вирішив забрати його додому.' },
      },
      {
        kind: 'mcq',
        q: { en: 'How did the puppy\'s owner find him again?', uk: 'Як господарі цуценяти знову його знайшли?' },
        options: [
          { en: 'They took the puppy to a vet', uk: 'Вони віднесли цуценя до ветеринара' },
          { en: 'They posted a message online', uk: 'Вони розмістили повідомлення в інтернеті' },
          { en: 'They asked people in the street', uk: 'Вони питали перехожих на вулиці' },
        ],
        correct: 1,
        explain: { en: 'The narrator\'s parents helped post a message online, and two days later the owning family came looking for the puppy.', uk: 'Батьки оповідача допомогли розмістити повідомлення в інтернеті, і через два дні сімʼя-власник прийшла шукати цуценя.' },
      },
      {
        kind: 'open',
        q: { en: 'How do you think the narrator felt when the puppy\'s family finally came, and why?', uk: 'Як, на вашу думку, почувався оповідач, коли зрештою прийшла сімʼя цуценяти, і чому?' },
        sample: { en: 'The narrator probably felt a mix of sadness and relief — sad to lose the puppy he had cared for, but glad that it was safely reunited with its real family.', uk: 'Оповідач, ймовірно, відчував і смуток, і полегшення — сумно було розлучатися з цуценям, про яке він піклувався, але водночас він був радий, що воно воззʼєдналося зі своєю справжньою родиною.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'the-old-library',
    title: { en: 'The Old Library', uk: 'Стара бібліотека' },
    category: 'short-stories',
    level: 'a2',
    minutes: 1,
    topics: ['books', 'library', 'reading', 'nostalgia'],
    body: {
      en: 'There is an old library near my house that not many people visit. One day, I decided to go inside after school. The place smelled like old paper and quiet memories. I found a book that looked very different from the others. When I opened it, I saw notes written by someone many years ago. It felt like the book was speaking directly to me. I sat there reading until the sun started to set. From that day, the library became my favorite place.',
      uk: 'Біля мого будинку є стара бібліотека, куди мало хто заходить. Одного дня я вирішив зайти туди після школи. У приміщенні пахло старим папером і тихими спогадами. Я знайшов книгу, яка сильно відрізнялася від інших. Коли я її відкрив, то побачив нотатки, залишені кимось багато років тому. Здавалося, ніби книга говорить прямо до мене. Я сидів і читав, поки не почало сідати сонце. Відтоді ця бібліотека стала моїм улюбленим місцем.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What did the old library smell like?', uk: 'Чим пахло у старій бібліотеці?' },
        options: [
          { en: 'Fresh flowers and coffee', uk: 'Свіжими квітами та кавою' },
          { en: 'Paint and dust', uk: 'Фарбою та пилом' },
          { en: 'Old paper and quiet memories', uk: 'Старим папером і тихими спогадами' },
        ],
        correct: 2,
        explain: { en: 'The text says the place smelled like old paper and quiet memories.', uk: 'У тексті сказано, що в приміщенні пахло старим папером і тихими спогадами.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What did the narrator find in a book that looked different from the others?', uk: 'Що головний герой знайшов у книзі, яка відрізнялася від інших?' },
        options: [
          { en: 'Notes written by someone many years ago', uk: 'Нотатки, залишені кимось багато років тому' },
          { en: 'A hidden photograph', uk: 'Приховану фотографію' },
          { en: 'A pressed flower', uk: 'Засушену квітку' },
        ],
        correct: 0,
        explain: { en: 'When the narrator opened the book, they saw notes written by someone many years ago.', uk: 'Коли герой відкрив книгу, він побачив нотатки, залишені кимось багато років тому.' },
      },
      {
        kind: 'open',
        q: { en: 'Have you ever found a place that felt special to you, like the narrator\'s library? Describe it and explain why it felt special.', uk: 'Чи траплялося тобі знайти місце, яке здавалося особливим, як бібліотека героя? Опиши його і поясни, чому воно було особливим.' },
        sample: { en: 'Yes, my grandmother\'s attic feels special to me. It\'s full of old photographs and letters, and every time I go there I feel connected to my family\'s past, just like the narrator felt connected to the book they found.', uk: 'Так, для мене особливим є горище моєї бабусі. Воно повне старих фотографій та листів, і щоразу, коли я туди підіймаюся, я відчуваю звʼязок з минулим моєї родини — так само, як герой відчув звʼязок із книгою, яку знайшов.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
];
