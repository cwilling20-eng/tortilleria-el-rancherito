export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import NegativeFeedback from '@/components/review/NegativeFeedback';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Comparte tus comentarios | Tortilleria El Rancherito - Gun Barrel City',
  description: 'Queremos escucharte. Comparte tus comentarios sobre tu experiencia en Tortilleria El Rancherito en Gun Barrel City, TX.',
  alternates: {
    canonical: `${siteUrl}/es/locations/gun-barrel-city/negative`,
    languages: {
      en: `${siteUrl}/locations/gun-barrel-city/negative`,
      es: `${siteUrl}/es/locations/gun-barrel-city/negative`,
    },
  },
  robots: { index: false, follow: false },
};

export default function GBCNegativePageES() {
  return (
    <>
      <Navbar locale="es" currentPath="/es/locations/gun-barrel-city/negative" />
      <main id="main-content">
        <NegativeFeedback locationSlug="gun-barrel-city" locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
