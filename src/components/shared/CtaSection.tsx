'use client';

import React, { useEffect, useRef } from 'react';
import Button from './Button';
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
    <section ref={containerRef} className={`relative py-24 md:py-36 px-6 md:px-8 overflow-hidden ${className}`}>
      {/* Deep navy luminous surface — finale zone */}
      <div className="absolute inset-0 bg-[rgba(5,12,28,0.7)] border-y border-primary/[0.1]"></div>
      {/* Finale corona — the page's closing light source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-full z-0 pointer-events-none blur-[100px]" style={{background: 'radial-gradient(ellipse, rgba(10,132,255,0.18) 0%, rgba(48,213,200,0.06) 40%, transparent 65%)'}}></div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center max-w-[760px] mx-auto flex flex-col items-center">
          <h2 className="cta-item opacity-0 text-[clamp(2rem,4.4vw,3.2rem)] font-heading font-extrabold mb-5 leading-tight text-text-primary">
            {title}
          </h2>
          <p className="cta-item opacity-0 text-[1.125rem] text-text-secondary max-w-[580px] mb-8 leading-relaxed font-body">
            {description}
          </p>

          <div className="cta-item opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 w-full sm:w-auto">
            <Button href={primaryBtnHref} variant="primary" size="lg" className="w-full sm:w-auto !bg-primary hover:!bg-primary/90 active:!bg-primary/80 !text-white !shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 border-0">
              {primaryBtnText}
            </Button>
            {secondaryBtnText && (
              <Button href={secondaryBtnHref} variant="ghost" size="lg" className="w-full sm:w-auto !border-border !text-text-primary hover:!bg-bg-hover">
                {secondaryBtnText}
              </Button>
            )}
          </div>

          <div className="cta-item opacity-0 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[0.84rem] text-text-secondary font-medium font-body">
            <span className="inline-flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-bg-surface border border-border/40 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0">✓</span>
              No credit card required
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-bg-surface border border-border/40 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0">✓</span>
              Setup in under 5 minutes
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-bg-surface border border-border/40 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0">✓</span>
              Cancel subscriptions anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
