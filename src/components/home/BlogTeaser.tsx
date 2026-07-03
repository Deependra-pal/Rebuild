import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BlogTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-card',
        { y: 35, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
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

  const posts = [
    {
      imgText: 'Switching from Slack: a 1-day plan',
      imgStyle: { background: 'linear-gradient(135deg, #16D196 0%, #444D36 100%)' },
      cat: 'Migration',
      title: 'How to move your team off Slack in a day',
      desc: 'A simple checklist to bring your channels, people and history across without the chaos.',
      readTime: '6 min read',
      type: 'Guide',
    },
    {
      imgText: 'The real cost of your tool stack',
      imgStyle: { background: 'linear-gradient(135deg, #D9E38A 0%, #16D196 100%)' },
      cat: 'Cost',
      title: "What your team's tools actually cost per year",
      desc: 'Add up chat, video, calling and tasks — then see what one app would save you.',
      readTime: '4 min read',
      type: 'Playbook',
    },
    {
      imgText: 'Data residency & the DPDP Act',
      imgStyle: { background: 'linear-gradient(135deg, #174445 0%, #16D196 100%)' },
      cat: 'Security',
      title: 'What the DPDP Act means for your team chat',
      desc: 'A plain-language look at where your data should live, and why it matters.',
      readTime: '5 min read',
      type: 'Explainer',
    },
  ];

  return (
    <div ref={containerRef} className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <div className="bg-gradient-to-br from-[#FDEDE3] to-[#F8DAC4] border border-[#F2DDC9] rounded-[30px] p-[clamp(34px,5vw,68px)] shadow-sh-sm">
          <div className="max-w-[680px] mx-auto mb-11 text-center">
            <Eyebrow>From the blog</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Ideas for better teamwork
            </h2>
            <p className="text-[1.1rem] text-muted">
              Guides, playbooks and tips for Indian teams getting more done with less.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post, idx) => (
              <Link
                href="/resources"
                key={idx}
                className="blog-card opacity-0 bg-white border border-hairline rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-sh-md transition-all duration-200 cursor-pointer"
              >
                <div
                  className="h-[140px] bg-grad grid place-items-center text-white font-sora font-bold text-[0.92rem] opacity-[0.94] text-center px-4"
                  style={post.imgStyle}
                >
                  {post.imgText}
                </div>
                <div className="p-[18px] flex flex-col gap-2 flex-1">
                  <span className="font-space-mono text-[0.62rem] tracking-[0.08em] uppercase text-violet font-bold">
                    {post.cat}
                  </span>
                  <h4 className="font-sora font-bold text-ink leading-snug text-[1.02rem]">{post.title}</h4>
                  <p className="text-muted text-[0.85rem] leading-relaxed flex-1">{post.desc}</p>
                  <div className="text-[0.76rem] text-muted flex gap-3 mt-auto pt-2 border-t border-hairline/20 font-medium">
                    <span>{post.readTime}</span>
                    <span>{post.type}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button href="/resources" variant="ghost" className="group">
              Read more on the blog
              <span className="inline-block transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110">&rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
