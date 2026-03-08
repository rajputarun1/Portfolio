import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [terminalOutput, setTerminalOutput] = useState([
    "user@system:~$ ./initiate_contact.sh",
    "Initializing secure connection... [OK]",
    "Awaiting user input..."
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => {
    setTerminalOutput(prev => [...prev, `user@system:~$ Edit field: ${field}`]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerminalOutput(prev => [
      ...prev, 
      "user@system:~$ ./send_payload.sh",
      "Encrypting message instance... [OK]",
      "Establishing secure tunnel... [OK]",
      "Payload transmitted successfully.",
      "Connection terminated."
    ]);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-16 text-center w-full block">
          <span className="text-neon-green text-2xl mr-4 md:text-4xl">05.</span> 
          Establish_Connection
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="glass-card p-6 flex items-center gap-4 group">
              <div className="p-3 bg-neon-green/10 rounded-sm group-hover:bg-neon-green/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-neon-green text-sm">SECURE_COMMS_EMAIL</p>
                <a href="mailto:rajputarunpratapsingh@gmail.com" className="text-white hover:text-neon-green interactive break-all">rajputarunpratapsingh@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4 group">
              <div className="p-3 bg-neon-green/10 rounded-sm group-hover:bg-neon-green/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-neon-green text-sm">ENCRYPTED_LINE</p>
                <a href="tel:+917828700582" className="text-white hover:text-neon-green interactive">+91-7828700582</a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4 group">
              <div className="p-3 bg-neon-green/10 rounded-sm group-hover:bg-neon-green/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div>
                <p className="font-mono text-neon-green text-sm">CODE_REPOSITORY</p>
                <a href="https://github.com/rajputarun1" target="_blank" rel="noreferrer" className="text-white hover:text-neon-green interactive">github.com/rajputarun1</a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4 group">
              <div className="p-3 bg-neon-green/10 rounded-sm group-hover:bg-neon-green/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-green"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <p className="font-mono text-neon-green text-sm">PROFESSIONAL_NETWORK</p>
                <a href="https://www.linkedin.com/in/rajputarun01" target="_blank" rel="noreferrer" className="text-white hover:text-neon-green interactive">linkedin.com/in/rajputarun01</a>
              </div>
            </div>
          </div>

          {/* Hacker Terminal Form */}
          <div className="lg:w-2/3 border border-gray-700 bg-[#0a0a0a] rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.05)] flex flex-col relative group">
            <div className="absolute inset-0 bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] px-4 py-2 border-b border-gray-700 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-mono text-gray-400">root@apbhadoriya:~</div>
              <div></div>
            </div>

            <div className="p-6 flex-1 flex flex-col font-mono text-sm">
              <div className="text-green-400 mb-6 h-32 overflow-y-auto">
                {terminalOutput.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                <span className="animate-pulse">_</span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-auto">
                <div className="flex items-center">
                  <span className="text-neon-green mr-2 w-24">$_ NAME:</span>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('NAME')}
                    required
                    className="flex-1 bg-transparent border-b border-gray-700 text-white focus:border-neon-green focus:outline-none py-1 interactive" 
                    placeholder="Enter identifying string" 
                  />
                </div>
                
                <div className="flex items-center">
                  <span className="text-neon-green mr-2 w-24">$_ EMAIL:</span>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('EMAIL')}
                    required
                    className="flex-1 bg-transparent border-b border-gray-700 text-white focus:border-neon-green focus:outline-none py-1 interactive" 
                    placeholder="Enter return address payload" 
                  />
                </div>

                <div className="flex items-start">
                  <span className="text-neon-green mr-2 w-24 pt-1">$_ MESSAGE:</span>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('MESSAGE')}
                    required
                    rows="4"
                    className="flex-1 bg-transparent border border-gray-700 text-white focus:border-neon-green focus:outline-none py-2 px-3 interactive resize-none" 
                    placeholder="Input transmission data here..." 
                  />
                </div>

                <div className="mt-4 self-end">
                  <button type="submit" className="btn-cyber interactive">
                    [EXECUTE_TRANSMISSION]
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
