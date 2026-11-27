import React from 'react';

interface SabiLogoProps {
  className?: string;
  withText?: boolean;
  textSize?: string;
}

export default function SabiLogo({ className = 'size-8', withText = false, textSize = 'text-xl' }: SabiLogoProps) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105`}
        aria-label="SabiTrade Logo"
      >
        <defs>
          <linearGradient id="sabiFlameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#E03800" />
          </linearGradient>
          <linearGradient id="sabiStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF2E8" />
          </linearGradient>
          <filter id="flameGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#FF5000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Squircle Base with vibrant flame gradient */}
        <rect width="512" height="512" rx="128" fill="url(#sabiFlameGrad)" />

        {/* Subtle inner highlight border */}
        <rect
          x="10"
          y="10"
          width="492"
          height="492"
          rx="120"
          stroke="#FFFFFF"
          strokeOpacity="0.22"
          strokeWidth="10"
        />

        {/* Geometric Interlocking "S" Craft Monogram */}
        <path
          d="M365 185 C365 140, 320 125, 256 125 C185 125, 145 165, 145 220 C145 290, 367 270, 367 345 C367 405, 320 425, 256 425 C180 425, 145 385, 145 335"
          stroke="url(#sabiStrokeGrad)"
          strokeWidth="50"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Solar Craft Sparks */}
        <circle cx="365" cy="185" r="15" fill="#FFE600" />
        <circle cx="145" cy="335" r="15" fill="#FFE600" />

        {/* Center Craft Diamond Spark */}
        <path d="M256 220 L268 256 L256 292 L244 256 Z" fill="#FFE600" opacity="0.95" />
      </svg>

      {withText && (
        <span className={`font-display ${textSize} font-extrabold tracking-tight text-[var(--color-ink)]`}>
          Sabi<span className="text-[var(--color-accent)]">Trade</span>
        </span>
      )}
    </div>
  );
}
