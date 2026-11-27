'use client';

import React from 'react';
import { useSearch } from '@/context/SearchContext';
import { Search, Zap } from 'lucide-react';

export default function DiagnosticHeroSearch() {
  const { openSearch } = useSearch();

  return (
    <div className="mx-auto mt-8 max-w-xl">
      <div
        onClick={openSearch}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openSearch();
          }
        }}
        className="group cursor-pointer rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-3 md:p-3.5 shadow-sm hover:shadow-md hover:border-[var(--color-accent)] transition-all"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 text-left">
            <div className="size-9 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0">
              <Zap className="size-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[var(--color-ink)]">
                  Instant Workshop Diagnostic Search
                </span>
                <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[9px] font-bold text-rose-500 uppercase">
                  Live First Aid
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-muted)] truncate mt-0.5">
                Water damage, 0.00A charge, tripping breakers, inverter overload...
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <kbd className="hidden sm:inline-flex rounded-lg bg-[var(--color-shell)] px-2 py-1 text-[10px] font-mono font-bold border border-[var(--color-hairline)] text-[var(--color-muted)] group-hover:text-[var(--color-accent)]">
              Ctrl + K
            </kbd>
            <div className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] shadow-sm">
              <Search className="size-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
