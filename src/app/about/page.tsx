import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Kindway BioReZens — our mission, vision, team, and commitment to advancing dental care through innovation, accessibility, and compassionate service.',
};

const executiveTeam = [
  { name: 'Dr. Rajesh Bansal', role: 'Founder Director (MDS, PhD)', image: '/images/t1.jpg' },
  { name: 'Prof. D. D. N. Singh', role: 'M.Sc, PhD', image: '/images/t6.jpg' },
  { name: 'Prof. Vakil Singh', role: 'M.Sc, PhD', image: '/images/t7.jpg' },
  { name: 'Prof. Monika Bansal', role: 'MDS, PhD (Periodontist)', image: '/images/t8.jpg' },
];

const team = [
  { name: 'Mr. Dinesh Kumar', role: 'Founder & Chartered Accountant', image: '/images/t2.jpg' },
  { name: 'Mr. P. Vishwakarma', role: 'CNC Operator', image: '/images/t3.jpg' },
  { name: 'Mr. Anshu Pandey', role: 'Assistant & CNC Operator', image: '/images/t4.jpg' },
  { name: 'Dr. Robin Kr. Chaube', role: 'Dental Officer', image: '/images/robin.jpg' },
  { name: 'Dr. Sourav Kr. Vishwakarma', role: 'Graft R&D Officer', image: '/images/sourav.jpg' },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Driven by innovation, accessibility, and compassionate care"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Kindway BioReZens</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>At Kindway BioReZens, we are driven by a mission to reshape the future of dentistry through innovation, accessibility, and compassionate care. As a pioneering startup in dental manufacturing and healthcare services, we design and produce advanced, reliable, and affordable dental implants, biomaterials, and devices that meet global standards of safety and performance.</p>
                <p>We are committed to delivering world-class dental treatment at accessible and ethical pricing, ensuring every patient receives the highest level of care without compromise.</p>
                <p>Through comprehensive training programs, live clinical workshops, and hands-on surgical sessions, we empower dental professionals at every stage — from foundational learners to advanced clinicians.</p>
                <p>We actively reach underserved communities through our mobile dental clinic outreach initiatives, closing gaps in oral healthcare access.</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">Innovation</span>
                <span className="px-4 py-2 bg-accent/10 text-accent-dark font-semibold rounded-full text-sm">Accessibility</span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm">Education</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-full text-sm">Compassion</span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <Image src="/images/b3.jpg" alt="About Kindway" width={600} height={500} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <Image src="/images/b1.jpg" alt="Our Story" width={600} height={500} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Kindway BioReZens</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>Kindway BioReZens was founded with a simple yet powerful belief — dentistry deserves innovation that is both cutting-edge and accessible. We are more than a company; we are a mission-driven team dedicated to advancing dental care through precision engineering, quality manufacturing, and meaningful innovation.</p>
                <p>As a growing dental-technology startup, we are committed to revolutionizing the industry by creating patient-focused, affordable, and high-performance solutions rooted in improving quality of life for patients while empowering dental professionals.</p>
                <p>From advanced implants and biomaterials to reliable dental devices, every product reflects our unwavering commitment to safety, performance, and long-term reliability. Guided by research, clinical insight, and passion for innovation, we push the boundaries of dental technology.</p>
                <p className="font-semibold text-foreground">At Kindway BioReZens, we are building the future of dentistry — one breakthrough, one clinic, and one confident smile at a time.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Executive Team & Advisors</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover text-center">
                  <div className="img-zoom-container aspect-square">
                    <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                    <p className="text-muted text-sm mt-1">{member.role}</p>
                    <div className="flex justify-center gap-2 mt-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <FaFacebookF className="text-xs" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <FaTwitter className="text-xs" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <FaLinkedinIn className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Team Members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {team.map((member, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover text-center">
                  <div className="img-zoom-container aspect-square">
                    <Image src={member.image} alt={member.name} width={250} height={250} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                    <p className="text-muted text-xs mt-1">{member.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-white/80 text-lg mb-8">Partner with us to advance dental care through innovation, education, and community outreach.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg">
              Get In Touch <FaArrowRight className="inline ml-2" />
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
