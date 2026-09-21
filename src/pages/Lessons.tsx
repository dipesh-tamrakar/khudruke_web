import { useState, useMemo, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { LESSONS, CATEGORIES } from '../data';
import { useProgressStore } from '../store';
import { LessonCard } from '../components/LessonCard';
import { PullToRefresh } from '../components/PullToRefresh';
import { Search } from 'lucide-react';

export function Lessons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const { favorites } = useProgressStore();

  const currentCategory = searchParams.get('category') || 'all';

  const handleRefresh = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
  }, []);

  const handleCategorySelect = (catKey: string) => {
    if (catKey === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catKey });
    }
  };

  const filteredLessons = useMemo(() => {
    return LESSONS.filter((lesson) => {
      const matchCategory =
        currentCategory === 'all'
          ? true
          : currentCategory === 'favorites'
          ? favorites.includes(lesson.id)
          : lesson.category === currentCategory;
      const matchDifficulty = selectedDifficulty === 'all' || lesson.difficulty === selectedDifficulty;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        lesson.title.toLowerCase().includes(q) ||
        lesson.summary.toLowerCase().includes(q);

      return matchCategory && matchDifficulty && matchSearch;
    });
  }, [currentCategory, selectedDifficulty, searchQuery, favorites]);

  const categoryFilters = [
    { key: 'all', label: 'All', emoji: '🌟' },
    { key: 'favorites', label: 'Favorites', emoji: '❤️' },
    ...Object.entries(CATEGORIES).map(([key, c]) => ({
      key,
      label: c.label,
      emoji: c.emoji,
    })),
  ];

  const difficultyFilters = [
    { key: 'all', label: 'All levels', emoji: '⭐' },
    { key: 'beginner', label: 'Beginner', emoji: '🟢' },
    { key: 'intermediate', label: 'Intermediate', emoji: '🟡' },
    { key: 'advanced', label: 'Advanced', emoji: '🔴' },
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="max-w-6xl mx-auto px-5 pt-10 pb-28 md:pb-16">
        <div className="text-center mb-8">
          <h1 className="font-heading font-extrabold text-4xl text-slate-800 dark:text-zinc-100 mb-2">
            Lesson library
          </h1>
          <p className="text-slate-500 dark:text-zinc-400">
            Pick a topic and start your money journey.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lessons..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 focus:border-slate-400 dark:focus:border-zinc-500 focus:outline-none font-semibold text-slate-700 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 shadow-sm"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {categoryFilters.map((cat) => {
            const isActive = currentCategory === cat.key;
            const countBadge = cat.key === 'favorites' && favorites.length > 0 ? ` (${favorites.length})` : '';
            return (
              <button
                key={cat.key}
                onClick={() => handleCategorySelect(cat.key)}
                className={`px-4 py-2 rounded-full font-heading font-semibold text-sm transition-all ${
                  isActive
                    ? 'bg-slate-800 dark:bg-zinc-100 text-white dark:text-slate-900 shadow-md'
                    : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 hover:border-slate-400 dark:hover:border-zinc-500'
                }`}
              >
                <span className="mr-1.5">{cat.emoji}</span> {cat.label}{countBadge}
              </button>
            );
          })}
        </div>

        {/* Difficulty Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          <span className="hidden sm:inline text-xs font-heading font-semibold text-slate-400 dark:text-zinc-500 mr-1">
            Skill level:
          </span>
          {difficultyFilters.map((diff) => {
            const isActive = selectedDifficulty === diff.key;
            return (
              <button
                key={diff.key}
                onClick={() => setSelectedDifficulty(diff.key)}
                className={`px-3 py-1.5 rounded-full font-heading font-semibold text-xs transition-all ${
                  isActive
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 border border-slate-200 dark:border-zinc-700 hover:border-amber-300 dark:hover:border-amber-500/50'
                }`}
              >
                <span className="mr-1">{diff.emoji}</span> {diff.label}
              </button>
            );
          })}
        </div>

        {/* Lessons Grid or Empty State */}
        {filteredLessons.length === 0 ? (
          <div className="text-center py-16">
            {currentCategory === 'favorites' ? (
              favorites.length === 0 ? (
                <>
                  <div className="text-5xl mb-3">❤️</div>
                  <p className="font-heading font-semibold text-slate-600 dark:text-zinc-300 text-lg">
                    No favorite lessons saved yet.
                  </p>
                  <p className="text-sm text-slate-400 dark:text-zinc-500 max-w-sm mx-auto mt-1">
                    Tap the heart icon on any lesson card to save it to your favorites!
                  </p>
                </>
              ) : (
                <>
                  <div className="text-5xl mb-3">🔍</div>
                  <p className="font-heading font-semibold text-slate-600 dark:text-zinc-300 text-lg">
                    No favorite lessons match your search.
                  </p>
                  <p className="text-sm text-slate-400 dark:text-zinc-500">
                    Try a different search or skill level.
                  </p>
                </>
              )
            ) : (
              <>
                <div className="text-5xl mb-3">🔍</div>
                <p className="font-heading font-semibold text-slate-600 dark:text-zinc-300 text-lg">
                  No lessons found.
                </p>
                <p className="text-sm text-slate-400 dark:text-zinc-500">
                  Try a different search or topic.
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-100 dark:border-zinc-800 pt-8 text-center text-sm text-slate-400 dark:text-zinc-500 space-y-3">
          <div className="flex items-center justify-center gap-6 text-sm font-heading font-semibold text-slate-600 dark:text-zinc-400">
            <Link to="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <Link to="/lessons" className="hover:text-amber-500 transition-colors">
              Lessons
            </Link>
            <Link to="/about" className="hover:text-amber-500 transition-colors">
              About Us
            </Link>
            <Link to="/progress" className="hover:text-amber-500 transition-colors">
              Progress
            </Link>
          </div>
          <p className="font-heading font-semibold text-slate-700 dark:text-zinc-300">Finance For Kidz 🐷</p>
          <p className="text-xs">Helping kids grow up money-smart.</p>
        </footer>
      </div>
    </PullToRefresh>
  );
}
