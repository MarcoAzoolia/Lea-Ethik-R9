import { motion } from 'framer-motion';
import { RotateCcw, Home } from 'lucide-react';
import { GradeDisplay } from '../feedback/GradeDisplay';
import { QuizSummaryTable } from '../feedback/QuizSummaryTable';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { learningAreas } from '../../data/learning-areas';
import { getQuestionsByArea } from '../../data/questions';
import type { QuizAttempt } from '../../types';

interface ResultScreenProps {
  attempt: QuizAttempt;
  onRetry: () => void;
  onHome: () => void;
}

export function ResultScreen({ attempt, onRetry, onHome }: ResultScreenProps) {
  const area = learningAreas.find(a => a.id === attempt.areaId);
  const questions = getQuestionsByArea(attempt.areaId);
  const avgTimeS = Math.round(attempt.durationMs / attempt.totalQuestions / 1000);

  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-2"
      >
        <p className="text-sm text-text-muted">{area?.title}</p>
      </motion.div>

      <div className="flex justify-center mb-6">
        <GradeDisplay
          grade={attempt.grade}
          label={attempt.gradeLabel}
          percentage={attempt.percentage}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card padding="md" className="mb-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-lg font-bold text-success">{attempt.correctAnswers}</p>
              <p className="text-[10px] text-text-muted">Richtig</p>
            </div>
            <div>
              <p className="text-lg font-bold text-error">{attempt.totalQuestions - attempt.correctAnswers}</p>
              <p className="text-[10px] text-text-muted">Falsch</p>
            </div>
            <div>
              <p className="text-lg font-bold text-text">{avgTimeS}s</p>
              <p className="text-[10px] text-text-muted">pro Frage</p>
            </div>
          </div>
        </Card>

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
