'use client';

import React, { useState } from 'react';
import Button from './Button';
import Eyebrow from './Eyebrow';

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
    <section className="bg-transparent py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        <div className="w-full bg-bg-card border border-border rounded-xl p-8 md:p-14 shadow-lg">
          <div className="max-w-[560px] mx-auto text-center">
            <Eyebrow>Stay in the loop</Eyebrow>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.2rem)] font-heading font-extrabold mt-3 mb-2 text-text-primary">
              Tips for teams, once a month
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6 font-body">
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsInvalid(false);
                  }}
                  className={`flex-1 py-3 px-4 rounded-lg border font-body text-[0.95rem] bg-bg-surface text-text-primary transition-all duration-150 outline-none focus:border-primary focus:shadow-focus ${isInvalid ? 'border-error' : 'border-border'
                    }`}
                />
                <Button type="submit" variant="primary" className="!bg-primary hover:!bg-primary/90 active:!bg-primary/80 !text-white !shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 border-0">
                  Subscribe
                </Button>
              </form>
            ) : (
              <p className="text-primary font-heading font-bold text-[0.9rem] mt-3">
                ✓ You're subscribed — see you in your inbox!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
