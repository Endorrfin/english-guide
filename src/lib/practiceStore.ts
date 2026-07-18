// CHANGED (S1): exercise progress in localStorage. Exercise ids are STABLE progress keys
// (types.ts contract — never renumber, only append), so a solved set survives content growth.
import { useSyncExternalStore } from 'react';

const KEY = 'englishguide.practice.v1';

let cache: Set<string> | null = null;
const listeners = new Set<() => void>();

function load(): Set<string> {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    cache = raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    cache = new Set();
  }
  return cache;
}

function persist(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify([...(cache ?? [])]));
  } catch {
    /* ignore persistence failures */
  }
}

function emit(): void {
  listeners.forEach((l) => l());
}

export function isSolved(id: string): boolean {
  return load().has(id);
}

export function markSolved(id: string): void {
  const s = load();
  if (s.has(id)) return;
  cache = new Set(s).add(id); // new identity so React snapshots change
  persist();
  emit();
}

export function resetSolved(): void {
  cache = new Set();
  persist();
  emit();
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

const EMPTY: Set<string> = new Set();

/** Reactive snapshot of the solved-exercise id set. */
export function useSolvedSet(): ReadonlySet<string> {
  return useSyncExternalStore(
    subscribe,
    () => load(),
    () => EMPTY, // SSR snapshot
  );
}
