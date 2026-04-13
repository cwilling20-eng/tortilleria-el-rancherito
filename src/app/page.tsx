import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import ScrollReveal from '@/components/ScrollReveal';
import { locations, social, testimonials, videos } from '@/data/site-data';
import { getTranslations } from '@/lib/translations';
import { generateOrganizationSchema } from '@/lib/schema';

const t = getTranslations('en');
const gbc = locations['gun-barrel-city'];
const redOak = locations['red-oak'];

export const metadata: Metadata = {
  title: t.meta.homeTitle,
  description: t.meta.homeDescription,
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      es: '/es',
    },
  },
};

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar locale="en" currentPath="/" />
      <main id="main-content">
        {/* ═══════════════════════════════════════════
            SECTION 1 — Hero: Full-Bleed Video Loop
            ═══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/street-tacos.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          >
            <source src={videos.hero} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 to-[#1A1A1A]/30 z-10" />
          <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
            <h1
              className="font-heading tracking-wide text-[#FAF7F2]"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-[#FAF7F2]/80 mt-4 mb-10">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/locations/gun-barrel-city"
                className="bg-[#F47A1F] hover:bg-[#D9691A] text-[#FAF7F2] rounded-lg px-8 py-4 font-heading uppercase tracking-wider text-lg transition-colors"
              >
                {t.hero.ctaGBC}
              </Link>
              <Link
                href="/locations/red-oak"
                className="border-2 border-white/60 text-white rounded-lg px-8 py-4 font-heading uppercase tracking-wider text-lg hover:border-[#F47A1F] transition-colors"
              >
                {t.hero.ctaRedOak}
              </Link>
            </div>
          </div>
          <p className="sr-only">
            Tortilleria El Rancherito is an authentic Mexican tortilleria and
            taqueria with locations in Red Oak, TX and Gun Barrel City, TX,
            serving fresh handmade tortillas, street tacos, tamales, barbacoa,
            carnitas, and traditional Mexican groceries.
          </p>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — Made From Scratch, Every Day
            ═══════════════════════════════════════════ */}
        {/* Section heading — full-width dark bar */}
        <div className="bg-[#1A1A1A] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2
                className="font-heading text-[#FAF7F2]"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
              >
                {t.signature.sectionTitle}
              </h2>
              <div className="mx-auto mt-4 accent-stripe-wide" />
            </ScrollReveal>
          </div>
        </div>

        {/* Row 1 — Tortillas: Full-bleed image left, text on dark right */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <ScrollReveal className="relative overflow-hidden">
            <Image
              src="/images/tortillas.jpg"
              alt="Fresh handmade corn and flour tortillas at Tortilleria El Rancherito"
              width={800}
              height={600}
              className="w-full h-full object-cover md:absolute md:inset-0 aspect-[4/3] md:aspect-auto"
              loading="lazy"
            />
          </ScrollReveal>
          <div className="bg-[#1A1A1A] flex items-center px-8 md:px-16 py-14 md:py-20">
            <ScrollReveal direction="right">
              <div className="accent-stripe-inline mb-6" />
              <h3
                className="font-heading text-[#F47A1F] mb-4"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
              >
                {t.signature.tortillas.title}
              </h3>
              <p className="text-[#FAF7F2]/80 text-base md:text-lg leading-relaxed max-w-md">
                {t.signature.tortillas.description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Row 2 — Tacos: Text on warm white left, image right */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="bg-[#FAF7F2] flex items-center px-8 md:px-16 py-14 md:py-20 order-2 md:order-1">
            <ScrollReveal direction="left">
              <div className="accent-stripe-inline mb-6" />
              <h3
                className="font-heading text-[#1A1A1A] mb-4"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
              >
                {t.signature.tacos.title}
              </h3>
              <p className="text-[#6B6560] text-base md:text-lg leading-relaxed max-w-md">
                {t.signature.tacos.description}
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal className="relative overflow-hidden order-1 md:order-2">
            <Image
              src="/images/barbacoa.jpg"
              alt="Authentic street tacos with barbacoa and handmade tortillas"
              width={800}
              height={600}
              className="w-full h-full object-cover md:absolute md:inset-0 aspect-[4/3] md:aspect-auto"
              loading="lazy"
            />
          </ScrollReveal>
        </section>

        {/* Row 3 — Grocery: Full-bleed image left, text on dark right */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <ScrollReveal className="relative overflow-hidden">
            <Image
              src="/images/pollo-asado.jpg"
              alt="Mexican grocery products and fresh tortillas to take home"
              width={800}
              height={600}
              className="w-full h-full object-cover md:absolute md:inset-0 aspect-[4/3] md:aspect-auto"
              loading="lazy"
            />
          </ScrollReveal>
          <div className="bg-[#1A1A1A] flex items-center px-8 md:px-16 py-14 md:py-20">
            <ScrollReveal direction="right">
              <div className="accent-stripe-inline mb-6" />
              <h3
                className="font-heading text-[#F47A1F] mb-4"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
              >
                {t.signature.grocery.title}
              </h3>
              <p className="text-[#FAF7F2]/80 text-base md:text-lg leading-relaxed max-w-md">
                {t.signature.grocery.description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — Both Locations Block (Dark)
            ═══════════════════════════════════════════ */}
        <SectionDivider />
        <section className="bg-[#1A1A1A] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-heading text-[#F47A1F] text-center mb-16"
              style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
            >
              {t.locations.sectionTitle}
            </h2>

            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Gun Barrel City */}
                <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-8">
                  {gbc.isNew && (
                    <span className="bg-[#2E7D32] text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-3">
                      {t.locations.nowOpen}
                    </span>
                  )}
                  <h3 className="font-heading text-2xl text-white">
                    {gbc.name}
                  </h3>
                  <p className="font-heading text-lg text-[#F47A1F]">
                    {gbc.city}, {gbc.state}
                  </p>
                  <p className="text-[#FAF7F2]/70 mt-3">
                    {gbc.address}, {gbc.city}, {gbc.state} {gbc.zip}
                  </p>
                  <p className="text-[#FAF7F2] mt-2">
                    <a
                      href={`tel:${gbc.phone}`}
                      className="hover:text-[#F47A1F] transition-colors"
                    >
                      {gbc.phoneFormatted}
                    </a>
                  </p>
                  <p className="text-[#FAF7F2]/60 mt-2">
                    Mon-Tue, Thu-Sat: 7AM&ndash;7PM | Sun: 7AM&ndash;3PM | Wed: Closed
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href={gbc.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F47A1F] hover:bg-[#D9691A] text-[#FAF7F2] rounded-lg px-6 py-3 font-heading uppercase tracking-wider text-center transition-colors"
                    >
                      {t.locations.orderOnline}
                    </a>
                    <a
                      href={gbc.googleBusinessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white/60 text-white rounded-lg px-6 py-3 font-heading uppercase tracking-wider text-center hover:border-[#F47A1F] transition-colors"
                    >
                      {t.locations.getDirections}
                    </a>
                  </div>
                </div>

                {/* Red Oak */}
                <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-8">
                  <h3 className="font-heading text-2xl text-white">
                    {redOak.name}
                  </h3>
                  <p className="font-heading text-lg text-[#F47A1F]">
                    {redOak.city}, {redOak.state}
                  </p>
                  <p className="text-[#FAF7F2]/70 mt-3">
                    {redOak.address}, {redOak.city}, {redOak.state} {redOak.zip}
                  </p>
                  <p className="text-[#FAF7F2] mt-2">
                    <a
                      href={`tel:${redOak.phone}`}
                      className="hover:text-[#F47A1F] transition-colors"
                    >
                      {redOak.phoneFormatted}
                    </a>
                  </p>
                  <p className="text-[#FAF7F2]/60 mt-2">
                    Mon&ndash;Fri: {redOak.hours[1].open} &ndash;{' '}
                    {redOak.hours[1].close} | Sat:{' '}
                    {redOak.hours[6].open} &ndash; {redOak.hours[6].close} |
                    Sun: {redOak.hours[0].open} &ndash; {redOak.hours[0].close}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href={redOak.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F47A1F] hover:bg-[#D9691A] text-[#FAF7F2] rounded-lg px-6 py-3 font-heading uppercase tracking-wider text-center transition-colors"
                    >
                      {t.locations.orderOnline}
                    </a>
                    <a
                      href={redOak.googleBusinessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white/60 text-white rounded-lg px-6 py-3 font-heading uppercase tracking-wider text-center hover:border-[#F47A1F] transition-colors"
                    >
                      {t.locations.getDirections}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — About / Story (Photo Background)
            ═══════════════════════════════════════════ */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/tortillas.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1A1A1A]/70" />
          <div className="relative max-w-3xl mx-auto px-6">
            <ScrollReveal>
              <div className="border-l-4 border-[#F47A1F] pl-6">
                <h2
                  className="font-heading text-[#F47A1F] mb-6"
                  style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
                >
                  {t.about.sectionTitle}
                </h2>
                <p className="text-[#FAF7F2] text-lg leading-relaxed mb-6">
                  {t.about.storyP1}
                </p>
                <p className="text-[#FAF7F2] text-lg leading-relaxed mb-8">
                  {t.about.storyP2}
                </p>
                <Link
                  href="/about"
                  className="text-[#F47A1F] hover:underline text-lg inline-flex items-center gap-2 transition-colors"
                >
                  {t.about.learnMore}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — Testimonials (Editorial Stacked / Dark)
            ═══════════════════════════════════════════ */}
        <section className="bg-[#1A1A1A] py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="font-heading text-[#F47A1F] mb-4"
              style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
            >
              {t.testimonials.sectionTitle}
            </h2>
            <div className="accent-stripe-wide mb-16" />

            {testimonials.map((review, index) => (
              <ScrollReveal key={review.name} delay={index * 0.08}>
                <div
                  className={`relative py-10 md:py-12 ${
                    index < testimonials.length - 1
                      ? 'border-b border-white/10'
                      : ''
                  }`}
                >
                  <span
                    className="font-serif text-7xl md:text-8xl text-[#F47A1F] leading-none block mb-4"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="text-[#FAF7F2] text-xl md:text-2xl leading-relaxed max-w-3xl">
                    {review.quote}
                  </blockquote>
                  <div className="mt-6">
                    <p className="font-heading text-lg tracking-widest text-[#FAF7F2]">
                      {review.name}
                    </p>
                    <p className="text-[#FAF7F2]/50 text-xs uppercase tracking-[0.2em] mt-1">
                      {review.platform} Review
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — Grocery + Tortilleria (Dark)
            ═══════════════════════════════════════════ */}
        <SectionDivider />
        <section className="bg-[#1A1A1A] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
                  <Image
                    src="/images/tamales.jpg"
                    alt="Homemade tamales and Mexican grocery items at Tortilleria El Rancherito"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2
                    className="font-heading text-[#F47A1F] mb-6"
                    style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
                  >
                    {t.grocery.sectionTitle}
                  </h2>
                  <p className="text-[#FAF7F2] text-lg leading-relaxed mb-8">
                    {t.grocery.description}
                  </p>
                  <Link
                    href="/locations/gun-barrel-city"
                    className="inline-block bg-[#F47A1F] hover:bg-[#D9691A] text-[#FAF7F2] rounded-lg px-8 py-4 font-heading uppercase tracking-wider text-lg transition-colors"
                  >
                    {t.grocery.cta}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 7 — Social Proof / Follow Us (Light)
            ═══════════════════════════════════════════ */}
        <section className="bg-[#FAF7F2] py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2
                className="font-heading text-[#1A1A1A] mb-4"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
              >
                {t.social.sectionTitle}
              </h2>
              <p className="text-[#6B6560] mb-10">{t.social.description}</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {/* Instagram */}
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#F47A1F] transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="font-heading text-lg uppercase tracking-wider">
                    Instagram
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#F47A1F] transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="font-heading text-lg uppercase tracking-wider">
                    Facebook
                  </span>
                </a>

                {/* TikTok */}
                <a
                  href={social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#F47A1F] transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.6z" />
                  </svg>
                  <span className="font-heading text-lg uppercase tracking-wider">
                    TikTok
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
