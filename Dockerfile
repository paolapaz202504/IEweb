# Dockerfile optimizado para el sitio web del Instituto Electoral (IEweb)
FROM nginx:alpine

# Copiar la configuración personalizada de Nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar todo el código fuente estático (HTML/CSS/JS) a la ruta predeterminada
COPY ./src /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
