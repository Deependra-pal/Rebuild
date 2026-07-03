import React from 'react';

interface BadgeProps {
  variant?: 'trust' | 'status-on' | 'status-away' | 'status-busy';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = 'trust',
  icon,
  children,
  className = '',
}: BadgeProps) {
  if (variant === 'trust') {
    return (
      <span
        className={`inline-flex items-center gap-[6px] bg-primary-wash border border-primary/20 rounded-full py-[5px] px-3.5 text-[0.78rem] font-semibold text-primary font-heading ${className}`}
      >
        {icon && <span className="flex-none text-primary/85">{icon}</span>}
        {children}
      </span>
    );
  }

  // Status badges
  const statusClasses = {
    'status-on': 'bg-success/12 border border-success/20 text-success',
    'status-away': 'bg-warning/12 border border-warning/20 text-warning',
    'status-busy': 'bg-error/12 border border-error/20 text-error',
  };

  return (
    <span
      className={`font-heading text-[0.68rem] font-bold py-[3px] px-[9px] rounded-full flex-none transition-all ${statusClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
