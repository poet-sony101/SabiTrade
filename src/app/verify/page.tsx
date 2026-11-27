'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getBadges, findBadgeById } from '@/data/badges';
import { BadgeRecord } from '@/types';
import Link from 'next/link';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  Share2,
  Calendar,
  Award,
  ArrowRight,
  Sparkles,
  QrCode,
  FileCheck
} from 'lucide-react';

function VerifyContent() {
  const searchParams = useSearchParams();
  const idQuery = searchParams.get('id');

  const [searchId, setSearchId] = useState(idQuery || '');
  const [currentBadge, setCurrentBadge] = useState<BadgeRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [allBadges, setAllBadges] = useState<BadgeRecord[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const list = getBadges();
    setAllBadges(list);
    if (idQuery) {
      const found = list.find((b) => b.id.toLowerCase() === idQuery.trim().toLowerCase());
      if (found) {
        setCurrentBadge(found);
      }
      setHasSearched(true);
    }
  }, [idQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;
    const found = allBadges.find((b) => b.id.toLowerCase() === searchId.trim().toLowerCase());
    setCurrentBadge(found || null);
    setHasSearched(true);
  };

  const handleShare = () => {
    if (typeof window === 'undefined' || !currentBadge) return;
    const url = `${window.location.origin}/verify?id=${currentBadge.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-14">
      {/* Page Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-3.5 py-1 text-xs font-bold text-[var(--color-accent)]">
          <ShieldCheck className="size-4" />
          <span>Public Credential Registry</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-[var(--color-ink)] md:text-5xl">
          Check a SabiTrade Badge
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-muted)]">
          Every badge is cryptographically tied to a completed curriculum and 100% verified trade scenario score. Enter a badge ID or scan a badge QR to verify.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mx-auto mt-8 flex max-w-lg items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted)]" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="e.g. SABI-WRK-2026-7841"
              className="w-full rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] py-3 pl-11 pr-4 text-xs font-semibold text-[var(--color-ink)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] md:text-sm"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-bold text-[var(--color-on-accent)] shadow-md transition-transform hover:scale-105 active:scale-95 md:text-sm"
          >
            Verify Badge
          </button>
        </form>
      </div>

      {/* Verification Result Card */}
      {currentBadge ? (
        <div className="mt-12 overflow-hidden rounded-3xl bg-[var(--color-surface)] p-6 shadow-2xl ring-2 ring-[var(--color-accent)] md:p-10">
          {/* Certificate Header Banner */}
          <div className="flex flex-col justify-between gap-4 border-b border-[var(--color-hairline)] pb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-white shadow-md">
                <FileCheck className="size-6" />
              </span>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  {currentBadge.id}
                </span>
                <h2 className="font-display text-xl font-extrabold text-[var(--color-ink)] md:text-2xl">
                  Official Competence Certificate
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-success-soft)] px-3.5 py-1.5 text-xs font-bold text-[var(--color-success)]">
                <CheckCircle2 className="size-4" />
                <span>VERIFIED & ACTIVE</span>
              </span>
            </div>
          </div>

          {/* Certificate Body */}
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                Issued To:
              </p>
              <h3 className="font-display text-2xl font-extrabold text-[var(--color-ink)] md:text-3xl">
                {currentBadge.learnerName}
              </h3>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Certified Trade Track:
                </p>
                <p className="mt-1 text-base font-bold text-[var(--color-accent)]">
                  {currentBadge.trackTitle} ({currentBadge.badgeCode})
                </p>
              </div>

              {/* Certified Competencies */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Verified Technical Competencies:
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {currentBadge.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[var(--color-paper)] px-3 py-1 text-xs font-medium text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)]"
                    >
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metadata */}
              <div className="mt-8 flex flex-wrap gap-6 border-t border-[var(--color-hairline)] pt-6 text-xs text-[var(--color-muted)]">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-[var(--color-accent)]" />
                  <span>Issued: {currentBadge.issuedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-[var(--color-accent)]" />
                  <span>Practical Examination Score: 100%</span>
                </div>
                <div>
                  <span>Registry: {currentBadge.verifiedBy}</span>
                </div>
              </div>
            </div>

            {/* Simulated QR Code / Seal Box */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[var(--color-paper)] p-6 text-center ring-1 ring-[var(--color-hairline)] md:col-span-4">
              <div className="flex size-32 items-center justify-center rounded-2xl bg-white p-3 shadow-inner ring-1 ring-stone-200">
                <QrCode className="size-24 text-[var(--color-ink)]" />
              </div>
              <p className="mt-3 font-mono text-[10px] text-[var(--color-muted)]">
                Scan to verify on public web
              </p>
              <button
                type="button"
                onClick={handleShare}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-4 py-2 text-xs font-bold text-[var(--color-paper)] transition-transform hover:scale-105 active:scale-95"
              >
                <Share2 className="size-3.5" />
                <span>{copied ? 'Link Copied!' : 'Copy Verification Link'}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        hasSearched && (
          <div className="mt-12 rounded-3xl bg-[var(--color-surface)] p-8 text-center ring-1 ring-[var(--color-hairline)]">
            <p className="text-base font-bold text-[var(--color-ink)]">
              No badge found with ID &ldquo;{searchId}&rdquo;
            </p>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Double check the format (e.g. SABI-WRK-2026-7841) or try one of the registered sample badges below:
            </p>
          </div>
        )
      )}

      {/* Directory of Sample Badges to Click */}
      <div className="mt-16">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
          Recent Registered Public Badges
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {allBadges.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                setSearchId(b.id);
                setCurrentBadge(b);
                setHasSearched(true);
                window.scrollTo({ top: 150, behavior: 'smooth' });
              }}
              className="flex items-center justify-between rounded-2xl bg-[var(--color-surface)] p-3 text-left text-xs ring-1 ring-[var(--color-hairline)] hover:ring-[var(--color-accent)] transition-all"
            >
              <div>
                <p className="font-mono font-bold text-[var(--color-accent)]">{b.id}</p>
                <p className="font-semibold text-[var(--color-ink)]">{b.learnerName}</p>
                <p className="text-[11px] text-[var(--color-muted)]">{b.trackTitle}</p>
              </div>
              <ArrowRight className="size-4 text-[var(--color-muted)]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm">Loading verification registry...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
