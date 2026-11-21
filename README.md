# 🌱 AGRO — Plateforme agricole numérique

**La technologie au service de l'agriculture africaine.**

AGRO est une plateforme numérique qui met en relation les acteurs du secteur agricole : agriculteurs, coopératives, propriétaires d'engins, fournisseurs d'intrants et ONG. Elle s'inspire du modèle « Uber des tracteurs » : location d'engins, troc, vente d'intrants, conseils, communauté et services financiers dans une seule application Web et mobile.

Projet académique de l'IST Mamou (Licence Génie Informatique), réalisé par une équipe de cinq membres.

[Dépôt GitHub](https://github.com/tolno-04-abdoul/AGRO)

---

## 📌 Sommaire

1. [Présentation du projet](#-présentation-du-projet)
2. [Objectifs](#-objectifs)
3. [Utilisateurs et profils](#-utilisateurs-et-profils)
4. [Modules fonctionnels](#-modules-fonctionnels)
5. [Technologies utilisées](#-technologies-utilisées)
6. [Architecture technique](#-architecture-technique)
7. [Structure du projet](#-structure-du-projet)
8. [Base de données](#-base-de-données)
9. [Installation et configuration](#-installation-et-configuration)
10. [Variables d'environnement](#-variables-denvironnement)
11. [Scripts disponibles](#-scripts-disponibles)
12. [Conventions de l'API](#-conventions-de-lapi)
13. [Conventions de code](#-conventions-de-code)
14. [Tests et qualité](#-tests-et-qualité)
15. [Organisation de l'équipe](#-organisation-de-léquipe)
16. [Gestion des branches Git](#-gestion-des-branches-git)
17. [Workflow de contribution](#-workflow-de-contribution)
18. [Conventions de commits](#-conventions-de-commits)
19. [Sécurité](#-sécurité)
20. [Dépannage](#-dépannage)
21. [Feuille de route](#-feuille-de-route)
22. [État du développement](#-état-du-développement)
23. [Documentation](#-documentation)
24. [Licence](#-licence)

---

## 🌍 Présentation du projet

L'agriculture occupe une place essentielle dans l'économie de nombreux pays africains. Les agriculteurs y rencontrent pourtant des difficultés d'accès aux équipements, aux intrants, à l'information et aux marchés. Un petit exploitant ne peut pas acheter un tracteur, mais il peut en louer un quelques jours, à condition de savoir qui en possède un près de chez lui.

AGRO centralise ces échanges :

- le **propriétaire** publie ses engins et fixe ses conditions ;
- l'**agriculteur** les recherche, les réserve et paie ;
- le **fournisseur** vend semences, engrais et équipements ;
- la **coopérative** regroupe ses membres pour des achats et des usages partagés ;
- l'**ONG** suit ses projets et mesure leur impact ;
- l'**administrateur** modère la plateforme.

## 🎯 Objectifs

- Faciliter l'accès aux équipements et matériels agricoles.
- Permettre la location d'engins entre particuliers et professionnels.
- Encourager le troc de produits, de services et de main-d'œuvre.
- Diffuser des conseils agricoles, y compris en version vocale et dans plusieurs langues.
- Créer une communauté d'entraide entre agriculteurs.
- Donner aux utilisateurs des outils de suivi : journal agricole, stocks d'intrants, calendrier, statistiques.
- Faciliter l'accès à des services financiers (microcrédit, assurance).
- Rester utilisable avec une connexion instable grâce à un mode hors ligne.

## 👥 Utilisateurs et profils

Chaque compte a un **type de profil** unique, choisi à l'inscription.

| Profil | Rôle principal | Table de profil détaillé |
|---|---|---|
| `agriculteur` | Loue des engins, achète des intrants, troque, tient son journal | `profil_agriculteur` |
| `cooperative` | Regroupe des membres, passe des commandes groupées | `profil_cooperative` |
| `fournisseur` | Vend semences, engrais, pesticides et équipements | `profil_fournisseur` |
| `proprietaire` | Publie et loue des engins | `profil_proprietaire` |
| `ONG` | Gère des projets, formulaires de collecte et indicateurs d'impact | `profil_ong` |
| `admin` | Modère, traite les signalements et litiges | aucune |

Règles :

- Le profil `admin` **ne peut pas être créé par l'API publique** : un administrateur est créé directement en base par l'équipe.
- Un utilisateur a un statut de compte : `actif`, `suspendu` ou `banni`. Seul un compte `actif` peut se connecter.
- Le type de profil et l'email ne sont pas modifiables après l'inscription.

## 🚀 Modules fonctionnels

Le projet comporte **22 modules** et **66 tables** (la documentation de conception d'origine annonçait 65 tables : un recomptage table par table en donne 66).

| # | Module | Tables | Contenu |
|---|---|---|---|
| 01 | Gestion des utilisateurs | 9 | Comptes, 5 profils détaillés, préférences de notification, favoris, cache hors ligne |
| 02 | Gestion des engins | 5 | Engins, photos, disponibilités, entretien, historique de position |
| 03 | Réservations | 2 | Réservations d'engins, paiements |
| 04 | Troc | 4 | Annonces, photos, échanges, points |
| 05 | Produits et commandes | 9 | Produits, photos, promotions, panier, commandes, suivi de livraison, commandes groupées |
| 06 | Avis et signalements | 3 | Avis, signalements, litiges |
| 07 | Communauté | 6 | Groupes, membres, forum, réponses, votes, succès partagés |
| 08 | Messagerie | 2 | Conversations, messages |
| 09 | Notifications | 1 | Notifications (push, SMS, email) |
| 10 | Événements | 2 | Formations, ateliers, foires et participations |
| 11 | Journal agricole | 3 | Activités, intrants utilisés, stocks |
| 12 | Projets ONG | 5 | Projets, bénéficiaires, formulaires, réponses, indicateurs d'impact |
| 13 | Conseils agricoles IA | 1 | Conseils et recommandations |
| 14 | Services financiers | 2 | Demandes de microcrédit, souscriptions d'assurance |
| 15 | Multilinguisme | 3 | Langues, ressources audio, préférence de langue des notifications |
| 16 | Alertes météo | 1 | Alertes géolocalisées |
| 17 | Rapports personnalisés | 1 | Rapports exportables (PDF, Excel, CSV) |
| 18 | Badges | 2 | Badges et attributions |
| 19 | Tableau de bord | 2 | Statistiques par période, historique des transactions |
| 20 | Partenaires technologiques | 1 | Drones, capteurs IoT, API tierces |
| 21 | Calendrier agricole | 1 | Tâches planifiées avec rappels |
| 22 | Services drone | 1 | Demandes de prestation par drone |

> Les modules sont des groupes de tables de la base de données. Côté code, chaque module fonctionnel est implémenté dans un module NestJS dédié.

## 🛠️ Technologies utilisées

### Frontend

- React
- Tailwind CSS
- JavaScript / TypeScript selon les modules

### Backend

- Node.js
- NestJS (API REST)
- TypeScript
- Prisma ORM 7 avec l'adaptateur PostgreSQL (`@prisma/adapter-pg`)
- Authentification par JWT (`@nestjs/jwt`) et hash de mots de passe **argon2**

### Base de données

- PostgreSQL

### Outils de développement

- Git et GitHub
- Visual Studio Code
- npm
- Vitest (tests) et oxlint (qualité du code), fournis avec le squelette NestJS du projet
- Postman, Insomnia ou `curl` pour tester l'API

## 🏗️ Architecture technique

```text
                  UTILISATEURS
                       |
                       v
               FRONTEND WEB / MOBILE
                       |
                       | HTTP / JSON
                       v
                    API REST
                       |
                       v
                  BACKEND NestJS
          (contrôleurs -> services -> Prisma)
                       |
                       v
                   PostgreSQL
```

### Rôle des couches

- **Frontend** : interface et interactions.
- **Contrôleurs** : reçoivent les requêtes HTTP, appliquent les gardes d'authentification.
- **Services** : règles métier et validation des entrées.
- **Prisma** : accès aux données.
- **PostgreSQL** : stockage et contraintes d'intégrité.

### Principe de conception

La base de données est la **référence des règles d'intégrité** (clés étrangères, valeurs autorisées par `CHECK`, unicités). Le code valide aussi les entrées avant d'interroger la base, pour renvoyer une erreur claire (`400`) plutôt qu'une erreur SQL brute (`500`).

## 📁 Structure du projet

```text
AGRO/
├── frontend/                 Application React (à initialiser)
├── backend/
│   ├── database/             Scripts SQL (schéma, données initiales)
│   ├── prisma/
│   │   └── schema.prisma     Modèle Prisma
│   ├── src/
│   │   ├── generated/        Client Prisma généré (ignoré par Git)
│   │   ├── prisma/           PrismaService et PrismaModule
│   │   ├── auth/             Inscription, connexion, JWT
│   │   ├── health/           Route de vérification
│   │   ├── <module>/         Un dossier par module fonctionnel
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── test/
│   ├── prisma7.config.ts     Configuration Prisma (lit DATABASE_URL)
│   ├── package.json
│   └── .gitignore
├── docs/                     Documentation du projet
├── .env.example              Modèle de variables d'environnement
├── .gitattributes            Fins de ligne uniformes (LF)
├── .gitignore
└── README.md
```

Chaque module fonctionnel suit le même découpage :

```text
src/<module>/
├── <module>.module.ts        Déclaration du module NestJS
├── <module>.controller.ts    Routes HTTP
└── <module>.service.ts       Règles métier et accès aux données
```

## 🗄️ Base de données

- Moteur : **PostgreSQL**, base nommée `agro_db`, encodage **UTF8**.
- Le schéma complet (66 tables) est défini dans `backend/database/01_schema_agro.sql`.
- Les valeurs de type « liste » (statuts, types) sont des colonnes texte avec une contrainte `CHECK`, ce qui facilite leur évolution.
- Les références polymorphes (avis, litiges, votes, historique) sont remplacées par **plusieurs clés étrangères nullables** avec une contrainte « exactement une renseignée ».
- Les contraintes d'unicité conditionnelles (un seul panier actif, une seule photo principale, un seul avis par transaction) sont des **index uniques partiels**.

### Source de vérité du schéma

Le schéma SQL est la **référence**. Prisma le lit par introspection :

```bash
cd backend
npx prisma db pull
npx prisma generate
```

> ⚠️ **Ne pas utiliser `prisma db push` ni `prisma migrate dev` sur `agro_db`** sans accord de l'équipe : ces commandes comparent `schema.prisma` à la base et peuvent modifier ou supprimer des tables, des contraintes ou des index que Prisma ne sait pas représenter.

### Ce que Prisma ne représente pas

Prisma ignore les contraintes `CHECK` (il le signale en avertissement lors de `db pull`) et peut mal interpréter certains index partiels. Elles restent **actives dans PostgreSQL** : une valeur invalide sera refusée par la base.

### Colonnes calculées

`ligne_commande.sous_total` est calculée par PostgreSQL : ne jamais l'envoyer lors d'une création.

### Champs dénormalisés

`note_moyenne`, `nombre_transactions`, `nb_votes`, `nb_likes` et `solde_points` sont des valeurs calculées stockées pour la rapidité de lecture. Leur mise à jour doit être assurée par le code applicatif ou une tâche planifiée : elle n'est pas automatique.

### Données initiales

La table `langue` doit être remplie avant d'inscrire des utilisateurs avec une langue préférée (`backend/database/02_seed_langues.sql`).

## ⚙️ Installation et configuration

### 1. Prérequis

- Git
- Node.js (version utilisée par l'équipe : à fixer dans un fichier `.nvmrc`)
- npm
- PostgreSQL
- Visual Studio Code (recommandé)

Sous Windows, les commandes de ce document s'utilisent dans **Git Bash**.

### 2. Cloner le dépôt

```bash
git clone https://github.com/tolno-04-abdoul/AGRO.git
cd AGRO
git switch develop
```

### 3. Installer le backend

```bash
cd backend
npm ci
```

`npm ci` installe exactement les versions de `package-lock.json`.

### 4. Créer la base de données

Dans `psql` (connecté en `postgres`) :

```sql
CREATE DATABASE agro_db WITH ENCODING 'UTF8' TEMPLATE template0;
```

Puis, depuis le dossier `backend` :

```bash
export PGCLIENTENCODING=UTF8
psql -h localhost -U postgres -d agro_db -v ON_ERROR_STOP=1 -f database/01_schema_agro.sql
psql -h localhost -U postgres -d agro_db -f database/02_seed_langues.sql
```

Le script de schéma s'exécute dans une transaction : en cas d'erreur, rien n'est créé. Vérification :

```bash
psql -h localhost -U postgres -d agro_db -c "\dt" | tail -3
```

doit se terminer par `(66 lignes)`.

### 5. Configurer les variables d'environnement

Copier le modèle puis le remplir (voir la section suivante) :

```bash
cp ../.env.example .env
```

**Ne jamais publier `.env` sur GitHub.**

### 6. Générer le client Prisma

```bash
npx prisma generate
```

Le client est créé dans `src/generated/prisma` (ignoré par Git). À refaire après chaque `git pull` qui modifie `prisma/schema.prisma`.

### 7. Démarrer le serveur

```bash
npm run start:dev
```

Le serveur écoute sur `http://localhost:5001` (valeur de `PORT`). Vérification, dans un second terminal :

```bash
curl http://localhost:5001/health
```

Réponse attendue :

```json
{"status":"ok","database":"up","tables":66}
```

### 8. Frontend

Le frontend sera installé lorsque l'application React aura été initialisée :

```bash
cd ../frontend
npm install
```

## 🔑 Variables d'environnement

Le fichier `.env` se trouve dans `backend/`. Chaque collaborateur a le sien : **ne jamais le partager ni le versionner**.

| Variable | Rôle | Exemple |
|---|---|---|
| `PORT` | Port de l'API | `5001` |
| `DATABASE_URL` | URL de connexion utilisée par Prisma | `postgresql://postgres:MOTDEPASSE@localhost:5432/agro_db` |
| `JWT_SECRET` | Clé de signature des tokens (longue, aléatoire) | 96 caractères hexadécimaux |
| `JWT_EXPIRES_IN_SECONDS` | Durée de validité d'un token | `86400` (24 h) |

Générer un `JWT_SECRET` :

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Si le mot de passe PostgreSQL contient des caractères spéciaux (`@`, `#`, `/`, `:`), il doit être **encodé en URL** dans `DATABASE_URL` (par exemple `@` devient `%40`).

Le fichier `.env.example` à la racine liste ces variables avec de fausses valeurs.

## 📜 Scripts disponibles

À lancer depuis `backend/` :

| Commande | Rôle |
|---|---|
| `npm run start:dev` | Démarre l'API avec rechargement automatique |
| `npm run build` | Compile le projet |
| `npm test` | Lance les tests |
| `npm run lint` | Vérifie la qualité du code |
| `npx prisma generate` | Génère le client Prisma |
| `npx prisma db pull` | Met à jour `schema.prisma` depuis la base |

La liste complète se trouve dans `backend/package.json`.

## 🔌 Conventions de l'API

- Format : **JSON**, encodage UTF-8.
- Authentification : en-tête `Authorization: Bearer <token>`, token obtenu par `POST /auth/login` ou `POST /auth/register`.
- Les noms de champs JSON reprennent les noms de colonnes de la base (par exemple `type_profil`, `prix_journalier`).
- Les montants (`DECIMAL`) sont renvoyés **sous forme de chaînes** (`"150000"`) pour éviter les pertes de précision : le frontend doit les convertir.
- Les dates sont au format ISO 8601 ; les dates de réservation sont envoyées en `AAAA-MM-JJ`.
- Les listes sont **paginées** : paramètres `page` et `limite` (maximum 50), réponse `{ page, limite, total, data }`.

### Codes de réponse

| Code | Signification |
|---|---|
| `200` / `201` | Succès / création réussie |
| `400` | Entrée invalide (message explicite) |
| `401` | Non authentifié ou identifiants invalides |
| `403` | Authentifié mais non autorisé (mauvais profil, objet d'un autre utilisateur) |
| `404` | Ressource introuvable |
| `409` | Conflit (email déjà utilisé, période déjà réservée) |
| `503` | Base de données injoignable (route `/health`) |

### Routes disponibles

Cette liste est mise à jour à chaque module livré (voir [État du développement](#-état-du-développement)).

| Méthode | Route | Accès | Description |
|---|---|---|---|
| `GET` | `/health` | public | État de l'API et de la base |
| `POST` | `/auth/register` | public | Inscription |
| `POST` | `/auth/login` | public | Connexion |
| `GET` | `/auth/me` | connecté | Compte courant |

## 🧭 Conventions de code

- **TypeScript strict** côté backend.
- Le projet est en **ESM** : les imports relatifs se terminent par `.js` (`import { X } from './x.service.js'`).
- Un module NestJS par module fonctionnel, avec contrôleur et service séparés.
- Validation systématique des entrées dans les services : types, longueurs maximales, valeurs autorisées.
- Aucune donnée sensible dans les réponses : jamais de `mot_de_passe`, de clé d'API ni de coordonnées bancaires d'un autre utilisateur.
- Les contrôles d'autorisation (propriétaire de la ressource, profil requis) sont faits **côté serveur**, jamais seulement dans l'interface.
- Les noms de tables et de colonnes sont en `snake_case` français, comme dans le schéma.

## ✅ Tests et qualité

Avant chaque commit, depuis `backend/` :

```bash
npm run build
npm test
npm run lint
```

Pour chaque nouvelle route, tester au minimum :

1. le cas nominal ;
2. l'absence de token (`401`) ;
3. un profil non autorisé (`403`) ;
4. une entrée invalide (`400`) ;
5. une ressource inexistante (`404`).

Un exemple de test manuel avec `curl` :

```bash
curl -X POST http://localhost:5001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"utilisateur@exemple.com","mot_de_passe":"MotDePasse123"}'
```

Après des tests manuels, **supprimer les comptes et données de test** de la base.

## 👥 Organisation de l'équipe

AGRO est un projet collaboratif de **cinq membres**.

### Administrateur du dépôt

- Gère le dépôt GitHub et les accès des collaborateurs.
- Coordonne techniquement le projet.
- Valide les modifications destinées à `main`.
- Supervise la qualité du code.

### Collaborateurs

- Développent les fonctionnalités et corrigent les anomalies.
- Rédigent et mettent à jour la documentation.
- Réalisent des commits explicites.
- Respectent l'architecture et les conventions.
- Synchronisent régulièrement leur travail avec `develop`.

## 🌿 Gestion des branches Git

| Branche | Rôle | Politique |
|---|---|---|
| `main` | Version stable | Contrôle de l'administrateur |
| `develop` | Développement collectif | Accès aux membres autorisés |
| `feature/*` | Nouvelles fonctionnalités | Travail collaboratif |
| `fix/*` | Corrections | Travail collaboratif |
| `docs/*` | Documentation | Travail collaboratif |

### `main`

- Pas de push direct par les collaborateurs.
- Toute modification passe par une Pull Request, examinée et fusionnée par l'administrateur.
- Les `push --force` et suppressions sont interdits.

> **Important :** ces règles sont la politique de l'équipe. Sur un dépôt privé, leur application technique dépend de la protection effectivement configurée sur GitHub (Settings → Branches). Sans protection active, un collaborateur avec droit d'écriture pourrait techniquement pousser sur `main`. L'administrateur doit vérifier cette configuration.

### `develop`

- Tous les collaborateurs autorisés peuvent y commiter et pousser.
- Les Pull Requests vers `develop` sont facultatives.
- Chacun veille à ne pas écraser le travail des autres.
- **Jamais de `push --force`** sur cette branche partagée.

## 🔄 Workflow de contribution

### Méthode 1 : travailler directement sur `develop`

```bash
git switch develop
git pull origin develop
# ... modifications ...
git status
git add <fichiers concernés>
git commit -m "feat: description de la modification"
git pull --rebase origin develop
git push origin develop
```

Avant de commiter, **toujours lire `git status`** et ajouter les fichiers un par un ou par dossier, plutôt que `git add .`. Cela évite de publier par erreur un fichier sensible ou généré.

En cas de conflit lors du `pull --rebase`, résoudre les conflits, puis `git rebase --continue`.

### Méthode 2 : branche individuelle

```bash
git switch develop
git pull origin develop
git switch -c feature/nom-fonctionnalite
# ... modifications ...
git add <fichiers concernés>
git commit -m "feat: description de la fonctionnalité"
git push -u origin feature/nom-fonctionnalite
```

Une Pull Request vers `develop` peut ensuite être ouverte.

### Publication vers `main`

1. L'administrateur vérifie que `develop` compile, passe les tests et le lint.
2. Il ouvre une Pull Request de `develop` vers `main`.
3. Il examine les changements, valide et fusionne.

### Après un changement d'historique

Si l'historique d'une branche partagée a été réécrit (cas exceptionnel, décidé par l'administrateur), chaque membre doit réaligner sa copie :

```bash
git fetch
git switch develop
git reset --hard origin/develop
```

Cette commande supprime les modifications locales non poussées : sauvegarder son travail avant.

## 📝 Conventions de commits

| Préfixe | Utilisation |
|---|---|
| `feat:` | Nouvelle fonctionnalité |
| `fix:` | Correction d'un problème |
| `docs:` | Documentation |
| `style:` | Mise en forme |
| `refactor:` | Réorganisation du code |
| `test:` | Tests |
| `chore:` | Maintenance et configuration |

Exemples :

```bash
git commit -m "feat(auth): inscription, connexion et JWT"
git commit -m "fix(engins): corriger le filtre de prix maximum"
git commit -m "docs: mise à jour du README"
```

Un commit = un changement cohérent et testé.

## 🔐 Sécurité

### Règles pour tous

- Ne jamais publier de mots de passe, de clés secrètes ni de tokens.
- Ne jamais versionner `.env` (vérifier avec `git check-ignore backend/.env`).
- Utiliser des variables d'environnement.
- Vérifier les dépendances avant de les ajouter, et éviter les dépendances inutiles.
- Ne pas coller de token ou de mot de passe réel dans un message, un ticket ou une conversation.
- Signaler tout problème de sécurité à l'administrateur.

### Mesures en place dans l'API

- Mots de passe hachés avec **argon2**, jamais stockés ni renvoyés en clair.
- Connexion sans indice : le message d'échec est identique que l'email existe ou non, et un hash factice est vérifié pour uniformiser le temps de réponse.
- Les comptes non `actif` ne peuvent pas se connecter.
- Le profil `admin` ne peut pas être créé par l'inscription publique.

### Points à traiter avant toute mise en ligne

- Limiter les tentatives de connexion (par exemple avec `@nestjs/throttler`).
- Configurer CORS pour n'autoriser que l'origine du frontend.
- Créer un **utilisateur PostgreSQL dédié** à l'application, avec des droits limités à `agro_db`, au lieu du compte `postgres`.
- Prévoir la révocation ou le renouvellement des tokens (un token reste valable jusqu'à son expiration, y compris après un changement de mot de passe).
- Chiffrer les données sensibles stockées (clés d'API des partenaires, coordonnées de paiement).
- Mettre en place la réinitialisation du mot de passe et la vérification d'email, qui nécessitent un service d'envoi.
- Stocker les secrets dans un gestionnaire de secrets, pas dans un fichier.

## 🩺 Dépannage

| Symptôme | Cause probable | Solution |
|---|---|---|
| `EADDRINUSE: address already in use :::5001` | Un ancien serveur occupe encore le port | `netstat -ano \| grep :5001` puis `taskkill //PID <numéro> //F` |
| `curl` répond mais `/auth/...` donne `404` | L'ancien serveur répond, sans le nouveau code | Arrêter le serveur et relancer `npm run start:dev` |
| Erreur `28P01` (authentification par mot de passe échouée) | Mot de passe absent ou faux dans `.env`, ou variable en double | Vérifier `DATABASE_URL`, redémarrer le serveur |
| `/health` renvoie `tables: 0` | Le script SQL n'a pas été exécuté | Lancer `01_schema_agro.sql` |
| `/health` renvoie `503` | PostgreSQL arrêté ou identifiants faux | `pg_isready -h localhost -p 5432` |
| `ERR_MODULE_NOT_FOUND` au démarrage | Import relatif sans `.js` (projet en ESM) | Ajouter `.js` à l'import |
| Erreur d'import sur `src/generated/prisma` | Client Prisma non généré | `npx prisma generate` |
| Accents illisibles dans `psql` | Encodage de la console Windows | `export PGCLIENTENCODING=UTF8` ou `chcp 65001` |
| `bash: cd: ... No such file or directory` | Mauvais dossier courant | Vérifier avec `pwd` et revenir à la racine du dépôt |
| Le `.env` change sans effet | Il n'est lu qu'au démarrage | Redémarrer le serveur |
| Avertissements `LF will be replaced by CRLF` | Conversion de fins de ligne sous Windows | Sans gravité ; `.gitattributes` les uniformise |

## 🗺️ Feuille de route

Ordre de développement proposé (à valider par l'équipe) : chaque étape est livrée, testée et commitée avant la suivante.

1. **Socle** : schéma SQL, Prisma, route `/health`.
2. **Authentification** : inscription, connexion, JWT.
3. **Module 01 — Utilisateurs** : compte, profil public, profils spécifiques, langues, préférences de notification, favoris, cache hors ligne.
4. **Module 02 — Engins** : publication, liste filtrée, fiche, modification, puis photos, disponibilités, entretien.
5. **Module 03 — Réservations** : demande, confirmation, annulation, paiements.
6. **Modules 04 à 06** : troc et points, produits et commandes, avis et litiges.
7. **Modules 07 à 12** : communauté, messagerie, notifications, événements, journal agricole, projets ONG.
8. **Modules 13 à 22** : conseils IA, services financiers, multilinguisme, alertes météo, rapports, badges, statistiques, partenaires, calendrier, drones.
9. **Frontend** : initialisation de l'application React et intégration progressive des modules.
10. **Finalisation** : sécurité (voir ci-dessus), tests, documentation, déploiement.

## 📊 État du développement

*Dernière mise à jour : 16 novembre 2026. À actualiser à chaque module livré.*

| Élément | État |
|---|---|
| Dépôt GitHub privé | Initialisé |
| Branches `main` et `develop` | Créées |
| Socle backend NestJS | Initialisé |
| Configuration Prisma | Initialisée |
| Conception de la base (66 tables, 22 modules) | Terminée |
| Script SQL du schéma | Écrit, à (re)placer dans `backend/database/` |
| Connexion Prisma et route `/health` | À (re)livrer |
| Authentification | À (re)livrer |
| Module 01 — Utilisateurs | À développer |
| Module 02 — Engins | À (re)livrer |
| Modules 03 à 22 | À développer progressivement |
| Frontend | À initialiser |

## 📚 Documentation

Les documents techniques, décisions d'architecture, diagrammes et spécifications fonctionnelles sont centralisés dans `docs/` :

- cahier des charges ;
- description des fonctionnalités ;
- utilisateurs et interfaces ;
- conception de la base de données (66 tables).

Chaque membre met à jour la documentation liée à ses développements.

## 📄 Licence

AGRO est actuellement un projet privé. Aucune licence open source n'est définie pour le moment. Toute utilisation, reproduction ou distribution du code doit être autorisée par les responsables du projet.

---

<p align="center">

**AGRO — Construisons ensemble l'avenir numérique de l'agriculture africaine.** 🌱

</p>
