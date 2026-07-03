'use client';

import React, { useEffect } from 'react';
import EnterpriseHero from '@/components/enterprise/EnterpriseHero';
import EnterpriseGrid from '@/components/enterprise/EnterpriseGrid';
import CtaSection from '@/components/shared/CtaSection';

export default function EnterprisePage() {
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

  return (
    <main id="main">
      <EnterpriseHero />
      <EnterpriseGrid />
      <CtaSection
        title="Let's scope your rollout"
        description="Connect with our migrations specialists to design a deployment framework, establish data policies, and review quotes."
        primaryBtnText="Talk to enterprise sales"
        secondaryBtnText="Review security hub"
        primaryBtnHref="/contact"
        secondaryBtnHref="/security"
      />
    </main>
  );
}
