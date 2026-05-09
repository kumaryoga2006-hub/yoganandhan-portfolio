import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../../constants/data';
import { SkillCloud } from '../3d/SkillCloud';
import { useCursor } from '../../context/CursorContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Si from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<keyof typeof SKILLS.categories>('languages');
  const { setCursorState } = useCursor();

  const categories = Object.keys(SKILLS.categories) as Array<keyof typeof SKILLS.categories>;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-content', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.skill-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  const getIcon = (iconName: string) => {
    const IconComponent = (Si as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full mx-auto" />
        </div>

        {/* 3D Skill Cloud */}
        <div className="mb-16">
          <SkillCloud />
        </div>

        {/* Skills Content */}
        <div className="skills-content">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-accent1 to-accent2 text-white'
                    : 'bg-card text-text-muted hover:bg-surface'
                }`}
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
              >
                {SKILLS.categories[category].title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SKILLS.categories[activeTab].skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card bg-card rounded-xl p-6 border border-white/10 hover:border-accent1/50 transition-all duration-300 hover:-translate-y-2 group"
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
              >
                <div className="text-accent1 mb-3 group-hover:scale-110 transition-transform">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="text-text-primary font-medium text-sm mb-3">{skill.name}</h3>
                <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent1 to-accent2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <p className="text-text-muted text-xs mt-2">{skill.proficiency}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
