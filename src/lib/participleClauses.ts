// CHANGED (A2): the ★ Clause Compressor engine (m26) — two tracks of authored frames for TokenMorph,
// plus the DANGLING-PARTICIPLE DETECTOR.
// COMPRESS: a full adverbial clause (When I opened … · Because it was written … · After we had tested …)
// loses its conjunction, subject and auxiliary and keeps only a participle — -ing for active, V3 for
// passive, Having + V3 for an earlier action — while the main clause never changes.
// DETECT: a dangling sentence → fix 1 (make the real doer the main subject) → fix 2 (give the clause
// its own subject back).
// THE DETECTOR is mechanical, not authored: a participle clause has no subject of its own, so it
// BORROWS the main-clause subject (British Council, Participle clauses: "the participle and the verb
// in the main clause have the same subject"). Data marks the participle (`|part`) and the main subject
// (`|subj`) and declares who really performs the participle's action (`doer`); the verdict compares the
// two. If they differ, the participle dangles (Cambridge Dictionary: "Arriving home, the door was
// open" — as if the door arrived). Content: src/data/clauseCompressor.ts. Golden test:
// scripts/test-clause-compressor.ts.
import type { Localized } from '../data/types';
import { PC_SCENARIOS } from '../data/clauseCompressor';
import { parseLine } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

export type PcTrack = 'compress' | 'detect';
export const PC_TRACKS: readonly PcTrack[] = ['compress', 'detect'];

/** What the compressed clause expresses (compress track). */
export type PcClause = 'same-time' | 'reason' | 'passive' | 'earlier' | 'earlier-passive';
export const PC_CLAUSES: readonly PcClause[] = ['same-time', 'reason', 'passive', 'earlier', 'earlier-passive'];

export type PcKind =
  | 'full'
  | 'conj-ing'
  | 'ing'
  | 'not-ing'
  | 'ed'
  | 'having'
  | 'having-been'
  | 'dangling'
  | 'fix-subject'
  | 'fix-clause';

export const CLAUSE_KINDS: Record<PcClause, readonly PcKind[]> = {
  'same-time': ['full', 'conj-ing', 'ing'],
  reason: ['full', 'not-ing'],
  passive: ['full', 'ed'],
  earlier: ['full', 'conj-ing', 'having'],
  'earlier-passive': ['full', 'having-been'],
};
export const DETECT_KINDS: readonly PcKind[] = ['dangling', 'fix-subject', 'fix-clause'];

export const CLAUSE_LABEL: Record<PcClause, Localized> = {
  'same-time': { en: 'Same time → -ing', uk: 'Одночасно → -ing' },
  reason: { en: 'A reason, negative → Not -ing', uk: 'Причина, заперечна → Not -ing' },
  passive: { en: 'Passive → V3', uk: 'Passive → V3' },
  earlier: { en: 'Earlier → Having + V3', uk: 'Раніше → Having + V3' },
  'earlier-passive': { en: 'Earlier, passive → Having been + V3', uk: 'Раніше, passive → Having been + V3' },
};

export const KIND_LABEL: Record<PcKind, Localized> = {
  full: { en: 'Full clause', uk: 'Повне речення' },
  'conj-ing': { en: 'Drop the subject', uk: 'Прибрати підмет' },
  ing: { en: 'Drop the conjunction', uk: 'Прибрати сполучник' },
  'not-ing': { en: 'Compress: Not -ing', uk: 'Стиснути: Not -ing' },
  ed: { en: 'Compress: V3', uk: 'Стиснути: V3' },
  having: { en: 'Compress: Having + V3', uk: 'Стиснути: Having + V3' },
  'having-been': { en: 'Compress: Having been + V3', uk: 'Стиснути: Having been + V3' },
  dangling: { en: 'The dangling version', uk: 'Версія з dangling' },
  'fix-subject': { en: 'Fix 1: the doer as subject', uk: 'Виправлення 1: виконавець — підмет' },
  'fix-clause': { en: 'Fix 2: a full clause', uk: 'Виправлення 2: повне речення' },
};

export const KIND_PATTERN: Record<PcKind, string> = {
  full: 'conjunction + subject + verb, main clause',
  'conj-ing': 'when / after + -ing, main clause',
  ing: '-ing …, main clause',
  'not-ing': 'Not + -ing …, main clause',
  ed: 'V3 …, main clause',
  having: 'Having + V3 …, main clause',
  'having-been': 'Having been + V3 …, main clause',
  dangling: '-ing / V3 …, WRONG subject + verb',
  'fix-subject': '-ing / V3 …, the real doer + verb',
  'fix-clause': 'conjunction + doer + verb, main clause',
};

