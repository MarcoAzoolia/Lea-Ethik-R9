import type { UserProgress } from '../types';

const STORAGE_KEY = 'lea-ethik-r9-progress';

const DEFAULT_PROGRESS: UserProgress = {
  version: 1,
  attempts: [],
  achievements: [],
  streakDays: [],
  lastPracticeDate: null,
  totalXP: 0,
  hasSeenWelcome: false,
};

export function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw) as UserProgress;
    if (parsed.version !== 1) return { ...DEFAULT_PROGRESS };
    return parsed;
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveProgress(progress: UserProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function loadDarkMode(): boolean {
  try {
    return localStorage.getItem('lea-ethik-dark-mode') === 'true';
  } catch {
    return false;
  }
}

export function saveDarkMode(dark: boolean): void {
  localStorage.setItem('lea-ethik-dark-mode', String(dark));
}

export function loadMuted(): boolean {
  try {
    return localStorage.getItem('lea-ethik-muted') === 'true';
  } catch {
    return false;
  }
}

export function saveMuted(muted: boolean): void {
  localStorage.setItem('lea-ethik-muted', String(muted));
}
