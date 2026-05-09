import React, { useEffect, useRef } from 'react';
import { ABOUT } from '../../constants/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column animation
      gsap.from('.about-3d', {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Right column animation
      gsap.from('.about-content', {
        x: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Fact cards stagger animation
      gsap.from('.fact-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.facts-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D card tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 20;
    const rotateY = (centerX - e.clientX) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left 3D Element */}
          <div className="about-3d flex justify-center">
            <div
              ref={cardRef}
              className="relative w-80 h-96 bg-card rounded-2xl p-8 flex items-center justify-center border border-white/10 transition-transform duration-300 ease-out"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glowing Avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent1 to-accent2 animate-pulse-slow blur-xl opacity-50" />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent1 to-accent2 flex items-center justify-center mb-4">
                  <span className="text-4xl font-display font-bold text-white">YS</span>
                </div>
                <p className="text-text-primary font-display font-bold text-xl">Yoganandhan S</p>
                <p className="text-accent2 text-sm">Full Stack Developer</p>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent3/30 animate-float" />
              <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-accent2/30 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Right Content */}
          <div className="about-content space-y-8">
            <div>
              <h2 className="text-4xl font-display font-bold text-text-primary mb-2">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full" />
            </div>

            <p className="text-lg text-text-muted leading-relaxed">
              {ABOUT.summary}
            </p>

            {/* Education Card */}
            <div className="bg-card rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="text-text-primary font-semibold text-lg">{ABOUT.education.degree}</h3>
                  <p className="text-accent1">{ABOUT.education.institution}</p>
                  <p className="text-text-muted text-sm">Expected {ABOUT.education.expectedGraduation}</p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="facts-grid grid grid-cols-2 gap-4">
              {ABOUT.quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="fact-card bg-card rounded-lg p-4 border border-white/10 flex items-center gap-3"
                >
                  <span className="text-2xl">{fact.icon}</span>
                  <span className="text-text-muted text-sm">{fact.label}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="bg-card rounded-xl p-6 border border-white/10">
              <h3 className="text-text-primary font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {ABOUT.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-surface rounded-full text-sm text-text-muted border border-white/10"
                  >
                    {lang.name} <span className="text-accent2">• {lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
