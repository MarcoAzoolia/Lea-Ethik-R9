import { useState, useCallback, useRef, useEffect } from 'react';
import { playSound, preloadSounds } from '../lib/audio';
import { loadMuted, saveMuted } from '../lib/storage';

type SoundName = 'correct' | 'wrong' | 'tick' | 'timerWarning' | 'achievement' | 'quizComplete';

export function useAudio() {
  const [isMuted, setIsMuted] = useState(() => loadMuted());
  const preloadedRef = useRef(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!preloadedRef.current) {
        preloadedRef.current = true;
        preloadSounds();
      }
    };
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const play = useCallback((name: SoundName) => {
    if (loadMuted()) return;
    playSound(name);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      saveMuted(next);
      return next;
    });
  }, []);

  return { play, isMuted, toggleMute };
}
