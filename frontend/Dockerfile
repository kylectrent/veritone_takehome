# ---- build stage ----

# use LTS node image
FROM node:20-alpine AS BUILD
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- runtime stage ----
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config with /api proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
