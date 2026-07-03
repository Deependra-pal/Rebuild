import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.award-item',
        { y: 20, opacity: 0, scale: 0.93 },
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

  const awardsList = [
    { rating: '4.8 / 5', text: 'G2 LEADER 2026' },
    { rating: '4.7 / 5', text: 'CAPTERRA' },
    { rating: 'HIGH PERFORMER', text: 'SMB · 2026' },
    { rating: '4.6 / 5', text: 'GETAPP' },
    { rating: 'EASIEST TO USE', text: 'INDIA · 2026' },
  ];

  return (
    <div ref={containerRef} className="py-20 px-0 relative overflow-hidden">
      {/* Background decoration glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full z-0 pointer-events-none opacity-15 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(22, 209, 150, 0.15) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-[22px] relative z-10">
        <div className="max-w-[850px] mx-auto mb-[28px] text-center">
          <Eyebrow>Recognised by reviewers</Eyebrow>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
            Teams rate us highly
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-[14px]">
          {awardsList.map((aw, idx) => (
            <div
              key={idx}
              className="award-item opacity-0 flex flex-col items-center gap-[6px] bg-white border border-hairline rounded-[14px] py-4 px-[22px] shadow-sh-sm min-w-[118px] text-ink hover:-translate-y-0.5 hover:shadow-sh-md transition-all duration-200"
            >
              <span className="text-[#F5B544] text-[0.85rem] font-bold">★★★★★</span>
              <b className="font-sora font-bold text-[0.9rem] leading-none text-ink">{aw.rating}</b>
              <span className="text-[0.7rem] text-muted font-space-mono tracking-[0.03em] text-center uppercase mt-0.5">
                {aw.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
