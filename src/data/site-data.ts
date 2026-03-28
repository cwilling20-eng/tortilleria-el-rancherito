/* ============================================
   DESIGN DECISIONS — Tortilleria El Rancherito
   ============================================
   Typography:  Bebas Neue (display) + Montserrat (body)
   Signature:   Orange diagonal accent stripe (4px) used as section dividers and border accents
   Rhythm:      Hero(video-dark) → Features(warm-white) → Locations(dark) → Story(photo-bg) → Testimonials(alt-warm) → Grocery(dark) → Social(warm) → Footer(darkest)
   Hero:        Video background loop (Cloudinary-hosted) with dark overlay + poster image
   Colors:      Dominant: #1A1A1A | Supporting: #FAF7F2 | Accent: #F47A1F
   ============================================ */

// ── Brand Colors ──
export const colors = {
  primary: '#F47A1F',      // Rancherito Orange — CTAs, headings accent, signature element
  primaryDark: '#D9691A',  // Darker orange for hover states
  dark: '#1A1A1A',         // Near-black — nav, dark sections, footer
  darkest: '#141414',      // Footer background
  light: '#FAF7F2',        // Warm white — light sections
  lightAlt: '#F0EBE3',    // Alt warm — alternating light sections
  green: '#2E7D32',        // Green accent — "Now Open" badges, freshness
  textPrimary: '#1A1A1A',  // Headings/body on light
  textSecondary: '#6B6560', // Descriptions on light
  textOnDark: '#FAF7F2',   // Body text on dark
  textHeadingOnDark: '#F47A1F', // Orange headings on dark
} as const;

// ── Cloudinary Video URLs ──
export const videos = {
  hero: 'https://res.cloudinary.com/ddhsjhqsg/video/upload/v1773008494/el-rancherito/videos/hero-video.mp4',
  video2: 'https://res.cloudinary.com/ddhsjhqsg/video/upload/v1773008500/el-rancherito/videos/video-2.mp4',
  video3: 'https://res.cloudinary.com/ddhsjhqsg/video/upload/v1773008505/el-rancherito/videos/video-3.mp4',
  video4: 'https://res.cloudinary.com/ddhsjhqsg/video/upload/v1773008511/el-rancherito/videos/video-4.mp4',
  video5: 'https://res.cloudinary.com/ddhsjhqsg/video/upload/v1773008515/el-rancherito/videos/video-5.mp4',
} as const;

// ── Location Data ──
export interface LocationData {
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  zip: string;
  orderUrl: string;
  googleBusinessUrl: string;
  heroImage: string;
  isNew?: boolean;
  openedDate?: string;
  hours: { day: string; open: string; close: string }[];
}

export const locations: Record<string, LocationData> = {
  'gun-barrel-city': {
    slug: 'gun-barrel-city',
    name: 'Tortilleria El Rancherito',
    city: 'Gun Barrel City',
    state: 'TX',
    address: '2000 W Main St',
    phone: '9038027302',
    phoneFormatted: '(903) 802-7302',
    zip: '75156',
    orderUrl: 'https://gunbarrelcity.tortilleriaelrancherito.com/',
    googleBusinessUrl: 'https://share.google/2lHJ9oXRiJ2NQqYkw',
    heroImage: '/images/tacos.jpg',
    isNew: true,
    openedDate: '2026-02-09',
    hours: [
      { day: 'Monday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Tuesday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Wednesday', open: 'Closed', close: 'Closed' },
      { day: 'Thursday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Friday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Saturday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Sunday', open: '7:00 AM', close: '3:00 PM' },
    ],
  },
  'red-oak': {
    slug: 'red-oak',
    name: 'Tortilleria El Rancherito',
    city: 'Red Oak',
    state: 'TX',
    address: '109 TX-342',
    phone: '4695526024',
    phoneFormatted: '(469) 552-6024',
    zip: '75156',
    orderUrl: 'https://redoak.tortilleriaelrancherito.com/',
    googleBusinessUrl: 'https://share.google/Vq92EYyDXVhXwJSy3',
    heroImage: '/images/fajitas.jpg',
    hours: [
      { day: 'Sunday', open: '7:00 AM', close: '3:00 PM' },
      { day: 'Monday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Tuesday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Wednesday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Thursday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Friday', open: '7:00 AM', close: '7:00 PM' },
      { day: 'Saturday', open: '7:00 AM', close: '6:00 PM' },
    ],
  },
};

// ── Social Links ──
export const social = {
  instagram: 'https://www.instagram.com/tortilleria.el.rancherito',
  facebook: 'https://www.facebook.com/profile.php?id=61559522005063',
  tiktok: 'https://www.tiktok.com/@tortilleria.el.ra',
} as const;

// ── Testimonials ──
export const testimonials = [
  {
    name: 'Malakin V.',
    quote: "I've lived in the Dallas area since 2004. I can now confidently say that the best Mexican food is right here in Red Oak. As authentic and flavorful as it gets. Everything is made right on site and it's worth the drive.",
    platform: 'Google',
  },
  {
    name: 'Josiah Beam',
    quote: 'This is a great place to get authentic Mexican food. The chorizo quesadilla and pastor tacos were delicious.',
    platform: 'Google',
  },
  {
    name: 'Shakoyia Strickland',
    quote: 'Breakfast tacos were 10/10. The tortillas were the star of the show.',
    platform: 'Google',
  },
  {
    name: 'Gabriela Galarza',
    quote: 'Food was delicious, prices were reasonable, and service was quick even though the place was busy.',
    platform: 'Google',
  },
  {
    name: 'Randy Jeminez',
    quote: 'Best tamales in Ellis County.',
    platform: 'Google',
  },
];
