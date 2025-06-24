import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import CircularText from './ui/CircularText';
import LogoBlocks from './components/LogoBlocks';
import CodeViewer from './components/CodeViewer';
import LogosRow from './ui/LogosRow';
import Animations from './pages/animations';
import ScatteredImage from './components/ScatteredImage';
import LogoScatter from './ui/LogoScatter';
import { FeaturesSection } from './contact/FeaturesSection';
import Aboutt from './components/aboutt';

interface IconData {
  src: string;
  alt: string;
  size: number; 
  auraColor: string;
}


function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


const [lang, setLang] = useState<'en' | 'th'>('en');

  const [headerWhite, setHeaderWhite] = useState(false);
  const borRef = useRef<HTMLDivElement>(null);

  // ย้ายออกมาอยู่นอก useEffect
  const webImgRef = useRef<HTMLImageElement>(null);
  const [showWebImg, setShowWebImg] = useState(false);

  // สำหรับ header
  useEffect(() => {
    const borEl = borRef.current;
    if (!borEl) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setHeaderWhite(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    observer.observe(borEl);
    return () => observer.disconnect();
  }, []);

  // สำหรับรูป
  useEffect(() => {
    const img = webImgRef.current;
    if (!img) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowWebImg(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(img);
    return () => observer.disconnect();
  }, []);


  return (
    <div className="app">

      <div className="main"> 
        <div className="background-text">Port Foli</div>

        {/* Header Section */}
        <header className={headerWhite ? "header-white" : "header-black"}>
          {/* Logo */}
          <div className="logo1">
            <img src="/public/aaa/Logo1.png" alt="C" />
            <h1>Chayakorn</h1>
          </div>
          {/* Menu */}
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contect">Contact</a></li>
            </ul>
          </nav>
        </header>

                
    
 {/* ================================================================================ โซนWeb ================================================================================ */}
       

        <div className="Text">
          <CircularText text="CHAYAKORN*REACT*TSX*" spinDuration={20} onHover="speedUp" className="circular-text" />
        </div>

        <div className="loo">
          <img src="/public/aaa/Logo1.png" alt="Logo" className="avatar" />
        </div>

        <ScatteredImage />


       <div className="aboutme">
  <Aboutt />
</div>

        <div className="button-containero" style={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "2rem 0" }}>
          <button onClick={() => scrollToSection('webwork')} className="scroll-button">
            View Website Projects
          </button>
          <button onClick={() => scrollToSection('artwork')} className="scroll-button">
            Design & Artwork Portfolio
          </button>
        </div>
      </div>

   <div className="bor" ref={borRef} style={{ minHeight: '100vh' }}>
        <div style={{ height: '100vh' }} />
        <div className="Web">
          <div id="webwork" className="cc2">
            <h1>About Me – Website</h1>
            <p>
              I have been studying and developing websites for over 3 years, which has helped me realize that I specialize in UX/UI design and front-end development.
              I’m able to integrate AI technologies with both user emotions and my own creative intuition, allowing me to design highly effective and engaging websites.
            </p>
            <img
              ref={webImgRef}
              src="/public/Web/fire.png"
              alt="Logo"
              className={`avatar2${showWebImg ? " slide-up" : ""}`}
            />
          </div>
        </div>

        <div className="aboutt">
          <div className="ao">
            <div className="aoo">
              <h1> MY SKILLS </h1>
              <p>The tools and technologies I use to create powerful and beautiful websites.</p>
              <h3>_________________________________________________________________________________________________________________________________________________________________________________</h3>
              <LogosRow />
            </div>
          </div>
        </div>
      

        <div className="result-panels">
          <LogoScatter />
          <CodeViewer />
        </div>

        <div className="anime">
          <Animations />
        </div>

      <div className="features-section">
        <FeaturesSection />
      </div>
        
 
 
        <div className="min-h-screen flex items-center justify-center bg-background">
      
    </div>
      </div>


 {/* ================================================================================ จบโซนWeb ================================================================================ */}

      <div style={{ height: '100vh' }} />

 {/* ================================================================================ โซนรูปวาด ================================================================================ */}
      <div id="artwork" className="artwork-section">
        <h2>ผลงานออกแบบ-วาดรูป</h2>
        <p>นี่คือส่วนของผลงานออกแบบ-วาดรูปของคุณ...</p>



































































      </div>



 {/* ================================================================================ จบโซนรูปวาด ================================================================================ */}
  

    <div
    className="scroll-to-top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    title="Scroll to top"
  >
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#222"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-svg"
    >
      <circle cx="12" cy="12" r="11" stroke="#222" fill="#fff" />
      <polyline points="8 14 12 10 16 14" />
    </svg>
  </div>


  </div>
  );
}

export default App;