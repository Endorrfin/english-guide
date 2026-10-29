import type { Module } from '../types';

/*
 * CHANGED (A1): M24 · Advanced passive & causative — Section V Advanced Grammar, wave A1
 * (★ causative-switch, TokenMorph family). Builds on m14 (be + V3, the tense lives in be). Authored EN
 * first, UA second; grammar terms stay English in both languages; US English with a work/dev lean.
 * Facts verified against Cambridge Grammar (Passive: forms — incl. the note that the perfect continuous
 * passive is rare and usually avoided · Passive: other forms · Passive: uses — reporting-verb passives
 * create distance · Have something done · Get) and British Council LearnEnglish (Advanced passives
 * review — the impersonal passive with allege, believe, claim, consider, estimate, expect, know,
 * report, say, think, understand · Active and passive voice).
 * Spine: three tools for moving the doer out of the spotlight — the full passive range, the causative
 * (someone else does it for you), and the impersonal report (nobody in particular says it).
 */
export const m24: Module = {
  id: 'm24-passive-advanced',
  num: 24,
  section: 's4-advanced-grammar',
  order: 2,
  level: 'b2',
  title: { en: 'Advanced passive & causative', uk: 'Поглиблений passive і causative' },
  tagline: {
    en: 'It should have been caught in review · We had our app audited · The outage is believed to have started in the EU region — who did it, who arranged it, and who says so.',
    uk: 'It should have been caught in review · We had our app audited · The outage is believed to have started in the EU region — хто це зробив, хто це організував і хто так каже.',
  },
  readMins: 20,
  mentalModel: {
    en: 'm14 built the passive machine: **be + V3**, and *be* carries the tense. This module adds three moves. (1) **Every slot of the verb can be passive** — an infinitive (*needs **to be reviewed***), an -ing form (*I hate **being interrupted***), a modal perfect (*should **have been caught***). (2) **The causative** moves the work to someone else: *I repaired my laptop* (you did it) → *I **had** my laptop **repaired*** (you arranged it). (3) **The impersonal report** removes the speaker: *People say the CEO is leaving* → ***It is said** that…* → *The CEO **is said to be** leaving.* All three answer the same question differently: who is in the spotlight?',
    uk: 'm14 збудував машину passive: **be + V3**, і *be* несе час. Цей модуль додає три ходи. (1) **Кожен слот дієслова може бути пасивним** — інфінітив (*needs **to be reviewed***), -ing форма (*I hate **being interrupted***), modal perfect (*should **have been caught***). (2) **Causative** переносить роботу на когось іншого: *I repaired my laptop* (зробили ви) → *I **had** my laptop **repaired*** (ви організували). (3) **Безособовий звіт** прибирає мовця: *People say the CEO is leaving* → ***It is said** that…* → *The CEO **is said to be** leaving.* Усі три по-різному відповідають на одне питання: хто в центрі уваги?',
  },
  topics: [
    // ── 1. THE FULL RANGE ──────────────────────────────────────────────────
    {
      id: 'perfect-continuous-passive',
      title: { en: 'The full range: infinitives, -ing and modal perfects', uk: 'Повний діапазон: інфінітиви, -ing і modal perfect' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The m14 rule scales to every form a verb can take: put **be** in the slot, in the right shape, and add the V3. After a modal: *be done*. After *to*: *to be done*. Where you need -ing: *being done*. Looking back: *have been done · to have been done · having been done*. Nothing new to memorize — only *be* changes its shape.',
            uk: 'Правило m14 масштабується на кожну форму дієслова: поставте **be** у слот у потрібній формі й додайте V3. Після modal: *be done*. Після *to*: *to be done*. Де потрібне -ing: *being done*. Погляд назад: *have been done · to have been done · having been done*. Нічого нового запамʼятовувати — змінює форму лише *be*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Slot', uk: 'Слот' },
            { en: 'Passive form', uk: 'Пасивна форма' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'infinitive', uk: 'інфінітив' },
              { en: 'to be + V3', uk: 'to be + V3' },
              { en: 'The PR needs to be reviewed by two people.', uk: 'The PR needs to be reviewed by two people.' },
            ],
            [
              { en: 'perfect infinitive', uk: 'perfect infinitive' },
              { en: 'to have been + V3', uk: 'to have been + V3' },
              { en: 'The bug seems to have been fixed already.', uk: 'The bug seems to have been fixed already.' },
            ],
            [
              { en: '-ing form', uk: '-ing форма' },
              { en: 'being + V3', uk: 'being + V3' },
              { en: 'I hate being interrupted during a deploy.', uk: 'I hate being interrupted during a deploy.' },
            ],
            [
              { en: 'modal perfect', uk: 'modal perfect' },
              { en: 'modal + have been + V3', uk: 'modal + have been + V3' },
              { en: 'This should have been caught in code review.', uk: 'This should have been caught in code review.' },
            ],
            [
              { en: 'Future Perfect', uk: 'Future Perfect' },
              { en: 'will have been + V3', uk: 'will have been + V3' },
              { en: 'By Monday, all the data will have been migrated.', uk: 'By Monday, all the data will have been migrated.' },
            ],
            [
              { en: 'Past Perfect', uk: 'Past Perfect' },
              { en: 'had been + V3', uk: 'had been + V3' },
              { en: 'The logs had been deleted before we noticed.', uk: 'The logs had been deleted before we noticed.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Passive: forms · Passive: other forms): be takes the shape the slot needs; the V3 never changes.',
            uk: 'Cambridge (Passive: forms · Passive: other forms): be набуває потрібної слоту форми; V3 не змінюється.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Grammatical but avoided: “has been being renovated”', uk: 'Граматично, але уникають: «has been being renovated»' },
          md: {
            en: 'The perfect continuous passive exists on paper — *The office **has been being refurbished** for a year* — but Cambridge marks it as uncommon and usually avoided. Say it in the active instead: ✓ *They **have been refurbishing** the office for a year*, or drop the continuous: ✓ *The office **has been under renovation** for a year.*',
            uk: 'Perfect continuous passive існує на папері — *The office **has been being refurbished** for a year*, — але Cambridge позначає його як рідкісне, якого зазвичай уникають. Скажіть це в active: ✓ *They **have been refurbishing** the office for a year* або приберіть continuous: ✓ *The office **has been under renovation** for a year.*',
          },
        },
        {
          kind: 'compare',
          a: { en: 'active infinitive / -ing — the subject DOES it', uk: 'active інфінітив / -ing — підмет РОБИТЬ' },
          b: { en: 'passive infinitive / -ing — it is done TO the subject', uk: 'passive інфінітив / -ing — це роблять З підметом' },
          rows: [
            [
              { en: 'to', uk: 'to' },
              { en: 'I need to review the PR.', uk: 'I need to review the PR.' },
              { en: 'The PR needs to be reviewed.', uk: 'The PR needs to be reviewed.' },
            ],
            [
              { en: '-ing', uk: '-ing' },
              { en: 'I don’t like interrupting people.', uk: 'I don’t like interrupting people.' },
              { en: 'I don’t like being interrupted.', uk: 'I don’t like being interrupted.' },
            ],
            [
              { en: 'modal perfect', uk: 'modal perfect' },
              { en: 'We should have caught it.', uk: 'We should have caught it.' },
              { en: 'It should have been caught.', uk: 'It should have been caught.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Postmortem verbs: should / must / could have been', uk: 'Дієслова постмортемів: should / must / could have been' },
          md: {
            en: 'Modal perfect passives are the core of incident analysis: ***should have been** caught* (the expected safeguard failed — m20), ***must have been** deleted by the cron job* (a confident deduction — m21), ***could have been** prevented* (it was possible). They name what went wrong without naming a person.',
            uk: 'Modal perfect passive — ядро аналізу інцидентів: ***should have been** caught* (очікуваний запобіжник не спрацював — m20), ***must have been** deleted by the cron job* (впевнений висновок — m21), ***could have been** prevented* (це було можливо). Вони називають, що пішло не так, не називаючи людину.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Two ways to say “it needs doing”.** After *need*, both the passive infinitive and a bare -ing have a passive meaning: *The tests **need to be updated** = The tests **need updating***. The -ing version (m16) is more informal and works with only a few verbs (*need, want* in BrE, *require*); in docs and tickets, *needs to be + V3* is the safe default.',
            uk: '**Два способи сказати «це треба зробити».** Після *need* і пасивний інфінітив, і голе -ing мають пасивне значення: *The tests **need to be updated** = The tests **need updating***. Варіант з -ing (m16) неформальніший і працює лише з кількома дієсловами (*need, want* у BrE, *require*); у документації й тікетах безпечний вибір — *needs to be + V3*.',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: '**Fine print: “Having been tested…”.** The perfect passive participle compresses a whole clause: ***Having been tested** on staging, the build was promoted to production* (= After it had been tested…). It belongs to formal writing; Section V returns to it with participle clauses (m26) — including the trap where the subject of the main clause is not the thing that was tested.',
            uk: '**Дрібний шрифт: «Having been tested…».** Perfect passive participle стискає ціле речення: ***Having been tested** on staging, the build was promoted to production* (= After it had been tested…). Це формальне письмо; Section V повернеться до цього в participle clauses (m26) — разом із пасткою, коли підмет головного речення — не те, що тестували.',
          },
        },
      ],
    },

    // ── 2. CAUSATIVE ───────────────────────────────────────────────────────
    {
      id: 'causative-have-get',
      title: { en: 'The causative: have / get something done', uk: 'Causative: have / get something done' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Ukrainian *«я полагодив ноутбук»* can mean you fixed it yourself — or that you took it to a repair shop. English separates the two. If someone else did the work and you arranged it, use the **causative**: **have + object + V3** — *I **had** my laptop **repaired***. **get + object + V3** means the same in a more casual register (Cambridge). The same shape also describes something bad that happened **to** you: *I **had** my laptop **stolen***.',
            uk: 'Українське *«я полагодив ноутбук»* може означати, що ви полагодили його самі, — або що віднесли в ремонт. Англійська розділяє ці значення. Якщо роботу зробив хтось інший, а ви це організували, вживайте **causative**: **have + object + V3** — *I **had** my laptop **repaired***. **get + object + V3** означає те саме в розмовнішому регістрі (Cambridge). Та сама форма описує й щось погане, що сталося **з** вами: *I **had** my laptop **stolen***.',
          },
        },
        {
          kind: 'sim',
          sim: 'causative-switch',
          caption: {
            en: 'Causative Switch: one action walks through six forms while the scene shows who acts — you alone, you and someone you paid, a named professional, or an unknown doer and you only affected. The words rearrange as the doer leaves the stage. The Reporting track turns People say that … into It is said that … and X is said to ….',
            uk: 'Causative Switch: одна дія проходить шість форм, а сцена показує, хто діє: ви самі, ви й той, кому ви заплатили, названий професіонал або невідомий виконавець, а ви лише постраждали. Слова переставляються, коли виконавець сходить зі сцени. Режим Reporting перетворює People say that … на It is said that … і X is said to ….',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Pattern', uk: 'Шаблон' },
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'have + object + V3', uk: 'have + object + V3' },
              { en: 'someone else does it; you arrange it', uk: 'робить хтось інший; ви організовуєте' },
              { en: 'We had our app audited.', uk: 'We had our app audited.' },
            ],
            [
              { en: 'get + object + V3', uk: 'get + object + V3' },
              { en: 'the same, less formal', uk: 'те саме, менш формально' },
              { en: 'I’m getting my laptop repaired on Monday.', uk: 'I’m getting my laptop repaired on Monday.' },
            ],
            [
              { en: 'have + person + V1', uk: 'have + person + V1' },
              { en: 'you instruct a named person', uk: 'ви доручаєте конкретній людині' },
              { en: 'I had the technician repair it.', uk: 'I had the technician repair it.' },
            ],
            [
              { en: 'get + person + to + V1', uk: 'get + person + to + V1' },
              { en: 'you persuade someone', uk: 'ви когось умовляєте' },
              { en: 'I got the vendor to extend the deadline.', uk: 'I got the vendor to extend the deadline.' },
            ],
            [
              { en: 'have + object + V3 (unwanted)', uk: 'have + object + V3 (небажане)' },
              { en: 'it happened to you; you didn’t cause it', uk: 'це сталося з вами; ви цього не спричинили' },
              { en: 'They’ve had their servers hacked.', uk: 'They’ve had their servers hacked.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Have something done · Get): have + object + V3 for arranged work and for unwanted events; have + person + infinitive without to; get + person + to-infinitive.',
            uk: 'Cambridge (Have something done · Get): have + object + V3 для організованої роботи й небажаних подій; have + person + інфінітив без to; get + person + to-infinitive.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Word order changes the meaning: “had painted” ≠ “had … painted”', uk: 'Порядок слів змінює зміст: «had painted» ≠ «had … painted»' },
          md: {
            en: '*I **had painted** the office* = Past Perfect: you painted it yourself, before some past moment. *I **had the office painted*** = causative: someone painted it for you. The only difference is where the object stands — **between** *had* and the V3 means causative (British Council makes the same contrast with *I have painted the walls* vs *I have the walls painted*).',
            uk: '*I **had painted** the office* = Past Perfect: ви пофарбували самі, до певного моменту в минулому. *I **had the office painted*** = causative: пофарбував хтось для вас. Уся різниця — де стоїть додаток: **між** *had* і V3 — це causative (British Council робить таке саме протиставлення: *I have painted the walls* vs *I have the walls painted*).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'have + person + V1 — an instruction', uk: 'have + person + V1 — доручення' },
          b: { en: 'get + person + to + V1 — persuasion', uk: 'get + person + to + V1 — умовляння' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'I’ll have IT reset your password.', uk: 'I’ll have IT reset your password.' },
              { en: 'I finally got IT to reset my password.', uk: 'I finally got IT to reset my password.' },
            ],
            [
              { en: 'Feel', uk: 'Відчуття' },
              { en: 'routine; you have the authority', uk: 'рутина; у вас є повноваження' },
              { en: 'it took effort to convince them', uk: 'довелося переконувати' },
            ],
            [
              { en: 'to?', uk: 'to?' },
              { en: 'no — ✕ have IT to reset', uk: 'ні — ✕ have IT to reset' },
              { en: 'yes — ✕ got IT reset my password', uk: 'так — ✕ got IT reset my password' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: saying you did it yourself', uk: 'Пастка україномовних: сказати, що зробили самі' },
          md: {
            en: '*«Я зробив стрижку» · «ми провели аудит» · «я поміняв шини»* often mean someone else did it. Translated word for word — ✕ *I cut my hair · We audited our app · I changed my tires* — English hears that you did it with your own hands. If a professional did it: ✓ *I **had my hair cut** · We **had our app audited** · I **got my tires changed***.',
            uk: '*«Я зробив стрижку» · «ми провели аудит» · «я поміняв шини»* часто означають, що зробив хтось інший. Дослівно — ✕ *I cut my hair · We audited our app · I changed my tires* — англійською звучить так, ніби ви зробили це власноруч. Якщо зробив професіонал: ✓ *I **had my hair cut** · We **had our app audited** · I **got my tires changed***.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**The causative in every tense.** *have / get* carries the tense, exactly like *be* in the passive: *I’m **having** the car serviced tomorrow* (an arrangement) · *I’ve just **had** my hair cut* · *We need to **get** the certificate renewed before it expires* · *You should **have** that mole checked.* Cambridge notes these structures are more common in speech.',
            uk: '**Causative у кожному часі.** *have / get* несе час, точно як *be* у passive: *I’m **having** the car serviced tomorrow* (домовленість) · *I’ve just **had** my hair cut* · *We need to **get** the certificate renewed before it expires* · *You should **have** that mole checked.* Cambridge зазначає, що ці конструкції поширеніші в мовленні.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: “get it running” and “make someone do”', uk: 'Дрібний шрифт: «get it running» і «make someone do»' },
          md: {
            en: '*get + object + -ing* means to make something start happening: *We finally **got** the build **running** again.* And *make + person + V1* is the forceful neighbor of *have*: *The auditors **made** us **rotate** every key* (no choice — no *to*, like *have*). In the passive, *make* takes *to*: *We **were made to rotate** every key* (m16).',
            uk: '*get + object + -ing* означає змусити щось почати працювати: *We finally **got** the build **running** again.* А *make + person + V1* — силовий сусід *have*: *The auditors **made** us **rotate** every key* (вибору не було — без *to*, як у *have*). У passive *make* бере *to*: *We **were made to rotate** every key* (m16).',
          },
        },
      ],
    },

    // ── 3. IT IS SAID ──────────────────────────────────────────────────────
    {
      id: 'it-is-said',
      title: { en: 'It is said that … / X is said to …', uk: 'It is said that … / X is said to …' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'When the source of a claim is vague or unimportant — *people, experts, the reports* — English can remove it with the **impersonal passive**. It works with reporting verbs: *allege, believe, claim, consider, estimate, expect, know, report, say, think, understand* (British Council). There are two frames, and you choose one: ***It is said that** the CEO is leaving* or *The CEO **is said to be** leaving.*',
            uk: 'Коли джерело твердження розмите або неважливе — *люди, експерти, звіти*, — англійська може прибрати його за допомогою **безособового passive**. Він працює з дієсловами звітування: *allege, believe, claim, consider, estimate, expect, know, report, say, think, understand* (British Council). Є дві рамки, і ви обираєте одну: ***It is said that** the CEO is leaving* або *The CEO **is said to be** leaving.*',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'What is reported', uk: 'Про що звіт' },
            { en: 'Frame A: It is V3 that …', uk: 'Рамка A: It is V3 that …' },
            { en: 'Frame B: X is V3 to …', uk: 'Рамка B: X is V3 to …' },
          ],
          rows: [
            [
              { en: 'a fact at the same time', uk: 'факт у той самий час' },
              { en: 'It is believed that the leak is in the worker.', uk: 'It is believed that the leak is in the worker.' },
              { en: 'The leak is believed to be in the worker.', uk: 'The leak is believed to be in the worker.' },
            ],
            [
              { en: 'something in progress', uk: 'щось у процесі' },
              { en: 'It is said that the CEO is leaving.', uk: 'It is said that the CEO is leaving.' },
              { en: 'The CEO is said to be leaving.', uk: 'The CEO is said to be leaving.' },
            ],
            [
              { en: 'something earlier', uk: 'щось раніше' },
              { en: 'It is believed that the outage started in the EU region.', uk: 'It is believed that the outage started in the EU region.' },
              { en: 'The outage is believed to have started in the EU region.', uk: 'The outage is believed to have started in the EU region.' },
            ],
          ],
          caption: {
            en: 'British Council (Advanced passives review): it + passive reporting verb + that-clause, or subject + passive reporting verb + to-infinitive. The infinitive shows the time relation: to + V1 (same time) · to be + -ing (in progress) · to have + V3 (earlier).',
            uk: 'British Council (Advanced passives review): it + пасивне дієслово звітування + that-clause, або підмет + пасивне дієслово звітування + to-infinitive. Інфінітив показує часове відношення: to + V1 (одночасно) · to be + -ing (у процесі) · to have + V3 (раніше).',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Pick a frame: ✕ “The CEO is said that he is leaving”', uk: 'Оберіть рамку: ✕ «The CEO is said that he is leaving»' },
          md: {
            en: 'Frame A starts with *It* and keeps the *that*-clause; frame B moves the topic to the front and switches to *to*. A mix of the two is ungrammatical: ✕ *The CEO **is said that** he is leaving.* ✓ ***It is said that** the CEO is leaving* · ✓ *The CEO **is said to be** leaving.*',
            uk: 'Рамка A починається з *It* і зберігає *that*-речення; рамка B виносить тему на початок і переходить на *to*. Суміш двох неграматична: ✕ *The CEO **is said that** he is leaving.* ✓ ***It is said that** the CEO is leaving* · ✓ *The CEO **is said to be** leaving.*',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'The voice of incident updates', uk: 'Голос оновлень про інциденти' },
          md: {
            en: 'Status pages and incident reports love frame B, because it is careful: it reports the current belief without promising it is final. *The outage **is believed to have been caused** by a misconfigured load balancer.* *Around 4% of requests **are estimated to have failed**.* Cambridge describes exactly this effect: reporting-verb passives create distance from a personal claim.',
            uk: 'Status pages і звіти про інциденти люблять рамку B, бо вона обережна: повідомляє поточне припущення, не обіцяючи, що воно остаточне. *The outage **is believed to have been caused** by a misconfigured load balancer.* *Around 4% of requests **are estimated to have failed**.* Cambridge описує саме цей ефект: пасив дієслів звітування створює дистанцію від особистого твердження.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Reporting from the past.** Move the reporting verb back and keep the same logic: *It **was thought** that the fix was safe* · *The fix **was thought to be** safe* · *The data **was reported to have been** restored by 9 a.m.* The infinitive still shows the relation to the reporting time, not to now.',
            uk: '**Звіт із минулого.** Відсуньте дієслово звітування в минуле й тримайте ту саму логіку: *It **was thought** that the fix was safe* · *The fix **was thought to be** safe* · *The data **was reported to have been** restored by 9 a.m.* Інфінітив і далі показує відношення до часу звітування, а не до «зараз».',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: '**Fine print: “There is believed to be…”.** With *there is / there are* the dummy *there* takes the subject slot of frame B: ***There is believed to be** a memory leak in the worker* · ***There are said to be** over 200 open tickets.* It is the standard way to report the existence of something without committing to it.',
            uk: '**Дрібний шрифт: «There is believed to be…».** З *there is / there are* формальне *there* займає місце підмета рамки B: ***There is believed to be** a memory leak in the worker* · ***There are said to be** over 200 open tickets.* Це стандартний спосіб повідомити про існування чогось, не беручи на себе відповідальності за твердження.',
          },
        },
      ],
    },

    // ── 4. REGISTER ────────────────────────────────────────────────────────
    {
      id: 'register',
      title: { en: 'Register: when the passive helps and when it hides', uk: 'Регістр: коли passive допомагає, а коли ховає' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Every tool in this module moves a person out of the spotlight. That is exactly right for **system behavior** (*Requests are rate-limited*), **analysis** (*It should have been caught*) and **unconfirmed reports** (*It is believed to…*). It is exactly wrong for **ownership and commitments**, where the reader needs to know who: *We will fix it by Friday*, not *It will be fixed*.',
            uk: 'Кожен інструмент цього модуля прибирає людину з центру уваги. Це саме те, що треба для **поведінки системи** (*Requests are rate-limited*), **аналізу** (*It should have been caught*) і **непідтверджених звітів** (*It is believed to…*). І саме те, чого не треба для **відповідальності й зобовʼязань**, де читач має знати, хто: *We will fix it by Friday*, а не *It will be fixed*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Context', uk: 'Контекст' },
            { en: 'Natural choice', uk: 'Природний вибір' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'API docs', uk: 'API-документація' },
              { en: 'passive: behavior, no doer', uk: 'passive: поведінка, без виконавця' },
              { en: 'Tokens are rotated every 24 hours.', uk: 'Tokens are rotated every 24 hours.' },
            ],
            [
              { en: 'Incident update', uk: 'Оновлення про інцидент' },
              { en: 'impersonal: careful, unconfirmed', uk: 'безособово: обережно, не підтверджено' },
              { en: 'The issue is believed to be resolved.', uk: 'The issue is believed to be resolved.' },
            ],
            [
              { en: 'Postmortem analysis', uk: 'Аналіз у постмортемі' },
              { en: 'modal perfect passive', uk: 'modal perfect passive' },
              { en: 'The alert should have been triggered at 80%.', uk: 'The alert should have been triggered at 80%.' },
            ],
            [
              { en: 'Action items, emails', uk: 'Action items, листи' },
              { en: 'active: who does what', uk: 'active: хто що робить' },
              { en: 'I’ll add the alert by Friday.', uk: 'I’ll add the alert by Friday.' },
            ],
            [
              { en: 'Slack / speech', uk: 'Slack / мовлення' },
              { en: 'get-causative, active', uk: 'get-causative, active' },
              { en: 'I got the cert renewed.', uk: 'I got the cert renewed.' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: 'Impersonal — distance', uk: 'Безособово — дистанція' },
          b: { en: 'Personal — ownership', uk: 'Особисто — відповідальність' },
          rows: [
            [
              { en: 'Status', uk: 'Статус' },
              { en: 'It is believed that the issue is fixed.', uk: 'It is believed that the issue is fixed.' },
              { en: 'We think the issue is fixed — we’re monitoring.', uk: 'We think the issue is fixed — we’re monitoring.' },
            ],
            [
              { en: 'Decision', uk: 'Рішення' },
              { en: 'It was decided to postpone the release.', uk: 'It was decided to postpone the release.' },
              { en: 'I decided to postpone the release.', uk: 'I decided to postpone the release.' },
            ],
            [
              { en: 'Reader asks', uk: 'Читач питає' },
              { en: '“Who believes? Who decided?”', uk: '«Хто вважає? Хто вирішив?»' },
              { en: 'nothing — it’s clear', uk: 'нічого — усе ясно' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: '“It was decided…” — the passive that hides a decision', uk: '«It was decided…» — passive, що ховає рішення' },
          md: {
            en: 'In a team, *It was decided that…* makes people ask *by whom?* — and it reads as if nobody wants to own the call. If you made the decision, say *I decided*; if the team did, *We agreed*. Keep the impersonal voice for what is genuinely nobody’s claim: system behavior, estimates, unconfirmed reports.',
            uk: 'У команді *It was decided that…* змушує питати *ким?* — і звучить так, ніби ніхто не хоче брати рішення на себе. Якщо рішення ухвалили ви — *I decided*; якщо команда — *We agreed*. Безособовий голос лишайте для того, що справді нічиє твердження: поведінка системи, оцінки, непідтверджені звіти.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Heavy passive prose.** Stacked passives and nouns — *Consideration was given to the implementation of a caching layer* — are hard to read. Plain-language guides for technical writing push the same fix: find the real actor and the real verb. *We considered adding a cache.* Use the passive where the doer truly doesn’t matter, not to sound formal.',
            uk: '**Важка пасивна проза.** Нагромадження passive й іменників — *Consideration was given to the implementation of a caching layer* — важко читати. Посібники з простої мови для технічного письма радять те саме: знайдіть справжнього виконавця і справжнє дієслово. *We considered adding a cache.* Вживайте passive там, де виконавець справді не важливий, а не щоб звучати формально.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Every verb slot can be passive: be takes the slot’s shape — to be done · being done · have been done · to have been done.',
      uk: 'Кожен слот дієслова може бути пасивним: be набуває форми слоту — to be done · being done · have been done · to have been done.',
    },
    {
      en: 'Modal perfect passives (should / must / could have been + V3) are the language of incident analysis.',
      uk: 'Modal perfect passive (should / must / could have been + V3) — мова аналізу інцидентів.',
    },
    {
      en: 'Causative: have / get + object + V3 = someone else did it for you (get = informal); the same shape covers unwanted events (had my laptop stolen).',
      uk: 'Causative: have / get + object + V3 = хтось зробив це для вас (get — розмовне); та сама форма покриває небажані події (had my laptop stolen).',
    },
    {
      en: 'have + person + V1 (no to) · get + person + to + V1 · make + person + V1 (force).',
      uk: 'have + person + V1 (без to) · get + person + to + V1 · make + person + V1 (примус).',
    },
    {
      en: 'Impersonal reports: It is said that … OR X is said to (be / have + V3) … — pick one frame; the infinitive shows the time relation.',
      uk: 'Безособові звіти: It is said that … АБО X is said to (be / have + V3) … — оберіть одну рамку; інфінітив показує часове відношення.',
    },
    {
      en: 'Passive and impersonal forms suit system behavior, analysis and unconfirmed reports; ownership and commitments need the active.',
      uk: 'Passive і безособові форми пасують для поведінки системи, аналізу й непідтверджених звітів; відповідальність і зобовʼязання потребують active.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“I repaired my laptop at the service center”', uk: '«I repaired my laptop at the service center»' },
      body: {
        en: 'If a professional did it, use the causative: I had / got my laptop repaired.',
        uk: 'Якщо зробив професіонал — causative: I had / got my laptop repaired.',
      },
    },
    {
      title: { en: '“I had painted the office” for the causative', uk: '«I had painted the office» замість causative' },
      body: {
        en: 'Object position decides: had painted the office = you did it (Past Perfect); had the office painted = someone did it for you.',
        uk: 'Вирішує позиція додатка: had painted the office = ви самі (Past Perfect); had the office painted = хтось для вас.',
      },
    },
    {
      title: { en: '“We had a firm to audit our app”', uk: '«We had a firm to audit our app»' },
      body: {
        en: 'have + person takes V1 without to; only get takes to: We had a firm audit it · We got a firm to audit it.',
        uk: 'have + person бере V1 без to; to бере лише get: We had a firm audit it · We got a firm to audit it.',
      },
    },
    {
      title: { en: '“The CEO is said that…”', uk: '«The CEO is said that…»' },
      body: {
        en: 'Either It is said that the CEO… or The CEO is said to… — never a mix.',
        uk: 'Або It is said that the CEO…, або The CEO is said to… — не суміш.',
      },
    },
    {
      title: { en: '“The outage is believed to start…” for an earlier event', uk: '«The outage is believed to start…» для попередньої події' },
      body: {
        en: 'An event before the reporting time takes the perfect infinitive: is believed to have started.',
        uk: 'Подія до моменту звітування бере perfect infinitive: is believed to have started.',
      },
    },
    {
      title: { en: '“has been being + V3”', uk: '«has been being + V3»' },
      body: {
        en: 'The perfect continuous passive is avoided — rephrase in the active: They have been refurbishing the office.',
        uk: 'Perfect continuous passive уникають — перефразуйте в active: They have been refurbishing the office.',
      },
    },
    {
      title: { en: '“It was decided…” about your own decision', uk: '«It was decided…» про власне рішення' },
      body: {
        en: 'The impersonal voice hides ownership. If you decided, say I decided; if the team did, We agreed.',
        uk: 'Безособовий голос ховає відповідальність. Якщо вирішили ви — I decided; якщо команда — We agreed.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-passive-advanced-1',
      kind: 'gap',
      sentence: 'The release notes need ___ (update) before Friday.',
      answers: ['to be updated', 'updating'],
      hint: { en: 'passive infinitive', uk: 'passive infinitive' },
      explain: {
        en: 'The notes don’t update anything — they are updated: to be + V3. (need updating also works, more informally.)',
        uk: 'Нотатки нічого не оновлюють — їх оновлюють: to be + V3. (need updating теж працює, неформальніше.)',
      },
      level: 'b2',
      tags: ['passive', 'infinitive'],
    },
    {
      id: 'ex-passive-advanced-2',
      kind: 'mcq',
      prompt: { en: 'This bug should ___ in code review.', uk: 'Цей баг мали ___ на code review.' },
      options: ['have been caught', 'be caught', 'have caught'],
      correct: 0,
      explain: {
        en: 'A past expectation that failed, with the bug as the subject → should have been + V3.',
        uk: 'Минуле очікування, що не справдилося, підмет — баг → should have been + V3.',
      },
      level: 'b2',
      tags: ['passive', 'modals', 'postmortem'],
    },
    {
      id: 'ex-passive-advanced-3',
      kind: 'mcq',
      prompt: { en: 'I hate ___ in the middle of a deploy.', uk: 'Ненавиджу, коли мене ___ посеред деплою.' },
      options: ['interrupting', 'being interrupted', 'to interrupt'],
      correct: 1,
      explain: {
        en: 'Someone interrupts you → the passive -ing form: being + V3.',
        uk: 'Вас переривають → пасивна -ing форма: being + V3.',
      },
      level: 'b2',
      tags: ['passive', 'gerund'],
    },
    {
      id: 'ex-passive-advanced-4',
      kind: 'gap',
      sentence: 'By Monday, all the data ___ (migrate).',
      answers: ['will have been migrated'],
      hint: { en: 'Future Perfect passive', uk: 'Future Perfect passive' },
      explain: {
        en: 'Finished before a future point, data as the subject → will have been + V3.',
        uk: 'Завершиться до моменту в майбутньому, підмет — дані → will have been + V3.',
      },
      level: 'b2',
      tags: ['passive', 'form'],
    },
    {
      id: 'ex-passive-advanced-5',
      kind: 'mcq',
      prompt: { en: 'I ___ at the barber’s yesterday.', uk: 'Я вчора підстригся в перукарні.' },
      options: ['cut my hair', 'had my hair cut', 'had cut my hair'],
      correct: 1,
      explain: {
        en: 'The barber did it → causative have + object + V3. had cut my hair = you did it yourself, before another past moment.',
        uk: 'Підстриг перукар → causative have + object + V3. had cut my hair = ви самі, до іншого моменту в минулому.',
      },
      level: 'b2',
      tags: ['causative', 'ua-trap'],
    },
    {
      id: 'ex-passive-advanced-6',
      kind: 'gap',
      sentence: 'We had a security firm ___ (audit) our app.',
      answers: ['audit'],
      hint: { en: 'have + person + …', uk: 'have + person + …' },
      explain: {
        en: 'have + person + V1 without to.',
        uk: 'have + person + V1 без to.',
      },
      level: 'b2',
      tags: ['causative'],
    },
    {
      id: 'ex-passive-advanced-7',
      kind: 'gap',
      sentence: 'We finally got the vendor ___ (extend) the deadline.',
      answers: ['to extend'],
      hint: { en: 'get + person + …', uk: 'get + person + …' },
      explain: {
        en: 'get + person + to + V1 = you persuaded them.',
        uk: 'get + person + to + V1 = ви їх умовили.',
      },
      level: 'b2',
      tags: ['causative'],
    },
    {
      id: 'ex-passive-advanced-8',
      kind: 'mcq',
      prompt: { en: 'She had her phone ___ on the train.', uk: 'У неї вкрали телефон у поїзді.' },
      options: ['stolen', 'steal', 'stole'],
      correct: 0,
      explain: {
        en: 'An unwanted event that happened to her → have + object + V3 (steal → stole → stolen).',
        uk: 'Небажана подія, що сталася з нею → have + object + V3 (steal → stole → stolen).',
      },
      level: 'b2',
      tags: ['causative', 'irregular'],
    },
    {
      id: 'ex-passive-advanced-9',
      kind: 'mcq',
      prompt: {
        en: '“I had painted the office” vs “I had the office painted” — what is the difference?',
        uk: '«I had painted the office» vs «I had the office painted» — у чому різниця?',
      },
      options: [
        'There is no difference.',
        'In the first you painted it yourself; in the second someone painted it for you.',
        'In the first someone else painted it.',
      ],
      correct: 1,
      explain: {
        en: 'Object between had and the V3 = causative. had painted + object = Past Perfect, your own work.',
        uk: 'Додаток між had і V3 = causative. had painted + object = Past Perfect, ваша власна робота.',
      },
      level: 'b2',
      tags: ['causative'],
    },
    {
      id: 'ex-passive-advanced-10',
      kind: 'mcq',
      prompt: { en: 'It ___ that the outage started in the EU region.', uk: 'Вважається, що збій почався в регіоні EU.' },
      options: ['is believed', 'believes', 'is believing'],
      correct: 0,
      explain: {
        en: 'Frame A of the impersonal passive: It + is + V3 + that.',
        uk: 'Рамка A безособового passive: It + is + V3 + that.',
      },
      level: 'b2',
      tags: ['passive', 'reporting'],
    },
    {
      id: 'ex-passive-advanced-11',
      kind: 'mcq',
      prompt: { en: 'The CEO is said ___ the company next month.', uk: 'Кажуть, що CEO наступного місяця йде з компанії.' },
      options: ['that he leaves', 'to be leaving', 'leaving'],
      correct: 1,
      explain: {
        en: 'Frame B: subject + is said + to-infinitive. A planned, ongoing change → to be + -ing.',
        uk: 'Рамка B: підмет + is said + to-infinitive. Запланована, вже триваюча зміна → to be + -ing.',
      },
      level: 'b2',
      tags: ['passive', 'reporting'],
    },
    {
      id: 'ex-passive-advanced-12',
      kind: 'gap',
      sentence: 'The outage is believed ___ (start) in the EU region last night.',
      answers: ['to have started'],
      hint: { en: 'earlier than the believing', uk: 'раніше, ніж «вважають»' },
      explain: {
        en: 'The start came before the belief → perfect infinitive: to have + V3.',
        uk: 'Початок був раніше за припущення → perfect infinitive: to have + V3.',
      },
      level: 'b2',
      tags: ['passive', 'reporting'],
    },
    {
      id: 'ex-passive-advanced-13',
      kind: 'mcq',
      prompt: { en: 'There is thought ___ a memory leak in the worker.', uk: 'Вважається, що у воркері є витік памʼяті.' },
      options: ['to be', 'being', 'that is'],
      correct: 0,
      explain: {
        en: 'there takes the subject slot of frame B: There is thought to be ….',
        uk: 'there займає місце підмета в рамці B: There is thought to be ….',
      },
      level: 'c1',
      tags: ['passive', 'reporting'],
    },
    {
      id: 'ex-passive-advanced-14',
      kind: 'mcq',
      prompt: { en: 'Which sentence fits API documentation best?', uk: 'Яке речення найкраще пасує для API-документації?' },
      options: [
        'Requests are rate-limited to 100 per minute.',
        'We rate-limit your requests to 100 per minute, okay?',
        'Someone rate-limits the requests to 100 per minute.',
      ],
      correct: 0,
      explain: {
        en: 'System behavior, no doer needed → passive. The other two add a chatty or empty doer.',
        uk: 'Поведінка системи, виконавець не потрібен → passive. Інші два додають балакучого або порожнього виконавця.',
      },
      level: 'b2',
      tags: ['passive', 'register'],
    },
    {
      id: 'ex-passive-advanced-15',
      kind: 'mcq',
      prompt: {
        en: 'You are telling your manager about your own missed deadline. Which is best?',
        uk: 'Ви розповідаєте менеджерові про власний зірваний дедлайн. Що найкраще?',
      },
      options: [
        'It was decided that the deadline would be missed.',
        'I missed the deadline — here is the new plan.',
        'The deadline is believed to have been missed.',
      ],
      correct: 1,
      explain: {
        en: 'Ownership needs the active. The impersonal versions sound evasive.',
        uk: 'Відповідальність потребує active. Безособові варіанти звучать як ухиляння.',
      },
      level: 'b2',
      tags: ['passive', 'register'],
    },
    {
      id: 'ex-passive-advanced-16',
      kind: 'mcq',
      prompt: { en: 'Which is the most natural way to say it?', uk: 'Як сказати найприродніше?' },
      options: [
        'The office has been being refurbished for a year.',
        'They have been refurbishing the office for a year.',
        'The office is refurbished for a year.',
      ],
      correct: 1,
      explain: {
        en: 'The perfect continuous passive is grammatical but avoided (Cambridge) — use the active. The third has the wrong tense.',
        uk: 'Perfect continuous passive граматичний, але його уникають (Cambridge) — вживайте active. У третьому неправильний час.',
      },
      level: 'b2',
      tags: ['passive', 'form'],
    },
  ],
  seeAlso: ['m14-passive-intro', 'm16-gerund-infinitive', 'm20-advice-criticism', 'm21-deduction-probability', 'm15-reported-speech', 'm26-participle-clauses'],
  sources: [
    {
      title: 'Cambridge Dictionary — Passive: forms',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/passive-forms',
    },
    {
      title: 'Cambridge Dictionary — Passive: other forms',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/passive-other-forms',
    },
    {
      title: 'Cambridge Dictionary — Passive: uses',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/passive-uses',
    },
    {
      title: 'Cambridge Dictionary — Have something done',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/have-something-done',
    },
    {
      title: 'Cambridge Dictionary — Get',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/get',
    },
    {
      title: 'British Council LearnEnglish — Advanced passives review (C1)',
      url: 'https://learnenglish.britishcouncil.org/grammar/c1-grammar/advanced-passives-review',
    },
    {
      title: 'British Council LearnEnglish — Active and passive voice',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/active-passive-voice',
    },
  ],
};
