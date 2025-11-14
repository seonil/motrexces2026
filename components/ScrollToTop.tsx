import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치에 따라 버튼 표시/숨김
  useEffect(() => {
    const toggleVisibility = () => {
      // Hero 섹션 높이를 대략 100vh로 가정, 그 이후부터 버튼 표시
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 transition-all duration-300 hover:scale-110"
          style={{
            animation: 'fadeIn 0.3s ease-in-out',
          }}
          aria-label="Scroll to top"
        >
          <img
            src="/images/top.svg"
            alt="Scroll to top"
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
            }}
          />
        </button>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default ScrollToTop;
