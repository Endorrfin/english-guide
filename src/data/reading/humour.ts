import type { ReadingText } from '../types';

/*
 * Reading · category: humour. Light, clean short jokes for reading practice, retold in learner English
 * with full Ukrainian translation. Adapted from the owner's _examples/reading.txt (ELK jokes). Wave RB2.
 */
export const humourTexts: ReadingText[] = [
  {
    id: 'funny-short-stories-1',
    title: { en: 'Funny Short Stories (1)', uk: 'Смішні короткі історії (1)' },
    category: 'humour',
    level: 'b1',
    minutes: 2,
    topics: ['humour', 'jokes', 'everyday'],
    body: {
      en: [
        'A young man was sad because the girl he loved had refused to marry him. His friend asked, “Did you tell her that your father is very rich?” “Yes, I told her,” said the young man. “And what happened?” “She married my father.”',
        '“Will you marry me?” a man asked. “How old are you?” the woman replied. “I am seventy million in the bank,” he said proudly. “Wow,” she smiled. “That is a very good age!”',
        'A wife asked her husband, “Do you remember how we met before we got married?” “Yes, I saw you while I was having dinner at a restaurant.” “It was an unforgettable day. I wish that day could come back.” “If it came back,” he said, “I would just have dinner at home.”',
        'A man came home drunk again. His neighbour said, “I really want to know how your children feel when you come home like this.” “But I’m not married, and I have no children!” said the man. “You’re not married? Then why are you drunk?”',
        '“Grandpa, tell me about the old days.” “Back in my day, we walked into the shop with only a few coins and came out with bread, cheese, eggs, milk and fruit — our hands completely full.” “Wow! And what about now, grandpa?” “Oh, now everything has changed. They put security cameras everywhere.”',
      ].join('\n\n'),
      uk: [
        'Молодий чоловік сумував, бо дівчина, яку він кохав, відмовилася вийти за нього. Друг запитав: «А ти сказав їй, що твій батько дуже багатий?» «Так, сказав», — відповів хлопець. «І що сталося?» «Вона вийшла заміж за мого батька.»',
        '«Вийдеш за мене?» — запитав чоловік. «А скільки тобі років?» — відповіла жінка. «Я — сімдесят мільйонів у банку», — гордо сказав він. «Ого, — усміхнулася вона. — Це дуже гарний вік!»',
        'Дружина запитала чоловіка: «Памʼятаєш, як ми познайомилися, ще до весілля?» «Так, я побачив тебе, коли вечеряв у ресторані.» «Це був незабутній день. Хотіла б я, щоб він повернувся.» «Якби він повернувся, — сказав він, — я просто повечеряв би вдома.»',
        'Чоловік знову прийшов додому пʼяний. Сусід сказав йому: «Мені дуже цікаво, що відчувають твої діти, коли ти повертаєшся таким.» «Але ж я не одружений і не маю дітей!» — сказав чоловік. «Не одружений? Тоді чому ти пʼяний?»',
        '«Дідусю, розкажи про старі часи.» «За моїх часів ми заходили в крамницю лише з кількома монетами, а виходили з хлібом, сиром, яйцями, молоком і фруктами — руки були геть повні.» «Ого! А що ж тепер, дідусю?» «Ох, тепер усе змінилося. Скрізь понаставляли камер спостереження.»',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'In the first story, who did the girl marry?', uk: 'У першій історії за кого вийшла дівчина?' },
        options: [
          { en: 'The young man’s father', uk: 'За батька молодого чоловіка' },
          { en: 'The young man himself', uk: 'За самого молодого чоловіка' },
          { en: 'A rich stranger', uk: 'За багатого незнайомця' },
        ],
        correct: 0,
        explain: { en: 'The rich father was the one she married — that is the twist.', uk: 'Вона вийшла за багатого батька — у цьому й жарт.' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to grandpa, what has changed nowadays?', uk: 'За словами дідуся, що змінилося нині?' },
        options: [
          { en: 'There are security cameras everywhere', uk: 'Скрізь зʼявилися камери спостереження' },
          { en: 'Food has become free', uk: 'Їжа стала безкоштовною' },
          { en: 'Shops are much bigger', uk: 'Крамниці стали набагато більшими' },
        ],
        correct: 0,
        explain: { en: 'The joke hints he used to take things without paying; now cameras stop him.', uk: 'Жарт натякає, що раніше він брав не платячи; тепер камери заважають.' },
      },
      {
        kind: 'open',
        q: { en: 'Which of these short stories made you smile, and why?', uk: 'Яка з цих історій вас усміхнула і чому?' },
        sample: { en: 'Answers will vary. A good answer names one story and explains the twist or wordplay that makes it funny.', uk: 'Відповіді різнитимуться. Гарна відповідь називає одну історію й пояснює несподіванку чи гру слів, що робить її смішною.' },
      },
    ],
  },
  {
    id: 'funny-short-stories-2',
    title: { en: 'Funny Short Stories (2)', uk: 'Смішні короткі історії (2)' },
    category: 'humour',
    level: 'b1',
    minutes: 2,
    topics: ['humour', 'jokes', 'family'],
    body: {
      en: [
        'A husband said to his wife, “Do you remember how happy we were forty years ago?” “But forty years ago we didn’t even know each other,” she said. “Exactly,” he replied with a smile. “That’s why we were so happy.”',
        'A daughter phoned her mother, crying. “My husband upset me. I’m coming to stay at your house — that will be his punishment!” “Don’t come here,” said the mother. “You stay right where you are. That will be a much bigger punishment for him.”',
        'A stranger watched a man repeatedly ask his phone to bark like a dog. “Why are you asking your phone to bark?” he asked. “I bought a phone that unlocks with voice recognition,” the man explained, “but a dog barked next to me while I was setting it up. Now it only unlocks when a dog barks!”',
        'A wealthy engineer wanted to marry a beggar’s daughter. Her father agreed on one condition: the engineer had to spend three days begging on the street with them. On the third day, the father saw him crying. “Don’t be ashamed of begging,” he said kindly. “Oh, I’m not crying about that,” said the engineer. “I’m crying about all the years I wasted in a job I never enjoyed!”',
        'A son asked, “Dad, what do you think about choosing a partner?” “Son, people are like fruit,” said the father. “Some are apples, some are strawberries — choose the one you like best.” “And which did you choose, dad?” “Ah,” he sighed, “in my day, there were only onions.”',
      ].join('\n\n'),
      uk: [
        'Чоловік сказав дружині: «Памʼятаєш, які щасливі ми були сорок років тому?» «Але ж сорок років тому ми навіть не були знайомі», — відповіла вона. «Саме так, — усміхнувся він. — Тому ми й були такі щасливі.»',
        'Донька зателефонувала матері, плачучи: «Чоловік мене образив. Я приїду пожити до тебе — це буде йому покарання!» «Не приїжджай, — сказала мати. — Залишайся вдома. Оце буде йому набагато більше покарання.»',
        'Незнайомець побачив, як чоловік раз за разом просить свій телефон гавкати, мов пес. «Чому ви просите телефон гавкати?» — запитав він. «Я купив телефон, що розблоковується за голосом, — пояснив чоловік, — але поки я його налаштовував, поруч загавкав пес. Тепер він розблоковується лише від гавкоту!»',
        'Багатий інженер хотів одружитися з донькою жебрака. Її батько погодився за однієї умови: інженер мав три дні жебракувати з ними на вулиці. На третій день батько побачив, що той плаче. «Не соромся жебракувати», — лагідно сказав він. «Ой, я плачу не через це, — відповів інженер. — Я плачу за всіма роками, змарнованими на роботі, яку ніколи не любив!»',
        'Син запитав: «Тату, що ти думаєш про вибір пари?» «Сину, люди — наче фрукти, — сказав батько. — Хтось яблуко, хтось полуниця; обери того, хто до вподоби.» «А кого обрав ти, тату?» «Ех, — зітхнув він, — за моїх часів була сама лише цибуля.»',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why does the man keep asking his phone to bark?', uk: 'Чому чоловік раз за разом просить телефон гавкати?' },
        options: [
          { en: 'His phone only unlocks at the sound of a dog barking', uk: 'Його телефон розблоковується лише від гавкоту пса' },
          { en: 'He is training a real dog', uk: 'Він дресирує справжнього пса' },
          { en: 'He wants to scare the stranger', uk: 'Він хоче налякати незнайомця' },
        ],
        correct: 0,
        explain: { en: 'A dog barked while he set up voice unlock, so now only barking opens it.', uk: 'Пес загавкав під час налаштування, тож тепер відкриває лише гавкіт.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why is the engineer really crying?', uk: 'Чому насправді плаче інженер?' },
        options: [
          { en: 'About the years he spent in a job he did not enjoy', uk: 'За роками в роботі, яку він не любив' },
          { en: 'Because begging is very hard', uk: 'Бо жебракувати дуже важко' },
          { en: 'Because he lost all his money', uk: 'Бо втратив усі свої гроші' },
        ],
        correct: 0,
        explain: { en: 'The twist: he regrets his long-hated career more than the begging.', uk: 'Несподіванка: він шкодує за нелюбою роботою більше, ніж за жебрацтвом.' },
      },
      {
        kind: 'open',
        q: { en: 'Choose one story and explain the twist that makes it funny.', uk: 'Оберіть одну історію й поясніть несподіванку, що робить її смішною.' },
        sample: { en: 'Answers will vary. A strong answer retells the ending and explains why it is surprising or clever.', uk: 'Відповіді різнитимуться. Сильна відповідь переказує кінцівку й пояснює, чому вона несподівана чи дотепна.' },
      },
    ],
  },
  // CHANGED (Wave S2, §15 screenshot OCR): +2 texts from the "stage II text_screenshots" backlog.
  {
    id: 'baby-camel-and-mother',
    title: { en: 'Baby Camel and Mother', uk: 'Верблюденя та його мама' },
    category: 'humour',
    level: 'b1',
    minutes: 2,
    topics: ['animals', 'story', 'humour'],
    body: {
      en: [
        'A mother and a baby camel were lying around, and suddenly the baby camel asked, "Mother, may I ask you some questions?" Mother said, "Sure! Why, son, is there something bothering you?" Baby said, "Why do camels have humps?" Mother said, "Well, son, we are desert animals. We need the humps to store water, and we are known to survive without water." Baby said, "Okay, then why are our legs long and our feet rounded?" Mother said, "Son, obviously they are meant for walking in the desert. You know, with these legs I can move around the desert better than anyone does!" Baby said, "Okay, then why are our eyelashes long? Sometimes it bothers my sight." Mother, with pride, said, "My son, those long, thick eyelashes are your protective cover. They help to protect your eyes from the desert sand and wind."',
        'Baby, after thinking, said, "I see. So the hump is to store water when we are in the desert, the legs are for walking through the desert, and these eyelashes protect my eyes from the desert. Then what in God\'s name are we doing here in the Zoo!?"',
        'Moral: Skills, knowledge, abilities and experiences are only useful if you are at the right place.',
      ].join('\n\n'),
      uk: [
        'Мама верблюдиця і верблюденя лежали собі спокійно, аж раптом верблюденя запитало: «Мамо, можна я поставлю тобі кілька запитань?» Мама відповіла: «Звісно! А що, синку, щось тебе турбує?» Верблюденя запитало: «Чому у верблюдів є горби?» Мама сказала: «Ну, синку, ми пустельні тварини. Нам потрібні горби, щоб зберігати воду, адже ми вміємо довго обходитися без води». Верблюденя запитало: «Гаразд, а чому в нас довгі ноги і круглі ступні?» Мама відповіла: «Синку, це ж очевидно — вони створені для ходьби пустелею. Знаєш, із такими ногами я пересуваюся пустелею краще за будь-кого!» Верблюденя запитало: «Добре, а чому в нас довгі вії? Іноді вони заважають мені бачити». Мама з гордістю сказала: «Синку мій, ці довгі густі вії — твій захисний покрив. Вони захищають твої очі від піску й вітру пустелі».',
        'Верблюденя, трохи подумавши, сказало: «Зрозуміло. Виходить, горб потрібен, щоб зберігати воду, поки ми в пустелі, ноги — щоб ходити пустелею, а вії захищають мої очі від пустелі. То що ж ми, заради всього святого, робимо тут, у зоопарку?!»',
        'Мораль: навички, знання, здібності та досвід корисні лише тоді, коли ти перебуваєш у правильному місці.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why, according to the mother camel, do camels have humps?', uk: 'Чому, за словами мами-верблюдиці, у верблюдів є горби?' },
        options: [
          { en: 'To store water and survive without it for a long time', uk: 'Щоб зберігати воду й довго обходитися без неї' },
          { en: 'To help them run faster', uk: 'Щоб бігати швидше' },
          { en: 'To keep them warm at night', uk: 'Щоб не мерзнути вночі' },
        ],
        correct: 0,
        explain: { en: 'The mother explains that camels are desert animals and need humps to store water and survive without water.', uk: 'Мама пояснює, що верблюди — пустельні тварини, і їм потрібні горби, щоб зберігати воду й виживати без неї.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is the moral of the story?', uk: 'У чому мораль цієї історії?' },
        options: [
          { en: 'Camels are the strongest desert animals', uk: 'Верблюди — найсильніші тварини пустелі' },
          { en: 'Skills, knowledge and experience are only useful if you are in the right place', uk: 'Навички, знання та досвід корисні лише тоді, коли ти в правильному місці' },
          { en: 'Baby animals should not ask too many questions', uk: 'Малятам тварин не варто ставити забагато запитань' },
        ],
        correct: 1,
        explain: { en: 'The moral of the story is that skills, knowledge, abilities and experiences are only useful if you are at the right place.', uk: 'Мораль історії в тому, що навички, знання, здібності та досвід корисні лише тоді, коли ти перебуваєш у правильному місці.' },
      },
      {
        kind: 'open',
        q: { en: 'Why do you think the baby camel\'s final question (\'what are we doing here in the Zoo?\') is funny? Have you ever felt like your skills weren\'t being used in the right place?', uk: 'Чому, на вашу думку, останнє запитання верблюденяти («що ми робимо тут, у зоопарку?») смішне? Чи траплялося вам відчувати, що ваші навички застосовують не там, де треба?' },
        sample: { en: 'It\'s funny because all the camel\'s desert adaptations are useless in a zoo, showing how strange it is to have skills you can\'t use. I\'ve felt similar when I studied a skill for a job I never actually got to use it in.', uk: 'Це смішно, бо всі пустельні пристосування верблюда абсолютно марні в зоопарку, і це показує, як дивно мати навички, якими ти не можеш скористатися. Я теж почувався подібно, коли вивчив навичку для роботи, на якій так і не встиг її застосувати.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'smartest-man-in-the-world',
    title: { en: 'Smartest Man in the World', uk: 'Найрозумніша людина у світі' },
    category: 'humour',
    level: 'b1',
    minutes: 2,
    topics: ['humour', 'cleverness', 'character'],
    body: {
      en: [
        'A doctor, a lawyer, a little boy and a priest were out for a Sunday afternoon flight on a small private plane. Suddenly, the plane developed engine trouble. In spite of the best efforts of the pilot, the plane started to go down. Finally, the pilot grabbed a parachute and yelled to the passengers that they better jump, and he himself bailed out. Unfortunately, there were only three parachutes remaining. The doctor grabbed one and said “I’m a doctor, I save lives, so I must live,” and jumped out. The lawyer then said, “I’m a lawyer and lawyers are the smartest people in the world. I deserve to live.” He also grabbed a parachute and jumped. The priest looked at the little boy and said, “My son, I’ve lived a long and full life. You are young and have your whole life ahead of you. Take the last parachute and live in peace.” The little boy handed the parachute back to the priest and said, “Not to worry Father. The smartest man in the world just took off with my back pack.”',
        'Moral: Your job doesn’t always define you, but being a Good Human being Does.',
      ].join('\n\n'),
      uk: [
        'Лікар, юрист, маленький хлопчик і священник летіли недільного дня невеликим приватним літаком. Раптом у літака виникли проблеми з двигуном. Попри всі зусилля пілота, літак почав падати. Зрештою пілот схопив парашут, крикнув пасажирам, що їм краще стрибати, і сам вистрибнув першим. На жаль, залишилося тільки три парашути. Лікар схопив один зі словами: «Я лікар, я рятую життя, тож я мушу жити», — і вистрибнув. Тоді юрист сказав: «Я юрист, а юристи — найрозумніші люди у світі. Я заслуговую жити». Він теж схопив парашут і стрибнув. Священник подивився на хлопчика і сказав: «Сину мій, я прожив довге й насичене життя. Ти молодий, і в тебе ще все життя попереду. Візьми останній парашут і живи спокійно». Хлопчик віддав парашут назад священнику і сказав: «Не хвилюйтеся, отче. Найрозумніша людина у світі щойно втекла з моїм рюкзаком».',
        'Мораль: посада не завжди визначає, хто ти, а от те, що ти Добра Людина, — визначає завжди.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How many parachutes were left after the pilot grabbed one and jumped out first?', uk: 'Скільки парашутів залишилося після того, як пілот схопив один і вистрибнув першим?' },
        options: [
          { en: 'Four', uk: 'Чотири' },
          { en: 'Three', uk: 'Три' },
          { en: 'Two', uk: 'Два' },
        ],
        correct: 1,
        explain: { en: 'The text says there were only three parachutes remaining after the pilot took his.', uk: 'У тексті сказано, що після того, як пілот узяв свій, залишилося лише три парашути.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why did the little boy still have a parachute at the end of the story?', uk: 'Чому в кінці історії у хлопчика все ще був парашут?' },
        options: [
          { en: 'Because he was too scared to jump', uk: 'Бо він занадто боявся стрибати' },
          { en: 'Because the priest gave him two parachutes', uk: 'Бо священник дав йому два парашути' },
          { en: 'Because the lawyer had mistakenly grabbed the boy\'s back pack instead of a parachute', uk: 'Бо юрист помилково схопив рюкзак хлопчика замість парашута' },
        ],
        correct: 2,
        explain: { en: 'The boy reveals that the “smartest man in the world” (the lawyer) took off with his back pack, not a parachute, so the boy\'s real parachute was never taken.', uk: 'Хлопчик пояснює, що «найрозумніша людина у світі» (юрист) забрала його рюкзак, а не парашут, тож справжній парашут хлопчика залишився на місці.' },
      },
      {
        kind: 'open',
        q: { en: 'What do you think the story\'s moral, “Your job doesn’t always define you, but being a Good Human being Does,” means? Do you agree?', uk: 'Як ви розумієте мораль історії: «Посада не завжди визначає тебе, а от те, що ти Добра Людина, — визначає завжди»? Чи погоджуєтесь ви з цим?' },
        sample: { en: 'It means that a title or profession doesn\'t automatically make someone wise or worthy — their character and actions do. In the story, the lawyer\'s claim to be the “smartest” is undercut by his own mistake, while the boy\'s calm honesty shows real integrity. I agree: how we treat others says far more about us than any job title.', uk: 'Це означає, що посада чи професія самі по собі не роблять людину мудрою чи гідною поваги — це визначають її характер і вчинки. У цій історії заява юриста про те, що він «найрозумніший», спростовується його власною помилкою, тоді як спокійна чесність хлопчика демонструє справжню гідність. Я погоджуюся: те, як ми ставимося до інших, говорить про нас набагато більше, ніж будь-яка посада.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
];
