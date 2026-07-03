import React from 'react';

export default function DeviceMockup() {
  return (
    <div className="w-full relative z-1 mt-7 lg:mt-[45px] max-w-[500px] lg:max-w-none mx-auto">
      {/* Floating Elements (Visible on screens above mobile) */}
      <div className="absolute bg-white border border-hairline rounded-[16px] shadow-sh-md p-2 z-10 animate-floaty hidden sm:flex -top-[26px] -left-[30px] items-center gap-2 delay-400">
        <div className="w-8 h-8 rounded-full bg-mint grid place-items-center text-white animate-ring">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[15px] h-[15px]">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <div>
          <b className="font-sora text-[0.76rem] block text-ink">Priya is calling…</b>
          <span className="text-[0.66rem] text-muted">Design sync · Audio</span>
        </div>
      </div>

      <div className="absolute bg-white border border-hairline rounded-[16px] shadow-sh-md p-2 z-10 animate-floaty hidden sm:flex -bottom-[26px] -right-[30px] items-center gap-2 [animation-delay:1.6s]">
        <div className="w-8 h-8 rounded-lg bg-[#E6F9EE] grid place-items-center text-[#16D196] flex-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[15px] h-[15px]">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </div>
        <div>
          <b className="font-sora text-[0.76rem] block text-ink">Standup in 10 min</b>
          <span className="text-[0.66rem] text-muted">Recurring · 10:00 AM</span>
        </div>
      </div>
      {/* Main Device Container */}
      <div className="w-full relative z-2 rounded-[24px] overflow-hidden">
        <img
          src="/home/hero.png"
          alt="Squeako Chat Screenshot"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}
