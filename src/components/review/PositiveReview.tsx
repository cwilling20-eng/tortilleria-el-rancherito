'use client';

import { useState, FormEvent } from 'react';
import { Locale, getTranslations } from '@/lib/translations';
import { locations } from '@/data/site-data';
import DiscountCodeDisplay from './DiscountCodeDisplay';

interface PositiveReviewProps {
  locationSlug: string;
  locale: Locale;
}

interface FormErrors {
  name?: string;
  email?: string;
}

export default function PositiveReview({ locationSlug, locale }: PositiveReviewProps) {
  const t = getTranslations(locale);
  const location = locations[locationSlug];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = t.review.nameRequired;
    if (!email.trim()) {
      newErrors.email = t.review.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t.review.emailInvalid;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Open Google Review URL in a new tab immediately
    window.open(location.googleReviewUrl, '_blank', 'noopener,noreferrer');

    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          happy: true,
          customer_name: name.trim(),
          customer_email: email.trim(),
          customer_phone: phone.trim() || undefined,
          location: locationSlug,
          client_id: location.clientId,
        }),
      });
      // Show discount regardless of API result — the review link already opened
      setStatus('success');
    } catch {
      // Still show discount — the Google review tab already opened
      setStatus('success');
    }
  }

  // After submit: show discount code and thank-you
  if (status === 'success') {
    return (
      <section className="min-h-screen flex items-center justify-center bg-dark px-4 py-12">
        <div className="w-full max-w-lg">
          {/* Logo */}
          <div className="mb-8 text-center">
            <img
              src="/images/logo.png"
              alt="Tortilleria El Rancherito"
              className="mx-auto h-20 w-auto"
            />
          </div>

          {/* Success icon */}
          <div className="text-center mb-3">
            <span className="text-5xl" role="img" aria-label="celebration">🎉</span>
          </div>

          {/* Thank you message */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wide mb-3">
              {t.review.positiveSubmitted}
            </h1>
            <p className="text-text-on-dark/70 font-body text-sm md:text-base">
              {t.review.positiveSubmittedSubtext}
            </p>
          </div>

          {/* Accent stripe divider */}
          <div className="accent-stripe-wide mx-auto mb-8" />

          {/* Discount code card */}
          <DiscountCodeDisplay locale={locale} />
        </div>
      </section>
    );
  }

  // Before submit: contact form
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src="/images/logo.png"
            alt="Tortilleria El Rancherito"
            className="mx-auto h-20 w-auto"
          />
        </div>

        {/* Warm heading */}
        <div className="text-center mb-3">
          <span className="text-5xl" role="img" aria-label="happy">😊</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wide mb-2">
            {t.review.positiveTitle}
          </h1>
          <p className="text-text-on-dark/70 font-body text-sm md:text-base">
            {t.review.positiveSubtext}
          </p>
        </div>

        {/* Accent stripe divider */}
        <div className="accent-stripe-wide mx-auto mb-8" />

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="pos-name" className="block font-body text-sm text-text-on-dark/70 mb-1.5">
              {t.review.fullName} <span className="text-primary">*</span>
            </label>
            <input
              id="pos-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-[#2a2a2a] border border-white/10 text-white font-body px-4 py-3 min-h-[48px] focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
              placeholder={t.review.fullName}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400 font-body">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="pos-email" className="block font-body text-sm text-text-on-dark/70 mb-1.5">
              {t.review.emailAddress} <span className="text-primary">*</span>
            </label>
            <input
              id="pos-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-[#2a2a2a] border border-white/10 text-white font-body px-4 py-3 min-h-[48px] focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
              placeholder={t.review.emailAddress}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400 font-body">{errors.email}</p>
            )}
          </div>

          {/* Phone (optional) */}
          <div>
            <label htmlFor="pos-phone" className="block font-body text-sm text-text-on-dark/70 mb-1.5">
              {t.review.phoneOptional}
            </label>
            <input
              id="pos-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg bg-[#2a2a2a] border border-white/10 text-white font-body px-4 py-3 min-h-[48px] focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
              placeholder={t.review.phoneOptional}
            />
          </div>

          {/* Error message */}
          {status === 'error' && (
            <div className="rounded-lg bg-red-900/30 border border-red-500/30 p-4">
              <p className="text-red-300 font-body text-sm">{t.review.feedbackError}</p>
            </div>
          )}

          {/* Submit button with Google icon */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center w-full min-h-[56px] rounded-lg bg-primary text-white font-body font-bold text-lg tracking-wide hover:bg-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
          >
            <svg className="w-5 h-5 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            {status === 'sending' ? t.review.sending : t.review.positiveSubmitButton}
          </button>

          <p className="text-text-on-dark/50 font-body text-xs text-center">
            {t.review.positiveDisclaimer}
          </p>
        </form>
      </div>
    </section>
  );
}
