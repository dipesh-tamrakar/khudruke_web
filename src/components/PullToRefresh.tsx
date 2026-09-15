import React, { useState, useRef } from 'react';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void> | void;
  children: React.ReactNode;
}

export function PullToRefresh({ onRefresh, children }: PullToRefreshProps) {
  const [pullY, setPullY] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const startY = useRef(0);
  const isEligible = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isRefreshing) return;
    if (window.scrollY <= 0) {
      startY.current = e.touches[0].clientY;
      isEligible.current = true;
      setIsPulling(true);
    } else {
      isEligible.current = false;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isEligible.current || isRefreshing) return;
    const diff = e.touches[0].clientY - startY.current;
    if (diff > 0 && window.scrollY <= 0) {
      setPullY(Math.min(diff * 0.5, 90));
    }
  };

  const handleTouchEnd = async () => {
    if (!isEligible.current) return;
    isEligible.current = false;
    setIsPulling(false);

    if (pullY > 55) {
      setIsRefreshing(true);
      setPullY(50);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setPullY(0);
      }
    } else {
      setPullY(0);
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative"
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center justify-center"
        style={{ top: pullY - 44, opacity: Math.min(pullY / 55, 1) }}
      >
        <RefreshCw
          className={`w-6 h-6 text-slate-400 dark:text-zinc-400 ${
            isRefreshing ? 'animate-spin' : ''
          }`}
        />
      </div>
      <div
        style={{ transform: `translateY(${pullY}px)` }}
        className={isPulling ? '' : 'transition-transform duration-300 ease-out'}
      >
        {children}
      </div>
    </div>
  );
}
