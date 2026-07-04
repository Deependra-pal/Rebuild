import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div
      className={`bg-[#151D26] border border-[#2A3542] rounded-xl p-6 transition-all duration-200 hover:bg-[#1B2430] hover:border-white/[0.12] shadow-[0_1px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_16px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 ${className}`}
    >
      <div className="w-10 h-10 rounded-lg bg-primary-wash text-primary flex items-center justify-center mb-5 shrink-0">
        <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      </div>
      <h4 className="font-heading font-extrabold text-[1.125rem] text-text-primary mb-2.5 leading-snug">
        {title}
      </h4>
      <p className="text-text-secondary text-[0.88rem] leading-relaxed font-body">
        {description}
      </p>
    </div>
  );
}
