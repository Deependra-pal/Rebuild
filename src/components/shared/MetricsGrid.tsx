 'use client';

import React from 'react';

interface MetricItem {
  count: string;
  suffix: string;
  label: string;
}

interface MetricsGridProps {
  metrics?: MetricItem[];
  className?: string;
}

const DEFAULT_METRICS: MetricItem[] = [
  { count: '12000', suffix: '+', label: 'Indian workspaces' },
  { count: '85', suffix: 'M+', label: 'Messages sent' },
  { count: '4', suffix: 'M+', label: 'Calls completed' },
  { count: '99', suffix: '.99%', label: 'Uptime SLA' },
];

export default function MetricsGrid({ metrics = DEFAULT_METRICS, className = '' }: MetricsGridProps) {
  return (
    <section className={`bg-bg-base py-16 px-6 md:px-8 border-b border-border ${className}`}>
      <div className="max-w-[1200px] mx-auto reveal">
        <div className="bg-bg-card border border-border rounded-xl p-8 lg:p-12 relative overflow-hidden shadow-lg">
          {/* Background decoration */}
          <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-primary-wash/40 blur-[90px] pointer-events-none"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {metrics.map((item, idx) => {
              const parsedVal = parseInt(item.count, 10);
              const isNumeric = !isNaN(parsedVal);
              return (
                <div 
                  key={idx} 
                  className="flex flex-col gap-2.5 text-center lg:text-left lg:border-r lg:border-border/60 last:border-0 pr-4"
                >
                  <div
                    className="font-heading font-extrabold text-[clamp(2rem,4vw,2.8rem)] text-primary leading-none"
                    data-count={isNumeric ? item.count : undefined}
                    data-suffix={isNumeric ? item.suffix : undefined}
                  >
                    {isNumeric ? parsedVal.toLocaleString('en-IN') + item.suffix : item.count}
                  </div>
                  <div className="text-[0.88rem] text-text-secondary font-medium font-body leading-normal">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
