'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import SabiLogo from '@/components/SabiLogo';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-hairline)] bg-[var(--color-paper)] py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight text-[var(--color-ink)]"
            >
              <SabiLogo className="size-9" />
              <span>
                Sabi<span className="text-[var(--color-accent)]">Trade</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              Your phone is the workshop. Your street is the market. Short practical trade lessons in English and Pidgin that work offline, skill checks that earn verifiable badges, and local gigs you can apply for directly on WhatsApp.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-bold text-[var(--color-accent)]">
                <span className="size-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                100% Offline-Capable PWA
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]">
              Trades & Learning
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-muted)]">
              <li>
                <Link href="/app/tracks/work-ready-basics" className="hover:text-[var(--color-accent)]">
                  Work-Ready Basics
                </Link>
              </li>
              <li>
                <Link href="/app/tracks/phone-repair" className="hover:text-[var(--color-accent)]">
                  Phone Repair
                </Link>
              </li>
              <li>
                <Link href="/app/tracks/solar-installation" className="hover:text-[var(--color-accent)]">
                  Solar & Inverter Setup
                </Link>
              </li>
              <li>
                <Link href="/app/tracks/electrical-installation" className="hover:text-[var(--color-accent)]">
                  Domestic Electrical
                </Link>
              </li>
              <li>
                <Link href="/app/tracks/tailoring-fashion" className="hover:text-[var(--color-accent)]">
                  Tailoring & Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Verification */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]">
              Ecosystem
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-muted)]">
              <li>
                <Link href="/gigs" className="hover:text-[var(--color-accent)]">
                  Local Gig Board
                </Link>
              </li>
              <li>
                <Link href="/verify" className="inline-flex items-center gap-1 hover:text-[var(--color-accent)]">
                  <span>Verify a Badge</span>
                  <ShieldCheck className="size-3.5 text-[var(--color-accent)]" />
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-[var(--color-accent)]">
                  Sponsor Cohorts
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--color-success)] hover:underline"
                >
                  <MessageCircle className="size-3.5" />
                  <span>WhatsApp Community</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-hairline)] pt-8 text-xs text-[var(--color-muted)] md:flex-row">
          <p>© 2026 SabiTrade. Free vocational knowledge for everyday artisans.</p>
          <div className="flex items-center gap-4">
            <Link href="/verify" className="hover:underline">
              Registry
            </Link>
            <span>•</span>
            <Link href="/#faq" className="hover:underline">
              FAQ
            </Link>
            <span>•</span>
            <span className="text-[var(--color-accent)] font-semibold">Offline-First Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
