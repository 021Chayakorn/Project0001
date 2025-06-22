import { Monitor } from "lucide-react";

import './animations.css';

const Index = () => {
  const codeExample = `// Webflow Development Example
function createWebflowSite() {
  const site = {
    responsive: true,
    animations: ['fadeIn', 'slideUp'],
    cms: true,
    ecommerce: false
  };
  
  // Custom interactions
  const addInteractions = () => {
    document.querySelectorAll('.hero-btn')
      .forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.target.classList.add('clicked');
          // Smooth scroll to section
          document.querySelector('#services')
            .scrollIntoView({ 
              behavior: 'smooth' 
            });
        });
      });
  };
  
  // SEO optimization
  const optimizeSEO = () => {
    const meta = {
      title: 'Professional Webflow Site',
      description: 'Clean, efficient code',
      keywords: ['webflow', 'responsive', 'ui']
    };
    
    return meta;
  };
  
  return {
    build: () => addInteractions(),
    optimize: () => optimizeSEO(),
    deploy: () => console.log('Site deployed!')
  };
}

// Initialize the site
const mySite = createWebflowSite();
mySite.build();
mySite.optimize();`;

  return (
    <div className="main-container">
      <div className="content-wrapper">
        {/* Main Card Container */}
        <div className="card-container">
          
          {/* Purple Glow Effect */}
          <div className="background-glow"></div>
          <div className="purple-glow"></div>
          
          {/* Content Container */}
          <div className="content-container">
            {/* Left Content */}
            <div className="left-content">
              {/* Icon */}
              <div className="icon-container">
                <Monitor className="floating-icon" />
              </div>
              
              {/* Title */}
              <h2 className="content-title">
                Webflow Development
              </h2>
              
              {/* Description */}
              <p className="content-description">
                Build Webflow websites with clean,
                efficient code that ensures seamless
                functionality and optimal UX.
              </p>
            </div>
            
            {/* Right Code Container */}
            <div className="code-container">
              <div className="code-frame">
                <pre className="code-content">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Glow Effects */}
        <div className="outer-glow"></div>
      </div>
    </div>
  );
};

export default Index;
