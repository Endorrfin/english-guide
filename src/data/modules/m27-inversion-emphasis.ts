import type { Module } from '../types';

/*
 * CHANGED (A4): M27 · Inversion, cleft & emphasis — Section V Advanced Grammar, wave A4 (★ emphasis-spotlight,
 * TokenMorph family). Authored EN first, UA second; grammar terms stay English in both languages; US
 * English with a work/dev lean. Facts verified against British Council C1 (Inversion after negative
 * adverbials — the adverbial goes first and the subject and auxiliary swap; no auxiliary → do / did;
 * never · rarely · seldom with perfect tenses and modals; hardly · scarcely · barely … when, no sooner …
 * than, usually with the past perfect; only after / when / then / later → inversion in the main clause;
 * under no circumstances · on no account · at no time · in no way · on no condition · not until · not
 * only; little = negative meaning · Emphasis: cleft sentences, inversion and auxiliaries — it + be +
 * the fronted element; what-clauses + be emphasise what is outside them and are common in speech;
 * emphatic do / does / did; BrE emphatic do in commands) and Cambridge (Cleft sentences — known
 * information in the that / wh-clause, new information in focus; What we need to do is get new
 * batteries · Fronting — objects, complements and adjuncts move to the front for focus; a fronted
 * prepositional phrase can swap subject and verb: On the corner stood a little shop · Word order and focus).
 * Spine: ONE rule ties the module together — moving something to the front puts it in the spotlight,
 * and only a NEGATIVE or RESTRICTIVE adverbial at the front switches on question order.
 * No overlap: conditional inversion (Had I known · Should you · Were it) lives in m23 and m29;
 * relative clauses (who / which / that as relative pronouns) live in m25.
 */
