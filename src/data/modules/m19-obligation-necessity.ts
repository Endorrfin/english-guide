import type { Module } from '../types';

/*
 * M19 · Obligation & necessity — Section III ★ Modal Verbs (S2). Third module of the flagship.
 * Authored EN first, UA second; grammar terms stay English in both languages; examples are
 * US English. Facts verified against Cambridge Dictionary grammar (must; have to / have got to),
 * British Council LearnEnglish (Modals: permission and obligation) and Test-English
 * (needn't / didn't need to / needn't have) — see `sources`.
 * Two spines: the SOURCE of obligation (must = inside, have to = outside) and the NEGATION cliff
 * (mustn't = ban, don't have to = optional).
 */
export const m19: Module = {
  id: 'm19-obligation-necessity',
  num: 19,
  section: 's3-modal-verbs',
  order: 3,
  level: 'b1',
  title: { en: 'Obligation & necessity', uk: 'Обовʼязок і необхідність' },
  tagline: {
    en: 'must and have to both mean “obligation” — but one comes from inside you and one from the world. And in the negative they split into opposites: a ban vs a free choice.',
    uk: 'must і have to обидва означають «обовʼязок» — але один іде зсередини вас, а другий від світу. А в запереченні вони розходяться в протилежності: заборона проти вільного вибору.',
  },
  readMins: 19,
  mentalModel: {
    en: 'Obligation has two questions. WHO says so? — the speaker (must) or the outside world (have to / need to). And in the negative, WHAT is denied? — the action (mustn’t = banned) or the necessity (don’t have to = optional). Answer both and the right form is forced.',
    uk: 'Обовʼязок має два питання. ХТО так каже? — мовець (must) чи зовнішній світ (have to / need to). І в запереченні — ЩО заперечується? — дія (mustn’t = заборонено) чи необхідність (don’t have to = опційно). Дайте відповідь на обидва — і правильна форма зʼявиться сама.',
  },
  topics: [
    {
      id: 'must-vs-have-to',
      title: { en: 'must vs have to: where the obligation comes from', uk: 'must проти have to: звідки береться обовʼязок' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Both *must* and *have to* say something is necessary — the difference is **who is behind the obligation**. *must* carries the **speaker’s own** authority: a resolution, a strong personal need, or a written rule the writer is imposing (*I **must** back this up before I forget*; a sign: *Visitors **must** sign in*). *have to* points **outward** — to rules, laws, circumstances, other people (*I **have to** wear a badge* — the company says so; *We **have to** change the tire* — the situation forces it). The meaning overlaps, but the flavor is inside vs outside.',
            uk: 'І *must*, і *have to* кажуть, що щось необхідно — різниця в тому, **хто стоїть за обовʼязком**. *must* несе **власний** авторитет мовця: рішення, сильну особисту потребу чи писане правило, яке накладає автор (*I **must** back this up before I forget*; напис: *Visitors **must** sign in*). *have to* вказує **назовні** — на правила, закони, обставини, інших людей (*I **have to** wear a badge* — так каже компанія; *We **have to** change the tire* — ситуація змушує). Значення перетинаються, але відтінок — зсередини проти ззовні.',
          },
        },
        {
          kind: 'figure',
          fig: 'obligation-source',
          caption: {
            en: 'Two dials for one idea. Left: the SOURCE — must (inside the speaker) vs have to (outside). Right: the NEGATION cliff — mustn’t bans the action, don’t have to removes the necessity.',
            uk: 'Два регулятори для однієї ідеї. Ліворуч: ДЖЕРЕЛО — must (усередині мовця) проти have to (ззовні). Праворуч: обрив ЗАПЕРЕЧЕННЯ — mustn’t забороняє дію, don’t have to знімає необхідність.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'must (from inside)', uk: 'must (зсередини)' },
          b: { en: 'have to (from outside)', uk: 'have to (ззовні)' },
          rows: [
            [
              { en: 'Source of the obligation', uk: 'Джерело обовʼязку' },
              { en: 'the speaker: I insist / I resolve', uk: 'мовець: я наполягаю / я вирішив' },
              { en: 'rules, law, other people, circumstances', uk: 'правила, закон, інші люди, обставини' },
            ],
            [
              { en: 'Typical use', uk: 'Типове вживання' },
              { en: 'personal resolve · written notices', uk: 'особисте рішення · писані оголошення' },
              { en: 'everyday external obligation', uk: 'повсякденний зовнішній обовʼязок' },
            ],
            [
              { en: 'Third person', uk: 'Третя особа' },
              { en: 'she must (no -s)', uk: 'she must (без -s)' },
              { en: 'she **has to**', uk: 'she **has to**' },
            ],
            [
              { en: 'Past', uk: 'Минуле' },
              { en: '— borrows **had to**', uk: '— позичає **had to**' },
              { en: '**had to**', uk: '**had to**' },
            ],
            [
              { en: 'US-English frequency', uk: 'Частотність у US English' },
              { en: 'strong / formal / written', uk: 'сильне / формальне / писане' },
              { en: 'the everyday default', uk: 'повсякденний дефолт' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: 'What Americans actually say for obligation', uk: 'Що американці справді кажуть про обовʼязок' },
          md: {
            en: 'In everyday US English, *have to* and *need to* carry most obligation; plain *must* sounds strong, formal, or like written policy — great on a sign, a bit intense in casual speech (*You must send me the file* can read as an order). You’ll also hear *have got to* and its reduction *gotta* (*I’ve **got to** run* / *I **gotta** run*) — informal, mostly present tense. Understand *gotta*, but write the full forms.',
            uk: 'У повсякденній американській *have to* і *need to* несуть більшість обовʼязку; голе *must* звучить сильно, формально чи як писана політика — чудово на табличці, трохи різко в невимушеній мові (*You must send me the file* може прозвучати як наказ). Ви також почуєте *have got to* і його редукцію *gotta* (*I’ve **got to** run* / *I **gotta** run*) — неформально, переважно теперішній час. Розумійте *gotta*, але пишіть повні форми.',
          },
        },
      ],
    },
    {
      id: 'need-to-neednt',
      title: { en: 'need to & needn’t: necessity and its absence', uk: 'need to і needn’t: необхідність та її відсутність' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*need* is the sneaky one: it lives a **double life**. As an ordinary verb it is *need to* — it takes *-s*, *do*, and past tense like any verb: *She **needs to** approve it*, *Do you **need to** stay?*, *I **needed to** rest.* As a **semi-modal** it is *needn’t* — bare infinitive, no *-s*, negative and questions without *do*: *You **needn’t** wait.* In the affirmative present, English almost always uses *need to*; *needn’t* shows up mainly in the negative, as a slightly more formal twin of *don’t have to*.',
            uk: '*need* — підступне: воно живе **подвійним життям**. Як звичайне дієслово це *need to* — бере *-s*, *do* і минулий час, як будь-яке дієслово: *She **needs to** approve it*, *Do you **need to** stay?*, *I **needed to** rest.* Як **semi-modal** це *needn’t* — bare infinitive, без *-s*, заперечення і питання без *do*: *You **needn’t** wait.* У стверджувальному теперішньому англійська майже завжди вживає *need to*; *needn’t* зʼявляється переважно в запереченні, як трохи формальніший двійник *don’t have to*.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'The absence of necessity has a family of forms that mean the same in the present: *don’t have to = don’t need to = needn’t* — the thing is **optional**. *You **don’t have to** stay late. You **don’t need to** stay late. You **needn’t** stay late.* All three say: staying is your choice, no obligation. Keep this cluster separate from **prohibition** (next topic): here nothing is forbidden — it is simply not required.',
            uk: 'Відсутність необхідності має родину форм, які в теперішньому означають те саме: *don’t have to = don’t need to = needn’t* — річ **опційна**. *You **don’t have to** stay late. You **don’t need to** stay late. You **needn’t** stay late.* Усі три кажуть: лишатися — ваш вибір, обовʼязку немає. Тримайте цей кластер окремо від **заборони** (наступна тема): тут нічого не заборонено — це просто не вимагається.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'needn’t have done ≠ didn’t need to do', uk: 'needn’t have done ≠ didn’t need to do' },
          md: {
            en: 'This pair fools advanced learners. **needn’t have + V3** = you **did** it, and it turned out unnecessary (a small regret): *You **needn’t have brought** dessert* — you brought it, we didn’t need it. **didn’t need to + V1** = there was **no obligation** in the first place — and it often implies you **didn’t** do it: *I **didn’t need to bring** dessert, so I saved my money.* One reports a wasted action; the other reports an absent requirement.',
            uk: 'Ця пара дурить навіть просунутих. **needn’t have + V3** = ви це **зробили**, і виявилось зайвим (легкий жаль): *You **needn’t have brought** dessert* — ви принесли, а воно не було потрібне. **didn’t need to + V1** = обовʼязку **не було** від початку — і часто мається на увазі, що ви цього **не робили**: *I **didn’t need to bring** dessert, so I saved my money.* Одне повідомляє про марну дію; друге — про відсутню вимогу.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The past of “no necessity” — two forms, two different stories.',
            uk: 'Минуле «немає потреби» — дві форми, дві різні історії.',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'Did the action happen?', uk: 'Чи відбулася дія?' },
            { en: 'Meaning', uk: 'Зміст' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'needn’t have + V3', uk: 'needn’t have + V3' },
              { en: 'YES — you did it', uk: 'ТАК — ви це зробили' },
              { en: 'it was unnecessary (mild regret)', uk: 'це було зайве (легкий жаль)' },
              { en: 'You needn’t have rushed.', uk: 'You needn’t have rushed.' },
            ],
            [
              { en: 'didn’t need to + V1', uk: 'didn’t need to + V1' },
              { en: 'often NO — no reason to', uk: 'часто НІ — не було причини' },
              { en: 'there was no obligation', uk: 'обовʼязку не було' },
              { en: 'You didn’t need to rush.', uk: 'You didn’t need to rush.' },
            ],
          ],
        },
      ],
    },
    {
      id: 'mustnt-vs-dont-have-to',
      title: { en: 'The negation cliff: mustn’t ≠ don’t have to', uk: 'Обрив заперечення: mustn’t ≠ don’t have to' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'This is the most expensive modal mistake in the language, so slow down. In the affirmative, *must* and *have to* are near-twins. In the **negative** they become **opposites**, because the *not* attaches to different things. *mustn’t* denies the **action**: doing it is **forbidden** («не можна»). *don’t have to* denies the **necessity**: doing it is **optional** («не обовʼязково»). *You **mustn’t** deploy on Friday* = deploying is banned. *You **don’t have to** deploy on Friday* = deploy if you like, no pressure.',
            uk: 'Це найдорожча помилка з modals у мові, тож пригальмуйте. У стверджувальній формі *must* і *have to* — майже близнюки. У **запереченні** вони стають **протилежностями**, бо *not* чіпляється до різних речей. *mustn’t* заперечує **дію**: робити це **заборонено** («не можна»). *don’t have to* заперечує **необхідність**: робити це **опційно** («не обовʼязково»). *You **mustn’t** deploy on Friday* = деплой заборонено. *You **don’t have to** deploy on Friday* = деплой, якщо хочеш, без тиску.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'mustn’t = prohibition', uk: 'mustn’t = заборона' },
          b: { en: 'don’t have to = no necessity', uk: 'don’t have to = немає потреби' },
          rows: [
            [
              { en: 'What *not* denies', uk: 'Що заперечує *not*' },
              { en: 'the ACTION — doing it is wrong', uk: 'саму ДІЮ — робити це не можна' },
              { en: 'the NECESSITY — doing it is optional', uk: 'НЕОБХІДНІСТЬ — робити це не обовʼязково' },
            ],
            [
              { en: 'Ukrainian', uk: 'Українською' },
              { en: '«не можна / заборонено»', uk: '«не можна / заборонено»' },
              { en: '«не обовʼязково / можна не»', uk: '«не обовʼязково / можна не»' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'You mustn’t merge without review.', uk: 'You mustn’t merge without review.' },
              { en: 'You don’t have to review it today.', uk: 'You don’t have to review it today.' },
            ],
            [
              { en: 'If you obey it', uk: 'Якщо послухатись' },
              { en: 'you do NOT do it', uk: 'ви НЕ робите цього' },
              { en: 'you choose freely', uk: 'ви вирішуєте самі' },
            ],
          ],
        },
        {
          kind: 'table',
          caption: {
            en: 'The negative-obligation family, sorted by what the *not* actually denies.',
            uk: 'Родина заперечного обовʼязку, за тим, що насправді заперечує *not*.',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'It denies…', uk: 'Заперечує…' },
            { en: 'Meaning', uk: 'Зміст' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'mustn’t', uk: 'mustn’t' },
              { en: 'the action', uk: 'дію' },
              { en: 'заборонено', uk: 'заборонено' },
              { en: 'You mustn’t log the password.', uk: 'You mustn’t log the password.' },
            ],
            [
              { en: 'can’t', uk: 'can’t' },
              { en: 'permission / possibility', uk: 'дозвіл / можливість' },
              { en: 'не дозволено / неможливо', uk: 'не дозволено / неможливо' },
              { en: 'You can’t park here.', uk: 'You can’t park here.' },
            ],
            [
              { en: 'don’t have to / don’t need to', uk: 'don’t have to / don’t need to' },
              { en: 'the necessity', uk: 'необхідність' },
              { en: 'не обовʼязково', uk: 'не обовʼязково' },
              { en: 'You don’t have to attend.', uk: 'You don’t have to attend.' },
            ],
            [
              { en: 'needn’t', uk: 'needn’t' },
              { en: 'the necessity (formal twin)', uk: 'необхідність (формальний двійник)' },
              { en: 'не обовʼязково', uk: 'не обовʼязково' },
              { en: 'You needn’t reply tonight.', uk: 'You needn’t reply tonight.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'security',
          title: { en: 'Reverse this and you reverse a policy', uk: 'Переплутайте це — і перевернете політику' },
          md: {
            en: 'A code review that says *You don’t have to encrypt this field* when you meant *You **mustn’t** leave this field unencrypted* ships a vulnerability. In instructions, rules, and policies, the *mustn’t* / *don’t have to* choice is not a nuance — it flips permission into prohibition. When it matters, read your negative back in Ukrainian: does it say «не можна» or «не обовʼязково»? Pick the form that matches.',
            uk: 'Код-рев’ю, що каже *You don’t have to encrypt this field*, коли ви мали на увазі *You **mustn’t** leave this field unencrypted*, відвантажує вразливість. В інструкціях, правилах і політиках вибір *mustn’t* / *don’t have to* — не нюанс: він перемикає дозвіл на заборону. Коли це важливо, перечитайте своє заперечення українською: воно каже «не можна» чи «не обовʼязково»? Оберіть форму, що збігається.',
          },
        },
      ],
    },
    {
      id: 'past-obligation',
      title: { en: 'The past: had to, and the must-have trap', uk: 'Минуле: had to і пастка must-have' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*must* has **no past tense** for obligation. Yesterday’s necessity — whatever its source — is **had to**: *I **had to** restart the cluster at 3 a.m.* The future is *will have to* (or *must* when the rule is already set now): *If it fails again, we’**ll have to** roll back.* So the whole obligation idea leans on *have to* the moment you step out of the plain present.',
            uk: '*must* **не має минулого часу** для обовʼязку. Учорашня необхідність — хоч би яке її джерело — це **had to**: *I **had to** restart the cluster at 3 a.m.* Майбутнє — *will have to* (або *must*, коли правило вже чинне зараз): *If it fails again, we’**ll have to** roll back.* Тож уся ідея обовʼязку спирається на *have to*, щойно ви виходите з простого теперішнього.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Now the trap. The form *must have + V3* **exists** — but it is **not** past obligation. It is **past deduction**: *Someone **must have restarted** the cluster* = «мабуть, хтось перезапустив» (I conclude it happened), never «мусив перезапустити». Past **duty** = *had to*; past **conclusion** = *must have + V3*. They look related and mean completely different things — the full deduction system is m21, but plant the flag now.',
            uk: 'Тепер пастка. Форма *must have + V3* **існує** — але це **не** минулий обовʼязок. Це **минулий висновок**: *Someone **must have restarted** the cluster* = «мабуть, хтось перезапустив» (роблю висновок, що це сталося), ніколи «мусив перезапустити». Минулий **обовʼязок** = *had to*; минулий **висновок** = *must have + V3*. Вони схожі, а означають геть різне — уся система deduction це m21, але прапорець ставимо вже тут.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'Obligation & necessity across time — the have to / need to family does the heavy lifting.',
            uk: 'Обовʼязок і необхідність у часі — родина have to / need to тягне основне навантаження.',
          },
          head: [
            { en: 'Time', uk: 'Час' },
            { en: 'Obligation', uk: 'Обовʼязок' },
            { en: 'No necessity', uk: 'Немає потреби' },
            { en: 'Prohibition', uk: 'Заборона' },
          ],
          rows: [
            [
              { en: 'Present', uk: 'Теперішнє' },
              { en: 'must · have to · need to', uk: 'must · have to · need to' },
              { en: 'don’t have to · needn’t', uk: 'don’t have to · needn’t' },
              { en: 'mustn’t · can’t', uk: 'mustn’t · can’t' },
            ],
            [
              { en: 'Past', uk: 'Минуле' },
              { en: 'had to · needed to', uk: 'had to · needed to' },
              { en: 'didn’t have to · didn’t need to · needn’t have + V3', uk: 'didn’t have to · didn’t need to · needn’t have + V3' },
              { en: 'couldn’t · wasn’t allowed to', uk: 'couldn’t · wasn’t allowed to' },
            ],
            [
              { en: 'Future', uk: 'Майбутнє' },
              { en: 'will have to · must', uk: 'will have to · must' },
              { en: 'won’t have to', uk: 'won’t have to' },
              { en: 'won’t be allowed to · mustn’t', uk: 'won’t be allowed to · mustn’t' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'had to = past duty · must have = past guess', uk: 'had to = минулий обовʼязок · must have = минулий здогад' },
          md: {
            en: 'Keep the two labels physically apart in your head. *I **had to** call the bank* — an obligation I actually carried out. *I **must have** called the bank* — I don’t remember, but the evidence says I did. Swapping them turns a report of what you were required to do into a guess about what probably happened.',
            uk: 'Тримайте два ярлики фізично окремо в голові. *I **had to** call the bank* — обовʼязок, який я справді виконав. *I **must have** called the bank* — я не памʼятаю, але докази кажуть, що дзвонив. Сплутати їх — перетворити звіт про те, що ви мусили зробити, на здогад про те, що ймовірно сталося.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'must vs have to = the same obligation, different source: must from the speaker (personal resolve, urgent, written notices), have to from outside (rules, law, circumstances, other people).',
      uk: 'must проти have to = той самий обовʼязок, різне джерело: must від мовця (особисте рішення, терміновість, писані оголошення), have to ззовні (правила, закон, обставини, інші люди).',
    },
    {
      en: 'must has no past — yesterday’s obligation is had to; the future is will have to (or must for a rule already set now).',
      uk: 'must не має минулого — учорашній обовʼязок це had to; майбутнє — will have to (або must для правила, вже чинного зараз).',
    },
    {
      en: 'The negation cliff: mustn’t = prohibition (denies the action, «не можна»); don’t have to / don’t need to / needn’t = no necessity (denies the obligation, «не обовʼязково»).',
      uk: 'Обрив заперечення: mustn’t = заборона (заперечує дію, «не можна»); don’t have to / don’t need to / needn’t = немає потреби (заперечує обовʼязок, «не обовʼязково»).',
    },
    {
      en: 'need lives a double life: the ordinary verb need to (takes -s, do, past) and the semi-modal needn’t (bare infinitive, no -s). In the affirmative present, use need to.',
      uk: 'need живе подвійним життям: звичайне дієслово need to (бере -s, do, минуле) і semi-modal needn’t (bare infinitive, без -s). У стверджувальному теперішньому вживайте need to.',
    },
    {
      en: 'needn’t have + V3 = you DID it and it was unnecessary (regret); didn’t need to = there was no obligation (and often you didn’t do it).',
      uk: 'needn’t have + V3 = ви це ЗРОБИЛИ, і воно було зайве (жаль); didn’t need to = обовʼязку не було (і часто ви цього не робили).',
    },
    {
      en: 'must have + V3 is NOT past obligation — it is past deduction («мабуть, зробив»). Past duty is always had to.',
      uk: 'must have + V3 — це НЕ минулий обовʼязок, а минулий висновок («мабуть, зробив»). Минулий обовʼязок — завжди had to.',
    },
  ],
  pitfalls: [
    {
      title: { en: 'mustn’t ≠ «не мусиш»', uk: 'mustn’t ≠ «не мусиш»' },
      body: {
        en: 'The Ukrainian «не мусиш» (no need) is don’t have to / needn’t. mustn’t is a ban: «не можна». Swapping them silently reverses your sentence — the classic, most expensive modal mistake.',
        uk: 'Українське «не мусиш» (немає потреби) — це don’t have to / needn’t. mustn’t — заборона: «не можна». Поміняти їх — тихо перевернути зміст речення; класична, найдорожча помилка з modals.',
      },
    },
    {
      title: { en: '“Yesterday I must call the bank”', uk: '«Yesterday I must call the bank»' },
      body: {
        en: 'must has no past for obligation. Yesterday’s duty is had to: Yesterday I had to call the bank. must never inflects for tense.',
        uk: 'must не має минулого для обовʼязку. Учорашній обовʼязок — had to: Yesterday I had to call the bank. must ніколи не змінюється за часом.',
      },
    },
    {
      title: { en: '“I must have restarted it” meaning past duty', uk: '«I must have restarted it» у значенні минулого обовʼязку' },
      body: {
        en: 'must have + V3 is past DEDUCTION («мабуть, перезапустив»), not «мусив перезапустити». For a past obligation you carried out, use had to.',
        uk: 'must have + V3 — минулий ВИСНОВОК («мабуть, перезапустив»), а не «мусив перезапустити». Для виконаного минулого обовʼязку вживайте had to.',
      },
    },
    {
      title: { en: '“Do I must sign this?” / “she musts”', uk: '«Do I must sign this?» / «she musts»' },
      body: {
        en: 'must is a true modal: no do, no -s. Ask Must I sign this? or use the semi-modal: Do I have to sign this? Third person is she must / she has to — never “musts”.',
        uk: 'must — справжній modal: без do, без -s. Питайте Must I sign this? або через semi-modal: Do I have to sign this? Третя особа — she must / she has to, ніколи «musts».',
      },
    },
    {
      title: { en: 'needn’t have done vs didn’t need to do', uk: 'needn’t have done проти didn’t need to do' },
      body: {
        en: 'needn’t have brought it = you brought it, it was unnecessary. didn’t need to bring it = there was no obligation (you probably didn’t). Different actions, different regrets.',
        uk: 'needn’t have brought it = ви принесли, це було зайве. didn’t need to bring it = обовʼязку не було (ви, певно, і не приносили). Різні дії, різні жалі.',
      },
    },
    {
      title: { en: 'must for plain external rules', uk: 'must для звичайних зовнішніх правил' },
      body: {
        en: 'I must wear a badge at work sounds oddly like a personal vow. For an external company rule, have to is natural: I have to wear a badge at work. Save must for your own resolve or written notices.',
        uk: 'I must wear a badge at work звучить дивно — як особиста обітниця. Для зовнішнього правила компанії природне have to: I have to wear a badge at work. Лишайте must для власного рішення чи писаних оголошень.',
      },
    },
    {
      title: { en: '“must to” / stacking with will', uk: '«must to» / стек із will' },
      body: {
        en: 'Modals take the bare infinitive (must sign, not must to sign) and never stack (✗ will must). Future obligation = will have to.',
        uk: 'Modals беруть bare infinitive (must sign, не must to sign) і не стоять поруч (✗ will must). Майбутній обовʼязок = will have to.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-obligation-necessity-1',
      kind: 'mcq',
      prompt: {
        en: 'Your company requires a security badge. The most natural sentence is:',
        uk: 'Компанія вимагає перепустку. Найприродніше речення:',
      },
      options: ['I must wear a badge at work.', 'I have to wear a badge at work.', 'I must to wear a badge at work.'],
      correct: 1,
      explain: {
        en: 'An external company rule → have to. must here sounds like a personal vow; must to breaks the bare-infinitive rule.',
        uk: 'Зовнішнє правило компанії → have to. must тут звучить як особиста обітниця; must to порушує правило bare infinitive.',
      },
      level: 'b1',
      tags: ['modals', 'obligation'],
    },
    {
      id: 'ex-obligation-necessity-2',
      kind: 'gap',
      sentence: 'I ___ call my dad today — it’s his birthday and I keep forgetting.',
      answers: ['must', 'need to', 'have to'],
      hint: { en: 'an obligation you feel yourself', uk: 'обовʼязок, який ви відчуваєте самі' },
      explain: {
        en: 'A felt, personal obligation is the home turf of must (need to / have to also work).',
        uk: 'Відчутий особистий обовʼязок — рідна територія must (need to / have to теж годяться).',
      },
      level: 'b1',
      tags: ['modals', 'obligation'],
    },
    {
      id: 'ex-obligation-necessity-3',
      kind: 'gap',
      sentence: 'Sorry I’m late — I ___ take my daughter to the dentist.',
      answers: ['had to', 'needed to'],
      hint: { en: 'obligation in the past', uk: 'обовʼязок у минулому' },
      explain: {
        en: 'must has no past form; yesterday’s necessity is had to (or needed to).',
        uk: 'must не має минулої форми; учорашня необхідність — had to (або needed to).',
      },
      level: 'b1',
      tags: ['modals', 'obligation', 'past'],
    },
    {
      id: 'ex-obligation-necessity-4',
      kind: 'mcq',
      prompt: {
        en: '“You ___ commit secrets to the repo — it’s a hard security rule.”',
        uk: '«You ___ commit secrets to the repo — це жорстке правило безпеки.»',
      },
      options: ["don't have to", "mustn't", "needn't"],
      correct: 1,
      explain: {
        en: 'A ban denies the ACTION → mustn’t. don’t have to / needn’t would only make it optional.',
        uk: 'Заборона заперечує ДІЮ → mustn’t. don’t have to / needn’t зробили б це лише опційним.',
      },
      level: 'b1',
      tags: ['modals', 'prohibition', 'negation'],
    },
    {
      id: 'ex-obligation-necessity-5',
      kind: 'mcq',
      prompt: {
        en: '“Standup is optional on Fridays — you ___ join if you’re heads-down.”',
        uk: '«Standup у пʼятницю опційний — you ___ join, якщо ви зайняті.»',
      },
      options: ["mustn't", "don't have to", "can't"],
      correct: 1,
      explain: {
        en: '“Optional” denies the NECESSITY → don’t have to. mustn’t would ban joining; can’t would deny permission.',
        uk: '«Опційно» заперечує НЕОБХІДНІСТЬ → don’t have to. mustn’t заборонило б приєднуватися; can’t відмовило б у дозволі.',
      },
      level: 'b1',
      tags: ['modals', 'no-necessity', 'negation'],
    },
    {
      id: 'ex-obligation-necessity-6',
      kind: 'gap',
      sentence: 'You ___ worry about the legacy browser — we dropped support last quarter.',
      answers: ["don't have to", "don't need to", "needn't", 'need not', 'do not have to', 'do not need to'],
      hint: { en: 'no necessity', uk: 'немає потреби' },
      explain: {
        en: 'Absence of necessity = don’t have to / don’t need to / needn’t. mustn’t would forbid worrying.',
        uk: 'Відсутність потреби = don’t have to / don’t need to / needn’t. mustn’t заборонило б хвилюватися.',
      },
      level: 'b1',
      tags: ['modals', 'no-necessity', 'negation'],
    },
    {
      id: 'ex-obligation-necessity-7',
      kind: 'mcq',
      prompt: {
        en: 'We rewrote the whole module, then found a one-line fix would have done it. We ___ the module.',
        uk: 'Ми переписали весь модуль, а тоді виявили, що вистачило б однорядкового фіксу. We ___ the module.',
      },
      options: ["didn't need to rewrite", "needn't have rewritten", "don't have to rewrite"],
      correct: 1,
      explain: {
        en: 'You DID it and it was unnecessary → needn’t have + V3 (rewritten).',
        uk: 'Ви це ЗРОБИЛИ, і воно було зайве → needn’t have + V3 (rewritten).',
      },
      level: 'b2',
      tags: ['modals', 'no-necessity', 'past'],
    },
    {
      id: 'ex-obligation-necessity-8',
      kind: 'mcq',
      prompt: {
        en: 'The client already had the file, so I ___ it again (and I didn’t).',
        uk: 'У клієнта вже був файл, тож I ___ it again (і я не надсилав).',
      },
      options: ["needn't have sent", "didn't need to send", "mustn't send"],
      correct: 1,
      explain: {
        en: 'No obligation existed and you didn’t act → didn’t need to. needn’t have sent would mean you sent it anyway.',
        uk: 'Обовʼязку не було, і ви не діяли → didn’t need to. needn’t have sent означало б, що ви все одно надіслали.',
      },
      level: 'b2',
      tags: ['modals', 'no-necessity', 'past'],
    },
    {
      id: 'ex-obligation-necessity-9',
      kind: 'gap',
      sentence: 'If we miss this deadline, we ___ explain the slip to the board.',
      answers: ['will have to'],
      hint: { en: 'obligation in the future', uk: 'обовʼязок у майбутньому' },
      explain: {
        en: 'Future obligation = will have to (must has no clean future for a new obligation triggered later).',
        uk: 'Майбутній обовʼязок = will have to (у must немає чистого майбутнього для нового обовʼязку, що виникне пізніше).',
      },
      level: 'b1',
      tags: ['modals', 'obligation', 'future'],
    },
    {
      id: 'ex-obligation-necessity-10',
      kind: 'mcq',
      prompt: {
        en: 'The past of “I must renew my visa” (obligation) is:',
        uk: 'Минуле від «I must renew my visa» (обовʼязок) — це:',
      },
      options: ['I must renewed my visa.', 'I must have renewed my visa.', 'I had to renew my visa.'],
      correct: 2,
      explain: {
        en: 'Past obligation = had to. must have renewed is a deduction («мабуть, поновив»); must never inflects.',
        uk: 'Минулий обовʼязок = had to. must have renewed — висновок («мабуть, поновив»); must не відмінюється.',
      },
      level: 'b1',
      tags: ['modals', 'obligation', 'past'],
    },
    {
      id: 'ex-obligation-necessity-11',
      kind: 'gap',
      sentence: 'I’ve ___ to run — my next meeting just started.',
      answers: ['got'],
      hint: { en: 'informal present obligation', uk: 'неформальний обовʼязок у теперішньому' },
      explain: {
        en: 'have got to = informal have to, mainly present: I’ve got to run.',
        uk: 'have got to = неформальне have to, переважно теперішнє: I’ve got to run.',
      },
      level: 'b2',
      tags: ['modals', 'obligation', 'register'],
    },
    {
      id: 'ex-obligation-necessity-12',
      kind: 'mcq',
      prompt: {
        en: 'The question form of “I have to sign this” is:',
        uk: 'Питальна форма від «I have to sign this» — це:',
      },
      options: ['Do I have to sign this?', 'Have I to sign this?', 'Do I must sign this?'],
      correct: 0,
      explain: {
        en: 'have to takes do-support: Do I have to…? (The true modal must inverts: Must I…?)',
        uk: 'have to бере do-support: Do I have to…? (Справжній modal must інвертується: Must I…?)',
      },
      level: 'b1',
      tags: ['modals', 'obligation', 'form'],
    },
    {
      id: 'ex-obligation-necessity-13',
      kind: 'gap',
      sentence: 'You ___ share your access token with anyone — treat it like a password.',
      answers: ["mustn't", 'must not'],
      hint: { en: 'a firm ban', uk: 'тверда заборона' },
      explain: {
        en: 'A prohibition on the action = mustn’t (must not).',
        uk: 'Заборона дії = mustn’t (must not).',
      },
      level: 'b1',
      tags: ['modals', 'prohibition', 'negation'],
    },
    {
      id: 'ex-obligation-necessity-14',
      kind: 'mcq',
      prompt: {
        en: '«Ти не мусиш відповідати сьогодні» (there’s no need) in English is:',
        uk: '«Ти не мусиш відповідати сьогодні» (немає потреби) англійською — це:',
      },
      options: ["You mustn't answer today.", "You don't have to answer today.", "You can't answer today."],
      correct: 1,
      explain: {
        en: '«не мусиш» = no necessity = don’t have to. mustn’t would forbid answering.',
        uk: '«не мусиш» = немає потреби = don’t have to. mustn’t заборонило б відповідати.',
      },
      level: 'b1',
      tags: ['modals', 'no-necessity', 'negation'],
    },
    {
      id: 'ex-obligation-necessity-15',
      kind: 'gap',
      sentence: 'The venue was already booked, so we ___ to worry about a backup.',
      answers: ["didn't have", "didn't need", 'did not have', 'did not need'],
      hint: { en: 'no obligation existed (past)', uk: 'обовʼязку не було (минуле)' },
      explain: {
        en: 'No past obligation → didn’t have to / didn’t need to. (needn’t have would imply we worried anyway.)',
        uk: 'Немає минулого обовʼязку → didn’t have to / didn’t need to. (needn’t have натякало б, що ми все одно хвилювались.)',
      },
      level: 'b1',
      tags: ['modals', 'no-necessity', 'past'],
    },
    {
      id: 'ex-obligation-necessity-16',
      kind: 'mcq',
      prompt: {
        en: 'You brought your laptop, but we’re only whiteboarding today. Say:',
        uk: 'Ви принесли ноутбук, але сьогодні лише вайтбординг. Скажіть:',
      },
      options: ["You didn't need to bring your laptop.", "You needn't have brought your laptop.", "You mustn't bring your laptop."],
      correct: 1,
      explain: {
        en: 'You DID bring it and it was unnecessary → needn’t have + V3 (brought).',
        uk: 'Ви ПРИНЕСЛИ, і це було зайве → needn’t have + V3 (brought).',
      },
      level: 'b2',
      tags: ['modals', 'no-necessity', 'past'],
    },
  ],
  seeAlso: ['m17-modal-system', 'm18-ability-permission', 'm20-advice-criticism', 'm21-deduction-probability'],
  sources: [
    {
      title: 'Cambridge Dictionary — Must',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/must',
    },
    {
      title: 'Cambridge Dictionary — Have to / have got to',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/have-got-to-have-to',
    },
    {
      title: 'British Council LearnEnglish — Modals: permission and obligation',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation',
    },
    {
      title: 'Test-English — needn’t, don’t need to, didn’t need to, needn’t have',
      url: 'https://test-english.com/explanation/b1-2/neednt-dont-need-to-didnt-need-to-neednt-have/',
    },
  ],
};
