
import React from 'react';
import { Instagram, Facebook, Github } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import './ContactSection.css';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'instagram.com',
      icon: Instagram,
      url: 'https://instagram.com',
    },
    {
      name: 'facebook',
      icon: Facebook,
      url: 'https://facebook.com',
    },
    {
      name: 'github 021Chayakorn',
      icon: Github,
      url: 'https://github.com/021chayakorn',
    },
    {
      name: 'tiktok',
      icon: TikTokIcon,
      url: 'https://tiktok.com',
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-box">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">
            CONTACT 
          </h1>
          <p className="contact-description">
            Contact / chat / and stay connected with us<br />
            through our channels.
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="social-grid">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <div className="social-content">
                {/* Icon */}
                <div className="social-icon">
                  <link.icon size={20} />
                </div>
                
                {/* Content */}
                <div className="social-info">
                  <div className="social-label">
                    {link.url}
                  </div>
                  <div className="social-name">
                    {link.name}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="contact-decorator">
          <div className="decorator-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;