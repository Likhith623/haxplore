import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Blog — Dental Insights & Education',
  description: 'Read expert articles on dental implants, bone grafts, implantology training, and community dental health from the Kindway BioReZens team.',
};

const posts = [
  {
    slug: 'how-dental-implants-work',
    title: 'How Dental Implants Work: A Complete Patient Guide',
    excerpt:
      'Dental implants are the gold standard for replacing missing teeth. Learn about the procedure, materials, timelines, and what to expect from start to finish.',
    image: '/images/ex1.jpg',
    date: 'May 18, 2025',
    category: 'Patient Education',
    readTime: '6 min read',
  },
  {
    slug: 'importance-of-bone-grafts',
    title: 'Why Bone Grafts Are Crucial for Implant Success',
    excerpt:
      'Insufficient bone density is one of the top reasons implants fail. Discover how modern bone graft materials — xenografts, allografts, and synthetics — rebuild the foundation for lasting results.',
    image: '/images/bg2.jpg',
    date: 'May 10, 2025',
    category: 'Clinical Insights',
    readTime: '7 min read',
  },
  {
    slug: 'top-tips-implant-surgery-planning',
    title: '5 Tips Every Dentist Should Know Before Implant Surgery',
    excerpt:
      'From CBCT imaging to prosthetic-driven planning, these five actionable tips will help you achieve predictable implant outcomes right from the treatment planning stage.',
    image: '/images/b1.jpg',
    date: 'Apr 28, 2025',
    category: 'Clinical Insights',
    readTime: '5 min read',
  },
  {
    slug: 'workshop-case-study-varanasi',
    title: 'Case Study: Transforming Rural Smiles Through Mobile Clinics',
    excerpt:
      'How Kindway BioReZens partnered with local health authorities to bring dental care to 200+ villages across Uttar Pradesh — the approach, challenges, and impact.',
    image: '/images/cam3.jpg',
    date: 'Apr 15, 2025',
    category: 'Outreach',
    readTime: '8 min read',
  },
  {
    slug: 'choosing-right-implant-system',
    title: 'How to Choose the Right Dental Implant System for Your Practice',
    excerpt:
      'With dozens of implant brands on the market, selecting the right system can be overwhelming. We break down the factors that matter — surface treatments, connections, and more.',
    image: '/images/b3.jpg',
    date: 'Mar 30, 2025',
    category: 'Clinical Insights',
    readTime: '6 min read',
  },
  {
    slug: 'dental-outreach-impact-2024',
    title: '2024 Dental Outreach Report: 1,145 Camps & Counting',
    excerpt:
      'An annual review of Kindway BioReZens\' community dental programs — the numbers, the stories, and the roadmap for 2025.',
    image: '/images/cam6.jpg',
    date: 'Mar 12, 2025',
    category: 'Outreach',
    readTime: '9 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog"
        subtitle="Expert insights on dental implantology, training, and outreach"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured */}
          <AnimateOnScroll>
            <Link href={`/blog/${posts[0].slug}`} className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden mb-16 card-hover">
              <div className="relative h-64 lg:h-auto">
                <Image src={posts[0].image} alt={posts[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">{posts[0].category}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs text-muted">{posts[0].date} · {posts[0].readTime}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4 group-hover:text-primary transition-colors">{posts[0].title}</h2>
                <p className="text-muted leading-relaxed mb-6">{posts[0].excerpt}</p>
                <span className="text-primary font-semibold inline-flex items-center gap-1">Read Article →</span>
              </div>
            </Link>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group bg-white rounded-2xl shadow-md overflow-hidden card-hover block h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-muted">{post.date} · {post.readTime}</span>
                    <h3 className="text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-muted text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="opacity-90 mb-8">Subscribe to our newsletter for the latest articles, workshop announcements, and product updates.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="Your email address" className="flex-1 px-5 py-3 rounded-full text-foreground outline-none focus:ring-2 focus:ring-accent" />
            <button type="submit" className="bg-accent hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-full transition-colors">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
