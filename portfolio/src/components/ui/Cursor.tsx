import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useCursor } from '../../context/CursorContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const Cursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const { cursorState } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [data-cursor="hover"]');

      if (isInteractive) {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px) scale(1.5)`;
      } else {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px) scale(1)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${x - 16}px, ${y - 16}px)`,
      }}
    >
      <div
        className={`w-full h-full rounded-full border-2 transition-all duration-300 ${
          cursorState === 'hover'
            ? 'bg-accent1 border-accent1 scale-150'
            : cursorState === 'active'
            ? 'bg-accent2 border-accent2 scale-125'
            : 'bg-transparent border-white scale-100'
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          cursorState === 'hover' || cursorState === 'active' ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
