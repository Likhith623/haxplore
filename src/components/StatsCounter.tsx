'use client';

import { useRef, useEffect, useState } from 'react';

interface StatsCounterProps {
  end: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

function Counter({ end, suffix = '+', label, sublabel }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <h3 className="text-xl font-bold text-accent mb-1">{label}</h3>
      <p className="text-white/70 text-sm">{sublabel}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="gradient-secondary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <Counter end={1500} label="Workshops" sublabel="Training programs organized" />
          <Counter end={1160} label="Students" sublabel="Enrolled in courses & workshops" />
          <Counter end={1145} label="Medical Camps" sublabel="Outreach camps organized" />
        </div>
      </div>
    </section>
  );
}
