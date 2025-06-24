
import React, { useEffect, useRef } from 'react';
import { User, Eye, Monitor, Users, Globe, Palette, Target, Code, MessageCircle, Zap, Heart, UserCheck } from 'lucide-react';

import './Aboutt.css'; // Assuming you have a CSS file for styles

const aboutt = () => {
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

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Header Section */}
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

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">4.7+⭐</div>
            <div className="stat-label">Satisfaction score</div>
          </div>
       
          <div className="stat-item">
            <div className="stat-number">30+❤️</div>
            <div className="stat-label">Satisfied Clients</div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="skills-section">
          <div className="skills-title-container">
            <h2 className="skills-title animate-on-scroll">Skills</h2>
            <span className="fire-emoji">🔥</span>
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
              <div className="skill-break"></div>
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

          {/* Language Skills and Drawing Skills */}
          <div className="specialized-skills">
            {/* Language Skills - Left Side */}
            <div className="skill-category">
              <h3 className="category-title animate-on-scroll">ทักษะภาษา</h3>
              <div className="category-badges">
                <div className="language-badge animate-on-scroll">
                  <MessageCircle className="skill-icon" />
                  อังกฤษ
                </div>
                <div className="language-badge animate-on-scroll">
                  <Globe className="skill-icon" />
                  ญี่ปุ่น
                </div>
              </div>
            </div>

            {/* Projects Completed - Center */}
            <div className="skill-category projects-center">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>

            {/* Drawing Skills - Right Side */}
            <div className="skill-category skill-category-right">
              <h3 className="category-title animate-on-scroll">การวาดรูป</h3>
              <div className="category-badges category-badges-right">
                <div className="drawing-badge animate-on-scroll">
                  <User className="skill-icon" />
                  การออกแบบตัวละคร
                </div>
                <div className="drawing-badge animate-on-scroll">
                  <Zap className="skill-icon" />
                  ความคิดสร้างสรรค์
                </div>
                <div className="drawing-badge animate-on-scroll">
                  <Heart className="skill-icon" />
                  ความแฟนตาซี ไซไฟ
                </div>
                <div className="drawing-badge animate-on-scroll">
                  <UserCheck className="skill-icon" />
                  เข้าใจโครงสร้างตัวละคร
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutt;
