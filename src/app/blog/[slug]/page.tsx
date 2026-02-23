import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';

/* ════════════════════════════════════════════
   Static blog articles (no backend needed)
   ════════════════════════════════════════════ */

interface Article {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  content: string; // HTML-safe markdown-ish content
}

const articles: Record<string, Article> = {
  'how-dental-implants-work': {
    slug: 'how-dental-implants-work',
    title: 'How Dental Implants Work: A Complete Patient Guide',
    description:
      'Everything you need to know about dental implants — from the initial consultation to the final restoration. A comprehensive guide for patients and dental professionals.',
    image: '/images/ex1.jpg',
    date: 'May 18, 2025',
    category: 'Patient Education',
    readTime: '6 min read',
    content: `
## What Are Dental Implants?

A dental implant is a small titanium post that is surgically placed into the jawbone beneath the gum line. It acts as an artificial tooth root, providing a strong foundation for a fixed or removable replacement tooth (crown) that is designed to match your natural teeth.

Unlike dentures or bridges, dental implants don't slip or shift in the mouth — an especially important benefit when eating and speaking.

## The Implant Procedure — Step by Step

### 1. Initial Consultation & Planning
Your dentist will take 3D CBCT scans to assess bone density, nerve location, and sinus proximity. A digital treatment plan maps out the exact position, angle, and depth for each implant.

### 2. Implant Placement Surgery
Under local anaesthesia (or sedation), a small incision is made in the gum tissue and the titanium implant fixture is precisely placed into the jawbone. The procedure typically takes 30–60 minutes per implant.

### 3. Osseointegration (Healing)
Over the next 3–6 months the implant fuses with the surrounding bone through a biological process called **osseointegration**. This creates a rock-solid anchor. A temporary prosthesis may be provided during this period.

### 4. Abutment & Crown Placement
Once integration is complete, an abutment (connector) is attached to the implant, and a custom-made porcelain or zirconia crown is cemented or screwed into place. The result? A restoration that looks, feels, and functions like a natural tooth.

## Who Is a Candidate?

Most adults with one or more missing teeth are candidates for dental implants, provided they have:

- **Adequate bone density** (or are willing to undergo bone grafting)
- **Healthy gums** free of periodontal disease
- **Good general health** — uncontrolled diabetes or heavy smoking may affect healing

## Why Choose Dental Implants?

| Benefit | Details |
|---|---|
| **Longevity** | Can last 25+ years with proper care |
| **Bone preservation** | Stimulates the jawbone, preventing resorption |
| **Natural aesthetics** | Custom-matched to surrounding teeth |
| **High success rate** | 95–98 % reported in clinical literature |
| **No dietary restrictions** | Eat all the foods you love |

## Kindway BioReZens Implant Systems

Our implant range is engineered with **micro-grooved SLA surfaces** for accelerated osseointegration, internal hex connections for a precise prosthetic fit, and a comprehensive kit of surgical instruments. All products carry CE and ISO 13485 certifications.

> "The Kindway implant system gives us predictable results even in challenging bone conditions." — *Dr. Amrit Kaur, MDS Prosthodontics*
    `,
  },

  'importance-of-bone-grafts': {
    slug: 'importance-of-bone-grafts',
    title: 'Why Bone Grafts Are Crucial for Implant Success',
    description:
      'Bone grafting rebuilds the foundation for dental implants. Learn about the different types — xenografts, allografts, and synthetics — and why they matter.',
    image: '/images/bg2.jpg',
    date: 'May 10, 2025',
    category: 'Clinical Insights',
    readTime: '7 min read',
    content: `
## The Problem: Bone Loss After Tooth Extraction

When a tooth is lost or extracted, the surrounding alveolar bone begins to resorb. Studies show that up to **50 % of ridge width** can be lost within the first 12 months. Without adequate bone, placing a dental implant becomes difficult — or impossible.

## What Is Bone Grafting?

Bone grafting is a surgical procedure that replaces missing bone with a graft material. The material acts as a scaffold, encouraging the body's own cells to regenerate new bone tissue over time.

## Types of Bone Graft Materials

### Xenograft (Bovine-Derived)
Derived from processed bovine bone, xenografts offer excellent osteoconductive properties and slow resorption rates — ideal for ridge preservation and sinus lifts. Kindway BioReZens' xenograft granules are deproteinised and gamma-sterilised for maximum safety.

### Alloplastic (Synthetic)
Hydroxyapatite (HA) and β-tricalcium phosphate (β-TCP) ceramics mimic natural bone mineral. They are 100 % synthetic, eliminating any risk of disease transmission, and are available in various particle sizes for different clinical scenarios.

### Allograft (Human-Derived)
Processed from donor human bone tissue, allografts combine osteoconductive and osteoinductive properties. They are most commonly supplied as demineralised bone matrix (DBM).

### Autograft (Patient's Own Bone)
Harvested from the patient's own body (e.g., chin, ramus, or iliac crest), autografts are the gold standard because they contain living cells. However, they require a second surgical site, increasing morbidity.

## When Is Bone Grafting Needed?

- **Socket preservation** — immediately after extraction to maintain ridge volume
- **Ridge augmentation** — before implant placement in a resorbed ridge
- **Sinus lift** — to increase bone height in the posterior maxilla
- **Peri-implant defect repair** — to address bone loss around existing implants

## Clinical Success Rates

Guided bone regeneration (GBR) with barrier membranes and particulate grafts reports success rates of **90–97 %** in peer-reviewed literature, making it one of the most predictable procedures in modern implant dentistry.

## Kindway BioReZens Bone Graft Products

Our complete bone graft portfolio includes:

- **KindGraft Xeno** — Bovine xenograft (0.25–1 mm & 1–2 mm granules)
- **KindGraft Syn** — Biphasic calcium phosphate (HA/β-TCP 60:40)
- **Resorbable collagen membranes** for GBR procedures

All products are manufactured under ISO 13485 and carry CE certification.
    `,
  },

  'top-tips-implant-surgery-planning': {
    slug: 'top-tips-implant-surgery-planning',
    title: '5 Tips Every Dentist Should Know Before Implant Surgery',
    description:
      'Practical tips for predictable implant outcomes — from 3D imaging to prosthetic-driven planning.',
    image: '/images/b1.jpg',
    date: 'Apr 28, 2025',
    category: 'Clinical Insights',
    readTime: '5 min read',
    content: `
## 1. Always Start With a CBCT Scan

Two-dimensional panoramic radiographs are not sufficient for implant planning. A cone-beam computed tomography (CBCT) scan provides 3D information about bone volume, density, vital structures, and pathology that can change your treatment plan entirely.

## 2. Think Prosthetically First

The final restoration should dictate the implant position — not the other way around. Use a diagnostic wax-up or digital smile design to determine ideal tooth position, then work backwards to plan the surgical site.

## 3. Evaluate Bone Quality, Not Just Quantity

Adequate ridge width and height are important, but so is bone density. Type IV bone (very soft) may require under-sized drilling protocols and longer healing times. Pre-operative assessment prevents surprises in the operating room.

## 4. Master Soft-Tissue Management

A beautiful implant crown requires healthy, well-contoured soft tissue. Use proper flap design, consider connective tissue grafts in the aesthetic zone, and choose an implant system with platform switching to preserve crestal bone and soft-tissue height.

## 5. Invest in Hands-On Training

Reading about implants is not the same as placing them. Enrol in a structured hands-on workshop — like the ones Kindway BioReZens conducts monthly — where you can practice on models and eventually on patients under expert supervision.

---

**Ready to level up your implant skills?** [Register for our next workshop →](/training)
    `,
  },

  'workshop-case-study-varanasi': {
    slug: 'workshop-case-study-varanasi',
    title: 'Case Study: Transforming Rural Smiles Through Mobile Clinics',
    description:
      'How Kindway BioReZens partnered with local health authorities to bring dental care to 200+ villages across Uttar Pradesh.',
    image: '/images/cam3.jpg',
    date: 'Apr 15, 2025',
    category: 'Outreach',
    readTime: '8 min read',
    content: `
## The Challenge

Rural India faces a massive oral-health crisis. According to the National Oral Health Programme, the dentist-to-population ratio in rural areas can be as low as **1:300,000** — compared to the WHO recommendation of 1:7,500. Most villages have zero access to professional dental care.

## Our Approach

Kindway BioReZens launched its Mobile Dental Clinic programme with a clear mission: **bring the clinic to the community, not the other way around.**

### Phase 1 — Community Engagement
Local health workers and village leaders were trained as oral health ambassadors. Their role: educate families on basic oral hygiene and identify individuals in urgent need of treatment.

### Phase 2 — Free Dental Camps
Fully equipped mobile units — staffed by volunteer dentists, dental students, and Kindway team members — visited villages on a rotating schedule. Each camp offered:

- Comprehensive oral screening
- Scaling and polishing
- Extractions when indicated
- Referrals for complex cases
- Free oral-hygiene kits (toothbrush, toothpaste, floss)

### Phase 3 — Follow-Up & Tracking
A simple digital follow-up system ensured patients requiring further treatment were contacted and referred to nearby dental colleges or district hospitals.

## Impact by the Numbers

| Metric | Total (Cumulative) |
|---|---|
| Dental camps conducted | **1,145+** |
| Patients screened | **50,000+** |
| Villages covered | **200+** |
| Volunteer dentists mobilised | **500+** |
| Oral-hygiene kits distributed | **30,000+** |

## Patient Stories

> "I had been living with tooth pain for two years because the nearest dentist was 60 km away. The Kindway camp came to our village and treated me for free. I'm grateful." — *Ram Lakhan, Chandauli*

> "My daughter was embarrassed to smile because of her broken front tooth. The camp dentist extracted the root and fitted her with a temporary prosthesis. She's been smiling ever since." — *Sunita Devi, Jaunpur*

## What's Next

In 2025, Kindway BioReZens plans to:

- Expand mobile clinics to **5 new districts** in Uttar Pradesh
- Integrate a tele-dentistry module for remote consultations
- Launch a school oral-health programme targeting 500+ government schools

---

**Want to partner with us or volunteer?** [Get in touch →](/contact)
    `,
  },

  'choosing-right-implant-system': {
    slug: 'choosing-right-implant-system',
    title: 'How to Choose the Right Dental Implant System for Your Practice',
    description:
      'A decision-making framework for dentists evaluating implant systems — surface treatments, connections, kits, and support.',
    image: '/images/b3.jpg',
    date: 'Mar 30, 2025',
    category: 'Clinical Insights',
    readTime: '6 min read',
    content: `
## The Implant Market Landscape

There are over 200 implant brands globally, ranging from premium systems (Straumann, Nobel Biocare) to value-oriented options. For a growing practice, the right system balances **clinical quality, cost-effectiveness, and manufacturer support**.

## Key Factors to Evaluate

### 1. Surface Treatment
Modern surfaces like SLA (sandblasted, large-grit, acid-etched) and micro-grooved textures accelerate osseointegration. Look for peer-reviewed evidence supporting the surface technology.

### 2. Connection Type
- **Internal hex** — Most popular; offers excellent anti-rotational stability and ease of use.
- **Conical (Morse taper)** — Provides a cold-weld seal, reducing micro-leakage and crestal bone loss.
- **External hex** — Legacy design, still used but less popular in new systems.

### 3. Prosthetic Portfolio
Ensure the system offers a wide range of abutments (straight, angled, multi-unit, custom), healing caps, scan bodies for digital workflows, and temporary components.

### 4. Surgical Kit Quality
A well-organised, intuitive surgical kit saves chair time. Look for colour-coded drills, depth stops, and torque-indicating ratchets.

### 5. Manufacturer Support & Training
The best implant companies invest in clinician education. Kindway BioReZens, for example, offers monthly hands-on workshops, digital planning masterclasses, and 24/7 clinical support.

## Price vs. Value

A₹ 2,000 implant that fails in 3 years is more expensive than a ₹ 5,000 implant that lasts 20. Evaluate the **total cost of ownership**: implant + prosthetic components + potential re-treatment + opportunity cost.

## Why Practices Choose Kindway BioReZens

- **Competitive pricing** without compromising on material science
- **Comprehensive kit** with all surgical and prosthetic components
- **CE & ISO 13485** certified manufacturing
- **Dedicated training** with 1,500+ workshops conducted
- **Made in India** — reducing supply chain complexities

---

**Explore our implant range →** [Products](/products/dental-implants)
    `,
  },

  'dental-outreach-impact-2024': {
    slug: 'dental-outreach-impact-2024',
    title: '2024 Dental Outreach Report: 1,145 Camps & Counting',
    description:
      'Annual review of Kindway BioReZens\' community dental programs — milestones, stories, and 2025 roadmap.',
    image: '/images/cam6.jpg',
    date: 'Mar 12, 2025',
    category: 'Outreach',
    readTime: '9 min read',
    content: `
## A Year of Impact

2024 was a landmark year for Kindway BioReZens' community outreach division. What began as small-scale dental camps in Varanasi has grown into one of the largest private-sector oral health initiatives in Uttar Pradesh.

## Key Milestones

- **1,145 dental camps** conducted across rural and semi-urban areas
- **50,000+ patients** screened and treated
- **500+ volunteer dentists** participated
- **200+ villages** serviced by mobile dental units
- **30,000+ oral hygiene kits** distributed

## Programme Highlights

### School Dental Health Drive
We partnered with 120 government primary schools to conduct dental screenings and oral hygiene workshops for children aged 6–14. Early intervention at this age can prevent a lifetime of dental problems.

### Women's Health Camps
Special camps focused on maternal oral health were organized in collaboration with ASHA workers. Pregnant women received free dental check-ups and counselling on the link between periodontal disease and adverse pregnancy outcomes.

### Elder Care Outreach
Dedicated geriatric dental camps addressed the high prevalence of edentulism (complete tooth loss) in the elderly. Patients were assessed for dentures, and those eligible received them free of cost.

## Challenges We Overcame

- **Logistics** — Navigating unpaved roads in monsoon season to reach the most remote villages
- **Fear & stigma** — Many first-time patients had never seen a dentist; building trust took patience
- **Limited follow-up infrastructure** — We introduced a WhatsApp-based follow-up system to stay connected with patients

## 2025 Roadmap

| Initiative | Target |
|---|---|
| Expand to 5 new districts | Mirzapur, Ghazipur, Ballia, Jaunpur, Sonbhadra |
| School oral health programme | 500+ government schools |
| Tele-dentistry pilot | Remote consultations for post-treatment follow-up |
| Volunteer network | 1,000+ dentists by Dec 2025 |
| Research publications | 3 peer-reviewed papers on outreach outcomes |

## How You Can Help

- **Volunteer** as a dentist or dental student at upcoming camps
- **Donate** oral-hygiene supplies or fund a camp (₹15,000 per camp)
- **Partner** with us if you represent an NGO, hospital, or government body

---

**Join the mission →** [Contact Us](/contact)
    `,
  },
};

