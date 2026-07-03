import React from 'react';

export default function MetricsBand() {
  return (
    <div className="py-20 px-0 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[22px] reveal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 text-center items-center">
          
          <div className="flex flex-col gap-1 text-center border-b border-hairline/50 pb-6 sm:border-b-0 sm:pb-0 sm:border-r sm:border-hairline/50 pr-4">
            <div className="font-sora font-extrabold text-[2.6rem] text-white leading-none animate-pulse-custom" data-count="8000" data-suffix="+">
              0
            </div>
            <div className="text-muted text-[0.92rem] mt-1.5 font-medium">Teams on Squeako</div>
          </div>
          
          <div className="flex flex-col gap-1 text-center border-b border-hairline/50 pb-6 sm:border-b-0 sm:pb-0 lg:border-r lg:border-hairline/50 pr-4">
            <div className="font-sora font-extrabold text-[2.6rem] text-white leading-none" data-count="30" data-suffix="+">
              0
            </div>
            <div className="text-muted text-[0.92rem] mt-1.5 font-medium">Countries</div>
          </div>
          
          <div className="flex flex-col gap-1 text-center border-b border-hairline/50 pb-6 sm:border-b-0 sm:pb-0 sm:border-r sm:border-hairline/50 pr-4">
            <div className="font-sora font-extrabold text-[2.6rem] text-white leading-none" data-count="99" data-suffix=".9%">
              0
            </div>
            <div className="text-muted text-[0.92rem] mt-1.5 font-medium">Uptime</div>
          </div>
          
          <div className="flex flex-col gap-1 text-center pr-4">
            <div className="font-sora font-extrabold text-[2.6rem] text-[#6ED190] leading-none">
              ₹2Cr+
            </div>
            <div className="text-muted text-[0.92rem] mt-1.5 font-medium">Saved by customers / yr</div>
          </div>

        </div>
        <p className="text-center text-[0.82rem] mt-8 text-muted/60">
          Illustrative figures for this prototype.
        </p>
      </div>
    </div>
  );
}
