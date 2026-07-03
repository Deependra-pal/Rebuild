import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function UseCases() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.usecase-card',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      team: 'Sales',
      desc: 'Drop a deal-won GIF in #wins, hop on a call with a prospect, and assign the follow-up task — without ever leaving Squeako.',
      foot: 'CHAT · CALLS · TASKS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px]">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-2-2-4 4" />
        </svg>
      ),
    },
    {
      team: 'Support',
      desc: 'Spin up a client room with guest access, share screens to debug live, and keep every conversation searchable for the next ticket.',
      foot: 'GUESTS · SCREEN SHARE · SEARCH',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px]">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      team: 'HR & Ops',
      desc: 'Onboard new joiners with the org chart, run a quick poll on the offsite venue, and set reminders so nothing slips through.',
      foot: 'ORG CHART · POLLS · REMINDERS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="rounded-rbox p-[clamp(34px,5vw,68px)] bg-white border border-hairline shadow-sh-sm bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB]">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>For every team</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Built for every team in your company
            </h2>
            <p className="text-[1.1rem] text-muted">
              However your teams work, Squeako fits the way they already think.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.team}
                className="usecase-card group relative overflow-hidden bg-white border border-hairline rounded-2xl p-6 shadow-sh-sm flex flex-col hover:-translate-y-1 hover:shadow-sh-md transition-all duration-500 hover:border-transparent"
              >
                {/* Dark background overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C140B] via-[#2A1D10] to-[#0F0F0F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col gap-4 h-full">
                  <div className="inline-flex items-center gap-2 font-sora font-bold text-[0.95rem] text-ink group-hover:text-white transition-colors duration-500">
                    <span className="w-8 h-8 rounded-lg bg-violet-soft text-violet group-hover:bg-white/10 group-hover:text-white transition-colors duration-500 grid place-items-center flex-none">
                      {card.icon}
                    </span>
                    {card.team}
                  </div>
                  <p className="text-muted text-[0.92rem] leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {card.desc}
                  </p>
                  <div className="font-space-mono text-[0.68rem] tracking-[0.08em] uppercase text-muted font-bold mt-auto pt-3 border-t border-hairline/40 group-hover:border-white/20 group-hover:text-white/60 transition-colors duration-500">
                    {card.foot}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
