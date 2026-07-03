'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function AiSection() {
  const points = [
    {
      title: 'Catch-up recaps',
      desc: 'Back from leave or a long meeting? Get a clean, bulleted summary of what you missed in any group channel or thread.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 13h6M9 17h4" />
        </svg>
      ),
    },
    {
      title: 'Smart replies & rewrite',
      desc: 'Draft a reply, fix the tone, or translate messages with a single click so you sound professional and clear every time.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Ask your workspace',
      desc: '"Where did we land on the pricing page roadmap?" Squeako AI searches through chats, files, meetings, and integrations to answer.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-transparent py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full z-0 pointer-events-none opacity-[0.05] blur-[120px] bg-primary"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>Meet Squeako AI</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            An AI teammate inside every chat
          </h2>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed max-w-[620px]">
            Catch up in seconds, draft replies faster, and find anything across your company archives, without leaving your thread.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((item) => (
            <div
              key={item.title}
              className="bg-bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-wash text-primary flex items-center justify-center shrink-0 mb-5">
                <span className="w-5 h-5 flex items-center justify-center text-primary">{item.icon}</span>
              </div>
              <h4 className="font-heading font-extrabold text-[1.125rem] text-text-primary mb-2.5 leading-snug">
                {item.title}
              </h4>
              <p className="text-text-secondary text-[0.88rem] leading-relaxed font-body">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
