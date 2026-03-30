import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg';
}

const paddings = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export function Card({ padding = 'md', className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-surface rounded-2xl border border-border',
        paddings[padding],
        className,
      )}
      {...props}
    />
  );
}
