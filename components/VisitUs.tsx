
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const VisitUs: React.FC = () => {
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isMobileLinkedInHovered, setIsMobileLinkedInHovered] = useState(false);

  return (
    <section className="py-20 md:py-32 px-4 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-lg">
          <div className="inline-block w-full">
            <SectionTitle>Visit Us</SectionTitle>
          </div>
          <img
            src="/images/effect-title.png"
            alt=""
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 pointer-events-none -z-10 w-[100%] sm:translate-y-[-53%] translate-y-[-58%]"
          />
        </div>
        <div className="p-8 w-full lg:max-w-[1200px] max-w-4xl backdrop-blur-sm">
            <div className="relative w-full rounded-lg overflow-hidden border border-white/20">
                <img
                    src="/images/map.png"
                    alt="CES 2026 Location Map"
                    className="w-full aspect-[16/9] max-h-[360px] sm:max-h-[520px] lg:max-h-[620px] object-cover object-center"
                />
                {/* Contact info - overlay on sm and above, below image on mobile */}
                <div className="hidden sm:flex absolute inset-0 items-end p-5 lg:p-6">
                    <div className="w-full flex flex-row items-end justify-between gap-3">
                        <div className="flex flex-col gap-2 md:gap-3 md:ml-[2%]">
                            <p className="text-gray-300 text-md lg:text-xl text-left">Let's discuss how MOTREX can drive your in-cabin innovation.</p>
                            <a
                                href="mailto:cesinfo@motrex.co.kr"
                                className="flex items-center gap-2 text-sm lg:text-xl"
                                style={{
                                    color: '#FFF',
                                    fontFamily: '"Albert Sans", sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '120%',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'underline'
                                }}
                            >
                                <img src="/images/icon-email.png" alt="" className="w-5 h-5" />
                                cesinfo@motrex.co.kr
                            </a>
                        </div>
                        {/* LinkedIn link - responsive sizing */}
                        <a
                            href="https://kr.linkedin.com/company/motrex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 md:mr-[2%] transition-opacity duration-200"
                            onMouseEnter={() => setIsLinkedInHovered(true)}
                            onMouseLeave={() => setIsLinkedInHovered(false)}
                            onMouseDown={() => setIsLinkedInHovered(true)}
                            onMouseUp={() => setIsLinkedInHovered(false)}
                        >
                            <img
                              src={isLinkedInHovered ? "/images/icon-linkedin-hover.png" : "/images/icon-linkedin.png"}
                              className="h-[33px] md:h-8 lg:h-[60px] w-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>
            {/* Mobile contact info - outside image */}
            <div className="sm:hidden flex flex-col gap-4 mt-6 px-2">
                <div className="flex flex-col gap-3">
                    <p className="text-gray-300 text-sm text-left">Let's discuss how MOTREX can drive your in-cabin innovation.</p>
                    <a
                        href="mailto:cesinfo@motrex.co.kr"
                        className="flex items-center gap-2 text-xs"
                        style={{
                            color: '#FFF',
                            fontFamily: '"Albert Sans", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '120%',
                            whiteSpace: 'nowrap',
                            textDecoration: 'underline'
                        }}
                    >
                        <img src="/images/icon-email.png" alt="" className="w-4 h-4" />
                        cesinfo@motrex.co.kr
                    </a>
                </div>
                {/* LinkedIn link */}
                <a
                    href="https://kr.linkedin.com/company/motrex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 self-start transition-opacity duration-200"
                    onTouchStart={() => setIsMobileLinkedInHovered(true)}
                    onTouchEnd={() => setIsMobileLinkedInHovered(false)}
                >
                    <img
                      src={isMobileLinkedInHovered ? "/images/icon-linkedin-hover.png" : "/images/icon-linkedin.png"}
                      className="h-6 w-auto"
                    />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
