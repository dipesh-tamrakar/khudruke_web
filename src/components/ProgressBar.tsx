
export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-slate-200 dark:bg-zinc-800 rounded-full h-3 overflow-hidden">
      <div 
        className="bg-amber-400 h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
      />
    </div>
  );
}
