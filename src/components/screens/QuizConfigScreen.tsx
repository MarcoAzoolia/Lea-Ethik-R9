import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Hash, Sparkles, Play } from 'lucide-react';
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

const areaColorMap: Record<string, string> = {
  lb1: 'lb1',
  lb2: 'lb2',
  lb3: 'lb3',
  final: 'final',
};

function getSelectedClass(areaColor: string): string {
  const colorKey = areaColorMap[areaColor] ?? 'primary';
  const map: Record<string, string> = {
    lb1: 'bg-lb1 text-white ring-2 ring-lb1/30 shadow-sm',
    lb2: 'bg-lb2 text-white ring-2 ring-lb2/30 shadow-sm',
    lb3: 'bg-lb3 text-white ring-2 ring-lb3/30 shadow-sm',
    final: 'bg-final text-white ring-2 ring-final/30 shadow-sm',
    primary: 'bg-primary text-white ring-2 ring-primary/30 shadow-sm',
  };
  return map[colorKey] ?? map.primary;
}

function getHoverClass(areaColor: string): string {
  const colorKey = areaColorMap[areaColor] ?? 'primary';
  const map: Record<string, string> = {
    lb1: 'hover:border-lb1/40 hover:bg-lb1/5',
    lb2: 'hover:border-lb2/40 hover:bg-lb2/5',
    lb3: 'hover:border-lb3/40 hover:bg-lb3/5',
    final: 'hover:border-final/40 hover:bg-final/5',
    primary: 'hover:border-primary/40 hover:bg-primary/5',
  };
  return map[colorKey] ?? map.primary;
}

function getIconClass(areaColor: string): string {
  const colorKey = areaColorMap[areaColor] ?? 'primary';
  const map: Record<string, string> = {
    lb1: 'text-lb1',
    lb2: 'text-lb2',
    lb3: 'text-lb3',
    final: 'text-final',
    primary: 'text-primary',
  };
  return map[colorKey] ?? map.primary;
}

export function QuizConfigScreen({ areaId, onStart }: QuizConfigScreenProps) {
  const area = learningAreas.find(a => a.id === areaId)!;
  const totalAvailable = getQuestionsByArea(areaId).length;
  const [questionCount, setQuestionCount] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(30);

  const selectedClass = getSelectedClass(area.color);
  const hoverClass = getHoverClass(area.color);
  const iconClass = getIconClass(area.color);

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
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-surface-alt flex items-center justify-center">
              <Hash size={16} className={iconClass} />
            </div>
            <span className="text-sm font-semibold">Anzahl Fragen</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {QUESTION_COUNT_OPTIONS.map(n => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                className={clsx(
                  'py-3 rounded-xl font-bold text-sm transition-all duration-150 cursor-pointer border',
                  questionCount === n
                    ? selectedClass
                    : clsx('bg-surface-alt border-border text-text', hoverClass),
                )}
                aria-label={`${n} Fragen`}
                aria-pressed={questionCount === n}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setQuestionCount(totalAvailable)}
              className={clsx(
                'py-3 rounded-xl font-bold text-sm transition-all duration-150 cursor-pointer border',
                questionCount === totalAvailable
                  ? selectedClass
                  : clsx('bg-surface-alt border-border text-text', hoverClass),
              )}
              aria-label={`Alle ${totalAvailable} Fragen`}
              aria-pressed={questionCount === totalAvailable}
            >
              <div className="flex flex-col items-center">
                <Sparkles size={12} className="mb-0.5 opacity-70" />
                <span>Alle</span>
              </div>
            </button>
          </div>
        </Card>

        {/* Time per question */}
        <Card padding="lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-surface-alt flex items-center justify-center">
              <Clock size={16} className={iconClass} />
            </div>
            <span className="text-sm font-semibold">Zeit pro Frage</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {TIME_PER_QUESTION_OPTIONS.map(t => {
              return (
                <button
                  key={t}
                  onClick={() => setTimePerQuestion(t)}
                  className={clsx(
                    'py-3 rounded-xl font-bold text-sm transition-all duration-150 cursor-pointer border relative',
                    timePerQuestion === t
                      ? selectedClass
                      : clsx('bg-surface-alt border-border text-text', hoverClass),
                  )}
                  aria-label={`${t} Sekunden pro Frage`}
                  aria-pressed={timePerQuestion === t}
                >
                  {t}s
                </button>
              );
            })}
          </div>
        </Card>

        {/* Summary line */}
        <div className="text-center text-xs text-text-muted">
          {questionCount} Fragen, je {timePerQuestion} Sekunden
        </div>

        <Button
          size="lg"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => onStart(Math.min(questionCount, totalAvailable), timePerQuestion)}
        >
          <Play size={18} />
          Quiz starten
        </Button>
      </motion.div>
    </div>
  );
}
