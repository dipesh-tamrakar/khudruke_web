import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-2xl transition-all px-6 py-3 active:scale-95";
  
  const variants = {
    primary: "bg-amber-400 hover:bg-amber-500 text-slate-900 shadow-sm",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-slate-100",
    outline: "border-2 border-slate-200 hover:border-slate-300 dark:border-zinc-700 dark:hover:border-zinc-600 text-slate-700 dark:text-slate-300"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
