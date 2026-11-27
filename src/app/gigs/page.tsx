'use client';

import React, { useState } from 'react';
import { GIGS } from '@/data/gigs';
import { TRADE_TRACKS } from '@/data/trades';
import {
  MessageCircle,
  Briefcase,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function GigsPage() {
  const { user, openAuthModal } = useAuth();
  const [selectedTrade, setSelectedTrade] = useState<string>('all');
  const [showPostModal, setShowPostModal] = useState(false);
  const [submittedPost, setSubmittedPost] = useState(false);

  const filteredGigs = selectedTrade === 'all'
    ? GIGS
    : GIGS.filter((g) => g.tradeSlug === selectedTrade);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[var(--color-hairline)] pb-8 md:flex-row md:items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-success-soft)] px-3 py-1 text-xs font-bold text-[var(--color-success)]">
            <MessageCircle className="size-3.5" />
            <span>Direct WhatsApp Opportunities</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl">
            Local Trade Gigs & Apprenticeships
          </h1>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Verified local workshops and businesses in Lagos, Abuja, and Ibadan looking for badge-certified technicians.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowPostModal(true)}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-xs font-bold text-[var(--color-paper)] shadow-md hover:bg-[var(--color-accent)] transition-all"
        >
          <span>Post a Local Gig</span>
          <ArrowRight className="size-3.5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedTrade('all')}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
            selectedTrade === 'all'
              ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-sm'
              : 'bg-[var(--color-surface)] text-[var(--color-muted)] ring-1 ring-[var(--color-hairline)] hover:text-[var(--color-ink)]'
          }`}
        >
          All Gigs ({GIGS.length})
        </button>
        {TRADE_TRACKS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedTrade(t.slug)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedTrade === t.slug
                ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-sm'
                : 'bg-[var(--color-surface)] text-[var(--color-muted)] ring-1 ring-[var(--color-hairline)] hover:text-[var(--color-ink)]'
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* Gig Listings */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filteredGigs.map((gig) => {
          const defaultBadgeId = `${gig.requiredBadge}-2026-7841`;
          const applicantName = user ? user.name : 'an artisan';
          const applicantPhone = user ? ` (WhatsApp: ${user.phone})` : '';
          const whatsappText = `Hello ${gig.company}, my name is ${applicantName}${applicantPhone}. I saw your vacancy for "${gig.title}" on SabiTrade. Here is my verified competence badge: https://sabitrade.vercel.app/verify?id=${defaultBadgeId}`;
          const waUrl = `https://wa.me/${gig.whatsapp.replace('+', '')}?text=${encodeURIComponent(whatsappText)}`;

          return (
            <div
              key={gig.id}
              className="flex flex-col justify-between rounded-3xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-hairline)] transition-all hover:shadow-lg hover:ring-[var(--color-accent)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[var(--color-shell)] px-3 py-1 text-[11px] font-bold text-[var(--color-accent)]">
                    {gig.trade}
                  </span>
                  <span className="text-xs font-bold text-[var(--color-success)]">
                    {gig.pay}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-[var(--color-ink)]">
                  {gig.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-ink)]">{gig.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3 text-[var(--color-accent)]" />
                    <span>{gig.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    <span>{gig.posted}</span>
                  </span>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">
                  {gig.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[var(--color-hairline)] pt-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)]">
                  <ShieldCheck className="size-4 text-[var(--color-accent)]" />
                  <span>Requires {gig.requiredBadge}</span>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-success)] px-5 py-2 text-xs font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="size-4" />
                  <span>Apply on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Post a Gig Modal */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-[var(--color-surface)] p-6 shadow-2xl ring-1 ring-[var(--color-hairline)] md:p-8">
            <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
              Post a Local Vacancy
            </h3>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Hire trusted apprentices and hands who have verified badges in your target trade.
            </p>

            {!submittedPost ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmittedPost(true);
                }}
                className="mt-5 space-y-3 text-xs"
              >
                <div>
                  <label className="font-bold text-[var(--color-ink)]">Shop / Business Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Electrical Services"
                    className="mt-1 w-full rounded-full border border-[var(--color-hairline)] bg-[var(--color-paper)] px-4 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[var(--color-ink)]">Location (City, Area)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ikeja, Lagos"
                    className="mt-1 w-full rounded-full border border-[var(--color-hairline)] bg-[var(--color-paper)] px-4 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[var(--color-ink)]">WhatsApp Contact Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 803 123 4567"
                    className="mt-1 w-full rounded-full border border-[var(--color-hairline)] bg-[var(--color-paper)] px-4 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[var(--color-ink)]">Trade & Compensation</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Solar Tech - ₦140,000 / month"
                    className="mt-1 w-full rounded-full border border-[var(--color-hairline)] bg-[var(--color-paper)] px-4 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>

                <div className="mt-6 flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowPostModal(false)}
                    className="flex-1 rounded-full bg-[var(--color-shell)] py-2.5 font-bold text-[var(--color-ink)]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-[var(--color-accent)] py-2.5 font-bold text-[var(--color-on-accent)]"
                  >
                    Publish Gig
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 text-center">
                <CheckCircle2 className="mx-auto size-12 text-[var(--color-success)]" />
                <h4 className="mt-3 font-bold text-[var(--color-ink)]">
                  Gig Submitted Successfully!
                </h4>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Your listing is now queued and verified artisans will contact you on WhatsApp with their badges.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowPostModal(false);
                    setSubmittedPost(false);
                  }}
                  className="mt-6 rounded-full bg-[var(--color-accent)] px-6 py-2 text-xs font-bold text-[var(--color-on-accent)]"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
