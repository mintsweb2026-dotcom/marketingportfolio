import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.final-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper py-16 md:py-24 px-6 md:px-12 w-full flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto final-reveal flex justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="/PORTFOLIO IMAGES/Last-page.webp"
          alt="Not the end typewriter"
          className="w-full max-w-2xl h-auto object-contain"
        />
      </div>
    </section>
  );
}
