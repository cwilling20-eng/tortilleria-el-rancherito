import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, type Locale } from '@/lib/translations';
import { locations, social } from '@/data/site-data';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);
  const prefix = locale === 'es' ? '/es' : '';
  const gbc = locations['gun-barrel-city'];
  const redOak = locations['red-oak'];

  const quickLinks = [
    { label: t.nav.home, href: `${prefix}/` },
    { label: t.nav.menu, href: `${prefix}/menu` },
    { label: t.nav.about, href: `${prefix}/about` },
    { label: t.nav.redOak, href: `${prefix}/locations/red-oak` },
    { label: t.nav.gunBarrelCity, href: `${prefix}/locations/gun-barrel-city` },
  ];

  return (
    <footer
      className="bg-darkest border-t-4 border-primary"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo + Tagline */}
          <div>
            <Link href={`${prefix}/`} className="inline-block mb-4">
              <Image
                src="/logos/logo-circle.png"
                alt="Tortilleria El Rancherito logo"
                width={112}
                height={112}
                className="h-28 w-28 rounded-full object-cover mix-blend-lighten"
              />
            </Link>
            <p
              className="text-light/80 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t.footer.tagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="text-primary text-lg mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-light/80 hover:text-primary text-sm transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Gun Barrel City */}
          <div>
            <h3
              className="text-primary text-lg mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Gun Barrel City
            </h3>
            <address
              className="not-italic space-y-2 text-sm text-light/80"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p>
                {gbc.address}
                <br />
                {gbc.city}, {gbc.state} {gbc.zip}
              </p>
              <p>
                <a
                  href={`tel:${gbc.phone}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {gbc.phoneFormatted}
                </a>
              </p>
              <p className="text-light/60">
                {locale === 'es' ? 'Abierto Todos los D\u00edas' : 'Open Daily'} 7AM-7PM
              </p>
            </address>
          </div>

          {/* Column 4: Red Oak */}
          <div>
            <h3
              className="text-primary text-lg mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Red Oak
            </h3>
            <address
              className="not-italic space-y-2 text-sm text-light/80"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p>
                {redOak.address}
                <br />
                {redOak.city}, {redOak.state} {redOak.zip}
              </p>
              <p>
                <a
                  href={`tel:${redOak.phone}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {redOak.phoneFormatted}
                </a>
              </p>
              <p className="text-light/60">
                {locale === 'es' ? 'Lun-Vie' : 'Mon-Fri'} 7AM-7PM
                <br />
                {locale === 'es' ? 'S\u00e1b' : 'Sat'} 7AM-6PM
                <br />
                {locale === 'es' ? 'Dom' : 'Sun'} 7AM-3PM
              </p>
            </address>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {/* Instagram */}
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/70 hover:text-primary transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Follow us on Instagram"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/70 hover:text-primary transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Follow us on Facebook"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href={social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/70 hover:text-primary transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Follow us on TikTok"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.22 8.22 0 0 0 4.76 1.5V6.86a4.83 4.83 0 0 1-1-.17z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8">
          <div className="accent-stripe-inline mx-auto mb-4" />
          <p
            className="text-center text-light/50 text-xs"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
