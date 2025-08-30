# Etapa 1: Build de la app
FROM node:20-alpine AS build

WORKDIR /app

# Copiar dependencias e instalar
COPY package.json package-lock.json ./
RUN npm install

# Copiar todo el código y generar build
COPY . .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine AS nginx

# Elimina configuración default de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos del build al nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
