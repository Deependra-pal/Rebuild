'use client';

import React, { useState } from 'react';
import { SectionHead } from '../shared/Section';

type Tone = 'on' | 'busy' | 'warn';
function Pill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  const c = tone === 'on' ? 'var(--color-mint,#0CE59E)' : tone === 'busy' ? 'var(--color-error,#FF4D4D)' : 'var(--color-warning,#FFB703)';
  return <span className="font-heading text-[0.64rem] font-bold py-[3px] px-2 rounded-full flex-none" style={{ color: c, background: `color-mix(in srgb, ${c} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${c} 26%, transparent)` }}>{children}</span>;
}

const tabs = [
  { id: 'list', label: 'List view', icon: <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><circle cx="3" cy="6" r="1.5" /><circle cx="3" cy="12" r="1.5" /><circle cx="3" cy="18" r="1.5" /></> },
  { id: 'board', label: 'Board view', icon: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></> },
  { id: 'cal', label: 'Calendar view', icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
];

export default function MultipleViews() {
  const [active, setActive] = useState('list');

  const data: Record<string, { title: string; body: string; points: string[]; mock: React.ReactNode }> = {
    list: {
      title: 'Organized list layout',
      body: 'Every task formatted in a tabular list. Sort by deadline, drag rows to prioritize, and filter by project owner.',
      points: ['Instant sorting and tabular search filters', 'Visibility of assignees and target dates on one line', 'Group tasks by progress labels or assigned members'],
      mock: (
        <>
          <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2.5 mb-2.5 border-b border-border">Tasks Backlog</div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center p-2.5 rounded-lg text-[0.82rem]" style={{ background: 'var(--color-bg-hover)' }}>
              <span className="font-medium text-text-primary flex items-center gap-2"><span className="font-bold" style={{ color: 'var(--color-mint,#0CE59E)' }}>✓</span> Ship landing page</span><Pill tone="on">Done</Pill>
            </div>
            <div className="flex justify-between items-center p-2.5 rounded-lg text-[0.82rem]" style={{ background: 'var(--color-bg-hover)' }}>
              <span className="font-medium text-text-primary flex items-center gap-2"><span className="font-bold" style={{ color: 'var(--color-error)' }}>☐</span> Fix mobile CTA</span><Pill tone="busy">High</Pill>
            </div>
            <div className="flex justify-between items-center p-2.5 rounded-lg text-[0.82rem]" style={{ background: 'var(--color-bg-hover)' }}>
              <span className="font-medium text-text-primary flex items-center gap-2"><span className="font-bold" style={{ color: 'var(--color-warning)' }}>☐</span> Review pricing copy</span><span className="text-text-secondary font-heading text-[0.74rem]">Today</span>
            </div>
          </div>
        </>
      ),
    },
    board: {
      title: 'Visual Kanban board',
      body: 'Map workflows visually. Drag task cards across customized state lanes to keep the entire team in sync.',
      points: ['Custom columns aligned to company workflow cycles', 'Drag-and-drop actions to change statuses', 'Identify blocked tickets and design bottlenecks immediately'],
      mock: (
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { h: 'To-do', t: 'Draft client pitch', m: 'RM', r: 'Tue' },
            { h: 'Doing', t: 'Fix mobile CTA', m: 'DV', r: 'High', red: true },
            { h: 'Done', t: 'Ship site', m: 'AS', r: '✓', green: true },
          ].map((col) => (
            <div key={col.h} className="rounded-lg p-2.5 flex flex-col gap-2" style={{ background: 'var(--color-bg-hover)' }}>
              <h6 className="font-heading text-[0.62rem] tracking-[0.06em] uppercase text-text-muted font-bold flex justify-between items-center">{col.h} <span className="text-[0.6rem] px-1.5 rounded-full" style={{ background: 'var(--color-bg-card)' }}>1</span></h6>
              <div className="rounded p-2 text-[0.76rem] flex flex-col gap-2" style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                <b className="font-heading text-text-primary font-bold leading-tight">{col.t}</b>
                <div className="flex justify-between items-center text-[0.66rem] text-text-muted"><span>{col.m}</span><span className={col.red ? 'font-bold' : col.green ? 'font-bold' : ''} style={{ color: col.red ? 'var(--color-error)' : col.green ? 'var(--color-mint,#0CE59E)' : undefined }}>{col.r}</span></div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    cal: {
      title: 'Unified calendar schedule',
      body: 'View scheduled video calls, project deadlines, and milestones side-by-side. Reschedule tasks instantly.',
      points: ['Map tasks and meetings on a shared calendar layout', 'Drag calendar events to shift target dates and alert managers', 'Sync events directly to Google Calendar and Outlook'],
      mock: (
        <>
          <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2.5 mb-2.5 border-b border-border flex items-center justify-between"><span>Weekly Deadlines</span><span className="text-text-muted font-normal text-[0.7rem]">July</span></div>
          <div className="flex flex-col gap-2 text-[0.8rem]">
            <div className="flex justify-between items-center p-2.5 rounded-lg" style={{ background: 'var(--color-bg-hover)' }}>
              <div><b className="font-heading text-text-primary block font-bold">Mon · Daily Standup</b><span className="text-text-secondary text-[0.68rem]">10:00 AM</span></div><Pill tone="on">Call</Pill>
            </div>
            <div className="flex justify-between items-center p-2.5 rounded-lg" style={{ background: 'var(--color-bg-hover)' }}>
              <div><b className="font-heading text-text-primary block font-bold">Tue · Fix mobile CTA</b><span className="text-text-secondary text-[0.68rem]">Task Target Date</span></div><Pill tone="busy">Task</Pill>
            </div>
          </div>
        </>
      ),
    },
  };

  const d = data[active];

  return (
    <section className="relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center reveal">
        <SectionHead
          eyebrow="Your work, your way"
          title="See your tasks the way you think"
          subtitle="Switch layouts instantly. Whether you prefer a detailed spreadsheet list, a drag-and-drop Kanban board, or a calendar schedule, Squeako syncs everything."
          className="mb-12"
        />

        <div className="sq-panel w-full p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
            {/* image-first: mock on the left */}
            <div key={active} className="animate-msg sq-mock p-5 w-full order-2 lg:order-1">{d.mock}</div>

            {/* controls + copy on the right */}
            <div className="flex flex-col text-left order-1 lg:order-2">
              <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((t) => {
                  const on = active === t.id;
                  return (
                    <button key={t.id} onClick={() => setActive(t.id)}
                      className={`flex items-center gap-2 py-2 px-4 rounded-full font-heading font-semibold text-[0.82rem] cursor-pointer transition-all duration-200 ${on ? 'text-white' : 'text-text-secondary hover:text-text-primary'}`}
                      style={on ? { background: 'var(--color-primary)' } : { background: 'var(--color-bg-hover)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4">{t.icon}</svg>{t.label}
                    </button>
                  );
                })}
              </div>
              <h3 className="font-heading font-extrabold text-[1.5rem] text-text-primary mb-3 leading-tight tracking-[-0.02em]">{d.title}</h3>
              <p className="text-text-secondary text-[0.95rem] mb-6 leading-relaxed max-w-[440px]">{d.body}</p>
              <div className="flex flex-col gap-3">
                {d.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3 text-text-primary text-[0.88rem] font-medium">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5" style={{ color: 'var(--color-mint,#0CE59E)', background: 'var(--color-mint-wash,rgba(12,229,158,.1))' }}>✓</span>{pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
