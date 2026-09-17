import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LESSONS, BADGES, type Badge } from './data.ts';

export interface ProgressRecord {
  id: string;
  lesson_id: string;
  score: number;
  total: number;
  completed_date: string;
}

interface ProgressState {
  completed: ProgressRecord[];
  completedLessonIds: string[];
  earnedBadgeIds: string[];
  favorites: string[];
  theme: 'light' | 'dark' | 'system';
  userName: string;
  userEmail: string;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setUserName: (name: string) => void;
  setUserEmail: (email: string) => void;
  toggleFavorite: (lessonId: string) => void;
  isFavorite: (lessonId: string) => boolean;
  markComplete: (lessonId: string, score?: number, total?: number) => { isNew: boolean; unlockedBadges: Badge[] };
  unmarkComplete: (lessonId: string) => void;
  calculateBadges: (completedIds: string[]) => Set<string>;
}

const CATEGORY_BADGES: Record<string, string> = {
  earn: 'earn_explorer',
  save: 'super_saver',
  spend: 'smart_spender',
  grow: 'growth_guru',
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completed: [],
      completedLessonIds: [],
      earnedBadgeIds: [],
      favorites: [],
      theme: 'system',
      userName: 'Young Learner',
      userEmail: 'young.learner@example.com',

      setTheme: (theme) => set({ theme }),
      setUserName: (userName) => set({ userName }),
      setUserEmail: (userEmail) => set({ userEmail }),

      toggleFavorite: (lessonId) => {
        set((state) => {
          const exists = state.favorites.includes(lessonId);
          return {
            favorites: exists
              ? state.favorites.filter((id) => id !== lessonId)
              : [...state.favorites, lessonId],
          };
        });
      },

      isFavorite: (lessonId) => {
        return get().favorites.includes(lessonId);
      },

      calculateBadges: (completedIds: string[]) => {
        const completedSet = new Set(completedIds);
        const badges = new Set<string>();
        const totalLessons = LESSONS.length;

        if (completedSet.size >= 1) badges.add('first_step');

        Object.keys(CATEGORY_BADGES).forEach((cat) => {
          const catLessons = LESSONS.filter((l) => l.category === cat);
          if (catLessons.length > 0 && catLessons.every((l) => completedSet.has(l.id))) {
            badges.add(CATEGORY_BADGES[cat]);
          }
        });

        if (totalLessons > 0 && completedSet.size >= Math.ceil(totalLessons / 2)) {
          badges.add('halfway_hero');
        }

        if (totalLessons > 0 && completedSet.size >= totalLessons) {
          badges.add('money_master');
        }

        return badges;
      },

      markComplete: (lessonId: string, score = 0, total = 0) => {
        const state = get();
        const prevBadges = state.calculateBadges(state.completedLessonIds);

        const existingRecord = state.completed.find((c) => c.lesson_id === lessonId);
        let newCompletedRecords: ProgressRecord[];
        let isNew = false;

        if (existingRecord) {
          newCompletedRecords = state.completed.map((c) =>
            c.lesson_id === lessonId
              ? {
                  ...c,
                  score: Math.max(c.score || 0, score),
                  total: total || c.total,
                  completed_date: new Date().toISOString(),
                }
              : c
          );
        } else {
          isNew = true;
          const newRecord: ProgressRecord = {
            id: 'prog_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            lesson_id: lessonId,
            score,
            total,
            completed_date: new Date().toISOString(),
          };
          newCompletedRecords = [newRecord, ...state.completed];
        }

        const newCompletedIds = Array.from(new Set(newCompletedRecords.map((c) => c.lesson_id)));
        const newBadgesSet = state.calculateBadges(newCompletedIds);
        const newEarnedIds = Array.from(newBadgesSet);

        // Find newly unlocked badges
        const unlockedIds = [...newBadgesSet].filter((bId) => !prevBadges.has(bId));
        const unlockedBadges = BADGES.filter((b) => unlockedIds.includes(b.id));

        set({
          completed: newCompletedRecords,
          completedLessonIds: newCompletedIds,
          earnedBadgeIds: newEarnedIds,
        });

        return { isNew, unlockedBadges };
      },

      unmarkComplete: (lessonId: string) => {
        const state = get();
        const newCompletedRecords = state.completed.filter((c) => c.lesson_id !== lessonId);
        const newCompletedIds = Array.from(new Set(newCompletedRecords.map((c) => c.lesson_id)));
        const newBadgesSet = state.calculateBadges(newCompletedIds);
        set({
          completed: newCompletedRecords,
          completedLessonIds: newCompletedIds,
          earnedBadgeIds: Array.from(newBadgesSet),
        });
      },
    }),
    {
      name: 'finance-for-kidz-progress-v1',
    }
  )
);
