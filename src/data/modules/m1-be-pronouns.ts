import type { Module } from '../types';

/*
 * CHANGED (F1): M1 · Be, pronouns & possessives — Section I Foundations, wave F1 (figure pronoun-map; no sim: the
 * forms are a small closed table, nothing to compute). Authored EN first, UA second; US English base.
 * Facts read in full on British Council — Present simple: to be (forms; "We can contract the verb, especially when
 * we're speaking"; "I amn't is not possible"; "with short answers, we only use contractions with no answers") and
 * Possessive 's ("always comes after a noun or a name"). That page's table also lists "No, I amn't." against its own
 * note, so the note is what is taught here. British Council has no pronoun or demonstrative page on its A1-A2, B1-B2
 * or main grammar index. Cambridge returns HTTP 403 to the fetcher, so it was read through search extracts: Pronouns:
 * personal (subject and object forms; you and it have one form); Pronouns: possessive (determiner vs pronoun, no 's
 * on hers, its has no apostrophe, it's = it is); Possession; This, that, these, those and Determiners (singular /
 * plural, close to / further from the speaker, emotional distance); Be; Contractions.
 * NOT confirmed on a learner site this session (stated without attribution): the obligatory subject and dummy it;
 * age with be; the Ukrainian contrast notes (they are this guide's own); My colleague and I vs Me and my colleague
 * as a register tendency; singular they; that for what someone just said; the /ɪ/ vs /iː/ pronunciation note; the
 * reason a contraction can't end a short answer; the phone forms (Is this Anna? AmE / Is that Anna? BrE).
 * No overlap: questions and negatives in general are m4, Present Simple is m7, there is / there are is m3.
 */
