import { supabase } from '../lib/supabase';

// DEBUG: Log supabase client status
console.log('[SUPABASE DEBUG] Client initialized:', !!supabase);
console.log('[SUPABASE DEBUG] Supabase URL:', (supabase as any).supabaseUrl || 'unknown');

// Initial Default Data

export interface Department {
  id: string;
  name: string;
  phone: string;
  hours: string;
  priceAdult: string;
  priceChild: string;
  description: string;
  isOpen: boolean;
  images: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  hours: string;
  isOpen: boolean;
  menu: MenuItem[];
}

export interface Settings {
  adminPasswordHash: string; // Storing plain text just for this simple mockup
  mainWhatsApp: string;
  address: string;
  generalHours: string;
  bowlingHours: string;
  spaEmail: string;
  heroVideoUrl: string;
  heroVideoMobileUrl?: string;
  homeHeroTitle?: string;
  homeHeroSubtitle?: string;
  spaVideo1Url?: string;
  spaVideo2Url?: string;
  spaVideo3Url?: string;
  tiktokUrl?: string;
  facebookUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const DEFAULT_FAQ: FAQItem[] = [
  { id: 'faq-1', question: 'Quels sont vos horaires d\'ouverture ?', answer: 'Nous sommes ouverts tous les jours de 06h00 à 22h00.' },
  { id: 'faq-2', question: 'Où êtes-vous situés ?', answer: 'Nous sommes situés à la Résidence du Bénin, Lomé, Togo.' }
];

export const DEFAULT_DEPARTMENTS: Department[] = [
  {
    id: 'piscine', name: 'Piscine', phone: '(+228) 92 92 18 89', hours: 'Lun – Sam : 07h00 – 23h00',
    priceAdult: '6 000', priceChild: '3 000', description: 'Bassin olympique avec eau cristalline et ambiance tropicale.', isOpen: true,
    images: ['/images/piscine/piscine1.jpg', '/images/piscine/piscine2.jpg', '/images/piscine/piscine3.jpg', '/images/piscine/piscine4.jpg', '/images/piscine/piscine5.jpg', '/images/piscine/piscine6.jpg', '/images/piscine/piscine7.jpg', '/images/piscine/piscine8.jpg', '/images/piscine/piscine9.jpg', '/images/piscine/piscine10.jpg', '/images/piscine/piscine11.jpg', '/images/piscine/piscine12.jpg', '/images/piscine/piscine13.jpg']
  },
  {
    id: 'bowling', name: 'Bowling Le Logo', phone: '(+228) 72 27 43 90', hours: 'Mar – Dim : 16h00 – 00h00',
    priceAdult: '5 000', priceChild: '3 000', description: 'Pistes lumineuses pour des soirées inoubliables.', isOpen: true,
    images: ['/images/bowling/bowling_1.jpg', '/images/bowling/bowling_2.jpg', '/images/bowling/bowling_3.jpg', '/images/bowling/bowling_4.jpg', '/images/bowling/bowling_5.jpg', '/images/bowling/bowling_6.jpg', '/images/bowling/bowling_7.jpg', '/images/bowling/bowling_8.jpg', '/images/bowling/bowling_9.jpg', '/images/bowling/bowling_10.jpg', '/images/bowling/bowling_11.jpg', '/images/bowling/bowling_12.jpg', '/images/bowling/bowling_13.jpg', '/images/bowling/bowling_14.jpg', '/images/bowling/bowling_15.jpg']
  },
  {
    id: 'spa', name: 'Lotus Spa', phone: '(+228) 90 00 04 40', hours: 'Lun – Sam : 09h00 – 21h00',
    priceAdult: '25 000', priceChild: '-', description: 'Un sanctuaire de détente pour apaiser corps et esprit.', isOpen: true,
    images: ['/images/spa/spa-1.jpg', '/images/spa/spa-2.jpg', '/images/spa/spa-3.jpg', '/images/spa/spa-4.jpg', '/images/spa/spa-5.jpg', '/images/spa/spa-6.jpg', '/images/spa/spa-7.jpg', '/images/spa/spa-8.jpg', '/images/spa/spa-9.jpg', '/images/spa/spa-10.jpg', '/images/spa/spa-11.jpg', '/images/spa/spa-12.jpg', '/images/spa/spa-13.jpg', '/images/spa/spa-14.jpg', '/images/spa/spa-15.jpg']
  },
  {
    id: 'gym', name: 'Platinum Fitness', phone: '(+228) 96 29 77 77', hours: 'Lun – Sam : 06h00 – 22h00',
    priceAdult: '2 000', priceChild: '-', description: 'Équipements de pointe pour vos entraînements intenses.', isOpen: true,
    images: ['/images/salles/gym-1.jpg', '/images/salles/gym-2.jpg', '/images/salles/gym-3.jpg', '/images/salles/gym-4.jpg', '/images/salles/gym-5.jpg', '/images/salles/gym-6.jpg', '/images/salles/gym-7.jpg', '/images/salles/gym-8.jpg', '/images/salles/gym-9.jpg', '/images/salles/gym-10.jpg', '/images/salles/gym-11.jpg', '/images/salles/gym-12.jpg', '/images/salles/gym-13.jpg', '/images/salles/gym-14.jpg', '/images/salles/gym-15.jpg']
  },
  {
    id: 'tennis', name: 'Tennis', phone: '(+228) 92 92 18 89', hours: 'Lun – Sam : 07h00 – 22h00',
    priceAdult: '10 000', priceChild: '5 000', description: 'Terrains extérieurs éclairés pour jouer même de nuit.', isOpen: true,
    images: ['/images/tennis&Basketball/tennis&Basketball1.jpg', '/images/tennis&Basketball/tennis&Basketball2.jpg', '/images/tennis&Basketball/tennis&Basketball3.jpg', '/images/tennis&Basketball/tennis&Basketball4.jpg']
  },
  {
    id: 'basket', name: 'Basket', phone: '(+228) 92 92 18 89', hours: 'Lun – Sam : 07h00 – 22h00',
    priceAdult: '5 000', priceChild: '2 500', description: 'Terrain professionnel pour des matchs intenses.', isOpen: true,
    images: ['/images/tennis&Basketball/tennis&Basketball5.jpg', '/images/tennis&Basketball/tennis&Basketball6.jpg', '/images/tennis&Basketball/tennis&Basketball7.jpg', '/images/tennis&Basketball/tennis&Basketball8.jpg', '/images/tennis&Basketball/tennis&Basketball9.jpg', '/images/tennis&Basketball/tennis&Basketball10.jpg', '/images/tennis&Basketball/tennis&Basketball11.jpg']
  }
];

export const DEFAULT_RESTAURANTS: Restaurant[] = [
  {
    id: 'tropicana', name: 'Tropicana', whatsapp: '22892921889', email: 'tropicana@harmonie.tg', hours: 'Mar - Dim: 12h00 - 23h00', isOpen: true,
    menu: [
      // PIZZAS
      { id: 'pizza-1', name: 'Pizza Marguerita', category: 'Pizza', description: 'Sauce tomate, basilic, mozzarella', price: 5000, image: '' },
      { id: 'pizza-2', name: 'Pizza Champoliva', category: 'Pizza', description: 'Sauce tomate, basilic, olives, mozzarella', price: 5000, image: '' },
      { id: 'pizza-3', name: 'Pizza Reine', category: 'Pizza', description: 'Sauce tomate, champignon, olives, jambon de dinde, mozzarella', price: 6500, image: '' },
      { id: 'pizza-4', name: 'Pizza Thon', category: 'Pizza', description: 'Sauce tomates, thon, oignon, poivron, olive, mozzarella', price: 6500, image: '' },
      { id: 'pizza-5', name: 'Pizza Végétarienne', category: 'Pizza', description: 'Champignon, oignon, poivron, courgette, aubergine, olives, mozzarella', price: 6500, image: '' },
      { id: 'pizza-6', name: 'Pizza 4 Fromages', category: 'Pizza', description: 'Fromage bleu, fromage de chèvre, mozzarella, parmesan', price: 7000, image: '' },
      { id: 'pizza-7', name: 'Pizza Campagnarde', category: 'Pizza', description: 'Crème fraîche, fromage de chèvre, mozzarella, oignon, miel', price: 7000, image: '' },
      { id: 'pizza-8', name: 'Pizza Mexicana', category: 'Pizza', description: 'Sauce tomate, viande hachée, maïs, poivrons, oignon, mozzarella', price: 7000, image: '' },
      { id: 'pizza-9', name: 'Pizza Fermière', category: 'Pizza', description: 'Sauce tomates, poulet, champignon, crème fraîche, mozzarella', price: 7000, image: '' },
      { id: 'pizza-10', name: 'Pizza Suprême', category: 'Pizza', description: 'Sauce tomates, viande hachée, champignon, crème fraîche, mozzarella', price: 7000, image: '' },
      { id: 'pizza-11', name: 'Pizza Marguerita Crevettes', category: 'Pizza', description: 'Sauce tomates, crevette, sauce maison, mozzarella', price: 8000, image: '' },
      { id: 'pizza-12', name: 'Pizza Tropicana', category: 'Pizza', description: 'Sauce tomates, oignon, poivron, blanc de poulet, viande hachée, sauce maison, mozzarella', price: 8500, image: '' },

      // MENU ENFANT
      { id: 'enfant-1', name: 'Nugget Enfant', category: 'Menu Enfant', description: '5 nuggets, frites, 1 boisson, 1 boule de glace', price: 5000, image: '' },
      { id: 'enfant-2', name: 'Burger Enfant', category: 'Menu Enfant', description: 'Hamburger ou cheese burger, frite, 1 boisson, 1 boule de glace', price: 5000, image: '' },
      { id: 'enfant-3', name: 'Spaghetti Bolognaise Enfant', category: 'Menu Enfant', description: 'Spaghetti, sauce bolognaise, 1 boisson, 1 boule de glace', price: 5000, image: '' },

      // GRILLADES & FRITURES
      { id: 'grill-1', name: 'Demi Poulet Braisé', category: 'Plat & Grillade', description: 'Servi avec accompagnement au choix', price: 7000, image: '' },
      { id: 'grill-2', name: 'Brochette de Poulet', category: 'Plat & Grillade', description: 'Servie avec accompagnement au choix', price: 7000, image: '' },
      { id: 'grill-3', name: 'Poulet Tropicana', category: 'Plat & Grillade', description: 'Émincé de poulet, oignon, marinade spéciale, accompagnement au choix', price: 8500, image: '' },
      { id: 'grill-4', name: 'Filet de Bœuf Grillé', category: 'Plat & Grillade', description: 'Servi avec accompagnement au choix', price: 8000, image: '' },
      { id: 'grill-5', name: 'Brochette de Bœuf', category: 'Plat & Grillade', description: 'Servie avec accompagnement au choix', price: 8000, image: '' },
      { id: 'grill-6', name: 'Bœuf Tropicana', category: 'Plat & Grillade', description: 'Émincé de bœuf, oignon, marinade spéciale, accompagnement au choix', price: 9000, image: '' },
      { id: 'grill-7', name: 'Poisson Braisé', category: 'Plat & Grillade', description: 'Servi avec accompagnement au choix', price: 8500, image: '' },
      { id: 'grill-8', name: 'Filet de Poisson Grillé', category: 'Plat & Grillade', description: 'Filet de poisson grillé et sa sauce au citron, accompagnement au choix', price: 10000, image: '' },
      { id: 'grill-9', name: 'Gambas Grillées', category: 'Plat & Grillade', description: 'Servies avec accompagnement au choix', price: 12500, image: '' },
      { id: 'friture-1', name: 'Chicken Tenders', category: 'Plat & Grillade', description: 'Blanc de poulet pané, coleslaw et accompagnement au choix', price: 6500, image: '' },
      { id: 'friture-2', name: 'Friture de Barracuda', category: 'Plat & Grillade', description: 'Barracuda frit et accompagnement au choix', price: 7500, image: '' },
      { id: 'friture-3', name: 'Poisson Frit du Jour', category: 'Plat & Grillade', description: 'Poisson frit du jour et accompagnement au choix', price: 8500, image: '' },

      // ACCOMPAGNEMENTS
      { id: 'side-1', name: 'Portion de Frites', category: 'Accompagnement', description: 'Frites dorées croustillantes', price: 2000, image: '' },
      { id: 'side-2', name: 'Pommes Sautées', category: 'Accompagnement', description: 'Pommes de terre sautées assaisonnées', price: 2000, image: '' },
      { id: 'side-3', name: 'Portion d\'Igname', category: 'Accompagnement', description: 'Frites d\'igname locales', price: 2000, image: '' },
      { id: 'side-4', name: 'Portion d\'Alloco', category: 'Accompagnement', description: 'Bananes plantains frites', price: 2000, image: '' },
      { id: 'side-5', name: 'Portion d\'Attiéké', category: 'Accompagnement', description: 'Semoule de manioc cuite à la vapeur', price: 1500, image: '' },
      { id: 'side-6', name: 'Portion de Riz Blanc', category: 'Accompagnement', description: 'Riz blanc nature parfumé', price: 1500, image: '' },
      { id: 'side-7', name: 'Riz aux Légumes Maison', category: 'Accompagnement', description: 'Riz sauté aux légumes frais de saison', price: 2000, image: '' },
      { id: 'side-8', name: 'Légumes Sautés', category: 'Accompagnement', description: 'Poêlée de légumes frais croquants', price: 2500, image: '' },
      { id: 'sauce-1', name: 'Supplément Sauce', category: 'Accompagnement', description: 'Sauce poivre, sauce tomate, sauce crème champignon, ou sauce tartare', price: 1000, image: '' },

      // DESSERTS, GLACES & CREPES
      { id: 'dessert-1', name: 'Fondant au Chocolat', category: 'Dessert', description: 'Cœur coulant et sa boule de glace', price: 4000, image: '' },
      { id: 'dessert-2', name: 'Choco Nutella', category: 'Dessert', description: 'Gâteau gourmand au chocolat et Nutella', price: 5800, image: '' },
      { id: 'dessert-3', name: 'Brownie Tiède', category: 'Dessert', description: 'Brownie tiède fondant et sa boule de glace vanille', price: 4500, image: '' },
      { id: 'dessert-4', name: 'Cheesecake Lotus', category: 'Dessert', description: 'Cheesecake croustillant aux biscuits Spéculoos Lotus', price: 3500, image: '' },
      { id: 'dessert-5', name: 'Cheesecake Pistache', category: 'Dessert', description: 'Cheesecake crémeux parfumé à la pistache', price: 3500, image: '' },
      { id: 'dessert-6', name: 'Cheesecake Fruits Rouges', category: 'Dessert', description: 'Cheesecake onctueux nappé de coulis de fruits rouges', price: 3500, image: '' },
      { id: 'dessert-7', name: 'Verrine Forêt Noire', category: 'Dessert', description: 'Couches de génoise, crème fouettée et griottes', price: 3500, image: '' },
      { id: 'dessert-8', name: 'Verrine Bounty', category: 'Dessert', description: 'Mélange coco crémeux et ganache chocolat noir', price: 3500, image: '' },
      { id: 'dessert-9', name: 'Verrine Tiramisu', category: 'Dessert', description: 'Le traditionnel dessert italien au café', price: 4500, image: '' },
      { id: 'ice-1', name: 'Glace (1 Boule au choix)', category: 'Dessert', description: 'Parfums: vanille, chocolat, café, pistache', price: 1000, image: '' },
      { id: 'ice-2', name: 'Glace (2 Boules avec chantilly)', category: 'Dessert', description: '2 boules au choix, chantilly et sauce (chocolat, café, caramel, lotus, fraise)', price: 3000, image: '' },
      { id: 'ice-3', name: 'Glace (3 Boules avec chantilly)', category: 'Dessert', description: '3 boules au choix, chantilly et sauce (chocolat, café, caramel, lotus, fraise)', price: 4000, image: '' },
      { id: 'ice-4', name: 'Banana Split', category: 'Dessert', description: 'Glace vanille, chocolat, fraise, banane, chantilly et 2 sauces chocolat', price: 4500, image: '' },
      { id: 'crepe-1', name: 'Crêpe / Gaufre au Sucre', category: 'Dessert', description: 'Crêpe ou gaufre croustillante saupoudrée de sucre glace', price: 2500, image: '' },
      { id: 'crepe-2', name: 'Crêpe / Gaufre à la Confiture', category: 'Dessert', description: 'Nappage confiture au choix', price: 3000, image: '' },
      { id: 'crepe-3', name: 'Crêpe / Gaufre au Chocolat', category: 'Dessert', description: 'Nappage sauce chocolat maison', price: 3000, image: '' },
      { id: 'crepe-4', name: 'Crêpe / Gaufre au Nutella', category: 'Dessert', description: 'Nappage généreux de véritable Nutella', price: 3000, image: '' },
      { id: 'crepe-5', name: 'Crêpe / Gaufre 3 Chocolats', category: 'Dessert', description: 'Nappage chocolat noir, blanc et lait', price: 3500, image: '' },
      { id: 'crepe-6', name: 'Crêpe / Gaufre Banane Nutella', category: 'Dessert', description: 'Banane fraîche coupée et Nutella fondant', price: 3500, image: '' },
      { id: 'crepe-7', name: 'Crêpe / Gaufre Caramel Beurre Salé', category: 'Dessert', description: 'Nappage sauce caramel au beurre salé maison', price: 3500, image: '' },
      { id: 'crepe-8', name: 'Crêpe / Gaufre Kinder', category: 'Dessert', description: 'Nappage Kinder Bueno et chocolat fondu', price: 4000, image: '' },
      { id: 'crepe-9', name: 'Crêpe / Gaufre Lotus', category: 'Dessert', description: 'Nappage coulis de Spéculoos et éclats Lotus', price: 4000, image: '' },
      { id: 'crepe-10', name: 'Supplément Chantilly et Sauce', category: 'Dessert', description: 'Ajout de chantilly et sauce au choix', price: 1000, image: '' },

      // ENTRÉES
      { id: 'entree-1', name: 'Nem au Poulet & Crevette', category: 'Entrée', description: 'Nems croustillants faits maison', price: 4500, image: '' },
      { id: 'entree-2', name: 'Nem au Bœuf', category: 'Entrée', description: 'Nems de bœuf épicé croustillants', price: 4500, image: '' },
      { id: 'entree-3', name: 'Dynamite Shrimp', category: 'Entrée', description: 'Tempura de crevettes avec sauce dynamite crémeuse et épicée', price: 5000, image: '' },
      { id: 'entree-4', name: 'Avocat Crevette', category: 'Entrée', description: 'Demi-avocat avec crevettes fraîches et sauce cocktail maison', price: 5500, image: '' },
      { id: 'entree-5', name: 'Salade Niçoise', category: 'Entrée', description: 'Laitue, tomate, olives, haricots verts, thon, œuf, pommes de terre, anchois', price: 5500, image: '' },
      { id: 'entree-6', name: 'Salade César', category: 'Entrée', description: 'Laitue, émincé de poulet grillé, croûtons dorés, copeaux de parmesan, sauce césar', price: 6000, image: '' },

      // SANDWICHS & BURGERS
      { id: 'sandwich-1', name: 'Hot Dog Signature', category: 'Sandwich & Burger', description: 'Saucisse grillée de qualité dans son pain brioché, sauces au choix. Servi avec frites.', price: 3500, image: '' },
      { id: 'sandwich-2', name: 'Sandwich Crispy Poulet', category: 'Sandwich & Burger', description: 'Blanc de poulet pané croustillant, tomate, laitue, fromage et sauce maison. Servi avec frites.', price: 5000, image: '' },
      { id: 'sandwich-3', name: 'Sandwich Steack Bœuf', category: 'Sandwich & Burger', description: 'Émincé de filet de bœuf, oignons, champignons, poivrons, fromage fondu. Servi avec frites.', price: 5000, image: '' },
      { id: 'sandwich-4', name: 'Club Sandwich Thon', category: 'Sandwich & Burger', description: 'Thon préparé, œuf dur, rondelles de tomates fraîches et laitue. Servi avec frites.', price: 5000, image: '' },
      { id: 'sandwich-5', name: 'Club Sandwich Poulet', category: 'Sandwich & Burger', description: 'Poulet émincé, œuf dur, cornichons, tomates et salade verte. Servi avec frites.', price: 5000, image: '' },
      { id: 'burger-1', name: 'Hamburger Classique', category: 'Sandwich & Burger', description: 'Steak de bœuf haché maison, cornichons, tomate, salade, oignon. Servi avec frites.', price: 4000, image: '' },
      { id: 'burger-2', name: 'Cheese Burger Gourmand', category: 'Sandwich & Burger', description: 'Steak haché de bœuf, cheddar fondant, cornichons, tomate, salade. Servi avec frites.', price: 4500, image: '' },
      { id: 'burger-3', name: 'Smash Beef Burger', category: 'Sandwich & Burger', description: 'Steak de bœuf smashé croustillant, cornichons, cheddar, emmental, sauce spéciale. Servi avec frites.', price: 5000, image: '' },
      { id: 'burger-4', name: 'Mozzarella Chicken Burger', category: 'Sandwich & Burger', description: 'Blanc de poulet tendre, mozzarella fondante, cornichons, laitue, sauce à l\'ancienne. Servi avec frites.', price: 5000, image: '' },
      { id: 'burger-5', name: 'Crispy Chicken Burger', category: 'Sandwich & Burger', description: 'Filet de poulet pané ultra-croustillant, cornichons, salade, fromage. Servi avec frites.', price: 5000, image: '' },
      { id: 'burger-6', name: 'Juicy Smash Burger', category: 'Sandwich & Burger', description: 'Steak smashé juteux, cheddar, emmental, œuf miroir, ketchup, sauce classique. Servi avec frites.', price: 5500, image: '' },
      { id: 'burger-7', name: 'Double Burger Harmonieux', category: 'Sandwich & Burger', description: 'Double steak de bœuf, cheddar, emmental, oignons caramélisés, salade, sauce classique. Servi avec frites.', price: 6500, image: '' },

      // BOISSONS & JUS
      { id: 'drink-1', name: 'Milkshake Vanille', category: 'Boisson', description: 'Onctueuse glace vanille et lait frais', price: 3500, image: '' },
      { id: 'drink-2', name: 'Milkshake Vanille Banane', category: 'Boisson', description: 'Glace vanille, lait et banane fraîche mixée', price: 3500, image: '' },
      { id: 'drink-3', name: 'Milkshake Chocolat', category: 'Boisson', description: 'Glace chocolat noir gourmande et lait', price: 3500, image: '' },
      { id: 'drink-4', name: 'Milkshake Fraise', category: 'Boisson', description: 'Glace fraise parfumée et lait frais', price: 4000, image: '' },
      { id: 'drink-5', name: 'Milkshake Fraise Banane', category: 'Boisson', description: 'Glace fraise, banane fraîche mixée et lait', price: 4000, image: '' },
      { id: 'drink-6', name: 'Milkshake Caramel', category: 'Boisson', description: 'Glace caramel beurre salé onctueuse', price: 4000, image: '' },
      { id: 'drink-7', name: 'Milkshake Mangue Passion', category: 'Boisson', description: 'Purée de mangue, nectar de fruits de la passion et lait', price: 4000, image: '' },
      { id: 'drink-8', name: 'Milkshake Oreo', category: 'Boisson', description: 'Biscuits Oreo émiettés et glace vanille', price: 4500, image: '' },
      { id: 'drink-9', name: 'Milkshake Lotus', category: 'Boisson', description: 'Coulis de spéculoos Lotus et éclats de biscuits', price: 4500, image: '' },
      { id: 'drink-10', name: 'Milkshake Snickers', category: 'Boisson', description: 'Éclats de Snickers, chocolat et sauce caramel', price: 4500, image: '' },
      { id: 'drink-11', name: 'Café Espresso', category: 'Boisson', description: 'Espresso court et intense', price: 2000, image: '' },
      { id: 'drink-12', name: 'Café Espresso Allongé', category: 'Boisson', description: 'Café noir adouci à l\'eau chaude', price: 2000, image: '' },
      { id: 'drink-13', name: 'Café au Lait', category: 'Boisson', description: 'Espresso et lait chaud velouté', price: 3000, image: '' },
      { id: 'drink-14', name: 'Cappuccino', category: 'Boisson', description: 'Espresso, lait chaud et mousse de lait crémeuse', price: 3500, image: '' },
      { id: 'drink-15', name: 'Chocolat Chaud', category: 'Boisson', description: 'Chocolat chaud onctueux préparé maison', price: 3000, image: '' },
      { id: 'drink-16', name: 'Thé Kusmi Tea', category: 'Boisson', description: 'Infusion de thé haut de gamme au choix', price: 2000, image: '' },
      { id: 'drink-17', name: 'Eau Minérale 0.5L', category: 'Boisson', description: 'Eau de source naturelle purifiée', price: 500, image: '' },
      { id: 'drink-18', name: 'Eau Minérale 1L', category: 'Boisson', description: 'Eau de source naturelle purifiée', price: 1500, image: '' },
      { id: 'drink-19', name: 'Soda (Coca-Cola / Fanta / Sprite)', category: 'Boisson', description: 'Canette rafraîchissante au choix', price: 1500, image: '' },
      { id: 'drink-20', name: 'Boisson Locale (Chap / Cocktail / Limonade)', category: 'Boisson', description: 'Boisson gazeuse locale au choix', price: 1500, image: '' },
      { id: 'drink-21', name: 'Coca-Cola Zéro', category: 'Boisson', description: 'Boisson gazeuse sans sucres', price: 2000, image: '' },
      { id: 'drink-22', name: 'Perrier Nature', category: 'Boisson', description: 'Eau minérale naturelle gazeuse', price: 2000, image: '' },
      { id: 'drink-23', name: 'Perrier Citron', category: 'Boisson', description: 'Perrier avec zeste de citron', price: 2500, image: '' },
      { id: 'drink-24', name: 'Perrier Menthe / Grenadine', category: 'Boisson', description: 'Perrier avec sirop au choix', price: 2500, image: '' },
      { id: 'drink-25', name: 'Red Bull Energy', category: 'Boisson', description: 'Boisson énergisante classique', price: 2500, image: '' },
      { id: 'drink-26', name: 'Jus d\'Orange / Orange Gingembre', category: 'Boisson', description: 'Fruits pressés frais minute', price: 2000, image: '' },
      { id: 'drink-27', name: 'Jus d\'Ananas / Ananas Gingembre', category: 'Boisson', description: 'Ananas pressés frais du Togo', price: 2000, image: '' },
      { id: 'drink-28', name: 'Jus d\'Ananas Pomme', category: 'Boisson', description: 'Cocktail rafraîchissant ananas et pomme', price: 2500, image: '' },
      { id: 'drink-29', name: 'Jus de Pomme', category: 'Boisson', description: 'Jus de pomme pur frais pressé', price: 3000, image: '' },
      { id: 'drink-30', name: 'Jus de Mangue', category: 'Boisson', description: 'Nectar de mangue onctueuse', price: 2500, image: '' },
      { id: 'drink-31', name: 'Jus de Pastèque', category: 'Boisson', description: 'Jus de pastèque fraîche désaltérant', price: 1500, image: '' },
      { id: 'drink-32', name: 'Jus de Coco', category: 'Boisson', description: 'Eau de coco fraîche 100% naturelle', price: 1500, image: '' },
      { id: 'drink-33', name: 'Jus de Bissap Maison', category: 'Boisson', description: 'Infusion de fleurs d\'hibiscus et menthe douce', price: 1500, image: '' },
      { id: 'drink-34', name: 'Limonade Maison', category: 'Boisson', description: 'Citron pressé, sucre de canne et eau filtrée', price: 2000, image: '' },
      { id: 'drink-35', name: 'Limonade Citron Menthe', category: 'Boisson', description: 'Limonade avec feuilles de menthe fraîche pilées', price: 2000, image: '' },
      { id: 'drink-36', name: 'Limonade Citron Menthe Gingembre', category: 'Boisson', description: 'Limonade maison relevée au gingembre frais', price: 2000, image: '' }
    ]
  }
];

export const DEFAULT_SETTINGS: Settings = {
  adminPasswordHash: 'harmonie2026',
  mainWhatsApp: '22892921889',
  address: 'Rue 243 Tot Ancien BSL, Résidence du Bénin, Lomé, Togo',
  generalHours: 'Harmonie Signature : tous les jours de 06h00 à 22h00. Week-end & jours fériés : fermeture à 20h.',
  bowlingHours: 'Bowling Le Logo : Mardi – Dimanche de 16h00 à 00h00. Fermé le lundi.',
  spaEmail: 'spa@harmoniesignature.tg',
  heroVideoUrl: '/videoAccueil.mp4',
  heroVideoMobileUrl: '/videoAccueil.mp4',
  spaVideo1Url: '/images/spa/spaDeo/SpaDeo1.mp4',
  spaVideo2Url: '/images/spa/spaDeo/SpaDeo2.mp4',
  spaVideo3Url: '/images/spa/spaDeo/SpaDeo3.mp4',
};

export const getDepartments = async (): Promise<Department[]> => {
  try {
    console.log('[SUPABASE DEBUG] getDepartments: fetching from Supabase...');
    const { data, error } = await supabase.from('departments').select('*');
    console.log('[SUPABASE DEBUG] getDepartments result:', { dataLength: data?.length, error });
    if (error) {
      console.error('[SUPABASE DEBUG] getDepartments ERROR - falling back to defaults:', error);
      return DEFAULT_DEPARTMENTS;
    }
    if (!data || data.length === 0) {
      console.warn('[SUPABASE DEBUG] getDepartments: no data returned, using defaults');
      return DEFAULT_DEPARTMENTS;
    }
    console.log('[SUPABASE DEBUG] getDepartments: SUCCESS - got', data.length, 'departments from Supabase');
    return data as Department[];
  } catch (e) {
    console.error('[SUPABASE DEBUG] getDepartments EXCEPTION:', e);
    return DEFAULT_DEPARTMENTS;
  }
};

export const saveDepartments = async (deps: Department[]) => {
  try {
    console.log('[SUPABASE DEBUG] saveDepartments: saving', deps.length, 'departments...');
    const { error } = await supabase.from('departments').upsert(deps);
    if (error) {
      console.error('[SUPABASE DEBUG] saveDepartments ERROR:', error);
      throw error;
    }
    console.log('[SUPABASE DEBUG] saveDepartments: SUCCESS');
  } catch (e) {
    console.error('[SUPABASE DEBUG] saveDepartments EXCEPTION:', e);
    throw e;
  }
};

export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const { data, error } = await supabase.from('restaurants').select('*');
    if (error || !data || data.length === 0) return DEFAULT_RESTAURANTS;
    return data as Restaurant[];
  } catch (e) {
    console.error("Error loading restaurants:", e);
    return DEFAULT_RESTAURANTS;
  }
};

