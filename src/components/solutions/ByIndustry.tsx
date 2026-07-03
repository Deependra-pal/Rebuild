'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function ByIndustry() {
  const industries = [
    {
      title: 'IT & Software',
      desc: 'Ship products faster with Standups, code discussion logs, and incident rooms inside a single app.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: 'D2C & Retail',
      desc: 'Coordinate warehouse updates, supply logistics, and client messaging across multiple hubs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      title: 'Fintech & Finance',
      desc: 'Simplify compliance procedures with localized Indian data hosting residency and DPDP logs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      title: 'Agencies & Consulting',
      desc: 'Set up guest channels per project to give clients transparent visibility into deliverables.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      ),
    },
    {
      title: 'Education',
      desc: 'Coordinate administrative staff, directories, and tasks without per-seat dollar billing shocks.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M22 10L12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
        </svg>
      ),
    },
    {
      title: 'Logistics & Supply',
      desc: 'Sync dispatchers, sorting hubs, and delivery personnel using a lightweight mobile interface.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <rect x="1" y="3" width="15" height="13" />
          <path d="M16 8h4l3 3v5h-7" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>By industry</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Fits your business sector
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover flex flex-col items-start text-left"
            >
              <div className="w-10 h-10 rounded bg-primary-wash text-primary flex items-center justify-center mb-4">
                {ind.icon}
              </div>
              <h4 className="font-heading font-extrabold text-[1.05rem] mb-1.5 text-text-primary">{ind.title}</h4>
              <p className="text-text-secondary text-[0.88rem] leading-relaxed font-body">{ind.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
