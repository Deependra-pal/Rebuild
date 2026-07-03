'use client';

import React from 'react';
import Eyebrow from '../shared/Eyebrow';
import FaqItem from '../shared/FaqItem';

export default function PricingFaq() {
  const faqs = [
    {
      question: 'Is there really a free plan?',
      answer: 'Yes — free forever for up to 10 members, with chat, calls, basic tasks and status. No credit card needed, no time limit.',
    },
    {
      question: 'What happens when I add or remove team members?',
      answer: "You are billed only for active members. Add teammates anytime and we prorate the billing; remove them and your next invoice credits the difference.",
    },
    {
      question: 'Do you offer an annual billing discount?',
      answer: 'Yes — annual billing effectively gives you two months free versus monthly. You can switch between options at any time.',
    },
    {
      question: 'Will Squeako provide a GST invoice?',
      answer: 'Always. Every payment comes with a GST-compliant tax invoice in INR, allowing your business to claim input tax credit.',
    },
  ];

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>Pricing questions</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="w-full max-w-[760px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
}
