// CHANGED (S1): Web Speech API wrapper (PROJECT-BRIEF §5: IPA on cards + speechSynthesis buttons,
// no audio files). US English focus: prefer an en-US voice, fall back to any en-* voice, and
// degrade to a disabled button (never throw) when the browser has no speech at all (CLAUDE.md §12).
import { useCallback, useEffect, useRef, useState } from 'react';

export function isTtsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

/** Pick the best available voice: exact en-US → any en-* → null (browser default). */
export function pickVoice(voices: readonly SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (voices.length === 0) return null;
  const us = voices.filter((v) => /^en[-_]US/i.test(v.lang));
  // Prefer local (higher quality on most OSes) over network voices within the US set.
  const localUs = us.find((v) => v.localService);
  if (localUs) return localUs;
  if (us[0]) return us[0];
  return voices.find((v) => /^en\b/i.test(v.lang)) ?? null;
}

/**
 * React hook for a speak button: `{ supported, speaking, speak, cancel }`.
 * Speaking a new text cancels the previous utterance (one voice at a time).
 */
export function useTts() {
  const supported = isTtsSupported();
  const [speaking, setSpeaking] = useState(false);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (!supported) return;
    const load = () => {
      voiceRef.current = pickVoice(window.speechSynthesis.getVoices());
    };
    load(); // some browsers have voices immediately …
    window.speechSynthesis.addEventListener('voiceschanged', load); // … others load them async
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load);
  }, [supported]);

  // Cancel any in-flight utterance when the consuming component unmounts.
  useEffect(() => {
    if (!supported) return;
    return () => window.speechSynthesis.cancel();
  }, [supported]);

  const cancel = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [supported]);

  const speak = useCallback(
    (text: string) => {
      if (!supported || !text.trim()) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      if (voiceRef.current) u.voice = voiceRef.current;
      u.lang = voiceRef.current?.lang ?? 'en-US';
      u.rate = 0.95;
      u.onend = () => setSpeaking(false);
      u.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(u);
    },
    [supported],
  );

  return { supported, speaking, speak, cancel };
}
