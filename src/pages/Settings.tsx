import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgressStore } from '../store';
import { LESSONS } from '../data';
import { LessonCard } from '../components/LessonCard';
import {
  User,
  Sun,
  Moon,
  Monitor,
  Heart,
  ChartColumn,
  ChevronRight,
  Bell,
  Globe,
  Shield,
  LogOut,
  Trash2,
  X,
  Loader2,
} from 'lucide-react';

export function Settings() {
  const {
    userName,
    userEmail,
    theme,
    setTheme,
    favorites,
  } = useProgressStore();

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState('');

  const favoriteLessons = LESSONS.filter((l) => favorites.includes(l.id));

  const themeOptions = [
    { key: 'light', label: 'Light', icon: Sun },
    { key: 'dark', label: 'Dark', icon: Moon },
    { key: 'system', label: 'System', icon: Monitor },
  ];

  const handleLogout = () => {
    setIsAccountModalOpen(false);
  };

  const handleDeleteAccount = () => {
    setIsDeleting(true);
    setDeleteError('');
    setTimeout(() => {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
      setIsAccountModalOpen(false);
      localStorage.removeItem('finance-for-kidz-progress-v1');
      window.location.reload();
    }, 600);
  };

  return (
    <div className="max-w-2xl mx-auto px-5 pt-10 pb-28 md:pb-16">
      <h1 className="font-heading font-extrabold text-3xl text-slate-800 dark:text-zinc-100 mb-1">
        Settings
      </h1>
      <p className="text-slate-500 dark:text-zinc-400 mb-8">
        Make Finance For Kidz feel just right for you.
      </p>

      {/* User Profile / Account Button */}
      <button
        type="button"
        onClick={() => setIsAccountModalOpen(true)}
        className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-600 hover:shadow-md transition-all text-left mb-6 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
          <User className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-heading font-bold text-slate-800 dark:text-zinc-100 truncate">
            {userName || 'Young Learner'}
          </div>
          <div className="text-sm text-slate-400 dark:text-zinc-500 truncate">
            {userEmail || 'Tap to manage your account'}
          </div>
        </div>
        <span className="text-sm font-semibold text-slate-400 dark:text-zinc-500 md:hidden">›</span>
      </button>

      {/* Parent Dashboard Entry Banner */}
      <Link
        to="/parent-dashboard"
        className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border border-amber-200 dark:border-amber-900/40 hover:shadow-md transition-all text-left mb-6 no-select block"
      >
        <div className="flex items-center gap-4 w-full">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
            <ChartColumn className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-heading font-bold text-slate-800 dark:text-zinc-100">
              Parent Dashboard
            </div>
            <div className="text-sm text-slate-500 dark:text-zinc-400">
              Weekly summary, scores & progress
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0" />
        </div>
      </Link>

      {/* My Favorite Lessons Section */}
      <section className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-5 mb-6">
        <h2 className="font-heading font-bold text-slate-800 dark:text-zinc-100 mb-1 flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-500" fill="currentColor" /> My favorite lessons
        </h2>
        <p className="text-sm text-slate-400 dark:text-zinc-500 mb-4">
          Lessons you've saved for quick access.
        </p>
        {favoriteLessons.length === 0 ? (
          <div className="text-center py-6 border border-dashed border-slate-200 dark:border-zinc-800 rounded-2xl text-slate-400 text-sm">
            No favorite lessons saved yet. Tap the heart on any lesson to save it here!
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">
            {favoriteLessons.map((fl) => (
              <LessonCard key={fl.id} lesson={fl} />
            ))}
          </div>
        )}
      </section>

      {/* Appearance / Theme */}
      <section className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 p-5 mb-6">
        <h2 className="font-heading font-bold text-slate-800 dark:text-zinc-100 mb-1 flex items-center gap-2">
          <Sun className="w-4 h-4 text-amber-500" /> Appearance
        </h2>
        <p className="text-sm text-slate-400 dark:text-zinc-500 mb-4">
          Choose how Finance For Kidz looks.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {themeOptions.map((opt) => {
            const Icon = opt.icon;
            const isActive = theme === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setTheme(opt.key as 'light' | 'dark' | 'system')}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 active:scale-95 no-select ${
                  isActive
                    ? 'border-amber-400 bg-amber-50 dark:bg-amber-500/10 scale-105'
                    : 'border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-amber-500' : 'text-slate-500'}`} />
                <span className="text-sm font-heading font-semibold">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Preferences list */}
      <section className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-zinc-800 overflow-hidden divide-y divide-slate-100 dark:divide-zinc-800">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-slate-400" />
            <div>
              <div className="font-heading font-semibold text-sm text-slate-800 dark:text-zinc-100">
                Notifications
              </div>
              <div className="text-xs text-slate-400">Reminders to keep learning</div>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-full">
            Active
          </span>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-slate-400" />
            <div>
              <div className="font-heading font-semibold text-sm text-slate-800 dark:text-zinc-100">
                Language
              </div>
              <div className="text-xs text-slate-400">English</div>
            </div>
          </div>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-slate-400" />
            <div>
              <div className="font-heading font-semibold text-sm text-slate-800 dark:text-zinc-100">
                Privacy
              </div>
              <div className="text-xs text-slate-400">Your data stays safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Modal */}
      {isAccountModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => {
            if (!showDeleteConfirm) setIsAccountModalOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100">
                Your Account
              </h2>
              <button
                type="button"
                onClick={() => setIsAccountModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Info Box */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
                <User className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-heading font-bold text-slate-800 dark:text-zinc-100 truncate">
                  {userName || 'Young Learner'}
                </div>
                <div className="text-sm text-slate-400 dark:text-zinc-500 truncate">
                  {userEmail || 'Not signed in'}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-slate-800 dark:bg-zinc-100 text-white dark:text-slate-900 font-heading font-semibold hover:bg-slate-900 dark:hover:bg-white transition-colors no-select cursor-pointer"
              >
                <LogOut className="w-4 h-4" /> Log out
              </button>

              <button
                type="button"
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl border-2 border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 font-heading font-semibold hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-colors no-select cursor-pointer"
              >
                <Trash2 className="w-4 h-4" /> Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => {
            if (!isDeleting) setShowDeleteConfirm(false);
          }}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100 mb-2">
              Delete your account?
            </h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed mb-4">
              This is <span className="font-bold text-rose-600 dark:text-rose-400">permanent</span> and cannot be undone. We'll remove your profile and data from our servers, then sign you out.
            </p>

            {deleteError && (
              <div className="mb-4 rounded-xl bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 px-3 py-2 text-sm text-rose-600 dark:text-rose-300">
                {deleteError}
              </div>
            )}

            {isDeleting ? (
              <div className="py-2 flex items-center justify-center gap-2 text-sm font-heading font-semibold text-slate-600 dark:text-zinc-300">
                <Loader2 className="w-4 h-4 animate-spin text-rose-500" /> Deleting your account…
              </div>
            ) : (
              <div className="flex flex-col-reverse sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-4 py-2.5 rounded-full border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 font-heading font-semibold text-sm hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors no-select cursor-pointer"
                >
                  Keep my account
                </button>
                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  className="flex-1 px-4 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-heading font-semibold text-sm transition-colors no-select cursor-pointer"
                >
                  Yes, delete it
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
