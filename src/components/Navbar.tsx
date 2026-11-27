'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
  Calculator,
  Search,
  MessageCircle,
  UserCheck,
  LogOut,
  Award,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import SabiLogo from '@/components/SabiLogo';
import { useAuth } from '@/context/AuthContext';
import { useSearch } from '@/context/SearchContext';

export default function Navbar() {
  const { user, isAuthenticated, openAuthModal, logout } = useAuth();
  const { openSearch } = useSearch();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('sabitrade-theme');
    if (saved === 'dark') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:pt-4">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full bg-[var(--color-surface)]/95 py-2 pl-3.5 pr-2.5 shadow-[var(--shadow-float)] backdrop-blur-md ring-1 ring-[var(--color-hairline)]"
      >
        {/* Title Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full transition-opacity hover:opacity-90 shrink-0"
        >
          <SabiLogo className="size-8" />
          <span className="font-display text-lg md:text-xl font-extrabold tracking-tight text-[var(--color-ink)]">
            Sabi<span className="text-[var(--color-accent)]">Trade</span>
          </span>
        </Link>

        {/* Global Diagnostic Search Trigger (Desktop) */}
        <button
          type="button"
          onClick={openSearch}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--color-shell)] px-3 py-1.5 text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] hover:ring-[var(--color-accent)] transition-all"
          title="Quick Diagnostic Search (Ctrl+K)"
        >
          <Search className="size-3.5 text-[var(--color-accent)]" />
          <span className="hidden md:inline font-medium">Search symptoms...</span>
          <span className="md:hidden font-medium">Search</span>
          <kbd className="hidden lg:inline-flex items-center rounded bg-[var(--color-surface)] px-1.5 py-0.5 text-[10px] font-mono font-semibold border border-[var(--color-hairline)] text-[var(--color-muted)]">
            Ctrl K
          </kbd>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <Link
              href="/#tracks"
              className="rounded-full px-2.5 py-1.5 text-xs font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] hover:bg-[var(--color-shell)]"
            >
              Trades
            </Link>
          </li>
          <li>
            <Link
              href="/quote"
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] hover:bg-[var(--color-shell)]"
            >
              <Calculator className="size-3 text-[var(--color-accent)]" />
              <span>Quote Tool</span>
            </Link>
          </li>
          <li>
            <Link
              href="/gigs"
              className="rounded-full px-2.5 py-1.5 text-xs font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] hover:bg-[var(--color-shell)]"
            >
              Local Gigs
            </Link>
          </li>
          <li>
            <Link
              href="/verify"
              className="rounded-full px-2.5 py-1.5 text-xs font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] hover:bg-[var(--color-shell)]"
            >
              Verify Badge
            </Link>
          </li>
          <li>
            <Link
              href="/sponsors"
              className="rounded-full px-2.5 py-1.5 text-xs font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] hover:bg-[var(--color-shell)]"
            >
              Sponsors
            </Link>
          </li>
        </ul>

        {/* Action Buttons & Auth */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Mobile Search Icon */}
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search diagnostics"
            className="inline-flex size-8 md:size-9 items-center justify-center rounded-full bg-[var(--color-shell)] text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] sm:hidden"
          >
            <Search className="size-4 text-[var(--color-accent)]" />
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex size-8 md:size-9 items-center justify-center rounded-full bg-[var(--color-shell)] text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] transition-transform hover:scale-105 active:scale-95"
          >
            {theme === 'dark' ? (
              <Sun className="size-4 text-[var(--color-accent)]" />
            ) : (
              <Moon className="size-4 text-[var(--color-ink)]" />
            )}
          </button>

          {/* WhatsApp Auth Button or User Profile */}
          {isAuthenticated && user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-shell)] pl-1.5 pr-2.5 py-1 ring-1 ring-[var(--color-hairline)] hover:ring-[var(--color-accent)] transition-all"
              >
                <div className="size-6 md:size-7 rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] font-bold text-xs flex items-center justify-center uppercase shadow-sm">
                  {user.avatarSeed || user.name.slice(0, 2)}
                </div>
                <span className="hidden sm:inline text-xs font-bold text-[var(--color-ink)] max-w-[80px] truncate">
                  {user.name.split(' ')[0]}
                </span>
                <ChevronDown className="size-3 text-[var(--color-muted)]" />
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-hairline)] p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center gap-3 border-b border-[var(--color-hairline)] pb-3">
                    <div className="size-10 rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] font-bold text-sm flex items-center justify-center uppercase shadow-sm">
                      {user.avatarSeed || user.name.slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-[var(--color-ink)] truncate">
                          {user.name}
                        </h4>
                        <span className="rounded bg-emerald-500/10 px-1 py-0.2 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                          {user.role}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--color-muted)] truncate">
                        {user.businessName || user.trade}
                      </p>
                      <p className="text-[10px] font-mono text-[var(--color-accent)]">
                        {user.phone}
                      </p>
                    </div>
                  </div>

                  <div className="py-2 space-y-1 text-xs">
                    <div className="rounded-xl bg-[var(--color-shell)]/60 p-2 text-[11px] text-[var(--color-muted)]">
                      <div className="font-semibold text-[var(--color-ink)]">📍 Workshop Base:</div>
                      <div>{user.location}</div>
                    </div>

                    <Link
                      href="/app"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2 rounded-xl px-2.5 py-2 font-medium text-[var(--color-ink)] hover:bg-[var(--color-shell)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <Award className="size-4 text-[var(--color-accent)]" />
                      <span>My Badges & Progress</span>
                    </Link>

                    <Link
                      href="/quote"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2 rounded-xl px-2.5 py-2 font-medium text-[var(--color-ink)] hover:bg-[var(--color-shell)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <Calculator className="size-4 text-[var(--color-accent)]" />
                      <span>WhatsApp Job Quotes</span>
                    </Link>
                  </div>

                  <div className="border-t border-[var(--color-hairline)] pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setProfileDropdownOpen(false);
                      }}
                      className="flex w-full items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-medium text-rose-500 hover:bg-rose-500/10 transition-colors"
                    >
                      <LogOut className="size-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => openAuthModal('artisan')}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#075E54]/10 border border-[#25D366]/40 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:bg-[#075E54]/20 transition-all shadow-sm"
              title="Connect your phone via WhatsApp"
            >
              <MessageCircle className="size-3.5 fill-[#25D366] text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp Sign In</span>
              <span className="sm:hidden">Sign In</span>
            </button>
          )}

          {/* Primary CTA */}
          <Link
            href="/app"
            className="inline-flex items-center gap-1 rounded-full bg-[var(--color-accent)] px-3.5 py-1.5 md:px-4 md:py-2 text-xs font-bold text-[var(--color-on-accent)] shadow-md transition-all hover:bg-[var(--color-accent-press)] hover:shadow-lg active:scale-95"
          >
            <span>Learn</span>
            <ArrowRight className="size-3 md:size-3.5" />
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-8 md:size-9 items-center justify-center rounded-full bg-[var(--color-shell)] text-[var(--color-ink)] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl bg-[var(--color-surface)] p-5 shadow-2xl ring-1 ring-[var(--color-hairline)] lg:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="mb-4 pb-3 border-b border-[var(--color-hairline)]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openSearch();
              }}
              className="w-full flex items-center justify-between rounded-2xl bg-[var(--color-shell)] p-3 text-xs font-semibold text-[var(--color-ink)] border border-[var(--color-hairline)]"
            >
              <span className="flex items-center gap-2 text-[var(--color-accent)]">
                <Search className="size-4" />
                <span>Search Workshop Symptoms</span>
              </span>
              <kbd className="rounded bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-mono border border-[var(--color-hairline)]">
                Ctrl+K
              </kbd>
            </button>
          </div>

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
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-1 text-[var(--color-accent)] font-bold"
              >
                <Calculator className="size-4" />
                <span>WhatsApp Job Quote Tool</span>
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

            {!isAuthenticated && (
              <li className="pt-2 border-t border-[var(--color-hairline)]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAuthModal('artisan');
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#075E54] py-2.5 text-center text-xs font-bold text-white shadow-sm"
                >
                  <MessageCircle className="size-4 fill-white" />
                  <span>Connect WhatsApp Phone</span>
                </button>
              </li>
            )}

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
