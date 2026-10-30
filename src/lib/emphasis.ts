// CHANGED (A4): the ★ Emphasis Spotlight engine (m27): inversion, clefts and fronting treated as WORD
// ORDER that moves to put something in the spotlight. One rule ties the three together: a fronted
// NEGATIVE or RESTRICTIVE adverbial (Never · Rarely · Not only · Hardly … when · Only then · Under no
// circumstances) forces question order, so the operator jumps in front of the subject. Any other fronted
// element (That car · At noon) keeps normal order. A cleft does not invert; it re-packages the sentence
// as It + be + FOCUS + that/who … or What … + be + FOCUS (British Council C1: Inversion after negative
// adverbials · Emphasis: cleft sentences, inversion and auxiliaries; Cambridge: Fronting · Cleft
// sentences · Word order and focus).
// Data marks `|trig` (every word of the fronted adverbial), `|aux` (the operator), `|subj`, `|verb` (the
// main verb) and `|focus` (what a cleft or fronting spotlights). Each scenario declares FACTS about its
// neutral sentence: the auxiliary if there is one, else the simple tense and person, and the main verb's
// base + used form. From those facts the engine COMPUTES which operator inversion needs (the auxiliary
// itself, or do / does / did = do-support), and it diagnoses every frame: no inversion · missing do ·
// wrong operator · a tensed verb after did (did we fixed) · the wrong hardly / no sooner partner ·
// «те, що» (That what …) · which for a person. The data never says whether a frame is right.
// Content: src/data/emphasisSpotlight.ts. Golden test: scripts/test-emphasis.ts.
import type { Localized } from '../data/types';
import { ES_SCENARIOS } from '../data/emphasisSpotlight';
import { parseLine } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

// ── Lexicon ──────────────────────────────────────────────────────────────

export type TriggerClass = 'negative' | 'restrictive' | 'not-only' | 'sequence';
/** Fronted adverbials that force inversion (BC C1 list). `pair` = the word the second clause must open with. */
export const TRIGGERS: Readonly<Record<string, { cls: TriggerClass; pair?: 'when' | 'than' }>> = {
  never: { cls: 'negative' },
  rarely: { cls: 'negative' },
  seldom: { cls: 'negative' },
  little: { cls: 'negative' },
  'not once': { cls: 'negative' },
  'at no time': { cls: 'negative' },
  'in no way': { cls: 'negative' },
  'under no circumstances': { cls: 'negative' },
  'on no account': { cls: 'negative' },
  'not until': { cls: 'restrictive' },
  'only then': { cls: 'restrictive' },
  'only after': { cls: 'restrictive' },
  'only when': { cls: 'restrictive' },
  'only later': { cls: 'restrictive' },
  'only if': { cls: 'restrictive' },
  'not only': { cls: 'not-only' },
  hardly: { cls: 'sequence', pair: 'when' },
  scarcely: { cls: 'sequence', pair: 'when' },
  barely: { cls: 'sequence', pair: 'when' },
  'no sooner': { cls: 'sequence', pair: 'than' },
};

export const TRIGGER_LABEL: Record<TriggerClass, Localized> = {
  negative: { en: 'negative adverbial', uk: 'negative adverbial' },
  restrictive: { en: 'only / not until + time', uk: 'only / not until + час' },
  'not-only': { en: 'not only … but', uk: 'not only … but' },
  sequence: { en: 'one event right after another', uk: 'одна подія одразу після іншої' },
};

const BE = new Set(['is', 'was', 'are', 'were', "'s", '’s']);
const WH = new Set(['what', 'where', 'why', 'how', 'all']);
const DO_FORMS = new Set(['do', 'does', 'did']);

// ── Facts → the operator ────────────────────────────────────────────────

export type EsFacts = {
  /** The neutral sentence's auxiliary or modal (have · had · has · can · should …). Absent = a simple tense. */
  aux?: string;
  /** Simple tense, needed only when there is no auxiliary. */
  tense?: 'present' | 'past';
  /** The subject is third-person singular (present simple → does). */
  third?: boolean;
  /** The main verb: base form and the form the neutral sentence uses. */
  verb: { base: string; form: string };
  /** Words that name people: who is possible after them in an it-cleft, which is not. */
  people?: string[];
};

/** The operator inversion needs: the auxiliary itself, or do / does / did (do-support). */
export function operatorOf(f: EsFacts): string {
  if (f.aux) return f.aux.toLowerCase();
  if (f.tense === 'past') return 'did';
  return f.third ? 'does' : 'do';
}
export function needsDoSupport(f: EsFacts): boolean {
  return !f.aux;
}

