# Streakcount

## Description

Streakcount est une application de statistiques sur les relations sexuelles qui ont été recensées par les utilisateurs. L'application permet de stocker et d'analyser diverses informations telles que la durée, la qualité, ainsi que les informations concernant les partenaires.

## Fonctionnalités principales

- Enregistrement des rencontres avec détails (durée, qualité, date, etc.)
- Gestion des informations des partenaires (nom, âge, sexe, taille)
- Visualisation de statistiques et tendances
- Interface utilisateur intuitive et moderne

## Technologies utilisées

### Frontend

- React avec Vite comme outil de build
- TypeScript pour le typage statique
- ShadcnUI pour les composants graphiques
- TailwindCSS pour les styles

### Backend

- Node.js comme environnement d'exécution
- Express comme framework web
- Sequelize comme ORM
- MySQL comme base de données

## Installation

### Prérequis

- Node.js (v18+)
- MySQL

### Installation du frontend

```bash
cd scFront
npm install
npm run dev
```

### Installation du backend

```bash
cd scBack
npm install
# Configurer la base de données dans config/database.js
npm start
```

## Structure du projet

- `/scFront` : Code source du frontend
- `/scBack` : Code source du backend

## Contribution

Pour contribuer au projet, veuillez consulter les fichiers `project.mdc` et `techno.mdc` pour plus d'informations sur l'architecture et le fonctionnement du projet.
