'use client';

import React, { useState, useEffect } from 'react';
import SabiLogo from '@/components/SabiLogo';
import { Download, X, Smartphone, Share } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    // Check if dismissed recently
    const dismissed = localStorage.getItem('sabitrade_install_dismissed');
    if (dismissed && Date.now() - parseInt(dismissed, 10) < 1000 * 60 * 60 * 24 * 3) {
      return; // dismissed within 3 days
    }

    // Check if already in standalone PWA mode
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    if (isStandalone) {
      return;
    }

    // Detect iOS Safari
    const ua = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(ua);
    setIsIos(isIosDevice);

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // If iOS and not standalone, show prompt after 5 seconds
    if (isIosDevice && !isStandalone) {
      const timer = setTimeout(() => setShowPrompt(true), 5000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosGuide(true);
      return;
    }

    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('sabitrade_install_dismissed', Date.now().toString());
  };

  if (!showPrompt) return null;

  return (
    <aside
      aria-label="Install SabiTrade App"
      className="fixed bottom-16 right-4 z-40 max-w-sm rounded-3xl bg-[var(--color-surface)] p-4 shadow-2xl ring-1 ring-[var(--color-accent)] animate-in fade-in slide-in-from-bottom-4 duration-300 md:bottom-6 md:right-6"
    >
      <div className="flex items-start gap-3">
        <SabiLogo className="size-10 shrink-0" />
        <div className="flex-1 pr-2">
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-[var(--color-ink)]">
              Install SabiTrade App
            </h4>
            <span className="rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-[9px] font-bold text-[var(--color-accent)]">
              Offline Ready
            </span>
          </div>
          <p className="mt-1 text-[11px] leading-snug text-[var(--color-muted)]">
            Add to your home screen. Turn mobile data off and keep learning trades anytime.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={handleInstallClick}
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3.5 py-1.5 text-xs font-bold text-[var(--color-on-accent)] shadow-sm transition-transform hover:scale-105 active:scale-95 hover:bg-[var(--color-accent-press)]"
            >
              <Download className="size-3.5" />
              <span>Install to Phone</span>
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              className="rounded-full px-2.5 py-1.5 text-[11px] font-semibold text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              Later
            </button>
          </div>

          {/* iOS Safari Guide Box */}
          {showIosGuide && (
            <div className="mt-3 rounded-2xl bg-[var(--color-shell)] p-3 text-[11px] text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)]">
              <p className="font-bold">On iPhone / iPad:</p>
              <ol className="mt-1 space-y-1 list-decimal list-inside text-[var(--color-muted)]">
                <li>
                  Tap the <Share className="inline size-3 text-[var(--color-accent)]" /> Share button in Safari.
                </li>
                <li>Scroll down and select <span className="font-semibold text-[var(--color-ink)]">&ldquo;Add to Home Screen&rdquo;</span>.</li>
              </ol>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          className="rounded-full p-1 text-[var(--color-muted)] hover:bg-[var(--color-shell)] hover:text-[var(--color-ink)]"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
      </div>
    </aside>
  );
}
