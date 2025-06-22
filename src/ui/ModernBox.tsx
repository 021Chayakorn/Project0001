import React from 'react';
import './ModernBox.css';

const logos = [
  { src: "/public/web/1.png", alt: "GOOGL" },
  { src: "/public/web/2.png", alt: "NIO" },
  { src: "/public/web/3.png", alt: "AAPL" },
  { src: "/public/web/4.png", alt: "AMZN" },
  { src: "/public/web/5.png", alt: "META" },
  { src: "/public/web/Javascript.png", alt: "TSLA" },
  { src: "/public/web/Typescript.png", alt: "NVDA" },
  { src: "/public/web/PHP.png", alt: "MSFT" },
  { src: "/public/web/Vue.png", alt: "BABA" },
  { src: "/assets/logo10.png", alt: "SHOP" },
  { src: "/assets/logo11.png", alt: "PLTR" },
];

const ModernBox: React.FC = () => {
  return (
    <div className="modern-container">
      <div className="modern-box">
        <div className="main-content">
          <div className="content-section">
            <h1 className="main-heading">You call the stocks</h1>
            <p className="description">
              From Apple to Tesla, choose from 2000+ stocks, and own a slice of 
              some of the most popular companies on the planet. Capital at risk.
            </p>
            <button className="cta-button">
              <span>Explore stocks</span>
              <div className="button-glow"></div>
            </button>
          </div>
          
          <div className="ticker-section">
            <div className="ticker-grid">
              {logos.map((logo, idx) => (
                <div className="ticker-item" key={logo.alt}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`ticker-logo-img logo-${idx + 1}`}
                  />
                  <span>{logo.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </div>
    </div>
  );
}

export default ModernBox;