import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { locations, social } from "@/data/site-data";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://tortilleriaelrancherito.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tortilleria El Rancherito | Fresh Handmade Tortillas & Authentic Mexican Food - Red Oak & Gun Barrel City, TX",
    template: "%s | Tortilleria El Rancherito",
  },
  description:
    "Tortilleria El Rancherito is an authentic Mexican tortilleria and taqueria with locations in Red Oak, TX and Gun Barrel City, TX, serving fresh handmade tortillas, street tacos, tamales, barbacoa, carnitas, and traditional Mexican groceries.",
  keywords: [
    "tortilleria",
    "Mexican food",
    "handmade tortillas",
    "tacos",
    "tamales",
    "barbacoa",
    "carnitas",
    "Red Oak TX",
    "Gun Barrel City TX",
    "Mexican restaurant",
    "Mexican grocery",
    "Ellis County",
    "Cedar Creek Lake",
  ],
  authors: [{ name: "Tortilleria El Rancherito" }],
  creator: "Tortilleria El Rancherito",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tortilleria El Rancherito",
    title:
      "Tortilleria El Rancherito | Fresh Handmade Tortillas & Authentic Mexican Food",
    description:
      "Authentic Mexican tortilleria and taqueria with locations in Red Oak and Gun Barrel City, TX. Fresh handmade tortillas, street tacos, tamales, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tortilleria El Rancherito",
    description:
      "Fresh handmade tortillas & authentic Mexican food in Red Oak and Gun Barrel City, TX.",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function generateOrganizationJsonLd() {
  const locationList = Object.values(locations);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Tortilleria El Rancherito",
    url: siteUrl,
    logo: `${siteUrl}/logos/logo-circle.png`,
    description:
      "Authentic Mexican tortilleria and taqueria serving fresh handmade tortillas, street tacos, tamales, barbacoa, carnitas, and traditional Mexican groceries in Texas.",
    sameAs: [social.instagram, social.facebook, social.tiktok],
    contactPoint: locationList.map((loc) => ({
      "@type": "ContactPoint",
      telephone: `+1${loc.phone}`,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    })),
    department: locationList.map((loc) => ({
      "@type": "MexicanRestaurant",
      name: `${loc.name} - ${loc.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.city,
        addressRegion: loc.state,
        postalCode: loc.zip,
        addressCountry: "US",
      },
      telephone: `+1${loc.phone}`,
      url: `${siteUrl}/locations/${loc.slug}`,
      servesCuisine: "Mexican",
      priceRange: "$",
    })),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationJsonLd()),
          }}
        />
      </head>
      <body
        className={`${montserrat.className} bg-light text-dark antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
