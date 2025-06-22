import React from 'react';
import './LogoBlocks.css';

const LogoBlocks: React.FC = () => {
  // Example logos - replace these URLs with your own images
  const logos = [
    { id: 1, url: 'your-logo-1.png', alt: 'Logo 1' },
    { id: 2, url: 'your-logo-2.png', alt: 'Logo 2' },
    { id: 3, url: 'your-logo-3.png', alt: 'Logo 3' },
    { id: 4, url: 'your-logo-4.png', alt: 'Logo 4' },
    { id: 5, url: 'your-logo-5.png', alt: 'Logo 5' },
    { id: 6, url: 'your-logo-6.png', alt: 'Logo 6' },
    { id: 7, url: 'your-logo-7.png', alt: 'Logo 7' },
    { id: 8, url: 'your-logo-8.png', alt: 'Logo 8' },
  ];
  
  // Double the logos to create seamless scrolling effect
  const allLogos = [...logos, ...logos];
  
  return (
    <div className="oone">
      <h2 className="panel-title">Featured Technology Partners</h2>
      <p className="panel-subtitle">Powered by industry-leading security technologies</p>
      
      <div className="logo-container">
        <div className="logo-grid">
          {allLogos.map((logo, index) => (
            <div key={index} className="logo-block">
              <div className="logo-content">
                <img 
                  src={logo.url} 
                  alt={logo.alt}
                  className="logo-image"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="logo-info">
        <h3 className="logo-info-title">Enterprise-Grade Security</h3>
        <p className="logo-info-desc">
          Our platform integrates with leading security providers to ensure 
          maximum protection and compliance with industry standards.
        </p>
      </div>
    </div>
  );
};

export default LogoBlocks;