import React from 'react';
import { Briefcase, Smartphone, Sun, Zap, Scissors } from 'lucide-react';

interface TradeIconProps {
  name: 'Briefcase' | 'Smartphone' | 'Sun' | 'Zap' | 'Scissors';
  className?: string;
}

export default function TradeIcon({ name, className = 'size-5' }: TradeIconProps) {
  switch (name) {
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Scissors':
      return <Scissors className={className} />;
    default:
      return <Briefcase className={className} />;
  }
}
