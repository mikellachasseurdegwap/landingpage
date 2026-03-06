# MACFO Landing Page — Projet Tailwind CSS

## Présentation du projet

Ce projet consiste à reproduire une landing page e-commerce en utilisant **HTML et Tailwind CSS v4**.
Le but est de créer une page structurée et responsive tout en respectant les principes d’ergonomie vus en cours.

La page représente une marque fictive appelée **MACFO**. Elle contient une section principale (hero), une barre avec des services, et une section avec des produits.

---

# Structure du site

Pour organiser la page, j’ai utilisé une structure HTML sémantique :

* **header** : contient le logo et la navigation
* **nav** : menu du site
* **main** : partie principale de la page
* **section** : différentes parties du contenu
* **article** : cartes produits
* **footer** : informations en bas de page

Cette structure permet d’avoir un code plus clair et plus facile à comprendre.

---

# Ergonomie

## Hiérarchie visuelle

La hiérarchie visuelle est faite grâce :

* à un grand titre dans la section principale
* à un contraste entre le fond sombre et le texte
* à un bouton “Shop Now” visible

Cela aide l’utilisateur à comprendre rapidement le contenu.

## Charge cognitive

Pour éviter de trop charger la page :

* il n’y a pas trop d’éléments
* la navigation reste simple
* les sections sont bien espacées
* les produits sont organisés en grille

Cela permet de rendre la page plus facile à lire.

## Pattern de lecture

La page suit un **pattern de lecture en F**.
L’utilisateur regarde d’abord le titre principal, ensuite le bouton, puis les autres sections de la page.

## Call To Action

Le bouton **Shop Now** est le principal appel à l’action.
Il est placé dans la section principale et possède un bon contraste pour être visible.

---

# Accessibilité

Quelques règles d’accessibilité ont été appliquées :

* utilisation d’un HTML sémantique
* ajout d’attributs **alt** sur les images
* contraste correct entre le texte et le fond
* navigation possible avec le clavier

Ces éléments permettent d’améliorer l’accessibilité du site.

---

# Choix techniques

Le projet utilise **Tailwind CSS v4**.

Les choix techniques principaux sont :

* utilisation d’une couleur principale personnalisée
* utilisation du container Tailwind pour gérer les espacements
* création d’une grille responsive pour les produits
* utilisation des breakpoints (`md:`) pour adapter le design sur mobile et desktop

---

# Responsive Design

Le site a été pensé en **mobile-first**.

Sur mobile :

* le menu devient un menu burger
* les produits s’affichent en colonne

Sur écran plus large :

* la grille s’adapte
* les éléments prennent plus d’espace

---

# Difficultés rencontrées

Pendant le projet, certaines difficultés sont apparues :

* gérer le responsive correctement
* reproduire les espacements du design
* comprendre l’utilisation de Tailwind

Ces problèmes ont été résolus en testant plusieurs classes Tailwind et en ajustant la structure HTML.

---

# Conclusion

Ce projet m’a permis de pratiquer :

* l’intégration d’une landing page
* l’utilisation de Tailwind CSS
* les bases de l’ergonomie web
* le responsive design

Cela m’a aussi aidé à mieux comprendre l’organisation d’une page web.
