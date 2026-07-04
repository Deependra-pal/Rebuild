'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AnnouncementBar from './AnnouncementBar';
import MobileNav from './MobileNav';
import Button from '../shared/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
        setOpenMega(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleMegaToggle = (menuName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenMega(openMega === menuName ? null : menuName);
  };

  const handleMouseEnter = (menuName: string) => {
    if (window.innerWidth > 1024) {
      setOpenMega(menuName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setOpenMega(null);
    }
  };

  const handleLinkClick = () => {
    setIsMobileOpen(false);
    setOpenMega(null);
  };

  return (
    <>
      <AnnouncementBar onLinkClick={handleLinkClick} />

      <nav
        ref={navbarRef}
        className={`sq-nav sticky top-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'sq-nav-scrolled' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-3.5 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick} className="sq-logo flex items-center shrink-0">
            <img
              src="/logo/1782391827071-a1ef33c7-4e28-4178-ae95-96525ad734f0.png" 
              alt="Squeako Logo" 
              className="w-[145px] h-[44px] object-contain scale-[1.5]" 
            />
          </Link>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center gap-1.5 ml-4">
            
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('product')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleMegaToggle('product', e)}
                className={`inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full font-heading font-semibold text-[0.88rem] border-0 cursor-pointer transition-all ${
                  openMega === 'product' 
                    ? 'bg-bg-hover text-text-primary' 
                    : 'bg-transparent text-text-secondary hover:bg-hover-overlay hover:text-text-primary'
                }`}
              >
                Product
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMega === 'product' ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-[calc(100%+8px)] left-0 w-[820px] bg-bg-card border border-border rounded-xl shadow-lg py-5 px-6 transition-all duration-200 z-[99] ${
                  openMega === 'product'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-1.5 pointer-events-none'
                }`}
              >
                {/* Hover Bridge */}
                <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent" />
                <div className="grid grid-cols-[1fr_1fr_1fr_1.1fr] gap-5 text-left mb-5">
                  {/* Communicate */}
                  <div>
                    <h6 className="font-heading font-extrabold text-[0.68rem] tracking-[0.1em] uppercase text-text-muted mb-3">Communicate</h6>
                    <div className="flex flex-col gap-1">
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">💬</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Chat & channels</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">1:1, groups & threads</span>
                        </div>
                      </Link>
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">🎙️</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Voice & video messages</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">Async updates</span>
                        </div>
                      </Link>
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">🔍</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Search</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">Find anything, fast</span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Meet */}
                  <div>
                    <h6 className="font-heading font-extrabold text-[0.68rem] tracking-[0.1em] uppercase text-text-muted mb-3">Meet</h6>
                    <div className="flex flex-col gap-1">
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">📹</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Audio & video calls</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">With screen share</span>
                        </div>
                      </Link>
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">📅</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Meetings & reminders</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">Recurring too</span>
                        </div>
                      </Link>
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">🖥️</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Recording</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">Recap & transcripts</span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Organize */}
                  <div>
                    <h6 className="font-heading font-extrabold text-[0.68rem] tracking-[0.1em] uppercase text-text-muted mb-3">Organise</h6>
                    <div className="flex flex-col gap-1">
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">✅</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Tasks & to-dos</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">From any message</span>
                        </div>
                      </Link>
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">🕒</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Presence & status</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">Incl. on-break</span>
                        </div>
                      </Link>
                      <Link className="flex gap-3 items-start py-1.5 px-2 rounded-lg hover:bg-hover-overlay transition-colors" href="/features" onClick={handleLinkClick}>
                        <span className="w-7 h-7 rounded bg-bg-surface text-text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold">📊</span>
                        <div>
                          <b className="font-heading font-bold text-[0.84rem] block leading-tight text-text-primary">Org hierarchy</b>
                          <span className="text-[0.72rem] text-text-secondary block mt-0.5 font-body">Live reporting chart</span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Security & Trust */}
                  <div>
                    <h6 className="font-heading font-extrabold text-[0.68rem] tracking-[0.1em] uppercase text-text-muted mb-2.5">Security & Trust</h6>
                    <div className="flex items-center gap-1.5">
                      <img 
                        src="/trusted-icons/Mask-group-5.webp" 
                        alt="SOC 2" 
                        className="w-[38px] h-[38px] object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200" 
                      />
                      <img 
                        src="/trusted-icons/Mask-group-6.webp" 
                        alt="VPAT Compliance" 
                        className="w-[38px] h-[38px] object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200" 
                      />
                      <img 
                        src="/trusted-icons/Mask-group.webp" 
                        alt="DPDP Act" 
                        className="w-[38px] h-[38px] object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200" 
                      />
                      <img 
                        src="/trusted-icons/Mask-group-1.webp" 
                        alt="GDPR" 
                        className="w-[38px] h-[38px] object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200" 
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Client & guest access */}
                <div className="bg-bg-surface/60 border border-border/80 rounded-lg py-4 px-5 mb-4 text-left">
                  <b className="font-heading font-bold text-[0.92rem] text-text-primary block mb-1">Client & guest access</b>
                  <span className="text-[0.78rem] text-text-secondary font-body leading-normal block">
                    Invite clients into specific groups &mdash; they only see what you share.
                  </span>
                </div>

                {/* Footer Link */}
                <div className="text-left pl-1">
                  <Link href="/features" onClick={handleLinkClick} className="text-text-primary font-heading font-bold text-[0.84rem] hover:underline flex items-center gap-1.5">
                    See all features &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleMegaToggle('solutions', e)}
                className={`inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full font-heading font-semibold text-[0.88rem] border-0 cursor-pointer transition-all ${
                  openMega === 'solutions' 
                    ? 'bg-bg-hover text-text-primary' 
                    : 'bg-transparent text-text-secondary hover:bg-hover-overlay hover:text-text-primary'
                }`}
              >
                Solutions
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMega === 'solutions' ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-[calc(100%+8px)] left-0 w-[420px] bg-bg-card border border-border rounded-xl shadow-lg p-5 transition-all duration-200 z-[99] ${
                  openMega === 'solutions'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-1.5 pointer-events-none'
                }`}
              >
                {/* Hover Bridge */}
                <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent" />
                <div className="grid grid-cols-2 gap-5 text-left">
                  <div>
                    <h6 className="font-heading font-extrabold text-[0.66rem] tracking-[0.1em] uppercase text-text-muted mb-2">By Team</h6>
                    <div className="flex flex-col gap-1 text-[0.82rem] text-text-secondary">
                      {['Founders', 'Sales', 'Engineering', 'HR & Ops'].map((item) => (
                        <Link key={item} href="/solutions" onClick={handleLinkClick} className="py-1 px-1.5 rounded hover:bg-hover-overlay hover:text-text-primary block">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h6 className="font-heading font-extrabold text-[0.66rem] tracking-[0.1em] uppercase text-text-muted mb-2">By Industry</h6>
                    <div className="flex flex-col gap-1 text-[0.82rem] text-text-secondary">
                      {['IT & Software', 'D2C & Retail', 'Fintech', 'Agencies'].map((item) => (
                        <Link key={item} href="/solutions" onClick={handleLinkClick} className="py-1 px-1.5 rounded hover:bg-hover-overlay hover:text-text-primary block">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              onClick={handleLinkClick}
              className="py-1.5 px-3.5 rounded-full font-heading font-semibold text-[0.88rem] text-text-secondary hover:bg-hover-overlay hover:text-text-primary transition-all"
            >
              Pricing
            </Link>

            {/* Compare Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('compare')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleMegaToggle('compare', e)}
                className={`inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full font-heading font-semibold text-[0.88rem] border-0 cursor-pointer transition-all ${
                  openMega === 'compare' 
                    ? 'bg-bg-hover text-text-primary' 
                    : 'bg-transparent text-text-secondary hover:bg-hover-overlay hover:text-text-primary'
                }`}
              >
                Compare
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMega === 'compare' ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-[calc(100%+8px)] left-0 w-[200px] bg-bg-card border border-border rounded-xl shadow-lg p-4 transition-all duration-200 z-[99] ${
                  openMega === 'compare'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-1.5 pointer-events-none'
                }`}
              >
                <div className="flex flex-col gap-1.5 text-left text-[0.82rem] text-text-secondary">
                  {['vs Slack', 'vs MS Teams', 'vs Flock', 'vs Zoom'].map((item) => (
                    <Link key={item} href="/compare" onClick={handleLinkClick} className="py-1 px-2 rounded hover:bg-hover-overlay hover:text-text-primary block font-medium">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => handleMegaToggle('resources', e)}
                className={`inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full font-heading font-semibold text-[0.88rem] border-0 cursor-pointer transition-all ${
                  openMega === 'resources' 
                    ? 'bg-bg-hover text-text-primary' 
                    : 'bg-transparent text-text-secondary hover:bg-hover-overlay hover:text-text-primary'
                }`}
              >
                Resources
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMega === 'resources' ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-[calc(100%+8px)] left-0 w-[220px] bg-bg-card border border-border rounded-xl shadow-lg p-4 transition-all duration-200 z-[99] ${
                  openMega === 'resources'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-1.5 pointer-events-none'
                }`}
              >
                <div className="flex flex-col gap-1.5 text-left text-[0.82rem] text-text-secondary">
                  {[
                    { name: 'Blog & Guides', path: '/resources' },
                    { name: 'Templates', path: '/templates' },
                    { name: 'Customer Stories', path: '/stories' },
                    { name: 'Enterprise Plan', path: '/enterprise' },
                    { name: 'Roadmap & Updates', path: '/roadmap' },
                    { name: 'Security Hub', path: '/security' },
                    { name: 'Download Apps', path: '/download' },
                  ].map((item) => (
                    <Link key={item.name} href={item.path} onClick={handleLinkClick} className="py-1 px-2 rounded hover:bg-hover-overlay hover:text-text-primary block font-medium">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Action buttons */}
          <div className="ml-auto flex items-center gap-3 shrink-0">
            <Link href="/contact" onClick={handleLinkClick} className="font-heading font-semibold text-[0.88rem] text-text-secondary hover:text-text-primary hover:bg-hover-overlay py-1.5 px-4 rounded-full transition-all hidden lg:inline-block">
              Sign In
            </Link>
            <Button href="/contact" onClick={handleLinkClick} variant="primary" size="sm">
              Start free
            </Button>
            
            {/* Hamburger Button */}
            <button
              id="hamburger"
              aria-label="Menu"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1.5 z-[201] focus:outline-none"
            >
              <span className={`w-5.5 h-[2px] bg-text-primary rounded-full transition-transform duration-200 ${isMobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
              <span className={`w-5.5 h-[2px] bg-text-primary rounded-full transition-opacity duration-200 ${isMobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5.5 h-[2px] bg-text-primary rounded-full transition-transform duration-200 ${isMobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
