'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import FeatureCard from '../shared/FeatureCard';

export default function MeetSection() {
  const features = [
    {
      title: 'Audio & video calls',
      desc: 'Launch quick 1:1 huddles or team-wide calls from any channel, with screen sharing.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      ),
    },
    {
      title: 'Calendar & reminders',
      desc: 'Schedule recurring meetings; Squeako automatically sends reminder nudges.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
    },
    {
      title: 'Transcripts & summaries',
      desc: 'Record video meetings and generate AI-driven summaries and action items.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-base py-20 md:py-28 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Editorial Top Split (Inverted visual order) */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          {/* High Fidelity Calling Mockup */}
          <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-4 w-full max-w-[400px] mx-auto text-left shadow-sm order-2 lg:order-1">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <span className="font-heading font-bold text-[0.82rem] text-text-primary">Video Conference</span>
              <span className="text-[0.7rem] text-success font-bold">● Live (08:24)</span>
            </div>
            
            {/* Grid of video blocks */}
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-[4/3] rounded bg-bg-card border border-border/80 relative flex items-center justify-center">
                <span className="text-text-secondary text-[0.76rem] font-bold">Rohan Mehta</span>
                <span className="absolute bottom-1 right-1 text-[0.62rem] text-text-muted bg-bg-base/70 px-1 rounded">🎤</span>
              </div>
              <div className="aspect-[4/3] rounded bg-bg-card border border-border/80 relative flex items-center justify-center">
                <span className="text-text-secondary text-[0.76rem] font-bold">Priya Sen</span>
                <span className="absolute bottom-1 right-1 text-[0.62rem] text-text-muted bg-bg-base/70 px-1 rounded">🎤</span>
              </div>
            </div>

            {/* Calling control panel buttons */}
            <div className="flex justify-center gap-3 pt-2">
              <span className="w-8 h-8 rounded-full bg-hover-overlay border border-border/80 flex items-center justify-center text-[0.9rem] cursor-pointer hover:bg-hover-overlay">🎙️</span>
              <span className="w-8 h-8 rounded-full bg-hover-overlay border border-border/80 flex items-center justify-center text-[0.9rem] cursor-pointer hover:bg-hover-overlay">📹</span>
              <span className="w-8 h-8 rounded-full bg-hover-overlay border border-border/80 flex items-center justify-center text-[0.9rem] cursor-pointer hover:bg-hover-overlay">🖥️</span>
              <span className="w-8 h-8 rounded-full bg-error/15 border border-error/20 flex items-center justify-center text-[0.9rem] text-error cursor-pointer">📞</span>
            </div>
          </div>

          {/* Text content */}
          <div className="text-left order-1 lg:order-2 lg:pl-10">
            <Eyebrow>Meet</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-5 text-text-primary leading-tight">
              Calls & meetings, built right in
            </h2>
            <p className="text-text-secondary font-body text-[1.05rem] leading-relaxed max-w-[540px]">
              Stop pasting Zoom and Teams links back and forth. Start crystal-clear voice or video calls inside Squeako with screen sharing in one tap.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <FeatureCard key={feat.title} icon={feat.icon} title={feat.title} description={feat.desc} />
          ))}
        </div>

      </div>
    </section>
  );
}
