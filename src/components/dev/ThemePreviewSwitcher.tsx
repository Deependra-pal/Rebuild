'use client';

/* ============================================================================
   DEV-ONLY: Premium Theme Preview Switcher
   ----------------------------------------------------------------------------
   Floating control to compare the three design directions live.
   Sets [data-theme] on <html>; toggles a gated [data-theme-anim] flag so the
   450ms cross-fade only runs during a switch. Remove before production.
   ========================================================================== */

import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'nebula' | 'dawn';

const OPTIONS: { id: Theme; label: string; sub: string; swatch: string }[] = [
  { id: 'light', label: 'Light', sub: 'Warm paper', swatch: 'linear-gradient(135deg,#F3F1EA 0%,#2C5FE0 170%)' },
  { id: 'dark', label: 'Dark', sub: 'Graphite', swatch: 'linear-gradient(135deg,#0C0D10 0%,#3D82F0 155%)' },
  { id: 'nebula', label: 'Nebula', sub: 'Midnight · Cyan', swatch: 'linear-gradient(135deg,#0A1020 0%,#5468E8 58%,#47C6DE 120%)' },
  { id: 'dawn', label: 'Dawn', sub: 'Ivory · Plum', swatch: 'linear-gradient(135deg,#F2EADD 0%,#DC9068 52%,#7A5CC8 120%)' },
];

const STORAGE_KEY = 'sq-preview-theme';

export default function ThemePreviewSwitcher() {
  const [theme, setTheme] = useState<Theme>('light');
  const [collapsed, setCollapsed] = useState(false);

  // Hydrate from storage without causing a flash of transition.
  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme) || 'light';
    setTheme(stored);
    document.documentElement.setAttribute('data-theme', stored);
  }, []);

  const apply = (next: Theme) => {
    if (next === theme) return;
    const root = document.documentElement;
    root.setAttribute('data-theme-anim', '');
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
    window.setTimeout(() => root.removeAttribute('data-theme-anim'), 520);
  };

  return (
    <div
      className="fixed top-[76px] right-4 z-[9999] select-none font-sans"
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      <div
        className="rounded-2xl border p-2"
        style={{
          background: 'rgba(12,16,22,0.82)',
          borderColor: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(16px) saturate(160%)',
          WebkitBackdropFilter: 'blur(16px) saturate(160%)',
          boxShadow: '0 20px 50px -18px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
          width: collapsed ? 'auto' : '234px',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-1.5 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#0CE59E', boxShadow: '0 0 8px #0CE59E' }} />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Preview · Dev
            </span>
          </div>
          <button
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? 'Expand theme switcher' : 'Collapse theme switcher'}
            className="grid place-items-center w-5 h-5 rounded-md cursor-pointer border-0"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
          >
            <span className="text-[0.7rem] leading-none">{collapsed ? '▸' : '▾'}</span>
          </button>
        </div>

        {!collapsed && (
          <div className="flex flex-col gap-1">
            {OPTIONS.map((opt) => {
              const active = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => apply(opt.id)}
                  className="group flex items-center gap-2.5 w-full text-left rounded-xl px-2 py-2 cursor-pointer border transition-all duration-200"
                  style={{
                    background: active ? 'rgba(10,132,255,0.16)' : 'transparent',
                    borderColor: active ? 'rgba(10,132,255,0.5)' : 'rgba(255,255,255,0.06)',
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex-none border"
                    style={{ background: opt.swatch, borderColor: 'rgba(255,255,255,0.18)' }}
                  />
                  <span className="flex flex-col min-w-0">
                    <span className="text-[0.82rem] font-semibold leading-tight" style={{ color: active ? '#fff' : 'rgba(255,255,255,0.82)' }}>
                      {opt.label}
                    </span>
                    <span className="text-[0.68rem] leading-tight" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {opt.sub}
                    </span>
                  </span>
                  <span
                    className="ml-auto w-4 h-4 rounded-full flex-none grid place-items-center transition-opacity duration-200"
                    style={{ background: active ? '#0A84FF' : 'transparent', opacity: active ? 1 : 0 }}
                  >
                    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="#fff" strokeWidth="3.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}