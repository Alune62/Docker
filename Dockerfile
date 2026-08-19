# Image de base légère et officielle
FROM nginx:alpine

# Suppression de la page par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie de tes fichiers HTML dans le répertoire web de Nginx
COPY ./html /usr/share/nginx/html

# Exposition du port 80 (documentation)
EXPOSE 80

# Commande par défaut au lancement du conteneur
CMD ["nginx", "-g", "daemon off;"]