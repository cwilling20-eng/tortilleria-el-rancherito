import { locations, social, type LocationData } from "@/data/site-data";

const SITE_URL = "https://tortilleriaelrancherito.com";

/**
 * Generates Organization schema with an ItemList of all locations.
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Tortilleria El Rancherito",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
    description:
      "Authentic Mexican tortilleria and taqueria serving fresh handmade tortillas, street tacos, tamales, barbacoa, carnitas, and traditional Mexican groceries in Texas.",
    sameAs: [social.instagram, social.facebook, social.tiktok],
    contactPoint: Object.values(locations).map((loc) => ({
      "@type": "ContactPoint",
      telephone: `+1${loc.phone}`,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    })),
    department: Object.values(locations).map((loc) =>
      buildRestaurantSchema(loc)
    ),
    hasOfferCatalog: {
      "@type": "ItemList",
      name: "Tortilleria El Rancherito Locations",
      itemListElement: Object.values(locations).map((loc, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "MexicanRestaurant",
          name: `${loc.name} - ${loc.city}`,
          url: `${SITE_URL}/locations/${loc.slug}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: loc.address,
            addressLocality: loc.city,
            addressRegion: loc.state,
            postalCode: loc.zip,
            addressCountry: "US",
          },
          telephone: `+1${loc.phone}`,
        },
      })),
    },
  };
}

function formatHoursForSchema(
  hours: LocationData["hours"]
): string[] {
  const dayAbbreviations: Record<string, string> = {
    Monday: "Mo",
    Tuesday: "Tu",
    Wednesday: "We",
    Thursday: "Th",
    Friday: "Fr",
    Saturday: "Sa",
    Sunday: "Su",
  };

  return hours
    .filter((h) => h.open !== 'Closed')
    .map((h) => {
      const dayAbbr = dayAbbreviations[h.day] || h.day;
      const openTime = convertTo24Hour(h.open);
      const closeTime = convertTo24Hour(h.close);
      return `${dayAbbr} ${openTime}-${closeTime}`;
    });
}

function convertTo24Hour(time12: string): string {
  const [time, modifier] = time12.split(" ");
  const [rawHours, minutes] = time.split(":");
  let hours = parseInt(rawHours, 10);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }
  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

function buildRestaurantSchema(loc: LocationData) {
  return {
    "@type": "MexicanRestaurant",
    "@id": `${SITE_URL}/locations/${loc.slug}/#restaurant`,
    name: `${loc.name} - ${loc.city}`,
    url: `${SITE_URL}/locations/${loc.slug}`,
    telephone: `+1${loc.phone}`,
    priceRange: "$",
    servesCuisine: "Mexican",
    acceptsReservations: "false",
    hasMenu: {
      "@type": "Menu",
      url: `${SITE_URL}/menu`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
      addressCountry: "US",
    },
    geo: undefined, // Add lat/lng when available
    openingHoursSpecification: loc.hours
      .filter((h) => h.open !== 'Closed')
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: convertTo24Hour(h.open),
        closes: convertTo24Hour(h.close),
      })),
    openingHours: formatHoursForSchema(loc.hours),
    sameAs: [social.instagram, social.facebook, social.tiktok],
    image: `${SITE_URL}${loc.heroImage}`,
    ...(loc.orderUrl
      ? {
          potentialAction: {
            "@type": "OrderAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: loc.orderUrl,
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
            deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp",
          },
        }
      : {}),
  };
}

/**
 * Generates a MexicanRestaurant schema for a specific location.
 */
export function generateLocalBusinessSchema(locationSlug: string) {
  const loc = locations[locationSlug];

  if (!loc) {
    throw new Error(`Location "${locationSlug}" not found in site data.`);
  }

  return {
    "@context": "https://schema.org",
    ...buildRestaurantSchema(loc),
  };
}

/**
 * Generates a FAQPage schema from an array of Q&A pairs.
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates a Menu schema for the restaurant.
 */
export function generateMenuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_URL}/menu/#menu`,
    name: "Tortilleria El Rancherito Menu",
    url: `${SITE_URL}/menu`,
    description:
      "Fresh handmade tortillas, street tacos, tamales, barbacoa, carnitas, burritos, tortas, and family packs.",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Tacos",
        description:
          "Authentic street tacos on fresh handmade tortillas with your choice of meat.",
      },
      {
        "@type": "MenuSection",
        name: "Burritos",
        description:
          "Large flour tortilla burritos filled with your choice of meat, rice, beans, and toppings.",
      },
      {
        "@type": "MenuSection",
        name: "Tortas",
        description:
          "Traditional Mexican sandwiches on fresh telera bread.",
      },
      {
        "@type": "MenuSection",
        name: "Quesadillas",
        description:
          "Handmade tortilla quesadillas with melted cheese and your choice of meat.",
      },
      {
        "@type": "MenuSection",
        name: "Tamales",
        description:
          "Traditional handmade tamales, available individually or by the dozen.",
      },
      {
        "@type": "MenuSection",
        name: "Breakfast",
        description:
          "Breakfast tacos, burritos, and plates served on fresh handmade tortillas.",
      },
      {
        "@type": "MenuSection",
        name: "Family Packs",
        description:
          "Family-sized portions of your favorite meats with tortillas and sides.",
      },
      {
        "@type": "MenuSection",
        name: "Fresh Tortillas",
        description:
          "Handmade corn and flour tortillas available by the pack.",
      },
    ],
    inLanguage: ["en", "es"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}
