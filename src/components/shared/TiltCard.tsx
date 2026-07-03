'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({ children, className = '', maxTilt = 8 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const dx = x - xc;
    const dy = y - yc;

    const rotateX = -(dy / yc) * maxTilt;
    const rotateY = (dx / xc) * maxTilt;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      ease: 'power3.out',
      duration: 0.35,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      ease: 'power3.out',
      duration: 0.5,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
