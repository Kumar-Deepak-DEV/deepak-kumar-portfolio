import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailingRef = useRef(null);

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    let mouseX = 0, mouseY = 0;
    let trailingX = 0, trailingY = 0;
    let isHovering = false;

    // We use a manual animation loop for absolute max performance (0 React renders!)
    const render = () => {
      // Smooth interpolation for the trailing circle
      trailingX += (mouseX - trailingX) * 0.15;
      trailingY += (mouseY - trailingY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (trailingRef.current) {
        trailingRef.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0) scale(${isHovering ? 2 : 1})`;
      }
      
      requestAnimationFrame(render);
    };
    
    requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      const isInteractable =
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button');
      
      isHovering = !!isInteractable;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.head.removeChild(style);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* High-Performance Main Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] -ml-1 -mt-1 mix-blend-difference" 
        style={{ willChange: 'transform' }} 
      />
      
      {/* High-Performance Trailing Glowing Ring (Inverts Colors) */}
      <div 
        ref={trailingRef} 
        className="fixed top-0 left-0 w-12 h-12 bg-white rounded-full pointer-events-none z-[9999] -ml-6 -mt-6 mix-blend-difference opacity-80" 
        style={{ willChange: 'transform', transition: 'scale 0.2s ease-out' }} 
      />
    </>
  );
};

export default CustomCursor;
