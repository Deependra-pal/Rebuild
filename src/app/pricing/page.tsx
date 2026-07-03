'use client';

import React, { useEffect } from 'react';
import PricingHero from '@/components/pricing/PricingHero';
import PricingGrid from '@/components/pricing/PricingGrid';
import PricingTable from '@/components/pricing/PricingTable';
import PricingFaq from '@/components/pricing/PricingFaq';
import CtaSection from '@/components/shared/CtaSection';

export default function PricingPage() {
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
      <PricingHero />
      <PricingGrid />
      <PricingTable />
      <PricingFaq />
      <CtaSection
        title="Start saving up to 70% today"
        description="Switch to Squeako and save, with all the integrated power of chats, video call panels, and task boards."
        primaryBtnText="Start free trial"
        secondaryBtnText="Book a demo call"
        primaryBtnHref="/contact"
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
