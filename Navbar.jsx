import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '01. About', href: '#about' },
    { name: '02. Skills', href: '#skills' },
    { name: '03. Projects', href: '#projects' },
    { name: '04. Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 font-mono ${
        scrolled 
          ? 'bg-dark-bg/80 backdrop-blur-md border-b border-neon-green/30 py-4 shadow-[0_4px_30px_rgba(0,255,0,0.1)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white relative group interactive">
          <span className="text-neon-green">&gt;</span> Arun.
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></span>
        </a>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-gray-400 hover:text-neon-green transition-colors duration-300 interactive text-sm relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-green/50 transition-all duration-300 group-hover:w-full delay-150"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button (simple implementation) */}
        <div className="md:hidden">
          <button className="text-neon-green interactive outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