export const m27: Module = {
  id: 'm27-inversion-emphasis',
  num: 27,
  section: 's4-advanced-grammar',
  order: 5,
  level: 'c1',
  title: { en: 'Inversion, cleft & emphasis', uk: 'Інверсія, cleft і емфаза' },
  tagline: {
    en: 'Never have I… · Not only did we… · It was Anna who… · What we need is… — how English moves words to the front to put them in the spotlight, and why “Never I have seen” and “Rarely we check” break.',
    uk: 'Never have I… · Not only did we… · It was Anna who… · What we need is… — як англійська виносить слова на початок, щоб висвітлити їх, і чому «Never I have seen» та «Rarely we check» зламані.',
  },
  readMins: 22,
  mentalModel: {
    en: 'Ukrainian puts stress anywhere by moving words freely: «Ніколи я такого не бачив», «Саме Анна знайшла баг». English word order is fixed, so emphasis needs **machinery**. There are three tools. **Inversion:** put a **negative or restrictive adverbial** (*Never, Rarely, Not only, Hardly, Only then, Under no circumstances*) at the front, and the rest of the clause takes **question order**. The **operator** (the auxiliary, or *do / does / did* if there is none) jumps in front of the subject: *I have never seen…* → ***Never have I** seen…* · *We rarely check…* → ***Rarely do we** check…*. **Clefts:** split the sentence and frame the focus: ***It was Anna who** found the bug* · ***What we need is** a rollback plan*. **Fronting:** move an object or a time phrase to the front for contrast, with normal order: ***The edge cases** we will handle later.* Only the negative ones invert.',
    uk: 'Українська ставить наголос будь-де, вільно переставляючи слова: «Ніколи я такого не бачив», «Саме Анна знайшла баг». Порядок слів в англійській фіксований, тож для емфази потрібен **механізм**. Інструментів три. **Інверсія:** поставте на початок **заперечний чи обмежувальний адвербіал** (*Never, Rarely, Not only, Hardly, Only then, Under no circumstances*) — і решта клаузи набирає **порядку питання**. **Оператор** (допоміжне дієслово, а якщо його немає — *do / does / did*) перестрибує перед підмет: *I have never seen…* → ***Never have I** seen…* · *We rarely check…* → ***Rarely do we** check…*. **Cleft:** розщепіть речення й обрамте фокус: ***It was Anna who** found the bug* · ***What we need is** a rollback plan*. **Fronting:** винесіть додаток чи часову фразу на початок для контрасту, зі звичайним порядком: ***The edge cases** we will handle later.* Інвертують лише заперечні.',
  },
  topics: [
    // ── 1. NEGATIVE INVERSION ──────────────────────────────────────────────
    {
      id: 'negative-inversion',
      title: { en: 'Negative inversion: Never have I… · Rarely do we…', uk: 'Негативна інверсія: Never have I… · Rarely do we…' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Inversion means reversing the normal subject–verb order. After a **negative or restrictive adverbial** at the start of a sentence, English uses the order of a question: adverbial + **operator** + subject + main verb (British Council). It adds emphasis and sounds formal, persuasive, even dramatic: it is common in speeches, opinion pieces, product launches and careful writing, rare in casual chat.',
            uk: 'Інверсія — це обернений порядок підмета й дієслова. Після **заперечного чи обмежувального адвербіала** на початку речення англійська вживає порядок питання: адвербіал + **оператор** + підмет + основне дієслово (British Council). Це додає емфази й звучить формально, переконливо, навіть драматично: таке поширене у промовах, колонках, на презентаціях продуктів і в ретельному письмі, а в невимушеному чаті рідкісне.',
          },
        },
        {
          kind: 'sim',
          sim: 'emphasis-spotlight',
          caption: {
            en: 'Emphasis Spotlight: pick a construction and step through. In an inversion walk the adverbial flies to the front first (✕ still statement order), then the operator jumps over the subject (✓). With no auxiliary, did / do arrives and the verb drops back to its base form. The operator is computed from the sentence’s facts; the order strip, the rule and the verdict are computed too. Fix the classic errors walks six UA-speaker traps to two fixes each.',
            uk: 'Emphasis Spotlight: оберіть конструкцію й пройдіть кроки. В інверсії адвербіал спершу перелітає на початок (✕ порядок ще розповідний), потім оператор перестрибує підмет (✓). Без допоміжного дієслова приходить did / do, а дієслово повертається до базової форми. Оператор обчислюється з фактів речення; смужка порядку, правило й вердикт теж обчислюються. Режим «Виправити класичні помилки» проводить шість пасток україномовних через два виправлення.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Neutral sentence', uk: 'Нейтральне речення' },
            { en: 'Operator', uk: 'Оператор' },
            { en: 'Inverted', uk: 'Інверсія' },
          ],
          rows: [
            [
              { en: 'I have never seen such a clean migration.', uk: 'I have never seen such a clean migration.' },
              { en: 'have — the auxiliary moves', uk: 'have — переставляється допоміжне' },
              { en: 'Never have I seen such a clean migration.', uk: 'Never have I seen such a clean migration.' },
            ],
            [
              { en: 'You should push to main under no circumstances.', uk: 'You should push to main under no circumstances.' },
              { en: 'should — a modal moves', uk: 'should — переставляється модальне' },
              { en: 'Under no circumstances should you push to main.', uk: 'Under no circumstances should you push to main.' },
            ],
            [
              { en: 'We rarely check the backups.', uk: 'We rarely check the backups.' },
              { en: 'none → do (Present Simple)', uk: 'немає → do (Present Simple)' },
              { en: 'Rarely do we check the backups.', uk: 'Rarely do we check the backups.' },
            ],
            [
              { en: 'We seldom tested the restore path.', uk: 'We seldom tested the restore path.' },
              { en: 'none → did (Past Simple)', uk: 'немає → did (Past Simple)' },
              { en: 'Seldom did we test the restore path.', uk: 'Seldom did we test the restore path.' },
            ],
          ],
          caption: {
            en: 'British Council (Inversion after negative adverbials): “If there is no auxiliary verb, we need to add one … do for present simple verbs and did for past simple verbs.”',
            uk: 'British Council (Inversion after negative adverbials): якщо допоміжного дієслова немає, його треба додати — do для Present Simple і did для Past Simple.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Adverbial group', uk: 'Група адвербіалів' },
            { en: 'Typical tense', uk: 'Типовий час' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'never · rarely · seldom', uk: 'never · rarely · seldom' },
              { en: 'Present / Past Perfect, modals', uk: 'Present / Past Perfect, модальні' },
              { en: 'Rarely can a team ship that fast without breaking something.', uk: 'Rarely can a team ship that fast without breaking something.' },
            ],
            [
              { en: 'hardly · scarcely · barely … when', uk: 'hardly · scarcely · barely … when' },
              { en: 'Past Perfect — one event right after another', uk: 'Past Perfect — одна подія одразу після іншої' },
              { en: 'Hardly had we deployed when the alerts fired.', uk: 'Hardly had we deployed when the alerts fired.' },
            ],
            [
              { en: 'no sooner … than', uk: 'no sooner … than' },
              { en: 'Past Perfect', uk: 'Past Perfect' },
              { en: 'No sooner had the demo started than the Wi-Fi dropped.', uk: 'No sooner had the demo started than the Wi-Fi dropped.' },
            ],
            [
              { en: 'only after · only when · only then · only later', uk: 'only after · only when · only then · only later' },
              { en: 'any — inversion in the MAIN clause', uk: 'будь-який — інверсія в ГОЛОВНІЙ клаузі' },
              { en: 'Only after the review did we merge the PR.', uk: 'Only after the review did we merge the PR.' },
            ],
            [
              { en: 'under no circumstances · on no account · at no time · in no way · not until', uk: 'under no circumstances · on no account · at no time · in no way · not until' },
              { en: 'any', uk: 'будь-який' },
              { en: 'At no time did we share customer data.', uk: 'At no time did we share customer data.' },
            ],
            [
              { en: 'little (= not at all)', uk: 'little (= зовсім не)' },
              { en: 'often know / realize', uk: 'часто know / realize' },
              { en: 'Little did we know that the demo would go viral.', uk: 'Little did we know that the demo would go viral.' },
            ],
          ],
          caption: {
            en: 'British Council C1: the adverbial groups and their typical tenses. Only + time phrase inverts the main clause, after the time phrase: Only when they refilled my glass did I realise it was broken.',
            uk: 'British Council C1: групи адвербіалів і їхні типові часи. Only + часова фраза інвертує головну клаузу, після часової фрази: Only when they refilled my glass did I realise it was broken.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“Never I have seen…” — fronting without inversion', uk: '«Never I have seen…» — винесли, але не інвертували' },
          md: {
            en: 'Ukrainian «Ніколи я не бачив» just moves the stress, so learners move *Never* and stop there. In English, the fronted negative **switches on question order**: ✕ *Never I have seen such a mess* → ✓ ***Never have I** seen such a mess.* If the sentence sounds too heavy, go back to the neutral order: ✓ *I have never seen such a mess.* Both are correct; only the half-way version is not.',
            uk: 'Українське «Ніколи я не бачив» лише зміщує наголос, тож учні переносять *Never* і на цьому зупиняються. В англійській винесене заперечення **вмикає порядок питання**: ✕ *Never I have seen such a mess* → ✓ ***Never have I** seen such a mess.* Якщо речення звучить надто важко, поверніться до нейтрального порядку: ✓ *I have never seen such a mess.* Обидва варіанти правильні; неправильний лише проміжний.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“Rarely we check…” / “did we fixed” — do-support', uk: '«Rarely we check…» / «did we fixed» — do-support' },
          md: {
            en: 'Inversion works exactly like a question. *Do we check the backups?* → ***Rarely do we** check the backups.* *Did we fix it?* → ***Not only did we fix** it…* So two errors come from forgetting the question: ✕ *Rarely we check* (no operator) and ✕ *did we **fixed*** (the past is already in *did*, so the verb goes back to the base form).',
            uk: 'Інверсія працює точнісінько як питання. *Do we check the backups?* → ***Rarely do we** check the backups.* *Did we fix it?* → ***Not only did we fix** it…* Тож дві помилки виникають, коли забувають про питання: ✕ *Rarely we check* (немає оператора) і ✕ *did we **fixed*** (минулий час уже є в *did*, тож дієслово повертається до базової форми).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'hardly / scarcely / barely … when', uk: 'hardly / scarcely / barely … when' },
          b: { en: 'no sooner … than', uk: 'no sooner … than' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'Hardly had we deployed when the alerts fired.', uk: 'Hardly had we deployed when the alerts fired.' },
              { en: 'No sooner had we deployed than the alerts fired.', uk: 'No sooner had we deployed than the alerts fired.' },
            ],
            [
              { en: 'Why the partner', uk: 'Чому така пара' },
              { en: 'when — a time clause', uk: 'when — часова клауза' },
              { en: 'than — sooner is a comparative', uk: 'than — sooner є порівняльною формою' },
            ],
            [
              { en: 'Wrong', uk: 'Хибно' },
              { en: '✕ Hardly had we deployed than …', uk: '✕ Hardly had we deployed than …' },
              { en: '✕ No sooner had we deployed when …', uk: '✕ No sooner had we deployed when …' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Not until and only + time.** The inversion goes in the **main** clause, after the whole time phrase, which can contain its own clause in normal order: ***Not until** the logs arrived **did we understand** the cause.* · ***Only when** the client complained **did we notice** the bug.* Learners often invert the wrong clause (✕ *Not until did the logs arrive…*) or none.',
            uk: '**Not until і only + час.** Інверсія стоїть у **головній** клаузі, після всієї часової фрази, яка може містити власну клаузу зі звичайним порядком: ***Not until** the logs arrived **did we understand** the cause.* · ***Only when** the client complained **did we notice** the bug.* Учні часто інвертують не ту клаузу (✕ *Not until did the logs arrive…*) або жодної.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: only + subject does not invert', uk: 'Дрібний шрифт: only + підмет не інвертує' },
          md: {
            en: 'Inversion is triggered by an **adverbial** at the front, not by the word *only* itself. When *only* belongs to the **subject**, the order stays normal: ***Only Anna** knew the password* (not ✕ *Only did Anna know*). Compare ***Only then** did Anna tell us the password*, where *only then* is a time adverbial. Conditional inversion (*Had I known… · Should you need… · Were it not for…*) is a separate, if-replacing pattern: see m23 and m29.',
            uk: 'Інверсію вмикає **адвербіал** на початку, а не саме слово *only*. Коли *only* належить до **підмета**, порядок звичайний: ***Only Anna** knew the password* (а не ✕ *Only did Anna know*). Порівняйте ***Only then** did Anna tell us the password*, де *only then* — часовий адвербіал. Умовна інверсія (*Had I known… · Should you need… · Were it not for…*) — окремий патерн, що замінює if: див. m23 і m29.',
          },
        },
      ],
    },

    // ── 2. NOT ONLY ────────────────────────────────────────────────────────
    {
      id: 'not-only',
      title: { en: 'Not only … but (also): one inverted clause', uk: 'Not only … but (also): одна інвертована клауза' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*not only … but (also)* adds a second, stronger point. In the middle of a sentence it needs no inversion: *We **not only** fixed the bug **but also** wrote a regression test.* Moved to the **front**, *Not only* behaves like any negative adverbial: the **first** clause inverts, the second keeps normal order (British Council: *Not only did he win the match but he came back from a difficult start*).',
            uk: '*not only … but (also)* додає другий, сильніший аргумент. Усередині речення інверсія не потрібна: *We **not only** fixed the bug **but also** wrote a regression test.* Винесене на **початок** *Not only* поводиться як будь-який заперечний адвербіал: **перша** клауза інвертується, друга зберігає звичайний порядок (British Council: *Not only did he win the match but he came back from a difficult start*).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Position', uk: 'Позиція' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'mid-sentence: no inversion', uk: 'усередині: без інверсії' },
              { en: 'The vendor has not only missed the deadline but also broken the SLA.', uk: 'The vendor has not only missed the deadline but also broken the SLA.' },
            ],
            [
              { en: 'front, with an auxiliary: it moves', uk: 'на початку, з допоміжним: воно переставляється' },
              { en: 'Not only has the vendor missed the deadline, but it has also broken the SLA.', uk: 'Not only has the vendor missed the deadline, but it has also broken the SLA.' },
            ],
            [
              { en: 'front, no auxiliary: did / do', uk: 'на початку, без допоміжного: did / do' },
              { en: 'Not only did we fix the bug, but we also wrote a regression test.', uk: 'Not only did we fix the bug, but we also wrote a regression test.' },
            ],
            [
              { en: 'second clause: also after the subject or the auxiliary', uk: 'друга клауза: also після підмета чи допоміжного' },
              { en: '…, but we also wrote a test. / …, but it has also broken the SLA.', uk: '…, but we also wrote a test. / …, but it has also broken the SLA.' },
            ],
          ],
          caption: {
            en: 'British Council (Emphasis: cleft sentences, inversion and auxiliaries): Not only do they have live reptiles but you can also touch them.',
            uk: 'British Council (Emphasis: cleft sentences, inversion and auxiliaries): Not only do they have live reptiles but you can also touch them.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Не лише …, а й …» → two inversions ✕', uk: '«Не лише …, а й …» → дві інверсії ✕' },
          md: {
            en: 'Only the clause right after *Not only* inverts. ✕ *Not only did we fix the bug, but **did we** also write a test* → ✓ *…, but **we also** wrote a test.* And the second clause keeps its own tense: *wrote*, not *write*. The *did* belongs to the first clause.',
            uk: 'Інвертується лише клауза одразу після *Not only*. ✕ *Not only did we fix the bug, but **did we** also write a test* → ✓ *…, but **we also** wrote a test.* І друга клауза зберігає власний час: *wrote*, а не *write*. *did* належить до першої клаузи.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Where it earns its place', uk: 'Де вона доречна' },
          md: {
            en: 'Fronted *Not only* is a persuasion tool: a proposal, a promotion case, a launch announcement. ***Not only does** the new pipeline cut build time by half, **but it also** removes three manual steps.* In a stand-up update, the mid-sentence version or a plain *and* sounds natural.',
            uk: 'Винесене *Not only* — інструмент переконання: пропозиція, обґрунтування підвищення, анонс запуску. ***Not only does** the new pipeline cut build time by half, **but it also** removes three manual steps.* В апдейті на стендапі природно звучить версія всередині речення або просте *and*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**but also, but, or a comma.** After a fronted *Not only*, the second clause can open with *but*, *but … also*, or, in less formal writing, a comma and *also*: *Not only did she sing at the talent show, she also danced!* (British Council). Pick *but … also* in formal text; it signals the second point most clearly.',
            uk: '**but also, but чи кома.** Після винесеного *Not only* друга клауза може починатися з *but*, *but … also* або, у менш формальному письмі, з коми й *also*: *Not only did she sing at the talent show, she also danced!* (British Council). У формальному тексті обирайте *but … also*; так другий аргумент позначено найчіткіше.',
          },
        },
      ],
    },

    // ── 3. CLEFT SENTENCES ─────────────────────────────────────────────────
    {
      id: 'cleft-sentences',
      title: { en: 'Cleft sentences: It was Anna who… · What we need is…', uk: 'Cleft-речення: It was Anna who… · What we need is…' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A **cleft** splits one sentence into two parts to put one element in **focus**: the new information, often a correction. The rest is information the listener already has (Cambridge). There is **no inversion** in a cleft; the work is done by a frame: **It + be + FOCUS + that / who + the rest** (*it-cleft*) or **What + the known part + be + FOCUS** (*wh-cleft*).',
            uk: '**Cleft** розщеплює одне речення на дві частини, щоб поставити один елемент у **фокус**: нову інформацію, часто виправлення. Решта — те, що слухач уже знає (Cambridge). **Інверсії** в cleft немає; роботу виконує рамка: **It + be + ФОКУС + that / who + решта** (*it-cleft*) або **What + відома частина + be + ФОКУС** (*wh-cleft*).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Focus on', uk: 'Фокус на' },
            { en: 'It-cleft', uk: 'It-cleft' },
            { en: 'Answers the doubt', uk: 'Відповідає на сумнів' },
          ],
          rows: [
            [
              { en: 'the person', uk: 'людині' },
              { en: 'It was Anna who found the race condition yesterday.', uk: 'It was Anna who found the race condition yesterday.' },
              { en: 'Was it Max? — No, Anna.', uk: 'Це був Макс? — Ні, Анна.' },
            ],
            [
              { en: 'the time', uk: 'часі' },
              { en: 'It was yesterday that Anna found the race condition.', uk: 'It was yesterday that Anna found the race condition.' },
              { en: 'Last week? — No, yesterday.', uk: 'Минулого тижня? — Ні, вчора.' },
            ],
            [
              { en: 'the thing', uk: 'речі' },
              { en: 'It was a missing index that slowed down the dashboard.', uk: 'It was a missing index that slowed down the dashboard.' },
              { en: 'The network? — No, an index.', uk: 'Мережа? — Ні, індекс.' },
            ],
          ],
          caption: {
            en: 'British Council (Emphasis: cleft sentences): You invited me to the party yesterday → It was you who… · It was yesterday that… · It was the party that…',
            uk: 'British Council (Emphasis: cleft sentences): You invited me to the party yesterday → It was you who… · It was yesterday that… · It was the party that…',
          },
        },
        {
          kind: 'compare',
          a: { en: 'It-cleft: It + be + FOCUS + that …', uk: 'It-cleft: It + be + ФОКУС + that …' },
          b: { en: 'Wh-cleft: What … + be + FOCUS', uk: 'Wh-cleft: What … + be + ФОКУС' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'It was the cache that caused the outage.', uk: 'It was the cache that caused the outage.' },
              { en: 'What we need is a proper rollback plan.', uk: 'What we need is a proper rollback plan.' },
            ],
            [
              { en: 'Focus position', uk: 'Місце фокуса' },
              { en: 'early — right after It + be', uk: 'рано — одразу після It + be' },
              { en: 'last, where English puts new information', uk: 'у кінці, де англійська ставить нову інформацію' },
            ],
            [
              { en: 'Typical use', uk: 'Типове вживання' },
              { en: 'correcting who / what / when', uk: 'виправлення: хто / що / коли' },
              { en: 'introducing the point — common in speech', uk: 'підведення до головного — часто в мовленні' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Те, що нам треба…» → That what ✕', uk: '«Те, що нам треба…» → That what ✕' },
          md: {
            en: 'Ukrainian needs two words, «те» + «що»; English *what* already means *the thing that*. ✕ ***That what** we need is more tests* → ✓ ***What** we need is more tests.* The same goes for ✕ *What we need **it** is…*: no extra *it*, the *what*-clause is the subject.',
            uk: 'Українській потрібні два слова, «те» + «що»; англійське *what* уже означає *the thing that*. ✕ ***That what** we need is more tests* → ✓ ***What** we need is more tests.* Так само ✕ *What we need **it** is…*: жодного зайвого *it*, підмет — сама *what*-клауза.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Саме Анна, яка…» → It was Anna which ✕', uk: '«Саме Анна, яка…» → It was Anna which ✕' },
          md: {
            en: 'Ukrainian «яка» works for people and things; English splits them. After a **person**, use *who* (or *that*): ✓ *It was Anna **who** found it.* After a thing or a time, use *that*: ✓ *It was yesterday **that**…* The relative words themselves (who · which · that · whose) are covered in m25.',
            uk: 'Українське «яка» підходить і для людей, і для речей; англійська їх розділяє. Після **людини** вживайте *who* (або *that*): ✓ *It was Anna **who** found it.* Після речі чи часу — *that*: ✓ *It was yesterday **that**…* Самі відносні слова (who · which · that · whose) розібрано в m25.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Clefts in a postmortem', uk: 'Cleft у постмортемі' },
          md: {
            en: 'A cleft is the natural way to correct a wrong assumption in an incident review: ***It wasn’t the deploy that** broke checkout; **it was** an expired certificate.* · ***What actually happened was that** the cache served stale prices.* The focus lands exactly on the cause.',
            uk: 'Cleft — природний спосіб виправити хибне припущення в розборі інциденту: ***It wasn’t the deploy that** broke checkout; **it was** an expired certificate.* · ***What actually happened was that** the cache served stale prices.* Фокус падає точно на причину.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Reversed wh-clefts and other wh-words.** The focus can come first: ***A proper rollback plan** is what we need.* Wh-clefts also open with *where, why, how* or *all*: ***Where** you’ll find the logs is the shared bucket* · ***All** I want is a green build.* With an action as the focus, use *do* in the wh-part and a bare infinitive after *be*: ***What we need to do is get** new batteries for it* (Cambridge).',
            uk: '**Обернені wh-cleft та інші wh-слова.** Фокус може стояти першим: ***A proper rollback plan** is what we need.* Wh-cleft також починаються з *where, why, how* чи *all*: ***Where** you’ll find the logs is the shared bucket* · ***All** I want is a green build.* Коли фокус — дія, уживайте *do* у wh-частині та інфінітив без to після *be*: ***What we need to do is get** new batteries for it* (Cambridge).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: emphatic do', uk: 'Дрібний шрифт: емфатичне do' },
          md: {
            en: 'The smallest emphasis tool needs no reordering at all: stress the auxiliary, or add *do / does / did* to a positive sentence to contradict a doubt: *I **did** test it! (You thought I hadn’t.)* · *That **does** make sense, actually.* British Council notes it works in speech and writing; in British English, *Do sit down* also makes a polite command more emphatic.',
            uk: 'Найменший інструмент емфази взагалі не потребує перестановки: наголосіть допоміжне дієслово або додайте *do / does / did* у ствердне речення, щоб заперечити сумнів: *I **did** test it! (Ви думали, що ні.)* · *That **does** make sense, actually.* British Council зазначає, що це працює в мовленні й письмі; у британській англійській *Do sit down* також робить ввічливе прохання емфатичнішим.',
          },
        },
      ],
    },

    // ── 4. FRONTING ────────────────────────────────────────────────────────
    {
      id: 'fronting',
      title: { en: 'Fronting: The edge cases we’ll handle later', uk: 'Fronting: The edge cases we’ll handle later' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '**Fronting** moves an object, a complement or an adverbial that does not usually start a clause into first position, to give it focus (Cambridge). Most often it is a **contrast**: this one, not that one. The key difference from negative inversion: a fronted **non-negative** element keeps **normal order**, with no operator jump and no *do*.',
            uk: '**Fronting** переносить на перше місце додаток, іменну частину чи адвербіал, які зазвичай клаузу не починають, щоб дати їм фокус (Cambridge). Найчастіше це **контраст**: оце, а не те. Головна відмінність від негативної інверсії: винесений **незаперечний** елемент зберігає **звичайний порядок**, без стрибка оператора й без *do*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Fronted', uk: 'Винесено' },
            { en: 'Example', uk: 'Приклад' },
            { en: 'Order after it', uk: 'Порядок після нього' },
          ],
          rows: [
            [
              { en: 'object (contrast)', uk: 'додаток (контраст)' },
              { en: 'The happy path is done. The edge cases we will handle later.', uk: 'The happy path is done. The edge cases we will handle later.' },
              { en: 'normal: we will handle', uk: 'звичайний: we will handle' },
            ],
            [
              { en: 'time / place adverbial', uk: 'адвербіал часу / місця' },
              { en: 'At noon, we shipped the hotfix.', uk: 'At noon, we shipped the hotfix.' },
              { en: 'normal: we shipped', uk: 'звичайний: we shipped' },
            ],
            [
              { en: 'negative time adverbial', uk: 'заперечний адвербіал часу' },
              { en: 'Not until noon did we ship the hotfix.', uk: 'Not until noon did we ship the hotfix.' },
              { en: 'inverted: did we ship', uk: 'інверсія: did we ship' },
            ],
          ],
          caption: {
            en: 'Cambridge (Fronting): objects, complements and adjuncts move to the front for focus; only negative / restrictive adverbials bring inversion.',
            uk: 'Cambridge (Fronting): додатки, іменні частини й адвербіали переносять уперед для фокуса; інверсію приносять лише заперечні / обмежувальні адвербіали.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“That car did we buy” — inversion by analogy ✕', uk: '«That car did we buy» — інверсія за аналогією ✕' },
          md: {
            en: 'After learning *Never have I…*, some learners invert after anything at the front. ✕ ***The edge cases will we** handle later* → ✓ ***The edge cases we will** handle later.* The test: is the fronted part negative or restrictive (*never, only then, not until, little*)? No → normal order.',
            uk: 'Вивчивши *Never have I…*, дехто інвертує після будь-чого на початку. ✕ ***The edge cases will we** handle later* → ✓ ***The edge cases we will** handle later.* Перевірка: чи винесена частина заперечна чи обмежувальна (*never, only then, not until, little*)? Ні → звичайний порядок.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Fronting in speech: the topic first', uk: 'Fronting у мовленні: спершу тема' },
          md: {
            en: 'Informal speech often lifts the topic to the front and repeats it with a pronoun: *That book you told me about, they’ve made it into a film* (Cambridge). In a meeting: ***The flaky test**, I’ll look at **it** after lunch.* Fine in speech; in writing, rebuild the sentence.',
            uk: 'Невимушене мовлення часто виносить тему вперед і повторює її займенником: *That book you told me about, they’ve made it into a film* (Cambridge). На зустрічі: ***The flaky test**, I’ll look at **it** after lunch.* У мовленні нормально; на письмі перебудуйте речення.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Fronting for linking.** Fronting also links a sentence to the previous one, putting known information first: *We added three dashboards last quarter. **The most useful one** turned out to be the cost dashboard.* This is the same principle as the wh-cleft: known first, new last.',
            uk: '**Fronting для звʼязності.** Fronting також привʼязує речення до попереднього, ставлячи відому інформацію першою: *We added three dashboards last quarter. **The most useful one** turned out to be the cost dashboard.* Це той самий принцип, що й у wh-cleft: відоме спочатку, нове в кінці.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: On the corner stood a little shop', uk: 'Дрібний шрифт: On the corner stood a little shop' },
          md: {
            en: 'A fronted **place** phrase can swap the subject and the **whole verb** (no operator, no *do*) when the verb is intransitive and describes position or movement: ***On the corner stood** a little shop* · ***Here comes** the bus* (Cambridge). It belongs to narrative and description, not to technical writing; recognise it, but you rarely need to produce it.',
            uk: 'Винесена фраза **місця** може переставити підмет і **все дієслово** (без оператора й без *do*), коли дієслово неперехідне й описує розташування чи рух: ***On the corner stood** a little shop* · ***Here comes** the bus* (Cambridge). Це належить оповіді й опису, а не технічному письму; впізнавайте, але відтворювати доведеться рідко.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A negative or restrictive adverbial at the front (Never · Rarely · Not only · Hardly · Only then · Under no circumstances · Little) → question order: operator + subject + verb.',
      uk: 'Заперечний чи обмежувальний адвербіал на початку (Never · Rarely · Not only · Hardly · Only then · Under no circumstances · Little) → порядок питання: оператор + підмет + дієслово.',
    },
    {
      en: 'The operator is the auxiliary or modal; with none, add do / does / did and use the base form: Rarely do we check · Seldom did we test.',
      uk: 'Оператор — допоміжне чи модальне дієслово; якщо його немає, додайте do / does / did і базову форму: Rarely do we check · Seldom did we test.',
    },
    {
      en: 'hardly / scarcely / barely … when; no sooner … than (usually with the Past Perfect).',
      uk: 'hardly / scarcely / barely … when; no sooner … than (зазвичай із Past Perfect).',
    },
    {
      en: 'Only + time and not until invert the MAIN clause; fronted Not only inverts only the first clause.',
      uk: 'Only + час і not until інвертують ГОЛОВНУ клаузу; винесене Not only інвертує лише першу клаузу.',
    },
    {
      en: 'Clefts frame the focus with no inversion: It + be + FOCUS + who / that … · What … + be + FOCUS.',
      uk: 'Cleft обрамлює фокус без інверсії: It + be + ФОКУС + who / that … · What … + be + ФОКУС.',
    },
    {
      en: 'Fronting a non-negative element (The edge cases we’ll handle later) keeps normal order.',
      uk: 'Винесення незаперечного елемента (The edge cases we’ll handle later) зберігає звичайний порядок.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“Never I have seen such a mess.”', uk: '«Never I have seen such a mess.»' },
      body: { en: 'Fronted negative → invert: Never have I seen… · or keep it neutral: I have never seen….', uk: 'Винесене заперечення → інверсія: Never have I seen… · або нейтрально: I have never seen….' },
    },
    {
      title: { en: '“Rarely we check the backups.”', uk: '«Rarely we check the backups.»' },
      body: { en: 'No auxiliary → do-support: Rarely do we check….', uk: 'Немає допоміжного → do-support: Rarely do we check….' },
    },
    {
      title: { en: '“Not only did we fixed the bug …”', uk: '«Not only did we fixed the bug …»' },
      body: { en: 'After did, the base form: did we fix.', uk: 'Після did — базова форма: did we fix.' },
    },
    {
      title: { en: '“Hardly had we deployed than …”', uk: '«Hardly had we deployed than …»' },
      body: { en: 'hardly … when; no sooner … than.', uk: 'hardly … when; no sooner … than.' },
    },
    {
      title: { en: '“Not until the logs arrived we understood …”', uk: '«Not until the logs arrived we understood …»' },
      body: { en: 'Invert the main clause: … did we understand.', uk: 'Інвертуйте головну клаузу: … did we understand.' },
    },
    {
      title: { en: '“That what we need is more tests.”', uk: '«That what we need is more tests.»' },
      body: { en: 'what alone = «те, що»: What we need is….', uk: 'саме what = «те, що»: What we need is….' },
    },
    {
      title: { en: '“It was Anna which found it.”', uk: '«It was Anna which found it.»' },
      body: { en: 'A person → who (or that): It was Anna who found it.', uk: 'Людина → who (або that): It was Anna who found it.' },
    },
  ],
  exercises: [
    {
      id: 'ex-inversion-emphasis-1',
      kind: 'mcq',
      prompt: { en: 'Never ___ such a clean migration.', uk: 'Ніколи ще ми не бачили такої чистої міграції.' },
      options: ['have we seen', 'we have seen', 'we saw'],
      correct: 0,
      explain: { en: 'A fronted negative adverbial → question order: have (operator) + we (subject) + seen.', uk: 'Винесений заперечний адвербіал → порядок питання: have (оператор) + we (підмет) + seen.' },
      level: 'c1',
      tags: ['inversion', 'negative-inversion'],
    },
    {
      id: 'ex-inversion-emphasis-2',
      kind: 'mcq',
      prompt: { en: 'Rarely ___ the restore path in staging.', uk: 'Рідко коли ми тестуємо шлях відновлення на стейджингу.' },
      options: ['do we test', 'we test', 'we do test'],
      correct: 0,
      explain: { en: 'No auxiliary in “we test” → do-support, as in a question: do we test.', uk: 'У «we test» немає допоміжного → do-support, як у питанні: do we test.' },
      level: 'c1',
      tags: ['inversion', 'do-support'],
    },
    {
      id: 'ex-inversion-emphasis-3',
      kind: 'gap',
      sentence: 'Seldom ___ (we / test) the backups last year.',
      answers: ['did we test'],
      hint: { en: 'Past Simple, no auxiliary', uk: 'Past Simple, без допоміжного' },
      explain: { en: 'Past Simple → did + subject + base form: did we test.', uk: 'Past Simple → did + підмет + базова форма: did we test.' },
      level: 'c1',
      tags: ['inversion', 'do-support'],
    },
    {
      id: 'ex-inversion-emphasis-4',
      kind: 'mcq',
      prompt: { en: 'Not only ___ the bug, but we also wrote a regression test.', uk: 'Ми не лише виправили баг, а й написали регресійний тест.' },
      options: ['did we fix', 'did we fixed', 'we fixed'],
      correct: 0,
      explain: { en: 'The past is in did; the main verb goes back to the base form: did we fix.', uk: 'Минулий час — у did; основне дієслово повертається до базової форми: did we fix.' },
      level: 'c1',
      tags: ['inversion', 'not-only'],
    },
    {
      id: 'ex-inversion-emphasis-5',
      kind: 'mcq',
      prompt: { en: 'Hardly had we deployed ___ the alerts fired.', uk: 'Щойно ми задеплоїли, як спрацювали алерти.' },
      options: ['when', 'than', 'that'],
      correct: 0,
      explain: { en: 'hardly / scarcely / barely … when.', uk: 'hardly / scarcely / barely … when.' },
      level: 'c1',
      tags: ['inversion', 'negative-inversion'],
    },
    {
      id: 'ex-inversion-emphasis-6',
      kind: 'mcq',
      prompt: { en: 'No sooner had the demo started ___ the Wi-Fi dropped.', uk: 'Не встигло демо початися, як упав Wi-Fi.' },
      options: ['than', 'when', 'then'],
      correct: 0,
      explain: { en: 'no sooner … than: sooner is a comparative.', uk: 'no sooner … than: sooner — порівняльна форма.' },
      level: 'c1',
      tags: ['inversion', 'negative-inversion'],
    },
    {
      id: 'ex-inversion-emphasis-7',
      kind: 'gap',
      sentence: 'Only after the review ___ we merge the PR.',
      answers: ['did'],
      hint: { en: 'Only + time → invert the main clause', uk: 'Only + час → інверсія в головній клаузі' },
      explain: { en: 'Only after … → the main clause inverts; Past Simple → did we merge.', uk: 'Only after … → головна клауза інвертується; Past Simple → did we merge.' },
      level: 'c1',
      tags: ['inversion', 'negative-inversion'],
    },
    {
      id: 'ex-inversion-emphasis-8',
      kind: 'mcq',
      prompt: { en: 'Under no circumstances ___ push directly to main.', uk: 'За жодних обставин не пуште напряму в main.' },
      options: ['should you', 'you should', 'you must'],
      correct: 0,
      explain: { en: 'The modal is the operator: should + you.', uk: 'Модальне дієслово — оператор: should + you.' },
      level: 'c1',
      tags: ['inversion', 'negative-inversion'],
    },
    {
      id: 'ex-inversion-emphasis-9',
      kind: 'mcq',
      prompt: { en: 'Little ___ that the demo would go viral.', uk: 'Ми й гадки не мали, що демо стане вірусним.' },
      options: ['did we know', 'we knew', 'knew we'],
      correct: 0,
      explain: { en: 'Little (= not at all) at the front → did we know.', uk: 'Little (= зовсім не) на початку → did we know.' },
      level: 'c1',
      tags: ['inversion', 'negative-inversion'],
    },
    {
      id: 'ex-inversion-emphasis-10',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: [
        'Not until the logs arrived did we understand the cause.',
        'Not until the logs arrived we understood the cause.',
        'Not until did the logs arrive we understood the cause.',
      ],
      correct: 0,
      explain: {
        en: 'not until + the time phrase, then the MAIN clause inverts. 2 has no inversion; 3 inverts the wrong clause.',
        uk: 'not until + часова фраза, далі інвертується ГОЛОВНА клауза. У 2 інверсії немає; у 3 інвертовано не ту клаузу.',
      },
      level: 'c1',
      tags: ['inversion', 'negative-inversion'],
    },
    {
      id: 'ex-inversion-emphasis-11',
      kind: 'mcq',
      prompt: { en: 'Max thinks he found the race condition. Correct him: “No, it was Anna ___ found it.”', uk: 'Макс думає, що це він знайшов race condition. Виправте: «Ні, це Анна його знайшла».' },
      options: ['who', 'which', 'what'],
      correct: 0,
      explain: { en: 'It-cleft with a person in focus → who (or that), never which.', uk: 'It-cleft з людиною у фокусі → who (або that), ніколи which.' },
      level: 'c1',
      tags: ['cleft', 'it-cleft'],
    },
    {
      id: 'ex-inversion-emphasis-12',
      kind: 'gap',
      sentence: '___ we need is a proper rollback plan.',
      answers: ['What'],
      hint: { en: 'one word = «те, що»', uk: 'одне слово = «те, що»' },
      explain: { en: 'Wh-cleft: What + the known part + be + focus.', uk: 'Wh-cleft: What + відома частина + be + фокус.' },
      level: 'c1',
      tags: ['cleft', 'wh-cleft'],
    },
    {
      id: 'ex-inversion-emphasis-13',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['What we need is more time.', 'That what we need is more time.', 'What we need it is more time.'],
      correct: 0,
      explain: { en: 'what alone means «те, що»; no that, no extra it.', uk: 'саме what означає «те, що»; без that і без зайвого it.' },
      level: 'c1',
      tags: ['cleft', 'wh-cleft'],
    },
    {
      id: 'ex-inversion-emphasis-14',
      kind: 'mcq',
      prompt: { en: 'We shipped it on Friday. Emphasise “on Friday”:', uk: 'Ми випустили це в пʼятницю. Наголосіть «в пʼятницю»:' },
      options: ['It was on Friday that we shipped it.', 'It was on Friday who we shipped it.', 'On Friday did we ship it.'],
      correct: 0,
      explain: { en: 'A time in focus → It was … that. A non-negative fronted phrase never inverts.', uk: 'Час у фокусі → It was … that. Винесена незаперечна фраза ніколи не інвертує.' },
      level: 'c1',
      tags: ['cleft', 'it-cleft'],
    },
    {
      id: 'ex-inversion-emphasis-15',
      kind: 'mcq',
      prompt: { en: 'Which fronting is correct?', uk: 'Який fronting правильний?' },
      options: ['The edge cases we will handle later.', 'The edge cases will we handle later.', 'The edge cases do we handle later.'],
      correct: 0,
      explain: { en: 'A fronted object is not negative → normal order: we will handle.', uk: 'Винесений додаток не заперечний → звичайний порядок: we will handle.' },
      level: 'c1',
      tags: ['fronting'],
    },
    {
      id: 'ex-inversion-emphasis-16',
      kind: 'mcq',
      prompt: { en: '“You didn’t test it, did you?” — “I ___ test it! Look at the CI log.”', uk: '«Ти ж це не тестував?» — «Я таки тестував! Подивися лог CI».' },
      options: ['did', 'do', 'have'],
      correct: 0,
      explain: { en: 'Emphatic did + base form contradicts a doubt about the past.', uk: 'Емфатичне did + базова форма заперечує сумнів щодо минулого.' },
      level: 'c1',
      tags: ['emphasis', 'emphatic-do'],
    },
    {
      id: 'ex-inversion-emphasis-17',
      kind: 'mcq',
      prompt: { en: 'Which fits a casual chat with a teammate best?', uk: 'Що найкраще пасує до невимушеної розмови з колегою?' },
      options: ['I’ve never seen anything like it.', 'Never have I seen anything like it.', 'Never I have seen anything like it.'],
      correct: 0,
      explain: {
        en: 'Inversion is formal and dramatic; in a casual chat the neutral order sounds natural. 3 is wrong anywhere.',
        uk: 'Інверсія формальна й драматична; у невимушеній розмові природно звучить нейтральний порядок. Варіант 3 хибний будь-де.',
      },
      level: 'c1',
      tags: ['inversion', 'register'],
    },
  ],
  seeAlso: ['m23-conditionals-3-mixed', 'm25-relative-clauses', 'm29-subjunctive-formal', 'm30-linking-discourse', 'm4-questions-negatives'],
  sources: [
    {
      title: 'British Council LearnEnglish — Inversion after negative adverbials (C1)',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1/inversion-after-negative-adverbials',
    },
    {
      title: 'British Council LearnEnglish — Emphasis: cleft sentences, inversion and auxiliaries (C1)',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries',
    },
    {
      title: 'Cambridge Dictionary — Cleft sentences (It was in June we got married.)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/cleft-sentences-it-was-in-june-we-got-married',
    },
    {
      title: 'Cambridge Dictionary — Fronting',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/fronting',
    },
    {
      title: 'Cambridge Dictionary — Word order: structures',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/word-order-structures',
    },
  ],
};
