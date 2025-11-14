import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { CheckIcon } from './icons/CheckIcon';

const titleGradientStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #F9F9F8 0.77%, #F8F8F9 35.76%, #FCF6FF 69.35%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const CARD_SPACING = 371.2;
const INACTIVE_CARD_WIDTH = 366;
const ACTIVE_CARD_WIDTH = 624;
const EDGE_EXPANSION_OFFSET = (ACTIVE_CARD_WIDTH - INACTIVE_CARD_WIDTH) / 2;
const EDGE_NEIGHBOR_NUDGE = 42;

const WhyMotrex: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const cardData = [
    {
      title: 'Innovation Driven by\nTechnology Leadership',
      content: [
        '25 Years of Pioneering Automotive HMI Solutions',
        '4-Time Winner of CES Innovation Award',
        'Full-spectrum (HW/SW/UX) R&D Capabilities',
        'Trusted Partner to Global Leading OEMs',
      ],
    },
    {
      title: 'Quality Excellence &\nManufacturing Reliability',
      content: [
        '70+ Countries Choose Motrex for Quality and Reliability',
        '10+ Manufacturing Sites Under Operation Worldwide',
        'Quality Assurance Aligned with Global OEM Standards',
        'Cutting-Edge Manufacturing and Validation Facilities',
      ],
    },
    {
      title: 'Unified Strength\nfor Future Mobility',
      content: [
        'MOTREX Group combines expertise from Motrex EV, Motrex efm, MTR, and JUNJIN C&R to deliver solutions for next-generation mobility',
      ],
    },
  ];

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
            position: relative;
            width: 100%;
            max-width: 1200px;
            margin: 4rem auto 0;
            min-height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
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
        `}
      </style>

      <section className="relative py-20 md:py-32 px-4 text-center why-motrex-container">
        <div className="container mx-auto flex flex-col items-center relative z-10 why-motrex-main">
          <div className="relative w-full max-w-lg">
            <div className="inline-block w-full">
              <SectionTitle>Why Motrex</SectionTitle>
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
              const offset = index - activeCard;
              const positionOffset = (index - Math.floor(cardData.length / 2)) * CARD_SPACING;
              let translateX = positionOffset;
              const scale = isActive ? 1 : 0.97;
              const activeWidth = isActive ? ACTIVE_CARD_WIDTH : INACTIVE_CARD_WIDTH;
              const cardWidth = `${activeWidth}px`;
              const zIndex = isActive ? 30 : 20 - Math.abs(offset) * 5;
              const isFirst = index === 0;
              const isLast = index === cardData.length - 1;
              const isEdgeActive = isActive && (isFirst || isLast);

              if (isFirst && isActive) {
                translateX += EDGE_EXPANSION_OFFSET;
              } else if (isLast && isActive) {
                translateX -= EDGE_EXPANSION_OFFSET;
              }

              if (activeCard === 0 && index !== 0) {
                translateX += EDGE_NEIGHBOR_NUDGE;
              } else if (activeCard === cardData.length - 1 && index !== cardData.length - 1) {
                translateX -= EDGE_NEIGHBOR_NUDGE;
              }

              const transformOrigin = isEdgeActive
                ? isFirst
                  ? 'left center'
                  : 'right center'
                : 'center center';

              return (
                <div
                  key={index}
                  className="absolute overflow-hidden rounded-[30px] cursor-pointer transition-all duration-200 ease-out"
                  onClick={() => setActiveCard(index)}
                  style={{
                    width: cardWidth,
                    minHeight: '450px',
                    height: isActive ? '480px' : '420px',
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    transformOrigin,
                    zIndex: zIndex,
                  }}
                >
                  {/* Content overlay with gradient and backdrop blur */}
                  <div
                    className="absolute inset-0 rounded-[30px]"
                    style={{
                      background: isActive
                        ? 'linear-gradient(0deg, rgba(25, 110, 255, 0.18) 50%, rgba(25.41, 109.59, 255, 0.30) 100%)'
                        : 'linear-gradient(0deg, rgba(192.93, 192.93, 192.93, 0.10) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      border: isActive ? '2px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.15)',
                      backdropFilter: isActive ? 'blur(25px)' : 'none',
                      WebkitBackdropFilter: isActive ? 'blur(25px)' : 'none',
                    }}
                  />

                  {/* Card content */}
                  <div className={`relative z-10 p-4 sm:p-8 md:p-10 h-full flex flex-col ${!isActive ? 'justify-center lg:justify-start' : ''}`}>
                    <div>
                      {/* Title stays anchored to the top */}
                      <h3
                        className={`font-bold mb-4 transition-all text-center ${
                          isActive ? 'text-2xl sm:text-3xl md:text-3xl xl:text-4xl' : 'text-xl sm:text-2xl md:text-2xl'
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
                              <li key={itemIndex} className="flex items-start gap-3 text-gray-50 text-sm sm:text-lg xl:text-xl">
                                <div className="mt-0.5">
                                  <CheckIcon />
                                </div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-50/95 leading-relaxed text-sm sm:text-lg xl:text-xl">{card.content[0]}</p>
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

export default WhyMotrex;
