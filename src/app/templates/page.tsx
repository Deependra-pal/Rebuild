'use client';

import React, { useEffect } from 'react';
import TemplatesHero from '@/components/templates/TemplatesHero';
import TemplatesGrid from '@/components/templates/TemplatesGrid';
import CtaSection from '@/components/shared/CtaSection';

export default function TemplatesPage() {
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
      <TemplatesHero />
      <TemplatesGrid />
      <CtaSection
        title="Can't find the right blueprint?"
        description="Launch Squeako from a blank workspace configuration — you'll still be up and running with your team in minutes."
        primaryBtnText="Start blank workspace trial"
        secondaryBtnText="Book a 1:1 demo"
        primaryBtnHref="/contact"
        secondaryBtnHref="/contact"
      />
    </main>
  );
}
