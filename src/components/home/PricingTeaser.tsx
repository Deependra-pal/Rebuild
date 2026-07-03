'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';

export default function PricingTeaser() {
  return (
    <section className="bg-transparent py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Background glow behind centered panel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px] bg-gradient-to-r from-primary to-accent"></div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        <div className="w-full bg-bg-elevated border border-border rounded-xl p-8 md:p-16 text-center relative overflow-hidden shadow-lg">
          <Eyebrow>Simple, honest pricing</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Start free. Upgrade when you grow.
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-[560px] mx-auto mb-8 leading-relaxed font-body">
            Flexible subscriptions designed to fit startups and growing operations, with zero hidden platform charges.
          </p>
          <Button href="/pricing" variant="primary" size="lg" className="!bg-primary hover:!bg-primary/90 active:!bg-primary/80 !text-white !shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 border-0">
            See full pricing & plans
          </Button>
        </div>
      </div>
    </section>
  );
}
