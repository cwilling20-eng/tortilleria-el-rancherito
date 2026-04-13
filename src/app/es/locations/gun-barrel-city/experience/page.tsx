import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ExperienceRouter from '@/components/review/ExperienceRouter';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: '¿Cómo fue tu experiencia? | Tortilleria El Rancherito - Gun Barrel City',
  description: 'Cuéntanos sobre tu experiencia en Tortilleria El Rancherito en Gun Barrel City, TX.',
  alternates: {
    canonical: `${siteUrl}/locations/gun-barrel-city/experience`,
    languages: {
      en: `${siteUrl}/locations/gun-barrel-city/experience`,
      es: `${siteUrl}/es/locations/gun-barrel-city/experience`,
    },
  },
  robots: { index: false, follow: false },
};

export default function GBCExperiencePageES() {
  return (
    <>
      <Navbar locale="es" currentPath="/es/locations/gun-barrel-city/experience" />
      <main id="main-content">
        <ExperienceRouter locationSlug="gun-barrel-city" locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
