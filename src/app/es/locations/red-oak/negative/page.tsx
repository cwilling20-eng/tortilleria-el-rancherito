export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import NegativeFeedback from '@/components/review/NegativeFeedback';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Comparte tus comentarios | Tortilleria El Rancherito - Red Oak',
  description: 'Queremos escucharte. Comparte tus comentarios sobre tu experiencia en Tortilleria El Rancherito en Red Oak, TX.',
  alternates: {
    canonical: `${siteUrl}/es/locations/red-oak/negative`,
    languages: {
      en: `${siteUrl}/locations/red-oak/negative`,
      es: `${siteUrl}/es/locations/red-oak/negative`,
    },
  },
  robots: { index: false, follow: false },
};

export default function RedOakNegativePageES() {
  return (
    <>
      <Navbar locale="es" currentPath="/es/locations/red-oak/negative" />
      <main id="main-content">
        <NegativeFeedback locationSlug="red-oak" locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
