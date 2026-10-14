// Data definitions and dynamic content loader for Finance For Kidz

export type CategoryId = 'earn' | 'save' | 'spend' | 'grow' | 'explore';
export type CategoryKey = CategoryId;
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type ContentStatus = 'active' | 'draft' | 'inactive';

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  gradient: string;
  soft: string;
  text: string;
  description: string;
}

export interface Lesson {
  id: string;
  order: number;
  title: string;
  category: CategoryId;
  difficulty: Difficulty;
  emoji: string;
  color?: string;
  summary: string;
  content: string;
  duration_minutes: number;
  age_min: number;
  age_max: number;
  status?: ContentStatus;
  created_at?: string;
}

export interface QuizQuestion {
  id: string;
  lesson_id: string;
  order: number;
  question: string;
  options: string[];
  correct_index: number;
  explanation?: string;
  status?: ContentStatus;
}

export interface Badge {
  id: string;
  label: string;
  emoji: string;
  description: string;
}

export const CATEGORIES: Record<CategoryId, Category> = {
  earn: {
    id: 'earn',
    label: "Earning",
    emoji: "💼",
    gradient: "from-amber-400 to-orange-500",
    soft: "bg-amber-100",
    text: "text-amber-700",
    description: "Discover how money is made through work, chores, and ideas."
  },
  save: {
    id: 'save',
    label: "Saving",
    emoji: "🏦",
    gradient: "from-emerald-400 to-teal-500",
    soft: "bg-emerald-100",
    text: "text-emerald-700",
    description: "Learn to keep some money for later and reach your goals."
  },
  spend: {
    id: 'spend',
    label: "Spending",
    emoji: "🛒",
    gradient: "from-sky-400 to-blue-500",
    soft: "bg-sky-100",
    text: "text-sky-700",
    description: "Make smart choices when buying things you want and need."
  },
  grow: {
    id: 'grow',
    label: "Growing",
    emoji: "🌱",
    gradient: "from-violet-400 to-purple-500",
    soft: "bg-violet-100",
    text: "text-violet-700",
    description: "Let your money work for you and grow over time."
  },
  explore: {
    id: 'explore',
    label: "Exploring",
    emoji: "🧭",
    gradient: "from-indigo-400 to-blue-600",
    soft: "bg-indigo-100",
    text: "text-indigo-700",
    description: "Discover world currencies, trade, financial history, and big ideas."
  }
};

export const DIFFICULTY_LABELS: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

export const BADGES: Badge[] = [
  { id: "first_step", label: "First Step", emoji: "👟", description: "Complete your first lesson" },
  { id: "earn_explorer", label: "Earn Explorer", emoji: "💼", description: "Finish all Earning lessons" },
  { id: "super_saver", label: "Super Saver", emoji: "🏦", description: "Finish all Saving lessons" },
  { id: "smart_spender", label: "Smart Spender", emoji: "🛒", description: "Finish all Spending lessons" },
  { id: "growth_guru", label: "Growth Guru", emoji: "🌱", description: "Finish all Growing lessons" },
  { id: "curious_explorer", label: "Curious Explorer", emoji: "🧭", description: "Finish all Exploring lessons" },
  { id: "halfway_hero", label: "Halfway Hero", emoji: "⭐", description: "Complete half of all lessons" },
  { id: "money_master", label: "Money Master", emoji: "🏆", description: "Complete every lesson" }
];

interface RawLessonFile extends Lesson {
  quizzes?: QuizQuestion[];
}

function loadContent(): { lessons: Lesson[]; quizzes: QuizQuestion[] } {
  const lessons: Lesson[] = [];
  const quizzes: QuizQuestion[] = [];

  // 1. Vite environment (dev server and production build)
  let modules: Record<string, any> = {};
  try {
    modules = import.meta.glob('./content/lessons/*.json', { eager: true });
  } catch {
    // Non-Vite fallback (Node.js test runner)
  }

  if (modules && Object.keys(modules).length > 0) {
    const sortedKeys = Object.keys(modules).sort();
    for (const key of sortedKeys) {
      if (key.includes('_template.json')) continue;
      const mod = modules[key];
      const raw: RawLessonFile = mod.default || mod;
      if (!raw || !raw.id) continue;

      const { quizzes: rawQuizzes, ...lesson } = raw;
      const status: ContentStatus = raw.status || 'active';
      lessons.push({ ...lesson, status });

      if (Array.isArray(rawQuizzes)) {
        quizzes.push(...rawQuizzes.map((q) => ({ ...q, status: q.status || 'active' })));
      }
    }
    return { lessons, quizzes };
  }

  // 2. Node.js environment (e.g., node test runner)
  const nodeProcess = (globalThis as any).process;
  if (typeof nodeProcess !== 'undefined' && typeof nodeProcess.getBuiltinModule === 'function') {
    try {
      const fs = nodeProcess.getBuiltinModule('node:fs');
      const path = nodeProcess.getBuiltinModule('node:path');

      const contentDir = path.resolve(nodeProcess.cwd(), 'src/content/lessons');
      if (fs.existsSync(contentDir)) {
        const files = fs.readdirSync(contentDir).filter((f: string) => f.endsWith('.json') && !f.startsWith('_')).sort();
        for (const file of files) {
          const filePath = path.join(contentDir, file);
          const raw: RawLessonFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          if (!raw || !raw.id) continue;

          const { quizzes: rawQuizzes, ...lesson } = raw;
          const status: ContentStatus = raw.status || 'active';
          lessons.push({ ...lesson, status });

          if (Array.isArray(rawQuizzes)) {
            quizzes.push(...rawQuizzes.map((q) => ({ ...q, status: q.status || 'active' })));
          }
        }
      }
    } catch (err) {
      console.error('Error loading lessons in Node.js environment:', err);
    }
  }

  return { lessons, quizzes };
}

const { lessons: loadedLessons, quizzes: loadedQuizzes } = loadContent();

export const ALL_LESSONS: Lesson[] = loadedLessons;
export const ALL_QUIZ_QUESTIONS: QuizQuestion[] = loadedQuizzes;

// Only active lessons and quizzes are exposed to the public application
export const LESSONS: Lesson[] = loadedLessons.filter((l) => (l.status || 'active') === 'active');
export const QUIZ_QUESTIONS: QuizQuestion[] = loadedQuizzes.filter((q) => {
  const parentLesson = loadedLessons.find((l) => l.id === q.lesson_id);
  const isLessonActive = !parentLesson || (parentLesson.status || 'active') === 'active';
  return isLessonActive && (q.status || 'active') === 'active';
});

// Threshold in days for considering a lesson "new" (auto-expires after 45 days)
export const NEW_LESSON_DAYS_THRESHOLD = 45;

export function isLessonNew(lesson: Lesson, maxDays = NEW_LESSON_DAYS_THRESHOLD): boolean {
  if (!lesson.created_at) return false;
  const createdTime = new Date(lesson.created_at).getTime();
  if (isNaN(createdTime)) return false;
  const now = Date.now();
  const diffDays = (now - createdTime) / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= maxDays;
}
