import { GRADE_THRESHOLDS } from './constants';

export function calculateGrade(correct: number, total: number) {
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);

  for (const threshold of GRADE_THRESHOLDS) {
    if (percentage >= threshold.min) {
      return { grade: threshold.grade, label: threshold.label, percentage };
    }
  }

  return { grade: 6, label: 'ungenuegend', percentage };
}