export const saveRestaurants = async (rests: Restaurant[]) => {
  try {
    const { error } = await supabase.from('restaurants').upsert(rests);
    if (error) throw error;
  } catch (e) {
    console.error("Error saving restaurants:", e);
    throw e;
  }
};

export const getSettings = async (): Promise<Settings> => {
  try {
    const { data, error } = await supabase.from('settings').select('*').limit(1).single();
    if (error || !data) return DEFAULT_SETTINGS;
    return data as Settings;
  } catch (e) {
    console.error("Error loading settings:", e);
    return DEFAULT_SETTINGS;
  }
};

export const saveSettings = async (settings: Settings) => {
  try {
    // We assume setting id=1
    const { error } = await supabase.from('settings').upsert({ id: 1, ...settings });
    if (error) throw error;
  } catch (e) {
    console.error("Error saving settings:", e);
    throw e;
  }
};

export const getFAQ = async (): Promise<FAQItem[]> => {
  try {
    const { data, error } = await supabase.from('faq').select('*');
    if (error || !data || data.length === 0) return DEFAULT_FAQ;
    return data as FAQItem[];
  } catch (e) {
    console.error("Error loading FAQ:", e);
    return DEFAULT_FAQ;
  }
};

export const saveFAQ = async (faq: FAQItem[]) => {
  try {
    const { error } = await supabase.from('faq').upsert(faq);
    if (error) throw error;
  } catch (e) {
    console.error("Error saving FAQ:", e);
    throw e;
  }
};

