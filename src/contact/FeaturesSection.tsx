import React, { useEffect, useRef } from "react";
import { Zap, TrendingUp, DollarSign, Cloud } from "lucide-react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      percentage: "80%",
      title: "Language Comprehension",
      description: "I have a strong understanding of the overall structure and framework of every language I’ve learned, and I seamlessly integrate AI into my work."
    },
    {
      icon: TrendingUp,
      percentage: "75%",
      title: "AI Integration for Outstanding Results",
      description: "I explore and utilize powerful AI tools effectively, resulting in exceptional website creations."
    },
    {
      icon: DollarSign,
      percentage: "50%",
      title: "Handling Complex Work",
      description: "Our prices are best in the market. No cap, no lock, no credit card required."
    },
    {
      icon: Cloud,
      percentage: "30%",
      title: "Web Design and Development",
      description: "I have a deep understanding of aesthetics and creativity, enabling me to design outstanding websites while also empathizing with user experience on both applications and websites."
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    const items = containerRef.current?.querySelectorAll(".feature-item");
    items?.forEach(item => observer.observe(item));

    return () => {
      items?.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="features-section" ref={containerRef}>
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon-container">
                <div className="feature-icon">
                  <feature.icon size={28} strokeWidth={1.2} />
                </div>
              </div>

              <div className="feature-percentage">{feature.percentage}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { FeaturesSection };
