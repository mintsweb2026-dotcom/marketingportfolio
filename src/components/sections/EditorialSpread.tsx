import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// PDF page 5 — "EVERY FRAME, INTENTIONAL"
// 5 lifestyle perfume shots in a row, large creative shot top-right, then row of 5 below
const row5Images = [
  { src: '/PORTFOLIO IMAGES/page 5/rania-lifestyle.webp', alt: 'Rania Perfume Lifestyle' },
  { src: '/PORTFOLIO IMAGES/page 5/A fragrance as sweet as natures delights, as playful as candy. Let every note awaken a new sens.webp', alt: 'Sweet Fragrance' },
  { src: '/PORTFOLIO IMAGES/page 5/A moment of surprise, a new perfume that seduces with sweetness and lingers in the air - her lat.webp', alt: 'Surprise Perfume' },
  { src: '/PORTFOLIO IMAGES/page 5/First Impression- A sweet burst of caramel, cherry, and mandarin that awakens your senses.Heart-.webp', alt: 'First Impression Perfume' },
  { src: '/PORTFOLIO IMAGES/page 5/Sweet, floral, and dreamy!SugarBliss is here to make every moment feel like a sugar-coated fairy (1) (1).webp', alt: 'SugarBliss Perfume' },
];

export default function EditorialSpread() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ed-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
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
    <section ref={sectionRef} className="bg-white w-full py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">

        {/* Top block — headline left + large image right */}
        <div className="ed-reveal flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2 flex flex-col justify-between h-full gap-6 pt-2">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight uppercase text-ink">
              EVERY<br />FRAME,<br />INTENTIONAL.
            </h2>
            {/* Staggered text on the right — "SHOT TO HIT DIFFERENT" */}
            <div className="font-mono text-sm tracking-widest uppercase text-ink/60 flex flex-col items-end gap-1 self-end">
              <span>SHOT</span>
              <span className="ml-6">TO</span>
              <span className="ml-12">HIT</span>
              <span className="ml-20">DIFFERENT.</span>
            </div>
          </div>
          <div className="md:w-1/2 overflow-hidden group cursor-pointer h-64 md:h-[360px]">
            <img loading="lazy"
              decoding="async"
              src="/PORTFOLIO IMAGES/page 5/Sweet, floral, and dreamy!SugarBliss is here to make every moment feel like a sugar-coated fairy.webp"
              alt="Velora Creative Editorial"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Row of 5 lifestyle shots */}
        <div className="ed-reveal flex gap-3 justify-between">
          {row5Images.map((img) => (
            <div
              key={img.src}
              className="flex-1 overflow-hidden group cursor-pointer h-20 sm:h-28 md:h-[220px]"
            >
              <img loading="lazy"
                decoding="async"
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}