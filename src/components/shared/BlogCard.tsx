import React from 'react';

interface BlogCardProps {
  imgTitle: string;
  imgBg?: string; // CSS style background override
  category: string;
  title: string;
  description: string;
  readTime: string;
  type: string;
  className?: string;
}

export default function BlogCard({
  imgTitle,
  imgBg,
  category,
  title,
  description,
  readTime,
  type,
  className = '',
}: BlogCardProps) {
  return (
    <div
      className={`bg-bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-border-hover transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        <div
          className="h-[140px] bg-bg-surface border-b border-border flex items-center justify-center text-text-primary font-heading font-extrabold text-[0.94rem] text-center px-4 relative overflow-hidden"
          style={imgBg ? { background: imgBg } : undefined}
        >
          {/* Cover background glow decoration */}
          <div className="absolute inset-0 bg-primary-wash/5 z-0 pointer-events-none"></div>
          <span className="relative z-10">{imgTitle}</span>
        </div>
        
        <div className="p-5 flex flex-col gap-2">
          <span className="font-heading font-bold text-[0.66rem] tracking-wider uppercase text-primary">
            {category}
          </span>
          <h4 className="font-heading font-extrabold text-[1.05rem] text-text-primary leading-snug">
            {title}
          </h4>
          <p className="text-[0.84rem] text-text-secondary leading-relaxed font-body">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="text-[0.74rem] text-text-secondary flex gap-3 pt-3.5 border-t border-border/60 font-body">
          <span>{readTime}</span>
          <span>&middot;</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
}
