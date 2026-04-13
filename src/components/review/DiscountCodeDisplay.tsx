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
    <div className="bg-[#2a2a2a] rounded-xl border border-primary/20 p-6 md:p-8 text-center">
      <h2 className="font-display text-xl md:text-2xl text-primary uppercase tracking-wide mb-4">
        {t.review.discountTitle}
      </h2>

      {/* Discount code */}
      <div className="inline-block bg-dark rounded-lg border-2 border-dashed border-primary px-8 py-4 mb-4">
        <span className="font-display text-4xl md:text-5xl text-white tracking-widest">
          REVIEW10
        </span>
      </div>

      <p className="text-text-on-dark/80 font-body text-sm md:text-base mb-2">
        {t.review.discountInstruction}
      </p>
      <p className="text-text-on-dark/60 font-body text-sm">
        {t.review.discountExpiry} &middot; {t.review.expiresOn} {formattedExpiry}
      </p>
    </div>
  );
}
