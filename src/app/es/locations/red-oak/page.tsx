import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import LocationPage from '@/components/LocationPage';
import Footer from '@/components/Footer';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { redOakFaqs } from '@/data/faq-data';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Red Oak | Tortilleria El Rancherito - Comida Mexicana en el Condado de Ellis',
  description:
    'Visita Tortilleria El Rancherito en Red Oak, TX en 109 S State Hwy 342. Tortillas frescas hechas a mano, tacos, tamales, barbacoa, y productos mexicanos en el Condado de Ellis. Abierto los 7 d\u00edas.',
  alternates: {
    canonical: `${siteUrl}/es/locations/red-oak`,
    languages: {
      en: `${siteUrl}/locations/red-oak`,
      es: `${siteUrl}/es/locations/red-oak`,
    },
  },
  openGraph: {
    title: 'Red Oak | Tortilleria El Rancherito',
    description:
      'Tortillas frescas hechas a mano, tacos, tamales, barbacoa, y productos mexicanos en el Condado de Ellis. Abierto los 7 d\u00edas.',
    url: `${siteUrl}/es/locations/red-oak`,
    type: 'website',
    locale: 'es_MX',
  },
};

export default function RedOakPageEs() {
  const localBusinessSchema = generateLocalBusinessSchema('red-oak');
  const faqSchema = generateFAQSchema(
    redOakFaqs.map((faq) => ({ question: faq.questionEs, answer: faq.answerEs }))
  );

  return (
    <>
      <Navbar locale="es" currentPath="/es/locations/red-oak" />
      <main id="main-content">
        <LocationPage locationSlug="red-oak" locale="es" />
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
