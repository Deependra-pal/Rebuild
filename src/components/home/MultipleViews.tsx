'use client';

import React, { useState, useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Badge from '../shared/Badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MultipleViews() {
  const [activeViewTab, setActiveViewTab] = useState('list');
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal header
      gsap.fromTo('.views-head',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
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

  useEffect(() => {
    if (panelRef.current) {
      gsap.fromTo(panelRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'ease-custom' }
      );
    }
  }, [activeViewTab]);

  const tabs = [
    {
      id: 'list',
      label: 'List view',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <circle cx="3" cy="6" r="1.5" />
          <circle cx="3" cy="12" r="1.5" />
          <circle cx="3" cy="18" r="1.5" />
        </svg>
      ),
    },
    {
      id: 'board',
      label: 'Board view',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      ),
    },
    {
      id: 'cal',
      label: 'Calendar view',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="bg-bg-base py-20 md:py-32 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Head */}
        <div className="max-w-[800px] mx-auto mb-12 text-center views-head opacity-0 flex flex-col items-center">
          <Eyebrow>Your work, your way</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            See your tasks the way you think
          </h2>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed max-w-[620px]">
            Switch layouts instantly. Whether you prefer a detailed spreadsheet list, a drag-and-drop Kanban board, or a calendar schedule, Squeako syncs everything.
          </p>
        </div>

        {/* View Selection Tabs */}
        <div className="flex flex-row justify-center overflow-x-auto gap-2 bg-bg-surface border border-border rounded-full p-2 max-w-full mb-12 shrink-0 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeViewTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveViewTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-5 rounded-full font-heading font-semibold text-[0.86rem] cursor-pointer transition-all duration-150 shrink-0 whitespace-nowrap ${isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-hover-overlay'
                  }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Display Panel Container */}
        <div ref={panelRef} className="bg-bg-card border border-border rounded-xl p-6 lg:p-10 shadow-lg min-h-[380px]">

          {/* 1. LIST VIEW PANEL */}
          {activeViewTab === 'list' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-extrabold text-[1.45rem] text-text-primary mb-3 leading-tight">
                  Organized list layout
                </h3>
                <p className="text-text-secondary text-[0.92rem] mb-6 leading-relaxed">
                  Every task formatted in a tabular list. Sort by deadline, drag rows to prioritize, and filter by project owner.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Instant sorting and tabular search filters',
                    'Visibility of assignees and target dates on one line',
                    'Group tasks by progress labels or assigned members',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-text-primary text-[0.86rem] font-medium">
                      <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 w-full max-w-[420px] mx-auto">
                <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2 border-b border-border">
                  Tasks Backlog
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <div className="flex justify-between items-center p-2.5 rounded bg-bg-base border border-border/50 text-[0.82rem]">
                    <span className="font-medium text-text-primary flex items-center gap-2">
                      <span className="text-success font-bold">✓</span> Ship landing page
                    </span>
                    <Badge variant="status-on">Done</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded bg-bg-base border border-border/50 text-[0.82rem]">
                    <span className="font-medium text-text-primary flex items-center gap-2">
                      <span className="text-error font-bold">☐</span> Fix mobile CTA
                    </span>
                    <Badge variant="status-busy">High</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded bg-bg-base border border-border/50 text-[0.82rem]">
                    <span className="font-medium text-text-primary flex items-center gap-2">
                      <span className="text-warning font-bold">☐</span> Review pricing copy
                    </span>
                    <span className="text-text-secondary font-heading text-[0.76rem]">Today</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. BOARD VIEW PANEL */}
          {activeViewTab === 'board' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-extrabold text-[1.45rem] text-text-primary mb-3 leading-tight">
                  Visual Kanban board
                </h3>
                <p className="text-text-secondary text-[0.92rem] mb-6 leading-relaxed">
                  Map workflows visually. Drag task cards across customized state lanes to keep the entire team in sync.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Custom columns aligned to company workflow cycles',
                    'Drag-and-drop actions to change statuses',
                    'Identify blocked tickets and design bottlenecks immediately',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-text-primary text-[0.86rem] font-medium">
                      <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 w-full max-w-[420px] mx-auto text-left">
                {/* To-Do */}
                <div className="bg-bg-surface border border-border rounded-lg p-2.5 flex flex-col gap-2">
                  <h6 className="font-heading text-[0.66rem] tracking-[0.06em] uppercase text-text-muted font-bold flex justify-between items-center">
                    To-do <span className="font-heading text-[0.62rem] px-1.5 py-0.2 bg-bg-card rounded-full">1</span>
                  </h6>
                  <div className="bg-bg-card border border-border/80 rounded p-2 text-[0.78rem] flex flex-col gap-2">
                    <b className="font-heading text-text-primary font-bold leading-tight">Draft client pitch</b>
                    <div className="flex justify-between items-center text-[0.68rem] text-text-muted">
                      <span>RM</span>
                      <span>Tue</span>
                    </div>
                  </div>
                </div>
                {/* Doing */}
                <div className="bg-bg-surface border border-border rounded-lg p-2.5 flex flex-col gap-2">
                  <h6 className="font-heading text-[0.66rem] tracking-[0.06em] uppercase text-text-muted font-bold flex justify-between items-center">
                    Doing <span className="font-heading text-[0.62rem] px-1.5 py-0.2 bg-bg-card rounded-full">1</span>
                  </h6>
                  <div className="bg-bg-card border border-border/80 rounded p-2 text-[0.78rem] flex flex-col gap-2">
                    <b className="font-heading text-text-primary font-bold leading-tight">Fix mobile CTA</b>
                    <div className="flex justify-between items-center text-[0.68rem] text-text-muted">
                      <span>DV</span>
                      <span className="text-error font-bold">High</span>
                    </div>
                  </div>
                </div>
                {/* Done */}
                <div className="bg-bg-surface border border-border rounded-lg p-2.5 flex flex-col gap-2">
                  <h6 className="font-heading text-[0.66rem] tracking-[0.06em] uppercase text-text-muted font-bold flex justify-between items-center">
                    Done <span className="font-heading text-[0.62rem] px-1.5 py-0.2 bg-bg-card rounded-full">1</span>
                  </h6>
                  <div className="bg-bg-card border border-border/80 rounded p-2 text-[0.78rem] flex flex-col gap-2">
                    <b className="font-heading text-text-primary font-bold leading-tight">Ship site</b>
                    <div className="flex justify-between items-center text-[0.68rem] text-text-muted">
                      <span>AS</span>
                      <span className="text-success font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. CALENDAR VIEW PANEL */}
          {activeViewTab === 'cal' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-extrabold text-[1.45rem] text-text-primary mb-3 leading-tight">
                  Unified calendar schedule
                </h3>
                <p className="text-text-secondary text-[0.92rem] mb-6 leading-relaxed">
                  View scheduled video calls, project deadlines, and milestones side-by-side. Reschedule tasks instantly.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Map tasks and meetings on a shared calendar layout',
                    'Drag calendar events to shift target dates and alert managers',
                    'Sync events directly to Google Calendar and Outlook',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-text-primary text-[0.86rem] font-medium">
                      <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 w-full max-w-[420px] mx-auto">
                <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2 border-b border-border flex items-center justify-between">
                  <span>Weekly Deadlines</span>
                  <span className="text-text-muted font-normal text-[0.7rem]">July</span>
                </div>
                <div className="flex flex-col gap-2 text-left text-[0.8rem]">
                  <div className="flex justify-between items-center p-2.5 rounded bg-bg-base border border-border/50">
                    <div>
                      <b className="font-heading text-text-primary block font-bold">Mon · Daily Standup</b>
                      <span className="text-text-secondary text-[0.68rem]">10:00 AM</span>
                    </div>
                    <Badge variant="status-on">Call</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded bg-bg-base border border-border/50">
                    <div>
                      <b className="font-heading text-text-primary block font-bold">Tue · Fix mobile CTA</b>
                      <span className="text-text-secondary text-[0.68rem]">Task Target Date</span>
                    </div>
                    <Badge variant="status-busy">Task</Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
