'use client';

import React from 'react';

interface LanguageToggleProps {
  language: 'en' | 'pidgin';
  onChange: (lang: 'en' | 'pidgin') => void;
  className?: string;
}

export default function LanguageToggle({ language, onChange, className = '' }: LanguageToggleProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full bg-[var(--color-shell)] p-1 ring-1 ring-[var(--color-hairline)] ${className}`}
      role="radiogroup"
      aria-label="Language selection"
    >
      <button
        type="button"
        role="radio"
        aria-checked={language === 'en'}
        onClick={() => onChange('en')}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-[var(--color-surface)] text-[var(--color-ink)] shadow-sm'
            : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
        }`}
      >
        English
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={language === 'pidgin'}
        onClick={() => onChange('pidgin')}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
          language === 'pidgin'
            ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-sm'
            : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
        }`}
      >
        Pidgin 🇳🇬
      </button>
    </div>
  );
}
