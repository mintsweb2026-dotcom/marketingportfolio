import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ft-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-paper text-ink py-24 px-6 md:px-12 flex flex-col items-center min-h-[80vh]">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center flex-1">
        
        {/* Logo */}
        <div className="ft-item flex items-center justify-center mb-16">
          <img src="/logo_mints.png" alt="Mints Global" className="h-20 w-auto object-contain" loading="lazy" decoding="async" />
        </div>

        {/* Main Heading */}
        <h2 className="ft-item font-display text-5xl md:text-7xl lg:text-[7rem] text-center leading-[0.9] tracking-tight mb-16">
          LET'S WORK<br />TOGETHER.
        </h2>

        {/* Horizontal Divider */}
        <div className="ft-item w-full h-[1px] bg-ink/30 mb-16" />

        {/* Contact Grid */}
        <div className="ft-item w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left font-mono">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:items-start items-center">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase opacity-70 mb-2">Connect With Us</h3>
              <a href="mailto:info@mintsglobal.ae" className="text-sm md:text-base hover:opacity-100 opacity-90 transition-opacity">info@mintsglobal.ae</a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase opacity-70 mb-2">Offices</h3>
              <p className="text-sm md:text-base opacity-90 max-w-[250px] text-center md:text-left">
                Office #315, 3rd Floor, Bank Street Building, Bur Dubai, Dubai, UAE
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-8 md:items-start items-center">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase opacity-70 mb-2">Call Us</h3>
              <div className="flex flex-col gap-1 text-sm md:text-base opacity-90">
                <a href="tel:+971502943916" className="hover:opacity-100 transition-opacity">UAE: +971 502943916</a>
                <a href="tel:+447899727950" className="hover:opacity-100 transition-opacity">UK: +44 7899727950</a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:items-start items-center">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase opacity-70 mb-2">Visit Us</h3>
              <a href="https://www.mintsglobal.ae" className="text-sm md:text-base hover:opacity-100 opacity-90 transition-opacity">www.mintsglobal.ae</a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase opacity-70 mb-2">Socials</h3>
              <div className="flex flex-col gap-1 text-sm md:text-base opacity-90">
                <a href="https://www.instagram.com/mints.global/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
                <a href="https://www.linkedin.com/company/mints-dubai" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="ft-item w-full max-w-7xl mx-auto mt-24 text-center">
        <p className="font-mono text-xs tracking-widest uppercase opacity-70">
          © 2024 MINTS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}