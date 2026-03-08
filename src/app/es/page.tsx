import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SectionDivider from '@/components/SectionDivider';
import { locations, videos, testimonials, social } from '@/data/site-data';
import { getTranslations } from '@/lib/translations';

const siteUrl = 'https://tortilleriaelrancherito.com';
const t = getTranslations('es');

export const metadata: Metadata = {
  title: t.meta.homeTitle,
  description: t.meta.homeDescription,
  alternates: {
    canonical: `${siteUrl}/es`,
    languages: {
      en: siteUrl,
      es: `${siteUrl}/es`,
    },
  },
  openGraph: {
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    url: `${siteUrl}/es`,
    siteName: 'Tortilleria El Rancherito',
    type: 'website',
    locale: 'es_MX',
  },
};

/*
  NOTE: This Spanish homepage mirrors the English homepage (src/app/page.tsx).
  If another agent is writing the English homepage with a shared HomepageContent component,
  this file should be updated to use that shared component with locale="es" instead.
  Until then, this contains the full Spanish homepage structure.
*/

export default function HomePageEs() {
  const gbcLocation = locations['gun-barrel-city'];
  const redOakLocation = locations['red-oak'];

  return (
    <>
      <Navbar locale="es" currentPath="/es" />
      <main>
        {/* ═══ Hero Section ═══ */}
        <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/tacos.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={videos.hero} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark/65" />

          <div className="relative z-10 text-center px-4">
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-light tracking-wide">
              {t.hero.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-on-dark/80">
              {t.hero.subheadline}
            </p>
            <div className="mx-auto mt-6 accent-stripe-wide" />
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={gbcLocation.orderUrl}
                className="rounded-lg bg-primary px-8 py-3 font-[family-name:var(--font-display)] text-lg uppercase text-light transition-colors duration-200 hover:bg-primary-dark"
              >
                {t.hero.ctaGBC}
              </Link>
              <Link
                href={redOakLocation.orderUrl}
                className="rounded-lg border-2 border-light px-8 py-3 font-[family-name:var(--font-display)] text-lg uppercase text-light transition-colors duration-200 hover:bg-light/10"
              >
                {t.hero.ctaRedOak}
              </Link>
            </div>
          </div>

          {/* AI search optimization */}
          <p className="sr-only">
            Tortilleria El Rancherito es una tortilleria y taqueria mexicana auténtica con
            ubicaciones en Red Oak, TX y Gun Barrel City, TX. Servimos tortillas frescas hechas a
            mano, tacos, tamales, barbacoa, carnitas, y productos mexicanos tradicionales.
          </p>
        </section>

        <SectionDivider />

        {/* ═══ What Makes Us Different ═══ */}
        <section className="bg-light py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl text-dark uppercase">
                {t.signature.sectionTitle}
              </h2>
              <div className="mx-auto mb-12 accent-stripe-wide" />
            </ScrollReveal>

            <div className="space-y-16">
              {/* Tortillas */}
              <ScrollReveal>
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src="/images/tortillas.jpg"
                        alt="Tortillas frescas hechas a mano en nuestra tortilleria"
                        width={700}
                        height={500}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="mb-3 border-l-4 border-primary pl-4 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-dark uppercase">
                      {t.signature.tortillas.title}
                    </h3>
                    <p className="text-dark leading-relaxed">
                      {t.signature.tortillas.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Tacos */}
              <ScrollReveal>
                <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center">
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src="/images/street-tacos.jpg"
                        alt="Tacos auténticos de la calle con cilantro, cebolla y limón"
                        width={700}
                        height={500}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="mb-3 border-l-4 border-primary pl-4 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-dark uppercase">
                      {t.signature.tacos.title}
                    </h3>
                    <p className="text-dark leading-relaxed">
                      {t.signature.tacos.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Grocery */}
              <ScrollReveal>
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src="/images/pollo-asado.jpg"
                        alt="Tienda de productos mexicanos con artículos auténticos"
                        width={700}
                        height={500}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="mb-3 border-l-4 border-primary pl-4 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-dark uppercase">
                      {t.signature.grocery.title}
                    </h3>
                    <p className="text-dark leading-relaxed">
                      {t.signature.grocery.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══ Locations Section ═══ */}
        <section className="bg-dark py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl text-primary uppercase">
                {t.locations.sectionTitle}
              </h2>
              <div className="mx-auto mb-12 accent-stripe-wide" />
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Gun Barrel City */}
              <ScrollReveal>
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="relative h-[300px]">
                    <Image
                      src={gbcLocation.heroImage}
                      alt={`Tortilleria El Rancherito en ${gbcLocation.city}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark/50" />
                    {gbcLocation.isNew && (
                      <span className="absolute top-4 left-4 rounded-full bg-green px-3 py-1 text-xs font-bold uppercase text-light">
                        {t.locations.nowOpen}
                      </span>
                    )}
                  </div>
                  <div className="bg-darkest p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-light uppercase">
                      {gbcLocation.city}, {gbcLocation.state}
                    </h3>
                    <p className="mt-2 text-sm text-text-on-dark/70">{gbcLocation.address}</p>
                    <p className="mt-1 text-sm text-text-on-dark/70">{gbcLocation.phoneFormatted}</p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <Link
                        href={gbcLocation.orderUrl}
                        className="rounded-lg bg-primary px-5 py-2 text-center font-[family-name:var(--font-display)] text-sm uppercase text-light transition-colors duration-200 hover:bg-primary-dark"
                      >
                        {t.locations.orderOnline}
                      </Link>
                      <Link
                        href={`/es/locations/${gbcLocation.slug}`}
                        className="rounded-lg border border-light/30 px-5 py-2 text-center font-[family-name:var(--font-display)] text-sm uppercase text-light transition-colors duration-200 hover:bg-light/10"
                      >
                        {t.locations.getDirections}
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Red Oak */}
              <ScrollReveal>
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="relative h-[300px]">
                    <Image
                      src={redOakLocation.heroImage}
                      alt={`Tortilleria El Rancherito en ${redOakLocation.city}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark/50" />
                  </div>
                  <div className="bg-darkest p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-light uppercase">
                      {redOakLocation.city}, {redOakLocation.state}
                    </h3>
                    <p className="mt-2 text-sm text-text-on-dark/70">{redOakLocation.address}</p>
                    <p className="mt-1 text-sm text-text-on-dark/70">{redOakLocation.phoneFormatted}</p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <Link
                        href={redOakLocation.orderUrl}
                        className="rounded-lg bg-primary px-5 py-2 text-center font-[family-name:var(--font-display)] text-sm uppercase text-light transition-colors duration-200 hover:bg-primary-dark"
                      >
                        {t.locations.orderOnline}
                      </Link>
                      <Link
                        href={`/es/locations/${redOakLocation.slug}`}
                        className="rounded-lg border border-light/30 px-5 py-2 text-center font-[family-name:var(--font-display)] text-sm uppercase text-light transition-colors duration-200 hover:bg-light/10"
                      >
                        {t.locations.getDirections}
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══ Story Section ═══ */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <Image
              src="/images/tamales.jpg"
              alt="Tamales hechos a mano"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-dark/75" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4">
            <ScrollReveal>
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-primary uppercase">
                {t.about.sectionTitle}
              </h2>
              <div className="mb-8 accent-stripe-wide" />
              <div className="space-y-4 text-text-on-dark leading-relaxed">
                <p>{t.about.storyP1}</p>
                <p>{t.about.storyP2}</p>
                <p>{t.about.storyP3}</p>
              </div>
              <Link
                href="/es/about"
                className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 font-[family-name:var(--font-display)] text-lg uppercase text-light transition-colors duration-200 hover:bg-primary-dark"
              >
                {t.about.learnMore}
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* ═══ Testimonials Section ═══ */}
        <section className="bg-light-alt py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-3xl md:text-4xl text-dark uppercase">
                {t.testimonials.sectionTitle}
              </h2>
              <div className="mx-auto mb-12 accent-stripe-wide" />
            </ScrollReveal>

            <div className="space-y-6">
              {testimonials.map((review, idx) => (
                <ScrollReveal key={idx}>
                  <blockquote className="border-l-4 border-primary bg-light rounded-r-lg p-6 shadow-sm">
                    <p className="text-dark leading-relaxed italic">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <footer className="mt-3 flex items-center gap-2">
                      <span className="font-semibold text-dark">{review.name}</span>
                      <span className="text-sm text-text-secondary">— {review.platform}</span>
                    </footer>
                  </blockquote>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ═══ Grocery Section ═══ */}
        <section className="bg-dark py-20">
          <div className="mx-auto max-w-6xl px-4">
            <ScrollReveal>
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className="lg:w-1/2">
                  <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-primary uppercase">
                    {t.grocery.sectionTitle}
                  </h2>
                  <div className="mb-6 accent-stripe-wide" />
                  <p className="text-text-on-dark leading-relaxed">
                    {t.grocery.description}
                  </p>
                  <Link
                    href="/es/about"
                    className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-[family-name:var(--font-display)] text-lg uppercase text-light transition-colors duration-200 hover:bg-primary-dark"
                  >
                    {t.grocery.cta}
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/pollo-asado.jpg"
                      alt="Productos mexicanos auténticos en nuestra tienda"
                      width={700}
                      height={500}
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

        {/* ═══ Social Section ═══ */}
        <section className="bg-light py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <ScrollReveal>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-dark uppercase">
                {t.social.sectionTitle}
              </h2>
              <div className="mx-auto mb-6 accent-stripe-wide" />
              <p className="mx-auto mb-8 max-w-2xl text-text-secondary">
                {t.social.description}
              </p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-dark text-light transition-colors duration-200 hover:bg-primary"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-dark text-light transition-colors duration-200 hover:bg-primary"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-dark text-light transition-colors duration-200 hover:bg-primary"
                  aria-label="TikTok"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* ═══ View Menu CTA ═══ */}
        <section className="bg-darkest py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <ScrollReveal>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl md:text-4xl text-primary uppercase">
                {t.locations.viewMenu}
              </h2>
              <div className="mx-auto mb-6 accent-stripe-wide" />
              <Link
                href="/es/menu"
                className="inline-block rounded-lg bg-primary px-8 py-3 font-[family-name:var(--font-display)] text-lg uppercase text-light transition-colors duration-200 hover:bg-primary-dark"
              >
                {t.locations.viewMenu}
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  );
}
