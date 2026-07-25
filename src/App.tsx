import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import CornerFrame from './components/layout/CornerFrame';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import FloatingNav from './components/layout/FloatingNav';
import Preloader from './components/layout/Preloader';

// Above the fold - loaded synchronously
import Hero from './components/sections/Hero';
import Manifesto from './components/sections/Manifesto';
import Pillars from './components/sections/Pillars';
import ContentDrop from './components/sections/ContentDrop';

// Below the fold - loaded lazily
const EditorialSpread = lazy(() => import('./components/sections/EditorialSpread'));
const ProductGrid = lazy(() => import('./components/sections/ProductGrid'));
const StillsThatSell = lazy(() => import('./components/sections/StillsThatSell'));
const Mosaic = lazy(() => import('./components/sections/Mosaic'));
const FullBleedBanner = lazy(() => import('./components/sections/FullBleedBanner'));
const SocialGrid = lazy(() => import('./components/sections/SocialGrid'));
const VideoFeature = lazy(() => import('./components/sections/VideoFeature'));
const VideoRow = lazy(() => import('./components/sections/VideoRow'));
const VideoMasonry = lazy(() => import('./components/sections/VideoMasonry'));
const LogoGrid = lazy(() => import('./components/sections/LogoGrid'));
const MockupGrid = lazy(() => import('./components/sections/MockupGrid'));
const InfluencerSection = lazy(() => import('./components/sections/InfluencerSection'));
const PhoneMockups = lazy(() => import('./components/sections/PhoneMockups'));
const AnalyticsShowcase = lazy(() => import('./components/sections/AnalyticsShowcase'));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA'));

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

    // Synchronize Lenis with GSAP's ticker for perfectly smooth scroll-linked animations
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-paper text-ink min-h-screen overflow-x-hidden selection:bg-signal-red selection:text-paper">
      <Preloader />
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
        
        <Suspense fallback={<div className="min-h-screen bg-paper" />}>
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
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
