# TravelingFendProject

## Introduction
TravelingFendProject est une application front-end moderne développée pour simplifier la planification et la gestion de voyages. Grâce à son interface conviviale et ses fonctionnalités interactives, les utilisateurs peuvent explorer des destinations, organiser leurs itinéraires et interagir avec une base de données simulée.

---

## Fonctionnalités principales
- **Formulaires interactifs** : Utilisation de `react-hook-form` pour des validations de formulaire fluides.
- **Requêtes API** : Intégration d'`axios` pour la communication avec un serveur JSON simulé.
- **Notifications en temps réel** : Affichage des notifications via `react-toaster`.
- **Interface réactive** : Conception réactive avec Bootstrap pour une compatibilité multi-appareils.
- **Expérience utilisateur enrichie** : Chargements rapides grâce à `React` avec `Vite` pour le développement et la construction.

---

## Prérequis
Assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Node.js** (version 14 ou supérieure)
- **npm** (généralement inclus avec Node.js)
- **Git** (pour cloner le dépôt)
- **Vite** (Outil de développement rapide pour les applications React.git status)

---

## Installation
1. **Cloner le projet** :
   ```bash
   git clone -b FrontEnd https://github.com/idrissTagny/TravelingProject.git
   ```

2. **Naviguer dans le répertoire** :
   ```bash
   cd travelingfendproject
   ```

3. **Installer les dépendances** :
   ```bash
   npm install
   ```

4. **Lancer l'application React** :
   ```bash
   npm run dev
   ```

5. **Démarrer le serveur JSON** :
   ```bash
   npx json-server db.json --watch
   ```

---

## Structure du projet
Voici un aperçu de la structure des principaux dossiers et fichiers :

```
travelingfendproject/
├── public/           # Contient les fichiers publics comme index.html
├── src/              # Code source principal
│   ├── components/   # Composants React réutilisables
│   ├── pages/        # Pages principales de l'application
│   ├── hooks/        # Hooks personnalisés 
│   ├── services/     # Fichiers pour les appels API avec Axios
│   ├── App.jsx       # Point d'entrée de l'application React
│   ├── main.jsx      # Point d'entrée pour Vite
├── db.json           # Fichier JSON simulant une base de données
├── package.json      # Fichier de configuration npm
└── README.md         # Documentation du projet
```

---

## Technologies utilisées
- **HTML & CSS** : Langages de base pour la structure et le style de l'application.
- **Bootstrap** : Framework CSS pour une conception réactive et rapide.
- **ReactJS** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Vite** : Outil de développement rapide pour les applications React.
- **react-hook-form** : Gestion et validation des formulaires.
- **axios** : Librairie HTTP pour les appels API.
- **react-toaster** : Composants de notification pour une meilleure interaction utilisateur.

---

## Contributeurs
FrontEnd
- [Nom du contributeur 1](https://github.com/idrissTagny)
- [Nom du contributeur 2](https://github.com/Sandralorine)

Backend
- [Nom du contributeur 1](https://github.com/JUSTE-NATHAN)
- [Nom du contributeur 1](https://github.com/OlivierTchall)


---

---

## Remerciements
Merci de contribuer à ce projet ou de l'utiliser pour vos propres besoins de développement front-end.