/* ── Generate static params ────────────────── */
export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

/* ── Metadata ──────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.title,
    description: article.description,
    openGraph: { title: article.title, description: article.description, images: [article.image] },
  };
}

/* ── Simple markdown-ish → JSX renderer ──────── */
function renderContent(md: string) {
  // Split into blocks
  const blocks = md.trim().split(/\n\n+/);
  const elements: React.ReactElement[] = [];

  let tableRows: string[][] = [];
  let inTable = false;

  const flushTable = () => {
    if (tableRows.length < 2) return;
    const headers = tableRows[0];
    const body = tableRows.slice(1).filter((r) => !r.every((c) => /^[\-|:\s]+$/.test(c)));
    elements.push(
      <div key={`tbl-${elements.length}`} className="overflow-x-auto my-6">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="text-left py-2 px-4 bg-gray-100 font-bold text-foreground rounded-t-lg" dangerouslySetInnerHTML={{ __html: inlineFormat(h) }} />
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} className="border-b border-gray-100">
                {row.map((cell, ci) => (
                  <td key={ci} className="py-2 px-4 text-muted" dangerouslySetInnerHTML={{ __html: inlineFormat(cell) }} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  };

  for (const block of blocks) {
    const trimmed = block.trim();

    // Table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      inTable = true;
      const cells = trimmed.split('|').slice(1, -1).map((c) => c.trim());
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      elements.push(<h4 key={elements.length} className="text-lg font-bold text-foreground mt-8 mb-3" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(4)) }} />);
    } else if (trimmed.startsWith('## ')) {
      elements.push(<h3 key={elements.length} className="text-2xl font-bold text-foreground mt-10 mb-4" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(3)) }} />);
    } else if (trimmed.startsWith('> ')) {
      elements.push(
        <blockquote key={elements.length} className="border-l-4 border-primary pl-5 italic text-muted my-6" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(2)) }} />
      );
    } else if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').map((l) => l.replace(/^- /, ''));
      elements.push(
        <ul key={elements.length} className="list-disc list-inside space-y-2 text-muted my-4">
          {items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(it) }} />
          ))}
        </ul>
      );
    } else if (trimmed === '---') {
      elements.push(<hr key={elements.length} className="my-8 border-gray-200" />);
    } else {
      elements.push(<p key={elements.length} className="text-muted leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }} />);
    }
  }
  if (inTable) flushTable();
  return elements;
}

function inlineFormat(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary underline hover:text-primary-dark">$1</a>');
}

/* ── Page ──────────────────────────────────── */
export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const related = Object.values(articles)
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px]">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{article.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">{article.title}</h1>
            <p className="text-white/80 text-sm">{article.date} · {article.readTime}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 lg:py-24">
        <AnimateOnScroll>
          <div className="prose-custom">{renderContent(article.content)}</div>
        </AnimateOnScroll>

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-foreground mb-3">Share this article</p>
          <div className="flex gap-3">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent('https://kindwaybio.com/blog/' + article.slug)}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gray-100 text-muted text-sm hover:bg-primary hover:text-white transition-colors">Twitter / X</a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://kindwaybio.com/blog/' + article.slug)}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gray-100 text-muted text-sm hover:bg-primary hover:text-white transition-colors">LinkedIn</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' — https://kindwaybio.com/blog/' + article.slug)}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gray-100 text-muted text-sm hover:bg-green-500 hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl shadow-md overflow-hidden card-hover block">
                <div className="relative h-44 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-muted">{post.date} · {post.readTime}</span>
                  <h3 className="text-base font-bold text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
