'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Eyebrow from '../shared/Eyebrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StoriesTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.story-col',
        { y: 20, opacity: 0, scale: 0.98 },
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

  const stories = [
    {
      metric: '₹38k → ₹6k / mo',
      quote: '"We were spending almost ₹38,000 a month across three tools. Squeako does it all for a fraction, and the org chart made onboarding far easier."',
      avatarBg: 'bg-bg-surface text-text-primary border border-border/40',
      avatarText: 'AS',
      name: 'Aarav Shah',
      role: 'Founder, Kettle · Bengaluru',
    },
    {
      metric: '1 day to roll out',
      quote: '"Calls, meetings, and chat in one app means no more pasting Zoom links into Slack. Our field staff actually use it because the mobile app is genuinely good."',
      avatarBg: 'bg-bg-surface text-text-primary border border-border/40',
      avatarText: 'PM',
      name: 'Priya Menon',
      role: 'Ops Lead, Routely · Pune',
    },
    {
      metric: '60% fewer tools',
      quote: '"As a fintech, data residency isn\'t optional. Squeako keeping everything in India made compliance conversations easy. WhatsApp support during IST hours is a major plus."',
      avatarBg: 'bg-bg-surface text-text-primary border border-border/40',
      avatarText: 'RG',
      name: 'Rahul Gupta',
      role: 'COO, Finbar · Gurugram',
    },
  ];

  return (
    <section ref={containerRef} className="bg-transparent pt-20 pb-10 md:pt-32 md:pb-12 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>Real results</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Teams that made the switch
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story) => (
            <div
              key={story.name}
              className="story-col opacity-0 bg-bg-elevated border border-border rounded-xl p-7 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-hover hover:border-border-hover hover:shadow-md"
            >
              <div className="font-heading font-extrabold text-[1.6rem] text-success leading-none">
                {story.metric}
              </div>
              <p className="text-[0.9375rem] text-text-primary leading-relaxed flex-grow font-body">
                {story.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <span className={`w-10 h-10 rounded-full font-heading font-bold text-[0.84rem] grid place-items-center shrink-0 ${story.avatarBg}`}>
                  {story.avatarText}
                </span>
                <div>
                  <b className="font-heading font-bold text-[0.88rem] text-text-primary block leading-tight">
                    {story.name}
                  </b>
                  <span className="text-[0.76rem] text-text-secondary block mt-0.5 font-body">{story.role}</span>
                </div>
              </div>
              <Link href="/stories" className="text-accent font-heading font-semibold text-[0.84rem] mt-2 block hover:underline">
                Read the story &rarr;
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
