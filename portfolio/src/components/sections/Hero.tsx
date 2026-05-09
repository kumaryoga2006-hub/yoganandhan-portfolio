import React, { useEffect, useRef } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/data';
import { useTypewriter } from '../../hooks/useTypewriter';
import { HeroSphere } from '../3d/HeroSphere';
import { useCursor } from '../../context/CursorContext';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorState } = useCursor();
  const typedText = useTypewriter(PERSONAL_INFO.roles, 80, 50, 2000);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 2.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="hero-content space-y-6">
          <p className="text-accent2 font-mono text-lg">Hello, I'm</p>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          
          <div className="h-12">
            <h2 className="text-2xl md:text-3xl font-body text-accent1">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-xl text-text-muted max-w-lg">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-accent1 to-accent2 text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent1/30 transition-all duration-300 flex items-center gap-2"
              onMouseEnter={() => setCursorState('hover')}
              onMouseLeave={() => setCursorState('default')}
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              className="px-8 py-3 border-2 border-accent1 text-accent1 rounded-full font-medium hover:bg-accent1 hover:text-white transition-all duration-300 flex items-center gap-2"
              onMouseEnter={() => setCursorState('hover')}
              onMouseLeave={() => setCursorState('default')}
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-accent1/20 transition-colors group"
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
                aria-label={social.name}
              >
                {social.name === 'GitHub' ? (
                  <FaGithub className="w-5 h-5 text-text-muted group-hover:text-accent1 transition-colors" />
                ) : (
                  <FaLinkedin className="w-5 h-5 text-text-muted group-hover:text-accent1 transition-colors" />
                )}
              </a>
            ))}
          </div>
        </div>
        
        {/* Right 3D Panel */}
        <div className="hidden md:block">
          <HeroSphere />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-text-muted hover:text-accent1 transition-colors"
          onMouseEnter={() => setCursorState('hover')}
          onMouseLeave={() => setCursorState('default')}
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};
