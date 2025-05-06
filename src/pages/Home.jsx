import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import GlowingBorder from '../components/GlowingBorder';

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('portfolioAccepted');
    if (hasAccepted === 'true') {
      setAccepted(true);
    } else {
      setShowNotification(true);
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    setShowNotification(false);
    localStorage.setItem('portfolioAccepted', 'true');
  };

  const HeroPattern = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen">
      {showNotification && !accepted ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  
          <div className="bg-gray-900 border border-blue-400 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-mono text-blue-400 mb-4">SYSTEM NOTIFICATION</h2>
            <p className="text-lg mb-6">
              Developer status confirmed. Initializing portfolio access...
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-mono
                         transition-colors duration-200 flex items-center gap-2"
              >
                PROCEED <ChevronRight />
              </button>
            </div>
          </div>
        
  
        </div>

      ) : (
        
        <section className="relative min-h-screen flex items-center justify-center">
          <HeroPattern />
          <GlowingBorder>
          <div className="relative z-10 text-center space-y-6 p-10 border border-blue-400 rounded-lg bg-opacity-30 bg-blue-900">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-400 font-mono">
              Balaji R
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 font-mono">
              LEVELING UP IN TECHNOLOGY
            </p>
            <div className="flex justify-center gap-4">
                <div className="px-4 py-2 border border-blue-400 rounded font-mono">
                  LEVEL 10
                </div>
              
                <div className="px-4 py-2 border border-blue-400 rounded font-mono">
                  Web Dev
                </div>
              
            </div>
          </div>
          </GlowingBorder>
        </section>
      )}
    </div>
  );
};

export default Home;
