import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const glitchRef = useRef(null);
  const typingRef = useRef(null);
  
  const roles = [
    "Cybersecurity Enthusiast.",
    "Full Stack Developer.",
    "System Securer.",
    "Scalable App Builder."
  ];

  useEffect(() => {
    // Glitch effect setup
    const glitchElement = glitchRef.current;
    
    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    glitchTimeline.to(glitchElement, {
      x: -2, y: 1, duration: 0.1, ease: 'power1.inOut'
    }).to(glitchElement, {
      x: 1, y: -1, duration: 0.1, ease: 'power1.inOut'
    }).to(glitchElement, {
      x: 0, y: 0, duration: 0.1, ease: 'power1.inOut'
    }).to(glitchElement, {
      skewX: 10, duration: 0.05
    }).to(glitchElement, {
      skewX: 0, duration: 0.05
    });

    // Typing effect setup
    const el = typingRef.current;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout = null;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        el.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before new word
      }

      typingTimeout = setTimeout(type, typingSpeed);
    };

    typingTimeout = setTimeout(type, 1000);

    return () => {
      glitchTimeline.kill();
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-[-1]" style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'}}></div>

      <div className="max-w-4xl w-full">
        <div className="font-mono text-neon-green mb-4">
          <span className="text-gray-500 mr-2">&gt;</span>
          <span>System.Identity.Initialize()</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          Hello, World. <br />
          I am <span ref={glitchRef} className="text-neon-green inline-block uppercase tracking-widest relative" data-text="ARUN">ARUN</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-400 font-mono mb-10 h-8 flex items-center">
          <span className="text-neon-blue mr-2">$</span>
          <span ref={typingRef}></span>
          <span className="inline-block w-3 h-6 bg-neon-green ml-1 animate-pulse"></span>
        </div>

        <p className="text-gray-400 max-w-2xl text-lg mb-12 leading-relaxed">
          Securing Systems. Building Scalable Applications. 
          Bridging the gap between robust cybersecurity practices and modern full-stack development.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
          <a href="https://drive.google.com/file/d/1fuAM7XdCDNq42hSfmEyM1Oth-R3JF0Wd/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn-cyber interactive group">
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Access Resume
            </span>
          </a>
          <a href="#projects" className="btn-cyber interactive group">
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 group-hover:text-white transition-colors"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              View Projects
            </span>
          </a>
          <a href="#contact" className="btn-cyber-blue interactive group">
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Initialize Contact
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
