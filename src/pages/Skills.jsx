import React, { useState } from 'react';
import SkillBar from '../components/SkillBar';
import GlowingBorder from '../components/GlowingBorder';
import { FaTrophy, FaChartLine, FaUserGraduate, FaLightbulb } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    // Mastered
    { name: 'JavaScript', level: 92, category: 'master' },
    { name: 'TypeScript', level: 85, category: 'master' },
    { name: 'React', level: 90, category: 'master' },
    { name: 'Node.js + Express', level: 88, category: 'master' },
    { name: 'MongoDB', level: 87, category: 'master' },
    { name: 'Git & GitHub', level: 95, category: 'master' },
    { name: 'Linux (Arch)', level: 90, category: 'master' },
    { name: 'Tailwind CSS', level: 90, category: 'master' },
    { name: 'UI/UX (Figma)', level: 85, category: 'master' },
    // Intermediate
    { name: 'Python', level: 55, category: 'intermediate' },
    { name: 'AI Integration (Gemini API)', level: 70, category: 'intermediate' },
    { name: 'Socket.IO', level: 65, category: 'intermediate' },
    { name: 'Next.js', level: 65, category: 'intermediate' },
    { name: 'Cloudflare / Netlify / Render', level: 72, category: 'intermediate' },
    { name: 'CI/CD & DevOps', level: 60, category: 'intermediate' },
    { name: 'REST API Design', level: 80, category: 'intermediate' },
    // Learning
    { name: 'FastAPI / Django', level: 30, category: 'learning' },
    { name: 'React Native', level: 30, category: 'learning' },
    { name: 'Docker', level: 25, category: 'learning' },
    { name: 'n8n (Workflow Automation)', level: 35, category: 'learning' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaChartLine /> },
    { id: 'master', name: 'Mastered', icon: <FaTrophy /> },
    { id: 'intermediate', name: 'Intermediate', icon: <FaUserGraduate /> },
    { id: 'learning', name: 'Currently Learning', icon: <FaLightbulb /> },
  ];

  const getCategoryTitle = (category) => {
    switch (category) {
      case 'master': return 'Mastered Skills';
      case 'intermediate': return 'Intermediate Skills';
      case 'learning': return 'Currently Learning';
      default: return 'All Skills';
    }
  };

  const getCategoryDescription = (category) => {
    switch (category) {
      case 'master': return 'Technologies I work with daily and can implement complex, production-ready solutions';
      case 'intermediate': return 'Technologies I am comfortable with and actively using in projects';
      case 'learning': return 'Technologies I am currently exploring and building projects with';
      default: return 'My complete technical skillset across all domains';
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
              My technical expertise spans full-stack web development, AI integration, Linux systems, and cloud deployment.
              Here's a breakdown by proficiency level.
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
                className={`border rounded-lg p-6 text-center hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-300
                           ${skill.category === 'master' ? 'border-blue-400' :
                             skill.category === 'intermediate' ? 'border-blue-500/70' : 'border-blue-700/40'}`}
              >
                <div className="mb-2">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full
                    ${skill.category === 'master' ? 'bg-blue-500 text-white' :
                      skill.category === 'intermediate' ? 'bg-blue-600/70 text-white' : 'bg-blue-800/40 text-white'}`}>
                    {skill.category === 'learning' ? 'Learning' : skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
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
