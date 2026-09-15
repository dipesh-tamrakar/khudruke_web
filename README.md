# Moneyville 🪙

> An engaging, kid-friendly financial literacy web application designed to teach children and young learners essential money management skills through bite-sized lessons, interactive quizzes, and achievement badges.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-v5-4338CA)](https://github.com/pmndrs/zustand)
[![Oxlint](https://img.shields.io/badge/Oxlint-passing-brightgreen)](https://oxc.rs/)

---

## 🌟 Overview

**Moneyville** empowers kids (ages 4–14+) to build a healthy relationship with money. Through a structured four-pillar curriculum, gamified milestones, and a dedicated parent dashboard, learners discover how money works in everyday life—at their own pace and in a safe, ad-free environment.

---

## 🚀 Key Features

- 📚 **Interactive Financial Curriculum (34 Lessons)**
  - Structured across **4 Core Pillars**:
    - 💼 **Earning**: How money is made through chores, careers, and entrepreneurship.
    - 🏦 **Saving**: Setting goals, emergency funds, delayed gratification, and banks.
    - 🛒 **Spending**: Needs vs. wants, comparison shopping, budgeting, and smart decisions.
    - 🌱 **Growing**: Basics of investing, compound interest, giving back, and future planning.
  - Tailored across three age-appropriate difficulty levels: **Beginner**, **Intermediate**, and **Advanced**.
  - Built-in search and category filtering for quick topic discovery.

- 🧠 **Interactive Quizzes & Instant Feedback**
  - Multiple-choice knowledge checks at the conclusion of every lesson.
  - Detailed answer explanations to reinforce key takeaways.
  - Confetti animations and celebratory cues upon passing!

- 🏆 **Achievement Badges & Gamification**
  - 7 unlockable badges recognizing milestones (e.g., *First Step*, *Earn Explorer*, *Super Saver*, *Money Master*).
  - Progress tracking with visual category completion bars and statistics.

- 👨‍👩‍👧 **Parent & Guardian Dashboard**
  - 7-day rolling activity breakdown tracking daily lesson completions and quiz scores.
  - Category mastery percentages showing strengths and learning gaps.
  - Comprehensive lesson history log with completion dates and scores.

- 🎨 **Delightful & Accessible Kid-First UI**
  - Playful typography with **Baloo 2** headings and **Nunito** body text.
  - Full **Dark Mode**, **Light Mode**, and **System Theme** preferences.
  - Smooth mobile experience featuring pull-to-refresh, bottom navigation, and sticky headers.
  - Custom markdown renderer supporting callout boxes, checklists, bulleted lists, and tables.

- 💾 **Local-First & Privacy-Focused**
  - All progress, favorites, and profile settings are stored securely in local browser storage via Zustand persistence.
  - No required logins, trackers, or third-party data collection.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) with `@vitejs/plugin-react` |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **State Management** | [Zustand 5](https://github.com/pmndrs/zustand) (with `persist` middleware) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linter** | [Oxlint](https://oxc.rs/) |
| **Testing** | Node.js Native Test Runner (`node:test`, `node:assert/strict`) |

---

## 📁 Project Structure

```text
├── public/                  # Public assets, favicon, manifest icons
├── src/
│   ├── assets/              # Static artwork, badges, and SVGs
│   ├── components/          # Reusable UI components
│   │   ├── BadgeCard.tsx        # Milestone badge display card
│   │   ├── Button.tsx           # Accessible reusable button variants
│   │   ├── CategoryCard.tsx     # Topic category cards with color gradients
│   │   ├── Layout.tsx           # Header, bottom navigation & page shell
│   │   ├── LessonCard.tsx       # Lesson preview card with difficulty tags
│   │   ├── MarkdownRenderer.tsx # Custom block-level markdown parser & renderer
│   │   ├── ProgressBar.tsx      # Progress indicators & category completion
│   │   ├── PullToRefresh.tsx    # Mobile pull-to-refresh interaction
│   │   └── ScrollToTop.tsx      # Route change scroll reset handler
│   ├── pages/               # Primary view routes
│   │   ├── Home.tsx             # Welcome page, featured lessons & quick stats
│   │   ├── Lessons.tsx          # Lesson catalog with search and difficulty filters
│   │   ├── LessonDetail.tsx     # Reading view, quiz flow & completion trigger
│   │   ├── ParentDashboard.tsx  # Weekly activity & category mastery analytics
│   │   └── Settings.tsx         # Profile, theme switch, favorites & data reset
│   ├── utils/               # Shared utilities
│   │   ├── cn.ts                # Tailwind class merge helper (clsx + tailwind-merge)
│   │   ├── confetti.ts          # Particle celebration effect
│   │   └── markdownParser.ts    # Lightweight markdown block parsing logic
│   ├── data.ts              # Lesson content (34 lessons), quiz questions, & badge data
│   ├── store.ts             # Global Zustand store for user progress & settings
│   ├── App.tsx              # Main routing and theme provider configuration
│   ├── main.tsx             # React DOM root render
│   └── index.css            # Tailwind styles & theme variables
├── tests/                   # Automated unit & integration tests
│   ├── data.test.ts         # Validates curriculum data schema, IDs, and quiz links
│   ├── markdown.test.ts     # Validates markdown parser blocks and syntax rules
│   ├── store.test.ts        # Tests Zustand state actions, badge awards & favorites
│   └── utils.test.ts        # Tests class merging and utility helpers
├── .oxlintrc.json           # Oxlint rules configuration
├── tsconfig.json            # TypeScript base configuration
└── vite.config.ts           # Vite plugins and build options
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v20+ recommended (Node 18+ supported)
- **npm**: v9+ (or `pnpm` / `yarn`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dipesh-tamrakar/khudruke_web.git
   cd khudruke_web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 🧪 Testing & Quality Assurance

The project utilizes Node's built-in fast test runner without heavy external test framework dependencies:

```bash
# Run all unit and integration test suites
npm test

# Run Oxlint linter
npm run lint

# Check TypeScript types and build production bundle
npm run build
```

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Runs the development server at `localhost:5173` |
| `npm run build` | Compiles TypeScript (`tsc -b`) and bundles for production via Vite |
| `npm run preview` | Locally serves the production build from `dist/` |
| `npm run lint` | Runs `oxlint` across code files for lightning-fast linting |
| `npm test` | Executes the 29 automated tests in `tests/` using Node's test runner |

---

## 📄 License

This project is private and proprietary. All rights reserved.
