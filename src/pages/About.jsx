import React from 'react';
import StatusCard from '../components/StatusCard';
import GlowingBorder from '../components/GlowingBorder';

const About = () => {
  const stats = [
    { title: 'Problem Solving', value: '92/100', level: 92, delay: 0 },
    { title: 'Code Quality', value: '88/100', level: 88, delay: 0.1 },
    { title: 'Team Collaboration', value: '95/100', level: 95, delay: 0.2 },
    { title: 'Learning Speed', value: '90/100', level: 90, delay: 0.3 }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono text-blue-400 mb-8">ABOUT</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div className="space-y-4">
              <p className="text-lg">
                Just as hunters level up through countless battles, I grow stronger 
                through each project and challenge. Every day is an opportunity to 
                unlock new skills and push the boundaries of what's possible with code.
              </p>
              <p className="text-lg">
                My journey in technology is a constant evolution, turning obstacles 
                into stepping stones for growth. Like a hunter seeking to become 
                stronger, I embrace each challenge as a chance to level up.
              </p>
            </div>
            <GlowingBorder>
            <div className="border border-blue-400 p-6 rounded-lg bg-opacity-30 bg-blue-900">
              <h3 className="text-xl font-mono mb-4">MY STATS</h3>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <StatusCard 
                    key={stat.title} 
                    title={stat.title} 
                    value={stat.value} 
                    level={stat.level} 
                    delay={stat.delay} 
                  />
                ))}
              </div>
            </div>
            </GlowingBorder>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
