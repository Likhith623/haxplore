import { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Kindway BioReZens for dental implants, bone grafts, training programs, and community outreach. Located in Varanasi, India.',
};

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: 'Phone',
    lines: ['+91-9151161267', '+91-91988 46529'],
    href: 'tel:+919151161267',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    lines: ['kindwaybiorezens@gmail.com'],
    href: 'mailto:kindwaybiorezens@gmail.com',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Head Office',
    lines: ['38, Balaji Colony, Samneghat', 'Varanasi-221005, UP'],
    href: 'https://maps.google.com/?q=25.304789,83.006029',
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sun: Closed'],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out anytime"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      />

      {/* Contact Cards */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center h-full">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  {item.lines.map((line, j) =>
                    item.href ? (
                      <a key={j} href={item.href} className="block text-muted hover:text-primary transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-muted text-sm">{line}</p>
                    )
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimateOnScroll animation="slide-in-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Send Us a Message</h2>
            <p className="text-muted mb-8">
              Have questions about our products, training workshops, or community programs? Fill out the form and our team
              will get back to you within 24 hours.
            </p>
            <form className="space-y-5" action="https://formsubmit.co/kindwaybiorezens@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Full Name *</label>
                  <input type="text" name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Email *</label>
                  <input type="email" name="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Phone</label>
                  <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Subject *</label>
                  <select name="subject" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all bg-white">
                    <option value="">Select a topic</option>
                    <option value="Products">Product Inquiry</option>
                    <option value="Training">Training & Workshops</option>
                    <option value="Outreach">Mobile Dental Clinic</option>
                    <option value="Partnership">Partnership / Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Message *</label>
                <textarea name="message" required rows={5} placeholder="Tell us how we can help…" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none" />
              </div>
              <button type="submit" className="gradient-primary text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-lg transition-all">
                Send Message
              </button>
            </form>
          </AnimateOnScroll>

          {/* Map + Quick Connect */}
          <AnimateOnScroll animation="slide-in-right" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Location</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="Kindway BioReZens Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0671025937246!2d83.00387531127367!3d25.304789277536994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31fbca421925%3A0xdd0677cebe2e5479!2s38%20balaji%20colony%2C%20samneghat!5e0!3m2!1sen!2sin!4v1748023001929!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Connect</h3>
              <p className="text-muted text-sm mb-5">Prefer instant messaging? Reach us on your favourite platform.</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/919198846529" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors">
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="https://www.facebook.com/kindwaybiorezens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors">
                  <FaFacebookF /> Facebook
                </a>
                <a href="https://www.instagram.com/kindwaybiorezens/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
                  <FaInstagram /> Instagram
                </a>
                <a href="https://www.youtube.com/@kindwaybiorezens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-700 transition-colors">
                  <FaYoutube /> YouTube
                </a>
              </div>
            </div>

            {/* Alternate office */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">Research Lab</h3>
              <p className="text-muted text-sm leading-relaxed">
                Department of Metallurgical Engineering, IIT (BHU),<br />
                Room No. 401, Varanasi-221005,<br />
                Uttar Pradesh, India
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
          </AnimateOnScroll>
          {[
            { q: 'How do I register for a training workshop?', a: 'Visit our Training & Workshops page and fill out the registration form. You can also scan the QR code on the page or call us directly at +91-9151161267.' },
            { q: 'Do you ship dental implant products outside India?', a: 'Yes, we ship our dental implants and bone graft materials worldwide. Contact our sales team for international pricing and logistics.' },
            { q: 'What certifications do your products carry?', a: 'All our dental implants and biomaterials are CE-marked, ISO 13485 certified, and approved by CDSCO for the Indian market.' },
            { q: 'Can I request a mobile dental clinic visit for my community?', a: 'Absolutely! Reach out via the contact form or WhatsApp to schedule a free dental camp in your community or village.' },
            { q: 'Do you offer partnerships with dental colleges?', a: 'We actively partner with dental colleges for workshops, clinical training, and research. Contact us to explore collaboration opportunities.' },
          ].map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08} className="mb-4">
              <details className="group bg-white rounded-xl shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.q}
                  <span className="text-2xl text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 text-muted text-sm leading-relaxed">{faq.a}</p>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
