import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-surface">
      <div
        className="h-full bg-gradient-to-r from-accent1 via-accent2 to-accent3 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
