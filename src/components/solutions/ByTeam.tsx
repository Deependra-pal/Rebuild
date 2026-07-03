'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function ByTeam() {
  const teams = [
    {
      title: 'Founders',
      desc: 'Run the entire organization from one dashboard — chat channels, call logs, candidate pipelines, and invoices.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a6 6 0 0 1 12 0v1" />
        </svg>
      ),
    },
    {
      title: 'Sales',
      desc: 'Connect with prospects, coordinate follow-ups, and review pipeline calls in channels to close deals faster.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-2-2-4 4" />
        </svg>
      ),
    },
    {
      title: 'Marketing',
      desc: 'Coordinate creative briefs, share media assets, and run sprint boards alongside active feedback rooms.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      ),
    },
    {
      title: 'Engineering',
      desc: 'Run standup check-ins, centralize debug updates, and review deployment logs in designated feeds.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: 'Customer Support',
      desc: 'Set up guest channels for priority tickets, run quick calls, and search internal resolution history.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      title: 'HR & Operations',
      desc: 'Onboard hires via org charts, align policies, schedule standups, and send announcement reminders.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>By team</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Built for your department
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teams.map((team, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover flex flex-col items-start text-left"
            >
              <div className="w-10 h-10 rounded bg-primary-wash text-primary flex items-center justify-center mb-4">
                {team.icon}
              </div>
              <h4 className="font-heading font-extrabold text-[1.05rem] mb-1.5 text-text-primary">{team.title}</h4>
              <p className="text-text-secondary text-[0.88rem] leading-relaxed font-body">{team.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
