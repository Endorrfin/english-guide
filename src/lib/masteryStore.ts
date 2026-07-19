// CHANGED (D1): word mastery for the Definitions page — new / learning / known, in localStorage.
// SRS-compatible by design: keyed by the IMMUTABLE word id (types.ts contract), so the planned
// SM-2-lite #/review port can adopt these states without a migration. Modeled on lib/practiceStore.ts
// (single cache + listeners + useSyncExternalStore; SSR snapshot is an empty map).
import { useSyncExternalStore } from 'react';

export type Mastery = 'new' | 'learning' | 'known';

const KEY = 'englishguide.mastery.v1';

let cache: Map<string, Mastery> | null = null;
const listeners = new Set<() => void>();

function load(): Map<string, Mastery> {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    const obj = raw ? (JSON.parse(raw) as Record<string, Mastery>) : {};
    cache = new Map(Object.entries(obj));
  } catch {
    cache = new Map();
  }
  return cache;
}

function persist(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(cache ?? new Map())));
  } catch {
    /* ignore persistence failures */
  }
}

function emit(): void {
  listeners.forEach((l) => l());
}

export function getMastery(id: string): Mastery {
  return load().get(id) ?? 'new';
}

/** Set a word's mastery. 'new' clears the entry so the stored map only holds progress. */
export function setMastery(id: string, state: Mastery): void {
  const next = new Map(load()); // new identity so React snapshots change
  if (state === 'new') next.delete(id);
  else next.set(id, state);
  cache = next;
  persist();
  emit();
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

const EMPTY: ReadonlyMap<string, Mastery> = new Map();

/** Reactive snapshot of the id → mastery map. */
export function useMastery(): ReadonlyMap<string, Mastery> {
  return useSyncExternalStore(subscribe, () => load(), () => EMPTY);
}
