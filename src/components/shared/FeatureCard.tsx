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
      className={`bg-bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-hover hover:border-border-hover hover:shadow-md ${className}`}
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
