import React, { useEffect, useState } from 'react';
import StatusCard from '../components/StatusCard';
import GlowingBorder from '../components/GlowingBorder';
import SoloLevelingBackground from '../components/SoloLevelingBackground';
import { FaCode, FaGraduationCap, FaLaptopCode, FaUserTie, FaLightbulb, FaChartLine, FaLinux, 
         FaGithub, FaTerminal, FaBriefcase, FaRegCalendarAlt, FaAward, FaUniversity, FaStar, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stats data
  const stats = [
    { title: 'Technical Problem Solving', value: '92/100', level: 92, delay: 0 },
    { title: 'Code Architecture & Quality', value: '88/100', level: 88, delay: 0.1 },
    { title: 'Cross-functional Collaboration', value: '95/100', level: 95, delay: 0.2 },
    { title: 'Continuous Learning', value: '90/100', level: 90, delay: 0.3 }
  ];

  // Timeline data - customize with your actual experience
  const timeline = [
    {
      year: "2024 - Present",
      title: "Software Product Engineering",
      organization: "Kalvium",
      description: "Advanced training in product engineering methodologies, full-stack development, and DevOps practices.",
      icon: <FaGraduationCap className="text-2xl" />,
      type: "education",
      achievements: [
        "Learnt full-stack development with focus on performance optimization",
        "Built scalable web applications using MERN stack",
        "Implemented DevOps practices including CI/CD and containerization"
  
      ],
      color: "#3182ce"
    },
    {
      year: "2025 - Present",
      title: "Bachelor of Computer Applications",
      organization: "University of Mysore",
      description: "Pursuing degree with focus on software development fundamentals and computer science theory.",
      icon: <FaUniversity className="text-2xl" />,
      type: "education",
      achievements: [
        "Maintained a 3.8 GPA with focus on advanced programming",
        "Course project recognized for innovative approach to data visualization"
      ],
      color: "#3182ce"
    },
    {
      year: "Jul 2025 - Present",
      title: "Open source Contributor",
      organization: "GSSoC",
      description: "Active contributor to multiple open-source projects focused on web technologies and developer tools.",
      icon: <FaGithub className="text-2xl" />,
      type: "experience",
      achievements: [
        "Contributed to 5+ open source projects with accepted PRs"
      ],
      color: "#38a169"
    },
    {
      year: "2025 - Present",
      title: "Campus Ambassador",
      organization: "GSSoC",
      description: "Promoting open-source contributions and mentoring students in web development.",
      icon: <FaLaptopCode className="text-2xl" />,
      type: "project",
      achievements: [
      "Organized workshops on Git and open-source best practices",
      "Mentored 10+ students in their first open-source contributions",
      "Created educational content on web development topics"
      ],
      color: "#805ad5"
    },
    {
      year: "2020 - Current",
      title: "Linux Systems Specialist",
      organization: "Self-directed",
      description: "Mastered multiple Linux distributions including Ubuntu, Fedora, and Arch Linux with custom configurations.",
      icon: <FaLinux className="text-2xl" />,
      type: "experience",
      achievements: [
        "Optimized Linux server resulting in 35% performance improvement",
        "Automated system maintenance tasks with custom bash scripts",
        "Set up secure remote access protocols for distributed team"
      ],
      color: "#38a169"
    }
  ];

  const technicalSkills = [
    { 
      icon: <FaCode className="text-2xl" />, 
      title: "Frontend", 
      skills: ["React", "Tailwind CSS", "JavaScript/TypeScript", "Framer Motion"],
      color: "#4299e1"
    },
    { 
      icon: <FaTerminal className="text-2xl" />, 
      title: "Backend", 
      skills: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
      color: "#48bb78"
    },
    { 
      icon: <FaLinux className="text-2xl" />, 
      title: "DevOps", 
      skills: ["Linux Administration", "Git/GitHub", "CI/CD", "System Optimization"],
      color: "#9f7aea"
    },
  ];
  
  // Auto-advance timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineIndex((prev) => (prev + 1) % timeline.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Solo Leveling Three.js Background */}
      <SoloLevelingBackground />
      
      <div className="stars-container absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <motion.div 
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-1 w-12 bg-blue-400"></div>
            <h2 className="text-4xl font-mono text-blue-400 tracking-wider">MY JOURNEY</h2>
            <div className="h-1 w-12 bg-blue-400"></div>
          </motion.div>
          
          {/* Summary Section - Creative Intro */}
          <div className="grid md:grid-cols-3 gap-12 text-white mb-20">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-blue-300 mb-4">
                The Story So Far
              </h3>
              <p className="text-lg leading-relaxed">
                <span className="text-blue-300 text-2xl font-mono">&lt;Balaji /&gt;</span> here, a software developer with an obsession for performance optimization and elegant code. I navigate between Linux kernels and React components with equal enthusiasm, turning complex challenges into clean solutions.
              </p>
              <p className="text-lg leading-relaxed">
                My journey spans from mastering Arch Linux configurations to building full-stack applications that focus on both performance and user experience. With each project, I bring curiosity, first-principles thinking, and a collaborative mindset.
              </p>
              
              <div className="mt-8">
                <button 
                  onClick={() => scrollToSection('#projects')}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold overflow-hidden bg-blue-600 rounded-lg"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-800 rounded-full group-hover:w-80 group-hover:h-80"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-blue-400"></span>
                  <span className="relative flex items-center">
                    View Projects
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <GlowingBorder className="profile-image-container">
                <div className="profile-image-container">
                  <img
                    src="/profile.jpg"
                    alt="Balaji R - Full Stack Developer"
                    className="profile-image"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="profile-image hidden image-placeholder">
                    <div className="text-center">
                      <div className="text-6xl mb-2">👨‍💻</div>
                      <div className="text-sm font-mono">BALAJI R</div>
                      <div className="text-xs opacity-60">Full Stack Developer</div>
                    </div>
                  </div>
                </div>
              </GlowingBorder>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <GlowingBorder className="h-full">
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl transform hover:scale-[1.02] transition-transform h-full flex flex-col">
                  <h4 className="text-xl font-semibold text-blue-300 mb-4 text-center">Development Metrics</h4>
                  <iframe 
                    src="https://github-readme-stats.vercel.app/api?username=balajirkb&show_icons=true&theme=tokyonight&hide_border=true" 
                    frameBorder="0"
                    className="w-full flex-grow"
                    title="GitHub Statistics"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  ></iframe>
                  <div className="hidden text-center text-blue-300 py-10">
                    GitHub statistics currently unavailable. Please check back later.
                  </div>
                </div>
              </GlowingBorder>
            </motion.div>
          </div>
          
          {/* New Interactive Timeline */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-blue-300 mb-12 text-center">
              
              Career Milestones
            </h3>
            
            <div className="relative">
              {/* Progress bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500"
                  style={{ width: `${(activeTimelineIndex / (timeline.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              {/* Timeline indicators */}
              <div className="flex justify-between mb-12 mt-6">
                {timeline.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-6 h-6 rounded-full border-2 border-gray-700 flex items-center justify-center ${index <= activeTimelineIndex ? 'bg-blue-500' : 'bg-gray-800'}`}
                    onClick={() => setActiveTimelineIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index <= activeTimelineIndex && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Timeline content card */}
              <div className="perspective-1000">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotateX: 30 }}
                    animate={{ 
                      opacity: index === activeTimelineIndex ? 1 : 0,
                      rotateX: index === activeTimelineIndex ? 0 : 30,
                      zIndex: index === activeTimelineIndex ? 10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full"
                    style={{ display: index === activeTimelineIndex ? 'block' : 'none' }}
                  >
                    <div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden transform-gpu transition-transform duration-700 hover:scale-[1.01] border border-gray-700">
                      <div className="p-1" style={{ backgroundColor: item.color + '30' }}>
                        <div className="h-1 w-full" style={{ backgroundColor: item.color }}></div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="p-4 rounded-full" style={{ backgroundColor: item.color + '20' }}>
                            <div className="text-3xl" style={{ color: item.color }}>
                              {item.icon}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-2xl font-semibold text-white">
                                {item.title}
                              </h4>
                              <span className="text-gray-400 text-sm flex items-center bg-gray-800 px-3 py-1 rounded-full">
                                <FaRegCalendarAlt className="mr-2" size={12} />
                                {item.year}
                              </span>
                            </div>
                            
                            <p className="text-blue-300 font-medium text-lg mb-4">
                              {item.organization}
                            </p>
                            
                            <p className="text-gray-300 mb-6">
                              {item.description}
                            </p>
                            
                            <div className="space-y-2">
                              <h5 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">Key Achievements</h5>
                              {item.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2">
                                 <span className='text-blue-500'>+</span>
                                  <p className="text-gray-300">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Timeline navigation buttons */}
              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setActiveTimelineIndex((prev) => (prev - 1 + timeline.length) % timeline.length)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <button 
                  onClick={() => setActiveTimelineIndex((prev) => (prev + 1) % timeline.length)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center"
                >
                  Next
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Skill Hexagon Grid */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-blue-300 mb-12 text-center">
             
              Technical Arsenal
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {technicalSkills.map((skillGroup, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="hex-container">
                    <div className="hex" style={{ backgroundColor: skillGroup.color + '20', borderColor: skillGroup.color + '40' }}>
                      <div className="hex-content p-6 flex flex-col items-center text-center">
                        <div className="text-4xl mb-4" style={{ color: skillGroup.color }}>
                          {skillGroup.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-4">{skillGroup.title}</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {skillGroup.skills.map((skill, i) => (
                            <motion.span 
                              key={i} 
                              className="px-3 py-1 rounded-full text-sm"
                              style={{ backgroundColor: skillGroup.color + '20', color: skillGroup.color }}
                              initial={{ scale: 0.9 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          

          
          {/* Call to Action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <button 
              onClick={() => scrollToSection('#projects')}
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-lg rounded-lg transform transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              Explore My Projects
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* CSS for stars effect */}
      <style>{`
        .stars-container {
          perspective: 500px;
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: space 180s ease-in-out infinite;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.2;
        }
        
        .stars2 {
          background-image: 
            radial-gradient(1px 1px at 100px 150px, #3182ce, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 200px 250px, #3182ce, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 300px 350px, #3182ce, rgba(0,0,0,0));
          animation-delay: -20s;
        }
        
        .stars3 {
          background-image: 
            radial-gradient(1px 1px at 50px 80px, #9f7aea, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 150px 180px, #9f7aea, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 250px 280px, #9f7aea, rgba(0,0,0,0));
          animation-delay: -40s;
        }
        
        @keyframes space {
          0% {transform: perspective(500px) rotateX(0deg) translateZ(0);}
          50% {transform: perspective(500px) rotateX(10deg) translateZ(-10px);}
          100% {transform: perspective(500px) rotateX(0deg) translateZ(0);}
        }
        
        .hex-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }
        
        .hex {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(100, 116, 139, 0.3);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          transform-style: preserve-3d;
        }
        
        .group:hover .hex {
          transform: translateY(-8px) rotateY(5deg);
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
        }
        
        .hex:before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          transform: translateY(100%);
          transition: all 0.6s ease;
          opacity: 0;
        }
        
        .group:hover .hex:before {
          transform: translateY(0);
          opacity: 1;
        }
        
        .perspective-1000 {
          perspective: 1000px;
          min-height: 300px;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default About;