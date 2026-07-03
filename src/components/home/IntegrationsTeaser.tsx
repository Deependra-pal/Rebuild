'use client';

import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function IntegrationsTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.integ-chip',
        { y: 20, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.06,
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

  const tools = [
    { letter: 'G', name: 'Google Calendar' },
    { letter: 'D', name: 'Google Drive' },
    { letter: 'M', name: 'Gmail' },
    { letter: 'Z', name: 'Zapier' },
    { letter: 'T', name: 'Trello' },
    { letter: 'J', name: 'Jira' },
    { letter: '🐙', name: 'GitHub' },
    { letter: 'R', name: 'Razorpay' },
  ];

  return (
    <section ref={containerRef} className="bg-transparent py-10 md:py-12 px-6 md:px-8 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px] bg-gradient-to-r from-primary to-accent"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>Plays well with others</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Works with the tools you already use
          </h2>
        </div>

        {/* Chips Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="integ-chip opacity-0 flex items-center gap-3 bg-bg-elevated border border-border rounded-xl py-3 px-5 font-heading font-semibold text-[0.88rem] text-text-primary hover:-translate-y-0.5 hover:bg-bg-hover hover:border-border-hover hover:shadow-sm transition-all duration-150 select-none"
            >
              <span className="w-7 h-7 rounded bg-bg-surface border border-border/40 text-text-primary flex items-center justify-center font-bold text-[0.85rem] shrink-0">
                {tool.letter}
              </span>
              {tool.name}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/integrations" variant="ghost" size="lg" className="!border-border !text-text-primary hover:!bg-bg-hover">
            See all integrations &rarr;
          </Button>
        </div>

      </div>
    </section>
  );
}
