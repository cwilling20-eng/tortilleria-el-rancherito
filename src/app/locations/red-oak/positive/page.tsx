export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PositiveReview from '@/components/review/PositiveReview';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Thank You! | Tortilleria El Rancherito - Red Oak',
  description: 'Thank you for your great experience at Tortilleria El Rancherito in Red Oak. Leave a Google review and get 10% off your next visit.',
  alternates: {
    canonical: `${siteUrl}/locations/red-oak/positive`,
    languages: {
      en: `${siteUrl}/locations/red-oak/positive`,
      es: `${siteUrl}/es/locations/red-oak/positive`,
    },
  },
  robots: { index: false, follow: false },
};

export default function RedOakPositivePage() {
  return (
    <>
      <Navbar locale="en" currentPath="/locations/red-oak/positive" />
      <main id="main-content">
        <PositiveReview locationSlug="red-oak" locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
