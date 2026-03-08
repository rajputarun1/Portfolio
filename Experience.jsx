import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(elementsRef.current,
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
    <section id="experience" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-16">
          <span className="text-neon-green text-2xl mr-4 md:text-4xl">04.</span> 
          System_History
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education & Certifications Block */}
          <div ref={el => elementsRef.current[0] = el} className="opacity-0 space-y-12">
            <div>
              <h3 className="text-2xl font-mono text-white mb-6 flex items-center">
                <span className="text-neon-blue mr-3">&gt;</span> Education
              </h3>
              
              <div className="relative pl-8 border-l border-gray-700">
                <div className="absolute w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-blue -left-[9px] top-1"></div>
                <div className="glass-card-blue p-6 hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white mb-1">B.Tech Computer Science and Engineering</h4>
                  <div className="text-neon-blue font-mono text-sm mb-4">Lovely Professional University | 2023 - Present</div>
                  <p className="text-gray-400 font-mono text-sm">
                    CGPA: 7.38
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-mono text-white mb-6 flex items-center">
                <span className="text-neon-blue mr-3">&gt;</span> Certifications
              </h3>
              
              <div className="relative pl-8 border-l border-gray-700">
                <div className="absolute w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-blue -left-[9px] top-1"></div>
                <div className="glass-card-blue p-6 hover:-translate-y-2 transition-transform duration-300">
                  <ul className="text-gray-400 space-y-3 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-neon-blue mr-2">■</span> 
                      <a href="https://drive.google.com/file/d/1NbnVkXO376IDK-I4LuMxfCIGtoZxxQNm/view" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors interactive">Generative AI Tools – Infosys Springboard</a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-blue mr-2">■</span>
                      <a href="https://drive.google.com/file/d/1wT7qYxhyRt2BHCtjpLnEOa19kdf7kSsN/view" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors interactive">Computational Theory & Automata – Infosys Springboard</a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-blue mr-2">■</span>
                      <a href="https://drive.google.com/file/d/1R5VML_aU8cwuhWI9gl4w7rW0cWXOrMZO/view" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors interactive">Java Programming – IamNeo</a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-blue mr-2">■</span>
                      <a href="https://drive.google.com/file/d/112l1NlyB-ToVFX1EKf7opHC8pFj0iTwS/view" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors interactive">Cloud Computing – NPTEL</a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-blue mr-2">■</span>
                      <a href="https://drive.google.com/file/d/16AUsDhZbTvJjYLzOrneX8DeGcw7cj-Cb/view" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors interactive">C++ Programming – IamNeo</a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-blue mr-2">■</span>
                      <a href="https://drive.google.com/file/d/19pNfPlTYd2qSlhbz19SX5xK0-Lo_wmf0/view" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors interactive">Data Structures & Algorithms – IamNeo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Block */}
          <div ref={el => elementsRef.current[1] = el} className="opacity-0">
            <h3 className="text-2xl font-mono text-white mb-6 flex items-center">
              <span className="text-neon-green mr-3">&gt;</span> Achievements
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-8 border-l border-gray-700">
                <div className="absolute w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-green -left-[9px] top-1"></div>
                <div className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-neon-green/10 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white">DSA Milestone</h4>
                  </div>
                  <p className="text-gray-400">Solved 100+ problems on LeetCode and GeeksforGeeks</p>
                </div>
              </div>

              <div className="relative pl-8 border-l border-gray-700">
                <div className="absolute w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-green -left-[9px] top-1"></div>
                <div className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-neon-green/10 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white">4-Star HackerRank</h4>
                  </div>
                  <p className="text-gray-400">Achieved 4-Star Gold Badge on HackerRank (C++, C, Python)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
