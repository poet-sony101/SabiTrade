import React from 'react';
import Link from 'next/link';
import { TRADE_TRACKS } from '@/data/trades';
import { GIGS } from '@/data/gigs';
import TradeIcon from '@/components/TradeIcon';
import HeroPreview from '@/components/HeroPreview';
import DiagnosticHeroSearch from '@/components/DiagnosticHeroSearch';
import SabiLogo from '@/components/SabiLogo';
import {
  ArrowRight,
  WifiOff,
  ShieldCheck,
  MessageCircle,
  Clock,
  Sparkles,
  CheckCircle,
  ChevronDown
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 pt-6 pb-20 md:pt-12 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title Logo Badge pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-surface)] px-4 py-1.5 text-xs font-semibold text-[var(--color-ink)] shadow-md ring-1 ring-[var(--color-hairline)] hover:ring-[var(--color-accent)] transition-all">
            <SabiLogo className="size-5" />
            <span className="font-display font-bold">Sabi<span className="text-[var(--color-accent)]">Trade</span></span>
            <span className="text-[var(--color-muted)]">•</span>
            <span className="text-[var(--color-accent)] font-bold">2026 Vocational Cohorts</span>
          </div>

          {/* Headline with artisanal hand-drawn underline */}
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl md:leading-[1.15]">
            <span className="block">
              Your phone is the{' '}
              <span className="relative inline-block text-[var(--color-accent)] italic">
                workshop.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-[var(--color-accent)]/80 md:-bottom-2 md:h-3"
                >
                  <path
                    d="M2 9 C 40 3.5, 110 2, 198 6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
            <span className="mt-2 block">Your street is the market.</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Short practical lessons in English and Pidgin that work offline, a skill check that earns a verifiable badge, and local gigs you can apply for on WhatsApp.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/app"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-bold text-[var(--color-on-accent)] shadow-lg shadow-[var(--color-accent)]/20 transition-all hover:scale-105 hover:bg-[var(--color-accent-press)] active:scale-95"
            >
              <span>Start learning, it&apos;s free</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#how"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] hover:bg-[var(--color-shell)]"
            >
              <span>See how it works</span>
            </Link>
            <Link
              href="/verify"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-3.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)]"
            >
              <ShieldCheck className="size-4 text-[var(--color-accent)]" />
              <span>Check a badge</span>
            </Link>
          </div>

          {/* Quick Diagnostic Search Trigger */}
          <DiagnosticHeroSearch />

          {/* Interactive Hero Demo preview */}
          <HeroPreview />

          {/* Social Proof Stats */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[var(--color-hairline)] pt-10 sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-bold text-[var(--color-ink)] md:text-3xl">14,800+</p>
              <p className="text-xs text-[var(--color-muted)]">Active Learners</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[var(--color-ink)] md:text-3xl">9,350+</p>
              <p className="text-xs text-[var(--color-muted)]">Verified Badges</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[var(--color-ink)] md:text-3xl">4,120+</p>
              <p className="text-xs text-[var(--color-muted)]">Local Gigs Connected</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[var(--color-accent)] md:text-3xl">100%</p>
              <p className="text-xs text-[var(--color-muted)]">Offline Compatible</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR BARRIERS, BROKEN */}
      <section id="problem" className="border-y border-[var(--color-hairline)] bg-[var(--color-surface)] py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Real-World Problem Solving
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Four barriers, broken.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-muted)]">
              Traditional vocational training is expensive, requires gigabytes of streaming data, and leaves employers guessing if you really know the trade.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-[var(--color-paper)] p-6 ring-1 ring-[var(--color-hairline)]">
              <div className="flex size-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <WifiOff className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[var(--color-ink)]">
                No data required
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                Lightweight step-by-step guides cache directly to your phone. Turn data off and keep reading anywhere.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color-paper)] p-6 ring-1 ring-[var(--color-hairline)]">
              <div className="flex size-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <span className="font-bold text-xs">🇳🇬</span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[var(--color-ink)]">
                Bilingual by default
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                Every trade lesson toggles seamlessly between Standard English and Nigerian Pidgin for instant clarity.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color-paper)] p-6 ring-1 ring-[var(--color-hairline)]">
              <div className="flex size-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[var(--color-ink)]">
                Verifiable badges
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                Pass the 100% skill check to earn a tamper-proof digital badge with a public URL employers can verify in 5 seconds.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color-paper)] p-6 ring-1 ring-[var(--color-hairline)]">
              <div className="flex size-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <MessageCircle className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[var(--color-ink)]">
                WhatsApp gig board
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                Apply directly to local workshops and shops with your badge link pre-filled into WhatsApp chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PICK YOUR TRADE (TRACK EXPLORER) */}
      <section id="tracks" className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Comprehensive Curriculum
              </span>
              <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
                Pick your trade.
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Practical, shop-tested micro-tracks designed for fast mastery.
              </p>
            </div>
            <Link
              href="/app"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-accent)] hover:underline"
            >
              <span>Explore all in Learning Portal</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRADE_TRACKS.map((track) => (
              <div
                key={track.id}
                className="group flex flex-col justify-between rounded-3xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-hairline)] transition-all hover:shadow-xl hover:ring-[var(--color-accent)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-shell)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-on-accent)] transition-colors">
                      <TradeIcon name={track.iconName} className="size-5" />
                    </span>
                    <span className="rounded-full bg-[var(--color-shell)] px-2.5 py-1 font-mono text-[11px] font-bold text-[var(--color-muted)]">
                      {track.badgeCode}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-ink)]">
                    {track.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-[var(--color-accent)]">
                    {track.titlePidgin}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-muted)]">
                    {track.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--color-hairline)] pt-4">
                  <div className="flex items-center justify-between text-xs text-[var(--color-muted)]">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      <span>{track.estimatedMinutes} mins total</span>
                    </span>
                    <span>{track.lessonsCount} lessons</span>
                  </div>

                  <Link
                    href={`/app/tracks/${track.slug}`}
                    className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-[var(--color-shell)] py-2.5 text-xs font-bold text-[var(--color-ink)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-on-accent)]"
                  >
                    <span>Start Track</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how" className="border-t border-[var(--color-hairline)] bg-[var(--color-surface)] py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Clear Path to Income
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              From lesson to paid work.
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-[var(--color-muted)]">
              Three simple steps that take you from learning on your phone to earning on your street.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-3xl bg-[var(--color-paper)] p-7 ring-1 ring-[var(--color-hairline)]">
              <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-accent)] font-display text-sm font-bold text-[var(--color-on-accent)]">
                1
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-ink)]">
                Read 3-minute lessons
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                Bite-sized, practical knowledge with zero fluff. Switch between English and Pidgin with one tap, even with your mobile data turned off.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-3xl bg-[var(--color-paper)] p-7 ring-1 ring-[var(--color-hairline)]">
              <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-accent)] font-display text-sm font-bold text-[var(--color-on-accent)]">
                2
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-ink)]">
                Pass the skill check
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                Answer realistic troubleshooting questions. Get 100% to mint your verifiable digital badge with unique ID and verification link.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-3xl bg-[var(--color-paper)] p-7 ring-1 ring-[var(--color-hairline)]">
              <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-accent)] font-display text-sm font-bold text-[var(--color-on-accent)]">
                3
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-ink)]">
                Apply for local gigs
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                Browse real jobs from workshop owners. Apply directly via WhatsApp with your verified badge link attached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VENDORS & GIGS TEASER */}
      <section id="vendors" className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Local Opportunity Board
              </span>
              <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
                Vendors hire hands they can check first.
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Shop owners in Lagos, Abuja, Ibadan, and Port Harcourt post gigs for verified artisans.
              </p>
            </div>
            <Link
              href="/gigs"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-surface)] px-5 py-2.5 text-xs font-bold text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] hover:bg-[var(--color-shell)]"
            >
              <span>View all {GIGS.length} active gigs</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {GIGS.slice(0, 4).map((gig) => (
              <div
                key={gig.id}
                className="flex flex-col justify-between rounded-2xl bg-[var(--color-surface)] p-5 ring-1 ring-[var(--color-hairline)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[11px] font-bold text-[var(--color-accent)]">
                      {gig.trade}
                    </span>
                    <span className="text-xs font-bold text-[var(--color-success)]">
                      {gig.pay}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-[var(--color-ink)]">
                    {gig.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    {gig.company} • {gig.location}
                  </p>
                  <p className="mt-3 text-xs text-[var(--color-muted)] line-clamp-2">
                    {gig.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[var(--color-hairline)] pt-3 text-xs">
                  <span className="font-mono text-[11px] text-[var(--color-muted)]">
                    Req: {gig.requiredBadge}
                  </span>
                  <a
                    href={`https://wa.me/${gig.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello ${gig.company}, I saw your gig '${gig.title}' on SabiTrade. Here is my verified badge: https://sabitrade.vercel.app/verify?id=${gig.requiredBadge}-2026-7841`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-[var(--color-success)] hover:underline"
                  >
                    <MessageCircle className="size-3.5" />
                    <span>Apply on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPONSORS & NGO IMPACT */}
      <section id="sponsors" className="border-t border-[var(--color-hairline)] bg-[var(--color-surface)] py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Funded Cohorts & Corporate CSR
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Free for learners. Funded by those who benefit.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--color-muted)]">
              Solar companies, microfinance institutions, and development agencies sponsor targeted cohorts with real-time impact tracking.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col justify-between rounded-3xl bg-[var(--color-paper)] p-7 ring-1 ring-[var(--color-hairline)]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Learners
                </span>
                <p className="mt-2 font-display text-3xl font-bold text-[var(--color-ink)]">
                  ₦0
                </p>
                <p className="text-xs text-[var(--color-muted)]">Forever free for all trade learners</p>
                <ul className="mt-6 space-y-2.5 text-xs text-[var(--color-muted)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-success)] shrink-0" />
                    <span>All 5 trade tracks & practical guides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-success)] shrink-0" />
                    <span>English & Nigerian Pidgin toggle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-success)] shrink-0" />
                    <span>Free skill checks & public badges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-success)] shrink-0" />
                    <span>Direct access to local WhatsApp gigs</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/app"
                className="mt-8 block w-full rounded-full bg-[var(--color-ink)] py-3 text-center text-xs font-bold text-[var(--color-paper)] hover:bg-[var(--color-accent)] transition-colors"
              >
                Start Learning Now
              </Link>
            </div>

            <div className="relative flex flex-col justify-between rounded-3xl bg-[var(--color-paper)] p-7 ring-2 ring-[var(--color-accent)] shadow-xl">
              <span className="absolute -top-3 right-6 rounded-full bg-[var(--color-accent)] px-3 py-0.5 text-[10px] font-bold text-[var(--color-on-accent)]">
                Most Popular for NGOs
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  Funded Cohort (100 Learners)
                </span>
                <p className="mt-2 font-display text-3xl font-bold text-[var(--color-ink)]">
                  ₦350,000
                </p>
                <p className="text-xs text-[var(--color-muted)]">₦3,500 ($5) per verified youth</p>
                <ul className="mt-6 space-y-2.5 text-xs text-[var(--color-muted)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-accent)] shrink-0" />
                    <span>Custom branded trade curriculum track</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-accent)] shrink-0" />
                    <span>Live real-time completion dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-accent)] shrink-0" />
                    <span>All badges co-branded with your logo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-accent)] shrink-0" />
                    <span>Local vendor placement reporting</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/sponsors"
                className="mt-8 block w-full rounded-full bg-[var(--color-accent)] py-3 text-center text-xs font-bold text-[var(--color-on-accent)] shadow-md hover:bg-[var(--color-accent-press)] transition-colors"
              >
                Sponsor a Cohort
              </Link>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-[var(--color-paper)] p-7 ring-1 ring-[var(--color-hairline)]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Local Vendors & Shops
                </span>
                <p className="mt-2 font-display text-3xl font-bold text-[var(--color-ink)]">
                  Free
                </p>
                <p className="text-xs text-[var(--color-muted)]">Post gigs & hire verified hands</p>
                <ul className="mt-6 space-y-2.5 text-xs text-[var(--color-muted)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-success)] shrink-0" />
                    <span>Post unlimited local trade vacancies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-success)] shrink-0" />
                    <span>Require specific badge certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--color-success)] shrink-0" />
                    <span>WhatsApp contact protected from spam</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/gigs"
                className="mt-8 block w-full rounded-full bg-[var(--color-shell)] py-3 text-center text-xs font-bold text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
              >
                Post a Gig
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
              Answers
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Questions & Clarifications
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[var(--color-hairline)]">
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-[var(--color-ink)]">
                <span>Who writes and checks the lessons?</span>
                <ChevronDown className="size-5 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                Each lesson contains practical steps for a real job. A working technician checks the trade procedures, and a fluent speaker reviews the Nigerian Pidgin before a lesson is marked final. Until then, lessons are labeled as drafts.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-[var(--color-ink)]">
                <span>Is the badge an official government certificate?</span>
                <ChevronDown className="size-5 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                The badge proves that you finished all practical modules and answered 100% of the skill check scenarios correctly. Anyone can verify your badge on our public check page using your badge ID or QR code. It is an industry competence badge, not a government diploma—vendors still meet you and review your hands-on work.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-[var(--color-ink)]">
                <span>How does offline learning work on phone?</span>
                <ChevronDown className="size-5 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                SabiTrade is built as an offline-first progressive web application. Once loaded, all lessons, trade diagrams, and skill checks are cached on your phone. You can turn your cellular data off to save data and continue learning uninterrupted.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-[var(--color-ink)]">
                <span>How do local vendors post gigs?</span>
                <ChevronDown className="size-5 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                Shop owners, workshop masters, and contractors register as verified vendors to post gigs. To protect vendors from spam, their direct WhatsApp contact is only revealed to learners who have earned the verified badge in that specific trade.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-[var(--color-ink)]">
                <span>Why is SabiTrade free for learners?</span>
                <ChevronDown className="size-5 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                Learning is 100% free for all artisans and learners. The platform is sponsored by vocational development partners, NGOs, energy providers, and equipment manufacturers who fund cohorts to build skilled local labor.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="border-t border-[var(--color-hairline)] bg-[var(--color-surface)] py-20 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-white shadow-xl">
            <SabiLogo className="size-10" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-[var(--color-ink)] sm:text-5xl">
            Your first lesson takes three minutes.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-[var(--color-muted)]">
            No signup forms to begin. Pick a trade, learn offline in English or Pidgin, and earn your verified badge.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/app"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-bold text-[var(--color-on-accent)] shadow-xl shadow-[var(--color-accent)]/25 transition-transform hover:scale-105 active:scale-95"
            >
              <span>Start Your First Lesson</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/verify"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-paper)] px-6 py-4 text-sm font-semibold text-[var(--color-ink)] ring-1 ring-[var(--color-hairline)] hover:bg-[var(--color-shell)]"
            >
              <ShieldCheck className="size-4 text-[var(--color-accent)]" />
              <span>Verify an Existing Badge</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
