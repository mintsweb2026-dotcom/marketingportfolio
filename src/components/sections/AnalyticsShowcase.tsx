import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnalyticsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.as-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink py-16 md:py-24 px-6 md:px-12 w-full mx-auto flex flex-col items-center overflow-hidden gap-12">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto as-item mb-8 text-center">
        <h2 className="font-display text-4xl md:text-6xl tracking-tight text-paper uppercase leading-none mb-6">
          SYSTEMS THAT WORK.
        </h2>
        <p className="font-mono text-sm md:text-base tracking-wide text-paper/80 leading-relaxed max-w-3xl mx-auto">
          Your brand isn't a guessing game. We implement robust tracking, scalable ad structures, and data-driven loops that ensure every campaign learns, adapts, and outperforms the last.
        </p>
      </div>

      {/* Images Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 as-item">
        <div className="w-full aspect-[4/5] bg-stone flex justify-center items-center overflow-hidden">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 17/WhatsApp Image 2026-07-12 at 11.03.54 AM (1).webp" alt="Analytics 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full aspect-[4/5] bg-stone flex justify-center items-center overflow-hidden">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 17/WhatsApp Image 2026-07-12 at 11.03.54 AM (2).webp" alt="Analytics 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-full aspect-[4/5] bg-stone flex justify-center items-center overflow-hidden">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 17/5.webp" alt="Analytics 3" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}