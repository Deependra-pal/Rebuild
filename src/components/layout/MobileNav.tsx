'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../shared/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      id="mobileNav"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className={`fixed inset-0 bg-bg-base/60 backdrop-blur-sm z-[200] transition-opacity duration-200 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div
        className={`absolute top-0 right-0 bottom-0 w-[80vw] max-w-[340px] bg-bg-card border-l border-border p-6 overflow-y-auto transition-transform duration-[250ms] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } text-left`}
      >
        {/* Close Button */}
        <button
          id="mclose"
          aria-label="Close"
          onClick={onClose}
          className="bg-transparent border-0 text-[1.5rem] cursor-pointer float-right text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
        >
          &times;
        </button>
        <div className="clear-both"></div>

        {/* Links Menu Directory */}
        <div className="mt-6 flex flex-col gap-5 text-[0.95rem] font-heading font-semibold text-text-primary">
          <div className="border-b border-border/60 pb-3">
            <Link
              href="/features"
              onClick={handleLinkClick}
              className="block py-1 hover:text-primary transition-colors"
            >
              Features
            </Link>
          </div>
          
          <div className="border-b border-border/60 pb-3">
            <Link
              href="/pricing"
              onClick={handleLinkClick}
              className="block py-1 hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="border-b border-border/60 pb-3 flex flex-col gap-1.5">
            <h6 className="font-heading font-extrabold text-[0.66rem] tracking-[0.1em] uppercase text-text-muted pb-1">
              Solutions
            </h6>
            <div className="flex flex-col gap-2 pl-3 text-[0.88rem] text-text-secondary">
              {['Founders', 'Sales', 'Engineering', 'Agencies'].map((item) => (
                <Link key={item} href="/solutions" onClick={handleLinkClick} className="hover:text-text-primary transition-colors">
                  For {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-b border-border/60 pb-3 flex flex-col gap-1.5">
            <h6 className="font-heading font-extrabold text-[0.66rem] tracking-[0.1em] uppercase text-text-muted pb-1">
              Compare
            </h6>
            <div className="flex flex-col gap-2 pl-3 text-[0.88rem] text-text-secondary">
              {['vs Slack', 'vs MS Teams', 'vs Zoom'].map((item) => (
                <Link key={item} href="/compare" onClick={handleLinkClick} className="hover:text-text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-b border-border/60 pb-3 flex flex-col gap-1.5">
            <h6 className="font-heading font-extrabold text-[0.66rem] tracking-[0.1em] uppercase text-text-muted pb-1">
              Resources
            </h6>
            <div className="flex flex-col gap-2 pl-3 text-[0.88rem] text-text-secondary font-body">
              <Link href="/resources" onClick={handleLinkClick} className="hover:text-text-primary transition-colors font-heading font-semibold">Blog & Guides</Link>
              <Link href="/templates" onClick={handleLinkClick} className="hover:text-text-primary transition-colors font-heading font-semibold">Templates</Link>
              <Link href="/stories" onClick={handleLinkClick} className="hover:text-text-primary transition-colors font-heading font-semibold">Stories</Link>
              <Link href="/enterprise" onClick={handleLinkClick} className="hover:text-text-primary transition-colors font-heading font-semibold">Enterprise</Link>
              <Link href="/roadmap" onClick={handleLinkClick} className="hover:text-text-primary transition-colors font-heading font-semibold">Roadmap</Link>
              <Link href="/security" onClick={handleLinkClick} className="hover:text-text-primary transition-colors font-heading font-semibold">Security</Link>
              <Link href="/download" onClick={handleLinkClick} className="hover:text-text-primary transition-colors font-heading font-semibold">Download Apps</Link>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <Button href="/contact" onClick={handleLinkClick} variant="ghost" size="lg" className="w-full">
            Sign In
          </Button>
          <Button href="/contact" onClick={handleLinkClick} variant="primary" size="lg" className="w-full">
            Start free
          </Button>
        </div>

      </div>
    </div>
  );
}
