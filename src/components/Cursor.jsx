import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device — don't show custom cursor on mobile/tablet
    const hasTouchScreen = window.matchMedia('(pointer: coarse)').matches;
    if (hasTouchScreen) {
      setIsTouch(true);
      return;
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render anything on touch/mobile devices
  if (isTouch) return null;

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-4 h-4 rounded-full bg-neon-green/80 pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? 'scale-[2.5] bg-neon-blue/80' : 'scale-100'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border border-neon-green/40 pointer-events-none z-[9998] transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? 'scale-[1.5] border-neon-blue/60' : 'scale-100'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default Cursor;

