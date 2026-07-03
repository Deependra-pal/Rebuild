'use client';

import React, { useEffect } from 'react';
import ResourcesHero from '@/components/resources/ResourcesHero';
import BlogGrid from '@/components/resources/BlogGrid';
import Newsletter from '@/components/shared/Newsletter';

export default function ResourcesPage() {
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
      <ResourcesHero />
      <BlogGrid />
      <Newsletter />
    </main>
  );
}
