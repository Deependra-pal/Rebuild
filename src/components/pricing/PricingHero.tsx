'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function PricingHero() {
  return (
    <section className="bg-bg-base pt-24 pb-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px] bg-gradient-to-r from-primary to-accent"></div>

      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
        <Eyebrow>Squeako Pricing</Eyebrow>
        
        <h1 className="font-heading font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.03em] text-text-primary mt-5 mb-6 max-w-[840px]">
          Pricing that respects <span className="text-primary font-semibold">your startup budget.</span>
        </h1>
        
        <p className="font-body text-[1.15rem] text-text-secondary leading-relaxed max-w-[660px]">
          Start free forever. Upgrade only when you grow. No hidden fees, no dollar surprises — all in INR with GST invoices.
        </p>
      </div>
    </section>
  );
}
