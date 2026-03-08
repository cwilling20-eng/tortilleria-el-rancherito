import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import LocationPage from '@/components/LocationPage';
import Footer from '@/components/Footer';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { gbcFaqs } from '@/data/faq-data';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Gun Barrel City | Tortilleria El Rancherito - Comida Mexicana cerca del Lago Cedar Creek',
  description:
    'Visita Tortilleria El Rancherito en Gun Barrel City, TX en 2000 W Main St. Tortillas frescas hechas a mano, tacos, tamales, barbacoa, y productos mexicanos cerca del Lago Cedar Creek. Abierto los 7 d\u00edas.',
  alternates: {
    canonical: `${siteUrl}/es/locations/gun-barrel-city`,
    languages: {
      en: `${siteUrl}/locations/gun-barrel-city`,
      es: `${siteUrl}/es/locations/gun-barrel-city`,
    },
  },
  openGraph: {
    title: 'Gun Barrel City | Tortilleria El Rancherito',
    description:
      'Tortillas frescas hechas a mano, tacos, tamales, barbacoa, y productos mexicanos cerca del Lago Cedar Creek. Abierto los 7 d\u00edas.',
    url: `${siteUrl}/es/locations/gun-barrel-city`,
    type: 'website',
    locale: 'es_MX',
  },
};

export default function GunBarrelCityPageEs() {
  const localBusinessSchema = generateLocalBusinessSchema('gun-barrel-city');
  const faqSchema = generateFAQSchema(
    gbcFaqs.map((faq) => ({ question: faq.questionEs, answer: faq.answerEs }))
  );

  return (
    <>
      <Navbar locale="es" currentPath="/es/locations/gun-barrel-city" />
      <main id="main-content">
        <LocationPage locationSlug="gun-barrel-city" locale="es" />
      </main>
      <Footer locale="es" />
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
