import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCode, FaArrowRight } from 'react-icons/fa';
import GlowingBorder from '../components/GlowingBorder';

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const typewriterTexts = [
    'FULL-STACK DEVELOPER',
    'LINUX ENTHUSIAST',
    'ARCH LINUX CONFIGURATOR',
    'OPEN SOURCE ADVOCATE'
  ];

  useEffect(() => {
    const hasAccepted = localStorage.getItem('portfolioAccepted');
    if (hasAccepted === 'true') {
      setAccepted(true);
    } else {
      setShowNotification(true);
    }
    
    // Add animation delay
    setTimeout(() => setLoaded(true), 100);

    // Custom typewriter effect with improved timing
    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    let textIndex = 0;
    
    // Add variable typing speed for more natural feel
    const getRandomTypingDelay = () => {
      // Between 120ms and 180ms for typing
      return Math.floor(Math.random() * 60) + 120;
    };

    const type = () => {
      const fullText = typewriterTexts[textIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentIndex - 1);
        currentIndex--;
      } else {
        currentText = fullText.substring(0, currentIndex + 1);
        currentIndex++;
      }
      
      setTypewriterText(currentText);
      
      // Adjust typing speeds for more natural feel
      let typeSpeed;
      
      if (isDeleting) {
        // Faster when deleting but still not too fast
        typeSpeed = 70;
      } else {
        // Variable typing speed for realistic effect
        typeSpeed = getRandomTypingDelay();
      }
      
      if (!isDeleting && currentIndex === fullText.length) {
        // Longer pause at end of completed text
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
        // Pause before typing next phrase
        typeSpeed = 800;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    // Start after a short delay
    const typeTimer = setTimeout(type, 1200);
    
    return () => clearTimeout(typeTimer);
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    setShowNotification(false);
    localStorage.setItem('portfolioAccepted', 'true');
  };

  const HeroPattern = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
      <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {showNotification && !accepted ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        
            <div className="bg-gray-900 border border-blue-400 p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-mono text-blue-400 mb-4">SYSTEM NOTIFICATION</h2>
              <div className="h-1 w-24 bg-blue-400 mb-4"></div>
              <p className="text-lg mb-6 text-blue-100">
                Developer profile authenticated. Initializing secure portfolio access...
              </p>
              <div className="w-full bg-gray-800 h-2 mb-6 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full animate-pulse-width"></div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-mono
                           transition-colors duration-200 flex items-center gap-2 group"
                >
                  PROCEED <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
      
        </div>
      ) : (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
          <HeroPattern />
          
          <div className={`relative z-10 max-w-4xl w-full transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <GlowingBorder>
              <div className="p-10 border border-blue-400 rounded-lg bg-blue-900 bg-opacity-20 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h1 className="text-5xl md:text-7xl font-bold text-white font-mono mb-4">
                    Balaji R
                  </h1>
                  <div className="h-1 w-24 bg-blue-400 mx-auto"></div>
                </div>
                
                <div className="text-xl md:text-2xl text-blue-300 font-mono h-12 mb-8 text-center">
                  <div className="inline-block min-h-[1.5em]">
                    {typewriterText}
                    <span className="inline-block w-1 h-6 bg-blue-400 ml-1 animate-cursor"></span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                  <div className="px-4 py-3 border border-blue-400 rounded-lg font-mono bg-blue-900 bg-opacity-30 hover:bg-opacity-40 transition-colors">
                    <span className="block text-sm text-blue-300">EXPERIENCE</span>
                    <span className="text-xl font-semibold">6 months+</span>
                  </div>
                  
                  <div className="px-4 py-3 border border-blue-400 rounded-lg font-mono bg-blue-900 bg-opacity-30 hover:bg-opacity-40 transition-colors">
                    <span className="block text-sm text-blue-300">SPECIALIZATION</span>
                    <span className="text-xl font-semibold">FULL STACK</span>
                  </div>
                  
                  <div className="px-4 py-3 border border-blue-400 rounded-lg font-mono bg-blue-900 bg-opacity-30 hover:bg-opacity-40 transition-colors">
                    <span className="block text-sm text-blue-300">OS EXPERTISE</span>
                    <span className="text-xl font-semibold">ARCH LINUX</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a 
                    href="/about" 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group"
                  >
                    About Me <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/balajirkb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 border border-blue-400 rounded-full hover:bg-blue-900 hover:bg-opacity-40 transition-colors group"
                    >
                      <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/balaji-rkb/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 border border-blue-400 rounded-full hover:bg-blue-900 hover:bg-opacity-40 transition-colors group"
                    >
                      <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                      href="/projects" 
                      className="p-3 border border-blue-400 rounded-full hover:bg-blue-900 hover:bg-opacity-40 transition-colors group"
                    >
                      <FaCode className="text-xl group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </GlowingBorder>
          </div>
          
          <div className={`mt-12 text-center text-gray-400 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-mono text-sm">ARCH LINUX • REACT • NODE.JS • OPEN SOURCE</p>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes pulse-width {
          0%, 100% { width: 0%; }
          50% { width: 100%; }
        }
        
        .animate-pulse-width {
          animation: pulse-width 2s ease-in-out infinite;
        }
        
        @keyframes cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-cursor {
          animation: cursor 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;