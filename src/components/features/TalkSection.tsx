'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import FeatureCard from '../shared/FeatureCard';

export default function TalkSection() {
  const features = [
    {
      title: 'Messages & channels',
      desc: '1:1 chats and organized group channels sorted by projects, teams, or operational hubs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: 'Threads & reactions',
      desc: 'Keep conversations organized with replies, react with emojis, and pin critical messages.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      title: 'Voice & video clips',
      desc: 'Record audio messages or async screen recordings instead of scheduling another standup call.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
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
            <Eyebrow>Talk</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-5 text-text-primary leading-tight">
              Messaging built for modern work
            </h2>
            <p className="text-text-secondary font-body text-[1.05rem] leading-relaxed max-w-[540px]">
              Chat should keep work moving forward, not create clutter. Squeako brings 1:1 DMs, group channels, and guest spaces into one clean client.
            </p>
          </div>

          {/* High Fidelity Chat Mockup */}
          <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 w-full max-w-[420px] mx-auto text-left shadow-sm">
            <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2 border-b border-border/60">
              # product-design
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2.5 items-start">
                <span className="w-7 h-7 rounded-full bg-primary-wash text-primary font-bold text-[0.7rem] flex items-center justify-center">AK</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <b className="font-heading text-[0.82rem] text-text-primary">Aditya</b>
                    <span className="text-[0.66rem] text-text-muted">10:14 AM</span>
                  </div>
                  <p className="text-[0.84rem] text-text-secondary mt-0.5 leading-normal">
                    Just pushed the new navigation layout to staging. Let me know what you think.
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start pl-7 border-l border-border/80 mt-1">
                <span className="w-6 h-6 rounded-full bg-primary-wash text-primary font-bold text-[0.66rem] flex items-center justify-center">PM</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <b className="font-heading text-[0.78rem] text-text-primary">Priya</b>
                    <span className="text-[0.62rem] text-text-muted">10:16 AM</span>
                  </div>
                  <p className="text-[0.8rem] text-text-secondary mt-0.5 leading-normal">
                    Looks incredibly sharp! The transitions are super clean.
                  </p>
                </div>
              </div>
            </div>
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
