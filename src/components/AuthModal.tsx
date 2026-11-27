'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types';
import { X, CheckCircle2, ShieldCheck, Smartphone, Sparkles, MessageCircle, ArrowRight, UserCheck, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

const POPULAR_LOCATIONS = [
  'Ikeja - Computer Village, Lagos',
  'Alaba International Market, Lagos',
  'Trade Fair Complex, Lagos',
  'Wuse Zone 2, Abuja',
  'Garki Market, Abuja',
  'Dugbe Commercial Hub, Ibadan',
  'Oil Mill / Trans-Amadi, Port Harcourt',
  'Ariaria Market, Aba',
  'Sabon Gari, Kano'
];

const TRADE_CHOICES = [
  { slug: 'solar-installation', title: 'Solar & Inverter Setup' },
  { slug: 'phone-repair', title: 'Phone Hardware Diagnostics' },
  { slug: 'electrical-installation', title: 'Domestic Electrical Safety' },
  { slug: 'tailoring-fashion', title: 'Tailoring & Garment Construction' },
  { slug: 'work-ready-basics', title: 'Work-Ready Business Management' }
];

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [step, setStep] = useState<'input' | 'otp'>('input');
  const [phone, setPhone] = useState('0803 456 7890');
  const [name, setName] = useState('Emeka Okafor');
  const [businessName, setBusinessName] = useState('Emeka Power & Solar Labs');
  const [role, setRole] = useState<UserRole>('artisan');
  const [tradeSlug, setTradeSlug] = useState('solar-installation');
  const [location, setLocation] = useState(POPULAR_LOCATIONS[0]);
  const [otpCode, setOtpCode] = useState('');
  const [simulatedGeneratedOtp, setSimulatedGeneratedOtp] = useState('739104');
  const [showNotification, setShowNotification] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthModalOpen) {
      setStep('input');
      setError('');
      setOtpCode('');
      setShowNotification(false);
    }
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 8) {
      setError('Please enter a valid phone number');
      return;
    }
    if (!name.trim()) {
      setError('Please provide your name');
      return;
    }

    // Generate random 6 digit OTP
    const generated = Math.floor(100000 + Math.random() * 900000).toString();
    setSimulatedGeneratedOtp(generated);
    setStep('otp');
    setError('');

    // Trigger simulated WhatsApp notification banner after 600ms
    setTimeout(() => {
      setShowNotification(true);
    }, 600);
  };

  const handleAutoFillOtp = () => {
    setOtpCode(simulatedGeneratedOtp);
    setError('');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode !== simulatedGeneratedOtp && otpCode !== '123456') {
      setError('Invalid WhatsApp code. Click "Auto-Fill Code" to test!');
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }

      const selectedTrade = TRADE_CHOICES.find(t => t.slug === tradeSlug);
      login({
        name,
        businessName: businessName || `${name.split(' ')[0]}'s Workshop`,
        phone: phone.startsWith('+234') ? phone : `+234 ${phone.replace(/^0/, '')}`,
        role,
        trade: selectedTrade ? selectedTrade.title : 'Solar & Inverter Setup',
        tradeSlug,
        location
      });
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Simulated WhatsApp In-App Push Notification */}
      {showNotification && (
        <div
          onClick={handleAutoFillOtp}
          className="fixed top-4 inset-x-4 md:inset-x-auto md:right-6 md:w-96 z-60 cursor-pointer rounded-2xl bg-[#075E54] text-white p-3.5 shadow-2xl ring-2 ring-emerald-400/50 animate-in slide-in-from-top-6 duration-300"
        >
          <div className="flex items-start gap-3">
            <div className="size-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-inner">
              <MessageCircle className="size-5 fill-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between text-xs text-emerald-200 font-medium">
                <span>WhatsApp • SabiTrade</span>
                <span>Just Now</span>
              </div>
              <p className="text-xs text-white font-semibold mt-0.5">
                Your Sabi verification code is <span className="underline font-mono tracking-widest text-emerald-300 bg-black/20 px-1.5 py-0.5 rounded">{simulatedGeneratedOtp}</span>
              </p>
              <p className="text-[10px] text-emerald-200 mt-1 flex items-center gap-1">
                <span>👆 Tap here to auto-fill code</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[var(--color-surface)] border border-[var(--color-hairline)] shadow-[var(--shadow-float)] overflow-hidden">
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-[var(--color-accent)] to-amber-500 p-6 text-[var(--color-on-accent)]">
          <button
            type="button"
            onClick={closeAuthModal}
            aria-label="Close dialog"
            className="absolute top-5 right-5 inline-flex size-8 items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors"
          >
            <X className="size-4" />
          </button>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-90">
            <MessageCircle className="size-4 fill-white" />
            <span>WhatsApp-Powered Artisan Identity</span>
          </div>
          <h2 className="mt-1 text-2xl font-black font-display tracking-tight text-white">
            {step === 'input' ? 'Connect via WhatsApp' : 'Verify One-Time Code'}
          </h2>
          <p className="text-xs text-white/90 mt-1">
            {step === 'input'
              ? 'No password required. Connect your phone number to manage badges, quotes, and gigs.'
              : `We sent a simulated 6-digit WhatsApp verification message to ${phone}.`}
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {error && (
            <div className="mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs font-medium text-rose-500">
              {error}
            </div>
          )}

          {step === 'input' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              {/* Role Selection */}
              <div>
                <label className="block text-xs font-bold text-[var(--color-ink)] uppercase tracking-wider mb-1.5">
                  Who Are You?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('artisan')}
                    className={`rounded-xl border p-2.5 text-center transition-all ${
                      role === 'artisan'
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold ring-1 ring-[var(--color-accent)]'
                        : 'border-[var(--color-hairline)] bg-[var(--color-shell)] text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    <div className="text-sm">🛠️</div>
                    <div className="text-xs mt-1">Artisan</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('vendor')}
                    className={`rounded-xl border p-2.5 text-center transition-all ${
                      role === 'vendor'
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold ring-1 ring-[var(--color-accent)]'
                        : 'border-[var(--color-hairline)] bg-[var(--color-shell)] text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    <div className="text-sm">🏬</div>
                    <div className="text-xs mt-1">Employer</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('sponsor')}
                    className={`rounded-xl border p-2.5 text-center transition-all ${
                      role === 'sponsor'
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold ring-1 ring-[var(--color-accent)]'
                        : 'border-[var(--color-hairline)] bg-[var(--color-shell)] text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    <div className="text-sm">🤝</div>
                    <div className="text-xs mt-1">Sponsor / NGO</div>
                  </button>
                </div>
              </div>

              {/* Name & Business */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-muted)] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Emeka Okafor"
                    className="w-full rounded-xl bg-[var(--color-shell)] border border-[var(--color-hairline)] px-3 py-2 text-xs font-medium text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-muted)] mb-1">
                    Workshop / Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Sabi Tech Hub"
                    className="w-full rounded-xl bg-[var(--color-shell)] border border-[var(--color-hairline)] px-3 py-2 text-xs font-medium text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-[var(--color-muted)] mb-1">
                  WhatsApp Phone Number (Nigeria 🇳🇬)
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-xs font-bold text-[var(--color-muted)]">
                    +234
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone.replace(/^\+234\s?/, '')}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0803 123 4567"
                    className="w-full rounded-xl bg-[var(--color-shell)] border border-[var(--color-hairline)] pl-14 pr-3 py-2.5 text-xs font-mono font-medium text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                  <Smartphone className="absolute right-3 size-4 text-[var(--color-muted)]" />
                </div>
              </div>

              {/* Trade & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-muted)] mb-1">
                    Primary Trade
                  </label>
                  <select
                    value={tradeSlug}
                    onChange={(e) => setTradeSlug(e.target.value)}
                    className="w-full rounded-xl bg-[var(--color-shell)] border border-[var(--color-hairline)] px-3 py-2 text-xs font-medium text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    {TRADE_CHOICES.map((t) => (
                      <option key={t.slug} value={t.slug}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-muted)] mb-1">
                    Workshop Base / Hub
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-xl bg-[var(--color-shell)] border border-[var(--color-hairline)] px-3 py-2 text-xs font-medium text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    {POPULAR_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] py-3 text-xs font-bold text-[var(--color-on-accent)] shadow-md hover:bg-[var(--color-accent-press)] transition-all active:scale-[0.99]"
              >
                <span>Send WhatsApp Verification Code</span>
                <ArrowRight className="size-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="text-center py-2">
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
                  <ShieldCheck className="size-6" />
                </div>
                <p className="text-xs text-[var(--color-muted)]">
                  Enter the 6-digit code received via WhatsApp
                </p>
              </div>

              {/* 6-Digit Code Input */}
              <div className="flex justify-center">
                <input
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="------"
                  className="w-48 text-center font-mono text-2xl tracking-[0.4em] font-extrabold rounded-2xl bg-[var(--color-shell)] border border-[var(--color-hairline)] py-3 text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>

              {/* Quick Auto-Fill Helper */}
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={handleAutoFillOtp}
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                >
                  <Sparkles className="size-3.5" />
                  <span>Auto-fill: {simulatedGeneratedOtp}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] py-3 text-xs font-bold text-[var(--color-on-accent)] shadow-md hover:bg-[var(--color-accent-press)] transition-all disabled:opacity-50"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="size-4 animate-spin" />
                      <span>Verifying Sabi Identity...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="size-4" />
                      <span>Verify & Enter Dashboard</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('input')}
                  className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)] py-1 font-medium transition-colors"
                >
                  Change phone number or details
                </button>
              </div>
            </form>
          )}

          {/* Privacy Footnote */}
          <div className="mt-5 border-t border-[var(--color-hairline)] pt-3 text-[11px] text-[var(--color-muted)] flex items-center gap-2">
            <UserCheck className="size-3.5 text-emerald-500 shrink-0" />
            <span>Encrypted local session. Your phone number is only used for WhatsApp job quote agreements and direct vendor hiring.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
