import React, { useEffect, useState } from 'react';
import './PhotoBox.css';

const PhotoBox = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // รูปวงกลมทางซ้าย (5 รูป)
  const leftCircleImages = [
    "/public/aaa/Ch.jpg", // ใช้ path นี้ถ้าไฟล์อยู่ใน public/aaa/Ch.jpg
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=200&fit=crop"
  ];

  // รูปวงกลมทางขวา (4 รูป)
  const rightCircleImages = [
    "https://i.pinimg.com/736x/38/39/08/3839081cd34f8e0b089fe716a571604a.jpg",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop"
  ];

  // รูปสี่เหลี่ยมทางขวา (2 รูป)
  const rightSquareImages = [
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=200&h=200&fit=crop"
  ];

  // ตำแหน่งรูปวงกลมทางซ้าย
  const leftCirclePositions = [
    { top: '-200px', left: '-300px', rotate: '-15deg' },
    { top: '80px', left: '-450px', rotate: '8deg' },
    { top: '-120px', left: '-600px', rotate: '-25deg' },
    { top: '180px', left: '-350px', rotate: '12deg' },
    { top: '-50px', left: '-500px', rotate: '-8deg' }
  ];

  // ตำแหน่งรูปวงกลมทางขวา
  const rightCirclePositions = [
    { top: '-180px', right: '-320px', rotate: '18deg' },
    { top: '120px', right: '-480px', rotate: '-12deg' },
    { top: '-80px', right: '-620px', rotate: '22deg' },
    { top: '80px', right: '-380px', rotate: '-18deg' }
  ];

  // ตำแหน่งรูปสี่เหลี่ยมทางขวา
  const rightSquarePositions = [
    { top: '-120px', right: '-500px', rotate: '-20deg' },
    { top: '160px', right: '-600px', rotate: '25deg' }
  ];

  return (
    <div className="photo-box-bg">
      <div className="photo-box-center">
        {/* Center Content */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 photo-box-center-content">
          <h2>PhotoBox Center Content</h2>
          <p>ใส่เนื้อหาตรงนี้ได้เลย</p>
        </div>

        {/* Left Circles */}
        <div className="photo-box-circle">
          {leftCircleImages.map((image, index) => (
            <div
              key={`left-circle-${index}`}
              className={`absolute transition-all duration-1000 ease-out ${
                isLoaded
                  ? `transform opacity-100`
                  : `transform translate-x-0 translate-y-0 opacity-0`
              }`}
              style={{
                top: isLoaded ? leftCirclePositions[index]?.top : '0px',
                left: isLoaded ? leftCirclePositions[index]?.left : '0px',
                transitionDelay: `${index * 200}ms`,
                transform: isLoaded
                  ? `rotate(${leftCirclePositions[index]?.rotate})`
                  : `rotate(0deg) scale(0.5)`,
                zIndex: 5 - index
              }}
            >
              <div className="relative group">
                <img
                  src={image}
                  alt={`Left Circle ${index + 1}`}
                  className="photo-box-img circle"
                />
                <div className="photo-box-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Circles */}
        <div className="photo-box-circle">
          {rightCircleImages.map((image, index) => (
            <div
              key={`right-circle-${index}`}
              className={`absolute transition-all duration-1000 ease-out ${
                isLoaded
                  ? `transform opacity-100`
                  : `transform translate-x-0 translate-y-0 opacity-0`
              }`}
              style={{
                top: isLoaded ? rightCirclePositions[index]?.top : '0px',
                right: isLoaded ? rightCirclePositions[index]?.right : '0px',
                transitionDelay: `${index * 200}ms`,
                transform: isLoaded
                  ? `rotate(${rightCirclePositions[index]?.rotate})`
                  : `rotate(0deg) scale(0.5)`,
                zIndex: 5 - index
              }}
            >
              <div className="relative group">
                <img
                  src={image}
                  alt={`Right Circle ${index + 1}`}
                  className="photo-box-img circle"
                />
                <div className="photo-box-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Squares */}
        <div className="photo-box-square">
          {rightSquareImages.map((image, index) => (
            <div
              key={`right-square-${index}`}
              className="absolute"
              style={{
                top: rightSquarePositions[index]?.top,
                right: rightSquarePositions[index]?.right,
                transform: rightSquarePositions[index]?.rotate
                  ? `rotate(${rightSquarePositions[index].rotate})`
                  : undefined,
                zIndex: 2
              }}
            >
              <img
                src={image}
                alt={`Right Square ${index + 1}`}
                className="photo-box-img square"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoBox;