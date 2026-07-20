import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pillars() {
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-col',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: columnsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, columnsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-paper pb-24">
      {/* Banner */}
      <div className="relative w-full aspect-[16/9] md:aspect-[2.5/1] flex items-center justify-center overflow-hidden">
        <img
          src="/PORTFOLIO IMAGES/3rd-Page.webp"
          alt="Pillars banner"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        />
        <h2 className="relative z-10 text-white font-display text-5xl md:text-7xl lg:text-8xl text-center leading-[0.9] tracking-tighter font-black">
          THREE PILLARS<br />ONE STANDARD
        </h2>
      </div>

      {/* Grid */}
      <div 
        ref={columnsRef}
        className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
      >
        <div className="pillar-col">
          <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-4">
            DIGITAL<br />MARKETING
          </h3>
          <p className="text-mute uppercase">
            WE DON'T CHASE TRENDS. WE BUILD THE MOMENTS BRANDS GET REMEMBERED FOR.
          </p>
        </div>

        <div className="pillar-col">
          <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-4">
            SOFTWARE<br />DEVELOPMENT
          </h3>
          <p className="text-mute uppercase">
            SYSTEMS THAT WORK QUIETLY, SCALE LOUDLY, AND NEVER GET IN YOUR WAY.
          </p>
        </div>

        <div className="pillar-col">
          <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-4">
            CYBER<br />SECURITY
          </h3>
          <p className="text-mute uppercase">
            PROTECTION THAT DOESN'T ANNOUNCE ITSELF - UNTIL THE DAY IT SAVES YOU.
          </p>
        </div>
      </div>
    </section>
  );
}
