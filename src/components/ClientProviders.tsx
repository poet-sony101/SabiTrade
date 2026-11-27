'use client';

import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { SearchProvider } from '@/context/SearchContext';
import AuthModal from '@/components/AuthModal';
import DiagnosticSearchModal from '@/components/DiagnosticSearchModal';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SearchProvider>
        {children}
        <AuthModal />
        <DiagnosticSearchModal />
      </SearchProvider>
    </AuthProvider>
  );
}
