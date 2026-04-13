export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import NegativeFeedback from '@/components/review/NegativeFeedback';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Share Your Feedback | Tortilleria El Rancherito - Gun Barrel City',
  description: 'We want to hear from you. Share your feedback about your experience at Tortilleria El Rancherito in Gun Barrel City, TX.',
  alternates: {
    canonical: `${siteUrl}/locations/gun-barrel-city/negative`,
    languages: {
      en: `${siteUrl}/locations/gun-barrel-city/negative`,
      es: `${siteUrl}/es/locations/gun-barrel-city/negative`,
    },
  },
  robots: { index: false, follow: false },
};

export default function GBCNegativePage() {
  return (
    <>
      <Navbar locale="en" currentPath="/locations/gun-barrel-city/negative" />
      <main id="main-content">
        <NegativeFeedback locationSlug="gun-barrel-city" locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
