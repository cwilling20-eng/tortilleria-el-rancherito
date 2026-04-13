'use client';

import { Locale, getTranslations } from '@/lib/translations';

interface DiscountCodeDisplayProps {
  locale: Locale;
}

export default function DiscountCodeDisplay({ locale }: DiscountCodeDisplayProps) {
  const t = getTranslations(locale);

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30);
  const formattedExpiry = expiryDate.toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a2723] to-[#1f1c19] border border-primary/15 p-7 sm:p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      {/* Subtle corner glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/[0.06] rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/[0.04] rounded-full blur-2xl pointer-events-none" />

      {/* Gift icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
      </div>

      <h2 className="relative font-display text-xl sm:text-2xl text-primary uppercase tracking-wider mb-5">
        {t.review.discountTitle}
      </h2>

      {/* Discount code with premium styling */}
      <div className="relative inline-block rounded-xl bg-[#1A1A1A] border-2 border-dashed border-primary/40 px-8 sm:px-10 py-5 mb-5">
        <span className="font-display text-4xl sm:text-5xl text-white tracking-[0.2em]">
          REVIEW10
        </span>
      </div>

      <p className="relative text-text-on-dark/60 font-body text-sm leading-relaxed mb-2">
        {t.review.discountInstruction}
      </p>
      <p className="relative text-text-on-dark/35 font-body text-xs">
        {t.review.discountExpiry} &middot; {t.review.expiresOn} {formattedExpiry}
      </p>
    </div>
  );
}
