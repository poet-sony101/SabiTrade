'use client';

import React, { useState } from 'react';
import { COHORTS } from '@/data/sponsors';
import {
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
  Download
} from 'lucide-react';
import Link from 'next/link';

export default function SponsorsDashboardPage() {
  const [calculatorLearners, setCalculatorLearners] = useState(250);
  const costPerLearner = 3500; // ₦3,500 (~$5)
  const totalCost = calculatorLearners * costPerLearner;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-14">
      {/* Header */}
      <div className="border-b border-[var(--color-hairline)] pb-8 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-bold text-[var(--color-accent)]">
          <Building2 className="size-3.5" />
          <span>Donors, CSR & Government Partnerships</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-[var(--color-ink)] md:text-5xl">
          Funded Cohorts & Live Impact Analytics
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
          Sponsor youth cohorts in high-demand trades. Track every lesson finished, every badge minted, and every WhatsApp gig application in real time.
        </p>
      </div>

      {/* Aggregate Impact Numbers */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-2xl bg-[var(--color-surface)] p-5 ring-1 ring-[var(--color-hairline)]">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
            Total Enrolled
          </p>
          <p className="mt-2 font-display text-3xl font-extrabold text-[var(--color-ink)]">
            1,750
          </p>
          <p className="text-[11px] text-[var(--color-success)] font-semibold mt-1">Across 4 active cohorts</p>
        </div>

        <div className="rounded-2xl bg-[var(--color-surface)] p-5 ring-1 ring-[var(--color-hairline)]">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
            Completed Track
          </p>
          <p className="mt-2 font-display text-3xl font-extrabold text-[var(--color-ink)]">
            1,631
          </p>
          <p className="text-[11px] text-[var(--color-muted)] font-semibold mt-1">93.2% completion rate</p>
        </div>

        <div className="rounded-2xl bg-[var(--color-surface)] p-5 ring-1 ring-[var(--color-hairline)]">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
            Badges Minted
          </p>
          <p className="mt-2 font-display text-3xl font-extrabold text-[var(--color-accent)]">
            1,542
          </p>
          <p className="text-[11px] text-[var(--color-muted)] font-semibold mt-1">100% verified mastery</p>
        </div>

        <div className="rounded-2xl bg-[var(--color-surface)] p-5 ring-1 ring-[var(--color-hairline)]">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
            Gig Applications
          </p>
          <p className="mt-2 font-display text-3xl font-extrabold text-[var(--color-success)]">
            1,137
          </p>
          <p className="text-[11px] text-[var(--color-muted)] font-semibold mt-1">Direct to WhatsApp</p>
        </div>
      </div>

      {/* Active Cohorts Table */}
      <div className="mt-12 rounded-3xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-hairline)] md:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center border-b border-[var(--color-hairline)] pb-4">
          <div>
            <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
              Active Funded Cohorts
            </h3>
            <p className="text-xs text-[var(--color-muted)]">
              Real-time programmatic telemetry from offline PWA syncs.
            </p>
          </div>
          <button
            type="button"
            onClick={() => alert("Impact Report downloaded.")}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-shell)] px-4 py-2 text-xs font-bold text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
          >
            <Download className="size-3.5" />
            <span>Export CSV Audit</span>
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[var(--color-hairline)] text-[var(--color-muted)] font-bold uppercase">
                <th className="pb-3 pr-4">Cohort Name</th>
                <th className="pb-3 px-4">Sponsor Partner</th>
                <th className="pb-3 px-4">Trade Focus</th>
                <th className="pb-3 px-4">Enrolled</th>
                <th className="pb-3 px-4">Badges</th>
                <th className="pb-3 pl-4">Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-hairline)]">
              {COHORTS.map((c) => (
                <tr key={c.id} className="hover:bg-[var(--color-paper)]">
                  <td className="py-4 pr-4 font-bold text-[var(--color-ink)]">
                    {c.name}
                  </td>
                  <td className="py-4 px-4 text-[var(--color-muted)]">
                    {c.sponsorName}
                  </td>
                  <td className="py-4 px-4 font-semibold text-[var(--color-accent)]">
                    {c.targetTrade}
                  </td>
                  <td className="py-4 px-4 text-[var(--color-ink)]">
                    {c.enrolled}
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-[var(--color-success)]">
                    {c.badgesMinted}
                  </td>
                  <td className="py-4 pl-4 font-bold text-[var(--color-ink)]">
                    {c.completionRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cohort Sponsorship Budget Estimator */}
      <div className="mt-14 rounded-3xl bg-[var(--color-paper)] p-6 ring-2 ring-[var(--color-accent)] md:p-10">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
          Partner Planning Tool
        </span>
        <h3 className="mt-1 font-display text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
          Estimate Your Cohort Investment
        </h3>
        <p className="mt-2 text-xs text-[var(--color-muted)] md:text-sm">
          ₦3,500 ($5) per learner covers custom trade localization in Pidgin/Hausa/Yoruba, offline distribution, digital verifiable badge minting, and direct WhatsApp employer connections.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <label className="text-xs font-bold text-[var(--color-ink)]">
              Number of Youth / Artisans to Sponsor:
            </label>
            <div className="mt-3 flex items-center gap-4">
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={calculatorLearners}
                onChange={(e) => setCalculatorLearners(Number(e.target.value))}
                className="w-full accent-[var(--color-accent)]"
              />
              <span className="font-mono text-base font-bold text-[var(--color-accent)]">
                {calculatorLearners}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              {[100, 250, 500, 1000].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCalculatorLearners(n)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    calculatorLearners === n
                      ? 'bg-[var(--color-accent)] text-white'
                      : 'bg-[var(--color-shell)] text-[var(--color-ink)]'
                  }`}
                >
                  {n} Learners
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--color-surface)] p-6 text-center ring-1 ring-[var(--color-hairline)]">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Total Cohort Grant
            </p>
            <p className="mt-2 font-display text-3xl font-extrabold text-[var(--color-ink)]">
              ₦{totalCost.toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              ≈ ${(totalCost / 1450).toFixed(0)} USD equivalent
            </p>

            <a
              href={`https://wa.me/2348039281720?text=${encodeURIComponent(`Hello SabiTrade Partnerships, I would like to sponsor a cohort of ${calculatorLearners} learners (Est. ₦${totalCost.toLocaleString()}).`)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] py-3 text-xs font-bold text-[var(--color-on-accent)] shadow-md transition-transform hover:scale-105"
            >
              <span>Initiate Cohort Discussion</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
