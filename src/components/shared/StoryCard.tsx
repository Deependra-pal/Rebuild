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
    <div
      className={`bg-white border border-hairline rounded-2xl p-6 shadow-sh-sm flex flex-col gap-4 hover:-translate-y-1 hover:shadow-sh-md transition-all duration-200 ${className}`}
    >
      <span
        className="font-sora font-extrabold text-[2rem] text-[#6ED190] block leading-none"
        data-count={metric}
        data-suffix={suffix}
      >
        {metric}
        {suffix}
      </span>
      <p className="text-muted text-[0.92rem] italic leading-relaxed">
        {quote}
      </p>
      <div className="flex items-center gap-3 mt-auto border-t border-hairline/40 pt-3">
        <span
          className="w-9 h-9 rounded-full grid place-items-center text-white text-[0.88rem] font-bold font-sora flex-none"
          style={{ backgroundColor: avatarBg }}
        >
          {avatarText}
        </span>
        <div>
          <b className="font-sora font-semibold text-[0.86rem] text-ink block leading-snug">
            {name}
          </b>
          <span className="text-[0.76rem] text-muted block">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
