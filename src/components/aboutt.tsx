
import React, { useEffect, useRef } from 'react';
import { User, Eye, Monitor, Users, Globe, Palette, Target, Code, MessageCircle, Zap, Heart, UserCheck, Brain, Clock, Lightbulb, TrendingUp } from 'lucide-react';
import './aboutt.css';

const aboutt = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
            
            // Auto-play video when it comes into view
            if (entry.target.querySelector('.drawing-video') && videoRef.current) {
              videoRef.current.play().catch(console.log);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Observe drawing section for video autoplay
    const drawingSection = document.querySelector('.drawing-section');
    if (drawingSection) {
      observer.observe(drawingSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
       
        {/* Skills Section */}
        <div ref={skillsRef} className="skills-section">
         
        

          {/* Language Skills and Cognitive Skills Section */}
          <div className="skills-grid-section">
            <div className="skill-category">
              <h3 className="category-title animate-on-scroll">Language skills</h3>
              <div className="vertical-badges">
                <div className="language-badge animate-on-scroll">
                  <MessageCircle className="skill-icon" />
                  English 40%
                </div>
                <div className="language-badge animate-on-scroll">
                  <Globe className="skill-icon" />
                  Japan 50%
                </div>
              </div>
            </div>
            <div className="skills-divider"></div>

            <div className="skill-category">
              <h3 className="category-title animate-on-scroll">Cognitive and Work Skills</h3>
              <div className="cognitive-badges-grid">
                <div className="cognitive-badge animate-on-scroll">
                  <Brain className="skill-icon" />
                  Problem Solving
                </div>
                <div className="cognitive-badge animate-on-scroll">
                  <TrendingUp className="skill-icon" />
                  Adaptability
                </div>
                <div className="cognitive-badge animate-on-scroll">
                  <Clock className="skill-icon" />
                  Time Management
                </div>
                <div className="cognitive-badge animate-on-scroll">
                  <Lightbulb className="skill-icon" />
                  Self-learning
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
