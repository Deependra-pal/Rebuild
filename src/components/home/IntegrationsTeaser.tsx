import Link from 'next/link';
import { Eyebrow } from '../shared/Section';

const tools = [
  { letter: 'G', name: 'Google Calendar' },
  { letter: 'D', name: 'Google Drive' },
  { letter: 'M', name: 'Gmail' },
  { letter: 'Z', name: 'Zapier' },
  { letter: 'T', name: 'Trello' },
  { letter: 'J', name: 'Jira' },
  { letter: '🐙', name: 'GitHub' },
  { letter: 'R', name: 'Razorpay' },
];

export default function IntegrationsTeaser() {
  return (
    <section className="relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center reveal">
        {/* copy */}
        <div className="flex flex-col text-left">
          <Eyebrow>Plays well with others</Eyebrow>
          <h2 className="text-[clamp(1.85rem,3.9vw,2.6rem)] font-heading font-extrabold tracking-[-0.035em] mt-5 mb-4 leading-[1.08] text-text-primary">
            Works with the tools you already use
          </h2>
          <Link href="/integrations" className="sq-btn sq-btn-secondary sq-btn-md mt-2 self-start">
            See all integrations &rarr;
          </Link>
        </div>

        {/* logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {tools.map((t) => (
            <span key={t.name} className="sq-card sq-card-hover flex flex-col items-center justify-center gap-2.5 py-6 px-3 text-center select-none">
              <span className="w-11 h-11 rounded-xl grid place-items-center font-bold text-[1.05rem] text-text-primary" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>{t.letter}</span>
              <span className="font-heading font-semibold text-[0.8rem] text-text-secondary leading-tight">{t.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
