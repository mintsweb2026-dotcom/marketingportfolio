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
import FinalCTA from './components/sections/FinalCTA';

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
        {/* Page 1: Cover */}
        <Hero />
        {/* Page 2: Text */}
        <Manifesto />
        {/* Page 3: Service Pillars */}
        <Pillars />
        {/* Page 4: THE LINEUP / CONTENT DROP */}
        <ContentDrop />
        {/* Page 5: EVERY FRAME, INTENTIONAL */}
        <EditorialSpread />
        {/* Page 6: CLEAN CUTS */}
        <ProductGrid />
        {/* Page 7: BEYOND THE PRODUCT */}
        <Mosaic />
        {/* Page 8: EARN EVERY REP */}
        <FullBleedBanner />
        {/* Page 9: FRAMED IDEAS */}
        <SocialGrid />
        {/* Page 10: STILLS THAT SELL */}
        <StillsThatSell />
        {/* Page 11: BEFORE THE CUT */}
        <VideoFeature />
        {/* Page 12: More Video / FRAME GRABS */}
        <VideoRow />
        <VideoMasonry />
        {/* Page 13: LOGOS THAT HIT */}
        <LogoGrid />
        {/* Page 14: TOUCHABLE / MOCKUPS */}
        <MockupGrid />
        {/* Page 15: INFLUENCER */}
        <InfluencerSection />
        {/* Page 16: PHONE MOCKUPS */}
        <PhoneMockups />
        {/* Page 17: ANALYTICS */}
        <AnalyticsShowcase />
        {/* Page 18: FINAL CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
