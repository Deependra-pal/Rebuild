import { Eyebrow } from '../shared/Section';

export default function ProblemStory() {
  const legacyStack = [
    { name: 'Chat App', price: '₹250/mo', icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
    { name: 'Video Meetings', price: '₹200/mo', icon: <><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></> },
    { name: 'Task Tracker', price: '₹180/mo', icon: <path d="M9 11l3 3L20 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" /> },
    { name: 'Calling Add-on', price: '₹120/mo', icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" /> },
  ];

  const pains = [
    {
      title: 'Fragmented Workspaces',
      desc: 'Chatting on one app, conducting video calls on another, and tracking tasks somewhere else. Context gets lost in the gaps.',
    },
    {
      title: 'Billing & GST Friction',
      desc: 'Five different subscriptions billed in USD, subject to bank card transaction fees, with zero local GST-compliant invoices.',
    },
    {
      title: 'Compliance Risks',
      desc: "Employee data resides on overseas servers, creating legal and data privacy risks under India's DPDP Act.",
    },
  ];

  return (
    <section className="sq-surface relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center reveal">

        {/* Narrative */}
        <div className="flex flex-col text-left">
          <Eyebrow>The hidden tool tax</Eyebrow>
          <h2 className="font-heading font-extrabold text-[clamp(1.9rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.035em] text-text-primary mt-5 mb-6">
            You&apos;re paying a tax just to talk to your own team.
          </h2>
          <p className="font-body text-[1.08rem] text-text-secondary leading-relaxed mb-9 max-w-[520px]">
            Running a business in India shouldn&apos;t require managing an expensive, fragmented stack of foreign software. Every month, you pay multiple bills, keep track of several logins, and face compliance issues.
          </p>

          <div className="flex flex-col gap-6">
            {pains.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="w-7 h-7 rounded-lg text-[0.8rem] font-bold grid place-items-center shrink-0 mt-0.5" style={{ background: 'color-mix(in srgb, var(--color-error) 12%, transparent)', color: 'var(--color-error)' }}>✕</span>
                <div>
                  <h4 className="font-heading text-[0.98rem] font-bold text-text-primary">{p.title}</h4>
                  <p className="text-text-secondary text-[0.9rem] mt-1 leading-relaxed max-w-[440px]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison stack — offset for asymmetry */}
        <div className="flex flex-col gap-5 lg:pl-6">
          {/* Legacy */}
          <div className="sq-card p-6 relative">
            <span className="absolute top-5 right-5 text-[0.66rem] font-bold py-1 px-3 rounded-full uppercase tracking-wider" style={{ color: 'var(--color-error)', background: 'color-mix(in srgb, var(--color-error) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--color-error) 24%, transparent)' }}>
              Legacy Stack
            </span>
            <h4 className="font-heading text-[0.92rem] font-bold text-text-secondary mb-4">Fragmented Tools (Per User/Mo)</h4>
            <div className="flex flex-col">
              {legacyStack.map((tool) => (
                <div key={tool.name} className="flex justify-between items-center py-2.5 border-b border-border/50 last:border-0">
                  <span className="flex items-center gap-2.5 text-[0.88rem] text-text-primary font-medium">
                    <span className="w-6 h-6 rounded-md grid place-items-center shrink-0" style={{ background: 'var(--color-bg-hover)', color: 'var(--color-text-secondary)' }}>
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">{tool.icon}</svg>
                    </span>{tool.name}
                  </span>
                  <span className="font-heading text-[0.88rem] text-text-secondary font-semibold">{tool.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 mt-2 border-t border-border font-heading">
              <span className="text-[0.84rem] text-text-muted font-bold">Total Stack Cost</span>
              <span className="text-[1.125rem] text-text-secondary font-extrabold line-through decoration-2" style={{ textDecorationColor: 'var(--color-error)' }}>₹750+/mo</span>
            </div>
          </div>

          {/* Squeako */}
          <div className="sq-card p-6 relative overflow-hidden lg:-mt-2" style={{ borderColor: 'var(--color-primary)', borderWidth: '1.5px' }}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none blur-[50px]" style={{ background: 'var(--color-primary-wash)' }} />
            <span className="absolute top-5 right-5 text-[0.66rem] font-bold py-1 px-3 rounded-full uppercase tracking-wider text-primary" style={{ background: 'var(--color-primary-wash)', border: '1px solid color-mix(in srgb, var(--color-primary) 22%, transparent)' }}>
              Squeako Suite
            </span>
            <h4 className="font-heading text-[0.92rem] font-bold text-primary mb-4">Unified Workspace (Per User/Mo)</h4>
            <div className="flex flex-col gap-3">
              {['All-in-one Chat, Calls, Tasks & Org Chart', '100% Indian Data Center Residency', 'INR Billing with GST-compliant Invoices'].map((line) => (
                <div key={line} className="flex items-center gap-2.5 text-[0.88rem] text-text-primary font-medium">
                  <span className="font-bold" style={{ color: 'var(--color-mint, #0CE59E)' }}>✓</span>{line}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-5 mt-4 border-t border-border font-heading">
              <span className="text-[0.84rem] text-text-primary font-bold">Squeako Flat Rate</span>
              <div className="flex items-baseline gap-1">
                <span className="text-[1.7rem] text-primary font-black">₹99</span>
                <span className="text-[0.78rem] text-text-secondary">/mo</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
