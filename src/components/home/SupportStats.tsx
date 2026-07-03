import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SupportStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-item',
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              const counters = containerRef.current?.querySelectorAll('[data-count]');
              counters?.forEach((c) => {
                const elC = c as HTMLElement;
                if (elC.dataset.done) return;
                elC.dataset.done = '1';
                const target = parseInt(elC.getAttribute('data-count') || '0', 10);
                const suffix = elC.getAttribute('data-suffix') || '';

                gsap.to(
                  { val: 0 },
                  {
                    val: target,
                    duration: 1.5,
                    ease: 'power3.out',
                    onUpdate: function () {
                      elC.textContent = Math.round(this.targets()[0].val).toLocaleString('en-IN') + suffix;
                    },
                  }
                );
              });
            }
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { count: '2', suffix: 'h', label: 'Avg first response' },
    { count: 'IST', suffix: '', label: '+ WhatsApp support', noAnim: true },
    { count: '98', suffix: '%', label: 'Satisfaction' },
    { count: '99', suffix: '.9%', label: 'Uptime' },
    { count: '100', suffix: '%', label: 'Human support' },
  ];

  return (
    <div ref={containerRef} className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <div className="bg-gradient-to-br from-[#FDFAF4] to-[#F3EBDB] border border-[#EBE2D1] rounded-[30px] p-[clamp(34px,5vw,68px)] relative overflow-hidden">

          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center relative z-10">
            <Eyebrow>We've got your back</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Support that actually responds
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[18px] text-center relative z-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item opacity-0 flex flex-col">
                {stat.noAnim ? (
                  <div className="font-sora font-extrabold text-[1.8rem] text-[#6ED190] leading-none">
                    {stat.count}
                  </div>
                ) : (
                  <div
                    className="font-sora font-extrabold text-[1.8rem] text-[#6ED190] leading-none"
                    data-count={stat.count}
                    data-suffix={stat.suffix}
                  >
                    0
                  </div>
                )}
                <div className="text-muted text-[0.84rem] mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
