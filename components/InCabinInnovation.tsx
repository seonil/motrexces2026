
import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const InCabinInnovation: React.FC = () => {
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const firstVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = firstVideoRef.current;
    if (!video) return;

    const handleEnded = () => {
      // 첫 번째 비디오가 끝나면 fade out 시작
      setFadeOut(true);
      // fade out 애니메이션 후 두 번째 비디오로 전환
      setTimeout(() => {
        setShowSecondVideo(true);
      }, 500); // fade out 지속 시간과 일치
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <section className="relative px-4 text-center py-16 md:px-0">
      <div className="relative z-10 container mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-2xl mb-12 px-4 md:px-4">
          <div className="inline-block w-full">
            <SectionTitle>Innovate Your Own In-Cabin</SectionTitle>
          </div>
          <img
            src="/images/effect-innovation-title.png"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[100%] sm:translate-y-[-53%] translate-y-[-60%]"
          />
        </div>

        <div className={`w-full relative ${!showSecondVideo ? 'md:max-w-none' : 'max-w-6xl px-4'}`}>
          {!showSecondVideo && (
            <video
              ref={firstVideoRef}
              src="images/innovate.webm"
              autoPlay
              muted
              playsInline
              className={`w-full h-auto md:w-screen md:max-w-[100vw] md:relative md:left-1/2 md:-translate-x-1/2 md:rounded-none rounded-lg md:shadow-none shadow-2xl transition-opacity duration-500 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}
          {showSecondVideo && (
            <video
              src="images/showcase-cockpit.webm"
              autoPlay
              muted
              playsInline
              className="w-full h-auto rounded-lg shadow-2xl transition-opacity duration-500 animate-fadeIn"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default InCabinInnovation;
