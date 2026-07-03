import React, { useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import TemplateCard from '../shared/TemplateCard';
import Button from '../shared/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TemplatesTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.tmpl-card',
        { y: 35, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const templates = [
    {
      topBg: '#436B56',
      title: 'Sales team',
      desc: 'Pipeline channel, deal rooms, follow-up tasks.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-2-2-4 4" />
        </svg>
      ),
    },
    {
      topBg: '#16D196',
      title: 'Customer support',
      desc: 'Client rooms, escalations, shared notes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      ),
    },
    {
      topBg: '#F5B544',
      title: 'Agency & clients',
      desc: 'A guest room per client, plus internal channels.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
      ),
    },
    {
      topBg: '#F0506E',
      title: 'Engineering',
      desc: 'Standups, incidents, code-review tasks.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-8 border-b border-border bg-bg-base relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-bg-card border border-border rounded-xl p-8 lg:p-12 shadow-lg">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-16 text-center flex flex-col items-center">
            <Eyebrow>Start in seconds</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.5rem)] font-heading font-extrabold mt-4 mb-4 leading-tight text-text-primary">
              Set up faster with a template
            </h2>
            <p className="text-[1.05rem] text-text-secondary font-body max-w-[560px]">
              Pre-built workspaces with the right channels, groups, and tasks for your kind of team.
            </p>
          </div>

          {/* Grid list of template cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((tmpl) => (
              <div key={tmpl.title} className="tmpl-card opacity-0">
                <TemplateCard
                  icon={tmpl.icon}
                  title={tmpl.title}
                  description={tmpl.desc}
                />
              </div>
            ))}
          </div>

          {/* Browse all templates button */}
          <div className="text-center mt-12">
            <Button href="/templates" variant="ghost" className="group">
              Browse all templates
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
