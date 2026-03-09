'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, type Locale } from '@/lib/translations';
import { locations } from '@/data/site-data';

interface NavbarProps {
  locale: Locale;
  currentPath: string;
}

export default function Navbar({ locale, currentPath }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = getTranslations(locale);

  const redOak = locations['red-oak'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const prefix = locale === 'es' ? '/es' : '';

  const navLinks = [
    { label: t.nav.home, href: `${prefix}/` },
    { label: t.nav.menu, href: `${prefix}/menu` },
    { label: t.nav.redOak, href: `${prefix}/locations/red-oak` },
    { label: t.nav.gunBarrelCity, href: `${prefix}/locations/gun-barrel-city` },
    { label: t.nav.about, href: `${prefix}/about` },
  ];

  // Build language toggle href: swap locale prefix on the current path
  const langToggleHref = locale === 'en'
    ? `/es${currentPath}`
    : currentPath.replace(/^\/es/, '') || '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark shadow-lg'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href={`${prefix}/`} className="flex-shrink-0">
              <Image
                src="/logos/logo.avif"
                alt="Tortilleria El Rancherito logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-medium uppercase tracking-wider text-light hover:text-primary transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side: language toggle + order button + mobile hamburger */}
            <div className="flex items-center gap-3">
              {/* Language Toggle — always visible */}
              <div
                className="flex items-center gap-1 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
                role="navigation"
                aria-label="Language selection"
              >
                <Link
                  href={locale === 'en' ? currentPath : langToggleHref}
                  className={`px-1.5 py-1 transition-colors duration-200 ${
                    locale === 'en'
                      ? 'text-light font-bold'
                      : 'text-light/50 hover:text-light/80'
                  }`}
                  aria-label="Switch to English"
                  aria-current={locale === 'en' ? 'true' : undefined}
                >
                  EN
                </Link>
                <span className="text-light/30">|</span>
                <Link
                  href={locale === 'es' ? currentPath : langToggleHref}
                  className={`px-1.5 py-1 transition-colors duration-200 ${
                    locale === 'es'
                      ? 'text-light font-bold'
                      : 'text-light/50 hover:text-light/80'
                  }`}
                  aria-label="Cambiar a Espa&ntilde;ol"
                  aria-current={locale === 'es' ? 'true' : undefined}
                >
                  ES
                </Link>
              </div>

              {/* Order Online Button — desktop only */}
              <Link
                href={`${prefix}/menu`}
                className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-light font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t.nav.orderOnline}
              </Link>

              {/* Hamburger — mobile only */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 relative"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <span
                  className={`block h-0.5 w-6 bg-light rounded transition-all duration-300 ${
                    mobileOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-light rounded transition-all duration-300 ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-light rounded transition-all duration-300 ${
                    mobileOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-dark/60 transition-opacity duration-200 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-dark shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Mobile navigation menu"
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="w-11 h-11 flex items-center justify-center text-light"
            aria-label="Close menu"
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
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-2 px-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-lg font-medium uppercase tracking-wider text-light hover:text-primary transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Order Online button in mobile menu */}
        <div className="mt-auto px-6 pb-8">
          <Link
            href={`${prefix}/menu`}
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-3 bg-primary hover:bg-primary-dark text-light font-bold text-lg uppercase tracking-wider rounded-lg transition-colors duration-200"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.nav.orderOnline}
          </Link>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark h-16 flex items-center justify-between px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]"
        role="navigation"
        aria-label="Quick actions"
      >
        {/* Phone tap-to-call (Red Oak default) */}
        <a
          href={`tel:${redOak.phone}`}
          className="flex items-center gap-2 text-light hover:text-primary transition-colors duration-200 min-h-[44px] min-w-[44px]"
          aria-label={`Call Red Oak location at ${redOak.phoneFormatted}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span
            className="text-sm font-medium"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {redOak.phoneFormatted}
          </span>
        </a>

        {/* Order Online */}
        <Link
          href={`${prefix}/menu`}
          className="flex items-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-light font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200 min-h-[44px]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t.nav.orderOnline}
        </Link>
      </div>
    </>
  );
}
