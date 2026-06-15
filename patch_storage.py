import re

with open('src/utils/storage.ts', 'r') as f:
    content = f.read()

# We need to add DEFAULT_SPA_SERVICES, DEFAULT_BOWLING_PLANS, DEFAULT_POOL_PLANS, DEFAULT_GYM_PLANS, DEFAULT_SPORT_SERVICES

# Spa
content = re.sub(r'export const getSpaServices = \(\): SpaService\[\] => \{.*?\n\};', '''const DEFAULT_SPA_SERVICES: SpaService[] = [
  { id: 'spa-1', category: 'Soins du Corps', name: 'Massage Aromathérapie 1h', duration: '60 min', desc: 'Soin relaxant profond associant les vertus thérapeutiques des huiles essentielles.', price: '30.000', image: '' },
  { id: 'spa-2', category: 'Soins du Corps', name: 'Relax Touche 30min', duration: '30 min', desc: 'Massage ciblé rapide pour libérer les tensions accumulées.', price: '15.000', image: '' },
  { id: 'spa-3', category: 'Soins du Corps', name: 'Relax Touche 1h', duration: '60 min', desc: 'Massage relaxant complet pour apaiser le corps et l\\'esprit.', price: '25.000', image: '' },
  { id: 'spa-4', category: 'Soins du Corps', name: 'Massage Pierres Chaudes', duration: '60 min', desc: 'Massage réconfortant avec des pierres de basalte volcaniques chauffées.', price: '40.000', image: '' },
  { id: 'spa-5', category: 'Soins du Corps', name: 'Four Hands 50min', duration: '50 min', desc: 'Une harmonie parfaite réalisée par deux praticiens pour une relaxation absolue.', price: '40.000', image: '' },
  { id: 'spa-6', category: 'Soins du Corps', name: 'Escale Plantaire 30min', duration: '30 min', desc: 'Massage relaxant des pieds inspiré de la réflexologie plantaire.', price: '17.000', image: '' },
  { id: 'spa-7', category: 'Soins du Corps', name: 'Duo Force Vital 1h', duration: '60 min', desc: 'Partagez un moment d\\'énergie et de complicité à deux en cabine double.', price: '55.000', image: '' },
  { id: 'spa-8', category: 'Soins du Corps', name: 'Duo Toucher Apaisant 1h', duration: '60 min', desc: 'Massage relaxant à deux pour une évasion sensorielle partagée.', price: '40.000', image: '' },
  { id: 'spa-9', category: 'Soins du Corps', name: 'Duo Pierres Chaudes 1h30', duration: '90 min', desc: 'Expérience sensorielle divine à deux avec des pierres volcaniques chaudes.', price: '70.000', image: '' },
  { id: 'spa-10', category: 'Soins du Corps', name: 'Force Vital 30min', duration: '30 min', desc: 'Soin dynamisant rapide pour relancer l\\'énergie corporelle.', price: '20.000', image: '' },
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
  { id: 'spa-28', category: 'Épilation à la Cire', name: 'Dos Femme Complet', duration: 'Prestation', desc: 'Épilation soignée de l\\'intégralité du dos pour femme.', price: '10.000', image: '' },
  { id: 'spa-29', category: 'Épilation à la Cire', name: 'Dos Homme Complet', duration: 'Prestation', desc: 'Épilation de l\\'intégralité du dos pour homme.', price: '12.000', image: '' },
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

export const getSpaServices = (): SpaService[] => {
  try {
    const data = localStorage.getItem('hs_admin_spa');
    if (!data) return DEFAULT_SPA_SERVICES;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_SPA_SERVICES;
  } catch { return DEFAULT_SPA_SERVICES; }
};''', content, flags=re.DOTALL)

# Bowling
content = re.sub(r'export const getBowlingPlans = \(\): BowlingPlan\[\] => \{.*?\n\};', '''const DEFAULT_BOWLING_PLANS: BowlingPlan[] = [
  { id: 'bw-1', badge: null, name: 'Partie Simple', tagline: '1 joueur · Chaussures incluses', price: '5 000', features: ['1 piste réservée', 'Chaussures fournies', 'Balle au choix'], highlight: false, image: '' },
  { id: 'bw-2', badge: 'Populaire', name: 'Groupe (4 pers.)', tagline: 'Idéal entre amis ou en famille', price: '18 000', features: ['1 piste réservée', 'Chaussures fournies', '2 parties incluses'], highlight: true, image: '' },
  { id: 'bw-3', badge: null, name: 'Soirée VIP', tagline: 'Piste privée · 2h · Boissons', price: '35 000', features: ['Piste privatisée 2h', 'Chaussures fournies', 'Boissons offertes'], highlight: false, image: '' },
];

export const getBowlingPlans = (): BowlingPlan[] => {
  try {
    const data = localStorage.getItem('hs_admin_bowling');
    if (!data) return DEFAULT_BOWLING_PLANS;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_BOWLING_PLANS;
  } catch { return DEFAULT_BOWLING_PLANS; }
};''', content, flags=re.DOTALL)