// ── Analysis ─────────────────────────────────────────────────────────────

export type Construction = 'neutral' | 'inversion' | 'it-cleft' | 'wh-cleft' | 'fronting';
export type EsIssue =
  | 'no-inversion'
  | 'missing-do'
  | 'wrong-aux'
  | 'double-tense'
  | 'wrong-pair'
  | 'needless-inversion'
  | 'that-what'
  | 'which-person'
  | 'who-thing'
  | 'unknown-trigger';

export const ISSUE_TEXT: Record<EsIssue, Localized> = {
  'no-inversion': {
    en: 'No inversion: a fronted negative adverbial needs question order. The operator goes BEFORE the subject: Never have I…, not Never I have….',
    uk: 'Немає інверсії: винесений уперед negative adverbial вимагає порядку питання. Оператор стає ПЕРЕД підметом: Never have I…, а не Never I have….',
  },
  'missing-do': {
    en: 'Missing do: there is no auxiliary to move, so add one, the same way a question does. Present → do / does, past → did: Rarely do we…, Seldom did we….',
    uk: 'Бракує do: немає допоміжного дієслова, яке можна переставити, тож його додають, як у питанні. Теперішній → do / does, минулий → did: Rarely do we…, Seldom did we….',
  },
  'wrong-aux': {
    en: 'Wrong operator: inversion moves the sentence’s own auxiliary (have · can · had), or do / does / did when there is none, in the right tense and person.',
    uk: 'Не той оператор: інверсія переставляє власне допоміжне дієслово речення (have · can · had), а якщо його немає — do / does / did у правильному часі й особі.',
  },
  'double-tense': {
    en: 'Tense marked twice: after do / does / did the main verb is in the base form. did we fix, not did we fixed.',
    uk: 'Час позначено двічі: після do / does / did основне дієслово стоїть у базовій формі. did we fix, а не did we fixed.',
  },
  'wrong-pair': {
    en: 'Wrong partner: hardly / scarcely / barely … when, but no sooner … than.',
    uk: 'Не та пара: hardly / scarcely / barely … when, але no sooner … than.',
  },
  'needless-inversion': {
    en: 'Needless inversion: the fronted element is not negative or restrictive, so the word order stays normal (subject, then verb).',
    uk: 'Зайва інверсія: винесений елемент не заперечний і не обмежувальний, тож порядок слів лишається звичайним (підмет, потім дієслово).',
  },
  'that-what': {
    en: 'That what… is «те, що…» word for word. English uses what alone: What we need is…',
    uk: 'That what… — це дослівне «те, що…». Англійська вживає саме what: What we need is…',
  },
  'which-person': {
    en: 'which refers to things. After a person in an it-cleft, use who (or that): It was Anna who…',
    uk: 'which стосується речей. Після людини в it-cleft уживайте who (або that): It was Anna who…',
  },
  'who-thing': {
    en: 'who refers to people. After a thing or a time in an it-cleft, use that: It was yesterday that…',
    uk: 'who стосується людей. Після речі чи часу в it-cleft уживайте that: It was yesterday that…',
  },
  'unknown-trigger': { en: 'Unknown fronted adverbial.', uk: 'Невідомий винесений адвербіал.' },
};

export type EsAnalysis = {
  construction: Construction;
  /** The fronted inversion trigger, if the sentence opens with one. */
  trigger: { text: string; cls: TriggerClass | null } | null;
  /** The operator these facts need (computed). */
  operator: string;
  doSupport: boolean;
  /** Where the operator sits relative to the subject. */
  order: 'aux-subj' | 'subj-aux' | 'subj-only' | null;
  /** What a cleft / fronting spotlights. */
  focus: string | null;
  /** A wh-cleft with the focus first (A proper plan is what we need). */
  reversed: boolean;
  issues: EsIssue[];
};

const lower = (t: MorphToken) => t.w.toLowerCase();

/** The leading run of tokens with `role` (the fronted part). Glue tokens end it. */
function leadingRun(tokens: readonly MorphToken[], role: MorphToken['role'], from = 0): MorphToken[] {
  const run: MorphToken[] = [];
  for (let i = from; i < tokens.length && tokens[i].role === role; i++) run.push(tokens[i]);
  return run;
}
function focusRun(tokens: readonly MorphToken[]): { start: number; words: MorphToken[] } | null {
  const start = tokens.findIndex((t) => t.role === 'focus');
  if (start < 0) return null;
  const words: MorphToken[] = [];
  for (let i = start; i < tokens.length; i++) {
    if (tokens[i].glue) continue;
    if (tokens[i].role !== 'focus') break;
    words.push(tokens[i]);
  }
  return { start, words };
}

