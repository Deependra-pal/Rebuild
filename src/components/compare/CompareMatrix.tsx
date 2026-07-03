'use client';

import React from 'react';

export default function CompareMatrix() {
  const rows = [
    {
      feature: 'Starting price (per user/mo)',
      sq: '₹99 (INR)',
      slack: '~$8.75 (~₹730)',
      teams: '~$6.00 (~₹500)',
      google: '~$7.20 (~₹600)',
      isPrice: true,
    },
    {
      feature: 'Chat & group messaging',
      sq: <span className="text-success font-bold">✓</span>,
      slack: <span className="text-success font-bold">✓</span>,
      teams: <span className="text-success font-bold">✓</span>,
      google: <span className="text-success font-bold">✓</span>,
    },
    {
      feature: 'Audio & video calls included',
      sq: <span className="text-success font-bold">✓</span>,
      slack: <span className="text-text-muted text-[0.82rem]">Huddles only</span>,
      teams: <span className="text-success font-bold">✓</span>,
      google: <span className="text-success font-bold">✓</span>,
    },
    {
      feature: 'Recurring meetings & tasks',
      sq: <span className="text-success font-bold">✓</span>,
      slack: <span className="text-text-muted text-[0.82rem]">Requires add-on</span>,
      teams: <span className="text-success font-bold">✓</span>,
      google: <span className="text-text-muted text-[0.82rem]">Basic Tasks</span>,
    },
    {
      feature: 'Built-in task boards (Kanban)',
      sq: <span className="text-success font-bold">✓</span>,
      slack: <span className="text-text-muted text-[0.82rem]">—</span>,
      teams: <span className="text-text-muted text-[0.82rem]">Planner app</span>,
      google: <span className="text-text-muted text-[0.82rem]">—</span>,
    },
    {
      feature: 'Live Org hierarchy tree',
      sq: <span className="text-success font-bold">✓</span>,
      slack: <span className="text-text-muted text-[0.82rem]">—</span>,
      teams: <span className="text-success font-bold">✓</span>,
      google: <span className="text-text-muted text-[0.82rem]">—</span>,
    },
    {
      feature: 'Local data residency (India)',
      sq: <span className="text-success font-bold">✓</span>,
      slack: <span className="text-text-muted text-[0.82rem]">—</span>,
      teams: <span className="text-text-muted text-[0.82rem]">Higher tiers</span>,
      google: <span className="text-text-muted text-[0.82rem]">Enterprise only</span>,
    },
    {
      feature: 'Direct GST invoice in INR',
      sq: <span className="text-success font-bold">✓</span>,
      slack: <span className="text-text-muted text-[0.82rem]">Reseller only</span>,
      teams: <span className="text-text-muted text-[0.82rem]">Reseller only</span>,
      google: <span className="text-text-muted text-[0.82rem]">Reseller only</span>,
    },
    {
      feature: 'IST Chat & WhatsApp support',
      sq: <span className="text-success font-bold">✓</span>,
      slack: <span className="text-text-muted text-[0.82rem]">—</span>,
      teams: <span className="text-text-muted text-[0.82rem]">—</span>,
      google: <span className="text-text-muted text-[0.82rem]">—</span>,
    },
  ];

  return (
    <section className="bg-bg-base py-16 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto reveal">
        <div className="bg-bg-card border border-border rounded-xl p-6 lg:p-10 shadow-lg relative overflow-hidden">
          
          {/* Table Container */}
          <div className="overflow-x-auto rounded-lg border border-border/80">
            <table className="w-full border-collapse min-w-[760px] text-left">
              <thead>
                <tr className="bg-bg-surface border-b border-border">
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-text-primary">
                    Core Capability
                  </th>
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-primary bg-primary-wash/10 border-l border-r border-border">
                    Squeako
                  </th>
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-text-secondary">
                    Slack
                  </th>
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-text-secondary">
                    MS Teams
                  </th>
                  <th className="p-4 text-[0.84rem] font-heading font-extrabold uppercase tracking-wider text-text-secondary">
                    Google Chat
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-border/60 hover:bg-hover-overlay transition-colors">
                    <td className="p-4 text-[0.88rem] font-heading font-bold text-text-primary">
                      {row.feature}
                    </td>
                    <td className={`p-4 text-[0.88rem] bg-primary-wash/5 border-l border-r border-border text-text-primary ${
                      row.isPrice ? 'font-extrabold text-success' : ''
                    }`}>
                      {row.sq}
                    </td>
                    <td className="p-4 text-[0.86rem] text-text-secondary font-body">
                      {row.slack}
                    </td>
                    <td className="p-4 text-[0.86rem] text-text-secondary font-body">
                      {row.teams}
                    </td>
                    <td className="p-4 text-[0.86rem] text-text-secondary font-body">
                      {row.google}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-left lg:text-center text-[0.78rem] text-text-secondary mt-6 leading-relaxed max-w-[900px] mx-auto font-body">
            *Competitor pricing references published lists for standard cloud tiers billed in USD/INR, exclusive of local GST. Feature parameters represent standard user plan access levels and may change periodically.
          </p>
        </div>
      </div>
    </section>
  );
}
