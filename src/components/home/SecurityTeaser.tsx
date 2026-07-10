import Link from 'next/link';
import { Eyebrow } from '../shared/Section';

const badges = [
  { label: 'DPDP-ready', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { label: 'ISO 27001 Certified', circle: true, path: 'M9 12l2 2 4-4' },
  { label: 'SOC 2 Compliant', rect: true },
  { label: '100% Indian Hosting', circle: true, path: 'M2 12h20' },
];

export default function SecurityTeaser() {
  return (
    <section className="sq-surface relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center reveal">
        {/* copy */}
        <div className="flex flex-col text-left">
          <Eyebrow>Safe &amp; compliant</Eyebrow>
          <h2 className="text-[clamp(2.05rem,4.3vw,2.9rem)] font-heading font-extrabold tracking-[-0.042em] mt-5 mb-4 leading-[1.05] text-text-primary">
            Security built for enterprise trust
          </h2>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed mb-8 max-w-[500px]">
            AES 256-bit encryption in transit and at rest, local data residency in India, audit logging, admin access controls, and SSO integration support.
          </p>
          <Link href="/security" className="sq-btn sq-btn-secondary sq-btn-md self-start">
            Read Security Protocol <span className="sq-arrow">&rarr;</span>
          </Link>
        </div>

        {/* compliance panel */}
        <div className="sq-card p-7">
          <div className="flex items-center gap-3 pb-5 mb-5 border-b border-border">
            <span className="sq-icon w-11 h-11 rounded-xl">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
            </span>
            <div>
              <b className="font-heading font-bold text-[0.95rem] text-text-primary block leading-tight">Compliance &amp; controls</b>
              <span className="text-[0.78rem] text-text-secondary">AES-256 · SSO · Audit logs</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 rounded-xl p-3.5" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>
                <span className="sq-icon w-8 h-8 rounded-lg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[15px] h-[15px]">
                    {b.rect && <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>}
                    {b.circle && <circle cx="12" cy="12" r="10" />}
                    {b.path && <path d={b.path} />}
                  </svg>
                </span>
                <span className="font-heading font-semibold text-[0.8rem] text-text-primary leading-tight">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