// --- SPA ---
export interface SpaService {
  id: string;
  category: string;
  name: string;
  duration: string;
  desc: string;
  price: string;
  image: string;
}
export const DEFAULT_SPA_SERVICES: SpaService[] = [
  { id: 'spa-1', category: 'Soins du Corps', name: 'Massage Aromathérapie 1h', duration: '60 min', desc: 'Soin relaxant profond associant les vertus thérapeutiques des huiles essentielles.', price: '30.000', image: '' },
  { id: 'spa-2', category: 'Soins du Corps', name: 'Relax Touche 30min', duration: '30 min', desc: 'Massage ciblé rapide pour libérer les tensions accumulées.', price: '15.000', image: '' },
  { id: 'spa-3', category: 'Soins du Corps', name: 'Relax Touche 1h', duration: '60 min', desc: 'Massage relaxant complet pour apaiser le corps et l\'esprit.', price: '25.000', image: '' },
  { id: 'spa-4', category: 'Soins du Corps', name: 'Massage Pierres Chaudes', duration: '60 min', desc: 'Massage réconfortant avec des pierres de basalte volcaniques chauffées.', price: '40.000', image: '' },
  { id: 'spa-5', category: 'Soins du Corps', name: 'Four Hands 50min', duration: '50 min', desc: 'Une harmonie parfaite réalisée par deux praticiens pour une relaxation absolue.', price: '40.000', image: '' },
  { id: 'spa-6', category: 'Soins du Corps', name: 'Escale Plantaire 30min', duration: '30 min', desc: 'Massage relaxant des pieds inspiré de la réflexologie plantaire.', price: '17.000', image: '' },
  { id: 'spa-7', category: 'Soins du Corps', name: 'Duo Force Vital 1h', duration: '60 min', desc: 'Partagez un moment d\'énergie et de complicité à deux en cabine double.', price: '55.000', image: '' },
  { id: 'spa-8', category: 'Soins du Corps', name: 'Duo Toucher Apaisant 1h', duration: '60 min', desc: 'Massage relaxant à deux pour une évasion sensorielle partagée.', price: '40.000', image: '' },
  { id: 'spa-9', category: 'Soins du Corps', name: 'Duo Pierres Chaudes 1h30', duration: '90 min', desc: 'Expérience sensorielle divine à deux avec des pierres volcaniques chaudes.', price: '70.000', image: '' },
  { id: 'spa-10', category: 'Soins du Corps', name: 'Force Vital 30min', duration: '30 min', desc: 'Soin dynamisant rapide pour relancer l\'énergie corporelle.', price: '20.000', image: '' },
  { id: 'spa-11', category: 'Soins du Corps', name: 'Force Vital 1h', duration: '60 min', desc: 'Soin énergétique complet pour retrouver vitalité et équilibre.', price: '30.000', image: '' },
  { id: 'spa-12', category: 'Gommage', name: 'Gommage du Corps 30min', duration: '30 min', desc: 'Exfoliation douce pour éliminer les cellules mortes et sublimer la peau.', price: '22.000', image: '' },
  { id: 'spa-13', category: 'Épilation à la Cire', name: 'Épilation Jambes, Bras, Maillot Intégral & Aisselles', duration: 'Prestation', desc: 'Formule complète pour une douceur absolue de tout le corps.', price: '32.000', image: '' },
  { id: 'spa-14', category: 'Épilation à la Cire', name: 'Épilation Jambes, Maillot Intégral & Aisselles', duration: 'Prestation', desc: 'Formule corps essentielle pour une peau lisse et douce.', price: '26.000', image: '' },
  { id: 'spa-15', category: 'Épilation à la Cire', name: 'Épilation Jambes, Bras & Aisselles', duration: 'Prestation', desc: 'Formule douce pour les zones visibles du corps.', price: '22.000', image: '' },
  { id: 'spa-16', category: 'Épilation à la Cire', name: 'Cire Jambes Complètes', duration: 'Prestation', desc: 'Épilation soignée de toute la longueur des jambes.', price: '12.000', image: '' },
  { id: 'spa-17', category: 'Épilation à la Cire', name: 'Cire Jambes Demi', duration: 'Prestation', desc: 'Épilation rapide des demi-jambes.', price: '6.000', image: '' },
  { id: 'spa-18', category: 'Épilation à la Cire', name: 'Cire Bras Completes', duration: 'Prestation', desc: 'Épilation complète des bras pour une douceur uniforme.', price: '7.000', image: '' },
  { id: 'spa-19', category: 'Épilation à la Cire', name: 'Cire Bras Demi', duration: 'Prestation', desc: 'Épilation des avant-bras ou demi-bras.', price: '4.000', image: '' },
  { id: 'spa-20', category: 'Épilation à la Cire', name: 'Cire Maillot Integral Completes', duration: 'Prestation', desc: 'Épilation intégrale professionnelle du maillot.', price: '12.000', image: '' },
  { id: 'spa-21', category: 'Épilation à la Cire', name: 'Cire Maillot Integral Demi', duration: 'Prestation', desc: 'Épilation classique ou demi-maillot.', price: '6.000', image: '' },
  { id: 'spa-22', category: 'Épilation à la Cire', name: 'Torse Femme', duration: 'Prestation', desc: 'Épilation douce et nette du torse pour femme.', price: '10.000', image: '' },
  { id: 'spa-23', category: 'Épilation à la Cire', name: 'Torse Homme', duration: 'Prestation', desc: 'Épilation nette et soignée du torse pour homme.', price: '15.000', image: '' },
  { id: 'spa-24', category: 'Épilation à la Cire', name: 'Moustache', duration: 'Prestation', desc: 'Épilation précise de la lèvre supérieure.', price: '3.000', image: '' },
  { id: 'spa-25', category: 'Épilation à la Cire', name: 'Aisselles', duration: 'Prestation', desc: 'Épilation classique des aisselles.', price: '5.000', image: '' },
  { id: 'spa-26', category: 'Épilation à la Cire', name: 'Visage Complet', duration: 'Prestation', desc: 'Épilation intégrale du visage (sourcils, lèvre, menton, joues).', price: '10.000', image: '' },
  { id: 'spa-27', category: 'Épilation à la Cire', name: 'Sourcil', duration: 'Prestation', desc: 'Restructuration et épilation précise de la ligne des sourcils.', price: '5.000', image: '' },
  { id: 'spa-28', category: 'Épilation à la Cire', name: 'Dos Femme Complet', duration: 'Prestation', desc: 'Épilation soignée de l\'intégralité du dos pour femme.', price: '10.000', image: '' },
  { id: 'spa-29', category: 'Épilation à la Cire', name: 'Dos Homme Complet', duration: 'Prestation', desc: 'Épilation de l\'intégralité du dos pour homme.', price: '12.000', image: '' },
  { id: 'spa-30', category: 'Épilation à la Cire', name: 'Fesse Femme', duration: 'Prestation', desc: 'Épilation douce de la zone des fessiers pour femme.', price: '10.000', image: '' },
  { id: 'spa-31', category: 'Épilation à la Cire', name: 'Fesse Homme', duration: 'Prestation', desc: 'Épilation professionnelle de la zone des fessiers pour homme.', price: '12.000', image: '' },
  { id: 'spa-32', category: 'Beauté des Mains & Pieds', name: 'Manucure', duration: 'Soin', desc: 'Mise en beauté complète des mains : limage, cuticules et hydratation.', price: '7.000', image: '' },
  { id: 'spa-33', category: 'Beauté des Mains & Pieds', name: 'Pédicure', duration: 'Soin', desc: 'Soin complet des pieds pour retrouver une peau douce et des ongles parfaits.', price: '10.000', image: '' },
  { id: 'spa-34', category: 'Beauté des Mains & Pieds', name: 'Manucure et Pédicure', duration: 'Soin', desc: 'Formule combinée pour une beauté totale des mains et des pieds.', price: '15.000', image: '' },
  { id: 'spa-35', category: 'Beauté des Mains & Pieds', name: 'Vernis Semi Permanent Mains', duration: 'Soin', desc: 'Pose de vernis semi-permanent longue tenue pour les mains.', price: '5.000', image: '' },
  { id: 'spa-36', category: 'Beauté des Mains & Pieds', name: 'Vernis Semi Permanent Pieds', duration: 'Soin', desc: 'Pose de vernis semi-permanent longue tenue pour les pieds.', price: '8.000', image: '' },
  { id: 'spa-37', category: 'Beauté des Mains & Pieds', name: 'Pose Vernis Mains/Pieds', duration: 'Soin', desc: 'Pose de vernis à ongles classique de haute qualité.', price: '3.000', image: '' },
  { id: 'spa-38', category: 'Beauté des Mains & Pieds', name: 'Pose Capsule', duration: 'Soin', desc: 'Extension des ongles avec capsules pour un rendu parfait et résistant.', price: '10.000', image: '' },
  { id: 'spa-39', category: 'Beauté des Mains & Pieds', name: 'Dépose', duration: 'Soin', desc: 'Retrait soigné et respectueux du vernis semi-permanent ou des capsules.', price: '5.000', image: '' },
  { id: 'spa-40', category: 'Beauté des Mains & Pieds', name: 'Soin Jelly Main ou Pieds', duration: 'Soin', desc: 'Bain de gelée sensorielle hydratante et relaxante.', price: '4.000', image: '' },
  { id: 'spa-41', category: 'Jacuzzi & Sauna', name: 'Jacuzzi 30min/Personne', duration: '30 min', desc: 'Bain bouillonnant relaxant individuel dans notre espace bien-être.', price: '10.000', image: '' },
  { id: 'spa-42', category: 'Jacuzzi & Sauna', name: 'Sauna 30min/Personne', duration: '30 min', desc: 'Bain de chaleur sèche bienfaisant pour éliminer les toxines.', price: '10.000', image: '' },
  { id: 'spa-43', category: 'Jacuzzi & Sauna', name: 'Jacuzzi 1h/Personne', duration: '60 min', desc: 'Séance prolongée de balnéothérapie relaxante pour une détente totale.', price: '18.000', image: '' },
  { id: 'spa-44', category: 'Jacuzzi & Sauna', name: 'Sauna 1h/Personne', duration: '60 min', desc: 'Séance complète de détoxification et relaxation par la chaleur sèche.', price: '18.000', image: '' },
];

