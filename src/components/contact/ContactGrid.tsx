'use client';

import React, { useState } from 'react';
import Button from '../shared/Button';

export default function ContactGrid() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    intent: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    company: false,
    size: false,
    intent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim()),
      company: !formData.company.trim(),
      size: !formData.size,
      intent: !formData.intent,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (!hasErrors) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-bg-base py-20 px-6 md:px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Core Timetable Info */}
          <div className="text-left flex flex-col gap-8">
            <div>
              <h2 className="text-[clamp(1.6rem,3.2vw,2.2rem)] font-heading font-extrabold text-text-primary mb-4">
                Reach out to Squeako
              </h2>
              <p className="text-text-secondary font-body text-[1.02rem] leading-relaxed max-w-[480px]">
                Whether you are coordinating a 10-person operation or migrating a 200-person workspace, Squeako has onboarding specialists ready to assist.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded bg-primary-wash text-primary flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <b className="font-heading font-extrabold text-[0.92rem] block text-text-primary">Email Support</b>
                  <span className="text-text-secondary text-[0.84rem] font-body block mt-0.5">hello@squeako.app</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded bg-primary-wash text-primary flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                  </svg>
                </div>
                <div>
                  <b className="font-heading font-extrabold text-[0.92rem] block text-text-primary">WhatsApp Onboarding</b>
                  <span className="text-text-secondary text-[0.84rem] font-body block mt-0.5">Mon–Sat, 10 AM – 7 PM IST</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded bg-primary-wash text-primary flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <b className="font-heading font-extrabold text-[0.92rem] block text-text-primary">Based in Mumbai, India</b>
                  <span className="text-text-secondary text-[0.84rem] font-body block mt-0.5">Providing DPDP residency compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Box */}
          <div className="bg-bg-card border border-border rounded-xl p-6 lg:p-10 shadow-lg w-full text-left">
            {!submitted ? (
              <form id="leadForm" onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-bold text-[0.82rem] mb-2 text-text-primary">Full name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full py-3 px-4 rounded-lg border font-body text-[0.92rem] text-text-primary bg-bg-surface outline-none transition-all focus:border-primary focus:shadow-focus ${
                        errors.name ? 'border-error' : 'border-border'
                      }`}
                    />
                    {errors.name && <div className="text-error text-[0.76rem] mt-1 font-body">Please enter your name</div>}
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-[0.82rem] mb-2 text-text-primary">Work email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full py-3 px-4 rounded-lg border font-body text-[0.92rem] text-text-primary bg-bg-surface outline-none transition-all focus:border-primary focus:shadow-focus ${
                        errors.email ? 'border-error' : 'border-border'
                      }`}
                    />
                    {errors.email && <div className="text-error text-[0.76rem] mt-1 font-body">Enter a valid email address</div>}
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-[0.82rem] mb-2 text-text-primary">Company name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full py-3 px-4 rounded-lg border font-body text-[0.92rem] text-text-primary bg-bg-surface outline-none transition-all focus:border-primary focus:shadow-focus ${
                      errors.company ? 'border-error' : 'border-border'
                    }`}
                  />
                  {errors.company && <div className="text-error text-[0.76rem] mt-1 font-body">Please enter your company name</div>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-bold text-[0.82rem] mb-2 text-text-primary">Team size</label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className={`w-full py-3 px-4 rounded-lg border font-body text-[0.92rem] text-text-primary bg-bg-surface outline-none transition-all focus:border-primary focus:shadow-focus appearance-none ${
                        errors.size ? 'border-error' : 'border-border'
                      }`}
                    >
                      <option value="">Select…</option>
                      <option value="1-10">1–10 members</option>
                      <option value="11-50">11–50 members</option>
                      <option value="51-200">51–200 members</option>
                      <option value="200+">200+ members</option>
                    </select>
                    {errors.size && <div className="text-error text-[0.76rem] mt-1 font-body">Select your team range</div>}
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-[0.82rem] mb-2 text-text-primary">I'm interested in</label>
                    <select
                      name="intent"
                      value={formData.intent}
                      onChange={handleInputChange}
                      className={`w-full py-3 px-4 rounded-lg border font-body text-[0.92rem] text-text-primary bg-bg-surface outline-none transition-all focus:border-primary focus:shadow-focus appearance-none ${
                        errors.intent ? 'border-error' : 'border-border'
                      }`}
                    >
                      <option value="">Select…</option>
                      <option value="Starting a free trial">Starting a free trial</option>
                      <option value="Booking a demo">Booking a 1:1 demo</option>
                      <option value="Switching from Slack/Teams">Switching from Slack/Teams</option>
                      <option value="Enterprise pricing">Enterprise pricing SLA</option>
                    </select>
                    {errors.intent && <div className="text-error text-[0.76rem] mt-1 font-body">Select an option</div>}
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-[0.82rem] mb-2 text-text-primary">Operational notes (optional)</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your team setup or migration requirements…"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 rounded-lg border border-border font-body text-[0.92rem] text-text-primary bg-bg-surface outline-none transition-all focus:border-primary focus:shadow-focus resize-none min-h-[90px]"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full !bg-primary hover:!bg-primary-hover active:!bg-primary-active !text-white !shadow-sm hover:!shadow-focus mt-2">
                  Get Started &rarr;
                </Button>
                
                <p className="text-center text-[0.74rem] text-text-secondary mt-2 font-body">
                  By submitting, you agree Squeako may reach out via email. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="text-center py-10 px-4 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-success/10 text-success flex items-center justify-center font-heading font-bold text-[1.4rem] mb-4">
                  ✓
                </div>
                <h3 className="font-heading font-extrabold text-[1.3rem] text-text-primary mb-2">Workspace requested! 🎉</h3>
                <p className="text-text-secondary text-[0.88rem] leading-relaxed font-body max-w-[340px]">
                  Thank you for reaching out. An onboarding specialist will contact you within one business day.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
