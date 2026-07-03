'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import FaqItem from '../shared/FaqItem';

export default function FaqTeaser() {
  const faqs = [
    {
      q: 'Is Squeako really cheaper than Slack or Teams?',
      a: 'Yes. Squeako\'s Growth plan is ₹99 per user per month. Comparable Slack and Microsoft 365 plans run from ₹250 to ₹750 — and bill in dollars without a GST invoice. Most teams save 60–70%.',
    },
    {
      q: 'Can clients and guests join my workspace?',
      a: 'Yes. Invite clients and guests into specific groups, so they only see the conversations you choose to share. Your internal channels stay private.',
    },
    {
      q: 'Where is my data stored?',
      a: 'In Indian data centres, aligned with India\'s DPDP Act. You always know where your team\'s conversations live, and you get a GST invoice in INR.',
    },
    {
      q: 'Do I need a technical team to set it up?',
      a: 'No. Create a workspace and invite your team over email or WhatsApp in minutes. Most teams are up and running the same day.',
    },
    {
      q: 'Will you help us move from Slack or Teams?',
      a: 'Yes. Our team helps you set up groups, invite everyone and get going. Book a switch call and we\'ll guide you through it.',
    },
    {
      q: 'How do I pay, and is there a lock-in?',
      a: 'Pay by UPI, net banking, debit or credit card — monthly or annually. No lock-in; upgrade, downgrade or cancel anytime.',
    },
  ];

  return (
    <section className="bg-bg-card py-20 md:py-32 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>Questions, answered</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Frequently asked
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-[760px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

      </div>
    </section>
  );
}
