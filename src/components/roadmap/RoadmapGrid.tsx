'use client';

import React from 'react';

export default function RoadmapGrid() {
  const shipped = [
    { title: 'Recurring meetings huddles', desc: 'Schedule once, remind every time with push alerts.' },
    { title: "On-break presence tags", desc: "Let your team know you are away with customizable tags." },
    { title: 'Android & iOS native apps', desc: 'Sovereign experience across any phone or device.' },
    { title: 'Guest access for client domains', desc: 'Share project logs only with who you choose.' },
  ];

  const inProgress = [
    { title: 'AI meeting summaries', desc: 'Auto-summaries and follow-ups generated after calls.' },
    { title: 'Advanced administrative logs', desc: '中央 logs and data management reviews for compliance.' },
    { title: 'Google Calendar huddles', desc: 'Two-way calendar syncing with channels and tasks.' },
  ];

  const planned = [
    { title: 'Workflow actions automation', desc: 'Trigger customized updates and alerts across teams.' },
    { title: 'SCIM directory syncs', desc: 'Automate user setups for larger enterprises.' },
    { title: 'Custom UI color palettes', desc: 'Customize your workspace theme parameters.' },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full">
          
          {/* Shipped Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-extrabold text-[1.1rem] mb-2 flex items-center gap-2 text-text-primary text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse-custom"></span>Shipped
            </h4>
            <div className="flex flex-col gap-4">
              {shipped.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-all duration-200 text-left"
                >
                  <b className="font-heading font-extrabold text-[0.92rem] block mb-1 text-text-primary">{item.title}</b>
                  <span className="text-[0.78rem] text-text-secondary font-body block leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* In Progress Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-extrabold text-[1.1rem] mb-2 flex items-center gap-2 text-text-primary text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-warning"></span>In Progress
            </h4>
            <div className="flex flex-col gap-4">
              {inProgress.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-all duration-200 text-left"
                >
                  <b className="font-heading font-extrabold text-[0.92rem] block mb-1 text-text-primary">{item.title}</b>
                  <span className="text-[0.78rem] text-text-secondary font-body block leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-extrabold text-[1.1rem] mb-2 flex items-center gap-2 text-text-primary text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>Planned
            </h4>
            <div className="flex flex-col gap-4">
              {planned.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-all duration-200 text-left"
                >
                  <b className="font-heading font-extrabold text-[0.92rem] block mb-1 text-text-primary">{item.title}</b>
                  <span className="text-[0.78rem] text-text-secondary font-body block leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
