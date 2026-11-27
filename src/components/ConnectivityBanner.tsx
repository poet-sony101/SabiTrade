'use client';

import React, { useState, useEffect } from 'react';
import { WifiOff, CheckCircle2 } from 'lucide-react';

export default function ConnectivityBanner() {
  const [isOnline, setIsOnline] = useState(true);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 4000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showReconnected) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full px-5 py-2.5 text-xs font-semibold shadow-xl transition-all duration-300 md:text-sm ${
        isOnline
          ? 'bg-[var(--color-success)] text-white'
          : 'bg-[var(--color-ink)] text-[var(--color-paper)] ring-1 ring-[var(--color-accent)]'
      }`}
    >
      {isOnline ? (
        <>
          <CheckCircle2 className="size-4 shrink-0" />
          <span>Back online — your progress is synced.</span>
        </>
      ) : (
        <>
          <WifiOff className="size-4 shrink-0 text-[var(--color-accent)]" />
          <span>You are offline. Keep learning — your progress saves on this phone.</span>
        </>
      )}
    </div>
  );
}
