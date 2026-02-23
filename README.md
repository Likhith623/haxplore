# Kindway — HaXplore '26 Submission

---

## 🌐 Live Hosted URL

> ## 👉 [https://haxplore-344002794323.asia-south1.run.app/](https://haxplore-344002794323.asia-south1.run.app/)
>
> **Judges: Click the link above to interact with the live application.**

---

## 🏆 HaXplore '26 — Submission Details

**Hackathon:** HaXplore '26

**Team Name:** Neutrons

**Team Members:**
| Name | Role |
|---|---|
| Likhith Vasireddy | Fullstack / DevOps / Cloud |
| Lalith Vasireddy | Frontend |
| Nikitha Kunapareddy | Frontend / UX |

---

## 💡 Submission Idea — Problem & Solution

### Problem Statement

Small clinics and local dental biotech companies often lack a modern, mobile-first web presence to communicate:
- Their product offerings (implants, bone grafts, surgical kits)
- Training workshops and certification programs for dentists
- Mobile dental clinic outreach schedules and locations
- Contact and inquiry channels for both patients and professionals

The original Kindway website was a high-complexity dental biotech site with poor mobile responsiveness, unclear navigation, no dedicated service pages, no online registration tools, and minimal calls to action — leading to missed patient engagement, poor SEO, and lost business conversions.

### Our Solution

We rebuilt the Kindway dental biotech website from scratch using **Next.js** (App Router) to create a **high-conversion, mobile-first educational and commercial portal** that addresses every gap in the original site.

### Key Improvements Implemented

#### 1. 🗺️ Improved Website Structure & Navigation
- Simplified top navigation with key pages: **Home, About, Products, Training & Workshops, Mobile Dental Clinic, Contact Us**
- Dedicated individual service pages:
  - `/products/dental-implants` — Dental Implants page
  - `/products/bone-grafts` — Bone Grafts page
  - `/mobile-clinic` — Mobile Dental Clinic page
  - `/training` — Training Courses page
- **Sticky Navbar** that remains visible while scrolling on all pages (built into `src/components/Navbar.tsx`)

#### 2. 📱 Mobile-Friendly, Responsive Design
- Fully responsive layout using **Tailwind CSS v4** — works seamlessly on phones, tablets, and desktops
- All buttons, forms, and sign-up elements tested for small screen compatibility
- No broken layouts on mobile viewport sizes

#### 3. 📣 Stronger Calls to Action (CTAs)
- Prominent action buttons on every page: **Register for Workshop**, **View Product Catalogue**, **Contact Sales**, **Book Training**
- High-contrast CTA colors for visibility
- Action-oriented text ("Book Your Slot Today", "Learn More", "Get in Touch")

#### 4. 🖼️ Engaging Visuals & Social Proof
- Professional photo gallery of implant products, surgical workshops, and outreach programs (`/gallery`)
- Before & After clinical results for bone grafting and implant cases
- Testimonials and quotes from dentists and patients to build credibility

#### 5. 📚 Educational Content & SEO
- Dedicated blog section (`/blog`) with educational articles:
  - How dental implants work
  - Importance of bone grafts in implant success
  - Tips for implant surgery planning
  - Case studies from workshops
- Keywords integrated: "dental implants training", "bone graft materials", "dental outreach programs"
- Individual blog post pages with dynamic routing (`/blog/[slug]`)

#### 6. 📅 Online Booking & Registration Tools
- Online registration capability for workshops directly on the site
- Event calendar showing upcoming course dates and outreach campaigns

#### 7. 📞 Contact & Support Enhancements
- Visible contact info (phone, email, WhatsApp) accessible on every page via the footer and contact page
- **WhatsApp Widget** (live chat button) — `src/components/WhatsAppWidget.tsx`
- **Tawk.to Live Chat** integration — `src/components/TawkChat.tsx`
- Contact inquiry form on `/contact`
- Google Maps embed available on the contact page

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | Framework (App Router, SSR, static export) |
| React | 19.2.3 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first styling |
| Framer Motion | ^12 | Animations and transitions |
| React Icons | ^5.5 | Icon components |
| Docker | — | Containerization |
| Google Cloud Run | — | Hosting / deployment |

---

## 📁 Repository Structure

```
kindway-nextjs/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Home page
│   │   ├── about/page.tsx          # About page
│   │   ├── blog/page.tsx           # Blog listing
│   │   ├── blog/[slug]/page.tsx    # Individual blog posts
│   │   ├── contact/page.tsx        # Contact page
│   │   ├── gallery/page.tsx        # Gallery page
│   │   ├── mobile-clinic/page.tsx  # Mobile Clinic page
│   │   ├── products/page.tsx       # Products overview
│   │   ├── products/dental-implants/page.tsx
│   │   ├── products/bone-grafts/page.tsx
│   │   ├── training/page.tsx       # Training & Workshops
│   │   ├── globals.css             # Global styles
│   │   └── layout.tsx              # Root layout (Navbar, Footer)
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky responsive navigation
│   │   ├── Footer.tsx              # Site-wide footer with contact
│   │   ├── PageBanner.tsx          # Reusable page hero banner
│   │   ├── AnimateOnScroll.tsx     # Scroll-triggered animations
│   │   ├── StatsCounter.tsx        # Animated statistics section
│   │   ├── ScrollToTop.tsx         # Scroll-to-top button
│   │   ├── WhatsAppWidget.tsx      # WhatsApp floating chat
│   │   └── TawkChat.tsx            # Tawk.to live chat widget
│   └── lib/                        # Utility functions
├── public/
│   ├── images/                     # All site images and assets
│   └── doc/                        # Downloadable documents
├── Dockerfile                      # Multi-stage Docker build for Cloud Run
├── .dockerignore                   # Docker build context exclusions
├── next.config.ts                  # Next.js config (standalone output)
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS / Tailwind config
└── package.json                    # Dependencies and scripts
```

