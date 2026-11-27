export type Language = 'en' | 'pidgin';

export interface Lesson {
  id: string;
  title: string;
  titlePidgin: string;
  readTime: string;
  contentEn: string;
  contentPidgin: string;
  keyTakeaway: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TradeTrack {
  id: string;
  slug: string;
  title: string;
  titlePidgin: string;
  category: string;
  iconName: 'Briefcase' | 'Smartphone' | 'Sun' | 'Zap' | 'Scissors';
  color: 'amber' | 'rose' | 'emerald' | 'blue' | 'purple';
  description: string;
  descriptionPidgin: string;
  estimatedMinutes: number;
  lessonsCount: number;
  badgeCode: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface Gig {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  trade: string;
  tradeSlug: string;
  requiredBadge: string;
  pay: string;
  posted: string;
  whatsapp: string;
  description: string;
  vendorVerified: boolean;
}

export interface BadgeRecord {
  id: string;
  learnerName: string;
  trackTitle: string;
  trackSlug: string;
  badgeCode: string;
  issuedAt: string;
  score: string;
  verifiedBy: string;
  status: 'VERIFIED_ACTIVE' | 'EXPIRED' | 'REVOKED';
  skills: string[];
}

export interface CohortMetric {
  id: string;
  name: string;
  sponsorName: string;
  targetTrade: string;
  enrolled: number;
  completed: number;
  badgesMinted: number;
  gigsApplied: number;
  completionRate: string;
}
