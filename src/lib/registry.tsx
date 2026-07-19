// src/lib/registry.tsx — sims + figures resolved by kebab key via React.lazy (standard §4.5).
// CHANGED (S1): first golden keys registered — sim 'modal-navigator', figure 'modal-map' — plus
// the getSim/getFigure lookups the block renderer consumes. NOTE: scripts/check-data.ts parses
// THIS file textually for `sims` / `figures` keys — keep the two records below, keys as string
// literals, and the file name registry.tsx exactly.
import { lazy } from 'react';
import type { ComponentType, LazyExoticComponent } from 'react';

type LazyComp = LazyExoticComponent<ComponentType>;

/** React.lazy over a NAMED export — the standard helper for registry entries. */
export function lazyNamed<T extends Record<string, unknown>>(
  loader: () => Promise<T>,
  name: keyof T & string,
): LazyComp {
  return lazy(async () => {
    const mod = await loader();
    return { default: mod[name] as ComponentType };
  });
}

/** Signature sims by kebab key (S1+: 'modal-navigator', 'conditionals-machine', …). */
export const sims: Record<string, LazyComp> = {
  'modal-navigator': lazyNamed(() => import('../components/sims/ModalNavigator'), 'ModalNavigator'),
  // CHANGED (S4): m21's ★ deduction-lab sim (certainty × time).
  'deduction-lab': lazyNamed(() => import('../components/sims/DeductionLab'), 'DeductionLab'),
  // CHANGED (T1): m6's ★ tense-navigator sim (time × aspect) — the golden sim of Section II.
  'tense-navigator': lazyNamed(() => import('../components/sims/TenseNavigator'), 'TenseNavigator'),
};

/** Figures by kebab key. */
export const figures: Record<string, LazyComp> = {
  'modal-map': lazyNamed(() => import('../components/figures/ModalMap'), 'ModalMap'),
  // CHANGED (S2): m18–m20 figures.
  'ability-timeline': lazyNamed(() => import('../components/figures/AbilityTimeline'), 'AbilityTimeline'),
  'obligation-source': lazyNamed(() => import('../components/figures/ObligationSource'), 'ObligationSource'),
  'advice-ladder': lazyNamed(() => import('../components/figures/AdviceLadder'), 'AdviceLadder'),
  // CHANGED (S4): m21 + m22 figures.
  'certainty-scale': lazyNamed(() => import('../components/figures/CertaintyScale'), 'CertaintyScale'),
  'politeness-ladder': lazyNamed(() => import('../components/figures/PolitenessLadder'), 'PolitenessLadder'),
};

export function getSim(key: string): LazyComp | undefined {
  return sims[key];
}

export function getFigure(key: string): LazyComp | undefined {
  return figures[key];
}
