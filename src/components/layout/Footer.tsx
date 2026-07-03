'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-bg-surface border-t border-border py-16 md:py-24 px-6 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full z-0 pointer-events-none opacity-[0.03] blur-[120px] bg-primary"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Tier 1: Links Directory Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-border/60">
          
          {/* Product Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-4">Product</h5>
            <div className="flex flex-col gap-2.5 text-[0.86rem] text-text-secondary">
              <Link href="/features" className="hover:text-text-primary transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-text-primary transition-colors">Pricing</Link>
              <Link href="/enterprise" className="hover:text-text-primary transition-colors">Enterprise</Link>
              <Link href="/templates" className="hover:text-text-primary transition-colors">Templates</Link>
              <Link href="/download" className="hover:text-text-primary transition-colors">Download apps</Link>
              <Link href="/integrations" className="hover:text-text-primary transition-colors">Integrations</Link>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-4">Solutions</h5>
            <div className="flex flex-col gap-2.5 text-[0.86rem] text-text-secondary">
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For Founders</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For Sales</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For Engineering</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For HR & Ops</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For Agencies</Link>
            </div>
          </div>

          {/* Use Cases Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-4">Use Cases</h5>
            <div className="flex flex-col gap-2.5 text-[0.86rem] text-text-secondary">
              <Link href="/solutions" className="hover:text-text-primary transition-colors">IT & Software</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">D2C & Retail</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">Fintech</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">Education</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">Logistics</Link>
            </div>
          </div>

          {/* Resources Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-4">Resources</h5>
            <div className="flex flex-col gap-2.5 text-[0.86rem] text-text-secondary">
              <Link href="/resources" className="hover:text-text-primary transition-colors">Blog & guides</Link>
              <Link href="/stories" className="hover:text-text-primary transition-colors">Customer stories</Link>
              <Link href="/roadmap" className="hover:text-text-primary transition-colors">What's new</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Help centre</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">API docs</Link>
            </div>
          </div>

          {/* Compare Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-4">Compare</h5>
            <div className="flex flex-col gap-2.5 text-[0.86rem] text-text-secondary">
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs Slack</Link>
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs MS Teams</Link>
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs Flock</Link>
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs Google Chat</Link>
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs Zoom</Link>
            </div>
          </div>

          {/* Company Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-4">Company</h5>
            <div className="flex flex-col gap-2.5 text-[0.86rem] text-text-secondary">
              <Link href="/about" className="hover:text-text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Contact</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Book a demo</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Careers</Link>
              <Link href="/security" className="hover:text-text-primary transition-colors">Security</Link>
            </div>
          </div>

        </div>

        {/* Tier 2: Localized Info & Fast Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 py-10 border-b border-border/60 items-center text-left">
          <div className="flex flex-col gap-2">
            <h5 className="font-heading font-extrabold text-[0.94rem] text-text-primary flex items-center gap-2">
              <span className="text-primary font-bold">✦</span>
              Request an AI summary
            </h5>
            <p className="text-[0.84rem] text-text-secondary leading-relaxed max-w-[480px] font-body">
              Learn how Squeako is improving context retention and reducing tool fatigue. Ask our assistant on ChatGPT, Claude or Cohere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between lg:justify-end w-full">
            <span className="font-heading font-bold text-[0.88rem] text-text-primary whitespace-nowrap">
              Get the latest Squeako insights
            </span>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2.5 w-full sm:w-auto">
              <input
                type="email"
                required
                placeholder="Business Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-bg-base border border-border focus:border-primary text-text-primary rounded-lg px-4 py-2 text-[0.84rem] focus:outline-none w-full sm:w-[190px] transition-colors duration-150 font-body"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-9 h-9 rounded-full bg-primary text-white hover:bg-primary-hover hover:scale-[1.03] active:scale-[0.97] grid place-items-center transition-all shrink-0 cursor-pointer shadow-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Tier 3: Giant Logo & Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 pt-10 text-left">
          {/* Giant decorative text logo */}
          <div className="flex items-center justify-start select-none">
            <div className="font-heading font-extrabold text-[5rem] md:text-[6.5rem] text-primary/10 tracking-[-0.04em] leading-none whitespace-nowrap">
              squeako
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {/* About */}
            <div className="flex flex-col gap-2">
              <span className="font-heading font-bold text-text-primary text-[0.88rem]">Who we are</span>
              <p className="text-[0.82rem] text-text-secondary leading-relaxed font-body">
                Squeako is an AI-native unified workspace designed and priced specifically for Indian teams, keeping chats, calls, task boards, and org charts aligned under one roof.
              </p>
            </div>

            {/* Social handles */}
            <div className="flex flex-col gap-2">
              <span className="font-heading font-bold text-text-primary text-[0.88rem]">Follow Squeako</span>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.82rem] font-semibold mt-1">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary hover:underline transition-colors">LinkedIn &rarr;</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary hover:underline transition-colors">YouTube &rarr;</a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary hover:underline transition-colors">X &rarr;</a>
              </div>
            </div>

            {/* Utility and Copy policies */}
            <div className="col-span-1 sm:col-span-2 pt-4 flex flex-col gap-3">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] font-semibold text-text-secondary border-t border-border/40 pt-6">
                <Link href="/terms" className="hover:text-text-primary hover:underline">Terms of Service</Link>
                <Link href="/privacy" className="hover:text-text-primary hover:underline">Privacy Policy</Link>
                <Link href="/security" className="hover:text-text-primary hover:underline">Security ↗</Link>
                <Link href="/" className="hover:text-text-primary hover:underline">Accessibility Statement</Link>
                <Link href="/" className="hover:text-text-primary hover:underline">System Status ↗</Link>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-2 text-text-muted text-[0.8rem] pt-1 font-body">
                <span>&copy; {new Date().getFullYear()} Squeako. All rights reserved.</span>
                <span className="flex items-center gap-1 font-medium">
                  Made in India 🇮🇳 &middot; A Probey Services product
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
