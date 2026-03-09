'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { menuCategories } from '@/data/menu-data';
import { locations } from '@/data/site-data';
import { getTranslations, type Locale } from '@/lib/translations';

interface MenuPageContentProps {
  locale: Locale;
}

export default function MenuPageContent({ locale }: MenuPageContentProps) {
  const t = getTranslations(locale);
  const [selectedLocation, setSelectedLocation] = useState<string>('gun-barrel-city');
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const categoryNavRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const selectedLocationData = locations[selectedLocation];

  // IntersectionObserver to track which category section is in view
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, observerOptions);

    menuCategories.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll active category button into view in the nav
  useEffect(() => {
    if (!categoryNavRef.current) return;
    const activeBtn = categoryNavRef.current.querySelector(`[data-cat="${activeCategory}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeCategory]);

  const scrollToCategory = useCallback((categoryId: string) => {
    isScrollingRef.current = true;
    setActiveCategory(categoryId);

    const el = sectionRefs.current[categoryId];
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, []);

  return (
    <div className="relative">
      {/* Location Selector */}
      <div className="bg-light py-6">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-3 text-center text-sm font-medium text-text-secondary uppercase tracking-wider">
            {t.menu.viewingLocation}
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setSelectedLocation('gun-barrel-city')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                selectedLocation === 'gun-barrel-city'
                  ? 'bg-primary text-light shadow-md'
                  : 'border border-dark/20 bg-transparent text-text-secondary hover:border-primary'
              }`}
            >
              Gun Barrel City
            </button>
            <button
              onClick={() => setSelectedLocation('red-oak')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                selectedLocation === 'red-oak'
                  ? 'bg-primary text-light shadow-md'
                  : 'border border-dark/20 bg-transparent text-text-secondary hover:border-primary'
              }`}
            >
              Red Oak
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Category Navigation */}
      <div className="sticky top-16 z-30 bg-light/80 backdrop-blur-md border-b border-dark/10">
        <div
          ref={categoryNavRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-1 min-w-max px-4 py-3">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                data-cat={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`whitespace-nowrap px-3 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'border-b-2 border-primary text-primary'
                    : 'border-b-2 border-transparent text-text-secondary hover:text-dark'
                }`}
              >
                {locale === 'es' ? cat.nameEs : cat.name}
              </button>
            ))}
            {/* Spacer to prevent last item from clipping at edge */}
            <div className="shrink-0 w-4" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        {menuCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el; }}
            className="mb-12"
          >
            {/* Banner Image */}
            {category.bannerImage && (
              <div className="relative mb-6 max-h-[280px] w-full overflow-hidden rounded-lg">
                <Image
                  src={category.bannerImage}
                  alt={`${locale === 'es' ? category.nameEs : category.name} — freshly prepared dishes at Tortilleria El Rancherito`}
                  width={1200}
                  height={280}
                  className="h-full max-h-[280px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Category Name */}
            <h2 className="mb-6 border-l-4 border-primary pl-4 font-[family-name:var(--font-display)] text-2xl md:text-3xl text-dark uppercase tracking-wide">
              {locale === 'es' ? category.nameEs : category.name}
            </h2>

            {/* Items List */}
            <div>
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 border-b border-dark/10 py-3"
                >
                  {/* Left: Name + Badge + Description */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-dark">
                        {locale === 'es' ? item.nameEs : item.name}
                      </span>
                      {item.isSignature && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                          {t.menu.signatureItem}
                        </span>
                      )}
                    </div>
                    {(locale === 'es' ? item.descriptionEs : item.description) && (
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                        {locale === 'es' ? item.descriptionEs : item.description}
                      </p>
                    )}
                  </div>

                  {/* Right: Price */}
                  <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-lg text-dark">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Sticky Order Button */}
      <a
        href={selectedLocationData.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-40 rounded-full bg-primary px-6 py-3 font-[family-name:var(--font-display)] text-lg uppercase text-light shadow-xl transition-colors duration-200 hover:bg-primary-dark md:bottom-8 md:right-8"
      >
        {t.menu.orderNow}
      </a>

      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
