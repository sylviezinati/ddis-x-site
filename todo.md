# DDis-X - TODO

## Configuration initiale
- [x] Configurer les polices Google Fonts (Playfair Display pour titres, Inter Tight pour textes)
- [x] Définir les variables CSS pour la charte graphique (couleurs, typographie)
- [x] Configurer le thème sombre comme défaut

## Sections du site
- [x] Section 1 - Hero avec titre principal et CTA animés
- [x] Section 2 - Label "Infrastructure IA invisible"
- [x] Section 3 - Pour qui est ce système (3 cartes avec effets)
- [x] Section 4 - Ce qu'elles vivent aujourd'hui
- [x] Section 5 - Transformation (vision dans 90 jours)
- [x] Section 6 - Le coût de l'inaction
- [x] Section 7 - Ce qui change concrètement
- [x] Section 8 - Les 4 piliers (cartes avec icônes et effets 3D)
- [x] Section 9 - Comment ça fonctionne (3 étapes + engagement)
- [x] Section 10 - Accompagnement sélectif
- [x] Section 11 - Données & validation
- [x] Section 12 - FAQ (accordéon)
- [x] Section 13 - CTA final de clôture
- [x] Footer avec mentions légales

## Effets visuels et animations
- [x] Overlay grille subtile (points) sur fond noir
- [x] Cartes avec relief et ombres douces
- [x] CTA principal avec outline animé (rotation)
- [x] CTA secondaire avec gradient or rosé
- [x] Animations au scroll (fade-in, slide-up)
- [x] Effets hover sur les cartes
- [x] Icônes circulaires avec effet 3D

## Intégrations
- [x] Lien Calendly pour le diagnostic gratuit
- [ ] Formulaire de contact
- [ ] Google Analytics 4
- [ ] Meta Pixel pour tracking CTA
- [ ] Bannière de consentement cookies

## Responsive
- [ ] Optimisation mobile (CTA max 300px, réduction texte -30%)
- [ ] Test sur différentes tailles d'écran
- [ ] Navigation mobile

## Finitions
- [ ] SEO (meta tags, descriptions)
- [ ] Favicon
- [ ] Performance (optimisation images, lazy loading)


## Modifications demandées
- [x] Modifier le texte du badge Hero : "• Infrastructure IA invisible — pour instituts beauté premium •"
- [x] Supprimer le bouton secondaire "Diagnostic gratuit (30 min)" dans le Hero

- [x] Retirer les points • du texte du badge, garder uniquement le point coloré animé

- [x] Optimiser la section "Ce qu'elles vivent aujourd'hui" : retirer "Aujourd'hui :", réduire espacement, améliorer mise en page

- [x] Supprimer la section Label (barre "Infrastructure IA invisible")

- [x] Ajouter motif de points en arrière-plan de la section "Ce qu'elles vivent aujourd'hui" pour effet de relief

- [x] Corriger et rendre visible le motif de points en arrière-plan de la section 4 (augmenter opacité et taille)

- [x] Modifier le titre de la section 4 et ajouter le nouveau sous-texte avec mise en forme

- [x] Ajouter le texte sur l'inaction sous "3 mois d'attente" avec typographie et espacements spécifiques

- [x] Supprimer la phrase "Et un épuisement qui s'installe." de la section 6

- [x] Modifier le CTA "Diagnostic gratuit (30 min)" en "Réserver un diagnostic"

- [x] Ajouter un background avec motif de points (6px, repeat, opacity 0.08) uniquement sur la section "Vous faites tourner le business"

- [x] Corriger l'affichage du dot-pattern : s'assurer qu'il est visible sur un div dédié en absolute

- [x] Créer le composant carte ddx-dots-card avec pattern de points en CSS pur (local uniquement)
- [x] Vérifier et supprimer tout pattern global sur body/page

- [x] Modifier la section "Vous faites tourner le business" : rectangle plus large, points plus denses (10px), opacité 0.9 centre et 0.7 bords

- [x] Agrandir le rectangle premium pour le rendre plus imposant et plus rectangulaire (moins carré)

- [x] Étirer le rectangle horizontalement (format panoramique) : plus large de gauche à droite, moins haut verticalement

- [x] Restructurer la section "Vous faites tourner le business" avec bande centrée très large (1400px max, 96vw) et dynamic-card 100% largeur

- [x] Transformer la section "Imaginez dans 90 jours" avec 4 bulles organiques en quinconce, icônes vectorielles et animation flottante

