import React from 'react';
import StatusCard from '../components/StatusCard';
import GlowingBorder from '../components/GlowingBorder';
import { FaCode, FaGraduationCap, FaLaptopCode, FaUserTie, FaLightbulb, FaChartLine, FaLinux, FaGithub, FaTerminal } from 'react-icons/fa';

const About = () => {
  const stats = [
    { title: 'Technical Problem Solving', value: '92/100', level: 92, delay: 0 },
    { title: 'Code Architecture & Quality', value: '88/100', level: 88, delay: 0.1 },
    { title: 'Cross-functional Collaboration', value: '95/100', level: 95, delay: 0.2 },
    { title: 'Continuous Learning', value: '90/100', level: 90, delay: 0.3 }
  ];

  const milestones = [
    { 
      icon: <FaGraduationCap className="text-2xl" />, 
      title: "Education", 
      description: "pursuing BCA in university of Mysore and Software Product Engineering at Kalvium" 
    },
    { 
      icon: <FaCode className="text-2xl" />, 
      title: "Technical Expertise", 
      description: "Full-stack developer proficient in React, Node.js, and AI integrations" 
    },
    { 
      icon: <FaLaptopCode className="text-2xl" />, 
      title: "Project Portfolio", 
      description: "Developed 10+ production applications with focus on scalability and performance" 
    },
  ];

  const expertise = [
    { 
      icon: <FaLinux className="text-2xl" />, 
      title: "Linux Systems", 
      description: "Extensive experience with multiple Linux distributions, currently running Arch Linux with customized configurations" 
    },
    { 
      icon: <FaGithub className="text-2xl" />, 
      title: "Open Source Advocate", 
      description: "Active contributor to open-source projects with a commitment to collaborative software development" 
    },
    { 
      icon: <FaTerminal className="text-2xl" />, 
      title: "System Optimization", 
      description: "Expertise in Linux system configuration, performance tuning, and workflow automation" 
    },
  ];

  const technicalSkills = [
    { 
      icon: <FaUserTie className="text-2xl" />, 
      title: "Problem Analysis", 
      description: "Methodical approach to breaking down complex technical challenges into manageable components" 
    },
    { 
      icon: <FaLightbulb className="text-2xl" />, 
      title: "Innovation", 
      description: "Track record of implementing creative solutions to enhance user experience and system efficiency" 
    },
    { 
      icon: <FaChartLine className="text-2xl" />, 
      title: "Performance Optimization", 
      description: "Expertise in identifying and resolving bottlenecks to improve application performance" 
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-1 w-12 bg-blue-400"></div>
            <h2 className="text-4xl font-mono text-blue-400 tracking-wider">ABOUT ME</h2>
            <div className="h-1 w-12 bg-blue-400"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 text-white mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Summary</h3>
              <p className="text-lg leading-relaxed">
              Hey, I’m Balaji, a software dev who’s equally at home tweaking Linux configs as I am building full-stack apps. Over the last two years I’ve dived into everything from customizing Ubuntu and Fedora to running Arch as my daily driver, so I’m all about squeezing every bit of performance out of a system. I love jumping into open-source projects, experimenting with new ideas (MERN, AI integrations), and turning tricky problems into simple, reliable solutions. Always up for a challenge, I bring curiosity, first-principles thinking, and a collaborative spirit to whatever I work on.
              </p>
              
              <div className="mt-8">
                <a href="/projects" className="inline-block  px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-md font-medium">View My Projects</a>
              </div>
            </div>
            <GlowingBorder>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl transform hover:scale-[1.02] transition-transform">
              <h4 className="text-xl font-semibold text-blue-300 mb-4 text-center">Development Metrics</h4>
              <iframe 
                src="https://github-readme-stats.vercel.app/api?username=balajirkb&show_icons=true&theme=tokyonight&hide_border=true" 
                frameBorder="0"
                className="w-full h-80"
                title="GitHub Statistics"
                ></iframe>
            </div>
                </GlowingBorder>
          </div>
          
          {/* Career Milestones */}

          
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-blue-300 mb-8 text-center">Professional Background</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
          <GlowingBorder>
                <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-blue-400 mb-4 bg-blue-900 bg-opacity-20 p-4 rounded-full">{milestone.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-2">{milestone.title}</h4>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                </GlowingBorder>
              ))}
            </div>
          </div>
          
          {/* Open Source & Linux Expertise */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-blue-300 mb-8 text-center">Open Source & Linux Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <GlowingBorder>
                <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-blue-400 mb-4 bg-blue-900 bg-opacity-20 p-4 rounded-full">{item.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                </GlowingBorder>
              ))}
            </div>
          </div>

          {/* Core Expertise */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-blue-300 mb-8 text-center">Core Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {technicalSkills.map((item, index) => (
                <GlowingBorder>
                <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-blue-400 mb-4 bg-blue-900 bg-opacity-20 p-4 rounded-full">{item.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                </GlowingBorder>
              ))}
            </div>
          </div>
          
          {/* Skills Assessment */}
          <GlowingBorder>
            <div className="border border-blue-400 p-8 rounded-lg bg-blue-900 bg-opacity-20">
              <h3 className="text-2xl font-semibold mb-8 text-center text-blue-300">TECHNICAL PROFICIENCY</h3>
              <div className="grid sm:grid-cols-2 gap-6">
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
      </section>
    </div>
  );
};

export default About;