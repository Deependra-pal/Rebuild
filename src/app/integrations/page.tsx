'use client';

import React, { useEffect } from 'react';
import IntegrationsHero from '@/components/integrations/IntegrationsHero';
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid';
import CtaSection from '@/components/shared/CtaSection';

export default function IntegrationsPage() {
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
      <IntegrationsHero />
      <IntegrationsGrid />
      <CtaSection
        title="Need a custom integration?"
        description="Our simple API interfaces and custom webhook nodes let your technical teams hook Squeako feeds to any internal databases."
        primaryBtnText="Access API docs"
        secondaryBtnText="Discuss huddle cases"
        primaryBtnHref="/contact"
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
