import { type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark active:scale-[0.97]',
  secondary: 'bg-surface border border-border text-text hover:bg-surface-alt active:scale-[0.97]',
  ghost: 'text-text-muted hover:text-text hover:bg-surface-alt',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-3 text-base rounded-xl',
  lg: 'px-6 py-4 text-lg rounded-xl',
};

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-semibold transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
