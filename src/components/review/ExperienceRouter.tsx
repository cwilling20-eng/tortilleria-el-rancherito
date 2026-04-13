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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] via-[#1f1c19] to-[#1A1A1A] px-5 py-16">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="/logos/logo-circle.png"
            alt="Tortilleria El Rancherito"
            className="mx-auto h-28 w-auto drop-shadow-[0_4px_24px_rgba(244,122,31,0.15)]"
          />
        </div>

        {/* Accent stripe */}
        <div className="accent-stripe-wide mx-auto mb-10" />

        {/* Question */}
        <h1 className="font-display text-[1.75rem] leading-tight sm:text-4xl text-primary uppercase tracking-wider mb-12">
          {t.review.experienceTitle}
        </h1>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <Link
            href={`${prefix}/locations/${locationSlug}/positive`}
            className="group relative inline-flex items-center justify-center min-h-[60px] px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-[#e06d1a] text-white font-body font-bold text-lg tracking-wide shadow-[0_4px_20px_rgba(244,122,31,0.3)] hover:shadow-[0_6px_28px_rgba(244,122,31,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {/* Thumbs up icon */}
            <svg className="w-5 h-5 mr-3 flex-shrink-0 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
            {t.review.greatExperience}
          </Link>

          <Link
            href={`${prefix}/locations/${locationSlug}/negative`}
            className="group relative inline-flex items-center justify-center min-h-[60px] px-8 py-4 rounded-xl bg-[#2a2723] border border-white/[0.08] text-text-on-dark/80 font-body font-semibold text-lg tracking-wide hover:bg-[#332f2a] hover:text-text-on-dark hover:border-white/[0.12] active:scale-[0.98] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            {/* Chat bubble icon */}
            <svg className="w-5 h-5 mr-3 flex-shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {t.review.couldBeBetter}
          </Link>
        </div>
      </div>
    </section>
  );
}
