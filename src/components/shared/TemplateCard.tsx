import React from 'react';

interface TemplateCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function TemplateCard({
  icon,
  title,
  description,
  className = '',
}: TemplateCardProps) {
  return (
    <div
      className={`group bg-bg-card border border-border rounded-xl p-6 hover:border-border-hover transition-all duration-200 flex flex-col justify-between text-left ${className}`}
    >
      <div>
        <div className="w-9 h-9 rounded bg-primary-wash text-primary flex items-center justify-center mb-4 shrink-0 font-bold">
          {icon}
        </div>
        <h4 className="font-heading font-extrabold text-[1.05rem] text-text-primary mb-1.5 leading-snug">
          {title}
        </h4>
        <p className="text-[0.84rem] text-text-secondary leading-relaxed font-body mb-5">
          {description}
        </p>
      </div>
      
      <span className="text-primary font-heading font-bold text-[0.82rem] inline-flex items-center gap-1 mt-auto select-none cursor-pointer">
        Use Blueprint
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          &rarr;
        </span>
      </span>
    </div>
  );
}
