import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Dental Implants',
  description: 'High-performance dental implants by Kindway BioReZens — precision-engineered for superior osseointegration, long-term stability, and predictable clinical outcomes.',
  keywords: ['dental implants', 'titanium implants', 'dental implants training', 'implant surgery planning', 'osseointegration'],
};

export default function DentalImplantsPage() {
  return (
    <>
      <PageBanner
        title="Dental Implants"
        subtitle="Precision-engineered for superior clinical outcomes"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Dental Implants' }]}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <Image src="/images/bg2.jpg" alt="Dental Implants" width={600} height={450} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Flagship Product</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Advanced Dental Implants</h2>
              <p className="text-muted leading-relaxed mb-4">Our dental implants represent the pinnacle of engineering precision and biological understanding. Manufactured from Grade 5 Ti-6Al-4V alloy, each implant undergoes proprietary surface treatment to maximize osseointegration and long-term stability.</p>
              <p className="text-muted leading-relaxed mb-6">Designed to simplify surgical workflows while delivering predictable outcomes, our implant system is the choice of progressive clinicians who demand reliability without compromise.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md">
                Request Product Info <FaArrowRight />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* How Dental Implants Work - Educational */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Educational</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">How Dental Implants Work</h2>
            <div className="section-divider mb-6" />
            <p className="text-muted max-w-3xl mx-auto">Dental implants are artificial tooth roots placed into the jawbone to support replacement teeth. They provide a strong foundation for fixed or removable prostheses.</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive diagnostic evaluation including CBCT imaging and treatment planning for optimal implant positioning.' },
              { step: '02', title: 'Placement', desc: 'Precise surgical placement of the titanium implant into the jawbone using guided surgical protocols.' },
              { step: '03', title: 'Osseointegration', desc: 'The implant integrates with the bone over 3-6 months, creating a solid foundation for the prosthesis.' },
              { step: '04', title: 'Restoration', desc: 'Custom abutment and crown are placed, delivering natural-appearing, functional tooth replacement.' },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Features & Benefits</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Biocompatible Titanium', desc: 'Grade 5 Ti-6Al-4V alloy ensuring excellent biocompatibility and mechanical strength.' },
              { title: 'SLA Surface Treatment', desc: 'Sandblasted and acid-etched surface maximizing bone-to-implant contact area.' },
              { title: 'Multiple Configurations', desc: 'Various diameters, lengths, and platform options for diverse clinical scenarios.' },
              { title: 'High Primary Stability', desc: 'Optimized thread design ensuring excellent initial fixation even in softer bone.' },
              { title: 'Internal Hex Connection', desc: 'Precision-machined connection reducing micro-movements and ensuring long-term joint integrity.' },
              { title: 'Complete Prosthetic System', desc: 'Comprehensive range of abutments, impression components, and laboratory analogs.' },
            ].map((feature, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-hover">
                  <FaCheckCircle className="text-primary text-2xl mb-3" />
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Integrate Implants Into Your Practice?</h2>
          <p className="text-white/80 text-lg mb-8">Get product samples, pricing, and training information from our expert team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg">
              Contact Sales
            </Link>
            <Link href="/training" className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all shadow-lg">
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
