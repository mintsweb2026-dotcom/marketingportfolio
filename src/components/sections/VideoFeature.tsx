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
        {/* Feature Video */}
        <div className="vf-reveal relative w-full aspect-video overflow-hidden vf-video-wrap bg-black">
          <video 
            src="https://r2.fivemanage.com/gaIXorHPgVE5f1RYDyrat/mmim.HQmp4.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </div>
    </section>
  );
}