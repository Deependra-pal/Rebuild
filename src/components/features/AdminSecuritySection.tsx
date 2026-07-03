'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import FeatureCard from '../shared/FeatureCard';

export default function AdminSecuritySection() {
  const features = [
    {
      title: 'Roles & permissions',
      desc: 'Enforce granular access controls, user boundaries, and channel restrictions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: 'Data in India',
      desc: 'Hosted on Indian soil inside secure local data servers to meet regulatory mandates.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Audit logs & SSO',
      desc: 'Integrate SAML/OIDC SSO providers and access compliance logs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 15l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-base py-20 md:py-28 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Editorial Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          {/* High Fidelity Security Log Mockup */}
          <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 w-full max-w-[400px] mx-auto text-left shadow-sm order-2 lg:order-1">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <span className="font-heading font-bold text-[0.82rem] text-text-primary">Admin Control Log</span>
              <span className="text-[0.66rem] text-success font-bold font-mono">ENCRYPTED</span>
            </div>
            
            <div className="flex flex-col gap-2 font-mono text-[0.72rem] text-text-secondary">
              <div className="flex justify-between border-b border-border/40 pb-1.5">
                <span>SSO Config: SAML_2.0</span>
                <span className="text-success font-bold">Enabled</span>
              </div>
              <div className="flex justify-between border-b border-border/40 pb-1.5">
                <span>DPDP Compliance Log</span>
                <span className="text-success font-bold">Passing</span>
              </div>
              <div className="flex justify-between border-b border-border/40 pb-1.5">
                <span>Server Residency Location</span>
                <span className="text-text-primary">Mumbai (IN)</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-left order-1 lg:order-2 lg:pl-10">
            <Eyebrow>Admin & security</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-5 text-text-primary leading-tight">
              Control and peace of mind
            </h2>
            <p className="text-text-secondary font-body text-[1.05rem] leading-relaxed max-w-[540px]">
              Compliance and IT control are designed right in. Get full audit visibility, SAML SSO integration, and localized data hosting parameters.
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
