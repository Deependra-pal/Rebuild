import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProductTour() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Left content sliding in from left
      gsap.fromTo('.tour-content',
        { x: -45, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );

      // Right video media sliding in from right
      gsap.fromTo('.tour-media',
        { x: 45, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
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
    <div ref={containerRef} className="py-20 px-0 relative overflow-hidden">
      {/* Ambient glow in background */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full z-0 pointer-events-none opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(22, 209, 150, 0.15) 0%, transparent 70%)' }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-[22px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[46px] items-center">
          {/* Left Content */}
          <div className="flex flex-col tour-content opacity-0">
            <Eyebrow>See it in action</Eyebrow>
            <h2 className="text-[clamp(1.7rem,3.4vw,2.4rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Take the 2-minute product tour
            </h2>
            <p className="text-muted text-[1.04rem] leading-relaxed mb-4">
              Watch a team go from scattered tools to one calm workspace — chat, a quick call, a task — all without switching apps.
            </p>
            <ul className="list-none flex flex-col gap-3.5 mt-[18px] p-0 m-0">
              {[
                {
                  num: '1',
                  title: 'Message, call & meet',
                  desc: 'All from the same window.',
                },
                {
                  num: '2',
                  title: 'Turn talk into tasks',
                  desc: 'Nothing slips through.',
                },
                {
                  num: '3',
                  title: 'See who\'s around',
                  desc: 'Live presence, always.',
                },
              ].map((item) => (
                <li key={item.num} className="flex gap-3 items-start">
                  <span className="w-[30px] h-[30px] rounded-lg step-num-glossy grid place-items-center flex-none font-sora font-bold text-[0.85rem]">
                    {item.num}
                  </span>
                  <div>
                    <b className="font-sora font-semibold text-[0.95rem] block text-ink leading-tight">
                      {item.title}
                    </b>
                    <span className="text-[0.86rem] text-muted block mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Media Player Mockup */}
          <div className="tour-media opacity-0 relative rounded-[18px] overflow-hidden border border-[#1FA968]/30 shadow-sh-lg bg-gradient-to-br from-[#0C281D] via-[#0E3A2B] to-[#1FA968] min-h-[300px] grid place-items-center">
            <div className="w-[74px] h-[74px] rounded-full bg-white grid place-items-center cursor-pointer shadow-sh-md transition-transform duration-200 hover:scale-[1.08] active:scale-[0.98]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] text-[#6ED190] ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/92 rounded-[10px] py-2 px-[13px] font-sora font-semibold text-[0.85rem] text-[#0B1818] shadow-sm">
              ▶ Squeako product tour · 2:04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
