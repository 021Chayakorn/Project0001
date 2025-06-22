import React, { useEffect, useRef, useState } from 'react';
import './LogosRow.css';

const LogosRow: React.FC = () => {
  const logos = [
    "/public/web/1.png",
    "/public/web/2.png",
    "/public/web/3.png",
    "/public/web/4.png",
    "/public/web/5.png",
    "/public/web/Javascript.png",
    "/public/web/Typescript.png",
    "/public/web/PHP.png",
    "/public/web/Vue.png",
    "/public/web/node.png",
    "/public/web/next.png",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`logos-container logo-fadeup${visible ? " visible" : ""}`}
      ref={containerRef}
    >
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`logo-${index}`} className="logo-item" />
      ))}
    </div>
  );
};

export default LogosRow;