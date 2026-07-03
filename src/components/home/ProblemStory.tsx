'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function ProblemStory() {
  const legacyStack = [
    { name: 'Chat App', price: '₹250/mo', icon: '💬' },
    { name: 'Video Meetings', price: '₹200/mo', icon: '📹' },
    { name: 'Task Tracker', price: '₹180/mo', icon: '✅' },
    { name: 'Calling Add-on', price: '₹120/mo', icon: '📞' },
  ];

  return (
    <section className="bg-bg-base py-20 md:py-32 px-6 md:px-8 relative border-b border-border overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 pointer-events-none opacity-[0.06] blur-[120px] bg-primary"></div>

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Problem Narrative */}
        <div className="flex flex-col text-left">
          <Eyebrow>The hidden tool tax</Eyebrow>
          
          <h2 className="font-heading font-extrabold text-[clamp(1.8rem,3.8vw,2.6rem)] leading-[1.15] tracking-[-0.02em] text-text-primary mt-4 mb-6">
            You're paying a tax just to talk to your own team.
          </h2>

          <p className="font-body text-[1.08rem] text-text-secondary leading-relaxed mb-8">
            Running a business in India shouldn't require managing an expensive, fragmented stack of foreign software. Every month, you pay multiple bills, keep track of several logins, and face compliance issues.
          </p>

          {/* Core Pain Points List */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <span className="w-6.5 h-6.5 rounded-full bg-error/10 text-error text-[0.8rem] font-bold grid place-items-center shrink-0">✕</span>
              <div>
                <h4 className="font-heading text-[0.96rem] font-bold text-text-primary">Fragmented Workspaces</h4>
                <p className="text-text-secondary text-[0.88rem] mt-1 leading-relaxed">
                  Chatting on one app, conducting video calls on another, and tracking tasks somewhere else. Context gets lost in the gaps.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-6.5 h-6.5 rounded-full bg-error/10 text-error text-[0.8rem] font-bold grid place-items-center shrink-0">✕</span>
              <div>
                <h4 className="font-heading text-[0.96rem] font-bold text-text-primary">Billing & GST Friction</h4>
                <p className="text-text-secondary text-[0.88rem] mt-1 leading-relaxed">
                  Five different subscriptions billed in USD, subject to bank card transaction fees, with zero local GST-compliant invoices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-6.5 h-6.5 rounded-full bg-error/10 text-error text-[0.8rem] font-bold grid place-items-center shrink-0">✕</span>
              <div>
                <h4 className="font-heading text-[0.96rem] font-bold text-text-primary">Compliance Risks</h4>
                <p className="text-text-secondary text-[0.88rem] mt-1 leading-relaxed">
                  Employee data resides on overseas servers, creating legal and data privacy risks under India's DPDP Act.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Stack Mockup */}
        <div className="flex flex-col gap-6">
          {/* Legacy Card (The Burden) */}
          <div className="bg-bg-surface border border-border rounded-xl p-6 shadow-md relative">
            <span className="absolute top-4 right-4 text-[0.68rem] font-bold text-error bg-error/10 border border-error/20 py-1 px-3 rounded-full uppercase tracking-wider">
              Legacy Stack
            </span>
            <h4 className="font-heading text-[0.92rem] font-bold text-text-secondary mb-4">Fragmented Tools (Per User/Mo)</h4>
            
            <div className="flex flex-col gap-2.5">
              {legacyStack.map((tool) => (
                <div key={tool.name} className="flex justify-between items-center py-2 border-b border-border/40 last:border-0">
                  <span className="flex items-center gap-2.5 text-[0.88rem] text-text-primary font-medium">
                    <span className="text-[1.05rem]">{tool.icon}</span>
                    {tool.name}
                  </span>
                  <span className="font-heading text-[0.88rem] text-text-secondary font-semibold">{tool.price}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 mt-2 border-t border-border font-heading">
              <span className="text-[0.84rem] text-text-muted font-bold">Total Stack Cost</span>
              <span className="text-[1.125rem] text-text-secondary font-extrabold line-through decoration-error decoration-2">₹750+/mo</span>
            </div>
          </div>

          {/* Squeako Card (The Solution) */}
          <div className="bg-bg-card border-2 border-primary rounded-xl p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-primary-wash/50 blur-[40px] pointer-events-none"></div>
            <span className="absolute top-4 right-4 text-[0.68rem] font-bold text-primary bg-primary-wash border border-primary/20 py-1 px-3 rounded-full uppercase tracking-wider">
              Squeako Suite
            </span>
            <h4 className="font-heading text-[0.92rem] font-bold text-primary mb-4">Unified Workspace (Per User/Mo)</h4>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-[0.88rem] text-text-primary font-medium">
                <span className="text-success font-bold">✓</span>
                All-in-one Chat, Calls, Tasks & Org Chart
              </div>
              <div className="flex items-center gap-2.5 text-[0.88rem] text-text-primary font-medium">
                <span className="text-success font-bold">✓</span>
                100% Indian Data Center Residency
              </div>
              <div className="flex items-center gap-2.5 text-[0.88rem] text-text-primary font-medium">
                <span className="text-success font-bold">✓</span>
                INR Billing with GST-compliant Invoices
              </div>
            </div>

            <div className="flex justify-between items-center pt-5 mt-4 border-t border-border font-heading">
              <span className="text-[0.84rem] text-text-primary font-bold">Squeako Flat Rate</span>
              <div className="flex items-baseline gap-1">
                <span className="text-[1.65rem] text-primary font-black">₹99</span>
                <span className="text-[0.78rem] text-text-secondary">/mo</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
