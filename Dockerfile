# Multi-stage Dockerfile for Next.js standalone output, optimized for Cloud Run
# Uses Node 20 Alpine images to keep image small

FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production

# Install dependencies (prefer lockfile if present)
COPY package.json package-lock.json* ./
# Install devDependencies too so TypeScript is available when Next loads next.config.ts
# Use npm's include flag to ensure dev deps are installed even with NODE_ENV=production
RUN npm ci --include=dev --silent || npm install --include=dev --silent

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
