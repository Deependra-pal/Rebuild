import React from 'react';

/* Premium, theme-aware section primitives.
   Deliberately avoids the legacy `.eyebrow` / `.text-ink` classes so the old
   !important overrides never touch the new layout. */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="sq-eyebrow">{children}</span>;
}

interface SectionHeadProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
  titleClassName?: string;
  maxWidth?: string;
}

export function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  maxWidth = 'max-w-[720px]',
}: SectionHeadProps) {
  const isCenter = align === 'center';
  return (
    <div
      className={`flex flex-col ${isCenter ? 'items-center text-center mx-auto' : 'items-start text-left'} ${isCenter ? maxWidth : ''} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`font-heading font-extrabold tracking-[-0.035em] leading-[1.08] text-text-primary text-[clamp(1.85rem,3.9vw,2.75rem)] mt-5 ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-[1.05rem] md:text-[1.1rem] text-text-secondary leading-relaxed mt-4 ${isCenter ? 'max-w-[600px]' : 'max-w-[540px]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* Standard section shell — transparent (canvas mesh shows through), generous rhythm. */
export function Section({
  children,
  className = '',
  id,
  innerClassName = '',
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={`relative px-6 md:px-8 py-20 md:py-28 ${className}`}>
      <div className={`max-w-[1200px] mx-auto relative z-10 ${innerClassName}`}>{children}</div>
    </section>
  );
}
