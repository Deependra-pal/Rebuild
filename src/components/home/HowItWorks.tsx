'use client';

import React, { useState, useEffect, useRef } from 'react';
import Badge from '../shared/Badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Pinning stack layout on screen widths >= 1024px
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.how-step-card-anim');

        // Position incoming cards initially below
        cards.forEach((card, idx) => {
          if (idx > 0) {
            gsap.set(card, { yPercent: 120, opacity: 0, scale: 0.96, y: 0 });
          } else {
            gsap.set(card, { yPercent: 0, opacity: 1, scale: 1, y: 0 });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=2000',
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const index = Math.min(
                Math.floor(progress * cards.length),
                cards.length - 1
              );
              setActiveStep(index);

              // Update height of indicator progress bar
              const progressBar = document.querySelector('.step-progress-bar') as HTMLElement;
              if (progressBar) {
                progressBar.style.height = `${progress * 100}%`;
              }
            }
          }
        });

        // Cards stacking transition timeline
        cards.forEach((card, idx) => {
          if (idx > 0) {
            tl.to(card, {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: 'power2.inOut',
            });

            // Adjust scale of layers behind the active card
            const prevCards = cards.slice(0, idx);
            prevCards.forEach((prevCard, pIdx) => {
              const shiftY = -28 * (idx - pIdx);
              const scaleFactor = 1 - 0.04 * (idx - pIdx);
              const opacityFactor = Math.max(0.2, 1 - 0.3 * (idx - pIdx));

              tl.to(prevCard, {
                y: shiftY,
                scale: scaleFactor,
                opacity: opacityFactor,
                duration: 1,
                ease: 'power2.inOut',
              }, '<');
            });
          }
        });
      }, containerRef);

      return () => ctx.revert();
    } else {
      // Mobile animations (simple fade/scale triggers)
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cols = gsap.utils.toArray<HTMLElement>('.step-col-mobile');
        gsap.fromTo(cols,
          { y: 20, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.timeline-grid-mobile',
              start: 'top 85%',
              once: true,
            }
          }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  const steps = [
    {
      num: 1,
      tag: 'Under 5 minutes',
      title: 'Create workspace',
      desc: 'Sign up with name & work email. Launch your team sandbox environment instantly — no card needed, no IT support tickets.',
      visual: (
        <div className="w-full mt-auto bg-bg-surface border border-border rounded-lg p-4 text-left shadow-sm">
          <div className="font-heading font-extrabold text-[0.82rem] text-text-primary mb-1.5 flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-primary-wash text-primary flex items-center justify-center font-bold text-[0.62rem]">S</span>
            Squeako Cloud Instance
          </div>
          <div className="text-[0.7rem] text-text-secondary flex justify-between items-center">
            <span>Server: Mumbai, India</span>
            <span className="text-primary font-semibold">Active · Took 3m</span>
          </div>
        </div>
      ),
    },
    {
      num: 2,
      tag: 'Zero setup friction',
      title: 'Invite your team',
      desc: 'Drop in employee emails or share a secure join link via Slack or WhatsApp. The org reporting chart builds itself dynamically.',
      visual: (
        <div className="w-full mt-auto bg-bg-surface border border-border rounded-lg p-4 text-left">
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-heading font-bold text-[0.82rem] text-text-primary">Workspace Members</span>
            <Badge variant="status-on">Active</Badge>
          </div>
          <div className="text-[0.7rem] text-text-secondary leading-tight">
            Priya Sen & Rahul Sharma joined the workspace
          </div>
        </div>
      ),
    },
    {
      num: 3,
      tag: 'Tidy conversations',
      title: 'Organise channels',
      desc: 'Create channels for projects, and configure guest rooms where clients and contractors only see what you explicitly share.',
      visual: (
        <div className="w-full mt-auto bg-bg-surface border border-border rounded-lg p-4 text-left">
          <div className="font-heading font-bold text-[0.82rem] text-text-primary mb-2">Active Channels</div>
          <div className="text-[0.72rem] text-text-secondary flex flex-col gap-1.5">
            <span className="flex items-center gap-2"><span className="text-primary">#</span> engineering-hq</span>
            <span className="flex items-center gap-2"><span className="text-primary">#</span> client-feedback (Guest Access)</span>
          </div>
        </div>
      ),
    },
    {
      num: 4,
      tag: 'No context switching',
      title: 'Call & meet instantly',
      desc: 'Launch quick audio huddles or full video meetings directly inside chat threads, with automated calendar reminders and recording.',
      visual: (
        <div className="w-full mt-auto bg-bg-surface border border-border rounded-lg p-4 text-left">
          <div className="font-heading font-bold text-[0.82rem] text-text-primary mb-1.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            Daily Standup Meeting
          </div>
          <div className="text-[0.7rem] text-text-secondary flex justify-between items-center">
            <span>Join: # engineering</span>
            <span className="text-primary font-bold">In Progress</span>
          </div>
        </div>
      ),
    },
    {
      num: 5,
      tag: 'Turn talk into tasks',
      title: 'Track to completion',
      desc: 'Convert any message into a task, assign ownership, and set due dates directly inside the thread without opening external boards.',
      visual: (
        <div className="w-full mt-auto bg-bg-surface border border-border rounded-lg p-4 text-left">
          <div className="flex justify-between items-start mb-2">
            <span className="font-heading font-bold text-[0.82rem] text-text-primary">Fix layout overflow</span>
            <Badge variant="status-busy">High</Badge>
          </div>
          <div className="text-[0.7rem] text-text-secondary flex justify-between items-center">
            <span>Owner: Rahul S.</span>
            <span className="text-text-muted">Due: Tomorrow</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden bg-bg-card border-b border-border"
    >
      {/* 1. DESKTOP INTERACTIVE PINNING DECK LAYOUT */}
      <div className="hidden lg:flex items-center min-h-screen py-20 px-0 relative z-10">
        <div className="max-w-[1200px] w-full mx-auto px-8 grid grid-cols-[1.15fr_0.85fr] gap-16 items-center">

          {/* Left Column (Sticky timeline progress and captions) */}
          <div className="flex flex-col text-left">
            <span className="font-heading text-[0.72rem] tracking-[0.16em] uppercase text-text-muted font-bold inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-focus"></span>
              Onboarding & setup
            </span>
            <h2 className="text-[clamp(2.2rem,3.8vw,2.8rem)] font-heading font-extrabold mt-4 mb-5 leading-tight text-text-primary">
              How your team gets on Squeako
            </h2>
            <p className="text-[1.05rem] text-text-secondary mb-12 leading-relaxed max-w-[480px]">
              No technical support tickets. No installation delays. Five simple steps and your team is fully configured.
            </p>

            {/* Vertical timeline stepper */}
            <div className="flex flex-col gap-7 relative pl-8 max-w-[440px]">
              {/* Central vertical progress rail */}
              <div className="absolute left-3 top-2.5 bottom-2.5 w-[2px] bg-border">
                <div className="step-progress-bar w-full h-0 bg-primary origin-top transition-all duration-150"></div>
              </div>

              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div
                    key={step.num}
                    className={`flex gap-4 items-start transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-[1.04]' : 'opacity-40'
                    }`}
                  >
                    <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center font-heading font-bold text-[0.78rem] transition-all duration-300 ${
                      isActive ? 'bg-primary text-white font-black shadow-focus' : 'bg-bg-card border border-border text-text-secondary'
                    }`}>
                      {step.num}
                    </div>
                    <div>
                      <span className={`font-heading text-[0.66rem] tracking-[0.08em] uppercase block mb-0.5 ${
                        isActive ? 'text-primary font-bold' : 'text-text-muted'
                      }`}>
                        {step.tag}
                      </span>
                      <h4 className={`font-heading text-[0.98rem] transition-colors ${
                        isActive ? 'text-text-primary font-bold' : 'text-text-secondary font-medium'
                      }`}>
                        {step.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layered Cards Deck */}
          <div className="relative w-full max-w-[400px] h-[450px] mx-auto flex items-center justify-center">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={step.num}
                  className="how-step-card-anim absolute inset-0 w-full h-full flex flex-col items-start justify-between text-left rounded-xl p-6 bg-bg-elevated border transition-colors duration-300"
                  style={{
                    zIndex: 10 + idx,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border)',
                  }}
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    {/* Badge indicator */}
                    <div className="w-10 h-10 rounded-lg font-heading font-bold text-[1rem] flex items-center justify-center bg-primary-wash text-primary border border-primary/20">
                      {step.num}
                    </div>
                    <span className="font-heading text-[0.68rem] tracking-[0.08em] uppercase text-text-muted font-bold">
                      Step {step.num} of 5
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5 flex-grow">
                    <span className="font-heading text-[0.68rem] tracking-[0.1em] uppercase text-primary font-bold">
                      {step.tag}
                    </span>
                    <h3 className="font-heading font-extrabold text-[1.2rem] text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-[0.86rem] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* High fidelity interactive mockup representation */}
                  <div className="w-full mt-6">
                    {step.visual}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 2. MOBILE & TABLET LAYOUT */}
      <div className="lg:hidden py-16 px-6">
        {/* Section Head */}
        <div className="max-w-[780px] mx-auto mb-10 text-center flex flex-col items-center">
          <span className="font-heading text-[0.72rem] tracking-[0.16em] uppercase text-text-muted font-bold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-focus"></span>
            Onboarding & setup
          </span>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.4rem)] font-heading font-extrabold mt-3.5 mb-3 text-text-primary leading-tight">
            How your team gets on Squeako
          </h2>
          <p className="text-[1.02rem] text-text-secondary leading-relaxed">
            No technical overhead. Rebuilt in five simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="timeline-grid-mobile flex flex-col gap-6 max-w-[500px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="step-col-mobile flex flex-col items-start bg-bg-elevated border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className="w-9 h-9 rounded-lg font-heading font-bold text-[0.9rem] flex items-center justify-center bg-primary-wash text-primary border border-primary/20">
                  {step.num}
                </div>
                <span className="font-heading text-[0.66rem] tracking-[0.08em] uppercase text-text-muted font-bold">
                  {step.tag}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-[1.125rem] text-text-primary mb-1.5">
                {step.title}
              </h3>
              <p className="text-text-secondary text-[0.84rem] leading-relaxed mb-5">
                {step.desc}
              </p>

              <div className="w-full">
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
