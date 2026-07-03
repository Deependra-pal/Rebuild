'use client';

import React, { useEffect, useRef } from 'react';
import Button from '../shared/Button';
import Eyebrow from '../shared/Eyebrow';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text elements entry
      tl.fromTo('.hero-fade-in',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
        0.2
      );

      // Product console entry
      tl.fromTo(consoleRef.current,
        { scale: 0.96, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
        0.4
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="bg-bg-base relative pt-20 pb-28 md:pt-28 md:pb-36 px-6 md:px-8 overflow-hidden border-b border-border">
      {/* Background Radial Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full z-0 pointer-events-none opacity-20 blur-[130px] bg-gradient-to-r from-primary to-accent"></div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Localization trust badge */}
        <div className="hero-fade-in opacity-0 mb-6">
          <span className="inline-flex items-center gap-2 border border-primary/20 bg-primary-wash text-primary font-semibold text-[0.82rem] py-1.5 px-4.5 rounded-full font-heading">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-custom"></span>
            100% Data Residency in India &middot; GST Billed in INR
          </span>
        </div>

        {/* Display Title */}
        <h1 className="hero-fade-in opacity-0 font-heading font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.03em] text-text-primary max-w-[960px] mb-6">
          Team collaboration built for speed, <span className="text-primary font-semibold">priced for growth.</span>
        </h1>

        {/* Supportive Copy */}
        <p className="hero-fade-in opacity-0 font-body text-[1.15rem] text-text-secondary leading-relaxed max-w-[680px] mb-8">
          The all-in-one workspace for Indian teams — chat, channels, video calls, structured task tracking, and a live reporting org chart. Up to 70% cheaper than Slack & Teams.
        </p>

        {/* Action CTAs */}
        <div className="hero-fade-in opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
          <Button 
            href="/contact" 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto !bg-primary hover:!bg-primary/90 active:!bg-primary/80 !text-white !shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 border-0"
          >
            Start free sandbox trial
          </Button>
          <Button 
            href="/contact" 
            variant="ghost" 
            size="lg" 
            className="w-full sm:w-auto !border-border !text-text-primary hover:!bg-bg-hover"
          >
            Book a migration call
          </Button>
        </div>

        {/* Support context */}
        <div className="hero-fade-in opacity-0 text-[0.82rem] text-text-muted font-medium mb-16 flex flex-wrap justify-center gap-4">
          <span>Free 14-day trial</span>
          <span className="text-border">•</span>
          <span>No credit card required</span>
          <span className="text-border">•</span>
          <span>Saves up to ₹6,500/user/yr</span>
        </div>

        {/* Premium Product Console Preview Wrapper */}
        <div className="relative w-full max-w-[1040px] mt-4 z-10">
          {/* Ambient glow behind console */}
          <div className="absolute inset-0 rounded-xl pointer-events-none opacity-[0.06] blur-[60px] bg-gradient-to-r from-primary to-accent"></div>
          
          <div 
            ref={consoleRef}
            className="w-full bg-bg-surface border border-border rounded-xl shadow-lg overflow-hidden opacity-0 relative z-10"
          >
            {/* macOS window header */}
            <div className="flex items-center justify-between px-4 py-3 bg-bg-surface border-b border-border/80">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-error/80"></span>
                <span className="w-3 h-3 rounded-full bg-warning/80"></span>
                <span className="w-3 h-3 rounded-full bg-success/80"></span>
              </div>
              <div className="text-[0.76rem] font-heading font-semibold text-text-secondary">Squeako Workspace (Growth Plan)</div>
              <div className="w-[44px]"></div>
            </div>

          {/* Console inner layout */}
          <div className="grid grid-cols-[200px_1fr] h-[480px] text-left text-text-primary">
            {/* Console Sidebar */}
            <div className="bg-bg-surface border-r border-border p-4 flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                {/* Workspace Title */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-primary-wash text-primary grid place-items-center text-[0.8rem] font-black font-heading">S</div>
                  <b className="font-heading text-[0.88rem] leading-none text-text-primary">Squeako HQ</b>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-bg-hover text-[0.84rem] font-semibold text-primary">
                    <span>💬</span> Channels
                  </div>
                  <div className="text-text-secondary text-[0.84rem] pl-7 flex flex-col gap-2 font-body">
                    <span># general</span>
                    <span># engineering</span>
                    <span># product-updates</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-bg-hover text-[0.84rem] font-semibold text-text-secondary mt-1">
                    <span>📹</span> Video Meetings
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-bg-hover text-[0.84rem] font-semibold text-text-secondary">
                    <span>✅</span> Tasks & To-dos
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-bg-hover text-[0.84rem] font-semibold text-text-secondary">
                    <span>📊</span> Live Org Chart
                  </div>
                </div>
              </div>

              {/* User Identity Profile */}
              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <span className="w-7 h-7 rounded-full bg-primary-wash text-primary text-[0.78rem] font-bold grid place-items-center flex-none font-heading">AK</span>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading text-[0.82rem] font-bold truncate">Aditya Kumar</span>
                  <span className="text-[0.68rem] text-text-muted leading-none block mt-0.5">Admin · Online</span>
                </div>
              </div>
            </div>

            {/* Console Content Window (Chat + Threads Preview) */}
            <div className="bg-bg-base p-5 flex flex-col justify-between">
              <div className="flex flex-col gap-5 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <h3 className="font-heading text-[0.95rem] font-extrabold text-text-primary"># general</h3>
                    <p className="text-text-secondary text-[0.76rem] font-body mt-0.5">Company-wide announcements and updates</p>
                  </div>
                  <span className="text-[0.76rem] text-primary font-bold bg-primary-wash px-2.5 py-1 rounded-full">12 Members Online</span>
                </div>

                {/* Chat Feed */}
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <span className="w-8 h-8 rounded-full bg-bg-surface border border-border text-text-primary font-bold text-[0.84rem] grid place-items-center flex-none font-heading">RM</span>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <b className="font-heading text-[0.86rem] font-bold">Rohan Mehta</b>
                        <span className="text-text-muted text-[0.68rem] font-body">11:24 AM</span>
                      </div>
                      <p className="text-text-secondary text-[0.88rem] mt-1 leading-relaxed font-body">
                        Hey team, did we align on the GST invoice format for next month's billing cycle? 
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-primary-wash/40 p-3 rounded-lg border border-primary/10">
                    <span className="w-8 h-8 rounded-full bg-primary-wash text-primary font-bold text-[0.84rem] grid place-items-center flex-none font-heading">AK</span>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <b className="font-heading text-[0.86rem] font-bold text-primary">Aditya Kumar</b>
                        <span className="text-text-muted text-[0.68rem] font-body">11:26 AM</span>
                      </div>
                      <p className="text-text-secondary text-[0.88rem] mt-1 leading-relaxed font-body">
                        Yes! Resolved. We have configured direct GST invoicing inside Squeako's growth panel. 
                        I've also created a task for the finance team to audit the INR transaction accounts. 
                      </p>
                      <div className="flex gap-2.5 mt-2.5">
                        <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold text-primary bg-primary-wash px-2 py-0.5 rounded border border-primary/20">
                          ✅ Task: Audit INR Accounts (Assigned to Finance)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input Area */}
              <div className="border border-border rounded-lg bg-bg-surface p-2 flex items-center justify-between mt-4">
                <span className="text-text-muted text-[0.84rem] pl-2 font-body">Message # general...</span>
                <div className="flex gap-2">
                  <span className="w-7 h-7 rounded hover:bg-bg-hover grid place-items-center text-text-secondary cursor-pointer">🎤</span>
                  <span className="w-7 h-7 rounded hover:bg-bg-hover grid place-items-center text-text-secondary cursor-pointer">📹</span>
                  <span className="w-7.5 h-7.5 rounded bg-primary text-white font-bold text-[0.82rem] hover:bg-primary/95 active:scale-95 transition-all grid place-items-center px-3.5 cursor-pointer select-none">Send</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
