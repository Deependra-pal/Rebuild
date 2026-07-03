'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import Badge from '../shared/Badge';

export default function EnterpriseGrid() {
  const cards = [
    {
      title: 'SSO, SAML & SCIM',
      desc: 'Single sign-on integrations and automated user provisioning aligned with your existing identity providers.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: '99.9% uptime SLA',
      desc: 'A contractual uptime guarantee backed by technical account team oversight and dedicated status boards.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      ),
    },
    {
      title: 'Dedicated success lead',
      desc: 'A named specialist for rollout training, database migration, and ongoing priority support operations.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'DPDP & ISO compliance',
      desc: 'Local Mumbai data residency logs, audit tracks, and security guidelines to satisfy risk management.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Advanced administrative controls',
      desc: 'Granular access hierarchies, centralized console policies, custom histories, and data boundaries.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Procurement-friendly billing',
      desc: 'Direct annual invoicing billed locally in INR, customized license structures, and smooth reviews.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l1 12H4L5 9z" />
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

  const metrics = [
    { value: '99.9%', label: 'Uptime SLA', count: '99', suffix: '.9%' },
    { value: '24×7', label: 'Priority support support' },
    { value: 'SSO', label: 'SAML & SCIM integrations' },
    { value: 'India', label: 'Mumbai data residency' },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Built for Scale Section */}
        <div className="flex flex-col items-center">
          <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
            <Eyebrow>Built for scale</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
              Enterprise administration and security
            </h2>
          </div>

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

        {/* Custom Metrics Box */}
        <div className="reveal">
          <div className="bg-bg-card border border-border rounded-xl p-8 lg:p-12 relative overflow-hidden shadow-lg">
            <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-primary-wash/40 blur-[90px] pointer-events-none"></div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col gap-2.5 text-center lg:text-left lg:border-r lg:border-border/60 last:border-0 pr-4"
                >
                  {metric.count ? (
                    <div
                      className="font-heading font-extrabold text-[clamp(2rem,4vw,2.8rem)] text-primary leading-none"
                      data-count={metric.count}
                      data-suffix={metric.suffix}
                    >
                      0
                    </div>
                  ) : (
                    <div className="font-heading font-extrabold text-[clamp(2rem,4vw,2.8rem)] text-primary leading-none">
                      {metric.value}
                    </div>
                  )}
                  <div className="text-[0.88rem] text-text-secondary font-medium font-body leading-normal">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
