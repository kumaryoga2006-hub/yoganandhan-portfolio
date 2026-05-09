import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../../constants/data';
import { useCursor } from '../../context/CursorContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const { setCursorState } = useCursor();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card group relative"
              onMouseEnter={() => setCursorState('hover')}
              onMouseLeave={() => setCursorState('default')}
            >
              <div
                className="relative h-80 bg-card rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  borderTop: `4px solid ${project.accentColor}`,
                }}
              >
                {/* Front Face */}
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-surface rounded-full text-xs text-accent2 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-text-muted">{project.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-surface hover:bg-accent1/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="w-5 h-5 text-text-muted" />
                    </a>
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-surface hover:bg-accent1/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5 text-text-muted" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 border border-white/10"
              onClick={(e) => e.stopPropagation()}
              style={{ borderTop: `4px solid ${selectedProject.accentColor}` }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-display font-bold text-text-primary">
                  {selectedProject.name}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-surface rounded-full text-sm text-accent2 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-text-muted mb-6">{selectedProject.longDescription}</p>

              <div className="mb-6">
                <h4 className="text-text-primary font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-surface rounded-full text-sm text-text-muted border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent1 to-accent2 text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent1/30 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  View Code
                </a>
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-accent1 text-accent1 rounded-full font-medium hover:bg-accent1 hover:text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
