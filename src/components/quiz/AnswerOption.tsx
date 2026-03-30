import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Check, X } from 'lucide-react';
import type { QuizPhase } from '../../types';

interface AnswerOptionProps {
  id: string;
  text: string;
  isCorrect: boolean;
  isSelected: boolean;
  phase: QuizPhase;
  onSelect: () => void;
  index: number;
}

const labels = ['A', 'B', 'C', 'D'];

export function AnswerOption({ text, isCorrect, isSelected, phase, onSelect, index }: AnswerOptionProps) {
  const isReview = phase === 'review';
  const showCorrect = isReview && isCorrect;
  const showWrong = isReview && isSelected && !isCorrect;

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onSelect}
      disabled={isReview}
      className={clsx(
        'w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all cursor-pointer',
        'disabled:cursor-default min-h-[56px]',
        isReview
          ? showCorrect
            ? 'border-success bg-success/10 text-text'
            : showWrong
              ? 'border-error bg-error/10 text-text'
              : 'border-border bg-surface text-text-muted'
          : isSelected
            ? 'border-primary bg-primary/10 text-text'
            : 'border-border bg-surface hover:border-primary/50 hover:bg-primary/5 text-text active:scale-[0.98]',
      )}
    >
      <span className={clsx(
        'flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold',
        isReview
          ? showCorrect
            ? 'bg-success text-white'
            : showWrong
              ? 'bg-error text-white'
              : 'bg-border text-text-muted'
          : 'bg-surface-alt text-text-muted',
      )}>
        {isReview && showCorrect ? <Check size={16} /> :
         isReview && showWrong ? <X size={16} /> :
         labels[index]}
      </span>
      <span className="text-sm font-medium leading-snug">{text}</span>
    </motion.button>
  );
}
