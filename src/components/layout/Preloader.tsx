import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Fake loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Start exit animation
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = '';
              if (containerRef.current) {
                containerRef.current.style.display = 'none';
              }
            }
          });

          tl.to(textRef.current, {
            y: -50,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.in',
          })
          .to(containerRef.current, {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
          });
        });
        
        return () => ctx.revert();
      }
      setProgress(currentProgress);
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-paper flex flex-col items-center justify-center pointer-events-none"
    >
      <div ref={textRef} className="flex flex-col items-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight uppercase text-ink overflow-hidden">
          MINTS GLOBAL
        </h1>
        <div className="mt-8 font-mono text-sm tracking-widest text-ink/70">
          {progress}%
        </div>
      </div>
    </div>
  );
}
