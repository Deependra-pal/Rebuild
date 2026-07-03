'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function AboutHero() {
  return (
    <section className="bg-bg-base pt-24 pb-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px] bg-gradient-to-r from-primary to-info"></div>

      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
        <Eyebrow>Our Mission</Eyebrow>
        
        <h1 className="font-heading font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.03em] text-text-primary mt-5 mb-6 max-w-[840px]">
          Indian teams deserve <span className="text-primary font-semibold">better tools, not bigger bills.</span>
        </h1>
        
        <p className="font-body text-[1.15rem] text-text-secondary leading-relaxed max-w-[680px]">
          Squeako was built on a simple belief: your team's core communication workspace shouldn't cost a fortune or live on the other side of the world.
        </p>
      </div>
    </section>
  );
}
