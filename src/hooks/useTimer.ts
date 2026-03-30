import { useState, useRef, useCallback, useEffect } from 'react';
import { TIMER_WARNING_THRESHOLD, TIMER_CRITICAL_THRESHOLD } from '../lib/constants';

interface UseTimerOptions {
  durationSeconds: number;
  onWarning?: () => void;
  onCritical?: () => void;
  onExpire?: () => void;
}

export function useTimer({ durationSeconds, onWarning, onCritical, onExpire }: UseTimerOptions) {
  const [remaining, setRemaining] = useState(durationSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(0);
  const rafRef = useRef(0);
  const warningFiredRef = useRef(false);
  const criticalFiredRef = useRef(false);
  const onWarningRef = useRef(onWarning);
  const onCriticalRef = useRef(onCritical);
  const onExpireRef = useRef(onExpire);

  onWarningRef.current = onWarning;
  onCriticalRef.current = onCritical;
  onExpireRef.current = onExpire;

  const fraction = remaining / durationSeconds;

  const tick = useCallback(() => {
    const elapsed = (performance.now() - startTimeRef.current) / 1000;
    const left = Math.max(0, durationSeconds - elapsed);
    setRemaining(left);

    const frac = left / durationSeconds;

    if (frac <= TIMER_WARNING_THRESHOLD && !warningFiredRef.current) {
      warningFiredRef.current = true;
      onWarningRef.current?.();
    }
    if (frac <= TIMER_CRITICAL_THRESHOLD && !criticalFiredRef.current) {
      criticalFiredRef.current = true;
      onCriticalRef.current?.();
    }

    if (left <= 0) {
      setIsRunning(false);
      onExpireRef.current?.();
      return;
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [durationSeconds]);

  const start = useCallback(() => {
    warningFiredRef.current = false;
    criticalFiredRef.current = false;
    startTimeRef.current = performance.now();
    setRemaining(durationSeconds);
    setIsRunning(true);
    rafRef.current = requestAnimationFrame(tick);
  }, [durationSeconds, tick]);

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setIsRunning(false);
  }, []);

  const reset = useCallback((newDuration?: number) => {
    cancelAnimationFrame(rafRef.current);
    setIsRunning(false);
    warningFiredRef.current = false;
    criticalFiredRef.current = false;
    setRemaining(newDuration ?? durationSeconds);
  }, [durationSeconds]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const elapsedMs = Math.round((durationSeconds - remaining) * 1000);

  return { remaining, fraction, isRunning, elapsedMs, start, stop, reset };
}
