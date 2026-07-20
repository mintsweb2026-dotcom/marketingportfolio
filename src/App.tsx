import { useEffect } from 'react';
import Lenis from 'lenis';
import CornerFrame from './components/layout/CornerFrame';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import FloatingNav from './components/layout/FloatingNav';

// Sections
import Hero from './components/sections/Hero';
import Manifesto from './components/sections/Manifesto';
import Pillars from './components/sections/Pillars';
import ContentDrop from './components/sections/ContentDrop';
import EditorialSpread from './components/sections/EditorialSpread';
import ProductGrid from './components/sections/ProductGrid';
import StillsThatSell from './components/sections/StillsThatSell';
import Mosaic from './components/sections/Mosaic';
import FullBleedBanner from './components/sections/FullBleedBanner';
import SocialGrid from './components/sections/SocialGrid';
import VideoFeature from './components/sections/VideoFeature';
import VideoRow from './components/sections/VideoRow';
import VideoMasonry from './components/sections/VideoMasonry';
import LogoGrid from './components/sections/LogoGrid';
import MockupGrid from './components/sections/MockupGrid';
import InfluencerSection from './components/sections/InfluencerSection';
import PhoneMockups from './components/sections/PhoneMockups';
import AnalyticsShowcase from './components/sections/AnalyticsShowcase';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-paper text-ink min-h-screen selection:bg-signal-red selection:text-paper">
      <CustomCursor />
      <FloatingNav />
      <CornerFrame />
      
      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <ContentDrop />
        <StillsThatSell />
        <EditorialSpread />
        <ProductGrid />
        <Mosaic />
        <FullBleedBanner />
        <SocialGrid />
        <VideoFeature />
        <VideoRow />
        <VideoMasonry />
        <LogoGrid />
        <MockupGrid />
        <InfluencerSection />
        <PhoneMockups />
        <AnalyticsShowcase />
      </main>

      <Footer />
    </div>
  );
}

export default App;
