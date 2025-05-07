import React, { useState } from 'react';
import SkillBar from '../components/SkillBar';
import GlowingBorder from '../components/GlowingBorder';
import { FaTrophy, FaChartLine, FaUserGraduate, FaLightbulb } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    { name: 'Fullstack(MERN)', level: 90, category: 'master' },
    { name: 'Linux', level: 90, category: 'master' },
    { name: 'Python', level: 50, category: 'intermediate' },
    { name: 'JavaScript', level: 92, category: 'master' },
    { name: 'C++', level: 35, category: 'beginner' },
    { name: 'UI/UX(Figma)', level: 90, category: 'master' },
    { name: 'Version Control(Git&Github)', level: 100, category: 'master' },
    { name: 'C', level: 15, category: 'learning' },
    { name: 'Java', level: 20, category: 'learning' },
    { name: 'React-Native', level: 10, category: 'learning' },
    { name: 'GEN AI', level: 55, category: 'intermediate' },

  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaChartLine /> },
    { id: 'master', name: 'Mastered', icon: <FaTrophy /> },
    { id: 'intermediate', name: 'Intermediate', icon: <FaUserGraduate /> },
    { id: 'beginner', name: 'Beginner', icon: <FaLightbulb /> },
    { id: 'learning', name: 'Currently Learning', icon: <FaLightbulb /> },
  ];

  const getCategoryTitle = (category) => {
    switch(category) {
      case 'master':
        return 'Mastered Skills';
      case 'intermediate':
        return 'Intermediate Skills';
      case 'beginner':
        return 'Beginner Skills';
      case 'learning':
        return 'Currently Learning';
      default:
        return 'All Skills';
    }
  };

  const getCategoryDescription = (category) => {
    switch(category) {
      case 'master':
        return 'Technologies I have extensive experience with and can implement complex solutions';
      case 'intermediate':
        return 'Technologies I am comfortable working with but still developing expertise';
      case 'beginner':
        return 'Technologies I have foundational knowledge of and can use for basic applications';
      case 'learning':
        return 'Technologies I am currently studying and building projects with';
      default:
        return 'My complete technical skillset across various domains';
    }
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-blue-400"></div>
            <h2 className="text-4xl font-mono text-blue-400 tracking-wider">TECHNICAL SKILLS</h2>
            <div className="h-1 w-12 bg-blue-400"></div>
          </div>
          
          <div className="mb-12 text-center">
            <p className="text-blue-300/80 max-w-3xl mx-auto">
              My technical expertise spans multiple domains with a focus on web development, 
              Linux systems, and AI. Below is a breakdown of my skills 
              by proficiency level.
            </p>
          </div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
                  ${activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-900/20 text-blue-300 hover:bg-blue-900/40'}`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Category Description */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-300 mb-2 text-center">
              {getCategoryTitle(activeCategory)}
            </h3>
            <p className="text-center text-blue-300/70 mb-8 max-w-2xl mx-auto">
              {getCategoryDescription(activeCategory)}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <GlowingBorder 
                key={skill.name} 
                className={`border border-blue-400 rounded-lg p-6 text-center
                           hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-300
                           ${skill.category === 'master' ? 'border-blue-400' : 
                             skill.category === 'intermediate' ? 'border-blue-500/70' : 
                             skill.category === 'beginner' ? 'border-blue-600/50' : 'border-blue-700/40'}`}
              >
                <div className="mb-2">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full
                    ${skill.category === 'master' ? 'bg-blue-500 text-white' : 
                      skill.category === 'intermediate' ? 'bg-blue-600/70 text-white' : 
                      skill.category === 'beginner' ? 'bg-blue-700/50 text-white' : 'bg-blue-800/40 text-white'}`}>
                    {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                  </span>
                </div>
                <SkillBar skill={skill} index={index} />
              </GlowingBorder>
            ))}
          </div>
          
          {filteredSkills.length === 0 && (
            <div className="text-center text-blue-300 mt-8">
              No skills found in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Skills;