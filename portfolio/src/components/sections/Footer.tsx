import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/data';
import { useCursor } from '../../context/CursorContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { setCursorState } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Copyright */}
          <p className="text-text-muted text-center">
            Designed & Built by {PERSONAL_INFO.name} © {new Date().getFullYear()}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent1/20 transition-colors group text-text-muted hover:text-accent1"
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-accent1 to-accent2 text-white rounded-full shadow-lg hover:shadow-accent1/50 transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setCursorState('hover')}
              onMouseLeave={() => setCursorState('default')}
              aria-label="Back to top"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
