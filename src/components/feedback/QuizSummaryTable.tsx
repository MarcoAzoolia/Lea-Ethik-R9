import { Check, X, Clock } from 'lucide-react';
import { clsx } from 'clsx';
import type { AttemptAnswer, Question } from '../../types';

interface QuizSummaryTableProps {
  answers: AttemptAnswer[];
  questions: Question[];
}

export function QuizSummaryTable({ answers, questions }: QuizSummaryTableProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-text-muted mb-3">Auswertung</h3>
      {answers.map((answer, i) => {
        const question = questions.find(q => q.id === answer.questionId);
        if (!question) return null;

        const timedOut = answer.selectedAnswerId === null;

        return (
          <div
            key={answer.questionId}
            className={clsx(
              'flex items-start gap-3 p-3 rounded-xl border text-sm',
              answer.isCorrect
                ? 'border-success/30 bg-success/5'
                : 'border-error/30 bg-error/5',
            )}
          >
            <div className={clsx(
              'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5',
              answer.isCorrect ? 'bg-success text-white' : 'bg-error text-white',
            )}>
              {timedOut ? <Clock size={12} /> : answer.isCorrect ? <Check size={12} /> : <X size={12} />}
            </div>
            <div className="min-w-0">
              <p className="font-medium text-text leading-snug">
                {i + 1}. {question.question}
              </p>
              {!answer.isCorrect && (
                <p className="text-success text-xs mt-1">
                  Richtig: {question.answers.find(a => a.isCorrect)?.text}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
