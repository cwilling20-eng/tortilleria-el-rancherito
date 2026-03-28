'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { locations } from '@/data/site-data';
import { menuCategories, breakfastMeats, tacoMeats } from '@/data/menu-data';
import { gbcFaqs, redOakFaqs } from '@/data/faq-data';
import { getTranslations, type Locale } from '@/lib/translations';

interface LocationPageProps {
  locationSlug: 'gun-barrel-city' | 'red-oak';
  locale: Locale;
}

export default function LocationPage({ locationSlug, locale }: LocationPageProps) {
  const location = locations[locationSlug];
  const otherSlug = locationSlug === 'gun-barrel-city' ? 'red-oak' : 'gun-barrel-city';
  const otherLocation = locations[otherSlug];
  const t = getTranslations(locale);
  const prefix = locale === 'es' ? '/es' : '';
  const faqs = locationSlug === 'gun-barrel-city' ? gbcFaqs : redOakFaqs;

  // Hours summary for details bar
  const hasClosed = location.hours.some((h) => h.open === 'Closed');
  const hoursAreUniform = !hasClosed && location.hours.every(
    (h) => h.open === '7:00 AM' && h.close === '7:00 PM'
  );

  let hoursSummary: string;
  if (hoursAreUniform) {
    hoursSummary = `${locale === 'es' ? 'Abierto Todos los Días' : 'Open Daily'} 7AM-7PM`;
  } else if (locationSlug === 'gun-barrel-city') {
    hoursSummary = locale === 'es'
      ? 'Lun-Mar, Jue-Sáb 7AM-7PM, Dom 7AM-3PM, Mié Cerrado'
      : 'Mon-Tue, Thu-Sat 7AM-7PM, Sun 7AM-3PM, Wed Closed';
  } else {
    hoursSummary = locale === 'es'
      ? 'Lun-Vie 7AM-7PM, Sáb 7AM-6PM, Dom 7AM-3PM'
      : 'Mon-Fri 7AM-7PM, Sat 7AM-6PM, Sun 7AM-3PM';
  }

  const fullAddress = `${location.address}, ${location.city}, ${location.state} ${location.zip}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <>
      {/* A. Location Hero */}
      <LocationHero location={location} locale={locale} t={t} />

      {/* B. Location Details Bar */}
      <LocationDetailsBar
        location={location}
        hoursSummary={hoursSummary}
        fullAddress={fullAddress}
        locale={locale}
        t={t}
      />

      {/* C. Full Menu Section */}
      <MenuSection locale={locale} t={t} />

      {/* D. FAQ Section */}
      <FAQSection faqs={faqs} locale={locale} t={t} />

      {/* E. Google Maps Placeholder */}
      <MapSection
        location={location}
        fullAddress={fullAddress}
        mapsUrl={mapsUrl}
        locale={locale}
        t={t}
      />

      {/* F. Cross-Location CTA */}
      <CrossLocationCTA
        otherLocation={otherLocation}
        otherSlug={otherSlug}
        locale={locale}
        prefix={prefix}
        t={t}
      />
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   A. LOCATION HERO
   ────────────────────────────────────────────────────────── */

function LocationHero({
  location,
  locale,
  t,
}: {
  location: typeof locations[string];
  locale: Locale;
  t: ReturnType<typeof getTranslations>;
}) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src={location.heroImage}
        alt={`${location.name} ${location.city} food`}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/50 to-dark/30" />
      <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
        {location.isNew && (
          <span
            className="inline-block mb-4 px-4 py-1.5 bg-green text-light text-sm font-bold uppercase tracking-wider rounded-lg"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.locations.nowOpen}
          </span>
        )}
        <h1
          className="text-4xl md:text-6xl text-light mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tortilleria El Rancherito &mdash; {location.city}
        </h1>
        <a
          href={`tel:${location.phone}`}
          className="inline-block text-2xl text-primary hover:text-primary-dark transition-colors duration-200 mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-label={`${locale === 'es' ? 'Llamar al' : 'Call'} ${location.phoneFormatted}`}
        >
          {location.phoneFormatted}
        </a>
        <div>
          <a
            href={location.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-primary hover:bg-primary-dark text-light font-bold text-lg uppercase tracking-wider rounded-lg transition-colors duration-200 min-h-[44px]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.locations.orderOnline}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   B. LOCATION DETAILS BAR
   ────────────────────────────────────────────────────────── */

function LocationDetailsBar({
  location,
  hoursSummary,
  fullAddress,
  locale: _locale,
  t,
}: {
  location: typeof locations[string];
  hoursSummary: string;
  fullAddress: string;
  locale: Locale;
  t: ReturnType<typeof getTranslations>;
}) {
  return (
    <div className="sticky top-36 z-30 bg-dark text-light py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between gap-6">
          <address className="not-italic text-sm text-light/90" style={{ fontFamily: 'var(--font-body)' }}>
            {fullAddress}
          </address>
          <span className="text-sm text-light/80" style={{ fontFamily: 'var(--font-body)' }}>
            {hoursSummary}
          </span>
          <a
            href={`tel:${location.phone}`}
            className="text-sm text-primary hover:text-primary-dark transition-colors duration-200 min-h-[44px] flex items-center"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {location.phoneFormatted}
          </a>
          <a
            href={location.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary hover:bg-primary-dark text-light font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.locations.orderOnline}
          </a>
        </div>

        {/* Mobile layout: 2-row compact grid */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          <address className="not-italic text-xs text-light/90 flex items-center" style={{ fontFamily: 'var(--font-body)' }}>
            {fullAddress}
          </address>
          <span className="text-xs text-light/80 flex items-center justify-end" style={{ fontFamily: 'var(--font-body)' }}>
            {hoursSummary}
          </span>
          <a
            href={`tel:${location.phone}`}
            className="text-sm text-primary hover:text-primary-dark transition-colors duration-200 min-h-[44px] flex items-center"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {location.phoneFormatted}
          </a>
          <a
            href={location.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-light font-bold text-xs uppercase tracking-wider rounded-lg transition-colors duration-200 min-h-[44px] flex items-center justify-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.locations.orderOnline}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   C. FULL MENU SECTION
   ────────────────────────────────────────────────────────── */

function MenuSection({
  locale,
  t,
}: {
  locale: Locale;
  t: ReturnType<typeof getTranslations>;
}) {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const categoryRefs = useRef<Map<string, HTMLElement>>(new Map());
  const navRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  const setCategoryRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) {
      categoryRefs.current.set(id, el);
    } else {
      categoryRefs.current.delete(id);
    }
  }, []);

  // IntersectionObserver for active category tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-200px 0px -60% 0px',
      threshold: 0,
    });

    categoryRefs.current.forEach((el) => {
      observer.observe(el);
    });
    observers.push(observer);

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const el = categoryRefs.current.get(categoryId);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveCategory(categoryId);

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  // Scroll the active nav pill into view
  useEffect(() => {
    if (!navRef.current) return;
    const activeButton = navRef.current.querySelector(`[data-cat="${activeCategory}"]`);
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeCategory]);

  return (
    <section className="bg-light py-16" id="menu">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl text-dark mb-8 text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t.menu.pageTitle}
        </h2>

        {/* Sticky category nav */}
        <div
          className="sticky top-[calc(5rem+64px)] z-20 bg-light/80 backdrop-blur-sm border-b border-dark/10 -mx-4 px-4 mb-8"
          ref={navRef}
        >
          <div className="flex md:flex-wrap overflow-x-auto scrollbar-hide gap-1 py-2 -mx-1">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                data-cat={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-200 min-h-[44px] ${
                  activeCategory === cat.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text-secondary hover:text-dark'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
                aria-label={`${locale === 'es' ? 'Ir a' : 'Jump to'} ${locale === 'es' ? cat.nameEs : cat.name}`}
              >
                {locale === 'es' ? cat.nameEs : cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu categories */}
        {menuCategories.map((cat) => (
          <div
            key={cat.id}
            id={cat.id}
            ref={(el) => setCategoryRef(cat.id, el)}
            className="scroll-mt-[calc(5rem+64px+60px)] mb-12"
          >
            {/* Banner image */}
            {cat.bannerImage && (
              <div className="relative w-full max-h-[280px] overflow-hidden rounded-lg mb-6">
                <Image
                  src={cat.bannerImage}
                  alt={`${locale === 'es' ? cat.nameEs : cat.name} - Tortilleria El Rancherito`}
                  width={1200}
                  height={280}
                  className="w-full h-auto max-h-[280px] object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 960px"
                />
              </div>
            )}

            {/* Category title with orange left border */}
            <h3
              className="text-2xl md:text-3xl text-dark border-l-4 border-primary pl-4 mt-8 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {locale === 'es' ? cat.nameEs : cat.name}
            </h3>

            {/* Meats available for tacos and breakfast */}
            {cat.id === 'breakfast' && (
              <p className="text-text-secondary text-sm mb-4 pl-4" style={{ fontFamily: 'var(--font-body)' }}>
                <span className="font-semibold text-dark">
                  {t.menu.meatsAvailable}:
                </span>{' '}
                {breakfastMeats.join(', ')}
              </p>
            )}
            {cat.id === 'tacos' && (
              <p className="text-text-secondary text-sm mb-4 pl-4" style={{ fontFamily: 'var(--font-body)' }}>
                <span className="font-semibold text-dark">
                  {t.menu.meatsAvailable}:
                </span>{' '}
                {tacoMeats.join(', ')}
              </p>
            )}

            {/* Menu items */}
            <div className="space-y-0">
              {cat.items.map((item, idx) => {
                const itemName = locale === 'es' ? item.nameEs : item.name;
                const itemDesc = locale === 'es' ? item.descriptionEs : item.description;
                const itemPrice = locale === 'es' && item.price === 'Market Price' ? 'Precio del d\u00eda' : item.price;

                return (
                  <div
                    key={`${cat.id}-${idx}`}
                    className={`flex items-start justify-between py-3 ${
                      idx < cat.items.length - 1 ? 'border-b border-dark/10' : ''
                    }`}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="font-semibold text-dark"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {itemName}
                        </span>
                        {item.isSignature && (
                          <span
                            className="inline-flex items-center px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {t.menu.signatureItem}
                          </span>
                        )}
                      </div>
                      {itemDesc && (
                        <p
                          className="text-text-secondary text-sm mt-0.5 line-clamp-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {itemDesc}
                        </p>
                      )}
                    </div>
                    <span
                      className="text-lg text-dark flex-shrink-0 text-right"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {itemPrice}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   D. FAQ SECTION
   ────────────────────────────────────────────────────────── */

function FAQSection({
  faqs,
  locale,
  t,
}: {
  faqs: typeof gbcFaqs;
  locale: Locale;
  t: ReturnType<typeof getTranslations>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-light-alt py-16" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl text-dark mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t.faq.title}
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const question = locale === 'es' ? faq.questionEs : faq.question;
            const answer = locale === 'es' ? faq.answerEs : faq.answer;

            return (
              <div key={idx} className="border-b border-dark/10">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start justify-between py-4 text-left min-h-[44px] group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span
                    className="font-semibold text-dark text-lg pr-4 group-hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {question}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-dark text-xl font-bold"
                    aria-hidden="true"
                  >
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="pb-4 pr-12"
                  >
                    <p
                      className="text-text-secondary text-base leading-relaxed max-w-3xl"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   E. GOOGLE MAPS PLACEHOLDER
   ────────────────────────────────────────────────────────── */

function MapSection({
  location: _location,
  fullAddress,
  mapsUrl,
  locale,
  t,
}: {
  location: typeof locations[string];
  fullAddress: string;
  mapsUrl: string;
  locale: Locale;
  t: ReturnType<typeof getTranslations>;
}) {
  return (
    <section className="bg-light py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="aspect-[16/9] max-h-[400px] bg-dark/5 rounded-lg flex items-center justify-center">
          {/* CLIENT: Embed Google Maps iframe for {location.city} - Google Business Profile: {location.googleBusinessUrl} */}
          <p
            className="text-text-secondary text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {locale === 'es' ? 'Cargando Mapa...' : 'Map Loading...'}
          </p>
        </div>
        <div className="mt-6 text-center">
          <p
            className="text-dark text-base mb-3"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {fullAddress}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-sm uppercase tracking-wider transition-colors duration-200 min-h-[44px]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t.locations.getDirections}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   F. CROSS-LOCATION CTA
   ────────────────────────────────────────────────────────── */

function CrossLocationCTA({
  otherLocation,
  otherSlug,
  locale,
  prefix,
  t,
}: {
  otherLocation: typeof locations[string];
  otherSlug: string;
  locale: Locale;
  prefix: string;
  t: ReturnType<typeof getTranslations>;
}) {
  const otherFullAddress = `${otherLocation.address}, ${otherLocation.city}, ${otherLocation.state} ${otherLocation.zip}`;

  return (
    <section className="bg-dark py-16 border-t-4 border-primary">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-2xl text-primary mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t.locations.visitOther}
        </h2>
        <p
          className="text-light text-xl mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tortilleria El Rancherito &mdash; {otherLocation.city}
        </p>
        <p
          className="text-light/80 text-sm mb-2"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {otherFullAddress}
        </p>
        <a
          href={`tel:${otherLocation.phone}`}
          className="inline-block text-primary hover:text-primary-dark text-lg mb-6 transition-colors duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {otherLocation.phoneFormatted}
        </a>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`${prefix}/locations/${otherSlug}`}
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-light font-bold text-base uppercase tracking-wider rounded-lg transition-colors duration-200 min-h-[44px] inline-flex items-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {locale === 'es' ? 'Ver Ubicaci\u00f3n' : 'View Location'}
          </Link>
          <a
            href={otherLocation.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-light font-bold text-base uppercase tracking-wider rounded-lg transition-colors duration-200 min-h-[44px] inline-flex items-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.locations.orderOnline}
          </a>
        </div>
      </div>
    </section>
  );
}
