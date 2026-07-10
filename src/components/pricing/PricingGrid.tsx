'use client';

import React, { useState } from 'react';
import Button from '../shared/Button';

export default function PricingGrid() {
  const [isAnnual, setIsAnnual] = useState(true);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Billing Switcher Pill */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="bg-bg-card border border-border p-1 rounded-full flex items-center justify-center gap-1.5 w-fit">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full font-heading font-semibold text-[0.82rem] transition-all cursor-pointer ${
                !isAnnual ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full font-heading font-semibold text-[0.82rem] transition-all cursor-pointer ${
                isAnnual ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Billed Annually
            </button>
          </div>
          <span className="bg-primary-wash text-primary font-heading font-bold text-[0.76rem] py-1 px-3.5 rounded-full">
            Save up to 20% with annual plans
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
          
          {/* Card 1: Free */}
          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-border-hover transition-all text-left">
            <div>
              <div className="font-heading font-extrabold text-[1.125rem] text-text-primary">Free</div>
              <p className="text-[0.82rem] text-text-secondary mt-1.5 mb-6 min-h-[38px] font-body leading-normal">
                For micro-teams getting started with communication.
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-heading font-extrabold text-[1.2rem] text-text-primary">₹</span>
                <span className="font-heading font-extrabold text-[2.4rem] leading-none text-text-primary">0</span>
              </div>
              <div className="text-[0.76rem] text-text-secondary mb-6 font-body">
                Free forever &middot; up to 10 users
              </div>
              
              <ul className="flex flex-col gap-3.5 border-t border-border/60 pt-5">
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Up to 10 members
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  1:1 & group chat channels
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Audio & video (up to 8)
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Basic task trackers
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  90-day message history
                </li>
              </ul>
            </div>
            
            <Button href="/contact" variant="ghost" className="w-full mt-8">
              Start free
            </Button>
          </div>

          {/* Card 2: Growth */}
          <div className="bg-bg-surface border-2 border-primary rounded-xl p-6 flex flex-col justify-between relative shadow-lg hover:border-primary/95 transition-all text-left">
            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-primary text-white font-heading font-extrabold text-[0.66rem] tracking-wider py-1 px-3 rounded-full whitespace-nowrap">
              MOST POPULAR
            </span>
            <div>
              <div className="font-heading font-extrabold text-[1.125rem] text-text-primary">Growth</div>
              <p className="text-[0.82rem] text-text-secondary mt-1.5 mb-6 min-h-[38px] font-body leading-normal">
                For high-speed startups & growing SMBs.
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-heading font-extrabold text-[1.2rem] text-text-primary">₹</span>
                <span className="font-heading font-extrabold text-[2.4rem] leading-none text-text-primary">{isAnnual ? '99' : '129'}</span>
                <span className="text-[0.76rem] text-text-secondary font-medium ml-1">/ user / mo</span>
              </div>
              <div className="text-[0.76rem] text-text-secondary mb-6 font-body">
                {isAnnual ? 'Billed annually' : 'Billed monthly'}
              </div>

              <ul className="flex flex-col gap-3.5 border-t border-border/60 pt-5">
                <li className="font-heading font-extrabold text-[0.66rem] tracking-wider text-text-muted uppercase mb-1">
                  Everything in Free, plus
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Unlimited history & members
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Group video up to 50
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Recurring Standup meetings
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Client guest access
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  50 GB storage & IST support
                </li>
              </ul>
            </div>
            
            <Button href="/contact" variant="primary" className="w-full mt-8 !bg-primary hover:!bg-primary-hover active:!bg-primary-active !text-white !shadow-sm">
              Start free trial
            </Button>
          </div>

          {/* Card 3: Business */}
          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-border-hover transition-all text-left">
            <div>
              <div className="font-heading font-extrabold text-[1.125rem] text-text-primary">Business</div>
              <p className="text-[0.82rem] text-text-secondary mt-1.5 mb-6 min-h-[38px] font-body leading-normal">
                For established operations needing control.
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-heading font-extrabold text-[1.2rem] text-text-primary">₹</span>
                <span className="font-heading font-extrabold text-[2.4rem] leading-none text-text-primary">{isAnnual ? '199' : '249'}</span>
                <span className="text-[0.76rem] text-text-secondary font-medium ml-1">/ user / mo</span>
              </div>
              <div className="text-[0.76rem] text-text-secondary mb-6 font-body">
                {isAnnual ? 'Billed annually' : 'Billed monthly'}
              </div>

              <ul className="flex flex-col gap-3.5 border-t border-border/60 pt-5">
                <li className="font-heading font-extrabold text-[0.66rem] tracking-wider text-text-muted uppercase mb-1">
                  Everything in Growth, plus
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Group video up to 200
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Recording & transcripts
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Advanced admin & role rules
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Compliance & audit logs
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  250 GB storage & WhatsApp support
                </li>
              </ul>
            </div>
            
            <Button href="/contact" variant="ghost" className="w-full mt-8">
              Choose Business
            </Button>
          </div>

          {/* Card 4: Enterprise */}
          <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-border-hover transition-all text-left">
            <div>
              <div className="font-heading font-extrabold text-[1.125rem] text-text-primary">Enterprise</div>
              <p className="text-[0.82rem] text-text-secondary mt-1.5 mb-6 min-h-[38px] font-body leading-normal">
                For scale operations with custom policies.
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-heading font-extrabold text-[2rem] leading-none text-text-primary">Custom</span>
              </div>
              <div className="text-[0.76rem] text-text-secondary mb-6 font-body">
                Tailored contracts
              </div>

              <ul className="flex flex-col gap-3.5 border-t border-border/60 pt-5">
                <li className="font-heading font-extrabold text-[0.66rem] tracking-wider text-text-muted uppercase mb-1">
                  Everything in Business, plus
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  SAML/OIDC SSO & SCIM provision
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Dedicated Technical Account Mgr
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  99.9% uptime SLA contracts
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  Custom local residency options
                </li>
                <li className="flex gap-2.5 items-start text-[0.84rem] text-text-primary">
                  <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                  24×7 priority phone support
                </li>
              </ul>
            </div>
            
            <Button href="/contact" variant="ghost" className="w-full mt-8">
              Talk to Sales
            </Button>
          </div>

        </div>

        <p className="text-center text-[0.82rem] text-text-secondary mt-10 leading-normal font-body">
          Prices are per user per month, excluding 18% GST. UPI, net banking, debit/credit cards accepted.
        </p>

      </div>
    </section>
  );
}
