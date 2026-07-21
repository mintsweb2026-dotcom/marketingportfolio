import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LogoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lg-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
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
    <section ref={sectionRef} className="bg-paper py-16 md:py-24 px-6 md:px-12 w-full overflow-hidden flex flex-col gap-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg-reveal">
        <h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase leading-none">
          LOGOS THAT HIT DIFFERENT.
        </h2>
        <p className="font-mono text-sm md:text-base tracking-wide text-ink max-w-3xl mt-6 leading-relaxed">
          We don't do 'safe' branding. From bold logomarks to complete brand systems, we build visual identities designed to disrupt. A good logo looks nice; a great logo leaves a mark.
        </p>
      </div>

      {/* Grid of 6 images */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg-reveal">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="w-full aspect-[4/3] bg-stone flex justify-center items-center overflow-hidden">
            <img loading='lazy' decoding='async' src={`/PORTFOLIO IMAGES/page 13/${num}.webp`} alt={`Logo ${num}`} className="w-full h-full object-contain p-8 transition-transform duration-700 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}