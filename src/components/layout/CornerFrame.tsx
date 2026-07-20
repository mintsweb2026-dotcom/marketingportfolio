import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CornerFrame() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide corner frame after hero section
    ScrollTrigger.create({
      trigger: 'body',
      start: '100vh top',
      onEnter: () => gsap.to(frameRef.current, { opacity: 0, duration: 0.5, ease: 'power2.out' }),
      onLeaveBack: () => gsap.to(frameRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' }),
    });
  }, []);

  return (
    <div 
      ref={frameRef} 
      className="fixed inset-0 pointer-events-none z-50 p-6 flex flex-col justify-between font-mono text-xs uppercase tracking-widest text-white mix-blend-difference"
    >
      <div className="flex justify-between items-start">
        <div>MINTS GLOBAL — PORTFOLIO</div>
        <div className="hidden sm:block">DUBAI . UK . INDIA</div>
      </div>
      <div className="hidden md:flex justify-between items-end">
        <div>MARKETING</div>
        <div>DEVELOPMENT</div>
        <div>CYBERSECURITY</div>
      </div>
    </div>
  );
}