# Pool
content = re.sub(r'export const getPoolPlans = \(\): PoolPlan\[\] => \{.*?\n\};', '''const DEFAULT_POOL_PLANS: PoolPlan[] = [
  { id: 'pl-1', category: 'Accès Piscine', name: 'Séance Unique', price: '5.000', desc: 'Entrée unique donnant accès libre au grand bassin olympique, transats et parasols.', duration: '1 Séance', badge: '' },
  { id: 'pl-2', category: 'Accès Piscine', name: 'Hebdomadaire', price: '15.000', desc: 'Accès libre à la piscine olympique pendant 7 jours consécutifs.', duration: '1 Semaine', badge: '' },
  { id: 'pl-3', category: 'Accès Piscine', name: '2 Semaines', price: '30.000', desc: 'Accès libre à la piscine olympique pendant 14 jours consécutifs.', duration: '2 Semaines', badge: '' },
  { id: 'pl-4', category: 'Accès Piscine', name: '3 Semaines', price: '40.000', desc: 'Accès libre à la piscine olympique pendant 21 jours consécutifs.', duration: '3 Semaines', badge: '' },
  { id: 'pl-5', category: 'Accès Piscine', name: 'Mensuel', price: '50.000', desc: 'La formule mensuelle idéale pour les amateurs de natation régulière. 30 jours.', duration: '1 Mois', badge: 'Populaire' },
  { id: 'pl-6', category: 'Accès Piscine', name: 'Trimestriel', price: '130.000', desc: 'Accès libre pendant 3 mois à nos installations de baignade de prestige.', duration: '3 Mois', badge: '' },
  { id: 'pl-7', category: 'Accès Piscine', name: 'Semestriel', price: '230.000', desc: 'Accès libre pendant 6 mois. Idéal pour s\\'entraîner tout au long des saisons.', duration: '6 Mois', badge: '' },
  { id: 'pl-8', category: 'Accès Piscine', name: 'Annuel', price: '360.000', desc: 'Accès complet et illimité 365 jours de l\\'année. Économisez sur la durée.', duration: '1 An', badge: 'Économique' },
  { id: 'pl-9', category: 'Gym + Piscine (Combiné)', name: 'Séance Combinée unique', price: '10.000', desc: 'Accès combiné à la salle de sport et à la piscine olympique pour une journée.', duration: '1 Séance', badge: 'Duo Journée' },
  { id: 'pl-10', category: 'Gym + Piscine (Combiné)', name: 'Mensuel Combiné', price: '90.000', desc: 'Accès illimité à la gym et à la piscine olympique pendant 1 mois.', duration: '1 Mois', badge: 'Recommandé' },
  { id: 'pl-11', category: 'Gym + Piscine (Combiné)', name: 'Trimestriel Combiné', price: '260.000', desc: 'Le compromis parfait. Accès illimité gym et piscine pendant 3 mois.', duration: '3 Mois', badge: '' },
  { id: 'pl-12', category: 'Gym + Piscine (Combiné)', name: 'Semestriel Combiné', price: '475.000', desc: 'Accès illimité total à notre complexe sportif de prestige pendant 6 mois.', duration: '6 Mois', badge: '' },
  { id: 'pl-13', category: 'Gym + Piscine (Combiné)', name: 'Annuel Combiné', price: '600.000', desc: 'Accès illimité absolu 365 jours de l\\'année. Formule ultime Harmonie Gold.', duration: '1 An', badge: 'Prestige VIP' },
  { id: 'pl-14', category: 'Cours de Natation', name: 'Séance de Natation coachée', price: '5.000', desc: 'Apprentissage ou perfectionnement des techniques de nage avec notre maître-nageur certifié.', duration: 'Séance unique', badge: 'Coach individuel' },
];

export const getPoolPlans = (): PoolPlan[] => {
  try {
    const data = localStorage.getItem('hs_admin_pool');
    if (!data) return DEFAULT_POOL_PLANS;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_POOL_PLANS;
  } catch { return DEFAULT_POOL_PLANS; }
};''', content, flags=re.DOTALL)

