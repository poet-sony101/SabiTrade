'use client';

import React, { useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import SabiLogo from '@/components/SabiLogo';
import { CheckCircle2, Award, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroPreview() {
  const [lang, setLang] = useState<'en' | 'pidgin'>('pidgin');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const question = {
    titleEn: "Before starting any paid job, what should you agree with the customer?",
    titlePidgin: "Before you start any work wey customer go pay for, wetin you suppose agree first?",
    optionsEn: [
      "Tell them a rough verbal estimate and change it later if parts cost more",
      "Send a clear written breakdown on WhatsApp (parts, labor, deposit) and get confirmation",
      "Demand 100% payment before touching any tool"
    ],
    optionsPidgin: [
      "Tell am price with mouth, then increase am later if market price high",
      "Send clear summary on WhatsApp (parts money, your labor, advance) make dem reply YES",
      "Force customer make e pay full 100% money before you hold screwdriver"
    ],
    correctIndex: 1
  };

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
    setHasAnswered(true);
  };

  return (
    <div className="relative mx-auto mt-10 max-w-xl rounded-3xl bg-[var(--color-surface)] p-6 shadow-2xl ring-1 ring-[var(--color-hairline)] md:p-8">
      {/* Decorative top bar with SabiLogo */}
      <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-4">
        <div className="flex items-center gap-2.5">
          <SabiLogo className="size-6" />
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]">
            Sabi<span className="text-[var(--color-accent)]">Trade</span> Interactive Preview
          </span>
        </div>
        <LanguageToggle language={lang} onChange={setLang} />
      </div>

      {/* Mini Lesson Header */}
      <div className="mt-5">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-bold text-[var(--color-accent)]">
          <Sparkles className="size-3" />
          <span>Work-Ready Basics • 3 Min Lesson</span>
        </div>
        <h3 className="mt-2 font-display text-lg font-bold text-[var(--color-ink)] md:text-xl">
          {lang === 'en'
            ? 'Your first customer: make them come back'
            : 'Your first customer: make dem come back'}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)] md:text-sm">
          {lang === 'en'
            ? 'In any trade, most new work comes from customers who were happy and told their friends. A written agreement on WhatsApp locks in trust before you turn a screw.'
            : 'For any work, plenty new customers dey come from people wey dey happy and tell their friends. Clear agreement for WhatsApp dey prevent quarrel before you turn screw.'}
        </p>
      </div>

      {/* Mini Quiz Box */}
      <div className="mt-6 rounded-2xl bg-[var(--color-shell)]/70 p-4 ring-1 ring-[var(--color-hairline)] md:p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
          {lang === 'en' ? 'Quick Skill Check:' : 'Quick Sabi Check:'}
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">
          {lang === 'en' ? question.titleEn : question.titlePidgin}
        </p>

        <div className="mt-3 space-y-2">
          {(lang === 'en' ? question.optionsEn : question.optionsPidgin).map((opt, i) => {
            const isCorrect = i === question.correctIndex;
            const isSelected = selectedOption === i;
            let btnClass = "border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-accent)]";

            if (hasAnswered) {
              if (isCorrect) {
                btnClass = "border-[var(--color-success)] bg-[var(--color-success-soft)] text-[var(--color-success)] font-semibold";
              } else if (isSelected) {
                btnClass = "border-[var(--color-danger)] bg-[var(--color-danger-soft)] text-[var(--color-danger)]";
              }
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left text-xs transition-all md:text-sm ${btnClass}`}
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="leading-snug">{opt}</span>
              </button>
            );
          })}
        </div>

        {hasAnswered && (
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[var(--color-surface)] p-3 text-xs ring-1 ring-[var(--color-hairline)]">
            <div className="flex items-center gap-2 text-[var(--color-success)]">
              <CheckCircle2 className="size-4 shrink-0" />
              <span className="font-semibold">
                {selectedOption === question.correctIndex
                  ? (lang === 'en' ? 'Correct! 100% Score' : 'Correct! You sabi the work!')
                  : (lang === 'en' ? 'Close! Option B is the professional standard.' : 'Look Option B! Na the standard way.')}
              </span>
            </div>
            <Link
              href="/app/tracks/work-ready-basics"
              className="inline-flex items-center gap-1 font-bold text-[var(--color-accent)] hover:underline"
            >
              <span>Full lesson</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        )}
      </div>

      {/* Bottom badge hint */}
      <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-muted)]">
        <span className="inline-flex items-center gap-1.5">
          <Award className="size-3.5 text-[var(--color-accent)]" />
          <span>Earn verifiable badge SABI-WRK</span>
        </span>
        <span className="font-medium text-[var(--color-ink)]">3 min read</span>
      </div>
    </div>
  );
}
