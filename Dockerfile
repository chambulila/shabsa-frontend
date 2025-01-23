# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (excluding devDependencies)
RUN npm install --omit=dev

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3096
EXPOSE 3096

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
