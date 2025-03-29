import React from 'react';
import SkillBar from '../components/SkillBar';
import GlowingBorder from '../components/GlowingBorder';


const Skills = () => {
  const skills = [
    { name: 'Fullstack(MERN)', level: 95 },
    { name: 'Linux', level: 90 },
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'C++', level: 88 },
    { name: 'C', level: 30 },
    { name: 'UI/UX(Figma)', level: 90 },
    { name: 'Java', level: 30 },
    { name: 'Version Control(Git&Github)', level: 100 },
    { name: 'GEN AI', level: 30 }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono text-blue-400 mb-8">My SKILLS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <GlowingBorder 
                key={skill.name} 
                className="border border-blue-400 rounded-lg p-6 text-center
                           hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-300"
              >
                <SkillBar skill={skill} index={index} />
              </GlowingBorder>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
