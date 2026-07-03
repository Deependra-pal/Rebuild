'use client';

import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import FeatureCard from '../shared/FeatureCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhyTeamsSwitch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Stagger animation for switch cards
      gsap.fromTo('.switch-card-item',
        { y: 20, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.switch-grid',
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const points = [
    {
      title: 'Up to 70% cheaper',
      desc: 'One flat subscription replaces separate chat, calling, and task trackers. Secure payment in INR with local GST invoices.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: 'Data residency in India',
      desc: '100% of your company communications and data host locally in Indian data centers, in compliance with the DPDP Act.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Native multi-device',
      desc: 'Keep office managers and field operatives connected. Real-time synchronizations across Web, Android & iOS.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: 'IST business support',
      desc: 'Dedicated customer success team available directly on WhatsApp and chat during local Indian business hours.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      title: 'Setup in minutes',
      desc: 'Sign up, generate join links, and migrate conversations in minutes. Simple import triggers for Slack archives.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: 'Localized billing support',
      desc: 'Convenient subscription billing via UPI, net banking, and corporate cards. Transparent invoices with no overseas markup.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="bg-transparent py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>Why teams switch</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Made for how Indian teams collaborate
          </h2>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed max-w-[620px]">
            Squeako combines high-performance tools with Indian billing, compliance, and support architectures.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="switch-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((pt) => (
            <div key={pt.title} className="switch-card-item opacity-0 h-full">
              <FeatureCard icon={pt.icon} title={pt.title} description={pt.desc} className="h-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
