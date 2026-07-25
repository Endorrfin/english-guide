/*
 * backup.ts — export / restore ALL learning progress as one JSON file (R1).
 *
 * Why this ships with the SRS: every progress model in this guide is localStorage-only, so a single
 * "clear site data", a new browser or a wiped profile silently costs months of schedule. The SRS is
 * the first store where that loss is expensive (an interval history cannot be re-derived), so the
 * trainer that creates it also gives the owner a way to carry it.
 *
 * Only PROGRESS keys travel — UI preferences (`.lang`, `.sidebar`, `.dive`) are per-device taste and
 * are deliberately left out, so restoring a backup never fights the settings of the device you are on.
 *
 * `stamp` is injected (no Date.now() here) so the shape stays deterministic and testable.
 * After a successful restore the CALLER must reload the page: masteryStore/practiceStore hold
 * module-level caches that only read localStorage once (see their `load()`), so a live restore
 * without a reload would leave stale data on screen.
 */

/** The localStorage keys that hold earned progress. Append only — order is the file's field order. */
export const PROGRESS_KEYS = [
  'englishguide.srs', // #/review — the SM-2 schedule
  'englishguide.mastery.v1', // #/definitions + #/idioms — new/learning/known
  'englishguide.practice.v1', // #/practice + module drills — solved exercise ids
  'englishguide.known', // modules marked known · reading texts marked read
] as const;

export type ProgressBackup = {
  app: 'english-guide';
  v: 1;
  exportedAt: string;
  /** key → the RAW stored string (kept verbatim so each store owns its own schema). */
  data: Record<string, string>;
};

export function exportProgress(stamp: string): ProgressBackup {
  const data: Record<string, string> = {};
  for (const key of PROGRESS_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) data[key] = raw;
    } catch {
      /* unavailable storage → that key is simply absent from the backup */
    }
  }
  return { app: 'english-guide', v: 1, exportedAt: stamp, data };
}

export function serializeProgress(stamp: string): string {
  return JSON.stringify(exportProgress(stamp), null, 2);
}

/** A backup file's suggested name: `english-guide-progress-2026-07-25.json`. */
export function backupFileName(stamp: string): string {
  return `english-guide-progress-${stamp.slice(0, 10)}.json`;
}

/**
 * Validate a backup payload. Strict on purpose: an unrecognised file must be REJECTED rather than
 * partially applied, and unknown keys are dropped so a stray file can never write outside the
 * progress namespace.
 */
export function parseBackup(json: string): ProgressBackup | undefined {
  let p: unknown;
  try {
    p = JSON.parse(json);
  } catch {
    return undefined;
  }
  if (typeof p !== 'object' || p === null) return undefined;
  const b = p as Partial<ProgressBackup>;
  if (b.app !== 'english-guide' || b.v !== 1) return undefined;
  if (typeof b.data !== 'object' || b.data === null) return undefined;

  const allowed = new Set<string>(PROGRESS_KEYS);
  const data: Record<string, string> = {};
  for (const [k, v] of Object.entries(b.data)) {
    if (allowed.has(k) && typeof v === 'string') data[k] = v;
  }
  if (Object.keys(data).length === 0) return undefined; // nothing usable — treat as invalid
  return { app: 'english-guide', v: 1, exportedAt: String(b.exportedAt ?? ''), data };
}

/**
 * Apply a backup. Returns the number of keys written, or undefined if the file was rejected.
 * Keys PRESENT in the file are overwritten; keys absent from it are left alone (a backup taken
 * before a store existed must not wipe that store).
 */
export function restoreProgress(json: string): number | undefined {
  const b = parseBackup(json);
  if (!b) return undefined;
  let written = 0;
  for (const [k, v] of Object.entries(b.data)) {
    try {
      localStorage.setItem(k, v);
      written++;
    } catch {
      /* ignore per-key persistence failures */
    }
  }
  return written;
}