export const getSpaServices = async (): Promise<SpaService[]> => {
  try {
    console.log('[SUPABASE DEBUG] getSpaServices: fetching...');
    const { data, error } = await supabase.from('spa_services').select('*');
    console.log('[SUPABASE DEBUG] getSpaServices result:', { dataLength: data?.length, error });
    if (error || !data || data.length === 0) return DEFAULT_SPA_SERVICES;
    return data as SpaService[];
  } catch (e) {
    console.error('[SUPABASE DEBUG] getSpaServices EXCEPTION:', e);
    return DEFAULT_SPA_SERVICES;
  }
};
export const saveSpaServices = async (data: SpaService[]) => {
  try {
    console.log('[SUPABASE DEBUG] saveSpaServices: saving', data.length, 'services...');
    const { error } = await supabase.from('spa_services').upsert(data);
    if (error) {
      console.error('[SUPABASE DEBUG] saveSpaServices ERROR:', error);
      throw error;
    }
    console.log('[SUPABASE DEBUG] saveSpaServices: SUCCESS');
  } catch (e) {
    console.error('[SUPABASE DEBUG] saveSpaServices EXCEPTION:', e);
    throw e;
  }
};

// --- BOWLING ---
export interface BowlingPlan {
  id: string;
  badge: string | null;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  highlight: boolean;
  image: string;
}
export const DEFAULT_BOWLING_PLANS: BowlingPlan[] = [
  { id: 'bw-1', badge: null, name: 'Partie Simple', tagline: '1 joueur · Chaussures incluses', price: '5 000', features: ['1 piste réservée', 'Chaussures fournies', 'Balle au choix'], highlight: false, image: '' },
  { id: 'bw-2', badge: 'Populaire', name: 'Groupe (4 pers.)', tagline: 'Idéal entre amis ou en famille', price: '18 000', features: ['1 piste réservée', 'Chaussures fournies', '2 parties incluses'], highlight: true, image: '' },
  { id: 'bw-3', badge: null, name: 'Soirée VIP', tagline: 'Piste privée · 2h · Boissons', price: '35 000', features: ['Piste privatisée 2h', 'Chaussures fournies', 'Boissons offertes'], highlight: false, image: '' },
];

