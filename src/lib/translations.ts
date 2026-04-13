// SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
// All Spanish translations use Mexican Spanish (norteño register, Texas-appropriate)
// NOT formal Castilian Spanish, NOT generic Latin American Spanish

export type Locale = 'en' | 'es';

const translations = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      menu: 'Menu',
      redOak: 'Red Oak',
      gunBarrelCity: 'Gun Barrel City',
      about: 'About',
      orderOnline: 'Order Online',
      viewMenu: 'View Menu',
    },
    // Hero
    hero: {
      headline: 'Fresh. Handmade. Authentic.',
      subheadline: 'Two locations serving Red Oak & Gun Barrel City',
      ctaGBC: 'Gun Barrel City',
      ctaRedOak: 'Red Oak',
    },
    // Signature Products
    signature: {
      sectionTitle: 'Made From Scratch, Every Day.',
      tortillas: {
        title: 'Fresh Handmade Tortillas',
        description: 'Made from scratch every single day. Our corn and flour tortillas are pressed and cooked right here — soft, warm, and nothing like what you get from a store. This is what a real tortilleria does.',
      },
      tacos: {
        title: 'Authentic Street Tacos',
        description: 'Barbacoa slow-cooked until it falls apart. Carnitas braised to perfection. Pastor with that perfect char. Every taco starts with our handmade tortillas and real, traditional recipes.',
      },
      grocery: {
        title: 'Mexican Grocery & More',
        description: 'More than a restaurant — we\'re a tortilleria and Mexican grocery. Pick up fresh tortillas by the pack, grab tamales for the family, or shop our selection of authentic Mexican products to take home.',
      },
    },
    // Locations
    locations: {
      sectionTitle: 'Two Locations, One Family',
      nowOpen: 'Now Open',
      getDirections: 'Get Directions',
      orderOnline: 'Order Online',
      visitOther: 'Visit Our Other Location',
      hours: 'Hours',
      phone: 'Phone',
      address: 'Address',
      openDaily: 'Open Daily',
      viewMenu: 'View Full Menu',
    },
    // About
    about: {
      sectionTitle: 'Our Story',
      storyP1: 'From slow-simmered carnitas and hand-rolled tamales to classic Mexican staples, Tortilleria El Rancherito serves honest, comforting flavors in a laid-back, friendly setting.',
      storyP2: 'Guests love our super soft, fluffy corn tortillas, melt-in-your-mouth barbacoa, and service that treats you like family.',
      storyP3: 'Everything is prepared with fresh ingredients and traditional methods, delivering authentic Mexican flavors the way they\'re meant to be enjoyed.',
      storyP4: 'Whether you\'re stopping in for a quick bite, picking up fresh tortillas, or sitting down for a relaxed meal, you can always expect fresh ingredients, generous portions, authentic recipes, and a warm welcome.',
      storyP5: 'Proudly called the best tamales in Ellis County, we can\'t wait to share a plate with you.',
      learnMore: 'Learn More About Us',
      pageTitle: 'About Tortilleria El Rancherito',
      heritage: {
        title: 'The Tortilleria Heritage',
        description: 'A tortilleria isn\'t just a place that serves food — it\'s where tortillas are born. Every day, we start from scratch: masa made fresh, pressed by hand, cooked on the comal until they puff up just right. The difference between our tortillas and store-bought? You can taste it in the first bite. Soft, warm, with that real corn flavor that only comes from doing it the traditional way.',
      },
      grocerySection: {
        title: 'Take the Flavors Home',
        description: 'We\'re not just a restaurant. Walk through our doors and you\'ll find a full Mexican grocery with everything you need to cook authentic Mexican food at home. Fresh tortillas by the pack, salsas, dried chiles, Mexican sodas, and all the staples your abuela would approve of.',
      },
      community: {
        title: 'Serving Our Community',
        description: 'From our original location in Red Oak to our newest spot in Gun Barrel City on Cedar Creek Lake, we\'re proud to be part of the Ellis County and Henderson County communities. Every plate we serve is a thank-you to the families and neighbors who\'ve made us their go-to spot for real Mexican food.',
      },
    },
    // Testimonials
    testimonials: {
      sectionTitle: 'What Our Guests Say',
    },
    // Grocery
    grocery: {
      sectionTitle: 'Take the Flavors Home',
      description: 'Fresh tortillas by the pack. Tamales for the whole family. Traditional Mexican groceries and products. Everything you need to bring authentic flavors to your kitchen.',
      cta: 'Visit Us Today',
    },
    // Social
    social: {
      sectionTitle: 'Follow Us',
      description: 'Stay up to date with specials, new items, and behind-the-scenes looks at how we make everything fresh.',
    },
    // Menu page
    menu: {
      pageTitle: 'Our Menu',
      viewingLocation: 'Ordering for:',
      meatsAvailable: 'Meats Available',
      signatureItem: 'Signature',
      orderNow: 'Order Now',
    },
    // Footer
    footer: {
      tagline: 'Fresh handmade tortillas, authentic tacos, and traditional Mexican food.',
      copyright: `© ${new Date().getFullYear()} Tortilleria El Rancherito. All rights reserved.`,
      quickLinks: 'Quick Links',
    },
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
    },
    // Review Flow
    review: {
      experienceTitle: 'How was your experience at Tortilleria El Rancherito?',
      greatExperience: 'Great Experience! 😊',
      couldBeBetter: 'Could Be Better',
      thankYou: 'Thank you!',
      shareOnGoogle: 'Would you share your experience on Google?',
      shareSubtext: 'It takes just 60 seconds and helps us serve our community better',
      leaveReview: 'Leave Google Review',
      discountTitle: 'Your 10% Off Discount Code',
      discountInstruction: 'Show this code to staff on your next visit to receive 10% off',
      discountExpiry: 'Valid for 30 days from today',
      expiresOn: 'Expires',
      sorryTitle: "We're sorry to hear that",
      sorrySubtext: 'Your feedback helps us improve. Please tell us what happened and we\'ll make it right.',
      managerPromise: 'Our manager will personally review your feedback within 24 hours',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      phoneOptional: 'Phone Number (optional)',
      whatWentWrong: 'What went wrong?',
      sendFeedback: 'Send Feedback',
      sending: 'Sending...',
      feedbackThankYou: 'Thank you for your feedback. A manager will contact you within 24 hours.',
      feedbackError: 'Something went wrong. Please try again or call us directly.',
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter your email',
      emailInvalid: 'Please enter a valid email address',
      messageRequired: 'Please tell us what happened',
    },
    // Meta
    meta: {
      homeTitle: 'Tortilleria El Rancherito | Fresh Handmade Tortillas & Authentic Mexican Food - Red Oak & Gun Barrel City, TX',
      homeDescription: 'Tortilleria El Rancherito is an authentic Mexican tortilleria and taqueria with locations in Red Oak, TX and Gun Barrel City, TX, serving fresh handmade tortillas, street tacos, tamales, barbacoa, carnitas, and traditional Mexican groceries.',
      menuTitle: 'Menu | Tortilleria El Rancherito - Authentic Mexican Food',
      menuDescription: 'View our full menu of fresh handmade tortillas, street tacos, tamales, barbacoa, carnitas, burritos, tortas, and family packs. Order online for pickup.',
      aboutTitle: 'About Us | Tortilleria El Rancherito - Our Story',
      aboutDescription: 'Learn about Tortilleria El Rancherito — a family-run tortilleria and taqueria serving fresh handmade tortillas and authentic Mexican food in Red Oak and Gun Barrel City, Texas.',
      gbcTitle: 'Gun Barrel City Location | Tortilleria El Rancherito - Cedar Creek Lake Area Mexican Food',
      gbcDescription: 'Visit Tortilleria El Rancherito in Gun Barrel City, TX at 2000 W Main St. Fresh handmade tortillas, street tacos, tamales, barbacoa, and Mexican groceries near Cedar Creek Lake. Open 7 days a week.',
      redOakTitle: 'Red Oak Location | Tortilleria El Rancherito - Ellis County Mexican Food',
      redOakDescription: 'Visit Tortilleria El Rancherito in Red Oak, TX at 109 S State Hwy 342. Fresh handmade tortillas, street tacos, tamales, barbacoa, and Mexican groceries in Ellis County. Open 7 days a week.',
    },
  },
  // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
  es: {
    nav: {
      home: 'Inicio',
      menu: 'Menú',
      redOak: 'Red Oak',
      gunBarrelCity: 'Gun Barrel City',
      about: 'Nosotros',
      orderOnline: 'Ordenar en Línea',
      viewMenu: 'Ver Menú',
    },
    hero: {
      headline: 'Fresco. Hecho a Mano. Auténtico.',
      subheadline: 'Dos ubicaciones sirviendo a Red Oak y Gun Barrel City',
      ctaGBC: 'Gun Barrel City',
      ctaRedOak: 'Red Oak',
    },
    signature: {
      sectionTitle: 'Hecho Desde Cero, Todos los Días.',
      tortillas: {
        title: 'Tortillas Frescas Hechas a Mano',
        description: 'Hechas desde cero todos los días. Nuestras tortillas de maíz y harina se prensan y cocinan aquí mismo — suavecitas, calientitas, y nada que ver con las de la tienda. Esto es lo que hace una tortilleria de verdad.',
      },
      tacos: {
        title: 'Tacos Auténticos de la Calle',
        description: 'Barbacoa cocida a fuego lento hasta que se deshace. Carnitas guisadas a la perfección. Pastor con ese toque de la plancha. Cada taco empieza con nuestras tortillas hechas a mano y recetas bien tradicionales.',
      },
      grocery: {
        title: 'Tienda de Productos Mexicanos',
        description: 'Más que un restaurante — somos una tortilleria y tiendita mexicana. Llévate tortillas frescas por paquete, tamales pa\' toda la familia, o compra de nuestros productos mexicanos auténticos.',
      },
    },
    locations: {
      sectionTitle: 'Dos Ubicaciones, Una Familia',
      nowOpen: 'Ya Abierto',
      getDirections: 'Cómo Llegar',
      orderOnline: 'Ordenar en Línea',
      visitOther: 'Visita Nuestra Otra Ubicación',
      hours: 'Horario',
      phone: 'Teléfono',
      address: 'Dirección',
      openDaily: 'Abierto Todos los Días',
      viewMenu: 'Ver Menú Completo',
    },
    about: {
      sectionTitle: 'Nuestra Historia',
      storyP1: 'Desde carnitas cocidas a fuego lento y tamales enrollados a mano hasta los clásicos mexicanos, Tortilleria El Rancherito te ofrece sabores honestos y reconfortantes en un ambiente relajado y familiar.',
      storyP2: 'A nuestros clientes les encantan nuestras tortillas de maíz bien suavecitas, la barbacoa que se deshace en la boca, y el trato como si fueras de la familia.',
      storyP3: 'Todo se prepara con ingredientes frescos y métodos tradicionales, para darte los sabores mexicanos auténticos como deben de ser.',
      storyP4: 'Ya sea que pases por un taquito rápido, a recoger tortillas frescas, o a sentarte a comer con calma, siempre puedes esperar ingredientes frescos, porciones generosas, recetas auténticas y una bienvenida calientita.',
      storyP5: 'Nos llaman los mejores tamales del Condado de Ellis, y no podemos esperar a compartir un plato contigo.',
      learnMore: 'Conoce Más de Nosotros',
      pageTitle: 'Sobre Tortilleria El Rancherito',
      heritage: {
        title: 'La Herencia de la Tortilleria',
        description: 'Una tortilleria no es nomás un lugar donde se vende comida — es donde nacen las tortillas. Cada día, empezamos desde cero: la masa fresca, prensada a mano, cocinada en el comal hasta que se inflan igualito. La diferencia entre nuestras tortillas y las de la tienda? Se nota desde la primera mordida. Suavecitas, calientitas, con ese sabor de maíz de verdad que solo sale de hacerlas a la manera tradicional.',
      },
      grocerySection: {
        title: 'Llévate los Sabores a Casa',
        description: 'No somos nomás un restaurante. Entra y vas a encontrar una tiendita mexicana con todo lo que necesitas pa\' cocinar comida mexicana auténtica en tu casa. Tortillas frescas por paquete, salsas, chiles secos, refrescos mexicanos, y todos los básicos que tu abuela aprobaría.',
      },
      community: {
        title: 'Sirviendo a Nuestra Comunidad',
        description: 'Desde nuestra ubicación original en Red Oak hasta nuestro nuevo local en Gun Barrel City cerca del Lago Cedar Creek, estamos orgullosos de ser parte de las comunidades del Condado de Ellis y Henderson. Cada plato que servimos es un agradecimiento a las familias y vecinos que nos han hecho su lugar favorito pa\' la comida mexicana de verdad.',
      },
    },
    testimonials: {
      sectionTitle: 'Lo Que Dicen Nuestros Clientes',
    },
    grocery: {
      sectionTitle: 'Llévate los Sabores a Casa',
      description: 'Tortillas frescas por paquete. Tamales pa\' toda la familia. Productos y abarrotes mexicanos tradicionales. Todo lo que necesitas para traer sabores auténticos a tu cocina.',
      cta: 'Visítanos Hoy',
    },
    social: {
      sectionTitle: 'Síguenos',
      description: 'Entérate de nuestras ofertas, productos nuevos, y mira cómo hacemos todo fresco detrás de cámaras.',
    },
    menu: {
      pageTitle: 'Nuestro Menú',
      viewingLocation: 'Ordenar para:',
      meatsAvailable: 'Carnes Disponibles',
      signatureItem: 'Especialidad',
      orderNow: 'Ordenar Ahora',
    },
    footer: {
      tagline: 'Tortillas frescas hechas a mano, tacos auténticos, y comida mexicana tradicional.',
      copyright: `© ${new Date().getFullYear()} Tortilleria El Rancherito. Todos los derechos reservados.`,
      quickLinks: 'Enlaces Rápidos',
    },
    review: {
      experienceTitle: '¿Cómo fue tu experiencia en Tortilleria El Rancherito?',
      greatExperience: '¡Excelente! 😊',
      couldBeBetter: 'Podría mejorar',
      thankYou: '¡Gracias!',
      shareOnGoogle: '¿Compartirías tu experiencia en Google?',
      shareSubtext: 'Solo toma 60 segundos y nos ayuda a servir mejor a nuestra comunidad',
      leaveReview: 'Dejar Reseña en Google',
      discountTitle: 'Tu Código de 10% de Descuento',
      discountInstruction: 'Muestra este código al personal en tu próxima visita para recibir 10% de descuento',
      discountExpiry: 'Válido por 30 días desde hoy',
      expiresOn: 'Expira',
      sorryTitle: 'Lo sentimos mucho',
      sorrySubtext: 'Tus comentarios nos ayudan a mejorar. Por favor cuéntanos qué pasó y lo resolveremos.',
      managerPromise: 'Nuestro gerente revisará personalmente tus comentarios en 24 horas',
      fullName: 'Nombre Completo',
      emailAddress: 'Correo Electrónico',
      phoneOptional: 'Teléfono (opcional)',
      whatWentWrong: '¿Qué salió mal?',
      sendFeedback: 'Enviar Comentarios',
      sending: 'Enviando...',
      feedbackThankYou: 'Gracias por tus comentarios. Un gerente se comunicará contigo en 24 horas.',
      feedbackError: 'Algo salió mal. Inténtalo de nuevo o llámanos directamente.',
      nameRequired: 'Por favor ingresa tu nombre',
      emailRequired: 'Por favor ingresa tu correo electrónico',
      emailInvalid: 'Por favor ingresa un correo electrónico válido',
      messageRequired: 'Por favor cuéntanos qué pasó',
    },
    faq: {
      title: 'Preguntas Frecuentes',
    },
    meta: {
      homeTitle: 'Tortilleria El Rancherito | Tortillas Frescas Hechas a Mano y Comida Mexicana Auténtica - Red Oak y Gun Barrel City, TX',
      homeDescription: 'Tortilleria El Rancherito es una tortilleria y taqueria mexicana auténtica con ubicaciones en Red Oak, TX y Gun Barrel City, TX, sirviendo tortillas frescas hechas a mano, tacos, tamales, barbacoa, carnitas, y productos mexicanos tradicionales.',
      menuTitle: 'Menú | Tortilleria El Rancherito - Comida Mexicana Auténtica',
      menuDescription: 'Ve nuestro menú completo de tortillas frescas, tacos, tamales, barbacoa, carnitas, burritos, tortas, y paquetes familiares. Ordena en línea para recoger.',
      aboutTitle: 'Nosotros | Tortilleria El Rancherito - Nuestra Historia',
      aboutDescription: 'Conoce a Tortilleria El Rancherito — una tortilleria y taqueria familiar sirviendo tortillas frescas hechas a mano y comida mexicana auténtica en Red Oak y Gun Barrel City, Texas.',
      gbcTitle: 'Gun Barrel City | Tortilleria El Rancherito - Comida Mexicana cerca del Lago Cedar Creek',
      gbcDescription: 'Visita Tortilleria El Rancherito en Gun Barrel City, TX en 2000 W Main St. Tortillas frescas hechas a mano, tacos, tamales, barbacoa, y productos mexicanos cerca del Lago Cedar Creek. Abierto los 7 días.',
      redOakTitle: 'Red Oak | Tortilleria El Rancherito - Comida Mexicana en el Condado de Ellis',
      redOakDescription: 'Visita Tortilleria El Rancherito en Red Oak, TX en 109 S State Hwy 342. Tortillas frescas hechas a mano, tacos, tamales, barbacoa, y productos mexicanos en el Condado de Ellis. Abierto los 7 días.',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/es') ? 'es' : 'en';
}
