import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cyberProjects = [
  {
    title: "AI-Based Phishing Detection System",
    description: "Machine learning system to detect phishing URLs and malicious email patterns using NLP and classification algorithms.",
    status: "Under Development"
  },
  {
    title: "Malware Behavior Analysis Sandbox",
    description: "Automated malware analysis environment to monitor suspicious file behavior and detect ransomware patterns.",
    status: "Under Development"
  },
  {
    title: "Dark Web Threat Intelligence Crawler",
    description: "Secure crawler to collect and analyze dark web threat data for cybercrime investigation and threat intelligence.",
    status: "Under Development"
  }
];

const CyberProjects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Staggered reveal for cards
    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="cyber-projects" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-16">
          <span className="text-neon-green text-2xl mr-4 md:text-4xl">03_B.</span> 
          Cybersecurity_Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cyberProjects.map((project, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="glass-card-blue p-8 flex flex-col items-start gap-4 opacity-0 transform-gpu group border-dashed"
            >
              {/* Lock Icon */}
              <div className="p-3 bg-neon-blue/10 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300">
                <Lock className="text-neon-blue w-6 h-6 group-hover:animate-pulse" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Badge */}
              <div className="mt-4 pt-4 border-t border-neon-blue/20 w-full flex justify-between items-center">
                <span className="font-mono text-xs text-yellow-400/90 animate-pulse bg-yellow-500/10 px-3 py-1 rounded-sm border border-yellow-500/30">
                  [{project.status}]
                </span>
                
                {/* Cyber decorative element */}
                <div className="flex gap-1">
                  <span className="w-1 h-3 bg-neon-blue/40 block group-hover:bg-neon-blue transition-colors"></span>
                  <span className="w-1 h-3 bg-neon-blue/40 block group-hover:bg-neon-blue transition-colors delay-75"></span>
                  <span className="w-1 h-3 bg-neon-blue/40 block group-hover:bg-neon-blue transition-colors delay-150"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberProjects;
