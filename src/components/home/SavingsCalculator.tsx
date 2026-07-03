'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TOOLS } from '@/config/home';
import { formatCurrency } from '@/lib/utils';
import Eyebrow from '../shared/Eyebrow';
import Button from '../shared/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SavingsCalculator() {
  const [teamSize, setTeamSize] = useState(20);
  const [selectedTools, setSelectedTools] = useState<string[]>(['Slack', 'Zoom']);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.calc-controls',
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );

      gsap.fromTo('.calc-results',
        { x: 24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
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

  const handleToolToggle = (name: string) => {
    if (selectedTools.includes(name)) {
      setSelectedTools(selectedTools.filter((t) => t !== name));
    } else {
      setSelectedTools([...selectedTools, name]);
    }
  };

  const activeToolsData = TOOLS.filter((t) => selectedTools.includes(t.name));
  const stackPerUserMonth = activeToolsData.reduce((acc, curr) => acc + curr.price, 0);
  const oldYear = stackPerUserMonth * teamSize * 12;
  const newYear = teamSize * 99 * 12;
  const save = oldYear - newYear;
  const savePct = oldYear > 0 ? Math.round((save / oldYear) * 100) : 0;

  const sliderPct = ((teamSize - 3) / (500 - 3)) * 100;
  const sliderStyle = {
    background: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) ${sliderPct}%, var(--color-bg-base) ${sliderPct}%)`,
  };

  return (
    <section ref={containerRef} className="bg-bg-surface py-20 md:py-32 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-16 text-center flex flex-col items-center">
          <Eyebrow>See your savings</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            How much would your team save?
          </h2>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed max-w-[620px]">
            Adjust your headcount and select the tools your company pays for today to calculate your direct annual cost savings.
          </p>
        </div>

        {/* Calculator Card Frame */}
        <div className="bg-bg-card border border-border rounded-xl p-6 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Left Column: Controls */}
            <div className="flex flex-col calc-controls opacity-0 text-left">
              <label className="font-heading font-extrabold text-[1.1rem] text-text-primary block mb-1">
                Select your current tools
              </label>
              <p className="text-[0.88rem] text-text-secondary mb-5 font-body">
                Select the communication, meeting, and project management apps you currently subscribe to.
              </p>

              {/* Tool Selector Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TOOLS.map((tool) => {
                  const isSelected = selectedTools.includes(tool.name);
                  return (
                    <button
                      key={tool.name}
                      type="button"
                      onClick={() => handleToolToggle(tool.name)}
                      className={`flex items-center gap-3 w-full border rounded-lg p-3 cursor-pointer transition-all duration-150 text-left relative focus:outline-none ${
                        isSelected
                          ? 'bg-primary-wash border-primary text-text-primary shadow-[0_0_12px_rgba(12,229,158,0.12)]'
                          : 'bg-bg-surface border-border hover:border-border-hover hover:bg-hover-overlay text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      <span
                        className="w-7 h-7 rounded grid place-items-center text-white text-[0.86rem] font-bold shrink-0"
                        style={{ backgroundColor: typeof tool.logo === 'string' ? tool.color : 'transparent' }}
                      >
                        {tool.logo}
                      </span>
                      <span className="flex flex-col pr-6">
                        <b className="font-heading text-[0.84rem] block leading-tight">
                          {tool.name}
                        </b>
                        <i className="not-italic text-[0.7rem] text-text-secondary block mt-0.5 font-body">
                          {tool.plan} · ₹{tool.price.toLocaleString('en-IN')}
                        </i>
                      </span>
                      <span
                        className={`absolute right-3 top-1/2 -translate-y-1/2 text-[0.95rem] font-black text-success transition-opacity duration-150 ${
                          isSelected ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        ✓
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Team Size Slider */}
              <div className="mt-8 flex flex-col gap-3">
                <label className="font-heading font-extrabold text-text-primary flex items-center text-[0.98rem]">
                  Current Team Size:
                  <span className="text-primary font-black text-[1.125rem] ml-2 font-heading">
                    {teamSize} {teamSize === 1 ? 'person' : 'people'}
                  </span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="500"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                  style={sliderStyle}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer outline-none transition-all accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-text-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-focus [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-text-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary"
                />
              </div>
              <p className="text-[0.78rem] text-text-muted mt-5 text-left font-body">
                Squeako Growth is ₹99/user/month flat, replacing your chat, meetings, tasks, and org tree subscriptions.
              </p>
            </div>

            {/* Right Column: Cost Result Box */}
            <div className="bg-bg-surface border border-border rounded-lg p-6 flex flex-col gap-3.5 calc-results opacity-0 text-left">
              <div className="flex flex-col gap-2.5 mb-2.5">
                {selectedTools.length > 0 ? (
                  activeToolsData.map((tool) => (
                    <div className="flex justify-between items-center text-[0.84rem] border-b border-border/40 pb-2.5 last:border-0" key={tool.name}>
                      <span className="flex items-center gap-2 text-text-primary font-bold">
                        <i className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tool.color }}></i>
                        {tool.name} <small className="text-[0.7rem] text-text-secondary font-normal font-body">({tool.plan})</small>
                      </span>
                      <span className="font-heading font-semibold text-text-primary">
                        {formatCurrency(tool.price * teamSize * 12)}/yr
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-[0.84rem] text-text-secondary text-center py-4 font-body">
                    Select tools on the left to begin comparison.
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center py-2.5 border-t border-border pt-4">
                <span className="text-[0.84rem] text-text-secondary font-semibold font-body">Legacy stack cost (per year)</span>
                <span className="font-heading font-bold text-[1.1rem] text-text-primary">{formatCurrency(oldYear)}</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-t border-border/40">
                <span className="text-[0.84rem] text-text-secondary font-semibold font-body">Squeako Suite (per year)</span>
                <span className="font-heading font-bold text-[1.1rem] text-primary">{formatCurrency(newYear)}</span>
              </div>

              {/* Annual Savings highlight card */}
              <div className="bg-success/5 border border-success/20 rounded-lg p-5 text-center mt-3 shadow-sm">
                <div className="font-heading font-extrabold text-[2.2rem] text-success leading-none">
                  {formatCurrency(save > 0 ? save : 0)}
                </div>
                <div className="font-heading text-[0.68rem] tracking-[0.08em] uppercase text-success font-bold mt-2">
                  saved every year
                </div>
                <div className="text-[0.82rem] text-text-secondary mt-1 font-body">
                  {oldYear > 0 ? `that's ${savePct}% less overall spend` : 'pick your tools above'}
                </div>
              </div>

              <p className="text-[0.7rem] text-text-muted text-center mt-2 font-body leading-normal">
                Standard plans comparison, billed annually, before GST. Your actual contract rates may vary.
              </p>
              <Button href="/contact" variant="primary" size="lg" className="w-full mt-4 !bg-primary hover:!bg-primary/90 active:!bg-primary/80 !text-white !shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 border-0">
                Start saving — free trial
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
