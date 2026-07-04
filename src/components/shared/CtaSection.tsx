'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnHref?: string;
  className?: string;
}

export default function CtaSection({
  title = 'Bring your whole team onto Squeako',
  description = 'Chat, channels, meetings, and task boards — for less than a cup of tea per user, per day.',
  primaryBtnText = 'Start free trial',
  secondaryBtnText = 'Book a 1:1 demo',
  primaryBtnHref = '/contact',
  secondaryBtnHref = '/contact',
  className = '',
}: CtaSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`sq-cta relative py-24 md:py-36 px-6 md:px-8 overflow-hidden ${className}`}>
      {/* soft top vignette for depth */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(255,255,255,0.06) 0%, transparent 60%)' }}></div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center max-w-[760px] mx-auto flex flex-col items-center">
          <h2 className="cta-item opacity-0 text-[clamp(2rem,4.6vw,3.35rem)] font-heading font-extrabold tracking-[-0.03em] mb-5 leading-[1.06]" style={{ color: 'var(--c-text)' }}>
            {title}
          </h2>
          <p className="cta-item opacity-0 text-[1.125rem] max-w-[580px] mb-9 leading-relaxed font-body" style={{ color: 'var(--c-text-2)' }}>
            {description}
          </p>

          <div className="cta-item opacity-0 flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-9 w-full sm:w-auto">
            <Link href={primaryBtnHref} className="sq-btn sq-btn-invert sq-btn-lg group w-full sm:w-auto">
              {primaryBtnText}
              <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            {secondaryBtnText && (
              <Link href={secondaryBtnHref} className="sq-btn sq-btn-ghost-light sq-btn-lg w-full sm:w-auto">
                {secondaryBtnText}
              </Link>
            )}
          </div>

          <div className="cta-item opacity-0 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[0.84rem] font-medium font-body" style={{ color: 'var(--c-text-2)' }}>
            {['No credit card required', 'Setup in under 5 minutes', 'Cancel subscriptions anytime'].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[0.7rem] shrink-0" style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', color: '#fff' }}>✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
