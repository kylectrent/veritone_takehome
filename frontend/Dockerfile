# frontend/Dockerfile

# ----------------------------
# Dev stage (hot reload)
# ----------------------------
FROM node:20-alpine AS DEV
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Copy the source also mount via volume
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]


# ----------------------------
# Build stage (prod bundle)
# ----------------------------

# use LTS node image
FROM node:20-alpine AS BUILD
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ----------------------------
# Runtime stage (nginx)
# ----------------------------
FROM nginx:alpine AS PROD
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config with /api proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
