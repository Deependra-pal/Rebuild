import React from 'react';
import Eyebrow from '../shared/Eyebrow';

export default function Testimonials() {
  const testimonials = [
    {
      quote: '"Finally one app instead of four. The team picked it up in a day and the GST invoice was the cherry on top."',
      avatarBg: '#6ED190',
      avatarText: 'VK',
      name: 'Vikram K.',
      role: 'Founder, Saanjh · Jaipur',
    },
    {
      quote: '"Recurring meetings with auto-reminders killed our \'who\'s joining?\' messages. Simple and reliable."',
      avatarBg: '#16D196',
      avatarText: 'NS',
      name: 'Neha S.',
      role: 'HR Lead, Nimbus HR · Noida',
    },
    {
      quote: '"Client rooms with guest access changed how we work with customers. They see only what we share."',
      avatarBg: '#F5B544',
      avatarText: 'TM',
      name: 'Tushar M.',
      role: 'Lead, Bytecrate · Hyderabad',
    },
  ];

  return (
    <div className="py-[13px] px-0">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="bg-gradient-to-br from-[#0C281D] to-[#081814] border border-[#1C3333] rounded-[30px] p-[clamp(34px,5vw,68px)]">
          {/* Head */}
          <div className="max-w-[850px] mx-auto mb-11 text-center">
            <Eyebrow>Loved by founders & ops teams</Eyebrow>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] font-sora font-extrabold mt-3.5 mb-3.5 leading-tight text-ink">
              Why teams switched to Squeako
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white border border-hairline rounded-2xl p-6 flex flex-col gap-3.5 hover:-translate-y-1 hover:shadow-sh-md transition-all duration-200"
              >
                <div className="text-[#F5B544] text-[1.02rem] tracking-[2px]">★★★★★</div>
                <p className="text-[0.95rem] text-ink leading-relaxed flex-1">{test.quote}</p>
                <div className="flex items-center gap-3 pt-3.5 border-t border-paper">
                  <span
                    className="w-[44px] h-[44px] rounded-full grid place-items-center text-white font-sora font-bold text-center flex-none"
                    style={{ backgroundColor: test.avatarBg }}
                  >
                    {test.avatarText}
                  </span>
                  <div>
                    <b className="font-sora font-semibold text-[0.9rem] text-ink block leading-snug">
                      {test.name}
                    </b>
                    <span className="text-[0.8rem] text-muted block mt-0.5">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
