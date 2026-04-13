export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PositiveReview from '@/components/review/PositiveReview';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: '¡Gracias! | Tortilleria El Rancherito - Gun Barrel City',
  description: 'Gracias por tu gran experiencia en Tortilleria El Rancherito en Gun Barrel City. Deja una reseña en Google y recibe 10% de descuento.',
  alternates: {
    canonical: `${siteUrl}/es/locations/gun-barrel-city/positive`,
    languages: {
      en: `${siteUrl}/locations/gun-barrel-city/positive`,
      es: `${siteUrl}/es/locations/gun-barrel-city/positive`,
    },
  },
  robots: { index: false, follow: false },
};

export default function GBCPositivePageES() {
  return (
    <>
      <Navbar locale="es" currentPath="/es/locations/gun-barrel-city/positive" />
      <main id="main-content">
        <PositiveReview locationSlug="gun-barrel-city" locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
