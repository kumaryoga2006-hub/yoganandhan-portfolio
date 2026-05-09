import React, { useEffect, useRef } from 'react';
import { ACHIEVEMENTS, STATS } from '../../constants/data';
import { useCursor } from '../../context/CursorContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setCursorState } = useCursor();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      gsap.from('.stat-item', {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-row',
          start: 'top 80%',
        },
      });

      // Timeline items animation
      gsap.from('.timeline-item', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            Achievements & Milestones
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full mx-auto" />
        </div>

        {/* Stats Row */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {Object.entries(STATS).map(([key, value]) => (
            <div
              key={key}
              className="stat-item bg-card rounded-xl p-6 text-center border border-white/10 hover:border-accent1/50 transition-all duration-300"
            >
              <div className="text-3xl font-display font-bold text-accent1 mb-2">{value}</div>
              <div className="text-text-muted text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent1 via-accent2 to-accent3 -translate-x-1/2" />

          <div className="space-y-12">
            {ACHIEVEMENTS.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-accent1 rounded-full -translate-x-1/2 border-4 border-background animate-pulse-slow" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div
                    className="bg-card rounded-xl p-6 border border-white/10 hover:border-accent1/50 transition-all duration-300"
                    onMouseEnter={() => setCursorState('hover')}
                    onMouseLeave={() => setCursorState('default')}
                  >
                    <div className="flex items-center gap-3 mb-3 md:justify-start">
                      <span className="text-3xl">{achievement.icon}</span>
                      <span className="text-accent2 font-mono text-sm">{achievement.year}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-accent1 text-sm mb-3">{achievement.institution}</p>
                    <p className="text-text-muted text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
