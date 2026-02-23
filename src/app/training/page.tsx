import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaCalendarAlt, FaDownload, FaUserMd, FaCertificate } from 'react-icons/fa';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import StatsCounter from '@/components/StatsCounter';

export const metadata: Metadata = {
  title: 'Training & Workshops',
  description: 'Dental implant training workshops, clinical courses, and hands-on surgical sessions by Kindway BioReZens. Register now for comprehensive implantology education.',
  keywords: ['dental implants training', 'dental workshop', 'implantology course', 'hands-on surgical training', 'dental education'],
};

const upcomingEvents = [
  { date: 'Jul 15-17, 2026', title: 'Dental Implantology Workshop: Diagnosis to Execution', location: 'Varanasi', spots: 12, type: 'Workshop' },
  { date: 'Aug 5-6, 2026', title: 'Bone Graft & Tissue Augmentation Masterclass', location: 'Varanasi', spots: 8, type: 'Masterclass' },
  { date: 'Sep 20-22, 2026', title: 'Advanced Implant Surgery: Complex Cases', location: 'Delhi', spots: 10, type: 'Advanced' },
  { date: 'Oct 1-3, 2026', title: 'Comprehensive Implantology Certificate Course', location: 'Varanasi', spots: 15, type: 'Course' },
  { date: 'Nov 12-13, 2026', title: 'Live Surgical Demonstration & Hands-On Practice', location: 'Varanasi', spots: 20, type: 'Demo' },
  { date: 'Dec 5-7, 2026', title: 'Year-End Dental Innovation Summit', location: 'Mumbai', spots: 50, type: 'Summit' },
];

export default function TrainingPage() {
  return (
    <>
      <PageBanner
        title="Training & Workshops"
        subtitle="Empowering dental professionals with practical skills and confidence"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Training & Workshops' }]}
      />

      {/* Workshop Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kindway BioReZens</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Workshop on Dental Implantology: From Diagnosis & Planning to Execution</h2>
              <p className="text-muted leading-relaxed mb-4">Dental implants are today&apos;s gold standard for replacing missing teeth. However, many clinicians hesitate to integrate implantology due to lack of exposure to proper diagnosis, treatment planning, and surgical execution.</p>
              <p className="text-muted leading-relaxed mb-6">This intensive workshop provides comprehensive understanding of implantology — from fundamentals to live surgical demonstration — enabling confident incorporation of implants into clinical practice.</p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfn-3ipARVcitwERkEnyy-zjfuojuprZM9u7cQS1U98Ow4V0w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all shadow-lg text-center"
                >
                  Register Now <FaArrowRight />
                </a>
                <a href="/doc/dentalbrochure.pdf" className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-bold rounded-full hover:opacity-90 transition-all shadow-md">
                  <FaDownload /> Brochure
                </a>
                <a href="/doc/syllabus.pdf" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                  <FaDownload /> Syllabus
                </a>
              </div>

              <div className="p-4 bg-surface rounded-xl">
                <p className="text-sm text-muted mb-2">Scan QR code for registration:</p>
                <Image src="/images/qrform.jpeg" alt="Registration QR Code" width={160} height={160} className="rounded-lg" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <Image src="/images/training.jpg" alt="Training Workshop" width={600} height={500} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <Image src="/images/ex2.jpg" alt="Training and Education" width={600} height={400} className="rounded-2xl shadow-xl object-cover w-full" />
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-in-right">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">What Sets Us Apart</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Comprehensive Learning Experience</h2>
              <p className="text-muted leading-relaxed mb-6">Our programs bridge the gap between theory and practice. We invest in dental professionals by offering advanced, practice-oriented training tailored to real-world clinical needs.</p>
              <ul className="space-y-4">
                {[
                  'Expert-led lectures building strong theoretical understanding',
                  'Live clinical demonstrations and case discussions',
                  'Hands-on practice on models, typodonts, and guided procedures',
                  'Observe and assist in live patient treatments',
                  'Skill-building modules: diagnostics, surgery, prosthetics, post-op care',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1 shrink-0" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mentorship & Upskilling */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaUserMd, title: 'Mentorship From Leaders', desc: 'Under guidance of experienced faculty and industry experts, learn modern techniques, treatment planning, and complication management with personalized mentorship.' },
              { icon: FaCertificate, title: 'Upskilling for Every Stage', desc: 'Whether beginner or advanced clinician, our programs support every phase of professional growth — ensuring knowledge translates to practice and patient care.' },
              { icon: FaCalendarAlt, title: 'Flexible Scheduling', desc: 'Weekend workshops, intensive courses, and extended programs designed to fit your busy clinical schedule. Multiple batch options available.' },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover text-center h-full">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5">
                    <item.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Event Calendar */}
      <section id="register" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Upcoming Events</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Event Calendar</h2>
            <div className="section-divider mb-6" />
            <p className="text-muted max-w-2xl mx-auto">Browse our upcoming workshops, courses, and events. Registration is limited — book your slot today!</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                      <FaCalendarAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{event.type}</span>
                      <p className="text-sm text-muted mt-1">{event.date}</p>
                      <p className="text-xs text-muted">{event.location}</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 flex-1">{event.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{event.spots} spots remaining</p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfn-3ipARVcitwERkEnyy-zjfuojuprZM9u7cQS1U98Ow4V0w/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-4 py-2.5 gradient-primary rounded-full hover:opacity-90 transition-all w-full"
                  >
                    Book Your Slot Today <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Register Now</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Workshop Registration</h2>
            <div className="section-divider mb-6" />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="reg-name" className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <input type="text" id="reg-name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Dr. Your Name" />
                  </div>
                  <div>
                    <label htmlFor="reg-email" className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                    <input type="email" id="reg-email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="reg-phone" className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                    <input type="tel" id="reg-phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label htmlFor="reg-qualification" className="block text-sm font-semibold text-foreground mb-2">Qualification</label>
                    <select id="reg-qualification" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                      <option value="">Select qualification</option>
                      <option value="bds">BDS</option>
                      <option value="mds">MDS</option>
                      <option value="phd">PhD</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="reg-workshop" className="block text-sm font-semibold text-foreground mb-2">Select Workshop *</label>
                  <select id="reg-workshop" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                    <option value="">Choose a workshop</option>
                    {upcomingEvents.map((e, i) => (
                      <option key={i} value={e.title}>{e.title} — {e.date}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="reg-message" className="block text-sm font-semibold text-foreground mb-2">Additional Message</label>
                  <textarea id="reg-message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Any specific topics or questions..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 gradient-primary text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg text-lg">
                  Register for Workshop
                </button>
                <p className="text-xs text-muted text-center">You can also register via our <a href="https://docs.google.com/forms/d/e/1FAIpQLSfn-3ipARVcitwERkEnyy-zjfuojuprZM9u7cQS1U98Ow4V0w/viewform" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Form</a></p>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Training Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Workshop Moments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Training Gallery</h2>
            <div className="section-divider" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg', 'b6.jpg', 'ex1.jpg', 'ex2.jpg'].map((img, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="img-zoom-container rounded-xl shadow-md aspect-square">
                  <Image src={`/images/${img}`} alt="Training" width={300} height={300} className="w-full h-full object-cover" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
