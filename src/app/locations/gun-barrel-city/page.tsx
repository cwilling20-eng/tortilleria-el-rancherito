import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import LocationPage from '@/components/LocationPage';
import Footer from '@/components/Footer';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { gbcFaqs } from '@/data/faq-data';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Gun Barrel City Location | Tortilleria El Rancherito - Cedar Creek Lake Area Mexican Food',
  description:
    'Visit Tortilleria El Rancherito in Gun Barrel City, TX at 2000 W Main St. Fresh handmade tortillas, street tacos, tamales, barbacoa, and Mexican groceries near Cedar Creek Lake. Open 7 days a week.',
  alternates: {
    canonical: `${siteUrl}/locations/gun-barrel-city`,
    languages: {
      en: `${siteUrl}/locations/gun-barrel-city`,
      es: `${siteUrl}/es/locations/gun-barrel-city`,
    },
  },
  openGraph: {
    title: 'Gun Barrel City Location | Tortilleria El Rancherito',
    description:
      'Fresh handmade tortillas, street tacos, tamales, barbacoa, and Mexican groceries near Cedar Creek Lake. Open 7 days a week.',
    url: `${siteUrl}/locations/gun-barrel-city`,
    type: 'website',
  },
};

export default function GunBarrelCityPage() {
  const localBusinessSchema = generateLocalBusinessSchema('gun-barrel-city');
  const faqSchema = generateFAQSchema(
    gbcFaqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
  );

  return (
    <>
      <Navbar locale="en" currentPath="/locations/gun-barrel-city" />
      <main id="main-content">
        <LocationPage locationSlug="gun-barrel-city" locale="en" />
      </main>
      <Footer locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