export const getBowlingPlans = async (): Promise<BowlingPlan[]> => {
  try {
    const { data, error } = await supabase.from('bowling_plans').select('*');
    if (error || !data || data.length === 0) return DEFAULT_BOWLING_PLANS;
    return data as BowlingPlan[];
  } catch (e) { return DEFAULT_BOWLING_PLANS; }
};
export const saveBowlingPlans = async (data: BowlingPlan[]) => {
  try {
    const { error } = await supabase.from('bowling_plans').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); throw e; }
};

// --- POOL ---
export interface PoolPlan {
  id: string;
  category: string;
  name: string;
  price: string;
  desc: string;
  duration: string;
  badge: string;
}
export const DEFAULT_POOL_PLANS: PoolPlan[] = [
  { id: 'pl-1', category: 'Accès Piscine', name: 'Séance Unique', price: '5.000', desc: 'Entrée unique donnant accès libre au grand bassin olympique, transats et parasols.', duration: '1 Séance', badge: '' },
  { id: 'pl-2', category: 'Accès Piscine', name: 'Hebdomadaire', price: '15.000', desc: 'Accès libre à la piscine olympique pendant 7 jours consécutifs.', duration: '1 Semaine', badge: '' },
  { id: 'pl-3', category: 'Accès Piscine', name: '2 Semaines', price: '30.000', desc: 'Accès libre à la piscine olympique pendant 14 jours consécutifs.', duration: '2 Semaines', badge: '' },
  { id: 'pl-4', category: 'Accès Piscine', name: '3 Semaines', price: '40.000', desc: 'Accès libre à la piscine olympique pendant 21 jours consécutifs.', duration: '3 Semaines', badge: '' },
  { id: 'pl-5', category: 'Accès Piscine', name: 'Mensuel', price: '50.000', desc: 'La formule mensuelle idéale pour les amateurs de natation régulière. 30 jours.', duration: '1 Mois', badge: 'Populaire' },
  { id: 'pl-6', category: 'Accès Piscine', name: 'Trimestriel', price: '130.000', desc: 'Accès libre pendant 3 mois à nos installations de baignade de prestige.', duration: '3 Mois', badge: '' },
  { id: 'pl-7', category: 'Accès Piscine', name: 'Semestriel', price: '230.000', desc: 'Accès libre pendant 6 mois. Idéal pour s\'entraîner tout au long des saisons.', duration: '6 Mois', badge: '' },
  { id: 'pl-8', category: 'Accès Piscine', name: 'Annuel', price: '360.000', desc: 'Accès complet et illimité 365 jours de l\'année. Économisez sur la durée.', duration: '1 An', badge: 'Économique' },
  { id: 'pl-9', category: 'Gym + Piscine (Combiné)', name: 'Séance Combinée unique', price: '10.000', desc: 'Accès combiné à la salle de sport et à la piscine olympique pour une journée.', duration: '1 Séance', badge: 'Duo Journée' },
  { id: 'pl-10', category: 'Gym + Piscine (Combiné)', name: 'Mensuel Combiné', price: '90.000', desc: 'Accès illimité à la gym et à la piscine olympique pendant 1 mois.', duration: '1 Mois', badge: 'Recommandé' },
  { id: 'pl-11', category: 'Gym + Piscine (Combiné)', name: 'Trimestriel Combiné', price: '260.000', desc: 'Le compromis parfait. Accès illimité gym et piscine pendant 3 mois.', duration: '3 Mois', badge: '' },
  { id: 'pl-12', category: 'Gym + Piscine (Combiné)', name: 'Semestriel Combiné', price: '475.000', desc: 'Accès illimité total à notre complexe sportif de prestige pendant 6 mois.', duration: '6 Mois', badge: '' },
  { id: 'pl-13', category: 'Gym + Piscine (Combiné)', name: 'Annuel Combiné', price: '600.000', desc: 'Accès illimité absolu 365 jours de l\'année. Formule ultime Harmonie Gold.', duration: '1 An', badge: 'Prestige VIP' },
  { id: 'pl-14', category: 'Cours de Natation', name: 'Séance de Natation coachée', price: '5.000', desc: 'Apprentissage ou perfectionnement des techniques de nage avec notre maître-nageur certifié.', duration: 'Séance unique', badge: 'Coach individuel' },
];

