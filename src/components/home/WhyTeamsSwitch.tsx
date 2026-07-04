import { SectionHead } from '../shared/Section';

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2 } as const;

const points = [
  { title: 'Up to 70% cheaper', desc: 'One flat subscription replaces separate chat, calling, and task trackers. Secure payment in INR with local GST invoices.', wide: true, feature: true, icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> },
  { title: 'Data residency in India', desc: '100% of your company communications and data host locally in Indian data centers, in compliance with the DPDP Act.', wide: true, icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
  { title: 'Native multi-device', desc: 'Keep office managers and field operatives connected. Real-time synchronizations across Web, Android & iOS.', icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></> },
  { title: 'IST business support', desc: 'Dedicated customer success team available directly on WhatsApp and chat during local Indian business hours.', icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" /> },
  { title: 'Setup in minutes', desc: 'Sign up, generate join links, and migrate conversations in minutes. Simple import triggers for Slack archives.', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></> },
  { title: 'Localized billing support', desc: 'Convenient subscription billing via UPI, net banking, and corporate cards. Transparent invoices with no overseas markup.', icon: <path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l1 12H4L5 9z" /> },
];

export default function WhyTeamsSwitch() {
  return (
    <section className="sq-surface relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 reveal">
        <SectionHead
          eyebrow="Why teams switch"
          title="Made for how Indian teams collaborate"
          subtitle="Squeako combines high-performance tools with Indian billing, compliance, and support architectures."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((p) => (
            <div
              key={p.title}
              className={`sq-card sq-card-hover p-6 flex flex-col ${p.wide ? 'lg:col-span-2' : ''} ${p.feature ? 'sq-card-feature' : ''}`}
            >
              <span className={`sq-icon w-12 h-12 rounded-xl shrink-0 mb-5 ${p.feature ? 'sq-icon-accent' : ''}`}>
                <svg viewBox="0 0 24 24" {...s} className="w-[22px] h-[22px]">{p.icon}</svg>
              </span>
              <h4 className={`font-heading font-extrabold text-text-primary mb-2 leading-snug ${p.wide ? 'text-[1.2rem]' : 'text-[1.05rem]'}`}>{p.title}</h4>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
