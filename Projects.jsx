import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Prescripto",
    subtitle: "Full Stack Doctor Appointment Platform",
    description: "Developed and deployed a scalable full-stack healthcare platform for doctor discovery and online appointment booking. Built secure RESTful APIs using Node.js, Express, and MongoDB Atlas. Implemented JWT authentication and role-based admin dashboard. Integrated Cloudinary for secure image uploads. Deployed application on Render and Vercel.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Cloudinary"],
    github: "https://github.com/rajputarun1",
    live: "https://prescripto-swkh.vercel.app/"
  },
  {
    title: "CPU Scheduler Simulator",
    subtitle: "Algorithmic Visualization Engine",
    description: "Built an interactive simulator for FCFS, SJF, Round Robin and Priority scheduling algorithms. Implemented real-time visualizations for process flow, waiting time and turnaround time. Designed interactive UI for performance comparison of algorithms.",
    tech: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    github: "https://github.com/rajputarun1/Cpu-Scheduler",
    live: "https://rajputarun1.github.io/Cpu-Scheduler/"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-16">
          <span className="text-neon-green text-2xl mr-4 md:text-4xl">03.</span> 
          Software Development Projects
        </h2>
        
        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={el => projectRefs.current[index] = el}
              className={`glass-card p-8 md:p-10 flex flex-col md:flex-row gap-8 opacity-0 transform-gpu ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image Placeholder - Cyberpunk style */}
              <div className="md:w-1/2 relative group rounded-lg overflow-hidden border border-neon-green/30 bg-dark-surface min-h-[250px] flex items-center justify-center">
                <div className="absolute inset-0 bg-neon-green/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <div className="font-mono text-neon-green/30 text-6xl font-bold opacity-30 select-none">
                  [SYS_IMG]
                </div>
                {/* Simulated scanline effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-green/50 opacity-0 group-hover:opacity-100 group-hover:animate-scanline z-20"></div>
              </div>

              {/* Project Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="font-mono text-neon-green mb-2 text-sm tracking-widest uppercase">
                  Featured_Module
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <h4 className="text-lg text-gray-400 mb-6 font-mono border-b border-gray-800 pb-2">{project.subtitle}</h4>
                
                <p className="text-gray-300 mb-6 leading-relaxed bg-dark-bg/80 p-4 rounded-md border border-gray-800/50">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-sm font-mono text-neon-green">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="text-white hover:text-neon-green hover:scale-110 transition-transform duration-300 interactive p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href={project.live} className="text-white hover:text-neon-green hover:scale-110 transition-transform duration-300 interactive p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
