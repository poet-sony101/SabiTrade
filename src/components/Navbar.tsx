'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sabitrade-theme');
    if (saved === 'dark') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('sabitrade-theme', next);
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-3 md:pt-5">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full bg-[var(--color-surface)]/95 py-2 pl-4 pr-2 shadow-[var(--shadow-float)] backdrop-blur-md ring-1 ring-[var(--color-hairline)]"
      >
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full font-display text-lg font-bold tracking-tight text-[var(--color-ink)] transition-opacity hover:opacity-90"
        >
          <span
            aria-hidden="true"
            className="flex size-7 items-center justify-center rounded-full bg-[var(--color-accent)] font-display text-sm font-bold text-[var(--color-on-accent)] shadow-sm"
          >
            S
          </span>
          <span>SabiTrade</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          <li>
            <Link
              href="/#tracks"
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              Trades
            </Link>
          </li>
          <li>
            <Link
              href="/#how"
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="/gigs"
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              Local Gigs
            </Link>
          </li>
          <li>
            <Link
              href="/verify"
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              Verify Badge
            </Link>
          </li>
          <li>
            <Link
              href="/sponsors"
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              Sponsors
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--color-shell)] text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] transition-transform hover:scale-105 active:scale-95"
          >
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {/* Primary CTA */}
          <Link
            href="/app"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-4 py-2 text-xs font-semibold text-[var(--color-paper)] transition-all hover:bg-[var(--color-accent)] active:scale-95"
          >
            <span>Start Learning</span>
            <ArrowRight className="size-3.5" />
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--color-shell)] text-[var(--color-ink)] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl bg-[var(--color-surface)] p-5 shadow-2xl ring-1 ring-[var(--color-hairline)] md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-semibold text-[var(--color-ink)]">
            <li>
              <Link
                href="/#tracks"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
              >
                Trades & Tracks
              </Link>
            </li>
            <li>
              <Link
                href="/#how"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/gigs"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
              >
                Local Gigs Board
              </Link>
            </li>
            <li>
              <Link
                href="/verify"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
              >
                Check a Badge
              </Link>
            </li>
            <li>
              <Link
                href="/sponsors"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
              >
                Sponsor Cohorts
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/app"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] py-3 text-center text-sm font-bold text-[var(--color-on-accent)]"
              >
                <span>Enter Learning Portal</span>
                <ArrowRight className="size-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
