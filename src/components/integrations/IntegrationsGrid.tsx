'use client';

import React from 'react';
import Button from '../shared/Button';

export default function IntegrationsGrid() {
  const integrations = [
    { name: 'Google Calendar', desc: 'Meetings & reminders', icon: 'G' },
    { name: 'Google Drive', desc: 'Share files inline', icon: 'D' },
    { name: 'Gmail', desc: 'Turn mail into tasks', icon: 'M' },
    { name: 'Zapier', desc: 'Automate anything', icon: 'Z' },
    { name: 'Trello', desc: 'Card updates in chat', icon: 'T' },
    { name: 'Jira Software', desc: 'Issue notifications', icon: 'J' },
    { name: 'GitHub', desc: 'PRs & commit tracks', icon: '🐙' },
    { name: 'Razorpay', desc: 'Payment alert logs', icon: 'R' },
    { name: 'Asana boards', desc: 'Task database sync', icon: 'A' },
    { name: 'Salesforce CRM', desc: 'Pipeline deal logs', icon: 'S' },
    { name: 'Notion Workspace', desc: 'Wikis & doc links', icon: 'N' },
    { name: 'Webhooks & API', desc: 'Configure custom feeds', icon: '+' },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 w-full">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border rounded-xl p-5 flex gap-4 items-start transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover text-left"
            >
              <span className="w-10 h-10 rounded bg-primary-wash text-primary grid place-items-center shrink-0 text-[1.1rem] font-bold font-heading">
                {item.icon}
              </span>
              <div>
                <b className="font-heading font-extrabold text-[0.94rem] block mb-0.5 text-text-primary">{item.name}</b>
                <span className="text-[0.78rem] text-text-secondary font-body block">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-4">
          <Button href="/contact" variant="ghost" className="group">
            Request an integration
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Button>
        </div>

      </div>
    </section>
  );
}
