'use client';

import Link from 'next/link';
import { Locale, getTranslations } from '@/lib/translations';

interface ExperienceRouterProps {
  locationSlug: string;
  locale: Locale;
}

export default function ExperienceRouter({ locationSlug, locale }: ExperienceRouterProps) {
  const t = getTranslations(locale);
  const prefix = locale === 'es' ? '/es' : '';

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/images/logo.png"
            alt="Tortilleria El Rancherito"
            className="mx-auto h-24 w-auto"
          />
        </div>

        {/* Accent stripe */}
        <div className="accent-stripe-wide mx-auto mb-8" />

        {/* Question */}
        <h1 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wide mb-4 leading-tight">
          {t.review.experienceTitle}
        </h1>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`${prefix}/locations/${locationSlug}/positive`}
            className="inline-flex items-center justify-center min-h-[56px] px-8 py-4 rounded-lg bg-primary text-white font-body font-bold text-lg tracking-wide hover:bg-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t.review.greatExperience}
          </Link>
          <Link
            href={`${prefix}/locations/${locationSlug}/negative`}
            className="inline-flex items-center justify-center min-h-[56px] px-8 py-4 rounded-lg bg-[#3a3a3a] text-text-on-dark font-body font-semibold text-lg tracking-wide hover:bg-[#4a4a4a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            {t.review.couldBeBetter}
          </Link>
        </div>
      </div>
    </section>
  );
}
