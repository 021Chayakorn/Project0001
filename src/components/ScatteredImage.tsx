import React, { useEffect, useState, useRef } from 'react';
import './img.css';

interface ImagePosition {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  size: number;
}

const ScatteredImage: React.FC = () => {
  const [imagePositions, setImagePositions] = useState<ImagePosition[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [resizing, setResizing] = useState<{ id: number; startSize: number; startY: number } | null>(null);
  const [dragging, setDragging] = useState<{ id: number; offsetX: number; offsetY: number } | null>(null);

  // High-quality images from Pexels
  const imageUrls = [
    '/public/web/Re.png?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    '/public/web/JavaScript.png?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    '/public/web/unnamed.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    '/public/web/Figma.png?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    '/public/web/3.png?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    '/public/web/ChatGPT-Logo.png?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    '/public/web/apple.png?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    '/public/web/nextjs.png?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    
  ];

  const generateRandomPositions = () => {
    const positions: ImagePosition[] = [];
    const baseImageSize = 120;
    const margin = 20;
    
    for (let i = 0; i < 8; i++) {
      let attempts = 0;
      let validPosition = false;
      let newPosition: ImagePosition;

      while (!validPosition && attempts < 50) {
        const x = Math.random() * (window.innerWidth - baseImageSize - margin * 2) + margin;
        const y = Math.random() * (window.innerHeight - baseImageSize - margin * 2) + margin;
        
        newPosition = {
          id: i,
          x,
          y,
          rotation: Math.random() * 30 - 15,
          delay: i * 0.1,
          size: baseImageSize + Math.random() * 60 // Random size between 120-180px
        };

        validPosition = positions.every(pos => {
          const distance = Math.sqrt(
            Math.pow(pos.x - newPosition.x, 2) + Math.pow(pos.y - newPosition.y, 2)
          );
          return distance > Math.max(pos.size, newPosition.size) + 20;
        });

        attempts++;
      }

      if (!validPosition) {
        const gridX = (i % 4) * (window.innerWidth / 4) + margin;
        const gridY = Math.floor(i / 4) * (window.innerHeight / 2) + margin;
        newPosition = {
          id: i,
          x: gridX,
          y: gridY,
          rotation: Math.random() * 30 - 15,
          delay: i * 0.1,
          size: baseImageSize + Math.random() * 60
        };
      }

      positions.push(newPosition!);
    }

    return positions;
  };

  // Resize handlers
  const handleResizeStart = (e: React.MouseEvent, imageId: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    const image = imagePositions.find(img => img.id === imageId);
    if (!image) return;

    setResizing({
      id: imageId,
      startSize: image.size,
      startY: e.clientY
    });
  };

  const handleResizeMove = (e: MouseEvent) => {
    if (!resizing) return;

    const deltaY = resizing.startY - e.clientY;
    const newSize = Math.max(60, Math.min(300, resizing.startSize + deltaY));

    setImagePositions(prev => 
      prev.map(img => 
        img.id === resizing.id 
          ? { ...img, size: newSize }
          : img
      )
    );
  };

  const handleResizeEnd = () => {
    setResizing(null);
  };

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent, imageId: number) => {
    // Prevent drag if resizing
    if (resizing) return;
    e.preventDefault();
    e.stopPropagation();

    const image = imagePositions.find(img => img.id === imageId);
    if (!image) return;

    // คำนวณ offset ระหว่าง mouse กับมุมบนซ้ายของรูป
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setDragging({
      id: imageId,
      offsetX,
      offsetY
    });
  };

  const handleDragMove = (e: MouseEvent) => {
    if (!dragging) return;

    setImagePositions(prev =>
      prev.map(img =>
        img.id === dragging.id
          ? {
              ...img,
              x: Math.min(
                Math.max(e.clientX - dragging.offsetX, 0),
                window.innerWidth - img.size
              ),
              y: Math.min(
                Math.max(e.clientY - dragging.offsetY, 0),
                window.innerHeight - img.size
              )
            }
          : img
      )
    );
  };

  const handleDragEnd = () => {
    setDragging(null);
  };

  // Effect for resizing
  useEffect(() => {
    if (resizing) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [resizing]);

  // Effect for dragging
  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);

      return () => {
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [dragging]);

  useEffect(() => {
    const positions = generateRandomPositions();
    setImagePositions(positions);
    
    setTimeout(() => setIsLoaded(true), 100);

    const handleResize = () => {
      const newPositions = generateRandomPositions();
      setImagePositions(newPositions);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app-container">
      {/* Scattered Images */}
      {imagePositions.map((position, index) => (
        <div
          key={position.id}
          className={`scattered-image ${isLoaded ? 'loaded' : ''} ${resizing?.id === position.id ? 'resizing' : ''} ${dragging?.id === position.id ? 'dragging' : ''}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `rotate(${position.rotation}deg)`,
            transitionDelay: `${position.delay}s`,
            cursor: dragging?.id === position.id ? 'grabbing' : 'grab'
          }}
          onMouseDown={e => handleDragStart(e, position.id)}
        >
          <div className="image-container">
            <img
              src={imageUrls[index]}
              alt={`Scattered image ${index + 1}`}
              loading="lazy"
              style={{
                width: `${position.size}px`,
                height: `${position.size}px`,
                 objectFit: 'contain'
              }}
              draggable={false}
            />
            <div className="image-overlay" />
            <div 
              className="resize-handle"
              onMouseDown={e => handleResizeStart(e, position.id)}
            />
          </div>
        </div>
      ))}

      {/* Floating Animation Elements */}
      <div className="floating-elements">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScatteredImage;