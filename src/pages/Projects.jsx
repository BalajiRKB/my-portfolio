import React from 'react';
import ProjectCard from '../components/ProjectCard';
import GlowingBorder from '../components/GlowingBorder';

const Projects = () => {
  const projects = [
    {
      title: 'Nand to Tetris',
      description: 'Creating a computer.',
      technologies: ['HDL', 'Assembly'],
      github: 'https://github.com/balaji-r-2007/nand2tetris-part1',
      demo: ''
    },
    {
      title: 'Zombie Shoot',
      description: 'A 2d Shooting Survival game.',
      technologies: ['HTML', 'Css', 'Java Script'],
      github: 'https://github.com/balaji-r-2007/zombie-game/',
      demo: 'https://balaji-r-2007.github.io/zombie-game/'
    },
    {
      title: 'Cric Web',
      description: 'Cricket Score ',
      technologies: ['HTML', 'Css', 'Java Script'],
      github: 'https://github.com/Balaji-R-2007/cric-web.git',
      demo: 'https://balaji-r-2007.github.io/cric-web/'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono text-blue-400 mb-8">PROJECTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {projects.map((project, index) => (
                <GlowingBorder>
                    <ProjectCard key={project.title} project={project} index={index} />
                </GlowingBorder>
              
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
