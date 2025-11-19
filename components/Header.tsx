
import React from 'react';

const MOTREXLogo: React.FC = () => (
    <img src="/images/logo-motrex.svg" alt="MOTREX" width="110" height="22" />
);

const CESLogo: React.FC = () => (
    <img src="/images/ces-banner.png" alt="CES 2026" width="160" height="19" className="sm:scale-100 scale-[0.8] origin-right" style={{ height: 'auto', maxHeight: 'none' }} />
);


const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <MOTREXLogo />
        <CESLogo />
      </div>
    </header>
  );
};

export default Header;
