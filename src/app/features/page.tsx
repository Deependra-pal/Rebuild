'use client';

import React, { useEffect } from 'react';
import FeaturesHero from '@/components/features/FeaturesHero';
import TalkSection from '@/components/features/TalkSection';
import MeetSection from '@/components/features/MeetSection';
import OrganiseSection from '@/components/features/OrganiseSection';
import AdminSecuritySection from '@/components/features/AdminSecuritySection';
import CtaSection from '@/components/shared/CtaSection';

export default function FeaturesPage() {
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
      <FeaturesHero />
      <TalkSection />
      <MeetSection />
      <OrganiseSection />
      <AdminSecuritySection />
      <CtaSection
        title="See Squeako with your own team"
        description="Spin up a free trial workspace and feel the difference in under five minutes."
        primaryBtnText="Start free trial"
        secondaryBtnText="Compare plans"
        primaryBtnHref="/contact"
        secondaryBtnHref="/pricing"
      />
    </main>
  );
}
