
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const titleGradientStyle: React.CSSProperties = {
  color: '#FFF',
  fontFamily: '"Albert Sans", sans-serif',
  fontStyle: 'normal',
  fontWeight: 800,
  letterSpacing: '0.88px',
};

const subtitleStyle: React.CSSProperties = {
  color: '#FFF',
  fontFamily: '"Albert Sans", sans-serif',
  fontStyle: 'normal',
  fontWeight: 800,
  letterSpacing: '0.88px',
};

const tabMenuStyle: React.CSSProperties = {
  borderRadius: '100px',
  border: '1px solid rgba(255, 255, 255, 0.30)',
  background: 'rgba(255, 255, 255, 0.20)',
  boxShadow: '0 14px 13.3px 0 rgba(0, 0, 0, 0.40)',
  backdropFilter: 'blur(12.5px)',
  WebkitBackdropFilter: 'blur(12.5px)',
};

const TABS = ['Driving Intelligence', 'Connected Comfort', 'Evolving Future'];

type PassThroughLayer = {
  className?: string;
  style?: React.CSSProperties;
};

type ShowcaseEntry = {
  title: string;
  subtitle: string;
  description: string;
  images?: string[];
  image?: string;
  passThroughLayers?: PassThroughLayer[];
  customRenderer?: () => React.ReactNode;
};

type EvolvingFutureSpec = { label: string; value: string };

type EvolvingFutureItem = {
  title: string;
  caption: string;
  specs: EvolvingFutureSpec[];
  image: string;
};

const EVOLVING_FUTURE_ITEMS: EvolvingFutureItem[] = [
  {
    title: "DashCam",
    caption:
      "Advanced dual-channel recording system for comprehensive vehicle monitoring.",
    specs: [
      { label: "Recording", value: "Dual-Channel (Front + Rear)" },
      { label: "Coverage", value: "Driving / Parking / Incident Monitoring" },
      { label: "Performance", value: "Stable, High-Quality Video" },
      { label: "Connectivity", value: "App-Integrated Control" },
    ],
    image: "/images/evolving1.png",
  },
  {
    title: "AC Home EV Charger",
    caption:
      "Our charging solution redefines how energy is connected to life. Portable chargers provide convenience on the go, while home chargers work efficiently to build a smart and flexible EV ecosystem.",
    specs: [
      { label: "Power Options", value: "7kW / 12kW / 22kW" },
      { label: "Compatibility", value: "Type 1, Type 2, NACS" },
      { label: "Connectivity", value: "Mobile App, RFID, Cloud" },
      { label: "Features", value: "Load Balancing, IP54, 5m Cable" },
      { label: "Setup", value: "Single & 3-Phase Support" },
    ],
    image: "/images/evolving-ev1.png",
  },
  {
    title: "Portable Charger",
    caption:
      "Lightweight portable charging hardware enabling flexible deployments for fleets, pop-up events, and emergency backup power.",
    specs: [
      { label: "Power Options", value: "3.5kW / 2.9kW / 2.2kW" },
      { label: "Voltage", value: "Single Phase, 183–277Vac" },
      { label: "Connectors", value: "Type 1 / Type 2 / NACS" },
      { label: "Standard", value: "IEC 62752" },
    ],
    image: "/images/evolving-ev2.png",
  },
];

const getClipPath = (screenWidth: number) => {
  // lg 이상: 전체 너비
  if (screenWidth >= 1024) {
    return "polygon(1.05% 2%, 98.95% 2%, 88.03% 94.8%, 1.05% 94.8%)";
  }
  // md: 좌측이 약간 줄어듦 (비율 유지)
  if (screenWidth >= 768) {
    return "polygon(1.05% 2%, 98.95% 2%, 88.03% 94.8%, 1.05% 94.8%)";
  }
  // sm: 좌측이 더 많이 줄어듦 (비율 유지)
  return "polygon(1.05% 2%, 98.95% 2%, 88.03% 94.8%, 1.05% 94.8%)";
};

const CLIP_PATH = "polygon(1.05% 2%, 98.95% 2%, 88.03% 94.8%, 1.05% 94.8%)";

