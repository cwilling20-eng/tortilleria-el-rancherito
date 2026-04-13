export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import NegativeFeedback from '@/components/review/NegativeFeedback';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Share Your Feedback | Tortilleria El Rancherito - Red Oak',
  description: 'We want to hear from you. Share your feedback about your experience at Tortilleria El Rancherito in Red Oak, TX.',
  alternates: {
    canonical: `${siteUrl}/locations/red-oak/negative`,
    languages: {
      en: `${siteUrl}/locations/red-oak/negative`,
      es: `${siteUrl}/es/locations/red-oak/negative`,
    },
  },
  robots: { index: false, follow: false },
};

export default function RedOakNegativePage() {
  return (
    <>
      <Navbar locale="en" currentPath="/locations/red-oak/negative" />
      <main id="main-content">
        <NegativeFeedback locationSlug="red-oak" locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
