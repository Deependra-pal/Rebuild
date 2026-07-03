'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function PricingTable() {
  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto reveal">
        
        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>Compare plans</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Detailed feature comparison
          </h2>
        </div>

        {/* Table Container */}
        <div className="bg-bg-card border border-border rounded-xl p-6 lg:p-10 shadow-lg relative overflow-hidden">
          <div className="overflow-x-auto rounded-lg border border-border/80">
            <table className="w-full border-collapse min-w-[760px] text-left">
              <thead>
                <tr className="bg-bg-surface border-b border-border">
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-text-primary">
                    Features
                  </th>
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-text-secondary">
                    Free
                  </th>
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-primary bg-primary-wash/10 border-l border-r border-border">
                    Growth
                  </th>
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-text-secondary">
                    Business
                  </th>
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-text-secondary">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Messaging Group */}
                <tr className="bg-bg-surface/40">
                  <td colSpan={5} className="p-3 pl-4 text-[0.7rem] font-heading font-extrabold tracking-widest uppercase text-text-muted">
                    Messaging & DMs
                  </td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">Teammates</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Up to 10</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-primary font-bold">Unlimited</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Unlimited</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Unlimited</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">Message history</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">90 days</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-primary font-bold">Unlimited</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Unlimited</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Custom policy</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">Guest channels</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-success font-bold">✓</td>
                  <td className="p-4 text-[0.86rem] text-success font-bold">✓</td>
                  <td className="p-4 text-[0.86rem] text-success font-bold">✓</td>
                </tr>

                {/* Meetings Group */}
                <tr className="bg-bg-surface/40">
                  <td colSpan={5} className="p-3 pl-4 text-[0.7rem] font-heading font-extrabold tracking-widest uppercase text-text-muted">
                    Conferences & calls
                  </td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">Group video capacity</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Up to 8</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-primary font-bold">Up to 50</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Up to 200</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Custom limit</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">Standup recurring meetings</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-success font-bold">✓</td>
                  <td className="p-4 text-[0.86rem] text-success font-bold">✓</td>
                  <td className="p-4 text-[0.86rem] text-success font-bold">✓</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">Transcripts & audio clips</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] text-success font-bold">✓</td>
                  <td className="p-4 text-[0.86rem] text-success font-bold">✓</td>
                </tr>

                {/* Admin & Compliance */}
                <tr className="bg-bg-surface/40">
                  <td colSpan={5} className="p-3 pl-4 text-[0.7rem] font-heading font-extrabold tracking-widest uppercase text-text-muted">
                    Admin & Security
                  </td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">Uptime SLA guarantee</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] text-success font-bold">99.9% contract SLA</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">SAML / OIDC SSO</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">—</td>
                  <td className="p-4 text-[0.86rem] text-success font-bold">✓</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                  <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">Data residency Location</td>
                  <td className="p-4 text-[0.86rem] text-text-secondary font-body">Shared cloud</td>
                  <td className="p-4 text-[0.86rem] bg-primary-wash/5 border-l border-r border-border text-text-primary">Mumbai (IN)</td>
                  <td className="p-4 text-[0.86rem] text-text-primary">Mumbai (IN)</td>
                  <td className="p-4 text-[0.86rem] text-text-primary">Dedicated Option</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
