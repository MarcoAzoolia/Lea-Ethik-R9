import { clsx } from 'clsx';

interface ProgressBarProps {
  value: number;
  max: number;
  colorClass?: string;
}

export function ProgressBar({ value, max, colorClass = 'bg-primary' }: ProgressBarProps) {
  const pct = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));

  return (
    <div className="h-2 bg-border rounded-full overflow-hidden">
      <div
        className={clsx('h-full rounded-full transition-all duration-500', colorClass)}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