const borderLayerStyle: React.CSSProperties & {
  WebkitMaskComposite?: string;
  maskComposite?: string;
} = {
  clipPath: CLIP_PATH as any,
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(145,120,255,0.15) 40%, rgba(0,0,0,0) 75%)",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  padding: "1px",
  borderRadius: "0px",
};

const EvolvingFutureCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [clipPath, setClipPath] = useState(CLIP_PATH);
  const current = EVOLVING_FUTURE_ITEMS[index];
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const totalItems = EVOLVING_FUTURE_ITEMS.length;

  useEffect(() => {
    const updateClipPath = () => {
      setClipPath(getClipPath(window.innerWidth));
    };

    updateClipPath();
    window.addEventListener('resize', updateClipPath);
    return () => window.removeEventListener('resize', updateClipPath);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % totalItems);
  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getCardTransform = (position: number): React.CSSProperties => {
    if (position === 0) {
      return { transform: 'translateX(0) scale(1)' };
    }
    if (position === 1) {
      return { transform: 'translateX(38%) scale(0.63)' };
    }
    return { transform: 'translateX(52%) scale(0.59)' };
  };

  const getCardStateClasses = (position: number) => {
    if (position === 0) {
      return 'opacity-100 blur-0 pointer-events-auto z-30';
    }
    if (position === 1) {
      return 'opacity-75 blur-sm pointer-events-none z-20';
    }
    return 'opacity-0 blur-lg pointer-events-none z-10';
  };

  const renderCard = (item: EvolvingFutureItem, isActive: boolean) => (
    <div className="relative w-full h-full select-none" aria-hidden={!isActive}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: clipPath as any,
        }}
      >
        <div
          className="absolute inset-0 bg-[#050517]/95"
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        />
        <div
          className="absolute inset-[1px] pointer-events-none"
          style={{
            ...borderLayerStyle,
            clipPath: clipPath as any,
          }}
        />
      </div>
      {/* Mobile product image - moved outside clipPath */}
      <div className="md:hidden absolute inset-0 overflow-visible z-40 pointer-events-none">
        <img
          src={item.image}
          alt=""
          aria-hidden
          className="absolute w-[70%] h-auto object-contain"
          style={{
            bottom: '5%',
            right: '-10%',
            filter: 'drop-shadow(0 20px 80px rgba(0,0,0,0.55))',
          }}
        />
      </div>

      <div
        className="absolute -bottom-4 left-[8%] right-[12%] h-10 blur-2xl bg-black/60 rounded-full transition-opacity duration-500"
        style={{ opacity: isActive ? 1 : 0.4 }}
      />

      <div className="relative h-full flex flex-col gap-4 p-4 md:gap-6 md:p-6 lg:p-10 md:grid md:grid-cols-12">
        <div className="order-1 col-span-12 md:col-span-6 z-50 md:z-30 flex items-start md:items-center relative">
          <div className="text-left w-full md:pl-8 lg:pl-[90px]">
            <h4 className="text-white text-xl md:text-4xl font-semibold mb-3 md:mb-6 drop-shadow-lg md:drop-shadow-none">
              {item.title}
            </h4>
            <dl className="text-white/95 md:text-white/85 text-xs md:text-base space-y-2 md:space-y-3 drop-shadow-md md:drop-shadow-none">
              {item.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col xl:flex-row gap-0.5 xl:gap-4">
                  <dt className="xl:w-32 text-white/80 md:text-white/60 text-[10px] md:text-xs uppercase tracking-wide font-medium md:font-normal">
                    {spec.label}
                  </dt>
                  <dd className="flex-1 text-xs md:text-base xl:whitespace-nowrap">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="order-2 col-span-12 md:col-span-6 relative hidden md:flex flex-col items-center justify-center">
          <div className="relative w-full h-full overflow-visible">
            {isActive && (
              <>
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] pointer-events-none -z-10"
                  style={{
                    background: 'radial-gradient(ellipse at center, #5BD9D8 0%, transparent 90%)',
                    filter: 'blur(40px)',
                    opacity: 0.25,
                  }}
                />
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] pointer-events-none -z-10"
                  style={{
                    background: 'radial-gradient(ellipse at center, #D112E6 0%, transparent 90%)',
                    filter: 'blur(40px)',
                    opacity: 0.2,
                  }}
                />
              </>
            )}
            <img
              src={item.image}
              alt={item.title}
              className="relative w-[82%] md:w-[100%] max-w-sm md:max-w-none mx-auto md:absolute md:right-[8%] lg:-right-[8%] md:bottom-2 lg:-bottom-10 object-contain z-30 drop-shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
              style={{
                filter: isActive ? undefined : 'brightness(0.6)',
              }}
            />
            <img
              src={item.image}
              aria-hidden
              className="hidden md:block absolute right-[5%] lg:-right-[4%] bottom-6 lg:-bottom-1 w-[52%] opacity-20 blur-2xl scale-95 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-full md:max-w-4xl lg:max-w-6xl ml-0 mr-auto px-4 md:px-2">
      {/* Top glow effect - moved outside to prevent clipping */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, #5BD9D8 0%, transparent 90%)',
          filter: 'blur(50px)',
          opacity: 0.2,
        }}
      />
      {/* Bottom glow effect - moved outside to prevent clipping */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, #D112E6 0%, transparent 90%)',
          filter: 'blur(50px)',
          opacity: 0.2,
        }}
      />
      <div
        className="relative aspect-[4/3] md:aspect-[16/6] lg:aspect-[16/6] min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[360px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {EVOLVING_FUTURE_ITEMS.map((item, itemIndex) => {
          const position = (itemIndex - index + totalItems) % totalItems;
          const isActive = position === 0;
          const stateClasses = getCardStateClasses(position);

          return (
            <div
              key={item.title}
              className={`absolute inset-0 transition-all duration-700 ease-out will-change-transform ${stateClasses}`}
              style={getCardTransform(position)}
              aria-hidden={!isActive}
            >
              {renderCard(item, isActive)}
            </div>
          );
        })}

        <button onClick={next} className="hidden" aria-label="Show next concept">
          <ArrowRightIcon />
        </button>
        <div className="absolute bottom-0 lg:-bottom-2 right-4 lg:right-[140px] flex items-center gap-2 z-50">
          {EVOLVING_FUTURE_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === index ? 'w-10 bg-white' : 'w-4 bg-white/40'}`}
              aria-label={`Go to concept ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <p className="mt-2 text-left max-w-4xl lg:max-w-xl mr-auto text-gray-300 hidden md:block pl-8 lg:-mt-2 lg:ml-24">
        {current.caption}
      </p>
    </div>
  );
};

