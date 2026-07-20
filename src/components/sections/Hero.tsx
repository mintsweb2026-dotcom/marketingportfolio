import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, transformOrigin: 'left center' }
      )
        .fromTo(
          '.hero-word',
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.5, stagger: 0.04 },
          '-=0.4'
        )
        .fromTo(
          subRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          '-=0.2'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-end pb-16 px-6 md:px-12 overflow-hidden bg-paper"
    >
      {/* Background image */}
      <img
        src="/PORTFOLIO IMAGES/Cover.webp"
        alt="Cover"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Top horizontal line */}
      <div ref={lineRef} className="hero-line absolute top-[15%] left-0 right-0 h-[1px] bg-white/20 origin-left" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col gap-10">
        {/* Eyebrow */}
        <div className="overflow-hidden flex justify-between w-full">
          <span className="hero-word inline-block font-mono text-xs tracking-[0.3em] uppercase text-white/80">
            MINTS GLOBAL - PORTFOLIO
          </span>
          <span className="hero-word inline-block font-mono text-xs tracking-[0.3em] uppercase text-white/80">
            DUBAI . UK . INDIA
          </span>
        </div>

        {/* Giant headline */}
        <div className="flex flex-col gap-0">
          {[
            { text: 'MINTS', red: false },
            { text: 'PORTFOLIO', red: false },
          ].map(({ text, red }) => (
            <div key={text} className="overflow-hidden">
              <h1
                className={`hero-word inline-block font-display leading-[0.85] tracking-tighter text-[clamp(3rem,9vw,9rem)] ${red ? 'text-signal-red' : 'text-white'}`}
              >
                {text}
              </h1>
            </div>
          ))}
        </div>

        {/* Bottom row: desc + CTA */}
        <div ref={ctaRef} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/20 pt-8">
          <div ref={subRef} className="font-mono text-sm text-white/80 max-w-sm leading-relaxed tracking-wide flex justify-between w-full max-w-2xl">
            <span>MARKETING</span>
            <span>DEVELOPMENT</span>
            <span>CYBERSECURITY</span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#pillars"
              className="font-mono text-xs tracking-widest uppercase border border-white px-8 py-4 text-white hover:bg-white hover:text-ink transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              OUR WORK →
            </a>
            <span className="font-mono text-xs tracking-widest uppercase text-white/80">
              EST. 2020
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-12 flex flex-col items-center gap-2 opacity-60">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center translate-x-4 text-white">SCROLL</span>
        <div className="w-[1px] h-12 bg-white mt-2" style={{ animation: 'none' }} />
      </div>
    </section>
  );
}
