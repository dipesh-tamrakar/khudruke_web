import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppLayout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Lessons } from './pages/Lessons';
import { LessonDetail } from './pages/LessonDetail';
import { About } from './pages/About';
import { Settings } from './pages/Settings';
import { ParentDashboard } from './pages/ParentDashboard';
import { useProgressStore } from './store';

function App() {
  const { theme } = useProgressStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="lessons/:id" element={<LessonDetail />} />
        <Route path="about" element={<About />} />
        <Route path="about-us" element={<Navigate to="/about" replace />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Navigate to="/settings" replace />} />
        <Route path="parent-dashboard" element={<ParentDashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
