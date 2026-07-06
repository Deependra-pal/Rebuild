'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TOOLS } from '@/config/home';
import { formatCurrency } from '@/lib/utils';
import { SectionHead } from '../shared/Section';

export default function SavingsCalculator() {
  const [teamSize, setTeamSize] = useState(20);
  const [selectedTools, setSelectedTools] = useState<string[]>(['Slack', 'Zoom']);

  const toggle = (name: string) =>
    setSelectedTools((prev) => (prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]));

  const activeToolsData = TOOLS.filter((t) => selectedTools.includes(t.name));
  const stackPerUserMonth = activeToolsData.reduce((acc, curr) => acc + curr.price, 0);
  const oldYear = stackPerUserMonth * teamSize * 12;
  const newYear = teamSize * 99 * 12;
  const save = oldYear - newYear;
  const savePct = oldYear > 0 ? Math.round((save / oldYear) * 100) : 0;

  const sliderPct = ((teamSize - 3) / (500 - 3)) * 100;
  const sliderStyle = {
    background: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary) ${sliderPct}%, var(--color-border) ${sliderPct}%)`,
  };
  const mint = 'var(--color-mint,#0CE59E)';

  return (
    <section className="sq-surface-alt relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 reveal">
        <SectionHead
          eyebrow="See your savings"
          title="How much would your team save?"
          subtitle="Adjust your headcount and select the tools your company pays for today to calculate your direct annual cost savings."
          className="mb-14"
        />

        <div className="sq-panel p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Controls */}
            <div className="flex flex-col text-left">
              <label className="font-heading font-extrabold text-[1.1rem] text-text-primary block mb-1">Select your current tools</label>
              <p className="text-[0.88rem] text-text-secondary mb-5">Select the communication, meeting, and project management apps you currently subscribe to.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TOOLS.map((tool) => {
                  const on = selectedTools.includes(tool.name);
                  return (
                    <button
                      key={tool.name}
                      type="button"
                      onClick={() => toggle(tool.name)}
                      className="flex items-center gap-3 w-full rounded-xl p-3 cursor-pointer transition-all duration-200 text-left relative focus:outline-none"
                      style={{
                        background: on ? 'var(--color-primary-wash)' : 'var(--color-bg-surface)',
                        border: `1px solid ${on ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      }}
                    >
                      <span className="w-8 h-8 rounded-lg grid place-items-center shrink-0" style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                        {tool.logo}
                      </span>
                      <span className="flex flex-col pr-6">
                        <b className={`font-heading text-[0.84rem] block leading-tight ${on ? 'text-text-primary' : 'text-text-secondary'}`}>{tool.name}</b>
                        <i className="not-italic text-[0.7rem] text-text-secondary block mt-0.5">{tool.plan} · ₹{tool.price.toLocaleString('en-IN')}</i>
                      </span>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[0.95rem] font-black transition-opacity duration-150" style={{ color: mint, opacity: on ? 1 : 0 }}>✓</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <label className="font-heading font-extrabold text-text-primary flex items-center text-[0.98rem]">
                  Current Team Size:
                  <span className="text-primary font-black text-[1.125rem] ml-2 font-heading">{teamSize} {teamSize === 1 ? 'person' : 'people'}</span>
                </label>
                <input
                  type="range" min="3" max="500" value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                  style={sliderStyle}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
                />
              </div>
              <p className="text-[0.78rem] text-text-muted mt-5 text-left">Squeako Growth is ₹99/user/month flat, replacing your chat, meetings, tasks, and org tree subscriptions.</p>
            </div>

            {/* Results */}
            <div className="sq-mock p-6 flex flex-col gap-3.5 text-left">
              <div className="flex flex-col gap-2.5 mb-2.5">
                {selectedTools.length > 0 ? (
                  activeToolsData.map((tool) => (
                    <div className="flex justify-between items-center text-[0.84rem] border-b border-border/50 pb-2.5 last:border-0" key={tool.name}>
                      <span className="flex items-center gap-2 text-text-primary font-bold">
                        <i className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tool.color }} />
                        {tool.name} <small className="text-[0.7rem] text-text-secondary font-normal">({tool.plan})</small>
                      </span>
                      <span className="font-heading font-semibold text-text-primary">{formatCurrency(tool.price * teamSize * 12)}/yr</span>
                    </div>
                  ))
                ) : (
                  <div className="text-[0.84rem] text-text-secondary text-center py-4">Select tools on the left to begin comparison.</div>
                )}
              </div>

              <div className="flex justify-between items-center py-2.5 border-t border-border pt-4">
                <span className="text-[0.84rem] text-text-secondary font-semibold">Legacy stack cost (per year)</span>
                <span className="font-heading font-bold text-[1.1rem] text-text-primary">{formatCurrency(oldYear)}</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-t border-border/50">
                <span className="text-[0.84rem] text-text-secondary font-semibold">Squeako Suite (per year)</span>
                <span className="font-heading font-bold text-[1.1rem] text-primary">{formatCurrency(newYear)}</span>
              </div>

              <div className="rounded-xl p-5 text-center mt-3" style={{ background: 'var(--color-mint-wash,rgba(12,229,158,.08))', border: `1px solid color-mix(in srgb, ${mint} 22%, transparent)` }}>
                <div className="font-heading font-extrabold text-[2.2rem] leading-none" style={{ color: mint }}>{formatCurrency(save > 0 ? save : 0)}</div>
                <div className="font-heading text-[0.68rem] tracking-[0.08em] uppercase font-bold mt-2" style={{ color: mint }}>saved every year</div>
                <div className="text-[0.82rem] text-text-secondary mt-1">{oldYear > 0 ? `that's ${savePct}% less overall spend` : 'pick your tools above'}</div>
              </div>

              <p className="text-[0.7rem] text-text-muted text-center mt-2 leading-normal">Standard plans comparison, billed annually, before GST. Your actual contract rates may vary.</p>
              <Link href="/contact" className="sq-btn sq-btn-primary sq-btn-lg w-full mt-2">
                Start saving — free trial
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
