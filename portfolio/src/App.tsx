import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CursorProvider } from './context/CursorContext';
import { Cursor } from './components/ui/Cursor';
import { Loader } from './components/ui/Loader';
import { Navbar } from './components/ui/Navbar';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ParticleField } from './components/3d/ParticleField';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import Lenis from '@studio-freight/lenis';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <ParticleField />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <AppContent />
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
