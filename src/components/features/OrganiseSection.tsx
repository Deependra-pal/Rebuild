'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import FeatureCard from '../shared/FeatureCard';

export default function OrganiseSection() {
  const features = [
    {
      title: 'Task tracker',
      desc: 'Convert any message into a trackable to-do, assigned and dated.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 11l3 3L22 4" />
        </svg>
      ),
    },
    {
      title: 'Presence states',
      desc: 'Let colleagues know if you are in-meeting, on-break, active, or focused.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: 'Org chart tree',
      desc: 'Visualize dynamic company charts and live reporting structures.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <path d="M12 8v4M12 12H5v4M12 12h7v4" />
        </svg>
      ),
    },
    {
      title: 'Polls & reminders',
      desc: 'Make quick decisions together or set automated nudges for teammates.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-base py-20 md:py-28 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Editorial Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="text-left">
            <Eyebrow>Organise</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-5 text-text-primary leading-tight">
              Action items aligned, not scattered
            </h2>
            <p className="text-text-secondary font-body text-[1.05rem] leading-relaxed max-w-[540px]">
              Chat generates work. Squeako captures that work where it happens, converting messages to tasks, organizing board views, and keeping operations transparent.
            </p>
          </div>

          {/* High Fidelity Task Board Column Mockup */}
          <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3.5 w-full max-w-[400px] mx-auto text-left shadow-sm">
            <div className="flex justify-between items-center pb-2 border-b border-border/60">
              <span className="font-heading font-bold text-[0.82rem] text-text-primary">Kanban Column</span>
              <span className="text-[0.7rem] text-text-secondary bg-hover-overlay px-1.5 py-0.5 rounded font-mono font-bold">IN PROGRESS (3)</span>
            </div>
            
            {/* Cards stack */}
            <div className="flex flex-col gap-2.5">
              <div className="p-3 bg-bg-card border border-border/80 rounded-lg hover:border-border-hover transition-colors">
                <b className="font-heading text-[0.82rem] text-text-primary block leading-snug">Design onboarding walkthrough</b>
                <div className="flex items-center justify-between mt-3 text-[0.66rem] text-text-muted">
                  <span className="text-error font-bold">✦ High</span>
                  <span>July 5</span>
                </div>
              </div>
              <div className="p-3 bg-bg-card border border-border/80 rounded-lg hover:border-border-hover transition-colors">
                <b className="font-heading text-[0.82rem] text-text-primary block leading-snug">Verify DPDP database compliance</b>
                <div className="flex items-center justify-between mt-3 text-[0.66rem] text-text-muted">
                  <span className="text-info font-bold">✦ Medium</span>
                  <span>July 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <FeatureCard key={feat.title} icon={feat.icon} title={feat.title} description={feat.desc} />
          ))}
        </div>

      </div>
    </section>
  );
}
