import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MockupGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mg-item',
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
      <div className="w-full max-w-4xl mx-auto mg-item mb-8 text-center">
        <h2 className="font-display text-4xl md:text-6xl tracking-tighter text-paper uppercase leading-none mb-6">
          TOUCHABLE.
        </h2>
        <p className="font-mono text-sm md:text-base tracking-wide text-paper/80 leading-relaxed max-w-3xl mx-auto">
          We design websites and digital experiences that feel as good as they look. From striking portfolios to high-conversion e-commerce, we build platforms where aesthetic meets performance. No templates. No friction. Just seamless design.
        </p>
      </div>

      {/* Grid of 6 images */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div className="mg-item aspect-square bg-stone group overflow-hidden cursor-pointer">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 14/cover-nux-2.webp" alt="Mockup 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="mg-item aspect-square bg-stone group overflow-hidden cursor-pointer">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 14/cover-nux-3.4.webp" alt="Mockup 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="mg-item aspect-square bg-stone group overflow-hidden cursor-pointer">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 14/cover-nux-4.webp" alt="Mockup 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="mg-item aspect-square bg-stone group overflow-hidden cursor-pointer">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 14/idukki-gold-spices-branding.webp" alt="Mockup 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="mg-item aspect-square bg-stone group overflow-hidden cursor-pointer">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 14/4.webp" alt="Mockup 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="mg-item aspect-square bg-stone group overflow-hidden cursor-pointer">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 14/5.webp" alt="Mockup 6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>
    </section>
  );
}