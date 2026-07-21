import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// PDF page 4 — "STILLS THAT SELL"
export default function StillsThatSell() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stills-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
    <section ref={sectionRef} className="bg-paper py-16 md:py-24 px-6 md:px-12 w-full mx-auto flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto stills-reveal mb-12 text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight text-ink uppercase leading-none mb-6">
          STILLS THAT SELL.
        </h2>
        <p className="font-mono text-sm md:text-base tracking-wide text-ink/80 leading-relaxed max-w-3xl mx-auto">
          High-impact product photography designed to elevate brand perception and increase click-through rates. From clean e-commerce studio shots to highly stylized creative campaigns.
        </p>
      </div>

      {/* Image representing PDF page 4 */}
      <div className="w-full max-w-7xl mx-auto stills-reveal flex justify-center">
        <img
          src="/PORTFOLIO IMAGES/4th-page.webp"
          alt="Stills That Sell"
          className="w-full h-auto max-h-[85vh] object-contain shadow-2xl"
        />
      </div>
    </section>
  );
}
