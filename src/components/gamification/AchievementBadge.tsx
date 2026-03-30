import * as icons from 'lucide-react';
import { clsx } from 'clsx';
import type { Achievement } from '../../types';

interface AchievementBadgeProps {
  achievement: Achievement;
  unlocked: boolean;
}

export function AchievementBadge({ achievement, unlocked }: AchievementBadgeProps) {
  const IconComponent = (icons as unknown as Record<string, icons.LucideIcon>)[achievement.icon] ?? icons.Award;

  return (
    <div className={clsx(
      'flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all',
      unlocked
        ? 'border-primary/30 bg-primary/5'
        : 'border-border bg-surface opacity-40 grayscale',
    )}>
      <div className={clsx(
        'w-10 h-10 rounded-xl flex items-center justify-center',
        unlocked ? 'bg-primary/10 text-primary' : 'bg-border text-text-muted',
      )}>
        <IconComponent size={20} />
      </div>
      <div>
        <p className="text-xs font-semibold">{achievement.title}</p>
        <p className="text-[10px] text-text-muted mt-0.5 leading-tight">{achievement.description}</p>
      </div>
    </div>
  );
}
