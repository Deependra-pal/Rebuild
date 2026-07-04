import React from 'react';

interface PackCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export default function PackCard({ icon, title, subtitle, className = '' }: PackCardProps) {
  return (
    <div
      className={`flex items-start gap-3.5 bg-[#151D26] border border-[#2A3542] rounded-xl p-5 transition-all duration-200 hover:bg-[#1B2430] hover:border-white/[0.12] shadow-[0_1px_8px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 ${className}`}
    >
      <span className="w-9 h-9 rounded-lg bg-[rgba(48,213,200,0.08)] text-accent flex items-center justify-center shrink-0">
        <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      </span>
      <div>
        <b className="font-heading font-bold text-[0.94rem] text-text-primary block leading-snug">
          {title}
        </b>
        <span className="text-[0.8rem] text-text-secondary block mt-1 font-body">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
