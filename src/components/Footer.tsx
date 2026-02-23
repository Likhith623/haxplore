import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const footerImages = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg', 'b6.jpg'];

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      {/* CTA Band */}
      <div className="gradient-primary">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Transform Your Dental Practice?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">Join thousands of dental professionals who trust Kindway BioReZens for cutting-edge implants, training, and support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg">
              Contact Sales
            </Link>
            <Link href="/training#register" className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all shadow-lg">
              Register for Workshop
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-baseline gap-0.5 mb-4">
              <span className="text-2xl font-bold text-white">Kindway</span>
              <span className="text-sm font-semibold text-accent">BioReZens</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              We are a purpose-driven force committed to advancing dental care through innovation, quality, and precision — delivering cutting-edge, patient-focused, and affordable solutions.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1GBc9pA6Rg/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="https://www.youtube.com/@kindwaydentalimplants" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                <FaYoutube className="text-sm" />
              </a>
              <a href="https://www.instagram.com/quadhelixx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-bold text-white mb-4 text-lg">Quick Links</h6>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
                { href: '/training', label: 'Training & Workshops' },
                { href: '/mobile-clinic', label: 'Mobile Clinic' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="font-bold text-white mb-4 text-lg">Contact Info</h6>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                <span className="text-gray-300 text-sm">38 Balaji Colony Samneghat, Near BHU Trauma Center, Lanka Varanasi, UP - 221005</span>
              </li>
              <li className="flex gap-3">
                <FaPhone className="text-accent mt-1 shrink-0" />
                <a href="tel:+919151161267" className="text-gray-300 hover:text-accent transition-colors text-sm">+91-9151161267</a>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="text-accent mt-1 shrink-0" />
                <a href="mailto:kindwaybiorezens@gmail.com" className="text-gray-300 hover:text-accent transition-colors text-sm">kindwaybiorezens@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div>
            <h6 className="font-bold text-white mb-4 text-lg">Instagram</h6>
            <div className="grid grid-cols-3 gap-2">
              {footerImages.map((img, i) => (
                <a key={i} href="https://www.instagram.com/quadhelixx" target="_blank" rel="noopener noreferrer" className="img-zoom-container rounded-lg aspect-square">
                  <Image src={`/images/${img}`} alt="Instagram" width={100} height={100} className="w-full h-full object-cover" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>&copy; 2026 Kindway BioReZens Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-accent transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
