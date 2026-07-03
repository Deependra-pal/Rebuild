'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function CompareHero() {
  return (
    <section className="bg-bg-base pt-24 pb-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px] bg-gradient-to-r from-primary to-accent"></div>

      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
        <Eyebrow>Compare Options</Eyebrow>
        
        <h1 className="font-heading font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.03em] text-text-primary mt-5 mb-6 max-w-[840px]">
          Squeako vs tools you are <span className="text-primary font-semibold">probably overpaying for.</span>
        </h1>
        
        <p className="font-body text-[1.15rem] text-text-secondary leading-relaxed max-w-[660px]">
          One unified suite instead of three or four disconnected bills — at a price designed for India. Here is how Squeako stacks up.
        </p>
      </div>
    </section>
  );
}
