'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const categories = ['All', 'Products', 'Workshops', 'Events', 'Outreach'];

const gallery = [
  { src: '/images/b1.jpg', category: 'Workshops', caption: 'Dental implant workshop — hands-on session' },
  { src: '/images/b2.jpg', category: 'Products', caption: 'Surgical instrument kit display' },
  { src: '/images/b3.jpg', category: 'Workshops', caption: 'Clinical training session in progress' },
  { src: '/images/b4.jpg', category: 'Products', caption: 'Bone graft materials showcase' },
  { src: '/images/b5.jpg', category: 'Events', caption: 'Product launch event' },
  { src: '/images/b6.jpg', category: 'Outreach', caption: 'Community dental camp' },
  { src: '/images/ex1.jpg', category: 'Products', caption: 'Advanced implant system' },
  { src: '/images/ex2.jpg', category: 'Workshops', caption: 'Expert-led training demonstration' },
  { src: '/images/ex3.jpg', category: 'Workshops', caption: 'Global outreach and training' },
  { src: '/images/cam1.jpg', category: 'Outreach', caption: 'Mobile dental clinic visit' },
  { src: '/images/cam2.jpg', category: 'Outreach', caption: 'Free dental check-up camp' },
  { src: '/images/cam3.jpg', category: 'Outreach', caption: 'Oral health education session' },
  { src: '/images/cam4.jpg', category: 'Outreach', caption: 'Community dental screening' },
  { src: '/images/cam5.jpg', category: 'Events', caption: 'Annual dental health fair' },
  { src: '/images/cam6.jpg', category: 'Events', caption: 'Dental innovation summit' },
  { src: '/images/cam7.jpg', category: 'Outreach', caption: 'Village dental outreach' },
  { src: '/images/cam8.jpg', category: 'Events', caption: 'Workshop inauguration ceremony' },
  { src: '/images/bg2.jpg', category: 'Products', caption: 'Implant product range' },
  { src: '/images/bg3.jpg', category: 'Workshops', caption: 'Live surgical demonstration' },
  { src: '/images/training.jpg', category: 'Workshops', caption: 'Intensive implantology workshop' },
  { src: '/images/sirji.jpg', category: 'Events', caption: 'Founder — Dr. Rajesh Bansal' },
  { src: '/images/mission.jpg', category: 'Events', caption: 'Mission planning session' },
  { src: '/images/camp1.jpg', category: 'Outreach', caption: 'Rural dental awareness drive' },
  { src: '/images/course1.jpg', category: 'Workshops', caption: 'Certificate course participants' },
];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? gallery : gallery.filter((g) => g.category === active);

  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Step into a world of healthy smiles and dental artistry"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />

      {/* Filter */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Browse</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Photo Gallery</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                    active === cat
                      ? 'gradient-primary text-white shadow-md'
                      : 'bg-gray-100 text-muted hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer card-hover"
                onClick={() => setLightbox(item.src)}
              >
                <Image src={item.src} alt={item.caption} width={400} height={300} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3">
                    <span className="text-xs text-accent font-semibold">{item.category}</span>
                    <p className="text-white text-sm font-medium">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-accent transition-colors" onClick={() => setLightbox(null)}>
            &times;
          </button>
          <Image src={lightbox} alt="Gallery" width={1000} height={700} className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
