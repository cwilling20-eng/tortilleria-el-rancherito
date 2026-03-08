import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SectionDivider from '@/components/SectionDivider';
import { locations } from '@/data/site-data';
import { getTranslations } from '@/lib/translations';

const siteUrl = 'https://tortilleriaelrancherito.com';
const t = getTranslations('en');

export const metadata: Metadata = {
  title: t.meta.aboutTitle,
  description: t.meta.aboutDescription,
  alternates: {
    canonical: `${siteUrl}/about`,
    languages: {
      en: `${siteUrl}/about`,
      es: `${siteUrl}/es/about`,
    },
  },
  openGraph: {
    title: t.meta.aboutTitle,
    description: t.meta.aboutDescription,
    url: `${siteUrl}/about`,
    siteName: 'Tortilleria El Rancherito',
    type: 'website',
    locale: 'en_US',
  },
};

const galleryImages = [
  { src: '/images/tamales.jpg', alt: 'Handmade tamales wrapped in corn husks at Tortilleria El Rancherito', span: 'row-span-2' },
  { src: '/images/barbacoa.jpg', alt: 'Slow-cooked barbacoa served with fresh tortillas', span: '' },
  { src: '/images/street-tacos.jpg', alt: 'Authentic street tacos with cilantro, onion, and lime', span: '' },
  { src: '/images/breakfast tacos.jpg', alt: 'Breakfast tacos with eggs, chorizo, and fresh salsa', span: 'row-span-2' },
  { src: '/images/quesadilla.jpg', alt: 'Golden quesadilla filled with melted cheese and choice of meat', span: '' },
  { src: '/images/menudo.jpg', alt: 'Traditional menudo soup served on weekends', span: '' },
];

export default function AboutPage() {
  const locationList = Object.values(locations);

  return (
    <>
      <Navbar locale="en" currentPath="/about" />
      <main>
        {/* Hero */}
        <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/tortillas.jpg"
            alt="Fresh handmade tortillas being prepared at Tortilleria El Rancherito"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/60" />
          <div className="relative z-10 text-center px-4">
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-light tracking-wide">
              {t.about.pageTitle}
            </h1>
            <div className="mx-auto mt-4 accent-stripe-wide" />
          </div>
        </section>

        <SectionDivider />

        {/* Brand Story Section */}
        <section className="bg-light py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
                {/* Text — 60% */}
                <div className="lg:w-3/5">
                  <h2 className="mb-6 border-l-4 border-primary pl-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-dark uppercase">
                    {t.about.sectionTitle}
                  </h2>
                  <div className="space-y-4 text-dark leading-relaxed">
                    <p>{t.about.storyP1}</p>
                    <p>{t.about.storyP2}</p>
                    <p>{t.about.storyP3}</p>
                    <p>{t.about.storyP4}</p>
                    <p>{t.about.storyP5}</p>
                  </div>
                </div>
                {/* Image — 40% */}
                <div className="lg:w-2/5">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/tamales.jpg"
                      alt="Fresh handmade tamales at Tortilleria El Rancherito"
                      width={600}
                      height={800}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Tortilleria Heritage Section */}
        <section className="border-t-4 border-primary bg-dark py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                <div className="lg:w-3/5">
                  <h2 className="mb-6 border-l-4 border-primary pl-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-primary uppercase">
                    {t.about.heritage.title}
                  </h2>
                  <p className="text-text-on-dark leading-relaxed">
                    {t.about.heritage.description}
                  </p>
                </div>
                <div className="lg:w-2/5">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/tortillas.jpg"
                      alt="Tortillas being pressed and cooked on the comal in our tortilleria"
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Grocery Section */}
        <section className="bg-light-alt py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
                <div className="lg:w-3/5">
                  <h2 className="mb-6 border-l-4 border-primary pl-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-dark uppercase">
                    {t.about.grocerySection.title}
                  </h2>
                  <p className="text-dark leading-relaxed">
                    {t.about.grocerySection.description}
                  </p>
                </div>
                <div className="lg:w-2/5">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/pollo-asado.jpg"
                      alt="Pollo ranchero and authentic Mexican grocery items available at our store"
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Community Section */}
        <section className="bg-light py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="mb-6 border-l-4 border-primary pl-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-dark uppercase">
                  {t.about.community.title}
                </h2>
                <p className="text-dark leading-relaxed">
                  {t.about.community.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Photo Gallery */}
        <section className="bg-dark py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl text-primary uppercase">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-lg ${img.span}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Both Locations CTA */}
        <section className="bg-light py-16">
          <div className="mx-auto max-w-5xl px-4">
            <ScrollReveal>
              <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl text-dark uppercase">
                Visit Us
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {locationList.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="group block rounded-lg border-l-4 border-primary bg-light-alt p-6 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-dark uppercase">
                      {loc.city}, {loc.state}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">{loc.address}</p>
                    <p className="mt-1 text-sm text-text-secondary">{loc.city}, {loc.state} {loc.zip}</p>
                    <p className="mt-1 text-sm text-text-secondary">{loc.phoneFormatted}</p>
                    <span className="mt-4 inline-block rounded-lg bg-primary px-5 py-2 font-[family-name:var(--font-display)] text-sm uppercase text-light transition-colors duration-200 group-hover:bg-primary-dark">
                      View Location
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
