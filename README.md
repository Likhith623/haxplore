**Kindway — Next.js Website**

**Team:** Neutrons

- **Nikitha Kunapareddy**
- **Lalith Vasireddy**

Overview
-
Kindway is a marketing/informational website built with Next.js using the App Router. The repository contains a fully client-and-server-rendered site with accessible pages, a structured `app/` layout, and optimized static assets. This README documents how the project is structured, how to run and build it locally, how the provided Dockerfile supports deployment to Google Cloud Run, and operational guidance for production.

Project snapshot
-
- Framework: Next.js (version 16.1.6)
- React: 19.2.3
- TypeScript: project configured (see `tsconfig.json`)
- Styling: Tailwind CSS (via `@tailwindcss/postcss`)
- App directory: `src/app`
- Static assets: `public/` (images and docs)

Repository structure (high level)
-
- `src/app/` — Application source using Next.js App Router; pages live here (home, about, blog, contact, gallery, products, training, mobile-clinic)
- `src/components/` — Reusable React components (Navbar, Footer, PageBanner, widgets, etc.)
- `public/` — Static assets (images, docs)
- `.next/` — Build output (created after `npm run build`)
- `next.config.ts` — Next.js config; `output: "standalone"` is enabled for Docker-friendly builds
- `Dockerfile` — Multi-stage Docker build (created and optimized for Cloud Run)
- `.dockerignore` — Files excluded from Docker context
- `package.json` — scripts and dependency list

What this app implements
-
- A responsive, accessible marketing website with multiple content pages
- Client side animation using `framer-motion`
- Componentized layout and UI patterns in `src/components`
- Image and static asset serving via the `public` folder
- TypeScript support for components and pages

Local development
-
Prerequisites:
- Node.js (recommended Node 20 LTS)
- npm (or Yarn / pnpm)

Run locally for development:

```bash
npm install
npm run dev
# opens on http://localhost:3000 by default
```

Notes:
- The `dev` script runs the Next.js dev server with hot-module reloading.
- The project uses the `app/` directory convention (App Router). Edit `src/app/page.tsx` to modify the homepage.

Build for production (locally):

```bash
npm ci
npm run build
npm start
```

- `npm run build` creates a standalone output (because `next.config.ts` sets `output: "standalone"`). The production server will be started with `npm start` or the `server.js` generated under the `.next/standalone` output.

Docker & Google Cloud Run (production)
-
This repository includes a multi-stage `Dockerfile` optimized to run the Next.js standalone output and a `.dockerignore` to keep the build context small.

Build and push using Google Cloud Build (recommended):

```bash
# from repo root — replace PROJECT-ID and REGION
gcloud builds submit --tag gcr.io/PROJECT-ID/kindway-nextjs

gcloud run deploy kindway-nextjs \
	--image gcr.io/PROJECT-ID/kindway-nextjs \
	--platform managed \
	--region REGION \
	--allow-unauthenticated \
	--port 8080
```

Or build locally and push the image manually:

```bash
docker build -t gcr.io/PROJECT-ID/kindway-nextjs .
docker push gcr.io/PROJECT-ID/kindway-nextjs
gcloud run deploy kindway-nextjs --image gcr.io/PROJECT-ID/kindway-nextjs --platform managed --region REGION --allow-unauthenticated --port 8080
```

Key Docker / Cloud Run notes
-
- The Dockerfile runs `npm run build` in a builder stage and copies the Next standalone output into a small Node 20 Alpine runner image.
- Cloud Run expects your container to listen on the port provided by the `PORT` environment variable; the Dockerfile defaults to `8080` and exposes it. Cloud Run will override `PORT` at runtime.
- Using `output: "standalone"` in `next.config.ts` produces a `server.js` entrypoint at the container root which is invoked as `node server.js` in the provided Dockerfile.

Environment variables and secrets
-
- For local development, a `.env.local` file is supported by Next.js but is excluded from Docker via `.dockerignore`.
- For production on Cloud Run, provide secrets using Secret Manager or set environment variables via `gcloud run services update` or the Cloud Run console.

Performance & optimization
-
- Static assets in `public/` are served as-is. Ensure images are compressed for smaller transfer sizes.
- Tailwind is configured via `postcss.config.mjs` and is included in the build pipeline.
- If you add server-side data fetching, prefer incremental/static rendering patterns where appropriate to reduce cold-start cost.

Security considerations
-
- Do not commit private keys or secrets to the repository. Use environment variables or cloud secret stores for API keys and credentials.
- Keep dependencies up to date and scan with tools like `npm audit`.

CI/CD recommendations
-
- Use Cloud Build (recommended) or GitHub Actions to build, test, and push images on merge to `main`.
- Example GitHub Action steps:
	- Install Node, install deps, run `npm run build`, run tests
	- Build Docker image and push to Google Container Registry or Artifact Registry
	- Deploy to Cloud Run using `gcloud` with a service account that has deploy permissions

Troubleshooting
-
- If `npm run build` fails, check compiler errors in TypeScript or missing imports.
- If the container fails to start on Cloud Run, inspect the service logs in the Cloud Console (`Cloud Run > Service > Logs`) or run `gcloud run logs read SERVICE --region REGION`.
- If static assets 404, verify they exist under `public/` and were copied into the `.next/static` during build.

Testing and validation
-
- Basic local test (after `npm run build`):

```bash
npm start
# then visit http://localhost:3000
```

- Docker local test:

```bash
docker build -t kindway-nextjs:local .
docker run --rm -p 8080:8080 kindway-nextjs:local
# visit http://localhost:8080
```

Maintenance & future improvements
-
- Add automated unit and integration tests (Jest/Playwright) to cover essential flows.
- Add CI linting (ESLint) and type-checking before merges.
- Consider image size optimizations (slim base image, remove dev-only dependencies before copy).

Contact & credits
-
- Project: Kindway — Next.js Website
- Team: **Neutrons**
	- **Nikitha Kunapareddy** — Frontend / UX
	- **Lalith Vasireddy** — Fullstack / DevOps

If you need me to add automated CI config, tests, health checks, or to run a local build to verify the Docker image, say which one you prefer and I will proceed.

License
-
Include a `LICENSE` file if this project will be open source. If this is private, keep the repository private and manage access via your Git provider.

Files changed/created in this repo relevant to deploy:
-
- `next.config.ts` — `output: "standalone"` required for the Docker pattern
- `Dockerfile` — multi-stage build tailored for Cloud Run
- `.dockerignore` — keeps Docker context small and secure

Thank you — ready to help with CI, Cloud Run service configuration, or running the build locally.