export const m1: Module = {
  id: 'm1-be-pronouns',
  num: 1,
  section: 's1-foundations',
  order: 1,
  level: 'a1',
  title: { en: 'Be, pronouns & possessives', uk: 'Be, займенники і присвійні' },
  tagline: {
    en: 'I am an engineer, not «I engineer»: the verb and the subject Ukrainian can leave out, why a key is «it» and not «he», and why English has no word for «свій».',
    uk: 'I am an engineer, а не «I engineer»: дієслово й підмет, які українська може опустити, чому ключ — це «it», а не «he», і чому в англійській немає слова «свій».',
  },
  readMins: 15,
  mentalModel: {
    en: 'An English sentence is a **frame with slots that must be filled**. The subject slot and the verb slot are never empty: where Ukrainian says «Я інженер» or «Холодно», English says *I **am** an engineer* and ***It** is cold*. *Be* is the verb that fills the slot when there is no other verb. Pronouns then change shape by **the slot they stand in**, not by what they mean: *she* before a verb, *her* after it, *her* before a noun, *hers* alone. So when you choose a form, look at the position first.',
    uk: 'Англійське речення — це **рамка зі слотами, які мусять бути заповнені**. Слот підмета і слот дієслова ніколи не порожні: де українська каже «Я інженер» чи «Холодно», англійська каже *I **am** an engineer* і ***It** is cold*. *Be* — це дієслово, що заповнює слот, коли іншого дієслова немає. Займенники ж змінюють форму залежно **від слота, у якому стоять**, а не від значення: *she* перед дієсловом, *her* після нього, *her* перед іменником, *hers* окремо. Тож вибираючи форму, спершу дивіться на місце в реченні.',
  },
  topics: [
    // ── 1. AM / IS / ARE ───────────────────────────────────────────────────
    {
      id: 'am-is-are',
      title: { en: 'am, is, are: the verb Ukrainian leaves out', uk: 'am, is, are: дієслово, яке українська опускає' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'In the present, Ukrainian usually drops «бути»: «Я інженер», «Вона вдома». English cannot. Every sentence needs a verb, and if there is no other verb, that verb is *be*: *I **am** an engineer* · *She **is** at home*. It has three present forms, and we usually contract them in speech.',
            uk: 'У теперішньому часі українська зазвичай опускає «бути»: «Я інженер», «Вона вдома». Англійська так не може. Кожне речення потребує дієслова, і якщо іншого немає, це *be*: *I **am** an engineer* · *She **is** at home*. Воно має три форми в теперішньому часі, і в мовленні їх зазвичай скорочують.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Be in the present: the whole system. Questions swap be and the subject.', uk: 'Be у теперішньому часі: уся система. У питаннях be і підмет міняються місцями.' },
          head: [
            { en: 'Subject', uk: 'Підмет' },
            { en: 'Positive', uk: 'Ствердження' },
            { en: 'Negative', uk: 'Заперечення' },
            { en: 'Question', uk: 'Питання' },
          ],
          rows: [
            [
              { en: 'I', uk: 'I' },
              { en: 'I am · I’m', uk: 'I am · I’m' },
              { en: 'I am not · I’m not', uk: 'I am not · I’m not' },
              { en: 'Am I?', uk: 'Am I?' },
            ],
            [
              { en: 'you, we, they', uk: 'you, we, they' },
              { en: 'are · you’re, we’re, they’re', uk: 'are · you’re, we’re, they’re' },
              { en: 'are not · aren’t · you’re not', uk: 'are not · aren’t · you’re not' },
              { en: 'Are you? Are we? Are they?', uk: 'Are you? Are we? Are they?' },
            ],
            [
              { en: 'he, she, it', uk: 'he, she, it' },
              { en: 'is · he’s, she’s, it’s', uk: 'is · he’s, she’s, it’s' },
              { en: 'is not · isn’t · she’s not', uk: 'is not · isn’t · she’s not' },
              { en: 'Is he? Is she? Is it?', uk: 'Is he? Is she? Is it?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Three slips that come straight from Ukrainian', uk: 'Три помилки, що йдуть прямо з української' },
          md: {
            en: '«Я інженер» → ✓ *I’m an engineer* · ✕ *I engineer*.\n\n«Мені тридцять років» → ✓ *I’m thirty* · ✕ *I have thirty years*. English gives your age with *be*.\n\n«Я згоден» → ✓ *I agree* · ✕ *I am agree*. Here English has a real verb, *agree*, so *be* has no slot to fill.',
            uk: '«Я інженер» → ✓ *I’m an engineer* · ✕ *I engineer*.\n\n«Мені тридцять років» → ✓ *I’m thirty* · ✕ *I have thirty years*. Вік англійська передає через *be*.\n\n«Я згоден» → ✓ *I agree* · ✕ *I am agree*. Тут англійська має справжнє дієслово *agree*, тож для *be* слота немає.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: '«Холодно» → It’s cold: the subject slot is never empty', uk: '«Холодно» → It’s cold: слот підмета ніколи не порожній' },
          md: {
            en: 'Where Ukrainian has no subject at all, English adds an empty *it*: *It’s cold* · *It’s Monday* · *It’s late* · *It’s easy to fix*. ✕ *Is cold*. And when it means «мені холодно», a person is the subject: ✓ *I’m cold*, ✕ *To me is cold*.',
            uk: 'Де в українській підмета немає взагалі, англійська додає порожнє *it*: *It’s cold* · *It’s Monday* · *It’s late* · *It’s easy to fix*. ✕ *Is cold*. А якщо йдеться про «мені холодно», підмет — людина: ✓ *I’m cold*, ✕ *To me is cold*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Short answers.** British Council: with short answers, we only use contractions with *no* answers. So *Are you busy?* → ✓ *Yes, I am.* · ✓ *No, I’m not.* · ✕ *Yes, I’m.* A contraction can’t end the sentence, because the stress falls on that last word. The same goes for *Is it ready?* → ✓ *Yes, it is.* · ✕ *Yes, it’s.* Do-questions are a different system: *Are you ready?* takes *be*, while *Do you agree?* takes *do*, and ✕ *Do you ready?* mixes them up. The general pattern is in [m4](#/m/m4-questions-negatives).',
            uk: '**Короткі відповіді.** British Council: у коротких відповідях скорочення вживають лише із *no*. Отже, *Are you busy?* → ✓ *Yes, I am.* · ✓ *No, I’m not.* · ✕ *Yes, I’m.* Скороченням речення закінчитися не може, бо наголос падає саме на останнє слово. Так само *Is it ready?* → ✓ *Yes, it is.* · ✕ *Yes, it’s.* Питання з do — це інша система: *Are you ready?* бере *be*, а *Do you agree?* бере *do*, і ✕ *Do you ready?* їх плутає. Загальна схема — у [m4](#/m/m4-questions-negatives).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: no «amn’t», and two negatives', uk: 'Дрібний шрифт: немає «amn’t», і два заперечення' },
          md: {
            en: 'British Council says it directly: *I amn’t* is not possible, so the only short form is *I’m not*. The others have two: *She’s not a student* = *She isn’t a student*. Both are correct. In formal writing, use the full form: *She is not*. Register as a system is in [m29](#/m/m29-subjunctive-formal).',
            uk: 'British Council каже прямо: *I amn’t* неможливе, тож єдина коротка форма — *I’m not*. Решта мають дві: *She’s not a student* = *She isn’t a student*. Обидві правильні. На формальному письмі вживайте повну форму: *She is not*. Регістр як система — у [m29](#/m/m29-subjunctive-formal).',
          },
        },
      ],
    },

    // ── 2. SUBJECT AND OBJECT PRONOUNS ─────────────────────────────────────
    {
      id: 'subject-object-pronouns',
      title: { en: 'Subject and object pronouns', uk: 'Займенники-підмети і займенники-додатки' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Cambridge splits personal pronouns into **subject forms** and **object forms**. A subject form stands before the verb: ***She** called*. An object form stands after a verb or a preposition: *I called **her*** · *This is for **her***. *You* and *it* have just one form. The figure shows all of them on one grid.',
            uk: 'Cambridge ділить особові займенники на **форми підмета** і **форми додатка**. Форма підмета стоїть перед дієсловом: ***She** called*. Форма додатка стоїть після дієслова або прийменника: *I called **her*** · *This is for **her***. *You* і *it* мають лише одну форму. На фігурі всі вони в одній таблиці.',
          },
        },
        {
          kind: 'figure',
          fig: 'pronoun-map',
          caption: {
            en: 'Be and the four pronoun jobs on one grid. Read across a row; the position in the sentence picks the column.',
            uk: 'Be і чотири ролі займенника в одній таблиці. Читайте рядок упоперек; колонку вибирає місце в реченні.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'A key is «it», not «he»', uk: 'Ключ — це «it», а не «he»' },
          md: {
            en: 'Ukrainian gives every noun a gender, so «ключ» is «він» and «книга» is «вона». English keeps *he* and *she* for people, and things are *it*: «Де ключ? Він на столі.» → ✓ *Where’s the key? **It’s** on the table.* · ✕ *He’s on the table.* The same goes for a server, a bug or a laptop. In the plural, people and things are the same: *they*.',
            uk: 'Українська дає кожному іменнику рід, тож «ключ» — це «він», а «книга» — «вона». Англійська лишає *he* і *she* для людей, а речі — це *it*: «Де ключ? Він на столі.» → ✓ *Where’s the key? **It’s** on the table.* · ✕ *He’s on the table.* Так само сервер, баг чи ноутбук. У множині люди й речі однакові: *they*.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Ukrainian', uk: 'Українська' },
          b: { en: 'English', uk: 'Англійська' },
          rows: [
            [
              { en: 'Dropped subject', uk: 'Опущений підмет' },
              { en: 'Працюю вдома.', uk: 'Працюю вдома.' },
              { en: 'I work from home.', uk: 'I work from home.' },
            ],
            [
              { en: 'The case does the job', uk: 'Роль виконує відмінок' },
              { en: 'Подзвони мені. · Мені подзвони.', uk: 'Подзвони мені. · Мені подзвони.' },
              { en: 'Call me. · ✕ Me call.', uk: 'Call me. · ✕ Me call.' },
            ],
            [
              { en: 'Grammatical gender', uk: 'Граматичний рід' },
              { en: 'Сервер упав. Він не відповідає.', uk: 'Сервер упав. Він не відповідає.' },
              { en: 'The server is down. It isn’t responding.', uk: 'The server is down. It isn’t responding.' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Two people in one slot.** *My colleague and **I** work on one team*: test it by removing the colleague, and *I work* remains. After a verb or a preposition it is the object form: *She invited my colleague and **me*** · *between you and **me***. You will also hear *Me and my colleague work…* in casual speech, but in email and at work, write *My colleague and I*. And after *be*, the object form is the everyday choice: *Who is it? It’s **me**.*',
            uk: '**Двоє людей в одному слоті.** *My colleague and **I** work on one team*: перевірте, прибравши колегу, і лишиться *I work*. Після дієслова чи прийменника вживається форма додатка: *She invited my colleague and **me*** · *between you and **me***. У невимушеному мовленні ви почуєте й *Me and my colleague work…*, але в листах і на роботі пишіть *My colleague and I*. А після *be* звичайний вибір — форма додатка: *Who is it? It’s **me**.*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: they for one person', uk: 'Дрібний шрифт: they про одну людину' },
          md: {
            en: 'When you don’t know a person’s gender, or don’t need to mention it, English often uses *they* for one person, with a plural verb: *Someone left **their** laptop here. **They** are probably looking for it.* It is normal in documentation and tickets: *When a user logs in, **they** see the dashboard.*',
            uk: 'Коли стать людини невідома або її не треба згадувати, англійська часто вживає *they* про одну людину, з дієсловом у множині: *Someone left **their** laptop here. **They** are probably looking for it.* Це нормально в документації й тікетах: *When a user logs in, **they** see the dashboard.*',
          },
        },
      ],
    },

    // ── 3. POSSESSIVES ─────────────────────────────────────────────────────
    {
      id: 'possessives',
      title: { en: 'my or mine, ’s, and no word for «свій»', uk: 'my чи mine, ’s і немає слова для «свій»' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Cambridge separates the two sets by position. A **possessive determiner** goes before a noun: ***my** laptop*, ***their** team*. A **possessive pronoun** stands in place of the noun: *This laptop is **mine***, *The idea was **theirs***. So ✕ *mine laptop* and ✕ *This laptop is my* are the same mistake from two sides.',
            uk: 'Cambridge розрізняє ці два набори за місцем. **Possessive determiner** стоїть перед іменником: ***my** laptop*, ***their** team*. **Possessive pronoun** стоїть замість іменника: *This laptop is **mine***, *The idea was **theirs***. Отже, ✕ *mine laptop* і ✕ *This laptop is my* — та сама помилка з двох боків.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'English has no «свій»', uk: 'В англійській немає «свій»' },
          md: {
            en: '«Я взяв **свій** ноутбук», «Вона взяла **свій** ноутбук», «Вони взяли **свої** ноутбуки» use one Ukrainian word. English chooses by who the owner is: *I took **my** laptop* · *She took **her** laptop* · *They took **their** laptops*. And *his* or *her* follows the **owner**, not the thing owned: «Тарас і його сестра» → ✓ *Taras and **his** sister* · ✕ *Taras and her sister*.',
            uk: '«Я взяв **свій** ноутбук», «Вона взяла **свій** ноутбук», «Вони взяли **свої** ноутбуки» — одне українське слово. Англійська вибирає за тим, хто власник: *I took **my** laptop* · *She took **her** laptop* · *They took **their** laptops*. А *his* чи *her* іде за **власником**, а не за предметом: «Тарас і його сестра» → ✓ *Taras and **his** sister* · ✕ *Taras and her sister*.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'The ’s and the apostrophe. British Council: possessive ’s always comes after a noun or a name.', uk: '’s і апостроф. British Council: possessive ’s завжди стоїть після іменника чи імені.' },
          head: [
            { en: 'Owner', uk: 'Власник' },
            { en: 'Form', uk: 'Форма' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'One person', uk: 'Одна особа' },
              { en: '+ ’s', uk: '+ ’s' },
              { en: 'Anna’s laptop · my manager’s email', uk: 'Anna’s laptop · my manager’s email' },
            ],
            [
              { en: 'Plural ending in -s', uk: 'Множина на -s' },
              { en: '+ ’ only', uk: 'лише + ’' },
              { en: 'the users’ data · my parents’ house', uk: 'the users’ data · my parents’ house' },
            ],
            [
              { en: 'Irregular plural', uk: 'Неправильна множина' },
              { en: '+ ’s', uk: '+ ’s' },
              { en: 'people’s names · the children’s room', uk: 'people’s names · the children’s room' },
            ],
            [
              { en: 'Plain plural, no owner', uk: 'Звичайна множина, без власника' },
              { en: 'no apostrophe', uk: 'без апострофа' },
              { en: 'two users · ✕ two user’s', uk: 'two users · ✕ two user’s' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'its or it’s?', uk: 'its чи it’s?' },
          md: {
            en: '*It’s* means *it is* (or *it has*): ***It’s** broken*. *Its* is the possessive, with no apostrophe, like *his*: *The app saves **its** settings*. Test: say *it is* out loud. If the sentence still works, write *it’s*. Cambridge lists ✕ *proud of it’s ability* as an error. No possessive pronoun takes an apostrophe: ✓ *hers, yours, ours, theirs* · ✕ *her’s*.',
            uk: '*It’s* означає *it is* (або *it has*): ***It’s** broken*. *Its* — присвійна форма, без апострофа, як *his*: *The app saves **its** settings*. Тест: скажіть уголос *it is*. Якщо речення працює, пишіть *it’s*. Cambridge наводить ✕ *proud of it’s ability* як помилку. Жоден possessive pronoun не має апострофа: ✓ *hers, yours, ours, theirs* · ✕ *her’s*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**A friend of mine.** A possessive can’t sit next to *a* or *the*: ✕ *a my friend* · ✕ *the my laptop*. To say «один мій друг», English uses *of* + the possessive pronoun: *She’s **a friend of mine*** · *This is an idea **of hers***. Articles and possessives share one slot before the noun: see [m2](#/m/m2-articles-basics).',
            uk: '**A friend of mine.** Присвійна форма не може стояти поруч з *a* чи *the*: ✕ *a my friend* · ✕ *the my laptop*. Щоб сказати «один мій друг», англійська вживає *of* + possessive pronoun: *She’s **a friend of mine*** · *This is an idea **of hers***. Артиклі й присвійні слова ділять один слот перед іменником: див. [m2](#/m/m2-articles-basics).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: ’s or of?', uk: 'Дрібний шрифт: ’s чи of?' },
          md: {
            en: 'People and groups of people usually take *’s*: *Anna’s plan*, *the team’s plan*. With things, *of* is the safe choice, especially for parts: *the end **of** the file*, *the name **of** the function*. So ✕ *the plan of Anna* sounds foreign, but *the end of the file* is exactly right. This is a tendency, not a law: *the company’s policy* and *today’s meeting* are perfectly normal.',
            uk: 'Люди й групи людей зазвичай беруть *’s*: *Anna’s plan*, *the team’s plan*. З речами безпечний вибір — *of*, особливо про частини: *the end **of** the file*, *the name **of** the function*. Отже, ✕ *the plan of Anna* звучить неприродно, а *the end of the file* — саме те. Це тенденція, а не закон: *the company’s policy* і *today’s meeting* цілком нормальні.',
          },
        },
      ],
    },

    // ── 4. THIS / THAT ─────────────────────────────────────────────────────
    {
      id: 'this-that',
      title: { en: 'this, that, these, those', uk: 'this, that, these, those' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Two questions pick the word: **how many?** and **how far?** Cambridge: *this* and *that* go with a singular noun, *these* and *those* with a plural one; *this* and *these* are for people and things close to the speaker, *that* and *those* for those further away. Ukrainian has the same idea in «цей» and «той», so what really needs attention is number: ✕ *this files* → ✓ *these files*.',
            uk: 'Слово вибирають два питання: **скільки?** і **як далеко?** Cambridge: *this* і *that* вживаються з одниною, *these* і *those* — з множиною; *this* і *these* — про людей і речі близько до мовця, *that* і *those* — про тих, що далі. В українській та сама ідея в «цей» і «той», тож справжньої уваги потребує число: ✕ *this files* → ✓ *these files*.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Two questions, four words. All four also work without a noun.', uk: 'Два питання, чотири слова. Усі чотири працюють і без іменника.' },
          head: [
            { en: 'How many', uk: 'Скільки' },
            { en: 'Near', uk: 'Близько' },
            { en: 'Further away', uk: 'Далі' },
          ],
          rows: [
            [
              { en: 'One', uk: 'Один' },
              { en: 'this file · This is my laptop.', uk: 'this file · This is my laptop.' },
              { en: 'that file · That is the server room.', uk: 'that file · That is the server room.' },
            ],
            [
              { en: 'More than one', uk: 'Більше одного' },
              { en: 'these files · These are new.', uk: 'these files · These are new.' },
              { en: 'those files · Those are old.', uk: 'those files · Those are old.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Distance in time, and on the phone', uk: 'Відстань у часі й по телефону' },
          md: {
            en: 'The same near / far works for time: ***this** week* is the one we’re in, ***that** day* is one you’re pointing back to. To introduce someone, English says ***This** is Anna* (✕ *She is Anna*), and on the phone ***This is** Taras* or *Hi, it’s Taras*. To check who’s calling: *Is **this** Anna?* (BrE usually *Is **that** Anna?*).',
            uk: 'Те саме близько / далеко працює для часу: ***this** week* — той, у якому ми зараз, ***that** day* — той, на який вказуємо в минулому. Представляючи когось, англійська каже ***This** is Anna* (✕ *She is Anna*), а по телефону ***This is** Taras* або *Hi, it’s Taras*. Уточнюючи, хто дзвонить: *Is **this** Anna?* (у BrE зазвичай *Is **that** Anna?*).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Pointing at words, not things.** *That* often points back at what someone just said: *We could ship on Friday.* — ***That**’s a good idea.* *This* tends to point at what you are saying now or are about to say: *Listen to **this**: the build passed.* In long texts the choice carries more weight: see Cambridge’s *It, this and that in paragraphs*, in the sources below.',
            uk: '**Вказуємо на слова, а не на речі.** *That* часто вказує назад, на щойно сказане: *We could ship on Friday.* — ***That**’s a good idea.* *This* радше вказує на те, що ви кажете зараз або скажете далі: *Listen to **this**: the build passed.* У довгих текстах цей вибір важить більше: див. *It, this and that in paragraphs* від Cambridge у джерелах нижче.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: emotional distance, and two sounds', uk: 'Дрібний шрифт: емоційна відстань і два звуки' },
          md: {
            en: 'Cambridge notes that distance can be emotional: *this* and *these* can sound warmer, *that* and *those* more detached: *I love **this** city* vs *I don’t want **that** man in my office.* In pronunciation, keep the vowels apart: *this* /ðɪs/ is short, *these* /ðiːz/ is long and ends in a /z/. If they sound the same, listeners can’t hear your plural.',
            uk: 'Cambridge зауважує, що відстань буває емоційною: *this* і *these* можуть звучати тепліше, *that* і *those* — відсторонено: *I love **this** city* vs *I don’t want **that** man in my office.* У вимові розрізняйте голосні: *this* /ðɪs/ короткий, *these* /ðiːz/ довгий і закінчується на /z/. Якщо вони звучать однаково, слухач не чує вашої множини.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Every English sentence needs a subject and a verb. If there is no other verb, the verb is be: I am an engineer.',
      uk: 'Кожне англійське речення потребує підмета і дієслова. Якщо іншого дієслова немає, це be: I am an engineer.',
    },
    {
      en: 'Where Ukrainian has no subject, English uses an empty it: It’s cold. It’s Monday.',
      uk: 'Де в українській підмета немає, англійська вживає порожнє it: It’s cold. It’s Monday.',
    },
    {
      en: 'Age is be, and agree is a real verb: I’m thirty, I agree.',
      uk: 'Вік — це be, а agree — справжнє дієслово: I’m thirty, I agree.',
    },
    {
      en: 'Things are it, however Ukrainian genders them: Where’s the key? It’s on the table.',
      uk: 'Речі — це it, якого б роду вони не були в українській: Where’s the key? It’s on the table.',
    },
    {
      en: 'The position picks the form: she before a verb, her after it, her before a noun, hers alone.',
      uk: 'Форму вибирає місце: she перед дієсловом, her після нього, her перед іменником, hers окремо.',
    },
    {
      en: 'English has no «свій»: the possessive follows the owner: I took my laptop, she took her laptop.',
      uk: 'В англійській немає «свій»: присвійна форма йде за власником: I took my laptop, she took her laptop.',
    },
    {
      en: 'it’s = it is; its is the possessive and has no apostrophe.',
      uk: 'it’s = it is; its — присвійна форма, без апострофа.',
    },
    {
      en: 'this / that with one, these / those with more than one; this / these near, that / those further away.',
      uk: 'this / that з одниною, these / those з множиною; this / these близько, that / those далі.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“I engineer.”', uk: '«I engineer.»' },
      body: { en: 'The verb slot can’t stay empty, and a job takes an article: I’m an engineer.', uk: 'Слот дієслова не може лишатися порожнім, а професія бере артикль: I’m an engineer.' },
    },
    {
      title: { en: '“I have thirty years.”', uk: '«I have thirty years.»' },
      body: { en: 'Age is be: I’m thirty, or I’m thirty years old.', uk: 'Вік — це be: I’m thirty або I’m thirty years old.' },
    },
    {
      title: { en: '“I am agree.”', uk: '«I am agree.»' },
      body: { en: 'agree is a verb, so there is no slot for be: I agree.', uk: 'agree — дієслово, тож для be слота немає: I agree.' },
    },
    {
      title: { en: '“Is cold.”', uk: '«Is cold.»' },
      body: { en: 'The subject slot needs a word, even an empty one: It’s cold.', uk: 'Слот підмета потребує слова, хай і порожнього: It’s cold.' },
    },
    {
      title: { en: '“He is on the table” about a key', uk: '«He is on the table» про ключ' },
      body: { en: 'Things are it in English: It’s on the table.', uk: 'Речі в англійській — це it: It’s on the table.' },
    },
    {
      title: { en: '“Do you ready?”', uk: '«Do you ready?»' },
      body: { en: 'ready is not a verb, so the question uses be: Are you ready?', uk: 'ready — не дієслово, тому питання будується з be: Are you ready?' },
    },
    {
      title: { en: '“Yes, I’m.”', uk: '«Yes, I’m.»' },
      body: { en: 'A contraction can’t end a positive short answer: Yes, I am.', uk: 'Скороченням не може закінчуватися стверджувальна коротка відповідь: Yes, I am.' },
    },
    {
      title: { en: '“She took my laptop” for «взяла свій»', uk: '«She took my laptop» замість «взяла свій»' },
      body: { en: 'There is no «свій»: the possessive follows the owner: She took her laptop.', uk: '«Свій» немає: присвійна форма йде за власником: She took her laptop.' },
    },
    {
      title: { en: '“it’s settings”', uk: '«it’s settings»' },
      body: { en: 'it’s means it is. The possessive has no apostrophe: its settings.', uk: 'it’s означає it is. Присвійна форма не має апострофа: its settings.' },
    },
    {
      title: { en: '“this files”', uk: '«this files»' },
      body: { en: 'A plural noun takes these or those: these files.', uk: 'Іменник у множині бере these або those: these files.' },
    },
  ],
  exercises: [
    {
      id: 'ex-be-pronouns-1',
      kind: 'gap',
      sentence: 'I ___ an engineer.',
      answers: ['am'],
      explain: { en: 'There is no other verb, so be fills the verb slot.', uk: 'Іншого дієслова немає, тож слот дієслова заповнює be.' },
      level: 'a1',
      tags: ['be', 'foundations'],
    },
    {
      id: 'ex-be-pronouns-2',
      kind: 'mcq',
      prompt: { en: 'How do you say «Мені тридцять років»?', uk: 'Як сказати «Мені тридцять років»?' },
      options: ['I am thirty.', 'I have thirty years.', 'To me is thirty.'],
      correct: 0,
      explain: { en: 'English gives age with be.', uk: 'Вік англійська передає через be.' },
      level: 'a1',
      tags: ['be', 'ua-traps'],
    },
    {
      id: 'ex-be-pronouns-3',
      kind: 'gap',
      sentence: '___ you ready?',
      answers: ['are'],
      hint: { en: 'ready is not a verb', uk: 'ready — не дієслово' },
      explain: { en: 'With no other verb, the question swaps be and the subject: Are you ready?', uk: 'Без іншого дієслова питання міняє місцями be і підмет: Are you ready?' },
      level: 'a1',
      tags: ['be', 'questions'],
    },
    {
      id: 'ex-be-pronouns-4',
      kind: 'mcq',
      prompt: { en: '«Де ключ? Він на столі.» Where’s the key?', uk: '«Де ключ? Він на столі.» Where’s the key?' },
      options: ['It’s on the table.', 'He’s on the table.', 'Is on the table.'],
      correct: 0,
      explain: { en: 'Things are it, whatever their gender in Ukrainian, and the subject slot can’t be empty.', uk: 'Речі — це it, якого б роду вони не були в українській, а слот підмета не може бути порожнім.' },
      level: 'a1',
      tags: ['pronouns', 'ua-traps'],
    },
    {
      id: 'ex-be-pronouns-5',
      kind: 'gap',
      sentence: 'She isn’t in the office. Please call ___. (she)',
      answers: ['her'],
      explain: { en: 'After a verb, use the object form.', uk: 'Після дієслова вживається форма додатка.' },
      level: 'a1',
      tags: ['pronouns'],
    },
    {
      id: 'ex-be-pronouns-6',
      kind: 'gap',
      sentence: 'That is Anna’s laptop. It’s ___. (she)',
      answers: ['hers'],
      hint: { en: 'no noun after the gap', uk: 'після пропуску немає іменника' },
      explain: { en: 'With no noun after it, use the possessive pronoun: hers.', uk: 'Без іменника після нього вживається possessive pronoun: hers.' },
      level: 'a1',
      tags: ['possessives'],
    },
    {
      id: 'ex-be-pronouns-7',
      kind: 'mcq',
      prompt: { en: '«Тарас і його сестра»', uk: '«Тарас і його сестра»' },
      options: ['Taras and his sister', 'Taras and her sister', 'Taras and him sister'],
      correct: 0,
      explain: { en: 'his or her follows the owner, Taras, not the sister.', uk: 'his чи her іде за власником, Тарасом, а не за сестрою.' },
      level: 'a1',
      tags: ['possessives', 'ua-traps'],
    },
    {
      id: 'ex-be-pronouns-8',
      kind: 'mcq',
      prompt: { en: '«Вона взяла свій ноутбук.»', uk: '«Вона взяла свій ноутбук.»' },
      options: ['She took her laptop.', 'She took my laptop.', 'She took his laptop.'],
      correct: 0,
      explain: { en: 'English has no «свій»; the owner is she, so the possessive is her.', uk: 'В англійській немає «свій»; власник — she, тож присвійна форма — her.' },
      level: 'a1',
      tags: ['possessives', 'ua-traps'],
    },
    {
      id: 'ex-be-pronouns-9',
      kind: 'gap',
      sentence: 'The app saves ___ settings automatically. (it)',
      answers: ['its'],
      explain: { en: 'The possessive has no apostrophe; it’s means it is.', uk: 'Присвійна форма не має апострофа; it’s означає it is.' },
      level: 'a1',
      tags: ['possessives', 'spelling'],
    },
    {
      id: 'ex-be-pronouns-10',
      kind: 'gap',
      sentence: '___ raining again. (it + be)',
      answers: ["it's", 'it is'],
      explain: { en: 'it is = it’s, and the empty it fills the subject slot.', uk: 'it is = it’s, а порожнє it заповнює слот підмета.' },
      level: 'a1',
      tags: ['be', 'pronouns'],
    },
    {
      id: 'ex-be-pronouns-11',
      kind: 'mcq',
      prompt: { en: 'Are you busy?', uk: 'Are you busy?' },
      options: ['Yes, I am.', 'Yes, I’m.', 'Yes, am.'],
      correct: 0,
      explain: { en: 'Short answers contract only with no: No, I’m not. A positive one stays full.', uk: 'У коротких відповідях скорочення буває лише із no: No, I’m not. Стверджувальна лишається повною.' },
      level: 'a1',
      tags: ['be', 'short-answers'],
    },
    {
      id: 'ex-be-pronouns-12',
      kind: 'gap',
      sentence: '___ files on my desk are new. Those files over there are old.',
      answers: ['these'],
      explain: { en: 'Plural and near: these.', uk: 'Множина і близько: these.' },
      level: 'a1',
      tags: ['demonstratives'],
    },
    {
      id: 'ex-be-pronouns-13',
      kind: 'mcq',
      prompt: { en: 'You introduce a colleague standing next to you.', uk: 'Ви представляєте колегу, що стоїть поруч.' },
      options: ['This is Anna.', 'She Anna.', 'Those are Anna.'],
      correct: 0,
      explain: { en: 'English introduces people with this is.', uk: 'Англійська представляє людей через this is.' },
      level: 'a1',
      tags: ['demonstratives'],
    },
    {
      id: 'ex-be-pronouns-14',
      kind: 'mcq',
      prompt: { en: 'Which one means the data of many users?', uk: 'Що з цього означає дані багатьох користувачів?' },
      options: ['the users’ data', 'the user’s data', 'the users data'],
      correct: 0,
      explain: { en: 'A plural ending in -s adds only an apostrophe.', uk: 'Множина на -s додає лише апостроф.' },
      level: 'a2',
      tags: ['possessives', 'spelling'],
    },
    {
      id: 'ex-be-pronouns-15',
      kind: 'mcq',
      prompt: { en: '«Я згоден.»', uk: '«Я згоден.»' },
      options: ['I agree.', 'I am agree.', 'I’m agree.'],
      correct: 0,
      explain: { en: 'agree is a verb, so be has no slot here.', uk: 'agree — дієслово, тож для be тут слота немає.' },
      level: 'a1',
      tags: ['be', 'ua-traps'],
    },
    {
      id: 'ex-be-pronouns-16',
      kind: 'gap',
      sentence: 'My colleague and ___ work on the same team.',
      answers: ['I'],
      hint: { en: 'remove the colleague and test', uk: 'приберіть колегу й перевірте' },
      explain: { en: 'It stands in the subject slot: I work.', uk: 'Це слот підмета: I work.' },
      level: 'a2',
      tags: ['pronouns'],
    },
  ],
  seeAlso: ['m2-articles-basics', 'm3-nouns-quantifiers', 'm4-questions-negatives', 'm7-present-simple-continuous', 'm29-subjunctive-formal'],
  sources: [
    { title: 'British Council — Present simple: to be (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be' },
    { title: 'British Council — Possessive ’s (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/possessive-s' },
    { title: 'Cambridge Dictionary — Pronouns: personal', url: 'https://dictionary.cambridge.org/grammar/british-grammar/pronouns-personal-i-me-you-him-it-they-etc' },
    { title: 'Cambridge Dictionary — Pronouns: possessive', url: 'https://dictionary.cambridge.org/grammar/british-grammar/pronouns-possessive-my-mine-your-yours-etc' },
    { title: 'Cambridge Dictionary — This, that, these, those', url: 'https://dictionary.cambridge.org/grammar/british-grammar/this-that-these-those' },
    { title: 'Cambridge Dictionary — It, this and that in paragraphs', url: 'https://dictionary.cambridge.org/us/grammar/british-grammar/it-this-and-that-in-paragraphs' },
  ],
};
