import Link from 'next/link';
import { Eyebrow } from '../shared/Section';

export default function PricingTeaser() {
  return (
    <section className="relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 reveal">
        <div className="sq-panel relative overflow-hidden text-center px-8 py-16 md:px-16 md:py-20 flex flex-col items-center">
          {/* soft brand glow */}
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 80% at 50% 0%, var(--color-primary-wash), transparent 65%)' }} />
          <div className="relative z-10 flex flex-col items-center">
            <Eyebrow>Simple, honest pricing</Eyebrow>
            <h2 className="text-[clamp(1.95rem,4.2vw,2.85rem)] font-heading font-extrabold tracking-[-0.035em] mt-5 mb-4 leading-[1.06] text-text-primary max-w-[560px]">
              Start free. Upgrade when you grow.
            </h2>
            <p className="text-[1.08rem] text-text-secondary max-w-[540px] mb-9 leading-relaxed">
              Flexible subscriptions designed to fit startups and growing operations, with zero hidden platform charges.
            </p>
            <Link href="/pricing" className="sq-btn sq-btn-primary sq-btn-lg group">
              See full pricing &amp; plans
              <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
