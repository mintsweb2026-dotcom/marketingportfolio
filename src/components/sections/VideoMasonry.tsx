import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tiles = [
  { src: '/PORTFOLIO IMAGES/page 12/vlcsnap-2026-07-11-16h33m55s988.webp', span: 'col-span-1 row-span-2', aspect: 'aspect-[9/16]' },
  { src: '/PORTFOLIO IMAGES/page 12/vlcsnap-2026-07-11-16h37m16s544.webp', span: 'col-span-1 row-span-1', aspect: 'aspect-square' },
  { src: '/PORTFOLIO IMAGES/page 12/vlcsnap-2026-07-11-16h37m55s042.webp', span: 'col-span-1 row-span-1', aspect: 'aspect-square' },
  { src: '/PORTFOLIO IMAGES/page 12/vlcsnap-2026-07-11-16h38m36s998.webp', span: 'col-span-2 row-span-1', aspect: 'aspect-[2/1]' },
];

export default function VideoMasonry() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vm-tile',
        { scale: 0.93, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
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
    <section ref={sectionRef} className="bg-stone py-16 md:py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-6 max-w-4xl">
        <h2 className="font-display text-4xl md:text-6xl tracking-tighter uppercase leading-none text-ink">
          HOOKED IN<br />SECONDS.
        </h2>
        <p className="font-mono text-sm md:text-base tracking-wide text-ink leading-relaxed max-w-2xl">
          Attention is currency, and we know how to earn it. We script, shoot, and edit social-first video content that stops the scroll and drives action.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-3 grid-rows-[auto] gap-4 md:gap-6">
        {tiles.map(({ src, span, aspect }, i) => (
          <div
            key={i}
            className={`vm-tile ${span} group relative overflow-hidden cursor-pointer`}
          >
            <img
              src={src}
              alt={`Hooked ${i}`}
              className={`w-full ${aspect} object-cover transition-transform duration-700 group-hover:scale-105`}
            />
          </div>
        ))}
      </div>

      {/* Bottom spacer */}
      <div className="mt-8"></div>
    </section>
  );
}