export const KIND_NOTE: Record<PcKind, Localized> = {
  full: {
    en: 'Both clauses have the SAME subject — that is the condition for compressing. If the subjects differ, keep the full clause.',
    uk: 'Обидва речення мають ОДИН підмет — це умова для стискання. Якщо підмети різні, лишайте повне речення.',
  },
  'conj-ing': {
    en: 'The subject and the finite verb go; the verb becomes a participle. Keeping when / while / after / before makes the time link explicit.',
    uk: 'Підмет і особове дієслово зникають; дієслово стає participle. Збережене when / while / after / before робить часовий звʼязок явним.',
  },
  ing: {
    en: 'The conjunction goes too. The -ing clause now borrows its subject from the main clause and its time from the main verb — it has no tense of its own.',
    uk: 'Зникає й сполучник. -ing клауза тепер позичає підмет у головного речення, а час — у головного дієслова; власного часу в неї немає.',
  },
  'not-ing': {
    en: 'A negative participle clause: not goes BEFORE the participle — Not knowing …, never Knowing not … or Don’t knowing ….',
    uk: 'Заперечна participle clause: not стоїть ПЕРЕД participle — Not knowing …, ніколи Knowing not … чи Don’t knowing ….',
  },
  ed: {
    en: 'A passive clause compresses to the bare V3: it was written → Written. The main subject (the service) is the thing that was written.',
    uk: 'Пасивне речення стискається до голого V3: it was written → Written. Підмет головного речення (the service) — те, що написали.',
  },
  having: {
    en: 'Having + V3 says the action was finished BEFORE the main one. After + -ing says the same and is just as common.',
    uk: 'Having + V3 каже, що дія завершилася ДО головної. After + -ing каже те саме і вживається так само часто.',
  },
  'having-been': {
    en: 'The perfect passive participle: an earlier action done TO the main subject — the build was tested, then promoted.',
    uk: 'Perfect passive participle: раніша дія, яку виконали НАД підметом — збірку протестували, потім підвищили.',
  },
  dangling: {
    en: 'The participle borrows the main subject — and this subject cannot be the doer. Read it literally and it is absurd.',
    uk: 'Participle позичає підмет головного речення — а цей підмет не може бути виконавцем. Прочитайте буквально — і вийде абсурд.',
  },
  'fix-subject': {
    en: 'Fix 1: keep the participle and make the real doer the subject of the main clause.',
    uk: 'Виправлення 1: лишіть participle і зробіть справжнього виконавця підметом головного речення.',
  },
  'fix-clause': {
    en: 'Fix 2: keep the main clause and give the other clause its own subject back — nothing is borrowed, nothing can dangle.',
    uk: 'Виправлення 2: лишіть головне речення і поверніть іншому реченню власний підмет — нічого не позичено, нічому «бовтатися».',
  },
};

export type PcFrame = { src: string; uk: string };

export type PcScenario = {
  id: string;
  track: PcTrack;
  /** Compress track: what the clause expresses. */
  clause?: PcClause;
  title: Localized;
  /** Who really performs (or, for a passive participle, undergoes) the action: noun phrases whose LAST
   *  word is matched against the |subj token — e.g. ['the service', 'it']. The first one is shown. */
  doer: string[];
  /** One frame per kind of the walk, in CLAUSE_KINDS / DETECT_KINDS order. */
  frames: PcFrame[];
  trap: { wrong: string; why: Localized };
};

export function kindsOf(sc: PcScenario): readonly PcKind[] {
  return sc.track === 'detect' ? DETECT_KINDS : CLAUSE_KINDS[sc.clause ?? 'same-time'];
}

export function scenariosOf(track: PcTrack, clause?: PcClause): PcScenario[] {
  return PC_SCENARIOS.filter((s) => s.track === track && (track === 'detect' || s.clause === clause));
}

export function listScenarios(): readonly PcScenario[] {
  return PC_SCENARIOS;
}

const cache = new Map<string, MorphToken[]>();
export function tokensOf(frame: PcFrame): MorphToken[] {
  let t = cache.get(frame.src);
  if (!t) {
    t = parseLine(frame.src);
    cache.set(frame.src, t);
  }
  return t;
}

/** The detector's verdict on one frame. */
export type Verdict =
  | { kind: 'full'; subj: string | null }
  | { kind: 'ok' | 'dangling'; part: string; subj: string };

const head = (np: string) => np.toLowerCase().split(/\s+/).pop() ?? '';

/** Is `word` (a |subj token) one of the scenario's real doers? Matched on the noun phrase's head. */
export function isDoer(sc: PcScenario, word: string): boolean {
  return sc.doer.some((d) => head(d) === word.toLowerCase());
}

/**
 * The dangling-participle detector. No participle in the frame → a full clause with its own subject:
 * nothing is borrowed. Otherwise the participle borrows the main-clause subject — OK when that subject
 * is the real doer, DANGLING when it is not.
 */
export function verdictOf(sc: PcScenario, tokens: readonly MorphToken[]): Verdict {
  const part = tokens.find((t) => t.role === 'part');
  const subj = tokens.find((t) => t.role === 'subj');
  if (!part) return { kind: 'full', subj: subj?.w ?? null };
  if (!subj) throw new Error(`clause compressor: ${sc.id} marks a participle but no |subj`);
  return { kind: isDoer(sc, subj.w) ? 'ok' : 'dangling', part: part.w, subj: subj.w };
}

/** Word count (punctuation excluded) — the compression meter. */
export function wordCount(tokens: readonly MorphToken[]): number {
  return tokens.filter((t) => !t.glue).length;
}

/** The main clause: everything after the first comma (the part compression must never touch). */
export function mainClause(text: string): string {
  const i = text.indexOf(', ');
  return i < 0 ? text : text.slice(i + 2);
}

/** The subordinate subject of a full clause: the first word after the conjunction, skipping
 *  determiners (After it had … → it · Because the report was … → report). */
export function subClauseSubject(text: string): string | null {
  const m = /^(When|While|After|Before|Because|As|Since|Once) (.+?),/.exec(text);
  if (!m) return null;
  const w = m[2].split(' ').filter((x) => !/^(the|a|an|my|our|this|that)$/i.test(x));
  return w[0] ?? null;
}
