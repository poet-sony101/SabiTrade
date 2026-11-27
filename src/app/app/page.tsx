'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TRADE_TRACKS } from '@/data/trades';
import { getBadges } from '@/data/badges';
import TradeIcon from '@/components/TradeIcon';
import SabiLogo from '@/components/SabiLogo';
import { BadgeRecord } from '@/types';
import { Clock, Award, ArrowRight, ShieldCheck, CheckCircle2, BookOpen, Search, Zap } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useSearch } from '@/context/SearchContext';

export default function LearningAppDashboard() {
  const { user, isAuthenticated, openAuthModal } = useAuth();
  const { openSearch } = useSearch();
  const [earnedBadges, setEarnedBadges] = useState<BadgeRecord[]>([]);

  useEffect(() => {
    setEarnedBadges(getBadges());
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[var(--color-hairline)] pb-8 md:flex-row md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-bold text-[var(--color-ink)] shadow-sm ring-1 ring-[var(--color-hairline)]">
            <SabiLogo className="size-4" />
            <span>SabiTrade Learner Workshop</span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl">
            {user ? `Welcome, ${user.name.split(' ')[0]}` : 'Choose Your Trade Track'}
          </h1>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {user ? (
              <span>
                Connected as <strong className="text-[var(--color-ink)]">{user.role.toUpperCase()}</strong> • 📍 {user.location}
              </span>
            ) : (
              'Read practical 3-minute lessons in English or Pidgin, complete the skill check, and earn your verified badge.'
            )}
          </p>
        </div>

        {/* Action Controls: Search & Badges */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openSearch}
            className="flex items-center gap-2 rounded-2xl bg-[var(--color-surface)] p-3 ring-1 ring-[var(--color-hairline)] hover:ring-[var(--color-accent)] transition-all text-left shadow-sm"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Zap className="size-5" />
            </div>
            <div>
              <p className="text-[11px] text-[var(--color-muted)] font-medium">Workshop Fixes</p>
              <p className="text-xs font-bold text-[var(--color-ink)] flex items-center gap-1">
                <span>Quick Diagnostic</span>
                <kbd className="hidden sm:inline rounded bg-[var(--color-shell)] px-1.5 py-0.2 text-[9px] font-mono border border-[var(--color-hairline)]">
                  Ctrl+K
                </kbd>
              </p>
            </div>
          </button>

          {/* Quick status badge count */}
          <div className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface)] p-3 ring-1 ring-[var(--color-hairline)] shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              <Award className="size-5" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-muted)]">Your Badges</p>
              <p className="text-sm font-bold text-[var(--color-ink)]">
                {earnedBadges.length} Verified
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tracks Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {TRADE_TRACKS.map((track) => {
          const hasBadge = earnedBadges.some(b => b.trackSlug === track.slug);

          return (
            <div
              key={track.id}
              className={`relative flex flex-col justify-between rounded-3xl bg-[var(--color-surface)] p-6 ring-1 transition-all hover:shadow-lg ${
                hasBadge
                  ? 'ring-[var(--color-success)] bg-[var(--color-surface)]'
                  : 'ring-[var(--color-hairline)] hover:ring-[var(--color-accent)]'
              }`}
            >
              {hasBadge && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-[var(--color-success-soft)] px-2.5 py-1 text-[11px] font-bold text-[var(--color-success)]">
                  <CheckCircle2 className="size-3" />
                  <span>Badge Earned</span>
                </span>
              )}

              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--color-shell)] text-[var(--color-accent)]">
                    <TradeIcon name={track.iconName} className="size-6" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                      {track.category}
                    </span>
                    <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">
                      {track.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-1 text-xs font-semibold text-[var(--color-accent)]">
                  {track.titlePidgin}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[var(--color-muted)]">
                  {track.description}
                </p>

                {/* Lessons list preview */}
                <div className="mt-4 space-y-1.5 rounded-2xl bg-[var(--color-paper)] p-3 text-xs text-[var(--color-muted)]">
                  <p className="font-bold text-[var(--color-ink)] text-[11px] uppercase tracking-wider">
                    {track.lessonsCount} Core Modules:
                  </p>
                  <ul className="space-y-1">
                    {track.lessons.slice(0, 3).map((l, idx) => (
                      <li key={l.id} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span className="truncate">{l.title}</span>
                      </li>
                    ))}
                    {track.lessons.length > 3 && (
                      <li className="text-[11px] text-[var(--color-muted)] italic pl-3.5">
                        + {track.lessons.length - 3} more practical guides
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[var(--color-hairline)] pt-4">
                <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" />
                    <span>{track.estimatedMinutes} mins</span>
                  </span>
                  <span>•</span>
                  <span className="font-mono font-semibold">{track.badgeCode}</span>
                </div>

                <Link
                  href={`/app/tracks/${track.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-5 py-2 text-xs font-bold text-[var(--color-on-accent)] transition-all hover:bg-[var(--color-accent-press)] hover:scale-105 active:scale-95"
                >
                  <span>{hasBadge ? 'Review Lessons' : 'Start Track'}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Badges Earned Section */}
      {earnedBadges.length > 0 && (
        <div className="mt-16 rounded-3xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-hairline)] md:p-8">
          <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-4">
            <div>
              <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                Your Verifiable Badge Wallet
              </h3>
              <p className="text-xs text-[var(--color-muted)]">
                These credentials can be shared with clients or verified publicly online.
              </p>
            </div>
            <Link
              href="/verify"
              className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-accent)] hover:underline"
            >
              <span>Public Registry</span>
              <ShieldCheck className="size-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {earnedBadges.map((b) => (
              <div
                key={b.id}
                className="flex flex-col justify-between rounded-2xl bg-[var(--color-paper)] p-4 ring-1 ring-[var(--color-hairline)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                      {b.id}
                    </span>
                    <span className="rounded-full bg-[var(--color-success-soft)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-success)]">
                      {b.score} Score
                    </span>
                  </div>
                  <h4 className="mt-2 text-sm font-bold text-[var(--color-ink)]">
                    {b.trackTitle}
                  </h4>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    Recipient: {b.learnerName}
                  </p>
                  <p className="text-[11px] text-[var(--color-muted)]">
                    Issued: {b.issuedAt}
                  </p>
                </div>

                <Link
                  href={`/verify?id=${b.id}`}
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-[var(--color-shell)] py-1.5 text-xs font-semibold text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
                >
                  <ShieldCheck className="size-3.5 text-[var(--color-accent)]" />
                  <span>View Certificate</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
