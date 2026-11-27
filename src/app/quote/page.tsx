'use client';

import React, { useState } from 'react';
import SabiLogo from '@/components/SabiLogo';
import {
  Calculator,
  MessageCircle,
  Copy,
  CheckCircle2,
  Share2,
  Printer,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function JobQuoteGeneratorPage() {
  const { user, isAuthenticated, openAuthModal } = useAuth();
  const [clientName, setClientName] = useState('Chief Adekunle');
  const [tradeCategory, setTradeCategory] = useState('Solar & Inverter Installation');
  const [jobDescription, setJobDescription] = useState('Supply and mount 4x 450W Canadian solar panels, 3.5kVA Felicity hybrid inverter, DC breakers, and 6mm earthing rod.');
  const [partsCost, setPartsCost] = useState(480000);
  const [transportCost, setTransportCost] = useState(25000);
  const [laborCost, setLaborCost] = useState(75000);
  const [contingencyPercent, setContingencyPercent] = useState(10);
  const [depositPercent, setDepositPercent] = useState(60);
  const [deliveryTimeline, setDeliveryTimeline] = useState('Friday by 4:00 PM');
  const [warrantyDays, setWarrantyDays] = useState(30);
  const [quoteTone, setQuoteTone] = useState<'english' | 'pidgin'>('pidgin');
  const [copied, setCopied] = useState(false);

  // Calculations
  const contingencyAmount = Math.round((partsCost + transportCost + laborCost) * (contingencyPercent / 100));
  const totalCost = partsCost + transportCost + laborCost + contingencyAmount;
  const depositRequired = Math.round(totalCost * (depositPercent / 100));
  const balanceOnDelivery = totalCost - depositRequired;

  // Generated WhatsApp message text
  const generateMessage = () => {
    if (quoteTone === 'english') {
      return `Good day ${clientName || 'Sir/Madam'},\n\n` +
        `Thank you for consulting me for your *${tradeCategory}* job.\n\n` +
        `📋 *Scope of Work:*\n${jobDescription}\n\n` +
        `💰 *Official Cost Estimate Breakdown:*\n` +
        `• Materials & Verified Parts: ₦${partsCost.toLocaleString()}\n` +
        `• Logistics & Site Transport: ₦${transportCost.toLocaleString()}\n` +
        `• Workmanship & Installation Labor: ₦${laborCost.toLocaleString()}\n` +
        (contingencyPercent > 0 ? `• Contingency & Technical Buffer (${contingencyPercent}%): ₦${contingencyAmount.toLocaleString()}\n` : '') +
        `------------------------------------\n` +
        `*TOTAL ESTIMATED COST:* ₦${totalCost.toLocaleString()}\n\n` +
        `💵 *Payment Terms:*\n` +
        `• Upfront Deposit (${depositPercent}% for parts procurement): ₦${depositRequired.toLocaleString()}\n` +
        `• Balance upon completion and testing: ₦${balanceOnDelivery.toLocaleString()}\n\n` +
        `⏱️ *Ready Date:* ${deliveryTimeline}\n` +
        `🛡️ *Warranty:* ${warrantyDays} days workmanship warranty\n` +
        `✅ *Verified by SabiTrade Registry*\n` +
        (user ? `👤 *Artisan:* ${user.name} (${user.businessName || user.trade}) • WhatsApp: ${user.phone}\n\n` : `\n`) +
        `Please reply *YES* to confirm and approve this estimate so I can schedule parts procurement.`;
    } else {
      return `Good day Chief ${clientName || 'Customer'},\n\n` +
        `As we discuss for your *${tradeCategory}* work, see the clean breakdown so everything go clear before we start:\n\n` +
        `📋 *Wetin I go do:*\n${jobDescription}\n\n` +
        `💰 *Full Price Breakdown:*\n` +
        `• Original Market Parts & Materials: ₦${partsCost.toLocaleString()}\n` +
        `• Transport & Fuel Money: ₦${transportCost.toLocaleString()}\n` +
        `• My Workmanship / Labor Fee: ₦${laborCost.toLocaleString()}\n` +
        (contingencyPercent > 0 ? `• Small Emergency/Contingency Buffer (${contingencyPercent}%): ₦${contingencyAmount.toLocaleString()}\n` : '') +
        `------------------------------------\n` +
        `*TOTAL MONEY:* ₦${totalCost.toLocaleString()}\n\n` +
        `💵 *Payment Agreement:*\n` +
        `• Advance (${depositPercent}% make I purchase materials today): ₦${depositRequired.toLocaleString()}\n` +
        `• Balance after we test am make you satisfy: ₦${balanceOnDelivery.toLocaleString()}\n\n` +
        `⏱️ *Delivery Time:* ${deliveryTimeline}\n` +
        `🛡️ *Guarantee:* ${warrantyDays} days testing warranty\n` +
        `✅ *Certified SabiTrade Technician*\n` +
        (user ? `👤 *Artisan:* ${user.name} (${user.businessName || user.trade}) • WhatsApp: ${user.phone}\n\n` : `\n`) +
        `Reply *YES* make I lock the agreement begin buy parts.`;
    }
  };

  const messageText = generateMessage();

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendWhatsApp = () => {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-14">
      {/* Header */}
      <div className="no-print border-b border-[var(--color-hairline)] pb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-bold text-[var(--color-ink)] shadow-sm ring-1 ring-[var(--color-hairline)]">
          <SabiLogo className="size-4" />
          <span>Professional Artisan Tool</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-[var(--color-ink)] md:text-5xl">
          WhatsApp Job Quote & Agreement Generator
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
          Calculate your parts, transport, labor, and 10% contingency buffer. Generate an ironclad written estimate you can send on WhatsApp in one click before turning a screw.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Left Inputs Column */}
        <div className="no-print lg:col-span-6 space-y-6">
          {/* Artisan Identity Card */}
          <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4 shadow-sm">
            {isAuthenticated && user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] font-bold text-xs flex items-center justify-center uppercase shadow-sm">
                    {user.avatarSeed || user.name.slice(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[var(--color-ink)]">{user.name}</span>
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                        VERIFIED ARTISAN
                      </span>
                    </div>
                    <div className="text-[11px] text-[var(--color-muted)]">
                      {user.businessName || user.trade} • {user.phone}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openAuthModal()}
                  className="text-[11px] text-[var(--color-accent)] font-semibold hover:underline"
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-full bg-[#075E54]/10 text-emerald-600 flex items-center justify-center">
                    <UserCheck className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-ink)]">Attach Your Workshop Signature</div>
                    <div className="text-[11px] text-[var(--color-muted)]">Connect your WhatsApp phone to include your verified badge.</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openAuthModal('artisan')}
                  className="rounded-full bg-[#075E54] px-3 py-1.5 text-[11px] font-bold text-white hover:bg-[#064e46] transition-colors"
                >
                  Connect WhatsApp
                </button>
              </div>
            )}
          </div>

          <div className="rounded-3xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-hairline)]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
              1. Job & Client Details
            </h2>

            <div className="mt-4 space-y-4 text-xs">
              <div>
                <label className="font-bold text-[var(--color-ink)]">Customer / Client Name:</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Chief Adekunle"
                  className="mt-1 w-full rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-paper)] p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>

              <div>
                <label className="font-bold text-[var(--color-ink)]">Trade Category:</label>
                <select
                  value={tradeCategory}
                  onChange={(e) => setTradeCategory(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-paper)] p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                >
                  <option value="Solar & Inverter Installation">Solar & Inverter Installation</option>
                  <option value="Phone Hardware & Screen Diagnostics">Phone Hardware & Screen Diagnostics</option>
                  <option value="Domestic Electrical Installation">Domestic Electrical Installation</option>
                  <option value="Tailoring & Bespoke Fashion">Tailoring & Bespoke Fashion</option>
                  <option value="General Artisan Contracting">General Artisan Contracting</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[var(--color-ink)]">Description of Work to Be Done:</label>
                <textarea
                  rows={3}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Describe exact parts to be bought and tasks to be completed..."
                  className="mt-1 w-full rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-paper)] p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>
            </div>
          </div>

          {/* Pricing Inputs */}
          <div className="rounded-3xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-hairline)]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)]">
              2. Transparent Cost Breakdown
            </h2>

            <div className="mt-4 space-y-4 text-xs">
              <div>
                <div className="flex justify-between">
                  <label className="font-bold text-[var(--color-ink)]">Parts & Materials Cost (₦):</label>
                  <span className="font-mono text-muted">₦{partsCost.toLocaleString()}</span>
                </div>
                <input
                  type="number"
                  step="1000"
                  value={partsCost}
                  onChange={(e) => setPartsCost(Number(e.target.value))}
                  className="mt-1 w-full rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-paper)] p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[var(--color-ink)]">Transport & Fuel (₦):</label>
                  <input
                    type="number"
                    step="500"
                    value={transportCost}
                    onChange={(e) => setTransportCost(Number(e.target.value))}
                    className="mt-1 w-full rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-paper)] p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[var(--color-ink)]">Labor / Workmanship (₦):</label>
                  <input
                    type="number"
                    step="1000"
                    value={laborCost}
                    onChange={(e) => setLaborCost(Number(e.target.value))}
                    className="mt-1 w-full rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-paper)] p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>
              </div>

              {/* Contingency Buffer Slider */}
              <div className="rounded-2xl bg-[var(--color-paper)] p-3.5 ring-1 ring-[var(--color-hairline)]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[var(--color-ink)]">
                    Contingency Buffer ({contingencyPercent}%):
                  </span>
                  <span className="font-mono font-bold text-[var(--color-accent)]">
                    +₦{contingencyAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="5"
                  value={contingencyPercent}
                  onChange={(e) => setContingencyPercent(Number(e.target.value))}
                  className="mt-2 w-full accent-[var(--color-accent)]"
                />
                <p className="mt-1 text-[10px] text-[var(--color-muted)]">
                  Buffers unforeseen issues like rusted screws, wire length adjustments, or transport surge pricing so you don&apos;t lose money.
                </p>
              </div>

              {/* Deposit and Timeline */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[var(--color-ink)]">Upfront Deposit:</label>
                  <select
                    value={depositPercent}
                    onChange={(e) => setDepositPercent(Number(e.target.value))}
                    className="mt-1 w-full rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-paper)] p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    <option value={50}>50% Deposit</option>
                    <option value={60}>60% Deposit (Standard)</option>
                    <option value={70}>70% Deposit</option>
                    <option value={100}>100% Upfront</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-[var(--color-ink)]">Ready Date & Time:</label>
                  <input
                    type="text"
                    value={deliveryTimeline}
                    onChange={(e) => setDeliveryTimeline(e.target.value)}
                    placeholder="e.g. Tomorrow 4 PM"
                    className="mt-1 w-full rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-paper)] p-3 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Column: WhatsApp Chat Bubble & Total Calculation */}
        <div className="lg:col-span-6 space-y-6">
          {/* Summary Card */}
          <div className="rounded-3xl bg-[var(--color-surface)] p-6 ring-2 ring-[var(--color-accent)] shadow-xl">
            <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                Total Quotation Value
              </span>
              <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 font-mono text-xs font-bold text-[var(--color-accent)]">
                {depositPercent}% Upfront Required
              </span>
            </div>

            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-display text-3xl font-black text-[var(--color-ink)] md:text-4xl">
                ₦{totalCost.toLocaleString()}
              </span>
              <div className="text-right text-xs">
                <p className="font-bold text-[var(--color-accent)]">
                  Deposit: ₦{depositRequired.toLocaleString()}
                </p>
                <p className="text-[var(--color-muted)]">
                  Balance: ₦{balanceOnDelivery.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Language Tone Switcher */}
            <div className="mt-6 flex items-center justify-between border-t border-[var(--color-hairline)] pt-4">
              <span className="text-xs font-bold text-[var(--color-ink)]">Quote Language:</span>
              <div className="inline-flex rounded-full bg-[var(--color-shell)] p-1 ring-1 ring-[var(--color-hairline)]">
                <button
                  type="button"
                  onClick={() => setQuoteTone('pidgin')}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    quoteTone === 'pidgin'
                      ? 'bg-[var(--color-accent)] text-white shadow-sm'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  Respectful Pidgin 🇳🇬
                </button>
                <button
                  type="button"
                  onClick={() => setQuoteTone('english')}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    quoteTone === 'english'
                      ? 'bg-[var(--color-surface)] text-[var(--color-ink)] shadow-sm'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  Formal English
                </button>
              </div>
            </div>

            {/* Live WhatsApp Bubble Preview */}
            <div className="mt-4 overflow-hidden rounded-2xl bg-[#EFEAE2] p-4 text-[#111B21] shadow-inner">
              <div className="flex items-center gap-2 border-b border-[#D1D7DB] pb-2 text-[11px] font-bold text-[#54656F]">
                <MessageCircle className="size-3.5 text-[#00A884]" />
                <span>WhatsApp Message Preview</span>
              </div>
              <div className="mt-3 whitespace-pre-wrap font-sans text-xs leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-[#E9EDEF]">
                {messageText}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95 hover:bg-[#20ba5a]"
              >
                <MessageCircle className="size-4" />
                <span>Send on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] py-3 text-xs font-bold text-[var(--color-paper)] shadow-md transition-transform hover:scale-105 active:scale-95 hover:bg-[var(--color-accent)]"
              >
                <Copy className="size-4" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Quote Text'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-shell)] px-4 py-3 text-xs font-bold text-[var(--color-ink)] hover:bg-[var(--color-hairline)]"
                title="Print Estimate"
              >
                <Printer className="size-4" />
              </button>
            </div>
          </div>

          {/* Sabi Advice Banner */}
          <div className="rounded-3xl bg-[var(--color-paper)] p-5 ring-1 ring-[var(--color-hairline)] text-xs text-[var(--color-muted)]">
            <div className="flex items-center gap-2 font-bold text-[var(--color-ink)]">
              <Sparkles className="size-4 text-[var(--color-accent)]" />
              <span>Why Written WhatsApp Agreements Work:</span>
            </div>
            <p className="mt-2 leading-relaxed">
              When a client replies <strong>YES</strong> to this exact message, you have a timestamped record of the parts cost, deposit, and delivery deadline. This prevents 95% of informal payment arguments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
