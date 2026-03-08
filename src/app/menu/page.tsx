import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuPageContent from '@/components/MenuPageContent';
import { getTranslations } from '@/lib/translations';

const siteUrl = 'https://tortilleriaelrancherito.com';
const t = getTranslations('en');

export const metadata: Metadata = {
  title: t.meta.menuTitle,
  description: t.meta.menuDescription,
  alternates: {
    canonical: `${siteUrl}/menu`,
    languages: {
      en: `${siteUrl}/menu`,
      es: `${siteUrl}/es/menu`,
    },
  },
  openGraph: {
    title: t.meta.menuTitle,
    description: t.meta.menuDescription,
    url: `${siteUrl}/menu`,
    siteName: 'Tortilleria El Rancherito',
    type: 'website',
    locale: 'en_US',
  },
};

export default function MenuPage() {
  return (
    <>
      <Navbar locale="en" currentPath="/menu" />
      <main>
        {/* Hero Banner */}
        <section className="relative flex h-[40vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/street-tacos.jpg"
            alt="Fresh street tacos served on handmade tortillas at Tortilleria El Rancherito"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/60" />
          <div className="relative z-10 text-center px-4">
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-light tracking-wide">
              {t.menu.pageTitle}
            </h1>
            <div className="mx-auto mt-4 accent-stripe-wide" />
          </div>
          {/* AI search optimization */}
          <p className="sr-only">
            View the full menu at Tortilleria El Rancherito. Fresh handmade tortillas, authentic
            street tacos, tamales, barbacoa, carnitas, burritos, tortas, quesadillas, family packs,
            and weekend specials like menudo. Two locations in Red Oak and Gun Barrel City, Texas.
            Order online for pickup.
          </p>
        </section>

        <MenuPageContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
