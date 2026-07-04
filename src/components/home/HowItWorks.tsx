import { Eyebrow } from '../shared/Section';

export default function HowItWorks() {
  const steps = [
    {
      num: 1, tag: 'Under 5 minutes', title: 'Create workspace',
      desc: 'Sign up with name & work email. Launch your team sandbox environment instantly — no card needed, no IT support tickets.',
      visual: (
        <>
          <div className="font-heading font-extrabold text-[0.82rem] text-text-primary mb-1.5 flex items-center gap-2">
            <span className="w-4 h-4 rounded text-primary flex items-center justify-center font-bold text-[0.62rem]" style={{ background: 'var(--color-primary-wash)' }}>S</span>
            Squeako Cloud Instance
          </div>
          <div className="text-[0.72rem] text-text-secondary flex justify-between items-center">
            <span>Server: Mumbai, India</span><span className="text-primary font-semibold">Active · Took 3m</span>
          </div>
        </>
      ),
    },
    {
      num: 2, tag: 'Zero setup friction', title: 'Invite your team',
      desc: 'Drop in employee emails or share a secure join link via Slack or WhatsApp. The org reporting chart builds itself dynamically.',
      visual: (
        <>
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-heading font-bold text-[0.82rem] text-text-primary">Workspace Members</span>
            <span className="text-[0.66rem] font-bold py-0.5 px-2 rounded-full" style={{ color: 'var(--color-mint,#0CE59E)', background: 'var(--color-mint-wash,rgba(12,229,158,.1))' }}>Active</span>
          </div>
          <div className="text-[0.72rem] text-text-secondary leading-tight">Priya Sen &amp; Rahul Sharma joined the workspace</div>
        </>
      ),
    },
    {
      num: 3, tag: 'Tidy conversations', title: 'Organise channels',
      desc: 'Create channels for projects, and configure guest rooms where clients and contractors only see what you explicitly share.',
      visual: (
        <>
          <div className="font-heading font-bold text-[0.82rem] text-text-primary mb-2">Active Channels</div>
          <div className="text-[0.72rem] text-text-secondary flex flex-col gap-1.5">
            <span className="flex items-center gap-2"><span className="text-primary">#</span> engineering-hq</span>
            <span className="flex items-center gap-2"><span className="text-primary">#</span> client-feedback (Guest Access)</span>
          </div>
        </>
      ),
    },
    {
      num: 4, tag: 'No context switching', title: 'Call & meet instantly',
      desc: 'Launch quick audio huddles or full video meetings directly inside chat threads, with automated calendar reminders and recording.',
      visual: (
        <>
          <div className="font-heading font-bold text-[0.82rem] text-text-primary mb-1.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" /> Daily Standup Meeting
          </div>
          <div className="text-[0.72rem] text-text-secondary flex justify-between items-center">
            <span>Join: # engineering</span><span className="text-primary font-bold">In Progress</span>
          </div>
        </>
      ),
    },
    {
      num: 5, tag: 'Turn talk into tasks', title: 'Track to completion',
      desc: 'Convert any message into a task, assign ownership, and set due dates directly inside the thread without opening external boards.',
      visual: (
        <>
          <div className="flex justify-between items-start mb-2">
            <span className="font-heading font-bold text-[0.82rem] text-text-primary">Fix layout overflow</span>
            <span className="text-[0.66rem] font-bold py-0.5 px-2 rounded-full" style={{ color: 'var(--color-error)', background: 'color-mix(in srgb, var(--color-error) 12%, transparent)' }}>High</span>
          </div>
          <div className="text-[0.72rem] text-text-secondary flex justify-between items-center">
            <span>Owner: Rahul S.</span><span className="text-text-muted">Due: Tomorrow</span>
          </div>
        </>
      ),
    },
  ];

  return (
    <section className="relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 reveal">

        {/* Intro (sticky on desktop) */}
        <div className="flex flex-col text-left lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Onboarding &amp; setup</Eyebrow>
          <h2 className="text-[clamp(2rem,3.9vw,2.75rem)] font-heading font-extrabold tracking-[-0.035em] mt-5 mb-5 leading-[1.08] text-text-primary">
            How your team gets on Squeako
          </h2>
          <p className="text-[1.08rem] text-text-secondary leading-relaxed max-w-[440px]">
            No technical support tickets. No installation delays. Five simple steps and your team is fully configured.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative pl-14">
          {/* rail */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px" style={{ background: 'var(--color-border)' }} />
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                {/* node */}
                <div className="absolute -left-14 top-1 w-10 h-10 rounded-full grid place-items-center font-heading font-bold text-[0.9rem] text-white z-10" style={{ background: 'var(--color-primary)', boxShadow: '0 0 0 5px var(--sq-canvas), 0 8px 20px -6px var(--color-primary-wash)' }}>
                  {step.num}
                </div>
                <div className="sq-card sq-card-hover p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-[0.66rem] tracking-[0.1em] uppercase text-primary font-bold">{step.tag}</span>
                    <span className="font-heading text-[0.66rem] tracking-[0.06em] uppercase text-text-muted font-bold">Step {step.num} of 5</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-[1.2rem] text-text-primary mb-1.5">{step.title}</h3>
                  <p className="text-text-secondary text-[0.9rem] leading-relaxed mb-4">{step.desc}</p>
                  <div className="sq-mock p-3.5 text-left">{step.visual}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
