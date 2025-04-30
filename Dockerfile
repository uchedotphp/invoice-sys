# Use Alpine Linux for smaller image size
# FROM node:19-alpine AS build
FROM node:19-alpine

RUN addgroup app && adduser -S -G app app

USER app

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json .

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 5174

# Start nginx
CMD ["npm", "run", "dev"]