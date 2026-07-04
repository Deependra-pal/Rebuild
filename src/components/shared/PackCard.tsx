import React from 'react';

interface PackCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export default function PackCard({ icon, title, subtitle, className = '' }: PackCardProps) {
  return (
    <div className={`sq-card sq-card-hover flex items-start gap-3.5 p-5 ${className}`}>
      <span className="sq-icon w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
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
