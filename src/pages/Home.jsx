import React, { useState, useEffect } from 'react';
import { ChevronRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCode, FaArrowRight } from 'react-icons/fa';
import GlowingBorder from '../components/GlowingBorder';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  const typewriterTexts = [
    'FULL-STACK DEVELOPER',
    'AI INTEGRATION ENGINEER',
    'OPEN SOURCE FOUNDER',
    'MERN STACK ENGINEER',
    'LINUX ENTHUSIAST'
  ];

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);

    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    let textIndex = 0;
    let timer;

    const getRandomTypingDelay = () => Math.floor(Math.random() * 60) + 120;

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

      let typeSpeed;
      if (isDeleting) {
        typeSpeed = 70;
      } else {
        typeSpeed = getRandomTypingDelay();
      }

      if (!isDeleting && currentIndex === fullText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
        typeSpeed = 800;
      }

      timer = setTimeout(type, typeSpeed);
    };

    const startTimer = setTimeout(type, 1200);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, []);

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
                  <span className="text-xl font-semibold">1+ Years</span>
                </div>
                <div className="px-4 py-3 border border-blue-400 rounded-lg font-mono bg-blue-900 bg-opacity-30 hover:bg-opacity-40 transition-colors">
                  <span className="block text-sm text-blue-300">SPECIALIZATION</span>
                  <span className="text-xl font-semibold">FULL STACK + AI</span>
                </div>
                <div className="px-4 py-3 border border-blue-400 rounded-lg font-mono bg-blue-900 bg-opacity-30 hover:bg-opacity-40 transition-colors">
                  <span className="block text-sm text-blue-300">PROJECTS</span>
                  <span className="text-xl font-semibold">18+ Built</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => scrollToSection('#about')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group"
                >
                  About Me <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border border-blue-400 hover:bg-blue-900/40 rounded-md font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group"
                >
                  <Download size={16} /> Resume
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/balajirkb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-blue-400 rounded-full hover:bg-blue-900 hover:bg-opacity-40 transition-colors group"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/balaji-rkb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-blue-400 rounded-full hover:bg-blue-900 hover:bg-opacity-40 transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                  </a>
                  <button
                    onClick={() => scrollToSection('#projects')}
                    className="p-3 border border-blue-400 rounded-full hover:bg-blue-900 hover:bg-opacity-40 transition-colors group"
                    aria-label="View Projects"
                  >
                    <FaCode className="text-xl group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </GlowingBorder>
        </div>

        <div className={`mt-12 text-center text-gray-400 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-mono text-sm">ARCH LINUX • REACT • NODE.JS • OPEN SOURCE • AI</p>
        </div>
      </section>

      <style jsx>{`
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
