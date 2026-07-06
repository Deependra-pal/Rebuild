import { Eyebrow } from '../shared/Section';
import ArrowButton from '../shared/ArrowButton';

export default function PricingTeaser() {
  return (
    <section className="sq-surface-alt relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
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
            <ArrowButton href="/pricing" className="sq-btn sq-btn-primary sq-btn-lg">
              See full pricing &amp; plans
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
