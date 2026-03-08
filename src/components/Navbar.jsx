import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

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
          ? 'bg-dark-bg/90 backdrop-blur-md border-b border-neon-green/30 py-4 shadow-[0_4px_30px_rgba(0,255,0,0.1)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white relative group interactive" onClick={() => setMenuOpen(false)}>
          <span className="text-neon-green">&gt;</span> Arun.
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Links */}
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

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-neon-green interactive outline-none p-2 -mr-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="bg-dark-bg/95 backdrop-blur-md border-b border-neon-green/20 flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-neon-green transition-colors duration-200 font-mono text-sm block py-2"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

