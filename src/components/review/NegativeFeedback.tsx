'use client';

import { useState, FormEvent } from 'react';
import { Locale, getTranslations } from '@/lib/translations';
import { locations } from '@/data/site-data';

interface NegativeFeedbackProps {
  locationSlug: string;
  locale: Locale;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function NegativeFeedback({ locationSlug, locale }: NegativeFeedbackProps) {
  const t = getTranslations(locale);
  const location = locations[locationSlug];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
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
    if (!message.trim()) newErrors.message = t.review.messageRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: name.trim(),
          customer_email: email.trim(),
          customer_phone: phone.trim() || undefined,
          feedback_message: message.trim(),
          location: locationSlug,
          client_id: location.clientId,
        }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] via-[#1f1c19] to-[#1A1A1A] px-5 py-16">
        <div className="w-full max-w-md text-center">
          {/* Logo */}
          <div className="mb-10">
            <img
              src="/logos/logo-circle.png"
              alt="Tortilleria El Rancherito"
              className="mx-auto h-24 w-auto drop-shadow-[0_4px_24px_rgba(244,122,31,0.15)]"
            />
          </div>

          {/* Heart icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          <h1 className="font-display text-[1.75rem] sm:text-3xl text-primary uppercase tracking-wider mb-4">
            {t.review.thankYou}
          </h1>
          <p className="text-text-on-dark/60 font-body text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            {t.review.feedbackThankYou}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] via-[#1f1c19] to-[#1A1A1A] px-5 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-10 text-center">
          <img
            src="/logos/logo-circle.png"
            alt="Tortilleria El Rancherito"
            className="mx-auto h-24 w-auto drop-shadow-[0_4px_24px_rgba(244,122,31,0.15)]"
          />
        </div>

        {/* Empathetic messaging with icon */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>

        <div className="text-center mb-4">
          <h1 className="font-display text-[1.75rem] sm:text-4xl text-primary uppercase tracking-wider mb-3">
            {t.review.sorryTitle}
          </h1>
          <p className="text-text-on-dark/60 font-body text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-3">
            {t.review.sorrySubtext}
          </p>
          <p className="text-text-on-dark/40 font-body text-xs sm:text-sm italic">
            {t.review.managerPromise}
          </p>
        </div>

        <div className="accent-stripe-wide mx-auto mb-8" />

        {/* Feedback form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-body text-sm font-medium text-text-on-dark/60 mb-2 tracking-wide uppercase">
              {t.review.fullName} <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-[#242220] border border-white/[0.06] text-white font-body px-4 py-3.5 min-h-[52px] focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 focus:bg-[#2a2724] transition-all duration-200 placeholder:text-white/20"
              placeholder={t.review.fullName}
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-red-400 font-body">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-body text-sm font-medium text-text-on-dark/60 mb-2 tracking-wide uppercase">
              {t.review.emailAddress} <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-[#242220] border border-white/[0.06] text-white font-body px-4 py-3.5 min-h-[52px] focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 focus:bg-[#2a2724] transition-all duration-200 placeholder:text-white/20"
              placeholder={t.review.emailAddress}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-400 font-body">{errors.email}</p>
            )}
          </div>

          {/* Phone (optional) */}
          <div>
            <label htmlFor="phone" className="block font-body text-sm font-medium text-text-on-dark/60 mb-2 tracking-wide uppercase">
              {t.review.phoneOptional}
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl bg-[#242220] border border-white/[0.06] text-white font-body px-4 py-3.5 min-h-[52px] focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 focus:bg-[#2a2724] transition-all duration-200 placeholder:text-white/20"
              placeholder={t.review.phoneOptional}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-body text-sm font-medium text-text-on-dark/60 mb-2 tracking-wide uppercase">
              {t.review.whatWentWrong} <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full rounded-xl bg-[#242220] border border-white/[0.06] text-white font-body px-4 py-3.5 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 focus:bg-[#2a2724] transition-all duration-200 placeholder:text-white/20 resize-y"
              placeholder={t.review.whatWentWrong}
            />
            {errors.message && (
              <p className="mt-1.5 text-sm text-red-400 font-body">{errors.message}</p>
            )}
          </div>

          {/* Error message */}
          {status === 'error' && (
            <div className="rounded-xl bg-red-900/20 border border-red-500/20 p-4">
              <p className="text-red-300 font-body text-sm">{t.review.feedbackError}</p>
            </div>
          )}

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full min-h-[60px] rounded-xl bg-gradient-to-r from-primary to-[#e06d1a] text-white font-body font-bold text-lg tracking-wide shadow-[0_4px_20px_rgba(244,122,31,0.3)] hover:shadow-[0_6px_28px_rgba(244,122,31,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'sending' ? t.review.sending : t.review.sendFeedback}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