# Gym
content = re.sub(r'export const getGymPlans = \(\): GymPlan\[\] => \{.*?\n\};', '''const DEFAULT_GYM_PLANS: GymPlan[] = [
  { id: 'gy-1', category: 'Accès Gym', name: 'Séance Unique', price: '6.000', desc: 'Accès libre à tous les équipements pour une séance unique sans engagement.', duration: '1 Séance', badge: '' },
  { id: 'gy-2', category: 'Accès Gym', name: 'Hebdomadaire', price: '15.000', desc: 'Accès illimité à la salle de sport pendant 7 jours consécutifs.', duration: '1 Semaine', badge: '' },
  { id: 'gy-3', category: 'Accès Gym', name: '2 Semaines', price: '30.000', desc: 'Accès illimité à l\\'espace fitness pendant 14 jours consécutifs.', duration: '2 Semaines', badge: '' },
  { id: 'gy-4', category: 'Accès Gym', name: '3 Semaines', price: '40.000', desc: 'Accès illimité à l\\'espace fitness pendant 21 jours consécutifs.', duration: '3 Semaines', badge: '' },
  { id: 'gy-5', category: 'Accès Gym', name: 'Mensuel', price: '50.000', desc: 'Formule idéale pour un entraînement régulier. Accès illimité pendant 30 jours.', duration: '1 Mois', badge: 'Populaire' },
  { id: 'gy-6', category: 'Accès Gym', name: 'Trimestriel', price: '130.000', desc: 'Accès illimité pendant 3 mois. Suivi et progression garantis.', duration: '3 Mois', badge: '' },
  { id: 'gy-7', category: 'Accès Gym', name: 'Semestriel', price: '230.000', desc: 'Accès illimité pendant 6 mois pour un engagement de santé à moyen terme.', duration: '6 Mois', badge: '' },
  { id: 'gy-8', category: 'Accès Gym', name: 'Annuel', price: '360.000', desc: 'Accès illimité pendant 1 an. La formule suprême pour un mode de vie sain.', duration: '1 An', badge: 'Économique' },
  { id: 'gy-9', category: 'Gym + Piscine (Combiné)', name: 'Séance Combinée unique', price: '10.000', desc: 'Accès combiné à la salle de sport et à la piscine olympique pour une journée.', duration: '1 Séance', badge: 'Duo Journée' },
  { id: 'gy-10', category: 'Gym + Piscine (Combiné)', name: 'Mensuel Combiné', price: '90.000', desc: 'Accès illimité à la gym et à la piscine olympique pendant 1 mois.', duration: '1 Mois', badge: 'Recommandé' },
  { id: 'gy-11', category: 'Gym + Piscine (Combiné)', name: 'Trimestriel Combiné', price: '260.000', desc: 'Le compromis parfait. Accès illimité gym et piscine pendant 3 mois.', duration: '3 Mois', badge: '' },
  { id: 'gy-12', category: 'Gym + Piscine (Combiné)', name: 'Semestriel Combiné', price: '475.000', desc: 'Accès illimité total à notre complexe sportif de prestige pendant 6 mois.', duration: '6 Mois', badge: '' },
  { id: 'gy-13', category: 'Gym + Piscine (Combiné)', name: 'Annuel Combiné', price: '600.000', desc: 'Accès illimité absolu 365 jours de l\\'année. Formule ultime Harmonie Gold.', duration: '1 An', badge: 'Prestige VIP' },
  { id: 'gy-14', category: 'Cours & Activités', name: 'Séance de Cours Gym', price: '3.000', desc: 'Participation à une séance collective encadrée par nos coachs certifiés.', duration: 'Séance', badge: '' },
  { id: 'gy-15', category: 'Cours & Activités', name: 'Mensuel Cours Gym', price: '20.000', desc: 'Accès illimité aux cours collectifs de fitness et gym pendant un mois.', duration: '1 Mois', badge: '' },
  { id: 'gy-16', category: 'Cours & Activités', name: 'Cours de Combat', price: '30.000', desc: 'Soin de self-défense, boxe et arts martiaux encadrés par des professionnels.', duration: 'Tarif Mensuel', badge: 'Nouveau' },
  { id: 'gy-17', category: 'Cours & Activités', name: 'Aqua-Gym', price: '30.000', desc: 'Gymnastique aquatique tonifiante et douce pour les articulations.', duration: 'Tarif Mensuel', badge: '' },
];

export const getGymPlans = (): GymPlan[] => {
  try {
    const data = localStorage.getItem('hs_admin_gym');
    if (!data) return DEFAULT_GYM_PLANS;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_GYM_PLANS;
  } catch { return DEFAULT_GYM_PLANS; }
};''', content, flags=re.DOTALL)

# Sports
content = re.sub(r'export const getSportServices = \(\): SportService\[\] => \{.*?\n\};', '''const DEFAULT_SPORT_SERVICES: SportService[] = [
  { id: 'sp-1', sportType: 'Tennis', name: 'Tarif Horaire', duration: '1h', desc: 'Accès libre aux courts de tennis de qualité supérieure pour vos matchs en simple ou double.', price: '5 000', unit: 'par personne' },
  { id: 'sp-2', sportType: 'Tennis', name: 'Abonnement Mensuel', duration: '1 mois', desc: 'Accès illimité aux installations de tennis tout au long du mois pour les passionnés.', price: '15 000', unit: 'par mois' },
  { id: 'sp-3', sportType: 'Basketball', name: 'Tarif Horaire', duration: '1h', desc: 'Accès libre au terrain de basketball professionnel pour vos séances de tirs ou matchs.', price: '1 000', unit: 'par personne' },
  { id: 'sp-4', sportType: 'Basketball', name: 'Tarif Samedi', duration: '4h', desc: 'Session spéciale de 4h le samedi, idéale pour des matchs de groupe ou tournois.', price: '2 500', unit: 'par personne' },
];

export const getSportServices = (): SportService[] => {
  try {
    const data = localStorage.getItem('hs_admin_sports');
    if (!data) return DEFAULT_SPORT_SERVICES;
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_SPORT_SERVICES;
  } catch { return DEFAULT_SPORT_SERVICES; }
};''', content, flags=re.DOTALL)

with open('src/utils/storage.ts', 'w') as f:
    f.write(content)
