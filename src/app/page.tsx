import Image from 'next/image';
import Link from 'next/link';
import { FaUserMd, FaShieldAlt, FaGlobeAmericas, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import StatsCounter from '@/components/StatsCounter';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const heroSlides = [
  {
    title: 'Elevating Dental Excellence',
    text: 'Dedicated to empowering dental professionals with innovative solutions, cutting-edge products, and unwavering support.',
    image: '/images/bg2.jpg',
  },
  {
    title: 'Pioneering Products',
    text: 'High-performance dental implants, biomaterials, and advanced chairside solutions designed for superior reliability.',
    image: '/images/bg3.jpg',
  },
  {
    title: 'Training & Education',
    text: 'Continuous learning through workshops, live clinical demonstrations, and hands-on surgical sessions.',
    image: '/images/ex2.jpg',
  },
];

const services = [
  { icon: FaUserMd, title: 'Training & Education', text: 'Workshops, educational resources, and hands-on practice to empower dental professionals with the latest techniques.', href: '/training' },
  { icon: FaShieldAlt, title: 'Dental Camp Outreach', text: 'Mobile dental clinic initiatives bringing quality dental care to underserved and remote communities.', href: '/mobile-clinic' },
  { icon: FaGlobeAmericas, title: 'Global Reach', text: 'Serving dental practitioners worldwide, ensuring our products and services are accessible to all.', href: '/products' },
];

const recentActivities = [
  { image: '/images/b1.jpg', date: 'Dec 22, 2024', title: 'Dental Implant Training Workshop', text: 'Exclusive Dental Implant Training tailored solely for Dentists. Hands-on learning, expert guidance, and cutting-edge techniques.', href: '/training' },
  { image: '/images/b3.jpg', date: 'Jan 16-22, 2024', title: 'Tissue Augmentation Course', text: 'Advanced techniques, hands-on practice, and expert insights in tissue augmentation for dental professionals.', href: '/training' },
  { image: '/images/b6.jpg', date: 'Dec 22, 2024', title: 'Outreach Programs — Dental Camps', text: 'Informative sessions, screenings, and interactive activities focused on oral health education for the community.', href: '/mobile-clinic' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/bg2.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 via-secondary-dark/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Advancing Dental Healthcare
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Elevating <span className="text-accent">Dental</span> Excellence
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              At Kindway BioReZens, we empower dental professionals with innovative implants, biomaterials, world-class training, and community outreach — transforming smiles across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl text-lg">
                View Products <FaArrowRight />
              </Link>
              <Link href="/training#register" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm border border-white/20 text-lg">
                Book Training <FaCalendarAlt />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
              <Image
                src="/images/sirji.jpg"
                alt="Dental Professional"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 lg:py-0 lg:-mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <Link href={service.href} className="block bg-white rounded-2xl p-8 shadow-xl card-hover border border-gray-100">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted leading-relaxed">{service.text}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kindway BioReZens</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <h3 className="font-bold text-lg text-primary mb-2">Mission</h3>
                  <p className="text-muted leading-relaxed">We envision a future where healthcare products are not only cutting-edge but inherently sustainable — leading the medical manufacturing industry in developing innovative, biorenewable solutions for a healthier planet.</p>
                </div>
                <div className="p-6 bg-accent/5 rounded-xl border-l-4 border-accent">
                  <h3 className="font-bold text-lg text-accent-dark mb-2">Vision</h3>
                  <p className="text-muted leading-relaxed">To be at the forefront of transformative biorenewable technologies that redefine industries and contribute to a kinder, more sustainable world — fostering harmony between human progress and environmental well-being.</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <Image src="/images/sirji.jpg" alt="Dr. Rajesh Bansal" width={600} height={500} className="relative rounded-2xl shadow-xl object-cover w-full" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Kindway BioReZens</h2>
            <div className="section-divider mb-6" />
            <p className="text-muted max-w-3xl mx-auto leading-relaxed">Driven by a mission to reshape dentistry through innovation, accessibility, and compassionate care — designing advanced, reliable, and affordable dental solutions meeting global standards.</p>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <Image src="/images/b3.jpg" alt="Kindway products" width={600} height={400} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <div className="space-y-6">
                {[
                  { title: 'Pioneering Products', text: 'High-performance dental implants, biomaterials, and chairside solutions with rigorous quality validation for optimal biocompatibility.' },
                  { title: 'Expert Team', text: 'Skilled dental professionals and material scientists delivering unparalleled expertise with deep clinical insight and industry knowledge.' },
                  { title: 'Continuous Training', text: 'Practice-oriented programs bridging the gap between theory and practice, equipping clinicians with evidence-based techniques.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
                <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md mt-4">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <Image src="/images/bg2.jpg" alt="Dental Products" width={600} height={400} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">What Sets Us Apart</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Pioneering Products</h2>
              <p className="text-muted leading-relaxed mb-6">We engineer high-performance dental implants, biomaterials, and advanced chairside solutions designed for superior functionality, reliability, and patient comfort — all at attainable prices. Every product undergoes rigorous testing for optimal biological compatibility and long-term clinical stability.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md">
                  View Product Catalogue <FaArrowRight />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                  Contact Sales
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">What Sets Us Apart</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Expertise & Training</h2>
              <p className="text-muted leading-relaxed mb-4">Powered by highly skilled dental professionals and material scientists, we bring unparalleled expertise. Whether it&apos;s product innovation, clinical training, or practice support — we stand beside you.</p>
              <p className="text-muted leading-relaxed mb-6">Excellence in dentistry is built on continuous learning. Our programs bridge the gap between theory and practice, equipping clinicians with confidence, skill, and evidence-based techniques.</p>
              <Link href="/training" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all shadow-md">
                Explore Training Programs <FaArrowRight />
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <Image src="/images/ex1.jpg" alt="Expertise" width={300} height={300} className="rounded-2xl shadow-lg object-cover w-full aspect-square" />
                <Image src="/images/ex2.jpg" alt="Training" width={300} height={300} className="rounded-2xl shadow-lg object-cover w-full aspect-square mt-8" />
                <Image src="/images/ex3.jpg" alt="Global Reach" width={300} height={300} className="rounded-2xl shadow-lg object-cover w-full aspect-square -mt-8" />
                <Image src="/images/b1.jpg" alt="Workshop" width={300} height={300} className="rounded-2xl shadow-lg object-cover w-full aspect-square" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">What Dental Professionals Say</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Aarav Sharma', role: 'Prosthodontist, Delhi', text: 'The implant training workshop was transformative. The hands-on sessions and live demonstrations gave me confidence to integrate implantology into my daily practice.' },
              { name: 'Dr. Priya Mehta', role: 'General Dentist, Mumbai', text: 'Kindway\'s bone graft materials deliver consistent, predictable results. The quality rivals international brands at a fraction of the cost. Truly made in India excellence.' },
              { name: 'Dr. Vikram Patel', role: 'Periodontist, Varanasi', text: 'From product quality to training support, Kindway goes above and beyond. Their mobile clinic outreach program is inspirational — real impact in underserved communities.' },
            ].map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-accent text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted">{t.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kindway</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Recent Activities</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {recentActivities.map((activity, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                  <div className="img-zoom-container aspect-[4/3]">
                    <Image src={activity.image} alt={activity.title} width={400} height={300} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted mb-3">
                      <FaCalendarAlt className="text-primary" />
                      <span>{activity.date}</span>
                      <span className="mx-1">•</span>
                      <span className="text-primary font-medium">Kindway BioReZens</span>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{activity.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{activity.text}</p>
                    <Link href={activity.href} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                      Read More <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Upcoming</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Event Calendar</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { date: 'Jul 15-17, 2026', title: 'Dental Implant Workshop — Varanasi', type: 'Workshop', spots: '12 spots left' },
              { date: 'Aug 5-6, 2026', title: 'Bone Graft Techniques Masterclass', type: 'Training', spots: '8 spots left' },
              { date: 'Sep 10, 2026', title: 'Mobile Dental Camp — Rural Outreach', type: 'Outreach', spots: 'Volunteers welcome' },
              { date: 'Oct 1-3, 2026', title: 'Advanced Implantology Course', type: 'Course', spots: '15 spots left' },
              { date: 'Nov 12, 2026', title: 'Live Surgical Demonstration', type: 'Demo', spots: '20 spots left' },
              { date: 'Dec 5-7, 2026', title: 'Annual Dental Innovation Summit', type: 'Summit', spots: 'Open registration' },
            ].map((event, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <FaCalendarAlt className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{event.type}</span>
                      <p className="text-sm text-muted mt-0.5">{event.date}</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{event.spots}</p>
                  <Link href="/training#register" className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 gradient-primary rounded-full hover:opacity-90 transition-all">
                    Register Now <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
