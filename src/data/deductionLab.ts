// src/data/deductionLab.ts — content for the ★ Deduction Lab sim (m21, S4).
// CHANGED (S4): the certainty × time grid — 5 rungs of confidence × {present, past}, each verdict a
// ranked set of modals (pattern + US-English example + UA translation) plus the classic trap
// (e.g. mustn't ✕ for "certainly not"). Facts verified against Cambridge / British Council
// (m21 sources): negative deduction is can't / couldn't (+ have + V3), NEVER mustn't have.
// EN authored first; grammar terms stay English in UA text; examples are US English.
import type { Certainty, CertaintyLevel, DedTime, DeductionAnswer, DeductionVerdict } from '../lib/deduction';
import type { Localized } from './types';

const L = (en: string, uk: string): Localized => ({ en, uk });
const A = (modal: string, pattern: string, en: string, uk: string, note?: Localized): DeductionAnswer =>
  note ? { modal, pattern, example: L(en, uk), note } : { modal, pattern, example: L(en, uk) };

/** The scale, strongest → weakest. `pct` positions the rung on the CertaintyScale figure / meter. */
export const LEVELS: readonly CertaintyLevel[] = [
  {
    id: 'certain-yes',
    pct: 96,
    label: L('Certain it’s true', 'Точно так'),
    gloss: L('I’m sure — the evidence proves it.', 'Я впевнений — докази це доводять.'),
  },
  {
    id: 'probable',
    pct: 75,
    label: L('Probable', 'Ймовірно'),
    gloss: L('I expect so — it’s very likely.', 'Гадаю, так — дуже ймовірно.'),
  },
  {
    id: 'possible',
    pct: 50,
    label: L('Possible (50/50)', 'Можливо (50/50)'),
    gloss: L('Maybe — it could go either way.', 'Можливо — може бути і так, і ні.'),
  },
  {
    id: 'improbable',
    pct: 22,
    label: L('Improbable', 'Навряд чи'),
    gloss: L('Probably not — but not impossible.', 'Мабуть, ні — але не виключено.'),
  },
  {
    id: 'certain-no',
    pct: 4,
    label: L('Certain it’s false', 'Точно ні'),
    gloss: L('Impossible — the evidence rules it out.', 'Неможливо — докази це виключають.'),
  },
];

