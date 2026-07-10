export default function TrustStrip() {
  const logos = [
    {
      name: 'Kettle', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-[19px] h-[19px] shrink-0 text-text-secondary/60 group-hover:text-primary transition-colors">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M5 8h12v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z" />
          <path d="M6 2v6" />
          <path d="M14 2v6" />
        </svg>
      )
    },
    {
      name: 'Routely', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-[19px] h-[19px] shrink-0 text-text-secondary/60 group-hover:text-primary transition-colors">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M9 6h4a2 2 0 0 1 2 2v8a2 2 0 0 0 2 2" />
        </svg>
      )
    },
    {
      name: 'Finbar', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-[19px] h-[19px] shrink-0 text-text-secondary/60 group-hover:text-primary transition-colors">
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-6" />
        </svg>
      )
    },
    {
      name: 'Saanjh', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-[19px] h-[19px] shrink-0 text-text-secondary/60 group-hover:text-primary transition-colors">
          <path d="M17 18a5 5 0 0 0-10 0" />
          <path d="M12 2v7" />
          <path d="M4.9 9.9l4.3 1.4" />
          <path d="M19.1 9.9l-4.3 1.4" />
          <path d="M2 18h20" />
        </svg>
      )
    },
    {
      name: 'Nimbus HR', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-[19px] h-[19px] shrink-0 text-text-secondary/60 group-hover:text-primary transition-colors">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.07-1.22.2.39-1.92.05-3.83-1-5.2-1.29-1.7-3.64-2.1-5.28-1-1.39.9-2 2.5-1.93 4.1C4.44 9.4 3 11 3 13a4 4 0 0 0 4 4h10.5" />
        </svg>
      )
    },
    {
      name: 'Bytecrate', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-[19px] h-[19px] shrink-0 text-text-secondary/60 group-hover:text-primary transition-colors">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      )
    }
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  const ratings = [
    { score: '4.8', source: 'on G2' },
    { score: '4.7', source: 'on Capterra' },
    { score: '4.6', source: 'on Google' },
  ];

  const badges = [
    { label: 'DPDP-ready', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
    { label: 'ISO 27001', path: 'M9 12l2 2 4-4', circle: true },
    { label: 'SOC 2 Certified', rect: true },
    { label: 'Data in India', path: 'M2 12h20', circle: true },
  ];

  return (
    <div className="relative px-6 md:px-8 pt-6 pb-16 md:pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto text-center reveal">
        <p className="font-heading text-[0.72rem] tracking-[0.18em] uppercase text-text-muted mb-8 font-semibold">
          Trusted by growing teams across India
        </p>

        {/* Marquee — fades into the page canvas, no hard edges */}
        <div className="relative w-full overflow-hidden py-2 marquee-container">
          <div
            className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--color-bg-base), transparent)' }}
          />
          <div
            className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--color-bg-base), transparent)' }}
          />
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <span
                key={index}
                className="group flex items-center gap-2.5 font-heading font-extrabold text-[1.35rem] text-text-secondary/60 hover:text-text-primary transition-colors shrink-0 select-none cursor-pointer"
              >
                {logo.icon}
                {logo.name}
              </span>
            ))}
          </div>
        </div>

        {/* Ratings + compliance, one refined flat row */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-10 text-text-secondary">
          {ratings.map((r) => (
            <span key={r.source} className="inline-flex items-center gap-1.5 text-[0.84rem]">
              <span className="text-warning">★</span>
              <b className="font-heading text-text-primary font-bold">{r.score}</b>
              <span>{r.source}</span>
            </span>
          ))}
          <span className="w-px h-4 hidden sm:block" style={{ background: 'var(--color-border)' }} />
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold font-heading text-text-secondary"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[13px] h-[13px] text-text-muted">
                {b.rect && <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>}
                {b.circle && <circle cx="12" cy="12" r="10" />}
                {b.path && <path d={b.path} />}
              </svg>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
