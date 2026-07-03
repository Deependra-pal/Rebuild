'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';

export default function EnterpriseHero() {
  return (
    <section className="bg-bg-base pt-24 pb-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px] bg-gradient-to-r from-primary to-info"></div>

      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
        <Eyebrow>Enterprise Suite</Eyebrow>
        
        <h1 className="font-heading font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.03em] text-text-primary mt-5 mb-6 max-w-[840px]">
          Workspace communication that <span className="text-primary font-semibold">scales with your operation.</span>
        </h1>
        
        <p className="font-body text-[1.15rem] text-text-secondary leading-relaxed max-w-[660px] mb-8">
          The security, administrative controls, and dedicated local support large organizations require — without losing the workspace simplicity your team enjoys.
        </p>

        <Button href="/contact" size="lg" variant="primary" className="!bg-primary hover:!bg-primary-hover active:!bg-primary-active !text-bg-base !shadow-sm hover:!shadow-focus">
          Talk to sales
        </Button>
      </div>
    </section>
  );
}
