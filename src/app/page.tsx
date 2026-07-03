'use client';

import React, { useEffect } from 'react';

// Import Home Subcomponents
import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import ProblemStory from '@/components/home/ProblemStory';
import HowItWorks from '@/components/home/HowItWorks';
import FeatureTabs from '@/components/home/FeatureTabs';
import PackedFeatures from '@/components/home/PackedFeatures';
import MultipleViews from '@/components/home/MultipleViews';
import WhyTeamsSwitch from '@/components/home/WhyTeamsSwitch';
import AiSection from '@/components/home/AiSection';
import SavingsCalculator from '@/components/home/SavingsCalculator';
import StoriesTeaser from '@/components/home/StoriesTeaser';
import IntegrationsTeaser from '@/components/home/IntegrationsTeaser';
import SecurityTeaser from '@/components/home/SecurityTeaser';
import PricingTeaser from '@/components/home/PricingTeaser';
import FaqTeaser from '@/components/home/FaqTeaser';

// Import Shared Layout components
import CtaSection from '@/components/shared/CtaSection';
import Newsletter from '@/components/shared/Newsletter';

export default function Page() {
  // GSAP ScrollTrigger for animation effects
  useEffect(() => {
    // Dynamically import GSAP to ensure it runs only on client
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          const els = gsap.utils.toArray('.reveal') as HTMLElement[];

          els.forEach((el) => {
            gsap.set(el, { transition: 'none' }); // Prevent CSS transition collision

            gsap.fromTo(el,
              { 
                opacity: 0, 
                scale: 0.96, 
                rotationX: 4, 
                y: 35,
                transformPerspective: 1000
              },
              {
                opacity: 1,
                scale: 1,
                rotationX: 0,
                y: 0,
                duration: 1.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 88%',
                  once: true,
                  onEnter: () => {
                    el.classList.add('in');

                    // Animate Counters
                    const counters = el.querySelectorAll('[data-count]');
                    counters.forEach((c) => {
                      const elC = c as HTMLElement;
                      if (elC.dataset.done) return;
                      elC.dataset.done = '1';
                      const target = parseInt(elC.getAttribute('data-count') || '0', 10);
                      const suffix = elC.getAttribute('data-suffix') || '';

                      gsap.to(
                        { val: 0 },
                        {
                          val: target,
                          duration: 1.5,
                          ease: 'power3.out',
                          onUpdate: function () {
                            elC.textContent = Math.round(this.targets()[0].val).toLocaleString('en-IN') + suffix;
                          },
                        }
                      );
                    });

                    // Animate Story lines
                    if (el.querySelector('[data-story]') || el.hasAttribute('data-story')) {
                      const lines = el.querySelectorAll('[data-story] .sl-line, .sl-line');
                      lines.forEach((l, i) => {
                        setTimeout(() => {
                          l.classList.add('in');
                        }, 180 * i);
                      });
                    }
                  },
                }
              }
            );
          });

          // Trigger for elements that might load immediately in view without observer trigger
          const allCounters = gsap.utils.toArray('[data-count]') as HTMLElement[];
          allCounters.forEach((c) => {
            if (!c.closest('.reveal') && !c.dataset.done) {
              c.dataset.done = '1';
              const target = parseInt(c.getAttribute('data-count') || '0', 10);
              const suffix = c.getAttribute('data-suffix') || '';

              gsap.to(
                { val: 0 },
                {
                  val: target,
                  duration: 1.5,
                  ease: 'power3.out',
                  onUpdate: function () {
                    c.textContent = Math.round(this.targets()[0].val).toLocaleString('en-IN') + suffix;
                  },
                }
              );
            }
          });
        });

        return () => ctx.revert(); // cleanup
      });
    });
  }, []);

  return (
    <main id="main" className="relative overflow-hidden">
      {/*
        ═══════════════════════════════════════════════════════════════
        ATMOSPHERIC LIGHTING SYSTEM — Ocean Glass Premium Canvas
        
        6 intentional light zones create depth, emotion & hierarchy.
        Each zone has a specific purpose, position & color character.
        Together they make the page feel alive, not flat.
        
        Rule: These are not decorations. They are atmosphere.
        ═══════════════════════════════════════════════════════════════
      */}

      {/* ── ZONE 1: Hero Crown ───────────────────────────────────────
          Large blue corona at the very top.
          Creates the "light source above" feeling.
          Sets the premium tone immediately.
      ──────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1400px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(10,132,255,0.14) 0%, rgba(10,132,255,0.04) 50%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── ZONE 2: Problem/Solution — Left Teal Accent ──────────────
          Soft teal glow on the left side around ~1800–2800px.
          Adds color variety without breaking the blue DNA.
          Creates a subtle "breath" of color variety.
      ──────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '1600px',
          left: '-200px',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(48,213,200,0.05) 0%, transparent 65%)',
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── ZONE 3: Feature Playground — Right Indigo ────────────────
          Right-side indigo/blue glow around FeatureTabs (~3200px).
          Makes the interactive product zone feel luminous.
          The product itself seems to be a light source.
      ──────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '3000px',
          right: '-300px',
          width: '1000px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(10,132,255,0.08) 0%, transparent 60%)',
          filter: 'blur(120px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── ZONE 4: Why Switch / AI — Left Deep Blue ─────────────────
          Left-side blue accent around ~5500–6500px.
          Keeps the mid-page feeling atmospheric and spacious.
          Balances Zone 3 on the opposite side.
      ──────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '5500px',
          left: '-150px',
          width: '800px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(10,132,255,0.06) 0%, rgba(48,213,200,0.02) 40%, transparent 65%)',
          filter: 'blur(130px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── ZONE 5: Calculator / Trust Zone — Center Subtle Blue ─────
          Center blue glow around the savings calculator (~7500px).
          Gives financial/trust content a sense of precision and light.
      ──────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '7200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1200px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(10,132,255,0.07) 0%, transparent 60%)',
          filter: 'blur(110px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── ZONE 6: CTA Finale — Bottom Crown (mirrors Zone 1) ───────
          Large blue corona at the very bottom.
          Bookend to the hero crown — the page starts and ends with light.
          The CTA feels like a conclusion, not just a section.
      ──────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '11000px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1600px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(10,132,255,0.12) 0%, rgba(10,132,255,0.04) 50%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Hero />
      <TrustStrip />
      <ProblemStory />
      <HowItWorks />
      <FeatureTabs />
      <PackedFeatures />
      <MultipleViews />
      <WhyTeamsSwitch />
      <AiSection />
      <SavingsCalculator />
      <StoriesTeaser />
      <IntegrationsTeaser />
      <SecurityTeaser />
      <PricingTeaser />
      <FaqTeaser />
      <CtaSection />
      <Newsletter />
    </main>
  );
}
