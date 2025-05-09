import React, { useState, useEffect } from 'react';
import GlowingBorder from '../components/GlowingBorder';
import { FaSearch, FaStar, FaArrowRight, FaGithub, FaExternalLinkAlt, FaCode, FaTimes, FaCheck } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState(['all']);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const projects = [
    {
      title: 'Aninick',
      description: 'A fullstack MERN application for anime nicknames featuring user authentication, personalized collections and advanced search capabilities.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Balaji-R-2007/s76_Ani_nick/',
      demo: 'https://ani-nick.pages.dev/',
      category: 'fullstack',
      featured: true,
      image: '/images/aninick.png'
    },
    {
      title: 'Rubric Lens AI',
      description: 'Computer vision AI application that evaluates images based on customizable rubrics, useful for educational assessment and quality analysis.',
      technologies: ['AI', 'React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      github: 'https://github.com/Balaji-R-2007/rubric_lens/',
      demo: 'https://rubric-lens.pages.dev/',
      category: 'ai',
      featured: true,
      image: '/images/rubric-lens.png'
    },
    {
      title: 'Portfolio',
      description: 'Personal portfolio website inspired by the anime "Solo Leveling" with custom animations and responsive design.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      github: 'https://github.com/Balaji-R-2007/my-portfolio',
      demo: 'https://balajirkb.netlify.app/',
      category: 'frontend',
      featured: true,
      image: '/images/portfolio.png'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce solution with product management, shopping cart functionality, user reviews and secure checkout.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Balaji-R-2007/Ecommerce-Follow-Along',
      demo: '',
      category: 'fullstack',
      featured: false,
      image: '/images/ecommerce.png'
    },
    {
      title: 'Nand to Tetris',
      description: 'Building a modern computer from first principles, from logic gates all the way to a functional computer system.',
      technologies: ['HDL', 'Assembly'],
      github: 'https://github.com/balaji-r-2007/nand2tetris-part1',
      demo: '',
      category: 'systems',
      featured: false,
      image: '/images/nand2tetris.png'
    },
    {
      title: 'Zombie Shoot',
      description: 'Action-packed 2D shooting survival game with increasing difficulty levels, weapon upgrades and score tracking.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/balaji-r-2007/zombie-game/',
      demo: 'https://balaji-r-2007.github.io/zombie-game/',
      category: 'gaming',
      featured: false,
      image: '/images/zombie-game.png'
    },
    {
      title: 'Archo',
      description: 'A morden Asteroid Shooter game built using React.js and the HTML5 Canvas API. Players control a spaceship to shoot and destroy incoming asteroids while avoiding collisions. The game features smooth controls, sound effects, and increasing difficulty.',
      technologies: ['React', 'Tailwindcss', 'HTML5 Canvas'],
      github: 'https://github.com/balaji-r-2007/archo/',
      demo: 'https://archo.pages.dev/',
      category: 'gaming',
      featured: true,
      image: '/images/Archo.png'
    },
    {
      title: 'Cric Web',
      description: 'Real-time cricket score tracking application with match statistics, player profiles and live commentary features.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Balaji-R-2007/cric-web.git',
      demo: 'https://balaji-r-2007.github.io/cric-web/',
      category: 'frontend',
      featured: false,
      image: '/images/cric-web.png'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'gaming', name: 'Games' },
    { id: 'systems', name: 'Systems' }
  ];

  const toggleCategory = (categoryId) => {
    if (categoryId === 'all') {
      setSelectedCategories(['all']);
      return;
    }

    let newCategories = [...selectedCategories];
    if (newCategories.includes('all')) {
      newCategories = newCategories.filter(cat => cat !== 'all');
    }

    if (newCategories.includes(categoryId)) {
      if (newCategories.length > 1) {
        newCategories = newCategories.filter(cat => cat !== categoryId);
      }
    } else {
      newCategories.push(categoryId);
    }

    if (newCategories.length === 0) {
      newCategories = ['all'];
    }

    setSelectedCategories(newCategories);
  };

  useEffect(() => {
    let filtered = [...projects];

    if (!selectedCategories.includes('all')) {
      filtered = filtered.filter(project =>
        selectedCategories.includes(project.category)
      );
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        project =>
          project.title.toLowerCase().includes(search) ||
          project.description.toLowerCase().includes(search) ||
          project.technologies.some(tech => tech.toLowerCase().includes(search))
      );
    }

    setDisplayedProjects(filtered);

    setTimeout(() => setLoaded(true), 400);
  }, [selectedCategories, searchTerm]);

  const featuredProjects = projects.filter(project => project.featured);

  const ProjectCard = ({ project }) => (
    <div className="border border-blue-400/70 bg-blue-900/20 rounded-lg overflow-hidden hover:bg-blue-900/30 transition-all duration-300 h-full flex flex-col">
      <div className="relative">
        {project.image && (
          <div className="h-48 bg-blue-900/40 flex items-center justify-center overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://dummyimage.com/600x400/0a4275/ffffff&text=${project.title}`;
              }}
            />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span className="bg-blue-900/80 text-blue-200 text-xs px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-lg font-semibold text-blue-300 mb-2">{project.title}</h4>
        <p className="text-blue-100/80 mb-4 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-blue-800/50 text-blue-200">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-800/50 text-blue-200">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex justify-between mt-auto pt-2 border-t border-blue-900/30">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-1"
            aria-label={`View code for ${project.title}`}
          >
            <FaGithub /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-1 group"
              aria-label={`View demo for ${project.title}`}
            >
              Demo <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-blue-400"></div>
            <h2 className="text-4xl font-mono text-blue-400 tracking-wider">PROJECTS</h2>
            <div className="h-1 w-12 bg-blue-400"></div>
          </div>

          <p className="text-blue-300/80 max-w-3xl mx-auto mb-12 text-center">
            Explore my portfolio of projects spanning web development, AI applications, systems programming and game development.
            Each project represents my commitment to clean code, innovative solutions, and continuous learning.
          </p>

          {featuredProjects.length > 0 && (
            <div className={`mb-16 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-blue-300 mb-8">Featured Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <GlowingBorder key={project.title} intensity={0.6}>
                    <div className="border border-blue-400 bg-blue-900/20 rounded-lg overflow-hidden hover:bg-blue-900/30 transition-all duration-300 h-full flex flex-col">
                      <div className="relative">
                        {project.image && (
                          <div className="h-56 bg-blue-900/40 flex items-center justify-center overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = `https://dummyimage.com/600x400/0a4275/ffffff&text=${project.title.replace(/\s+/g, '+')}`;
                              }}
                            />
                          </div>
                        )}
                        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          <FaStar className="inline mr-1" />Featured
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-semibold text-blue-300 mb-2">{project.title}</h4>
                        <p className="text-blue-100 mb-4 text-sm flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-800/50 text-blue-200">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-800/50 text-blue-200">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between mt-auto pt-3 border-t border-blue-800/30">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-2"
                          >
                            <FaGithub /> View Code
                          </a>
                          {project.demo ? (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-2 group"
                            >
                              Live Demo <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                          ) : (
                            <span className="text-blue-400/50 text-sm italic">Demo coming soon</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowingBorder>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-auto flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 bg-blue-900/20 border border-blue-400 rounded-lg text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {!selectedCategories.includes('all') && selectedCategories.length > 0 && (
              <div className="flex items-center gap-2 mr-2">
                <span className="text-blue-300 text-sm">Filters:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedCategories.map(catId => (
                    <span
                      key={catId}
                      className="flex items-center gap-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {categories.find(c => c.id === catId)?.name}
                      <button
                        onClick={() => toggleCategory(catId)}
                        className="hover:text-blue-200"
                        aria-label={`Remove ${catId} filter`}
                      >
                        <FaTimes size={10} />
                      </button>
                    </span>
                  ))}
                  <button
                    onClick={() => setSelectedCategories(['all'])}
                    className="text-blue-300 text-xs underline hover:text-blue-200"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-2
                  ${selectedCategories.includes(category.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-900/20 text-blue-300 hover:bg-blue-900/40'}`}
              >
                {selectedCategories.includes(category.id) && <FaCheck size={10} />}
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-700 transform ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {displayedProjects.length === 0 && (
            <div className="text-center py-16 text-blue-300">
              <p className="text-xl">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategories(['all']);
                  setSearchTerm('');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {displayedProjects.length > 0 && (
            <div className="mt-8 text-center text-blue-300/70 text-sm">
              Showing {displayedProjects.length} {displayedProjects.length === 1 ? 'project' : 'projects'}
              {!selectedCategories.includes('all') && ` in ${selectedCategories.length} ${selectedCategories.length === 1 ? 'category' : 'categories'}`}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;