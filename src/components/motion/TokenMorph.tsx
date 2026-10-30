// CHANGED (A1): <TokenMorph/> — the animated half of the Section V "touch the grammar" engine
// (pure half: src/lib/tokenMorph.ts). Give it a frame's tokens; when the frame changes, every word
// that survives FLIES from its old position to its new one (FLIP via the Web Animations API), words
// that leave fade out where they stood (absolutely positioned ghosts), and words that arrive fade in
// and stay highlighted until the next change — so "what changed" is always visible, not only during
// the animation.
//
// Lives in components/motion/, NOT sims|figures/ (smoke asserts those dirs 1:1 against registry keys).
// A11y: the animated words are aria-hidden; a sibling sr-only span carries the plain sentence (also
// what the smoke greps). Reduced motion: no animation at all — the new frame simply renders, with the
// arrival highlight intact. SSR: layout effects never run, so the first frame renders statically.
// Token arrays must be referentially stable per frame (the engines parse once and cache).
import { useLayoutEffect, useRef, useState } from 'react';
import { enteredKeys, textOf } from '../../lib/tokenMorph';
import type { MorphToken } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';

type Rect = { x: number; y: number };
type Ghost = MorphToken & Rect;
type Memo = { tokens: readonly MorphToken[]; prev: readonly MorphToken[] | null; entered: Set<string> };

const MOVE_MS = 560;
const ENTER_MS = 420;
const LEAVE_MS = 380;

export function TokenMorph({
  tokens,
  reduced,
  baseline,
  className,
}: {
  tokens: readonly MorphToken[];
  reduced: boolean;
  /** Highlight what differs from THIS frame (e.g. the walk's first frame, the plain fact) instead of
   *  from the previous frame — so a word that left and came back is not mistaken for a change. */
  baseline?: readonly MorphToken[];
  className?: string;
}) {
  const boxRef = useRef<HTMLSpanElement>(null);
  const els = useRef(new Map<string, HTMLSpanElement>());
  const rects = useRef(new Map<string, Rect>());
  const memo = useRef<Memo>({ tokens, prev: null, entered: new Set() });
  const [ghosts, setGhosts] = useState<Ghost[]>([]);

  // Derive "what arrived" once per frame change (stable across unrelated re-renders, e.g. ghosts).
  if (memo.current.tokens !== tokens) {
    memo.current = { tokens, prev: memo.current.tokens, entered: enteredKeys(memo.current.tokens, tokens) };
  }
  // Punctuation is never highlighted; with a baseline, "new" means "not in the baseline".
  const fresh = baseline ? enteredKeys(baseline, tokens) : memo.current.entered;
  const isNew = (t: MorphToken) => !t.glue && fresh.has(t.k);

  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const b = box.getBoundingClientRect();
    const next = new Map<string, Rect>();
    for (const t of tokens) {
      const el = els.current.get(t.k);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      next.set(t.k, { x: r.left - b.left, y: r.top - b.top });
    }
    const old = rects.current;
    const prev = memo.current.prev;
    rects.current = next;
    if (reduced || old.size === 0 || !prev) return;

    for (const t of tokens) {
      const el = els.current.get(t.k);
      const n = next.get(t.k);
      if (!el || !n || typeof el.animate !== 'function') continue;
      const o = old.get(t.k);
      if (o) {
        const dx = o.x - n.x;
        const dy = o.y - n.y;
        if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
          el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0, 0)' }], {
            duration: MOVE_MS,
            easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
          });
        }
      } else {
        el.animate([{ opacity: 0, transform: 'translateY(-0.55em)' }, { opacity: 1, transform: 'translateY(0)' }], {
          duration: ENTER_MS,
          delay: MOVE_MS * 0.35,
          easing: 'ease-out',
          fill: 'backwards',
        });
      }
    }

    const keep = new Set(tokens.map((t) => t.k));
    const gone: Ghost[] = [];
    for (const t of prev) {
      const o = old.get(t.k);
      if (!keep.has(t.k) && o) gone.push({ ...t, ...o });
    }
    if (gone.length === 0) return;
    setGhosts(gone);
    const id = setTimeout(() => setGhosts([]), LEAVE_MS);
    return () => clearTimeout(id);
  }, [tokens, reduced]);

  return (
    <span className={cx('tkm-wrap', className)}>
      <span className="tkm" ref={boxRef} aria-hidden="true">
        {tokens.map((t, i) => (
          <span key={t.k}>
            {!t.glue && i > 0 ? ' ' : ''}
            <span
              ref={(el) => {
                if (el) els.current.set(t.k, el);
                else els.current.delete(t.k);
              }}
              // CHANGED (A4): tkm-glue lets punctuation hug the previous word (no padding gap before , .).
              className={cx('tkm-w', t.glue && 'tkm-glue', isNew(t) && 'tkm-new', t.role && `tkm-${t.role}`)}
            >
              {t.w}
            </span>
          </span>
        ))}
        {ghosts.map((g) => (
          <span
            key={`ghost-${g.k}`}
            className={cx('tkm-w', 'tkm-ghost', g.role && `tkm-${g.role}`)}
            style={{ left: g.x, top: g.y, animationDuration: `${LEAVE_MS}ms` }}
          >
            {g.w}
          </span>
        ))}
      </span>
      <span className="sr-only">{textOf(tokens)}</span>
    </span>
  );
}
