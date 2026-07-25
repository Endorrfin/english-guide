import type { ReadingText } from '../types';

/*
 * Reading · category: relationships. Tasteful graded lessons on healthy relationships — communication,
 * trust, respect, self-worth — adapted (not verbatim) from the owner's _examples/reading.txt. Wave RB2.
 */
export const relationshipsTexts: ReadingText[] = [
  {
    id: 'know-your-worth',
    title: { en: 'Know Your Worth', uk: 'Знай собі ціну' },
    category: 'relationships',
    level: 'b1',
    minutes: 1,
    topics: ['relationships', 'self-worth', 'boundaries'],
    seeAlso: ['you-are-enough', 'confidence'],
    body: {
      en: 'In any relationship, it is important to know your own worth. Sometimes people stay too long where they are not appreciated, hoping that things will change. But if someone treats you with constant coldness, indifference, or disrespect, that is a clear sign. A person who truly values you will make time for you, listen to you, and treat you with kindness. You should never have to beg for attention or prove that you deserve love. Being patient and forgiving is good, but patience should not mean accepting less than you deserve. Knowing your worth means setting healthy limits, walking away from disrespect, and believing you deserve to be treated well. When you respect yourself, you teach others to respect you too.',
      uk: 'У будь-яких стосунках важливо знати собі ціну. Іноді люди залишаються надто довго там, де їх не цінують, сподіваючись, що все зміниться. Та якщо хтось ставиться до тебе з постійною холодністю, байдужістю чи зневагою — це чіткий знак. Той, хто справді тебе цінує, знаходитиме для тебе час, слухатиме тебе й ставитиметься з добротою. Тобі ніколи не треба випрошувати уваги чи доводити, що ти заслуговуєш на любов. Бути терплячим і вміти прощати — добре, але терпіння не має означати згоду на менше, ніж ти вартий. Знати собі ціну — це встановлювати здорові межі, відходити від зневаги й вірити, що ти заслуговуєш на добре ставлення. Коли ти поважаєш себе, ти вчиш інших поважати тебе теж.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text call a clear sign?', uk: 'Що текст називає чітким знаком?' },
        options: [
          { en: 'Constant coldness, indifference, or disrespect', uk: 'Постійна холодність, байдужість чи зневага' },
          { en: 'Asking too many questions', uk: 'Забагато запитань' },
          { en: 'Spending time together', uk: 'Спільно проведений час' },
        ],
        correct: 0,
        explain: { en: 'Constant coldness or disrespect is the sign you are not valued.', uk: 'Постійна холодність чи зневага — знак, що тебе не цінують.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does knowing your worth mean here?', uk: 'Що означає знати собі ціну тут?' },
        options: [
          { en: 'Setting healthy limits and walking away from disrespect', uk: 'Встановлювати здорові межі й відходити від зневаги' },
          { en: 'Never trusting anyone', uk: 'Нікому не довіряти' },
          { en: 'Always staying silent', uk: 'Завжди мовчати' },
        ],
        correct: 0,
        explain: { en: '“Knowing your worth means setting healthy limits… walking away from disrespect.”', uk: '«Знати собі ціну — встановлювати здорові межі… відходити від зневаги.»' },
      },
      {
        kind: 'open',
        q: { en: 'What does self-respect look like to you in a friendship or relationship?', uk: 'Як для вас виглядає самоповага в дружбі чи стосунках?' },
        sample: { en: 'Answers will vary. A good answer gives a concrete example of a limit or a standard the person keeps.', uk: 'Відповіді різнитимуться. Гарна відповідь дає конкретний приклад межі чи принципу, якого людина дотримується.' },
      },
    ],
  },
  {
    id: 'dont-take-kindness-for-granted',
    title: { en: 'Don’t Take Kindness for Granted', uk: 'Не сприймай доброту як належне' },
    category: 'relationships',
    level: 'b1',
    minutes: 1,
    topics: ['relationships', 'kindness', 'appreciation'],
    seeAlso: ['kindness'],
    body: {
      en: 'It is easy to take a kind person for granted. When someone forgives us again and again, we may start to believe they will always stay, no matter how we behave. But every time a caring person is disappointed, a small part of their love can quietly fade. They may keep smiling and forgiving while slowly growing tired inside. Often we only realise how much someone meant to us after they have already decided to leave. The lesson is simple: do not wait until it is too late. Appreciate the people who are patient with you, thank them, and treat their kindness as something precious — not as something that will last forever, no matter what.',
      uk: 'Легко сприймати добру людину як належне. Коли хтось прощає нас знову й знову, ми можемо повірити, що він залишиться завжди, хоч би як ми поводилися. Але щоразу, коли дбайливу людину розчаровують, маленька частинка її любові тихо згасає. Вона може й далі усміхатися та прощати, поволі втомлюючись усередині. Часто ми усвідомлюємо, як багато хтось для нас значив, лише після того, як він уже вирішив піти. Урок простий: не чекай, поки стане пізно. Цінуй людей, терплячих до тебе, дякуй їм і сприймай їхню доброту як щось дорогоцінне, а не як те, що триватиме вічно попри все.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What can happen each time a caring person is disappointed?', uk: 'Що може статися щоразу, коли дбайливу людину розчаровують?' },
        options: [
          { en: 'A small part of their love can quietly fade', uk: 'Маленька частинка її любові тихо згасає' },
          { en: 'They become loud and angry', uk: 'Вона стає гучною й сердитою' },
          { en: 'They forget everything at once', uk: 'Вона одразу все забуває' },
        ],
        correct: 0,
        explain: { en: '“…a small part of their love can quietly fade.”', uk: '«…маленька частинка її любові тихо згасає.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is the main lesson?', uk: 'Який головний урок?' },
        options: [
          { en: 'Appreciate kind people before it is too late', uk: 'Цінувати добрих людей, поки не пізно' },
          { en: 'Never forgive anyone', uk: 'Ніколи нікого не прощати' },
          { en: 'Kindness is a weakness', uk: 'Доброта — це слабкість' },
        ],
        correct: 0,
        explain: { en: 'The text urges us to appreciate patient people before they leave.', uk: 'Текст закликає цінувати терплячих людей, поки вони не пішли.' },
      },
      {
        kind: 'open',
        q: { en: 'Who is patient with you, and how could you show your appreciation?', uk: 'Хто терплячий до вас і як ви могли б виявити вдячність?' },
        sample: { en: 'Answers will vary. A good answer names a person and one concrete way to thank or appreciate them.', uk: 'Відповіді різнитимуться. Гарна відповідь називає людину й один конкретний спосіб подякувати їй.' },
      },
    ],
  },
  {
    id: 'speaking-up-is-a-sign-of-care',
    title: { en: 'Speaking Up Is a Sign of Care', uk: 'Говорити відверто — це турбота' },
    category: 'relationships',
    level: 'b1',
    minutes: 1,
    topics: ['relationships', 'communication', 'honesty'],
    seeAlso: ['communication'],
    body: {
      en: 'When someone we love tells us that something is wrong, it can feel like criticism. But often it is actually a sign that they care. A person who speaks up, asks questions, and shares their feelings is trying to make the relationship better. The truly worrying sign is not complaints — it is silence. When someone stops speaking, stops asking, and stops reacting, their feelings may be fading away. Caring people are willing to have difficult conversations because they want to build something real, not only to keep the peace. So the next time someone close to you says how they feel, try to listen instead of becoming defensive. Their honesty is a form of love.',
      uk: 'Коли той, кого ми любимо, каже, що щось не так, це може здаватися критикою. Та насправді це часто знак, що людина небайдужа. Той, хто говорить відверто, ставить запитання й ділиться почуттями, намагається зробити стосунки кращими. Справді тривожний знак — не скарги, а мовчання. Коли хтось перестає говорити, запитувати й реагувати, його почуття можуть згасати. Небайдужі люди готові до складних розмов, бо хочуть побудувати щось справжнє, а не лише зберегти видимий спокій. Тож наступного разу, коли близька людина скаже, що відчуває, спробуй вислухати, а не захищатися. Її відвертість — це вияв любові.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What is more worrying than complaints, according to the text?', uk: 'Що тривожніше за скарги, за текстом?' },
        options: [
          { en: 'Silence and indifference', uk: 'Мовчання й байдужість' },
          { en: 'Honest questions', uk: 'Відверті запитання' },
          { en: 'Kind words', uk: 'Добрі слова' },
        ],
        correct: 0,
        explain: { en: '“The truly worrying sign is not complaints — it is silence.”', uk: '«Справді тривожний знак — не скарги, а мовчання.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why do caring people have difficult conversations?', uk: 'Чому небайдужі люди йдуть на складні розмови?' },
        options: [
          { en: 'Because they want to build something real', uk: 'Бо хочуть побудувати щось справжнє' },
          { en: 'Because they enjoy arguing', uk: 'Бо люблять сперечатися' },
          { en: 'Because they want to win', uk: 'Бо хочуть перемогти' },
        ],
        correct: 0,
        explain: { en: 'They speak up to improve the relationship, not to win.', uk: 'Вони говорять, щоб покращити стосунки, а не щоб перемогти.' },
      },
      {
        kind: 'open',
        q: { en: 'Why is it hard to listen when someone criticises us, and how can we do it better?', uk: 'Чому важко слухати критику і як робити це краще?' },
        sample: { en: 'Answers will vary. A good answer notes the urge to defend ourselves and one way to stay calm and listen.', uk: 'Відповіді різнитимуться. Гарна відповідь відзначає бажання захищатися й один спосіб лишатися спокійним і слухати.' },
      },
    ],
  },
  {
    id: 'character-over-money',
    title: { en: 'Character Over Money', uk: 'Характер важливіший за гроші' },
    category: 'relationships',
    level: 'b1',
    minutes: 1,
    topics: ['relationships', 'character', 'loyalty'],
    body: {
      en: 'Some people stay beside us because of what we can give them, and others stay because of who we are. A person who rarely asks for money or gifts is not always someone who needs nothing. Sometimes they simply trust that, if we truly care, we will notice and help without being asked. People like this value effort, honesty, and presence more than a full wallet. They are rare and worth keeping. In life you will meet many people who are happy to take from you without thinking twice, but few who appreciate you for your character. So learn to recognise the loyal people who walk beside you because of the person you are — and make sure you value them in return.',
      uk: 'Одні люди залишаються поруч через те, що ми можемо їм дати, а інші — через те, ким ми є. Той, хто рідко просить грошей чи подарунків, не завжди нічого не потребує. Іноді така людина просто вірить: якщо ми справді небайдужі, ми помітимо й допоможемо, і без прохань. Такі люди цінують зусилля, чесність і присутність більше за повний гаманець. Вони рідкісні, і їх варто берегти. У житті ти зустрінеш багатьох, хто радо братиме від тебе не вагаючись, але мало кого, хто цінуватиме тебе за твій характер. Тож навчися впізнавати відданих людей, які поруч завдяки тому, ким ти є, — і цінуй їх у відповідь.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do the people described in the text value most?', uk: 'Що найбільше цінують описані в тексті люди?' },
        options: [
          { en: 'Effort, honesty, and presence', uk: 'Зусилля, чесність і присутність' },
          { en: 'Money and expensive gifts', uk: 'Гроші й дорогі подарунки' },
          { en: 'Fame and status', uk: 'Славу й статус' },
        ],
        correct: 0,
        explain: { en: '“…value effort, honesty, and presence more than a full wallet.”', uk: '«…цінують зусилля, чесність і присутність більше за повний гаманець.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text advise us to do?', uk: 'Що радить нам текст?' },
        options: [
          { en: 'Recognise and value loyal people', uk: 'Впізнавати й цінувати відданих людей' },
          { en: 'Spend more money on friends', uk: 'Більше витрачати на друзів' },
          { en: 'Trust no one', uk: 'Нікому не довіряти' },
        ],
        correct: 0,
        explain: { en: 'Learn to recognise loyal people and value them in return.', uk: 'Навчися впізнавати відданих людей і цінувати їх у відповідь.' },
      },
      {
        kind: 'open',
        q: { en: 'What qualities do you value most in the people close to you, and why?', uk: 'Які якості ви найбільше цінуєте в близьких людях і чому?' },
        sample: { en: 'Answers will vary. A good answer names one or two qualities and explains why they matter.', uk: 'Відповіді різнитимуться. Гарна відповідь називає одну-дві якості й пояснює, чому вони важливі.' },
      },
    ],
  },
  {
    id: 'support-goes-both-ways',
    title: { en: 'Support Goes Both Ways', uk: 'Підтримка — у двох напрямках' },
    category: 'relationships',
    level: 'b1',
    minutes: 1,
    topics: ['relationships', 'support', 'communication'],
    seeAlso: ['friendship'],
    body: {
      en: 'In a healthy relationship, emotional support goes both ways. Everyone has hard days, and everyone sometimes needs someone to listen. It is not fair to expect support from a partner or friend while ignoring them when they are struggling. People who carry their problems quietly are not always fine — they may simply have learned to hide their feelings. Real partnership means asking how the other person is, putting the phone down, and truly listening. When only one person gives support and the other only receives it, that is not partnership; it becomes a kind of one-sided deal. The lesson is simple: to be supported, we must also be willing to support. Care that flows in both directions is what makes a relationship strong.',
      uk: 'У здорових стосунках емоційна підтримка йде в обидва боки. У кожного бувають важкі дні, і кожному часом потрібен хтось, хто вислухає. Несправедливо очікувати підтримки від партнера чи друга, ігноруючи його, коли важко йому. Люди, які носять свої проблеми мовчки, не завжди почуваються добре — вони, можливо, просто навчилися ховати почуття. Справжнє партнерство — це запитати, як справи в іншого, відкласти телефон і по-справжньому вислухати. Коли лише одна людина підтримує, а інша тільки приймає, це не партнерство, а радше однобока угода. Урок простий: щоб отримувати підтримку, треба бути готовим підтримувати й самому. Турбота, що тече в обидва боки, робить стосунки міцними.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text say about people who carry their problems quietly?', uk: 'Що каже текст про людей, які носять проблеми мовчки?' },
        options: [
          { en: 'They are not always fine; they may hide their feelings', uk: 'Їм не завжди добре; вони можуть ховати почуття' },
          { en: 'They never have any problems', uk: 'У них ніколи немає проблем' },
          { en: 'They enjoy being alone', uk: 'Їм подобається бути на самоті' },
        ],
        correct: 0,
        explain: { en: 'Quiet people may simply have learned to hide their feelings.', uk: 'Мовчазні люди, можливо, просто навчилися ховати почуття.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What makes a relationship strong, according to the text?', uk: 'Що робить стосунки міцними, за текстом?' },
        options: [
          { en: 'Care that flows in both directions', uk: 'Турбота, що тече в обидва боки' },
          { en: 'One person giving all the support', uk: 'Коли одна людина дає всю підтримку' },
          { en: 'Never talking about feelings', uk: 'Ніколи не говорити про почуття' },
        ],
        correct: 0,
        explain: { en: '“Care that flows in both directions is what makes a relationship strong.”', uk: '«Турбота, що тече в обидва боки, робить стосунки міцними.»' },
      },
      {
        kind: 'open',
        q: { en: 'How can you tell when someone close to you needs support, even if they don’t say it?', uk: 'Як зрозуміти, що близькій людині потрібна підтримка, навіть якщо вона мовчить?' },
        sample: { en: 'Answers will vary. A good answer names signs to watch for and one way to offer help gently.', uk: 'Відповіді різнитимуться. Гарна відповідь називає ознаки, на які варто зважати, і делікатний спосіб запропонувати допомогу.' },
      },
    ],
  },
  {
    id: 'keep-private-things-private',
    title: { en: 'Keep Private Things Private', uk: 'Бережи приватне приватним' },
    category: 'relationships',
    level: 'b1',
    minutes: 1,
    topics: ['relationships', 'trust', 'privacy'],
    body: {
      en: 'When we are upset, it feels natural to talk to someone about it, and sharing our feelings with a trusted friend can help. But there is a difference between asking for support and telling everyone about every private disagreement. When we share too much about the people closest to us, we give others a one-sided story that they may remember long after we have forgiven and moved on. Private matters that leave the home can quietly damage trust and respect. This does not mean we should hide our problems or never ask for help. It means we should choose carefully who we talk to, and protect the dignity of the people we love. What happens between two people is often best kept between them.',
      uk: 'Коли нам прикро, природно хочеться комусь про це розповісти, і поділитися почуттями з надійним другом буває корисно. Та є різниця між тим, щоб попросити підтримки, і тим, щоб розповідати всім про кожну приватну незгоду. Коли ми забагато розповідаємо про найближчих людей, ми даємо іншим однобоку історію, яку вони можуть памʼятати ще довго після того, як ми вже пробачили й забули. Приватні справи, що виходять за межі дому, можуть тихо руйнувати довіру й повагу. Це не означає, що треба ховати проблеми чи ніколи не просити допомоги. Це означає ретельно обирати, кому довіряєшся, і берегти гідність тих, кого любиш. Те, що між двома людьми, часто найкраще лишати між ними.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What difference does the text describe?', uk: 'Яку різницю описує текст?' },
        options: [
          { en: 'Between asking for support and telling everyone about private disagreements', uk: 'Між проханням підтримки й розповідями всім про приватні незгоди' },
          { en: 'Between talking and writing', uk: 'Між розмовою та письмом' },
          { en: 'Between friends and family', uk: 'Між друзями та родиною' },
        ],
        correct: 0,
        explain: { en: 'Asking one trusted person for help differs from telling everyone.', uk: 'Попросити підтримки в однієї надійної людини — не те саме, що розповідати всім.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Why can sharing too much be harmful?', uk: 'Чому надмірні розповіді можуть шкодити?' },
        options: [
          { en: 'It gives others a one-sided story and can damage trust', uk: 'Це дає іншим однобоку історію й може руйнувати довіру' },
          { en: 'It takes too much time', uk: 'Це забирає забагато часу' },
          { en: 'It is against the rules', uk: 'Це проти правил' },
        ],
        correct: 0,
        explain: { en: 'Others keep a one-sided story that can damage trust and respect.', uk: 'В інших лишається однобока історія, що шкодить довірі й повазі.' },
      },
      {
        kind: 'open',
        q: { en: 'Who do you turn to when you need to talk, and how do you decide what to share?', uk: 'До кого ви звертаєтеся, коли треба виговоритися, і як вирішуєте, чим ділитися?' },
        sample: { en: 'Answers will vary. A good answer describes a trusted person and a personal limit on what to share.', uk: 'Відповіді різнитимуться. Гарна відповідь описує надійну людину й особисту межу того, чим ділитися.' },
      },
    ],
  },
  {
    id: 'believe-in-each-other',
    title: { en: 'Believe in Each Other', uk: 'Вірте одне в одного' },
    category: 'relationships',
    level: 'b1',
    minutes: 1,
    topics: ['relationships', 'encouragement', 'dreams'],
    body: {
      en: 'The people closest to us have great power over our dreams. A partner or friend who believes in us can give us the courage to try new things. But someone who doubts every idea, and always finds a reason why it will not work, can slowly make us smaller. Being careful is wise, but constant doubt is not the same as wisdom. Many good ideas are never tried because someone we trusted said they were foolish. Of course, not every plan will succeed — but people grow by trying, learning, and trying again. The lesson is to support the dreams of the people we love, even when we feel unsure. Encouragement helps others become the best version of themselves, while constant doubt can bury their potential.',
      uk: 'Найближчі люди мають велику владу над нашими мріями. Партнер чи друг, який у нас вірить, може додати сміливості пробувати нове. Але той, хто сумнівається в кожній ідеї й завжди знаходить причину, чому вона не спрацює, може поволі робити нас меншими. Бути обачним — мудро, але постійний сумнів — це не те саме, що мудрість. Багато гарних ідей так і не втілюються, бо хтось, кому ми довіряли, назвав їх безглуздими. Звісно, не кожен задум удасться — але люди зростають, коли пробують, вчаться й пробують знову. Урок у тому, щоб підтримувати мрії тих, кого любимо, навіть коли самі не впевнені. Підтримка допомагає іншим стати найкращою версією себе, а постійний сумнів здатен поховати їхній потенціал.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What can constant doubt from a loved one do?', uk: 'Що може зробити постійний сумнів від близької людини?' },
        options: [
          { en: 'Slowly make us smaller and bury our potential', uk: 'Поволі робити нас меншими й ховати наш потенціал' },
          { en: 'Make us richer', uk: 'Робити нас багатшими' },
          { en: 'Improve every plan', uk: 'Покращувати кожен план' },
        ],
        correct: 0,
        explain: { en: 'Constant doubt can make us smaller and bury our potential.', uk: 'Постійний сумнів може робити нас меншими й ховати потенціал.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is the main lesson?', uk: 'Який головний урок?' },
        options: [
          { en: 'Support the dreams of the people we love', uk: 'Підтримувати мрії тих, кого любимо' },
          { en: 'Never share your ideas', uk: 'Ніколи не ділитися ідеями' },
          { en: 'Only trust experts', uk: 'Довіряти лише експертам' },
        ],
        correct: 0,
        explain: { en: 'Encourage loved ones instead of doubting every idea.', uk: 'Підтримуй близьких замість сумніватися в кожній ідеї.' },
      },
      {
        kind: 'open',
        q: { en: 'Has someone ever encouraged you to try something new? What happened?', uk: 'Чи заохочував вас колись хтось спробувати нове? Що сталося?' },
        sample: { en: 'Answers will vary. A good answer tells a short real story and how the encouragement helped.', uk: 'Відповіді різнитимуться. Гарна відповідь розповідає коротку справжню історію й те, як підтримка допомогла.' },
      },
    ],
  },
  {
    id: 'trust-not-control',
    title: { en: 'Trust, Not Control', uk: 'Довіра, а не контроль' },
    category: 'relationships',
    level: 'b1',
    minutes: 1,
    topics: ['relationships', 'trust', 'respect'],
    seeAlso: ['friendship'],
    body: {
      en: 'Trust is one of the most important parts of any close relationship, but trust and control are not the same thing. Some people try to feel safe by watching another person’s every move — checking where they are, who they talk to, and what they do. This may look like care, but constant checking usually comes from fear, not love. Real trust is mutual: it is an agreement to be open and honest with each other. When one person watches the other closely while hiding themselves, that is not trust — it is control wearing a friendly face. A relationship built on fear and monitoring cannot feel free. The healthiest relationships give both people space, honesty, and the confidence that they are trusted.',
      uk: 'Довіра — одна з найважливіших частин будь-яких близьких стосунків, але довіра й контроль — не одне й те саме. Дехто намагається почуватися в безпеці, стежачи за кожним кроком іншого — перевіряючи, де він, з ким говорить і що робить. Це може мати вигляд турботи, але постійні перевірки зазвичай ідуть від страху, а не від любові. Справжня довіра взаємна: це згода бути відкритими й чесними одне з одним. Коли одна людина пильно стежить за іншою, ховаючи при цьому себе, це не довіра, а контроль під приязною маскою. Стосунки, збудовані на страху й нагляді, не можуть відчуватися вільними. Найздоровіші стосунки дають обом простір, чесність і впевненість, що їм довіряють.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Where does constant checking usually come from?', uk: 'Звідки зазвичай беруться постійні перевірки?' },
        options: [
          { en: 'Fear, not love', uk: 'Від страху, а не від любові' },
          { en: 'Honesty and trust', uk: 'Від чесності й довіри' },
          { en: 'Having too much free time', uk: 'Від надміру вільного часу' },
        ],
        correct: 0,
        explain: { en: '“…constant checking usually comes from fear, not love.”', uk: '«…постійні перевірки зазвичай ідуть від страху, а не від любові.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is real trust, according to the text?', uk: 'Що таке справжня довіра, за текстом?' },
        options: [
          { en: 'A mutual agreement to be open and honest', uk: 'Взаємна згода бути відкритими й чесними' },
          { en: 'Watching someone closely', uk: 'Пильно стежити за кимось' },
          { en: 'Sharing all passwords', uk: 'Ділитися всіма паролями' },
        ],
        correct: 0,
        explain: { en: '“Real trust is mutual: it is an agreement to be open and honest.”', uk: '«Справжня довіра взаємна: це згода бути відкритими й чесними.»' },
      },
      {
        kind: 'open',
        q: { en: 'What helps you build trust with another person?', uk: 'Що допомагає вам будувати довіру з іншою людиною?' },
        sample: { en: 'Answers will vary. A good answer names concrete habits like honesty, keeping promises, and giving space.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретні звички: чесність, дотримання обіцянок, повага до простору.' },
      },
    ],
  },
];
