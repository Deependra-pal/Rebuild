'use client';

import React from 'react';
import TemplateCard from '../shared/TemplateCard';

export default function TemplatesGrid() {
  const templates = [
    {
      title: 'Sales pipeline',
      description: 'Preconfigured pipeline logs, deal channels, client rooms, and wins announcement feeds.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-2-2-4 4" />
        </svg>
      ),
    },
    {
      title: 'Customer support desk',
      description: 'Guest channels with client domain controls, escalation updates, and shared logs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      title: 'Agency client spaces',
      description: 'One secure guest channel configured per account alongside internal project updates.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      ),
    },
    {
      title: 'Engineering sprints',
      description: 'Asynchronous standup logs, incident feeds, code-review tasks, and deploy notifications.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: 'HR & team onboarding',
      description: 'New-hire checklists, live company reporting chart profiles, and general info folders.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'Startup HQ channels',
      description: 'All basic boards and feeds: General logs, Random chat, Operations updates, and company goals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a6 6 0 0 1 12 0v1" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {templates.map((template, idx) => (
            <TemplateCard
              key={idx}
              icon={template.icon}
              title={template.title}
              description={template.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
