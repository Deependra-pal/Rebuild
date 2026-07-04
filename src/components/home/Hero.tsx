'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import ArrowButton from '../shared/ArrowButton';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        '.hero-fade-in',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        0.15
      );
      tl.fromTo(
        consoleRef.current,
        { scale: 0.965, opacity: 0, y: 34 },
        { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' },
        0.4
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-stage relative overflow-hidden px-6 md:px-8 pt-28 pb-24 md:pt-36 md:pb-32"
    >
      {/* Ambient stage lighting (mesh / radial — theme-driven) */}
      <div aria-hidden="true" className="hero-glow absolute inset-0 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Data-residency trust badge */}
        <div className="hero-fade-in opacity-0 mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full py-1.5 pl-2.5 pr-4 text-[0.8rem] font-semibold font-heading border"
            style={{
              background: 'var(--h-badge-bg)',
              borderColor: 'var(--h-badge-border)',
              color: 'var(--h-badge-text)',
              boxShadow: 'var(--h-chip-shadow)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-custom"
              style={{ background: 'var(--h-accent)', boxShadow: '0 0 0 3px var(--h-accent-wash)' }}
            />
            100% Data Residency in India · GST Billed in INR
          </span>
        </div>

        {/* Display headline */}
        <h1
          className="hero-fade-in opacity-0 font-heading font-extrabold tracking-[-0.04em] leading-[1.03] max-w-[15ch] md:max-w-[19ch] text-[clamp(2.5rem,5.7vw,4.25rem)] mb-7"
          style={{ color: 'var(--h-text)' }}
        >
          Team collaboration built for speed,{' '}
          <span style={{ color: 'var(--h-accent)' }}>priced for growth.</span>
        </h1>

        {/* Supportive copy */}
        <p
          className="hero-fade-in opacity-0 font-body text-[1.1rem] md:text-[1.2rem] leading-[1.6] max-w-[620px] mb-10"
          style={{ color: 'var(--h-text-2)' }}
        >
          The all-in-one workspace for Indian teams — chat, channels, video calls,
          structured task tracking, and a live reporting org chart. Up to 70% cheaper
          than Slack &amp; Teams.
        </p>

        {/* CTAs */}
        <div className="hero-fade-in opacity-0 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-7">
          <ArrowButton href="/contact" className="sq-btn sq-btn-primary sq-btn-lg w-full sm:w-auto">
            Start free sandbox trial
          </ArrowButton>
          <Link href="/contact" className="sq-btn sq-btn-secondary sq-btn-lg w-full sm:w-auto">
            Book a migration call
          </Link>
        </div>

        {/* Trust line */}
        <div
          className="hero-fade-in opacity-0 text-[0.82rem] font-medium mb-20 flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5"
          style={{ color: 'var(--h-text-3)' }}
        >
          <span>Free 14-day trial</span>
          <span aria-hidden style={{ color: 'var(--h-border)' }}>•</span>
          <span>No credit card required</span>
          <span aria-hidden style={{ color: 'var(--h-border)' }}>•</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--h-success)' }} />
            Saves up to <b className="font-semibold" style={{ color: 'var(--h-success)' }}>₹6,500/user/yr</b>
          </span>
        </div>

        {/* Product console preview */}
        <div className="relative w-full max-w-[1060px] mt-4">
          {/* natural radial bloom (theme-driven, no blur filter) */}
          <div
            aria-hidden
            className="absolute -inset-x-24 -top-16 -bottom-8 pointer-events-none"
            style={{ background: 'var(--h-bloom)' }}
          />
          {/* soft contact shadow — grounds the floating mockup */}
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-[80%] h-16 pointer-events-none"
            style={{ background: 'var(--h-ground)' }}
          />

          <div
            ref={consoleRef}
            className="relative z-10 w-full rounded-2xl overflow-hidden opacity-0 border"
            style={{
              background: 'var(--h-surface)',
              borderColor: 'var(--h-border)',
              boxShadow: 'var(--h-shadow)',
            }}
          >
            {/* window chrome */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: 'var(--h-border)', background: 'var(--h-surface)' }}
            >
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
              </div>
              <div className="text-[0.76rem] font-heading font-semibold" style={{ color: 'var(--h-text-2)' }}>
                Squeako Workspace · Growth Plan
              </div>
              <div className="w-[52px]" />
            </div>

            {/* console body */}
            <div className="grid grid-cols-[210px_1fr] h-[480px] text-left" style={{ color: 'var(--h-text)' }}>
              {/* sidebar */}
              <div className="p-4 flex flex-col justify-between border-r" style={{ borderColor: 'var(--h-border)', background: 'var(--h-surface-2)' }}>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg grid place-items-center text-[0.82rem] font-black font-heading text-white"
                      style={{ background: 'linear-gradient(140deg, var(--h-accent-solid), color-mix(in srgb, var(--h-accent-solid) 60%, #000))', boxShadow: '0 5px 12px -4px var(--h-accent-ring)' }}
                    >
                      S
                    </div>
                    <b className="font-heading text-[0.9rem] leading-none" style={{ color: 'var(--h-text)' }}>Squeako HQ</b>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <div
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[0.84rem] font-semibold"
                      style={{ background: 'var(--h-accent-wash)', color: 'var(--h-accent)' }}
                    >
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      Channels
                    </div>
                    <div className="pl-[30px] flex flex-col gap-1.5 text-[0.83rem] font-body py-1.5" style={{ color: 'var(--h-text-2)' }}>
                      <span style={{ color: 'var(--h-text)', fontWeight: 600 }}># general</span>
                      <span># engineering</span>
                      <span># product-updates</span>
                    </div>
                    {[
                      { label: 'Video Meetings', icon: <><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></> },
                      { label: 'Tasks & To-dos', icon: <path d="M9 11l3 3L20 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" /> },
                      { label: 'Live Org Chart', icon: <><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v4M5 17v-2h14v2" /></> },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[0.84rem] font-semibold" style={{ color: 'var(--h-text-2)' }}>
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: 'var(--h-border)' }}>
                  <span className="w-8 h-8 rounded-full grid place-items-center text-[0.72rem] font-bold font-heading flex-none text-white" style={{ background: 'linear-gradient(140deg, var(--h-accent-solid), color-mix(in srgb, var(--h-accent-solid) 58%, #000))' }}>AK</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-heading text-[0.82rem] font-bold truncate" style={{ color: 'var(--h-text)' }}>Aditya Kumar</span>
                    <span className="text-[0.68rem] leading-none mt-0.5 flex items-center gap-1" style={{ color: 'var(--h-text-3)' }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--h-success)' }} /> Admin · Online
                    </span>
                  </div>
                </div>
              </div>

              {/* content */}
              <div className="p-5 flex flex-col justify-between" style={{ background: 'var(--h-bg)' }}>
                <div className="flex flex-col gap-5 overflow-hidden">
                  <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--h-border)' }}>
                    <div>
                      <h3 className="font-heading text-[0.95rem] font-extrabold" style={{ color: 'var(--h-text)' }}># general</h3>
                      <p className="text-[0.76rem] font-body mt-0.5" style={{ color: 'var(--h-text-2)' }}>Company-wide announcements and updates</p>
                    </div>
                    <span className="text-[0.74rem] font-bold px-2.5 py-1 rounded-full" style={{ background: 'var(--h-accent-wash)', color: 'var(--h-accent)' }}>
                      12 online
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <span className="w-8 h-8 rounded-full grid place-items-center font-bold text-[0.76rem] font-heading flex-none text-white" style={{ background: 'linear-gradient(140deg, #6B7A9C, #454E6B)' }}>RM</span>
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                          <b className="font-heading text-[0.86rem] font-bold" style={{ color: 'var(--h-text)' }}>Rohan Mehta</b>
                          <span className="text-[0.68rem] font-body" style={{ color: 'var(--h-text-3)' }}>11:24 AM</span>
                        </div>
                        <p className="text-[0.88rem] mt-1 leading-relaxed font-body" style={{ color: 'var(--h-text-2)' }}>
                          Hey team, did we align on the GST invoice format for next month&apos;s billing cycle?
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 rounded-xl border" style={{ background: 'var(--h-card)', borderColor: 'var(--h-card-border)' }}>
                      <span className="w-8 h-8 rounded-full grid place-items-center font-bold text-[0.76rem] font-heading flex-none text-white" style={{ background: 'linear-gradient(140deg, var(--h-accent-solid), color-mix(in srgb, var(--h-accent-solid) 58%, #000))' }}>AK</span>
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                          <b className="font-heading text-[0.86rem] font-bold" style={{ color: 'var(--h-accent)' }}>Aditya Kumar</b>
                          <span className="text-[0.68rem] font-body" style={{ color: 'var(--h-text-3)' }}>11:26 AM</span>
                        </div>
                        <p className="text-[0.88rem] mt-1 leading-relaxed font-body" style={{ color: 'var(--h-text-2)' }}>
                          Yes! Resolved. We&apos;ve configured direct GST invoicing inside Squeako&apos;s growth panel.
                          I&apos;ve also created a task for the finance team to audit the INR transaction accounts.
                        </p>
                        <div className="flex gap-2.5 mt-2.5">
                          <span className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold px-2.5 py-1 rounded-md border" style={{ color: 'var(--h-success)', background: 'color-mix(in srgb, var(--h-success) 12%, transparent)', borderColor: 'color-mix(in srgb, var(--h-success) 28%, transparent)' }}>
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            Task: Audit INR Accounts · Finance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* composer */}
                <div className="rounded-xl p-2 flex items-center justify-between mt-4 border" style={{ borderColor: 'var(--h-border)', background: 'var(--h-surface)' }}>
                  <span className="text-[0.84rem] pl-2 font-body" style={{ color: 'var(--h-text-3)' }}>Message # general…</span>
                  <div className="flex gap-2 items-center">
                    <span className="w-7 h-7 rounded-md grid place-items-center cursor-pointer" style={{ color: 'var(--h-text-3)' }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" /></svg></span>
                    <span className="w-7 h-7 rounded-md grid place-items-center cursor-pointer" style={{ color: 'var(--h-text-3)' }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg></span>
                    <span className="rounded-md font-bold text-[0.82rem] grid place-items-center px-3.5 py-1.5 cursor-pointer select-none" style={{ background: 'var(--h-accent-solid)', color: '#fff' }}>
                      Send
                    </span>
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
