# AGRO — Frontend

**Application de gestion et de services agricoles**

AGRO est une plateforme numérique conçue dans le cadre d'un projet de soutenance de Licence en Génie Informatique à l'Institut Supérieur de Technologie (IST) de Mamou, en Guinée.

Son objectif est de faciliter l'accès aux services agricoles, de favoriser les échanges entre les acteurs du secteur et de proposer des outils numériques adaptés aux besoins des agriculteurs.

Ce dépôt contient la partie **Frontend** de l'application AGRO.

## Technologies utilisées

- **React** : bibliothèque JavaScript pour construire les interfaces utilisateur.
- **JavaScript** : langage de développement frontend.
- **HTML5 / CSS3** : structure et mise en forme des interfaces.
- **Vite** : outil de développement et de compilation du projet.

Le frontend communiquera avec le backend à travers une API REST développée avec NestJS.

## Fonctionnalités prévues

Le projet AGRO prévoit plusieurs fonctionnalités, notamment :

1. **Location d'engins agricoles** : consulter les équipements disponibles et effectuer des demandes de réservation.
2. **Troc agricole** : proposer et rechercher des produits agricoles à échanger.
3. **Conseils agricoles personnalisés** : accéder à des conseils adaptés aux besoins des agriculteurs.

D'autres fonctionnalités pourront être intégrées progressivement selon les priorités du projet.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/)
- npm (installé avec Node.js)
- Git
- Un éditeur de code, par exemple Visual Studio Code.

## Installation

### 1. Cloner le dépôt principal

```bash
git clone URL_DU_DEPOT
```

Remplacez `URL_DU_DEPOT` par l'adresse réelle du dépôt GitHub.

### 2. Accéder au frontend

```bash
cd AGRO/frontend
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Démarrer le serveur de développement

```bash
npm run dev
```

Vite affichera une adresse locale dans le terminal. Ouvrez cette adresse dans votre navigateur pour consulter l'application.

## Structure du projet

La structure du frontend évoluera progressivement. Elle suivra notamment cette organisation :

```text
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

**Description des principaux dossiers :**

- `assets/` : images, icônes et ressources graphiques.
- `components/` : composants React réutilisables.
- `pages/` : pages de l'application.
- `services/` : fonctions permettant notamment de communiquer avec l'API backend.
- `App.jsx` : composant principal de l'application.
- `main.jsx` : point d'entrée de React.

Cette structure est une organisation cible ; les dossiers seront créés au fur et à mesure des besoins.

## Communication avec le backend

Le frontend AGRO communiquera avec une API REST développée avec NestJS.

Le backend sera responsable de la logique métier, de la validation des données, de l'authentification et des échanges avec la base de données PostgreSQL.

Le frontend sera responsable de l'affichage des informations et des interactions avec les utilisateurs.

## Collaboration et contribution

AGRO est développé par une équipe de cinq étudiants.

Pour contribuer au frontend :

1. Récupérer la dernière version du dépôt.
2. Créer une branche pour son travail.
3. Effectuer les modifications nécessaires.
4. Tester les changements.
5. Enregistrer les modifications avec un commit.
6. Envoyer sa branche sur GitHub.
7. Proposer une Pull Request pour intégration.

Les modifications doivent respecter les conventions de code et l'organisation définies par l'équipe.

## Établissement

**Institut Supérieur de Technologie de Mamou (IST)**  
Licence en Génie Informatique  
Année universitaire : 2026–2027

**Projet : AGRO**  
**Échéance de soutenance : Mai 2027**