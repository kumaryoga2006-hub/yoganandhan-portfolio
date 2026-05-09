import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo stroke animation
    tl.fromTo(
      logoRef.current,
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' }
    );

    // Counter animation
    tl.to(
      { value: 0 },
      {
        value: 100,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: function () {
          setProgress(Math.round(this.targets()[0].value));
        },
      },
      '+=0.3'
    );

    // Fade out loader
    tl.to(
      loaderRef.current,
      {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.8,
        ease: 'power4.inOut',
      },
      '+=0.2'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <svg
          ref={logoRef}
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="stroke-accent1 fill-none"
          strokeWidth="3"
        >
          <text x="50%" y="55%" textAnchor="middle" fontSize="48" fontWeight="bold" fontFamily="Space Grotesk">
            YS
          </text>
        </svg>

        {/* Counter */}
        <div className="relative">
          <span ref={counterRef} className="text-6xl font-display font-bold text-text-primary">
            {progress}
          </span>
          <span className="text-6xl font-display font-bold text-accent1">%</span>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-surface overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent1 to-accent2 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
