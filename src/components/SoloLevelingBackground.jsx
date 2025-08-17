import React from 'react';

const SoloLevelingBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Dark magical background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black"></div>
      
      {/* Animated magical particles */}
      <div className="particles-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating energy orbs */}
      <div className="orbs-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="energy-orb"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Magical aura rings */}
      <div className="rings-container">
        <div className="magic-ring ring-1"></div>
        <div className="magic-ring ring-2"></div>
        <div className="magic-ring ring-3"></div>
      </div>
      
      {/* Lightning effect overlay */}
      <div className="lightning-overlay"></div>
      
      {/* Floating runes */}
      <div className="runes-container">
        {['♦', '◊', '◈', '◇', '⬟', '⬢'].map((rune, i) => (
          <div
            key={i}
            className="floating-rune"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 3}s`
            }}
          >
            {rune}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: floatUp linear infinite;
          box-shadow: 0 0 6px #3b82f6;
        }
        
        .particle::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .orbs-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .energy-orb {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.1), transparent);
          animation: floatOrb ease-in-out infinite;
          box-shadow: 
            0 0 20px rgba(139, 92, 246, 0.5),
            0 0 40px rgba(59, 130, 246, 0.3),
            inset 0 0 20px rgba(139, 92, 246, 0.2);
        }
        
        .energy-orb::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.6), transparent);
          border-radius: 50%;
          animation: innerPulse 3s ease-in-out infinite;
        }
        
        .rings-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .magic-ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          animation: rotateRing linear infinite;
        }
        
        .ring-1 {
          width: 300px;
          height: 300px;
          border-color: rgba(59, 130, 246, 0.2);
          animation-duration: 20s;
          top: -150px;
          left: -150px;
        }
        
        .ring-2 {
          width: 500px;
          height: 500px;
          border-color: rgba(139, 92, 246, 0.15);
          animation-duration: 30s;
          animation-direction: reverse;
          top: -250px;
          left: -250px;
        }
        
        .ring-3 {
          width: 700px;
          height: 700px;
          border-color: rgba(99, 102, 241, 0.1);
          animation-duration: 40s;
          top: -350px;
          left: -350px;
        }
        
        .lightning-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 48%, rgba(96, 165, 250, 0.1) 49%, rgba(96, 165, 250, 0.1) 51%, transparent 52%);
          animation: lightning 15s ease-in-out infinite;
          opacity: 0;
        }
        
        .runes-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .floating-rune {
          position: absolute;
          font-size: 24px;
          color: rgba(139, 92, 246, 0.4);
          animation: floatRune 12s ease-in-out infinite;
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
          top: 80%;
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes floatOrb {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
        }
        
        @keyframes innerPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.3;
          }
        }
        
        @keyframes rotateRing {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes lightning {
          0%, 95%, 100% {
            opacity: 0;
          }
          96%, 99% {
            opacity: 0.8;
          }
          97%, 98% {
            opacity: 0.2;
          }
        }
        
        @keyframes floatRune {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) rotate(270deg);
            opacity: 0.8;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .energy-orb {
            width: 40px;
            height: 40px;
          }
          
          .energy-orb::before {
            width: 20px;
            height: 20px;
          }
          
          .ring-1 {
            width: 200px;
            height: 200px;
            top: -100px;
            left: -100px;
          }
          
          .ring-2 {
            width: 350px;
            height: 350px;
            top: -175px;
            left: -175px;
          }
          
          .ring-3 {
            width: 500px;
            height: 500px;
            top: -250px;
            left: -250px;
          }
          
          .floating-rune {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default SoloLevelingBackground;