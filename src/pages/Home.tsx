import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { LESSONS, BADGES, type CategoryId } from '../data';
import { useProgressStore } from '../store';
import { CategoryCard } from '../components/CategoryCard';
import { LessonCard } from '../components/LessonCard';
import { BadgeCard } from '../components/BadgeCard';
import { PullToRefresh } from '../components/PullToRefresh';
import { Sparkles, ArrowRight, BookOpen, Award, TrendingUp } from 'lucide-react';

export function Home() {
  const { completedLessonIds, earnedBadgeIds } = useProgressStore();

  const handleRefresh = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }, []);

  const totalLessons = LESSONS.length;
  const completedCount = completedLessonIds.length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const featuredLessons = LESSONS.slice(0, 3);
  const categoriesList: CategoryId[] = ['earn', 'save', 'spend', 'grow'];

  const stats = [
    { icon: BookOpen, value: '20+', label: 'Fun lessons', color: 'text-sky-500', bg: 'bg-sky-100 dark:bg-sky-500/20' },
    { icon: Award, value: '100%', label: 'Free to learn', color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-500/20' },
    { icon: TrendingUp, value: '4', label: 'Money skills', color: 'text-violet-500', bg: 'bg-violet-100 dark:bg-violet-500/20' },
    { icon: Sparkles, value: '6+', label: 'Age friendly', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-500/20' },
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="space-y-16 py-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-center max-w-3xl mx-auto px-4 pt-8 pb-4">
          {/* Floating bouncing emojis */}
          <div
            className="absolute top-4 left-4 text-5xl sm:text-6xl opacity-20 animate-bounce pointer-events-none select-none"
            style={{ animationDuration: '3s' }}
          >
            💰
          </div>
          <div
            className="absolute top-12 right-6 text-4xl sm:text-5xl opacity-20 animate-bounce pointer-events-none select-none"
            style={{ animationDuration: '4s', animationDelay: '0.5s' }}
          >
            🪙
          </div>
          <div
            className="absolute bottom-2 left-1/4 text-3xl sm:text-4xl opacity-20 animate-bounce pointer-events-none select-none"
            style={{ animationDuration: '5s' }}
          >
            ✨
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-amber-200 dark:border-amber-900/40 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-heading font-semibold text-slate-600 dark:text-zinc-300">
              Learning money is fun!
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-slate-800 dark:text-zinc-100 leading-tight mb-5">
            Money skills for
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              curious kids
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-lg text-slate-500 dark:text-zinc-400 leading-relaxed mb-8">
            Bite-sized lessons, fun quizzes, and real-world smarts — helping kids earn, save, spend, and grow their money with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/lessons"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-800 dark:bg-zinc-100 text-white dark:text-slate-900 font-heading font-semibold hover:bg-slate-900 dark:hover:bg-white transition-colors shadow-md text-base"
            >
              Start learning <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-200 font-heading font-semibold border border-slate-200 dark:border-zinc-700 hover:border-slate-400 dark:hover:border-zinc-500 transition-colors text-base"
            >
              Explore topics
            </a>
          </div>
        </section>

        {/* 4 Stat Highlights */}
        <section className="max-w-6xl mx-auto px-5 -mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-slate-100 dark:border-zinc-800 text-center shadow-sm"
                >
                  <div className={`w-10 h-10 mx-auto rounded-xl ${stat.bg} flex items-center justify-center mb-2`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-zinc-500 font-semibold">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Progress & Badges Section */}
        <section className="max-w-6xl mx-auto px-5">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-slate-100 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-500" />
              <h2 className="font-heading font-extrabold text-2xl text-slate-800 dark:text-zinc-100">
                Your progress
              </h2>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-600 dark:text-zinc-300">
                {completedCount} of {totalLessons} lessons
              </span>
              <span className="text-sm font-heading font-bold text-amber-600 dark:text-amber-400">
                {progressPercent}%
              </span>
            </div>
            <div className="h-3 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden mb-6">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <h3 className="font-heading font-bold text-slate-700 dark:text-zinc-200 mb-3">
              Badges ({earnedBadgeIds.length}/{BADGES.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BADGES.map((badge) => (
                <BadgeCard
                  key={badge.id}
                  badge={badge}
                  isUnlocked={earnedBadgeIds.includes(badge.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="max-w-6xl mx-auto px-5 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="font-heading font-extrabold text-3xl text-slate-800 dark:text-zinc-100 mb-2">
              Pick a money adventure
            </h2>
            <p className="text-slate-500 dark:text-zinc-400">
              Four big skills every money-smart kid should know.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoriesList.map((catId) => {
              const count = LESSONS.filter((l) => l.category === catId).length;
              return <CategoryCard key={catId} categoryId={catId} count={count} />;
            })}
          </div>
        </section>

        {/* Featured Lessons Section */}
        <section className="max-w-6xl mx-auto px-5 mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-heading font-extrabold text-3xl text-slate-800 dark:text-zinc-100 mb-1">
                Featured lessons
              </h2>
              <p className="text-slate-500 dark:text-zinc-400">Start with these favorites.</p>
            </div>
            <Link
              to="/lessons"
              className="text-sm font-heading font-semibold text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-100 dark:border-zinc-800 pt-8 pb-24 md:pb-8 text-center text-sm text-slate-400 dark:text-zinc-500 space-y-3">
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
            <Link to="/parent-dashboard" className="hover:text-amber-500 transition-colors">
              Parent Dashboard
            </Link>
          </div>
          <p className="font-heading font-semibold text-slate-700 dark:text-zinc-300">Moneyville 🐷</p>
          <p className="text-xs">Helping kids grow up money-smart.</p>
        </footer>
      </div>
    </PullToRefresh>
  );
}
