import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ExperienceRouter from '@/components/review/ExperienceRouter';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'How Was Your Experience? | Tortilleria El Rancherito - Red Oak',
  description: 'Tell us about your experience at Tortilleria El Rancherito in Red Oak, TX.',
  alternates: {
    canonical: `${siteUrl}/locations/red-oak/experience`,
    languages: {
      en: `${siteUrl}/locations/red-oak/experience`,
      es: `${siteUrl}/es/locations/red-oak/experience`,
    },
  },
  robots: { index: false, follow: false },
};

export default function RedOakExperiencePage() {
  return (
    <>
      <Navbar locale="en" currentPath="/locations/red-oak/experience" />
      <main id="main-content">
        <ExperienceRouter locationSlug="red-oak" locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
