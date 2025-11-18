
import React from 'react';
import SectionTitle from './SectionTitle';

const VisitUs: React.FC = () => {
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
        <div className="p-8 w-full max-w-4xl backdrop-blur-sm">
            <div className="w-full h-64 md:h-96 bg-gray-800 rounded-lg mb-8 overflow-hidden">
                <img
                    src="/images/map.png"
                    alt="CES 2026 Location Map"
                    className="w-full h-full object-cover object-right md:object-center"
                />
            </div>
            <div className="flex flex-col -mt-24 md:-mt-28 p-5 md:flex-row justify-between items-start md:items-center gap-4">
                {/* <h4 className="text-2xl whitespace-nowrap" style={{
                    color: '#FFF',
                    fontFamily: '"Albert Sans", sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 800
                }}>Contact</h4> */}
                <p className="text-gray-300 flex-1 text-left lg:max-w-[50%]">Schedule a meeting with our team to explore partnership opportunities.</p>
                <div className="flex flex-col gap-2">
                    <a
                        href="mailto:cesinfo@motrex.co.kr"
                        className="flex items-center gap-2"
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
                        <img src="/images/icon-email.png" alt="" width="20" height="20" />
                        cesinfo@motrex.co.kr
                    </a>
                    <a
                        href="https://kr.linkedin.com/company/motrex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
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
                        <img src="/images/icon-linkedin.png" alt="" width="20" height="20" />
                        linkedin_motrex
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
