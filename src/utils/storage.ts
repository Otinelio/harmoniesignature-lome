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
    id: 'bowling', name: 'Bowling', phone: '(+228) 92 92 18 89', hours: 'Mar – Dim : 16h00 – 00h00',
    priceAdult: '5 000', priceChild: '3 000', description: 'Pistes lumineuses pour des soirées inoubliables.', isOpen: true,
    images: ['https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&w=2000&auto=format&fit=crop']
  },
  {
    id: 'spa', name: 'Spa & Jacuzzi', phone: '(+228) 92 92 18 89', hours: 'Lun – Sam : 09h00 – 21h00',
    priceAdult: '25 000', priceChild: '-', description: 'Un sanctuaire de détente pour apaiser corps et esprit.', isOpen: true,
    images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop']
  },
  {
    id: 'gym', name: 'Gym & Fitness', phone: '(+228) 92 92 18 89', hours: 'Lun – Sam : 06h00 – 22h00',
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
      { id: '1', name: 'Pizza Margherita', category: 'Pizza', description: 'Tomate, mozzarella, basilic frais', price: 6500, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop' },
      { id: '2', name: 'Poulet Braisé', category: 'Plat', description: 'Poulet mariné épices locales, frites', price: 8000, image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    id: 'r2', name: 'Le Grill Signature', whatsapp: '22892921889', email: 'grill@harmonie.tg', hours: 'Mar - Dim: 18h00 - 23h30', isOpen: true,
    menu: [
      { id: '3', name: 'Côte de Boeuf', category: 'Plat', description: 'Bœuf premium, sauce au poivre, légumes', price: 15000, image: 'https://images.unsplash.com/photo-1544025162-811114b30e01?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    id: 'r3', name: 'Lounge L\'Océan', whatsapp: '22892921889', email: 'ocean@harmonie.tg', hours: 'Mer - Dim: 18h00 - 02h00', isOpen: true,
    menu: [
      { id: '4', name: 'Cocktail Signature', category: 'Boisson', description: 'Rhum, passion, mangue, citron vert', price: 5000, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop' }
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
  const data = localStorage.getItem('hs_admin_departments');
  return data ? JSON.parse(data) : DEFAULT_DEPARTMENTS;
};

export const saveDepartments = (deps: Department[]) => {
  localStorage.setItem('hs_admin_departments', JSON.stringify(deps));
};

export const getRestaurants = (): Restaurant[] => {
  const data = localStorage.getItem('hs_admin_restaurants');
  return data ? JSON.parse(data) : DEFAULT_RESTAURANTS;
};

export const saveRestaurants = (rests: Restaurant[]) => {
  localStorage.setItem('hs_admin_restaurants', JSON.stringify(rests));
};

export const getSettings = (): Settings => {
  const data = localStorage.getItem('hs_admin_settings');
  return data ? JSON.parse(data) : DEFAULT_SETTINGS;
};

export const saveSettings = (settings: Settings) => {
  localStorage.setItem('hs_admin_settings', JSON.stringify(settings));
};

// Cart utility
export interface CartItem extends MenuItem {
  quantity: number;
}

export const getCart = (restaurantId: string): CartItem[] => {
  const data = localStorage.getItem(`panier_${restaurantId}`);
  return data ? JSON.parse(data) : [];
};

export const saveCart = (restaurantId: string, cart: CartItem[]) => {
  localStorage.setItem(`panier_${restaurantId}`, JSON.stringify(cart));
};

export const clearCart = (restaurantId: string) => {
  localStorage.removeItem(`panier_${restaurantId}`);
};
