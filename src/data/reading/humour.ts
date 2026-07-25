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
];
