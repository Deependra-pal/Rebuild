'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface ArrowButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

/* Filled CTA with a subtle GSAP arrow slide on hover.
   The button itself never moves/scales — only the arrow glyph eases right. */
export default function ArrowButton({ href, className = '', children, onClick }: ArrowButtonProps) {
  const arrowRef = useRef<SVGSVGElement>(null);

  const slide = (x: number) => {
    if (!arrowRef.current) return;
    gsap.to(arrowRef.current, { x, duration: 0.32, ease: 'power2.out', overwrite: 'auto' });
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      onMouseEnter={() => slide(5)}
      onMouseLeave={() => slide(0)}
    >
      {children}
      <svg
        ref={arrowRef}
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}
