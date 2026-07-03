import React from 'react';
import Badge from '../shared/Badge';

export default function TrustStrip() {
  const logos = [
    'Kettle', 'Routely', 'Finbar', 'Saanjh', 'Nimbus HR', 'Bytecrate',
    'Kettle', 'Routely', 'Finbar', 'Saanjh', 'Nimbus HR', 'Bytecrate',
    'Kettle', 'Routely', 'Finbar', 'Saanjh', 'Nimbus HR', 'Bytecrate'
  ];

  return (
    <div className="bg-bg-surface py-10 md:py-12 border-b border-border overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center reveal">
          {/* Section subtitle */}
          <p className="font-heading text-[0.72rem] tracking-[0.16em] uppercase text-text-muted mb-6 font-semibold">
            Trusted by growing teams across India
          </p>

          {/* Scrolling Marquee */}
          <div className="relative w-full overflow-hidden py-2 my-2 marquee-container">
            {/* Fading overlays to blend with surface */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-surface to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-surface to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-14 animate-marquee whitespace-nowrap">
              {logos.map((logo, index) => (
                <span 
                  key={index}
                  className="flex items-center gap-2.5 font-heading font-extrabold text-[1.4rem] text-text-secondary/70 hover:text-text-primary transition-colors shrink-0 select-none"
                >
                  <span className="w-5.5 h-5.5 rounded-md bg-text-secondary/20 hover:bg-primary/20 shrink-0 transition-colors"></span>
                  {logo}
                </span>
              ))}
            </div>
          </div>

          {/* Social Proof ratings strip */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-5">
            {[
              { score: '4.8', source: 'on G2' },
              { score: '4.7', source: 'on Capterra' },
              { score: '4.6', source: 'on Google' },
            ].map((rating) => (
              <span
                key={rating.source}
                className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full py-1.5 px-4 shadow-sm text-[0.84rem] font-semibold text-text-primary"
              >
                <span className="text-warning">★</span>
                <b className="font-heading text-text-primary font-bold">{rating.score}</b>
                <span className="text-text-secondary font-medium">{rating.source}</span>
              </span>
            ))}
          </div>

          {/* Trust Compliance badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
            >
              DPDP-ready
            </Badge>
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px]">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              }
            >
              ISO 27001
            </Badge>
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px]">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            >
              SOC 2 Certified
            </Badge>
            <Badge
              variant="trust"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                </svg>
              }
            >
              Data in India
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
