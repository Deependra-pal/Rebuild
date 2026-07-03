import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Automations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.auto-card',
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
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

  const cards = [
    {
      whenText: 'When',
      triggerIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[17px] h-[17px]">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
      triggerBg: '#F0506E',
      triggerTitle: 'A task is overdue',
      triggerSub: 'in any group',
      actionIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[17px] h-[17px]">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      actionBg: '#6ED190',
      actionTitle: 'Remind the owner',
      actionSub: 'with a friendly nudge',
    },
    {
      whenText: 'When',
      triggerIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[17px] h-[17px]">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
      triggerBg: '#16D196',
      triggerTitle: 'A client joins a room',
      triggerSub: 'guest access',
      actionIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[17px] h-[17px]">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      ),
      actionBg: '#6ED190',
      actionTitle: 'Post a welcome',
      actionSub: 'and share onboarding',
    },
    {
      whenText: 'Every',
      triggerIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[17px] h-[17px]">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
      triggerBg: '#F5B544',
      triggerTitle: 'Monday at 9 AM',
      triggerSub: 'recurring',
      actionIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[17px] h-[17px]">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      ),
      actionBg: '#6ED190',
      actionTitle: 'Start the standup',
      actionSub: 'and ping the team',
    },
  ];

  return (
    <div ref={containerRef} className="py-20 px-0 relative overflow-hidden">
      {/* Background decoration glow */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[400px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(217, 227, 138, 0.15) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-[22px] relative z-10">
        {/* Head */}
        <div className="max-w-[850px] mx-auto mb-11 text-center">
          <Eyebrow>No-code automations</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
            Automate the busywork
          </h2>
          <p className="text-[1.1rem] text-muted">
            Set simple &quot;when this, do that&quot; rules so routine updates happen on their own.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
          {cards.map((card, idx) => (
            <div key={idx} className="auto-card opacity-0 bg-white border border-hairline rounded-2xl p-[18px] shadow-sh-sm flex flex-col">
              <div className="font-space-mono text-[0.62rem] tracking-[0.06em] uppercase text-[#6ED190] mb-2.5">
                {card.whenText}
              </div>
              <div className="flex items-center gap-[10px]">
                <span
                  className="w-[34px] h-[34px] rounded-[9px] grid place-items-center flex-none text-white"
                  style={{ backgroundColor: card.triggerBg }}
                >
                  {card.triggerIcon}
                </span>
                <div>
                  <b className="font-sora font-semibold text-[0.86rem] text-ink block leading-snug">
                    {card.triggerTitle}
                  </b>
                  <span className="text-[0.76rem] text-muted block mt-0.5">
                    {card.triggerSub}
                  </span>
                </div>
              </div>
              <div className="text-left text-muted text-[1rem] my-1 ml-[16px]">&darr;</div>
              <div className="flex items-center gap-[10px]">
                <span
                  className="w-[34px] h-[34px] rounded-[9px] grid place-items-center flex-none text-white"
                  style={{ backgroundColor: card.actionBg }}
                >
                  {card.actionIcon}
                </span>
                <div>
                  <b className="font-sora font-semibold text-[0.86rem] text-ink block leading-snug">
                    {card.actionTitle}
                  </b>
                  <span className="text-[0.76rem] text-muted block mt-0.5">
                    {card.actionSub}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
