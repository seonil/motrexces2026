
import React from 'react';

const MotrexLogo: React.FC = () => (
    <svg width="118" height="20" viewBox="0 0 118 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 19.3V0.7H5.6V19.3H0ZM17.1 19.3L11.5 0.7H17.4L20.2 11.8L23 0.7H28.9L23.3 19.3H17.1ZM35.9 19.3V0.7H41.5V19.3H35.9ZM48.6 19.3C45 19.3 42.5 16.5 42.5 12.5V7.5C42.5 3.5 45 0.7 48.6 0.7H54.9V5.5H49.2C48.2 5.5 47.9 6.2 47.9 7.4V12.6C47.9 13.8 48.2 14.5 49.2 14.5H54.9V19.3H48.6ZM66.4 19.3L60.8 0.7H66.7L69.5 11.8L72.3 0.7H78.2L72.6 19.3H66.4ZM87.8 19.3C84.2 19.3 81.7 16.5 81.7 12.5V7.5C81.7 3.5 84.2 0.7 87.8 0.7H94.1V5.5H88.4C87.4 5.5 87.1 6.2 87.1 7.4V12.6C87.1 13.8 87.4 14.5 88.4 14.5H94.1V19.3H87.8ZM97.1 19.3V0.7H102.7V11.2L108.3 0.7H114L107.5 10.4L114.3 19.3H108.4L104.9 13.3L102.7 15.6V19.3H97.1Z" fill="white"/>
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10" style={{ backgroundColor: '#232C42' }}>
      <div className="container mx-auto text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
                <img src="/images/logo-motrex.svg" alt="Motrex" width="100" height="20" />
                <p className="mt-2">Beyond Driving, Beyond Imagination</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
            <div className="text-left text-sm">
                <p>A. 56, Geumto-ro 80beon-gil, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea 13449</p>
                <p>T. 070-4982-6000 | F. 02-6280-1170 | E. cesinfo@motrex.co.kr</p>
            </div>
            <p className="text-gray-500">Copyright © Motrex 2026 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
