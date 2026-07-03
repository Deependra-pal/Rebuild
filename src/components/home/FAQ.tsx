import React from 'react';
import FaqItem from '../shared/FaqItem';

export default function FAQ() {
  const faqs = [
    {
      q: 'Is Squeako really cheaper than Slack or Teams?',
      a: "Yes. Squeako's Growth plan is ₹99 per user per month. Comparable Slack and Microsoft 365 plans run from ₹250 to ₹750 — and bill in dollars without a GST invoice. Most teams save 60–70%.",
    },
    {
      q: 'Can clients and guests join my workspace?',
      a: 'Yes. Invite clients and guests into specific groups, so they only see the conversations you choose to share. Your internal channels stay private.',
    },
    {
      q: 'Where is my data stored?',
      a: "In Indian data centres, aligned with India's DPDP Act. You always know where your team's conversations live, and you get a GST invoice in INR.",
    },
    {
      q: 'Do I need a technical team to set it up?',
      a: 'No. Create a workspace and invite your team over email or WhatsApp in minutes. Most teams are up and running the same day.',
    },
    {
      q: 'Will you help us move from Slack or Teams?',
      a: "Yes. Our team helps you set up groups, invite everyone and get going. Book a switch call and we'll guide you through it.",
    },
    {
      q: 'How do I pay, and is there a lock-in?',
      a: 'Pay by UPI, net banking, debit or credit card — monthly or annually. No lock-in; upgrade, downgrade or cancel anytime.',
    },
  ];

  return (
    <div className="sec">
      <div className="wrap reveal">
        <div className="box box-lilac">
          <div className="sec-head">
            <span className="eyebrow">Questions, answered</span>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Frequently asked
            </h2>
          </div>
          <div className="max-w-[760px] mx-auto flex flex-col gap-[11px]">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
