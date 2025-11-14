
import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Showcase from './components/Showcase';
import InCabinInnovation from './components/InCabinInnovation';
import WhyMotrex from './components/WhyMotrex';
import VisitUs from './components/VisitUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const topVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (topVideoRef.current) {
      topVideoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0B152E]">
      {/* Top Background Image Layer */}
      <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={topVideoRef}
          src="/images/bg-video3.webm"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Top Background"
          className="w-full object-cover object-top sm:scale-100 scale-[2.5]"
          style={{ transformOrigin: 'top center' }}
        />
      </div>

      {/* Content Layer - Top sections */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Vision />
          <Showcase />
          <InCabinInnovation />
          <WhyMotrex />
        </main>
      </div>

      {/* Bottom Background Layer - extends beyond AboutUs */}
      <div className="relative z-5 pb-32 md:pb-40 lg:pb-48">
        {/* Bottom Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <img
              src="/images/bg-bottom.png"
              alt="Bottom Background"
              className="w-full h-full object-cover object-bottom"
              style={{ transformOrigin: 'bottom center' }}
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10">
          <main>
            <VisitUs />
            <AboutUs />
          </main>
        </div>
      </div>

      {/* Footer - overlapping with background layer */}
      <div className="relative z-10 -mt-32 md:-mt-40 lg:-mt-48">
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};


export default App;
