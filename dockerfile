# --- Etapa de Construcción ---
    FROM node:lts-alpine as builder

    # Define el directorio de trabajo dentro del contenedor
    WORKDIR /app
    
    # Copia los archivos package.json y package-lock.json (o yarn.lock)
    COPY package*.json ./
    
    # Instala las dependencias de Angular
    RUN npm install
    
    # Copia el resto de los archivos de la aplicación Angular
    COPY . .
    
    # Construye la aplicación Angular para producción
    RUN npm run build -- --configuration production --output-path=dist
    
    # --- Etapa de Producción ---
    FROM nginx:stable-alpine
    
    # Copia los archivos construidos de la etapa de construcción
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # Expone el puerto en el que nginx sirve la aplicación (por defecto es 80)
    EXPOSE 80
    
    # Comando para iniciar nginx (por defecto)
    CMD ["nginx", "-g", "daemon off;"]