export const getPoolPlans = async (): Promise<PoolPlan[]> => {
  try {
    const { data, error } = await supabase.from('pool_plans').select('*');
    if (error || !data || data.length === 0) return DEFAULT_POOL_PLANS;
    return data as PoolPlan[];
  } catch (e) { return DEFAULT_POOL_PLANS; }
};
export const savePoolPlans = async (data: PoolPlan[]) => {
  try {
    const { error } = await supabase.from('pool_plans').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); throw e; }
};

// --- GYM ---
export interface GymPlan {
  id: string;
  category: string;
  name: string;
  price: string;
  desc: string;
  duration: string;
  badge: string;
}
export const DEFAULT_GYM_PLANS: GymPlan[] = [
  { id: 'gy-1', category: 'Accès Gym', name: 'Séance Unique', price: '6.000', desc: 'Accès libre à tous les équipements pour une séance unique sans engagement.', duration: '1 Séance', badge: '' },
  { id: 'gy-2', category: 'Accès Gym', name: 'Hebdomadaire', price: '15.000', desc: 'Accès illimité à la salle de sport pendant 7 jours consécutifs.', duration: '1 Semaine', badge: '' },
  { id: 'gy-3', category: 'Accès Gym', name: '2 Semaines', price: '30.000', desc: 'Accès illimité à l\'espace fitness pendant 14 jours consécutifs.', duration: '2 Semaines', badge: '' },
  { id: 'gy-4', category: 'Accès Gym', name: '3 Semaines', price: '40.000', desc: 'Accès illimité à l\'espace fitness pendant 21 jours consécutifs.', duration: '3 Semaines', badge: '' },
  { id: 'gy-5', category: 'Accès Gym', name: 'Mensuel', price: '50.000', desc: 'Formule idéale pour un entraînement régulier. Accès illimité pendant 30 jours.', duration: '1 Mois', badge: 'Populaire' },
  { id: 'gy-6', category: 'Accès Gym', name: 'Trimestriel', price: '130.000', desc: 'Accès illimité pendant 3 mois. Suivi et progression garantis.', duration: '3 Mois', badge: '' },
  { id: 'gy-7', category: 'Accès Gym', name: 'Semestriel', price: '230.000', desc: 'Accès illimité pendant 6 mois pour un engagement de santé à moyen terme.', duration: '6 Mois', badge: '' },
  { id: 'gy-8', category: 'Accès Gym', name: 'Annuel', price: '360.000', desc: 'Accès illimité pendant 1 an. La formule suprême pour un mode de vie sain.', duration: '1 An', badge: 'Économique' },
  { id: 'gy-9', category: 'Gym + Piscine (Combiné)', name: 'Séance Combinée unique', price: '10.000', desc: 'Accès combiné à la salle de sport et à la piscine olympique pour une journée.', duration: '1 Séance', badge: 'Duo Journée' },
  { id: 'gy-10', category: 'Gym + Piscine (Combiné)', name: 'Mensuel Combiné', price: '90.000', desc: 'Accès illimité à la gym et à la piscine olympique pendant 1 mois.', duration: '1 Mois', badge: 'Recommandé' },
  { id: 'gy-11', category: 'Gym + Piscine (Combiné)', name: 'Trimestriel Combiné', price: '260.000', desc: 'Le compromis parfait. Accès illimité gym et piscine pendant 3 mois.', duration: '3 Mois', badge: '' },
  { id: 'gy-12', category: 'Gym + Piscine (Combiné)', name: 'Semestriel Combiné', price: '475.000', desc: 'Accès illimité total à notre complexe sportif de prestige pendant 6 mois.', duration: '6 Mois', badge: '' },
  { id: 'gy-13', category: 'Gym + Piscine (Combiné)', name: 'Annuel Combiné', price: '600.000', desc: 'Accès illimité absolu 365 jours de l\'année. Formule ultime Harmonie Gold.', duration: '1 An', badge: 'Prestige VIP' },
  { id: 'gy-14', category: 'Cours & Activités', name: 'Séance de Cours Gym', price: '3.000', desc: 'Participation à une séance collective encadrée par nos coachs certifiés.', duration: 'Séance', badge: '' },
  { id: 'gy-15', category: 'Cours & Activités', name: 'Mensuel Cours Gym', price: '20.000', desc: 'Accès illimité aux cours collectifs de fitness et gym pendant un mois.', duration: '1 Mois', badge: '' },
  { id: 'gy-16', category: 'Cours & Activités', name: 'Cours de Combat', price: '30.000', desc: 'Soin de self-défense, boxe et arts martiaux encadrés par des professionnels.', duration: 'Tarif Mensuel', badge: 'Nouveau' },
  { id: 'gy-17', category: 'Cours & Activités', name: 'Aqua-Gym', price: '30.000', desc: 'Gymnastique aquatique tonifiante et douce pour les articulations.', duration: 'Tarif Mensuel', badge: '' },
];

