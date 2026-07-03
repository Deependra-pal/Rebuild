'use client';

import React, { useEffect } from 'react';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import ByTeam from '@/components/solutions/ByTeam';
import ByIndustry from '@/components/solutions/ByIndustry';
import CtaSection from '@/components/shared/CtaSection';

export default function SolutionsPage() {
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
      <SolutionsHero />
      <ByTeam />
      <ByIndustry />
      <CtaSection
        title="Find the fit for your team"
        description="Tell us about your team size and operational workflows, and we'll scope Squeako to match your needs."
        primaryBtnText="Schedule a trial demo"
        secondaryBtnText="Explore billing options"
        primaryBtnHref="/contact"
        secondaryBtnHref="/pricing"
      />
    </main>
  );
}
