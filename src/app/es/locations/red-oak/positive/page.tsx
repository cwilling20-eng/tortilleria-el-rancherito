export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PositiveReview from '@/components/review/PositiveReview';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: '¡Gracias! | Tortilleria El Rancherito - Red Oak',
  description: 'Gracias por tu gran experiencia en Tortilleria El Rancherito en Red Oak. Deja una reseña en Google y recibe 10% de descuento.',
  alternates: {
    canonical: `${siteUrl}/es/locations/red-oak/positive`,
    languages: {
      en: `${siteUrl}/locations/red-oak/positive`,
      es: `${siteUrl}/es/locations/red-oak/positive`,
    },
  },
  robots: { index: false, follow: false },
};

export default function RedOakPositivePageES() {
  return (
    <>
      <Navbar locale="es" currentPath="/es/locations/red-oak/positive" />
      <main id="main-content">
        <PositiveReview locationSlug="red-oak" locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
