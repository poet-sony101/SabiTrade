'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getBadges } from '@/data/badges';
import { BadgeRecord } from '@/types';
import Link from 'next/link';
import SabiLogo from '@/components/SabiLogo';
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
  Printer,
  Download,
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

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-14">
      {/* Page Header (Hidden on print) */}
      <div className="no-print text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-4 py-1.5 text-xs font-bold text-[var(--color-ink)] shadow-md ring-1 ring-[var(--color-hairline)]">
          <SabiLogo className="size-4" />
          <span>SabiTrade Public Credential Registry</span>
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
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-bold text-[var(--color-on-accent)] shadow-md transition-transform hover:scale-105 active:scale-95 md:text-sm hover:bg-[var(--color-accent-press)]"
          >
            Verify Badge
          </button>
        </form>
      </div>

      {/* Verification Result Certificate */}
      {currentBadge ? (
        <div className="mt-8">
          {/* Action Toolbar (Hidden during print) */}
          <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[var(--color-surface)] p-4 ring-1 ring-[var(--color-hairline)]">
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
              <ShieldCheck className="size-4 text-[var(--color-success)]" />
              <span>Official Registry Record: <strong>{currentBadge.id}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-bold text-[var(--color-on-accent)] shadow-md transition-transform hover:scale-105 active:scale-95 hover:bg-[var(--color-accent-press)]"
              >
                <Printer className="size-3.5" />
                <span>Print / Save PDF Certificate</span>
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-shell)] px-3.5 py-2 text-xs font-semibold text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
              >
                <Share2 className="size-3.5" />
                <span>{copied ? 'Copied!' : 'Share Link'}</span>
              </button>
            </div>
          </div>

          {/* Printable Framed Official Certificate Card */}
          <div
            id="printable-certificate"
            className="relative overflow-hidden rounded-3xl bg-[var(--color-surface)] p-8 shadow-2xl ring-2 ring-[var(--color-accent)] md:p-12"
          >
            {/* Elegant double-line certificate border */}
            <div className="pointer-events-none absolute inset-3 rounded-2xl border-2 border-[var(--color-accent)]/20 md:inset-4 md:border-2" />
            <div className="pointer-events-none absolute inset-4 rounded-xl border border-[var(--color-hairline)] md:inset-6" />

            {/* Certificate Header Banner */}
            <div className="relative text-center">
              <div className="mx-auto flex size-16 items-center justify-center">
                <SabiLogo className="size-16" />
              </div>
              <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--color-accent)]">
                The SabiTrade Vocational & Informal Enterprise Registry
              </p>
              <h2 className="mt-1 font-display text-2xl font-black uppercase tracking-wider text-[var(--color-ink)] md:text-3xl">
                Certificate of Trade Competence
              </h2>
              <div className="mx-auto mt-2 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-[var(--color-accent)]" />
                <span className="font-mono text-xs font-bold text-[var(--color-muted)]">
                  CREDENTIAL ID: {currentBadge.id}
                </span>
                <span className="h-px w-12 bg-[var(--color-accent)]" />
              </div>
            </div>

            {/* Certificate Awarded To Statement */}
            <div className="relative mt-8 text-center">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                This is to certify that
              </p>
              <h3 className="mt-2 font-display text-3xl font-black text-[var(--color-ink)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8 md:text-4xl">
                {currentBadge.learnerName}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-[var(--color-muted)] md:text-sm">
                has completed the standardized curriculum modules, demonstrated practical shop-readiness, and answered 100% of scenario troubleshooting checks in:
              </p>
              <p className="mt-2 font-display text-xl font-extrabold text-[var(--color-accent)] md:text-2xl">
                {currentBadge.trackTitle}
              </p>
            </div>

            {/* Certified Technical Competencies */}
            <div className="relative mt-8 rounded-2xl bg-[var(--color-paper)] p-5 ring-1 ring-[var(--color-hairline)]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                Verified Practical Competencies Mastered:
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {currentBadge.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)]"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Footer Signatures & QR Code */}
            <div className="relative mt-10 grid grid-cols-1 items-end justify-between gap-6 border-t border-[var(--color-hairline)] pt-8 sm:grid-cols-3">
              {/* Registrar Signature */}
              <div className="text-left">
                <div className="h-10 border-b border-dashed border-[var(--color-ink)]/40 flex items-end">
                  <span className="font-display italic text-lg text-[var(--color-accent)]">Oluwaniyi A.</span>
                </div>
                <p className="mt-1 text-[11px] font-bold text-[var(--color-ink)]">Director of Vocational Standards</p>
                <p className="text-[10px] text-[var(--color-muted)]">SabiTrade Education Registry</p>
              </div>

              {/* Central Official Seal */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-[var(--color-accent-soft)] ring-2 ring-[var(--color-accent)]">
                  <Award className="size-8 text-[var(--color-accent)]" />
                </div>
                <span className="mt-1 font-mono text-[9px] font-black uppercase tracking-wider text-[var(--color-accent)]">
                  OFFICIAL VERIFIED SEAL
                </span>
                <span className="text-[10px] text-[var(--color-muted)]">
                  Issued: {currentBadge.issuedAt}
                </span>
              </div>

              {/* QR Verification Seal */}
              <div className="flex flex-col items-end text-right">
                <div className="flex size-16 items-center justify-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-stone-300">
                  <QrCode className="size-14 text-stone-900" />
                </div>
                <p className="mt-1 font-mono text-[9px] text-[var(--color-muted)]">
                  Scan to verify online
                </p>
              </div>
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

      {/* Directory of Sample Badges to Click (Hidden on Print) */}
      <div className="no-print mt-16">
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
