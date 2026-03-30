import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Hash } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { learningAreas } from '../../data/learning-areas';
import { getQuestionsByArea } from '../../data/questions';
import { QUESTION_COUNT_OPTIONS, TIME_PER_QUESTION_OPTIONS } from '../../lib/constants';
import type { AreaId } from '../../types';

interface QuizConfigScreenProps {
  areaId: AreaId;
  onStart: (questionCount: number, timePerQuestion: number) => void;
}

export function QuizConfigScreen({ areaId, onStart }: QuizConfigScreenProps) {
  const area = learningAreas.find(a => a.id === areaId)!;
  const totalAvailable = getQuestionsByArea(areaId).length;
  const [questionCount, setQuestionCount] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(30);

  return (
    <div className="px-4 pb-24 pt-4 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold">{area.title}</h2>
        <p className="text-sm text-text-muted mt-1">Konfiguriere dein Quiz</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6 space-y-5"
      >
        {/* Question count */}
        <Card padding="lg">
          <div className="flex items-center gap-2 mb-3">
            <Hash size={16} className="text-primary" />
            <span className="text-sm font-semibold">Anzahl Fragen</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {QUESTION_COUNT_OPTIONS.map(n => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                className={clsx(
                  'py-3 rounded-xl font-bold text-sm transition-all cursor-pointer',
                  questionCount === n
                    ? 'bg-primary text-white'
                    : 'bg-surface-alt text-text hover:bg-primary/10',
                )}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setQuestionCount(totalAvailable)}
              className={clsx(
                'py-3 rounded-xl font-bold text-sm transition-all cursor-pointer',
                questionCount === totalAvailable
                  ? 'bg-primary text-white'
                  : 'bg-surface-alt text-text hover:bg-primary/10',
              )}
            >
              Alle
            </button>
          </div>
        </Card>

        {/* Time per question */}
        <Card padding="lg">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} className="text-primary" />
            <span className="text-sm font-semibold">Zeit pro Frage</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {TIME_PER_QUESTION_OPTIONS.map(t => (
              <button
                key={t}
                onClick={() => setTimePerQuestion(t)}
                className={clsx(
                  'py-3 rounded-xl font-bold text-sm transition-all cursor-pointer',
                  timePerQuestion === t
                    ? 'bg-primary text-white'
                    : 'bg-surface-alt text-text hover:bg-primary/10',
                )}
              >
                {t}s
              </button>
            ))}
          </div>
        </Card>

        <Button
          size="lg"
          className="w-full mt-4"
          onClick={() => onStart(Math.min(questionCount, totalAvailable), timePerQuestion)}
        >
          Quiz starten
        </Button>
      </motion.div>
    </div>
  );
}
