'use client';

import React, { useEffect } from 'react';
import CompareHero from '@/components/compare/CompareHero';
import CompareMatrix from '@/components/compare/CompareMatrix';
import CtaSection from '@/components/shared/CtaSection';

export default function ComparePage() {
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
                }
              }
            );
          });
        });

        return () => ctx.revert();
      });
    });
  }, []);

  return (
    <main id="main">
      <CompareHero />
      <CompareMatrix />
      <CtaSection
        title="Switch without the headache"
        description="Our migration agents help you move from Slack or Teams, set up groups, and map your org chart trees in minutes."
        primaryBtnText="Schedule 1:1 switch call"
        secondaryBtnText="Explore feature set"
        primaryBtnHref="/contact"
        secondaryBtnHref="/features"
      />
    </main>
  );
}
