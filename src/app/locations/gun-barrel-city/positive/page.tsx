export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PositiveReview from '@/components/review/PositiveReview';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Thank You! | Tortilleria El Rancherito - Gun Barrel City',
  description: 'Thank you for your great experience at Tortilleria El Rancherito in Gun Barrel City. Leave a Google review and get 10% off your next visit.',
  alternates: {
    canonical: `${siteUrl}/locations/gun-barrel-city/positive`,
    languages: {
      en: `${siteUrl}/locations/gun-barrel-city/positive`,
      es: `${siteUrl}/es/locations/gun-barrel-city/positive`,
    },
  },
  robots: { index: false, follow: false },
};

export default function GBCPositivePage() {
  return (
    <>
      <Navbar locale="en" currentPath="/locations/gun-barrel-city/positive" />
      <main id="main-content">
        <PositiveReview locationSlug="gun-barrel-city" locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
