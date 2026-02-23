'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/training', label: 'Training & Workshops' },
  { href: '/mobile-clinic', label: 'Mobile Dental Clinic' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block bg-primary text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919151161267" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <FaPhone className="text-xs" /> +91-9151161267
            </a>
            <a href="mailto:kindwaybiorezens@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <FaEnvelope className="text-xs" /> kindwaybiorezens@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/share/1GBc9pA6Rg/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a>
            <a href="https://www.youtube.com/@kindwaydentalimplants" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">YouTube</a>
            <a href="https://www.instagram.com/quadhelixx" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-0.5 shrink-0">
              <span className="text-2xl lg:text-3xl font-bold text-primary">Kindway</span>
              <span className="text-sm lg:text-base font-semibold text-accent">BioReZens</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/training#register"
                className="ml-3 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-sm"
              >
                Book Training
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Nav */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/training#register"
                className="mx-4 mt-2 px-5 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all text-center shadow-md"
              >
                Book Training
              </Link>
              <div className="flex items-center gap-4 px-4 mt-3 pt-3 border-t border-gray-100 text-sm text-muted">
                <a href="tel:+919151161267" className="flex items-center gap-1.5"><FaPhone className="text-xs" /> +91-9151161267</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
