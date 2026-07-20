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

        {/* Boxed Headline */}
        <div className="relative z-10 border border-white/40 px-8 py-6 md:px-12 md:py-8">
          {/* Corner Markers (Figma style) */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white" />
          
          {/* Decorative left line + circle */}
          <div className="absolute -top-[1px] right-full w-12 md:w-24 h-[1px] bg-white/40">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-white/40 bg-transparent" />
          </div>

          {/* Decorative right line + circle */}
          <div className="absolute -bottom-[1px] left-full w-12 md:w-24 h-[1px] bg-white/40">
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-white/40 bg-transparent" />
          </div>
          
          <h2 className="font-display text-4xl md:text-7xl text-white tracking-tighter leading-none relative z-10">
            EARN EVERY REP.
          </h2>
        </div>
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