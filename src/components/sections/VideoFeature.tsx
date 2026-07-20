import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoFeature() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vf-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Subtle parallax on the video container
      gsap.fromTo(
        '.vf-video-wrap',
        { scale: 1.08 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink py-16 md:py-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start vf-reveal">
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter text-paper uppercase leading-none">
            BEFORE THE<br />CUT
          </h2>
        </div>

        {/* Feature Image */}
        <div className="vf-reveal relative w-full aspect-video overflow-hidden vf-video-wrap">
          <img
            src="/PORTFOLIO IMAGES/page 11/vlcsnap-2026-07-11-14h41m48s797.webp"
            alt="Before The Cut"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}