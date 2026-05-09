isuelles et fonctionnelles intégrées━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROMPT DE DESIGN — HARMONIE SIGNATURE
Complexe de Loisirs Premium · Lomé, Togo
Site web multi-pages · Réservation Spa · Commandes WhatsApp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

— VISION GLOBALE —

Le visiteur n'ouvre pas un site. Il franchit une entrée et Lomé change d'échelle autour de lui. L'eau bleu profond de la piscine capte la lumière du soir, des quilles roulent dans le roulement sourd du bowling, une salle de sport pulse au rythme des machines, trois tables différentes proposent trois voyages culinaires distincts. Harmonie Signature n'est pas un complexe parmi d'autres — c'est la parenthèse premium que le quartier de La Caisse s'est offerte. Le site doit restituer cette densité d'expériences sans jamais ressembler à un catalogue. Chaque page est un espace à habiter. L'ambiance oscille entre la clarté dorée d'un après-midi en bord de piscine et l'intensité feutrée d'une soirée de bowling sous les lumières tamisées.

— DIRECTION ESTHÉTIQUE —

Direction choisie : Tropique Signature — Luxe Nocturne Togolais

Lomé est une ville côtière, vivante, sophistiquée le soir. Harmonie Signature est son complexe de référence dans un quartier huppé. La direction fusionne trois registres : le luxe tropical aquatique (eau, lumières chaudes, verdure), le premium urbain africain contemporain (géométrie forte, typographie de caractère), et le nocturne premium (fonds sombres, dorés sculptés par la lumière, surfaces profondes).

Ce que le site NE DOIT JAMAIS être :

- Un site sportif générique bleu clair / blanc avec icônes de musculation
- Un catalogue de services avec cards blanches arrondies sur fond gris clair
- Une landing page institutionnelle froide sans âme ni chaleur sensorielle

Ce que le site EST :

- Un hôtel cinq étoiles qui aurait aussi une salle de sport et un bowling
- Une adresse que les Loméens recommandent les yeux fermés à leurs visiteurs
- Un espace qui change d'atmosphère selon l'heure — lumineux le midi, doré l'après-midi, enveloppant le soir

Comportement de la grille : modulaire et éditorial — asymétrie contrôlée, sections alternant entre pleine largeur et compositions asymétriques.

— PALETTE —

| Rôle               | Description                | HEX     | Règle d'usage                                           |
| ------------------ | -------------------------- | ------- | ------------------------------------------------------- |
| Fond principal     | Nuit profonde togolaise    | #0C1018 | Background de toutes les pages et sections principales  |
| Texte principal    | Ivoire chaud               | #EDE8DF | Corps de texte, labels, liens de navigation             |
| Accent signature   | Or mat aquatique           | #C8A84B | CTA principaux, prix, titres display, séparateurs       |
| Surface secondaire | Ardoise bleue nuit         | #182030 | Fonds de cards, sections alternées, footer principal    |
| Accent aquatique   | Turquoise piscine profonde | #2E9EAD | Département piscine, icônes aquatiques, séparateurs eau |
| Fond clôture       | Noir absolu                | #060809 | Footer bas de page uniquement                           |

Règle or : exclusivement sur (1) boutons CTA, (2) tarifs mis en avant, (3) titres display Playfair. Jamais en background étendu.
Règle turquoise : uniquement pour évoquer l'eau — piscine, jacuzzi spa, séparateurs aquatiques.

— TYPOGRAPHIE —

Font Display : Playfair Display (Google Fonts)
Serif classique à forts contrastes thin/bold. Élégance photographique sur fond sombre. Présence sculpturale.

- Hero title : 96px desktop / 52px mobile, weight 400, tracking -0.01em, capitales espacées
- Titres de section : 56px, weight 400, italique autorisé sur accroches
- Titres de département : 40px, weight 600
- Prix / tarifs : 34px, weight 700, couleur or #C8A84B
- Noms de plats menu : 18px, weight 500

Font Body : DM Sans (Google Fonts)
Géométrique humaniste. Parfaitement lisible en petit corps sur fond sombre. Excellent pour menus et listes.

- Body : 16px, weight 400, line-height 1.75
- Labels / badges : 11px, MAJUSCULES, tracking 0.18em
- Navigation : 13px, weight 500, tracking 0.09em
- Descriptions de plats : 14px, weight 400, opacity 0.75, line-height 1.6

— SYSTÈME D'ICÔNES —

Librairie : lucide-react — stroke width global 1.5, couleur par défaut #EDE8DF, hover accent #C8A84B.

Tailles :

- Navigation : 24px (hamburger / fermeture)
- Cards départements : 32px strokeWidth 1.25
- CTA WhatsApp flottant : 22px
- Footer réseaux sociaux : 20px
- Panier : 22px
- Flèches / chevrons : 18px

Mapping obligatoire :

- Navigation mobile : Menu → X
- Scroll hero : ChevronDown (bounce doux)
- Piscine : Waves
- Bowling : CircleDot
- Spa & Jacuzzi : Sparkles
- Gym : Dumbbell
- Tennis : Trophy
- Basket : CircleDot (variante)
- Restaurant Tropicana : UtensilsCrossed
- Restaurant 2 : ChefHat
- Restaurant 3 : Soup
- Adresse : MapPin
- Téléphone : Phone
- WhatsApp : MessageCircle
- Horaires : Clock
- Tarifs : Banknote
- Réservation : CalendarCheck
- Panier : ShoppingCart, Plus, Minus, Trash2
- Galerie photos : Images
- Flèches galerie : ChevronLeft, ChevronRight
- Réseaux sociaux : react-icons/fa pour Facebook, Instagram, TikTok, X

Règle absolue : aucun emoji Unicode nulle part dans l'UI.

