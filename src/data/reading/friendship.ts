import type { ReadingText } from '../types';

/*
 * Reading · category: friendship. Texts transcribed from the owner's screenshot backlog.
 */
export const friendshipTexts: ReadingText[] = [
  {
    id: 'my-best-friend',
    title: { en: 'My Best Friend', uk: 'Мій найкращий друг' },
    category: 'friendship',
    level: 'b1',
    minutes: 1,
    topics: ['friendship', 'trust', 'support'],
    body: {
      en: 'My best friend is one of the most important people in my life. A true friend understands me, supports me, and stands by my side in every situation. We share our happiness, problems, and dreams with each other. My best friend always encourages me to do better and never give up. We study together, laugh together, and help each other grow. Trust and honesty make our friendship strong. A best friend listens carefully and gives good advice. In difficult times, my friend gives me strength and comfort. I am grateful to have such a loyal and caring friend. True friendship is a beautiful gift in life.',
      uk: 'Мій найкращий друг — одна з найважливіших людей у моєму житті. Справжній друг розуміє мене, підтримує мене й стоїть поруч у будь-якій ситуації. Ми ділимося одне з одним своїм щастям, проблемами й мріями. Мій найкращий друг завжди заохочує мене робити краще й ніколи не здаватися. Ми разом вчимося, разом сміємося й допомагаємо одне одному зростати. Довіра й чесність роблять нашу дружбу міцною. Найкращий друг уважно слухає й дає хороші поради. У важкі часи мій друг дає мені силу й розраду. Я вдячний, що маю такого відданого й дбайливого друга. Справжня дружба — це прекрасний дар у житті.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What makes the friendship strong, according to the text?', uk: 'Що робить дружбу міцною, за текстом?' },
        options: [
          { en: 'Trust and honesty', uk: 'Довіра й чесність' },
          { en: 'Money and gifts', uk: 'Гроші й подарунки' },
          { en: 'Living nearby', uk: 'Проживання поруч' },
        ],
        correct: 0,
        explain: { en: '“Trust and honesty make our friendship strong.”', uk: '«Trust and honesty make our friendship strong.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does a best friend do in difficult times, according to the text?', uk: 'Що робить найкращий друг у важкі часи, за текстом?' },
        options: [
          { en: 'Gives strength and comfort', uk: 'Дає силу й розраду' },
          { en: 'Disappears', uk: 'Зникає' },
          { en: 'Makes things worse', uk: 'Робить гірше' },
        ],
        correct: 0,
        explain: { en: '“In difficult times, my friend gives me strength and comfort.”', uk: '«…my friend gives me strength and comfort.»' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a quality you value most in a best friend, and why.', uk: 'Опишіть якість, яку ви найбільше цінуєте в найкращому другові, і чому.' },
        sample: { en: 'Answers will vary — e.g., loyalty, honesty, listening, or encouragement. A good answer explains why it matters.', uk: 'Відповіді різнитимуться — напр., вірність, чесність, вміння слухати чи підтримка. Гарна відповідь пояснює, чому це важливо.' },
      },
    ],
  },
  {
    id: 'friendship',
    title: { en: 'Friendship', uk: 'Дружба' },
    category: 'friendship',
    level: 'b1',
    minutes: 1,
    source: { author: 'Sheikh Juma' },
    topics: ['friendship', 'trust', 'kindness'],
    seeAlso: ['my-best-friend'],
    body: {
      en: 'Friendship is a special bond between people who care for and support each other. A true friend stays with us in both happy and sad moments. Friends make our life more joyful and meaningful. A good friend helps us, understands our feelings, and gives us courage when we feel weak. Friendship teaches us honesty, trust, and kindness. Sharing time with friends creates beautiful memories. In conclusion, everyone needs a true friend to make life happier and easier.',
      uk: 'Дружба — це особливий звʼязок між людьми, які піклуються одне про одного й підтримують одне одного. Справжній друг залишається з нами і в радісні, і в сумні миті. Друзі роблять наше життя радіснішим і змістовнішим. Хороший друг допомагає нам, розуміє наші почуття й додає сміливості, коли ми почуваємося слабкими. Дружба вчить нас чесності, довіри й доброти. Час, проведений із друзями, створює прекрасні спогади. Насамкінець, кожному потрібен справжній друг, щоб життя було щасливішим і легшим.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does friendship teach us, according to the text?', uk: 'Чого нас вчить дружба, за текстом?' },
        options: [
          { en: 'Honesty, trust, and kindness', uk: 'Чесності, довіри й доброти' },
          { en: 'Money and power', uk: 'Грошей і влади' },
          { en: 'Speed and strength', uk: 'Швидкості й сили' },
        ],
        correct: 0,
        explain: { en: '“Friendship teaches us honesty, trust, and kindness.”', uk: '«Дружба вчить нас чесності, довіри й доброти.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does a good friend do when we feel weak?', uk: 'Що робить хороший друг, коли ми почуваємося слабкими?' },
        options: [
          { en: 'Gives us courage', uk: 'Додає нам сміливості' },
          { en: 'Leaves us alone', uk: 'Залишає нас самих' },
          { en: 'Laughs at us', uk: 'Сміється з нас' },
        ],
        correct: 0,
        explain: { en: '“…gives us courage when we feel weak.”', uk: '«…додає сміливості, коли ми почуваємося слабкими.»' },
      },
      {
        kind: 'open',
        q: { en: 'Who is a true friend in your life, and how do they support you?', uk: 'Хто справжній друг у вашому житті і як він вас підтримує?' },
        sample: { en: 'Answers will vary. A good answer names a person and a specific way they help (listening, honesty, being there in hard times).', uk: 'Відповіді різнитимуться. Гарна відповідь називає людину й конкретний спосіб підтримки (слухає, чесний, поруч у скруті).' },
      },
    ],
  },
  // CHANGED (Wave S2, §15 screenshot OCR): +6 texts from the "stage II text_screenshots" backlog.
  {
    id: 'dear-my-friend',
    title: { en: 'Dear My Friend', uk: 'Любий друже' },
    category: 'friendship',
    level: 'b1',
    minutes: 1,
    topics: ['friendship', 'gratitude', 'relationships'],
    body: {
      en: [
        'I just want you to know how much you mean to me. You\'ve been there through my ups and downs, never judging, always understanding.',
        'Your friendship has brought light into my darkest days and laughter into my quiet moments. I\'m so grateful for every memory we\'ve made and every conversation we\'ve shared. You\'re not just my friend — you\'re family to my heart. Thank you for being you, for staying real, and for making my life brighter just by being in it.',
      ].join('\n\n'),
      uk: [
        'Я просто хочу, щоб ти знав, як багато ти для мене значиш. Ти був поруч у моїх злетах і падіннях, ніколи не осуджуючи, завжди розуміючи.',
        'Твоя дружба принесла світло в мої найтемніші дні та сміх у хвилини тиші. Я щиро вдячна за кожен спогад, який ми створили, і за кожну розмову, якою ми поділилися. Ти не просто мій друг — ти рідний моєму серцю. Дякую тобі за те, що ти є, за те, що залишаєшся справжнім, і за те, що робиш моє життя яскравішим просто своєю присутністю.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the letter, how has the friend affected the writer\'s life?', uk: 'Як, згідно з листом, друг вплинув на життя авторки?' },
        options: [
          { en: 'By staying distant during hard times', uk: 'Тримаючись осторонь у важкі часи' },
          { en: 'By bringing light into dark days and laughter into quiet moments', uk: 'Приносячи світло в темні дні та сміх у хвилини тиші' },
          { en: 'By giving expensive gifts', uk: 'Даруючи дорогі подарунки' },
        ],
        correct: 1,
        explain: { en: 'The letter says the friendship "brought light into my darkest days and laughter into my quiet moments."', uk: 'У листі сказано, що дружба «принесла світло в мої найтемніші дні та сміх у хвилини тиші».' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the writer describe the friend in the letter?', uk: 'Як авторка описує друга в листі?' },
        options: [
          { en: 'As a coworker', uk: 'Як колегу' },
          { en: 'As a stranger', uk: 'Як незнайомця' },
          { en: 'As family to their heart', uk: 'Як рідну людину для свого серця' },
        ],
        correct: 2,
        explain: { en: 'The text says, "You\'re not just my friend — you\'re family to my heart."', uk: 'У тексті сказано: «Ти не просто мій друг — ти рідний моєму серцю».' },
      },
      {
        kind: 'open',
        q: { en: 'Think of a friend who has been there for you through difficult times. What would you want to say to thank them?', uk: 'Згадайте друга, який підтримував вас у важкі часи. Що б ви хотіли сказати йому на подяку?' },
        sample: { en: 'I would thank my friend for always being there without judgment, and for making my hard days brighter just by listening. I\'d tell them how much their steady support and friendship have meant to me over the years.', uk: 'Я б подякувала своєму другові за те, що він завжди поруч і ніколи не осуджує, а ще за те, що робить мої важкі дні світлішими, просто вислуховуючи мене. Я б сказала, як багато для мене означали його постійна підтримка й дружба протягом усіх цих років.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'a-letter-to-a-friend-i-miss',
    title: { en: 'A Letter to a Friend I Miss', uk: 'Лист до друга, за яким я сумую' },
    category: 'friendship',
    level: 'b2',
    minutes: 3,
    topics: ['friendship', 'letters', 'missing-someone'],
    body: {
      en: [
        'Dear Friend,\nI don’t think you realize how much I miss you. Some days, I find myself thinking about the little moments we shared—the laughs, the long talks, and the comfort of simply knowing you were there. It’s strange how someone can leave such a quiet space in your heart when they’re not around, yet still remain so deeply important.',
        'Life gets busy, and time moves faster than we expect, but some people never stop meaning something special to us. No matter how far apart we are or how long it has been, a part of me still carries our memories with so much care. I miss the way we talked about everything and nothing, the way your presence could make ordinary days feel lighter.',
        'I hope life has been kind to you. I hope you’re smiling more, healing from things you never talk about, and finding little reasons to feel happy again. And if life has been hard lately, I hope you remember that you don’t have to carry everything alone.',
        'Just know that no matter where life takes us, you will always hold a special place in my heart. Missing you has reminded me how lucky I was to have a friend like you. I truly hope one day we sit together again, laugh like old times, and pick up right where we left off.\nTake care of yourself, because someone out here still thinks about you and hopes you’re doing okay.',
        'With care,\nYour Friend',
      ].join('\n\n'),
      uk: [
        'Любий друже,\nНе думаю, що ти усвідомлюєш, як сильно я за тобою сумую. Деякими днями я ловлю себе на думці про ті дрібні миті, які ми ділили, — сміх, довгі розмови й просте відчуття затишку від того, що ти поруч. Дивно, як хтось може лишити в твоєму серці такий тихий порожній куточок, коли його немає поруч, і водночас лишатися таким по-справжньому важливим.',
        'Життя стає дедалі метушливішим, і час минає швидше, ніж ми очікуємо, але деякі люди ніколи не перестають бути для нас особливими. Хай би як далеко ми були одне від одного чи скільки б часу минуло, частина мене й досі дбайливо береже наші спогади. Мені бракує того, як ми могли говорити про все на світі — і про ніщо водночас, і того, як твоя присутність робила звичайні дні легшими.',
        'Сподіваюся, життя було до тебе прихильним. Сподіваюся, ти усміхаєшся частіше, зцілюєшся від того, про що ніколи не говориш уголос, і знаходиш маленькі приводи знову відчувати щастя. А якщо останнім часом було важко, сподіваюся, ти памʼятаєш, що не мусиш нести все самотужки.',
        'Просто знай: хай куди б не завело нас життя, ти завжди займатимеш особливе місце в моєму серці. Сумуючи за тобою, я ще більше усвідомлюю, яким щастям було мати такого друга, як ти. Щиро сподіваюся, що одного дня ми знову сядемо поруч, засміємося, як у старі часи, і продовжимо з того місця, на якому зупинилися.\nБережи себе, бо десь тут є людина, яка й досі думає про тебе і сподівається, що в тебе все гаразд.',
        'З теплом,\nТвій друг',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the writer say about time and distance?', uk: 'Що каже автор листа про час і відстань?' },
        options: [
          { en: 'Time makes us forget everyone we once cared about.', uk: 'Час змушує нас забувати всіх, про кого ми колись дбали.' },
          { en: 'Distance always ends a friendship completely.', uk: 'Відстань завжди остаточно руйнує дружбу.' },
          { en: 'Some people never stop meaning something special to us, no matter how far apart or how long it\'s been.', uk: 'Деякі люди ніколи не перестають бути для нас особливими, хай би як далеко чи довго ми були в розлуці.' },
        ],
        correct: 2,
        explain: { en: 'The letter says \'some people never stop meaning something special to us,\' regardless of distance or time apart.', uk: 'У листі сказано, що «деякі люди ніколи не перестають бути для нас особливими», незалежно від відстані чи часу розлуки.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the writer hope for their friend?', uk: 'Чого автор листа бажає своєму другу?' },
        options: [
          { en: 'That the friend is smiling more, healing, and finding reasons to be happy again.', uk: 'Щоб той усміхався частіше, зцілювався і знаходив нові приводи для щастя.' },
          { en: 'That the friend forgets the past completely.', uk: 'Щоб той повністю забув минуле.' },
          { en: 'That the friend apologizes for leaving.', uk: 'Щоб той вибачився за те, що пішов.' },
        ],
        correct: 0,
        explain: { en: 'The writer hopes the friend is \'smiling more, healing... and finding little reasons to feel happy again.\'', uk: 'Автор листа сподівається, що друг «усміхається частіше, зцілюється... і знаходить маленькі приводи знову відчувати щастя».' },
      },
      {
        kind: 'open',
        q: { en: 'Think of someone you haven\'t spoken to in a long time but still think about fondly. What is one sentence you would want to say to them right now?', uk: 'Подумайте про людину, з якою ви давно не спілкувалися, але й досі згадуєте з теплом. Яке одне речення ви хотіли б сказати їй просто зараз?' },
        sample: { en: 'I might tell an old friend, \'I know we\'ve drifted apart, but I still remember your kindness and I hope life is treating you well\' — a simple message that doesn\'t ask for anything, just lets them know they\'re still remembered.', uk: 'Я міг би написати давньому другові: «Знаю, що ми віддалилися одне від одного, але я досі памʼятаю твою доброту і сподіваюся, що життя ставиться до тебе добре» — просте повідомлення, яке нічого не просить, а лише дає знати, що про людину памʼятають.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'my-friend',
    title: { en: 'My Friend', uk: 'Мій друг' },
    category: 'friendship',
    level: 'a2',
    minutes: 1,
    topics: ['friendship', 'trust', 'support'],
    body: {
      en: [
        'My friend is a very kind and caring person who always stands by me in every situation. He understands me well and listens to me when I need someone to talk to. My friend always encourages me to do my best and never give up.',
        'He is honest and trustworthy, which makes our friendship strong. We enjoy spending time together, sharing laughs, and making happy memories.',
        'I feel comfortable and happy when I am with my friend because he respects and supports me. I am grateful to have such a wonderful friend in my life.',
      ].join('\n\n'),
      uk: [
        'Мій друг — дуже добра і турботлива людина, яка завжди підтримує мене в будь-якій ситуації. Він добре мене розуміє і вислуховує, коли мені потрібно з кимось поговорити. Мій друг завжди заохочує мене робити все якнайкраще і не здаватися.',
        'Він чесний і надійний, і саме це робить нашу дружбу міцною. Нам подобається проводити час разом, ділитися сміхом і створювати щасливі спогади.',
        'Мені комфортно і радісно поруч із моїм другом, бо він поважає і підтримує мене. Я вдячний за те, що маю такого чудового друга в своєму житті.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what makes the friendship strong?', uk: 'Що, за текстом, робить цю дружбу міцною?' },
        options: [
          { en: 'Living in the same neighborhood', uk: 'Проживання в одному районі' },
          { en: 'Being honest and trustworthy', uk: 'Чесність і надійність' },
          { en: 'Having the same hobbies', uk: 'Спільні захоплення' },
        ],
        correct: 1,
        explain: { en: 'The text says: he is honest and trustworthy, which makes our friendship strong.', uk: 'У тексті сказано: він чесний і надійний, і саме це робить нашу дружбу міцною.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What do the writer and their friend enjoy doing together, according to the text?', uk: 'Що, за текстом, подобається робити разом авторові й другові?' },
        options: [
          { en: 'Spending time together, sharing laughs, and making happy memories', uk: 'Проводити час разом, сміятися і створювати щасливі спогади' },
          { en: 'Working in different cities', uk: 'Працювати в різних містах' },
          { en: 'Avoiding each other during hard times', uk: 'Уникати одне одного в складні часи' },
        ],
        correct: 0,
        explain: { en: 'The text says: we enjoy spending time together, sharing laughs, and making happy memories.', uk: 'У тексті сказано: нам подобається проводити час разом, ділитися сміхом і створювати щасливі спогади.' },
      },
      {
        kind: 'open',
        q: { en: 'What qualities do you value most in a close friend?', uk: 'Які якості ти найбільше цінуєш у близькому другові?' },
        sample: { en: 'I value honesty most, because a friend who tells me the truth, even when it\'s uncomfortable, is someone I can really trust.', uk: 'Найбільше я ціную чесність, адже друг, який каже мені правду, навіть коли це неприємно, — це той, кому я справді можу довіряти.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'to-my-best-friend',
    title: { en: 'To My Best Friend', uk: 'Моєму найкращому другу' },
    category: 'friendship',
    level: 'b1',
    minutes: 1,
    topics: ['friendship', 'gratitude'],
    body: {
      en: 'You are one of the most special people in my life, and I’m so grateful to have you by my side. You understand me even when I don’t say a word, and that means everything to me. Thank you for always supporting me, making me laugh, and staying with me through good and bad times. Our memories are my favorite treasures, and I will always cherish them. You are not just my friend, you are like family to me. No matter where life takes us, I hope we always stay close. I’m really lucky to have a best friend like you.',
      uk: 'Ти одна з найдорожчих людей у моєму житті, і я щиро вдячний, що ти поруч. Ти розумієш мене, навіть коли я не кажу ні слова, і це означає для мене все. Дякую тобі за те, що завжди підтримуєш мене, смішиш мене і залишаєшся поруч у добрі й у погані часи. Наші спогади — мої улюблені скарби, і я завжди їх плекатиму. Ти не просто друг, ти як рідна людина для мене. Хай куди заведе нас життя, сподіваюся, ми завжди залишатимемося близькими. Мені справді пощастило мати такого найкращого друга, як ти.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the letter, what does the writer appreciate most about their best friend?', uk: 'Що, за листом, автор цінує найбільше у своєму найкращому другові?' },
        options: [
          { en: 'That the friend understands them even without words', uk: 'Те, що друг розуміє навіть без слів' },
          { en: 'That the friend is very rich', uk: 'Те, що друг дуже багатий' },
          { en: 'That the friend never disagrees with them', uk: 'Те, що друг ніколи не сперечається' },
        ],
        correct: 0,
        explain: { en: 'The text says: "You understand me even when I don\'t say a word, and that means everything to me."', uk: 'У тексті сказано: друг розуміє автора, навіть коли той не каже ні слова, і це означає для нього все.' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the writer describe their best friend?', uk: 'Як автор описує свого найкращого друга?' },
        options: [
          { en: 'Just an acquaintance', uk: 'Просто знайомий' },
          { en: 'Like family', uk: 'Як рідна людина' },
          { en: 'A stranger', uk: 'Незнайомець' },
        ],
        correct: 1,
        explain: { en: 'The text says: "You are not just my friend, you are like family to me."', uk: 'У тексті сказано: «Ти не просто друг, ти як рідна людина для мене».' },
      },
      {
        kind: 'open',
        q: { en: 'Think of someone you consider like family even though they\'re not related to you. What have they done that makes you feel that way?', uk: 'Згадайте когось, кого ви вважаєте рідним, хоча ви й не родичі. Що ця людина зробила, щоб ви так почувалися?' },
        sample: { en: 'My neighbor has been like family to me since childhood; she always checked on us and celebrated our successes as if they were her own, which made me feel truly cared for.', uk: 'Моя сусідка стала для мене рідною ще з дитинства; вона завжди цікавилася нашими справами і раділа нашим успіхам, наче своїм власним, тому я завжди почувався по-справжньому важливим для неї.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'dear-friend',
    title: { en: 'Dear Friend', uk: 'Любий друже' },
    category: 'friendship',
    level: 'b1',
    minutes: 2,
    topics: ['friendship', 'gratitude', 'appreciation'],
    body: {
      en: [
        'I just wanted to take a moment to tell you how much you truly mean to me. Sometimes words feel too small, but my heart is full of gratitude for having you in my life. You are not just my friend—you are someone who understands me, supports me, and stays by my side even when things are not easy.',
        'Your kindness makes my days brighter, and your smile brings me comfort in ways I cannot explain. When I feel lost or tired, just knowing that you are there gives me strength. You listen without judging, and you care in a way that feels warm and real.',
        'I cherish every little memory we’ve made together—the laughs, the talks, and even the quiet moments. They all mean so much to me. Life feels lighter and happier because you are part of it.',
        'Thank you for being you—for your patience, your honesty, and your beautiful heart. I hope you always know how special you are and how deeply you are appreciated.',
        'No matter where life takes us, I will always be thankful for you. You are a gift in my life, and I will always care about you.',
        'With all my heart,\nYour Friend',
      ].join('\n\n'),
      uk: [
        'Я просто хотів приділити хвилину, щоб сказати, як багато ти для мене значиш. Іноді слова здаються надто малими, але моє серце сповнене вдячності за те, що ти є в моєму житті. Ти не просто мій друг — ти той, хто розуміє мене, підтримує мене і залишається поруч, навіть коли все непросто.',
        'Твоя доброта робить мої дні світлішими, а твоя усмішка дарує мені втіху, яку я не можу пояснити словами. Коли я почуваюся загубленим або втомленим, сама лише думка, що ти поруч, додає мені сил. Ти вмієш слухати, не засуджуючи, і твоя турбота відчувається теплою та щирою.',
        'Я бережу кожну маленьку мить, яку ми пережили разом, — сміх, розмови і навіть хвилини тиші. Усе це так багато для мене значить. Життя стає легшим і щасливішим, бо ти в ньому є.',
        'Дякую тобі за те, що ти є собою, — за твоє терпіння, твою чесність і твоє прекрасне серце. Сподіваюся, ти завжди знатимеш, яка ти особлива і як глибоко тебе цінують.',
        'Хоч би куди нас завела доля, я завжди буду вдячний тобі. Ти — подарунок у моєму житті, і я завжди дбатиму про тебе.',
        'З усім моїм серцем,\nТвій друг',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the letter, what does the friend\'s kindness do?', uk: 'Що, за словами автора листа, робить доброта друга?' },
        options: [
          { en: 'It makes the writer\'s days brighter', uk: 'Робить дні автора світлішими' },
          { en: 'It embarrasses the writer', uk: 'Бентежить автора' },
          { en: 'It goes unnoticed', uk: 'Залишається непоміченою' },
        ],
        correct: 0,
        explain: { en: 'The writer says, "Your kindness makes my days brighter."', uk: 'Автор пише: «Твоя доброта робить мої дні світлішими».' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the writer say they will always feel, no matter where life takes them?', uk: 'Що, за словами автора, вони завжди відчуватимуть, хоч би куди їх завело життя?' },
        options: [
          { en: 'Indifference', uk: 'Байдужість' },
          { en: 'Thankfulness for their friend', uk: 'Вдячність своєму другу' },
          { en: 'Anxiety', uk: 'Тривогу' },
        ],
        correct: 1,
        explain: { en: 'The writer says, "No matter where life takes us, I will always be thankful for you."', uk: 'Автор пише: «Хоч би куди нас завела доля, я завжди буду вдячний тобі».' },
      },
      {
        kind: 'open',
        q: { en: 'What would you want to say to a close friend to show your appreciation for them?', uk: 'Що б ви хотіли сказати близькому другу, щоб показати свою вдячність?' },
        sample: { en: 'I would tell my friend that their support during hard times means more to me than they realize, and that I\'m grateful to have them in my life.', uk: 'Я б сказав своєму другу, що його підтримка у важкі часи означає для мене більше, ніж він усвідомлює, і що я вдячний за те, що він є в моєму житті.' },
      },
    ],
    source: { author: 'English StoryStream' },
  },
  {
    id: 'a-true-friend',
    title: { en: 'A True Friend', uk: 'Справжній друг' },
    category: 'friendship',
    level: 'a2',
    minutes: 1,
    topics: ['friendship', 'trust', 'loyalty', 'life'],
    body: {
      en: 'Hello How are you everyone. Today I want to talk about a friend. A friend is one of the most valuable gifts in life. A true friend supports us in happiness and sadness. Friends share our joys, help us in difficulties, and guide us in the right direction. A good friend is honest, kind, and loyal. Friendship teaches us trust, cooperation, and understanding. Life becomes more beautiful and enjoyable with good friends. Therefore, we should choose our friends wisely and always be a good friend to others. Thank you.',
      uk: 'Привіт, як у вас справи? Сьогодні я хочу поговорити про друга. Друг — один із найцінніших дарів у житті. Справжній друг підтримує нас і в радості, і в смутку. Друзі поділяють нашу радість, допомагають у труднощах і скеровують нас у правильному напрямку. Добрий друг чесний, добрий і відданий. Дружба вчить нас довіри, співпраці та розуміння. З добрими друзями життя стає прекраснішим і приємнішим. Тому нам слід обирати друзів мудро і завжди бути добрим другом для інших. Дякую.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does a true friend do?', uk: 'Що, за текстом, робить справжній друг?' },
        options: [
          { en: 'Supports us in happiness and sadness', uk: 'Підтримує нас і в радості, і в смутку' },
          { en: 'Only appears when things go well', uk: 'Зʼявляється лише тоді, коли все добре' },
          { en: 'Avoids difficult conversations', uk: 'Уникає складних розмов' },
        ],
        correct: 0,
        explain: { en: 'The text says a true friend supports us in happiness and sadness.', uk: 'У тексті сказано, що справжній друг підтримує нас і в радості, і в смутку.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does friendship teach us, according to the text?', uk: 'Чого, за текстом, вчить дружба?' },
        options: [
          { en: 'Competition and jealousy', uk: 'Суперництва й заздрощів' },
          { en: 'Trust, cooperation, and understanding', uk: 'Довіри, співпраці та розуміння' },
          { en: 'Wealth and status', uk: 'Багатства й статусу' },
        ],
        correct: 1,
        explain: { en: 'The text states that friendship teaches us trust, cooperation, and understanding.', uk: 'У тексті сказано, що дружба вчить нас довіри, співпраці та розуміння.' },
      },
      {
        kind: 'open',
        q: { en: 'What qualities do you think are most important in a good friend, and why?', uk: 'Які якості, на вашу думку, найважливіші для доброго друга і чому?' },
        sample: { en: 'I think honesty and loyalty matter most, because a friend who tells the truth and stays by your side during hard times is the one you can truly trust.', uk: 'Гадаю, найважливіші чесність і відданість, бо саме друг, який каже правду і залишається поруч у важкі часи, є тим, кому справді можна довіряти.' },
      },
    ],
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
  },
];
