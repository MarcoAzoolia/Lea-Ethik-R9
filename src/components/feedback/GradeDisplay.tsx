import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { GRADE_COLORS, GRADE_BG_COLORS } from '../../lib/constants';
import { Star } from 'lucide-react';

interface GradeDisplayProps {
  grade: number;
  label: string;
  percentage: number;
}

function gradeToStars(grade: number): number {
  return Math.max(0, 6 - grade);
}

export function GradeDisplay({ grade, label, percentage }: GradeDisplayProps) {
  const stars = gradeToStars(grade);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="flex flex-col items-center gap-3"
    >
      <div className={clsx(
        'w-24 h-24 rounded-2xl flex items-center justify-center',
        GRADE_BG_COLORS[grade],
      )}>
        <span className={clsx('text-5xl font-extrabold', GRADE_COLORS[grade])}>
          {grade}
        </span>
      </div>
      <div className="text-center">
        <p className={clsx('text-lg font-bold capitalize', GRADE_COLORS[grade])}>{label}</p>
        <p className="text-sm text-text-muted mt-0.5">{percentage}% richtig</p>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Star
              size={24}
              className={i < stars ? 'text-warning fill-warning' : 'text-border'}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
