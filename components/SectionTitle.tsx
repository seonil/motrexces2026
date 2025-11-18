
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const titleGradientStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #F9F9F8 0.77%, #F8F8F9 35.76%, #FCF6FF 69.35%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="relative inline-block mb-12">
      <div
        style={{
          WebkitBoxReflect: 'below -10px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.05) 100%)',
        } as React.CSSProperties}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-center tracking-tighter" style={titleGradientStyle}>
          {children}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
