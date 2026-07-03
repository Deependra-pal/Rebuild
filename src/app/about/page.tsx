'use client';

import React, { useEffect } from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import MetricsGrid from '@/components/shared/MetricsGrid';
import Principles from '@/components/about/Principles';
import CtaSection from '@/components/shared/CtaSection';

export default function AboutPage() {
  // GSAP scroll trigger entries
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          const els = gsap.utils.toArray('.reveal') as HTMLElement[];

          els.forEach((el) => {
            gsap.set(el, { transition: 'none' }); // Prevent collision with CSS

            gsap.fromTo(el,
              { opacity: 0, scale: 0.98, y: 20 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  once: true,
                  onEnter: () => {
                    // Trigger counter increments if data-count tags are present
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
                  }
                }
              }
            );
          });
        });

        return () => ctx.revert();
      });
    });
  }, []);

  const aboutMetrics = [
    { count: '70', suffix: '%', label: 'Lower cost than legacy subscriptions' },
    { count: '6', suffix: '-in-1', label: 'Communication tools replaced' },
    { count: '100', suffix: '%', label: 'Data hosted locally in India' },
    { count: '5', suffix: ' min', label: 'Average workspace setup time' },
  ];

  return (
    <main id="main">
      <AboutHero />
      <AboutStory />
      <MetricsGrid metrics={aboutMetrics} />
      <Principles /> 
      <CtaSection
        title="Come build a calmer workday"
        description="Join the growing list of Indian teams hosting their conversations in Squeako."
        primaryBtnText="Start free trial"
        secondaryBtnText="Book a demo call"
        primaryBtnHref="/contact"
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
