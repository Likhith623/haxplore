import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Kindway BioReZens high-performance dental implants, bone graft materials, biomaterials, and advanced chairside solutions designed for superior clinical outcomes.',
  keywords: ['dental implants', 'bone graft materials', 'biomaterials', 'dental products', 'chairside solutions'],
};

const products = [
  {
    title: 'Dental Implants',
    description: 'Precision-engineered titanium implants with optimized surface treatment for superior osseointegration, long-term stability, and predictable clinical outcomes.',
    image: '/images/bg2.jpg',
    href: '/products/dental-implants',
    features: ['Grade 5 Ti-6Al-4V Alloy', 'SLA Surface Treatment', 'Multiple Diameter Options', 'High Primary Stability'],
  },
  {
    title: 'Bone Graft Materials',
    description: 'Biocompatible bone graft solutions supporting guided bone regeneration for successful implant placement in compromised sites.',
    image: '/images/ex1.jpg',
    href: '/products/bone-grafts',
    features: ['Xenograft & Synthetic Options', 'Optimal Particle Size', 'Predictable Resorption', 'Enhanced Osteoconductivity'],
  },
];

const productGallery = [
  { image: '/images/b1.jpg', label: 'Implant System Kit' },
  { image: '/images/b2.jpg', label: 'Surgical Instruments' },
  { image: '/images/b3.jpg', label: 'Bone Graft Materials' },
  { image: '/images/b4.jpg', label: 'Prosthetic Components' },
  { image: '/images/b5.jpg', label: 'Training Models' },
  { image: '/images/b6.jpg', label: 'Clinical Accessories' },
];

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Our Products"
        subtitle="Precision. Reliability. Innovation — Crafted for Better Dentistry."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
      />

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kindway BioReZens</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Pioneering Dental Solutions</h2>
            <p className="text-muted leading-relaxed text-lg">We engineer and manufacture high-performance dental implants, biomaterials, and advanced chairside solutions designed for superior functionality, reliability, and patient comfort — all at attainable prices. Every product undergoes rigorous testing and quality validation.</p>
          </AnimateOnScroll>

          {/* Product Cards */}
          <div className="space-y-20">
            {products.map((product, i) => (
              <AnimateOnScroll key={i} animation={i % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                  <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                    <div className="img-zoom-container rounded-2xl shadow-xl">
                      <Image src={product.image} alt={product.title} width={600} height={400} className="w-full h-full object-cover aspect-[4/3]" />
                    </div>
                  </div>
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{product.title}</h3>
                    <p className="text-muted leading-relaxed mb-6">{product.description}</p>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <FaCheckCircle className="text-primary shrink-0" />
                          <span className="text-foreground font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={product.href} className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md">
                        Learn More <FaArrowRight />
                      </Link>
                      <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                        Contact Sales
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Product Range</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Product Gallery</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {productGallery.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="relative group rounded-2xl overflow-hidden shadow-lg card-hover">
                  <Image src={item.image} alt={item.label} width={400} height={300} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <p className="text-white font-bold p-4">{item.label}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Quality & Innovation</h2>
              <p className="text-muted leading-relaxed mb-4">From simplifying surgical workflows to enhancing restorative efficiency, our portfolio reflects a commitment to progress and a passion for improving lives.</p>
              <p className="text-muted leading-relaxed mb-6">By combining evidence-based design, advanced manufacturing, and a patient-centric perspective, we bring transformative dental technology within reach — empowering clinicians, restoring smiles, and redefining excellence in oral healthcare.</p>
              <div className="grid grid-cols-2 gap-4">
                {['ISO Certified', 'Biocompatible', 'Rigorously Tested', 'Global Standards'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-3 bg-primary/5 rounded-xl">
                    <FaCheckCircle className="text-primary" />
                    <span className="font-semibold text-sm text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <Image src="/images/ex3.jpg" alt="Quality" width={600} height={400} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Product Consultation?</h2>
          <p className="text-white/80 text-lg mb-8">Our team of experts is ready to help you choose the right products for your clinical practice.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg">
              Contact Sales Team
            </Link>
            <a href="https://wa.me/919198846529" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all shadow-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
