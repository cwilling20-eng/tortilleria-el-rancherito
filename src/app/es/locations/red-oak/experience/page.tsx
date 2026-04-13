import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ExperienceRouter from '@/components/review/ExperienceRouter';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: '¿Cómo fue tu experiencia? | Tortilleria El Rancherito - Red Oak',
  description: 'Cuéntanos sobre tu experiencia en Tortilleria El Rancherito en Red Oak, TX.',
  alternates: {
    canonical: `${siteUrl}/es/locations/red-oak/experience`,
    languages: {
      en: `${siteUrl}/locations/red-oak/experience`,
      es: `${siteUrl}/es/locations/red-oak/experience`,
    },
  },
  robots: { index: false, follow: false },
};

export default function RedOakExperiencePageES() {
  return (
    <>
      <Navbar locale="es" currentPath="/es/locations/red-oak/experience" />
      <main id="main-content">
        <ExperienceRouter locationSlug="red-oak" locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
