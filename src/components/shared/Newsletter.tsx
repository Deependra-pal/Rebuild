'use client';

import React, { useState } from 'react';
import { Eyebrow } from './Section';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(cleanEmail)) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative px-6 md:px-8 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 reveal">
        <div className="sq-panel p-8 md:p-14">
          <div className="max-w-[560px] mx-auto text-center">
            <Eyebrow>Stay in the loop</Eyebrow>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.2rem)] font-heading font-extrabold tracking-[-0.03em] mt-4 mb-2 text-text-primary">
              Tips for teams, once a month
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Practical playbooks and product updates, with no spam. Unsubscribe anytime.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-5" noValidate>
                <input
                  type="email"
                  name="news"
                  placeholder="you@company.com"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setIsInvalid(false); }}
                  className="flex-1 py-3 px-4 rounded-xl text-[0.95rem] text-text-primary transition-all duration-150 outline-none focus:shadow-focus"
                  style={{ background: 'var(--color-bg-surface)', border: `1px solid ${isInvalid ? 'var(--color-error)' : 'var(--color-border)'}` }}
                />
                <button type="submit" className="sq-btn sq-btn-primary sq-btn-md">
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-primary font-heading font-bold text-[0.9rem] mt-3">
                ✓ You&apos;re subscribed — see you in your inbox!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
