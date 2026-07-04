import React from 'react';

interface StoryCardProps {
  metric: string;
  suffix: string;
  quote: string;
  avatarBg: string;
  avatarText: string;
  name: string;
  role: string;
  className?: string;
}

export default function StoryCard({
  metric,
  suffix,
  quote,
  avatarBg,
  avatarText,
  name,
  role,
  className = '',
}: StoryCardProps) {
  return (
    <div className={`sq-card sq-card-hover p-6 flex flex-col gap-4 ${className}`}>
      <span
        className="font-heading font-extrabold text-[2rem] block leading-none"
        style={{ color: 'var(--color-mint, #12A46B)' }}
        data-count={metric}
        data-suffix={suffix}
      >
        {metric}
        {suffix}
      </span>
      <p className="text-text-secondary text-[0.92rem] italic leading-relaxed">
        {quote}
      </p>
      <div className="flex items-center gap-3 mt-auto border-t border-border/60 pt-3">
        <span
          className="w-9 h-9 rounded-full grid place-items-center text-white text-[0.88rem] font-bold font-heading flex-none"
          style={{ backgroundColor: avatarBg }}
        >
          {avatarText}
        </span>
        <div>
          <b className="font-heading font-semibold text-[0.86rem] text-text-primary block leading-snug">
            {name}
          </b>
          <span className="text-[0.76rem] text-text-secondary block">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