— ÉCRAN DE CHARGEMENT —

Fond #0C1018. Au centre, "HARMONIE SIGNATURE" en Playfair Display 28px s'écrit via stroke-dashoffset (900ms, cubic-bezier(0.4, 0, 0.2, 1)). Sous le nom, ligne dorée #C8A84B s'étend de 0 → 100px (350ms, délai 700ms, ease-out). Après 250ms de pause, scale(0.85) + opacity 0 en 280ms, puis page monte translateY(24px) → 0 + opacity 0 → 1 en 480ms. Pas de spinner. Durée totale : 2.1 secondes.

— NAVIGATION —

Desktop :
Barre fixe, hauteur 72px, fond #0C1018 à 90% opacité, backdrop-filter blur(16px). Logotype Playfair Display à gauche. Liens DM Sans 13px weight 500 tracking 0.09em :

Accueil · Départements · Restauration · Spa & Wellness · Tarifs · Contact

"Départements" est le seul lien qui déclenche un mega-menu dropdown (voir ci-dessous). CTA pill-button doré "Réserver au Spa" à l'extrême droite.

MEGA-MENU "DÉPARTEMENTS" :
Au hover sur "Départements", un panneau dropdown s'ouvre sous la navbar (fond #182030, bordure-top 2px solid #C8A84B, border-radius 0 0 8px 8px, box-shadow 0 20px 60px rgba(0,0,0,0.6), animation translateY(-8px) → 0 + opacity 0 → 1, durée 220ms ease-out). Le panneau contient une grille 4 colonnes :

- Col 1 : Piscine (icône Waves) / Bowling (icône CircleDot)
- Col 2 : Spa & Jacuzzi (icône Sparkles) / Gym & Fitness (icône Dumbbell)
- Col 3 : Tennis (icône Trophy) / Basket (icône CircleDot)
- Col 4 : À propos du complexe (icône Building2) / Tarifs (icône Banknote)
  Chaque item : icône 20px + nom DM Sans 14px + micro-description 11px opacité 0.6. Hover item : fond #0C1018, bordure-left 2px or, translateX(4px) en 150ms.

Hover liens nav standard : ligne dorée 1px scaleX 0 → 1, transform-origin left, 180ms ease-out.

CTA WhatsApp fixe bas-droite :
Fond #128C7E, icône MessageCircle 22px blanc, border-radius 50%, taille 52px. Hover : libellé "Nous contacter" slide-in depuis la droite (180ms). Lien : https://wa.me/22892921889

Mobile :
Hamburger Menu 24px. Overlay plein écran #0C1018, clip-path reveal 320ms ease-in-out. Liens Playfair 42px italic avec stagger 65ms. "Départements" ouvre un sous-menu accordéon qui liste tous les départements avec icône + nom. Fermeture : icône X.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— PAGES —
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PAGE ACCUEIL — "Lomé respire ici"

HERO — 100vh :
Vidéo ou photo plein écran (query : "luxury swimming pool tropical resort night lights reflection") avec overlay gradient #0C1018 à 70% en bas. Contenu centré verticalement :

HARMONIE
SIGNATURE

Playfair Display 96px desktop / 52px mobile, weight 400, tracking 0.08em, couleur #EDE8DF. Sous-titre : "Piscine · Bowling · Spa · Restaurants · Tennis · Basket · Gym" en DM Sans 11px MAJUSCULES tracking 0.2em, couleur turquoise #2E9EAD, margin-top 20px. Deux CTA : bouton pill doré "Réserver au Spa" + bouton ghost "Découvrir". Icône ChevronDown 22px en bas, bounce doux (translateY 0 → 6px → 0, 1.5s infinie).

─────────────────────────────────────────
SECTION VIDÉO — IMMÉDIATEMENT APRÈS LE HERO (deuxième chose vue au scroll)
─────────────────────────────────────────
Pas de section intermédiaire entre le hero et la vidéo. Le visiteur scroll une fois et tombe directement sur la vidéo.

Hauteur : 85vh minimum — la vidéo prend presque tout l'écran, elle impose sa présence.
Layout : pleine largeur absolue sans marges latérales, fond #0C1018 pour les bandes haut/bas.
La vidéo est en autoplay, muted, loop, playsinline, object-fit cover.
Lien vidéo : [À FOURNIR PAR LE CLIENT — URL YouTube embed ou fichier MP4 direct].

Au-dessus de la vidéo (overlay centré, position absolute) :

- Fine ligne dorée horizontale 80px + texte DM Sans 11px MAJUSCULES tracking 0.2em "#EDE8DF opacité 0.7" : "BIENVENUE CHEZ HARMONIE SIGNATURE"

En bas de la vidéo, une bande semi-transparente fond #0C1018 à 75% avec :

- Titre Playfair 28px italic : "Votre complexe de référence à Lomé"
- DM Sans 14px opacité 0.75 : adresse + horaires en une ligne

