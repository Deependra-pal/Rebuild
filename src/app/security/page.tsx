'use client';

import React, { useEffect } from 'react';
import SecurityHero from '@/components/security/SecurityHero';
import SecurityGrid from '@/components/security/SecurityGrid';
import CtaSection from '@/components/shared/CtaSection';

export default function SecurityPage() {
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
      <SecurityHero />
      <SecurityGrid />
      <CtaSection
        title="Have compliance questions?"
        description="We are glad to walk your security reviews team or legal counselors through exactly how Squeako encrypts and hosts database files."
        primaryBtnText="Talk to Squeako IT Security"
        secondaryBtnText="Review pricing models"
        primaryBtnHref="/contact"
        secondaryBtnHref="/pricing"
      />
    </main>
  );
}
