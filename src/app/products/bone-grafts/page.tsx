import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Bone Graft Materials',
  description: 'High-quality bone graft materials by Kindway BioReZens — biocompatible solutions for guided bone regeneration, ridge augmentation, and implant site development.',
  keywords: ['bone graft materials', 'bone grafts in implant success', 'guided bone regeneration', 'xenograft', 'synthetic bone graft'],
};

export default function BoneGraftsPage() {
  return (
    <>
      <PageBanner
        title="Bone Graft Materials"
        subtitle="Biocompatible solutions for predictable bone regeneration"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Bone Grafts' }]}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Regenerative Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Advanced Bone Graft Materials</h2>
              <p className="text-muted leading-relaxed mb-4">Our bone graft materials are designed to support bone regeneration and augmentation procedures, enabling successful implant placement in compromised sites. We offer both xenograft and synthetic options to meet diverse clinical needs.</p>
              <p className="text-muted leading-relaxed mb-6">Each product is manufactured under strict quality controls and optimized for particle size, porosity, and resorption rate to ensure predictable, reproducible clinical outcomes.</p>
              <ul className="space-y-3 mb-8">
                {['Optimal osteoconductivity', 'Predictable resorption kinetics', 'Maintains graft volume', 'Easy handling and placement'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary shrink-0" />
                    <span className="text-foreground font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md">
                Request Samples <FaArrowRight />
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <Image src="/images/ex1.jpg" alt="Bone Graft Materials" width={600} height={450} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Importance Educational Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Clinical Education</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Importance of Bone Grafts in Implant Success</h2>
            <div className="section-divider mb-6" />
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <div className="space-y-6">
                <p className="text-muted leading-relaxed">Bone grafting is a critical procedure in implant dentistry. When a patient has insufficient bone volume due to tooth loss, trauma, or periodontal disease, bone grafts provide the scaffolding needed for new bone formation.</p>
                <div className="p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <h3 className="font-bold text-lg text-primary mb-2">Why Bone Grafting Matters</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Restores bone volume for successful implant placement</li>
                    <li>• Prevents further bone resorption after tooth extraction</li>
                    <li>• Creates optimal conditions for osseointegration</li>
                    <li>• Enables treatment in previously contraindicated cases</li>
                  </ul>
                </div>
                <div className="p-6 bg-accent/5 rounded-xl border-l-4 border-accent">
                  <h3 className="font-bold text-lg text-accent-dark mb-2">Clinical Applications</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Socket preservation after extraction</li>
                    <li>• Ridge augmentation procedures</li>
                    <li>• Sinus floor elevation</li>
                    <li>• Peri-implant bone defect repair</li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <Image src="/images/ex3.jpg" alt="Bone grafting procedure" width={600} height={400} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Product Range</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Xenograft Bone Graft', desc: 'Natural bone mineral derived from bovine source, processed to remove organic matrix while maintaining the natural trabecular architecture. Excellent osteoconductive scaffold for guided bone regeneration.', features: ['Natural bone architecture', 'Slow resorption rate', 'Volume-stable', 'Proven clinical track record'] },
              { title: 'Synthetic Bone Graft', desc: 'Bioactive synthetic calcium phosphate material engineered for optimal porosity and controlled resorption. Provides consistent, lot-to-lot reproducible performance.', features: ['100% synthetic', 'No disease transmission risk', 'Controlled resorption', 'Bioactive surface'] },
            ].map((product, i) => (
              <AnimateOnScroll key={i} delay={i * 200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{product.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{product.desc}</p>
                  <ul className="space-y-3">
                    {product.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <FaCheckCircle className="text-primary shrink-0" />
                        <span className="text-foreground font-medium text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Our Bone Graft Materials?</h2>
          <p className="text-white/80 text-lg mb-8">Contact us for product samples, clinical data, and pricing information.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg">
              Contact Sales
            </Link>
            <Link href="/training" className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all shadow-lg">
              Learn Grafting Techniques
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
