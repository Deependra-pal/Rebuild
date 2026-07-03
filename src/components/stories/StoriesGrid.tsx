'use client';

import React from 'react';

export default function StoriesGrid() {
  const stories = [
    {
      metric: '₹38k → ₹6k / mo',
      quote: '"Three tools became one. The org chart made onboarding far easier, and we cut our monthly software bill by over 80%."',
      avText: 'AS',
      name: 'Aarav Shah',
      role: 'Founder, Kettle · Bengaluru',
    },
    {
      metric: '1 day to roll out',
      quote: '"Our field staff actually use it because the mobile app is genuinely good. Calls, meetings and chat in one place changed how we work."',
      avText: 'PM',
      name: 'Priya Menon',
      role: 'Ops Lead, Routely · Pune',
    },
    {
      metric: '60% fewer tools',
      quote: '"Data in India made the compliance conversation easy for a fintech. WhatsApp support during IST hours is a small thing that matters."',
      avText: 'RG',
      name: 'Rahul Gupta',
      role: 'COO, Finbar · Gurugram',
    },
    {
      metric: '12 hrs/wk saved',
      quote: '"No more pasting meeting links into chat or chasing people for updates. Recurring meetings with reminders run themselves."',
      avText: 'VK',
      name: 'Vikram K.',
      role: 'Founder, Saanjh · Jaipur',
    },
    {
      metric: '3x faster onboarding',
      quote: '"New joiners learn the team from the org chart on day one. They know who to ping without asking around."',
      avText: 'NS',
      name: 'Neha S.',
      role: 'HR Lead, Nimbus HR · Noida',
    },
    {
      metric: '100% client trust',
      quote: '"Client rooms with guest access changed how we work with customers. They only see what we choose to share."',
      avText: 'TM',
      name: 'Tushar M.',
      role: 'Lead, Bytecrate · Hyderabad',
    },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hover text-left"
            >
              <div>
                <div className="font-heading font-extrabold text-[1.35rem] text-primary mb-3 leading-[1.1] w-fit">
                  {story.metric}
                </div>
                <p className="text-[0.92rem] text-text-secondary leading-relaxed font-body italic mb-6">
                  {story.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-9 h-9 rounded-full bg-primary-wash text-primary flex items-center justify-center font-heading font-bold text-[0.76rem] shrink-0">
                  {story.avText}
                </div>
                <div>
                  <b className="block font-heading font-bold text-[0.84rem] text-text-primary leading-snug">{story.name}</b>
                  <span className="text-[0.74rem] text-text-secondary font-body block mt-0.5">{story.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
