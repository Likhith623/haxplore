'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const phone = '919198846529';
  const message = encodeURIComponent('Hello! I am interested in Kindway BioReZens products/services.');
  
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