export const getGymPlans = async (): Promise<GymPlan[]> => {
  try {
    const { data, error } = await supabase.from('gym_plans').select('*');
    if (error || !data || data.length === 0) return DEFAULT_GYM_PLANS;
    return data as GymPlan[];
  } catch (e) { return DEFAULT_GYM_PLANS; }
};
export const saveGymPlans = async (data: GymPlan[]) => {
  try {
    const { error } = await supabase.from('gym_plans').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); throw e; }
};

// --- SPORTS ---
export interface SportService {
  id: string;
  sportType: string;
  name: string;
  duration: string;
  desc: string;
  price: string;
  unit: string;
}
export const DEFAULT_SPORT_SERVICES: SportService[] = [
  { id: 'sp-1', sportType: 'Tennis', name: 'Tarif Horaire', duration: '1h', desc: 'Accès libre aux courts de tennis de qualité supérieure pour vos matchs en simple ou double.', price: '5 000', unit: 'par personne' },
  { id: 'sp-2', sportType: 'Tennis', name: 'Abonnement Mensuel', duration: '1 mois', desc: 'Accès illimité aux installations de tennis tout au long du mois pour les passionnés.', price: '15 000', unit: 'par mois' },
  { id: 'sp-3', sportType: 'Basketball', name: 'Tarif Horaire', duration: '1h', desc: 'Accès libre au terrain de basketball professionnel pour vos séances de tirs ou matchs.', price: '1 000', unit: 'par personne' },
  { id: 'sp-4', sportType: 'Basketball', name: 'Tarif Samedi', duration: '4h', desc: 'Session spéciale de 4h le samedi, idéale pour des matchs de groupe ou tournois.', price: '2 500', unit: 'par personne' },
];

