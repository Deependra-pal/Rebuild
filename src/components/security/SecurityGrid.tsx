'use client';

import React from 'react';
import Badge from '../shared/Badge';

export default function SecurityGrid() {
  const cards = [
    {
      title: 'Data stored in India',
      desc: 'Your workspace data resides in Indian data centers, meeting regulatory local data sovereignty parameters.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'AES-256 Encryption',
      desc: 'Every chat conversation, video meeting channel, and task document is encrypted in transit and at rest.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: 'DPDP Act ready',
      desc: "Fully aligned with India's Digital Personal Data Protection Act rules on retention and processing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      title: 'Administrative boundaries',
      desc: 'Enforce security zones, manage internal credentials, and limit access protocols for guest domains.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'Full Audit compliance logs',
      desc: 'Acquire system access histories, user updates, and administrative modifications on higher plans.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Enterprise SSO support',
      desc: 'Seamlessly link standard SAML 2.0 or OIDC authentication blocks for centralized workspace entry.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
        </svg>
      ),
    },
  ];

  const badges = [
    {
      label: 'DPDP-ready',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      label: 'ISO 27001 Certified',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      label: 'SOC 2 Compliant',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      label: '100% Indian Data Residency',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover flex flex-col items-start text-left"
            >
              <div className="w-10 h-10 rounded bg-primary-wash text-primary flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h4 className="font-heading font-extrabold text-[1.05rem] mb-1.5 text-text-primary">{card.title}</h4>
              <p className="text-text-secondary text-[0.88rem] leading-relaxed font-body">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Badges Row */}
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge, idx) => (
            <Badge key={idx} variant="trust" icon={badge.icon}>
              {badge.label}
            </Badge>
          ))}
        </div>

      </div>
    </section>
  );
}