/** certainty × time → the modal(s) that carry that confidence, + the tempting wrong turn. */
export const VERDICTS: Record<Certainty, Record<DedTime, DeductionVerdict>> = {
  'certain-yes': {
    present: {
      answers: [
        A(
          'must',
          'must + V1',
          'The lights are on — someone must be in the office.',
          'Світло увімкнене — хтось точно в офісі.',
          L('Certainty from evidence, not obligation.', 'Впевненість із доказів, а не обовʼязок.'),
        ),
      ],
      trap: {
        modal: 'have to',
        why: L(
          'have to states an obligation — “someone has to be in” sounds like a rule, not a conclusion.',
          'have to — це обовʼязок: “someone has to be in” звучить як правило, а не висновок.',
        ),
      },
    },
    past: {
      answers: [
        A(
          'must have',
          'must have + V3',
          'The floor is wet — it must have rained overnight.',
          'Підлога мокра — вночі точно був дощ.',
        ),
      ],
      trap: {
        modal: 'must',
        why: L(
          'Present must can’t reach the past — a past conclusion needs must have + V3.',
          'Теперішнє must не дістає минулого — для висновку про минуле треба must have + V3.',
        ),
      },
    },
  },

  probable: {
    present: {
      answers: [
        A(
          'should',
          'should + V1',
          'She left at eight, so she should be home by now.',
          'Вона вийшла о восьмій, тож мала б уже бути вдома.',
          L('should / ought to = a confident expectation.', 'should / ought to = впевнене очікування.'),
        ),
        A(
          'will',
          'will + V1',
          'The doorbell rang — that will be the courier.',
          'Дзвінок у двері — це, певно, курʼєр.',
          L('Deductive will: “I’m confident that’s who/what it is.”', 'Дедуктивне will: «упевнений, що це саме воно».'),
        ),
      ],
    },
    past: {
      answers: [
        A(
          'should have',
          'should have + V3',
          'They set off early, so they should have arrived by now.',
          'Вони виїхали рано, тож мали б уже приїхати.',
          L(
            'A deductive expectation about the past — not the criticism sense (m20); context decides.',
            'Дедуктивне очікування про минуле — не критика (m20); вирішує контекст.',
          ),
        ),
        A(
          'will have',
          'will have + V3',
          'It’s midnight — they will have landed by now.',
          'Північ — вони, певно, вже приземлилися.',
        ),
      ],
    },
  },

  possible: {
    present: {
      answers: [
        A(
          'might',
          'might + V1',
          'He isn’t answering — he might be in a meeting.',
          'Він не відповідає — можливо, він на нараді.',
        ),
        A(
          'may',
          'may + V1',
          'The API is slow; it may be under heavy load.',
          'API повільний; можливо, він під великим навантаженням.',
          L('may is a touch more formal than might.', 'may трохи формальніше за might.'),
        ),
        A(
          'could',
          'could + V1',
          'The build is red — it could be a flaky test.',
          'Білд червоний — це може бути нестабільний тест.',
        ),
      ],
    },
    past: {
      answers: [
        A(
          'might have',
          'might have + V3',
          'The tests went red — someone might have merged a bad commit.',
          'Тести почервоніли — можливо, хтось влив поганий коміт.',
        ),
        A(
          'may have',
          'may have + V3',
          'She’s offline; she may have lost connection.',
          'Вона офлайн; можливо, втратила звʼязок.',
        ),
        A(
          'could have',
          'could have + V3',
          'It could have been a timeout — the logs are unclear.',
          'Це міг бути таймаут — логи неясні.',
        ),
      ],
    },
  },

  improbable: {
    present: {
      answers: [
        A(
          'might not',
          'might not + V1',
          'She might not be at her desk — it’s lunchtime.',
          'Її, мабуть, немає за столом — обідня перерва.',
        ),
        A(
          'may not',
          'may not + V1',
          'The client may not be awake yet — it’s early there.',
          'Клієнт, мабуть, ще не прокинувся — там рано.',
        ),
      ],
      trap: {
        modal: 'can’t',
        why: L(
          'can’t means impossible (0%). “Probably not” is might not / may not — not can’t.',
          'can’t означає неможливо (0%). «Мабуть, ні» — це might not / may not, а не can’t.',
        ),
      },
    },
    past: {
      answers: [
        A(
          'might not have',
          'might not have + V3',
          'He didn’t reply — he might not have seen the message.',
          'Він не відповів — можливо, не побачив повідомлення.',
        ),
        A(
          'may not have',
          'may not have + V3',
          'They may not have received the invoice yet.',
          'Вони, мабуть, ще не отримали рахунок.',
        ),
      ],
      trap: {
        modal: 'couldn’t have',
        why: L(
          'couldn’t have = it was impossible. For “probably didn’t”, use might not have / may not have.',
          'couldn’t have = було неможливо. Для «мабуть, не» — might not have / may not have.',
        ),
      },
    },
  },

  'certain-no': {
    present: {
      answers: [
        A(
          'can’t',
          'can’t + V1',
          'That can’t be right — the totals don’t add up.',
          'Це не може бути правильно — суми не сходяться.',
          L('can’t / couldn’t = a confident negative conclusion.', 'can’t / couldn’t = упевнений заперечний висновок.'),
        ),
        A(
          'couldn’t',
          'couldn’t + V1',
          'She couldn’t be the author — she joined last week.',
          'Вона не може бути авторкою — приєдналася лише минулого тижня.',
        ),
      ],
      trap: {
        modal: 'mustn’t',
        why: L(
          'mustn’t is prohibition (don’t do it!), never “certainly not”. The negative of deductive must is can’t.',
          'mustn’t — це заборона (не роби!), а не «точно ні». Заперечення дедуктивного must — це can’t.',
        ),
      },
    },
    past: {
      answers: [
        A(
          'can’t have',
          'can’t have + V3',
          'He can’t have written this — he was on leave all week.',
          'Він не міг це написати — був у відпустці весь тиждень.',
        ),
        A(
          'couldn’t have',
          'couldn’t have + V3',
          'The bug couldn’t have come from that commit — it predates it.',
          'Баг не міг зʼявитися з того коміту — він старіший за нього.',
        ),
      ],
      trap: {
        modal: 'mustn’t have',
        why: L(
          'There is no deductive “mustn’t have”. Impossible in the past = can’t have / couldn’t have + V3.',
          'Дедуктивного «mustn’t have» не існує. Неможливе в минулому = can’t have / couldn’t have + V3.',
        ),
      },
    },
  },
};
