'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WORKSHOP_DIAGNOSTICS } from '@/data/diagnostics';
import { TRADE_TRACKS } from '@/data/trades';
import { GIGS } from '@/data/gigs';
import { DiagnosticItem, TradeTrack, Gig, Language } from '@/types';
import {
  Search,
  X,
  AlertTriangle,
  Flame,
  Wrench,
  Sparkles,
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronRight,
  Zap,
  CheckCircle2,
  Volume2
} from 'lucide-react';

import { useSearch } from '@/context/SearchContext';

interface DiagnosticSearchModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const QUICK_SYMPTOMS = [
  { label: '💧 Water Damage', query: 'water' },
  { label: '🔌 0.00A No Charge', query: 'charging' },
  { label: '🔋 Swollen Battery', query: 'swollen battery' },
  { label: '☀️ Inverter Overload', query: 'inverter overload' },
  { label: '⚡ Tripping Breaker', query: 'breaker tripping' },
  { label: '⚡ Casing Shock', query: 'electric shock' },
  { label: '🧵 Skipped Stitches', query: 'skipped stitch' },
  { label: '💬 Pricing Dispute', query: 'pricing' }
];

export default function DiagnosticSearchModal(props: DiagnosticSearchModalProps) {
  const searchCtx = useSearch();
  const isOpen = props.isOpen !== undefined ? props.isOpen : searchCtx.isSearchOpen;
  const onClose = props.onClose !== undefined ? props.onClose : searchCtx.closeSearch;

  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'diagnostics' | 'lessons' | 'gigs'>('all');
  const [lang, setLang] = useState<Language>('pidgin');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard navigation & global shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle modal with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }

      // Close on Escape
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter diagnostics
  const q = query.toLowerCase().trim();
  const matchedDiagnostics = WORKSHOP_DIAGNOSTICS.filter((item) => {
    if (!q) return true;
    return (
      item.symptom.toLowerCase().includes(q) ||
      item.symptomPidgin.toLowerCase().includes(q) ||
      item.quickFix.toLowerCase().includes(q) ||
      item.quickFixPidgin.toLowerCase().includes(q) ||
      item.tradeTitle.toLowerCase().includes(q) ||
      item.keywords.some((kw) => kw.toLowerCase().includes(q))
    );
  });

  // Filter lessons
  const matchedLessons: { track: TradeTrack; lesson: any }[] = [];
  TRADE_TRACKS.forEach((track) => {
    track.lessons.forEach((lesson) => {
      if (
        !q ||
        lesson.title.toLowerCase().includes(q) ||
        lesson.titlePidgin.toLowerCase().includes(q) ||
        lesson.keyTakeaway.toLowerCase().includes(q) ||
        lesson.contentEn.toLowerCase().includes(q) ||
        lesson.contentPidgin.toLowerCase().includes(q) ||
        track.title.toLowerCase().includes(q)
      ) {
        matchedLessons.push({ track, lesson });
      }
    });
  });

  // Filter gigs
  const matchedGigs: Gig[] = GIGS.filter((gig) => {
    if (!q) return true;
    return (
      gig.title.toLowerCase().includes(q) ||
      gig.trade.toLowerCase().includes(q) ||
      gig.location.toLowerCase().includes(q) ||
      gig.company.toLowerCase().includes(q) ||
      gig.description.toLowerCase().includes(q)
    );
  });

  const totalResultsCount =
    (activeTab === 'all' || activeTab === 'diagnostics' ? matchedDiagnostics.length : 0) +
    (activeTab === 'all' || activeTab === 'lessons' ? matchedLessons.length : 0) +
    (activeTab === 'all' || activeTab === 'gigs' ? matchedGigs.length : 0);

  const getSeverityBadge = (severity: DiagnosticItem['severity']) => {
    switch (severity) {
      case 'CRITICAL_SAFETY':
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-500 ring-1 ring-rose-500/30">
            <Flame className="size-3" />
            <span>CRITICAL SAFETY</span>
          </span>
        );
      case 'HIGH_FAULT':
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-500 ring-1 ring-amber-500/30">
            <AlertTriangle className="size-3" />
            <span>HIGH FAULT</span>
          </span>
        );
      case 'COMMON_MAINTENANCE':
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-500 ring-1 ring-blue-500/30">
            <Wrench className="size-3" />
            <span>MAINTENANCE</span>
          </span>
        );
      case 'PRO_TIP':
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500 ring-1 ring-emerald-500/30">
            <Sparkles className="size-3" />
            <span>PRO TIP</span>
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-12 md:pt-16 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[var(--color-surface)] border border-[var(--color-hairline)] shadow-[var(--shadow-float)] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Header Input */}
        <div className="relative border-b border-[var(--color-hairline)] p-4 flex items-center gap-3 bg-[var(--color-surface)]">
          <Search className="size-5 text-[var(--color-accent)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type symptom (e.g. water, 0.00A, breaker tripping, inverter beep, skipped stitch)..."
            className="w-full bg-transparent text-sm md:text-base font-semibold text-[var(--color-ink)] placeholder-[var(--color-muted)] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)] px-2 py-1 rounded-md bg-[var(--color-shell)]"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex size-8 items-center justify-center rounded-full bg-[var(--color-shell)] text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Quick Symptoms Pills */}
        <div className="border-b border-[var(--color-hairline)] bg-[var(--color-shell)]/60 px-4 py-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold text-[var(--color-muted)] uppercase tracking-wider shrink-0 mr-1">
            Fast Symptoms:
          </span>
          {QUICK_SYMPTOMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setQuery(item.query)}
              className="shrink-0 rounded-full bg-[var(--color-surface)] border border-[var(--color-hairline)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Tabs & Language Toggle Bar */}
        <div className="border-b border-[var(--color-hairline)] px-4 py-2 flex items-center justify-between bg-[var(--color-surface)] text-xs">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-lg px-2.5 py-1 font-semibold transition-colors ${
                activeTab === 'all'
                  ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              All ({matchedDiagnostics.length + matchedLessons.length + matchedGigs.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('diagnostics')}
              className={`rounded-lg px-2.5 py-1 font-semibold transition-colors ${
                activeTab === 'diagnostics'
                  ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              Diagnostics ({matchedDiagnostics.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('lessons')}
              className={`rounded-lg px-2.5 py-1 font-semibold transition-colors ${
                activeTab === 'lessons'
                  ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              Lessons ({matchedLessons.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gigs')}
              className={`rounded-lg px-2.5 py-1 font-semibold transition-colors ${
                activeTab === 'gigs'
                  ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              Gigs ({matchedGigs.length})
            </button>
          </div>

          {/* Bilingual Language Switch */}
          <div className="flex items-center gap-1 bg-[var(--color-shell)] p-1 rounded-lg border border-[var(--color-hairline)]">
            <button
              type="button"
              onClick={() => setLang('pidgin')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                lang === 'pidgin' ? 'bg-[var(--color-surface)] text-[var(--color-accent)] shadow-sm' : 'text-[var(--color-muted)]'
              }`}
            >
              🇳🇬 Pidgin
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                lang === 'en' ? 'bg-[var(--color-surface)] text-[var(--color-accent)] shadow-sm' : 'text-[var(--color-muted)]'
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {totalResultsCount === 0 ? (
            <div className="py-12 text-center">
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-shell)] text-[var(--color-muted)] mb-3">
                <Search className="size-6" />
              </div>
              <h3 className="text-sm font-bold text-[var(--color-ink)]">
                No diagnostic matches for "{query}"
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-1 max-w-sm mx-auto">
                Try searching for phone hardware, solar inverters, tripping breakers, or sewing machine tension.
              </p>
            </div>
          ) : (
            <>
              {/* Section 1: Workshop Diagnostics & First Aid */}
              {(activeTab === 'all' || activeTab === 'diagnostics') && matchedDiagnostics.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--color-accent)] flex items-center gap-1.5">
                      <Zap className="size-3.5" />
                      <span>Workshop First Aid & Diagnostics</span>
                    </span>
                    <span className="text-[10px] text-[var(--color-muted)]">
                      {matchedDiagnostics.length} troubleshooting protocols
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {matchedDiagnostics.map((item) => (
                      <div
                        key={item.id}
                        className="group rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-shell)]/40 hover:bg-[var(--color-shell)] p-3.5 transition-all hover:border-[var(--color-accent)]"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {getSeverityBadge(item.severity)}
                              <span className="text-[10px] font-semibold text-[var(--color-muted)]">
                                {item.tradeTitle}
                              </span>
                            </div>
                            <h4 className="text-xs md:text-sm font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                              {lang === 'pidgin' ? item.symptomPidgin : item.symptom}
                            </h4>
                          </div>

                          <Link
                            href={`/app/tracks/${item.tradeSlug}`}
                            onClick={onClose}
                            className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-hairline)] text-[var(--color-muted)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-on-accent)] transition-all"
                            title="Open related lesson"
                          >
                            <ArrowRight className="size-3.5" />
                          </Link>
                        </div>

                        <div className="mt-2 rounded-xl bg-[var(--color-surface)] border border-[var(--color-hairline)] p-2.5 text-xs text-[var(--color-ink)] leading-relaxed">
                          <span className="font-bold text-[var(--color-accent)] block mb-0.5">
                            {lang === 'pidgin' ? '🛠️ Wetin to do sharp sharp:' : '🛠️ Immediate Protocol:'}
                          </span>
                          <p className="text-[11px] md:text-xs">
                            {lang === 'pidgin' ? item.quickFixPidgin : item.quickFix}
                          </p>
                        </div>

                        <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--color-muted)]">
                          <span>Reference: {item.lessonTitle}</span>
                          <Link
                            href={`/app/tracks/${item.tradeSlug}`}
                            onClick={onClose}
                            className="text-[var(--color-accent)] font-semibold hover:underline inline-flex items-center gap-1"
                          >
                            <span>Study Full Lesson</span>
                            <ChevronRight className="size-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 2: Interactive Lessons */}
              {(activeTab === 'all' || activeTab === 'lessons') && matchedLessons.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--color-muted)] flex items-center gap-1.5">
                      <BookOpen className="size-3.5 text-[var(--color-accent)]" />
                      <span>Interactive Lessons</span>
                    </span>
                    <span className="text-[10px] text-[var(--color-muted)]">
                      {matchedLessons.length} lessons
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {matchedLessons.slice(0, 8).map(({ track, lesson }) => (
                      <Link
                        key={lesson.id}
                        href={`/app/tracks/${track.slug}`}
                        onClick={onClose}
                        className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-shell)]/30 p-2.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-shell)] transition-all block"
                      >
                        <div className="flex items-center justify-between text-[10px] text-[var(--color-muted)] mb-1">
                          <span className="font-bold text-[var(--color-accent)]">{track.badgeCode}</span>
                          <span>{lesson.readTime}</span>
                        </div>
                        <h5 className="text-xs font-bold text-[var(--color-ink)] line-clamp-1">
                          {lang === 'pidgin' ? lesson.titlePidgin : lesson.title}
                        </h5>
                        <p className="text-[11px] text-[var(--color-muted)] line-clamp-2 mt-1">
                          {lesson.keyTakeaway}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 3: Local Gigs Available */}
              {(activeTab === 'all' || activeTab === 'gigs') && matchedGigs.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--color-muted)] flex items-center gap-1.5">
                      <Briefcase className="size-3.5 text-emerald-500" />
                      <span>Matching Local Trade Gigs</span>
                    </span>
                    <span className="text-[10px] text-[var(--color-muted)]">
                      {matchedGigs.length} vacancies
                    </span>
                  </div>

                  <div className="space-y-2">
                    {matchedGigs.slice(0, 4).map((gig) => (
                      <Link
                        key={gig.id}
                        href="/gigs"
                        onClick={onClose}
                        className="flex items-center justify-between rounded-xl border border-[var(--color-hairline)] bg-[var(--color-shell)]/40 p-3 hover:border-emerald-500 hover:bg-[var(--color-shell)] transition-all"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[var(--color-ink)]">{gig.title}</span>
                            <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                              {gig.pay}
                            </span>
                          </div>
                          <div className="text-[11px] text-[var(--color-muted)] mt-0.5">
                            {gig.company} • 📍 {gig.location}
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          <span>View Gig</span>
                          <ArrowRight className="size-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="border-t border-[var(--color-hairline)] bg-[var(--color-shell)] px-4 py-2.5 flex items-center justify-between text-[11px] text-[var(--color-muted)]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="rounded bg-[var(--color-surface)] border border-[var(--color-hairline)] px-1.5 py-0.5 font-mono text-[10px]">
                ESC
              </kbd>{' '}
              to close
            </span>
            <span>
              <kbd className="rounded bg-[var(--color-surface)] border border-[var(--color-hairline)] px-1.5 py-0.5 font-mono text-[10px]">
                Ctrl+K
              </kbd>{' '}
              anywhere
            </span>
          </div>

          <span className="text-[var(--color-accent)] font-semibold">
            ⚡ Instant Workshop Diagnostic Engine
          </span>
        </div>
      </div>
    </div>
  );
}
