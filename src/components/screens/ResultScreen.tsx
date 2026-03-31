import { motion } from 'framer-motion';
import { RotateCcw, Home, TrendingUp, Clock, Target } from 'lucide-react';
import { GradeDisplay } from '../feedback/GradeDisplay';
import { QuizSummaryTable } from '../feedback/QuizSummaryTable';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { learningAreas } from '../../data/learning-areas';
import { getQuestionsByArea } from '../../data/questions';
import { GRADE_COLORS } from '../../lib/constants';
import { clsx } from 'clsx';
import type { QuizAttempt } from '../../types';

interface ResultScreenProps {
  attempt: QuizAttempt;
  onRetry: () => void;
  onHome: () => void;
}

function getMotivationText(grade: number): string {
  if (grade <= 1) return 'Herausragend! Perfekte Leistung!';
  if (grade <= 2) return 'Sehr stark! Weiter so!';
  if (grade <= 3) return 'Solide Leistung!';
  if (grade <= 4) return 'Bestanden -- mit Uebung wird es besser!';
  return 'Nicht aufgeben -- uebe weiter!';
}

export function ResultScreen({ attempt, onRetry, onHome }: ResultScreenProps) {
  const area = learningAreas.find(a => a.id === attempt.areaId);
  const questions = getQuestionsByArea(attempt.areaId);
  const avgTimeS = Math.round(attempt.durationMs / attempt.totalQuestions / 1000);
  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      {/* Area title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-4"
      >
        <p className="text-sm text-text-muted font-medium">{area?.title}</p>
        <p className="text-xs text-text-muted mt-0.5">Ergebnis</p>
      </motion.div>

      {/* Grade display -- larger and more prominent */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        className="flex justify-center mb-2"
      >
        <GradeDisplay
          grade={attempt.grade}
          label={attempt.gradeLabel}
          percentage={attempt.percentage}
        />
      </motion.div>

      {/* Motivation text */}
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={clsx(
          'text-center text-sm font-semibold mb-6',
          GRADE_COLORS[attempt.grade],
        )}
      >
        {getMotivationText(attempt.grade)}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Stats cards -- three columns with icons */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Card padding="sm" className="text-center">
            <div className="flex justify-center mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                <Target size={14} className="text-success" />
              </div>
            </div>
            <p className="text-xl font-extrabold text-success">{attempt.correctAnswers}</p>
            <p className="text-[10px] text-text-muted mt-0.5">Richtig</p>
          </Card>
          <Card padding="sm" className="text-center">
            <div className="flex justify-center mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center">
                <TrendingUp size={14} className="text-error" />
              </div>
            </div>
            <p className="text-xl font-extrabold text-error">{attempt.totalQuestions - attempt.correctAnswers}</p>
            <p className="text-[10px] text-text-muted mt-0.5">Falsch</p>
          </Card>
          <Card padding="sm" className="text-center">
            <div className="flex justify-center mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock size={14} className="text-primary" />
              </div>
            </div>
            <p className="text-xl font-extrabold text-text">{avgTimeS}s</p>
            <p className="text-[10px] text-text-muted mt-0.5">pro Frage</p>
          </Card>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mb-6">
          <Button variant="secondary" size="md" className="flex-1 flex items-center justify-center gap-2" onClick={onRetry}>
            <RotateCcw size={16} />
            Nochmal
          </Button>
          <Button variant="primary" size="md" className="flex-1 flex items-center justify-center gap-2" onClick={onHome}>
            <Home size={16} />
            Zurueck
          </Button>
        </div>

        <QuizSummaryTable answers={attempt.answers} questions={questions} />
      </motion.div>
    </div>
  );
}
