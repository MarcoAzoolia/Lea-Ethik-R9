import { useState, useCallback } from 'react';
import type { UserProgress, QuizAttempt, AreaId } from '../types';
import { loadProgress, saveProgress } from '../lib/storage';
import { XP_PER_CORRECT, XP_SPEED_BONUS, XP_SPEED_THRESHOLD } from '../lib/constants';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());

  const update = useCallback((updater: (prev: UserProgress) => UserProgress) => {
    setProgress(prev => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  const markWelcomeSeen = useCallback(() => {
    update(p => ({ ...p, hasSeenWelcome: true }));
  }, [update]);

  const addAttempt = useCallback((attempt: QuizAttempt) => {
    update(p => {
      const today = new Date().toISOString().slice(0, 10);

      // Calculate XP
      let xp = attempt.correctAnswers * XP_PER_CORRECT;
      for (const ans of attempt.answers) {
        if (ans.isCorrect && ans.timeSpentMs < attempt.timePerQuestion * 1000 * XP_SPEED_THRESHOLD) {
          xp += XP_SPEED_BONUS;
        }
      }

      // Update streak
      const streakDays = [...p.streakDays];
      if (!streakDays.includes(today)) {
        streakDays.push(today);
      }

      return {
        ...p,
        attempts: [...p.attempts, attempt],
        totalXP: p.totalXP + xp,
        streakDays,
        lastPracticeDate: today,
      };
    });
  }, [update]);

  const unlockAchievement = useCallback((id: string) => {
    update(p => {
      if (p.achievements.includes(id)) return p;
      return { ...p, achievements: [...p.achievements, id] };
    });
  }, [update]);

  const getBestGrade = useCallback((areaId: AreaId): number | null => {
    const areaAttempts = progress.attempts.filter(a => a.areaId === areaId);
    if (areaAttempts.length === 0) return null;
    return Math.min(...areaAttempts.map(a => a.grade));
  }, [progress]);

  const getAreaAttemptCount = useCallback((areaId: AreaId): number => {
    return progress.attempts.filter(a => a.areaId === areaId).length;
  }, [progress]);

  const getCurrentStreak = useCallback((): number => {
    const days = [...progress.streakDays].sort().reverse();
    if (days.length === 0) return 0;

    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    if (days[0] !== today && days[0] !== yesterday) return 0;

    let streak = 1;
    for (let i = 1; i < days.length; i++) {
      const prev = new Date(days[i - 1]);
      const curr = new Date(days[i]);
      const diff = (prev.getTime() - curr.getTime()) / 86400000;
      if (Math.round(diff) === 1) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }, [progress]);

  const getTotalQuestionsAnswered = useCallback((): number => {
    return progress.attempts.reduce((sum, a) => sum + a.totalQuestions, 0);
  }, [progress]);

  return {
    progress,
    markWelcomeSeen,
    addAttempt,
    unlockAchievement,
    getBestGrade,
    getAreaAttemptCount,
    getCurrentStreak,
    getTotalQuestionsAnswered,
  };
}
