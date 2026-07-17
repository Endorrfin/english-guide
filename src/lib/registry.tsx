// src/lib/registry.tsx — sims + figures resolved by kebab key via React.lazy (standard §4.5).
// CHANGED (S0.1): bootstrap with empty records so typecheck / check:data / smoke pass before the
// golden module. S1 registers the first key: 'modal-navigator'. NOTE: scripts/check-data.ts parses
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
export const sims: Record<string, LazyComp> = {};

/** Figures by kebab key. */
export const figures: Record<string, LazyComp> = {};
