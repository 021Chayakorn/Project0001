
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img 
            src="/public/aaa/Logo1.png" 
            alt="Logo" 
            className="logo-image"
          />
          <span className="logo-text">CHAYAYKORN</span>
        </div>

        {/* Social Media Section */}
        <div className="social-section">
          <span className="share-text">SHARE</span>
          <div className="social-divider"></div>
          <div className="social-links">
            <a href="#" className="social-link facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link instagram">
              <Instagram size={70} />
            </a>
            <a href="#" className="social-link tiktok">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
