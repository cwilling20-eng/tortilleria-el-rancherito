import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuPageContent from '@/components/MenuPageContent';
import { getTranslations } from '@/lib/translations';

const siteUrl = 'https://tortilleriaelrancherito.com';
const t = getTranslations('es');

export const metadata: Metadata = {
  title: t.meta.menuTitle,
  description: t.meta.menuDescription,
  alternates: {
    canonical: `${siteUrl}/es/menu`,
    languages: {
      en: `${siteUrl}/menu`,
      es: `${siteUrl}/es/menu`,
    },
  },
  openGraph: {
    title: t.meta.menuTitle,
    description: t.meta.menuDescription,
    url: `${siteUrl}/es/menu`,
    siteName: 'Tortilleria El Rancherito',
    type: 'website',
    locale: 'es_MX',
  },
};

export default function MenuPageEs() {
  return (
    <>
      <Navbar locale="es" currentPath="/es/menu" />
      <main>
        {/* Hero Banner */}
        <section className="relative flex h-[40vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/street-tacos.jpg"
            alt="Tacos frescos servidos en tortillas hechas a mano en Tortilleria El Rancherito"
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
            Ve el menú completo de Tortilleria El Rancherito. Tortillas frescas hechas a mano, tacos
            auténticos, tamales, barbacoa, carnitas, burritos, tortas, quesadillas, paquetes
            familiares, y especiales de fin de semana como menudo. Dos ubicaciones en Red Oak y Gun
            Barrel City, Texas. Ordena en línea para recoger.
          </p>
        </section>

        <MenuPageContent locale="es" />
      </main>
      <Footer locale="es" />
    </>
  );
}
