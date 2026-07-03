'use client';

import React from 'react';

export default function AboutStory() {
  return (
    <section className="bg-bg-base py-20 md:py-28 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Core Insight Quote */}
        <div className="text-left">
          <blockquote className="font-heading font-extrabold text-[clamp(1.5rem,3.2vw,2.1rem)] leading-snug tracking-[-0.02em] text-text-primary">
            "We watched startups stitch together a chat app, a video tool, and a task board — paying in dollars without GST invoices, while waiting on support teams from foreign timezones."
          </blockquote>
        </div>

        {/* Right Column: Resolving copy */}
        <div className="text-left font-body text-[1.05rem] text-text-secondary leading-relaxed flex flex-col gap-6">
          <p>
            The software industry has long operated on the assumption that what works for enterprise operations in the West must be adopted globally. This has left teams in India managing fragmented platforms, expensive conversions, and complex billing paths.
          </p>
          <p>
            We built Squeako to change this. By unifying chat channels, calling, and task trackers into a single secure workspace, we eliminate tool bloat and platform tax.
          </p>
          <p className="font-heading text-primary font-bold text-[0.94rem] mt-2">
            Priced in Rupees. Hosted in India. Supported during your workday.
          </p>
        </div>

      </div>
    </section>
  );
}
