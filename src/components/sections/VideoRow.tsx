import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/PORTFOLIO IMAGES/page 11/ChatGPT Image Jul 11, 2026, 02_47_07 PM.webp', label: 'CAMPAIGN' },
  { src: '/PORTFOLIO IMAGES/page 11/vlcsnap-2026-07-11-14h41m48s797.webp', label: 'BEHIND THE SCENES' },
  { src: '/PORTFOLIO IMAGES/page 11/vlcsnap-2026-07-11-14h46m06s156.webp', label: 'EDITORIAL' },
  { src: '/PORTFOLIO IMAGES/page 11/vlcsnap-2026-07-11-14h53m19s437.webp', label: 'LIFESTYLE' },
];

export default function VideoRow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vr-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper py-16 md:py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4">
        <h2 className="font-display text-4xl md:text-6xl tracking-tighter uppercase leading-none">
          FRAME GRABS
        </h2>
        <p className="font-mono text-sm tracking-widest font-bold uppercase mt-4 md:mt-0 text-mute">
          A look behind the lens.
        </p>
      </div>

      {/* Image Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map(({ src, label }) => (
          <div
            key={label}
            className="vr-card group relative overflow-hidden cursor-pointer"
          >
            <img
              src={src}
              alt={label}
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}