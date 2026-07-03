'use client';

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

export default function FaqItem({ question, answer, className = '' }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-bg-elevated border transition-all duration-200 rounded-xl overflow-hidden hover:bg-bg-hover ${
        isOpen ? 'border-primary shadow-sm bg-bg-hover' : 'border-border'
      } ${className}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-transparent border-0 py-4 px-5 cursor-pointer flex justify-between items-center gap-4 font-heading font-bold text-[0.96rem] text-text-primary focus:outline-none"
      >
        <span>{question}</span>
        <span
          className={`w-6 h-6 rounded flex items-center justify-center font-bold text-[1.1rem] shrink-0 transition-all duration-300 ${
            isOpen ? 'rotate-180 bg-primary text-white' : 'bg-bg-surface border border-border/40 text-text-secondary'
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-text-secondary text-[0.88rem] leading-relaxed font-body">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