- [x] Ajuster les styles des bulles : border-radius 40px, padding 40px 48px, box-shadow inset, icônes 28px, animation plus subtile

- [x] Modifier la typographie de la phrase "Votre cliente ne revient pas que pour un soin" : Neue Montreal Regular, #C9B2A6, 22px/18px, line-height 1.3

- [x] Améliorer section "Imaginez dans 90 jours" : hauteur max 180px, espacement vertical 48px, hover premium, animation floating sur icônes

- [x] Ajouter effet halo premium autour des icônes avec drop-shadow (8px normal, 14px hover)

- [x] Ajouter animation d'apparition au scroll pour les bulles (opacity 0 → 1, translateY 20px → 0, transition 0.7s)

- [x] Ajuster espacement et alignement des 4 bulles : max-width 1100px, gap 32px vertical / 48px horizontal, centrage parfait

- [x] Transformer la section "Comment ça fonctionne" en timeline verticale premium avec ligne or rosé, 3 étapes alternées, animation fade+slide au scroll, design minimaliste luxe

- [x] Aligner les numéros des étapes 1 et 3 le long de la ligne verticale, placer l'icône de l'étape 3 à la fin de la barre, équilibrer les distances visuelles

- [x] Appliquer le même fond avec dot-pattern à la section "Accompagnement sur-mesure" (style identique à section "Vous faites tourner le business")

- [x] Élargir le rectangle premium "Accompagnement sur-mesure" sur toute la largeur et inclure le titre + bouton CTA à l'intérieur

- [x] Agrandir l'espace autour du bouton CTA pour que l'ombre tournante soit visible
- [x] Augmenter la visibilité des points (background-size 10px, opacity 0.9 centre, 0.7 bords)

- [x] Appliquer le style "ghost" à la section FAQ : bordure invisible par défaut, révélation au survol/focus/ouvert avec bordure or rosé et radial-gradient

- [x] Ajouter animation du chevron FAQ (rotation 180deg quand ouvert, opacité variable)
- [x] Ajouter fondu dégradé sous la FAQ (120px, gradient vers #0C0C0C)
- [x] Supprimer la question "Y a-t-il un engagement ?"

- [x] Supprimer le bouton "Voir si je suis éligible" du CTA final
- [x] Déplacer le texte "Le diagnostic est gratuit..." en dessous du bouton CTA avec taille plus petite

- [x] Ajuster le padding et border-radius de la section "Vous faites tourner le business"
- [x] Augmenter la hauteur de la section "Accompagnement sur-mesure" à 650px
- [x] Simplifier le texte "Si votre profil correspond..." pour plus de concision
- [x] Supprimer le padding-top en conflit avec la bordure dans SelectiveData

- [x] Appliquer les styles CSS personnalisés à la section "Accompagnement sur-mesure" (typographie h2 56px, paragraphes 20px, espacements, opacité hr)

- [x] Modifier le style du bouton CTA de la section Accompagnement : gradient linéaire (#e7c4a4 → #d6a47a), couleur texte #111, padding 14px 34px, font-size 18px, border-radius 40px
- [x] Ajouter effet hover au bouton : translateY(-3px) et box-shadow or rosé
- [x] Restructurer la mise en page : titre centré, texte et CTA alignés à gauche dans container 50-60% largeur
- [x] Ajouter styles responsive mobile pour centrer texte et CTA

- [x] Créer conteneur copy-wrap centré (max-width 820px) sous le titre
- [x] Aligner texte à gauche dans copy-wrap, interlignage 1.7, espace 20-24px entre paragraphes
- [x] Ajuster typographie : titre 46-56px desktop/32-36px mobile, premier paragraphe 20-22px, reste 18px/16px
- [x] Appliquer couleurs : texte normal #E9E9E9, mots clés #E5B694 avec classe .emph
- [x] Modifier bouton CTA : gradient rose-or → ivoire, texte #111, border-radius 9999px, padding 14-16px 24-28px, centré avec margin-top 28-36px
- [x] Ajouter effet hover : luminosité + ombre douce

- [x] Modifier UNIQUEMENT les icônes de la section "Imaginez : dans 90 jours…" : ajouter rond 64px avec gradient radial (#EAC7B1 → #D3A98F), border 2px #EAC7B1, icône blanche 28px, animation floatSide horizontale 3px sur 3s
