import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PullToRefresh } from '../components/PullToRefresh';
import {
  Sparkles,
  PiggyBank,
  Target,
  BookOpen,
  HeartHandshake,
  TrendingUp,
  Coins,
  CheckCircle2,
  Scale,
  SlidersHorizontal,
} from 'lucide-react';

export function About() {
  const handleRefresh = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
  }, []);

  const whatWeDoCards = [
    {
      icon: Scale,
      title: 'Value for Money',
      description:
        'Evaluate purchases and financial decisions based on actual benefit or utility gained relative to cost, rather than price alone or emotional impulse.',
      color: 'text-amber-500',
      bg: 'bg-amber-100 dark:bg-amber-500/20',
      border: 'border-amber-200/60 dark:border-amber-900/30',
    },
    {
      icon: TrendingUp,
      title: 'Future Clarity',
      description:
        'Provide a consistent framework of habits, reviews, and simple metrics that individuals can rely on to plan, adjust, and sustain healthy financial behavior over time.',
      color: 'text-violet-500',
      bg: 'bg-violet-100 dark:bg-violet-500/20',
      border: 'border-violet-200/60 dark:border-violet-900/30',
    },
    {
      icon: SlidersHorizontal,
      title: 'Personal Control',
      description:
        'Empower individuals to make deliberate, informed decisions, shifting them from reactive spenders to proactive financial decision-makers.',
      color: 'text-sky-500',
      bg: 'bg-sky-100 dark:bg-sky-500/20',
      border: 'border-sky-200/60 dark:border-sky-900/30',
    },
    {
      icon: HeartHandshake,
      title: 'Positive Encouragement',
      description:
        'Reinforce positive financial habits using motivation-based feedback (progress tracking, milestone recognition, positive nudges) rather than restriction or guilt-based control.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-100 dark:bg-emerald-500/20',
      border: 'border-emerald-200/60 dark:border-emerald-900/30',
    },
    {
      icon: BookOpen,
      title: 'Bite-Sized Interactive Lessons',
      description:
        'Over 30 structured, story-driven modules that break down complex financial topics into easy-to-digest concepts across Beginner, Intermediate, and Advanced stages.',
      color: 'text-amber-500',
      bg: 'bg-amber-100 dark:bg-amber-500/20',
      border: 'border-amber-200/60 dark:border-amber-900/30',
    },
    {
      icon: CheckCircle2,
      title: 'Quizzes & Instant Feedback',
      description:
        'Interactive knowledge checks at the end of each lesson with celebratory confetti animations and clear explanations that turn mistakes into fun learning opportunities.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-100 dark:bg-emerald-500/20',
      border: 'border-emerald-200/60 dark:border-emerald-900/30',
    },
  ];

  const pillars = [
    {
      emoji: '💼',
      title: 'Earning',
      tagline: 'Effort & Value',
      desc: 'How money is made through effort, chores, careers, and creative entrepreneurship.',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      emoji: '🏦',
      title: 'Saving',
      tagline: 'Patience & Goals',
      desc: 'Setting targets, delaying gratification, understanding banks, and building emergency cushions.',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      emoji: '🛒',
      title: 'Spending',
      tagline: 'Needs vs. Wants',
      desc: 'Smart decision-making, comparing prices, resisting peer pressure, and mindful budgeting.',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      emoji: '🌱',
      title: 'Growing',
      tagline: 'The Future & Giving',
      desc: 'Basics of compound interest, long-term planning, and the joyful power of charitable giving.',
      gradient: 'from-violet-400 to-purple-500',
    },
  ];

  // const commitments = [
  //   {
  //     icon: ShieldCheck,
  //     title: '100% Privacy & Local-First',
  //     desc: 'No accounts required, no tracking, and no data collection. All progress stays safely in your local browser.',
  //   },
  //   {
  //     icon: Smile,
  //     title: 'Ad-Free & Safe Space',
  //     desc: 'Zero commercial ads, third-party banners, or in-app purchases. Pure educational focus for kids.',
  //   },
  //   {
  //     icon: GraduationCap,
  //     title: 'Kid-Centric Pedagogy',
  //     desc: 'Designed with friendly language, clear typography, and relatable examples that resonate with ages 4 to 14+.',
  //   },
  //   {
  //     icon: HeartHandshake,
  //     title: 'Family-Partnered',
  //     desc: 'Empowers kids with autonomy while giving parents visibility to support their learning journey.',
  //   },
  // ];

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="max-w-4xl mx-auto px-5 pt-8 pb-28 md:pb-20 space-y-16">
        {/* Hero Section */}
        <section className="text-center relative max-w-3xl mx-auto pt-4 pb-2">
          {/* Floating decorative icons */}
          <div
            className="absolute -top-2 left-4 text-4xl sm:text-5xl opacity-20 animate-bounce pointer-events-none select-none"
            style={{ animationDuration: '3.5s' }}
          >
            🐷
          </div>
          <div
            className="absolute top-6 right-6 text-3xl sm:text-4xl opacity-20 animate-bounce pointer-events-none select-none"
            style={{ animationDuration: '4.5s', animationDelay: '0.7s' }}
          >
            🪙
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-amber-200 dark:border-amber-900/40 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-heading font-semibold text-slate-600 dark:text-zinc-300">
              Our Story & Purpose
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 dark:text-zinc-100 leading-tight mb-6">
            Empowering the next generation of{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              money-smart kids
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-zinc-400 leading-relaxed">
            Finance For Kidz is a cheerful, interactive financial literacy platform designed to help children and young learners build a confident, healthy relationship with money. Through bite-sized lessons, engaging quizzes, and playful rewards, we turn financial knowledge into a lifelong adventure.
          </p>
        </section>

        {/* Vision Section */}
        <section className="relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-amber-50 via-orange-50/50 to-white dark:from-amber-500/10 dark:via-zinc-900 dark:to-zinc-900 border border-amber-200/80 dark:border-amber-900/40 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
              <Target className="w-7 h-7" />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/20 text-xs font-heading font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                Our Vision
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-zinc-100">
                A world where every child feels confident and capable with money
              </h2>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
                We believe that financial literacy is one of the most vital life skills, yet it is rarely taught during formative childhood years. Our vision is to demystify money early on—transforming what can often be a source of adult anxiety into an accessible, positive, and empowering foundation.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-slate-100 dark:border-zinc-700">
                  <Coins className="w-5 h-5 text-amber-500 mb-2" />
                  <div className="font-heading font-bold text-slate-800 dark:text-zinc-100 text-sm mb-1">
                    Start Early
                  </div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    Forming mindful habits long before first jobs and credit cards.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-slate-100 dark:border-zinc-700">
                  <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                  <div className="font-heading font-bold text-slate-800 dark:text-zinc-100 text-sm mb-1">
                    Real Life Ready
                  </div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    Teaching practical choices, needs vs. wants, and thoughtful goals.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-slate-100 dark:border-zinc-700">
                  <PiggyBank className="w-5 h-5 text-violet-500 mb-2" />
                  <div className="font-heading font-bold text-slate-800 dark:text-zinc-100 text-sm mb-1">
                    Joyful & Free
                  </div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    100% accessible to every child, family, and classroom everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-800 dark:text-zinc-100 mb-3">
              What We Do
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg">
              {/* We make financial education feel like play by combining storytelling, interactive challenges, and supportive reinforcement. */}
              The solution is to develop a value-for-money mindset — a behavioral approach that helps individuals build enduring financial habits through encouragement, control, and clarity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whatWeDoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl bg-white dark:bg-zinc-900 border ${card.border} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${card.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-slate-800 dark:text-zinc-100 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-800 dark:text-zinc-100 mb-3">
              The 4 Pillars of Finance For Kidz
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg">
              Our curriculum is balanced across four essential dimensions of lifelong money smarts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-slate-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{pillar.emoji}</div>
                  <div className="font-heading font-extrabold text-lg text-slate-800 dark:text-zinc-100 mb-0.5">
                    {pillar.title}
                  </div>
                  <div className="text-xs font-heading font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-zinc-800 mt-4 overflow-hidden">
                  <div className={`h-full w-full rounded-full bg-gradient-to-r ${pillar.gradient}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitments & Values */}
        {/*
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-800 dark:text-zinc-100 mb-3">
              Our Commitments to Families
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg">
              Built from the ground up to ensure a safe, private, and joyful educational environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {commitments.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-800 dark:text-zinc-100 text-base mb-1">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        */}

        {/* Footer */}
        <footer className="border-t border-slate-100 dark:border-zinc-800 pt-8 text-center text-sm text-slate-400 dark:text-zinc-500 space-y-3">
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
