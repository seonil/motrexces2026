// Hero.tsx
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const heroMaskOverlayStyle: React.CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(26px)',
  WebkitBackdropFilter: 'blur(26px)',
};

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator when user scrolls down more than 200px
      if (window.scrollY > 200) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden p-4 text-center isolate">
      {/* <div
        className="pointer-events-none absolute inset-0 bg-black/10 z-0"
        aria-hidden="true"
      /> */}
      {/* 1) 텍스트 마스크 정의 (보이지 않게) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <mask id="hero-text-mask" x="0" y="0" width="1" height="1">
            {/* 검정 = 숨김, 흰색 = 보임 */}
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="25%"
              textAnchor="middle"
              fontWeight="800"
              fontSize="clamp(48px,12vw,160px)"
              fill="white"
            >
              Innovate
            </text>
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              fontWeight="800"
              fontSize="clamp(48px,12vw,160px)"
              fill="white"
            >
              Your Own
            </text>
            <text
              x="50%"
              y="85%"
              textAnchor="middle"
              fontWeight="800"
              fontSize="clamp(48px,12vw,160px)"
              fill="white"
            >
              In-Cabin
            </text>
          </mask>
        </defs>
      </svg>

      {/* 2) 실제 텍스트(그라디언트 등 스타일용 – 선택) */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-7xl sm:text-9xl md:text-9xl lg:text-10xl xl:text-[180px] font-bold tracking-tight bg-[linear-gradient(93deg,#68FAF8_-0.46%,rgba(104,250,248,0.27)_10.81%,rgba(255,255,255,0.4)_31.75%,rgba(205,184,255,0.5)_72.1%,rgba(255,255,255,0.1)_100.64%)] bg-clip-text text-transparent">
          Innovate
        </h1>
        <h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[150px] font-bold tracking-tight bg-[linear-gradient(93deg,#68FAF8_-0.46%,rgba(104,250,248,0.27)_10.81%,rgba(255,255,255,0.4)_31.75%,rgba(205,184,255,0.5)_72.1%,rgba(255,255,255,0.1)_100.64%)] bg-clip-text text-transparent">
          Your Own
        </h2>
        <h1 className="text-7xl sm:text-9xl md:text-9xl lg:text-10xl xl:text-[180px] font-bold tracking-tight bg-[linear-gradient(93deg,#68FAF8_-0.46%,rgba(104,250,248,0.27)_10.81%,rgba(255,255,255,0.4)_31.75%,rgba(255,255,255,0.4)_72.1%,rgba(255,255,255,0.1)_100.64%)] bg-clip-text text-transparent">
          In-Cabin
        </h1>
        <div className="mt-6 text-2xl md:text-2xl text-gray-300 flex flex-col sm:flex-row sm:gap-2">
          <p className="sm:inline">LVCC, Westhall. Booth #3401</p>
          <p className="sm:inline"><span className="hidden sm:inline">·</span> Jan. 6–9, 2026</p>
        </div>
      </div>

      {/* 3) 글자 내부만 흐려 보이게 하는 “투명 덮개” */}
      {/* <div
        className="
          pointer-events-none absolute inset-0 z-20 mix-blend-screen
          [mask:url(#hero-text-mask)]
          [-webkit-mask:url(#hero-text-mask)]
        "
        style={heroMaskOverlayStyle}
      /> */}

      {/* scroll cue */}
      <div
        className={`absolute bottom-8 z-10 flex flex-col items-center gap-2 transition-opacity duration-500 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span className="text-sm text-white">Scroll Down</span>
        <img
          src="/images/scroll.svg"
          alt="Scroll down indicator"
          className="w-8 h-auto animate-bounce"
          style={{
            animation: 'bounce 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
