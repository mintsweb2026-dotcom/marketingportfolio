import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContentDrop() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.drop-reveal',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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
    <section ref={sectionRef} className="relative bg-stone min-h-screen py-16 md:py-24 px-6 md:px-12 overflow-hidden flex flex-col justify-between">
      {/* Top area */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto drop-reveal">
        <h3 className="font-mono text-sm tracking-widest font-bold uppercase">THE LINEUP</h3>
      </div>

      {/* Mid area */}
      <div className="relative w-full max-w-7xl mx-auto my-12 flex flex-col md:flex-row items-center justify-center">
        <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 max-w-xs mb-12 md:mb-0 drop-reveal">
          <p className="text-mute italic">Here every frame tells a story, each shot is a masterpiece</p>
        </div>
        
        <h2 className="font-display text-5xl md:text-8xl tracking-tighter text-center z-10 drop-reveal">
          CONTENT<br/>DROP
        </h2>
        
        <div className="md:absolute md:right-0 md:top-1/4 mt-12 md:mt-0 max-w-[300px] drop-reveal">
          <img loading='lazy' decoding='async' src="/PORTFOLIO IMAGES/4th-page.webp" alt="Content drop" className="w-full aspect-[3/4] object-cover" />
          <p className="font-mono text-xs uppercase tracking-widest mt-4 text-right">From brief to viral</p>
        </div>
      </div>

      {/* Bottom area wordmark */}
      <div className="relative mt-24 md:mt-48 w-full drop-reveal">
        <h1 className="font-display text-[15vw] leading-none tracking-tighter text-transparent bg-clip-text text-stroke-ink -ml-[2vw] select-none" style={{ WebkitTextStroke: '2px var(--ink)' }}>
          MINTS
        </h1>
      </div>
    </section>
  );
}