import { useEffect, useMemo } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, PiggyBank, ArrowLeft, Info, Sun, Moon } from 'lucide-react';
import { LESSONS } from '../data';
import { useProgressStore } from '../store';

const TAB_STORAGE_KEY = 'mv_tab_stack';

function getTabStack(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(TAB_STORAGE_KEY) || '{}') || {};
  } catch {
    return {};
  }
}

function setTabStack(base: string, path: string) {
  const stack = getTabStack();
  if (stack[base] !== path) {
    stack[base] = path;
    try {
      localStorage.setItem(TAB_STORAGE_KEY, JSON.stringify(stack));
    } catch {}
  }
}

function getBaseTab(pathname: string) {
  if (pathname.startsWith('/lessons')) return '/lessons';
  if (pathname.startsWith('/about')) return '/about';
  return '/';
}

function Header() {
  const location = useLocation();
  const { theme, setTheme } = useProgressStore();

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const isLessonDetail = location.pathname.startsWith('/lessons/') && location.pathname !== '/lessons';

  const lessonTitle = useMemo(() => {
    if (!isLessonDetail) return '';
    const id = location.pathname.split('/')[2];
    const lesson = LESSONS.find((l) => l.id === id);
    return lesson ? lesson.title : 'Lesson';
  }, [isLessonDetail, location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/lessons', label: 'Lessons' },
    { to: '/about', label: 'About' },
  ];

  if (isLessonDetail) {
    return (
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-b border-slate-100 dark:border-zinc-800 pt-safe">
        <div className="max-w-3xl mx-auto px-2 h-14 flex items-center gap-1">
          <Link
            to="/lessons"
            aria-label="Back to lessons"
            className="flex items-center justify-center w-10 h-10 rounded-full text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 active:scale-90 transition-all no-select"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          </Link>
          <h1 className="font-heading font-extrabold text-lg text-slate-800 dark:text-zinc-100 truncate flex-1 text-center px-2">
            {lessonTitle || 'Loading…'}
          </h1>
          <div className="w-10" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-zinc-800 pt-safe">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start min-w-0">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <PiggyBank className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100 truncate">
              Finance For Kidz
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1 flex-shrink-0">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full font-heading font-semibold text-sm transition-colors ${
                  isActive
                    ? 'bg-slate-800 text-white dark:bg-zinc-100 dark:text-slate-900'
                    : 'text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex-1 flex items-center justify-end">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 active:scale-95 transition-all no-select cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 dark:text-zinc-200" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentBase = getBaseTab(location.pathname);

  useEffect(() => {
    setTabStack(currentBase, location.pathname);
  }, [currentBase, location.pathname]);

  const tabs = [
    { base: '/', label: 'Home', icon: Home },
    { base: '/lessons', label: 'Lessons', icon: BookOpen },
    { base: '/about', label: 'About', icon: Info },
  ];

  const handleTabClick = (base: string) => {
    if (currentBase === base) {
      setTabStack(base, base);
      navigate(base);
      return;
    }
    const target = getTabStack()[base] || base;
    navigate(target);
  };

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-zinc-800 pb-safe">
      <div className="flex items-stretch justify-around px-2 pt-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentBase === tab.base;
          return (
            <button
              key={tab.base}
              onClick={() => handleTabClick(tab.base)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 py-1.5 rounded-2xl transition-colors no-select ${
                isActive ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'
              }`}
            >
              <Icon
                className={`w-6 h-6 transition-transform ${isActive ? 'scale-110' : ''}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-[11px] font-heading font-semibold">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <MobileBottomNav />
    </div>
  );
}
