import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState('');

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

    const handleHoverIn = (text?: string) => {
      if (text) setCursorText(text);
      gsap.to(cursor, { 
        scale: text ? 5 : 3, 
        opacity: text ? 1 : 0.5, 
        duration: 0.3,
        mixBlendMode: text ? 'normal' : 'difference'
      });
      if (text && textRef.current) {
        gsap.to(textRef.current, { opacity: 1, duration: 0.2, delay: 0.1 });
      }
    };
    
    const handleHoverOut = () => {
      if (textRef.current) {
        gsap.to(textRef.current, { opacity: 0, duration: 0.1 });
      }
      gsap.to(cursor, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.3,
        mixBlendMode: 'difference'
      });
      setTimeout(() => setCursorText(''), 200);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest('[data-cursor]');
      
      if (cursorEl) {
        const text = cursorEl.getAttribute('data-cursor') || undefined;
        handleHoverIn(text);
      } else if (target.closest('a, button, img, .cursor-pointer')) {
        handleHoverIn();
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, img, .cursor-pointer, [data-cursor]')) {
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
      className="fixed top-0 left-0 w-4 h-4 bg-ink rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center mix-blend-difference"
      style={{ willChange: 'transform' }}
    >
      <span 
        ref={textRef} 
        className="font-mono text-[4px] tracking-widest font-bold uppercase text-paper opacity-0"
      >
        {cursorText}
      </span>
    </div>
  );
}
