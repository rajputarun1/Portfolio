import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    
    gsap.fromTo(el, 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">
          <span className="text-neon-green text-2xl mr-4 md:text-4xl">01.</span> 
          About_Me
        </h2>
        
        <div ref={contentRef} className="glass-card p-8 md:p-12 max-w-4xl opacity-0 transform-gpu">
          <div className="font-mono text-neon-green mb-6 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            [SYSTEM_OVERVIEW_ENCRYPTED]
          </div>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans">
            <p>
              Initiating profile scan... I am <strong className="text-white">Arun Pratap Singh Bhadoriya</strong>, a passionate Computer Science Engineering student dedicated to architecting secure, scalable systems. With a strong foundation in full-stack development and an underlying passion for discovering vulnerabilities, I seamlessly integrate performance and security into the development lifecycle.
            </p>
            <p>
              My expertise bridges the gap between robust software engineering and modern web technologies. I leverage strong proficiency in Data Structures and Algorithms to write highly optimized code while maintaining a strict posture against cyber threats. 
            </p>
            <p>
              Whether it's building a Full Stack Healthcare Platform with deep JWT authentication, or a visualization dashboard for CPU Scheduling algorithms, I thrive on solving complex technical challenges. My mission is to build the future of the web, ensuring it is both performant and reliable.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-neon-green/10 flex justify-between items-center text-sm font-mono text-gray-500">
            <span>STATUS: ACTIVE_DEVELOPMENT</span>
            <span>CLEARANCE: LEVEL_4</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
