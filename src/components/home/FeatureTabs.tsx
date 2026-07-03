'use client';

import React, { useState, useEffect, useRef } from 'react';
import Eyebrow from '../shared/Eyebrow';
import Badge from '../shared/Badge';
import gsap from 'gsap';

export default function FeatureTabs() {
  const [activeFeatureTab, setActiveFeatureTab] = useState('chat');
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance fade for layout
      gsap.fromTo(
        '.feature-fade-in',
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'ease-custom' }
      );
    }
  }, [activeFeatureTab]);

  const tabs = [
    {
      id: 'chat',
      label: 'Chat & groups',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      id: 'meet',
      label: 'Calls & meetings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      ),
    },
    {
      id: 'task',
      label: 'Tasks',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <path d="M9 11l3 3L22 4" />
        </svg>
      ),
    },
    {
      id: 'presence',
      label: 'Presence',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      id: 'org',
      label: 'Org chart',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <path d="M12 8v4M12 12H5v4M12 12h7v4" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="bg-bg-base py-20 md:py-32 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="feature-fade-in opacity-0 max-w-[800px] text-center mb-12 flex flex-col items-center">
          <Eyebrow>Take a closer look</Eyebrow>
          <h2 className="text-[clamp(1.8rem,3.8vw,2.6rem)] font-heading font-extrabold mt-4 mb-4 text-text-primary leading-tight">
            The full toolkit, in action
          </h2>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed max-w-[620px]">
            Explore Squeako's key communication and project coordination modules using the playground controls.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div className="feature-fade-in opacity-0 flex flex-row overflow-x-auto gap-2 bg-bg-base border border-border rounded-full p-2 max-w-full mb-10 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeFeatureTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFeatureTab(tab.id)}
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

        {/* Dynamic Display Panel Container */}
        <div
          ref={panelRef}
          className="feature-fade-in opacity-0 w-full bg-bg-card border border-border rounded-xl p-6 lg:p-10 min-h-[380px] shadow-lg flex items-center justify-center"
        >
          {/* 1. CHAT PANEL */}
          {activeFeatureTab === 'chat' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-extrabold text-[1.45rem] text-text-primary mb-3 leading-tight">
                  Conversations that bring everyone in
                </h3>
                <p className="text-text-secondary text-[0.92rem] mb-6 leading-relaxed">
                  1:1 messages, structured channels, and external client rooms organized around your business routines.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    '1:1 and group chats, optimized for speed and clarity',
                    'Invite clients & guests into specific groups only',
                    'Frictionless threads, emoji reactions, and file pins',
                    'Search instantly across all channels, users, and uploaded files',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-text-primary text-[0.86rem] font-medium">
                      <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3.5 w-full max-w-[400px] mx-auto">
                <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2 border-b border-border flex items-center justify-between">
                  <span>Workspace Rooms</span>
                  <span className="text-text-muted font-normal text-[0.7rem]">Active</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center p-2.5 rounded bg-bg-base border border-border/60">
                    <span className="font-heading text-[0.84rem] text-text-primary font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-primary-wash text-primary flex items-center justify-center font-black text-[0.62rem]">#</span>
                      # launch-team
                    </span>
                    <Badge variant="status-on">12 new</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded hover:bg-hover-overlay transition-colors">
                    <span className="font-heading text-[0.84rem] text-text-secondary font-semibold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-bg-card border border-border text-text-secondary flex items-center justify-center font-black text-[0.62rem]">K</span>
                      Kettle x Client (Guest)
                    </span>
                    <Badge variant="status-away">2 new</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded hover:bg-hover-overlay transition-colors">
                    <span className="font-heading text-[0.84rem] text-text-secondary font-semibold flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-bg-card border border-border text-text-secondary flex items-center justify-center font-black text-[0.62rem]">#</span>
                      # design-updates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. MEET PANEL */}
          {activeFeatureTab === 'meet' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-extrabold text-[1.45rem] text-text-primary mb-3 leading-tight">
                  HD meetings, without leaving the chat
                </h3>
                <p className="text-text-secondary text-[0.92rem] mb-6 leading-relaxed">
                  Start voice calls or video meetings inside any channel. Set up calendar schedules with automated reminder nudges.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    '1:1 and team voice/video calls with high-res screen sharing',
                    'Configure recurring meetings in a single step',
                    'Automated calendar event reminder notifications',
                    'Secure call recording and cloud transcript support',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-text-primary text-[0.86rem] font-medium">
                      <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3.5 w-full max-w-[400px] mx-auto">
                <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2 border-b border-border flex items-center justify-between">
                  <span>Meetings Agenda</span>
                  <span className="text-text-muted font-normal text-[0.7rem]">Today</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center p-2.5 rounded bg-bg-base border border-border/60">
                    <div>
                      <b className="font-heading text-[0.84rem] text-text-primary block font-bold">Daily Standup</b>
                      <span className="text-[0.7rem] text-text-secondary">10:00 AM · Recurring</span>
                    </div>
                    <Badge variant="status-on">10 min</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded hover:bg-hover-overlay transition-colors">
                    <div>
                      <b className="font-heading text-[0.84rem] text-text-secondary block font-semibold">Pricing Review</b>
                      <span className="text-[0.7rem] text-text-secondary">4:00 PM · 3 invited</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. TASK PANEL */}
          {activeFeatureTab === 'task' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-extrabold text-[1.45rem] text-text-primary mb-3 leading-tight">
                  Turn conversations into actions
                </h3>
                <p className="text-text-secondary text-[0.92rem] mb-6 leading-relaxed">
                  Avoid letting instructions slip away. Convert any message into a task, assign due dates, and track states instantly.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'One-tap task creation directly from chat messages',
                    'Set clear owners, target dates, and priority badges',
                    'Monitor task backlogs, progress, and updates in channels',
                    'Unified dashboard for personal and company checklists',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-text-primary text-[0.86rem] font-medium">
                      <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3.5 w-full max-w-[400px] mx-auto">
                <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2 border-b border-border flex items-center justify-between">
                  <span>Tasks · # engineering</span>
                  <span className="text-text-muted font-normal text-[0.7rem]">Active</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center p-2.5 rounded bg-bg-base border border-border/60">
                    <div>
                      <b className="font-heading text-[0.84rem] text-text-primary block font-bold">Fix layout overflow</b>
                      <span className="text-[0.7rem] text-text-secondary">Assigned to Rahul S.</span>
                    </div>
                    <Badge variant="status-busy">High</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded hover:bg-hover-overlay transition-colors">
                    <div>
                      <b className="font-heading text-[0.84rem] text-text-secondary block font-semibold">Deploy new hero</b>
                      <span className="text-[0.7rem] text-text-secondary">Assigned to Priya R.</span>
                    </div>
                    <Badge variant="status-on">Done</Badge>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. PRESENCE PANEL */}
          {activeFeatureTab === 'presence' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-extrabold text-[1.45rem] text-text-primary mb-3 leading-tight">
                  Always know who is around
                </h3>
                <p className="text-text-secondary text-[0.92rem] mb-6 leading-relaxed">
                  Real-time status updates (Online, Away, Busy, or Break) tell team members the best time to connect.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Automatic status indicators linked to call status',
                    'Custom statuses with descriptive emoji messages',
                    'System-level alerts when colleagues return to status',
                    'Online/Offline flags placed next to usernames',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-text-primary text-[0.86rem] font-medium">
                      <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 w-full max-w-[400px] mx-auto">
                <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2 border-b border-border">
                  Active Presence
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between p-2 rounded hover:bg-hover-overlay">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-primary-wash text-primary font-bold text-[0.78rem] grid place-items-center">AS</span>
                      <span className="font-heading text-[0.84rem] text-text-primary font-bold">Aarav S.</span>
                    </div>
                    <Badge variant="status-on">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-hover-overlay">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-primary-wash text-primary font-bold text-[0.78rem] grid place-items-center">PR</span>
                      <span className="font-heading text-[0.84rem] text-text-secondary font-semibold">Priya R.</span>
                    </div>
                    <Badge variant="status-busy">In Meeting</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded hover:bg-hover-overlay">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-bg-card border border-border text-text-secondary font-bold text-[0.78rem] grid place-items-center">DV</span>
                      <span className="font-heading text-[0.84rem] text-text-secondary font-semibold">Dev V.</span>
                    </div>
                    <Badge variant="status-away">On a break ☕</Badge>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. ORG CHART PANEL */}
          {activeFeatureTab === 'org' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-extrabold text-[1.45rem] text-text-primary mb-3 leading-tight">
                  Transparent reporting hierarchy
                </h3>
                <p className="text-text-secondary text-[0.92rem] mb-6 leading-relaxed">
                  A live organizational chart mapping reporting structures company-wide. Connect and discover team roles instantly.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    'Visual tree mapping structures, roles, and leads',
                    'Click cards to directly message or call employees',
                    'Maintained automatically as members join the system',
                    'Helps new hires identify stakeholders quickly',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-text-primary text-[0.86rem] font-medium">
                      <span className="w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-surface border border-border rounded-lg p-5 flex items-center justify-center w-full max-w-[400px] mx-auto min-h-[220px]">
                <div className="flex flex-col items-center w-full">
                  <div className="bg-bg-card border border-border rounded-lg py-2 px-4 flex items-center gap-2.5 shadow-sm font-heading font-bold text-[0.8rem] text-text-primary">
                    <span className="w-6 h-6 rounded-full bg-primary-wash text-primary font-bold text-[0.7rem] grid place-items-center">AS</span>
                    Aarav · CEO
                  </div>
                  <div className="w-[1px] h-4 bg-border"></div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-bg-card border border-border rounded-lg py-2 px-4 flex items-center gap-2.5 shadow-sm font-heading font-bold text-[0.8rem] text-text-primary">
                        <span className="w-6 h-6 rounded-full bg-primary-wash text-primary font-bold text-[0.7rem] grid place-items-center">PR</span>
                        Priya · Tech Lead
                      </div>
                      <div className="w-[1px] h-4 bg-border"></div>
                      <div className="bg-bg-card border border-border rounded-lg py-2 px-4 flex items-center gap-2.5 shadow-sm font-heading font-bold text-[0.8rem] text-text-secondary">
                        Mayank · Dev
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-bg-card border border-border rounded-lg py-2 px-4 flex items-center gap-2.5 shadow-sm font-heading font-bold text-[0.8rem] text-text-primary">
                        <span className="w-6 h-6 rounded-full bg-error/10 text-error font-bold text-[0.7rem] grid place-items-center">RM</span>
                        Rahul · Product
                      </div>
                      <div className="w-[1px] h-4 bg-border"></div>
                      <div className="bg-bg-card border border-border rounded-lg py-2 px-4 flex items-center gap-2.5 shadow-sm font-heading font-bold text-[0.8rem] text-text-secondary">
                        Dev · Designer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
