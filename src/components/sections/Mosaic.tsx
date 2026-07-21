import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Mosaic() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mosaic-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper py-16 md:py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col">
      {/* Top right labels */}
      <div className="flex justify-end gap-12 font-mono text-sm tracking-widest font-bold uppercase mb-12 mosaic-item">
        <span>EDITORIAL</span>
        <span>CREATIVE DIRECTION</span>
      </div>

      {/* CSS Grid Mosaic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-[auto] gap-4 md:gap-8 mb-16">
        <div className="col-span-2 row-span-2 mosaic-item aspect-square md:aspect-auto bg-stone group overflow-hidden">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 7/POST-27.1.webp" alt="Mosaic 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="col-span-1 row-span-1 mosaic-item aspect-square bg-stone group overflow-hidden">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 7/Instagram (1) (1).webp" alt="Mosaic 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="col-span-1 row-span-2 mosaic-item aspect-[2/3] md:aspect-auto bg-stone group overflow-hidden">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 7/Royal-Love.webp" alt="Mosaic 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="col-span-1 row-span-1 mosaic-item aspect-square bg-stone group overflow-hidden">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 7/red towel (1).webp" alt="Mosaic 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="col-span-2 md:col-span-4 row-span-1 mosaic-item aspect-video md:aspect-[4/1] bg-stone group overflow-hidden">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/page 7/Untitled-1.webp" alt="Mosaic 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>

      {/* Bottom text */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mosaic-item">
        <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-none w-full md:w-1/2">
          BEYOND THE<br />PRODUCT
        </h2>
        <p className="font-mono text-sm tracking-widest font-bold uppercase w-full md:w-auto md:text-right">
          NOT JUST CONTENT. CULTURE.
        </p>
      </div>
    </section>
  );
}