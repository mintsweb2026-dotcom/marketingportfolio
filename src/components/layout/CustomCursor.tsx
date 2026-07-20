import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.style.cursor = 'none';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    gsap.ticker.add(() => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      });
    });

    const handleHoverIn = () => {
      gsap.to(cursor, { scale: 3, opacity: 0.5, duration: 0.3 });
    };
    const handleHoverOut = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    };

    // Need to use event delegation since components mount/unmount
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, img, .cursor-pointer')) {
        handleHoverIn();
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, img, .cursor-pointer')) {
        handleHoverOut();
      }
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-ink rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      style={{ willChange: 'transform' }}
    />
  );
}