---

## 🚀 Local Development

### Prerequisites
- Node.js **v20 LTS** or higher
- npm (included with Node.js)

### Run in development mode

```bash
# 1. Clone the repository
git clone https://github.com/Likhith623/haxplore.git
cd haxplore

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-reloads as you edit files.

### Build and run production locally

```bash
npm ci
npm run build
npm start
# open http://localhost:3000
```

---

## 🐳 Docker — Build & Run Locally

```bash
# Build the image
docker build -t kindway-nextjs:local .

# Run the container
docker run --rm -p 8080:8080 kindway-nextjs:local

# Visit http://localhost:8080
```

---

## ☁️ Google Cloud Run — Deploy

The project is containerized with a production-optimized multi-stage `Dockerfile` using Node 20 Alpine. It uses Next.js `output: "standalone"` for a compact runtime image.

### Deploy via Cloud Build (recommended)

```bash
# Replace PROJECT-ID and REGION with your values
gcloud builds submit --tag gcr.io/PROJECT-ID/kindway-nextjs

gcloud run deploy kindway-nextjs \
  --image gcr.io/PROJECT-ID/kindway-nextjs \
  --platform managed \
  --region REGION \
  --allow-unauthenticated \
  --port 8080
```

### Deploy via local Docker push

```bash
docker build -t gcr.io/PROJECT-ID/kindway-nextjs .
docker push gcr.io/PROJECT-ID/kindway-nextjs
gcloud run deploy kindway-nextjs \
  --image gcr.io/PROJECT-ID/kindway-nextjs \
  --platform managed \
  --region REGION \
  --allow-unauthenticated \
  --port 8080
```

### How the Dockerfile works

| Stage | What it does |
|---|---|
| `builder` | Installs all deps (including devDeps for TypeScript), runs `npm run build` |
| `runner` | Copies `.next/standalone`, `.next/static`, and `public/` into a lean Alpine image |
| Runtime | Starts with `node server.js`; Cloud Run injects `PORT=8080` automatically |

---

## 🔒 Environment Variables

| Variable | Where to set | Notes |
|---|---|---|
| `PORT` | Cloud Run (auto-injected) | Container listens on this port |
| `NEXT_PUBLIC_*` | `.env.local` (dev) or Cloud Run env | Client-visible env vars |

> `.env.local` is excluded from Docker via `.dockerignore`. Set production secrets in [Cloud Run Environment Variables](https://cloud.google.com/run/docs/configuring/environment-variables) or [Secret Manager](https://cloud.google.com/secret-manager).

---

## 📦 Scripts Reference

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start dev server with HMR |
| `build` | `npm run build` | Production build (standalone output) |
| `start` | `npm start` | Start production server |
| `lint` | `npm run lint` | Run ESLint |

---

## 🧩 Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Kindway |
| `/products` | Products overview |
| `/products/dental-implants` | Dental Implants detail |
| `/products/bone-grafts` | Bone Grafts detail |
| `/training` | Training & Workshops |
| `/mobile-clinic` | Mobile Dental Clinic |
| `/gallery` | Photo Gallery |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact & Inquiry |

---

## 🐛 Troubleshooting

| Issue | Fix |
|---|---|
| `Cannot find module 'typescript'` during Docker build | Fixed — `Dockerfile` installs devDeps with `--include=dev` |
| Images 404 on deployed site | Fixed — `public/` is explicitly copied into the runner image |
| Container won't start on Cloud Run | Check logs: `gcloud run logs read kindway-nextjs --region REGION` |
| `next.config.ts` transpile error | Caused by missing TypeScript; resolved by installing devDeps in builder |

---

## 📋 Submission Checklist

- [x] Complete source code in public GitHub repository
- [x] Design assets included in `public/images/`
- [x] README with problem statement and solution description
- [x] Hosted live URL provided and working
- [x] Mobile-friendly responsive design
- [x] Dedicated service pages (Implants, Bone Grafts, Mobile Clinic, Training)
- [x] Sticky navigation bar
- [x] Calls to action on every page
- [x] Photo gallery with clinical visuals
- [x] Blog with educational content
- [x] Contact page with WhatsApp and live chat
- [x] Dockerized and deployed on Google Cloud Run

---

## 👥 Team Neutrons

| Name | Role |
|---|---|
| **Likhith Vasireddy** | Fullstack Developer / Cloud & DevOps |
| **Lalith Vasireddy** | Frontend & Backend Developer |
| **Nikitha Kunapareddy** | Frontend Developer / UX |

---

## 🔗 Links

- **Live Site:** [https://haxplore-344002794323.asia-south1.run.app/](https://haxplore-344002794323.asia-south1.run.app/)
- **GitHub Repository:** [https://github.com/Likhith623/haxplore](https://github.com/Likhith623/haxplore)
- **Hackathon:** HaXplore '26