const ShowcaseContent: ShowcaseEntry[] = [
    {
        title: "Driving Intelligence",
        subtitle: "",
        description: "",
        images: [
            "/images/driving1.png",
            "/images/driving2.png",
            "/images/driving3.png",
            "/images/driving4.png",
        ],
    },
    {
        title: "Connected Comfort",
        subtitle: "",
        description: "Discover the Next-Gen Rear Seat Display, an adaptive entertainment and information display supporting both landscape and portrait rotation, providing personalized content and connected services for all passengers.",
        image: "/images/comfort-bg.png",
        passThroughLayers: [
            {
                className: "absolute inset-0 bg-gradient-to-br via-transparent to-transparent mix-blend-screen pointer-events-none",
            },
        ],
    },
    {
        title: "Evolving Future",
        subtitle: "",
        description: "",
        customRenderer: () => <EvolvingFutureCarousel />,
    }
];

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (total === 0) return null;

  const goTo = (index: number) => setActiveIndex((index + total) % total);
  const nextImage = () => goTo(activeIndex + 1);
  const prevImage = () => goTo(activeIndex - 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto" data-carousel="driving-intelligence">
      <div
        className="relative aspect-[16/7]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => {
          const position = (index - activeIndex + total) % total;
          const isActive = index === activeIndex;
          const isNext = position === 1;

          let transformClasses = 'opacity-0 pointer-events-none translate-x-full scale-100 blur-lg';
          let depthClasses = 'z-0';

          if (isActive) {
            transformClasses = 'opacity-100 pointer-events-auto scale-100 translate-x-0 blur-0';
            depthClasses = 'z-30';
          } else if (isNext) {
            transformClasses = 'opacity-70 pointer-events-none blur-sm translate-x-1/2 scale-[0.5]';
            depthClasses = 'z-20';
          }

          const isVideo = image.endsWith('.webm') || image.endsWith('.mp4');

          return (
            <div
              key={image}
              className={`absolute inset-0 flex items-center justify-center overflow-visible transition-all duration-700 ease-out ${transformClasses} ${depthClasses}`}
            >
              {isVideo ? (
                <video
                  src={image}
                  autoPlay
                  // loop
                  muted
                  playsInline
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={(e) => {
                    const video = e.currentTarget;
                    video.currentTime = 0;
                    video.play();
                  }}
                />
              ) : (
                <div className="relative w-full h-full">
                  {/* Top glow effect */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] pointer-events-none -z-10"
                    style={{
                      background: 'radial-gradient(ellipse at center, #5BD9D8 0%, transparent 90%)',
                      filter: 'blur(40px)',
                      opacity: 0.3,
                    }}
                  />
                  {/* Bottom glow effect */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] pointer-events-none -z-10"
                    style={{
                      background: 'radial-gradient(ellipse at center, #D112E6 0%, transparent 90%)',
                      filter: 'blur(40px)',
                      opacity: 0.3,
                    }}
                  />
                  <div
                    style={{
                      WebkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.05) 100%)',
                    } as React.CSSProperties}
                  >
                    <img src={image} alt="" className="w-full h-full object-contain relative z-10" />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {total > 1 && (
          <div className="absolute bottom-0 sm:bottom-4 right-4 flex items-center gap-2 z-50">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-10 bg-white' : 'w-4 bg-white/40'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {total > 1 && (
        <>
          {/* Hidden button for header arrow to trigger */}
          <button
            onClick={nextImage}
            className="hidden"
            aria-label="Next image"
          />

          <div className="mt-2 sm:mt-4 lg:-mt-6 text-left max-w-4xl lg:max-w-2xl mx-auto lg:mx-0 lg:ml-[130px] px-4 sm:px-0">
            <p className="xl:text-md text-gray-300 text-left leading-relaxed">
              Driving Intelligence powered by MOTREX's core expertise -  advanced clusters and AVN systems engineered to elevate every journey.
            </p>
          </div>
        </>
      )}
    </div>
  );
};


