import type { Module } from '../types';

/*
 * M20 · Advice & criticism — Section III ★ Modal Verbs (S2). Fourth module of the flagship.
 * Authored EN first, UA second; grammar terms stay English in both languages; examples are
 * US English. Facts verified against Cambridge Dictionary grammar (should; ought to; had better)
 * and British Council LearnEnglish (Suggestions and obligations) — see `sources`.
 * Spine: an advice strength ladder (could → should/ought to → had better) plus the past pivot
 * should have + V3 for criticism/regret.
 */
export const m20: Module = {
  id: 'm20-advice-criticism',
  num: 20,
  section: 's3-modal-verbs',
  order: 4,
  level: 'b1',
  title: { en: 'Advice & criticism', uk: 'Порада і критика' },
  tagline: {
    en: 'Advice is a dial, not a switch: a gentle you could, a plain you should, an urgent you’d better. Turn it to the past and it becomes criticism — you should have.',
    uk: 'Порада — це регулятор, а не вимикач: мʼяке you could, звичайне you should, термінове you’d better. Поверніть у минуле — і вона стає критикою: you should have.',
  },
  readMins: 18,
  mentalModel: {
    en: 'Advice tells someone the right thing to do — and English lets you set its STRENGTH (could → should → had better) and its TIME. Point it at the future and it advises; point it at the past with have + V3 and the same words become criticism or regret.',
    uk: 'Порада каже комусь, як правильно вчинити — і англійська дає задати її СИЛУ (could → should → had better) і ЧАС. Спрямуйте в майбутнє — вона радить; спрямуйте в минуле через have + V3 — і ті самі слова стають критикою чи жалем.',
  },
  topics: [
    {
      id: 'should-ought-to',
      title: { en: 'should & ought to: the everyday advice pair', uk: 'should і ought to: щоденна пара для поради' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*should* is the workhorse of advice: it names **the right or expected thing to do**. *You **should** cache that call.* *shouldn’t* advises against: *You **shouldn’t** hardcode the key.* Its twin *ought to* means almost exactly the same, just a touch more formal and a touch more “objective” (appealing to what’s generally right rather than the speaker’s opinion): *You **ought to** back this up.* Note the forms differ: *should* takes the **bare** infinitive, but *ought* keeps its **to** — *ought **to** back up*.',
            uk: '*should* — робоча конячка поради: воно називає **правильну чи очікувану дію**. *You **should** cache that call.* *shouldn’t* радить проти: *You **shouldn’t** hardcode the key.* Його двійник *ought to* означає майже те саме, лише трохи формальніше й трохи «обʼєктивніше» (апелює до загальноправильного, а не до думки мовця): *You **ought to** back this up.* Зверніть увагу, форми різні: *should* бере **bare** infinitive, а *ought* зберігає своє **to** — *ought **to** back up*.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'A second job hides inside *should*: **expectation**, not advice. *The build **should** be green by now* isn’t telling the build what to do — it predicts what is probably true. *She left at eight, so she **should** be home.* This is the soft edge of deduction (full treatment in m21): *should* = “I expect so, based on the normal course of things.” Context tells advice from expectation — an instruction to a person vs a prediction about a situation.',
            uk: 'Усередині *should* ховається друга робота: **очікування**, а не порада. *The build **should** be green by now* не наказує білду — воно передбачає ймовірну правду. *She left at eight, so she **should** be home.* Це мʼякий край deduction (повний розбір у m21): *should* = «гадаю, що так, зважаючи на звичний хід речей». Контекст відрізняє пораду від очікування — вказівка людині проти передбачення про ситуацію.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'should vs ought to — near-synonyms; the differences are form and frequency, not meaning.',
            uk: 'should проти ought to — майже синоніми; різниця у формі й частотності, не в значенні.',
          },
          head: [
            { en: 'Aspect', uk: 'Аспект' },
            { en: 'should', uk: 'should' },
            { en: 'ought to', uk: 'ought to' },
          ],
          rows: [
            [
              { en: 'Form', uk: 'Форма' },
              { en: 'should + bare infinitive', uk: 'should + bare infinitive' },
              { en: 'ought **to** + infinitive', uk: 'ought **to** + infinitive' },
            ],
            [
              { en: 'Advice', uk: 'Порада' },
              { en: 'You should rest.', uk: 'You should rest.' },
              { en: 'You ought to rest.', uk: 'You ought to rest.' },
            ],
            [
              { en: 'Expectation', uk: 'Очікування' },
              { en: 'It should work now.', uk: 'It should work now.' },
              { en: 'It ought to work now.', uk: 'It ought to work now.' },
            ],
            [
              { en: 'Negative (US)', uk: 'Заперечення (US)' },
              { en: 'shouldn’t (common)', uk: 'shouldn’t (поширене)' },
              { en: 'oughtn’t (rare — prefer shouldn’t)', uk: 'oughtn’t (рідке — краще shouldn’t)' },
            ],
            [
              { en: 'Question (US)', uk: 'Питання (US)' },
              { en: 'Should I…? (common)', uk: 'Should I…? (поширене)' },
              { en: 'Ought I to…? (stiff — prefer Should I)', uk: 'Ought I to…? (сухе — краще Should I)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'In US English, keep ought to out of questions & negatives', uk: 'В US English тримайте ought to подалі від питань і заперечень' },
          md: {
            en: '*ought to* is alive and well in affirmatives, but Americans rarely say *oughtn’t* or *Ought I…?* — they sound bookish or old-fashioned. Default to *should* for negatives and questions (*shouldn’t*, *Should I…?*) and reach for *ought to* only in plain affirmative advice, where it adds a slightly more formal, principled tone.',
            uk: '*ought to* цілком живе у стверджувальних, але американці рідко кажуть *oughtn’t* чи *Ought I…?* — звучить книжно чи старомодно. Дефолт для заперечень і питань — *should* (*shouldn’t*, *Should I…?*), а *ought to* беріть лише у простій стверджувальній пораді, де воно додає трохи формальнішого, принципового тону.',
          },
        },
      ],
    },
    {
      id: 'had-better',
      title: { en: 'had better: advice with a warning', uk: 'had better: порада із застереженням' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*had better* (usually contracted to *’d better*) is advice with **teeth**. It is stronger and more urgent than *should*, tied to a **specific situation** in the near future, and it carries an **implied bad consequence** if the advice is ignored: *You**’d better** back up before you run that migration* (…or you’ll lose data). Form traps: it takes the **bare infinitive** (*’d better **back up***, not *to back up*), and the negative is *had better **not*** + bare infinitive (*You’d better **not** push that*).',
            uk: '*had better* (зазвичай скорочене до *’d better*) — це порада із **зубами**. Вона сильніша й терміновіша за *should*, привʼязана до **конкретної ситуації** в найближчому майбутньому й несе **неявний поганий наслідок**, якщо поради не послухати: *You**’d better** back up before you run that migration* (…бо втратиш дані). Пастки форми: бере **bare infinitive** (*’d better **back up***, не *to back up*), а заперечення — *had better **not*** + bare infinitive (*You’d better **not** push that*).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'should (general advice)', uk: 'should (загальна порада)' },
          b: { en: 'had better (urgent, this situation)', uk: 'had better (терміново, ця ситуація)' },
          rows: [
            [
              { en: 'Scope', uk: 'Обсяг' },
              { en: 'general, timeless advice', uk: 'загальна, позачасова порада' },
              { en: 'one specific, near-future situation', uk: 'одна конкретна, близька ситуація' },
            ],
            [
              { en: 'Force', uk: 'Сила' },
              { en: 'a recommendation', uk: 'рекомендація' },
              { en: 'a warning — or else', uk: 'застереження — бо інакше' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'You should write tests.', uk: 'You should write tests.' },
              { en: 'You’d better write a test for this before Friday.', uk: 'You’d better write a test for this before Friday.' },
            ],
            [
              { en: 'Past form?', uk: 'Минула форма?' },
              { en: 'should have + V3', uk: 'should have + V3' },
              { en: 'none — switch to should have', uk: 'немає — переходьте на should have' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The three had-better traps', uk: 'Три пастки had better' },
          md: {
            en: '(1) **No *to*** — *You’d better **go***, not *to go*; and *had better **not** go*, not *not to go*. (2) **Not general advice** — for timeless advice use *should*: ✗ *You’d better exercise regularly* → *You should exercise regularly*. (3) **It’s not past** — despite the word *had*, *You’d better call now* is **present/future**. There is no past *had better*; for the past you switch to *should have + V3*.',
            uk: '(1) **Без *to*** — *You’d better **go***, не *to go*; і *had better **not** go*, не *not to go*. (2) **Не для загальної поради** — для позачасової поради вживайте *should*: ✗ *You’d better exercise regularly* → *You should exercise regularly*. (3) **Це не минуле** — попри слово *had*, *You’d better call now* — **теперішнє/майбутнє**. Минулого *had better* немає; для минулого переходьте на *should have + V3*.',
          },
        },
      ],
    },
    {
      id: 'should-have-done',
      title: { en: 'The past: should have + V3 (criticism & regret)', uk: 'Минуле: should have + V3 (критика і жаль)' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Point advice at the past and it becomes **criticism** or **regret**, built with the perfect infinitive — *should have + V3*. The key: *should have + V3* means **the right thing did NOT happen**. *You **should have tested** it* = you didn’t test it (and I’m pointing that out). Flip to the negative and *shouldn’t have + V3* criticizes **something that DID happen**: *You **shouldn’t have force-pushed*** = you did force-push, and that was wrong. *ought to have + V3* works the same way, just more formal.',
            uk: 'Спрямуйте пораду в минуле — і вона стає **критикою** чи **жалем**, збудованою через perfect infinitive — *should have + V3*. Ключ: *should have + V3* означає, що **правильне НЕ сталося**. *You **should have tested** it* = ви це не протестували (і я на це вказую). Перейдіть у заперечення — і *shouldn’t have + V3* критикує **те, що СТАЛОСЯ**: *You **shouldn’t have force-pushed*** = ви таки зробили force-push, і це було неправильно. *ought to have + V3* працює так само, лише формальніше.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'Past advice, four flavors — the modal sets the meaning, have + V3 sets the time.',
            uk: 'Минула порада, чотири відтінки — modal задає значення, have + V3 задає час.',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'Did it happen?', uk: 'Чи сталося?' },
            { en: 'Meaning', uk: 'Зміст' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'should have + V3', uk: 'should have + V3' },
              { en: 'NO — the right thing was skipped', uk: 'НІ — правильне пропустили' },
              { en: 'criticism / regret', uk: 'критика / жаль' },
              { en: 'You should have asked me.', uk: 'You should have asked me.' },
            ],
            [
              { en: 'shouldn’t have + V3', uk: 'shouldn’t have + V3' },
              { en: 'YES — the wrong thing was done', uk: 'ТАК — неправильне зробили' },
              { en: 'criticism of an action taken', uk: 'критика вчиненої дії' },
              { en: 'You shouldn’t have merged that.', uk: 'You shouldn’t have merged that.' },
            ],
            [
              { en: 'could have + V3', uk: 'could have + V3' },
              { en: 'NO — a missed option', uk: 'НІ — втрачена опція' },
              { en: 'softer: a possibility not taken', uk: 'мʼякше: невикористана можливість' },
              { en: 'You could have paired with me.', uk: 'You could have paired with me.' },
            ],
            [
              { en: 'must have + V3', uk: 'must have + V3' },
              { en: '— it’s a conclusion, not advice', uk: '— це висновок, не порада' },
              { en: 'deduction (m21), NOT criticism', uk: 'висновок (m21), НЕ критика' },
              { en: 'You must have missed the memo.', uk: 'You must have missed the memo.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: 'Softening criticism at work: could have vs should have', uk: 'Помʼякшення критики на роботі: could have проти should have' },
          md: {
            en: 'In feedback, *should have* lands as a direct verdict (*You should have flagged the risk*). *could have* is gentler — it frames a missed option rather than a failing (*We could have caught this in review*). And beware the neighbor from m21: *must have* is not criticism at all but a **deduction** (*You must have missed the memo* = I conclude you didn’t see it). Choosing among them is choosing how hard the feedback hits.',
            uk: 'У фідбеку *should have* звучить як прямий вирок (*You should have flagged the risk*). *could have* мʼякше — подає це як втрачену опцію, а не провал (*We could have caught this in review*). І стережіться сусіда з m21: *must have* — це взагалі не критика, а **висновок** (*You must have missed the memo* = роблю висновок, що ви не бачили). Вибір між ними — це вибір, наскільки сильно вдарить фідбек.',
          },
        },
      ],
    },
    {
      id: 'giving-advice',
      title: { en: 'Giving advice in real life: the strength ladder & softeners', uk: 'Порада в реальному житті: драбина сили і помʼякшувачі' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Real advice is rarely bare *should*. Picture a **strength ladder**. At the bottom, gentle options: *You **could** pair with Ihor* · *You **might want to** double-check the config.* In the middle, the standard recommendation: *You **should** / **ought to** add a test.* Near the top, the urgent warning: *You**’d better** roll back.* At the very top it stops being advice and becomes obligation: *You **have to** / **must** fix this first.* Same situation, very different pressure — pick the rung that matches how strongly you mean it.',
            uk: 'Справжня порада рідко буває голим *should*. Уявіть **драбину сили**. Унизу мʼякі опції: *You **could** pair with Ihor* · *You **might want to** double-check the config.* Посередині стандартна рекомендація: *You **should** / **ought to** add a test.* Ближче до верху термінове застереження: *You**’d better** roll back.* На самому верху це перестає бути порадою і стає обовʼязком: *You **have to** / **must** fix this first.* Та сама ситуація, дуже різний тиск — оберіть щабель, що відповідає силі вашого наміру.',
          },
        },
        {
          kind: 'figure',
          fig: 'advice-ladder',
          caption: {
            en: 'The advice strength ladder: from a light could / might want to, through should / ought to, up to the had better warning — and beyond it, obligation (have to / must).',
            uk: 'Драбина сили поради: від легкого could / might want to, через should / ought to, до застереження had better — а за ним обовʼязок (have to / must).',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Direction also softens advice. A blunt *You should…* can feel pushy toward a peer or a senior; wrap it and it lands better: *Maybe you could…*, *Have you thought about…?*, *It might be worth…*, *I’d probably…*, *Why don’t you…?* (a suggestion, not a real question). Toward juniors or in your own docs, direct *should* is clear and fine. Matching directness to the relationship is the difference between helpful and preachy.',
            uk: 'Помʼякшує пораду й напрямок. Різке *You should…* може звучати нахабно щодо колеги-рівні чи старшого; загорніть його — і воно ляже краще: *Maybe you could…*, *Have you thought about…?*, *It might be worth…*, *I’d probably…*, *Why don’t you…?* (пропозиція, не справжнє питання). До джуніорів чи у власній документації пряме *should* зрозуміле й доречне. Підлаштувати прямоту під стосунки — різниця між корисним і повчальним.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'A quick tone check before you hit send', uk: 'Швидка перевірка тону перед відправкою' },
          md: {
            en: 'Reviewing a PR from a senior? *You might want to extract this into a helper* reads as collaborative; *You should extract this* can read as a directive. Same idea, softer rung. When in doubt one level down — *could / might want to* — is the safer default with people you don’t manage; save *had better* for genuine “this will break prod” moments.',
            uk: 'Рев’юєте PR від старшого? *You might want to extract this into a helper* звучить як співпраця; *You should extract this* може прозвучати як директива. Та сама ідея, мʼякший щабель. Якщо вагаєтесь, на щабель нижче — *could / might want to* — безпечніший дефолт із тими, ким ви не керуєте; лишайте *had better* для справжніх «це поламає прод» моментів.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'should (+ bare infinitive) and ought to (+ to-infinitive) = the right/expected thing; near-synonyms. shouldn’t advises against.',
      uk: 'should (+ bare infinitive) і ought to (+ to-infinitive) = правильне/очікуване; майже синоніми. shouldn’t радить проти.',
    },
    {
      en: 'should also expresses expectation/probability, not only advice (The deploy should be done by now) — the soft edge of deduction (m21).',
      uk: 'should також виражає очікування/ймовірність, а не лише пораду (The deploy should be done by now) — мʼякий край deduction (m21).',
    },
    {
      en: 'In US English, ought to stays out of negatives and questions — prefer shouldn’t and Should I…?',
      uk: 'В US English ought to не вживають у запереченнях і питаннях — краще shouldn’t і Should I…?',
    },
    {
      en: 'had better (’d better) + bare infinitive = strong, situation-specific advice with an implied bad consequence; near future; negative had better not; no past, and not for general advice.',
      uk: 'had better (’d better) + bare infinitive = сильна, ситуативна порада з неявним поганим наслідком; близьке майбутнє; заперечення had better not; без минулого й не для загальної поради.',
    },
    {
      en: 'should have + V3 = the right thing did NOT happen (criticism/regret); shouldn’t have + V3 = criticism of something that DID happen. could have + V3 is a softer “missed option”.',
      uk: 'should have + V3 = правильне НЕ сталося (критика/жаль); shouldn’t have + V3 = критика того, що СТАЛОСЯ. could have + V3 — мʼякше «втрачена опція».',
    },
    {
      en: 'Advice is a strength ladder — could / might want to (soft) → should / ought to → had better → have to / must — and softeners (Maybe you could…, Have you thought about…?) tune it to the relationship.',
      uk: 'Порада — драбина сили: could / might want to (мʼяко) → should / ought to → had better → have to / must — а помʼякшувачі (Maybe you could…, Have you thought about…?) підлаштовують її під стосунки.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“You had better to go” / “had better not to go”', uk: '«You had better to go» / «had better not to go»' },
      body: {
        en: 'had better takes the bare infinitive: You’d better go, and the negative is had better not + bare infinitive: You’d better not go. No to on either side.',
        uk: 'had better бере bare infinitive: You’d better go, а заперечення — had better not + bare infinitive: You’d better not go. Жодного to з обох боків.',
      },
    },
    {
      title: { en: 'had better for general advice', uk: 'had better для загальної поради' },
      body: {
        en: '✗ You’d better exercise regularly (timeless advice). Use should: You should exercise regularly. had better is for one specific, near-future situation with a consequence.',
        uk: '✗ You’d better exercise regularly (позачасова порада). Вживайте should: You should exercise regularly. had better — для однієї конкретної, близької ситуації з наслідком.',
      },
    },
    {
      title: { en: '“You’d better” treated as past', uk: '«You’d better» як минуле' },
      body: {
        en: 'Despite had, it’s present/future: You’d better call now = call now. There is no past had better; for the past use should have + V3.',
        uk: 'Попри had, це теперішнє/майбутнє: You’d better call now = телефонуй зараз. Минулого had better немає; для минулого — should have + V3.',
      },
    },
    {
      title: { en: '“You should test it” about a past failure', uk: '«You should test it» про минулий провал' },
      body: {
        en: 'If it already broke, present should is too late. Criticize the past with should have + V3: You should have tested it. Dropping have loses the past meaning.',
        uk: 'Якщо воно вже зламалося, теперішнє should запізно. Критикуйте минуле через should have + V3: You should have tested it. Без have губиться минулий сенс.',
      },
    },
    {
      title: { en: '«варто було б» → “should” without “have”', uk: '«варто було б» → «should» без «have»' },
      body: {
        en: '«Тобі варто було б попередити» is past → You should have warned me. Learners drop have and say You should warn me, which points at the future instead.',
        uk: '«Тобі варто було б попередити» — минуле → You should have warned me. Ті, хто вчить, кидають have і кажуть You should warn me, що вказує вже в майбутнє.',
      },
    },
    {
      title: { en: 'oughtn’t / Ought I…? in US English', uk: 'oughtn’t / Ought I…? в US English' },
      body: {
        en: 'These sound bookish or old-fashioned to Americans. Use shouldn’t and Should I…? for negatives and questions; keep ought to for plain affirmative advice.',
        uk: 'Для американців це звучить книжно чи старомодно. Для заперечень і питань вживайте shouldn’t і Should I…?; ought to лишайте для простої стверджувальної поради.',
      },
    },
    {
      title: { en: '“should to” / “must” where advice is meant', uk: '«should to» / «must», коли йдеться про пораду' },
      body: {
        en: 'should takes the bare infinitive (should test, not should to test). And must/have to is obligation, not advice — reserve the top rung for when you truly mean “no choice”.',
        uk: 'should бере bare infinitive (should test, не should to test). А must/have to — це обовʼязок, не порада — лишайте верхній щабель для випадків, коли справді «немає вибору».',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-advice-criticism-1',
      kind: 'gap',
      sentence: 'The endpoint is flaky under load — you ___ add a retry with backoff.',
      answers: ['should', 'ought to'],
      hint: { en: 'everyday advice', uk: 'звичайна порада' },
      explain: {
        en: 'A plain recommendation = should (or ought to). Both name the right thing to do.',
        uk: 'Проста рекомендація = should (або ought to). Обидва називають правильну дію.',
      },
      level: 'b1',
      tags: ['modals', 'advice'],
    },
    {
      id: 'ex-advice-criticism-2',
      kind: 'mcq',
      prompt: {
        en: 'Pick the correct form.',
        uk: 'Оберіть правильну форму.',
      },
      options: ['You should to rest.', 'You should rest.', 'You shoulds rest.'],
      correct: 1,
      explain: {
        en: 'should takes the bare infinitive and never takes -s: should + rest.',
        uk: 'should бере bare infinitive і не має -s: should + rest.',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'form'],
    },
    {
      id: 'ex-advice-criticism-3',
      kind: 'gap',
      sentence: 'The pipeline started ten minutes ago, so it ___ be almost done by now.',
      answers: ['should', 'ought to'],
      hint: { en: 'expectation, not advice', uk: 'очікування, не порада' },
      explain: {
        en: 'should also expresses expectation/probability: “I expect it’s nearly done.”',
        uk: 'should також виражає очікування/ймовірність: «гадаю, майже готове».',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'expectation'],
    },
    {
      id: 'ex-advice-criticism-4',
      kind: 'mcq',
      prompt: {
        en: 'Warn a teammate right before a risky migration:',
        uk: 'Застережіть колегу просто перед ризикованою міграцією:',
      },
      options: ["You'd better to back up first.", "You'd better back up first.", 'You had better backing up first.'],
      correct: 1,
      explain: {
        en: 'had better + bare infinitive: You’d better back up. No to, no -ing.',
        uk: 'had better + bare infinitive: You’d better back up. Без to, без -ing.',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'form'],
    },
    {
      id: 'ex-advice-criticism-5',
      kind: 'gap',
      sentence: 'The deploy window closes in five minutes — we ___ better merge now.',
      answers: ["'d", 'had'],
      hint: { en: 'an urgent, this-situation warning', uk: 'термінове застереження для цієї ситуації' },
      explain: {
        en: 'had better (’d better) fits an urgent, specific situation with a consequence.',
        uk: 'had better (’d better) пасує до термінової, конкретної ситуації з наслідком.',
      },
      level: 'b1',
      tags: ['modals', 'advice'],
    },
    {
      id: 'ex-advice-criticism-6',
      kind: 'mcq',
      prompt: {
        en: 'Tell someone, urgently, NOT to skip the tests:',
        uk: 'Терміново скажіть комусь НЕ пропускати тести:',
      },
      options: ["You'd better not skip the tests.", "You'd better not to skip the tests.", 'You had not better skip the tests.'],
      correct: 0,
      explain: {
        en: 'Negative had better = had better not + bare infinitive.',
        uk: 'Заперечне had better = had better not + bare infinitive.',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'negation', 'form'],
    },
    {
      id: 'ex-advice-criticism-7',
      kind: 'mcq',
      prompt: {
        en: 'Which is general, timeless advice (not a specific warning)?',
        uk: 'Що з цього — загальна, позачасова порада (не конкретне застереження)?',
      },
      options: ["You'd better eat vegetables.", 'You should eat vegetables.', "You'd better to eat vegetables."],
      correct: 1,
      explain: {
        en: 'Timeless advice = should. had better is for a specific near-future situation, not habits.',
        uk: 'Позачасова порада = should. had better — для конкретної близької ситуації, не для звичок.',
      },
      level: 'b1',
      tags: ['modals', 'advice'],
    },
    {
      id: 'ex-advice-criticism-8',
      kind: 'gap',
      sentence: 'The outage lasted an hour — we ___ have set up alerting months ago.',
      answers: ['should', 'ought to'],
      hint: { en: 'the right thing did not happen', uk: 'правильне не сталося' },
      explain: {
        en: 'Criticism/regret about the past = should have + V3 (the alerting wasn’t set up).',
        uk: 'Критика/жаль про минуле = should have + V3 (алертинг не налаштували).',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'past'],
    },
    {
      id: 'ex-advice-criticism-9',
      kind: 'mcq',
      prompt: {
        en: 'A colleague force-pushed to main and lost commits. To criticize what happened, say:',
        uk: 'Колега зробив force-push у main і втратив коміти. Щоб покритикувати те, що сталося, скажіть:',
      },
      options: ["You shouldn't have force-pushed to main.", "You shouldn't force-push to main.", "You mustn't have force-pushed to main."],
      correct: 0,
      explain: {
        en: 'Criticizing a past action that happened = shouldn’t have + V3. (Present shouldn’t is general advice; mustn’t have isn’t a criticism form.)',
        uk: 'Критика минулої дії, що сталася, = shouldn’t have + V3. (Теперішнє shouldn’t — загальна порада; mustn’t have — не форма критики.)',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'past'],
    },
    {
      id: 'ex-advice-criticism-10',
      kind: 'gap',
      sentence: '«Тобі варто було б попередити мене» → You ___ have warned me.',
      answers: ['should', 'ought to'],
      hint: { en: 'past advice / criticism', uk: 'порада / критика в минулому' },
      explain: {
        en: '«варто було б» is past → should have + V3; don’t drop have.',
        uk: '«варто було б» — минуле → should have + V3; не кидайте have.',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'past'],
    },
    {
      id: 'ex-advice-criticism-11',
      kind: 'mcq',
      prompt: {
        en: 'Most natural in US English:',
        uk: 'Найприродніше в US English:',
      },
      options: ["You oughtn't to skip lunch.", "You shouldn't skip lunch.", 'You ought not skip lunch.'],
      correct: 1,
      explain: {
        en: 'Americans avoid oughtn’t; use shouldn’t in negatives.',
        uk: 'Американці уникають oughtn’t; у запереченнях вживайте shouldn’t.',
      },
      level: 'b2',
      tags: ['modals', 'advice', 'register', 'negation'],
    },
    {
      id: 'ex-advice-criticism-12',
      kind: 'gap',
      sentence: 'I don’t want to push, but you ___ want to double-check the migration script first.',
      answers: ['might', 'may'],
      hint: { en: 'a soft, indirect suggestion', uk: 'мʼяка, непряма пропозиція' },
      explain: {
        en: 'might want to is a gentle way to advise — lower on the strength ladder than should.',
        uk: 'might want to — мʼякий спосіб порадити, нижче на драбині сили, ніж should.',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'register'],
    },
    {
      id: 'ex-advice-criticism-13',
      kind: 'mcq',
      prompt: {
        en: 'Offer a gentle option to a stuck teammate:',
        uk: 'Запропонуйте мʼяку опцію колезі, що застряг:',
      },
      options: ['You could pair with Ihor on this.', "You'd better pair with Ihor.", 'You must pair with Ihor.'],
      correct: 0,
      explain: {
        en: 'could = a light positive suggestion; had better warns, must obliges.',
        uk: 'could = легка позитивна пропозиція; had better застерігає, must зобовʼязує.',
      },
      level: 'b1',
      tags: ['modals', 'advice'],
    },
    {
      id: 'ex-advice-criticism-14',
      kind: 'mcq',
      prompt: {
        en: '“You’d better call them now.” This refers to:',
        uk: '«You’d better call them now.» Це стосується:',
      },
      options: ['the past', 'the present / near future', 'a general habit'],
      correct: 1,
      explain: {
        en: 'Despite the word had, had better means the present/near future — never the past.',
        uk: 'Попри слово had, had better означає теперішнє/близьке майбутнє — ніколи минуле.',
      },
      level: 'b1',
      tags: ['modals', 'advice'],
    },
    {
      id: 'ex-advice-criticism-15',
      kind: 'mcq',
      prompt: {
        en: 'The tests were green, then prod broke. Complete a CONCLUSION about the past: “We ___ have missed an edge case.”',
        uk: 'Тести були зелені, а тоді прод зламався. Завершіть ВИСНОВОК про минуле: «We ___ have missed an edge case.»',
      },
      options: ['should', 'must', 'had better'],
      correct: 1,
      explain: {
        en: 'A confident conclusion about the past = must have + V3 (deduction, m21) — not should have, which would be self-criticism.',
        uk: 'Упевнений висновок про минуле = must have + V3 (deduction, m21) — а не should have, що було б самокритикою.',
      },
      level: 'b2',
      tags: ['modals', 'advice', 'deduction', 'past'],
    },
    {
      id: 'ex-advice-criticism-16',
      kind: 'gap',
      sentence: '___ you tried restarting the language server? It clears this error for me.',
      answers: ['have'],
      hint: { en: 'a softened, indirect way to advise', uk: 'помʼякшений, непрямий спосіб порадити' },
      explain: {
        en: '“Have you tried…?” is a common indirect way to give advice without sounding pushy.',
        uk: '«Have you tried…?» — поширений непрямий спосіб порадити, не звучачи нахабно.',
      },
      level: 'b1',
      tags: ['modals', 'advice', 'register'],
    },
  ],
  seeAlso: ['m17-modal-system', 'm19-obligation-necessity', 'm21-deduction-probability', 'm22-requests-politeness'],
  sources: [
    {
      title: 'Cambridge Dictionary — Had better',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/had-better',
    },
    {
      title: 'Cambridge Dictionary — Should',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/should',
    },
    {
      title: 'Cambridge Dictionary — Ought to',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/ought-to',
    },
    {
      title: 'British Council LearnEnglish — Suggestions and obligations',
      url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/suggestions-obligations',
    },
  ],
};
