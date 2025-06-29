import React, { useState, useRef, useEffect } from 'react';
import { User, Eye, Monitor, Users, Globe, Palette, Target, Code, MessageCircle, Zap, Heart, UserCheck, Brain, Clock, Lightbulb, TrendingUp } from 'lucide-react';

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
import  ContactSection  from './ui/ContactSection';

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

  const skillsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-visible');
            }, index * 200);
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  if (skillsRef.current) {
    observer.observe(skillsRef.current);
  }

  return () => observer.disconnect();
}, []);


const [lang, setLang] = useState<'en' | 'th'>('en');

  const [headerWhite, setHeaderWhite] = useState(false);
  const borRef = useRef<HTMLDivElement>(null);

  // ย้ายออกมาอยู่นอก useEffect
  const webImgRef = useRef<HTMLImageElement>(null);
  const [showWebImg, setShowWebImg] = useState(false);

  

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
        <header>
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

<div className="me">
 <div className="header-section">
          <h1 className="main-title">
            CHAYAKORN SAN
          </h1>
          <div className="title-underline"></div>
          <p className="subtitle">Web Developer / Cartoonist</p>
          
          <div className="intro-grid">
            <div className="intro-text">
              <p className="intro-paragraph">
                Fully understands the context of work; capable of designing websites and anime-style characters smoothly based on your request, with a solid understanding of structural workflows.
              </p>
              <p className="intro-paragraph">
                I have a deep passion for design — both in web development and anime character creation.
                Everything begins with creativity. I focus on understanding the emotions and feelings of users and viewers, ensuring that every design connects with them. My approach to UX/UI emphasizes simplicity and clarity, making interfaces intuitive and easy to navigate.
              </p>
            </div>
            
            {/* Profile Image Placeholder */}
            <div className="profile-image-container">
              <div className="profile-placeholder">
                <div className="profile-content">
                 
                  <img src="/public/aaa/Me.jpeg" alt="Profile" className="profile-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <div ref={skillsRef} className="skills-section">
  <div className="skills-title-container">
    <h2 className="skills-title animate-on-scroll">Skills</h2>
   
  </div>
  
  {/* Main Skills */}
  <div className="main-skills">
    <div className="skills-container">
      <div className="skill-badge animate-on-scroll">
        <Eye className="skill-icon" />
        Analytics
      </div>
      <div className="skill-badge animate-on-scroll">
        <Monitor className="skill-icon" />
        User Interface
      </div>
      <div className="skill-badge animate-on-scroll">
        <Users className="skill-icon" />
        User Experience
      </div>
      <div className="skill-badge animate-on-scroll">
        <Globe className="skill-icon" />
        Online Design
      </div>
      <div className="skill-badge animate-on-scroll">
        <Palette className="skill-icon" />
        Branding
      </div>
      <div className="skill-badge animate-on-scroll">
        <Target className="skill-icon" />
        UX Direction
      </div>
      <div className="skill-badge animate-on-scroll web-design-skill">
        <Code className="skill-icon" />
        Web Design
      </div>
    </div>
  </div>
</div>
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

        <ContactSection />

<div className="logo-blocks">
          {/* Language Skills and Cognitive Skills Section */}
         
        </div>

        {/* Skills Section */}




      <div className="features-section">
        <FeaturesSection />
      </div>
        
 
 
        <div className="min-h-screen flex items-center justify-center bg-background">
      
    </div>

         <div className="aboutme">
  <Aboutt />
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