const FLOATING_OFFSET = 24; // px distance from viewport top when the tab menu floats
const ROTATION_TRANSITION_MS = 1200; // must match CSS transition duration

const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabMenuHeight, setTabMenuHeight] = useState(0);
  const [isFloating, setIsFloating] = useState(false);
  const [rectangleRotation, setRectangleRotation] = useState<0 | 90>(0);
  const [isClickRotationEnabled, setIsClickRotationEnabled] = useState(false);
  const [activeComfortImage, setActiveComfortImage] = useState<'landscape' | 'portrait'>('landscape');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabMenuRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const connectedComfortRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const tabMenuContainerRef = useRef<HTMLDivElement | null>(null);
  const rotationStateRef = useRef(0);
  const isInitialLoadRef = useRef(true);
  const autoRotationTriggeredRef = useRef(false);
  const imageSwapTimeoutRef = useRef<number | null>(null);

  const scheduleComfortImageSwap = (target: 'landscape' | 'portrait') => {
    if (imageSwapTimeoutRef.current) {
      window.clearTimeout(imageSwapTimeoutRef.current);
    }

    imageSwapTimeoutRef.current = window.setTimeout(() => {
      setActiveComfortImage(target);
      imageSwapTimeoutRef.current = null;
    }, ROTATION_TRANSITION_MS);
  };

  const rotateTo = (nextRotation: 0 | 90) => {
    if (rotationStateRef.current === nextRotation) {
      return;
    }

    rotationStateRef.current = nextRotation;
    setRectangleRotation(nextRotation);
    scheduleComfortImageSwap(nextRotation === 90 ? 'portrait' : 'landscape');
  };

  useEffect(() => {
    rotationStateRef.current = rectangleRotation;
  }, [rectangleRotation]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const measureHeight = () => {
      setTabMenuHeight(tabMenuRef.current?.offsetHeight ?? 0);
    };

    measureHeight();
    window.addEventListener('resize', measureHeight);

    return () => {
      window.removeEventListener('resize', measureHeight);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      const tabMenu = tabMenuRef.current;
      const tabMenuContainer = tabMenuContainerRef.current;
      const sectionRect = sectionRef.current?.getBoundingClientRect();

      if (!tabMenu || !tabMenuContainer || !sectionRect) {
        setIsFloating(false);
        return;
      }

      const containerRect = tabMenuContainer.getBoundingClientRect();
      const shouldFloat = containerRect.top <= FLOATING_OFFSET;
      const aboveSectionBottom = sectionRect.bottom > (tabMenuHeight || 0) + FLOATING_OFFSET;

      setIsFloating(shouldFloat && aboveSectionBottom);

      // Auto-update active tab based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveTab(i);
            break;
          }
        }
      }

      // Disable rotation on mobile (sm breakpoint = 640px)
      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        return;
      }

      const image = imageRef.current;
      if (image && !isInitialLoadRef.current && !autoRotationTriggeredRef.current) {
        const imageRect = image.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const fullyVisible = imageRect.top >= 0 && imageRect.bottom <= viewportHeight;

        if (fullyVisible) {
          autoRotationTriggeredRef.current = true;
          setIsClickRotationEnabled(true);
          rotateTo(90);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Allow initial load to settle before enabling rotation
    const timeoutId = window.setTimeout(() => {
      isInitialLoadRef.current = false;
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, [tabMenuHeight]);

  useEffect(() => {
    return () => {
      if (imageSwapTimeoutRef.current) {
        window.clearTimeout(imageSwapTimeoutRef.current);
      }
    };
  }, []);

  const handleImageClick = () => {
    // Disable click rotation on mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    if (isMobile || !autoRotationTriggeredRef.current || !isClickRotationEnabled) {
      return;
    }

    const nextRotation: 0 | 90 = rectangleRotation === 90 ? 0 : 90;
    rotateTo(nextRotation);
  };

  const handleImageKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isClickRotationEnabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleImageClick();
    }
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const targetSection = sectionRefs.current[index];

    if (!targetSection) {
      return;
    }

    if (typeof window === 'undefined') {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const menuHeight = tabMenuRef.current?.offsetHeight ?? 0;
    const breathingRoom = FLOATING_OFFSET; // keeps the floating menu visible instead of being scrolled off-screen
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - menuHeight - breathingRoom;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: 'smooth',
    });
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative inline-block mb-16">
          <div
            style={{
              WebkitBoxReflect: 'below -10px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.05) 100%)',
            } as React.CSSProperties}
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-center" style={{
                background: 'linear-gradient(90deg, #F9F9F8 0.77%, #F8F8F9 35.76%, #FCF6FF 69.35%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Our CES2026 Showcase
              </h2>
            </div>
          </div>
          <img
            src="/images/effect-showcase-title.png"
            alt=""
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 pointer-events-none -z-10 w-[120%]"
            style={{ transform: 'translate(-50%, -43%)' }}
          />
        </div>
        <div ref={tabMenuContainerRef} className="w-full mb-16" style={{ minHeight: isFloating ? tabMenuHeight : undefined }}>
          <div
            ref={tabMenuRef}
            className={`${isFloating ? 'fixed left-1/2 -translate-x-1/2 px-4 w-full' : 'relative w-full'} ${isFloating ? 'top-4 md:top-6' : ''} z-50 flex justify-center`}
          >
            <div className="w-full max-w-2xl flex items-center justify-center space-x-2 md:space-x-4 p-2" style={tabMenuStyle}>
              {TABS.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(index)}
                  className={`px-4 md:px-6 py-0 md:py-2 rounded-full text-sm md:text-lg transition-all duration-300 hover:bg-white/10 ${
                    activeTab === index ? 'text-white font-semi-bold' : 'text-gray-400 font-normal'
                  }`}
                  style={{ fontFamily: '"Asta Sans", sans-serif' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full space-y-36">
          {ShowcaseContent.map((content, index) => (
            <div
              key={content.title}
              ref={(el) => {
                sectionRefs.current[index] = el;
                if (content.title === 'Connected Comfort') {
                  connectedComfortRef.current = el;
                }
              }}
              className="w-full max-w-6xl mx-auto text-center scroll-mt-32"
            >
              <div
                className={`relative mb-12 ${
                  content.title === 'Connected Comfort'
                    ? 'z-0'
                    : content.title === 'Evolving Future'
                      ? 'z-30'
                      : 'z-10'
                }`}
              >
                {content.title === 'Driving Intelligence' ? (
                  <div className="relative">
                    <h3
                      className="text-3xl md:text-6xl text-left pl-5 md:pl-32 font-normal mb-4"
                      style={titleGradientStyle}
                    >
                      <span className="md:hidden">Driving Intelligence</span>
                      <span className="hidden md:inline">Driving<br />Intelligence</span>
                    </h3>
                    {content.images && content.images.length > 1 && (
                      <button
                        onClick={() => {
                          const carousel = document.querySelector('[data-carousel="driving-intelligence"]');
                          if (carousel) {
                            const nextButton = carousel.querySelector('[aria-label="Next image"]') as HTMLButtonElement;
                            nextButton?.click();
                          }
                        }}
                        className="hidden sm:block absolute right-4 top-0 md:top-1/2 md:-translate-y-1/2 text-white p-3"
                        style={{
                          filter: 'brightness(1)',
                          transition: 'none',
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(73%) sepia(94%) saturate(2953%) hue-rotate(140deg) brightness(103%) contrast(106%)';
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.currentTarget.style.filter = 'brightness(1)';
                        }}
                        aria-label="Next driving intelligence image"
                      >
                        <img src="/images/arrow-right.svg" alt="Next" className="w-12 h-12" />
                      </button>
                    )}
                  </div>
                ) : content.title === 'Connected Comfort' ? (
                  <>
                    <h3
                      className="text-3xl text-left pl-5 font-normal mb-4 md:hidden relative z-0"
                      style={titleGradientStyle}
                    >
                      Connected Comfort
                    </h3>
                    <h3
                      className="hidden md:block text-6xl text-right font-normal mb-4 transition-all duration-[1200ms] ease-in-out relative z-0"
                      style={{
                        ...titleGradientStyle,
                        paddingRight: rectangleRotation === 90 ? '560px' : '128px',
                      }}
                    >
                      Connected<br />Comfort
                    </h3>
                  </>
                ) : content.title === 'Evolving Future' ? (
                  <div className="relative z-30">
                    <h3
                      className="text-3xl md:text-6xl text-left pl-5 md:pl-32 font-normal mb-4"
                      style={titleGradientStyle}
                    >
                      <span className="md:hidden">Evolving Future</span>
                      <span className="hidden md:inline">Evolving<br />Future</span>
                    </h3>
                    <button
                      onClick={() => {
                        const nextButton = document.querySelector('[aria-label="Show next concept"]') as HTMLButtonElement;
                        nextButton?.click();
                      }}
                      className="hidden sm:block absolute right-4 top-0 md:top-1/2 md:-translate-y-1/2 text-white p-3"
                      style={{
                        filter: 'brightness(1)',
                        transition: 'none',
                        zIndex: 100,
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(73%) sepia(94%) saturate(2953%) hue-rotate(140deg) brightness(103%) contrast(106%)';
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.filter = 'brightness(1)';
                      }}
                      aria-label="Next evolving future concept"
                    >
                      <img src="/images/arrow-right.svg" alt="Next" className="w-12 h-12" />
                    </button>
                  </div>
                ) : (
                  <h3
                    className="text-4xl md:text-6xl font-normal mb-4"
                    style={titleGradientStyle}
                  >
                    {content.title}
                  </h3>
                )}
                {content.subtitle && (
                  <p className="text-xl md:text-2xl mb-6" style={subtitleStyle}>
                    {content.subtitle}
                  </p>
                )}
                {content.title !== 'Connected Comfort' && (
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">{content.description}</p>
                )}
              </div>

              <div className={`relative z-20 ${content.title === 'Connected Comfort' ? 'mt-0 md:-mt-[4rem] lg:-mt-[6.5rem]' : '-mt-[3rem] md:-mt-[4rem]'}`}>
                {content.customRenderer ? (
                  <div className="w-full flex justify-start">
                    {content.customRenderer()}
                  </div>
                ) : content.images?.length ? (
                  <ImageCarousel images={content.images} />
                ) : (
                  <div className="w-full max-w-7xl mx-auto">
                    <div className="w-full relative">
                      <img
                        src={content.image}
                        alt={content.title}
                        className={`w-full h-auto object-cover ${content.title === 'Connected Comfort' ? 'lg:scale-120' : ''}`}
                        style={content.title === 'Connected Comfort' ? { transform: 'scale(1.2)' } : undefined}
                      />
                      {content.passThroughLayers?.map((layer, layerIndex) => (
                        <div key={layerIndex} className={layer.className} style={layer.style} />
                      ))}
                      {content.title === 'Connected Comfort' && (
                        <>
                          <div
                            className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-[35%] xl:w-[40%] pl-4 xl:pl-8 pr-4 transition-all duration-[1200ms] ease-in-out"
                            style={{
                              left: rectangleRotation === 90 ? '13%' : '3%',
                            }}
                          >
                            <p className="text-base xl:text-md text-gray-300 text-right leading-relaxed">
                              {content.description}
                            </p>
                          </div>
                          <div
                            ref={imageRef}
                            className="absolute top-1/2 overflow-hidden sm:left-1/2 left-0 sm:w-auto w-full sm:px-0 px-4 z-10"
                            role={isClickRotationEnabled ? 'button' : undefined}
                            tabIndex={isClickRotationEnabled ? 0 : -1}
                            aria-pressed={isClickRotationEnabled ? rectangleRotation === 90 : undefined}
                            onClick={handleImageClick}
                            onKeyDown={handleImageKeyDown}
                            style={{
                              maxWidth: window.innerWidth >= 640 ? '600px' : 'none',
                              width: window.innerWidth >= 640 ? '50%' : '100%',
                              transform: window.innerWidth >= 640
                                ? `translate(calc(-50% + 35%), -50%) rotate(${rectangleRotation}deg)`
                                : 'translateY(-50%)',
                              transition: 'transform 1.2s ease-in-out',
                              cursor: isClickRotationEnabled ? 'pointer' : 'default',
                            }}
                          >
                            <div
                              className="relative w-full bg-black sm:rounded-[15px] rounded-[8px]"
                              style={{
                                paddingTop: '58%',
                                overflow: 'hidden',
                                border: '0px solid #000000',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                              }}
                              aria-live="polite"
                            >
                              {/* Top glow effect */}
                              <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] pointer-events-none -z-10"
                                style={{
                                  background: 'radial-gradient(ellipse at center, #5BD9D8 0%, transparent 90%)',
                                  filter: 'blur(40px)',
                                  opacity: 0.3,
                                }}
                              />
                              {/* Bottom glow effect */}
                              <div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] pointer-events-none -z-10"
                                style={{
                                  background: 'radial-gradient(ellipse at center, #D112E6 0%, transparent 90%)',
                                  filter: 'blur(40px)',
                                  opacity: 0.3,
                                }}
                              />
                              <img
                                src="/images/comfort-landscape.png"
                                alt="Connected Comfort Landscape"
                                aria-hidden={activeComfortImage !== 'landscape'}
                                className={`absolute inset-0 w-full h-full object-contain sm:transition-opacity sm:duration-500 ${
                                  activeComfortImage === 'landscape' ? 'opacity-100' : 'sm:opacity-0 opacity-100'
                                }`}
                                style={{
                                  transformOrigin: '50% 50%',
                                  transform: 'scale(0.98)'
                                }}
                              />
                              <img
                                src="/images/comfort-portrait.png"
                                alt="Connected Comfort Portrait"
                                aria-hidden={activeComfortImage !== 'portrait'}
                                className={`absolute inset-0 w-full h-full object-contain hidden sm:block transition-opacity duration-500 ${
                                  activeComfortImage === 'portrait' ? 'opacity-100' : 'opacity-0'
                                }`}
                                style={{
                                  transform: 'rotate(-90deg) scale(1.68)',
                                  transformOrigin: '50% 50%',
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    {content.title === 'Connected Comfort' && (
                      <p className="text-sm text-gray-300 text-left px-5 mt-10 md:hidden leading-relaxed">
                        {content.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
