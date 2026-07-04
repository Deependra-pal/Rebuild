import { Eyebrow } from '../shared/Section';
import FaqItem from '../shared/FaqItem';

const faqs = [
  { q: 'Is Squeako really cheaper than Slack or Teams?', a: 'Yes. Squeako\'s Growth plan is ₹99 per user per month. Comparable Slack and Microsoft 365 plans run from ₹250 to ₹750 — and bill in dollars without a GST invoice. Most teams save 60–70%.' },
  { q: 'Can clients and guests join my workspace?', a: 'Yes. Invite clients and guests into specific groups, so they only see the conversations you choose to share. Your internal channels stay private.' },
  { q: 'Where is my data stored?', a: 'In Indian data centres, aligned with India\'s DPDP Act. You always know where your team\'s conversations live, and you get a GST invoice in INR.' },
  { q: 'Do I need a technical team to set it up?', a: 'No. Create a workspace and invite your team over email or WhatsApp in minutes. Most teams are up and running the same day.' },
  { q: 'Will you help us move from Slack or Teams?', a: 'Yes. Our team helps you set up groups, invite everyone and get going. Book a switch call and we\'ll guide you through it.' },
  { q: 'How do I pay, and is there a lock-in?', a: 'Pay by UPI, net banking, debit or credit card — monthly or annually. No lock-in; upgrade, downgrade or cancel anytime.' },
];

export default function FaqTeaser() {
  return (
    <section className="relative px-6 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start reveal">
        {/* editorial head */}
        <div className="lg:sticky lg:top-28 text-left">
          <Eyebrow>Questions, answered</Eyebrow>
          <h2 className="text-[clamp(1.95rem,4vw,2.75rem)] font-heading font-extrabold tracking-[-0.035em] mt-5 leading-[1.06] text-text-primary">
            Frequently asked
          </h2>
        </div>

        {/* accordion */}
        <div className="w-full flex flex-col gap-3.5">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
