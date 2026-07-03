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

  const [copiedText, setCopiedText] = useState(false);

  const handleAiClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    const promptText = "Explain how Squeako is improving team productivity and collaboration.";
    navigator.clipboard.writeText(promptText)
      .then(() => {
        setCopiedText(true);
        setTimeout(() => setCopiedText(false), 2000);
        window.open(url, '_blank');
      })
      .catch((err) => {
        console.error("Failed to copy prompt: ", err);
        window.open(url, '_blank');
      });
  };

  return (
    <footer className="bg-transparent pt-0 pb-6 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full z-0 pointer-events-none opacity-[0.03] blur-[120px] bg-primary"></div>

      <div className="max-w-[1200px] mx-auto bg-bg-surface border border-border/80 rounded-[24px] py-6 px-6 md:py-8 md:px-10 relative z-10">

        {/* Tier 1: Links Directory Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pb-6 border-b border-border/60">

          {/* Product Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-3">Product</h5>
            <div className="flex flex-col gap-2 text-[0.84rem] text-text-secondary">
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
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-3">Solutions</h5>
            <div className="flex flex-col gap-2 text-[0.84rem] text-text-secondary">
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For Founders</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For Sales</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For Engineering</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For HR & Ops</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">For Agencies</Link>
            </div>
          </div>

          {/* Use Cases Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-3">Use Cases</h5>
            <div className="flex flex-col gap-2 text-[0.84rem] text-text-secondary">
              <Link href="/solutions" className="hover:text-text-primary transition-colors">IT & Software</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">D2C & Retail</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">Fintech</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">Education</Link>
              <Link href="/solutions" className="hover:text-text-primary transition-colors">Logistics</Link>
            </div>
          </div>

          {/* Resources Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-3">Resources</h5>
            <div className="flex flex-col gap-2 text-[0.84rem] text-text-secondary">
              <Link href="/resources" className="hover:text-text-primary transition-colors">Blog & guides</Link>
              <Link href="/stories" className="hover:text-text-primary transition-colors">Customer stories</Link>
              <Link href="/roadmap" className="hover:text-text-primary transition-colors">What's new</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Help centre</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">API docs</Link>
            </div>
          </div>

          {/* Compare Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-3">Compare</h5>
            <div className="flex flex-col gap-2 text-[0.84rem] text-text-secondary">
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs Slack</Link>
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs MS Teams</Link>
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs Flock</Link>
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs Google Chat</Link>
              <Link href="/compare" className="hover:text-text-primary transition-colors">vs Zoom</Link>
            </div>
          </div>

          {/* Company Col */}
          <div className="flex flex-col text-left">
            <h5 className="font-heading font-extrabold text-[0.8rem] tracking-[0.04em] uppercase text-text-primary mb-3">Company</h5>
            <div className="flex flex-col gap-2 text-[0.84rem] text-text-secondary">
              <Link href="/about" className="hover:text-text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Contact</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Book a demo</Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">Careers</Link>
              <Link href="/security" className="hover:text-text-primary transition-colors">Security</Link>
            </div>
          </div>

        </div>

        {/* Tier 2: Summaries & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 py-6 border-b border-border/60 text-left items-start">
          {/* Left summary & icons info */}
          <div className="flex flex-col gap-2">
            <h5 className="font-heading font-extrabold text-[0.92rem] text-text-primary flex items-center gap-2">
              <span className="text-primary font-bold">✨</span>
              Request an AI summary
            </h5>
            <p className="text-[0.8rem] text-text-secondary leading-relaxed max-w-[480px] font-body">
              Learn more about how Squeako is improving team productivity and collaboration.
            </p>
            {/* Small AI model tool icon links inline */}
            {/* Small AI model tool icon links inline */}
            <div className="relative flex items-center gap-4 mt-2">
              <button
                type="button"
                onClick={(e) => handleAiClick(e, "https://chatgpt.com")}
                title="Copy prompt & Ask ChatGPT"
                className="transition-all hover:scale-110 active:scale-95 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-[22px] h-[22px] text-text-muted hover:text-[#10a37f] transition-colors duration-200"
                >
                  <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.202.162l-3.13 1.782a.53.53 0 0 0-.267.456zM8 8.52a.52.52 0 1 0 0-1.04.52.52 0 0 0 0 1.04" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => handleAiClick(e, "https://claude.ai")}
                title="Copy prompt & Ask Claude"
                className="transition-all hover:scale-110 active:scale-95 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-[22px] h-[22px] text-text-muted hover:text-[#d97757] transition-colors duration-200"
                >
                  <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212-3.003" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => handleAiClick(e, "https://cohere.com")}
                title="Copy prompt & Ask Cohere"
                className="transition-all hover:scale-110 active:scale-95 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[22px] h-[22px] text-text-muted hover:text-[#3B82F6] transition-colors duration-200"
                >
                  <circle cx="8" cy="8" r="2.5" />
                  <circle cx="16" cy="8" r="2.5" />
                  <circle cx="12" cy="15" r="3.5" />
                  <line x1="8" y1="8" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="16" y1="8" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              {copiedText && (
                <span className="absolute -top-7 left-0 bg-primary text-white text-[0.72rem] px-2 py-0.5 rounded shadow-md font-medium z-30 animate-pulse whitespace-nowrap">
                  ✓ Prompt copied to clipboard!
                </span>
              )}
            </div>

            {/* Grayscale Compliance Badges directly below */}
            <div className="flex items-center gap-2 mt-3">
              <img
                src="/trusted-icons/Mask-group-5.webp"
                alt="SOC 2"
                className="w-7 h-7 object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
              />
              <img
                src="/trusted-icons/Mask-group-6.webp"
                alt="VPAT Compliance"
                className="w-7 h-7 object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
              />
              <img
                src="/trusted-icons/Mask-group.webp"
                alt="DPDP Act"
                className="w-7 h-7 object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
              />
              <img
                src="/trusted-icons/Mask-group-1.webp"
                alt="GDPR"
                className="w-7 h-7 object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Insights newsletter form */}
          <div className="flex flex-col gap-2.5 lg:items-end w-full">
            <span className="font-heading font-bold text-[0.88rem] text-text-primary whitespace-nowrap lg:text-right">
              Get the latest Squeako Insights
            </span>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full lg:max-w-[280px]">
              <input
                type="email"
                required
                placeholder="Business Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/20 focus:border-b-[#0A84FF] text-text-primary rounded-none px-0 py-2 text-[0.82rem] focus:outline-none w-full transition-colors duration-150 font-body"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-9 h-9 rounded-full bg-primary text-white hover:!bg-primary-hover hover:!text-white hover:scale-[1.03] active:scale-[0.97] grid place-items-center transition-all shrink-0 cursor-pointer shadow-sm"
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 pt-6 text-left items-end">
          {/* Giant decorative wordmark logo */}
          <div className="flex items-center justify-start select-none">
            <div className="font-heading font-extrabold text-[3.8rem] md:text-[4.5rem] text-primary/10 tracking-[-0.04em] leading-none whitespace-nowrap">
              squeako
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {/* Who we are */}
            <div className="flex flex-col gap-2">
              <span className="font-heading font-bold text-text-primary text-[0.84rem] tracking-[0.02em] uppercase">Who we are</span>
              <p className="text-[0.76rem] text-text-secondary leading-relaxed font-body">
                Squeako is an AI-native workspace built and priced for Indian startups and SMEs, bringing your chat, calls, meetings, tasks, and org chart under one roof.
              </p>
            </div>

            {/* Follow us */}
            <div className="flex flex-col gap-2">
              <span className="font-heading font-bold text-text-primary text-[0.84rem] tracking-[0.02em] uppercase">Follow us</span>
              <div className="flex flex-col gap-1.5 text-[0.78rem] font-semibold">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">LinkedIn &rarr;</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">YouTube &rarr;</a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">X &rarr;</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & policies inline */}
        <div className="border-t border-border/40 mt-6 pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left">
          <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-text-secondary text-[0.78rem] font-medium font-body">
            <Link href="/terms" className="hover:text-text-primary">Terms</Link>
            <span>/</span>
            <Link href="/privacy" className="hover:text-text-primary">Privacy</Link>
            <span>/</span>
            <Link href="/security" className="hover:text-text-primary">Security</Link>
            <span>/</span>
            <Link href="/accessibility" className="hover:text-text-primary">Accessibility</Link>
            <span>/</span>
            <Link href="/status" className="hover:text-text-primary">Status</Link>
          </div>

          <div className="flex flex-col gap-0.5 text-text-muted text-[0.76rem] font-body sm:text-right">
            <span>&copy; {new Date().getFullYear()} Squeako. All rights reserved.</span>
            <span>Made in India &mdash; A Probey Services product</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
