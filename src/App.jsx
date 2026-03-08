import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

// Components
import Cursor from './components/Cursor';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CyberProjects from './components/CyberProjects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll progress bar
    const updateProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollLen = (scrollPx / winHeightPx) * 100;
      setProgress(scrollLen);
    };
    
    window.addEventListener('scroll', updateProgress);

    // Initial loader animation
    const loadSequence = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      clearTimeout(loadSequence);
    };
  }, []);

  return (
    <>
      <Cursor />
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-neon-green z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,255,0,0.8)]"
        style={{ width: `${progress}%` }}
      />
      
      {loading ? (
        <div className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center font-mono">
          <div className="w-64 mb-4 border border-neon-green/30 h-2 p-[1px]">
            <div className="h-full bg-neon-green animate-[load_2s_ease-out_forwards]"></div>
          </div>
          <div className="text-neon-green text-sm flex gap-2">
            <span>[ SYSTEM_BOOT ]</span>
            <span className="animate-pulse">Loading modules...</span>
          </div>
        </div>
      ) : (
        <div className="relative min-h-screen text-gray-300 font-sans opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
          <MatrixBackground />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <CyberProjects />
            <Experience />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
      
      <style>{`
        @keyframes load {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default App;
