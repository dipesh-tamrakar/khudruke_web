import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LESSONS, CATEGORIES, DIFFICULTY_LABELS, QUIZ_QUESTIONS, type QuizQuestion, type Badge } from '../data';
import { useProgressStore } from '../store';
import { LessonCard } from '../components/LessonCard';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { triggerConfetti } from '../utils/confetti';
import { Clock, Users, Check, RotateCcw, Trophy, Sparkles, CircleCheck } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
}

function InteractiveQuiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const total = questions.length;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedIndex(idx);
    setIsAnswered(true);
    if (idx === currentQ.correct_index) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < total) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      onComplete(score, total);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 70;

    return (
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-slate-100 dark:border-zinc-800 shadow-sm text-center">
        <div
          className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
            passed ? 'bg-amber-100 dark:bg-amber-500/20' : 'bg-sky-100 dark:bg-sky-500/20'
          }`}
        >
          <Trophy className={`w-10 h-10 ${passed ? 'text-amber-500' : 'text-sky-500'}`} />
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-slate-800 dark:text-zinc-100 mb-1">
          {passed ? 'Amazing work! 🎉' : 'Nice try! 💪'}
        </h3>
        <p className="text-slate-500 dark:text-zinc-400 mb-6">
          You scored <span className="font-bold text-slate-700 dark:text-zinc-200">{score}</span> out of{' '}
          <span className="font-bold text-slate-700 dark:text-zinc-200">{total}</span> ({percentage}%)
        </p>
        <button
          onClick={handleRetry}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 dark:bg-zinc-100 text-white dark:text-slate-900 font-heading font-semibold hover:bg-slate-900 dark:hover:bg-white transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Try again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-zinc-500">
          Question {currentIndex + 1} of {total}
        </span>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-8 rounded-full transition-colors ${
                i < currentIndex
                  ? 'bg-emerald-400'
                  : i === currentIndex
                  ? 'bg-slate-800 dark:bg-zinc-100'
                  : 'bg-slate-200 dark:bg-zinc-700'
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="font-heading font-bold text-xl text-slate-800 dark:text-zinc-100 mb-5 leading-snug">
        {currentQ.question}
      </h3>

      <div className="space-y-3">
        {currentQ.options.map((opt, idx) => {
          let stateStyle =
            'border-slate-200 dark:border-zinc-700 hover:border-slate-400 dark:hover:border-zinc-500 hover:bg-slate-50 dark:hover:bg-zinc-800';

          if (isAnswered) {
            if (idx === currentQ.correct_index) {
              stateStyle = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30';
            } else if (idx === selectedIndex) {
              stateStyle = 'border-rose-400 bg-rose-50 dark:bg-rose-900/30';
            } else {
              stateStyle = 'border-slate-200 dark:border-zinc-700 opacity-60';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`w-full flex items-center justify-between gap-3 px-5 py-4 rounded-2xl border-2 text-left font-semibold text-slate-700 dark:text-zinc-100 transition-all ${stateStyle}`}
            >
              <span>{opt}</span>
              {isAnswered && idx === currentQ.correct_index && (
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-full bg-slate-800 dark:bg-zinc-100 text-white dark:text-slate-900 font-heading font-semibold hover:bg-slate-900 dark:hover:bg-white transition-colors"
          >
            {currentIndex + 1 < total ? 'Next question' : 'See score'}
          </button>
        </div>
      )}
    </div>
  );
}

export function LessonDetail() {
  const { id } = useParams<{ id: string }>();
  const lesson = LESSONS.find((l) => l.id === id);
  const questions = useMemo(() => QUIZ_QUESTIONS.filter((q) => q.lesson_id === id), [id]);
  const { completedLessonIds, markComplete, unmarkComplete } = useProgressStore();
  const [unlockedBadges, setUnlockedBadges] = useState<Badge[]>([]);
  const [showBadgeModal, setShowBadgeModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <div className="text-5xl mb-3">🤔</div>
        <h1 className="font-heading font-extrabold text-2xl text-slate-800 dark:text-zinc-100 mb-2">
          Lesson not found
        </h1>
        <Link to="/lessons" className="text-slate-600 dark:text-zinc-300 font-semibold hover:underline">
          Back to lessons
        </Link>
      </div>
    );
  }

  const isCompleted = completedLessonIds.includes(lesson.id);
  const cat = CATEGORIES[lesson.category] || CATEGORIES.save;
  const relatedLessons = LESSONS.filter(
    (l) => l.category === lesson.category && l.id !== lesson.id
  ).slice(0, 3);

  const handleQuizComplete = (score: number, total: number) => {
    const { unlockedBadges: newBadges } = markComplete(lesson.id, score, total);
    triggerConfetti();

    if (newBadges && newBadges.length > 0) {
      setUnlockedBadges(newBadges);
      setShowBadgeModal(true);
    }
  };

  const handleManualComplete = () => {
    const { unlockedBadges: newBadges } = markComplete(lesson.id, 5, 5);
    triggerConfetti();

    if (newBadges && newBadges.length > 0) {
      setUnlockedBadges(newBadges);
      setShowBadgeModal(true);
    }
  };

  return (
    <div>
      {/* Category Gradient Hero Header */}
      <div className={`bg-gradient-to-br ${cat.gradient}`}>
        <div className="max-w-3xl mx-auto px-5 py-10 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wide bg-white/25 backdrop-blur px-3 py-1 rounded-full">
              {cat.label}
            </span>
            <span className="text-xs font-bold uppercase tracking-wide bg-white/25 backdrop-blur px-3 py-1 rounded-full">
              {DIFFICULTY_LABELS[lesson.difficulty] || lesson.difficulty}
            </span>
          </div>
          <div className="text-6xl mb-3">{lesson.emoji}</div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl mb-3 leading-tight">
            {lesson.title}
          </h1>
          <p className="text-white/90 text-lg leading-relaxed mb-4">{lesson.summary}</p>
          <div className="flex items-center gap-5 text-sm font-semibold text-white/90">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {lesson.duration_minutes} min
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" /> {lesson.age_min}–{lesson.age_max} years
            </span>
          </div>
        </div>
      </div>

      {/* Main Content & Quiz */}
      <div className="max-w-3xl mx-auto px-5 py-10 pb-28 md:pb-16">
        <article className="prose prose-slate max-w-none dark:prose-invert">
          <MarkdownRenderer content={lesson.content} />
        </article>

        {/* Mark as complete */}
        <div className="mt-8">
          {isCompleted ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-heading font-semibold">
                <CircleCheck className="w-5 h-5" /> Lesson completed!
              </div>
              <button
                type="button"
                onClick={() => unmarkComplete(lesson.id)}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-zinc-400 underline block mx-auto cursor-pointer"
              >
                Mark as incomplete
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleManualComplete}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 text-white font-heading font-semibold hover:bg-amber-600 transition-colors cursor-pointer"
            >
              <Sparkles className="w-5 h-5" /> Mark as complete
            </button>
          )}
        </div>

        {/* Interactive Quiz */}
        {questions.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-heading font-bold text-sm mb-3">
                🧠 Quick Quiz
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-slate-800 dark:text-zinc-100">
                Test what you learned
              </h2>
              <p className="text-slate-500 dark:text-zinc-400 text-sm mt-1">
                {questions.length} fun questions — no pressure!
              </p>
            </div>
            <InteractiveQuiz questions={questions} onComplete={handleQuizComplete} />
          </div>
        )}

        {/* Related Lessons */}
        {relatedLessons.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100 mb-4">
              Keep learning
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedLessons.map((rl) => (
                <LessonCard key={rl.id} lesson={rl} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Badge Unlocked Celebration Modal */}
      {showBadgeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-4xl mb-4">
              {unlockedBadges[0]?.emoji || '🏆'}
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-800 dark:text-zinc-100 mb-1">
              Badge Unlocked!
            </h3>
            <div className="font-heading font-bold text-amber-600 dark:text-amber-400 text-lg mb-2">
              {unlockedBadges[0]?.label}
            </div>
            <p className="text-slate-500 dark:text-zinc-400 text-sm mb-6">
              {unlockedBadges[0]?.description}
            </p>
            <button
              onClick={() => setShowBadgeModal(false)}
              className="w-full py-3 rounded-full bg-slate-800 dark:bg-zinc-100 text-white dark:text-slate-900 font-heading font-semibold hover:bg-slate-900 dark:hover:bg-white transition-colors"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
