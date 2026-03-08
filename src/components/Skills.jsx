import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Programming",
    icon: "terminal",
    skills: ["C", "C++", "Python", "Java", "JavaScript"]
  },
  {
    title: "Web Development",
    icon: "layout",
    skills: ["React.js", "Node.js", "Express.js"]
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "SQL"]
  },
  {
    title: "Tools & Platforms",
    icon: "cpu",
    skills: ["Git", "GitHub", "Postman", "VS Code", "MS SQL Server"]
  }
];

const getIcon = (type) => {
  switch(type) {
    case 'terminal':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
    case 'layout':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />;
    case 'database':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />;
    case 'cpu':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />;
    default:
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />;
  }
};

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Staggered reveal for skill cards
    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
    <section id="skills" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-16">
          <span className="text-neon-green text-2xl mr-4 md:text-4xl">02.</span> 
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="glass-card p-8 group opacity-0"
            >
              <div className="flex items-center mb-6 text-neon-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {getIcon(category.icon)}
                </svg>
                <h3 className="text-2xl font-mono text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-4 py-2 font-mono text-sm bg-dark-bg/80 border border-gray-700 text-gray-300 rounded group-hover:border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 hover:text-neon-green transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
