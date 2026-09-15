import type { Badge } from '../data';
import { Lock } from 'lucide-react';

export function BadgeCard({ badge, isUnlocked }: { badge: Badge; isUnlocked: boolean }) {
  return (
    <div
      className={`flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all ${
        isUnlocked
          ? 'border-amber-300 bg-amber-50 dark:bg-amber-500/10'
          : 'border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/40 opacity-70'
      }`}
    >
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-2 ${
          isUnlocked ? 'bg-white dark:bg-zinc-900 shadow-sm' : 'bg-slate-100 dark:bg-zinc-800 grayscale'
        }`}
      >
        {isUnlocked ? badge.emoji : <Lock className="w-5 h-5 text-slate-400 dark:text-zinc-500" />}
      </div>
      <div
        className={`font-heading font-bold text-sm ${
          isUnlocked ? 'text-slate-800 dark:text-zinc-100' : 'text-slate-400 dark:text-zinc-500'
        }`}
      >
        {badge.label}
      </div>
      <div className="text-[11px] text-slate-400 dark:text-zinc-500 leading-tight mt-0.5">
        {badge.description}
      </div>
    </div>
  );
}
