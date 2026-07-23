import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// PDF page 9 — "FRAMED IDEAS"
// Row of social posts: 2 tall video stills left, then 5 social media graphics right
// Uses page 9/ social content + page 11 video stills
const socialTiles = [
  // Large video stills (left col-2)
  { src: '/PORTFOLIO IMAGES/page 9/ai-9.1 (1).webp', alt: 'Fitness Video Still', span: 'col-span-1 sm:col-span-1 row-span-2 aspect-[9/16]' },
  { src: '/PORTFOLIO IMAGES/page 9/post-32 (1).webp', alt: 'Fashion Video Still', span: 'col-span-1 sm:col-span-1 row-span-2 aspect-[9/16]' },
  // Social grid tiles
  { src: '/PORTFOLIO IMAGES/page 9/Air fryer.webp', alt: 'Air Fryer Post', span: 'col-span-1 aspect-square' },
  { src: '/PORTFOLIO IMAGES/page 9/eid-1.webp', alt: 'Eid Post', span: 'col-span-1 aspect-square' },
  { src: '/PORTFOLIO IMAGES/page 9/cake post 1.webp', alt: 'Sweet Post', span: 'col-span-1 aspect-square' },
  { src: '/PORTFOLIO IMAGES/page 9/portable Vacuum cleaner.webp', alt: 'Audience Hook Post', span: 'col-span-1 aspect-square' },
  { src: '/PORTFOLIO IMAGES/page 9/post 1.2.webp', alt: 'Engagement Growth Post', span: 'col-span-1 aspect-square' },
  { src: '/PORTFOLIO IMAGES/page 9/d9a855230993327.webp', alt: 'Website Post', span: 'col-span-1 aspect-square' },
];

export default function SocialGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.social-tile',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-6 md:px-16 w-full">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-ink/50 mb-4">
              A brand isn't built in a feed. It's built in moments like this.
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase text-ink leading-none">
              FRAMED IDEAS
            </h2>
          </div>
          <p className="font-mono text-sm tracking-wide text-ink/70 max-w-sm leading-relaxed mt-auto">
            Design that doesn't ask for attention — it holds it.
          </p>
        </div>

        {/* Grid: 2 tall video stills + 6 social posts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

          {/* Tall video stills — first 2 tiles */}
          <div className="social-tile col-span-1 row-span-2 overflow-hidden group cursor-pointer bg-stone h-64 sm:h-80 md:h-[420px]">
            <img loading="lazy" decoding="async"
              src="/PORTFOLIO IMAGES/page 9/ai-9.1 (1).webp"
              alt="Video Still 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="social-tile col-span-1 row-span-2 overflow-hidden group cursor-pointer bg-stone h-64 sm:h-80 md:h-[420px]">
            <img loading="lazy" decoding="async"
              src="/PORTFOLIO IMAGES/page 9/post-32 (1).webp"
              alt="Video Still 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* 3 social media posts — top row */}
          <div className="social-tile aspect-square overflow-hidden group cursor-pointer bg-stone">
            <img loading="lazy" decoding="async"
              src="/PORTFOLIO IMAGES/page 9/Air fryer.webp"
              alt="Air Fryer Post"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="social-tile aspect-square overflow-hidden group cursor-pointer bg-stone">
            <img loading="lazy" decoding="async"
              src="/PORTFOLIO IMAGES/page 9/eid-1.webp"
              alt="Eid Post"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="social-tile aspect-square overflow-hidden group cursor-pointer bg-stone">
            <img loading="lazy" decoding="async"
              src="/PORTFOLIO IMAGES/page 9/cake post 1.webp"
              alt="Sweet Post"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* 3 social media posts — bottom row */}
          <div className="social-tile aspect-square overflow-hidden group cursor-pointer bg-stone">
            <img loading="lazy" decoding="async"
              src="/PORTFOLIO IMAGES/page 9/portable Vacuum cleaner.webp"
              alt="Audience Hook Post"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="social-tile aspect-square overflow-hidden group cursor-pointer bg-stone">
            <img loading="lazy" decoding="async"
              src="/PORTFOLIO IMAGES/page 9/post 1.2.webp"
              alt="Engagement Post"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="social-tile aspect-square overflow-hidden group cursor-pointer bg-stone">
            <img loading="lazy" decoding="async"
              src="/PORTFOLIO IMAGES/page 9/d9a855230993327.webp"
              alt="Website Post"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}