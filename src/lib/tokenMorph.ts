// CHANGED (A1): the TokenMorph engine — the shared "touch the grammar" primitive of Section V.
// Most Advanced-Grammar rules are sentence TRANSFORMATIONS: words move, vanish or appear (had slides in
// before left · a doer is pushed out to a by-phrase · an auxiliary jumps to the front in inversion). So
// a sim authors a sentence as a short series of FRAMES, and <TokenMorph/> (components/motion) animates
// each word from its old place to its new one (FLIP), fades out the words that leave and highlights
// the ones that arrive.
//
// This module is the PURE half: parse an authored line into keyed tokens, assemble the text back, and
// diff two frames. Identity is automatic — a token's key is its lower-cased word plus its occurrence
// number in the line (`i#1`, `i#2`), so the same word in consecutive frames is the same token and
// moves instead of fading. Every frame is authored by hand (never generated — the C2 rule: a
// generator would happily produce "If I would have left"). Golden-tested via scripts/test-token-morph.ts.

/** Semantic hue of a token, beyond the automatic "new in this frame" highlight. */
export type TokenRole = 'cond' | 'result' | 'agent' | 'thing' | 'actor';
export const TOKEN_ROLES: readonly TokenRole[] = ['cond', 'result', 'agent', 'thing', 'actor'];

export type MorphToken = {
  /** Stable identity across frames: lower-cased word + '#' + occurrence in the line. */
  k: string;
  /** The text as displayed. */
  w: string;
  /** Punctuation attaches to the previous word (no space before it). */
  glue: boolean;
  role?: TokenRole;
};

const PUNCT = /^[,.;:!?]+$/;
const TRAILING = /^(.*?)([,.;:!?]+)$/;

/** Normalize a word into its identity base (case- and apostrophe-insensitive). */
function base(w: string): string {
  return w.toLowerCase().replace(/[’']/g, "'");
}

/**
 * Parse an authored line. Words are separated by single spaces; trailing punctuation splits off into
 * glue tokens; an optional `|role` suffix sets a semantic hue (`mechanic|agent`). Throws on an
 * unknown role so a typo fails the golden test instead of silently losing a colour.
 */
export function parseLine(src: string): MorphToken[] {
  const out: MorphToken[] = [];
  const seen = new Map<string, number>();
  const push = (w: string, glue: boolean, role?: TokenRole) => {
    const b = base(w);
    const n = (seen.get(b) ?? 0) + 1;
    seen.set(b, n);
    out.push({ k: `${b}#${n}`, w, glue, ...(role ? { role } : {}) });
  };
  for (const chunk of src.trim().split(/\s+/)) {
    if (!chunk) continue;
    let word = chunk;
    let role: TokenRole | undefined;
    const bar = word.indexOf('|');
    if (bar >= 0) {
      const r = word.slice(bar + 1).replace(/[,.;:!?]+$/, '');
      const tail = word.slice(bar + 1).slice(r.length);
      if (!(TOKEN_ROLES as readonly string[]).includes(r)) throw new Error(`tokenMorph: unknown role "${r}" in "${src}"`);
      role = r as TokenRole;
      word = word.slice(0, bar) + tail;
    }
    if (PUNCT.test(word)) {
      push(word, true);
      continue;
    }
    const m = TRAILING.exec(word);
    if (m && m[1]) {
      push(m[1], false, role);
      push(m[2], true);
    } else {
      push(word, false, role);
    }
  }
  return out;
}

/** Reassemble the plain sentence (what TTS reads and what screen readers hear). */
export function textOf(tokens: readonly MorphToken[]): string {
  let s = '';
  for (const t of tokens) s += t.glue || s === '' ? t.w : ` ${t.w}`;
  return s;
}

/** Keys present in `next` but not in `prev` — the words that ARRIVE in this frame. */
export function enteredKeys(prev: readonly MorphToken[], next: readonly MorphToken[]): Set<string> {
  const had = new Set(prev.map((t) => t.k));
  return new Set(next.filter((t) => !had.has(t.k)).map((t) => t.k));
}

/** Keys present in `prev` but not in `next` — the words that LEAVE. */
export function leftKeys(prev: readonly MorphToken[], next: readonly MorphToken[]): Set<string> {
  const has = new Set(next.map((t) => t.k));
  return new Set(prev.filter((t) => !has.has(t.k)).map((t) => t.k));
}
