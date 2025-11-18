
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const titleGradientStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #F9F9F8 0.77%, #F8F8F9 35.76%, #FCF6FF 69.35%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

interface AboutCardProps {
    title: string;
    description: string;
    image?: string;
    link?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, image, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    // 이미지 경로에서 _hover 버전 생성
    const hoverImage = image ? image.replace('.png', '_hover.png') : undefined;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-2xl h-48 md:h-56 lg:h-64 block"
            style={{
                transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.3s ease-out',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Blur overlay - hover시 blur 제거 */}
            <div
                className="absolute inset-0 rounded-2xl"
                style={{
                    background: 'linear-gradient(0deg, rgba(192.93, 192.93, 192.93, 0) 0%, rgba(255, 255, 255, 0) 100%)',
                    border: `1px solid rgba(255, 255, 255, ${isHovered ? '0.4' : '0.15'})`,
                    backdropFilter: isHovered ? 'blur(0px)' : 'blur(25px)',
                    WebkitBackdropFilter: isHovered ? 'blur(0px)' : 'blur(25px)',
                    transition: 'backdrop-filter 0.5s ease-out, border 0.3s ease-out',
                }}
            />

            {/* 기본 이미지 - hover시 fade out */}
            {image && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: isHovered ? 0 : 0.3,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                ></div>
            )}

            {/* Hover 이미지 - hover시 fade in */}
            {hoverImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${hoverImage})`,
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                ></div>
            )}

            <div className="relative z-10 text-left p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between" style={{ fontFamily: "'Asta Sans', sans-serif" }}>
                <div>
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-1 md:mb-2" style={titleGradientStyle}>{title}</h4>
                    <p className="text-gray-300 text-sm md:text-base lg:text-lg" style={{ opacity: 0.6 }}>{description}</p>
                </div>
            </div>
        </a>
    );
};


const aboutItems = [
    { title: 'Motrex', description: 'InCabin Solution', image: '/images/about_motrex.png', link: 'https://www.motrex.co.kr/en' },
    { title: 'Motrex EV', description: 'EV Solution', image: '/images/about_ev.png', link: 'https://www.motrexev.com/' },
    { title: 'Motrex efm', description: 'Interior Material', image: '/images/about_efm.png', link: 'http://www.hanminat.com/' },
    { title: 'MTR', description: 'Purpose-Built Vehicle', image: '/images/about_mtr.png', link: 'https://mtr-cavin.com/en/' },
    { title: 'JUNJIN C&R', description: 'Construction & Robot', image: '/images/about_junjin.png', link: 'https://www.junjin.com/en' },
]

const AboutUs: React.FC = () => {
  const [isMotrexHovered, setIsMotrexHovered] = useState(false);

  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-32 px-4 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative w-full max-w-lg">
          <div className="inline-block w-full">
            <SectionTitle>About Us</SectionTitle>
          </div>
          <img
            src="/images/effect-title.png"
            alt=""
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 pointer-events-none -z-10 w-[100%] sm:translate-y-[-53%] translate-y-[-59%]"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mt-12">
            {/* Column 1: Motrex (spans full width on mobile, 2 rows on desktop) */}
            <div className="col-span-2 md:col-span-1 md:row-span-2">
                <a
                    href={aboutItems[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-2xl h-full min-h-[240px] md:min-h-[400px] lg:min-h-[520px] block"
                    style={{
                        transform: isMotrexHovered ? 'scale(1.04)' : 'scale(1)',
                        transition: 'transform 0.3s ease-out',
                    }}
                    onMouseEnter={() => setIsMotrexHovered(true)}
                    onMouseLeave={() => setIsMotrexHovered(false)}
                >
                    {/* Blur overlay - hover시 blur 제거 */}
                    <div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                            background: 'linear-gradient(0deg, rgba(192.93, 192.93, 192.93, 0) 0%, rgba(255, 255, 255, 0) 100%)',
                            border: `1px solid rgba(255, 255, 255, ${isMotrexHovered ? '0.4' : '0.15'})`,
                            backdropFilter: isMotrexHovered ? 'blur(0px)' : 'blur(25px)',
                            WebkitBackdropFilter: isMotrexHovered ? 'blur(0px)' : 'blur(25px)',
                            transition: 'backdrop-filter 0.5s ease-out, border 0.3s ease-out',
                        }}
                    />

                    {/* 기본 이미지 - hover시 fade out */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url(/images/about_motrex.png)',
                            opacity: isMotrexHovered ? 0 : 0.3,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    ></div>

                    {/* Hover 이미지 - hover시 fade in */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url(/images/about_motrex_hover.png)',
                            opacity: isMotrexHovered ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    ></div>

                    <div className="relative z-10 text-left p-6 md:p-8 h-full flex flex-col justify-between" style={{ fontFamily: "'Asta Sans', sans-serif" }}>
                        <div>
                            <h4 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-2 md:mb-3" style={titleGradientStyle}>{aboutItems[0].title}</h4>
                            <p className="text-gray-300 text-base md:text-lg lg:text-xl" style={{ opacity: 0.6 }}>{aboutItems[0].description}</p>
                        </div>
                    </div>
                </a>
            </div>

            {/* Motrex EV */}
            <AboutCard title={aboutItems[1].title} description={aboutItems[1].description} image={aboutItems[1].image} link={aboutItems[1].link} />

            {/* Motrex efm */}
            <AboutCard title={aboutItems[2].title} description={aboutItems[2].description} image={aboutItems[2].image} link={aboutItems[2].link} />

            {/* MTR */}
            <AboutCard title={aboutItems[3].title} description={aboutItems[3].description} image={aboutItems[3].image} link={aboutItems[3].link} />

            {/* Junjin */}
            <AboutCard title={aboutItems[4].title} description={aboutItems[4].description} image={aboutItems[4].image} link={aboutItems[4].link} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
