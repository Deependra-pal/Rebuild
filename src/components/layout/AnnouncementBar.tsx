'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface AnnouncementBarProps {
  onLinkClick?: () => void;
}

export default function AnnouncementBar({ onLinkClick }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      id="announce"
      className="relative z-[80] text-center py-2.5 px-10 font-heading text-[0.82rem] text-text-secondary"
    >
      <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span
          className="text-[0.62rem] font-bold uppercase tracking-[0.08em] text-primary px-1.5 py-0.5 rounded"
          style={{ background: 'var(--color-primary-wash)' }}
        >
          New
        </span>
        <span>Squeako is now available on Android &amp; iOS.</span>
        <Link
          href="/pricing"
          onClick={onLinkClick}
          className="text-primary font-semibold underline-offset-2 hover:underline whitespace-nowrap"
        >
          Get 3 months free on annual plans &rarr;
        </Link>
      </span>
      <button
        id="announceX"
        aria-label="Dismiss"
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 text-text-muted hover:text-text-primary cursor-pointer text-[1.1rem] leading-none p-1 transition-colors"
      >
        &times;
      </button>
    </div>
  );
}
