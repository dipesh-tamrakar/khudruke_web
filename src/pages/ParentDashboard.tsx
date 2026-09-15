import { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useProgressStore } from '../store';
import { LESSONS, CATEGORIES, type CategoryId } from '../data';
import { PullToRefresh } from '../components/PullToRefresh';
import {
  Sparkles,
  CalendarDays,
  Target,
  Trophy,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

export function ParentDashboard() {
  const { completed, userName } = useProgressStore();

  const handleRefresh = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
  }, []);

  const lessonsById = useMemo(() => {
    const map: Record<string, (typeof LESSONS)[0]> = {};
    LESSONS.forEach((l) => (map[l.id] = l));
    return map;
  }, []);

  // Compute 7 days breakdown
  const weeklyData = useMemo(() => {
    const today = new Date();
    const days: { label: string; dateStr: string; lessons: number; scoreSum: number; totalSum: number }[] = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      days.push({
        label: dayNames[d.getDay()],
        dateStr: d.toDateString(),
        lessons: 0,
        scoreSum: 0,
        totalSum: 0,
      });
    }

    completed.forEach((record) => {
      if (!record.completed_date) return;
      const recDateStr = new Date(record.completed_date).toDateString();
      const match = days.find((day) => day.dateStr === recDateStr);
      if (match) {
        match.lessons += 1;
        match.scoreSum += record.score || 0;
        match.totalSum += record.total || 0;
      }
    });

    return days.map((d) => ({
      label: d.label,
      lessons: d.lessons,
      avg: d.totalSum ? Math.round((d.scoreSum / d.totalSum) * 100) : 0,
    }));
  }, [completed]);

  const thisWeekLessons = weeklyData.reduce((acc, cur) => acc + cur.lessons, 0);

  const weeklyAvgScore = useMemo(() => {
    const activeDays = weeklyData.filter((d) => d.lessons > 0);
    return activeDays.length
      ? Math.round(activeDays.reduce((acc, cur) => acc + cur.avg, 0) / activeDays.length)
      : 0;
  }, [weeklyData]);

  const totalLessonsDone = completed.length;

  const overallAvgScore = useMemo(() => {
    const valid = completed.filter((c) => (c.total || 0) > 0);
    return valid.length
      ? Math.round(valid.reduce((acc, c) => acc + (c.score / c.total), 0) / valid.length * 100)
      : 0;
  }, [completed]);

  // Skill category breakdown
  const categoryStats = useMemo(() => {
    const cats: CategoryId[] = ['earn', 'save', 'spend', 'grow'];
    return cats.map((catId) => {
      const info = CATEGORIES[catId];
      const catLessons = LESSONS.filter((l) => l.category === catId);
      const catRecords = completed.filter((c) => {
        const l = lessonsById[c.lesson_id];
        return l && l.category === catId;
      });

      const scoreSum = catRecords.reduce((acc, c) => acc + (c.score || 0), 0);
      const totalSum = catRecords.reduce((acc, c) => acc + (c.total || 0), 0);
      const avg = totalSum ? Math.round((scoreSum / totalSum) * 100) : 0;

      return {
        id: catId,
        label: info.label,
        emoji: info.emoji,
        soft: info.soft,
        text: info.text,
        totalInCat: catLessons.length,
        doneCount: catRecords.length,
        avg,
      };
    });
  }, [completed, lessonsById]);

  // Recent activity
  const recentActivities = useMemo(() => {
    return [...completed]
      .sort((a, b) => new Date(b.completed_date).getTime() - new Date(a.completed_date).getTime())
      .slice(0, 5)
      .map((c) => ({
        ...c,
        lesson: lessonsById[c.lesson_id],
      }))
      .filter((c) => c.lesson);
  }, [completed, lessonsById]);

  const kpis = [
    { icon: CalendarDays, value: thisWeekLessons, label: 'This week', color: 'text-sky-500', bg: 'bg-sky-100 dark:bg-sky-500/20' },
    { icon: Target, value: `${weeklyAvgScore}%`, label: 'Weekly avg score', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-500/20' },
    { icon: Trophy, value: totalLessonsDone, label: 'Lessons done', color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-500/20' },
    { icon: TrendingUp, value: `${overallAvgScore}%`, label: 'Overall avg', color: 'text-violet-500', bg: 'bg-violet-100 dark:bg-violet-500/20' },
  ];

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="max-w-4xl mx-auto px-5 pt-8 pb-28 md:pb-16">
        <Link
          to="/settings"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:hover:text-zinc-200 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to settings
        </Link>

        {/* Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-amber-200 dark:border-amber-900/40 shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-heading font-semibold text-slate-600 dark:text-zinc-300">
              Parent Dashboard
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl text-slate-800 dark:text-zinc-100 mb-1">
            {userName.split(' ')[0] || 'Your child'}'s week
          </h1>
          <p className="text-slate-500 dark:text-zinc-400">
            A quick look at what's been learned and where it's clicking most.
          </p>
        </div>

        {/* 4 KPIs */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-slate-100 dark:border-zinc-800 text-center shadow-sm"
              >
                <div className={`w-10 h-10 mx-auto rounded-xl ${kpi.bg} flex items-center justify-center mb-2`}>
                  <Icon className={`w-5 h-5 ${kpi.color}`} />
                </div>
                <div className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100">
                  {kpi.value}
                </div>
                <div className="text-xs text-slate-400 dark:text-zinc-500 font-semibold">
                  {kpi.label}
                </div>
              </div>
            );
          })}
        </section>

        {/* Weekly Activity Chart */}
        <section className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-slate-100 dark:border-zinc-800 shadow-sm mb-8">
          <h2 className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100 mb-1">
            Daily Learning Activity
          </h2>
          <p className="text-sm text-slate-400 dark:text-zinc-500 mb-6">
            Lessons completed over the last 7 days.
          </p>

          <div className="grid grid-cols-7 gap-2 pt-6 items-end h-44 border-b border-slate-100 dark:border-zinc-800 pb-4">
            {weeklyData.map((d, i) => {
              const heightPct = Math.min(d.lessons * 25, 100);
              return (
                <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-xs font-bold text-slate-500">{d.lessons > 0 ? d.lessons : ''}</span>
                  <div className="w-full max-w-[36px] bg-slate-100 dark:bg-zinc-800 rounded-t-xl h-28 relative flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-amber-400 to-orange-500 rounded-t-xl transition-all duration-500"
                      style={{ height: `${Math.max(heightPct, 6)}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">{d.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Category Skill Breakdown */}
        <section className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-slate-100 dark:border-zinc-800 shadow-sm mb-8">
          <h2 className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100 mb-1">
            Skill Breakdown
          </h2>
          <p className="text-sm text-slate-400 dark:text-zinc-500 mb-6">
            Progress and quiz mastery across each money skill.
          </p>

          <div className="space-y-5">
            {categoryStats.map((cat) => {
              const progressPct = cat.totalInCat > 0 ? Math.round((cat.doneCount / cat.totalInCat) * 100) : 0;
              return (
                <div key={cat.id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 font-heading font-bold text-slate-800 dark:text-zinc-100">
                      <span>{cat.emoji}</span>
                      <span>{cat.label}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                      <span>
                        {cat.doneCount} / {cat.totalInCat} lessons
                      </span>
                      {cat.avg > 0 && (
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          {cat.avg}% avg
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Activity Feed */}
        <section className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-slate-100 dark:border-zinc-800 shadow-sm">
          <h2 className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100 mb-4">
            Recent Completed Lessons
          </h2>

          {recentActivities.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              No lessons completed yet. Once lessons are finished, you'll see a log of activity and quiz scores here!
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-zinc-800">
              {recentActivities.map((item) => (
                <div key={item.id} className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.lesson?.emoji}</span>
                    <div>
                      <div className="font-heading font-bold text-sm text-slate-800 dark:text-zinc-100">
                        {item.lesson?.title}
                      </div>
                      <div className="text-xs text-slate-400">
                        {item.completed_date ? new Date(item.completed_date).toLocaleDateString() : 'Recently'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.total > 0 && (
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-full">
                        {Math.round((item.score / item.total) * 100)}% score
                      </span>
                    )}
                    <Link
                      to={`/lessons/${item.lesson?.id}`}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PullToRefresh>
  );
}
