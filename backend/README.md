# AGRO — Backend

**API et gestion des données de l'application AGRO**

AGRO est une plateforme numérique développée dans le cadre d'un projet de soutenance de Licence en Génie Informatique à l'Institut Supérieur de Technologie (IST) de Mamou, en Guinée.

Ce dépôt contient la partie **Backend** de l'application AGRO. Elle assure le traitement des données, la gestion des règles métier, l'authentification des utilisateurs et la communication avec la base de données.

## Technologies utilisées

- **Node.js** : environnement d'exécution JavaScript.
- **NestJS** : framework utilisé pour développer le backend.
- **TypeScript** : langage utilisé pour structurer et sécuriser le développement.
- **Prisma ORM** : outil de communication entre le backend et la base de données.
- **PostgreSQL** : système de gestion de base de données relationnelle.

Le backend expose une API REST utilisée par le frontend React.

## Fonctionnalités prévues

Le backend prendra progressivement en charge les fonctionnalités principales d'AGRO :

1. **Gestion des utilisateurs** : inscription, connexion, profils et rôles.
2. **Location d'engins agricoles** : gestion des équipements, demandes de réservation et suivi des locations.
3. **Troc agricole** : gestion des offres de produits agricoles et des demandes d'échange.
4. **Conseils agricoles personnalisés** : gestion des informations et des recommandations destinées aux agriculteurs.

D'autres fonctionnalités pourront être ajoutées progressivement selon les priorités du projet.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/)
- npm (installé avec Node.js)
- [PostgreSQL](https://www.postgresql.org/)
- Git
- Un éditeur de code, par exemple Visual Studio Code.

## Installation

### 1. Cloner le dépôt principal

```bash
git clone URL_DU_DEPOT
```

Remplacez `URL_DU_DEPOT` par l'adresse réelle du dépôt GitHub.

### 2. Accéder au backend

```bash
cd AGRO/backend
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Configurer PostgreSQL

Créer une base de données locale nommée :

```text
agro_db
```

Chaque développeur doit disposer de sa propre base de données locale.

### 5. Configurer les variables d'environnement

Créer un fichier `.env` à la racine du dossier `backend`.

Exemple :

```env
DATABASE_URL="postgresql://postgres:motdepasse@localhost:5432/agro_db"
```

Remplacer `motdepasse` par le mot de passe PostgreSQL configuré sur votre ordinateur.

**Important :** le fichier `.env` contient des informations sensibles. Il ne doit jamais être envoyé sur GitHub.

Utilisez le fichier `.env.example` comme modèle de configuration.

### 6. Configurer Prisma

Après avoir installé les dépendances et configuré la connexion à PostgreSQL, générer le client Prisma et appliquer les migrations disponibles.

Les commandes exactes seront documentées selon la version de Prisma retenue par l'équipe.

### 7. Démarrer le serveur

```bash
npm run start:dev
```

Le serveur NestJS démarre en mode développement.

L'adresse locale et le port utilisés seront définis dans la configuration du backend.

## Structure du projet

La structure du backend évoluera progressivement selon les fonctionnalités développées.

```text
backend/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── auth/
│   ├── users/
│   ├── app.module.ts
│   └── main.ts
│
├── test/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── nest-cli.json
└── README.md
```

**Description des principaux éléments :**

- `prisma/` : contient le schéma de la base de données et les migrations.
- `src/auth/` : gestion de l'authentification.
- `src/users/` : gestion des utilisateurs.
- `app.module.ts` : module principal de l'application NestJS.
- `main.ts` : point d'entrée du serveur.
- `.env` : variables d'environnement locales.
- `.env.example` : modèle des variables d'environnement nécessaires.

Cette structure constitue une organisation initiale qui sera complétée au fur et à mesure du développement.

## Base de données

AGRO utilise PostgreSQL pour stocker les données de l'application.

Prisma ORM assure la communication entre NestJS et PostgreSQL.

Les modèles de données sont définis dans le fichier `prisma/schema.prisma`.

Les migrations permettent de créer et de faire évoluer progressivement la structure de la base de données.

Chaque membre de l'équipe travaille avec sa propre base de données locale.

## Communication avec le frontend

Le backend expose des endpoints REST permettant au frontend React d'effectuer des opérations sur les données.

Les échanges se font principalement au format JSON via les méthodes HTTP :

- `GET` : récupérer des données.
- `POST` : créer des données.
- `PUT` : modifier des données.
- `PATCH` : modifier partiellement des données.
- `DELETE` : supprimer des données.

Le backend est responsable de la validation des données, de l'application des règles métier et de la protection des ressources.

## Tests

Les tests permettent de vérifier le bon fonctionnement des différentes parties du backend.

Les outils de test pourront notamment inclure :

- **Postman** : tester les endpoints de l'API.
- **Jest** : exécuter les tests automatisés.
- **Prisma** : vérifier les opérations sur la base de données.

## Collaboration et contribution

AGRO est développé par une équipe de cinq étudiants.

Pour contribuer au backend :

1. Récupérer la dernière version du dépôt.
2. Créer une branche pour son travail.
3. Effectuer les modifications nécessaires.
4. Tester les changements.
5. Enregistrer les modifications avec un commit.
6. Envoyer sa branche sur GitHub.
7. Proposer une Pull Request pour intégration.

Les modifications doivent respecter l'architecture et les conventions définies par l'équipe.

## Sécurité

Le backend doit respecter les bonnes pratiques suivantes :

- Ne jamais stocker les mots de passe en clair.
- Utiliser des requêtes sécurisées.
- Valider les données reçues par l'API.
- Protéger les routes selon les rôles et permissions.
- Ne jamais publier les secrets ou les variables d'environnement.
- Gérer correctement les erreurs.

## Établissement

**Institut Supérieur de Technologie de Mamou (IST)**  
Licence en Génie Informatique  
Année universitaire : 2026–2027

**Projet : AGRO**  
**Échéance de soutenance : Mai 2027**