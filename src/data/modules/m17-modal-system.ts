import type { Module } from '../types';

/*
 * M17 · The Modal System — the GOLDEN module (S1), the anchor of Section III ★ Modal Verbs.
 * Authored EN first, UA second; grammar terms stay English in both languages; examples are
 * US English (spelling, register notes). Facts verified against Cambridge Dictionary grammar,
 * Oxford Learner's Dictionaries and Merriam-Webster usage pages — see `sources`.
 */
export const m17: Module = {
  id: 'm17-modal-system',
  num: 17,
  section: 's3-modal-verbs',
  order: 1,
  level: 'b1',
  signature: true,
  title: { en: 'The Modal System', uk: 'Система modals' },
  tagline: {
    en: 'Nine small verbs carry the speaker’s whole attitude: ability, permission, obligation, advice, probability. One system explains them all.',
    uk: 'Девʼять коротких дієслів несуть усю позицію мовця: уміння, дозвіл, обовʼязок, порада, ймовірність. Одна система пояснює їх усі.',
  },
  readMins: 22,
  mentalModel: {
    en: 'A modal never describes the action — it broadcasts the speaker’s stance on it: how possible, permitted, necessary, or certain it is. Choose the FUNCTION you mean, then the TIME — the grid hands you the modal.',
    uk: 'Modal ніколи не описує саму дію — він транслює позицію мовця щодо неї: наскільки це можливо, дозволено, необхідно чи певно. Оберіть ФУНКЦІЮ, яку маєте на увазі, потім ЧАС — і сітка видасть вам modal.',
  },
  topics: [
    {
      id: 'what-modals-are',
      title: { en: 'What modals are & how they behave', uk: 'Що таке modals і як вони поводяться' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Take two sentences: *"She fixes production bugs"* and *"She **can** fix production bugs."* The first reports a fact. The second does something subtler — it adds the speaker’s **judgment** about ability. That judgment layer is called **modality**, and English concentrates it in nine special verbs — the **modal verbs**: **can, could, may, might, must, shall, should, will, would**. With one short word you mark a sentence as an ability, a permission, an obligation, a piece of advice, a guess, or a promise — without changing the main verb at all.',
            uk: 'Порівняйте два речення: *"She fixes production bugs"* і *"She **can** fix production bugs."* Перше повідомляє факт. Друге робить дещо тонше — додає **судження** мовця про здатність. Цей шар судження називається **modality**, і англійська концентрує його в девʼяти особливих дієсловах — **modal verbs**: **can, could, may, might, must, shall, should, will, would**. Одним коротким словом ви позначаєте речення як уміння, дозвіл, обовʼязок, пораду, здогад чи обіцянку — взагалі не змінюючи основне дієслово.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Modals are **grammatically strange on purpose**, and the strangeness is a feature: it is what lets them sit before any verb and stay out of its way. Five behaviors separate a modal from a normal verb — learn these five and half of all modal mistakes disappear.',
            uk: 'Modals **граматично дивні навмисно**, і ця дивність — перевага: саме вона дозволяє їм ставати перед будь-яким дієсловом, не заважаючи йому. Пʼять правил поведінки відрізняють modal від звичайного дієслова — вивчіть ці пʼять, і половина всіх помилок із modals зникне.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The five grammar rules every modal obeys — no exceptions among the nine.',
            uk: 'Пʼять граматичних правил, яким підкоряється кожен modal — без винятків серед девʼяти.',
          },
          head: [
            { en: 'Rule', uk: 'Правило' },
            { en: 'Right', uk: 'Правильно' },
            { en: 'Wrong', uk: 'Неправильно' },
          ],
          rows: [
            [
              { en: 'Bare infinitive after it — never *to*', uk: 'Після нього — bare infinitive, ніколи *to*' },
              { en: 'She must **go**.', uk: 'She must **go**.' },
              { en: '✗ She must **to go**.', uk: '✗ She must **to go**.' },
            ],
            [
              { en: 'No third-person **-s**', uk: 'Немає **-s** у третій особі' },
              { en: 'He **can** swim.', uk: 'He **can** swim.' },
              { en: '✗ He **cans** swim.', uk: '✗ He **cans** swim.' },
            ],
            [
              { en: 'Questions by inversion — no *do*', uk: 'Питання через інверсію — без *do*' },
              { en: '**Can you** help?', uk: '**Can you** help?' },
              { en: '✗ **Do you can** help?', uk: '✗ **Do you can** help?' },
            ],
            [
              { en: 'Negation with *not* — no *do*', uk: 'Заперечення через *not* — без *do*' },
              { en: 'You **should not** worry.', uk: 'You **should not** worry.' },
              { en: '✗ You **don’t should** worry.', uk: '✗ You **don’t should** worry.' },
            ],
            [
              { en: 'One modal at a time — they never stack', uk: 'Один modal за раз — вони не стоять поруч' },
              { en: 'I **will be able to** join.', uk: 'I **will be able to** join.' },
              { en: '✗ I **will can** join.', uk: '✗ I **will can** join.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: {
            en: 'The #1 UA-speaker slip: “must to”, “can to”',
            uk: 'Найчастіший промах україномовних: «must to», «can to»',
          },
          md: {
            en: 'Ukrainian chains verbs with an infinitive that *feels* like it needs **to**: «мушу **зробити**», «можу **допомогти**» → ✗ *I must **to do** it*, ✗ *I can **to help***. English modals take the **bare infinitive**: *I must do it. I can help.* The only lookalikes with *to* are the **semi-modals** — *have to, need to, ought to, be able to* — where *to* belongs to the phrase itself.',
            uk: 'Українська зʼєднує дієслова інфінітивом, який *підсвідомо* тягне за собою **to**: «мушу **зробити**», «можу **допомогти**» → ✗ *I must **to do** it*, ✗ *I can **to help***. Англійські modals беруть **bare infinitive**: *I must do it. I can help.* Єдині схожі форми з *to* — це **semi-modals**: *have to, need to, ought to, be able to*, де *to* — частина самої конструкції.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Those five rules leave holes: a modal has **no past form, no infinitive, no -ing form** — so how do you say *“will be able to”* or *“had to”*? English patches the holes with **semi-modals**: **have to, need to, be able to, ought to, had better**. They mean almost the same as their modal cousins but conjugate like normal verbs — *has to, had to, will have to, don’t have to* — which is exactly why the language keeps both sets. When grammar blocks a modal, a semi-modal steps in.',
            uk: 'Ці пʼять правил лишають дірки: у modal **немає минулої форми, інфінітива і -ing-форми** — то як сказати *«will be able to»* чи *«had to»*? Англійська латає дірки **semi-modals**: **have to, need to, be able to, ought to, had better**. Вони означають майже те саме, що їхні modal-родичі, але відмінюються як звичайні дієслова — *has to, had to, will have to, don’t have to* — саме тому мова тримає обидва набори. Коли граматика блокує modal, у гру входить semi-modal.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'must (a true modal)', uk: 'must (справжній modal)' },
          b: { en: 'have to (a semi-modal)', uk: 'have to (semi-modal)' },
          rows: [
            [
              { en: 'Third person', uk: 'Третя особа' },
              { en: 'she must', uk: 'she must' },
              { en: 'she **has to**', uk: 'she **has to**' },
            ],
            [
              { en: 'Question', uk: 'Питання' },
              { en: '**Must** I sign this?', uk: '**Must** I sign this?' },
              { en: '**Do** I **have to** sign this?', uk: '**Do** I **have to** sign this?' },
            ],
            [
              { en: 'Past', uk: 'Минуле' },
              { en: '— (borrows *had to*)', uk: '— (позичає *had to*)' },
              { en: '**had to**', uk: '**had to**' },
            ],
            [
              { en: 'Future', uk: 'Майбутнє' },
              { en: 'must (rule already set now)', uk: 'must (правило вже чинне зараз)' },
              { en: '**will have to**', uk: '**will have to**' },
            ],
            [
              { en: 'Flavor of the obligation', uk: 'Відтінок обовʼязку' },
              { en: 'from the speaker (I insist / I promised)', uk: 'від мовця (я наполягаю / я пообіцяв)' },
              { en: 'from outside (rules, law, the company)', uk: 'ззовні (правила, закон, компанія)' },
            ],
          ],
        },
      ],
    },
    {
      id: 'the-nine-modals-map',
      title: { en: 'The nine modals — one map', uk: 'Девʼять modals — одна карта' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Textbooks list forty-something “uses” of modals and students drown. There is a better way: the nine modals form **four pairs plus must**, and every pair is connected by ONE idea — **distance**. *Could, might, would, should* are the **distanced** partners of *can, may, will, shall*. Distance shows up in three flavors: distance in **time** (past: *When I was five, I could read*), distance from **reality** (hypothetical: *I could join tomorrow if the demo moves*), and **social** distance (politeness: *Could you review my PR?* — the request stands one polite step back from *Can you*).',
            uk: 'Підручники перелічують десь сорок «уживань» modals, і студенти в них тонуть. Є кращий шлях: девʼять modals утворюють **чотири пари плюс must**, і кожну пару звʼязує ОДНА ідея — **дистанція**. *Could, might, would, should* — **дистанційовані** партнери *can, may, will, shall*. Дистанція буває трьох видів: дистанція в **часі** (минуле: *When I was five, I could read*), дистанція від **реальності** (гіпотетичність: *I could join tomorrow if the demo moves*) і **соціальна** дистанція (ввічливість: *Could you review my PR?* — прохання стоїть на крок далі, ніж *Can you*).',
          },
        },
        {
          kind: 'figure',
          fig: 'modal-map',
          caption: {
            en: 'One picture instead of forty rules: five direct modals, their distanced partners (past · politeness · unreality), must borrowing *had to*, and the semi-modal shelf that fills every grammatical hole.',
            uk: 'Одна картинка замість сорока правил: пʼять прямих modals, їхні дистанційовані пари (минуле · ввічливість · нереальність), must, що позичає *had to*, і полиця semi-modals, яка закриває всі граматичні дірки.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The nine modals — core meaning first, everything else follows from it.',
            uk: 'Девʼять modals — спершу ядрове значення, все решта випливає з нього.',
          },
          head: [
            { en: 'Modal', uk: 'Modal' },
            { en: 'Core meaning', uk: 'Ядрове значення' },
            { en: 'Main functions', uk: 'Головні функції' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: '**can**', uk: '**can**' },
              { en: 'open door — nothing blocks it', uk: 'відчинені двері — ніщо не заважає' },
              { en: 'ability · permission · general possibility', uk: 'уміння · дозвіл · загальна можливість' },
              { en: 'She can read Go code.', uk: 'She can read Go code.' },
            ],
            [
              { en: '**could**', uk: '**could**' },
              { en: 'can, one step away', uk: 'can на крок далі' },
              { en: 'past ability · polite request · maybe', uk: 'минуле вміння · ввічливе прохання · «може»' },
              { en: 'Could you rerun the pipeline?', uk: 'Could you rerun the pipeline?' },
            ],
            [
              { en: '**may**', uk: '**may**' },
              { en: 'formal green light / 50% chance', uk: 'формальне «зелене світло» / шанс 50%' },
              { en: 'formal permission · possibility', uk: 'формальний дозвіл · імовірність' },
              { en: 'The API may return null here.', uk: 'The API may return null here.' },
            ],
            [
              { en: '**might**', uk: '**might**' },
              { en: 'may, one step away', uk: 'may на крок далі' },
              { en: 'weaker possibility · hypotheticals', uk: 'слабша ймовірність · гіпотези' },
              { en: 'We might switch to pnpm.', uk: 'We might switch to pnpm.' },
            ],
            [
              { en: '**must**', uk: '**must**' },
              { en: 'no way around it', uk: 'обійти неможливо' },
              { en: 'strong obligation · confident deduction', uk: 'сильний обовʼязок · упевнений висновок' },
              { en: 'This must be the root cause.', uk: 'This must be the root cause.' },
            ],
            [
              { en: '**shall**', uk: '**shall**' },
              { en: 'formal will (US: offers & law)', uk: 'формальне will (у US: пропозиції і юридичні тексти)' },
              { en: 'offers *Shall I…?* · contracts', uk: 'пропозиції *Shall I…?* · контракти' },
              { en: 'Shall we start the retro?', uk: 'Shall we start the retro?' },
            ],
            [
              { en: '**should**', uk: '**should**' },
              { en: 'the right / expected thing', uk: 'правильне / очікуване' },
              { en: 'advice · expectation', uk: 'порада · очікування' },
              { en: 'You should cache this call.', uk: 'You should cache this call.' },
            ],
            [
              { en: '**will**', uk: '**will**' },
              { en: 'certainty & decisions', uk: 'певність і рішення' },
              { en: 'future · promises · instant decisions', uk: 'майбутнє · обіцянки · миттєві рішення' },
              { en: 'I will fix it before standup.', uk: 'I will fix it before standup.' },
            ],
            [
              { en: '**would**', uk: '**would**' },
              { en: 'will, one step away', uk: 'will на крок далі' },
              { en: 'polite requests · hypotheticals · past habits', uk: 'ввічливі прохання · гіпотези · минулі звички' },
              { en: 'Would you prefer async review?', uk: 'Would you prefer async review?' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: {
            en: 'Memorize one system, not forty uses',
            uk: 'Запамʼятовуйте одну систему, а не сорок уживань',
          },
          md: {
            en: 'Every “new use” you meet is the same three ingredients recombined: a **core meaning** (possibility ↔ necessity), an optional step of **distance** (past / polite / unreal), and a **function** you are performing (asking, allowing, advising, deducing). When a sentence surprises you, ask: which core? how much distance? which function? The answer almost always falls out.',
            uk: 'Кожне «нове вживання» — це ті самі три інгредієнти в новій комбінації: **ядрове значення** (можливість ↔ необхідність), опційний крок **дистанції** (минуле / ввічливе / нереальне) і **функція**, яку ви виконуєте (просите, дозволяєте, радите, робите висновок). Коли речення дивує, спитайте: яке ядро? скільки дистанції? яка функція? Відповідь майже завжди складається сама.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: {
            en: 'Two readings of the same modal: epistemic vs deontic',
            uk: 'Два прочитання одного modal: epistemic проти deontic',
          },
          md: {
            en: 'Linguists split modality in two. **Deontic** = about the world of rules and actions: *You must be at the office by 9* (obligation). **Epistemic** = about the speaker’s reasoning: *He must be at the office — his status is green* (deduction). The SAME modal flips between the readings, and only context decides. This is why m21 (deduction) feels so different from m19 (obligation) while using the same words — keep the two lenses apart and ambiguity stops being scary.',
            uk: 'Лінгвісти ділять modality надвоє. **Deontic** — про світ правил і дій: *You must be at the office by 9* (обовʼязок). **Epistemic** — про міркування мовця: *He must be at the office — his status is green* (висновок). ТОЙ САМИЙ modal перемикається між прочитаннями, і вирішує лише контекст. Саме тому m21 (deduction) відчувається геть інакше, ніж m19 (obligation), хоча слова ті самі — тримайте дві лінзи окремо, і неоднозначність перестане лякати.',
          },
        },
      ],
    },
    {
      id: 'function-x-time-grid',
      title: { en: 'The function × time grid', uk: 'Сітка функція × час' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Here is the practical algorithm this whole section is built on. When you speak, you never start from a modal — you start from an **intention**: *I want to ask… to allow… to insist… to guess…* So make the choice in two moves. **Move one: name the function** — ability, permission, request, offer, advice, obligation, prohibition, no-necessity, possibility, deduction. **Move two: name the time** — past, present, future. The pair points at the modal, and the traps live exactly where the grid is irregular: *must* with no past, affirmative *could* banned for one-time success, *mustn’t* that does NOT mean «не мусиш».',
            uk: 'Ось практичний алгоритм, на якому стоїть увесь цей розділ. Говорячи, ви ніколи не починаєте з modal — ви починаєте з **наміру**: *хочу попросити… дозволити… наполягти… припустити…* Тож обирайте у два ходи. **Хід перший: назвіть функцію** — уміння, дозвіл, прохання, пропозиція, порада, обовʼязок, заборона, відсутність потреби, можливість, висновок. **Хід другий: назвіть час** — минуле, теперішнє, майбутнє. Пара вказує на modal, а пастки живуть саме там, де сітка нерегулярна: *must* без минулого, стверджувальне *could*, заборонене для разового успіху, *mustn’t*, що НЕ означає «не мусиш».',
          },
        },
        {
          kind: 'sim',
          sim: 'modal-navigator',
          caption: {
            en: 'The Modal Navigator: pick a function and a time — get the right modal, an example, and the near-misses.',
            uk: 'Modal Navigator: оберіть функцію і час — отримайте правильний modal, приклад і найближчі пастки.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The pocket version of the grid. The sim above holds the full examples and near-misses for every cell.',
            uk: 'Кишенькова версія сітки. Повні приклади і пастки для кожної клітинки — у симуляторі вище.',
          },
          head: [
            { en: 'Function', uk: 'Функція' },
            { en: 'Past', uk: 'Минуле' },
            { en: 'Present', uk: 'Теперішнє' },
            { en: 'Future', uk: 'Майбутнє' },
          ],
          rows: [
            [
              { en: 'Ability', uk: 'Уміння' },
              { en: 'could · was able to (one success)', uk: 'could · was able to (разовий успіх)' },
              { en: 'can · be able to', uk: 'can · be able to' },
              { en: 'will be able to', uk: 'will be able to' },
            ],
            [
              { en: 'Permission', uk: 'Дозвіл' },
              { en: 'could · was allowed to', uk: 'could · was allowed to' },
              { en: 'can · may (formal)', uk: 'can · may (формально)' },
              { en: 'will be allowed to', uk: 'will be allowed to' },
            ],
            [
              { en: 'Request', uk: 'Прохання' },
              { en: '→ reported speech (m15)', uk: '→ reported speech (m15)' },
              { en: 'could you · would you · can you', uk: 'could you · would you · can you' },
              { en: 'same forms + time word', uk: 'ті самі форми + слово-час' },
            ],
            [
              { en: 'Offer', uk: 'Пропозиція' },
              { en: '→ reported speech (m15)', uk: '→ reported speech (m15)' },
              { en: 'shall I? · I’ll · can I', uk: 'shall I? · I’ll · can I' },
              { en: 'I’ll · shall we · we could', uk: 'I’ll · shall we · we could' },
            ],
            [
              { en: 'Advice', uk: 'Порада' },
              { en: 'should have + V3 (criticism)', uk: 'should have + V3 (критика)' },
              { en: 'should · ought to · had better', uk: 'should · ought to · had better' },
              { en: 'should + time word', uk: 'should + слово-час' },
            ],
            [
              { en: 'Obligation', uk: 'Обовʼязок' },
              { en: 'had to', uk: 'had to' },
              { en: 'must · have to · need to', uk: 'must · have to · need to' },
              { en: 'will have to · must', uk: 'will have to · must' },
            ],
            [
              { en: 'Prohibition', uk: 'Заборона' },
              { en: 'couldn’t · wasn’t allowed to', uk: 'couldn’t · wasn’t allowed to' },
              { en: 'mustn’t · can’t', uk: 'mustn’t · can’t' },
              { en: 'won’t be allowed to · mustn’t', uk: 'won’t be allowed to · mustn’t' },
            ],
            [
              { en: 'No necessity', uk: 'Немає потреби' },
              { en: 'didn’t have to · needn’t have + V3', uk: 'didn’t have to · needn’t have + V3' },
              { en: 'don’t have to · needn’t', uk: 'don’t have to · needn’t' },
              { en: 'won’t have to', uk: 'won’t have to' },
            ],
            [
              { en: 'Possibility', uk: 'Можливість' },
              { en: 'might/may/could have + V3', uk: 'might/may/could have + V3' },
              { en: 'might · may · could', uk: 'might · may · could' },
              { en: 'might · may · could + time word', uk: 'might · may · could + слово-час' },
            ],
            [
              { en: 'Deduction', uk: 'Висновок' },
              { en: 'must have + V3 · can’t have + V3', uk: 'must have + V3 · can’t have + V3' },
              { en: 'must be · can’t be', uk: 'must be · can’t be' },
              { en: 'will · should (expectation)', uk: 'will · should (очікування)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: {
            en: 'The past-of-must trap',
            uk: 'Пастка минулого від must',
          },
          md: {
            en: 'For OBLIGATION, *must* simply has no past: yesterday’s necessity is **had to** — *I had to restart the cluster.* The form *must have + V3* exists, but it is **past DEDUCTION**, never past obligation: *Someone must have restarted the cluster* = «мабуть, хтось перезапустив», not «мусив перезапустити». Mixing these two produces sentences that are grammatical, confident — and mean the opposite of what you intended.',
            uk: 'Для ОБОВʼЯЗКУ *must* просто не має минулого: учорашня необхідність — це **had to**: *I had to restart the cluster.* Форма *must have + V3* існує, але це **минулий ВИСНОВОК**, ніколи не минулий обовʼязок: *Someone must have restarted the cluster* = «мабуть, хтось перезапустив», а не «мусив перезапустити». Сплутавши ці дві форми, ви отримаєте речення граматичне, впевнене — і з протилежним до задуманого змістом.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'One machine powers the whole PAST column: the **perfect infinitive** — *modal + have + V3*. It takes the speaker’s judgment and points it backwards. *You **should have told** me* — the right thing did not happen (criticism). *She **must have merged** it* — I conclude it happened (deduction). *We **could have caught** this in review* — the chance existed, unused (missed opportunity). *He **might have missed** the message* — perhaps it happened (past possibility). Same pattern, four meanings — the modal chooses the flavor, *have + V3* only sets the time.',
            uk: 'Усю колонку МИНУЛОГО живить один механізм: **perfect infinitive** — *modal + have + V3*. Він бере судження мовця і розвертає його назад у часі. *You **should have told** me* — правильна дія не відбулася (критика). *She **must have merged** it* — роблю висновок, що це сталося (deduction). *We **could have caught** this in review* — шанс був і не використаний (втрачена можливість). *He **might have missed** the message* — можливо, так і було (минула ймовірність). Той самий шаблон, чотири значення — modal обирає відтінок, а *have + V3* лише задає час.',
          },
        },
      ],
    },
    {
      id: 'negatives-questions',
      title: { en: 'Negatives & questions', uk: 'Заперечення і питання' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Mechanically, negatives and questions are the easy part: **not** attaches straight to the modal (*should not → shouldn’t*), questions **invert** (*Could you…? Must we…?*) — no *do*, ever. Short answers reuse the bare modal: *Can you join? — Yes, I can. / No, I can’t.* The contractions are standard US English: **can’t, won’t** (an old sound change from *woll not*), **mustn’t, shouldn’t, couldn’t, wouldn’t**. Two are special: *shan’t* survives mostly in British English, and *mayn’t* is effectively dead — negate *may* as *may not*, uncontracted.',
            uk: 'Механічно заперечення і питання — легка частина: **not** чіпляється прямо до modal (*should not → shouldn’t*), питання будуються **інверсією** (*Could you…? Must we…?*) — без *do*, ніколи. Короткі відповіді повторюють голий modal: *Can you join? — Yes, I can. / No, I can’t.* Стандартні скорочення US English: **can’t, won’t** (давня звукова зміна від *woll not*), **mustn’t, shouldn’t, couldn’t, wouldn’t**. Два особливі: *shan’t* живе переважно в британській, а *mayn’t* фактично мертве — заперечуйте *may* як *may not*, без скорочення.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'The REAL difficulty is not the form — it is **what exactly the *not* denies**. *You **must not** deploy* denies the deploy: it is banned. *You **don’t have to** deploy* denies the necessity: deploying is optional. English speakers hear these as opposites, while the Ukrainian «не мусиш» pulls you toward the second meaning with the first form. The same scope game plays elsewhere: *can’t* denies possibility (*It can’t be a DNS issue* — impossible), and *may not* can deny either the permission (*you may not enter*) or the fact (*she may not know* — perhaps she doesn’t).',
            uk: 'СПРАВЖНЯ складність не у формі, а в тому, **що саме заперечує *not***. *You **must not** deploy* заперечує сам deploy: він заборонений. *You **don’t have to** deploy* заперечує необхідність: deploy опційний. Для носіїв це протилежності, а українське «не мусиш» тягне вас до другого значення з першою формою. Та сама гра масштабу і в інших парах: *can’t* заперечує можливість (*It can’t be a DNS issue* — неможливо), а *may not* може заперечувати або дозвіл (*you may not enter*), або факт (*she may not know* — можливо, не знає).',
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
              { en: 'Example', uk: 'Приклад' },
              { en: 'You mustn’t commit secrets.', uk: 'You mustn’t commit secrets.' },
              { en: 'You don’t have to attend the demo.', uk: 'You don’t have to attend the demo.' },
            ],
            [
              { en: 'Ukrainian', uk: 'Українською' },
              { en: '«не можна / заборонено»', uk: '«не можна / заборонено»' },
              { en: '«не обовʼязково / можна не»', uk: '«не обовʼязково / можна не»' },
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
            en: 'Negative modals ranked by what they actually say — the translation column is the safety rail.',
            uk: 'Заперечні modals за їхнім реальним змістом — колонка перекладу як запобіжник.',
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
              { en: 'You mustn’t push to main.', uk: 'You mustn’t push to main.' },
            ],
            [
              { en: 'can’t', uk: 'can’t' },
              { en: 'the possibility', uk: 'можливість' },
              { en: 'неможливо / не дозволено / «не може бути»', uk: 'неможливо / не дозволено / «не може бути»' },
              { en: 'It can’t be a quota issue.', uk: 'It can’t be a quota issue.' },
            ],
            [
              { en: 'don’t have to / needn’t', uk: 'don’t have to / needn’t' },
              { en: 'the necessity', uk: 'необхідність' },
              { en: 'не обовʼязково', uk: 'не обовʼязково' },
              { en: 'You don’t have to reply today.', uk: 'You don’t have to reply today.' },
            ],
            [
              { en: 'shouldn’t', uk: 'shouldn’t' },
              { en: 'the advisability', uk: 'доцільність' },
              { en: 'не варто', uk: 'не варто' },
              { en: 'You shouldn’t hardcode the URL.', uk: 'You shouldn’t hardcode the URL.' },
            ],
            [
              { en: 'may not', uk: 'may not' },
              { en: 'permission OR the fact', uk: 'дозвіл АБО факт' },
              { en: 'не дозволено · можливо, ні', uk: 'не дозволено · можливо, ні' },
              { en: 'She may not have access.', uk: 'She may not have access.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'security',
          title: {
            en: 'Politeness is a feature you ship',
            uk: 'Ввічливість — це фіча, яку ви шипите',
          },
          md: {
            en: 'In questions, one step of distance = one step of politeness: *Can you…?* (teammates) → *Could you…? / Would you…?* (default at work) → *Would you mind + V-ing…?* (stakeholders, strangers). Flat imperatives and *Will you…?* read as commands in US office English. And *Must you…?* is not a question at all — it is an annoyed complaint (*Must you ping the whole channel?*). Choosing the modal here is not grammar — it is tone, and people remember tone.',
            uk: 'У питаннях один крок дистанції = один крок ввічливості: *Can you…?* (свої в команді) → *Could you…? / Would you…?* (робочий дефолт) → *Would you mind + V-ing…?* (стейкхолдери, незнайомі). Голий імператив і *Will you…?* в офісній US English звучать як накази. А *Must you…?* — узагалі не питання, це роздратований докір (*Must you ping the whole channel?*). Вибір modal тут — не граматика, а тон, і саме тон люди запамʼятовують.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: {
            en: 'US-English notes for this whole section',
            uk: 'Нотатки про US English для всього розділу',
          },
          md: {
            en: 'This guide teaches **US English**. In practice: **shall** is rare outside offers (*Shall we?*) and legal text — casual American speech prefers *Should I…?* for offers; **mustn’t** sounds bookish in conversation, Americans usually say *can’t* for bans; **have to / need to** beat *must* in everyday obligation; you will HEAR *gotta* (= got to / have to) and *hafta* everywhere — understand them, but write the full forms. British English differs mostly in frequency (*shan’t*, *needn’t*, more *must*), not in the system.',
            uk: 'Цей гайд навчає **US English**. На практиці: **shall** рідкісне поза пропозиціями (*Shall we?*) і юридичними текстами — розмовна американська воліє *Should I…?* для пропозицій; **mustn’t** у розмові звучить книжно, американці зазвичай кажуть *can’t* про заборони; у повсякденному обовʼязку **have to / need to** бʼють *must*; ви всюди ПОЧУЄТЕ *gotta* (= got to / have to) і *hafta* — розумійте їх, але пишіть повні форми. Британська відрізняється переважно частотністю (*shan’t*, *needn’t*, більше *must*), а не системою.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A modal marks the speaker’s stance on the action — possibility ↔ necessity, permission ↔ prohibition — not the action itself.',
      uk: 'Modal позначає позицію мовця щодо дії — можливість ↔ необхідність, дозвіл ↔ заборона — а не саму дію.',
    },
    {
      en: 'Five grammar rules cover all nine modals: bare infinitive, no -s, inversion instead of do, not for negation, never two modals in a row.',
      uk: 'Пʼять граматичних правил покривають усі девʼять modals: bare infinitive, без -s, інверсія замість do, заперечення через not, ніколи два modals поспіль.',
    },
    {
      en: 'Could / might / would / should are can / may / will / shall one step of DISTANCE away — in time (past), in reality (hypothetical), or socially (polite).',
      uk: 'Could / might / would / should — це can / may / will / shall на один крок ДИСТАНЦІЇ далі: у часі (минуле), у реальності (гіпотеза) або соціально (ввічливість).',
    },
    {
      en: 'Semi-modals (have to, need to, be able to, ought to, had better) conjugate like normal verbs and fill every hole modals leave: past, future after will, infinitives.',
      uk: 'Semi-modals (have to, need to, be able to, ought to, had better) відмінюються як звичайні дієслова і закривають усі дірки modals: минуле, майбутнє після will, інфінітиви.',
    },
    {
      en: 'Choose in two moves — function, then time. The past column runs on had to and the perfect infinitive: should/must/could/might + have + V3.',
      uk: 'Обирайте у два ходи — функція, потім час. Колонка минулого працює на had to і perfect infinitive: should/must/could/might + have + V3.',
    },
    {
      en: 'The two scope traps: mustn’t = заборонено, don’t have to = не обовʼязково; and negative deduction is can’t (not mustn’t): It can’t be true.',
      uk: 'Дві пастки масштабу заперечення: mustn’t = заборонено, don’t have to = не обовʼязково; а заперечний висновок — can’t (не mustn’t): It can’t be true.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“I must to finish it”', uk: '«I must to finish it»' },
      body: {
        en: 'Calqued from «мушу зробити». Modals take the bare infinitive: I must finish it. The to belongs only to semi-modals: I have to finish it.',
        uk: 'Калька з «мушу зробити». Modals беруть bare infinitive: I must finish it. To живе лише в semi-modals: I have to finish it.',
      },
    },
    {
      title: { en: '“She cans / he musts”', uk: '«She cans / he musts»' },
      body: {
        en: 'Modals never take third-person -s: she can, he must. If you catch yourself adding -s, you are probably reaching for a semi-modal: she is able to, he has to.',
        uk: 'Modals ніколи не беруть -s третьої особи: she can, he must. Якщо рука тягнеться до -s — вам, найімовірніше, потрібен semi-modal: she is able to, he has to.',
      },
    },
    {
      title: { en: '“Do you can help me?”', uk: '«Do you can help me?»' },
      body: {
        en: 'Modals build questions by inversion, with no do-support: Can you help me? Do appears only with semi-modals: Do you have to leave?',
        uk: 'Modals будують питання інверсією, без do: Can you help me? Do зʼявляється лише з semi-modals: Do you have to leave?',
      },
    },
    {
      title: { en: '“I will can join tomorrow”', uk: '«I will can join tomorrow»' },
      body: {
        en: 'Two modals never stand together — a modal has no infinitive form to follow another modal. Future ability = will be able to; future obligation = will have to.',
        uk: 'Два modals не стоять поруч — modal не має інфінітива, щоб іти після іншого modal. Майбутнє вміння = will be able to; майбутній обовʼязок = will have to.',
      },
    },
    {
      title: { en: '“Yesterday I must…” / “must have” as past duty', uk: '«Yesterday I must…» / «must have» як минулий обовʼязок' },
      body: {
        en: 'Must has no past for obligation — yesterday’s duty is had to. And must have + V3 is past DEDUCTION («мабуть, зробив»), never «мусив зробити».',
        uk: 'Must не має минулого для обовʼязку — вчорашній обовʼязок це had to. А must have + V3 — минулий ВИСНОВОК («мабуть, зробив»), ніколи не «мусив зробити».',
      },
    },
    {
      title: { en: 'mustn’t ≠ «не мусиш»', uk: 'mustn’t ≠ «не мусиш»' },
      body: {
        en: 'The Ukrainian «не мусиш» (no need) is don’t have to / needn’t. Mustn’t is a ban: «не можна». Swapping them silently reverses your sentence — the classic and most expensive modal mistake.',
        uk: 'Українське «не мусиш» (немає потреби) — це don’t have to / needn’t. Mustn’t — заборона: «не можна». Поміняти їх місцями — тихо перевернути зміст речення; класична і найдорожча помилка з modals.',
      },
    },
    {
      title: { en: 'One «можу» → three English modals', uk: 'Одне «можу» → три англійські modals' },
      body: {
        en: 'Ukrainian «можу/може» covers ability (can), permission (can/may) and chance (might/may). «Можливо, я прийду» is I might come — not I can come, which claims ability, not probability.',
        uk: 'Українське «можу/може» покриває вміння (can), дозвіл (can/may) і шанс (might/may). «Можливо, я прийду» — це I might come, а не I can come: останнє заявляє про здатність, не про ймовірність.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-modal-system-1',
      kind: 'mcq',
      prompt: {
        en: 'Pick the correct sentence.',
        uk: 'Оберіть правильне речення.',
      },
      options: ['You must to reboot the server.', 'You must reboot the server.', 'You musts reboot the server.'],
      correct: 1,
      explain: {
        en: 'Modals take the bare infinitive and never take -s: must + reboot.',
        uk: 'Modals беруть bare infinitive і не мають -s: must + reboot.',
      },
      level: 'b1',
      tags: ['modals', 'form'],
    },
    {
      id: 'ex-modal-system-2',
      kind: 'gap',
      sentence: 'Sorry I missed the standup — I ___ take my son to the doctor.',
      answers: ['had to', 'needed to'],
      hint: { en: 'past obligation', uk: 'обовʼязок у минулому' },
      explain: {
        en: 'Must has no past form for obligation; yesterday’s necessity is had to (or needed to).',
        uk: 'Must не має минулої форми для обовʼязку; вчорашня необхідність — had to (або needed to).',
      },
      level: 'b1',
      tags: ['modals', 'obligation', 'past'],
    },
    {
      id: 'ex-modal-system-3',
      kind: 'gap',
      sentence: 'You ___ have force-pushed to main — we lost two commits.',
      answers: ["shouldn't", 'should not', 'ought not to'],
      hint: { en: 'criticism of a past action', uk: 'критика минулої дії' },
      explain: {
        en: 'Advice pointed at the past = should(n’t) have + V3: the wrong thing happened and you are criticizing it.',
        uk: 'Порада, спрямована в минуле, = should(n’t) have + V3: сталося неправильне, і ви це критикуєте.',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'past'],
    },
    {
      id: 'ex-modal-system-4',
      kind: 'mcq',
      prompt: {
        en: '“You ___ share your API keys — it’s strictly forbidden.”',
        uk: '«You ___ share your API keys — це суворо заборонено.»',
      },
      options: ["don't have to", "mustn't", "needn't"],
      correct: 1,
      explain: {
        en: 'A ban denies the ACTION → mustn’t. Don’t have to / needn’t would make key-sharing merely optional — the opposite of a ban.',
        uk: 'Заборона заперечує саму ДІЮ → mustn’t. Don’t have to / needn’t зробили б шеринг ключів просто необовʼязковим — протилежність забороні.',
      },
      level: 'b1',
      tags: ['modals', 'prohibition', 'negation'],
    },
    {
      id: 'ex-modal-system-5',
      kind: 'mcq',
      prompt: {
        en: '“You ___ come to the retro if you’re heads-down on the incident — it’s optional.”',
        uk: '«You ___ come to the retro, якщо ви зайняті інцидентом — це опційно.»',
      },
      options: ["mustn't", "can't", "don't have to"],
      correct: 2,
      explain: {
        en: '“Optional” denies the NECESSITY, not the action → don’t have to. Mustn’t would ban attending.',
        uk: '«Опційно» заперечує НЕОБХІДНІСТЬ, а не дію → don’t have to. Mustn’t заборонило б приходити.',
      },
      level: 'b1',
      tags: ['modals', 'no-necessity', 'negation'],
    },
    {
      id: 'ex-modal-system-6',
      kind: 'gap',
      sentence: 'She ___ be in the office — her jacket is on the chair and her laptop is docked.',
      answers: ['must'],
      hint: { en: 'a confident conclusion from evidence', uk: 'упевнений висновок із фактів' },
      explain: {
        en: 'Evidence + high confidence = deduction must: “must be” ≈ «майже напевно є».',
        uk: 'Факти + висока впевненість = deduction must: “must be” ≈ «майже напевно є».',
      },
      level: 'b1',
      tags: ['modals', 'deduction'],
    },
    {
      id: 'ex-modal-system-7',
      kind: 'gap',
      sentence: "That ___ be Ihor's commit — he's been on vacation all week.",
      answers: ["can't", 'cannot', 'can not', "couldn't"],
      hint: { en: 'a confident NEGATIVE conclusion', uk: 'упевнений ЗАПЕРЕЧНИЙ висновок' },
      explain: {
        en: 'The negative of deduction-must is can’t, not mustn’t: “can’t be” = «не може бути».',
        uk: 'Заперечення до deduction-must — can’t, а не mustn’t: “can’t be” = «не може бути».',
      },
      level: 'b1',
      tags: ['modals', 'deduction', 'negation'],
    },
    {
      id: 'ex-modal-system-8',
      kind: 'gap',
      sentence: 'When I was a kid, I ___ name every dinosaur in the encyclopedia.',
      answers: ['could', 'was able to'],
      hint: { en: 'general past ability', uk: 'загальне вміння в минулому' },
      explain: {
        en: 'A general past skill (not one occasion) takes could; was able to is also correct.',
        uk: 'Загальна навичка в минулому (не разовий випадок) — could; was able to теж правильно.',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'past'],
    },
    {
      id: 'ex-modal-system-9',
      kind: 'gap',
      sentence: 'After two hours of debugging, we finally ___ to reproduce the crash.',
      answers: ['were able', 'managed'],
      hint: { en: 'ONE specific success in the past', uk: 'ОДИН конкретний успіх у минулому' },
      explain: {
        en: 'For a single achieved success, affirmative could is wrong — use was/were able to or managed to.',
        uk: 'Для одного досягнутого успіху стверджувальне could — помилка; кажіть was/were able to або managed to.',
      },
      level: 'b2',
      tags: ['modals', 'ability', 'past'],
    },
    {
      id: 'ex-modal-system-10',
      kind: 'mcq',
      prompt: {
        en: 'You need a client to send the signed contract. The best work email line is:',
        uk: 'Потрібно, щоб клієнт надіслав підписаний контракт. Найкращий рядок робочого листа:',
      },
      options: ['Send me the contract.', 'You must send me the contract.', 'Could you send me the signed contract?'],
      correct: 2,
      explain: {
        en: 'Requests to clients take a distanced modal: Could/Would you…? Imperatives and must read as commands.',
        uk: 'Прохання до клієнтів беруть дистанційований modal: Could/Would you…? Імператив і must звучать як накази.',
      },
      level: 'b1',
      tags: ['modals', 'request', 'politeness'],
    },
    {
      id: 'ex-modal-system-11',
      kind: 'gap',
      sentence: "You ___ worry about IE11 — we dropped support last year.",
      answers: ["don't have to", "don't need to", "needn't", 'need not', "do not have to", 'do not need to'],
      hint: { en: 'no necessity', uk: 'немає потреби' },
      explain: {
        en: 'Absence of necessity = don’t have to / don’t need to / needn’t. Mustn’t would forbid worrying.',
        uk: 'Відсутність потреби = don’t have to / don’t need to / needn’t. Mustn’t заборонило б хвилюватися.',
      },
      level: 'b1',
      tags: ['modals', 'no-necessity', 'negation'],
    },
    {
      id: 'ex-modal-system-12',
      kind: 'mcq',
      prompt: {
        en: '“After this course, you ___ hold a technical interview in English.”',
        uk: '«After this course, you ___ hold a technical interview in English.»',
      },
      options: ['will can', 'will be able to', 'can will'],
      correct: 1,
      explain: {
        en: 'Modals never stack — the future of can is will be able to.',
        uk: 'Modals не стоять поруч — майбутнє від can це will be able to.',
      },
      level: 'b1',
      tags: ['modals', 'ability', 'future', 'form'],
    },
    {
      id: 'ex-modal-system-13',
      kind: 'gap',
      sentence: 'The tests ___ have passed — the merge button just turned green.',
      answers: ['must'],
      hint: { en: 'past deduction from present evidence', uk: 'висновок про минуле з теперішніх фактів' },
      explain: {
        en: 'Must have + V3 = confident deduction about the past: «мабуть, пройшли».',
        uk: 'Must have + V3 = упевнений висновок про минуле: «мабуть, пройшли».',
      },
      level: 'b2',
      tags: ['modals', 'deduction', 'past'],
    },
    {
      id: 'ex-modal-system-14',
      kind: 'mcq',
      prompt: {
        en: 'The past of “I must call the bank” (obligation) is:',
        uk: 'Минуле від «I must call the bank» (обовʼязок) — це:',
      },
      options: ['I must called the bank.', 'I must have called the bank.', 'I had to call the bank.'],
      correct: 2,
      explain: {
        en: 'Past obligation = had to. Must have called is a deduction («мабуть, подзвонив»), and must never inflects.',
        uk: 'Минулий обовʼязок = had to. Must have called — висновок («мабуть, подзвонив»), а сам must не відмінюється.',
      },
      level: 'b1',
      tags: ['modals', 'obligation', 'past'],
    },
    {
      id: 'ex-modal-system-15',
      kind: 'gap',
      sentence: '___ I create a ticket for this bug, or will you file it yourself?',
      answers: ['shall', 'should', 'can'],
      hint: { en: 'a first-person offer', uk: 'пропозиція від першої особи' },
      explain: {
        en: 'First-person offers: Shall I…? (a bit formal), Should I…? (everyday US), Can I…? all work.',
        uk: 'Пропозиції від першої особи: Shall I…? (трохи формально), Should I…? (повсякденне US), Can I…? — усі працюють.',
      },
      level: 'b1',
      tags: ['modals', 'offer'],
    },
    {
      id: 'ex-modal-system-16',
      kind: 'gap',
      sentence: 'We ___ have rewritten the whole parser — a one-line regex fix was enough.',
      answers: ["needn't", 'need not'],
      hint: { en: 'you DID it, and it turned out unnecessary', uk: 'ви це ЗРОБИЛИ, і виявилось, що дарма' },
      explain: {
        en: 'Needn’t have + V3 = the action happened but was unnecessary. Didn’t have to would only say there was no obligation.',
        uk: 'Needn’t have + V3 = дія відбулася, але була зайвою. Didn’t have to сказало б лише, що обовʼязку не було.',
      },
      level: 'b2',
      tags: ['modals', 'no-necessity', 'past'],
    },
    {
      id: 'ex-modal-system-17',
      kind: 'mcq',
      prompt: {
        en: '“He ___ be the new PM — he introduced himself at standup this morning.” (you met him, you are certain)',
        uk: '«He ___ be the new PM — він представився на standup сьогодні вранці.» (ви його бачили, ви впевнені)',
      },
      options: ['might', 'must', 'should'],
      correct: 1,
      explain: {
        en: 'Direct evidence and near-certainty take deduction must. Might would mean you are only guessing.',
        uk: 'Прямі факти й майже повна впевненість — deduction must. Might означало б, що ви лише припускаєте.',
      },
      level: 'b1',
      tags: ['modals', 'deduction'],
    },
  ],
  seeAlso: [
    'm18-ability-permission',
    'm19-obligation-necessity',
    'm20-advice-criticism',
    'm21-deduction-probability',
    'm22-requests-politeness',
  ],
  sources: [
    {
      title: 'Cambridge Dictionary — Modal verbs and modality',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/modal-verbs-and-modality',
    },
    {
      title: 'Cambridge Dictionary — Must',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/must',
    },
    {
      title: 'British Council LearnEnglish — Modal verbs',
      url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modal-verbs',
    },
    {
      title: 'British Council LearnEnglish — Modals: deductions about the past',
      url: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/modals-deductions-about-past',
    },
    {
      title: 'Merriam-Webster — shall (Usage Guide: shall vs. will)',
      url: 'https://www.merriam-webster.com/dictionary/shall',
    },
  ],
};
