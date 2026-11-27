'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserRole } from '@/types';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: (defaultRole?: UserRole) => void;
  closeAuthModal: () => void;
  login: (profile: Partial<UserProfile>) => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const STORAGE_KEY = 'sabitrade_auth_user';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState<UserRole>('artisan');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load user auth profile', e);
    }
  }, []);

  const openAuthModal = (defaultRole: UserRole = 'artisan') => {
    setModalRole(defaultRole);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = (data: Partial<UserProfile>) => {
    const newUser: UserProfile = {
      id: data.id || `usr-${Date.now().toString(36)}`,
      name: data.name || 'Emeka Technician',
      businessName: data.businessName || 'Sabi Craft Lab',
      phone: data.phone || '+234 803 456 7890',
      role: data.role || modalRole || 'artisan',
      trade: data.trade || 'Solar & Inverter Setup',
      tradeSlug: data.tradeSlug || 'solar-installation',
      location: data.location || 'Ikeja Computer Village, Lagos',
      avatarSeed: data.name ? data.name.substring(0, 2).toUpperCase() : 'ST',
      badgesCount: 1,
      verified: true,
      createdAt: new Date().toISOString()
    };

    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    closeAuthModal();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        login,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
