import React from 'react';

const titleGradientStyle: React.CSSProperties = {
  background:
    'linear-gradient(90deg, #F9F9F8 0.77%, #F8F8F9 35.76%, #FCF6FF 69.35%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const Vision: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32">
      {/* SM/MD: Text on top, image below */}
      <div className="lg:hidden px-4">
        <div className="text-center mb-2">
          <div className="relative inline-block">
            <h2 className="relative z-20 text-4xl font-normal leading-tight sm:text-5xl">
              <span className="block" style={titleGradientStyle}>
                A New Vision for
              </span>
              <span className="block" style={titleGradientStyle}>
                In-Cabin Mobility
              </span>
            </h2>

            {/* 텍스트 바로 아래로 자동 정렬되도록 수정 */}
            <img
              src="/images/effect-vision-title.png"
              alt=""
              className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-[60%] pointer-events-none z-0 w-[140%]"
            />
          </div>

          <p className="max-w-md mx-auto text-sm text-white/70 sm:text-base z-20 mt-1 relative mb-0">
            At CES 2026, MOTREX showcases advanced<br />
            in-cabin solutions and next-generation<br />
            mobility technologies.
          </p>
        </div>

        <div className="relative z-10 -mx-4 sm:-mx-10 md:mx-auto md:max-w-2xl">
          <img
            src="/images/booth.png"
            alt="MOTREX CES 2026 booth experience"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* LG/XL: Text overlay on left, image on right */}
      <div className="hidden lg:block">
        {/* Text container - positioned normally */}
        <div className="max-w-6xl mx-auto px-4 relative z-30">
          <div className="pl-8 lg:pl-12 xl:pl-16 py-16">
            <div className="relative inline-block mb-6">
              <div
                style={{
                  WebkitBoxReflect: 'below -10px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.3) 100%)',
                } as React.CSSProperties}
              >
                <h2 className="relative z-20 text-4xl font-normal leading-tight lg:text-5xl xl:text-6xl" style={titleGradientStyle}>
                  <span className="block">A New Vision for</span>
                  <span className="block">In-Cabin Mobility</span>
                </h2>
              </div>
              <img
                src="/images/effect-vision-title.png"
                alt=""
                className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[45%] pointer-events-none -z-10 w-[120%]"
              />
            </div>
            <p className="max-w-md text-sm text-white/70 lg:text-base xl:text-lg z-20 relative">
              At CES 2026, MOTREX showcases advanced<br />
              in-cabin solutions and next-generation<br />
              mobility technologies.
            </p>
          </div>
        </div>

        {/* Image - positioned at section level to avoid clipping */}
        <div className="w-[55%] ml-auto -mt-56 lg:-mt-96 xl:-mt-[28rem] 2xl:-mt-[32rem] relative z-20">
          <img
            src="/images/booth.png"
            alt="MOTREX CES 2026 booth experience"
            className="w-full h-auto object-cover lg:scale-[1.2] xl:scale-[1.2] 2xl:scale-[1.2] lg:origin-right xl:origin-right 2xl:origin-right"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;