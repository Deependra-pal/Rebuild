import Link from 'next/link';
import { SectionHead } from '../shared/Section';

const stories = [
  {
    metric: '₹38k → ₹6k / mo',
    quote: '"We were spending almost ₹38,000 a month across three tools. Squeako does it all for a fraction, and the org chart made onboarding far easier."',
    avatarText: 'AS', name: 'Aarav Shah', role: 'Founder, Kettle · Bengaluru', featured: true,
  },
  {
    metric: '1 day to roll out',
    quote: '"Calls, meetings, and chat in one app means no more pasting Zoom links into Slack. Our field staff actually use it because the mobile app is genuinely good."',
    avatarText: 'PM', name: 'Priya Menon', role: 'Ops Lead, Routely · Pune',
  },
  {
    metric: '60% fewer tools',
    quote: '"As a fintech, data residency isn\'t optional. Squeako keeping everything in India made compliance conversations easy. WhatsApp support during IST hours is a major plus."',
    avatarText: 'RG', name: 'Rahul Gupta', role: 'COO, Finbar · Gurugram',
  },
];

export default function StoriesTeaser() {
  return (
    <section className="sq-surface relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 reveal">
        <SectionHead eyebrow="Real results" title="Teams that made the switch" className="mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:auto-rows-fr">
          {stories.map((st) => (
            <div
              key={st.name}
              className={`sq-card sq-card-hover p-7 flex flex-col gap-5 ${st.featured ? 'sq-card-feature lg:col-span-1 lg:row-span-2 lg:p-9' : ''}`}
            >
              <div className={`font-heading font-extrabold leading-none ${st.featured ? 'text-[2rem]' : 'text-[1.55rem]'}`} style={{ color: 'var(--color-mint,#0CE59E)' }}>
                {st.metric}
              </div>
              <p className={`text-text-primary leading-relaxed flex-grow ${st.featured ? 'text-[1.05rem]' : 'text-[0.94rem]'}`}>{st.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <span className="w-10 h-10 rounded-full font-heading font-bold text-[0.84rem] grid place-items-center shrink-0 text-text-primary" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}>{st.avatarText}</span>
                <div>
                  <b className="font-heading font-bold text-[0.88rem] text-text-primary block leading-tight">{st.name}</b>
                  <span className="text-[0.76rem] text-text-secondary block mt-0.5">{st.role}</span>
                </div>
              </div>
              <Link href="/stories" className="text-primary font-heading font-semibold text-[0.84rem] hover:underline">Read the story &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
