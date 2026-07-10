'use client';

import React from 'react';
import Button from '../shared/Button';

export default function DownloadGrid() {
  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="bg-bg-card border border-border rounded-xl p-8 lg:p-14 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            {/* Download Links & text */}
            <div className="text-left">
              <h2 className="text-[clamp(1.6rem,3.2vw,2.2rem)] font-heading font-extrabold text-text-primary mb-4">
                Access your workspace from any device
              </h2>
              <p className="text-[1.05rem] text-text-secondary leading-relaxed mb-8 font-body max-w-[520px]">
                Whether you are working from a desktop browser or resolving standing updates on mobile, Squeako keeps messages and tasks synchronized.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#download" 
                  className="inline-flex items-center gap-3.5 bg-bg-surface border border-border hover:border-border-hover text-text-primary py-3 px-5 rounded-xl transition-all duration-150 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0 text-primary">
                    <path d="M3 20.5V3.5c0-.4.2-.7.5-.9l11 9-11 9c-.3-.2-.5-.5-.5-1.1zM16.8 14.3l-2.3-1.3L5.6 22l11.2-6.5zM20.5 11l-2.7-1.6-2.5 2.6 2.5 2.6L20.5 13c.7-.4.7-1.6 0-2zM5.6 2l8.9 9-2.3 1.3L5.6 2z" />
                  </svg>
                  <div className="leading-tight text-left">
                    <small className="text-[0.6rem] text-text-secondary block tracking-wider font-heading font-bold uppercase">GET IT ON</small>
                    <b className="font-heading text-[0.94rem] font-bold">Google Play</b>
                  </div>
                </a>

                <a 
                  href="#download" 
                  className="inline-flex items-center gap-3.5 bg-bg-surface border border-border hover:border-border-hover text-text-primary py-3 px-5 rounded-xl transition-all duration-150 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0 text-primary">
                    <path d="M16.5 1.3c.1 1-.3 2-.9 2.7-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 .9-2.6.7-.8 1.8-1.3 2.7-1.4zM19.8 17.3c-.5 1.2-.8 1.7-1.5 2.7-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9s-2.4.9-3.7.9c-1.6 0-2.8-1.5-3.8-2.9C2.8 16.2 2.5 11.5 4.2 9c.9-1.3 2.4-2.2 3.8-2.2 1.4 0 2.3 1 3.5 1 1.1 0 1.8-1 3.5-1 1.2 0 2.5.7 3.5 1.8-3 1.7-2.5 6 .8 7.7z" />
                  </svg>
                  <div className="leading-tight text-left">
                    <small className="text-[0.6rem] text-text-secondary block tracking-wider font-heading font-bold uppercase">DOWNLOAD ON THE</small>
                    <b className="font-heading text-[0.94rem] font-bold">App Store</b>
                  </div>
                </a>
              </div>

              <div className="pt-6 border-t border-border/60">
                <Button href="/contact" size="lg" variant="primary" className="!bg-primary hover:!bg-primary-hover active:!bg-primary-active !text-white !shadow-sm">
                  Open Squeako Web Client <span className="sq-arrow">&rarr;</span>
                </Button>
              </div>
            </div>

            {/* Visual Phone Mockup */}
            <div className="flex items-center justify-center">
              <img
                src="/home/hero.png"
                alt="Squeako Chat Screenshot"
                className="w-full max-w-[280px] rounded-2xl shadow-lg border border-border object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