export function analyze(tokens: readonly MorphToken[], f: EsFacts): EsAnalysis {
  const words = tokens.filter((t) => !t.glue).map(lower);
  const iAux = tokens.findIndex((t) => t.role === 'aux');
  const iSubj = tokens.findIndex((t) => t.role === 'subj');
  const operator = operatorOf(f);
  const order: EsAnalysis['order'] =
    iSubj < 0 ? null : iAux < 0 ? 'subj-only' : iAux < iSubj ? 'aux-subj' : 'subj-aux';
  const fr = focusRun(tokens);
  const focus = fr ? fr.words.map((t) => t.w).join(' ') : null;
  const issues: EsIssue[] = [];
  const base: Omit<EsAnalysis, 'construction' | 'issues'> = {
    trigger: null,
    operator,
    doSupport: needsDoSupport(f),
    order,
    focus,
    reversed: false,
  };

  // 1. A fronted trigger → inversion is required.
  const trig = leadingRun(tokens, 'trig');
  if (trig.length > 0) {
    const text = trig.map(lower).join(' ');
    const hit = TRIGGERS[text];
    const out: EsAnalysis = { ...base, construction: 'inversion', trigger: { text, cls: hit?.cls ?? null }, issues };
    if (!hit) {
      issues.push('unknown-trigger');
      return out;
    }
    if (iAux < 0) issues.push(f.aux ? 'no-inversion' : 'missing-do');
    else if (iAux > iSubj) issues.push('no-inversion');
    else {
      if (lower(tokens[iAux]) !== operator) issues.push('wrong-aux');
      else if (DO_FORMS.has(operator)) {
        const v = tokens.slice(iSubj).find((t) => t.role === 'verb');
        if (v && lower(v) !== f.verb.base.toLowerCase()) issues.push('double-tense');
      }
    }
    if (hit.pair) {
      const c = tokens.find((t) => t.role === 'conn');
      if (c && lower(c) !== hit.pair) issues.push('wrong-pair');
    }
    return out;
  }

  // 2. «те, що…» — the calque of a wh-cleft.
  if (words[0] === 'that' && words[1] === 'what') return { ...base, construction: 'wh-cleft', issues: ['that-what'] };

  // 3. It-cleft: It + be + FOCUS + who / that …
  if (words[0] === 'it' && BE.has(words[1]) && fr) {
    const after = tokens.slice(fr.start).find((t) => !t.glue && t.role !== 'focus');
    const rel = after ? lower(after) : '';
    const person = fr.words.some((t) => (f.people ?? []).includes(lower(t)));
    if (rel === 'which' && person) issues.push('which-person');
    if (rel === 'who' && !person) issues.push('who-thing');
    return { ...base, construction: 'it-cleft', issues };
  }

  // 4. Wh-cleft: What … + be + FOCUS — or reversed: FOCUS + be + what …
  if (WH.has(words[0]) && words.slice(1).some((w) => BE.has(w))) return { ...base, construction: 'wh-cleft', issues };
  if (fr && fr.start === 0) {
    const next = tokens.slice(0).find((t, i) => i > 0 && !t.glue && t.role !== 'focus');
    const i = next ? tokens.indexOf(next) : -1;
    if (next && BE.has(lower(next)) && tokens[i + 1] && WH.has(lower(tokens[i + 1]))) {
      return { ...base, construction: 'wh-cleft', reversed: true, issues };
    }
    // 5. Fronting: a non-negative element moved to the front keeps normal order.
    if (iAux >= 0 && iSubj >= 0 && iAux < iSubj) issues.push('needless-inversion');
    return { ...base, construction: 'fronting', issues };
  }

  return { ...base, construction: 'neutral', issues };
}

// ── Scenarios ────────────────────────────────────────────────────────────

