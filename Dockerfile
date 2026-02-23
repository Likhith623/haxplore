# Multi-stage Dockerfile for Next.js standalone output, optimized for Cloud Run
# Uses Node 20 Alpine images to keep image small

FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production

# Install dependencies (prefer lockfile if present)
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent

# Copy source and build app
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

# Copy standalone output and static assets from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 8080

# Cloud Run sets $PORT; standalone server uses `server.js` at the container root
CMD ["node", "server.js"]
