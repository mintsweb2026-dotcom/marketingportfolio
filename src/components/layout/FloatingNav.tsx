import { useEffect, useRef } from 'react';

export default function FloatingNav() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isVisible = false;

    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > window.innerHeight;
      
      if (shouldBeVisible !== isVisible) {
        isVisible = shouldBeVisible;
        if (navRef.current) {
          if (isVisible) {
            navRef.current.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
            navRef.current.classList.add('translate-y-0', 'opacity-100');
          } else {
            navRef.current.classList.remove('translate-y-0', 'opacity-100');
            navRef.current.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      ref={navRef}
      className="fixed bottom-6 right-6 z-50 transition-all duration-500 transform translate-y-12 opacity-0 pointer-events-none"
    >
      <button 
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-ink text-paper flex flex-col items-center justify-center hover:scale-110 transition-transform shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        aria-label="Back to top"
      >
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest mt-1">UP</span>
      </button>
    </div>
  );
}
