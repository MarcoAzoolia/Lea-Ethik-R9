export const TIMER_WARNING_THRESHOLD = 0.25;
export const TIMER_CRITICAL_THRESHOLD = 0.10;

export const XP_PER_CORRECT = 10;
export const XP_SPEED_BONUS = 5;
export const XP_SPEED_THRESHOLD = 0.5;

export const REVIEW_AUTO_ADVANCE_MS = 3000;

export const QUESTION_COUNT_OPTIONS = [5, 10, 15] as const;
export const TIME_PER_QUESTION_OPTIONS = [15, 30, 45, 60] as const;

export const GRADE_THRESHOLDS = [
  { min: 92, grade: 1, label: 'sehr gut' },
  { min: 81, grade: 2, label: 'gut' },
  { min: 67, grade: 3, label: 'befriedigend' },
  { min: 50, grade: 4, label: 'ausreichend' },
  { min: 30, grade: 5, label: 'mangelhaft' },
  { min: 0, grade: 6, label: 'ungenuegend' },
] as const;

export const GRADE_COLORS: Record<number, string> = {
  1: 'text-emerald-500',
  2: 'text-green-500',
  3: 'text-yellow-500',
  4: 'text-orange-500',
  5: 'text-red-400',
  6: 'text-red-600',
};

export const GRADE_BG_COLORS: Record<number, string> = {
  1: 'bg-emerald-500/10',
  2: 'bg-green-500/10',
  3: 'bg-yellow-500/10',
  4: 'bg-orange-500/10',
  5: 'bg-red-400/10',
  6: 'bg-red-600/10',
};
