// src/data/concepts.ts — the SSOT thin aggregator (standard §4.4).
// CHANGED (S0.1): bootstrap so the S0 tree typechecks — scripts/check-data.ts imports
// `sections`/`modules`, scripts/smoke.ts imports `MODULES`. S1 (golden module) fills it:
// per-module imports from ./modules/m17-modal-system, the 5 sections, the stub() helper
// for unauthored modules, and the lookups (getModule, getSection, adjacentModules, isAuthored).
import type { Module, Section } from './types';

export const sections: Section[] = [];
export const modules: Module[] = [];

/** Canonical alias the SSR smoke consumes (template smoke.ts contract). */
export const MODULES: readonly Module[] = modules;