export type EsKind = 'negative' | 'not-only' | 'it-cleft' | 'wh-cleft' | 'fronting';
export const ES_KINDS: readonly EsKind[] = ['negative', 'not-only', 'it-cleft', 'wh-cleft', 'fronting'];
export const KIND_LABEL: Record<EsKind, Localized> = {
  negative: { en: 'Negative inversion', uk: 'Negative inversion' },
  'not-only': { en: 'Not only … but', uk: 'Not only … but' },
  'it-cleft': { en: 'It-cleft', uk: 'It-cleft' },
  'wh-cleft': { en: 'Wh-cleft', uk: 'Wh-cleft' },
  fronting: { en: 'Fronting', uk: 'Fronting' },
};
/** What each construction spotlights. */
export const KIND_RULE: Record<EsKind, Localized> = {
  negative: {
    en: 'A negative adverbial at the front → question order: operator + subject + verb. No auxiliary? Add do / does / did.',
    uk: 'Negative adverbial на початку → порядок питання: оператор + підмет + дієслово. Немає допоміжного? Додайте do / does / did.',
  },
  'not-only': {
    en: 'Not only at the front inverts the FIRST clause only; the second (but … also) keeps normal order.',
    uk: 'Not only на початку інвертує лише ПЕРШУ клаузу; друга (but … also) зберігає звичайний порядок.',
  },
  'it-cleft': {
    en: 'It + be + FOCUS + who / that + the rest. The focus is the new information; the rest is what the listener already knows.',
    uk: 'It + be + ФОКУС + who / that + решта. Фокус — нова інформація; решту слухач уже знає.',
  },
  'wh-cleft': {
    en: 'What + the known part + be + FOCUS. The focus comes last, where English puts new information, or first in the reversed form.',
    uk: 'What + відома частина + be + ФОКУС. Фокус стоїть у кінці, де англійська ставить нову інформацію, або на початку в оберненій формі.',
  },
  fronting: {
    en: 'Move an object or a time phrase to the front for contrast. Not negative → normal order, no inversion.',
    uk: 'Винесіть додаток чи часову фразу на початок для контрасту. Не заперечне → звичайний порядок, без інверсії.',
  },
};

export type EsTrack = 'spotlight' | 'traps';
export const ES_TRACKS: readonly EsTrack[] = ['spotlight', 'traps'];
export type TrapKind = 'error' | 'fix1' | 'fix2';
export const TRAP_KINDS: readonly TrapKind[] = ['error', 'fix1', 'fix2'];
export const TRAP_LABEL: Record<TrapKind, Localized> = {
  error: { en: 'The error', uk: 'Помилка' },
  fix1: { en: 'Fix 1', uk: 'Виправлення 1' },
  fix2: { en: 'Fix 2', uk: 'Виправлення 2' },
};

export type EsFrame = { src: string; uk: string };
export type EsScenario = {
  id: string;
  track: EsTrack;
  /** Spotlight track: the construction this walk builds. */
  kind?: EsKind;
  title: Localized;
  facts: EsFacts;
  /** Spotlight: the neutral sentence first, then the transformation steps. Traps: error, fix 1, fix 2. */
  frames: EsFrame[];
  /** Traps: why UA speakers produce the error. */
  why?: Localized;
};

export function scenariosOf(track: EsTrack, kind?: EsKind): EsScenario[] {
  return ES_SCENARIOS.filter((s) => s.track === track && (track === 'traps' || s.kind === kind));
}
export function listScenarios(): readonly EsScenario[] {
  return ES_SCENARIOS;
}

const cache = new Map<string, MorphToken[]>();
export function tokensOf(frame: EsFrame): MorphToken[] {
  let t = cache.get(frame.src);
  if (!t) {
    t = parseLine(frame.src);
    cache.set(frame.src, t);
  }
  return t;
}

/** The chip label of each frame, computed from what the frame IS (never authored). */
export function stepLabel(sc: EsScenario, i: number): Localized {
  if (sc.track === 'traps') return TRAP_LABEL[TRAP_KINDS[i]];
  if (i === 0) return { en: 'Neutral', uk: 'Нейтрально' };
  const a = analyze(tokensOf(sc.frames[i]), sc.facts);
  switch (a.construction) {
    case 'inversion':
      return a.issues.length
        ? { en: 'Adverbial to the front', uk: 'Адвербіал на початок' }
        : { en: `${a.operator} jumps over the subject`, uk: `${a.operator} перестрибує підмет` };
    case 'it-cleft':
      return { en: `Focus: ${a.focus}`, uk: `Фокус: ${a.focus}` };
    case 'wh-cleft':
      return a.reversed ? { en: 'Reversed wh-cleft', uk: 'Обернений wh-cleft' } : { en: 'What-cleft', uk: 'What-cleft' };
    case 'fronting':
      return { en: `Fronted: ${a.focus}`, uk: `Винесено: ${a.focus}` };
    default:
      return { en: 'Neutral', uk: 'Нейтрально' };
  }
}
