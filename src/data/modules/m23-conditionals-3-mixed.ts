import type { Module } from '../types';

/*
 * CHANGED (A1): M23 · Conditionals 3, mixed & wishes — Section V Advanced Grammar, wave A1 (the
 * section's first module; ★ counterfactual-rewind, the first TokenMorph sim; the section's signature
 * module stays m28 + article-tree). Authored EN first, UA
 * second; grammar terms stay English in both languages; US English with a work/dev lean (postmortems
 * are Type 3 territory). Facts verified against Cambridge Grammar (Conditionals: if · Conditionals and
 * wishes · Wish · If only) and British Council LearnEnglish (Conditionals: third and mixed · Wishes:
 * wish and if only · Wishes and hypotheses · Inversion and conditionals · Unreal time).
 * Spine: m13's distance rule taken one step further — one step back in the if-clause = imagined now;
 * TWO steps back (had + V3) = imagined past. Mixed conditionals simply pick each half's time
 * separately; wish is an if-clause with no main clause.
 */
export const m23: Module = {
  id: 'm23-conditionals-3-mixed',
  num: 23,
  section: 's4-advanced-grammar',
  order: 1,
  level: 'b2',
  title: { en: 'Conditionals 3, mixed & wishes', uk: 'Conditionals 3, mixed і wishes' },
  tagline: {
    en: 'If we had run it on staging, it wouldn’t have failed · If I hadn’t turned down the offer, I’d be in Berlin now · I wish I had backed it up — the grammar of rewinding reality.',
    uk: 'If we had run it on staging, it wouldn’t have failed · If I hadn’t turned down the offer, I’d be in Berlin now · I wish I had backed it up — граматика перемотування реальності.',
  },
  readMins: 22,
  mentalModel: {
    en: 'm13 showed that English marks an imagined condition by moving the verb **one step back** (have → had: *If I had time…*). To imagine the **past**, go one more step back: **had + V3** (*If I had known…*), and the result becomes **would have + V3** (*…I would have come*). That is Type 3. Real life crosses times, so each half can choose its own time: a past change with a present result (*If I had taken the job, I **would be** in Berlin now*) or a present state with a past result (*If I **spoke** German, I would have understood*). **wish / if only** are the same if-clause with no main clause: *I wish I **knew** · I wish I **had known***. Ukrainian says «якби» for all of them — English tells you WHEN by the verb form alone.',
    uk: 'm13 показав, що англійська позначає уявну умову, відсуваючи дієслово **на крок назад** (have → had: *If I had time…*). Щоб уявити **минуле**, відступіть ще на крок: **had + V3** (*If I had known…*), а результат стає **would have + V3** (*…I would have come*). Це Type 3. Реальне життя перетинає часи, тож кожна половина може обрати свій час: зміна в минулому з результатом зараз (*If I had taken the job, I **would be** in Berlin now*) або теперішній стан із минулим результатом (*If I **spoke** German, I would have understood*). **wish / if only** — та сама if-частина без головної: *I wish I **knew** · I wish I **had known***. Українська каже «якби» для всіх них — англійська показує КОЛИ лише формою дієслова.',
  },
  topics: [
    // ── 1. TYPE 3 ──────────────────────────────────────────────────────────
    {
      id: 'third-conditional',
      title: { en: 'Type 3: the imagined past', uk: 'Type 3: уявне минуле' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Type 3 talks about a past that **did not happen** and the past result it **would have had**. Both halves are finished history, so it is the grammar of regret, of “what if” — and of every postmortem: *If we **had had** an alert on queue depth, we **would have caught** it in minutes.* Form: **if + had + V3**, **would have + V3**. Yes, *had had* is correct: the first *had* is the auxiliary, the second is the V3 of *have*.',
            uk: 'Type 3 говорить про минуле, якого **не було**, і про минулий результат, який воно **мало б**. Обидві половини — завершена історія, тож це граматика жалю, «а що, якби» — і кожного постмортему: *If we **had had** an alert on queue depth, we **would have caught** it in minutes.* Форма: **if + had + V3**, **would have + V3**. Так, *had had* — правильно: перше *had* — допоміжне, друге — V3 від *have*.',
          },
        },
        {
          kind: 'figure',
          fig: 'conditional-distance',
          caption: {
            en: 'Distance from reality (from m13): every step away from reality moves the if-clause one tense back. Type 3 is the far end — two steps back, had + V3.',
            uk: 'Відстань від реальності (з m13): кожен крок від реальності зсуває if-частину на один час назад. Type 3 — найдальший край: два кроки назад, had + V3.',
          },
        },
        {
          kind: 'sim',
          sim: 'counterfactual-rewind',
          caption: {
            en: 'Counterfactual Rewind: choose what you change (a past event or a now/always state) and when the result lands — then watch the fact rewind into a conditional, word by word, while an “imagined” branch grows off the real timeline. The Wishes track does the same for I wish … / If only ….',
            uk: 'Counterfactual Rewind: оберіть, що змінюєте (подію в минулому чи стан зараз / завжди) і коли настає результат, — і дивіться, як факт слово за словом перемотується в conditional, а від реальної лінії часу відростає «уявна» гілка. Режим Wishes робить те саме для I wish … / If only ….',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Shape', uk: 'Форма' },
            { en: 'if-clause', uk: 'if-частина' },
            { en: 'main clause', uk: 'головна частина' },
          ],
          rows: [
            [
              { en: 'affirmative', uk: 'ствердження' },
              { en: 'If we had tested it, …', uk: 'If we had tested it, …' },
              { en: '… we would have found the bug.', uk: '… we would have found the bug.' },
            ],
            [
              { en: 'negative', uk: 'заперечення' },
              { en: 'If the cache hadn’t expired, …', uk: 'If the cache hadn’t expired, …' },
              { en: '… the page wouldn’t have slowed down.', uk: '… the page wouldn’t have slowed down.' },
            ],
            [
              { en: 'question', uk: 'питання' },
              { en: 'If you had known, …', uk: 'If you had known, …' },
              { en: '… would you have told me?', uk: '… would you have told me?' },
            ],
            [
              { en: 'possibility / ability', uk: 'можливість / здатність' },
              { en: 'If we had started earlier, …', uk: 'If we had started earlier, …' },
              { en: '… we could / might have finished.', uk: '… we could / might have finished.' },
            ],
          ],
          caption: {
            en: 'British Council (Conditionals: third and mixed): if + Past Perfect, would have + V3; could have / might have work in the main clause too.',
            uk: 'British Council (Conditionals: third and mixed): if + Past Perfect, would have + V3; could have / might have теж працюють у головній частині.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: “If I would have known…”', uk: 'Пастка україномовних: «If I would have known…»' },
          md: {
            en: 'Ukrainian «якби я знав» already contains «б», so *would* slips into the if-clause: ✕ *If I **would have known**, I would have come.* English keeps would in the main clause only: ✓ *If I **had known**, I would have come.* It is the same rule as m13 — no will / would in a condition — just with had + V3.',
            uk: 'Українське «якби я знав» уже містить «б», тож *would* прослизає в if-частину: ✕ *If I **would have known**, I would have come.* Англійська тримає would лише в головній частині: ✓ *If I **had known**, I would have come.* Це те саме правило, що в m13, — жодних will / would в умові, — лише з had + V3.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Type 2 — an imagined NOW', uk: 'Type 2 — уявне ЗАРАЗ' },
          b: { en: 'Type 3 — an imagined PAST', uk: 'Type 3 — уявне МИНУЛЕ' },
          rows: [
            [
              { en: 'Form', uk: 'Форма' },
              { en: 'if + Past Simple, would + V1', uk: 'if + Past Simple, would + V1' },
              { en: 'if + had + V3, would have + V3', uk: 'if + had + V3, would have + V3' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'If I knew the answer, I would tell you.', uk: 'If I knew the answer, I would tell you.' },
              { en: 'If I had known the answer, I would have told you.', uk: 'If I had known the answer, I would have told you.' },
            ],
            [
              { en: 'Reality', uk: 'Реальність' },
              { en: 'I don’t know it (now).', uk: 'Я цього не знаю (зараз).' },
              { en: 'I didn’t know it (then).', uk: 'Я цього не знав (тоді).' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          dive: 3,
          title: { en: 'Reading the contraction ’d', uk: 'Як читати скорочення ’d' },
          md: {
            en: 'In speech both halves contract to *’d*: *If I’d known, I’d have come.* The rule that decodes it: in the **if-clause** ’d = **had** (it is followed by a V3 — *known*); in the **main clause** ’d = **would** (it is followed by *have*). That is also why the drills on this page never accept a bare *’d* as an answer — it is ambiguous on its own.',
            uk: 'У мовленні обидві половини скорочуються до *’d*: *If I’d known, I’d have come.* Правило розшифрування: в **if-частині** ’d = **had** (після нього V3 — *known*); у **головній** ’d = **would** (після нього *have*). Саме тому вправи на цій сторінці не приймають голе *’d* як відповідь — саме по собі воно двозначне.',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: '**Fine print: “Had I known…”.** Formal English can drop *if* and invert *had* and the subject: *If I had known* → ***Had I known** about the freeze, I would have postponed the release.* British Council lists it under inversion (C1). The negative keeps *not* after the subject: ***Had we not** caught it, …* — never ✕ *Hadn’t we caught it*. You will meet it in contracts, formal reports and careful postmortems; in speech, plain *if* is normal.',
            uk: '**Дрібний шрифт: «Had I known…».** Формальна англійська може опустити *if* і переставити *had* та підмет: *If I had known* → ***Had I known** about the freeze, I would have postponed the release.* British Council відносить це до інверсії (C1). Заперечення лишає *not* після підмета: ***Had we not** caught it, …* — ніколи ✕ *Hadn’t we caught it*. Таке трапляється в контрактах, формальних звітах і ретельних постмортемах; у мовленні нормальне просте *if*.',
          },
        },
      ],
    },

    // ── 2. MIXED ───────────────────────────────────────────────────────────
    {
      id: 'mixed',
      title: { en: 'Mixed conditionals: each half picks its own time', uk: 'Mixed conditionals: кожна половина обирає свій час' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The textbook types keep both halves in one time. Real causes and results do not: a decision three years ago shapes your life **now**, and who you **are** explains what happened **yesterday**. Mixed conditionals simply let each half take the form of its own time — the if-clause from one type, the main clause from another.',
            uk: 'Підручникові типи тримають обидві половини в одному часі. Реальні причини й наслідки — ні: рішення трирічної давності формує ваше життя **зараз**, а те, ким ви **є**, пояснює те, що сталося **вчора**. Mixed conditionals просто дозволяють кожній половині взяти форму свого часу — if-частину з одного типу, головну — з іншого.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Mix', uk: 'Суміш' },
            { en: 'Form', uk: 'Форма' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'past cause → present result', uk: 'минула причина → теперішній результат' },
              { en: 'if + had + V3, would + V1', uk: 'if + had + V3, would + V1' },
              { en: 'If we had written tests last year, we wouldn’t be afraid to refactor now.', uk: 'If we had written tests last year, we wouldn’t be afraid to refactor now.' },
            ],
            [
              { en: 'present state → past result', uk: 'теперішній стан → минулий результат' },
              { en: 'if + Past Simple / were, would have + V3', uk: 'if + Past Simple / were, would have + V3' },
              { en: 'If Anna spoke Ukrainian, she would have understood the joke.', uk: 'If Anna spoke Ukrainian, she would have understood the joke.' },
            ],
          ],
          caption: {
            en: 'The two mixed types as British Council presents them (Conditionals: third and mixed).',
            uk: 'Два мішані типи так, як їх подає British Council (Conditionals: third and mixed).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'Type 3 — the result was in the past', uk: 'Type 3 — результат був у минулому' },
          b: { en: 'Mixed — the result is NOW', uk: 'Mixed — результат ЗАРАЗ' },
          rows: [
            [
              { en: 'Sentence', uk: 'Речення' },
              { en: 'If I had taken the job, I would have moved to Berlin.', uk: 'If I had taken the job, I would have moved to Berlin.' },
              { en: 'If I had taken the job, I would be living in Berlin now.', uk: 'If I had taken the job, I would be living in Berlin now.' },
            ],
            [
              { en: 'Imagined result', uk: 'Уявний результат' },
              { en: 'a past move (then)', uk: 'переїзд у минулому (тоді)' },
              { en: 'a present life (today)', uk: 'теперішнє життя (сьогодні)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'The now-test for the main clause', uk: 'Тест «now» для головної частини' },
          md: {
            en: 'Ask: *when would the result be true?* If you could add **now / today / still** to it, use **would + V1** (*I would be living there now*). If it belongs to a finished moment, use **would have + V3** (*I would have moved in 2023*). ✕ *I would have lived there now* fails the test: would have points back while *now* points here.',
            uk: 'Спитайте: *коли результат був би правдою?* Якщо до нього можна додати **now / today / still** — вживайте **would + V1** (*I would be living there now*). Якщо він належить до завершеного моменту — **would have + V3** (*I would have moved in 2023*). ✕ *I would have lived there now* тест не проходить: would have вказує назад, а *now* — сюди.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Якби» is time-blind — choose by meaning', uk: '«Якби» сліпе до часу — обирайте за змістом' },
          md: {
            en: '*Якби я говорив німецькою* can mean *If I spoke German* (now) or *If I had spoken German* (then); *я б зрозумів* can be *I would understand* or *I would have understood*. Ukrainian leaves time to the context; English forces you to decide for **each half separately**. Before you build the sentence, put a finger on the timeline twice: where is the cause? where is the result?',
            uk: '*Якби я говорив німецькою* може означати *If I spoke German* (зараз) або *If I had spoken German* (тоді); *я б зрозумів* — *I would understand* або *I would have understood*. Українська лишає час контексту; англійська змушує вирішити **для кожної половини окремо**. Перш ніж будувати речення, двічі покажіть пальцем на лінію часу: де причина? де результат?',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**The labels are a teaching map, not a law.** A British Council answer puts it plainly: as long as the two halves are coherent in time and reality, any pattern works. So you will meet *If he left at nine, he’ll be here by now* (a real past possibility → Type-1-like) or *If you weren’t so busy, you would have noticed* — the logic of time decides, and the numbers are only shortcuts to that logic.',
            uk: '**Ярлики — навчальна мапа, а не закон.** British Council каже прямо: якщо дві половини узгоджені в часі й реальності, працює будь-який шаблон. Тож трапляється *If he left at nine, he’ll be here by now* (реальна минула можливість → схоже на Type 1) або *If you weren’t so busy, you would have noticed* — вирішує логіка часу, а номери — лише скорочення до цієї логіки.',
          },
        },
      ],
    },

    // ── 3. WISH / IF ONLY ──────────────────────────────────────────────────
    {
      id: 'wish-if-only',
      title: { en: 'wish & if only: an if-clause with no ending', uk: 'wish і if only: if-частина без продовження' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*I wish …* is an if-clause that never got its main clause — so it takes exactly the same backshift. About **now**: one step back (*I wish I **knew** · I wish I **could** come*). About the **past**: two steps back (*I wish I **had backed** it up*). **If only** means the same as *I wish*, only stronger (Cambridge) — and it usually ends with an exclamation mark.',
            uk: '*I wish …* — це if-частина, що так і не отримала головної, тож вона бере точно такий самий зсув. Про **зараз**: крок назад (*I wish I **knew** · I wish I **could** come*). Про **минуле**: два кроки назад (*I wish I **had backed** it up*). **If only** означає те саме, що *I wish*, лише сильніше (Cambridge), — і зазвичай закінчується знаком оклику.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Wish about…', uk: 'Бажання про…' },
            { en: 'Form', uk: 'Форма' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'a present state', uk: 'теперішній стан' },
              { en: 'wish + Past Simple / were', uk: 'wish + Past Simple / were' },
              { en: 'I wish I spoke German.', uk: 'I wish I spoke German.' },
            ],
            [
              { en: 'a missing ability', uk: 'відсутню здатність' },
              { en: 'wish + could + V1', uk: 'wish + could + V1' },
              { en: 'I wish I could come to the offsite.', uk: 'I wish I could come to the offsite.' },
            ],
            [
              { en: 'the past (regret)', uk: 'минуле (жаль)' },
              { en: 'wish + had + V3', uk: 'wish + had + V3' },
              { en: 'I wish I had backed up the database.', uk: 'I wish I had backed up the database.' },
            ],
            [
              { en: 'someone else’s behavior (annoyance)', uk: 'чужу поведінку (роздратування)' },
              { en: 'wish + someone + would + V1', uk: 'wish + someone + would + V1' },
              { en: 'I wish you wouldn’t push straight to main.', uk: 'I wish you wouldn’t push straight to main.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Wish · If only) and British Council (Wishes: wish and if only).',
            uk: 'Cambridge (Wish · If only) і British Council (Wishes: wish and if only).',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Polarity flips: «шкода, що НЕ…» = I wish …', uk: 'Полярність перевертається: «шкода, що НЕ…» = I wish …' },
          md: {
            en: 'Ukrainian usually says what is missing: *«шкода, що я **не** знаю»*. The English wish says what you **want**, so the *not* disappears: ✓ *I wish I **knew*** — not ✕ *I wish I didn’t know* (that means the opposite: you know and would rather not). Check the meaning, not the words: *«шкода, що я **пішов**»* → *I wish I **hadn’t left***.',
            uk: 'Українська зазвичай каже, чого бракує: *«шкода, що я **не** знаю»*. Англійське wish каже, чого ви **хочете**, тож *not* зникає: ✓ *I wish I **knew*** — а не ✕ *I wish I didn’t know* (це означає протилежне: ви знаєте й воліли б не знати). Перевіряйте зміст, а не слова: *«шкода, що я **пішов**»* → *I wish I **hadn’t left***.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“I wish I would…” — would is for other people', uk: '«I wish I would…» — would для інших людей' },
          md: {
            en: '*wish + would* complains about someone **else**’s behavior or something outside your control: *I wish it **would** stop raining · I wish my teammate **would** write commit messages.* About yourself it makes no sense — your habits are your own choice (British Council): ✕ *I wish I would stop checking Slack* → ✓ *I wish I **didn’t check** Slack at night* / *I wish I **could** stop checking Slack.*',
            uk: '*wish + would* скаржиться на поведінку **когось іншого** або на те, що поза вашим контролем: *I wish it **would** stop raining · I wish my teammate **would** write commit messages.* Про себе це не має сенсу — ваші звички залежать від вас (British Council): ✕ *I wish I would stop checking Slack* → ✓ *I wish I **didn’t check** Slack at night* / *I wish I **could** stop checking Slack.*',
          },
        },
        {
          kind: 'compare',
          a: { en: 'wish — unreal: it isn’t / wasn’t so', uk: 'wish — нереальне: це не так / не було так' },
          b: { en: 'hope — real: it may well happen', uk: 'hope — реальне: це цілком може статися' },
          rows: [
            [
              { en: 'Future', uk: 'Майбутнє' },
              { en: '✕ I wish you get the job.', uk: '✕ I wish you get the job.' },
              { en: '✓ I hope you get the job.', uk: '✓ I hope you get the job.' },
            ],
            [
              { en: 'Past, result unknown', uk: 'Минуле, результат невідомий' },
              { en: '✕ I wish the deploy went well.', uk: '✕ I wish the deploy went well.' },
              { en: '✓ I hope the deploy went well.', uk: '✓ I hope the deploy went well.' },
            ],
            [
              { en: 'Present, known to be false', uk: 'Теперішнє, відомо, що неправда' },
              { en: '✓ I wish I had more time.', uk: '✓ I wish I had more time.' },
              { en: '—', uk: '—' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**wish + were.** Like *If I were you*, formal English uses *were* for every person after wish: *I wish it **were** Friday.* Cambridge notes that *was* is common in everyday speech (*I wish it was Friday*), so both are correct; in writing, *were* is the safer choice.',
            uk: '**wish + were.** Як і в *If I were you*, формальна англійська вживає *were* для всіх осіб після wish: *I wish it **were** Friday.* Cambridge зазначає, що в повсякденному мовленні поширене *was* (*I wish it was Friday*), тож правильні обидва; на письмі *were* — безпечніший вибір.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: “I wish you a happy birthday”', uk: 'Дрібний шрифт: «I wish you a happy birthday»' },
          md: {
            en: '*wish + person + noun* is a different, perfectly real use: a greeting or a good wish — *We wish you a smooth launch · I wish you all the best.* No backshift here, because nothing is unreal. Only *wish + clause* (*I wish you **were** here*) is the unreal one.',
            uk: '*wish + person + noun* — інше, цілком реальне вживання: привітання або добре побажання — *We wish you a smooth launch · I wish you all the best.* Зсуву тут немає, бо нічого нереального немає. Нереальне лише *wish + clause* (*I wish you **were** here*).',
          },
        },
      ],
    },

    // ── 4. REGRETS ─────────────────────────────────────────────────────────
    {
      id: 'regrets',
      title: { en: 'Regrets and lessons: talking about what went wrong', uk: 'Жалі й уроки: як говорити про те, що пішло не так' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'English has a whole toolkit for looking back at a mistake, and each tool says something slightly different. *I wish I had…* and *If only I had…* express a **feeling**. *I should have…* (m20) is a **judgment** — it was the right thing to do. *I regret + -ing* (m16) is a **formal admission**. A Type 3 sentence is an **analysis**: it names the cause and the effect.',
            uk: 'Англійська має цілий набір інструментів, щоб оглянутися на помилку, і кожен каже трохи інше. *I wish I had…* та *If only I had…* виражають **почуття**. *I should have…* (m20) — **оцінка**: так варто було зробити. *I regret + -ing* (m16) — **формальне визнання**. Речення Type 3 — **аналіз**: воно називає причину й наслідок.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Tool', uk: 'Інструмент' },
            { en: 'What it says', uk: 'Що каже' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'I wish I had + V3', uk: 'I wish I had + V3' },
              { en: 'a feeling of regret', uk: 'почуття жалю' },
              { en: 'I wish I had read the logs first.', uk: 'I wish I had read the logs first.' },
            ],
            [
              { en: 'If only I had + V3!', uk: 'If only I had + V3!' },
              { en: 'a stronger, emotional regret', uk: 'сильніший, емоційний жаль' },
              { en: 'If only I had read the logs first!', uk: 'If only I had read the logs first!' },
            ],
            [
              { en: 'I should have + V3', uk: 'I should have + V3' },
              { en: 'a judgment: it was the right move (m20)', uk: 'оцінка: так було правильно (m20)' },
              { en: 'I should have read the logs first.', uk: 'I should have read the logs first.' },
            ],
            [
              { en: 'I regret + -ing', uk: 'I regret + -ing' },
              { en: 'a formal admission (m16)', uk: 'формальне визнання (m16)' },
              { en: 'I regret not reading the logs first.', uk: 'I regret not reading the logs first.' },
            ],
            [
              { en: 'Type 3', uk: 'Type 3' },
              { en: 'cause and effect, no emotion', uk: 'причина й наслідок, без емоцій' },
              { en: 'If I had read the logs, I would have found the cause.', uk: 'If I had read the logs, I would have found the cause.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: 'Postmortems: Type 3 for analysis, the future for action', uk: 'Постмортеми: Type 3 для аналізу, майбутнє — для дій' },
          md: {
            en: 'In a blameless postmortem, Type 3 is the analysis tool — with the **system** as the subject: *If the deploy had gone through a canary stage, the bad config would have reached 1% of users, not 100%.* Then switch tense for the action items: *We **will add** a canary stage.* Avoid making a person the subject of the if-clause (*If Oleh had checked…*) — that turns analysis into blame. See also the passive in m14.',
            uk: 'У blameless-постмортемі Type 3 — інструмент аналізу, де підмет — **система**: *If the deploy had gone through a canary stage, the bad config would have reached 1% of users, not 100%.* Далі змініть час для action items: *We **will add** a canary stage.* Не робіть людину підметом if-частини (*If Oleh had checked…*) — так аналіз стає звинуваченням. Див. також passive у m14.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'I wish I had … — the feeling', uk: 'I wish I had … — почуття' },
          b: { en: 'I should have … — the judgment', uk: 'I should have … — оцінка' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'I wish I had asked for help earlier.', uk: 'I wish I had asked for help earlier.' },
              { en: 'I should have asked for help earlier.', uk: 'I should have asked for help earlier.' },
            ],
            [
              { en: 'Focus', uk: 'Фокус' },
              { en: 'how you feel about it now', uk: 'що ви відчуваєте зараз' },
              { en: 'what the right action was', uk: 'якою була правильна дія' },
            ],
            [
              { en: 'About others', uk: 'Про інших' },
              { en: 'I wish you had told me. (disappointment)', uk: 'I wish you had told me. (розчарування)' },
              { en: 'You should have told me. (criticism)', uk: 'You should have told me. (критика)' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**More unreal past forms.** The same “past form = not real” logic shows up in a few fixed frames (British Council: Unreal time): *It’s (high) time we **upgraded** the cluster* (we should do it now — past form, present meaning) · *I’d rather you **didn’t** merge it yet* (m22) · *He talks **as if** he **owned** the codebase.* Once you see the pattern, these stop being separate rules.',
            uk: '**Ще нереальні минулі форми.** Та сама логіка «минула форма = нереальне» трапляється в кількох сталих рамках (British Council: Unreal time): *It’s (high) time we **upgraded** the cluster* (варто зробити це зараз — минула форма, теперішнє значення) · *I’d rather you **didn’t** merge it yet* (m22) · *He talks **as if** he **owned** the codebase.* Коли бачиш шаблон, це перестає бути окремими правилами.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Type 3 = an imagined past: if + had + V3, would have + V3. Both halves are finished history.',
      uk: 'Type 3 = уявне минуле: if + had + V3, would have + V3. Обидві половини — завершена історія.',
    },
    {
      en: 'No would in the if-clause — ever. Ukrainian «якби» already carries «б»; English keeps would in the main clause.',
      uk: 'Жодного would в if-частині — ніколи. Українське «якби» вже несе «б»; англійська тримає would у головній частині.',
    },
    {
      en: 'Mixed conditionals let each half pick its own time: past cause → present result (had + V3, would + V1); present state → past result (Past Simple, would have + V3).',
      uk: 'Mixed conditionals дозволяють кожній половині обрати свій час: минула причина → теперішній результат (had + V3, would + V1); теперішній стан → минулий результат (Past Simple, would have + V3).',
    },
    {
      en: 'wish / if only = an if-clause with no main clause: now → Past Simple / could; past → had + V3; someone else’s behavior → would.',
      uk: 'wish / if only = if-частина без головної: зараз → Past Simple / could; минуле → had + V3; чужа поведінка → would.',
    },
    {
      en: 'wish is for what is unreal; for real hopes about the future (or an unknown past) use hope.',
      uk: 'wish — для нереального; для реальних надій щодо майбутнього (або невідомого минулого) — hope.',
    },
    {
      en: 'Regret toolkit: I wish / If only (feeling) · I should have (judgment) · I regret + -ing (formal) · Type 3 (analysis).',
      uk: 'Набір для жалю: I wish / If only (почуття) · I should have (оцінка) · I regret + -ing (формально) · Type 3 (аналіз).',
    },
  ],
  pitfalls: [
    {
      title: { en: '“If I would have known…”', uk: '«If I would have known…»' },
      body: {
        en: 'would never goes in the if-clause: If I had known, I would have come.',
        uk: 'would ніколи не стоїть в if-частині: If I had known, I would have come.',
      },
    },
    {
      title: { en: '“I would have lived there now”', uk: '«I would have lived there now»' },
      body: {
        en: 'A present result takes would + V1: If I had taken the job, I would be living there now.',
        uk: 'Теперішній результат бере would + V1: If I had taken the job, I would be living there now.',
      },
    },
    {
      title: { en: '«Якби» → always the same English form', uk: '«Якби» → завжди та сама англійська форма' },
      body: {
        en: '«якби» is time-blind; decide the time of each half separately: If I spoke… (now) vs If I had spoken… (then).',
        uk: '«якби» сліпе до часу; визначайте час кожної половини окремо: If I spoke… (зараз) vs If I had spoken… (тоді).',
      },
    },
    {
      title: { en: '“I wish I know” — no backshift', uk: '«I wish I know» — без зсуву' },
      body: {
        en: 'After wish, move one step back for now and two for the past: I wish I knew · I wish I had known.',
        uk: 'Після wish — крок назад для зараз і два — для минулого: I wish I knew · I wish I had known.',
      },
    },
    {
      title: { en: '“I wish I didn’t know” for «шкода, що не знаю»', uk: '«I wish I didn’t know» для «шкода, що не знаю»' },
      body: {
        en: 'The English wish states what you want, so the Ukrainian «не» disappears: I wish I knew.',
        uk: 'Англійське wish називає бажане, тож українське «не» зникає: I wish I knew.',
      },
    },
    {
      title: { en: '“I wish I would stop…”', uk: '«I wish I would stop…»' },
      body: {
        en: 'wish + would is about other people. About yourself: I wish I didn’t… / I wish I could stop….',
        uk: 'wish + would — про інших людей. Про себе: I wish I didn’t… / I wish I could stop….',
      },
    },
    {
      title: { en: '“I wish you get the job”', uk: '«I wish you get the job»' },
      body: {
        en: 'A real future hope takes hope: I hope you get the job. (A greeting is fine: I wish you luck.)',
        uk: 'Реальна надія на майбутнє — hope: I hope you get the job. (Привітання — нормально: I wish you luck.)',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-conditionals-3-mixed-1',
      kind: 'gap',
      sentence: 'If we ___ (run) the migration on staging, it wouldn’t have failed in production.',
      answers: ['had run'],
      hint: { en: 'imagined past → had + V3', uk: 'уявне минуле → had + V3' },
      explain: {
        en: 'Type 3 if-clause: had + V3. run → ran → run.',
        uk: 'If-частина Type 3: had + V3. run → ran → run.',
      },
      level: 'b2',
      tags: ['conditionals', 'third'],
    },
    {
      id: 'ex-conditionals-3-mixed-2',
      kind: 'mcq',
      prompt: { en: 'If I had known about the outage, I ___ you.', uk: 'Якби я знав про збій, я б тобі ___.' },
      options: ['would call', 'would have called', 'had called'],
      correct: 1,
      explain: {
        en: 'An imagined past result → would have + V3.',
        uk: 'Уявний минулий результат → would have + V3.',
      },
      level: 'b2',
      tags: ['conditionals', 'third'],
    },
    {
      id: 'ex-conditionals-3-mixed-3',
      kind: 'mcq',
      prompt: { en: 'If I ___ about the meeting, I would have come.', uk: 'Якби я ___ про зустріч, я б прийшов.' },
      options: ['would have known', 'had known', 'knew'],
      correct: 1,
      explain: {
        en: 'No would in the if-clause. The past is imagined → had + V3. (knew would make it about now.)',
        uk: 'Жодного would в if-частині. Минуле уявне → had + V3. (knew зробило б це про зараз.)',
      },
      level: 'b2',
      tags: ['conditionals', 'third', 'ua-trap'],
    },
    {
      id: 'ex-conditionals-3-mixed-4',
      kind: 'gap',
      sentence: 'If she hadn’t missed the flight, she ___ (be) in Lisbon now.',
      answers: ['would be'],
      hint: { en: 'the result is NOW', uk: 'результат — ЗАРАЗ' },
      explain: {
        en: 'Past cause, present result → mixed: would + V1.',
        uk: 'Минула причина, теперішній результат → mixed: would + V1.',
      },
      level: 'b2',
      tags: ['conditionals', 'mixed'],
    },
    {
      id: 'ex-conditionals-3-mixed-5',
      kind: 'mcq',
      prompt: { en: 'If I spoke German, I ___ the interview last week.', uk: 'Якби я говорив німецькою, я б ___ співбесіду минулого тижня.' },
      options: ['would pass', 'would have passed', 'had passed'],
      correct: 1,
      explain: {
        en: 'A present state (I don’t speak German) → a past result (last week) → would have + V3.',
        uk: 'Теперішній стан (я не говорю німецькою) → минулий результат (минулого тижня) → would have + V3.',
      },
      level: 'b2',
      tags: ['conditionals', 'mixed'],
    },
    {
      id: 'ex-conditionals-3-mixed-6',
      kind: 'mcq',
      prompt: {
        en: 'Which sentence says that a past decision affects the present?',
        uk: 'Яке речення каже, що минуле рішення впливає на теперішнє?',
      },
      options: [
        'If I had taken the job, I would have moved to Berlin.',
        'If I had taken the job, I would be living in Berlin now.',
        'If I took the job, I would live in Berlin.',
      ],
      correct: 1,
      explain: {
        en: 'had + V3 (past cause) + would + V1 with now (present result). The first is Type 3, the third is Type 2.',
        uk: 'had + V3 (минула причина) + would + V1 з now (теперішній результат). Перше — Type 3, третє — Type 2.',
      },
      level: 'b2',
      tags: ['conditionals', 'mixed'],
    },
    {
      id: 'ex-conditionals-3-mixed-7',
      kind: 'gap',
      sentence: 'I wish I ___ (have) more time for side projects.',
      answers: ['had'],
      hint: { en: 'a wish about now', uk: 'бажання про зараз' },
      explain: {
        en: 'Now → one step back: have → had.',
        uk: 'Зараз → крок назад: have → had.',
      },
      level: 'b2',
      tags: ['wish'],
    },
    {
      id: 'ex-conditionals-3-mixed-8',
      kind: 'gap',
      sentence: 'I wish I ___ (back up) the database before the upgrade.',
      answers: ['had backed up'],
      hint: { en: 'a regret about the past', uk: 'жаль про минуле' },
      explain: {
        en: 'Past → two steps back: had + V3.',
        uk: 'Минуле → два кроки назад: had + V3.',
      },
      level: 'b2',
      tags: ['wish', 'regret'],
    },
    {
      id: 'ex-conditionals-3-mixed-9',
      kind: 'mcq',
      prompt: { en: 'I wish my manager ___ scheduling meetings at 6 p.m.', uk: 'Хотів би я, щоб мій менеджер ___ ставити зустрічі на 18:00.' },
      options: ['would stop', 'will stop', 'stops'],
      correct: 0,
      explain: {
        en: 'Annoyance about someone else’s behavior → wish + would + V1.',
        uk: 'Роздратування чужою поведінкою → wish + would + V1.',
      },
      level: 'b2',
      tags: ['wish'],
    },
    {
      id: 'ex-conditionals-3-mixed-10',
      kind: 'mcq',
      prompt: { en: '___ you get the job tomorrow — good luck!', uk: '___, що ти отримаєш роботу завтра, — успіху!' },
      options: ['I wish', 'I hope', 'If only'],
      correct: 1,
      explain: {
        en: 'A real future possibility → hope. wish is for what is unreal.',
        uk: 'Реальна майбутня можливість → hope. wish — для нереального.',
      },
      level: 'b2',
      tags: ['wish', 'hope', 'ua-trap'],
    },
    {
      id: 'ex-conditionals-3-mixed-11',
      kind: 'mcq',
      prompt: { en: 'I wish I ___ stop checking Slack at night.', uk: 'Шкода, що я не ___ перестати перевіряти Slack уночі.' },
      options: ['would', 'could', 'will'],
      correct: 1,
      explain: {
        en: 'About yourself, not would (your habits are your choice) — could expresses the missing ability.',
        uk: 'Про себе — не would (звички залежать від вас); could виражає брак здатності.',
      },
      level: 'b2',
      tags: ['wish', 'ua-trap'],
    },
    {
      id: 'ex-conditionals-3-mixed-12',
      kind: 'gap',
      sentence: 'If only I ___ (listen) to the senior engineer!',
      answers: ['had listened'],
      hint: { en: 'a past regret', uk: 'жаль про минуле' },
      explain: {
        en: 'If only + had + V3 for a past regret (stronger than I wish).',
        uk: 'If only + had + V3 для жалю про минуле (сильніше, ніж I wish).',
      },
      level: 'b2',
      tags: ['wish', 'regret'],
    },
    {
      id: 'ex-conditionals-3-mixed-13',
      kind: 'mcq',
      prompt: { en: 'Sorry — I ___ have tested it on staging first.', uk: 'Вибач — мені ___ спершу протестувати це на staging.' },
      options: ['should', 'would', 'must'],
      correct: 0,
      explain: {
        en: 'should have + V3 = a judgment: it was the right thing to do, and you didn’t (m20). must have would be a deduction.',
        uk: 'should have + V3 = оцінка: так було правильно, а ви не зробили (m20). must have було б висновком.',
      },
      level: 'b2',
      tags: ['regret', 'modals'],
    },
    {
      id: 'ex-conditionals-3-mixed-14',
      kind: 'mcq',
      prompt: { en: 'Had I known about the code freeze, I ___ the release.', uk: 'Якби я знав про code freeze, я б ___ реліз.' },
      options: ['would postpone', 'would have postponed', 'postponed'],
      correct: 1,
      explain: {
        en: 'Had I known = If I had known (formal inversion) → Type 3 → would have + V3.',
        uk: 'Had I known = If I had known (формальна інверсія) → Type 3 → would have + V3.',
      },
      level: 'c1',
      tags: ['conditionals', 'third', 'inversion'],
    },
    {
      id: 'ex-conditionals-3-mixed-15',
      kind: 'mcq',
      prompt: {
        en: 'Which sentence fits a blameless postmortem?',
        uk: 'Яке речення пасує для blameless-постмортему?',
      },
      options: [
        'If the deploy had gone through a canary stage, the bad config would have reached only 1% of users.',
        'If Oleh had checked the config, nothing would have happened.',
        'If the deploy would have gone through a canary stage, fewer users would have been affected.',
      ],
      correct: 0,
      explain: {
        en: 'A system as the subject, correct Type 3. The second blames a person; the third has would in the if-clause.',
        uk: 'Підмет — система, правильний Type 3. Друге звинувачує людину; третє має would в if-частині.',
      },
      level: 'b2',
      tags: ['conditionals', 'third', 'postmortem'],
    },
    {
      id: 'ex-conditionals-3-mixed-16',
      kind: 'gap',
      sentence: 'I regret ___ (not / write) tests for that module.',
      answers: ['not writing', 'not having written'],
      hint: { en: 'regret + -ing', uk: 'regret + -ing' },
      explain: {
        en: 'regret + -ing looks back at something you did (or didn’t do) — m16. not goes before the -ing.',
        uk: 'regret + -ing оглядається на те, що ви зробили (чи не зробили), — m16. not стоїть перед -ing.',
      },
      level: 'b2',
      tags: ['regret', 'gerund'],
    },
  ],
  seeAlso: ['m13-conditionals-0-1-2', 'm20-advice-criticism', 'm16-gerund-infinitive', 'm22-requests-politeness', 'm10-perfect-family', 'm27-inversion-emphasis'],
  sources: [
    {
      title: 'Cambridge Dictionary — Conditionals: if',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/conditionals-if',
    },
    {
      title: 'Cambridge Dictionary — Conditionals and wishes',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/conditionals-and-wishes',
    },
    {
      title: 'Cambridge Dictionary — Wish',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/wish',
    },
    {
      title: 'Cambridge Dictionary — If only',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/if-only',
    },
    {
      title: 'British Council LearnEnglish — Conditionals: third and mixed',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-third-mixed',
    },
    {
      title: 'British Council LearnEnglish — Wishes: wish and if only',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/wishes-wish-if-only',
    },
    {
      title: 'British Council LearnEnglish — Wishes and hypotheses',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/wishes-hypotheses',
    },
    {
      title: 'British Council LearnEnglish — Inversion and conditionals (C1)',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1/inversion-conditionals',
    },
    {
      title: 'British Council LearnEnglish — Unreal time (C1)',
      url: 'https://learnenglish.britishcouncil.org/grammar/c1-grammar/unreal-time',
    },
  ],
};
