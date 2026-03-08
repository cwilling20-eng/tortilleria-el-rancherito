import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import LocationPage from '@/components/LocationPage';
import Footer from '@/components/Footer';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { redOakFaqs } from '@/data/faq-data';

const siteUrl = 'https://tortilleriaelrancherito.com';

export const metadata: Metadata = {
  title: 'Red Oak Location | Tortilleria El Rancherito - Ellis County Mexican Food',
  description:
    'Visit Tortilleria El Rancherito in Red Oak, TX at 109 S State Hwy 342. Fresh handmade tortillas, street tacos, tamales, barbacoa, and Mexican groceries in Ellis County. Open 7 days a week.',
  alternates: {
    canonical: `${siteUrl}/locations/red-oak`,
    languages: {
      en: `${siteUrl}/locations/red-oak`,
      es: `${siteUrl}/es/locations/red-oak`,
    },
  },
  openGraph: {
    title: 'Red Oak Location | Tortilleria El Rancherito',
    description:
      'Fresh handmade tortillas, street tacos, tamales, barbacoa, and Mexican groceries in Ellis County. Open 7 days a week.',
    url: `${siteUrl}/locations/red-oak`,
    type: 'website',
  },
};

export default function RedOakPage() {
  const localBusinessSchema = generateLocalBusinessSchema('red-oak');
  const faqSchema = generateFAQSchema(
    redOakFaqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
  );

  return (
    <>
      <Navbar locale="en" currentPath="/locations/red-oak" />
      <main id="main-content">
        <LocationPage locationSlug="red-oak" locale="en" />
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
