export interface MenuItem {
  name: string;
  nameEs: string; // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
  price: string;
  description?: string;
  descriptionEs?: string; // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
  gbcDescription?: string;
  gbcDescriptionEs?: string;
  isSignature?: boolean;
  modifiers?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameEs: string; // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
  bannerImage?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    nameEs: 'Desayuno', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/breakfast tacos.jpg',
    items: [
      {
        name: 'Breakfast Tacos (4)',
        nameEs: 'Tacos de Desayuno (4)',
        price: '$9.75',
        description: 'Choice of breakfast meat. Flour or corn tortilla.',
        descriptionEs: 'Escoge tu carne. Tortilla de harina o maíz.',
        isSignature: true,
      },
      {
        name: 'Breakfast Taco (Single)',
        nameEs: 'Taco de Desayuno',
        price: '$2.50',
        description: 'Single taco with any breakfast meat. Flour or corn tortilla.',
        descriptionEs: 'Un taco con la carne que gustes. Tortilla de harina o maíz.',
      },
      {
        name: 'Small Breakfast Burrito',
        nameEs: 'Burrito de Desayuno Chico',
        price: '$5.75',
        description: '10" tortilla and your choice of breakfast meat.',
        descriptionEs: 'Tortilla de 10" con la carne que gustes.',
      },
      {
        name: 'Big Breakfast Burrito',
        nameEs: 'Burrito de Desayuno Grande',
        price: '$8.50',
        description: '14" tortilla and your choice of breakfast meat.',
        descriptionEs: 'Tortilla de 14" con la carne que gustes.',
      },
    ],
  },
  {
    id: 'tacos',
    name: 'Tacos',
    nameEs: 'Tacos', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/street-tacos.jpg',
    items: [
      {
        name: 'Taco (Single)',
        nameEs: 'Taco',
        price: '$2.75',
        description: 'Any meat; corn or flour tortilla; cilantro, onion and lime.',
        descriptionEs: 'Cualquier carne; tortilla de maíz o harina; cilantro, cebolla y limón.',
      },
      {
        name: '3 Taco Plate',
        nameEs: 'Plato de 3 Tacos',
        price: '$11.00',
        description: '3 tacos with choice of tortilla and meat, rice and beans.',
        descriptionEs: '3 tacos con tortilla y carne a tu gusto, arroz y frijoles.',
      },
      {
        name: '5 Taco Platter',
        nameEs: 'Plato de 5 Tacos',
        price: '$13.50',
        description: '5 tacos with choice of tortilla and meat.',
        descriptionEs: '5 tacos con tortilla y carne a tu gusto.',
      },
      {
        name: 'Gordita',
        nameEs: 'Gordita',
        price: '$3.50',
        description: 'Choice of meat; lettuce and tomato on the side.',
        descriptionEs: 'Escoge tu carne; lechuga y tomate a un lado.',
      },
    ],
  },
  {
    id: 'quesadillas',
    name: 'Quesadillas',
    nameEs: 'Quesadillas', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/quesadilla.jpg',
    items: [
      {
        name: 'Quesadilla Platter',
        nameEs: 'Plato de Quesadilla',
        price: '$10.00',
        description: 'Choice of meat; cheese inside, rice, beans, lettuce, tomato and sour cream on the side.',
        descriptionEs: 'Escoge tu carne; queso adentro, arroz, frijoles, lechuga, tomate y crema a un lado.',
      },
    ],
  },
  {
    id: 'burritos',
    name: 'Burritos',
    nameEs: 'Burritos', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/breakfast burrito.jpg',
    items: [
      {
        name: 'Lunch Burrito',
        nameEs: 'Burrito de Almuerzo',
        price: '$11.00',
        description: 'Choice of meat, rice, beans and cheese.',
        descriptionEs: 'Escoge tu carne, arroz, frijoles y queso.',
      },
    ],
  },
  {
    id: 'tortas',
    name: 'Tortas',
    nameEs: 'Tortas', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/torta.jpg',
    items: [
      {
        name: 'Torta',
        nameEs: 'Torta',
        price: '$10.00',
        description: 'Warm telera bread with choice of meat; beans, lettuce, tomato, cheese & avocado.',
        descriptionEs: 'Pan telera calientito con la carne que gustes; frijoles, lechuga, tomate, queso y aguacate.',
      },
    ],
  },
  {
    id: 'tamales',
    name: 'Tamales',
    nameEs: 'Tamales', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/tamales.jpg',
    items: [
      {
        name: 'Tamale (Single)',
        nameEs: 'Tamal',
        price: '$2.25',
        description: 'Pork, Chicken, or Bean/Cheese/Jalapeño.',
        descriptionEs: 'Puerco, Pollo, o Frijol/Queso/Jalapeño.',
        gbcDescription: 'Pork or Chicken.',
        gbcDescriptionEs: 'Puerco o Pollo.',
        isSignature: true,
      },
      {
        name: 'Tamales (Half Dozen)',
        nameEs: 'Tamales (Media Docena)',
        price: '$13.00',
        description: 'Pork, Chicken, or Bean/Cheese/Jalapeño.',
        descriptionEs: 'Puerco, Pollo, o Frijol/Queso/Jalapeño.',
        gbcDescription: 'Pork or Chicken.',
        gbcDescriptionEs: 'Puerco o Pollo.',
      },
      {
        name: 'Tamales (Dozen)',
        nameEs: 'Tamales (Docena)',
        price: '$22.00',
        description: 'Pork, Chicken, or Bean/Cheese/Jalapeño.',
        descriptionEs: 'Puerco, Pollo, o Frijol/Queso/Jalapeño.',
        gbcDescription: 'Pork or Chicken.',
        gbcDescriptionEs: 'Puerco o Pollo.',
      },
    ],
  },
  {
    id: 'by-the-pound',
    name: 'By the Pound',
    nameEs: 'Por Libra', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/barbacoa.jpg',
    items: [
      {
        name: 'Barbacoa',
        nameEs: 'Barbacoa',
        price: '½ lb $11.50 · 1 lb $20',
        description: 'Cheek beef meat.',
        descriptionEs: 'Carne de cachete de res.',
        isSignature: true,
      },
      {
        name: 'Carnitas',
        nameEs: 'Carnitas',
        price: '½ lb $7.50 · 1 lb $14',
        description: 'Braised pork.',
        descriptionEs: 'Puerco guisado.',
        isSignature: true,
      },
    ],
  },
  {
    id: 'fresh-tortillas',
    name: 'Fresh Tortillas',
    nameEs: 'Tortillas Frescas', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/tortillas.jpg',
    items: [
      {
        name: 'Corn Tortillas',
        nameEs: 'Tortillas de Maíz',
        price: '$4/Kilo',
        description: 'Fresh handmade daily.',
        descriptionEs: 'Hechas a mano todos los días.',
        isSignature: true,
      },
      {
        name: 'Flour Tortillas',
        nameEs: 'Tortillas de Harina',
        price: '$4/Dozen',
        description: 'Fresh handmade daily.',
        descriptionEs: 'Hechas a mano todos los días.',
        isSignature: true,
      },
    ],
  },
  {
    id: 'family-packs',
    name: 'Family Packs',
    nameEs: 'Paquetes Familiares', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/pollo-asado.jpg',
    items: [
      {
        name: 'Family Pack Barbacoa',
        nameEs: 'Paquete Familiar de Barbacoa',
        price: '$30.00',
        description: '1 lb cheek beef meat, 8 oz salsa, pack of tortillas, 2L Coke.',
        descriptionEs: '1 libra de barbacoa, 8 oz de salsa, paquete de tortillas, Coca-Cola de 2L.',
      },
      {
        name: 'Family Pack Carnitas',
        nameEs: 'Paquete Familiar de Carnitas',
        price: '$25.00',
        description: '1 lb braised pork, 8 oz salsa, pack of tortillas, 2L Coke.',
        descriptionEs: '1 libra de carnitas, 8 oz de salsa, paquete de tortillas, Coca-Cola de 2L.',
      },
      {
        name: 'Family Pack Pollo Ranchero',
        nameEs: 'Paquete Familiar de Pollo Ranchero',
        price: '$28.00',
        description: 'Whole chicken, 8 oz rice and beans, 8 oz salsa, half pack of tortillas.',
        descriptionEs: 'Pollo entero, 8 oz de arroz y frijoles, 8 oz de salsa, medio paquete de tortillas.',
      },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    nameEs: 'Extras', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/fajitas.jpg',
    items: [
      {
        name: 'Rice (8 oz)',
        nameEs: 'Arroz (8 oz)',
        price: '$5.00',
      },
      {
        name: 'Rice (32 oz)',
        nameEs: 'Arroz (32 oz)',
        price: '$11.00',
      },
      {
        name: 'Refried Beans (8 oz)',
        nameEs: 'Frijoles Refritos (8 oz)',
        price: '$5.00',
      },
      {
        name: 'Refried Beans (32 oz)',
        nameEs: 'Frijoles Refritos (32 oz)',
        price: '$11.00',
      },
      {
        name: 'Guacamole',
        nameEs: 'Guacamole',
        price: 'Market Price',
        descriptionEs: 'Precio del día',
      },
    ],
  },
  {
    id: 'weekends',
    name: 'Weekend Specials',
    nameEs: 'Especiales de Fin de Semana', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    bannerImage: '/images/menudo.jpg',
    items: [
      {
        name: 'Menudo (32 oz)',
        nameEs: 'Menudo (32 oz)',
        price: '$20.00',
        description: 'Traditional Mexican tripe soup. Weekends only.',
        descriptionEs: 'Sopa tradicional mexicana. Solo fines de semana.',
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    nameEs: 'Bebidas', // SPANISH — REVIEW WITH NATIVE SPEAKER BEFORE LAUNCH
    items: [
      {
        name: 'Mexican Coke (Glass Bottle)',
        nameEs: 'Coca-Cola Mexicana (Botella de Vidrio)',
        price: '$3.25',
      },
      {
        name: 'Jarritos',
        nameEs: 'Jarritos',
        price: '$2.75',
      },
      {
        name: 'Aguas Frescas',
        nameEs: 'Aguas Frescas',
        price: '$5.50',
      },
    ],
  },
];

// Breakfast meat options
export const breakfastMeats = [
  'Sausage + Egg', 'Chorizo + Egg', 'Bacon + Egg',
  'Potato + Egg', 'Ham + Egg', 'Huevo a la Mexicana',
];

// Lunch taco meats
export const tacoMeats = [
  'Fajita', 'Pollo (Chicken)', 'Carnitas', 'Pastor',
  'Nopales', 'Barbacoa', 'Chorizo', 'Beef',
];
