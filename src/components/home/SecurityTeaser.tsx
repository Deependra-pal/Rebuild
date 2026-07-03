'use client';

import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';
import Badge from '../shared/Badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SecurityTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.trust-badge',
        { y: 20, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
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
    <section ref={containerRef} className="bg-bg-card py-20 md:py-32 px-6 md:px-8 border-b border-border relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px] bg-gradient-to-r from-primary to-accent"></div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-12 text-center flex flex-col items-center">
          <Eyebrow>Safe & compliant</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Security built for enterprise trust
          </h2>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed max-w-[620px]">
            AES 256-bit encryption in transit and at rest, local data residency in India, audit logging, admin access controls, and SSO integration support.
          </p>
        </div>

        {/* Badges Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="trust-badge opacity-0">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
            >
              DPDP-ready
            </Badge>
          </div>
          <div className="trust-badge opacity-0">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px]">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              }
            >
              ISO 27001 Certified
            </Badge>
          </div>
          <div className="trust-badge opacity-0">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px]">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            >
              SOC 2 Compliant
            </Badge>
          </div>
          <div className="trust-badge opacity-0">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                </svg>
              }
            >
              100% Indian Hosting
            </Badge>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/security" variant="ghost" size="lg" className="!border-border !text-text-primary hover:!bg-bg-hover">
            Read Security Protocol &rarr;
          </Button>
        </div>

      </div>
    </section>
  );
}
