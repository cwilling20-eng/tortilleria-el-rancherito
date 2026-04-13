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
      <section className="min-h-screen flex items-center justify-center bg-dark px-4 py-12">
        <div className="w-full max-w-lg text-center">
          <div className="mb-6">
            <img
              src="/images/logo.png"
              alt="Tortilleria El Rancherito"
              className="mx-auto h-20 w-auto"
            />
          </div>
          <div className="text-5xl mb-6">🙏</div>
          <h1 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-wide mb-4">
            {t.review.thankYou}
          </h1>
          <p className="text-text-on-dark/80 font-body text-base md:text-lg">
            {t.review.feedbackThankYou}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="mb-6 text-center">
          <img
            src="/images/logo.png"
            alt="Tortilleria El Rancherito"
            className="mx-auto h-20 w-auto"
          />
        </div>

        {/* Empathetic messaging */}
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wide mb-3">
            {t.review.sorryTitle}
          </h1>
          <p className="text-text-on-dark/80 font-body text-sm md:text-base mb-3">
            {t.review.sorrySubtext}
          </p>
          <p className="text-text-on-dark/60 font-body text-xs md:text-sm italic">
            {t.review.managerPromise}
          </p>
        </div>

        <div className="accent-stripe-wide mx-auto mb-8" />

        {/* Feedback form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-body text-sm text-text-on-dark/70 mb-1.5">
              {t.review.fullName} <span className="text-primary">*</span>
            </label>
            <input
              id="name"
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
            <label htmlFor="email" className="block font-body text-sm text-text-on-dark/70 mb-1.5">
              {t.review.emailAddress} <span className="text-primary">*</span>
            </label>
            <input
              id="email"
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
            <label htmlFor="phone" className="block font-body text-sm text-text-on-dark/70 mb-1.5">
              {t.review.phoneOptional}
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg bg-[#2a2a2a] border border-white/10 text-white font-body px-4 py-3 min-h-[48px] focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
              placeholder={t.review.phoneOptional}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-body text-sm text-text-on-dark/70 mb-1.5">
              {t.review.whatWentWrong} <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full rounded-lg bg-[#2a2a2a] border border-white/10 text-white font-body px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-white/30 resize-y"
              placeholder={t.review.whatWentWrong}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400 font-body">{errors.message}</p>
            )}
          </div>

          {/* Error message */}
          {status === 'error' && (
            <div className="rounded-lg bg-red-900/30 border border-red-500/30 p-4">
              <p className="text-red-300 font-body text-sm">{t.review.feedbackError}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full min-h-[56px] rounded-lg bg-primary text-white font-body font-bold text-lg tracking-wide hover:bg-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? t.review.sending : t.review.sendFeedback}
          </button>
        </form>
      </div>
    </section>
  );
}
