import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Page 9 — Clean white background product cutouts
// Row 1: 5 upright perfume bottles
const uprightBottles = [
  { src: '/PORTFOLIO IMAGES/page 6/004.webp', alt: 'Perfume 1' },
  { src: '/PORTFOLIO IMAGES/page 6/008.webp', alt: 'Perfume 2' },
  { src: '/PORTFOLIO IMAGES/page 6/009.webp', alt: 'Perfume 3' },
  { src: '/PORTFOLIO IMAGES/page 6/DSC09462copy.webp', alt: 'Perfume 4' },
  { src: '/PORTFOLIO IMAGES/page 6/OMBRIA  (3).webp', alt: 'Perfume 5' },
];

// Row 2: 4 bottles lying on their side
const sidewaysBottles = [
  { src: '/PORTFOLIO IMAGES/page 6/cobriya (1) - Copy.webp', alt: 'Sideways 1' },
  { src: '/PORTFOLIO IMAGES/page 6/just wardi (5) (1).webp', alt: 'Sideways 2' },
  { src: '/PORTFOLIO IMAGES/page 6/raniya (3).webp', alt: 'Sideways 3' },
  { src: '/PORTFOLIO IMAGES/page 6/zafirah  (1).webp', alt: 'Sideways 4' },
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.prod-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
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
    <section ref={sectionRef} className="bg-white w-full py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">

        {/* Label */}
        <p className="prod-reveal font-mono text-xs tracking-widest uppercase text-ink/50 mb-14">
          CLEAN CUTS
        </p>

        {/* Row 1 — 5 upright bottles */}
        <div className="prod-reveal flex justify-between items-end gap-3 mb-6">
          {uprightBottles.map((img) => (
            <div
              key={img.src}
              className="flex-1 overflow-hidden group cursor-pointer"
              style={{ height: '300px' }}
            >
              <img loading="lazy"
                decoding="async"
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Row 2 — 4 sideways bottles */}
        <div className="prod-reveal flex justify-around items-center gap-3">
          {sidewaysBottles.map((img) => (
            <div
              key={img.src}
              className="flex-1 overflow-hidden group cursor-pointer"
              style={{ height: '200px' }}
            >
              <img loading="lazy"
                decoding="async"
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}