Effets : la vidéo a un léger vignettage radial (radial-gradient from transparent center to #0C1018 80% opacity en bordure) pour l'intégrer visuellement dans le fond sombre du site. filter: saturate(1.1) contrast(1.04) pour punch visuel.

─────────────────────────────────────────
SECTION CONTACT ACCUEIL
─────────────────────────────────────────
Bande horizontale fond #182030, hauteur 64px desktop / auto mobile.
Gauche : icône Phone 18px doré + "Accueil : (+228) 92 92 18 89" DM Sans 14px.
Droite : icône Clock 18px + "Lun – Sam : 07h00 – 23h00 · Dim : Fermé".

─────────────────────────────────────────
SECTION MOSAÏQUE DÉPARTEMENTS
─────────────────────────────────────────
Titre Playfair 52px centré : "Nos Univers". Sous-titre DM Sans 13px MAJUSCULES tracking 0.15em turquoise : "7 ESPACES · UN SEUL ENDROIT".

Composition en mosaïque photo — UNE SEULE image composite sur toute la largeur (pas de cards séparées) construite avec CSS grid asymétrique. La mosaïque occupe toute la largeur de l'écran, hauteur 600px desktop / auto mobile. Disposition :
┌─────────────────────┬──────────┬──────────┐
│ │ BOWLING │ SPA │
│ PISCINE │ │ │
│ (grande) ├──────────┼──────────┤
│ │ GYM │ TROPICANA│
├──────────┬──────────┴──────────┤ │
│ TENNIS │ BASKET │ │
└──────────┴─────────────────────┴──────────┘

Chaque cellule de la grille : photo plein fond (query Unsplash par département), overlay gradient sombre, icône lucide-react 24px ivoire en bas à gauche + nom du département Playfair 18px. Au hover d'une cellule : légère élévation par box-shadow intérieur + image scale(1.04) durée 380ms + overlay légèrement moins sombre pour révéler la photo. Cliquer sur une cellule navigue vers la page du département.

Sur mobile : la mosaïque devient un carousel swipeable (1.2 cards visibles pour indiquer le swipe).

─────────────────────────────────────────
SECTION CHIFFRES SIGNATURE
─────────────────────────────────────────
Fond #182030. 4 compteurs animés au scroll (CountUp, 1800ms, ease-out) :

- 07h00 — Ouverture chaque jour
- 7 — Univers de loisirs
- 6 000 FCFA — Séance piscine adulte
- 3 — Restaurants sur place

─────────────────────────────────────────
SECTION CTA SPA
─────────────────────────────────────────
Fond #C8A84B plein, texte #0C1018. Playfair 48px italic : "Le spa vous attend." + DM Sans 16px + bouton dark "Réserver maintenant" + icône CalendarCheck 18px.

Élément signature accueil : la vidéo en 85vh immédiatement sous le hero — immersive, sans transition, comme si on plongeait dans l'univers du complexe dès le premier scroll.

───────────────────────────────────────── 2. PAGE DÉPARTEMENTS — "Choisissez votre terrain"
─────────────────────────────────────────
Page hub qui regroupe tous les départements. C'est la destination du lien "Départements" dans la nav et dans le footer.

Hero 50vh : mosaïque photo en background (même composition que l'accueil, réduite), overlay sombre 65%. Titre Playfair 64px : "Nos Départements". Sous-titre DM Sans 13px MAJUSCULES turquoise.

7 sections scrollables, une par département, alternant disposition gauche/droite :

- Grande photo à gauche (ou droite), texte à droite (ou gauche)
- Icône département 28px doré + nom Playfair 32px + accroche DM Sans 16px 2 lignes + horaires + lien "Découvrir ce département" avec ArrowRight
- Chaque section a une hauteur minimale de 65vh
- Un séparateur graphique entre chaque section : ligne fine dorée 1px à 30% opacité

L'ordre : Piscine / Bowling / Spa & Jacuzzi / Gym & Fitness / Tennis / Basket / (Restaurants renvoient vers la page Restauration).

───────────────────────────────────────── 3. PAGE PISCINE — "L'eau comme chez soi"
─────────────────────────────────────────
Hero 70vh : photo principale piscine plein écran (query : "olympic swimming pool clear blue water aerial tropical"). Overlay gradient diagonal bas-gauche → haut-droite, #0C1018 à 60%. Titre Playfair 64px : "La Piscine". Badge DM Sans 11px MAJUSCULES turquoise : "OUVERT DU LUNDI AU SAMEDI".

Section présentation : texte éditorial 2 colonnes + grande photo principale — Playfair 40px italic en accroche + paragraphe DM Sans 16px décrivant l'espace, l'eau, l'ambiance.

GALERIE PHOTOS (4 à 8 images) :
Grid CSS masonry-like en 3 colonnes desktop / 2 colonnes mobile. Images de différentes tailles (certaines grandes, certaines petites) pour casser la monotonie. Queries Unsplash :

1. "swimming pool clear water surface tropical sunlight"
2. "olympic pool lane aerial view blue"
3. "swimming pool edge infinity resort"
4. "pool water reflection evening warm light"
5. "tropical resort pool lounge chairs"
6. "children pool splash water play"
   Au clic sur une image, ouverture d'un lightbox plein écran (fond #0C1018 à 95%, image centrée, flèches ChevronLeft / ChevronRight lucide-react 32px pour naviguer, icône X pour fermer, transition fade 250ms).

Tarifs : cards fond #182030 bordure #C8A84B : "Adulte : 6 000 FCFA" + "Enfant : [À CONFIRMER]" + badge "Abonnement disponible".
Horaires : icône Clock + "Lundi – Samedi : 07h00 – 23h00".
Contact département : icône Phone + numéro [À CONFIRMER PAR LE CLIENT].
Aucun bouton de réservation en ligne — contact direct uniquement.

Élément signature : vague SVG animée en séparateur de section, path oscillant couleur turquoise #2E9EAD, 4s infinie.

───────────────────────────────────────── 4. PAGE BOWLING — "La piste t'attend"
─────────────────────────────────────────
Hero 70vh : photo bowling (query : "bowling alley dark neon lanes perspective"). Titre Playfair 64px avec animation lettre par lettre au chargement (stagger 60ms, translateY -20px → 0, 350ms par lettre) : "BOWLING".

Section présentation : texte descriptif ambiance nocturne, pistes illuminées, sons, atmosphère.

GALERIE PHOTOS (4 à 6 images) :
Layout horizontal scrollable (overflow-x scroll snappy) desktop / grid 2 colonnes mobile. Queries :

1. "bowling alley dark dramatic neon lighting"
2. "bowling ball lane pins strike moment"
3. "bowling shoes rental counter retro"
4. "bowling score screen display neon"
5. "friends bowling night out fun"
6. "bowling alley aerial view multiple lanes"
   Lightbox au clic, même système que piscine.

Horaires : icône Clock + "Mardi – Dimanche : 16h00 – 00h00 · Lundi : Fermé".
Tarifs : [À CONFIRMER] — cards fond #182030 bordure or.
Contact département : icône Phone + numéro [À CONFIRMER].
Aucun bouton de réservation.

───────────────────────────────────────── 5. PAGE SPA & WELLNESS — "Le silence d'abord"
─────────────────────────────────────────
Page visuellement la plus épurée. Fond #182030, photos désaturées teinte bleue froide.

Hero 70vh : photo spa (query : "luxury spa jacuzzi candle warm water stone"). Titre Playfair 64px italic : "Spa & Wellness". Sous-titre : "Massage Thaï · Jacuzzi · Soins Corps".

Section présentation 3 soins :
3 cards épurées fond #0C1018 bordure fine, icône Sparkles 28px, nom du soin Playfair 22px + description + tarif [À CONFIRMER].

GALERIE PHOTOS (4 à 6 images) :
Grid masonry 3 colonnes, images en noir et blanc + teinte bleue (filter: grayscale(0.6) sepia(0.2) hue-rotate(190deg) saturate(1.5)). Queries :

1. "spa room candles stones warm light zen"
2. "jacuzzi luxury indoor warm water foam"
3. "thai massage hands back relaxation"
4. "spa towels aromatherapy essential oils"
5. "wellness lounge relax dark ambient"
6. "spa treatment room bed luxury linen"
   Lightbox identique, mais fond #182030 au lieu de #0C1018 pour cohérence avec la page.

Contact département : icône Phone + numéro [À CONFIRMER].
Horaires : [À CONFIRMER].

FORMULAIRE DE RÉSERVATION SPA (directement sur cette page) :
Titre Playfair 40px : "Prendre rendez-vous". Fond #0C1018, champs avec border-bottom 1px #C8A84B (pas de box-border classique) :

1. Soin souhaité (select : Massage Thaï / Spa / Jacuzzi / Soin Corps)
2. Date souhaitée (date picker, min = aujourd'hui)
3. Heure souhaitée (select créneaux 30min)
4. Prénom & Nom
5. Téléphone WhatsApp
6. Message optionnel (textarea)

Bouton doré "Confirmer ma réservation" + icône CalendarCheck. Génère message WhatsApp vers wa.me/22892921889 :
Demande de RDV Spa — Harmonie Signature
Soin : [soin]
Date : [date] à [heure]
Nom : [prénom nom]
Tel : [téléphone]
Demande : [message]
Note sous formulaire : "Notre équipe confirme par WhatsApp sous 2h."

Élément signature : dévoilement des photos par clip-path rect de gauche à droite au scroll, durée 700ms.

───────────────────────────────────────── 6. PAGE GYM & FITNESS — "Plus fort chaque jour"
─────────────────────────────────────────
Hero 70vh : photo gym (query : "modern gym fitness dark equipment dramatic light"). Titre Playfair 64px : "Gym & Fitness".

Section présentation : description des équipements disponibles, ambiance.

GALERIE PHOTOS (4 à 6 images) :
Grid 3 colonnes, images avec filter: saturate(0.7) contrast(1.15) pour rendu industriel. Queries :

1. "gym weights barbell dark industrial light"
2. "fitness machines cardio modern equipment"
3. "weight training bench press gym"
4. "stretching yoga mat gym mirror"
5. "gym locker room modern clean"
6. "personal training coach gym session"
   Lightbox standard.

Formules abonnement : cards fond #182030 bordure or — Séance / Mensuel / Annuel — tarifs [À CONFIRMER], badge "Réduction périodique disponible" sur formule mensuelle. La formule "Annuel" a une élévation box-shadow 0 0 0 2px #C8A84B + badge "Meilleure offre" DM Sans 10px.
Horaires : [À CONFIRMER]. Contact département : icône Phone + numéro [À CONFIRMER].
Aucun bouton de réservation.

───────────────────────────────────────── 7. PAGE SPORTS EXTÉRIEURS — "Le terrain vous défie"
─────────────────────────────────────────
Hero 70vh : photo terrain extérieur (query : "outdoor sports court night tropical floodlights"). Titre Playfair 64px : "Sports Extérieurs".

Deux sections distinctes sur la même page, séparées par un séparateur graphique (ligne or fine + Playfair 100px or centré très opaque comme ornement).

TENNIS
Sous-titre Playfair 40px : "Tennis". Description du terrain, pratique libre ou encadrée.
GALERIE PHOTOS (3 à 4 images) :
"tennis court night lights outdoor tropical", "tennis racket balls court surface", "tennis player serve outdoor evening", "tennis court aerial view lines".
Tarif [À CONFIRMER]. Contact icône Phone + numéro [À CONFIRMER]. Aucune réservation en ligne.

BASKETBALL
Sous-titre Playfair 40px : "Basketball". Description du terrain.
GALERIE PHOTOS (3 à 4 images) :
"outdoor basketball court evening flood lights", "basketball hoop net close up night", "basketball players game outdoor tropical", "basketball court asphalt lines aerial".
Tarif [À CONFIRMER]. Contact icône Phone + numéro [À CONFIRMER]. Aucune réservation en ligne.

───────────────────────────────────────── 8. PAGE RESTAURATION — "Trois tables, un seul horizon"
─────────────────────────────────────────
Hero 60vh : photo restaurant (query : "tropical restaurant terrace night warm lights table dinner"). Titre Playfair 56px : "Restauration".

Navigation interne par onglets fixes en haut de page (sticky, fond #0C1018 backdrop-blur 12px, DM Sans 13px MAJUSCULES, onglet actif : ligne dorée scaleX 1 en bas + texte ivoire, onglet inactif : texte opacité 0.5). 3 onglets :

- TROPICANA
- [NOM RESTAURANT 2 — À CONFIRMER]
- [NOM RESTAURANT 3 — À CONFIRMER]

Changer d'onglet : cross-fade du contenu (opacity 0 → 1, 350ms) + remplacement de la photo hero de section.

─── ONGLET TROPICANA ───
Photo hero de section (query : "tropical outdoor restaurant terrace lounge night"). Playfair 40px : "Tropicana". Accroche DM Sans 16px. Horaires : fermé le lundi. Contact département : icône Phone + numéro [À CONFIRMER].

Menu avec catégories (accordéons ou sections scrollables : Entrées / Plats / Pizzas / Desserts / Boissons). Chaque plat :

- PHOTO DU PLAT obligatoire (query Unsplash : "pizza wood fire neapolitan" / "pasta italian restaurant" / "grilled fish tropical restaurant" selon le plat)
- Taille photo : 280x200px desktop, arrondie radius 6px, object-fit cover
- Nom Playfair 18px + description DM Sans 14px opacité 0.75 + prix DM Sans 16px or [À CONFIRMER] + bouton "Ajouter" icône Plus lucide 16px

─── ONGLET RESTAURANT 2 ───
Même structure. Photo hero (query : "elegant african restaurant dinner modern interior night"). Contact icône Phone + numéro [À CONFIRMER]. Menu [À CONFIRMER PAR LE CLIENT].

─── ONGLET RESTAURANT 3 ───
Même structure. Photo hero (query : "restaurant table candlelight warm luxury dinner"). Contact icône Phone + numéro [À CONFIRMER]. Menu [À CONFIRMER PAR LE CLIENT].

─── SÉLECTION DU RESTAURANT AU MOMENT DE LA COMMANDE ───
Le panier de commande (voir section dédiée ci-dessous) gère le routage WhatsApp par restaurant. Chaque restaurant a son propre numéro WhatsApp [À CONFIRMER PAR LE CLIENT]. Au moment de l'ouverture du tiroir panier, si des articles de plusieurs restaurants sont présents, une alerte douce s'affiche : "Vous avez des articles de [Restaurant X]. Finaliser cette commande avant d'en démarrer une nouvelle." Le panier est lié à l'onglet actif.

Si le visiteur navigue vers un autre onglet avec un panier non vide : modal de confirmation "Vider le panier et changer de restaurant ?" avec deux boutons : "Continuer ma commande" / "Changer de restaurant".

───────────────────────────────────────── 9. PAGE TARIFS — "Transparent comme l'eau"
─────────────────────────────────────────
Hero 40vh fond #182030. Titre Playfair 56px : "Tarifs".

Grille 2 colonnes desktop / 1 mobile de cards :

- Fond #182030, bordure 1px #C8A84B, border-radius 6px
- Icône lucide 32px ivoire + nom Playfair 22px + tarif adulte Playfair 32px or + tarif enfant DM Sans 14px + modalité DM Sans 11px MAJUSCULES

Cards : Piscine (6 000 FCFA adulte / enfant À CONFIRMER, badge "Abonnement") · Bowling (À CONFIRMER) · Spa / Massage / Jacuzzi (À CONFIRMER) · Gym (À CONFIRMER, badge "Abonnement") · Tennis (À CONFIRMER) · Basket (À CONFIRMER) · Restaurants : lien "Voir les menus" ArrowRight.

Note bas : "Tarifs indicatifs. Contact pour groupes ou événementiel."

───────────────────────────────────────── 10. PAGE CONTACT & À PROPOS — "Trouvez-nous"
─────────────────────────────────────────
Section deux colonnes : texte éditorial Playfair 40px + paragraphe historique du complexe / photo façade ou accueil.

Section informations fond #182030 :

- Icône MapPin + "Rue 243 Tot Ancien BSL, Résidence du Bénin (quartier La Caisse), Lomé, Togo"
- Icône Phone + "Accueil : (+228) 92 92 18 89"
- Icône Clock + "Lundi – Samedi : 07h00 – 23h00 · Dimanche : Fermé"
- Icône Clock + "Bowling : Mardi – Dimanche : 16h00 – 00h00"
- Icône MessageCircle + lien WhatsApp : https://wa.me/22892921889

Google Maps iframe embed centré sur Rue 243 Tot Ancien BSL, Résidence du Bénin, Lomé, Togo. Style carte sombre (JSON dark map style). Révélation par clip-path au scroll.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— PANIER DE COMMANDE —
(Actif sur la page Restauration uniquement · Zéro backend · Zéro paiement)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Le panier est lié au restaurant actuellement sélectionné (onglet actif). Chaque restaurant a son propre numéro WhatsApp [À CONFIRMER PAR LE CLIENT — 3 numéros distincts à fournir].

Déclencheur d'ajout :
Bouton "Ajouter" sur chaque plat — icône Plus 16px. Au clic : animation scale spring (1 → 1.2 → 1, 250ms), badge panier incrémente avec bounce.

Icône flottante :
Fixed bas-droite, fond #C8A84B, icône ShoppingCart 22px couleur #0C1018, border-radius 50%, 52px, z-index 9999. Badge compteur animé. Au clic : ouvre le tiroir.

Tiroir latéral :
translateX(100%) → translateX(0), overlay #0C1018 60% derrière. Largeur 400px desktop / 100vw mobile. Fond #182030, border-left 1px #C8A84B.

En-tête du tiroir :
Nom du restaurant actif en Playfair 20px + icône X fermeture. Sous le nom, en DM Sans 11px MAJUSCULES turquoise : "COMMANDE EN COURS".

Liste des articles : nom DM Sans 16px + photo miniature 48x48px border-radius 4px + quantité + prix FCFA + icône Trash2.
Contrôle quantités : Minus / Plus lucide, suppression auto si quantité = 0.
Sous-total Playfair 28px or.
Champ Prénom (input) + Heure souhaitée (input).

Bouton CTA "Commander via WhatsApp" fond #128C7E + icône MessageCircle. Ouvre wa.me/[NUMÉRO DU RESTAURANT ACTIF]?text=[message encodé].

Message WhatsApp généré :
Bonjour Harmonie Signature
Commande au [NOM RESTAURANT ACTIF] :

[Plat] x[quantité] — [prix] FCFA
Sous-total : [total] FCFA
Prénom : [prénom]
Heure souhaitée : [heure]

Logique de routage :

- Onglet Tropicana actif → numéro WhatsApp Tropicana [À CONFIRMER]
- Onglet Restaurant 2 actif → numéro WhatsApp Restaurant 2 [À CONFIRMER]
- Onglet Restaurant 3 actif → numéro WhatsApp Restaurant 3 [À CONFIRMER]

Persistance : localStorage par clé de restaurant (panier_tropicana, panier_r2, panier_r3). État vide : icône ShoppingCart 48px opacité 0.25 + "Votre sélection est vide" DM Sans 14px centré. Devise : FCFA partout.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— ANIMATIONS SYSTÈME —
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Entrées scroll : translateY(28px) + opacity 0 → 0 + opacity 1. Durée 550ms, cubic-bezier(0.25, 0.46, 0.45, 0.94). Stagger 80ms. IntersectionObserver threshold 0.15.

Transitions entre pages : clip-path polygon(0 0, 100% 0, 100% 0, 0 0) → polygon(0 0, 100% 0, 100% 100%, 0 100%), 380ms ease-in sortie / ease-out entrée.

Micro-interactions :

- CTA dorés : scale(1.03) + box-shadow 0 8px 30px rgba(200,168,75,0.4), 180ms ease-out
- Cards mosaïque : image scale(1.04), 380ms ease-out
- Liens nav : scaleX 0 → 1 origin left, 200ms ease-out
- Onglets restauration : sliding indicator doré translateX animé entre onglets
- Photos menu avec image : scale(1.03) au hover, 300ms
- Cellules galerie : scale(1.04) au hover + overlay légèrement réduit pour révéler la photo

Curseur custom (desktop) :
Cercle 14px, bordure 1.5px solid #C8A84B, opacité 65%, lerp 0.10. Sur images et CTA : scale 38px + opacité 100%. Sur texte : trait vertical fin.

Lightbox galerie :
Fond #0C1018 à 96% opacity, animation fade-in 250ms. Image centrée max 90vw / 85vh. Flèches ChevronLeft / ChevronRight 32px ivoire, hover scale(1.2). Icône X fermeture haut-droite. Swipe mobile gauche/droite. Touche Escape pour fermer.

Interdit : aucun bounce élastique, aucun glitch, aucune transition flash.

— IMAGES —

Traitement global : filter: saturate(0.88) contrast(1.06). Grain via pseudo-élément ::after SVG feTurbulence opacité 4%.

Queries Unsplash principales :

- Hero : "luxury swimming pool tropical resort night lights reflection"
- Vidéo fallback : "luxury resort evening pool panorama cinematic"
- Mosaïque piscine : "olympic pool blue water aerial"
- Mosaïque bowling : "bowling alley dark neon lane"
- Mosaïque spa : "spa jacuzzi warm candle light"
- Mosaïque gym : "gym fitness dark equipment"
- Mosaïque tennis : "tennis court night outdoor floodlights"
- Mosaïque basket : "basketball court evening lights"
- Mosaïque Tropicana : "tropical restaurant outdoor terrace night"
- Hero réservation : "luxury resort pool night reflection lights"

— RESPONSIVE MOBILE —

Navigation : hamburger → overlay Playfair 42px italic, "Départements" accordéon avec liste des pages.
Mosaïque accueil : carousel swipeable horizontal (1.2 cards visibles).
Galeries départements : grid 2 colonnes sur mobile.
Restauration : onglets sticky en haut, menu 1 colonne, photos plats 100% largeur.
Panier : bouton bas full-width, tiroir plein écran.
Vidéo accueil : 70vh minimum sur mobile, même priorité visuelle.
Typographie mobile : hero 52px, sections 32px, body 15px.
Touch targets minimum 48px. Active states : scale(0.97) + opacity(0.82), 100ms.

— FOOTER —

Fond #060809. 3 colonnes desktop / empilé mobile.
Col 1 : Logotype Playfair + "Détente complète à Lomé" DM Sans 13px opacité 0.6 + icônes réseaux react-icons/fa 20px ivoire, hover or, gap 16px.
Col 2 : Navigation rapide DM Sans 13px — Accueil · Départements · Restauration · Spa & Wellness · Tarifs · Contact. Note : "Départements" est un lien unique vers la page hub — pas de liste de tous les départements dans le footer.
Col 3 :

- Icône MapPin + "Rue 243 Tot Ancien BSL, Résidence du Bénin, Lomé, Togo"
- Icône Phone + "(+228) 92 92 18 89"
- Icône Clock + "Lun – Sam : 07h00 – 23h00 · Dim : Fermé"
- Icône Clock + "Bowling : Mar – Dim : 16h00 – 00h00"

Animation : chaque colonne translateY(20px) → 0, stagger 120ms.
Copyright : "© 2025 Harmonie Signature · Tous droits réservés · Lomé, Togo" DM Sans 11px opacité 0.4, border-top 1px rgba(255,255,255,0.07).
Aucun emoji dans le footer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
— DONNÉES VÉRIFIÉES —
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Téléphone / WhatsApp général : (+228) 92 92 18 89 — wa.me/22892921889
Adresse : Rue 243 Tot Ancien BSL, Résidence du Bénin (La Caisse), Lomé, Togo
Horaires : Lundi – Samedi 07h00 – 23h00 · Dimanche fermé
Horaires bowling : Mardi – Dimanche 16h00 – 00h00
Tarif piscine adulte : 6 000 FCFA / séance
Restaurant fermé le lundi
Réseaux : facebook.com/harmoniesignature · TikTok @harmoniesignature · X @HarmonieSigna

Données manquantes: Valeurs plausibles
Vidéo accueil: Vidéo Pexels libre
Étendue v1: Tout d'un coup

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROMPT COMPLÉMENTAIRE — HARMONIE SIGNATURE

Panier contextuel · Email réservation · Dashboard Admin

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

— MODIFICATION 1 : PANIER VISIBLE UNIQUEMENT SUR LA PAGE RESTAURATION —

L'icône flottante ShoppingCart (position fixed bas-droite) ne doit être visible

que lorsque le visiteur est sur la route /restauration.

Comportement :

- Sur toutes les autres pages (/accueil, /piscine, /bowling, /spa, /gym,

  /sports, /tarifs, /contact, /departements) : le bouton flottant du panier

  est display:none ou visibility:hidden + pointer-events:none.

- Sur /restauration uniquement : le bouton est visible et interactif.

- La transition entre pages doit être propre — pas de flash du panier

  lors du changement de route.

Implémentation React recommandée :

Utiliser useLocation() (React Router) ou l'équivalent du framework pour

détecter la route active. Conditionner le rendu du composant CartButton

à pathname === '/restauration' ou pathname.startsWith('/restauration').

Le tiroir (drawer) et l'overlay suivent la même logique — ils ne sont

montés dans le DOM que sur cette page.

— MODIFICATION 2 : RÉSERVATION SPA PAR EMAIL —

Le formulaire de réservation sur la page Spa & Wellness doit envoyer

une notification email directement à l'adresse du centre

[EMAIL DU CENTRE — À CONFIRMER PAR LE CLIENT] en plus du lien WhatsApp.

Technologie recommandée : Resend (resend.com) — SDK léger,

gratuit jusqu'à 3 000 emails/mois, intégration simple côté Lovable.

Alternative : EmailJS si pas d'accès backend — entièrement côté client.

Flux complet à implémenter :

1. Le visiteur remplit le formulaire (soin / date / heure / nom / téléphone / message).

2. Il clique sur "Confirmer ma réservation".

3. Deux actions se déclenchent simultanément :

   a. L'email de réservation est envoyé à l'adresse du centre.

   b. Le lien WhatsApp pré-formaté s'ouvre dans un nouvel onglet.

4. Un message de confirmation s'affiche dans le formulaire :

   "Votre demande a été envoyée. Notre équipe vous confirme sous 2h."

   (Playfair italic 18px, couleur or #C8A84B, fadeIn 300ms)

Format de l'email reçu par le centre :

───────────────────────────────────

Objet : Nouvelle demande de RDV Spa — [Prénom Nom] · [Date]

Nouvelle demande de réservation reçue sur harmoniesignature.com

Soin demandé : [soin]

Date souhaitée : [date]

Heure souhaitée: [heure]

Nom : [prénom nom]

Téléphone : [téléphone]

Message : [message ou "Aucun message"]

Reçu le [date et heure automatiques]

───────────────────────────────────

En cas d'échec d'envoi email (erreur réseau / quota dépassé) :

Afficher un message d'erreur doux : "L'envoi a échoué. Vous pouvez

nous contacter directement via WhatsApp." + bouton WhatsApp de secours.

Ne jamais bloquer le visiteur — le lien WhatsApp fonctionne toujours.

Variables à configurer dans l'environnement Lovable (.env) :

RESEND_API_KEY=[clé API Resend — à créer sur resend.com]

CONTACT_EMAIL=[adresse email du centre — à confirmer]

— MODIFICATION 3 : DASHBOARD ADMINISTRATEUR —

─── ACCÈS ───

Route privée : /admin-hs-2025 (URL non listée, non indexée, pas de lien

visible sur le site public).

À l'accès direct : écran de connexion avant tout contenu.

Page de connexion :

Fond #0C1018 plein écran. Logotype "HARMONIE SIGNATURE" Playfair 24px centré

- sous-titre DM Sans 11px MAJUSCULES "ESPACE ADMINISTRATION". Formulaire centré

(largeur max 380px) :

- Champ mot de passe unique (pas de nom d'utilisateur — URL secrète = identifiant)

- Input type password, fond #182030, border-bottom 1px #C8A84B, DM Sans 15px ivoire

- Bouton "Accéder" fond #C8A84B, texte #0C1018, width 100%, height 48px

- Mot de passe par défaut : "HS2025admin" (à changer côté client)

- En cas d'erreur : message "Mot de passe incorrect" DM Sans 13px rouge doux

  #E05A5A, shake animation (translateX -4px → 4px → 0, 300ms)

- Pas de récupération de mot de passe — contact technique direct

Session : stockée en sessionStorage (expiration à la fermeture du navigateur).

Si le visiteur tente d'accéder à /admin-hs-2025/\* sans être connecté :

redirection automatique vers /admin-hs-2025 (login).

─── DESIGN DU DASHBOARD ───

Fond général : #0C1018. Sidebar gauche fixe fond #060809 largeur 240px.

Zone de contenu : fond #0C1018 avec padding 32px.

Sidebar :

Logotype "HS" Playfair 22px or + "Admin" DM Sans 11px MAJUSCULES opacité 0.5.

Séparateur 1px #182030. Navigation icônes + labels DM Sans 13px :

- icône LayoutDashboard : Vue générale

- icône Building2 : Départements

- icône UtensilsCrossed : Restauration

- icône Video : Médias

- icône Settings : Paramètres

Lien actif : fond #182030, bordure-left 2px #C8A84B, texte ivoire.

Lien inactif : texte opacité 0.5, hover opacité 0.85.

En bas de sidebar : icône LogOut 18px + "Déconnexion" DM Sans 12px opacité 0.5.

Header zone contenu :

Titre de la section active Playfair 28px + breadcrumb DM Sans 12px opacité 0.5.

Badge doré discret en haut à droite : "Harmonie Signature · Admin".

─── SECTION : VUE GÉNÉRALE ───

4 cards métriques fond #182030 bordure fine #C8A84B opacité 0.3, grid 2×2 :

- Nombre de départements actifs

- Nombre de restaurants gérés

- Dernière modification (date/heure)

- Statut du site (En ligne — icône CheckCircle vert doux)

Sous les cards : résumé des informations de contact actuelles (lecture seule).

─── SECTION : DÉPARTEMENTS ───

Liste de tous les départements avec pour chacun un accordéon éditable :

- Piscine / Bowling / Spa & Jacuzzi / Gym & Fitness / Tennis / Basket

Chaque accordéon (fond #182030, border-radius 6px) contient :

- Nom du département (input texte)

- Numéro de contact direct (input tel)

- Horaires d'ouverture (input texte libre)

- Tarif adulte (input texte + devise FCFA)

- Tarif enfant si applicable (input texte)

- Description courte (textarea 3 lignes)

- Statut : Ouvert / Fermé (toggle switch — fond #C8A84B quand actif)

- Bouton "Enregistrer les modifications" par département, fond #C8A84B,

  texte #0C1018, hauteur 40px, width auto, icône Save 16px

─── SECTION : RESTAURATION ───

Sous-onglets internes (DM Sans 12px MAJUSCULES) :

TROPICANA · RESTAURANT 2 · RESTAURANT 3

Pour chaque restaurant :

- Nom du restaurant (input)

- Numéro WhatsApp de réception des commandes (input tel)

  Note sous le champ : "Ce numéro reçoit les commandes WhatsApp du menu en ligne."

- Email de réception des commandes (input email, optionnel)

- Horaires (input)

- Statut Ouvert/Fermé (toggle)

- Section "Gérer le menu" :

  Liste des plats existants avec par plat :

  nom / catégorie / prix / bouton Supprimer (icône Trash2 rouge doux au hover)

  Formulaire "Ajouter un plat" :
  - Nom du plat (input)

  - Catégorie (select : Entrée / Plat / Pizza / Dessert / Boisson)

  - Description (textarea 2 lignes)

  - Prix en FCFA (input number)

  - URL photo du plat (input url) + aperçu 60x60px si URL valide

  - Bouton "Ajouter au menu" icône Plus

─── SECTION : MÉDIAS ───

Trois zones de gestion :

VIDÉO D'ACCUEIL :

Label DM Sans 12px MAJUSCULES + champ URL (input url, placeholder

"https://youtube.com/embed/..."). Bouton "Mettre à jour la vidéo" fond #C8A84B.

Aperçu : iframe 16:9 en dessous si URL valide, hauteur 200px, border-radius 6px.

Note : "Utilisez l'URL d'intégration YouTube (embed) ou un lien MP4 direct."

IMAGES PAR DÉPARTEMENT :

Accordéon par département. Dans chaque accordéon :

Liste des URLs d'images actuelles avec miniature 80x60px + bouton Trash2 pour supprimer.

Champ "Ajouter une image" : input URL + bouton "Ajouter" icône Plus.

Compteur DM Sans 11px opacité 0.5 : "[N] / 8 images max."

EMAIL DE RÉSERVATION SPA :

Champ input email : adresse de réception des demandes de RDV spa.

Bouton "Enregistrer" fond #C8A84B.

Note : "Cette adresse reçoit chaque nouvelle demande de réservation spa."

─── SECTION : PARAMÈTRES ───

Changer le mot de passe admin :

- Champ "Mot de passe actuel" (input password)

- Champ "Nouveau mot de passe" (input password)

- Champ "Confirmer le nouveau mot de passe" (input password)

- Bouton "Mettre à jour" fond #C8A84B

Informations générales du site :

- Numéro WhatsApp principal (input tel)

- Adresse du complexe (input texte)

- Horaires généraux d'ouverture (input texte)

- Horaires spécifiques bowling (input texte)

- Bouton "Enregistrer" fond #C8A84B icône Save

─── COMPORTEMENT GLOBAL DU DASHBOARD ───

Persistance : toutes les modifications sont sauvegardées en localStorage

(clés préfixées "hs*admin*"). Le site public lit ces mêmes clés pour afficher

les informations à jour (numéros, horaires, vidéo, images, menus).

Feedback sur sauvegarde : toast notification bas-droite (fond #182030 bordure or,

DM Sans 13px, icône CheckCircle vert 16px) :

"Modifications enregistrées" fadeIn 200ms → pause 2s → fadeOut 300ms.

Le dashboard n'est jamais indexé par les moteurs de recherche :

Ajouter <meta name="robots" content="noindex, nofollow"> sur toutes

les routes /admin-hs-2025/\*.

Mobile admin : responsive — sidebar devient bottom-navigation fixe

(icônes uniquement, 5 onglets) avec labels au tap.
