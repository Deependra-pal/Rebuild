import React from 'react';

interface MiniCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function MiniCard({ icon, title, children, className = '' }: MiniCardProps) {
  return (
    <div
      className={`bg-white border border-hairline rounded-2xl shadow-sh-sm w-full max-w-[360px] overflow-hidden text-ink ${className}`}
    >
      <div className="py-3 px-[15px] border-b border-hairline flex items-center gap-[9px] font-sora font-semibold text-[0.9rem] text-ink">
        <span className="w-[30px] h-[30px] rounded-lg bg-violet-soft grid place-items-center text-violet flex-none">
          <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
        </span>
        {title}
      </div>
      <div className="p-3.5 flex flex-col gap-0.5">
        {children}
      </div>
    </div>
  );
}

// Subcomponent for list items in MiniCard
export function MiniCardItem({
  avatarText,
  avatarBg,
  avatarIcon,
  title,
  subtitle,
  badge,
}: {
  avatarText?: string;
  avatarBg?: string;
  avatarIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  badge?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[11px] py-[9px] px-0 border-b border-paper last:border-0">
      <div
        className="w-[30px] h-[30px] rounded-lg grid place-items-center flex-none text-white text-[0.7rem] font-bold font-sora"
        style={avatarBg ? { backgroundColor: avatarBg } : { backgroundColor: '#d7d2ea' }}
      >
        {avatarIcon ? <span className="w-3.5 h-3.5 flex items-center justify-center">{avatarIcon}</span> : avatarText}
      </div>
      <div className="flex-1 min-w-0">
        <b className="block text-[0.85rem] font-sora font-semibold text-ink leading-tight truncate">
          {title}
        </b>
        <span className="text-[0.75rem] text-muted block truncate mt-0.5">
          {subtitle}
        </span>
      </div>
      {badge}
    </div>
  );
}
