import type { Module } from '../types';

/*
 * M22 · Requests, offers & politeness — Section III ★ Modal Verbs (S4). Sixth and final module of
 * the flagship. Authored EN first, UA second; grammar terms stay English in both languages; examples
 * are US English (with BrE/AmE register notes where they differ). Facts verified against Cambridge
 * grammar (Requests; Would rather / would sooner; Prefer) and British Council. Spine: politeness =
 * distance — the more hypothetical the modal (can → could → would → I was wondering if…), the more
 * polite; plus mind + -ing (with its answer inversion) and the would rather / would prefer forms.
 */
export const m22: Module = {
  id: 'm22-requests-politeness',
  num: 22,
  section: 's3-modal-verbs',
  order: 6,
  level: 'b1',
  title: { en: 'Requests, offers & politeness', uk: 'Прохання, пропозиції і ввічливість' },
  tagline: {
    en: 'Could you…? is politer than Can you…? for one reason: it’s more distant. Politeness in English is a step backwards — into the past-form, hypothetical modals.',
    uk: 'Could you…? ввічливіше за Can you…? з однієї причини: воно віддаленіше. Ввічливість в англійській — це крок назад, у гіпотетичні modal минулої форми.',
  },
  readMins: 18,
  mentalModel: {
    en: 'To ask, offer or suggest, English reaches for modals — and the trick to politeness is distance. The same request gets softer as you step back into more hypothetical forms: Can you…? → Could you…? → Would you…? → Would you mind…? → I was wondering if you could…? Nothing about the action changes; only how far back you stand. Offers and preferences ride the same modals: Shall I…?, I’ll…, I’d rather…, I’d prefer…',
    uk: 'Щоб попросити, запропонувати чи порадити, англійська бере modals — а секрет ввічливості у дистанції. Те саме прохання стає мʼякшим, коли ви відступаєте в гіпотетичніші форми: Can you…? → Could you…? → Would you…? → Would you mind…? → I was wondering if you could…? Сама дія не змінюється; змінюється лише, наскільки далеко ви стоїте. Пропозиції й уподобання їдуть на тих самих modal: Shall I…?, I’ll…, I’d rather…, I’d prefer…',
  },
  topics: [
    {
      id: 'could-would-requests',
      title: { en: 'Asking others — and yourself: Can / Could / Would you…?', uk: 'Просимо інших — і себе: Can / Could / Would you…?' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'To ask **someone else to do** something, English offers a ladder of politeness: **Can you…?** (casual, among friends), **Could you…?** (polite — the safe default at work), **Would you…?** (polite, often as *Would you mind…?*). ***Can you** send me the link?* · ***Could you** review my PR?* · ***Would you** email the client?* To ask **permission for yourself**, use **Can I…?** (casual), **Could I…?** (polite), **May I…?** (formal): ***Could I** borrow your charger?* The past-form modals *could* and *would* aren’t about past time here — they sound politer because they’re one step more **distant / hypothetical**.',
            uk: 'Щоб попросити **когось іншого зробити** щось, англійська дає драбину ввічливості: **Can you…?** (невимушено, серед друзів), **Could you…?** (ввічливо — безпечний дефолт на роботі), **Would you…?** (ввічливо, часто як *Would you mind…?*). ***Can you** send me the link?* · ***Could you** review my PR?* · ***Would you** email the client?* Щоб попросити **дозволу для себе**, беріть **Can I…?** (невимушено), **Could I…?** (ввічливо), **May I…?** (формально): ***Could I** borrow your charger?* Модальні минулої форми *could* і *would* тут не про минулий час — вони звучать ввічливіше, бо на крок **віддаленіші / гіпотетичніші**.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'Request forms: who does the action, and how polite. could / would are the safe defaults.',
            uk: 'Форми прохань: хто виконує дію і наскільки ввічливо. could / would — безпечні дефолти.',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'Who acts', uk: 'Хто діє' },
            { en: 'Register', uk: 'Реєстр' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'Can you…?', uk: 'Can you…?' },
              { en: 'the other person', uk: 'інша людина' },
              { en: 'casual', uk: 'невимушено' },
              { en: 'Can you pass me that cable?', uk: 'Can you pass me that cable?' },
            ],
            [
              { en: 'Could you…?', uk: 'Could you…?' },
              { en: 'the other person', uk: 'інша людина' },
              { en: 'polite (default)', uk: 'ввічливо (дефолт)' },
              { en: 'Could you review this by five?', uk: 'Could you review this by five?' },
            ],
            [
              { en: 'Would you mind + -ing?', uk: 'Would you mind + -ing?' },
              { en: 'the other person', uk: 'інша людина' },
              { en: 'very polite', uk: 'дуже ввічливо' },
              { en: 'Would you mind resending it?', uk: 'Would you mind resending it?' },
            ],
            [
              { en: 'Could / May I…?', uk: 'Could / May I…?' },
              { en: 'you (permission)', uk: 'ви (дозвіл)' },
              { en: 'polite / formal', uk: 'ввічливо / формально' },
              { en: 'May I use your desk?', uk: 'May I use your desk?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'security',
          title: { en: 'Would you mind + -ing — and the “No” that means yes', uk: 'Would you mind + -ing — і «No», що означає так' },
          md: {
            en: '*Would you mind…?* takes the **-ing** form, not the infinitive: *Would you mind **opening** the window?* (not *to open*). And because *mind* means *object to*, the polite way to **agree** is a **negative**: *— Would you mind resending it? — **No, not at all** / **Of course not*** (= I don’t mind, I’ll do it). Answering *Yes* literally means *yes, I do mind* — a refusal. Same with *Do you mind if I…?*: agree with *No, go ahead.*',
            uk: '*Would you mind…?* бере форму **-ing**, не інфінітив: *Would you mind **opening** the window?* (не *to open*). А оскільки *mind* означає *заперечувати*, ввічливий спосіб **погодитися** — це **заперечення**: *— Would you mind resending it? — **No, not at all** / **Of course not*** (= я не проти, зроблю). Відповідь *Yes* буквально означає *так, я проти* — відмова. Так само з *Do you mind if I…?*: погоджуйтесь через *No, go ahead.*',
          },
        },
      ],
    },
    {
      id: 'shall-offers',
      title: { en: 'Offering & suggesting: Shall I…?, I’ll…, Let me…', uk: 'Пропонуємо: Shall I…?, I’ll…, Let me…' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'To **offer to do something for someone**, the classic form is **Shall I…?**: ***Shall I** carry that for you?* To **suggest doing something together**, use **Shall we…?**: ***Shall we** grab lunch after standup?* A spontaneous offer often uses **I’ll…**: *That box looks heavy — **I’ll** get the door.* And **Let me…** offers to take something over: ***Let me** take a look at that error.* *Shall* here isn’t about the future — it opens an offer or a suggestion.',
            uk: 'Щоб **запропонувати зробити щось для когось**, класична форма — **Shall I…?**: ***Shall I** carry that for you?* Щоб **запропонувати зробити щось разом**, беріть **Shall we…?**: ***Shall we** grab lunch after standup?* Спонтанна пропозиція часто йде через **I’ll…**: *That box looks heavy — **I’ll** get the door.* А **Let me…** пропонує перебрати щось на себе: ***Let me** take a look at that error.* *Shall* тут не про майбутнє — воно відкриває пропозицію.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Shall I…? (I do it for you)', uk: 'Shall I…? (я роблю для вас)' },
          b: { en: 'Shall we…? (let’s, together)', uk: 'Shall we…? (давайте, разом)' },
          rows: [
            [
              { en: 'Who acts', uk: 'Хто діє' },
              { en: 'just me, for your benefit', uk: 'лише я, на вашу користь' },
              { en: 'both of us together', uk: 'ми обидва разом' },
            ],
            [
              { en: 'Function', uk: 'Функція' },
              { en: 'an offer', uk: 'пропозиція (допомоги)' },
              { en: 'a suggestion', uk: 'пропозиція (спільна)' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'Shall I open a ticket for this?', uk: 'Shall I open a ticket for this?' },
              { en: 'Shall we pair on it tomorrow?', uk: 'Shall we pair on it tomorrow?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'US vs UK: Americans rarely say Shall', uk: 'US vs UK: американці рідко кажуть Shall' },
          md: {
            en: '*Shall I…? / Shall we…?* are alive and normal in British English but sound formal or old-fashioned to most Americans. In US English the everyday equivalents are **Should I…?**, **Do you want me to…?** / **Want me to…?**, **Can I…?**, and **Let me…**: ***Want me to** grab you a coffee?* · ***Should we** move this to a call?* Use whichever fits your audience — just don’t assume *shall* is neutral everywhere.',
            uk: '*Shall I…? / Shall we…?* цілком живі й нормальні в британській, але для більшості американців звучать формально чи старомодно. В US English щоденні відповідники — **Should I…?**, **Do you want me to…?** / **Want me to…?**, **Can I…?** і **Let me…**: ***Want me to** grab you a coffee?* · ***Should we** move this to a call?* Беріть те, що пасує аудиторії — просто не вважайте *shall* всюди нейтральним.',
          },
        },
      ],
    },
    {
      id: 'would-rather-prefer',
      title: { en: 'Preferences: would rather, would prefer, prefer', uk: 'Уподобання: would rather, would prefer, prefer' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Three ways to say what you prefer, each with its own grammar. **would rather** takes the **bare infinitive**: *I**’d rather** work from home today* — and compares with **than**: *I**’d rather** take the train **than** drive.* **would prefer** takes the **to-infinitive**: *I**’d prefer** to start at nine.* Plain **prefer** compares one thing with another using **to**: *I **prefer** tea **to** coffee* / *I **prefer** working remotely **to** commuting.* Watch the pairing: *rather … **than***, but *prefer … **to***.',
            uk: 'Три способи сказати, що ви віддаєте перевагу, кожен зі своєю граматикою. **would rather** бере **bare infinitive**: *I**’d rather** work from home today* — і порівнює через **than**: *I**’d rather** take the train **than** drive.* **would prefer** бере **to-infinitive**: *I**’d prefer** to start at nine.* Просте **prefer** порівнює одне з іншим через **to**: *I **prefer** tea **to** coffee* / *I **prefer** working remotely **to** commuting.* Слідкуйте за парами: *rather … **than***, але *prefer … **to***.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'There’s a second, very useful *would rather* pattern for when you want **someone else** to do (or not do) something: **would rather + subject + past tense**. *I**’d rather** you **didn’t** push straight to main.* *She**’d rather** we **used** the staging DB.* The past tense here isn’t past time — it’s the same “distance = politeness” move, softening a request about the present or future. It’s a gentle, indirect way to steer behavior.',
            uk: 'Є другий, дуже корисний патерн *would rather* — коли ви хочете, щоб **хтось інший** зробив (чи не робив) щось: **would rather + subject + past tense**. *I**’d rather** you **didn’t** push straight to main.* *She**’d rather** we **used** the staging DB.* Минулий час тут не про минуле — це той самий хід «дистанція = ввічливість», що помʼякшує прохання про теперішнє чи майбутнє. Це мʼякий, непрямий спосіб скерувати поведінку.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'would rather', uk: 'would rather' },
          b: { en: 'would prefer', uk: 'would prefer' },
          rows: [
            [
              { en: 'Verb form', uk: 'Форма дієслова' },
              { en: 'bare infinitive (rather work)', uk: 'bare infinitive (rather work)' },
              { en: 'to-infinitive (prefer to work)', uk: 'to-infinitive (prefer to work)' },
            ],
            [
              { en: 'Compare with', uk: 'Порівняння через' },
              { en: 'than (rather X than Y)', uk: 'than (rather X than Y)' },
              { en: 'rather than / to (prefer X to Y)', uk: 'rather than / to (prefer X to Y)' },
            ],
            [
              { en: 'Someone else', uk: 'Хтось інший' },
              { en: 'I’d rather you didn’t (+ past)', uk: 'I’d rather you didn’t (+ past)' },
              { en: 'I’d prefer it if you didn’t', uk: 'I’d prefer it if you didn’t' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Three preference traps', uk: 'Три пастки уподобань' },
          md: {
            en: '(1) **No *to* after would rather** — *I’d rather **stay***, not *I’d rather to stay*. (2) ***than*, not *to*, after rather** — *rather walk **than** drive*; but *prefer X **to** Y*. (3) **Past tense for someone else** — *I’d rather you **didn’t*** (not *don’t*), *I’d rather she **came** earlier* (not *comes*).',
            uk: '(1) **Без *to* після would rather** — *I’d rather **stay***, не *I’d rather to stay*. (2) ***than*, не *to*, після rather** — *rather walk **than** drive*; але *prefer X **to** Y*. (3) **Минулий час для когось іншого** — *I’d rather you **didn’t*** (не *don’t*), *I’d rather she **came** earlier* (не *comes*).',
          },
        },
      ],
    },
    {
      id: 'politeness-ladder',
      title: { en: 'The politeness ladder: matching register to the moment', uk: 'Драбина ввічливості: реєстр під момент' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Put the request forms in order and you get a **politeness ladder**, from the bare **imperative** at the bottom up to the most **indirect** form at the top: *Open the door.* → *Can you…?* → *Could you…?* → *Would you mind…?* → *I was wondering if you could…?* The higher you climb, the more distant — and polite. **Softeners** add another notch: *please*, *just*, *possibly*, *when you get a chance*, *a quick*. ***Could you possibly** take a **quick** look **when you get a chance**?*',
            uk: 'Розставте форми прохань по порядку — і отримаєте **драбину ввічливості**, від голого **імператива** внизу до найбільш **непрямої** форми вгорі: *Open the door.* → *Can you…?* → *Could you…?* → *Would you mind…?* → *I was wondering if you could…?* Що вище лізете, то віддаленіше — і ввічливіше. **Помʼякшувачі** додають ще щабель: *please*, *just*, *possibly*, *when you get a chance*, *a quick*. ***Could you possibly** take a **quick** look **when you get a chance**?*',
          },
        },
        {
          kind: 'figure',
          fig: 'politeness-ladder',
          caption: {
            en: 'The politeness ladder: imperative (direct) → Can you…? → Could you…? → Would you mind + -ing? → I was wondering if you could…? More distant / hypothetical = more polite.',
            uk: 'Драбина ввічливості: імператив (прямо) → Can you…? → Could you…? → Would you mind + -ing? → I was wondering if you could…? Віддаленіше / гіпотетичніше = ввічливіше.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: 'Match the rung to the relationship', uk: 'Підберіть щабель під стосунки' },
          md: {
            en: 'Direction sets the register. Down to someone you manage, or in your own runbook, a plain imperative or *Can you…?* is clear and fine (*Bump the version and redeploy*). Across to a peer or up to a senior, step back: *Could you…?*, *Would you mind…?*, *When you get a chance, could you…?* Over-polishing a tiny ask can sound stiff, and under-polishing a big one sounds blunt — match the height of the request to its size and to who you’re asking.',
            uk: 'Напрямок задає реєстр. Донизу до того, ким керуєте, чи у власному runbook голий імператив або *Can you…?* зрозумілі й доречні (*Bump the version and redeploy*). Убік до колеги чи вгору до старшого — відступіть: *Could you…?*, *Would you mind…?*, *When you get a chance, could you…?* Перестаратися з дрібним проханням — звучить сухо, недостаратися з великим — різко; підбирайте висоту прохання під його розмір і під того, кого просите.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Ask others to act: Can you…? (casual) · Could you…? (polite default) · Would you…? / Would you mind…? (very polite). Ask permission for yourself: Can/Could/May I…? (may = formal).',
      uk: 'Просите інших діяти: Can you…? (невимушено) · Could you…? (ввічливий дефолт) · Would you…? / Would you mind…? (дуже ввічливо). Дозвіл для себе: Can/Could/May I…? (may = формально).',
    },
    {
      en: 'Would you mind takes the -ing form, and you AGREE with a negative: “No, not at all / Of course not” = I’ll do it. “Yes” means yes, I do mind (a refusal).',
      uk: 'Would you mind бере форму -ing, а ПОГОДЖУЄТЕСЬ через заперечення: «No, not at all / Of course not» = зроблю. «Yes» означає так, я проти (відмова).',
    },
    {
      en: 'Offer / suggest: Shall I…? (I do it for you) · Shall we…? (together). In US English prefer Should I…?, Want me to…?, Can I…?, Let me…, I’ll…',
      uk: 'Пропозиція: Shall I…? (я роблю для вас) · Shall we…? (разом). В US English краще Should I…?, Want me to…?, Can I…?, Let me…, I’ll…',
    },
    {
      en: 'Preferences: would rather + bare infinitive (+ than); would prefer + to-infinitive; prefer X to Y. Pair rather … than, but prefer … to.',
      uk: 'Уподобання: would rather + bare infinitive (+ than); would prefer + to-infinitive; prefer X to Y. Пара rather … than, але prefer … to.',
    },
    {
      en: 'To steer someone else: would rather + subject + PAST tense (I’d rather you didn’t) — past form, present/future meaning; a soft, indirect request.',
      uk: 'Щоб скерувати іншого: would rather + subject + МИНУЛИЙ час (I’d rather you didn’t) — минула форма, теперішнє/майбутнє значення; мʼяке, непряме прохання.',
    },
    {
      en: 'Politeness = distance: the more hypothetical the form (can → could → would → I was wondering if…), the politer. Match the rung to who you’re asking.',
      uk: 'Ввічливість = дистанція: що гіпотетичніша форма (can → could → would → I was wondering if…), то ввічливіше. Підбирайте щабель під того, кого просите.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“Would you mind to open…”', uk: '«Would you mind to open…»' },
      body: {
        en: 'mind takes the -ing form: Would you mind opening the window? Not to open, not open.',
        uk: 'mind бере форму -ing: Would you mind opening the window? Не to open, не open.',
      },
    },
    {
      title: { en: 'Answering “Would you mind…?” with “Yes” to agree', uk: 'Відповідь «Yes» на «Would you mind…?», щоб погодитися' },
      body: {
        en: 'Yes = yes, I DO mind (a refusal). To agree, use a negative: No, not at all / Of course not. Same for Do you mind if I…? → No, go ahead.',
        uk: 'Yes = так, я ПРОТИ (відмова). Щоб погодитися — заперечення: No, not at all / Of course not. Так само Do you mind if I…? → No, go ahead.',
      },
    },
    {
      title: { en: '“I’d rather to stay”', uk: '«I’d rather to stay»' },
      body: {
        en: 'would rather takes the bare infinitive: I’d rather stay. No to. (would prefer is the one that takes to: I’d prefer to stay.)',
        uk: 'would rather бере bare infinitive: I’d rather stay. Без to. (Саме would prefer бере to: I’d prefer to stay.)',
      },
    },
    {
      title: { en: '“I prefer tea than coffee”', uk: '«I prefer tea than coffee»' },
      body: {
        en: 'prefer compares with to: I prefer tea to coffee. than goes with would rather: I’d rather have tea than coffee.',
        uk: 'prefer порівнює через to: I prefer tea to coffee. than іде з would rather: I’d rather have tea than coffee.',
      },
    },
    {
      title: { en: '“I’d rather you don’t”', uk: '«I’d rather you don’t»' },
      body: {
        en: 'For someone else, would rather takes the past tense: I’d rather you didn’t. The past form carries a present/future meaning.',
        uk: 'Для когось іншого would rather бере минулий час: I’d rather you didn’t. Минула форма несе теперішнє/майбутнє значення.',
      },
    },
    {
      title: { en: 'A bare imperative where a request is expected', uk: 'Голий імператив, де очікують прохання' },
      body: {
        en: 'To a peer or senior, “Send me the file.” can sound curt. Soften it: Could you send me the file? UA imperatives feel neutral; direct English ones often don’t.',
        uk: 'До колеги чи старшого «Send me the file.» може звучати різко. Помʼякшіть: Could you send me the file? Українські імперативи звучать нейтрально; прямі англійські — часто ні.',
      },
    },
    {
      title: { en: '“Could you helping…” / “Can you to help…”', uk: '«Could you helping…» / «Can you to help…»' },
      body: {
        en: 'Requests take the bare infinitive: Could you help…? / Can you send…? No -ing (that’s for mind), no to.',
        uk: 'Прохання беруть bare infinitive: Could you help…? / Can you send…? Без -ing (це для mind), без to.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-requests-politeness-1',
      kind: 'gap',
      sentence: '___ you help me move this table? I can’t lift it alone.',
      answers: ['could', 'would', 'can', 'will'],
      hint: { en: 'ask a colleague to act', uk: 'попросіть колегу діяти' },
      explain: {
        en: 'Could / Would you…? are polite; Can you…? is casual. All ask the other person to act.',
        uk: 'Could / Would you…? — ввічливо; Can you…? — невимушено. Усі просять іншого діяти.',
      },
      level: 'b1',
      tags: ['modals', 'requests', 'politeness'],
    },
    {
      id: 'ex-requests-politeness-2',
      kind: 'mcq',
      prompt: {
        en: 'Choose the correct request:',
        uk: 'Оберіть правильне прохання:',
      },
      options: ['Would you mind to open the window?', 'Would you mind opening the window?', 'Would you mind open the window?'],
      correct: 1,
      explain: {
        en: 'mind takes the -ing form: Would you mind opening…?',
        uk: 'mind бере форму -ing: Would you mind opening…?',
      },
      level: 'b1',
      tags: ['modals', 'requests', 'form'],
    },
    {
      id: 'ex-requests-politeness-3',
      kind: 'mcq',
      prompt: {
        en: '“Would you mind resending the invite?” You’re happy to do it. Best reply:',
        uk: '«Would you mind resending the invite?» Ви радо це зробите. Найкраща відповідь:',
      },
      options: ['Yes, of course.', 'No, not at all.', 'Yes, I mind.'],
      correct: 1,
      explain: {
        en: 'mind = object to, so agreeing is a negative: No, not at all (= I don’t mind). “Yes” logically means yes, I do mind.',
        uk: 'mind = заперечувати, тож згода — це заперечення: No, not at all (= я не проти). «Yes» логічно означає так, я проти.',
      },
      level: 'b1',
      tags: ['modals', 'requests', 'register'],
    },
    {
      id: 'ex-requests-politeness-4',
      kind: 'gap',
      sentence: '___ I borrow your charger for a minute? Mine’s dead.',
      answers: ['could', 'can', 'may'],
      hint: { en: 'ask permission for yourself', uk: 'попросіть дозволу для себе' },
      explain: {
        en: 'Permission for yourself = Can/Could/May I…? (may is the most formal).',
        uk: 'Дозвіл для себе = Can/Could/May I…? (may — найформальніше).',
      },
      level: 'b1',
      tags: ['modals', 'requests', 'permission'],
    },
    {
      id: 'ex-requests-politeness-5',
      kind: 'mcq',
      prompt: {
        en: 'A colleague is struggling with a heavy box. Offer to help (British English):',
        uk: 'Колега мучиться з важкою коробкою. Запропонуйте допомогу (британська англійська):',
      },
      options: ['Shall I carry that for you?', 'Do I carry that for you?', 'Will I carry that for you?'],
      correct: 0,
      explain: {
        en: 'An offer to do it for someone = Shall I…? (BrE). In US English: Can I / Let me / Want me to…?',
        uk: 'Пропозиція зробити для когось = Shall I…? (BrE). В US English: Can I / Let me / Want me to…?',
      },
      level: 'b1',
      tags: ['modals', 'offers'],
    },
    {
      id: 'ex-requests-politeness-6',
      kind: 'gap',
      sentence: '___ we grab lunch together after the standup?',
      answers: ['shall', 'should', 'can'],
      hint: { en: 'suggest doing it together', uk: 'запропонуйте зробити разом' },
      explain: {
        en: 'A suggestion to do something together = Shall we…? (BrE) / Should we…? (US).',
        uk: 'Пропозиція зробити разом = Shall we…? (BrE) / Should we…? (US).',
      },
      level: 'b1',
      tags: ['modals', 'offers', 'suggestions'],
    },
    {
      id: 'ex-requests-politeness-7',
      kind: 'mcq',
      prompt: {
        en: 'Which offer sounds most typically American?',
        uk: 'Яка пропозиція звучить найтиповіше по-американськи?',
      },
      options: ['Shall I get you a coffee?', 'Can I get you a coffee?', 'Ought I to get you a coffee?'],
      correct: 1,
      explain: {
        en: 'US English favors Can I…? / Want me to…? / Let me… over Shall I…?, which sounds British or formal.',
        uk: 'US English віддає перевагу Can I…? / Want me to…? / Let me… над Shall I…?, що звучить по-британськи чи формально.',
      },
      level: 'b1',
      tags: ['modals', 'offers', 'register'],
    },
    {
      id: 'ex-requests-politeness-8',
      kind: 'gap',
      sentence: 'I’m exhausted — I’d rather ___ home tonight than go out.',
      answers: ['stay'],
      hint: { en: 'would rather + which form?', uk: 'would rather + яка форма?' },
      explain: {
        en: 'would rather takes the bare infinitive: I’d rather stay. No to.',
        uk: 'would rather бере bare infinitive: I’d rather stay. Без to.',
      },
      level: 'b1',
      tags: ['modals', 'preference', 'form'],
    },
    {
      id: 'ex-requests-politeness-9',
      kind: 'mcq',
      prompt: {
        en: 'Choose the correct sentence:',
        uk: 'Оберіть правильне речення:',
      },
      options: ['I’d rather to work from home.', 'I’d rather work from home.', 'I’d rather working from home.'],
      correct: 1,
      explain: {
        en: 'would rather + bare infinitive: I’d rather work. (would prefer takes to: I’d prefer to work.)',
        uk: 'would rather + bare infinitive: I’d rather work. (would prefer бере to: I’d prefer to work.)',
      },
      level: 'b1',
      tags: ['modals', 'preference', 'form'],
    },
    {
      id: 'ex-requests-politeness-10',
      kind: 'gap',
      sentence: 'I prefer tea ___ coffee first thing in the morning.',
      answers: ['to'],
      hint: { en: 'prefer X ___ Y', uk: 'prefer X ___ Y' },
      explain: {
        en: 'prefer compares with to: prefer tea to coffee. (than goes with would rather.)',
        uk: 'prefer порівнює через to: prefer tea to coffee. (than іде з would rather.)',
      },
      level: 'b1',
      tags: ['modals', 'preference'],
    },
    {
      id: 'ex-requests-politeness-11',
      kind: 'mcq',
      prompt: {
        en: 'Complete: “I’d rather take the train ___ drive in this weather.”',
        uk: 'Завершіть: «I’d rather take the train ___ drive in this weather.»',
      },
      options: ['than', 'to', 'that'],
      correct: 0,
      explain: {
        en: 'would rather compares with than: rather take the train than drive.',
        uk: 'would rather порівнює через than: rather take the train than drive.',
      },
      level: 'b1',
      tags: ['modals', 'preference', 'form'],
    },
    {
      id: 'ex-requests-politeness-12',
      kind: 'mcq',
      prompt: {
        en: 'You want a teammate to stop pushing straight to main. Say it politely:',
        uk: 'Ви хочете, щоб колега перестав пушити прямо в main. Скажіть це ввічливо:',
      },
      options: ['I’d rather you don’t push to main.', 'I’d rather you didn’t push to main.', 'I’d rather you not pushing to main.'],
      correct: 1,
      explain: {
        en: 'would rather + subject + PAST tense: I’d rather you didn’t. Past form, present/future meaning.',
        uk: 'would rather + subject + МИНУЛИЙ час: I’d rather you didn’t. Минула форма, теперішнє/майбутнє значення.',
      },
      level: 'b1',
      tags: ['modals', 'preference', 'politeness'],
    },
    {
      id: 'ex-requests-politeness-13',
      kind: 'gap',
      sentence: 'Instead of “Send me the report”, ask politely: ___ you send me the report?',
      answers: ['could', 'would', 'can', 'will'],
      hint: { en: 'soften the imperative', uk: 'помʼякшіть імператив' },
      explain: {
        en: 'Turn a bare imperative into a request: Could / Would you…? (polite) or Can you…? (casual).',
        uk: 'Перетворіть голий імператив на прохання: Could / Would you…? (ввічливо) або Can you…? (невимушено).',
      },
      level: 'b1',
      tags: ['modals', 'requests', 'politeness'],
    },
    {
      id: 'ex-requests-politeness-14',
      kind: 'mcq',
      prompt: {
        en: '“Do you mind if I open the window?” A polite way to agree is:',
        uk: '«Do you mind if I open the window?» Ввічливий спосіб погодитися:',
      },
      options: ['No, go ahead.', 'Yes, please don’t.', 'Yes, I do.'],
      correct: 0,
      explain: {
        en: 'mind = object to, so you agree with a negative: No, go ahead (= I don’t mind).',
        uk: 'mind = заперечувати, тож погоджуєтесь через заперечення: No, go ahead (= я не проти).',
      },
      level: 'b1',
      tags: ['modals', 'requests', 'register'],
    },
    {
      id: 'ex-requests-politeness-15',
      kind: 'gap',
      sentence: 'I was ___ if you could take a quick look at my PR when you get a chance.',
      answers: ['wondering'],
      hint: { en: 'the most polite, tentative opener', uk: 'найввічливіший, обережний зачин' },
      explain: {
        en: '“I was wondering if you could…” is a very polite, indirect request — the top of the ladder.',
        uk: '«I was wondering if you could…» — дуже ввічливе, непряме прохання — вершина драбини.',
      },
      level: 'b1',
      tags: ['modals', 'requests', 'politeness'],
    },
    {
      id: 'ex-requests-politeness-16',
      kind: 'mcq',
      prompt: {
        en: 'Which is the MOST polite / most indirect request?',
        uk: 'Яке прохання НАЙввічливіше / найбільш непряме?',
      },
      options: ['Open the door.', 'Can you open the door?', 'I was wondering if you could open the door.'],
      correct: 2,
      explain: {
        en: 'The more distant / hypothetical the form, the more polite — the imperative is the most direct.',
        uk: 'Що віддаленіша / гіпотетичніша форма, то ввічливіше — імператив найпряміший.',
      },
      level: 'b1',
      tags: ['modals', 'requests', 'politeness'],
    },
  ],
  seeAlso: ['m17-modal-system', 'm18-ability-permission', 'm20-advice-criticism', 'm21-deduction-probability'],
  sources: [
    {
      title: 'Cambridge Dictionary — Requests',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/requests',
    },
    {
      title: 'Cambridge Dictionary — Would rather, would sooner',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/would-rather-would-sooner',
    },
    {
      title: 'Cambridge Dictionary — Prefer',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/prefer',
    },
    {
      title: 'British Council LearnEnglish — Offers, suggestions and requests (shall, will, would)',
      url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modals',
    },
  ],
};
