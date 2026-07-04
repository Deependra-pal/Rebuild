import { SectionHead } from '../shared/Section';

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2 } as const;

const points = [
  { title: 'Catch-up recaps', desc: 'Back from leave or a long meeting? Get a clean, bulleted summary of what you missed in any group channel or thread.', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></> },
  { title: 'Smart replies & rewrite', desc: 'Draft a reply, fix the tone, or translate messages with a single click so you sound professional and clear every time.', icon: <><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></> },
  { title: 'Ask your workspace', desc: '"Where did we land on the pricing page roadmap?" Squeako AI searches through chats, files, meetings, and integrations to answer.', icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></> },
];

export default function AiSection() {
  return (
    <section className="relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      {/* ambient glow behind the cards only */}
      <div aria-hidden className="absolute top-1/2 right-[2%] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none blur-[90px]" style={{ background: 'var(--color-primary-wash)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center reveal">
        {/* editorial copy */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            align="left"
            eyebrow="Meet Squeako AI"
            title="An AI teammate inside every chat"
            subtitle="Catch up in seconds, draft replies faster, and find anything across your company archives, without leaving your thread."
          />
        </div>

        {/* stacked capability cards */}
        <div className="flex flex-col gap-4">
          {points.map((p, i) => (
            <div key={p.title} className="sq-card sq-card-hover p-6 flex gap-5 items-start">
              <span className="w-12 h-12 rounded-xl grid place-items-center shrink-0 text-primary" style={{ background: 'var(--color-primary-wash)', border: '1px solid color-mix(in srgb, var(--color-primary) 16%, transparent)' }}>
                <svg viewBox="0 0 24 24" {...s} className="w-[22px] h-[22px]">{p.icon}</svg>
              </span>
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="font-heading text-[0.66rem] font-bold text-text-muted">0{i + 1}</span>
                  <h4 className="font-heading font-extrabold text-[1.15rem] text-text-primary leading-snug">{p.title}</h4>
                </div>
                <p className="text-text-secondary text-[0.9rem] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
