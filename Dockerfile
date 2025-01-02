# Utiliser une image Node.js pour la construction
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu du projet
COPY . .

# Construire l'application React
RUN npm run build

# Étape de production avec Nginx
FROM nginx:stable-alpine

# Copier les fichiers construits vers le répertoire de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier le fichier de configuration par défaut de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80 pour le serveur
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]