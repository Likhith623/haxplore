import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeartbeat, FaMapMarkerAlt, FaUsers, FaHandHoldingHeart, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Mobile Dental Clinic',
  description: 'Kindway BioReZens mobile dental clinic outreach — bringing quality dental care to underserved and remote communities across India.',
  keywords: ['dental outreach programs', 'mobile dental clinic', 'dental camp', 'community dental care', 'oral health outreach'],
};

export default function MobileClinicPage() {
  return (
    <>
      <PageBanner
        title="Mobile Dental Clinic"
        subtitle="Bringing quality dental care to underserved communities"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Mobile Dental Clinic' }]}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Social Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Dental Care for Everyone</h2>
              <p className="text-muted leading-relaxed mb-4">Extending our commitment to social responsibility, we actively reach underserved communities through our mobile dental clinic outreach initiatives. By bringing quality dental care directly to marginalized and remote populations, we aim to close gaps in oral healthcare access.</p>
              <p className="text-muted leading-relaxed mb-6">Our mobile clinic is equipped with modern diagnostic and treatment capabilities, allowing our team of experienced dental professionals to deliver comprehensive oral health services including screenings, preventive care, basic treatments, and referrals for advanced procedures.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md">
                  Request a Camp <FaArrowRight />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                  Volunteer With Us
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <Image src="/images/b6.jpg" alt="Mobile Dental Clinic" width={600} height={450} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Making a Difference</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FaHeartbeat, number: '1145+', label: 'Camps Organized', color: 'bg-primary' },
              { icon: FaUsers, number: '50,000+', label: 'Patients Served', color: 'bg-accent' },
              { icon: FaMapMarkerAlt, number: '200+', label: 'Villages Reached', color: 'bg-secondary' },
              { icon: FaHandHoldingHeart, number: '500+', label: 'Volunteers', color: 'bg-green-600' },
            ].map((stat, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover">
                  <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="text-white text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <p className="text-muted font-medium">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services at Our Mobile Camps</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Oral Health Screening', desc: 'Comprehensive dental check-ups and oral cancer screening for early detection and prevention.' },
              { title: 'Preventive Care', desc: 'Professional cleanings, fluoride applications, and dental sealants to prevent tooth decay.' },
              { title: 'Health Education', desc: 'Community-level oral hygiene education, brushing demonstrations, and awareness sessions.' },
              { title: 'Basic Treatments', desc: 'Tooth extractions, temporary fillings, and emergency dental care for pain relief.' },
              { title: 'Referral Services', desc: 'Identification and referral of complex cases for specialized treatment at partner clinics.' },
              { title: 'Free Dental Kits', desc: 'Distribution of toothbrushes, toothpaste, and oral hygiene kits to underserved families.' },
            ].map((service, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-hover h-full">
                  <FaCheckCircle className="text-primary text-2xl mb-3" />
                  <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Gallery */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">In The Field</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Outreach Gallery</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['cam1.jpg', 'cam2.jpg', 'cam3.jpg', 'cam4.jpg', 'cam5.jpg', 'cam6.jpg', 'cam7.jpg', 'cam8.jpg'].map((img, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="img-zoom-container rounded-xl shadow-md aspect-square">
                  <Image src={`/images/${img}`} alt="Dental Camp" width={300} height={300} className="w-full h-full object-cover" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Camps */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Upcoming Outreach Campaigns</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { date: 'Sep 10, 2026', title: 'Rural Dental Camp — Varanasi District', location: 'Rural villages, Varanasi' },
              { date: 'Oct 15, 2026', title: 'School Dental Awareness Drive', location: 'Government Schools, UP' },
              { date: 'Nov 20, 2026', title: 'Community Health Fair — Dental Wing', location: 'Community Center, Varanasi' },
            ].map((camp, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <FaHeartbeat className="text-green-600 text-xl" />
                  </div>
                  <p className="text-sm text-muted mb-1">{camp.date}</p>
                  <h3 className="font-bold text-foreground mb-2">{camp.title}</h3>
                  <p className="text-sm text-muted flex items-center gap-1 mb-4"><FaMapMarkerAlt className="text-primary" /> {camp.location}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full transition-all">
                    Volunteer / Attend
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Every Smile Matters</h2>
          <p className="text-white/80 text-lg mb-8">Join us in bringing dental care to those who need it most. Volunteer, sponsor, or partner with our mobile dental clinic program.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg">
              Get Involved
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