export const getSportServices = async (): Promise<SportService[]> => {
  try {
    const { data, error } = await supabase.from('sport_services').select('*');
    if (error || !data || data.length === 0) return DEFAULT_SPORT_SERVICES;
    return data as SportService[];
  } catch (e) { return DEFAULT_SPORT_SERVICES; }
};
export const saveSportServices = async (data: SportService[]) => {
  try {
    const { error } = await supabase.from('sport_services').upsert(data);
    if (error) throw error;
  } catch (e) { console.error(e); throw e; }
};

// Cart utility
export interface CartItem extends MenuItem {
  quantity: number;
}

export const getCart = (restaurantId: string): CartItem[] => {
  try {
    const data = localStorage.getItem(`panier_${restaurantId}`);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch (e) {
    console.error("Error loading cart, resetting to empty:", e);
    return [];
  }
};

export const saveCart = (restaurantId: string, cart: CartItem[]) => {
  try {
    localStorage.setItem(`panier_${restaurantId}`, JSON.stringify(cart));
  } catch (e) {
    console.error("Error saving cart:", e);
  }
};

export const clearCart = (restaurantId: string) => {
  try {
    localStorage.removeItem(`panier_${restaurantId}`);
  } catch (e) {
    console.error("Error clearing cart:", e);
  }
};
