import React, { useEffect, useState } from 'react';
import { TrendingUp, Target, Brain } from 'lucide-react';
import './ProgressCard.css';

interface ProgressItem {
  label: string;
  percentage: number;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  delay: number;
}

const ProgressCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  const progressData: ProgressItem[] = [
    {
      label: "Understanding of code",
      percentage: 50,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)",
      icon: <Brain style={{ width: '12px', height: '12px' }} />,
      delay: 0
    },
    {
      label: "Ability to apply AI technologies effectively",
      percentage: 80,
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 50%, #C4B5FD 100%)",
      icon: <TrendingUp style={{ width: '12px', height: '12px' }} />,
      delay: 200
    },
    {
      label: "Understanding of structure and underlying principles",
      percentage: 70,
      color: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 50%, #67E8F9 100%)",
      icon: <Target style={{ width: '12px', height: '12px' }} />,
      delay: 400
    }
  ];

  useEffect(() => {
    const cardTimer = setTimeout(() => {
      setAnimateCard(true);
    }, 100);

    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => {
      clearTimeout(cardTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  return (
    <div className="progress-card-container">
      <div 
        className={`progress-card ${animateCard ? 'animate-in' : ''}`}
      >
        {/* Background elements */}
        <div className="bg-element bg-element-1" />
        <div className="bg-element bg-element-2" />
        
        {/* Header Section */}
        <div className={`header ${animateCard ? 'header-animate' : ''}`}>
          <div className="header-row">
            <div className="badge">
             
            </div>
            <h2 className="title">Understanding of workflows and integration</h2>
          </div>
          <p className="description">
            I have a strong understanding of the languages used,{' '}
            <span className="highlight">which makes customization and control easier.</span>
          </p>
        </div>

        {/* Progress Bars Section */}
        <div className="progress-section">
          {progressData.map((item, index) => (
            <div 
              key={index} 
              className={`progress-item ${isVisible ? 'visible' : ''}`}
              style={{ 
                transitionDelay: `${item.delay + 400}ms`,
                '--item-color': item.color,
                '--item-gradient': item.gradient
              } as React.CSSProperties}
            >
              {/* Label Row */}
              <div className="label-row">
                <div className="label-content">
                  <div 
                    className="icon-container"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`,
                      color: item.color
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="label-text">
                    {item.label}
                  </span>
                </div>
                
                <div 
                  className={`percentage ${isVisible ? 'percentage-visible' : ''}`}
                  style={{ 
                    color: item.color,
                    transitionDelay: `${item.delay + 800}ms`
                  }}
                >
                  {isVisible ? item.percentage : 0}%
                </div>
              </div>
              
              {/* Progress Bar Container */}
              <div className="progress-container">
                <div className="progress-track">
                  {/* Main Progress Bar */}
                  <div
                    className="progress-bar"
                    style={{
                      background: item.gradient,
                      width: isVisible ? `${item.percentage}%` : '0%',
                      boxShadow: `0 1px 4px ${item.color}25`,
                      transitionDelay: `${item.delay + 600}ms`
                    }}
                  >
                    {/* Shimmer Effect */}
                    <div 
                      className={`shimmer ${isVisible ? 'shimmer-active' : ''}`}
                      style={{
                        animationDelay: `${item.delay + 1000}ms`
                      }}
                    />
                  </div>
                </div>
                
                {/* Progress Indicator Dot */}
                <div 
                  className={`progress-dot ${isVisible ? 'dot-visible' : ''}`}
                  style={{
                    background: item.color,
                    left: isVisible ? `calc(${item.percentage}% - 4px)` : '-4px',
                    transitionDelay: `${item.delay + 800}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className={`footer ${isVisible ? 'footer-visible' : ''}`}>
          <div className="stat">
            <div className="stat-value overall">
              {Math.round(progressData.reduce((acc, item) => acc + item.percentage, 0) / progressData.length)}%
            </div>
            <div className="stat-label">Overall</div>
          </div>
          <div className="stat">
            <div className="stat-value skills">3</div>
            <div className="stat-label">Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;