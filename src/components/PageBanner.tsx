import Link from 'next/link';

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  subtitle?: string;
}

export default function PageBanner({ title, breadcrumbs, subtitle }: PageBannerProps) {
  return (
    <section className="gradient-hero text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">{subtitle}</p>}
        <nav className="flex justify-center items-center gap-2 text-sm text-white/70">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/40">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-accent transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-accent font-semibold">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
