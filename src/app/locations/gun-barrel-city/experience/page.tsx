import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ExperienceRouter from '@/components/review/ExperienceRouter';
import Footer from '@/components/Footer';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'How Was Your Experience? | Tortilleria El Rancherito - Gun Barrel City',
  description: 'Tell us about your experience at Tortilleria El Rancherito in Gun Barrel City, TX.',
  alternates: {
    canonical: `${siteUrl}/locations/gun-barrel-city/experience`,
    languages: {
      en: `${siteUrl}/locations/gun-barrel-city/experience`,
      es: `${siteUrl}/es/locations/gun-barrel-city/experience`,
    },
  },
  robots: { index: false, follow: false },
};

export default function GBCExperiencePage() {
  return (
    <>
      <Navbar locale="en" currentPath="/locations/gun-barrel-city/experience" />
      <main id="main-content">
        <ExperienceRouter locationSlug="gun-barrel-city" locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
