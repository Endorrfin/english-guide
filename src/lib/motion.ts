// CHANGED (A1): shared motion hooks for the Section V sims (TokenMorph family). Same behavior the
// Sentence Morpher established (T4): honor prefers-reduced-motion on the client only (SSR reports
// false, so the server renders frame 0), and a step/auto-play controller that withholds nothing but
// the timer under reduced motion — stepping stays fully usable, it is just instant.
import { useCallback, useEffect, useState } from 'react';

/** True when the user asked the OS for reduced motion. Client-only; false during SSR. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return;
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

export type Playback = {
  step: number;
  playing: boolean;
  goto: (s: number) => void;
  toggle: () => void;
  /** Rewind to frame 0 and auto-play (or, under reduced motion, show the last frame at once). */
  replay: (reduced: boolean) => void;
};

/**
 * A frame stepper over 0..last. `toggle` starts auto-play (restarting from 0 if already at the end)
 * or pauses it; `goto` jumps and always pauses. Auto-play stops on the last frame.
 */
export function usePlayback(last: number, intervalMs = 1900, initial = 0): Playback {
  const [step, setStep] = useState(initial);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (step >= last) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => setStep((s) => Math.min(last, s + 1)), intervalMs);
    return () => clearTimeout(id);
  }, [playing, step, last, intervalMs]);

  const goto = useCallback(
    (s: number) => {
      setPlaying(false);
      setStep(Math.max(0, Math.min(last, s)));
    },
    [last],
  );
  const toggle = useCallback(() => {
    if (playing) {
      setPlaying(false);
      return;
    }
    setStep((s) => (s >= last ? 0 : s));
    setPlaying(true);
  }, [playing, last]);

  const replay = useCallback(
    (reduced: boolean) => {
      if (reduced) {
        setPlaying(false);
        setStep(last);
        return;
      }
      setStep(0);
      setPlaying(true);
    },
    [last],
  );

  return { step: Math.min(step, last), playing, goto, toggle, replay };
}
