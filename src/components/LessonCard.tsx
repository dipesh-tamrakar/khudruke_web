import { Link } from 'react-router-dom';
import { type Lesson, CATEGORIES, DIFFICULTY_LABELS } from '../data';
import { useProgressStore } from '../store';
import { Heart, Clock, Users } from 'lucide-react';

export function LessonCard({ lesson }: { lesson: Lesson }) {
  const cat = CATEGORIES[lesson.category] || CATEGORIES.save;
  const { isFavorite, toggleFavorite } = useProgressStore();
  const favorited = isFavorite(lesson.id);

  return (
    <Link
      to={`/lessons/${lesson.id}`}
      className="group block bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-slate-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-2xl ${cat.soft} dark:bg-opacity-20 flex items-center justify-center text-3xl`}>
          {lesson.emoji}
        </div>
        <button
          type="button"
          aria-label={favorited ? 'Remove from favorites' : 'Save to favorites'}
          aria-pressed={favorited}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(lesson.id);
          }}
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all active:scale-90 no-select ${
            favorited
              ? 'bg-rose-50 dark:bg-rose-500/20 text-rose-500'
              : 'bg-slate-100 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 hover:text-rose-400'
          }`}
        >
          <Heart className="w-4 h-4" fill={favorited ? 'currentColor' : 'none'} strokeWidth={2.5} />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-bold uppercase tracking-wide ${cat.text}`}>{cat.label}</span>
        <span className="text-slate-300 dark:text-zinc-600">•</span>
        <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
          {DIFFICULTY_LABELS[lesson.difficulty] || lesson.difficulty}
        </span>
      </div>

      <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-zinc-100 mb-1.5 group-hover:text-slate-900 dark:group-hover:text-white">
        {lesson.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4">
        {lesson.summary}
      </p>

      <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 dark:text-zinc-500">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {lesson.duration_minutes} min
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" /> {lesson.age_min}–{lesson.age_max} yrs
        </span>
      </div>
    </Link>
  );
}
