import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`sq-card sq-card-hover p-6 ${className}`}>
      <span className="sq-icon w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0">
        <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      </span>
      <h4 className="font-heading font-extrabold text-[1.125rem] text-text-primary mb-2.5 leading-snug">
        {title}
      </h4>
      <p className="text-text-secondary text-[0.88rem] leading-relaxed font-body">
        {description}
      </p>
    </div>
  );
}
