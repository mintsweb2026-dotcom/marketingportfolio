import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FullBleedBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.banner-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.banner-content-trigger',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper flex flex-col">
      {/* Full Bleed Image */}
      <div className="relative w-full h-[55vh] flex items-center justify-center">
        <img 
          src="/PORTFOLIO IMAGES/8th-page.webp" 
          alt="Earn Every Rep" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Background Outline Text removed based on user feedback about duplication */}


      </div>

      {/* Typography Below */}
      <div className="banner-content-trigger py-16 md:py-24 px-6 md:px-12 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="font-mono text-sm tracking-widest font-bold uppercase banner-reveal mb-8">
          AT MINTS
        </p>
        <p className="text-lg md:text-2xl leading-relaxed text-ink banner-reveal">
          Visual storytelling isn't about the product, it's about the moment around it. The light, the gesture, the pause before the shot — each frame is built to make you feel something before you even know why.
        </p>
      </div>
    </section>
  );
}