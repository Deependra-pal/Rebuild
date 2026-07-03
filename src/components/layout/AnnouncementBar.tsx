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
      className="bg-primary text-bg-base text-[0.84rem] text-center py-2 px-10 relative font-heading font-semibold z-[101]"
    >
      <span>New</span> — Squeako is now available on Android & iOS.
      <Link
        href="/pricing"
        onClick={onLinkClick}
        className="font-extrabold underline underline-offset-2 ml-1.5 whitespace-nowrap"
      >
        Get 3 months free on annual plans &rarr;
      </Link>
      <button
        id="announceX"
        aria-label="Dismiss"
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 text-bg-base/70 hover:text-bg-base cursor-pointer text-[1.1rem] leading-none p-1 transition-colors"
      >
        &times;
      </button>
    </div>
  );
}
