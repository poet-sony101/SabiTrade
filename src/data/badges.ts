import { BadgeRecord } from '@/types';

export const INITIAL_BADGES: BadgeRecord[] = [
  {
    id: "SABI-WRK-2026-7841",
    learnerName: "Chidubem Okafor",
    trackTitle: "Work-Ready Basics",
    trackSlug: "work-ready-basics",
    badgeCode: "SABI-WRK",
    issuedAt: "2026-11-15",
    score: "100%",
    verifiedBy: "SabiTrade Public Verification Registry",
    status: "VERIFIED_ACTIVE",
    skills: ["Customer Relations", "Job Pricing Breakdown", "Written WhatsApp Contracts", "Warranty Handling"]
  },
  {
    id: "SABI-SOL-2026-9214",
    learnerName: "Amina Bello",
    trackTitle: "Solar & Inverter Setup",
    trackSlug: "solar-installation",
    badgeCode: "SABI-SOL",
    issuedAt: "2026-11-20",
    score: "100%",
    verifiedBy: "SabiTrade Public Verification Registry",
    status: "VERIFIED_ACTIVE",
    skills: ["MPPT Sizing", "Series/Parallel PV Wiring", "LiFePO4 Chemistry", "DC Breaker Safety", "Earthing"]
  },
  {
    id: "SABI-PHN-2026-4402",
    learnerName: "Tunde Bakare",
    trackTitle: "Phone Hardware & Screen Diagnostics",
    trackSlug: "phone-repair",
    badgeCode: "SABI-PHN",
    issuedAt: "2026-11-22",
    score: "100%",
    verifiedBy: "SabiTrade Public Verification Registry",
    status: "VERIFIED_ACTIVE",
    skills: ["USB Diagnostics", "OLED vs Incell", "Battery Thermal Safety", "Water Damage First Aid"]
  },
  {
    id: "SABI-ELE-2026-3190",
    learnerName: "Emeka Umeh",
    trackTitle: "Domestic Electrical Safety & Wiring",
    trackSlug: "electrical-installation",
    badgeCode: "SABI-ELE",
    issuedAt: "2026-11-24",
    score: "100%",
    verifiedBy: "SabiTrade Public Verification Registry",
    status: "VERIFIED_ACTIVE",
    skills: ["Consumer Unit Setup", "30mA RCD Protection", "Safe Isolation Protocol", "Breaker Amperage Matching"]
  },
  {
    id: "SABI-FSH-2026-5518",
    learnerName: "Blessing Adebayo",
    trackTitle: "Tailoring & Garment Construction",
    trackSlug: "tailoring-fashion",
    badgeCode: "SABI-FSH",
    issuedAt: "2026-11-26",
    score: "100%",
    verifiedBy: "SabiTrade Public Verification Registry",
    status: "VERIFIED_ACTIVE",
    skills: ["Precision Measurement", "Grain Line Alignment", "Industrial Machine Maintenance", "Seam Pressing"]
  }
];

export function getBadges(): BadgeRecord[] {
  if (typeof window === 'undefined') return INITIAL_BADGES;
  try {
    const saved = localStorage.getItem('sabitrade_badges');
    if (saved) {
      const parsed = JSON.parse(saved);
      return [...parsed, ...INITIAL_BADGES.filter(b => !parsed.some((p: BadgeRecord) => p.id === b.id))];
    }
  } catch {}
  return INITIAL_BADGES;
}

export function saveBadge(badge: BadgeRecord) {
  if (typeof window === 'undefined') return;
  try {
    const current = getBadges();
    const filtered = current.filter(b => b.id !== badge.id);
    const updated = [badge, ...filtered];
    localStorage.setItem('sabitrade_badges', JSON.stringify(updated));
  } catch {}
}

export function findBadgeById(id: string): BadgeRecord | undefined {
  const all = getBadges();
  return all.find(b => b.id.toLowerCase() === id.trim().toLowerCase());
}
