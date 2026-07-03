'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function Principles() {
  const principles = [
    {
      title: 'Fair pricing, always',
      desc: "Good tools shouldn't be a luxury. We price Squeako for the team buying it, not the enterprise budget next door.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: 'Rooted in India',
      desc: '100% local hosting, Indian timezone support, UPI billing, and GST invoices. We build for the realities of doing business here.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Simple over clever',
      desc: "If your team needs a user manual to start chatting, we've failed. Everything is designed to be obvious the first time.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
    },
    {
      title: 'Boringly reliable',
      desc: 'The best workplace communication tool is the one you never think about. We sweat uptime so your team can focus on production.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-base py-20 md:py-28 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>What we stand for</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Our guiding principles
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((p, idx) => (
            <div 
              key={idx} 
              className="flex gap-4 items-start bg-bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover"
            >
              <div className="w-10 h-10 rounded bg-primary-wash text-primary flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div className="text-left">
                <h4 className="font-heading font-extrabold text-[1.05rem] mb-1.5 text-text-primary">{p.title}</h4>
                <p className="text-text-secondary text-[0.88rem] leading-relaxed font-body">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
