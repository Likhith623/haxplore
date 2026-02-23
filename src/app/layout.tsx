import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import TawkChat from "@/components/TawkChat";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kindway BioReZens | Advanced Dental Implants & Training",
    template: "%s | Kindway BioReZens",
  },
  description: "Kindway BioReZens — pioneering dental implants, biomaterials, bone grafts, clinical training workshops, and mobile dental clinic outreach. Advancing dental care through innovation, quality & precision.",
  keywords: ["dental implants", "bone graft materials", "dental implants training", "dental outreach programs", "dental workshop", "biomaterials", "Kindway BioReZens", "dental education"],
  openGraph: {
    title: "Kindway BioReZens | Advanced Dental Implants & Training",
    description: "Pioneering dental implants, biomaterials, training workshops & mobile dental clinic outreach.",
    type: "website",
    locale: "en_IN",
    siteName: "Kindway BioReZens",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppWidget />
        <TawkChat />
      </body>
    </html>
  );
}
