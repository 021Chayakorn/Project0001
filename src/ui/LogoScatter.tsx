import React, { useEffect, useRef, useState } from 'react';
import './LogoScatter.css';

interface LogoType {
  imageSrc: string;
  description: string;
  initialPosition: { x: number, y: number };
  finalPosition: { x: number, y: number };
  size: number;
  delay: number;
}

const LogoScatter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const generateLogos = (): LogoType[] => {
    // Replace these with your actual image paths and descriptions
    const logosData = [
      {
        imageSrc: 'https://miro.medium.com/v2/resize:fit:1400/1*baHkjoHxOkX_unPGLSQdhg.png',
        description: 'github copilot:Your coding sidekick that completes, explains, and fixes code in real time.'
      },
      {
        imageSrc: 'https://cdn.tjar.sa/media-uploader/teat/6nGkagI8l7Vzm6h83J7TdxxiNu5DwM2Dw921ltuw.webp',
        description: 'Chat GPT: Versatile AI for coding, writing, research, and conversation.'
      },
      {
        imageSrc: 'https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg',
        description: 'Bolt.new: Code assistant in VS Code that turns natural language into working code quickly.'
      },
      {
        imageSrc: 'https://cdn.mos.cms.futurecdn.net/gVhtrh7PoG92n9TudNnLfM-1200-80.png',
        description: 'cursor.ai : Built to make you extraordinarily productive, Cursor is the best way to code with AI.'
      },
      {
        imageSrc: 'https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fcontentful%2Fimage%2Fe5382hct74si%2F3CSHPVw6n6ZPBWXZfFycpp%2Fb499dbf7977ad404be660a892da2100a%2F600x300.png&w=1920&q=75',
        description: 'v0.dev :  Instantly turns text prompts into React or HTML web interfaces'
      }
    ];
    
    return logosData.map((logo, index) => {
      const angle = (index / logosData.length) * 2 * Math.PI;
      const distance = 100;
      
      return {
        ...logo,
        initialPosition: { x: 0, y: 0 },
        finalPosition: { 
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance
        },
        size: 70,
        delay: index * 0.15
      };
    });
  };

  const logos = generateLogos();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start showcase animation after 2 seconds
          setTimeout(() => {
            startShowcase();
          }, 2000);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startShowcase = () => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex >= logos.length) {
        setActiveIndex(-1); // Reset to scattered state
        clearInterval(interval);
        return;
      }
      setActiveIndex(currentIndex);
      currentIndex++;
    }, 3000); // Show each logo for 3 seconds
  };

  return (
    <div ref={sectionRef} className="logo-scatter-container">
      <div className={`logo-scatter-box ${isVisible ? 'visible' : ''}`}>
        <div className="logo-scatter-content">
          <h2 className={`logo-scatter-title ${isVisible ? 'visible' : ''}`}>
            Featured Projects
          </h2>
          <p className={`logo-scatter-description ${isVisible ? 'visible' : ''}`}>
            {activeIndex >= 0 ? logos[activeIndex].description : 'These are the AIs we use to develop high-quality applications and websites with fast performance and responsive design for all screen sizes.'}
          </p>
          
          <div className="logo-scatter-logos">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`logo-scatter-logo ${isVisible ? 'visible' : ''} ${activeIndex === index ? 'showcase' : ''}`}
                style={{
                  '--initial-x': `${logo.initialPosition.x}px`,
                  '--initial-y': `${logo.initialPosition.y}px`,
                  '--final-x': `${logo.finalPosition.x}px`,
                  '--final-y': `${logo.finalPosition.y}px`,
                  '--logo-size': `${logo.size}px`,
                  '--animation-delay': `${logo.delay}s`,
                  backgroundImage: `url(${logo.imageSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScatter;