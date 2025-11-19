import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { CheckIcon } from './icons/CheckIcon';

const titleGradientStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #F9F9F8 0.77%, #F8F8F9 35.76%, #FCF6FF 69.35%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const INACTIVE_CARD_WIDTH = 30; // percentage of row on desktop
const ACTIVE_CARD_WIDTH = INACTIVE_CARD_WIDTH * 1.2;

const WhyMOTREX: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const cardData = [
    {
      title: 'Innovation Driven by\nTechnology Leadership',
      content: [
        '25 Years of Pioneering Automotive HMI Solutions',
        '4-Time Winner of CES Innovation Award',
        'Full-Spectrum (HW/SW/UX) R&D Capabilities',
        'Trusted Partner to Global Leading OEMs',
      ],
    },
    {
      title: 'Quality Excellence &\nManufacturing Reliability',
      content: [
        '70+ Countries Choose MOTREX for Quality and Reliability',
        '10+ Manufacturing Sites in Operation Worldwide',
        'Quality Assurance Aligned with Global OEM Standards',
        'Cutting-Edge Manufacturing and Validation Facilities',
      ],
    },
    {
      title: 'Unified Strength\nfor Future Mobility',
      content: [
        'MOTREX Group combines expertise from MOTREX EV, MOTREX efm, MTR, and JUNJIN C&R to deliver solutions for next-gen mobility',
      ],
    },
  ];

  const backgroundImages = ['/images/why1.png', '/images/why2.png', '/images/why3.png'];

  return (
    <>
      <style>
        {`
          .why-motrex-container {
            background: #0B152E;
            color: rgba(255, 255, 255, 0.8);
            position: relative;
            width: 100%;
            min-height: 600px;
            padding: 4rem 0;
          }

          .why-motrex-main {
            display: grid;
            place-items: center;
            min-height: 600px;
            position: relative;
          }

          .why-motrex-cards {
            width: 100%;
            max-width: 1200px;
            margin: 4rem auto 0;
            min-height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.25rem;
            flex-wrap: wrap;
          }

          @media (max-width: 640px) {
            .why-motrex-cards {
              margin-top: 2rem;
            }
          }

          /* Mobile responsive - show one card per row on small/medium screens */
          @media (max-width: 1024px) {
            .why-motrex-cards {
              flex-direction: column;
              gap: 1rem;
              min-height: auto;
              padding: 0 1rem;
              align-items: center;
            }

            .why-motrex-cards > div {
              position: relative !important;
              width: 100% !important;
              max-width: 400px;
              transform: none !important;
              opacity: 1 !important;
              height: auto !important;
              min-height: auto !important;
            }
          }

          /* Desktop - arrow at 70% for inactive cards */
          @media (min-width: 1025px) {
            .why-motrex-cards {
              gap: 1rem;
              flex-wrap: nowrap;
            }

            .arrow-position[data-active="false"] {
              top: 70% !important;
            }
          }
        `}
      </style>

      <section className="relative py-20 md:py-32 px-4 text-center why-motrex-container">
        <div className="container mx-auto flex flex-col items-center relative z-10 why-motrex-main">
          <div className="relative w-full max-w-lg">
            <div className="inline-block w-full">
              <SectionTitle>Why MOTREX</SectionTitle>
            </div>
            <img
              src="/images/effect-title.png"
              alt=""
              className="absolute left-1/2 top-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[100%] sm:translate-y-[-53%] translate-y-[-58%]"
            />
          </div>

          {/* Three cards with blur overlay effect - responsive */}
          <div className="why-motrex-cards">
            {cardData.map((card, index) => {
              const isActive = activeCard === index;
              const activeWidth = isActive ? ACTIVE_CARD_WIDTH : INACTIVE_CARD_WIDTH;
              const cardWidth = `${activeWidth}%`;
              const zIndex = isActive ? 30 : 10;

              return (
                <div
                  key={index}
                  className="relative rounded-[30px] cursor-pointer transition-all duration-200 ease-out"
                  onClick={() => setActiveCard(isActive ? null : index)}
                  style={{
                    width: cardWidth,
                    minHeight: '450px',
                    height: isActive ? '480px' : '420px',
                    zIndex: zIndex,
                    flexShrink: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    backgroundImage: isActive ? `url(${backgroundImages[index]})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {/* Content overlay with gradient and backdrop blur */}
                  <div
                    className="absolute inset-0 rounded-[30px] overflow-hidden"
                    style={{
                      background: isActive
                        ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%)'
                        : 'linear-gradient(180deg, rgba(9, 17, 39, 0.35) 0%, rgba(9, 17, 39, 0.85) 100%)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      border: isActive ? '2px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'none',
                      WebkitBackdropFilter: 'none',
                    }}
                  />

                  {/* Click to learn more text for inactive cards */}
                  {!isActive && (
                    <div
                      className="absolute pointer-events-none text-center lg:text-left text-sm lg:text-base left-0 right-0 lg:left-8 lg:right-auto"
                      style={{
                        top: '70%',
                        transform: 'translateY(-50%)',
                        opacity: 0.4,
                        color: '#FFF',
                        fontFamily: '"Albert Sans", sans-serif',
                        fontWeight: 400,
                        zIndex: 25,
                      }}
                    >
                      <span className="lg:translate-y-4 lg:inline-block">Click to learn more</span>
                    </div>
                  )}

                  {/* Arrow overlay for cards - positioned at 70% on right border edge */}
                  <div
                    className="absolute pointer-events-none arrow-position"
                    data-active={isActive}
                    style={{
                      right: '0',
                      top: isActive ? 'calc(70% - 10px)' : '50%',
                      transform: 'translateX(calc(50% - 10px))',
                      width: '40px',
                      height: '40px',
                      zIndex: 50,
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      borderRadius: '50%',
                    }}
                  >
                    <img
                      src={isActive ? "/images/arrow-selected.png" : "/images/arrow.png"}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>

                  {/* Card content */}
                  <div className={`relative z-10 p-4 sm:p-8 md:p-10 h-full flex flex-col ${!isActive ? 'justify-center lg:justify-start' : ''}`}>
                    <div>
                      {/* Title stays anchored to the top */}
                      <h3
                        className={`font-bold mb-4 transition-all text-center lg:text-left ${
                          isActive ? 'text-2xl sm:text-3xl lg:text-2xl xl:text-3xl' : 'text-xl sm:text-2xl lg:text-xl'
                        }`}
                        style={{
                          ...titleGradientStyle,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {isActive && <div className="flex-1" />}

                    {/* Content anchored toward the bottom for consistent placement */}
                    {isActive ? (
                      <div className="pt-6 animate-in slide-in-from-bottom duration-100 delay-800 text-left">
                        {index === 0 || index === 1 ? (
                          <ul className="space-y-3">
                            {card.content.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 text-gray-50 text-sm sm:text-lg lg:text-base xl:text-lg">
                                <div className="mt-0.5">
                                  <CheckIcon />
                                </div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-50/95 leading-relaxed text-sm sm:text-lg lg:text-base xl:text-lg">{card.content[0]}</p>
                        )}
                      </div>
                    ) : (
                      <div className="pt-6" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyMOTREX;
