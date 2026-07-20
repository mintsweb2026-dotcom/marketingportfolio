import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PhoneMockups() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pm-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper py-16 md:py-24 px-6 md:px-12 w-full mx-auto flex flex-col items-center overflow-hidden">
      {/* Top Text */}
      <div className="w-full max-w-4xl mx-auto pm-reveal mb-16">
        <p className="font-mono text-sm md:text-base tracking-wide text-ink text-center md:text-left leading-relaxed max-w-3xl">
          We run the day-to-day so your brand never goes quiet. From content calendars to community replies, we keep every platform sharp, consistent, and on-brand — turning scattered posting into a strategy people actually notice.
        </p>
      </div>

      {/* Image containing phones and text */}
      <div className="w-full max-w-6xl mx-auto pm-reveal flex justify-center">
        <img
          src="/PORTFOLIO IMAGES/page-16.webp"
          alt="Running the feed mockups"
          className="w-full h-auto max-h-[70vh] object-contain"
        />
      </div>
    </section>
  );
}