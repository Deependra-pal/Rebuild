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
      className={`flex items-start gap-3.5 bg-bg-elevated border border-border rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-hover hover:border-border-hover hover:shadow-sm ${className}`}
    >
      <span className="w-9 h-9 rounded-lg bg-bg-surface border border-border/40 text-text-primary flex items-center justify-center shrink-0">
        <span className="w-5 h-5 flex items-center justify-center text-text-secondary">{icon}</span>
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
