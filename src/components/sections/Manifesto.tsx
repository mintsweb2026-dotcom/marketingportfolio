import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = ['WE', "DON'T", 'DO', 'ORDINARY.'];
const accentWords = ['NEITHER', 'SHOULD', 'YOU.'];

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline word reveal
      gsap.fromTo(
        '.mf-word',
        { y: '110%' },
        {
          y: '0%',
          duration: 0.5,
          stagger: 0.03,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Red accent line reveal
      gsap.fromTo(
        '.mf-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power4.out',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: '.mf-accent',
            start: 'top 80%',
          },
        }
      );

      // Descriptor fade up
      gsap.fromTo(
        '.mf-desc',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.mf-accent',
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink py-20 lg:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section label */}
        <div className="overflow-hidden">
          <span className="mf-word inline-block font-mono text-xs tracking-[0.3em] uppercase text-stone/70">
            THE MANIFESTO
          </span>
        </div>

        {/* First line — white */}
        <div className="flex flex-wrap gap-x-4 gap-y-0">
          {words.map((w, i) => (
            <div key={i} className="overflow-hidden">
              <span
                className="mf-word inline-block font-display text-paper text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.88] tracking-tight"
              >
                {w}
              </span>
            </div>
          ))}
        </div>

        {/* Second line — signal red accent */}
        <div className="mf-accent flex flex-wrap gap-x-4 gap-y-0">
          {accentWords.map((w, i) => (
            <div key={i} className="overflow-hidden">
              <span
                className="mf-word inline-block font-display text-signal-red text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.88] tracking-tight"
              >
                {w}
              </span>
            </div>
          ))}
        </div>

        {/* Red rule */}
        <div className="mf-line w-full h-[2px] bg-signal-red origin-left" />

        {/* Descriptor columns */}
        <div className="grid grid-cols-1 gap-8 border-t border-paper/10 pt-10 mt-16 max-w-4xl">
          {[
            {
              body: 'AT MINTS GLOBAL, WE BELIEVE TECHNOLOGY AND CREATIVITY SHOULD WORK TOGETHER TO CREATE MEANINGFUL BUSINESS TRANSFORMATION.',
            },
            {
              body: 'WHETHER YOU ARE A STARTUP BUILDING YOUR DIGITAL PRESENCE OR AN ESTABLISHED ENTERPRISE SEEKING SCALABLE SOLUTIONS, OUR TEAM IS READY TO HELP YOU INNOVATE, GROW, AND LEAD IN THE DIGITAL WORLD',
            },
            {
              body: 'BECAUSE AT MINTS, CREATIVITY ISN\'T WHAT WE DO.',
              accent: 'It\'s who we are.',
            },
          ].map(({ body, accent }, i) => (
            <div key={i} className="mf-desc flex flex-col gap-4">
              <p className="font-mono text-sm md:text-base text-stone leading-relaxed uppercase">
                {body}
              </p>
              {accent && (
                <p className="font-accent text-4xl md:text-5xl text-signal-red leading-relaxed mt-2">
                  {accent}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
