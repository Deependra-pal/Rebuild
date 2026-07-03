import React, { useState } from 'react';
import { TOOLS } from '@/config/home';
import { formatCurrency } from '@/lib/utils';

export default function Calculator() {
  const [teamSize, setTeamSize] = useState(20);
  const [selectedTools, setSelectedTools] = useState<string[]>(['Slack', 'Zoom']);

  const handleToolToggle = (name: string) => {
    if (selectedTools.includes(name)) {
      setSelectedTools(selectedTools.filter((t) => t !== name));
    } else {
      setSelectedTools([...selectedTools, name]);
    }
  };

  const activeToolsData = TOOLS.filter((t) => selectedTools.includes(t.name));
  const stackPerUserMonth = activeToolsData.reduce((acc, curr) => acc + curr.price, 0);
  const oldYear = stackPerUserMonth * teamSize * 12;
  const newYear = teamSize * 99 * 12;
  const save = oldYear - newYear;
  const savePct = oldYear > 0 ? Math.round((save / oldYear) * 100) : 0;

  const sliderPct = ((teamSize - 3) / (500 - 3)) * 100;
  const sliderStyle = {
    background: `linear-gradient(90deg, #444D36 0%, #16D196 ${sliderPct}%, #1C3333 ${sliderPct}%)`,
  };

  return (
    <div className="sec">
      <div className="wrap reveal">
        <div className="box box-mint">
          <div className="sec-head">
            <span className="eyebrow">See your savings</span>
            <h2>How much would your team save?</h2>
            <p>Slide to your team size, pick what you use today, and watch the numbers.</p>
          </div>
          <div className="calc-grid">
            <div className="calc-controls">
              <label className="calc-q">Which tools is your team paying for now?</label>
              <p className="calc-sub">Tap everything you use today — chat, video, the lot. We'll add up the stack.</p>
              <div className="tool-grid" id="toolGrid">
                {TOOLS.map((tool) => (
                  <button
                    key={tool.name}
                    type="button"
                    className={`tool-chip ${selectedTools.includes(tool.name) ? 'on' : ''}`}
                    onClick={() => handleToolToggle(tool.name)}
                  >
                    <span className="tlogo" style={{ background: typeof tool.logo === 'string' ? tool.color : 'transparent' }}>{tool.logo}</span>
                    <span className="tmeta">
                      <b>{tool.name}</b>
                      <i>{tool.plan} · ₹{tool.price.toLocaleString('en-IN')}</i>
                    </span>
                    <span className="tcheck">✓</span>
                  </button>
                ))}
              </div>
              <div className="field">
                <label>Team size: <span className="team-out text-[#16D196] font-bold text-[1.15rem] ml-1.5 font-sora" id="teamOut">{teamSize} {teamSize === 1 ? 'person' : 'people'}</span></label>
                <input
                  type="range"
                  id="teamRange"
                  min="3"
                  max="500"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                  style={sliderStyle}
                  className="w-full h-[6px] rounded-lg appearance-none cursor-pointer outline-none transition-all accent-[#16D196] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[26px] [&::-webkit-slider-thumb]:h-[26px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-[#16D196] [&::-webkit-slider-thumb]:shadow-[0_4px_12px_rgba(22,209,150,0.4)] [&::-moz-range-thumb]:w-[22px] [&::-moz-range-thumb]:h-[22px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-[#16D196]"
                />
              </div>
              <p className="calc-note" style={{ textAlign: 'left' }}>Squeako Growth is a flat ₹99/user/month — and it replaces every tool above.</p>
            </div>
            <div className="calc-result">
              <div className="res-lines" id="resLines">
                {selectedTools.length > 0 ? (
                  activeToolsData.map((tool) => (
                    <div className="res-line" key={tool.name}>
                      <span className="rl-name">
                        <i className="rl-dot" style={{ background: tool.color }}></i>
                        {tool.name} <small>{tool.plan}</small>
                      </span>
                      <span className="rl-val">{formatCurrency(tool.price * teamSize * 12)}/yr</span>
                    </div>
                  ))
                ) : (
                  <div className="res-empty">Select the tools your team pays for ↑</div>
                )}
              </div>
              <div className="you-pay tot"><span className="l">Your stack today (per year)</span><span className="v old" id="resOld">{formatCurrency(oldYear)}</span></div>
              <div className="you-pay"><span className="l">With Squeako (per year)</span><span className="v new" id="resNew">{formatCurrency(newYear)}</span></div>
              <div className="save-box">
                <div className="big" id="resSave">{formatCurrency(save > 0 ? save : 0)}</div>
                <div className="sub">saved every year</div>
                <div className="pct" id="resPct">{oldYear > 0 ? `that's ${savePct}% less` : 'pick your tools above'}</div>
              </div>
              <p className="calc-note">Indicative standard-plan prices (per user/month, billed annually, before GST, ~2026). Your actual plans may differ.</p>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '14px' }} data-link>Start saving — free trial</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
