'use client';

import React, { useState } from 'react';
import { SectionHead } from '../shared/Section';

type Tone = 'on' | 'away' | 'busy';
function Pill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  const map: Record<Tone, string> = {
    on: 'var(--color-mint,#0CE59E)',
    away: 'var(--color-warning,#FFB703)',
    busy: 'var(--color-error,#FF4D4D)',
  };
  const c = map[tone];
  return (
    <span className="font-heading text-[0.66rem] font-bold py-[3px] px-2 rounded-full flex-none" style={{ color: c, background: `color-mix(in srgb, ${c} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${c} 26%, transparent)` }}>
      {children}
    </span>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-text-primary text-[0.88rem] font-medium">
      <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[0.7rem] shrink-0 mt-0.5" style={{ color: 'var(--color-mint,#0CE59E)', background: 'var(--color-mint-wash,rgba(12,229,158,.1))' }}>✓</span>
      {children}
    </div>
  );
}

const tabs = [
  { id: 'chat', label: 'Chat & groups' },
  { id: 'meet', label: 'Calls & meetings' },
  { id: 'task', label: 'Tasks' },
  { id: 'presence', label: 'Presence' },
  { id: 'org', label: 'Org chart' },
];

export default function FeatureTabs() {
  const [active, setActive] = useState('chat');

  const panels: Record<string, { title: string; body: string; points: string[]; mock: React.ReactNode }> = {
    chat: {
      title: 'Conversations that bring everyone in',
      body: '1:1 messages, structured channels, and external client rooms organized around your business routines.',
      points: [
        '1:1 and group chats, optimized for speed and clarity',
        'Invite clients & guests into specific groups only',
        'Frictionless threads, emoji reactions, and file pins',
        'Search instantly across all channels, users, and uploaded files',
      ],
      mock: (
        <>
          <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2.5 mb-2.5 border-b border-border flex items-center justify-between">
            <span>Workspace Rooms</span><span className="text-text-muted font-normal text-[0.7rem]">Active</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center p-2.5 rounded-lg" style={{ background: 'var(--color-bg-hover)' }}>
              <span className="font-heading text-[0.84rem] text-text-primary font-bold flex items-center gap-2"><span className="w-5 h-5 rounded text-primary grid place-items-center font-black text-[0.62rem]" style={{ background: 'var(--color-primary-wash)' }}>#</span># launch-team</span>
              <Pill tone="on">12 new</Pill>
            </div>
            <div className="flex justify-between items-center p-2.5">
              <span className="font-heading text-[0.84rem] text-text-secondary font-semibold flex items-center gap-2"><span className="w-5 h-5 rounded grid place-items-center font-black text-[0.62rem] text-text-secondary" style={{ background: 'var(--color-bg-hover)' }}>K</span>Kettle x Client (Guest)</span>
              <Pill tone="away">2 new</Pill>
            </div>
            <div className="flex justify-between items-center p-2.5">
              <span className="font-heading text-[0.84rem] text-text-secondary font-semibold flex items-center gap-2"><span className="w-5 h-5 rounded grid place-items-center font-black text-[0.62rem] text-text-secondary" style={{ background: 'var(--color-bg-hover)' }}>#</span># design-updates</span>
            </div>
          </div>
        </>
      ),
    },
    meet: {
      title: 'HD meetings, without leaving the chat',
      body: 'Start voice calls or video meetings inside any channel. Set up calendar schedules with automated reminder nudges.',
      points: [
        '1:1 and team voice/video calls with high-res screen sharing',
        'Configure recurring meetings in a single step',
        'Automated calendar event reminder notifications',
        'Secure call recording and cloud transcript support',
      ],
      mock: (
        <>
          <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2.5 mb-2.5 border-b border-border flex items-center justify-between">
            <span>Meetings Agenda</span><span className="text-text-muted font-normal text-[0.7rem]">Today</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center p-2.5 rounded-lg" style={{ background: 'var(--color-bg-hover)' }}>
              <div><b className="font-heading text-[0.84rem] text-text-primary block font-bold">Daily Standup</b><span className="text-[0.7rem] text-text-secondary">10:00 AM · Recurring</span></div>
              <Pill tone="on">10 min</Pill>
            </div>
            <div className="flex justify-between items-center p-2.5">
              <div><b className="font-heading text-[0.84rem] text-text-secondary block font-semibold">Pricing Review</b><span className="text-[0.7rem] text-text-secondary">4:00 PM · 3 invited</span></div>
            </div>
          </div>
        </>
      ),
    },
    task: {
      title: 'Turn conversations into actions',
      body: 'Avoid letting instructions slip away. Convert any message into a task, assign due dates, and track states instantly.',
      points: [
        'One-tap task creation directly from chat messages',
        'Set clear owners, target dates, and priority badges',
        'Monitor task backlogs, progress, and updates in channels',
        'Unified dashboard for personal and company checklists',
      ],
      mock: (
        <>
          <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2.5 mb-2.5 border-b border-border flex items-center justify-between">
            <span>Tasks · # engineering</span><span className="text-text-muted font-normal text-[0.7rem]">Active</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center p-2.5 rounded-lg" style={{ background: 'var(--color-bg-hover)' }}>
              <div><b className="font-heading text-[0.84rem] text-text-primary block font-bold">Fix layout overflow</b><span className="text-[0.7rem] text-text-secondary">Assigned to Rahul S.</span></div>
              <Pill tone="busy">High</Pill>
            </div>
            <div className="flex justify-between items-center p-2.5">
              <div><b className="font-heading text-[0.84rem] text-text-secondary block font-semibold">Deploy new hero</b><span className="text-[0.7rem] text-text-secondary">Assigned to Priya R.</span></div>
              <Pill tone="on">Done</Pill>
            </div>
          </div>
        </>
      ),
    },
    presence: {
      title: 'Always know who is around',
      body: 'Real-time status updates (Online, Away, Busy, or Break) tell team members the best time to connect.',
      points: [
        'Automatic status indicators linked to call status',
        'Custom statuses with descriptive emoji messages',
        'System-level alerts when colleagues return to status',
        'Online/Offline flags placed next to usernames',
      ],
      mock: (
        <>
          <div className="font-heading font-bold text-[0.82rem] text-text-primary pb-2.5 mb-2.5 border-b border-border">Active Presence</div>
          <div className="flex flex-col gap-1.5">
            {[
              { i: 'AS', n: 'Aarav S.', bold: true, tone: 'on' as Tone, s: 'Online' },
              { i: 'PR', n: 'Priya R.', bold: false, tone: 'busy' as Tone, s: 'In Meeting' },
              { i: 'DV', n: 'Dev V.', bold: false, tone: 'away' as Tone, s: 'On a break ☕' },
            ].map((u) => (
              <div key={u.i} className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full text-primary font-bold text-[0.78rem] grid place-items-center" style={{ background: 'var(--color-primary-wash)' }}>{u.i}</span>
                  <span className={`font-heading text-[0.84rem] ${u.bold ? 'text-text-primary font-bold' : 'text-text-secondary font-semibold'}`}>{u.n}</span>
                </div>
                <Pill tone={u.tone}>{u.s}</Pill>
              </div>
            ))}
          </div>
        </>
      ),
    },
    org: {
      title: 'Transparent reporting hierarchy',
      body: 'A live organizational chart mapping reporting structures company-wide. Connect and discover team roles instantly.',
      points: [
        'Visual tree mapping structures, roles, and leads',
        'Click cards to directly message or call employees',
        'Maintained automatically as members join the system',
        'Helps new hires identify stakeholders quickly',
      ],
      mock: (
        <div className="flex flex-col items-center w-full py-2">
          <div className="rounded-lg py-2 px-4 flex items-center gap-2.5 font-heading font-bold text-[0.8rem] text-text-primary" style={{ background: 'var(--color-bg-hover)', border: '1px solid var(--color-border)' }}>
            <span className="w-6 h-6 rounded-full text-primary font-bold text-[0.7rem] grid place-items-center" style={{ background: 'var(--color-primary-wash)' }}>AS</span>Aarav · CEO
          </div>
          <div className="w-px h-4" style={{ background: 'var(--color-border)' }} />
          <div className="flex gap-4">
            {[
              { i: 'PR', r: 'Priya · Tech Lead', sub: 'Mayank · Dev', tone: 'primary' },
              { i: 'RM', r: 'Rahul · Product', sub: 'Dev · Designer', tone: 'error' },
            ].map((c) => (
              <div key={c.i} className="flex flex-col items-center">
                <div className="rounded-lg py-2 px-3.5 flex items-center gap-2 font-heading font-bold text-[0.8rem] text-text-primary" style={{ background: 'var(--color-bg-hover)', border: '1px solid var(--color-border)' }}>
                  <span className="w-6 h-6 rounded-full font-bold text-[0.7rem] grid place-items-center" style={{ background: c.tone === 'error' ? 'color-mix(in srgb, var(--color-error) 12%, transparent)' : 'var(--color-primary-wash)', color: c.tone === 'error' ? 'var(--color-error)' : 'var(--color-primary)' }}>{c.i}</span>{c.r}
                </div>
                <div className="w-px h-4" style={{ background: 'var(--color-border)' }} />
                <div className="rounded-lg py-2 px-3.5 font-heading font-bold text-[0.8rem] text-text-secondary" style={{ background: 'var(--color-bg-hover)', border: '1px solid var(--color-border)' }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  };

  const p = panels[active];

  return (
    <section className="relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center reveal">
        <SectionHead
          eyebrow="Take a closer look"
          title="The full toolkit, in action"
          subtitle="Explore Squeako's key communication and project coordination modules using the playground controls."
        />

        {/* Tab bar */}
        <div className="mt-10 flex flex-row overflow-x-auto gap-1.5 rounded-full p-1.5 max-w-full scrollbar-none" style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', boxShadow: 'var(--sq-card-shadow)' }}>
          {tabs.map((t) => {
            const on = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`py-2 px-5 rounded-full font-heading font-semibold text-[0.86rem] cursor-pointer transition-all duration-200 shrink-0 whitespace-nowrap ${on ? 'text-white' : 'text-text-secondary hover:text-text-primary'}`}
                style={on ? { background: 'var(--color-primary)', boxShadow: '0 6px 16px -8px var(--color-primary-wash)' } : undefined}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="sq-panel w-full mt-10 p-6 lg:p-12">
          <div key={active} className="animate-msg grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="flex flex-col text-left">
              <h3 className="font-heading font-extrabold text-[1.55rem] text-text-primary mb-3 leading-tight tracking-[-0.02em]">{p.title}</h3>
              <p className="text-text-secondary text-[0.95rem] mb-6 leading-relaxed max-w-[460px]">{p.body}</p>
              <div className="flex flex-col gap-3">{p.points.map((pt) => <Check key={pt}>{pt}</Check>)}</div>
            </div>
            <div className="sq-mock p-5 w-full max-w-[420px] mx-auto">{p.mock}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
