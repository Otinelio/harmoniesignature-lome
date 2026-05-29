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
}

const DEFAULT_DEPARTMENTS: Department[] = [
  {
    id: 'piscine', name: 'Piscine', phone: '(+228) 92 92 18 89', hours: 'Lun – Sam : 07h00 – 23h00',
    priceAdult: '6 000', priceChild: '3 000', description: 'Bassin olympique avec eau cristalline et ambiance tropicale.', isOpen: true,
    images: ['https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop']
  },
  {
    id: 'bowling', name: 'Bowling Le Logo', phone: '(+228) 72 27 43 90', hours: 'Mar – Dim : 16h00 – 00h00',
    priceAdult: '5 000', priceChild: '3 000', description: 'Pistes lumineuses pour des soirées inoubliables.', isOpen: true,
    images: ['https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&w=2000&auto=format&fit=crop']
  },
  {
    id: 'spa', name: 'Lotus Spa', phone: '(+228) 90 00 04 40', hours: 'Lun – Sam : 09h00 – 21h00',
    priceAdult: '25 000', priceChild: '-', description: 'Un sanctuaire de détente pour apaiser corps et esprit.', isOpen: true,
    images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop']
  },
  {
    id: 'gym', name: 'Platinum Fitness', phone: '(+228) 96 29 77 77', hours: 'Lun – Sam : 06h00 – 22h00',
    priceAdult: '2 000', priceChild: '-', description: 'Équipements de pointe pour vos entraînements intenses.', isOpen: true,
    images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop']
  },
  {
    id: 'tennis', name: 'Tennis', phone: '(+228) 92 92 18 89', hours: 'Lun – Sam : 07h00 – 22h00',
    priceAdult: '10 000', priceChild: '5 000', description: 'Terrains extérieurs éclairés pour jouer même de nuit.', isOpen: true,
    images: ['https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop']
  },
  {
    id: 'basket', name: 'Basket', phone: '(+228) 92 92 18 89', hours: 'Lun – Sam : 07h00 – 22h00',
    priceAdult: '5 000', priceChild: '2 500', description: 'Terrain professionnel pour des matchs intenses.', isOpen: true,
    images: ['https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=2000&auto=format&fit=crop']
  }
];

const DEFAULT_RESTAURANTS: Restaurant[] = [
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

const DEFAULT_SETTINGS: Settings = {
  adminPasswordHash: 'HS2025admin',
  mainWhatsApp: '22892921889',
  address: 'Rue 243 Tot Ancien BSL, Résidence du Bénin, Lomé, Togo',
  generalHours: 'Lundi – Samedi : 07h00 – 23h00 · Dimanche fermé',
  bowlingHours: 'Mardi – Dimanche 16h00 – 00h00',
  spaEmail: 'spa@harmoniesignature.tg',
  heroVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // placeholder
};

export const getDepartments = (): Department[] => {
  try {
    const data = localStorage.getItem('hs_admin_departments');
    if (!data) return DEFAULT_DEPARTMENTS;
    const deps = JSON.parse(data);
    if (!Array.isArray(deps)) {
      return DEFAULT_DEPARTMENTS;
    }
    let updated = false;
    const updatedDeps = deps.map(dep => {
      if (!dep || typeof dep !== 'object') return dep;
      if (dep.id === 'bowling' && dep.name !== 'Bowling Le Logo') {
        dep.name = 'Bowling Le Logo';
        updated = true;
      }
      if (dep.id === 'spa' && dep.name !== 'Lotus Spa') {
        dep.name = 'Lotus Spa';
        updated = true;
      }
      if (dep.id === 'gym' && dep.name !== 'Platinum Fitness') {
        dep.name = 'Platinum Fitness';
        updated = true;
      }
      return dep;
    }).filter(Boolean) as Department[];
    if (updated) {
      saveDepartments(updatedDeps);
    }
    return updatedDeps;
  } catch (e) {
    console.error("Error loading departments, resetting to default:", e);
    return DEFAULT_DEPARTMENTS;
  }
};

export const saveDepartments = (deps: Department[]) => {
  try {
    localStorage.setItem('hs_admin_departments', JSON.stringify(deps));
  } catch (e) {
    console.error("Error saving departments:", e);
  }
};

export const getRestaurants = (): Restaurant[] => {
  try {
    const data = localStorage.getItem('hs_admin_restaurants');
    if (!data) return DEFAULT_RESTAURANTS;
    const rests = JSON.parse(data);
    if (!Array.isArray(rests)) {
      return DEFAULT_RESTAURANTS;
    }
    // Force update from DEFAULT_RESTAURANTS if localStorage contains old small menu
    const tropicana = rests.find(r => r && r.id === 'tropicana');
    if (tropicana && Array.isArray(tropicana.menu) && tropicana.menu.length < 10) {
      const defaultTropicana = DEFAULT_RESTAURANTS.find(r => r.id === 'tropicana');
      if (defaultTropicana) {
        tropicana.menu = defaultTropicana.menu;
        saveRestaurants(rests);
      }
    }
    return rests.filter(r => r && r.id === 'tropicana') as Restaurant[];
  } catch (e) {
    console.error("Error loading restaurants, resetting to default:", e);
    return DEFAULT_RESTAURANTS.filter(r => r && r.id === 'tropicana');
  }
};

export const saveRestaurants = (rests: Restaurant[]) => {
  try {
    localStorage.setItem('hs_admin_restaurants', JSON.stringify(rests));
  } catch (e) {
    console.error("Error saving restaurants:", e);
  }
};

export const getSettings = (): Settings => {
  try {
    const data = localStorage.getItem('hs_admin_settings');
    if (!data) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(data);
    if (!parsed || typeof parsed !== 'object') {
      return DEFAULT_SETTINGS;
    }
    // Ensure critical fields are present
    return {
      adminPasswordHash: parsed.adminPasswordHash || DEFAULT_SETTINGS.adminPasswordHash,
      mainWhatsApp: parsed.mainWhatsApp || DEFAULT_SETTINGS.mainWhatsApp,
      address: parsed.address || DEFAULT_SETTINGS.address,
      generalHours: parsed.generalHours || DEFAULT_SETTINGS.generalHours,
      bowlingHours: parsed.bowlingHours || DEFAULT_SETTINGS.bowlingHours,
      spaEmail: parsed.spaEmail || DEFAULT_SETTINGS.spaEmail,
      heroVideoUrl: parsed.heroVideoUrl || DEFAULT_SETTINGS.heroVideoUrl,
    };
  } catch (e) {
    console.error("Error loading settings, resetting to default:", e);
    return DEFAULT_SETTINGS;
  }
};

export const saveSettings = (settings: Settings) => {
  try {
    localStorage.setItem('hs_admin_settings', JSON.stringify(settings));
  } catch (e) {
    console.error("Error saving settings:", e);
  }
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
