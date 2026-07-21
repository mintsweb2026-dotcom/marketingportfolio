import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InfluencerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.inf-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
    <section ref={sectionRef} className="bg-paper py-16 md:py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col gap-16">
      {/* Top row */}
      <div className="flex flex-col md:flex-row justify-between items-start inf-reveal">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight uppercase leading-none">
          THE ALGORITHM'S<br />FAVORITE.
        </h2>
        <span className="font-mono text-sm tracking-widest font-bold mt-4 md:mt-0">
          Influencer marketing
        </span>
      </div>

      {/* Center Image with Corners */}
      <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center py-12 inf-reveal">
        {/* Corner Markers */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-ink/40" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-ink/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-ink/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-ink/40" />
        
        <img
          src="/PORTFOLIO IMAGES/page-15.webp"
          alt="The Algorithm's Favorite"
          className="w-full h-auto max-h-[60vh] object-cover"
        />
      </div>

      {/* Bottom Text */}
      <div className="flex justify-center inf-reveal">
        <p className="font-mono text-sm tracking-wide text-ink text-center max-w-3xl leading-relaxed">
          We connect brands with creators who actually move culture — not just follower counts. From micro-creators with cult followings to macro voices with mass reach, we curate partnerships built on brand-fit, not chance. Every campaign is tracked, tuned, and built to convert attention into action.
        </p>
      </div>
    </section>
  );
}