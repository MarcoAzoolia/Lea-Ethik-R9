import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { TIMER_WARNING_THRESHOLD, TIMER_CRITICAL_THRESHOLD } from '../../lib/constants';

interface TimerBarProps {
  fraction: number;
  remaining: number;
}

export function TimerBar({ fraction, remaining }: TimerBarProps) {
  const color = fraction <= TIMER_CRITICAL_THRESHOLD
    ? 'bg-error'
    : fraction <= TIMER_WARNING_THRESHOLD
      ? 'bg-warning'
      : 'bg-primary';

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <div className="h-2 flex-1 bg-border rounded-full overflow-hidden mr-3">
          <motion.div
            className={clsx('h-full rounded-full', color)}
            style={{ width: `${fraction * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <span className={clsx(
          'text-sm font-mono font-semibold tabular-nums min-w-[3ch] text-right',
          fraction <= TIMER_CRITICAL_THRESHOLD ? 'text-error' :
          fraction <= TIMER_WARNING_THRESHOLD ? 'text-warning' : 'text-text-muted',
        )}>
          {Math.ceil(remaining)}s
        </span>
      </div>
    </div>
  );
}
